"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [7784],
  {
    32177: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              r = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return r;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, r);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((n =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (n.get || n.set)
                  ? a(r, t, n)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(96540)),
        o = a(19593),
        l = n(a(46942)),
        i = a(67467),
        u = n(a(94188)),
        c = a(67330),
        p = n(a(42795)),
        s = a(74848);
      const d = a(1215).A,
        { code: f } = u.default.brand,
        m = (e) => e.games.hotGameTypeMap;
      t.default = (e) => {
        let {
          activeTab: t,
          maintenanceMap: a,
          gameQuery: n,
          logined: u,
          launchGame: g,
          setSportsGame: h,
          onScrollChangeGameType: v,
          agentDomain: { appURL: y },
          changeGameQuery: b,
        } = e;
        const _ = (0, i.useSelector)(m).get(t),
          { Comp: G, height: M } = (0, p.default)(f, t),
          j = (e) => {
            const { producttypeid: t, gameid: a, gameproviderid: n } = e;
            (0, o.navToHotGameProviderMobile)(a, t, n, b) || g(e);
          },
          S = (0, r.useMemo)(
            () =>
              _
                ? (0, s.jsx)(s.Fragment, {
                    children: (0, s.jsx)(d, {
                      activeTab: t,
                      gameList: _,
                      gameListStyle: n.gameListStyle,
                      maintenanceMap: a,
                      launchGame: j,
                      logined: u,
                      setSportsGame: h,
                      customGroupSize: c.customGameListGroupSize[f],
                      onScrollChangeGameType: v,
                      childrenHeight: M,
                      children: (0, s.jsx)(G, {
                        appURL: y,
                      }),
                    }),
                  })
                : null,
            [_]
          );
        return (0, s.jsx)("div", {
          className: (0, l.default)("game-block", {}),
          children: S,
        });
      };
    },
    51211: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = n(a(32177));
      t.default = r.default;
    },
  },
]);
