"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3982],
  {
    1816: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.containerWithProps = function (e, t) {
          return (
            (e.displayName =
              "Container" +
              (function (e) {
                return e.displayName || e.name || "CompositeComponent";
              })(t)),
            (e.CompositeComponent = t),
            (0, n.default)(e, t)
          );
        });
      var o,
        n =
          (o = r(37074)) && o.__esModule
            ? o
            : {
                default: o,
              };
    },
    37074: (e) => {
      var t = {
          childContextTypes: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        r = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        o = Object.defineProperty,
        n = Object.getOwnPropertyNames,
        a = Object.getOwnPropertySymbols,
        i = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        u = l && l(Object);
      e.exports = function e(s, f, c) {
        if ("string" != typeof f) {
          if (u) {
            var p = l(f);
            p && p !== u && e(s, p, c);
          }
          var d = n(f);
          a && (d = d.concat(a(f)));
          for (var m = 0; m < d.length; ++m) {
            var y = d[m];
            if (!(t[y] || r[y] || (c && c[y]))) {
              var b = i(f, y);
              try {
                o(s, y, b);
              } catch (e) {}
            }
          }
          return s;
        }
        return s;
      };
    },
    56372: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t;
          };
        })(),
        a = s(r(5556)),
        i = r(96540),
        l = s(i),
        u = s(r(46942));
      function s(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var f = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
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
          n(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.className,
                  r = (function (e, t) {
                    var r = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (r[o] = e[o]));
                    return r;
                  })(e, ["className"]);
                return l.default.createElement(
                  "form",
                  o({}, r, {
                    className:
                      (0, u.default)({
                        "nrc-form": !0,
                        "nrc-form-block": !0,
                      }) +
                      " " +
                      t,
                  })
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (t.default = f),
        (f.displayName = "Form"),
        (f.childContextTypes = {
          form: a.default.object.isRequired,
        }),
        (f.getChildContext = function () {
          return {
            form: (void 0).props.form,
          };
        }),
        (f.propTypes = {
          className: a.default.string,
          form: a.default.object,
        }),
        (f.defaultProps = {
          className: "",
        });
    },
    71719: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          },
        n = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t;
          };
        })(),
        a = f(r(5556)),
        i = r(96540),
        l = f(i),
        u = f(r(46942)),
        s = f(r(30873));
      function f(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function c(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      var p = (function (e) {
        function t() {
          return (
            (function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t),
            (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
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
          n(t, [
            {
              key: "render",
              value: function () {
                var e,
                  t = this.props,
                  r = t.children,
                  n = t.isItemRequire,
                  a = t.label,
                  i = t.labelName,
                  f = t.labelSpan,
                  p = t.className,
                  d = t.labelClassName,
                  m = t.labelDirection,
                  y = t.tooltip,
                  b = (t.tooltipProps, t.tooltipRenderer),
                  h = t.tooltipWidth,
                  v = (function (e, t) {
                    var r = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (r[o] = e[o]));
                    return r;
                  })(t, [
                    "children",
                    "isItemRequire",
                    "label",
                    "labelName",
                    "labelSpan",
                    "className",
                    "labelClassName",
                    "labelDirection",
                    "tooltip",
                    "tooltipProps",
                    "tooltipRenderer",
                    "tooltipWidth",
                  ]),
                  g = c(
                    {
                      "nrc-form-item": !0,
                      vertical: "vertical" === m,
                    },
                    p,
                    !0
                  ),
                  O =
                    (c(
                      (e = {
                        "nrc-form-label": !0,
                        vertical: "vertical" === m,
                      }),
                      "nrc-u-" + f,
                      "vertical" !== m && !!f
                    ),
                    c(e, d, !0),
                    e),
                  _ = {
                    "form-require": n,
                  };
                return l.default.createElement(
                  "div",
                  o({}, v, {
                    className: (0, u.default)(g),
                  }),
                  null !== i &&
                    "" !== i &&
                    void 0 !== i &&
                    l.default.createElement(
                      "div",
                      {
                        className: (0, u.default)(O),
                      },
                      l.default.createElement(
                        "label",
                        {
                          htmlFor: a,
                          className: (0, u.default)(_),
                        },
                        i
                      ),
                      (y || b) &&
                        l.default.createElement(
                          "span",
                          null,
                          l.default.createElement("i", {
                            className: "icon-info",
                            "data-tip": !0,
                            "data-for": "tooltip-" + a,
                          }),
                          l.default.createElement(s.default, {
                            id: "tooltip-" + a,
                            getContent: function () {
                              return l.default.createElement(
                                "div",
                                {
                                  className: "tooltip-multiline",
                                  style: {
                                    maxWidth: h,
                                  },
                                },
                                b ? b() : y
                              );
                            },
                          })
                        )
                    ),
                  r
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (t.default = p),
        (p.displayName = "FormItem"),
        (p.propTypes = {
          children: a.default.oneOfType([
            a.default.object.isRequired,
            a.default.array.isRequired,
          ]),
          className: a.default.string,
          isItemRequire: a.default.bool,
          label: a.default.string.isRequired,
          labelClassName: a.default.string,
          labelSpan: a.default.string,
          labelDirection: a.default.oneOf(["horizontal", "vertical"]),
          labelName: a.default.string,
          tooltip: a.default.string,
          tooltipProps: a.default.object,
          tooltipRenderer: a.default.func,
          tooltipWidth: a.default.number,
        }),
        (p.defaultProps = {
          className: "",
          isItemRequire: !1,
          labelClassName: "",
          labelDirection: "horizontal",
          labelSpan: "",
          tooltipProps: {},
          tooltipWidth: 500,
        });
    },
    77158: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var r = arguments[t];
              for (var o in r)
                Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
            }
            return e;
          },
        n =
          "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
            ? function (e) {
                return typeof e;
              }
            : function (e) {
                return e &&
                  "function" == typeof Symbol &&
                  e.constructor === Symbol &&
                  e !== Symbol.prototype
                  ? "symbol"
                  : typeof e;
              },
        a = (function () {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var o = t[r];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, r, o) {
            return r && e(t.prototype, r), o && e(t, o), t;
          };
        })(),
        i = c(r(5556)),
        l = r(96540),
        u = c(l),
        s = c(r(20311)),
        f = r(1816);
      function c(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      function p(e, t, r) {
        return (
          t in e
            ? Object.defineProperty(e, t, {
                value: r,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[t] = r),
          e
        );
      }
      t.default = function () {
        var e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.withRef,
          r = void 0 === t || t,
          c = e.formPropName,
          d = void 0 === c ? "form" : c,
          m = e.readOnly,
          y = void 0 !== m && m,
          b = e.defaultValues,
          h = void 0 === b ? {} : b,
          v = e.isReduxContainer,
          g = void 0 !== v && v;
        return function (e) {
          var t = (function (t) {
            function i(e) {
              !(function (e, t) {
                if (!(e instanceof t))
                  throw new TypeError("Cannot call a class as a function");
              })(this, i);
              var t = (function (e, t) {
                if (!e)
                  throw new ReferenceError(
                    "this hasn't been initialised - super() hasn't been called"
                  );
                return !t || ("object" != typeof t && "function" != typeof t)
                  ? e
                  : t;
              })(this, (i.__proto__ || Object.getPrototypeOf(i)).call(this, e));
              return (
                c.call(t),
                (t.formItems = {}),
                (t.formItemsMeta = {}),
                (t.validateDetail = {}),
                (t.state = {
                  submitting: !1,
                }),
                t
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
              })(i, t),
              a(i, [
                {
                  key: "componentDidMount",
                  value: function () {
                    0 !== Object.keys(h).length && this.setFormItems(h);
                  },
                },
                {
                  key: "getFormMethods",
                  value: function () {
                    return {
                      getCompositeComponent: this.getCompositeComponent,
                      decorateInput: this.decorateInput,
                      isSubmitting: this.isSubmitting,
                      getFormItems: this.getFormItems,
                      setFormItems: this.setFormItems,
                      resetForm: this.resetForm,
                      resetSingleField: this.resetSingleField,
                      validate: this.validate,
                      customizedValidate: this.customizedValidate,
                      getValidateDetail: this.getValidateDetail,
                    };
                  },
                },
                {
                  key: "childrenRefs",
                  value: function (e) {
                    var t = this,
                      r =
                        arguments.length > 1 && void 0 !== arguments[1]
                          ? arguments[1]
                          : {};
                    return (
                      Object.keys(e.refs).forEach(function (o) {
                        var a = e.refs[o];
                        "object" === n(a.props) && !0 === a.props.decorateInput
                          ? (r[o] = a)
                          : "object" === n(a.refs) && t.childrenRefs(a, r);
                      }),
                      r
                    );
                  },
                },
                {
                  key: "render",
                  value: function () {
                    var t = o(p({}, d, this.getFormMethods()), this.props);
                    return (
                      r && (t.ref = "compositeComponent"),
                      u.default.createElement(e, t)
                    );
                  },
                },
              ]),
              i
            );
          })(l.Component);
          t.propTypes = {
            withRef: i.default.bool,
          };
          var c = function () {
            var e = this;
            (this.getInputProps = function (t) {
              return (
                (0, s.default)(t, "Must have name to get input's property "),
                e.formItems[t]
              );
            }),
              (this.getInputPropByKey = function (t, r) {
                return (
                  (0, s.default)(t, "Must have name to get specific form item"),
                  (e.getInputProps(t) || {})[r]
                );
              }),
              (this.getCompositeComponent = function () {
                (0, s.default)(
                  r,
                  "To access the composite component, you need to specify{ withRef: true } in createForm's first argument"
                );
                var t = g
                  ? e.refs.compositeComponent.getWrappedInstance()
                  : e.refs.compositeComponent;
                return {
                  refs: e.childrenRefs(t),
                };
              }),
              (this.setFormItems = function () {
                var t =
                  arguments.length > 0 && void 0 !== arguments[0]
                    ? arguments[0]
                    : {};
                Object.keys(t).forEach(function (r) {
                  try {
                    e.getCompositeComponent().refs[r + "__ref"].setInputValue(
                      t[r]
                    );
                  } catch (e) {}
                });
              }),
              (this.getFormItems = function () {
                return Object.keys(e.formItemsMeta)
                  .map(function (t) {
                    if (e.getCompositeComponent().refs[t + "__ref"])
                      try {
                        return p(
                          {},
                          t,
                          e
                            .getCompositeComponent()
                            .refs[t + "__ref"].getInputValue()
                        );
                      } catch (e) {}
                    return p({}, t, null);
                  })
                  .reduce(function (e, t) {
                    return Object.assign(e, t);
                  }, {});
              }),
              (this.getValidateDetail = function () {
                return e.validateDetail;
              }),
              (this.validate = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {
                          autoFocus: !0,
                          manualFocusOn: void 0,
                        },
                  r = !1,
                  o = void 0,
                  n = t.autoFocus,
                  a = t.manualFocusOn;
                return Object.keys(e.formItemsMeta)
                  .map(function (t) {
                    if (
                      (o = e.getCompositeComponent().refs[t + "__ref"]) &&
                      o.isValidator
                    )
                      try {
                        var i = o.validate();
                        if (!r && !i && ((!a && n) || a === t))
                          try {
                            o.refs.input.focus(), (r = !0);
                          } catch (e) {}
                        return (e.validateDetail[t] = i), i;
                      } catch (e) {}
                    return !0;
                  })
                  .every(function (e) {
                    return !!e;
                  });
              }),
              (this.resetForm = function () {
                Object.keys(e.formItemsMeta).forEach(function (t) {
                  e.resetSingleField(t, {
                    withValue: h.hasOwnProperty(t),
                    value: h[t],
                  });
                });
              }),
              (this.resetSingleField = function (t) {
                var r =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : {},
                  o = r.withValue,
                  n = void 0 !== o && o,
                  a = r.value;
                if (n)
                  try {
                    e.getCompositeComponent().refs[t + "__ref"].setInputValue(
                      a
                    );
                  } catch (e) {}
                else
                  try {
                    e.getCompositeComponent().refs[t + "__ref"].setInputValue();
                  } catch (e) {}
              }),
              (this.customizedValidate = function () {
                var t =
                    arguments.length > 0 && void 0 !== arguments[0]
                      ? arguments[0]
                      : {
                          autoFocus: !0,
                        },
                  r = t.customizedValidates;
                (0, s.default)(
                  r,
                  "Customized validation should specify input key"
                ),
                  (0, s.default)(
                    Array.isArray(r),
                    "Customized validation should be an Array"
                  );
                var o = t.autoFocus;
                return r
                  .map(function (t) {
                    if (
                      e.getCompositeComponent().refs[t + "__ref"] &&
                      e.getCompositeComponent().refs[t + "__ref"].isValidator
                    )
                      try {
                        !e
                          .getCompositeComponent()
                          .refs[t + "__ref"].validate() &&
                          o &&
                          e
                            .getCompositeComponent()
                            .refs[t + "__ref"].refs.input.focus();
                        var r = e
                          .getCompositeComponent()
                          .refs[t + "__ref"].validate();
                        return (e.validateDetail[t] = r), r;
                      } catch (e) {}
                    return !0;
                  })
                  .every(function (e) {
                    return !!e;
                  });
              }),
              (this.isSubmitting = function () {
                return e.state.isSubmitting;
              }),
              (this.decorateInput = function (t) {
                var r =
                  arguments.length > 1 && void 0 !== arguments[1]
                    ? arguments[1]
                    : {};
                e.formItemsMeta[t] = r;
                var o = y;
                if ("boolean" != typeof y)
                  try {
                    o = y[t];
                  } catch (e) {
                    throw new Error(
                      "readOnly should be either Boolean or Object"
                    );
                  }
                return (
                  (0, s.default)(
                    "boolean" == typeof o || void 0 === o,
                    "readOnly should be boolean or undefined"
                  ),
                  function (n) {
                    var a = void 0;
                    return (
                      (e.formItems[t] = n.props),
                      void 0 !== n.props.defaultValue
                        ? (a = n.props.defaultValue)
                        : void 0 !== h[t] && (a = h[t]),
                      u.default.cloneElement(n, {
                        decorateInput: !0,
                        defaultValue: a,
                        inputOptions: r,
                        readOnly: n.props.readOnly || o,
                        name: t,
                        ref: t + "__ref",
                      })
                    );
                  }
                );
              });
          };
          return (0, f.containerWithProps)(t, e);
        };
      };
    },
  },
]);
