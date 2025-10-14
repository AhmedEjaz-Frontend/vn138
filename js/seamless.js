async function seamlessWithdraw() {
  const API_BASE_URL = await fetchBaseURL();
  try {
    const res = await fetch(
      `${API_BASE_URL}/api/player/points/withdraw/seamless`,
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({}),
      }
    );
    if (!res || res.status !== 200) return null;
    return await res.json();
  } catch (e) {
    return null;
  }
}

async function refreshBalance() {
  const API_BASE_URL = await fetchBaseURL();
  try {
    const res = await fetch(`${API_BASE_URL}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
    if (!res || res.status !== 200) return null;
    const data = await res.json();
    const user = data.user || data;
    const balance = data.balance ?? user.balance ?? user.wallet_balance ?? null;
    localStorage.setItem("user", JSON.stringify(user));
    if (balance !== null) localStorage.setItem("balance", String(balance));
    return balance;
  } catch (e) {
    return null;
  }
}

async function handleReloadBalance() {
  await seamlessWithdraw();
  const balance = await refreshBalance();
  if (balance !== null) {
    const walletEl = document.querySelector(".wallet");
    const balanceEl = document.getElementById("user-balance");
    if (walletEl)
      walletEl.innerHTML = `${balance}<i class="mps-update" style="align-self: center;"></i>`;
    if (balanceEl) balanceEl.textContent = balance;
  }
}
