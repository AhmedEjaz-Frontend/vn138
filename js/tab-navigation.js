document.addEventListener("DOMContentLoaded", function () {
  new Swiper("#Swiper-nav", {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 0,
  });

  const tabs = document.querySelectorAll(".nav-anchor");
  const categories = document.querySelectorAll(".home-list");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-code");
      categories.forEach((cat) => {
        cat.style.display =
          cat.getAttribute("data-type") === category ? "grid" : "none";
      });
    });
  });

  // Set initial display on page load
  const activeTab = document.querySelector(".nav-anchor.active");
  if (activeTab) {
    const initialCategory = activeTab.getAttribute("data-code");
    categories.forEach((cat) => {
      cat.style.display = cat.getAttribute("data-type") === initialCategory ? "grid" : "none";
    });
  }
});
