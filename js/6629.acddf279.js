/*! For license information please see 6629.acddf279.js.LICENSE.txt */
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [6629],
  {
    887: (e, t, r) => {
      var n = r(16993),
        o = r(11791);
      (e.exports = function (e, t, r, a, i) {
        return new o(n().w(e, t, r, a), i || Promise);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4373: (e) => {
      (e.exports = function (e) {
        var t = Object(e),
          r = [];
        for (var n in t) r.unshift(n);
        return function e() {
          for (; r.length; )
            if ((n = r.pop()) in t) return (e.value = n), (e.done = !1), e;
          return (e.done = !0), e;
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    4633: (e, t, r) => {
      var n = r(25172),
        o = r(16993),
        a = r(55869),
        i = r(887),
        u = r(11791),
        l = r(4373),
        s = r(30579);
      function f() {
        "use strict";
        var t = o(),
          r = t.m(f),
          c = (Object.getPrototypeOf ? Object.getPrototypeOf(r) : r.__proto__)
            .constructor;
        function d(e) {
          var t = "function" == typeof e && e.constructor;
          return (
            !!t &&
            (t === c || "GeneratorFunction" === (t.displayName || t.name))
          );
        }
        var p = {
          throw: 1,
          return: 2,
          break: 3,
          continue: 3,
        };
        function v(e) {
          var t, r;
          return function (n) {
            t ||
              ((t = {
                stop: function () {
                  return r(n.a, 2);
                },
                catch: function () {
                  return n.v;
                },
                abrupt: function (e, t) {
                  return r(n.a, p[e], t);
                },
                delegateYield: function (e, o, a) {
                  return (t.resultName = o), r(n.d, s(e), a);
                },
                finish: function (e) {
                  return r(n.f, e);
                },
              }),
              (r = function (e, r, o) {
                (n.p = t.prev), (n.n = t.next);
                try {
                  return e(r, o);
                } finally {
                  t.next = n.n;
                }
              })),
              t.resultName &&
                ((t[t.resultName] = n.v), (t.resultName = void 0)),
              (t.sent = n.v),
              (t.next = n.n);
            try {
              return e.call(this, t);
            } finally {
              (n.p = t.prev), (n.n = t.next);
            }
          };
        }
        return ((e.exports = f =
          function () {
            return {
              wrap: function (e, r, n, o) {
                return t.w(v(e), r, n, o && o.reverse());
              },
              isGeneratorFunction: d,
              mark: t.m,
              awrap: function (e, t) {
                return new n(e, t);
              },
              AsyncIterator: u,
              async: function (e, t, r, n, o) {
                return (d(t) ? i : a)(v(e), t, r, n, o);
              },
              keys: l,
              values: s,
            };
          }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))();
      }
      (e.exports = f),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    5165: (e, t, r) => {
      "use strict";
      var n = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e, t) {
          var r = (0, a.useState)(),
            n = (0, o.default)(r, 2),
            i = n[0],
            u = n[1];
          t !== i && (e(), u(t));
        });
      var o = n(r(85715)),
        a = r(96540);
    },
    11791: (e, t, r) => {
      var n = r(25172),
        o = r(75546);
      (e.exports = function e(t, r) {
        function a(e, o, i, u) {
          try {
            var l = t[e](o),
              s = l.value;
            return s instanceof n
              ? r.resolve(s.v).then(
                  function (e) {
                    a("next", e, i, u);
                  },
                  function (e) {
                    a("throw", e, i, u);
                  }
                )
              : r.resolve(s).then(
                  function (e) {
                    (l.value = e), i(l);
                  },
                  function (e) {
                    return a("throw", e, i, u);
                  }
                );
          } catch (e) {
            u(e);
          }
        }
        var i;
        this.next ||
          (o(e.prototype),
          o(
            e.prototype,
            ("function" == typeof Symbol && Symbol.asyncIterator) ||
              "@asyncIterator",
            function () {
              return this;
            }
          )),
          o(
            this,
            "_invoke",
            function (e, t, n) {
              function o() {
                return new r(function (t, r) {
                  a(e, n, t, r);
                });
              }
              return (i = i ? i.then(o, o) : o());
            },
            !0
          );
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    16993: (e, t, r) => {
      var n = r(75546);
      function o() {
        var t,
          r,
          a = "function" == typeof Symbol ? Symbol : {},
          i = a.iterator || "@@iterator",
          u = a.toStringTag || "@@toStringTag";
        function l(e, o, a, i) {
          var u = o && o.prototype instanceof f ? o : f,
            l = Object.create(u.prototype);
          return (
            n(
              l,
              "_invoke",
              (function (e, n, o) {
                var a,
                  i,
                  u,
                  l = 0,
                  f = o || [],
                  c = !1,
                  d = {
                    p: 0,
                    n: 0,
                    v: t,
                    a: p,
                    f: p.bind(t, 4),
                    d: function (e, r) {
                      return (a = e), (i = 0), (u = t), (d.n = r), s;
                    },
                  };
                function p(e, n) {
                  for (
                    i = e, u = n, r = 0;
                    !c && l && !o && r < f.length;
                    r++
                  ) {
                    var o,
                      a = f[r],
                      p = d.p,
                      v = a[2];
                    e > 3
                      ? (o = v === n) &&
                        ((u = a[(i = a[4]) ? 5 : ((i = 3), 3)]),
                        (a[4] = a[5] = t))
                      : a[0] <= p &&
                        ((o = e < 2 && p < a[1])
                          ? ((i = 0), (d.v = n), (d.n = a[1]))
                          : p < v &&
                            (o = e < 3 || a[0] > n || n > v) &&
                            ((a[4] = e), (a[5] = n), (d.n = v), (i = 0)));
                  }
                  if (o || e > 1) return s;
                  throw ((c = !0), n);
                }
                return function (o, f, v) {
                  if (l > 1) throw TypeError("Generator is already running");
                  for (
                    c && 1 === f && p(f, v), i = f, u = v;
                    (r = i < 2 ? t : u) || !c;

                  ) {
                    a ||
                      (i
                        ? i < 3
                          ? (i > 1 && (d.n = -1), p(i, u))
                          : (d.n = u)
                        : (d.v = u));
                    try {
                      if (((l = 2), a)) {
                        if ((i || (o = "next"), (r = a[o]))) {
                          if (!(r = r.call(a, u)))
                            throw TypeError("iterator result is not an object");
                          if (!r.done) return r;
                          (u = r.value), i < 2 && (i = 0);
                        } else
                          1 === i && (r = a.return) && r.call(a),
                            i < 2 &&
                              ((u = TypeError(
                                "The iterator does not provide a '" +
                                  o +
                                  "' method"
                              )),
                              (i = 1));
                        a = t;
                      } else if ((r = (c = d.n < 0) ? u : e.call(n, d)) !== s)
                        break;
                    } catch (e) {
                      (a = t), (i = 1), (u = e);
                    } finally {
                      l = 1;
                    }
                  }
                  return {
                    value: r,
                    done: c,
                  };
                };
              })(e, a, i),
              !0
            ),
            l
          );
        }
        var s = {};
        function f() {}
        function c() {}
        function d() {}
        r = Object.getPrototypeOf;
        var p = [][i]
            ? r(r([][i]()))
            : (n((r = {}), i, function () {
                return this;
              }),
              r),
          v = (d.prototype = f.prototype = Object.create(p));
        function m(e) {
          return (
            Object.setPrototypeOf
              ? Object.setPrototypeOf(e, d)
              : ((e.__proto__ = d), n(e, u, "GeneratorFunction")),
            (e.prototype = Object.create(v)),
            e
          );
        }
        return (
          (c.prototype = d),
          n(v, "constructor", d),
          n(d, "constructor", c),
          (c.displayName = "GeneratorFunction"),
          n(d, u, "GeneratorFunction"),
          n(v),
          n(v, u, "Generator"),
          n(v, i, function () {
            return this;
          }),
          n(v, "toString", function () {
            return "[object Generator]";
          }),
          ((e.exports = o =
            function () {
              return {
                w: l,
                m,
              };
            }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports))()
        );
      }
      (e.exports = o),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    25172: (e) => {
      (e.exports = function (e, t) {
        (this.v = e), (this.k = t);
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    29293: (e) => {
      function t(e, t, r, n, o, a, i) {
        try {
          var u = e[a](i),
            l = u.value;
        } catch (e) {
          return void r(e);
        }
        u.done ? t(l) : Promise.resolve(l).then(n, o);
      }
      (e.exports = function (e) {
        return function () {
          var r = this,
            n = arguments;
          return new Promise(function (o, a) {
            var i = e.apply(r, n);
            function u(e) {
              t(i, o, a, u, l, "next", e);
            }
            function l(e) {
              t(i, o, a, u, l, "throw", e);
            }
            u(void 0);
          });
        };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    30579: (e, t, r) => {
      var n = r(73738).default;
      (e.exports = function (e) {
        if (null != e) {
          var t =
              e[
                ("function" == typeof Symbol && Symbol.iterator) || "@@iterator"
              ],
            r = 0;
          if (t) return t.call(e);
          if ("function" == typeof e.next) return e;
          if (!isNaN(e.length))
            return {
              next: function () {
                return (
                  e && r >= e.length && (e = void 0),
                  {
                    value: e && e[r++],
                    done: !e,
                  }
                );
              },
            };
        }
        throw new TypeError(n(e) + " is not iterable");
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    41146: (e, t, r) => {
      "use strict";
      r.r(t);
    },
    54756: (e, t, r) => {
      var n = r(4633)();
      e.exports = n;
      try {
        regeneratorRuntime = n;
      } catch (e) {
        "object" == typeof globalThis
          ? (globalThis.regeneratorRuntime = n)
          : Function("r", "regeneratorRuntime = r")(n);
      }
    },
    55869: (e, t, r) => {
      var n = r(887);
      (e.exports = function (e, t, r, o, a) {
        var i = n(e, t, r, o, a);
        return i.next().then(function (e) {
          return e.done ? e.value : i.next();
        });
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    56629: (e, t, r) => {
      "use strict";
      var n = r(6305),
        o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.ImageUploadField =
          t.UploadField =
          t.FilePreview =
          t.ImagePreview =
            void 0);
      var a = o(r(94634)),
        i = o(r(54756)),
        u = o(r(29293)),
        l = o(r(85715)),
        s = n(r(96540)),
        f = o(r(5556)),
        c = r(79972),
        d = o(r(46942)),
        p = o(r(90316)),
        v = o(r(5165));
      r(41146);
      var m = function (e) {
        var t = (0, s.useState)(null),
          r = (0, l.default)(t, 2),
          n = r[0],
          o = r[1];
        return (
          (0, s.useEffect)(
            function () {
              var t, r;
              e.src
                ? "string" == typeof e.src
                  ? o(e.src)
                  : ((t = e.src),
                    (r = e.size.width),
                    new Promise(function (e) {
                      var n = new FileReader();
                      (n.onload = function () {
                        var t = new Image();
                        (t.onload = function () {
                          var n = r / t.width,
                            o = document.createElement("canvas");
                          (o.width = r), (o.height = n * t.height);
                          var a = o.getContext("2d");
                          a.scale(n, n), a.drawImage(t, 0, 0), e(o.toDataURL());
                        }),
                          (t.src = n.result);
                      }),
                        n.readAsDataURL(t);
                    })).then(o)
                : o(null);
            },
            [e.src]
          ),
          n &&
            s.default.createElement("div", {
              className: "formik-uploadfield-imagepreview",
              style: {
                backgroundImage: "url(".concat(n, ")"),
              },
            })
        );
      };
      function h(e) {
        return new Promise(function (t) {
          var r = new Image();
          (r.src = window.URL.createObjectURL(e)),
            (r.onload = function () {
              t(r);
            });
        });
      }
      function b(e) {
        var t = e.file,
          r = e.customizedWidth,
          n = e.fileSize;
        return new Promise(function (e) {
          if (!t || (n && t.size <= n)) e(t);
          else {
            var o = t.name,
              a = t.type,
              i = new FileReader();
            i.readAsDataURL(t),
              (i.onload = function (n) {
                var i = new Image();
                (i.src = n.target.result),
                  (i.onload = function (n) {
                    var u = i.width,
                      l = i.height,
                      s = document.createElement("canvas");
                    if (u <= r) return (t.width = u), (t.height = l), void e(t);
                    var f = parseFloat(r / u),
                      c = l * f;
                    (s.width = r), (s.height = c);
                    var d = s.getContext("2d");
                    d.scale(f, f),
                      d.drawImage(n.target, 0, 0),
                      s.toBlob(function (t) {
                        var n = new File([t], o, {
                          type: a,
                        });
                        (n.width = r), (n.height = c), e(n);
                      });
                  });
              });
          }
        });
      }
      (t.ImagePreview = m),
        (m.propTypes = {
          src: f.default.oneOfType([
            f.default.instanceOf(File),
            f.default.string,
          ]),
          size: f.default.shape({
            width: f.default.number,
            height: f.default.number,
          }),
        });
      var x = function (e) {
        return e.src
          ? s.default.createElement(
              "div",
              {
                className: "formik-uploadfield-defaultpreview",
              },
              "string" == typeof e.src ? e.src : e.src.name
            )
          : null;
      };
      (t.FilePreview = x),
        (x.propTypes = {
          src: f.default.oneOfType([
            f.default.instanceOf(File),
            f.default.string,
          ]),
          size: f.default.shape({
            width: f.default.number,
            height: f.default.number,
          }),
        });
      var g = function (e) {
        var t = (0, c.useFormikContext)(),
          r = t.values,
          n = t.setFieldValue,
          o = t.setFieldTouched,
          a = t.errors,
          f = t.touched,
          m = (0, c.getIn)(f, e.name),
          x = (0, c.getIn)(a, e.name),
          g = (0, s.useRef)(),
          y = (0, s.useState)(),
          w = (0, l.default)(y, 2),
          _ = w[0],
          z = w[1],
          k = e.id || e.name,
          O = (0, c.getIn)(r, e.name);
        O &&
          "string" == typeof O &&
          e.serverUrl &&
          (O = "".concat(e.serverUrl).concat(O)),
          (0, v.default)(function () {
            var t =
              "number" == typeof e.size
                ? {
                    width: e.size,
                    height: e.size,
                  }
                : e.size;
            z(t);
          }, e.size);
        var F = (0, s.useMemo)(
          function () {
            return s.default.createElement(
              "div",
              {
                className: (0, d.default)("formik-uploadfield", {
                  "is-file": O && !e.previewComponent,
                }),
                style: _,
              },
              s.default.createElement(
                "label",
                {
                  htmlFor: e.disabled ? void 0 : k,
                  className: "formik-uploadfield-label",
                },
                !e.disabled &&
                  s.default.createElement("input", {
                    accept: e.accept,
                    className: "formik-uploadfield-file",
                    id: k,
                    ref: g,
                    type: "file",
                    onChange: (function () {
                      var t = (0, u.default)(
                        i.default.mark(function t(r) {
                          var a, u, s, f, c;
                          return i.default.wrap(function (t) {
                            for (;;)
                              switch ((t.prev = t.next)) {
                                case 0:
                                  if (
                                    ((a = (0, l.default)(r.target.files, 1)),
                                    (u = a[0]),
                                    e.enableResize)
                                  ) {
                                    t.next = 11;
                                    break;
                                  }
                                  return (t.next = 4), h(u);
                                case 4:
                                  (s = t.sent),
                                    (f = s.width),
                                    (c = s.height),
                                    (u.width = f),
                                    (u.height = c),
                                    (t.next = 14);
                                  break;
                                case 11:
                                  return (
                                    (t.next = 13),
                                    b({
                                      file: u,
                                      customizedWidth: e.customizedWidth,
                                      fileSize: e.fileSize,
                                    })
                                  );
                                case 13:
                                  u = t.sent;
                                case 14:
                                  if (!e.onChange) {
                                    t.next = 17;
                                    break;
                                  }
                                  return e.onChange(u), t.abrupt("return");
                                case 17:
                                  m || o(e.name, !0), n(e.name, u);
                                case 19:
                                case "end":
                                  return t.stop();
                              }
                          }, t);
                        })
                      );
                      return function (e) {
                        return t.apply(this, arguments);
                      };
                    })(),
                  }),
                e.previewComponent &&
                  (0, s.createElement)(e.previewComponent, {
                    src: O,
                    size: _,
                  }),
                !O &&
                  s.default.createElement(
                    "div",
                    {
                      className: "image-uploader",
                    },
                    s.default.createElement("i", {
                      className: "icon-upload",
                    }),
                    e.uploadLabel || "Choose An Image"
                  )
              ),
              !e.disabled &&
                O &&
                s.default.createElement("div", {
                  className: "formik-uploadfield-clear",
                  onClick: function (t) {
                    (g.current.value = ""), m || o(e.name, !0), n(e.name, null);
                  },
                })
            );
          },
          [O, e.disabled, _]
        );
        return s.default.createElement(
          p.default,
          {
            tooltip: e.tooltip,
            isRequired: e.isRequired,
            disabled: e.disabled,
            label: e.label,
            info: e.info,
            error: x,
            touched: m,
          },
          s.default.createElement("div", null, F)
        );
      };
      (t.UploadField = g),
        (g.propTypes = {
          disabled: f.default.bool,
          id: f.default.string,
          accept: f.default.string,
          isRequired: f.default.bool,
          tooltip: f.default.oneOfType([f.default.string, f.default.node]),
          info: f.default.string,
          name: f.default.string.isRequired,
          previewComponent: f.default.func,
          enableResize: f.default.bool,
          serverUrl: f.default.string,
          customizedWidth: f.default.number,
          fileSize: f.default.number,
        }),
        (g.defaultProps = {
          size: 100,
          previewComponent: x,
          enableResize: !1,
          customizedWidth: 300,
          fileSize: 1048576,
        });
      var y = function (e) {
        return s.default.createElement(
          g,
          (0, a.default)(
            {
              accept: "image/*",
              previewComponent: m,
            },
            e
          )
        );
      };
      (t.ImageUploadField = y),
        (y.propTypes = {
          disabled: f.default.bool,
          id: f.default.string,
          isRequired: f.default.bool,
          label: f.default.node,
          name: f.default.string.isRequired,
          enableResize: f.default.bool,
          serverUrl: f.default.string,
          customizedWidth: f.default.number,
          fileSize: f.default.number,
        });
    },
    75546: (e) => {
      function t(r, n, o, a) {
        var i = Object.defineProperty;
        try {
          i({}, "", {});
        } catch (r) {
          i = 0;
        }
        (e.exports = t =
          function (e, r, n, o) {
            function a(r, n) {
              t(e, r, function (e) {
                return this._invoke(r, n, e);
              });
            }
            r
              ? i
                ? i(e, r, {
                    value: n,
                    enumerable: !o,
                    configurable: !o,
                    writable: !o,
                  })
                : (e[r] = n)
              : (a("next", 0), a("throw", 1), a("return", 2));
          }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r, n, o, a);
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
  },
]);
