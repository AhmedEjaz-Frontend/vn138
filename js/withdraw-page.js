(function () {
  let countdownEl = null;
  let reloadButton = null;
  let withdrawButton = null;
  let countdownTimer = null;

  const safeParseUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch (_error) {
      return {};
    }
  };

  const normalizeBalance = (value) => {
    if (value === null || value === undefined) return 0;
    if (typeof value === "number") {
      return Number.isFinite(value) ? value : 0;
    }
    if (typeof value === "string") {
      const cleaned = value.replace(/,/g, "").trim();
      const numeric = Number(cleaned);
      return Number.isFinite(numeric) ? numeric : 0;
    }
    const numeric = Number(value);
    return Number.isFinite(numeric) ? numeric : 0;
  };

  const resolveBalanceFromStorage = () => {
    const stored = localStorage.getItem("balance");
    if (stored === null || stored === undefined) return null;
    const numeric = normalizeBalance(stored);
    return Number.isFinite(numeric) ? numeric : null;
  };

  const formatBalance = (value) => {
    const numeric = normalizeBalance(value);
    return numeric.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const updateSidebarBalance = (balance) => {
    const normalized = normalizeBalance(balance);
    const formatted = formatBalance(normalized);
    document
      .querySelectorAll(".member-center-menu .balance")
      .forEach((element) => {
        element.textContent = formatted;
      });
    try {
      localStorage.setItem("balance", String(normalized));
    } catch (_error) {
      /* ignore storage quota errors */
    }
    return formatted;
  };

  const fetchLatestUser = async () => {
    let apiUser = null;
    if (typeof APIUser === "function") {
      try {
        apiUser = await APIUser();
      } catch (error) {
        console.warn("Unable to fetch user via API:", error);
      }
    }

    const fallbackUser = safeParseUser();
    const fallbackBalance = resolveBalanceFromStorage();

    const userData = apiUser || fallbackUser;
    const balance =
      (apiUser && (apiUser.balance ?? apiUser.wallet_balance)) ??
      fallbackBalance ??
      fallbackUser.balance ??
      fallbackUser.wallet_balance ??
      0;

    try {
      localStorage.setItem("user", JSON.stringify(userData));
    } catch (_error) {
      /* ignore storage errors */
    }

    return { userData, balance: normalizeBalance(balance) };
  };

  const setCountdownText = (text) => {
    if (countdownEl) {
      countdownEl.textContent = text;
    }
  };

  const formatSeconds = (seconds) =>
    `00:${seconds.toString().padStart(2, "0")}`;

  const refreshBalance = async () => {
    const { balance } = await fetchLatestUser();
    const formatted = updateSidebarBalance(balance);
    setCountdownText(`Balance: ${formatted}`);
  };

  const startCountdown = () => {
    if (!reloadButton || !countdownEl) return;
    if (reloadButton.disabled) return;

    let remaining = 10;
    setCountdownText(formatSeconds(remaining));
    reloadButton.disabled = true;
    reloadButton.classList.add("is-disabled");

    countdownTimer = window.setInterval(async () => {
      remaining -= 1;
      if (remaining > 0) {
        setCountdownText(formatSeconds(remaining));
        return;
      }

      window.clearInterval(countdownTimer);
      countdownTimer = null;

      try {
        await refreshBalance();
      } finally {
        reloadButton.disabled = false;
        reloadButton.classList.remove("is-disabled");
      }
    }, 1000);
  };

  const submitWithdrawal = async () => {
    if (!withdrawButton) return;

    if (withdrawButton.disabled) return;

    withdrawButton.disabled = true;

    try {
      if (typeof fetchBaseURL !== "function") {
        throw new Error("Unable to resolve API endpoint.");
      }

      const token = localStorage.getItem("token");
      if (!token) {
        alert("Please login to submit a withdrawal request.");
        return;
      }

      const baseUrl = await fetchBaseURL();
      if (!baseUrl) {
        throw new Error("Unable to resolve API endpoint.");
      }

      const { balance } = await fetchLatestUser();
      if (!balance || balance <= 0) {
        alert("No available balance to withdraw.");
        return;
      }

      const transactionAmount = Math.round(balance * 1000);
      if (!transactionAmount) {
        alert("No available balance to withdraw.");
        return;
      }

      const payload = {
        bank_id: 2944,
        transaction_amount: transactionAmount,
        bank_account_number: "123456789056789",
      };

      const response = await fetch(`${baseUrl}/api/account/withdraw`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(payload),
      });

      let data = null;
      try {
        data = await response.clone().json();
      } catch (_error) {
        /* ignore */
      }

      if (!response.ok) {
        const message =
          (data && (data.message || data.error)) ||
          "Withdrawal request failed. Please try again.";
        throw new Error(message);
      }

      alert(
        "Your request is submitted please wait for it to get for confirmation"
      );
      await refreshBalance();
    } catch (error) {
      console.error("Withdrawal submission error:", error);
      alert(error.message || "Withdrawal failed. Please try again later.");
    } finally {
      withdrawButton.disabled = false;
    }
  };

  const init = () => {
    countdownEl = document.getElementById("withdrawCountdown");
    reloadButton = document.getElementById("withdrawReloadButton");
    withdrawButton = document.querySelector(".nrc-button.to-withdrawal");

    if (reloadButton) {
      reloadButton.addEventListener("click", startCountdown);
    }

    if (withdrawButton) {
      withdrawButton.addEventListener("click", submitWithdrawal);
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();

