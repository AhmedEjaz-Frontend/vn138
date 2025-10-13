// Live Arena handler
async function handleLiveArena(platform, gameId) {
  const token = localStorage.getItem('token');
  if (!token) {
    alert('Please login first');
    return;
  }

  try {
    const BaseUrl = await fetchBaseURL();
    const userRaw = localStorage.getItem('user');
    let isSeamlessEnabled = false;
    
    if (userRaw) {
      const user = JSON.parse(userRaw);
      isSeamlessEnabled = user?.seamless?.isTransfer || false;
    }

    // Seamless withdraw if enabled
    if (isSeamlessEnabled) {
      await fetch(`${BaseUrl}/api/player/points/withdraw/seamless`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Accept': 'application/json'
        }
      });
    }

    // Get user balance
    const userBalance = await APIUser();
    const balance = userBalance?.balance || 0;
    const isDaga = platform === 'SV388';

    if (isDaga) {
      // Daga: deposit API (30 points = 1 unit)
      const pointsRatio = Math.trunc(balance / 30) * 30;
      
      if (pointsRatio === 0) {
        alert('Insufficient balance to play the game.');
        return;
      }

      const res = await fetch(`${BaseUrl}/api/player/daga/deposit`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ amount: pointsRatio })
      });

      const data = await res.json();
      if (data.status === true) {
        await APIUser();
        alert('Deposit successful');
      }
    } else {
      // Wala88: login API
      const res = await fetch(`${BaseUrl}/api/player/game/login`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({ game_id: gameId, amount: balance })
      });

      const data = await res.json();
      if (data.link || data.game_url) {
        window.location.href = data.link || data.game_url;
      }
    }
  } catch (err) {
    console.error('Game launch error:', err);
    alert('Failed to launch game');
  }
}
