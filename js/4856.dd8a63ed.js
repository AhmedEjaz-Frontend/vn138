(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [4856],
  {
    64856: (e, t, n) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = n(5556),
        a = n(96540),
        o = n(9771),
        i = n(76991);
      function u(e) {
        return e && "object" == typeof e && "default" in e
          ? e
          : {
              default: e,
            };
      }
      var s = u(r),
        c = u(a),
        l = u(o),
        f = u(i);
      function p(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t &&
            (r = r.filter(function (t) {
              return Object.getOwnPropertyDescriptor(e, t).enumerable;
            })),
            n.push.apply(n, r);
        }
        return n;
      }
      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2
            ? p(Object(n), !0).forEach(function (t) {
                h(e, t, n[t]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
            : p(Object(n)).forEach(function (t) {
                Object.defineProperty(
                  e,
                  t,
                  Object.getOwnPropertyDescriptor(n, t)
                );
              });
        }
        return e;
      }
      function m(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          (r.enumerable = r.enumerable || !1),
            (r.configurable = !0),
            "value" in r && (r.writable = !0),
            Object.defineProperty(e, r.key, r);
        }
      }
      function h(e, t, n) {
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
      function y(e) {
        return (
          (y = Object.setPrototypeOf
            ? Object.getPrototypeOf
            : function (e) {
                return e.__proto__ || Object.getPrototypeOf(e);
              }),
          y(e)
        );
      }
      function b(e, t) {
        return (
          (b =
            Object.setPrototypeOf ||
            function (e, t) {
              return (e.__proto__ = t), e;
            }),
          b(e, t)
        );
      }
      function v(e) {
        if (void 0 === e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return e;
      }
      function g(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r;
      }
      var w = function (e, t) {
          var n = t.decimal,
            r = t.decimals,
            a = t.duration,
            o = t.easingFn,
            i = t.end,
            u = t.formattingFn,
            s = t.prefix,
            c = t.separator,
            l = t.start,
            p = t.suffix,
            d = t.useEasing;
          return new f.default(e, l, i, r, a, {
            decimal: n,
            easingFn: o,
            formattingFn: u,
            separator: c,
            prefix: s,
            suffix: p,
            useEasing: d,
            useGrouping: !!c,
          });
        },
        V = (function (e) {
          !(function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function"
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0,
              },
            })),
              t && b(e, t);
          })(i, e);
          var t,
            n,
            r,
            a,
            o =
              ((r = i),
              (a = (function () {
                if ("undefined" == typeof Reflect || !Reflect.construct)
                  return !1;
                if (Reflect.construct.sham) return !1;
                if ("function" == typeof Proxy) return !0;
                try {
                  return (
                    Boolean.prototype.valueOf.call(
                      Reflect.construct(Boolean, [], function () {})
                    ),
                    !0
                  );
                } catch (e) {
                  return !1;
                }
              })()),
              function () {
                var e,
                  t = y(r);
                if (a) {
                  var n = y(this).constructor;
                  e = Reflect.construct(t, arguments, n);
                } else e = t.apply(this, arguments);
                return (function (e, t) {
                  return !t || ("object" != typeof t && "function" != typeof t)
                    ? v(e)
                    : t;
                })(this, e);
              });
          function i() {
            var e;
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, i);
            for (var t = arguments.length, n = new Array(t), r = 0; r < t; r++)
              n[r] = arguments[r];
            return (
              h(
                v((e = o.call.apply(o, [this].concat(n)))),
                "checkProps",
                function (t) {
                  var n = e.props,
                    r = n.start,
                    a = n.suffix,
                    o = n.prefix,
                    i = n.redraw,
                    u = n.duration,
                    s = n.separator,
                    c = n.decimals,
                    l = n.decimal,
                    f = n.className;
                  return (
                    u !== t.duration ||
                    r !== t.start ||
                    a !== t.suffix ||
                    o !== t.prefix ||
                    s !== t.separator ||
                    c !== t.decimals ||
                    l !== t.decimal ||
                    f !== t.className ||
                    i
                  );
                }
              ),
              h(v(e), "createInstance", function () {
                return (
                  "function" == typeof e.props.children &&
                    l.default(
                      e.containerRef.current &&
                        (e.containerRef.current instanceof HTMLElement ||
                          e.containerRef.current instanceof SVGTextElement ||
                          e.containerRef.current instanceof SVGTSpanElement),
                      'Couldn\'t find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an HTMLElement, eg. <span ref={containerRef} />.'
                    ),
                  w(e.containerRef.current, e.props)
                );
              }),
              h(v(e), "pauseResume", function () {
                var t = v(e),
                  n = t.reset,
                  r = t.restart,
                  a = t.update,
                  o = e.props.onPauseResume;
                e.instance.pauseResume(),
                  o({
                    reset: n,
                    start: r,
                    update: a,
                  });
              }),
              h(v(e), "reset", function () {
                var t = v(e),
                  n = t.pauseResume,
                  r = t.restart,
                  a = t.update,
                  o = e.props.onReset;
                e.instance.reset(),
                  o({
                    pauseResume: n,
                    start: r,
                    update: a,
                  });
              }),
              h(v(e), "restart", function () {
                e.reset(), e.start();
              }),
              h(v(e), "start", function () {
                var t = v(e),
                  n = t.pauseResume,
                  r = t.reset,
                  a = t.restart,
                  o = t.update,
                  i = e.props,
                  u = i.delay,
                  s = i.onEnd,
                  c = i.onStart,
                  l = function () {
                    return e.instance.start(function () {
                      return s({
                        pauseResume: n,
                        reset: r,
                        start: a,
                        update: o,
                      });
                    });
                  };
                u > 0 ? (e.timeoutId = setTimeout(l, 1e3 * u)) : l(),
                  c({
                    pauseResume: n,
                    reset: r,
                    update: o,
                  });
              }),
              h(v(e), "update", function (t) {
                var n = v(e),
                  r = n.pauseResume,
                  a = n.reset,
                  o = n.restart,
                  i = e.props.onUpdate;
                e.instance.update(t),
                  i({
                    pauseResume: r,
                    reset: a,
                    start: o,
                  });
              }),
              h(v(e), "containerRef", c.default.createRef()),
              e
            );
          }
          return (
            (t = i),
            (n = [
              {
                key: "componentDidMount",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.delay;
                  (this.instance = this.createInstance()),
                    ("function" == typeof t && 0 !== n) || this.start();
                },
              },
              {
                key: "shouldComponentUpdate",
                value: function (e) {
                  var t = this.props.end;
                  return this.checkProps(e) || t !== e.end;
                },
              },
              {
                key: "componentDidUpdate",
                value: function (e) {
                  var t = this.props,
                    n = t.end,
                    r = t.preserveValue;
                  this.checkProps(e) &&
                    (this.instance.reset(),
                    (this.instance = this.createInstance()),
                    this.start()),
                    n !== e.end &&
                      (r || this.instance.reset(), this.instance.update(n));
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.timeoutId && clearTimeout(this.timeoutId),
                    this.instance.reset();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this.props,
                    t = e.children,
                    n = e.className,
                    r = e.style,
                    a = this.containerRef,
                    o = this.pauseResume,
                    i = this.reset,
                    u = this.restart,
                    s = this.update;
                  return "function" == typeof t
                    ? t({
                        countUpRef: a,
                        pauseResume: o,
                        reset: i,
                        start: u,
                        update: s,
                      })
                    : c.default.createElement("span", {
                        className: n,
                        ref: a,
                        style: r,
                      });
                },
              },
            ]) && m(t.prototype, n),
            i
          );
        })(a.Component);
      h(V, "propTypes", {
        decimal: s.default.string,
        decimals: s.default.number,
        delay: s.default.number,
        easingFn: s.default.func,
        end: s.default.number.isRequired,
        formattingFn: s.default.func,
        onEnd: s.default.func,
        onStart: s.default.func,
        prefix: s.default.string,
        redraw: s.default.bool,
        separator: s.default.string,
        start: s.default.number,
        startOnMount: s.default.bool,
        suffix: s.default.string,
        style: s.default.object,
        useEasing: s.default.bool,
        preserveValue: s.default.bool,
      }),
        h(V, "defaultProps", {
          decimal: ".",
          decimals: 0,
          delay: null,
          duration: null,
          easingFn: null,
          formattingFn: null,
          onEnd: function () {},
          onPauseResume: function () {},
          onReset: function () {},
          onStart: function () {},
          onUpdate: function () {},
          prefix: "",
          redraw: !1,
          separator: "",
          start: 0,
          startOnMount: !0,
          suffix: "",
          style: void 0,
          useEasing: !0,
          preserveValue: !1,
        });
      var R = {
        innerHTML: null,
      };
      (t.default = V),
        (t.useCountUp = function (e) {
          var t,
            n,
            r = d(d({}, V.defaultProps), e),
            o = r.start,
            i = r.formattingFn,
            u =
              ((t = a.useState("function" == typeof i ? i(o) : o)),
              (n = 2),
              (function (e) {
                if (Array.isArray(e)) return e;
              })(t) ||
                (function (e, t) {
                  var n =
                    null == e
                      ? null
                      : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
                        e["@@iterator"];
                  if (null != n) {
                    var r,
                      a,
                      o = [],
                      i = !0,
                      u = !1;
                    try {
                      for (
                        n = n.call(e);
                        !(i = (r = n.next()).done) &&
                        (o.push(r.value), !t || o.length !== t);
                        i = !0
                      );
                    } catch (e) {
                      (u = !0), (a = e);
                    } finally {
                      try {
                        i || null == n.return || n.return();
                      } finally {
                        if (u) throw a;
                      }
                    }
                    return o;
                  }
                })(t, n) ||
                (function (e, t) {
                  if (e) {
                    if ("string" == typeof e) return g(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return (
                      "Object" === n &&
                        e.constructor &&
                        (n = e.constructor.name),
                      "Map" === n || "Set" === n
                        ? Array.from(e)
                        : "Arguments" === n ||
                          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
                        ? g(e, t)
                        : void 0
                    );
                  }
                })(t, n) ||
                (function () {
                  throw new TypeError(
                    "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
                  );
                })()),
            s = u[0],
            c = u[1],
            l = a.useRef(null),
            f = a.useRef(null),
            p = function () {
              var e = l.current;
              if (null !== e) return e;
              var t = (function () {
                var e = w(R, r),
                  t = e.options.formattingFn;
                return (
                  (e.options.formattingFn = function () {
                    var e = t.apply(void 0, arguments);
                    c(e);
                  }),
                  e
                );
              })();
              return (l.current = t), t;
            },
            m = function () {
              var e = r.onReset;
              p().reset(),
                e({
                  pauseResume: y,
                  start: h,
                  update: b,
                });
            },
            h = function e() {
              var t = r.onStart,
                n = r.onEnd;
              p().reset(),
                p().start(function () {
                  n({
                    pauseResume: y,
                    reset: m,
                    start: e,
                    update: b,
                  });
                }),
                t({
                  pauseResume: y,
                  reset: m,
                  update: b,
                });
            },
            y = function () {
              var e = r.onPauseResume;
              p().pauseResume(),
                e({
                  reset: m,
                  start: h,
                  update: b,
                });
            },
            b = function (e) {
              var t = r.onUpdate;
              p().update(e),
                t({
                  pauseResume: y,
                  reset: m,
                  start: h,
                });
            };
          return (
            a.useEffect(function () {
              var e = r.delay,
                t = r.onStart,
                n = r.onEnd;
              return (
                r.startOnMount &&
                  (f.current = setTimeout(function () {
                    t({
                      pauseResume: y,
                      reset: m,
                      update: b,
                    }),
                      p().start(function () {
                        clearTimeout(f.current),
                          n({
                            pauseResume: y,
                            reset: m,
                            start: h,
                            update: b,
                          });
                      });
                  }, 1e3 * e)),
                function () {
                  clearTimeout(f.current), m();
                }
              );
            }, []),
            {
              countUp: s,
              start: h,
              pauseResume: y,
              reset: m,
              update: b,
            }
          );
        });
    },
    76991: function (e, t, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ==
          typeof (r = function (e, t, n) {
            return function (e, t, n, r, a, o) {
              function i(e) {
                return "number" == typeof e && !isNaN(e);
              }
              var u = this;
              if (
                ((u.version = function () {
                  return "1.9.3";
                }),
                (u.options = {
                  useEasing: !0,
                  useGrouping: !0,
                  separator: ",",
                  decimal: ".",
                  easingFn: function (e, t, n, r) {
                    return (
                      (n * (1 - Math.pow(2, (-10 * e) / r)) * 1024) / 1023 + t
                    );
                  },
                  formattingFn: function (e) {
                    var t,
                      n,
                      r,
                      a,
                      o,
                      i,
                      s = e < 0;
                    if (
                      ((e = Math.abs(e).toFixed(u.decimals)),
                      (n = (t = (e += "").split("."))[0]),
                      (r = t.length > 1 ? u.options.decimal + t[1] : ""),
                      u.options.useGrouping)
                    ) {
                      for (a = "", o = 0, i = n.length; o < i; ++o)
                        0 !== o && o % 3 == 0 && (a = u.options.separator + a),
                          (a = n[i - o - 1] + a);
                      n = a;
                    }
                    return (
                      u.options.numerals.length &&
                        ((n = n.replace(/[0-9]/g, function (e) {
                          return u.options.numerals[+e];
                        })),
                        (r = r.replace(/[0-9]/g, function (e) {
                          return u.options.numerals[+e];
                        }))),
                      (s ? "-" : "") +
                        u.options.prefix +
                        n +
                        r +
                        u.options.suffix
                    );
                  },
                  prefix: "",
                  suffix: "",
                  numerals: [],
                }),
                o && "object" == typeof o)
              )
                for (var s in u.options)
                  o.hasOwnProperty(s) && null !== o[s] && (u.options[s] = o[s]);
              "" === u.options.separator
                ? (u.options.useGrouping = !1)
                : (u.options.separator = "" + u.options.separator);
              for (
                var c = 0, l = ["webkit", "moz", "ms", "o"], f = 0;
                f < l.length && !window.requestAnimationFrame;
                ++f
              )
                (window.requestAnimationFrame =
                  window[l[f] + "RequestAnimationFrame"]),
                  (window.cancelAnimationFrame =
                    window[l[f] + "CancelAnimationFrame"] ||
                    window[l[f] + "CancelRequestAnimationFrame"]);
              window.requestAnimationFrame ||
                (window.requestAnimationFrame = function (e, t) {
                  var n = new Date().getTime(),
                    r = Math.max(0, 16 - (n - c)),
                    a = window.setTimeout(function () {
                      e(n + r);
                    }, r);
                  return (c = n + r), a;
                }),
                window.cancelAnimationFrame ||
                  (window.cancelAnimationFrame = function (e) {
                    clearTimeout(e);
                  }),
                (u.initialize = function () {
                  return !(
                    !u.initialized &&
                    ((u.error = ""),
                    (u.d =
                      "string" == typeof e ? document.getElementById(e) : e),
                    u.d
                      ? ((u.startVal = Number(t)),
                        (u.endVal = Number(n)),
                        i(u.startVal) && i(u.endVal)
                          ? ((u.decimals = Math.max(0, r || 0)),
                            (u.dec = Math.pow(10, u.decimals)),
                            (u.duration = 1e3 * Number(a) || 2e3),
                            (u.countDown = u.startVal > u.endVal),
                            (u.frameVal = u.startVal),
                            (u.initialized = !0),
                            0)
                          : ((u.error =
                              "[CountUp] startVal (" +
                              t +
                              ") or endVal (" +
                              n +
                              ") is not a number"),
                            1))
                      : ((u.error = "[CountUp] target is null or undefined"),
                        1))
                  );
                }),
                (u.printValue = function (e) {
                  var t = u.options.formattingFn(e);
                  "INPUT" === u.d.tagName
                    ? (this.d.value = t)
                    : "text" === u.d.tagName || "tspan" === u.d.tagName
                    ? (this.d.textContent = t)
                    : (this.d.innerHTML = t);
                }),
                (u.count = function (e) {
                  u.startTime || (u.startTime = e), (u.timestamp = e);
                  var t = e - u.startTime;
                  (u.remaining = u.duration - t),
                    u.options.useEasing
                      ? u.countDown
                        ? (u.frameVal =
                            u.startVal -
                            u.options.easingFn(
                              t,
                              0,
                              u.startVal - u.endVal,
                              u.duration
                            ))
                        : (u.frameVal = u.options.easingFn(
                            t,
                            u.startVal,
                            u.endVal - u.startVal,
                            u.duration
                          ))
                      : u.countDown
                      ? (u.frameVal =
                          u.startVal -
                          (u.startVal - u.endVal) * (t / u.duration))
                      : (u.frameVal =
                          u.startVal +
                          (u.endVal - u.startVal) * (t / u.duration)),
                    u.countDown
                      ? (u.frameVal =
                          u.frameVal < u.endVal ? u.endVal : u.frameVal)
                      : (u.frameVal =
                          u.frameVal > u.endVal ? u.endVal : u.frameVal),
                    (u.frameVal = Math.round(u.frameVal * u.dec) / u.dec),
                    u.printValue(u.frameVal),
                    t < u.duration
                      ? (u.rAF = requestAnimationFrame(u.count))
                      : u.callback && u.callback();
                }),
                (u.start = function (e) {
                  u.initialize() &&
                    ((u.callback = e),
                    (u.rAF = requestAnimationFrame(u.count)));
                }),
                (u.pauseResume = function () {
                  u.paused
                    ? ((u.paused = !1),
                      delete u.startTime,
                      (u.duration = u.remaining),
                      (u.startVal = u.frameVal),
                      requestAnimationFrame(u.count))
                    : ((u.paused = !0), cancelAnimationFrame(u.rAF));
                }),
                (u.reset = function () {
                  (u.paused = !1),
                    delete u.startTime,
                    (u.initialized = !1),
                    u.initialize() &&
                      (cancelAnimationFrame(u.rAF), u.printValue(u.startVal));
                }),
                (u.update = function (e) {
                  if (u.initialize()) {
                    if (!i((e = Number(e))))
                      return void (u.error =
                        "[CountUp] update() - new endVal is not a number: " +
                        e);
                    (u.error = ""),
                      e !== u.frameVal &&
                        (cancelAnimationFrame(u.rAF),
                        (u.paused = !1),
                        delete u.startTime,
                        (u.startVal = u.frameVal),
                        (u.endVal = e),
                        (u.countDown = u.startVal > u.endVal),
                        (u.rAF = requestAnimationFrame(u.count)));
                  }
                }),
                u.initialize() && u.printValue(u.startVal);
            };
          })
            ? r.call(t, n, t, e)
            : r) || (e.exports = a);
    },
  },
]);
