// Game ID pool for random assignment
const GAME_ID_POOL = [7, 8, 9, 11, 12, 17, 18, 19, 21, 22, 23, 24];

// Assign random game IDs to all navigation cards
function initializeGameCards() {
  const categories = ['.nav-live', '.nav-sports', '.nav-animal', '.nav-chess', '.nav-egame', '.nav-mpg', '.nav-esports'];
  
  categories.forEach(category => {
    const nav = document.querySelector(category);
    if (!nav) return;
    
    const cards = nav.querySelectorAll('.submenu li a');
    cards.forEach(card => {
      const randomId = GAME_ID_POOL[Math.floor(Math.random() * GAME_ID_POOL.length)];
      card.onclick = () => handleLiveArena('GAME', randomId);
      card.style.cursor = 'pointer';
    });
  });
}

// Initialize on page load
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeGameCards);
} else {
  initializeGameCards();
}
