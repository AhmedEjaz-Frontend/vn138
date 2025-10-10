"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [9925],
  {
    2209: (e, t, i) => {
      var r = i(9404),
        n = {
          listOf: function (e) {
            return d(e, "List", r.List.isList);
          },
          mapOf: function (e, t) {
            return l(e, t, "Map", r.Map.isMap);
          },
          orderedMapOf: function (e, t) {
            return l(e, t, "OrderedMap", r.OrderedMap.isOrderedMap);
          },
          setOf: function (e) {
            return d(e, "Set", r.Set.isSet);
          },
          orderedSetOf: function (e) {
            return d(e, "OrderedSet", r.OrderedSet.isOrderedSet);
          },
          stackOf: function (e) {
            return d(e, "Stack", r.Stack.isStack);
          },
          iterableOf: function (e) {
            return d(e, "Iterable", r.Iterable.isIterable);
          },
          recordOf: function (e) {
            return o(function (t, i, n, o, a) {
              for (
                var d = arguments.length, l = Array(d > 5 ? d - 5 : 0), c = 5;
                c < d;
                c++
              )
                l[c - 5] = arguments[c];
              var u = t[i];
              if (!(u instanceof r.Record)) {
                var _ = s(u);
                return new Error(
                  "Invalid " +
                    o +
                    " `" +
                    a +
                    "` of type `" +
                    _ +
                    "` supplied to `" +
                    n +
                    "`, expected an Immutable.js Record."
                );
              }
              for (var h in e) {
                var f = e[h];
                if (f) {
                  var p = u.toObject(),
                    g = f.apply(void 0, [p, h, n, o, a + "." + h].concat(l));
                  if (g) return g;
                }
              }
            });
          },
          shape: u,
          contains: u,
          mapContains: function (e) {
            return c(e, "Map", r.Map.isMap);
          },
          list: a("List", r.List.isList),
          map: a("Map", r.Map.isMap),
          orderedMap: a("OrderedMap", r.OrderedMap.isOrderedMap),
          set: a("Set", r.Set.isSet),
          orderedSet: a("OrderedSet", r.OrderedSet.isOrderedSet),
          stack: a("Stack", r.Stack.isStack),
          seq: a("Seq", r.Seq.isSeq),
          record: a("Record", function (e) {
            return e instanceof r.Record;
          }),
          iterable: a("Iterable", r.Iterable.isIterable),
        };
      function s(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
          ? "object"
          : e instanceof r.Iterable
          ? "Immutable." + e.toSource().split(" ")[0]
          : t;
      }
      function o(e) {
        function t(t, i, r, n, s, o) {
          for (
            var a = arguments.length, d = Array(a > 6 ? a - 6 : 0), l = 6;
            l < a;
            l++
          )
            d[l - 6] = arguments[l];
          return (
            (o = o || r),
            (n = n || "<<anonymous>>"),
            null != i[r]
              ? e.apply(void 0, [i, r, n, s, o].concat(d))
              : t
              ? new Error(
                  "Required " +
                    s +
                    " `" +
                    o +
                    "` was not specified in `" +
                    n +
                    "`."
                )
              : void 0
          );
        }
        var i = t.bind(null, !1);
        return (i.isRequired = t.bind(null, !0)), i;
      }
      function a(e, t) {
        return o(function (i, r, n, o, a) {
          var d = i[r];
          if (!t(d)) {
            var l = s(d);
            return new Error(
              "Invalid " +
                o +
                " `" +
                a +
                "` of type `" +
                l +
                "` supplied to `" +
                n +
                "`, expected `" +
                e +
                "`."
            );
          }
          return null;
        });
      }
      function d(e, t, i) {
        return o(function (r, n, o, a, d) {
          for (
            var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), u = 5;
            u < l;
            u++
          )
            c[u - 5] = arguments[u];
          var _ = r[n];
          if (!i(_)) {
            var h = a,
              f = s(_);
            return new Error(
              "Invalid " +
                h +
                " `" +
                d +
                "` of type `" +
                f +
                "` supplied to `" +
                o +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          if ("function" != typeof e)
            return new Error(
              "Invalid typeChecker supplied to `" +
                o +
                "` for propType `" +
                d +
                "`, expected a function."
            );
          for (var p = _.toArray(), g = 0, m = p.length; g < m; g++) {
            var v = e.apply(void 0, [p, g, o, a, d + "[" + g + "]"].concat(c));
            if (v instanceof Error) return v;
          }
        });
      }
      function l(e, t, i, r) {
        return o(function () {
          for (var n = arguments.length, s = Array(n), a = 0; a < n; a++)
            s[a] = arguments[a];
          return (
            d(e, i, r).apply(void 0, s) ||
            (t &&
              ((l = t),
              o(function (e, t, i, r, n) {
                for (
                  var s = arguments.length, o = Array(s > 5 ? s - 5 : 0), a = 5;
                  a < s;
                  a++
                )
                  o[a - 5] = arguments[a];
                var d = e[t];
                if ("function" != typeof l)
                  return new Error(
                    "Invalid keysTypeChecker (optional second argument) supplied to `" +
                      i +
                      "` for propType `" +
                      n +
                      "`, expected a function."
                  );
                for (
                  var c = d.keySeq().toArray(), u = 0, _ = c.length;
                  u < _;
                  u++
                ) {
                  var h = l.apply(
                    void 0,
                    [c, u, i, r, n + " -> key(" + c[u] + ")"].concat(o)
                  );
                  if (h instanceof Error) return h;
                }
              })).apply(void 0, s))
          );
          var l;
        });
      }
      function c(e) {
        var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
          i = void 0 === arguments[2] ? r.Iterable.isIterable : arguments[2];
        return o(function (r, n, o, a, d) {
          for (
            var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), u = 5;
            u < l;
            u++
          )
            c[u - 5] = arguments[u];
          var _ = r[n];
          if (!i(_)) {
            var h = s(_);
            return new Error(
              "Invalid " +
                a +
                " `" +
                d +
                "` of type `" +
                h +
                "` supplied to `" +
                o +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          var f = _.toObject();
          for (var p in e) {
            var g = e[p];
            if (g) {
              var m = g.apply(void 0, [f, p, o, a, d + "." + p].concat(c));
              if (m) return m;
            }
          }
        });
      }
      function u(e) {
        return c(e);
      }
      e.exports = n;
    },
    60781: (e, t, i) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = i(96540),
        n = function (e, t) {
          return "boolean" == typeof t ? t : !e;
        };
      t.default = function (e) {
        return r.useReducer(n, e);
      };
    },
    70713: (e, t, i) => {
      i.r(t),
        i.d(t, {
          default: () => u,
          isHeightAndWidthProps: () => _,
          isHeightOnlyProps: () => h,
          isWidthOnlyProps: () => f,
        });
      var r = i(96540);
      let n;
      n =
        "undefined" != typeof window
          ? window
          : "undefined" != typeof self
          ? self
          : i.g;
      let s = null,
        o = null;
      const a = n.clearTimeout,
        d = n.setTimeout,
        l =
          n.cancelAnimationFrame ||
          n.mozCancelAnimationFrame ||
          n.webkitCancelAnimationFrame,
        c =
          n.requestAnimationFrame ||
          n.mozRequestAnimationFrame ||
          n.webkitRequestAnimationFrame;
      null == l || null == c
        ? ((s = a),
          (o = function (e) {
            return d(e, 20);
          }))
        : ((s = function ([e, t]) {
            l(e), a(t);
          }),
          (o = function (e) {
            const t = c(function () {
                a(i), e();
              }),
              i = d(function () {
                l(t), e();
              }, 20);
            return [t, i];
          }));
      class u extends r.Component {
        constructor(...e) {
          super(...e),
            (this.state = {
              height: this.props.defaultHeight || 0,
              width: this.props.defaultWidth || 0,
            }),
            (this._autoSizer = null),
            (this._detectElementResize = null),
            (this._didLogDeprecationWarning = !1),
            (this._parentNode = null),
            (this._resizeObserver = null),
            (this._timeoutId = null),
            (this._onResize = () => {
              this._timeoutId = null;
              const {
                disableHeight: e,
                disableWidth: t,
                onResize: i,
              } = this.props;
              if (this._parentNode) {
                const r = window.getComputedStyle(this._parentNode) || {},
                  n = parseFloat(r.paddingLeft || "0"),
                  s = parseFloat(r.paddingRight || "0"),
                  o = parseFloat(r.paddingTop || "0"),
                  a = parseFloat(r.paddingBottom || "0"),
                  d = this._parentNode.getBoundingClientRect(),
                  l = d.height - o - a,
                  c = d.width - n - s;
                if (
                  (!e && this.state.height !== l) ||
                  (!t && this.state.width !== c)
                ) {
                  this.setState({
                    height: l,
                    width: c,
                  });
                  const e = () => {
                    this._didLogDeprecationWarning ||
                      ((this._didLogDeprecationWarning = !0),
                      console.warn(
                        "scaledWidth and scaledHeight parameters have been deprecated; use width and height instead"
                      ));
                  };
                  "function" == typeof i &&
                    i({
                      height: l,
                      width: c,
                      get scaledHeight() {
                        return e(), l;
                      },
                      get scaledWidth() {
                        return e(), c;
                      },
                    });
                }
              }
            }),
            (this._setRef = (e) => {
              this._autoSizer = e;
            });
        }
        componentDidMount() {
          const { nonce: e } = this.props,
            t = this._autoSizer ? this._autoSizer.parentNode : null;
          if (
            null != t &&
            t.ownerDocument &&
            t.ownerDocument.defaultView &&
            t instanceof t.ownerDocument.defaultView.HTMLElement
          ) {
            this._parentNode = t;
            const i = t.ownerDocument.defaultView.ResizeObserver;
            null != i
              ? ((this._resizeObserver = new i(() => {
                  this._timeoutId = setTimeout(this._onResize, 0);
                })),
                this._resizeObserver.observe(t))
              : ((this._detectElementResize = (function (e) {
                  let t, i, r, a, d, l, c;
                  const u =
                    "undefined" != typeof document && document.attachEvent;
                  if (!u) {
                    (l = function (e) {
                      const t = e.__resizeTriggers__,
                        i = t.firstElementChild,
                        r = t.lastElementChild,
                        n = i.firstElementChild;
                      (r.scrollLeft = r.scrollWidth),
                        (r.scrollTop = r.scrollHeight),
                        (n.style.width = i.offsetWidth + 1 + "px"),
                        (n.style.height = i.offsetHeight + 1 + "px"),
                        (i.scrollLeft = i.scrollWidth),
                        (i.scrollTop = i.scrollHeight);
                    }),
                      (d = function (e) {
                        return (
                          e.offsetWidth !== e.__resizeLast__.width ||
                          e.offsetHeight !== e.__resizeLast__.height
                        );
                      }),
                      (c = function (e) {
                        if (
                          e.target.className &&
                          "function" == typeof e.target.className.indexOf &&
                          e.target.className.indexOf("contract-trigger") < 0 &&
                          e.target.className.indexOf("expand-trigger") < 0
                        )
                          return;
                        const t = this;
                        l(this),
                          this.__resizeRAF__ && s(this.__resizeRAF__),
                          (this.__resizeRAF__ = o(function () {
                            d(t) &&
                              ((t.__resizeLast__.width = t.offsetWidth),
                              (t.__resizeLast__.height = t.offsetHeight),
                              t.__resizeListeners__.forEach(function (i) {
                                i.call(t, e);
                              }));
                          }));
                      });
                    let e = !1,
                      n = "";
                    r = "animationstart";
                    const u = "Webkit Moz O ms".split(" ");
                    let _ =
                        "webkitAnimationStart animationstart oAnimationStart MSAnimationStart".split(
                          " "
                        ),
                      h = "";
                    {
                      const t = document.createElement("fakeelement");
                      if (
                        (void 0 !== t.style.animationName && (e = !0), !1 === e)
                      )
                        for (let i = 0; i < u.length; i++)
                          if (void 0 !== t.style[u[i] + "AnimationName"]) {
                            (h = u[i]),
                              (n = "-" + h.toLowerCase() + "-"),
                              (r = _[i]),
                              (e = !0);
                            break;
                          }
                    }
                    (i = "resizeanim"),
                      (t =
                        "@" +
                        n +
                        "keyframes " +
                        i +
                        " { from { opacity: 0; } to { opacity: 0; } } "),
                      (a = n + "animation: 1ms " + i + "; ");
                  }
                  return {
                    addResizeListener: function (s, o) {
                      if (u) s.attachEvent("onresize", o);
                      else {
                        if (!s.__resizeTriggers__) {
                          const o = s.ownerDocument,
                            d = n.getComputedStyle(s);
                          d &&
                            "static" === d.position &&
                            (s.style.position = "relative"),
                            (function (i) {
                              if (!i.getElementById("detectElementResize")) {
                                const r =
                                    (t || "") +
                                    ".resize-triggers { " +
                                    (a || "") +
                                    'visibility: hidden; opacity: 0; } .resize-triggers, .resize-triggers > div, .contract-trigger:before { content: " "; display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; z-index: -1; } .resize-triggers > div { background: #eee; overflow: auto; } .contract-trigger:before { width: 200%; height: 200%; }',
                                  n =
                                    i.head || i.getElementsByTagName("head")[0],
                                  s = i.createElement("style");
                                (s.id = "detectElementResize"),
                                  (s.type = "text/css"),
                                  null != e && s.setAttribute("nonce", e),
                                  s.styleSheet
                                    ? (s.styleSheet.cssText = r)
                                    : s.appendChild(i.createTextNode(r)),
                                  n.appendChild(s);
                              }
                            })(o),
                            (s.__resizeLast__ = {}),
                            (s.__resizeListeners__ = []),
                            ((s.__resizeTriggers__ =
                              o.createElement("div")).className =
                              "resize-triggers");
                          const u = o.createElement("div");
                          (u.className = "expand-trigger"),
                            u.appendChild(o.createElement("div"));
                          const _ = o.createElement("div");
                          (_.className = "contract-trigger"),
                            s.__resizeTriggers__.appendChild(u),
                            s.__resizeTriggers__.appendChild(_),
                            s.appendChild(s.__resizeTriggers__),
                            l(s),
                            s.addEventListener("scroll", c, !0),
                            r &&
                              ((s.__resizeTriggers__.__animationListener__ =
                                function (e) {
                                  e.animationName === i && l(s);
                                }),
                              s.__resizeTriggers__.addEventListener(
                                r,
                                s.__resizeTriggers__.__animationListener__
                              ));
                        }
                        s.__resizeListeners__.push(o);
                      }
                    },
                    removeResizeListener: function (e, t) {
                      if (u) e.detachEvent("onresize", t);
                      else if (
                        (e.__resizeListeners__.splice(
                          e.__resizeListeners__.indexOf(t),
                          1
                        ),
                        !e.__resizeListeners__.length)
                      ) {
                        e.removeEventListener("scroll", c, !0),
                          e.__resizeTriggers__.__animationListener__ &&
                            (e.__resizeTriggers__.removeEventListener(
                              r,
                              e.__resizeTriggers__.__animationListener__
                            ),
                            (e.__resizeTriggers__.__animationListener__ =
                              null));
                        try {
                          e.__resizeTriggers__ = !e.removeChild(
                            e.__resizeTriggers__
                          );
                        } catch (e) {}
                      }
                    },
                  };
                })(e)),
                this._detectElementResize.addResizeListener(t, this._onResize)),
              this._onResize();
          }
        }
        componentWillUnmount() {
          this._parentNode &&
            (this._detectElementResize &&
              this._detectElementResize.removeResizeListener(
                this._parentNode,
                this._onResize
              ),
            null !== this._timeoutId && clearTimeout(this._timeoutId),
            this._resizeObserver && this._resizeObserver.disconnect());
        }
        render() {
          const {
              children: e,
              defaultHeight: t,
              defaultWidth: i,
              disableHeight: n = !1,
              disableWidth: s = !1,
              doNotBailOutOnEmptyChildren: o = !1,
              nonce: a,
              onResize: d,
              style: l = {},
              tagName: c = "div",
              ...u
            } = this.props,
            { height: _, width: h } = this.state,
            f = {
              overflow: "visible",
            },
            p = {};
          let g = !1;
          return (
            n ||
              (0 === _ && (g = !0),
              (f.height = 0),
              (p.height = _),
              (p.scaledHeight = _)),
            s ||
              (0 === h && (g = !0),
              (f.width = 0),
              (p.width = h),
              (p.scaledWidth = h)),
            o && (g = !1),
            (0, r.createElement)(
              c,
              {
                ref: this._setRef,
                style: {
                  ...f,
                  ...l,
                },
                ...u,
              },
              !g && e(p)
            )
          );
        }
      }
      function _(e) {
        return e && !0 !== e.disableHeight && !0 !== e.disableWidth;
      }
      function h(e) {
        return e && !0 !== e.disableHeight && !0 === e.disableWidth;
      }
      function f(e) {
        return e && !0 === e.disableHeight && !0 !== e.disableWidth;
      }
    },
  },
]);
