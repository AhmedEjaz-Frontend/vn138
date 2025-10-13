"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [7926],
  {
    27860: (e, a, t) => {
      var l = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var i = l(t(38239));
      t(38265), (a.default = i.default);
    },
    38239: (e, a, t) => {
      var l = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var i = l(t(46942)),
        o = t(67467),
        r = l(t(94188)),
        n = t(51628),
        s = t(39418),
        c = t(67330),
        d = l(t(42795)),
        m = t(74848);
      const u = t(1215).A,
        { code: p } = r.default.brand,
        g = (e) => e.games.myFavoriteGameList;
      a.default = (e) => {
        let {
          activeTab: a,
          maintenanceMap: t,
          gameQuery: l,
          logined: r,
          launchGame: v,
          setSportsGame: h,
          onScrollChangeGameType: f,
          agentDomain: { appURL: y },
          changeGameQuery: G,
        } = e;
        const b = (0, o.useSelector)(g),
          { Comp: S, height: _ } = (0, d.default)(p, a);
        return (0, m.jsx)("div", {
          className: (0, i.default)("game-block", {}),
          children:
            0 === b.size
              ? (0, m.jsx)("div", {
                  className: "empty-list",
                  children: n.i18n["create.your.own.list"],
                })
              : (0, m.jsx)(u, {
                  activeTab: a,
                  gameList: b,
                  gameListStyle: l.gameListStyle,
                  maintenanceMap: t,
                  launchGame: (e) => {
                    const {
                      producttypeid: a,
                      gameid: t,
                      gameproviderid: l,
                    } = e;
                    (0, s.navToFavoriteGameProviderMobile)(t, a, l, G) || v(e);
                  },
                  logined: r,
                  setSportsGame: h,
                  customGroupSize: c.customGameListGroupSize[p],
                  onScrollChangeGameType: f,
                  childrenHeight: _,
                  children: (0, m.jsx)(S, {
                    appURL: y,
                  }),
                }),
        });
      };
    },
    38265: (e, a, t) => {
      t.r(a);
    },
  },
]);
