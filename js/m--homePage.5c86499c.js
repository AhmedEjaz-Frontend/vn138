"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [5838],
  {
    3858: (e, a, t) => {
      t.r(a);
    },
    23156: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var o = i(t(94188)),
        r = t(78106),
        s = t(67467),
        n = t(38560),
        l = i(t(15062));
      const { custom: d, customMobile: p } = o.default.brand;
      a.default = () => {
        const e = (0, r.useHistory)(),
          a = (0, s.useSelector)((e) => e.players.logined),
          t = n.isDesktop && d.casinoPage,
          i = n.isMobile && p.casinoPage,
          o = t || i;
        return {
          redirectToCasinoPage: () => {
            t && e.push(l.default.DESKTOP_CASINO_PAGE),
              i && e.push(l.default.CASINO_PAGE);
          },
          isCasinoPage: o,
          isLaunchViaGame: (e) => o && "VIA_CASINO" === e && a,
        };
      };
    },
    31011: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var o = i(t(94188)),
        r = i(t(55665)),
        s = t(38560);
      const {
        brand: {
          custom: {
            components: { Live: n },
          },
          customMobile: {
            components: { Live: l },
          },
        },
      } = o.default;
      a.default = () => {
        const { isLiveSeparateGames: e } = (0, r.default)((e) => ({
          isLiveSeparateGames: e.games.isLiveSeparateGames,
        }));
        return {
          isUseLiveSeparateGames:
            (s.isMobile
              ? ["template-col1-gpk"].includes(l)
              : ["live4"].includes(n)) && e,
        };
      };
    },
    43742: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        i(t(96540));
      var o = t(67467),
        r = t(70913),
        s = t(51628),
        n = t(93185),
        l = t(74848);
      const d = (0, o.connect)(
        (e) => ({
          maintenanceMap: e.games.maintenanceMap,
        }),
        null
      )((e) => {
        const {
            maintenanceMap: a,
            producttypeid: t,
            gameproviderid: i,
            displayMessage: o = !0,
          } = e,
          d = (0, n.isMaintenance)(a, [t, i]),
          p = d ? a.getIn([t, i]) : null,
          c = null == p ? void 0 : p.get("nextstarttime"),
          m = null == p ? void 0 : p.get("nextendtime"),
          u = null == p ? void 0 : p.get("notifyafterfinished"),
          g = p ? p.getIn(["message", s.currLocale]) || "" : null;
        return d
          ? (0, l.jsxs)("div", {
              className: `maintenance-block ${s.currLocale}`,
              children: [
                c &&
                  m &&
                  (0, l.jsx)("div", {
                    className: "time",
                    children: (0, n.i18nVariables)(
                      s.i18n["maintenance.duration"],
                      {
                        STARTTIME: (0, r.formatDateTime)(c),
                        ENDTIME: (0, r.formatDateTime)(m),
                      }
                    ),
                  }),
                c &&
                  u &&
                  (0, l.jsx)("div", {
                    className: "time",
                    children: (0, n.i18nVariables)(
                      s.i18n["maintenance.notifyafterfinished"],
                      {
                        STARTTIME: (0, r.formatDateTime)(c),
                      }
                    ),
                  }),
                o &&
                  (0, l.jsx)("div", {
                    className: "message",
                    children: g,
                  }),
              ],
            })
          : null;
      });
      a.default = d;
    },
    49352: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              i,
              o = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return o;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, o);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((i =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (i.get || i.set)
                  ? t(o, a, i)
                  : (o[a] = e[a]));
            return o;
          })(e);
        })(t(96540)),
        r = i(t(74901)),
        s = i(t(63237)),
        n = i(t(55665)),
        l = i(t(46942)),
        d = t(9404),
        p = i(t(86663)),
        c = t(67467),
        m = i(t(83736)),
        u = t(35781),
        g = t(86830),
        v = i(t(43742)),
        f = i(t(21927)),
        h = t(53719),
        y = i(t(94188)),
        b = t(8087),
        M = t(51628),
        I = i(t(15062)),
        w = t(93185),
        S = t(39418);
      t(97702), t(3858);
      var j = t(74848);
      a.default = (e, a) => {
        const {
            agentDomain: { appURL: t },
            history: i,
            history: { push: L },
            gameProviderMap: P,
            maintenanceMap: G,
            setSportsGame: N,
          } = e,
          { toSportPage: x, isSportTemplate: E } = (0, f.default)(),
          T = (0, s.default)({
            toggleLoginPopup: a.toggleLoginPopup,
          }),
          A = (0, r.default)({
            toggleLoginPopup: a.toggleLoginPopup,
          }),
          [_] = (0, w.getGameProviderByTypes)(P, [b.gameType.LIVE]),
          O = y.default.portal.apiServer.imageServer,
          C = (e) => {
            var a;
            let { history: t } = e;
            const { promos: i } = (0, n.default)((e) => ({
                promos: e.promo.promos,
              })),
              o = (0, c.useDispatch)();
            (0, m.default)(() => {
              o(
                (0, h.getPromos)(
                  p.default.stringify({
                    offset: 0,
                    limit: 10,
                    currency: y.default.defaultCurrency,
                    platform: 1,
                    locale: M.currLocale,
                  })
                )
              );
            });
            const r = (
              (null === (a = i.getIn(["promoMap", i.get("active")])) ||
              void 0 === a
                ? void 0
                : a.setSize(10)) || (0, d.List)()
            ).map((e, a) => {
              var o, r;
              if (!e) return;
              const s = e.getIn(["promotitle", M.currLocale]),
                n =
                  (null === (o = e.get("promobanner")) ||
                  void 0 === o ||
                  null ===
                    (r = o.find(
                      (e) => e.get("type") === i.get("bannertype")
                    )) ||
                  void 0 === r
                    ? void 0
                    : r.get("imageurl")) || "";
              return (0, j.jsx)(
                g.SwiperSlide,
                {
                  className: "promo-item",
                  onClick: () =>
                    t.push(
                      I.default.PROMODETAIL.replace(
                        ":promoId",
                        e.get("promoid")
                      )
                    ),
                  children: (0, j.jsx)("div", {
                    className: "promo-img",
                    children: n
                      ? (0, j.jsx)("img", {
                          src: `${O}${n}`,
                          alt: s,
                        })
                      : null,
                  }),
                },
                `home-promo-${a}`
              );
            });
            return (0, j.jsx)(g.Swiper, {
              direction: "horizontal",
              modules: [u.Autoplay],
              autoHeight: !0,
              autoplay: {
                delay: 5e3,
                disableOnInteraction: !1,
              },
              className: "promo-list",
              children: r,
            });
          },
          { hotGameTypeMap: k } = (0, n.default)((e) => ({
            hotGameTypeMap: e.games.hotGameTypeMap,
          })),
          D = k.get("HOT_GAMES"),
          V = (0, o.useCallback)(
            (a) => {
              const {
                maintenance: t,
                imgPath: i,
                gameName: o,
                producttypeid: r,
                gameproviderid: s,
                gameid: n,
                handleHotGameClick: d,
              } = (0, S.getMobileHotGameRenderData)({
                game: a,
                maintenanceMap: G,
                launchGame: T,
                changeGameQuery: e.changeGameQuery,
                isSportTemplate: E,
                toSportPage: x,
                setSportsGame: N,
              });
              return (0, j.jsx)(
                g.SwiperSlide,
                {
                  className: (0, l.default)("home-game-item", {
                    maintenance: t,
                  }),
                  onClick: () => d(),
                  children: (0, j.jsxs)("div", {
                    className: "hotgame-cover",
                    children: [
                      (0, j.jsx)("img", {
                        src: i,
                        alt: o,
                      }),
                      t &&
                        (0, j.jsx)(v.default, {
                          producttypeid: r,
                          gameproviderid: s,
                        }),
                    ],
                  }),
                },
                `${s}-${n}`
              );
            },
            [T]
          );
        return (0, j.jsxs)("div", {
          className: "homepage",
          children: [
            (0, j.jsx)("section", {
              className: "homepage-promo",
              children: (0, j.jsx)(C, {
                history: i,
              }),
            }),
            _.length > 0 &&
              (0, j.jsx)("section", {
                className: "homepage-type-live",
                children: (0, j.jsx)(g.Swiper, {
                  className: "home-game-list",
                  direction: "horizontal",
                  modules: [u.Autoplay],
                  autoHeight: !0,
                  autoplay: {
                    delay: 5e3,
                    disableOnInteraction: !1,
                  },
                  children: _.slice(0, 50).map((e) => {
                    const a = e.toLowerCase(),
                      t = 1 === G.getIn([b.gameType.LIVE, e, "status"]);
                    return (0, j.jsxs)(
                      g.SwiperSlide,
                      {
                        "data-gp": `home-LIVE-${a}`,
                        className: (0, l.default)("home-game-item", {
                          maintenance: (0, w.isMaintenance)(G, ["LIVE", e]),
                        }),
                        onClick: () => !t && A("LIVE", e),
                        children: [
                          (0, j.jsx)("div", {
                            className: "game-cover-bg",
                            style: {
                              backgroundImage: `url(https://img.alltocon.com/img/static/col_cover/live_${e.toLowerCase()}.png)`,
                            },
                          }),
                          (0, j.jsxs)("div", {
                            className: "game-content",
                            children: [
                              (0, j.jsx)("img", {
                                className: `gplogo ${e}`,
                                src: `https://img.alltocon.com/img/static/gplogo/h-dark/${e.toLowerCase()}.png`,
                              }),
                              (0, j.jsx)("h3", {
                                children: e,
                              }),
                            ],
                          }),
                          t &&
                            (0, j.jsx)(v.default, {
                              producttypeid: b.gameType.LIVE,
                              gameproviderid: e,
                            }),
                        ],
                      },
                      `home-LIVE-${a}`
                    );
                  }),
                }),
              }),
            (null == D ? void 0 : D.size) > 0 &&
              (0, j.jsxs)("section", {
                className: "homepage-hotgame",
                children: [
                  (0, j.jsxs)("h3", {
                    className: "home-title",
                    children: [
                      (0, j.jsx)("span", {
                        className: "title-text",
                        children: "Hot Games",
                      }),
                      (0, j.jsx)("button", {
                        className: "more-btn",
                        onClick: () => L(I.default.HOT_GAMES),
                        children: "More Games",
                      }),
                    ],
                  }),
                  (0, j.jsx)(g.Swiper, {
                    slidesPerView: 2,
                    spaceBetween: 10,
                    className: "home-game-list",
                    children: D.map(V),
                  }),
                ],
              }),
            t &&
              (0, j.jsxs)("section", {
                className: "homepage-mobile",
                children: [
                  (0, j.jsx)("div", {
                    className: "left",
                    children: (0, j.jsx)("img", {
                      src: "https://img.alltocon.com/img/static/mobile/temp/app/h5app58/home-mobile-girl.png",
                    }),
                  }),
                  (0, j.jsxs)("div", {
                    className: "right",
                    children: [
                      (0, j.jsx)("h3", {
                        children: M.i18n["app.download.title"],
                      }),
                      (0, j.jsxs)("div", {
                        className: "mobile-btn-group",
                        children: [
                          (0, j.jsxs)("button", {
                            className: "mobile-btn",
                            onClick: () => {
                              window.open(t);
                            },
                            children: [
                              (0, j.jsx)("i", {
                                className: "mps-ios",
                              }),
                              "APPLE",
                            ],
                          }),
                          (0, j.jsxs)("button", {
                            className: "mobile-btn",
                            onClick: () => {
                              window.open(t);
                            },
                            children: [
                              (0, j.jsx)("i", {
                                className: "mps-android",
                              }),
                              "ANDROID",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
          ],
        });
      };
    },
    63237: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var o = t(96540),
        r = t(67467),
        s = t(28651),
        n = i(t(27179)),
        l = i(t(36188)),
        d = t(94187),
        p = i(t(15062)),
        c = t(93185);
      a.default = function () {
        let { toggleLoginPopup: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const a = (0, s.useHistory)(),
          t = (0, r.useSelector)((e) => e.players.logined);
        return (0, o.useCallback)(
          (i) => {
            if (!t)
              return (
                window.isDesktop
                  ? e && e()
                  : window.isMobile &&
                    (a
                      ? a.push(p.default.LOGIN)
                      : (window.location.href = `${window.location.origin}${p.default.LOGIN}`)),
                !1
              );
            n.default.set("launchGameData", i), (0, d.setIframeStatus)();
            try {
              l.default.launchGame(i);
            } catch (e) {}
            window.isTMA || window.isIframe
              ? a.push(p.default.LAUNCHGAME, {
                  safeBack: !0,
                })
              : (0, c.openSingleWindow)(
                  "gameWindowInstance",
                  p.default.LAUNCHGAME
                ),
              (window.gameWindowClosed = !1);
          },
          [a, t, e]
        );
      };
    },
    74901: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = function () {
          let { toggleLoginPopup: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const a = (0, l.useHistory)(),
            { gameTypeMap: t, logined: i } = (0, n.default)((e) => ({
              gameTypeMap: e.games.gameTypeMap,
              logined: e.players.logined,
            })),
            { isUseLiveSeparateGames: g } = (0, p.default)(),
            v = (0, s.default)({
              toggleLoginPopup: e,
            }),
            { redirectToCasinoPage: f, isLaunchViaGame: h } = (0, r.default)();
          return (0, o.useCallback)(
            (e, i) => {
              const o = t
                  .getIn([e])
                  .filter((e) => e.get("gameproviderid") === i),
                r = g
                  ? [...m.showGameProvidersList, d.gameType.LIVE]
                  : m.showGameProvidersList;
              if (h(i)) f();
              else if (window.isDesktop && r.includes(e) && o.size > 1)
                a.push(c.paths[e], {
                  activeTabProvider: i,
                });
              else if ((0, u.isLaunchSportPage)(i))
                a.push(u.desktopSportPagePath);
              else if (o.size > 0) {
                const a = o.getIn([0, "distributorid"]),
                  t = o.getIn([0, "gameid"]),
                  i = o.getIn([0, "gameproviderid"]);
                v({
                  producttypeid: e,
                  distributorid: a,
                  gameid: t,
                  gameproviderid: i,
                });
              }
            },
            [i, a, t, v, e]
          );
        });
      var o = t(96540),
        r = i(t(23156)),
        s = i(t(63237)),
        n = i(t(55665)),
        l = t(28651),
        d = t(8087),
        p = i(t(31011)),
        c = t(15062),
        m = t(39418),
        u = t(71850);
    },
    94187: (e, a, t) => {
      var i = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.shouldUseIframe =
          a.setIframeStatus =
          a.getIframeStyle =
          a.IFRAME_GAME_CONFIG =
            void 0);
      var o = i(t(27179)),
        r = i(t(94188));
      const { code: s } = r.default.brand,
        n = {
          vipvnd: "v88",
          jun88: "v88",
          vi5prod: "v88",
          ae888: "v88",
          rc6prod: "v88",
          h10prod: "v88",
          rb9prod: "v88",
          "009vn": "v88",
          bet88: "v88",
        },
        l = (a.IFRAME_GAME_CONFIG = {
          v88: [
            {
              producttypeid: "LIVE",
              gameproviderid: "MOTIVATION",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "PG",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "FC",
            },
            {
              producttypeid: "LIVE",
              gameproviderid: "SEXYBCRT",
            },
            {
              producttypeid: "LIVE",
              gameproviderid: "DG",
            },
            {
              producttypeid: "SPORTS",
              gameproviderid: "SABA",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "JILI",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "GAME168",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "SPRIBE",
            },
            {
              producttypeid: "ESPORTS",
              gameproviderid: "MOTIVATION",
            },
          ],
        }),
        d = () => {
          var e;
          if (window.isTMA) return !0;
          const a = o.default.get("launchGameData");
          if (!a || !window.isMobile || window.isDesktop) return !1;
          const {
            producttypeid: t,
            gameproviderid: i,
            distributorid: r,
            platform: d,
          } = a;
          return (
            ("SPORTS" !== t || "SABA" !== i || !window.isMobile || 2 !== d) &&
            ((null === (e = l[n[s]]) || void 0 === e
              ? void 0
              : e.some((e) => {
                  var a;
                  let o = e.producttypeid === t && e.gameproviderid === i;
                  return (
                    null !== (a = e.distributorids) &&
                      void 0 !== a &&
                      a.length &&
                      (o = e.distributorids.includes(r)),
                    o
                  );
                })) ||
              !1)
          );
        };
      (a.shouldUseIframe = d),
        (a.setIframeStatus = () => {
          window.isIframe = d();
        }),
        (a.getIframeStyle = () =>
          d()
            ? {
                position: "fixed",
                top: "0",
              }
            : {
                position: "relative",
              });
    },
    97702: (e, a, t) => {
      t.r(a);
    },
  },
]);
