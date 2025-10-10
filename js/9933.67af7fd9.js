(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1351, 2826, 5438, 9933],
  {
    556: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    716: (e, t, a) => {
      "use strict";
      t.A = void 0;
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        n = a(74848);
      class r extends s.Component {
        render() {
          return (0, n.jsx)("div", {});
        }
      }
      t.A = r;
    },
    1459: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    1654: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    2332: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n,
        r = a(96540),
        i = s(a(29712)),
        o = s(a(55665)),
        l = s(a(46942)),
        c = s(a(5556)),
        d = a(78106),
        u = s(a(58009)),
        p = s(a(94188)),
        m = a(24439),
        f = a(15062),
        g = s(a(73219)),
        h = a(89154),
        v = a(74848);
      const y =
          null === (n = p.default.brand.custom) || void 0 === n
            ? void 0
            : n.navType,
        j = {
          HOT_GAMES: "nav-hot_games",
          LIVE: "nav-live",
          EGAME: "nav-egame",
          LOTTERY: "nav-lottery",
          SPORTS: "nav-sports",
          MPG: "nav-mpg",
          ANIMAL: "nav-animal",
          CHESS: "nav-chess",
          ESPORTS: "nav-esports",
          MINI_GAME: "nav-mini_game",
          FINANCE: "nav-finance",
          FAVORITE_GAMES: "nav-favorite_games",
          PROMOTIONS: "nav-promotions",
          PAGE_QR: "nav-page_qr",
          AGENT_MODE: "nav-agent_mode",
          PARTNER: "nav-partner",
          ULAGENT_APPLY: "nav-ulagent_apply",
          AFFILIATE: "nav-affiliate",
          FAQ: "nav-faq",
          CONTACTUS: "nav-contactus",
          VIP: "nav-vip",
        },
        x = {
          HOT_GAMES: "hot_games",
          LIVE: "live",
          EGAME: "egame",
          LOTTERY: "lottery",
          SPORTS: "sports",
          MPG: "mpg",
          ANIMAL: "animal",
          CHESS: "chess",
          ESPORTS: "esports",
          MINI_GAME: "mini_game",
          FINANCE: "finance",
          FAVORITE_GAMES: "favorite_games",
          PROMOTIONS: "promotions",
          PAGE_QR: "mobile",
          ULAGENT_APPLY: "partner",
          ROOT: "home",
          VIP: "vip-info",
        },
        M = {
          FIX_PAGE_HOT_GAMES: h.HotGame,
          FIX_PAGE_HOT_GAMES_2: h.HotGame,
          FIX_PAGE_HOT_GAMES_3: h.HotGame,
          FIX_PAGE_FAVORITE_GAMES: h.FavoriteGame,
          FIX_PAGE_PAGE_QR: h.AppQR,
        },
        b = (e) => {
          const { location: t } = e,
            { navigationList: a } = (0, o.default)((e) => ({
              navigationList: e.games.navigationList,
              logined: e.players.logined,
            })),
            s = (0, i.default)(e.changeGameQuery),
            [n, c] = (0, r.useState)([]);
          return a
            ? (0, v.jsxs)("ul", {
                className: "nav",
                children: [
                  e.leftSideRender && e.leftSideRender(),
                  a.map((e, a) => {
                    const r = e.get("menuBarType"),
                      i = e.get("content"),
                      o = e.get("ecProductName"),
                      d = e.get("gameProviders"),
                      p = e.get("iconImageUrl"),
                      b = M[`${r}_${i}`] || h.Game;
                    return (0, v.jsxs)(
                      "li",
                      {
                        className: (0, l.default)(j[i], {
                          hyperlink: r === m.menuBarTypeEnum.CUSTOM_PAGE,
                        }),
                        "data-content": i,
                        "data-title": o,
                        children: [
                          (0, v.jsx)("div", {
                            className: (0, l.default)("nav-item", x[i], {
                              active: t.pathname === f.paths[i],
                              "active-drop": n.includes(i),
                            }),
                            onClick: () =>
                              s({
                                menuBarType: r,
                                content: i,
                              }),
                            children: (0, v.jsx)("a", {
                              className: (0, l.default)({
                                "hot-icon-wrapper": !!p,
                              }),
                              children: (0, v.jsxs)("h3", {
                                children: [
                                  o,
                                  (0, v.jsx)(g.default, {
                                    iconImageUrl: p,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, v.jsx)(u.default, {
                            children: (0, v.jsx)(b, {
                              gameProviders: d,
                              content: i,
                            }),
                          }),
                          "dropdown" === y &&
                            "PRODUCT" === r &&
                            (0, v.jsx)("div", {
                              className: (0, l.default)("drop-toggle", {
                                active: n.includes(i),
                              }),
                              onClick: () =>
                                ((e) => {
                                  let { content: t } = e;
                                  c((e) =>
                                    e.includes(t)
                                      ? e.filter((e) => e !== t)
                                      : [...e, t]
                                  );
                                })({
                                  content: i,
                                }),
                              children: (0, v.jsx)("i", {
                                className: "d20_small_line_arrow_down",
                              }),
                            }),
                        ],
                      },
                      a
                    );
                  }),
                  e.rightSideRender && e.rightSideRender(),
                ],
              })
            : null;
        };
      (b.contextTypes = {
        toggleLoginPopup: c.default.func,
      }),
        (t.default = (0, d.withRouter)(b));
    },
    4222: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    4957: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    5340: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = k(a(96540)),
        r = s(a(7541)),
        i = s(a(46942)),
        o = a(9404),
        l = a(67467),
        c = a(78106),
        d = s(a(72524)),
        u = s(a(27179)),
        p = k(a(84622)),
        m = s(a(85935)),
        f = s(a(80956)),
        g = a(53719),
        h = s(a(94188)),
        v = a(83597),
        y = a(38560),
        j = a(51628),
        x = s(a(15062)),
        M = s(a(22253)),
        b = s(a(51880)),
        w = a(32087),
        _ = s(a(76035)),
        N = s(a(44543)),
        P = a(74848);
      function k(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            s = new WeakMap();
        return (k = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            r,
            i = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((n = t ? s : a)) {
            if (n.has(e)) return n.get(e);
            n.set(e, i);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((r =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (r.get || r.set)
                ? n(i, t, r)
                : (i[t] = e[t]));
          return i;
        })(e, t);
      }
      const { defaultCurrency: O, brand: C } = h.default,
        { Wheels: T } = C.customMobile.components;
      let L = !1;
      t.default = () => {
        var e, t, a;
        const s = (0, l.useSelector)((e) => e.players.logined),
          h = (0, c.useHistory)(),
          [k, C] = (0, d.default)({
            regPromo: void 0,
            openModal: !1,
            init: !1,
            loading: !1,
            animation: !1,
            rewardIndex: null,
            isOpen: !1,
          }),
          S = (0, r.default)(g.getPromoCurrent);
        (0, n.useEffect)(() => {
          L ||
            s ||
            window.isCRR ||
            window.location.search.includes("thirdPartyType") ||
            S({
              promoType: 15,
              platform: y.isMobile ? 1 : 2,
              currency: O,
            }).then((e) => {
              e[0]
                ? C({
                    regPromo: e[0],
                  })
                : (L = !0);
            });
        }, []),
          (0, n.useEffect)(() => {
            k.regPromo &&
              C({
                openModal: !0,
              });
          }, [k.regPromo, C]),
          (0, n.useEffect)(() => {
            k.loading &&
              setTimeout(() => {
                C({
                  loading: !1,
                  rewardIndex: w.rewardIndex,
                });
              }, 1e3);
          }, [k.loading, C]),
          (0, n.useEffect)(() => {
            null !== k.rewardIndex &&
              setTimeout(() => {
                C({
                  openModal: !1,
                }),
                  C({
                    isOpen: !0,
                  });
              }, 3e3);
          }, [k.rewardIndex, C]);
        const E =
            (null == k || null === (e = k.regPromo) || void 0 === e
              ? void 0
              : e.bonusvalue) || 0,
          R =
            (null == k || null === (t = k.regPromo) || void 0 === t
              ? void 0
              : t.startdate) ||
            (null == k || null === (a = k.regPromo) || void 0 === a
              ? void 0
              : a.createdat),
          { bonusList: I, maxBonus: A, spinBonusRecord: D } = (0, M.default)(E);
        return (0, P.jsxs)(P.Fragment, {
          children: [
            k.openModal &&
              (0, P.jsxs)(m.default, {
                id: "reg-roulette-modal",
                className: (0, i.default)(
                  "reg-roulette-modal",
                  null == T ? void 0 : T[0],
                  {
                    "is-mobile": y.isMobile,
                  }
                ),
                onClose: () => {
                  (window.isCRR = !0),
                    C({
                      openModal: !1,
                    });
                },
                hasTitle: !1,
                button: !1,
                children: [
                  (0, P.jsxs)("div", {
                    className: "head",
                    children: [
                      (0, P.jsx)("div", {
                        className: "txt ttu",
                        children: j.i18n["reg.roulette.title"],
                      }),
                      (0, P.jsxs)("div", {
                        className: "amount",
                        children: [
                          A,
                          (0, P.jsx)("wbr", {}),
                          (0, P.jsx)("span", {
                            className: "currency-string",
                            children: (0, v.defaultCurrencyI18nLazy)(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, P.jsx)("div", {
                    className: (0, i.default)("lucky-spin-wrapper"),
                    children: (0, P.jsx)(p.RegRoulette, {
                      state: k,
                      bonusList: I,
                      getLuckyDraw: () => {
                        k.animation ||
                          C({
                            isOpen: !1,
                            loading: !0,
                            animation: !0,
                            rewardIndex: null,
                          });
                      },
                    }),
                  }),
                  (0, P.jsxs)("div", {
                    className: "spin-footer",
                    children: [
                      (0, P.jsxs)("div", {
                        className: "left-cont",
                        children: [
                          (0, P.jsx)("div", {
                            className: "tit",
                            children: j.i18n["reg.roulette.bonus.total"],
                          }),
                          (0, P.jsx)(N.default, {
                            startDate: R,
                            baseBonus: E,
                          }),
                        ],
                      }),
                      (0, P.jsx)("div", {
                        className: "right-cont",
                        children: (0, P.jsx)("div", {
                          className: "roulette_winner_slider",
                          children: (0, P.jsx)(f.default, {
                            data: (0, o.fromJS)((0, _.default)(D)),
                            currency: (0, v.defaultCurrencyI18nLazy)(),
                            sliderOpt: {
                              height: 70,
                              during: 2500,
                            },
                            isSlider: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            k.isOpen &&
              (0, P.jsx)(b.default, {
                amount: E,
                onClose: () => {
                  var e;
                  u.default.set(
                    "rpid",
                    null === (e = k.regPromo) || void 0 === e
                      ? void 0
                      : e.promoid
                  ),
                    (window.isCRR = !0),
                    C({
                      isOpen: !1,
                    }),
                    h.push(x.default.SIGNUP);
                },
              }),
          ],
        });
      };
    },
    5662: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          const { allowMessageWindow: e, logined: t } = (0, n.default)((e) => ({
            allowMessageWindow: e.dashboard.allowMessageWindow,
            logined: e.players.logined,
          }));
          return e && t ? (0, o.jsx)(l, {}) : null;
        }),
        s(a(96540)),
        a(67467);
      var n = s(a(55665)),
        r = s(a(53259)),
        i = s(a(7032)),
        o = a(74848);
      const l = (0, r.default)({
        loader: () =>
          Promise.all([a.e(2564), a.e(4571)]).then(a.bind(a, 42786)),
        loading: i.default,
      });
    },
    5816: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    6083: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = a(70913),
        r = a(93185),
        i = a(74848);
      t.default = (e) => {
        let { newsItem: t } = e;
        return (0, i.jsxs)("div", {
          className: "news-item",
          children: [
            (0, i.jsx)("div", {
              className: "time-column",
              children: (0, n.formatDate)(t.get("starttime")),
            }),
            (0, i.jsx)("div", {
              className: "des-column",
              dangerouslySetInnerHTML: {
                __html: (0, r.getCleanContent)(
                  (0, r.getAnnouncedDetail)(t),
                  !0
                ),
              },
            }),
          ],
        });
      };
    },
    6938: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(55665)),
        i = a(8087),
        o = a(9404);
      const l = "GUEST";
      t.default = (e) => {
        const { floatingAdsSetting: t, logined: a } = (0, r.default)((e) => ({
            floatingAdsSetting: e.promo.floatingAdsSetting,
            logined: e.players.logined,
          })),
          s = (0, n.useMemo)(() => {
            var s, n;
            let r = (0, o.Map)();
            if (!t.size) return r;
            const c = t.find(
                (e) =>
                  e.get("type") === i.floatingAdsTypeMapNameEnum.CENTER_DESKTOP
              ),
              d = t.find(
                (e) =>
                  e.get("type") === i.floatingAdsTypeMapNameEnum.CENTER_MOBILE
              );
            r =
              null != c && c.get("desktopMobileSameSetting")
                ? c
                : (null != d && d.get("desktopMobileSameSetting")) ||
                  e === i.floatingAdsTypeMapNameEnum.CENTER_MOBILE
                ? d
                : c;
            const u =
              null === (s = r) || void 0 === s
                ? void 0
                : s.get("addetails").filter((e) => {
                    const t = e.get("target");
                    return "ALL" === t
                      ? "ALL" === t
                      : a
                      ? "MEMBER" === t
                      : t === l;
                  });
            return null === (n = r) || void 0 === n
              ? void 0
              : n.set("addetails", u);
          }, [t, e, a]),
          c =
            (null == s ? void 0 : s.get("status")) === i.adStatusEnum.ACTIVED &&
            s.get("addetails").size >= 1,
          d = (0, n.useMemo)(() => {
            let e = !1;
            const t =
              c && s.get("addetails").every((e) => e.get("target") === l);
            return a && !t && (e = !0), e;
          }, [a, c, s]);
        return {
          adCenterData: s,
          isShowAdCenter: c,
          isAdCenterLoginPopup: d,
          logined: a,
        };
      };
    },
    6950: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(67467),
        r = s(a(55665)),
        i = a(53719);
      t.default = () => {
        const e = (0, n.useDispatch)(),
          {
            promo: {
              depositPromoOpts: t,
              regLimitTimePromo: a,
              isRegLimitTimePromoSuc: s,
            },
          } = (0, r.default)((e) => ({
            promo: e.promo,
          }));
        return {
          getDepositPromoOpts: () => e((0, i.getDepositPromoOpts)()),
          regLimitTimePromo: a,
          depositPromoOpts: t,
          isRegLimitTimePromoSuc: s,
        };
      };
    },
    9972: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    11882: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94918));
      a(81645), (t.default = n.default);
    },
    11941: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(97067)),
        i = s(a(34476)),
        o = s(a(55665)),
        l = s(a(53259)),
        c = a(67467),
        d = s(a(72524)),
        u = s(a(93978)),
        p = s(a(7032)),
        m = a(76066),
        f = a(56291),
        g = a(8087),
        h = a(51628),
        v = s(a(51767)),
        y = a(57160),
        j = a(93185),
        x = a(74848);
      const M = (0, l.default)({
        loader: () => a.e(7749).then(a.bind(a, 28708)),
        loading: p.default,
      });
      t.default = (e) => {
        const t = f.loginInfoCookie.get(),
          [a, s] = (0, n.useState)(!1),
          [l, p] = (0, d.default)({
            playerId: "",
            playerPassword: "",
          }),
          [b, w] = (0, n.useState)(t.playerPassword),
          {
            isOpenImgCaptcha: _,
            openImgCaptcha: N,
            closeImgCaptcha: P,
          } = (0, r.default)(),
          { isLoginImgCaptcha: k } = (0, i.default)(),
          { loginSetting: O, fingerprint2: C } = (0, o.default)((e) => ({
            loginSetting: e.players.loginSetting,
            fingerprint2: e.players.fingerprint2,
          })),
          T = (0, c.useDispatch)(),
          L = (0, n.useRef)(),
          S = {
            pwd: (0, n.useRef)(),
            acc: (0, n.useRef)(),
            captcha: (0, n.useRef)(),
          },
          E = O.getIn(["accounti18n", h.currLocale]),
          R = O.getIn(["passwordi18n", h.currLocale]),
          I = O.getIn(["captchai18n", h.currLocale]),
          A = O.getIn(["loginsettingmap", "captcha", "display"]),
          D = A && !k,
          $ = (e) => {
            T((0, m.loginUser)(e || L.current));
          },
          W = () => {
            var e;
            const t = (0, j.getValueWithoutFirstLastSpace)(
              S.acc.current.value
            ).toLocaleLowerCase();
            let a = S.pwd.current.value;
            const s =
                null === (e = S.captcha.current) || void 0 === e
                  ? void 0
                  : e.getCaptchaInfo(),
              n = !s || s.captcha;
            t &&
              a &&
              C &&
              n &&
              ((a = (0, v.default)(a, t)),
              (L.current = (0, j.deleteEmptyValue)(
                {
                  loginname: t,
                  loginpassword: a,
                  fingerprint: C,
                  portalid: g.portalIdEnum.DESKTOP,
                  captcha: null == s ? void 0 : s.captcha,
                  captchauuid: null == s ? void 0 : s.captchauuid,
                  rawPassword: b ? S.pwd.current.value : null,
                },
                {
                  deleteMinusOne: !0,
                }
              )),
              A && k ? N() : $());
          };
        return (
          (0, n.useEffect)(() => {
            (0, y.getFingerprint2)((e) => T((0, m.saveFingerPrint2)(e)));
          }, [m.saveFingerPrint2]),
          (0, n.useEffect)(() => {
            t.playerPassword &&
              p({
                playerId: t.playerId,
                playerPassword: t.playerPassword,
              });
          }, [t.playerPassword]),
          (0, x.jsxs)(x.Fragment, {
            children: [
              (0, x.jsx)(M, {
                accountPlaceholder: E,
                passwordPlaceholder: R,
                captchaPlaceholder: I,
                visible: a,
                visibleEyeRenderer: () =>
                  (0, x.jsx)("i", {
                    className:
                      "visible-toggle mps-" + (a ? "readable" : "unreadable"),
                    onClick: () => s(!a),
                  }),
                isShowCaptcha: D,
                loginValues: l,
                columnRef: S,
                onInputChange: (e, t) => {
                  p({
                    [t]: e,
                  });
                },
                onSubmit: W,
                onKeyUp: (e) => {
                  13 === e.keyCode && W();
                },
                onChangeRememberLogin: (e) => {
                  w(e);
                },
              }),
              _ &&
                (0, x.jsx)(u.default, {
                  onVerifySuc: (e) => {
                    P(),
                      $({
                        ...L.current,
                        captchauuid: e,
                      });
                  },
                  onClose: P,
                }),
            ],
          })
        );
      };
    },
    14159: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    14235: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(67467),
        r = a(47459),
        i = a(84465),
        o = a(76066),
        l = a(53719),
        c = s(a(45520));
      const d = (0, n.connect)(
        (e, t) => ({
          news: e.news.news,
          currency: e.players.player.currency,
          walletMap: e.players.walletMap,
          logined: e.players.logined,
          isLoading: e.players.isLoading,
          isSingleWindow: e.app.isSingleWindow,
          maintenanceMap: e.games.maintenanceMap,
          getProfileLoading: e.players.getProfileLoading,
          totalUnreadMsgCount: e.news.totalUnreadMsgCount,
          activeshortcuts: e.settings.activeshortcuts,
          gameTypeMap: e.games.gameTypeMap,
          gameProviderMap: e.games.gameProviderMap,
          fingerprint2: e.players.fingerprint2,
          staticpagesMap: e.staticpagesettings.staticpagesMap,
          customLayout: t.customLayout,
          floatingAdsSetting: e.promo.floatingAdsSetting,
          registrationSetting: e.players.registrationSetting,
          isShowThirdPartyLogin: e.thirdPartyLogin.isShowThirdPartyLogin,
        }),
        (e) =>
          (0, r.bindActionCreators)(
            {
              getNews: i.getNews,
              loginUser: o.loginUser,
              logoutUser: o.logoutUser,
              getUserProfile: o.getUserProfile,
              saveFingerPrint2: o.saveFingerPrint2,
              getFloatingAds: l.getFloatingAds,
            },
            e
          )
      )(c.default);
      t.default = d;
    },
    14900: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(5556));
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = a(74848);
      class i extends n.Component {
        render() {
          const { children: e, className: t } = this.props;
          return (0, r.jsx)("div", {
            className: `hover-container ${t}`,
            children: (0, r.jsxs)("div", {
              className: "content",
              children: [
                (0, r.jsx)("img", {
                  alt: "close",
                  className: "close-btn",
                  src: "https://img.alltocon.com/img/static/btn-delete-close.png",
                  onClick: () => {
                    this.props.onHandleClose();
                  },
                }),
                e && e,
              ],
            }),
          });
        }
      }
      t.default = i;
    },
    16033: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    17471: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(5556)),
        s(a(96540));
      var n = s(a(60191)),
        r = a(74848);
      t.default = (e) => {
        const {
            children: t,
            className: a = "",
            modalstyle: s = {},
            onHandleClose: i,
            isClickOutsideClosed: o,
          } = e,
          { targetRef: l, onOutsideClick: c } = (0, n.default)({
            onClick: i,
          });
        return o
          ? (0, r.jsx)("div", {
              className: "hover-container",
              onClick: c,
              children: (0, r.jsx)("div", {
                className: `modal ${a}`,
                style: s,
                ref: l,
                children: (0, r.jsx)("div", {
                  className: "container",
                  children: t && t,
                }),
              }),
            })
          : (0, r.jsx)("div", {
              className: "hover-container",
              children: (0, r.jsx)("div", {
                className: `modal ${a}`,
                style: s,
                children: (0, r.jsx)("div", {
                  className: "container",
                  children: t && t,
                }),
              }),
            });
      };
    },
    17791: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(62812)),
        r = a(38560);
      (async () => {
        r.isDesktop
          ? await a.e(7564).then(a.bind(a, 15183))
          : await a.e(4259).then(a.bind(a, 44259));
      })(),
        (t.default = n.default);
    },
    18356: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    18775: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(55665)),
        i = s(a(9404)),
        o = a(8087),
        l = s(a(31011)),
        c = s(a(39280)),
        d = a(51628),
        u = a(93185),
        p = a(39418),
        m = a(74848);
      t.default = (e) => {
        let { toggleLoginPopup: t, game: a = i.default.Map(), compType: s } = e;
        const { myFavoriteGameMap: f, maintenanceMap: g } = (0, r.default)(
            (e) => ({
              myFavoriteGameMap: e.games.myFavoriteGameMap,
              maintenanceMap: e.games.maintenanceMap,
            })
          ),
          { onAddMyFavoriteGame: h, onDeleteMyFavoriteGame: v } = (0,
          c.default)({
            toggleLoginPopup: t,
          }),
          { isUseLiveSeparateGames: y } = (0, l.default)(),
          j = a.get("gameid"),
          x = a.get("producttypeid"),
          M = (0, n.useMemo)(
            () =>
              y
                ? [...p.showGameProvidersList, o.gameType.LIVE]
                : p.showGameProvidersList,
            [y]
          ),
          b = (0, n.useMemo)(() => {
            switch (s) {
              case "hotGame":
                return (0, p.isHotGameToProviderPage)(j)
                  ? a.set("gameid", null)
                  : a;
              case "subMenu":
                return M.includes(x) ? a.set("gameid", null) : a;
              default:
                return a;
            }
          }, [s, j, a, M, x]),
          w = f.get((0, u.getMyFavoriteGameKey)(b));
        return (0, u.isMaintenance)(g, [x, a.get("gameproviderid")])
          ? null
          : (0, m.jsx)("div", {
              className: "favorite-icon-wrapper",
              children: w
                ? (0, m.jsx)("button", {
                    className: "remove-fav",
                    onClick: () => {
                      v(b);
                    },
                    children: d.i18n["cancel.my.favorite.game"],
                  })
                : (0, m.jsx)("button", {
                    className: "add-fav",
                    onClick: () => {
                      h(b);
                    },
                    children: d.i18n["add.my.favorite.game"],
                  }),
            });
      };
    },
    19142: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    19226: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    20786: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(74901)),
        i = s(a(91974)),
        o = s(a(55665)),
        l = s(a(46942)),
        c = s(a(5556)),
        d = s(a(43742)),
        u = s(a(45310)),
        p = s(a(94188)),
        m = a(51628),
        f = a(93185),
        g = a(74848);
      const h = p.default.portal.apiServer.imageServer,
        v = (e, t) => {
          const { gameProviders: a, content: s } = e,
            { toggleLoginPopup: c } = t,
            { maintenanceMap: p, gameTypeMap: v } = (0, o.default)((e) => ({
              maintenanceMap: e.games.maintenanceMap,
              gameTypeMap: e.games.gameTypeMap,
            })),
            y = (0, i.default)(),
            j = (0, r.default)({
              toggleLoginPopup: c,
            }),
            x = (0, n.useMemo)(() => v.getIn([s]), [s, v]),
            M = (0, n.useMemo)(
              () =>
                a.map((e) => {
                  const t = x
                    .filter(
                      (t) => t.get("gameproviderid") === e.get("gameProvider")
                    )
                    .get(0);
                  return e.set("currGameData", t);
                }),
              [a, x]
            );
          return (
            (null == M ? void 0 : M.size) > 0 &&
            (0, g.jsx)("div", {
              className: "submenu",
              children: (0, g.jsx)("ul", {
                children: M.map((e) => {
                  const t = e.get("gameProvider"),
                    a = e.get("useDefault"),
                    n = t.toLowerCase(),
                    r = e.get("currGameData");
                  return (0, g.jsxs)(
                    "li",
                    {
                      "data-provider": n,
                      className: (0, l.default)(m.currLocale, {
                        maintenance: (0, f.isMaintenance)(p, [s, t]),
                      }),
                      children: [
                        (0, g.jsx)("a", {
                          "data-provider": y(t),
                          onClick: () => {
                            j(s, t);
                          },
                          children: (0, g.jsx)("img", {
                            src: a
                              ? `https://img.alltocon.com/img/static/desktop/sub-menu/sub-${s.toLowerCase()}-${n}.png`
                              : `${h}${e.get("imageUrl")}`,
                            alt: `banner-${n}`,
                            loading: "lazy",
                          }),
                        }),
                        (0, g.jsx)(d.default, {
                          producttypeid: s,
                          gameproviderid: t,
                          displayMessage: !1,
                        }),
                        (0, g.jsx)(u.default, {
                          toggleLoginPopup: c,
                          game: r,
                          compType: "subMenu",
                        }),
                      ],
                    },
                    `${s}${t}`
                  );
                }),
              }),
            })
          );
        };
      (v.contextTypes = {
        toggleLoginPopup: c.default.func,
      }),
        (t.default = v);
    },
    20824: (e, t, a) => {
      "use strict";
      var s = a(24994);
      (t.A = void 0), s(a(5556));
      var n = h(a(96540)),
        r = a(67467),
        i = a(40961),
        o = (s(a(2209)), a(78106)),
        l = a(51628),
        c = a(93185),
        d = h(a(15062)),
        u = s(a(27909)),
        p = s(a(94188)),
        m = s(a(17471)),
        f = s(a(97184)),
        g = a(74848);
      function h(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            s = new WeakMap();
        return (h = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            r,
            i = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((n = t ? s : a)) {
            if (n.has(e)) return n.get(e);
            n.set(e, i);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((r =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (r.get || r.set)
                ? n(i, t, r)
                : (i[t] = e[t]));
          return i;
        })(e, t);
      }
      t.A = (0, o.withRouter)((e) => {
        const {
            className: t,
            news: a,
            history: {
              location: { pathname: s },
            },
          } = e,
          o = (0, n.useMemo)(
            () =>
              a && a.get("objs").size > 0
                ? a
                    .get("objs")
                    .toArray()
                    .map((e) => (0, c.getAnnouncedDetail)(e))
                : null,
            [a]
          ),
          h = (0, r.useSelector)((e) => e.app.pageLoaded),
          [v, y] = (0, n.useState)(!1),
          j = (e) => {
            const t = e ? "hidden" : "",
              a = e ? "hidden" : "visible";
            if (
              ((document.body.style.overflow = t),
              document.querySelector(".side-menu"))
            ) {
              const e = document.querySelectorAll(
                ".side-menu h2, .side-menu p"
              );
              Array.from(e).forEach((e) => {
                e.style.visibility = a;
              });
            }
          };
        return (0, g.jsx)("div", {
          className: `marquee-container ${t}`,
          children: (0, g.jsxs)("div", {
            style: {
              display:
                d.displayNewsGroup.some((e) => s.includes(e)) ||
                s === d.default.ROOT
                  ? "block"
                  : "none",
            },
            className: "marquee-block",
            children: [
              (0, g.jsxs)("div", {
                className: "marquee-news",
                children: [
                  h &&
                    (0, g.jsx)(u.default, {
                      className:
                        "news " +
                        (s === d.default.ROOT ? "home-page-position" : ""),
                      speed: 100,
                      onClick: () => {
                        j(!0), y(!0);
                      },
                      data: o || [
                        (0, c.i18nVariables)(l.i18n["welcome.to.gk"], {
                          name: p.default.brand.name,
                        }),
                      ],
                      total: a.get("total"),
                    }),
                  (0, g.jsx)("span", {
                    className: "news-title",
                    children: (0, g.jsx)("i", {
                      className: "mps-news",
                    }),
                  }),
                ],
              }),
              v &&
                (0, i.createPortal)(
                  (0, g.jsxs)(m.default, {
                    className: "news-list",
                    children: [
                      (0, g.jsxs)("div", {
                        className: "header",
                        children: [
                          (0, g.jsx)("h2", {
                            className: "title-center",
                            children: l.i18n["latest.news"],
                          }),
                          (0, g.jsx)("i", {
                            className: "mps-close",
                            onClick: () => {
                              j(!1), y(!1);
                            },
                          }),
                        ],
                      }),
                      (0, g.jsx)(f.default, {
                        news: a,
                      }),
                    ],
                  }),
                  document.querySelector(".app")
                ),
            ],
          }),
        });
      });
    },
    20934: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(5340)),
        r = s(a(42412));
      a(27775), (0, r.default)("reg"), (t.default = n.default);
    },
    21840: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = s(a(52622)),
        r = s(a(14947)),
        i = s(a(68299)),
        o = a(51628),
        l = a(74848);
      t.default = (e) => {
        let { isSignup: t = !1 } = e;
        const {
          loading: a,
          thirdPartyTypes: s,
          thirdPartyAuthCheckingURLs: c,
          onIconClick: d,
          isShowThirdPartyLogin: u,
          isSystemPlayerPageEnabled: p,
        } = (0, r.default)();
        return !u || (!p && t)
          ? null
          : (0, l.jsxs)("div", {
              className: "fast-login-wrapper",
              children: [
                u &&
                  (0, l.jsx)("span", {
                    className: "fast-login-container",
                    children: (0, l.jsx)("span", {
                      children: o.i18n["fast.login"],
                    }),
                  }),
                (0, l.jsx)("div", {
                  className: "icons",
                  children: a
                    ? (0, l.jsx)(n.default, {})
                    : s.map((e) =>
                        (0, l.jsx)(
                          "a",
                          {
                            href: c[e],
                            onClick: d,
                            children: (0, l.jsx)("img", {
                              alt: `${e}-icon`,
                              className: "icon",
                              src: i.default[e],
                            }),
                          },
                          e
                        )
                      ),
                }),
              ],
            });
      };
    },
    22253: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94188)),
        r = a(16510),
        i = a(32087);
      const {
          brand: { code: o },
        } = n.default,
        l = {
          ra5prod: {
            2: "32",
            35: "55",
            72: "128",
            482: "376",
            523: "888",
          },
          p42prod: {
            1: "188",
            2: "99",
            35: "1999",
            72: "6888",
            482: "3666",
            523: "8888",
          },
          vr6prod: {
            1: "8000",
            2: "18000",
            35: "188000",
            72: "888000",
            482: "8888000",
            523: "18888000",
          },
        };
      t.default = (e) => {
        let t = 0;
        const a = i.rewardList.map((a) => {
            const s = (l[o] || {})[a.rewardRatio] || e * a.rewardRatio;
            return (t = Math.max(t, s)), (0, r.formatMoney)(s, "0.00");
          }),
          s = [...a]
            .sort((e, t) => (Number(e) < Number(t) ? -1 : 0))
            .reduce((e, t, s) => {
              const n = Math.abs(s - a.length) || 1;
              return [...e, ...Array(n * n * n).fill(t)];
            }, []);
        return {
          bonusList: a,
          maxBonus: (0, r.formatMoney)(t, "0"),
          spinBonusRecord: s,
        };
      };
    },
    22715: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.clickGameProvider = function (e, t) {
          const { history: a, gameTypeMap: s } = this.props;
          let n = s.getIn([e]).filter((e) => e.get("gameproviderid") === t);
          const i = n.size;
          if (window.isDesktop && e === r.gameType.EGAME && i > 1)
            a.push(l.default.EGAME, {
              activeTabProvider: t,
            });
          else if (window.isDesktop && e === r.gameType.CHESS && i > 1)
            a.push(l.default.CHESS, {
              activeTabProvider: t,
            });
          else if (i > 0) {
            const t = {
              producttypeid: e,
              distributorid: n.getIn([0, "distributorid"]),
              gameid: n.getIn([0, "gameid"]),
              gameproviderid: n.getIn([0, "gameproviderid"]),
            };
            d.call(this, t);
          }
        }),
        (t.default = void 0);
      var n = s(a(27179)),
        r = a(8087),
        i = s(a(36188)),
        o = a(94187),
        l = s(a(15062)),
        c = a(93185);
      function d(e) {
        const { logined: t, history: a, isSingleWindow: s } = this.props;
        if (!t) {
          if (window.isDesktop) {
            const { toggleLoginPopup: e } = this.context;
            e && e();
          } else
            window.isMobile &&
              (a
                ? a.push(l.default.LOGIN)
                : (window.location.href = `${window.location.origin}${l.default.LOGIN}`));
          return !1;
        }
        n.default.set("launchGameData", e), (0, o.setIframeStatus)();
        try {
          i.default.launchGame(e);
        } catch (e) {}
        window.isIframe
          ? a.push(l.default.LAUNCHGAME)
          : !1 !== s
          ? ((0, c.openSingleWindow)(
              "gameWindowInstance",
              l.default.LAUNCHGAME
            ),
            (window.gameWindowClosed = !1))
          : window.open(l.default.LAUNCHGAME, "_blank");
      }
      t.default = d;
    },
    23100: (e, t, a) => {
      "use strict";
      var s = a(24994);
      t.A = void 0;
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(94188)),
        i = a(51628),
        o = s(a(23542)),
        l = s(a(26758)),
        c = s(a(69319)),
        d = a(93185),
        u = s(a(65405)),
        p = s(a(46942)),
        m = s(a(15062)),
        f = s(a(11882)),
        g = a(74848);
      class h extends n.Component {
        constructor(e) {
          super(e),
            (this.staticPageRenderer = o.default.bind(this)),
            (this.state = {
              mapToggle: !1,
            });
        }
        render() {
          const {
            history: { push: e },
          } = this.props;
          return (0, g.jsxs)("footer", {
            className: (0, p.default)({
              open: this.state.mapToggle,
            }),
            children: [
              (0, g.jsx)("div", {
                className: "footer-header",
                children: (0, g.jsxs)("div", {
                  className: "main-wrap",
                  children: [
                    (0, g.jsxs)("div", {
                      className: "left",
                      children: [
                        (0, g.jsx)("div", {
                          className: "header-link",
                          onClick: () => e(m.default.ABOUTUS),
                          children: "Giới Thiệu",
                        }),
                        (0, g.jsx)("div", {
                          className: "header-link",
                          onClick: () => e(m.default.CONTACTUS),
                          children: "Trợ Giúp",
                        }),
                        (0, g.jsx)("div", {
                          className: "header-link",
                          onClick: () => e(m.default.POLICY),
                          children: "Điều Khoản",
                        }),
                      ],
                    }),
                    (0, g.jsxs)("div", {
                      className: "right map-toggle-wrap",
                      onClick: () => {
                        this.setState(
                          {
                            mapToggle: !this.state.mapToggle,
                          },
                          () => {
                            this.state.mapToggle &&
                              window.scrollTo(0, document.body.scrollHeight);
                          }
                        );
                      },
                      children: [
                        (0, g.jsx)("span", {
                          children: "Sơ Đồ Trang Mạng",
                        }),
                        (0, g.jsx)("span", {
                          children: (0, g.jsx)("i", {
                            className: "mps-arrow-up map-toggle",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, g.jsx)("div", {
                className: "footer-main",
                children: (0, g.jsx)("div", {
                  className: "footer-cont",
                  children: (0, g.jsxs)("div", {
                    className: "footer-ref",
                    children: [
                      (0, g.jsxs)("div", {
                        className: "footer-ref-item",
                        children: [
                          (0, g.jsx)("div", {
                            className: "footer-head",
                            children: i.i18n["about.us"],
                          }),
                          (0, g.jsxs)("div", {
                            className: "footer-links",
                            children: [
                              this.staticPageRenderer("aboutUs"),
                              this.staticPageRenderer("userAgreement"),
                              this.staticPageRenderer("responsibleGambling"),
                              this.staticPageRenderer("disclaimer"),
                              this.staticPageRenderer("userPrivacy"),
                              this.staticPageRenderer("partner"),
                            ],
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "footer-nav",
                        children: [
                          (0, g.jsx)("div", {
                            className: "footer-head",
                            children: "MENU",
                          }),
                          (0, g.jsxs)("ul", {
                            className: "nav",
                            children: [
                              (0, g.jsx)("li", {
                                children: (0, g.jsx)("a", {
                                  href: "/page/QR",
                                  children: i.i18n["mobile.download"],
                                }),
                              }),
                              (0, g.jsx)(c.default, {
                                ...this.props,
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "footer-ref-item",
                        children: [
                          (0, g.jsx)("div", {
                            className: "footer-head",
                            children: i.i18n["help.support"],
                          }),
                          (0, g.jsxs)("div", {
                            className: "footer-links",
                            children: [
                              this.staticPageRenderer("depositHelp"),
                              this.staticPageRenderer("withdrawalHelp"),
                              this.staticPageRenderer("commonProblem"),
                              this.staticPageRenderer("contactUs"),
                            ],
                          }),
                        ],
                      }),
                      (0, g.jsxs)("div", {
                        className: "footer-ref-item",
                        children: [
                          (0, g.jsx)("img", {
                            src: `https://img.alltocon.com/img/static/desktop/brand/${r.default.brand.code}/logo.png`,
                            alt: "",
                            className: "footer-logo",
                          }),
                          (0, g.jsx)("div", {
                            className: "footer-head",
                            children: i.i18n["contact.us"],
                          }),
                          (0, g.jsx)("div", {
                            className: "footer-contact",
                            children: (0, g.jsx)("ul", {
                              children: (0, g.jsx)(f.default, {
                                itemRenderer: (e) => {
                                  let {
                                    shortcutProps: t,
                                    shortcut: a,
                                    renderShortcutIcon: s,
                                  } = e;
                                  const n = a.get("code"),
                                    r = a.getIn(["subtitle", i.currLocale]);
                                  return (0, g.jsx)(
                                    "li",
                                    {
                                      id: `shortcut_${n}`,
                                      children: (0, g.jsxs)("a", {
                                        ...t,
                                        children: [
                                          s({
                                            iconType: a.get("defaultimage"),
                                            isDefault: a.get("isdefaultimage"),
                                            url: a.get("customimage"),
                                          }),
                                          (0, g.jsx)("h2", {
                                            children: (0, d.getName)(
                                              a.get("title")
                                            ),
                                          }),
                                          (0, g.jsx)("p", {
                                            children: r,
                                          }),
                                        ],
                                      }),
                                    },
                                    n
                                  );
                                },
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
              }),
              (0, g.jsx)("div", {
                className: "footer-provider",
                children: (0, g.jsx)("div", {
                  className: "main-wrap",
                  children: (0, g.jsx)(u.default, {}),
                }),
              }),
              (0, g.jsx)("div", {
                className: "copy",
                children: (0, g.jsxs)("div", {
                  className: "main-wrap",
                  children: [
                    r.default.brand.copyright,
                    (0, g.jsx)(l.default, {}),
                  ],
                }),
              }),
            ],
          });
        }
      }
      t.A = h;
    },
    23156: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94188)),
        r = a(78106),
        i = a(67467),
        o = a(38560),
        l = s(a(15062));
      const { custom: c, customMobile: d } = n.default.brand;
      t.default = () => {
        const e = (0, r.useHistory)(),
          t = (0, i.useSelector)((e) => e.players.logined),
          a = o.isDesktop && c.casinoPage,
          s = o.isMobile && d.casinoPage,
          n = a || s;
        return {
          redirectToCasinoPage: () => {
            a && e.push(l.default.DESKTOP_CASINO_PAGE),
              s && e.push(l.default.CASINO_PAGE);
          },
          isCasinoPage: n,
          isLaunchViaGame: (e) => n && "VIA_CASINO" === e && t,
        };
      };
    },
    23274: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    23542: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          const { staticpagesMap: t } = this.props,
            a = t.getIn(["InfoMap", e, "displayname"]);
          return a
            ? (0, i.jsx)(n.Link, {
                "data-code": e,
                to: `/info/${e}`,
                children: (0, r.getName)(a),
              })
            : null;
        }),
        s(a(96540));
      var n = a(28651),
        r = a(93185),
        i = a(74848);
    },
    23908: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    24853: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    26758: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540)),
        s(a(46942)),
        (t.default = (e) => {
          let { className: t, style: a } = e;
          return null;
        });
    },
    27262: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = s(a(49202)),
        r = a(51628),
        i = a(74848);
      t.default = () =>
        (0, i.jsx)("div", {
          className: "submenu",
          children: (0, i.jsxs)("div", {
            className: "qr-item",
            children: [
              (0, i.jsx)("div", {
                className: "qr-android",
                children: (0, i.jsx)(n.default, {
                  tip: r.i18n["app.download.android"],
                }),
              }),
              (0, i.jsx)("div", {
                className: "qr-ios",
                children: (0, i.jsx)(n.default, {
                  tip: r.i18n["app.download.ios"],
                }),
              }),
            ],
          }),
        });
    },
    27775: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    27909: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(91913));
      a(69904), (t.default = n.default);
    },
    28015: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    28328: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    29322: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    29506: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    29712: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(8269)),
        i = s(a(63237)),
        o = a(67467),
        l = a(28651),
        c = s(a(77844)),
        d = a(84707),
        u = a(38560),
        p = a(24439),
        m = a(51628),
        f = a(15062),
        g = a(93185),
        h = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(30817));
      t.default = function (e) {
        const t = (0, o.useDispatch)(),
          a = (0, l.useHistory)(),
          s = (0, r.default)(),
          v = (0, i.default)(),
          y = (0, o.useSelector)((e) => e.games.maintenanceMap),
          j = (0, n.useCallback)(
            (t) => {
              e({
                type: t,
              });
            },
            [e]
          );
        return (0, n.useCallback)(
          (n) => {
            let { menuBarType: r, content: i, newWindow: o = !1 } = n;
            switch (r) {
              case p.menuBarTypeEnum.PRODUCT:
                u.isDesktop ? a.push(f.paths[i]) : j(i);
                break;
              case p.menuBarTypeEnum.FIX_PAGE:
                if (
                  (!u.isDesktop &&
                    e &&
                    "PAGE_QR" !== i &&
                    "FAVORITE_GAMES" !== i &&
                    j(i),
                  f.paths[i])
                ) {
                  const e = s(f.paths[i]);
                  e &&
                    (o
                      ? window.open(e, "_blank", "noopener,noreferrer")
                      : a.push(e));
                }
                break;
              case p.menuBarTypeEnum.CUSTOM_PAGE:
                if ((0, c.default)(i))
                  i.includes(f.paths.RESULT_CENTER) &&
                  (0, g.isMaintenance)(y, ["LOTTERY", "AE_LOT"])
                    ? t(
                        (0, d.openErrorModal)(
                          m.i18n[`error.${h.AJAX_PUT_LAUNCH_GAME_FAILURE}.4`]
                        )
                      )
                    : window.open(i, "_blank", "noopener,noreferrer");
                else if (
                  (0, c.default)(i, {
                    require_host: !1,
                  })
                ) {
                  const e = s(i);
                  e && a.push(e);
                }
                break;
              case p.menuBarTypeEnum.GAME: {
                const [e, t, a, s] = i.split("@");
                v({
                  producttypeid: e,
                  distributorid: t,
                  gameproviderid: a,
                  gameid: s,
                });
              }
            }
          },
          [a, s, e, y]
        );
      };
    },
    30105: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    31011: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94188)),
        r = s(a(55665)),
        i = a(38560);
      const {
        brand: {
          custom: {
            components: { Live: o },
          },
          customMobile: {
            components: { Live: l },
          },
        },
      } = n.default;
      t.default = () => {
        const { isLiveSeparateGames: e } = (0, r.default)((e) => ({
          isLiveSeparateGames: e.games.isLiveSeparateGames,
        }));
        return {
          isUseLiveSeparateGames:
            (i.isMobile
              ? ["template-col1-gpk"].includes(l)
              : ["live4"].includes(o)) && e,
        };
      };
    },
    32087: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.rewardList = t.rewardIndex = t.default = void 0);
      const a = (t.rewardList = [
        {
          rewardId: "1",
          rewardRatio: 1,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "482",
          rewardRatio: 482,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "35",
          rewardRatio: 35,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "2",
          rewardRatio: 2,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "72",
          rewardRatio: 72,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "523",
          rewardRatio: 523,
          order: 1e3 * Math.random(),
        },
      ].sort((e, t) => e.order - t.order));
      (t.rewardIndex = a.findIndex((e) => 1 === e.rewardRatio)),
        (t.default = {
          promoid: "72231863-c879-4550-b287-449f3a867a5c",
          promogroup: 0,
          promotype: 15,
          promoname: "yung-註冊輪盤",
          promotitle: {
            "en-US": "yung-註冊輪盤-前台英文",
            "zh-CN": "yung-註冊輪盤-前台簡中",
          },
          promodescription: null,
          promodescriptionlink: null,
          promoviewtype: "NO_VIEW",
          leaderboardviewtype: "UNRESTRICTED",
          showinpersonalinfo: !1,
          subwalletid: null,
          subwalletautoclosevalue: null,
          allpromotargets: !1,
          autoapprove: !0,
          claim: !1,
          claimttl: null,
          removelatestgwc: !1,
          bonustype: 0,
          deposittype: null,
          turnovertype: 1,
          bonusvalue: 1,
          minrandombonus: null,
          maxbonus: null,
          turnovervalue: 1,
          selfselect: !1,
          servicefee: 0,
          adminfeeratio: 0,
          displayorder: 6,
          hide: !1,
          startdate: 1705635996236,
          enddate: 1705657541790,
          dailystarttime: null,
          dailyendtime: null,
          platform: null,
          currency: "CNY",
          vipgroupids: null,
          vipgroupnames: null,
          invalidplayertags: null,
          reqtimelimit: null,
          forbidreqduring: null,
          forbidhasunfulfilledturnover: null,
          enableVerifiedMobile: !1,
          depositcount: null,
          sameiprisk: !1,
          samefingerprintrisk: !1,
          samenamerisk: !1,
          samemobilerisk: !1,
          sameemailrisk: !1,
          risklevel: null,
          totalapprovalcount: null,
          totalapprovalbonus: null,
          totalapprovalcountperplayer: 1,
          periodApprovalCount: null,
          settleperiod: "NONE",
          recycletype: null,
          bonusttl: null,
          bonusexpiredate: null,
          promocategoryid: "5d6b803f-1994-47af-b452-d8c8e0720520",
          promocategoryname: null,
          status: 0,
          active: null,
          createdat: 1705635996236,
          createdby: "yung001",
          updatedat: 1705635996236,
          updatedby: "yung001",
          defaultstyle: null,
          unitofreqtimelimit: "MINUTE",
          ratelimitforapplyingreq: null,
          depositgiventimetype: null,
          depositgiventimesetting: null,
          depositgivenstarttime: null,
          depositgivenendtime: null,
          depositgiventimezone: null,
          depositgivendays: null,
          depositgivendates: null,
          newVipLevel: null,
          promoPeriodType: null,
          promoStatisticsType: null,
          lastDepositCondition: !1,
          lastValidBetCondition: !1,
          thirdpartypaymentcodes: null,
          depositPaymentTypes: null,
          deleted: !1,
          subWalletProductTypeId: null,
          subWalletDistributorId: null,
          subWalletGameProviderId: null,
          subWalletGameId: null,
          promotionCode: null,
          promobanner: [
            {
              promoid: "72231863-c879-4550-b287-449f3a867a5c",
              lang: "zh-CN",
              platform: 2,
              type: "BANNER",
              imageurl: null,
              description: null,
              useDefault: null,
            },
            {
              promoid: "72231863-c879-4550-b287-449f3a867a5c",
              lang: "zh-CN",
              platform: 2,
              type: "GRID",
              imageurl: null,
              description: null,
              useDefault: null,
            },
          ],
          promoranges: [],
          promotargets: null,
          promoStatisticsTargets: null,
        });
    },
    32141: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    32711: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    33568: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(93146)),
        i = s(a(13876));
      a(18356);
      var o = a(74848);
      const l = n.default.memo((e) => {
        let { velocity: t, items: a, itemFontSize: s, itemMarginRight: l } = e;
        const c = (0, n.useRef)(null),
          d = (0, n.useRef)(null),
          u = (0, n.useRef)(null),
          p = (0, n.useRef)(0),
          m = (0, i.default)(),
          f = (0, n.useCallback)(
            (e) => {
              (p.current -= e * t),
                p.current + d.current.clientWidth < 0 &&
                  (p.current += d.current.clientWidth + c.current.clientWidth),
                (d.current.style.transform = `translateX(${p.current}px)`);
            },
            [p, d, d]
          ),
          g = (0, n.useCallback)(
            (e) => {
              m() &&
                (null !== u.current && f(e - u.current),
                (u.current = e),
                (0, r.default)(g));
            },
            [m, u, f]
          );
        return (
          (0, n.useEffect)(() => {
            (0, r.default)(g);
          }, []),
          (0, o.jsx)("div", {
            ref: c,
            className: "new-marquee",
            children: (0, o.jsx)("div", {
              ref: d,
              className: "new-marquee-content",
              style: {
                transform: `translateX(${p.current}px)`,
              },
              children: a.map((e, t) =>
                (0, o.jsx)(
                  "div",
                  {
                    className: "new-marquee-item",
                    style: {
                      fontSize: s,
                      marginRight: l,
                    },
                    children: e,
                  },
                  t
                )
              ),
            }),
          })
        );
      });
      (l.defaultProps = {
        velocity: 0.12,
        items: [],
        itemFontSize: 14,
        itemMarginRight: 25,
      }),
        (t.default = l);
    },
    34322: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = a(74848);
      t.default = (e) => {
        const {
          src: t,
          onClose: a,
          className: s = "",
          closeBtn: r,
          onClick: i,
          style: o = {},
          onMouseEnter: l,
          onMouseLeave: c,
        } = e;
        return (0, n.jsxs)("div", {
          className: `adItem ${s}`,
          style: o,
          children: [
            (0, n.jsx)("img", {
              src: t,
              onClick: i,
              alt: "",
            }),
            r &&
              (0, n.jsx)("i", {
                className: "mps-close",
                onClick: a,
                onMouseEnter: l,
                onMouseLeave: c,
              }),
          ],
        });
      };
    },
    34631: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(63237)),
        i = s(a(55665)),
        o = s(a(46942)),
        l = s(a(5556)),
        c = a(78106),
        d = s(a(43742)),
        u = s(a(45310)),
        p = s(a(94188)),
        m = a(39418),
        f = a(74848);
      const g = Math.floor(window.innerWidth / 250),
        h = (e) => ({
          hotGameTypeMap: e.games.hotGameTypeMap,
          maintenanceMap: e.games.maintenanceMap,
        }),
        v = (e, t) => {
          let { content: a } = e;
          const { hotGameTypeMap: s, maintenanceMap: l } = (0, i.default)(h),
            v = s.get(a),
            y = (0, r.default)({
              toggleLoginPopup: t.toggleLoginPopup,
            }),
            { push: j } = (0, c.useHistory)(),
            x = (0, n.useCallback)(
              (e, a) => {
                if ("ae888" !== p.default.brand.code && a > g) return null;
                const {
                  maintenance: s,
                  gameproviderid: n,
                  producttypeid: r,
                  distributorid: i,
                  gameid: c,
                  imgPath: h,
                  gameName: v,
                  handleHotGameClick: x,
                  favoriteGameMap: M,
                } = (0, m.getDesktopHotGameRenderData)({
                  game: e,
                  maintenanceMap: l,
                  launchGame: y,
                  historyPush: j,
                });
                return (0, f.jsxs)(
                  "li",
                  {
                    className: (0, o.default)("game-item", {
                      maintenance: s,
                    }),
                    "data-gameprovider": r,
                    "data-distributorid": i,
                    "data-gameid": c,
                    children: [
                      (0, f.jsx)("a", {
                        onClick: () => {
                          x();
                        },
                        children: (0, f.jsx)("img", {
                          src: h,
                          className: "cover",
                          alt: v,
                        }),
                      }),
                      (0, f.jsx)(u.default, {
                        toggleLoginPopup: t.toggleLoginPopup,
                        game: M,
                        compType: "hotGame",
                      }),
                      (0, f.jsx)(d.default, {
                        producttypeid: r,
                        gameproviderid: n,
                        displayMessage: !1,
                      }),
                    ],
                  },
                  a
                );
              },
              [l, y, j, t.toggleLoginPopup]
            );
          return v
            ? (0, f.jsx)("div", {
                className: "submenu",
                children: (0, f.jsx)("ul", {
                  className: "hot-games",
                  children: v.map(x),
                }),
              })
            : null;
        };
      (v.contextTypes = {
        toggleLoginPopup: l.default.func,
      }),
        (t.default = v);
    },
    34902: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    35662: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    35696: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    35886: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94770));
      a(14159), (t.default = n.default);
    },
    35975: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    37140: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    39280: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(55665)),
        i = a(67467),
        o = a(78106),
        l = a(4347),
        c = a(15062);
      t.default = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const { toggleLoginPopup: t } = e,
          a = (0, n.useRef)(!1),
          s = (0, i.useDispatch)(),
          d = (0, o.useHistory)(),
          { logined: u } = (0, r.default)((e) => ({
            logined: e.players.logined,
          }));
        return {
          onAddMyFavoriteGame: (0, n.useCallback)(
            (e) => {
              if (!a.current)
                if (((a.current = !0), u))
                  s((0, l.addMyFavoriteGame)(e))
                    .then(() => {
                      a.current = !1;
                    })
                    .catch(() => {
                      a.current = !1;
                    });
                else if (t) t(), (a.current = !1);
                else {
                  const t = {
                    pathname: c.paths.LOGIN,
                    state: {
                      path: c.paths[e.get("producttypeid")],
                    },
                  };
                  d.push(t);
                }
            },
            [s, d, u, t]
          ),
          onDeleteMyFavoriteGame: (0, n.useCallback)(
            (e) => {
              a.current ||
                ((a.current = !0),
                s((0, l.deleteMyFavoriteGame)(e))
                  .then(() => {
                    a.current = !1;
                  })
                  .catch(() => {
                    a.current = !1;
                  }));
            },
            [s]
          ),
        };
      };
    },
    41388: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(43693)),
        r = a(67467),
        i = a(47459),
        o =
          (s(a(5556)),
          (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var a,
                s,
                n = {
                  __proto__: null,
                  default: e,
                };
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return n;
              if ((a = t)) {
                if (a.has(e)) return a.get(e);
                a.set(e, n);
              }
              for (const t in e)
                "default" !== t &&
                  {}.hasOwnProperty.call(e, t) &&
                  ((s =
                    (a = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, t)) &&
                  (s.get || s.set)
                    ? a(n, t, s)
                    : (n[t] = e[t]));
              return n;
            })(e);
          })(a(96540))),
        l = s(a(50042)),
        c = (a(93185), a(51628), a(76066)),
        d = a(74848);
      class u extends o.Component {
        constructor() {
          super(...arguments),
            (0, n.default)(this, "timer", null),
            (0, n.default)(this, "captchaReloadDisabledTime", null),
            (0, n.default)(this, "state", {
              captchaReloadDisabled: !1,
            }),
            (0, n.default)(this, "getCaptcha", () => {
              this.props.getRandomCaptcha(),
                this.props.getRandomCaptchaV2().then((e) => {
                  void 0 === e &&
                    setTimeout(() => {
                      this.props.getRandomCaptchaV2();
                    }, 2e3);
                });
            }),
            (0, n.default)(this, "setRenewCaptchaTimer", () => {
              this.timer = setInterval(() => this.getCaptcha(), 18e4);
            }),
            (0, n.default)(this, "clearCaptchaTimer", () => {
              clearInterval(this.timer);
            }),
            (0, n.default)(this, "renewCaptcha", () => {
              this.clearCaptchaTimer(),
                this.getCaptcha(),
                this.setRenewCaptchaTimer();
            }),
            (0, n.default)(this, "onChangeSecure", (e) => {
              var t;
              const a = e.target.value,
                s =
                  null === (t = this.props.captcha) || void 0 === t
                    ? void 0
                    : t.uuid;
              this.props.checkSecure({
                captcha: a,
                captchauuid: s,
              });
            }),
            (0, n.default)(this, "clearCurrValue", () => {
              var e;
              this.captchaInput.value = "";
              const t =
                null === (e = this.props.captcha) || void 0 === e
                  ? void 0
                  : e.uuid;
              this.props.checkSecure({
                captcha: "",
                captchauuid: t,
              });
            }),
            (0, n.default)(this, "getCaptchaInfo", () => {
              var e;
              return {
                captcha: this.captchaInput.value,
                captchauuid:
                  null === (e = this.props.captcha) || void 0 === e
                    ? void 0
                    : e.uuid,
              };
            }),
            (0, n.default)(this, "onCaptchaReload", () => {
              const { captchaReloadDisabled: e } = this.state;
              e ||
                (this.setState({
                  captchaReloadDisabled: !0,
                }),
                (this.captchaReloadDisabledTimer = setTimeout(() => {
                  this.setState({
                    captchaReloadDisabled: !1,
                  });
                }, 2e3)),
                this.renewCaptcha());
            });
        }
        componentDidMount() {
          this.getCaptcha(), this.setRenewCaptchaTimer();
        }
        componentWillUnmount() {
          this.clearCaptchaTimer(),
            clearTimeout(this.captchaReloadDisabledTimer);
        }
        UNSAFE_componentWillReceiveProps(e) {
          if (!this.props.captcha && e.captcha) {
            const t = e.captcha.uuid;
            this.props.checkSecure({
              captcha: this.captchaInput.value,
              captchauuid: t,
            });
          }
        }
        render() {
          const { captcha: e, onEnter: t, placeholder: a = "" } = this.props,
            { captchaReloadDisabled: s } = this.state;
          return (0, d.jsxs)("div", {
            className: "nrc-form-input secure",
            children: [
              (0, d.jsx)("input", {
                ref: (e) => (this.captchaInput = e),
                type: "text",
                name,
                onChange: this.onChangeSecure,
                onKeyDown: (e) => {
                  13 === e.keyCode && t();
                },
                placeholder: a,
              }),
              e
                ? (0, d.jsx)("div", {
                    children: (0, d.jsx)("img", {
                      alt: "captcha",
                      src: e.image,
                    }),
                  })
                : (0, d.jsx)(l.default, {
                    style: {
                      backgroundColor: "transparent",
                      width: "auto",
                    },
                    spinnerName: "chasing-dots",
                  }),
              e &&
                (0, d.jsx)("i", {
                  className: "mps-update",
                  style: s
                    ? {
                        cursor: "not-allowed",
                        opacity: "0.3",
                      }
                    : {},
                  onClick: this.onCaptchaReload,
                }),
            ],
          });
        }
      }
      (u.defaultProps = {
        checkSecure: () => {},
        onEnter: () => {},
      }),
        (t.default = (0, r.connect)(
          (e) => ({
            isLoadingCaptcha: e.players.isLoadingCaptcha,
            captcha: e.players.captcha,
          }),
          (e) =>
            (0, i.bindActionCreators)(
              {
                getRandomCaptcha: c.getRandomCaptcha,
                getRandomCaptchaV2: c.getRandomCaptchaV2,
              },
              e
            ),
          null,
          {
            forwardRef: !0,
          }
        )(u));
    },
    42323: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    42412: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(94188));
      const { custom: r, customMobile: i } = n.default.brand,
        o = (e, t) => {
          e.keys()
            .filter((e) => t.some((t) => e.includes(`${t}.scss`)))
            .forEach(e);
        };
      t.default = (e) => {
        var t, s, n;
        if (
          ("reg" === e &&
            null !== (t = i.components.Wheels) &&
            void 0 !== t &&
            t.length &&
            a(70466)(`./${i.components.Wheels[0]}.scss`),
          "desktop" === e &&
            null !== (s = r.components.Wheels) &&
            void 0 !== s &&
            s.length)
        ) {
          const e = a(65452);
          o(e, r.components.Wheels);
        }
        if (
          "mobile" === e &&
          null !== (n = i.components.Wheels) &&
          void 0 !== n &&
          n.length
        ) {
          const e = a(75678);
          o(e, i.components.Wheels);
        }
      };
    },
    42648: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(33568));
      t.default = n.default;
    },
    43742: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = a(67467),
        r = a(70913),
        i = a(51628),
        o = a(93185),
        l = a(74848);
      const c = (0, n.connect)(
        (e) => ({
          maintenanceMap: e.games.maintenanceMap,
        }),
        null
      )((e) => {
        const {
            maintenanceMap: t,
            producttypeid: a,
            gameproviderid: s,
            displayMessage: n = !0,
          } = e,
          c = (0, o.isMaintenance)(t, [a, s]),
          d = c ? t.getIn([a, s]) : null,
          u = null == d ? void 0 : d.get("nextstarttime"),
          p = null == d ? void 0 : d.get("nextendtime"),
          m = null == d ? void 0 : d.get("notifyafterfinished"),
          f = d ? d.getIn(["message", i.currLocale]) || "" : null;
        return c
          ? (0, l.jsxs)("div", {
              className: `maintenance-block ${i.currLocale}`,
              children: [
                u &&
                  p &&
                  (0, l.jsx)("div", {
                    className: "time",
                    children: (0, o.i18nVariables)(
                      i.i18n["maintenance.duration"],
                      {
                        STARTTIME: (0, r.formatDateTime)(u),
                        ENDTIME: (0, r.formatDateTime)(p),
                      }
                    ),
                  }),
                u &&
                  m &&
                  (0, l.jsx)("div", {
                    className: "time",
                    children: (0, o.i18nVariables)(
                      i.i18n["maintenance.notifyafterfinished"],
                      {
                        STARTTIME: (0, r.formatDateTime)(u),
                      }
                    ),
                  }),
                n &&
                  (0, l.jsx)("div", {
                    className: "message",
                    children: f,
                  }),
              ],
            })
          : null;
      });
      t.default = c;
    },
    43910: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    44404: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = (s(a(5556)), s(a(46942))),
        i = s(a(72524)),
        o = s(a(13876)),
        l = s(a(62828)),
        c = s(a(15361));
      a(47656);
      var d = a(74848);
      const u = (e) => {
        let {
          delay: t,
          className: a,
          children: s,
          rowHeight: u,
          displayAmount: p,
        } = e;
        const m = (0, o.default)(),
          { items: f, total: g } = (0, n.useMemo)(() => {
            const e = n.default.Children.toArray(s),
              t = e.length;
            return t > p
              ? {
                  total: t,
                  items: [...e, ...e.slice(0, p)],
                }
              : {
                  total: t,
                  items: e,
                };
          }, [s, p]),
          [h, v] = (0, i.default)(() => ({
            key: new Date().getTime(),
            marginTop: 0,
            startIndex: 0,
          })),
          y = g > p && !h.marginTop;
        return (
          (0, l.default)(
            () => {
              v({
                marginTop: -u,
              });
            },
            y ? t : null
          ),
          (0, c.default)(() => {
            y ||
              setTimeout(() => {
                m() &&
                  v((e) => {
                    const t = e.startIndex + 1 > g ? 0 : e.startIndex + 1;
                    return {
                      key: new Date().getTime(),
                      marginTop: 0,
                      startIndex: t,
                    };
                  });
              }, 300);
          }, [y]),
          (0, d.jsx)("div", {
            className: "message-slider-up",
            style: {
              height: u * p,
            },
            children: (0, d.jsx)(
              "div",
              {
                className: (0, r.default)(a, "message-slider-up-content"),
                style: {
                  marginTop: h.marginTop,
                },
                children: f
                  .slice(h.startIndex, h.startIndex + p + 1)
                  .map((e) => e),
              },
              h.key
            ),
          })
        );
      };
      (u.defaultProps = {
        delay: 3e3,
      }),
        (t.default = u);
    },
    44543: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = a(64856),
        r = a(74848);
      t.default = (e) => {
        let { startDate: t, baseBonus: a } = e;
        const s = ((Date.now() - t) / 1e3 / 20) * a,
          { countUp: i } = (0, n.useCountUp)({
            start: 0,
            end: s,
            decimals: 2,
            separator: ",",
          });
        return (0, r.jsx)("div", {
          className: "amount",
          children: i,
        });
      };
    },
    45310: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(18775));
      a(1459), (t.default = n.default);
    },
    45520: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = s(a(46942)),
        r = a(78106),
        i = s(a(17791)),
        o = s(a(82331)),
        l = s(a(58009)),
        c = s(a(20934)),
        d = s(a(77034)),
        u = s(a(47907)),
        p = s(a(73485)),
        m = s(a(94188)),
        f = a(51628),
        g = s(a(35886)),
        h = a(74848);
      const v = {
          Top: a(716).A,
          Header: a(50454).A,
          Navigation: a(46061).A,
          Menu: a(64328).A,
          News: a(20824).A,
          Main: a(75776).A,
          Footer: a(23100).A,
        },
        y = m.default.order.LAYOUT,
        j = {
          home: (e) => {
            let { getFloatingAds: t, floatingAdsSetting: a } = e;
            return (0, h.jsxs)(h.Fragment, {
              children: [
                (0, h.jsx)(p.default, {
                  i18n: f.i18n,
                  getFloatingAds: t,
                  floatingAdsSetting: a,
                }),
                (0, h.jsx)(g.default, {}),
                (0, h.jsx)(c.default, {}),
              ],
            });
          },
        };
      t.default = (0, r.withRouter)((e) => {
        const {
            history: {
              location: { pathname: t },
            },
            customLayout: a,
            logined: s,
            pageType: r = "home",
          } = e,
          c =
            "member-center" === r
              ? "member-center"
              : t.substring(1).replace(/\//g, " ") || "root",
          p = a || y,
          m = j[r];
        return (0, h.jsxs)("div", {
          className: (0, n.default)("app", c, {
            logined: s,
          }),
          children: [
            (0, h.jsx)(d.default, {
              path: t,
            }),
            (0, h.jsx)(o.default, {}),
            (0, h.jsxs)(l.default, {
              children: [
                (0, h.jsx)(u.default, {
                  code: "loginpopup",
                }),
                m &&
                  (0, h.jsx)(m, {
                    getFloatingAds: e.getFloatingAds,
                    floatingAdsSetting: e.floatingAdsSetting,
                  }),
                (0, h.jsx)(i.default, {
                  platform: "desktop",
                  pageType: r,
                }),
              ],
            }),
            p.map((t) => {
              const a = v[t];
              return a
                ? "Footer" === t
                  ? (0, h.jsx)(l.default, {
                      children: (0, h.jsx)(
                        a,
                        {
                          ...e,
                        },
                        t
                      ),
                    })
                  : (0, h.jsx)(
                      a,
                      {
                        ...e,
                      },
                      t
                    )
                : null;
            }),
          ],
        });
      });
    },
    46061: (e, t, a) => {
      "use strict";
      var s = a(24994);
      t.A = void 0;
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = a(78106),
        i = a(51628),
        o = s(a(17471)),
        l = s(a(97184)),
        c = s(a(2332)),
        d = a(74848);
      class u extends n.Component {
        constructor(e) {
          super(e),
            (this.state = {
              showNewsList: !1,
            });
        }
        render() {
          const { news: e } = this.props;
          return (0, d.jsxs)("header", {
            children: [
              (0, d.jsx)("div", {
                className: "main-wrap main-header navigation",
                children: (0, d.jsx)(c.default, {}),
              }),
              this.state.showNewsList &&
                (0, d.jsxs)(o.default, {
                  className: "news-list",
                  onHandleClose: () => "getRidOfErrorMessage",
                  children: [
                    (0, d.jsxs)("div", {
                      className: "header",
                      children: [
                        (0, d.jsx)("h2", {
                          className: "title-center",
                          children: i.i18n["latest.news"],
                        }),
                        (0, d.jsx)("i", {
                          className: "mps-close",
                          onClick: () =>
                            this.setState({
                              showNewsList: !1,
                            }),
                        }),
                      ],
                    }),
                    (0, d.jsx)(l.default, {
                      news: e,
                    }),
                  ],
                }),
            ],
          });
        }
      }
      t.A = (0, r.withRouter)(u);
    },
    47656: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    47907: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(96244));
      a(4957), (t.default = n.default);
    },
    49202: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(12695)),
        i = s(a(15286)),
        o = a(74848);
      t.default = (e) => {
        const { size: t = 110, tip: a } = e,
          { appURL: s } = (0, r.default)(),
          l = e.customURL || s;
        return l
          ? (0, o.jsxs)(n.Fragment, {
              children: [
                (0, o.jsx)("div", {
                  children: (0, o.jsx)(i.default, {
                    value: l,
                  }),
                }),
                (0, o.jsx)("h4", {
                  children: a,
                }),
              ],
            })
          : "";
      };
    },
    50454: (e, t, a) => {
      "use strict";
      var s = a(24994);
      t.A = void 0;
      var n = s(a(43693)),
        r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        i = a(40961),
        o = (s(a(5556)), a(78106)),
        l = s(a(27179)),
        c = s(a(46942)),
        d = a(16510),
        u = a(51628),
        p = s(a(15062)),
        m = a(93185),
        f = s(a(79293)),
        g = s(a(1984)),
        h = s(a(11941)),
        v = a(74376),
        y = s(a(94188)),
        j = a(70913),
        x = (a(28651), a(57160)),
        M = (s(a(61499)), s(a(87282)), s(a(5662))),
        b = a(74848);
      a(30105);
      const w = [u.currLocale],
        _ = y.default.locales
          ? (0, m.sortByGivenArray)(y.default.locales, w)
          : w;
      class N extends r.Component {
        constructor(e) {
          super(e),
            (0, n.default)(this, "toggleLangList", () => {
              const e = this.refs.langWrap.classList;
              e.contains("active") ? e.remove("active") : e.add("active");
            }),
            (this.state = {
              showLogoutConfirmModal: !1,
              time: (0, j.convertDateTime)(new Date().getTime() - 36e5),
            });
        }
        componentDidMount() {
          const { saveFingerPrint2: e } = this.props;
          (0, x.getFingerprint2)(e),
            (this.timer = setInterval(() => {
              this.setState({
                time: (0, j.convertDateTime)(new Date().getTime() - 36e5),
              });
            }, 1e3));
        }
        componentWillUnmount() {
          clearInterval(this.timer);
        }
        renderLangHandler() {
          const e = _.map((e) =>
            (0, b.jsxs)(
              "li",
              {
                className: `lang-item ${v.localeToNickname[e]}`,
                onClick: () => (0, u.changeLocale)(e),
                children: [
                  (0, b.jsx)("i", {
                    className: `flag-icon flag-icon-${v.localeToNickname[e]} flag-icon-squared`,
                  }),
                  u.i18n[e],
                ],
              },
              e
            )
          );
          return (0, b.jsxs)("div", {
            className: "lang",
            ref: "langWrap",
            onClick: this.toggleLangList,
            children: [
              (0, b.jsxs)("div", {
                className: "lang-toggle",
                children: [
                  u.i18n[_[0]],
                  (0, b.jsx)("i", {
                    className: `flag-icon flag-icon-${
                      v.localeToNickname[_[0]]
                    } flag-icon-squared`,
                  }),
                  (0, b.jsx)("i", {
                    className: "mps-dropdown-arrow",
                  }),
                ],
              }),
              (0, b.jsx)("div", {
                className: "lang-list-wrap",
                children: (0, b.jsx)("ul", {
                  className: "lang-list",
                  children: e,
                }),
              }),
            ],
          });
        }
        render() {
          const {
              history: { push: e },
              logined: t,
              isLoading: a,
              logoutUser: s,
              totalUnreadMsgCount: n,
              walletMap: r,
              currency: o,
              getProfileLoading: m,
              getUserProfile: v,
            } = this.props,
            { showLogoutConfirmModal: j, time: x } = this.state,
            w = r.getIn(["MAIN", "available"]);
          return (0, b.jsxs)("div", {
            className: "quick-nav",
            children: [
              a ? (0, b.jsx)(f.default, {}) : null,
              (0, b.jsxs)("div", {
                className: "main-header",
                children: [
                  (0, b.jsx)("div", {
                    className: "logo",
                    onClick: () => e(p.default.ROOT),
                    style: {
                      backgroundImage: `url(https://img.alltocon.com/img/static/desktop/brand/${y.default.brand.code}/logo.png)`,
                    },
                  }),
                  t
                    ? (0, b.jsxs)("div", {
                        className: "right",
                        children: [
                          (0, b.jsxs)("div", {
                            className: "account-tool",
                            children: [
                              (0, b.jsxs)("ul", {
                                className: "logined-nav",
                                children: [
                                  (0, b.jsx)("li", {
                                    children: (0, b.jsx)("a", {
                                      onClick: () => e(p.default.DEPOSITLIST),
                                      children: u.i18n["menu.deposit"],
                                    }),
                                  }),
                                  (0, b.jsx)("li", {
                                    children: (0, b.jsx)("a", {
                                      onClick: () => e(p.default.WITHDRAWLIST),
                                      children: u.i18n["menu.withdraw"],
                                    }),
                                  }),
                                  (0, b.jsx)("li", {
                                    children: (0, b.jsx)("a", {
                                      onClick: () => e(p.default.GAMEHISTORY),
                                      children: u.i18n["menu.gamerecord"],
                                    }),
                                  }),
                                  (0, b.jsx)("li", {
                                    children: (0, b.jsx)("a", {
                                      onClick: () => e(p.default.FINANHISTORY),
                                      children: u.i18n["menu.financehistory"],
                                    }),
                                  }),
                                  (0, b.jsx)("li", {
                                    className: "login-nav-inbox",
                                    children: (0, b.jsxs)("a", {
                                      onClick: () => e(p.default.INBOX),
                                      children: [
                                        u.i18n["inbox.message"],
                                        " ",
                                        `(${n})`,
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                              (0, b.jsx)("div", {
                                className: "id",
                                onClick: () => e(p.default.PROFILE),
                                children: l.default.get("playerid"),
                              }),
                              (0, b.jsx)(M.default, {}),
                              (0, b.jsx)("button", {
                                className: "header-btn btn-logout",
                                onClick: () =>
                                  this.setState({
                                    showLogoutConfirmModal: !0,
                                  }),
                                children: u.i18n.logout,
                              }),
                              j &&
                                (0, i.createPortal)(
                                  (0, b.jsx)(g.default, {
                                    handleClose: () =>
                                      this.setState({
                                        showLogoutConfirmModal: !1,
                                      }),
                                    handleConfirm: () => s(),
                                    sentence: u.i18n["logout.confirm"],
                                  }),
                                  document.querySelector("#root")
                                ),
                            ],
                          }),
                          (0, b.jsxs)("div", {
                            className: "wallet",
                            children: [
                              u.i18n[`currency${o}`],
                              " ",
                              void 0 !== w && (0, d.formatMoney)(w),
                              (0, b.jsx)("i", {
                                className: (0, c.default)("mps-update", {
                                  spin: m,
                                }),
                                onClick: () => v(),
                              }),
                            ],
                          }),
                          this.renderLangHandler(),
                        ],
                      })
                    : (0, b.jsxs)("div", {
                        className: "right",
                        children: [
                          (0, b.jsx)(h.default, {}),
                          this.renderLangHandler(),
                        ],
                      }),
                ],
              }),
            ],
          });
        }
      }
      t.A = (0, o.withRouter)(N);
    },
    51880: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(77325));
      a(32711), (t.default = n.default);
    },
    52557: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540)),
        a(65691);
      var n = a(74848);
      const r = (e) => {
        let { width: t, height: a, marginTop: s } = e;
        return (0, n.jsxs)("div", {
          className: "sk-fading-circle",
          style: {
            width: t,
            height: a,
            marginTop: s,
          },
          children: [
            (0, n.jsx)("div", {
              className: "sk-circle1 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle2 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle3 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle4 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle5 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle6 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle7 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle8 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle9 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle10 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle11 sk-circle",
            }),
            (0, n.jsx)("div", {
              className: "sk-circle12 sk-circle",
            }),
          ],
        });
      };
      (r.defaultProps = {
        width: 60,
        height: 60,
        marginTop: 60,
      }),
        (t.default = r);
    },
    54027: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        n = a(74848);
      const r = new Set();
      t.default = (e, t) => (a) => {
        const [i, o] = (0, s.useState)(!r.has(t)),
          l = (0, s.useCallback)(() => {
            o(!1), r.add(t);
          }, [r, o]);
        return i
          ? (0, n.jsx)(e, {
              ...a,
              onClose: l,
            })
          : null;
      };
    },
    56579: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    58015: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(44404));
      t.default = n.default;
    },
    58294: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = a(67467),
        i = s(a(15361)),
        o = s(a(41388)),
        l = a(74848);
      const c = (0, n.forwardRef)((e, t) => {
        const { captchaPlaceholder: a, onSubmit: s } = e,
          n = (0, r.useSelector)((e) => e.players.isCaptchaFailure);
        return (
          (0, i.default)(() => {
            t.current && (t.current.clearCurrValue(), t.current.renewCaptcha());
          }, [n]),
          (0, l.jsx)("div", {
            className: "captcha-input-wrapper",
            children: (0, l.jsx)(o.default, {
              ref: t,
              onEnter: () => s(),
            }),
          })
        );
      });
      t.default = c;
    },
    58358: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    59993: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    60507: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    60629: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    60971: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    61499: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(21840));
      a(1654), (t.default = n.default);
    },
    62812: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.UpgradeBounsModal = t.MissionCalendarDetail = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(55665)),
        i = s(a(53259)),
        o = a(67467),
        l = s(a(7032)),
        c = a(76066),
        d = s(a(6950)),
        u = s(a(15062)),
        p = a(74848);
      const m = (t.MissionCalendarDetail = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7209),
              a.e(3110),
              a.e(3333),
              a.e(7030),
              a.e(9757),
            ]).then(a.bind(a, 17030)),
          loading: l.default,
        })),
        f = (t.UpgradeBounsModal = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7209),
              a.e(3110),
              a.e(3333),
              a.e(7030),
              a.e(9757),
            ]).then(a.bind(a, 93314)),
          loading: l.default,
        })),
        g = (0, i.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(9542)]).then(a.bind(a, 34215)),
          loading: l.default,
        }),
        h = (e) => {
          const { platform: t, pageType: a } = e,
            s = (0, o.useDispatch)(),
            [i, l] = (0, n.useState)(!1),
            {
              getDepositPromoOpts: h,
              regLimitTimePromo: v,
              isRegLimitTimePromoSuc: y,
            } = (0, d.default)(),
            {
              showCalendar: j,
              pageLoaded: x,
              regLimitPromoExpireTime: M,
              regPromoReqTimeLimit: b,
            } = (0, r.default)((e) => ({
              showCalendar: e.players.showCalendar,
              pageLoaded: e.app.pageLoaded,
              regLimitPromoExpireTime: e.players.regLimitPromoExpireTime,
              regPromoReqTimeLimit: e.players.player.regPromoReqTimeLimit,
            })),
            w = (0, o.useSelector)((e) => e.players.newVipPrivileges),
            _ = "mobile" === t && location.pathname === u.default.RESETINFO,
            N = "PENDING" === (null == w ? void 0 : w.get("rewardStatus")),
            P = !N && j,
            k = (P || N) && !_,
            O = (0, n.useMemo)(
              () =>
                !i &&
                M > new Date().getTime() &&
                (null == v ? void 0 : v.length) > 0 &&
                "member-center" !== a,
              [i, a, M, null == v ? void 0 : v.length]
            ),
            C = (0, n.useCallback)(() => {
              s((0, c.setShowCalendarOff)());
            }, []),
            T = (0, n.useCallback)(() => {
              s((0, c.setUpgradeBounsModalOff)());
            }, []);
          return (
            (0, n.useEffect)(() => {
              x && (m.preload(), f.preload());
            }, [x]),
            (0, n.useEffect)(() => {
              M && !y && h();
            }, [M, v]),
            (0, p.jsxs)(p.Fragment, {
              children: [
                O &&
                  (0, p.jsx)(g, {
                    regLimitPromoExpireTime: M,
                    regLimitTimePromo: v,
                    closeRegLimitTimePromo: () => l(!0),
                    regPromoReqTimeLimit: b,
                  }),
                k &&
                  (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className: "hover-container mission-calendar",
                      children: [
                        N &&
                          (0, p.jsx)("div", {
                            className: "modal",
                            children: (0, p.jsx)(f, {
                              closeUpgradeBounsModal: T,
                            }),
                          }),
                        P &&
                          (0, p.jsx)("div", {
                            className: "modal",
                            children: (0, p.jsx)(m, {
                              platformStyleStatus: t,
                              closeModal: C,
                            }),
                          }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      t.default = n.default.memo(h);
    },
    64328: (e, t, a) => {
      "use strict";
      var s = a(24994);
      t.A = void 0;
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(46942)),
        i = s(a(5556)),
        o = s(a(72524)),
        l = s(a(11882)),
        c = s(a(94188)),
        d = a(51628),
        u = a(93185),
        p = a(74848);
      const m = (e) =>
          (0, p.jsx)("a", {
            ...e,
            rel: "nofollow",
            children: e.children,
          }),
        f = () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        },
        g = () => {
          const [e, t] = (0, o.default)(() => ({
            jun88ToggleClose: !1,
            lightMode: "true" === localStorage.getItem("lightMode"),
          }));
          return (
            (0, n.useEffect)(() => {
              e.lightMode
                ? document.body.classList.add("light")
                : document.body.classList.remove("light");
            }, [e.lightMode]),
            (0, n.useEffect)(() => {
              "vk7prod" === c.default.brand.code &&
                (!localStorage.getItem("lightMode") ||
                  (localStorage.getItem("lightMode") &&
                    "true" === localStorage.getItem("lightMode"))) &&
                t({
                  lightMode: !0,
                });
            }, []),
            (0, p.jsx)("div", {
              id: "shortcut_list",
              children: ((a) => {
                switch (c.default.brand.code) {
                  case "vk7prod":
                    return (0, p.jsxs)("div", {
                      className: "side-menu-wrap",
                      children: [
                        (0, p.jsx)("div", {
                          className: "color-mode",
                          children: (0, p.jsxs)("ul", {
                            children: [
                              (0, p.jsx)("li", {
                                className: (0, r.default)(
                                  {
                                    active: !e.lightMode,
                                  },
                                  "mode-item dark"
                                ),
                                onClick: () => {
                                  t({
                                    lightMode: !1,
                                  }),
                                    localStorage.setItem("lightMode", "false");
                                },
                              }),
                              (0, p.jsx)("li", {
                                className: (0, r.default)(
                                  {
                                    active: e.lightMode,
                                  },
                                  "mode-item light"
                                ),
                                onClick: () => {
                                  t({
                                    lightMode: !0,
                                  }),
                                    localStorage.setItem("lightMode", "true");
                                },
                              }),
                            ],
                          }),
                        }),
                        (0, p.jsx)("div", {
                          className: "side-menu",
                          children: (0, p.jsx)("ul", {
                            children: a,
                          }),
                        }),
                      ],
                    });
                  case "rb9prod":
                  case "ve7prod":
                  case "vg7prod":
                  case "ae888":
                  case "jun88th":
                  case "jun88":
                    return (0, p.jsx)("div", {
                      className: (0, r.default)("side-menu jun88-sidemenu", {
                        "is-close": e.jun88ToggleClose,
                      }),
                      children: (0, p.jsxs)("ul", {
                        children: [
                          a,
                          (0, p.jsx)("li", {
                            className: "jun88-sidemenu-toggle",
                            onClick: () =>
                              t({
                                jun88ToggleClose: !e.jun88ToggleClose,
                              }),
                            children: (0, p.jsx)("a", {}),
                          }),
                          (0, p.jsx)("li", {
                            className: "jun88-sidemenu-top",
                            onClick: f,
                            children: (0, p.jsx)("a", {}),
                          }),
                        ],
                      }),
                    });
                  default:
                    return (0, p.jsx)("div", {
                      className: "side-menu",
                      children: (0, p.jsx)("ul", {
                        children: a,
                      }),
                    });
                }
              })(
                (0, p.jsx)(l.default, {
                  itemRenderer: (e) => {
                    let {
                      shortcutProps: t,
                      shortcut: a,
                      renderShortcutIcon: s,
                    } = e;
                    const n = a.get("code"),
                      r = a.getIn(["subtitle", d.currLocale]);
                    return (0, p.jsx)(
                      "li",
                      {
                        id: `shortcut_${n}`,
                        children: (0, p.jsxs)(m, {
                          ...t,
                          children: [
                            s({
                              iconType: a.get("defaultimage"),
                              isDefault: a.get("isdefaultimage"),
                              url: a.get("customimage"),
                            }),
                            (0, p.jsx)("h2", {
                              children: (0, u.getName)(a.get("title")),
                            }),
                            (0, p.jsx)("p", {
                              "data-cont": r,
                              children: r,
                            }),
                          ],
                        }),
                      },
                      n
                    );
                  },
                })
              ),
            })
          );
        };
      (g.contextTypes = {
        toggleLoginPopup: i.default.func,
      }),
        (t.A = g);
    },
    65405: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(79096));
      a(58358), (t.default = n.default);
    },
    65452: (e, t, a) => {
      var s = {
        "./ae888.scss": 23908,
        "./d06prod.scss": 59993,
        "./example.scss": 9972,
        "./example1.scss": 66263,
        "./example2.scss": 4222,
        "./r39bet.scss": 42323,
        "./t38prod.scss": 82556,
        "./t98prod.scss": 81870,
        "./ta2prod.scss": 556,
        "./ta7prod.scss": 35975,
        "./ta8prod.scss": 34902,
        "./tb9prod.scss": 19226,
        "./tc7prod.scss": 16033,
        "./u30prod.scss": 60507,
        "./unc0001.scss": 86561,
        "./vh7prod.scss": 35696,
        "./x07prod.scss": 93974,
        "components/desktop/Roulette/pattern/ae888.scss": 23908,
        "components/desktop/Roulette/pattern/d06prod.scss": 59993,
        "components/desktop/Roulette/pattern/example.scss": 9972,
        "components/desktop/Roulette/pattern/example1.scss": 66263,
        "components/desktop/Roulette/pattern/example2.scss": 4222,
        "components/desktop/Roulette/pattern/r39bet.scss": 42323,
        "components/desktop/Roulette/pattern/t38prod.scss": 82556,
        "components/desktop/Roulette/pattern/t98prod.scss": 81870,
        "components/desktop/Roulette/pattern/ta2prod.scss": 556,
        "components/desktop/Roulette/pattern/ta7prod.scss": 35975,
        "components/desktop/Roulette/pattern/ta8prod.scss": 34902,
        "components/desktop/Roulette/pattern/tb9prod.scss": 19226,
        "components/desktop/Roulette/pattern/tc7prod.scss": 16033,
        "components/desktop/Roulette/pattern/u30prod.scss": 60507,
        "components/desktop/Roulette/pattern/unc0001.scss": 86561,
        "components/desktop/Roulette/pattern/vh7prod.scss": 35696,
        "components/desktop/Roulette/pattern/x07prod.scss": 93974,
      };
      function n(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (n.keys = function () {
        return Object.keys(s);
      }),
        (n.resolve = r),
        (e.exports = n),
        (n.id = 65452);
    },
    65691: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    65779: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = s(a(46942)),
        r = s(a(94188)),
        i = a(74848);
      const o = r.default.portal.apiServer.imageServer;
      t.default = (e) => {
        let { className: t, iconImageUrl: a = "" } = e;
        return (
          a &&
          (0, i.jsx)("img", {
            src: `${o}${a}`,
            className: (0, n.default)("hot-game-icon", {
              [t]: !!t,
            }),
            alt: "hot-game-icon",
          })
        );
      };
    },
    66263: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    66359: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    67346: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(63237)),
        i = s(a(55665)),
        o = s(a(46942)),
        l = s(a(5556)),
        c = a(78106),
        d = s(a(43742)),
        u = s(a(45310)),
        p = a(39418),
        m = a(74848);
      const f = (e) => ({
          myFavoriteGameList: e.games.myFavoriteGameList,
          maintenanceMap: e.games.maintenanceMap,
        }),
        g = (e, t) => {
          const { myFavoriteGameList: a, maintenanceMap: s } = (0, i.default)(
              f
            ),
            l = (0, r.default)({
              toggleLoginPopup: t.toggleLoginPopup,
            }),
            { push: g } = (0, c.useHistory)(),
            h = (0, n.useCallback)(
              (e, a) => {
                const {
                  producttypeid: n,
                  distributorid: r,
                  gameid: i,
                  gameName: c,
                  gameproviderid: f,
                  imgPath: h,
                  maintenance: v,
                  favoriteGameMap: y,
                  handleFavoriteGameClick: j,
                } = (0, p.getDesktopFavoriteGameRenderData)({
                  game: e,
                  maintenanceMap: s,
                  launchGame: l,
                  historyPush: g,
                });
                return (0, m.jsxs)(
                  "li",
                  {
                    className: (0, o.default)("game-item", {
                      maintenance: v,
                    }),
                    "data-gameprovider": n,
                    "data-distributorid": r,
                    "data-gameid": i,
                    children: [
                      (0, m.jsx)("a", {
                        onClick: () => {
                          j();
                        },
                        children: (0, m.jsx)("img", {
                          src: h,
                          className: "cover",
                          alt: c,
                        }),
                      }),
                      (0, m.jsx)(u.default, {
                        toggleLoginPopup: t.toggleLoginPopup,
                        game: y,
                        compType: "favGame",
                      }),
                      (0, m.jsx)(d.default, {
                        producttypeid: n,
                        gameproviderid: f,
                        displayMessage: !1,
                      }),
                    ],
                  },
                  a
                );
              },
              [s, l, g, t.toggleLoginPopup]
            );
          return 0 === a.size
            ? null
            : (0, m.jsx)("div", {
                className: "submenu",
                children: (0, m.jsx)("ul", {
                  className: "favorite-games",
                  children: a.map(h),
                }),
              });
        };
      (g.contextTypes = {
        toggleLoginPopup: l.default.func,
      }),
        (t.default = g);
    },
    68661: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    69319: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(43693)),
        r = a(96540),
        i = s(a(46942)),
        o = s(a(5556)),
        l = (s(a(2209)), a(78106)),
        c = s(a(43742)),
        d = a(22715),
        u = a(51628),
        p = s(a(15062)),
        m = a(93185),
        f = a(74848);
      class g extends r.Component {
        constructor(e) {
          super(e),
            (0, n.default)(this, "onMouseEnterSubmenu", (e) => {
              this.setState({
                hoveringSubmenu: e,
              });
            }),
            (0, n.default)(this, "onMouseLeave", () => {
              this.setState({
                hoveringSubmenu: null,
              });
            }),
            (0, n.default)(this, "clickMenuItem", (e) => {
              this.props.history.push(e);
            }),
            (0, n.default)(this, "renderMaintenanceSection", (e, t) =>
              (0, f.jsx)(c.default, {
                producttypeid: e,
                gameproviderid: t,
                displayMessage: !1,
              })
            ),
            (this.state = {
              hoveringSubmenu: null,
            }),
            (this.clickGameProvider = d.clickGameProvider.bind(this));
        }
        render() {
          const {
              gameTypeMap: e,
              gameProviderMap: t,
              maintenanceMap: a,
              history: {
                location: { pathname: s },
              },
              typeI18nAlias: n = {},
            } = this.props,
            { hoveringSubmenu: o } = this.state,
            [...l] = e.keys();
          return (0, f.jsx)(r.Fragment, {
            children: l.map((e) => {
              const r = e.toLowerCase(),
                l = p.default[e];
              let c = t.get(e).toArray();
              return (0, f.jsxs)(
                "li",
                {
                  className: `nav-${r}`,
                  children: [
                    (0, f.jsx)("div", {
                      className: (0, i.default)("nav-item", {
                        [r]: !0,
                        active:
                          s === ((null == l ? void 0 : l.pathname) || l) ||
                          o === e,
                      }),
                      onClick: () => this.clickMenuItem(l),
                      children: (0, f.jsx)("a", {
                        children: (0, f.jsx)("h3", {
                          children: n[e] ? u.i18n[n[e]] : u.i18n[e],
                        }),
                      }),
                    }),
                    c.length > 0 &&
                      (0, f.jsx)("div", {
                        className: "submenu",
                        onMouseEnter: () => this.onMouseEnterSubmenu(e),
                        onMouseLeave: this.onMouseLeave,
                        children: (0, f.jsx)("ul", {
                          children: c.map((t) => {
                            const s = t.toLowerCase();
                            return (0, f.jsxs)(
                              "li",
                              {
                                "data-provider": s,
                                className: (0, i.default)(u.currLocale, {
                                  maintenance: (0, m.isMaintenance)(a, [e, t]),
                                }),
                                children: [
                                  (0, f.jsx)("a", {
                                    onClick: () => {
                                      this.clickGameProvider(e, t);
                                    },
                                    children: (0, f.jsx)("img", {
                                      src: `https://img.alltocon.com/img/static/desktop/sub-menu/sub-${r}-${s}.png`,
                                      alt: `banner-${s}`,
                                    }),
                                  }),
                                  this.renderMaintenanceSection(e, t),
                                ],
                              },
                              `${e}${t}`
                            );
                          }),
                        }),
                      }),
                  ],
                },
                e
              );
            }),
          });
        }
      }
      (g.contextTypes = {
        toggleLoginPopup: o.default.func,
      }),
        (t.default = (0, l.withRouter)(g));
    },
    69904: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    70466: (e, t, a) => {
      var s = {
        "./ae888.scss": 81808,
        "./d06prod.scss": 32141,
        "./example.scss": 5816,
        "./example1.scss": 56579,
        "./example2.scss": 29322,
        "./r39bet.scss": 94831,
        "./t38prod.scss": 90520,
        "./t98prod.scss": 23274,
        "./ta2prod.scss": 28328,
        "./ta7prod.scss": 60971,
        "./ta8prod.scss": 29506,
        "./tb9prod.scss": 43910,
        "./tc7prod.scss": 24853,
        "./u30prod.scss": 66359,
        "./unc0001.scss": 68661,
        "./vh7prod.scss": 37140,
        "./vn0prod.scss": 96223,
        "./x07prod.scss": 74466,
      };
      function n(e) {
        return Promise.resolve().then(() => {
          if (!a.o(s, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return a(s[e]);
        });
      }
      (n.keys = () => Object.keys(s)), (n.id = 70466), (e.exports = n);
    },
    73219: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(65779));
      a(35662), (t.default = n.default);
    },
    73485: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(43693)),
        r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        i = s(a(94188)),
        o = a(51628),
        l = a(70913),
        c = a(93185),
        d = a(8087),
        u = s(a(34322)),
        p = s(a(88187)),
        m = a(74848);
      class f extends r.PureComponent {
        constructor() {
          super(...arguments),
            (0, n.default)(this, "state", {
              isHoverCloseBtn: !1,
              isHoverAds: !1,
              isHoverMaintenances: !1,
              centerMarginTop: void 0,
              left: -1e3,
              isShow: void 0,
              marginTop: {},
            }),
            (0, n.default)(this, "onTopAdMouseEnterAndLeave", () => {
              this.setState({
                isHoverAds: !this.state.isHoverAds,
              });
            }),
            (0, n.default)(this, "onTopAdIconMouseEnterAndLeave", () => {
              this.setState({
                isHoverCloseBtn: !this.state.isHoverCloseBtn,
              });
            }),
            (0, n.default)(this, "onCloseAdsItemHandler", (e, t) => {
              const a = {
                ...this.state.marginTop,
              };
              (a[e][t - 1] = 0),
                this.setState({
                  isShow: {
                    ...this.state.isShow,
                    [`${e}-${t}`]: !1,
                  },
                  marginTop: a,
                });
            }),
            (0, n.default)(this, "onAdClick", (e) => {
              e && window.open(e);
            }),
            (0, n.default)(this, "onMaintenancesMouseEnterAndLeave", () => {
              this.setState({
                isHoverMaintenances: !this.state.isHoverMaintenances,
              });
            }),
            (0, n.default)(this, "onMaintenancesClose", (e) => {
              this.setState({
                isShow: {
                  ...this.state.isShow,
                  [e]: !1,
                },
              });
            });
        }
        static getDerivedStateFromProps(e, t) {
          if (!t.isShow && e.floatingAdsSetting.size) {
            let t = window.innerHeight / 2 - 250,
              a = 0,
              s = {};
            return {
              isShow: e.floatingAdsSetting.toJS().reduce((e, n) => {
                let { addetails: r = [], status: i, type: o } = n;
                return (
                  o !== d.floatingAdsTypeMapNameEnum.MAINTENANCE
                    ? ((s[o] = []),
                      r.forEach((n) => {
                        if (o === d.floatingAdsTypeMapNameEnum.LEFT_TOP) {
                          const e = i ? n.image1height + 20 : 0;
                          (t = t < e ? e : t), (a = n.image2width + 20);
                        }
                        (e[`${o}-${n.sequence}`] = !!i),
                          s[o].push(n.image1height);
                      }))
                    : (e[o] = !!i),
                  e
                );
              }, {}),
              centerMarginTop: t,
              left: a,
              marginTop: s,
            };
          }
          return null;
        }
        componentDidMount() {
          this.props.getFloatingAds({
            lang: o.currLocale,
          });
        }
        render() {
          const {
              isShow: e,
              isHoverAds: t,
              isHoverMaintenances: a,
              isHoverCloseBtn: s,
              centerMarginTop: n,
              left: r,
              marginTop: o,
            } = this.state,
            { floatingAdsSetting: f, i18n: g } = this.props,
            h = i.default.portal.apiServer.imageServer,
            v = "YYYY-MM-DD HH:mm",
            y = t && !s;
          return f.map((t) => {
            var s;
            const i = t.get("type"),
              f = t.get("display") !== d.adsDetailDisplayEnum.CAN_NOT_CLOSE,
              j = i === d.floatingAdsTypeMapNameEnum.LEFT_TOP,
              x = j ? this.onTopAdMouseEnterAndLeave : null,
              M = j ? this.onTopAdIconMouseEnterAndLeave : null;
            let b = 0;
            return [
              d.floatingAdsTypeMapNameEnum.MOBILE,
              d.floatingAdsTypeMapNameEnum.APP,
              d.floatingAdsTypeMapNameEnum.MOBILE_REGISTER,
            ].includes(i)
              ? null
              : i === d.floatingAdsTypeMapNameEnum.MAINTENANCE
              ? e[i] &&
                (0, m.jsxs)(
                  "div",
                  {
                    className: `${d.floatingAdsTypeMapNameEnum[i]} ${
                      a ? "active" : ""
                    }`,
                    onMouseEnter: this.onMaintenancesMouseEnterAndLeave,
                    onMouseLeave: this.onMaintenancesMouseEnterAndLeave,
                    children: [
                      (0, m.jsxs)("div", {
                        className: "maintenances-title",
                        children: [
                          g["maintenance.info"],
                          f &&
                            (0, m.jsx)("i", {
                              className: "mps-close",
                              onClick: () => this.onMaintenancesClose(i),
                            }),
                        ],
                      }),
                      (0, m.jsx)("div", {
                        className: "maintenances-content",
                        children: t.get("maintenances").map((e, t) => {
                          const a = e.get("nextstarttime"),
                            s = e.get("nextendtime"),
                            n = e.get("notifyafterfinished");
                          return (0, m.jsxs)(
                            "div",
                            {
                              className: "maintenances-item",
                              children: [
                                (0, m.jsx)("div", {
                                  className: "maintenances-item-name",
                                  children: `${e.get(
                                    "gameprovidername"
                                  )}-${e.get("langproductypename")}`,
                                }),
                                (0, m.jsxs)("div", {
                                  className: "maintenances-item-date",
                                  children: [
                                    a &&
                                      s &&
                                      `${(0, l.formatDateTime)(
                                        e.get("nextstarttime"),
                                        v
                                      )} ~ ${(0, l.formatDateTime)(
                                        e.get("nextendtime"),
                                        v
                                      )}`,
                                    a &&
                                      n &&
                                      (0, c.i18nVariables)(
                                        g["maintenance.notifyafterfinished"],
                                        {
                                          STARTTIME: (0, l.formatDateTime)(a),
                                        }
                                      ),
                                  ],
                                }),
                              ],
                            },
                            `maintenances_${t}`
                          );
                        }),
                      }),
                    ],
                  },
                  `type_${i}`
                )
              : i === d.floatingAdsTypeMapNameEnum.CENTER_DESKTOP
              ? (0, m.jsx)(
                  p.default,
                  {
                    type: i,
                  },
                  `type_${i}`
                )
              : i === d.floatingAdsTypeMapNameEnum.CENTER_MOBILE
              ? null
              : (0, m.jsx)(
                  "div",
                  {
                    className: `${d.floatingAdsTypeMapNameEnum[i]} ads`,
                    onMouseEnter: x,
                    onMouseLeave: x,
                    style: {
                      top: j ? null : n,
                    },
                    children:
                      null === (s = t.get("addetails")) || void 0 === s
                        ? void 0
                        : s.map((t, a) => {
                            const s = `${i}-${t.get("sequence")}`,
                              n = t.get("url"),
                              l = a ? (b += o[i][a - 1]) : 0,
                              c = n ? "click-url" : "";
                            return e[s]
                              ? [
                                  (0, m.jsx)(
                                    u.default,
                                    {
                                      style: {
                                        top: `${l}px`,
                                      },
                                      className: c,
                                      src: `${h}${t.get("image1")}`,
                                      closeBtn: f,
                                      onClose: () =>
                                        this.onCloseAdsItemHandler(
                                          i,
                                          t.get("sequence")
                                        ),
                                      onClick: () => this.onAdClick(n),
                                      onMouseEnter: M,
                                      onMouseLeave: M,
                                    },
                                    `${s}_s`
                                  ),
                                  j
                                    ? (0, m.jsx)(
                                        u.default,
                                        {
                                          style: {
                                            left: y ? 0 : `-${r}px`,
                                          },
                                          src: `${h}${t.get("image2")}`,
                                          className: `fade-in-out ${
                                            y ? "active" : ""
                                          } ${c}`,
                                          closeBtn: f,
                                          onClose: () =>
                                            this.onCloseAdsItemHandler(
                                              i,
                                              t.get("sequence")
                                            ),
                                          onClick: () => this.onAdClick(n),
                                        },
                                        `${s}_l`
                                      )
                                    : null,
                                ]
                              : null;
                          }),
                  },
                  `detail_${i}`
                );
          });
        }
      }
      t.default = f;
    },
    74466: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    74901: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          let { toggleLoginPopup: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = (0, l.useHistory)(),
            { gameTypeMap: a, logined: s } = (0, o.default)((e) => ({
              gameTypeMap: e.games.gameTypeMap,
              logined: e.players.logined,
            })),
            { isUseLiveSeparateGames: f } = (0, d.default)(),
            g = (0, i.default)({
              toggleLoginPopup: e,
            }),
            { redirectToCasinoPage: h, isLaunchViaGame: v } = (0, r.default)();
          return (0, n.useCallback)(
            (e, s) => {
              const n = a
                  .getIn([e])
                  .filter((e) => e.get("gameproviderid") === s),
                r = f
                  ? [...p.showGameProvidersList, c.gameType.LIVE]
                  : p.showGameProvidersList;
              if (v(s)) h();
              else if (window.isDesktop && r.includes(e) && n.size > 1)
                t.push(u.paths[e], {
                  activeTabProvider: s,
                });
              else if ((0, m.isLaunchSportPage)(s))
                t.push(m.desktopSportPagePath);
              else if (n.size > 0) {
                const t = n.getIn([0, "distributorid"]),
                  a = n.getIn([0, "gameid"]),
                  s = n.getIn([0, "gameproviderid"]);
                g({
                  producttypeid: e,
                  distributorid: t,
                  gameid: a,
                  gameproviderid: s,
                });
              }
            },
            [s, t, a, g, e]
          );
        });
      var n = a(96540),
        r = s(a(23156)),
        i = s(a(63237)),
        o = s(a(55665)),
        l = a(28651),
        c = a(8087),
        d = s(a(31011)),
        u = a(15062),
        p = a(39418),
        m = a(71850);
    },
    75678: (e, t, a) => {
      var s = {
        "./ae888.scss": 81808,
        "./d06prod.scss": 32141,
        "./example.scss": 5816,
        "./example1.scss": 56579,
        "./example2.scss": 29322,
        "./r39bet.scss": 94831,
        "./t38prod.scss": 90520,
        "./t98prod.scss": 23274,
        "./ta2prod.scss": 28328,
        "./ta7prod.scss": 60971,
        "./ta8prod.scss": 29506,
        "./tb9prod.scss": 43910,
        "./tc7prod.scss": 24853,
        "./u30prod.scss": 66359,
        "./unc0001.scss": 68661,
        "./vh7prod.scss": 37140,
        "./vn0prod.scss": 96223,
        "./x07prod.scss": 74466,
        "components/mobile/Roulette/pattern/ae888.scss": 81808,
        "components/mobile/Roulette/pattern/d06prod.scss": 32141,
        "components/mobile/Roulette/pattern/example.scss": 5816,
        "components/mobile/Roulette/pattern/example1.scss": 56579,
        "components/mobile/Roulette/pattern/example2.scss": 29322,
        "components/mobile/Roulette/pattern/r39bet.scss": 94831,
        "components/mobile/Roulette/pattern/t38prod.scss": 90520,
        "components/mobile/Roulette/pattern/t98prod.scss": 23274,
        "components/mobile/Roulette/pattern/ta2prod.scss": 28328,
        "components/mobile/Roulette/pattern/ta7prod.scss": 60971,
        "components/mobile/Roulette/pattern/ta8prod.scss": 29506,
        "components/mobile/Roulette/pattern/tb9prod.scss": 43910,
        "components/mobile/Roulette/pattern/tc7prod.scss": 24853,
        "components/mobile/Roulette/pattern/u30prod.scss": 66359,
        "components/mobile/Roulette/pattern/unc0001.scss": 68661,
        "components/mobile/Roulette/pattern/vh7prod.scss": 37140,
        "components/mobile/Roulette/pattern/vn0prod.scss": 96223,
        "components/mobile/Roulette/pattern/x07prod.scss": 74466,
      };
      function n(e) {
        var t = r(e);
        return a(t);
      }
      function r(e) {
        if (!a.o(s, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return s[e];
      }
      (n.keys = function () {
        return Object.keys(s);
      }),
        (n.resolve = r),
        (e.exports = n),
        (n.id = 75678);
    },
    75776: (e, t, a) => {
      "use strict";
      var s = a(24994);
      (t.A = void 0), s(a(96540));
      var n = a(74848);
      t.A = (e) =>
        (0, n.jsx)("div", {
          className: "app-body",
          children: e.children,
        });
    },
    76035: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = a(72596);
      const n = () => {
        let e = "";
        const t = Math.floor(4 * Math.random()),
          a = Math.floor(3 * Math.random()) + 3;
        switch (t) {
          case 1:
            e = `${(0, s.getRandomLowerChar)()}${(0, s.getRandomLowerChar)()}`;
            break;
          case 2:
            e = `${(0, s.getRandomLowerChar)()}${(0, s.getRandomNumberChar)()}`;
            break;
          case 3:
            e = `${(0, s.getRandomNumberChar)()}${(0, s.getRandomLowerChar)()}`;
            break;
          default:
            e = `${(0, s.getRandomNumberChar)()}${(0,
            s.getRandomNumberChar)()}`;
        }
        return `${e}${"*".repeat(a)}`;
      };
      t.default = (e) => {
        const t = () => {
          const t = Math.floor(Math.random() * e.length),
            a = e[t];
          return [
            "en-US",
            "es-MX",
            "hi-IN",
            "id-ID",
            "it-IT",
            "ja-JP",
            "km-KH",
            "ko-KR",
            "ml-IN",
            "ms-MY",
            "my-MM",
            "pt-BR",
            "ta-IN",
            "th-TH",
            "tl-PH",
            "vi-VN",
            "zh-CN",
            "zh-TW",
          ].reduce((e, t) => ((e[t] = a), e), {});
        };
        let a = [];
        for (let e = 0; e < 100; e++)
          a.push({
            playerId: n(),
            rewardType: "PRODUCT_GIFT",
            rewardContent: null,
            rewardName: t(),
            createTime: Date.now(),
            drawTime: Date.now(),
            pictureUrl: null,
          });
        return a;
      };
    },
    77034: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(74376),
        r = (s(a(5556)), a(39125)),
        i = a(68686),
        o = s(a(94188)),
        l = a(51628),
        c = a(74848);
      t.default = (e) => {
        let { path: t } = e;
        const a =
            l.i18n[`meta.description.${t}`] ||
            l.i18n["meta.description"] ||
            window.defaultDesc ||
            o.default.brand.title,
          s = ((e) => {
            const t = (0, i.domain_from_url)(
              o.default.portal.apiServer.baseURL
            );
            let a = l.i18n[`meta.canonical.${e}`];
            return (
              "p20prod" === o.default.brand.code &&
                (a = `https://www.${t}${e}`),
              a
            );
          })(t);
        return (0, c.jsxs)(c.Fragment, {
          children: [
            (0, c.jsxs)(r.Helmet, {
              children: [
                (0, c.jsx)("html", {
                  lang: n.iSO639_1CodeEnum[l.currLocale] || "en",
                }),
                (0, c.jsx)("title", {
                  children:
                    l.i18n[`head.title.${t}`] ||
                    l.i18n["head.title"] ||
                    o.default.brand.title,
                }),
                a &&
                  (0, c.jsx)("meta", {
                    name: "description",
                    content: a,
                  }),
                (l.i18n[`meta.keywords.${t}`] || l.i18n["meta.keywords"]) &&
                  (0, c.jsx)("meta", {
                    name: "keywords",
                    content:
                      l.i18n[`meta.keywords.${t}`] || l.i18n["meta.keywords"],
                  }),
                l.i18n["meta.abstract"] &&
                  (0, c.jsx)("meta", {
                    name: "abstract",
                    content: l.i18n["meta.abstract"],
                  }),
                l.i18n[`head.og:locale.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:locale",
                    content: l.i18n[`head.og:locale.${t}`],
                  }),
                l.i18n[`head.og:type.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:type",
                    content: l.i18n[`head.og:type.${t}`],
                  }),
                l.i18n[`head.og:locale:alternate.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:locale:alternate",
                    content: l.i18n[`head.og:locale:alternate.${t}`],
                  }),
                (l.i18n[`head.og:title.${t}`] || l.i18n["head.og:title"]) &&
                  (0, c.jsx)("meta", {
                    property: "og:title",
                    content:
                      l.i18n[`head.og:title.${t}`] || l.i18n["head.og:title"],
                  }),
                (l.i18n[`meta.og:description.${t}`] ||
                  l.i18n["meta.og:description"]) &&
                  (0, c.jsx)("meta", {
                    property: "og:description",
                    content:
                      l.i18n[`meta.og:description.${t}`] ||
                      l.i18n["meta.og:description"],
                  }),
                l.i18n[`meta.og:keywords.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:keywords",
                    content: l.i18n[`meta.og:keywords.${t}`],
                  }),
                l.i18n[`meta.og:url.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:url",
                    content: l.i18n[`meta.og:url.${t}`],
                  }),
                l.i18n[`meta.og:image.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:image",
                    content: l.i18n[`meta.og:image.${t}`],
                  }),
                l.i18n[`meta.og:image:alt.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:image:alt",
                    content: l.i18n[`meta.og:image:alt.${t}`],
                  }),
                l.i18n[`meta.og:image:width.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:image:width",
                    content: l.i18n[`meta.og:image:width.${t}`],
                  }),
                l.i18n[`meta.og:image:height.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:image:height",
                    content: l.i18n[`meta.og:image:height.${t}`],
                  }),
                l.i18n[`meta.og:site_name.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "og:site_name",
                    content: l.i18n[`meta.og:site_name.${t}`],
                  }),
                l.i18n[`meta.article:tag.${t}`] &&
                  (0, c.jsx)("meta", {
                    property: "article:tag",
                    content: l.i18n[`meta.article:tag.${t}`],
                  }),
                l.i18n[`head.twitter:title.${t}`] &&
                  (0, c.jsx)("meta", {
                    name: "twitter:title",
                    content: l.i18n[`head.twitter:title.${t}`],
                  }),
                l.i18n[`meta.twitter:description.${t}`] &&
                  (0, c.jsx)("meta", {
                    name: "twitter:description",
                    content: l.i18n[`meta.twitter:description.${t}`],
                  }),
                l.i18n[`meta.twitter:keywords.${t}`] &&
                  (0, c.jsx)("meta", {
                    name: "twitter:keywords",
                    content: l.i18n[`meta.twitter:keywords.${t}`],
                  }),
                s &&
                  (0, c.jsx)("link", {
                    rel: "canonical",
                    href: s,
                  }),
                l.i18n["meta.robots"] &&
                  (0, c.jsx)("meta", {
                    name: "robots",
                    content: l.i18n["meta.robots"],
                  }),
              ],
            }),
            (0, c.jsx)("div", {
              style: {
                display: "none",
              },
              children: l.i18n[`seo.page.hidden.desc.${t}`],
            }),
          ],
        });
      };
    },
    77325: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = s(a(85935)),
        r = a(83597),
        i = a(51628),
        o = a(38560),
        l = s(a(46942)),
        c = a(74848);
      t.default = (e) => {
        let { amount: t, onClose: a } = e;
        return (0, c.jsx)(n.default, {
          className: (0, l.default)("reward-modal", {
            "is-mobile": o.isMobile,
          }),
          hasTitle: !1,
          button: !1,
          children: (0, c.jsx)("div", {
            className: "pfrl3ez",
            children: (0, c.jsxs)("div", {
              className: "sjfh21a",
              children: [
                (0, c.jsx)("img", {
                  className: "img-bg rotate",
                  src: `${r.staticImageUrl}k36proc/gold-bg.png`,
                  alt: "",
                }),
                (0, c.jsxs)("div", {
                  className: "bg-wrap",
                  children: [
                    (0, c.jsx)("img", {
                      className: "img_glod",
                      src: `${r.staticImageUrl}k36proc/gold-coin.png`,
                      alt: "",
                    }),
                    (0, c.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "tit ttu",
                          children: [i.i18n.congratulations, "!"],
                        }),
                        (0, c.jsx)("div", {
                          className: "desc",
                          children: i.i18n["reg.roulette.reward.text"],
                        }),
                        (0, c.jsxs)("div", {
                          className: "scoll-num amount sxm7p3g",
                          children: [
                            t,
                            (0, c.jsx)("wbr", {}),
                            (0, c.jsx)("span", {
                              className: "currency-string",
                              children: r.defaultCurrencyI18n,
                            }),
                          ],
                        }),
                        (0, c.jsx)("button", {
                          className: "ui-button button-normal s-conic",
                          onClick: () => {
                            a && a();
                          },
                          children: (0, c.jsx)("div", {
                            className: "button-inner",
                            children: i.i18n["claim.rewards"],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    78242: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(39921)),
        r = s(a(46942)),
        i = s(a(5556)),
        o = a(28651),
        l = s(a(60781)),
        c = s(a(85773)),
        d = s(a(94188)),
        u = a(15062);
      a(19142);
      var p,
        m,
        f = a(74848);
      const { imageServer: g, imgStaticPath: h } = d.default.portal.apiServer,
        v = `${g}${h}`,
        y =
          null ===
            (p =
              null === (m = d.default.defaultActivityOpen) || void 0 === m
                ? void 0
                : m.desktop) ||
          void 0 === p ||
          p,
        j = (e, t) => {
          const [a, s] = (0, l.default)(y),
            [i, d] = (0, l.default)(!1),
            {
              hasActivity: p,
              redEnvelopeUrl: m,
              depositRedEnvelopeUrl: g,
              redirectToVip: h,
              redircetToMission: j,
              isShowEventRoulette: x,
              isShowEventRank: M,
              isShowMenuVip: b,
              isShowMission: w,
              state: _,
            } = (0, n.default)(t.toggleLoginPopup);
          return p
            ? (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsxs)("div", {
                    className: (0, r.default)("event-qmenu", {
                      "menu-close": !a,
                    }),
                    children: [
                      (0, f.jsx)("div", {
                        className: "handle",
                        onClick: s,
                        children: (0, f.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 25 70",
                          children: (0, f.jsx)("path", {
                            d: "M0,1.3l0,67.4c0.5-1.3,1.2-2.6,1.9-3.8c2-3.3,4.2-5.7,8.4-9.6l1.5-1.4C19.3,47,22,42.8,22,35s-2.7-12-10.2-18.9c-0.2-0.2-1.2-1.1-1.5-1.4c-4.2-3.9-6.5-6.3-8.4-9.6C1.2,3.9,0.5,2.6,0,1.3L0,1.3z",
                          }),
                        }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "cont",
                        children: [
                          w &&
                            (0, f.jsx)("div", {
                              className: "event-item",
                              onClick: j,
                              children: (0, f.jsx)("img", {
                                src: `${v}common/vip/icon/mission.png`,
                                alt: "event-mission",
                              }),
                            }),
                          b &&
                            (0, f.jsx)("div", {
                              className: "event-item",
                              onClick: h,
                              children: (0, f.jsx)("img", {
                                src: `${v}event/event_vip.png`,
                                alt: "event-vip",
                              }),
                            }),
                          g &&
                            (0, f.jsx)(o.Link, {
                              className: "event-item",
                              to: `${u.paths.REDENVELOPE}`,
                              children: (0, f.jsx)("img", {
                                src: g,
                                alt: "event-deposit-envelope",
                              }),
                            }),
                          m &&
                            (0, f.jsx)(o.Link, {
                              className: "event-item",
                              to: `${u.paths.VALID_BET_REDENVELOPE}`,
                              children: (0, f.jsx)("img", {
                                src: m,
                                alt: "event-envelope",
                              }),
                            }),
                          x &&
                            (0, f.jsx)(o.Link, {
                              className: "event-item",
                              to: u.paths.LUCKYWHEEL,
                              children: (0, f.jsx)("img", {
                                src: `${v}event/event_roulette.png`,
                                alt: "event-roulette",
                              }),
                            }),
                          M &&
                            (0, f.jsx)("div", {
                              className: "event-item",
                              onClick: d,
                              children: (0, f.jsx)("img", {
                                src: `${v}event/event_rank.png`,
                                alt: "event-rank",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  i &&
                    (0, f.jsx)(c.default, {
                      promoid: _.eventRank.promoid,
                      handleClick: d,
                    }),
                ],
              })
            : null;
        };
      (j.contextTypes = {
        toggleLoginPopup: i.default.func,
      }),
        (t.default = j);
    },
    79096: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        n = a(9404),
        r = a(67467),
        i = a(35781),
        o = a(86830);
      a(97702), a(16601), a(14909);
      var l = a(74848);
      t.default = (e) => {
        const t = (0, r.useSelector)((e) => e.games.gameProviderMap),
          a = t
            .keySeq()
            .reduce((e, a) => e.merge(t.get(a)), (0, n.Map)())
            .keySeq()
            .sort(),
          c = e.gplogoStyle ? e.gplogoStyle : "h-dark",
          d = (0, s.useMemo)(() => {
            let e = !1;
            return a.map((t, a) => {
              if (("BBIN" === t && (e = !0), "BBIN2" !== t || !e))
                return (0, l.jsx)(
                  o.SwiperSlide,
                  {
                    className: "provider-swiper-item",
                    children: (0, l.jsx)("img", {
                      alt: `gp-${t}`,
                      src: `https://img.alltocon.com/img/static/gplogo/${c}/${t.toLowerCase()}.png`,
                      loading: "lazy",
                    }),
                  },
                  `${t}_${a}`
                );
            });
          }, [t]),
          u = e.swiperOption || {},
          p = {
            modules: [i.Autoplay, i.Navigation, i.Pagination],
            slidesPerView: "auto",
            spaceBetween: 20,
            loop: !0,
            pagination: {
              clickable: !0,
            },
            navigation: {
              nextEl: ".provider-next",
              prevEl: ".provider-prev",
            },
            autoplay: {
              delay: 2e3,
              disableOnInteraction: !1,
            },
            preloadImages: !1,
            ...u,
          };
        return (0, l.jsxs)("div", {
          className: "provider-swiper-list-box",
          children: [
            a.size > 0 &&
              (0, l.jsx)(o.Swiper, {
                ...p,
                children: d,
              }),
            (0, l.jsx)("div", {
              className: "slider-nav next provider-next",
            }),
            (0, l.jsx)("div", {
              className: "slider-nav prev provider-prev",
            }),
          ],
        });
      };
    },
    81645: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    81808: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    81870: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    82331: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540),
        r = s(a(55665)),
        i = s(a(27179)),
        o = a(56209),
        l = s(a(94188)),
        c = a(26898);
      const { code: d } = l.default.brand,
        u = {
          jun88: !0,
          mocbai: !0,
        };
      let p,
        m = 0;
      const f = () => {
        p && (clearInterval(p), (p = void 0));
      };
      t.default = () => {
        const { logined: e, firstdeposit: t } = (0, r.default)((e) => ({
            logined: e.players.logined,
            firstdeposit: e.players.player.firstdeposit,
          })),
          a = (0, n.useCallback)(() => {
            if (e && (0, c.isGetFirstDepositInfo)()) {
              const e = (0, c.getHashId)();
              i.default.set(e, Date.now());
              try {
                (0, o.getDepositInfo)()
                  .then((t) => {
                    let a;
                    const {
                      sent: s,
                      achieve: n,
                      depositAmount: r,
                      depositId: o,
                    } = t.payload;
                    s
                      ? ((a = -1), f())
                      : n &&
                        ((a = -1),
                        c.startEvent.firstDeposit(Number(r) || 0, {
                          eventID: o,
                        }),
                        f()),
                      a && i.default.set(e, a);
                  })
                  .catch((e) => {
                    401 === (null == e ? void 0 : e.code) && f();
                  });
              } catch (e) {
                m >= 3 ? f() : (m += 1);
              }
            }
          }, [e]);
        return (
          (0, n.useEffect)(() => {
            const e = !!u[d];
            return (
              -1 === i.default.get((0, c.getHashId)()) ||
                e ||
                (p = setInterval(() => {
                  a();
                }, c.adjLimitTime)),
              () => {
                f();
              }
            );
          }, [a]),
          (0, n.useEffect)(() => {
            if (t) {
              const e = (0, c.getHashId)();
              i.default.set(e, -1), f();
            }
          }, [t]),
          null
        );
      };
    },
    82556: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    83672: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const {
              stop: a = !1,
              defaultTop: s = null,
              defaultLeft: c = null,
            } = t,
            { width: d, height: u } = (0, l.default)(),
            p = (0, n.useRef)(null),
            m = (0, n.useRef)({
              startTime: null,
              startX: null,
              startY: null,
              moveX: null,
              moveY: null,
              isDragging: !1,
              hasMoved: !1,
              startPageX: null,
              startPageY: null,
            }),
            [f, g] = (0, i.default)(null),
            h = (0, n.useCallback)(() => {
              ((null == f ? void 0 : f.top) === m.current.moveY &&
                (null == f ? void 0 : f.left) === m.current.moveX) ||
                g({
                  top: m.current.moveY,
                  left: m.current.moveX,
                });
            }, [f, g]),
            v = (0, n.useCallback)(
              function () {
                var e, t;
                let a =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : null == f
                      ? void 0
                      : f.left,
                  s =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : null == f
                      ? void 0
                      : f.top;
                if (a < 0) a = 0;
                else if (
                  d &&
                  a >
                    d -
                      (null === (e = p.current) || void 0 === e
                        ? void 0
                        : e.offsetWidth)
                ) {
                  var n;
                  a =
                    d -
                    (null === (n = p.current) || void 0 === n
                      ? void 0
                      : n.offsetWidth);
                }
                if (s < 0) s = 0;
                else if (
                  u &&
                  s >
                    u -
                      (null === (t = p.current) || void 0 === t
                        ? void 0
                        : t.offsetHeight)
                ) {
                  var i;
                  s =
                    u -
                    (null === (i = p.current) || void 0 === i
                      ? void 0
                      : i.offsetHeight);
                }
                (m.current.moveX = a), (m.current.moveY = s), (0, r.default)(h);
              },
              [d, u, f, h]
            );
          return (
            (0, n.useEffect)(() => {
              var e, t;
              !f &&
                p.current &&
                g({
                  top:
                    s ||
                    (null === (e = p.current) || void 0 === e
                      ? void 0
                      : e.offsetTop),
                  left:
                    c ||
                    (null === (t = p.current) || void 0 === t
                      ? void 0
                      : t.offsetLeft),
                  right: "unset",
                  bottom: "unset",
                });
            }),
            (0, o.default)(() => {
              v();
            }, [d, u]),
            (0, o.default)(() => {
              const t = (e) => {
                  var t, a, s;
                  e.preventDefault(),
                    (document.documentElement.style.overflow = "hidden");
                  const n = (null === (t = e.touches) || void 0 === t
                    ? void 0
                    : t[0]) || {
                    pageX: e.pageX,
                    pageY: e.pageY,
                  };
                  (m.current.startX = parseInt(
                    n.pageX -
                      ((null === (a = p.current) || void 0 === a
                        ? void 0
                        : a.offsetLeft) || (null == f ? void 0 : f.left))
                  )),
                    (m.current.startY = parseInt(
                      n.pageY -
                        ((null === (s = p.current) || void 0 === s
                          ? void 0
                          : s.offsetTop) || (null == f ? void 0 : f.top))
                    )),
                    (m.current.startTime = new Date().getTime()),
                    (m.current.isDragging = !0),
                    (m.current.hasMoved = !1),
                    (m.current.startPageX = n.pageX),
                    (m.current.startPageY = n.pageY);
                },
                s = (e) => {
                  var t;
                  if (!m.current.isDragging) return;
                  e.preventDefault();
                  const a = (null === (t = e.changedTouches) || void 0 === t
                      ? void 0
                      : t[0]) || {
                      pageX: e.pageX,
                      pageY: e.pageY,
                    },
                    s = Math.abs(a.pageX - m.current.startPageX),
                    n = Math.abs(a.pageY - m.current.startPageY);
                  (s > 5 || n > 5) && (m.current.hasMoved = !0);
                  let r = parseInt(a.pageX - m.current.startX),
                    i = parseInt(a.pageY - m.current.startY);
                  v(r, i);
                },
                n = (t) => {
                  m.current.isDragging &&
                    (t.preventDefault(),
                    (m.current.isDragging = !1),
                    (document.documentElement.style.overflow = "auto"),
                    new Date().getTime() - m.current.startTime <= 300 &&
                      !m.current.hasMoved &&
                      e &&
                      e(t));
                };
              return (
                a ||
                  (p.current &&
                    (p.current.addEventListener("touchstart", t),
                    p.current.addEventListener("touchmove", s),
                    p.current.addEventListener("touchend", n),
                    p.current.addEventListener("mousedown", t)),
                  document.body.addEventListener("mousemove", s),
                  document.body.addEventListener("mouseup", n)),
                () => {
                  p.current &&
                    (p.current.removeEventListener("touchstart", t),
                    p.current.removeEventListener("touchmove", s),
                    p.current.removeEventListener("touchend", n),
                    p.current.removeEventListener("mousedown", t)),
                    document.body.removeEventListener("mousemove", s),
                    document.body.removeEventListener("mouseup", n);
                }
              );
            }, [a, f, e]),
            [p, f]
          );
        });
      var n = a(96540),
        r = s(a(93146)),
        i = s(a(72524)),
        o = s(a(15361)),
        l = s(a(34364));
    },
    85723: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        });
      var n = s(a(78242));
    },
    85773: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(96540));
      var n = a(51628),
        r = a(16510),
        i = s(a(97440)),
        o = s(a(42648)),
        l = s(a(52557)),
        c = s(a(58015));
      a(97193);
      var d = a(74848);
      t.default = (e) => {
        let { promoid: t, handleClick: a } = e;
        const s = (0, i.default)(t);
        return (0, d.jsxs)("div", {
          className: "deposit-ranking-detail-container",
          children: [
            (0, d.jsx)("div", {
              className: "deposit-ranking-detail-overlay",
              onClick: a,
            }),
            (0, d.jsxs)("div", {
              className: "deposit-ranking-detail",
              children: [
                s.hasNoData &&
                  (0, d.jsxs)("div", {
                    className: "no-data",
                    children: [
                      (0, d.jsx)("i", {
                        className: "mps-history",
                      }),
                      (0, d.jsx)("p", {
                        children: n.i18n["ranking.on.prepare"],
                      }),
                    ],
                  }),
                (0, d.jsx)("div", {
                  className: "dr-close",
                  onClick: a,
                  children: (0, d.jsx)("i", {
                    className: "mps-close",
                  }),
                }),
                (0, d.jsxs)("div", {
                  className: "dr-header",
                  children: [
                    (0, d.jsx)("i", {
                      className: "mps-sports",
                    }),
                    n.i18n["deposit.ranking"],
                  ],
                }),
                (0, d.jsx)("div", {
                  className: "dr-marquee",
                  children: (0, d.jsx)(o.default, {
                    items: s.messageList,
                  }),
                }),
                (0, d.jsx)("div", {
                  className: "dr-content",
                  children: s.init
                    ? (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)("div", {
                            className: "dr-left-box",
                            children: s.depositRankingTop3.map((e, t) => {
                              const a = e.get("rank");
                              return (0, d.jsxs)(
                                "div",
                                {
                                  className: "dr-left-item",
                                  children: [
                                    (0, d.jsxs)("div", {
                                      children: [
                                        (0, d.jsx)("div", {
                                          className: `rank top-${a}`,
                                          children: `No.${a}`,
                                        }),
                                        (0, d.jsx)("div", {
                                          className: "player-id",
                                          children: e.get("playerId"),
                                        }),
                                      ],
                                    }),
                                    (0, d.jsxs)("div", {
                                      className: "money-box",
                                      children: [
                                        (0, d.jsx)("i", {
                                          className: "mps-coin-fill",
                                        }),
                                        (0, d.jsx)("div", {
                                          className: "money",
                                          children: (0, r.formatMoney)(
                                            e.get("accumulatedAmount")
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              );
                            }),
                          }),
                          (0, d.jsx)(c.default, {
                            className: "dr-right-box",
                            rowHeight: 47,
                            displayAmount: 5,
                            children: s.depositRankingOthers.map((e, t) =>
                              (0, d.jsxs)(
                                "div",
                                {
                                  className: "dr-right-item",
                                  children: [
                                    (0, d.jsx)("div", {
                                      className: "right-item-rank",
                                      children: e.get("rank"),
                                    }),
                                    (0, d.jsx)("div", {
                                      className: "player-id",
                                      children: e.get("playerId"),
                                    }),
                                    (0, d.jsxs)("div", {
                                      className: "money-box",
                                      children: [
                                        (0, d.jsx)("i", {
                                          className: "mps-coin-fill",
                                        }),
                                        (0, d.jsx)("div", {
                                          className: "money",
                                          children: (0, r.formatMoney)(
                                            e.get("accumulatedAmount")
                                          ),
                                        }),
                                      ],
                                    }),
                                  ],
                                },
                                t
                              )
                            ),
                          }),
                        ],
                      })
                    : (0, d.jsx)(l.default, {}),
                }),
              ],
            }),
          ],
        });
      };
    },
    86561: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    87282: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(58294));
      a(60629), (t.default = n.default);
    },
    88187: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = (s(a(2209)), s(a(46942))),
        i = a(78106),
        o = s(a(15361)),
        l = s(a(72524)),
        c = s(a(94188)),
        d = s(a(15062)),
        u = a(8087),
        p = s(a(60191)),
        m = s(a(6938)),
        f = a(74848);
      const g = `https://img.alltocon.com/img/static/desktop/brand/${c.default.brand.code}/logo.png`,
        h = c.default.portal.apiServer.imageServer;
      let v = !0,
        y = !1;
      t.default = (0, i.withRouter)((e) => {
        let {
          type: t,
          location: { pathname: a, search: s },
        } = e;
        const {
            adCenterData: i,
            isShowAdCenter: c,
            isAdCenterLoginPopup: j,
          } = (0, m.default)(t),
          x = (0, n.useRef)(null),
          M = i.get("addetails").filter((e) => e.get("title")),
          [b, w] = (0, l.default)({
            selected: 0,
            isShow: c && a === d.default.ROOT && !s.includes("agt") && v,
          }),
          _ = i.get("display"),
          N = (0, n.useCallback)(
            (e) => {
              const t = Number(e.target.getAttribute("data-index"));
              w({
                selected: t,
              });
            },
            [w]
          ),
          P = (0, n.useCallback)((e) => {
            const t = e.target.getAttribute("data-url");
            t && window.open(t);
          }, []),
          k = (0, n.useCallback)(() => {
            b.isShow &&
              (w({
                isShow: !1,
              }),
              (v = !1),
              clearTimeout(x.current));
          }, [b.isShow, w]),
          { targetRef: O, onOutsideClick: C } = (0, p.default)({
            onClick: k,
          });
        if (
          ((0, o.default)(() => {
            j &&
              !y &&
              (w({
                isShow: c && a === d.default.ROOT && !s.includes("agt"),
              }),
              (y = !0));
          }, [j]),
          (0, n.useEffect)(
            () => (
              b.isShow &&
                _ === u.adsDetailDisplayEnum.CAN_CLOSE &&
                (x.current = setTimeout(k, 1e3 * i.get("permanenttime"))),
              () => clearTimeout(x.current)
            ),
            [b.isShow]
          ),
          !b.isShow)
        )
          return null;
        const T = `${h}${M.getIn([b.selected, "image1"])}`,
          L = M.getIn([b.selected, "url"]);
        return (0, f.jsxs)("div", {
          className: "ad-center",
          onClick: C,
          children: [
            (0, f.jsxs)("div", {
              className: "ad-center-content",
              ref: O,
              children: [
                (0, f.jsxs)("div", {
                  className: "left",
                  children: [
                    (0, f.jsx)("div", {
                      className: "title-list",
                      children: M.map((e, t) =>
                        (0, f.jsx)(
                          "div",
                          {
                            className: (0, r.default)({
                              active: t === b.selected,
                            }),
                            "data-index": t,
                            onClick: N,
                            children: e.get("title"),
                          },
                          `ad-center-${t}`
                        )
                      ),
                    }),
                    (0, f.jsx)("div", {
                      className: "logo",
                      style: {
                        backgroundImage: `url(${g})`,
                      },
                    }),
                  ],
                }),
                (0, f.jsx)("div", {
                  className: (0, r.default)("right", {
                    pointer: L,
                  }),
                  style: {
                    backgroundImage: `url(${T})`,
                  },
                  onClick: P,
                  "data-url": L,
                }),
                (0, f.jsx)("div", {
                  className: "close",
                  onClick: k,
                  children: (0, f.jsx)("i", {
                    className: "mps-close",
                  }),
                }),
              ],
            }),
            (0, f.jsx)("div", {
              className: "ad-center-overlay",
            }),
          ],
        });
      });
    },
    89154: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "AppQR", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(t, "FavoriteGame", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "Game", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(t, "HotGame", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        });
      var n = s(a(27262)),
        r = s(a(67346)),
        i = s(a(20786)),
        o = s(a(34631));
      a(28015);
    },
    90520: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    91913: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        s(a(5556));
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = a(78106),
        i = a(93185),
        o = a(74848);
      const l = (e) => {
        const {
            className: t,
            data: a,
            speed: s,
            initialDelay: r,
            enablePauseOnHover: c,
            children: d,
            onClick: u,
            total: p,
            itemTitle: m,
            location: { pathname: f },
          } = e,
          g = (0, n.useRef)(),
          h = () => {
            if (c) {
              const e = g.current.style.animationPlayState;
              g.current.style.animationPlayState =
                "paused" === e ? "running" : "paused";
            }
          };
        return (
          (0, n.useEffect)(() => {
            l.setAnimation(g, s, r, () => {
              g.current.classList.add("scrollLeft");
            });
          }, [p, f]),
          (0, o.jsx)("div", {
            className: `marquee-wrap ${t}`,
            onClick: u,
            children: (0, o.jsx)("div", {
              className: "visible-area",
              children: (0, o.jsxs)("div", {
                className: "marquee-content",
                ref: g,
                onMouseEnter: h,
                onMouseLeave: h,
                children: [
                  d,
                  a.map((e, t) =>
                    (0, o.jsx)(
                      "span",
                      {
                        className: "marquee-item",
                        "data-content": m,
                        "data-nosnippet": !0,
                        dangerouslySetInnerHTML: {
                          __html: (0, i.getCleanContent)(e, !1),
                        },
                      },
                      `marquee${t}`
                    )
                  ),
                ],
              }),
            }),
          })
        );
      };
      (l.setAnimation = (e, t, a, s) => {
        const n = l.calcDuration(e, t);
        (e.current.style.animationDelay = `${a}s`),
          (e.current.style.animationDuration = `${n}s`),
          e.current.classList.remove("scrollLeft"),
          setTimeout(s);
      }),
        (l.calcDuration = (e, t) => e.current.offsetWidth / t),
        (l.defaultProps = {
          className: "",
          speed: 120,
          initialDelay: 2,
          enablePauseOnHover: !0,
          data: [],
        }),
        (t.default = (0, r.withRouter)(l));
    },
    91974: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(34059)),
        r = a(51628);
      t.default = () => {
        const e = (0, n.default)();
        return function (t) {
          let a =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "gameprovider.",
            s = arguments.length > 2 ? arguments[2] : void 0;
          const n = t.toUpperCase();
          let i = r.i18n[`${a}${t.toLowerCase()}`];
          const o = e(n);
          return !s && i ? i.replace(n, o) : o;
        };
      };
    },
    93974: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    94770: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = s(a(54027)),
        r = s(a(83672)),
        i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        o = a(78106),
        l = s(a(46942)),
        c = s(a(85935)),
        d = s(a(6002)),
        u = a(51628),
        p = s(a(55665)),
        m = a(74848);
      t.default = (0, n.default)((e) => {
        let { onClose: t } = e;
        const a = (0, o.useHistory)(),
          {
            player: { promoWaitClaim: s, anytimeRebateWaitClaim: n },
          } = (0, p.default)((e) => ({
            player: e.players.player,
          })),
          [f, g] = (0, i.useState)(!1),
          h = (0, i.useCallback)(
            (e) => {
              const a = e.target.getAttribute("data-promo-float");
              if (a)
                switch (a) {
                  case "close":
                    t();
                    break;
                  case "logo":
                    g(!0);
                }
            },
            [t, a]
          ),
          [v, y] = (0, r.default)(h);
        return (0, m.jsxs)(m.Fragment, {
          children: [
            (0, m.jsxs)("div", {
              ref: v,
              className: (0, l.default)("floating-promo-center", {
                "floating-promo-hide": !(s || n),
              }),
              style: y,
              children: [
                (0, m.jsx)("div", {
                  className: "btn-close",
                  children: (0, m.jsx)("span", {
                    "data-promo-float": "close",
                    children: "×",
                  }),
                }),
                (0, m.jsx)("div", {
                  className: "promo-img",
                  children: (0, m.jsx)("img", {
                    "data-promo-float": "logo",
                    src: "https://img.alltocon.com/img/static/promo-center/promo-gift-open.png",
                    alt: "icon",
                  }),
                }),
              ],
            }),
            f &&
              (0, m.jsx)(c.default, {
                className:
                  "floating-promo-history member-center-promo-history ",
                title: u.i18n["view.reward"],
                button: !1,
                onClose: () => g(!1),
                children: (0, m.jsx)(d.default, {
                  popup: !0,
                }),
              }),
          ],
        });
      }, "promo-center");
    },
    94831: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    94918: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(55665)),
        i = s(a(46942)),
        o = s(a(5556)),
        l = a(78106),
        c = s(a(94188)),
        d = a(38560),
        u = a(8087),
        p = a(51628),
        m = s(a(15062)),
        f = a(93185),
        g = a(74848);
      const h = ["vipcs"],
        v = (e) => {
          let { iconType: t, isDefault: a, url: s } = e;
          return !a && s
            ? (0, g.jsx)("img", {
                alt: "",
                className: (0, i.default)({
                  "shortcut-img": d.isDesktop,
                }),
                src: `${c.default.portal.apiServer.imageServer}${s}`,
              })
            : (0, g.jsx)("i", {
                className: u.shortCutIconClassnameEnum[t] || "",
              });
        },
        y = (e, t) => {
          let { itemRenderer: a, renderShortcutIcon: s = v } = e,
            { toggleLoginPopup: i } = t;
          const o = (0, l.useHistory)(),
            { logined: c, activeShortcuts: u } = (0, r.default)((e) => ({
              logined: e.players.logined,
              activeShortcuts: e.settings.activeshortcuts,
            })),
            g = u.filter((e) => "SHORTCUT" === e.get("type"));
          return (0, n.useMemo)(
            () =>
              g.map((e) => {
                const t = e.get("code"),
                  n = e.getIn(["url", p.currLocale]);
                let r = {
                  style: {
                    cursor: "inherit",
                  },
                  href: "#",
                  ariaLabel: "shortcuts",
                  onClick: (e) => {
                    e.preventDefault(),
                      h.includes(t) &&
                        !c &&
                        (d.isDesktop ? i() : o.push(m.default.LOGIN));
                  },
                };
                return (
                  n &&
                    (r = {
                      href: (0, f.getCustomCsLink)(n, t),
                      target: "_blank",
                      "aria-label": "shortcuts",
                    }),
                  a({
                    shortcutProps: r,
                    shortcut: e,
                    renderShortcutIcon: s,
                  })
                );
              }),
            [o, a, c, s, i, g]
          );
        };
      (y.contextTypes = {
        toggleLoginPopup: o.default.func,
      }),
        (t.default = y);
    },
    96223: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    96244: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(7541)),
        i = s(a(55665)),
        o = s(a(96384)),
        l = a(28651),
        c = s(a(14900)),
        d = a(33726),
        u = a(38560),
        p = a(51628),
        m = s(a(15062)),
        f = a(74848);
      t.default = (e) => {
        let { code: t, onClose: a } = e;
        const { pathname: s } = (0, l.useLocation)(),
          [g, h] = (0, n.useState)(!1),
          [v, y] = (0, n.useState)({
            lang: null,
            content: null,
            displayname: null,
          }),
          j = (0, r.default)(d.getStaticPageContent),
          {
            logined: x,
            staticpageOrders: M,
            signupSuccess: b,
          } = (0, i.default)((e) => ({
            logined: e.players.logined,
            signupSuccess: e.players.signupSuccess,
            staticpageOrders: e.staticpagesettings.staticpagesMap,
          })),
          w =
            null == M
              ? void 0
              : M.getIn(["SignupMap", "loginpopup", "displayname"]),
          _ = (0, n.useCallback)(
            (e, t) => {
              j({
                type: e,
                code: t,
              }).then((e) => {
                y({
                  lang: e.lang,
                  content: e.content,
                  displayname: e.displayname,
                });
              }),
                h(!0),
                localStorage.setItem("hSLogPopup", "true");
            },
            [j]
          ),
          N = (0, n.useCallback)(() => {
            var e;
            const a =
              null === (e = localStorage) || void 0 === e
                ? void 0
                : e.getItem("hSLogPopup");
            w && x && !a && _("SignUp", t || "loginpopup");
          }, [w, x, _, t]);
        (0, n.useEffect)(() => {
          x || localStorage.removeItem("hSLogPopup");
        }, [x]),
          (0, n.useEffect)(() => {
            x &&
              ((u.isDesktop && !b) ||
                (u.isMobile && !b && s === m.default.ROOT)) &&
              N();
          }, [x, s, N, b]);
        const P = () => {
          h(!1), a && a();
        };
        return g && v.content
          ? u.isMobile
            ? (0, f.jsxs)("div", {
                className: "custom-login-popup-detail-mobile",
                children: [
                  (0, f.jsx)("div", {
                    className: "header",
                    children: (0, f.jsx)("div", {
                      className: "text-right",
                      children: (0, f.jsx)("div", {
                        className: "btn-close",
                        onClick: P,
                        children: (0, f.jsx)("i", {
                          className: "mps-close",
                        }),
                      }),
                    }),
                  }),
                  (0, f.jsx)("h2", {
                    className: "title-center",
                    children: v.displayname,
                  }),
                  (0, f.jsxs)("div", {
                    className: "content-container",
                    children: [
                      (0, f.jsx)("div", {
                        className: "content",
                        children: (0, f.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: v.content,
                          },
                        }),
                      }),
                      (0, f.jsx)(o.default, {
                        onClick: P,
                        children: p.i18n.confirm,
                      }),
                    ],
                  }),
                ],
              })
            : (0, f.jsx)(c.default, {
                onHandleClose: P,
                children: (0, f.jsxs)("div", {
                  className: "custom-login-popup-detail-desktop",
                  children: [
                    (0, f.jsx)("div", {
                      className: "header",
                      children: (0, f.jsx)("div", {
                        className: "title",
                        children: v.displayname,
                      }),
                    }),
                    (0, f.jsx)("div", {
                      className: "content",
                      children: (0, f.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: v.content,
                        },
                      }),
                    }),
                    (0, f.jsx)("div", {
                      className: "footer",
                      children: (0, f.jsx)(o.default, {
                        onClick: P,
                        children: p.i18n.confirm,
                      }),
                    }),
                  ],
                }),
              })
          : null;
      };
    },
    97184: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = s(a(6083)),
        i = a(51628),
        o = a(74848);
      class l extends n.Component {
        render() {
          const { news: e } = this.props;
          return (0, o.jsx)("div", {
            className: "news-list-wrap",
            children:
              e.get("objs").size > 0
                ? e.get("list").map((e, t) =>
                    (0, o.jsx)(
                      r.default,
                      {
                        newsItem: e,
                      },
                      t
                    )
                  )
                : (0, o.jsx)("div", {
                    className: "no-news",
                    children: i.i18n["no.latest.news"],
                  }),
          });
        }
      }
      t.default = l;
    },
    97193: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    97440: (e, t, a) => {
      "use strict";
      var s = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          const [t, a] = (0, i.default)(() => ({
            init: !1,
            hasNoData: !1,
            hasLatestDeposit: !1,
            messageList: [],
            otherRankIndex: m,
            depositRankingTop3: (0, r.List)(),
            depositRankingOthers: (0, r.List)(),
          }));
          return (
            (0, n.useEffect)(() => {
              (async () => {
                const [s, n] = await Promise.all([
                    (0, u.getDepositRankingList)(e),
                    (0, u.getLatestDepositList)({
                      promoid: e,
                    }),
                  ]).then((e) => e.map((e) => (0, r.fromJS)(e))),
                  i = !s.size;
                let o = [];
                n.size &&
                  ((o = n.map(g)), (o = o.unshift(l.i18n["deposit.member"]))),
                  a({
                    init: !0,
                    hasNoData: i,
                    messageList: o,
                    depositRankingTop3: s.slice(0, t.otherRankIndex),
                    depositRankingOthers: s.slice(t.otherRankIndex),
                  });
              })();
            }, []),
            (0, o.default)(() => {
              (0, u.getLatestDepositList)({
                promoid: e,
                second: 20,
              }).then((e) => {
                const t = (0, r.fromJS)(e);
                t.size &&
                  a((e) => {
                    let a = e.hasLatestDeposit,
                      s = t.map(g);
                    return (
                      a ||
                        ((a = !0), (s = s.unshift(l.i18n["latest.deposit"]))),
                      {
                        hasLatestDeposit: a,
                        messageList: e.messageList.concat(s),
                      }
                    );
                  });
              });
            }, 2e4),
            (0, o.default)(() => {
              (0, u.getDepositRankingList)(e).then((e) => {
                const s = (0, r.fromJS)(e);
                s.size &&
                  a({
                    hasNoData: !1,
                    depositRankingTop3: s.slice(0, t.otherRankIndex),
                    depositRankingOthers: s.slice(t.otherRankIndex),
                  });
              });
            }, 3e5),
            t
          );
        });
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              s,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((s =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (s.get || s.set)
                  ? a(n, t, s)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(a(96540)),
        r = a(9404),
        i = s(a(72524)),
        o = s(a(62828)),
        l = a(51628),
        c = a(16510),
        d = a(70913),
        u = a(53719),
        p = a(74848);
      const m = 3,
        f = "YYYY/MM/DD HH:mm:ss";
      function g(e) {
        const t = (0, d.formatDateTime)(e.get("approvedAt"), f),
          a = (0, c.formatMoney)(e.get("depositAmount")),
          s = e.get("playerId").toUpperCase();
        return (0, p.jsxs)(p.Fragment, {
          children: [
            (0, p.jsx)("i", {
              className: "mps-thai-clock",
            }),
            `${t} ${s} ${l.i18n.deposit} ${a}`,
          ],
        });
      }
    },
  },
]);
