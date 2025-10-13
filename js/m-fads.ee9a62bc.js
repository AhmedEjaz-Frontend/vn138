"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [133],
  {
    6938: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(96540),
        l = a(n(55665)),
        i = n(8087),
        r = n(9404);
      const d = "GUEST";
      t.default = (e) => {
        const { floatingAdsSetting: t, logined: n } = (0, l.default)((e) => ({
            floatingAdsSetting: e.promo.floatingAdsSetting,
            logined: e.players.logined,
          })),
          a = (0, o.useMemo)(() => {
            var a, o;
            let l = (0, r.Map)();
            if (!t.size) return l;
            const u = t.find(
                (e) =>
                  e.get("type") === i.floatingAdsTypeMapNameEnum.CENTER_DESKTOP
              ),
              s = t.find(
                (e) =>
                  e.get("type") === i.floatingAdsTypeMapNameEnum.CENTER_MOBILE
              );
            l =
              null != u && u.get("desktopMobileSameSetting")
                ? u
                : (null != s && s.get("desktopMobileSameSetting")) ||
                  e === i.floatingAdsTypeMapNameEnum.CENTER_MOBILE
                ? s
                : u;
            const g =
              null === (a = l) || void 0 === a
                ? void 0
                : a.get("addetails").filter((e) => {
                    const t = e.get("target");
                    return "ALL" === t
                      ? "ALL" === t
                      : n
                      ? "MEMBER" === t
                      : t === d;
                  });
            return null === (o = l) || void 0 === o
              ? void 0
              : o.set("addetails", g);
          }, [t, e, n]),
          u =
            (null == a ? void 0 : a.get("status")) === i.adStatusEnum.ACTIVED &&
            a.get("addetails").size >= 1,
          s = (0, o.useMemo)(() => {
            let e = !1;
            const t =
              u && a.get("addetails").every((e) => e.get("target") === d);
            return n && !t && (e = !0), e;
          }, [n, u, a]);
        return {
          adCenterData: a,
          isShowAdCenter: u,
          isAdCenterLoginPopup: s,
          logined: n,
        };
      };
    },
    21028: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = M(n(96540)),
        l = a(n(6938)),
        i = n(9404),
        r = n(28651),
        d = a(n(83736)),
        u = M(n(84622)),
        s = a(n(58009)),
        g = n(83597),
        p = n(8087),
        f = n(51628),
        c = a(n(15062)),
        E = n(74848);
      function M(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            a = new WeakMap();
        return (M = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            l,
            i = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((o = t ? a : n)) {
            if (o.has(e)) return o.get(e);
            o.set(e, i);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((l =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (l.get || l.set)
                ? o(i, t, l)
                : (i[t] = e[t]));
          return i;
        })(e, t);
      }
      const A = o.default.memo((e) => {
        let { getFloatingAds: t, floatingAdsSetting: n } = e;
        const a = (0, r.useLocation)();
        (0, d.default)(() => {
          (null != n && n.size) ||
            t({
              lang: f.currLocale,
            });
        });
        const M = (0, o.useMemo)(
            () =>
              n.reduce(
                (e, t) => (
                  t.get("status") === p.adStatusEnum.ACTIVED &&
                    (e = e.set(t.get("type"), t)),
                  e
                ),
                (0, i.Map)()
              ),
            [n]
          ),
          {
            adCenterData: A,
            isShowAdCenter: m,
            isAdCenterLoginPopup: v,
          } = (0, l.default)(p.floatingAdsTypeMapNameEnum.CENTER_MOBILE),
          y = M.get(p.floatingAdsTypeMapNameEnum.APP),
          _ = M.get(p.floatingAdsTypeMapNameEnum.MOBILE),
          S = g.isNativeApp ? y : _;
        return (0, E.jsxs)(s.default, {
          children: [
            m &&
              a.pathname !== c.default.SPORT_PAGE &&
              (0, E.jsx)(u.CenterAds, {
                adSettings: A,
                isAdCenterLoginPopup: v,
              }),
            S &&
              (0, E.jsx)(u.MobileAds, {
                adSettings: S,
              }),
          ],
        });
      });
      t.default = A;
    },
    74912: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        });
      var o = a(n(21028));
    },
  },
]);
