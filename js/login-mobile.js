const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  if (response.status === 401) {
    localStorage.clear();
    sessionStorage.clear();
    alert("Session expired. Please login again.");
    window.location.replace("./login-page-mobile.html");
    return null;
  }
  return response;
};

async function APIUser() {
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
    return user;
  } catch (e) {
    return null;
  }
}

(async function () {
  const API_BASE_URL = await fetchBaseURL();

  async function handleLogin() {
    const phone = document.querySelector("#login").value.trim();
    const password = document.querySelector("#password").value;

    if (!phone || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/login_user`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();

      if (response.status === 200 && data.status === true && data.message === "LOGIN_SUCCESS") {
        localStorage.setItem("token", data.token);
        await APIUser();
        window.location.replace("./003-index.html");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Login error. Please try again.");
    }
  }

  const loginBtn = document.querySelector(".login-btn-group .nrc-button");
  if (loginBtn) loginBtn.addEventListener("click", handleLogin);
})();
