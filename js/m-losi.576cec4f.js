"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3085],
  {
    966: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(n(43693)),
        r = n(67467),
        o = n(47459),
        s =
          (a(n(5556)),
          (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                a,
                i = {
                  __proto__: null,
                  default: e,
                };
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (const t in e)
                "default" !== t &&
                  {}.hasOwnProperty.call(e, t) &&
                  ((a =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, t)) &&
                  (a.get || a.set)
                    ? n(i, t, a)
                    : (i[t] = e[t]));
              return i;
            })(e);
          })(n(96540))),
        l = a(n(50042)),
        c = (n(93185), n(51628)),
        d = n(76066),
        p = n(74848);
      class u extends s.Component {
        constructor() {
          super(...arguments),
            (0, i.default)(this, "timer", null),
            (0, i.default)(this, "captchaReloadDisabledTime", null),
            (0, i.default)(this, "state", {
              captchaReloadDisabled: !1,
            }),
            (0, i.default)(this, "getCaptcha", () => {
              this.props.getRandomCaptcha(), this.props.getRandomCaptchaV2();
            }),
            (0, i.default)(this, "setRenewCaptchaTimer", () => {
              this.timer = setInterval(() => this.getCaptcha(), 18e4);
            }),
            (0, i.default)(this, "clearCaptchaTimer", () => {
              clearInterval(this.timer);
            }),
            (0, i.default)(this, "renewCaptcha", () => {
              this.clearCaptchaTimer(),
                this.getCaptcha(),
                this.setRenewCaptchaTimer();
            }),
            (0, i.default)(this, "onChangeSecure", (e) => {
              var t;
              const n = e.target.value,
                a =
                  null === (t = this.props.captcha) || void 0 === t
                    ? void 0
                    : t.uuid;
              this.props.checkSecure({
                captcha: n,
                captchauuid: a,
              });
            }),
            (0, i.default)(this, "clearCurrValue", () => {
              var e;
              this.captchaInput.value = "";
              const t =
                null === (e = this.props.captcha) || void 0 === e
                  ? void 0
                  : e.uuid;
              this.props.checkSecure({
                captcha: "",
                captchauuid: t,
              });
            }),
            (0, i.default)(this, "onCaptchaReload", () => {
              const { captchaReloadDisabled: e } = this.state;
              e ||
                (this.setState({
                  captchaReloadDisabled: !0,
                }),
                (this.captchaReloadDisabledTimer = setTimeout(() => {
                  this.setState({
                    captchaReloadDisabled: !1,
                  });
                }, 2e3)),
                this.renewCaptcha());
            });
        }
        componentDidMount() {
          this.getCaptcha(), this.setRenewCaptchaTimer();
        }
        componentWillUnmount() {
          this.clearCaptchaTimer(),
            clearTimeout(this.captchaReloadDisabledTimer);
        }
        UNSAFE_componentWillReceiveProps(e) {
          if (!this.props.captcha && e.captcha) {
            const t = e.captcha.uuid;
            this.props.checkSecure({
              captcha: this.captchaInput.value,
              captchauuid: t,
            });
          }
        }
        render() {
          const { captcha: e, onEnter: t, placeholder: n } = this.props,
            { captchaReloadDisabled: a } = this.state;
          return (0, p.jsxs)("div", {
            className: "nrc-form-input secure",
            children: [
              (0, p.jsx)("input", {
                ref: (e) => (this.captchaInput = e),
                type: "text",
                placeholder: n || c.i18n.verifycode,
                name,
                onChange: this.onChangeSecure,
                onKeyDown: (e) => {
                  13 === e.keyCode && t();
                },
              }),
              e
                ? (0, p.jsx)("div", {
                    children: (0, p.jsx)("img", {
                      alt: "captcha",
                      src: e.image,
                    }),
                  })
                : (0, p.jsx)(l.default, {
                    style: {
                      backgroundColor: "transparent",
                      width: "auto",
                    },
                    spinnerName: "chasing-dots",
                  }),
              e &&
                (0, p.jsx)("i", {
                  className: "mps-update",
                  style: a
                    ? {
                        opacity: "0.3",
                        alignSelf: "center",
                      }
                    : {},
                  onClick: this.onCaptchaReload,
                }),
            ],
          });
        }
      }
      (u.defaultProps = {
        onEnter: () => {},
      }),
        (t.default = (0, r.connect)(
          (e) => ({
            isLoadingCaptcha: e.players.isLoadingCaptcha,
            captcha: e.players.captcha,
          }),
          (e) =>
            (0, o.bindActionCreators)(
              {
                getRandomCaptcha: d.getRandomCaptcha,
                getRandomCaptchaV2: d.getRandomCaptchaV2,
              },
              e
            ),
          null,
          {
            forwardRef: !0,
          }
        )(u));
    },
    2209: (e, t, n) => {
      var a = n(9404),
        i = {
          listOf: function (e) {
            return l(e, "List", a.List.isList);
          },
          mapOf: function (e, t) {
            return c(e, t, "Map", a.Map.isMap);
          },
          orderedMapOf: function (e, t) {
            return c(e, t, "OrderedMap", a.OrderedMap.isOrderedMap);
          },
          setOf: function (e) {
            return l(e, "Set", a.Set.isSet);
          },
          orderedSetOf: function (e) {
            return l(e, "OrderedSet", a.OrderedSet.isOrderedSet);
          },
          stackOf: function (e) {
            return l(e, "Stack", a.Stack.isStack);
          },
          iterableOf: function (e) {
            return l(e, "Iterable", a.Iterable.isIterable);
          },
          recordOf: function (e) {
            return o(function (t, n, i, o, s) {
              for (
                var l = arguments.length, c = Array(l > 5 ? l - 5 : 0), d = 5;
                d < l;
                d++
              )
                c[d - 5] = arguments[d];
              var p = t[n];
              if (!(p instanceof a.Record)) {
                var u = r(p);
                return new Error(
                  "Invalid " +
                    o +
                    " `" +
                    s +
                    "` of type `" +
                    u +
                    "` supplied to `" +
                    i +
                    "`, expected an Immutable.js Record."
                );
              }
              for (var m in e) {
                var g = e[m];
                if (g) {
                  var f = p.toObject(),
                    h = g.apply(void 0, [f, m, i, o, s + "." + m].concat(c));
                  if (h) return h;
                }
              }
            });
          },
          shape: p,
          contains: p,
          mapContains: function (e) {
            return d(e, "Map", a.Map.isMap);
          },
          list: s("List", a.List.isList),
          map: s("Map", a.Map.isMap),
          orderedMap: s("OrderedMap", a.OrderedMap.isOrderedMap),
          set: s("Set", a.Set.isSet),
          orderedSet: s("OrderedSet", a.OrderedSet.isOrderedSet),
          stack: s("Stack", a.Stack.isStack),
          seq: s("Seq", a.Seq.isSeq),
          record: s("Record", function (e) {
            return e instanceof a.Record;
          }),
          iterable: s("Iterable", a.Iterable.isIterable),
        };
      function r(e) {
        var t = typeof e;
        return Array.isArray(e)
          ? "array"
          : e instanceof RegExp
          ? "object"
          : e instanceof a.Iterable
          ? "Immutable." + e.toSource().split(" ")[0]
          : t;
      }
      function o(e) {
        function t(t, n, a, i, r, o) {
          for (
            var s = arguments.length, l = Array(s > 6 ? s - 6 : 0), c = 6;
            c < s;
            c++
          )
            l[c - 6] = arguments[c];
          return (
            (o = o || a),
            (i = i || "<<anonymous>>"),
            null != n[a]
              ? e.apply(void 0, [n, a, i, r, o].concat(l))
              : t
              ? new Error(
                  "Required " +
                    r +
                    " `" +
                    o +
                    "` was not specified in `" +
                    i +
                    "`."
                )
              : void 0
          );
        }
        var n = t.bind(null, !1);
        return (n.isRequired = t.bind(null, !0)), n;
      }
      function s(e, t) {
        return o(function (n, a, i, o, s) {
          var l = n[a];
          if (!t(l)) {
            var c = r(l);
            return new Error(
              "Invalid " +
                o +
                " `" +
                s +
                "` of type `" +
                c +
                "` supplied to `" +
                i +
                "`, expected `" +
                e +
                "`."
            );
          }
          return null;
        });
      }
      function l(e, t, n) {
        return o(function (a, i, o, s, l) {
          for (
            var c = arguments.length, d = Array(c > 5 ? c - 5 : 0), p = 5;
            p < c;
            p++
          )
            d[p - 5] = arguments[p];
          var u = a[i];
          if (!n(u)) {
            var m = s,
              g = r(u);
            return new Error(
              "Invalid " +
                m +
                " `" +
                l +
                "` of type `" +
                g +
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
                l +
                "`, expected a function."
            );
          for (var f = u.toArray(), h = 0, y = f.length; h < y; h++) {
            var v = e.apply(void 0, [f, h, o, s, l + "[" + h + "]"].concat(d));
            if (v instanceof Error) return v;
          }
        });
      }
      function c(e, t, n, a) {
        return o(function () {
          for (var i = arguments.length, r = Array(i), s = 0; s < i; s++)
            r[s] = arguments[s];
          return (
            l(e, n, a).apply(void 0, r) ||
            (t &&
              ((c = t),
              o(function (e, t, n, a, i) {
                for (
                  var r = arguments.length, o = Array(r > 5 ? r - 5 : 0), s = 5;
                  s < r;
                  s++
                )
                  o[s - 5] = arguments[s];
                var l = e[t];
                if ("function" != typeof c)
                  return new Error(
                    "Invalid keysTypeChecker (optional second argument) supplied to `" +
                      n +
                      "` for propType `" +
                      i +
                      "`, expected a function."
                  );
                for (
                  var d = l.keySeq().toArray(), p = 0, u = d.length;
                  p < u;
                  p++
                ) {
                  var m = c.apply(
                    void 0,
                    [d, p, n, a, i + " -> key(" + d[p] + ")"].concat(o)
                  );
                  if (m instanceof Error) return m;
                }
              })).apply(void 0, r))
          );
          var c;
        });
      }
      function d(e) {
        var t = void 0 === arguments[1] ? "Iterable" : arguments[1],
          n = void 0 === arguments[2] ? a.Iterable.isIterable : arguments[2];
        return o(function (a, i, o, s, l) {
          for (
            var c = arguments.length, d = Array(c > 5 ? c - 5 : 0), p = 5;
            p < c;
            p++
          )
            d[p - 5] = arguments[p];
          var u = a[i];
          if (!n(u)) {
            var m = r(u);
            return new Error(
              "Invalid " +
                s +
                " `" +
                l +
                "` of type `" +
                m +
                "` supplied to `" +
                o +
                "`, expected an Immutable.js " +
                t +
                "."
            );
          }
          var g = u.toObject();
          for (var f in e) {
            var h = e[f];
            if (h) {
              var y = h.apply(void 0, [g, f, o, s, l + "." + f].concat(d));
              if (y) return y;
            }
          }
        });
      }
      function p(e) {
        return d(e);
      }
      e.exports = i;
    },
    2395: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(n(43693)),
        r =
          (a(n(5556)),
          (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var n,
                a,
                i = {
                  __proto__: null,
                  default: e,
                };
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return i;
              if ((n = t)) {
                if (n.has(e)) return n.get(e);
                n.set(e, i);
              }
              for (const t in e)
                "default" !== t &&
                  {}.hasOwnProperty.call(e, t) &&
                  ((a =
                    (n = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, t)) &&
                  (a.get || a.set)
                    ? n(i, t, a)
                    : (i[t] = e[t]));
              return i;
            })(e);
          })(n(96540))),
        o = n(67467),
        s = a(n(96384)),
        l = n(74848);
      class c extends r.Component {
        constructor() {
          super(),
            (0, i.default)(this, "onSubmit", () => {
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
            ...a
          } = this.props;
          return (0, l.jsx)(s.default, {
            ...a,
            onClick: this.onSubmit,
          });
        }
      }
      t.default = (0, o.connect)((e) => ({
        isSendingDeletePostPut: e.app.isSendingDeletePostPut,
      }))(c);
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
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { multipleCall: n = !1, withState: a = !1 } = t,
            [p, u] = (0, o.default)({
              isLoading: !1,
              isLoaded: !1,
              data: void 0,
              error: void 0,
            }),
            m = (0, i.useRef)(!1),
            g = (0, r.useDispatch)(),
            f = (0, i.useCallback)(
              function () {
                if (!n && m.current)
                  return Promise.reject(
                    new Error("previous callback hasn't been resolved.")
                  );
                a &&
                  u({
                    isLoading: !0,
                  }),
                  (m.current = !0);
                let {
                  failed: t,
                  promises: i,
                  ...r
                } = (function (e) {
                  if ((0, l.default)(e))
                    return {
                      promises: [e],
                    };
                  const t = e.types || [],
                    [n, a] = t.slice(Math.max(t.length - 2)),
                    i =
                      !Object.prototype.hasOwnProperty.call(
                        e,
                        "notification"
                      ) || e.notification;
                  return {
                    ...e,
                    success: n,
                    failed: a,
                    notification: i,
                    successMessage: e.successMessage,
                    failMessage: e.failMessage,
                    promises: e.promises.map((e) => e(s.default)),
                  };
                })(e(...arguments));
                return Promise.all(i)
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
                            g({
                              type: d.UPDATE_TOKEN,
                              token: t.newToken,
                            }),
                          t
                        );
                      })),
                      a &&
                        u({
                          data: 1 === e.length ? e[0] : e,
                          isLoaded: !0,
                        }),
                      1 === e.length ? e[0] : e
                    )
                  )
                  .catch(
                    (e) => (
                      401 === e.code
                        ? g({
                            type: d.POST_LOGOUT_SUCCESS,
                            unauthorized: !0,
                          })
                        : 403 === e.code
                        ? g({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_FORBIDDEN_ERROR,
                          })
                        : 498 === e.code
                        ? g({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: t,
                          })
                        : 499 === e.code
                        ? g({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_INTERNAL_ERROR_CODE,
                          })
                        : e.code &&
                          g({
                            ...r,
                            ...e,
                            type: c.API_ERROR_CODE_498,
                            constant: c.API_INTERNAL_ERROR_CODE,
                            exception: !0,
                          }),
                      a &&
                        u({
                          error: e,
                        }),
                      Promise.reject(e)
                    )
                  )
                  .finally(() => {
                    a &&
                      u({
                        isLoading: !1,
                      }),
                      (m.current = !1);
                  });
              },
              [e]
            );
          return a
            ? {
                ...p,
                execute: f,
              }
            : f;
        });
      var i = n(96540),
        r = n(67467),
        o = a(n(72524)),
        s = a(n(32080)),
        l = a(n(7277)),
        c = n(36697),
        d = n(62144);
    },
    9674: (e, t, n) => {
      var a = n(24994);
      t.A = void 0;
      var i = a(n(43693)),
        r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        o = (a(n(5556)), n(78106)),
        s = a(n(27136)),
        l = n(28651),
        c = a(n(94188)),
        d = n(8087),
        p = a(n(2056)),
        u = n(51628),
        m = a(n(15062)),
        g = a(n(51767)),
        f = a(n(966)),
        h = a(n(76835)),
        y = a(n(77158)),
        v = a(n(56372)),
        b = a(n(85446)),
        j = a(n(96384)),
        C = a(n(28926)),
        x = a(n(78899)),
        N = a(n(55505)),
        S = n(1650),
        O = n(57160),
        w = a(n(44241)),
        I = n(93185),
        _ = n(56291),
        M = a(n(93978)),
        P = n(86338),
        L = n(74848);
      class E extends r.Component {
        constructor(e) {
          super(e),
            (0, i.default)(this, "onChangeSecure", (e) => {
              let { captcha: t, captchauuid: n } = e,
                a = this.state.captchaEmpty;
              this.state.captcha && !t ? (a = !0) : t && (a = !1),
                this.setState({
                  captcha: t,
                  captchauuid: n,
                  captchaEmpty: a,
                });
            }),
            (0, i.default)(this, "onImgCaptchaVerifyHandler", (e) => {
              this.props.closeImgCaptcha(),
                this.props.loginUser({
                  ...this.submitData,
                  captchauuid: e,
                });
            }),
            (0, i.default)(this, "onChangeRememberLogin", (e) => {
              this.setState({
                enableRememberLogin: e,
              });
            }),
            (0, i.default)(this, "onSubmit", () => {
              const {
                  captcha: e,
                  captchauuid: t,
                  enableRememberLogin: n,
                } = this.state,
                {
                  form: { getFormItems: a, validate: i },
                  fingerprint2: r,
                  loginSetting: o,
                  isLoginImgCaptcha: s,
                  openImgCaptcha: l,
                } = this.props,
                { login: c, password: p } = a(),
                u = o.getIn(["loginsettingmap", "captcha", "display"]),
                m = !(!u || s || (e && t));
              if (!i() || m || !r)
                return void (
                  e ||
                  this.setState({
                    captchaEmpty: !0,
                  })
                );
              const f = (0, I.getValueWithoutFirstLastSpace)(
                  c
                ).toLocaleLowerCase(),
                h = (0, g.default)(p, f);
              (this.submitData = {
                loginname: f,
                loginpassword: h,
                captcha: e,
                captchauuid: t,
                fingerprint: r,
                portalid: d.portalIdEnum.MOBILE,
                rawPassword: n ? p : null,
              }),
                u && s ? l() : this.props.loginUser(this.submitData);
            }),
            (this.loginInfo = _.loginInfoCookie.get()),
            (this.state = {
              captcha: null,
              captchauuid: null,
              captchaEmpty: !1,
              login: null,
              password: null,
              enableRememberLogin: !!this.loginInfo.playerPassword,
            }),
            (this.submitData = void 0);
        }
        UNSAFE_componentWillReceiveProps(e) {
          const { loginSuccess: t, needactivation: n } = e,
            a = this.props.history.location.state;
          n ||
            (t && a && a.path
              ? this.props.history.replace(a.path)
              : t && this.props.history.push(m.default.ROOT));
        }
        componentDidMount() {
          const { saveFingerPrint2: e } = this.props;
          (0, O.getFingerprint2)(e);
        }
        componentDidUpdate(e) {
          const { showForgetPassword: t, showForgetAccount: n } = this.state;
          if (e.showGlobal498Msg && !this.props.showGlobal498Msg && !t && !n) {
            const {
              form: { resetForm: e },
            } = this.props;
            e(),
              this.inputSecure &&
                (this.inputSecure.clearCurrValue(),
                this.inputSecure.renewCaptcha()),
              this.setState({
                captchaEmpty: !1,
              });
          }
        }
        render() {
          const {
              form: e,
              isLoading: t,
              showGlobal498Msg: n,
              loginSetting: a,
              logoClick: i,
              isOpenImgCaptcha: r,
              closeImgCaptcha: o,
            } = this.props,
            { captchaEmpty: s } = this.state,
            { decorateInput: d } = e;
          return (0, L.jsxs)("section", {
            className: "hover-container login",
            children: [
              (0, L.jsx)(P.Content8, {
                ...this.props,
              }),
              (0, L.jsxs)("div", {
                className: "container",
                children: [
                  (0, L.jsxs)("div", {
                    className: "container-inner",
                    children: [
                      (0, L.jsx)("div", {
                        className: "text-right",
                        children: (0, L.jsx)("img", {
                          alt: "close",
                          src: "https://img.alltocon.com/img/static/ic-cancel.svg",
                          onClick: i,
                        }),
                      }),
                      (0, L.jsx)(P.Content1, {
                        ...this.props,
                      }),
                      (0, L.jsx)("h2", {
                        className: "title-center",
                        children: u.i18n.signin,
                      }),
                      (0, L.jsx)(P.Content2, {
                        ...this.props,
                      }),
                      (0, L.jsx)("div", {
                        style: {
                          marginBottom: "10px",
                        },
                        children: (0, L.jsxs)(v.default, {
                          children: [
                            (0, L.jsx)(C.default, {
                              ref: "account",
                              name: "login",
                              className: "input-group",
                              labelName: a.getIn(["accounti18n", u.currLocale]),
                              setting: a.getIn(["loginsettingmap", "account"]),
                              decorateInput: d,
                              emptyMsg: u.i18n["validate.empty"],
                              isItemRequire: !0,
                              options: {
                                rule: {
                                  validator: [
                                    (e) =>
                                      !(0, p.default)(
                                        (0, I.getValueWithoutFirstLastSpace)(e)
                                      ),
                                  ],
                                  tip: [u.i18n.pleaseenteraccount],
                                },
                              },
                              children: (0, L.jsx)(b.default, {
                                placeholder: a.getIn([
                                  "accounttipi18n",
                                  u.currLocale,
                                ]),
                                type: "text",
                                autoCapitalize: "none",
                                defaultValue: this.loginInfo.playerId,
                                maxLength: Number(S.ACCOUNT_MAX_LENGTH),
                              }),
                            }),
                            (0, L.jsx)(C.default, {
                              ref: "password",
                              name: "password",
                              className: "input-group",
                              labelName: a.getIn([
                                "passwordi18n",
                                u.currLocale,
                              ]),
                              setting: a.getIn(["loginsettingmap", "password"]),
                              decorateInput: d,
                              emptyMsg: u.i18n["validate.empty"],
                              isItemRequire: !0,
                              options: {
                                rule: {
                                  validator: [(e) => !(0, p.default)(e)],
                                  tip: [u.i18n.pleaseenterpassword],
                                },
                              },
                              children: (0, L.jsx)(x.default, {
                                placeholder: a.getIn([
                                  "passwordtipi18n",
                                  u.currLocale,
                                ]),
                                autoComplete: "new-password",
                                className: "nrc-form-password",
                                defaultValue: this.loginInfo.playerPassword,
                                maxLength: Number(S.PASSWORD_MAX_LENGTH),
                                onEnter: this.onSubmit,
                              }),
                            }),
                            (0, L.jsx)(C.default, {
                              ref: "captcha",
                              name: "captcha",
                              className: "input-group",
                              labelName: a.getIn(["captchai18n", u.currLocale]),
                              setting: a.getIn(["loginsettingmap", "captcha"]),
                              decorateInput: d,
                              emptyMsg: u.i18n["validate.empty"],
                              isItemRequire: !0,
                              login: !0,
                              children: (0, L.jsxs)(L.Fragment, {
                                children: [
                                  (0, L.jsx)(f.default, {
                                    ref: (e) => (this.inputSecure = e),
                                    checkSecure: this.onChangeSecure,
                                    onEnter: () => !n && this.onSubmit(),
                                    placeholder: a.getIn([
                                      "captchatipi18n",
                                      u.currLocale,
                                    ]),
                                  }),
                                  s &&
                                    (0, L.jsx)("div", {
                                      className: "nrc-form-input nrc-u-1-1 ",
                                      children: (0, L.jsx)("small", {
                                        className: "invalid-msg",
                                        children: u.i18n["error.login.1"],
                                      }),
                                    }),
                                ],
                              }),
                            }),
                            (0, L.jsx)(N.default, {
                              onChangeRememberLogin: this.onChangeRememberLogin,
                            }),
                            (0, L.jsx)(P.Content3, {
                              ...this.props,
                            }),
                            (0, L.jsx)("div", {
                              className: "login-btn-group",
                              children: (0, L.jsx)(j.default, {
                                onClick: this.onSubmit,
                                children: u.i18n.signin,
                              }),
                            }),
                            (0, L.jsx)(P.Content4, {
                              ...this.props,
                              onSubmit: this.onSubmit,
                            }),
                          ],
                        }),
                      }),
                      (0, L.jsx)("p", {
                        className: "bottom-text",
                        children: (0, L.jsx)(l.Link, {
                          to: m.default.SIGNUP,
                          className: "signup-hint account-link",
                          children: u.i18n.freeRegistration,
                        }),
                      }),
                      (0, L.jsx)(P.Content5, {
                        ...this.props,
                      }),
                      (0, L.jsxs)("div", {
                        className: "text-center forget-options",
                        children: [
                          (0, L.jsx)(l.Link, {
                            to: m.default.FORGETUSERNAME,
                            children: (0, L.jsx)("span", {
                              children: u.i18n.forgetusername,
                            }),
                          }),
                          "  ",
                          (0, L.jsx)(l.Link, {
                            to: m.default.FORGETPASSWORD,
                            children: (0, L.jsx)("span", {
                              children: u.i18n.forget,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, L.jsx)(P.Content6, {
                    ...this.props,
                  }),
                  (0, L.jsx)(w.default, {}),
                  (0, L.jsx)(P.Content7, {
                    ...this.props,
                  }),
                  (0, L.jsx)("h5", {
                    className: "stagingversion text-center",
                    children: c.default.brand.name || c.default.brand.code,
                  }),
                ],
              }),
              t ? (0, L.jsx)(h.default, {}) : null,
              r &&
                (0, L.jsx)(M.default, {
                  onVerifySuc: this.onImgCaptchaVerifyHandler,
                  onClose: o,
                }),
            ],
          });
        }
      }
      t.A = (0, s.default)(
        (0, o.withRouter)(
          (0, y.default)({
            withRef: !0,
          })(E)
        )
      );
    },
    27136: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = a(n(21927)),
        o = n(74848);
      t.default = (e) =>
        (0, i.forwardRef)((t, n) => {
          const a = (0, r.default)();
          return (0, o.jsx)(e, {
            ref: n,
            ...t,
            ...a,
          });
        });
    },
    27586: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(67467),
        r = n(47459),
        o = n(76066),
        s = a(n(32474));
      const l = (0, i.connect)(
        (e) => ({
          isLoading: e.players.isLoading,
          loginSuccess: e.players.loginSuccess,
          showGlobal498Msg: e.app.showGlobal498Msg,
          fingerprint2: e.players.fingerprint2,
          needactivation: e.players.needactivation,
          loginSetting: e.players.loginSetting,
        }),
        (e) =>
          (0, r.bindActionCreators)(
            {
              loginUser: o.loginUser,
              saveFingerPrint2: o.saveFingerPrint2,
            },
            e
          )
      )(s.default);
      t.default = l;
    },
    32474: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var i = n(28651),
        r = a(n(76835)),
        o = n(28415),
        s = a(n(15062)),
        l = a(n(61116)),
        c = a(n(97067)),
        d = a(n(34476)),
        p = a(n(55665)),
        u = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(84622)),
        m = n(74848);
      let g;
      try {
        g = n(9674).A;
      } catch (e) {
        g = n(9674).A;
      }
      const f = () =>
          (0, m.jsx)("section", {
            className: "hover-container login fast-bind-modal",
            children: (0, m.jsx)("div", {
              className: "container",
              children: (0, m.jsx)(r.default, {}),
            }),
          }),
        h = (e) => {
          let { state: t } = e;
          return [o.bindStatusEnum.SUCCESS, o.bindStatusEnum.INVALID].includes(
            t.loginStatus
          )
            ? (0, m.jsx)(i.Redirect, {
                to: s.default.ROOT,
              })
            : t.loginStatus === o.bindStatusEnum.UNAUTHORIZED
            ? (0, m.jsx)(u.FastBind, {
                ...t.bindData,
              })
            : (0, m.jsx)(f, {});
        };
      t.default = (e) => {
        const { state: t, thirdPartyToken: n } = (0, l.default)(),
          a = (0, c.default)(),
          { isLoginImgCaptcha: i } = (0, d.default)(),
          { isShowThirdPartyLogin: r, thirdPartyLoginRegSetting: o } = (0,
          p.default)((e) => ({
            isShowThirdPartyLogin: e.thirdPartyLogin.isShowThirdPartyLogin,
            thirdPartyLoginRegSetting:
              e.thirdPartyLogin.thirdPartyLoginRegSetting,
          }));
        return (
          r &&
            null != o &&
            o.get("systemPlayerPageEnabled") &&
            u.FastBind.preload(),
          n
            ? (0, m.jsx)("div", {
                children: (0, m.jsx)(h, {
                  state: t,
                }),
              })
            : (0, m.jsx)(g, {
                ...e,
                ...a,
                isLoginImgCaptcha: i,
              })
        );
      };
    },
    44241: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(n(65998));
      n(78594), (t.default = i.default);
    },
    52468: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(96540),
        r = a(n(95093));
      t.default = function (e) {
        let {
          seconds: t = 0,
          onEnd: n,
          asSeconds: a = !1,
          timeout: o = 500,
        } = e;
        const s = (0, i.useRef)(),
          l = (0, i.useRef)(new Date().getTime() + 1e3 * t),
          [c, d] = (0, i.useState)(1e3 * t),
          p = () => {
            const e = new Date().getTime();
            if (e >= l.current)
              return clearTimeout(s.current), void (n && n(d));
            d(l.current - e);
          };
        if (
          ((0, i.useEffect)(() => {
            const e = setTimeout(p, o);
            return (s.current = e), () => clearTimeout(s.current);
          }, [c]),
          a)
        )
          return Math.floor(c / 1e3);
        const u = r.default.duration(Math.floor(c / 1e3), "seconds"),
          m = Math.floor(u.asDays()),
          g = u.hours();
        return {
          hours: Math.floor(u.asHours()),
          minutes: u.minutes(),
          seconds: u.seconds(),
          daysData: {
            days: m,
            hoursByDay: g,
          },
        };
      };
    },
    55505: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        n(66838);
      var i = a(n(87293));
    },
    57297: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          const e = (0, i.useSelector)((e) => e.app.prompt),
            t = (0, i.useDispatch)();
          return (
            (0, a.useEffect)(() => {
              const e = (e) => {
                e.preventDefault(), t((0, r.setPrompt)(e));
              };
              return (
                window.addEventListener("beforeinstallprompt", e),
                () => {
                  window.removeEventListener("beforeinstallprompt", e);
                }
              );
            }, [t]),
            e
          );
        });
      var a = n(96540),
        i = n(67467),
        r = n(84707);
    },
    57753: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        });
      var i = a(n(93291));
      n(89070);
    },
    59905: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = n(31635),
        i = n(96540),
        r = a.__importDefault(n(62877));
      t.default = function (e) {
        var t = i.useRef(e);
        (t.current = e),
          r.default(function () {
            return function () {
              return t.current();
            };
          });
      };
    },
    60781: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var a = n(96540),
        i = function (e, t) {
          return "boolean" == typeof t ? t : !e;
        };
      t.default = function (e) {
        return a.useReducer(i, e);
      };
    },
    61116: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(n(7541)),
        r = n(67467),
        o = a(n(83736)),
        s = a(n(72524)),
        l = a(n(15361)),
        c = n(61444),
        d = n(8087),
        p = n(28415),
        u = n(72596),
        m = n(57160),
        g = n(62144),
        f = n(28415);
      t.default = function () {
        let { portalId: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = (0, r.useDispatch)(),
          n = (0, i.default)(c.postThirdPartyLogin),
          [a, h] = (0, s.default)({
            loginStatus: null,
            bindData: {},
          }),
          { thirdPartyToken: y, thirdPartyType: v } = (0,
          u.getThirdPartyUrlParams)(),
          b = () => {
            y &&
              v &&
              (0, m.getFingerprint2)((a) => {
                const i = {
                  thirdPartyType: v,
                  thirdPartyToken: y,
                  fingerPrint: a,
                  portalId: e || d.portalIdEnum.MOBILE,
                };
                n(i)
                  .then((e) => {
                    const {
                        loginStatus: n,
                        thirdPartyPhoto: a,
                        thirdPartyName: r,
                        thirdPartyToken: o,
                      } = e,
                      s = {
                        loginStatus: n,
                      };
                    n === p.bindStatusEnum.SUCCESS
                      ? t({
                          type: g.AJAX_POST_LOGIN_SUCCESS,
                          payload: e,
                          playerid: e.playerid,
                        })
                      : n === p.bindStatusEnum.UNAUTHORIZED &&
                        (s.bindData = {
                          ...i,
                          thirdPartyToken: [
                            f.thirdPartyTypeEnum.GOOGLE,
                            f.thirdPartyTypeEnum.LINE,
                            f.thirdPartyTypeEnum.ZALO,
                          ].includes(v)
                            ? o
                            : i.thirdPartyToken,
                          thirdPartyPhoto: a,
                          thirdPartyUserName: r,
                        }),
                      h(s);
                  })
                  .catch(() => {
                    h({
                      loginStatus: p.bindStatusEnum.INVALID,
                    });
                  });
              });
          };
        return (
          (0, l.default)(() => {
            b();
          }, [y, v]),
          (0, o.default)(() => {
            b();
          }),
          {
            state: a,
            thirdPartyToken: y,
          }
        );
      };
    },
    61383: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.Content6 =
          t.Content5 =
          t.Content4 =
          t.Content3 =
          t.Content2 =
          t.Content1 =
            void 0);
      let n = () => null,
        a = () => null,
        i = () => null,
        r = () => null,
        o = () => null,
        s = () => null;
      (t.Content6 = s),
        (t.Content5 = o),
        (t.Content4 = r),
        (t.Content3 = i),
        (t.Content2 = a),
        (t.Content1 = n);
      try {
        t.Content1 = n = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content1'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content2 = a = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content2'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content3 = i = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content3'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content4 = r = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content4'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content5 = o = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content5'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content6 = s = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Signup/default/Content6'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
    },
    65998: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var i = a(n(52622)),
        r = a(n(68299)),
        o = n(51628),
        s = a(n(14947)),
        l = n(74848);
      t.default = (e) => {
        let { isSignup: t = !1 } = e;
        const {
          loading: n,
          thirdPartyTypes: a,
          thirdPartyAuthCheckingURLs: c,
          onIconClick: d,
          isShowThirdPartyLogin: p,
          isSystemPlayerPageEnabled: u,
        } = (0, s.default)();
        return !p || (!u && t)
          ? null
          : (0, l.jsxs)("div", {
              className: "fast-login-wrapper",
              children: [
                (0, l.jsx)("div", {
                  className: "title",
                  children: (0, l.jsx)("span", {
                    children: o.i18n["fast.login"],
                  }),
                }),
                (0, l.jsx)("div", {
                  className: "icons",
                  children: n
                    ? (0, l.jsx)(i.default, {})
                    : a.map((e) =>
                        (0, l.jsx)(
                          "a",
                          {
                            href: c[e],
                            onClick: d,
                            children: (0, l.jsx)("img", {
                              alt: `${e}-icon`,
                              className: "icon",
                              src: r.default[e],
                            }),
                          },
                          e
                        )
                      ),
                }),
              ],
            });
      };
    },
    66838: (e, t, n) => {
      n.r(t);
    },
    69588: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(96540));
      var i = a(n(94188)),
        r = n(8087),
        o = n(74848);
      const s = "top-ad-banner-wrapper";
      t.default = (e) => {
        const {
          hasAd: t,
          onClose: n,
          data: a,
          topBannerImgId: l,
          adjustFixedModalOffset: c,
        } = e;
        let d = null;
        const p = null == a ? void 0 : a.getIn(["addetails", 0, "image1"]);
        return (
          p && (d = `${i.default.portal.apiServer.imageServer}${p}`),
          t
            ? (0, o.jsxs)("div", {
                id: s,
                className: "mobile-top-ad-wrapper",
                children: [
                  (null == a ? void 0 : a.get("display")) ===
                    r.adsDetailDisplayEnum.CAN_CLOSE &&
                    (0, o.jsx)("div", {
                      className: "top-ad-close-button",
                      onClick: n,
                      children: (0, o.jsx)("i", {
                        className: "mps-close",
                      }),
                    }),
                  (0, o.jsx)("img", {
                    id: l,
                    src: d,
                    alt: "mobile-top-ad",
                    onLoad: (e) => {
                      const t = e.target.offsetHeight,
                        n = document.getElementById(s);
                      n && (n.style.minHeight = `${t}px`), c();
                    },
                    onClick: () => {
                      const e = a.getIn(["addetails", 0, "url"]);
                      e && window.open(e);
                    },
                  }),
                ],
              })
            : null
        );
      };
    },
    72697: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        a(n(5556));
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = a(n(46942)),
        o = n(74848);
      class s extends i.Component {
        constructor(e) {
          super(e);
          const { inputOptions: t = {} } = e;
          this.info = t.info || "";
        }
        renderOption(e) {
          return (0, o.jsx)(
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
            options: n,
            placeholderOption: a,
          } = this.props;
          if (!n || !Array.isArray(n)) return null;
          const i = a ? this.renderOption(a) : [],
            r = e
              ? e.map((e) => {
                  const t = n.filter(e.filter);
                  return 0 === t.length
                    ? null
                    : (0, o.jsx)(
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
            const e = n.reduce((e, n) => {
              const a = t(n);
              return (e[a] = e[a] || []).push(n), e;
            }, {});
            return [
              i,
              ...r,
              ...Object.keys(e)
                .sort()
                .map((t) =>
                  (0, o.jsx)(
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
          return [i, ...r, ...n.map((e) => this.renderOption(e))];
        }
        msgRenderer() {
          const { isValid: e, inputOptions: t, validateDetail: n } = this.props;
          if (!1 === e) {
            let e = t.rule.tip || "";
            e = Array.isArray(e) ? e : [e];
            const a = e ? e.filter((e, t) => !n[t]) : [];
            return (0, o.jsx)("small", {
              className: "invalid-msg",
              children: a[0],
            });
          }
          const a = "function" == typeof this.info ? this.info() : this.info;
          return (0, o.jsx)("small", {
            className: "info-msg",
            children: a,
          });
        }
        render() {
          const { name: e, value: t, className: n } = this.props;
          return (0, o.jsxs)("div", {
            className: (0, r.default)("selector", n),
            children: [
              (0, o.jsx)("select", {
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
      t.default = s;
    },
    78594: (e, t, n) => {
      n.r(t);
    },
    84623: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = (a(n(5556)), n(51628)),
        o = a(n(85446)),
        s = a(n(15361)),
        l = a(n(2395)),
        c = n(74848);
      t.default = (e) => {
        let {
          mobileStatus: t,
          value: n,
          disabled: a,
          error: d,
          onChange: p,
          onClickGetCode: u,
          onCountdownTimeout: m,
          placeholder: g,
        } = e;
        const [f, h] = (0, i.useState)(null),
          y = (0, i.useRef)();
        (0, s.default)(() => {
          (y.current = t.countdown), h(t.countdown);
          const e = setInterval(() => {
              const e = y.current - 1;
              (y.current = e), h(e), 0 === e && n();
            }, 1e3),
            n = () => {
              h(null), clearInterval(e);
            };
          return n;
        }, [t]),
          (0, s.default)(() => {
            0 === f && m();
          }, [f, m]);
        const v = (0, i.useCallback)(
          (e) => {
            (e = e.replace(/[^0-9]/g, "").slice(0, 6)), p(e);
          },
          [p]
        );
        return (0, c.jsxs)("div", {
          className: "nrc-form-input mobile-validate",
          children: [
            (0, c.jsx)(o.default, {
              type: "text",
              inputMode: "numeric",
              className: "code-input",
              value: n,
              onChange: v,
              placeholder: g,
            }),
            (0, c.jsx)(l.default, {
              disabled: a || f > 0,
              onClick: u,
              expireTime: 2e3,
              children: r.i18n["mobile.validate.send.verification.code"],
            }),
            f > 0 &&
              (0, c.jsx)("span", {
                className: "validate-countdown",
                children: `${f} ${r.i18n.second}`,
              }),
            d &&
              (0, c.jsx)("small", {
                className: "invalid-msg",
                children: r.i18n["error.login.9"],
              }),
          ],
        });
      };
    },
    86338: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.Content8 =
          t.Content7 =
          t.Content6 =
          t.Content5 =
          t.Content4 =
          t.Content3 =
          t.Content2 =
          t.Content1 =
            void 0);
      let n = () => null,
        a = () => null,
        i = () => null,
        r = () => null,
        o = () => null,
        s = () => null,
        l = () => null,
        c = () => null;
      (t.Content8 = c),
        (t.Content7 = l),
        (t.Content6 = s),
        (t.Content5 = o),
        (t.Content4 = r),
        (t.Content3 = i),
        (t.Content2 = a),
        (t.Content1 = n);
      try {
        t.Content1 = n = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content1'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content2 = a = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content2'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content3 = i = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content3'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content4 = r = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content4'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content5 = o = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content5'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content6 = s = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content6'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content7 = l = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content7'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content8 = c = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/mobile/Auth/Login/default/Content8'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
    },
    86619: (e, t, n) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var a = n(67467),
        i = n(47459),
        r = n(76066),
        o = n(18740),
        s = n(33726),
        l = n(84707),
        c = n(53719);
      let d;
      try {
        d = n(98812).A;
      } catch (e) {
        d = n(98812).A;
      }
      const p = (0, a.connect)(
        (e) => ({
          signupSuccess: e.players.signupSuccess,
          affiliateFailed: e.players.affiliateFailed,
          affiliateSuccess: e.players.affiliateSuccess,
          affiliateLoading: e.players.affiliateidLoading,
          affiliateid: e.players.affiliateid,
          playersLookup: e.players.playersLookup,
          showGlobal498Msg: e.app.showGlobal498Msg,
          registrationSetting: e.players.registrationSetting,
          staticpagesMap: e.staticpagesettings.staticpagesMap,
          agentSuccess: e.agents.agentSuccess,
          agentFailed: e.agents.agentFailed,
          getRegSettingSuccess: e.players.getRegSettingSuccess,
          ulagentSuccess: e.agents.ulagentSuccess,
          ulagentFailed: e.agents.ulagentFailed,
          mobileStatus: e.players.mobileStatus,
          isLoading: e.players.isLoading,
          agentLoading: e.agents.loading,
          RegisterAd: e.promo.floatingAdsSetting.filter(
            (e) => 7 === e.get("type")
          ),
          floatingAdsSetting: e.promo.floatingAdsSetting,
        }),
        (e) =>
          (0, i.bindActionCreators)(
            {
              registerUser: r.registerUser,
              checkAffiliate: r.checkAffiliate,
              checkAffiliateWithAlert: r.checkAffiliateWithAlert,
              getPlayersLookup: r.getPlayersLookup,
              clearPlayersLookup: r.clearPlayersLookup,
              getStaticPages: s.getStaticPages,
              getStaticPageContent: s.getStaticPageContent,
              checkAgent: o.checkAgent,
              checkUlagent: o.checkUlagent,
              sendVerificationCodeToMobile: r.sendVerificationCodeToMobile,
              openErrorModal: l.openErrorModal,
              getFloatingAds: c.getFloatingAds,
            },
            e
          )
      )(d);
      t.default = p;
    },
    87293: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = a(n(46942)),
        o = a(n(60781)),
        s = n(51628),
        l = a(n(55665)),
        c = n(56291),
        d = n(74848);
      t.default = (e) => {
        let { onChangeRememberLogin: t } = e;
        const { loginSetting: n } = (0, l.default)((e) => ({
            loginSetting: e.players.loginSetting,
          })),
          [a, p] = (0, o.default)(!1),
          [u, m] = (0, i.useState)(c.loginInfoCookie.get().playerPassword);
        return 0 === n.get("loginRememberDays")
          ? null
          : (0, d.jsxs)("div", {
              className: "remeber-login-wrapper",
              children: [
                (0, d.jsxs)("div", {
                  className: "center remeber-login",
                  onMouseEnter: p,
                  onMouseLeave: p,
                  children: [
                    (0, d.jsx)("input", {
                      type: "checkbox",
                      id: "remember-login",
                      onChange: (e) => {
                        m(e.target.checked), t(e.target.checked);
                      },
                      checked: u,
                    }),
                    (0, d.jsx)("label", {
                      htmlFor: "remember-login",
                    }),
                    s.i18n["remember.login"],
                  ],
                }),
                u &&
                  (0, d.jsx)("div", {
                    className: (0, r.default)("center remeber-login-tip", {
                      "simple-login-remember-tip": a,
                    }),
                    children: s.i18n["remember.login.tip"],
                  }),
              ],
            });
      };
    },
    89070: (e, t, n) => {
      n.r(t);
    },
    93291: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = a(n(94188)),
        o = a(n(27179)),
        s = n(3057),
        l = a(n(52622)),
        c = a(n(55665)),
        d = a(n(32434)),
        p = n(83597),
        u = n(38560),
        m = a(n(57297)),
        g = a(n(12695)),
        f = n(51628),
        h = n(74848);
      const {
          brand: { code: y },
        } = r.default,
        v = ["u21prod", "x06prod"];
      t.default = (e) => {
        const { customBtn: t } = e,
          {
            regLimitPromoExpireTime: n,
            regPromoReqTimeLimit: a,
            isLoading: r,
            regLimitTimePromo: b,
            isRegLimitTimePromoLoading: j,
          } = (0, c.default)((e) => ({
            isLoading: e.players.isLoading,
            regLimitPromoExpireTime: e.players.regLimitPromoExpireTime,
            regPromoReqTimeLimit: e.players.player.regPromoReqTimeLimit,
            regLimitTimePromo: e.promo.regLimitTimePromo,
            isRegLimitTimePromoLoading: e.promo.isRegLimitTimePromoLoading,
          })),
          C = (0, m.default)(),
          { appURL: x } = (0, g.default)(),
          N = (0, i.useMemo)(
            () => n && n > new Date().getTime() && a && b.length > 0,
            [n, a, b]
          ),
          S = !p.isNativeApp && !v.includes(y),
          O = (0, i.useMemo)(
            () => !p.isNativeApp && !!u.isAndroid && !(p.isStandalone || !C),
            [C]
          );
        return (0, h.jsxs)(s.AlertModal, {
          className: "signup-suc-modal",
          ...e,
          customBtn: !N && t,
          children: [
            r || j
              ? (0, h.jsx)(l.default, {})
              : N &&
                (0, h.jsx)(d.default, {
                  regLimitPromoExpireTime: n,
                  regPromoReqTimeLimit: a,
                  onEnd: (e) => {
                    e(0);
                  },
                }),
            S &&
              (0, h.jsxs)(h.Fragment, {
                children: [
                  (0, h.jsxs)("div", {
                    className: "download-app mt-20",
                    children: [
                      f.i18n["download.app.text"] &&
                        (0, h.jsx)("div", {
                          className: "content",
                          children: f.i18n["download.app.text"],
                        }),
                      (0, h.jsx)("div", {
                        className: "modal-btn",
                        children: (0, h.jsx)("button", {
                          type: "button",
                          className: "pri-btn",
                          onClick: () => {
                            x && window.open(x);
                          },
                          children: f.i18n.download,
                        }),
                      }),
                    ],
                  }),
                  O &&
                    (0, h.jsxs)("div", {
                      className: "add-home mt-20",
                      children: [
                        (0, h.jsx)("div", {
                          className: "content",
                          children: f.i18n["add.to.home.screen"],
                        }),
                        (0, h.jsx)("div", {
                          className: "modal-btn",
                          children: (0, h.jsx)("button", {
                            type: "button",
                            className: "pri-btn",
                            onClick: () => {
                              C &&
                                (C.prompt(),
                                C.userChoice.then((e) => {
                                  "accepted" === e.outcome &&
                                    o.default.set("AddHomeScreen", !1);
                                }));
                            },
                            children: f.i18n.add,
                          }),
                        }),
                      ],
                    }),
                ],
              }),
          ],
        });
      };
    },
    98394: (e, t, n) => {
      var a = n(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var n,
              a,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((n = t)) {
              if (n.has(e)) return n.get(e);
              n.set(e, i);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((a =
                  (n = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (a.get || a.set)
                  ? n(i, t, a)
                  : (i[t] = e[t]));
            return i;
          })(e);
        })(n(96540)),
        r = a(n(52622)),
        o = n(74848);
      const s = (e, t) => {
        const [n, a] = (0, i.useState)(),
          { children: s, onLoaded: l, load: c } = e;
        return (
          (0, i.useEffect)(() => {
            c().then((e) => {
              a(e);
            });
          }, [c]),
          (0, i.useEffect)(() => {
            n && l && l();
          }, [n, l]),
          n ? s(n, t) : (0, o.jsx)(r.default, {})
        );
      };
      t.default = (0, i.forwardRef)(s);
    },
    98812: (e, t, n) => {
      var a = n(24994);
      t.A = void 0;
      var i = a(n(43693)),
        r = n(96540),
        o = a(n(46942)),
        s = a(n(96384)),
        l = a(n(77158)),
        c = a(n(56372)),
        d = a(n(71719)),
        p = a(n(98243)),
        u = a(n(85446)),
        m = a(n(78572)),
        g = a(n(82541)),
        f = a(n(5556)),
        h = (a(n(2209)), a(n(83736))),
        y = a(n(2056)),
        v = a(n(78899)),
        b = a(n(28926)),
        j = a(n(93978)),
        C = a(n(2395)),
        x = a(n(95368)),
        N = a(n(966)),
        S = a(n(44241)),
        O = a(n(84623)),
        w = a(n(98394)),
        I = n(61383),
        _ = a(n(57753)),
        M = a(n(72697)),
        P = a(n(85135)),
        L = n(94188),
        E = n(8087),
        k = n(51628),
        A = a(n(15062)),
        R = n(92286),
        T = n(29979),
        D = n(93185),
        U = n(1650),
        F = n(62144),
        W = a(n(69588)),
        V = n(74848);
      const B = "top-banner-img-id",
        q = "sign-up-section-id",
        G = () => document.querySelector(".app-body .signup .container"),
        H = () =>
          document.querySelector(
            ".app-body .signup .container .container-inner"
          ),
        $ = () => {
          const e = document.getElementById(B),
            t = e ? e.offsetHeight : 0,
            n = window.innerHeight,
            a = document.getElementById(q);
          a && ((a.style.minHeight = `${n}px`), (a.style.height = `${n}px`));
          const i = G(),
            r = H();
          if (i) {
            const e = n - t + "px";
            (i.style.flexBasis = e),
              (r.style.height = e),
              (r.style.overflow = "auto");
          }
        },
        z = (e) => {
          let { SignupMap: t, code: n, onClose: a, hasAd: i } = e;
          const r = "signpopup" === n ? "confirm" : "already.read";
          return (
            (0, h.default)(() => {
              i && $();
            }),
            (0, V.jsxs)("div", {
              id: "static-page-detail-modal",
              className: (0, o.default)("policy-modal top-ad", {
                "sign-popup": "signpopup" === n,
              }),
              children: [
                (0, V.jsx)("div", {
                  className: "header-actions",
                  children: (0, V.jsx)("div", {
                    className: "text-right",
                    children: (0, V.jsx)("div", {
                      className: "btn-close",
                      onClick: a,
                      children: (0, V.jsx)("i", {
                        className: "mps-close",
                      }),
                    }),
                  }),
                }),
                (0, V.jsx)("h2", {
                  className: "title-center",
                  children: (0, D.getName)(t.getIn([n, "displayname"])),
                }),
                (0, V.jsxs)("div", {
                  className: "policy-container",
                  children: [
                    t.getIn([n, "content"]) &&
                      (0, V.jsx)("div", {
                        className: "content",
                        children: (0, V.jsx)("div", {
                          dangerouslySetInnerHTML: {
                            __html: t.getIn([n, "content"]).get("content"),
                          },
                        }),
                      }),
                    (0, V.jsx)(s.default, {
                      onClick: a,
                      children: k.i18n[r],
                    }),
                  ],
                }),
              ],
            })
          );
        };
      class X extends r.Component {
        constructor() {
          super(...arguments),
            (0, i.default)(this, "state", {
              hasAd: !1,
              hasAdIsClose: !1,
              isDynamicLoaded: !1,
            }),
            (0, i.default)(this, "onBannerClose", () => {
              this.setState({
                hasAd: !1,
                hasAdIsClose: !0,
              });
            }),
            (0, i.default)(this, "resetCaptcha", () => {
              this.inputSecure &&
                (this.inputSecure.clearCurrValue(),
                this.inputSecure.renewCaptcha());
            }),
            (0, i.default)(this, "closeSignup", () => {
              this.props.logoClick();
            }),
            (0, i.default)(this, "displayControl", (e) => {
              const { registrationSetting: t } = this.props,
                n = t.getIn(["regsettingmap", e, "display"]);
              return (e) => (n ? e : null);
            }),
            (0, i.default)(this, "ulagentRenderer", () => {
              const {
                  form: { decorateInput: e },
                  registrationSetting: t,
                  checkUlagent: n,
                  fromAgent: a,
                  ulagentAccount: i,
                } = this.props,
                r = a && i;
              return t.getIn(["regsettingmap", "ulagentaccount", "display"]) &&
                r
                ? (0, V.jsxs)("div", {
                    className: "nrc-form-item input-group",
                    children: [
                      (0, V.jsx)("div", {
                        className: "nrc-form-label",
                        children: (0, V.jsx)("label", {
                          children: (0, D.getName)(t.get("ulagentaccounti18n")),
                        }),
                      }),
                      (0, V.jsxs)("div", {
                        className: "nrc-form-input nrc-u-1-1",
                        children: [
                          (0, V.jsx)("input", {
                            type: "text",
                            value: i,
                            readOnly: !0,
                          }),
                          (0, V.jsx)("small", {
                            className: "info-msg",
                            children: (0, D.getName)(
                              t.get("ulagentaccounttipi18n")
                            ),
                          }),
                        ],
                      }),
                    ],
                  })
                : this.displayControl("ulagentaccount")(
                    (0, V.jsx)(b.default, {
                      ref: "ulagentaccount",
                      name: "ulagentaccount",
                      labelName: (0, D.getName)(t.get("ulagentaccounti18n")),
                      setting: t.getIn(["regsettingmap", "ulagentaccount"]),
                      className: "input-group",
                      decorateInput: e,
                      emptyMsg: k.i18n["validate.empty"],
                      options: {
                        info: t.getIn([
                          E.templateTipNameMapEnum.ulagentaccount,
                          k.currLocale,
                        ]),
                        rule: {
                          validator: [
                            (e) => !this.props.checkUlagentSearchSuggest(e),
                          ],
                          tip: [k.i18n["validate.agent"]],
                        },
                      },
                      children: (0, V.jsx)(u.default, {
                        type: "text",
                        autoCapitalize: "none",
                        placeholder: (0, D.getName)(
                          t.get("ulagentaccounti18n")
                        ),
                        readOnly: r,
                        defaultValue: i,
                        onChange: (e) =>
                          this.props.onIdChange(e, "ulagentaccount", n),
                        onBlur: (e) => {
                          this.props.onIdBlur(
                            e.target.value,
                            "ulagentaccount",
                            n
                          );
                        },
                      }),
                    })
                  );
            }),
            (0, i.default)(this, "onImportLoaded", () => {
              this.setState({
                isDynamicLoaded: !0,
              });
            }),
            (0, i.default)(this, "updateSignUpState", (e) => {
              this.props.setSignupState({
                turnstile: e,
              });
            });
        }
        componentDidMount() {
          this.props.getStaticPages();
        }
        componentDidUpdate(e, t) {
          if (
            (this.props.RegisterAd !== e.RegisterAd &&
              !this.state.hasAd &&
              this.props.RegisterAd.getIn([0, "status"]) &&
              !this.state.hasAdIsClose &&
              this.setState({
                hasAd: !0,
              }),
            !this.state.hasAd && t.hasAd)
          ) {
            const e = document.getElementById(q);
            e && (e.style.height = "auto");
            const t = G(),
              n = H();
            t &&
              ((t.style.flexBasis = "100%"),
              (n.style.height = ""),
              (n.style.overflow = ""));
          }
        }
        affiliateRenderer() {
          const {
            affiliateId: e,
            form: { decorateInput: t },
            registrationSetting: n,
            checkAffiliate: a,
            fromAffiliate: i,
          } = this.props;
          return this.displayControl("affiliateid")(
            (0, V.jsx)(b.default, {
              ref: "affiliateid",
              name: "affiliateid",
              labelName: (0, D.getName)(n.get("affiliateidi18n")),
              setting: n.getIn(["regsettingmap", "affiliateid"]),
              className: "input-group",
              decorateInput: t,
              emptyMsg: k.i18n["validate.empty"],
              options: {
                info: n.getIn([
                  E.templateTipNameMapEnum.affiliateid,
                  k.currLocale,
                ]),
                rule: {
                  validator: [(e) => !this.props.checkResultAffiliate(e)],
                  tip: [k.i18n["validate.affiliate"]],
                },
              },
              children: (0, V.jsx)(u.default, {
                type: "text",
                autoCapitalize: "none",
                placeholder: (0, D.getName)(n.get("affiliateidi18n")),
                readOnly: i,
                value: this.props.affiliateSuccess ? e : void 0,
                onChange: (e) => this.props.onIdChange(e, "affiliateid", a),
                onBlur: (e) => {
                  this.props.onIdBlur(e.target.value, "affiliateid", a);
                },
              }),
            })
          );
        }
        playeridRenderer() {
          const {
              form: { decorateInput: e },
              registrationSetting: t,
              getPlayersLookup: n,
            } = this.props,
            a = t.getIn(["regsettingmap", "playerid", "prefixchar"]) || "",
            i = t.getIn(["regsettingmap", "playerid", "alphabet"]),
            r =
              Number(t.getIn(["regsettingmap", "playerid", "maxlength"])) -
              a.length,
            o =
              Number(t.getIn(["regsettingmap", "playerid", "minlength"])) -
              a.length,
            s = t.getIn(["regsettingmap", "playerid", "numeric"]),
            l = {
              alphabet: i,
              maxlength: r,
              minlength: o,
              numeric: s,
            };
          return [
            a.length > 0 &&
              (0, V.jsx)(
                "style",
                {
                  children: `\n          .nrc-form-item.prefix .nrc-form-input {\n            position: relative;\n          }\n          .nrc-form-item.prefix .nrc-form-input:before {\n            position: absolute;\n            top: 1px;\n            left: 1px;\n            content: "${a}";\n            color: #777;\n            height: 43px;\n            line-height: 43px;\n            padding: 0 5px;\n            background-color: #ccc;\n            width: 100px;\n            text-align: center;\n          }\n          .nrc-form-item.prefix .nrc-form-input input {\n            padding-left: 115px;\n          }\n        `,
                },
                `playerid-${a}`
              ),
            (0, V.jsx)(
              d.default,
              {
                className: "input-group prefix",
                label: "playerid",
                labelName: k.i18n["player.label"],
                isItemRequire: !0,
                children: e("playerid", {
                  info: t.getIn([
                    E.templateTipNameMapEnum.playerid,
                    k.currLocale,
                  ]),
                  rule: {
                    validator: [
                      ...(0, U.getPlayeridValidator)(l, k.i18n).validator,
                      () => this.props.checkAccount(),
                    ],
                    tip: [
                      ...(0, U.getPlayeridValidator)(l, k.i18n).tip,
                      k.i18n["account.error"],
                    ],
                  },
                })(
                  (0, V.jsx)(u.default, {
                    type: "text",
                    autoCapitalize: "none",
                    placeholder: k.i18n["player.label"],
                    onChange: (e) =>
                      this.props.onChangeAccount(e.toLowerCase()),
                    value: this.props.signupState.account,
                    maxLength: r,
                    onBlur: (e) => {
                      const t = `${a}${e.target.value.toLowerCase()}`,
                        i = e.target.value.length;
                      i >= o && i <= r && this.props.onIdBlur(t, "playerid", n);
                    },
                  })
                ),
              },
              `playerid-${o}-${r}`
            ),
          ];
        }
        render() {
          const { hasAd: e, isDynamicLoaded: t } = this.state,
            {
              form: { decorateInput: a, getFormItems: i },
              registrationSetting: r,
              mobileStatus: o,
              sendVerificationCodeToMobile: s,
              openErrorModal: l,
              onChangeSecure: f,
              onChangeValidateCode: h,
              toggleAgreePolicyModal: P,
              signupState: q,
              setSignupState: G,
              onRegister: H,
              isOpenImgCaptcha: X,
              onImgCaptchaVerifyHandler: Y,
              onImgCaptchaClose: Q,
              renderProps: {
                isidLoading: Z,
                requireMobileValidate: K,
                SignupMap: J,
                securitylevel: ee,
                isNeedCheckAgreePolicy: te,
                agreePolicyCode: ne,
                mobileAuthOnlyContury: ae,
                isidTyping: ie,
              },
              groupConfig: re,
            } = this.props,
            oe = (0, D.getTextTransform)(
              r.getIn(["regsettingmap", "firstname", "caserule"])
            ),
            se =
              (te && q.shouldCheckAgreePolicy) ||
              !t ||
              Z ||
              ie() ||
              !q.turnstile;
          return (0, V.jsxs)("section", {
            id: "sign-up-section-id",
            className: "hover-container signup",
            children: [
              (0, V.jsx)(W.default, {
                hasAd: e,
                data: this.props.RegisterAd.get(0),
                onClose: this.onBannerClose,
                topBannerImgId: B,
                adjustFixedModalOffset: $,
              }),
              q.showSignPopUpModal &&
                (0, V.jsx)(z, {
                  SignupMap: J,
                  code: "signpopup",
                  onClose: () => {
                    G({
                      showSignPopUpModal: !1,
                    });
                  },
                  hasAd: e,
                }),
              q.showSignupSuccessModal &&
                (0, V.jsx)(_.default, {
                  onHandleClose: () => {
                    G({
                      showSignupSuccessModal: !1,
                    }),
                      this.props.history.push(A.default.ROOT);
                  },
                  closeTxt: k.i18n["game.home"],
                  customBtn: {
                    onClickAction: () => {
                      G({
                        showSignupSuccessModal: !1,
                      }),
                        this.props.history.push(A.default.DEPOSIT);
                    },
                    customBtnText: k.i18n["to.deposit"],
                  },
                  message: k.i18n["msg.register.success"],
                  success: !0,
                }),
              q.showAgreePolicyModal &&
                (0, V.jsx)(z, {
                  SignupMap: J,
                  code: ne,
                  onClose: () => {
                    P();
                  },
                  hasAd: e,
                }),
              q.showImgUrl &&
                (0, V.jsxs)("div", {
                  className: "img-viewer",
                  onClick: () => this.props.onShowUploadImg(),
                  children: [
                    (0, V.jsx)("img", {
                      src: q.showImgUrl,
                      alt: "",
                    }),
                    (0, V.jsx)("span", {
                      children: q.title,
                    }),
                  ],
                }),
              (0, V.jsx)(I.Content6, {
                ...this.props,
              }),
              (0, V.jsx)("div", {
                className: "container",
                children: (0, V.jsxs)("div", {
                  className: "container-inner",
                  children: [
                    (0, V.jsx)("div", {
                      className: "header-actions",
                      children: (0, V.jsx)("img", {
                        className: "close",
                        alt: "close",
                        src: "https://img.alltocon.com/img/static/ic-cancel.svg",
                        onClick: this.closeSignup,
                      }),
                    }),
                    (0, V.jsx)(I.Content1, {
                      ...this.props,
                    }),
                    (0, V.jsxs)(c.default, {
                      className: "signup-form",
                      children: [
                        (0, V.jsx)("div", {
                          className: "steps-wrapper",
                          children: (0, V.jsx)("h2", {
                            children: k.i18n["signup.step.info"],
                          }),
                        }),
                        (0, V.jsx)(I.Content2, {
                          ...this.props,
                        }),
                        this.affiliateRenderer(),
                        this.ulagentRenderer(),
                        this.playeridRenderer(),
                        (0, V.jsx)(d.default, {
                          className: "input-group password",
                          label: "password",
                          labelName: k.i18n["password.label"],
                          isItemRequire: r.getIn([
                            "regsettingmap",
                            "password",
                            "required",
                          ]),
                          children: a("password", {
                            info: r.getIn([
                              E.templateTipNameMapEnum.password,
                              k.currLocale,
                            ]),
                            rule: (0, U.getPasswordLevelValidator)(
                              k.i18n,
                              ee,
                              q.account
                            ),
                          })(
                            (0, V.jsx)(
                              v.default,
                              {
                                placeholder: k.i18n["password.label"],
                                autoComplete: "new-password",
                                className: "nrc-form-password",
                                maxLength: Number(U.PASSWORD_MAX_LENGTH),
                              },
                              `password_${ee}_${q.account}`
                            )
                          ),
                        }),
                        this.displayControl("confirmpassword")(
                          (0, V.jsx)(d.default, {
                            className: "input-group",
                            label: "confirmpassword",
                            labelName: k.i18n["confirm.password"],
                            isItemRequire: r.getIn([
                              "regsettingmap",
                              "confirmpassword",
                              "required",
                            ]),
                            children: a("confirmpassword", {
                              info: r.getIn([
                                E.templateTipNameMapEnum.confirmpassword,
                                k.currLocale,
                              ]),
                              rule: {
                                validator: [(e) => i().password === e],
                                tip: [k.i18n["validate.confirmpassword"]],
                              },
                            })(
                              (0, V.jsx)(v.default, {
                                maxLength: Number(U.PASSWORD_MAX_LENGTH),
                                className: "nrc-form-password",
                                placeholder: k.i18n["confirm.password"],
                              })
                            ),
                          })
                        ),
                        this.displayControl("currency")(
                          (0, V.jsx)(d.default, {
                            className: "input-group",
                            label: "currency",
                            labelName: k.i18n["currency.label"],
                            isItemRequire: r.getIn([
                              "regsettingmap",
                              "currency",
                              "required",
                            ]),
                            children: a("currency", {
                              info: r.getIn([
                                E.templateTipNameMapEnum.currency,
                                k.currLocale,
                              ]),
                            })(
                              (0, V.jsx)(M.default, {
                                className: "nrc-form-input nrc-u-1-1",
                                options: R.currencyOptions,
                                defaultValue: L.defaultCurrency,
                              })
                            ),
                          })
                        ),
                        (0, V.jsx)(b.default, {
                          ref: "firstname",
                          name: "firstname",
                          labelName: k.i18n.realname,
                          setting: r.getIn(["regsettingmap", "firstname"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.firstname,
                              k.currLocale,
                            ]),
                            rule: (0, U.firstnameValidator)(
                              k.i18n,
                              k.currLocale,
                              !0,
                              this.props.registrationSetting.getIn([
                                "regsettingmap",
                                "firstname",
                              ])
                            ),
                          },
                          children: (0, V.jsx)(u.default, {
                            type: "text",
                            onInput: oe,
                            placeholder: k.i18n.realname,
                          }),
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "pin",
                          name: "pin",
                          labelName: k.i18n.pin,
                          setting: r.getIn(["regsettingmap", "pin"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.pin,
                              k.currLocale,
                            ]),
                            rule: (0, U.checkPinValidator)(k.i18n),
                          },
                          children: (0, V.jsx)(u.default, {
                            type: "password",
                            placeholder: k.i18n.pin,
                          }),
                        }),
                        this.displayControl("confirmpin")(
                          (0, V.jsx)(d.default, {
                            className: "input-group",
                            label: "confirmpin",
                            labelName: k.i18n["confirm.pin"],
                            isItemRequire: r.getIn([
                              "regsettingmap",
                              "confirmpin",
                              "required",
                            ]),
                            children: a("confirmpin", {
                              info: r.getIn([
                                E.templateTipNameMapEnum.confirmpin,
                                k.currLocale,
                              ]),
                              rule: {
                                validator: [
                                  (e) => !(0, y.default)(e),
                                  (e) => i().pin === e,
                                ],
                                tip: [
                                  k.i18n["validate.empty"],
                                  k.i18n["validate.confirmpin"],
                                ],
                              },
                            })(
                              (0, V.jsx)(u.default, {
                                type: "password",
                                placeholder: k.i18n["confirm.pin"],
                              })
                            ),
                          })
                        ),
                        (0, V.jsx)(b.default, {
                          ref: "birthday",
                          name: "birthday",
                          labelName: k.i18n.birthday,
                          setting: r.getIn(["regsettingmap", "birthday"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.birthday,
                              k.currLocale,
                            ]),
                          },
                          children: (0, V.jsx)(m.default, {
                            isRangeCalendar: !1,
                            fullFormat: "YYYY-MM-DD",
                            defaultView: (0, T.yearsBefore)(T.adultAge),
                            disabledStartDate: (e) =>
                              (0, T.disableBirthdayDate)(e),
                            placeholder: k.i18n.birthday,
                          }),
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "email",
                          name: "email",
                          labelName: k.i18n["email.label"],
                          setting: r.getIn(["regsettingmap", "email"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.email,
                              k.currLocale,
                            ]),
                            rule: (0, U.checkEmailAndLengthValidator)(k.i18n),
                          },
                          children: (0, V.jsx)(u.default, {
                            type: "email",
                            placeholder: k.i18n["email.label"],
                          }),
                        }),
                        (0, V.jsx)(w.default, {
                          ref: "dynamic-ref",
                          load: () =>
                            Promise.all([n.e(7271), n.e(1007)]).then(
                              n.bind(n, 1007)
                            ),
                          onLoaded: this.onImportLoaded,
                          children: (e, t) => {
                            let {
                              mobileFormatValidator: n,
                              checkIsMobileFormatValid: i,
                            } = e;
                            return (0, V.jsxs)(V.Fragment, {
                              children: [
                                (0, V.jsx)(b.default, {
                                  ref: t,
                                  name: "mobile",
                                  labelName: k.i18n.mobile,
                                  setting: r.getIn(["regsettingmap", "mobile"]),
                                  className: "input-group",
                                  decorateInput: a,
                                  emptyMsg: k.i18n["validate.empty"],
                                  options: {
                                    info: r.getIn([
                                      E.templateTipNameMapEnum.mobile,
                                      k.currLocale,
                                    ]),
                                    rule: n(k.i18n),
                                  },
                                  children: (0, V.jsx)(g.default, {
                                    autoFormat: !1,
                                    defaultCountry: E.defaultTelCountry,
                                    onlyCountries: ae,
                                    onChange: (e) => {
                                      G({
                                        mobile: e,
                                      });
                                    },
                                  }),
                                }),
                                K &&
                                  (0, V.jsx)(d.default, {
                                    label: "",
                                    isItemRequire: !0,
                                    className: "input-group",
                                    labelName:
                                      k.i18n[
                                        "mobile.validate.verification.code"
                                      ],
                                    children: (0, V.jsx)(O.default, {
                                      mobileStatus: o,
                                      value: q.validateCode,
                                      disabled:
                                        0 === q.mobile.length || !i(q.mobile),
                                      error: q.validateCodeEmpty,
                                      onChange: h,
                                      onCountdownTimeout: () => {
                                        G({
                                          validateCode: "",
                                        }),
                                          l(
                                            k.i18n[
                                              `error.${F.VERIFY_MOBILE_FAILURE}.general`
                                            ]
                                          );
                                      },
                                      onClickGetCode: () => s(q.mobile),
                                      placeholder:
                                        k.i18n[
                                          "mobile.validate.verification.code"
                                        ],
                                    }),
                                  }),
                              ],
                            });
                          },
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "im1",
                          name: "im1",
                          labelName: (0, D.getName)(r.get("im1i18n")),
                          setting: r.getIn(["regsettingmap", "im1"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.im1,
                              k.currLocale,
                            ]),
                          },
                          children: (0, V.jsx)(u.default, {
                            type: "text",
                            maxLength: Number(U.QQWECHAT_MAX_LENGTH),
                            placeholder: (0, D.getName)(r.get("im1i18n")),
                          }),
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "im2",
                          name: "im2",
                          labelName: (0, D.getName)(r.get("im2i18n")),
                          setting: r.getIn(["regsettingmap", "im2"]),
                          className: "input-group",
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.im2,
                              k.currLocale,
                            ]),
                          },
                          children: (0, V.jsx)(u.default, {
                            type: "text",
                            maxLength: Number(U.QQWECHAT_MAX_LENGTH),
                            placeholder: (0, D.getName)(r.get("im2i18n")),
                          }),
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "pic1",
                          name: "pic1",
                          className: "input-group",
                          labelName: (0, D.getName)(r.get("pic1i18n")),
                          setting: r.getIn(["regsettingmap", "pic1"]),
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.pic1,
                              k.currLocale,
                            ]),
                            rule: (0, U.checkUploadImgFileSize)({
                              i18n: k.i18n,
                            }),
                          },
                          otherComponent: q.idImgUrl
                            ? (0, V.jsx)("i", {
                                className: "mps-search img-viewer-icon",
                                title: k.i18n["view.upload.img"],
                                onClick: () =>
                                  this.props.onShowUploadImg(
                                    q.idImgUrl,
                                    (0, D.getName)(r.get("pic1i18n"))
                                  ),
                              })
                            : null,
                          children: (0, V.jsx)(p.default, {
                            uploadLabel: k.i18n["select.image"],
                            uploadingLabel: k.i18n.uploading,
                            onChange: (e) => {
                              this.props.onPicImgUpload(e, "idImgUrl");
                            },
                            onDelete: () =>
                              this.props.onUploadFileDelete(
                                "idImgUrl",
                                "newIdImgFile"
                              ),
                            inputSpan: "1-2",
                          }),
                        }),
                        (0, V.jsx)(b.default, {
                          ref: "pic2",
                          name: "pic2",
                          className: "input-group",
                          labelName: (0, D.getName)(r.get("pic2i18n")),
                          setting: r.getIn(["regsettingmap", "pic2"]),
                          decorateInput: a,
                          emptyMsg: k.i18n["validate.empty"],
                          options: {
                            info: r.getIn([
                              E.templateTipNameMapEnum.pic2,
                              k.currLocale,
                            ]),
                            rule: (0, U.checkUploadImgFileSize)({
                              i18n: k.i18n,
                            }),
                          },
                          otherComponent: q.bankImgUrl
                            ? (0, V.jsx)("i", {
                                className: "mps-search img-viewer-icon",
                                title: k.i18n["view.upload.img"],
                                onClick: () =>
                                  this.props.onShowUploadImg(
                                    q.bankImgUrl,
                                    (0, D.getName)(r.get("pic2i18n"))
                                  ),
                              })
                            : null,
                          children: (0, V.jsx)(p.default, {
                            uploadLabel: k.i18n["select.image"],
                            uploadingLabel: k.i18n.uploading,
                            onChange: (e) => {
                              this.props.onPicImgUpload(e, "bankImgUrl");
                            },
                            onDelete: () =>
                              this.props.onUploadFileDelete(
                                "bankImgUrl",
                                "newBankImgFile"
                              ),
                            inputSpan: "1-2",
                          }),
                        }),
                        te &&
                          (0, V.jsxs)("div", {
                            className: "tips",
                            children: [
                              (0, V.jsx)("input", {
                                type: "checkbox",
                                id: "agree",
                                onChange: () => {
                                  G({
                                    agreePolicy: !q.agreePolicy,
                                    shouldCheckAgreePolicy: q.agreePolicy,
                                  });
                                },
                                checked: q.agreePolicy,
                              }),
                              (0, V.jsx)("label", {
                                htmlFor: "agree",
                              }),
                              k.i18n["tips.agreement"],
                              (0, V.jsx)("span", {
                                className: "policy-btn",
                                onClick: () => P(ne),
                                children: `${(0, D.getName)(
                                  J.getIn([ne, "displayname"])
                                )}`,
                              }),
                            ],
                          }),
                        te &&
                          q.shouldCheckAgreePolicy &&
                          (0, V.jsx)("div", {
                            className: "nrc-form-input policy",
                            children: (0, V.jsx)("small", {
                              className: "invalid-msg",
                              children: k.i18n["validate.policy"],
                            }),
                          }),
                        (0, V.jsx)(b.default, {
                          ref: "captcha",
                          name: "captcha",
                          labelName: (0, D.getName)(r.get("captchai18n")),
                          setting: r.getIn(["regsettingmap", "captcha"]),
                          className: "input-group",
                          decorateInput: a,
                          signup: !0,
                          children: (0, V.jsxs)(V.Fragment, {
                            children: [
                              (0, V.jsx)(N.default, {
                                ref: (e) => (this.inputSecure = e),
                                name: "code",
                                checkSecure: f,
                                placeholder: (0, D.getName)(
                                  r.get("captchai18n")
                                ),
                              }),
                              q.captchaEmpty
                                ? (0, V.jsx)("div", {
                                    className: "nrc-form-input captcha-msg",
                                    children: (0, V.jsx)("small", {
                                      className: "invalid-msg",
                                      children: k.i18n["error.login.1"],
                                    }),
                                  })
                                : (0, V.jsx)("div", {
                                    className: "nrc-form-input captcha-msg",
                                    children: (0, V.jsx)("small", {
                                      className: "info-msg",
                                      children: (0, D.getName)(
                                        r.get("captchatipi18n")
                                      ),
                                    }),
                                  }),
                            ],
                          }),
                        }),
                        (0, V.jsx)(I.Content5, {
                          ...this.props,
                          onRegister: H,
                          onRegisterDisabled:
                            (te && q.shouldCheckAgreePolicy) || !t || Z || ie(),
                        }),
                        (0, V.jsx)(S.default, {
                          isSignup: !0,
                        }),
                      ],
                    }),
                    (0, V.jsx)(I.Content3, {
                      ...this.props,
                    }),
                    X &&
                      (0, V.jsx)(j.default, {
                        onVerifySuc: Y,
                        onClose: Q,
                      }),
                    (0, V.jsxs)("div", {
                      className: "top25",
                      children: [
                        (0, V.jsx)(x.default, {
                          onAuth: this.updateSignUpState,
                          size: "flexible",
                        }),
                        (0, V.jsx)(C.default, {
                          onClick: H,
                          disabled: se,
                          children: k.i18n["signup.now"],
                        }),
                      ],
                    }),
                    (0, V.jsx)(I.Content4, {
                      ...this.props,
                    }),
                  ],
                }),
              }),
            ],
          });
        }
      }
      (X.contextTypes = {
        router: f.default.object,
      }),
        (t.A = (0, P.default)(
          (0, l.default)({
            withRef: !0,
          })(X)
        ));
    },
  },
]);
