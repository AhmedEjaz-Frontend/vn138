(function () {
  const PLAYER_NAME_SELECTOR = ".member-center-menu .player-name";
  const PLAYER_ID_SELECTOR = ".member-center-menu .playerid";
  const BALANCE_SELECTOR = ".member-center-menu .balance";

  const formatBalance = (value) => {
    const numeric = Number(value);
    if (!Number.isFinite(numeric)) {
      return value || "0.00";
    }
    return numeric.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const resolveFallbackUser = () => {
    try {
      return JSON.parse(localStorage.getItem("user") || "{}");
    } catch (_error) {
      return {};
    }
  };

  const resolveFallbackBalance = () => {
    const fromStorage = localStorage.getItem("balance");
    if (fromStorage !== null && fromStorage !== undefined) {
      const numeric = Number(fromStorage);
      return Number.isFinite(numeric) ? numeric : fromStorage;
    }
    return null;
  };

  const updateDom = (user, balance) => {
    const fallbackUser = resolveFallbackUser();
    const name =
      user?.user_name ||
      user?.name ||
      fallbackUser.user_name ||
      fallbackUser.name ||
      "Player";
    const userId = user?.name || fallbackUser.name || fallbackUser.id || null;
    const balanceValue =
      balance ??
      user?.balance ??
      user?.wallet_balance ??
      resolveFallbackBalance() ??
      fallbackUser.balance ??
      fallbackUser.wallet_balance ??
      0;

    // document.querySelectorAll(PLAYER_NAME_SELECTOR).forEach((element) => {
    //   element.textContent = name || "Player";
    // });

    document.querySelectorAll(PLAYER_ID_SELECTOR).forEach((element) => {
      element.textContent = userId ? `${userId}` : "ID: --";
    });

    document.querySelectorAll(BALANCE_SELECTOR).forEach((element) => {
      element.textContent = formatBalance(balanceValue);
    });
  };

  const fetchUser = async () => {
    let apiUser = null;

    if (typeof APIUser === "function") {
      try {
        apiUser = await APIUser();
      } catch (error) {
        console.warn("Failed to load user data from API:", error);
      }
    }

    const fallbackUser = resolveFallbackUser();
    const fallbackBalance = resolveFallbackBalance();
    const effectiveUser = apiUser || fallbackUser;
    const effectiveBalance =
      (apiUser && (apiUser.balance ?? apiUser.wallet_balance)) ??
      fallbackBalance ??
      fallbackUser.balance ??
      fallbackUser.wallet_balance ??
      0;

    updateDom(effectiveUser, effectiveBalance);
  };

  document.addEventListener("DOMContentLoaded", fetchUser);
})();
