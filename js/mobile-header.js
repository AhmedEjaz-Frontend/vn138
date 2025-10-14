// Show/hide loading screen
function showLoading() {
  let loader = document.getElementById('api-loading-screen');
  if (!loader) {
    loader = document.createElement('div');
    loader.id = 'api-loading-screen';
    loader.className = 'app-loading';
    loader.innerHTML = `<div class="main-cont"><div class="brand"><div class="brand-img-wrapper"><img src="./images/logo.png" alt="qata88" class="logo"/></div><h2 class="loading-msg"><span>JOIN VN138</span></h2></div><div class="loading-cont"><img src="./images/loading-ani.svg" alt="loading..." class="loading-icon"/>Loading</div></div>`;
    document.body.appendChild(loader);
  }
  loader.style.display = 'flex';
}

function hideLoading() {
  const loader = document.getElementById('api-loading-screen');
  if (loader) loader.style.display = 'none';
}

async function APIUser() {
  const API_BASE_URL = await fetchBaseURL();
  showLoading();
  try {
    const res = await fetch(`${API_BASE_URL}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    if (!res || res.status !== 200) {
      hideLoading();
      return null;
    }
    const data = await res.json();
    const user = data.user || data;
    const balance = data.balance ?? user.balance ?? user.wallet_balance ?? null;
    localStorage.setItem('user', JSON.stringify(user));
    if (balance !== null) localStorage.setItem('balance', String(balance));
    hideLoading();
    return user;
  } catch (e) {
    hideLoading();
    return null;
  }
}

(async function() {
  const token = localStorage.getItem('token');
  const homeLogin = document.getElementById('home-login');
  const toolsLoggedOut = document.getElementById('tools-logged-out');
  const toolsLoggedIn = document.getElementById('tools-logged-in');
  
  if (token) {
    const userData = await APIUser();
    const fallback = JSON.parse(localStorage.getItem('user') || '{}');
    const balance = userData?.balance || fallback?.balance || '0.00';
    document.getElementById('user-balance').textContent = balance;
    homeLogin.style.display = 'none';
    toolsLoggedOut.style.display = 'none';
    toolsLoggedIn.style.display = 'flex';
  }
})();
