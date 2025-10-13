"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1981],
  {
    14144: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              o = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return o;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, o);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(o, t, a)
                  : (o[t] = e[t]));
            return o;
          })(e);
        })(n(96540)),
        r = a(n(52622)),
        l = n(74848);
      const s = {};
      t.default = (e) => {
        var t;
        const {
            paths: n,
            alt: a,
            className: i = "",
            loadingStatus: d = !0,
            onEmpty: u,
            onLoaded: c,
            style: p,
            lazy: f = !1,
          } = e,
          m = n[0],
          [g, v] = (0, o.useState)(!1),
          [h, y] = (0, o.useState)(s[m] || 0),
          b = n.length,
          _ = h === b || -1 === h;
        (0, o.useEffect)(() => {
          _ && ((s[m] = -1), u && u());
        }, [h, _, u, m]);
        const j =
          null !== (t = n[h]) && void 0 !== t && t.includes("://")
            ? n[h]
            : `https://img.alltocon.com/img/static/${n[h]}`;
        return _
          ? null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(
                  "img",
                  {
                    className: i,
                    style: p,
                    src: j,
                    onLoad: () => {
                      (s[m] = h), v(!0), c && c();
                    },
                    onError: () => {
                      h < b && y((e) => e + 1);
                    },
                    alt: a || "",
                    loading: f ? "lazy" : "eager",
                  },
                  h
                ),
                d && !g && (0, l.jsx)(r.default, {}),
              ],
            });
      };
    },
    21628: (e, t, n) => {
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
      var o = a(n(44744));
    },
    38040: (e, t, n) => {
      n.r(t);
    },
    44744: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(96540),
        r = a(n(57297)),
        l = a(n(55665)),
        s = a(n(46942)),
        i = a(n(27179)),
        d = a(n(14144)),
        u = a(n(94188)),
        c = n(83597),
        p = n(38560),
        f = n(51628);
      n(38040);
      var m = n(74848);
      const { appDownloadURL: g } = u.default.portal.apiServer,
        v = [`pwa/${u.default.brand.code}.png`];
      g && v.push(`${g}${g.endsWith("/") ? "" : "/"}app-icon.png`),
        v.push("pwa/default.png");
      let h = !1 !== i.default.get("AddHomeScreen") && (p.isIOS || p.isAndroid);
      t.default = () => {
        const { floatingAdsSetting: e, pageLoaded: t } = (0, l.default)(
            (e) => ({
              floatingAdsSetting: e.promo.floatingAdsSetting,
              pageLoaded: e.app.pageLoaded,
            })
          ),
          n = e.filter((e) => 9 === e.get("type")).get(0),
          a = !(null == n || !n.get("status")),
          [g, y] = (0, o.useState)(h),
          b = (0, r.default)();
        if (c.isNativeApp || c.isStandalone || !1 === g || !a) return null;
        if (p.isAndroid && !b) return null;
        if (!t) return null;
        const _ = () => {
          y(!1), (h = !1);
        };
        return (0, m.jsxs)("div", {
          className: (0, s.default)("add-main", {
            ios: p.isIOS,
          }),
          children: [
            (0, m.jsx)("div", {
              className: "close-mask",
              onClick: () => {
                _();
              },
            }),
            (0, m.jsx)("div", {
              className: "add-main-tips",
              onClick: () => {
                _(),
                  b &&
                    (b.prompt(),
                    b.userChoice.then((e) => {
                      "accepted" === e.outcome &&
                        i.default.set("AddHomeScreen", !1);
                    }));
              },
              children: (0, m.jsxs)("div", {
                className: "add-main-wrap",
                children: [
                  (0, m.jsx)(d.default, {
                    paths: v,
                    className: "appicon",
                    alt: "appicon",
                    loadingStatus: !1,
                  }),
                  (0, m.jsxs)("div", {
                    className: "des",
                    children: [
                      f.i18n["add.main.click"],
                      (0, m.jsx)("span", {
                        children: f.i18n["add.main.click.here"],
                      }),
                      (0, m.jsx)("img", {
                        alt: "",
                        src: "https://img.alltocon.com/img/static/mobile/icon-share.png",
                        className: "icon-share",
                      }),
                      " ",
                      f.i18n["add.main.s01"],
                      " ",
                      u.default.brand.name,
                      " ",
                      f.i18n["add.main.s02"],
                    ],
                  }),
                  (0, m.jsx)("div", {
                    className: "dontshow",
                    onClick: (e) => {
                      e.stopPropagation(),
                        i.default.set("AddHomeScreen", !1),
                        _();
                    },
                    children: f.i18n["add.main.dontshow"],
                  }),
                ],
              }),
            }),
          ],
        });
      };
    },
    52622: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var a = t[n];
              (a.enumerable = a.enumerable || !1),
                (a.configurable = !0),
                "value" in a && (a.writable = !0),
                Object.defineProperty(e, a.key, a);
            }
          }
          return function (t, n, a) {
            return n && e(t.prototype, n), a && e(t, a), t;
          };
        })(),
        o = s(n(5556)),
        r = n(96540),
        l = s(r);
      function s(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var i = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var n = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (n.state = {}), n;
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          a(t, [
            {
              key: "componentDidMount",
              value: function () {},
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isLoading,
                  n = e.className,
                  a = e.style,
                  o = "nrc-loading " + (t ? "active" : "") + " " + n;
                return l.default.createElement("div", {
                  className: o,
                  style: a,
                });
              },
            },
          ]),
          t
        );
      })(r.Component);
      (t.default = i),
        (i.displayName = "NrcLoading"),
        (i.propTypes = {
          isLoading: o.default.bool,
          className: o.default.string,
          style: o.default.object,
        }),
        (i.defaultProps = {
          isLoading: !0,
          className: "",
          style: {},
        });
    },
    57297: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          const e = (0, o.useSelector)((e) => e.app.prompt),
            t = (0, o.useDispatch)();
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                e.preventDefault(), t((0, r.setPrompt)(e));
              };
              return (
                window.addEventListener("beforeinstallprompt", e),
                () => {
                  window.removeEventListener("beforeinstallprompt", e);
                }
              );
            }, [t]),
            e
          );
        });
      var a = n(96540),
        o = n(67467),
        r = n(84707);
    },
  },
]);
