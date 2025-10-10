/*! For license information please see 3333.ca8d23b8.js.LICENSE.txt */
"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3333],
  {
    73333: (e, t, r) => {
      r.r(t),
        r.d(t, {
          default: () => z,
        });
      var n,
        i,
        a,
        o,
        u,
        s,
        l =
          "undefined" != typeof globalThis
            ? globalThis
            : "undefined" != typeof window
            ? window
            : void 0 !== r.g
            ? r.g
            : "undefined" != typeof self
            ? self
            : {};
      function c(e) {
        return e &&
          e.__esModule &&
          Object.prototype.hasOwnProperty.call(e, "default")
          ? e.default
          : e;
      }
      function f() {
        return i
          ? n
          : ((i = 1),
            (n = {
              languageTag: "en-US",
              delimiters: {
                thousands: ",",
                decimal: ".",
              },
              abbreviations: {
                thousand: "k",
                million: "m",
                billion: "b",
                trillion: "t",
              },
              spaceSeparated: !1,
              ordinal: function (e) {
                let t = e % 10;
                return 1 == ~~((e % 100) / 10)
                  ? "th"
                  : 1 === t
                  ? "st"
                  : 2 === t
                  ? "nd"
                  : 3 === t
                  ? "rd"
                  : "th";
              },
              bytes: {
                binarySuffixes: [
                  "B",
                  "KiB",
                  "MiB",
                  "GiB",
                  "TiB",
                  "PiB",
                  "EiB",
                  "ZiB",
                  "YiB",
                ],
                decimalSuffixes: [
                  "B",
                  "KB",
                  "MB",
                  "GB",
                  "TB",
                  "PB",
                  "EB",
                  "ZB",
                  "YB",
                ],
              },
              currency: {
                symbol: "$",
                position: "prefix",
                code: "USD",
              },
              currencyFormat: {
                thousandSeparated: !0,
                totalLength: 4,
                spaceSeparated: !0,
                spaceSeparatedCurrency: !0,
              },
              formats: {
                fourDigits: {
                  totalLength: 4,
                  spaceSeparated: !0,
                },
                fullWithTwoDecimals: {
                  output: "currency",
                  thousandSeparated: !0,
                  mantissa: 2,
                },
                fullWithTwoDecimalsNoCurrency: {
                  thousandSeparated: !0,
                  mantissa: 2,
                },
                fullWithNoDecimals: {
                  output: "currency",
                  thousandSeparated: !0,
                  mantissa: 0,
                },
              },
            }));
      }
      function p() {
        if (o) return a;
        o = 1;
        const e = [
          {
            key: "ZiB",
            factor: Math.pow(1024, 7),
          },
          {
            key: "ZB",
            factor: Math.pow(1e3, 7),
          },
          {
            key: "YiB",
            factor: Math.pow(1024, 8),
          },
          {
            key: "YB",
            factor: Math.pow(1e3, 8),
          },
          {
            key: "TiB",
            factor: Math.pow(1024, 4),
          },
          {
            key: "TB",
            factor: Math.pow(1e3, 4),
          },
          {
            key: "PiB",
            factor: Math.pow(1024, 5),
          },
          {
            key: "PB",
            factor: Math.pow(1e3, 5),
          },
          {
            key: "MiB",
            factor: Math.pow(1024, 2),
          },
          {
            key: "MB",
            factor: Math.pow(1e3, 2),
          },
          {
            key: "KiB",
            factor: Math.pow(1024, 1),
          },
          {
            key: "KB",
            factor: Math.pow(1e3, 1),
          },
          {
            key: "GiB",
            factor: Math.pow(1024, 3),
          },
          {
            key: "GB",
            factor: Math.pow(1e3, 3),
          },
          {
            key: "EiB",
            factor: Math.pow(1024, 6),
          },
          {
            key: "EB",
            factor: Math.pow(1e3, 6),
          },
          {
            key: "B",
            factor: 1,
          },
        ];
        function t(e) {
          return e.replace(/[-/\\^$*+?.()|[\]{}]/g, "\\$&");
        }
        function r(n, i, a, o, u, s, l) {
          if (!isNaN(+n)) return +n;
          let c = "",
            f = n.replace(/(^[^(]*)\((.*)\)([^)]*$)/, "$1$2$3");
          if (f !== n) return -1 * r(f, i, a, o, u, s);
          for (let t = 0; t < e.length; t++) {
            let l = e[t];
            if (((c = n.replace(RegExp(`([0-9 ])(${l.key})$`), "$1")), c !== n))
              return r(c, i, a, o, u, s) * l.factor;
          }
          if (((c = n.replace("%", "")), c !== n))
            return r(c, i, a, o, u, s) / 100;
          let p = parseFloat(n);
          if (isNaN(p)) return;
          let g = o(p);
          if (
            g &&
            "." !== g &&
            ((c = n.replace(new RegExp(`${t(g)}$`), "")), c !== n)
          )
            return r(c, i, a, o, u, s);
          let h = {};
          Object.keys(s).forEach((e) => {
            h[s[e]] = e;
          });
          let d = Object.keys(h).sort().reverse(),
            m = d.length;
          for (let e = 0; e < m; e++) {
            let t = d[e],
              l = h[t];
            if (((c = n.replace(t, "")), c !== n)) {
              let e;
              switch (l) {
                case "thousand":
                  e = Math.pow(10, 3);
                  break;
                case "million":
                  e = Math.pow(10, 6);
                  break;
                case "billion":
                  e = Math.pow(10, 9);
                  break;
                case "trillion":
                  e = Math.pow(10, 12);
              }
              return r(c, i, a, o, u, s) * e;
            }
          }
        }
        function n(e, n, i = "", a, o, u, s) {
          if ("" === e) return;
          if (e === o) return 0;
          let l = (function (e, r, n) {
            let i = e.replace(n, "");
            return (
              (i = i.replace(
                new RegExp(`([0-9])${t(r.thousands)}([0-9])`, "g"),
                "$1$2"
              )),
              (i = i.replace(r.decimal, ".")),
              i
            );
          })(e, n, i);
          return r(l, n, i, a, o, u);
        }
        return (
          (a = {
            unformat: function (e, t) {
              const r = y();
              let i,
                a = r.currentDelimiters(),
                o = r.currentCurrency().symbol,
                u = r.currentOrdinal(),
                s = r.getZeroFormat(),
                l = r.currentAbbreviations();
              if ("string" == typeof e)
                i = (function (e, t) {
                  if (!e.indexOf(":") || ":" === t.thousands) return !1;
                  let r = e.split(":");
                  if (3 !== r.length) return !1;
                  let n = +r[0],
                    i = +r[1],
                    a = +r[2];
                  return !isNaN(n) && !isNaN(i) && !isNaN(a);
                })(e, a)
                  ? (function (e) {
                      let t = e.split(":"),
                        r = +t[0],
                        n = +t[1];
                      return +t[2] + 60 * n + 3600 * r;
                    })(e)
                  : n(e, a, o, u, s, l);
              else {
                if ("number" != typeof e) return;
                i = e;
              }
              if (void 0 !== i) return i;
            },
          }),
          a
        );
      }
      function g() {
        if (s) return u;
        s = 1;
        let e = p();
        const t = /^[a-z]{2,3}(-[a-zA-Z]{4})?(-([A-Z]{2}|[0-9]{3}))?$/,
          r = {
            output: {
              type: "string",
              validValues: [
                "currency",
                "percent",
                "byte",
                "time",
                "ordinal",
                "number",
              ],
            },
            base: {
              type: "string",
              validValues: ["decimal", "binary", "general"],
              restriction: (e, t) => "byte" === t.output,
              message: "`base` must be provided only when the output is `byte`",
              mandatory: (e) => "byte" === e.output,
            },
            characteristic: {
              type: "number",
              restriction: (e) => e >= 0,
              message: "value must be positive",
            },
            prefix: "string",
            postfix: "string",
            forceAverage: {
              type: "string",
              validValues: ["trillion", "billion", "million", "thousand"],
            },
            average: "boolean",
            lowPrecision: {
              type: "boolean",
              restriction: (e, t) => !0 === t.average,
              message:
                "`lowPrecision` must be provided only when the option `average` is set",
            },
            currencyPosition: {
              type: "string",
              validValues: ["prefix", "infix", "postfix"],
            },
            currencySymbol: "string",
            totalLength: {
              type: "number",
              restrictions: [
                {
                  restriction: (e) => e >= 0,
                  message: "value must be positive",
                },
                {
                  restriction: (e, t) => !t.exponential,
                  message: "`totalLength` is incompatible with `exponential`",
                },
              ],
            },
            mantissa: {
              type: "number",
              restriction: (e) => e >= 0,
              message: "value must be positive",
            },
            optionalMantissa: "boolean",
            trimMantissa: "boolean",
            roundingFunction: "function",
            optionalCharacteristic: "boolean",
            thousandSeparated: "boolean",
            spaceSeparated: "boolean",
            spaceSeparatedCurrency: "boolean",
            spaceSeparatedAbbreviation: "boolean",
            abbreviations: {
              type: "object",
              children: {
                thousand: "string",
                million: "string",
                billion: "string",
                trillion: "string",
              },
            },
            negative: {
              type: "string",
              validValues: ["sign", "parenthesis"],
            },
            forceSign: "boolean",
            exponential: {
              type: "boolean",
            },
            prefixSymbol: {
              type: "boolean",
              restriction: (e, t) => "percent" === t.output,
              message:
                "`prefixSymbol` can be provided only when the output is `percent`",
            },
          },
          n = {
            languageTag: {
              type: "string",
              mandatory: !0,
              restriction: (e) => e.match(t),
              message:
                "the language tag must follow the BCP 47 specification (see https://tools.ieft.org/html/bcp47)",
            },
            delimiters: {
              type: "object",
              children: {
                thousands: "string",
                decimal: "string",
                thousandsSize: "number",
              },
              mandatory: !0,
            },
            abbreviations: {
              type: "object",
              children: {
                thousand: {
                  type: "string",
                  mandatory: !0,
                },
                million: {
                  type: "string",
                  mandatory: !0,
                },
                billion: {
                  type: "string",
                  mandatory: !0,
                },
                trillion: {
                  type: "string",
                  mandatory: !0,
                },
              },
              mandatory: !0,
            },
            spaceSeparated: "boolean",
            spaceSeparatedCurrency: "boolean",
            ordinal: {
              type: "function",
              mandatory: !0,
            },
            bytes: {
              type: "object",
              children: {
                binarySuffixes: "object",
                decimalSuffixes: "object",
              },
            },
            currency: {
              type: "object",
              children: {
                symbol: "string",
                position: "string",
                code: "string",
              },
              mandatory: !0,
            },
            defaults: "format",
            ordinalFormat: "format",
            byteFormat: "format",
            percentageFormat: "format",
            currencyFormat: "format",
            timeDefaults: "format",
            formats: {
              type: "object",
              children: {
                fourDigits: {
                  type: "format",
                  mandatory: !0,
                },
                fullWithTwoDecimals: {
                  type: "format",
                  mandatory: !0,
                },
                fullWithTwoDecimalsNoCurrency: {
                  type: "format",
                  mandatory: !0,
                },
                fullWithNoDecimals: {
                  type: "format",
                  mandatory: !0,
                },
              },
            },
          };
        function i(t) {
          return void 0 !== e.unformat(t);
        }
        function a(e, t, n, i = !1) {
          let o = Object.keys(e).map((i) => {
            if (!t[i]) return console.error(`${n} Invalid key: ${i}`), !1;
            let o = e[i],
              u = t[i];
            if (
              ("string" == typeof u &&
                (u = {
                  type: u,
                }),
              "format" === u.type)
            ) {
              if (!a(o, r, `[Validate ${i}]`, !0)) return !1;
            } else if (typeof o !== u.type)
              return (
                console.error(
                  `${n} ${i} type mismatched: "${
                    u.type
                  }" expected, "${typeof o}" provided`
                ),
                !1
              );
            if (u.restrictions && u.restrictions.length) {
              let t = u.restrictions.length;
              for (let r = 0; r < t; r++) {
                let { restriction: t, message: a } = u.restrictions[r];
                if (!t(o, e))
                  return console.error(`${n} ${i} invalid value: ${a}`), !1;
              }
            }
            return u.restriction && !u.restriction(o, e)
              ? (console.error(`${n} ${i} invalid value: ${u.message}`), !1)
              : u.validValues && -1 === u.validValues.indexOf(o)
              ? (console.error(
                  `${n} ${i} invalid value: must be among ${JSON.stringify(
                    u.validValues
                  )}, "${o}" provided`
                ),
                !1)
              : !(u.children && !a(o, u.children, `[Validate ${i}]`));
          });
          return (
            i ||
              o.push(
                ...Object.keys(t).map((r) => {
                  let i = t[r];
                  if (
                    ("string" == typeof i &&
                      (i = {
                        type: i,
                      }),
                    i.mandatory)
                  ) {
                    let t = i.mandatory;
                    if (
                      ("function" == typeof t && (t = t(e)),
                      t && void 0 === e[r])
                    )
                      return (
                        console.error(`${n} Missing mandatory key "${r}"`), !1
                      );
                  }
                  return !0;
                })
              ),
            o.reduce((e, t) => e && t, !0)
          );
        }
        function o(e) {
          return a(e, r, "[Validate format]");
        }
        return (
          (u = {
            validate: function (e, t) {
              let r = i(e),
                n = o(t);
              return r && n;
            },
            validateFormat: o,
            validateInput: i,
            validateLanguage: function (e) {
              return a(e, n, "[Validate language]");
            },
          }),
          u
        );
      }
      var h,
        d,
        m = {
          parseFormat: function (e, t = {}) {
            return "string" != typeof e
              ? e
              : ((function (e, t) {
                  if (-1 === e.indexOf("$")) {
                    if (-1 === e.indexOf("%"))
                      return -1 !== e.indexOf("bd")
                        ? ((t.output = "byte"), void (t.base = "general"))
                        : -1 !== e.indexOf("b")
                        ? ((t.output = "byte"), void (t.base = "binary"))
                        : -1 !== e.indexOf("d")
                        ? ((t.output = "byte"), void (t.base = "decimal"))
                        : void (-1 === e.indexOf(":")
                            ? -1 !== e.indexOf("o") && (t.output = "ordinal")
                            : (t.output = "time"));
                    t.output = "percent";
                  } else t.output = "currency";
                })(
                  (e = (function (e, t) {
                    let r = e.match(/{([^}]*)}$/);
                    return r
                      ? ((t.postfix = r[1]), e.slice(0, -r[0].length))
                      : e;
                  })(
                    (e = (function (e, t) {
                      let r = e.match(/^{([^}]*)}/);
                      return r ? ((t.prefix = r[1]), e.slice(r[0].length)) : e;
                    })(e, t)),
                    t
                  )),
                  t
                ),
                (function (e, t) {
                  let r = e.match(/[1-9]+[0-9]*/);
                  r && (t.totalLength = +r[0]);
                })(e, t),
                (function (e, t) {
                  let r = e.split(".")[0].match(/0+/);
                  r && (t.characteristic = r[0].length);
                })(e, t),
                (function (e, t) {
                  if (-1 !== e.indexOf(".")) {
                    let r = e.split(".")[0];
                    t.optionalCharacteristic = -1 === r.indexOf("0");
                  }
                })(e, t),
                (function (e, t) {
                  -1 !== e.indexOf("a") && (t.average = !0);
                })(e, t),
                (function (e, t) {
                  -1 !== e.indexOf("K")
                    ? (t.forceAverage = "thousand")
                    : -1 !== e.indexOf("M")
                    ? (t.forceAverage = "million")
                    : -1 !== e.indexOf("B")
                    ? (t.forceAverage = "billion")
                    : -1 !== e.indexOf("T") && (t.forceAverage = "trillion");
                })(e, t),
                (function (e, t) {
                  let r = e.split(".")[1];
                  if (r) {
                    let e = r.match(/0+/);
                    e && (t.mantissa = e[0].length);
                  }
                })(e, t),
                (function (e, t) {
                  e.match(/\[\.]/)
                    ? (t.optionalMantissa = !0)
                    : e.match(/\./) && (t.optionalMantissa = !1);
                })(e, t),
                (function (e, t) {
                  const r = e.split(".")[1];
                  r && (t.trimMantissa = -1 !== r.indexOf("["));
                })(e, t),
                (function (e, t) {
                  -1 !== e.indexOf(",") && (t.thousandSeparated = !0);
                })(e, t),
                (function (e, t) {
                  -1 !== e.indexOf(" ") &&
                    ((t.spaceSeparated = !0),
                    (t.spaceSeparatedCurrency = !0),
                    (t.average || t.forceAverage) &&
                      (t.spaceSeparatedAbbreviation = !0));
                })(e, t),
                (function (e, t) {
                  e.match(/^\+?\([^)]*\)$/) && (t.negative = "parenthesis"),
                    e.match(/^\+?-/) && (t.negative = "sign");
                })(e, t),
                (function (e, t) {
                  e.match(/^\+/) && (t.forceSign = !0);
                })(e, t),
                t);
          },
        };
      function y() {
        if (d) return h;
        d = 1;
        const e = f(),
          t = g(),
          r = m;
        let n,
          i = {},
          a = {},
          o = null,
          u = {};
        function s(e) {
          n = e;
        }
        function l() {
          return a[n];
        }
        return (
          (i.languages = () => Object.assign({}, a)),
          (i.currentLanguage = () => n),
          (i.currentBytes = () => l().bytes || {}),
          (i.currentCurrency = () => l().currency),
          (i.currentAbbreviations = () => l().abbreviations),
          (i.currentDelimiters = () => l().delimiters),
          (i.currentOrdinal = () => l().ordinal),
          (i.currentDefaults = () => Object.assign({}, l().defaults, u)),
          (i.currentOrdinalDefaultFormat = () =>
            Object.assign({}, i.currentDefaults(), l().ordinalFormat)),
          (i.currentByteDefaultFormat = () =>
            Object.assign({}, i.currentDefaults(), l().byteFormat)),
          (i.currentPercentageDefaultFormat = () =>
            Object.assign({}, i.currentDefaults(), l().percentageFormat)),
          (i.currentCurrencyDefaultFormat = () =>
            Object.assign({}, i.currentDefaults(), l().currencyFormat)),
          (i.currentTimeDefaultFormat = () =>
            Object.assign({}, i.currentDefaults(), l().timeFormat)),
          (i.setDefaults = (e) => {
            (e = r.parseFormat(e)), t.validateFormat(e) && (u = e);
          }),
          (i.getZeroFormat = () => o),
          (i.setZeroFormat = (e) => (o = "string" == typeof e ? e : null)),
          (i.hasZeroFormat = () => null !== o),
          (i.languageData = (e) => {
            if (e) {
              if (a[e]) return a[e];
              throw new Error(`Unknown tag "${e}"`);
            }
            return l();
          }),
          (i.registerLanguage = (e, r = !1) => {
            if (!t.validateLanguage(e))
              throw new Error("Invalid language data");
            (a[e.languageTag] = e), r && s(e.languageTag);
          }),
          (i.setLanguage = (t, r = e.languageTag) => {
            if (!a[t]) {
              let e = t.split("-")[0],
                n = Object.keys(a).find((t) => t.split("-")[0] === e);
              return a[n] ? void s(n) : void s(r);
            }
            s(t);
          }),
          i.registerLanguage(e),
          (n = e.languageTag),
          (h = i)
        );
      }
      var b,
        v = {
          exports: {},
        };
      (b = v),
        (function (e) {
          var t,
            r = /^-?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?$/i,
            n = Math.ceil,
            i = Math.floor,
            a = "[BigNumber Error] ",
            o = a + "Number primitive has more than 15 significant digits: ",
            u = 1e14,
            s = 14,
            l = 9007199254740991,
            c = [
              1, 10, 100, 1e3, 1e4, 1e5, 1e6, 1e7, 1e8, 1e9, 1e10, 1e11, 1e12,
              1e13,
            ],
            f = 1e7,
            p = 1e9;
          function g(e) {
            var t = 0 | e;
            return e > 0 || e === t ? t : t - 1;
          }
          function h(e) {
            for (var t, r, n = 1, i = e.length, a = e[0] + ""; n < i; ) {
              for (t = e[n++] + "", r = s - t.length; r--; t = "0" + t);
              a += t;
            }
            for (i = a.length; 48 === a.charCodeAt(--i); );
            return a.slice(0, i + 1 || 1);
          }
          function d(e, t) {
            var r,
              n,
              i = e.c,
              a = t.c,
              o = e.s,
              u = t.s,
              s = e.e,
              l = t.e;
            if (!o || !u) return null;
            if (((r = i && !i[0]), (n = a && !a[0]), r || n))
              return r ? (n ? 0 : -u) : o;
            if (o != u) return o;
            if (((r = o < 0), (n = s == l), !i || !a))
              return n ? 0 : !i ^ r ? 1 : -1;
            if (!n) return (s > l) ^ r ? 1 : -1;
            for (u = (s = i.length) < (l = a.length) ? s : l, o = 0; o < u; o++)
              if (i[o] != a[o]) return (i[o] > a[o]) ^ r ? 1 : -1;
            return s == l ? 0 : (s > l) ^ r ? 1 : -1;
          }
          function m(e, t, r, n) {
            if (e < t || e > r || e !== i(e))
              throw Error(
                a +
                  (n || "Argument") +
                  ("number" == typeof e
                    ? e < t || e > r
                      ? " out of range: "
                      : " not an integer: "
                    : " not a primitive number: ") +
                  String(e)
              );
          }
          function y(e) {
            var t = e.c.length - 1;
            return g(e.e / s) == t && e.c[t] % 2 != 0;
          }
          function v(e, t) {
            return (
              (e.length > 1 ? e.charAt(0) + "." + e.slice(1) : e) +
              (t < 0 ? "e" : "e+") +
              t
            );
          }
          function w(e, t, r) {
            var n, i;
            if (t < 0) {
              for (i = r + "."; ++t; i += r);
              e = i + e;
            } else if (++t > (n = e.length)) {
              for (i = r, t -= n; --t; i += r);
              e += i;
            } else t < n && (e = e.slice(0, t) + "." + e.slice(t));
            return e;
          }
          (t = (function e(t) {
            var b,
              O,
              x,
              S,
              N,
              $,
              B,
              M,
              D,
              F,
              _ = (q.prototype = {
                constructor: q,
                toString: null,
                valueOf: null,
              }),
              E = new q(1),
              A = 20,
              k = 4,
              L = -7,
              P = 21,
              C = -1e7,
              T = 1e7,
              j = !1,
              U = 1,
              R = 0,
              I = {
                prefix: "",
                groupSize: 3,
                secondaryGroupSize: 0,
                groupSeparator: ",",
                decimalSeparator: ".",
                fractionGroupSize: 0,
                fractionGroupSeparator: " ",
                suffix: "",
              },
              G = "0123456789abcdefghijklmnopqrstuvwxyz",
              V = !0;
            function q(e, t) {
              var n,
                a,
                u,
                c,
                f,
                p,
                g,
                h,
                d = this;
              if (!(d instanceof q)) return new q(e, t);
              if (null == t) {
                if (e && !0 === e._isBigNumber)
                  return (
                    (d.s = e.s),
                    void (!e.c || e.e > T
                      ? (d.c = d.e = null)
                      : e.e < C
                      ? (d.c = [(d.e = 0)])
                      : ((d.e = e.e), (d.c = e.c.slice())))
                  );
                if ((p = "number" == typeof e) && 0 * e == 0) {
                  if (((d.s = 1 / e < 0 ? ((e = -e), -1) : 1), e === ~~e)) {
                    for (c = 0, f = e; f >= 10; f /= 10, c++);
                    return void (c > T
                      ? (d.c = d.e = null)
                      : ((d.e = c), (d.c = [e])));
                  }
                  h = String(e);
                } else {
                  if (!r.test((h = String(e)))) return x(d, h, p);
                  d.s = 45 == h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1;
                }
                (c = h.indexOf(".")) > -1 && (h = h.replace(".", "")),
                  (f = h.search(/e/i)) > 0
                    ? (c < 0 && (c = f),
                      (c += +h.slice(f + 1)),
                      (h = h.substring(0, f)))
                    : c < 0 && (c = h.length);
              } else {
                if ((m(t, 2, G.length, "Base"), 10 == t && V))
                  return H((d = new q(e)), A + d.e + 1, k);
                if (((h = String(e)), (p = "number" == typeof e))) {
                  if (0 * e != 0) return x(d, h, p, t);
                  if (
                    ((d.s = 1 / e < 0 ? ((h = h.slice(1)), -1) : 1),
                    q.DEBUG && h.replace(/^0\.0*|\./, "").length > 15)
                  )
                    throw Error(o + e);
                } else
                  d.s = 45 === h.charCodeAt(0) ? ((h = h.slice(1)), -1) : 1;
                for (n = G.slice(0, t), c = f = 0, g = h.length; f < g; f++)
                  if (n.indexOf((a = h.charAt(f))) < 0) {
                    if ("." == a) {
                      if (f > c) {
                        c = g;
                        continue;
                      }
                    } else if (
                      !u &&
                      ((h == h.toUpperCase() && (h = h.toLowerCase())) ||
                        (h == h.toLowerCase() && (h = h.toUpperCase())))
                    ) {
                      (u = !0), (f = -1), (c = 0);
                      continue;
                    }
                    return x(d, String(e), p, t);
                  }
                (p = !1),
                  (c = (h = O(h, t, 10, d.s)).indexOf(".")) > -1
                    ? (h = h.replace(".", ""))
                    : (c = h.length);
              }
              for (f = 0; 48 === h.charCodeAt(f); f++);
              for (g = h.length; 48 === h.charCodeAt(--g); );
              if ((h = h.slice(f, ++g))) {
                if (((g -= f), p && q.DEBUG && g > 15 && (e > l || e !== i(e))))
                  throw Error(o + d.s * e);
                if ((c = c - f - 1) > T) d.c = d.e = null;
                else if (c < C) d.c = [(d.e = 0)];
                else {
                  if (
                    ((d.e = c),
                    (d.c = []),
                    (f = (c + 1) % s),
                    c < 0 && (f += s),
                    f < g)
                  ) {
                    for (f && d.c.push(+h.slice(0, f)), g -= s; f < g; )
                      d.c.push(+h.slice(f, (f += s)));
                    f = s - (h = h.slice(f)).length;
                  } else f -= g;
                  for (; f--; h += "0");
                  d.c.push(+h);
                }
              } else d.c = [(d.e = 0)];
            }
            function Z(e, t, r, n) {
              var i, a, o, u, s;
              if ((null == r ? (r = k) : m(r, 0, 8), !e.c)) return e.toString();
              if (((i = e.c[0]), (o = e.e), null == t))
                (s = h(e.c)),
                  (s =
                    1 == n || (2 == n && (o <= L || o >= P))
                      ? v(s, o)
                      : w(s, o, "0"));
              else if (
                ((a = (e = H(new q(e), t, r)).e),
                (u = (s = h(e.c)).length),
                1 == n || (2 == n && (t <= a || a <= L)))
              ) {
                for (; u < t; s += "0", u++);
                s = v(s, a);
              } else if (((t -= o), (s = w(s, a, "0")), a + 1 > u)) {
                if (--t > 0) for (s += "."; t--; s += "0");
              } else if ((t += a - u) > 0)
                for (a + 1 == u && (s += "."); t--; s += "0");
              return e.s < 0 && i ? "-" + s : s;
            }
            function z(e, t) {
              for (var r, n, i = 1, a = new q(e[0]); i < e.length; i++)
                (!(n = new q(e[i])).s ||
                  (r = d(a, n)) === t ||
                  (0 === r && a.s === t)) &&
                  (a = n);
              return a;
            }
            function W(e, t, r) {
              for (var n = 1, i = t.length; !t[--i]; t.pop());
              for (i = t[0]; i >= 10; i /= 10, n++);
              return (
                (r = n + r * s - 1) > T
                  ? (e.c = e.e = null)
                  : r < C
                  ? (e.c = [(e.e = 0)])
                  : ((e.e = r), (e.c = t)),
                e
              );
            }
            function H(e, t, r, a) {
              var o,
                l,
                f,
                p,
                g,
                h,
                d,
                m = e.c,
                y = c;
              if (m) {
                e: {
                  for (o = 1, p = m[0]; p >= 10; p /= 10, o++);
                  if ((l = t - o) < 0)
                    (l += s),
                      (f = t),
                      (g = m[(h = 0)]),
                      (d = i((g / y[o - f - 1]) % 10));
                  else if ((h = n((l + 1) / s)) >= m.length) {
                    if (!a) break e;
                    for (; m.length <= h; m.push(0));
                    (g = d = 0), (o = 1), (f = (l %= s) - s + 1);
                  } else {
                    for (g = p = m[h], o = 1; p >= 10; p /= 10, o++);
                    d =
                      (f = (l %= s) - s + o) < 0
                        ? 0
                        : i((g / y[o - f - 1]) % 10);
                  }
                  if (
                    ((a =
                      a ||
                      t < 0 ||
                      null != m[h + 1] ||
                      (f < 0 ? g : g % y[o - f - 1])),
                    (a =
                      r < 4
                        ? (d || a) && (0 == r || r == (e.s < 0 ? 3 : 2))
                        : d > 5 ||
                          (5 == d &&
                            (4 == r ||
                              a ||
                              (6 == r &&
                                (l > 0
                                  ? f > 0
                                    ? g / y[o - f]
                                    : 0
                                  : m[h - 1]) %
                                  10 &
                                  1) ||
                              r == (e.s < 0 ? 8 : 7)))),
                    t < 1 || !m[0])
                  )
                    return (
                      (m.length = 0),
                      a
                        ? ((t -= e.e + 1),
                          (m[0] = y[(s - (t % s)) % s]),
                          (e.e = -t || 0))
                        : (m[0] = e.e = 0),
                      e
                    );
                  if (
                    (0 == l
                      ? ((m.length = h), (p = 1), h--)
                      : ((m.length = h + 1),
                        (p = y[s - l]),
                        (m[h] = f > 0 ? i((g / y[o - f]) % y[f]) * p : 0)),
                    a)
                  )
                    for (;;) {
                      if (0 == h) {
                        for (l = 1, f = m[0]; f >= 10; f /= 10, l++);
                        for (f = m[0] += p, p = 1; f >= 10; f /= 10, p++);
                        l != p && (e.e++, m[0] == u && (m[0] = 1));
                        break;
                      }
                      if (((m[h] += p), m[h] != u)) break;
                      (m[h--] = 0), (p = 1);
                    }
                  for (l = m.length; 0 === m[--l]; m.pop());
                }
                e.e > T ? (e.c = e.e = null) : e.e < C && (e.c = [(e.e = 0)]);
              }
              return e;
            }
            function Y(e) {
              var t,
                r = e.e;
              return null === r
                ? e.toString()
                : ((t = h(e.c)),
                  (t = r <= L || r >= P ? v(t, r) : w(t, r, "0")),
                  e.s < 0 ? "-" + t : t);
            }
            return (
              (q.clone = e),
              (q.ROUND_UP = 0),
              (q.ROUND_DOWN = 1),
              (q.ROUND_CEIL = 2),
              (q.ROUND_FLOOR = 3),
              (q.ROUND_HALF_UP = 4),
              (q.ROUND_HALF_DOWN = 5),
              (q.ROUND_HALF_EVEN = 6),
              (q.ROUND_HALF_CEIL = 7),
              (q.ROUND_HALF_FLOOR = 8),
              (q.EUCLID = 9),
              (q.config = q.set =
                function (e) {
                  var t, r;
                  if (null != e) {
                    if ("object" != typeof e)
                      throw Error(a + "Object expected: " + e);
                    if (
                      (e.hasOwnProperty((t = "DECIMAL_PLACES")) &&
                        (m((r = e[t]), 0, p, t), (A = r)),
                      e.hasOwnProperty((t = "ROUNDING_MODE")) &&
                        (m((r = e[t]), 0, 8, t), (k = r)),
                      e.hasOwnProperty((t = "EXPONENTIAL_AT")) &&
                        ((r = e[t]) && r.pop
                          ? (m(r[0], -p, 0, t),
                            m(r[1], 0, p, t),
                            (L = r[0]),
                            (P = r[1]))
                          : (m(r, -p, p, t), (L = -(P = r < 0 ? -r : r)))),
                      e.hasOwnProperty((t = "RANGE")))
                    )
                      if ((r = e[t]) && r.pop)
                        m(r[0], -p, -1, t),
                          m(r[1], 1, p, t),
                          (C = r[0]),
                          (T = r[1]);
                      else {
                        if ((m(r, -p, p, t), !r))
                          throw Error(a + t + " cannot be zero: " + r);
                        C = -(T = r < 0 ? -r : r);
                      }
                    if (e.hasOwnProperty((t = "CRYPTO"))) {
                      if ((r = e[t]) !== !!r)
                        throw Error(a + t + " not true or false: " + r);
                      if (r) {
                        if (
                          "undefined" == typeof crypto ||
                          !crypto ||
                          (!crypto.getRandomValues && !crypto.randomBytes)
                        )
                          throw ((j = !r), Error(a + "crypto unavailable"));
                        j = r;
                      } else j = r;
                    }
                    if (
                      (e.hasOwnProperty((t = "MODULO_MODE")) &&
                        (m((r = e[t]), 0, 9, t), (U = r)),
                      e.hasOwnProperty((t = "POW_PRECISION")) &&
                        (m((r = e[t]), 0, p, t), (R = r)),
                      e.hasOwnProperty((t = "FORMAT")))
                    ) {
                      if ("object" != typeof (r = e[t]))
                        throw Error(a + t + " not an object: " + r);
                      I = r;
                    }
                    if (e.hasOwnProperty((t = "ALPHABET"))) {
                      if (
                        "string" != typeof (r = e[t]) ||
                        /^.?$|[+\-.\s]|(.).*\1/.test(r)
                      )
                        throw Error(a + t + " invalid: " + r);
                      (V = "0123456789" == r.slice(0, 10)), (G = r);
                    }
                  }
                  return {
                    DECIMAL_PLACES: A,
                    ROUNDING_MODE: k,
                    EXPONENTIAL_AT: [L, P],
                    RANGE: [C, T],
                    CRYPTO: j,
                    MODULO_MODE: U,
                    POW_PRECISION: R,
                    FORMAT: I,
                    ALPHABET: G,
                  };
                }),
              (q.isBigNumber = function (e) {
                if (!e || !0 !== e._isBigNumber) return !1;
                if (!q.DEBUG) return !0;
                var t,
                  r,
                  n = e.c,
                  o = e.e,
                  l = e.s;
                e: if ("[object Array]" == {}.toString.call(n)) {
                  if (
                    (1 === l || -1 === l) &&
                    o >= -p &&
                    o <= p &&
                    o === i(o)
                  ) {
                    if (0 === n[0]) {
                      if (0 === o && 1 === n.length) return !0;
                      break e;
                    }
                    if (
                      ((t = (o + 1) % s) < 1 && (t += s),
                      String(n[0]).length == t)
                    ) {
                      for (t = 0; t < n.length; t++)
                        if ((r = n[t]) < 0 || r >= u || r !== i(r)) break e;
                      if (0 !== r) return !0;
                    }
                  }
                } else if (
                  null === n &&
                  null === o &&
                  (null === l || 1 === l || -1 === l)
                )
                  return !0;
                throw Error(a + "Invalid BigNumber: " + e);
              }),
              (q.maximum = q.max =
                function () {
                  return z(arguments, -1);
                }),
              (q.minimum = q.min =
                function () {
                  return z(arguments, 1);
                }),
              (q.random =
                ((S = 9007199254740992),
                (N =
                  (Math.random() * S) & 2097151
                    ? function () {
                        return i(Math.random() * S);
                      }
                    : function () {
                        return (
                          8388608 * ((1073741824 * Math.random()) | 0) +
                          ((8388608 * Math.random()) | 0)
                        );
                      }),
                function (e) {
                  var t,
                    r,
                    o,
                    u,
                    l,
                    f = 0,
                    g = [],
                    h = new q(E);
                  if ((null == e ? (e = A) : m(e, 0, p), (u = n(e / s)), j))
                    if (crypto.getRandomValues) {
                      for (
                        t = crypto.getRandomValues(new Uint32Array((u *= 2)));
                        f < u;

                      )
                        (l = 131072 * t[f] + (t[f + 1] >>> 11)) >= 9e15
                          ? ((r = crypto.getRandomValues(new Uint32Array(2))),
                            (t[f] = r[0]),
                            (t[f + 1] = r[1]))
                          : (g.push(l % 1e14), (f += 2));
                      f = u / 2;
                    } else {
                      if (!crypto.randomBytes)
                        throw ((j = !1), Error(a + "crypto unavailable"));
                      for (t = crypto.randomBytes((u *= 7)); f < u; )
                        (l =
                          281474976710656 * (31 & t[f]) +
                          1099511627776 * t[f + 1] +
                          4294967296 * t[f + 2] +
                          16777216 * t[f + 3] +
                          (t[f + 4] << 16) +
                          (t[f + 5] << 8) +
                          t[f + 6]) >= 9e15
                          ? crypto.randomBytes(7).copy(t, f)
                          : (g.push(l % 1e14), (f += 7));
                      f = u / 7;
                    }
                  if (!j)
                    for (; f < u; ) (l = N()) < 9e15 && (g[f++] = l % 1e14);
                  for (
                    u = g[--f],
                      e %= s,
                      u && e && ((l = c[s - e]), (g[f] = i(u / l) * l));
                    0 === g[f];
                    g.pop(), f--
                  );
                  if (f < 0) g = [(o = 0)];
                  else {
                    for (o = -1; 0 === g[0]; g.splice(0, 1), o -= s);
                    for (f = 1, l = g[0]; l >= 10; l /= 10, f++);
                    f < s && (o -= s - f);
                  }
                  return (h.e = o), (h.c = g), h;
                })),
              (q.sum = function () {
                for (var e = 1, t = arguments, r = new q(t[0]); e < t.length; )
                  r = r.plus(t[e++]);
                return r;
              }),
              (O = (function () {
                var e = "0123456789";
                function t(e, t, r, n) {
                  for (var i, a, o = [0], u = 0, s = e.length; u < s; ) {
                    for (a = o.length; a--; o[a] *= t);
                    for (
                      o[0] += n.indexOf(e.charAt(u++)), i = 0;
                      i < o.length;
                      i++
                    )
                      o[i] > r - 1 &&
                        (null == o[i + 1] && (o[i + 1] = 0),
                        (o[i + 1] += (o[i] / r) | 0),
                        (o[i] %= r));
                  }
                  return o.reverse();
                }
                return function (r, n, i, a, o) {
                  var u,
                    s,
                    l,
                    c,
                    f,
                    p,
                    g,
                    d,
                    m = r.indexOf("."),
                    y = A,
                    v = k;
                  for (
                    m >= 0 &&
                      ((c = R),
                      (R = 0),
                      (r = r.replace(".", "")),
                      (p = (d = new q(n)).pow(r.length - m)),
                      (R = c),
                      (d.c = t(w(h(p.c), p.e, "0"), 10, i, e)),
                      (d.e = d.c.length)),
                      l = c =
                        (g = t(r, n, i, o ? ((u = G), e) : ((u = e), G)))
                          .length;
                    0 == g[--c];
                    g.pop()
                  );
                  if (!g[0]) return u.charAt(0);
                  if (
                    (m < 0
                      ? --l
                      : ((p.c = g),
                        (p.e = l),
                        (p.s = a),
                        (g = (p = b(p, d, y, v, i)).c),
                        (f = p.r),
                        (l = p.e)),
                    (m = g[(s = l + y + 1)]),
                    (c = i / 2),
                    (f = f || s < 0 || null != g[s + 1]),
                    (f =
                      v < 4
                        ? (null != m || f) && (0 == v || v == (p.s < 0 ? 3 : 2))
                        : m > c ||
                          (m == c &&
                            (4 == v ||
                              f ||
                              (6 == v && 1 & g[s - 1]) ||
                              v == (p.s < 0 ? 8 : 7)))),
                    s < 1 || !g[0])
                  )
                    r = f ? w(u.charAt(1), -y, u.charAt(0)) : u.charAt(0);
                  else {
                    if (((g.length = s), f))
                      for (--i; ++g[--s] > i; )
                        (g[s] = 0), s || (++l, (g = [1].concat(g)));
                    for (c = g.length; !g[--c]; );
                    for (m = 0, r = ""; m <= c; r += u.charAt(g[m++]));
                    r = w(r, l, u.charAt(0));
                  }
                  return r;
                };
              })()),
              (b = (function () {
                function e(e, t, r) {
                  var n,
                    i,
                    a,
                    o,
                    u = 0,
                    s = e.length,
                    l = t % f,
                    c = (t / f) | 0;
                  for (e = e.slice(); s--; )
                    (u =
                      (((i =
                        l * (a = e[s] % f) +
                        ((n = c * a + (o = (e[s] / f) | 0) * l) % f) * f +
                        u) /
                        r) |
                        0) +
                      ((n / f) | 0) +
                      c * o),
                      (e[s] = i % r);
                  return u && (e = [u].concat(e)), e;
                }
                function t(e, t, r, n) {
                  var i, a;
                  if (r != n) a = r > n ? 1 : -1;
                  else
                    for (i = a = 0; i < r; i++)
                      if (e[i] != t[i]) {
                        a = e[i] > t[i] ? 1 : -1;
                        break;
                      }
                  return a;
                }
                function r(e, t, r, n) {
                  for (var i = 0; r--; )
                    (e[r] -= i),
                      (i = e[r] < t[r] ? 1 : 0),
                      (e[r] = i * n + e[r] - t[r]);
                  for (; !e[0] && e.length > 1; e.splice(0, 1));
                }
                return function (n, a, o, l, c) {
                  var f,
                    p,
                    h,
                    d,
                    m,
                    y,
                    b,
                    v,
                    w,
                    O,
                    x,
                    S,
                    N,
                    $,
                    B,
                    M,
                    D,
                    F = n.s == a.s ? 1 : -1,
                    _ = n.c,
                    E = a.c;
                  if (!(_ && _[0] && E && E[0]))
                    return new q(
                      n.s && a.s && (_ ? !E || _[0] != E[0] : E)
                        ? (_ && 0 == _[0]) || !E
                          ? 0 * F
                          : F / 0
                        : NaN
                    );
                  for (
                    w = (v = new q(F)).c = [],
                      F = o + (p = n.e - a.e) + 1,
                      c ||
                        ((c = u),
                        (p = g(n.e / s) - g(a.e / s)),
                        (F = (F / s) | 0)),
                      h = 0;
                    E[h] == (_[h] || 0);
                    h++
                  );
                  if ((E[h] > (_[h] || 0) && p--, F < 0)) w.push(1), (d = !0);
                  else {
                    for (
                      $ = _.length,
                        M = E.length,
                        h = 0,
                        F += 2,
                        (m = i(c / (E[0] + 1))) > 1 &&
                          ((E = e(E, m, c)),
                          (_ = e(_, m, c)),
                          (M = E.length),
                          ($ = _.length)),
                        N = M,
                        x = (O = _.slice(0, M)).length;
                      x < M;
                      O[x++] = 0
                    );
                    (D = E.slice()),
                      (D = [0].concat(D)),
                      (B = E[0]),
                      E[1] >= c / 2 && B++;
                    do {
                      if (((m = 0), (f = t(E, O, M, x)) < 0)) {
                        if (
                          ((S = O[0]),
                          M != x && (S = S * c + (O[1] || 0)),
                          (m = i(S / B)) > 1)
                        )
                          for (
                            m >= c && (m = c - 1),
                              b = (y = e(E, m, c)).length,
                              x = O.length;
                            1 == t(y, O, b, x);

                          )
                            m--,
                              r(y, M < b ? D : E, b, c),
                              (b = y.length),
                              (f = 1);
                        else
                          0 == m && (f = m = 1), (b = (y = E.slice()).length);
                        if (
                          (b < x && (y = [0].concat(y)),
                          r(O, y, x, c),
                          (x = O.length),
                          -1 == f)
                        )
                          for (; t(E, O, M, x) < 1; )
                            m++, r(O, M < x ? D : E, x, c), (x = O.length);
                      } else 0 === f && (m++, (O = [0]));
                      (w[h++] = m),
                        O[0] ? (O[x++] = _[N] || 0) : ((O = [_[N]]), (x = 1));
                    } while ((N++ < $ || null != O[0]) && F--);
                    (d = null != O[0]), w[0] || w.splice(0, 1);
                  }
                  if (c == u) {
                    for (h = 1, F = w[0]; F >= 10; F /= 10, h++);
                    H(v, o + (v.e = h + p * s - 1) + 1, l, d);
                  } else (v.e = p), (v.r = +d);
                  return v;
                };
              })()),
              ($ = /^(-?)0([xbo])(?=\w[\w.]*$)/i),
              (B = /^([^.]+)\.$/),
              (M = /^\.([^.]+)$/),
              (D = /^-?(Infinity|NaN)$/),
              (F = /^\s*\+(?=[\w.])|^\s+|\s+$/g),
              (x = function (e, t, r, n) {
                var i,
                  o = r ? t : t.replace(F, "");
                if (D.test(o)) e.s = isNaN(o) ? null : o < 0 ? -1 : 1;
                else {
                  if (
                    !r &&
                    ((o = o.replace($, function (e, t, r) {
                      return (
                        (i =
                          "x" == (r = r.toLowerCase()) ? 16 : "b" == r ? 2 : 8),
                        n && n != i ? e : t
                      );
                    })),
                    n && ((i = n), (o = o.replace(B, "$1").replace(M, "0.$1"))),
                    t != o)
                  )
                    return new q(o, i);
                  if (q.DEBUG)
                    throw Error(
                      a + "Not a" + (n ? " base " + n : "") + " number: " + t
                    );
                  e.s = null;
                }
                e.c = e.e = null;
              }),
              (_.absoluteValue = _.abs =
                function () {
                  var e = new q(this);
                  return e.s < 0 && (e.s = 1), e;
                }),
              (_.comparedTo = function (e, t) {
                return d(this, new q(e, t));
              }),
              (_.decimalPlaces = _.dp =
                function (e, t) {
                  var r,
                    n,
                    i,
                    a = this;
                  if (null != e)
                    return (
                      m(e, 0, p),
                      null == t ? (t = k) : m(t, 0, 8),
                      H(new q(a), e + a.e + 1, t)
                    );
                  if (!(r = a.c)) return null;
                  if (
                    ((n = ((i = r.length - 1) - g(this.e / s)) * s), (i = r[i]))
                  )
                    for (; i % 10 == 0; i /= 10, n--);
                  return n < 0 && (n = 0), n;
                }),
              (_.dividedBy = _.div =
                function (e, t) {
                  return b(this, new q(e, t), A, k);
                }),
              (_.dividedToIntegerBy = _.idiv =
                function (e, t) {
                  return b(this, new q(e, t), 0, 1);
                }),
              (_.exponentiatedBy = _.pow =
                function (e, t) {
                  var r,
                    o,
                    u,
                    l,
                    c,
                    f,
                    p,
                    g,
                    h = this;
                  if ((e = new q(e)).c && !e.isInteger())
                    throw Error(a + "Exponent not an integer: " + Y(e));
                  if (
                    (null != t && (t = new q(t)),
                    (c = e.e > 14),
                    !h.c ||
                      !h.c[0] ||
                      (1 == h.c[0] && !h.e && 1 == h.c.length) ||
                      !e.c ||
                      !e.c[0])
                  )
                    return (
                      (g = new q(
                        Math.pow(+Y(h), c ? e.s * (2 - y(e)) : +Y(e))
                      )),
                      t ? g.mod(t) : g
                    );
                  if (((f = e.s < 0), t)) {
                    if (t.c ? !t.c[0] : !t.s) return new q(NaN);
                    (o = !f && h.isInteger() && t.isInteger()) &&
                      (h = h.mod(t));
                  } else {
                    if (
                      e.e > 9 &&
                      (h.e > 0 ||
                        h.e < -1 ||
                        (0 == h.e
                          ? h.c[0] > 1 || (c && h.c[1] >= 24e7)
                          : h.c[0] < 8e13 || (c && h.c[0] <= 9999975e7)))
                    )
                      return (
                        (l = h.s < 0 && y(e) ? -0 : 0),
                        h.e > -1 && (l = 1 / l),
                        new q(f ? 1 / l : l)
                      );
                    R && (l = n(R / s + 2));
                  }
                  for (
                    c
                      ? ((r = new q(0.5)), f && (e.s = 1), (p = y(e)))
                      : (p = (u = Math.abs(+Y(e))) % 2),
                      g = new q(E);
                    ;

                  ) {
                    if (p) {
                      if (!(g = g.times(h)).c) break;
                      l
                        ? g.c.length > l && (g.c.length = l)
                        : o && (g = g.mod(t));
                    }
                    if (u) {
                      if (0 === (u = i(u / 2))) break;
                      p = u % 2;
                    } else if ((H((e = e.times(r)), e.e + 1, 1), e.e > 14))
                      p = y(e);
                    else {
                      if (0 === (u = +Y(e))) break;
                      p = u % 2;
                    }
                    (h = h.times(h)),
                      l
                        ? h.c && h.c.length > l && (h.c.length = l)
                        : o && (h = h.mod(t));
                  }
                  return o
                    ? g
                    : (f && (g = E.div(g)),
                      t ? g.mod(t) : l ? H(g, R, k, void 0) : g);
                }),
              (_.integerValue = function (e) {
                var t = new q(this);
                return null == e ? (e = k) : m(e, 0, 8), H(t, t.e + 1, e);
              }),
              (_.isEqualTo = _.eq =
                function (e, t) {
                  return 0 === d(this, new q(e, t));
                }),
              (_.isFinite = function () {
                return !!this.c;
              }),
              (_.isGreaterThan = _.gt =
                function (e, t) {
                  return d(this, new q(e, t)) > 0;
                }),
              (_.isGreaterThanOrEqualTo = _.gte =
                function (e, t) {
                  return 1 === (t = d(this, new q(e, t))) || 0 === t;
                }),
              (_.isInteger = function () {
                return !!this.c && g(this.e / s) > this.c.length - 2;
              }),
              (_.isLessThan = _.lt =
                function (e, t) {
                  return d(this, new q(e, t)) < 0;
                }),
              (_.isLessThanOrEqualTo = _.lte =
                function (e, t) {
                  return -1 === (t = d(this, new q(e, t))) || 0 === t;
                }),
              (_.isNaN = function () {
                return !this.s;
              }),
              (_.isNegative = function () {
                return this.s < 0;
              }),
              (_.isPositive = function () {
                return this.s > 0;
              }),
              (_.isZero = function () {
                return !!this.c && 0 == this.c[0];
              }),
              (_.minus = function (e, t) {
                var r,
                  n,
                  i,
                  a,
                  o = this,
                  l = o.s;
                if (((t = (e = new q(e, t)).s), !l || !t)) return new q(NaN);
                if (l != t) return (e.s = -t), o.plus(e);
                var c = o.e / s,
                  f = e.e / s,
                  p = o.c,
                  h = e.c;
                if (!c || !f) {
                  if (!p || !h) return p ? ((e.s = -t), e) : new q(h ? o : NaN);
                  if (!p[0] || !h[0])
                    return h[0]
                      ? ((e.s = -t), e)
                      : new q(p[0] ? o : 3 == k ? -0 : 0);
                }
                if (((c = g(c)), (f = g(f)), (p = p.slice()), (l = c - f))) {
                  for (
                    (a = l < 0) ? ((l = -l), (i = p)) : ((f = c), (i = h)),
                      i.reverse(),
                      t = l;
                    t--;
                    i.push(0)
                  );
                  i.reverse();
                } else
                  for (
                    n = (a = (l = p.length) < (t = h.length)) ? l : t,
                      l = t = 0;
                    t < n;
                    t++
                  )
                    if (p[t] != h[t]) {
                      a = p[t] < h[t];
                      break;
                    }
                if (
                  (a && ((i = p), (p = h), (h = i), (e.s = -e.s)),
                  (t = (n = h.length) - (r = p.length)) > 0)
                )
                  for (; t--; p[r++] = 0);
                for (t = u - 1; n > l; ) {
                  if (p[--n] < h[n]) {
                    for (r = n; r && !p[--r]; p[r] = t);
                    --p[r], (p[n] += u);
                  }
                  p[n] -= h[n];
                }
                for (; 0 == p[0]; p.splice(0, 1), --f);
                return p[0]
                  ? W(e, p, f)
                  : ((e.s = 3 == k ? -1 : 1), (e.c = [(e.e = 0)]), e);
              }),
              (_.modulo = _.mod =
                function (e, t) {
                  var r,
                    n,
                    i = this;
                  return (
                    (e = new q(e, t)),
                    !i.c || !e.s || (e.c && !e.c[0])
                      ? new q(NaN)
                      : !e.c || (i.c && !i.c[0])
                      ? new q(i)
                      : (9 == U
                          ? ((n = e.s),
                            (e.s = 1),
                            (r = b(i, e, 0, 3)),
                            (e.s = n),
                            (r.s *= n))
                          : (r = b(i, e, 0, U)),
                        (e = i.minus(r.times(e))).c[0] || 1 != U || (e.s = i.s),
                        e)
                  );
                }),
              (_.multipliedBy = _.times =
                function (e, t) {
                  var r,
                    n,
                    i,
                    a,
                    o,
                    l,
                    c,
                    p,
                    h,
                    d,
                    m,
                    y,
                    b,
                    v,
                    w,
                    O = this,
                    x = O.c,
                    S = (e = new q(e, t)).c;
                  if (!(x && S && x[0] && S[0]))
                    return (
                      !O.s || !e.s || (x && !x[0] && !S) || (S && !S[0] && !x)
                        ? (e.c = e.e = e.s = null)
                        : ((e.s *= O.s),
                          x && S
                            ? ((e.c = [0]), (e.e = 0))
                            : (e.c = e.e = null)),
                      e
                    );
                  for (
                    n = g(O.e / s) + g(e.e / s),
                      e.s *= O.s,
                      (c = x.length) < (d = S.length) &&
                        ((b = x), (x = S), (S = b), (i = c), (c = d), (d = i)),
                      i = c + d,
                      b = [];
                    i--;
                    b.push(0)
                  );
                  for (v = u, w = f, i = d; --i >= 0; ) {
                    for (
                      r = 0, m = S[i] % w, y = (S[i] / w) | 0, a = i + (o = c);
                      a > i;

                    )
                      (r =
                        (((p =
                          m * (p = x[--o] % w) +
                          ((l = y * p + (h = (x[o] / w) | 0) * m) % w) * w +
                          b[a] +
                          r) /
                          v) |
                          0) +
                        ((l / w) | 0) +
                        y * h),
                        (b[a--] = p % v);
                    b[a] = r;
                  }
                  return r ? ++n : b.splice(0, 1), W(e, b, n);
                }),
              (_.negated = function () {
                var e = new q(this);
                return (e.s = -e.s || null), e;
              }),
              (_.plus = function (e, t) {
                var r,
                  n = this,
                  i = n.s;
                if (((t = (e = new q(e, t)).s), !i || !t)) return new q(NaN);
                if (i != t) return (e.s = -t), n.minus(e);
                var a = n.e / s,
                  o = e.e / s,
                  l = n.c,
                  c = e.c;
                if (!a || !o) {
                  if (!l || !c) return new q(i / 0);
                  if (!l[0] || !c[0]) return c[0] ? e : new q(l[0] ? n : 0 * i);
                }
                if (((a = g(a)), (o = g(o)), (l = l.slice()), (i = a - o))) {
                  for (
                    i > 0 ? ((o = a), (r = c)) : ((i = -i), (r = l)),
                      r.reverse();
                    i--;
                    r.push(0)
                  );
                  r.reverse();
                }
                for (
                  (i = l.length) - (t = c.length) < 0 &&
                    ((r = c), (c = l), (l = r), (t = i)),
                    i = 0;
                  t;

                )
                  (i = ((l[--t] = l[t] + c[t] + i) / u) | 0),
                    (l[t] = u === l[t] ? 0 : l[t] % u);
                return i && ((l = [i].concat(l)), ++o), W(e, l, o);
              }),
              (_.precision = _.sd =
                function (e, t) {
                  var r,
                    n,
                    i,
                    a = this;
                  if (null != e && e !== !!e)
                    return (
                      m(e, 1, p),
                      null == t ? (t = k) : m(t, 0, 8),
                      H(new q(a), e, t)
                    );
                  if (!(r = a.c)) return null;
                  if (((n = (i = r.length - 1) * s + 1), (i = r[i]))) {
                    for (; i % 10 == 0; i /= 10, n--);
                    for (i = r[0]; i >= 10; i /= 10, n++);
                  }
                  return e && a.e + 1 > n && (n = a.e + 1), n;
                }),
              (_.shiftedBy = function (e) {
                return m(e, -9007199254740991, l), this.times("1e" + e);
              }),
              (_.squareRoot = _.sqrt =
                function () {
                  var e,
                    t,
                    r,
                    n,
                    i,
                    a = this,
                    o = a.c,
                    u = a.s,
                    s = a.e,
                    l = A + 4,
                    c = new q("0.5");
                  if (1 !== u || !o || !o[0])
                    return new q(
                      !u || (u < 0 && (!o || o[0])) ? NaN : o ? a : 1 / 0
                    );
                  if (
                    (0 == (u = Math.sqrt(+Y(a))) || u == 1 / 0
                      ? (((t = h(o)).length + s) % 2 == 0 && (t += "0"),
                        (u = Math.sqrt(+t)),
                        (s = g((s + 1) / 2) - (s < 0 || s % 2)),
                        (r = new q(
                          (t =
                            u == 1 / 0
                              ? "5e" + s
                              : (t = u.toExponential()).slice(
                                  0,
                                  t.indexOf("e") + 1
                                ) + s)
                        )))
                      : (r = new q(u + "")),
                    r.c[0])
                  )
                    for ((u = (s = r.e) + l) < 3 && (u = 0); ; )
                      if (
                        ((i = r),
                        (r = c.times(i.plus(b(a, i, l, 1)))),
                        h(i.c).slice(0, u) === (t = h(r.c)).slice(0, u))
                      ) {
                        if (
                          (r.e < s && --u,
                          "9999" != (t = t.slice(u - 3, u + 1)) &&
                            (n || "4999" != t))
                        ) {
                          (+t && (+t.slice(1) || "5" != t.charAt(0))) ||
                            (H(r, r.e + A + 2, 1), (e = !r.times(r).eq(a)));
                          break;
                        }
                        if (!n && (H(i, i.e + A + 2, 0), i.times(i).eq(a))) {
                          r = i;
                          break;
                        }
                        (l += 4), (u += 4), (n = 1);
                      }
                  return H(r, r.e + A + 1, k, e);
                }),
              (_.toExponential = function (e, t) {
                return null != e && (m(e, 0, p), e++), Z(this, e, t, 1);
              }),
              (_.toFixed = function (e, t) {
                return (
                  null != e && (m(e, 0, p), (e = e + this.e + 1)), Z(this, e, t)
                );
              }),
              (_.toFormat = function (e, t, r) {
                var n,
                  i = this;
                if (null == r)
                  null != e && t && "object" == typeof t
                    ? ((r = t), (t = null))
                    : e && "object" == typeof e
                    ? ((r = e), (e = t = null))
                    : (r = I);
                else if ("object" != typeof r)
                  throw Error(a + "Argument not an object: " + r);
                if (((n = i.toFixed(e, t)), i.c)) {
                  var o,
                    u = n.split("."),
                    s = +r.groupSize,
                    l = +r.secondaryGroupSize,
                    c = r.groupSeparator || "",
                    f = u[0],
                    p = u[1],
                    g = i.s < 0,
                    h = g ? f.slice(1) : f,
                    d = h.length;
                  if (
                    (l && ((o = s), (s = l), (l = o), (d -= o)), s > 0 && d > 0)
                  ) {
                    for (o = d % s || s, f = h.substr(0, o); o < d; o += s)
                      f += c + h.substr(o, s);
                    l > 0 && (f += c + h.slice(o)), g && (f = "-" + f);
                  }
                  n = p
                    ? f +
                      (r.decimalSeparator || "") +
                      ((l = +r.fractionGroupSize)
                        ? p.replace(
                            new RegExp("\\d{" + l + "}\\B", "g"),
                            "$&" + (r.fractionGroupSeparator || "")
                          )
                        : p)
                    : f;
                }
                return (r.prefix || "") + n + (r.suffix || "");
              }),
              (_.toFraction = function (e) {
                var t,
                  r,
                  n,
                  i,
                  o,
                  u,
                  l,
                  f,
                  p,
                  g,
                  d,
                  m,
                  y = this,
                  v = y.c;
                if (
                  null != e &&
                  ((!(l = new q(e)).isInteger() && (l.c || 1 !== l.s)) ||
                    l.lt(E))
                )
                  throw Error(
                    a +
                      "Argument " +
                      (l.isInteger() ? "out of range: " : "not an integer: ") +
                      Y(l)
                  );
                if (!v) return new q(y);
                for (
                  t = new q(E),
                    p = r = new q(E),
                    n = f = new q(E),
                    m = h(v),
                    o = t.e = m.length - y.e - 1,
                    t.c[0] = c[(u = o % s) < 0 ? s + u : u],
                    e = !e || l.comparedTo(t) > 0 ? (o > 0 ? t : p) : l,
                    u = T,
                    T = 1 / 0,
                    l = new q(m),
                    f.c[0] = 0;
                  (g = b(l, t, 0, 1)),
                    1 != (i = r.plus(g.times(n))).comparedTo(e);

                )
                  (r = n),
                    (n = i),
                    (p = f.plus(g.times((i = p)))),
                    (f = i),
                    (t = l.minus(g.times((i = t)))),
                    (l = i);
                return (
                  (i = b(e.minus(r), n, 0, 1)),
                  (f = f.plus(i.times(p))),
                  (r = r.plus(i.times(n))),
                  (f.s = p.s = y.s),
                  (d =
                    b(p, n, (o *= 2), k)
                      .minus(y)
                      .abs()
                      .comparedTo(b(f, r, o, k).minus(y).abs()) < 1
                      ? [p, n]
                      : [f, r]),
                  (T = u),
                  d
                );
              }),
              (_.toNumber = function () {
                return +Y(this);
              }),
              (_.toPrecision = function (e, t) {
                return null != e && m(e, 1, p), Z(this, e, t, 2);
              }),
              (_.toString = function (e) {
                var t,
                  r = this,
                  n = r.s,
                  i = r.e;
                return (
                  null === i
                    ? n
                      ? ((t = "Infinity"), n < 0 && (t = "-" + t))
                      : (t = "NaN")
                    : (null == e
                        ? (t =
                            i <= L || i >= P ? v(h(r.c), i) : w(h(r.c), i, "0"))
                        : 10 === e && V
                        ? (t = w(
                            h((r = H(new q(r), A + i + 1, k)).c),
                            r.e,
                            "0"
                          ))
                        : (m(e, 2, G.length, "Base"),
                          (t = O(w(h(r.c), i, "0"), 10, e, n, !0))),
                      n < 0 && r.c[0] && (t = "-" + t)),
                  t
                );
              }),
              (_.valueOf = _.toJSON =
                function () {
                  return Y(this);
                }),
              (_._isBigNumber = !0),
              null != t && q.set(t),
              q
            );
          })()),
            (t.default = t.BigNumber = t),
            b.exports
              ? (b.exports = t)
              : (e || (e = "undefined" != typeof self && self ? self : window),
                (e.BigNumber = t));
        })(l);
      var w = v.exports;
      const O = y(),
        x = g(),
        S = m,
        N = w,
        $ = {
          trillion: Math.pow(10, 12),
          billion: Math.pow(10, 9),
          million: Math.pow(10, 6),
          thousand: Math.pow(10, 3),
        },
        B = {
          totalLength: 0,
          characteristic: 0,
          forceAverage: !1,
          average: !1,
          mantissa: -1,
          optionalMantissa: !0,
          thousandSeparated: !1,
          spaceSeparated: !1,
          negative: "sign",
          forceSign: !1,
          roundingFunction: Math.round,
          spaceSeparatedAbbreviation: !1,
        },
        { binarySuffixes: M, decimalSuffixes: D } = O.currentBytes(),
        F = {
          general: {
            scale: 1024,
            suffixes: D,
            marker: "bd",
          },
          binary: {
            scale: 1024,
            suffixes: M,
            marker: "b",
          },
          decimal: {
            scale: 1e3,
            suffixes: D,
            marker: "d",
          },
        };
      function _(e, t, r) {
        let n = t[0],
          i = Math.abs(e);
        if (i >= r) {
          for (let a = 1; a < t.length; ++a) {
            let o = Math.pow(r, a),
              u = Math.pow(r, a + 1);
            if (i >= o && i < u) {
              (n = t[a]), (e /= o);
              break;
            }
          }
          n === t[0] &&
            ((e /= Math.pow(r, t.length - 1)), (n = t[t.length - 1]));
        }
        return {
          value: e,
          suffix: n,
        };
      }
      function E(e) {
        let t = "";
        for (let r = 0; r < e; r++) t += "0";
        return t;
      }
      function A({
        instance: e,
        providedFormat: t,
        state: r = O,
        decimalSeparator: n,
        defaults: i = r.currentDefaults(),
      }) {
        let a = e._value;
        if (0 === a && r.hasZeroFormat()) return r.getZeroFormat();
        if (!isFinite(a)) return a.toString();
        let o = Object.assign({}, B, i, t),
          u = o.totalLength,
          s = u ? 0 : o.characteristic,
          l = o.optionalCharacteristic,
          c = o.forceAverage,
          f = o.lowPrecision,
          p = !!u || !!c || o.average,
          g = u ? -1 : p && void 0 === t.mantissa ? 0 : o.mantissa,
          h =
            !u &&
            (void 0 === t.optionalMantissa ? -1 === g : o.optionalMantissa),
          d = o.trimMantissa,
          m = o.thousandSeparated,
          y = o.spaceSeparated,
          b = o.negative,
          v = o.forceSign,
          w = o.exponential,
          x = o.roundingFunction,
          S = "";
        if (p) {
          let e = (function ({
            value: e,
            forceAverage: t,
            lowPrecision: r = !0,
            abbreviations: n,
            spaceSeparated: i = !1,
            totalLength: a = 0,
            roundingFunction: o = Math.round,
          }) {
            let u = "",
              s = Math.abs(e),
              l = -1;
            if (
              (t && n[t] && $[t]
                ? ((u = n[t]), (e /= $[t]))
                : s >= $.trillion || (r && 1 === o(s / $.trillion))
                ? ((u = n.trillion), (e /= $.trillion))
                : (s < $.trillion && s >= $.billion) ||
                  (r && 1 === o(s / $.billion))
                ? ((u = n.billion), (e /= $.billion))
                : (s < $.billion && s >= $.million) ||
                  (r && 1 === o(s / $.million))
                ? ((u = n.million), (e /= $.million))
                : ((s < $.million && s >= $.thousand) ||
                    (r && 1 === o(s / $.thousand))) &&
                  ((u = n.thousand), (e /= $.thousand)),
              u && (u = (i ? " " : "") + u),
              a)
            ) {
              let t = e < 0,
                r = e.toString().split(".")[0],
                n = t ? r.length - 1 : r.length;
              l = Math.max(a - n, 0);
            }
            return {
              value: e,
              abbreviation: u,
              mantissaPrecision: l,
            };
          })({
            value: a,
            forceAverage: c,
            lowPrecision: f,
            abbreviations: r.currentAbbreviations(),
            spaceSeparated: y,
            roundingFunction: x,
            totalLength: u,
          });
          (a = e.value), (S += e.abbreviation), u && (g = e.mantissaPrecision);
        }
        if (w) {
          let e = (function ({ value: e, characteristicPrecision: t }) {
            let [r, n] = e.toExponential().split("e"),
              i = +r;
            return t
              ? (1 < t &&
                  ((i *= Math.pow(10, t - 1)),
                  (n = +n - (t - 1)),
                  (n = n >= 0 ? `+${n}` : n)),
                {
                  value: i,
                  abbreviation: `e${n}`,
                })
              : {
                  value: i,
                  abbreviation: `e${n}`,
                };
          })({
            value: a,
            characteristicPrecision: s,
          });
          (a = e.value), (S = e.abbreviation + S);
        }
        let M = (function (e, t, r, n, i, a) {
          if (-1 === n) return e;
          let o = (function (e, t, r = Math.round) {
              return -1 !== e.toString().indexOf("e")
                ? (function (e, t) {
                    let r = e.toString(),
                      [n, i] = r.split("e"),
                      [a, o = ""] = n.split(".");
                    if (+i > 0) r = a + o + E(i - o.length);
                    else {
                      let e = ".";
                      e = +a < 0 ? `-0${e}` : `0${e}`;
                      let n = (E(-i - 1) + Math.abs(a) + o).substr(0, t);
                      n.length < t && (n += E(t - n.length)), (r = e + n);
                    }
                    return +i > 0 && t > 0 && (r += `.${E(t)}`), r;
                  })(e, t)
                : new N(r(+`${e}e+${t}`) / Math.pow(10, t)).toFixed(t);
            })(t, n, a),
            [u, s = ""] = o.toString().split(".");
          if (s.match(/^0+$/) && (r || i)) return u;
          let l = s.match(/0+$/);
          return i && l
            ? `${u}.${s.toString().slice(0, l.index)}`
            : o.toString();
        })(a.toString(), a, h, g, d, x);
        return (
          (M = (function (e, t, r, n) {
            let i = e,
              [a, o] = i.toString().split(".");
            if (a.match(/^-?0$/) && r)
              return o ? `${a.replace("0", "")}.${o}` : a.replace("0", "");
            const u = t < 0 && 0 === a.indexOf("-");
            if ((u && ((a = a.slice(1)), (i = i.slice(1))), a.length < n)) {
              let e = n - a.length;
              for (let t = 0; t < e; t++) i = `0${i}`;
            }
            return u && (i = `-${i}`), i.toString();
          })(M, a, l, s)),
          (M = (function (e, t, r, n, i) {
            let a = n.currentDelimiters(),
              o = a.thousands;
            i = i || a.decimal;
            let u = a.thousandsSize || 3,
              s = e.toString(),
              l = s.split(".")[0],
              c = s.split(".")[1];
            const f = t < 0 && 0 === l.indexOf("-");
            if (r) {
              f && (l = l.slice(1));
              let e = (function (e, t) {
                let r = [],
                  n = 0;
                for (let i = e; i > 0; i--)
                  n === t && (r.unshift(i), (n = 0)), n++;
                return r;
              })(l.length, u);
              e.forEach((e, t) => {
                l = l.slice(0, e + t) + o + l.slice(e + t);
              }),
                f && (l = `-${l}`);
            }
            return (s = c ? l + i + c : l), s;
          })(M, a, m, r, n)),
          (p || w) &&
            (M = (function (e, t) {
              return e + t;
            })(M, S)),
          (v || a < 0) &&
            (M = (function (e, t, r) {
              return 0 === t
                ? e
                : 0 === +e
                ? e.replace("-", "")
                : t > 0
                ? `+${e}`
                : "sign" === r
                ? e
                : `(${e.replace("-", "")})`;
            })(M, a, b)),
          M
        );
      }
      function k(e, t) {
        if (!e) return t;
        let r = Object.keys(e);
        return 1 === r.length && "output" === r[0] ? t : e;
      }
      const L = w;
      function P(e, t, r) {
        let n = new L(e._value),
          i = t;
        return (
          r.isNumbro(t) && (i = t._value),
          (i = new L(i)),
          (e._value = n.minus(i).toNumber()),
          e
        );
      }
      const C = y(),
        T = g(),
        j = ((e) => ({
          loadLanguagesInNode: (t) =>
            (function (e, t) {
              e.forEach((e) => {
                let r;
                try {
                  r = (function (e) {
                    throw new Error(
                      'Could not dynamically require "' +
                        e +
                        '". Please configure the dynamicRequireTargets or/and ignoreDynamicRequires option of @rollup/plugin-commonjs appropriately for this require call to work.'
                    );
                  })(`../languages/${e}`);
                } catch (t) {
                  console.error(
                    `Unable to load "${e}". No matching language file found.`
                  );
                }
                r && t.registerLanguage(r);
              });
            })(t, e),
        }))(Z),
        U = p();
      let R = ((e) => ({
          format: (...t) =>
            (function (e, t = {}, r) {
              if (
                ("string" == typeof t && (t = S.parseFormat(t)),
                !x.validateFormat(t))
              )
                return "ERROR: invalid format";
              let n = t.prefix || "",
                i = t.postfix || "",
                a = (function (e, t, r) {
                  switch (t.output) {
                    case "currency":
                      return (function (e, t, r) {
                        const n = r.currentCurrency();
                        let i,
                          a = Object.assign({}, t),
                          o = Object.assign({}, B, a),
                          u = "",
                          s = !!o.totalLength || !!o.forceAverage || o.average,
                          l = a.currencyPosition || n.position,
                          c = a.currencySymbol || n.symbol;
                        const f =
                          void 0 !== o.spaceSeparatedCurrency
                            ? o.spaceSeparatedCurrency
                            : o.spaceSeparated;
                        void 0 === a.lowPrecision && (a.lowPrecision = !1),
                          f && (u = " "),
                          "infix" === l && (i = u + c + u);
                        let p = A({
                          instance: e,
                          providedFormat: a,
                          state: r,
                          decimalSeparator: i,
                        });
                        return (
                          "prefix" === l &&
                            (p =
                              e._value < 0 && "sign" === o.negative
                                ? `-${u}${c}${p.slice(1)}`
                                : e._value > 0 && o.forceSign
                                ? `+${u}${c}${p.slice(1)}`
                                : c + u + p),
                          (l && "postfix" !== l) ||
                            ((u = !o.spaceSeparatedAbbreviation && s ? "" : u),
                            (p = p + u + c)),
                          p
                        );
                      })(e, (t = k(t, O.currentCurrencyDefaultFormat())), O);
                    case "percent":
                      return (function (e, t, r, n) {
                        let i = t.prefixSymbol,
                          a = A({
                            instance: n(100 * e._value),
                            providedFormat: t,
                            state: r,
                          }),
                          o = Object.assign({}, B, t);
                        return i
                          ? `%${o.spaceSeparated ? " " : ""}${a}`
                          : `${a}${o.spaceSeparated ? " " : ""}%`;
                      })(
                        e,
                        (t = k(t, O.currentPercentageDefaultFormat())),
                        O,
                        r
                      );
                    case "byte":
                      return (function (e, t, r, n) {
                        let i = t.base || "binary",
                          a = Object.assign({}, B, t);
                        const { binarySuffixes: o, decimalSuffixes: u } =
                          r.currentBytes();
                        let s = {
                            general: {
                              scale: 1024,
                              suffixes: u || D,
                              marker: "bd",
                            },
                            binary: {
                              scale: 1024,
                              suffixes: o || M,
                              marker: "b",
                            },
                            decimal: {
                              scale: 1e3,
                              suffixes: u || D,
                              marker: "d",
                            },
                          }[i],
                          { value: l, suffix: c } = _(
                            e._value,
                            s.suffixes,
                            s.scale
                          );
                        return `${A({
                          instance: n(l),
                          providedFormat: t,
                          state: r,
                          defaults: r.currentByteDefaultFormat(),
                        })}${a.spaceSeparated ? " " : ""}${c}`;
                      })(e, (t = k(t, O.currentByteDefaultFormat())), O, r);
                    case "time":
                      return (
                        (t = k(t, O.currentTimeDefaultFormat())),
                        (function (e) {
                          let t = Math.floor(e._value / 60 / 60),
                            r = Math.floor((e._value - 60 * t * 60) / 60),
                            n = Math.round(e._value - 60 * t * 60 - 60 * r);
                          return `${t}:${r < 10 ? "0" : ""}${r}:${
                            n < 10 ? "0" : ""
                          }${n}`;
                        })(e)
                      );
                    case "ordinal":
                      return (function (e, t, r) {
                        let n = r.currentOrdinal(),
                          i = Object.assign({}, B, t),
                          a = A({
                            instance: e,
                            providedFormat: t,
                            state: r,
                          }),
                          o = n(e._value);
                        return `${a}${i.spaceSeparated ? " " : ""}${o}`;
                      })(e, (t = k(t, O.currentOrdinalDefaultFormat())), O);
                    default:
                      return A({
                        instance: e,
                        providedFormat: t,
                        numbro: r,
                      });
                  }
                })(e, t, r);
              return (
                (a = (function (e, t) {
                  return t + e;
                })(a, n)),
                (a = (function (e, t) {
                  return e + t;
                })(a, i)),
                a
              );
            })(...t, e),
          getByteUnit: (...t) =>
            (function (e) {
              let t = F.general;
              return _(e._value, t.suffixes, t.scale).suffix;
            })(...t, e),
          getBinaryByteUnit: (...t) =>
            (function (e) {
              let t = F.binary;
              return _(e._value, t.suffixes, t.scale).suffix;
            })(...t, e),
          getDecimalByteUnit: (...t) =>
            (function (e) {
              let t = F.decimal;
              return _(e._value, t.suffixes, t.scale).suffix;
            })(...t, e),
          formatOrDefault: k,
        }))(Z),
        I = ((e) => ({
          add: (t, r) =>
            (function (e, t, r) {
              let n = new L(e._value),
                i = t;
              return (
                r.isNumbro(t) && (i = t._value),
                (i = new L(i)),
                (e._value = n.plus(i).toNumber()),
                e
              );
            })(t, r, e),
          subtract: (t, r) => P(t, r, e),
          multiply: (t, r) =>
            (function (e, t, r) {
              let n = new L(e._value),
                i = t;
              return (
                r.isNumbro(t) && (i = t._value),
                (i = new L(i)),
                (e._value = n.times(i).toNumber()),
                e
              );
            })(t, r, e),
          divide: (t, r) =>
            (function (e, t, r) {
              let n = new L(e._value),
                i = t;
              return (
                r.isNumbro(t) && (i = t._value),
                (i = new L(i)),
                (e._value = n.dividedBy(i).toNumber()),
                e
              );
            })(t, r, e),
          set: (t, r) =>
            (function (e, t, r) {
              let n = t;
              return r.isNumbro(t) && (n = t._value), (e._value = n), e;
            })(t, r, e),
          difference: (t, r) =>
            (function (e, t, r) {
              let n = r(e._value);
              return P(n, t, r), Math.abs(n._value);
            })(t, r, e),
          BigNumber: L,
        }))(Z);
      const G = m;
      class V {
        constructor(e) {
          this._value = e;
        }
        clone() {
          return Z(this._value);
        }
        format(e = {}) {
          return R.format(this, e);
        }
        formatCurrency(e) {
          return (
            "string" == typeof e && (e = G.parseFormat(e)),
            ((e = R.formatOrDefault(
              e,
              C.currentCurrencyDefaultFormat()
            )).output = "currency"),
            R.format(this, e)
          );
        }
        formatTime(e = {}) {
          return (e.output = "time"), R.format(this, e);
        }
        binaryByteUnits() {
          return R.getBinaryByteUnit(this);
        }
        decimalByteUnits() {
          return R.getDecimalByteUnit(this);
        }
        byteUnits() {
          return R.getByteUnit(this);
        }
        difference(e) {
          return I.difference(this, e);
        }
        add(e) {
          return I.add(this, e);
        }
        subtract(e) {
          return I.subtract(this, e);
        }
        multiply(e) {
          return I.multiply(this, e);
        }
        divide(e) {
          return I.divide(this, e);
        }
        set(e) {
          return I.set(this, q(e));
        }
        value() {
          return this._value;
        }
        valueOf() {
          return this._value;
        }
      }
      function q(e) {
        let t = e;
        return (
          Z.isNumbro(e)
            ? (t = e._value)
            : "string" == typeof e
            ? (t = Z.unformat(e))
            : isNaN(e) && (t = NaN),
          t
        );
      }
      function Z(e) {
        return new V(q(e));
      }
      (Z.version = "2.5.0"),
        (Z.isNumbro = function (e) {
          return e instanceof V;
        }),
        (Z.language = C.currentLanguage),
        (Z.registerLanguage = C.registerLanguage),
        (Z.setLanguage = C.setLanguage),
        (Z.languages = C.languages),
        (Z.languageData = C.languageData),
        (Z.zeroFormat = C.setZeroFormat),
        (Z.defaultFormat = C.currentDefaults),
        (Z.setDefaults = C.setDefaults),
        (Z.defaultCurrencyFormat = C.currentCurrencyDefaultFormat),
        (Z.validate = T.validate),
        (Z.loadLanguagesInNode = j.loadLanguagesInNode),
        (Z.unformat = U.unformat),
        (Z.BigNumber = I.BigNumber);
      var z = c(Z);
    },
  },
]);
