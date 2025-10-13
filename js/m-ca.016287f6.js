"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [621],
  {
    2209: (e, t, n) => {
      var r = n(9404),
        o = {
          listOf: function (e) {
            return s(e, "List", r.List.isList);
          },
          mapOf: function (e, t) {
            return u(e, t, "Map", r.Map.isMap);
          },
          orderedMapOf: function (e, t) {
            return u(e, t, "OrderedMap", r.OrderedMap.isOrderedMap);
          },
          setOf: function (e) {
            return s(e, "Set", r.Set.isSet);
          },
          orderedSetOf: function (e) {
            return s(e, "OrderedSet", r.OrderedSet.isOrderedSet);
          },
          stackOf: function (e) {
            return s(e, "Stack", r.Stack.isStack);
          },
          iterableOf: function (e) {
            return s(e, "Iterable", r.Iterable.isIterable);
          },
          recordOf: function (e) {
            return a(function (t, n, o, a, l) {
              for (
                var s = arguments.length, u = Array(s > 5 ? s - 5 : 0), c = 5;
                c < s;
                c++
              )
                u[c - 5] = arguments[c];
              var d = t[n];
              if (!(d instanceof r.Record)) {
                var f = i(d);
                return new Error(
                  "Invalid " +
                    a +
                    " `" +
                    l +
                    "` of type `" +
                    f +
                    "` supplied to `" +
                    o +
                    "`, expected an Immutable.js Record."
                );
              }
              for (var p in e) {
                var m = e[p];
                if (m) {
                  var y = d.toObject(),
                    h = m.apply(void 0, [y, p, o, a, l + "." + p].concat(u));
                  if (h) return h;
                }
              }
            });
          },
          shape: d,
          contains: d,
          mapContains: function (e) {
            return c(e, "Map", r.Map.isMap);
          },
          list: l("List", r.List.isList),
          map: l("Map", r.Map.isMap),
          orderedMap: l("OrderedMap", r.OrderedMap.isOrderedMap),
          set: l("Set", r.Set.isSet),
          orderedSet: l("OrderedSet", r.OrderedSet.isOrderedSet),
          stack: l("Stack", r.Stack.isStack),
          seq: l("Seq", r.Seq.isSeq),
          record: l("Record", function (e) {
            return e instanceof r.Record;
          }),
          iterable: l("Iterable", r.Iterable.isIterable),
        };
      function i(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
          ? "object"
          : e instanceof r.Iterable
          ? "Immutable." + e.toSource().split(" ")[0]
          : t;
      }
      function a(e) {
        function t(t, n, r, o, i, a) {
          for (
            var l = arguments.length, s = Array(l > 6 ? l - 6 : 0), u = 6;
            u < l;
            u++
          )
            s[u - 6] = arguments[u];
          return (
            (a = a || r),
            (o = o || "<<anonymous>>"),
            null != n[r]
              ? e.apply(void 0, [n, r, o, i, a].concat(s))
              : t
              ? new Error(
                  "Required " +
                    i +
                    " `" +
                    a +
                    "` was not specified in `" +
                    o +
                    "`."
                )
              : void 0
          );
        }
        var n = t.bind(null, !1);
        return (n.isRequired = t.bind(null, !0)), n;
      }
      function l(e, t) {
        return a(function (n, r, o, a, l) {
          var s = n[r];
          if (!t(s)) {
            var u = i(s);
            return new Error(
              "Invalid " +
                a +
                " `" +
                l +
                "` of type `" +
                u +
                "` supplied to `" +
                o +
                "`, expected `" +
                e +
                "`."
            );
          }
          return null;
        });
      }
      function s(e, t, n) {
        return a(function (r, o, a, l, s) {
          for (
            var u = arguments.length, c = Array(u > 5 ? u - 5 : 0), d = 5;
            d < u;
            d++
          )
            c[d - 5] = arguments[d];
          var f = r[o];
          if (!n(f)) {
            var p = l,
              m = i(f);
            return new Error(
              "Invalid " +
                p +
                " `" +
                s +
                "` of type `" +
                m +
                "` supplied to `" +
                a +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          if ("function" != typeof e)
            return new Error(
              "Invalid typeChecker supplied to `" +
                a +
                "` for propType `" +
                s +
                "`, expected a function."
            );
          for (var y = f.toArray(), h = 0, v = y.length; h < v; h++) {
            var g = e.apply(void 0, [y, h, a, l, s + "[" + h + "]"].concat(c));
            if (g instanceof Error) return g;
          }
        });
      }
      function u(e, t, n, r) {
        return a(function () {
          for (var o = arguments.length, i = Array(o), l = 0; l < o; l++)
            i[l] = arguments[l];
          return (
            s(e, n, r).apply(void 0, i) ||
            (t &&
              ((u = t),
              a(function (e, t, n, r, o) {
                for (
                  var i = arguments.length, a = Array(i > 5 ? i - 5 : 0), l = 5;
                  l < i;
                  l++
                )
                  a[l - 5] = arguments[l];
                var s = e[t];
                if ("function" != typeof u)
                  return new Error(
                    "Invalid keysTypeChecker (optional second argument) supplied to `" +
                      n +
                      "` for propType `" +
                      o +
                      "`, expected a function."
                  );
                for (
                  var c = s.keySeq().toArray(), d = 0, f = c.length;
                  d < f;
                  d++
                ) {
                  var p = u.apply(
                    void 0,
                    [c, d, n, r, o + " -> key(" + c[d] + ")"].concat(a)
                  );
                  if (p instanceof Error) return p;
                }
              })).apply(void 0, i))
          );
          var u;
        });
      }
      function c(e) {
        var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
          n = void 0 === arguments[2] ? r.Iterable.isIterable : arguments[2];
        return a(function (r, o, a, l, s) {
          for (
            var u = arguments.length, c = Array(u > 5 ? u - 5 : 0), d = 5;
            d < u;
            d++
          )
            c[d - 5] = arguments[d];
          var f = r[o];
          if (!n(f)) {
            var p = i(f);
            return new Error(
              "Invalid " +
                l +
                " `" +
                s +
                "` of type `" +
                p +
                "` supplied to `" +
                a +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          var m = f.toObject();
          for (var y in e) {
            var h = e[y];
            if (h) {
              var v = h.apply(void 0, [m, y, a, l, s + "." + y].concat(c));
              if (v) return v;
            }
          }
        });
      }
      function d(e) {
        return c(e);
      }
      e.exports = o;
    },
    25021: (e, t, n) => {
      e.exports = n.p + "static/media/btn-delete-gray.5615478f..svg";
    },
    29521: (e, t, n) => {
      var r = n(24994);
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
              r,
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
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(o, t, r)
                  : (o[t] = e[t]));
            return o;
          })(e);
        })(n(96540)),
        i = (r(n(2209)), r(n(75842))),
        a = r(n(50223)),
        l = n(9404),
        s = n(8087),
        u = r(n(94188));
      n(52559);
      var c = n(74848);
      let d = !0,
        f = !1;
      t.default = (e) => {
        let { adSettings: t, isAdCenterLoginPopup: n } = e;
        const r = (0, o.useRef)(),
          p = (0, o.useRef)(),
          m = (0, o.useMemo)(() => 1e3 * (t.get("carouselseconds") || 4), [t]);
        (0, o.useEffect)(() => {
          (d || (n && !f)) &&
            (r.current.onShow(),
            t.get("display") === s.adsDetailDisplayEnum.CAN_CLOSE &&
              (p.current = setTimeout(() => {
                r.current.onHide();
              }, 1e3 * t.get("permanenttime"))),
            n && (f = !0));
        }, [n]);
        const y = (0, o.useMemo)(
            () =>
              t
                .get("addetails", (0, l.List)())
                .map(
                  (e) =>
                    `${u.default.portal.apiServer.imageServer}${e.get(
                      "image1"
                    )}`
                )
                .toJS(),
            [t]
          ),
          h = (0, o.useCallback)(
            (e) => {
              const n = t.getIn(["addetails", e, "url"]);
              n && window.open(n);
            },
            [t]
          );
        return (0, c.jsx)("div", {
          className: "float-center-ads-modal",
          children: (0, c.jsx)(i.default, {
            ref: r,
            closeByClick: !0,
            modalStyle: {
              top: "46%",
            },
            onHideHandler: () => {
              (d = !1), p.current && clearTimeout(p.current);
            },
            children: (0, c.jsx)("div", {
              className: "ads-banner",
              children: (0, c.jsx)(a.default, {
                imgs: y,
                autoPlayTimeInterval: m,
                transitionDuration: 500,
                indicators: !0,
                gesture: !0,
                onClickImg: h,
                imgRender: (e, n) =>
                  (0, c.jsxs)("div", {
                    className: "img-wrapper",
                    children: [
                      (0, c.jsx)("div", {
                        className: "img",
                        style: {
                          backgroundImage: `url(${e})`,
                        },
                      }),
                      (0, c.jsx)("div", {
                        className: "info",
                        children: t.getIn(["addetails", n, "title"]),
                      }),
                    ],
                  }),
                leftControl: (0, c.jsx)("i", {
                  className: "mps-arrow-left",
                }),
                rightControl: (0, c.jsx)("i", {
                  className: "mps-arrow-right",
                }),
              }),
            }),
          }),
        });
      };
    },
    50223: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var r in n)
                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
            }
            return e;
          },
        o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        i = u(n(5556)),
        a = n(96540),
        l = u(a),
        s = u(n(46942));
      function u(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var c = "left",
        d = "right",
        f = (function (e) {
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
            p.call(n), e.imgs;
            var r = e.defaultIdx;
            return (
              (n.state = {
                currIdx: r,
                nextIdx: -1,
                transitionDirection: null,
                transitioning: !1,
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
            o(t, [
              {
                key: "componentDidMount",
                value: function () {
                  this.props.autoPlay && this.onStartAutoPlay();
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  this.timer && this.onEndAutoPlay(), this.clearTimer();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this,
                    t = this.props,
                    n = (t.className, t.imgs),
                    o = (t.showIndicator, t.onClickImg),
                    i = t.transitionDuration,
                    a = t.leftControl,
                    u = t.rightControl,
                    c = t.urls,
                    d = t.imgRender,
                    f = t.indicators,
                    p = t.gesture,
                    y = t.arrowButton,
                    h = t.altName,
                    v = this.state,
                    g = v.currIdx,
                    b = v.nextIdx,
                    w = v.transitioning,
                    k = v.transitionDirection,
                    C = {
                      width: "100%",
                      height: "100%",
                    },
                    x = r({}, C, {
                      cursor: "pointer",
                    });
                  return l.default.createElement(
                    "div",
                    {
                      className: "nrc-carousel",
                      onMouseOver: p ? null : this.onEndAutoPlay,
                      onMouseLeave: p ? null : this.onStartAutoPlay,
                    },
                    l.default.createElement(
                      "div",
                      {
                        className: "carousel-wrapper",
                      },
                      n.map(function (t, r) {
                        return l.default.createElement(
                          m,
                          {
                            key: "Slide-" + t + "-" + r,
                            onClick: function () {
                              return o(r);
                            },
                            itemIdx: r,
                            currIdx: g,
                            nextIdx: b,
                            transitioning: w,
                            transitionDirection: k,
                            transitionDuration: i,
                            onClickLeftControl: e.onClickLeftControl,
                            onClickRightControl: e.onClickRightControl,
                            gesture: n.length > 1 && p,
                          },
                          d
                            ? d(t, r)
                            : l.default.createElement("img", {
                                style: c && c[r] ? x : C,
                                src: t,
                                alt: h + "_" + r,
                                loading: r > 0 ? "lazy" : "eager",
                              })
                        );
                      })
                    ),
                    y &&
                      n.length > 1 &&
                      l.default.createElement(
                        "div",
                        {
                          className: "carousel-control prev",
                          onClick: this.onClickLeftControl,
                        },
                        l.default.createElement(
                          "div",
                          {
                            className: "icon",
                          },
                          a
                        )
                      ),
                    y &&
                      n.length > 1 &&
                      l.default.createElement(
                        "div",
                        {
                          className: "carousel-control next",
                          onClick: this.onClickRightControl,
                        },
                        l.default.createElement(
                          "div",
                          {
                            className: "icon",
                          },
                          u
                        )
                      ),
                    f &&
                      l.default.createElement(
                        "ol",
                        {
                          className: "carousel-indicators",
                        },
                        n.map(function (t, n) {
                          return l.default.createElement("li", {
                            key: n,
                            className: (0, s.default)({
                              active: g === n,
                            }),
                            onClick: e.onIndicatorsClick,
                            "data-index": n,
                          });
                        })
                      )
                  );
                },
              },
            ]),
            t
          );
        })(a.Component),
        p = function () {
          var e = this;
          (this.clearTimer = function () {
            e.stTimer && clearTimeout(e.stTimer),
              e.tdTimer && clearTimeout(e.tdTimer);
          }),
            (this.onEndAutoPlay = function () {
              e.props.autoPlay && clearInterval(e.timer);
            }),
            (this.onStartAutoPlay = function () {
              var t = e.props,
                n = t.autoPlayTimeInterval;
              t.autoPlay && (e.timer = setInterval(e.autoPlayHandler, n));
            }),
            (this.onReStartAutoPlay = function () {
              e.onEndAutoPlay(), e.onStartAutoPlay();
            }),
            (this.autoPlayHandler = function () {
              if (!document.hidden && !e.state.transitioning) {
                var t = e.state.currIdx,
                  n = e.props,
                  r = n.imgs,
                  o = n.onChangeIdx;
                if (r.length < 2) return;
                var i = t + 1 < r.length ? t + 1 : 0;
                o(i),
                  e.setState(
                    {
                      nextIdx: i,
                      transitionDirection: c,
                    },
                    function () {
                      return e.startTransition(i);
                    }
                  );
              }
            }),
            (this.startTransition = function (t) {
              e.stTimer = setTimeout(function () {
                return e.setState(
                  {
                    nextIdx: t,
                    transitioning: !0,
                  },
                  function () {
                    return e.transitionDone(t);
                  }
                );
              }, 100);
            }),
            (this.transitionDone = function (t) {
              e.tdTimer = setTimeout(function () {
                document.hidden
                  ? e.transitionDone(t)
                  : e.setState({
                      currIdx: t,
                      nextIdx: -1,
                      transitioning: !1,
                      transitionDirection: null,
                    }),
                  e.onReStartAutoPlay();
              }, e.props.transitionDuration);
            }),
            (this.onClickRightControl = function () {
              var t = e.state,
                n = t.currIdx;
              if (!t.transitioning) {
                e.clearTimer();
                var r = e.props,
                  o = r.imgs,
                  i = r.onChangeIdx,
                  a = n + 1 < o.length ? n + 1 : 0;
                i(a),
                  e.setState(
                    {
                      nextIdx: a,
                      transitionDirection: c,
                    },
                    function () {
                      e.startTransition(a);
                    }
                  );
              }
            }),
            (this.onClickLeftControl = function () {
              var t = e.state,
                n = t.currIdx;
              if (!t.transitioning) {
                e.clearTimer();
                var r = e.props,
                  o = r.imgs,
                  i = r.onChangeIdx,
                  a = n - 1 >= 0 ? n - 1 : o.length - 1;
                i(a),
                  e.setState(
                    {
                      nextIdx: a,
                      transitionDirection: d,
                    },
                    function () {
                      e.startTransition(a);
                    }
                  );
              }
            }),
            (this.onIndicatorsClick = function (t) {
              var n = e.state,
                r = n.transitioning,
                o = n.currIdx;
              if (!r) {
                var i = Number(t.target.dataset.index);
                o !== i &&
                  (e.props.onChangeIdx(i),
                  e.setState(
                    {
                      nextIdx: i,
                      transitionDirection: o > i ? d : c,
                    },
                    function () {
                      e.startTransition(i);
                    }
                  ));
              }
            });
        },
        m = function (e) {
          var t,
            n,
            r,
            o = e.children,
            i = e.itemIdx,
            u = e.currIdx,
            d = e.nextIdx,
            f = e.onClick,
            p = e.transitioning,
            m = e.transitionDirection,
            y = e.transitionDuration,
            h = e.onClickRightControl,
            v = e.onClickLeftControl,
            g = e.gesture,
            b = m === c,
            w = i === u,
            k = i === d,
            C =
              ((r = p && (w || k)),
              (n = m) in
              (t = {
                "carousel-item": !0,
                active: w,
                next: b && k,
                prev: !b && k,
              })
                ? Object.defineProperty(t, n, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (t[n] = r),
              t),
            x = (0, a.useRef)({
              start: 0,
              end: 0,
            });
          return l.default.createElement(
            "div",
            {
              className: (0, s.default)(C),
              style: {
                transitionDuration: p ? y / 1e3 + "s" : void 0,
              },
              onClick: f,
              onTouchStart: g
                ? function (e) {
                    1 !== e.touches.length ||
                      p ||
                      (x.current.start = e.touches[0].screenX);
                  }
                : void 0,
              onTouchMove: g
                ? function (e) {
                    if (1 === e.touches.length && !p) {
                      var t = x.current.start - e.touches[0].screenX;
                      t > 15 && h(), t < -15 && v();
                    }
                  }
                : void 0,
              onTouchEnd: g
                ? function () {
                    x.current = {
                      start: 0,
                      end: 0,
                    };
                  }
                : void 0,
            },
            o
          );
        };
      (f.propTypes = {
        className: i.default.string,
        style: i.default.object,
        imgs: i.default.array,
        defaultIdx: i.default.number,
        onClickImg: i.default.func,
        onChangeIdx: i.default.func,
        autoPlay: i.default.bool,
        autoPlayTimeInterval: i.default.number,
        transitionDuration: i.default.number,
        leftControl: i.default.node,
        rightControl: i.default.node,
        gesture: i.default.bool,
        altName: i.default.string,
      }),
        (f.defaultProps = {
          className: "",
          style: {},
          imgs: [],
          defaultIdx: 0,
          onClickImg: function () {},
          onChangeIdx: function () {},
          autoPlay: !0,
          autoPlayTimeInterval: 3e3,
          transitionDuration: 1e3,
          leftControl: l.default.createElement("i", {
            className: "icon-arrow-left",
          }),
          rightControl: l.default.createElement("i", {
            className: "icon-arrow-right",
          }),
          gesture: !1,
          arrowButton: !0,
          altName: "carousel-img",
        }),
        (t.default = f);
    },
    52559: (e, t, n) => {
      n.r(t);
    },
    75842: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var r = t[n];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, n, r) {
            return n && e(t.prototype, n), r && e(t, r), t;
          };
        })(),
        o = s(n(5556)),
        i = n(96540),
        a = s(i),
        l = s(n(46942));
      function s(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var u = n(25021),
        c = {
          position: "fixed",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          zIndex: 1040,
          backgroundColor: "rgba(0, 0, 0, 0.65)",
        },
        d = {
          position: "fixed",
          transform: "translate3d(-50%, -50%, 0)",
          top: "50%",
          left: "50%",
          zIndex: 1050,
        },
        f = {
          margin: 0,
          backgroundColor: "white",
          outline: "none",
        },
        p = (function (e) {
          function t() {
            !(function (e, t) {
              if (!(e instanceof t))
                throw new TypeError("Cannot call a class as a function");
            })(this, t);
            var e = (function (e, t) {
              if (!e)
                throw new ReferenceError(
                  "this hasn't been initialised - super() hasn't been called"
                );
              return !t || ("object" != typeof t && "function" != typeof t)
                ? e
                : t;
            })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
            return (
              (e.onHideHandler = function () {
                e.onHide();
              }),
              (e.state = {
                hidden: !0,
                willShow: !0,
                willHide: !1,
              }),
              (e.onShow = e.onShow.bind(e)),
              (e.onHide = e.onHide.bind(e)),
              (e.onListenKeydown = e.onListenKeydown.bind(e)),
              e
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
            r(t, [
              {
                key: "componentDidUpdate",
                value: function () {
                  this.state.hidden
                    ? window.removeEventListener(
                        "keydown",
                        this.onListenKeydown,
                        !0
                      )
                    : window.addEventListener(
                        "keydown",
                        this.onListenKeydown,
                        !0
                      );
                },
              },
              {
                key: "componentWillUnmount",
                value: function () {
                  window.removeEventListener(
                    "keydown",
                    this.onListenKeydown,
                    !0
                  );
                },
              },
              {
                key: "onShow",
                value: function () {
                  this.setState({
                    hidden: !1,
                    willShow: !0,
                    willHide: !1,
                  });
                },
              },
              {
                key: "onHide",
                value: function () {
                  var e = this,
                    t = this.props.onHideHandler;
                  this.setState({
                    willHide: !0,
                    willShow: !1,
                  }),
                    setTimeout(function () {
                      e.setState(
                        {
                          hidden: !0,
                        },
                        function () {
                          t();
                        }
                      );
                    }, 150);
                },
              },
              {
                key: "onListenKeydown",
                value: function (e) {
                  this.props.onKeyDown && this.props.onKeyDown(e),
                    this.props.escKeyBinding.includes(e.keyCode) &&
                      this.onHideHandler(),
                    13 === e.keyCode &&
                      this.props.onEnter &&
                      this.props.onEnter();
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  if (this.state.hidden) return null;
                  var t,
                    n,
                    r,
                    o = this.props,
                    i = o.closeByClick,
                    s = o.contentClassname,
                    p = o.onBackdropClick,
                    m = this.state,
                    y =
                      ((r = s),
                      (n = s) in
                      (t = {
                        "fade-in": m.willShow,
                        "fade-out": m.willHide,
                      })
                        ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                          })
                        : (t[n] = r),
                      t);
                  return a.default.createElement(
                    "div",
                    {
                      ref: function (t) {
                        return (e.node = t);
                      },
                    },
                    a.default.createElement(
                      "div",
                      {
                        style: Object.assign({}, d, this.props.modalStyle),
                      },
                      a.default.createElement(
                        "div",
                        {
                          className: (0, l.default)("nrc-modal", y),
                          ref: "content",
                          tabIndex: "-1",
                          style: Object.assign({}, f, this.props.contentStyle),
                        },
                        a.default.createElement(
                          "div",
                          {
                            className: "iconClose",
                            onClick: this.onHideHandler,
                          },
                          a.default.createElement("img", {
                            width: "100%",
                            src: u,
                            alt: "modal-close-button",
                          })
                        ),
                        this.props.children
                      )
                    ),
                    a.default.createElement("div", {
                      className: (0, l.default)(y),
                      style: Object.assign({}, c, this.props.backdropStyle),
                      onClick: i ? this.onHideHandler : p || void 0,
                    })
                  );
                },
              },
            ]),
            t
          );
        })(i.Component);
      (p.propTypes = {
        children: o.default.any,
        closeByClick: o.default.bool,
        onKeyDown: o.default.func,
        onEnter: o.default.func,
        onHideHandler: o.default.func,
        backdropStyle: o.default.object,
        modalStyle: o.default.object,
        contentStyle: o.default.object,
        escKeyBinding: o.default.array,
        contentClassname: o.default.string,
        onBackdropClick: o.default.func,
      }),
        (p.defaultProps = {
          closeByClick: !0,
          escKeyBinding: [27],
          backdropStyle: {},
          modalStyle: {},
          onHideHandler: function () {},
          contentStyle: {},
          contentClassname: "",
        }),
        (t.default = p);
    },
  },
]);
