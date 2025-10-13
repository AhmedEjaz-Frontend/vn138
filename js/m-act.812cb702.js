"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [9815],
  {
    1166: (e, t, i) => {
      var a = i(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = a(i(55665)),
        n = i(8087);
      t.default = () => {
        const {
          isVipBlackList: e,
          ecDisplayVip: t,
          ecDisplaySSVip: i,
          isDisplaySettingSuc: a,
          isSSVipEnable: l,
          isGetVipTypeSuc: o,
        } = (0, s.default)((e) => ({
          isVipBlackList: e.players.isVipBlackList,
          ecDisplayVip: e.dashboard.ecDisplaySetting.ecDisplayVip,
          ecDisplaySSVip: e.dashboard.ecDisplaySetting.ecDisplaySSVip,
          isDisplaySettingSuc: e.dashboard.isDisplaySettingSuc,
          isSSVipEnable: e.dashboard.isSSVipEnable,
          isGetVipTypeSuc: e.dashboard.isGetVipTypeSuc,
        }));
        return {
          isShowMcVip:
            !e &&
            (t === n.vipDisplayTypeEnum.ENABLE ||
              i === n.vipDisplayTypeEnum.ENABLE),
          isDisplaySettingSuc: a,
          isSSVipEnable: l,
          isGetVipTypeSuc: o,
        };
      };
    },
    15204: (e, t, i) => {
      var a = i(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = a(i(39921)),
        n = a(i(46942)),
        l = a(i(5556)),
        o = i(67467),
        p = i(78106),
        r = i(28651),
        u = a(i(60781)),
        d = a(i(27179)),
        c = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var i,
              a,
              s = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return s;
            if ((i = t)) {
              if (i.has(e)) return i.get(e);
              i.set(e, s);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (i = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? i(s, t, a)
                  : (s[t] = e[t]));
            return s;
          })(e);
        })(i(84622)),
        v = a(i(94188)),
        y = i(15062);
      i(85634);
      var g,
        h,
        m = i(74848);
      const { imageServer: S, imgStaticPath: f } = v.default.portal.apiServer,
        E = `${S}${f}`,
        V =
          null !==
            (g =
              null === (h = v.default.defaultActivityOpen) || void 0 === h
                ? void 0
                : h.mobile) &&
          void 0 !== g &&
          g,
        P = (e, t) => {
          var i;
          const a = (0, p.useLocation)(),
            l = (0, o.useSelector)((e) => e.app.pageLoaded),
            v =
              !(a.pathname !== y.paths.ROOT) &&
              (null !== (i = d.default.get("isActivityMenuOpen")) &&
              void 0 !== i
                ? i
                : V),
            [g, h] = (0, u.default)(v),
            [S, f] = (0, u.default)(!1),
            {
              hasActivity: P,
              redEnvelopeUrl: T,
              depositRedEnvelopeUrl: b,
              redirectToVip: R,
              redircetToMission: w,
              isShowEventRoulette: k,
              isShowEventRank: _,
              isShowMenuVip: M,
              isShowMission: D,
              state: O,
            } = (0, s.default)(t.toggleLoginPopup);
          return P && l
            ? (0, m.jsxs)(m.Fragment, {
                children: [
                  (0, m.jsxs)("div", {
                    className: (0, n.default)("event-qmenu", {
                      "menu-close": !g,
                    }),
                    children: [
                      (0, m.jsx)("div", {
                        className: "handle",
                        onClick: () => {
                          d.default.set("isActivityMenuOpen", !g), h();
                        },
                        children: (0, m.jsx)("svg", {
                          xmlns: "http://www.w3.org/2000/svg",
                          viewBox: "0 0 25 70",
                          children: (0, m.jsx)("path", {
                            d: "M0,1.3l0,67.4c0.5-1.3,1.2-2.6,1.9-3.8c2-3.3,4.2-5.7,8.4-9.6l1.5-1.4C19.3,47,22,42.8,22,35s-2.7-12-10.2-18.9c-0.2-0.2-1.2-1.1-1.5-1.4c-4.2-3.9-6.5-6.3-8.4-9.6C1.2,3.9,0.5,2.6,0,1.3L0,1.3z",
                          }),
                        }),
                      }),
                      (0, m.jsxs)("div", {
                        className: "cont",
                        children: [
                          D &&
                            g &&
                            (0, m.jsx)("div", {
                              className: "event-item",
                              onClick: w,
                              children: (0, m.jsx)("img", {
                                src: `${E}common/vip/icon/mission.png`,
                                alt: "event-mission",
                                width: 47,
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                          M &&
                            g &&
                            (0, m.jsx)("div", {
                              className: "event-item",
                              onClick: R,
                              children: (0, m.jsx)("img", {
                                src: `${E}event/event_vip.png`,
                                alt: "event-vip",
                                width: 47,
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                          b &&
                            g &&
                            (0, m.jsx)(r.Link, {
                              className: "event-item",
                              to: `${y.paths.REDENVELOPE}`,
                              children: (0, m.jsx)("img", {
                                src: b,
                                alt: "event-deposit-envelope",
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                          T &&
                            g &&
                            (0, m.jsx)(r.Link, {
                              className: "event-item",
                              to: `${y.paths.VALID_BET_REDENVELOPE}`,
                              children: (0, m.jsx)("img", {
                                src: T,
                                alt: "event-envelope",
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                          k &&
                            g &&
                            (0, m.jsx)(r.Link, {
                              className: "event-item",
                              to: y.paths.LUCKYWHEEL,
                              children: (0, m.jsx)("img", {
                                src: `${E}event/event_roulette.png`,
                                alt: "event-roulette",
                                width: 47,
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                          _ &&
                            g &&
                            (0, m.jsx)("div", {
                              className: "event-item",
                              onClick: f,
                              children: (0, m.jsx)("img", {
                                src: `${E}event/event_rank.png`,
                                alt: "event-rank",
                                width: 47,
                                height: 47,
                                loading: "lazy",
                              }),
                            }),
                        ],
                      }),
                    ],
                  }),
                  S &&
                    (0, m.jsx)(c.DepositRankingDetail, {
                      promoid: O.eventRank.promoid,
                      handleClick: f,
                    }),
                ],
              })
            : null;
        };
      (P.contextTypes = {
        toggleLoginPopup: l.default.func,
      }),
        (t.default = P);
    },
    18654: (e, t, i) => {
      var a = i(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        });
      var s = a(i(15204));
    },
    39921: (e, t, i) => {
      var a = i(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = i(96540),
        n = a(i(1166)),
        l = i(67467),
        o = i(28651),
        p = a(i(72524)),
        r = i(38560),
        u = i(8087),
        d = i(15062),
        c = i(67585),
        v = a(i(55665));
      t.default = (e) => {
        const t = (0, o.useHistory)(),
          { path: i } = (0, o.useRouteMatch)(),
          a = (0, l.useSelector)((e) => e.players.logined),
          { isShowMcVip: y, isSSVipEnable: g } = (0, n.default)(),
          {
            ecDisplayActivityMission: h,
            rewardActivityList: m,
            missionVisibleByRisk: S,
          } = (0, v.default)((e) => ({
            ecDisplayActivityMission:
              e.dashboard.ecDisplaySetting.ecDisplayActivityMission,
            rewardActivityList: e.dashboard.rewardActivityList,
            missionVisibleByRisk: e.players.player.missionVisibleByRisk,
          })),
          [f, E] = (0, p.default)(() => ({
            eventRoulette: null,
            eventRank: null,
            vipPageType: u.activitiesVipPageType.DISABLE,
          })),
          V = (0, s.useMemo)(() => {
            if (null == m || !m.giftPromo) return null;
            const e = Array.isArray(m.giftPromo) ? m.giftPromo : [m.giftPromo];
            if (!e.length) return null;
            const t = e.reduce((e, t) => {
              var i;
              const {
                  startdate: a,
                  enddate: s,
                  dailystarttime: n,
                  dailyendtime: l,
                  defaultStyle: o,
                  promobanner: p,
                  promoStatisticsType: r = "DEPOSIT",
                } = t,
                d = null === (i = p[0]) || void 0 === i ? void 0 : i.promoid,
                { redImgUrl: v, giftPromoStatus: y } = (0,
                c.getRedEnvelopeInfo)({
                  startdate: a,
                  enddate: s,
                  dailystarttime: n,
                  dailyendtime: l,
                  defaultStyle: o,
                  promobanner: p,
                });
              return (
                y === u.giftPromoEnum.IN_PROGRESS &&
                  (e[r] = {
                    redImgUrl: v,
                    promoid: d,
                  }),
                e
              );
            }, {});
            return Object.keys(t).length ? t : null;
          }, [m]),
          P = null == V ? void 0 : V.YESTERDAY_VALID_BET,
          T = null == P ? void 0 : P.redImgUrl,
          b = null == V ? void 0 : V.DEPOSIT,
          R = null == b ? void 0 : b.redImgUrl,
          w = (0, s.useMemo)(
            () =>
              f.vipPageType === u.activitiesVipPageType.PERSONAL_CENTER_PAGE
                ? g
                  ? d.paths.SSVIP
                  : d.paths.VIP
                : d.paths.MY_VIP,
            [g, f.vipPageType]
          ),
          k = (0, s.useMemo)(
            () =>
              !!f.eventRoulette &&
              f.eventRoulette.rouletteStatus ===
                u.rouletteStatusEnum.IN_PROGRESS &&
              (r.isDesktop
                ? f.eventRoulette.rouletteEcWebViewType ===
                  u.promoViewTypeEnum.defaultView
                : f.eventRoulette.rouletteEcMobileViewType ===
                  u.promoViewTypeEnum.defaultView),
            [f.eventRoulette]
          ),
          _ = (0, s.useMemo)(
            () =>
              !(
                !f.eventRank ||
                (f.eventRank.leaderboardviewtype ===
                  u.leaderboardViewTypeEnum.AFTER_LOGIN &&
                  !a) ||
                f.eventRank.promoviewtype !== u.promoViewTypeEnum.defaultView
              ),
            [f.eventRank, a]
          ),
          M = (0, s.useMemo)(
            () =>
              f.vipPageType === u.activitiesVipPageType.VIP_STATIC_PAGE ||
              (a
                ? y && f.vipPageType !== u.activitiesVipPageType.DISABLE
                : f.vipPageType !== u.activitiesVipPageType.DISABLE),
            [f.vipPageType, a, y]
          ),
          D = (0, s.useMemo)(() => i !== d.paths.MISSION && h && S, [h, i, S]),
          O = V || k || _ || M || D;
        return (
          (0, s.useEffect)(() => {
            const { depositLeaderboard: e, roulette: t, vipPageType: i } = m;
            let a = {};
            t && (a.eventRoulette = t),
              e && (a.eventRank = e),
              i && (a.vipPageType = i),
              Object.keys(a).length > 0 && E(a);
          }, [m]),
          {
            hasActivity: O,
            redEnvelopeUrl: T,
            depositRedEnvelopeUrl: R,
            redirectToVip: () => {
              f.vipPageType !== u.activitiesVipPageType.PERSONAL_CENTER_PAGE ||
              a
                ? t.push(w)
                : r.isDesktop
                ? e && e(w)
                : t.push(d.paths.LOGIN, {
                    path: w,
                  });
            },
            redircetToMission: () => {
              a
                ? t.push(d.paths.MISSION)
                : r.isDesktop
                ? e && e(d.paths.MISSION)
                : t.push(d.paths.LOGIN, {
                    path: d.paths.MISSION,
                  });
            },
            isShowEventRoulette: k,
            isShowEventRank: _,
            isShowMenuVip: M,
            isShowMission: D,
            state: f,
          }
        );
      };
    },
    60781: (e, t, i) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = i(96540),
        s = function (e, t) {
          return "boolean" == typeof t ? t : !e;
        };
      t.default = function (e) {
        return a.useReducer(s, e);
      };
    },
    85634: (e, t, i) => {
      i.r(t);
    },
  },
]);
