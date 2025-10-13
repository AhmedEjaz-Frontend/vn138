"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [9757],
  {
    2395: (e, t, n) => {
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(n(43693)),
        a =
          (o(n(5556)),
          (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                o,
                r = {
                  __proto__: null,
                  default: e,
                };
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return r;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, r);
              }
              for (const t in e)
                "default" !== t &&
                  {}.hasOwnProperty.call(e, t) &&
                  ((o =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, t)) &&
                  (o.get || o.set)
                    ? n(r, t, o)
                    : (r[t] = e[t]));
              return r;
            })(e);
          })(n(96540))),
        i = n(67467),
        l = o(n(96384)),
        s = n(74848);
      class u extends a.Component {
        constructor() {
          super(),
            (0, r.default)(this, "onSubmit", () => {
              const { expireTime: e } = this.props;
              this.loading ||
                (!1 !== this.props.onClick() &&
                  ((this.loading = !0),
                  e &&
                    setTimeout(() => {
                      this.loading = !1;
                    }, e)));
            }),
            (this.loading = !1);
        }
        UNSAFE_componentWillReceiveProps(e) {
          this.loading &&
            this.props.isSendingDeletePostPut &&
            !e.isSendingDeletePostPut &&
            (this.loading = !1);
        }
        render() {
          const {
            expireTime: e,
            isSendingDeletePostPut: t,
            dispatch: n,
            ...o
          } = this.props;
          return (0, s.jsx)(l.default, {
            ...o,
            onClick: this.onSubmit,
          });
        }
      }
      t.default = (0, i.connect)((e) => ({
        isSendingDeletePostPut: e.app.isSendingDeletePostPut,
      }))(u);
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
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { multipleCall: n = !1, withState: o = !1 } = t,
            [d, f] = (0, i.default)({
              isLoading: !1,
              isLoaded: !1,
              data: void 0,
              error: void 0,
            }),
            p = (0, r.useRef)(!1),
            m = (0, a.useDispatch)(),
            g = (0, r.useCallback)(
              function () {
                if (!n && p.current)
                  return Promise.reject(
                    new Error("previous callback hasn't been resolved.")
                  );
                o &&
                  f({
                    isLoading: !0,
                  }),
                  (p.current = !0);
                let {
                  failed: t,
                  promises: r,
                  ...a
                } = (function (e) {
                  if ((0, s.default)(e))
                    return {
                      promises: [e],
                    };
                  const t = e.types || [],
                    [n, o] = t.slice(Math.max(t.length - 2)),
                    r =
                      !Object.prototype.hasOwnProperty.call(
                        e,
                        "notification"
                      ) || e.notification;
                  return {
                    ...e,
                    success: n,
                    failed: o,
                    notification: r,
                    successMessage: e.successMessage,
                    failMessage: e.failMessage,
                    promises: e.promises.map((e) => e(l.default)),
                  };
                })(e(...arguments));
                return Promise.all(r)
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
                            m({
                              type: c.UPDATE_TOKEN,
                              token: t.newToken,
                            }),
                          t
                        );
                      })),
                      o &&
                        f({
                          data: 1 === e.length ? e[0] : e,
                          isLoaded: !0,
                        }),
                      1 === e.length ? e[0] : e
                    )
                  )
                  .catch(
                    (e) => (
                      401 === e.code
                        ? m({
                            type: c.POST_LOGOUT_SUCCESS,
                            unauthorized: !0,
                          })
                        : 403 === e.code
                        ? m({
                            ...a,
                            ...e,
                            type: u.API_ERROR_CODE_498,
                            constant: u.API_FORBIDDEN_ERROR,
                          })
                        : 498 === e.code
                        ? m({
                            ...a,
                            ...e,
                            type: u.API_ERROR_CODE_498,
                            constant: t,
                          })
                        : 499 === e.code
                        ? m({
                            ...a,
                            ...e,
                            type: u.API_ERROR_CODE_498,
                            constant: u.API_INTERNAL_ERROR_CODE,
                          })
                        : e.code &&
                          m({
                            ...a,
                            ...e,
                            type: u.API_ERROR_CODE_498,
                            constant: u.API_INTERNAL_ERROR_CODE,
                            exception: !0,
                          }),
                      o &&
                        f({
                          error: e,
                        }),
                      Promise.reject(e)
                    )
                  )
                  .finally(() => {
                    o &&
                      f({
                        isLoading: !1,
                      }),
                      (p.current = !1);
                  });
              },
              [e]
            );
          return o
            ? {
                ...d,
                execute: g,
              }
            : g;
        });
      var r = n(96540),
        a = n(67467),
        i = o(n(72524)),
        l = o(n(32080)),
        s = o(n(7277)),
        u = n(36697),
        c = n(62144);
    },
    16510: (e, t, n) => {
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.onlyPositiveNumber =
          t.formatMoneySubmit =
          t.formatMoney =
          t.formatDepositAmount =
          t.formatDecimal =
          t.formatBalance =
          t.formatAmount =
          t.formatActualAmount =
          t.decimalValue =
          t.CRYPTO_WITHDRAWAL_MAX =
          t.CRYPTO_RATIO_FORMAT =
          t.CRYPTO_CURRENCY_FORMAT =
            void 0);
      var r = o(n(93110)),
        a = o(n(73333)),
        i = n(94188);
      (t.CRYPTO_CURRENCY_FORMAT = "0,0.[00000000]"),
        (t.CRYPTO_RATIO_FORMAT = "0,0.[00000]"),
        (t.CRYPTO_WITHDRAWAL_MAX = 9999999.99999999);
      const l = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0,0.00",
          n =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null == e || "" === e || isNaN(e)) return "";
        const { showPlus: o = !1 } = n,
          [, i] = t.split("."),
          l = ((e) =>
            e
              ? String(e)
                  .split("")
                  .reduce((e, t) => ("0" === t ? e + 1 : e), 0)
              : 0)(i),
          s = Math.pow(10, l);
        let u = (0, r.default)(e);
        const c = u.isPositive();
        0 === l && (u = u.floor());
        let d = (0, a.default)(u.abs().mul(s).floor().div(s).valueOf()).format(
          t
        );
        return c ? (o ? "+" + d : d) : "-" + d;
      };
      (t.formatMoney = l),
        (t.formatDepositAmount = (e, t, n) => {
          const o =
            null != t ? t : "VND2" === i.defaultCurrency ? "0,0" : void 0;
          return l(e, o, n);
        }),
        (t.formatDecimal = (e, t) => l(e, t).replace(/,/g, "")),
        (t.formatMoneySubmit = (e) =>
          void 0 === e || (!e && "object" == typeof e)
            ? ""
            : `${(0, a.default)(e).format("00.00")}`);
      const s = (e) => (e < 0 ? 0 : e);
      t.onlyPositiveNumber = s;
      const u = (e) => l(s(e || 0));
      (t.formatAmount = u),
        (t.formatBalance = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ["MAIN", "available"];
          const n = e.getIn(t);
          return n ? u(n) : l(0);
        }),
        (t.formatActualAmount = (e, t) => {
          let n = e || 0;
          try {
            n &&
              t &&
              (n = (0, r.default)(n).sub(
                (0, r.default)(n)
                  .mul((0, r.default)(t.processingfeepct).div(100))
                  .add((0, r.default)(t.processingfeeconst))
              ));
          } catch (e) {
            n = 0;
          }
          return l(n);
        }),
        (t.decimalValue = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0";
          try {
            return new r.default(e);
          } catch (e) {
            return new r.default(t);
          }
        });
    },
    21468: (e, t, n) => {
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              o,
              r = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return r;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, r);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? n(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(n(96540)),
        a = n(67467),
        i = o(n(83736)),
        l = o(n(15361)),
        s = o(n(72524)),
        u = o(n(17515)),
        c = o(n(52622)),
        d = o(n(90562)),
        f = o(n(7541)),
        p = n(16510),
        m = n(51628),
        g = n(93185),
        v = n(68183),
        y = o(n(46942)),
        _ = n(76066),
        b = n(74848);
      const h = {
        default: "../images/common/vip/vippop_default.svga",
        active: "../images/common/vip/vippop_active.svga",
        loop: "../images/common/vip/vippop_loop.svga",
      };
      t.default = (e) => {
        let { closeUpgradeBounsModal: t } = e;
        const n = (0, a.useDispatch)(),
          o = (0, a.useSelector)((e) => e.players.newVipPrivileges),
          O = (0, d.default)("../images/common/vip/vippop_btn.png"),
          P = (0, f.default)(v.claimVipPlayerReward),
          R = (0, r.useRef)(null),
          w = (0, r.useRef)(null),
          [j, S] = (0, s.default)({
            isShowDetail: !1,
            isShowLoopContent: !1,
            currentStep: null,
          }),
          [M, C] = (0, r.useState)(),
          N = (0, g.getName)(null == o ? void 0 : o.get("privilegeTypeDesc")),
          A = 1 === j.currentStep,
          E = 2 === j.currentStep,
          T = 3 === j.currentStep,
          L = () => {
            S({
              currentStep: 1,
              isShowLoopContent: !1,
            });
          },
          D = async (e) => {
            const t = await M[e];
            (R.current = new u.default.Player(`#svga-box-${e}`)),
              R.current.setVideoItem(t),
              (R.current.name = e),
              R.current.startAnimation(),
              "default" === e &&
                S({
                  currentStep: 1,
                });
          };
        return (
          (0, i.default)(() => {
            (() => {
              const e = Object.keys(h).reduce(
                (e, t) => (
                  (e[t] = ((e) => {
                    const t = new u.default.Parser();
                    return new Promise((n, o) => {
                      t.load(
                        h[e],
                        (e) => {
                          n(e);
                        },
                        (t) => {
                          console.log(`load svga error : ${e}`), o(t);
                        }
                      );
                    });
                  })(t)),
                  e
                ),
                {}
              );
              C(e);
            })();
          }),
          (0, l.default)(() => {
            M &&
              (D("default"),
              (async () => {
                const e = await M.active;
                (w.current = new u.default.Player("#svga-box-active")),
                  w.current.setVideoItem(e),
                  (w.current.clearsAfterStop = !1),
                  (w.current.loops = 1),
                  (w.current.fillMode = "Forward");
              })(),
              D("loop"));
          }, [M]),
          (0, l.default)(() => {
            A &&
              S({
                isShowDetail: !0,
              });
          }, [j.currentStep]),
          (0, b.jsxs)("div", {
            className: (0, y.default)("upgrade-bouns-container", m.currLocale),
            children: [
              (0, b.jsx)("i", {
                onClick: t,
                className: "mps-close",
              }),
              (0, b.jsx)("div", {
                className: (0, y.default)("svga-content", {
                  hide: !A,
                }),
                id: "svga-box-default",
              }),
              (0, b.jsx)("div", {
                ref: w,
                className: (0, y.default)("svga-content", {
                  hide: !E,
                }),
                id: "svga-box-active",
              }),
              (0, b.jsx)("div", {
                className: (0, y.default)("svga-content", {
                  hide: !T,
                }),
                id: "svga-box-loop",
              }),
              j.isShowDetail
                ? (0, b.jsxs)("div", {
                    className: "detail-content",
                    children: [
                      (0, b.jsx)("h3", {
                        children: m.i18n["congrats.vip.level.up"],
                      }),
                      j.isShowLoopContent &&
                        (0, b.jsxs)("div", {
                          className: "upgrade-bouns-loop-content",
                          children: [
                            (0, b.jsx)("div", {
                              className: "title",
                              children: N,
                            }),
                            (() => {
                              const e =
                                  (null == o ? void 0 : o.get("value")) || 0,
                                t = e.toString().split("").length,
                                n = (0, p.formatMoney)(e);
                              return (0, b.jsx)("div", {
                                className: `amount fs${t}`,
                                children: n,
                              });
                            })(),
                          ],
                        }),
                      A &&
                        (0, b.jsxs)(b.Fragment, {
                          children: [
                            (0, b.jsx)("div", {
                              className: (0, y.default)("btn-bg", {
                                hide: !O,
                              }),
                              style: {
                                backgroundImage: `url(${O})`,
                              },
                              children: (0, b.jsx)("p", {
                                className: "btn-msg",
                                children: m.i18n["receive.prize"],
                              }),
                            }),
                            (0, b.jsx)("div", {
                              onClick: () => {
                                S({
                                  currentStep: 2,
                                }),
                                  (() => {
                                    try {
                                      w.current.startAnimation(),
                                        w.current.onFrame((e) => {
                                          e >= 10 &&
                                            S({
                                              isShowLoopContent: !0,
                                            });
                                        }),
                                        w.current.onFinished(() => {
                                          S({
                                            currentStep: 3,
                                          });
                                          const e =
                                            null == o
                                              ? void 0
                                              : o.get("rewardId");
                                          P(e)
                                            .then((e) => {
                                              let { waitClaim: t } = e;
                                              t ||
                                                n(
                                                  (0,
                                                  _.resetNewVipRewardNotification)()
                                                );
                                            })
                                            .catch(() => {
                                              L();
                                            });
                                        });
                                    } catch (e) {
                                      L();
                                    }
                                  })();
                              },
                              className: "btn-mask",
                            }),
                          ],
                        }),
                    ],
                  })
                : (0, b.jsx)("div", {
                    className: "flex-container",
                    children: (0, b.jsx)(c.default, {}),
                  }),
            ],
          })
        );
      };
    },
    25833: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.NrcLoading = void 0);
      var o,
        r =
          (o = n(52622)) && o.__esModule
            ? o
            : {
                default: o,
              };
      t.NrcLoading = r.default;
    },
    38234: (e, t, n) => {
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.missionclaimReward =
          t.getMissionList =
          t.getMissionCategories =
          t.getAllReward =
            void 0);
      var r = o(n(86663)),
        a = o(n(32080)),
        i = n(68686),
        l = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              o,
              r = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return r;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, r);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((o =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? n(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(n(38743));
      (t.getMissionList = (e) => {
        const t = r.default.stringify(e);
        return (0, a.default)({
          url: `${i.baseURL}/mission/list?${t}`,
          method: "GET",
        });
      }),
        (t.missionclaimReward = (e) => {
          let { recordId: t, fingerprint: n, customizedFailMsg: o } = e;
          return {
            types: [
              l.PUT_MISSION_CLAIM_REWARD_REQUEST,
              l.PUT_MISSION_CLAIM_REWARD_SUCCESS,
              l.PUT_MISSION_CLAIM_REWARD_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, a.default)({
                  url: `${i.baseURL}/mission/rewardRecord/${t}?fingerprint=${n}`,
                  method: "PUT",
                }),
            ],
            customizedFailMsg: o,
          };
        }),
        (t.getAllReward = (e) => {
          let { recordIds: t, fingerprint: n, customizedFailMsg: o } = e;
          return {
            types: [
              l.POST_GET_ALL_REWARD_REQUEST,
              l.POST_GET_ALL_REWARD_SUCCESS,
              l.POST_GET_ALL_REWARD_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, a.default)({
                  url: `${i.baseURL}/mission/allReward`,
                  method: "POST",
                  jsonStr: JSON.stringify({
                    recordIds: t,
                    fp: n,
                  }),
                }),
            ],
            customizedFailMsg: o,
          };
        }),
        (t.getMissionCategories = () =>
          (0, a.default)({
            url: `${i.baseURL}/mission/missionCategory`,
            method: "GET",
          }));
    },
    52622: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        r = l(n(5556)),
        a = n(96540),
        i = l(a);
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
          o(t, [
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
                  o = e.style,
                  r = "nrc-loading " + (t ? "active" : "") + " " + n;
                return i.default.createElement("div", {
                  className: r,
                  style: o,
                });
              },
            },
          ]),
          t
        );
      })(a.Component);
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
    69798: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(67467),
        r = n(51628);
      t.default = () => {
        const e = (0, o.useSelector)(
          (e) => e.dashboard.mission.unallowMissionRewardNoticeI18n
        );
        return {
          5: (0, r.getLocaleContentByObj)(e),
        };
      };
    },
    90562: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = n(96540);
      t.default = (e) => {
        const [t, n] = (0, o.useState)(null);
        return (
          (0, o.useEffect)(() => {
            const t = new Image();
            (t.src = e), (t.onload = () => n(e));
          }, [e]),
          t
        );
      };
    },
    93314: (e, t, n) => {
      var o = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(n(21468)),
        a = n(38560);
      (async () => {
        a.isDesktop
          ? await n.e(8774).then(n.bind(n, 38774))
          : await n.e(664).then(n.bind(n, 30664));
      })(),
        (t.default = r.default);
    },
    96384: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var o =
          Object.assign ||
          function (e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          },
        r = (function () {
          function e(e, t) {
            for (var n = 0; n < t.length; n++) {
              var o = t[n];
              (o.enumerable = o.enumerable || !1),
                (o.configurable = !0),
                "value" in o && (o.writable = !0),
                Object.defineProperty(e, o.key, o);
            }
          }
          return function (t, n, o) {
            return n && e(t.prototype, n), o && e(t, o), t;
          };
        })(),
        a = c(n(5556)),
        i = n(96540),
        l = c(i),
        s = c(n(46942)),
        u = n(25833);
      function c(e) {
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
      var f = (function (e) {
        function t() {
          var e, n, o;
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          for (var r = arguments.length, a = Array(r), i = 0; i < r; i++)
            a[i] = arguments[i];
          return (
            (n = o =
              d(
                this,
                (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                  e,
                  [this].concat(a)
                )
              )),
            (o.onClickHandler = function (e) {
              e.preventDefault();
              var t = o.props,
                n = t.disabled,
                r = t.onClick;
              n || (r(e), e.target.blur());
            }),
            d(o, n)
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
              key: "render",
              value: function () {
                var e,
                  t,
                  n,
                  r = this.props,
                  a = r.children,
                  i = r.className,
                  c = r.style,
                  d = r.size,
                  f = r.disabled,
                  p = r.loading,
                  m = r.loadingClassName,
                  g = r.loadingStyle,
                  v = r.title,
                  y = r.dataTip,
                  _ = (function (e, t) {
                    var n = {};
                    for (var o in e)
                      t.indexOf(o) >= 0 ||
                        (Object.prototype.hasOwnProperty.call(e, o) &&
                          (n[o] = e[o]));
                    return n;
                  })(r, [
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
                  b =
                    ((n = !!i),
                    (t = i) in
                    (e = {
                      "nrc-button": !0,
                      "nrc-button-disabled": f,
                      "nrc-button-loading": p,
                    })
                      ? Object.defineProperty(e, t, {
                          value: n,
                          enumerable: !0,
                          configurable: !0,
                          writable: !0,
                        })
                      : (e[t] = n),
                    e);
                return l.default.createElement(
                  "button",
                  o({}, _, {
                    title: v,
                    "data-tip": y || void 0,
                    "data-for": y ? "enrich" : void 0,
                    className: (0, s.default)(b),
                    style: Object.assign({}, c),
                    "data-size": d,
                    onClick: this.onClickHandler,
                    type: "button",
                  }),
                  p &&
                    l.default.createElement(u.NrcLoading, {
                      className: m,
                      style: g,
                    }),
                  a && a
                );
              },
            },
          ]),
          t
        );
      })(i.Component);
      (f.displayName = "Button"),
        (f.propTypes = {
          children: a.default.node,
          className: a.default.string,
          style: a.default.object,
          size: a.default.string,
          onClick: a.default.func,
          disabled: a.default.bool,
          loading: a.default.bool,
          loadingClassName: a.default.string,
          loadingStyle: a.default.object,
          title: a.default.string,
        }),
        (f.defaultProps = {
          style: {},
          onClick: function () {},
          disabled: !1,
          loading: !1,
          loadingClassName: "",
          loadingStyle: {},
          title: "",
          dataTip: "",
        }),
        (t.default = f);
    },
  },
]);
