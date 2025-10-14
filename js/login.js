// Global 401 handler
const originalFetch = window.fetch;
window.fetch = async (...args) => {
  const response = await originalFetch(...args);
  if (response.status === 401) {
    localStorage.clear();
    sessionStorage.clear();
    document.cookie.split(";").forEach((cookie) => {
      const name = cookie.split("=")[0].trim();
      document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
    });
    alert("Session expired. Please login again.");
    window.location.replace("./001-index.html");
    return null;
  }
  return response;
};

// APIUser function
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

// Logout function
async function logout() {
  localStorage.clear();
  sessionStorage.clear();
  document.cookie.split(";").forEach((cookie) => {
    const name = cookie.split("=")[0].trim();
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
  });

  window.location.replace("./001-index.html");
}

// Login functionality
(async function () {
  const API_BASE_URL = await fetchBaseURL();

  async function handleLogin() {
    const phone = document.querySelector(".username-btn").value.trim();
    const password = document.querySelector(".password-btn").value;

    if (!phone || !password) {
      alert("Please enter username and password");
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/api/login_user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({ phone, password }),
      });

      const data = await response.json();

      if (
        response.status === 200 &&
        data.status === true &&
        data.message === "LOGIN_SUCCESS"
      ) {
        localStorage.setItem("token", data.token);
        const userData = await APIUser();
        const fallback = JSON.parse(localStorage.getItem("user") || "{}");

        document.querySelector(".simple-logo-wrap").style.display = "none";
        document.querySelector(".account-tool").style.display = "flex";
        document.querySelector(".wallet").style.display = "flex";
        document.querySelector(".id").textContent =
          userData?.name || fallback?.name;
        document.querySelector(".wallet").innerHTML = `${
          userData?.balance || fallback?.balance || "0.00"
        }<i class="mps-update" onclick="handleReloadBalance()" style="cursor: pointer; align-self: center;"></i>`;
        document.querySelectorAll(".logined-nav li").forEach((li, i) => {
          if (i === 2 || i === 3) li.style.display = "none";
        });
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Login error. Please try again.");
    }
  }

  const loginBtn = document.querySelector(".header-btn.login");
  if (loginBtn) {
    loginBtn.addEventListener("click", handleLogin);
  }

  const logoutBtn = document.querySelector(".btn-logout");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", logout);
  }

  // Check if already logged in
  const token = localStorage.getItem("token");
  if (token) {
    const userData = await APIUser();
    const fallback = JSON.parse(localStorage.getItem("user") || "{}");
    document.querySelector(".simple-logo-wrap").style.display = "none";
    document.querySelector(".account-tool").style.display = "flex";
    document.querySelector(".wallet").style.display = "flex";
    document.querySelector(".id").textContent =
      userData?.name || fallback?.name;
    document.querySelector(".wallet").innerHTML = `${
      userData?.balance || fallback?.balance || "0.00"
    }<i class="mps-update" onclick="handleReloadBalance()" style="cursor: pointer; align-self: center;"></i>`;
    document.querySelectorAll(".logined-nav li").forEach((li, i) => {
      if (i === 2 || i === 3) li.style.display = "none";
    });
  }
})();
