document.addEventListener("DOMContentLoaded", function () {
  new Swiper("#Swiper-nav", {
    slidesPerView: "auto",
    freeMode: true,
    spaceBetween: 0,
  });

  const tabs = document.querySelectorAll(".nav-anchor");
  const gameItems = document.querySelectorAll(".game-item");

  tabs.forEach((tab) => {
    tab.addEventListener("click", function () {
      tabs.forEach((t) => t.classList.remove("active"));
      this.classList.add("active");

      const category = this.getAttribute("data-code");
      const categoryMap = {
        HOT_GAMES: ["via_casino", "sexybcrt"],
        LIVE: ["via_casino", "wm", "db_live", "ag", "sexybcrt", "dg", "allbet", "bbin", "ebet", "evo", "mg", "motivation", "onlive", "pp", "pt", "wg_live"],
        SPORTS: ["saba", "sbobet", "cmdbet", "bti", "panda_sports", "im_sports", "ugaming", "lucky_sports", "pinnacle", "three_sing", "afb_sports", "wg_sports"],
        ANIMAL: ["ga28", "od_cock", "rcb", "wcc"],
        CHESS: ["evoplay", "lc", "rich88", "kingmaker", "bbin2", "btgaming", "card365", "cq9", "eazy_gaming", "jdb", "jili", "mg", "pt", "rg"],
        EGAME: ["evoplay", "mg", "cq9"],
        MPG: ["splus", "jdb", "cq9"],
        ESPORTS: ["tf", "db_esports", "motivation", "saba"]
      };
      const imgMap = {
        "via_casino-LIVE": "./images/sub-live-via_casino.png",
        "wm-LIVE": "./images/sub-live-wm.png",
        "db_live-LIVE": "./images/sub-live-db_live.png",
        "ag-LIVE": "./images/sub-live-ag.png",
        "sexybcrt-LIVE": "./images/sub-live-sexybcrt.png",
        "dg-LIVE": "./images/sub-live-dg.png",
        "allbet-LIVE": "./images/sub-live-allbet.png",
        "bbin-LIVE": "./images/sub-live-bbin.png",
        "ebet-LIVE": "./images/sub-live-ebet.png",
        "evo-LIVE": "./images/sub-live-evo.png",
        "mg-LIVE": "./images/sub-live-mg.png",
        "motivation-LIVE": "./images/sub-live-motivation.png",
        "onlive-LIVE": "./images/sub-live-onlive.png",
        "pp-LIVE": "./images/sub-live-pp.png",
        "pt-LIVE": "./images/sub-live-pt.png",
        "wg_live-LIVE": "./images/sub-live-wg_live.png",
        "saba-SPORTS": "./images/sub-sports-saba.png",
        "sbobet-SPORTS": "./images/sub-sports-sbobet.png",
        "cmdbet-SPORTS": "./images/sub-sports-cmdbet.png",
        "bti-SPORTS": "./images/sub-sports-bti.png",
        "panda_sports-SPORTS": "./images/sub-sports-panda_sports.png",
        "im_sports-SPORTS": "./images/sub-sports-im_sports.png",
        "ugaming-SPORTS": "./images/sub-sports-ugaming.png",
        "lucky_sports-SPORTS": "./images/sub-sports-lucky_sports.png",
        "pinnacle-SPORTS": "./images/sub-sports-pinnacle.png",
        "three_sing-SPORTS": "./images/sub-sports-three_sing.png",
        "afb_sports-SPORTS": "./images/sub-sports-afb_sports.png",
        "wg_sports-SPORTS": "./images/sub-sports-wg_sports.png",
        "ga28-ANIMAL": "./images/sub-animal-ga28.png",
        "od_cock-ANIMAL": "./images/sub-animal-od_cock.png",
        "rcb-ANIMAL": "./images/sub-animal-rcb.png",
        "wcc-ANIMAL": "./images/sub-animal-wcc.png",
        "evoplay-CHESS": "./images/sub-chess-evoplay.png",
        "lc-CHESS": "./images/sub-chess-lc.png",
        "rich88-CHESS": "./images/sub-chess-rich88.png",
        "kingmaker-CHESS": "./images/sub-chess-kingmaker.png",
        "bbin2-CHESS": "./images/sub-chess-bbin2.png",
        "btgaming-CHESS": "./images/sub-chess-btgaming.png",
        "card365-CHESS": "./images/sub-chess-card365.png",
        "cq9-CHESS": "./images/sub-chess-cq9.png",
        "eazy_gaming-CHESS": "./images/sub-chess-eazy_gaming.png",
        "jdb-CHESS": "./images/sub-chess-jdb.png",
        "jili-CHESS": "./images/sub-chess-jili.png",
        "mg-CHESS": "./images/sub-chess-mg.png",
        "pt-CHESS": "./images/sub-chess-pt.png",
        "rg-CHESS": "./images/sub-chess-rg.png",
        "evoplay-EGAME": "./images/sub-egame-evoplay.png",
        "mg-EGAME": "./images/sub-egame-mg.png",
        "cq9-EGAME": "./images/sub-egame-cq9.png",
        "splus-MPG": "./images/sub-mpg-splus.png",
        "jdb-MPG": "./images/sub-mpg-jdb.png",
        "cq9-MPG": "./images/sub-mpg-cq9.png",
        "tf-ESPORTS": "./images/sub-esports-tf.png",
        "db_esports-ESPORTS": "./images/sub-esports-db_esports.png",
        "motivation-ESPORTS": "./images/sub-esports-motivation.png",
        "saba-ESPORTS": "./images/sub-esports-saba.png"
      };

      gameItems.forEach((item) => {
        const itemGp = item.getAttribute("data-gp");
        const providers = categoryMap[category];
        const show = providers && providers.includes(itemGp);
        item.style.display = show ? "block" : "none";
        if (show && category !== "HOT_GAMES") {
          const cover = item.querySelector(".game-col-cover");
          const imgSrc = imgMap[`${itemGp}-${category}`];
          if (cover && imgSrc) cover.style.backgroundImage = `url('${imgSrc}')`;
        }
      });
    });
  });
});
