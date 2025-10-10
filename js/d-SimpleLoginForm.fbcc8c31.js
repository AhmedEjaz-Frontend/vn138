"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [7749],
  {
    28708: (e, r, a) => {
      var t = a(24994);
      Object.defineProperty(r, "__esModule", {
        value: !0,
      }),
        (r.default = void 0),
        t(a(96540));
      var n = t(a(55665)),
        l = a(78106),
        i = a(28651),
        s = t(a(87282)),
        o = t(a(55505)),
        d = t(a(61499)),
        c = a(51628),
        p = t(a(15062)),
        u = a(74848);
      r.default = (e) => {
        let {
          accountPlaceholder: r,
          passwordPlaceholder: a,
          visible: t,
          visibleEyeRenderer: h,
          isShowCaptcha: g,
          captchaPlaceholder: f,
          loginValues: m,
          columnRef: b,
          onInputChange: v,
          onSubmit: w,
          onKeyUp: j,
          onChangeRememberLogin: y,
        } = e;
        const { isShowThirdPartyLogin: x } = (0, n.default)((e) => ({
            isShowThirdPartyLogin: e.thirdPartyLogin.isShowThirdPartyLogin,
          })),
          { push: P } = (0, l.useHistory)();
        return (0, u.jsxs)("div", {
          className: "simple-logo-wrap",
          children: [
            (0, u.jsx)("div", {
              className: "input-wrap account",
              children: (0, u.jsx)("input", {
                ref: b.acc,
                type: "text",
                placeholder: r,
                className: "username-btn",
                value: m.playerId,
                onChange: (e) => {
                  v(e.target.value, "playerId");
                },
              }),
            }),
            (0, u.jsxs)("div", {
              className: "input-wrap password",
              children: [
                (0, u.jsx)("input", {
                  ref: b.pwd,
                  type: t ? "text" : "password",
                  placeholder: a,
                  className: "password-btn",
                  onKeyUp: j,
                  value: m.playerPassword,
                  onChange: (e) => {
                    v(e.target.value, "playerPassword");
                  },
                }),
                h(),
                (0, u.jsx)(i.Link, {
                  to: "/forgetpassword",
                  className: "forgot-password",
                  title: c.i18n.forgetpassword,
                  children: c.i18n.forgetpassword,
                }),
              ],
            }),
            (0, u.jsx)(o.default, {
              onChangeRememberLogin: y,
            }),
            g &&
              (0, u.jsx)("div", {
                className: "input-wrap captcha",
                children: (0, u.jsx)(s.default, {
                  ref: b.captcha,
                  onSubmit: w,
                  captchaPlaceholder: f,
                }),
              }),
            (0, u.jsxs)("div", {
              className: "btn-wrap",
              children: [
                (0, u.jsxs)("div", {
                  className: "header-btn highlight-btn login",
                  onClick: w,
                  children: [
                    (0, u.jsx)("div", {
                      children: c.i18n.memberLogin,
                    }),
                    x &&
                      (0, u.jsx)("i", {
                        className: "mps-arrow-down",
                      }),
                  ],
                }),
                (0, u.jsx)(d.default, {}),
              ],
            }),
            (0, u.jsx)("div", {
              className: "header-btn signup",
              onClick: () => P(p.default.SIGNUP),
              children: (0, u.jsx)("div", {
                children: c.i18n.freeRegistration,
              }),
            }),
          ],
        });
      };
    },
    55505: (e, r, a) => {
      var t = a(24994);
      Object.defineProperty(r, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(r, "default", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        a(66838);
      var n = t(a(87293));
    },
    66838: (e, r, a) => {
      a.r(r);
    },
    87293: (e, r, a) => {
      var t = a(24994);
      Object.defineProperty(r, "__esModule", {
        value: !0,
      }),
        (r.default = void 0);
      var n = (function (e) {
          if ("function" == typeof WeakMap) {
            var r = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              t,
              n = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return n;
            if ((a = r)) {
              if (a.has(e)) return a.get(e);
              a.set(e, n);
            }
            for (const r in e)
              "default" !== r &&
                {}.hasOwnProperty.call(e, r) &&
                ((t =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, r)) &&
                (t.get || t.set)
                  ? a(n, r, t)
                  : (n[r] = e[r]));
            return n;
          })(e);
        })(a(96540)),
        l = t(a(46942)),
        i = t(a(60781)),
        s = a(51628),
        o = t(a(55665)),
        d = a(56291),
        c = a(74848);
      r.default = (e) => {
        let { onChangeRememberLogin: r } = e;
        const { loginSetting: a } = (0, o.default)((e) => ({
            loginSetting: e.players.loginSetting,
          })),
          [t, p] = (0, i.default)(!1),
          [u, h] = (0, n.useState)(d.loginInfoCookie.get().playerPassword);
        return 0 === a.get("loginRememberDays")
          ? null
          : (0, c.jsxs)("div", {
              className: "remeber-login-wrapper",
              children: [
                (0, c.jsxs)("div", {
                  className: "center remeber-login",
                  onMouseEnter: p,
                  onMouseLeave: p,
                  children: [
                    (0, c.jsx)("input", {
                      type: "checkbox",
                      id: "remember-login",
                      onChange: (e) => {
                        h(e.target.checked), r(e.target.checked);
                      },
                      checked: u,
                    }),
                    (0, c.jsx)("label", {
                      htmlFor: "remember-login",
                    }),
                    s.i18n["remember.login"],
                  ],
                }),
                u &&
                  (0, c.jsx)("div", {
                    className: (0, l.default)("center remeber-login-tip", {
                      "simple-login-remember-tip": t,
                    }),
                    children: s.i18n["remember.login.tip"],
                  }),
              ],
            });
      };
    },
  },
]);
