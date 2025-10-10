(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1420],
  {
    1420: (e, n, o) => {
      "use strict";
      o.r(n),
        o.d(n, {
          default: () => t,
        });
      const t = () => null;
    },
    30576: (e, n, o) => {
      "use strict";
      const t = () => {
        const e = document.querySelector(".app-loading");
        e && e.remove();
        const n = document.querySelector(".app-failure");
        n && n.remove();
        const o = document.getElementById("root");
        o && (o.style.display = "block");
      };
      "loading" === document.readyState
        ? window.addEventListener("DOMContentLoaded", t, { once: !0 })
        : t();
    },
  },
]);
