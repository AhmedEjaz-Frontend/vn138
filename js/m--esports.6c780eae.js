(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [7482],
  {
    14040: (e, t, n) => {
      "use strict";
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var r = a(n(21856)),
        o = n(51628),
        i = a(n(94188)),
        l = a(n(42795)),
        s = n(74848);
      const { code: c } = i.default.brand;
      t.default = (e) => {
        let {
          activeTab: t,
          providers: n,
          gpLogoStyle: a,
          gameTypeMap: i,
          maintenanceMap: u,
          gameProviderMap: d,
          launchGame: p,
          changeGameQuery: f,
          agentDomain: { appURL: m },
        } = e;
        const { Comp: y } = (0, l.default)(c, t);
        return (0, s.jsxs)("div", {
          className: "game-block",
          children: [
            (0, s.jsx)("div", {
              className: "home-cate",
              id: null == t ? void 0 : t.toLowerCase(),
            }),
            (0, s.jsx)("div", {
              className: "home-list",
              "data-type": o.i18n[t],
              children:
                n &&
                n.map((e) =>
                  (0, s.jsx)(
                    r.default,
                    {
                      activeTab: t,
                      provider: e,
                      gpLogoStyle: a,
                      gameTypeMap: i,
                      maintenanceMap: u,
                      gameProviderMap: d,
                      launchGame: p,
                      changeGameQuery: f,
                    },
                    `${t}-${e}`
                  )
                ),
            }),
            (0, s.jsx)(y, {
              appURL: m,
            }),
          ],
        });
      };
    },
    29335: (e, t, n) => {
      "use strict";
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(n(14040));
      n(57711), (t.default = r.default);
    },
    52622: (e, t, n) => {
      "use strict";
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
        r = l(n(5556)),
        o = n(96540),
        i = l(o);
      function l(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var s = (function (e) {
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
                  r = "nrc-loading " + (t ? "active" : "") + " " + n;
                return i.default.createElement("div", {
                  className: r,
                  style: a,
                });
              },
            },
          ]),
          t
        );
      })(o.Component);
      (t.default = s),
        (s.displayName = "NrcLoading"),
        (s.propTypes = {
          isLoading: r.default.bool,
          className: r.default.string,
          style: r.default.object,
        }),
        (s.defaultProps = {
          isLoading: !0,
          className: "",
          style: {},
        });
    },
    54022: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = n(96540);
      const r = a.createContext({});
      function o({
        baseColor: e,
        highlightColor: t,
        width: n,
        height: a,
        borderRadius: r,
        circle: o,
        direction: i,
        duration: l,
        enableAnimation: s = !0,
        customHighlightBackground: c,
      }) {
        const u = {};
        return (
          "rtl" === i && (u["--animation-direction"] = "reverse"),
          "number" == typeof l && (u["--animation-duration"] = `${l}s`),
          s || (u["--pseudo-element-display"] = "none"),
          ("string" != typeof n && "number" != typeof n) || (u.width = n),
          ("string" != typeof a && "number" != typeof a) || (u.height = a),
          ("string" != typeof r && "number" != typeof r) ||
            (u.borderRadius = r),
          o && (u.borderRadius = "50%"),
          void 0 !== e && (u["--base-color"] = e),
          void 0 !== t && (u["--highlight-color"] = t),
          "string" == typeof c && (u["--custom-highlight-background"] = c),
          u
        );
      }
      (t.SkeletonTheme = function ({ children: e, ...t }) {
        return a.createElement(
          r.Provider,
          {
            value: t,
          },
          e
        );
      }),
        (t.default = function ({
          count: e = 1,
          wrapper: t,
          className: n,
          containerClassName: i,
          containerTestId: l,
          circle: s = !1,
          style: c,
          ...u
        }) {
          var d, p, f;
          const m = a.useContext(r),
            y = {
              ...u,
            };
          for (const [e, t] of Object.entries(u)) void 0 === t && delete y[e];
          const h = {
              ...m,
              ...y,
              circle: s,
            },
            b = {
              ...c,
              ...o(h),
            };
          let v = "react-loading-skeleton";
          n && (v += ` ${n}`);
          const g = null !== (d = h.inline) && void 0 !== d && d,
            _ = [],
            j = Math.ceil(e);
          for (let t = 0; t < j; t++) {
            let n = b;
            if (j > e && t === j - 1) {
              const t = null !== (p = n.width) && void 0 !== p ? p : "100%",
                a = e % 1,
                r = "number" == typeof t ? t * a : `calc(${t} * ${a})`;
              n = {
                ...n,
                width: r,
              };
            }
            const r = a.createElement(
              "span",
              {
                className: v,
                style: n,
                key: t,
              },
              "‌"
            );
            g
              ? _.push(r)
              : _.push(
                  a.createElement(
                    a.Fragment,
                    {
                      key: t,
                    },
                    r,
                    a.createElement("br", null)
                  )
                );
          }
          return a.createElement(
            "span",
            {
              className: i,
              "data-testid": l,
              "aria-live": "polite",
              "aria-busy":
                null === (f = h.enableAnimation) || void 0 === f || f,
            },
            t
              ? _.map((e, n) =>
                  a.createElement(
                    t,
                    {
                      key: n,
                    },
                    e
                  )
                )
              : _
          );
        });
    },
    57711: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    77890: (e, t, n) => {
      "use strict";
      n.r(t);
    },
  },
]);
