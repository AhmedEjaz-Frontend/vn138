"use strict";
(self.webpackChunknogle_react_boilerplate = self.webpackChunknogle_react_boilerplate || []).push([[7030], {
    10200: (e, i, t) => {
        var s = t(24994);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = void 0;
        var n = function(e) {
            if ("function" == typeof WeakMap) {
                var i = new WeakMap;
                new WeakMap
            }
            return function(e) {
                if (e && e.__esModule)
                    return e;
                var t, s, n = {
                    __proto__: null,
                    default: e
                };
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return n;
                if (t = i) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                for (const i in e)
                    "default" !== i && {}.hasOwnProperty.call(e, i) && ((s = (t = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, i)) && (s.get || s.set) ? t(n, i, s) : n[i] = e[i]);
                return n
            }(e)
        }(t(96540))
          , a = s(t(72524))
          , o = t(78106)
          , r = s(t(46942))
          , l = t(8087)
          , c = t(44168)
          , d = t(51628)
          , u = t(15062)
          , p = t(38560)
          , m = s(t(2395))
          , f = s(t(52622))
          , v = s(t(96384))
          , g = t(74848);
        i.default = e => {
            let {loginCalendarData: i, isShowMissionFeature: t, isShowVipReceive: s, closeModal: h, updateVipSiginBounsMethods: w} = e;
            const {newVipSignIn: S} = i
              , [y,_] = (0,
            a.default)({
                vipReceiveStatus: !1,
                isLoading: !1
            })
              , {vipReceiveStatus: N, isLoading: I} = y
              , j = s && !t
              , x = !s && t
              , R = !s && !t
              , P = N === l.vipReceiveTypeEnum.CLAIMED && `+${S.bonus}`
              , {vipReceiveMessage: E, vipReceiveStyle: M} = (0,
            n.useCallback)((0,
            c.getVipReceiveInfo)(N), [N])
              , V = (0,
            o.useHistory)();
            return (0,
            n.useEffect)( () => {
                S && _({
                    vipReceiveStatus: null == S ? void 0 : S.status
                })
            }
            , [i]),
            !R && (0,
            g.jsxs)("div", {
                className: "calendar-feature-modal",
                locale: d.currLocale,
                children: [s && (0,
                g.jsx)("div", {
                    className: (0,
                    r.default)(`calendar-feature-modal-box ${p.isMobile ? M : ""}`, {
                        h100: j && p.isDesktop
                    }, {
                        w100: j && p.isMobile
                    }),
                    children: I ? (0,
                    g.jsx)("div", {
                        className: "loading-wrapper",
                        children: (0,
                        g.jsx)(f.default, {})
                    }) : (0,
                    g.jsxs)(g.Fragment, {
                        children: [(0,
                        g.jsx)("i", {
                            className: `calendar-feature-modal-box-icon ${M}`
                        }), p.isDesktop && (0,
                        g.jsx)("span", {
                            className: `fadeinUp-${M}`,
                            children: P
                        }), (0,
                        g.jsx)("div", {
                            className: "btn",
                            children: (0,
                            g.jsx)(m.default, {
                                className: M,
                                onClick: () => {
                                    N === l.vipReceiveTypeEnum.PENDING && (_({
                                        isLoading: !0
                                    }),
                                    w().finally( () => {
                                        _({
                                            isLoading: !1
                                        })
                                    }
                                    ))
                                }
                                ,
                                children: (0,
                                g.jsxs)("p", {
                                    className: "vip-receive-msg",
                                    children: [E, P]
                                })
                            })
                        })]
                    })
                }), t && (0,
                g.jsxs)("div", {
                    className: (0,
                    r.default)("calendar-feature-modal-box mission", {
                        h100: x && p.isDesktop
                    }, {
                        w100: x && p.isMobile
                    }),
                    children: [(0,
                    g.jsx)("i", {
                        className: "calendar-feature-modal-box-icon icon-mission"
                    }), (0,
                    g.jsx)("div", {
                        className: "btn",
                        children: (0,
                        g.jsx)(v.default, {
                            onClick: () => {
                                V.push(u.paths.MISSION),
                                h()
                            }
                            ,
                            children: (0,
                            g.jsx)("p", {
                                children: d.i18n["mission.calendar.to.mission"]
                            })
                        })
                    })]
                })]
            })
        }
    }
    ,
    17030: (e, i, t) => {
        var s = t(24994);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = void 0;
        var n = function(e) {
            if ("function" == typeof WeakMap) {
                var i = new WeakMap;
                new WeakMap
            }
            return function(e) {
                if (e && e.__esModule)
                    return e;
                var t, s, n = {
                    __proto__: null,
                    default: e
                };
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return n;
                if (t = i) {
                    if (t.has(e))
                        return t.get(e);
                    t.set(e, n)
                }
                for (const i in e)
                    "default" !== i && {}.hasOwnProperty.call(e, i) && ((s = (t = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, i)) && (s.get || s.set) ? t(n, i, s) : n[i] = e[i]);
                return n
            }(e)
        }(t(96540))
          , a = t(67467)
          , o = s(t(94188))
          , r = s(t(72524))
          , l = s(t(83736))
          , c = s(t(17515))
          , d = s(t(95093))
          , u = s(t(73333))
          , p = s(t(61027))
          , m = t(70913)
          , f = t(51628)
          , v = t(83597)
          , g = t(38234)
          , h = t(76066)
          , w = t(68183)
          , S = t(8087)
          , y = t(57160)
          , _ = s(t(69798))
          , N = t(74848);
        const I = (new Date).getMonth() + 1
          , j = (new Date).getFullYear()
          , x = I - 2 <= 0 ? 10 + I : I - 2
          , R = {
            toOpenGift: "https://img.alltocon.com/img/static/desktop/reward/gift.svga",
            openingGift: "https://img.alltocon.com/img/static/desktop/reward/gift-open.svga",
            giftLoop: "https://img.alltocon.com/img/static/desktop/reward/gift-loop.svga"
        }
          , P = "zh-CN" === o.default.defaultLocale
          , E = n.default.memo(function(e) {
            let {closeModal: i, isMemberCenter: t, calendarData: s, platformStyleStatus: o} = e;
            const E = d.default.weekdaysMin() || ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
              , [M,V] = (0,
            r.default)({})
              , [b,T] = (0,
            r.default)({
                isShowSvga: !1,
                isShowClaimRewardCover: !0,
                isShowGiftLoopReady: !1,
                isShowTickAnimation: !0,
                isShowMissionFeature: !1,
                isShowVipReceive: !1
            })
              , [$,L] = (0,
            r.default)({
                year: j,
                month: I,
                allowNext: !1,
                allowPrev: !0
            })
              , [k,C] = (0,
            n.useState)({
                amount: [],
                activityPoints: []
            })
              , D = (0,
            n.useRef)(null)
              , [O,U] = (0,
            n.useState)()
              , G = (0,
            a.useDispatch)()
              , A = (0,
            _.default)()
              , F = (0,
            m.formatDateTime)(new Date((0,
            m.convertDateTime)((new Date).getTime(), {
                timeZone: 8
            })), "YYYY/MM/DD")
              , W = Number(`${F.split("/")[1]}${F.split("/")[2]}`)
              , Y = e => Number(`${e.split("/")[0]}${(0,
            u.default)(e.split("/")[1]).format("00")}`)
              , B = e => Number(`${e.split("/")[1]}${e.split("/")[2]}`)
              , H = (0,
            n.useMemo)( () => {
                const {year: e, month: i} = $
                  , t = ( (e, i) => (0,
                d.default)(`${e}-${i}`, "MM-YYYY").daysInMonth())(i, e)
                  , s = ( (e, i) => Number((0,
                d.default)(`${e}-${i}`, "MM-YYYY").startOf("month").format("d")))(i, e);
                return Array(t + s).fill([]).map( (e, t) => {
                    const n = t + 1 - s;
                    return n >= 1 ? `${i}/${n}` : null
                }
                )
            }
            , [$])
              , Q = e => {
                const {year: i, month: t} = $;
                T({
                    isShowTickAnimation: !1
                });
                let s = {};
                return L(( () => {
                    if ("prev" === e) {
                        const e = 1 === t;
                        s = {
                            year: e ? i - 1 : i,
                            month: e ? 12 : t - 1
                        }
                    } else {
                        const e = 12 === t;
                        s = {
                            year: e ? i + 1 : i,
                            month: e ? 1 : t + 1
                        }
                    }
                    return {
                        ...s,
                        allowNext: s.month !== I,
                        allowPrev: s.month !== x
                    }
                }
                )())
            }
              , z = e => {
                const i = Y(e);
                if (i > W || $.year !== j)
                    return (0,
                    N.jsx)("i", {
                        className: "mps-input-error transparent"
                    });
                const t = W === i && b.isShowTickAnimation;
                return (e => {
                    if (null == M || !M.mission)
                        return !1;
                    const {mission: i} = M
                      , {loginDates: t=[]} = i
                      , s = Y(e);
                    return t.map(e => B(e)).includes(s)
                }
                )(e) || Z(e) ? (0,
                N.jsx)("span", {
                    className: "mission-check " + (t ? "animate" : ""),
                    children: (0,
                    N.jsx)("i", {
                        className: "mps-input-ok"
                    })
                }) : (0,
                N.jsx)("i", {
                    className: "mps-input-error"
                })
            }
              , K = e => {
                if (null == M || !M.mission)
                    return !1;
                const {mission: i} = M
                  , {rewardedDates: t=[]} = i
                  , s = Y(e)
                  , n = t.map(e => B(e));
                return n.includes(s)
            }
              , Z = e => {
                if (t)
                    return !1;
                if (null == M || !M.newVipSignIn)
                    return !1;
                const {newVipSignIn: i} = M
                  , {signInDates: s} = i
                  , n = Y(e);
                return s.map(e => B(e)).includes(n)
            }
              , q = e => {
                if (null == M || !M.newVipSignIn)
                    return null;
                const {newVipSignIn: i} = M
                  , {signInDates: t} = i
                  , s = Y(e)
                  , n = t.map(e => B(e))
                  , a = b.isShowTickAnimation && n.includes(W) && W === s;
                return Z(e) && (0,
                N.jsx)("div", {
                    className: "vip-calendar-icon " + (a ? "active" : ""),
                    children: (0,
                    N.jsx)("p", {
                        children: "VIP"
                    })
                })
            }
              , J = () => {
                D.current.clearsAfterStop = !0,
                D.current.stopAnimation(),
                D.current.clear(),
                D.current = null
            }
              , X = async (e, i) => {
                try {
                    const t = await O[e];
                    D.current = new c.default.Player("#svga-box"),
                    i && (D.current.clearsAfterStop = !1,
                    D.current.loops = i,
                    D.current.fillMode = "Forward"),
                    D.current.setVideoItem(t),
                    D.current.name = e,
                    D.current.startAnimation()
                } catch (i) {
                    console.log(`start svga error : ${e}`)
                }
            }
              , ee = () => {
                J(),
                T({
                    isShowSvga: !1
                })
            }
              , ie = (0,
            n.useMemo)( () => Object.keys(k).filter(e => k[e].length > 0).map(e => {
                return (0,
                N.jsxs)("div", {
                    className: "numbers-box",
                    children: [(i = k[e],
                    i.map( (e, i) => {
                        const t = "." === e ? "point" : e;
                        return (0,
                        N.jsx)("div", {
                            "data-no": t
                        }, `${t}-${i}`)
                    }
                    )), (0,
                    N.jsx)("span", {
                        children: "amount" === e ? v.defaultCurrencyI18n : f.i18n["activity.points"]
                    })]
                }, e);
                var i
            }
            ), [k]);
            (0,
            n.useEffect)( () => {
                (k.amount.length > 0 || k.activityPoints.length > 0) && b.isShowGiftLoopReady && (X("giftLoop"),
                T({
                    isShowGiftLoopReady: !1
                }))
            }
            , [k, b.isShowGiftLoopReady]),
            (0,
            n.useEffect)( () => {
                b.isShowSvga && X("toOpenGift")
            }
            , [b.isShowSvga]),
            (0,
            n.useEffect)( () => {
                const {mission: e, newVipSignIn: i} = M;
                if (null != e && e.showMissionCalendar && T({
                    isShowMissionFeature: e.showMissionCalendar
                }),
                null != i && i.showVipSignIn) {
                    const e = !i.showVipSignIn
                      , t = !S.vipReceiveTypeEnum[i.status];
                    T({
                        isShowVipReceive: !e && !t
                    })
                }
            }
            , [M]),
            (0,
            l.default)( () => {
                t && s ? V(s) : (( () => {
                    const e = Object.keys(R).reduce( (e, i) => (e[i] = (e => {
                        const i = new c.default.Parser;
                        return new Promise( (t, s) => {
                            i.load(R[e], e => {
                                t(e)
                            }
                            , i => {
                                console.log(`load svga error : ${e}`),
                                s(i)
                            }
                            )
                        }
                        )
                    }
                    )(i),
                    e), {});
                    U(e)
                }
                )(),
                (0,
                h.getLoginCalendar)().then(e => {
                    let {payload: i} = e;
                    V(i),
                    i.mission.recordIds.length > 0 && setTimeout( () => {
                        T({
                            isShowSvga: !0
                        })
                    }
                    , 2e3)
                }
                ).catch( () => {}
                ))
            }
            );
            const te = {
                loginCalendarData: M,
                isShowMissionFeature: b.isShowMissionFeature,
                isShowVipReceive: b.isShowVipReceive,
                closeModal: i,
                updateVipSiginBounsMethods: () => {
                    if (b.isShowVipReceive)
                        return new Promise( (e, i) => {
                            G((0,
                            w.updateVipSiginBouns)()).finally( () => {
                                (0,
                                h.getLoginCalendar)().then(i => {
                                    let {payload: t} = i;
                                    V({
                                        ...t
                                    }),
                                    e(t)
                                }
                                )
                            }
                            )
                        }
                        )
                }
            }
              , {continuousLogin: se, accumulateLogin: ne} = (null == M ? void 0 : M.mission) || {};
            return (0,
            N.jsxs)(N.Fragment, {
                children: ["desktop" === o && (0,
                N.jsx)(p.default, {
                    ...te
                }), (0,
                N.jsxs)("div", {
                    className: "container",
                    children: [b.isShowSvga && (0,
                    N.jsxs)("div", {
                        id: "svga-box",
                        children: [(0,
                        N.jsx)("i", {
                            className: "mps-close",
                            onClick: ee
                        }), b.isShowClaimRewardCover && (0,
                        N.jsx)("div", {
                            className: "claim-reward-cover",
                            onClick: () => {
                                const {mission: e} = M
                                  , {recordIds: i} = e;
                                T({
                                    isShowClaimRewardCover: !1
                                }),
                                X("openingGift", 1),
                                setTimeout( () => {
                                    T({
                                        isShowGiftLoopReady: !0
                                    })
                                }
                                , 2e3),
                                (0,
                                y.getFingerprint2)(t => {
                                    G((0,
                                    g.getAllReward)({
                                        recordIds: i,
                                        fingerprint: t,
                                        customizedFailMsg: A
                                    })).then(i => {
                                        let {payload: {amount: t, activityPoints: s, missionAvailable: n}} = i;
                                        const a = e => 0 !== e && e.toString().split("")
                                          , o = {
                                            amount: a(t) || "",
                                            activityPoints: a(s) || ""
                                        }
                                          , {rewardedDates: r} = e
                                          , l = [...r, F];
                                        V({
                                            ...M,
                                            mission: {
                                                ...e,
                                                rewardedDates: l
                                            }
                                        }),
                                        C(o),
                                        !1 === n && G((0,
                                        h.resetMissionNoti)())
                                    }
                                    ).catch(e => {
                                        console.log("claimReward err", e),
                                        D.current && (J(),
                                        T({
                                            isShowSvga: !1
                                        }))
                                    }
                                    )
                                }
                                )
                            }
                        }), (0,
                        N.jsxs)("div", {
                            className: "show-nub",
                            children: [ie, (0,
                            N.jsx)("div", {
                                className: "box-btn",
                                onClick: ee,
                                children: "OK"
                            })]
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: "header",
                        children: [(0,
                        N.jsxs)("div", {
                            className: "month-selector",
                            children: [(0,
                            N.jsx)("i", {
                                className: "mps-next-arrow left " + ($.allowPrev ? "" : "disabled"),
                                onClick: () => {
                                    $.allowPrev && Q("prev")
                                }
                            }), (0,
                            N.jsx)("span", {
                                className: "month",
                                children: P ? `${$.year}/${$.month}` : `${$.month}/${$.year}`
                            }), (0,
                            N.jsx)("i", {
                                className: "mps-next-arrow " + ($.allowNext ? "" : "disabled"),
                                onClick: () => {
                                    $.allowNext && Q("next")
                                }
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: "login-info",
                            children: [!!se && (0,
                            N.jsxs)("span", {
                                children: [f.i18n["mission.type.PERIOD_CONTINUOUS_LOGIN"], ": ", se]
                            }), !!ne && (0,
                            N.jsxs)("span", {
                                children: [f.i18n["mission.type.ACCUMULATE_LOGIN"], ": ", ne]
                            })]
                        }), "mobile" === o && (0,
                        N.jsx)(p.default, {
                            ...te
                        }), !t && (0,
                        N.jsx)("i", {
                            className: "mps-close",
                            onClick: i
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: "calendar",
                        children: (0,
                        N.jsxs)("div", {
                            children: [(0,
                            N.jsx)("div", {
                                className: "calendar-weekdays",
                                children: E.map(e => (0,
                                N.jsx)("span", {
                                    className: "date-box",
                                    children: e
                                }, e))
                            }), H.map( (e, i) => (0,
                            N.jsx)("div", {
                                className: "date-box",
                                children: e && (0,
                                N.jsxs)(N.Fragment, {
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: "date",
                                        children: P ? e : e.split("/").reverse().join("/")
                                    }), (0,
                                    N.jsxs)("div", {
                                        className: "stamp",
                                        children: [z(e), K(e) && (0,
                                        N.jsx)("span", {
                                            className: "reward-dot"
                                        })]
                                    }), q(e)]
                                })
                            }, `${e}-${i}`))]
                        })
                    })]
                })]
            })
        });
        i.default = E
    }
    ,
    44168: (e, i, t) => {
        var s = t(24994);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.getVipReceiveInfo = i.getVipLevelName = void 0,
        s(t(96540));
        var n = t(8087)
          , a = t(51628)
          , o = t(83597);
        i.getVipReceiveInfo = e => {
            switch (e) {
            case n.vipReceiveTypeEnum.CLAIMED:
                return {
                    vipReceiveMessage: a.i18n["new.vip.signed.in"],
                    vipReceiveImg: `${o.staticImageUrl}common/vip/icon/reward.png`,
                    vipReceiveStyle: "isReceived"
                };
            case n.vipReceiveTypeEnum.PENDING:
                return {
                    vipReceiveMessage: a.i18n["new.vip.signin.get.reward"],
                    vipReceiveImg: `${o.staticImageUrl}common/vip/icon/sign.png`,
                    vipReceiveStyle: "isPedding"
                };
            default:
                return {
                    vipReceiveMessage: a.i18n["new.vip.reward.has.issued"],
                    vipReceiveImg: `${o.staticImageUrl}common/vip/icon/reward_cry.png`,
                    vipReceiveStyle: "isOver"
                }
            }
        }
        ,
        i.getVipLevelName = function(e) {
            let i = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
            return e === n.VIPLevelsEnum.BLACKLIST ? a.i18n["new.vip.none"] : `${i && a.i18n["new.vip"]}${e}`
        }
    }
    ,
    61027: (e, i, t) => {
        var s = t(24994);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.default = void 0;
        var n = s(t(10200));
        i.default = n.default
    }
    ,
    68183: (e, i, t) => {
        var s = t(24994);
        Object.defineProperty(i, "__esModule", {
            value: !0
        }),
        i.updateVipSiginBouns = i.getVipSetting = i.getVipLevelInfo = i.getRewardHistory = i.getPointsHistory = i.getNewVipInfo = i.getLevelHistory = i.claimVipPlayerReward = void 0;
        var n = s(t(32080))
          , a = s(t(47186))
          , o = l(t(68686))
          , r = l(t(4049));
        function l(e, i) {
            if ("function" == typeof WeakMap)
                var t = new WeakMap
                  , s = new WeakMap;
            return (l = function(e, i) {
                if (!i && e && e.__esModule)
                    return e;
                var n, a, o = {
                    __proto__: null,
                    default: e
                };
                if (null === e || "object" != typeof e && "function" != typeof e)
                    return o;
                if (n = i ? s : t) {
                    if (n.has(e))
                        return n.get(e);
                    n.set(e, o)
                }
                for (const i in e)
                    "default" !== i && {}.hasOwnProperty.call(e, i) && ((a = (n = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, i)) && (a.get || a.set) ? n(o, i, a) : o[i] = e[i]);
                return o
            }
            )(e, i)
        }
        const c = `${o.baseURL}${o.default.newVipSetting}`;
        i.getVipSetting = () => ({
            types: [r.GET_NEW_VIP_SETTING_REQ, r.GET_NEW_VIP_SETTING_SUC, r.GET_NEW_VIP_SETTING_ERR],
            promises: [ () => (0,
            n.default)({
                url: `${c}`,
                method: "GET"
            })]
        }),
        i.getPointsHistory = e => (0,
        n.default)({
            url: `${c}/pointsHistory?${a.default.stringify(e)}`,
            method: "GET"
        }),
        i.getLevelHistory = e => (0,
        n.default)({
            url: `${c}/levelHistory?${a.default.stringify(e)}`,
            method: "GET"
        }),
        i.getRewardHistory = e => (0,
        n.default)({
            url: `${c}/rewardHistory?${a.default.stringify(e)}`,
            method: "GET"
        }),
        i.claimVipPlayerReward = e => ({
            types: [r.PUT_VIP_PLAYER_REWARD_REQUEST, r.PUT_VIP_PLAYER_REWARD_SUCCESS, r.PUT_VIP_PLAYER_REWARD_FAILURE],
            promises: [ () => (0,
            n.default)({
                url: `${c}/newVipPlayerReward`,
                method: "PUT",
                formData: {
                    id: e
                }
            })]
        }),
        i.getNewVipInfo = e => (0,
        n.default)({
            url: `${c}/description?${a.default.stringify(e)}`,
            method: "GET"
        }),
        i.updateVipSiginBouns = () => ({
            types: [r.PUT_UPDATE_VIP_SIGIN_BOUNS_REQ, r.PUT_UPDATE_VIP_SIGIN_BOUNS_SUC, r.PUT_UPDATE_VIP_SIGIN_BOUNS_ERR],
            promiseType: "",
            promises: [ () => (0,
            n.default)({
                url: `${c}/newVipSignInBonus`,
                method: "PUT"
            })]
        }),
        i.getVipLevelInfo = () => ({
            types: [r.GET_VIP_LEVEL_INFO_REQUEST, r.GET_VIP_LEVEL_INFO_SUCCESS, r.GET_VIP_LEVEL_INFO_FAILURE],
            promises: [ () => (0,
            n.default)({
                url: `${o.baseURL}/newVipSetting/newVips`,
                method: "GET"
            })]
        })
    }
}]);
