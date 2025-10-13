(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3999],
  {
    556: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    4222: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    5340: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = M(s(96540)),
        n = r(s(7541)),
        a = r(s(46942)),
        l = s(9404),
        i = s(67467),
        c = s(78106),
        u = r(s(72524)),
        d = r(s(27179)),
        p = M(s(84622)),
        m = r(s(85935)),
        f = r(s(80956)),
        v = s(53719),
        b = r(s(94188)),
        _ = s(83597),
        g = s(38560),
        h = s(51628),
        y = r(s(15062)),
        x = r(s(22253)),
        w = r(s(51880)),
        N = s(32087),
        j = r(s(76035)),
        R = r(s(44543)),
        k = s(74848);
      function M(e, t) {
        if ("function" == typeof WeakMap)
          var s = new WeakMap(),
            r = new WeakMap();
        return (M = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var o,
            n,
            a = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return a;
          if ((o = t ? r : s)) {
            if (o.has(e)) return o.get(e);
            o.set(e, a);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((n =
                (o = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (n.get || n.set)
                ? o(a, t, n)
                : (a[t] = e[t]));
          return a;
        })(e, t);
      }
      const { defaultCurrency: O, brand: P } = b.default,
        { Wheels: C } = P.customMobile.components;
      let I = !1;
      t.default = () => {
        var e, t, s;
        const r = (0, i.useSelector)((e) => e.players.logined),
          b = (0, c.useHistory)(),
          [M, P] = (0, u.default)({
            regPromo: void 0,
            openModal: !1,
            init: !1,
            loading: !1,
            animation: !1,
            rewardIndex: null,
            isOpen: !1,
          }),
          T = (0, n.default)(v.getPromoCurrent);
        (0, o.useEffect)(() => {
          I ||
            r ||
            window.isCRR ||
            window.location.search.includes("thirdPartyType") ||
            T({
              promoType: 15,
              platform: g.isMobile ? 1 : 2,
              currency: O,
            }).then((e) => {
              e[0]
                ? P({
                    regPromo: e[0],
                  })
                : (I = !0);
            });
        }, []),
          (0, o.useEffect)(() => {
            M.regPromo &&
              P({
                openModal: !0,
              });
          }, [M.regPromo, P]),
          (0, o.useEffect)(() => {
            M.loading &&
              setTimeout(() => {
                P({
                  loading: !1,
                  rewardIndex: N.rewardIndex,
                });
              }, 1e3);
          }, [M.loading, P]),
          (0, o.useEffect)(() => {
            null !== M.rewardIndex &&
              setTimeout(() => {
                P({
                  openModal: !1,
                }),
                  P({
                    isOpen: !0,
                  });
              }, 3e3);
          }, [M.rewardIndex, P]);
        const $ =
            (null == M || null === (e = M.regPromo) || void 0 === e
              ? void 0
              : e.bonusvalue) || 0,
          D =
            (null == M || null === (t = M.regPromo) || void 0 === t
              ? void 0
              : t.startdate) ||
            (null == M || null === (s = M.regPromo) || void 0 === s
              ? void 0
              : s.createdat),
          { bonusList: L, maxBonus: E, spinBonusRecord: W } = (0, x.default)($);
        return (0, k.jsxs)(k.Fragment, {
          children: [
            M.openModal &&
              (0, k.jsxs)(m.default, {
                id: "reg-roulette-modal",
                className: (0, a.default)(
                  "reg-roulette-modal",
                  null == C ? void 0 : C[0],
                  {
                    "is-mobile": g.isMobile,
                  }
                ),
                onClose: () => {
                  (window.isCRR = !0),
                    P({
                      openModal: !1,
                    });
                },
                hasTitle: !1,
                button: !1,
                children: [
                  (0, k.jsxs)("div", {
                    className: "head",
                    children: [
                      (0, k.jsx)("div", {
                        className: "txt ttu",
                        children: h.i18n["reg.roulette.title"],
                      }),
                      (0, k.jsxs)("div", {
                        className: "amount",
                        children: [
                          E,
                          (0, k.jsx)("wbr", {}),
                          (0, k.jsx)("span", {
                            className: "currency-string",
                            children: (0, _.defaultCurrencyI18nLazy)(),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, k.jsx)("div", {
                    className: (0, a.default)("lucky-spin-wrapper"),
                    children: (0, k.jsx)(p.RegRoulette, {
                      state: M,
                      bonusList: L,
                      getLuckyDraw: () => {
                        M.animation ||
                          P({
                            isOpen: !1,
                            loading: !0,
                            animation: !0,
                            rewardIndex: null,
                          });
                      },
                    }),
                  }),
                  (0, k.jsxs)("div", {
                    className: "spin-footer",
                    children: [
                      (0, k.jsxs)("div", {
                        className: "left-cont",
                        children: [
                          (0, k.jsx)("div", {
                            className: "tit",
                            children: h.i18n["reg.roulette.bonus.total"],
                          }),
                          (0, k.jsx)(R.default, {
                            startDate: D,
                            baseBonus: $,
                          }),
                        ],
                      }),
                      (0, k.jsx)("div", {
                        className: "right-cont",
                        children: (0, k.jsx)("div", {
                          className: "roulette_winner_slider",
                          children: (0, k.jsx)(f.default, {
                            data: (0, l.fromJS)((0, j.default)(W)),
                            currency: (0, _.defaultCurrencyI18nLazy)(),
                            sliderOpt: {
                              height: 70,
                              during: 2500,
                            },
                            isSlider: !0,
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            M.isOpen &&
              (0, k.jsx)(w.default, {
                amount: $,
                onClose: () => {
                  var e;
                  d.default.set(
                    "rpid",
                    null === (e = M.regPromo) || void 0 === e
                      ? void 0
                      : e.promoid
                  ),
                    (window.isCRR = !0),
                    P({
                      isOpen: !1,
                    }),
                    b.push(y.default.SIGNUP);
                },
              }),
          ],
        });
      };
    },
    5816: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    9771: (e) => {
      "use strict";
      e.exports = function () {};
    },
    9972: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    16033: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    19226: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    19587: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    20934: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(s(5340)),
        n = r(s(42412));
      s(27775), (0, n.default)("reg"), (t.default = o.default);
    },
    22253: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(s(94188)),
        n = s(16510),
        a = s(32087);
      const {
          brand: { code: l },
        } = o.default,
        i = {
          ra5prod: {
            2: "32",
            35: "55",
            72: "128",
            482: "376",
            523: "888",
          },
          p42prod: {
            1: "188",
            2: "99",
            35: "1999",
            72: "6888",
            482: "3666",
            523: "8888",
          },
          vr6prod: {
            1: "8000",
            2: "18000",
            35: "188000",
            72: "888000",
            482: "8888000",
            523: "18888000",
          },
        };
      t.default = (e) => {
        let t = 0;
        const s = a.rewardList.map((s) => {
            const r = (i[l] || {})[s.rewardRatio] || e * s.rewardRatio;
            return (t = Math.max(t, r)), (0, n.formatMoney)(r, "0.00");
          }),
          r = [...s]
            .sort((e, t) => (Number(e) < Number(t) ? -1 : 0))
            .reduce((e, t, r) => {
              const o = Math.abs(r - s.length) || 1;
              return [...e, ...Array(o * o * o).fill(t)];
            }, []);
        return {
          bonusList: s,
          maxBonus: (0, n.formatMoney)(t, "0"),
          spinBonusRecord: r,
        };
      };
    },
    23274: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    23908: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    24853: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    27775: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    28328: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    29322: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    29506: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    32087: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.rewardList = t.rewardIndex = t.default = void 0);
      const s = (t.rewardList = [
        {
          rewardId: "1",
          rewardRatio: 1,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "482",
          rewardRatio: 482,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "35",
          rewardRatio: 35,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "2",
          rewardRatio: 2,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "72",
          rewardRatio: 72,
          order: 1e3 * Math.random(),
        },
        {
          rewardId: "523",
          rewardRatio: 523,
          order: 1e3 * Math.random(),
        },
      ].sort((e, t) => e.order - t.order));
      (t.rewardIndex = s.findIndex((e) => 1 === e.rewardRatio)),
        (t.default = {
          promoid: "72231863-c879-4550-b287-449f3a867a5c",
          promogroup: 0,
          promotype: 15,
          promoname: "yung-註冊輪盤",
          promotitle: {
            "en-US": "yung-註冊輪盤-前台英文",
            "zh-CN": "yung-註冊輪盤-前台簡中",
          },
          promodescription: null,
          promodescriptionlink: null,
          promoviewtype: "NO_VIEW",
          leaderboardviewtype: "UNRESTRICTED",
          showinpersonalinfo: !1,
          subwalletid: null,
          subwalletautoclosevalue: null,
          allpromotargets: !1,
          autoapprove: !0,
          claim: !1,
          claimttl: null,
          removelatestgwc: !1,
          bonustype: 0,
          deposittype: null,
          turnovertype: 1,
          bonusvalue: 1,
          minrandombonus: null,
          maxbonus: null,
          turnovervalue: 1,
          selfselect: !1,
          servicefee: 0,
          adminfeeratio: 0,
          displayorder: 6,
          hide: !1,
          startdate: 1705635996236,
          enddate: 1705657541790,
          dailystarttime: null,
          dailyendtime: null,
          platform: null,
          currency: "CNY",
          vipgroupids: null,
          vipgroupnames: null,
          invalidplayertags: null,
          reqtimelimit: null,
          forbidreqduring: null,
          forbidhasunfulfilledturnover: null,
          enableVerifiedMobile: !1,
          depositcount: null,
          sameiprisk: !1,
          samefingerprintrisk: !1,
          samenamerisk: !1,
          samemobilerisk: !1,
          sameemailrisk: !1,
          risklevel: null,
          totalapprovalcount: null,
          totalapprovalbonus: null,
          totalapprovalcountperplayer: 1,
          periodApprovalCount: null,
          settleperiod: "NONE",
          recycletype: null,
          bonusttl: null,
          bonusexpiredate: null,
          promocategoryid: "5d6b803f-1994-47af-b452-d8c8e0720520",
          promocategoryname: null,
          status: 0,
          active: null,
          createdat: 1705635996236,
          createdby: "yung001",
          updatedat: 1705635996236,
          updatedby: "yung001",
          defaultstyle: null,
          unitofreqtimelimit: "MINUTE",
          ratelimitforapplyingreq: null,
          depositgiventimetype: null,
          depositgiventimesetting: null,
          depositgivenstarttime: null,
          depositgivenendtime: null,
          depositgiventimezone: null,
          depositgivendays: null,
          depositgivendates: null,
          newVipLevel: null,
          promoPeriodType: null,
          promoStatisticsType: null,
          lastDepositCondition: !1,
          lastValidBetCondition: !1,
          thirdpartypaymentcodes: null,
          depositPaymentTypes: null,
          deleted: !1,
          subWalletProductTypeId: null,
          subWalletDistributorId: null,
          subWalletGameProviderId: null,
          subWalletGameId: null,
          promotionCode: null,
          promobanner: [
            {
              promoid: "72231863-c879-4550-b287-449f3a867a5c",
              lang: "zh-CN",
              platform: 2,
              type: "BANNER",
              imageurl: null,
              description: null,
              useDefault: null,
            },
            {
              promoid: "72231863-c879-4550-b287-449f3a867a5c",
              lang: "zh-CN",
              platform: 2,
              type: "GRID",
              imageurl: null,
              description: null,
              useDefault: null,
            },
          ],
          promoranges: [],
          promotargets: null,
          promoStatisticsTargets: null,
        });
    },
    32141: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    32711: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    34902: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    35696: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    35975: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    37140: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    42323: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    42412: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(s(94188));
      const { custom: n, customMobile: a } = o.default.brand,
        l = (e, t) => {
          e.keys()
            .filter((e) => t.some((t) => e.includes(`${t}.scss`)))
            .forEach(e);
        };
      t.default = (e) => {
        var t, r, o;
        if (
          ("reg" === e &&
            null !== (t = a.components.Wheels) &&
            void 0 !== t &&
            t.length &&
            s(70466)(`./${a.components.Wheels[0]}.scss`),
          "desktop" === e &&
            null !== (r = n.components.Wheels) &&
            void 0 !== r &&
            r.length)
        ) {
          const e = s(65452);
          l(e, n.components.Wheels);
        }
        if (
          "mobile" === e &&
          null !== (o = a.components.Wheels) &&
          void 0 !== o &&
          o.length
        ) {
          const e = s(75678);
          l(e, a.components.Wheels);
        }
      };
    },
    43910: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    44543: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        r(s(96540));
      var o = s(64856),
        n = s(74848);
      t.default = (e) => {
        let { startDate: t, baseBonus: s } = e;
        const r = ((Date.now() - t) / 1e3 / 20) * s,
          { countUp: a } = (0, o.useCountUp)({
            start: 0,
            end: r,
            decimals: 2,
            separator: ",",
          });
        return (0, n.jsx)("div", {
          className: "amount",
          children: a,
        });
      };
    },
    51880: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(s(77325));
      s(32711), (t.default = o.default);
    },
    52622: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      });
      var r = (function () {
          function e(e, t) {
            for (var s = 0; s < t.length; s++) {
              var r = t[s];
              (r.enumerable = r.enumerable || !1),
                (r.configurable = !0),
                "value" in r && (r.writable = !0),
                Object.defineProperty(e, r.key, r);
            }
          }
          return function (t, s, r) {
            return s && e(t.prototype, s), r && e(t, r), t;
          };
        })(),
        o = l(s(5556)),
        n = s(96540),
        a = l(n);
      function l(e) {
        return e && e.__esModule
          ? e
          : {
              default: e,
            };
      }
      var i = (function (e) {
        function t(e) {
          !(function (e, t) {
            if (!(e instanceof t))
              throw new TypeError("Cannot call a class as a function");
          })(this, t);
          var s = (function (e, t) {
            if (!e)
              throw new ReferenceError(
                "this hasn't been initialised - super() hasn't been called"
              );
            return !t || ("object" != typeof t && "function" != typeof t)
              ? e
              : t;
          })(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return (s.state = {}), s;
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
              key: "componentDidMount",
              value: function () {},
            },
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.isLoading,
                  s = e.className,
                  r = e.style,
                  o = "nrc-loading " + (t ? "active" : "") + " " + s;
                return a.default.createElement("div", {
                  className: o,
                  style: r,
                });
              },
            },
          ]),
          t
        );
      })(n.Component);
      (t.default = i),
        (i.displayName = "NrcLoading"),
        (i.propTypes = {
          isLoading: o.default.bool,
          className: o.default.string,
          style: o.default.object,
        }),
        (i.defaultProps = {
          isLoading: !0,
          className: "",
          style: {},
        });
    },
    56579: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    57700: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    59993: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    60507: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    60971: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    62055: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = r(s(70451));
      s(19587), s(57700), (t.default = o.default);
    },
    65452: (e, t, s) => {
      var r = {
        "./ae888.scss": 23908,
        "./d06prod.scss": 59993,
        "./example.scss": 9972,
        "./example1.scss": 66263,
        "./example2.scss": 4222,
        "./r39bet.scss": 42323,
        "./t38prod.scss": 82556,
        "./t98prod.scss": 81870,
        "./ta2prod.scss": 556,
        "./ta7prod.scss": 35975,
        "./ta8prod.scss": 34902,
        "./tb9prod.scss": 19226,
        "./tc7prod.scss": 16033,
        "./u30prod.scss": 60507,
        "./unc0001.scss": 86561,
        "./vh7prod.scss": 35696,
        "./x07prod.scss": 93974,
        "components/desktop/Roulette/pattern/ae888.scss": 23908,
        "components/desktop/Roulette/pattern/d06prod.scss": 59993,
        "components/desktop/Roulette/pattern/example.scss": 9972,
        "components/desktop/Roulette/pattern/example1.scss": 66263,
        "components/desktop/Roulette/pattern/example2.scss": 4222,
        "components/desktop/Roulette/pattern/r39bet.scss": 42323,
        "components/desktop/Roulette/pattern/t38prod.scss": 82556,
        "components/desktop/Roulette/pattern/t98prod.scss": 81870,
        "components/desktop/Roulette/pattern/ta2prod.scss": 556,
        "components/desktop/Roulette/pattern/ta7prod.scss": 35975,
        "components/desktop/Roulette/pattern/ta8prod.scss": 34902,
        "components/desktop/Roulette/pattern/tb9prod.scss": 19226,
        "components/desktop/Roulette/pattern/tc7prod.scss": 16033,
        "components/desktop/Roulette/pattern/u30prod.scss": 60507,
        "components/desktop/Roulette/pattern/unc0001.scss": 86561,
        "components/desktop/Roulette/pattern/vh7prod.scss": 35696,
        "components/desktop/Roulette/pattern/x07prod.scss": 93974,
      };
      function o(e) {
        var t = n(e);
        return s(t);
      }
      function n(e) {
        if (!s.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = n),
        (e.exports = o),
        (o.id = 65452);
    },
    66263: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    66359: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    68661: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    70451: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        r(s(96540));
      var o = r(s(46942)),
        n = r(s(94188)),
        a = s(16510),
        l = s(74848);
      const { imageServer: i, imgStaticPath: c } = n.default.portal.apiServer,
        u = `${i}${c}`,
        d = {
          vipvnd: (e) => (0, a.formatAmount)(e),
          vr6prod: (e) =>
            (0, a.formatMoney)((0, a.onlyPositiveNumber)(e || 0), "0,0"),
        };
      t.default = (e) => {
        let { state: t, bonusList: s, getLuckyDraw: r } = e;
        const { rewardIndex: a, loading: i } = t,
          c = s.length;
        return (0, l.jsx)("div", {
          className: (0, o.default)("roulette"),
          children: (0, l.jsx)("div", {
            className: "roulette_wrap",
            children: (0, l.jsxs)("div", {
              className: "roulette_main",
              children: [
                (0, l.jsxs)("div", {
                  className: (0, o.default)("roulette_main_wrap", {
                    [`roulette_P${c}_N${null !== a ? a : c}`]: !i,
                    "roulette_main_wrap-rotate": i,
                  }),
                  children: [
                    (0, l.jsx)("ul", {
                      className: `roulette_main_part roulette_main_part-${c}`,
                      children: s.map((e) => {
                        let t;
                        const s = d[n.default.brand.code];
                        return (
                          (t = void 0 !== s ? s(e) : e.padEnd(8, "0")),
                          (0, l.jsxs)(
                            "li",
                            {
                              className: "roulette_main_part_list",
                              children: [
                                (0, l.jsx)("div", {
                                  className: "roulette_main_part_color",
                                }),
                                (0, l.jsx)("span", {
                                  className: "roulette_main_part_award",
                                  children: t,
                                }),
                              ],
                            },
                            e
                          )
                        );
                      }),
                    }),
                    (0, l.jsx)("div", {
                      className: (0, o.default)("roulette_main_btn"),
                      onClick: () => {
                        r();
                      },
                      children: (0, l.jsx)("img", {
                        className: "roulette_main_logo",
                        src: `https://img.alltocon.com/img/static/desktop/brand/${n.default.brand.code}/logo.png`,
                        alt: "roulette_logo",
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className: "roulette_main_coin",
                  children: [
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_1_m.png`,
                        className: "roulette_main_coin_1",
                        alt: "coin_1",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_2_m.png`,
                        className: "roulette_main_coin_2",
                        alt: "coin_2",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_3_m.png`,
                        className: "roulette_main_coin_3",
                        alt: "coin_3",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_4_m.png`,
                        className: "roulette_main_coin_4",
                        alt: "coin_4",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_5_m.png`,
                        className: "roulette_main_coin_5",
                        alt: "coin_5",
                      }),
                    }),
                    (0, l.jsx)("span", {
                      className: "roulette_main_coinWrap",
                      children: (0, l.jsx)("img", {
                        src: `${u}roulette/roulette_coin_6_m.png`,
                        className: "roulette_main_coin_6",
                        alt: "coin_6",
                      }),
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    70466: (e, t, s) => {
      var r = {
        "./ae888.scss": 81808,
        "./d06prod.scss": 32141,
        "./example.scss": 5816,
        "./example1.scss": 56579,
        "./example2.scss": 29322,
        "./r39bet.scss": 94831,
        "./t38prod.scss": 90520,
        "./t98prod.scss": 23274,
        "./ta2prod.scss": 28328,
        "./ta7prod.scss": 60971,
        "./ta8prod.scss": 29506,
        "./tb9prod.scss": 43910,
        "./tc7prod.scss": 24853,
        "./u30prod.scss": 66359,
        "./unc0001.scss": 68661,
        "./vh7prod.scss": 37140,
        "./vn0prod.scss": 96223,
        "./x07prod.scss": 74466,
      };
      function o(e) {
        return Promise.resolve().then(() => {
          if (!s.o(r, e)) {
            var t = new Error("Cannot find module '" + e + "'");
            throw ((t.code = "MODULE_NOT_FOUND"), t);
          }
          return s(r[e]);
        });
      }
      (o.keys = () => Object.keys(r)), (o.id = 70466), (e.exports = o);
    },
    71508: (e) => {
      function t(e) {
        var s,
          r,
          o = "";
        if ("string" == typeof e || "number" == typeof e) o += e;
        else if ("object" == typeof e)
          if (Array.isArray(e))
            for (s = 0; s < e.length; s++)
              e[s] && (r = t(e[s])) && (o && (o += " "), (o += r));
          else for (s in e) e[s] && (o && (o += " "), (o += s));
        return o;
      }
      function s() {
        for (var e, s, r = 0, o = ""; r < arguments.length; )
          (e = arguments[r++]) && (s = t(e)) && (o && (o += " "), (o += s));
        return o;
      }
      (e.exports = s), (e.exports.clsx = s);
    },
    74466: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    75678: (e, t, s) => {
      var r = {
        "./ae888.scss": 81808,
        "./d06prod.scss": 32141,
        "./example.scss": 5816,
        "./example1.scss": 56579,
        "./example2.scss": 29322,
        "./r39bet.scss": 94831,
        "./t38prod.scss": 90520,
        "./t98prod.scss": 23274,
        "./ta2prod.scss": 28328,
        "./ta7prod.scss": 60971,
        "./ta8prod.scss": 29506,
        "./tb9prod.scss": 43910,
        "./tc7prod.scss": 24853,
        "./u30prod.scss": 66359,
        "./unc0001.scss": 68661,
        "./vh7prod.scss": 37140,
        "./vn0prod.scss": 96223,
        "./x07prod.scss": 74466,
        "components/mobile/Roulette/pattern/ae888.scss": 81808,
        "components/mobile/Roulette/pattern/d06prod.scss": 32141,
        "components/mobile/Roulette/pattern/example.scss": 5816,
        "components/mobile/Roulette/pattern/example1.scss": 56579,
        "components/mobile/Roulette/pattern/example2.scss": 29322,
        "components/mobile/Roulette/pattern/r39bet.scss": 94831,
        "components/mobile/Roulette/pattern/t38prod.scss": 90520,
        "components/mobile/Roulette/pattern/t98prod.scss": 23274,
        "components/mobile/Roulette/pattern/ta2prod.scss": 28328,
        "components/mobile/Roulette/pattern/ta7prod.scss": 60971,
        "components/mobile/Roulette/pattern/ta8prod.scss": 29506,
        "components/mobile/Roulette/pattern/tb9prod.scss": 43910,
        "components/mobile/Roulette/pattern/tc7prod.scss": 24853,
        "components/mobile/Roulette/pattern/u30prod.scss": 66359,
        "components/mobile/Roulette/pattern/unc0001.scss": 68661,
        "components/mobile/Roulette/pattern/vh7prod.scss": 37140,
        "components/mobile/Roulette/pattern/vn0prod.scss": 96223,
        "components/mobile/Roulette/pattern/x07prod.scss": 74466,
      };
      function o(e) {
        var t = n(e);
        return s(t);
      }
      function n(e) {
        if (!s.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return r[e];
      }
      (o.keys = function () {
        return Object.keys(r);
      }),
        (o.resolve = n),
        (e.exports = o),
        (o.id = 75678);
    },
    76035: (e, t, s) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = s(72596);
      const o = () => {
        let e = "";
        const t = Math.floor(4 * Math.random()),
          s = Math.floor(3 * Math.random()) + 3;
        switch (t) {
          case 1:
            e = `${(0, r.getRandomLowerChar)()}${(0, r.getRandomLowerChar)()}`;
            break;
          case 2:
            e = `${(0, r.getRandomLowerChar)()}${(0, r.getRandomNumberChar)()}`;
            break;
          case 3:
            e = `${(0, r.getRandomNumberChar)()}${(0, r.getRandomLowerChar)()}`;
            break;
          default:
            e = `${(0, r.getRandomNumberChar)()}${(0,
            r.getRandomNumberChar)()}`;
        }
        return `${e}${"*".repeat(s)}`;
      };
      t.default = (e) => {
        const t = () => {
          const t = Math.floor(Math.random() * e.length),
            s = e[t];
          return [
            "en-US",
            "es-MX",
            "hi-IN",
            "id-ID",
            "it-IT",
            "ja-JP",
            "km-KH",
            "ko-KR",
            "ml-IN",
            "ms-MY",
            "my-MM",
            "pt-BR",
            "ta-IN",
            "th-TH",
            "tl-PH",
            "vi-VN",
            "zh-CN",
            "zh-TW",
          ].reduce((e, t) => ((e[t] = s), e), {});
        };
        let s = [];
        for (let e = 0; e < 100; e++)
          s.push({
            playerId: o(),
            rewardType: "PRODUCT_GIFT",
            rewardContent: null,
            rewardName: t(),
            createTime: Date.now(),
            drawTime: Date.now(),
            pictureUrl: null,
          });
        return s;
      };
    },
    77325: (e, t, s) => {
      "use strict";
      var r = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        r(s(96540));
      var o = r(s(85935)),
        n = s(83597),
        a = s(51628),
        l = s(38560),
        i = r(s(46942)),
        c = s(74848);
      t.default = (e) => {
        let { amount: t, onClose: s } = e;
        return (0, c.jsx)(o.default, {
          className: (0, i.default)("reward-modal", {
            "is-mobile": l.isMobile,
          }),
          hasTitle: !1,
          button: !1,
          children: (0, c.jsx)("div", {
            className: "pfrl3ez",
            children: (0, c.jsxs)("div", {
              className: "sjfh21a",
              children: [
                (0, c.jsx)("img", {
                  className: "img-bg rotate",
                  src: `${n.staticImageUrl}k36proc/gold-bg.png`,
                  alt: "",
                }),
                (0, c.jsxs)("div", {
                  className: "bg-wrap",
                  children: [
                    (0, c.jsx)("img", {
                      className: "img_glod",
                      src: `${n.staticImageUrl}k36proc/gold-coin.png`,
                      alt: "",
                    }),
                    (0, c.jsxs)("div", {
                      className: "cont",
                      children: [
                        (0, c.jsxs)("div", {
                          className: "tit ttu",
                          children: [a.i18n.congratulations, "!"],
                        }),
                        (0, c.jsx)("div", {
                          className: "desc",
                          children: a.i18n["reg.roulette.reward.text"],
                        }),
                        (0, c.jsxs)("div", {
                          className: "scoll-num amount sxm7p3g",
                          children: [
                            t,
                            (0, c.jsx)("wbr", {}),
                            (0, c.jsx)("span", {
                              className: "currency-string",
                              children: n.defaultCurrencyI18n,
                            }),
                          ],
                        }),
                        (0, c.jsx)("button", {
                          className: "ui-button button-normal s-conic",
                          onClick: () => {
                            s && s();
                          },
                          children: (0, c.jsx)("div", {
                            className: "button-inner",
                            children: a.i18n["claim.rewards"],
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        });
      };
    },
    81808: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    81870: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    82556: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    86561: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    90520: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    93974: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    94831: (e, t, s) => {
      "use strict";
      s.r(t);
    },
    96223: (e, t, s) => {
      "use strict";
      s.r(t);
    },
  },
]);
