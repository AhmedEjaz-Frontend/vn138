"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [4897],
  {
    3106: (e, a, t) => {
      t.r(a);
    },
    37245: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var l = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              l = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return l;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, l);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(l, a, r)
                  : (l[a] = e[a]));
            return l;
          })(e);
        })(t(96540)),
        o = r(t(46942)),
        i = t(51628),
        n = r(t(94188)),
        s = r(t(30907)),
        u = t(71850),
        c = t(74848);
      const { categoriesPage: d, categoriesHomePage: g } =
        n.default.brand.customMobile;
      a.default = (e) => {
        let {
          gameProviderMap: a,
          gameQuery: t,
          changeGameQuery: r,
          gplogoStyle: m,
        } = e;
        const p = (0, l.useRef)(null),
          { activeTab: f, provider: v } = t,
          y = n.default.brand.customMobile.gpIconStyle || m || "icon-dark",
          h = (0, l.useMemo)(() => {
            let e = a.get(f);
            return e && e.size > 0 ? e.keySeq().toArray() : null;
          }, [a, f]);
        return (
          (0, l.useEffect)(() => {
            if ((0, u.getProviderOrGameAutoScrollList)(f) && p.current) {
              const e = document.querySelector(".app-home").classList,
                a = u.withHorizontalProvidersTemplate.some((a) => e.contains(a))
                  ? {
                      block: "nearest",
                      inline: "center",
                    }
                  : {
                      block: "center",
                    };
              p.current.scrollIntoView(a);
            }
          }, [p.current]),
          h
            ? (0, c.jsxs)("ul", {
                className: `game-providers ${f} ${v}`,
                children: [
                  (0, c.jsxs)("li", {
                    className: (0, o.default)("all", {
                      active: null === v,
                    }),
                    onClick: () => {
                      r(
                        d
                          ? {
                              type: "CATEGORIES",
                            }
                          : g
                          ? {
                              type: "ROOT",
                            }
                          : {
                              provider: null,
                              showGameList: !1,
                            }
                      );
                    },
                    children: [
                      (0, c.jsx)("div", {}),
                      (0, c.jsx)("div", {
                        className: "game-provider-title",
                        children: i.i18n["all.gameprovider"],
                      }),
                    ],
                  }),
                  h.map((e) =>
                    (0, c.jsxs)(
                      "li",
                      {
                        className: (0, o.default)(e, {
                          active: e === v,
                        }),
                        ...(e === v
                          ? {
                              ref: p,
                            }
                          : {}),
                        onClick: () => {
                          var a;
                          r({
                            provider: e,
                            showGameList: !0,
                          }),
                            null ===
                              (a =
                                document.getElementsByClassName(
                                  "egame-list"
                                )[0]) ||
                              void 0 === a ||
                              a.scrollTo(0, 0);
                        },
                        children: [
                          (0, c.jsx)("div", {
                            className: `game-provider-icon ${e}`,
                            style: {
                              background: `url(https://img.alltocon.com/img/static/gplogo/${y}/${e.toLowerCase()}.png) 3px center/auto 90% no-repeat`,
                            },
                          }),
                          (0, c.jsx)(s.default, {
                            provider: e,
                            children: (e) =>
                              (0, c.jsx)("div", {
                                className: "game-provider-title",
                                children: e,
                              }),
                          }),
                        ],
                      },
                      e
                    )
                  ),
                ],
              })
            : null
        );
      };
    },
    46333: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var l = r(t(58577));
      t(3106), (a.default = l.default);
    },
    52006: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          !(function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              l = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return l;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, l);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(l, a, r)
                  : (l[a] = e[a]));
          })(e);
        })(t(96540));
      var l = r(t(46942)),
        o = t(67467),
        i = t(93185),
        n = t(8087),
        s = r(t(55665)),
        u = t(51628),
        c = t(84707),
        d = t(86830),
        g = t(35781);
      t(97702), t(16601);
      var m = t(74848);
      a.default = (e) => {
        let { gameTags: a, gameQuery: t, changeGameQuery: r } = e;
        const { activeTab: p, tag: f, showGameList: v } = t,
          y = (0, o.useDispatch)(),
          h = (0, s.default)((e) => e.players.logined);
        return null !== f && a
          ? (0, m.jsx)("div", {
              className: "sub-menu-box",
              children: (0, m.jsx)(d.Swiper, {
                className: "sub-menu",
                slidesPerView: "auto",
                modules: [g.Navigation],
                children: a.map((e) => {
                  const a = e.get("tagid");
                  return (0, m.jsx)(
                    d.SwiperSlide,
                    {
                      className: (0, l.default)("sub-menu-item", {
                        current: a === f,
                      }),
                      onClick: () => {
                        a !== f &&
                          (h || a !== n.gameTagEnum.FAVORITE
                            ? r({
                                tag: a,
                                showGameList: !0,
                              })
                            : y(
                                (0, c.openErrorModal)(u.i18n["require.login"])
                              ));
                      },
                      children: (0, i.getName)(e.get("tagname")),
                    },
                    a
                  );
                }),
              }),
            })
          : null;
      };
    },
    58577: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var l = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              l = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return l;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, l);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(l, a, r)
                  : (l[a] = e[a]));
            return l;
          })(e);
        })(t(96540)),
        o = r(t(46942)),
        i = r(t(83106)),
        n = r(t(52006)),
        s = r(t(37245)),
        u = r(t(80519)),
        c = r(t(21856)),
        d = t(51628),
        g = r(t(94188)),
        m = r(t(42795)),
        p = t(74848);
      const { code: f } = g.default.brand,
        v = t(1215).A;
      a.default = (e) => {
        let {
          activeTab: a,
          providers: t,
          gpLogoStyle: r,
          maintenanceMap: g,
          gameQuery: y,
          changeGameQuery: h,
          logined: M,
          gameTypeMap: j,
          launchGame: b,
          gameProviderMap: _,
          gameTagsMap: w,
          getGameTags: x,
          isFullScroller: L,
          agentDomain: { appURL: G },
        } = e;
        (0, l.useEffect)(() => {
          w || x();
        }, []);
        const { gameList: T, gameTags: k } = (0, i.default)(y),
          { Comp: O } = (0, m.default)(f, a);
        return (0, p.jsx)("div", {
          className: (0, o.default)("game-block", {
            "game-list": y.showGameList,
          }),
          children: y.showGameList
            ? (() => {
                const { tag: e, gameListStyle: a, provider: t } = y;
                var l = null;
                if (r) {
                  const e = r.split("-");
                  l = "yabo" === e[1] ? "primary" : e[1];
                }
                let o = {};
                return (
                  null != L && (o.isFullScroller = L),
                  (0, p.jsxs)(p.Fragment, {
                    children: [
                      (0, p.jsx)(s.default, {
                        gameProviderMap: _,
                        gameQuery: y,
                        changeGameQuery: h,
                        gplogoStyle: l ? `icon-${l}` : l,
                      }),
                      (0, p.jsx)(n.default, {
                        gameTags: k,
                        gameQuery: y,
                        changeGameQuery: h,
                      }),
                      (0, p.jsx)(u.default, {
                        gameQuery: y,
                        changeGameQuery: h,
                      }),
                      (0, p.jsx)(
                        v,
                        {
                          gameList: T,
                          provider: t,
                          gameListStyle: a,
                          maintenanceMap: g,
                          launchGame: b,
                          logined: M,
                          tag: e,
                          gameTags: k,
                          ...o,
                        },
                        `${e}_${t}`
                      ),
                    ],
                  })
                );
              })()
            : (0, p.jsxs)(p.Fragment, {
                children: [
                  (0, p.jsx)("div", {
                    className: "home-cate",
                    id: null == a ? void 0 : a.toLowerCase(),
                  }),
                  (0, p.jsx)("div", {
                    className: "home-list",
                    "data-type": d.i18n[a],
                    children:
                      t &&
                      t.map((e) =>
                        (0, p.jsx)(
                          c.default,
                          {
                            activeTab: a,
                            provider: e,
                            gpLogoStyle: r,
                            gameTypeMap: j,
                            maintenanceMap: g,
                            gameProviderMap: _,
                            launchGame: b,
                            changeGameQuery: h,
                          },
                          `${a}-${e}`
                        )
                      ),
                  }),
                  (0, p.jsx)(O, {
                    appURL: G,
                  }),
                ],
              }),
        });
      };
    },
    80519: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var l = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              l = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return l;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, l);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(l, a, r)
                  : (l[a] = e[a]));
            return l;
          })(e);
        })(t(96540)),
        o = r(t(46942)),
        i = t(74848);
      a.default = (e) => {
        let { gameQuery: a, changeGameQuery: t } = e;
        const r = (0, l.useCallback)(
            (e) => {
              13 === e.keyCode &&
                t({
                  search: e.target.value,
                  showGameList: !0,
                });
            },
            [t]
          ),
          { tag: n, provider: s, activeTab: u, gameListStyle: c } = a;
        return (0, i.jsxs)("div", {
          className: "search-bar-box",
          children: [
            (0, i.jsx)(
              "input",
              {
                className: "input",
                onKeyUp: r,
              },
              `input-${u}-${n}-${s}`
            ),
            (0, i.jsx)("div", {
              className: (0, o.default)("grids-style", {
                active: 2 === c,
              }),
              onClick: () => {
                t({
                  gameListStyle: 2,
                  showGameList: !0,
                });
              },
              children: (0, i.jsx)("span", {}),
            }),
            (0, i.jsx)("div", {
              className: (0, o.default)("list-style", {
                active: 1 === c,
              }),
              onClick: () => {
                t({
                  gameListStyle: 1,
                  showGameList: !0,
                });
              },
              children: (0, i.jsx)("span", {}),
            }),
          ],
        });
      };
    },
    83106: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var l = t(96540),
        o = r(t(55665)),
        i = t(9404),
        n = t(8087),
        s = t(93185),
        u = t(39418);
      a.default = (e) => {
        const { search: a, tag: t, activeTab: r, provider: c } = e,
          {
            gameTypeMap: d,
            gameTagsMap: g,
            myFavoriteGameGroupMap: m,
          } = (0, o.default)((e) => ({
            gameTypeMap: e.games.gameTypeMap,
            gameTagsMap: e.games.gameTagsMap,
            myFavoriteGameGroupMap: e.games.myFavoriteGameGroupMap,
          })),
          p = (0, l.useMemo)(
            () => (g ? (null == g ? void 0 : g.get(r)) : (0, i.List)()),
            [g]
          ),
          f = (0, l.useMemo)(() => {
            let e =
              t === n.gameTagEnum.FAVORITE
                ? m
                    .get(r, (0, i.List)())
                    .filter(
                      (e) => !(0, u.isFavoriteGameProvider)(e.get("gameid"))
                    )
                : d.get(r, (0, i.List)());
            return (
              c && (e = e.filter((e) => e.get("gameproviderid") === c)),
              a &&
                (e = e.filter(
                  (e) =>
                    (0, s.getName)(e.get("gamename"))
                      .toLowerCase()
                      .indexOf(a.toLowerCase()) > -1
                )),
              !!p &&
                (e = (0, u.getSortedTagGameList)({
                  gameTags: p,
                  gameList: e,
                  tagid: t,
                })),
              e
            );
          }, [t, m, r, d, c, a, p]);
        return {
          gameTags: p,
          gameList: f,
        };
      };
    },
  },
]);
