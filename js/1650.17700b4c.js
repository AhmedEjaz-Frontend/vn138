/*! For license information please see 1650.17700b4c.js.LICENSE.txt */
"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1650],
  {
    1650: (a, t, e) => {
      var i = e(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PASSWORD_MIN_LENGTH =
          t.PASSWORD_MAX_LENGTH =
          t.OTP_MSG_LENGTH =
          t.MOBILE_MIN_LENGTH =
          t.MOBILE_MAX_LENGTH =
          t.EMAIL_MAX_LENGTH =
          t.DEPOSIT_USERNAME_MAX_LENGHT =
          t.BANK_ACTIVATIONID_MIN_LENGTH =
          t.BANK_ACTIVATIONID_MAX_LENGTH =
          t.BANK_ACCOUNT_MIN_LENGTH =
          t.BANK_ACCOUNT_MAX_LENGTH =
          t.ACCOUNT_MIN_LENGTH =
          t.ACCOUNT_MAX_LENGTH =
            void 0),
        Object.defineProperty(t, "PINCODE_MAX_LENGTH", {
          enumerable: !0,
          get: function () {
            return f.PINCODE_MAX_LENGTH;
          },
        }),
        (t.wechatValidator =
          t.validTimePeriod =
          t.validStartTimeLimit =
          t.validHistoryMax30DiffEndTime =
          t.validHistoryMax15DiffEndTime =
          t.validHistoryFutureEndTime =
          t.onlyChinahoneNumber =
          t.noopValidator =
          t.joinValidators =
          t.isValidLength =
          t.isUPI =
          t.isAlphabet =
          t.hasWhiteSpace =
          t.hasSpecialCharacter =
          t.hasNumberSequence =
          t.hasIdenticalNumberConsecutively =
          t.getQQWechatValidator =
          t.getQQWechatAndDiffValidator =
          t.getPlayeridValidator =
          t.getPhoneValidator =
          t.getPhoneAndLengthValidator =
          t.getPhoneAndDiffValidator =
          t.getPasswordValidator =
          t.getPasswordLevelValidator =
          t.getBankActivationIdValidator =
          t.getBankAccountValidator =
          t.firstnameValidator =
          t.containsSymbol =
          t.containsNumber =
          t.containsLowercase =
          t.containsCapital =
          t.containsAlphanumeric =
          t.containsAlphaOrNumeric =
          t.containsAlpha =
          t.chineseLocale =
          t.checkUploadImgFileSize =
          t.checkSupportUploadFile =
          t.checkPinValidator =
          t.checkNumSpaces =
          t.checkLengthValidator =
          t.checkImgFileRequiredAndTypes =
          t.checkEmptyValidator =
          t.checkEmptyByIsRequired =
          t.checkEmptyAndPinValidator =
          t.checkEmptyAndNumberValidator =
          t.checkEmailValidator =
          t.checkEmailEmptyAndLengthValidator =
          t.checkEmailAndLengthValidator =
          t.charactersOnlyForNonZh =
          t.alphanumericCharactersValidator =
          t.QQWECHAT_MAX_LENGTH =
          t.PINCODE_MIN_LENGTH =
            void 0);
      var l = i(e(2056)),
        n = i(e(69517)),
        d = i(e(66529)),
        r = i(e(98986)),
        o = i(e(21666)),
        s = i(e(95093)),
        u = e(29979),
        c = e(93185),
        h = i(e(10844)),
        f = e(83597),
        p = e(9404);
      (t.ACCOUNT_MIN_LENGTH = "5"), (t.ACCOUNT_MAX_LENGTH = "20");
      const v = (t.PASSWORD_MIN_LENGTH = "8"),
        m = (t.PASSWORD_MAX_LENGTH = "20"),
        y = (t.MOBILE_MIN_LENGTH = "8"),
        g = (t.MOBILE_MAX_LENGTH = "12"),
        A = (t.PINCODE_MIN_LENGTH = "6"),
        N =
          ((t.BANK_ACCOUNT_MIN_LENGTH =
            h.default.getIn([
              "Playerpayments",
              "input",
              "bankaccount",
              "min",
            ]) || "6"),
          (t.BANK_ACCOUNT_MAX_LENGTH =
            h.default.getIn([
              "Playerpayments",
              "input",
              "bankaccount",
              "max",
            ]) || "22"),
          (t.QQWECHAT_MAX_LENGTH = "50")),
        E =
          ((t.DEPOSIT_USERNAME_MAX_LENGHT = "31"),
          (t.BANK_ACTIVATIONID_MIN_LENGTH =
            h.default.getIn([
              "Playerpayments",
              "input",
              "activationid",
              "min",
            ]) || 11),
          (t.BANK_ACTIVATIONID_MAX_LENGTH =
            h.default.getIn([
              "Playerpayments",
              "input",
              "activationid",
              "max",
            ]) || 20),
          (t.EMAIL_MAX_LENGTH = "100")),
        O = ((t.OTP_MSG_LENGTH = 6), (t.chineseLocale = ["zh-CN", "zh-TW"])),
        _ = (t.charactersOnlyForNonZh =
          /^[กขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮะาฦ ิ ี	ึ ื ุ ูเแโ ั ็ ำใไฤ ่	้	๊	๋ ์aAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ\s]*$/),
        T = (a) => null !== a.match(/\d+/g);
      t.containsNumber = T;
      const b = (a) => null !== a.match(/(?=.*[A-Z])/g);
      t.containsCapital = b;
      const M = (a) => null !== a.match(/(?=.*[a-zA-Z]+)(?=.*\d+)/g);
      t.containsAlphanumeric = M;
      const V = (a) => /[a-zA-Z0-9]/g.test(a);
      (t.containsAlphaOrNumeric = V),
        (t.containsAlpha = (a) => null !== a.match(/(?=.*[a-zA-Z])/g)),
        (t.containsLowercase = (a) => null !== a.match(/(?=.*[a-z])/g));
      const D = function (a, t, e) {
        return !(
          !(arguments.length > 3 && void 0 !== arguments[3] && arguments[3]) &&
          ((null !== t && a.length < t) || (null !== e && a.length > e))
        );
      };
      t.isValidLength = D;
      const L = (a) => a.indexOf(" ") >= 0;
      t.hasWhiteSpace = L;
      const I = (a) => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(a);
      t.hasSpecialCharacter = I;
      const k = (a) => {
        if (a.indexOf("@") !== a.lastIndexOf("@")) return !1;
        if (a.includes(" ")) return !1;
        if (a.includes("@")) {
          const t = a.split("@"),
            e = t[0],
            i = t[1],
            l = /^(\w||\w.\w)+$/g.test(e),
            n = /^(\w)+$/g.test(i);
          return l && n;
        }
        return !1;
      };
      t.isUPI = k;
      const C = (a) => {
        let t = !1,
          e = 0;
        const i = a.match(/(\d+)/g);
        return (
          null !== i &&
          (i.forEach((a) => {
            let i;
            for (let l of a) {
              const a = parseInt(l, 10);
              if (
                (void 0 === i
                  ? (i = a)
                  : 1 === Math.abs(a - i)
                  ? ((i = a), e++)
                  : ((i = a), (e = 0)),
                2 === e)
              )
                return (t = !0), t;
            }
          }),
          t)
        );
      };
      t.hasNumberSequence = C;
      const S = (a) => null === a.match(/(\d)\1\1+/g);
      (t.hasIdenticalNumberConsecutively = S),
        (t.checkEmptyAndPinValidator = (a) => ({
          validator: [
            (a) => !(0, l.default)(a),
            (a) => !L(a),
            (a) => V(a),
            (a) => a.length >= A && a.length <= f.PINCODE_MAX_LENGTH,
          ],
          tip: [
            a["validate.empty"],
            a["validate.white.space"],
            a["validate.contains.letter.or.number"],
            (0, c.i18nVariables)(a["validate.pinCodeDigit"], {
              MIN: A,
              MAX: f.PINCODE_MAX_LENGTH,
            }),
          ],
        })),
        (t.checkPinValidator = (a) => ({
          validator: [
            (a) => !L(a),
            (a) => V(a),
            (a) => !a || (a.length >= A && a.length <= f.PINCODE_MAX_LENGTH),
          ],
          tip: [
            a["validate.white.space"],
            a["validate.contains.letter.or.number"],
            (0, c.i18nVariables)(a["validate.pinCodeDigit"], {
              MIN: A,
              MAX: f.PINCODE_MAX_LENGTH,
            }),
          ],
        })),
        (t.getPasswordValidator = (a) => ({
          validator: [
            (a) => !(0, l.default)(a),
            (a) => M(a),
            (a) => T(a),
            (a) => !(a.length < v),
            (a) => !(a.length > m),
          ],
          tip: [
            a["validate.empty"],
            a["validate.isAlphanumeric"],
            a["validate.containsnumber"],
            `${a["validate.length.larger"]} ${v}`,
            `${a["validate.length.smaller"]} ${m}`,
          ],
        })),
        (t.getPlayeridValidator = (a, t) => {
          let { alphabet: e, maxlength: i, minlength: n, numeric: s } = a;
          const u = {
            validator: [
              (a) => !(0, l.default)(a),
              (a) => !(a.length < n),
              (a) => !(a.length > i),
            ],
            tip: [
              t["validate.empty"],
              `${t["validate.length.larger"]} ${n}`,
              `${t["validate.length.smaller"]} ${i}`,
            ],
          };
          return (
            e && s
              ? (u.validator.push((a) => (0, r.default)(a)),
                u.tip.push(t["validate.isAlphanumeric"]))
              : e
              ? (u.validator.push((a) => (0, d.default)(a)),
                u.tip.push(t["validate.isAlpha"]))
              : (u.validator.push((a) => (0, o.default)(a)),
                u.tip.push(t["validate.isNumeric"])),
            u
          );
        }),
        (t.getPasswordLevelValidator = (a, t, e) => {
          const i = {
            validator: [
              (a) => !(a.length < v),
              (a) => !(a.length > m),
              (a) => !L(a),
            ],
            tip: [
              (0, c.i18nVariables)(a["validate.num.greater.than.or.equal.to"], {
                min: v,
              }),
              (0, c.i18nVariables)(a["validate.num.less.than.or.equal.to"], {
                max: m,
              }),
              a["validate.white.space"],
            ],
          };
          return (
            t >= 1 &&
              (i.validator.push((a) => !(a === e)),
              i.tip.push(a["validate.password.playerid.not.same"]),
              i.validator.push((a) => M(a)),
              i.tip.push(a["validate.contain.alphanumeric"])),
            t >= 2 &&
              (i.validator.push((a) => b(a)),
              i.tip.push(a["validate.containscapital"])),
            t >= 3 &&
              (i.validator.push((a) => I(a)),
              i.tip.push(a["validate.special.character.contain"])),
            t >= 4 &&
              (i.validator.push((a) => !C(a)),
              i.tip.push(a["validate.not.consecutive.number"]),
              i.validator.push((a) => S(a)),
              i.tip.push(a["validate.not.consecutive.number"])),
            i
          );
        }),
        (t.getBankAccountValidator = function (a, t) {
          let e =
            !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
          const i = t.get("alphabet"),
            d = t.get("email"),
            s = t.get("allowsymbol"),
            u = t.get("maxlength"),
            h = t.get("minlength"),
            f = d ? a["validate.bankacouunt.email"] : "";
          return s
            ? {
                validator: [
                  (a) => e || !(0, l.default)(a),
                  (a) => D(a, h, u) && ((0, r.default)(a) || k(a)),
                ],
                tip: [
                  a["validate.empty"],
                  (0, c.i18nVariables)(
                    `${a["validate.alphanumeric.bankaccount"]}, ${a["validate.white.space"]}`,
                    {
                      min: h,
                      max: u,
                      emailtip: f,
                    }
                  ),
                ],
              }
            : i
            ? {
                validator: [
                  (a) => e || !(0, l.default)(a),
                  (a) => D(a, h, u) && (0, r.default)(a),
                ],
                tip: [
                  a["validate.empty"],
                  (0, c.i18nVariables)(
                    `${a["validate.alphanumeric.bankaccount"]}, ${a["validate.white.space"]}`,
                    {
                      min: h,
                      max: u,
                      emailtip: f,
                    }
                  ),
                ],
              }
            : d
            ? {
                validator: [
                  (a) => e || !(0, l.default)(a),
                  (a) => D(a, h, u) && ((0, o.default)(a) || (0, n.default)(a)),
                ],
                tip: [
                  a["validate.empty"],
                  (0, c.i18nVariables)(
                    `${a["validate.bankaccount"]}, ${a["validate.white.space"]}`,
                    {
                      min: h,
                      max: u,
                      emailtip: f,
                    }
                  ),
                ],
              }
            : {
                validator: [
                  (a) => e || !(0, l.default)(a),
                  (a) => D(a, h, u) && (0, o.default)(a),
                ],
                tip: [
                  a["validate.empty"],
                  (0, c.i18nVariables)(
                    `${a["validate.bankaccount"]}, ${a["validate.white.space"]}`,
                    {
                      min: h,
                      max: u,
                      emailtip: f,
                    }
                  ),
                ],
              };
        }),
        (t.getBankActivationIdValidator = (a, t, e) => {
          const i = t.get("maxlength"),
            n = t.get("minlength");
          return {
            validator: [
              (a) => (!e && (0, l.default)(a)) || (0, r.default)(a),
              (a) => (0, l.default)(a) || D(a, n, i),
            ],
            tip: [
              a["validate.isAlphanumeric"],
              (0, c.i18nVariables)(a["validate.length.limit"], {
                min: n,
                max: i,
              }),
            ],
          };
        }),
        (t.alphanumericCharactersValidator = function (a) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 1,
            e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 75,
            i =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3],
            n = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
          return {
            validator: [
              (a) => n || !(0, l.default)(a),
              (a) => D(a, t, e, n),
              (a) => !i || !L(a),
              (a) => !I(a),
            ],
            tip: [
              a["validate.empty"],
              (0, c.i18nVariables)(a["validate.length.limit"], {
                min: t,
                max: e,
              }),
              a["validate.white.space"],
              a["validate.special.character"],
            ],
          };
        }),
        (t.getPhoneValidator = function (a) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            validator: [(a) => t || !!a.split(" ")[1]],
            tip: [a["validate.empty"]],
          };
        }),
        (t.getPhoneAndLengthValidator = (a) => ({
          validator: [(a) => !!a.split(" ")[1]],
          tip: [a["validate.empty"]],
        })),
        (t.onlyChinahoneNumber = function (a) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : (a) => {};
          return {
            validator: [
              (a) => {
                if (!a) return t(!0), !0;
                const [e] = a.split(" ");
                return "86" === e ? (t(!0), !0) : (t(!1), !1);
              },
            ],
            tip: [`${a["forgetusername.mobile.chinaonly"]}`],
          };
        }),
        (t.getPhoneAndDiffValidator = (a, t) => ({
          validator: [
            (a) => !!a.split(" ")[1],
            (a) => a !== t,
            (a) => !(a.length < y),
            (a) => !(a.length > g),
          ],
          tip: [
            a["validate.telphone.can.not.empty"],
            a["valitate.can.not.the.same"],
            `${a["validate.length.larger"]} ${y}`,
            `${a["validate.length.smaller"]} ${g}`,
          ],
        })),
        (t.getQQWechatValidator = (a) => ({
          validator: [
            (a) => (0, l.default)(a) || ((0, r.default)(a) && a.length <= N),
          ],
          tip: [
            (0, c.i18nVariables)(
              a["validate.alpha.num.less.than.or.equal.to"],
              {
                MAX: N,
              }
            ),
          ],
        })),
        (t.getQQWechatAndDiffValidator = (a, t) => ({
          validator: [
            (a) => (0, l.default)(a) || ((0, r.default)(a) && a.length <= N),
            (a) => a !== t,
          ],
          tip: [
            (0, c.i18nVariables)(
              a["validate.alpha.num.less.than.or.equal.to"],
              {
                MAX: N,
              }
            ),
            a["valitate.can.not.the.same"],
          ],
        })),
        (t.checkEmailValidator = (a, t) => ({
          validator: [
            (a) => t || !(0, l.default)(a),
            (a) => !a || (0, n.default)(a),
            (a) => !a || !b(a),
          ],
          tip: [
            a["validate.empty"],
            a["validate.email"],
            a["validate.notcontainscapital"],
          ],
        })),
        (t.checkEmailAndLengthValidator = (a) => ({
          validator: [
            (a) => !a || (0, n.default)(a),
            (a) => D(a, 0, E),
            (a) => !a || !b(a),
          ],
          tip: [
            a["validate.email"],
            `${a["validate.length.smaller"]} ${E}`,
            a["validate.notcontainscapital"],
          ],
        })),
        (t.checkEmailEmptyAndLengthValidator = (a) => ({
          validator: [
            (a) => !(0, l.default)(a),
            (a) => !a || (0, n.default)(a),
            (a) => D(a, 0, E),
          ],
          tip: [
            a["validate.empty"],
            a["validate.email"],
            `${a["validate.length.smaller"]} ${E}`,
          ],
        })),
        (t.checkEmptyValidator = (a) => ({
          validator: (a) => !(0, l.default)(a),
          tip: a["validate.empty"],
        })),
        (t.checkEmptyByIsRequired = (a, t) => ({
          validator: [(a) => !t || !(0, l.default)(a)],
          tip: [a["validate.empty"]],
        })),
        (t.checkEmptyAndNumberValidator = (a) => ({
          validator: [(a) => !(0, l.default)(a), (a) => (0, o.default)(a)],
          tip: [a["validate.empty"], a["validate.integer.amount"]],
        })),
        (t.validStartTimeLimit = function (a) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 31;
          return !(
            null === a || !(0, s.default)(a).isAfter((0, u.daysBefore)(t))
          );
        }),
        (t.validTimePeriod = (a, t) =>
          null !== a &&
          null !== t &&
          (0, s.default)(a).valueOf() <
            (0, u.endOfDay)((0, s.default)(t)).valueOf()),
        (t.validHistoryFutureEndTime = (a) => {
          const t = (0, u.endOfToday)().valueOf();
          return (0, s.default)(a).valueOf() <= t;
        }),
        (t.validHistoryMax15DiffEndTime = (a, t) => {
          const e = (0, u.daysEndAfterSomeDay)(t, 14).valueOf(),
            i = (0, u.endOfToday)().valueOf(),
            l = e < i ? e : i;
          return (0, s.default)(a).valueOf() <= l;
        }),
        (t.validHistoryMax30DiffEndTime = (a, t) => {
          const e = (0, u.daysEndAfterSomeDay)(t, 30).valueOf(),
            i = (0, u.endOfToday)().valueOf(),
            l = e < i ? e : i;
          return (0, s.default)(a).valueOf() <= l;
        });
      const P = (a) =>
        null !==
        a.match(
          /[\(\)`~!@#$%^&*\-+=|{}\[\]:;"<>,.?\/_'\\]|[\uD800-\uDBFF][\uDC00-\uDFFF]/g
        );
      (t.containsSymbol = P),
        (t.wechatValidator = (a, t) => {
          const e = /^[a-zA-Z]+[\w\-]{5,19}$/;
          return {
            validator: [(a) => (0, l.default)(a) || e.test(a)],
            tip: [a["validate.wechat"]],
          };
        }),
        (t.noopValidator = () => ({
          validator: [() => !0],
          tip: [""],
        }));
      const H = (0, p.Set)(["jpg", "jpeg", "png", "gif", "bmp"]);
      (t.checkUploadImgFileSize = (a) => {
        let {
          i18n: t,
          limitSize: e = 1024,
          allowEmpty: i = !0,
          tipSize: l = `${e}KB`,
          fileTypes: n = H,
        } = a;
        return {
          validator: [
            (a) => i || null !== a,
            (a) => !a || a.size < 1e3 * e,
            (a) => !a || n.has(a.type.replace("image/", "").toLowerCase()),
          ],
          tip: [
            t["validate.empty"],
            `${t["image.file.exceed"]}(>${l})`,
            t["file.invalid.type"],
          ],
        };
      }),
        (t.checkLengthValidator = function (a) {
          let t =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : 0,
            e = arguments.length > 2 ? arguments[2] : void 0,
            i =
              !(arguments.length > 3 && void 0 !== arguments[3]) ||
              arguments[3];
          return {
            validator: [
              (a) => i || !(0, l.default)(a),
              (a) => {
                const n = a.length >= t && a.length <= e;
                return (i && !!(0, l.default)(a)) || n;
              },
            ],
            tip: [
              a["validate.empty"],
              (0, c.i18nVariables)(a["validate.check.length.limit"], {
                MIN: t,
                MAX: e,
              }),
            ],
          };
        }),
        (t.checkNumSpaces = (a, t) => ({
          validator: [(a) => a.split(" ").length - 1 <= t],
          tip: [
            t > 0
              ? (0, c.i18nVariables)(a["validate.multi.white.spaces"], {
                  maxSpaces: t,
                })
              : a["validate.white.space"],
          ],
        })),
        (t.checkSupportUploadFile = function (a, t) {
          let e =
              arguments.length > 2 && void 0 !== arguments[2]
                ? arguments[2]
                : 1e6,
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : H;
          const l = Math.floor(e / 1e6),
            n = [
              (a) => !a || e > a.size,
              (a) => !a || i.has(a.type.replace("image/", "").toLowerCase()),
            ],
            d = [
              (0, c.i18nVariables)(a["file.invalid.uploadsize"], {
                fileSize: l,
              }),
              a["file.invalid.type"],
            ];
          return (
            t && (n.unshift((a) => !!a), d.unshift(a["validate.empty"])),
            {
              validator: n,
              tip: d,
            }
          );
        }),
        (t.checkImgFileRequiredAndTypes = function (a, t) {
          let e =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : H;
          const i = [
              (a) => !a || e.has(a.type.replace("image/", "").toLowerCase()),
            ],
            l = [a["file.invalid.type"]];
          return (
            t && (i.unshift((a) => !!a), l.unshift(a["validate.empty"])),
            {
              validator: i,
              tip: l,
            }
          );
        }),
        (t.isAlphabet = (a) => ({
          validator: [d.default],
          tip: [a["validate.isAlpha"]],
        })),
        (t.joinValidators = function () {
          const a = {
            validator: [],
            tip: [],
          };
          for (var t = arguments.length, e = new Array(t), i = 0; i < t; i++)
            e[i] = arguments[i];
          for (const { validator: t, tip: i } of e)
            Array.isArray(t) &&
              t.length > 0 &&
              (a.validator = a.validator.concat(t)),
              Array.isArray(i) && i.length > 0 && (a.tip = a.tip.concat(i));
          return a;
        }),
        (t.firstnameValidator = function (a, t) {
          let e =
              !(arguments.length > 2 && void 0 !== arguments[2]) ||
              arguments[2],
            i =
              arguments.length > 3 && void 0 !== arguments[3]
                ? arguments[3]
                : (0, p.Map)();
          const n = O.includes(t) ? "zh-CN" : t,
            d = ["th-TH", "vi-VN", "en-US"].includes(t),
            r = ["zh-CN", "en-US", "th-TH", "vi-VN", "ja-JP"].includes(n)
              ? n
              : "other",
            o = ["zh-CN", "vi-VN"].includes(n) ? n : "other",
            s = i.getIn(["spacerule", o]),
            u = i.getIn(["caserule", r]);
          return {
            validator: [
              (a) => e || !(0, l.default)(a),
              (a) => !T(a),
              (a) => !P(a),
              (a) => !!(0, l.default)(a) || a.length <= 50,
              (a) => "SPACE_IN_NAME_FORBIDDEN" !== s || !L(a),
              (a) => {
                if ("VN_NAME_RULE" === s && !(0, l.default)(a)) {
                  const t = a.split(" ");
                  return t.length > 1 && t[0].length >= 1 && t[0].length <= 7;
                }
                return !0;
              },
              (a) => !/\s{2,}/.test(a),
              (a) => !(/^\s/.test(a) || /\s$/.test(a)),
              (a) => !(/\u3000/.test(a) || /\t/.test(a)),
              (a) => !d || _.test(a),
              (a) => "LOWER_CASE" !== u || /^[a-z\s]*$/.test(a),
              (a) => "UPPER_CASE" !== u || /^[A-Z\s]*$/.test(a),
            ],
            tip: [
              a["validate.empty"],
              a.notcontainsnumber,
              a.notcontainssymbol,
              (0, c.i18nVariables)(a["validate.num.less.than.or.equal.to"], {
                max: 50,
              }),
              a["validate.white.space"],
              a["validate.vietnam.realname"],
              a["validate.consecutive.white.spaces"],
              a["validate.start.end.white.spaces"],
              a["validate.fullWidth.white.spaces"],
              a["validate.invalid.character"],
              a["validate.invalid.case.lowercase"],
              a["validate.invalid.case.uppercase"],
            ],
          };
        });
    },
    10844: (a, t, e) => {
      var i = e(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var l = i(e(94188));
      const n = i(e(9404)).default.fromJS(l.default);
      t.default = n;
    },
    29979: (a, t, e) => {
      var i = e(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.yearsBefore =
          t.todayBeforeDays =
          t.thisWeekStartOfDay =
          t.thisWeekEndOfDay =
          t.thisMonthStartOfDay =
          t.thisMonthEndOfDay =
          t.startOfToday =
          t.startOfDay =
          t.lastWeekStartOfDay =
          t.lastWeekEndOfDay =
          t.lastMonthStartOfDay =
          t.lastMonthEndOfDay =
          t.isToday =
          t.get1stDayOfYear =
          t.endOfToday =
          t.endOfDay =
          t.disableNotEndOfToday =
          t.disableNDays =
          t.disableBirthdayDate =
          t.disable7Days =
          t.daysEndBefore =
          t.daysEndAfterSomeDay =
          t.daysBeforeSomeDay =
          t.daysBefore =
          t.daysAfter =
          t.adultAge =
            void 0);
      var l = i(e(95093));
      const n = e(51628).currLocale.toLowerCase().replace(/-us/i, "");
      try {
        l.default.locale(n);
      } catch (a) {
        l.default.locale("zh-cn");
      }
      const d = (t.adultAge = 18);
      (t.isToday = (a) => (0, l.default)(a).isSame((0, l.default)(), "d")),
        (t.startOfDay = (a) => (0, l.default)(a).startOf("day")),
        (t.endOfDay = (a) => (0, l.default)(a).endOf("day")),
        (t.startOfToday = () => (0, l.default)().startOf("day"));
      const r = () => (0, l.default)().endOf("day");
      t.endOfToday = r;
      const o = function () {
        let a =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 14;
        return (0, l.default)().subtract(a, "days").startOf("day");
      };
      (t.daysBefore = o),
        (t.daysEndBefore = function () {
          let a =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 14;
          return (0, l.default)().subtract(a, "days").endOf("day");
        }),
        (t.thisWeekStartOfDay = () => (0, l.default)().startOf("isoWeek")),
        (t.thisWeekEndOfDay = () => (0, l.default)().endOf("isoWeek")),
        (t.lastWeekStartOfDay = () =>
          (0, l.default)().subtract(1, "weeks").startOf("isoWeek")),
        (t.lastWeekEndOfDay = () =>
          (0, l.default)().subtract(1, "weeks").endOf("isoWeek")),
        (t.thisMonthStartOfDay = () => (0, l.default)().startOf("month")),
        (t.thisMonthEndOfDay = () => (0, l.default)().endOf("month")),
        (t.lastMonthStartOfDay = () =>
          (0, l.default)().subtract(1, "months").startOf("month")),
        (t.lastMonthEndOfDay = () =>
          (0, l.default)().subtract(1, "months").endOf("month"));
      const s = function () {
        let a =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 14;
        return (0, l.default)().add(a, "days").startOf("day");
      };
      (t.daysAfter = s),
        (t.daysBeforeSomeDay = (a, t) =>
          (0, l.default)(a).subtract(t, "days").startOf("day")),
        (t.daysEndAfterSomeDay = (a, t) =>
          (0, l.default)(a).add(t, "days").endOf("day"));
      const u = (a) => (0, l.default)().subtract(a, "years").startOf("day");
      t.yearsBefore = u;
      const c = (a) => (0, l.default)().year(a).startOf("year");
      (t.get1stDayOfYear = c),
        (t.disableBirthdayDate = (a) => {
          if (!a) return !1;
          const t = c(1900),
            e = u(d);
          return a.unix() < t.unix() || a.unix() > e.unix();
        }),
        (t.disable7Days = (a) => {
          if (!a) return !1;
          const t = a.unix(),
            e = o(7).unix(),
            i = s(1).unix();
          return t < e || t > i;
        }),
        (t.disableNDays = (a, t) => {
          if (!a) return !1;
          const e = a.unix(),
            i = o(t).unix(),
            l = r().unix();
          return e < i || e > l;
        }),
        (t.disableNotEndOfToday = (a) => !!a && a.unix() > r().unix()),
        (t.todayBeforeDays = (a) => (0, l.default)().subtract(a, "days"));
    },
  },
]);
