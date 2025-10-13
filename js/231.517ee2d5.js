"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [231],
  {
    4392: (e, a, t) => {
      t.r(a);
    },
    4466: (e, a, t) => {
      e.exports = t.p + "static/media/grass_right.0e3f3646..svg";
    },
    11698: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(63666));
      t(13071), (a.default = s.default);
    },
    13071: (e, a, t) => {
      t.r(a);
    },
    13479: (e, a, t) => {
      e.exports = t.p + "static/media/winner.8d4239de..jpg";
    },
    20808: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        r(t(96540));
      var s = r(t(46942)),
        i = r(t(52468)),
        n = t(51628),
        l = t(38560),
        d = t(74848);
      a.default = (e) => {
        let { time: a, type: t } = e;
        const r = "DepositRankingBoard" === t,
          c = r ? (a - new Date().getTime()) / 1e3 : a,
          {
            minutes: o,
            seconds: u,
            daysData: { days: p, hoursByDay: m },
          } = (0, i.default)({
            seconds: c,
          });
        return (0, d.jsxs)("div", {
          className: (0, s.default)(
            "race-count-down board-info-card countdown-time",
            {
              mobile: l.isMobile,
            }
          ),
          children: [
            (0, d.jsx)("div", {
              children: n.i18n["dr.leaderboard.audit.time"],
            }),
            (0, d.jsxs)("div", {
              className: "time-box-wrapper",
              children: [
                r &&
                  (0, d.jsxs)("div", {
                    className: "time-box",
                    children: [
                      (0, d.jsx)("span", {
                        children: p,
                      }),
                      n.i18n.days,
                    ],
                  }),
                (0, d.jsxs)("div", {
                  className: "time-box",
                  children: [
                    (0, d.jsx)("span", {
                      children: m,
                    }),
                    n.i18n.hours,
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: "time-box",
                  children: [
                    (0, d.jsx)("span", {
                      children: o,
                    }),
                    n.i18n.minutes,
                  ],
                }),
                (0, d.jsxs)("div", {
                  className: "time-box",
                  children: [
                    (0, d.jsx)("span", {
                      children: u,
                    }),
                    n.i18n.seconds,
                  ],
                }),
              ],
            }),
          ],
        });
      };
    },
    22928: (e, a, t) => {
      e.exports = t.p + "static/media/band.f74b97d6..svg";
    },
    24276: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(42700));
      t(84524), (a.default = s.default);
    },
    25718: (e, a, t) => {
      e.exports = t.p + "static/media/crown.f22fc3df..svg";
    },
    25859: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = t(67467),
        i = r(t(39921)),
        n = t(96540);
      a.default = () => {
        const { isShowEventRank: e } = (0, i.default)(),
          {
            ecDisplayLatestBet: a,
            ecDisplayHighRoller: t,
            ecDisplayRaceContest: r,
          } = (0, s.useSelector)((e) => e.dashboard.ecDisplaySetting);
        return {
          isShowBetAndRaceRanking: (0, n.useMemo)(
            () => e || a || t || r,
            [t, a, r, e]
          ),
        };
      };
    },
    26600: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(74036));
      t(68745), (a.default = s.default);
    },
    33474: (e, a, t) => {
      e.exports = t.p + "static/media/silver.78cdebc4..svg";
    },
    36243: (e, a, t) => {
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      const { default: r } = t(25859);
      a.default = (e) => {
        let { children: a } = e;
        const { isShowBetAndRaceRanking: t } = r();
        return t && a ? a : null;
      };
    },
    37684: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = t(96540),
        i = r(t(7541)),
        n = r(t(55665)),
        l = r(t(46942)),
        d = r(t(93110)),
        c = r(t(95093)),
        o = r(t(96384)),
        u = t(64856),
        p = r(t(62828)),
        m = r(t(83736)),
        f = r(t(15361)),
        h = t(72971),
        g = r(t(79764)),
        v = r(t(85935)),
        x = r(t(38748)),
        j = r(t(46288)),
        b = r(t(52557)),
        y = t(49021),
        N = t(83980),
        k = r(t(94188)),
        w = t(38560),
        P = t(70913),
        _ = t(51628),
        M = t(93185),
        R = r(t(24276)),
        I = r(t(11698)),
        D = t(74848);
      const T = _.i18n[k.default.defaultCurrency]
          ? `${_.i18n[k.default.defaultCurrency]}`
          : k.default.defaultCurrency,
        O = () => {
          const e = (0, s.useRef)(null),
            [a, t] = (0, s.useState)({
              basePrize: null,
              prizePoolChangeRate: 0,
              sec: 0,
            }),
            r = (0, s.useRef)({
              end: 0,
            }),
            n = (0, i.default)(y.getRacePrizePool),
            l = async () => {
              const e = await n();
              t(e);
            },
            { countUp: d, update: c } = (0, u.useCountUp)({
              start: a.basePrize,
              end: a.basePrize + a.prizePoolChangeRate,
              decimals: 2,
              separator: ",",
              duration: 1,
            }),
            o = () => {
              const e = r.current.end + a.prizePoolChangeRate;
              c(e),
                (r.current = {
                  end: e,
                });
            };
          return (
            (0, p.default)(() => l(), 12e4),
            (0, s.useEffect)(() => {
              l();
            }, []),
            (0, s.useEffect)(
              () => (
                a.sec > 0 &&
                  a.basePrize >= 0 &&
                  ((r.current = {
                    end: a.basePrize,
                  }),
                  o(),
                  (e.current = setInterval(() => {
                    o();
                  }, 1e3 * a.sec))),
                () => clearInterval(e.current)
              ),
              [a.basePrize]
            ),
            (0, D.jsx)("div", {
              className: "wager-amt text-yellow",
              children: d,
            })
          );
        };
      a.default = () => {
        const {
            player: { playerid: e },
            ecDisplaySetting: { playerPictureDisplay: a },
          } = (0, n.default)((e) => ({
            player: e.players.player,
            ecDisplaySetting: e.dashboard.ecDisplaySetting,
          })),
          t = (0, i.default)(y.getRaceInfo),
          r = (0, i.default)(y.getRaceRank),
          [u, k] = (0, s.useState)(),
          [L, C] = (0, s.useState)(!1),
          [
            {
              startDate: S,
              endDate: $,
              raceGameItemList: z,
              ecContentList: W,
              wagerAmount: E,
              myRank: U,
              previousRank: A,
              latestRank: B,
              basePrize: G,
              prizePoolChangeRate: Y,
              sec: V,
              isInit: H,
            },
            J,
          ] = (0, s.useState)({
            isInit: !1,
            raceGameItemList: [],
            ecContentList: [],
            previousRank: [],
            latestRank: [],
          }),
          q = (0, P.getCountdownSecondsByGMT8)(),
          F = (0, c.default)((0, P.dateTimezone)(8)).format(
            N.isVietnamese ? "DD/MM/YYYY" : "YYYY-MM-DD"
          ),
          {
            previousWinnerId: K,
            previousWinnderPictureUrl: Q,
            previousWinnerPrize: X,
            previousWinnerRate: Z,
          } = (0, s.useMemo)(() => {
            const e = A.find((e) => 1 === e.rank) || {};
            return {
              previousWinnerId: e.playerId,
              previousWinnderPictureUrl: e.pictureUrl,
              previousWinnerPrize: e.prize,
              previousWinnerRate: e.rankPrizeRate,
            };
          }, [A]),
          ee = W.find((e) => e.language === _.currLocale),
          ae = w.isMobile
            ? null == ee
              ? void 0
              : ee.mobileDescription
            : null == ee
            ? void 0
            : ee.desktopDescription,
          te = (0, s.useMemo)(() => {
            let e = "";
            if (U)
              if (1 === U)
                e = `<span class='text-yellow'>${_.i18n["dr.leaderboard.top.1.congrats"]}</span>`;
              else {
                var a, t, r;
                const s =
                    null === (a = B.find((e) => 10 === e.rank)) || void 0 === a
                      ? void 0
                      : a.wager,
                  i =
                    null === (t = B.find((e) => 1 === e.rank)) || void 0 === t
                      ? void 0
                      : t.wager,
                  n = U <= 10 && -1 !== U,
                  l =
                    s ||
                    (null === (r = B[B.length - 1]) || void 0 === r
                      ? void 0
                      : r.wager) ||
                    0,
                  c = n ? d.default.sub(i, E) : d.default.sub(l, E),
                  o = n ? 1 : 10;
                e = `${(0, M.i18nVariables)(
                  _.i18n["rr.leaderboard.more.wager"],
                  {
                    amount: `<span class='text-white'> ${c}(${T})</span>`,
                    rank: `<span class='text-yellow'>${
                      1 === o
                        ? _.i18n["dr.leaderboard.top.1"]
                        : (0, M.i18nVariables)(
                            _.i18n["dr.leaderboard.top.rank"],
                            {
                              target: o,
                            }
                          )
                    }</span>`,
                  }
                )}`;
              }
            else e = _.i18n["not.attached.in.the.ranking"];
            return {
              __html: e,
            };
          }, [U, B, E]),
          re = async () => {
            const [e, a] = await Promise.all([t(), r()]);
            J({
              ...e,
              ...a,
              isInit: !0,
            });
          },
          se = (0, s.useCallback)(() => {
            var e, a;
            const t = new Date().getDay(),
              r = (0 === t ? z.length : t) - 1,
              s =
                (null === (e = z[r]) || void 0 === e ? void 0 : e.ecName) ||
                (null === (a = z[0]) || void 0 === a ? void 0 : a.ecName);
            return (0, M.getNameByObj)(s);
          }, [z]);
        return (
          (0, p.default)(() => {
            re();
          }, 6e5),
          (0, f.default)(() => {
            e && re();
          }, [e]),
          (0, m.default)(() => {
            re();
          }),
          (0, D.jsxs)("div", {
            className: "race-ranking-board-container",
            children: [
              H
                ? 0 !== B.length || S
                  ? (0, D.jsxs)("div", {
                      className: "rr-board-content",
                      children: [
                        (0, D.jsxs)("div", {
                          className: (0, l.default)("rr-board-info", {
                            mobile: w.isMobile,
                          }),
                          children: [
                            (0, D.jsxs)("div", {
                              className: "board-info-card prize-pool",
                              children: [
                                (0, D.jsx)("img", {
                                  alt: "trophy",
                                  src: h.trophyImg,
                                }),
                                (0, D.jsxs)("div", {
                                  className: "right-box",
                                  children: [
                                    (0, D.jsxs)("div", {
                                      className: "title text-high-light",
                                      children: [
                                        (0, D.jsx)("img", {
                                          src: h.grassLeftImg,
                                          alt: "grass-left",
                                        }),
                                        (0, D.jsx)("span", {
                                          children: se(),
                                        }),
                                        (0, D.jsx)("img", {
                                          src: h.grassRightImg,
                                          alt: "grass-right",
                                        }),
                                      ],
                                    }),
                                    (0, D.jsxs)("div", {
                                      children: [
                                        _.i18n["rr.rankingboard.prizepool"],
                                        (0, D.jsx)("span", {
                                          className: "text-yellow",
                                          children: ` (${T})`,
                                        }),
                                      ],
                                    }),
                                    (0, D.jsx)(O, {
                                      basePrize: G,
                                      prizePoolChangeRate: Y,
                                      sec: V,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, D.jsx)(j.default, {
                              time: q,
                            }),
                            (0, D.jsxs)("div", {
                              className: "board-info-card previous-champion",
                              children: [
                                (0, D.jsxs)("div", {
                                  className: "winner-band",
                                  children: [
                                    (0, D.jsx)("img", {
                                      alt: "winner",
                                      src: h.winnnerImg,
                                    }),
                                    (0, D.jsx)("span", {
                                      className: "winner-text text-white",
                                      children: _.i18n["dr.leaderboard.winner"],
                                    }),
                                  ],
                                }),
                                K &&
                                  a &&
                                  (0, D.jsxs)("div", {
                                    className: "winner-avatar",
                                    children: [
                                      (0, D.jsx)(x.default, {
                                        otherUserAvatarUrl: Q,
                                      }),
                                      (0, D.jsx)("img", {
                                        className: "avatar-crown",
                                        alt: "champion",
                                        src: h.crownImg,
                                      }),
                                    ],
                                  }),
                                (0, D.jsxs)("div", {
                                  className: "right-box",
                                  children: [
                                    ae &&
                                      (0, D.jsx)("div", {
                                        className: "more-icon",
                                        onClick: () => k(ae),
                                        children: "?",
                                      }),
                                    (0, D.jsxs)("div", {
                                      className: "champion-header",
                                      children: [
                                        (0, D.jsx)("img", {
                                          className: "crown",
                                          alt: "champion",
                                          src: h.crownImg,
                                        }),
                                        _.i18n[
                                          "dr.leaderboard.previous.champion"
                                        ],
                                      ],
                                    }),
                                    (0, D.jsx)("div", {
                                      className: "text-white",
                                      children: K || _.i18n.none,
                                    }),
                                    (0, D.jsxs)("div", {
                                      children: [
                                        _.i18n["rr.rankingboard.profit"],
                                        (0, D.jsx)("span", {
                                          className: "text-high-light",
                                          children: ` ${X || _.i18n.none}`,
                                        }),
                                        (0, D.jsx)("span", {
                                          className: "text-high-light",
                                          children: ` (${T})`,
                                        }),
                                        Z && ` (${d.default.mul(100, Z)}%)`,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            e &&
                              (0, D.jsxs)("div", {
                                className: "board-info-card player-data",
                                children: [
                                  (0, D.jsxs)("div", {
                                    className: "player-id text-white",
                                    children: [(0, D.jsx)(x.default, {}), e],
                                  }),
                                  (0, D.jsxs)("div", {
                                    className: "data-box player-rank",
                                    children: [
                                      (0, D.jsx)("div", {
                                        className: "data-title",
                                        children:
                                          _.i18n["dr.leaderboard.my.ranking"],
                                      }),
                                      (0, D.jsx)("div", {
                                        className: "text-yellow",
                                        children: -1 === U ? "10+" : U,
                                      }),
                                    ],
                                  }),
                                  (0, D.jsxs)("div", {
                                    className: "data-box player-wager",
                                    children: [
                                      (0, D.jsxs)("div", {
                                        className: "data-title",
                                        children: [
                                          _.i18n["rr.rankingboard.current.bet"],
                                          (0, D.jsxs)("span", {
                                            className: "text-yellow",
                                            children: ["(", T, ")"],
                                          }),
                                        ],
                                      }),
                                      (0, D.jsx)("div", {
                                        className: "text-yellow",
                                        children: E,
                                      }),
                                    ],
                                  }),
                                  (0, D.jsx)("div", {
                                    className: "data-box wager-more",
                                    dangerouslySetInnerHTML: te,
                                  }),
                                ],
                              }),
                          ],
                        }),
                        (0, D.jsxs)("div", {
                          className: "rr-board-ranking",
                          children: [
                            (0, D.jsxs)("div", {
                              className: "ranking-header",
                              children: [
                                (0, D.jsxs)("div", {
                                  className: "rr-board-period",
                                  children: [
                                    (0, D.jsx)("div", {
                                      className: "period-title text-white",
                                      children:
                                        _.i18n["rr.rankingboard.period"],
                                    }),
                                    (0, D.jsx)("div", {
                                      className: "triangle",
                                    }),
                                    (0, D.jsx)("span", {
                                      className: "period-date",
                                      children: F,
                                    }),
                                  ],
                                }),
                                A.length > 0 &&
                                  (0, D.jsx)(o.default, {
                                    className: "history-btn",
                                    onClick: () => C(!0),
                                    children: _.i18n["rr.rankingboard.history"],
                                  }),
                              ],
                            }),
                            (0, D.jsx)(I.default, {
                              rankingData: B,
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, D.jsxs)("div", {
                      className: "no-data",
                      children: [
                        (0, D.jsx)("i", {
                          className: "mps-history",
                        }),
                        (0, D.jsx)("p", {
                          children: _.i18n["ranking.on.prepare"],
                        }),
                      ],
                    })
                : (0, D.jsx)(b.default, {}),
              (u || null === u) &&
                (0, D.jsx)(v.default, {
                  className: "rr-promo-desc-modal",
                  hasTitle: !1,
                  onClose: () => k(""),
                  children: (0, D.jsx)("div", {
                    className: "rr-promo-desc-content",
                    children: (0, D.jsx)(g.default, {
                      content: u,
                    }),
                  }),
                }),
              L &&
                (0, D.jsx)(R.default, {
                  onClose: () => C(!1),
                  previousRank: A,
                }),
            ],
          })
        );
      };
    },
    38571: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(37684));
      t(4392), (a.default = s.default);
    },
    40552: (e, a, t) => {
      t.r(a);
    },
    41373: (e, a, t) => {
      t.r(a);
    },
    42700: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        r(t(96540));
      var s = r(t(85935)),
        i = r(t(11698)),
        n = t(51628),
        l = t(70913),
        d = t(74848);
      a.default = (e) => {
        var a;
        let { onClose: t, previousRank: r } = e;
        const c =
          (0, l.formatDate)(
            null === (a = r[0]) || void 0 === a ? void 0 : a.contestDate
          ) || "";
        return (0, d.jsx)(s.default, {
          className: "rr-board-history-modal",
          title: `${n.i18n["rr.rankingboard.history"]} ${c}`,
          onClose: () => {
            t && t();
          },
          children: (0, d.jsx)(i.default, {
            rankingData: r,
          }),
        });
      };
    },
    46288: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(20808));
      t(41373), (a.default = s.default);
    },
    48208: (e, a, t) => {
      e.exports = t.p + "static/media/trophy.7fee18a0..jpg";
    },
    49021: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.getRaceRank = a.getRacePrizePool = a.getRaceInfo = void 0);
      var s = r(t(47186)),
        i = r(t(32080)),
        n = t(68686),
        l = t(51628),
        d = t(8087);
      (a.getRaceInfo = () => {
        const e = s.default.stringify({
          locale: l.currLocale,
          raceType: d.raceTypeEnum.BET_AMOUNT,
        });
        return (0, i.default)({
          url: `${n.baseURL}/race/info?${e}`,
          method: "GET",
        });
      }),
        (a.getRaceRank = () => {
          const e = s.default.stringify({
            raceType: d.raceTypeEnum.BET_AMOUNT,
          });
          return (0, i.default)({
            url: `${n.baseURL}/race/rank?${e}`,
            method: "GET",
          });
        }),
        (a.getRacePrizePool = () => {
          const e = s.default.stringify({
            raceType: d.raceTypeEnum.BET_AMOUNT,
          });
          return (0, i.default)({
            url: `${n.baseURL}/race/prizePool?${e}`,
            method: "GET",
          });
        });
    },
    50205: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(98244));
      t(40552), (a.default = s.default);
    },
    52557: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        r(t(96540)),
        t(65691);
      var s = t(74848);
      const i = (e) => {
        let { width: a, height: t, marginTop: r } = e;
        return (0, s.jsxs)("div", {
          className: "sk-fading-circle",
          style: {
            width: a,
            height: t,
            marginTop: r,
          },
          children: [
            (0, s.jsx)("div", {
              className: "sk-circle1 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle2 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle3 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle4 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle5 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle6 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle7 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle8 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle9 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle10 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle11 sk-circle",
            }),
            (0, s.jsx)("div", {
              className: "sk-circle12 sk-circle",
            }),
          ],
        });
      };
      (i.defaultProps = {
        width: 60,
        height: 60,
        marginTop: 60,
      }),
        (a.default = i);
    },
    54262: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        r(t(96540));
      var s = r(t(39808)),
        i = r(t(46942)),
        n = t(74848);
      a.default = (e) => {
        let { content: a, className: t = "" } = e;
        try {
          if (null === a) throw "content === null";
          return (
            JSON.parse(a),
            (0, n.jsx)(s.default, {
              className: t,
              defaultValue: a,
            })
          );
        } catch (e) {
          const r = a || "";
          return (0, n.jsx)("div", {
            className: (0, i.default)("nrc-editor-view-mode", {
              [t]: !!t,
            }),
            dangerouslySetInnerHTML: {
              __html: r,
            },
          });
        }
      };
    },
    62173: (e, a, t) => {
      e.exports = t.p + "static/media/bronze.3865b81b..svg";
    },
    63666: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        r(t(96540));
      var s = r(t(94188)),
        i = r(t(93110)),
        n = r(t(46942)),
        l = t(72971),
        d = r(t(38748)),
        c = t(51628),
        o = t(38560),
        u = t(74848);
      const p = c.i18n[s.default.defaultCurrency]
          ? `${c.i18n[s.default.defaultCurrency]}`
          : s.default.defaultCurrency,
        m = {
          1: l.goldImg,
          2: l.silverImg,
          3: l.bronzeImg,
        },
        f = (e) => {
          if (e <= 3) {
            const a = m[e];
            return a
              ? (0, u.jsx)("img", {
                  alt: `rank-${e}`,
                  src: a,
                })
              : null;
          }
          return `${e}th`;
        };
      a.default = (e) => {
        let { rankingData: a } = e;
        return (0, u.jsxs)("div", {
          className: (0, n.default)("rr-board-table", {
            mobile: o.isMobile,
          }),
          children: [
            (0, u.jsxs)("div", {
              className: "rr-board-table-row header",
              children: [
                (0, u.jsx)("span", {
                  className: "rank",
                  children: "#",
                }),
                (0, u.jsx)("span", {
                  children: c.i18n.account,
                }),
                (0, u.jsxs)("span", {
                  children: [c.i18n["rr.wagered"], " (", p, ")"],
                }),
                (0, u.jsxs)("span", {
                  children: [c.i18n["rr.rankingboard.prize"], " (", p, ")"],
                }),
              ],
            }),
            a.map((e, a) =>
              (0, u.jsxs)(
                "div",
                {
                  className: "rr-board-table-row",
                  children: [
                    (0, u.jsx)("span", {
                      className: "rank",
                      children: f(e.rank),
                    }),
                    (0, u.jsxs)("span", {
                      children: [
                        (0, u.jsx)(d.default, {
                          otherUserAvatarUrl: null,
                        }),
                        e.playerId,
                      ],
                    }),
                    (0, u.jsx)("span", {
                      className: "text-high-light",
                      children: e.wager,
                    }),
                    (0, u.jsxs)("span", {
                      className: "text-high-light",
                      children: [
                        e.prize,
                        " ",
                        (0, u.jsx)("span", {
                          className: "prize-rate",
                          children: `(${i.default.mul(100, e.rankPrizeRate)}%)`,
                        }),
                      ],
                    }),
                  ],
                },
                a
              )
            ),
          ],
        });
      };
    },
    65691: (e, a, t) => {
      t.r(a);
    },
    68727: (e, a, t) => {
      e.exports = t.p + "static/media/grass_left.0570b93a..svg";
    },
    68745: (e, a, t) => {
      t.r(a);
    },
    72971: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(a, "bandImg", {
          enumerable: !0,
          get: function () {
            return p.default;
          },
        }),
        Object.defineProperty(a, "bronzeImg", {
          enumerable: !0,
          get: function () {
            return u.default;
          },
        }),
        Object.defineProperty(a, "crownImg", {
          enumerable: !0,
          get: function () {
            return l.default;
          },
        }),
        Object.defineProperty(a, "goldImg", {
          enumerable: !0,
          get: function () {
            return c.default;
          },
        }),
        Object.defineProperty(a, "grassLeftImg", {
          enumerable: !0,
          get: function () {
            return s.default;
          },
        }),
        Object.defineProperty(a, "grassRightImg", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        }),
        Object.defineProperty(a, "silverImg", {
          enumerable: !0,
          get: function () {
            return o.default;
          },
        }),
        Object.defineProperty(a, "trophyImg", {
          enumerable: !0,
          get: function () {
            return n.default;
          },
        }),
        Object.defineProperty(a, "winnnerImg", {
          enumerable: !0,
          get: function () {
            return d.default;
          },
        });
      var s = r(t(68727)),
        i = r(t(4466)),
        n = r(t(48208)),
        l = r(t(25718)),
        d = r(t(13479)),
        c = r(t(79991)),
        o = r(t(33474)),
        u = r(t(62173)),
        p = r(t(22928));
    },
    74036: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = M(t(96540)),
        i = r(t(83736)),
        n = r(t(62828)),
        l = r(t(15361)),
        d = r(t(46942)),
        c = r(t(5556)),
        o = r(t(93110)),
        u = r(t(94188)),
        p = r(t(52557)),
        m = t(72971),
        f = r(t(85935)),
        h = r(t(79764)),
        g = r(t(38748)),
        v = r(t(46288)),
        x = t(93185),
        j = t(51628),
        b = r(t(55665)),
        y = r(t(39921)),
        N = r(t(7541)),
        k = t(38560),
        w = t(70913),
        P = M(t(53719)),
        _ = t(74848);
      function M(e, a) {
        if ("function" == typeof WeakMap)
          var t = new WeakMap(),
            r = new WeakMap();
        return (M = function (e, a) {
          if (!a && e && e.__esModule) return e;
          var s,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((s = a ? r : t)) {
            if (s.has(e)) return s.get(e);
            s.set(e, n);
          }
          for (const a in e)
            "default" !== a &&
              {}.hasOwnProperty.call(e, a) &&
              ((i =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, a)) &&
              (i.get || i.set)
                ? s(n, a, i)
                : (n[a] = e[a]));
          return n;
        })(e, a);
      }
      const R = {
          1: m.goldImg,
          2: m.silverImg,
          3: m.bronzeImg,
        },
        I = j.i18n[u.default.defaultCurrency]
          ? `${j.i18n[u.default.defaultCurrency]}`
          : u.default.defaultCurrency,
        D = (e, a) => {
          const {
              rewardActivityList: { depositLeaderboard: t },
              player: { maxshowingrank: r, playerid: c },
            } = (0, b.default)((e) => ({
              player: e.players.player,
              rewardActivityList: e.dashboard.rewardActivityList,
            })),
            { isShowEventRank: u } = (0, y.default)(a.toggleLoginPopup),
            M = (0, N.default)(P.getDepositRankingInfo),
            [D, T] = (0, s.useState)(),
            [
              {
                eventStatisticsStartTime: O,
                eventStatisticsEndTime: L,
                event10thTotalDeposit: C,
                event1stTotalDeposit: S,
                eventMyTotalDeposit: $,
                eventMyDepositRanking: z,
                eventDesktopBannerDescription: W,
                eventMobileBannerDescription: E,
                previousSessionWinnerId: U,
                previousSessionPictureUrl: A,
                previousSessionTotalDeposit: B,
                dailyWinnerTotalDeposit: G,
                viewDepositRankingWinner: Y,
                isInit: V,
              },
              H,
            ] = (0, s.useState)({
              isInit: !1,
              viewDepositRankingWinner: [],
            }),
            J = k.isMobile ? E : W,
            q = (e) => {
              if (e <= 3) {
                const a = R[e];
                return a
                  ? (0, _.jsx)("img", {
                      alt: `rank-${e}`,
                      src: a,
                    })
                  : null;
              }
              return `${e}th`;
            },
            F = (0, s.useMemo)(
              () =>
                -1 === z
                  ? `${r}+`
                  : -2 === z
                  ? j.i18n["not.attached.in.the.ranking"]
                  : z,
              [z, r]
            ),
            K = (0, s.useMemo)(() => {
              let e = "";
              if (z >= -1)
                if (1 === z)
                  e = `<span class='text-yellow'>${j.i18n["dr.leaderboard.top.1.congrats"]}</span>`;
                else {
                  var a;
                  const t = z <= 10 && -1 !== z,
                    r =
                      C ||
                      (null === (a = Y[Y.length - 1]) || void 0 === a
                        ? void 0
                        : a.accumulatedAmount) ||
                      0,
                    s = t ? o.default.sub(S, $) : o.default.sub(r, $),
                    i = t ? 1 : 10;
                  e = `${(0, x.i18nVariables)(
                    j.i18n["dr.leaderboard.more.deposit"],
                    {
                      deposit: `<span class='text-white'> ${s}(${I})</span>`,
                      rank: `<span class='text-yellow'>${
                        1 === i
                          ? j.i18n["dr.leaderboard.top.1"]
                          : (0, x.i18nVariables)(
                              j.i18n["dr.leaderboard.top.rank"],
                              {
                                target: i,
                              }
                            )
                      }</span>`,
                    }
                  )}`;
                }
              else e = j.i18n["not.attached.in.the.ranking"];
              return {
                __html: e,
              };
            }, [z, C, Y, S, $]),
            Q = () => {
              M(t.promoid).then((e) => {
                H({
                  ...e,
                  viewDepositRankingWinner: e.viewDepositRankingWinner || [],
                  isInit: !0,
                });
              });
            };
          return (
            (0, n.default)(() => {
              Q();
            }, 3e5),
            (0, l.default)(() => {
              c && Q();
            }, [c]),
            (0, i.default)(() => {
              Q();
            }),
            u
              ? (0, _.jsxs)("div", {
                  className: "deposit-ranking-board-container",
                  children: [
                    V
                      ? 0 === Y.length
                        ? (0, _.jsxs)("div", {
                            className: "no-data",
                            children: [
                              (0, _.jsx)("i", {
                                className: "mps-history",
                              }),
                              (0, _.jsx)("p", {
                                children: j.i18n["ranking.on.prepare"],
                              }),
                            ],
                          })
                        : (0, _.jsxs)("div", {
                            className: "dr-board-content",
                            children: [
                              (0, _.jsxs)("div", {
                                className: (0, d.default)("dr-board-info", {
                                  mobile: k.isMobile,
                                }),
                                children: [
                                  (0, _.jsxs)("div", {
                                    className:
                                      "board-info-card highest-deposit",
                                    children: [
                                      (0, _.jsx)("img", {
                                        alt: "trophy",
                                        src: m.trophyImg,
                                      }),
                                      (0, _.jsxs)("div", {
                                        className: "right-box",
                                        children: [
                                          (0, _.jsxs)("div", {
                                            className: "title text-high-light",
                                            children: [
                                              J &&
                                                (0, _.jsx)("div", {
                                                  className: "more-icon",
                                                  onClick: () => T(J),
                                                  children: "?",
                                                }),
                                              (0, _.jsx)("img", {
                                                src: m.grassLeftImg,
                                                alt: "grass-left",
                                              }),
                                              (0, _.jsx)("span", {
                                                children:
                                                  j.i18n[
                                                    "dr.leaderboard.daily"
                                                  ],
                                              }),
                                              (0, _.jsx)("img", {
                                                src: m.grassRightImg,
                                                alt: "grass-right",
                                              }),
                                            ],
                                          }),
                                          (0, _.jsxs)("div", {
                                            children: [
                                              j.i18n[
                                                "dr.leaderboard.total.deposit"
                                              ],
                                              (0, _.jsx)("span", {
                                                className: "text-yellow",
                                                children: ` (${I})`,
                                              }),
                                            ],
                                          }),
                                          (0, _.jsx)("div", {
                                            className:
                                              "deposit-amt text-yellow",
                                            children: G,
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, _.jsx)(v.default, {
                                    time: L,
                                    type: "DepositRankingBoard",
                                  }),
                                  (0, _.jsxs)("div", {
                                    className:
                                      "board-info-card previous-champion",
                                    children: [
                                      (0, _.jsxs)("div", {
                                        className: "winner-band",
                                        children: [
                                          (0, _.jsx)("img", {
                                            alt: "winner",
                                            src: m.winnnerImg,
                                          }),
                                          (0, _.jsx)("span", {
                                            className: "winner-text text-white",
                                            children:
                                              j.i18n["dr.leaderboard.winner"],
                                          }),
                                        ],
                                      }),
                                      U &&
                                        (0, _.jsxs)("div", {
                                          className: "winner-avatar",
                                          children: [
                                            (0, _.jsx)(g.default, {
                                              otherUserAvatarUrl: A,
                                            }),
                                            (0, _.jsx)("img", {
                                              className: "avatar-crown",
                                              alt: "champion",
                                              src: m.crownImg,
                                            }),
                                          ],
                                        }),
                                      (0, _.jsxs)("div", {
                                        className: "right-box",
                                        children: [
                                          (0, _.jsxs)("div", {
                                            children: [
                                              (0, _.jsx)("img", {
                                                className: "crown",
                                                alt: "champion",
                                                src: m.crownImg,
                                              }),
                                              j.i18n[
                                                "dr.leaderboard.previous.champion"
                                              ],
                                            ],
                                          }),
                                          (0, _.jsx)("div", {
                                            className: "text-white",
                                            children: U || "N/A",
                                          }),
                                          (0, _.jsxs)("div", {
                                            children: [
                                              j.i18n[
                                                "dr.leaderboard.total.deposit"
                                              ],
                                              " ",
                                              (0, _.jsx)("span", {
                                                className: "text-high-light",
                                                children: ` (${I})`,
                                              }),
                                              " ",
                                              (0, _.jsx)("span", {
                                                className: "text-high-light",
                                                children: B || "N/A",
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  c &&
                                    (0, _.jsxs)("div", {
                                      className: "board-info-card player-data",
                                      children: [
                                        (0, _.jsxs)("div", {
                                          className: "player-id text-white",
                                          children: [
                                            (0, _.jsx)(g.default, {}),
                                            c,
                                          ],
                                        }),
                                        (0, _.jsxs)("div", {
                                          className: "data-box player-rank",
                                          children: [
                                            (0, _.jsx)("div", {
                                              className: "data-title",
                                              children:
                                                j.i18n[
                                                  "dr.leaderboard.my.ranking"
                                                ],
                                            }),
                                            (0, _.jsx)("div", {
                                              className: "text-yellow",
                                              children: F,
                                            }),
                                          ],
                                        }),
                                        (0, _.jsxs)("div", {
                                          className: "data-box player-deposit",
                                          children: [
                                            (0, _.jsxs)("div", {
                                              className: "data-title",
                                              children: [
                                                j.i18n[
                                                  "dr.leaderboard.curr.total.deposit"
                                                ],
                                                (0, _.jsxs)("span", {
                                                  className: "text-yellow",
                                                  children: ["(", I, ")"],
                                                }),
                                              ],
                                            }),
                                            (0, _.jsx)("div", {
                                              className: "text-yellow",
                                              children: $,
                                            }),
                                          ],
                                        }),
                                        (0, _.jsx)("div", {
                                          className: "data-box deposit-more",
                                          dangerouslySetInnerHTML: K,
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, _.jsxs)("div", {
                                className: "dr-board-ranking",
                                children: [
                                  (0, _.jsxs)("div", {
                                    className: "dr-board-period",
                                    children: [
                                      (0, _.jsx)("div", {
                                        className: "period-title text-white",
                                        children: j.i18n["mission.period"],
                                      }),
                                      (0, _.jsx)("div", {
                                        className: "triangle",
                                      }),
                                      (0, _.jsxs)("span", {
                                        className: "period-date",
                                        children: [
                                          (0, w.formatDate)(O),
                                          " ~ ",
                                          (0, w.formatDate)(L),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, _.jsxs)("div", {
                                    className: "dr-board-table",
                                    children: [
                                      (0, _.jsxs)("div", {
                                        className: "dr-board-table-row header",
                                        children: [
                                          (0, _.jsx)("span", {
                                            children: "#",
                                          }),
                                          (0, _.jsx)("span", {
                                            children: j.i18n.account,
                                          }),
                                          (0, _.jsx)("span", {
                                            children: j.i18n["deposit.time"],
                                          }),
                                          (0, _.jsx)("span", {
                                            children:
                                              j.i18n[
                                                "dr.leaderboard.total.deposit"
                                              ],
                                          }),
                                        ],
                                      }),
                                      Y.map((e, a) =>
                                        (0, _.jsxs)(
                                          "div",
                                          {
                                            className: "dr-board-table-row",
                                            children: [
                                              (0, _.jsx)("span", {
                                                children: q(e.rank),
                                              }),
                                              (0, _.jsxs)("span", {
                                                children: [
                                                  (0, _.jsx)(g.default, {
                                                    otherUserAvatarUrl:
                                                      e.pictureUrl,
                                                  }),
                                                  e.playerId,
                                                ],
                                              }),
                                              (0, _.jsx)("span", {
                                                className: "deposit-time",
                                                children: (0, w.formatDateTime)(
                                                  e.lastDepositTime
                                                ),
                                              }),
                                              (0, _.jsx)("span", {
                                                className: "text-high-light",
                                                children: e.accumulatedAmount,
                                              }),
                                            ],
                                          },
                                          a
                                        )
                                      ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          })
                      : (0, _.jsx)(p.default, {}),
                    (D || null === D) &&
                      (0, _.jsx)(f.default, {
                        className: "dr-promo-desc-modal",
                        hasTitle: !1,
                        onClose: () => T(""),
                        children: (0, _.jsx)("div", {
                          className: "dr-promo-desc-content",
                          children: (0, _.jsx)(h.default, {
                            content: D,
                          }),
                        }),
                      }),
                  ],
                })
              : null
          );
        };
      (D.contextTypes = {
        toggleLoginPopup: c.default.func,
      }),
        (a.default = D);
    },
    79764: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = r(t(54262));
      a.default = s.default;
    },
    79991: (e, a, t) => {
      e.exports = t.p + "static/media/gold.b279ef91..svg";
    },
    80274: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = t(96540),
        i = r(t(63237)),
        n = r(t(55665));
      a.default = (e) => {
        const a = (0, i.default)({
            toggleLoginPopup: e,
          }),
          { gameTypeMap: t } = (0, n.default)((e) => ({
            gameTypeMap: e.games.gameTypeMap,
          }));
        return (0, s.useCallback)(
          (e) => {
            try {
              const {
                distributorId: r,
                gameProviderId: s,
                gameId: i,
                productTypeId: n,
              } = e.toJS();
              let l;
              if ("LIVE" === n) {
                const e = t.get(n).filter((e) => e.get("gameproviderid") === s);
                l = e.getIn([0, "gameid"]);
              }
              a({
                producttypeid: n,
                distributorid: r,
                gameproviderid: s,
                gameid: l || i,
              });
            } catch (e) {}
          },
          [a, t]
        );
      };
    },
    84524: (e, a, t) => {
      t.r(a);
    },
    92617: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              s = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return s;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, s);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(s, a, r)
                  : (s[a] = e[a]));
            return s;
          })(e);
        })(t(96540)),
        i = r(t(55665)),
        n = r(t(34059)),
        l = r(t(46942)),
        d = r(t(96384)),
        c = r(t(5556)),
        o = t(67467),
        u = r(t(83736)),
        p = r(t(60781)),
        m = t(4347),
        f = t(38560),
        h = t(16510),
        g = t(51628),
        v = r(t(80274)),
        x = t(74848);
      const j = (e, a) => {
        let { type: t, onEnterTable: r, onLeaveTable: c } = e;
        const j = (0, o.useDispatch)(),
          b = (0, n.default)(),
          { raceRecord: y, allGameNameMap: N } = (0, i.default)((e) => ({
            raceRecord: e.games.raceRecord,
            allGameNameMap: e.games.allGameNameMap,
          })),
          [k, w] = (0, p.default)(!1),
          P = (0, v.default)(a.toggleLoginPopup),
          _ = y.get(t),
          M = (0, s.useMemo)(() => (k ? _ : _.slice(0, 10)), [_, k]);
        return (
          (0, u.default)(() => {
            0 === N.size && j((0, m.getAllGameName)());
          }),
          (0, x.jsxs)("div", {
            className: (0, l.default)("winner-table", {
              [t]: !!t,
            }),
            children: [
              (0, x.jsxs)("table", {
                className: "winner-list",
                children: [
                  (0, x.jsx)("thead", {
                    children: (0, x.jsxs)("tr", {
                      children: [
                        (0, x.jsx)("th", {
                          className: "gp-td",
                          children: g.i18n["latest.bet.and.race.provider"],
                        }),
                        (0, x.jsx)("th", {
                          children: g.i18n["latest.bet.and.race.game.name"],
                        }),
                        (0, x.jsx)("th", {
                          children: g.i18n["latest.bet.and.race.account"],
                        }),
                        f.isDesktop &&
                          (0, x.jsx)("th", {
                            children: g.i18n["bet.amount"],
                          }),
                        (0, x.jsx)("th", {
                          children: g.i18n["latest.bet.and.race.game.win.loss"],
                        }),
                      ],
                    }),
                  }),
                  (0, x.jsx)("tbody", {
                    onMouseEnter: r,
                    onMouseLeave: c,
                    children: M.map((e, a) =>
                      (0, x.jsxs)(
                        "tr",
                        {
                          className: "winner-item",
                          onClick: () => P(e),
                          children: [
                            (0, x.jsxs)("td", {
                              "data-gameproviderid": e.get("gameProviderId"),
                              className: "gp-td",
                              children: [
                                (0, x.jsx)("div", {
                                  className: "gp-logo-wrap",
                                  children: (0, x.jsx)("img", {
                                    src: `../images/gplogo/v-dark/${e
                                      .get("gameProviderId")
                                      .toLowerCase()}.png`,
                                    alt: `gp-${b(e.get("gameProviderId"))}`,
                                    className: "gp-logo",
                                  }),
                                }),
                                (0, x.jsx)("div", {
                                  className: "winner-item-gp",
                                  children: b(e.get("gameProviderId")),
                                }),
                              ],
                            }),
                            (0, x.jsx)("td", {
                              children: e.get("gameName"),
                            }),
                            (0, x.jsx)("td", {
                              className: "item-name",
                              children: (0, x.jsxs)("div", {
                                className: "item-user",
                                children: [
                                  (0, x.jsx)("i", {
                                    className: "mps-user-full",
                                  }),
                                  (0, x.jsx)("div", {
                                    children: e.get("playerId"),
                                  }),
                                ],
                              }),
                            }),
                            f.isDesktop &&
                              (0, x.jsx)("td", {
                                children: (0, h.formatMoney)(
                                  e.get("betAmount")
                                ),
                              }),
                            (0, x.jsx)("td", {
                              className: (0, l.default)({
                                loss: e.get("winLoss") < 0,
                                win: e.get("winLoss") > 0,
                              }),
                              children: (0, h.formatMoney)(e.get("winLoss")),
                            }),
                          ],
                        },
                        a
                      )
                    ),
                  }),
                ],
              }),
              _.size > 10 &&
                (0, x.jsx)("div", {
                  className: "show-more-btn",
                  children: (0, x.jsxs)(d.default, {
                    onClick: w,
                    children: [
                      k ? g.i18n["show.less"] : g.i18n["show.more"],
                      (0, x.jsx)("i", {
                        className: "mps-arrow-" + (k ? "up" : "down"),
                      }),
                    ],
                  }),
                }),
            ],
          })
        );
      };
      (j.contextTypes = {
        toggleLoginPopup: c.default.func,
      }),
        (a.default = j);
    },
    98244: (e, a, t) => {
      var r = t(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var t,
              r,
              s = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return s;
            if ((t = a)) {
              if (t.has(e)) return t.get(e);
              t.set(e, s);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((r =
                  (t = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (r.get || r.set)
                  ? t(s, a, r)
                  : (s[a] = e[a]));
            return s;
          })(e);
        })(t(96540)),
        i = r(t(39921)),
        n = t(38751),
        l = r(t(75618)),
        d = r(t(13371)),
        c = t(67467),
        o = r(t(26600)),
        u = r(t(38571)),
        p = t(4347),
        m = t(8087),
        f = t(51628),
        h = r(t(92617)),
        g = t(74848);
      a.default = () => {
        const e = (0, s.useRef)(!1),
          a = (0, c.useDispatch)(),
          {
            webSocket: t,
            connectWebsocket: r,
            subscribe: v,
            unSubscribe: x,
          } = (0, n.useWebSocket)(),
          {
            ecDisplayLatestBet: j,
            ecDisplayHighRoller: b,
            ecDisplayRaceContest: y,
          } = (0, c.useSelector)((e) => e.dashboard.ecDisplaySetting),
          { isShowEventRank: N } = (0, i.default)(),
          k = (0, s.useMemo)(() => (j ? "1" : b ? "2" : "3"), [b, j]);
        (0, s.useEffect)(() => {
          (null == t ? void 0 : t.readyState) !== n.webSocketStatusEnum.OPEN &&
            (j || b) &&
            r();
        }, [j, b, t, r]),
          (0, s.useEffect)(
            () => (
              v(m.socketType.RaceDataType, (t) => {
                let { raceRecord: r } = t;
                e.current || a((0, p.updateRaceRecordList)(r));
              }),
              () => {
                x(m.socketType.RaceDataType);
              }
            ),
            []
          );
        const w = () => {
            e.current = !0;
          },
          P = () => {
            e.current = !1;
          };
        return (0, g.jsx)("div", {
          className: "latest-bet-race",
          children: (0, g.jsxs)(d.default, {
            defaultActiveIndex: k,
            onChange: P,
            children: [
              j &&
                (0, g.jsx)(l.default, {
                  index: "1",
                  tab: f.i18n["daily.bet"],
                  children: (0, g.jsx)(h.default, {
                    type: "latestBetList",
                    onEnterTable: w,
                    onLeaveTable: P,
                  }),
                }),
              b &&
                (0, g.jsx)(l.default, {
                  index: "2",
                  tab: f.i18n["daily.larger.bet"],
                  children: (0, g.jsx)(h.default, {
                    type: "highRollerList",
                    onEnterTable: w,
                    onLeaveTable: P,
                  }),
                }),
              N &&
                (0, g.jsx)(l.default, {
                  index: "3",
                  tab: f.i18n["deposit.ranking"],
                  children: (0, g.jsx)(o.default, {}),
                }),
              y &&
                (0, g.jsx)(l.default, {
                  index: "4",
                  tab: f.i18n["rr.rankingboard"],
                  children: (0, g.jsx)(u.default, {}),
                }),
            ],
          }),
        });
      };
    },
  },
]);
