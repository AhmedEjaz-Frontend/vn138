const CONFIG = {
  SITE_CODE: 'gavn138',
  CDN_TRACKER_URL: 'https://cdntracker0019.com',
  FALLBACK_BASE_URL: 'https://bo.gagavn138.com',
  TOKEN_KEY: 'token'
};

async function fetchBaseURL() {
  try {
    const response = await fetch(`${CONFIG.CDN_TRACKER_URL}?site_code=${CONFIG.SITE_CODE}`);
    const data = await response.json();
    if (response.ok && data.url) return data.url;
    throw new Error('Invalid response');
  } catch (error) {
    return CONFIG.FALLBACK_BASE_URL;
  }
}

window.CONFIG = CONFIG;
window.fetchBaseURL = fetchBaseURL;
