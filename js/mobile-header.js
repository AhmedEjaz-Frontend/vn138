async function APIUser() {
  const API_BASE_URL = await fetchBaseURL();
  try {
    const res = await fetch(`${API_BASE_URL}/api/user`, {
      headers: { Authorization: `Bearer ${localStorage.getItem('token')}` },
    });
    if (!res || res.status !== 200) return null;
    const data = await res.json();
    const user = data.user || data;
    const balance = data.balance ?? user.balance ?? user.wallet_balance ?? null;
    localStorage.setItem('user', JSON.stringify(user));
    if (balance !== null) localStorage.setItem('balance', String(balance));
    return user;
  } catch (e) {
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
