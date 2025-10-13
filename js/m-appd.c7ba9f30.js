"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [5950],
  {
    10844: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(a(94188));
      const s = n(a(9404)).default.fromJS(o.default);
      t.default = s;
    },
    12695: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          const e = (0, s.useSelector)((e) => e.players.registrationSetting);
          return (0, o.useMemo)(() => {
            const t = e.get("playerRegAgent", (0, l.List)()) || (0, l.List)();
            let a = d;
            if (t.size > 0) {
              const e = t.get("isUlAgent"),
                n = e ? t.get("account") : t.get("agentId");
              return (
                e ? i.ulagentCookie.set(n) : i.agentCookie.set(n),
                {
                  isAgentDomain: !0,
                  isUlagent: e,
                  agentId: e ? t.get("ulAgentId") : t.get("agentId"),
                  account: e ? t.get("account") : "",
                  appURL: a,
                }
              );
            }
            return {
              isAgentDomain: !1,
              isUlagent: !1,
              agentId: null,
              account: "",
              appURL: a,
            };
          }, [e]);
        });
      var o = a(96540),
        s = a(67467),
        r = n(a(10844)),
        l = a(9404),
        i = a(56291);
      const d = r.default.getIn(["portal", "apiServer", "appDownloadURL"], "");
    },
    21767: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(a(96540)),
        s = n(a(12695)),
        r = a(74848);
      t.default = (e) => {
        const t = (t, a) => {
          const n = (0, s.default)();
          return (0, r.jsx)(e, {
            ref: a,
            agentDomain: n,
            ...t,
          });
        };
        return o.default.forwardRef(t);
      };
    },
    57373: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(a(43693)),
        s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              o = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return o;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, o);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((n =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (n.get || n.set)
                  ? a(o, t, n)
                  : (o[t] = e[t]));
            return o;
          })(e);
        })(a(96540)),
        r = n(a(10844)),
        l = a(51628),
        i = a(83597),
        d = n(a(21767)),
        c = a(74848);
      const u = r.default.hasIn(["brand", "customMobile", "appDownload"]);
      class p extends s.Component {
        constructor(e) {
          super(e),
            (0, o.default)(this, "onClick", () => {
              this.setState({
                show: !1,
              });
            });
          let t = {};
          if (u && !i.isNativeApp) {
            const a = r.default.getIn(["brand", "name"]),
              n = r.default.getIn([
                "brand",
                "customMobile",
                "appDownload",
                "icon",
              ]),
              o = r.default.getIn([
                "brand",
                "customMobile",
                "appDownload",
                "description",
              ]);
            t = {
              url: e.agentDomain.appURL,
              name: a,
              icon: n,
              desc: o,
              show: !0,
            };
          }
          this.state = t;
        }
        shouldComponentUpdate(e, t) {
          return t.show !== this.state.show;
        }
        render() {
          const { url: e, name: t, icon: a, show: n, desc: o } = this.state,
            s = `${t} App`.toUpperCase();
          return n
            ? (0, c.jsxs)("div", {
                className: "app-download-banner",
                children: [
                  (0, c.jsxs)("div", {
                    className: "app-download-cont",
                    children: [
                      (0, c.jsx)("img", {
                        alt: "app-icon",
                        src: a,
                        className: "app-icon",
                      }),
                      (0, c.jsxs)("div", {
                        className: "app-download-text",
                        children: [
                          (0, c.jsx)("h3", {
                            children: s,
                          }),
                          o &&
                            (0, c.jsx)("span", {
                              children: o,
                            }),
                        ],
                      }),
                      (0, c.jsx)("a", {
                        href: e,
                        target: "_blank",
                        children: (0, c.jsx)("div", {
                          className: "app-download-btn",
                          children: l.i18n.download,
                        }),
                      }),
                    ],
                  }),
                  (0, c.jsx)("div", {
                    className: "app-download-close",
                    onClick: this.onClick,
                    children: (0, c.jsx)("i", {
                      className: "mps-input-error",
                    }),
                  }),
                ],
              })
            : (0, c.jsx)("div", {});
        }
      }
      t.default = (0, d.default)(p);
    },
  },
]);
