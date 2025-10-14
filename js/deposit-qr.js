(function () {
  const AMOUNT_INPUT_ID = "depositamt";
  const GENERATE_BUTTON_ID = "generateQrButton";
  const QUICK_BUTTON_SELECTOR = ".mc-quick-input-button";

  const formatButtonLabel = (button) => {
    const text = button.dataset.originalText || button.textContent;
    return text.trim();
  };

  const setButtonState = (button, isLoading) => {
    if (!button) return;

    if (!button.dataset.originalText) {
      button.dataset.originalText = button.textContent.trim();
    }

    button.disabled = isLoading;
    button.classList.toggle("is-loading", isLoading);
    button.textContent = isLoading ? "Processing..." : formatButtonLabel(button);
  };

  const parseAmountValue = (rawValue) => {
    if (typeof rawValue !== "string") return Number(rawValue) || 0;
    const digits = rawValue.replace(/[^0-9.]/g, "");
    return Number(digits) || 0;
  };

  const attachQuickAmountHandlers = (amountInput) => {
    if (!amountInput) return;
    const quickButtons = document.querySelectorAll(QUICK_BUTTON_SELECTOR);
    if (!quickButtons.length) return;

    quickButtons.forEach((button) => {
      button.addEventListener("click", (event) => {
        event.preventDefault();
        const value = parseAmountValue(button.textContent);
        if (!value) return;
        amountInput.value = value;
        amountInput.dispatchEvent(new Event("input", { bubbles: true }));
      });
    });
  };

  const callDepositAPI = async (transactionAmount) => {
    if (typeof fetchBaseURL !== "function") {
      throw new Error("Base URL resolver is unavailable.");
    }

    const baseUrl = await fetchBaseURL();
    if (!baseUrl) {
      throw new Error("Unable to resolve API base URL.");
    }

    const token = localStorage.getItem("token");
    if (!token) {
      throw new Error("Please login to submit a deposit request.");
    }

    const payload = {
      transaction_amount: transactionAmount,
      bank_id: 41,
      payment_method: 6,
      payment_method_code: "KPAY",
      category_id: 3,
      category_code: "BANK_TRANSFER",
    };

    const response = await fetch(`${baseUrl}/api/account/deposit`, {
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
      // Ignore JSON parse errors; some APIs return empty bodies.
    }

    if (!response.ok) {
      const message =
        (data && (data.message || data.error)) ||
        "Deposit request failed. Please try again.";
      throw new Error(message);
    }

    return data;
  };

  const attachGenerateHandler = (amountInput, generateButton) => {
    if (!amountInput || !generateButton) return;

    generateButton.addEventListener("click", async (event) => {
      event.preventDefault();

      const amount = parseAmountValue(amountInput.value);
      if (!amount || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
      }

      const transactionAmount = amount * 1000;

      setButtonState(generateButton, true);

      try {
        await callDepositAPI(transactionAmount);
        alert(
          "Your request is submitted. Support will soon approve your request. For any query contact support."
        );
      } catch (error) {
        console.error("Deposit submission error:", error);
        alert(error.message || "Deposit failed. Please try again later.");
      } finally {
        setButtonState(generateButton, false);
      }
    });
  };

  document.addEventListener("DOMContentLoaded", () => {
    const amountInput = document.getElementById(AMOUNT_INPUT_ID);
    const generateButton = document.getElementById(GENERATE_BUTTON_ID);

    attachQuickAmountHandlers(amountInput);
    attachGenerateHandler(amountInput, generateButton);
  });
})();
