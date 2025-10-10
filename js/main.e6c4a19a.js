/*! For license information please see main.e6c4a19a.js.LICENSE.txt */
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [8792],
  {
    1093: (e) => {
      "use strict";
      var t = Object.prototype.toString;
      e.exports = function (e) {
        var r = t.call(e),
          a = "[object Arguments]" === r;
        return (
          a ||
            (a =
              "[object Array]" !== r &&
              null !== e &&
              "object" == typeof e &&
              "number" == typeof e.length &&
              e.length >= 0 &&
              "[object Function]" === t.call(e.callee)),
          a
        );
      };
    },
    1189: (e, t, r) => {
      "use strict";
      var a = Array.prototype.slice,
        n = r(1093),
        o = Object.keys,
        _ = o
          ? function (e) {
              return o(e);
            }
          : r(28875),
        E = Object.keys;
      (_.shim = function () {
        if (Object.keys) {
          var e = (function () {
            var e = Object.keys(arguments);
            return e && e.length === arguments.length;
          })(1, 2);
          e ||
            (Object.keys = function (e) {
              return n(e) ? E(a.call(e)) : E(e);
            });
        } else Object.keys = _;
        return Object.keys || _;
      }),
        (e.exports = _);
    },
    2694: (e, t, r) => {
      "use strict";
      var a = r(6925);
      function n() {}
      function o() {}
      (o.resetWarningCache = n),
        (e.exports = function () {
          function e(e, t, r, n, o, _) {
            if (_ !== a) {
              var E = new Error(
                "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
              );
              throw ((E.name = "Invariant Violation"), E);
            }
          }
          function t() {
            return e;
          }
          e.isRequired = e;
          var r = {
            array: e,
            bigint: e,
            bool: e,
            func: e,
            number: e,
            object: e,
            string: e,
            symbol: e,
            any: e,
            arrayOf: t,
            element: e,
            elementType: e,
            instanceOf: t,
            node: e,
            objectOf: t,
            oneOf: t,
            oneOfType: t,
            shape: t,
            exact: t,
            checkPropTypes: o,
            resetWarningCache: n,
          };
          return (r.PropTypes = r), r;
        });
    },
    2887: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = r(38560),
        o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(52321)),
        _ = a(r(9404));
      const E = {
        isLoading: !1,
        deposittimelimit: null,
        fetchingShortcuts: !1,
        activeshortcuts: _.default.List(),
        isLoadingFinanceRisk: !1,
        financeRiskSetting: _.default.Map(),
        isLoadingDisallowedWithdrawalSetting: !1,
        disallowedWithdrawalSetting: _.default.Map(),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.AJAX_GET_DEPOSIT_TYPE_REQUEST:
            return {
              ...e,
              isLoading: !0,
              deposittimelimit: 0,
            };
          case o.AJAX_GET_DEPOSIT_TYPE_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              deposittimelimit: t.payload[0].timelimit,
            };
          case o.AJAX_GET_DEPOSIT_TYPE_FAILURE:
            return {
              ...e,
              isLoading: !1,
              deposittimelimit: 0,
            };
          case o.GET_ACTIVE_SHORTCUT_LIST_REQUEST:
            return {
              ...e,
              fetchingShortcuts: !0,
            };
          case o.GET_ACTIVE_SHORTCUT_LIST_SUCCESS: {
            const r = _.default.fromJS(t.payload).filter((e) => {
              const t = e.get("code");
              return n.isDesktop ? !t.startsWith("H5") : !t.startsWith("PC");
            });
            return {
              ...e,
              fetchingShortcuts: !1,
              activeshortcuts: r,
            };
          }
          case o.GET_ACTIVE_SHORTCUT_LIST_FAILURE:
            return {
              ...e,
              fetchingShortcuts: !1,
            };
          case o.GET_FINANCE_RISK_SETTING_REQUEST:
            return {
              ...e,
              isLoadingFinanceRisk: !0,
            };
          case o.GET_FINANCE_RISK_SETTING_SUCCESS:
            return {
              ...e,
              isLoadingFinanceRisk: !1,
              financeRiskSetting: t.payload.reduce(
                (e, t) => e.set(t.key, t.value),
                _.default.Map()
              ),
            };
          case o.GET_FINANCE_RISK_SETTING_FAILURE:
            return {
              ...e,
              isLoadingFinanceRisk: !1,
            };
          case o.GET_DISALLOWED_WITHDRAWAL_SETTING_REQUEST:
            return {
              ...e,
              isLoadingDisallowedWithdrawalSetting: !0,
            };
          case o.GET_DISALLOWED_WITHDRAWAL_SETTING_SUCCESS:
            return {
              ...e,
              isLoadingDisallowedWithdrawalSetting: !1,
              disallowedWithdrawalSetting: _.default.fromJS(t.payload),
            };
          case o.GET_DISALLOWED_WITHDRAWAL_SETTING_FAILURE:
            return {
              ...e,
              isLoadingDisallowedWithdrawalSetting: !1,
            };
          default:
            return e;
        }
      };
    },
    3242: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PAYMENT_STATUS_SUCCESS =
          t.PAYMENT_STATUS_PENDING =
          t.PAYMENT_STATUS_FAILED =
          t.AJAX_RESET_EPAYMENT =
          t.AJAX_POST_SEND_PAYMENT_SUCCESS =
          t.AJAX_POST_SEND_PAYMENT_REQUEST =
          t.AJAX_POST_SEND_PAYMENT_FAILURE =
          t.AJAX_GET_PAYMENT_STATUS_SUCCESS =
          t.AJAX_GET_PAYMENT_STATUS_REQUEST =
          t.AJAX_GET_PAYMENT_STATUS_FAILURE =
          t.AJAX_GET_PAYMENTS_LIST_SUCCESS =
          t.AJAX_GET_PAYMENTS_LIST_REQUEST =
          t.AJAX_GET_PAYMENTS_LIST_FAILURE =
          t.AJAX_GET_EPAYMENT_SUCCESS =
          t.AJAX_GET_EPAYMENT_REQUEST =
          t.AJAX_GET_EPAYMENT_FAILURE =
          t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_SUCCESS =
          t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_REQUEST =
          t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_FAILURE =
          t.AJAX_GET_CRYPTO_WALLET_SUCCESS =
          t.AJAX_GET_CRYPTO_WALLET_REQUEST =
          t.AJAX_GET_CRYPTO_WALLET_FAILURE =
            void 0),
        (t.AJAX_GET_PAYMENTS_LIST_REQUEST =
          "ajax/AJAX_GET_PAYMENTS_LIST_REQUEST"),
        (t.AJAX_GET_PAYMENTS_LIST_SUCCESS =
          "ajax/AJAX_GET_PAYMENTS_LIST_SUCCESS"),
        (t.AJAX_GET_PAYMENTS_LIST_FAILURE =
          "ajax/AJAX_GET_PAYMENTS_LIST_FAILURE"),
        (t.AJAX_POST_SEND_PAYMENT_REQUEST =
          "ajax/AJAX_POST_SEND_PAYMENT_REQUEST"),
        (t.AJAX_POST_SEND_PAYMENT_SUCCESS =
          "ajax/AJAX_POST_SEND_PAYMENT_SUCCESS"),
        (t.AJAX_POST_SEND_PAYMENT_FAILURE =
          "ajax/AJAX_POST_SEND_PAYMENT_FAILURE"),
        (t.AJAX_GET_PAYMENT_STATUS_REQUEST =
          "ajax/AJAX_GET_PAYMENT_STATUS_REQUEST"),
        (t.AJAX_GET_PAYMENT_STATUS_SUCCESS =
          "ajax/AJAX_GET_PAYMENT_STATUS_SUCCESS"),
        (t.AJAX_GET_PAYMENT_STATUS_FAILURE =
          "ajax/AJAX_GET_PAYMENT_STATUS_FAILURE"),
        (t.PAYMENT_STATUS_SUCCESS = 2),
        (t.PAYMENT_STATUS_PENDING = 1),
        (t.PAYMENT_STATUS_FAILED = 3),
        (t.AJAX_GET_EPAYMENT_REQUEST = "ajax/AJAX_GET_EPAYMENT_REQUEST"),
        (t.AJAX_GET_EPAYMENT_SUCCESS = "ajax/AJAX_GET_EPAYMENT_SUCCESS"),
        (t.AJAX_GET_EPAYMENT_FAILURE = "ajax/AJAX_GET_EPAYMENT_FAILURE"),
        (t.AJAX_RESET_EPAYMENT = "ajax/AJAX_RESET_EPAYMENT"),
        (t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_REQUEST =
          "ajax/AJAX_GET_EPAYMENT_AMOUNT_LIMIT_REQUEST"),
        (t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_SUCCESS =
          "ajax/AJAX_GET_EPAYMENT_AMOUNT_LIMIT_SUCCESS"),
        (t.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_FAILURE =
          "ajax/AJAX_GET_EPAYMENT_AMOUNT_LIMIT_FAILURE"),
        (t.AJAX_GET_CRYPTO_WALLET_REQUEST =
          "ajax/AJAX_GET_CRYPTO_WALLET_REQUEST"),
        (t.AJAX_GET_CRYPTO_WALLET_SUCCESS =
          "ajax/AJAX_GET_CRYPTO_WALLET_SUCCESS"),
        (t.AJAX_GET_CRYPTO_WALLET_FAILURE =
          "ajax/AJAX_GET_CRYPTO_WALLET_FAILURE");
    },
    4049: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PUT_VIP_PLAYER_REWARD_SUCCESS =
          t.PUT_VIP_PLAYER_REWARD_REQUEST =
          t.PUT_VIP_PLAYER_REWARD_FAILURE =
          t.PUT_UPDATE_VIP_SIGIN_BOUNS_SUC =
          t.PUT_UPDATE_VIP_SIGIN_BOUNS_REQ =
          t.PUT_UPDATE_VIP_SIGIN_BOUNS_ERR =
          t.GET_VIP_LEVEL_INFO_SUCCESS =
          t.GET_VIP_LEVEL_INFO_REQUEST =
          t.GET_VIP_LEVEL_INFO_FAILURE =
          t.GET_NEW_VIP_SETTING_SUC =
          t.GET_NEW_VIP_SETTING_REQ =
          t.GET_NEW_VIP_SETTING_ERR =
            void 0),
        (t.PUT_VIP_PLAYER_REWARD_REQUEST = "vip/PUT_VIP_PLAYER_REWARD_REQUEST"),
        (t.PUT_VIP_PLAYER_REWARD_SUCCESS = "vip/PUT_VIP_PLAYER_REWARD_SUCCESS"),
        (t.PUT_VIP_PLAYER_REWARD_FAILURE = "vip/PUT_VIP_PLAYER_REWARD_FAILURE"),
        (t.PUT_UPDATE_VIP_SIGIN_BOUNS_REQ = "PUT_UPDATE_VIP_SIGIN_BOUNS_REQ"),
        (t.PUT_UPDATE_VIP_SIGIN_BOUNS_SUC = "PUT_UPDATE_VIP_SIGIN_BOUNS_SUC"),
        (t.PUT_UPDATE_VIP_SIGIN_BOUNS_ERR = "PUT_UPDATE_VIP_SIGIN_BOUNS_ERR"),
        (t.GET_NEW_VIP_SETTING_REQ = "GET_NEW_VIP_SETTING_REQ"),
        (t.GET_NEW_VIP_SETTING_SUC = "GET_NEW_VIP_SETTING_SUC"),
        (t.GET_NEW_VIP_SETTING_ERR = "GET_NEW_VIP_SETTING_ERR"),
        (t.GET_VIP_LEVEL_INFO_REQUEST = "vip/GET_VIP_LEVEL_INFO_REQUEST"),
        (t.GET_VIP_LEVEL_INFO_SUCCESS = "vip/GET_VIP_LEVEL_INFO_SUCCESS"),
        (t.GET_VIP_LEVEL_INFO_FAILURE = "vip/GET_VIP_LEVEL_INFO_FAILURE");
    },
    4146: (e, t, r) => {
      "use strict";
      var a = r(44363),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0,
        },
        o = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0,
        },
        _ = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0,
        },
        E = {};
      function i(e) {
        return a.isMemo(e) ? _ : E[e.$$typeof] || n;
      }
      (E[a.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0,
      }),
        (E[a.Memo] = _);
      var s = Object.defineProperty,
        T = Object.getOwnPropertyNames,
        A = Object.getOwnPropertySymbols,
        S = Object.getOwnPropertyDescriptor,
        l = Object.getPrototypeOf,
        u = Object.prototype;
      e.exports = function e(t, r, a) {
        if ("string" != typeof r) {
          if (u) {
            var n = l(r);
            n && n !== u && e(t, n, a);
          }
          var _ = T(r);
          A && (_ = _.concat(A(r)));
          for (var E = i(t), c = i(r), R = 0; R < _.length; ++R) {
            var d = _[R];
            if (!(o[d] || (a && a[d]) || (c && c[d]) || (E && E[d]))) {
              var p = S(r, d);
              try {
                s(t, d, p);
              } catch (e) {}
            }
          }
        }
        return t;
      };
    },
    4150: (e) => {
      "use strict";
      e.exports = function (e) {
        return !!e;
      };
    },
    4252: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.register = function () {
          "serviceWorker" in navigator &&
            navigator.serviceWorker
              .register("/service-worker.js")
              .then((e) => {})
              .catch((e) => {
                console.error("Error during service worker registration:", e);
              });
        }),
        (t.unregister = function () {
          "serviceWorker" in navigator &&
            navigator.serviceWorker.ready
              .then((e) => {
                e.unregister();
              })
              .catch((e) => {
                console.error(e.message);
              });
        });
    },
    5556: (e, t, r) => {
      e.exports = r(2694)();
    },
    6188: (e) => {
      "use strict";
      e.exports = Math.max;
    },
    6199: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.AJAX_GET_JACKPOT_INFOS_SUCCESS =
          t.AJAX_GET_JACKPOT_INFOS_REQUEST =
          t.AJAX_GET_JACKPOT_INFOS_FAILURE =
            void 0),
        (t.AJAX_GET_JACKPOT_INFOS_REQUEST =
          "ajax/AJAX_GET_JACKPOT_INFOS_REQUEST"),
        (t.AJAX_GET_JACKPOT_INFOS_SUCCESS =
          "ajax/AJAX_GET_JACKPOT_INFOS_SUCCESS"),
        (t.AJAX_GET_JACKPOT_INFOS_FAILURE =
          "ajax/AJAX_GET_JACKPOT_INFOS_FAILURE");
    },
    6305: (e, t, r) => {
      var a = r(73738).default;
      function n(t, r) {
        if ("function" == typeof WeakMap)
          var o = new WeakMap(),
            _ = new WeakMap();
        return ((e.exports = n =
          function (e, t) {
            if (!t && e && e.__esModule) return e;
            var r,
              n,
              E = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != a(e) && "function" != typeof e))
              return E;
            if ((r = t ? _ : o)) {
              if (r.has(e)) return r.get(e);
              r.set(e, E);
            }
            for (var i in e)
              "default" !== i &&
                {}.hasOwnProperty.call(e, i) &&
                ((n =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, i)) &&
                (n.get || n.set)
                  ? r(E, i, n)
                  : (E[i] = e[i]));
            return E;
          }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports))(t, r);
      }
      (e.exports = n),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    6537: (e) => {
      "use strict";
      e.exports = function (e) {
        return !!e && ("function" == typeof e || "object" == typeof e);
      };
    },
    6549: (e) => {
      "use strict";
      e.exports = Object.getOwnPropertyDescriptor;
    },
    6656: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(23722)),
        n = r(9404),
        o = r(70913);
      const _ = {
        gameDrawResults: (0, n.OrderedMap)(),
        gameNames: (0, n.Map)(),
        isInit: !1,
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0;
        const r = (e) => (0, o.convertDateTime)(e);
        switch (t.type) {
          case a.GET_GAME_LIST_DRAW_RESULTS_REQUEST:
            return {
              ...e,
              isInit: !1,
            };
          case a.GET_GAME_LIST_DRAW_RESULTS_SUCCESS:
            if (t.payload) {
              const [{ data: a }, { data: o }] = t.payload;
              let _ = e.gameNames,
                E = e.gameDrawResults;
              return (
                Array.isArray(a) &&
                  (E = a.reduce((e, t) => {
                    const {
                      gameId: a,
                      gameCategory: o,
                      totalDrawSize: _,
                      isDefaultIcon: E,
                      previousDraw: i,
                      currentDraw: s,
                    } = t;
                    return e.set(
                      a,
                      (0, n.fromJS)({
                        gameId: a,
                        gameCategory: o,
                        totalDrawSize: _,
                        isDefaultIcon: E,
                        previousDraw: {
                          ...i,
                          localDrawEndTime: r(i.cycleEnd),
                          localDrawStartTime: r(i.cycleStart),
                          lastAvailable: r(i.lastAvailable),
                        },
                        currentDraw: {
                          ...s,
                          localDrawEndTime: r(s.cycleEnd),
                          localDrawStartTime: r(s.cycleStart),
                          lastAvailable: r(s.lastAvailable),
                        },
                      })
                    );
                  }, E)),
                Array.isArray(o) &&
                  (_ = o.reduce((e, t) => {
                    const { gameId: r, gameName: a } = t;
                    return e.set(r, a);
                  }, (0, n.Map)())),
                {
                  ...e,
                  isInit: !0,
                  gameNames: _,
                  gameDrawResults: E,
                }
              );
            }
            return e;
          case a.GET_GAME_LIST_DRAW_RESULTS_FAILURE:
            return {
              ...e,
              isInit: !1,
            };
          case a.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_DRAW:
            if (t.payload) {
              const {
                  gameId: a,
                  data: { current: o },
                } = t.payload,
                _ = e.gameDrawResults.get(a);
              if (_ && o) {
                const t = _.set(
                  "previousDraw",
                  (0, n.fromJS)({
                    localDrawEndTime: _.getIn([
                      "currentDraw",
                      "localDrawEndTime",
                    ]),
                    localDrawStartTime: _.getIn([
                      "currentDraw",
                      "localDrawStartTime",
                    ]),
                    lastAvailable: _.getIn(["currentDraw", "lastAvailable"]),
                    drawId: _.getIn(["currentDraw", "drawId"]),
                    drawIdString: _.getIn(["currentDraw", "drawIdString"]),
                    result: null,
                    zodiacResult: null,
                    specialNum: null,
                  })
                ).set(
                  "currentDraw",
                  (0, n.fromJS)({
                    localDrawEndTime: r(o.cycleend),
                    localDrawStartTime: r(o.cyclestart),
                    lastAvailable: r(o.lastavailable),
                    drawId: o.drawid,
                    drawIdString: o.drawidstring,
                    result: null,
                    zodiacResult: null,
                    specialNum: null,
                  })
                );
                return {
                  ...e,
                  gameDrawResults: e.gameDrawResults.set(a, t),
                };
              }
            }
            return e;
          case a.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_RESULT:
            if (t.payload) {
              const { gameId: a, data: o } = t.payload,
                _ = e.gameDrawResults.get(a);
              if (_ && o) {
                const t = _.set(
                  "previousDraw",
                  (0, n.fromJS)({
                    localDrawEndTime: r(o.cycleend),
                    localDrawStartTime: r(o.cyclestart),
                    lastavailable: r(o.lastavailable),
                    drawId: o.drawid,
                    drawIdString: o.drawidstring,
                    result: o.result,
                    zodiacResult: o.zodiacResult,
                    specialNum: o.specialnum,
                  })
                ).set(
                  "currentDraw",
                  (0, n.fromJS)({
                    localDrawEndTime: _.getIn([
                      "currentDraw",
                      "localDrawEndTime",
                    ]),
                    localDrawStartTime: _.getIn([
                      "currentDraw",
                      "localDrawStartTime",
                    ]),
                    lastavailable: _.getIn(["currentDraw", "lastavailable"]),
                    drawId: _.getIn(["currentDraw", "drawId"]),
                    drawIdString: _.getIn(["currentDraw", "drawIdString"]),
                    result: null,
                    zodiacResult: null,
                    specialNum: null,
                  })
                );
                return {
                  ...e,
                  gameDrawResults: e.gameDrawResults.set(a, t),
                };
              }
            }
            return e;
          default:
            return e;
        }
      };
    },
    6925: (e) => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
    },
    7032: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        (t.default = () => null);
    },
    7176: (e, t, r) => {
      "use strict";
      var a,
        n = r(73126),
        o = r(75795);
      try {
        a = [].__proto__ === Array.prototype;
      } catch (e) {
        if (
          !e ||
          "object" != typeof e ||
          !("code" in e) ||
          "ERR_PROTO_ACCESS" !== e.code
        )
          throw e;
      }
      var _ = !!a && o && o(Object.prototype, "__proto__"),
        E = Object,
        i = E.getPrototypeOf;
      e.exports =
        _ && "function" == typeof _.get
          ? n([_.get])
          : "function" == typeof i &&
            function (e) {
              return i(null == e ? e : E(e));
            };
    },
    7463: (e, t) => {
      "use strict";
      function r(e, t) {
        var r = e.length;
        e.push(t);
        e: for (; 0 < r; ) {
          var a = (r - 1) >>> 1,
            n = e[a];
          if (!(0 < o(n, t))) break e;
          (e[a] = t), (e[r] = n), (r = a);
        }
      }
      function a(e) {
        return 0 === e.length ? null : e[0];
      }
      function n(e) {
        if (0 === e.length) return null;
        var t = e[0],
          r = e.pop();
        if (r !== t) {
          e[0] = r;
          e: for (var a = 0, n = e.length, _ = n >>> 1; a < _; ) {
            var E = 2 * (a + 1) - 1,
              i = e[E],
              s = E + 1,
              T = e[s];
            if (0 > o(i, r))
              s < n && 0 > o(T, i)
                ? ((e[a] = T), (e[s] = r), (a = s))
                : ((e[a] = i), (e[E] = r), (a = E));
            else {
              if (!(s < n && 0 > o(T, r))) break e;
              (e[a] = T), (e[s] = r), (a = s);
            }
          }
        }
        return t;
      }
      function o(e, t) {
        var r = e.sortIndex - t.sortIndex;
        return 0 !== r ? r : e.id - t.id;
      }
      if (
        "object" == typeof performance &&
        "function" == typeof performance.now
      ) {
        var _ = performance;
        t.unstable_now = function () {
          return _.now();
        };
      } else {
        var E = Date,
          i = E.now();
        t.unstable_now = function () {
          return E.now() - i;
        };
      }
      var s = [],
        T = [],
        A = 1,
        S = null,
        l = 3,
        u = !1,
        c = !1,
        R = !1,
        d = "function" == typeof setTimeout ? setTimeout : null,
        p = "function" == typeof clearTimeout ? clearTimeout : null,
        I = "undefined" != typeof setImmediate ? setImmediate : null;
      function P(e) {
        for (var t = a(T); null !== t; ) {
          if (null === t.callback) n(T);
          else {
            if (!(t.startTime <= e)) break;
            n(T), (t.sortIndex = t.expirationTime), r(s, t);
          }
          t = a(T);
        }
      }
      function O(e) {
        if (((R = !1), P(e), !c))
          if (null !== a(s)) (c = !0), F(f);
          else {
            var t = a(T);
            null !== t && v(O, t.startTime - e);
          }
      }
      function f(e, r) {
        (c = !1), R && ((R = !1), p(y), (y = -1)), (u = !0);
        var o = l;
        try {
          for (
            P(r), S = a(s);
            null !== S && (!(S.expirationTime > r) || (e && !N()));

          ) {
            var _ = S.callback;
            if ("function" == typeof _) {
              (S.callback = null), (l = S.priorityLevel);
              var E = _(S.expirationTime <= r);
              (r = t.unstable_now()),
                "function" == typeof E ? (S.callback = E) : S === a(s) && n(s),
                P(r);
            } else n(s);
            S = a(s);
          }
          if (null !== S) var i = !0;
          else {
            var A = a(T);
            null !== A && v(O, A.startTime - r), (i = !1);
          }
          return i;
        } finally {
          (S = null), (l = o), (u = !1);
        }
      }
      "undefined" != typeof navigator &&
        void 0 !== navigator.scheduling &&
        void 0 !== navigator.scheduling.isInputPending &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
      var m,
        L = !1,
        C = null,
        y = -1,
        g = 5,
        U = -1;
      function N() {
        return !(t.unstable_now() - U < g);
      }
      function D() {
        if (null !== C) {
          var e = t.unstable_now();
          U = e;
          var r = !0;
          try {
            r = C(!0, e);
          } finally {
            r ? m() : ((L = !1), (C = null));
          }
        } else L = !1;
      }
      if ("function" == typeof I)
        m = function () {
          I(D);
        };
      else if ("undefined" != typeof MessageChannel) {
        var G = new MessageChannel(),
          M = G.port2;
        (G.port1.onmessage = D),
          (m = function () {
            M.postMessage(null);
          });
      } else
        m = function () {
          d(D, 0);
        };
      function F(e) {
        (C = e), L || ((L = !0), m());
      }
      function v(e, r) {
        y = d(function () {
          e(t.unstable_now());
        }, r);
      }
      (t.unstable_IdlePriority = 5),
        (t.unstable_ImmediatePriority = 1),
        (t.unstable_LowPriority = 4),
        (t.unstable_NormalPriority = 3),
        (t.unstable_Profiling = null),
        (t.unstable_UserBlockingPriority = 2),
        (t.unstable_cancelCallback = function (e) {
          e.callback = null;
        }),
        (t.unstable_continueExecution = function () {
          c || u || ((c = !0), F(f));
        }),
        (t.unstable_forceFrameRate = function (e) {
          0 > e || 125 < e
            ? console.error(
                "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
              )
            : (g = 0 < e ? Math.floor(1e3 / e) : 5);
        }),
        (t.unstable_getCurrentPriorityLevel = function () {
          return l;
        }),
        (t.unstable_getFirstCallbackNode = function () {
          return a(s);
        }),
        (t.unstable_next = function (e) {
          switch (l) {
            case 1:
            case 2:
            case 3:
              var t = 3;
              break;
            default:
              t = l;
          }
          var r = l;
          l = t;
          try {
            return e();
          } finally {
            l = r;
          }
        }),
        (t.unstable_pauseExecution = function () {}),
        (t.unstable_requestPaint = function () {}),
        (t.unstable_runWithPriority = function (e, t) {
          switch (e) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
              break;
            default:
              e = 3;
          }
          var r = l;
          l = e;
          try {
            return t();
          } finally {
            l = r;
          }
        }),
        (t.unstable_scheduleCallback = function (e, n, o) {
          var _ = t.unstable_now();
          switch (
            ((o =
              "object" == typeof o &&
              null !== o &&
              "number" == typeof (o = o.delay) &&
              0 < o
                ? _ + o
                : _),
            e)
          ) {
            case 1:
              var E = -1;
              break;
            case 2:
              E = 250;
              break;
            case 5:
              E = 1073741823;
              break;
            case 4:
              E = 1e4;
              break;
            default:
              E = 5e3;
          }
          return (
            (e = {
              id: A++,
              callback: n,
              priorityLevel: e,
              startTime: o,
              expirationTime: (E = o + E),
              sortIndex: -1,
            }),
            o > _
              ? ((e.sortIndex = o),
                r(T, e),
                null === a(s) &&
                  e === a(T) &&
                  (R ? (p(y), (y = -1)) : (R = !0), v(O, o - _)))
              : ((e.sortIndex = E), r(s, e), c || u || ((c = !0), F(f))),
            e
          );
        }),
        (t.unstable_shouldYield = N),
        (t.unstable_wrapCallback = function (e) {
          var t = l;
          return function () {
            var r = l;
            l = t;
            try {
              return e.apply(this, arguments);
            } finally {
              l = r;
            }
          };
        });
    },
    7982: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(9404),
        n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(18676)),
        o = r(8087);
      const _ = {
        staticpagesMap: (0, a.fromJS)({
          InfoMap: {},
          InfoList: [],
          SignupMap: {},
          SignupList: [],
        }),
      };
      t.default = function () {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          r = arguments.length > 1 ? arguments[1] : void 0;
        const E = r.staticPageType,
          i = r.code;
        switch (r.type) {
          case n.GET_STATIC_PAGES_SUCCESS: {
            e = (0, a.fromJS)(r.payload);
            const n = e.getIn([0, "data"]) || (0, a.List)(),
              o = e.getIn([1, "data"]) || (0, a.List)(),
              _ = n.reduce((e, r) => {
                const n = r.get("code"),
                  o = r.get("displayname");
                return e.set(
                  n,
                  (0, a.Map)({
                    displayname: o,
                    content: t.staticpagesMap.getIn(["InfoMap", n, "content"]),
                  })
                );
              }, (0, a.Map)()),
              E = o.reduce((e, r) => {
                const n = r.get("code"),
                  o = r.get("displayname");
                return e.set(
                  n,
                  (0, a.Map)({
                    displayname: o,
                    content: t.staticpagesMap.getIn([
                      "SignupMap",
                      n,
                      "content",
                    ]),
                  })
                );
              }, (0, a.Map)());
            return {
              ...t,
              staticpagesMap: t.staticpagesMap
                .set("InfoMap", _)
                .set("InfoList", n)
                .set("SignupMap", E)
                .set("SignupList", o),
            };
          }
          case n.GET_STATIC_PAGE_CONTENT_SUCCESS:
            return (
              (e = (0, a.fromJS)(r.payload)),
              {
                ...t,
                staticpagesMap:
                  E === o.staticPageSettingTypeEnum.INFO
                    ? t.staticpagesMap.setIn(["InfoMap", i, "content"], e)
                    : t.staticpagesMap.setIn(["SignupMap", i, "content"], e),
              }
            );
          case n.GET_STATIC_PAGE_ORDERS_REQUEST:
            return {
              ...t,
              [`isGet${E}OrdersRequest`]: !0,
              [`get${E}OrdersSuccess`]: !1,
            };
          case n.GET_STATIC_PAGE_ORDERS_SUCCESS:
            return (
              (e = (0, a.fromJS)(r.payload)),
              {
                ...t,
                [`isGet${E}OrdersRequest`]: !1,
                [`get${E}OrdersSuccess`]: !0,
                [`staticpage${E}Orders`]: e.get("data") || (0, a.List)(),
              }
            );
          case n.GET_STATIC_PAGE_CONTENT_V2_REQUEST:
            return {
              ...t,
              [`isGet${E}OrdersRequest`]: !1,
              [`get${E}${i}Success`]: !1,
            };
          case n.GET_STATIC_PAGE_CONTENT_V2_SUCCESS:
            return (
              (e = (0, a.fromJS)(r.payload)),
              {
                ...t,
                [`get${E}${i}Success`]: !0,
                [`staticpage${E}${i}`]: e,
              }
            );
          case n.GET_STATIC_PAGE_CONTENT_BY_NAME_REQUEST:
            return {
              ...t,
              [`get${E}ByNameSuccess`]: !1,
              [`get${E}ByNameFailure`]: !1,
            };
          case n.GET_STATIC_PAGE_CONTENT_BY_NAME_SUCCESS:
            return (
              (e = (0, a.fromJS)(r.payload)),
              {
                ...t,
                [`get${E}ByNameSuccess`]: !0,
                [`staticpage${E}ContentByName`]: e,
              }
            );
          case n.GET_STATIC_PAGE_CONTENT_BY_NAME_FAILURE:
            return {
              ...t,
              [`get${E}ByNameFailure`]: !0,
            };
          default:
            return t;
        }
      };
    },
    8087: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.vipAidRewardTypeEnum =
          t.viewRewardTypeEnum =
          t.verifySmsActionTypeEnum =
          t.verificationTypeEnum =
          t.validatePageEnum =
          t.txnType =
          t.txnStatus =
          t.transferStatus =
          t.templateTipNameMapEnum =
          t.staticPageSettingTypeEnum =
          t.ssvipGroupEnum =
          t.sportsBookEnum =
          t.sportRuleEnum =
          t.socketType =
          t.singleReferralStatusEnum =
          t.shortCutIconClassnameEnum =
          t.rouletteStatusEnum =
          t.rouletteRewardTypeEnum =
          t.rebateType =
          t.rebateStatus =
          t.raceTypeEnum =
          t.promoViewTypeEnum =
          t.promoTypeGroupEnum =
          t.promoTypeEnum =
          t.promoType =
          t.promoTurnoverTypeEnum =
          t.promoStatus =
          t.promoStatisticsType =
          t.promoMessageSubject =
          t.promoMessageContent =
          t.promoLimitTimeCondEnum =
          t.promoBonusTypeEnum =
          t.promoBannerType =
          t.portalIdEnum =
          t.playerStatusEnum =
          t.playerSettlementStatusClassesEnum =
          t.playerInfoReadyEnum =
          t.platformType =
          t.paymentSectionTypeEnum =
          t.openTabDirectlyProviders =
          t.oddsTypeEnum =
          t.msgTypeEnum =
          t.msgReadStatus =
          t.mobilePathListEnum =
          t.mobilePathEnum =
          t.missionTypeEnum =
          t.missionThresholdI18nEnum =
          t.missionStatusEnum =
          t.missionRewardTypeEnum =
          t.missionCategoryEnum =
          t.methodPaymentOnlineEnumi18n =
          t.methodPaymentOnlineEnum =
          t.localeToLangFlagImg =
          t.leaderboardViewTypeEnum =
          t.inboxEnum =
          t.giftPromoImageEnum =
          t.giftPromoEnum =
          t.gatewayTypeEnum =
          t.gatewayType =
          t.gameType =
          t.gameTagEnum =
          t.gameStatusEnum =
          t.gameHistoryStatusEnum =
          t.floatingAdsTypeMapNameEnum =
          t.floatingAdsH5Enum =
          t.emailValidationActionTypeEnum =
          t.egameProviderLinkEnum =
          t.directMembersStatusClassesEnum =
          t.deposittypes =
          t.depositTypesEnum =
          t.depositSubPaymentTypeEnum =
          t.depositStatus =
          t.depositPaymentTypes =
          t.depositPaymentCategories =
          t.depositFrom =
          t.defaultTelCountry =
          t.currencyMappingEnum =
          t.cryptoWalletStatusi18nEnum =
          t.cryptoWalletStatusEnum =
          t.companyAccountPaymentTypes =
          t.claimTypeEnum =
          t.changePasswordEnum =
          t.booleanEnum =
          t.bankcardStatusEnum =
          t.bankCardStatusKeyEnum =
          t.authVerifyTypeEnum =
          t.applyPromoErrMsg =
          t.annType =
          t.affiliateCommissionStatusEnum =
          t.adsDetailDisplayEnum =
          t.adjustmentType =
          t.adStatusEnum =
          t.activitiesVipPageType =
          t.VIPLevelsEnum =
          t.PROMO_FAILURE_SMS_CODES =
          t.PROMO_FAILURE_DEPOSIT_CODES =
          t.MISSION_FAILURE_APP_DOWNLOAD_CODE =
          t.InrPersonalTransferPaymentTypes =
          t.GROUP1_PROMOTYPES =
          t.BlockTypesEnum =
            void 0),
        (t.withdrawalType =
          t.withdrawalStatus =
          t.withdrawalSource =
          t.withdrawalBankCardStatusEnum =
          t.vipRewardTypeEnum =
          t.vipRewardStatusTypeEnum =
          t.vipReceiveTypeEnum =
          t.vipDisplayTypeEnum =
            void 0);
      var n = a(r(94188)),
        o = r(15062),
        _ = r(51628);
      (t.defaultTelCountry = n.default.defaultTelCountry
        ? n.default.defaultTelCountry
        : n.default.defaultLocale
        ? n.default.defaultLocale.split("-")[1].toLowerCase()
        : "cn"),
        (t.localeToLangFlagImg = {
          "en-US": "lang-us.png",
          "zh-CN": "lang-cn.png",
        }),
        (t.annType = {
          Ann: 1,
          News: 2,
        }),
        (t.depositStatus = {
          1: _.i18n.depositStatus1,
          2: _.i18n.depositStatus2,
          3: _.i18n.depositStatus3,
          4: _.i18n.depositStatus4,
          5: _.i18n.depositStatus5,
          6: _.i18n.depositStatus6,
          7: _.i18n.depositStatus7,
          8: _.i18n.depositStatus8,
          PENDING: 1,
          PROCESSING: 2,
          APPROVED: 3,
          REJECT: 4,
          CANCEL: 5,
          EXPIRED: 6,
          EXPIRED_2_DAYS: 7,
          FORCED_DEPOSIT: 8,
        }),
        (t.depositFrom = {
          1: _.i18n.admin,
          2: _.i18n.player,
          ADMIN: 1,
          PLAYER: 2,
        }),
        (t.withdrawalType = {
          BANK: 1,
          THIRD_PARTY: 2,
          CRYPTO: 3,
        }),
        (t.withdrawalStatus = {
          1: _.i18n.withdrawalStatus1,
          5: _.i18n.withdrawalStatus5,
          6: _.i18n.withdrawalStatus6,
          7: _.i18n.withdrawalStatus7,
          8: _.i18n.withdrawalStatus8,
          9: _.i18n.withdrawalStatus9,
          10: _.i18n.withdrawalStatus10,
          11: _.i18n.withdrawalStatus11,
          12: _.i18n.withdrawalStatus12,
          13: _.i18n.withdrawalStatus13,
          14: _.i18n.withdrawalStatus14,
          15: _.i18n.withdrawalStatus15,
          16: _.i18n.withdrawalStatus16,
          17: _.i18n.withdrawalStatus17,
          18: _.i18n.withdrawalStatus18,
          19: _.i18n.withdrawalStatus19,
          RISK_PENDING: 1,
          RISK_PROCESSING: 5,
          FINANCE_PENDING: 6,
          FINANCE_PROCESSING: 7,
          APPROVED: 8,
          FINANCE_REJECT: 9,
          CANCEL: 10,
          FORFEIT: 11,
          RISK_REJECT: 12,
          THIRD_PARTY_PROCESSING: 13,
          FORCED_WITHDRAWAL: 14,
          AUTO_PROCESSING: 15,
          AUTO_FAILED: 16,
          AUTO_APPROVED: 17,
          AUTO_PENDING: 18,
          AUTO_CANCEL: 19,
        }),
        (t.promoStatus = {
          0: _.i18n.notReviewed,
          1: _.i18n["promo.status.approved"],
          2: _.i18n["promo.status.declined"],
          3: _.i18n["promo.status.processing"],
          4: _.i18n["promo.status.waitforclaim"],
          5: _.i18n["promo.status.claimed"],
          6: _.i18n["promo.status.expired"],
          PENDING: 0,
          APPROVED: 1,
          REJECT: 2,
          PROCESSING: 3,
          WAITFORCLAIM: 4,
          CLAIMED: 5,
          EXPIRED: 6,
        }),
        (t.promoType = {
          0: _.i18n["promo.type.manualbonus"],
          1: _.i18n["promo.type.event"],
          2: _.i18n["promo.type.registration"],
          3: _.i18n["promo.type.fsdeposit"],
          4: _.i18n["promo.type.deposit"],
          5: _.i18n["promo.type.info"],
          8: _.i18n["promo.type.redenvelope"],
          9: _.i18n["promo.type.additional.deposit"],
          10: _.i18n["promo.type.deposit.leaderboard"],
          11: _.i18n["promo.type.mission.reward"],
          12: _.i18n["promo.type.activity.reward"],
          13: _.i18n["promo.type.game.activity"],
          14: _.i18n["promo.type.promotion.code"],
          15: _.i18n["promo.type.registration.roulette"],
          MANUALBONUS: 0,
          EVENT: 1,
          REGISTRATION: 2,
          FSDEPOSIT: 3,
          DEPOSIT: 4,
          INFO: 5,
          RED_ENVELOPE: 8,
          ADDITIONAL_DEPOSIT: 9,
          DEPOSIT_LEADERBOARD: 10,
          MISSION: 11,
          ACTIVITY: 12,
          GAME: 13,
          PROMOTION_CODE: 14,
          REGISTRATION_ROULETTE: 15,
        }),
        (t.promoBonusTypeEnum = {
          0: _.i18n["promo.bonus.type.fixed.amount"],
          3: _.i18n["promo.bonus.type.ratio.amount"],
          4: _.i18n["promo.bonus.type.random.amount"],
          5: _.i18n["promo.bonus.type.rank.bonus"],
          6: _.i18n["promo.bonus.type.no.bonus"],
          AMOUNT: 0,
          RANDOM: 1,
          APPROVER: 2,
          PERCENTAGE: 3,
          RANGE_RANDOM: 4,
          LEADERBOARD_RANK: 5,
          NO_BONUS: 6,
        }),
        (t.promoTurnoverTypeEnum = {
          0: _.i18n["promo.turnover.type.fixed.amount"],
          1: _.i18n["promo.turnover.type.ratio.based.condition"],
          2: _.i18n["promo.turnover.type.other.condition"],
          3: _.i18n["promo.turnover.type.bonus.condition"],
          4: _.i18n["promo.turnover.type.no.condition"],
          AMOUNT: 0,
          MUTIPLE: 1,
          FORMULA: 2,
          BONUS: 3,
          NONE: 4,
        }),
        (t.promoTypeGroupEnum = {
          "0-0": _.i18n["promo.type.manualbonus"],
          "0-1": _.i18n["promo.type.event"],
          "0-2": _.i18n["promo.type.registration"],
          "0-3": _.i18n["promo.type.fsdeposit"],
          "0-4": _.i18n["promo.type.deposit"],
          "0-5": _.i18n["promo.type.info"],
          "0-8": _.i18n["promo.type.redenvelope"],
          "0-9": _.i18n["promo.type.additional.deposit"],
          "0-10": _.i18n["promo.type.deposit.leaderboard"],
          "0-11": _.i18n["promo.type.mission.reward"],
          "0-12": _.i18n["promo.type.activity.reward"],
          "0-13": _.i18n["promo.type.game.activity"],
          "0-14": _.i18n["promo.type.promotion.code"],
          "0-15": _.i18n["promo.type.registration.roulette"],
          "0-16": _.i18n["rr.rankingboard.bonus"],
          "1-0": _.i18n["promo.type.generalWithdrawCond"],
          "2-0": _.i18n["promo.type.gamerebate"],
          "3-0": _.i18n["promo.type.refereebonus"],
          "3-1": _.i18n["promo.type.referrerbonus"],
          "3-2": _.i18n["txn.type17"],
          "4-0": _.i18n["new.vip.upgrade.bonus"],
          "4-1": _.i18n["new.vip.birthday.bonus"],
          "4-2": _.i18n["new.vip.month.bonus"],
          "4-3": _.i18n["new.vip.monthly.aid"],
          "4-4": _.i18n["new.vip.signin.reward"],
          "4-5": _.i18n["new.vip.week.bonus"],
          "4-6": _.i18n["new.vip.weekly.aid"],
          "5-0": _.i18n["decimal.point.normal.audit"],
          "6-0": _.i18n["anytime.rebate"],
          "7-0": _.i18n["new.vip.upgrade.bonus"],
          "7-5": _.i18n["new.vip.week.bonus"],
          "7-6": _.i18n["new.vip.weekly.aid.1"],
          PROMOTION: 0,
          GWC: 1,
          REBATE: 2,
        }),
        (t.promoStatisticsType = {
          PLAYER_LOSS: "PLAYER_LOSS",
          PLAYER_WIN: "PLAYER_WIN",
          VALID_BET: "VALID_BET",
        }),
        (t.promoViewTypeEnum = {
          NO_VIEW: _.i18n["ec.setting.no.leaderboard"],
          DEFAULT_VIEW: _.i18n["ec.setting.default"],
          noView: "NO_VIEW",
          defaultView: "DEFAULT_VIEW",
        }),
        (t.transferStatus = {
          1: _.i18n["transfer.status.pending"],
          2: _.i18n["transfer.status.success"],
          3: _.i18n["transfer.status.failure"],
          PENDING: 1,
          SUCCESS: 2,
          FAILURE: 3,
        }),
        (t.msgReadStatus = {
          UNREAD: 0,
          READ: 1,
        }),
        (t.msgTypeEnum = {
          PROMO: 1,
          PERSONAL: 2,
          ROULETTE_PROMO: 3,
        });
      const E = (t.gameType = {
          LIVE: "LIVE",
          EGAME: "EGAME",
          LOTTERY: "LOTTERY",
          SPORTS: "SPORTS",
          MPG: "MPG",
          ANIMAL: "ANIMAL",
          CHESS: "CHESS",
          ESPORTS: "ESPORTS",
          MINI_GAME: "MINI_GAME",
          FINANCE: "FINANCE",
          SPORT: "SPORTS",
          SPORT_PAGE: "SPORT_PAGE",
          CATEGORIES: "CATEGORIES",
          CRICKET_PAGE: "CRICKET_PAGE",
          CASINO_PAGE: "CASINO_PAGE",
          SABA: "SABA",
        }),
        i =
          ((t.platformType = {
            mobile: 1,
            desktop: 2,
            mobileapp: 8,
          }),
          (t.applyPromoErrMsg = {
            1: _.i18n["invalid.playerid"],
            2: _.i18n["invalid.player.promo.status.disabled"],
            3: _.i18n["invalid.promoid"],
            1001: _.i18n["invalid.deleted.promo"],
            1002: _.i18n["invalid.expired.promo"],
            1003: _.i18n["invalid.deleted.vip"],
            1004: _.i18n["invalid.deleted.vip.group"],
            1005: _.i18n["invalid.inactive.vip.group"],
            1006: _.i18n["invalid.not.applicable.vip.group"],
            1007: _.i18n["invalid.pending.promo.req"],
          }),
          (t.txnType = {
            1: _.i18n["txn.type1"],
            2: _.i18n["txn.type2"],
            5: _.i18n["txn.type5"],
            6: _.i18n["txn.type6"],
            7: _.i18n["txn.type7"],
            8: _.i18n["txn.type8"],
            9: _.i18n["txn.type9"],
            10: _.i18n["txn.type10"],
            11: _.i18n["txn.type11"],
            12: _.i18n["txn.type12"],
            13: _.i18n["txn.type13"],
            14: _.i18n["txn.type14"],
            15: _.i18n["txn.type15"],
            16: _.i18n["txn.type16"],
            17: _.i18n["txn.type17"],
            18: _.i18n["txn.type18"],
            19: _.i18n["txn.type18"],
            20: _.i18n["txn.type19"],
            21: _.i18n["txn.type20"],
            DEPOSIT: 1,
            WITHDRAWAL: 2,
            PROMO: 8,
            REBATE: 9,
            SUBWALLET_PROMO: 13,
            PLAYER_REFERRAL: 15,
            REFERENCE_REFERRAL: 16,
            AFFILIATE_REFERRAL_COMMISSION: 17,
            MISSION_REWARD: 18,
            MISSION_POINTS_REWARD: 19,
            ACTIVITY_AMOUNT_REWARD: 20,
            ACTIVITY_POINTS_REWARD: 21,
          }),
          (t.txnStatus = {
            "1_8": "APPROVED",
            "1_9": "REJECT",
            "2_8": "APPROVED",
            "2_9": "REJECT",
            "2_12": "REJECT",
            "8_1": "APPROVED",
            "8_2": "REJECT",
            "9_2": "APPROVED",
          }),
          (t.rebateType = {
            1: _.i18n["rebate.type1"],
            2: _.i18n["rebate.type2"],
          }),
          (t.rebateStatus = {
            1: _.i18n["rebate.status1"],
            2: _.i18n["rebate.status2"],
            PENDING: 1,
            APPROVED: 2,
          }),
          (t.adjustmentType = {
            5: _.i18n["adjustment.type5"],
            6: _.i18n["adjustment.type6"],
            7: _.i18n["adjustment.type7"],
            11: _.i18n["adjustment.type11"],
            14: _.i18n["adjustment.type14"],
            MANUAL_ADD_BALANCE: 5,
            MANUAL_SUBTRACT_BALANCE: 6,
            MANUAL_ADD_BONUS: 7,
            MANUAL_SUBTRACT_BONUS: 11,
            MANUAL_BALANCE_SUPPLEMENT: 14,
          }),
          (t.withdrawalSource = {
            1: _.i18n.admin,
            2: _.i18n.player,
          }),
          (t.openTabDirectlyProviders = {
            LOTTERY: [],
            LIVE: ["SA", "AG", "SB"],
            SPORTS: [],
            MPG: [],
          }),
          (t.deposittypes = [
            {
              value: "2",
              label: _.i18n["deposit.type.atm.transfer"],
            },
            {
              value: "3",
              label: _.i18n["deposit.type.atm.cash.deposit"],
            },
            {
              value: "4",
              label: _.i18n["deposit.type.bank.counter.transfer"],
            },
            {
              value: "6",
              label: _.i18n["deposit.type.other"],
            },
          ].filter((e) => e.label)),
          (t.socketType = {
            PingType: 0,
            DataType: 1,
            RaceDataType: 2,
            WalletType: 3,
          }),
          (t.gatewayType = {
            1: "QRCODE",
            2: "REDIRECTION",
            3: "QRCODE_IMAGE",
            4: "REFERER_REDIRECTION",
          }),
          (t.gatewayTypeEnum = {
            QRCODE: 1,
            REDIRECTION: 2,
            QRCODE_IMAGE: 3,
            REFERER_REDIRECTION: 4,
            BAR_CODE: 5,
            DIRECT_APPROVAL: 6,
            CRYPTO: 7,
            HTML: 8,
            DATA: 9,
          }),
          (t.inboxEnum = {
            personalMsg: "personalMsg",
            normalMsg: "normalMsg",
          }),
          (t.promoMessageSubject = {
            1: _.i18n["promo.message.subject.approved"],
            2: _.i18n["promo.message.subject.declined"],
            4: _.i18n["promo.message.subject.waitForClaim"],
            approved: 1,
            declined: 2,
            waitForClaim: 4,
          }),
          (t.promoMessageContent = {
            1: _.i18n["promo.message.content.approved"],
            2: _.i18n["promo.message.content.declined"],
            4: _.i18n["promo.message.content.waitForClaim"],
            approved: 1,
            declined: 2,
            waitForClaim: 4,
          }),
          (t.bankcardStatusEnum = {
            1: _.i18n["bank.active"],
            0: _.i18n["bank.disabled"],
            active: 1,
            disabled: 0,
          }),
          (t.bankCardStatusKeyEnum = {
            1: "active",
            0: "disabled",
          }),
          (t.withdrawalBankCardStatusEnum = {
            INACTIVE: 0,
            ACTIVE: 1,
            DEFAULT: 2,
            DELETE: 9,
          }),
          (t.cryptoWalletStatusEnum = {
            INACTIVE: "INACTIVE",
            ACTIVE: "ACTIVE",
            DELETE: "DELETE",
          }),
          (t.cryptoWalletStatusi18nEnum = {
            INACTIVE: _.i18n["bank.disabled"],
            ACTIVE: _.i18n["bank.active"],
          }),
          (t.gameHistoryStatusEnum = {
            0: _.i18n.settled,
            1: _.i18n.processing,
            2: _.i18n["system.canceled"],
            3: _.i18n.settled,
            4: _.i18n.settled,
            5: _.i18n.rejected,
            6: _.i18n.void,
            7: _.i18n.resettle,
            8: _.i18n["player.canceled"],
            PROCESSING: 1,
            CANCELED: 2,
            REJECTED: 5,
            VOID: 6,
            PLAYER_CANCELED: 8,
          }),
          (t.depositSubPaymentTypeEnum = {
            QR: 1,
            H5: 2,
            ONLINE_BANK: 4,
            CREDIT_CARD: 8,
            BAR_CODE: 16,
            TOKEN: 32,
            BTC: 64,
            PDD: 128,
            HF: 256,
            NORMAL: 512,
          }),
          (t.paymentSectionTypeEnum = {
            QRCODE: 1,
            BANK_PLAYER_TRANSFER: 2,
            BANK_PERSONAL_TRANSFER: 4,
            H5: 8,
            BAR_CODE: 16,
            TOKEN: 32,
            BTC: 64,
            PDD: 128,
            HF: 256,
            NORMAL: 512,
          }),
          (t.methodPaymentOnlineEnum = {
            THIRD_PARTY_ONLINE: 1,
            ONLINE_BANK: 2,
            OTHERS: 4,
            THIRD_PARTY_QR_PAY: 512,
          }),
          (t.methodPaymentOnlineEnumi18n = {
            1: _.i18n["third.party.online"],
            2: _.i18n.onlineBanking,
            4: _.i18n["deposit.type.other"],
            512: "QR",
          }),
          (t.depositPaymentCategories = {
            OFFLINE_DEPOSIT: "offlineDeposit",
            ONLINE_BANKING: "onlineBanking",
            PERSONAL_ACCOUNT: "personalAccount",
          }),
          (t.depositPaymentTypes = {
            WEIXIN: "WEIXIN",
            ALIPAY: "ALIPAY",
            DEBIT_CARD: "DEBIT_CARD",
            COMPANY_DEPOSIT: "COMPANY_DEPOSIT",
            CORPORATE_CRYPTO: "CORPORATE_CRYPTO",
            QQ: "QQ",
            JDPAY: "JDPAY",
            UNIONPAY_SCAN: "UNIONPAY_SCAN",
            EXPRESSPAY: "EXPRESSPAY",
            YIYOU: "YIYOU",
            CRYPTO: "CRYPTO",
            MOMOPAY: "MOMOPAY",
            ZALOPAY: "ZALOPAY",
            VIETTELPAY: "VIETTELPAY",
            QUICKPASS: "QUICKPASS",
            QR_BANK: "QR_BANK",
            ONLINE_BANKING: "ONLINE_BANKING",
            PROMPTPAY: "PROMPTPAY",
            SKRILL: "SKRILL",
            NETELLER: "NETELLER",
            PAYTM: "PAYTM",
            UPI: "UPI",
            BHIM: "BHIM",
            GPAY: "GPAY",
            PHONEPE: "PHONEPE",
            MPURSE: "MPURSE",
            SCRATCHCARD: "SCRATCHCARD",
            GCASH: "GCASH",
            TRUEMONEY: "TRUEMONEY",
            USDT: "USDT",
            GRABPAY: "GRABPAY",
            PAYMAYA: "PAYMAYA",
            REMIT: "REMIT",
            PAYLORO: "PAYLORO",
            NAGAD: "NAGAD",
            BKASH: "BKASH",
            ROCKET: "ROCKET",
            UPAY: "UPAY",
          })),
        s =
          ((t.InrPersonalTransferPaymentTypes = {
            SKRILL: i.SKRILL,
            NETELLER: i.NETELLER,
            PAYTM: i.PAYTM,
            BHIM: i.BHIM,
            UPI: i.UPI,
            GPAY: i.GPAY,
            PHONEPE: i.PHONEPE,
          }),
          (t.companyAccountPaymentTypes = {
            UNKNOWN: 0,
            [i.COMPANY_DEPOSIT]: 1,
            [i.WEIXIN]: 2,
            [i.ALIPAY]: 3,
            [i.QQ]: 4,
            [i.JDPAY]: 5,
            [i.MOMOPAY]: 6,
            [i.ZALOPAY]: 7,
            [i.VIETTELPAY]: 8,
            [i.SKRILL]: 9,
            [i.NETELLER]: 10,
            [i.PAYTM]: 11,
            [i.BHIM]: 12,
            [i.UPI]: 13,
            [i.GPAY]: 14,
            [i.PHONEPE]: 15,
            [i.GCASH]: 16,
            [i.TRUEMONEY]: 17,
            [i.GRABPAY]: 18,
            [i.PAYMAYA]: 19,
            [i.PAYLORO]: 20,
          }),
          (t.depositTypesEnum = {
            BANK_ONLINE: 1,
            BANK_ATM_TRANSFER: 2,
            BANK_ATM_CASH: 3,
            BANK_COUNTER: 4,
            BANK_MOBILE: 5,
            BANK_OTHERS: 6,
            THIRDPARTY_QQ: 7,
            THIRDPARTY_WEIXIN: 8,
            THIRDPARTY_ALIPAY: 9,
            THIRDPARTY_DEBIT_CARD: 10,
            BANK_PLAYER_ALIPAY: 11,
            BANK_PLAYER_WEIXIN: 12,
            BANK_PLAYER_QQ: 13,
            BANK_PERSONAL_ALIPAY: 14,
            BANK_PERSONAL_WEIXIN: 15,
            BANK_PERSONAL_QQ: 16,
            THIRDPARTY_CREDIT_CARD: 17,
            THIRDPARTY_JDPAY: 18,
            BANK_PLAYER_JDPAY: 19,
            BANK_PERSONAL_JDPAY: 20,
            THIRDPARTY_UNIONPAY_SCAN: 21,
            THIRDPARTY_EXPRESSPAY: 22,
            THIRDPARTY_H5_ALIPAY: 23,
            THIRDPARTY_H5_WEIXIN: 24,
            THIRDPARTY_H5_QQ: 25,
            THIRDPARTY_H5_JDPAY: 26,
            THIRDPARTY_BAR_CODE_ALIPAY: 27,
            THIRDPARTY_BAR_CODE_WEIXIN: 28,
            THIRDPARTY_BAR_CODE_QQ: 29,
            THIRDPARTY_BAR_CODE_JDPAY: 30,
            THIRDPARTY_TOKEN_YIYOU: 31,
            BTC: 32,
            BANK_PERSONAL_MOMOPAY: 33,
            BANK_PERSONAL_ZALOPAY: 34,
            BANK_PERSONAL_VIETTELPAY: 35,
            THIRDPARTY_QUICKPASS: 36,
            THIRDPARTY_H5_QUICKPASS: 37,
            THIRDPARTY_PDD_WEIXIN: 39,
            THIRDPARTY_HF_WEIXIN: 40,
            THIRDPARTY_PDD_ALIPAY: 41,
            THIRDPARTY_HF_ALIPAY: 42,
            THIRDPARTY_QR_BANK: 43,
            THIRDPARTY_MOMOPAY: 44,
            THIRDPARTY_ZALOPAY: 45,
            THIRDPARTY_VIETTELPAY: 46,
            THIRDPARTY_PROMPTPAY: 47,
            BANK_PERSONAL_SKRILL: 48,
            BANK_PERSONAL_NETELLER: 49,
            BANK_PERSONAL_PAYTM: 50,
            THIRDPARTY_QR_UPI: 51,
            THIRDPARTY_H5_UPI: 52,
            THIRDPARTY_PAYTM: 53,
            THIRDPARTY_QR_PAYTM: 54,
            THIRDPARTY_H5_PAYTM: 55,
            BANK_PERSONAL_BHIM: 56,
            BANK_PERSONAL_UPI: 57,
            BANK_PERSONAL_GPAY: 58,
            BANK_PERSONAL_PHONEPE: 59,
            THIRDPARTY_DEBIT_CARD_OFFLINE: 60,
            THIRDPARTY_NORMAL_MPURSE: 61,
            THIRDPARTY_QR_MPURSE: 62,
            THIRDPARTY_H5_MPURSE: 63,
            THIRDPARTY_NORMAL_SCRATCHCARD: 64,
            THIRDPARTY_H5_SCRATCHCARD: 65,
            THIRDPARTY_QR_GCASH: 66,
            THIRDPARTY_H5_GCASH: 67,
            BANK_PERSONAL_GCASH: 68,
            THIRDPARTY_QR_TRUEMONEY: 69,
            THIRDPARTY_H5_TRUEMONEY: 70,
            BANK_PERSONAL_TRUEMONEY: 71,
            THIRDPARTY_QR_PHONEPE: 72,
            THIRDPARTY_H5_PHONEPE: 73,
            THIRDPARTY_H5_USDT: 74,
            THIRDPARTY_QR_GRABPAY: 75,
            THIRDPARTY_H5_GRABPAY: 76,
            BANK_PERSONAL_GRABPAY: 77,
            THIRDPARTY_QR_PAYMAYA: 78,
            THIRDPARTY_H5_PAYMAYA: 79,
            BANK_PERSONAL_PAYMAYA: 80,
            THIRDPARTY_H5_REMIT: 81,
            THIRDPARTY_QR_PAYLORO: 82,
            THIRDPARTY_H5_PAYLORO: 83,
            BANK_PERSONAL_PAYLORO: 84,
            CORPORATE_CRYPTO: 85,
            THIRDPARTY_H5_NAGAD: 86,
            THIRDPARTY_H5_BKASH: 87,
            THIRDPARTY_H5_ROCKET: 88,
            THIRDPARTY_H5_UPAY: 89,
            OFFLINE_DEPOSIT: 99,
            1: "BANK_ONLINE",
            2: "BANK_ATM_TRANSFER",
            3: "BANK_ATM_CASH",
            4: "BANK_COUNTER",
            5: "BANK_MOBILE",
            6: "BANK_OTHERS",
            7: "THIRDPARTY_QQ",
            8: "THIRDPARTY_WEIXIN",
            9: "THIRDPARTY_ALIPAY",
            10: "THIRDPARTY_DEBIT_CARD",
            11: "BANK_PLAYER_ALIPAY",
            12: "BANK_PLAYER_WEIXIN",
            13: "BANK_PLAYER_QQ",
            14: "BANK_PERSONAL_ALIPAY",
            15: "BANK_PERSONAL_WEIXIN",
            16: "BANK_PERSONAL_QQ",
            17: "THIRDPARTY_CREDIT_CARD",
            18: "THIRDPARTY_JDPAY",
            19: "BANK_PLAYER_JDPAY",
            20: "BANK_PERSONAL_JDPAY",
            21: "THIRDPARTY_UNIONPAY_SCAN",
            22: "THIRDPARTY_EXPRESSPAY",
            23: "THIRDPARTY_H5_ALIPAY",
            24: "THIRDPARTY_H5_WEIXIN",
            25: "THIRDPARTY_H5_QQ",
            26: "THIRDPARTY_H5_JDPAY",
            27: "THIRDPARTY_BAR_CODE_ALIPAY",
            28: "THIRDPARTY_BAR_CODE_WEIXIN",
            29: "THIRDPARTY_BAR_CODE_QQ",
            30: "THIRDPARTY_BAR_CODE_JDPAY",
            31: "THIRDPARTY_TOKEN_YIYOU",
            32: "BTC",
            33: "BANK_PERSONAL_MOMOPAY",
            34: "BANK_PERSONAL_ZALOPAY",
            35: "BANK_PERSONAL_VIETTELPAY",
            36: "THIRDPARTY_QUICKPASS",
            37: "THIRDPARTY_H5_QUICKPASS",
            39: "THIRDPARTY_PDD_WEIXIN",
            40: "THIRDPARTY_HF_WEIXIN",
            41: "THIRDPARTY_PDD_ALIPAY",
            42: "THIRDPARTY_HF_ALIPAY",
            43: "THIRDPARTY_QR_BANK",
            44: "THIRDPARTY_MOMOPAY",
            45: "THIRDPARTY_ZALO",
            46: "THIRDPARTY_VIETTELPAY",
            47: "THIRDPARTY_PROMPTPAY",
            48: "BANK_PERSONAL_SKRILL",
            49: "BANK_PERSONAL_NETELLER",
            50: "BANK_PERSONAL_PAYTM",
            51: "THIRDPARTY_QR_UPI",
            52: "THIRDPARTY_H5_UPI",
            53: "THIRDPARTY_PAYTM",
            54: "THIRDPARTY_QR_PAYTM",
            55: "THIRDPARTY_H5_PAYTM",
            56: "BANK_PERSONAL_BHIM",
            57: "BANK_PERSONAL_UPI",
            58: "BANK_PERSONAL_GPAY",
            59: "BANK_PERSONAL_PHONEPE",
            60: "THIRDPARTY_DEBIT_CARD_OFFLINE",
            61: "THIRDPARTY_NORMAL_MPURSE",
            62: "THIRDPARTY_QR_MPURSE",
            63: "THIRDPARTY_H5_MPURSE",
            64: "THIRDPARTY_NORMAL_SCRATCHCARD",
            65: "THIRDPARTY_H5_SCRATCHCARD",
            66: "THIRDPARTY_QR_GCASH",
            67: "THIRDPARTY_H5_GCASH",
            68: "BANK_PERSONAL_GCASH",
            69: "THIRDPARTY_QR_TRUEMONEY",
            70: "THIRDPARTY_H5_TRUEMONEY",
            71: "BANK_PERSONAL_TRUEMONEY",
            72: "THIRDPARTY_QR_PHONEPE",
            73: "THIRDPARTY_H5_PHONEPE",
            74: "THIRDPARTY_H5_USDT",
            75: "THIRDPARTY_QR_GRABPAY",
            76: "THIRDPARTY_H5_GRABPAY",
            77: "BANK_PERSONAL_GRABPAY",
            78: "THIRDPARTY_QR_PAYMAYA",
            79: "THIRDPARTY_H5_PAYMAYA",
            80: "BANK_PERSONAL_PAYMAYA",
            81: "THIRDPARTY_H5_REMIT",
            82: "THIRDPARTY_QR_PAYLORO",
            83: "THIRDPARTY_H5_PAYLORO",
            84: "BANK_PERSONAL_PAYLORO",
            86: "THIRDPARTY_H5_NAGAD",
            87: "THIRDPARTY_H5_BKASH",
            88: "THIRDPARTY_H5_ROCKET",
            89: "THIRDPARTY_H5_UPAY",
            99: "OFFLINE_DEPOSIT",
          }),
          (t.gameStatusEnum = {
            0: _.i18n.disabled,
            1: _.i18n.active,
            2: _.i18n["coming.soon"],
            disabled: 0,
            active: 1,
            comingsoon: 2,
          }),
          (t.currencyMappingEnum = {
            VND2: {
              orgcurrency: "VND",
              multiplier: 1e3,
            },
            IDR2: {
              orgcurrency: "IDR",
              multiplier: 1e3,
            },
            LAK2: {
              orgcurrency: "LAK",
              multiplier: 1e3,
            },
            MMK2: {
              orgcurrency: "MMK",
              multiplier: 1e3,
            },
          }),
          (t.gameTagEnum = {
            ALL: "all",
            NEW: "new",
            POP: "pop",
            FAVORITE: "favorite",
            ASC: "asc",
            DESC: "desc",
          }),
          (t.booleanEnum = {
            FALSE: 0,
            TRUE: 1,
          }),
          (t.promoBannerType = {
            BANNER: "BANNER",
            GRID: "GRID",
          }),
          (t.shortCutIconClassnameEnum = {
            onlinecs: "mps-help-man",
            qq: "mps-help-qq",
            whatsapp: "mps-help-whatsapp",
            email: "mps-help-mail",
            qa: "mps-quiz",
            skype: "mps-help-skype",
            callcenter: "mps-service",
            line: "mps-help-line",
            zalo: "mps-help-zalo",
            wechat: "mps-help-wechat",
            viber: "mps-help-viber",
            fb: "mps-help-fb",
            telegram: "mps-telegram",
            vipcs: "mps-csvip",
            PConlinecs: "mps-cspc",
            H5onlinecs: "mps-csh5",
          }),
          (t.authVerifyTypeEnum = {
            EMAIL: "email",
            OTP: "otp",
            NONE: "none",
          }),
          (t.portalIdEnum = {
            DESKTOP: "EC_DESKTOP",
            MOBILE: "EC_MOBILE",
            AFFILIATE: "AFFILIATE",
            AGENT: "AGENT",
            APP: "EC_APP",
          }),
          (t.oddsTypeEnum = {
            HK: _.i18n["gamerecord.oddstype.HK"],
            DECIMAL: _.i18n["gamerecord.oddstype.DECIMAL"],
            INDO: _.i18n["gamerecord.oddstype.INDO"],
            MALAY: _.i18n["gamerecord.oddstype.MALAY"],
            US: _.i18n["gamerecord.oddstype.US"],
            BU: _.i18n["gamerecord.oddstype.BU"],
            INDIAN: _.i18n["gamerecord.oddstype.INDIAN"],
          }),
          (t.sportRuleEnum = {
            SABA: {
              "zh-CN": "cs",
              "en-US": "en",
              "th-TH": "th",
              "vi-VN": "vn",
              "id-ID": "en",
            },
            ZFB: !1,
            UGAMING: !1,
          }),
          (t.templateTipNameMapEnum = {
            agentid: "agentidtipi18n",
            ulagentaccount: "ulagentaccounttipi18n",
            playerid: "playeridtipi18n",
            birthday: "birthdaytipi18n",
            password: "passwordtipi18n",
            confirmpassword: "confirmpasswordtipi18n",
            currency: "currencytipi18n",
            email: "emailtipi18n",
            im1: "im1tipi18n",
            im2: "im2tipi18n",
            mobile: "phonenumbertipi18n",
            firstname: "realnametipi18n",
            pic1: "pic1tipi18n",
            pic2: "pic2tipi18n",
            refererid: "referreridtipi18n",
            affiliateid: "referreridtipi18n",
            pin: "withdrawpasswordtipi18n",
            confirmpin: "confirmwithdrawpasswordtipi18n",
            captcha: "captchatipi18n",
          }),
          (t.playerInfoReadyEnum = {
            DEPOSIT: "1",
            WITHDRAW: "2",
            PROMO: "4",
            IMS: "8",
            BANKCARDADD: "16",
            WALLETCARD: "32",
            1: "DEPOSIT",
            2: "WITHDRAWAL",
            4: "PROMO",
            8: "BOPLAYER",
            16: "BANKCARDADD",
            32: "WALLETCARD",
          }),
          (t.playerStatusEnum = {
            0: _.i18n["referral.player.status.0"],
            1: _.i18n["referral.player.status.1"],
            2: _.i18n["referral.player.status.2"],
            3: _.i18n["referral.player.status.3"],
            4: _.i18n["referral.player.status.4"],
            NOTACTIVED: 0,
            ACTIVED: 1,
            BLOCKED: 2,
            DISABLED: 3,
            SUSPENDED: 4,
          })),
        T =
          ((t.adStatusEnum = {
            NOTACTIVED: 0,
            ACTIVED: 1,
          }),
          (t.singleReferralStatusEnum = {
            1: _.i18n["referral.single.referral.status.1"],
            2: _.i18n["referral.single.referral.status.2"],
            3: _.i18n["referral.single.referral.status.3"],
            4: _.i18n["referral.single.referral.status.4"],
            NOTQUALIFIED: 1,
            PENDING: 2,
            APPROVED: 3,
            DECLINED: 4,
          })),
        A = (t.affiliateCommissionStatusEnum = {
          APPROVED: "APPROVED",
          MANUAL_PROCESSING: "MANUAL_PROCESSING",
          PENDING: "PENDING",
          REJECT: "REJECT",
        }),
        S =
          ((t.directMembersStatusClassesEnum = {
            player: {
              [s.NOTACTIVED]: "not-active",
              [s.ACTIVED]: "active",
              [s.BLOCKED]: "disabled",
              [s.DISABLED]: "disabled",
              [s.SUSPENDED]: "disabled",
            },
            singlereferralstatus: {
              [T.NOTQUALIFIED]: "not-qualified",
              [T.APPROVED]: "success",
              [T.PENDING]: "not-reviewed",
              [T.DECLINED]: "failed",
            },
          }),
          (t.playerSettlementStatusClassesEnum = {
            [A.APPROVED]: "success",
            [A.MANUAL_PROCESSING]: "pending",
            [A.PENDING]: "pending",
            [A.REJECT]: "reject",
          }),
          (t.egameProviderLinkEnum = {
            KISS918: o.paths.PAGE_KISS918,
          }),
          (t.floatingAdsTypeMapNameEnum = {
            1: "left-top",
            2: "left-center",
            3: "right-center",
            4: "floating-maintenance",
            5: "center",
            LEFT_TOP: 1,
            LEFT_CENTER: 2,
            RIGHT_CENTER: 3,
            MAINTENANCE: 4,
            CENTER_DESKTOP: 5,
            MOBILE: 6,
            MOBILE_REGISTER: 7,
            APP: 8,
            CENTER_MOBILE: 10,
          }),
          (t.floatingAdsH5Enum = {
            LOGGED_OUT_TOP: 1,
            LOGGED_IN_TOP: 3,
            LOGGED_OUT_BOTTOM: 2,
            LOGGED_IN_BOTTOM: 4,
          }),
          (t.adsDetailDisplayEnum = {
            CAN_NOT_CLOSE: 1,
            CAN_CLOSE: 2,
          }),
          (t.giftPromoEnum = {
            NONE: "none",
            EXPIRED: "expired",
            UPCOMING: "upcoming",
            IN_PROGRESS: "in_progress",
          })),
        l =
          ((t.giftPromoImageEnum = {
            [S.IN_PROGRESS]: "CUSTOM01",
            [S.UPCOMING]: "CUSTOM01",
            [S.EXPIRED]: "CUSTOM02",
            ICON: "CUSTOM03",
          }),
          (t.promoTypeEnum = {
            MANUAL_BONUS: 0,
            EVENT: 1,
            REGISTRATION: 2,
            FSDEPOSIT: 3,
            DEPOSIT: 4,
            INFO: 5,
            DEPOSIT_GIFT: 8,
            ADDITIONAL_DEPOSIT: 9,
            DEPOSIT_LEADERBOARD: 10,
            GAME: 13,
            PROMOTION_CODE: 14,
            REGISTRATION_ROULETTE: 15,
            RACE: 16,
          }),
          (t.GROUP1_PROMOTYPES = [0, 1, 2, 3, 4, 8, 9, 10, 13, 14, 15]),
          (t.leaderboardViewTypeEnum = {
            UNRESTRICTED: "UNRESTRICTED",
            AFTER_LOGIN: "AFTER_LOGIN",
          }),
          (t.missionCategoryEnum = {
            NEWBIE: "NEWBIE",
            DAILY: "DAILY",
            ACCUMULATE: "ACCUMULATE",
            PERIOD: "PERIOD",
            AFFILIATE: "AFFILIATE",
            ATTENDANCE: "ATTENDANCE",
          }),
          (t.missionTypeEnum = {
            NEWBIE_BANK_CARD: "NEWBIE_BANK_CARD",
            NEWBIE_PHONE_NUMBER: "NEWBIE_PHONE_NUMBER",
            NEWBIE_FIAT_DEPOSIT: "NEWBIE_FIAT_DEPOSIT",
            NEWBIE_CRYPTO_DEPOSIT: "NEWBIE_CRYPTO_DEPOSIT",
            NEWBIE_GENERAL_DEPOSIT: "NEWBIE_GENERAL_DEPOSIT",
            NEWBIE_GENERAL_WITHDRAWAL: "NEWBIE_GENERAL_WITHDRAWAL",
            DAILY_LOGIN: "DAILY_LOGIN",
            OFFICIAL_APP_LOGIN: "OFFICIAL_APP_LOGIN",
            DAILY_OFFICIAL_APP_LOGIN: "DAILY_OFFICIAL_APP_LOGIN",
            DAILY_DEPOSIT: "DAILY_DEPOSIT",
            DAILY_FREE_GET: "DAILY_FREE_GET",
            YESTERDAY_VALID_BET: "YESTERDAY_VALID_BET",
            YESTERDAY_LOSS: "YESTERDAY_LOSS",
            YESTERDAY_PRODUCT_TYPE_VALID_BET:
              "YESTERDAY_PRODUCT_TYPE_VALID_BET",
            YESTERDAY_PRODUCT_TYPE_LOSS: "YESTERDAY_PRODUCT_TYPE_LOSS",
            YESTERDAY_GAME_PROVIDER_VALID_BET:
              "YESTERDAY_GAME_PROVIDER_VALID_BET",
            YESTERDAY_GAME_PROVIDER_LOSS: "YESTERDAY_GAME_PROVIDER_LOSS",
            TODAY_GAME_PROVIDER_VALID_BET: "TODAY_GAME_PROVIDER_VALID_BET",
            TODAY_PRODUCT_TYPE_VALID_BET: "TODAY_PRODUCT_TYPE_VALID_BET",
            TODAY_PRODUCT_TYPE_LOSS: "TODAY_PRODUCT_TYPE_LOSS",
            TODAY_GAME_PROVIDER_LOSS: "TODAY_GAME_PROVIDER_LOSS",
            ACCUMULATE_DEPOSIT: "ACCUMULATE_DEPOSIT",
            ACCUMULATE_VALID_DOWN_LINES: "ACCUMULATE_VALID_DOWN_LINES",
            ACCUMULATE_LOGIN: "ACCUMULATE_LOGIN",
            ACCUMULATE_OFFICIAL_APP_LOGIN: "ACCUMULATE_OFFICIAL_APP_LOGIN",
            PERIOD_CONTINUOUS_LOGIN: "PERIOD_CONTINUOUS_LOGIN",
            PERIOD_CONTINUOUS_OFFICIAL_APP_LOGIN:
              "PERIOD_CONTINUOUS_OFFICIAL_APP_LOGIN",
            PERIOD_CONTINUOUS_DEPOSIT_DAY: "PERIOD_CONTINUOUS_DEPOSIT_DAY",
            PERIOD_DEPOSIT_DAY: "PERIOD_DEPOSIT_DAY",
            PERIOD_GAME_PROVIDER_VALID_BET: "PERIOD_GAME_PROVIDER_VALID_BET",
            PERIOD_GAME_PROVIDER_LOSS: "PERIOD_GAME_PROVIDER_LOSS",
            PERIOD_PRODUCT_TYPE_VALID_BET: "PERIOD_PRODUCT_TYPE_VALID_BET",
            PERIOD_PRODUCT_TYPE_LOSS: "PERIOD_PRODUCT_TYPE_LOSS",
            PERIOD_VALID_DOWN_LINES: "PERIOD_VALID_DOWN_LINES",
            PERIOD_DOWN_LINES_VALID_BET: "PERIOD_DOWN_LINES_VALID_BET",
            PERIOD_DOWN_LINES_DEPOSIT: "PERIOD_DOWN_LINES_DEPOSIT",
            DAILY_MILESTONE: "DAILY_MILESTONE",
            MILESTONE: "MILESTONE",
          }),
          "$amount $defaultCurrency"),
        u = "$gameProviderId $amount $defaultCurrency",
        c = "$productType $amount $defaultCurrency",
        R = "00:00 ~ 23:59 GMT+8",
        d = {
          COMPLETE_BINDING: _.i18n["complete.binding"],
          COMPLETE_VERIFICATION: _.i18n["complete.verification"],
          ONE_TIME: _.i18n["one.time"],
          OFFICIAL_APP_LOGIN: _.i18n["mission.type.OFFICIAL_APP_LOGIN"],
          PEOPLE: _.i18n["mission.threshold.downline.above"],
          DAYS: _.i18n["mission.threshold.login.above"],
          CONTINUOUS_DEPOSIT_DAY:
            _.i18n["mission.threshold.continuous.deposit.day.money.above"],
          DEPOSIT_DAY: _.i18n["mission.threshold.deposit.day.money.above"],
          COMPLETED_COUNT: _.i18n["mission.threshold.completed.task"],
        },
        p =
          ((t.missionThresholdI18nEnum = {
            NEWBIE_BANK_CARD: d.COMPLETE_BINDING,
            NEWBIE_PHONE_NUMBER: d.COMPLETE_VERIFICATION,
            NEWBIE_FIAT_DEPOSIT: d.ONE_TIME,
            NEWBIE_CRYPTO_DEPOSIT: d.ONE_TIME,
            NEWBIE_GENERAL_DEPOSIT: d.ONE_TIME,
            NEWBIE_GENERAL_WITHDRAWAL: d.ONE_TIME,
            DAILY_LOGIN: R,
            OFFICIAL_APP_LOGIN: d.OFFICIAL_APP_LOGIN,
            DAILY_DEPOSIT: l,
            DAILY_FREE_GET: "$startTime ~ $endTime",
            DAILY_OFFICIAL_APP_LOGIN: R,
            YESTERDAY_VALID_BET: l,
            YESTERDAY_LOSS: l,
            YESTERDAY_GAME_PROVIDER_VALID_BET: u,
            YESTERDAY_GAME_PROVIDER_LOSS: u,
            YESTERDAY_PRODUCT_TYPE_VALID_BET: c,
            YESTERDAY_PRODUCT_TYPE_LOSS: c,
            TODAY_GAME_PROVIDER_VALID_BET: u,
            TODAY_GAME_PROVIDER_LOSS: u,
            TODAY_PRODUCT_TYPE_VALID_BET: c,
            TODAY_PRODUCT_TYPE_LOSS: c,
            ACCUMULATE_LOGIN: d.DAYS,
            ACCUMULATE_DEPOSIT: l,
            ACCUMULATE_VALID_DOWN_LINES: d.PEOPLE,
            ACCUMULATE_OFFICIAL_APP_LOGIN: d.DAYS,
            PERIOD_CONTINUOUS_LOGIN: R,
            PERIOD_CONTINUOUS_OFFICIAL_APP_LOGIN: R,
            PERIOD_CONTINUOUS_DEPOSIT_DAY: d.CONTINUOUS_DEPOSIT_DAY,
            PERIOD_DEPOSIT_DAY: d.DEPOSIT_DAY,
            PERIOD_GAME_PROVIDER_VALID_BET: u,
            PERIOD_GAME_PROVIDER_LOSS: u,
            PERIOD_PRODUCT_TYPE_VALID_BET: c,
            PERIOD_PRODUCT_TYPE_LOSS: c,
            PERIOD_DOWN_LINES_VALID_BET: l,
            PERIOD_DOWN_LINES_DEPOSIT: l,
            PERIOD_VALID_DOWN_LINES: d.PEOPLE,
            DAILY_MILESTONE: d.COMPLETED_COUNT,
            MILESTONE: d.COMPLETED_COUNT,
          }),
          (t.missionRewardTypeEnum = {
            FIXED_REWARD: "FIXED_REWARD",
            RANDOM_REWARD: "RANDOM_REWARD",
            ACTIVITY_POINTS: "ACTIVITY_POINTS",
            NO_PRIZE: "NO_PRIZE",
          }),
          (t.missionStatusEnum = {
            UNDONE: "UNDONE",
            AVAILABLE: "AVAILABLE",
            RECEIVED: "RECEIVED",
            EXPIRED: "EXPIRED",
          }),
          (t.rouletteRewardTypeEnum = {
            FIXED_REWARD: "FIXED_REWARD",
            RANDOM_REWARD: "RANDOM_REWARD",
            ACTIVITY_POINTS: "ACTIVITY_POINTS",
            PRODUCT_GIFT: "PRODUCT_GIFT",
            NO_PRIZE: "NO_PRIZE",
          }),
          (t.rouletteStatusEnum = {
            IN_PROGRESS: "IN_PROGRESS",
            EXPIRED: "EXPIRED",
          }),
          Object.keys(E).reduce((e, t) => {
            const r = o.paths[t];
            return r && (e[r] = t), e;
          }, {}));
      (p[o.paths.ROOT] = "ROOT"),
        (p[o.paths.HOT_GAMES] = "HOT_GAMES"),
        (p[o.paths.HOT_GAMES_2] = "HOT_GAMES_2"),
        (p[o.paths.HOT_GAMES_3] = "HOT_GAMES_3"),
        (p[o.paths.FAVORITE_GAMES] = "FAVORITE_GAMES");
      const I = (t.mobilePathEnum = p);
      (t.mobilePathListEnum = Object.keys(I)),
        (t.vipRewardTypeEnum = {
          UPGRADE_BONUS: "UPGRADE_BONUS",
          BIRTHDAY_BONUS: "BIRTHDAY_BONUS",
          WEEKLY_BONUS: "WEEKLY_BONUS",
          MONTHLY_BONUS: "MONTHLY_BONUS",
          WEEKLY_AID: "WEEKLY_AID",
          MONTHLY_AID: "MONTHLY_AID",
          VIP_GIFT: "VIP_GIFT",
          CUSTOMER_SERVICE: "CUSTOMER_SERVICE",
          SIGN_IN_BONUS: "SIGN_IN_BONUS",
        }),
        (t.vipRewardStatusTypeEnum = {
          CLAIMED: "CLAIMED",
          PENDING: "PENDING",
          DISPATCHED: "DISPATCHED",
          EXPIRED: "EXPIRED",
          MANUAL_DISPATCH: "MANUAL_DISPATCH",
          PROCESSING: "PROCESSING",
          DELIVERED: "DELIVERED",
          NOT_QUALIFIED: "NOT_QUALIFIED",
          INSUFFICIENT_LEVEL: "INSUFFICIENT_LEVEL",
          CONTACT_CUSTOMER_SERVICE: "CONTACT_CUSTOMER_SERVICE",
        }),
        (t.vipDisplayTypeEnum = {
          ENABLE: "ENABLE",
          DISABLE: "DISABLE",
        }),
        (t.activitiesVipPageType = {
          VIP_STATIC_PAGE: "VIP_STATIC_PAGE",
          PERSONAL_CENTER_PAGE: "PERSONAL_CENTER_PAGE",
          DISABLE: "DISABLE",
        }),
        (t.vipReceiveTypeEnum = {
          PENDING: "PENDING",
          CLAIMED: "CLAIMED",
          OVER: "OVER",
        }),
        (t.VIPLevelsEnum = {
          BLACKLIST: -99,
        }),
        (t.PROMO_FAILURE_DEPOSIT_CODES = [1, 4, 6, 7, 8, 38]),
        (t.PROMO_FAILURE_SMS_CODES = [1010]),
        (t.MISSION_FAILURE_APP_DOWNLOAD_CODE = [7]),
        (t.viewRewardTypeEnum = {
          REWARD: "reward",
          RECORD: "record",
          ANYTIME_REBATE: "anytimeRebate",
          RACE_BONUS: "raceBonus",
        }),
        (t.vipAidRewardTypeEnum = {
          FIXED_REWARD: "FIXED_REWARD",
          PERCENTAGE_REWARD: "PERCENTAGE_REWARD",
        }),
        (t.promoLimitTimeCondEnum = {
          AFTER_REG: "AFTER_REG",
        }),
        (t.ssvipGroupEnum = {
          "54255e89-90a4-4f92-bbaf-ad1799b65898": 0,
          "dd452cdb-9205-4979-989a-75874cb14e98": 1,
          "799b30c1-a994-4094-b9aa-afdb642940b8": 2,
          "c8d099ee-afb8-4d9f-bac5-90e7cb7b0516": 3,
          "751a74bf-9021-452c-b507-f7239adda8f9": 4,
          "dbabdfd4-02e8-4a67-89df-a1f2217efd61": 5,
          "5110b747-fc20-4ffe-bbb5-2a8b25c45555": 6,
          "0f387bed-b40e-4b54-8ca7-c05d0950705c": 7,
        }),
        (t.raceTypeEnum = {
          BET_AMOUNT: "BET_AMOUNT",
        }),
        (t.verificationTypeEnum = {
          NONE: "NONE",
          EMAIL: "EMAIL",
          OTP: "OTP",
        }),
        (t.verifySmsActionTypeEnum = {
          NORMAL: "NORMAL",
          BANK_CARD: "BANK_CARD",
          EDIT_BANK_CARD: "EDIT_BANK_CARD",
          CRYPTO_WALLET: "CRYPTO_WALLET",
          EDIT_CRYPTO_WALLET: "EDIT_CRYPTO_WALLET",
          FORGOT_PASSWORD: "FORGOT_PASSWORD",
          CHANGE_PASSWORD: "CHANGE_PASSWORD",
          CHANGE_WITHDRAWAL_PASSWORD: "CHANGE_WITHDRAWAL_PASSWORD",
        }),
        (t.emailValidationActionTypeEnum = {
          MEMBER_CENTER: "MEMBER_CENTER",
          BANK_CARD: "BANK_CARD",
          EDIT_BANK_CARD: "EDIT_BANK_CARD",
          CRYPTO_WALLET: "CRYPTO_WALLET",
          EDIT_CRYPTO_WALLET: "EDIT_CRYPTO_WALLET",
          CHANGE_PASSWORD: "CHANGE_PASSWORD",
          CHANGE_WITHDRAWAL_PASSWORD: "CHANGE_WITHDRAWAL_PASSWORD",
          FORGOT_PASSWORD: "FORGOT_PASSWORD",
        }),
        (t.changePasswordEnum = {
          CHANGE_PASSWORD: "CHANGE_PASSWORD",
          CHANGE_WITHDRAWAL_PASSWORD: "CHANGE_WITHDRAWAL_PASSWORD",
        }),
        (t.validatePageEnum = {
          mobile: "1",
          email: "2",
        }),
        (t.BlockTypesEnum = {
          BLOCK_DEPOSIT: "blockDeposit",
          BLOCK_WITHDRAW: "blockWithdrawal",
          BLOCK_LAUNCH_GAME: "blockLaunchGame",
          BLOCK_BANK_CARD_ADD: "blockBankCard",
          BLOCK_BANK_CARD_EDIT: "blockEditBankCard",
          BLOCK_MEMBER_CENTER: "blockMemberCenter",
          BLOCK_CHANGE_PASSWORD: "blockChangePassword",
          BLOCK_CHANGE_WITHDRAWAL_PASSWORD: "blockChangeWithdrawalPassword",
          BLOCK_FORGOT_PASSWORD: "blockForgotPassword",
          BLOCK_CRYPTO_WALLET_ADD: "blockCryptoWallet",
          BLOCK_CRYPTO_WALLET_EDIT: "blockEditCryptoWallet",
        }),
        (t.staticPageSettingTypeEnum = {
          INFO: "Info",
          SIGN_UP: "Signup",
          AGENT: "Agent",
          CONTENT: "Content",
          APP: "App",
          AGENTTUTORIAL: "AgentTutorial",
        }),
        (t.claimTypeEnum = {
          ANYTIME: "ANYTIME",
          PROMO: "PROMO",
        }),
        (t.sportsBookEnum = {
          SABA: "/sportsbook",
          UFA: "/ufa",
        });
    },
    8921: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { tiktok: _ } = n.default.brand;
      let E = "";
      try {
        E = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/tiktok.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = async () => {
        const e = (0, o.getURLParams)("tt") || (0, o.getDomainId)(E) || _;
        e &&
          (0, o.pageLoadedAction)(() => {
            const t = document.createElement("script"),
              r = `\n        !function (w, d, t) {\n          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var i="https://analytics.tiktok.com/i18n/pixel/events.js";ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=i,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src=i+"?sdkid="+e+"&lib="+t;var a=document.getElementsByTagName("script")[0];a.parentNode.insertBefore(o,a)};\n          ttq.load('${e}');\n          ttq.page();\n        }(window, document, 'ttq');\n      `;
            t.appendChild(document.createTextNode(r)),
              document.head.appendChild(t);
          });
      };
    },
    9423: (e, t, r) => {
      "use strict";
      r.r(t),
        r.d(t, {
          default: () => a,
        }),
        (e = r.hmd(e));
      const a = (function (e) {
        var t,
          r = e.Symbol;
        return (
          "function" == typeof r
            ? r.observable
              ? (t = r.observable)
              : ((t = r("observable")), (r.observable = t))
            : (t = "@@observable"),
          t
        );
      })(
        "undefined" != typeof self
          ? self
          : "undefined" != typeof window
          ? window
          : void 0 !== r.g
          ? r.g
          : e
      );
    },
    9957: (e, t, r) => {
      "use strict";
      var a = Function.prototype.call,
        n = Object.prototype.hasOwnProperty,
        o = r(66743);
      e.exports = o.call(a, n);
    },
    10076: (e) => {
      "use strict";
      e.exports = Function.prototype.call;
    },
    10487: (e, t, r) => {
      "use strict";
      var a = r(96897),
        n = r(30655),
        o = r(73126),
        _ = r(12205);
      (e.exports = function (e) {
        var t = o(arguments),
          r = e.length - (arguments.length - 1);
        return a(t, 1 + (r > 0 ? r : 0), !0);
      }),
        n
          ? n(e.exports, "apply", {
              value: _,
            })
          : (e.exports.apply = _);
    },
    10550: (e, t, r) => {
      "use strict";
      e.exports = r(62066);
    },
    10604: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      const a = (0, r(57971).createBrowserHistory)();
      t.default = a;
    },
    11002: (e) => {
      "use strict";
      e.exports = Function.prototype.apply;
    },
    12205: (e, t, r) => {
      "use strict";
      var a = r(66743),
        n = r(11002),
        o = r(13144);
      e.exports = function () {
        return o(a, n, arguments);
      };
    },
    13081: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.useFirstMountState = void 0);
      var a = r(96540);
      t.useFirstMountState = function () {
        var e = a.useRef(!0);
        return e.current ? ((e.current = !1), !0) : e.current;
      };
    },
    13144: (e, t, r) => {
      "use strict";
      var a = r(66743),
        n = r(11002),
        o = r(10076),
        _ = r(47119);
      e.exports = _ || a.call(o, n);
    },
    13541: (e) => {
      "use strict";
      e.exports = function (e) {
        return "string" == typeof e || "symbol" == typeof e;
      };
    },
    15026: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(r(96540));
      var n = a(r(83736)),
        o = a(r(72524)),
        _ = a(r(32080)),
        E = r(68686),
        i = a(r(36412)),
        s = r(74848);
      t.default = (e) => {
        const [t, r] = (0, o.default)({
          data: {},
        });
        return (
          (0, n.default)(() => {
            (0, _.default)({
              url: `${E.baseURL}/games/enabledGameProviders`,
              method: "GET",
            }).then((e) => {
              const t = e.payload.reduce((e, t) => {
                let r = t.gameprovidername;
                return (
                  (e[t.gameproviderid] = r),
                  (e[`${t.gameproviderid}${t.distributorid}`] = r),
                  e
                );
              }, {});
              r({
                data: t,
              });
            });
          }),
          (0, s.jsx)(i.default.Provider, {
            value: (e, r, a) => {
              let n;
              return (
                e &&
                  ((n = r ? t.data[`${e}${r}`] : t.data[e]),
                  a &&
                    (n = ((e) => {
                      if (!e) return "";
                      switch (e) {
                        case "UGAMING":
                          e = "UNITED GAMING";
                          break;
                        case "SV":
                          e = "SV388";
                          break;
                        case "EVO":
                          e = "EVOLUTION";
                          break;
                        case "DG":
                          e = "DREAM GAMING";
                          break;
                        case "VIA_CASINO":
                          e = "VIA CASINO";
                          break;
                        case "LC":
                          e = "V8";
                          break;
                        case "YL":
                          e = "YOULIAN";
                          break;
                        case "MG":
                          e = "MICROGAMING";
                          break;
                        case "OB_MPG":
                          e = "OB";
                          break;
                        case "RT":
                          e = "RED TIGER";
                          break;
                        case "FC":
                          e = "FA CHAI";
                          break;
                        case "PP":
                          e = "PRAGMATIC PLAY";
                          break;
                        case "LUCKY_SPORTS":
                          e = "LUCKY SPORTS";
                      }
                      return e;
                    })(n))),
                n || e || ""
              );
            },
            children: e.children,
          })
        );
      };
    },
    15062: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.paths = t.displayNewsGroup = t.default = void 0);
      const a = {
        ROOT: "/",
        EXAMPLE: "/example",
        LAUNCHGAME: "/launchgame",
        GOHOME: "/gohome",
        REWARDSTORE: "/rewardstore",
        PROMOTIONS: "/promotions",
        PROMODETAIL: "/promotions/:promoId",
        PROMO_AND_DETAIL: "/promotions/:promoId?",
        REDENVELOPE: "/red-envelope",
        VALID_BET_REDENVELOPE: "/v-red-envelope",
        USERREDENVELOPE: "/red-envelope/:promoId",
        LUCKYWHEEL: "/luckywheel",
        PROMO_CENTER: "/promoCenter",
        PROMO_CENTER_PROMO: "/promoCenter/promotion",
        PROMO_CENTER_CODE: "/promoCenter/promotionCode",
        PROMO_CENTER_WITH_DETAIL: "/promoCenter/:type?/:promoId?",
        VIEW_PROMO_REWARD: "/viewPromoReward",
        VIEW_PROMO_REWARD_WITH_DETAIL: "/viewPromoReward/:type?",
        BONUS: "/bonus",
        GAMELOBBY: "/gamelobby",
        LOTTERY: "/gamelobby/lottery",
        LIVE: "/gamelobby/live",
        EGAME: "/gamelobby/egame",
        SPORTS: "/gamelobby/sports",
        MPG: "/gamelobby/mpg",
        ANIMAL: "/gamelobby/animal",
        CHESS: "/gamelobby/chess",
        ESPORTS: "/gamelobby/esports",
        MINI_GAME: "/gamelobby/mini_games",
        FINANCE: "/gamelobby/finance",
        HOT_GAMES: "/gamelobby/hot_games",
        HOT_GAMES_2: "/gamelobby/hot_games_2",
        HOT_GAMES_3: "/gamelobby/hot_games_3",
        SABA: "/gamelobby/saba",
        GAMELOBBY_PROMOTION: "/gamelobby/promotions",
        FAVORITE_GAMES: "/gamelobby/favorites",
        CATEGORIES: "/gamelobby/categories",
        HOMEPARTNER: "/page/partner",
        ICE: "/page/ice",
        ACCOUNT: "/account",
        PROFILE: "/account/profile",
        VALIDATE_PAGE: "/account/validatePage",
        CHANGEPASSWORD: "/account/changePassword",
        CHANGELOGINPASSWORD: "/account/changeLoginPassword",
        CHANGEWITHDRAWALPASSWORD: "/account/changeWithdrawalPassword",
        ACTIVATEBYEMAIL: "/activate/:token",
        FORGETUSERNAME: "/forgetusername",
        WITHDRAWALACCOUNTS: "/account/withdrawaccounts",
        BANKCARDS: "/account/withdrawaccounts/bankcards",
        CRYPTOACCOUNTS: "/account/withdrawaccounts/cryptoAccounts",
        BANKCARDEDIT: "/account/bankcards/:paymentId/edit",
        MYWALLET: "/account/mywallet",
        BALANCE: "/balance",
        TRANSACTION: "/transaction",
        DEPOSIT: "/deposit",
        DEPOSITLIST: "/deposit",
        DEPOSIT_SUMMARY: "/deposit/summary/:service/:id",
        OFFLINEDEPOSIT: "/deposit/add",
        DEPOSITONLINE: "/deposit/online",
        DEPOSIT_QRBANK: "/deposit/qrbank",
        DEPOSIT_DEBIT_CARD: "/deposit/debitcard",
        DEPOSIT_ONLINE_BANKING: "/deposit/onlinebanking",
        DEPOSIT_CORPORATE_CRYPTO: "/deposit/corporate-crypto",
        DEPOSIT3RDPARTYPAYMENTADD: "/deposit/with/:service",
        DEPOSITCRYPTO: "/deposit/crypto",
        DEPOSITCREDITCARD: "/deposit/credit-card",
        DEPOSITSERVICEONLINEPOPUP: "/depositpopup/launch/:service",
        WITHDRAW: "/withdraw/audit",
        WITHDRAWMAIN: "/withdraw/main",
        WITHDRAWLIST: "/withdraw/audit",
        BANK_WITHDRAW_ADD: "/withdraw/bank-add",
        CRYPTO_WITHDRAW_ADD: "/withdraw/crypto-add",
        CONFIRMDEPOSIT: "/confirmation-deposit/:depositId",
        INBOX: "/inbox",
        GAMEHISTORY: "/game-history",
        GAMEHISTORYDETAIL: "/game-history/detail",
        PROMOHISTORY: "/promo-history",
        FINANHISTORY: "/finan-history",
        FINANHISTORY_DETAIL_TYPE: "/finan-history/:detailType",
        FINANHISTORYDEPOSIT: "/finan-history/deposit",
        FINANHISTORYWITHDRAWAL: "/finan-history/withdrawal",
        FINANHISTORYPROMOTION: "/finan-history/promotion",
        FINANHISTORYREBATE: "/finan-history/rebate",
        FINANHISTORYMANUALADJUSTMENT: "/finan-history/manualadjustment",
        FINAN_HISTORY_AFFILIATE: "/finan-history/affiliate",
        FINAN_HISTORY_MISSION: "/finan-history/mission",
        FINAN_HISTORY_ACTIVITY: "/finan-history/activity",
        FINAN_HISTORY_ACTIVITY_POINTS: "/finan-history/activity-points",
        LOGIN: "/login",
        SIGNUP: "/signup",
        AGENT_MODE: "/agent/agentMode",
        ULAGENT_APPLY: "/ulagent/apply",
        RESETINFO: "/resetInfo",
        PLAYERINFO: "/playerInfo",
        SEXYLINE: "/sexyline",
        SEXYLINE_GAME_HISTORY: "/sexyline/game-history",
        FORGETPASSWORD: "/forgetpassword",
        RESETPASSWORD: "/newpassword/:token",
        PAGE: "/page/:name",
        PAGE_KISS918: "/page/kiss918",
        PAGE_QR: "/page/QR",
        MY_VIP: "/myvip",
        INFO: "/info/:code",
        ABOUTUS: "/info/aboutUs",
        POLICY: "/info/userAgreement",
        DUTY: "/info/responsibleGambling",
        DISCLAIMER: "/info/disclaimer",
        PRIVACY: "/info/userPrivacy",
        DEPOSITHELP: "/info/depositHelp",
        WITHDRAWALHELP: "/info/withdrawalHelp",
        FAQ: "/info/commonProblem",
        PARTNER: "/info/partner",
        CONTACTUS: "/info/contactUs",
        USERAGREEMENT: "/info/userAgreement",
        RESPONSIBLEGAMBLING: "/info/responsibleGambling",
        CUSTOM1: "/info/custom1",
        CUSTOM3: "/info/custom3",
        AGENT: "/agent/:code",
        CONTENT: "/content/:displayname",
        HELP_CENTER: "/help-center",
        HELP_CENTER_ITEMS: "/help-center/:detailType",
        HELP_CENTER_DETAIL: "/help-center/:detailType/:detailCode",
        NEWS: "/news",
        NEWSDETAIL: "/news/:newsid",
        AFFILIATE: "/affiliate",
        NOTFOUND: "/notfound",
        AFFILIATE_DIRECT_MEMBERS: "/affiliateDirectMember",
        AFFILIATE_COMMISSION: "/affiliateCommission",
        AFFILIATE_RULE_DESC: "/affiliateRuleDesc",
        AFFILIATE_POSTER_MODAL: "/affiliatePosterModal",
        AFFILIATE_SETTLEMENT_DETAIL: "/affiliateSettlementDetail",
        MISSION: "/mission",
        VIP: "/vip",
        SSVIP: "/ssvip",
        AD: "/adWebpageShare/:id",
        BROKEN_LINK: "/brokenLink",
        DEMO_GAME: "/demoGame/:gameproviderid/:gameid",
        RESULT_CENTER: "/result-center",
        GAME_DETAIL_PAGE: "/game-detail",
        SPORT_PAGE: "/sport-page",
        CRICKET_PAGE: "/cricket-page",
        CASINO_PAGE: "/casino-page",
        DESKTOP_CASINO_PAGE: "/gamelobby/live/casino-page",
        CASINO_ROOM: "/play-via",
        SPORT_PAGE_DESKTOP: "/gamelobby/sports/sport-page",
        VIP_CLUB: "/vip-club",
        QUEST_HUB: "/quest",
        LUCKY_SPIN: "/lucky-spin",
        LOTTERY_EVENT: "/lottery-event",
        ...r(86797).A,
      };
      (t.displayNewsGroup = [a.GAMELOBBY, a.PROMOTIONS, a.SIGNUP]),
        (t.paths = Object.entries(a).reduce((e, t) => {
          let [r, a] = t;
          return (e[r] = "object" == typeof a ? a.pathname : a), e;
        }, {})),
        (t.default = a);
    },
    15129: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { gtm: _ } = n.default.brand;
      let E = "";
      try {
        E = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/gtm.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = () => {
        const e = (0, o.getURLParams)("gtm") || (0, o.getDomainId)(E) || _;
        e &&
          (0, o.pageLoadedAction)(() => {
            const t = document.createElement("script"),
              r = `\n          (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n          })(window,document,'script','dataLayer','${e}');\n        `;
            t.appendChild(document.createTextNode(r)),
              document.head.appendChild(t);
          });
      };
    },
    15287: (e, t) => {
      "use strict";
      var r = Symbol.for("react.element"),
        a = Symbol.for("react.portal"),
        n = Symbol.for("react.fragment"),
        o = Symbol.for("react.strict_mode"),
        _ = Symbol.for("react.profiler"),
        E = Symbol.for("react.provider"),
        i = Symbol.for("react.context"),
        s = Symbol.for("react.forward_ref"),
        T = Symbol.for("react.suspense"),
        A = Symbol.for("react.memo"),
        S = Symbol.for("react.lazy"),
        l = Symbol.iterator,
        u = {
          isMounted: function () {
            return !1;
          },
          enqueueForceUpdate: function () {},
          enqueueReplaceState: function () {},
          enqueueSetState: function () {},
        },
        c = Object.assign,
        R = {};
      function d(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = R),
          (this.updater = r || u);
      }
      function p() {}
      function I(e, t, r) {
        (this.props = e),
          (this.context = t),
          (this.refs = R),
          (this.updater = r || u);
      }
      (d.prototype.isReactComponent = {}),
        (d.prototype.setState = function (e, t) {
          if ("object" != typeof e && "function" != typeof e && null != e)
            throw Error(
              "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
            );
          this.updater.enqueueSetState(this, e, t, "setState");
        }),
        (d.prototype.forceUpdate = function (e) {
          this.updater.enqueueForceUpdate(this, e, "forceUpdate");
        }),
        (p.prototype = d.prototype);
      var P = (I.prototype = new p());
      (P.constructor = I), c(P, d.prototype), (P.isPureReactComponent = !0);
      var O = Array.isArray,
        f = Object.prototype.hasOwnProperty,
        m = {
          current: null,
        },
        L = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };
      function C(e, t, a) {
        var n,
          o = {},
          _ = null,
          E = null;
        if (null != t)
          for (n in (void 0 !== t.ref && (E = t.ref),
          void 0 !== t.key && (_ = "" + t.key),
          t))
            f.call(t, n) && !L.hasOwnProperty(n) && (o[n] = t[n]);
        var i = arguments.length - 2;
        if (1 === i) o.children = a;
        else if (1 < i) {
          for (var s = Array(i), T = 0; T < i; T++) s[T] = arguments[T + 2];
          o.children = s;
        }
        if (e && e.defaultProps)
          for (n in (i = e.defaultProps)) void 0 === o[n] && (o[n] = i[n]);
        return {
          $$typeof: r,
          type: e,
          key: _,
          ref: E,
          props: o,
          _owner: m.current,
        };
      }
      function y(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r;
      }
      var g = /\/+/g;
      function U(e, t) {
        return "object" == typeof e && null !== e && null != e.key
          ? (function (e) {
              var t = {
                "=": "=0",
                ":": "=2",
              };
              return (
                "$" +
                e.replace(/[=:]/g, function (e) {
                  return t[e];
                })
              );
            })("" + e.key)
          : t.toString(36);
      }
      function N(e, t, n, o, _) {
        var E = typeof e;
        ("undefined" !== E && "boolean" !== E) || (e = null);
        var i = !1;
        if (null === e) i = !0;
        else
          switch (E) {
            case "string":
            case "number":
              i = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case r:
                case a:
                  i = !0;
              }
          }
        if (i)
          return (
            (_ = _((i = e))),
            (e = "" === o ? "." + U(i, 0) : o),
            O(_)
              ? ((n = ""),
                null != e && (n = e.replace(g, "$&/") + "/"),
                N(_, t, n, "", function (e) {
                  return e;
                }))
              : null != _ &&
                (y(_) &&
                  (_ = (function (e, t) {
                    return {
                      $$typeof: r,
                      type: e.type,
                      key: t,
                      ref: e.ref,
                      props: e.props,
                      _owner: e._owner,
                    };
                  })(
                    _,
                    n +
                      (!_.key || (i && i.key === _.key)
                        ? ""
                        : ("" + _.key).replace(g, "$&/") + "/") +
                      e
                  )),
                t.push(_)),
            1
          );
        if (((i = 0), (o = "" === o ? "." : o + ":"), O(e)))
          for (var s = 0; s < e.length; s++) {
            var T = o + U((E = e[s]), s);
            i += N(E, t, n, T, _);
          }
        else if (
          ((T = (function (e) {
            return null === e || "object" != typeof e
              ? null
              : "function" == typeof (e = (l && e[l]) || e["@@iterator"])
              ? e
              : null;
          })(e)),
          "function" == typeof T)
        )
          for (e = T.call(e), s = 0; !(E = e.next()).done; )
            i += N((E = E.value), t, n, (T = o + U(E, s++)), _);
        else if ("object" === E)
          throw (
            ((t = String(e)),
            Error(
              "Objects are not valid as a React child (found: " +
                ("[object Object]" === t
                  ? "object with keys {" + Object.keys(e).join(", ") + "}"
                  : t) +
                "). If you meant to render a collection of children, use an array instead."
            ))
          );
        return i;
      }
      function D(e, t, r) {
        if (null == e) return e;
        var a = [],
          n = 0;
        return (
          N(e, a, "", "", function (e) {
            return t.call(r, e, n++);
          }),
          a
        );
      }
      function G(e) {
        if (-1 === e._status) {
          var t = e._result;
          (t = t()).then(
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 1), (e._result = t));
            },
            function (t) {
              (0 !== e._status && -1 !== e._status) ||
                ((e._status = 2), (e._result = t));
            }
          ),
            -1 === e._status && ((e._status = 0), (e._result = t));
        }
        if (1 === e._status) return e._result.default;
        throw e._result;
      }
      var M = {
          current: null,
        },
        F = {
          transition: null,
        },
        v = {
          ReactCurrentDispatcher: M,
          ReactCurrentBatchConfig: F,
          ReactCurrentOwner: m,
        };
      function h() {
        throw Error("act(...) is not supported in production builds of React.");
      }
      (t.Children = {
        map: D,
        forEach: function (e, t, r) {
          D(
            e,
            function () {
              t.apply(this, arguments);
            },
            r
          );
        },
        count: function (e) {
          var t = 0;
          return (
            D(e, function () {
              t++;
            }),
            t
          );
        },
        toArray: function (e) {
          return (
            D(e, function (e) {
              return e;
            }) || []
          );
        },
        only: function (e) {
          if (!y(e))
            throw Error(
              "React.Children.only expected to receive a single React element child."
            );
          return e;
        },
      }),
        (t.Component = d),
        (t.Fragment = n),
        (t.Profiler = _),
        (t.PureComponent = I),
        (t.StrictMode = o),
        (t.Suspense = T),
        (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = v),
        (t.act = h),
        (t.cloneElement = function (e, t, a) {
          if (null == e)
            throw Error(
              "React.cloneElement(...): The argument must be a React element, but you passed " +
                e +
                "."
            );
          var n = c({}, e.props),
            o = e.key,
            _ = e.ref,
            E = e._owner;
          if (null != t) {
            if (
              (void 0 !== t.ref && ((_ = t.ref), (E = m.current)),
              void 0 !== t.key && (o = "" + t.key),
              e.type && e.type.defaultProps)
            )
              var i = e.type.defaultProps;
            for (s in t)
              f.call(t, s) &&
                !L.hasOwnProperty(s) &&
                (n[s] = void 0 === t[s] && void 0 !== i ? i[s] : t[s]);
          }
          var s = arguments.length - 2;
          if (1 === s) n.children = a;
          else if (1 < s) {
            i = Array(s);
            for (var T = 0; T < s; T++) i[T] = arguments[T + 2];
            n.children = i;
          }
          return {
            $$typeof: r,
            type: e.type,
            key: o,
            ref: _,
            props: n,
            _owner: E,
          };
        }),
        (t.createContext = function (e) {
          return (
            ((e = {
              $$typeof: i,
              _currentValue: e,
              _currentValue2: e,
              _threadCount: 0,
              Provider: null,
              Consumer: null,
              _defaultValue: null,
              _globalName: null,
            }).Provider = {
              $$typeof: E,
              _context: e,
            }),
            (e.Consumer = e)
          );
        }),
        (t.createElement = C),
        (t.createFactory = function (e) {
          var t = C.bind(null, e);
          return (t.type = e), t;
        }),
        (t.createRef = function () {
          return {
            current: null,
          };
        }),
        (t.forwardRef = function (e) {
          return {
            $$typeof: s,
            render: e,
          };
        }),
        (t.isValidElement = y),
        (t.lazy = function (e) {
          return {
            $$typeof: S,
            _payload: {
              _status: -1,
              _result: e,
            },
            _init: G,
          };
        }),
        (t.memo = function (e, t) {
          return {
            $$typeof: A,
            type: e,
            compare: void 0 === t ? null : t,
          };
        }),
        (t.startTransition = function (e) {
          var t = F.transition;
          F.transition = {};
          try {
            e();
          } finally {
            F.transition = t;
          }
        }),
        (t.unstable_act = h),
        (t.useCallback = function (e, t) {
          return M.current.useCallback(e, t);
        }),
        (t.useContext = function (e) {
          return M.current.useContext(e);
        }),
        (t.useDebugValue = function () {}),
        (t.useDeferredValue = function (e) {
          return M.current.useDeferredValue(e);
        }),
        (t.useEffect = function (e, t) {
          return M.current.useEffect(e, t);
        }),
        (t.useId = function () {
          return M.current.useId();
        }),
        (t.useImperativeHandle = function (e, t, r) {
          return M.current.useImperativeHandle(e, t, r);
        }),
        (t.useInsertionEffect = function (e, t) {
          return M.current.useInsertionEffect(e, t);
        }),
        (t.useLayoutEffect = function (e, t) {
          return M.current.useLayoutEffect(e, t);
        }),
        (t.useMemo = function (e, t) {
          return M.current.useMemo(e, t);
        }),
        (t.useReducer = function (e, t, r) {
          return M.current.useReducer(e, t, r);
        }),
        (t.useRef = function (e) {
          return M.current.useRef(e);
        }),
        (t.useState = function (e) {
          return M.current.useState(e);
        }),
        (t.useSyncExternalStore = function (e, t, r) {
          return M.current.useSyncExternalStore(e, t, r);
        }),
        (t.useTransition = function () {
          return M.current.useTransition();
        }),
        (t.version = "18.3.1");
    },
    15361: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = r(96540),
        n = r(13081);
      t.default = function (e, t) {
        var r = n.useFirstMountState();
        a.useEffect(function () {
          if (!r) return e();
        }, t);
      };
    },
    15659: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(9404)),
        o = r(56291),
        _ = r(8087),
        E = r(24439),
        i = r(51628),
        s = r(15062),
        T = r(93185),
        A = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(30817));
      const S = {
        providerId: "",
        isLoading: !1,
        launchurl: null,
        launchurlSuccess: !1,
        launchurlFailed: !1,
        launchurlFailedDetail: null,
        gameTypeMap: n.default.Map(),
        gameProviderMap: n.default.Map(),
        allGameList: n.default.List(),
        last10Records: n.default.List(),
        maintenanceMap: n.default.Map(),
        underMaintenanceMap: n.default.Map(),
        underAndUpcomingMaintenanceMap: n.default.Map(),
        isUnderMaintenanceMapReady: !1,
        loadGameHistory: !1,
        loadGameHistorySuccess: !1,
        loadGameHistoryFailed: !1,
        gameHistoryList: n.default.List(),
        gameHistoryDetail: n.default.Map(),
        totalGameHistory: 0,
        gameHistorySummary: n.default.Map(),
        last10DaysGameHistory: n.default.List(),
        isLoadingInsuranceGameHistory: !1,
        insuranceGameHistory: n.default.List(),
        gameFormdataPayload: null,
        bbinGame: null,
        vrGame: null,
        myFavoriteGameMap: n.default.Map(),
        myFavoriteGameList: n.default.List(),
        myFavoriteGameGroupMap: n.default.Map(),
        iframeNotAllowed: !1,
        gameTagsMap: null,
        egameTabMap: n.default.Map(),
        egameLoading: !1,
        gameHistoryGameIds: n.default.Map(),
        upcomingSports: n.default.List(),
        navigationList: null,
        navigationGameTypeMap: null,
        hotGameTypeMap: n.default.Map(),
        gameProviderPresetByTypesMap: n.default.Map(),
        isSportHomePage: void 0,
        isLiveSeparateGames: !1,
        initialRedirectSportPage: !1,
        raceRecord: n.default.fromJS({
          latestBetList: [],
          highRollerList: [],
        }),
        allGameNameMap: n.default.Map(),
        hasSABASport: !1,
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : S,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case A.AJAX_GET_MAINTENANCE_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_GET_MAINTENANCE_LIST_SUCCESS: {
            let r = n.default.Map(),
              a = {},
              o = [];
            const _ = new Date().getTime();
            return (
              t.payload.forEach((e) => {
                1 === e.status && ((a[e.gameproviderid] = e), o.push(e)),
                  e.nextstarttime > _ && o.push(e);
                let t = n.default.Map();
                if (r.get(e.producttypeid))
                  r = r.setIn(
                    [e.producttypeid, e.gameproviderid],
                    n.default.fromJS(e)
                  );
                else {
                  const a = t.set(e.gameproviderid, n.default.fromJS(e));
                  r = r.set(e.producttypeid, a);
                }
              }),
              (o = o.sort((e, t) =>
                e.gameproviderid.localeCompare(t.gameproviderid)
              )),
              {
                ...e,
                isLoading: !1,
                maintenanceMap: r,
                underMaintenanceMap: n.default.fromJS(a),
                underAndUpcomingMaintenanceMap: n.default.fromJS(o),
                isUnderMaintenanceMapReady: !0,
              }
            );
          }
          case A.AJAX_GET_MAINTENANCE_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.UPDATE_MAINTENANCE_LIST: {
            const r = t.payload.reduce((e, t) => {
              let r = e;
              return (
                (r = r.setIn(
                  [t.producttypeid, t.gameproviderid],
                  n.default.fromJS(t)
                )),
                r
              );
            }, e.maintenanceMap);
            return {
              ...e,
              maintenanceMap: r,
            };
          }
          case A.AJAX_PUT_LAUNCH_GAME_REQUEST:
            return {
              ...e,
              isLoading: !0,
              launchurl: null,
              launchurlSuccess: !1,
              launchurlFailed: !1,
              gameFormdataPayload: null,
              bbinGame: null,
              vrGame: null,
              iframeNotAllowed: !1,
            };
          case A.AJAX_PUT_LAUNCH_GAME_SUCCESS: {
            if ("object" == typeof t.payload && void 0 !== t.payload.cookie) {
              const {
                cookie: e,
                cookiename: r,
                domain: a,
                cookieexpireseconds: n,
              } = t.payload;
              (0, o.setCookie)(r, e, n, a);
            }
            let r = t.payload.launchurl;
            return (
              "SPLUS" === t.gameproviderid &&
                (r = r.replace("showBackButton=true", "showBackButton=false")),
              {
                ...e,
                isLoading: !1,
                launchurl: r,
                launchurlSuccess: !0,
                iframeNotAllowed: t.payload.iframeNotAllowed,
                lauchGamePayload: t.payload,
                gameFormdataPayload:
                  t.payload.formdata && "POST" === t.payload.method
                    ? t.payload
                    : null,
              }
            );
          }
          case A.AJAX_PUT_LAUNCH_GAME_FAILURE:
            return {
              ...e,
              isLoading: !1,
              launchurl: null,
              launchurlFailed: !0,
              launchurlFailedDetail: t.error.payload,
            };
          case A.AJAX_GET_ALL_GAME_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_GET_ALL_GAME_LIST_SUCCESS: {
            const {
                ecPopularGames: r,
                gameWithTags: a,
                menuBarSetting: o,
              } = t.payload,
              T = n.default
                .fromJS(r)
                .filter((e) => e.has("popularGameType"))
                .groupBy((e) => e.get("popularGameType"));
            let {
              navigationList: A,
              navigationGameTypeMap: S,
              isSportHomePage: l,
            } = (function (e) {
              let t = !1;
              const r = n.default.fromJS(
                  e
                    .filter((e) => "SPORT_PAGE" !== e.content || ((t = !0), !1))
                    .sort((e, t) => e.seq - t.seq)
                    .map((e) => {
                      let {
                        content: t,
                        ecProductName: r,
                        gameProviders: a,
                        menuBarType: n,
                        newWindow: o,
                        preset: _,
                        iconImageUrl: E,
                      } = e;
                      return {
                        content: t,
                        ecProductName: r[i.currLocale] || r["en-US"],
                        gameProviders:
                          null == a
                            ? void 0
                            : a
                                .sort((e, t) => e.seq - t.seq)
                                .map((e) => {
                                  let {
                                    gameProvider: t,
                                    useDefault: r,
                                    imageUrl: a,
                                    preset: n,
                                  } = e;
                                  return {
                                    gameProvider: t,
                                    useDefault: r,
                                    imageUrl: a,
                                    preset: n,
                                  };
                                }),
                        menuBarType: n,
                        newWindow: o,
                        preset: _,
                        iconImageUrl: E,
                      };
                    })
                ),
                a = r.reduce(
                  (e, t) => (
                    t.get("menuBarType") === E.menuBarTypeEnum.PRODUCT &&
                      ((t = t.set(
                        "gameProviders",
                        t.get("gameProviders").map((e) => e.get("gameProvider"))
                      )),
                      (e = e.set(t.get("content"), t))),
                    e
                  ),
                  n.default.OrderedMap()
                );
              return {
                navigationList: r,
                navigationGameTypeMap: a,
                isSportHomePage: t,
              };
            })(o);
            const {
                gameTypeMap: u,
                gameProviderMap: c,
                isLiveSeparateGames: R,
                hasSABASport: d,
              } = (function (e, t) {
                let r = !1,
                  a = !1;
                const o = e
                    .groupBy(
                      (e) => (
                        "SABA" === e.get("gameproviderid") &&
                          "SPORTS" === e.get("producttypeid") &&
                          (a = !0),
                        e.get("producttypeid")
                      )
                    )
                    .sort((e, r) => {
                      let a = t._map.get(e.getIn([0, "producttypeid"])),
                        n = t._map.get(r.getIn([0, "producttypeid"]));
                      return isNaN(a) && (a = 99), isNaN(n) && (n = 99), a - n;
                    })
                    .map((e, a) => {
                      let o = e.groupBy((e) => e.get("gameproviderid"));
                      return (
                        a === _.gameType.LIVE &&
                          ((r = o.some((e) => e.size > 1)),
                          (o = (function (e) {
                            let t = e;
                            return (
                              ["MOTIVATION", "VIA_CASINO"].forEach((e) => {
                                var r;
                                (null === (r = t.get(e)) || void 0 === r
                                  ? void 0
                                  : r.size) > 0 &&
                                  (t = t.update(e, (e) =>
                                    e.sortBy((e) =>
                                      "LOBBY" === e.get("gamegroupid") ? 0 : 1
                                    )
                                  ));
                              }),
                              t
                            );
                          })(o))),
                        o.sort((e, r) => {
                          let o = t
                              .getIn([a, "gameProviders"], n.default.List())
                              .findIndex(
                                (t) => t === e.getIn([0, "gameproviderid"])
                              ),
                            _ = t
                              .getIn([a, "gameProviders"], n.default.List())
                              .findIndex(
                                (e) => e === r.getIn([0, "gameproviderid"])
                              );
                          return (
                            -1 === o && (o = 99), -1 === _ && (_ = 99), o - _
                          );
                        })
                      );
                    }),
                  E = o.map((e) =>
                    e.reduce((e, t) => e.concat(t), n.default.List())
                  );
                return {
                  gameTypeMap: E,
                  gameProviderMap: o.map((e) => e.map((e, t) => t)),
                  isLiveSeparateGames: r,
                  hasSABASport: a,
                };
              })(a.data, S),
              p = ((e) =>
                e.reduce((e, t) => {
                  if (t.get("menuBarType") === E.menuBarTypeEnum.PRODUCT) {
                    var r;
                    const a =
                      (null ===
                        (r = ((e) =>
                          e.get("gameProviders").find((e) => e.get("preset")))(
                          t
                        )) || void 0 === r
                        ? void 0
                        : r.get("gameProvider")) || "";
                    e = e.set(t.get("content"), a);
                  }
                  return e;
                }, n.default.Map()))(A);
            return (
              (A = (function (e, t) {
                return e
                  .map((e) => {
                    if (e.get("menuBarType") === E.menuBarTypeEnum.PRODUCT) {
                      const r = e.get("content");
                      return t.has(r)
                        ? e.set(
                            "gameProviders",
                            e.get("gameProviders").filter((e) => {
                              const a = e.get("gameProvider");
                              return t.hasIn([r, a]);
                            })
                          )
                        : null;
                    }
                    return e;
                  })
                  .filter((e) => e);
              })(A, c)),
              {
                ...e,
                isLoading: !1,
                gameTypeMap: u,
                gameProviderMap: c,
                allGameList: a.data,
                navigationList: A,
                navigationGameTypeMap: S,
                hotGameTypeMap: T,
                gameProviderPresetByTypesMap: p,
                isSportHomePage: l,
                isLiveSeparateGames: R,
                initialRedirectSportPage:
                  l && window.location.pathname === s.paths.ROOT,
                hasSABASport: d,
              }
            );
          }
          case A.AJAX_GET_ALL_GAME_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_GET_ALL_GAME_NAME_SUCCESS:
            return {
              ...e,
              allGameNameMap: n.default.fromJS(t.payload),
            };
          case A.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              last10DaysGameHistory: n.default.List(t.payload),
            };
          case A.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST:
            return {
              ...e,
              isLoadingInsuranceGameHistory: !0,
            };
          case A.AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS:
            return {
              ...e,
              isLoadingInsuranceGameHistory: !1,
              insuranceGameHistory: n.default.List(t.payload.data),
            };
          case A.AJAX_GET_INSURANCE_GAME_HISTORY_FAILURE:
            return {
              ...e,
              isLoadingInsuranceGameHistory: !1,
            };
          case A.AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST:
          case A.AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST:
            return {
              ...e,
              loadGameHistory: !0,
              loadGameHistorySuccess: !1,
              loadGameHistoryFailed: !1,
            };
          case A.AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS:
          case A.AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS: {
            const {
              payload: { data: r, total: a, summary: o },
            } = t;
            return {
              ...e,
              gameHistoryList: n.default.List(r),
              totalGameHistory: a,
              gameHistorySummary: n.default.Map(o),
              loadGameHistory: !1,
              loadGameHistorySuccess: !0,
              loadGameHistoryFailed: !1,
            };
          }
          case A.AJAX_GET_GAME_HISTORY_DETAIL_REQUEST:
            return {
              ...e,
            };
          case A.AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS:
            return {
              ...e,
              gameHistoryDetail: e.gameHistoryDetail.set(
                t.txnid,
                n.default.fromJS(t.payload)
              ),
            };
          case A.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE:
          case A.AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE:
          case A.AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE:
            return {
              ...e,
              loadGameHistory: !1,
              loadGameHistorySuccess: !1,
              loadGameHistoryFailed: !0,
            };
          case A.AJAX_GET_LAST_10_RECORDS_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_GET_LAST_10_RECORDS_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              last10Records: n.default.List(t.payload),
            };
          case A.AJAX_GET_LAST_10_RECORDS_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS: {
            let r = n.default.fromJS(t.payload),
              a = new n.default.Map();
            r.size > 0 &&
              r.forEach((e) => {
                a = a.set((0, T.getMyFavoriteGameKey)(e), !0);
              });
            const o = r.groupBy((e) => e.get("producttypeid"));
            return {
              ...e,
              myFavoriteGameMap: a,
              myFavoriteGameList: r,
              myFavoriteGameGroupMap: o,
              isLoading: !1,
            };
          }
          case A.AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_POST_MY_FAVORITE_GAME_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_POST_MY_FAVORITE_GAME_SUCCESS: {
            let r = e.myFavoriteGameList.push(t.data);
            const a = r.groupBy((e) => e.get("producttypeid"));
            return {
              ...e,
              isLoading: !1,
              myFavoriteGameList: r,
              myFavoriteGameMap: e.myFavoriteGameMap.set(
                (0, T.getMyFavoriteGameKey)(t.data),
                !0
              ),
              myFavoriteGameGroupMap: a,
            };
          }
          case A.AJAX_POST_MY_FAVORITE_GAME_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_DELETE_MY_FAVORITE_GAME_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case A.AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS: {
            const r = (0, T.getMyFavoriteGameKey)(t.data),
              a = e.myFavoriteGameList.filter(
                (e) => (0, T.getMyFavoriteGameKey)(e) !== r
              ),
              o = a.groupBy((e) => e.get("producttypeid"));
            return {
              ...e,
              isLoading: !1,
              myFavoriteGameList: a,
              myFavoriteGameMap: e.myFavoriteGameMap.remove(
                (0, T.getMyFavoriteGameKey)(n.default.fromJS(t.data))
              ),
              myFavoriteGameGroupMap: o,
            };
          }
          case A.AJAX_DELETE_MY_FAVORITE_GAME_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case A.AJAX_GET_GAME_TAGS_SUCCESS: {
            const r = n.default
              .fromJS(t.payload)
              .groupBy((e) => e.get("productType"));
            let a = e.egameTabMap;
            return (
              e.gameTagsMap &&
                e.gameTagsMap.get("EGAME").forEach((e) => {
                  a = a.remove(e.get("tagid"));
                }),
              {
                ...e,
                gameTagsMap: r,
                egameTabMap: a,
              }
            );
          }
          case A.AJAX_GET_EGAME_GAMES_REQUEST:
            return {
              ...e,
              egameLoading: !0,
            };
          case A.AJAX_GET_EGAME_GAMES_SUCCESS: {
            let { sort: r, gamename: a, payload: o } = t;
            const _ = Array.isArray(o.data)
                ? o.data.sort(T.compareGameTags)
                : [],
              E = n.default.fromJS({
                data: _,
                search: {
                  sort: r,
                  gamename: a,
                },
              });
            return {
              ...e,
              egameLoading: !1,
              egameTabMap: e.egameTabMap.set(
                `${t.gameproviderid || "all"}-${t.tagid || "all"}`,
                E
              ),
            };
          }
          case A.AJAX_GET_EGAME_GAMES_FAILURE:
            return {
              ...e,
              egameLoading: !1,
              egameTabMap: e.egameTabMap.set(
                `${t.gameproviderid || "all"}-${t.tagid || "all"}`,
                n.default.Map()
              ),
            };
          case A.REMOVE_GAME_CACHE:
            return {
              ...e,
              egameTabMap: n.default.Map(),
            };
          case A.AJAX_GET_ALL_GAME_IDS_SUCCESS:
            if (t.producttypeid) {
              let r = n.default.fromJS(t.payload.data);
              r = r.map((e) =>
                n.default.Map({
                  gameid: e.get("gameid"),
                  gamename: (0, T.getName)(e.get("gamename")),
                  distributorid: e.get("distributorid"),
                  gameproviderid: e.get("gameproviderid"),
                  gamegroupid: e.get("gamegroupid"),
                })
              );
              const a = e.gameHistoryGameIds.set(t.producttypeid, r);
              return {
                ...e,
                gameHistoryGameIds: a,
              };
            }
            return e;
          case A.GET_UPCOMING_SPORTS_SUCCESS:
            return {
              ...e,
              upcomingSports: n.default.fromJS(t.payload),
            };
          case A.REDIRECT_SPORT_PAGE:
            return {
              ...e,
              initialRedirectSportPage: !1,
            };
          case A.UPDATE_RACE_RECORD: {
            const { payload: r } = t,
              {
                distributorId: a,
                gameProviderId: o,
                gameId: _,
                largerBetAmount: E,
              } = r[0],
              i = e.allGameNameMap.getIn([a, o, _]);
            if (!i) return e;
            const s = n.default.fromJS({
                ...r[0],
                id: Date.now(),
                gameName: i,
              }),
              T = (e) => e.unshift(s).slice(0, 50),
              A = e.raceRecord
                .update("latestBetList", T)
                .update("highRollerList", E ? T : (e) => e);
            return {
              ...e,
              raceRecord: A,
            };
          }
          default:
            return e;
        }
      };
    },
    17676: (e) => {
      "use strict";
      e.exports = function (e, t) {
        if (!e) throw new Error("Invariant failed");
      };
    },
    18676: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.GET_STATIC_PAGE_ORDERS_SUCCESS =
          t.GET_STATIC_PAGE_ORDERS_REQUEST =
          t.GET_STATIC_PAGE_ORDERS_FAILURE =
          t.GET_STATIC_PAGE_CONTENT_V2_SUCCESS =
          t.GET_STATIC_PAGE_CONTENT_V2_REQUEST =
          t.GET_STATIC_PAGE_CONTENT_V2_FAILURE =
          t.GET_STATIC_PAGE_CONTENT_SUCCESS =
          t.GET_STATIC_PAGE_CONTENT_REQUEST =
          t.GET_STATIC_PAGE_CONTENT_FAILURE =
          t.GET_STATIC_PAGE_CONTENT_BY_NAME_SUCCESS =
          t.GET_STATIC_PAGE_CONTENT_BY_NAME_REQUEST =
          t.GET_STATIC_PAGE_CONTENT_BY_NAME_FAILURE =
          t.GET_STATIC_PAGES_SUCCESS =
          t.GET_STATIC_PAGES_REQUEST =
          t.GET_STATIC_PAGES_FAILURE =
            void 0),
        (t.GET_STATIC_PAGES_REQUEST = "GET_STATIC_PAGES_REQUEST"),
        (t.GET_STATIC_PAGES_SUCCESS = "GET_STATIC_PAGES_SUCCESS"),
        (t.GET_STATIC_PAGES_FAILURE = "GET_STATIC_PAGES_FAILURE"),
        (t.GET_STATIC_PAGE_CONTENT_REQUEST = "GET_STATIC_PAGE_CONTENT_REQUEST"),
        (t.GET_STATIC_PAGE_CONTENT_SUCCESS = "GET_STATIC_PAGE_CONTENT_SUCCESS"),
        (t.GET_STATIC_PAGE_CONTENT_FAILURE = "GET_STATIC_PAGE_CONTENT_FAILURE"),
        (t.GET_STATIC_PAGE_ORDERS_REQUEST = "GET_STATIC_PAGES_ORDERS_REQUEST"),
        (t.GET_STATIC_PAGE_ORDERS_SUCCESS = "GET_STATIC_PAGES_ORDERS_SUCCESS"),
        (t.GET_STATIC_PAGE_ORDERS_FAILURE = "GET_STATIC_PAGES_ORDERS_FAILURE"),
        (t.GET_STATIC_PAGE_CONTENT_V2_REQUEST =
          "GET_STATIC_PAGE_CONTENT_V2_REQUEST"),
        (t.GET_STATIC_PAGE_CONTENT_V2_SUCCESS =
          "GET_STATIC_PAGE_CONTENT_V2_SUCCESS"),
        (t.GET_STATIC_PAGE_CONTENT_V2_FAILURE =
          "GET_STATIC_PAGE_CONTENT_V2_FAILURE"),
        (t.GET_STATIC_PAGE_CONTENT_BY_NAME_REQUEST =
          "GET_STATIC_PAGE_CONTENT_BY_NAME_REQUEST"),
        (t.GET_STATIC_PAGE_CONTENT_BY_NAME_SUCCESS =
          "GET_STATIC_PAGE_CONTENT_BY_NAME_SUCCESS"),
        (t.GET_STATIC_PAGE_CONTENT_BY_NAME_FAILURE =
          "GET_STATIC_PAGE_CONTENT_BY_NAME_FAILURE");
    },
    19593: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.navToHotGameProviderMobile = void 0);
      var a = r(39418);
      t.navToHotGameProviderMobile = function (e, t, r, n) {
        let o =
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        return (
          !!(0, a.isHotGameToProviderPage)(e) &&
          (n &&
            n({
              type: t,
              provider: r,
              showGameList: o,
            }),
          !0)
        );
      };
    },
    20311: (e) => {
      "use strict";
      e.exports = function (e, t, r, a, n, o, _, E) {
        if (!e) {
          var i;
          if (void 0 === t)
            i = new Error(
              "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
            );
          else {
            var s = [r, a, n, o, _, E],
              T = 0;
            (i = new Error(
              t.replace(/%s/g, function () {
                return s[T++];
              })
            )).name = "Invariant Violation";
          }
          throw ((i.framesToPop = 1), i);
        }
      };
    },
    21020: (e, t, r) => {
      "use strict";
      var a = r(96540),
        n = Symbol.for("react.element"),
        o = Symbol.for("react.fragment"),
        _ = Object.prototype.hasOwnProperty,
        E =
          a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED
            .ReactCurrentOwner,
        i = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0,
        };
      function s(e, t, r) {
        var a,
          o = {},
          s = null,
          T = null;
        for (a in (void 0 !== r && (s = "" + r),
        void 0 !== t.key && (s = "" + t.key),
        void 0 !== t.ref && (T = t.ref),
        t))
          _.call(t, a) && !i.hasOwnProperty(a) && (o[a] = t[a]);
        if (e && e.defaultProps)
          for (a in (t = e.defaultProps)) void 0 === o[a] && (o[a] = t[a]);
        return {
          $$typeof: n,
          type: e,
          key: s,
          ref: T,
          props: o,
          _owner: E.current,
        };
      }
      (t.Fragment = o), (t.jsx = s), (t.jsxs = s);
    },
    21412: (e, t, r) => {
      "use strict";
      var a = r(70453)("%Array%"),
        n = !a.isArray && r(36556)("Object.prototype.toString");
      e.exports =
        a.isArray ||
        function (e) {
          return "[object Array]" === n(e);
        };
    },
    21455: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.GameLobbyProvider = void 0),
        a(r(96540));
      var n = a(r(53259)),
        o = a(r(7032)),
        _ = r(74848);
      const E = (t.GameLobbyProvider = (0, n.default)({
        loader: () => r.e(6287).then(r.bind(r, 16287)),
        loading: o.default,
      }));
      t.default = (e) => {
        let { children: t } = e;
        return (0, _.jsx)(E, {
          children: t,
        });
      };
    },
    22069: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(6199)),
        n = r(9404);
      const o = {
        isLoading: !1,
        jackpotinfos: (0, n.List)(),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.AJAX_GET_JACKPOT_INFOS_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case a.AJAX_GET_JACKPOT_INFOS_SUCCESS: {
            const r = (0, n.fromJS)(t.payload.data).reduce((e, t) => {
              const r = e.findIndex(
                (e) => e.get("gameproviderid") === t.get("gameproviderid")
              );
              return r > -1
                ? e.setIn(
                    [r, "jackPotMeter"],
                    e.getIn([r, "jackPotMeter"]) + t.get("jackPotMeter")
                  )
                : e.push(
                    (0, n.Map)({
                      gameproviderid: t.get("gameproviderid"),
                      jackPotMeter: t.get("jackPotMeter"),
                    })
                  );
            }, (0, n.List)());
            return {
              ...e,
              isLoading: !1,
              jackpotinfos: r,
            };
          }
          case a.AJAX_GET_JACKPOT_INFOS_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          default:
            return e;
        }
      };
    },
    22799: (e, t) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        a = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        o = r ? Symbol.for("react.fragment") : 60107,
        _ = r ? Symbol.for("react.strict_mode") : 60108,
        E = r ? Symbol.for("react.profiler") : 60114,
        i = r ? Symbol.for("react.provider") : 60109,
        s = r ? Symbol.for("react.context") : 60110,
        T = r ? Symbol.for("react.async_mode") : 60111,
        A = r ? Symbol.for("react.concurrent_mode") : 60111,
        S = r ? Symbol.for("react.forward_ref") : 60112,
        l = r ? Symbol.for("react.suspense") : 60113,
        u = r ? Symbol.for("react.suspense_list") : 60120,
        c = r ? Symbol.for("react.memo") : 60115,
        R = r ? Symbol.for("react.lazy") : 60116,
        d = r ? Symbol.for("react.block") : 60121,
        p = r ? Symbol.for("react.fundamental") : 60117,
        I = r ? Symbol.for("react.responder") : 60118,
        P = r ? Symbol.for("react.scope") : 60119;
      function O(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case a:
              switch ((e = e.type)) {
                case T:
                case A:
                case o:
                case E:
                case _:
                case l:
                  return e;
                default:
                  switch ((e = e && e.$$typeof)) {
                    case s:
                    case S:
                    case R:
                    case c:
                    case i:
                      return e;
                    default:
                      return t;
                  }
              }
            case n:
              return t;
          }
        }
      }
      function f(e) {
        return O(e) === A;
      }
      (t.AsyncMode = T),
        (t.ConcurrentMode = A),
        (t.ContextConsumer = s),
        (t.ContextProvider = i),
        (t.Element = a),
        (t.ForwardRef = S),
        (t.Fragment = o),
        (t.Lazy = R),
        (t.Memo = c),
        (t.Portal = n),
        (t.Profiler = E),
        (t.StrictMode = _),
        (t.Suspense = l),
        (t.isAsyncMode = function (e) {
          return f(e) || O(e) === T;
        }),
        (t.isConcurrentMode = f),
        (t.isContextConsumer = function (e) {
          return O(e) === s;
        }),
        (t.isContextProvider = function (e) {
          return O(e) === i;
        }),
        (t.isElement = function (e) {
          return "object" == typeof e && null !== e && e.$$typeof === a;
        }),
        (t.isForwardRef = function (e) {
          return O(e) === S;
        }),
        (t.isFragment = function (e) {
          return O(e) === o;
        }),
        (t.isLazy = function (e) {
          return O(e) === R;
        }),
        (t.isMemo = function (e) {
          return O(e) === c;
        }),
        (t.isPortal = function (e) {
          return O(e) === n;
        }),
        (t.isProfiler = function (e) {
          return O(e) === E;
        }),
        (t.isStrictMode = function (e) {
          return O(e) === _;
        }),
        (t.isSuspense = function (e) {
          return O(e) === l;
        }),
        (t.isValidElementType = function (e) {
          return (
            "string" == typeof e ||
            "function" == typeof e ||
            e === o ||
            e === A ||
            e === E ||
            e === _ ||
            e === l ||
            e === u ||
            ("object" == typeof e &&
              null !== e &&
              (e.$$typeof === R ||
                e.$$typeof === c ||
                e.$$typeof === i ||
                e.$$typeof === s ||
                e.$$typeof === S ||
                e.$$typeof === p ||
                e.$$typeof === I ||
                e.$$typeof === P ||
                e.$$typeof === d))
          );
        }),
        (t.typeOf = O);
    },
    23071: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(9404)),
        o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(80125));
      const _ = {
        isLoading: !1,
        bankCards: n.default.List(),
        collections: n.default.List(),
        getCollectionsState: {
          loading: !1,
          suc: !1,
          err: !1,
          errMsg: "",
        },
        depositUuid: null,
        deposits: n.default.Map(),
        depositTotal: 0,
        newDepositId: null,
        deposit: n.default.Map(),
        transfers: n.default.Map(),
        transfersTotal: 0,
        addTransferSuccess: !1,
        addTransferFailed: !1,
        allFinanHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        depositHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        promoHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        rebateHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        manualAdjustmentHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        transferHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        affiliateHistory: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        finanSummary: n.default.Map(),
        finanHistoryDefaultTimeRange: n.default.Map(),
        applyInfo: {},
        addWithdrawalSuccess: !1,
        addWithdrawalFailed: !1,
        newWithdrawalId: null,
        withdrawal: n.default.Map(),
        getDepositApplyInfofromAPI: !1,
        depositApplyInfo: {},
        depositRevokedSuccess: !1,
        depositRevokedFailed: !1,
        bankCardsFromAPI: !1,
        isLoadingPostscript: !1,
        getPostscriptSuc: !1,
        getPostscriptErr: !1,
        depositPostscript: null,
        loadPersonalReportData: !1,
        loadPersonalReportDataSuc: !1,
        loadPersonalReportDataErr: !1,
        personalReportData: {},
        personalReportRedirectInfo: n.default.Map(),
        paymentInfoTemplate: {},
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case o.AJAX_GET_BANK_CARD_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
              bankCardsFromAPI: !1,
            };
          case o.AJAX_GET_BANK_CARD_LIST_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              bankCards: n.default.List(t.payload.data),
              bankCardsFromAPI: !0,
            };
          case o.AJAX_GET_BANK_CARD_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
              bankCardsFromAPI: !0,
            };
          case o.RESET_COLLECTIONS:
            return {
              ...e,
              collections: n.default.List(),
              getCollectionsState: {
                loading: !1,
                suc: !1,
                err: !1,
                errMsg: "",
              },
            };
          case o.AJAX_GET_COLLECTIONS_REQUEST:
            return {
              ...e,
              isLoading: !0,
              depositUuid: null,
              getCollectionsState: {
                loading: !0,
                suc: !1,
                err: !1,
                errMsg: "",
              },
            };
          case o.AJAX_GET_COLLECTIONS_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              getCollectionsState: {
                loading: !1,
                suc: !0,
                err: !1,
                errMsg: "",
              },
              collections: n.default.fromJS(t.payload),
            };
          case o.AJAX_GET_COLLECTIONS_FAILURE:
            return {
              ...e,
              getCollectionsState: {
                loading: !1,
                suc: !1,
                err: !0,
                errMsg: "",
              },
              isLoading: !1,
            };
          case o.AJAX_POST_DEPOSIT_UUID_REQUEST:
            return {
              ...e,
              isLoading: !0,
              newDepositId: null,
            };
          case o.AJAX_POST_DEPOSIT_UUID_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              depositUuid: t.payload,
            };
          case o.AJAX_POST_DEPOSIT_UUID_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.RESET_DEPOSIT_ID:
            return {
              ...e,
              depositUuid: null,
            };
          case o.AJAX_POST_DEPOSIT_POSTSCRIPT_REQUEST:
            return {
              ...e,
              isLoadingPostscript: !0,
              getPostscriptSuc: !1,
              getPostscriptErr: !1,
              depositPostscript: null,
            };
          case o.AJAX_POST_DEPOSIT_POSTSCRIPT_SUCCESS:
            return {
              ...e,
              isLoadingPostscript: !1,
              getPostscriptSuc: !0,
              getPostscriptErr: !1,
              depositPostscript: t.payload.postscript,
            };
          case o.AJAX_POST_DEPOSIT_POSTSCRIPT_FAILURE:
            return {
              ...e,
              isLoadingPostscript: !1,
              getPostscriptSuc: !1,
              getPostscriptErr: !0,
              depositPostscript: null,
            };
          case o.AJAX_POST_ADD_DEPOSIT_REQUEST:
            return {
              ...e,
              isLoading: !0,
              getPostscriptSuc: !1,
              getPostscriptErr: !1,
            };
          case o.AJAX_POST_ADD_DEPOSIT_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              newDepositId: t.payload,
              depositPostscript: null,
            };
          case o.AJAX_POST_ADD_DEPOSIT_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.AJAX_GET_DEPOSIT_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
              newDepositId: null,
              deposits: n.default.Map(),
              depositRevokedFailed: !1,
              depositRevokedSuccess: !1,
            };
          case o.AJAX_GET_DEPOSIT_LIST_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              deposits: t.payload.data.reduce(
                (e, t, r) => e.set(r, n.default.fromJS(t)),
                e.deposits
              ),
              depositTotal: t.payload.total,
            };
          case o.AJAX_GET_DEPOSIT_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.AJAX_GET_DEPOSIT_BY_ID_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case o.AJAX_GET_DEPOSIT_BY_ID_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              deposit: n.default.Map(t.payload),
            };
          case o.AJAX_GET_DEPOSIT_BY_ID_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.AJAX_GET_TRANSFERS_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
              addTransferSuccess: !1,
              addTransferFailed: !1,
              transfers: n.default.Map(),
            };
          case o.AJAX_GET_TRANSFERS_LIST_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              transfers: t.payload.data.reduce(
                (e, t, r) => e.set(r, n.default.fromJS(t)),
                e.transfers
              ),
              transfersTotal: t.payload.total,
            };
          case o.AJAX_GET_TRANSFERS_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
              addTransferSuccess: !1,
              addTransferFailed: !1,
            };
          case o.AJAX_POST_TRANSFER_REQUEST:
            return {
              ...e,
              isLoading: !0,
              addTransferSuccess: !1,
              addTransferFailed: !1,
            };
          case o.AJAX_POST_TRANSFER_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              addTransferSuccess: !0,
            };
          case o.AJAX_POST_TRANSFER_FAILURE:
            return {
              ...e,
              isLoading: !1,
              addTransferFailed: !0,
            };
          case o.GET_FINAN_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              finanHistoryDefaultTimeRange: n.default.fromJS(t.timeRange),
            };
          case o.GET_FINAN_HISTORY_REQUEST_SUCCESS: {
            const [r] = t.payload;
            return {
              ...e,
              isLoading: !1,
              finanSummary: n.default.fromJS({
                depositSummary: {
                  amtTotal: r.totaldeposit,
                },
                withdrawalSummary: {
                  amtTotal: r.totalwithdraw,
                },
                promoSummary: {
                  amtTotal: r.totalpromo,
                },
                rebateSummary: {
                  amtTotal: r.totalrebatevalue,
                },
                manualAdjustmentSummary: {
                  amtTotal: r.totaladjustamt,
                },
                affiliateSummary: {
                  amtTotal: r.totalsinglereferral,
                },
                missionSummary: {
                  amtTotal: r.totalMissionAmt,
                },
                activitySummary: {
                  amtTotal: r.totalActivityAmt,
                },
                activityPointsSummary: {
                  amtTotal: r.points,
                },
              }),
            };
          }
          case o.GET_FINAN_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_ALL_FINAN_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              finanHistoryDefaultTimeRange: n.default.fromJS(t.timeRange),
              allFinanHistory: t.shouldReset
                ? _.allFinanHistory
                : e.allFinanHistory,
            };
          case o.GET_ALL_FINAN_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              allFinanHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.txnid] = t), e),
                  e.allFinanHistory.get("objs")
                    ? e.allFinanHistory.get("objs").toJS()
                    : {}
                ),
                ids: e.allFinanHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.txnid)),
                total: a,
              }),
            };
          }
          case o.GET_ALL_FINAN_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_DEPOSIT_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              depositHistory: t.shouldReset
                ? _.depositHistory
                : e.depositHistory,
            };
          case o.GET_DEPOSIT_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              depositHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.depositid] = t), e),
                  e.depositHistory.get("objs")
                    ? e.depositHistory.get("objs").toJS()
                    : {}
                ),
                ids: e.depositHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.depositid)),
                total: a,
              }),
            };
          }
          case o.GET_DEPOSIT_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_PROMO_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              promoHistory: t.shouldReset ? _.promoHistory : e.promoHistory,
            };
          case o.GET_PROMO_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              promoHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.promoreqid] = t), e),
                  e.promoHistory.get("objs").toJS()
                ),
                ids: e.promoHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.promoreqid)),
                total: a,
              }),
            };
          }
          case o.GET_PROMO_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_REBATE_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              rebateHistory: t.shouldReset ? _.rebateHistory : e.rebateHistory,
            };
          case o.GET_REBATE_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              rebateHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.gamerebateid] = t), e),
                  e.rebateHistory.get("objs").toJS()
                ),
                ids: e.rebateHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.gamerebateid)),
                total: a,
              }),
            };
          }
          case o.GET_REBATE_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              manualAdjustmentHistory: t.shouldReset
                ? _.manualAdjustmentHistory
                : e.manualAdjustmentHistory,
            };
          case o.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              manualAdjustmentHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.txnid] = t), e),
                  e.manualAdjustmentHistory.get("objs").toJS()
                ),
                ids: e.manualAdjustmentHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.txnid)),
                total: a,
              }),
            };
          }
          case o.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_TRANSFER_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              transferHistory: t.shouldReset
                ? _.transferHistory
                : e.transferHistory,
            };
          case o.GET_TRANSFER_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              transferHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.transferid] = t), e),
                  e.transferHistory.get("objs").toJS()
                ),
                ids: e.transferHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.transferid)),
                total: a,
              }),
            };
          }
          case o.GET_TRANSFER_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.GET_AFFILIATE_HISTORY_REQUEST:
            return {
              ...e,
              isLoading: !0,
              affiliateHistory: t.shouldReset
                ? _.affiliateHistory
                : e.affiliateHistory,
            };
          case o.GET_AFFILIATE_HISTORY_REQUEST_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoading: !1,
              affiliateHistory: n.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.referralreqid] = t), e),
                  e.affiliateHistory.get("objs").toJS()
                ),
                ids: e.affiliateHistory
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.referralreqid)),
                total: a,
              }),
            };
          }
          case o.GET_AFFILIATE_HISTORY_REQUEST_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case o.AJAX_GET_DEPOSIT_APPLY_INFO_REQUEST:
            return {
              ...e,
              isLoading: !0,
              depositApplyInfo: {},
              getDepositApplyInfofromAPI: !1,
            };
          case o.AJAX_GET_DEPOSIT_APPLY_INFO_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              getDepositApplyInfofromAPI: !0,
              depositApplyInfo: t.payload,
            };
          case o.AJAX_GET_DEPOSIT_APPLY_INFO_FAILURE:
            return {
              ...e,
              isLoading: !1,
              getDepositApplyInfofromAPI: !0,
            };
          case o.AJAX_PUT_CANCEL_DEPOSIT_REQUEST:
            return {
              ...e,
              depositRevokedSuccess: !1,
              depositRevokedFailed: !1,
              isLoading: !0,
            };
          case o.AJAX_PUT_CANCEL_DEPOSIT_SUCCESS:
            return {
              ...e,
              depositRevokedSuccess: !0,
              isLoading: !1,
            };
          case o.AJAX_PUT_CANCEL_DEPOSIT_FAILURE:
            return {
              ...e,
              depositRevokedFailed: !0,
              isLoading: !1,
            };
          case o.GET_PERSONAL_REPORT_REQUEST:
            return {
              ...e,
              loadPersonalReportData: !0,
              loadPersonalReportDataSuc: !1,
              loadPersonalReportDataErr: !1,
            };
          case o.GET_PERSONAL_REPORT_SUCCESS:
            return {
              ...e,
              loadPersonalReportData: !1,
              loadPersonalReportDataSuc: !0,
              loadPersonalReportDataErr: !1,
              personalReportData: t.payload,
            };
          case o.GET_PERSONAL_REPORT_FAILURE:
            return {
              ...e,
              loadPersonalReportData: !1,
              loadPersonalReportDataSuc: !1,
              loadPersonalReportDataErr: !0,
            };
          case o.ON_PERSONAL_REPORT_REDIRECT: {
            const r = e.personalReportRedirectInfo.set(
              t.path,
              n.default.fromJS(t.searchParams)
            );
            return {
              ...e,
              personalReportRedirectInfo: r,
            };
          }
          case o.DELETE_PERSONAL_REPORT_REDIRECT: {
            const r = e.personalReportRedirectInfo.remove(t.path);
            return {
              ...e,
              personalReportRedirectInfo: r,
            };
          }
          case o.GET_PAYMENT_INFO_TEMPLATE_REQUEST:
            return e;
          case o.GET_PAYMENT_INFO_TEMPLATE_SUCCESS:
            return {
              ...e,
              paymentInfoTemplate: t.payload,
            };
          case o.GET_PAYMENT_INFO_TEMPLATE_FAILURE:
          default:
            return e;
        }
      };
    },
    23139: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      const a = (0, r(96540).createContext)({});
      t.default = a;
    },
    23722: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_RESULT =
          t.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_DRAW =
          t.GET_SLE_VENDOR_TOKEN_SUCCESS =
          t.GET_SLE_VENDOR_TOKEN_REQUEST =
          t.GET_SLE_VENDOR_TOKEN_FAILURE =
          t.GET_GAME_LIST_DRAW_RESULTS_SUCCESS =
          t.GET_GAME_LIST_DRAW_RESULTS_REQUEST =
          t.GET_GAME_LIST_DRAW_RESULTS_FAILURE =
            void 0),
        (t.GET_GAME_LIST_DRAW_RESULTS_REQUEST =
          "draw/GET_GAME_LIST_DRAW_RESULTS_REQUEST"),
        (t.GET_GAME_LIST_DRAW_RESULTS_SUCCESS =
          "draw/GET_GAME_LIST_DRAW_RESULTS_SUCCESS"),
        (t.GET_GAME_LIST_DRAW_RESULTS_FAILURE =
          "draw/GET_GAME_LIST_DRAW_RESULTS_FAILURE"),
        (t.GET_SLE_VENDOR_TOKEN_REQUEST = "draw/GET_SLE_VENDOR_REQUEST"),
        (t.GET_SLE_VENDOR_TOKEN_SUCCESS = "draw/GET_SLE_VENDOR_SUCCESS"),
        (t.GET_SLE_VENDOR_TOKEN_FAILURE = "draw/GET_SLE_VENDOR_FAILURE"),
        (t.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_DRAW =
          "draw/WS_UPDATE_GAME_LIST_DRAW_RESULS_WITH_DRAW"),
        (t.WS_UPDATE_GAME_LIST_DRAW_RESULTS_WITH_RESULT =
          "draw/WS_UPDATE_GAME_LIST_DRAW_RESULS_WITH_RESULT");
    },
    23940: (e, t, r) => {
      "use strict";
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
            a,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((a =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (a.get || a.set)
                ? r(n, t, a)
                : (n[t] = e[t]));
          return n;
        })(e);
      })(r(67618));
      const n = {
        loading: !1,
        agentSuccess: !1,
        agentFailed: !1,
        ulagentSuccess: !1,
        ulagentFailed: !1,
      };
      t.default = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n;
        switch ((arguments.length > 1 ? arguments[1] : void 0).type) {
          case a.GET_CHECK_AGENT_REQUEST:
          case a.GET_CHECK_AGENT_WITH_ALERT_REQUEST:
            return {
              ...e,
              loading: !0,
              agentid: "",
              agentSuccess: !1,
              agentFailed: !1,
            };
          case a.GET_CHECK_AGENT_SUCCESS:
          case a.GET_CHECK_AGENT_WITH_ALERT_SUCCESS:
            return {
              ...e,
              loading: !1,
              agentSuccess: !0,
            };
          case a.GET_CHECK_AGENT_FAILURE:
          case a.GET_CHECK_AGENT_WITH_ALERT_FAILURE:
            return {
              ...e,
              loading: !1,
              agentFailed: !0,
            };
          case a.GET_CHECK_ULAGENT_REQUEST:
          case a.GET_CHECK_ULAGENT_WITH_ALERT_REQUEST:
            return {
              ...e,
              loading: !0,
              ulagentSuccess: !1,
              ulagentFailed: !1,
            };
          case a.GET_CHECK_ULAGENT_SUCCESS:
          case a.GET_CHECK_ULAGENT_WITH_ALERT_SUCCESS:
            return {
              ...e,
              loading: !1,
              ulagentSuccess: !0,
            };
          case a.GET_CHECK_ULAGENT_FAILURE:
          case a.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE:
            return {
              ...e,
              loading: !1,
              ulagentFailed: !0,
            };
          default:
            return e;
        }
      };
    },
    24280: (e) => {
      "use strict";
      e.exports = function (e) {
        return encodeURIComponent(e).replace(/[!'()*]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      };
    },
    24439: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.menuBarTypeEnum = void 0),
        (t.menuBarTypeEnum = {
          PRODUCT: "PRODUCT",
          FIX_PAGE: "FIX_PAGE",
          CUSTOM_PAGE: "CUSTOM_PAGE",
          GAME: "GAME",
        });
    },
    24898: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getPixelS2SSetting = void 0);
      var n = a(r(86663)),
        o = a(r(32080)),
        _ = r(68686);
      t.getPixelS2SSetting = function () {
        let { pix: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = {
          eventPlatform: "META",
        };
        return (
          e && (t.pix = e),
          new Promise((e, r) => {
            (0, o.default)({
              url: `${_.baseURL}/s2sConfig?${n.default.stringify(t)}`,
              method: "GET",
            })
              .then((t) => {
                e(t.payload.data || "");
              })
              .catch(() => {
                e("");
              });
          })
        );
      };
    },
    24994: (e) => {
      (e.exports = function (e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    25312: (e, t, r) => {
      "use strict";
      var a = r(24994),
        n = a(r(47186)),
        o = a(r(27179));
      const _ = n.default.parse(location.search.slice(1));
      for (let e in _)
        switch (e) {
          case "token":
          case "locale":
          case "rup":
            o.default.set(e, _[e]);
        }
    },
    26898: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.startEvent =
          t.isUseIOSAdJust =
          t.isUseAndroidAdJust =
          t.isGetFirstDepositInfo =
          t.getHashId =
          t.adjLimitTime =
            void 0);
      var n = a(r(63009)),
        o = a(r(27179)),
        _ = a(r(94188)),
        E = r(15062),
        i = r(92566);
      const { afterFirstDepositEvent: s, afterSignUp: T } = r(81667),
        { code: A } = _.default.brand,
        S = () => window.location.pathname === E.paths.LAUNCHGAME,
        l = !!s && !S(),
        u = () =>
          window.fbq &&
          !S() &&
          !(
            !["jun88", "jun88th", "vipvnd", "ae888", "te1prod"].includes(A) &&
            (window.s2s || {}).pixel
          ),
        c = () => window.kwaiq && !S(),
        R = () => window.dataLayer && !S(),
        d = () => window.gtag && !S(),
        p = () => window.ttq && !S(),
        I = () => window.srtmCommands && !S(),
        P = () => window.ROIBestReportSdk && !S(),
        O = (t.adjLimitTime = 3e3),
        f = () => (0, n.default)(o.default.get("playerid")).toString();
      t.getHashId = f;
      const m = () => {
        let e = !1;
        try {
          e = !!window.androidJs && !S();
        } catch (t) {
          e = !1;
        }
        return e;
      };
      t.isUseAndroidAdJust = m;
      const L = () => {
        let e = !1;
        try {
          var t, r;
          e = !(
            null === (t = window.webkit) ||
            void 0 === t ||
            null === (r = t.messageHandlers) ||
            void 0 === r ||
            !r.adjustEvent ||
            S()
          );
        } catch (t) {
          e = !1;
        }
        return e;
      };
      t.isUseIOSAdJust = L;
      const C = m() || L();
      t.isGetFirstDepositInfo = () =>
        (C || u() || c() || R() || d() || p() || I() || P() || l) &&
        (() => {
          const e = o.default.get(f());
          return -1 !== e && (!e || Date.now() - e > O - 500);
        })();
      const y = function () {
          try {
            if ((m() && window.androidJs.adjustEvent(...arguments), L())) {
              const e = {
                event: arguments.length <= 0 ? void 0 : arguments[0],
              };
              2 === arguments.length &&
                (e.num = arguments.length <= 1 ? void 0 : arguments[1]),
                window.webkit.messageHandlers.adjustEvent.postMessage(e);
            }
          } catch (e) {}
        },
        g = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
          const t = _.default.defaultCurrency;
          let r = e;
          return (
            ["VND2", "IDR2", "MMK2"].includes(t) && (r *= 1e3),
            {
              currency:
                {
                  VND2: "VND",
                  IDR2: "IDR",
                  MMK2: "MMK",
                  USDT: "USD",
                }[t] || t,
              amount: r,
            }
          );
        };
      t.startEvent = {
        firstDeposit: function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { currency: r, amount: a } = g(e);
          !(function (e) {
            let t =
                arguments.length > 1 && void 0 !== arguments[1]
                  ? arguments[1]
                  : 0,
              { eventID: r } = arguments.length > 2 ? arguments[2] : void 0;
            u() &&
              window.fbq(
                "track",
                "Purchase",
                {
                  currency: e,
                  value: t,
                  contents: [
                    {
                      id: "1",
                      quantity: 1,
                      item_price: t,
                    },
                  ],
                  content_type: "product_group",
                },
                {
                  eventID: r,
                }
              ),
              c() &&
                window.kwaiq.track("firstDeposit", {
                  price: t,
                  value: t,
                  currency: e,
                }),
              R() &&
                window.dataLayer.push({
                  event: "purchase",
                  value: t,
                  currency: e,
                }),
              d() &&
                window.gtag("event", "purchase", {
                  value: t,
                  currency: e,
                });
            const a = (0, i.getGadsParams)();
            d() &&
              a.id &&
              a.purchaseToken &&
              window.gtag("event", "conversion", {
                send_to: `${a.id}/${a.purchaseToken}`,
                value: t,
                currency: e,
              }),
              p() &&
                window.ttq.track("CompletePayment", {
                  currency: e,
                  value: t,
                }),
              I() &&
                window.srtmCommands.push({
                  event: "track.betting.deposit",
                  payload: {
                    action: "created",
                    label: "first_deposit",
                    userId: o.default.get("playerid"),
                    amount: t,
                    currency: e,
                  },
                }),
              P &&
                window.dispatchEvent(
                  new CustomEvent("purchase", {
                    detail: {
                      currency: e,
                      value: t,
                    },
                  })
                ),
              s &&
                s({
                  amount: t,
                }),
              y("adj_purchase1", t);
          })(r, a, t);
        },
        registration: (e) => {
          const { currency: t } = g();
          ((e, t) => {
            u() &&
              window.fbq(
                "track",
                "CompleteRegistration",
                {
                  value: 0,
                  currency: e,
                },
                {
                  eventID: null == t ? void 0 : t.eventID,
                }
              ),
              c() && window.kwaiq.track("completeRegistration"),
              R() &&
                window.dataLayer.push({
                  event: "sign_up",
                }),
              d() && window.gtag("event", "sign_up");
            const r = (0, i.getGadsParams)();
            d() &&
              r.id &&
              r.signupToken &&
              window.gtag("event", "conversion", {
                send_to: `${r.id}/${r.signupToken}`,
              }),
              p() && window.ttq.track("CompleteRegistration"),
              I() &&
                window.srtmCommands.push({
                  event: "track.user.registration",
                  payload: {
                    action: "complete",
                    userId: null == t ? void 0 : t.playerid,
                  },
                }),
              P && window.dispatchEvent(new CustomEvent("register")),
              T &&
                T({
                  token: null == t ? void 0 : t.token,
                  playerid: null == t ? void 0 : t.playerid,
                }),
              y("adj_complete_registration");
          })(t, e);
        },
        startReg: () => {
          I() &&
            window.srtmCommands.push({
              event: "track.user.registration",
              payload: {
                action: "start",
              },
            });
        },
        afterLogin: (e) => {
          ((e) => {
            I() &&
              window.srtmCommands.push({
                event: "track.user.login",
                payload: {
                  action: "complete",
                  userId: e,
                },
              });
          })(e);
        },
      };
    },
    27179: function (e, t, r) {
      "use strict";
      var a, n;
      (a = function () {
        var e,
          t = {},
          a = "undefined" != typeof window ? window : r.g,
          n = a.document,
          o = "localStorage",
          _ = "script";
        if (
          ((t.disabled = !1),
          (t.version = "1.3.20"),
          (t.set = function (e, t) {}),
          (t.get = function (e, t) {}),
          (t.has = function (e) {
            return void 0 !== t.get(e);
          }),
          (t.remove = function (e) {}),
          (t.clear = function () {}),
          (t.transact = function (e, r, a) {
            null == a && ((a = r), (r = null)), null == r && (r = {});
            var n = t.get(e, r);
            a(n), t.set(e, n);
          }),
          (t.getAll = function () {}),
          (t.forEach = function () {}),
          (t.serialize = function (e) {
            return JSON.stringify(e);
          }),
          (t.deserialize = function (e) {
            if ("string" == typeof e)
              try {
                return JSON.parse(e);
              } catch (t) {
                return e || void 0;
              }
          }),
          (function () {
            try {
              return o in a && a[o];
            } catch (e) {
              return !1;
            }
          })())
        )
          (e = a[o]),
            (t.set = function (r, a) {
              return void 0 === a
                ? t.remove(r)
                : (e.setItem(r, t.serialize(a)), a);
            }),
            (t.get = function (r, a) {
              var n = t.deserialize(e.getItem(r));
              return void 0 === n ? a : n;
            }),
            (t.remove = function (t) {
              e.removeItem(t);
            }),
            (t.clear = function () {
              e.clear();
            }),
            (t.getAll = function () {
              var e = {};
              return (
                t.forEach(function (t, r) {
                  e[t] = r;
                }),
                e
              );
            }),
            (t.forEach = function (r) {
              for (var a = 0; a < e.length; a++) {
                var n = e.key(a);
                r(n, t.get(n));
              }
            });
        else if (n && n.documentElement.addBehavior) {
          var E, i;
          try {
            (i = new ActiveXObject("htmlfile")).open(),
              i.write(
                "<" +
                  _ +
                  ">document.w=window</" +
                  _ +
                  '><iframe src="/favicon.ico"></iframe>'
              ),
              i.close(),
              (E = i.w.frames[0].document),
              (e = E.createElement("div"));
          } catch (t) {
            (e = n.createElement("div")), (E = n.body);
          }
          var s = function (r) {
              return function () {
                var a = Array.prototype.slice.call(arguments, 0);
                a.unshift(e),
                  E.appendChild(e),
                  e.addBehavior("#default#userData"),
                  e.load(o);
                var n = r.apply(t, a);
                return E.removeChild(e), n;
              };
            },
            T = new RegExp("[!\"#$%&'()*+,/\\\\:;<=>?@[\\]^`{|}~]", "g"),
            A = function (e) {
              return e.replace(/^d/, "___$&").replace(T, "___");
            };
          (t.set = s(function (e, r, a) {
            return (
              (r = A(r)),
              void 0 === a
                ? t.remove(r)
                : (e.setAttribute(r, t.serialize(a)), e.save(o), a)
            );
          })),
            (t.get = s(function (e, r, a) {
              r = A(r);
              var n = t.deserialize(e.getAttribute(r));
              return void 0 === n ? a : n;
            })),
            (t.remove = s(function (e, t) {
              (t = A(t)), e.removeAttribute(t), e.save(o);
            })),
            (t.clear = s(function (e) {
              var t = e.XMLDocument.documentElement.attributes;
              e.load(o);
              for (var r = t.length - 1; r >= 0; r--)
                e.removeAttribute(t[r].name);
              e.save(o);
            })),
            (t.getAll = function (e) {
              var r = {};
              return (
                t.forEach(function (e, t) {
                  r[e] = t;
                }),
                r
              );
            }),
            (t.forEach = s(function (e, r) {
              for (
                var a, n = e.XMLDocument.documentElement.attributes, o = 0;
                (a = n[o]);
                ++o
              )
                r(a.name, t.deserialize(e.getAttribute(a.name)));
            }));
        }
        try {
          var S = "__storejs__";
          t.set(S, S), t.get(S) != S && (t.disabled = !0), t.remove(S);
        } catch (e) {
          t.disabled = !0;
        }
        return (t.enabled = !t.disabled), t;
      }),
        void 0 === (n = a.apply(t, [])) || (e.exports = n);
    },
    27358: (e, t, r) => {
      "use strict";
      var a = r(70453),
        n = r(10487),
        o = r(58068),
        _ = a("%Promise.resolve%", !0),
        E = _ && n(_);
      e.exports = function (e, t) {
        if (!E) throw new o("This environment does not support Promises.");
        return E(e, t);
      };
    },
    27820: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.setPixelS2SInfo = t.getPixelS2SInfo = void 0);
      var n = a(r(86663)),
        o = a(r(27179)),
        _ = a(r(94188)),
        E = r(56291);
      const { code: i } = _.default.brand;
      (t.setPixelS2SInfo = () => {
        const e = n.default.parse(window.location.search.slice(1));
        if (null != e && e.fbclid) {
          const t = ((e) => {
            if (!e)
              return {
                fbp: null,
                fbc: null,
              };
            const t = Date.now();
            return {
              fbp: `fb.1.${t}.${Math.floor(2147483647 * Math.random())}`,
              fbc: `fb.1.${t}.${e}`,
            };
          })(e.fbclid);
          o.default.set("meta-pixel", t), o.default.set("pix-s2s", e);
        }
        ["jun88", "jun88th", "vipvnd", "ae888", "te1prod"].includes(i) &&
          null != e &&
          e.pix &&
          (delete e.path, o.default.set("pix-s2s", e));
      }),
        (t.getPixelS2SInfo = () => {
          const e = o.default.get("pix-s2s");
          if (e) {
            const t = o.default.get("meta-pixel") || {},
              { fbp: r, fbc: a } = t,
              _ = (0, E.getCookie)("_fbc") || a,
              i = (0, E.getCookie)("_fbp") || r,
              s = {
                ...e,
                _fbc: _,
                _fbp: i,
              };
            return (
              (0, E.getCookie)("_fbc") || (s.fromCookie = !1),
              n.default.stringify(s)
            );
          }
          return "";
        });
    },
    28415: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.thirdPartyTypeEnum = t.bindStatusEnum = void 0),
        (t.bindStatusEnum = {
          SUCCESS: "SUCCESS",
          UNAUTHORIZED: "UNAUTHORIZED",
          INVALID: "INVALID",
        }),
        (t.thirdPartyTypeEnum = {
          FACEBOOK: "FACEBOOK",
          LINE: "LINE",
          TELEGRAM: "TELEGRAM",
          GOOGLE: "GOOGLE",
          ZALO: "ZALO",
        });
    },
    28875: (e, t, r) => {
      "use strict";
      var a;
      if (!Object.keys) {
        var n = Object.prototype.hasOwnProperty,
          o = Object.prototype.toString,
          _ = r(1093),
          E = Object.prototype.propertyIsEnumerable,
          i = !E.call(
            {
              toString: null,
            },
            "toString"
          ),
          s = E.call(function () {}, "prototype"),
          T = [
            "toString",
            "toLocaleString",
            "valueOf",
            "hasOwnProperty",
            "isPrototypeOf",
            "propertyIsEnumerable",
            "constructor",
          ],
          A = function (e) {
            var t = e.constructor;
            return t && t.prototype === e;
          },
          S = {
            $applicationCache: !0,
            $console: !0,
            $external: !0,
            $frame: !0,
            $frameElement: !0,
            $frames: !0,
            $innerHeight: !0,
            $innerWidth: !0,
            $onmozfullscreenchange: !0,
            $onmozfullscreenerror: !0,
            $outerHeight: !0,
            $outerWidth: !0,
            $pageXOffset: !0,
            $pageYOffset: !0,
            $parent: !0,
            $scrollLeft: !0,
            $scrollTop: !0,
            $scrollX: !0,
            $scrollY: !0,
            $self: !0,
            $webkitIndexedDB: !0,
            $webkitStorageInfo: !0,
            $window: !0,
          },
          l = (function () {
            if ("undefined" == typeof window) return !1;
            for (var e in window)
              try {
                if (
                  !S["$" + e] &&
                  n.call(window, e) &&
                  null !== window[e] &&
                  "object" == typeof window[e]
                )
                  try {
                    A(window[e]);
                  } catch (e) {
                    return !0;
                  }
              } catch (e) {
                return !0;
              }
            return !1;
          })();
        a = function (e) {
          var t = null !== e && "object" == typeof e,
            r = "[object Function]" === o.call(e),
            a = _(e),
            E = t && "[object String]" === o.call(e),
            S = [];
          if (!t && !r && !a)
            throw new TypeError("Object.keys called on a non-object");
          var u = s && r;
          if (E && e.length > 0 && !n.call(e, 0))
            for (var c = 0; c < e.length; ++c) S.push(String(c));
          if (a && e.length > 0)
            for (var R = 0; R < e.length; ++R) S.push(String(R));
          else
            for (var d in e)
              (u && "prototype" === d) || !n.call(e, d) || S.push(String(d));
          if (i)
            for (
              var p = (function (e) {
                  if ("undefined" == typeof window || !l) return A(e);
                  try {
                    return A(e);
                  } catch (e) {
                    return !1;
                  }
                })(e),
                I = 0;
              I < T.length;
              ++I
            )
              (p && "constructor" === T[I]) || !n.call(e, T[I]) || S.push(T[I]);
          return S;
        };
      }
      e.exports = a;
    },
    29507: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.useAdjustEventContext = t.default = t.adjustEventTypeEnum = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(96540)),
        o = a(r(86663)),
        _ = a(r(83736)),
        E = a(r(72524)),
        i = a(r(32080)),
        s = r(68686),
        T = a(r(23139)),
        A = r(74848);
      const S = (t.adjustEventTypeEnum = {
        SIGNUP: "SIGNUP",
        FIRST_DEPOSIT: "FIRST_DEPOSIT",
      });
      (t.useAdjustEventContext = () => (0, n.useContext)(T.default)),
        (t.default = (e) => {
          const [t, a] = (0, E.default)({
              adjustTokens: {},
              adjustInstance: null,
            }),
            { adjustTokens: l, adjustInstance: u } = t,
            c = (0, n.useMemo)(
              () => ({
                [S.SIGNUP]: {
                  register_web: l.registerEventToken,
                },
                [S.FIRST_DEPOSIT]: {
                  first_deposit_web: l.firstDepositEventToken,
                },
              }),
              [l]
            ),
            R = (0, n.useCallback)(
              (e) => {
                let { eventType: t } = e;
                const r = c[t],
                  a = l.appToken;
                return a && r
                  ? {
                      adjustDeviceKey: "web_uuid",
                      deviceType: "web",
                      domainName: window.location.hostname,
                      adjustDeviceValue: u.getWebUUID(),
                      appToken: a,
                      eventToken: JSON.stringify(r),
                    }
                  : {};
              },
              [u, l, c]
            );
          return (
            (0, _.default)(() => {
              (0, i.default)({
                url: `${s.baseURL}/adjustConfig/get?${o.default.stringify({
                  domainName: window.location.hostname,
                })}`,
                method: "GET",
              }).then((e) => {
                const {
                  appToken: t,
                  firstDepositEventToken: n,
                  registerEventToken: o,
                } = e;
                t &&
                  r
                    .e(8533)
                    .then(r.t.bind(r, 8533, 23))
                    .then((e) => {
                      e.initSdk({
                        appToken: t,
                        environment: "production",
                      }),
                        a({
                          adjustTokens: {
                            appToken: t,
                            firstDepositEventToken: n,
                            registerEventToken: o,
                          },
                          adjustInstance: e,
                        });
                    });
              });
            }),
            (0, A.jsx)(T.default.Provider, {
              value: {
                ...t,
                getAdjustEventParameters: R,
              },
              children: e.children,
            })
          );
        });
    },
    29576: (e, t, r) => {
      "use strict";
      var a = r(9957),
        n = r(69675),
        o = r(6537),
        _ = r(84377),
        E = r(4150);
      e.exports = function (e) {
        if (!o(e)) throw new n("ToPropertyDescriptor requires an object");
        var t = {};
        if (
          (a(e, "enumerable") && (t["[[Enumerable]]"] = E(e.enumerable)),
          a(e, "configurable") && (t["[[Configurable]]"] = E(e.configurable)),
          a(e, "value") && (t["[[Value]]"] = e.value),
          a(e, "writable") && (t["[[Writable]]"] = E(e.writable)),
          a(e, "get"))
        ) {
          var r = e.get;
          if (void 0 !== r && !_(r)) throw new n("getter must be a function");
          t["[[Get]]"] = r;
        }
        if (a(e, "set")) {
          var i = e.set;
          if (void 0 !== i && !_(i)) throw new n("setter must be a function");
          t["[[Set]]"] = i;
        }
        if (
          (a(t, "[[Get]]") || a(t, "[[Set]]")) &&
          (a(t, "[[Value]]") || a(t, "[[Writable]]"))
        )
          throw new n(
            "Invalid property descriptor. Cannot both specify accessors and a value or writable attribute"
          );
        return t;
      };
    },
    30041: (e, t, r) => {
      "use strict";
      var a = r(30655),
        n = r(58068),
        o = r(69675),
        _ = r(75795);
      e.exports = function (e, t, r) {
        if (!e || ("object" != typeof e && "function" != typeof e))
          throw new o("`obj` must be an object or a function`");
        if ("string" != typeof t && "symbol" != typeof t)
          throw new o("`property` must be a string or a symbol`");
        if (
          arguments.length > 3 &&
          "boolean" != typeof arguments[3] &&
          null !== arguments[3]
        )
          throw new o(
            "`nonEnumerable`, if provided, must be a boolean or null"
          );
        if (
          arguments.length > 4 &&
          "boolean" != typeof arguments[4] &&
          null !== arguments[4]
        )
          throw new o("`nonWritable`, if provided, must be a boolean or null");
        if (
          arguments.length > 5 &&
          "boolean" != typeof arguments[5] &&
          null !== arguments[5]
        )
          throw new o(
            "`nonConfigurable`, if provided, must be a boolean or null"
          );
        if (arguments.length > 6 && "boolean" != typeof arguments[6])
          throw new o("`loose`, if provided, must be a boolean");
        var E = arguments.length > 3 ? arguments[3] : null,
          i = arguments.length > 4 ? arguments[4] : null,
          s = arguments.length > 5 ? arguments[5] : null,
          T = arguments.length > 6 && arguments[6],
          A = !!_ && _(e, t);
        if (a)
          a(e, t, {
            configurable: null === s && A ? A.configurable : !s,
            enumerable: null === E && A ? A.enumerable : !E,
            value: r,
            writable: null === i && A ? A.writable : !i,
          });
        else {
          if (!T && (E || i || s))
            throw new n(
              "This environment does not support defining a property as non-configurable, non-writable, or non-enumerable."
            );
          e[t] = r;
        }
      };
    },
    30305: (e, t, r) => {
      "use strict";
      r(98311)();
      var a = r(69675),
        n = r(27358),
        o = r(84377),
        _ = r(30939),
        E = r(58501),
        i = r(43206),
        s = Promise;
      e.exports = i(
        function (e) {
          var t = this;
          if ("Object" !== E(t)) throw new a("receiver is not an Object");
          var r = _(t, s),
            i = e,
            T = e;
          return (
            o(e) &&
              ((i = (function (e, t) {
                return function (r) {
                  var a = t();
                  return n(e, a).then(function () {
                    return r;
                  });
                };
              })(r, e)),
              (T = (function (e, t) {
                return function (r) {
                  var a = t();
                  return n(e, a).then(function () {
                    throw r;
                  });
                };
              })(r, e))),
            t.then(i, T)
          );
        },
        "finally",
        !0
      );
    },
    30454: (e) => {
      "use strict";
      var t = "%[a-f0-9]{2}",
        r = new RegExp("(" + t + ")|([^%]+?)", "gi"),
        a = new RegExp("(" + t + ")+", "gi");
      function n(e, t) {
        try {
          return [decodeURIComponent(e.join(""))];
        } catch (e) {}
        if (1 === e.length) return e;
        t = t || 1;
        var r = e.slice(0, t),
          a = e.slice(t);
        return Array.prototype.concat.call([], n(r), n(a));
      }
      function o(e) {
        try {
          return decodeURIComponent(e);
        } catch (o) {
          for (var t = e.match(r) || [], a = 1; a < t.length; a++)
            t = (e = n(t, a).join("")).match(r) || [];
          return e;
        }
      }
      e.exports = function (e) {
        if ("string" != typeof e)
          throw new TypeError(
            "Expected `encodedURI` to be of type `string`, got `" +
              typeof e +
              "`"
          );
        try {
          return (e = e.replace(/\+/g, " ")), decodeURIComponent(e);
        } catch (t) {
          return (function (e) {
            for (
              var t = {
                  "%FE%FF": "��",
                  "%FF%FE": "��",
                },
                r = a.exec(e);
              r;

            ) {
              try {
                t[r[0]] = decodeURIComponent(r[0]);
              } catch (e) {
                var n = o(r[0]);
                n !== r[0] && (t[r[0]] = n);
              }
              r = a.exec(e);
            }
            t["%C2"] = "�";
            for (var _ = Object.keys(t), E = 0; E < _.length; E++) {
              var i = _[E];
              e = e.replace(new RegExp(i, "g"), t[i]);
            }
            return e;
          })(e);
        }
      };
    },
    30592: (e, t, r) => {
      "use strict";
      var a = r(30655),
        n = function () {
          return !!a;
        };
      (n.hasArrayLengthDefineBug = function () {
        if (!a) return null;
        try {
          return (
            1 !==
            a([], "length", {
              value: 1,
            }).length
          );
        } catch (e) {
          return !0;
        }
      }),
        (e.exports = n);
    },
    30655: (e) => {
      "use strict";
      var t = Object.defineProperty || !1;
      if (t)
        try {
          t({}, "a", {
            value: 1,
          });
        } catch (e) {
          t = !1;
        }
      e.exports = t;
    },
    30817: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.UPDATE_RACE_RECORD =
          t.UPDATE_MAINTENANCE_LIST =
          t.REMOVE_GAME_CACHE =
          t.REDIRECT_SPORT_PAGE =
          t.GET_UPCOMING_SPORTS_SUCCESS =
          t.GET_UPCOMING_SPORTS_REQUEST =
          t.GET_UPCOMING_SPORTS_FAILURE =
          t.AJAX_PUT_LAUNCH_GAME_SUCCESS =
          t.AJAX_PUT_LAUNCH_GAME_REQUEST =
          t.AJAX_PUT_LAUNCH_GAME_FAILURE =
          t.AJAX_POST_MY_FAVORITE_GAME_SUCCESS =
          t.AJAX_POST_MY_FAVORITE_GAME_REQUEST =
          t.AJAX_POST_MY_FAVORITE_GAME_FAILURE =
          t.AJAX_GET_PORTAL_GAME_LIST_SUCCESS =
          t.AJAX_GET_PORTAL_GAME_LIST_REQUEST =
          t.AJAX_GET_PORTAL_GAME_LIST_FAILURE =
          t.AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS =
          t.AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST =
          t.AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE =
          t.AJAX_GET_MAINTENANCE_LIST_SUCCESS =
          t.AJAX_GET_MAINTENANCE_LIST_REQUEST =
          t.AJAX_GET_MAINTENANCE_LIST_FAILURE =
          t.AJAX_GET_LAST_10_RECORDS_SUCCESS =
          t.AJAX_GET_LAST_10_RECORDS_REQUEST =
          t.AJAX_GET_LAST_10_RECORDS_FAILURE =
          t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS =
          t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST =
          t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE =
          t.AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS =
          t.AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST =
          t.AJAX_GET_INSURANCE_GAME_HISTORY_FAILURE =
          t.AJAX_GET_GAME_TAGS_SUCCESS =
          t.AJAX_GET_GAME_TAGS_REQUEST =
          t.AJAX_GET_GAME_TAGS_FAILURE =
          t.AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS =
          t.AJAX_GET_GAME_HISTORY_DETAIL_REQUEST =
          t.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE =
          t.AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS =
          t.AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST =
          t.AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE =
          t.AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS =
          t.AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST =
          t.AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE =
          t.AJAX_GET_EGAME_GAMES_SUCCESS =
          t.AJAX_GET_EGAME_GAMES_REQUEST =
          t.AJAX_GET_EGAME_GAMES_FAILURE =
          t.AJAX_GET_ALL_GAME_NAME_SUCCESS =
          t.AJAX_GET_ALL_GAME_NAME_REQUEST =
          t.AJAX_GET_ALL_GAME_NAME_FAILURE =
          t.AJAX_GET_ALL_GAME_LIST_SUCCESS =
          t.AJAX_GET_ALL_GAME_LIST_REQUEST =
          t.AJAX_GET_ALL_GAME_LIST_FAILURE =
          t.AJAX_GET_ALL_GAME_IDS_SUCCESS =
          t.AJAX_GET_ALL_GAME_IDS_REQUEST =
          t.AJAX_GET_ALL_GAME_IDS_FAILURE =
          t.AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS =
          t.AJAX_DELETE_MY_FAVORITE_GAME_REQUEST =
          t.AJAX_DELETE_MY_FAVORITE_GAME_FAILURE =
            void 0),
        (t.AJAX_PUT_LAUNCH_GAME_REQUEST = "ajax/AJAX_PUT_LAUNCH_GAME_REQUEST"),
        (t.AJAX_PUT_LAUNCH_GAME_SUCCESS = "ajax/AJAX_PUT_LAUNCH_GAME_SUCCESS"),
        (t.AJAX_PUT_LAUNCH_GAME_FAILURE = "ajax/AJAX_PUT_LAUNCH_GAME_FAILURE"),
        (t.AJAX_GET_PORTAL_GAME_LIST_REQUEST =
          "ajax/AJAX_GET_PORTAL_GAME_LIST_REQUEST"),
        (t.AJAX_GET_PORTAL_GAME_LIST_SUCCESS =
          "ajax/AJAX_GET_PORTAL_GAME_LIST_SUCCESS"),
        (t.AJAX_GET_PORTAL_GAME_LIST_FAILURE =
          "ajax/AJAX_GET_PORTAL_GAME_LIST_FAILURE"),
        (t.AJAX_GET_ALL_GAME_LIST_REQUEST =
          "ajax/AJAX_GET_ALL_GAME_LIST_REQUEST"),
        (t.AJAX_GET_ALL_GAME_LIST_SUCCESS =
          "ajax/AJAX_GET_ALL_GAME_LIST_SUCCESS"),
        (t.AJAX_GET_ALL_GAME_LIST_FAILURE =
          "ajax/AJAX_GET_ALL_GAME_LIST_FAILURE"),
        (t.AJAX_GET_ALL_GAME_NAME_REQUEST =
          "ajax/AJAX_GET_ALL_GAME_NAME_REQUEST"),
        (t.AJAX_GET_ALL_GAME_NAME_SUCCESS =
          "ajax/AJAX_GET_ALL_GAME_NAME_SUCCESS"),
        (t.AJAX_GET_ALL_GAME_NAME_FAILURE =
          "ajax/AJAX_GET_ALL_GAME_NAME_FAILURE"),
        (t.AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST =
          "ajax/AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST"),
        (t.AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS =
          "ajax/AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS"),
        (t.AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE =
          "ajax/AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE"),
        (t.AJAX_POST_MY_FAVORITE_GAME_REQUEST =
          "ajax/AJAX_POST_MY_FAVORITE_GAME_REQUEST"),
        (t.AJAX_POST_MY_FAVORITE_GAME_SUCCESS =
          "ajax/AJAX_POST_MY_FAVORITE_GAME_SUCCESS"),
        (t.AJAX_POST_MY_FAVORITE_GAME_FAILURE =
          "ajax/AJAX_POST_MY_FAVORITE_GAME_FAILURE"),
        (t.AJAX_DELETE_MY_FAVORITE_GAME_REQUEST =
          "ajax/AJAX_DELETE_MY_FAVORITE_GAME_REQUEST"),
        (t.AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS =
          "ajax/AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS"),
        (t.AJAX_DELETE_MY_FAVORITE_GAME_FAILURE =
          "ajax/AJAX_DELETE_MY_FAVORITE_GAME_FAILURE"),
        (t.AJAX_GET_LAST_10_RECORDS_REQUEST =
          "ajax/AJAX_GET_LAST_10_RECORDS_REQUEST"),
        (t.AJAX_GET_LAST_10_RECORDS_SUCCESS =
          "ajax/AJAX_GET_LAST_10_RECORDS_SUCCESS"),
        (t.AJAX_GET_LAST_10_RECORDS_FAILURE =
          "ajax/AJAX_GET_LAST_10_RECORDS_FAILURE"),
        (t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST =
          "ajax/AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST"),
        (t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS =
          "ajax/AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS"),
        (t.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE =
          "ajax/AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE"),
        (t.AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST =
          "ajax/AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST"),
        (t.AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS =
          "ajax/AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS"),
        (t.AJAX_GET_INSURANCE_GAME_HISTORY_FAILURE =
          "ajax/AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST"),
        (t.AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST =
          "ajax/AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST"),
        (t.AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS =
          "ajax/AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS"),
        (t.AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE =
          "ajax/AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE"),
        (t.AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST =
          "ajax/AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST"),
        (t.AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS =
          "ajax/AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS"),
        (t.AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE =
          "ajax/AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE"),
        (t.UPDATE_MAINTENANCE_LIST = "UPDATE_MAINTENANCE_LIST"),
        (t.AJAX_GET_MAINTENANCE_LIST_REQUEST =
          "ajax/AJAX_GET_MAINTENANCE_LIST_REQUEST"),
        (t.AJAX_GET_MAINTENANCE_LIST_SUCCESS =
          "ajax/AJAX_GET_MAINTENANCE_LIST_SUCCESS"),
        (t.AJAX_GET_MAINTENANCE_LIST_FAILURE =
          "ajax/AJAX_GET_MAINTENANCE_LIST_FAILURE"),
        (t.AJAX_GET_GAME_TAGS_REQUEST = "ajax/AJAX_GET_GAME_TAGS_REQUEST"),
        (t.AJAX_GET_GAME_TAGS_SUCCESS = "ajax/AJAX_GET_GAME_TAGS_SUCCESS"),
        (t.AJAX_GET_GAME_TAGS_FAILURE = "ajax/AJAX_GET_GAME_TAGS_FAILURE"),
        (t.AJAX_GET_EGAME_GAMES_REQUEST = "ajax/AJAX_GET_EGAME_GAMES_REQUEST"),
        (t.AJAX_GET_EGAME_GAMES_SUCCESS = "ajax/AJAX_GET_EGAME_GAMES_SUCCESS"),
        (t.AJAX_GET_EGAME_GAMES_FAILURE = "ajax/AJAX_GET_EGAME_GAMES_FAILURE"),
        (t.REMOVE_GAME_CACHE = "REMOVE_GAME_CACHE"),
        (t.AJAX_GET_GAME_HISTORY_DETAIL_REQUEST =
          "ajax/AJAX_GET_GAME_HISTORY_DETAIL_REQUEST"),
        (t.AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS =
          "ajax/AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS"),
        (t.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE =
          "ajax/AJAX_GET_GAME_HISTORY_DETAIL_FAILURE"),
        (t.AJAX_GET_ALL_GAME_IDS_REQUEST =
          "ajax/AJAX_GET_ALL_GAME_IDS_REQUEST"),
        (t.AJAX_GET_ALL_GAME_IDS_SUCCESS =
          "ajax/AJAX_GET_ALL_GAME_IDS_SUCCESS"),
        (t.AJAX_GET_ALL_GAME_IDS_FAILURE =
          "ajax/AJAX_GET_ALL_GAME_IDS_FAILURE"),
        (t.GET_UPCOMING_SPORTS_REQUEST = "ajax/GET_UPCOMING_SPORTS_REQUEST"),
        (t.GET_UPCOMING_SPORTS_SUCCESS = "ajax/GET_UPCOMING_SPORTS_SUCCESS"),
        (t.GET_UPCOMING_SPORTS_FAILURE = "ajax/GET_UPCOMING_SPORTS_FAILURE"),
        (t.REDIRECT_SPORT_PAGE = "ajax/REDIRECT_SPORT_PAGE"),
        (t.UPDATE_RACE_RECORD = "UPDATE_RACE_RECORD");
    },
    30939: (e, t, r) => {
      "use strict";
      var a = r(70453)("%Symbol.species%", !0),
        n = r(69675),
        o = r(6537),
        _ = r(79801);
      e.exports = function (e, t) {
        if (!o(e)) throw new n("Assertion failed: Type(O) is not Object");
        var r = e.constructor;
        if (void 0 === r) return t;
        if (!o(r)) throw new n("O.constructor is not an Object");
        var E = a ? r[a] : void 0;
        if (null == E) return t;
        if (_(E)) return E;
        throw new n("no constructor found");
      };
    },
    31653: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.CURRENCY_KEY = void 0);
      var n = a(r(27179)),
        o = a(r(86462));
      const {
          defaultCurrency: _,
          brand: { code: E },
        } = o.default,
        i = "imsConfig",
        s = "locale",
        T = (t.CURRENCY_KEY = "currency"),
        A = (e) => `imsPublic_${e}`,
        S = (e) =>
          e
            .split("")
            .map((e) => String.fromCharCode(123 ^ e.charCodeAt(0)))
            .join(""),
        l = new URL(window.location.href),
        u = l.searchParams.get("switch_currency");
      u &&
        (n.default.set(T, u),
        l.searchParams.delete("switch_currency"),
        window.history.replaceState(null, null, l.toString()));
      const c = l.searchParams.get("af"),
        R = l.searchParams.get("uagt");
      (c || R) && n.default.set(T, _);
      const d = {
        set: function (e, t) {
          return n.default.set(A(e), t);
        },
        get: function (e) {
          return n.default.get(A(e));
        },
        remove: function (e) {
          return n.default.remove(A(e));
        },
        clear: function () {
          return n.default.clear(), !0;
        },
        getLocale: function () {
          return n.default.get(s) || "zh-CN";
        },
        setLocale: function (e) {
          return n.default.set(s, e);
        },
        setConfig: function (e, t) {
          const r = n.default.get(i) || {};
          return (r[e] = t), n.default.set(i, r);
        },
        getConfig: function (e) {
          return (n.default.get(i) || {})[e] || null;
        },
        removeConfig: function (e) {
          const t = n.default.get(i) || {};
          return delete t[e], n.default.set(i, t);
        },
        clearConfig: function () {
          return n.default.set(i, {});
        },
        hasCurrency: function () {
          return !!n.default.get(T);
        },
        getCurrency: function () {
          return n.default.get(T) || _;
        },
        setCurrency: function (e) {
          return n.default.set(T, e || _);
        },
        removeCurrency: function () {
          return n.default.remove(T);
        },
        setCurrencyDomain: (e) => {
          const t = S(JSON.stringify(e));
          n.default.set("cd_info", t);
        },
        getCurrencyData: () => {
          const e = n.default.get("cd_info");
          if (e) return JSON.parse(S(e));
        },
        getCurrencyDomain: () => {
          const e = n.default.get("cd_info");
          if (e) {
            const t = JSON.parse(S(e)),
              r = [],
              a = t.reduce((e, t) => {
                const { domain: a, code: n, currency: o } = t;
                return (
                  r.push(o),
                  (e[o] = {
                    api: `https://api.${a}/${n}-ecp/api/v1`,
                    socket: `wss://api.${a}/${n}-ecp/websocket`,
                    origin: a,
                  }),
                  e
                );
              }, {});
            return {
              domainMap: a,
              currencyList: r,
            };
          }
          return {};
        },
        setDefaultCurrency: () => {
          n.default.remove("cd_info"), d.setCurrency(_);
        },
        devCheckData: () => {
          const e = d.getCurrencyData();
          e && (e.filter((e) => e.code === E).length || d.setDefaultCurrency());
        },
        setAffiliateCode: (e) => {
          n.default.set("affCode", e);
        },
        getAffiliateCode: () => n.default.get("affCode"),
      };
      t.default = d;
    },
    32046: (e, t) => {
      "use strict";
      (t.A = void 0),
        (t.A = {
          "13c850867d0fd7892de3c0eab3416ffae1c55ed8d0c9a4801602d7d1d9245db5":
            "G-WLQ47ZCETY",
          "422982dcb574bd1232fe989a54a3ffb0615f7cb1487cf830067f81e66be6d9ea":
            "G-TGVQ63E7W7",
        });
    },
    32080: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(27179));
      const o = [
        { pattern: "s2sConfig", file: "data/011-s2sConfig.json" },
        {
          pattern: "enabledGameProviders",
          file: "data/076-enabledGameProviders.json",
        },
        { pattern: "players/get", file: "data/077-get.json" },
        { pattern: "loginSetting", file: "data/081-setting.json" },
        {
          pattern: "RegistrationSetting",
          file: "data/082-setting.json",
        },
        { pattern: "getBanners", file: "data/083-ads.json" },
        { pattern: "getAnnouncement", file: "data/084-announcements.json" },
        { pattern: "getNews", file: "data/085-announcements.json" },
        { pattern: "getOrders", file: "data/086-orders.json" },
        { pattern: "getMoreOrders", file: "data/087-orders.json" },
        { pattern: "getDisplaySetting", file: "data/088-displaySetting.json" },
        { pattern: "AnnouncementEnabled", file: "data/089-enabled.json" },
        { pattern: "getAllGameList", file: "data/092-allGameList.json" },
        { pattern: "getMaintenanceList", file: "data/093-maintenance.json" },
        {
          pattern: "getActiveShortcut",
          file: "data/094-activeshortcuts.json",
        },
        {
          pattern: "getAffiliateSetting",
          file: "data/096-referralsetting.json",
        },
        { pattern: "getFloatingAds", file: "data/111-floatingads.json" },
        { pattern: "getAllGameName", file: "data/132-allGameName.json" },
      ];
      const _ = (e) => {
        if (!e) return null;
        const r = e.toLowerCase();
        const t = o.find(({ pattern: t }) => r.includes(t.toLowerCase()));
        return t ? `./${t.file}` : null;
      };
      t.default = (e) => {
        e = e || {};
        const r = _(e.url);
        if (r) {
          e.url = r;
          e.method = "GET";
          e.setToken = !1;
          e.type || (e.type = "json");
        }
        const t = new Promise((t, r) => {
          ((e) => {
            const t = new XMLHttpRequest(),
              r = e.success || function () {},
              a = e.error || function () {},
              o = e.complete || function () {};
            if (
              ((t.onreadystatechange = function () {
                if (4 === t.readyState) {
                  let n = (function (e, t, r) {
                    if ("plain" === t || "arraybuffer" === t) return r;
                    if ("json" === t && "object" == typeof r)
                      return r || new Error("invalid json resource");
                    let a = null;
                    try {
                      a = JSON.parse(r);
                    } catch (t) {
                      return 200 === e.status
                        ? new Error(
                            "error occurred during parsing json response: " +
                              t.message
                          )
                        : {
                            code: e.status,
                            payload: {
                              code: e.status,
                              statusText: e.statusText,
                            },
                          };
                    }
                    return {
                      code: e.status,
                      payload: a,
                      newToken: null,
                    };
                  })(t, e.type, t.response);
                  t.status >= 400 && a(n),
                    200 === t.status || 204 === t.status
                      ? (n instanceof Error ? a(n) : r(n), o(n))
                      : (a(n), o(n));
                }
              }),
              "POST" === e.method ||
                "PUT" === e.method ||
                "DELETE" === e.method)
            ) {
              t.open(e.method, e.url);
              const r = n.default.get("token");
              if (
                (r &&
                  !1 !== e.setToken &&
                  t.setRequestHeader("Authorization", r),
                e.headers)
              )
                for (let r in e.headers)
                  Object.prototype.hasOwnProperty.call(e.headers, r) &&
                    t.setRequestHeader(r, e.headers[r]);
              let a = "";
              try {
                "arraybuffer" === e.type
                  ? (t.responseType = "arraybuffer")
                  : "json" === e.type && (t.responseType = "json");
              } catch (e) {}
              if (e.jsonStr)
                t.setRequestHeader(
                  "Content-Type",
                  "application/json;charset=UTF-8"
                ),
                  (a = e.jsonStr);
              else if (e.formData) {
                a = new FormData();
                for (let t in e.formData)
                  Object.prototype.hasOwnProperty.call(e.formData, t) &&
                    a.append(t, e.formData[t]);
              } else
                t.setRequestHeader(
                  "Content-Type",
                  "application/json;charset=UTF-8"
                );
              t.send(a);
            } else if ("GET" === e.method) {
              let r = null;
              if (e.queryStr) {
                r = "?";
                for (let t in e.queryStr)
                  Object.prototype.hasOwnProperty.call(e.queryStr, t) &&
                    e.queryStr[t] &&
                    "" !== e.queryStr[t] &&
                    (r += `${t}=${e.queryStr[t]}&`);
              }
              const a = r ? `${e.url}${r.slice(0, -1)}` : e.url;
              t.open("GET", a);
              const o = n.default.get("token");
              if (
                (o &&
                  !1 !== e.setToken &&
                  t.setRequestHeader("Authorization", o),
                e.headers)
              )
                for (let r in e.headers)
                  Object.prototype.hasOwnProperty.call(e.headers, r) &&
                    t.setRequestHeader(r, e.headers[r]);
              try {
                "arraybuffer" === e.type
                  ? (t.responseType = "arraybuffer")
                  : "json" === e.type && (t.responseType = "json");
              } catch (e) {}
              t.send();
            } else {
              if ("HEAD" !== e.method)
                throw new Error("UNKNOWN ajax request method");
              {
                let r = null;
                if (e.queryStr) {
                  r = "?";
                  for (let t in e.queryStr)
                    Object.prototype.hasOwnProperty.call(e.queryStr, t) &&
                      e.queryStr[t] &&
                      "" !== e.queryStr[t] &&
                      (r += `${t}=${e.queryStr[t]}&`);
                }
                const a = r ? `${e.url}${r.slice(0, -1)}` : e.url;
                t.open("HEAD", a);
                const o = n.default.get("token");
                if (
                  (o &&
                    !1 !== e.setToken &&
                    t.setRequestHeader("Authorization", o),
                  e.headers)
                )
                  for (let r in e.headers)
                    Object.prototype.hasOwnProperty.call(e.headers, r) &&
                      t.setRequestHeader(r, e.headers[r]);
                try {
                  "arraybuffer" === e.type
                    ? (t.responseType = "arraybuffer")
                    : "json" === e.type && (t.responseType = "json");
                } catch (e) {}
                t.send();
              }
            }
          })({
            ...e,
            success: (e) => {
              t(e);
            },
            error: (e) => {
              r(e);
            },
          });
        });
        return (t.method = e.method), t;
      };
    },
    32285: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.POST_TRANSFER_TO_MAIN_WALLET_SUCCESS =
          t.POST_TRANSFER_TO_MAIN_WALLET_REQUEST =
          t.POST_TRANSFER_TO_MAIN_WALLET_FAILURE =
          t.CRICKET_LOGIN_ACTION =
          t.CHANGE_CRICKET_PATH =
            void 0),
        (t.CRICKET_LOGIN_ACTION = "cricket/CRICKET_LOGIN_ACTION"),
        (t.CHANGE_CRICKET_PATH = "cricket/CHANGE_CRICKET_PATH"),
        (t.POST_TRANSFER_TO_MAIN_WALLET_REQUEST =
          "cricket/POST_TRANSFER_TO_MAIN_WALLET_REQUEST"),
        (t.POST_TRANSFER_TO_MAIN_WALLET_SUCCESS =
          "cricket/POST_TRANSFER_TO_MAIN_WALLET_SUCCESS"),
        (t.POST_TRANSFER_TO_MAIN_WALLET_FAILURE =
          "cricket/POST_TRANSFER_TO_MAIN_WALLET_FAILURE");
    },
    34291: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(9404)),
        o = r(51628),
        _ = r(93185),
        E = u(r(67618)),
        i = u(r(36697)),
        s = u(r(3242)),
        T = u(r(38743)),
        A = u(r(62144)),
        S = u(r(61625)),
        l = u(r(80125));
      function u(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            a = new WeakMap();
        return (u = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            o,
            _ = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return _;
          if ((n = t ? a : r)) {
            if (n.has(e)) return n.get(e);
            n.set(e, _);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((o =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? n(_, t, o)
                : (_[t] = e[t]));
          return _;
        })(e, t);
      }
      const c = {
        menuOpen: !1,
        isSingleWindow: !0,
        global498Msg: n.default.Map(),
        showGlobal498Msg: !1,
        isLoading: !1,
        isSendingDeletePostPut: !1,
        timer: Date.now(),
        timerRef: null,
        pageLoaded: !1,
        prompt: null,
      };
      t.default = function () {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : c,
          r = arguments.length > 1 ? arguments[1] : void 0;
        (t.isLoading = !0 === r.isLoading),
          "boolean" == typeof r.isSendingDeletePostPut &&
            (t.isSendingDeletePostPut = !0 === r.isSendingDeletePostPut);
        let a = "",
          u = !1;
        switch (r.type) {
          case i.API_ERROR_CODE_498:
            switch (r.constant) {
              case A.PUT_CHECK_AFFILIATE_FAILURE:
              case E.GET_CHECK_AGENT_FAILURE:
              case E.GET_CHECK_ULAGENT_FAILURE:
              case A.AJAX_GET_USER_SUB_WALLET_FAILURE:
              case S.GET_PROMO_WINNERS_FAILURE:
              case S.GET_USER_PROMO_STATIST_FAILURE:
              case A.SEND_FORGET_PASSWORD_SMS_FAILURE:
              case A.SEND_FORGET_PASSWORD_EMAIL_FAILURE:
              case A.RESET_PASSWORD_WITH_CODE_FAILURE:
              case l.AJAX_GET_CRYPTO_ACCOUNT_INFO_FAIL:
                return {
                  ...t,
                };
              case T.POST_GET_ALL_REWARD_FAILURE:
              case T.PUT_MISSION_CLAIM_REWARD_FAILURE: {
                var R;
                const e = o.i18n[`error.${r.constant}.${r.payload.code}`],
                  a =
                    (null === (R = r.customizedFailMsg) || void 0 === R
                      ? void 0
                      : R[r.payload.code]) || e;
                return {
                  ...t,
                  showGlobal498Msg: !0,
                  global498Msg: n.default.Map({
                    msg: a,
                    code: r.payload.code,
                    locationState: r.payload.locationState,
                    constant: r.constant,
                  }),
                };
              }
              case s.AJAX_POST_SEND_PAYMENT_FAILURE:
                if (3 === r.payload.code && r.payload.msg)
                  return {
                    ...t,
                  };
              default:
                if (
                  ((a =
                    r.failMessage ||
                    o.i18n[`error.${r.constant}.${r.payload.code}`] ||
                    o.i18n[`error.${r.constant}.general`] ||
                    (null === (e = r.payload) || void 0 === e
                      ? void 0
                      : e.msg)),
                  r.payload.replace)
                ) {
                  const e = `${r.payload.replace}`
                    .split("||")
                    .reduce((e, t, r) => ((e[`P_${r}`] = t), e), {});
                  a = (0, _.i18nVariables)(a, e);
                }
                return (
                  r.exception && (a = `Error Code : ${r.code}\n${a}`),
                  (u =
                    r.constant === E.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE &&
                    2 === r.payload.code),
                  {
                    ...t,
                    showGlobal498Msg: !u,
                    global498Msg: n.default.Map({
                      msg: a,
                      code: r.payload.code,
                      locationState: r.payload.locationState,
                      constant: r.constant,
                    }),
                    gameproviderid: r.gameproviderid,
                  }
                );
            }
          case i.OPEN_ERROR_MODAL:
            return {
              ...t,
              showGlobal498Msg: !0,
              global498Msg: n.default.Map(r.payload),
            };
          case i.CLOSE_ERROR_MODAL:
            return {
              ...t,
              showGlobal498Msg: !1,
              global498Msg: c.global498Msg,
            };
          case i.TOGGLE_MENU:
            return (
              document.body.className.indexOf("disable-scroll") < 0
                ? (document.body.className = "disable-scroll")
                : (document.body.className = ""),
              {
                ...t,
                menuOpen: !t.menuOpen,
              }
            );
          case i.CLOSE_MENU:
            return (
              document.body.className.indexOf("disable-scroll") >= 0 &&
                (document.body.className = ""),
              {
                ...t,
                menuOpen: !1,
              }
            );
          case i.TIMER_COUNTING:
            return {
              ...t,
              timer: Date.now(),
            };
          case i.PAGE_LOADED_ACTION:
            return {
              ...t,
              pageLoaded: !0,
            };
          case i.SET_PROMPT:
            return {
              ...t,
              prompt: r.payload,
            };
          default:
            return t;
        }
      };
    },
    34440: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = r(47459),
        o = a(r(34291)),
        _ = a(r(15659)),
        E = a(r(6656)),
        i = a(r(81458)),
        s = a(r(23071)),
        T = a(r(58689)),
        A = a(r(89468)),
        S = a(r(49863)),
        l = a(r(2887)),
        u = a(r(23940)),
        c = a(r(54829)),
        R = a(r(7982)),
        d = a(r(71041)),
        p = a(r(22069)),
        I = a(r(83475)),
        P = a(r(65400)),
        O = a(r(61064)),
        f = a(r(47431)),
        m = a(r(36729)),
        L = a(r(81503)),
        C = a(r(97236)),
        y = r(62144);
      const g = (0, n.combineReducers)({
        app: o.default,
        games: _.default,
        draw: E.default,
        players: i.default,
        xpayments: s.default,
        news: T.default,
        epayments: A.default,
        promo: S.default,
        settings: l.default,
        agents: u.default,
        deposits: c.default,
        staticpagesettings: R.default,
        paymentnotes: d.default,
        jackpotinfos: p.default,
        affiliate: I.default,
        roadmap: P.default,
        dashboard: O.default,
        vip: f.default,
        ssvip: m.default,
        cricket: L.default,
        thirdPartyLogin: C.default,
      });
      t.default = (e, t) => (
        t.type === y.POST_LOGOUT_SUCCESS && (e = void 0), g(e, t)
      );
    },
    35302: (e, t, r) => {
      var a = r(47291);
      (e.exports = function e(t, r, n) {
        return (
          a(r) || ((n = r || n), (r = [])),
          (n = n || {}),
          t instanceof RegExp
            ? (function (e, t) {
                var r = e.source.match(/\((?!\?)/g);
                if (r)
                  for (var a = 0; a < r.length; a++)
                    t.push({
                      name: a,
                      prefix: null,
                      delimiter: null,
                      optional: !1,
                      repeat: !1,
                      partial: !1,
                      asterisk: !1,
                      pattern: null,
                    });
                return S(e, t);
              })(t, r)
            : a(t)
            ? (function (t, r, a) {
                for (var n = [], o = 0; o < t.length; o++)
                  n.push(e(t[o], r, a).source);
                return S(new RegExp("(?:" + n.join("|") + ")", l(a)), r);
              })(t, r, n)
            : (function (e, t, r) {
                return u(o(e, r), t, r);
              })(t, r, n)
        );
      }),
        (e.exports.parse = o),
        (e.exports.compile = function (e, t) {
          return s(o(e, t), t);
        }),
        (e.exports.tokensToFunction = s),
        (e.exports.tokensToRegExp = u);
      var n = new RegExp(
        [
          "(\\\\.)",
          "([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))",
        ].join("|"),
        "g"
      );
      function o(e, t) {
        for (
          var r, a = [], o = 0, E = 0, i = "", s = (t && t.delimiter) || "/";
          null != (r = n.exec(e));

        ) {
          var T = r[0],
            S = r[1],
            l = r.index;
          if (((i += e.slice(E, l)), (E = l + T.length), S)) i += S[1];
          else {
            var u = e[E],
              c = r[2],
              R = r[3],
              d = r[4],
              p = r[5],
              I = r[6],
              P = r[7];
            i && (a.push(i), (i = ""));
            var O = null != c && null != u && u !== c,
              f = "+" === I || "*" === I,
              m = "?" === I || "*" === I,
              L = c || s,
              C = d || p,
              y =
                c ||
                ("string" == typeof a[a.length - 1] ? a[a.length - 1] : "");
            a.push({
              name: R || o++,
              prefix: c || "",
              delimiter: L,
              optional: m,
              repeat: f,
              partial: O,
              asterisk: !!P,
              pattern: C ? A(C) : P ? ".*" : _(L, y),
            });
          }
        }
        return E < e.length && (i += e.substr(E)), i && a.push(i), a;
      }
      function _(e, t) {
        return !t || t.indexOf(e) > -1
          ? "[^" + T(e) + "]+?"
          : T(t) + "|(?:(?!" + T(t) + ")[^" + T(e) + "])+?";
      }
      function E(e) {
        return encodeURI(e).replace(/[\/?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function i(e) {
        return encodeURI(e).replace(/[?#]/g, function (e) {
          return "%" + e.charCodeAt(0).toString(16).toUpperCase();
        });
      }
      function s(e, t) {
        for (var r = new Array(e.length), n = 0; n < e.length; n++)
          "object" == typeof e[n] &&
            (r[n] = new RegExp("^(?:" + e[n].pattern + ")$", l(t)));
        return function (t, n) {
          for (
            var o = "",
              _ = t || {},
              s = (n || {}).pretty ? E : encodeURIComponent,
              T = 0;
            T < e.length;
            T++
          ) {
            var A = e[T];
            if ("string" != typeof A) {
              var S,
                l = _[A.name];
              if (null == l) {
                if (A.optional) {
                  A.partial && (o += A.prefix);
                  continue;
                }
                throw new TypeError('Expected "' + A.name + '" to be defined');
              }
              if (a(l)) {
                if (!A.repeat)
                  throw new TypeError(
                    'Expected "' +
                      A.name +
                      '" to not repeat, but received `' +
                      JSON.stringify(l) +
                      "`"
                  );
                if (0 === l.length) {
                  if (A.optional) continue;
                  throw new TypeError(
                    'Expected "' + A.name + '" to not be empty'
                  );
                }
                for (var u = 0; u < l.length; u++) {
                  if (((S = s(l[u])), !r[T].test(S)))
                    throw new TypeError(
                      'Expected all "' +
                        A.name +
                        '" to match "' +
                        A.pattern +
                        '", but received `' +
                        JSON.stringify(S) +
                        "`"
                    );
                  o += (0 === u ? A.prefix : A.delimiter) + S;
                }
              } else {
                if (((S = A.asterisk ? i(l) : s(l)), !r[T].test(S)))
                  throw new TypeError(
                    'Expected "' +
                      A.name +
                      '" to match "' +
                      A.pattern +
                      '", but received "' +
                      S +
                      '"'
                  );
                o += A.prefix + S;
              }
            } else o += A;
          }
          return o;
        };
      }
      function T(e) {
        return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g, "\\$1");
      }
      function A(e) {
        return e.replace(/([=!:$\/()])/g, "\\$1");
      }
      function S(e, t) {
        return (e.keys = t), e;
      }
      function l(e) {
        return e && e.sensitive ? "" : "i";
      }
      function u(e, t, r) {
        a(t) || ((r = t || r), (t = []));
        for (
          var n = (r = r || {}).strict, o = !1 !== r.end, _ = "", E = 0;
          E < e.length;
          E++
        ) {
          var i = e[E];
          if ("string" == typeof i) _ += T(i);
          else {
            var s = T(i.prefix),
              A = "(?:" + i.pattern + ")";
            t.push(i),
              i.repeat && (A += "(?:" + s + A + ")*"),
              (_ += A =
                i.optional
                  ? i.partial
                    ? s + "(" + A + ")?"
                    : "(?:" + s + "(" + A + "))?"
                  : s + "(" + A + ")");
          }
        }
        var u = T(r.delimiter || "/"),
          c = _.slice(-u.length) === u;
        return (
          n || (_ = (c ? _.slice(0, -u.length) : _) + "(?:" + u + "(?=$))?"),
          (_ += o ? "$" : n && c ? "" : "(?=" + u + "|$)"),
          S(new RegExp("^" + _, l(r)), t)
        );
      }
    },
    35345: (e) => {
      "use strict";
      e.exports = URIError;
    },
    36188: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(27179)),
        o = a(r(94188));
      const { defaultCurrency: _, ga: E } = o.default,
        i = (e, t) => {
          window.gtag && window.gtag("event", e, t);
        };
      let s = {};
      const T = {
        loginUser: (e) => {
          E &&
            window.gtag &&
            e &&
            (Array.isArray(E) ? E : [E]).forEach((t) => {
              window.gtag("config", t, {
                user_id: e,
              });
            });
        },
        viewItemList: (e) => {
          i("view_item_list", {
            ...e,
            user_id: n.default.get("playerid"),
          });
        },
        viewItem: (e) => {
          (s = {
            currency: _,
            user_id: n.default.get("playerid"),
            ...e,
          }),
            i("view_item", s);
        },
        addToCart: (e) => {
          (s = {
            ...s,
            value: e.value,
            items: [
              {
                ...s.items[0],
                ...e.items[0],
              },
            ],
          }),
            i("add_to_cart", s);
        },
        beginCheckout: () => {
          i("begin_checkout", s);
        },
        launchGame: function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const {
            distributorid: t,
            gameid: r,
            gameproviderid: a,
            producttypeid: n,
          } = e;
          i("game_start", {
            game_id: r,
            game_provider: a,
            game_distributor: t,
            game_type: n,
          });
        },
      };
      t.default = T;
    },
    36412: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      const a = (0, r(96540).createContext)({});
      t.default = a;
    },
    36556: (e, t, r) => {
      "use strict";
      var a = r(70453),
        n = r(73126),
        o = n([a("%String.prototype.indexOf%")]);
      e.exports = function (e, t) {
        var r = a(e, !!t);
        return "function" == typeof r && o(e, ".prototype.") > -1 ? n([r]) : r;
      };
    },
    36697: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.TOGGLE_MENU =
          t.TIMER_COUNTING =
          t.SET_PROMPT =
          t.PAGE_SCROLL_DIRECTION_CHANGE =
          t.PAGE_LOADED_ACTION =
          t.OPEN_ERROR_MODAL =
          t.CLOSE_MENU =
          t.CLOSE_ERROR_MODAL =
          t.API_INTERNAL_ERROR_CODE =
          t.API_FORBIDDEN_ERROR =
          t.API_ERROR_CODE_498 =
            void 0),
        (t.API_ERROR_CODE_498 = "API_ERROR_CODE_498"),
        (t.CLOSE_ERROR_MODAL = "CLOSE_ERROR_MODAL"),
        (t.TOGGLE_MENU = "app/TOGGLE_MENU"),
        (t.CLOSE_MENU = "app/CLOSE_MENU"),
        (t.API_INTERNAL_ERROR_CODE = "API_INTERNAL_ERROR_CODE"),
        (t.API_FORBIDDEN_ERROR = "API_FORBIDDEN_ERROR"),
        (t.OPEN_ERROR_MODAL = "OPEN_ERROR_MODAL"),
        (t.TIMER_COUNTING = "TIMER_COUNTING"),
        (t.PAGE_LOADED_ACTION = "PAGE_LOADED_ACTION"),
        (t.SET_PROMPT = "SET_PROMPT"),
        (t.PAGE_SCROLL_DIRECTION_CHANGE = "PAGE_SCROLL_DIRECTION_CHANGE");
    },
    36729: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(65051)),
        n = r(9404);
      const o = {
        ssVipLevelInfo: (0, n.fromJS)({}),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        return t.type === a.GET_SSVIP_LEVEL_INFO_SUCCESS
          ? {
              ...e,
              ssVipLevelInfo: (0, n.fromJS)(t.payload),
            }
          : e;
      };
    },
    38452: (e, t, r) => {
      "use strict";
      var a = r(1189),
        n = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
        o = Object.prototype.toString,
        _ = Array.prototype.concat,
        E = r(30041),
        i = r(30592)(),
        s = function (e, t, r, a) {
          if (t in e)
            if (!0 === a) {
              if (e[t] === r) return;
            } else if (
              "function" != typeof (n = a) ||
              "[object Function]" !== o.call(n) ||
              !a()
            )
              return;
          var n;
          i ? E(e, t, r, !0) : E(e, t, r);
        },
        T = function (e, t) {
          var r = arguments.length > 2 ? arguments[2] : {},
            o = a(t);
          n && (o = _.call(o, Object.getOwnPropertySymbols(t)));
          for (var E = 0; E < o.length; E += 1) s(e, o[E], t[o[E]], r[o[E]]);
        };
      (T.supportsDescriptors = !!i), (e.exports = T);
    },
    38560: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.platform =
          t.isMobile =
          t.isIOS =
          t.isDesktop =
          t.isAndroid =
          t.currOS =
          t.currBrowser =
            void 0);
      var n,
        o = a(r(46880));
      const _ = o.default.getParser(window.navigator.userAgent),
        E = (t.currOS = _.getOS().name),
        i = (t.currBrowser = _.getBrowser().name),
        s =
          ((t.isIOS =
            E === o.default.OS_MAP.iOS && i === o.default.BROWSER_MAP.safari),
          (t.isAndroid = E === o.default.OS_MAP.Android),
          (null === (n = window.matchMedia("(pointer:coarse)")) || void 0 === n
            ? void 0
            : n.matches) || "ontouchstart" in window),
        T = _.getPlatform().type || "desktop",
        A = (t.platform = "mobile" === T ? T : "desktop"),
        S = "desktop" === A && s,
        l = window.innerWidth <= 640,
        u = (t.isDesktop = "desktop" === A && !l && !s),
        c = (t.isMobile = "mobile" === A || S || l);
      (window.isDesktop = u), (window.isMobile = c);
    },
    38743: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PUT_MISSION_CLAIM_REWARD_SUCCESS =
          t.PUT_MISSION_CLAIM_REWARD_REQUEST =
          t.PUT_MISSION_CLAIM_REWARD_FAILURE =
          t.POST_GET_ALL_REWARD_SUCCESS =
          t.POST_GET_ALL_REWARD_REQUEST =
          t.POST_GET_ALL_REWARD_FAILURE =
            void 0),
        (t.PUT_MISSION_CLAIM_REWARD_REQUEST =
          "affiliate/PUT_MISSION_CLAIM_REWARD_REQUEST"),
        (t.PUT_MISSION_CLAIM_REWARD_SUCCESS =
          "affiliate/PUT_MISSION_CLAIM_REWARD_SUCCESS"),
        (t.PUT_MISSION_CLAIM_REWARD_FAILURE =
          "affiliate/PUT_MISSION_CLAIM_REWARD_FAILURE"),
        (t.POST_GET_ALL_REWARD_REQUEST =
          "affiliate/POST_GET_ALL_REWARD_REQUEST"),
        (t.POST_GET_ALL_REWARD_SUCCESS =
          "affiliate/POST_GET_ALL_REWARD_SUCCESS"),
        (t.POST_GET_ALL_REWARD_FAILURE =
          "affiliate/POST_GET_ALL_REWARD_FAILURE");
    },
    38751: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.webSocketStatusEnum = t.useWebSocket = t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(96540)),
        o = a(r(70879)),
        _ = a(r(27179)),
        E = a(r(30883)),
        i = r(68686),
        s = a(r(15361)),
        T = r(74848);
      t.useWebSocket = () => (0, n.useContext)(o.default);
      const A = (t.webSocketStatusEnum = {
        CONNECTING: 0,
        OPEN: 1,
        CLOSING: 2,
        CLOSED: 3,
      });
      t.default = (e) => {
        let { children: t } = e;
        const [r, a] = (0, n.useState)(null),
          S = (0, n.useRef)({}),
          l = (0, n.useCallback)(() => {
            r && r.close();
          }, [r]),
          u = (0, n.useCallback)(() => {
            if ((null == r ? void 0 : r.readyState) === A.CONNECTING) return;
            l();
            const e = _.default.get("token");
            a(new E.default(`${i.socketServer}${e ? `?token=${e}` : ""}`));
          }, [l, r]),
          c = (0, n.useCallback)((e, t) => {
            S.current[e] = t;
          }, []),
          R = (0, n.useCallback)((e) => {
            delete S.current[e];
          }, []);
        return (
          (0, s.default)(() => {
            r &&
              (r.onmessage = (e) => {
                try {
                  const t = JSON.parse(e.data),
                    { type: r } = t;
                  S.current[r] && S.current[r](t);
                } catch (e) {
                  console.log("error", e);
                }
              });
          }, [r]),
          (0, T.jsx)(o.default.Provider, {
            value: {
              webSocket: r,
              connectWebsocket: u,
              closeWebsocket: l,
              subscribe: c,
              unSubscribe: R,
            },
            children: t,
          })
        );
      };
    },
    39418: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.showMiniGamesPath =
          t.showGameProvidersList =
          t.prepareFavoriteGameMap =
          t.platformModalGame =
          t.openSportsGame =
          t.navToFavoriteGameProviderMobile =
          t.isHotGameToProviderPage =
          t.isFavoriteGameProvider =
          t.hasFilterGameType =
          t.getSortedTagGameList =
          t.getMobileHotGameRenderData =
          t.getMobileFavoriteGameRenderData =
          t.getHotGameImgPath =
          t.getFavoriteGameName =
          t.getFavoriteGameImgPath =
          t.getDesktopHotGameRenderData =
          t.getDesktopFavoriteGameRenderData =
          t.getCurrentGameType =
          t.batchedFromJS =
            void 0);
      var n,
        o = r(19593),
        _ = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(9404)),
        E = a(r(94188)),
        i = r(8087),
        s = r(51628),
        T = a(r(15062)),
        A = r(93185),
        S = r(71850);
      const l = E.default.portal.apiServer.imageServer,
        u =
          (null === (n = E.default.brand.customMobile) || void 0 === n
            ? void 0
            : n.isSportsPlatformExisted) || !1,
        c = [
          i.gameType.ANIMAL,
          i.gameType.SPORTS,
          i.gameType.LIVE,
          i.gameType.ESPORTS,
          i.gameType.LOTTERY,
        ],
        R = (e) => {
          let {
            producttypeid: t,
            gameproviderid: r,
            gameid: a,
            defaultImage: n,
            imagePath: o,
          } = e;
          return !n && o
            ? `${l}${o}`
            : m(a) || c.includes(t)
            ? `https://img.alltocon.com/img/static/desktop/sub-menu/sub-${t.toLocaleLowerCase()}-${r.toLocaleLowerCase()}.png`
            : `https://img.alltocon.com/img/static/game/${(0,
              A.getGameIconLocale)(s.currLocale)}/${r}/${
                null == a ? void 0 : a.toLocaleLowerCase()
              }.png`;
        };
      t.getHotGameImgPath = R;
      const d = [
          i.gameType.ANIMAL,
          i.gameType.SPORTS,
          i.gameType.LIVE,
          i.gameType.ESPORTS,
        ],
        p = (e) => {
          let { producttypeid: t, gameproviderid: r, gameid: a } = e;
          return C(a) || d.includes(t)
            ? `https://img.alltocon.com/img/static/desktop/sub-menu/sub-${t.toLocaleLowerCase()}-${r.toLocaleLowerCase()}.png`
            : t === i.gameType.LOTTERY
            ? (0, A.getGameImgPath)(r, a, !1)
            : (0, A.getGameImgPath)(r, a, !0);
        };
      t.getFavoriteGameImgPath = p;
      const I = (e, t) =>
        e.sort((e, r) => {
          var a, n, o, _;
          return (
            ((null === (a = e.get("egametags")) ||
            void 0 === a ||
            null === (n = a.find((e) => e.get("tagid") === t)) ||
            void 0 === n
              ? void 0
              : n.get("gameorder")) || 9999) -
            ((null === (o = r.get("egametags")) ||
            void 0 === o ||
            null === (_ = o.find((e) => e.get("tagid") === t)) ||
            void 0 === _
              ? void 0
              : _.get("gameorder")) || 9999)
          );
        });
      (t.getSortedTagGameList = (e) => {
        let { tagid: t, gameList: r, gameTags: a } = e,
          n = r || (0, _.List)();
        switch (t) {
          case i.gameTagEnum.FAVORITE:
            break;
          case i.gameTagEnum.ALL: {
            const e = a
                .map((e) => e.get("tagid"))
                .filter((e) => e !== i.gameTagEnum.ALL),
              { tagGameGroupList: t, noTagGameList: o } = ((e, t) => {
                let r = t.map(() => (0, _.List)()),
                  a = (0, _.List)();
                return (
                  e.forEach((e) => {
                    const n = e.get("tags");
                    if (n) {
                      const a = t.findIndex((e) => n.includes(e));
                      if (a > -1) return void (r = r.set(a, r.get(a).push(e)));
                    }
                    a = a.push(e);
                  }),
                  {
                    tagGameGroupList: r,
                    noTagGameList: a,
                  }
                );
              })(r, e);
            n = t
              .map((t, r) => {
                const a = t.groupBy((e) => e.get("gameproviderid")),
                  n = e.get(r);
                return a
                  .map((e) => I(e, n))
                  .reduce((e, t) => e.concat(t), (0, _.List)());
              })
              .push(o)
              .flatten(!0);
            break;
          }
          case i.gameTagEnum.ASC:
            n = n.sort((e, t) => {
              const r = e.getIn(["gamename", s.currLocale]),
                a = t.getIn(["gamename", s.currLocale]);
              return r > a ? 1 : r < a ? -1 : 0;
            });
            break;
          case i.gameTagEnum.DESC:
            n = n.sort((e, t) => {
              const r = e.getIn(["gamename", s.currLocale]),
                a = t.getIn(["gamename", s.currLocale]);
              return r > a ? -1 : r < a ? 1 : 0;
            });
            break;
          default: {
            const e = r.filter((e) => {
              var r;
              return null === (r = e.get("tags")) || void 0 === r
                ? void 0
                : r.includes(t);
            });
            n = I(e, t);
            break;
          }
        }
        return n;
      }),
        (t.hasFilterGameType = [
          i.gameType.EGAME,
          i.gameType.MPG,
          i.gameType.CHESS,
        ]);
      const P = (t.showGameProvidersList = [
        i.gameType.EGAME,
        i.gameType.LOTTERY,
        i.gameType.MPG,
        i.gameType.CHESS,
        i.gameType.MINI_GAME,
      ]);
      (t.showMiniGamesPath = [
        T.default.ROOT,
        T.default.LAUNCHGAME,
        T.default.SPORT_PAGE,
      ]),
        (t.getCurrentGameType = () => {
          switch (location.pathname) {
            case T.default.CHESS:
              return i.gameType.CHESS;
            case T.default.MPG:
              return i.gameType.MPG;
            default:
              return i.gameType.EGAME;
          }
        });
      const O = (t.platformModalGame = [
          "SABA",
          "CMDBET",
          "UFABET",
          "RWY",
          "SBOBET",
        ]),
        f = (e, t, r) => {
          O.includes(e) ? r && r() : t && t();
        };
      (t.openSportsGame = f),
        (t.batchedFromJS = async (e) => {
          try {
            let t = [];
            const r = 50,
              a = e.data;
            for (let e = 0; e < a.length; e++) {
              const n = a[e];
              t.push(_.default.fromJS(n)),
                (e + 1) % r === 0 &&
                  (await new Promise((e) => setTimeout(e, 0)));
            }
            return _.default.List(t);
          } catch (t) {
            return _.default.fromJS(e.data);
          }
        });
      const m = (e) => "hot_game_provider" === e;
      t.isHotGameToProviderPage = m;
      const L = (e, t) => {
        if (!e) return;
        const r = e.get("productType"),
          a = e.get("distributor"),
          n = e.get("gameId"),
          o = (0, A.getName)(e.get("gameName")),
          _ = e.get("gameProvider"),
          E = e.get("defaultImage"),
          i = e.get("imagePath");
        return {
          producttypeid: r,
          distributorid: a,
          gameid: n,
          gameName: o,
          gameproviderid: _,
          defaultImage: E,
          imagePath: i,
          imgPath: R({
            producttypeid: r,
            gameproviderid: _,
            gameid: n,
            defaultImage: E,
            imagePath: i,
          }),
          maintenance: (0, A.isMaintenance)(t, [r, _]),
          favoriteGameMap: y({
            gameid: n,
            producttypeid: r,
            distributorid: a,
            gameproviderid: _,
            gamename: e.get("gameName"),
          }),
        };
      };
      (t.getMobileHotGameRenderData = (e) => {
        let {
          game: t,
          maintenanceMap: r,
          launchGame: a,
          changeGameQuery: n,
          isSportTemplate: _,
          toSportPage: E,
          setSportsGame: i,
        } = e;
        const s = L(t, r);
        if (!s) return;
        const {
          producttypeid: T,
          distributorid: A,
          gameid: S,
          gameproviderid: l,
          maintenance: c,
        } = s;
        return {
          ...s,
          handleHotGameClick: () => {
            if (!c) {
              const e = () => {
                (0, o.navToHotGameProviderMobile)(S, T, l, n) ||
                  (a &&
                    a({
                      producttypeid: T,
                      distributorid: A,
                      gameid: S,
                      gameproviderid: l,
                    }));
              };
              if (_ && "LUCKY_SPORTS" === A && "Lobby" === S) null == E || E();
              else if (u && i) {
                const t = {
                  producttypeid: T,
                  distributorid: A,
                  gameid: S,
                  gameproviderid: l,
                };
                f(
                  l,
                  () => e(),
                  () => i(t)
                );
              } else e();
            }
          },
        };
      }),
        (t.getDesktopHotGameRenderData = (e) => {
          let { game: t, maintenanceMap: r, launchGame: a, historyPush: n } = e;
          const o = L(t, r);
          if (!o) return;
          const {
            producttypeid: _,
            distributorid: E,
            gameid: i,
            gameproviderid: s,
            maintenance: A,
          } = o;
          return {
            ...o,
            handleHotGameClick: () => {
              if (!A)
                if ((0, S.isLaunchSportPage)(s)) n(S.desktopSportPagePath);
                else if (m(i)) {
                  const e = T.default[_];
                  n(`${e}`, {
                    activeTabProvider: s,
                  });
                } else
                  a({
                    producttypeid: _,
                    distributorid: E,
                    gameid: i,
                    gameproviderid: s,
                  });
            },
          };
        }),
        (t.getFavoriteGameName = (e) => {
          let {
            gameid: t,
            producttypeid: r,
            gameproviderid: a,
            gameName: n,
            getProviderName: o,
          } = e;
          return P.includes(r) ? (C(t) ? o(a) : n) : o(a);
        });
      const C = (e) => null === e;
      t.isFavoriteGameProvider = C;
      const y = (e) => {
        let {
          gameid: t,
          producttypeid: r,
          distributorid: a,
          gameproviderid: n,
          gamename: o,
        } = e;
        return _.default.fromJS({
          gameid: t,
          producttypeid: r,
          distributorid: a,
          gameproviderid: n,
          gamename: o,
        });
      };
      (t.prepareFavoriteGameMap = y),
        (t.getMobileFavoriteGameRenderData = (e) => {
          let {
            game: t,
            maintenanceMap: r,
            launchGame: a,
            changeGameQuery: n,
            isSportTemplate: o,
            toSportPage: _,
            setSportsGame: E,
          } = e;
          if (!t) return;
          const i = t.get("producttypeid"),
            s = t.get("distributorid"),
            T = t.get("gameid"),
            S = (0, A.getName)(t.get("gamename")),
            l = t.get("gameproviderid"),
            c = t.get("imagePath"),
            R = p({
              producttypeid: i,
              gameproviderid: l,
              gameid: T,
              imagePath: c,
            }),
            d = (0, A.isMaintenance)(r, [i, l]),
            I = y({
              gameid: T,
              producttypeid: i,
              distributorid: s,
              gameproviderid: l,
              gamename: t.get("gamename"),
            });
          return {
            producttypeid: i,
            distributorid: s,
            gameid: T,
            gameName: S,
            gameproviderid: l,
            imagePath: c,
            imgPath: R,
            maintenance: d,
            handleFavoriteGameClick: () => {
              if (!d) {
                const e = () => {
                  g(T, i, l, n) ||
                    (a &&
                      a({
                        producttypeid: i,
                        distributorid: s,
                        gameid: T,
                        gameproviderid: l,
                      }));
                };
                if (o && "LUCKY_SPORTS" === s && "Lobby" === T)
                  null == _ || _();
                else if (u && E) {
                  const t = {
                    producttypeid: i,
                    distributorid: s,
                    gameid: T,
                    gameproviderid: l,
                  };
                  f(
                    l,
                    () => e(),
                    () => E(t)
                  );
                } else e();
              }
            },
            favoriteGameMap: I,
          };
        }),
        (t.getDesktopFavoriteGameRenderData = (e) => {
          let { game: t, maintenanceMap: r, launchGame: a, historyPush: n } = e;
          if (!t) return;
          const o = t.get("producttypeid"),
            _ = t.get("distributorid"),
            E = t.get("gameid"),
            i = (0, A.getName)(t.get("gamename")),
            s = t.get("gameproviderid"),
            l = t.get("imagePath"),
            u = p({
              producttypeid: o,
              gameproviderid: s,
              gameid: E,
              imagePath: l,
            }),
            c = (0, A.isMaintenance)(r, [o, s]),
            R = y({
              gameid: E,
              producttypeid: o,
              distributorid: _,
              gameproviderid: s,
              gamename: t.get("gamename"),
            });
          return {
            producttypeid: o,
            distributorid: _,
            gameid: E,
            gameName: i,
            gameproviderid: s,
            imagePath: l,
            imgPath: u,
            maintenance: c,
            handleFavoriteGameClick: () => {
              if (!c)
                if ((0, S.isLaunchSportPage)(s)) n(S.desktopSportPagePath);
                else if (C(E)) {
                  const e = T.default[o];
                  n(`${e}`, {
                    activeTabProvider: s,
                  });
                } else
                  a({
                    producttypeid: o,
                    distributorid: _,
                    gameid: E,
                    gameproviderid: s,
                  });
            },
            favoriteGameMap: R,
          };
        });
      const g = function (e, t, r, a) {
        let n =
          !(arguments.length > 4 && void 0 !== arguments[4]) || arguments[4];
        return (
          !!C(e) &&
          (a &&
            a({
              type: t,
              provider: r,
              showGameList: n,
            }),
          !0)
        );
      };
      t.navToFavoriteGameProviderMobile = g;
    },
    40060: (e, t, r) => {
      "use strict";
      var a = r(24994);
      t.A = void 0;
      var n = r(47459),
        o = a(r(32080)),
        _ = a(r(96685)),
        E = a(r(52621)),
        i = a(r(34440));
      const s = (0, n.compose)(
          (0, n.applyMiddleware)((0, _.default)(o.default), (0, E.default)())
        ),
        T = (0, n.createStore)(i.default, s);
      t.A = T;
    },
    41237: (e) => {
      "use strict";
      e.exports = EvalError;
    },
    41333: (e) => {
      "use strict";
      e.exports = function () {
        if (
          "function" != typeof Symbol ||
          "function" != typeof Object.getOwnPropertySymbols
        )
          return !1;
        if ("symbol" == typeof Symbol.iterator) return !0;
        var e = {},
          t = Symbol("test"),
          r = Object(t);
        if ("string" == typeof t) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
        if ("[object Symbol]" !== Object.prototype.toString.call(r)) return !1;
        for (var a in ((e[t] = 42), e)) return !1;
        if ("function" == typeof Object.keys && 0 !== Object.keys(e).length)
          return !1;
        if (
          "function" == typeof Object.getOwnPropertyNames &&
          0 !== Object.getOwnPropertyNames(e).length
        )
          return !1;
        var n = Object.getOwnPropertySymbols(e);
        if (1 !== n.length || n[0] !== t) return !1;
        if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
        if ("function" == typeof Object.getOwnPropertyDescriptor) {
          var o = Object.getOwnPropertyDescriptor(e, t);
          if (42 !== o.value || !0 !== o.enumerable) return !1;
        }
        return !0;
      };
    },
    42675: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.GET_ALL_PAYMENT_NOTES_SUCCESS =
          t.GET_ALL_PAYMENT_NOTES_REQUEST =
          t.GET_ALL_PAYMENT_NOTES_FAILURE =
            void 0),
        (t.GET_ALL_PAYMENT_NOTES_REQUEST =
          "paymentnotes/GET_ALL_PAYMENT_NOTES_REQUEST"),
        (t.GET_ALL_PAYMENT_NOTES_SUCCESS =
          "paymentnotes/GET_ALL_PAYMENT_NOTES_SUCCESS"),
        (t.GET_ALL_PAYMENT_NOTES_FAILURE =
          "paymentnotes/GET_ALL_PAYMENT_NOTES_FAILURE");
    },
    43206: (e, t, r) => {
      "use strict";
      var a = r(30041),
        n = r(30592)(),
        o = r(74462).functionsHaveConfigurableNames(),
        _ = r(69675);
      e.exports = function (e, t) {
        if ("function" != typeof e) throw new _("`fn` is not a function");
        return (
          (arguments.length > 2 && !!arguments[2] && !o) ||
            (n ? a(e, "name", t, !0, !0) : a(e, "name", t)),
          e
        );
      };
    },
    44363: (e, t, r) => {
      "use strict";
      e.exports = r(22799);
    },
    45228: (e) => {
      "use strict";
      var t = Object.getOwnPropertySymbols,
        r = Object.prototype.hasOwnProperty,
        a = Object.prototype.propertyIsEnumerable;
      e.exports = (function () {
        try {
          if (!Object.assign) return !1;
          var e = new String("abc");
          if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
            return !1;
          for (var t = {}, r = 0; r < 10; r++)
            t["_" + String.fromCharCode(r)] = r;
          if (
            "0123456789" !==
            Object.getOwnPropertyNames(t)
              .map(function (e) {
                return t[e];
              })
              .join("")
          )
            return !1;
          var a = {};
          return (
            "abcdefghijklmnopqrst".split("").forEach(function (e) {
              a[e] = e;
            }),
            "abcdefghijklmnopqrst" ===
              Object.keys(Object.assign({}, a)).join("")
          );
        } catch (e) {
          return !1;
        }
      })()
        ? Object.assign
        : function (e, n) {
            for (
              var o,
                _,
                E = (function (e) {
                  if (null == e)
                    throw new TypeError(
                      "Object.assign cannot be called with null or undefined"
                    );
                  return Object(e);
                })(e),
                i = 1;
              i < arguments.length;
              i++
            ) {
              for (var s in (o = Object(arguments[i])))
                r.call(o, s) && (E[s] = o[s]);
              if (t) {
                _ = t(o);
                for (var T = 0; T < _.length; T++)
                  a.call(o, _[T]) && (E[_[T]] = o[_[T]]);
              }
            }
            return E;
          };
    },
    47119: (e) => {
      "use strict";
      e.exports = "undefined" != typeof Reflect && Reflect && Reflect.apply;
    },
    47291: (e) => {
      e.exports =
        Array.isArray ||
        function (e) {
          return "[object Array]" == Object.prototype.toString.call(e);
        };
    },
    47431: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(4049)),
        n = r(9404);
      const o = {
        isUpdateVipSigin: !1,
        vipLevelInfo: (0, n.fromJS)({}),
        newVipSetting: (0, n.fromJS)({}),
        vipSettingData: !1,
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.PUT_UPDATE_VIP_SIGIN_BOUNS_REQ:
            return {
              ...e,
              isUpdateVipSigin: !0,
            };
          case a.PUT_UPDATE_VIP_SIGIN_BOUNS_SUC:
          case a.PUT_UPDATE_VIP_SIGIN_BOUNS_ERR:
            return {
              ...e,
              isUpdateVipSigin: !1,
            };
          case a.GET_VIP_LEVEL_INFO_SUCCESS:
            return {
              ...e,
              vipLevelInfo: (0, n.fromJS)(t.payload),
            };
          case a.GET_NEW_VIP_SETTING_REQ:
            return {
              ...e,
              vipSettingData: !1,
            };
          case a.GET_NEW_VIP_SETTING_SUC:
            return {
              ...e,
              newVipSetting: (0, n.fromJS)(t.payload),
              vipSettingData: !0,
            };
          default:
            return e;
        }
      };
    },
    47742: (e, t, r) => {
      "use strict";
      var a = r(98311),
        n = r(76308),
        o = r(38452);
      e.exports = function () {
        a();
        var e = n();
        return (
          o(
            Promise.prototype,
            {
              finally: e,
            },
            {
              finally: function () {
                return Promise.prototype.finally !== e;
              },
            }
          ),
          e
        );
      };
    },
    48648: (e) => {
      "use strict";
      e.exports =
        ("undefined" != typeof Reflect && Reflect.getPrototypeOf) || null;
    },
    49863: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(61625)),
        o = a(r(9404)),
        _ = r(91860);
      const E = {
        isLoading: !1,
        promos: o.default.Map(),
        userPromos: o.default.fromJS({
          data: [],
          total: 0,
        }),
        last5UserPromos: o.default.List(),
        banners: o.default.List(),
        bannersDidFetched: !1,
        applyPromoSucc: !1,
        claimSuccess: !1,
        getDepositamtForSelfselectSuccess: !1,
        depositAmt: null,
        transferToMainAndGetBalanceForSelectSuccess: !1,
        mainWalletBalance: null,
        floatingAdsSetting: o.default.List(),
        promoWinners: o.default.List(),
        giftPromo: o.default.Map(),
        userGiftPromo: o.default.List(),
        getUserGiftPromoSuc: !1,
        showPromoDetailModal: !1,
        closeAds: o.default.Map(),
        refreshPromoCenterKey: null,
        refreshNotiCenterRewardInfoType: {
          type: null,
          key: null,
        },
        userPromoStatist: o.default.fromJS({
          data: {},
          isInit: !1,
          isLoading: !1,
          isOpen: !1,
          isPendingSettle: !1,
        }),
        depositPromoOpts: [],
        regLimitTimePromo: [],
        isRegLimitTimePromoSuc: !1,
        isRegLimitTimePromoLoading: !1,
      };
      t.default = function () {
        var e, t;
        let r =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          a = arguments.length > 1 ? arguments[1] : void 0;
        switch (a.type) {
          case n.GET_PROMOS_REQUEST:
            return {
              ...r,
              isLoading: !0,
            };
          case n.GET_PROMOS_SUCCESS: {
            var i;
            const [e, t, n] = a.payload;
            let _ = o.default.fromJS({
              active: null === (i = t[0]) || void 0 === i ? void 0 : i.pageid,
              bannertype: e.bannertype,
              countdowndisplay: !!e.countdowndisplay,
              ecTitleEnabled: e.ecTitleEnabled,
              categories: t,
              promoMap: t.reduce((e, t, r) => ((e[t.pageid] = n[r]), e), {}),
            });
            if (!_.hasIn(["promoMap", "ALL"])) {
              let e = {};
              n.forEach((t) => {
                t.forEach((t) => {
                  e[t.promoid] = t;
                });
              }),
                (e = o.default.fromJS(e).valueSeq()),
                (_ = _.setIn(["promoMap", "ALL"], e));
            }
            return {
              ...r,
              isLoading: !1,
              promos: _,
            };
          }
          case n.GET_PROMOS_FAILURE:
            return {
              ...r,
              isLoading: !1,
            };
          case n.GET_USER_PROMOS_REQUEST:
            return {
              ...r,
              isLoading: !0,
            };
          case n.GET_USER_PROMOS_SUCCESS: {
            const e = a.payload.total,
              t = o.default.fromJS(a.payload.data);
            let n = r.last5UserPromos,
              _ = r.userPromos.set("total", e);
            return (
              a.last5 ? (n = t) : (_ = _.set("data", t)),
              {
                ...r,
                userPromos: _,
                last5UserPromos: n,
                isLoading: !1,
              }
            );
          }
          case n.GET_USER_PROMOS_FAILURE:
            return {
              ...r,
              isLoading: !1,
            };
          case n.POST_PROMO_REQ_REQUEST:
            return {
              ...r,
              isLoading: !0,
              applyPromoSucc: !1,
            };
          case n.POST_PROMO_REQ_SUCCESS:
            return {
              ...r,
              isLoading: !1,
              applyPromoSucc: !0,
            };
          case n.POST_PROMO_REQ_FAILURE:
            return {
              ...r,
              isLoading: !1,
            };
          case n.GET_BANNERS_REQUEST:
            return {
              ...r,
              isLoading: !0,
            };
          case n.GET_BANNERS_SUCCESS:
            return {
              ...r,
              isLoading: !1,
              bannersDidFetched: !0,
              banners: o.default.fromJS(a.payload),
            };
          case n.GET_BANNERS_FAILURE:
            return {
              ...r,
              isLoading: !1,
              bannersDidFetched: !0,
            };
          case n.POST_CLAIM_REQUEST:
            return {
              ...r,
              isLoading: !0,
              claimSuccess: !1,
            };
          case n.POST_CLAIM_SUCCESS:
            return {
              ...r,
              isLoading: !1,
              claimSuccess: !0,
            };
          case n.POST_CLAIM_FAILURE:
            return {
              ...r,
              isLoading: !1,
              claimSuccess: !1,
            };
          case n.GET_DEPOSITAMT_FOR_SELECT_REQ_REQUEST:
            return {
              ...r,
              isLoading: !0,
              getDepositamtForSelfselectSuccess: !1,
              depositAmt: null,
            };
          case n.GET_DEPOSITAMT_FOR_SELECT_REQ_SUCCESS:
            return {
              ...r,
              isLoading: !1,
              getDepositamtForSelfselectSuccess: !0,
              depositAmt: a.payload,
            };
          case n.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE:
            return {
              ...r,
              isLoading: !1,
              getDepositamtForSelfselectSuccess: !1,
            };
          case n.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_REQUEST:
            return {
              ...r,
              isLoading: !0,
              transferToMainAndGetBalanceForSelectSuccess: !1,
              mainWalletBalance: null,
            };
          case n.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_SUCCESS:
            return {
              ...r,
              isLoading: !1,
              transferToMainAndGetBalanceForSelectSuccess: !0,
              mainWalletBalance: a.payload,
            };
          case n.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_FAILURE:
            return {
              ...r,
              isLoading: !1,
              transferToMainAndGetBalanceForSelectSuccess: !1,
            };
          case n.SWITCH_PROMO_CATEGORY:
            return {
              ...r,
              promos: r.promos.set("active", a.payload),
            };
          case n.MODIFY_PROMO_DETAIL_MODAL_DISPLAY:
            return {
              ...r,
              showPromoDetailModal: a.payload,
            };
          case n.GET_FLOATING_ADS_SUCCESS:
            return {
              ...r,
              floatingAdsSetting: o.default.fromJS(a.payload),
            };
          case n.GET_PROMO_WINNERS_SUCCESS:
            return {
              ...r,
              promoWinners: o.default.fromJS(
                a.payload.map((e, t) => ((e.index = t + 1), e))
              ),
            };
          case n.GET_GIFT_PROMO_SUCCESS:
            return {
              ...r,
              giftPromo: o.default.fromJS(a.payload),
            };
          case n.GET_USER_GIFT_PROMOS_REQUEST:
            return {
              ...r,
              getUserGiftPromoSuc: !1,
            };
          case n.GET_USER_GIFT_PROMOS_SUCCESS:
            return {
              ...r,
              userGiftPromo: o.default.fromJS(
                a.payload.data.filter((e) => e.promoid === a.promoid)
              ),
              getUserGiftPromoSuc: !0,
            };
          case n.GET_USER_GIFT_PROMOS_FAILURE:
            return {
              ...r,
              getUserGiftPromoSuc: !1,
            };
          case n.INIT_USER_PROMO_STATIST_REQUEST:
            return {
              ...r,
              userPromoStatist: o.default.fromJS({
                data: {},
                isInit: !1,
                isLoading: !1,
                isOpen: !1,
              }),
            };
          case n.GET_USER_PROMO_STATIST_REQUEST:
            return {
              ...r,
              userPromoStatist: r.userPromoStatist.set("isLoading", !0),
            };
          case n.GET_USER_PROMO_STATIST_SUCCESS:
            return {
              ...r,
              userPromoStatist: r.userPromoStatist.merge({
                data: a.payload,
                isInit: !0,
                isLoading: !1,
              }),
            };
          case n.GET_USER_PROMO_STATIST_FAILURE:
            return 1003 ===
              (null === (e = a.error) ||
              void 0 === e ||
              null === (t = e.payload) ||
              void 0 === t
                ? void 0
                : t.code)
              ? {
                  ...r,
                  userPromoStatist: r.userPromoStatist.merge({
                    data: o.default.Map(),
                    isInit: !0,
                    isLoading: !1,
                    isPendingSettle: !0,
                  }),
                }
              : {
                  ...r,
                  userPromoStatist: r.userPromoStatist.merge({
                    data: o.default.Map(),
                    isInit: !1,
                    isLoading: !1,
                  }),
                };
          case n.OPEN_USER_PROMO_STATIST:
            return {
              ...r,
              userPromoStatist: r.userPromoStatist.merge({
                isOpen: !0,
              }),
            };
          case n.CLOSE_ADS_ACTION:
            return {
              ...r,
              closeAds: r.closeAds.setIn(a.adsType, a.isClose),
            };
          case n.REFRESH_PROMO_CENTER:
            return {
              ...r,
              refreshPromoCenterKey: new Date().getTime(),
            };
          case n.REFRESH_NOTI_CENTER_REWARD_INFO:
            return {
              ...r,
              refreshNotiCenterRewardInfoType: {
                type: a.rewardType,
                key: new Date().getTime(),
              },
            };
          case n.GET_DEPOSIT_PROMO_OPTS_REQUEST:
            return {
              ...r,
              isRegLimitTimePromoLoading: !0,
            };
          case n.GET_DEPOSIT_PROMO_OPTS_SUCCESS: {
            const { regLimitTimePromo: e, defaultPromos: t } = a.payload,
              n = (0, _.getPromoOpts)(e || [], {
                filterPlatformOnly: !0,
              }).map((e) => ({
                ...e,
                isRegLimitTimePromo: !0,
              })),
              o = n.length > 0 ? n : t;
            return {
              ...r,
              depositPromoOpts: o,
              regLimitTimePromo: n,
              isRegLimitTimePromoSuc: !0,
              isRegLimitTimePromoLoading: !1,
            };
          }
          default:
            return r;
        }
      };
    },
    50477: () => {},
    51628: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.currLocale = t.changeLocale = void 0),
        Object.defineProperty(t, "defaultLocale", {
          enumerable: !0,
          get: function () {
            return _.defaultLocale;
          },
        }),
        (t.getLocale = function (e) {
          r(88956)(`./${i}`)
            .then((r) => {
              (t.i18n = s = r), e && e();
            })
            .catch((a) => {
              (t.currLocale = i = _.defaultLocale),
                n.default.set("locale", _.defaultLocale),
                r(88956)(`./${_.defaultLocale}`)
                  .then((r) => {
                    (t.i18n = s = r), e && e();
                  })
                  .catch((e) => {
                    throw new Error(e);
                  });
            });
        }),
        (t.i18n = t.getLocaleContentByObj = void 0),
        (t.loadNamespaces = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return Promise.all(
            e
              .filter((e) => !s[e])
              .map((e) =>
                r(72983)(`./${e}/${i}`).then((t) => {
                  s[e] = t.default;
                })
              )
          );
        }),
        (t.playeridLocale = void 0);
      var n = a(r(27179)),
        o = a(r(86663)),
        _ = r(94188);
      const E = n.default.get("locale");
      let i = (t.currLocale = void 0);
      if (E) t.currLocale = i = E;
      else {
        const e = (e) => e && e.trim().split(/-|_/)[0],
          r =
            {
              fil: "tl-PH",
            }[navigator.language] || navigator.language,
          a =
            Array.isArray(_.locales) &&
            (_.locales.find((e) =>
              null == r
                ? void 0
                : r.toLowerCase().replace(/_/, "-").includes(e.toLowerCase())
            ) ||
              _.locales.find((t) => e(t) === e(r)));
        (t.currLocale = i =
          (!1 !== _.localeAutoSelected && a) || _.defaultLocale),
          n.default.set("locale", i);
      }
      (t.getLocaleContentByObj = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (null == e ? void 0 : e[i]) ||
          (null == e ? void 0 : e[_.defaultLocale]) ||
          (null == e ? void 0 : e["en-US"]) ||
          ""
        );
      }),
        (t.playeridLocale = n.default.get("playerid"));
      let s = (t.i18n = {});
      t.changeLocale = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : location.pathname;
        if (i === e) return !1;
        n.default.set("locale", e);
        const r = o.default.parse(location.search),
          { locale: a, ..._ } = r;
        if (a) {
          const e = o.default.stringify(_);
          location.href = `${location.origin}${t}${e ? `?${e}` : ""}`;
        } else location.href = t;
      };
    },
    51929: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PUT_REGISTER_AFFILIATE_SUCCESS =
          t.PUT_REGISTER_AFFILIATE_REQUEST =
          t.PUT_REGISTER_AFFILIATE_FAILURE =
          t.GET_AFFILIATE_SETTLEMENT_SUCCESS =
          t.GET_AFFILIATE_SETTLEMENT_REQUEST =
          t.GET_AFFILIATE_SETTLEMENT_FAILURE =
          t.GET_AFFILIATE_SETTLEMENT_DETAIL_SUCCESS =
          t.GET_AFFILIATE_SETTLEMENT_DETAIL_REQUEST =
          t.GET_AFFILIATE_SETTLEMENT_DETAIL_FAILURE =
          t.GET_AFFILIATE_SETTING_SUCCESS =
          t.GET_AFFILIATE_SETTING_REQUEST =
          t.GET_AFFILIATE_SETTING_FAILURE =
          t.GET_AFFILIATE_INFO_SUCCESS =
          t.GET_AFFILIATE_INFO_REQUEST =
          t.GET_AFFILIATE_INFO_FAILURE =
            void 0),
        (t.GET_AFFILIATE_SETTING_REQUEST =
          "affiliate/GET_AFFILIATE_SETTING_REQUEST"),
        (t.GET_AFFILIATE_SETTING_SUCCESS =
          "affiliate/GET_AFFILIATE_SETTING_SUCCESS"),
        (t.GET_AFFILIATE_SETTING_FAILURE =
          "affiliate/GET_AFFILIATE_SETTING_FAILURE"),
        (t.PUT_REGISTER_AFFILIATE_REQUEST =
          "affiliate/PUT_REGISTER_AFFILIATE_REQUEST"),
        (t.PUT_REGISTER_AFFILIATE_SUCCESS =
          "affiliate/PUT_REGISTER_AFFILIATE_SUCCESS"),
        (t.PUT_REGISTER_AFFILIATE_FAILURE =
          "affiliate/PUT_REGISTER_AFFILIATE_FAILURE"),
        (t.GET_AFFILIATE_INFO_REQUEST = "affiliate/GET_AFFILIATE_INFO_REQUEST"),
        (t.GET_AFFILIATE_INFO_SUCCESS = "affiliate/GET_AFFILIATE_INFO_SUCCESS"),
        (t.GET_AFFILIATE_INFO_FAILURE = "affiliate/GET_AFFILIATE_INFO_FAILURE"),
        (t.GET_AFFILIATE_SETTLEMENT_REQUEST =
          "affiliate/GET_AFFILIATE_SETTLEMENT_REQUEST"),
        (t.GET_AFFILIATE_SETTLEMENT_SUCCESS =
          "affiliate/GET_AFFILIATE_SETTLEMENT_SUCCESS"),
        (t.GET_AFFILIATE_SETTLEMENT_FAILURE =
          "affiliate/GET_AFFILIATE_SETTLEMENT_FAILURE"),
        (t.GET_AFFILIATE_SETTLEMENT_DETAIL_REQUEST =
          "affiliate/GET_AFFILIATE_SETTLEMENT_DETAIL_REQUEST"),
        (t.GET_AFFILIATE_SETTLEMENT_DETAIL_SUCCESS =
          "affiliate/GET_AFFILIATE_SETTLEMENT_DETAIL_SUCCESS"),
        (t.GET_AFFILIATE_SETTLEMENT_DETAIL_FAILURE =
          "affiliate/GET_AFFILIATE_SETTLEMENT_DETAIL_FAILURE");
    },
    51959: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.RENEW_UNREAD_MSG_COUNT =
          t.PUT_READ_MSG_SUCCESS =
          t.PUT_READ_MSG_REQUEST =
          t.PUT_READ_MSG_FAILURE =
          t.PUT_DELETE_MSGS_SUCCESS =
          t.PUT_DELETE_MSGS_REQUEST =
          t.PUT_DELETE_MSGS_FAILURE =
          t.GET_SYSTEM_MSGS_SUCCESS =
          t.GET_SYSTEM_MSGS_REQUEST =
          t.GET_SYSTEM_MSGS_FAILURE =
          t.GET_PERSONAL_MSG_DETAIL_FAILURE =
          t.GET_PERSONAL_MSGS_SUCCESS =
          t.GET_PERSONAL_MSGS_REQUEST =
          t.GET_PERSONAL_MSGS_FAILURE =
          t.GET_NEWS_SUCCESS =
          t.GET_NEWS_REQUEST =
          t.GET_NEWS_FAILURE =
          t.GET_MSG_BYID_SUCCESS =
          t.GET_MSG_BYID_REQUEST =
          t.GET_MSG_BYID_FAILURE =
          t.CHANGE_INBOX_TAB =
            void 0),
        (t.GET_NEWS_REQUEST = "news/GET_NEWS_REQUEST"),
        (t.GET_NEWS_SUCCESS = "news/GET_NEWS_SUCCESS"),
        (t.GET_NEWS_FAILURE = "news/GET_NEWS_FAILURE"),
        (t.GET_PERSONAL_MSGS_REQUEST = "news/GET_PERSONAL_MSGS_REQUEST"),
        (t.GET_PERSONAL_MSGS_SUCCESS = "news/GET_PERSONAL_MSGS_SUCCESS"),
        (t.GET_PERSONAL_MSGS_FAILURE = "news/GET_PERSONAL_MSGS_FAILURE"),
        (t.GET_SYSTEM_MSGS_REQUEST = "news/GET_SYSTEM_MSGS_REQUEST"),
        (t.GET_SYSTEM_MSGS_SUCCESS = "news/GET_SYSTEM_MSGS_SUCCESS"),
        (t.GET_SYSTEM_MSGS_FAILURE = "news/GET_SYSTEM_MSGS_FAILURE"),
        (t.GET_MSG_BYID_REQUEST = "news/GET_MSG_BYID_REQUEST"),
        (t.GET_MSG_BYID_SUCCESS = "news/GET_MSG_BYID_SUCCESS"),
        (t.GET_MSG_BYID_FAILURE = "news/GET_MSG_BYID_FAILURE"),
        (t.RENEW_UNREAD_MSG_COUNT = "news/RENEW_UNREAD_MSG_COUNT"),
        (t.PUT_READ_MSG_REQUEST = "news/PUT_READ_MSG_REQUEST"),
        (t.PUT_READ_MSG_SUCCESS = "news/PUT_READ_MSG_SUCCESS"),
        (t.PUT_READ_MSG_FAILURE = "news/PUT_READ_MSG_FAILURE"),
        (t.PUT_DELETE_MSGS_REQUEST = "news/PUT_DELETE_MSGS_REQUEST"),
        (t.PUT_DELETE_MSGS_SUCCESS = "news/PUT_DELETE_MSGS_SUCCESS"),
        (t.PUT_DELETE_MSGS_FAILURE = "news/PUT_DELETE_MSGS_FAILURE"),
        (t.CHANGE_INBOX_TAB = "news/CHANGE_INBOX_TAB"),
        (t.GET_PERSONAL_MSG_DETAIL_FAILURE =
          "news/GET_PERSONAL_MSG_DETAIL_FAILURE");
    },
    52321: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.GET_FINANCE_RISK_SETTING_SUCCESS =
          t.GET_FINANCE_RISK_SETTING_REQUEST =
          t.GET_FINANCE_RISK_SETTING_FAILURE =
          t.GET_DISALLOWED_WITHDRAWAL_SETTING_SUCCESS =
          t.GET_DISALLOWED_WITHDRAWAL_SETTING_REQUEST =
          t.GET_DISALLOWED_WITHDRAWAL_SETTING_FAILURE =
          t.GET_ACTIVE_SHORTCUT_LIST_SUCCESS =
          t.GET_ACTIVE_SHORTCUT_LIST_REQUEST =
          t.GET_ACTIVE_SHORTCUT_LIST_FAILURE =
          t.AJAX_GET_DEPOSIT_TYPE_SUCCESS =
          t.AJAX_GET_DEPOSIT_TYPE_REQUEST =
          t.AJAX_GET_DEPOSIT_TYPE_FAILURE =
            void 0),
        (t.AJAX_GET_DEPOSIT_TYPE_REQUEST =
          "settings/AJAX_GET_DEPOSIT_TYPE_REQUEST"),
        (t.AJAX_GET_DEPOSIT_TYPE_SUCCESS =
          "settings/AJAX_GET_DEPOSIT_TYPE_SUCCESS"),
        (t.AJAX_GET_DEPOSIT_TYPE_FAILURE =
          "settings/AJAX_GET_DEPOSIT_TYPE_FAILURE"),
        (t.GET_ACTIVE_SHORTCUT_LIST_REQUEST =
          "settings/GET_ACTIVE_SHORTCUT_LIST_REQUEST"),
        (t.GET_ACTIVE_SHORTCUT_LIST_SUCCESS =
          "settings/GET_ACTIVE_SHORTCUT_LIST_SUCCESS"),
        (t.GET_ACTIVE_SHORTCUT_LIST_FAILURE =
          "settings/GET_ACTIVE_SHORTCUT_LIST_FAILURE"),
        (t.GET_FINANCE_RISK_SETTING_REQUEST =
          "settings/GET_FINANCE_RISK_SETTING_REQUEST"),
        (t.GET_FINANCE_RISK_SETTING_SUCCESS =
          "settings/GET_FINANCE_RISK_SETTING_SUCCESS"),
        (t.GET_FINANCE_RISK_SETTING_FAILURE =
          "settings/GET_FINANCE_RISK_SETTING_FAILURE"),
        (t.GET_DISALLOWED_WITHDRAWAL_SETTING_REQUEST =
          "settings/GET_DISALLOWED_WITHDRAWAL_SETTING_REQUEST"),
        (t.GET_DISALLOWED_WITHDRAWAL_SETTING_SUCCESS =
          "settings/GET_DISALLOWED_WITHDRAWAL_SETTING_SUCCESS"),
        (t.GET_DISALLOWED_WITHDRAWAL_SETTING_FAILURE =
          "settings/GET_DISALLOWED_WITHDRAWAL_SETTING_FAILURE");
    },
    52585: (e, t, r) => {
      var a = {
        "./pt": 79834,
        "./pt-br": 48303,
        "./pt-br.js": 48303,
        "./pt.js": 79834,
        "./th": 55802,
        "./th.js": 55802,
        "./vi": 21135,
        "./vi.js": 21135,
        "./zh-cn": 52648,
        "./zh-cn.js": 52648,
      };
      function n(e) {
        var t = o(e);
        return r(t);
      }
      function o(e) {
        if (!r.o(a, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return a[e];
      }
      (n.keys = function () {
        return Object.keys(a);
      }),
        (n.resolve = o),
        (e.exports = n),
        (n.id = 52585);
    },
    52621: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(39418);
      t.default = () => (e) => {
        let { dispatch: t, getState: r } = e;
        return (e) => (t) =>
          "ajax/AJAX_GET_ALL_GAME_LIST_SUCCESS" === t.type
            ? (0, a.batchedFromJS)(t.payload.gameWithTags).then((r) => {
                const a = {
                  ...t.payload,
                };
                return (
                  (a.gameWithTags.data = r),
                  e({
                    ...t,
                    payload: a,
                  }),
                  {
                    payload: a,
                  }
                );
              })
            : e(t);
      };
    },
    52796: (e) => {
      "use strict";
      e.exports = function (e, t) {};
    },
    52997: (e) => {
      "use strict";
      e.exports = function (e) {
        if (void 0 === e) return e;
        var t = {};
        return (
          "[[Value]]" in e && (t.value = e["[[Value]]"]),
          "[[Writable]]" in e && (t.writable = !!e["[[Writable]]"]),
          "[[Get]]" in e && (t.get = e["[[Get]]"]),
          "[[Set]]" in e && (t.set = e["[[Set]]"]),
          "[[Enumerable]]" in e && (t.enumerable = !!e["[[Enumerable]]"]),
          "[[Configurable]]" in e && (t.configurable = !!e["[[Configurable]]"]),
          t
        );
      };
    },
    53259: (e, t, r) => {
      "use strict";
      var a =
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
            };
      function n(e, t) {
        if (!(e instanceof t))
          throw new TypeError("Cannot call a class as a function");
      }
      function o(e, t) {
        if (!e)
          throw new ReferenceError(
            "this hasn't been initialised - super() hasn't been called"
          );
        return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
      }
      function _(e, t) {
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
      }
      var E = r(96540),
        i = r(5556),
        s = [],
        T = [];
      function A(e) {
        var t = e(),
          r = {
            loading: !0,
            loaded: null,
            error: null,
          };
        return (
          (r.promise = t
            .then(function (e) {
              return (r.loading = !1), (r.loaded = e), e;
            })
            .catch(function (e) {
              throw ((r.loading = !1), (r.error = e), e);
            })),
          r
        );
      }
      function S(e) {
        var t = {
            loading: !1,
            loaded: {},
            error: null,
          },
          r = [];
        try {
          Object.keys(e).forEach(function (a) {
            var n = A(e[a]);
            n.loading
              ? (t.loading = !0)
              : ((t.loaded[a] = n.loaded), (t.error = n.error)),
              r.push(n.promise),
              n.promise
                .then(function (e) {
                  t.loaded[a] = e;
                })
                .catch(function (e) {
                  t.error = e;
                });
          });
        } catch (e) {
          t.error = e;
        }
        return (
          (t.promise = Promise.all(r)
            .then(function (e) {
              return (t.loading = !1), e;
            })
            .catch(function (e) {
              throw ((t.loading = !1), e);
            })),
          t
        );
      }
      function l(e, t) {
        return E.createElement((r = e) && r.__esModule ? r.default : r, t);
        var r;
      }
      function u(e, t) {
        var A, S;
        if (!t.loading)
          throw new Error("react-loadable requires a `loading` component");
        var u = Object.assign(
            {
              loader: null,
              loading: null,
              delay: 200,
              timeout: null,
              render: l,
              webpack: null,
              modules: null,
            },
            t
          ),
          c = null;
        function R() {
          return c || (c = e(u.loader)), c.promise;
        }
        return (
          s.push(R),
          "function" == typeof u.webpack &&
            T.push(function () {
              if (
                ((e = u.webpack),
                "object" === a(r.m) &&
                  e().every(function (e) {
                    return void 0 !== e && void 0 !== r.m[e];
                  }))
              )
                return R();
              var e;
            }),
          (S = A =
            (function (e) {
              function t(r) {
                n(this, t);
                var a = o(this, e.call(this, r));
                return (
                  R(),
                  (a.state = {
                    error: c.error,
                    pastDelay: !1,
                    timedOut: !1,
                    loading: c.loading,
                    loaded: c.loaded,
                  }),
                  a
                );
              }
              return (
                _(t, e),
                (t.preload = function () {
                  return R();
                }),
                (t.prototype.componentWillMount = function () {
                  var e = this;
                  if (
                    ((this._mounted = !0),
                    this.context.loadable &&
                      Array.isArray(u.modules) &&
                      u.modules.forEach(function (t) {
                        e.context.loadable.report(t);
                      }),
                    c.loading)
                  ) {
                    "number" == typeof u.delay &&
                      (0 === u.delay
                        ? this.setState({
                            pastDelay: !0,
                          })
                        : (this._delay = setTimeout(function () {
                            e.setState({
                              pastDelay: !0,
                            });
                          }, u.delay))),
                      "number" == typeof u.timeout &&
                        (this._timeout = setTimeout(function () {
                          e.setState({
                            timedOut: !0,
                          });
                        }, u.timeout));
                    var t = function () {
                      e._mounted &&
                        (e.setState({
                          error: c.error,
                          loaded: c.loaded,
                          loading: c.loading,
                        }),
                        e._clearTimeouts());
                    };
                    c.promise
                      .then(function () {
                        t();
                      })
                      .catch(function (e) {
                        throw (t(), e);
                      });
                  }
                }),
                (t.prototype.componentWillUnmount = function () {
                  (this._mounted = !1), this._clearTimeouts();
                }),
                (t.prototype._clearTimeouts = function () {
                  clearTimeout(this._delay), clearTimeout(this._timeout);
                }),
                (t.prototype.render = function () {
                  return this.state.loading || this.state.error
                    ? E.createElement(u.loading, {
                        isLoading: this.state.loading,
                        pastDelay: this.state.pastDelay,
                        timedOut: this.state.timedOut,
                        error: this.state.error,
                      })
                    : this.state.loaded
                    ? u.render(this.state.loaded, this.props)
                    : null;
                }),
                t
              );
            })(E.Component)),
          (A.contextTypes = {
            loadable: i.shape({
              report: i.func.isRequired,
            }),
          }),
          S
        );
      }
      function c(e) {
        return u(A, e);
      }
      c.Map = function (e) {
        if ("function" != typeof e.render)
          throw new Error(
            "LoadableMap requires a `render(loaded, props)` function"
          );
        return u(S, e);
      };
      var R = (function (e) {
        function t() {
          return n(this, t), o(this, e.apply(this, arguments));
        }
        return (
          _(t, e),
          (t.prototype.getChildContext = function () {
            return {
              loadable: {
                report: this.props.report,
              },
            };
          }),
          (t.prototype.render = function () {
            return E.Children.only(this.props.children);
          }),
          t
        );
      })(E.Component);
      function d(e) {
        for (var t = []; e.length; ) {
          var r = e.pop();
          t.push(r());
        }
        return Promise.all(t).then(function () {
          if (e.length) return d(e);
        });
      }
      (R.propTypes = {
        report: i.func.isRequired,
      }),
        (R.childContextTypes = {
          loadable: i.shape({
            report: i.func.isRequired,
          }).isRequired,
        }),
        (c.Capture = R),
        (c.preloadAll = function () {
          return new Promise(function (e, t) {
            d(s).then(e, t);
          });
        }),
        (c.preloadReady = function () {
          return new Promise(function (e, t) {
            d(T).then(e, e);
          });
        }),
        (e.exports = c);
    },
    54829: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(55539)),
        n = r(9404),
        o = r(51628);
      const _ = {
        isLoading: !1,
        depositsTypeAvailable: null,
        depositMethodDisplay: (0, n.Map)(),
        depositOrder: (0, n.List)(),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.RESET_DEPOSIT_PAYMENT_TYPE:
            return {
              ...e,
              getDepositPaymentTypesReq: !1,
              getDepositPaymentTypesSuc: !1,
              getDepositPaymentTypesErr: !1,
              depositsTypeAvailable: null,
            };
          case a.GET_DEPOSIT_PAYMENT_TYPE_REQUEST:
            return {
              ...e,
              getDepositPaymentTypesReq: !0,
              getDepositPaymentTypesSuc: !1,
              getDepositPaymentTypesErr: !1,
              depositsTypeAvailable: null,
            };
          case a.GET_DEPOSIT_PAYMENT_TYPE_SUCCESS:
            return {
              ...e,
              getDepositPaymentTypesReq: !1,
              getDepositPaymentTypesSuc: !0,
              getDepositPaymentTypesErr: !1,
              depositsTypeAvailable: t.payload,
            };
          case a.GET_DEPOSIT_PAYMENT_TYPE_FAILURE:
            return {
              ...e,
              getDepositPaymentTypesReq: !1,
              getDepositPaymentTypesSuc: !1,
              getDepositPaymentTypesErr: !0,
            };
          case a.GET_DEPOSIT_METHOD_DISPLAY_SUCCESS:
            return {
              ...e,
              depositMethodDisplay: t.payload.reduce((e, t) => {
                const r = (t = (0, n.fromJS)(t)).get("depositPaymentTypeEnum"),
                  a = t.getIn(["paymentTypeDisplayName", o.currLocale]),
                  _ = t.getIn(["description", o.currLocale]),
                  E = t.getIn(["subPaymentTypeDisplayName", o.currLocale]);
                return e.set(
                  r,
                  (0, n.Map)({
                    paymentTypeDisplayName: a,
                    description: _,
                    subPaymentTypeDisplayName: E,
                  })
                );
              }, (0, n.Map)()),
            };
          case a.GET_DEPOSIT_ORDER_SUCCESS:
            return {
              ...e,
              depositOrder: (0, n.fromJS)(t.payload),
            };
          default:
            return e;
        }
      };
    },
    54893: (e) => {
      (e.exports = function (e, t) {
        if (null == e) return {};
        var r = {};
        for (var a in e)
          if ({}.hasOwnProperty.call(e, a)) {
            if (-1 !== t.indexOf(a)) continue;
            r[a] = e[a];
          }
        return r;
      }),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    55539: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.RESET_DEPOSIT_PAYMENT_TYPE =
          t.GET_DEPOSIT_PAYMENT_TYPE_SUCCESS =
          t.GET_DEPOSIT_PAYMENT_TYPE_REQUEST =
          t.GET_DEPOSIT_PAYMENT_TYPE_FAILURE =
          t.GET_DEPOSIT_ORDER_SUCCESS =
          t.GET_DEPOSIT_ORDER_REQUEST =
          t.GET_DEPOSIT_ORDER_FAILURE =
          t.GET_DEPOSIT_METHOD_DISPLAY_SUCCESS =
          t.GET_DEPOSIT_METHOD_DISPLAY_REQUEST =
          t.GET_DEPOSIT_METHOD_DISPLAY_FAILURE =
            void 0),
        (t.GET_DEPOSIT_PAYMENT_TYPE_REQUEST =
          "deposits/GET_DEPOSIT_PAYMENT_TYPE_REQUEST"),
        (t.GET_DEPOSIT_PAYMENT_TYPE_SUCCESS =
          "deposits/GET_DEPOSIT_PAYMENT_TYPE_SUCCESS"),
        (t.GET_DEPOSIT_PAYMENT_TYPE_FAILURE =
          "deposits/GET_DEPOSIT_PAYMENT_TYPE_FAILURE"),
        (t.GET_DEPOSIT_METHOD_DISPLAY_REQUEST =
          "deposits/GET_DEPOSIT_METHOD_DISPLAY_REQUEST"),
        (t.GET_DEPOSIT_METHOD_DISPLAY_SUCCESS =
          "deposits/GET_DEPOSIT_METHOD_DISPLAY_SUCCESS"),
        (t.GET_DEPOSIT_METHOD_DISPLAY_FAILURE =
          "deposits/GET_DEPOSIT_METHOD_DISPLAY_FAILURE"),
        (t.GET_DEPOSIT_ORDER_REQUEST = "deposits/GET_DEPOSIT_ORDER_REQUEST"),
        (t.GET_DEPOSIT_ORDER_SUCCESS = "deposits/GET_DEPOSIT_ORDER_SUCCESS"),
        (t.GET_DEPOSIT_ORDER_FAILURE = "deposits/GET_DEPOSIT_ORDER_FAILURE"),
        (t.RESET_DEPOSIT_PAYMENT_TYPE = "deposits/RESET_DEPOSIT_PAYMENT_TYPE");
    },
    55594: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.pageLoadedAction = t.getURLParams = t.getDomainId = void 0);
      var n = a(r(63009)),
        o = r(60532);
      (t.getURLParams = (e) => {
        let t = new URLSearchParams(location.search.substring(1)).get(e);
        return (
          t ? sessionStorage.setItem(e, t) : (t = sessionStorage.getItem(e)), t
        );
      }),
        (t.getDomainId = (e) => {
          const t = (0, o.formatWildcardDomain)(window.location.hostname);
          return t
            ? null == e
              ? void 0
              : e[(0, n.default)(t.replace(/www./g, "")).toString()]
            : "";
        }),
        (t.pageLoadedAction = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : () => {};
          "complete" === document.readyState
            ? e()
            : window.addEventListener("load", e);
        });
    },
    55701: (e, t, r) => {
      "use strict";
      var a = r(69675),
        n = r(9957),
        o = {
          __proto__: null,
          "[[Configurable]]": !0,
          "[[Enumerable]]": !0,
          "[[Get]]": !0,
          "[[Set]]": !0,
          "[[Value]]": !0,
          "[[Writable]]": !0,
        };
      e.exports = function (e) {
        if (!e || "object" != typeof e) return !1;
        for (var t in e) if (n(e, t) && !o[t]) return !1;
        var r = n(e, "[[Value]]") || n(e, "[[Writable]]"),
          _ = n(e, "[[Get]]") || n(e, "[[Set]]");
        if (r && _)
          throw new a(
            "Property Descriptors may not be both accessor and data descriptors"
          );
        return !0;
      };
    },
    56291: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.agentCookie = t.affiliateCookie = t.affiliateAccCookie = void 0),
        (t.getCookie = s),
        (t.loginInfoCookie = void 0),
        (t.removeCookie = T),
        (t.setCookie = i),
        (t.ulagentCookie = void 0);
      var n = a(r(40955)),
        o = a(r(95178)),
        _ = r(83597),
        E = a(r(31653));
      function i(e, t) {
        let r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : 600,
          a = arguments.length > 3 ? arguments[3] : void 0;
        var n = new Date();
        n.setTime(n.getTime() + 1e3 * r);
        var o = "expires=" + n.toUTCString();
        document.cookie = `${e}=${t};${o};path=/${a ? `;domain=${a}` : ""};`;
      }
      function s(e) {
        for (
          var t = e + "=",
            r = decodeURIComponent(document.cookie).split(";"),
            a = 0;
          a < r.length;
          a++
        ) {
          for (var n = r[a]; " " === n.charAt(0); ) n = n.substring(1);
          if (0 === n.indexOf(t)) return n.substring(t.length, n.length);
        }
        return "";
      }
      function T(e, t) {
        s(e) &&
          (document.cookie = `${e}=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/${
            t ? `;domain=${t}` : ""
          };`);
      }
      (t.agentCookie = {
        set(e) {
          i(`agent-${E.default.getCurrency()}`, e, _.affiliateExpireTime);
        },
        get: () => s(`agent-${E.default.getCurrency()}`) || s("app_agent"),
        remove() {
          T(`agent-${E.default.getCurrency()}`), T("app_agent");
        },
      }),
        (t.ulagentCookie = {
          set(e) {
            i(
              `ulagent-${E.default.getCurrency()}`,
              null == e ? void 0 : e.toLowerCase(),
              _.affiliateExpireTime
            );
          },
          get() {
            const e = new URLSearchParams(window.location.search),
              t =
                s(`ulagent-${E.default.getCurrency()}`) ||
                s("app_ulagent") ||
                e.get("uagt");
            return null == t ? void 0 : t.toLowerCase();
          },
          remove() {
            T(`ulagent-${E.default.getCurrency()}`), T("app_ulagent");
          },
        }),
        (t.affiliateCookie = {
          set(e) {
            i(`affiliate-${E.default.getCurrency()}`, e, _.affiliateExpireTime);
          },
          get: () => s(`affiliate-${E.default.getCurrency()}`),
          remove() {
            T(`affiliate-${E.default.getCurrency()}`);
          },
        }),
        (t.affiliateAccCookie = {
          set(e) {
            i(
              `affiliateAcc-${E.default.getCurrency()}`,
              e,
              _.affiliateExpireTime
            );
          },
          get: () => s(`affiliateAcc-${E.default.getCurrency()}`),
          remove() {
            T(`affiliateAcc-${E.default.getCurrency()}`);
          },
        });
      const A = "l_i";
      t.loginInfoCookie = {
        set(e, t) {
          const r = n.default
            .encrypt(e, "7f9X#mK2pL$qR5vZ8yA@cE3wN6bH")
            .toString();
          i(A, r, t);
        },
        get() {
          const e = {
              playerId: "",
              playerPassword: "",
            },
            t = s(A);
          if (!t) return e;
          try {
            const e = n.default.decrypt(t, "7f9X#mK2pL$qR5vZ8yA@cE3wN6bH");
            return JSON.parse(e.toString(o.default));
          } catch (t) {
            return console.log("loginInfoCookie error: ", t), e;
          }
        },
        remove() {
          T(A);
        },
      };
    },
    56654: (e, t, r) => {
      "use strict";
      var a = r(94459);
      e.exports = function (e, t) {
        return e === t ? 0 !== e || 1 / e == 1 / t : a(e) && a(t);
      };
    },
    57417: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = r(68686),
        o = a(r(27179));
      const _ = () => {
        const e = o.default.get("token");
        e &&
          fetch(`${n.baseURL}/wallets`, {
            method: "GET",
            keepalive: !0,
            headers: {
              "content-type": "application/json",
              Authorization: e,
            },
          });
      };
      t.default = () => {
        "/launchgame" !== window.location.pathname &&
          (window.addEventListener("beforeunload", () => {
            _(), o.default.set("lg", !1);
          }),
          window.addEventListener("visibilitychange", () => {
            o.default.get("lg") && "hidden" === document.visibilityState && _();
          }));
      };
    },
    58068: (e) => {
      "use strict";
      e.exports = SyntaxError;
    },
    58501: (e, t, r) => {
      "use strict";
      var a = r(82439);
      e.exports = function (e) {
        return "symbol" == typeof e
          ? "Symbol"
          : "bigint" == typeof e
          ? "BigInt"
          : a(e);
      };
    },
    58689: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = i(r(51959)),
        o = i(r(61625)),
        _ = a(r(9404)),
        E = r(8087);
      function i(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            a = new WeakMap();
        return (i = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            o,
            _ = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return _;
          if ((n = t ? a : r)) {
            if (n.has(e)) return n.get(e);
            n.set(e, _);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((o =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? n(_, t, o)
                : (_[t] = e[t]));
          return _;
        })(e, t);
      }
      const s = {
        isLoading: !1,
        isLoadingMessage: !1,
        isLoadingMsgDetail: !1,
        didDeleteMsgsSucc: !1,
        didDeleteMsgsFail: !1,
        activeInboxTabIndex: "1",
        news: _.default.fromJS({
          objs: {},
          ids: [],
          list: [],
          total: 0,
          isLoaded: !1,
        }),
        messageMsgs: _.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        announcementMsgs: _.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        msgDetails: _.default.Map(),
        unreadMsgCount: _.default.Map({
          [E.msgTypeEnum.PROMO]: 0,
          [E.msgTypeEnum.PERSONAL]: 0,
          [E.msgTypeEnum.ROULETTE_PROMO]: 0,
        }),
        totalUnreadMsgCount: 0,
        messageIsNotExist: "",
        currPersonalQuery: void 0,
        currSystemQuery: void 0,
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : s,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case n.GET_NEWS_REQUEST:
            return {
              ...e,
              isLoading: !0,
              news: t.shouldReset ? s.news : e.news,
            };
          case n.GET_NEWS_SUCCESS: {
            const { data: r, total: a } = t.payload;
            let n = e.news.get("ids").toJS();
            return (
              r.forEach((e) => {
                n.includes(e.annid) || n.push(e.annid);
              }),
              {
                ...e,
                isLoading: !1,
                news: _.default.fromJS({
                  objs: r.reduce(
                    (e, t) => ((e[t.annid] = t), e),
                    e.news.get("objs").toJS()
                  ),
                  ids: n,
                  list: r,
                  total: a,
                  isLoaded: !0,
                }),
              }
            );
          }
          case n.GET_NEWS_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case n.GET_PERSONAL_MSGS_REQUEST:
            return {
              ...e,
              isLoadingMessage: !0,
              messageMsgs: t.shouldReset ? s.messageMsgs : e.messageMsgs,
            };
          case n.GET_PERSONAL_MSGS_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoadingMessage: !1,
              messageMsgs: _.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.msgid] = t), e),
                  e.messageMsgs.get("objs").toJS()
                ),
                ids: e.messageMsgs
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.msgid)),
                total: a,
              }),
              currPersonalQuery: t.query,
            };
          }
          case n.GET_PERSONAL_MSGS_FAILURE:
            return {
              ...e,
              isLoadingMessage: !1,
            };
          case n.GET_SYSTEM_MSGS_REQUEST:
            return {
              ...e,
              isLoadingMessage: !0,
              announcementMsgs: t.shouldReset
                ? s.announcementMsgs
                : e.announcementMsgs,
            };
          case n.GET_SYSTEM_MSGS_SUCCESS: {
            const { data: r, total: a } = t.payload;
            return {
              ...e,
              isLoadingMessage: !1,
              announcementMsgs: _.default.fromJS({
                objs: r.reduce(
                  (e, t) => ((e[t.annid] = t), e),
                  e.announcementMsgs.get("objs").toJS()
                ),
                ids: e.announcementMsgs
                  .get("ids")
                  .toJS()
                  .concat(r.map((e) => e.annid)),
                total: a,
              }),
              currSystemQuery: t.query,
            };
          }
          case n.GET_SYSTEM_MSGS_FAILURE:
            return {
              ...e,
              isLoadingMessage: !1,
            };
          case n.GET_MSG_BYID_REQUEST:
            return {
              ...e,
              isLoadingMsgDetail: !0,
              messageIsNotExist: "",
            };
          case n.GET_MSG_BYID_SUCCESS:
            return {
              ...e,
              isLoadingMsgDetail: !1,
              msgDetails: e.msgDetails.set(
                t.msgId,
                _.default.fromJS(t.payload)
              ),
            };
          case n.GET_MSG_BYID_FAILURE:
            return {
              ...e,
              isLoadingMsgDetail: !1,
              messageIsNotExist: t.msgId,
            };
          case n.PUT_READ_MSG_REQUEST: {
            const r = e[`${t.msgType}Msgs`].getIn(["objs", t.msgId]),
              a = e.msgDetails.get(t.msgId);
            return {
              ...e,
              isLoading: !0,
              [`${t.msgType}Msgs`]: r
                ? e[`${t.msgType}Msgs`].setIn(
                    ["objs", t.msgId],
                    r.set("status", 1)
                  )
                : e[`${t.msgType}Msgs`],
              msgDetails: e.msgDetails.set(t.msgId, a.set("status", 1)),
            };
          }
          case n.PUT_READ_MSG_SUCCESS:
          case n.PUT_READ_MSG_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case n.PUT_DELETE_MSGS_REQUEST:
            return {
              ...e,
              isLoading: !0,
              didDeleteMsgsSucc: !1,
              didDeleteMsgsFail: !1,
            };
          case n.PUT_DELETE_MSGS_SUCCESS: {
            let r = e.msgDetails;
            return (
              t.idList.forEach((e) => {
                r = r.delete(e);
              }),
              {
                ...e,
                isLoading: !1,
                didDeleteMsgsSucc: !0,
                msgDetails: r,
              }
            );
          }
          case n.PUT_DELETE_MSGS_FAILURE:
            return {
              ...e,
              isLoading: !1,
              didDeleteMsgsFail: !0,
            };
          case n.RENEW_UNREAD_MSG_COUNT: {
            const r = t.data,
              a = r.reduce((e, t) => {
                let r = e;
                return (r = r.set(t.msgtype, t.count)), r;
              }, e.unreadMsgCount),
              n = Object.keys(r).reduce((e, t) => e + r[t].count, 0);
            return {
              ...e,
              isLoading: !1,
              unreadMsgCount: a,
              totalUnreadMsgCount: n,
            };
          }
          case n.CHANGE_INBOX_TAB:
            return {
              ...e,
              activeInboxTabIndex: t.activeIndex,
            };
          case o.POST_PROMO_REQ_SUCCESS:
            return t.autoapprove
              ? {
                  ...e,
                  unreadMsgCount: e.unreadMsgCount.set(
                    E.msgTypeEnum.PROMO,
                    e.unreadMsgCount.get(E.msgTypeEnum.PROMO) + 1
                  ),
                  totalUnreadMsgCount: e.totalUnreadMsgCount + 1,
                }
              : e;
          default:
            return e;
        }
      };
    },
    58780: (e, t, r) => {
      "use strict";
      var a = r(69675),
        n = r(6537),
        o = r(55701),
        _ = r(84769),
        E = r(79173),
        i = r(97856),
        s = r(13541),
        T = r(56654),
        A = r(29576);
      e.exports = function (e, t, r) {
        if (!n(e)) throw new a("Assertion failed: Type(O) is not Object");
        if (!s(t)) throw new a("Assertion failed: P is not a Property Key");
        var S = o(r) ? r : A(r);
        if (!o(S))
          throw new a(
            "Assertion failed: Desc is not a valid Property Descriptor"
          );
        return _(i, T, E, e, t, S);
      };
    },
    58968: (e) => {
      "use strict";
      e.exports = Math.floor;
    },
    60532: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.formatWildcardDomain = void 0),
        (t.formatWildcardDomain = (e) =>
          e.replace(/^([0-9a-zA-Z]+\.)+([0-9a-zA-Z-]+\.[a-zA-Z]+)$/, "www.$2"));
    },
    61064: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(8087),
        n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(74478));
      const o = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : 100,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return new Array(e + 1).fill("").reduce((r, a, n) => {
            const o = e - n + 1;
            return (r[n] = t ? o : o > 21 ? 21 : o), r;
          }, {});
        },
        _ = Object.keys(a.ssvipGroupEnum).length,
        E = {
          ecShowRewardContent: !0,
          isSSVipEnable: !1,
          rewardActivityList: {},
          ecDisplaySetting: {
            ecDisplayVip: a.vipDisplayTypeEnum.DISABLE,
            ecDisplaySSVip: a.vipDisplayTypeEnum.DISABLE,
            ecDisplayMission: !1,
            ecDisplayActivityMission: !1,
            ecH5DisplayDownloadApp: !0,
            pcMemberCenterMenuSorted: [],
            h5MemberCenterMenuSorted: [],
            playerPictureDisplay: !1,
            ecEnableAnytimeRebate: !1,
            ecDisplayLatestBet: !1,
            ecDisplayHighRoller: !1,
            ecDisplayRaceContest: !1,
          },
          mission: {
            unallowMissionRewardNoticeI18n: {},
          },
          vipBadgeNumberMap: {},
          vipMaxLevel: 0,
          newPcMemberCenterSwitch: !0,
          newH5MemberCenterSwitch: !0,
          customizedAppDownloadLink: "",
          ecEnabledAnytimeRebateSettlement: !1,
          allowMessageWindow: !1,
          isGetVipTypeSuc: !1,
          isDisplaySettingSuc: !1,
        };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case n.GET_DISPLAY_SETTING_REQUEST:
            return {
              ...e,
              isDisplaySettingSuc: !1,
            };
          case n.GET_DISPLAY_SETTING_SUCCESS: {
            const {
                mission: {
                  ecDisplayMission: r,
                  ecShowRewardContent: a,
                  ecDisplayAffiliateMission: n,
                  ecHomeEntrance: E,
                  unallowMissionRewardNotice: i,
                },
                memberCenterTmpSetting: {
                  memberCenterTemplateSetting: {
                    newPcMemberCenterSwitch: s = !0,
                    newH5MemberCenterSwitch: T = !0,
                    downloadH5AppMemberCenterSwitch: A = !0,
                    downloadH5AppMemberCenterLink: S = "",
                    pcMemberCenterSorted: l,
                    h5MemberCenterSorted: u,
                    playerPictureDisplay: c,
                  },
                },
                depositLeaderboard: R,
                giftPromo: d,
                roulette: p,
                newVip: I,
                ssVip: P,
                anytimeRebateSetting: { isEnable: O, isManual: f },
                notificationCenterSetting: { allowMessageWindow: m },
                race: {
                  ecpTodayBetAmount: L = !1,
                  ecpTodayLargerBetAmount: C = !1,
                  raceContest: y = !1,
                },
              } = t.payload,
              g = O && f,
              U = e.isGetVipTypeSuc && e.isSSVipEnable,
              N = o(U ? _ : (null == I ? void 0 : I.vipMaxLevel) || 20, U),
              D =
                (null == l ? void 0 : l.length) > 0
                  ? l
                  : e.pcMemberCenterSorted,
              G =
                (null == u ? void 0 : u.length) > 0
                  ? u
                  : e.h5MemberCenterSorted,
              M = c || !1;
            return {
              ...e,
              ecShowRewardContent: a,
              rewardActivityList: {
                depositLeaderboard: R,
                giftPromo: d,
                roulette: p,
                vipPageType: I.integrationMenuStyle,
              },
              ecDisplaySetting: {
                ecDisplayMission: r,
                ecDisplayActivityMission: E,
                ecDisplayAffiliateMission: n,
                ecDisplayVip: I.memberCenterNewVipStyle,
                ecDisplaySSVip: null == P ? void 0 : P.memberCenterSsVipStyle,
                ecH5DisplayDownloadApp: A,
                pcMemberCenterMenuSorted: D,
                h5MemberCenterMenuSorted: G,
                playerPictureDisplay: M,
                ecEnableAnytimeRebate: O,
                ecDisplayLatestBet: L,
                ecDisplayHighRoller: C,
                ecDisplayRaceContest: y,
              },
              mission: {
                unallowMissionRewardNoticeI18n: i,
              },
              vipBadgeNumberMap: N,
              vipMaxLevel: I.vipMaxLevel,
              ssVipMaxLevel: null == P ? void 0 : P.vipMaxLevel,
              newPcMemberCenterSwitch: s,
              newH5MemberCenterSwitch: T,
              customizedAppDownloadLink: S,
              ecEnabledAnytimeRebateSettlement: g,
              allowMessageWindow: m,
              isDisplaySettingSuc: !0,
            };
          }
          case n.GET_DISPLAY_SETTING_FAILURE:
            return {
              ...e,
            };
          case n.GET_VIP_TYPE_SUCCESS:
            return {
              ...e,
              isGetVipTypeSuc: !0,
              isSSVipEnable: t.payload,
              vipBadgeNumberMap: o(
                t.payload ? _ : (null == e ? void 0 : e.vipMaxLevel) || 20,
                t.payload
              ),
            };
          default:
            return e;
        }
      };
    },
    61376: (e, t, r) => {
      "use strict";
      e.exports = r(70453);
    },
    61625: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.SWITCH_PROMO_CATEGORY =
          t.REFRESH_PROMO_CENTER =
          t.REFRESH_NOTI_CENTER_REWARD_INFO =
          t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_SUCCESS =
          t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_REQUEST =
          t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_FAILURE =
          t.POST_PROMO_REQ_SUCCESS =
          t.POST_PROMO_REQ_REQUEST =
          t.POST_PROMO_REQ_FAILURE =
          t.POST_CLAIM_SUCCESS =
          t.POST_CLAIM_REQUEST =
          t.POST_CLAIM_FAILURE =
          t.OPEN_USER_PROMO_STATIST =
          t.MODIFY_PROMO_DETAIL_MODAL_DISPLAY =
          t.INIT_USER_PROMO_STATIST_REQUEST =
          t.GET_USER_PROMO_STATIST_SUCCESS =
          t.GET_USER_PROMO_STATIST_REQUEST =
          t.GET_USER_PROMO_STATIST_FAILURE =
          t.GET_USER_PROMOS_SUCCESS =
          t.GET_USER_PROMOS_REQUEST =
          t.GET_USER_PROMOS_FAILURE =
          t.GET_USER_GIFT_PROMOS_SUCCESS =
          t.GET_USER_GIFT_PROMOS_REQUEST =
          t.GET_USER_GIFT_PROMOS_FAILURE =
          t.GET_PROMO_WINNERS_SUCCESS =
          t.GET_PROMO_WINNERS_REQUEST =
          t.GET_PROMO_WINNERS_FAILURE =
          t.GET_PROMOS_SUCCESS =
          t.GET_PROMOS_REQUEST =
          t.GET_PROMOS_FAILURE =
          t.GET_GIFT_PROMO_SUCCESS =
          t.GET_GIFT_PROMO_REQUEST =
          t.GET_GIFT_PROMO_FAILURE =
          t.GET_FLOATING_ADS_SUCCESS =
          t.GET_FLOATING_ADS_REQUEST =
          t.GET_FLOATING_ADS_FAILURE =
          t.GET_DEPOSIT_PROMO_OPTS_SUCCESS =
          t.GET_DEPOSIT_PROMO_OPTS_REQUEST =
          t.GET_DEPOSITAMT_FOR_SELECT_REQ_SUCCESS =
          t.GET_DEPOSITAMT_FOR_SELECT_REQ_REQUEST =
          t.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE =
          t.GET_BANNERS_SUCCESS =
          t.GET_BANNERS_REQUEST =
          t.GET_BANNERS_FAILURE =
          t.CLOSE_ADS_ACTION =
          t.CLAIM_ALL_PROMOS_AND_ANYTIMEREBATE_FAILURE =
            void 0),
        (t.GET_PROMOS_REQUEST = "promo/GET_PROMOS_REQUEST"),
        (t.GET_PROMOS_SUCCESS = "promo/GET_PROMOS_SUCCESS"),
        (t.GET_PROMOS_FAILURE = "promo/GET_PROMOS_FAILURE"),
        (t.GET_USER_PROMOS_REQUEST = "GET_USER_PROMOS_REQUEST"),
        (t.GET_USER_PROMOS_SUCCESS = "GET_USER_PROMOS_SUCCESS"),
        (t.GET_USER_PROMOS_FAILURE = "GET_USER_PROMOS_FAILURE"),
        (t.GET_BANNERS_REQUEST = "promo/GET_BANNERS_REQUEST"),
        (t.GET_BANNERS_SUCCESS = "promo/GET_BANNERS_SUCCESS"),
        (t.GET_BANNERS_FAILURE = "promo/GET_BANNERS_FAILURE"),
        (t.POST_PROMO_REQ_REQUEST = "promo/POST_PROMO_REQ_REQUEST"),
        (t.POST_PROMO_REQ_SUCCESS = "promo/POST_PROMO_REQ_SUCCESS"),
        (t.POST_PROMO_REQ_FAILURE = "promo/POST_PROMO_REQ_FAILURE"),
        (t.POST_CLAIM_REQUEST = "promo/POST_CLAIM_REQUEST"),
        (t.POST_CLAIM_SUCCESS = "promo/POST_CLAIM_SUCCESS"),
        (t.POST_CLAIM_FAILURE = "promo/POST_CLAIM_FAILURE"),
        (t.GET_DEPOSITAMT_FOR_SELECT_REQ_REQUEST =
          "promo/GET_DEPOSITAMT_FOR_SELECT_REQ_REQUEST"),
        (t.GET_DEPOSITAMT_FOR_SELECT_REQ_SUCCESS =
          "promo/GET_DEPOSITAMT_FOR_SELECT_REQ_SUCCESS"),
        (t.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE =
          "promo/GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE"),
        (t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_REQUEST =
          "promo/POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_REQUEST"),
        (t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_SUCCESS =
          "promo/POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_SUCCESS"),
        (t.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_FAILURE =
          "promo/POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_FAILURE"),
        (t.SWITCH_PROMO_CATEGORY = "promo/SWITCH_PROMO_CATEGORY"),
        (t.MODIFY_PROMO_DETAIL_MODAL_DISPLAY =
          "promo/MODIFY_PROMO_DETAIL_MODAL_DISPLAY"),
        (t.GET_FLOATING_ADS_REQUEST = "/promo/GET_FLOATING_ADS_REQUEST"),
        (t.GET_FLOATING_ADS_SUCCESS = "/promo/GET_FLOATING_ADS_SUCCESS"),
        (t.GET_FLOATING_ADS_FAILURE = "/promo/GET_FLOATING_ADS_FAILURE"),
        (t.GET_PROMO_WINNERS_REQUEST = "/promo/GET_PROMO_WINNERS_REQUEST"),
        (t.GET_PROMO_WINNERS_SUCCESS = "/promo/GET_PROMO_WINNERS_SUCCESS"),
        (t.GET_PROMO_WINNERS_FAILURE = "/promo/GET_PROMO_WINNERS_FAILURE"),
        (t.GET_GIFT_PROMO_REQUEST = "/promo/GET_GIFT_PROMO_REQUEST"),
        (t.GET_GIFT_PROMO_SUCCESS = "/promo/GET_GIFT_PROMO_SUCCESS"),
        (t.GET_GIFT_PROMO_FAILURE = "/promo/GET_GIFT_PROMO_FAILURE"),
        (t.GET_USER_GIFT_PROMOS_REQUEST =
          "/promo/GET_USER_GIFT_PROMOS_REQUEST"),
        (t.GET_USER_GIFT_PROMOS_SUCCESS =
          "/promo/GET_USER_GIFT_PROMOS_SUCCESS"),
        (t.GET_USER_GIFT_PROMOS_FAILURE =
          "/promo/GET_USER_GIFT_PROMOS_FAILURE"),
        (t.INIT_USER_PROMO_STATIST_REQUEST =
          "promo/INIT_USER_PROMO_STATIST_REQUEST"),
        (t.GET_USER_PROMO_STATIST_REQUEST =
          "promo/GET_USER_PROMO_STATIST_REQUEST"),
        (t.GET_USER_PROMO_STATIST_SUCCESS =
          "promo/GET_USER_PROMO_STATIST_SUCCESS"),
        (t.GET_USER_PROMO_STATIST_FAILURE =
          "promo/GET_USER_PROMO_STATIST_FAILURE"),
        (t.OPEN_USER_PROMO_STATIST = "promo/OPEN_USER_PROMO_STATIST"),
        (t.CLOSE_ADS_ACTION = "/promo/CLOSE_ADS_ACTION"),
        (t.CLAIM_ALL_PROMOS_AND_ANYTIMEREBATE_FAILURE =
          "promo/CLAIM_ALL_PROMOS_AND_ANYTIMEREBATE_FAILURE"),
        (t.REFRESH_PROMO_CENTER = "promo/REFRESH_PROMO_CENTER"),
        (t.REFRESH_NOTI_CENTER_REWARD_INFO =
          "promo/REFRESH_NOTI_CENTER_REWARD_INFO"),
        (t.GET_DEPOSIT_PROMO_OPTS_REQUEST =
          "promo/GET_DEPOSIT_PROMO_OPTS_REQUEST"),
        (t.GET_DEPOSIT_PROMO_OPTS_SUCCESS =
          "promo/GET_DEPOSIT_PROMO_OPTS_SUCCESS");
    },
    62066: (e) => {
      "use strict";
      function t(e) {
        return "/" === e.charAt(0);
      }
      function r(e, t) {
        for (var r = t, a = r + 1, n = e.length; a < n; r += 1, a += 1)
          e[r] = e[a];
        e.pop();
      }
      e.exports = function (e, a) {
        void 0 === a && (a = "");
        var n,
          o = (e && e.split("/")) || [],
          _ = (a && a.split("/")) || [],
          E = e && t(e),
          i = a && t(a),
          s = E || i;
        if (
          (e && t(e) ? (_ = o) : o.length && (_.pop(), (_ = _.concat(o))),
          !_.length)
        )
          return "/";
        if (_.length) {
          var T = _[_.length - 1];
          n = "." === T || ".." === T || "" === T;
        } else n = !1;
        for (var A = 0, S = _.length; 0 <= S; S--) {
          var l = _[S];
          "." === l
            ? r(_, S)
            : ".." === l
            ? (r(_, S), A++)
            : A && (r(_, S), A--);
        }
        if (!s) for (; A--; A) _.unshift("..");
        !s || "" === _[0] || (_[0] && t(_[0])) || _.unshift("");
        var u = _.join("/");
        return n && "/" !== u.substr(-1) && (u += "/"), u;
      };
    },
    62144: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.RESET_FORGET_SUCCESS =
          t.RESET_ANYTIME_REBATE_NOTI =
          t.PUT_RESEND_ACT_TOKEN_SUCCESS =
          t.PUT_RESEND_ACT_TOKEN_FAILURE =
          t.PUT_RESEND_ACT_TOKEN =
          t.PUT_PROFILE_PICTURE_SUCCESS =
          t.PUT_CHECK_AFFILIATE_WITH_ALERT_SUCCESS =
          t.PUT_CHECK_AFFILIATE_WITH_ALERT_REQUEST =
          t.PUT_CHECK_AFFILIATE_WITH_ALERT_FAILURE =
          t.PUT_CHECK_AFFILIATE_SUCCESS =
          t.PUT_CHECK_AFFILIATE_REQUEST =
          t.PUT_CHECK_AFFILIATE_FAILURE =
          t.PUT_ANYTIME_REBATE_SETTLE_SUCCESS =
          t.PUT_ANYTIME_REBATE_SETTLE_REQ =
          t.PUT_ANYTIME_REBATE_SETTLE_FAILURE =
          t.POST_REGISTER_SUCCESS =
          t.POST_REGISTER_REQUEST =
          t.POST_REGISTER_FAILURE =
          t.POST_LOGOUT_SUCCESS =
          t.POST_LOGOUT_REQUEST =
          t.POST_LOGOUT_FAILURE =
          t.LOGOUT_COUNT_DOWN =
          t.KICK_USER =
          t.GET_VERIFY_STATUS_SUCCESS =
          t.GET_VERIFY_STATUS_REQUEST =
          t.GET_VERIFY_STATUS_FAILURE =
          t.GET_RANDOM_CAPTCHA_SUCCESS =
          t.GET_RANDOM_CAPTCHA_REQUEST =
          t.GET_RANDOM_CAPTCHA_FAILURE =
          t.GET_PLAYERS_LOOKUP_SUCCESS =
          t.GET_PLAYERS_LOOKUP_REQUEST =
          t.GET_PLAYERS_LOOKUP_FAILURE =
          t.GET_LOGIN_SETTING_SUC =
          t.GET_LOGIN_SETTING_REQ =
          t.GET_LOGIN_SETTING_ERR =
          t.GET_LOGIN_MISSION_CALENDAR_SUCCESS =
          t.GET_LOGIN_MISSION_CALENDAR_FAILURE =
          t.GET_LOGIN_MISSION_CALENDAR =
          t.GET_EMAIL_VERIFY_STATUS_SUCCESS =
          t.GET_EMAIL_VERIFY_STATUS_REQUEST =
          t.GET_EMAIL_VERIFY_STATUS_FAILURE =
          t.GET_CAPTCHA_IMG_SUC =
          t.GET_CAPTCHA_IMG_REQ =
          t.GET_CAPTCHA_IMG_ERR =
          t.CLOSE_SENT_USERNAME_MODAL =
          t.CLICK_PROFILE_SETTLE_SUCCESS =
          t.CLEAR_RESET_PASSWORD_STATE =
          t.CLEAR_PLAYERS_LOOKUP =
          t.AJAX_PUT_TRIGGER_RESET_PASSWORD_SUCCESS =
          t.AJAX_PUT_TRIGGER_RESET_PASSWORD_REQUEST =
          t.AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE =
          t.AJAX_PUT_RESET_PASSWORD_SUCCESS =
          t.AJAX_PUT_RESET_PASSWORD_REQUEST =
          t.AJAX_PUT_RESET_PASSWORD_FAILURE =
          t.AJAX_PUT_PROFILE_SETTLE_SUCCESS =
          t.AJAX_PUT_PROFILE_SETTLE_REQUEST =
          t.AJAX_PUT_PROFILE_SETTLE_FAILURE =
          t.AJAX_PUT_PROFILE_REQUIREDINFO_SUCCESS =
          t.AJAX_PUT_PROFILE_REQUIREDINFO_REQUEST =
          t.AJAX_PUT_PROFILE_REQUIREDINFO_FAILURE =
          t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_SUCCESS =
          t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_REQUEST =
          t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_FAILURE =
          t.AJAX_PUT_MODIFY_PROFILE_SUCCESS =
          t.AJAX_PUT_MODIFY_PROFILE_REQUEST =
          t.AJAX_PUT_MODIFY_PROFILE_FAILURE =
          t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_SUCCESS =
          t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_REQUEST =
          t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_FAILURE =
          t.AJAX_PUT_FORGET_USERNAME_SUCCESS =
          t.AJAX_PUT_FORGET_USERNAME_FAILURE =
          t.AJAX_PUT_FORGET_USERNAME =
          t.AJAX_PUT_FORGET_ACCOUNT_SUCCESS =
          t.AJAX_PUT_FORGET_ACCOUNT_REQUEST =
          t.AJAX_PUT_FORGET_ACCOUNT_FAILURE =
          t.AJAX_PUT_ACTIVATION_ACCOUNT_SUCCESS =
          t.AJAX_PUT_ACTIVATION_ACCOUNT_REQUEST =
          t.AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE =
          t.AJAX_POST_LOGIN_SUCCESS =
          t.AJAX_POST_LOGIN_REQUEST =
          t.AJAX_POST_LOGIN_FAILURE =
          t.AJAX_GET_USER_SUB_WALLET_SUCCESS =
          t.AJAX_GET_USER_SUB_WALLET_REQUEST =
          t.AJAX_GET_USER_SUB_WALLET_FAILURE =
          t.AJAX_GET_USER_PROFILE_SUCCESS =
          t.AJAX_GET_USER_PROFILE_REQUEST =
          t.AJAX_GET_USER_PROFILE_FAILURE =
          t.AJAX_GET_PLAYER_INFO_READY_SUCCESS =
          t.AJAX_GET_PLAYER_INFO_READY_REQUEST =
          t.AJAX_GET_PLAYER_INFO_READY_FAILURE =
          t.AJAX_GET_FAST_REGISTRATION_SUCCESS =
          t.AJAX_GET_FAST_REGISTRATION_REQUEST =
          t.AJAX_GET_FAST_REGISTRATION_FAILURE =
          t.AJAX_GET_CHECK_RESET_PW_TOKEN_SUCCESS =
          t.AJAX_GET_CHECK_RESET_PW_TOKEN_REQUEST =
          t.AJAX_GET_CHECK_RESET_PW_TOKEN_FAILURE =
          t.AJAX_GET_CHECK_ACTIVATION_TOKEN_SUCCESS =
          t.AJAX_GET_CHECK_ACTIVATION_TOKEN_REQUEST =
          t.AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE =
          t.AJAX_GET_BANK_CARD_SETTING_SUCCESS =
            void 0),
        (t.VERIFY_PASSWORD_SUCCESS =
          t.VERIFY_PASSWORD_REQUEST =
          t.VERIFY_PASSWORD_FAILURE =
          t.VERIFY_MOBILE_SUCCESS =
          t.VERIFY_MOBILE_REQUEST =
          t.VERIFY_MOBILE_FAILURE =
          t.VERIFY_EMAIL_FAILURE =
          t.VERIFY_CAPTCHA_IMG_SUC =
          t.VERIFY_CAPTCHA_IMG_REQ =
          t.VERIFY_CAPTCHA_IMG_ERR =
          t.UPDATE_USER_BALANCE =
          t.UPDATE_TOKEN =
          t.UPDATE_IS_VERIFIED =
          t.TURN_OFF_REG_LIMIT_PROMO =
          t.SET_TRIGGER_CALENDAR_ON_HOME_ON =
          t.SET_TRIGGER_CALENDAR_ON_HOME_OFF =
          t.SET_SHOW_UPGRADEBOUNS_MODAL_OFF =
          t.SET_SHOW_CALENDAR_ON =
          t.SET_SHOW_CALENDAR_OFF =
          t.SEND_VERIFY_CODE_SUCCESS =
          t.SEND_VERIFY_CODE_REQUEST =
          t.SEND_VERIFY_CODE_FAILURE =
          t.SEND_FORGET_PASSWORD_SMS_SUCCESS =
          t.SEND_FORGET_PASSWORD_SMS_REQUEST =
          t.SEND_FORGET_PASSWORD_SMS_FAILURE =
          t.SEND_FORGET_PASSWORD_EMAIL_SUCCESS =
          t.SEND_FORGET_PASSWORD_EMAIL_REQUEST =
          t.SEND_FORGET_PASSWORD_EMAIL_FAILURE =
          t.SEND_EMAIL_VERIFY_CODE_FAILURE =
          t.SAVE_FINGERPRINT2 =
          t.RESET_USER_PROMOS_NOTI =
          t.RESET_RESENT_TOKEN =
          t.RESET_RACE_BONUS_NOTIFICATION =
          t.RESET_PASSWORD_WITH_CODE_SUCCESS =
          t.RESET_PASSWORD_WITH_CODE_REQUEST =
          t.RESET_PASSWORD_WITH_CODE_FAILURE =
          t.RESET_NEW_VIP_REWARD_NOTI =
          t.RESET_MISSION_NOTI =
            void 0),
        (t.AJAX_GET_USER_PROFILE_REQUEST =
          "players/AJAX_GET_USER_PROFILE_REQUEST"),
        (t.AJAX_GET_USER_PROFILE_SUCCESS =
          "players/AJAX_GET_USER_PROFILE_REQUEST_SUCCESS"),
        (t.AJAX_GET_USER_PROFILE_FAILURE =
          "players/AJAX_GET_USER_PROFILE_REQUEST_FAILURE"),
        (t.AJAX_GET_USER_SUB_WALLET_REQUEST =
          "players/AJAX_GET_USER_SUB_WALLET_REQUEST"),
        (t.AJAX_GET_USER_SUB_WALLET_SUCCESS =
          "players/AJAX_GET_USER_SUB_WALLET_REQUEST_SUCCESS"),
        (t.AJAX_GET_USER_SUB_WALLET_FAILURE =
          "players/AJAX_GET_USER_SUB_WALLET_REQUEST_FAILURE"),
        (t.AJAX_POST_LOGIN_REQUEST = "players/AJAX_POST_LOGIN_REQUEST"),
        (t.AJAX_POST_LOGIN_SUCCESS = "players/AJAX_POST_LOGIN_SUCCESS"),
        (t.AJAX_POST_LOGIN_FAILURE = "players/AJAX_POST_LOGIN_FAILURE"),
        (t.AJAX_PUT_TRIGGER_RESET_PASSWORD_REQUEST =
          "players/AJAX_PUT_TRIGGER_RESET_PASSWORD_REQUEST"),
        (t.AJAX_PUT_TRIGGER_RESET_PASSWORD_SUCCESS =
          "players/AJAX_PUT_TRIGGER_RESET_PASSWORD_SUCCESS"),
        (t.AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE =
          "players/AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE"),
        (t.AJAX_PUT_FORGET_ACCOUNT_REQUEST =
          "players/AJAX_PUT_FORGET_ACCOUNT_REQUEST"),
        (t.AJAX_PUT_FORGET_ACCOUNT_SUCCESS =
          "players/AJAX_PUT_FORGET_ACCOUNT_SUCCESS"),
        (t.AJAX_PUT_FORGET_ACCOUNT_FAILURE =
          "players/AJAX_PUT_FORGET_ACCOUNT_FAILURE"),
        (t.AJAX_PUT_RESET_PASSWORD_REQUEST =
          "players/AJAX_PUT_RESET_PASSWORD_REQUEST"),
        (t.AJAX_PUT_RESET_PASSWORD_SUCCESS =
          "players/AJAX_PUT_RESET_PASSWORD_SUCCESS"),
        (t.AJAX_PUT_RESET_PASSWORD_FAILURE =
          "players/AJAX_PUT_RESET_PASSWORD_FAILURE"),
        (t.AJAX_GET_CHECK_RESET_PW_TOKEN_REQUEST =
          "ajax/AJAX_GET_CHECK_RESET_PW_TOKEN_REQUEST"),
        (t.AJAX_GET_CHECK_RESET_PW_TOKEN_SUCCESS =
          "ajax/AJAX_GET_CHECK_RESET_PW_TOKEN_SUCCESS"),
        (t.AJAX_GET_CHECK_RESET_PW_TOKEN_FAILURE =
          "ajax/AJAX_GET_CHECK_RESET_PW_TOKEN_FAILURE"),
        (t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_REQUEST =
          "players/AJAX_PUT_MODIFY_LOGIN_PASSWORD_REQUEST"),
        (t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_SUCCESS =
          "players/AJAX_PUT_MODIFY_LOGIN_PASSWORD_SUCCESS"),
        (t.AJAX_PUT_MODIFY_LOGIN_PASSWORD_FAILURE =
          "players/AJAX_PUT_MODIFY_LOGIN_PASSWORD_FAILURE"),
        (t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_REQUEST =
          "players/AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_REQUEST"),
        (t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_SUCCESS =
          "players/AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_SUCCESS"),
        (t.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_FAILURE =
          "players/AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_FAILURE"),
        (t.POST_REGISTER_REQUEST = "players/POST_REGISTER_REQUEST"),
        (t.POST_REGISTER_SUCCESS = "players/POST_REGISTER_SUCCESS"),
        (t.POST_REGISTER_FAILURE = "players/POST_REGISTER_FAILURE"),
        (t.POST_LOGOUT_REQUEST = "players/POST_LOGOUT_REQUEST"),
        (t.POST_LOGOUT_SUCCESS = "players/POST_LOGOUT_SUCCESS"),
        (t.POST_LOGOUT_FAILURE = "players/POST_LOGOUT_FAILURE"),
        (t.UPDATE_TOKEN = "players/UPDATE_TOKEN"),
        (t.AJAX_GET_CHECK_ACTIVATION_TOKEN_REQUEST =
          "ajax/AJAX_GET_CHECK_ACTIVATION_TOKEN_REQUEST"),
        (t.AJAX_GET_CHECK_ACTIVATION_TOKEN_SUCCESS =
          "ajax/AJAX_GET_CHECK_ACTIVATION_TOKEN_SUCCESS"),
        (t.AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE =
          "ajax/AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE"),
        (t.AJAX_PUT_ACTIVATION_ACCOUNT_REQUEST =
          "ajax/AJAX_PUT_ACTIVATION_ACCOUNT_REQUEST"),
        (t.AJAX_PUT_ACTIVATION_ACCOUNT_SUCCESS =
          "ajax/AJAX_PUT_ACTIVATION_ACCOUNT_SUCCESS"),
        (t.AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE =
          "ajax/AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE"),
        (t.GET_RANDOM_CAPTCHA_REQUEST = "players/GET_RANDOM_CAPTCHA_REQUEST"),
        (t.GET_RANDOM_CAPTCHA_SUCCESS = "players/GET_RANDOM_CAPTCHA_SUCCESS"),
        (t.GET_RANDOM_CAPTCHA_FAILURE = "players/GET_RANDOM_CAPTCHA_FAILURE"),
        (t.PUT_CHECK_AFFILIATE_REQUEST = "players/PUT_CHECK_AFFILIATE_REQUEST"),
        (t.PUT_CHECK_AFFILIATE_SUCCESS = "players/PUT_CHECK_AFFILIATE_SUCCESS"),
        (t.PUT_CHECK_AFFILIATE_FAILURE = "players/PUT_CHECK_AFFILIATE_FAILURE"),
        (t.PUT_CHECK_AFFILIATE_WITH_ALERT_REQUEST =
          "players/PUT_CHECK_AFFILIATE_WITH_ALERT_REQUEST"),
        (t.PUT_CHECK_AFFILIATE_WITH_ALERT_SUCCESS =
          "players/PUT_CHECK_AFFILIATE_WITH_ALERT_SUCCESS"),
        (t.PUT_CHECK_AFFILIATE_WITH_ALERT_FAILURE =
          "players/PUT_CHECK_AFFILIATE_WITH_ALERT_FAILURE"),
        (t.CLEAR_PLAYERS_LOOKUP = "CLEAR_PLAYERS_LOOKUP"),
        (t.GET_PLAYERS_LOOKUP_REQUEST = "GET_PLAYERS_LOOKUP_REQUEST"),
        (t.GET_PLAYERS_LOOKUP_SUCCESS = "GET_PLAYERS_LOOKUP_SUCCESS"),
        (t.GET_PLAYERS_LOOKUP_FAILURE = "GET_PLAYERS_LOOKUP_FAILURE"),
        (t.RESET_FORGET_SUCCESS = "RESET_FORGET_SUCCESS"),
        (t.AJAX_PUT_PROFILE_SETTLE_REQUEST = "AJAX_PUT_PROFILE_SETTLE_REQUEST"),
        (t.AJAX_PUT_PROFILE_SETTLE_SUCCESS = "AJAX_PUT_PROFILE_SETTLE_SUCCESS"),
        (t.AJAX_PUT_PROFILE_SETTLE_FAILURE = "AJAX_PUT_PROFILE_SETTLE_FAILURE"),
        (t.AJAX_GET_FAST_REGISTRATION_REQUEST =
          "AJAX_GET_FAST_REGISTRATION_REQUEST"),
        (t.AJAX_GET_FAST_REGISTRATION_SUCCESS =
          "AJAX_GET_FAST_REGISTRATION_SUCCESS"),
        (t.AJAX_GET_FAST_REGISTRATION_FAILURE =
          "AJAX_GET_FAST_REGISTRATION_FAILURE"),
        (t.AJAX_GET_PLAYER_INFO_READY_REQUEST =
          "AJAX_GET_PLAYER_INFO_READY_REQUEST"),
        (t.AJAX_GET_PLAYER_INFO_READY_SUCCESS =
          "AJAX_GET_PLAYER_INFO_READY_SUCCESS"),
        (t.AJAX_GET_PLAYER_INFO_READY_FAILURE =
          "AJAX_GET_PLAYER_INFO_READY_FAILURE"),
        (t.AJAX_PUT_MODIFY_PROFILE_REQUEST = "AJAX_PUT_MODIFY_PROFILE_REQUEST"),
        (t.AJAX_PUT_MODIFY_PROFILE_SUCCESS = "AJAX_PUT_MODIFY_PROFILE_SUCCESS"),
        (t.AJAX_PUT_MODIFY_PROFILE_FAILURE = "AJAX_PUT_MODIFY_PROFILE_FAILURE"),
        (t.PUT_PROFILE_PICTURE_SUCCESS = "PUT_PROFILE_PICTURE_SUCCESS"),
        (t.KICK_USER = "KICK_USER"),
        (t.LOGOUT_COUNT_DOWN = "LOGOUT_COUNT_DOWN"),
        (t.SAVE_FINGERPRINT2 = "auth/SAVE_FINGERPRINT2"),
        (t.CLICK_PROFILE_SETTLE_SUCCESS = "CLICK_PROFILE_SETTLE_SUCCESS"),
        (t.PUT_RESEND_ACT_TOKEN = "PUT_RESEND_ACT_TOKEN"),
        (t.PUT_RESEND_ACT_TOKEN_SUCCESS = "PUT_RESEND_ACT_TOKEN_SUCCESS"),
        (t.PUT_RESEND_ACT_TOKEN_FAILURE = "PUT_RESEND_ACT_TOKEN_FAILURE"),
        (t.RESET_RESENT_TOKEN = "RESET_RESENT_TOKEN"),
        (t.AJAX_PUT_FORGET_USERNAME = "AJAX_PUT_FORGET_USERNAME"),
        (t.AJAX_PUT_FORGET_USERNAME_SUCCESS =
          "AJAX_PUT_FORGET_USERNAME_SUCCESS"),
        (t.AJAX_PUT_FORGET_USERNAME_FAILURE =
          "AJAX_PUT_FORGET_USERNAME_FAILURE"),
        (t.CLOSE_SENT_USERNAME_MODAL = "CLOSE_SENT_USERNAME_MODAL"),
        (t.CLEAR_RESET_PASSWORD_STATE = "CLEAR_RESET_PASSWORD_STATE"),
        (t.AJAX_GET_BANK_CARD_SETTING_SUCCESS =
          "AJAX_GET_BANK_CARD_SETTING_SUCCESS"),
        (t.VERIFY_MOBILE_REQUEST = "players/VERIFY_MOBILE_REQUEST"),
        (t.VERIFY_MOBILE_SUCCESS = "players/VERIFY_MOBILE_SUCCESS"),
        (t.VERIFY_MOBILE_FAILURE = "players/VERIFY_MOBILE_FAILURE"),
        (t.VERIFY_EMAIL_FAILURE = "players/VERIFY_EMAIL_FAILURE"),
        (t.SEND_VERIFY_CODE_REQUEST = "players/SEND_VERIFY_CODE_REQUEST"),
        (t.SEND_VERIFY_CODE_SUCCESS = "players/SEND_VERIFY_CODE_SUCCESS"),
        (t.SEND_VERIFY_CODE_FAILURE = "players/SEND_VERIFY_CODE_FAILURE"),
        (t.SEND_EMAIL_VERIFY_CODE_FAILURE =
          "players/SEND_EMAIL_VERIFY_CODE_FAILURE"),
        (t.SEND_FORGET_PASSWORD_SMS_REQUEST =
          "players/SEND_FORGET_PASSWORD_SMS_REQUEST"),
        (t.SEND_FORGET_PASSWORD_SMS_SUCCESS =
          "players/SEND_FORGET_PASSWORD_SMS_SUCCESS"),
        (t.SEND_FORGET_PASSWORD_SMS_FAILURE =
          "players/SEND_FORGET_PASSWORD_SMS_FAILURE"),
        (t.SEND_FORGET_PASSWORD_EMAIL_REQUEST =
          "players/SEND_FORGET_PASSWORD_EMAIL_REQUEST"),
        (t.SEND_FORGET_PASSWORD_EMAIL_SUCCESS =
          "players/SEND_FORGET_PASSWORD_EMAIL_SUCCESS"),
        (t.SEND_FORGET_PASSWORD_EMAIL_FAILURE =
          "players/SEND_FORGET_PASSWORD_EMAIL_FAILURE"),
        (t.VERIFY_PASSWORD_REQUEST = "players/VERIFY_PASSWORD_REQUEST"),
        (t.VERIFY_PASSWORD_SUCCESS = "players/VERIFY_PASSWORD_SUCCESS"),
        (t.VERIFY_PASSWORD_FAILURE = "players/VERIFY_PASSWORD_FAILURE"),
        (t.RESET_PASSWORD_WITH_CODE_REQUEST =
          "players/RESET_PASSWORD_WITH_CODE_REQUEST"),
        (t.RESET_PASSWORD_WITH_CODE_SUCCESS =
          "players/RESET_PASSWORD_WITH_CODE_SUCCESS"),
        (t.RESET_PASSWORD_WITH_CODE_FAILURE =
          "players/RESET_PASSWORD_WITH_CODE_FAILURE"),
        (t.GET_VERIFY_STATUS_REQUEST = "players/GET_VERIFY_STATUS_REQUEST"),
        (t.GET_VERIFY_STATUS_SUCCESS = "players/GET_VERIFY_STATUS_SUCCESS"),
        (t.GET_VERIFY_STATUS_FAILURE = "players/GET_VERIFY_STATUS_FAILURE"),
        (t.GET_EMAIL_VERIFY_STATUS_REQUEST =
          "players/GET_EMAIL_VERIFY_STATUS_REQUEST"),
        (t.GET_EMAIL_VERIFY_STATUS_SUCCESS =
          "players/GET_EMAIL_VERIFY_STATUS_SUCCESS"),
        (t.GET_EMAIL_VERIFY_STATUS_FAILURE =
          "players/GET_EMAIL_VERIFY_STATUS_FAILURE"),
        (t.AJAX_PUT_PROFILE_REQUIREDINFO_REQUEST =
          "AJAX_PUT_PROFILE_REQUIREDINFO_REQUEST"),
        (t.AJAX_PUT_PROFILE_REQUIREDINFO_SUCCESS =
          "AJAX_PUT_PROFILE_REQUIREDINFO_SUCCESS"),
        (t.AJAX_PUT_PROFILE_REQUIREDINFO_FAILURE =
          "AJAX_PUT_PROFILE_REQUIREDINFO_FAILURE"),
        (t.GET_LOGIN_MISSION_CALENDAR = "GET_LOGIN_MISSION_CALENDAR"),
        (t.GET_LOGIN_MISSION_CALENDAR_SUCCESS =
          "GET_LOGIN_MISSION_CALENDAR_SUCCESS"),
        (t.GET_LOGIN_MISSION_CALENDAR_FAILURE =
          "GET_LOGIN_MISSION_CALENDAR_FAILURE"),
        (t.SET_TRIGGER_CALENDAR_ON_HOME_ON = "SET_TRIGGER_CALENDAR_ON_HOME_ON"),
        (t.SET_TRIGGER_CALENDAR_ON_HOME_OFF =
          "SET_TRIGGER_CALENDAR_ON_HOME_OFF"),
        (t.SET_SHOW_CALENDAR_ON = "SET_SHOW_CALENDAR_ON"),
        (t.SET_SHOW_CALENDAR_OFF = "SET_SHOW_CALENDAR_OFF"),
        (t.SET_SHOW_UPGRADEBOUNS_MODAL_OFF = "SET_SHOW_UPGRADEBOUNS_MODAL_OFF"),
        (t.GET_LOGIN_SETTING_REQ = "players/GET_LOGIN_SETTING_REQ"),
        (t.GET_LOGIN_SETTING_SUC = "players/GET_LOGIN_SETTING_SUC"),
        (t.GET_LOGIN_SETTING_ERR = "players/GET_LOGIN_SETTING_ERR"),
        (t.GET_CAPTCHA_IMG_REQ = "players/GET_CAPTCHA_IMG_REQ"),
        (t.GET_CAPTCHA_IMG_SUC = "players/GET_CAPTCHA_IMG_SUC"),
        (t.GET_CAPTCHA_IMG_ERR = "players/GET_CAPTCHA_IMG_ERR"),
        (t.VERIFY_CAPTCHA_IMG_REQ = "players/VERIFY_CAPTCHA_IMG_REQ"),
        (t.VERIFY_CAPTCHA_IMG_SUC = "players/VERIFY_CAPTCHA_IMG_SUC"),
        (t.VERIFY_CAPTCHA_IMG_ERR = "players/VERIFY_CAPTCHA_IMG_ERR"),
        (t.RESET_MISSION_NOTI = "players/RESET_MISSION_NOTI"),
        (t.RESET_USER_PROMOS_NOTI = "players/RESET_USER_PROMOS_NOTI"),
        (t.RESET_ANYTIME_REBATE_NOTI = "players/RESET_ANYTIME_REBATE_NOTI"),
        (t.RESET_NEW_VIP_REWARD_NOTI = "players/RESET_NEW_VIP_REWARD_NOTI"),
        (t.RESET_RACE_BONUS_NOTIFICATION =
          "players/RESET_RACE_BONUS_NOTIFICATION"),
        (t.PUT_ANYTIME_REBATE_SETTLE_REQ =
          "players/PUT_ANYTIME_REBATE_SETTLE_REQ"),
        (t.PUT_ANYTIME_REBATE_SETTLE_SUCCESS =
          "players/PUT_ANYTIME_REBATE_SETTLE_SUCCESS"),
        (t.PUT_ANYTIME_REBATE_SETTLE_FAILURE =
          "players/PUT_ANYTIME_REBATE_SETTLE_FAILURE"),
        (t.TURN_OFF_REG_LIMIT_PROMO = "players/TURN_OFF_REG_LIMIT_PROMO"),
        (t.UPDATE_IS_VERIFIED = "players/UPDATE_IS_VERIFIED"),
        (t.UPDATE_USER_BALANCE = "players/UPDATE_USER_BALANCE");
    },
    62877: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = r(96540);
      t.default = function (e) {
        a.useEffect(e, []);
      };
    },
    63979: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = r(96540),
        o = r(67467),
        _ = a(r(94188)),
        E = a(r(27179));
      const { livechat: i } = _.default.brand;
      t.default = () => {
        const e = (0, o.useSelector)((e) => e.app.pageLoaded);
        return (
          (0, n.useEffect)(() => {
            if (e && i) {
              const e = document.createElement("script"),
                t = `\n          window.__lc = window.__lc || {};\n          window.__lc.license = ${i};\n          ;(function(n,t,c){function i(n){return e._h?e._h.apply(null,n):e._q.push(n)}var e={_q:[],_h:null,_v:"2.0",on:function(){i(["on",c.call(arguments)])},once:function(){i(["once",c.call(arguments)])},off:function(){i(["off",c.call(arguments)])},get:function(){if(!e._h)throw new Error("[LiveChatWidget] You can't use getters before load.");return i(["get",c.call(arguments)])},call:function(){i(["call",c.call(arguments)])},init:function(){var n=t.createElement("script");n.async=!0,n.type="text/javascript",n.src="https://cdn.livechatinc.com/tracking.js",t.head.appendChild(n)}};!n.__lc.asyncInit&&e.init(),n.LiveChatWidget=n.LiveChatWidget||e}(window,document,[].slice))\n       `;
              e.appendChild(document.createTextNode(t));
              const r = document.createElement("noscript"),
                a = `<a href="https://www.livechat.com/chat-with/${i}/" rel="nofollow">Chat with us</a>, powered by <a href="https://www.livechat.com/?welcome" rel="noopener nofollow" target="_blank">LiveChat</a>`;
              r.appendChild(document.createTextNode(a)),
                document.body.appendChild(e),
                document.body.appendChild(r),
                setTimeout(() => {
                  var e;
                  const t = E.default.get("playerid")
                    ? `${E.default.get("playerid")}@${_.default.brand.name}`
                    : "NotLoggedIn";
                  null === (e = window.LiveChatWidget) ||
                    void 0 === e ||
                    e.on("ready", () => {
                      window.LiveChatWidget.call("set_customer_email", t);
                    });
                }, 300);
            }
          }, [e]),
          null
        );
      };
    },
    64039: (e, t, r) => {
      "use strict";
      var a = "undefined" != typeof Symbol && Symbol,
        n = r(41333);
      e.exports = function () {
        return (
          "function" == typeof a &&
          "function" == typeof Symbol &&
          "symbol" == typeof a("foo") &&
          "symbol" == typeof Symbol("bar") &&
          n()
        );
      };
    },
    64754: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(55594);
      let n = "";
      try {
        n = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/meta.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = () => {
        const e = (0, a.getDomainId)(n);
        e &&
          e.forEach((e) => {
            const t = document.createElement("meta");
            e.forEach((e) => {
              t.setAttribute(e.key, e.value);
            }),
              document.head.appendChild(t);
          });
      };
    },
    65051: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PUT_SSVIP_PLAYER_REWARD_SUCCESS =
          t.PUT_SSVIP_PLAYER_REWARD_REQUEST =
          t.PUT_SSVIP_PLAYER_REWARD_FAILURE =
          t.GET_SSVIP_SETTING_SUC =
          t.GET_SSVIP_SETTING_REQ =
          t.GET_SSVIP_SETTING_ERR =
          t.GET_SSVIP_LEVEL_INFO_SUCCESS =
          t.GET_SSVIP_LEVEL_INFO_REQUEST =
          t.GET_SSVIP_LEVEL_INFO_FAILURE =
            void 0),
        (t.PUT_SSVIP_PLAYER_REWARD_REQUEST =
          "vip/PUT_SSVIP_PLAYER_REWARD_REQUEST"),
        (t.PUT_SSVIP_PLAYER_REWARD_SUCCESS =
          "vip/PUT_SSVIP_PLAYER_REWARD_SUCCESS"),
        (t.PUT_SSVIP_PLAYER_REWARD_FAILURE =
          "vip/PUT_SSVIP_PLAYER_REWARD_FAILURE"),
        (t.GET_SSVIP_SETTING_REQ = "GET_SSVIP_SETTING_REQ"),
        (t.GET_SSVIP_SETTING_SUC = "GET_SSVIP_SETTING_SUC"),
        (t.GET_SSVIP_SETTING_ERR = "GET_SSVIP_SETTING_ERR"),
        (t.GET_SSVIP_LEVEL_INFO_REQUEST = "vip/GET_SSVIP_LEVEL_INFO_REQUEST"),
        (t.GET_SSVIP_LEVEL_INFO_SUCCESS = "vip/GET_SSVIP_LEVEL_INFO_SUCCESS"),
        (t.GET_SSVIP_LEVEL_INFO_FAILURE = "vip/GET_SSVIP_LEVEL_INFO_FAILURE");
    },
    65400: (e, t, r) => {
      "use strict";
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
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(86990)),
        n = r(9404);
      const o = (0, n.fromJS)({
          baccarat: {},
        }),
        _ = (0, n.fromJS)({
          maxStampTime: 0,
          mainRoads: {
            maxShowX: 0,
            grids: {},
          },
          roaches: {
            maxShowX: 0,
          },
          smalls: {
            maxShowX: 0,
          },
        });
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type === a.GET_BACCARAT_HISTORY_SUCCESS) {
          const { mainRoads: r, roaches: a, smalls: o } = t.payload.message;
          if (!r) return e.deleteIn(["baccarat", t.tableID]);
          let E = e.getIn(["baccarat", t.tableID], _),
            i = 0;
          const s = r.reduce((e, t) => {
              let {
                stampTime: r,
                showX: a,
                showY: o,
                tieCount: _,
                resultMainRoad: E,
              } = t;
              return (
                (i = Math.max(i, r)),
                (e = e.set("maxShowX", Math.max(e.get("maxShowX"), a))).setIn(
                  [a, o],
                  (0, n.Map)({
                    tieCount: _,
                    results: E,
                  })
                )
              );
            }, E.get("mainRoads")),
            T = a.reduce((e, t) => {
              let { showX: r, showY: a, ...o } = t;
              return e
                .set("maxShowX", Math.max(e.get("maxShowX"), r))
                .setIn([r, a], (0, n.fromJS)(o));
            }, E.get("roaches")),
            A = o.reduce((e, t) => {
              let { showX: r, showY: a, ...o } = t;
              return e
                .set("maxShowX", Math.max(e.get("maxShowX"), r))
                .setIn([r, a], (0, n.fromJS)(o));
            }, E.get("smalls"));
          return (
            (E = E.set("maxStampTime", i)
              .set("mainRoads", s)
              .set("roaches", T)
              .set("smalls", A)),
            e.setIn(["baccarat", t.tableID], E)
          );
        }
        return e;
      };
    },
    65881: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(99039)),
        o = a(r(92566)),
        _ = a(r(15129)),
        E = a(r(70011)),
        i = a(r(64754)),
        s = a(r(76099)),
        T = a(r(76237)),
        A = a(r(8921));
      const S = [
        s.default,
        _.default,
        n.default,
        o.default,
        A.default,
        E.default,
        i.default,
        T.default,
      ];
      t.default = () => {
        S.forEach((e) => {
          setTimeout(() => {
            e();
          }, 0);
        });
      };
    },
    66743: (e, t, r) => {
      "use strict";
      var a = r(89353);
      e.exports = Function.prototype.bind || a;
    },
    67067: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.thirdPartyPaymentCategory =
          t.templatePaymentTypeEnum =
          t.paymentTemplateCategories =
          t.paymentSectionTypeEnum =
          t.depositTypesEnum =
          t.depositSubPaymentTypeEnum =
          t.depositPromoDepositTypeEnum =
          t.depositPaymentTypes =
            void 0),
        (t.templatePaymentTypeEnum = {
          ONLINE_BANKING: "ONLINE_BANKING",
          COMPANY_DEPOSIT: "COMPANY_DEPOSIT",
          WEIXIN: "WEIXIN",
          ALIPAY: "ALIPAY",
          QQ: "QQ",
          JDPAY: "JDPAY",
          MOMOPAY: "MOMOPAY",
          ZALOPAY: "ZALOPAY",
          VIETTELPAY: "VIETTELPAY",
          SKRILL: "SKRILL",
          NETELLER: "NETELLER",
          PAYTM: "PAYTM",
          BHIM: "BHIM",
          UPI: "UPI",
          GPAY: "GPAY",
          PHONEPE: "PHONEPE",
          GCASH: "GCASH",
          TRUEMONEY: "TRUEMONEY",
          USDT: "USDT",
          GRABPAY: "GRABPAY",
          PAYMAYA: "PAYMAYA",
          REMIT: "REMIT",
          PAYLORO: "PAYLORO",
        });
      const r = (t.depositPaymentTypes = {
        ONLINE_BANKING: "ONLINE_BANKING",
        COMPANY_DEPOSIT: "COMPANY_DEPOSIT",
        CORPORATE_CRYPTO: "CORPORATE_CRYPTO",
        DEBIT_CARD: "DEBIT_CARD",
        WEIXIN: "WEIXIN",
        ALIPAY: "ALIPAY",
        QQ: "QQ",
        CREDIT_CARD: "CREDIT_CARD",
        JDPAY: "JDPAY",
        MOMOPAY: "MOMOPAY",
        ZALOPAY: "ZALOPAY",
        VIETTELPAY: "VIETTELPAY",
        QR_BANK: "QR_BANK",
        SKRILL: "SKRILL",
        NETELLER: "NETELLER",
        PAYTM: "PAYTM",
        BHIM: "BHIM",
        UPI: "UPI",
        GPAY: "GPAY",
        PHONEPE: "PHONEPE",
        MPURSE: "MPURSE",
        GCASH: "GCASH",
        TRUEMONEY: "TRUEMONEY",
        USDT: "USDT",
        GRABPAY: "GRABPAY",
        PAYMAYA: "PAYMAYA",
        REMIT: "REMIT",
        PAYLORO: "PAYLORO",
        NAGAD: "NAGAD",
        BKASH: "BKASH",
        ROCKET: "ROCKET",
        UPAY: "UPAY",
        EXPRESSPAY: "EXPRESSPAY",
        YIYOU: "YIYOU",
        CRYPTO: "CRYPTO",
        QUICKPASS: "QUICKPASS",
        PROMPTPAY: "PROMPTPAY",
        SCRATCHCARD: "SCRATCHCARD",
        UNIONPAY_SCAN: "UNIONPAY_SCAN",
      });
      (t.paymentTemplateCategories = {
        [r.COMPANY_DEPOSIT]: "offlineDeposit",
        [r.ONLINE_BANKING]: "onlineBanking",
        [r.CORPORATE_CRYPTO]: "corporateCrypto",
        personalAccount: "personalAccount",
        thirdPartyPayment: "thirdPartyPayment",
      }),
        (t.paymentSectionTypeEnum = {
          QRCODE: 1,
          BANK_PLAYER_TRANSFER: 2,
          BANK_PERSONAL_TRANSFER: 4,
          H5: 8,
          BAR_CODE: 16,
          TOKEN: 32,
          BTC: 64,
          PDD: 128,
          HF: 256,
          NORMAL: 512,
        }),
        (t.depositSubPaymentTypeEnum = {
          QR: 1,
          H5: 2,
          ONLINE_BANK: 4,
          CREDIT_CARD: 8,
          BAR_CODE: 16,
          TOKEN: 32,
          BTC: 64,
          PDD: 128,
          HF: 256,
          NORMAL: 512,
        }),
        (t.depositTypesEnum = {
          [r.ONLINE_BANKING]: 1,
          BANK_ATM_TRANSFER: 2,
          BANK_ATM_CASH: 3,
          BANK_COUNTER: 4,
          BANK_MOBILE: 5,
          BANK_OTHERS: 6,
          THIRDPARTY_QQ: 7,
          THIRDPARTY_WEIXIN: 8,
          THIRDPARTY_ALIPAY: 9,
          THIRDPARTY_DEBIT_CARD: 10,
          BANK_PLAYER_ALIPAY: 11,
          BANK_PLAYER_WEIXIN: 12,
          BANK_PLAYER_QQ: 13,
          BANK_PERSONAL_ALIPAY: 14,
          BANK_PERSONAL_WEIXIN: 15,
          BANK_PERSONAL_QQ: 16,
          THIRDPARTY_CREDIT_CARD: 17,
          THIRDPARTY_JDPAY: 18,
          BANK_PLAYER_JDPAY: 19,
          BANK_PERSONAL_JDPAY: 20,
          THIRDPARTY_UNIONPAY_SCAN: 21,
          THIRDPARTY_EXPRESSPAY: 22,
          THIRDPARTY_H5_ALIPAY: 23,
          THIRDPARTY_H5_WEIXIN: 24,
          THIRDPARTY_H5_QQ: 25,
          THIRDPARTY_H5_JDPAY: 26,
          THIRDPARTY_BAR_CODE_ALIPAY: 27,
          THIRDPARTY_BAR_CODE_WEIXIN: 28,
          THIRDPARTY_BAR_CODE_QQ: 29,
          THIRDPARTY_BAR_CODE_JDPAY: 30,
          THIRDPARTY_TOKEN_YIYOU: 31,
          BTC: 32,
          BANK_PERSONAL_MOMOPAY: 33,
          BANK_PERSONAL_ZALOPAY: 34,
          BANK_PERSONAL_VIETTELPAY: 35,
          THIRDPARTY_QUICKPASS: 36,
          THIRDPARTY_H5_QUICKPASS: 37,
          THIRDPARTY_PDD_WEIXIN: 39,
          THIRDPARTY_HF_WEIXIN: 40,
          THIRDPARTY_PDD_ALIPAY: 41,
          THIRDPARTY_HF_ALIPAY: 42,
          THIRDPARTY_QR_BANK: 43,
          THIRDPARTY_MOMOPAY: 44,
          THIRDPARTY_ZALOPAY: 45,
          THIRDPARTY_VIETTELPAY: 46,
          THIRDPARTY_PROMPTPAY: 47,
          BANK_PERSONAL_SKRILL: 48,
          BANK_PERSONAL_NETELLER: 49,
          BANK_PERSONAL_PAYTM: 50,
          THIRDPARTY_QR_UPI: 51,
          THIRDPARTY_H5_UPI: 52,
          THIRDPARTY_PAYTM: 53,
          THIRDPARTY_QR_PAYTM: 54,
          THIRDPARTY_H5_PAYTM: 55,
          BANK_PERSONAL_BHIM: 56,
          BANK_PERSONAL_UPI: 57,
          BANK_PERSONAL_GPAY: 58,
          BANK_PERSONAL_PHONEPE: 59,
          THIRDPARTY_DEBIT_CARD_OFFLINE: 60,
          THIRDPARTY_NORMAL_MPURSE: 61,
          THIRDPARTY_QR_MPURSE: 62,
          THIRDPARTY_H5_MPURSE: 63,
          THIRDPARTY_NORMAL_SCRATCHCARD: 64,
          THIRDPARTY_H5_SCRATCHCARD: 65,
          THIRDPARTY_QR_GCASH: 66,
          THIRDPARTY_H5_GCASH: 67,
          BANK_PERSONAL_GCASH: 68,
          THIRDPARTY_QR_TRUEMONEY: 69,
          THIRDPARTY_H5_TRUEMONEY: 70,
          BANK_PERSONAL_TRUEMONEY: 71,
          THIRDPARTY_QR_PHONEPE: 72,
          THIRDPARTY_H5_PHONEPE: 73,
          THIRDPARTY_H5_USDT: 74,
          THIRDPARTY_QR_GRABPAY: 75,
          THIRDPARTY_H5_GRABPAY: 76,
          BANK_PERSONAL_GRABPAY: 77,
          THIRDPARTY_QR_PAYMAYA: 78,
          THIRDPARTY_H5_PAYMAYA: 79,
          BANK_PERSONAL_PAYMAYA: 80,
          THIRDPARTY_H5_REMIT: 81,
          THIRDPARTY_QR_PAYLORO: 82,
          THIRDPARTY_H5_PAYLORO: 83,
          BANK_PERSONAL_PAYLORO: 84,
          [r.CORPORATE_CRYPTO]: 85,
          THIRDPARTY_H5_NAGAD: 86,
          THIRDPARTY_H5_BKASH: 87,
          THIRDPARTY_H5_ROCKET: 88,
          THIRDPARTY_H5_UPAY: 89,
          [r.COMPANY_DEPOSIT]: 99,
          1: "BANK_ONLINE",
          2: "BANK_ATM_TRANSFER",
          3: "BANK_ATM_CASH",
          4: "BANK_COUNTER",
          5: "BANK_MOBILE",
          6: "BANK_OTHERS",
          7: "THIRDPARTY_QQ",
          8: "THIRDPARTY_WEIXIN",
          9: "THIRDPARTY_ALIPAY",
          10: "THIRDPARTY_DEBIT_CARD",
          11: "BANK_PLAYER_ALIPAY",
          12: "BANK_PLAYER_WEIXIN",
          13: "BANK_PLAYER_QQ",
          14: "BANK_PERSONAL_ALIPAY",
          15: "BANK_PERSONAL_WEIXIN",
          16: "BANK_PERSONAL_QQ",
          17: "THIRDPARTY_CREDIT_CARD",
          18: "THIRDPARTY_JDPAY",
          19: "BANK_PLAYER_JDPAY",
          20: "BANK_PERSONAL_JDPAY",
          21: "THIRDPARTY_UNIONPAY_SCAN",
          22: "THIRDPARTY_EXPRESSPAY",
          23: "THIRDPARTY_H5_ALIPAY",
          24: "THIRDPARTY_H5_WEIXIN",
          25: "THIRDPARTY_H5_QQ",
          26: "THIRDPARTY_H5_JDPAY",
          27: "THIRDPARTY_BAR_CODE_ALIPAY",
          28: "THIRDPARTY_BAR_CODE_WEIXIN",
          29: "THIRDPARTY_BAR_CODE_QQ",
          30: "THIRDPARTY_BAR_CODE_JDPAY",
          31: "THIRDPARTY_TOKEN_YIYOU",
          32: "BTC",
          33: "BANK_PERSONAL_MOMOPAY",
          34: "BANK_PERSONAL_ZALOPAY",
          35: "BANK_PERSONAL_VIETTELPAY",
          36: "THIRDPARTY_QUICKPASS",
          37: "THIRDPARTY_H5_QUICKPASS",
          39: "THIRDPARTY_PDD_WEIXIN",
          40: "THIRDPARTY_HF_WEIXIN",
          41: "THIRDPARTY_PDD_ALIPAY",
          42: "THIRDPARTY_HF_ALIPAY",
          43: "THIRDPARTY_QR_BANK",
          44: "THIRDPARTY_MOMOPAY",
          45: "THIRDPARTY_ZALO",
          46: "THIRDPARTY_VIETTELPAY",
          47: "THIRDPARTY_PROMPTPAY",
          48: "BANK_PERSONAL_SKRILL",
          49: "BANK_PERSONAL_NETELLER",
          50: "BANK_PERSONAL_PAYTM",
          51: "THIRDPARTY_QR_UPI",
          52: "THIRDPARTY_H5_UPI",
          53: "THIRDPARTY_PAYTM",
          54: "THIRDPARTY_QR_PAYTM",
          55: "THIRDPARTY_H5_PAYTM",
          56: "BANK_PERSONAL_BHIM",
          57: "BANK_PERSONAL_UPI",
          58: "BANK_PERSONAL_GPAY",
          59: "BANK_PERSONAL_PHONEPE",
          60: "THIRDPARTY_DEBIT_CARD_OFFLINE",
          61: "THIRDPARTY_NORMAL_MPURSE",
          62: "THIRDPARTY_QR_MPURSE",
          63: "THIRDPARTY_H5_MPURSE",
          64: "THIRDPARTY_NORMAL_SCRATCHCARD",
          65: "THIRDPARTY_H5_SCRATCHCARD",
          66: "THIRDPARTY_QR_GCASH",
          67: "THIRDPARTY_H5_GCASH",
          68: "BANK_PERSONAL_GCASH",
          69: "THIRDPARTY_QR_TRUEMONEY",
          70: "THIRDPARTY_H5_TRUEMONEY",
          71: "BANK_PERSONAL_TRUEMONEY",
          72: "THIRDPARTY_QR_PHONEPE",
          73: "THIRDPARTY_H5_PHONEPE",
          74: "THIRDPARTY_H5_USDT",
          75: "THIRDPARTY_QR_GRABPAY",
          76: "THIRDPARTY_H5_GRABPAY",
          77: "BANK_PERSONAL_GRABPAY",
          78: "THIRDPARTY_QR_PAYMAYA",
          79: "THIRDPARTY_H5_PAYMAYA",
          80: "BANK_PERSONAL_PAYMAYA",
          81: "THIRDPARTY_H5_REMIT",
          82: "THIRDPARTY_QR_PAYLORO",
          83: "THIRDPARTY_H5_PAYLORO",
          84: "BANK_PERSONAL_PAYLORO",
          86: "THIRDPARTY_H5_NAGAD",
          87: "THIRDPARTY_H5_BKASH",
          88: "THIRDPARTY_H5_ROCKET",
          89: "THIRDPARTY_H5_UPAY",
          99: "OFFLINE_DEPOSIT",
        }),
        (t.thirdPartyPaymentCategory = {
          PERSONAL_TRANSFER: "PERSONAL_TRANSFER",
          DEBIT_CARD: "DEBIT_CARD",
          SCRATCH_CARD: "SCRATCH_CARD",
          THIRD_PARTY_PAYMENT: "THIRD_PARTY_PAYMENT",
        }),
        (t.depositPromoDepositTypeEnum = {
          COMPANY_DEPOSIT: 1,
          THIRD_PARTY_DEPOSIT: 2,
          ALL: 3,
          CORPORATE_CRYPTO: 4,
        });
    },
    67618: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.POST_REGISTER_AGENT_FAILURE =
          t.GET_CHECK_ULAGENT_WITH_ALERT_SUCCESS =
          t.GET_CHECK_ULAGENT_WITH_ALERT_REQUEST =
          t.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE =
          t.GET_CHECK_ULAGENT_SUCCESS =
          t.GET_CHECK_ULAGENT_REQUEST =
          t.GET_CHECK_ULAGENT_FAILURE =
          t.GET_CHECK_AGENT_WITH_ALERT_SUCCESS =
          t.GET_CHECK_AGENT_WITH_ALERT_REQUEST =
          t.GET_CHECK_AGENT_WITH_ALERT_FAILURE =
          t.GET_CHECK_AGENT_SUCCESS =
          t.GET_CHECK_AGENT_REQUEST =
          t.GET_CHECK_AGENT_FAILURE =
            void 0),
        (t.GET_CHECK_AGENT_REQUEST = "agents/GET_CHECK_AGENT_REQUEST"),
        (t.GET_CHECK_AGENT_SUCCESS = "agents/GET_CHECK_AGENT_SUCCESS"),
        (t.GET_CHECK_AGENT_FAILURE = "agents/GET_CHECK_AGENT_FAILURE"),
        (t.GET_CHECK_AGENT_WITH_ALERT_REQUEST =
          "agents/GET_CHECK_AGENT_WITH_ALERT_REQUEST"),
        (t.GET_CHECK_AGENT_WITH_ALERT_SUCCESS =
          "agents/GET_CHECK_AGENT_WITH_ALERT_SUCCESS"),
        (t.GET_CHECK_AGENT_WITH_ALERT_FAILURE =
          "agents/GET_CHECK_AGENT_WITH_ALERT_FAILURE"),
        (t.POST_REGISTER_AGENT_FAILURE = "agents/POST_REGISTER_AGENT_FAILURE"),
        (t.GET_CHECK_ULAGENT_WITH_ALERT_REQUEST =
          "agents/GET_CHECK_ULAGENT_WITH_ALERT_REQUEST"),
        (t.GET_CHECK_ULAGENT_WITH_ALERT_SUCCESS =
          "agents/GET_CHECK_ULAGENT_WITH_ALERT_SUCCESS"),
        (t.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE =
          "agents/GET_CHECK_ULAGENT_WITH_ALERT_FAILURE"),
        (t.GET_CHECK_ULAGENT_REQUEST = "agents/GET_CHECK_ULAGENT_REQUEST"),
        (t.GET_CHECK_ULAGENT_SUCCESS = "agents/GET_CHECK_ULAGENT_SUCCESS"),
        (t.GET_CHECK_ULAGENT_FAILURE = "agents/GET_CHECK_ULAGENT_FAILURE");
    },
    68002: (e) => {
      "use strict";
      e.exports = Math.min;
    },
    68686: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.baseURL = void 0),
        (t.domain_from_url = i),
        (t.socketServer = void 0);
      var n = a(r(94188)),
        o = a(r(31653)),
        _ = r(60532);
      const E = n.default.portal.apiServer;
      function i(e) {
        var t;
        const r =
          null ===
            (t = (0, _.formatWildcardDomain)(e).match(
              /^(?:https?:\/\/|wss?:\/\/)?(?:[^@\n]+@)?(?:www\.)?([^:/\n?=]+)/im
            )) || void 0 === t
            ? void 0
            : t[1];
        if (r) return r.replace(/^(?:www\.)?/, "").replace(/^(?:api\.)?/, "");
      }
      const s = function () {
          let { path: e = "", isSocket: t = !1 } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { domainMap: r } = o.default.getCurrencyDomain();
          return `${
            (null == r
              ? void 0
              : r[o.default.getCurrency()][t ? "socket" : "api"]) ||
            (function (e) {
              let t = i(location.host);
              "com.ph" === t && (t = "fada888.com.ph");
              const r = i(e);
              return e.replace(r, t);
            })(t ? E.socketServer : E.baseURL)
          }${e}`;
        },
        T =
          ((t.baseURL = s()),
          (t.socketServer = s({
            isSocket: !0,
          })),
          {
            loginURL: "/login",
            logoutURL: "/logout",
            launchGamesURL: "/games",
            rewardStoreURL: "/games/rewardoperator",
            myFavoriteGamesURL: "/games/myFavorite",
            playerPaymentsURL: "/playerpayments",
            playerPaymentsBanksURL: "/playerpayments/banks",
            playersLookupURL: "/players/lookup",
            modifyPasswordURL: "/password",
            modifyWithdrawalPasswordURL: "/pin",
            forgetPasswordURL: "/resetpassword",
            resetPasswordURL: "/resetpassword",
            forgetAccountURL: "/forgetusername",
            depositBanksURL: "/deposits/banks",
            depositApplyInfosURL: "/deposits/applyinfo",
            depositCollectionURL: "/deposits/collectionaccounts",
            depositUuidURL: "/deposits/uuid",
            depositURL: "/deposits",
            paymentsURL: "/payments",
            announcementsURL: "/announcements",
            messagesURL: "/messages",
            deleteMsgsURL: "/delete",
            unreadBadgeURL: "/unread",
            promopostingsURL: "/promosforplayertoapply",
            promoreqsURL: "/promoreqs",
            promoDepositamtForSelfselectURL: "/depositamtforselfselect",
            promoTransferToMainAndGetBalanceForSelectURL:
              "/transfertomainandgetbalanceforselfselect",
            adsURL: "/ads",
            withdrawalsURL: "/withdrawals",
            transfersURL: "/transfers",
            finanURL: "/transactions",
            rebatesURL: "/gamerebates",
            manualAdjustmentsURL: "/manualrecords",
            cashSummaryURL: "/cashsummary",
            withdrawalApplyInfoURL: "/withdrawals/applyinfo",
            activateURL: "/activate",
            captchaRandomURL: "/captchas/random",
            checkAffiliatesURL: "/aff",
            maintenanceURL: "/gamesettings/maintenance",
            profileURL: "/profile",
            profileSettleURL: "/profile/settle",
            profileRequiredinfoURL: "/profile/requiredinfo",
            syncURL: "/sync",
            settingsURL: "/settings",
            agentsURL: "/agents",
            claimURL: "/claim",
            paymentNotesURL: "/paymentnotesettings",
            reportsURL: "/reports",
            cryptowalletURL: "/cryptowallet/goplay/btc",
            bankcardSettingURL: "/bankcard/setting",
            affiliatesURL: "/affiliates",
            floatingadsURL: "/floatingads",
            promowinnersURL: "/promowinners",
            giftpromoURL: "/giftpromo",
            adWebpageShareURL: "/shareSites",
            newVipSetting: "/newVipSetting",
            ssVipSetting: "/ssVipSetting",
            dashboard: "/dashboard",
            thirdPartyLoginURL: "/thirdPartyLogin",
            DrawGameResultURL: "/drawCenter/Lobby/gameDraw",
            DrawGameNameURL: "/drawCenter/Lobby/game/name",
            SleVendorTokenURL: "/drawCenter/Lobby/token",
            cryptoAccountSettingUrl: "/cryptowallet/setting",
            cryptoAccountUrl: "/cryptowallet",
            cryptoAccountInfoUrl: "/cryptowallet/info",
            raffleTicketURL: "/raffleTicket",
            raffleTicketListURL: "/raffleTicket/list",
            getApiURL: s,
          });
      t.default = T;
    },
    69383: (e) => {
      "use strict";
      e.exports = Error;
    },
    69600: (e) => {
      "use strict";
      var t,
        r,
        a = Function.prototype.toString,
        n = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
      if ("function" == typeof n && "function" == typeof Object.defineProperty)
        try {
          (t = Object.defineProperty({}, "length", {
            get: function () {
              throw r;
            },
          })),
            (r = {}),
            n(
              function () {
                throw 42;
              },
              null,
              t
            );
        } catch (e) {
          e !== r && (n = null);
        }
      else n = null;
      var o = /^\s*class\b/,
        _ = function (e) {
          try {
            var t = a.call(e);
            return o.test(t);
          } catch (e) {
            return !1;
          }
        },
        E = function (e) {
          try {
            return !_(e) && (a.call(e), !0);
          } catch (e) {
            return !1;
          }
        },
        i = Object.prototype.toString,
        s = "function" == typeof Symbol && !!Symbol.toStringTag,
        T = !(0 in [,]),
        A = function () {
          return !1;
        };
      if ("object" == typeof document) {
        var S = document.all;
        i.call(S) === i.call(document.all) &&
          (A = function (e) {
            if ((T || !e) && (void 0 === e || "object" == typeof e))
              try {
                var t = i.call(e);
                return (
                  ("[object HTMLAllCollection]" === t ||
                    "[object HTML document.all class]" === t ||
                    "[object HTMLCollection]" === t ||
                    "[object Object]" === t) &&
                  null == e("")
                );
              } catch (e) {}
            return !1;
          });
      }
      e.exports = n
        ? function (e) {
            if (A(e)) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            try {
              n(e, null, t);
            } catch (e) {
              if (e !== r) return !1;
            }
            return !_(e) && E(e);
          }
        : function (e) {
            if (A(e)) return !0;
            if (!e) return !1;
            if ("function" != typeof e && "object" != typeof e) return !1;
            if (s) return E(e);
            if (_(e)) return !1;
            var t = i.call(e);
            return (
              !(
                "[object Function]" !== t &&
                "[object GeneratorFunction]" !== t &&
                !/^\[object HTML/.test(t)
              ) && E(e)
            );
          };
    },
    69675: (e) => {
      "use strict";
      e.exports = TypeError;
    },
    69982: (e, t, r) => {
      "use strict";
      e.exports = r(7463);
    },
    70011: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { kwai: _ } = n.default.brand;
      let E = "";
      try {
        E = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/kwai.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = async () => {
        const e = (0, o.getURLParams)("kwa") || (0, o.getDomainId)(E) || _;
        e &&
          (0, o.pageLoadedAction)(() => {
            const t = document.createElement("script"),
              r = `\n        !function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.install=t():e.install=t()}(window,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";var r=this&&this.__spreadArray||function(e,t,n){if(n||2===arguments.length)for(var r,o=0,i=t.length;o<i;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))};!function(e){var t=window;t.KwaiAnalyticsObject=e,t[e]=t[e]||[];var n=t[e];n.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie"];var o=function(e,t){e[t]=function(){var n=Array.from(arguments),o=r([t],n,!0);e.push(o)}};n.methods.forEach((function(e){o(n,e)})),n.instance=function(e){var t=n._i[e]||[];return n.methods.forEach((function(e){o(t,e)})),t},n.load=function(t,r){n._i=n._i||{},n._i[t]=[],n._i[t]._u="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js",n._t=n._t||{},n._t[t]=+new Date,n._o=n._o||{},n._o[t]=r||{};var o=document.createElement("script");o.type="text/javascript",o.async=!0,o.src="https://s1.kwai.net/kos/s101/nlav11187/pixel/events.js?sdkid="+t+"&lib="+e;var i=document.getElementsByTagName("script")[0];i.parentNode.insertBefore(o,i)}}("kwaiq")}])}));\n        kwaiq.load('${e}');\n        kwaiq.page();\n      `;
            t.appendChild(document.createTextNode(r)),
              document.head.appendChild(t);
          });
      };
    },
    70414: (e) => {
      "use strict";
      e.exports = Math.round;
    },
    70453: (e, t, r) => {
      "use strict";
      var a,
        n = r(79612),
        o = r(69383),
        _ = r(41237),
        E = r(79290),
        i = r(79538),
        s = r(58068),
        T = r(69675),
        A = r(35345),
        S = r(71514),
        l = r(58968),
        u = r(6188),
        c = r(68002),
        R = r(75880),
        d = r(70414),
        p = r(73093),
        I = Function,
        P = function (e) {
          try {
            return I('"use strict"; return (' + e + ").constructor;")();
          } catch (e) {}
        },
        O = r(75795),
        f = r(30655),
        m = function () {
          throw new T();
        },
        L = O
          ? (function () {
              try {
                return m;
              } catch (e) {
                try {
                  return O(arguments, "callee").get;
                } catch (e) {
                  return m;
                }
              }
            })()
          : m,
        C = r(64039)(),
        y = r(93628),
        g = r(71064),
        U = r(48648),
        N = r(11002),
        D = r(10076),
        G = {},
        M = "undefined" != typeof Uint8Array && y ? y(Uint8Array) : a,
        F = {
          __proto__: null,
          "%AggregateError%":
            "undefined" == typeof AggregateError ? a : AggregateError,
          "%Array%": Array,
          "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? a : ArrayBuffer,
          "%ArrayIteratorPrototype%": C && y ? y([][Symbol.iterator]()) : a,
          "%AsyncFromSyncIteratorPrototype%": a,
          "%AsyncFunction%": G,
          "%AsyncGenerator%": G,
          "%AsyncGeneratorFunction%": G,
          "%AsyncIteratorPrototype%": G,
          "%Atomics%": "undefined" == typeof Atomics ? a : Atomics,
          "%BigInt%": "undefined" == typeof BigInt ? a : BigInt,
          "%BigInt64Array%":
            "undefined" == typeof BigInt64Array ? a : BigInt64Array,
          "%BigUint64Array%":
            "undefined" == typeof BigUint64Array ? a : BigUint64Array,
          "%Boolean%": Boolean,
          "%DataView%": "undefined" == typeof DataView ? a : DataView,
          "%Date%": Date,
          "%decodeURI%": decodeURI,
          "%decodeURIComponent%": decodeURIComponent,
          "%encodeURI%": encodeURI,
          "%encodeURIComponent%": encodeURIComponent,
          "%Error%": o,
          "%eval%": eval,
          "%EvalError%": _,
          "%Float16Array%":
            "undefined" == typeof Float16Array ? a : Float16Array,
          "%Float32Array%":
            "undefined" == typeof Float32Array ? a : Float32Array,
          "%Float64Array%":
            "undefined" == typeof Float64Array ? a : Float64Array,
          "%FinalizationRegistry%":
            "undefined" == typeof FinalizationRegistry
              ? a
              : FinalizationRegistry,
          "%Function%": I,
          "%GeneratorFunction%": G,
          "%Int8Array%": "undefined" == typeof Int8Array ? a : Int8Array,
          "%Int16Array%": "undefined" == typeof Int16Array ? a : Int16Array,
          "%Int32Array%": "undefined" == typeof Int32Array ? a : Int32Array,
          "%isFinite%": isFinite,
          "%isNaN%": isNaN,
          "%IteratorPrototype%": C && y ? y(y([][Symbol.iterator]())) : a,
          "%JSON%": "object" == typeof JSON ? JSON : a,
          "%Map%": "undefined" == typeof Map ? a : Map,
          "%MapIteratorPrototype%":
            "undefined" != typeof Map && C && y
              ? y(new Map()[Symbol.iterator]())
              : a,
          "%Math%": Math,
          "%Number%": Number,
          "%Object%": n,
          "%Object.getOwnPropertyDescriptor%": O,
          "%parseFloat%": parseFloat,
          "%parseInt%": parseInt,
          "%Promise%": "undefined" == typeof Promise ? a : Promise,
          "%Proxy%": "undefined" == typeof Proxy ? a : Proxy,
          "%RangeError%": E,
          "%ReferenceError%": i,
          "%Reflect%": "undefined" == typeof Reflect ? a : Reflect,
          "%RegExp%": RegExp,
          "%Set%": "undefined" == typeof Set ? a : Set,
          "%SetIteratorPrototype%":
            "undefined" != typeof Set && C && y
              ? y(new Set()[Symbol.iterator]())
              : a,
          "%SharedArrayBuffer%":
            "undefined" == typeof SharedArrayBuffer ? a : SharedArrayBuffer,
          "%String%": String,
          "%StringIteratorPrototype%": C && y ? y(""[Symbol.iterator]()) : a,
          "%Symbol%": C ? Symbol : a,
          "%SyntaxError%": s,
          "%ThrowTypeError%": L,
          "%TypedArray%": M,
          "%TypeError%": T,
          "%Uint8Array%": "undefined" == typeof Uint8Array ? a : Uint8Array,
          "%Uint8ClampedArray%":
            "undefined" == typeof Uint8ClampedArray ? a : Uint8ClampedArray,
          "%Uint16Array%": "undefined" == typeof Uint16Array ? a : Uint16Array,
          "%Uint32Array%": "undefined" == typeof Uint32Array ? a : Uint32Array,
          "%URIError%": A,
          "%WeakMap%": "undefined" == typeof WeakMap ? a : WeakMap,
          "%WeakRef%": "undefined" == typeof WeakRef ? a : WeakRef,
          "%WeakSet%": "undefined" == typeof WeakSet ? a : WeakSet,
          "%Function.prototype.call%": D,
          "%Function.prototype.apply%": N,
          "%Object.defineProperty%": f,
          "%Object.getPrototypeOf%": g,
          "%Math.abs%": S,
          "%Math.floor%": l,
          "%Math.max%": u,
          "%Math.min%": c,
          "%Math.pow%": R,
          "%Math.round%": d,
          "%Math.sign%": p,
          "%Reflect.getPrototypeOf%": U,
        };
      if (y)
        try {
          null.error;
        } catch (e) {
          var v = y(y(e));
          F["%Error.prototype%"] = v;
        }
      var h = function e(t) {
          var r;
          if ("%AsyncFunction%" === t) r = P("async function () {}");
          else if ("%GeneratorFunction%" === t) r = P("function* () {}");
          else if ("%AsyncGeneratorFunction%" === t)
            r = P("async function* () {}");
          else if ("%AsyncGenerator%" === t) {
            var a = e("%AsyncGeneratorFunction%");
            a && (r = a.prototype);
          } else if ("%AsyncIteratorPrototype%" === t) {
            var n = e("%AsyncGenerator%");
            n && y && (r = y(n.prototype));
          }
          return (F[t] = r), r;
        },
        Y = {
          __proto__: null,
          "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
          "%ArrayPrototype%": ["Array", "prototype"],
          "%ArrayProto_entries%": ["Array", "prototype", "entries"],
          "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
          "%ArrayProto_keys%": ["Array", "prototype", "keys"],
          "%ArrayProto_values%": ["Array", "prototype", "values"],
          "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
          "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
          "%AsyncGeneratorPrototype%": [
            "AsyncGeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%BooleanPrototype%": ["Boolean", "prototype"],
          "%DataViewPrototype%": ["DataView", "prototype"],
          "%DatePrototype%": ["Date", "prototype"],
          "%ErrorPrototype%": ["Error", "prototype"],
          "%EvalErrorPrototype%": ["EvalError", "prototype"],
          "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
          "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
          "%FunctionPrototype%": ["Function", "prototype"],
          "%Generator%": ["GeneratorFunction", "prototype"],
          "%GeneratorPrototype%": [
            "GeneratorFunction",
            "prototype",
            "prototype",
          ],
          "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
          "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
          "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
          "%JSONParse%": ["JSON", "parse"],
          "%JSONStringify%": ["JSON", "stringify"],
          "%MapPrototype%": ["Map", "prototype"],
          "%NumberPrototype%": ["Number", "prototype"],
          "%ObjectPrototype%": ["Object", "prototype"],
          "%ObjProto_toString%": ["Object", "prototype", "toString"],
          "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
          "%PromisePrototype%": ["Promise", "prototype"],
          "%PromiseProto_then%": ["Promise", "prototype", "then"],
          "%Promise_all%": ["Promise", "all"],
          "%Promise_reject%": ["Promise", "reject"],
          "%Promise_resolve%": ["Promise", "resolve"],
          "%RangeErrorPrototype%": ["RangeError", "prototype"],
          "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
          "%RegExpPrototype%": ["RegExp", "prototype"],
          "%SetPrototype%": ["Set", "prototype"],
          "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
          "%StringPrototype%": ["String", "prototype"],
          "%SymbolPrototype%": ["Symbol", "prototype"],
          "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
          "%TypedArrayPrototype%": ["TypedArray", "prototype"],
          "%TypeErrorPrototype%": ["TypeError", "prototype"],
          "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
          "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
          "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
          "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
          "%URIErrorPrototype%": ["URIError", "prototype"],
          "%WeakMapPrototype%": ["WeakMap", "prototype"],
          "%WeakSetPrototype%": ["WeakSet", "prototype"],
        },
        b = r(66743),
        w = r(9957),
        H = b.call(D, Array.prototype.concat),
        J = b.call(N, Array.prototype.splice),
        B = b.call(D, String.prototype.replace),
        W = b.call(D, String.prototype.slice),
        j = b.call(D, RegExp.prototype.exec),
        Q =
          /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
        X = /\\(\\)?/g,
        x = function (e, t) {
          var r,
            a = e;
          if ((w(Y, a) && (a = "%" + (r = Y[a])[0] + "%"), w(F, a))) {
            var n = F[a];
            if ((n === G && (n = h(a)), void 0 === n && !t))
              throw new T(
                "intrinsic " +
                  e +
                  " exists, but is not available. Please file an issue!"
              );
            return {
              alias: r,
              name: a,
              value: n,
            };
          }
          throw new s("intrinsic " + e + " does not exist!");
        };
      e.exports = function (e, t) {
        if ("string" != typeof e || 0 === e.length)
          throw new T("intrinsic name must be a non-empty string");
        if (arguments.length > 1 && "boolean" != typeof t)
          throw new T('"allowMissing" argument must be a boolean');
        if (null === j(/^%?[^%]*%?$/, e))
          throw new s(
            "`%` may not be present anywhere but at the beginning and end of the intrinsic name"
          );
        var r = (function (e) {
            var t = W(e, 0, 1),
              r = W(e, -1);
            if ("%" === t && "%" !== r)
              throw new s("invalid intrinsic syntax, expected closing `%`");
            if ("%" === r && "%" !== t)
              throw new s("invalid intrinsic syntax, expected opening `%`");
            var a = [];
            return (
              B(e, Q, function (e, t, r, n) {
                a[a.length] = r ? B(n, X, "$1") : t || e;
              }),
              a
            );
          })(e),
          a = r.length > 0 ? r[0] : "",
          n = x("%" + a + "%", t),
          o = n.name,
          _ = n.value,
          E = !1,
          i = n.alias;
        i && ((a = i[0]), J(r, H([0, 1], i)));
        for (var A = 1, S = !0; A < r.length; A += 1) {
          var l = r[A],
            u = W(l, 0, 1),
            c = W(l, -1);
          if (
            ('"' === u ||
              "'" === u ||
              "`" === u ||
              '"' === c ||
              "'" === c ||
              "`" === c) &&
            u !== c
          )
            throw new s("property names with quotes must have matching quotes");
          if (
            (("constructor" !== l && S) || (E = !0),
            w(F, (o = "%" + (a += "." + l) + "%")))
          )
            _ = F[o];
          else if (null != _) {
            if (!(l in _)) {
              if (!t)
                throw new T(
                  "base intrinsic for " +
                    e +
                    " exists, but the property is not available."
                );
              return;
            }
            if (O && A + 1 >= r.length) {
              var R = O(_, l);
              _ =
                (S = !!R) && "get" in R && !("originalValue" in R.get)
                  ? R.get
                  : _[l];
            } else (S = w(_, l)), (_ = _[l]);
            S && !E && (F[o] = _);
          }
        }
        return _;
      };
    },
    70703: (e, t, r) => {
      "use strict";
      var a = r(10487),
        n = r(38452),
        o = r(30305),
        _ = r(76308),
        E = r(47742),
        i = a(_());
      n(i, {
        getPolyfill: _,
        implementation: o,
        shim: E,
      }),
        (e.exports = i);
    },
    70739: (e, t, r) => {
      "use strict";
      e.exports = r(85040);
    },
    70879: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      const a = (0, r(96540).createContext)({});
      t.default = a;
    },
    70913: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.timeZoneOffsetMS =
          t.timeZoneDiffbyMs =
          t.localTimeZone =
          t.getValueOfDateTime =
          t.getDeviceTimeByGMT8 =
          t.getCountdownSecondsByGMT8 =
          t.formatSecondsToMinuteSecond =
          t.formatMinuteTime =
          t.formatDateWeekDay =
          t.formatDateTime =
          t.formatDateStrictMode =
          t.formatDateOfInputField =
          t.formatDate =
          t.formatBirthday =
          t.daysBeforeNow =
          t.dateTimezone =
          t.currentTimeZone =
          t.convertDateTime =
            void 0);
      var n = a(r(95093)),
        o = r(83980),
        _ = r(51628);
      const E = {
          "MM/DD": "DD/MM",
          "MM-DD": "DD/MM",
          "YYYY-MM-DD": "DD/MM/YYYY",
          "YYYY/MM/DD": "DD/MM/YYYY",
          "DD / MM / YYYY": "DD/MM/YYYY",
          "YYYY / MM / DD": "DD/MM/YYYY",
          "YYYY-MM-DD HH:mm:ss": "HH:mm:ss DD/MM/YYYY",
          "YYYY-MM-DD HH:mm": "HH:mm DD/MM/YYYY",
          "YYYY/MM/DD HH:mm:ss": "HH:mm:ss DD/MM/YYYY",
          "DD / MM / YYYY HH:mm:ss": "HH:mm:ss DD/MM/YYYY",
          "DD/MM/YYYY HH:mm:ss": "HH:mm:ss DD/MM/YYYY",
          "DD-MM-YYYY HH:mm:ss": "HH:mm:ss DD/MM/YYYY",
          "DD/MM HH:mm": "HH:mm DD/MM",
          "YYYY-MM-DD dddd": "dddd DD/MM/YYYY",
        },
        i = (e) => (o.isVietnamese && E[e]) || e;
      (t.formatDate = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD",
          r =
            arguments.length > 2 && void 0 !== arguments[2]
              ? arguments[2]
              : "N/A";
        return e ? (0, n.default)(e).format(i(t)) : r;
      }),
        (t.formatDateStrictMode = function (e, t) {
          let r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "YYYY-MM-DD",
            a =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : "N/A";
          return e ? (0, n.default)(e, t, !0).format(i(r)) : a;
        }),
        (t.formatDateOfInputField = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "YYYY-MM-DD",
            r =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : "N/A";
          return e ? (0, n.default)(e).format(t) : r;
        }),
        (t.formatDateTime = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD HH:mm:ss";
          return e ? (0, n.default)(e).format(i(t)) : "";
        }),
        (t.formatSecondsToMinuteSecond = (e) => {
          try {
            if ("number" != typeof e) return "N/A";
            const t = Math.floor(e / 60);
            let r = e % 60;
            return 1 === r.toString().length && (r = `0${r}`), `${t}:${r}`;
          } catch (e) {
            return "";
          }
        }),
        (t.formatDateWeekDay = function (e) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : "YYYY-MM-DD dddd",
            r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return e ? (0, n.default)(r ? e + A : e).format(i(t)) : "N/A";
        }),
        (t.formatBirthday = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "YYYY-MM-DD";
          return e ? (0, n.default)(e).format(i(t)) : "";
        }),
        (t.getValueOfDateTime = (e) =>
          (0, n.default)(`${e.date} ${e.time}`).valueOf()),
        (t.dateTimezone = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : new Date();
          const r = t.getTime() + 6e4 * t.getTimezoneOffset();
          return new Date(r + 36e5 * e);
        }),
        (t.daysBeforeNow = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
          return (0, n.default)().subtract(e, "days");
        });
      const s = (t.timeZoneOffsetMS =
          60 * new Date().getTimezoneOffset() * 1e3),
        T = (t.localTimeZone = -new Date().getTimezoneOffset() / 60);
      (t.currentTimeZone = T > 0 ? `GMT+${T}` : "GMT-" + -T),
        (t.convertDateTime = function (e) {
          let { timeZone: t = 8, isSearch: r = !1 } =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          if (e) {
            const a = s + 60 * t * 60 * 1e3;
            return e + (r ? -a : a);
          }
          return e;
        });
      const A = (t.timeZoneDiffbyMs = 36e5 * (8 - T));
      (t.formatMinuteTime = (e) => {
        let t,
          r,
          a = parseInt(e, 10),
          n = "";
        return (
          (t = Math.floor(a / 1440)),
          (r = Math.floor((a % 1440) / 60)),
          t && (n = `${t}${_.i18n.days}`),
          r && (n = `${n}${r}${_.i18n["hours.1"]}`),
          n || `0${_.i18n.days}`
        );
      }),
        (t.getDeviceTimeByGMT8 = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          if ("number" == typeof e) {
            const r = new Date(),
              a = (e - 8 + 24) % 24;
            return (
              r.setUTCHours(a, t, 0, 0),
              r.toLocaleString("en-US", {
                hour12: !1,
                hour: "2-digit",
                minute: "2-digit",
              })
            );
          }
          return "";
        }),
        (t.getCountdownSecondsByGMT8 = () => {
          const e =
            ((0, n.default)().endOf("day").valueOf() -
              A -
              new Date().getTime()) /
            1e3;
          return e > 0 ? e : e + 86400;
        });
    },
    71041: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(9404),
        n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(42675));
      const o = {
        isLoadingAllPaymentNotes: !1,
        loadingAllPaymentNotesSuc: !1,
        loadingAllPaymentNotesErr: !1,
        paymentNotes: (0, a.Map)(),
        paymentNotesPopuptype: (0, a.Map)(),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : o,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case n.GET_ALL_PAYMENT_NOTES_REQUEST:
            return {
              ...e,
              isLoadingAllPaymentNotes: !0,
              loadingAllPaymentNotesSuc: !1,
              loadingAllPaymentNotesErr: !1,
            };
          case n.GET_ALL_PAYMENT_NOTES_SUCCESS:
            return {
              ...e,
              isLoadingAllPaymentNotes: !1,
              loadingAllPaymentNotesSuc: !0,
              loadingAllPaymentNotesErr: !1,
              paymentNotes: t.payload.data.reduce(
                (e, t) => e.set(t.deposittype, t.content),
                (0, a.Map)()
              ),
              paymentNotesPopuptype: t.payload.data.reduce(
                (e, t) => e.set(t.deposittype, t.popuptype),
                (0, a.Map)()
              ),
            };
          case n.GET_ALL_PAYMENT_NOTES_FAILURE:
            return {
              ...e,
              isLoadingAllPaymentNotes: !1,
              loadingAllPaymentNotesSuc: !1,
              loadingAllPaymentNotesErr: !0,
            };
          default:
            return e;
        }
      };
    },
    71064: (e, t, r) => {
      "use strict";
      var a = r(79612);
      e.exports = a.getPrototypeOf || null;
    },
    71514: (e) => {
      "use strict";
      e.exports = Math.abs;
    },
    71850: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.withVerticalProvidersTemplate =
          t.withHorizontalProvidersTemplate =
          t.isUseOnScrollChangeGameType =
          t.isSportPage =
          t.isLaunchSportPage =
          t.getProviderOrGameAutoScrollList =
          t.desktopSportPagePath =
            void 0);
      var n = a(r(94188)),
        o = r(15062),
        _ = r(8087);
      const {
          brand: {
            code: E,
            custom: {
              components: { Sports: i },
            },
            customMobile: { components: s },
          },
        } = n.default,
        T = "luckykismat" === i;
      (t.isSportPage = T),
        (t.isLaunchSportPage = (e) => "LUCKY_SPORTS" === e && T),
        (t.desktopSportPagePath = o.paths.SPORT_PAGE_DESKTOP),
        (t.withVerticalProvidersTemplate = [
          "template-classic-gpk",
          "template-classic-gpk-col1",
          "template-classic-gpk-col2",
        ]),
        (t.withHorizontalProvidersTemplate = [
          "template-classic",
          "template-classic-full",
        ]),
        (t.isUseOnScrollChangeGameType = [""].includes(E)),
        (t.getProviderOrGameAutoScrollList = function (e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          const {
              Egame: r,
              Fishing: a,
              Chess: n,
              Animal: o,
              Esports: i,
              Live: T,
              Lottery: A,
              Sports: S,
            } = s,
            l = {
              [_.gameType.EGAME]: r,
              [_.gameType.MPG]: a,
              [_.gameType.CHESS]: n,
              [_.gameType.ANIMAL]: o,
              [_.gameType.ESPORTS]: i,
              [_.gameType.LIVE]: T,
              [_.gameType.LOTTERY]: A,
              [_.gameType.SPORTS]: S,
            },
            u = !!{
              er: !0,
            }[E],
            c = l[e],
            R = t
              ? [
                  "template-col1-gpk",
                  "template-col2-gpk",
                  "template-classic-gpk",
                  "template-classic-gpk-col1",
                  "template-classic-gpk-col2",
                  "template-submenu",
                  "template-submenu-full",
                  "template-classic",
                  "template-classic-full",
                ].includes(c)
              : [
                  "template-col1-gpk",
                  "template-col2-gpk",
                  "template-classic-gpk",
                  "template-classic-gpk-col1",
                  "template-classic-gpk-col2",
                  "template-classic-full",
                ].includes(c);
          return !u && R;
        });
    },
    72524: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = r(96540);
      t.default = function (e) {
        void 0 === e && (e = {});
        var t = a.useState(e),
          r = t[0],
          n = t[1];
        return [
          r,
          a.useCallback(function (e) {
            n(function (t) {
              return Object.assign({}, t, e instanceof Function ? e(t) : e);
            });
          }, []),
        ];
      };
    },
    72596: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getThirdPartyUrlParams =
          t.getThirdPartyTypes =
          t.getThirdPartyAuthCheckingURL =
          t.getRandomUpperChar =
          t.getRandomSymbolChar =
          t.getRandomSeeds =
          t.getRandomNumberChar =
          t.getRandomLowerChar =
            void 0);
      var n = a(r(86663)),
        o = a(r(94188)),
        _ = r(83597),
        E = r(28415);
      (t.getThirdPartyAuthCheckingURL = (e) => {
        let {
          thirdPartyType: t,
          params: r = {},
          state: a = {},
          type: i = "login",
        } = e;
        const { appId: s, appVersion: T, redirectUrl: A } = r,
          S = n.default.stringify({
            client_id: s,
          }),
          l = JSON.stringify(a) || "",
          u = (e) => {
            if ("object" != typeof e)
              throw new Error("Input must be an object");
            const t = JSON.stringify(e);
            return encodeURIComponent(t);
          };
        return t === E.thirdPartyTypeEnum.FACEBOOK
          ? _.isNativeApp
            ? `wl://fb.${i}?appid=${s}&version=${T}`
            : `https://www.facebook.com/${T}/dialog/oauth?${S}&redirect_uri=${encodeURIComponent(
                A
              )}&response_type=token&state=${l}`
          : t === E.thirdPartyTypeEnum.GOOGLE
          ? _.isNativeApp
            ? `wl://google.${i}?appid=${s}`
            : `https://accounts.google.com/o/oauth2/v2/auth?scope=openid profile email&include_granted_scopes=true&response_type=code&state=${l}&redirect_uri=${A}&client_id=${s}&prompt=consent&display=popup`
          : t === E.thirdPartyTypeEnum.LINE
          ? _.isNativeApp
            ? `wl://line.${i}?appid=${s}`
            : `https://access.line.me/oauth2/v2.1/authorize?response_type=code&client_id=${s}&redirect_uri=${encodeURIComponent(
                A
              )}&state=${u(a)}&scope=profile%20openid%20email`
          : t === E.thirdPartyTypeEnum.TELEGRAM
          ? ((a.telegramConfig = r),
            (a.logoPath = `https://img.alltocon.com/img/static/mobile/brand/${o.default.brand.code}/logo.png`),
            (a.styleList = o.default.loginCheckHtml || {}),
            `${A}?state=${JSON.stringify(a)}`)
          : t === E.thirdPartyTypeEnum.ZALO
          ? _.isNativeApp
            ? `wl://zalo.${i}?appid=${s}`
            : `https://oauth.zalo.me/v4/permission?app_id=${s}&redirect_uri=${encodeURIComponent(
                A
              )}&state=${u(a)}`
          : `${encodeURIComponent(location.origin)}`;
      }),
        (t.getRandomLowerChar = () =>
          String.fromCharCode(Math.floor(26 * Math.random()) + 97)),
        (t.getRandomUpperChar = () =>
          String.fromCharCode(Math.floor(26 * Math.random()) + 65)),
        (t.getRandomNumberChar = () =>
          String.fromCharCode(Math.floor(10 * Math.random()) + 48)),
        (t.getRandomSymbolChar = () =>
          "@#$%^&*(){}[]"[Math.floor(13 * Math.random())]),
        (t.getRandomSeeds = (e) =>
          Array(e)
            .fill(0)
            .reduce((e) => {
              let t = Math.floor(10 * Math.random());
              for (; e.includes(t); ) t = Math.floor(10 * Math.random());
              return [...e, t];
            }, [])),
        (t.getThirdPartyUrlParams = () => {
          const e = location.search.slice(1) || location.hash.slice(1),
            {
              access_token: t,
              code: r,
              state: a,
              thirdPartyType: o,
              sdkToken: _,
            } = n.default.parse(e);
          let E = {};
          if (a)
            try {
              E = JSON.parse(a);
            } catch (e) {
              console.log("thirdPartyUriState error: ", e);
            }
          const { thirdPartyType: i } = E;
          return {
            thirdPartyToken: t || r || _,
            thirdPartyType: o || i,
          };
        }),
        (t.getThirdPartyTypes = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
          return Array.isArray(e)
            ? e.filter((e) => e.open).map((e) => e.thirdPartyType)
            : [];
        });
    },
    72980: (e, t, r) => {
      "use strict";
      var a = r(24994),
        n = (a(r(96540)), r(5338)),
        o = a(r(29507)),
        _ = a(r(15026)),
        E = a(r(38751)),
        i = r(67467),
        s = r(28651);
      r(25312);
      var T = a(r(63979)),
        A = a(r(94188)),
        S = r(38560),
        l = a(r(10604)),
        u = r(51628),
        c = r(27820),
        R = a(r(57417)),
        d = a(r(65881)),
        p = a(r(21455)),
        I = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(4252)),
        P = r(74848);
      const { hashDomainScript: O } = r(81667);
      r(70703).shim(),
        (window.version = "ab5f371961f0238eb4d9d23aaafc768b4b1cce1d"),
        window.addEventListener("DOMContentLoaded", () => {
          var e;
          window.defaultDesc =
            null === (e = document.querySelector('meta[name="description"]')) ||
            void 0 === e
              ? void 0
              : e.content;
        }),
        A.default.brand.webPush || I.register(),
        document.documentElement.style.setProperty(
          "--swiper-theme-color",
          "#fff"
        ),
        (0, c.setPixelS2SInfo)(),
        (0, d.default)(),
        O && O(),
        (0, R.default)(),
        (0, u.getLocale)(async () => {
          let e;
          e = S.isDesktop
            ? await Promise.all([
                r.e(2365),
                r.e(4121),
                r.e(8092),
                r.e(7271),
                r.e(3110),
                r.e(3333),
                r.e(3327),
                r.e(1376),
                r.e(6870),
                r.e(9972),
                r.e(7878),
                r.e(8783),
                r.e(8769),
                r.e(115),
                r.e(6629),
                r.e(9903),
                r.e(6830),
                r.e(4899),
                r.e(4856),
                r.e(5286),
                r.e(3982),
                r.e(5266),
                r.e(9925),
                r.e(9125),
                r.e(1248),
                r.e(3234),
                r.e(8896),
                r.e(4617),
                r.e(1650),
                r.e(1518),
                r.e(516),
                r.e(9933),
                r.e(8024),
                r.e(6722),
                r.e(1410),
                r.e(8308),
              ]).then(r.bind(r, 20294))
            : await Promise.all([
                r.e(2365),
                r.e(8092),
                r.e(3110),
                r.e(3333),
                r.e(3327),
                r.e(6830),
                r.e(4856),
                r.e(1248),
                r.e(2052),
                r.e(4486),
                r.e(231),
                r.e(7977),
                r.e(8024),
                r.e(5404),
                r.e(1420),
              ]).then(r.bind(r, 30576));
          const t = r(40060).A,
            a = document.getElementById("root"),
            A = (0, n.createRoot)(a),
            u = e.default;
          A.render(
            (0, P.jsx)(i.Provider, {
              store: t,
              children: (0, P.jsx)(s.Router, {
                history: l.default,
                children: (0, P.jsx)(o.default, {
                  children: (0, P.jsxs)(_.default, {
                    children: [
                      (0, P.jsx)(E.default, {
                        children: (0, P.jsx)(p.default, {
                          children: (0, P.jsx)(u, {}),
                        }),
                      }),
                      (0, P.jsx)(T.default, {}),
                    ],
                  }),
                }),
              }),
            })
          );
        });
    },
    72983: (e, t, r) => {
      var a = {
        "./games/ar-SA": [71918, 7, 3192],
        "./games/ar-SA.js": [71918, 7, 3192],
        "./games/bn-BD": [61729, 7, 8797],
        "./games/bn-BD.js": [61729, 7, 8797],
        "./games/en-US": [67166, 7, 4924],
        "./games/en-US.js": [67166, 7, 4924],
        "./games/es-MX": [7094, 7, 6668],
        "./games/es-MX.js": [7094, 7, 6668],
        "./games/hi-IN": [29061, 7, 5409],
        "./games/hi-IN.js": [29061, 7, 5409],
        "./games/id-ID": [47145, 7, 9365],
        "./games/id-ID.js": [47145, 7, 9365],
        "./games/it-IT": [64681, 7, 9077],
        "./games/it-IT.js": [64681, 7, 9077],
        "./games/ja-JP": [63470, 7, 7100],
        "./games/ja-JP.js": [63470, 7, 7100],
        "./games/km-KH": [2548, 7, 3206],
        "./games/km-KH.js": [2548, 7, 3206],
        "./games/kn-IN": [9691, 7, 4879],
        "./games/kn-IN.js": [9691, 7, 4879],
        "./games/ko-KR": [74552, 7, 4326],
        "./games/ko-KR.js": [74552, 7, 4326],
        "./games/lo-LA": [64631, 7, 2307],
        "./games/lo-LA.js": [64631, 7, 2307],
        "./games/ml-IN": [65707, 7, 7915],
        "./games/ml-IN.js": [65707, 7, 7915],
        "./games/ms-MY": [98141, 7, 7341],
        "./games/ms-MY.js": [98141, 7, 7341],
        "./games/my-MM": [10819, 7, 8171],
        "./games/my-MM.js": [10819, 7, 8171],
        "./games/ne-NP": [61394, 7, 7352],
        "./games/ne-NP.js": [61394, 7, 7352],
        "./games/pt-BR": [47867, 7, 5183],
        "./games/pt-BR.js": [47867, 7, 5183],
        "./games/ru-RU": [76789, 7, 6021],
        "./games/ru-RU.js": [76789, 7, 6021],
        "./games/ta-IN": [91937, 7, 589],
        "./games/ta-IN.js": [91937, 7, 589],
        "./games/te-IN": [733, 7, 625],
        "./games/te-IN.js": [733, 7, 625],
        "./games/th-TH": [45875, 7, 3515],
        "./games/th-TH.js": [45875, 7, 3515],
        "./games/tl-PH": [96531, 7, 3187],
        "./games/tl-PH.js": [96531, 7, 3187],
        "./games/tr-TR": [50963, 7, 55],
        "./games/tr-TR.js": [50963, 7, 55],
        "./games/ur-PK": [19331, 7, 855],
        "./games/ur-PK.js": [19331, 7, 855],
        "./games/vi-VN": [21520, 7, 5466],
        "./games/vi-VN.js": [21520, 7, 5466],
        "./games/zh-CN": [38388, 7, 4094],
        "./games/zh-CN.js": [38388, 7, 4094],
        "./games/zh-TW": [68580, 7, 8226],
        "./games/zh-TW.js": [68580, 7, 8226],
        "./utils/otherInfo": [74376, 9, 4562],
        "./utils/otherInfo.js": [74376, 9, 4562],
      };
      function n(e) {
        if (!r.o(a, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          n = t[0];
        return r.e(t[2]).then(() => r.t(n, 16 | t[1]));
      }
      (n.keys = () => Object.keys(a)), (n.id = 72983), (e.exports = n);
    },
    73093: (e, t, r) => {
      "use strict";
      var a = r(94459);
      e.exports = function (e) {
        return a(e) || 0 === e ? e : e < 0 ? -1 : 1;
      };
    },
    73126: (e, t, r) => {
      "use strict";
      var a = r(66743),
        n = r(69675),
        o = r(10076),
        _ = r(13144);
      e.exports = function (e) {
        if (e.length < 1 || "function" != typeof e[0])
          throw new n("a function is required");
        return _(a, o, e);
      };
    },
    73738: (e) => {
      function t(r) {
        return (
          (e.exports = t =
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
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t(r)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    74462: (e) => {
      "use strict";
      var t = function () {
          return "string" == typeof function () {}.name;
        },
        r = Object.getOwnPropertyDescriptor;
      if (r)
        try {
          r([], "length");
        } catch (e) {
          r = null;
        }
      t.functionsHaveConfigurableNames = function () {
        if (!t() || !r) return !1;
        var e = r(function () {}, "name");
        return !!e && !!e.configurable;
      };
      var a = Function.prototype.bind;
      (t.boundFunctionsHaveNames = function () {
        return (
          t() && "function" == typeof a && "" !== function () {}.bind().name
        );
      }),
        (e.exports = t);
    },
    74478: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.GET_VIP_TYPE_SUCCESS =
          t.GET_VIP_TYPE_REQUEST =
          t.GET_VIP_TYPE_FAILURE =
          t.GET_DISPLAY_SETTING_SUCCESS =
          t.GET_DISPLAY_SETTING_REQUEST =
          t.GET_DISPLAY_SETTING_FAILURE =
            void 0),
        (t.GET_DISPLAY_SETTING_REQUEST =
          "settings/GET_DISPLAY_SETTING_REQUEST"),
        (t.GET_DISPLAY_SETTING_SUCCESS =
          "settings/GET_DISPLAY_SETTING_SUCCESS"),
        (t.GET_DISPLAY_SETTING_FAILURE =
          "settings/GET_DISPLAY_SETTING_FAILURE"),
        (t.GET_VIP_TYPE_REQUEST = "settings/GET_VIP_TYPE_REQUEST"),
        (t.GET_VIP_TYPE_SUCCESS = "settings/GET_VIP_TYPE_SUCCESS"),
        (t.GET_VIP_TYPE_FAILURE = "settings/GET_VIP_TYPE_FAILURE");
    },
    74848: (e, t, r) => {
      "use strict";
      e.exports = r(21020);
    },
    75795: (e, t, r) => {
      "use strict";
      var a = r(6549);
      if (a)
        try {
          a([], "length");
        } catch (e) {
          a = null;
        }
      e.exports = a;
    },
    75880: (e) => {
      "use strict";
      e.exports = Math.pow;
    },
    76099: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = r(24898),
        o = a(r(94188)),
        _ = r(55594);
      const { pixel: E } = o.default.brand;
      let i = "";
      try {
        i = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/pixel.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = async () => {
        let e = (0, _.getURLParams)("pix") || (0, _.getDomainId)(i) || E;
        const t = await (0, n.getPixelS2SSetting)({
          pix: e,
        });
        if ((t && (e = t), e))
          if (((e = `${e}`.trim()), window.pi)) window.fbq("init", e);
          else {
            window.pi = e;
            const t = document.createElement("script"),
              r = `\n        !(function (f, b, e, v, n, t, s) {\n          if (f.fbq) return;\n          n = f.fbq = function () {\n            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);\n          };\n          if (!f._fbq) f._fbq = n;\n          n.push = n;\n          n.loaded = !0;\n          n.version = '2.0';\n          n.queue = [];\n          t = b.createElement(e);\n          t.async = !0;\n          t.src = v;\n          s = b.getElementsByTagName(e)[0];\n          s.parentNode.insertBefore(t, s);\n        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');\n        fbq('init', '${e}');\n        fbq('track', 'PageView');`;
            t.appendChild(document.createTextNode(r)),
              document.head.appendChild(t);
          }
      };
    },
    76237: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { roi: _ } = n.default.brand;
      let E = "";
      try {
        E = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/roi.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      t.default = () => {
        if ((0, o.getDomainId)(E) || _) {
          const e = document.createElement("script");
          (e.src = "https://roibest-report-sdk.qiliangjia.com/index.js"),
            (e.onload = () => {
              window.ROIBestReportSdk && window.ROIBestReportSdk.initSdk();
            }),
            document.body.appendChild(e);
        }
      };
    },
    76308: (e, t, r) => {
      "use strict";
      var a = r(98311),
        n = r(30305);
      e.exports = function () {
        return (
          a(),
          "function" == typeof Promise.prototype.finally
            ? Promise.prototype.finally
            : n
        );
      };
    },
    79173: (e, t, r) => {
      "use strict";
      var a = r(69675),
        n = r(55701),
        o = r(52997);
      e.exports = function (e) {
        if (void 0 !== e && !n(e))
          throw new a("Assertion failed: `Desc` must be a Property Descriptor");
        return o(e);
      };
    },
    79290: (e) => {
      "use strict";
      e.exports = RangeError;
    },
    79538: (e) => {
      "use strict";
      e.exports = ReferenceError;
    },
    79612: (e) => {
      "use strict";
      e.exports = Object;
    },
    79801: (e, t, r) => {
      "use strict";
      var a = r(61376)("%Reflect.construct%", !0),
        n = r(58780);
      try {
        n({}, "", {
          "[[Get]]": function () {},
        });
      } catch (e) {
        n = null;
      }
      if (n && a) {
        var o = {},
          _ = {};
        n(_, "length", {
          "[[Get]]": function () {
            throw o;
          },
          "[[Enumerable]]": !0,
        }),
          (e.exports = function (e) {
            try {
              a(e, _);
            } catch (e) {
              return e === o;
            }
          });
      } else
        e.exports = function (e) {
          return "function" == typeof e && !!e.prototype;
        };
    },
    80125: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.RESET_DEPOSIT_ID =
          t.RESET_COLLECTIONS =
          t.ON_PERSONAL_REPORT_REDIRECT =
          t.GET_TRANSFER_HISTORY_REQUEST_SUCCESS =
          t.GET_TRANSFER_HISTORY_REQUEST_FAILURE =
          t.GET_TRANSFER_HISTORY_REQUEST =
          t.GET_REBATE_HISTORY_REQUEST_SUCCESS =
          t.GET_REBATE_HISTORY_REQUEST_FAILURE =
          t.GET_REBATE_HISTORY_REQUEST =
          t.GET_PROMO_HISTORY_REQUEST_SUCCESS =
          t.GET_PROMO_HISTORY_REQUEST_FAILURE =
          t.GET_PROMO_HISTORY_REQUEST =
          t.GET_PERSONAL_REPORT_SUCCESS =
          t.GET_PERSONAL_REPORT_REQUEST =
          t.GET_PERSONAL_REPORT_FAILURE =
          t.GET_PAYMENT_INFO_TEMPLATE_SUCCESS =
          t.GET_PAYMENT_INFO_TEMPLATE_REQUEST =
          t.GET_PAYMENT_INFO_TEMPLATE_FAILURE =
          t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_SUCCESS =
          t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_FAILURE =
          t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST =
          t.GET_FINAN_HISTORY_REQUEST_SUCCESS =
          t.GET_FINAN_HISTORY_REQUEST_FAILURE =
          t.GET_FINAN_HISTORY_REQUEST =
          t.GET_DEPOSIT_HISTORY_REQUEST_SUCCESS =
          t.GET_DEPOSIT_HISTORY_REQUEST_FAILURE =
          t.GET_DEPOSIT_HISTORY_REQUEST =
          t.GET_ALL_FINAN_HISTORY_REQUEST_SUCCESS =
          t.GET_ALL_FINAN_HISTORY_REQUEST_FAILURE =
          t.GET_ALL_FINAN_HISTORY_REQUEST =
          t.GET_AFFILIATE_HISTORY_REQUEST_SUCCESS =
          t.GET_AFFILIATE_HISTORY_REQUEST_FAILURE =
          t.GET_AFFILIATE_HISTORY_REQUEST =
          t.DELETE_PERSONAL_REPORT_REDIRECT =
          t.AJAX_UPDATE_CORP_CRYPTO_DEPOSIT_ORDER_INFO_FAILURE =
          t.AJAX_PUT_EDIT_CRYPTO_ACCOUNT_FAILURE =
          t.AJAX_PUT_EDIT_BANK_CARD_FAILURE =
          t.AJAX_PUT_CANCEL_DEPOSIT_SUCCESS =
          t.AJAX_PUT_CANCEL_DEPOSIT_REQUEST =
          t.AJAX_PUT_CANCEL_DEPOSIT_FAILURE =
          t.AJAX_POST_TRANSFER_SUCCESS =
          t.AJAX_POST_TRANSFER_REQUEST =
          t.AJAX_POST_TRANSFER_FAILURE =
          t.AJAX_POST_DEPOSIT_UUID_SUCCESS =
          t.AJAX_POST_DEPOSIT_UUID_REQUEST =
          t.AJAX_POST_DEPOSIT_UUID_FAILURE =
          t.AJAX_POST_DEPOSIT_POSTSCRIPT_SUCCESS =
          t.AJAX_POST_DEPOSIT_POSTSCRIPT_REQUEST =
          t.AJAX_POST_DEPOSIT_POSTSCRIPT_FAILURE =
          t.AJAX_POST_ADD_DEPOSIT_SUCCESS =
          t.AJAX_POST_ADD_DEPOSIT_REQUEST =
          t.AJAX_POST_ADD_DEPOSIT_FAILURE =
          t.AJAX_POST_ADD_CRYPTO_ACCOUNT_FAILURE =
          t.AJAX_POST_ADD_CORP_CRYPTO_DEPOSIT_FAILURE =
          t.AJAX_POST_ADD_BANK_CARD_FAILURE =
          t.AJAX_GET_TRANSFERS_LIST_SUCCESS =
          t.AJAX_GET_TRANSFERS_LIST_REQUEST =
          t.AJAX_GET_TRANSFERS_LIST_FAILURE =
          t.AJAX_GET_DEPOSIT_LIST_SUCCESS =
          t.AJAX_GET_DEPOSIT_LIST_REQUEST =
          t.AJAX_GET_DEPOSIT_LIST_FAILURE =
          t.AJAX_GET_DEPOSIT_BY_ID_SUCCESS =
          t.AJAX_GET_DEPOSIT_BY_ID_REQUEST =
          t.AJAX_GET_DEPOSIT_BY_ID_FAILURE =
          t.AJAX_GET_DEPOSIT_APPLY_INFO_SUCCESS =
          t.AJAX_GET_DEPOSIT_APPLY_INFO_REQUEST =
          t.AJAX_GET_DEPOSIT_APPLY_INFO_FAILURE =
          t.AJAX_GET_CRYPTO_ACCOUNT_INFO_FAIL =
          t.AJAX_GET_COLLECTIONS_SUCCESS =
          t.AJAX_GET_COLLECTIONS_REQUEST =
          t.AJAX_GET_COLLECTIONS_FAILURE =
          t.AJAX_GET_BANK_CARD_LIST_SUCCESS =
          t.AJAX_GET_BANK_CARD_LIST_REQUEST =
          t.AJAX_GET_BANK_CARD_LIST_FAILURE =
          t.AJAX_DELETE_BANK_CARD_FAILURE =
            void 0),
        (t.AJAX_GET_BANK_CARD_LIST_REQUEST =
          "ajax/AJAX_GET_BANK_CARD_LIST_REQUEST"),
        (t.AJAX_GET_BANK_CARD_LIST_SUCCESS =
          "ajax/AJAX_GET_BANK_CARD_LIST_SUCCESS"),
        (t.AJAX_GET_BANK_CARD_LIST_FAILURE =
          "ajax/AJAX_GET_BANK_CARD_LIST_FAILURE"),
        (t.AJAX_POST_ADD_BANK_CARD_FAILURE =
          "ajax/AJAX_POST_ADD_BANK_CARD_FAILURE"),
        (t.AJAX_PUT_EDIT_BANK_CARD_FAILURE =
          "ajax/AJAX_PUT_EDIT_BANK_CARD_FAILURE"),
        (t.AJAX_DELETE_BANK_CARD_FAILURE =
          "ajax/AJAX_DELETE_BANK_CARD_FAILURE"),
        (t.AJAX_POST_ADD_CRYPTO_ACCOUNT_FAILURE =
          "ajax/AJAX_POST_ADD_CRYPTO_ACCOUNT_FAILURE"),
        (t.AJAX_PUT_EDIT_CRYPTO_ACCOUNT_FAILURE =
          "ajax/AJAX_PUT_EDIT_CRYPTO_ACCOUNT_FAILURE"),
        (t.AJAX_GET_CRYPTO_ACCOUNT_INFO_FAIL =
          "ajax/AJAX_GET_CRYPTO_ACCOUNT_INFO_FAIL"),
        (t.AJAX_GET_COLLECTIONS_REQUEST = "ajax/AJAX_GET_COLLECTIONS_REQUEST"),
        (t.AJAX_GET_COLLECTIONS_SUCCESS = "ajax/AJAX_GET_COLLECTIONS_SUCCESS"),
        (t.AJAX_GET_COLLECTIONS_FAILURE = "ajax/AJAX_GET_COLLECTIONS_FAILURE"),
        (t.AJAX_POST_DEPOSIT_UUID_REQUEST =
          "ajax/AJAX_POST_DEPOSIT_UUID_REQUEST"),
        (t.AJAX_POST_DEPOSIT_UUID_SUCCESS =
          "ajax/AJAX_POST_DEPOSIT_UUID_SUCCESS"),
        (t.AJAX_POST_DEPOSIT_UUID_FAILURE =
          "ajax/AJAX_POST_DEPOSIT_UUID_FAILURE"),
        (t.AJAX_GET_DEPOSIT_LIST_REQUEST =
          "ajax/AJAX_GET_DEPOSIT_LIST_REQUEST"),
        (t.AJAX_GET_DEPOSIT_LIST_SUCCESS =
          "ajax/AJAX_GET_DEPOSIT_LIST_SUCCESS"),
        (t.AJAX_GET_DEPOSIT_LIST_FAILURE =
          "ajax/AJAX_GET_DEPOSIT_LIST_FAILURE"),
        (t.AJAX_POST_ADD_DEPOSIT_REQUEST =
          "ajax/AJAX_POST_ADD_DEPOSIT_REQUEST"),
        (t.AJAX_POST_ADD_DEPOSIT_SUCCESS =
          "ajax/AJAX_POST_ADD_DEPOSIT_SUCCESS"),
        (t.AJAX_POST_ADD_DEPOSIT_FAILURE =
          "ajax/AJAX_POST_ADD_DEPOSIT_FAILURE"),
        (t.AJAX_POST_ADD_CORP_CRYPTO_DEPOSIT_FAILURE =
          "ajax/AJAX_POST_ADD_CORP_CRYPTO_DEPOSIT_FAILURE"),
        (t.AJAX_UPDATE_CORP_CRYPTO_DEPOSIT_ORDER_INFO_FAILURE =
          "ajax/AJAX_UPDATE_CORP_CRYPTO_DEPOSIT_ORDER_INFO_FAILURE"),
        (t.AJAX_GET_DEPOSIT_BY_ID_REQUEST =
          "ajax/AJAX_GET_DEPOSIT_BY_ID_REQUEST"),
        (t.AJAX_GET_DEPOSIT_BY_ID_SUCCESS =
          "ajax/AJAX_GET_DEPOSIT_BY_ID_SUCCESS"),
        (t.AJAX_GET_DEPOSIT_BY_ID_FAILURE =
          "ajax/AJAX_GET_DEPOSIT_BY_ID_FAILURE"),
        (t.AJAX_GET_TRANSFERS_LIST_REQUEST =
          "ajax/AJAX_GET_TRANSFERS_LIST_REQUEST"),
        (t.AJAX_GET_TRANSFERS_LIST_SUCCESS =
          "ajax/AJAX_GET_TRANSFERS_LIST_SUCCESS"),
        (t.AJAX_GET_TRANSFERS_LIST_FAILURE =
          "ajax/AJAX_GET_TRANSFERS_LIST_FAILURE"),
        (t.AJAX_POST_TRANSFER_REQUEST = "ajax/AJAX_POST_TRANSFER_REQUEST"),
        (t.AJAX_POST_TRANSFER_SUCCESS = "ajax/AJAX_POST_TRANSFER_SUCCESS"),
        (t.AJAX_POST_TRANSFER_FAILURE = "ajax/AJAX_POST_TRANSFER_FAILURE"),
        (t.GET_ALL_FINAN_HISTORY_REQUEST =
          "xpayments/GET_ALL_FINAN_HISTORY_REQUEST"),
        (t.GET_ALL_FINAN_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_ALL_FINAN_HISTORY_REQUEST_SUCCESS"),
        (t.GET_ALL_FINAN_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_ALL_FINAN_HISTORY_REQUEST_FAILURE"),
        (t.GET_FINAN_HISTORY_REQUEST = "xpayments/GET_FINAN_HISTORY_REQUEST"),
        (t.GET_FINAN_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_FINAN_HISTORY_REQUEST_SUCCESS"),
        (t.GET_FINAN_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_FINAN_HISTORY_REQUEST_FAILURE"),
        (t.GET_DEPOSIT_HISTORY_REQUEST =
          "xpayments/GET_DEPOSIT_HISTORY_REQUEST"),
        (t.GET_DEPOSIT_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_DEPOSIT_HISTORY_REQUEST_SUCCESS"),
        (t.GET_DEPOSIT_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_DEPOSIT_HISTORY_REQUEST_FAILURE"),
        (t.GET_PROMO_HISTORY_REQUEST = "xpayments/GET_PROMO_HISTORY_REQUEST"),
        (t.GET_PROMO_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_PROMO_HISTORY_REQUEST_SUCCESS"),
        (t.GET_PROMO_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_PROMO_HISTORY_REQUEST_FAILURE"),
        (t.GET_REBATE_HISTORY_REQUEST = "xpayments/GET_REBATE_HISTORY_REQUEST"),
        (t.GET_REBATE_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_REBATE_HISTORY_REQUEST_SUCCESS"),
        (t.GET_REBATE_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_REBATE_HISTORY_REQUEST_FAILURE"),
        (t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST =
          "xpayments/GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST"),
        (t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_SUCCESS"),
        (t.GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_MANUAL_ADJUSTMENT_HISTORY_REQUEST_FAILURE"),
        (t.GET_TRANSFER_HISTORY_REQUEST =
          "xpayments/GET_TRANSFER_HISTORY_REQUEST"),
        (t.GET_TRANSFER_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_TRANSFER_HISTORY_REQUEST_SUCCESS"),
        (t.GET_TRANSFER_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_TRANSFER_HISTORY_REQUEST_FAILURE"),
        (t.GET_AFFILIATE_HISTORY_REQUEST =
          "xpayments/GET_AFFILIATE_HISTORY_REQUEST"),
        (t.GET_AFFILIATE_HISTORY_REQUEST_SUCCESS =
          "xpayments/GET_AFFILIATE_HISTORY_REQUEST_SUCCESS"),
        (t.GET_AFFILIATE_HISTORY_REQUEST_FAILURE =
          "xpayments/GET_AFFILIATE_HISTORY_REQUEST_FAILURE"),
        (t.AJAX_GET_DEPOSIT_APPLY_INFO_REQUEST =
          "ajax/AJAX_GET_DEPOSIT_APPLY_INFO_REQUEST"),
        (t.AJAX_GET_DEPOSIT_APPLY_INFO_SUCCESS =
          "ajax/AJAX_GET_DEPOSIT_APPLY_INFO_SUCCESS"),
        (t.AJAX_GET_DEPOSIT_APPLY_INFO_FAILURE =
          "ajax/AJAX_GET_DEPOSIT_APPLY_INFO_FAILURE"),
        (t.AJAX_PUT_CANCEL_DEPOSIT_REQUEST =
          "ajax/AJAX_PUT_CANCEL_DEPOSIT_REQUEST"),
        (t.AJAX_PUT_CANCEL_DEPOSIT_SUCCESS =
          "ajax/AJAX_PUT_CANCEL_DEPOSIT_SUCCESS"),
        (t.AJAX_PUT_CANCEL_DEPOSIT_FAILURE =
          "ajax/AJAX_PUT_CANCEL_DEPOSIT_FAILURE"),
        (t.AJAX_POST_DEPOSIT_POSTSCRIPT_REQUEST =
          "ajax/AJAX_POST_DEPOSIT_POSTSCRIPT_REQUEST"),
        (t.AJAX_POST_DEPOSIT_POSTSCRIPT_SUCCESS =
          "ajax/AJAX_POST_DEPOSIT_POSTSCRIPT_SUCCESS"),
        (t.AJAX_POST_DEPOSIT_POSTSCRIPT_FAILURE =
          "ajax/AJAX_POST_DEPOSIT_POSTSCRIPT_FAILURE"),
        (t.GET_PERSONAL_REPORT_REQUEST =
          "xpayments/GET_PERSONAL_REPORT_REQUEST"),
        (t.GET_PERSONAL_REPORT_SUCCESS =
          "xpayments/GET_PERSONAL_REPORT_SUCCESS"),
        (t.GET_PERSONAL_REPORT_FAILURE =
          "xpayments/GET_PERSONAL_REPORT_FAILURE"),
        (t.ON_PERSONAL_REPORT_REDIRECT =
          "xpayments/ON_PERSONAL_REPORT_REDIRECT"),
        (t.DELETE_PERSONAL_REPORT_REDIRECT =
          "xpayments/DELETE_PERSONAL_REPORT_REDIRECT"),
        (t.RESET_DEPOSIT_ID = "xpayments/RESET_DEPOSIT_ID"),
        (t.RESET_COLLECTIONS = "xpayments/RESET_COLLECTIONS"),
        (t.GET_PAYMENT_INFO_TEMPLATE_REQUEST =
          "xpayments/GET_PAYMENT_INFO_TEMPLATE_REQUEST"),
        (t.GET_PAYMENT_INFO_TEMPLATE_SUCCESS =
          "xpayments/GET_PAYMENT_INFO_TEMPLATE_SUCCESS"),
        (t.GET_PAYMENT_INFO_TEMPLATE_FAILURE =
          "xpayments/GET_PAYMENT_INFO_TEMPLATE_FAILURE");
    },
    81458: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(9404)),
        o = a(r(27179)),
        _ = a(r(94188)),
        E = r(56291),
        i = r(8087),
        s = r(26898),
        T = a(r(36188)),
        A = r(96351),
        S = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(62144));
      const l = {
        isLoading: !1,
        getUserProfileFirstFetch: !1,
        getProfileLoading: !1,
        isLoadingCaptcha: !1,
        player: {
          missionVisibleByRisk: !0,
        },
        walletMap: n.default.Map(),
        logined: !!o.default.get("token"),
        isCaptchaFailure: Date.now(),
        settle: !0,
        isVipBlackList: !1,
        profileSettleSuccess: !1,
        loginSuccess: !1,
        modifyPasswordSuccess: !1,
        triggerResetPasswordSuc: !1,
        resetPasswordSuccess: !1,
        forgetAccountSuccess: !1,
        chkResetPwTokenSuccess: !1,
        chkResetPwTokenFail: !1,
        signupSuccess: !1,
        activateSuccess: !1,
        modifyLoginPasswordSuccess: !1,
        modifyWithdrawalPasswordSuccess: !1,
        captcha: null,
        affiliateFailed: !1,
        affiliateid: (0, E.getCookie)("affiliate"),
        affiliateSuccess: !1,
        affiliateidLoading: !1,
        playersLookup: n.default.List(),
        fingerprint2: "",
        regLimitPromoExpireTime: null,
        shouldUpdateRegLimitPromo: !1,
        registrationSetting: n.default.Map({
          regsettingmap: n.default.Map(),
        }),
        playerInfoReady: n.default.fromJS({
          ...Object.keys(i.playerInfoReadyEnum).reduce(
            (e, t) => ((e[i.playerInfoReadyEnum[t]] = {}), e),
            {}
          ),
        }),
        modifyProfile: !1,
        modifyProfileSuc: !1,
        modifyProfileErr: !1,
        logoutSuccess: !1,
        resendSignupLimit: !1,
        tokenResending: !1,
        tokenResent: !1,
        invalidToken: !1,
        remaintime: void 0,
        email: "",
        mobile: "",
        sendingForgetUsername: !1,
        sentForgetUsername: !1,
        sentForgetUsernameFailed: !1,
        bankcardSetting: null,
        mobileStatus: {
          canVerify: !0,
        },
        isPutProfileRequiredInfoSuc: !1,
        triggerCalendarOnHome: !1,
        showCalendar: !1,
        newVipPrivileges: n.default.Map(),
        loginSetting: n.default.Map(),
        thirdPartyUserInfos: [],
        isVerified: !1,
      };
      t.default = function () {
        var e;
        let t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : l,
          r = arguments.length > 1 ? arguments[1] : void 0;
        switch (r.type) {
          case S.AJAX_GET_USER_PROFILE_REQUEST:
            return {
              ...t,
              isLoading: !0,
              getProfileLoading: !0,
            };
          case S.AJAX_GET_USER_PROFILE_SUCCESS: {
            const { wallets: e, player: a, thirdPartyUserInfos: _ } = r.payload;
            return (
              o.default.set("currency", a.currency),
              o.default.set("playerid", a.playerid),
              o.default.set("firstdeposit", a.firstdeposit),
              A.tawk.loaded().then(() => {
                A.tawk.setUserAttribute({
                  name: a.playerid,
                  email: a.email,
                });
              }),
              {
                ...t,
                getUserProfileFirstFetch: !0,
                isLoading: !1,
                getProfileLoading: !1,
                player: a,
                settle: a.settle,
                isVipBlackList: null === a.newVipLevel,
                walletMap: t.walletMap.set(e[0].wallet, n.default.fromJS(e[0])),
                thirdPartyUserInfos: _,
                regLimitPromoExpireTime:
                  a.regPromoReqTimeLimit && !a.firstdeposit
                    ? a.createdate + 60 * a.regPromoReqTimeLimit * 1e3
                    : null,
              }
            );
          }
          case S.AJAX_GET_USER_PROFILE_FAILURE:
            return {
              ...t,
              isLoading: !1,
              getProfileLoading: !1,
            };
          case S.AJAX_GET_USER_SUB_WALLET_REQUEST:
            return {
              ...t,
              isLoading: !0,
            };
          case S.AJAX_GET_USER_SUB_WALLET_SUCCESS:
            return (
              "MAIN" === r.payload.wallet && (r.payload.wallet = "SUB_MAIN"),
              {
                ...t,
                isLoading: !1,
                walletMap: t.walletMap.set(
                  r.payload.wallet,
                  n.default.fromJS(r.payload)
                ),
              }
            );
          case S.AJAX_GET_USER_SUB_WALLET_FAILURE: {
            const e = r.subWalletName,
              a = {
                available: 0,
                balance: 0,
                bonus: 0,
                pending: 0,
                error: !0,
                wallet: e,
              };
            return {
              ...t,
              isLoading: !1,
              walletMap: t.walletMap.set(e, n.default.fromJS(a)),
            };
          }
          case S.AJAX_POST_LOGIN_REQUEST:
            return {
              ...t,
              isLoading: !0,
              loginSuccess: !1,
              logined: !1,
            };
          case S.AJAX_POST_LOGIN_SUCCESS: {
            const {
              token: e,
              needactivation: a,
              verifytype: i,
              settle: A,
              email: S,
              mobile: l,
              remaintime: u,
              showCalendar: c,
              newVipPrivileges: R,
            } = r.payload;
            s.startEvent.afterLogin(r.playerid),
              window.LiveChatWidget &&
                (window.LiveChatWidget.call("set_customer_name", r.playerid),
                window.LiveChatWidget.call(
                  "set_customer_email",
                  `${r.playerid}@${_.default.brand.name}`
                )),
              0 !== t.loginSetting.get("loginRememberDays") &&
                r.isRegularLogin &&
                (r.rawPassword
                  ? E.loginInfoCookie.set(
                      JSON.stringify({
                        playerId: r.playerid,
                        playerPassword: r.rawPassword,
                      }),
                      24 * t.loginSetting.get("loginRememberDays") * 60 * 60
                    )
                  : E.loginInfoCookie.remove());
            try {
              T.default.loginUser(r.playerid);
            } catch (e) {}
            return a
              ? {
                  ...t,
                  isLoading: !1,
                  loginSuccess: !0,
                  logined: !1,
                  settle: A,
                  needactivation: a,
                  verifytype: i,
                  email: S,
                  mobile: l,
                  remaintime: u,
                  playerid: r.playerid,
                }
              : (o.default.set("token", e),
                o.default.set("playerid", r.playerid),
                {
                  ...t,
                  isLoading: !1,
                  loginSuccess: !0,
                  logined: !0,
                  settle: A,
                  needactivation: a,
                  verifytype: i,
                  email: S,
                  mobile: l,
                  playerid: r.playerid,
                  showCalendar: c,
                  newVipPrivileges: n.default.fromJS(R),
                });
          }
          case S.AJAX_POST_LOGIN_FAILURE: {
            const e = {
              ...t,
              isLoading: !1,
              loginSuccess: !1,
              logined: !1,
            };
            return (
              1 === r.error.payload.code && (e.isCaptchaFailure = Date.now()), e
            );
          }
          case S.AJAX_PUT_TRIGGER_RESET_PASSWORD_REQUEST:
            return {
              ...t,
              isLoading: !0,
              triggerResetPasswordSuc: !1,
            };
          case S.AJAX_PUT_TRIGGER_RESET_PASSWORD_SUCCESS: {
            const { email: e, mobile: a, playerid: n } = r,
              { remaintime: o, verifytype: _ } = r.payload;
            return {
              ...t,
              isLoading: !1,
              email: e,
              mobile: a,
              playerid: n,
              remaintime: o,
              verifytype: _,
              triggerResetPasswordSuc: !0,
            };
          }
          case S.AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.CLEAR_RESET_PASSWORD_STATE:
            return {
              ...t,
              triggerResetPasswordSuc: !1,
              email: "",
              mobile: "",
              playerid: "",
            };
          case S.AJAX_PUT_FORGET_ACCOUNT_REQUEST:
            return {
              ...t,
              isLoading: !0,
              forgetAccountSuccess: !1,
            };
          case S.AJAX_PUT_FORGET_ACCOUNT_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              forgetAccountSuccess: !0,
            };
          case S.AJAX_PUT_FORGET_ACCOUNT_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.AJAX_PUT_MODIFY_PROFILE_REQUEST:
            return {
              ...t,
              modifyProfile: !0,
              modifyProfileSuc: !1,
              modifyProfileErr: !1,
            };
          case S.AJAX_PUT_MODIFY_PROFILE_SUCCESS:
            return {
              ...t,
              modifyProfile: !1,
              modifyProfileSuc: !0,
              modifyProfileErr: !1,
            };
          case S.AJAX_PUT_MODIFY_PROFILE_FAILURE:
            return {
              ...t,
              modifyProfile: !1,
              modifyProfileSuc: !1,
              modifyProfileErr: !0,
            };
          case S.PUT_PROFILE_PICTURE_SUCCESS:
            return {
              ...t,
              player: {
                ...t.player,
                pictureUrl:
                  null === (e = r.customData) || void 0 === e
                    ? void 0
                    : e.pictureUrl,
              },
            };
          case S.AJAX_GET_CHECK_RESET_PW_TOKEN_REQUEST:
            return {
              ...t,
              isLoading: !0,
              chkResetPwTokenFail: !1,
            };
          case S.AJAX_GET_CHECK_RESET_PW_TOKEN_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              chkResetPwTokenSuccess: !0,
            };
          case S.AJAX_GET_CHECK_RESET_PW_TOKEN_FAILURE:
            return {
              ...t,
              isLoading: !1,
              chkResetPwTokenFail: !0,
            };
          case S.AJAX_PUT_RESET_PASSWORD_REQUEST:
            return {
              ...t,
              isLoading: !0,
              resetPasswordSuccess: !1,
            };
          case S.AJAX_PUT_RESET_PASSWORD_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              resetPasswordSuccess: !0,
            };
          case S.AJAX_PUT_RESET_PASSWORD_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.AJAX_PUT_MODIFY_LOGIN_PASSWORD_REQUEST:
            return {
              ...t,
              modifyLoginPasswordSuccess: !1,
              modifyWithdrawalPasswordSuccess: !1,
            };
          case S.AJAX_PUT_MODIFY_LOGIN_PASSWORD_SUCCESS:
            return {
              ...t,
              modifyLoginPasswordSuccess: !0,
            };
          case S.AJAX_PUT_MODIFY_LOGIN_PASSWORD_FAILURE:
            return {
              ...t,
            };
          case S.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_REQUEST:
            return {
              ...t,
              modifyWithdrawalPasswordSuccess: !1,
              modifyLoginPasswordSuccess: !1,
            };
          case S.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_SUCCESS:
            return {
              ...t,
              modifyWithdrawalPasswordSuccess: !0,
            };
          case S.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_FAILURE:
            return {
              ...t,
            };
          case S.POST_REGISTER_REQUEST:
            return {
              ...t,
              isLoading: !0,
              signupSuccess: !1,
            };
          case S.POST_REGISTER_SUCCESS: {
            const e = o.default.get("pix-s2s");
            return (
              e && (delete e.path, delete e.uagt, o.default.set("pix-s2s", e)),
              E.ulagentCookie.remove(),
              E.agentCookie.remove(),
              (0, E.removeCookie)("affiliate"),
              r.payload.needactivation
                ? {
                    ...t,
                    isLoading: !1,
                    affiliateid: "",
                    signupSuccess: !0,
                    activateSuccess: !1,
                    remaintime: r.payload.remaintime,
                  }
                : (o.default.set("token", r.payload.token),
                  o.default.set("playerid", r.playerid),
                  {
                    ...t,
                    isLoading: !1,
                    affiliateid: "",
                    signupSuccess: !0,
                    logined: !0,
                    loginSuccess: !0,
                    settle: r.payload.settle,
                    showCalendar: r.payload.showCalendar,
                    newVipPrivileges: n.default.fromJS(
                      r.payload.newVipPrivileges
                    ),
                  })
            );
          }
          case S.POST_REGISTER_FAILURE: {
            const { code: e } = r.error.payload;
            return {
              ...t,
              isLoading: !1,
              registerErrorCode: e,
            };
          }
          case S.POST_LOGOUT_REQUEST:
            return {
              ...t,
              isLoading: !0,
              logoutSuccess: !1,
              unauthorized: !1,
            };
          case S.POST_LOGOUT_SUCCESS:
            return (
              [
                "token",
                "playerid",
                "withdrawalamt",
                "firstdeposit",
                "access_token",
              ].forEach((e) => o.default.remove(e)),
              window.accountWindowInstance &&
                window.accountWindowInstance.close(),
              {
                ...t,
                isLoading: !1,
                logined: !1,
                logoutSuccess: !0,
                unauthorized: !!r.unauthorized,
              }
            );
          case S.POST_LOGOUT_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.AJAX_GET_CHECK_ACTIVATION_TOKEN_REQUEST:
            return {
              ...t,
              isLoading: !0,
              invalidToken: !1,
            };
          case S.AJAX_GET_CHECK_ACTIVATION_TOKEN_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              invalidToken: !1,
            };
          case S.AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE:
            return {
              ...t,
              isLoading: !1,
              invalidToken: !0,
            };
          case S.AJAX_PUT_ACTIVATION_ACCOUNT_REQUEST:
            return {
              ...t,
              isLoading: !0,
              activateSuccess: !1,
            };
          case S.AJAX_PUT_ACTIVATION_ACCOUNT_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              activateSuccess: !0,
            };
          case S.AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.AJAX_PUT_FORGET_USERNAME:
            return {
              ...t,
              sendingForgetUsername: !0,
              sentForgetUsername: !1,
              sentForgetUsernameFailed: !1,
            };
          case S.AJAX_PUT_FORGET_USERNAME_SUCCESS:
            return {
              ...t,
              email: r.email,
              mobile: r.mobile,
              sendingForgetUsername: !1,
              sentForgetUsername: !0,
            };
          case S.AJAX_PUT_FORGET_USERNAME_FAILURE:
            return {
              ...t,
              sendingForgetUsername: !1,
              sentForgetUsernameFailed: !0,
            };
          case S.CLOSE_SENT_USERNAME_MODAL:
            return {
              ...t,
              sentForgetUsername: !1,
            };
          case S.GET_RANDOM_CAPTCHA_REQUEST:
            return {
              ...t,
              isLoadingCaptcha: !0,
              captcha: null,
            };
          case S.GET_RANDOM_CAPTCHA_SUCCESS:
            if (null != r && r.payload) {
              const { image: e, uuid: a } = r.payload || {};
              if (e && a)
                return {
                  ...t,
                  isLoadingCaptcha: !1,
                  captcha: {
                    image: e,
                    uuid: a,
                  },
                };
            }
            return {
              ...t,
            };
          case S.GET_RANDOM_CAPTCHA_FAILURE:
            return {
              ...t,
              isLoadingCaptcha: !1,
            };
          case S.UPDATE_TOKEN: {
            const { token: e } = r;
            return (
              o.default.set("token", e),
              {
                ...t,
              }
            );
          }
          case S.PUT_CHECK_AFFILIATE_REQUEST:
          case S.PUT_CHECK_AFFILIATE_WITH_ALERT_REQUEST:
            return {
              ...t,
              affiliateidLoading: !0,
              affiliateid: "",
              affiliateFailed: !1,
              affiliateSuccess: !1,
            };
          case S.PUT_CHECK_AFFILIATE_SUCCESS:
          case S.PUT_CHECK_AFFILIATE_WITH_ALERT_SUCCESS:
            return {
              ...t,
              affiliateidLoading: !1,
              affiliateid: r.affiliateid,
              affiliateFailed: !1,
              affiliateSuccess: !0,
            };
          case S.PUT_CHECK_AFFILIATE_FAILURE:
          case S.PUT_CHECK_AFFILIATE_WITH_ALERT_FAILURE:
            return (
              (0, E.removeCookie)("affiliate"),
              {
                ...t,
                affiliateidLoading: !1,
                affiliateid: "",
                affiliateFailed: !0,
                affiliateSuccess: !1,
              }
            );
          case S.CLEAR_PLAYERS_LOOKUP:
            return {
              ...t,
              playersLookup: l.playersLookup,
            };
          case S.GET_PLAYERS_LOOKUP_REQUEST:
            return {
              ...t,
              isLoading: !0,
            };
          case S.GET_PLAYERS_LOOKUP_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              playersLookup: n.default.fromJS(r.payload),
            };
          case S.GET_PLAYERS_LOOKUP_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.RESET_FORGET_SUCCESS:
            return {
              ...t,
              forgetAccountSuccess: !1,
              modifyPasswordSuccess: !1,
            };
          case S.CLICK_PROFILE_SETTLE_SUCCESS:
            return {
              ...t,
              settle: !0,
            };
          case S.AJAX_PUT_PROFILE_SETTLE_SUCCESS:
            return {
              ...t,
              profileSettleSuccess: !0,
            };
          case S.SAVE_FINGERPRINT2:
            return {
              ...t,
              fingerprint2: r.fingerprint,
            };
          case S.AJAX_GET_FAST_REGISTRATION_REQUEST:
            return {
              ...t,
              isLoading: !0,
              getRegSettingSuccess: !1,
              getRegSettingFailed: !1,
            };
          case S.AJAX_GET_FAST_REGISTRATION_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              registrationSetting: n.default.fromJS(r.payload),
              getRegSettingSuccess: !0,
              getRegSettingFailed: !1,
            };
          case S.AJAX_GET_FAST_REGISTRATION_FAILURE:
            return {
              ...t,
              isLoading: !1,
              getRegSettingSuccess: !1,
              getRegSettingFailed: !0,
            };
          case S.AJAX_GET_PLAYER_INFO_READY_REQUEST:
            return {
              ...t,
              isLoading: !0,
            };
          case S.AJAX_GET_PLAYER_INFO_READY_SUCCESS:
            return {
              ...t,
              isLoading: !1,
              playerInfoReady: n.default.fromJS(r.payload),
            };
          case S.AJAX_GET_PLAYER_INFO_READY_FAILURE:
            return {
              ...t,
              isLoading: !1,
            };
          case S.PUT_RESEND_ACT_TOKEN:
            return {
              ...t,
              tokenResending: !0,
              tokenResent: !1,
            };
          case S.PUT_RESEND_ACT_TOKEN_SUCCESS:
            return {
              ...t,
              tokenResending: !1,
              tokenResent: !0,
              remaintime: r.payload,
            };
          case S.PUT_RESEND_ACT_TOKEN_FAILURE: {
            const { code: e, msg: a } = r.error.payload;
            return {
              ...t,
              tokenResending: !1,
              resendSignupLimit: 6 === e,
              error: a,
            };
          }
          case S.RESET_RESENT_TOKEN:
            return {
              ...t,
              tokenResent: !1,
            };
          case S.AJAX_GET_BANK_CARD_SETTING_SUCCESS:
            return {
              ...t,
              bankcardSetting: n.default.fromJS(r.payload),
            };
          case S.GET_VERIFY_STATUS_SUCCESS:
            return {
              ...t,
              mobileStatus: r.payload,
            };
          case S.GET_VERIFY_STATUS_FAILURE:
            return {
              ...t,
              mobileStatus: {
                canVerify: !1,
              },
            };
          case S.SEND_VERIFY_CODE_SUCCESS:
            return {
              ...t,
              mobileStatus: {
                countdown: r.payload.countdown,
              },
            };
          case S.SEND_VERIFY_CODE_FAILURE: {
            const { code: e, replace: a } = r.error.payload,
              n = {
                canVerify: !1,
              };
            return (
              4 === e && ((n.canVerify = !0), (n.countdown = parseInt(a, 10))),
              {
                ...t,
                mobileStatus: n,
              }
            );
          }
          case S.VERIFY_MOBILE_REQUEST:
          case S.VERIFY_MOBILE_SUCCESS:
          case S.VERIFY_MOBILE_FAILURE:
            return {
              ...t,
              player: {
                ...t.player,
                hasverifiedmobile: r.type === S.VERIFY_MOBILE_SUCCESS,
              },
            };
          case S.AJAX_PUT_PROFILE_REQUIREDINFO_REQUEST:
            return {
              ...t,
              isPutProfileRequiredInfoSuc: !1,
            };
          case S.AJAX_PUT_PROFILE_REQUIREDINFO_SUCCESS:
            return {
              ...t,
              isPutProfileRequiredInfoSuc: !0,
            };
          case S.AJAX_PUT_PROFILE_REQUIREDINFO_FAILURE:
            return {
              ...t,
              isPutProfileRequiredInfoSuc: !1,
            };
          case S.SET_TRIGGER_CALENDAR_ON_HOME_ON:
            return {
              ...t,
              triggerCalendarOnHome: !0,
            };
          case S.SET_TRIGGER_CALENDAR_ON_HOME_OFF:
            return {
              ...t,
              triggerCalendarOnHome: !1,
            };
          case S.SET_SHOW_CALENDAR_ON:
            return {
              ...t,
              showCalendar: !0,
            };
          case S.SET_SHOW_CALENDAR_OFF:
            return {
              ...t,
              showCalendar: !1,
            };
          case S.SET_SHOW_UPGRADEBOUNS_MODAL_OFF:
            return {
              ...t,
              newVipPrivileges: null,
            };
          case S.GET_LOGIN_SETTING_SUC: {
            const e = ["account", "password", "captcha"].reduce(
              (e, t) => (
                (e[t] = r.payload.loginsettingmap[t] || {
                  apirequired: !0,
                  display: !0,
                  required: !0,
                }),
                e
              ),
              {}
            );
            return (
              0 === r.payload.loginRememberDays && E.loginInfoCookie.remove(),
              (r.payload.loginsettingmap = e),
              {
                ...t,
                loginSetting: n.default.fromJS(r.payload),
              }
            );
          }
          case S.GET_CAPTCHA_IMG_SUC:
            return {
              ...t,
              ...r.payload,
            };
          case S.RESET_MISSION_NOTI:
            return {
              ...t,
              player: {
                ...t.player,
                missionAvailable: !1,
              },
            };
          case S.RESET_USER_PROMOS_NOTI:
            return {
              ...t,
              player: {
                ...t.player,
                promoWaitClaim: !1,
              },
            };
          case S.RESET_ANYTIME_REBATE_NOTI:
            return {
              ...t,
              player: {
                ...t.player,
                anytimeRebateWaitClaim: !1,
              },
            };
          case S.RESET_NEW_VIP_REWARD_NOTI:
            return {
              ...t,
              player: {
                ...t.player,
                newVipRewardWaitClaim: !1,
              },
            };
          case S.RESET_RACE_BONUS_NOTIFICATION:
            return {
              ...t,
              player: {
                ...t.player,
                raceWaitClaim: !1,
              },
            };
          case S.PUT_ANYTIME_REBATE_SETTLE_SUCCESS:
            return {
              ...t,
              player: {
                ...t.player,
                anytimeRebateWaitClaim: r.payload > 0,
              },
            };
          case S.TURN_OFF_REG_LIMIT_PROMO:
            return {
              ...t,
              regLimitPromoExpireTime: null,
              shouldUpdateRegLimitPromo: r.status,
            };
          case S.UPDATE_IS_VERIFIED:
            return {
              ...t,
              isVerified: r.status,
            };
          case S.UPDATE_USER_BALANCE:
            return {
              ...t,
              walletMap: t.walletMap.updateIn(["MAIN"], (e) => {
                let t = e.set(
                  "balance",
                  Number(e.get("balance")) - Number(r.amount)
                );
                return (
                  (t = t.set(
                    "available",
                    Number(e.get("available")) - Number(r.amount)
                  )),
                  t
                );
              }),
            };
          default:
            return t;
        }
      };
    },
    81503: (e, t, r) => {
      "use strict";
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
            a,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((a =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (a.get || a.set)
                ? r(n, t, a)
                : (n[t] = e[t]));
          return n;
        })(e);
      })(r(32285));
      const n = {
        cricketLoginToken: void 0,
        prevCricketPath: "",
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : n,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.CRICKET_LOGIN_ACTION:
            return {
              ...e,
              cricketLoginToken: t.loginToken,
            };
          case a.CHANGE_CRICKET_PATH:
            return {
              ...e,
              prevCricketPath: t.path,
            };
          default:
            return e;
        }
      };
    },
    81667: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.afterSignIn = function (e) {
          let { playerid: t } = e;
        }),
        (t.afterSignUp = function (e) {
          let { playerid: t } = e;
        }),
        (t.afterSignupFirstTypingId = function () {}),
        (t.appReady = function () {});
    },
    82439: (e, t, r) => {
      "use strict";
      var a = r(6537);
      e.exports = function (e) {
        return null === e
          ? "Null"
          : void 0 === e
          ? "Undefined"
          : a(e)
          ? "Object"
          : "number" == typeof e
          ? "Number"
          : "boolean" == typeof e
          ? "Boolean"
          : "string" == typeof e
          ? "String"
          : void 0;
      };
    },
    82470: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.THIRD_PARTY_LOGIN_BIND_USER_SUCCESS =
          t.THIRD_PARTY_LOGIN_BIND_USER_REQUEST =
          t.THIRD_PARTY_LOGIN_BIND_USER_FAILURE =
          t.THIRD_PARTY_LOGIN_BIND_REGISTER_SUCCESS =
          t.THIRD_PARTY_LOGIN_BIND_REGISTER_REQUEST =
          t.THIRD_PARTY_LOGIN_BIND_REGISTER_FAILURE =
          t.POST_THIRD_PARTY_LOGIN_SUCCESS =
          t.POST_THIRD_PARTY_LOGIN_REQUEST =
          t.POST_THIRD_PARTY_LOGIN_FAILURE =
          t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_SUCCESS =
          t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_REQUEST =
          t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_FAILURE =
          t.GET_THIRD_PARTY_LOGIN_SETTING_SUCCESS =
          t.GET_THIRD_PARTY_LOGIN_SETTING_REQUEST =
          t.GET_THIRD_PARTY_LOGIN_SETTING_FAILURE =
            void 0),
        (t.GET_THIRD_PARTY_LOGIN_SETTING_REQUEST =
          "thirdPartyLogin/GET_THIRD_PARTY_LOGIN_SETTING_REQUEST"),
        (t.GET_THIRD_PARTY_LOGIN_SETTING_SUCCESS =
          "thirdPartyLogin/GET_THIRD_PARTY_LOGIN_SETTING_SUCCESS"),
        (t.GET_THIRD_PARTY_LOGIN_SETTING_FAILURE =
          "thirdPartyLogin/GET_THIRD_PARTY_LOGIN_SETTING_FAILURE"),
        (t.POST_THIRD_PARTY_LOGIN_REQUEST =
          "thirdPartyLogin/POST_THIRD_PARTY_LOGIN_REQUEST"),
        (t.POST_THIRD_PARTY_LOGIN_SUCCESS =
          "thirdPartyLogin/POST_THIRD_PARTY_LOGIN_SUCCESS"),
        (t.POST_THIRD_PARTY_LOGIN_FAILURE =
          "thirdPartyLogin/POST_THIRD_PARTY_LOGIN_FAILURE"),
        (t.THIRD_PARTY_LOGIN_BIND_REGISTER_REQUEST =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_REGISTER_REQUEST"),
        (t.THIRD_PARTY_LOGIN_BIND_REGISTER_SUCCESS =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_REGISTER_SUCCESS"),
        (t.THIRD_PARTY_LOGIN_BIND_REGISTER_FAILURE =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_REGISTER_FAILURE"),
        (t.THIRD_PARTY_LOGIN_BIND_USER_REQUEST =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_USER_REQUEST"),
        (t.THIRD_PARTY_LOGIN_BIND_USER_SUCCESS =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_USER_SUCCESS"),
        (t.THIRD_PARTY_LOGIN_BIND_USER_FAILURE =
          "thirdPartyLogin/THIRD_PARTY_LOGIN_BIND_USER_FAILURE"),
        (t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_REQUEST =
          "POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_REQUEST"),
        (t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_SUCCESS =
          "POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_SUCCESS"),
        (t.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_FAILURE =
          "POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_FAILURE");
    },
    83475: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = o(r(51929)),
        n = o(r(9404));
      function o(e, t) {
        if ("function" == typeof WeakMap)
          var r = new WeakMap(),
            a = new WeakMap();
        return (o = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var n,
            o,
            _ = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return _;
          if ((n = t ? a : r)) {
            if (n.has(e)) return n.get(e);
            n.set(e, _);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((o =
                (n = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? n(_, t, o)
                : (_[t] = e[t]));
          return _;
        })(e, t);
      }
      const _ = {
        displayAffiliate: !1,
        affiliateSetting: (0, n.Map)(),
        registerAffiliateSucc: !1,
        displayBonusSetting: {
          enableDisplayBonusSetting: !1,
          displayBonusSettings: [
            {
              downlineMember: 5,
              bonus: 500,
            },
            {
              downlineMember: 10,
              bonus: 1e3,
            },
            {
              downlineMember: 50,
              bonus: 5e3,
            },
            {
              downlineMember: 100,
              bonus: 1e4,
            },
            {
              downlineMember: 1e3,
              bonus: 1e5,
            },
            {
              downlineMember: 1e4,
              bonus: 1e6,
            },
            {
              downlineMember: 1e5,
              bonus: 1e7,
            },
          ],
        },
        affiliateInfo: (0, n.fromJS)({
          data: [],
          total: 0,
          summary: {},
        }),
        referralSummary: n.default.fromJS({
          objs: {},
          ids: [],
          total: 0,
        }),
        isLoading: !1,
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case a.GET_AFFILIATE_SETTING_SUCCESS:
            return {
              ...e,
              displayAffiliate: t.payload.display,
              affiliateSetting: (0, n.fromJS)(t.payload),
            };
          case a.PUT_REGISTER_AFFILIATE_REQUEST:
            return {
              ...e,
              registerAffiliateSucc: !1,
            };
          case a.PUT_REGISTER_AFFILIATE_SUCCESS:
            return {
              ...e,
              registerAffiliateSucc: !0,
            };
          case a.GET_AFFILIATE_INFO_REQUEST:
            return {
              ...e,
              isLoading: !0,
            };
          case a.GET_AFFILIATE_INFO_SUCCESS: {
            const { displayBonusSetting: r, ...a } = t.payload,
              { data: o, total: _ } = a;
            return {
              ...e,
              displayBonusSetting: r,
              isLoading: !1,
              affiliateInfo: (0, n.fromJS)(a),
              referralSummary: n.default.fromJS({
                objs: o.reduce(
                  (e, t) => (
                    (t.key = `${t.playerid}-${t.createdate}`), (e[t.key] = t), e
                  ),
                  {}
                ),
                ids: n.default.fromJS(
                  o.map((e) => `${e.playerid}-${e.createdate}`)
                ),
                total: _,
              }),
            };
          }
          case a.GET_AFFILIATE_INFO_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          default:
            return e;
        }
      };
    },
    83597: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.staticImageUrl =
          t.isViMobileField =
          t.isStandalone =
          t.isNativeAppFromUrl =
          t.isNativeApp =
          t.defaultCurrencyI18nLazy =
          t.defaultCurrencyI18n =
          t.agreePolicyKey =
          t.affiliateExpireTime =
          t.PINCODE_MAX_LENGTH =
            void 0);
      var n = a(r(86663)),
        o = a(r(94188)),
        _ = r(38560),
        E = r(51628);
      const i = n.default.parse(window.location.search),
        { imageServer: s, imgStaticPath: T } = o.default.portal.apiServer,
        A =
          ((t.affiliateExpireTime = 2592e3),
          (t.PINCODE_MAX_LENGTH = "10"),
          navigator.userAgent || "");
      var S;
      (t.isNativeApp = A.indexOf("App/") > -1 && A.indexOf("AppVersion/") > -1),
        (t.isNativeAppFromUrl = "true" === i.isNativeApp),
        (t.defaultCurrencyI18n = E.i18n[o.default.defaultCurrency]
          ? `${E.i18n[o.default.defaultCurrency]}`
          : o.default.defaultCurrency),
        (t.defaultCurrencyI18nLazy = () =>
          E.i18n[o.default.defaultCurrency]
            ? `${E.i18n[o.default.defaultCurrency]}`
            : o.default.defaultCurrency),
        (t.staticImageUrl = `${s}${T}`),
        (t.isViMobileField =
          "vi-VN" === o.default.defaultLocale && _.isDesktop),
        (t.isStandalone =
          window.matchMedia("(display-mode: standalone)").matches ||
          window.navigator.standalone ||
          (null === (S = window.clientInformation) || void 0 === S
            ? void 0
            : S.standalone)),
        (t.agreePolicyKey = "agentAgreement");
    },
    83736: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = r(31635).__importDefault(r(62877));
      t.default = function (e) {
        a.default(function () {
          e();
        });
      };
    },
    83980: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.isVietnameseDong = t.isVietnamese = t.isBrSite = void 0);
      var n = a(r(94188)),
        o = r(51628);
      const { defaultCurrency: _ } = n.default;
      (t.isBrSite = "BRL" === _),
        (t.isVietnameseDong = "VND2" === _),
        (t.isVietnamese = "vi-VN" === o.currLocale);
    },
    84377: (e, t, r) => {
      "use strict";
      e.exports = r(69600);
    },
    84769: (e, t, r) => {
      "use strict";
      var a = r(30592),
        n = r(30655),
        o = a.hasArrayLengthDefineBug(),
        _ = o && r(21412),
        E = r(36556)("Object.prototype.propertyIsEnumerable");
      e.exports = function (e, t, r, a, i, s) {
        if (!n) {
          if (!e(s)) return !1;
          if (!s["[[Configurable]]"] || !s["[[Writable]]"]) return !1;
          if (i in a && E(a, i) !== !!s["[[Enumerable]]"]) return !1;
          var T = s["[[Value]]"];
          return (a[i] = T), t(a[i], T);
        }
        return o &&
          "length" === i &&
          "[[Value]]" in s &&
          _(a) &&
          a.length !== s["[[Value]]"]
          ? ((a.length = s["[[Value]]"]), a.length === s["[[Value]]"])
          : (n(a, i, r(s)), !0);
      };
    },
    85040: (e) => {
      "use strict";
      function t(e) {
        return e.valueOf ? e.valueOf() : Object.prototype.valueOf.call(e);
      }
      e.exports = function e(r, a) {
        if (r === a) return !0;
        if (null == r || null == a) return !1;
        if (Array.isArray(r))
          return (
            Array.isArray(a) &&
            r.length === a.length &&
            r.every(function (t, r) {
              return e(t, a[r]);
            })
          );
        if ("object" != typeof r && "object" != typeof a) return !1;
        var n = t(r),
          o = t(a);
        return n !== r || o !== a
          ? e(n, o)
          : Object.keys(Object.assign({}, r, a)).every(function (t) {
              return e(r[t], a[t]);
            });
      };
    },
    86462: (e) => {
      "use strict";
      e.exports = {
        brand: {
          code: "qata88",
          name: "VN138",
          title: "VN138 Nhà Cái Cá Cược Trực Tuyến Uy Tín Nhất Châu Á",
          favicon: "qata88.ico",
          copyright: "Copyright © VN138 Reserved",
          htmlMeta:
            '\n\t\t\t<meta name="description" content="Nhà Cái VN138 Cá Cược Đá Gà Campuchia, Trực tiếp Bóng Đá Uy Tín. Tham gia VN138 Chơi Thể Thao Online, Casino Trực Tuyến UY TÍN & HỢP PHÁP." data-react-helmet="true">\n\t\t',
          livechat: "14707113",
          custom: {
            style: !0,
            components: {
              Home: !0,
              Header: "ec52",
              Navigation: "ec52",
              Footer: !0,
              Live: "live1",
              Egame: "egame8",
              Sports: "sports1",
              Mpg: "fishing5",
              Animal: "animal1",
              Lottery: "lottery6",
              Esports: "esports1",
              Chess: "chess8",
              MINI_GAME: "default",
              Finance: "default",
              FloatingGames: "mini-games",
            },
          },
          customMobile: {
            style: !0,
            gpLogoStyle: "v-dark",
            order: {
              LAYOUT: [
                "Header",
                "FunctionBar",
                "Banner",
                "NewsList",
                "Navigation",
                "GameLobby",
              ],
            },
            components: {
              defaultTemplate: "template",
              GameList: "template-h",
              Navigation: "template-h3",
              FunctionBar: "template-h3",
              HomePage: "template-h5app58",
              GameLobby: !0,
              NavBar: "template",
              FloatingGames: "mini-games",
              Animal: "template-col1",
              Chess: "template-col1",
              Egame: "template-col2-full",
              Esports: "template-col1",
              Finance: "template-col1",
              Fishing: "template-col1",
              Live: "template-col2",
              Lottery: "template-col1",
              MiniGames: "template-col1",
              Sports: "template-col1",
            },
            mobilePromoNavType: "swiper",
          },
          extraFiles: {
            "vi-VN": !0,
            "en-US": "ec52",
          },
        },
        locales: ["vi-VN", "en-US"],
        defaultLocale: "vi-VN",
        defaultCurrency: "VND2",
        defaultTelCountry: "vn",
        portal: {
          apiServer: {
            baseURL: "https://api.qata88vn.com/qata88-ecp/api/v1",
            imageServer: "https://img.alltocon.com",
            imgStaticPath: "/img/static/",
            socketServer: "wss://api.qata88vn.com/qata88-ecp/websocket",
            appDownloadURL: "http://app-download.gashinzo.com/qata88",
          },
        },
        order: {
          LAYOUT: ["Header", "Navigation", "Menu", "News", "Main", "Footer"],
        },
        color: {
          "bg-color": "#f5f6f9",
          "color-highlight": "#fb2",
          "color-highlight2": "#fb2",
          "color-secondary": "#B2A168",
          "color-footer": "#1e1f2c",
          "color-sidemenu": "rgba(255, 255, 255, 0.9)",
          hyperlink: "#f2d391",
        },
        colorMobile: {
          "m-bg-color": "#ffffff",
          "m-color-highlight": "#f9bb22",
          "m-color-highlight2": "#f9bb22",
          "m-color-require": "#dd9c4b",
          "m-color-secondary": "#8FC31F",
          "m-color-coin": "#ffc446",
          "m-color-border": "#e7e7e7",
          "m-light-bg": "#f0eff5",
          "m-bottom-nav-dot": "#E94951",
          "m-W-bg-color": "#ffffff",
          "m-B-bg-color": "#272b3a",
          "m-B-bg-gray-color": "#394462",
          "m-B-money-icon-lingt-bg": "#FCC83C",
          "m-B-money-icon-dark-bg": "#F8971C",
          "m-B-sub-menu": "#4868E7",
          "m-B-home-quick-nav-light-bg": "#4868E7",
          "m-B-home-quick-nav-dark-bg": "#2347D6",
          "m-B-bottom-nav": "#131313",
          "m-B-bottom-nav-normal-text": "rgba(255,255,255,0.4)",
          "m-B-bottom-nav-highlight-text": "#DCAB4C",
        },
        uploadsize: {
          screenshot: 1e6,
        },
      };
    },
    86797: (e, t) => {
      "use strict";
      (t.A = void 0), (t.A = {});
    },
    86990: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.GET_BACCARAT_HISTORY_SUCCESS = void 0),
        (t.GET_BACCARAT_HISTORY_SUCCESS =
          "roadmap/GET_BACCARAT_HISTORY_SUCCESS");
    },
    88956: (e, t, r) => {
      var a = {
        "./ar-SA": [31266, 7, 2294],
        "./ar-SA.js": [31266, 7, 2294],
        "./bn-BD": [70565, 7, 6871],
        "./bn-BD.js": [70565, 7, 6871],
        "./en-US": [18202, 7, 1746],
        "./en-US.js": [18202, 7, 1746],
        "./es-MX": [64490, 7, 1238],
        "./es-MX.js": [64490, 7, 1238],
        "./games/ar-SA": [71918, 7, 3192],
        "./games/ar-SA.js": [71918, 7, 3192],
        "./games/bn-BD": [61729, 7, 8797],
        "./games/bn-BD.js": [61729, 7, 8797],
        "./games/en-US": [67166, 7, 4924],
        "./games/en-US.js": [67166, 7, 4924],
        "./games/es-MX": [7094, 7, 6668],
        "./games/es-MX.js": [7094, 7, 6668],
        "./games/hi-IN": [29061, 7, 5409],
        "./games/hi-IN.js": [29061, 7, 5409],
        "./games/id-ID": [47145, 7, 9365],
        "./games/id-ID.js": [47145, 7, 9365],
        "./games/it-IT": [64681, 7, 9077],
        "./games/it-IT.js": [64681, 7, 9077],
        "./games/ja-JP": [63470, 7, 7100],
        "./games/ja-JP.js": [63470, 7, 7100],
        "./games/km-KH": [2548, 7, 3206],
        "./games/km-KH.js": [2548, 7, 3206],
        "./games/kn-IN": [9691, 7, 4879],
        "./games/kn-IN.js": [9691, 7, 4879],
        "./games/ko-KR": [74552, 7, 4326],
        "./games/ko-KR.js": [74552, 7, 4326],
        "./games/lo-LA": [64631, 7, 2307],
        "./games/lo-LA.js": [64631, 7, 2307],
        "./games/ml-IN": [65707, 7, 7915],
        "./games/ml-IN.js": [65707, 7, 7915],
        "./games/ms-MY": [98141, 7, 7341],
        "./games/ms-MY.js": [98141, 7, 7341],
        "./games/my-MM": [10819, 7, 8171],
        "./games/my-MM.js": [10819, 7, 8171],
        "./games/ne-NP": [61394, 7, 7352],
        "./games/ne-NP.js": [61394, 7, 7352],
        "./games/pt-BR": [47867, 7, 5183],
        "./games/pt-BR.js": [47867, 7, 5183],
        "./games/ru-RU": [76789, 7, 6021],
        "./games/ru-RU.js": [76789, 7, 6021],
        "./games/ta-IN": [91937, 7, 589],
        "./games/ta-IN.js": [91937, 7, 589],
        "./games/te-IN": [733, 7, 625],
        "./games/te-IN.js": [733, 7, 625],
        "./games/th-TH": [45875, 7, 3515],
        "./games/th-TH.js": [45875, 7, 3515],
        "./games/tl-PH": [96531, 7, 3187],
        "./games/tl-PH.js": [96531, 7, 3187],
        "./games/tr-TR": [50963, 7, 55],
        "./games/tr-TR.js": [50963, 7, 55],
        "./games/ur-PK": [19331, 7, 855],
        "./games/ur-PK.js": [19331, 7, 855],
        "./games/vi-VN": [21520, 7, 5466],
        "./games/vi-VN.js": [21520, 7, 5466],
        "./games/zh-CN": [38388, 7, 4094],
        "./games/zh-CN.js": [38388, 7, 4094],
        "./games/zh-TW": [68580, 7, 8226],
        "./games/zh-TW.js": [68580, 7, 8226],
        "./hi-IN": [88782, 7, 8083],
        "./hi-IN.js": [88782, 7, 8083],
        "./id-ID": [46157, 7, 4451],
        "./id-ID.js": [46157, 7, 4451],
        "./it-IT": [66669, 7, 4483],
        "./it-IT.js": [66669, 7, 4483],
        "./ja-JP": [62514, 7, 842],
        "./ja-JP.js": [62514, 7, 842],
        "./km-KH": [15360, 7, 4044],
        "./km-KH.js": [15360, 7, 4044],
        "./kn-IN": [81791, 7, 1689],
        "./kn-IN.js": [81791, 7, 1689],
        "./ko-KR": [94132, 7, 2060],
        "./ko-KR.js": [94132, 7, 2060],
        "./lo-LA": [66035, 7, 5989],
        "./lo-LA.js": [66035, 7, 5989],
        "./ml-IN": [63815, 7, 6517],
        "./ml-IN.js": [63815, 7, 6517],
        "./ms-MY": [21281, 7, 9863],
        "./ms-MY.js": [21281, 7, 9863],
        "./my-MM": [90143, 7, 6433],
        "./my-MM.js": [90143, 7, 6433],
        "./ne-NP": [46, 7, 3598],
        "./ne-NP.js": [46, 7, 3598],
        "./pt-BR": [23031, 7, 5245],
        "./pt-BR.js": [23031, 7, 5245],
        "./ru-RU": [48745, 7, 9571],
        "./ru-RU.js": [48745, 7, 9571],
        "./ta-IN": [98613, 7, 79],
        "./ta-IN.js": [98613, 7, 79],
        "./te-IN": [2169, 7, 4155],
        "./te-IN.js": [2169, 7, 4155],
        "./th-TH": [90007, 7, 6641],
        "./th-TH.js": [90007, 7, 6641],
        "./tl-PH": [25463, 7, 7793],
        "./tl-PH.js": [25463, 7, 7793],
        "./tr-TR": [61111, 7, 1221],
        "./tr-TR.js": [61111, 7, 1221],
        "./ur-PK": [93791, 7, 2237],
        "./ur-PK.js": [93791, 7, 2237],
        "./utils/otherInfo": [74376, 9, 4562],
        "./utils/otherInfo.js": [74376, 9, 4562],
        "./vi-VN": [67836, 7, 5004],
        "./vi-VN.js": [67836, 7, 5004],
        "./zh-CN": [50048, 7, 8136],
        "./zh-CN-hints": [10947, 9, 8165],
        "./zh-CN-hints.js": [10947, 9, 8165],
        "./zh-CN.js": [50048, 7, 8136],
        "./zh-TW": [6088, 7, 3304],
        "./zh-TW.js": [6088, 7, 3304],
      };
      function n(e) {
        if (!r.o(a, e))
          return Promise.resolve().then(() => {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          });
        var t = a[e],
          n = t[0];
        return r.e(t[2]).then(() => r.t(n, 16 | t[1]));
      }
      (n.keys = () => Object.keys(a)), (n.id = 88956), (e.exports = n);
    },
    89353: (e) => {
      "use strict";
      var t = Object.prototype.toString,
        r = Math.max,
        a = function (e, t) {
          for (var r = [], a = 0; a < e.length; a += 1) r[a] = e[a];
          for (var n = 0; n < t.length; n += 1) r[n + e.length] = t[n];
          return r;
        };
      e.exports = function (e) {
        var n = this;
        if ("function" != typeof n || "[object Function]" !== t.apply(n))
          throw new TypeError(
            "Function.prototype.bind called on incompatible " + n
          );
        for (
          var o,
            _ = (function (e) {
              for (var t = [], r = 1, a = 0; r < e.length; r += 1, a += 1)
                t[a] = e[r];
              return t;
            })(arguments),
            E = r(0, n.length - _.length),
            i = [],
            s = 0;
          s < E;
          s++
        )
          i[s] = "$" + s;
        if (
          ((o = Function(
            "binder",
            "return function (" +
              (function (e) {
                for (var t = "", r = 0; r < e.length; r += 1)
                  (t += e[r]), r + 1 < e.length && (t += ",");
                return t;
              })(i) +
              "){ return binder.apply(this,arguments); }"
          )(function () {
            if (this instanceof o) {
              var t = n.apply(this, a(_, arguments));
              return Object(t) === t ? t : this;
            }
            return n.apply(e, a(_, arguments));
          })),
          n.prototype)
        ) {
          var T = function () {};
          (T.prototype = n.prototype),
            (o.prototype = new T()),
            (T.prototype = null);
        }
        return o;
      };
    },
    89468: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(3242)),
        o = a(r(9404)),
        _ = a(r(94188));
      const E = {
        isLoading: !1,
        payments: o.default.Map(),
        gatewayparam: o.default.Map(),
        gatewayurl: null,
        gatewaymethod: null,
        thirdpartypaymentcode: null,
        orderno: null,
        revisedamount: null,
        remark: null,
        paymentStatus: null,
        thirdpartypayments: o.default.List(),
        im3rdPartyBankList: o.default.List(),
        get3rdPartyBankListState: {
          loading: !1,
          suc: !1,
          err: !1,
          errMsg: "",
        },
        getPaymentfromAPI: !1,
        gatewaytype: null,
        refererurl: null,
        paymentSuccess: !1,
        paymentFailed: !1,
        paymentFailedErr: null,
        amountLimit3rdPartyPayments: o.default.fromJS(),
        crpytoWallet: o.default.Map(),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        switch (t.type) {
          case n.AJAX_GET_PAYMENTS_LIST_REQUEST:
            return {
              ...e,
              isLoading: !0,
              gatewayparam: o.default.Map(),
              gatewayurl: null,
              gatewaymethod: null,
              thirdpartypaymentcode: null,
              getPaymentfromAPI: !1,
              gatewaytype: null,
              refererurl: null,
              paymentSuccess: !1,
              paymentFailed: !1,
            };
          case n.AJAX_GET_PAYMENTS_LIST_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              payments: t.payload.reduce(
                (e, t, r) => e.set(r, o.default.fromJS(t)),
                e.payments
              ),
              getPaymentfromAPI: !0,
            };
          case n.AJAX_GET_PAYMENTS_LIST_FAILURE:
            return {
              ...e,
              isLoading: !1,
              getPaymentfromAPI: !0,
            };
          case n.AJAX_POST_SEND_PAYMENT_REQUEST:
            return {
              ...e,
              isLoading: !0,
              orderno: null,
              paymentSuccess: !1,
              paymentFailed: !1,
            };
          case n.AJAX_POST_SEND_PAYMENT_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              gatewayparam: t.payload.gatewayparam,
              thirdpartypaymentcode: t.payload.thirdpartypaymentcode,
              data: t.payload.data,
              gatewayurl: t.payload.gatewayurl,
              gatewaytype: t.payload.gatewaytype,
              gatewaymethod: t.payload.gatewaymethod,
              refererurl: t.payload.refererurl,
              orderno: t.payload.orderno,
              revisedamount: t.payload.revisedamount,
              remark: t.payload.remark,
              paymentSuccess: !0,
            };
          case n.AJAX_POST_SEND_PAYMENT_FAILURE:
            return {
              ...e,
              isLoading: !1,
              paymentFailed: !0,
              paymentFailedErr: t.error.payload,
            };
          case n.AJAX_GET_PAYMENT_STATUS_REQUEST:
            return {
              ...e,
              isLoading: !0,
              paymentStatus: null,
            };
          case n.AJAX_GET_PAYMENT_STATUS_SUCCESS:
            return {
              ...e,
              isLoading: !1,
              paymentStatus: t.payload,
            };
          case n.AJAX_GET_PAYMENT_STATUS_FAILURE:
            return {
              ...e,
              isLoading: !1,
            };
          case n.AJAX_GET_EPAYMENT_REQUEST:
            return {
              ...e,
              isLoading: !1,
              get3rdPartyBankListState: {
                loading: !0,
                suc: !1,
                err: !1,
                errMsg: "",
              },
            };
          case n.AJAX_GET_EPAYMENT_SUCCESS:
            return (
              t.payload.forEach(
                (e) =>
                  (e.imagename =
                    e.imagename &&
                    `${_.default.portal.apiServer.imgStaticPath}banks/${e.imagename}`)
              ),
              {
                ...e,
                isLoading: !0,
                thirdpartypayments: o.default.List(t.payload),
                im3rdPartyBankList: o.default.fromJS(t.payload),
                get3rdPartyBankListState: {
                  loading: !1,
                  suc: !0,
                  err: !1,
                  errMsg: "",
                },
              }
            );
          case n.AJAX_GET_EPAYMENT_FAILURE:
            return {
              ...e,
              isLoading: !0,
              get3rdPartyBankListState: {
                loading: !1,
                suc: !1,
                err: !0,
                errMsg: "",
              },
            };
          case n.AJAX_RESET_EPAYMENT:
            return {
              ...e,
              thirdpartypayments: o.default.List(),
              im3rdPartyBankList: o.default.List(),
              get3rdPartyBankListState: {
                loading: !1,
                suc: !0,
                err: !1,
                errMsg: "",
              },
            };
          case n.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_REQUEST:
            return {
              ...e,
              getEpaymentAmountLimitReq: !0,
              getEpaymentAmountLimitSuc: !1,
              getEpaymentAmountLimitErr: !1,
            };
          case n.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_SUCCESS:
            return {
              ...e,
              getEpaymentAmountLimitReq: !1,
              getEpaymentAmountLimitSuc: !0,
              getEpaymentAmountLimitErr: !1,
              amountLimit3rdPartyPayments: o.default.fromJS(t.payload),
            };
          case n.AJAX_GET_EPAYMENT_AMOUNT_LIMIT_FAILURE:
            return {
              ...e,
              getEpaymentAmountLimitReq: !1,
              getEpaymentAmountLimitSuc: !1,
              getEpaymentAmountLimitErr: !0,
            };
          case n.AJAX_GET_CRYPTO_WALLET_SUCCESS:
            return {
              ...e,
              crpytoWallet: o.default.fromJS(t.payload),
            };
          default:
            return e;
        }
      };
    },
    91860: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getDepositLimitInfo = function (e, t) {
          if (!e) return "";
          const r = e.get("legalMinAmt", 0),
            n = e.get("legalMaxAmt", 0),
            o = "function" === t ? t(r) : r,
            _ = "function" === t ? t(n) : n;
          return `${r > 0 ? `${a.i18n["quota.min"]}: ${o} ` : ""}${
            n > 0
              ? `${a.i18n["quota.max"]}: ${_}`
              : `${a.i18n["quota.max"]}: ${a.i18n["no.limit"]}`
          }`;
        }),
        (t.getDepositPaymentCategory = void 0),
        (t.getPersonalAccountName = function (e) {
          return (
            a.i18n[`personal.account.number.${e}`] ||
            (0, n.i18nVariables)(a.i18n["personal.account.number"], {
              service: a.i18n[`deposit.payment.type.${e}`],
            })
          );
        }),
        (t.getSummaryData = t.getPromoOpts = void 0);
      var a = r(51628),
        n = r(93185),
        o = r(8087),
        _ = r(67067),
        E = r(38560),
        i = r(70913);
      (t.getSummaryData = (e, t) => {
        if (!e || !t) return [];
        const r = [
            {
              labelI18n: "orderNumberDeposit",
              key: "depositid",
            },
            E.isDesktop && {
              label: "depositAmt",
              key: "depositamt",
            },
            {
              labelI18n: "submit.time",
              key: "deposittime",
              format: i.formatDateTime,
            },
            {
              label: "playerDepositTime",
              key: "playerdeposittime",
              format: i.formatDateTime,
            },
            {
              label: "depositName",
              key: "depositname",
              exception: !e.get("depositname"),
            },
            {
              label: "depositType",
              key: "deposittype",
              format: (e) => {
                var t;
                return (
                  (null === (t = o.deposittypes.find((t) => +t.value === e)) ||
                  void 0 === t
                    ? void 0
                    : t.label) || ""
                );
              },
            },
            {
              label: "bankId",
              key: "playerbankname",
              exception: !e.get("playerbankname"),
            },
            {
              label: "remarks",
              key: "remarks",
              exception: !e.get("remarks"),
            },
            {
              label: "depositImage",
              key: "depositimage",
              exception: "image",
            },
          ],
          n = e.get("caccountpaymenttype");
        return (
          n !== o.depositTypesEnum.BANK_ONLINE &&
          n !== o.depositTypesEnum.OFFLINE_DEPOSIT
            ? r.splice(
                -2,
                0,
                {
                  label: "bankAccount",
                  key: "caccountbankname",
                },
                {
                  label: "bankAccountName",
                  key: "caccountbankaccountnameDisplay",
                }
              )
            : r.splice(-2, 0, {
                labelI18n: "payee",
                key: ["caccountbankname", "caccountbankaccountnameDisplay"],
              }),
          r.reduce((r, n) => {
            const {
                label: o,
                labelI18n: _,
                key: E,
                format: i,
                exception: s,
              } = n,
              T = (t) => {
                const r = e.get(t, "");
                return i ? i(r) : r;
              },
              A = {
                value: Array.isArray(E) ? E.map(T).join(" / ") : T(E),
              };
            return (
              s && (A.exception = s),
              o && t[o]
                ? ((A.label = t[o].label), r.concat([A]))
                : _
                ? ((A.label = a.i18n[_]), r.concat([A]))
                : r
            );
          }, [])
        );
      }),
        (t.getDepositPaymentCategory = (e) => {
          switch (e) {
            case o.depositPaymentTypes.COMPANY_DEPOSIT:
              return o.depositPaymentCategories.OFFLINE_DEPOSIT;
            case o.depositPaymentTypes.ONLINE_BANKING:
              return o.depositPaymentCategories.ONLINE_BANKING;
            default:
              return o.depositPaymentCategories.PERSONAL_ACCOUNT;
          }
        }),
        (t.getPromoOpts = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : [],
            {
              depositPromoType: t,
              thirdPartyPaymentCode: r,
              filterPlatformOnly: a,
            } = arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : {};
          if (!(null != e && e.length) > 0) return [];
          const {
              COMPANY_DEPOSIT: n,
              THIRD_PARTY_DEPOSIT: o,
              ALL: i,
              CORPORATE_CRYPTO: s,
            } = _.depositPromoDepositTypeEnum,
            T = {
              [n]: [n, i],
              [o]: [o, i],
              [s]: [s, i],
            };
          return e.filter((e) => {
            const n =
              !e.platform || (E.isMobile ? 1 === e.platform : 2 === e.platform);
            if (a) return n;
            if (!n) return !1;
            const o = T[t].includes(e.depositType);
            if (t === _.depositPromoDepositTypeEnum.THIRD_PARTY_DEPOSIT) {
              const t =
                e.depositType === _.depositPromoDepositTypeEnum.ALL ||
                !Array.isArray(e.thirdPartyPaymentCodes) ||
                e.thirdPartyPaymentCodes.includes(r);
              return o && t;
            }
            return o;
          });
        });
    },
    92566: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getGadsParams = t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { gads: _ } = n.default.brand;
      let E = "";
      try {
        E = Object(
          (function () {
            var e = new Error("Cannot find module './domain/qata88/gads.js'");
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      const i = {
          id: (0, o.getURLParams)("gads_id"),
          signupToken: (0, o.getURLParams)("gads_signup_token"),
          purchaseToken: (0, o.getURLParams)("gads_purchase_token"),
        },
        s = (0, o.getDomainId)(E);
      (t.getGadsParams = () => {
        let e = {
          id: "",
          purchaseToken: "",
          signupToken: "",
        };
        return (
          i.id
            ? (e = {
                ...i,
              })
            : null != s && s.id
            ? (e = {
                ...s,
              })
            : null != _ &&
              _.id &&
              (e = {
                ..._,
              }),
          e
        );
      }),
        (t.default = () => {
          const e =
            i.id || (null == s ? void 0 : s.id) || (null == _ ? void 0 : _.id);
          e &&
            (0, o.pageLoadedAction)(() => {
              const t = document.createElement("script");
              (t.async = !0),
                (t.src = `https://www.googletagmanager.com/gtag/js?id=${e}`);
              const r = document.createElement("script"),
                a = `\n          window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} \n          gtag('js', new Date()); gtag('config', '${e}'); \n        `;
              r.appendChild(document.createTextNode(a)),
                document.head.appendChild(t),
                document.head.appendChild(r);
            });
        });
    },
    93185: (__unused_webpack_module, exports, __webpack_require__) => {
      "use strict";
      var _interopRequireDefault = __webpack_require__(24994);
      Object.defineProperty(exports, "__esModule", {
        value: !0,
      }),
        (exports.checkThirdPartyRedirectUriEnter = exports.changeFileSize =
          void 0),
        (exports.clickMemberSectionItem = clickMemberSectionItem),
        (exports.compareGameTags = compareGameTags),
        (exports.decodeHtml =
          exports.dataURLtoFile =
          exports.dataURItoBlob =
            void 0),
        (exports.delayPromise = delayPromise),
        (exports.floatPrecision =
          exports.filterComp =
          exports.downloadCanvasImage =
          exports.deleteEmptyValue =
            void 0),
        (exports.generatePrivateNumber = generatePrivateNumber),
        (exports.getCustomCsLink =
          exports.getCleanContent =
          exports.getCRICAccessToken =
          exports.getBankName =
          exports.getAnnouncedDetail =
            void 0),
        (exports.getElementOffset = getElementOffset),
        (exports.getGameQuery =
          exports.getGameProviderByTypes =
          exports.getGameName =
          exports.getGameImgPath =
          exports.getGameIconLocale =
          exports.getGameHistoryName =
            void 0),
        (exports.getHostName = getHostName),
        (exports.loadingPageDone =
          exports.launchGameByHtml =
          exports.launchByPostMethod =
          exports.isT18Group =
          exports.isMaintenance =
          exports.isLaunchGameUrl =
          exports.isEmpty =
          exports.isAeSevenProvider =
          exports.insertHtmlAndExecuteScripts =
          exports.immutableListSort =
          exports.i18nVariables =
          exports.getValueWithoutFirstLastSpace =
          exports.getUrlQuery =
          exports.getUniversalHyperlink =
          exports.getURLAccessToken =
          exports.getTextTransform =
          exports.getSSVipGroup =
          exports.getRouletteName =
          exports.getResizedImg =
          exports.getProviderName =
          exports.getPromoNameUpperCase =
          exports.getPromoName =
          exports.getPromoHistoryPromoName =
          exports.getPath =
          exports.getNameByObj =
          exports.getName =
          exports.getMyFavoriteGameKey =
            void 0),
        (exports.localeCompareSupportsLocales = localeCompareSupportsLocales),
        (exports.logErrorToMyService = logErrorToMyService),
        (exports.waitForElement =
          exports.swapTwoItemInArray =
          exports.sortNameLocaleCompare =
          exports.sortByGivenArray =
          exports.returnOnlyNumber =
          exports.replaceToAsterisk =
          exports.renderImg =
          exports.renderGameImgObj =
          exports.renderGameImg =
          exports.randomFloatFromInterval =
          exports.openSingleWindow =
          exports.openGamePopup =
          exports.onPinCodeKeyPress =
          exports.onNumberOnlyHandler =
          exports.onFloatOnlyHandler =
          exports.onAlphaNumberOnlyHandler =
          exports.nullToEmptyString =
          exports.newWindowObj =
          exports.navBarCurrentIndex =
          exports.moveToFront =
            void 0);
      var _react = _interopRequireDefault(__webpack_require__(96540)),
        _immutable = _interopRequireDefault(__webpack_require__(9404)),
        _queryString = _interopRequireDefault(__webpack_require__(86663)),
        _store = _interopRequireDefault(__webpack_require__(27179)),
        _config = _interopRequireDefault(__webpack_require__(94188)),
        _constants = __webpack_require__(83597),
        _enum = __webpack_require__(8087),
        _enums = __webpack_require__(28415),
        _locale = __webpack_require__(51628),
        _routesConst = _interopRequireDefault(__webpack_require__(15062)),
        _device = __webpack_require__(38560),
        _jsxRuntime = __webpack_require__(74848);
      const { code, htmlLoading } = _config.default.brand;
      let newWindowObj = (exports.newWindowObj = window.newWindowObj);
      const renderImg = (e, t, r) => {
        const a = `https://img.alltocon.com/img/static/${e}`;
        return (0, _jsxRuntime.jsx)("img", {
          src: a,
          className: t,
          alt: "",
          ...r,
        });
      };
      exports.renderImg = renderImg;
      const getGameIconLocale = (e) =>
        ["zh-CN", "vi-VN", "th-TH", "en-US"].includes(e)
          ? e
          : "zh-TW" === e
          ? "zh-CN"
          : "en-US";
      exports.getGameIconLocale = getGameIconLocale;
      const getGameImgPath = function (e, t) {
        const r =
          arguments.length > 2 && void 0 !== arguments[2] && !arguments[2]
            ? `${t}.png`
            : `${null == t ? void 0 : t.toLocaleLowerCase()}.png`;
        return `https://img.alltocon.com/img/static/game/${getGameIconLocale(
          _locale.currLocale
        )}/${e}/${r}`;
      };
      exports.getGameImgPath = getGameImgPath;
      const renderGameImg = function (e, t, r) {
        const a = getGameImgPath(
          e,
          t,
          !(arguments.length > 3 && void 0 !== arguments[3]) || arguments[3]
        );
        for (
          var n = arguments.length, o = new Array(n > 4 ? n - 4 : 0), _ = 4;
          _ < n;
          _++
        )
          o[_ - 4] = arguments[_];
        return (0, _jsxRuntime.jsx)("img", {
          src: a,
          className: r,
          alt: `${e}-${t}`,
          ...o,
        });
      };
      exports.renderGameImg = renderGameImg;
      const renderGameImgObj = (e, t, r) => {
        const a = void 0 === r.imgLowerCase || r.imgLowerCase,
          n = getGameImgPath(e, t, a);
        return (0, _jsxRuntime.jsx)("img", {
          src: n,
          alt: `${e}-${t}`,
          ...r,
        });
      };
      exports.renderGameImgObj = renderGameImgObj;
      const openGamePopup = (e) => {
        window.location = e;
      };
      exports.openGamePopup = openGamePopup;
      const launchByPostMethod = function (e, t) {
        const { formdata: r, launchurl: a } = e;
        let n = document.createElement("form");
        (n.target = t ? "_self" : "_blank"),
          (n.method = "POST"),
          (n.action = a);
        for (const e in r)
          if (Object.prototype.hasOwnProperty.call(r, e)) {
            const t = r[e],
              a = document.createElement("input");
            (a.type = "text"), (a.name = e), (a.value = t), n.appendChild(a);
          }
        return (
          document.body.appendChild(n),
          n.submit(),
          n.parentNode.removeChild(n),
          !0
        );
      };
      exports.launchByPostMethod = launchByPostMethod;
      const getGameQuery = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "desktop",
          t = arguments.length > 1 ? arguments[1] : void 0;
        const r = {
          sortcolumn: "producttypeid",
          sort: "ASC",
          offset: 0,
          limit: 1e4,
          platform: _enum.platformType[e],
        };
        return t ? Object.assign({}, r, t) : r;
      };
      exports.getGameQuery = getGameQuery;
      const onPinCodeKeyPress = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : _constants.PINCODE_MAX_LENGTH;
        const r = e || window.event,
          a = r.target.value.substring(
            r.target.selectionStart,
            r.target.selectionEnd
          );
        e.target.value.length >= t && a.length <= 0 && r.preventDefault();
        const n = r.which || r.keyCode;
        null === String.fromCharCode(n).match(/[0-9]/gi) && r.preventDefault();
      };
      exports.onPinCodeKeyPress = onPinCodeKeyPress;
      const onNumberOnlyHandler = (e) => {
        const t = e || window.event,
          r = t.which || t.keyCode;
        null === String.fromCharCode(r).match(/[0-9]/gi) && t.preventDefault();
      };
      exports.onNumberOnlyHandler = onNumberOnlyHandler;
      const onAlphaNumberOnlyHandler = (e) => {
        const t = e || window.event,
          r = t.which || t.keyCode;
        null === String.fromCharCode(r).match(/[A-Za-z0-9]/gi) &&
          t.preventDefault();
      };
      exports.onAlphaNumberOnlyHandler = onAlphaNumberOnlyHandler;
      const onFloatOnlyHandler = (e) => {
        const t = e || window.event,
          r = t.which || t.keyCode;
        null === String.fromCharCode(r).match(/[0-9.,]/gi) &&
          t.preventDefault();
      };
      exports.onFloatOnlyHandler = onFloatOnlyHandler;
      const floatPrecision = (e, t) =>
        !e.includes(".") || (e = e.split("."))[1].length < t;
      exports.floatPrecision = floatPrecision;
      const getName = (e) =>
        (e &&
          (e.get(_locale.currLocale) ||
            e.get(_config.default.defaultLocale) ||
            e.get("en-US"))) ||
        "";
      exports.getName = getName;
      const getProviderName = (e) => {
        if (!e) return "";
        switch (e) {
          case "UGAMING":
            e = "UNITED GAMING";
            break;
          case "SV":
            e = "SV388";
            break;
          case "EVO":
            e = "EVOLUTION";
            break;
          case "DG":
            e = "DREAM GAMING";
            break;
          case "VIA_CASINO":
            e = "VIA CASINO";
            break;
          case "LC":
            e = "V8";
            break;
          case "YL":
            e = "YOULIAN";
            break;
          case "MG":
            e = "MICROGAMING";
            break;
          case "OB_MPG":
            e = "OB";
            break;
          case "RT":
            e = "RED TIGER";
            break;
          case "FC":
            e = "FA CHAI";
            break;
          case "PP":
            e = "PRAGMATIC PLAY";
            break;
          case "LUCKY_SPORTS":
            e = "LUCKY SPORTS";
        }
        return e;
      };
      exports.getProviderName = getProviderName;
      const getNameByObj = (e) =>
        (e &&
          (e[_locale.currLocale] ||
            e[_config.default.defaultLocale] ||
            e["en-US"])) ||
        "";
      exports.getNameByObj = getNameByObj;
      const getGameName = (e) => getName(e.get("gamename"));
      exports.getGameName = getGameName;
      const getGameHistoryName = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : _immutable.default.Map();
        return (
          "function" != typeof t.get && (t = _immutable.default.fromJS(t)),
          getName(t.get("gamename"))
        );
      };
      exports.getGameHistoryName = getGameHistoryName;
      const swapTwoItemInArray = (e, t, r) => {
        const a = e[t];
        let n = [...e];
        return t < 0 || r < 0 || ((n[t] = e[r]), (n[r] = a)), n;
      };
      exports.swapTwoItemInArray = swapTwoItemInArray;
      const sortByGivenArray = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
          r = arguments.length > 2 ? arguments[2] : void 0,
          a = [],
          n = [];
        if (!Array.isArray(e) || !Array.isArray(t))
          throw new Error("Parameters should be arrays");
        return (
          (n = t.filter((t) => e.includes(t))),
          (a = e.filter((e) => !t.includes(e))),
          r ? n : [...n, ...a]
        );
      };
      exports.sortByGivenArray = sortByGivenArray;
      const moveToFront = (e, t) =>
        e.slice().sort((e, r) => (t(e) ? -1 : t(r) ? 1 : 0));
      exports.moveToFront = moveToFront;
      const isMaintenance = (e, t) => {
        if (e && 0 !== e.size) return 1 === e.getIn([...t, "status"]);
      };
      exports.isMaintenance = isMaintenance;
      const downloadCanvasImage = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : "image";
        var r = e.toDataURL(),
          a = document.createElement("a"),
          n = new MouseEvent("click", {
            view: window,
            bubbles: !0,
            cancelable: !0,
          });
        (a.download = `${t}.png`), (a.href = r), a.dispatchEvent(n);
      };
      exports.downloadCanvasImage = downloadCanvasImage;
      const returnOnlyNumber = function () {
        return (
          (arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : ""
          ).match(/[0-9]{0,}/)[0] || ""
        );
      };
      exports.returnOnlyNumber = returnOnlyNumber;
      const getMyFavoriteGameKey = (e) =>
        null === e.get("gameid")
          ? `${e.get("distributorid")}-${e.get("gameproviderid")}-null-${e.get(
              "producttypeid"
            )}`
          : `${e.get("distributorid")}-${e.get("gameproviderid")}-${e.get(
              "gameid"
            )}`;
      function localeCompareSupportsLocales() {
        try {
          "foo".localeCompare("bar", "i");
        } catch (e) {
          return !1;
        }
        return !1;
      }
      exports.getMyFavoriteGameKey = getMyFavoriteGameKey;
      const IntlLocale = {
          "zh-CN": "zh-CN-u-co-pinyin",
          "en-US": "en-US",
        },
        immutableListSort = (e) => {
          let { list: t, dataKey: r, sort: a = "asc" } = e;
          const n = IntlLocale[_locale.currLocale] || "en-US";
          let o = t;
          if (_immutable.default.List.isList(o) && r) {
            "string" == typeof r && (r = [r]);
            const e = (function (e, t, r) {
              switch (`${e}-${t}`) {
                case "number-asc":
                default:
                  return (e, t) => e > t;
                case "number-desc":
                  return (e, t) => e < t;
                case "string-asc":
                  return localeCompareSupportsLocales()
                    ? (e, t) => e.localeCompare(t, r)
                    : (e, t) => e > t;
                case "string-desc":
                  return localeCompareSupportsLocales()
                    ? (e, t) => t.localeCompare(e, r)
                    : (e, t) => e < t;
              }
            })(
              "number" == typeof o.getIn([0].concat(r)) ? "number" : "string",
              a,
              n
            );
            o = o.sort((t, a) => e(t.getIn(r), a.getIn(r)));
          }
          return o;
        };
      exports.immutableListSort = immutableListSort;
      const navBarCurrentIndex = (e) => {
        const t = [
          _routesConst.default.GAMELOBBY,
          _routesConst.default.DEPOSIT,
          _routesConst.default.WITHDRAW,
          _routesConst.default.ACCOUNT,
        ];
        let r = 0;
        return t.some((t, a) => e.search(t) >= 0 && ((r = a + 1), !0)), r;
      };
      exports.navBarCurrentIndex = navBarCurrentIndex;
      const getUniversalHyperlink = (e, t, r) => {
        if (r) return r;
        let a = t;
        "onlinecs" === a &&
          (a = (_device.isDesktop ? "PC" : "H5") + "onlinecs");
        const n = e.find((e) => e.get("code") === a);
        return n ? n.getIn(["url", _locale.currLocale]) : null;
      };
      exports.getUniversalHyperlink = getUniversalHyperlink;
      const getCustomCsLink = function (e) {
        if (
          !(
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "onlinecs"
          ).includes("onlinecs")
        )
          return e;
        const t = _store.default.get("playerid");
        return "vb9prod" === code && t ? `${e}?username=${t}` : e;
      };
      exports.getCustomCsLink = getCustomCsLink;
      const i18nVariables = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        if (e) {
          for (const r in t)
            if (Object.prototype.hasOwnProperty.call(t, r)) {
              const a = new RegExp(`\\$${r}`, "g");
              e = e.replace(a, t[r]);
            }
          return e;
        }
      };
      exports.i18nVariables = i18nVariables;
      const dataURLtoFile = (e, t) => {
        for (
          var r = e.split(","),
            a = r[0].match(/:(.*?);/)[1],
            n = atob(r[1]),
            o = n.length,
            _ = new Uint8Array(o);
          o--;

        )
          _[o] = n.charCodeAt(o);
        return new File([_], t, {
          type: a,
        });
      };
      exports.dataURLtoFile = dataURLtoFile;
      const dataURItoBlob = (e) => {
        var t;
        t =
          e.split(",")[0].indexOf("base64") >= 0
            ? atob(e.split(",")[1])
            : unescape(e.split(",")[1]);
        for (
          var r = e.split(",")[0].split(":")[1].split(";")[0],
            a = new Uint8Array(t.length),
            n = 0;
          n < t.length;
          n++
        )
          a[n] = t.charCodeAt(n);
        return new Blob([a], {
          type: r,
        });
      };
      exports.dataURItoBlob = dataURItoBlob;
      const changeFileSize = (e, t) => {
        const r = new FileReader();
        (r.onloadend = () => {
          const a = new Image();
          a.src = r.result;
          const n = 1e8 / e.size,
            o = Math.round((a.naturalWidth * n) / 100),
            _ = Math.round((a.naturalHeight * n) / 100),
            E = document.createElement("canvas");
          (E.width = o),
            (E.height = _),
            E.getContext("2d").drawImage(a, 0, 0, o, _);
          const i = dataURItoBlob(E.toDataURL(e.type));
          t(i);
        }),
          r.readAsDataURL(e);
      };
      exports.changeFileSize = changeFileSize;
      const sortNameLocaleCompare = (e, t) => {
        const r = "zh-CN" === _locale.currLocale ? ["zh-CN-u-co-pinyin"] : [];
        return e.localeCompare(t, r);
      };
      exports.sortNameLocaleCompare = sortNameLocaleCompare;
      const getAnnouncedDetail = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : _immutable.default.Map();
        const t = JSON.parse(e.get("content", "{}"));
        return t[_locale.currLocale] || t[_config.default.defaultLocale];
      };
      function getHostName(e) {
        var t = e.match(/:\/\/(www[0-9]?\.)?(.[^/:]+)/i);
        return null != t &&
          t.length > 2 &&
          "string" == typeof t[2] &&
          t[2].length > 0
          ? t[2]
          : null;
      }
      function compareGameTags(e, t) {
        const r = (e) =>
          Array.isArray(e)
            ? e.includes("new")
              ? -1
              : e.includes("pop")
              ? 0
              : 1
            : 2;
        return r(e.tags) - r(t.tags);
      }
      function clickMemberSectionItem(e) {
        !window.accountWindowInstance || window.accountWindowInstance.closed
          ? (window.accountWindowInstance = window.open(
              e,
              "_blank",
              "height=800,width=1350,toolbar=0,location=0,menubar=0,scrollbars=yes"
            ))
          : (window.accountWindowInstance.location = `${window.location.origin}${e}`),
          window.accountWindowInstance.focus();
      }
      function generatePrivateNumber(e) {
        const [t, r] = e.split(" "),
          a = r.slice(-4);
        return `(+${t} ${r.slice(0, -4).replace(/\d/g, "*")}${a})`;
      }
      function logErrorToMyService(e, t) {
        console.error(e, t);
      }
      exports.getAnnouncedDetail = getAnnouncedDetail;
      const deleteEmptyValue = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        const { deleteMinusOne: r } = t;
        return Object.keys(e).reduce((t, a) => {
          const n = e[a];
          return "" === n
            ? t
            : !r || ("-1" !== n && -1 !== n)
            ? (null == n || n != n || (t[a] = n), t)
            : t;
        }, {});
      };
      exports.deleteEmptyValue = deleteEmptyValue;
      const openSingleWindow = function () {
        var e, t, r, a;
        let n =
            arguments.length > 0 && void 0 !== arguments[0]
              ? arguments[0]
              : "defaultWindowInstance",
          o = arguments.length > 1 ? arguments[1] : void 0;
        const _ = navigator.userAgent.includes("GSA");
        null === (e = window[n]) ||
          void 0 === e ||
          null === (t = e.close) ||
          void 0 === t ||
          t.call(e),
          !window[n] ||
          (null !== (r = window[n]) && void 0 !== r && r.closed) ||
          _
            ? (window[n] = window.open(o, "_blank"))
            : (window[n].location = `${window.location.origin}${o}`),
          null === (a = window[n]) || void 0 === a || a.focus();
      };
      exports.openSingleWindow = openSingleWindow;
      const getPath = (e) => e.split(/[?#]/)[0];
      exports.getPath = getPath;
      const replaceToAsterisk = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
          t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 3;
        if (e) {
          const r = parseInt(e.length / 2, 10) - 1,
            a = e.length < r + t ? e.length : r + t;
          let n = [];
          for (let t = 0; t < e.length; t++)
            n[t] = t >= r && t < a ? e[t].replace(/./gi, "*") : e[t];
          return n.join("");
        }
        return e;
      };
      exports.replaceToAsterisk = replaceToAsterisk;
      const decodeHtml = (e) => {
        const t = document.createElement("textarea");
        return (t.innerHTML = e), t.value;
      };
      exports.decodeHtml = decodeHtml;
      const insertHtmlAndExecuteScripts = (element, text) => {
        const html = decodeHtml(text);
        element.innerHTML = html;
        const scripts = Array.prototype.slice.call(
          element.getElementsByTagName("script")
        );
        for (var i = 0; i < scripts.length; i++)
          if ("" !== scripts[i].src) {
            var tag = document.createElement("script");
            (tag.src = scripts[i].src),
              document.getElementsByTagName("head")[0].appendChild(tag);
          } else eval(scripts[i].innerHTML);
      };
      exports.insertHtmlAndExecuteScripts = insertHtmlAndExecuteScripts;
      const nullToEmptyString = (e) => (null === e ? "-" : e);
      exports.nullToEmptyString = nullToEmptyString;
      const randomFloatFromInterval = (e, t, r) => {
        const a = Math.pow(10, r);
        return Math.round((Math.random() * (t - e) + e) * a) / a;
      };
      function getElementOffset(e) {
        let t = 0,
          r = 0,
          a = e;
        do {
          (t += a.offsetTop || 0),
            (r += a.offsetLeft || 0),
            (a = a.offsetParent);
        } while (a);
        return {
          top: t,
          left: r,
        };
      }
      exports.randomFloatFromInterval = randomFloatFromInterval;
      const getPromoName = (e) => {
        let t = e.get("promotitle");
        return (
          "string" == typeof t && (t = _immutable.default.Map(JSON.parse(t))),
          (t = getName(t)),
          t || e.get("promoname")
        );
      };
      exports.getPromoName = getPromoName;
      const getPromoNameUpperCase = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return getNameByObj(e.promoTitle) || e.promoName;
      };
      exports.getPromoNameUpperCase = getPromoNameUpperCase;
      const getPromoHistoryPromoName = (e, t) => {
        let r;
        const a = e.promotype;
        switch (a) {
          case _enum.promoTypeEnum.MANUAL_BONUS:
            if (t && "jun88" === code) break;
            r = _enum.promoType[a];
            break;
          default:
            r = getPromoName(_immutable.default.fromJS(e));
        }
        return r;
      };
      exports.getPromoHistoryPromoName = getPromoHistoryPromoName;
      const filterComp = (e, t) =>
        (_config.default.brand.accountFilter || []).includes(e) ? null : t;
      exports.filterComp = filterComp;
      const getResizedImg = (e) => {
        let { file: t, customizedWidth: r = 300 } = e;
        return new Promise((e) => {
          if (!t || t.size <= 1048576 || !window.File || !window.FileReader)
            e(t);
          else {
            const { width: a, height: n, name: o, type: _ } = t,
              E = new FileReader();
            E.readAsDataURL(t),
              (E.onload = (E) => {
                const i = new Image();
                (i.src = E.target.result),
                  (i.onload = (E) => {
                    const i = document.createElement("canvas");
                    if (i.getContext) {
                      const s = a <= r ? a : r,
                        T = parseFloat(s / a);
                      (i.width = s), (i.height = n * T);
                      const A = i.getContext("2d");
                      A
                        ? (A.scale(T, T),
                          A.drawImage(E.target, 0, 0),
                          i.toBlob((t) => {
                            e(
                              new File([t], o, {
                                type: _,
                              })
                            );
                          }))
                        : e(t);
                    } else e(t);
                  });
              });
          }
        });
      };
      exports.getResizedImg = getResizedImg;
      const getUrlQuery = (e) => _queryString.default.parse(e.substr(1));
      function delayPromise(e) {
        return new Promise((t) => {
          setTimeout(() => t(), e);
        });
      }
      exports.getUrlQuery = getUrlQuery;
      const getRouletteName = (e) =>
        getName(e.get("rouletteECName")) || e.get("rouletteName");
      exports.getRouletteName = getRouletteName;
      const getGameProviderByTypes = (e, t) =>
        e && 0 !== e.size
          ? t.map((t) => e.get(t, _immutable.default.Map()).toArray())
          : new Array(t.length).fill([]);
      exports.getGameProviderByTypes = getGameProviderByTypes;
      const isAeSevenProvider = (e, t) => "AE_SEVEN" === e && "baccarat" === t;
      exports.isAeSevenProvider = isAeSevenProvider;
      const checkThirdPartyRedirectUriEnter = (e, t) => {
        const r = location.hash.slice(1),
          {
            state: a,
            access_token: n,
            code: o,
            sdkToken: _,
          } = Object.keys(_queryString.default.parse(r)).length > 0
            ? _queryString.default.parse(r)
            : getUrlQuery(location.search),
          E = n || o || _;
        if (a) {
          const { thirdPartyType: r, path: n } = JSON.parse(a),
            o = (r, a) => {
              n && r && (t && t(), e.push(a));
            };
          r === _enums.thirdPartyTypeEnum.FACEBOOK
            ? o(E, `${n}${location.hash}`)
            : (r === _enums.thirdPartyTypeEnum.GOOGLE ||
                r === _enums.thirdPartyTypeEnum.TELEGRAM ||
                r === _enums.thirdPartyTypeEnum.LINE ||
                r === _enums.thirdPartyTypeEnum.ZALO) &&
              o(E, `${n}${location.search}`);
        }
      };
      exports.checkThirdPartyRedirectUriEnter = checkThirdPartyRedirectUriEnter;
      const getValueWithoutFirstLastSpace = (e) =>
        e.replace(/(^\s*)|(\s*$)/g, "");
      exports.getValueWithoutFirstLastSpace = getValueWithoutFirstLastSpace;
      const getCRICAccessToken = (e) =>
        e ? e.substring(e.indexOf("=") + 1, e.indexOf("&")) : e;
      exports.getCRICAccessToken = getCRICAccessToken;
      const getURLAccessToken = (e) => {
        const t = new URL(e).searchParams;
        let r = "";
        return t.has("token") && (r = t.get("token")), r;
      };
      exports.getURLAccessToken = getURLAccessToken;
      const isLaunchGameUrl = (e) => e === _routesConst.default.LAUNCHGAME;
      exports.isLaunchGameUrl = isLaunchGameUrl;
      const getTextTransform = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : _immutable.default.Map();
        const t = e.get(_locale.currLocale),
          r = e.get("other");
        switch (t || r) {
          case "UPPER_CASE":
            return (e) => {
              const t = e.target.selectionStart;
              (e.target.value = e.target.value.toUpperCase()),
                e.target.setSelectionRange(t, t);
            };
          case "LOWER_CASE":
            return (e) => {
              const t = e.target.selectionStart;
              (e.target.value = e.target.value.toLowerCase()),
                e.target.setSelectionRange(t, t);
            };
          default:
            return () => {};
        }
      };
      exports.getTextTransform = getTextTransform;
      const waitForElement = function (e) {
        let t =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : {
                interval: 200,
                maxAttempts: 10,
              };
        return new Promise((r, a) => {
          e ||
            a(
              new Error(
                "Selector not provided. Please provide a valid selector."
              )
            );
          let n = 0;
          const o = () => {
            const _ = document.querySelector(e);
            _ && _.offsetHeight
              ? r(_)
              : (n++,
                n < t.maxAttempts
                  ? setTimeout(o, t.interval)
                  : a(new Error(`Failed to find element with selector ${e}`)));
          };
          o();
        });
      };
      exports.waitForElement = waitForElement;
      const changeLoadingList = [
          "wjslot",
          "k36",
          "k36prov",
          "k36prop",
          "k36proi",
        ],
        loadingPageDone = (e) => {
          if ((changeLoadingList.includes(code) && "home" === e) || !e) {
            document.documentElement.classList.add("loaded");
            let e = document.querySelector(".app-loading");
            if ((e || (e = document.querySelector(".app-loading-custom")), e)) {
              const t =
                null != htmlLoading && htmlLoading.animate
                  ? (null == htmlLoading
                      ? void 0
                      : htmlLoading.animationDelay) || 1e3
                  : 500;
              (null != htmlLoading && htmlLoading.animate) ||
                (e.style.opacity = 0),
                (document.querySelector("#root").style.display = "block"),
                setTimeout(() => {
                  e.remove();
                }, t);
            }
          }
        };
      exports.loadingPageDone = loadingPageDone;
      const launchGameByHtml = (e) => {
        window.document.open(),
          window.document.write(e),
          window.document.close();
      };
      exports.launchGameByHtml = launchGameByHtml;
      const isEmpty = (e) => {
        switch (
          Object.prototype.toString.call(e).replace(/object|\[|\]|\s/g, "")
        ) {
          case "Undefined":
          case "Null":
          default:
            return !0;
          case "Number":
            return isNaN(e) || 0 === String(e).length;
          case "String":
            return 0 === e.length;
          case "Object":
          case "Array":
            return !1;
        }
      };
      exports.isEmpty = isEmpty;
      const getBankName = (e) =>
        (null == e ? void 0 : e.langdisplayname) ||
        (null == e ? void 0 : e.bankname) ||
        "";
      exports.getBankName = getBankName;
      const isT18Group = () =>
        ["r39bet", "lv68", "t38prod", "t68prod", "ta2prod"].includes(code);
      exports.isT18Group = isT18Group;
      const getCleanContent = (e, t) => {
        if ("string" != typeof e) return e;
        let r = e.replace(/<table[^>]*>[\s\S]*?<\/table>/g, "");
        return (
          (r = r.replace(
            /<(?!\/?(h[1-6]|span|p|a|ul|ol|li|strong|em)(?=>|\s.*>))\/?.*?>/g,
            ""
          )),
          t ? r : r.replace(/<a[^>]*>([\s\S]*?)<\/a>/g, "$1")
        );
      };
      exports.getCleanContent = getCleanContent;
      const getSSVipGroup = (e) => {
        const t = "string" == typeof e;
        return "number" == typeof e
          ? Object.keys(_enum.ssvipGroupEnum).find(
              (t) => _enum.ssvipGroupEnum[t] === e
            )
          : t
          ? _enum.ssvipGroupEnum[e]
          : void 0;
      };
      exports.getSSVipGroup = getSSVipGroup;
    },
    93628: (e, t, r) => {
      "use strict";
      var a = r(48648),
        n = r(71064),
        o = r(7176);
      e.exports = a
        ? function (e) {
            return a(e);
          }
        : n
        ? function (e) {
            if (!e || ("object" != typeof e && "function" != typeof e))
              throw new TypeError("getProto: not an object");
            return n(e);
          }
        : o
        ? function (e) {
            return o(e);
          }
        : null;
    },
    94188: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.portal =
          t.locales =
          t.localeAutoSelected =
          t.defaultTelCountry =
          t.defaultLocale =
          t.defaultCurrency =
          t.default =
          t.brand =
            void 0);
      var n = a(r(86462));
      const o =
          {}[a(r(31653)).default.getCurrency() || n.default.defaultCurrency] ||
          {},
        _ = {
          ...n.default,
          defaultTelCountry: o.defaultTelCountry || n.default.defaultTelCountry,
          defaultCurrency: o.defaultCurrency || n.default.defaultCurrency,
          isChangeCurrency: n.default.defaultCurrency !== o.defaultCurrency,
        },
        {
          brand: E,
          locales: i,
          defaultLocale: s,
          defaultCurrency: T,
          defaultTelCountry: A,
          localeAutoSelected: S,
          portal: l,
        } = _;
      (t.portal = l),
        (t.localeAutoSelected = S),
        (t.defaultTelCountry = A),
        (t.defaultCurrency = T),
        (t.defaultLocale = s),
        (t.locales = i),
        (t.brand = E),
        (t.default = _);
    },
    94459: (e) => {
      "use strict";
      e.exports =
        Number.isNaN ||
        function (e) {
          return e != e;
        };
    },
    94634: (e) => {
      function t() {
        return (
          (e.exports = t =
            Object.assign
              ? Object.assign.bind()
              : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                    var r = arguments[t];
                    for (var a in r)
                      ({}).hasOwnProperty.call(r, a) && (e[a] = r[a]);
                  }
                  return e;
                }),
          (e.exports.__esModule = !0),
          (e.exports.default = e.exports),
          t.apply(null, arguments)
        );
      }
      (e.exports = t),
        (e.exports.__esModule = !0),
        (e.exports.default = e.exports);
    },
    96351: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.tawk = void 0);
      const r = {
        loaded: () => Promise.resolve(),
        setUserAttribute: () => {},
        on: () => () => {},
      };
      t.tawk = (function () {
        const e = window.Tawk_API,
          t = new EventTarget();
        if (void 0 === e) return r;
        const a = e.onLoaded
            ? Promise.resolve()
            : new Promise((r) => {
                e.onLoad = () => {
                  const e = new Event("load");
                  t.dispatchEvent(e), r();
                };
              }),
          n = {};
        return {
          loaded: () => a,
          setUserAttribute: (r) => {
            const a = {};
            for (const e of Object.keys(r))
              r[e] !== n[e] && ((a[e] = r[e]), (n[e] = r[e]));
            0 !== Object.keys(a).length &&
              e.setAttributes(a, (e) => {
                e &&
                  t.dispatchEvent(
                    new ErrorEvent("error", {
                      error: new Error(e),
                      message: e,
                    })
                  );
              });
          },
          on: (e, r) => (
            t.addEventListener(e, r),
            () => {
              t.removeEventListener(e, r);
            }
          ),
        };
      })();
    },
    96540: (e, t, r) => {
      "use strict";
      e.exports = r(15287);
    },
    96685: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(36697),
        n = r(62144);
      t.default = (e) => (t) => {
        let { dispatch: r, getState: o } = t;
        return (t) => (_) => {
          if ("function" == typeof _) return _(r, o);
          const {
            continuousActions: E,
            promises: i,
            promiseType: s,
            types: T,
            ...A
          } = _;
          let S = null;
          if (!i) return t(_);
          switch (s) {
            case "all":
              S = Promise.all(i.map((t) => t(e)));
              break;
            case "race":
              S = Promise.race(i.map((t) => t(e)));
              break;
            default:
              Array.isArray(i) && i.length > 0 && (S = i[0](e));
          }
          const l = "PUT|POST|DELETE".includes(S.method),
            [u, c, R] = T;
          return (
            t({
              ...A,
              type: u,
              isLoading: !0,
              isSendingDeletePostPut: l,
            }),
            null !== S
              ? S.then((e) => {
                  let a, o;
                  return (
                    "all" === s
                      ? (a = e.map(
                          (e) => (e.newToken && (o = e.newToken), e.payload)
                        ))
                      : ((o = e.newToken), (a = e.payload)),
                    o &&
                      r({
                        type: n.UPDATE_TOKEN,
                        token: o,
                      }),
                    E &&
                      E.forEach((e) => {
                        "function" == typeof e && r(e());
                      }),
                    t({
                      ...A,
                      payload: a,
                      type: c,
                      isLoading: !1,
                      isSendingDeletePostPut: !1,
                    }),
                    e
                  );
                }).catch((e) => {
                  if (e instanceof Error) return console.error(e);
                  switch (e.code) {
                    case 401:
                      t({
                        type: n.POST_LOGOUT_SUCCESS,
                        unauthorized: !0,
                      });
                      break;
                    case 403:
                    case 429:
                      t({
                        ...A,
                        ...e,
                        type: a.API_ERROR_CODE_498,
                        constant: a.API_FORBIDDEN_ERROR,
                      });
                      break;
                    case 498:
                      t({
                        ...A,
                        ...e,
                        type: a.API_ERROR_CODE_498,
                        constant: R,
                      });
                      break;
                    case 499:
                    case 500:
                      t({
                        ...A,
                        ...e,
                        type: a.API_ERROR_CODE_498,
                        constant: a.API_INTERNAL_ERROR_CODE,
                      });
                      break;
                    default:
                      e.code &&
                        t({
                          ...A,
                          ...e,
                          type: a.API_ERROR_CODE_498,
                          constant: a.API_INTERNAL_ERROR_CODE,
                          exception: !0,
                        }),
                        "players/POST_REGISTER_FAILURE" === R &&
                          0 === e.code &&
                          t({
                            ...A,
                            ...e,
                            type: a.API_ERROR_CODE_498,
                            constant: a.API_FORBIDDEN_ERROR,
                          });
                  }
                  return (
                    t({
                      ...A,
                      error: e,
                      type: R,
                      isLoading: !1,
                      isSendingDeletePostPut: !1,
                    }),
                    "players/POST_REGISTER_FAILURE" === R ? e : void 0
                  );
                })
              : t(_)
          );
        };
      };
    },
    96897: (e, t, r) => {
      "use strict";
      var a = r(70453),
        n = r(30041),
        o = r(30592)(),
        _ = r(75795),
        E = r(69675),
        i = a("%Math.floor%");
      e.exports = function (e, t) {
        if ("function" != typeof e) throw new E("`fn` is not a function");
        if ("number" != typeof t || t < 0 || t > 4294967295 || i(t) !== t)
          throw new E("`length` must be a positive 32-bit integer");
        var r = arguments.length > 2 && !!arguments[2],
          a = !0,
          s = !0;
        if ("length" in e && _) {
          var T = _(e, "length");
          T && !T.configurable && (a = !1), T && !T.writable && (s = !1);
        }
        return (
          (a || s || !r) && (o ? n(e, "length", t, !0, !0) : n(e, "length", t)),
          e
        );
      };
    },
    97236: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var r,
              a,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((r = t)) {
              if (r.has(e)) return r.get(e);
              r.set(e, n);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (r = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? r(n, t, a)
                  : (n[t] = e[t]));
            return n;
          })(e);
        })(r(82470)),
        o = r(72596),
        _ = a(r(9404));
      const E = {
        isShowThirdPartyLogin: !1,
        thirdPartyLoginRegSetting: _.default.Map({
          mobile: _.default.Map(),
        }),
      };
      t.default = function () {
        let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : E,
          t = arguments.length > 1 ? arguments[1] : void 0;
        if (t.type === n.GET_THIRD_PARTY_LOGIN_SETTING_SUCCESS) {
          const { thirdPartyLoginConfig: r, thirdPartyLoginRegSetting: a } =
              t.payload,
            n = (0, o.getThirdPartyTypes)(r).length > 0;
          return {
            ...e,
            isShowThirdPartyLogin: n,
            thirdPartyLoginRegSetting: _.default.fromJS(a),
          };
        }
        return e;
      };
    },
    97856: (e, t, r) => {
      "use strict";
      var a = r(69675),
        n = r(9957),
        o = r(55701);
      e.exports = function (e) {
        if (void 0 === e) return !1;
        if (!o(e))
          throw new a("Assertion failed: `Desc` must be a Property Descriptor");
        return !(!n(e, "[[Value]]") && !n(e, "[[Writable]]"));
      };
    },
    98311: (e) => {
      "use strict";
      e.exports = function () {
        if ("function" != typeof Promise)
          throw new TypeError(
            "`Promise.prototype.finally` requires a global `Promise` be available."
          );
      };
    },
    99039: (e, t, r) => {
      "use strict";
      var a = r(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(r(94188)),
        o = r(55594);
      const { ga: _ } = n.default.brand;
      let E = "";
      try {
        E = r(32046).A;
      } catch (e) {}
      t.default = () => {
        const e = (0, o.getURLParams)("ga") || (0, o.getDomainId)(E) || _;
        e &&
          (0, o.pageLoadedAction)(() => {
            (Array.isArray(e) ? e : [e]).forEach((e) => {
              const t = document.createElement("script");
              (t.async = !0),
                (t.src = `https://www.googletagmanager.com/gtag/js?id=${e}`);
              const r = document.createElement("script"),
                a = `\n            window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);}\n            gtag('js', new Date()); gtag('config', '${e}');\n          `;
              r.appendChild(document.createTextNode(a)),
                document.head.appendChild(t),
                document.head.appendChild(r);
            });
          });
      };
    },
  },
  (e) => {
    e.O(0, [2394, 2365, 4121], () => e((e.s = 72980))), e.O();
  },
]);
