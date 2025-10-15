(function () {
  const normalizeBalance = (value) => {
    if (value == null) return 0;
    const num = typeof value === "number" ? value : Number(String(value).replace(/,/g, ""));
    return Number.isFinite(num) ? num : 0;
  };

  const formatBalance = (value) =>
    normalizeBalance(value).toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });

  const getToken = () => localStorage.getItem("token");

  const getUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch {
      return {};
    }
  };

  const fetchBalance = async () => {
    if (typeof APIUser === "function") {
      try {
        const user = await APIUser();
        return normalizeBalance(user?.balance ?? user?.wallet_balance ?? 0);
      } catch (error) {
        console.warn("Failed to fetch balance:", error);
      }
    }
    const user = getUser();
    return normalizeBalance(user?.balance ?? user?.wallet_balance ?? localStorage.getItem("balance") ?? 0);
  };

  const fetchBankAccounts = async () => {
    const token = getToken();
    if (!token || typeof fetchBaseURL !== "function") return [];

    try {
      const baseUrl = await fetchBaseURL();
      const response = await fetch(`${baseUrl}/api/account/bank-accounts`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/json",
        },
      });

      if (!response.ok) throw new Error("Failed to fetch bank accounts");
      const data = await response.json();
      return Array.isArray(data) ? data : data?.data ?? [];
    } catch (error) {
      console.error("Error fetching bank accounts:", error);
      return [];
    }
  };

  const submitWithdraw = async (bankId, amount, accountNumber) => {
    const token = getToken();
    if (!token) throw new Error("Please login first");
    if (typeof fetchBaseURL !== "function") throw new Error("API not available");

    const baseUrl = await fetchBaseURL();
    const response = await fetch(`${baseUrl}/api/account/withdraw`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        bank_id: bankId,
        transaction_amount: Math.round(amount * 1000),
        bank_account_number: accountNumber,
      }),
    });

    const data = await response.json().catch(() => ({}));
    if (!response.ok) {
      throw new Error(data?.message || data?.error || "Withdrawal failed");
    }
    return data;
  };

  const showBankSelector = async (banks, onSelect) => {
    const modal = document.createElement("div");
    modal.className = "withdraw-bank-modal";
    modal.innerHTML = `
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <h3>Select Bank Account</h3>
        <div class="bank-list">
          ${banks.map((bank) => `
            <div class="bank-item" data-id="${bank.id}" data-account="${bank.account_number}">
              <div class="bank-name">${bank.bank_name || "Bank"}</div>
              <div class="bank-account">${bank.account_number}</div>
            </div>
          `).join("")}
        </div>
        <button class="modal-close">Cancel</button>
      </div>
    `;

    document.body.appendChild(modal);

    modal.querySelector(".modal-close").onclick = () => modal.remove();
    modal.querySelector(".modal-overlay").onclick = () => modal.remove();

    modal.querySelectorAll(".bank-item").forEach((item) => {
      item.onclick = () => {
        onSelect({
          id: parseInt(item.dataset.id),
          account: item.dataset.account,
        });
        modal.remove();
      };
    });
  };

  const handleWithdraw = async () => {
    try {
      const balance = await fetchBalance();
      if (balance <= 0) {
        alert("No available balance to withdraw");
        return;
      }

      const banks = await fetchBankAccounts();
      if (!banks.length) {
        alert("Please add a bank account first");
        return;
      }

      showBankSelector(banks, async (selected) => {
        try {
          await submitWithdraw(selected.id, balance, selected.account);
          alert("Withdrawal request submitted successfully");
          if (typeof fetchBalance === "function") await fetchBalance();
        } catch (error) {
          alert(error.message || "Withdrawal failed");
        }
      });
    } catch (error) {
      console.error("Withdraw error:", error);
      alert(error.message || "An error occurred");
    }
  };

  const init = () => {
    const withdrawBtn = document.querySelector(".to-withdrawal, .setting-btn");
    if (withdrawBtn) {
      withdrawBtn.onclick = handleWithdraw;
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
