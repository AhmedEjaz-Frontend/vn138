const GAME_ID_POOL = [7, 8, 9, 11, 12, 17, 18, 19, 22, 23];

function initializeGameCards() {
  const desktopCategories = [
    ".nav-live",
    ".nav-sports",
    ".nav-animal",
    ".nav-chess",
    ".nav-egame",
    ".nav-mpg",
    ".nav-esports",
  ];

  desktopCategories.forEach((category) => {
    const nav = document.querySelector(category);
    if (!nav) return;
    const cards = nav.querySelectorAll(".submenu li a");
    cards.forEach((card) => {
      const randomId =
        GAME_ID_POOL[Math.floor(Math.random() * GAME_ID_POOL.length)];
      card.onclick = () => handleLiveArena("GAME", randomId);
      card.style.cursor = "pointer";
    });
  });

  const mobileCards = document.querySelectorAll(".game-item-game");
  mobileCards.forEach((card) => {
    let gameId;
    if (card.classList.contains("SV388")) {
      gameId = 21;
    } else if (card.classList.contains("WALA88")) {
      gameId = 24;
    } else {
      gameId = GAME_ID_POOL[Math.floor(Math.random() * GAME_ID_POOL.length)];
    }
    card.onclick = () =>
      handleLiveArena(
        gameId === 21 ? "SV388" : gameId === 24 ? "WALA88" : "GAME",
        gameId
      );
    card.style.cursor = "pointer";
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeGameCards);
} else {
  initializeGameCards();
}
