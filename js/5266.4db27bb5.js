"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [5266],
  {
    62654: (e, t, n) => {
      e.exports = n.p + "static/media/flags.5bc53ca7..png";
    },
    82541: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.InputTel = void 0);
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
        i = (function () {
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
        u = p(n(5556)),
        r = n(96540),
        l = p(r),
        o = p(n(46942)),
        s = p(n(78783)),
        f = p(n(61612));
      function p(e) {
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
      var d = n(62654),
        v = (t.InputTel = (function (e) {
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
            if (
              (h.call(n),
              (n.isValidator = !!e.inputOptions.rule),
              (n.info = e.inputOptions.info || ""),
              n.isValidator)
            ) {
              var a = e.inputOptions.rule.validator,
                i = e.inputOptions.rule.tip || "",
                u = Array.isArray(a),
                l = Array.isArray(i);
              (n.validator = u ? a : [a]), (n.tip = l ? i : [i]);
            }
            var o = e.defaultValue || e.value;
            return (
              (n.state = {
                isValid: !0,
                value: o,
                outputValue: o,
                validateDetail: [],
                isShowTop: !1,
              }),
              (n.compRef = (0, r.createRef)()),
              (n.telInputRef = (0, r.createRef)()),
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
            i(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.checkPos();
                },
              },
              {
                key: "UNSAFE_componentWillReceiveProps",
                value: function (e) {
                  e.defaultValue !== this.props.defaultValue
                    ? this.setState({
                        value: e.defaultValue,
                        outputValue: e.defaultValue,
                      })
                    : e.value !== this.props.value &&
                      this.setState({
                        value: e.value,
                        outputValue: e.value,
                      });
                },
              },
              {
                key: "fotmatNumber",
                value: function (e, t) {
                  var n = t.dialCode;
                  if (!this.props.autoFormat) {
                    var a = void 0,
                      i = e.replace(/\+/g, "").trim();
                    return (
                      (a = i),
                      i.length <= n.length && ((i = n), (a = "")),
                      {
                        value: i,
                        outputValue: (a = a.replace(n, n + " ")),
                      }
                    );
                  }
                  var u = null;
                  return 0 ===
                    (u = e.match(/\d+/g)
                      ? e.match(/\d+/g).join("").substr(n.length)
                      : "").length
                    ? {
                        value: n,
                        outputValue: "",
                      }
                    : {
                        value: (u = n + " " + u),
                        outputValue: u,
                      };
                },
              },
              {
                key: "small",
                value: function () {
                  var e = this.state,
                    t = e.isValid,
                    n = e.validateDetail,
                    a = this.tip
                      ? this.tip.filter(function (e, t) {
                          return !n[t];
                        })
                      : [],
                    i =
                      "function" == typeof this.info ? this.info() : this.info,
                    u = this.props.inputOptions.invalidTipClassname;
                  return l.default.createElement(
                    "small",
                    {
                      className: t ? "info-msg" : "invalid-msg",
                    },
                    t
                      ? null
                      : u
                      ? l.default.createElement("i", {
                          className: u,
                        })
                      : null,
                    t ? i : "function" == typeof a[0] ? a[0]() : a[0]
                  );
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    n = t.readOnly,
                    i = t.inputSpan,
                    u = t.className,
                    r = t.inputClassName,
                    f = t.isViSite,
                    p = this.state,
                    d = p.isValid,
                    v = p.isShowTop,
                    h = p.value,
                    m =
                      (c(
                        (e = {
                          "nrc-form-input": !0,
                        }),
                        "nrc-u-" + i,
                        !!i
                      ),
                      c(e, "readOnly", n),
                      e),
                    y = {
                      invalid: !d,
                      readOnly: n,
                    },
                    g = f
                      ? {}
                      : {
                          value: h,
                        };
                  return l.default.createElement(
                    "div",
                    {
                      className: (0, o.default)(m, u),
                      ref: this.compRef,
                    },
                    l.default.createElement(
                      s.default,
                      a({}, this.props, g, {
                        disabled: n,
                        className: (0, o.default)(y, r),
                        onBlur: this.onBlur,
                        onChange: this.onChange,
                        listStyle: {
                          top: v ? "-200px" : "33px",
                        },
                        ref: this.telInputRef,
                      })
                    ),
                    this.small(),
                    l.default.createElement("input", {
                      ref: "input",
                      type: "hidden",
                      className: "nrc-invisible",
                    })
                  );
                },
              },
            ]),
            t
          );
        })(r.Component)),
        h = function () {
          var e = this;
          (this.checkPos = function () {
            var t = e.compRef.current.getBoundingClientRect();
            (t.y || t.top || 0) + 300 >= window.innerHeight &&
              e.setState({
                isShowTop: !0,
              });
          }),
            (this.getInputValue = function () {
              return e.state.outputValue;
            }),
            (this.setInputValue = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : "";
              e.setState({
                value: t,
                outputValue: t,
              });
            }),
            (this.resetValue = function () {
              var t = e.props,
                n = t.onlyCountries,
                a = t.defaultCountry,
                i = n.find(function (e) {
                  return e.iso2 === a;
                }),
                u = i ? i.dialCode : "",
                r = e.props.defaultValue || u;
              e.telInputRef.current.__wrappedInstance.handleInput({
                target: {
                  value: r,
                },
              });
            }),
            (this.validate = function (t) {
              var n = void 0 !== t ? t : e.getInputValue(),
                a = e.validator.map(function (e) {
                  return e(n || "");
                }),
                i = a.every(function (e) {
                  return !!e;
                });
              return (
                e.setState({
                  isValid: i,
                  validateDetail: a,
                }),
                i
              );
            }),
            (this.onBlur = function (t, n) {
              var a = e.fotmatNumber(t, n),
                i = a.value,
                u = a.outputValue;
              e.isValidator && e.validate(u),
                e.props.onBlur(u),
                e.setState({
                  value: i,
                  outputValue: u,
                });
            }),
            (this.onChange = function (t, n) {
              var a = e.fotmatNumber(t, n),
                i = a.value,
                u = a.outputValue;
              e.isValidator && e.validate(u),
                e.props.onChange(u),
                e.setState({
                  value: i,
                  outputValue: u,
                });
            });
        };
      (v.displayName = "InputTel"),
        (v.propTypes = {
          defaultValue: u.default.string,
          className: u.default.string,
          inputSpan: u.default.string,
          inputClassName: u.default.string,
          inputOptions: u.default.object,
          required: u.default.bool,
          autoFormat: u.default.bool,
          readOnly: u.default.bool,
          value: u.default.string,
          autoComplete: u.default.string,
          defaultCountry: u.default.string,
          flagsImagePath: u.default.string,
          placeholder: u.default.string,
          preferredCountries: u.default.array,
          isViSite: u.default.bool,
          onlyCountries: u.default.array,
          onBlur: u.default.func,
          onChange: u.default.func,
        }),
        (v.defaultProps = {
          className: "",
          inputSpan: "1-1",
          inputClassName: "",
          inputOptions: {},
          required: !1,
          autoFormat: !0,
          readOnly: !1,
          value: "",
          autoComplete: "tel",
          defaultCountry: "cn",
          flagsImagePath: d,
          placeholder: "+86 12-34567",
          preferredCountries: [],
          isViSite: !1,
          onlyCountries: f.default,
          onBlur: function () {},
          onChange: function () {},
        }),
        (t.default = v);
    },
    85446: (e, t, n) => {
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
        i = (function () {
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
        u = f(n(5556)),
        r = n(96540),
        l = f(r),
        o = f(n(46942)),
        s = f(n(20311));
      function f(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function p(e, t, n) {
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
      var c = (function (e) {
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
            d.call(n);
            var a = n.refs.input,
              i = void 0 === a ? {} : a,
              u = e.inputOptions,
              r = void 0 === u ? {} : u;
            if (
              ((n.initialValue = e.defaultValue || i.value),
              (n.isValidator = !!r.rule),
              (n.info = r.info || ""),
              n.isValidator)
            ) {
              (0, s.default)(
                !!e.inputOptions.rule.validator,
                "If rule is given, must have validator(function returns boolean)"
              );
              var l = e.inputOptions.rule.validator,
                o = e.inputOptions.rule.tip || "",
                f = Array.isArray(l),
                p = Array.isArray(o);
              (n.validator = f ? l : [l]), (n.tip = p ? o : [o]);
            }
            return (
              (n.state = {
                isValid: !0,
                validateDetail: [],
              }),
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
            i(t, [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.refs.input;
                  this.initialValue = e.value;
                },
              },
              {
                key: "render",
                value: function () {
                  var e,
                    t = this.props,
                    n = t.inputOptions,
                    i = void 0 === n ? {} : n,
                    u = t.inputSpan,
                    r = t.className,
                    s = t.name,
                    f = t.readOnly,
                    c = (t.isRequired, t.onEnter, t.maxLength),
                    d =
                      (t.decorateInput,
                      (function (e, t) {
                        var n = {};
                        for (var a in e)
                          t.indexOf(a) >= 0 ||
                            (Object.prototype.hasOwnProperty.call(e, a) &&
                              (n[a] = e[a]));
                        return n;
                      })(t, [
                        "inputOptions",
                        "inputSpan",
                        "className",
                        "name",
                        "readOnly",
                        "isRequired",
                        "onEnter",
                        "maxLength",
                        "decorateInput",
                      ])),
                    v = this.state,
                    h = v.isValid,
                    m = v.validateDetail,
                    y = i.status,
                    g = i.invalidTipClassname,
                    b =
                      (p(
                        (e = {
                          "nrc-form-input": !0,
                        }),
                        "nrc-u-" + u,
                        !!u
                      ),
                      p(e, "readOnly", f),
                      e),
                    O = {
                      invalid: "invalid" === y || !h,
                      readOnly: f,
                    },
                    V =
                      this.tip &&
                      this.tip.filter(function (e, t) {
                        return !m[t];
                      }),
                    C =
                      "function" == typeof this.info ? this.info() : this.info;
                  return l.default.createElement(
                    "div",
                    {
                      className: (0, o.default)(b) + " " + r,
                    },
                    l.default.createElement(
                      "input",
                      a({}, d, {
                        readOnly: f,
                        id: s,
                        ref: "input",
                        className: (0, o.default)(O),
                        onChange: this.onChangeHandler,
                        onKeyDown: this.onKeyDownHandler,
                        maxLength: c,
                      })
                    ),
                    l.default.createElement(
                      "small",
                      {
                        className: h ? "info-msg" : "invalid-msg",
                      },
                      h
                        ? null
                        : g
                        ? l.default.createElement("i", {
                            className: g,
                          })
                        : null,
                      h ? C : "function" == typeof V[0] ? V[0]() : V[0]
                    )
                  );
                },
              },
            ]),
            t
          );
        })(r.Component),
        d = function () {
          var e = this;
          (this.onChangeHandler = function () {
            var t = e.props.onChange;
            e.isValidator && e.validate(), t(e.getInputValue());
          }),
            (this.onKeyDownHandler = function (t) {
              var n = e.props.onKeyDown;
              n && n(t),
                13 === t.keyCode && (t.preventDefault(), e.props.onEnter());
            }),
            (this.getInputValue = function () {
              return e.refs.input.value;
            }),
            (this.setInputValue = function () {
              var t =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : e.initialValue;
              e.refs.input.value = t;
            }),
            (this.validate = function () {
              var t = e.getInputValue(),
                n = e.validator.map(function (e) {
                  return e(t);
                }),
                a = n.every(function (e) {
                  return !!e;
                });
              return (
                e.setState({
                  isValid: a,
                  validateDetail: n,
                }),
                a
              );
            });
        };
      (c.displayName = "Input"),
        (c.propTypes = {
          className: u.default.string,
          invalidTipClassname: u.default.string,
          defaultValue: u.default.string,
          inputOptions: u.default.object,
          inputSpan: u.default.string,
          isRequired: u.default.bool,
          onChange: u.default.func,
          onEnter: u.default.func,
          name: u.default.string,
          readOnly: u.default.bool,
          maxLength: u.default.number,
        }),
        (c.defaultProps = {
          defaultValue: "",
          inputOptions: {},
          inputSpan: "1-1",
          isRequired: !1,
          className: "",
          name: "",
          onChange: function () {},
          onEnter: function () {},
        }),
        (t.default = c);
    },
  },
]);
