"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [6458],
  {
    4957: (e, t, n) => {
      n.r(t);
    },
    7277: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          return (
            !!e &&
            ("object" == typeof e || "function" == typeof e) &&
            "function" == typeof e.then
          );
        });
    },
    7541: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { multipleCall: n = !1, withState: a = !1 } = t,
            [d, p] = (0, l.default)({
              isLoading: !1,
              isLoaded: !1,
              data: void 0,
              error: void 0,
            }),
            f = (0, o.useRef)(!1),
            y = (0, r.useDispatch)(),
            g = (0, o.useCallback)(
              function () {
                if (!n && f.current)
                  return Promise.reject(
                    new Error("previous callback hasn't been resolved.")
                  );
                a &&
                  p({
                    isLoading: !0,
                  }),
                  (f.current = !0);
                let {
                  failed: t,
                  promises: o,
                  ...r
                } = (function (e) {
                  if ((0, s.default)(e))
                    return {
                      promises: [e],
                    };
                  const t = e.types || [],
                    [n, a] = t.slice(Math.max(t.length - 2)),
                    o =
                      !Object.prototype.hasOwnProperty.call(
                        e,
                        "notification"
                      ) || e.notification;
                  return {
                    ...e,
                    success: n,
                    failed: a,
                    notification: o,
                    successMessage: e.successMessage,
                    failMessage: e.failMessage,
                    promises: e.promises.map((e) => e(i.default)),
                  };
                })(e(...arguments));
                return Promise.all(o)
                  .then(
                    (e) => (
                      (e = e.map((e) => {
                        const t = Object.prototype.hasOwnProperty.call(
                          e,
                          "payload"
                        )
                          ? e.payload
                          : e;
                        return (
                          null != t &&
                            t.newToken &&
                            y({
                              type: u.UPDATE_TOKEN,
                              token: t.newToken,
                            }),
                          t
                        );
                      })),
                      a &&
                        p({
                          data: 1 === e.length ? e[0] : e,
                          isLoaded: !0,
                        }),
                      1 === e.length ? e[0] : e
                    )
                  )
                  .catch(
                    (e) => (
                      401 === e.code
                        ? y({
                            type: u.POST_LOGOUT_SUCCESS,
                            unauthorized: !0,
                          })
                        : 403 === e.code
                        ? y({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_FORBIDDEN_ERROR,
                          })
                        : 498 === e.code
                        ? y({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: t,
                          })
                        : 499 === e.code
                        ? y({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_INTERNAL_ERROR_CODE,
                          })
                        : e.code &&
                          y({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_INTERNAL_ERROR_CODE,
                            exception: !0,
                          }),
                      a &&
                        p({
                          error: e,
                        }),
                      Promise.reject(e)
                    )
                  )
                  .finally(() => {
                    a &&
                      p({
                        isLoading: !1,
                      }),
                      (f.current = !1);
                  });
              },
              [e]
            );
          return a
            ? {
                ...d,
                execute: g,
              }
            : g;
        });
      var o = n(96540),
        r = n(67467),
        l = a(n(72524)),
        i = a(n(32080)),
        s = a(n(7277)),
        c = n(36697),
        u = n(62144);
    },
    14900: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(5556));
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
        r = n(74848);
      class l extends o.Component {
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
      t.default = l;
    },
    25833: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.NrcLoading = void 0);
      var a,
        o =
          (a = n(52622)) && a.__esModule
            ? a
            : {
                default: a,
              };
      t.NrcLoading = o.default;
    },
    47907: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = a(n(96244));
      n(4957), (t.default = o.default);
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
        o = i(n(5556)),
        r = n(96540),
        l = i(r);
      function i(e) {
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
      (t.default = s),
        (s.displayName = "NrcLoading"),
        (s.propTypes = {
          isLoading: o.default.bool,
          className: o.default.string,
          style: o.default.object,
        }),
        (s.defaultProps = {
          isLoading: !0,
          className: "",
          style: {},
        });
    },
    96244: (e, t, n) => {
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
        r = a(n(7541)),
        l = a(n(55665)),
        i = a(n(96384)),
        s = n(28651),
        c = a(n(14900)),
        u = n(33726),
        d = n(38560),
        p = n(51628),
        f = a(n(15062)),
        y = n(74848);
      t.default = (e) => {
        let { code: t, onClose: n } = e;
        const { pathname: a } = (0, s.useLocation)(),
          [g, b] = (0, o.useState)(!1),
          [h, v] = (0, o.useState)({
            lang: null,
            content: null,
            displayname: null,
          }),
          m = (0, r.default)(u.getStaticPageContent),
          {
            logined: _,
            staticpageOrders: O,
            signupSuccess: j,
          } = (0, l.default)((e) => ({
            logined: e.players.logined,
            signupSuccess: e.players.signupSuccess,
            staticpageOrders: e.staticpagesettings.staticpagesMap,
          })),
          P =
            null == O
              ? void 0
              : O.getIn(["SignupMap", "loginpopup", "displayname"]),
          N = (0, o.useCallback)(
            (e, t) => {
              m({
                type: e,
                code: t,
              }).then((e) => {
                v({
                  lang: e.lang,
                  content: e.content,
                  displayname: e.displayname,
                });
              }),
                b(!0),
                localStorage.setItem("hSLogPopup", "true");
            },
            [m]
          ),
          C = (0, o.useCallback)(() => {
            var e;
            const n =
              null === (e = localStorage) || void 0 === e
                ? void 0
                : e.getItem("hSLogPopup");
            P && _ && !n && N("SignUp", t || "loginpopup");
          }, [P, _, N, t]);
        (0, o.useEffect)(() => {
          _ || localStorage.removeItem("hSLogPopup");
        }, [_]),
          (0, o.useEffect)(() => {
            _ &&
              ((d.isDesktop && !j) ||
                (d.isMobile && !j && a === f.default.ROOT)) &&
              C();
          }, [_, a, C, j]);
        const w = () => {
          b(!1), n && n();
        };
        return g && h.content
          ? d.isMobile
            ? (0, y.jsxs)("div", {
                className: "custom-login-popup-detail-mobile",
                children: [
                  (0, y.jsx)("div", {
                    className: "header",
                    children: (0, y.jsx)("div", {
                      className: "text-right",
                      children: (0, y.jsx)("div", {
                        className: "btn-close",
                        onClick: w,
                        children: (0, y.jsx)("i", {
                          className: "mps-close",
                        }),
                      }),
                    }),
                  }),
                  (0, y.jsx)("h2", {
                    className: "title-center",
                    children: h.displayname,
                  }),
                  (0, y.jsxs)("div", {
                    className: "content-container",
                    children: [
                      (0, y.jsx)("div", {
                        className: "content",
                        children: (0, y.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: h.content,
                          },
                        }),
                      }),
                      (0, y.jsx)(i.default, {
                        onClick: w,
                        children: p.i18n.confirm,
                      }),
                    ],
                  }),
                ],
              })
            : (0, y.jsx)(c.default, {
                onHandleClose: w,
                children: (0, y.jsxs)("div", {
                  className: "custom-login-popup-detail-desktop",
                  children: [
                    (0, y.jsx)("div", {
                      className: "header",
                      children: (0, y.jsx)("div", {
                        className: "title",
                        children: h.displayname,
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "content",
                      children: (0, y.jsx)("div", {
                        dangerouslySetInnerHTML: {
                          __html: h.content,
                        },
                      }),
                    }),
                    (0, y.jsx)("div", {
                      className: "footer",
                      children: (0, y.jsx)(i.default, {
                        onClick: w,
                        children: p.i18n.confirm,
                      }),
                    }),
                  ],
                }),
              })
          : null;
      };
    },
    96384: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var a in n)
                Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a]);
            }
            return e;
          },
        o = (function () {
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
        r = u(n(5556)),
        l = n(96540),
        i = u(l),
        s = u(n(46942)),
        c = n(25833);
      function u(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function d(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      var p = (function (e) {
        function t() {
          var e, n, a;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var o = arguments.length, r = Array(o), l = 0; l < o; l++)
            r[l] = arguments[l];
          return (
            (n = a =
              d(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(r)
                )
              )),
            (a.onClickHandler = function (e) {
              e.preventDefault();
              var t = a.props,
                n = t.disabled,
                o = t.onClick;
              n || (o(e), e.target.blur());
            }),
            d(a, n)
          );
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
          o(t, [
            {
              key: "render",
              value: function () {
                var e,
                  t,
                  n,
                  o = this.props,
                  r = o.children,
                  l = o.className,
                  u = o.style,
                  d = o.size,
                  p = o.disabled,
                  f = o.loading,
                  y = o.loadingClassName,
                  g = o.loadingStyle,
                  b = o.title,
                  h = o.dataTip,
                  v = (function (e, t) {
                    var n = {};
                    for (var a in e)
                      t.indexOf(a) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, a) &&
                          (n[a] = e[a]));
                    return n;
                  })(o, [
                    "children",
                    "className",
                    "style",
                    "size",
                    "disabled",
                    "loading",
                    "loadingClassName",
                    "loadingStyle",
                    "title",
                    "dataTip",
                  ]),
                  m =
                    ((n = !!l),
                    (t = l) in
                    (e = {
                      "nrc-button": !0,
                      "nrc-button-disabled": p,
                      "nrc-button-loading": f,
                    })
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e);
                return i.default.createElement(
                  "button",
                  a({}, v, {
                    title: b,
                    "data-tip": h || void 0,
                    "data-for": h ? "enrich" : void 0,
                    className: (0, s.default)(m),
                    style: Object.assign({}, u),
                    "data-size": d,
                    onClick: this.onClickHandler,
                    type: "button",
                  }),
                  f &&
                    i.default.createElement(c.NrcLoading, {
                      className: y,
                      style: g,
                    }),
                  r && r
                );
              },
            },
          ]),
          t
        );
      })(l.Component);
      (p.displayName = "Button"),
        (p.propTypes = {
          children: r.default.node,
          className: r.default.string,
          style: r.default.object,
          size: r.default.string,
          onClick: r.default.func,
          disabled: r.default.bool,
          loading: r.default.bool,
          loadingClassName: r.default.string,
          loadingStyle: r.default.object,
          title: r.default.string,
        }),
        (p.defaultProps = {
          style: {},
          onClick: function () {},
          disabled: !1,
          loading: !1,
          loadingClassName: "",
          loadingStyle: {},
          title: "",
          dataTip: "",
        }),
        (t.default = p);
    },
  },
]);
