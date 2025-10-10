(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [6722],
  {
    4213: function (e, t, n) {
      var r, a;
      void 0 ===
        (a =
          "function" ==
          typeof (r = function () {
            "use strict";
            function t(e, t, n) {
              var r = new XMLHttpRequest();
              r.open("GET", e),
                (r.responseType = "blob"),
                (r.onload = function () {
                  l(r.response, t, n);
                }),
                (r.onerror = function () {
                  console.error("could not download file");
                }),
                r.send();
            }
            function r(e) {
              var t = new XMLHttpRequest();
              t.open("HEAD", e, !1);
              try {
                t.send();
              } catch (e) {}
              return 200 <= t.status && 299 >= t.status;
            }
            function a(e) {
              try {
                e.dispatchEvent(new MouseEvent("click"));
              } catch (n) {
                var t = document.createEvent("MouseEvents");
                t.initMouseEvent(
                  "click",
                  !0,
                  !0,
                  window,
                  0,
                  0,
                  0,
                  80,
                  20,
                  !1,
                  !1,
                  !1,
                  !1,
                  0,
                  null
                ),
                  e.dispatchEvent(t);
              }
            }
            var i =
                "object" == typeof window && window.window === window
                  ? window
                  : "object" == typeof self && self.self === self
                  ? self
                  : "object" == typeof n.g && n.g.global === n.g
                  ? n.g
                  : void 0,
              o =
                i.navigator &&
                /Macintosh/.test(navigator.userAgent) &&
                /AppleWebKit/.test(navigator.userAgent) &&
                !/Safari/.test(navigator.userAgent),
              l =
                i.saveAs ||
                ("object" != typeof window || window !== i
                  ? function () {}
                  : "download" in HTMLAnchorElement.prototype && !o
                  ? function (e, n, o) {
                      var l = i.URL || i.webkitURL,
                        s = document.createElement("a");
                      (n = n || e.name || "download"),
                        (s.download = n),
                        (s.rel = "noopener"),
                        "string" == typeof e
                          ? ((s.href = e),
                            s.origin === location.origin
                              ? a(s)
                              : r(s.href)
                              ? t(e, n, o)
                              : a(s, (s.target = "_blank")))
                          : ((s.href = l.createObjectURL(e)),
                            setTimeout(function () {
                              l.revokeObjectURL(s.href);
                            }, 4e4),
                            setTimeout(function () {
                              a(s);
                            }, 0));
                    }
                  : "msSaveOrOpenBlob" in navigator
                  ? function (e, n, i) {
                      if (
                        ((n = n || e.name || "download"), "string" != typeof e)
                      )
                        navigator.msSaveOrOpenBlob(
                          (function (e, t) {
                            return (
                              void 0 === t
                                ? (t = {
                                    autoBom: !1,
                                  })
                                : "object" != typeof t &&
                                  (console.warn(
                                    "Deprecated: Expected third argument to be a object"
                                  ),
                                  (t = {
                                    autoBom: !t,
                                  })),
                              t.autoBom &&
                              /^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(
                                e.type
                              )
                                ? new Blob(["\ufeff", e], {
                                    type: e.type,
                                  })
                                : e
                            );
                          })(e, i),
                          n
                        );
                      else if (r(e)) t(e, n, i);
                      else {
                        var o = document.createElement("a");
                        (o.href = e),
                          (o.target = "_blank"),
                          setTimeout(function () {
                            a(o);
                          });
                      }
                    }
                  : function (e, n, r, a) {
                      if (
                        ((a = a || open("", "_blank")) &&
                          (a.document.title = a.document.body.innerText =
                            "downloading..."),
                        "string" == typeof e)
                      )
                        return t(e, n, r);
                      var l = "application/octet-stream" === e.type,
                        s = /constructor/i.test(i.HTMLElement) || i.safari,
                        u = /CriOS\/[\d]+/.test(navigator.userAgent);
                      if (
                        (u || (l && s) || o) &&
                        "undefined" != typeof FileReader
                      ) {
                        var d = new FileReader();
                        (d.onloadend = function () {
                          var e = d.result;
                          (e = u
                            ? e
                            : e.replace(
                                /^data:[^;]*;/,
                                "data:attachment/file;"
                              )),
                            a ? (a.location.href = e) : (location = e),
                            (a = null);
                        }),
                          d.readAsDataURL(e);
                      } else {
                        var c = i.URL || i.webkitURL,
                          f = c.createObjectURL(e);
                        a ? (a.location = f) : (location.href = f),
                          (a = null),
                          setTimeout(function () {
                            c.revokeObjectURL(f);
                          }, 4e4);
                      }
                    });
            (i.saveAs = l.saveAs = l), (e.exports = l);
          })
            ? r.apply(t, [])
            : r) || (e.exports = a);
    },
    5511: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = n(96540),
        i = r(n(12695)),
        o = r(n(7541)),
        l = n(29507),
        s = r(n(84636)),
        u = n(67467),
        d = n(28651),
        c = r(n(83736)),
        f = n(18740),
        p = n(76066),
        g = n(61444),
        m = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(94188)),
        h = n(83597),
        _ = n(56291),
        y = n(8087),
        v = n(26898),
        b = r(n(55929)),
        E = r(n(51767)),
        T = r(n(15062)),
        R = n(62144);
      const { code: S } = m.default.brand;
      t.default = (e) => {
        const t = (0, u.useDispatch)(),
          n = (0, d.useHistory)(),
          r = (0, o.default)(g.thirdPartyLoginBindUser),
          A = (0, o.default)(g.thirdPartyLoginBindRegister),
          [P, C] = (0, a.useState)("SystemAccountForm"),
          [N, L] = (0, a.useState)(!1),
          [O, I] = (0, a.useState)({
            systemPlayerPageEnabled: !0,
            randomAccPwdEnabled: !0,
            mobile: {},
          }),
          [j, w] = (0, a.useState)({}),
          k = (0, i.default)(),
          { getAdjustEventParameters: M } = (0, l.useAdjustEventContext)(),
          x = (0, a.useCallback)(() => {
            n.push(T.default.ROOT);
          }, []);
        return (
          (0, c.default)(async () => {
            t((0, g.getThirdPartyLoginSetting)()).then((e) => {
              let { payload: t } = e;
              const { thirdPartyLoginRegSetting: n } = t;
              I(n);
              const r = ["jun88", "te1prod", "vipunc"].includes(S)
                ? "ExistingAccountForm"
                : n.systemPlayerPageEnabled
                ? "SystemAccountForm"
                : "ExistingAccountForm";
              C(r);
            });
            const e = _.ulagentCookie.get(),
              n = _.affiliateCookie.get(),
              r = await Promise.all([
                e ? t((0, f.isAgentExist)(e, !0)) : Promise.resolve(),
                n ? t((0, p.checkAffiliate)(n)) : Promise.resolve(),
              ]);
            let a = {};
            if (
              (r[0] && (a.ulAgentAccount = r[0]),
              k.isAgentDomain && k.isUlagent && (a.ulAgentAccount = k.account),
              r[1])
            ) {
              const { bindAffiliateUlAgentEnable: e, ulAgentAccount: t } =
                r[1].payload;
              e && t && (a.ulAgentAccount = t), (a.affiliateId = n);
            }
            w(a);
          }),
          {
            tabIndex: P,
            setTabIndex: C,
            onClose: x,
            onSubmit: async (n) => {
              let { loginName: a, loginPassword: i, ...o } = n;
              const {
                  thirdPartyType: u,
                  fingerPrint: d,
                  thirdPartyToken: c,
                  portalId: f,
                } = e,
                { display: p } = O.mobile,
                g = "ExistingAccountForm" === P;
              let T = {
                thirdPartyType: u,
                fingerPrint: d,
                thirdPartyToken: c,
                loginName: a,
                loginPassword: (0, E.default)(i, a),
                portalId: h.isNativeApp
                  ? y.portalIdEnum.APP
                  : f || y.portalIdEnum.MOBILE,
                currency: m.defaultCurrency,
              };
              if (
                (p &&
                  (o.mobile && o.mobile.split(" ")[1] && (T.mobile = o.mobile),
                  o.verificationcode &&
                    (T.verificationcode = o.verificationcode)),
                !g)
              ) {
                const e = M({
                  eventType: l.adjustEventTypeEnum.SIGNUP,
                });
                T = {
                  ...T,
                  ...j,
                  ...(0, b.default)(T),
                  ...e,
                };
              }
              const S = g ? r : A;
              L(!0),
                S(T)
                  .then((e) => {
                    g ||
                      (v.startEvent.registration({
                        ...e,
                        playerid: e.playerId,
                        eventID: (0, s.default)(e.playerId).toString(),
                      }),
                      _.ulagentCookie.remove(),
                      _.affiliateCookie.remove()),
                      t({
                        type: R.AJAX_POST_LOGIN_SUCCESS,
                        payload: e,
                        playerid: e.playerId,
                      }),
                      x();
                  })
                  .finally(() => {
                    L(!1);
                  });
            },
            submitLoading: N,
            isSystemPlayerPageEnabled: O.systemPlayerPageEnabled,
            isRandomAccPwdEnabled: O.randomAccPwdEnabled,
          }
        );
      };
    },
    12421: (e, t, n) => {
      "use strict";
      var r = n(24994);
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
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = n(79972),
        o = n(50115),
        l = r(n(46942)),
        s = r(n(80067)),
        u = r(n(13393)),
        d = n(8087),
        c = r(n(35517)),
        f = n(74848);
      const p = (0, c.default)();
      t.default = (e) => {
        const {
            disabled: t,
            name: n,
            info: r,
            isShowInputAction: c = !1,
            ...g
          } = e,
          [m, h] = (0, a.useState)(!1),
          {
            values: _,
            touched: y,
            errors: v,
            setFieldTouched: b,
          } = (0, i.useFormikContext)(),
          E = (0, i.getIn)(_, n),
          T = (0, i.getIn)(y, n),
          R = (0, i.getIn)(v, n);
        return (0, f.jsx)("div", {
          className: (0, l.default)("member-center-mobile-field", {
            required: !!g.required,
          }),
          children: (0, f.jsxs)(f.Fragment, {
            children: [
              t
                ? (0, f.jsx)(s.default, {
                    mobile: E,
                    label: g.label,
                    isTouched: T,
                    error: R,
                  })
                : (0, f.jsx)(o.MobileField, {
                    className: "mobile-field",
                    name: n,
                    defaultCountry: d.defaultTelCountry,
                    onlyCountries: p,
                    info: r,
                    onFocus: () => {
                      h(!0);
                    },
                    onBlur: () => {
                      h(!1), b(n, !0);
                    },
                    MobileInputAction:
                      c &&
                      (0, f.jsx)(u.default, {
                        name: n,
                        isFocus: m,
                      }),
                    ...g,
                  }),
              r &&
                !(T && R) &&
                (0, f.jsxs)("div", {
                  className: "info-msg",
                  children: [
                    (0, f.jsx)("i", {
                      className: "icon-info",
                    }),
                    (0, f.jsx)("small", {
                      children: r,
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    18740: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.registerAgent =
          t.isAgentExist =
          t.getAgentSignupSetting =
          t.getAgentBankList =
          t.getAgentBankCardSetting =
          t.checkUlagentWithAlert =
          t.checkUlagent =
          t.checkAgentWithAlert =
          t.checkAgent =
          t.agentLookup =
            void 0);
      var a = r(n(27179)),
        i = r(n(32080)),
        o = c(n(68686)),
        l = n(56291),
        s = r(n(51767)),
        u = c(n(67618)),
        d = c(n(36697));
      function c(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (c = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            i,
            o = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, o);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? a(o, t, i)
                : (o[t] = e[t]));
          return o;
        })(e, t);
      }
      (t.isAgentExist = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return (n) =>
          (0, i.default)({
            url: `${o.baseURL}${o.default.agentsURL}/${e}?ulagent=${t}`,
            method: "GET",
          })
            .then(() => {
              const n = a.default.get("pix-s2s");
              return (
                n && (delete n.path, a.default.set("pix-s2s", n)),
                t ? l.ulagentCookie.set(e) : l.agentCookie.set(e),
                e
              );
            })
            .catch((e) => {
              let r;
              if (t) {
                (r = u.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE),
                  l.ulagentCookie.remove();
                const e = a.default.get("pix-s2s");
                e &&
                  (delete e.path, delete e.uagt, a.default.set("pix-s2s", e));
              } else
                (r = u.GET_CHECK_AGENT_WITH_ALERT_FAILURE),
                  l.agentCookie.remove();
              n({
                ...e,
                type: d.API_ERROR_CODE_498,
                constant: 498 === e.code ? r : d.API_INTERNAL_ERROR_CODE,
              });
            });
      }),
        (t.checkAgent = (e) => ({
          types: [
            u.GET_CHECK_AGENT_REQUEST,
            u.GET_CHECK_AGENT_SUCCESS,
            u.GET_CHECK_AGENT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${o.baseURL}${o.default.agentsURL}/${e}`,
                method: "GET",
              }),
          ],
          agentid: e,
        })),
        (t.checkAgentWithAlert = (e) => ({
          types: [
            u.GET_CHECK_AGENT_WITH_ALERT_REQUEST,
            u.GET_CHECK_AGENT_WITH_ALERT_SUCCESS,
            u.GET_CHECK_AGENT_WITH_ALERT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${o.baseURL}${o.default.agentsURL}/${e}`,
                method: "GET",
              }),
          ],
          agentid: e,
        })),
        (t.checkUlagent = (e) => ({
          types: [
            u.GET_CHECK_ULAGENT_REQUEST,
            u.GET_CHECK_ULAGENT_SUCCESS,
            u.GET_CHECK_ULAGENT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${o.baseURL}${o.default.agentsURL}/${e}?ulagent=true`,
                method: "GET",
              }),
          ],
          ulagentAccount: e,
        })),
        (t.checkUlagentWithAlert = (e) => ({
          types: [
            u.GET_CHECK_ULAGENT_WITH_ALERT_REQUEST,
            u.GET_CHECK_ULAGENT_WITH_ALERT_SUCCESS,
            u.GET_CHECK_ULAGENT_WITH_ALERT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${o.baseURL}${o.default.agentsURL}/${e}?ulagent=true`,
                method: "GET",
              }),
          ],
          ulagentAccount: e,
        })),
        (t.registerAgent = function (e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return {
            types: [null, null, u.POST_REGISTER_AGENT_FAILURE],
            promiseType: "",
            promises: [
              (n) =>
                n({
                  url: `${o.baseURL}${o.default.agentsURL}/register`,
                  method: "POST",
                  formData: {
                    ...e,
                    password: (0, s.default)(e.password, e.agentid),
                    ulagentFlag: t,
                  },
                }),
            ],
          };
        }),
        (t.agentLookup = function (e) {
          let t =
            !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
          return (0, i.default)({
            url: `${o.baseURL}${o.default.agentsURL}/register/idlist?q=${e}&ulagent=${t}`,
            method: "GET",
          });
        }),
        (t.getAgentSignupSetting = () =>
          (0, i.default)({
            url: `${o.baseURL}${o.default.agentsURL}/register/setting`,
            method: "GET",
          })),
        (t.getAgentBankCardSetting = () =>
          (0, i.default)({
            url: `${o.baseURL}${o.default.agentsURL}/bankCard/setting`,
            method: "GET",
          })),
        (t.getAgentBankList = (e) => {
          const t = new URLSearchParams(e).toString();
          return (0, i.default)({
            url: `${o.baseURL}${o.default.agentsURL}/bankList?${t}`,
            method: "GET",
          });
        });
    },
    27335: (e, t, n) => {
      "use strict";
      var r = n(24994);
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
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = (r(n(5556)), n(79972)),
        o = n(57348),
        l = r(n(46942)),
        s = r(n(36689)),
        u = n(83597),
        d = n(74848);
      const c = (e) => {
        let {
          className: t,
          type: n,
          label: r,
          name: c,
          actions: f,
          isRequired: p,
          info: g,
          disabled: m,
          contentClassName: h,
          onChange: _,
          placeholder: y,
          prefixchar: v = "",
          isHideInfoWithErr: b = !1,
          transformTextCase: E,
          readOnly: T,
          renderReadOnlyView: R,
          ...S
        } = e;
        const {
            values: A,
            touched: P,
            errors: C,
            setFieldValue: N,
            setFieldTouched: L,
          } = (0, i.useFormikContext)(),
          O = (0, i.getIn)(A, c),
          I = (0, i.getIn)(P, c),
          j = (0, i.getIn)(C, c),
          [w, k] = (0, a.useState)(!1),
          [M, x] = (0, a.useState)(n),
          [U, G] = (0, a.useState)(O),
          [D] = (0, o.useDebounce)(U, 300),
          H = v.length > 0,
          W = b && Object.keys(C).length > 0;
        (0, a.useEffect)(() => {
          U !== O && G(O);
        }, [O]),
          (0, a.useEffect)(() => {
            D !== O &&
              D === U &&
              (_ && _(D), "date" !== n && "time" !== n && N(c, D));
          }, [D, _]);
        const F = (0, a.useMemo)(
            () => ({
              deleteFocus: () => {
                N(c, "");
              },
              delete: () => {
                N(c, "");
              },
              hind: () => {
                x((e) => ("password" === e ? "text" : "password"));
              },
            }),
            [N, c]
          ),
          $ = (0, a.useMemo)(
            () =>
              f.length > 0 &&
              (0, d.jsx)("div", {
                className: "action-block",
                children: f.map((e, t) =>
                  (0, d.jsx)(
                    s.default,
                    {
                      actionName: e,
                      value: O,
                      inputType: M,
                      isFocus: w,
                      onActionTrigger: F[e],
                    },
                    `action-${t}`
                  )
                ),
              }),
            [f, F, M, O, w]
          ),
          B = (0, a.useCallback)((e) => {
            E && E(e), G(e.target.value);
          }, []),
          q = (0, a.useCallback)(() => {
            k(!0);
          }, []),
          Y = (0, a.useCallback)(() => {
            k(!1), L(c, !0);
          }, [L, c]),
          K = u.isNativeApp
            ? {}
            : {
                autoComplete: "new-password",
                max: new Date().toDateString(),
              };
        return (0, d.jsxs)("div", {
          className: (0, l.default)("m-input-field", {
            [t]: !!t,
          }),
          children: [
            (0, d.jsxs)("div", {
              className: (0, l.default)("content", {
                "not-empty": (null != U && "" !== U) || "date" === n || H,
                focus: w,
                placeholder: !!y,
                error: I && j,
                required: p,
                disabled: m,
                "has-prefix": H,
                [h]: !!h,
              }),
              children: [
                (0, d.jsxs)("div", {
                  className: "input-block",
                  children: [
                    r &&
                      (0, d.jsx)("label", {
                        htmlFor: c,
                        children: r,
                      }),
                    H &&
                      (0, d.jsx)("div", {
                        className: "prefix",
                        children: v,
                      }),
                    T && U && R && R(U),
                    (0, d.jsx)("input", {
                      id: c,
                      type: T && R ? "hidden" : M,
                      value: U,
                      placeholder: y,
                      onChange: B,
                      onFocus: q,
                      onBlur: Y,
                      disabled: m,
                      readOnly: T,
                      ...K,
                      ...S,
                    }),
                  ],
                }),
                $,
              ],
            }),
            I &&
              j &&
              (0, d.jsxs)("div", {
                className: "error-msg",
                children: [
                  (0, d.jsx)("i", {
                    className: "icon-info",
                  }),
                  (0, d.jsx)("small", {
                    children: j,
                  }),
                ],
              }),
            g &&
              !(I && j) &&
              !W &&
              (0, d.jsxs)("div", {
                className: "info-msg",
                children: [
                  (0, d.jsx)("i", {
                    className: "icon-info",
                  }),
                  (0, d.jsx)("small", {
                    children: g,
                  }),
                ],
              }),
          ],
        });
      };
      (c.defaultProps = {
        type: "text",
        actions: [],
        isRequired: !1,
      }),
        (t.default = c);
    },
    34767: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(n(60076));
      n(62678), (t.default = a.default);
    },
    36689: (e, t, n) => {
      "use strict";
      var r = n(24994);
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
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = (r(n(5556)), r(n(46942))),
        o = n(74848);
      const l = {
          deleteFocus: (e) => {
            let { onActionTrigger: t, value: n, isFocus: r } = e;
            const [i, l] = (0, a.useState)(!1);
            return (
              (0, a.useEffect)(() => {
                setTimeout(() => l(r), 50);
              }, [r]),
              n &&
                i &&
                (0, o.jsx)("div", {
                  onClick: t,
                  children: (0, o.jsx)("i", {
                    className: "mps-close",
                  }),
                })
            );
          },
          delete: (e) => {
            let { onActionTrigger: t } = e;
            return (0, o.jsx)("div", {
              onClick: t,
              children: (0, o.jsx)("i", {
                className: "mps-close",
              }),
            });
          },
          hind: (e) => {
            let { inputType: t, onActionTrigger: n } = e;
            const r = (0, a.useMemo)(() => "password" === t, [t]);
            return (0, o.jsx)("div", {
              onClick: n,
              children: (0, o.jsx)("i", {
                className: (0, i.default)({
                  d20_small_show: !r,
                  d20_small_hide: r,
                }),
              }),
            });
          },
        },
        s = (e) => {
          let { actionName: t, ...n } = e;
          const r = l[t];
          return r
            ? (0, o.jsx)(r, {
                ...n,
              })
            : null;
        };
      (s.defaultProps = {
        onActionTrigger: () => {},
      }),
        (t.default = s);
    },
    41935: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(n(12421));
      n(59066), (t.default = a.default);
    },
    51767: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e, t) {
          return (
            (t = t || i.default.get("playerid") || "lhGaeLmCJg"),
            (0, a.default)(e, t).toString()
          );
        });
      var a = r(n(17327)),
        i = r(n(27179));
    },
    55929: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(n(27179)),
        i = r(n(94188)),
        o = n(56291),
        l = n(27820);
      const {
          brand: { code: s },
        } = i.default,
        u = () => {
          let e = {};
          const t = {
            ta2prod: "s2sTa2prod",
            tb9prod: "s2sTa2prod",
            vipvnd: "s2sTa2prod",
          }[s];
          if (t) {
            const n = (0, o.getCookie)(t);
            n &&
              (e = {
                [t]: n,
              });
          }
          return e;
        };
      t.default = () => {
        const e = {},
          t = (0, l.getPixelS2SInfo)();
        t && (e.pixelInfo = t);
        const n = a.default.get("rpid");
        return (
          n && ((e.registerPromoId = n), a.default.remove("rpid")),
          {
            ...e,
            ...u(),
          }
        );
      };
    },
    57673: (e, t, n) => {
      "use strict";
      var r = n(24994);
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
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = r(n(30873)),
        o = n(51628),
        l = r(n(17965)),
        s = r(n(46942)),
        u = r(n(97771)),
        d = n(38560),
        c = n(74848);
      const f = {
        icon: {
          cursor: "pointer",
          marginLeft: "5px",
        },
      };
      t.default = (e) => {
        let {
          children: t,
          text: n,
          wrapperClass: r,
          childrenClass: p,
          iconClass: g,
          tooltip: m = !1,
          stopPropagation: h,
          tooltipPlace: _,
        } = e;
        const [y, v] = (0, a.useState)(!1),
          [b, E] = (0, a.useState)(u.default.v4()),
          T = (0, a.useRef)(null);
        let R;
        const S = _ || d.isMobile ? "left" : "top",
          A = (e) => {
            let t;
            return (
              (t = "copyText" === e ? (y ? o.i18n.copied : o.i18n.copy) : e), t
            );
          };
        return (0, c.jsxs)("div", {
          className: (0, s.default)("copy-text", {
            [r]: !!r,
          }),
          children: [
            t &&
              (0, c.jsxs)(c.Fragment, {
                children: [
                  (0, c.jsx)("span", {
                    className: (0, s.default)({
                      [p]: !!p,
                    }),
                    "data-tip": m ? n : "",
                    "data-for": `children${b}`,
                    "data-event": d.isMobile ? "click" : "",
                    children: t,
                  }),
                  (0, c.jsx)(i.default, {
                    id: `children${b}`,
                    effect: "solid",
                    place: S,
                    clickable: !0,
                    globalEventOff: d.isMobile ? "click" : "",
                    getContent: A,
                  }),
                ],
              }),
            (0, c.jsx)("i", {
              className: (0, s.default)("d20_small_copy", {
                [g]: !!g,
              }),
              style: f.icon,
              ref: T,
              "data-tip": "copyText",
              "data-for": b,
              onClick: (e) => {
                clearTimeout(R),
                  h && e.stopPropagation(),
                  i.default.show(T.current),
                  v(!0),
                  (0, l.default)(n),
                  d.isMobile &&
                    (R = setTimeout(() => {
                      i.default.hide(T.current);
                    }, 1500));
              },
            }),
            (0, c.jsx)(i.default, {
              id: b,
              effect: "solid",
              place: S,
              afterHide: () => {
                v(!1);
              },
              getContent: A,
            }),
          ],
        });
      };
    },
    59066: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    60076: (e, t, n) => {
      "use strict";
      var r = n(24994);
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
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = n(67467),
        o = n(79972),
        l = r(n(96384)),
        s = r(n(52468)),
        u = n(51628),
        d = n(38560),
        c = n(76066),
        f = n(74848);
      const p = n(73708)(
          `./${d.platform}/MemberCenter/Common/InputField`
        ).default,
        g = n(73896)(`./${d.platform}/MemberCenter/Common/MobileField`).default,
        m = (e) => {
          let { seconds: t, onEnd: n } = e;
          const r = (0, s.default)({
            seconds: t,
            onEnd: n,
            asSeconds: !0,
          });
          return (0, f.jsx)("span", {
            className: "verify-countdown",
            children: `${r} ${u.i18n.second}`,
          });
        };
      t.default = () => {
        const e = (0, i.useSelector)(
            (e) => e.thirdPartyLogin.thirdPartyLoginRegSetting
          ),
          t = null == e ? void 0 : e.getIn(["mobile", "display"]),
          n = null == e ? void 0 : e.getIn(["mobile", "required"]),
          r = null == e ? void 0 : e.getIn(["mobile", "validate"]),
          { errors: s, values: h } = (0, o.useFormikContext)(),
          [_, y] = (0, a.useState)(0),
          v = (0, i.useDispatch)();
        return t
          ? (0, f.jsxs)("div", {
              id: "thrid-party-login-System-mobile-wrapper",
              className: d.platform,
              children: [
                (0, f.jsx)("div", {
                  className: "mobile-input",
                  children: (0, f.jsx)(g, {
                    name: "mobile",
                    label: u.i18n.mobile,
                    isRequired: n,
                  }),
                }),
                r &&
                  (0, f.jsxs)("div", {
                    className: "verify-input",
                    children: [
                      (0, f.jsx)(p, {
                        name: "verificationcode",
                        label: u.i18n["mobile.validate.verification.code"],
                        isRequired: r,
                      }),
                      (0, f.jsx)(l.default, {
                        className: "send-code-btn",
                        disabled: s.mobile || !h.mobile || !!(_ > 0),
                        onClick: () => {
                          v(
                            (0, c.sendVerificationCodeToMobile)(h.mobile, !0)
                          ).then((e) => {
                            let { payload: t } = e;
                            y((null == t ? void 0 : t.countdown) || 299);
                          });
                        },
                        children:
                          _ > 0
                            ? (0, f.jsx)(m, {
                                seconds: _,
                                onEnd: () => {
                                  y(0);
                                },
                              })
                            : u.i18n["mobile.validate.send.verification.code"],
                      }),
                    ],
                  }),
              ],
            })
          : null;
      };
    },
    61444: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.thirdPartyLoginBindUser =
          t.thirdPartyLoginBindRegister =
          t.postThirdPartyLoginBindLoginUser =
          t.postThirdPartyLogin =
          t.getThirdPartyLoginSetting =
            void 0);
      var a = r(n(32080)),
        i = l(n(68686)),
        o = l(n(82470));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var n = new WeakMap(),
            r = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var a,
            i,
            o = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return o;
          if ((a = t ? r : n)) {
            if (a.has(e)) return a.get(e);
            a.set(e, o);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? a(o, t, i)
                : (o[t] = e[t]));
          return o;
        })(e, t);
      }
      const s = `${i.baseURL}${i.default.thirdPartyLoginURL}`;
      (t.getThirdPartyLoginSetting = () => ({
        types: [
          o.GET_THIRD_PARTY_LOGIN_SETTING_REQUEST,
          o.GET_THIRD_PARTY_LOGIN_SETTING_SUCCESS,
          o.GET_THIRD_PARTY_LOGIN_SETTING_FAILURE,
        ],
        promiseType: "",
        promises: [
          () =>
            (0, a.default)({
              url: `${s}/setting`,
              method: "GET",
            }),
        ],
      })),
        (t.postThirdPartyLogin = (e) => ({
          types: [
            o.POST_THIRD_PARTY_LOGIN_REQUEST,
            o.POST_THIRD_PARTY_LOGIN_SUCCESS,
            o.POST_THIRD_PARTY_LOGIN_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, a.default)({
                url: `${s}`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.thirdPartyLoginBindRegister = (e) => ({
          types: [
            o.THIRD_PARTY_LOGIN_BIND_REGISTER_REQUEST,
            o.THIRD_PARTY_LOGIN_BIND_REGISTER_SUCCESS,
            o.THIRD_PARTY_LOGIN_BIND_REGISTER_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, a.default)({
                url: `${s}/bindRegister`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.thirdPartyLoginBindUser = (e) => ({
          types: [
            o.THIRD_PARTY_LOGIN_BIND_USER_REQUEST,
            o.THIRD_PARTY_LOGIN_BIND_USER_SUCCESS,
            o.THIRD_PARTY_LOGIN_BIND_USER_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, a.default)({
                url: `${s}/bindUser`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.postThirdPartyLoginBindLoginUser = (e) => ({
          types: [
            o.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_REQUEST,
            o.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_SUCCESS,
            o.POST_THIRD_PARTY_LOGIN_BIND_LOGIN_USER_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, a.default)({
                url: `${s}/bind`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        }));
    },
    61675: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = r(n(27335));
      n(70344), (t.default = a.default);
    },
    62678: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    70344: (e, t, n) => {
      "use strict";
      n.r(t);
    },
    73708: (e, t, n) => {
      var r = {
        "./desktop/MemberCenter/Common/InputField": 25257,
        "./mobile/MemberCenter/Common/InputField": 61675,
      };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 73708);
    },
    73896: (e, t, n) => {
      var r = {
        "./desktop/MemberCenter/Common/MobileField": 26309,
        "./mobile/MemberCenter/Common/MobileField": 41935,
      };
      function a(e) {
        var t = i(e);
        return n(t);
      }
      function i(e) {
        if (!n.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (a.keys = function () {
        return Object.keys(r);
      }),
        (a.resolve = i),
        (e.exports = a),
        (a.id = 73896);
    },
    76322: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = n(96540),
        i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(68561)),
        o = n(67467),
        l = n(72596),
        s = n(51628),
        u = n(93185),
        d = r(n(66529)),
        c = r(n(98986)),
        f = r(n(21666)),
        p = n(1650),
        g = n(1007),
        m = n(76066);
      t.default = (e) => {
        let { onSubmit: t } = e;
        const n = (0, o.useSelector)((e) => e.players.registrationSetting),
          r = (0, o.useSelector)(
            (e) => e.thirdPartyLogin.thirdPartyLoginRegSetting
          ),
          h = (0, a.useMemo)(
            () =>
              (null == n
                ? void 0
                : n.getIn(["regsettingmap", "playerid", "prefixchar"])) || "",
            [n]
          ),
          _ = null == r ? void 0 : r.getIn(["mobile", "display"]),
          y = null == r ? void 0 : r.getIn(["mobile", "required"]),
          v = null == r ? void 0 : r.getIn(["mobile", "validate"]),
          b = (0, o.useDispatch)(),
          E = (0, a.useCallback)(() => {
            if (!n.size) return "";
            const e =
                (null == n
                  ? void 0
                  : n.getIn(["regsettingmap", "playerid", "prefixchar"])) || "",
              t = isNaN(
                Number(n.getIn(["regsettingmap", "playerid", "maxlength"]))
              )
                ? 0
                : Number(n.getIn(["regsettingmap", "playerid", "maxlength"])) -
                  e.length,
              r = n.getIn(["regsettingmap", "playerid", "alphabet"]),
              a = n.getIn(["regsettingmap", "playerid", "numeric"]);
            if (r) {
              if (a) {
                if (t <= 1) return (0, l.getRandomNumberChar)();
                const e = (0, l.getRandomSeeds)(Math.floor(t / 2)),
                  n = Array(t)
                    .fill(0)
                    .map((t, n) =>
                      e.includes(n)
                        ? (0, l.getRandomNumberChar)()
                        : (0, l.getRandomLowerChar)()
                    );
                return (
                  (n[t - 2] = (0, l.getRandomNumberChar)()),
                  (n[t - 1] = (0, l.getRandomLowerChar)()),
                  n.join("")
                );
              }
              return Array(t)
                .fill(0)
                .map(() => (0, l.getRandomLowerChar)())
                .join("");
            }
            return Array(t)
              .fill(0)
              .map(() => (0, l.getRandomNumberChar)())
              .join("");
          }, [n]),
          T = (0, a.useCallback)(() => {
            if (!n.size) return "";
            const e = Number(n.get("securitylevel")),
              t = (0, l.getRandomSeeds)(6),
              r = Array(12)
                .fill(0)
                .map((e, n) =>
                  t.includes(n)
                    ? (0, l.getRandomLowerChar)()
                    : (0, l.getRandomNumberChar)()
                );
            if (2 === e) {
              const e = (0, l.getRandomSeeds)(4);
              return r
                .map((t, n) =>
                  e.includes(n) ? (0, l.getRandomUpperChar)() : t
                )
                .join("");
            }
            if (e > 2) {
              const e = [...r];
              return (
                (0, l.getRandomSeeds)(4).forEach((t, n) => {
                  e[t] =
                    n < 2
                      ? (0, l.getRandomUpperChar)()
                      : (0, l.getRandomSymbolChar)();
                }),
                e.join("")
              );
            }
            return r.join("");
          }, [n]),
          R = (0, a.useMemo)(() => {
            const e =
                (null == n
                  ? void 0
                  : n.getIn(["regsettingmap", "playerid", "prefixchar"])) || "",
              t =
                Number(
                  null == n
                    ? void 0
                    : n.getIn(["regsettingmap", "playerid", "minlength"])
                ) - e.length,
              r =
                Number(
                  null == n
                    ? void 0
                    : n.getIn(["regsettingmap", "playerid", "maxlength"])
                ) - e.length,
              a =
                null == n
                  ? void 0
                  : n.getIn(["regsettingmap", "playerid", "alphabet"]),
              o =
                null == n
                  ? void 0
                  : n.getIn(["regsettingmap", "playerid", "numeric"]),
              l = Number(null == n ? void 0 : n.get("securitylevel")),
              m = i
                .string()
                .test("is-numeric", s.i18n["validate.isNumeric"], function (e) {
                  const t = /\D/g.test(e);
                  return (
                    !e ||
                    !t ||
                    this.createError({
                      path: this.path,
                      message: s.i18n["validate.isNumeric"],
                    })
                  );
                }),
              h =
                _ && y
                  ? g.mobileSchema
                      .default("")
                      .required(s.i18n["validate.empty"])
                  : g.mobileSchema.default(""),
              b = _ && v ? m.required(s.i18n["validate.empty"]) : m;
            return i.object({
              loginName: i
                .string()
                .default("")
                .required(s.i18n["validate.empty"])
                .test(function (e) {
                  return (0, p.containsCapital)(e)
                    ? this.createError({
                        path: this.path,
                        message: s.i18n["validate.notcontainscapital"],
                      })
                    : e.length < t || e.length > r
                    ? this.createError({
                        path: this.path,
                        message: (0, u.i18nVariables)(
                          s.i18n["validate.check.length.limit"],
                          {
                            MIN: t,
                            MAX: r,
                          }
                        ),
                      })
                    : a && o && !(0, c.default)(e)
                    ? this.createError({
                        path: this.path,
                        message: s.i18n["validate.isAlphanumeric"],
                      })
                    : !a || o || (0, d.default)(e)
                    ? !(o && !a && !(0, f.default)(e)) ||
                      this.createError({
                        path: this.path,
                        message: s.i18n["validate.isNumeric"],
                      })
                    : this.createError({
                        path: this.path,
                        message: s.i18n["validate.isAlpha"],
                      });
                }),
              loginPassword: i
                .string()
                .default("")
                .required(s.i18n["validate.empty"])
                .test(function (e) {
                  const { loginName: t } = this.parent;
                  if (e.length < p.PASSWORD_MIN_LENGTH)
                    return this.createError({
                      path: this.path,
                      message: (0, u.i18nVariables)(
                        s.i18n["validate.check.length.limit"],
                        {
                          MIN: p.PASSWORD_MIN_LENGTH,
                          MAX: p.PASSWORD_MAX_LENGTH,
                        }
                      ),
                    });
                  if (e.length > p.PASSWORD_MAX_LENGTH)
                    return this.createError({
                      path: this.path,
                      message: (0, u.i18nVariables)(
                        s.i18n["validate.check.length.limit"],
                        {
                          MIN: p.PASSWORD_MIN_LENGTH,
                          MAX: p.PASSWORD_MAX_LENGTH,
                        }
                      ),
                    });
                  if (l >= 1) {
                    if (e === t)
                      return this.createError({
                        path: this.path,
                        message: s.i18n["validate.password.playerid.not.same"],
                      });
                    if (!(0, p.containsAlphanumeric)(e))
                      return this.createError({
                        path: this.path,
                        message: s.i18n["validate.isAlphanumeric"],
                      });
                  }
                  return l >= 2 && !(0, p.containsCapital)(e)
                    ? this.createError({
                        path: this.path,
                        message: s.i18n["validate.containscapital"],
                      })
                    : l >= 3 && !(0, p.hasSpecialCharacter)(e)
                    ? this.createError({
                        path: this.path,
                        message: s.i18n["validate.special.character.contain"],
                      })
                    : !(
                        l >= 4 &&
                        ((0, p.hasNumberSequence)(e) ||
                          !(0, p.hasIdenticalNumberConsecutively)(e))
                      ) ||
                      this.createError({
                        path: this.path,
                        message: s.i18n["validate.not.consecutive.number"],
                      });
                }),
              mobile: h,
              verificationcode: b,
            });
          }, [n, _, y, v]),
          S = (0, a.useMemo)(
            () => ({
              loginName: E(),
              loginPassword: T(),
              ...(_ && {
                mobile: "",
                ...(v && {
                  verificationcode: "",
                }),
              }),
            }),
            [E, T, _, v]
          ),
          A = (0, a.useCallback)(
            (e) => {
              t({
                ...e,
                loginName: `${h}${e.loginName}`,
              });
            },
            [t, h]
          );
        return {
          validationSchema: R,
          initialValues: S,
          prefixchar: h,
          getRandomLoginName: E,
          getRandomLoginPassword: T,
          checkAccountIsRegistered: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const {
                values: t,
                errors: n,
                touched: r,
                setFieldTouched: a,
                setFieldError: i,
              } = e,
              o = t.loginName;
            if (!n.loginName || !r.loginName)
              try {
                b((0, m.getPlayersLookup)(o)).then((e) => {
                  let { payload: t } = e;
                  t.includes(o) &&
                    (a("loginName", !0, !1),
                    i("loginName", s.i18n["account.error"]));
                });
              } catch (e) {}
          },
          onFormSubmit: A,
        };
      };
    },
    83189: (e, t, n) => {
      "use strict";
      var r = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.paintCanvas = t.default = void 0),
        r(n(5556));
      var a = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              r,
              a = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return a;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, a);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? n(a, t, r)
                  : (a[t] = e[t]));
            return a;
          })(e);
        })(n(96540)),
        i = n(74848);
      const o = (0, a.forwardRef)((e, t) => {
          let { id: n, datas: r, rowHeight: l } = e;
          const s = (0, a.useRef)(),
            u = l * (r.length + 1);
          return (
            (0, a.useEffect)(() => {
              o.paintCanvas(t || s, r, l, u);
            }, [u, r]),
            (0, i.jsx)("div", {
              style: {
                width: 600,
                height: u,
                margin: "36px auto",
              },
              children: (0, i.jsx)("canvas", {
                id: n,
                ref: t || s,
                width: "600",
                height: u,
              }),
            })
          );
        }),
        l = function (e, t) {
          let n =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 55,
            r = arguments.length > 3 ? arguments[3] : void 0,
            a = e.getContext("2d"),
            i = n,
            o = r || n * (t.length + 1);
          return (
            a.clearRect(0, 0, 600, o),
            (a.fillStyle = "#eee"),
            a.fillRect(0, 0, 600, o),
            (a.font =
              "14px Microsoft YaHei,Microsoft JhengHei,PingFangTC,Helvetica"),
            t.forEach((e) => {
              !e ||
                (Object.prototype.hasOwnProperty.call(e, "exception") &&
                  e.exception) ||
                (e.label &&
                  ((a.fillStyle = "#777"),
                  (a.textAlign = "end"),
                  a.fillText(e.label, 180, i)),
                (a.fillStyle = "#222"),
                (a.textAlign = "left"),
                a.fillText(e.value, e.label ? 220 : 10, i),
                (i += n));
            }),
            e
          );
        };
      (t.paintCanvas = l),
        (o.paintCanvas = (e, t, n, r) => {
          l(e.current, t, n, r);
        }),
        (o.defaultProps = {
          id: "canvas",
          rowHeight: 55,
        }),
        (o.displayName = "DetailCanvas"),
        (t.default = o);
    },
  },
]);
