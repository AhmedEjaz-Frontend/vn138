"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [6638],
  {
    2209: (e, t, r) => {
      var o = r(9404),
        a = {
          listOf: function (e) {
            return s(e, "List", o.List.isList);
          },
          mapOf: function (e, t) {
            return c(e, t, "Map", o.Map.isMap);
          },
          orderedMapOf: function (e, t) {
            return c(e, t, "OrderedMap", o.OrderedMap.isOrderedMap);
          },
          setOf: function (e) {
            return s(e, "Set", o.Set.isSet);
          },
          orderedSetOf: function (e) {
            return s(e, "OrderedSet", o.OrderedSet.isOrderedSet);
          },
          stackOf: function (e) {
            return s(e, "Stack", o.Stack.isStack);
          },
          iterableOf: function (e) {
            return s(e, "Iterable", o.Iterable.isIterable);
          },
          recordOf: function (e) {
            return i(function (t, r, a, i, l) {
              for (
                var s = arguments.length, c = Array(s > 5 ? s - 5 : 0), d = 5;
                d < s;
                d++
              )
                c[d - 5] = arguments[d];
              var u = t[r];
              if (!(u instanceof o.Record)) {
                var p = n(u);
                return new Error(
                  "Invalid " +
                    i +
                    " `" +
                    l +
                    "` of type `" +
                    p +
                    "` supplied to `" +
                    a +
                    "`, expected an Immutable.js Record."
                );
              }
              for (var f in e) {
                var m = e[f];
                if (m) {
                  var v = u.toObject(),
                    g = m.apply(void 0, [v, f, a, i, l + "." + f].concat(c));
                  if (g) return g;
                }
              }
            });
          },
          shape: u,
          contains: u,
          mapContains: function (e) {
            return d(e, "Map", o.Map.isMap);
          },
          list: l("List", o.List.isList),
          map: l("Map", o.Map.isMap),
          orderedMap: l("OrderedMap", o.OrderedMap.isOrderedMap),
          set: l("Set", o.Set.isSet),
          orderedSet: l("OrderedSet", o.OrderedSet.isOrderedSet),
          stack: l("Stack", o.Stack.isStack),
          seq: l("Seq", o.Seq.isSeq),
          record: l("Record", function (e) {
            return e instanceof o.Record;
          }),
          iterable: l("Iterable", o.Iterable.isIterable),
        };
      function n(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
          ? "object"
          : e instanceof o.Iterable
          ? "Immutable." + e.toSource().split(" ")[0]
          : t;
      }
      function i(e) {
        function t(t, r, o, a, n, i) {
          for (
            var l = arguments.length, s = Array(l > 6 ? l - 6 : 0), c = 6;
            c < l;
            c++
          )
            s[c - 6] = arguments[c];
          return (
            (i = i || o),
            (a = a || "<<anonymous>>"),
            null != r[o]
              ? e.apply(void 0, [r, o, a, n, i].concat(s))
              : t
              ? new Error(
                  "Required " +
                    n +
                    " `" +
                    i +
                    "` was not specified in `" +
                    a +
                    "`."
                )
              : void 0
          );
        }
        var r = t.bind(null, !1);
        return (r.isRequired = t.bind(null, !0)), r;
      }
      function l(e, t) {
        return i(function (r, o, a, i, l) {
          var s = r[o];
          if (!t(s)) {
            var c = n(s);
            return new Error(
              "Invalid " +
                i +
                " `" +
                l +
                "` of type `" +
                c +
                "` supplied to `" +
                a +
                "`, expected `" +
                e +
                "`."
            );
          }
          return null;
        });
      }
      function s(e, t, r) {
        return i(function (o, a, i, l, s) {
          for (
            var c = arguments.length, d = Array(c > 5 ? c - 5 : 0), u = 5;
            u < c;
            u++
          )
            d[u - 5] = arguments[u];
          var p = o[a];
          if (!r(p)) {
            var f = l,
              m = n(p);
            return new Error(
              "Invalid " +
                f +
                " `" +
                s +
                "` of type `" +
                m +
                "` supplied to `" +
                i +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          if ("function" != typeof e)
            return new Error(
              "Invalid typeChecker supplied to `" +
                i +
                "` for propType `" +
                s +
                "`, expected a function."
            );
          for (var v = p.toArray(), g = 0, y = v.length; g < y; g++) {
            var h = e.apply(void 0, [v, g, i, l, s + "[" + g + "]"].concat(d));
            if (h instanceof Error) return h;
          }
        });
      }
      function c(e, t, r, o) {
        return i(function () {
          for (var a = arguments.length, n = Array(a), l = 0; l < a; l++)
            n[l] = arguments[l];
          return (
            s(e, r, o).apply(void 0, n) ||
            (t &&
              ((c = t),
              i(function (e, t, r, o, a) {
                for (
                  var n = arguments.length, i = Array(n > 5 ? n - 5 : 0), l = 5;
                  l < n;
                  l++
                )
                  i[l - 5] = arguments[l];
                var s = e[t];
                if ("function" != typeof c)
                  return new Error(
                    "Invalid keysTypeChecker (optional second argument) supplied to `" +
                      r +
                      "` for propType `" +
                      a +
                      "`, expected a function."
                  );
                for (
                  var d = s.keySeq().toArray(), u = 0, p = d.length;
                  u < p;
                  u++
                ) {
                  var f = c.apply(
                    void 0,
                    [d, u, r, o, a + " -> key(" + d[u] + ")"].concat(i)
                  );
                  if (f instanceof Error) return f;
                }
              })).apply(void 0, n))
          );
          var c;
        });
      }
      function d(e) {
        var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
          r = void 0 === arguments[2] ? o.Iterable.isIterable : arguments[2];
        return i(function (o, a, i, l, s) {
          for (
            var c = arguments.length, d = Array(c > 5 ? c - 5 : 0), u = 5;
            u < c;
            u++
          )
            d[u - 5] = arguments[u];
          var p = o[a];
          if (!r(p)) {
            var f = n(p);
            return new Error(
              "Invalid " +
                l +
                " `" +
                s +
                "` of type `" +
                f +
                "` supplied to `" +
                i +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          var m = p.toObject();
          for (var v in e) {
            var g = e[v];
            if (g) {
              var y = g.apply(void 0, [m, v, i, l, s + "." + v].concat(d));
              if (y) return y;
            }
          }
        });
      }
      function u(e) {
        return d(e);
      }
      e.exports = a;
    },
    6886: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = o(r(43693)),
        n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              o,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? r(a, t, o)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(r(96540)),
        i = o(r(46942)),
        l = o(r(94188)),
        s = r(51628);
      r(38083);
      var c = r(74848);
      const d = l.default.locales ? l.default.locales : [s.currLocale],
        u = s.currLocale.split("-")[1].toLowerCase(),
        p = "tw" === u ? "hk" : u;
      class f extends n.Component {
        constructor() {
          super(...arguments),
            (0, a.default)(this, "onChange", (e) => {
              (0, s.changeLocale)(e.target.value);
            }),
            (0, a.default)(this, "countryToggleRender", (e) =>
              "flag-text" === e
                ? (0, c.jsxs)("div", {
                    className: "country-select-toggle",
                    children: [
                      (0, c.jsx)("div", {
                        className: (0, i.default)(
                          "flag-icon flag-icon-squared",
                          `flag-icon-${p}`
                        ),
                      }),
                      (0, c.jsx)("div", {
                        className: "country-title",
                        children: s.i18n[s.currLocale] || u,
                      }),
                    ],
                  })
                : "only-text" === e
                ? (0, c.jsx)("div", {
                    className: "country-select-toggle",
                    children: (0, c.jsx)("div", {
                      className: "country-title",
                      children: s.i18n[s.currLocale] || u,
                    }),
                  })
                : (0, c.jsx)("div", {
                    className: "country-select-toggle",
                    children: (0, c.jsx)("div", {
                      className: (0, i.default)(
                        "flag-icon flag-icon-squared",
                        `flag-icon-${p}`
                      ),
                    }),
                  })
            );
        }
        render() {
          const { selectStyle: e, alwaysShow: t = !1 } = this.props;
          return !t && d.length < 2
            ? (0, c.jsx)(c.Fragment, {})
            : (r.e(6110).then(r.bind(r, 46110)),
              (0, c.jsxs)("div", {
                className: "country-select",
                children: [
                  this.countryToggleRender(e),
                  (0, c.jsx)("select", {
                    onChange: this.onChange,
                    value: s.currLocale,
                    "aria-label": "country-select",
                    children: d.map((e) =>
                      (0, c.jsx)(
                        "option",
                        {
                          value: e,
                          children: s.i18n[e] || e,
                        },
                        e
                      )
                    ),
                  }),
                ],
              }));
        }
      }
      t.default = f;
    },
    13288: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(r(96540)),
        o(r(2209));
      var a = o(r(94188)),
        n = r(93185),
        i = r(8087),
        l = r(74848);
      const s = a.default.portal.apiServer.imageServer;
      t.default = (e) => {
        const {
          promoList: t,
          onShowPromoDetail: r,
          wrapperClassName: o,
          itemClassName: a,
        } = e;
        return (0, l.jsx)("div", {
          className: o || "promo-banner-container",
          children: t.map((e, t) => {
            var o, c;
            const d = e.get("promoid"),
              u = (0, n.getPromoName)(e),
              p =
                (null === (o = e.get("promobanner")) ||
                void 0 === o ||
                null ===
                  (c = o.find(
                    (e) => e.get("type") === i.promoBannerType.BANNER
                  )) ||
                void 0 === c
                  ? void 0
                  : c.get("imageurl")) || "",
              f = `${s}${p}`;
            return (0, l.jsx)(
              "div",
              {
                "data-promo": u,
                className: a || "promo-banner-item",
                onClick: () => r(d),
                children:
                  p &&
                  (0, l.jsx)("img", {
                    src: f,
                    alt: u,
                  }),
              },
              d
            );
          }),
        });
      };
    },
    19274: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(r(96540)),
        o(r(5556)),
        o(r(2209));
      var a,
        n = r(51628),
        i = o(r(72697)),
        l = o(r(36033)),
        s = o(r(94188)),
        c = r(74848);
      const d =
          (null === (a = s.default.brand.customMobile) || void 0 === a
            ? void 0
            : a.mobilePromoNavType) || "list",
        u = {
          list: i.default,
          swiper: l.default,
        }[d];
      t.default = (e) => {
        const { categories: t, switchPromoCategory: r, active: o } = e,
          a = t
            .map((e) => {
              const t = e.get("pageid");
              return {
                label: e.get("pagename")
                  ? e.getIn(["pagename", n.currLocale]) ||
                    e.getIn(["pagename", "en-US"])
                  : n.i18n[`promo.category.${t}`],
                value: t,
              };
            })
            .toArray();
        return (0, c.jsx)("div", {
          className: "category",
          children: (0, c.jsx)(u, {
            options: a,
            value: o,
            onChange: r,
          }),
        });
      };
    },
    19430: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              o,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? r(a, t, o)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(r(96540)),
        n = (o(r(2209)), o(r(94188))),
        i = r(51628),
        l = r(70913),
        s = r(93185),
        c = r(8087),
        d = r(74848);
      const u = n.default.portal.apiServer.imageServer;
      let p = !1;
      t.default = (e) => {
        const {
          promoList: t,
          countdownDisplay: r,
          onShowPromoDetail: o,
          ecTitleEnabled: n,
          wrapperClassName: f,
          itemClassName: m,
        } = e;
        return (
          (0, a.useEffect)(
            () => () => {
              p = !0;
            },
            []
          ),
          (0, d.jsx)("div", {
            className: f || "promo-grid-container",
            children: t.map((e) => {
              var t, a;
              const f = e.get("promoid"),
                v = (0, s.getPromoName)(e),
                g =
                  (null === (t = e.get("promobanner")) ||
                  void 0 === t ||
                  null ===
                    (a = t.find(
                      (e) => e.get("type") === c.promoBannerType.GRID
                    )) ||
                  void 0 === a
                    ? void 0
                    : a.get("imageurl")) || "",
                y = (0, l.formatDate)(
                  e.get("startdate"),
                  i.i18n["promo.period.format"]
                ),
                h = e.get("enddate")
                  ? (0, l.formatDate)(
                      e.get("enddate"),
                      i.i18n["promo.period.format"]
                    )
                  : i.i18n.indefinite,
                b = !!e.get("enddate");
              return (0, d.jsxs)(
                "div",
                {
                  "data-promo": v,
                  className: m || "promo-grid-item",
                  onClick: () => o(f),
                  children: [
                    g &&
                      (0, d.jsx)("img", {
                        src: `${u}${g}`,
                        alt: v,
                        loading: p ? "eager" : "lazy",
                        style: {
                          aspectRatio: "15 / 8",
                        },
                      }),
                    n &&
                      (0, d.jsxs)(d.Fragment, {
                        children: [
                          (0, d.jsx)("h3", {
                            children: v,
                          }),
                          r &&
                            (0, d.jsxs)("p", {
                              className: "flex-between",
                              children: [
                                (0, d.jsxs)("div", {
                                  children: [
                                    `${i.i18n["promo.period"]}: `,
                                    (0, d.jsx)("span", {
                                      children: `${y} ~ ${h}`,
                                    }),
                                  ],
                                }),
                                b &&
                                  (0, d.jsx)("span", {
                                    className: "mps-alert",
                                  }),
                              ],
                            }),
                        ],
                      }),
                  ],
                },
                f
              );
            }),
          })
        );
      };
    },
    23233: (e, t, r) => {
      var o = r(24994);
      t.A = void 0;
      var a = y(r(96540)),
        n = r(78106),
        i = o(r(15062)),
        l = o(r(76835)),
        s = o(r(19274)),
        c = o(r(13288)),
        d = o(r(19430)),
        u = r(8087),
        p = r(51628),
        f = y(r(93445)),
        m = o(r(6886)),
        v = y(r(84622)),
        g = r(74848);
      function y(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            o = new WeakMap();
        return (y = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            n,
            i = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((a = t ? o : r)) {
            if (a.has(e)) return a.get(e);
            a.set(e, i);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((n =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (n.get || n.set)
                ? a(i, t, n)
                : (i[t] = e[t]));
          return i;
        })(e, t);
      }
      t.A = () => {
        const e = (0, a.useRef)(null),
          t = (0, n.useHistory)(),
          {
            state: r,
            showPromoDetailModal: o,
            onShowPromoDetail: y,
            onClosePromoDetail: h,
            switchPromoCategory: b,
            isLoading: j,
          } = (0, f.default)(),
          {
            categories: O,
            active: w,
            bannerType: x,
            countdownDisplay: P,
            ecTitleEnabled: M,
            promoList: S,
            promoDetail: _,
          } = r;
        return (
          (0, a.useEffect)(() => {
            v.PromoDetail.preload();
          }, []),
          (0, g.jsxs)("div", {
            className: "promo",
            children: [
              (0, g.jsx)("div", {
                className: "banner",
                children: (0, g.jsx)("img", {
                  alt: "",
                  src: f.promoImg,
                }),
              }),
              (0, g.jsxs)("div", {
                className: "promo-content",
                children: [
                  (0, g.jsxs)("div", {
                    className: "navbar",
                    children: [
                      (0, g.jsx)("i", {
                        className: "d20_system_back back-icon",
                        onClick: () => {
                          t.push(i.default.ROOT);
                        },
                      }),
                      p.i18n.promo,
                      (0, g.jsx)("div", {
                        className: "country-selector-wrapper",
                        children: (0, g.jsx)(m.default, {}),
                      }),
                    ],
                  }),
                  (0, g.jsx)(s.default, {
                    active: w,
                    categories: O,
                    switchPromoCategory: (t) => {
                      b(t),
                        e.current.scrollTo({
                          top: 0,
                          behavior: "smooth",
                        });
                    },
                  }),
                  !1,
                  (0, g.jsx)("div", {
                    ref: e,
                    className: "promo-list",
                    children:
                      S &&
                      (x === u.promoBannerType.BANNER
                        ? (0, g.jsx)(c.default, {
                            promoList: S,
                            onShowPromoDetail: y,
                          })
                        : (0, g.jsx)(d.default, {
                            ecTitleEnabled: M,
                            promoList: S,
                            countdownDisplay: P,
                            onShowPromoDetail: y,
                          })),
                  }),
                ],
              }),
              j && (0, g.jsx)(l.default, {}),
              o &&
                _ &&
                (0, g.jsx)(v.PromoDetail, {
                  promoDetail: _,
                  countdownDisplay: P,
                  handleClose: h,
                }),
            ],
          })
        );
      };
    },
    36033: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.PromoNav_T88 = t.PromoNav = void 0);
      var a = o(r(53259)),
        n = o(r(7032)),
        i = o(r(94188));
      r(38500);
      const { code: l } = i.default.brand,
        s = (t.PromoNav = (0, a.default)({
          loader: () =>
            Promise.all([r.e(6830), r.e(4250)]).then(r.bind(r, 78881)),
          loading: n.default,
        })),
        c = (t.PromoNav_T88 = (0, a.default)({
          loader: () => r.e(3461).then(r.bind(r, 56470)),
          loading: n.default,
        })),
        d = {
          jun88th: !0,
          vipvnd: !0,
        }[l]
          ? c
          : s;
      t.default = d;
    },
    38083: (e, t, r) => {
      r.r(t);
    },
    38500: (e, t, r) => {
      r.r(t);
    },
    64580: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(67467),
        a = r(47459),
        n = r(53719);
      const i = r(23233).A,
        l = (0, o.connect)(
          (e) => ({
            logined: e.players.logined,
            playerInfoReady: e.players.playerInfoReady,
            isLoading: e.promo.isLoading,
            promos: e.promo.promos,
            applyPromoSucc: e.promo.applyPromoSucc,
            getDepositamtForSelfselectSuccess:
              e.promo.getDepositamtForSelfselectSuccess,
            depositAmt: e.promo.depositAmt,
            transferToMainAndGetBalanceForSelectSuccess:
              e.promo.transferToMainAndGetBalanceForSelectSuccess,
            mainWalletBalance: e.promo.mainWalletBalance,
          }),
          (e) =>
            (0, a.bindActionCreators)(
              {
                getPromos: n.getPromos,
                postPromoReq: n.postPromoReq,
                getDepositamtForSelfselect: n.getDepositamtForSelfselect,
                postTransferToMainAndGetBalanceForSelect:
                  n.postTransferToMainAndGetBalanceForSelect,
                switchPromoCategory: n.switchPromoCategory,
              },
              e
            )
        )(i);
      t.default = l;
    },
    72697: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(r(5556));
      var a = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              o,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? r(a, t, o)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(r(96540)),
        n = o(r(46942)),
        i = r(74848);
      class l extends a.Component {
        constructor(e) {
          super(e);
          const { inputOptions: t = {} } = e;
          this.info = t.info || "";
        }
        renderOption(e) {
          return (0, i.jsx)(
            "option",
            {
              value: e.value,
              disabled: e.disabled,
              children: e.label,
            },
            e.label
          );
        }
        renderOptions() {
          const {
            optionLeadingGroups: e,
            optionGrouper: t,
            options: r,
            placeholderOption: o,
          } = this.props;
          if (!r || !Array.isArray(r)) return null;
          const a = o ? this.renderOption(o) : [],
            n = e
              ? e.map((e) => {
                  const t = r.filter(e.filter);
                  return 0 === t.length
                    ? null
                    : (0, i.jsx)(
                        "optgroup",
                        {
                          label: e.label,
                          children: t.map((e) => this.renderOption(e)),
                        },
                        e.label
                      );
                })
              : [];
          if (t) {
            const e = r.reduce((e, r) => {
              const o = t(r);
              return (e[o] = e[o] || []).push(r), e;
            }, {});
            return [
              a,
              ...n,
              ...Object.keys(e)
                .sort()
                .map((t) =>
                  (0, i.jsx)(
                    "optgroup",
                    {
                      label: t,
                      children: e[t].map((e) => this.renderOption(e)),
                    },
                    t
                  )
                ),
            ];
          }
          return [a, ...n, ...r.map((e) => this.renderOption(e))];
        }
        msgRenderer() {
          const { isValid: e, inputOptions: t, validateDetail: r } = this.props;
          if (!1 === e) {
            let e = t.rule.tip || "";
            e = Array.isArray(e) ? e : [e];
            const o = e ? e.filter((e, t) => !r[t]) : [];
            return (0, i.jsx)("small", {
              className: "invalid-msg",
              children: o[0],
            });
          }
          const o = "function" == typeof this.info ? this.info() : this.info;
          return (0, i.jsx)("small", {
            className: "info-msg",
            children: o,
          });
        }
        render() {
          const { name: e, value: t, className: r } = this.props;
          return (0, i.jsxs)("div", {
            className: (0, n.default)("selector", r),
            children: [
              (0, i.jsx)("select", {
                value: t,
                onChange: (e) => {
                  this.props.onChange(e.target.value);
                },
                name: e,
                children: this.renderOptions(),
              }),
              this.msgRenderer(),
            ],
          });
        }
      }
      t.default = l;
    },
    93445: (e, t, r) => {
      var o = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.promoImg = t.default = void 0);
      var a = r(96540),
        n = r(9404),
        i = o(r(86663)),
        l = r(67467),
        s = r(78106),
        c = o(r(83736)),
        d = o(r(72524)),
        u = o(r(15361)),
        p = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              o,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? r(a, t, o)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(r(53719)),
        f = o(r(94188)),
        m = r(38560),
        v = r(8087),
        g = r(51628),
        y = o(r(15062)),
        h = o(r(55665));
      const b = f.default.defaultCurrency;
      (t.promoImg = "https://img.alltocon.com/img/static/promo.png"),
        (t.default = function () {
          let { promoPageRoute: e = y.default.PROMOTIONS } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = (0, s.useHistory)(),
            { promoId: r } = (0, s.useParams)(),
            o = (0, l.useDispatch)(),
            { promos: f, isLoading: j } = (0, h.default)((e) => ({
              promos: e.promo.promos,
              isLoading: e.promo.isLoading,
            })),
            [O, w] = (0, d.default)({
              promoList: (0, n.List)(),
              categories: (0, n.List)(),
              bannerType: v.promoBannerType.BANNER,
              countdownDisplay: !1,
              active: "",
              promoDetail: null,
            }),
            x = !!r,
            P = (0, a.useCallback)(
              (r) => {
                t.push(`${e}/${r}`);
              },
              [t]
            ),
            M = (0, a.useCallback)(() => {
              w({
                promoDetail: null,
              }),
                t.push(e);
            }, [t, w]),
            S = (0, a.useCallback)(
              (e) =>
                w({
                  active: e,
                }),
              [w]
            );
          return (
            (0, u.default)(() => {
              const o = f.get("bannertype"),
                a = f.get("countdowndisplay"),
                n = f.get("ecTitleEnabled"),
                i = f.get("categories"),
                l = f.get("promoMap");
              let s,
                c = null == i ? void 0 : i.getIn([0, "pageid"]),
                d = null;
              if (r) {
                var u;
                if (
                  ((s =
                    null == i
                      ? void 0
                      : i.find((e) => {
                          const t = e.get("pageid");
                          return (
                            (d = l.get(t).find((e) => e.get("promoid") === r)),
                            !!d
                          );
                        })),
                  !d)
                )
                  return void t.replace(e);
                c = null === (u = s) || void 0 === u ? void 0 : u.get("pageid");
              }
              const p = O.active || c,
                m = l.get(p);
              w({
                active: p,
                bannerType: o,
                countdownDisplay: a,
                ecTitleEnabled: n,
                categories: i,
                promoList: m,
                promoDetail: d,
              });
            }, [f, O.active, r]),
            (0, c.default)(() => {
              o(
                p.getPromos(
                  i.default.stringify({
                    offset: 0,
                    limit: 100,
                    currency: b,
                    platform: m.isMobile ? 1 : 2,
                    locale: g.currLocale,
                  })
                )
              );
            }),
            {
              state: O,
              setState: w,
              showPromoDetailModal: x,
              onShowPromoDetail: P,
              onClosePromoDetail: M,
              switchPromoCategory: S,
              isLoading: j,
            }
          );
        });
    },
  },
]);
