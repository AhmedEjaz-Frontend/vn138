"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3902],
  {
    10844: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var l = a(n(94188));
      const u = a(n(9404)).default.fromJS(l.default);
      t.default = u;
    },
    17427: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var l = a(n(15361)),
        u = a(n(72524)),
        o = a(n(27179)),
        r = a(n(10844)),
        i = a(n(49950)),
        c = n(51628),
        s = n(74848);
      const d = r.default.getIn(["brand", "customMobile", "useLightStyle"], !1);
      t.default = () => {
        const [{ isLite: e, isLock: t }, n] = (0, u.default)({
          isLite: o.default.get("isLite"),
          isLock: !1,
        });
        return (
          (0, l.default)(() => {
            setTimeout(() => {
              location.reload();
            }, 200);
          }, [e]),
          d
            ? (0, s.jsxs)("div", {
                className: "app-type-toggle-btn",
                children: [
                  (0, s.jsx)("span", {
                    children: e
                      ? c.i18n["lite.version"]
                      : c.i18n["full.version"],
                  }),
                  (0, s.jsx)(i.default, {
                    checked: e,
                    readOnly: t,
                    onChange: (t) => {
                      const a = !e;
                      o.default.set("isLite", a),
                        n({
                          isLite: a,
                          isLock: !0,
                        });
                    },
                  }),
                ],
              })
            : null
        );
      };
    },
    49950: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var l = a(n(62778)),
        u = n(74848);
      t.default = (e) =>
        (0, u.jsx)("div", {
          className: "nrc-input-switch",
          children: (0, u.jsx)(l.default, {
            ...e,
          }),
        });
    },
    62778: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.InputSwitch = void 0);
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
        l = i(n(5556)),
        u = n(96540),
        o = i(u),
        r = i(n(46942));
      function i(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function c(e, t, n) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = n),
          e
        );
      }
      var s = (t.InputSwitch = (function (e) {
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
          return (
            (n.getInputValue = function () {
              return n.state.checked;
            }),
            (n.setInputValue = function () {
              var e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : n.initialValue;
              n.setState({
                checked: e,
              });
            }),
            (n.state = {
              checked: e.defaultValue || e.checked,
            }),
            (n.initialValue = e.defaultValue || e.checked),
            n
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
          a(t, [
            {
              key: "UNSAFE_componentWillReceiveProps",
              value: function (e) {
                this.setState({
                  checked: e.checked,
                });
              },
            },
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  n = (t.inputOptions, t.inputSpan),
                  a = t.className,
                  l = t.onChange,
                  u = t.readOnly,
                  i = t.name,
                  s =
                    (c(
                      (e = {
                        "nrc-form-input": !0,
                        "nrc-switch": !0,
                      }),
                      "nrc-u-" + n,
                      !!n
                    ),
                    c(e, "readOnly", u),
                    e),
                  d = {
                    readOnly: u,
                  },
                  f = l.bind(null, !this.state.checked);
                return o.default.createElement(
                  "div",
                  {
                    className: (0, r.default)(s) + " " + a,
                  },
                  o.default.createElement("input", {
                    className: (0, r.default)(d),
                    id: i,
                    type: "checkbox",
                    checked: this.state.checked,
                    onChange: this.onChangeHandler,
                    disabled: u,
                  }),
                  o.default.createElement("label", {
                    className: (0, r.default)(d),
                    htmlFor: i,
                    onClick: function () {
                      u || f();
                    },
                  })
                );
              },
            },
          ]),
          t
        );
      })(u.Component));
      (s.displayName = "InputSwitch"),
        (s.propTypes = {
          inputOptions: l.default.object,
          checked: l.default.bool,
          inputSpan: l.default.string,
          onChange: l.default.func,
          className: l.default.string,
          name: l.default.string,
          style: l.default.object,
          readOnly: l.default.bool,
          defaultValue: l.default.bool,
        }),
        (s.defaultProps = {
          checked: !1,
          inputSpan: "1-1",
          onChange: function () {},
          className: "",
          style: {},
          readOnly: !1,
          defaultValue: null,
        }),
        (t.default = s);
    },
  },
]);
