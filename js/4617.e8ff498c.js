"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [4617],
  {
    84617: (e, t, a) => {
      var i = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.verificationCodeSchema =
          t.validImageFormats =
          t.stringSchema =
          t.stringOptsSchema =
          t.stringNumberSchema =
          t.startTimeWithLowerLimitSchema =
          t.startTimeSchema =
          t.resizeUploadImageSchema =
          t.repeatPasswordSchema =
          t.playeridSchema =
          t.playerPasswordSchema =
          t.playerCurrentPasswordSchema =
          t.pinSchema =
          t.numberSchema =
          t.numberOptsSchema =
          t.notLeadingOrTrailingWhitespace =
          t.notContainsNumberic =
          t.notContainWhitespace =
          t.notContainSymbol =
          t.isValidFileSize =
          t.imageFileSchema =
          t.getFirstnameSchema =
          t.getDigitNumberSchema =
          t.getBankAccountSettingSchema =
          t.endTimeSchema =
          t.emailSchema =
          t.depositAmountSchema =
          t.bankaccountSchema =
          t.agentidSchema =
            void 0);
      var r = i(a(93110)),
        n = a(9404),
        s = i(a(98986)),
        l = i(a(69517)),
        h = i(a(2056)),
        c = i(a(21666)),
        m = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              i,
              r = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return r;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, r);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((i =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (i.get || i.set)
                  ? a(r, t, i)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(68561)),
        o = i(a(10844)),
        u = a(16510),
        p = a(51628),
        d = a(29979),
        g = a(93185),
        f = a(1650);
      const v = /^[0-9a-zA-Z]+$/,
        S =
          /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,
        E =
          ((t.notContainSymbol =
            /^(?!.*[\uD800-\uDBFF][\uDC00-\uDFFF])[^-()`~!@#$%^&*-+=|{}[\]:;"<>,.?/_'\\]+$/),
          (t.notContainWhitespace = /\S+/),
          (t.notContainsNumberic = /^([^0-9]*)$/),
          (t.notLeadingOrTrailingWhitespace = /^\S.*\S$/)),
        b = (t.stringSchema = m.string().nullable().default(""));
      (t.numberSchema = m
        .number()
        .nullable()
        .default(null)
        .typeError(p.i18n["validate.isNumeric"])),
        (t.stringOptsSchema = m.string().default("-1")),
        (t.numberOptsSchema = m.number().default(-1)),
        m.setLocale({
          mixed: {
            required: p.i18n["validate.empty"],
            integer: p.i18n[""],
            notType(e) {
              let { path: t, type: a, value: i } = e;
              if ("number" === a) return p.i18n["validate.isNumeric"];
              {
                let e = `${t} must be a '${a}' type`;
                return (
                  null === i &&
                    (e = `${e}, If 'null' is intended as an empty value be sure to mark the schema as '.nullable()'`),
                  e
                );
              }
            },
          },
        });
      const N = (e) => Math.floor(e / 1e4) / 100,
        w = N(o.default.getIn(["uploadsize", "screenshot"], 1e6)),
        y = (e) => N(e.size) <= w;
      t.isValidFileSize = y;
      const _ = (t.validImageFormats = [
        "image/png",
        "image/gif",
        "image/jpeg",
        "image/bmp",
      ]);
      (t.imageFileSchema = () =>
        m
          .mixed()
          .test(
            "fileType",
            p.i18n["file.invalid.type"],
            (e) => !e || _.includes(e.type)
          )
          .test(
            "fileSize",
            (0, g.i18nVariables)(p.i18n["file.invalid.uploadsize"], {
              fileSize: w,
            }),
            (e) => !e || y(e)
          )),
        (t.resizeUploadImageSchema = (e) => {
          let { fileSize: t } = e;
          const a = t / 1024 / 1024;
          return m
            .mixed()
            .default(null)
            .test(
              "fileSize",
              (0, g.i18nVariables)(p.i18n["file.invalid.uploadsize"], {
                fileSize: a,
              }),
              (e) => null == e || !e.size || e.size < t
            );
        }),
        (t.depositAmountSchema = function () {
          let {
            isInteger: e,
            decimalPlaces: t = 2,
            collection: a = null,
            format: i,
          } = arguments.length > 0 && void 0 !== arguments[0]
            ? arguments[0]
            : {};
          const n = m
            .string()
            .nullable()
            .default("")
            .test((a, i) => {
              if ("" === a)
                return i.createError({
                  path: i.path,
                  message: p.i18n["validate.empty"],
                });
              if ((0, f.hasWhiteSpace)(a))
                return i.createError({
                  path: i.path,
                  message: p.i18n["validate.white.space"],
                });
              if (isNaN(a))
                return i.createError({
                  path: i.path,
                  message: p.i18n["validate.isNumeric"],
                });
              const n = new r.default(a);
              return n.greaterThan(0)
                ? e && !n.isInteger()
                  ? i.createError({
                      path: i.path,
                      message: p.i18n["validate.integer.amount"],
                    })
                  : n.decimalPlaces() <= t ||
                    i.createError({
                      path: i.path,
                      message: (0, g.i18nVariables)(
                        p.i18n["validate.decimal.places"],
                        {
                          NUMBER: t,
                        }
                      ),
                    })
                : i.createError({
                    path: i.path,
                    message: (0, g.i18nVariables)(
                      p.i18n["validate.num.greater.than"],
                      {
                        num: 0,
                      }
                    ),
                  });
            });
          return a
            ? n.test((e, t) => {
                const n = a.legalMinAmt || 0;
                if (Number(e) < n)
                  return t.createError({
                    path: t.path,
                    message: `${p.i18n["validate.number.should.below"]} ${(0,
                    u.formatDepositAmount)(n, i)}`,
                  });
                const s = a.legalMaxAmt || 0;
                if (s > 0 && Number(e) > s)
                  return t.createError({
                    path: t.path,
                    message: `${p.i18n["validate.number.and.upto"]} ${(0,
                    u.formatDepositAmount)(s, i)}`,
                  });
                if (a.processingfeepct || a.processingfeeconst) {
                  const i = new r.default(e);
                  if (
                    !i
                      .minus(
                        i
                          .times(a.processingfeepct / 100)
                          .plus(a.processingfeeconst)
                      )
                      .isPositive()
                  )
                    return t.createError({
                      path: t.path,
                      message: p.i18n["validate.actual.amount.positive"],
                    });
                }
                return !0;
              })
            : n;
        }),
        (t.playeridSchema = m
          .string()
          .test(
            (e, t) =>
              !e ||
              e === e.trim() ||
              t.createError({
                path: t.path,
                message: p.i18n["validate.isTrimmed"],
              })
          )
          .matches(v, {
            excludeEmptyString: !0,
            message: p.i18n["validate.isAlphanumeric"],
          })
          .matches(new RegExp(v.source.replace("+$", "{4,20}$")), {
            excludeEmptyString: !0,
            message: (0, g.i18nVariables)(
              p.i18n["validate.check.length.limit"],
              {
                MIN: 4,
                MAX: 20,
              }
            ),
          })
          .lowercase(p.i18n["validate.notcontainscapital"])
          .nullable()
          .strict()),
        (t.playerPasswordSchema = m
          .string()
          .test(function (e) {
            return (
              !e.match(/\s/g) ||
              this.createError({
                path: this.path,
                message: p.i18n["validate.white.space"],
              })
            );
          })
          .matches(/(?=.*[a-zA-Z])/g, {
            excludeEmptyString: !0,
            message: p.i18n["validate.contain.alphanumeric"],
          })
          .matches(/(?=.*\d)/g, {
            excludeEmptyString: !0,
            message: p.i18n["validate.containsnumber"],
          })
          .matches(/(.{8,20})/g, {
            excludeEmptyString: !0,
            message: (0, g.i18nVariables)(
              p.i18n["validate.check.length.limit"],
              {
                MIN: f.PASSWORD_MIN_LENGTH,
                MAX: f.PASSWORD_MAX_LENGTH,
              }
            ),
          })),
        (t.playerCurrentPasswordSchema = m.string().test(function (e) {
          return (
            !(e && !E.test(e)) ||
            this.createError({
              path: this.path,
              message: p.i18n["validate.leading.trailing.white.space"],
            })
          );
        })),
        (t.agentidSchema = m
          .string()
          .matches(v, {
            excludeEmptyString: !0,
            message: p.i18n["validate.is.alphanumeric"],
          })
          .lowercase(p.i18n["validate.not.contains.capital"])
          .max(
            f.ACCOUNT_MAX_LENGTH,
            `${p.i18n["validate.length.smaller"]} ${f.ACCOUNT_MAX_LENGTH}`
          )
          .min(
            f.ACCOUNT_MIN_LENGTH,
            `${p.i18n["validate.length.larger"]} ${f.ACCOUNT_MIN_LENGTH}`
          )
          .nullable()
          .strict()),
        (t.pinSchema = m.string().test(function (e) {
          const t =
            (null == e ? void 0 : e.length) < f.PINCODE_MIN_LENGTH ||
            (null == e ? void 0 : e.length) > f.PINCODE_MAX_LENGTH;
          return e && (0, f.hasWhiteSpace)(e)
            ? this.createError({
                path: this.path,
                message: p.i18n["validate.white.space"],
              })
            : e && !(0, f.containsAlphaOrNumeric)(e)
            ? this.createError({
                path: this.path,
                message: p.i18n["validate.contains.letter.or.number"],
              })
            : !e ||
              !t ||
              this.createError({
                path: this.path,
                message: (0, g.i18nVariables)(p.i18n["validate.pinCodeDigit"], {
                  MIN: f.PINCODE_MIN_LENGTH,
                  MAX: f.PINCODE_MAX_LENGTH,
                }),
              });
        })),
        (t.repeatPasswordSchema = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : "password",
            t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : p.i18n["validate.confirmpassword"];
          return m.mixed().when(e, (e, a) =>
            a.test({
              message: t,
              test: (t) => t && t === e,
            })
          );
        }),
        (t.getFirstnameSchema = (e) => {
          let { required: t, firstNameSetting: a = (0, n.Map)() } = e;
          return m.mixed().test(function (e) {
            const i = f.chineseLocale.includes(p.currLocale)
                ? "zh-CN"
                : p.currLocale,
              r = ["th-TH", "vi-VN", "en-US"].includes(p.currLocale),
              n = ["zh-CN", "en-US", "th-TH", "vi-VN", "ja-JP"].includes(i)
                ? i
                : "other",
              s = ["zh-CN", "vi-VN"].includes(i) ? i : "other",
              l = a.getIn(["spacerule", s]),
              c = a.getIn(["caserule", n]),
              m = e || "";
            if (t && !m)
              return this.createError({
                path: this.path,
                message: p.i18n["validate.empty"],
              });
            if ((0, f.containsNumber)(m))
              return this.createError({
                path: this.path,
                message: p.i18n.notcontainsnumber,
              });
            if ((0, f.containsSymbol)(m))
              return this.createError({
                path: this.path,
                message: p.i18n.notcontainssymbol,
              });
            if (m.length > 50 && !(0, h.default)(m))
              return this.createError({
                path: this.path,
                message: (0, g.i18nVariables)(
                  p.i18n["validate.num.less.than.or.equal.to"],
                  {
                    max: 50,
                  }
                ),
              });
            if ("SPACE_IN_NAME_FORBIDDEN" === l && (0, f.hasWhiteSpace)(m))
              return this.createError({
                path: this.path,
                message: p.i18n["validate.white.space"],
              });
            if ("VN_NAME_RULE" === l && !(0, h.default)(m)) {
              const e = m.split(" ");
              if (!(e.length > 1 && e[0].length >= 1 && e[0].length <= 7))
                return this.createError({
                  path: this.path,
                  message: p.i18n["validate.vietnam.realname"],
                });
            }
            return /\s{2,}/.test(m)
              ? this.createError({
                  path: this.path,
                  message: p.i18n["validate.consecutive.white.spaces"],
                })
              : /^\s/.test(m) || /\s$/.test(m)
              ? this.createError({
                  path: this.path,
                  message: p.i18n["validate.start.end.white.spaces"],
                })
              : /\u3000/.test(m) || /\t/.test(m)
              ? this.createError({
                  path: this.path,
                  message: p.i18n["validate.fullWidth.white.spaces"],
                })
              : r && !f.charactersOnlyForNonZh.test(m)
              ? this.createError({
                  path: this.path,
                  message: p.i18n["validate.invalid.character"],
                })
              : "LOWER_CASE" !== c || /^[a-z\s]*$/.test(m)
              ? !("UPPER_CASE" === c && !/^[A-Z\s]*$/.test(m)) ||
                this.createError({
                  path: this.path,
                  message: p.i18n["validate.invalid.case.uppercase"],
                })
              : this.createError({
                  path: this.path,
                  message: p.i18n["validate.invalid.case.lowercase"],
                });
          });
        }),
        (t.emailSchema = m
          .string()
          .test(function (e) {
            return (
              !e ||
              (0, l.default)(e) ||
              this.createError({
                path: this.path,
                message: p.i18n["validate.email"],
              })
            );
          })
          .lowercase(p.i18n["validate.notcontainscapital"])
          .strict()
          .max(
            f.EMAIL_MAX_LENGTH,
            `${p.i18n["validate.length.smaller"]} ${f.EMAIL_MAX_LENGTH}`
          )
          .nullable());
      const A = function () {
        let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
        return m.number().nullable().nullString().default(e);
      };
      (t.startTimeSchema = A),
        (t.startTimeWithLowerLimitSchema = (e) => {
          let {
            value: t = null,
            lowerLimitDays: a = 31,
            endtimeKey: i = "endtime",
          } = e;
          return A(t).test(function (e) {
            return (
              !(e < (0, d.daysBeforeSomeDay)(this.parent[i], a)) ||
              this.createError({
                path: this.path,
                message: (0, g.i18nVariables)(
                  p.i18n["validate.date.not.over.limit"],
                  {
                    DAYS: a,
                  }
                ),
              })
            );
          });
        }),
        (t.endTimeSchema = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : null,
            t = arguments.length > 1 ? arguments[1] : void 0;
          return m
            .number()
            .nullable()
            .nullString()
            .min(t, p.i18n["validate.invalid.date"])
            .default(e);
        }),
        (t.stringNumberSchema = function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const { decimalPlaces: t = 2 } = e;
          function a(t, a) {
            const i = e[a];
            switch (typeof i) {
              case "string": {
                const e = this.parent[i];
                if ("" !== e && !isNaN(e))
                  return {
                    value: e,
                    isValid: t[a](e),
                  };
                break;
              }
              case "number":
                if (!isNaN(i))
                  return {
                    value: i,
                    isValid: t[a](i),
                  };
            }
            return {
              isValid: !0,
            };
          }
          return m
            .string()
            .required()
            .test(function (i) {
              if (isNaN(i))
                return this.createError({
                  path: this.path,
                  message: p.i18n["validate.isNumeric"],
                });
              if ((0, f.hasWhiteSpace)(i))
                return this.createError({
                  path: this.path,
                  message: p.i18n["validate.white.space"],
                });
              const n = new r.default(i),
                s = null == i ? void 0 : i.toString().includes(".");
              return 0 !== t || (n.isInteger() && !s)
                ? t > 0 && n.decimalPlaces() > t
                  ? this.createError({
                      path: this.path,
                      message: (0, g.i18nVariables)(
                        p.i18n["validate.decimal.places2"],
                        {
                          NUMBER: t,
                        }
                      ),
                    })
                  : (a.call(this, n, "lessThanOrEqualTo").isValid &&
                      !!a.call(this, n, "greaterThanOrEqualTo").isValid) ||
                    this.createError({
                      path: this.path,
                      message: (0, g.i18nVariables)(
                        p.i18n["validate.withdraw.amount.minmax"],
                        {
                          MINAMOUNT: (0, u.formatMoney)(e.greaterThanOrEqualTo),
                          MAXAMOUNT: (0, u.formatMoney)(e.lessThanOrEqualTo),
                        }
                      ),
                    })
                : this.createError({
                    path: this.path,
                    message: p.i18n["validate.integer.amount"],
                  });
            });
        }),
        (t.getDigitNumberSchema = (e) =>
          m.string().test(
            "digitNumber",
            (0, g.i18nVariables)(p.i18n["validate.number.limit"], {
              num: e,
            }),
            (t) => {
              if (!t) return !0;
              if (t.length !== e) return !1;
              const a = Number(t);
              return !Number.isNaN(a) && Number.isInteger(a) && a >= 0;
            }
          )),
        (t.bankaccountSchema = m.string().test(function (e) {
          return (
            new RegExp(S.source).test(e) ||
            !((e.length > 0 && e.length < 4) || e.length > 50) ||
            this.createError({
              path: this.path,
              message: p.i18n["validate.bank.account"],
            })
          );
        })),
        (t.getBankAccountSettingSchema = (e) =>
          m
            .string()
            .default("")
            .test(function (t) {
              const a = e.allowsymbol,
                i = e.alphabet,
                r = e.numeric,
                n = e.email,
                h = e.maxlength,
                m = e.minlength,
                o = e.required,
                u = n ? p.i18n["validate.bankacouunt.email"] : "",
                d = (0, f.isValidLength)(t, m, h),
                v = d && (0, c.default)(t),
                S = d && (0, s.default)(t),
                E = d && ((0, c.default)(t) || (0, l.default)(t)),
                b = d && ((0, s.default)(t) || (0, f.isUPI)(t));
              return o && !t
                ? this.createError({
                    path: this.path,
                    message: p.i18n["validate.empty"],
                  })
                : a
                ? b ||
                  this.createError({
                    path: this.path,
                    message: (0, g.i18nVariables)(
                      `${p.i18n["validate.alphanumeric.bankaccount"]}, ${p.i18n["validate.white.space"]}`,
                      {
                        min: m,
                        max: h,
                        emailtip: u,
                      }
                    ),
                  })
                : n
                ? E ||
                  this.createError({
                    path: this.path,
                    message: (0, g.i18nVariables)(
                      `${p.i18n["validate.bankaccount"]}, ${p.i18n["validate.white.space"]}`,
                      {
                        min: m,
                        max: h,
                        emailtip: u,
                      }
                    ),
                  })
                : i
                ? S ||
                  this.createError({
                    path: this.path,
                    message: (0, g.i18nVariables)(
                      `${p.i18n["validate.alphanumeric.bankaccount"]}, ${p.i18n["validate.white.space"]}`,
                      {
                        min: m,
                        max: h,
                        emailtip: u,
                      }
                    ),
                  })
                : !r ||
                  v ||
                  this.createError({
                    path: this.path,
                    message: (0, g.i18nVariables)(
                      `${p.i18n["validate.bankaccount"]}, ${p.i18n["validate.white.space"]}`,
                      {
                        min: m,
                        max: h,
                        emailtip: u,
                      }
                    ),
                  });
            })),
        (t.verificationCodeSchema = b.required().test(function (e) {
          return isNaN(e)
            ? this.createError({
                path: this.path,
                message: p.i18n["validate.isNumeric"],
              })
            : !(0, f.hasWhiteSpace)(e) ||
                this.createError({
                  path: this.path,
                  message: p.i18n["validate.white.space"],
                });
        }));
    },
  },
]);
