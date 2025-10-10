"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1001, 1007, 5455, 8308, 9211],
  {
    1007: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.mobileSchema =
          t.mobileFormatValidator =
          t.checkIsMobileFormatValid =
            void 0);
      var n = a(10804),
        i = a(68561),
        s = a(51628),
        r = a(83597);
      const o = (e) => {
        if (!e) return !0;
        const t = `+${e.replace(/\s+/g, "")}`,
          a = (0, n.parsePhoneNumber)(t);
        if ("VN" === a.regionCode && "uan" === a.type) return !1;
        const i = a.number.e164;
        return a.valid && t === i;
      };
      (t.checkIsMobileFormatValid = o),
        (t.mobileSchema = (0, i.string)()
          .test(
            "is-vi-moobile-valid",
            s.i18n["validate.mobile.dailcode.err"],
            (e) => !e || !r.isViMobileField || e.includes(" ")
          )
          .test(
            "is-format-valid",
            s.i18n["validate.mobile.format.err"],
            (e) => !(null == e ? void 0 : e.split(" ")[1]) || o(e)
          )
          .transform(function (e) {
            return r.isViMobileField || (null == e ? void 0 : e.split(" ")[1])
              ? e
              : "";
          })),
        (t.mobileFormatValidator = (e) => ({
          validator: [
            (e) => !e || !r.isViMobileField || e.includes(" "),
            (e) => o(e),
          ],
          tip: [
            e["validate.mobile.dailcode.err"],
            e["validate.mobile.format.err"],
          ],
        }));
    },
    1984: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = (n(a(5556)), a(51628)),
        r = n(a(99818)),
        o = n(a(2395)),
        l = n(a(96384)),
        d = a(74848);
      class u extends i.Component {
        render() {
          const {
            sentence: e,
            handleClose: t,
            handleConfirm: a,
            cancelButtonTxt: n,
            confirmButtonTxt: i,
          } = this.props;
          return (0, d.jsx)("div", {
            className: "hover-container",
            children: (0, d.jsx)("div", {
              className: "modal confirmation",
              children: (0, d.jsxs)(r.default, {
                children: [
                  (0, d.jsx)("p", {
                    className: "pre-line",
                    children: e,
                  }),
                  (0, d.jsxs)("div", {
                    children: [
                      t
                        ? (0, d.jsx)(l.default, {
                            className: "grey",
                            onClick: () => t(),
                            children: n || s.i18n.cancel,
                          })
                        : null,
                      a
                        ? (0, d.jsx)(o.default, {
                            onClick: a,
                            children: i || s.i18n.determine,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
          });
        }
      }
      t.default = u;
    },
    2942: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(5556)),
        n(a(96540));
      var i = n(a(52468)),
        s = a(51628),
        r = a(74848);
      const o = (e, t) => (Number(e) < 0 ? "00" : t),
        l = (e) => {
          const {
              hours: t,
              minutes: a,
              seconds: n,
              daysData: { days: d, hoursByDay: u },
            } = (0, i.default)({
              seconds: e.seconds,
              onEnd: e.onEnd,
            }),
            c = l.format(d),
            p = l.format(u),
            h = l.format(t),
            f = l.format(a),
            m = l.format(n);
          return e.isShowDays
            ? (0, r.jsxs)("div", {
                className: "count-down-timer by-days",
                children: [
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(d, c),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.days,
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(u, p),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.hours,
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(a, f),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.minutes,
                  }),
                ],
              })
            : "D:H:M:S" === e.isDateFormat
            ? (0, r.jsxs)("div", {
                className: "count-down-timer",
                children: [
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(d, c),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.days,
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(u, p),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.hours,
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(a, f),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.minutes,
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-number",
                    children: o(n, m),
                  }),
                  (0, r.jsx)("span", {
                    className: "timer-text",
                    children: s.i18n.seconds,
                  }),
                ],
              })
            : (0, r.jsx)("span", {
                className: "count-down-timer",
                children: `${h}:${f}:${m}`,
              });
        };
      (l.format = (e) => (e < 10 ? `0${e}` : e)),
        (l.defaultProps = {
          seconds: 0,
          onEnd: () => {},
          isShowDays: !1,
        }),
        (t.default = l);
    },
    5473: (e, t, a) => {
      a.r(t);
    },
    7333: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.AJAX_GET_ADWEBPAGESHARE_INFO_SUCCESS =
          t.AJAX_GET_ADWEBPAGESHARE_INFO_REQUEST =
          t.AJAX_GET_ADWEBPAGESHARE_INFO_FAILURE =
            void 0),
        (t.AJAX_GET_ADWEBPAGESHARE_INFO_REQUEST =
          "ajax/AJAX_GET_ADWEBPAGESHARE_INFO_REQUEST"),
        (t.AJAX_GET_ADWEBPAGESHARE_INFO_SUCCESS =
          "ajax/AJAX_GET_ADWEBPAGESHARE_INFO_SUCCESS"),
        (t.AJAX_GET_ADWEBPAGESHARE_INFO_FAILURE =
          "ajax/AJAX_GET_ADWEBPAGESHARE_INFO_FAILURE");
    },
    7516: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getRewardContent = void 0);
      var n = a(51628),
        i = a(93185),
        s = a(16510),
        r = a(8087);
      t.getRewardContent = (e) => {
        switch (e.get("rewardType")) {
          case r.rouletteRewardTypeEnum.FIXED_REWARD:
          case r.rouletteRewardTypeEnum.RANDOM_REWARD:
            return (0, s.formatMoney)(e.getIn(["rewardContent", "amount"]));
          case r.rouletteRewardTypeEnum.ACTIVITY_POINTS:
            return `${e.getIn(["rewardContent", "activityPoints"])} ${
              n.i18n["activity.points"]
            }`;
          case r.rouletteRewardTypeEnum.PRODUCT_GIFT:
          case r.rouletteRewardTypeEnum.NO_PRIZE:
            return (0, i.getName)(e.get("rewardName"));
          default:
            return "";
        }
      };
    },
    8032: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getFillSchema = void 0);
      var n = a(84617),
        i = a(1007),
        s = a(51628),
        r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(68561));
      const o = 1048576;
      t.getFillSchema = (e) => {
        let {
          mustFillPlayerInfo: t,
          registrationSetting: a,
          isConfirmpin: l,
        } = e;
        const d = ((e) => {
          let { registrationSetting: t } = e;
          return {
            email: n.emailSchema.default("").required(s.i18n["validate.empty"]),
            firstname: (0, n.getFirstnameSchema)({
              required: !0,
              firstNameSetting:
                null == t ? void 0 : t.getIn(["regsettingmap", "firstname"]),
            }).default(""),
            mobile: i.mobileSchema
              .default("")
              .required(s.i18n["validate.empty"]),
            im1: n.stringSchema.required(s.i18n["validate.empty"]),
            im2: n.stringSchema.required(s.i18n["validate.empty"]),
            pic1: (0, n.resizeUploadImageSchema)({
              fileSize: o,
            }).required(s.i18n["validate.empty"]),
            pic2: (0, n.resizeUploadImageSchema)({
              fileSize: o,
            }).required(s.i18n["validate.empty"]),
            birthdate: n.stringSchema
              .default("")
              .required(s.i18n["validate.empty"]),
            pin: n.pinSchema.default("").required(s.i18n["validate.empty"]),
            confirmpin: (0, n.repeatPasswordSchema)(
              "pin",
              s.i18n["validate.confirmpincode"]
            )
              .default("")
              .required(s.i18n["validate.empty"]),
            password: n.playerCurrentPasswordSchema
              .default("")
              .required(s.i18n["validate.empty"]),
          };
        })({
          registrationSetting: a,
        });
        return r.object({
          ...t.reduce((e, t) => {
            const a = {
              ...e,
              [t]: d[t] || n.stringSchema,
            };
            return "pin" === t && l && (a.confirmpin = d.confirmpin), a;
          }, {}),
        });
      };
    },
    8204: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(46942)),
        r = n(a(75618)),
        o = n(a(13371)),
        l = a(8087),
        d = n(a(5511)),
        u = n(a(76322)),
        c = a(51628),
        p = n(a(67127)),
        h = a(74848);
      t.default = (e) => {
        const { thirdPartyPhoto: t, thirdPartyUserName: a, handleClose: n } = e,
          {
            tabIndex: f,
            setTabIndex: m,
            onClose: g,
            onSubmit: y,
            submitLoading: b,
            isSystemPlayerPageEnabled: v,
            isRandomAccPwdEnabled: j,
          } = (0, d.default)({
            ...e,
            portalId: l.portalIdEnum.DESKTOP,
          }),
          x = (0, u.default)({
            onSubmit: y,
          }),
          P = (0, i.useMemo)(
            () =>
              (0, h.jsx)("img", {
                src:
                  t || "https://img.alltocon.com/img/static/avatar/userpic.png",
                alt: "third-party",
              }),
            [t]
          ),
          C = () => {
            n(), g();
          };
        return (0, h.jsx)("section", {
          className: "hover-container login fast-bind-modal",
          children: (0, h.jsxs)("div", {
            className: "container",
            children: [
              (0, h.jsx)("div", {
                className: "modal-close-btn",
                onClick: C,
                children: (0, h.jsx)("i", {
                  className: "mps-close",
                }),
              }),
              (0, h.jsx)("div", {
                className: "title",
                children: c.i18n["fast.login.bind.account"],
              }),
              (0, h.jsx)("div", {
                className: "modal-content-wrapper",
                children: (0, h.jsxs)(o.default, {
                  classNameForNav: (0, s.default)({
                    "only-one-tab": !v,
                  }),
                  defaultActiveIndex: f,
                  onChange: (e) => m(e),
                  children: [
                    (0, h.jsx)(r.default, {
                      index: "ExistingAccountForm",
                      tab: c.i18n["fast.login.existing.account"],
                      children: (0, h.jsx)(p.default, {
                        ...e,
                        ...x,
                        userPhoto: P,
                        userName: a,
                        onSubmit: y,
                        onClose: C,
                        submitLoading: b,
                        prefixchar: "",
                      }),
                    }),
                    v &&
                      (0, h.jsx)(r.default, {
                        index: "SystemAccountForm",
                        tab: c.i18n["fast.login.system.account"],
                        children: (0, h.jsx)(p.default, {
                          isSystem: !0,
                          ...e,
                          ...x,
                          userPhoto: P,
                          userName: a,
                          onSubmit: y,
                          onClose: C,
                          submitLoading: b,
                          isRandomAccPwdEnabled: j,
                        }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    8485: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43693)),
        s = n(a(5556)),
        r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        o = n(a(2209)),
        l = n(a(94188)),
        d = n(a(2056)),
        u = a(8087),
        c = n(a(77158)),
        p = n(a(56372)),
        h = n(a(71719)),
        f = n(a(85446)),
        m = n(a(96384)),
        g = n(a(82541)),
        y = a(51628),
        b = a(1650),
        v = a(93185),
        j = n(a(35517)),
        x = a(74848);
      class P extends r.Component {
        constructor(e) {
          super(e),
            (0, i.default)(this, "onSubmit", () => {
              const {
                forgetUsername: e,
                form: { getFormItems: t, validate: a },
              } = this.props;
              a() && e(t());
            }),
            (0, i.default)(this, "afterValidation", (e) => {
              this.setState({
                isCountryCodeValid: e,
              });
            }),
            (this.state = {
              isCountryCodeValid: !0,
            });
        }
        render() {
          const {
              form: { decorateInput: e },
              verifyType: t,
              activeshortcuts: a,
            } = this.props,
            { isCountryCodeValid: n } = this.state,
            i = (0, v.getUniversalHyperlink)(
              a,
              "onlinecs",
              l.default.onlineServiceForForgetAccount
            );
          return (0, x.jsxs)("div", {
            className: "flex-center-column",
            style: {
              padding: "20px",
            },
            children: [
              (0, x.jsxs)(p.default, {
                children: [
                  t === u.authVerifyTypeEnum.EMAIL
                    ? (0, x.jsx)(h.default, {
                        className: "",
                        label: "email",
                        labelName: y.i18n.email,
                        isItemRequire: !0,
                        children: e("email", {
                          info: y.i18n["forgetusername.email.info"],
                          rule: (0, b.checkEmailValidator)(y.i18n, !1),
                        })(
                          (0, x.jsx)(f.default, {
                            type: "email",
                          })
                        ),
                      })
                    : (0, x.jsx)(
                        h.default,
                        {
                          className: "",
                          label: "mobile",
                          labelName: y.i18n.mobile,
                          isItemRequire: !0,
                          children: e("mobile", {
                            info: y.i18n["forgetusername.mobile.info"],
                            rule: {
                              validator: [
                                (e) => !(0, d.default)(e),
                                ...(0, b.onlyChinahoneNumber)(
                                  y.i18n,
                                  this.afterValidation
                                ).validator,
                              ],
                              tip: [y.i18n["validate.empty"]],
                            },
                          })(
                            (0, x.jsx)(g.default, {
                              defaultCountry: u.defaultTelCountry,
                              onlyCountries: (0, j.default)(),
                            })
                          ),
                        },
                        "mobile"
                      ),
                  !n &&
                    (0, x.jsx)("span", {
                      className: "nrc-form-item",
                      children: (0, x.jsxs)(
                        "small",
                        {
                          className: "invalid-msg",
                          style: {
                            display: "block",
                            margin: "auto",
                            width: "500px",
                          },
                          children: [
                            y.i18n["forgetusername.mobile.chinaonly"],
                            (0, x.jsx)("a", {
                              target: "_blank",
                              href: i || "",
                              rel: "noreferrer",
                              children: (0, x.jsx)("span", {
                                className: "anchor",
                                children: y.i18n["customer.service"],
                              }),
                            }),
                          ],
                        },
                        "mobile-error"
                      ),
                    }),
                ],
              }),
              (0, x.jsx)(m.default, {
                onClick: this.onSubmit,
                children: y.i18n.search,
              }),
            ],
          });
        }
      }
      (P.PropTypes = {
        activeshortcuts: o.default.list,
        forgetUsername: s.default.func,
        verifyType: s.default.string,
      }),
        (t.default = (0, c.default)({
          withRef: !0,
        })(P));
    },
    10826: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(92834)),
        r = n(a(85935)),
        o = n(a(46942)),
        l = a(51628),
        d = a(74848);
      t.default = (e) => {
        const { className: t, onVerifySuc: a, onClose: n } = e,
          [u, c] = (0, i.useState)(!1);
        return (0, d.jsx)(r.default, {
          className: (0, o.default)(
            "slider-captcha-modal",
            {
              isFailedEffect: u,
            },
            t
          ),
          button: !1,
          title: l.i18n["img.captcha.tips"],
          onClose: () => {
            n && n();
          },
          children: (0, d.jsx)(s.default, {
            onFailed: () => {
              c(!0),
                setTimeout(() => {
                  c(!1);
                }, 300);
            },
            isFailedEffect: u,
            onSuccess: (e) => {
              a && a(e);
            },
          }),
        });
      };
    },
    10926: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = O(a(96540)),
        s = n(a(7541)),
        r = n(a(46942)),
        o = a(79972),
        l = n(a(9404)),
        d = n(a(52622)),
        u = a(65635),
        c = a(67467),
        p = n(a(83736)),
        h = n(a(72524)),
        f = n(a(48841)),
        m = n(a(2395)),
        g = O(a(76066)),
        y = a(53719),
        b = a(83597),
        v = a(38560),
        j = a(8087),
        x = a(51628),
        P = n(a(51767)),
        C = n(a(15062)),
        _ = a(29979),
        S = a(93185),
        M = a(8032),
        E = a(74848);
      function O(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (O = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            s,
            r = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((i = t ? n : a)) {
            if (i.has(e)) return i.get(e);
            i.set(e, r);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (s.get || s.set)
                ? i(r, t, s)
                : (r[t] = e[t]));
          return r;
        })(e, t);
      }
      const A = a(73708)(
          `./${v.platform}/MemberCenter/Common/InputField`
        ).default,
        R = a(73896)(`./${v.platform}/MemberCenter/Common/MobileField`).default,
        w = `${v.platform}-player-info-wrapper`;
      t.default = (e) => {
        let { playerInfoType: t, onBack: a, isPopupModal: n } = e;
        const [v, O] = (0, h.default)({
            isSuccess: !1,
            isShowBankModal: !1,
            registrationSetting: l.default.List(),
            playerInfoReady: l.default.List(),
          }),
          T = (0, c.useDispatch)(),
          N = (0, s.default)(g.getRegistrationSetting),
          I = (0, s.default)(g.checkPlayerInfoReady),
          { registrationSetting: L, playerInfoReady: D, isSuccess: k } = v,
          F = !!D.size,
          U =
            (L.getIn(["regsettingmap", "confirmpin", "infofillentry"]) &
              Number(t)) >
            0,
          W = ["bankCard"];
        let G =
          F &&
          D.get(t)
            .filter((e) => !1 === e)
            .keySeq()
            .filter((e) => W.find((t) => e !== t))
            .reduce(
              (e, t) =>
                "pin" === t && U ? [...e, t, "confirmpin"] : [...e, t],
              []
            );
        G = G.length ? G.concat(["password"]) : G;
        const B = F && !D.getIn([t, "bankCard"]),
          V =
            F &&
            [
              "firstname",
              "birthdate",
              "email",
              "im1",
              "im2",
              "mobile",
              "pic1",
              "pic2",
              "pin",
              "confirmpin",
              "password",
            ].filter((e) => G.find((t) => e === t)),
          H = (0, i.useMemo)(
            () =>
              F &&
              (0, M.getFillSchema)({
                mustFillPlayerInfo: G,
                registrationSetting: L,
                isConfirmpin: U,
              }),
            [F, G, L, U]
          ),
          $ = F ? H.castOrDefault() : "",
          q = (e) => L.getIn([j.templateTipNameMapEnum[e], x.currLocale]),
          K = () => {
            const {
              errors: e,
              isSubmitting: t,
              isValidating: a,
            } = (0, o.useFormikContext)();
            return (
              (0, i.useEffect)(() => {
                if (!t && !a) {
                  const t = Object.keys(e),
                    a = V.find((e) => t.includes(e));
                  if (t.length) {
                    const e = document.querySelector(`.${a}-scroll input`);
                    e &&
                      (e.scrollIntoView({
                        behavior: "smooth",
                        block: "center",
                      }),
                      e.focus({
                        preventScroll: !0,
                      }));
                  }
                }
              }, [t]),
              null
            );
          };
        return (
          (0, p.default)(() => {
            Promise.all([N(), I()]).then((e) => {
              O({
                registrationSetting: l.default.fromJS(e[0]),
                playerInfoReady: l.default.fromJS(e[1]),
              });
            });
          }),
          (0, i.useEffect)(() => {
            !G.length &&
              O({
                isShowBankModal: B,
              });
          }, [G.length, B]),
          (0, E.jsx)(E.Fragment, {
            children: v.isShowBankModal
              ? (0, E.jsx)(f.default, {
                  title: x.i18n.tipsModal,
                  onHandleClose: () => {
                    a({
                      redirectRoute: `${C.default.BANKCARDS}?add=true`,
                    }),
                      T((0, y.modifyPromoDetailModalDispaly)(!1));
                  },
                  message: x.i18n["error.emptybankcard.add"],
                })
              : V.length
              ? (0, E.jsxs)(E.Fragment, {
                  children: [
                    (0, E.jsxs)("section", {
                      className: (0, r.default)(w, {
                        "pop-up-modal": n,
                      }),
                      children: [
                        (0, E.jsxs)("div", {
                          className: "header",
                          children: [
                            (0, E.jsx)("button", {
                              className: "close",
                              onClick: a,
                            }),
                            (0, E.jsx)("h2", {
                              children: x.i18n["fill.info"],
                            }),
                          ],
                        }),
                        (0, E.jsxs)("div", {
                          className: "fill-content",
                          children: [
                            (0, E.jsx)("h4", {
                              children: x.i18n["player.info.title"],
                            }),
                            (0, E.jsx)(u.Formik, {
                              initialValues: $,
                              validationSchema: H,
                              onSubmit: (e) => {
                                const { pic1: a, pic2: n, ...i } = e;
                                (i.password = (0, P.default)(i.password)),
                                  i.pin &&
                                    ((i.pin = (0, P.default)(i.pin)),
                                    delete i.confirmpin),
                                  a && (i.pic1File = a),
                                  n && (i.pic2File = n),
                                  (i.infoFillEntryType =
                                    j.playerInfoReadyEnum[t]),
                                  ((e) => T(g.profileRequiredinfo(e)))(i).then(
                                    (e) => {
                                      null != e &&
                                        e.payload &&
                                        O({
                                          isSuccess: !0,
                                          isShowBankModal: B,
                                        });
                                    }
                                  );
                              },
                              children: (e) => {
                                let { handleSubmit: t } = e;
                                return (0, E.jsxs)(E.Fragment, {
                                  children: [
                                    V.map((e) => {
                                      switch (e) {
                                        case "email":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(A, {
                                                name: e,
                                                isRequired: !0,
                                                info: q(e),
                                                label: x.i18n["email.label"],
                                                type: "email",
                                                actions: ["deleteFocus"],
                                              }),
                                            },
                                            e
                                          );
                                        case "firstname":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(A, {
                                                name: e,
                                                isRequired: !0,
                                                info: q(e),
                                                label: x.i18n.realname,
                                                type: "text",
                                                actions: ["deleteFocus"],
                                              }),
                                            },
                                            e
                                          );
                                        case "mobile":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(R, {
                                                name: e,
                                                isRequired: !0,
                                                isShowInputAction: !0,
                                                info: q(e),
                                                label: x.i18n[e],
                                                type: "number",
                                                autoFormat: !b.isViMobileField,
                                                isViSite: b.isViMobileField,
                                              }),
                                            },
                                            e
                                          );
                                        case "im1":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(A, {
                                                name: e,
                                                isRequired: !0,
                                                info: q(e),
                                                label: (0, S.getName)(
                                                  L.get("im1i18n")
                                                ),
                                                type: "text",
                                                actions: ["deleteFocus"],
                                              }),
                                            },
                                            e
                                          );
                                        case "im2":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(A, {
                                                name: e,
                                                isRequired: !0,
                                                info: q(e),
                                                label: (0, S.getName)(
                                                  L.get("im2i18n")
                                                ),
                                                type: "text",
                                                actions: ["deleteFocus"],
                                              }),
                                            },
                                            e
                                          );
                                        case "pic1":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(
                                                u.ImageUploadField,
                                                {
                                                  name: e,
                                                  isRequired: !0,
                                                  info: q(e),
                                                  label: (0, S.getName)(
                                                    L.get("pic1i18n")
                                                  ),
                                                  uploadLabel:
                                                    x.i18n["select.image"],
                                                }
                                              ),
                                            },
                                            e
                                          );
                                        case "pic2":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `${e}-scroll`,
                                              children: (0, E.jsx)(
                                                u.ImageUploadField,
                                                {
                                                  name: e,
                                                  isRequired: !0,
                                                  info: q(e),
                                                  label: (0, S.getName)(
                                                    L.get("pic2i18n")
                                                  ),
                                                  uploadLabel:
                                                    x.i18n["select.image"],
                                                }
                                              ),
                                            },
                                            e
                                          );
                                        case "birthdate":
                                          return (0, E.jsx)(
                                            "div",
                                            {
                                              className: `input-date-field ${e}-scroll`,
                                              children: (0, E.jsx)(
                                                u.DateField,
                                                {
                                                  name: e,
                                                  isRequired: !0,
                                                  info: q("birthday"),
                                                  label: x.i18n.birthday,
                                                  type: "text",
                                                  disabledDate:
                                                    _.disableBirthdayDate,
                                                  defaultPickerValue: (0,
                                                  _.yearsBefore)(
                                                    _.adultAge
                                                  ).valueOf(),
                                                  isFixCalendarOnInput: !0,
                                                }
                                              ),
                                            },
                                            e
                                          );
                                        case "pin":
                                          return (0, E.jsxs)(E.Fragment, {
                                            children: [
                                              (0, E.jsx)(
                                                "div",
                                                {
                                                  className: `${e}-scroll`,
                                                  children: (0, E.jsx)(A, {
                                                    name: e,
                                                    isRequired: !0,
                                                    info: q(e),
                                                    label: x.i18n[e],
                                                    type: "password",
                                                    actions: ["deleteFocus"],
                                                  }),
                                                },
                                                e
                                              ),
                                              U &&
                                                (0, E.jsx)(
                                                  "div",
                                                  {
                                                    className:
                                                      "confirmpin-scroll",
                                                    children: (0, E.jsx)(A, {
                                                      name: "confirmpin",
                                                      isRequired: !0,
                                                      info: q("confirmpin"),
                                                      label:
                                                        x.i18n["confirm.pin"],
                                                      type: "password",
                                                      actions: ["deleteFocus"],
                                                    }),
                                                  },
                                                  "confirmpin"
                                                ),
                                            ],
                                          });
                                        case "password":
                                          return (0, E.jsxs)(E.Fragment, {
                                            children: [
                                              (0, E.jsx)("input", {
                                                className: "username",
                                              }),
                                              (0, E.jsx)(
                                                "div",
                                                {
                                                  className: `${e}-scroll`,
                                                  children: (0, E.jsx)(A, {
                                                    name: e,
                                                    isRequired: !0,
                                                    type: "password",
                                                    info: x.i18n[
                                                      "plz.enter.current.login.password"
                                                    ],
                                                    label:
                                                      x.i18n.personalPassword,
                                                    actions: [
                                                      "deleteFocus",
                                                      "hind",
                                                    ],
                                                  }),
                                                },
                                                e
                                              ),
                                            ],
                                          });
                                        default:
                                          return null;
                                      }
                                    }),
                                    (0, E.jsx)(K, {}),
                                    (0, E.jsxs)("div", {
                                      className: "btn-group",
                                      children: [
                                        (0, E.jsx)("button", {
                                          className: "fill-player-info-btn",
                                          onClick: a,
                                          children: x.i18n.cancelTheReturn,
                                        }),
                                        (0, E.jsx)(m.default, {
                                          className: "fill-player-info-btn",
                                          onClick: t,
                                          expireTime: 1e3,
                                          children: x.i18n.confirmchanges,
                                        }),
                                      ],
                                    }),
                                  ],
                                });
                              },
                            }),
                          ],
                        }),
                      ],
                    }),
                    k &&
                      (0, E.jsx)(f.default, {
                        success: !0,
                        title: x.i18n.tipsModal,
                        onHandleClose: () =>
                          a({
                            isSuccessAction: !0,
                          }),
                        message: x.i18n["transfer.status.success"],
                      }),
                  ],
                })
              : (0, E.jsx)("div", {
                  className: "loading-wrapper",
                  children: (0, E.jsx)(d.default, {}),
                }),
          })
        );
      };
    },
    12256: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(10926));
      a(36131), (t.default = i.default);
    },
    13393: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(17773));
      a(74886), (t.default = i.default);
    },
    14319: (e, t, a) => {
      var n = a(24994);
      t.A = void 0;
      var i = n(a(43693)),
        s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        r = n(a(96384)),
        o = n(a(77158)),
        l = n(a(56372)),
        d = n(a(85446)),
        u = (n(a(5556)), n(a(2056))),
        c = n(a(78899)),
        p = n(a(55505)),
        h = n(a(28926)),
        f = n(a(93978)),
        m = n(a(41388)),
        g = a(26172),
        y = n(a(61499)),
        b = n(a(79293)),
        v = n(a(97113)),
        j = a(56291),
        x = a(8087),
        P = a(51628),
        C = n(a(51767)),
        _ = a(57160),
        S = a(93185),
        M = a(1650),
        E = a(74848);
      const O = {
        forget: {
          cursor: "pointer",
          textDecoration: "underline",
          fontSize: "12px",
        },
      };
      class A extends s.Component {
        constructor(e) {
          super(e),
            (0, i.default)(this, "pwFocus", () => {
              const e = document.getElementById("login");
              e && e.focus();
            }),
            (0, i.default)(this, "onChangeSecure", (e) => {
              let { captcha: t, captchauuid: a } = e,
                n = this.state.captchaEmpty;
              this.state.captcha && !t ? (n = !0) : t && (n = !1),
                this.setState({
                  captcha: t,
                  captchauuid: a,
                  captchaEmpty: n,
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
                  enableRememberLogin: a,
                } = this.state,
                {
                  form: { getFormItems: n, validate: i },
                  fingerprint2: s,
                  loginSetting: r,
                  isLoginImgCaptcha: o,
                } = this.props,
                { login: l, password: d } = n(),
                u = r.getIn(["loginsettingmap", "captcha", "display"]),
                c = !(!u || o || (e && t));
              if (!i() || c || !s)
                return void (
                  e ||
                  this.setState({
                    captchaEmpty: !0,
                  })
                );
              const p = (0, S.getValueWithoutFirstLastSpace)(
                  l
                ).toLocaleLowerCase(),
                h = (0, C.default)(d, p);
              (this.submitData = {
                loginname: p,
                loginpassword: h,
                captcha: e,
                captchauuid: t,
                fingerprint: s,
                portalid: x.portalIdEnum.DESKTOP,
                rawPassword: a ? d : null,
              }),
                u && o
                  ? this.props.openImgCaptcha()
                  : this.props.loginUser(this.submitData);
            }),
            (this.loginInfo = j.loginInfoCookie.get()),
            (this.state = {
              captcha: null,
              captchauuid: null,
              captchaEmpty: !1,
              password: null,
              enableRememberLogin: !!this.loginInfo.playerPassword,
            }),
            (this.submitData = void 0);
        }
        componentDidMount() {
          const {
            saveFingerPrint2: e,
            loginSuccess: t,
            handleClose: a,
          } = this.props;
          (0, _.getFingerprint2)(e), t ? a() : this.pwFocus();
        }
        UNSAFE_componentWillReceiveProps(e) {
          e.loginSuccess && this.props.handleClose();
        }
        componentDidUpdate(e) {
          if (e.showGlobal498Msg && !this.props.showGlobal498Msg) {
            const {
              form: { resetForm: e },
            } = this.props;
            e(),
              this.inputSecure &&
                (this.inputSecure.clearCurrValue(),
                this.inputSecure.renewCaptcha()),
              this.pwFocus(),
              this.setState({
                captchaEmpty: !1,
              });
          }
          !e.loginSetting.size &&
            this.props.loginSetting.size &&
            this.pwFocus();
        }
        render() {
          const {
              form: e,
              handleClose: t,
              onSignup: a,
              isLoading: n,
              showGlobal498Msg: i,
              onForgetPassword: s,
              onForgetUsername: o,
              loginSetting: v,
              isOpenImgCaptcha: j,
              closeImgCaptcha: x,
            } = this.props,
            { captchaEmpty: C } = this.state,
            { decorateInput: _ } = e;
          return (0, E.jsxs)("section", {
            className: "hover-container login",
            children: [
              n ? (0, E.jsx)(b.default, {}) : null,
              (0, E.jsxs)("div", {
                className: "container",
                style: {
                  height: "auto",
                  width: "620px",
                  paddingBottom: "5px",
                },
                children: [
                  (0, E.jsx)(g.Content1, {
                    ...this.props,
                  }),
                  (0, E.jsxs)("div", {
                    className: "header",
                    children: [
                      (0, E.jsx)("h2", {
                        className: "title-center",
                        children: P.i18n.memberLogin,
                      }),
                      (0, E.jsx)("i", {
                        className: "mps-close",
                        onClick: () => t(),
                      }),
                    ],
                  }),
                  (0, E.jsx)(g.Content2, {
                    ...this.props,
                  }),
                  (0, E.jsxs)("div", {
                    className: "body",
                    children: [
                      (0, E.jsxs)(l.default, {
                        children: [
                          (0, E.jsx)(h.default, {
                            ref: "account",
                            name: "login",
                            setting: v.getIn(["loginsettingmap", "account"]),
                            decorateInput: _,
                            emptyMsg: P.i18n["validate.empty"],
                            labelDirection: "vertical",
                            options: {
                              rule: {
                                validator: [
                                  (e) =>
                                    !(0, u.default)(
                                      (0, S.getValueWithoutFirstLastSpace)(e)
                                    ),
                                ],
                                tip: [P.i18n.pleaseenteraccount],
                              },
                            },
                            children: (0, E.jsx)(d.default, {
                              placeholder: v.getIn([
                                "accounti18n",
                                P.currLocale,
                              ]),
                              type: "text",
                              defaultValue: this.loginInfo.playerId,
                              maxLength: Number(M.ACCOUNT_MAX_LENGTH),
                            }),
                          }),
                          (0, E.jsx)(h.default, {
                            ref: "password",
                            name: "password",
                            setting: v.getIn(["loginsettingmap", "password"]),
                            decorateInput: _,
                            emptyMsg: P.i18n["validate.empty"],
                            labelDirection: "vertical",
                            options: {
                              rule: {
                                validator: [(e) => !(0, u.default)(e)],
                                tip: [P.i18n.pleaseenterpassword],
                              },
                            },
                            children: (0, E.jsx)(c.default, {
                              placeholder: v.getIn([
                                "passwordi18n",
                                P.currLocale,
                              ]),
                              autoComplete: "new-password",
                              className: "nrc-form-password",
                              defaultValue: this.loginInfo.playerPassword,
                              maxLength: Number(M.PASSWORD_MAX_LENGTH),
                              onEnter: () => !i && this.onSubmit(),
                            }),
                          }),
                          (0, E.jsx)(h.default, {
                            ref: "captcha",
                            name: "captcha",
                            setting: v.getIn(["loginsettingmap", "captcha"]),
                            decorateInput: _,
                            labelDirection: "vertical",
                            style: {
                              marginBottom: "28px",
                            },
                            login: !0,
                            children: (0, E.jsxs)(E.Fragment, {
                              children: [
                                (0, E.jsx)(m.default, {
                                  ref: (e) => (this.inputSecure = e),
                                  checkSecure: this.onChangeSecure,
                                  onEnter: () => !i && this.onSubmit(),
                                  placeholder: v.getIn([
                                    "captchai18n",
                                    P.currLocale,
                                  ]),
                                }),
                                C &&
                                  (0, E.jsx)("small", {
                                    className: "invalid-msg",
                                    children: P.i18n["error.login.1"],
                                  }),
                              ],
                            }),
                          }),
                          (0, E.jsx)(g.Content6, {
                            ...this.props,
                            onSubmit: this.onSubmit,
                          }),
                          (0, E.jsx)(p.default, {
                            onChangeRememberLogin: this.onChangeRememberLogin,
                          }),
                          (0, E.jsx)(g.Content7, {
                            ...this.props,
                          }),
                          (0, E.jsx)("div", {
                            className: "flex-center",
                            children: (0, E.jsx)(r.default, {
                              onClick: this.onSubmit,
                              children: P.i18n.userLogin,
                            }),
                          }),
                        ],
                      }),
                      (0, E.jsx)(g.Content3, {
                        ...this.props,
                      }),
                      (0, E.jsxs)("div", {
                        className: "signup-hint text-center",
                        style: {
                          marginTop: "15px",
                        },
                        children: [
                          (0, E.jsx)(y.default, {}),
                          `${P.i18n["not.signup.yet"]} `,
                          (0, E.jsx)("span", {
                            style: {
                              cursor: "pointer",
                            },
                            className: "highlight-color",
                            onClick: a,
                            children: P.i18n["signup.for.free"],
                          }),
                        ],
                      }),
                      (0, E.jsx)(g.Content4, {
                        ...this.props,
                      }),
                      (0, E.jsxs)("div", {
                        className: "flex-right-bottom forget-options",
                        children: [
                          (0, E.jsx)("span", {
                            style: O.forget,
                            className: "highlight-color",
                            onClick: o,
                            children: P.i18n.forgetusername,
                          }),
                          (0, E.jsx)("span", {
                            style: O.forget,
                            className: "highlight-color",
                            onClick: s,
                            children: P.i18n.forget,
                          }),
                        ],
                      }),
                      (0, E.jsx)(g.Content5, {
                        ...this.props,
                      }),
                    ],
                  }),
                ],
              }),
              j &&
                (0, E.jsx)(f.default, {
                  onVerifySuc: this.onImgCaptchaVerifyHandler,
                  onClose: x,
                }),
            ],
          });
        }
      }
      t.A = (0, v.default)(
        (0, o.default)({
          withRef: !0,
        })(A)
      );
    },
    14947: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(96540),
        s = n(a(55665)),
        r = a(67467),
        o = n(a(83736)),
        l = a(61444),
        d = n(a(15062)),
        u = a(28415),
        c = a(72596);
      t.default = function () {
        let { type: e = "login", path: t = d.default.LOGIN } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const [a, n] = (0, i.useState)(!0),
          [p, h] = (0, i.useState)([]),
          [f, m] = (0, i.useState)({}),
          { isShowThirdPartyLogin: g, thirdPartyLoginRegSetting: y } = (0,
          s.default)((e) => ({
            isShowThirdPartyLogin: e.thirdPartyLogin.isShowThirdPartyLogin,
            thirdPartyLoginRegSetting:
              e.thirdPartyLogin.thirdPartyLoginRegSetting,
          })),
          b = (0, r.useDispatch)(),
          v = null == y ? void 0 : y.get("systemPlayerPageEnabled"),
          j = (0, i.useCallback)(() => {
            n(!0);
          }, []);
        return (
          (0, i.useEffect)(() => {
            const e = () => {
              n(!1);
            };
            return (
              window.addEventListener("pagehide", e),
              () => {
                window.removeEventListener("pagehide", e);
              }
            );
          }, []),
          (0, o.default)(() => {
            b((0, l.getThirdPartyLoginSetting)()).then((a) => {
              let { payload: i } = a;
              const { thirdPartyLoginConfig: s } = i,
                r = (0, c.getThirdPartyTypes)(s),
                o = r.reduce((a, n) => {
                  const i = s.filter(
                      (e) => e.thirdPartyType === u.thirdPartyTypeEnum[n]
                    ),
                    r = i.length > 0 ? i[0].oauthConfig : {};
                  return {
                    ...a,
                    [n]: (0, c.getThirdPartyAuthCheckingURL)({
                      thirdPartyType: n,
                      params: r,
                      state: {
                        thirdPartyType: n,
                        path: t,
                        domain: window.location.origin,
                      },
                      type: e,
                    }),
                  };
                }, {});
              h(r), m(o), n(!1);
            });
          }),
          {
            loading: a,
            thirdPartyTypes: p,
            thirdPartyAuthCheckingURLs: f,
            onIconClick: j,
            isShowThirdPartyLogin: g,
            isSystemPlayerPageEnabled: v,
          }
        );
      };
    },
    15692: (e, t, a) => {
      e.exports = a.p + "static/media/icon-zalo.d1b057d7..png";
    },
    16900: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = a(39125),
        r = a(67467),
        o = a(91407),
        l = n(a(94188));
      a(39574);
      var d = a(74848);
      const u = l.default.portal.apiServer.imageServer;
      t.default = (e) => {
        const [t, a] = (0, i.useState)(),
          [n, l] = (0, i.useState)(!0),
          c = (0, r.useDispatch)();
        (0, i.useEffect)(() => {
          const {
            params: { id: t },
          } = e.match;
          c((0, o.getAdWebpageShareInfo)(t)).then((e) => {
            let {
              payload: {
                title: t,
                url: n,
                description: i,
                adImage: s,
                referenceUrl: r,
                thumbnailImageUrl: o,
                thumbnailImagePath: d,
                adAutoCloseTime: u,
                maskColor: c,
              },
            } = e;
            a({
              title: t,
              url: n,
              description: i,
              adImage: s,
              referenceUrl: r,
              thumbnailImageUrl: o,
              thumbnailImagePath: d,
              adAutoCloseTime: u,
              maskColor: c,
            });
            const p = 0 === u ? null : 1e3 * u;
            p && setTimeout(() => l(!1), p);
          });
        }, []);
        const p =
            null != t && t.thumbnailImagePath
              ? `${u}${t.thumbnailImagePath}`
              : null == t
              ? void 0
              : t.thumbnailImageUrl,
          h = (0, i.useMemo)(() => {
            if (t) {
              const e = t.maskColor.split("");
              return e.splice(e.indexOf(")"), 0, ",0.7"), e.join("");
            }
          }, [t]);
        return (0, d.jsx)(d.Fragment, {
          children:
            t &&
            (0, d.jsxs)("div", {
              className: "ad-WebpageShare",
              children: [
                (0, d.jsxs)(s.Helmet, {
                  children: [
                    (0, d.jsx)("title", {
                      children: t.title,
                    }),
                    (0, d.jsx)("meta", {
                      name: "title",
                      content: t.title,
                    }),
                    (0, d.jsx)("meta", {
                      property: "og:title",
                      content: t.title,
                    }),
                    (0, d.jsx)("meta", {
                      property: "og:image",
                      content: `${p}`,
                    }),
                  ],
                }),
                n &&
                  (0, d.jsx)("div", {
                    className: "hover-container",
                    style: {
                      backgroundColor: h,
                    },
                    children: (0, d.jsx)("a", {
                      href: t.url,
                      children: (0, d.jsx)("div", {
                        className: "ad-image",
                        style: {
                          backgroundImage: `url(${u}${
                            null == t ? void 0 : t.adImage
                          })`,
                        },
                        children: (0, d.jsx)("div", {
                          className: "close",
                          onClick: (e) => {
                            e.preventDefault(), l(!1);
                          },
                          children: (0, d.jsx)("i", {
                            className: "mps-close",
                          }),
                        }),
                      }),
                    }),
                  }),
                (0, d.jsx)("iframe", {
                  frameBorder: "0",
                  src: t.referenceUrl,
                }),
              ],
            }),
        });
      };
    },
    17049: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(96540),
        s = n(a(72524)),
        r = n(a(15361)),
        o = n(a(52884));
      t.default = (e, t) => {
        const {
            isSlider: a,
            limit: n,
            visible: l,
            height: d,
            during: u = 1200,
          } = t,
          c = e.size || 0,
          p = (0, i.useMemo)(() => e.map((e, t) => e.set("index", t)), []),
          h = a && c >= n,
          f = l,
          m = (0, i.useRef)(),
          [g, y] = (0, s.default)({
            offset: void 0,
            list: void 0,
            slider: !1,
            renderKey: Date.now(),
          });
        return (
          (0, o.default)(
            () => {
              c &&
                y((e) => ({
                  ...e,
                  offset: 0,
                }));
            },
            () => {
              m.current && clearTimeout(m.current);
            }
          ),
          (0, r.default)(() => {
            let e, t;
            const a = g.offset + f;
            h && a > c
              ? ((e = a - c), (t = [...p.slice(g.offset, c), ...p.slice(0, e)]))
              : (t = p.slice(g.offset, c)),
              (m.current = setTimeout(() => {
                y({
                  slider: !1,
                  list: t,
                  renderKey: Date.now(),
                });
              }, 800));
          }, [g.offset]),
          (0, r.default)(() => {
            h &&
              (m.current = setTimeout(() => {
                y((e) => {
                  let t = e.offset + 1;
                  return (
                    t >= c && (t = 0),
                    {
                      ...e,
                      slider: !0,
                      offset: t,
                    }
                  );
                });
              }, u));
          }, [g.list]),
          {
            list: g.list,
            translateStyle: {
              transform: `translate3d(0, -${g.slider ? d : 0}px, 0)`,
            },
            renderKey: g.renderKey,
          }
        );
      };
    },
    17773: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = a(79972),
        s = a(74848);
      t.default = (e) => {
        let { name: t, isFocus: a } = e;
        const { values: n, setFieldValue: r } = (0, i.useFormikContext)(),
          o = (0, i.getIn)(n, t),
          l = o.split(" ")[0],
          d = o.split(" ")[1];
        return (
          a &&
          !!d &&
          (0, s.jsx)("div", {
            className: "clear-icon",
            onMouseDown: (e) => {
              0 === e.button && r(t, l);
            },
            children: (0, s.jsx)("i", {
              className: "mps-close",
            }),
          })
        );
      };
    },
    18798: (e, t, a) => {
      a.r(t);
    },
    20294: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(67467),
        s = a(78106),
        r = a(47459),
        o = n(a(86585)),
        l = a(37328),
        d = a(84707),
        u = a(8728),
        c = a(4347),
        p = a(84465),
        h = a(76066),
        f = a(53719),
        m = a(77015),
        g = a(33726),
        y = a(16147);
      (0, n(a(6063)).default)();
      const b = (0, i.connect)(
        (e) => ({
          logined: e.players.logined,
          settle: e.players.settle,
          needactivation: e.players.needactivation,
          verifytype: e.players.verifytype,
          email: e.players.email,
          mobile: e.players.mobile,
          remaintime: e.players.remaintime,
          activateSuccess: e.players.activateSuccess,
          playerid: e.players.playerid,
          logoutSuccess: e.players.logoutSuccess,
          loginSuccess: e.players.loginSuccess,
          unauthorized: e.players.unauthorized,
          walletMap: e.players.walletMap,
          player: e.players.player,
          news: e.news.news,
          announcementMsgs: e.news.announcementMsgs,
          global498Msg: e.app.global498Msg,
          showGlobal498Msg: e.app.showGlobal498Msg,
          gameTypeMap: e.games.gameTypeMap,
          maintenanceMap: e.games.maintenanceMap,
          currPersonalQuery: e.news.currPersonalQuery,
          currSystemQuery: e.news.currSystemQuery,
          signupSuccess: e.players.signupSuccess,
          registerErrorCode: e.players.registerErrorCode,
          displayAffiliate: e.affiliate.displayAffiliate,
          totalUnreadMsgCount: e.news.totalUnreadMsgCount,
          ecDisplaySetting: e.dashboard.ecDisplaySetting,
          ecEnabledAnytimeRebateSettlement:
            e.dashboard.ecEnabledAnytimeRebateSettlement,
          hotGameTypeMap: e.games.hotGameTypeMap,
          isSSVip: e.dashboard.isSSVipEnable,
          isVipTypeSuc: e.dashboard.isGetVipTypeSuc,
        }),
        (e) =>
          (0, r.bindActionCreators)(
            {
              closeErrorModal: d.closeErrorModal,
              setApiErrorCode498: d.setApiErrorCode498,
              getUserProfile: h.getUserProfile,
              getUserSubWallet: h.getUserSubWallet,
              logoutUser: h.logoutUser,
              logoutUserNoApi: h.logoutUserNoApi,
              getSync: h.getSync,
              getAllGameList: c.getAllGameList,
              getNews: p.getNews,
              getLast10Records: c.getLast10Records,
              getBanners: f.getBanners,
              renewUnreadMsgCount: p.renewUnreadMsgCount,
              getMaintenanceList: c.getMaintenanceList,
              updateMaintenanceList: c.updateMaintenanceList,
              getMessageMsgs: p.getMessageMsgs,
              getAnnouncementMsgs: p.getAnnouncementMsgs,
              getMyFavoriteGameList: c.getMyFavoriteGameList,
              checkPlayerInfoReady: h.checkPlayerInfoReady,
              getActiveShortcutList: m.getActiveShortcutList,
              getGameTags: c.getGameTags,
              removeGameCache: c.removeGameCache,
              getStaticPages: g.getStaticPages,
              sendStatsApi: y.sendStatsApi,
              getRegistrationSetting: h.getRegistrationSetting,
              getAffiliateSetting: l.getAffiliateSetting,
              getLoginSetting: h.getLoginSetting,
              getDisplaySetting: u.getDisplaySetting,
              getVipType: u.getVipType,
              pageLoadedAction: d.pageLoadedAction,
              modifyPromoDetailModalDispaly: f.modifyPromoDetailModalDispaly,
              anytimeRebateSettlement: h.anytimeRebateSettlement,
              updateRaceRecordList: c.updateRaceRecordList,
            },
            e
          )
      )(o.default);
      t.default = (0, s.withRouter)(b);
    },
    25257: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(61109));
      a(87980), (t.default = i.default);
    },
    25521: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(8204));
      a(41314), (t.default = i.default);
    },
    26172: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.Content7 =
          t.Content6 =
          t.Content5 =
          t.Content4 =
          t.Content3 =
          t.Content2 =
          t.Content1 =
            void 0);
      let a = () => null,
        n = () => null,
        i = () => null,
        s = () => null,
        r = () => null,
        o = () => null,
        l = () => null;
      (t.Content7 = l),
        (t.Content6 = o),
        (t.Content5 = r),
        (t.Content4 = s),
        (t.Content3 = i),
        (t.Content2 = n),
        (t.Content1 = a);
      try {
        t.Content1 = a = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content1'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content2 = n = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content2'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content3 = i = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content3'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content4 = s = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content4'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content5 = r = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content5'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content6 = o = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content6'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
      try {
        t.Content7 = l = Object(
          (function () {
            var e = new Error(
              "Cannot find module 'components/desktop/Auth/Login/default/Content7'"
            );
            throw ((e.code = "MODULE_NOT_FOUND"), e);
          })()
        );
      } catch (e) {}
    },
    26309: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(49099));
      a(56369), (t.default = i.default);
    },
    28926: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(2056)),
        r = n(a(71719)),
        o = a(1650),
        l = n(a(63868)),
        d = a(74848);
      class u extends i.Component {
        render() {
          const {
            children: e,
            setting: t,
            options: a = {},
            name: n,
            labelName: i,
            className: l,
            decorateInput: u,
            emptyMsg: c,
            otherComponent: p,
            isRecaptcha: h,
            signup: f,
            isImgCaptcha: m,
            login: g,
            isLoginImgCaptcha: y,
            ...b
          } = this.props;
          a.rule || (a.rule = (0, o.noopValidator)());
          let v = t && !1 !== t.get("display");
          if (
            (f && "captcha" === n && (v = v && !h && !m),
            g && "captcha" === n && (v = v && !y),
            v)
          ) {
            const o = t.get("required");
            return (
              o &&
                ("mobile" === n
                  ? a.rule.validator.push((e) => !!e.split(" ")[1])
                  : "birthday" === n
                  ? a.rule.validator.push((e) => !!e.startValue)
                  : a.rule.validator.push((e) =>
                      e || 0 === e
                        ? !(0, s.default)(`${e}`)
                        : !(0, s.default)("")
                    ),
                a.rule.tip.push(c)),
              (0, d.jsxs)(r.default, {
                label: n,
                labelName: i,
                isItemRequire: o,
                className: l || "",
                "data-form": n,
                ...b,
                children: [u(n, a)(e), p],
              })
            );
          }
          return null;
        }
      }
      t.default = (0, l.default)(u);
    },
    29470: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = n(a(27179)),
        s = n(a(83736)),
        r = a(51628),
        o = a(74848);
      t.default = () => (
        (0, s.default)(() => {
          i.default.remove("rup");
        }),
        (0, o.jsxs)("div", {
          className: "broken-link-page",
          children: [
            (0, o.jsx)("i", {
              className: "mps-warning",
            }),
            (0, o.jsx)("p", {
              children: r.i18n["broken.link"],
            }),
          ],
        })
      );
    },
    30372: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(67467),
        s = a(47459),
        r = a(76066),
        o = n(a(37756));
      const l = (0, i.connect)(
        (e) => ({
          loginSuccess: e.players.loginSuccess,
          isLoading: e.players.isLoading,
          showGlobal498Msg: e.app.showGlobal498Msg,
          fingerprint2: e.players.fingerprint2,
          loginSetting: e.players.loginSetting,
        }),
        (e) =>
          (0, s.bindActionCreators)(
            {
              loginUser: r.loginUser,
              saveFingerPrint2: r.saveFingerPrint2,
            },
            e
          )
      )(o.default);
      t.default = l;
    },
    30808: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.VipInfoPage =
          t.ViaGameRoom =
          t.Staticpagesettings =
          t.StaticContainer =
          t.SportsContainer =
          t.SignupContainer =
          t.SSVipInfoPage =
          t.Roulette =
          t.ResultCenter =
          t.ResetPasswordContainer =
          t.ResetInfoContainer =
          t.RedEnvelopeContainer =
          t.PromoContainer =
          t.MpgContainer =
          t.MiniGamesContainer =
          t.MemberCenterWithdrawalMain =
          t.MemberCenterWithdrawalAudit =
          t.MemberCenterVip =
          t.MemberCenterValidatePage =
          t.MemberCenterTransaction =
          t.MemberCenterSSVip =
          t.MemberCenterPromoCenter =
          t.MemberCenterProfile =
          t.MemberCenterMission =
          t.MemberCenterGameHistory =
          t.MemberCenterFinanHistory =
          t.MemberCenterCryptoWithdrawalAdd =
          t.MemberCenterCryptoAccounts =
          t.MemberCenterChangePassword =
          t.MemberCenterBankWithdrawalAdd =
          t.MemberCenterBankCards =
          t.MemberCenterBalance =
          t.MemberCenterAnnouncement =
          t.MemberCenterAffiliate =
          t.MemberCenter =
          t.LotteryEvent =
          t.LotteryContainer =
          t.LiveContainer =
          t.LaunchGameContainer =
          t.HotGames =
          t.HomeContainer =
          t.GameHistoryDetailContainer =
          t.ForgetUsernameContainer =
          t.ForgetPasswordContainer =
          t.FavoriteGames =
          t.EsportsContainer =
          t.EgameContainer =
          t.DepositSummary =
          t.DepositServiceOnlinePopupContainer =
          t.DepositPayments =
          t.DepositOnlineBanking =
          t.DepositCorporateCrypto =
          t.DepositCompany =
          t.Deposit3rdParty =
          t.ChessContainer =
          t.Bonus =
          t.Announcement =
          t.AnimalContainer =
          t.AgentSignup =
          t.ActivationPendingModalContainer =
          t.ActivateContainer =
            void 0);
      var i = n(a(53259)),
        s = n(a(16506));
      (t.HomeContainer = (0, i.default)({
        loader: () =>
          Promise.all([
            a.e(4856),
            a.e(5286),
            a.e(2052),
            a.e(231),
            a.e(3535),
          ]).then(a.bind(a, 53156)),
        loading: s.default,
      })),
        (t.DepositServiceOnlinePopupContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 85971)),
          loading: s.default,
        })),
        (t.AnimalContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 21148)),
          loading: s.default,
        })),
        (t.EgameContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 64863)),
          loading: s.default,
        })),
        (t.LiveContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 11394)),
          loading: s.default,
        })),
        (t.LotteryContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 45891)),
          loading: s.default,
        })),
        (t.MpgContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 86686)),
          loading: s.default,
        })),
        (t.SportsContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 76673)),
          loading: s.default,
        })),
        (t.ChessContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 63572)),
          loading: s.default,
        })),
        (t.EsportsContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 62816)),
          loading: s.default,
        })),
        (t.MiniGamesContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 98042)),
          loading: s.default,
        })),
        (t.HotGames = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2564),
              a.e(1914),
              a.e(6442),
              a.e(7796),
              a.e(9304),
              a.e(6149),
              a.e(5967),
              a.e(5096),
            ]).then(a.bind(a, 93658)),
          loading: s.default,
        })),
        (t.FavoriteGames = (0, i.default)({
          loader: () => a.e(6231).then(a.bind(a, 61139)),
          loading: s.default,
        })),
        (t.PromoContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(9125),
              a.e(9259),
              a.e(516),
              a.e(3667),
            ]).then(a.bind(a, 90774)),
          loading: s.default,
        })),
        (t.ResetInfoContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(5266),
              a.e(3778),
              a.e(415),
            ]).then(a.bind(a, 27426)),
          loading: s.default,
        })),
        (t.SignupContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(5266),
              a.e(3778),
              a.e(8453),
              a.e(8318),
              a.e(2150),
            ]).then(a.bind(a, 34601)),
          loading: s.default,
        })),
        (t.ForgetPasswordContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(5266),
              a.e(7280),
              a.e(4617),
              a.e(1936),
              a.e(3057),
            ]).then(a.bind(a, 16005)),
          loading: s.default,
        })),
        (t.ActivateContainer = (0, i.default)({
          loader: () => a.e(897).then(a.bind(a, 13782)),
          loading: s.default,
        })),
        (t.ActivationPendingModalContainer = (0, i.default)({
          loader: () => a.e(897).then(a.bind(a, 45825)),
          loading: s.default,
        })),
        (t.ForgetUsernameContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(5266),
              a.e(7280),
              a.e(4617),
              a.e(1936),
              a.e(3057),
            ]).then(a.bind(a, 88062)),
          loading: s.default,
        })),
        (t.ResetPasswordContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(5266),
              a.e(3778),
              a.e(415),
            ]).then(a.bind(a, 10125)),
          loading: s.default,
        })),
        (t.Announcement = (0, i.default)({
          loader: () =>
            Promise.all([a.e(8896), a.e(7715)]).then(a.bind(a, 75973)),
          loading: s.default,
        })),
        (t.GameHistoryDetailContainer = (0, i.default)({
          loader: () => a.e(7500).then(a.bind(a, 77378)),
          loading: s.default,
        })),
        (t.StaticContainer = (0, i.default)({
          loader: () =>
            Promise.all([a.e(5286), a.e(989)]).then(a.bind(a, 51883)),
          loading: s.default,
        })),
        (t.LaunchGameContainer = (0, i.default)({
          loader: () => a.e(5005).then(a.bind(a, 55858)),
          loading: s.default,
        })),
        (t.Staticpagesettings = {
          ContentByCodeContainer: (0, i.default)({
            loader: () => a.e(8280).then(a.bind(a, 44267)),
            loading: s.default,
          }),
          ContentByNameContainer: (0, i.default)({
            loader: () => a.e(8280).then(a.bind(a, 11037)),
            loading: s.default,
          }),
        }),
        (t.AgentSignup = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7280),
              a.e(4617),
              a.e(5147),
              a.e(9586),
            ]).then(a.bind(a, 53361)),
          loading: s.default,
        })),
        (t.RedEnvelopeContainer = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(9125),
              a.e(9259),
              a.e(516),
              a.e(3667),
            ]).then(a.bind(a, 59618)),
          loading: s.default,
        })),
        (t.Roulette = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(9125),
              a.e(9259),
              a.e(516),
              a.e(3667),
            ]).then(a.bind(a, 36779)),
          loading: s.default,
        })),
        (t.ResultCenter = (0, i.default)({
          loader: () =>
            Promise.all([a.e(2723), a.e(2322)]).then(a.bind(a, 62723)),
          loading: s.default,
        })),
        (t.MemberCenter = (0, i.default)({
          loader: () => a.e(183).then(a.bind(a, 95480)),
          loading: s.default,
        })),
        (t.MemberCenterBalance = (0, i.default)({
          loader: () => a.e(841).then(a.bind(a, 8319)),
          loading: s.default,
        })),
        (t.MemberCenterTransaction = (0, i.default)({
          loader: () => a.e(8081).then(a.bind(a, 21447)),
          loading: s.default,
        })),
        (t.MemberCenterProfile = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(8668),
              a.e(4617),
              a.e(9259),
              a.e(1518),
              a.e(6887),
              a.e(7810),
            ]).then(a.bind(a, 71122)),
          loading: s.default,
        })),
        (t.MemberCenterChangePassword = (0, i.default)({
          loader: () =>
            Promise.all([a.e(4121), a.e(4617), a.e(3285), a.e(1480)]).then(
              a.bind(a, 47362)
            ),
          loading: s.default,
        })),
        (t.MemberCenterValidatePage = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7271),
              a.e(4899),
              a.e(1914),
              a.e(4617),
              a.e(9211),
              a.e(6616),
            ]).then(a.bind(a, 88170)),
          loading: s.default,
        })),
        (t.MemberCenterBankCards = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(8668),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(6887),
              a.e(2964),
              a.e(4255),
            ]).then(a.bind(a, 24303)),
          loading: s.default,
        })),
        (t.MemberCenterCryptoAccounts = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(1914),
              a.e(8668),
              a.e(4617),
              a.e(9259),
              a.e(1518),
              a.e(6887),
              a.e(7125),
              a.e(5668),
            ]).then(a.bind(a, 93334)),
          loading: s.default,
        })),
        (t.MemberCenterAffiliate = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7878),
              a.e(2564),
              a.e(1914),
              a.e(5286),
              a.e(2149),
              a.e(4617),
              a.e(620),
              a.e(2475),
              a.e(8404),
            ]).then(a.bind(a, 77484)),
          loading: s.default,
        })),
        (t.MemberCenterWithdrawalAudit = (0, i.default)({
          loader: () =>
            Promise.all([a.e(2289), a.e(4164), a.e(9255)]).then(
              a.bind(a, 64164)
            ),
          loading: s.default,
        })),
        (t.MemberCenterWithdrawalMain = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(4617),
              a.e(5876),
              a.e(4164),
              a.e(2881),
            ]).then(a.bind(a, 16166)),
          loading: s.default,
        })),
        (t.MemberCenterBankWithdrawalAdd = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7878),
              a.e(2564),
              a.e(4617),
              a.e(6663),
              a.e(9704),
              a.e(8649),
            ]).then(a.bind(a, 88650)),
          loading: s.default,
        })),
        (t.MemberCenterCryptoWithdrawalAdd = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7878),
              a.e(2564),
              a.e(4617),
              a.e(6663),
              a.e(9704),
              a.e(1998),
            ]).then(a.bind(a, 51519)),
          loading: s.default,
        })),
        (t.MemberCenterGameHistory = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(6442),
              a.e(4617),
              a.e(2352),
              a.e(147),
            ]).then(a.bind(a, 9209)),
          loading: s.default,
        })),
        (t.MemberCenterMission = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7209),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(1914),
              a.e(8668),
              a.e(9259),
              a.e(1518),
              a.e(620),
              a.e(7030),
              a.e(2371),
            ]).then(a.bind(a, 38393)),
          loading: s.default,
        })),
        (t.MemberCenterAnnouncement = (0, i.default)({
          loader: () =>
            Promise.all([a.e(7878), a.e(8982)]).then(a.bind(a, 60222)),
          loading: s.default,
        })),
        (t.MemberCenterFinanHistory = (0, i.default)({
          loader: () =>
            Promise.all([a.e(2289), a.e(6442), a.e(4617), a.e(3869)]).then(
              a.bind(a, 5163)
            ),
          loading: s.default,
        })),
        (t.MemberCenterVip = (0, i.default)({
          loader: () =>
            Promise.all([a.e(7878), a.e(4617), a.e(5964), a.e(7768)]).then(
              a.bind(a, 94416)
            ),
          loading: s.default,
        })),
        (t.MemberCenterSSVip = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7878),
              a.e(4617),
              a.e(5964),
              a.e(1758),
              a.e(2970),
            ]).then(a.bind(a, 89506)),
          loading: s.default,
        })),
        (t.MemberCenterPromoCenter = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(8668),
              a.e(9259),
              a.e(1518),
              a.e(2835),
            ]).then(a.bind(a, 83289)),
          loading: s.default,
        })),
        (t.VipInfoPage = (0, i.default)({
          loader: () =>
            Promise.all([a.e(2574), a.e(2738)]).then(a.bind(a, 51221)),
          loading: s.default,
        })),
        (t.SSVipInfoPage = (0, i.default)({
          loader: () =>
            Promise.all([a.e(2574), a.e(2738)]).then(a.bind(a, 3863)),
          loading: s.default,
        })),
        (t.DepositPayments = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 78595)),
          loading: s.default,
        })),
        (t.DepositCompany = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 28140)),
          loading: s.default,
        })),
        (t.DepositOnlineBanking = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 2468)),
          loading: s.default,
        })),
        (t.Deposit3rdParty = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 72018)),
          loading: s.default,
        })),
        (t.DepositSummary = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 37032)),
          loading: s.default,
        })),
        (t.DepositCorporateCrypto = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(7271),
              a.e(7878),
              a.e(2564),
              a.e(2289),
              a.e(4899),
              a.e(5286),
              a.e(8668),
              a.e(9399),
              a.e(4617),
              a.e(6663),
              a.e(9259),
              a.e(1518),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(5291),
              a.e(175),
              a.e(7836),
            ]).then(a.bind(a, 4793)),
          loading: s.default,
        })),
        (t.ViaGameRoom = (0, i.default)({
          loader: () =>
            Promise.all([a.e(7796), a.e(5967)]).then(a.bind(a, 70627)),
          loading: s.default,
        })),
        (t.Bonus = (0, i.default)({
          loader: () =>
            Promise.all([
              a.e(2289),
              a.e(1914),
              a.e(6442),
              a.e(3571),
              a.e(9259),
              a.e(4561),
              a.e(620),
              a.e(3040),
              a.e(8912),
              a.e(1479),
            ]).then(a.bind(a, 2771)),
          loading: s.default,
        })),
        (t.LotteryEvent = (0, i.default)({
          loader: () =>
            Promise.all([a.e(5073), a.e(8879)]).then(a.bind(a, 15073)),
          loading: s.default,
        }));
    },
    34476: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(55665));
      const s = "IMG_CAPTCHA";
      t.default = () => {
        const { registrationSetting: e, loginSetting: t } = (0, i.default)(
          (e) => ({
            registrationSetting: e.players.registrationSetting,
            loginSetting: e.players.loginSetting,
          })
        );
        return {
          isRecaptcha: "RECAPTCHA" === e.get("captcha_type"),
          isImgCaptcha: e.get("captcha_type") === s,
          isLoginImgCaptcha: t.get("captcha_type") === s,
          executeRecaptcha: (e) => (
            (window.captchaCallback = e), window.grecaptcha.execute(), !1
          ),
        };
      };
    },
    35094: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(83736)),
        s = a(78106),
        r = a(15062),
        o = a(71850);
      t.default = () => {
        const e = (0, s.useLocation)(),
          t = (0, s.useHistory)();
        return (
          (0, i.default)(() => {
            const a = o.isSportPage
              ? `${r.paths.SPORT_PAGE_DESKTOP}${e.hash}`
              : r.paths.ROOT;
            t.push(a);
          }),
          null
        );
      };
    },
    35517: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          var e;
          let t = [s.default.defaultTelCountry];
          return (
            null !== (e = o) &&
              void 0 !== e &&
              e.size &&
              (t = [...t, ...o.values()]),
            r.default.filter((e) => {
              let { iso2: a } = e;
              return t.includes(a);
            })
          );
        });
      var i = a(9404),
        s = n(a(94188)),
        r = n(a(61612));
      let o;
      Array.isArray(s.default.telCountries) &&
        (o = (0, i.Set)(s.default.telCountries));
    },
    36131: (e, t, a) => {
      a.r(t);
    },
    37756: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = a(28651),
        s = n(a(79293)),
        r = n(a(25521)),
        o = n(a(61116)),
        l = a(28415),
        d = n(a(15062)),
        u = a(8087),
        c = a(74848);
      let p;
      try {
        p = a(14319).A;
      } catch (e) {
        p = a(14319).A;
      }
      t.default = (e) => {
        const { state: t, thirdPartyToken: a } = (0, o.default)({
          portalId: u.portalIdEnum.DESKTOP,
        });
        return a
          ? [l.bindStatusEnum.SUCCESS, l.bindStatusEnum.INVALID].includes(
              t.loginStatus
            )
            ? (0, c.jsx)(i.Redirect, {
                to: d.default.ROOT,
              })
            : t.loginStatus === l.bindStatusEnum.UNAUTHORIZED
            ? (0, c.jsx)(r.default, {
                ...t.bindData,
                handleClose: e.handleClose,
              })
            : (0, c.jsx)(s.default, {})
          : (0, c.jsx)(p, {
              ...e,
            });
      };
    },
    39574: (e, t, a) => {
      a.r(t);
    },
    41314: (e, t, a) => {
      a.r(t);
    },
    41416: (e, t, a) => {
      a.r(t);
    },
    41842: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43693)),
        s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        r = a(78106),
        o = n(a(27179)),
        l = a(93185),
        d = a(51628),
        u = a(38560),
        c = n(a(14235)),
        p = a(56209);
      a(76520);
      var h = a(74848);
      const f = navigator.userAgent;
      class m extends s.Component {
        constructor(e) {
          super(e),
            (0, i.default)(this, "logErrToKibana", (e, t) => {
              try {
                const a = new Date().getTime(),
                  n = location.pathname;
                (0, p.postCollectError)({
                  errTime: a,
                  url: n,
                  errMsg: `msg:${e.message}\n  currBrowser:${JSON.stringify(
                    u.currBrowser
                  )}\n  platform:desktop\n  userAgent:${f}`,
                  errStack: t.componentStack,
                });
              } catch (e) {
                console.log(e);
              }
            }),
            (this.state = {
              hasError: !1,
            });
        }
        UNSAFE_componentWillReceiveProps(e) {
          !0 === this.state.hasError &&
            this.props.location.pathname !== e.location.pathname &&
            this.setState({
              hasError: !1,
            });
        }
        componentDidCatch(e, t) {
          this.setState({
            hasError: !0,
          }),
            o.default.get("playerid") &&
              o.default.get("token") &&
              this.logErrToKibana(e, t),
            (0, l.logErrorToMyService)(e, t);
        }
        errorRenderer() {
          return (0, h.jsx)(c.default, {
            children: (0, h.jsxs)("div", {
              className: "not-found",
              children: [
                (0, h.jsxs)("div", {
                  className: "not-found-content",
                  children: [
                    (0, h.jsx)("div", {
                      className: "left",
                      children: (0, h.jsx)("img", {
                        className: "error-fish",
                        src: "https://img.alltocon.com/img/static/common/not-found-fish.png",
                        alt: "",
                      }),
                    }),
                    (0, h.jsxs)("div", {
                      className: "right",
                      children: [
                        (0, h.jsx)("div", {
                          className: "not-found-title",
                          children: d.i18n["page.error"],
                        }),
                        (0, h.jsx)("div", {
                          className: "not-found-desc",
                          children: d.i18n["page.error.desc"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--1",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--2",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--3",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--4",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--5",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--6",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--7",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--8",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--9",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--10",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--11",
                }),
                (0, h.jsx)("div", {
                  className: "bubble bubble--12",
                }),
              ],
            }),
          });
        }
        render() {
          return this.state.hasError
            ? this.errorRenderer()
            : this.props.children;
        }
      }
      t.default = (0, r.withRouter)(m);
    },
    42396: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(62877)),
        r = n(a(72524)),
        o = n(a(15361)),
        l = a(67467),
        d = n(a(55665)),
        u = a(38560),
        c = n(a(46942)),
        p = a(76066),
        h = a(51628),
        f = a(74848);
      const m = u.isDesktop ? "mousedown" : "touchstart",
        g = u.isDesktop ? "mousemove" : "touchmove",
        y = u.isDesktop ? "mouseup" : "touchend";
      t.default = (e) => {
        let { onFailed: t, onSuccess: a, isFailedEffect: n = !1 } = e;
        const b = (0, i.useRef)(),
          v = (0, i.useRef)(),
          j = (0, i.useRef)(),
          x = (0, i.useRef)(),
          P = (0, i.useRef)(),
          C = (0, i.useRef)({
            timerId: null,
            startTime: null,
          }),
          _ = (0, i.useRef)(!1),
          S = (0, i.useRef)(),
          M = (0, l.useDispatch)(),
          [E, O] = (0, r.default)({
            isFailed: !1,
            isSuccess: !1,
            beforeSuc: !1,
            isLoading: !0,
            isDragging: !1,
            isRefresh: !1,
          }),
          {
            bigImageBase64: A,
            random: R,
            smallImageBase64: w,
          } = (0, d.default)((e) => ({
            bigImageBase64: e.players.bigImageBase64,
            random: e.players.random,
            smallImageBase64: e.players.smallImageBase64,
            posY: e.players.posY,
          })),
          T = () => {
            (C.current.startTime = Date.now()),
              M((0, p.getCaptchaImg)())
                .then((e) => {
                  (_.current = !1),
                    O({
                      isFailed: !1,
                    }),
                    document.documentElement.style.setProperty(
                      "--slice-top-offset",
                      e.payload.posY - 5 + "px"
                    ),
                    document.documentElement.style.setProperty(
                      "--slice-left-offset",
                      "0px"
                    ),
                    setTimeout(() => {
                      O({
                        isRefresh: !1,
                      });
                    }, 1e3);
                })
                .catch(() => {});
          },
          N = (e) => {
            if ((e.preventDefault(), !_.current)) {
              var t;
              u.isMobile &&
                (document.documentElement.style.overflow = "hidden");
              const a = (null === (t = e.touches) || void 0 === t
                ? void 0
                : t[0]) || {
                pageX: e.pageX,
                pageY: e.pageY,
              };
              (b.current = a.pageX),
                (S.current = !0),
                O({
                  isDragging: !0,
                });
            }
          },
          I = (e) => {
            if (!_.current && S.current) {
              var t;
              let a =
                (
                  (null === (t = e.touches) || void 0 === t
                    ? void 0
                    : t[0]) || {
                    pageX: e.pageX,
                    pageY: e.pageY,
                  }
                ).pageX - b.current;
              (a = ((e) => (e > 250 && (e = 250), e <= 0 && (e = 0), e))(a)),
                (v.current = a),
                document.documentElement.style.setProperty(
                  "--slice-left-offset",
                  `${a}px`
                );
            }
          },
          L = () => {
            !_.current &&
              S.current &&
              ((_.current = !0),
              (S.current = !1),
              O({
                isDragging: !1,
              }),
              M(
                (0, p.verifyCaptchaImg)({
                  movePosX: v.current + 5,
                  random: P.current,
                })
              ).then((e) => {
                e.payload
                  ? O({
                      isSuccess: !0,
                    })
                  : (t && t(),
                    O({
                      isFailed: !0,
                    }));
              }),
              u.isMobile && (document.documentElement.style.overflow = "auto"));
          };
        return (
          (0, s.default)(() => {
            (C.current.timerId = setInterval(() => {
              C.current.startTime &&
                Date.now() - C.current.startTime >= 18e4 &&
                T();
            }, 2e3)),
              T();
            const e = j.current,
              t = x.current;
            return (
              e.addEventListener(m, N, {
                passive: !1,
              }),
              t.addEventListener(m, N, {
                passive: !1,
              }),
              document.body.addEventListener(g, I),
              document.body.addEventListener(y, L),
              () => {
                C.current.timerId &&
                  (clearInterval(C.current.timerId),
                  (C.current.startTime = null)),
                  e.removeEventListener(m, N),
                  t.removeEventListener(m, N),
                  document.body.removeEventListener(g, I),
                  document.body.removeEventListener(y, L);
              }
            );
          }),
          (0, o.default)(() => {
            E.isFailed && !n && T();
          }, [E.isFailed, n]),
          (0, o.default)(() => {
            P.current = R;
          }, [R]),
          (0, o.default)(() => {
            E.isSuccess &&
              a &&
              setTimeout(() => {
                a(R);
              }, 400);
          }, [E.isSuccess]),
          (0, o.default)(() => {
            O({
              isLoading: !1,
            });
          }, [R]),
          (0, f.jsxs)("div", {
            className: "slider-captcha-wrapper",
            children: [
              (0, f.jsxs)("div", {
                className: "content",
                style: {
                  backgroundImage: `url(data:image/png;base64,${A})`,
                },
                children: [
                  (0, f.jsx)("div", {
                    className: "captcha-bg",
                  }),
                  (0, f.jsx)("div", {
                    className: (0, c.default)("slice", {
                      isDragging: E.isDragging,
                    }),
                    style: {
                      backgroundImage: `url(data:image/png;base64,${w})`,
                    },
                    ref: x,
                  }),
                  E.isLoading &&
                    (0, f.jsx)("div", {
                      className: "captcha-loading",
                      children: `${h.i18n.loading}...`,
                    }),
                ],
              }),
              (0, f.jsxs)("div", {
                className: (0, c.default)("slider", {
                  beforeSuc: E.beforeSuc,
                }),
                children: [
                  (0, f.jsx)("div", {
                    className: (0, c.default)("track", {
                      isSuccess: E.isSuccess,
                    }),
                    children: (0, f.jsx)("div", {
                      ref: j,
                      className: (0, c.default)("slider-drag-btn"),
                      children: (0, f.jsx)("i", {
                        className: "mps-arrow-right",
                      }),
                    }),
                  }),
                  (0, f.jsx)("div", {
                    className: (0, c.default)("verify-suc", {
                      isSuccess: E.isSuccess,
                    }),
                    children: h.i18n["verification.suc"],
                  }),
                ],
              }),
              (0, f.jsx)("div", {
                className: (0, c.default)("captcha-refresh-btn", {
                  isRefresh: E.isRefresh,
                }),
                onClick: () => {
                  E.isRefresh ||
                    (O({
                      isLoading: !0,
                      isRefresh: !0,
                    }),
                    T());
                },
                children: (0, f.jsx)("i", {
                  className: "mps-update",
                }),
              }),
            ],
          })
        );
      };
    },
    43892: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.CustomerService = void 0),
        n(a(96540));
      var i = n(a(53259)),
        s = n(a(58009)),
        r = n(a(16506)),
        o = n(a(94188)),
        l = a(74848);
      const { code: d } = o.default.brand,
        u =
          {
            ae888: () => a.e(8262).then(a.bind(a, 38262)),
            jun88: () =>
              Promise.all([a.e(6830), a.e(7897)]).then(a.bind(a, 67897)),
            jun88th: () => a.e(8429).then(a.bind(a, 38429)),
            vi5prod: () =>
              Promise.all([a.e(6830), a.e(6165)]).then(a.bind(a, 76165)),
            vf0prod: () => a.e(2269).then(a.bind(a, 92269)),
            bet88: () => a.e(23).then(a.bind(a, 60023)),
            tc7prod: () => a.e(5171).then(a.bind(a, 15171)),
            ta8prod: () => a.e(7344).then(a.bind(a, 27344)),
            t38prod: () => a.e(3934).then(a.bind(a, 93934)),
            ta5prod: () => a.e(9931).then(a.bind(a, 39931)),
            r39bet: () => a.e(5549).then(a.bind(a, 45549)),
            t98prod: () => a.e(56).then(a.bind(a, 50056)),
            pk0prod: () => a.e(5706).then(a.bind(a, 5706)),
          }[d] || (() => Promise.resolve()),
        c = (t.CustomerService = (0, i.default)({
          loader: u,
          loading: r.default,
        }));
      t.default = () =>
        (0, l.jsx)(s.default, {
          waitAllGameList: !0,
          children: (0, l.jsx)(c, {}),
        });
    },
    45422: (e, t, a) => {
      e.exports = a.p + "static/media/icon-google.65fb1494..svg";
    },
    47337: (e, t, a) => {
      e.exports = a.p + "static/media/icon-line.c13d0f10..svg";
    },
    47905: (e, t, a) => {
      a.r(t);
    },
    48403: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(46942)),
        r = n(a(67620)),
        o = n(a(84557)),
        l = a(8087),
        d = n(a(35517)),
        u = a(38560),
        c = a(74848);
      const p = (0, d.default)();
      t.default = (e) => {
        let { mobile: t, label: a, error: n, isTouched: d } = e;
        const h = (0, i.useMemo)(
            () =>
              (0, r.default)(t || "", {
                defaultCountry: l.defaultTelCountry,
                onlyCountries: p,
              }),
            [t]
          ),
          f = (0, i.useMemo)(
            () => (0, o.default)(t || h.dialCode, h.format, !0),
            [t, h]
          ),
          m = u.isMobile ? "m-input-field" : "";
        return (0, c.jsxs)("div", {
          className: `nrc-u-1-1 readOnly tel read-only-mobile-field ${m}`,
          children: [
            (0, c.jsxs)("div", {
              className: "react-tel-input readOnly",
              children: [
                (0, c.jsx)("div", {
                  className: "flag-dropdown",
                  children: (0, c.jsx)("div", {
                    className: "selected-flag",
                    children: (0, c.jsx)("div", {
                      className: (0, s.default)("flag", h.iso2),
                      children: (0, c.jsx)("div", {
                        className: "arrow",
                      }),
                    }),
                  }),
                }),
                (0, c.jsx)("label", {
                  children: a,
                }),
                (0, c.jsx)("input", {
                  type: "tel",
                  className: "form-control",
                  disabled: !0,
                  value: f,
                }),
              ],
            }),
            (0, c.jsx)("input", {
              type: "hidden",
              className: "nrc-invisible",
            }),
            d &&
              n &&
              (0, c.jsxs)("div", {
                className: "error-msg",
                children: [
                  (0, c.jsx)("i", {
                    className: "icon-info",
                  }),
                  (0, c.jsx)("small", {
                    children: n,
                  }),
                ],
              }),
          ],
        });
      };
    },
    48500: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = a(78106),
        s = a(8087),
        r = n(a(15062)),
        o = n(a(12256)),
        l = a(74848);
      t.default = (e) => {
        let { playerInfoType: t, onBack: a } = e;
        const n = (0, i.useHistory)();
        return (0, l.jsx)(o.default, {
          onBack: function () {
            let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : {};
            const { redirectRoute: i, isSuccessAction: o } = e;
            i
              ? n.push(i)
              : t !== s.playerInfoReadyEnum.DEPOSIT ||
                o ||
                (null === window.opener
                  ? n.goBack()
                  : n.push(r.default.PROFILE)),
              a();
          },
          playerInfoType: t,
        });
      };
    },
    49099: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = a(79972),
        r = a(50115),
        o = n(a(46942)),
        l = n(a(80067)),
        d = n(a(13393)),
        u = a(8087),
        c = n(a(35517)),
        p = a(83597),
        h = a(74848);
      const f = (0, c.default)();
      t.default = (e) => {
        const {
            disabled: t,
            name: a,
            info: n,
            isShowInputAction: c = !1,
            ...m
          } = e,
          [g, y] = (0, i.useState)(!1),
          {
            values: b,
            touched: v,
            errors: j,
            setFieldTouched: x,
          } = (0, s.useFormikContext)(),
          P = (0, s.getIn)(b, a),
          C = (0, s.getIn)(v, a),
          _ = (0, s.getIn)(j, a);
        return (0, h.jsx)("div", {
          className: (0, o.default)("member-center-mobile-field", {
            required: !!m.required,
          }),
          children: (0, h.jsxs)(h.Fragment, {
            children: [
              t
                ? (0, h.jsx)(l.default, {
                    mobile: P,
                    label: m.label,
                    isTouched: C,
                    error: _,
                  })
                : (0, h.jsx)(r.MobileField, {
                    className: "mobile-field",
                    name: a,
                    defaultCountry: u.defaultTelCountry,
                    onlyCountries: f,
                    info: n,
                    onFocus: () => {
                      y(!0);
                    },
                    onBlur: () => {
                      y(!1), x(a, !0);
                    },
                    MobileInputAction:
                      c &&
                      (0, h.jsx)(d.default, {
                        name: a,
                        isFocus: g,
                      }),
                    autoFormat: !p.isViMobileField,
                    isViSite: p.isViMobileField,
                    ...m,
                  }),
              n &&
                !(C && _) &&
                (0, h.jsxs)("div", {
                  className: "info-msg",
                  children: [
                    (0, h.jsx)("i", {
                      className: "icon-info",
                    }),
                    (0, h.jsx)("small", {
                      children: n,
                    }),
                  ],
                }),
            ],
          }),
        });
      };
    },
    51110: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(29470));
      a(5473), (t.default = i.default);
    },
    51459: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = a(65635),
        s = n(a(46942)),
        r = a(74848);
      t.default = (e) => {
        let {
          children: t,
          className: a,
          notEmpty: n,
          focus: o,
          isRequired: l,
          disabled: d,
          contentClassName: u,
          name: c,
          info: p,
          hasPlaceHolder: h,
          hasPrefix: f = !1,
        } = e;
        const { touched: m, errors: g } = (0, i.useFormikContext)(),
          y = (0, i.getIn)(m, c),
          b = (0, i.getIn)(g, c);
        return (0, r.jsxs)("div", {
          className: (0, s.default)("input-field", {
            [a]: !!a,
          }),
          children: [
            (0, r.jsx)("div", {
              className: (0, s.default)("content", "d-input-field-content", {
                "not-empty": n,
                focus: o,
                placeholder: h,
                error: y && b,
                required: l,
                disabled: d,
                "has-prefix": f,
                [u]: !!u,
              }),
              children: t,
            }),
            y &&
              b &&
              (0, r.jsxs)("div", {
                className: "error-msg",
                children: [
                  (0, r.jsx)("i", {
                    className: "icon-info",
                  }),
                  (0, r.jsx)("small", {
                    children: b,
                  }),
                ],
              }),
            p &&
              !(y && b) &&
              (0, r.jsxs)("div", {
                className: "info-msg",
                children: [
                  (0, r.jsx)("i", {
                    className: "icon-info",
                  }),
                  (0, r.jsx)("small", {
                    children: p,
                  }),
                ],
              }),
          ],
        });
      };
    },
    52964: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43693)),
        s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        r = n(a(5556)),
        o = a(78106),
        l = (n(a(2209)), n(a(94188))),
        d = n(a(8485)),
        u = a(8087),
        c = n(a(15062)),
        p = n(a(96384)),
        h = n(a(17471)),
        f = a(93185),
        m = a(51628),
        g = a(74848);
      class y extends s.Component {
        constructor() {
          super(...arguments),
            (0, i.default)(this, "resend", (e) => {
              const { forgetUsername: t } = this.props;
              t(e);
            }),
            (0, i.default)(this, "noneForgetUsername", () => {
              const {
                  activeshortcuts: e,
                  history: { push: t },
                } = this.props,
                a = (0, f.getUniversalHyperlink)(
                  e,
                  "onlinecs",
                  l.default.onlineServiceForForgetAccount
                );
              return (0, g.jsxs)("div", {
                className: "body",
                children: [
                  (0, g.jsx)("div", {
                    className: "flex-center-column message",
                    children: (0, g.jsx)("h2", {
                      children: m.i18n["forgetusername.none"],
                    }),
                  }),
                  (0, g.jsx)("div", {
                    className: "flex-center-column",
                    style: {
                      marginTop: "50px",
                    },
                    children: (0, g.jsx)(p.default, {
                      onClick: () => {
                        a && window.open(a), t(c.default.ROOT);
                      },
                      children: m.i18n["retrieve.username"],
                    }),
                  }),
                ],
              });
            }),
            (0, i.default)(this, "mobileForgetUsername", (e) => {
              const { mobile: t } = this.props,
                a = (0, f.generatePrivateNumber)(t);
              return (0, g.jsxs)("div", {
                className: "body",
                children: [
                  (0, g.jsxs)("div", {
                    className: "flex-center-column message",
                    children: [
                      (0, g.jsx)("h2", {
                        children: m.i18n["forgetusername.mobile"],
                      }),
                      (0, g.jsx)("h3", {
                        children: `${a}`,
                      }),
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "flex-center-column",
                    style: {
                      marginTop: "50px",
                    },
                    children: (0, g.jsx)(p.default, {
                      onClick: e,
                      children: m.i18n.close,
                    }),
                  }),
                ],
              });
            }),
            (0, i.default)(this, "emailForgetUsername", (e) => {
              const { email: t } = this.props;
              return (0, g.jsxs)("div", {
                className: "body",
                children: [
                  (0, g.jsxs)("div", {
                    className: "flex-center-column message",
                    children: [
                      (0, g.jsx)("h2", {
                        children: m.i18n["forgetusername.email"],
                      }),
                      (0, g.jsx)("h3", {
                        children: `(${t})`,
                      }),
                    ],
                  }),
                  (0, g.jsx)("div", {
                    className: "flex-center-column",
                    style: {
                      marginTop: "50px",
                    },
                    children: (0, g.jsx)(p.default, {
                      onClick: e,
                      children: m.i18n.close,
                    }),
                  }),
                ],
              });
            }),
            (0, i.default)(this, "forgetUsernameModal", () => {
              const {
                  registrationSetting: e,
                  forgetUsername: t,
                  sentForgetUsername: a,
                  closeSentUsernamemodal: n,
                  activeshortcuts: i,
                  history: { push: s },
                } = this.props,
                { toggleLoginPopup: r } = this.context,
                o = e.get("currentforgetpwauth");
              function l() {
                s(c.default.ROOT), r(), n();
              }
              return (0, g.jsx)("div", {
                children: a
                  ? (0, g.jsxs)(h.default, {
                      modalstyle: {
                        width: "50vw",
                        height: "50vh",
                      },
                      className: "signup-tip",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "header",
                          children: [
                            (0, g.jsx)("h2", {
                              className: "title-center",
                              children: m.i18n.forgetusername,
                            }),
                            (0, g.jsx)("i", {
                              className: "mps-close",
                              onClick: l,
                            }),
                          ],
                        }),
                        o === u.authVerifyTypeEnum.EMAIL
                          ? this.emailForgetUsername(l)
                          : this.mobileForgetUsername(l),
                      ],
                    })
                  : (0, g.jsxs)(h.default, {
                      modalstyle: {
                        width: "50vw",
                        height: "60vh",
                      },
                      className: "signup-tip",
                      children: [
                        (0, g.jsxs)("div", {
                          className: "header",
                          children: [
                            (0, g.jsx)("h2", {
                              className: "title-center",
                              children: m.i18n.forgetusername,
                            }),
                            (0, g.jsx)("i", {
                              className: "mps-close",
                              onClick: () => {
                                s(c.default.ROOT), r();
                              },
                            }),
                          ],
                        }),
                        o === u.authVerifyTypeEnum.NONE
                          ? this.noneForgetUsername()
                          : (0, g.jsx)(d.default, {
                              verifyType: o,
                              forgetUsername: t,
                              sentForgetUsername: a,
                              activeshortcuts: i,
                            }),
                      ],
                    }),
              });
            });
        }
        componentDidMount() {
          this.props.getRegistrationSetting();
        }
        render() {
          return (0, g.jsx)("div", {
            children: this.forgetUsernameModal(),
          });
        }
      }
      (y.contextTypes = {
        toggleLoginPopup: r.default.func,
      }),
        (t.default = (0, o.withRouter)(y));
    },
    54781: (e, t, a) => {
      a.r(t);
    },
    55505: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        a(66838);
      var i = n(a(87293));
    },
    56369: (e, t, a) => {
      a.r(t);
    },
    57938: (e, t, a) => {
      a.r(t);
    },
    60191: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540);
      const i = (e) => {
        let { onClick: t } = e;
        const a = (0, n.useRef)(null);
        return {
          targetRef: a,
          onOutsideClick: (e) => {
            const n = a.current,
              i = e.target;
            n.contains(i) || t();
          },
        };
      };
      (i.defaultProps = {
        onClick: () => {},
      }),
        (t.default = i);
    },
    61109: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(67090)),
        r = (n(a(5556)), a(79972)),
        o = a(57348),
        l = n(a(87459)),
        d = a(74848);
      const u = (e) => {
        let {
          className: t,
          type: a,
          label: n,
          name: u,
          actions: c,
          isRequired: p,
          info: h,
          disabled: f,
          contentClassName: m,
          onChange: g,
          placeholder: y,
          prefixchar: b = "",
          readOnly: v,
          renderReadOnlyView: j,
          ...x
        } = e;
        const {
            values: P,
            setFieldValue: C,
            setFieldTouched: _,
          } = (0, r.useFormikContext)(),
          S = (0, r.getIn)(P, u),
          [M, E] = (0, i.useState)(!1),
          [O, A] = (0, i.useState)(a),
          [R, w] = (0, i.useState)(S),
          [T] = (0, o.useDebounce)(R, 300),
          N = b.length > 0;
        (0, i.useEffect)(() => {
          R !== S && w(S);
        }, [S]),
          (0, i.useEffect)(() => {
            T !== S && T === R && (g && g(T), C(u, T));
          }, [T, g]);
        const I = (0, i.useMemo)(
            () => ({
              deleteFocus: () => {
                C(u, "");
              },
              delete: () => {
                C(u, "");
              },
              hind: () => {
                A((e) => ("password" === e ? "text" : "password"));
              },
            }),
            [C, u]
          ),
          L = (0, i.useMemo)(
            () =>
              c.length > 0 &&
              (0, d.jsx)("div", {
                className: "action-block",
                children: c.map((e, t) =>
                  (0, d.jsx)(
                    l.default,
                    {
                      actionName: e,
                      value: S,
                      inputType: O,
                      isFocus: M,
                      onActionTrigger: I[e],
                    },
                    `action-${t}`
                  )
                ),
              }),
            [c, I, O, M, S]
          ),
          D = (0, i.useCallback)((e) => {
            w(e.target.value);
          }, []),
          k = (0, i.useCallback)(() => {
            E(!0);
          }, []),
          F = (0, i.useCallback)(() => {
            E(!1), _(u, !0);
          }, [_, u]);
        return (0, d.jsxs)(s.default, {
          className: t,
          contentClassName: m,
          notEmpty: (null != R && "" !== R) || N,
          hasPlaceHolder: !!y,
          focus: M,
          isRequired: p,
          disabled: f,
          name: u,
          info: h,
          hasPrefix: N,
          children: [
            (0, d.jsxs)("div", {
              className: "input-block",
              children: [
                n &&
                  (0, d.jsx)("label", {
                    className: "title",
                    htmlFor: u,
                    children: n,
                  }),
                N &&
                  (0, d.jsx)("div", {
                    className: "prefix",
                    children: b,
                  }),
                v && R && j && j(R),
                (0, d.jsx)("input", {
                  id: u,
                  type: v && j ? "hidden" : O,
                  value: R,
                  placeholder: y,
                  onChange: D,
                  onFocus: k,
                  onBlur: F,
                  autoComplete: "new-password",
                  disabled: f,
                  readOnly: v,
                  ...x,
                }),
              ],
            }),
            L,
          ],
        });
      };
      (u.defaultProps = {
        type: "text",
        actions: [],
        isRequired: !1,
      }),
        (t.default = u);
    },
    61116: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(7541)),
        s = a(67467),
        r = n(a(83736)),
        o = n(a(72524)),
        l = n(a(15361)),
        d = a(61444),
        u = a(8087),
        c = a(28415),
        p = a(72596),
        h = a(57160),
        f = a(62144),
        m = a(28415);
      t.default = function () {
        let { portalId: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = (0, s.useDispatch)(),
          a = (0, i.default)(d.postThirdPartyLogin),
          [n, g] = (0, o.default)({
            loginStatus: null,
            bindData: {},
          }),
          { thirdPartyToken: y, thirdPartyType: b } = (0,
          p.getThirdPartyUrlParams)(),
          v = () => {
            y &&
              b &&
              (0, h.getFingerprint2)((n) => {
                const i = {
                  thirdPartyType: b,
                  thirdPartyToken: y,
                  fingerPrint: n,
                  portalId: e || u.portalIdEnum.MOBILE,
                };
                a(i)
                  .then((e) => {
                    const {
                        loginStatus: a,
                        thirdPartyPhoto: n,
                        thirdPartyName: s,
                        thirdPartyToken: r,
                      } = e,
                      o = {
                        loginStatus: a,
                      };
                    a === c.bindStatusEnum.SUCCESS
                      ? t({
                          type: f.AJAX_POST_LOGIN_SUCCESS,
                          payload: e,
                          playerid: e.playerid,
                        })
                      : a === c.bindStatusEnum.UNAUTHORIZED &&
                        (o.bindData = {
                          ...i,
                          thirdPartyToken: [
                            m.thirdPartyTypeEnum.GOOGLE,
                            m.thirdPartyTypeEnum.LINE,
                            m.thirdPartyTypeEnum.ZALO,
                          ].includes(b)
                            ? r
                            : i.thirdPartyToken,
                          thirdPartyPhoto: n,
                          thirdPartyUserName: s,
                        }),
                      g(o);
                  })
                  .catch(() => {
                    g({
                      loginStatus: c.bindStatusEnum.INVALID,
                    });
                  });
              });
          };
        return (
          (0, l.default)(() => {
            v();
          }, [y, b]),
          (0, r.default)(() => {
            v();
          }),
          {
            state: n,
            thirdPartyToken: y,
          }
        );
      };
    },
    61825: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(18896)),
        s = n(a(94188));
      t.default = (e, t, a) => {
        const n =
          "favicon" === s.default.notification
            ? `/favicons/${s.default.brand.favicon}`
            : `https://img.alltocon.com/img/static/desktop/brand/${s.default.brand.code}/logo.png`;
        i.default.create(e, {
          body: t,
          icon: a || n,
          timeout: 4e3,
          onClick: () => {
            window.focus(), (void 0).close();
          },
        });
      };
    },
    61847: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43892));
      a(18798), (t.default = i.default);
    },
    61927: (e, t, a) => {
      e.exports = a.p + "static/media/icon-tg.be7d16ae..png";
    },
    63868: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(34476)),
        r = a(74848);
      t.default = (e) =>
        (0, i.forwardRef)((t, a) => {
          const n = (0, s.default)();
          return (0, r.jsx)(e, {
            ref: a,
            ...t,
            ...n,
          });
        });
    },
    66838: (e, t, a) => {
      a.r(t);
    },
    67090: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(51459));
      a(54781), (t.default = i.default);
    },
    67127: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = n(a(57673)),
        s = a(65635),
        r = n(a(96384)),
        o = a(93185),
        l = a(83189),
        d = n(a(25257)),
        u = n(a(34767)),
        c = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(68561)),
        p = a(4213),
        h = a(51628),
        f = a(74848);
      t.default = (e) => {
        const {
            userPhoto: t,
            userName: a,
            validationSchema: n,
            initialValues: m,
            prefixchar: g = "",
            getRandomLoginName: y,
            getRandomLoginPassword: b,
            checkAccountIsRegistered: v,
            isSystem: j,
            onSubmit: x,
            onClose: P,
            submitLoading: C,
            thirdPartyType: _,
            isRandomAccPwdEnabled: S,
          } = e,
          M = c.object({
            loginName: c
              .string()
              .default("")
              .required(h.i18n["validate.empty"]),
            loginPassword: c
              .string()
              .default("")
              .required(h.i18n["validate.empty"]),
          }),
          E = j ? n : M,
          O = () => {
            const e = new Date().toLocaleDateString().split("/");
            return (e[1] = 1 === e[1].length ? `0${e[1]}` : e[1]), e.join("");
          },
          A = {
            loginName: j && S ? m.loginName : "",
            loginPassword: j && S ? m.loginPassword : "",
            ...(j && {
              ...(void 0 !== m.mobile
                ? {
                    mobile: m.mobile,
                  }
                : {}),
              ...(void 0 !== m.verificationcode
                ? {
                    verificationcode: m.mobile,
                  }
                : {}),
            }),
          };
        return (0, f.jsx)("div", {
          className: "bind-account-wrapper",
          children: (0, f.jsx)(s.Formik, {
            enableReinitialize: !0,
            initialValues: A,
            validationSchema: E,
            onSubmit: (e) => {
              x({
                ...e,
                loginName: `${g}${e.loginName}`,
              });
            },
            children: (e) => {
              const {
                  handleSubmit: n,
                  setValues: s,
                  values: c,
                  errors: m,
                  setFieldError: x,
                  setFieldTouched: M,
                  touched: E,
                } = e,
                A = void 0 !== m.loginName || void 0 !== m.loginPassword;
              return (0, f.jsxs)(f.Fragment, {
                children: [
                  (0, f.jsx)("div", {
                    children: (0, o.i18nVariables)(
                      h.i18n["fast.login.account.bound.to.account"],
                      {
                        type: _,
                      }
                    ),
                  }),
                  (0, f.jsxs)("div", {
                    className: "user-photo",
                    children: [
                      (0, f.jsx)("span", {
                        className: "user-third-party-photo",
                        children: t,
                      }),
                      (0, f.jsx)("span", {
                        className: "user-name",
                        children: a || "UNKNOWN",
                      }),
                    ],
                  }),
                  (0, f.jsxs)("div", {
                    className: "account-wrapper",
                    children: [
                      (0, f.jsx)("div", {
                        className: "tips",
                        children: j
                          ? (0, f.jsxs)(f.Fragment, {
                              children: [
                                S &&
                                  (0, f.jsx)("div", {
                                    children:
                                      h.i18n[
                                        "fast.login.renew.or.change.account"
                                      ],
                                  }),
                                (0, f.jsx)("div", {
                                  children: h.i18n["fast.login.copy.and.save"],
                                }),
                              ],
                            })
                          : (0, f.jsx)("div", {
                              children:
                                h.i18n["fast.login.plz.enter.ID.password"],
                            }),
                      }),
                      (0, f.jsxs)("div", {
                        className: "user-input",
                        children: [
                          (0, f.jsx)(d.default, {
                            label: h.i18n["player.label"],
                            name: "loginName",
                            prefixchar: g,
                            isRequired: !0,
                            onBlur: () => {
                              j && v(e);
                            },
                          }),
                          j &&
                            (0, f.jsx)(i.default, {
                              text: `${g}${c.loginName}`,
                            }),
                        ],
                      }),
                      (0, f.jsxs)("div", {
                        className: "user-input",
                        children: [
                          (0, f.jsx)(d.default, {
                            type: "password",
                            actions: ["hind"],
                            label: h.i18n["password.label"],
                            name: "loginPassword",
                            isRequired: !0,
                          }),
                          j &&
                            (0, f.jsx)(i.default, {
                              text: c.loginPassword,
                            }),
                        ],
                      }),
                      j &&
                        (0, f.jsxs)("div", {
                          className: "download-action",
                          children: [
                            (0, f.jsx)(r.default, {
                              type: "button",
                              disabled: A,
                              onClick: () =>
                                ((e) => {
                                  const t = document.createElement("canvas");
                                  (0, l.paintCanvas)(t, [
                                    {
                                      label: "",
                                      value: `${g}${e.loginName}`,
                                    },
                                    {
                                      label: "",
                                      value: e.loginPassword,
                                    },
                                  ]),
                                    (0, o.downloadCanvasImage)(
                                      t,
                                      `account_${O()}`
                                    );
                                })(c),
                              children: h.i18n["fast.login.download.img"],
                            }),
                            (0, f.jsx)(r.default, {
                              type: "button",
                              disabled: A,
                              onClick: () =>
                                ((e) => {
                                  var t = new Blob(
                                    [
                                      "\n\r",
                                      `${g}${e.loginName}`,
                                      "\n\r",
                                      `${e.loginPassword}`,
                                      "\n\r",
                                    ],
                                    {
                                      type: "text/plain;charset=utf-8",
                                    }
                                  );
                                  (0, p.saveAs)(t, `account_${O()}.txt`);
                                })(c),
                              children: h.i18n["fast.login.download.txt"],
                            }),
                            S &&
                              (0, f.jsx)("i", {
                                className: "mps-update",
                                onClick: () => {
                                  s({
                                    ...c,
                                    loginName: y(),
                                    loginPassword: b(),
                                  });
                                },
                              }),
                          ],
                        }),
                    ],
                  }),
                  j && (0, f.jsx)(u.default, {}),
                  (0, f.jsxs)("div", {
                    className: "submit-action",
                    children: [
                      (0, f.jsx)(r.default, {
                        className: "grey",
                        onClick: P,
                        children: h.i18n.close,
                      }),
                      (0, f.jsx)(r.default, {
                        disabled: C,
                        onClick: n,
                        children: h.i18n["fast.login.bind"],
                      }),
                    ],
                  }),
                ],
              });
            },
          }),
        });
      };
    },
    68299: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(93519)),
        s = n(a(45422)),
        r = n(a(47337)),
        o = n(a(61927)),
        l = n(a(15692));
      const d = {
        FACEBOOK: i.default,
        GOOGLE: s.default,
        TELEGRAM: o.default,
        LINE: r.default,
        ZALO: l.default,
      };
      t.default = d;
    },
    73881: (e, t, a) => {
      e.exports = a.p + "static/media/common-search-no-data.0f6b402f..svg";
    },
    74886: (e, t, a) => {
      a.r(t);
    },
    76520: (e, t, a) => {
      a.r(t);
    },
    78899: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43693)),
        s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        r = n(a(46942)),
        o = n(a(20311)),
        l = (n(a(5556)), a(74848));
      class d extends s.Component {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (0, i.default)(this, "onChangeVisible", () => {
              this.setState((e) => ({
                visible: !e.visible,
              }));
            }),
            (0, i.default)(this, "onChangeHandler", () => {
              const { onChange: e } = this.props;
              this.isValidator && this.validate(), e(this.getInputValue());
            }),
            (0, i.default)(this, "onKeyDownHandler", (e) => {
              const { onKeyDown: t } = this.props;
              t && t(e),
                13 === e.keyCode && (e.preventDefault(), this.props.onEnter());
            }),
            (0, i.default)(this, "getInputValue", () => {
              const { input: e } = this.refs;
              return e.value;
            }),
            (0, i.default)(this, "setInputValue", function () {
              let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : t.initialValue;
              const { input: a } = t.refs;
              a.value = e;
            }),
            (0, i.default)(this, "validate", () => {
              const e = this.getInputValue(),
                t = this.validator.map((t) => t(e)),
                a = t.every((e) => !!e);
              return (
                this.setState({
                  isValid: a,
                  validateDetail: t,
                }),
                a
              );
            });
          const { input: a = {} } = this.refs,
            { inputOptions: n = {} } = e;
          if (
            ((this.initialValue = e.defaultValue || a.value),
            (this.isValidator = !!n.rule),
            (this.info = n.info || ""),
            this.isValidator)
          ) {
            (0, o.default)(
              !!e.inputOptions.rule.validator,
              "If rule is given, must have validator(function returns boolean)"
            );
            const t = e.inputOptions.rule.validator,
              a = e.inputOptions.rule.tip || "",
              n = Array.isArray(t),
              i = Array.isArray(a);
            (this.validator = n ? t : [t]), (this.tip = i ? a : [a]);
          }
          this.state = {
            visible: !1,
            isValid: !0,
            validateDetail: [],
          };
        }
        componentDidMount() {
          const { input: e } = this.refs;
          this.initialValue = e.value;
        }
        render() {
          const {
              inputOptions: e = {},
              inputSpan: t,
              className: a,
              name: n,
              readOnly: i,
              isRequired: s,
              onEnter: o,
              maxLength: d,
              decorateInput: u,
              ...c
            } = this.props,
            { isValid: p, validateDetail: h, visible: f } = this.state,
            { status: m, invalidTipClassname: g } = e,
            y = {
              "nrc-form-input": !0,
              [`nrc-u-${t}`]: !!t,
              readOnly: i,
            },
            b = {
              invalid: "invalid" === m || !p,
              readOnly: i,
            },
            [v] = this.tip && this.tip.filter((e, t) => !h[t]),
            j = "function" == typeof this.info ? this.info() : this.info;
          return (0, l.jsxs)("div", {
            className: `${(0, r.default)(y)} ${a}`,
            children: [
              (0, l.jsxs)("div", {
                children: [
                  (0, l.jsx)("input", {
                    ...c,
                    type: f ? "text" : "password",
                    readOnly: i,
                    id: n,
                    ref: "input",
                    className: (0, r.default)(b),
                    onChange: this.onChangeHandler,
                    onKeyDown: this.onKeyDownHandler,
                    maxLength: d,
                  }),
                  (0, l.jsx)("i", {
                    className: "mps-" + (f ? "readable" : "unreadable"),
                    onClick: this.onChangeVisible,
                  }),
                ],
              }),
              (0, l.jsxs)("small", {
                className: p ? "info-msg" : "invalid-msg",
                children: [
                  !p &&
                    g &&
                    (0, l.jsx)("i", {
                      className: g,
                    }),
                  p ? j : "function" == typeof v ? v() : v,
                ],
              }),
            ],
          });
        }
      }
      (d.displayName = "InputPassword"),
        (d.defaultProps = {
          defaultValue: "",
          inputOptions: {},
          inputSpan: "1-1",
          isRequired: !1,
          className: "",
          name: "",
          onChange: () => {},
          onEnter: () => {},
        }),
        (t.default = d);
    },
    79264: (e, t, a) => {
      a.r(t);
    },
    80067: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(48403));
      a(41416), (t.default = i.default);
    },
    80956: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = n(a(17049)),
        s = a(7516),
        r = (n(a(38748)), a(16510)),
        o = a(51628),
        l = n(a(46942)),
        d = a(74848);
      t.default = (e) => {
        const { data: t, isSlider: a, currency: n = "", sliderOpt: u } = e,
          c = {
            isSlider: a,
            limit: 2,
            visible: 3,
            height: 72,
            ...u,
          },
          { list: p, translateStyle: h, renderKey: f } = (0, i.default)(t, c);
        return (0, d.jsx)(
          "div",
          {
            className: "roulette_winner_list animation",
            style: h,
            children:
              null == p
                ? void 0
                : p.map((e, t) => {
                    e.get("pictureUrl");
                    const a = (0, s.getRewardContent)(e);
                    return (0, d.jsxs)(
                      "div",
                      {
                        className: (0, l.default)("data-cont", {
                          "user-pic": !1,
                        }),
                        children: [
                          !1,
                          (0, d.jsxs)("div", {
                            className: "cont",
                            children: [
                              (0, d.jsx)("div", {
                                className: "name",
                                children: e.get("playerId"),
                              }),
                              (0, d.jsxs)("div", {
                                className: "win",
                                children: [
                                  o.i18n.win,
                                  ":",
                                  " ",
                                  (0, d.jsx)("span", {
                                    className: "amount",
                                    children:
                                      "number" == typeof a
                                        ? (0, r.formatMoney)(a)
                                        : a,
                                  }),
                                  " ",
                                  n &&
                                    (0, d.jsx)("span", {
                                      className: "currency",
                                      children: n,
                                    }),
                                ],
                              }),
                            ],
                          }),
                        ],
                      },
                      `${t}_${e.get("playerId")}`
                    );
                  }),
          },
          f
        );
      };
    },
    86585: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(43693)),
        s = a(96540),
        r = n(a(36412)),
        o = n(a(46942)),
        l = n(a(5556)),
        d = n(a(86663)),
        u = a(78106),
        c = n(a(27179)),
        p = n(a(88062)),
        h = n(a(14235)),
        f = X(a(30808)),
        m = n(a(30372)),
        g = n(a(51110)),
        y = n(a(61847)),
        b = n(a(31410)),
        v = a(3057),
        j = n(a(56566)),
        x = n(a(65102)),
        P = n(a(22745)),
        C = n(a(48500)),
        _ = n(a(16900)),
        S = n(a(41842)),
        M = n(a(35094)),
        E = n(a(85723)),
        O = n(a(94188)),
        A = a(8087),
        R = a(51628),
        w = n(a(61825)),
        T = a(15062),
        N = n(a(57477)),
        I = a(57160),
        L = a(98265),
        D = a(93185),
        k = a(71850),
        F = X(a(51929)),
        U = X(a(50974)),
        W = X(a(3242)),
        G = X(a(30817)),
        B = X(a(38743)),
        V = X(a(62144)),
        H = X(a(61625)),
        $ = X(a(4049)),
        q = X(a(18318)),
        K = X(a(80125));
      a(21193), a(37822);
      var Y = a(74848);
      function X(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (X = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            s,
            r = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((i = t ? n : a)) {
            if (i.has(e)) return i.get(e);
            i.set(e, r);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (s.get || s.set)
                ? i(r, t, s)
                : (r[t] = e[t]));
          return r;
        })(e, t);
      }
      const { afterSignIn: J, appReady: z, pageLoaded: Q } = a(81667);
      a(57938),
        a.e(7825).then(a.bind(a, 27825)),
        a.e(2598).then(a.bind(a, 52598)),
        a.e(6110).then(a.bind(a, 46110)),
        (0, I.initFp)();
      class Z extends s.Component {
        constructor(e) {
          var t;
          super(e),
            (t = this),
            (0, i.default)(this, "loadingDone", () => {
              document.documentElement.classList.add("loaded");
              let e = document.querySelector(".app-loading");
              if (
                (e || (e = document.querySelector(".app-loading-custom")), e)
              ) {
                var t, a, n;
                const i =
                  null !== (t = O.default.brand.htmlLoading) &&
                  void 0 !== t &&
                  t.animate
                    ? (null === (a = O.default.brand.htmlLoading) ||
                      void 0 === a
                        ? void 0
                        : a.animationDelay) || 1e3
                    : 500;
                (null !== (n = O.default.brand.htmlLoading) &&
                  void 0 !== n &&
                  n.animate) ||
                  (e.style.opacity = 0),
                  (document.querySelector("#root").style.display = "block"),
                  setTimeout(() => {
                    e.remove();
                  }, i);
              }
            }),
            (0, i.default)(this, "pageLoadHandler", () => {
              this.props.pageLoadedAction(), this.loadingDone(), Q && Q();
            }),
            (0, i.default)(this, "close498ErrorModal", (e) => {
              const { global498Msg: t } = this.props;
              13 === e.keyCode && t.size && this.onClose498ErrorModal();
            }),
            (0, i.default)(this, "setupMessageBus", (e) => {
              const { renewUnreadMsgCount: t } = this.props,
                { type: a, unreadmessages: n } = e;
              if (n && a === A.socketType.DataType) {
                t(n);
                const e = Object.keys(n).reduce((e, t) => e + n[t].count, 0);
                e > 0 &&
                  (0, w.default)(
                    O.default.brand.name,
                    (0, D.i18nVariables)(
                      R.i18n["notification.unread.message"],
                      {
                        NB: e,
                      }
                    )
                  );
              }
            }),
            (0, i.default)(this, "setupAnnouncementBus", (e) => {
              const { getAnnouncementMsgs: t, currSystemQuery: a } = this.props,
                { type: n, announcementPopup: i } = e;
              i &&
                n === A.socketType.DataType &&
                (t(a, !0),
                this.setState({
                  showUpdatePopupAnnouncement: !0,
                }));
            }),
            (0, i.default)(this, "setupMaintenance", (e) => {
              const { updateMaintenanceList: t } = this.props,
                a = this.context,
                { type: n, maintenances: i } = e;
              if (i && n === A.socketType.DataType) {
                const e =
                    R.i18n[
                      0 === i[0].status
                        ? "notification.is.not.maintenance.section"
                        : "notification.is.maintenance.section"
                    ],
                  n = i[0].gameproviderid.toUpperCase();
                let s =
                    R.i18n[`gameprovider.${i[0].gameproviderid.toLowerCase()}`],
                  r = a(n);
                (s = s ? s.replace(n, r) : r),
                  (0, w.default)(
                    O.default.brand.name,
                    e
                      .replace("PROVIDER", s)
                      .replace("TYPE", R.i18n[i[0].producttypeid])
                  ),
                  t(i);
              }
            }),
            (0, i.default)(this, "setupMessageLogout", (e) => {
              const { type: t, logout: a } = e;
              a && t === A.socketType.DataType && this.props.logoutUserNoApi();
            }),
            (0, i.default)(this, "kickedUser", (e) => {
              const { type: t, kick: a } = e;
              a &&
                t === A.socketType.DataType &&
                this.props.setApiErrorCode498({
                  code: "general",
                  constant: V.KICK_USER,
                });
            }),
            (0, i.default)(this, "getGameList", (e) => {
              const { type: t, gamesUpdated: a } = e,
                { logined: n } = this.props;
              a &&
                t === A.socketType.DataType &&
                (n && this.props.getMyFavoriteGameList(),
                this.props.getAllGameList((0, D.getGameQuery)()),
                this.props.removeGameCache());
            }),
            (0, i.default)(this, "gameTagUpdated", (e) => {
              const { type: t, gameTagUpdated: a } = e;
              a &&
                t === A.socketType.DataType &&
                (this.props.getGameTags(),
                this.props.getAllGameList((0, D.getGameQuery)()));
            }),
            (0, i.default)(this, "pushNotificationHandler", (e) => {
              const { type: t, notification: a, target: n } = e;
              let i, s;
              a &&
                t === A.socketType.DataType &&
                ((i = "welcome"),
                (s = "content welcome"),
                i && s && (0, w.default)(i, s));
            }),
            (0, i.default)(this, "logoutCountDown", (e) => {
              if (this.props.showGlobal498Msg) return;
              const { type: t, extPopup: a } = e;
              a &&
                t === A.socketType.DataType &&
                ((this.logoutSetTimeout = setTimeout(() => {
                  c.default.remove("token"), location.reload();
                }, 3e5)),
                this.props.setApiErrorCode498({
                  code: "general",
                  constant: V.LOGOUT_COUNT_DOWN,
                }));
            }),
            (0, i.default)(this, "websocketCallback", (e) => {
              this.setupMessageBus(e),
                this.setupAnnouncementBus(e),
                this.setupMaintenance(e),
                this.setupMessageLogout(e),
                this.kickedUser(e),
                this.logoutCountDown(e),
                this.getGameList(e),
                this.gameTagUpdated(e),
                this.pushNotificationHandler(e);
            }),
            (0, i.default)(this, "scrollToTop", (e) => {
              (e.state && e.state.dontScrollTo) || window.scrollTo(0, 0);
            }),
            (0, i.default)(this, "fetchInitialData", function () {
              (!(arguments.length > 0 && void 0 !== arguments[0]) ||
                arguments[0]) &&
                (t.props.getAllGameList((0, D.getGameQuery)()),
                t.props.getMaintenanceList(),
                t.props.getActiveShortcutList());
            }),
            (0, i.default)(this, "getHomeInitData", (e) => {
              this.props.getLoginSetting(),
                this.props.getRegistrationSetting(),
                this.fetchInitialData(!e),
                this.props.getBanners(R.currLocale),
                this.props.getNews(
                  d.default.stringify({
                    anntype: A.annType.News,
                  }),
                  !0
                ),
                this.props.getAnnouncementMsgs(void 0, !0),
                this.props.getStaticPages(),
                this.props.getDisplaySetting(),
                this.props.getVipType();
            }),
            (0, i.default)(this, "getPlayerInitData", (e) => {
              if (
                window.location.pathname !== T.paths.LAUNCHGAME &&
                window.location.pathname !== T.paths.GAMEHISTORYDETAIL
              ) {
                const t = c.default.get("playerid");
                e
                  ? setTimeout(() => {
                      this.props.getUserProfile(),
                        this.props.checkPlayerInfoReady();
                    }, 1e3)
                  : (this.props.getUserProfile(),
                    this.props.checkPlayerInfoReady()),
                  this.fetchInitialData(),
                  this.props.getMyFavoriteGameList(),
                  this.props.getAffiliateSetting(),
                  this.props.anytimeRebateSettlement(),
                  J &&
                    J({
                      playerid: t,
                    });
              }
            }),
            (0, i.default)(this, "playerAnytimeRebateSettlement", () => {
              this.anytimeRebateInterval = setInterval(() => {
                this.props.anytimeRebateSettlement();
              }, 3e5);
            }),
            (0, i.default)(
              this,
              "clearPlayerAnytimeRebateSettlementInterval",
              () => {
                this.props.anytimeRebateSettlement(),
                  this.anytimeRebateInterval &&
                    (clearInterval(this.anytimeRebateInterval),
                    (this.anytimeRebateInterval = void 0));
              }
            ),
            (0, i.default)(this, "toggleLoginPopup", (e) => {
              this.loginPopupStatus = !this.state.showPopupLogin;
              let t = {
                ...this.state,
              };
              (t.showPopupLogin = !this.state.showPopupLogin),
                this.state.showPopupLogin
                  ? this.props.logined &&
                    this.state.redirectPath &&
                    (this.props.history.push(this.state.redirectPath),
                    (t.redirectPath = null))
                  : e && "string" == typeof e && (t.redirectPath = e),
                this.setState(t);
            }),
            (0, i.default)(this, "togglePlayerInfoPopup", (e) => {
              const t = !this.state.showPopupPlayerInfo;
              this.setState({
                showPopupPlayerInfo: t,
                playerInfoType: t ? e : null,
              });
            }),
            (0, i.default)(this, "toggleAnnouncementPopup", () => {
              this.setState({
                showUpdatePopupAnnouncement: !1,
                showFirstPopupAnnouncement: !1,
              });
            }),
            (0, i.default)(this, "onClose498ErrorModal", () => {
              const {
                global498Msg: e,
                closeErrorModal: t,
                history: { push: a },
                registerErrorCode: n,
              } = this.props;
              switch (e.get("constant")) {
                case G.AJAX_PUT_LAUNCH_GAME_FAILURE:
                  if (8 === e.get("code")) {
                    a(T.paths.VALIDATE_PAGE, {
                      validationType: A.BlockTypesEnum.BLOCK_LAUNCH_GAME,
                    });
                    break;
                  }
                  window.close();
                  break;
                case V.AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE:
                  if (2 === e.get("code")) {
                    a(T.paths.ROOT);
                    break;
                  }
                  break;
                case V.KICK_USER:
                  this.props.logoutUserNoApi(), window.close();
                  break;
                case V.LOGOUT_COUNT_DOWN:
                  clearTimeout(this.logoutSetTimeout), this.props.getSync();
                  break;
                case V.POST_REGISTER_FAILURE:
                  0 === n && location.reload();
                  break;
                case V.PUT_RESEND_ACT_TOKEN_FAILURE:
                  8 === e.get("code") &&
                    (this.props.history.push(T.paths.ROOT), location.reload());
                  break;
                case V.AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE:
                  5 === e.get("code") &&
                    (this.props.history.push(T.paths.ROOT), location.reload());
                  break;
                case V.AJAX_PUT_FORGET_USERNAME_FAILURE:
                case V.AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE:
                  0 === e.get("code") &&
                    (this.props.history.push(T.paths.ROOT),
                    this.toggleLoginPopup());
                  break;
                case W.AJAX_POST_SEND_PAYMENT_FAILURE:
                case G.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE:
                  window.opener ? window.close() : a(T.paths.ROOT);
                  break;
                case q.ADD_BANK_WITHDRAWAL_FAILURE:
                  13 === e.get("code") &&
                    this.props.history.push(T.paths.PROFILE);
                  break;
                case q.ADD_CRYPTO_WITHDRAWAL_FAILURE:
                  if (
                    (13 === e.get("code") &&
                      this.props.history.push(T.paths.PROFILE),
                    30 === e.get("code"))
                  ) {
                    const t = e.get("locationState") || {};
                    this.props.history.push(T.paths.WITHDRAWMAIN, t);
                  }
                  break;
                case B.PUT_MISSION_CLAIM_REWARD_FAILURE:
                  3 === e.get("code") &&
                    (this.props.getDisplaySetting(),
                    this.props.history.push(T.paths.PROFILE));
                  break;
                case B.POST_GET_ALL_REWARD_FAILURE:
                  3 === e.get("code") && this.props.getDisplaySetting();
                  break;
                case H.POST_PROMO_REQ_FAILURE:
                  if (0 === e.get("code")) {
                    a(`${T.paths.BANKCARDS}?add=true`);
                    break;
                  }
                  break;
                case F.PUT_REGISTER_AFFILIATE_FAILURE:
                  if (2 === e.get("code")) {
                    window.location.pathname = T.paths.PROFILE;
                    break;
                  }
                  break;
                case $.PUT_UPDATE_VIP_SIGIN_BOUNS_ERR:
                case $.GET_NEW_VIP_SETTING_ERR:
                  switch (e.get("code")) {
                    case 6:
                    case 9:
                    case 10:
                    case 15:
                      this.props.history.location.pathname === T.paths.VIP &&
                        (this.props.getUserProfile(),
                        this.props.history.push(T.paths.PROFILE));
                  }
                  break;
                case U.PUT_CLAIM_ANYTIME_REBATE_FAILURE:
                  1 === e.get("code") && location.reload();
                  break;
                case H.POST_CLAIM_FAILURE:
                  5 === e.get("code") && location.reload();
                  break;
                case K.AJAX_POST_ADD_CORP_CRYPTO_DEPOSIT_FAILURE:
                  9 === e.get("code") && location.reload();
                  break;
                case K.AJAX_UPDATE_CORP_CRYPTO_DEPOSIT_ORDER_INFO_FAILURE:
                  [0, 11].includes(e.get("code")) && location.reload();
              }
              t();
            }),
            (0, i.default)(this, "get498ErrorModalCustomBtn", () => {
              const { global498Msg: e, history: t } = this.props,
                a = e.get("code"),
                n = e.get("constant"),
                i = (e) => {
                  t.push(e), this.props.modifyPromoDetailModalDispaly(!1);
                };
              if (
                (n === H.POST_PROMO_REQ_FAILURE ||
                  n === H.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE) &&
                A.PROMO_FAILURE_SMS_CODES.includes(a)
              )
                return {
                  customBtnText: R.i18n["to.profile"],
                  onClickAction: () => i(T.paths.PROFILE),
                };
              if (
                n === H.POST_PROMO_REQ_FAILURE &&
                A.PROMO_FAILURE_DEPOSIT_CODES.includes(a)
              )
                return {
                  customBtnText: R.i18n["to.deposit"],
                  onClickAction: () => i(T.paths.DEPOSIT),
                };
              const { appDownloadURL: s } = O.default.portal.apiServer;
              return n === B.PUT_MISSION_CLAIM_REWARD_FAILURE &&
                A.MISSION_FAILURE_APP_DOWNLOAD_CODE.includes(a) &&
                s
                ? {
                    customBtnText: R.i18n.download,
                    onClickAction: () => {
                      t.push(T.paths.PAGE_QR);
                    },
                  }
                : null;
            }),
            (0, i.default)(this, "getIsAlertModalHideCloseTxt", () => {
              const { global498Msg: e } = this.props,
                t = e.get("code"),
                a = e.get("constant"),
                n =
                  (a === H.POST_PROMO_REQ_FAILURE ||
                    a === H.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE) &&
                  A.PROMO_FAILURE_SMS_CODES.includes(t),
                i =
                  a === B.PUT_MISSION_CLAIM_REWARD_FAILURE &&
                  A.MISSION_FAILURE_APP_DOWNLOAD_CODE.includes(t);
              return n || i;
            }),
            (0, i.default)(this, "redirectToProfile", () => {
              this.props.history.push(T.paths.PROFILE);
            }),
            (0, i.default)(this, "RootAndNewMemberPages", () => {
              const {
                ecDisplaySetting: {
                  ecDisplayVip: e,
                  ecDisplaySSVip: t,
                  ecDisplayMission: a,
                },
                player: { missionVisibleByRisk: n },
              } = this.props;
              return (0, Y.jsxs)(u.Switch, {
                children: [
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.BALANCE,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterBalance, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.TRANSACTION,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterTransaction, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.PROFILE,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterProfile, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.WITHDRAWALACCOUNTS,
                    exact: !0,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterProfile, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.BANKCARDS,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterBankCards, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.CRYPTOACCOUNTS,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterCryptoAccounts, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.MYWALLET,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterProfile, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.VALIDATE_PAGE,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterValidatePage, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.DEPOSITLIST,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_DEPOSIT,
                          children: (0, Y.jsx)(f.DepositPayments, {}),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.OFFLINEDEPOSIT,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_DEPOSIT,
                          children: (0, Y.jsx)(f.DepositCompany, {}),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.DEPOSIT_ONLINE_BANKING,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_DEPOSIT,
                          children: (0, Y.jsx)(f.DepositOnlineBanking, {}),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.DEPOSIT3RDPARTYPAYMENTADD,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_DEPOSIT,
                          children: (0, Y.jsx)(f.Deposit3rdParty, {}),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.DEPOSIT_CORPORATE_CRYPTO,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_DEPOSIT,
                          children: (0, Y.jsx)(f.DepositCorporateCrypto, {}),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.DEPOSIT_SUMMARY,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.DepositSummary, {}),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.FINANHISTORY,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterFinanHistory, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.WITHDRAWLIST,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_WITHDRAW,
                          children: (0, Y.jsx)(
                            f.MemberCenterWithdrawalAudit,
                            {}
                          ),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.WITHDRAWMAIN,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_WITHDRAW,
                          children: (0, Y.jsx)(
                            f.MemberCenterWithdrawalMain,
                            {}
                          ),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.BANK_WITHDRAW_ADD,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_WITHDRAW,
                          children: (0, Y.jsx)(
                            f.MemberCenterBankWithdrawalAdd,
                            {}
                          ),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.CRYPTO_WITHDRAW_ADD,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(x.default, {
                          validationType: A.BlockTypesEnum.BLOCK_WITHDRAW,
                          children: (0, Y.jsx)(
                            f.MemberCenterCryptoWithdrawalAdd,
                            {}
                          ),
                        }),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.INBOX,
                    render: () =>
                      (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.MemberCenterAnnouncement, {}),
                      }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.GAMEHISTORY,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterGameHistory, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.CHANGEPASSWORD,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterChangePassword, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.PROMO_CENTER,
                    children: (0, Y.jsx)(f.MemberCenter, {
                      children: (0, Y.jsx)(f.MemberCenterPromoCenter, {}),
                    }),
                  }),
                  !0 === this.props.displayAffiliate &&
                    (0, Y.jsx)(u.Route, {
                      path: T.paths.AFFILIATE,
                      children: (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.MemberCenterAffiliate, {}),
                      }),
                    }),
                  a &&
                    n &&
                    (0, Y.jsx)(u.Route, {
                      path: T.paths.MISSION,
                      children: (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.MemberCenterMission, {}),
                      }),
                    }),
                  e === A.vipDisplayTypeEnum.ENABLE &&
                    (0, Y.jsx)(u.Route, {
                      path: T.paths.VIP,
                      children: (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.MemberCenterVip, {}),
                      }),
                    }),
                  t === A.vipDisplayTypeEnum.ENABLE &&
                    (0, Y.jsx)(u.Route, {
                      path: T.paths.SSVIP,
                      children: (0, Y.jsx)(f.MemberCenter, {
                        children: (0, Y.jsx)(f.MemberCenterSSVip, {}),
                      }),
                    }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.ROOT,
                    children: (0, Y.jsxs)(h.default, {
                      children: [
                        (0, Y.jsx)(f.HomeContainer, {}),
                        (0, Y.jsx)(E.default, {}),
                      ],
                    }),
                  }),
                ],
              });
            }),
            (this.state = {
              showPopupLogin:
                e.location.pathname === T.paths.LOGIN && !e.logined,
              showPopupPlayerInfo: !1,
              showFirstPopupAnnouncement: !1,
              showUpdatePopupAnnouncement: !1,
              showEmailActivationPendingModal: !1,
              playerInfoType: null,
              logout: !1,
              redirectPath: null,
            });
        }
        getChildContext() {
          return {
            toggleLoginPopup: this.toggleLoginPopup,
            togglePlayerInfoPopup: this.togglePlayerInfoPopup,
            loginPopupStatus: this.loginPopupStatus,
            toggleAnnouncementPopup: this.toggleAnnouncementPopup,
          };
        }
        componentDidMount() {
          const { logined: e, history: t } = this.props;
          switch (
            ((0, L.keepUrlQS)(t),
            "complete" === document.readyState
              ? this.pageLoadHandler()
              : window.addEventListener("load", this.pageLoadHandler),
            window.location.pathname)
          ) {
            case T.paths.LAUNCHGAME:
              this.props.getMaintenanceList();
              break;
            case T.paths.GAMEHISTORYDETAIL:
              break;
            default:
              this.getHomeInitData(e);
          }
          const n = e ? void 0 : this.toggleLoginPopup;
          (0, D.checkThirdPartyRedirectUriEnter)(this.props.history, n),
            setInterval(() => {
              window.gameWindowInstance &&
                (window.gameWindowClosed ||
                  !window.gameWindowInstance.closed ||
                  window.miniGameLaunch ||
                  (this.props.getUserProfile(),
                  this.clearPlayerAnytimeRebateSettlementInterval(),
                  c.default.set("lg", !1),
                  setTimeout(() => this.props.getUserProfile(), 5e3),
                  (window.gameWindowClosed = !0)),
                window.gameWindowClosed ||
                  this.anytimeRebateInterval ||
                  !this.props.ecEnabledAnytimeRebateSettlement ||
                  this.playerAnytimeRebateSettlement());
            }, 3e3),
            e && this.getPlayerInitData(),
            (window.requiredLogin = () => {
              k.isSportPage && this.toggleLoginPopup();
            }),
            (this.storageListener = (0, N.default)()),
            window.addEventListener("keydown", this.close498ErrorModal),
            (this.historyListener = this.props.history.listen((e) =>
              this.scrollToTop(e)
            )),
            z && z(),
            (window.appIsMounted = !0);
          const { color: i, defaultCurrency: s } = O.default;
          document.documentElement.style.setProperty(
            "--platform-color-highlight",
            `${i["color-highlight"] || "#000"}`
          ),
            "PHP" === s && a.e(4648).then(a.bind(a, 94648));
        }
        componentDidUpdate(e) {
          const { showPopupLogin: t } = this.state,
            { location: a, logined: n } = this.props,
            i = e.location.pathname === T.paths.LOGIN;
          a.pathname === T.paths.LOGIN &&
            !n &&
            !t &&
            !i &&
            this.setState({
              showPopupLogin: !0,
            });
        }
        UNSAFE_componentWillReceiveProps(e) {
          if (e.loginSuccess && !this.props.loginSuccess) {
            if (e.needactivation)
              return void this.setState({
                showEmailActivationPendingModal: !0,
              });
            this.getPlayerInitData(e.signupSuccess),
              this.setState({
                showFirstPopupAnnouncement: !0,
              });
          }
          if (!this.props.logoutSuccess && e.logoutSuccess) {
            if (
              (this.setState({
                logout: !0,
              }),
              e.unauthorized)
            ) {
              const e = c.default.get("rup");
              if (e) {
                const t = T.paths[e.toUpperCase()];
                if (t) return void this.props.history.push(t);
              }
            }
            this.props.history.push(T.paths.ROOT), window.location.reload();
          }
        }
        componentWillUnmount() {
          this.historyListener(),
            this.storageListener(),
            window.removeEventListener("keydown", this.close498ErrorModal),
            window.removeEventListener("load", this.pageLoadHandler);
        }
        render() {
          const {
              logined: e,
              settle: t,
              showGlobal498Msg: a,
              global498Msg: n,
              announcementMsgs: i,
              signupSuccess: s,
              email: r,
              mobile: l,
              remaintime: d,
              activateSuccess: c,
              verifytype: E,
              playerid: O,
              history: { push: w },
              hotGameTypeMap: N,
              isSSVip: I,
              isVipTypeSuc: L,
            } = this.props,
            {
              showPopupLogin: k,
              showFirstPopupAnnouncement: F,
              showUpdatePopupAnnouncement: U,
              showPopupPlayerInfo: W,
              showEmailActivationPendingModal: G,
              playerInfoType: H,
            } = this.state,
            $ = N.keySeq();
          return (0, Y.jsxs)(S.default, {
            children: [
              (0, Y.jsxs)(u.Switch, {
                children: [
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.CASINO_ROOM,
                    children: (0, Y.jsx)(f.ViaGameRoom, {}),
                  }),
                  L
                    ? I
                      ? (0, Y.jsx)(u.Route, {
                          path: T.paths.MY_VIP,
                          children: (0, Y.jsx)(h.default, {
                            children: (0, Y.jsx)(f.SSVipInfoPage, {}),
                          }),
                        })
                      : (0, Y.jsx)(u.Route, {
                          path: T.paths.MY_VIP,
                          children: (0, Y.jsx)(h.default, {
                            children: (0, Y.jsx)(f.VipInfoPage, {}),
                          }),
                        })
                    : null,
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.PROMO_AND_DETAIL,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.PromoContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.ANIMAL,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.AnimalContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.EGAME,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.EgameContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LIVE,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.LiveContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LOTTERY,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.LotteryContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.MPG,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.MpgContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.SPORTS,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.SportsContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.CHESS,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.ChessContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.ESPORTS,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.EsportsContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.MINI_GAME,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.MiniGamesContainer, {}),
                    }),
                  }),
                  $.size > 0 &&
                    $.map((e, t) =>
                      (0, Y.jsx)(
                        u.Route,
                        {
                          path: T.paths[e],
                          children: (0, Y.jsx)(h.default, {
                            children: (0, Y.jsx)(f.HotGames, {
                              content: e,
                            }),
                          }),
                        },
                        `${e}_${t}`
                      )
                    ),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.FAVORITE_GAMES,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.FavoriteGames, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: (0, D.getPath)(T.paths.SIGNUP),
                    render: (t) =>
                      e && !s
                        ? (0, Y.jsx)(u.Redirect, {
                            to: T.paths.ROOT,
                          })
                        : (0, Y.jsx)(h.default, {
                            children: (0, Y.jsx)(f.SignupContainer, {}),
                          }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.FORGETPASSWORD,
                    render: (t) =>
                      e
                        ? (0, Y.jsx)(u.Redirect, {
                            to: T.paths.ROOT,
                          })
                        : (0, Y.jsxs)(h.default, {
                            children: [
                              (0, Y.jsx)(f.HomeContainer, {}),
                              (0, Y.jsx)(f.ForgetPasswordContainer, {}),
                            ],
                          }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.ACTIVATEBYEMAIL,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.ActivateContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.RESETPASSWORD,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.ResetPasswordContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.FORGETUSERNAME,
                    children: (0, Y.jsxs)(h.default, {
                      children: [
                        (0, Y.jsx)(f.HomeContainer, {}),
                        (0, Y.jsx)(p.default, {}),
                      ],
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.PAGE,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.StaticContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.ULAGENT_APPLY,
                    children: (0, Y.jsx)(j.default, {
                      from: T.paths.ULAGENT_APPLY,
                      children: (0, Y.jsx)(h.default, {
                        children: (0, Y.jsx)(f.AgentSignup, {}),
                      }),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.INFO,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(
                        f.Staticpagesettings.ContentByCodeContainer,
                        {
                          type: A.staticPageSettingTypeEnum.INFO,
                        }
                      ),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.AGENT,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(
                        f.Staticpagesettings.ContentByCodeContainer,
                        {
                          type: A.staticPageSettingTypeEnum.AGENT,
                        }
                      ),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.DEPOSITSERVICEONLINEPOPUP,
                    children: (0, Y.jsx)(
                      f.DepositServiceOnlinePopupContainer,
                      {}
                    ),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LAUNCHGAME,
                    children: (0, Y.jsx)(x.default, {
                      validationType: A.BlockTypesEnum.BLOCK_LAUNCH_GAME,
                      children: (0, Y.jsx)(f.LaunchGameContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.GAMEHISTORYDETAIL,
                    children: (0, Y.jsx)(f.GameHistoryDetailContainer, {}),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.CONTENT,
                    children: (0, Y.jsx)(h.default, {
                      customLayout: ["Header", "Navigation", "Main", "Footer"],
                      children: (0, Y.jsx)(
                        f.Staticpagesettings.ContentByNameContainer,
                        {
                          type: A.staticPageSettingTypeEnum.CONTENT,
                        }
                      ),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.BONUS,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.Bonus, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.REDENVELOPE,
                    children: (0, Y.jsx)(f.RedEnvelopeContainer, {}),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.VALID_BET_REDENVELOPE,
                    children: (0, Y.jsx)(f.RedEnvelopeContainer, {}),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LUCKYWHEEL,
                    children: (0, Y.jsx)(f.Roulette, {}),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LOTTERY_EVENT,
                    children: (0, Y.jsx)(f.LotteryEvent, {}),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.AD,
                    component: _.default,
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.GOHOME,
                    render: (e) => {
                      if (null === window.opener)
                        return (0, Y.jsx)(u.Redirect, {
                          to: T.paths.ROOT,
                        });
                      window.close();
                    },
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.LOGIN,
                    render: () =>
                      e
                        ? (0, Y.jsx)(u.Redirect, {
                            to: T.paths.ROOT,
                          })
                        : (0, Y.jsx)(h.default, {
                            children: (0, Y.jsx)(f.HomeContainer, {}),
                          }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.BROKEN_LINK,
                    component: g.default,
                  }),
                  (0, Y.jsx)(u.Route, {
                    path: T.paths.NOTFOUND,
                    children: (0, Y.jsx)(h.default, {
                      children: (0, Y.jsx)(f.HomeContainer, {}),
                    }),
                  }),
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.DEMO_GAME,
                    component: b.default,
                  }),
                  (0, Y.jsx)(u.Route, {
                    exact: !0,
                    path: T.paths.SPORT_PAGE,
                    component: M.default,
                  }),
                  (0, Y.jsx)(u.Route, {
                    component: this.RootAndNewMemberPages,
                  }),
                ],
              }),
              (0, Y.jsxs)("div", {
                className: "app-popup-container",
                children: [
                  k &&
                    (0, Y.jsx)(m.default, {
                      handleClose: this.toggleLoginPopup,
                      onForgetUsername: () => {
                        this.toggleLoginPopup(), w(T.paths.FORGETUSERNAME);
                      },
                      onForgetPassword: () => {
                        this.toggleLoginPopup(), w(T.paths.FORGETPASSWORD);
                      },
                      onSignup: () => {
                        this.toggleLoginPopup(), w(T.paths.SIGNUP);
                      },
                    }),
                  !0 === e && !1 === t && (0, Y.jsx)(f.ResetInfoContainer, {}),
                  e &&
                    i.get("objs").size > 0 &&
                    (F || U) &&
                    (0, Y.jsx)(f.Announcement, {}),
                  W &&
                    (0, Y.jsx)(C.default, {
                      playerInfoType: H,
                      onBack: this.togglePlayerInfoPopup,
                    }),
                  a &&
                    n.size > 0 &&
                    (0, Y.jsx)(v.AlertModal, {
                      title: R.i18n.tipsModal,
                      onHandleClose: this.onClose498ErrorModal,
                      message: n.get("msg"),
                      className: (0, o.default)({
                        "mission-reward-error":
                          n.get("constant") === B.POST_GET_ALL_REWARD_FAILURE,
                        "login-error":
                          n.get("constant") === V.AJAX_POST_LOGIN_FAILURE,
                      }),
                      isHideCloseTxt: this.getIsAlertModalHideCloseTxt(),
                      customBtn: this.get498ErrorModalCustomBtn(),
                    }),
                  G &&
                    (0, Y.jsx)(f.ActivationPendingModalContainer, {
                      onClose: () => {
                        this.setState({
                          showEmailActivationPendingModal: !1,
                        });
                      },
                      playerid: O,
                      useremail: r,
                      usermobile: l,
                      remaintime: d,
                      currentauth: E,
                    }),
                  E === A.authVerifyTypeEnum.OTP &&
                    c &&
                    G &&
                    (0, Y.jsx)(v.AlertModal, {
                      title: R.i18n.tipsModal,
                      onHandleClose: () => {
                        this.toggleLoginPopup(),
                          w(T.paths.ROOT),
                          this.setState({
                            showEmailActivationPendingModal: !1,
                          });
                      },
                      message: R.i18n["activate.success"],
                      success: !0,
                    }),
                ],
              }),
              (0, Y.jsx)(P.default, {
                websocketCallback: this.websocketCallback,
              }),
              (0, Y.jsx)(y.default, {}),
            ],
          });
        }
      }
      (Z.contextType = r.default),
        (Z.childContextTypes = {
          toggleLoginPopup: l.default.func,
          togglePlayerInfoPopup: l.default.func,
          loginPopupStatus: l.default.bool,
          toggleAnnouncementPopup: l.default.func,
        }),
        (t.default = Z);
    },
    87293: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(46942)),
        r = n(a(60781)),
        o = a(51628),
        l = n(a(55665)),
        d = a(56291),
        u = a(74848);
      t.default = (e) => {
        let { onChangeRememberLogin: t } = e;
        const { loginSetting: a } = (0, l.default)((e) => ({
            loginSetting: e.players.loginSetting,
          })),
          [n, c] = (0, r.default)(!1),
          [p, h] = (0, i.useState)(d.loginInfoCookie.get().playerPassword);
        return 0 === a.get("loginRememberDays")
          ? null
          : (0, u.jsxs)("div", {
              className: "remeber-login-wrapper",
              children: [
                (0, u.jsxs)("div", {
                  className: "center remeber-login",
                  onMouseEnter: c,
                  onMouseLeave: c,
                  children: [
                    (0, u.jsx)("input", {
                      type: "checkbox",
                      id: "remember-login",
                      onChange: (e) => {
                        h(e.target.checked), t(e.target.checked);
                      },
                      checked: p,
                    }),
                    (0, u.jsx)("label", {
                      htmlFor: "remember-login",
                    }),
                    o.i18n["remember.login"],
                  ],
                }),
                p &&
                  (0, u.jsx)("div", {
                    className: (0, s.default)("center remeber-login-tip", {
                      "simple-login-remember-tip": n,
                    }),
                    children: o.i18n["remember.login.tip"],
                  }),
              ],
            });
      };
    },
    87459: (e, t, a) => {
      var n = a(24994);
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
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = (n(a(5556)), n(a(46942))),
        r = a(74848);
      const o = {
          deleteFocus: (e) => {
            let { onActionTrigger: t, isFocus: a, value: n } = e;
            return (
              n &&
              a &&
              (0, r.jsx)("div", {
                onMouseDown: (e) => {
                  0 === e.button && t();
                },
                children: (0, r.jsx)("i", {
                  className: "mps-close",
                }),
              })
            );
          },
          delete: (e) => {
            let { onActionTrigger: t } = e;
            return (0, r.jsx)("div", {
              onClick: t,
              children: (0, r.jsx)("i", {
                className: "mps-close",
              }),
            });
          },
          hind: (e) => {
            let { inputType: t, onActionTrigger: a } = e;
            const n = (0, i.useMemo)(() => "password" === t, [t]);
            return (0, r.jsx)("div", {
              onClick: a,
              children: (0, r.jsx)("i", {
                className: (0, s.default)({
                  d20_small_show: !n,
                  d20_small_hide: n,
                }),
              }),
            });
          },
        },
        l = (e) => {
          let { actionName: t, ...a } = e;
          const n = o[t];
          return n
            ? (0, r.jsx)(n, {
                ...a,
              })
            : null;
        };
      (l.defaultProps = {
        onActionTrigger: () => {},
      }),
        (t.default = l);
    },
    87980: (e, t, a) => {
      a.r(t);
    },
    88062: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = a(67467),
        s = a(47459),
        r = a(76066),
        o = n(a(52964));
      const l = (0, i.connect)(
        (e) => ({
          registrationSetting: e.players.registrationSetting,
          sentForgetUsername: e.players.sentForgetUsername,
          email: e.players.email,
          mobile: e.players.mobile,
          activeshortcuts: e.settings.activeshortcuts,
        }),
        (e) =>
          (0, s.bindActionCreators)(
            {
              forgetUsername: r.forgetUsername,
              closeSentUsernamemodal: r.closeSentUsernamemodal,
              getRegistrationSetting: r.getRegistrationSetting,
            },
            e
          )
      )(o.default);
      t.default = l;
    },
    91407: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getAdWebpageShareInfo = void 0);
      var n = s(a(7333)),
        i = s(a(68686));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            n = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var i,
            s,
            r = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return r;
          if ((i = t ? n : a)) {
            if (i.has(e)) return i.get(e);
            i.set(e, r);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((s =
                (i = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (s.get || s.set)
                ? i(r, t, s)
                : (r[t] = e[t]));
          return r;
        })(e, t);
      }
      t.getAdWebpageShareInfo = (e) => ({
        types: [
          n.AJAX_GET_ADWEBPAGESHARE_INFO_REQUEST,
          n.AJAX_GET_ADWEBPAGESHARE_INFO_SUCCESS,
          n.AJAX_GET_ADWEBPAGESHARE_INFO_FAILURE,
        ],
        promiseType: "",
        promises: [
          (t) =>
            t({
              url: `${i.baseURL}${i.default.adWebpageShareURL}/${e}`,
              method: "GET",
            }),
        ],
      });
    },
    92834: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(42396));
      a(79264), (t.default = i.default);
    },
    93519: (e, t, a) => {
      e.exports = a.p + "static/media/icon-fb.b106d7b6..svg";
    },
    93978: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var i = n(a(10826));
      a(47905), (t.default = i.default);
    },
    97067: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var n = a(96540);
      t.default = () => {
        const [e, t] = (0, n.useState)(!1);
        return {
          isOpenImgCaptcha: e,
          closeImgCaptcha: () => {
            t(!1);
          },
          openImgCaptcha: () => {
            t(!0);
          },
        };
      };
    },
    97113: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(96540));
      var i = n(a(97067)),
        s = n(a(34476)),
        r = a(74848);
      t.default = (e) => (t) => {
        const a = (0, i.default)(),
          { isLoginImgCaptcha: n } = (0, s.default)();
        return (0, r.jsx)(e, {
          ...t,
          ...a,
          isLoginImgCaptcha: n,
        });
      };
    },
    99818: (e, t, a) => {
      var n = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        n(a(5556));
      var i = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              n,
              i = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return i;
            if ((a = t)) {
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
          })(e);
        })(a(96540)),
        s = n(a(46942)),
        r = a(74848);
      class o extends i.Component {
        render() {
          const { children: e, className: t, style: a } = this.props,
            n = {
              "white-container": !0,
            };
          return (
            t && (n[t] = !0),
            (0, r.jsx)("div", {
              className: (0, s.default)(n),
              style: a,
              children: e,
            })
          );
        }
      }
      t.default = o;
    },
  },
]);
