"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1351],
  {
    6950: (e, o, t) => {
      var a = t(24994);
      Object.defineProperty(o, "__esModule", {
        value: !0,
      }),
        (o.default = void 0);
      var r = t(67467),
        i = a(t(55665)),
        l = t(53719);
      o.default = () => {
        const e = (0, r.useDispatch)(),
          {
            promo: {
              depositPromoOpts: o,
              regLimitTimePromo: t,
              isRegLimitTimePromoSuc: a,
            },
          } = (0, i.default)((e) => ({
            promo: e.promo,
          }));
        return {
          getDepositPromoOpts: () => e((0, l.getDepositPromoOpts)()),
          regLimitTimePromo: t,
          depositPromoOpts: o,
          isRegLimitTimePromoSuc: a,
        };
      };
    },
    17791: (e, o, t) => {
      var a = t(24994);
      Object.defineProperty(o, "__esModule", {
        value: !0,
      }),
        (o.default = void 0);
      var r = a(t(62812)),
        i = t(38560);
      (async () => {
        i.isDesktop
          ? await t.e(7564).then(t.bind(t, 15183))
          : await t.e(4259).then(t.bind(t, 44259));
      })(),
        (o.default = r.default);
    },
    62812: (e, o, t) => {
      var a = t(24994);
      Object.defineProperty(o, "__esModule", {
        value: !0,
      }),
        (o.default = o.UpgradeBounsModal = o.MissionCalendarDetail = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var o = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              a,
              r = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return r;
            if ((t = o)) {
              if (t.has(e)) return t.get(e);
              t.set(e, r);
            }
            for (const o in e)
              "default" !== o &&
                {}.hasOwnProperty.call(e, o) &&
                ((a =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, o)) &&
                (a.get || a.set)
                  ? t(r, o, a)
                  : (r[o] = e[o]));
            return r;
          })(e);
        })(t(96540)),
        i = a(t(55665)),
        l = a(t(53259)),
        s = t(67467),
        d = a(t(7032)),
        n = t(76066),
        m = a(t(6950)),
        u = a(t(15062)),
        p = t(74848);
      const f = (o.MissionCalendarDetail = (0, l.default)({
          loader: () =>
            Promise.all([
              t.e(7209),
              t.e(3110),
              t.e(3333),
              t.e(7030),
              t.e(9757),
            ]).then(t.bind(t, 17030)),
          loading: d.default,
        })),
        c = (o.UpgradeBounsModal = (0, l.default)({
          loader: () =>
            Promise.all([
              t.e(7209),
              t.e(3110),
              t.e(3333),
              t.e(7030),
              t.e(9757),
            ]).then(t.bind(t, 93314)),
          loading: d.default,
        })),
        g = (0, l.default)({
          loader: () =>
            Promise.all([t.e(3110), t.e(9542)]).then(t.bind(t, 34215)),
          loading: d.default,
        }),
        P = (e) => {
          const { platform: o, pageType: t } = e,
            a = (0, s.useDispatch)(),
            [l, d] = (0, r.useState)(!1),
            {
              getDepositPromoOpts: P,
              regLimitTimePromo: h,
              isRegLimitTimePromoSuc: v,
            } = (0, m.default)(),
            {
              showCalendar: b,
              pageLoaded: L,
              regLimitPromoExpireTime: T,
              regPromoReqTimeLimit: y,
            } = (0, i.default)((e) => ({
              showCalendar: e.players.showCalendar,
              pageLoaded: e.app.pageLoaded,
              regLimitPromoExpireTime: e.players.regLimitPromoExpireTime,
              regPromoReqTimeLimit: e.players.player.regPromoReqTimeLimit,
            })),
            _ = (0, s.useSelector)((e) => e.players.newVipPrivileges),
            w = "mobile" === o && location.pathname === u.default.RESETINFO,
            M = "PENDING" === (null == _ ? void 0 : _.get("rewardStatus")),
            O = !M && b,
            j = (O || M) && !w,
            x = (0, r.useMemo)(
              () =>
                !l &&
                T > new Date().getTime() &&
                (null == h ? void 0 : h.length) > 0 &&
                "member-center" !== t,
              [l, t, T, null == h ? void 0 : h.length]
            ),
            D = (0, r.useCallback)(() => {
              a((0, n.setShowCalendarOff)());
            }, []),
            k = (0, r.useCallback)(() => {
              a((0, n.setUpgradeBounsModalOff)());
            }, []);
          return (
            (0, r.useEffect)(() => {
              L && (f.preload(), c.preload());
            }, [L]),
            (0, r.useEffect)(() => {
              T && !v && P();
            }, [T, h]),
            (0, p.jsxs)(p.Fragment, {
              children: [
                x &&
                  (0, p.jsx)(g, {
                    regLimitPromoExpireTime: T,
                    regLimitTimePromo: h,
                    closeRegLimitTimePromo: () => d(!0),
                    regPromoReqTimeLimit: y,
                  }),
                j &&
                  (0, p.jsx)(p.Fragment, {
                    children: (0, p.jsxs)("div", {
                      className: "hover-container mission-calendar",
                      children: [
                        M &&
                          (0, p.jsx)("div", {
                            className: "modal",
                            children: (0, p.jsx)(c, {
                              closeUpgradeBounsModal: k,
                            }),
                          }),
                        O &&
                          (0, p.jsx)("div", {
                            className: "modal",
                            children: (0, p.jsx)(f, {
                              platformStyleStatus: o,
                              closeModal: D,
                            }),
                          }),
                      ],
                    }),
                  }),
              ],
            })
          );
        };
      o.default = r.default.memo(P);
    },
  },
]);
