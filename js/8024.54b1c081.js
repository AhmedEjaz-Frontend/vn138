(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [4562, 8024],
  {
    1166: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(a(55665)),
        i = a(8087);
      t.default = () => {
        const {
          isVipBlackList: e,
          ecDisplayVip: t,
          ecDisplaySSVip: a,
          isDisplaySettingSuc: o,
          isSSVipEnable: n,
          isGetVipTypeSuc: l,
        } = (0, r.default)((e) => ({
          isVipBlackList: e.players.isVipBlackList,
          ecDisplayVip: e.dashboard.ecDisplaySetting.ecDisplayVip,
          ecDisplaySSVip: e.dashboard.ecDisplaySetting.ecDisplaySSVip,
          isDisplaySettingSuc: e.dashboard.isDisplaySettingSuc,
          isSSVipEnable: e.dashboard.isSSVipEnable,
          isGetVipTypeSuc: e.dashboard.isGetVipTypeSuc,
        }));
        return {
          isShowMcVip:
            !e &&
            (t === i.vipDisplayTypeEnum.ENABLE ||
              a === i.vipDisplayTypeEnum.ENABLE),
          isDisplaySettingSuc: o,
          isSSVipEnable: n,
          isGetVipTypeSuc: l,
        };
      };
    },
    2395: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(a(43693)),
        i =
          (o(a(5556)),
          (function (e) {
            if ("function" == typeof WeakMap) {
              var t = new WeakMap();
              new WeakMap();
            }
            return (function (e) {
              if (e && e.__esModule) return e;
              var a,
                o,
                r = {
                  __proto__: null,
                  default: e,
                };
              if (
                null === e ||
                ("object" != typeof e && "function" != typeof e)
              )
                return r;
              if ((a = t)) {
                if (a.has(e)) return a.get(e);
                a.set(e, r);
              }
              for (const t in e)
                "default" !== t &&
                  {}.hasOwnProperty.call(e, t) &&
                  ((o =
                    (a = Object.defineProperty) &&
                    Object.getOwnPropertyDescriptor(e, t)) &&
                  (o.get || o.set)
                    ? a(r, t, o)
                    : (r[t] = e[t]));
              return r;
            })(e);
          })(a(96540))),
        n = a(67467),
        l = o(a(96384)),
        s = a(74848);
      class d extends i.Component {
        constructor() {
          super(),
            (0, r.default)(this, "onSubmit", () => {
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
            dispatch: a,
            ...o
          } = this.props;
          return (0, s.jsx)(l.default, {
            ...o,
            onClick: this.onSubmit,
          });
        }
      }
      t.default = (0, n.connect)((e) => ({
        isSendingDeletePostPut: e.app.isSendingDeletePostPut,
      }))(d);
    },
    2805: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = o(a(55665)),
        n = a(67467),
        l = o(a(62877)),
        s = a(76066);
      t.default = () => {
        const e = (0, n.useDispatch)(),
          { player: t, registrationSetting: a } = (0, i.default)((e) => ({
            player: e.players.player,
            registrationSetting: e.players.registrationSetting,
          })),
          [o, d] = (0, r.useState)(!1),
          u = (0, r.useCallback)(
            (e) => {
              const o =
                  a.getIn(["regsettingmap", "mobile", "validate"]) &&
                  a.getIn(["mobileValidation", e]),
                r = t.hasverifiedmobile,
                i =
                  a.getIn(["regsettingmap", "email", "validate"]) &&
                  a.getIn(["emailValidation", e]),
                n = t.hasVerifiedEmail;
              return {
                isMobileEnabled: o,
                isMobileVerified: r,
                isMobileRequired: o && !r,
                isMobileValidated: o && r,
                isEmailEnabled: i,
                isEmailVerified: n,
                isEmailRequired: i && !n,
                isEmailValidated: i && n,
              };
            },
            [t, a]
          );
        return (
          (0, l.default)(() => {
            Promise.all([
              e((0, s.getUserProfile)()),
              e((0, s.getRegistrationSetting)()),
            ]).then(() => {
              d(!0);
            });
          }),
          {
            getValidationStatus: u,
            isReady: o,
          }
        );
      };
    },
    2878: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    3057: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "AlertModal", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        }),
        Object.defineProperty(t, "GiftModal", {
          enumerable: !0,
          get: function () {
            return i.default;
          },
        });
      var r = o(a(48841)),
        i = o(a(20809));
    },
    4347: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.updateRaceRecordList =
          t.updateMaintenanceList =
          t.removeGameCache =
          t.launchGames =
          t.isRedirectSportPage =
          t.getUpcomingSports =
          t.getSABAWidgetURL =
          t.getMyFavoriteGameList =
          t.getMaintenanceList =
          t.getLast10Records =
          t.getLast10DaysGameHistory =
          t.getInsuranceGameHistory =
          t.getInitAllGameList =
          t.getGameTags =
          t.getGameIds =
          t.getGameHistoryDetail =
          t.getGameHistoryByGame =
          t.getGameHistoryByAll =
          t.getEgameGames =
          t.getAllGameName =
          t.getAllGameList =
          t.deleteMyFavoriteGame =
          t.addMyFavoriteGame =
            void 0);
      var r = o(a(86663)),
        i = o(a(32080)),
        n = p(a(68686)),
        l = a(83597),
        s = a(38560),
        d = a(8087),
        u = a(51628),
        _ = a(39418),
        E = p(a(30817));
      function p(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (p = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      (t.launchGames = function () {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (e = l.isNativeApp
            ? _.platformModalGame.includes(t.gameproviderid) && t.platform
              ? t.platform
              : d.platformType.mobileapp
            : t.platform
            ? t.platform
            : s.isMobile
            ? d.platformType.mobile
            : d.platformType.desktop),
          {
            types: [
              E.AJAX_PUT_LAUNCH_GAME_REQUEST,
              E.AJAX_PUT_LAUNCH_GAME_SUCCESS,
              E.AJAX_PUT_LAUNCH_GAME_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, i.default)({
                  url: `${n.baseURL}${n.default.launchGamesURL}/${
                    t.distributorid
                  }/${t.gameproviderid || "SUB"}/${t.gameid}/launch`,
                  method: "PUT",
                  jsonStr: JSON.stringify({
                    lang: t.lang || u.currLocale,
                    platformtype: e,
                  }),
                }),
            ],
            gameproviderid: t.gameproviderid,
          }
        );
      }),
        (t.getInitAllGameList = (e) => ({
          types: [
            E.AJAX_GET_ALL_GAME_LIST_REQUEST,
            E.AJAX_GET_ALL_GAME_LIST_SUCCESS,
            E.AJAX_GET_ALL_GAME_LIST_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `/games/lite-${e.platform}.json?v=${Date.now()}`,
                method: "GET",
              }),
          ],
          platform: e.platform,
        })),
        (t.getAllGameList = (e) => {
          const t = r.default.stringify(e);
          return {
            types: [
              E.AJAX_GET_ALL_GAME_LIST_REQUEST,
              E.AJAX_GET_ALL_GAME_LIST_SUCCESS,
              E.AJAX_GET_ALL_GAME_LIST_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}/games/allGameList?${t}`,
                  method: "GET",
                }),
            ],
            platform: e.platform,
          };
        }),
        (t.getAllGameName = () => ({
          types: [
            E.AJAX_GET_ALL_GAME_NAME_REQUEST,
            E.AJAX_GET_ALL_GAME_NAME_SUCCESS,
            E.AJAX_GET_ALL_GAME_NAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, i.default)({
                url: `${n.baseURL}/games/allGameName?${r.default.stringify({
                  lang: u.currLocale,
                })}`,
                method: "GET",
              }),
          ],
        })),
        (t.getMyFavoriteGameList = function () {
          let { sort: e = "ASC", gamename: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const a = {
              sort: e,
              gamename: t,
              sortlang:
                ["zh-CN", "zh-TW", "en-US"].indexOf(u.currLocale) > -1
                  ? u.currLocale
                  : "en-US",
              sortcolumn: "gamename",
            },
            o = r.default.stringify(a);
          return {
            types: [
              E.AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST,
              E.AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS,
              E.AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}${n.default.myFavoriteGamesURL}?${o}`,
                  method: "GET",
                }),
            ],
            queryObj: a,
          };
        }),
        (t.addMyFavoriteGame = (e) => ({
          data: e,
          types: [
            E.AJAX_POST_MY_FAVORITE_GAME_REQUEST,
            E.AJAX_POST_MY_FAVORITE_GAME_SUCCESS,
            E.AJAX_POST_MY_FAVORITE_GAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.myFavoriteGamesURL}`,
                method: "POST",
                jsonStr: JSON.stringify({
                  gameId: e.get("gameid"),
                  productTypeId: e.get("producttypeid"),
                  distributorId: e.get("distributorid"),
                  gameProviderId: e.get("gameproviderid"),
                }),
              }),
          ],
        })),
        (t.deleteMyFavoriteGame = (e) => ({
          data: e,
          types: [
            E.AJAX_DELETE_MY_FAVORITE_GAME_REQUEST,
            E.AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS,
            E.AJAX_DELETE_MY_FAVORITE_GAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.myFavoriteGamesURL}`,
                method: "DELETE",
                jsonStr: JSON.stringify({
                  gameId: e.get("gameid"),
                  productTypeId: e.get("producttypeid"),
                  distributorId: e.get("distributorid"),
                  gameProviderId: e.get("gameproviderid"),
                }),
              }),
          ],
        })),
        (t.getMaintenanceList = () => ({
          types: [
            E.AJAX_GET_MAINTENANCE_LIST_REQUEST,
            E.AJAX_GET_MAINTENANCE_LIST_SUCCESS,
            E.AJAX_GET_MAINTENANCE_LIST_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${n.baseURL}${n.default.maintenanceURL}`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.updateMaintenanceList = (e) => ({
          type: E.UPDATE_MAINTENANCE_LIST,
          payload: e,
        })),
        (t.getLast10Records = () => ({
          types: [
            E.AJAX_GET_LAST_10_RECORDS_REQUEST,
            E.AJAX_GET_LAST_10_RECORDS_SUCCESS,
            E.AJAX_GET_LAST_10_RECORDS_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${n.baseURL}${n.default.launchGamesURL}/record/last10record`,
                method: "GET",
              }),
          ],
        })),
        (t.getLast10DaysGameHistory = () => ({
          types: [
            E.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST,
            E.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS,
            E.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${n.baseURL}${n.default.launchGamesURL}/summary/last10day`,
                method: "GET",
              }),
          ],
        })),
        (t.getInsuranceGameHistory = (e, t) => {
          const a = r.default.stringify(t);
          return {
            types: [
              E.AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST,
              E.AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS,
              E.AJAX_GET_INSURANCE_GAME_HISTORY_FAILURE,
            ],
            promiseType: "",
            promises: [
              (t) =>
                t({
                  url: `${n.baseURL}${n.default.launchGamesURL}/${e}/insurance?${a}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameHistoryByAll = (e) => {
          const t = r.default.stringify(e);
          return {
            types: [
              E.AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST,
              E.AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS,
              E.AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, i.default)({
                  url: `${n.baseURL}${n.default.launchGamesURL}/ALL/record?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameHistoryDetail = (e, t) => {
          t.lang = u.currLocale;
          const a = r.default.stringify(t);
          return {
            types: [
              E.AJAX_GET_GAME_HISTORY_DETAIL_REQUEST,
              E.AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS,
              E.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, i.default)({
                  url: `${n.baseURL}${n.default.launchGamesURL}/record/${e}?${a}`,
                  method: "GET",
                }),
            ],
            txnid: e,
          };
        }),
        (t.getGameHistoryByGame = (e, t) => {
          const { distributorid: a, gameproviderid: o, gameid: l } = t,
            s = r.default.stringify(e);
          return {
            types: [
              E.AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST,
              E.AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS,
              E.AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, i.default)({
                  url: `${n.baseURL}${n.default.launchGamesURL}/${a}/${o}/${l}/record?${s}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameTags = () => ({
          types: [
            E.AJAX_GET_GAME_TAGS_REQUEST,
            E.AJAX_GET_GAME_TAGS_SUCCESS,
            E.AJAX_GET_GAME_TAGS_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${n.baseURL}${n.default.launchGamesURL}/tags`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.getEgameGames = (e) => {
          let {
            sort: t = "ASC",
            platform: a = d.platformType.desktop,
            tagid: o,
            gamename: i,
            gameproviderid: l,
          } = e;
          const s = r.default.stringify({
            sort: t,
            tagid: o,
            platform: a,
            gamename: i,
            gameproviderid: l,
            sortlang:
              ["zh-CN", "zh-TW", "en-US"].indexOf(u.currLocale) > -1
                ? u.currLocale
                : "en-US",
            offset: 0,
            limit: 2e3,
            sortcolumn: "gamename",
            producttypeid: "EGAME",
          });
          return {
            types: [
              E.AJAX_GET_EGAME_GAMES_REQUEST,
              E.AJAX_GET_EGAME_GAMES_SUCCESS,
              E.AJAX_GET_EGAME_GAMES_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}${n.default.launchGamesURL}?${s}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            sort: t,
            tagid: o,
            gamename: i,
            gameproviderid: l,
          };
        }),
        (t.removeGameCache = () => ({
          type: E.REMOVE_GAME_CACHE,
        })),
        (t.getGameIds = (e) => {
          const t = r.default.stringify(
            Object.assign(
              {
                offset: 0,
                limit: 1e4,
                platform: 3,
                sort: "ASC",
                sortcolumn: "producttypeid",
              },
              e
            )
          );
          return {
            types: [
              E.AJAX_GET_ALL_GAME_IDS_REQUEST,
              E.AJAX_GET_ALL_GAME_IDS_SUCCESS,
              E.AJAX_GET_ALL_GAME_IDS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}${n.default.launchGamesURL}?${t}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            producttypeid: e.producttypeid,
          };
        }),
        (t.getUpcomingSports = (e) => {
          const t = r.default.stringify({
            size: e,
          });
          return {
            types: [
              E.GET_UPCOMING_SPORTS_REQUEST,
              E.GET_UPCOMING_SPORTS_SUCCESS,
              E.GET_UPCOMING_SPORTS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}/upcomingSporting?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.isRedirectSportPage = () => ({
          type: E.REDIRECT_SPORT_PAGE,
        })),
        (t.updateRaceRecordList = (e) => ({
          type: E.UPDATE_RACE_RECORD,
          payload: e,
        })),
        (t.getSABAWidgetURL = (e) =>
          (0, i.default)({
            url: `${n.baseURL}/games/saba/getWidgetUrl`,
            method: "POST",
            jsonStr: JSON.stringify({
              ...e,
              domain: location.origin,
              language: u.currLocale,
            }),
          }));
    },
    5689: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(67467);
      const i = o(a(94188)).default.brand.code,
        n = ["k36"].includes(i),
        l = null,
        s = void 0,
        d = (e) => `avatar/${e}.png`,
        u = (e) => `avatar/customized/${i}/${e}.png`,
        _ = Array(6)
          .fill()
          .map((e, t) => (n ? u(t + 1) : d(t + 1)));
      t.default = (e) => {
        const t = (0, r.useSelector)((e) => e.players.player),
          a = (0, r.useSelector)((e) => e.dashboard.ecDisplaySetting),
          o = ((e) => {
            if (e === l) return _[0];
            if (e === s) return s;
            {
              const t =
                null == e
                  ? void 0
                  : e.split("/").pop().match(/\d+/g).toString();
              return n ? u(t) : d(t);
            }
          })(void 0 !== e ? e : t.pictureUrl),
          i = !a.playerPictureDisplay || o === s;
        return {
          avatarList: _,
          isHideAvatar: i,
          pictureUrl: o,
        };
      };
    },
    6063: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = (function (e) {
        if ("function" == typeof WeakMap) {
          var t = new WeakMap();
          new WeakMap();
        }
        return (function (e) {
          if (e && e.__esModule) return e;
          var a,
            o,
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
              ((o =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? a(r, t, o)
                : (r[t] = e[t]));
          return r;
        })(e);
      })(a(68561));
      const r = /^[+-]?([0-9]*[.])?[0-9]+$/;
      t.default = () => {
        o.addMethod(o.mixed, "castOrDefault", function () {
          let e =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const t = {
            stripUnknown: !0,
          };
          try {
            return this.cast(e, t);
          } catch (e) {
            return this.cast({}, t);
          }
        }),
          o.addMethod(o.number, "nullString", function () {
            return this.transform((e, t) =>
              "" === t ? null : r.test(t) ? e : t
            );
          });
      };
    },
    7277: (e, t) => {
      "use strict";
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
    7541: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          const { multipleCall: a = !1, withState: o = !1 } = t,
            [_, E] = (0, n.default)({
              isLoading: !1,
              isLoaded: !1,
              data: void 0,
              error: void 0,
            }),
            p = (0, r.useRef)(!1),
            f = (0, i.useDispatch)(),
            c = (0, r.useCallback)(
              function () {
                if (!a && p.current)
                  return Promise.reject(
                    new Error("previous callback hasn't been resolved.")
                  );
                o &&
                  E({
                    isLoading: !0,
                  }),
                  (p.current = !0);
                let {
                  failed: t,
                  promises: r,
                  ...i
                } = (function (e) {
                  if ((0, s.default)(e))
                    return {
                      promises: [e],
                    };
                  const t = e.types || [],
                    [a, o] = t.slice(Math.max(t.length - 2)),
                    r =
                      !Object.prototype.hasOwnProperty.call(
                        e,
                        "notification"
                      ) || e.notification;
                  return {
                    ...e,
                    success: a,
                    failed: o,
                    notification: r,
                    successMessage: e.successMessage,
                    failMessage: e.failMessage,
                    promises: e.promises.map((e) => e(l.default)),
                  };
                })(e(...arguments));
                return Promise.all(r)
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
                            f({
                              type: u.UPDATE_TOKEN,
                              token: t.newToken,
                            }),
                          t
                        );
                      })),
                      o &&
                        E({
                          data: 1 === e.length ? e[0] : e,
                          isLoaded: !0,
                        }),
                      1 === e.length ? e[0] : e
                    )
                  )
                  .catch(
                    (e) => (
                      401 === e.code
                        ? f({
                            type: u.POST_LOGOUT_SUCCESS,
                            unauthorized: !0,
                          })
                        : 403 === e.code
                        ? f({
                            ...i,
                            ...e,
                            type: d.API_ERROR_CODE_498,
                            constant: d.API_FORBIDDEN_ERROR,
                          })
                        : 498 === e.code
                        ? f({
                            ...i,
                            ...e,
                            type: d.API_ERROR_CODE_498,
                            constant: t,
                          })
                        : 499 === e.code
                        ? f({
                            ...i,
                            ...e,
                            type: d.API_ERROR_CODE_498,
                            constant: d.API_INTERNAL_ERROR_CODE,
                          })
                        : e.code &&
                          f({
                            ...i,
                            ...e,
                            type: d.API_ERROR_CODE_498,
                            constant: d.API_INTERNAL_ERROR_CODE,
                            exception: !0,
                          }),
                      o &&
                        E({
                          error: e,
                        }),
                      Promise.reject(e)
                    )
                  )
                  .finally(() => {
                    o &&
                      E({
                        isLoading: !1,
                      }),
                      (p.current = !1);
                  });
              },
              [e]
            );
          return o
            ? {
                ..._,
                execute: c,
              }
            : c;
        });
      var r = a(96540),
        i = a(67467),
        n = o(a(72524)),
        l = o(a(32080)),
        s = o(a(7277)),
        d = a(36697),
        u = a(62144);
    },
    8728: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getVipType = t.getDisplaySetting = void 0);
      var r = o(a(94188)),
        i = o(a(47186)),
        n = _(a(74478)),
        l = _(a(68686)),
        s = o(a(32080)),
        d = a(51628),
        u = a(38560);
      function _(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (_ = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      a(76066);
      const E = u.isMobile ? 1 : 2;
      (t.getDisplaySetting = () => {
        const e = {
          currency: r.default.defaultCurrency,
          locale: d.currLocale,
          platform: E,
        };
        return {
          types: [
            n.GET_DISPLAY_SETTING_REQUEST,
            n.GET_DISPLAY_SETTING_SUCCESS,
            n.GET_DISPLAY_SETTING_FAILURE,
          ],
          notification: !1,
          promiseType: "",
          promises: [
            () =>
              (0, s.default)({
                url: `${l.baseURL}${
                  l.default.dashboard
                }/displaySetting?${i.default.stringify(e)}`,
                method: "GET",
              }),
          ],
        };
      }),
        (t.getVipType = () => ({
          types: [
            n.GET_VIP_TYPE_REQUEST,
            n.GET_VIP_TYPE_SUCCESS,
            n.GET_VIP_TYPE_FAILURE,
          ],
          notification: !1,
          promises: [
            () =>
              (0, s.default)({
                url: `${l.baseURL}/ssVipSetting/enabled`,
                method: "GET",
              }),
          ],
        }));
    },
    12695: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = function () {
          const e = (0, i.useSelector)((e) => e.players.registrationSetting);
          return (0, r.useMemo)(() => {
            const t = e.get("playerRegAgent", (0, l.List)()) || (0, l.List)();
            let a = d;
            if (t.size > 0) {
              const e = t.get("isUlAgent"),
                o = e ? t.get("account") : t.get("agentId");
              return (
                e ? s.ulagentCookie.set(o) : s.agentCookie.set(o),
                {
                  isAgentDomain: !0,
                  isUlagent: e,
                  agentId: e ? t.get("ulAgentId") : t.get("agentId"),
                  account: e ? t.get("account") : "",
                  appURL: a,
                }
              );
            }
            return {
              isAgentDomain: !1,
              isUlagent: !1,
              agentId: null,
              account: "",
              appURL: a,
            };
          }, [e]);
        });
      var r = a(96540),
        i = a(67467),
        n = o(a(10844)),
        l = a(9404),
        s = a(56291);
      const d = n.default.getIn(["portal", "apiServer", "appDownloadURL"], "");
    },
    16147: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.sendStatsApi = void 0);
      var o = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              o,
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
                ((o =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? a(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(70401)),
        r = a(68686);
      t.sendStatsApi = (e) => ({
        types: [
          o.POST_API_STATS_REQUEST,
          o.POST_API_STATS_SUCCESS,
          o.POST_API_STATS_FAILURE,
        ],
        promiseType: "",
        promises: [
          (t) =>
            t({
              url: `${r.baseURL}/stats`,
              method: "POST",
              jsonStr: JSON.stringify(e),
            }),
        ],
      });
    },
    16506: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        (t.default = () => null);
    },
    16510: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.onlyPositiveNumber =
          t.formatMoneySubmit =
          t.formatMoney =
          t.formatDepositAmount =
          t.formatDecimal =
          t.formatBalance =
          t.formatAmount =
          t.formatActualAmount =
          t.decimalValue =
          t.CRYPTO_WITHDRAWAL_MAX =
          t.CRYPTO_RATIO_FORMAT =
          t.CRYPTO_CURRENCY_FORMAT =
            void 0);
      var r = o(a(93110)),
        i = o(a(73333)),
        n = a(94188);
      (t.CRYPTO_CURRENCY_FORMAT = "0,0.[00000000]"),
        (t.CRYPTO_RATIO_FORMAT = "0,0.[00000]"),
        (t.CRYPTO_WITHDRAWAL_MAX = 9999999.99999999);
      const l = function (e) {
        let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0,0.00",
          a =
            arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
        if (null == e || "" === e || isNaN(e)) return "";
        const { showPlus: o = !1 } = a,
          [, n] = t.split("."),
          l = ((e) =>
            e
              ? String(e)
                  .split("")
                  .reduce((e, t) => ("0" === t ? e + 1 : e), 0)
              : 0)(n),
          s = Math.pow(10, l);
        let d = (0, r.default)(e);
        const u = d.isPositive();
        0 === l && (d = d.floor());
        let _ = (0, i.default)(d.abs().mul(s).floor().div(s).valueOf()).format(
          t
        );
        return u ? (o ? "+" + _ : _) : "-" + _;
      };
      (t.formatMoney = l),
        (t.formatDepositAmount = (e, t, a) => {
          const o =
            null != t ? t : "VND2" === n.defaultCurrency ? "0,0" : void 0;
          return l(e, o, a);
        }),
        (t.formatDecimal = (e, t) => l(e, t).replace(/,/g, "")),
        (t.formatMoneySubmit = (e) =>
          void 0 === e || (!e && "object" == typeof e)
            ? ""
            : `${(0, i.default)(e).format("00.00")}`);
      const s = (e) => (e < 0 ? 0 : e);
      t.onlyPositiveNumber = s;
      const d = (e) => l(s(e || 0));
      (t.formatAmount = d),
        (t.formatBalance = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : ["MAIN", "available"];
          const a = e.getIn(t);
          return a ? d(a) : l(0);
        }),
        (t.formatActualAmount = (e, t) => {
          let a = e || 0;
          try {
            a &&
              t &&
              (a = (0, r.default)(a).sub(
                (0, r.default)(a)
                  .mul((0, r.default)(t.processingfeepct).div(100))
                  .add((0, r.default)(t.processingfeeconst))
              ));
          } catch (e) {
            a = 0;
          }
          return l(a);
        }),
        (t.decimalValue = function (e) {
          let t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "0";
          try {
            return new r.default(e);
          } catch (e) {
            return new r.default(t);
          }
        });
    },
    18318: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.ADD_CRYPTO_WITHDRAWAL_FAILURE = t.ADD_BANK_WITHDRAWAL_FAILURE =
          void 0),
        (t.ADD_BANK_WITHDRAWAL_FAILURE =
          "withdrawal/ADD_BANK_WITHDRAWAL_FAILURE"),
        (t.ADD_CRYPTO_WITHDRAWAL_FAILURE =
          "withdrawal/ADD_CRYPTO_WITHDRAWAL_FAILURE");
    },
    20809: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(a(96658));
      a(68908), (t.default = r.default);
    },
    22745: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(38751),
        i = a(8087),
        n = o(a(55665)),
        l = o(a(52884)),
        s = o(a(15361));
      t.default = (e) => {
        let { websocketCallback: t } = e;
        const {
            connectWebsocket: a,
            closeWebsocket: o,
            subscribe: d,
          } = (0, r.useWebSocket)(),
          { logined: u, loginSuccess: _ } = (0, n.default)((e) => ({
            logined: e.players.logined,
            loginSuccess: e.players.loginSuccess,
          }));
        return (
          (0, l.default)(
            () => {
              u && a(),
                d(i.socketType.DataType, (e) => {
                  t(e);
                });
            },
            () => {
              o();
            }
          ),
          (0, s.default)(() => {
            _ && a();
          }, [_]),
          null
        );
      };
    },
    23523: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              o,
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
                ((o =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? a(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(96540)),
        i = o(a(52622)),
        n = a(83597),
        l = o(a(71508));
      a(27996);
      var s = a(74848);
      t.default = (e) => {
        let { path: t, alt: a, className: o } = e;
        const d = `${n.staticImageUrl}${t}`,
          [u, _] = (0, r.useState)(!0);
        return (0, s.jsxs)(s.Fragment, {
          children: [
            u &&
              (0, s.jsx)(i.default, {
                className: "avatar-loading-icon",
              }),
            (0, s.jsx)("img", {
              src: d,
              alt: a,
              onLoad: () => {
                _(!1);
              },
              onDragStart: (e) => {
                e.preventDefault();
              },
              className: (0, l.default)(o, {
                "avatar-img-hide": u,
              }),
            }),
          ],
        });
      };
    },
    27996: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    33726: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getStaticPages =
          t.getStaticPageOrders =
          t.getStaticPageContentV2 =
          t.getStaticPageContentByDisplayname =
          t.getStaticPageContent =
            void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              o,
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
                ((o =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? a(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(18676)),
        i = a(68686),
        n = o(a(94188)),
        l = a(51628),
        s = o(a(32080)),
        d = o(a(86663));
      const u = n.default.defaultLocale;
      (t.getStaticPages = () => ({
        types: [
          r.GET_STATIC_PAGES_REQUEST,
          r.GET_STATIC_PAGES_SUCCESS,
          r.GET_STATIC_PAGES_FAILURE,
        ],
        promiseType: "all",
        promises: [
          (e) =>
            e({
              url: `${i.baseURL}/staticpagesettings/Info/orders`,
              method: "GET",
              setToken: !1,
            }),
          (e) =>
            e({
              url: `${i.baseURL}/staticpagesettings/SignUp/orders`,
              method: "GET",
              setToken: !1,
            }),
        ],
      })),
        (t.getStaticPageContent = (e) => {
          let { type: t, code: a } = e;
          return {
            types: [
              r.GET_STATIC_PAGE_CONTENT_REQUEST,
              r.GET_STATIC_PAGE_CONTENT_SUCCESS,
              r.GET_STATIC_PAGE_CONTENT_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}/staticpagesettings/${t}/${a}/contents/${l.currLocale}?defaultlang=${u}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            staticPageType: t,
            code: a,
          };
        }),
        (t.getStaticPageOrders = (e) => ({
          types: [
            r.GET_STATIC_PAGE_ORDERS_REQUEST,
            r.GET_STATIC_PAGE_ORDERS_SUCCESS,
            r.GET_STATIC_PAGE_ORDERS_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, s.default)({
                url: `${i.baseURL}/staticpagesettings/${e}/orders`,
                method: "GET",
                setToken: !1,
              }),
          ],
          staticPageType: e,
        })),
        (t.getStaticPageContentV2 = (e) => {
          let { type: t, code: a, query: o = {} } = e;
          const n = d.default.stringify({
            ...o,
            defaultlang: u,
          });
          return {
            types: [
              r.GET_STATIC_PAGE_CONTENT_V2_REQUEST,
              r.GET_STATIC_PAGE_CONTENT_V2_SUCCESS,
              r.GET_STATIC_PAGE_CONTENT_V2_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, s.default)({
                  url: `${i.baseURL}/staticpagesettings/${t}/${a}/contents/${l.currLocale}?${n}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            staticPageType: t,
            code: a,
          };
        }),
        (t.getStaticPageContentByDisplayname = (e) => {
          let { type: t, displayname: a, isdesktop: o } = e;
          return {
            types: [
              r.GET_STATIC_PAGE_CONTENT_BY_NAME_REQUEST,
              r.GET_STATIC_PAGE_CONTENT_BY_NAME_SUCCESS,
              r.GET_STATIC_PAGE_CONTENT_BY_NAME_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}/staticpagesettings/${t}/contents?displayname=${a}&isdesktop=${o}`,
                  method: "GET",
                }),
            ],
            staticPageType: t,
          };
        });
    },
    34059: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = o(a(36412));
      t.default = () => (0, r.useContext)(i.default);
    },
    37328: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.setPromoImg =
          t.registerAffiliate =
          t.getPromoImg =
          t.getAffiliateSettlementDetail =
          t.getAffiliateSettlement =
          t.getAffiliateSetting =
          t.getAffiliateInfo =
            void 0);
      var r = o(a(86663)),
        i = d(a(51929)),
        n = a(51628),
        l = d(a(68686)),
        s = o(a(32080));
      function d(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (d = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      (t.getAffiliateSetting = () => ({
        types: [
          i.GET_AFFILIATE_SETTING_REQUEST,
          i.GET_AFFILIATE_SETTING_SUCCESS,
          i.GET_AFFILIATE_SETTING_FAILURE,
        ],
        promiseType: "",
        promises: [
          (e) =>
            e({
              url: `${l.baseURL}${l.default.affiliatesURL}/referralsetting?langs=${n.currLocale}`,
              method: "GET",
            }),
        ],
      })),
        (t.registerAffiliate = () => ({
          types: [
            i.PUT_REGISTER_AFFILIATE_REQUEST,
            i.PUT_REGISTER_AFFILIATE_SUCCESS,
            i.PUT_REGISTER_AFFILIATE_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${l.baseURL}${l.default.affiliatesURL}/affiliateid`,
                method: "PUT",
              }),
          ],
        })),
        (t.getAffiliateInfo = (e) => {
          const t = r.default.stringify(e);
          return {
            types: [
              i.GET_AFFILIATE_INFO_REQUEST,
              i.GET_AFFILIATE_INFO_SUCCESS,
              i.GET_AFFILIATE_INFO_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${l.baseURL}${l.default.affiliatesURL}/info?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getAffiliateSettlement = (e) => {
          const t = r.default.stringify(e);
          return {
            types: [
              i.GET_AFFILIATE_SETTLEMENT_REQUEST,
              i.GET_AFFILIATE_SETTLEMENT_SUCCESS,
              i.GET_AFFILIATE_SETTLEMENT_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${l.baseURL}${l.default.affiliatesURL}/settlement?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getAffiliateSettlementDetail = (e) => {
          const t = r.default.stringify(e);
          return {
            types: [
              i.GET_AFFILIATE_SETTLEMENT_DETAIL_REQUEST,
              i.GET_AFFILIATE_SETTLEMENT_DETAIL_SUCCESS,
              i.GET_AFFILIATE_SETTLEMENT_DETAIL_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${l.baseURL}${l.default.affiliatesURL}/settlement/overviewDetail?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getPromoImg = () =>
          (0, s.default)({
            url: `${l.baseURL}/affiliates/images/promote`,
            method: "GET",
          })),
        (t.setPromoImg = (e) =>
          (0, s.default)({
            url: `${l.baseURL}/affiliates/images/promote`,
            method: "POST",
            formData: {
              file: e,
            },
          }));
    },
    37822: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    38748: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(a(96540));
      var r = o(a(23523)),
        i = o(a(5689)),
        n = o(a(71508));
      a(48133);
      var l = a(74848);
      t.default = (e) => {
        let {
          DefaultIcon: t,
          EditIcon: a,
          className: o,
          otherUserAvatarUrl: s,
        } = e;
        const { isHideAvatar: d, pictureUrl: u } = (0, i.default)(s);
        return d
          ? t
            ? (0, l.jsx)(t, {})
            : null
          : (0, l.jsxs)(l.Fragment, {
              children: [
                (0, l.jsx)(r.default, {
                  path: u,
                  alt: "avatar",
                  className: (0, n.default)("cycle-style", o),
                }),
                a && (0, l.jsx)(a, {}),
              ],
            });
      };
    },
    39921: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = o(a(1166)),
        n = a(67467),
        l = a(28651),
        s = o(a(72524)),
        d = a(38560),
        u = a(8087),
        _ = a(15062),
        E = a(67585),
        p = o(a(55665));
      t.default = (e) => {
        const t = (0, l.useHistory)(),
          { path: a } = (0, l.useRouteMatch)(),
          o = (0, n.useSelector)((e) => e.players.logined),
          { isShowMcVip: f, isSSVipEnable: c } = (0, i.default)(),
          {
            ecDisplayActivityMission: m,
            rewardActivityList: T,
            missionVisibleByRisk: S,
          } = (0, p.default)((e) => ({
            ecDisplayActivityMission:
              e.dashboard.ecDisplaySetting.ecDisplayActivityMission,
            rewardActivityList: e.dashboard.rewardActivityList,
            missionVisibleByRisk: e.players.player.missionVisibleByRisk,
          })),
          [A, g] = (0, s.default)(() => ({
            eventRoulette: null,
            eventRank: null,
            vipPageType: u.activitiesVipPageType.DISABLE,
          })),
          R = (0, r.useMemo)(() => {
            if (null == T || !T.giftPromo) return null;
            const e = Array.isArray(T.giftPromo) ? T.giftPromo : [T.giftPromo];
            if (!e.length) return null;
            const t = e.reduce((e, t) => {
              var a;
              const {
                  startdate: o,
                  enddate: r,
                  dailystarttime: i,
                  dailyendtime: n,
                  defaultStyle: l,
                  promobanner: s,
                  promoStatisticsType: d = "DEPOSIT",
                } = t,
                _ = null === (a = s[0]) || void 0 === a ? void 0 : a.promoid,
                { redImgUrl: p, giftPromoStatus: f } = (0,
                E.getRedEnvelopeInfo)({
                  startdate: o,
                  enddate: r,
                  dailystarttime: i,
                  dailyendtime: n,
                  defaultStyle: l,
                  promobanner: s,
                });
              return (
                f === u.giftPromoEnum.IN_PROGRESS &&
                  (e[d] = {
                    redImgUrl: p,
                    promoid: _,
                  }),
                e
              );
            }, {});
            return Object.keys(t).length ? t : null;
          }, [T]),
          y = null == R ? void 0 : R.YESTERDAY_VALID_BET,
          P = null == y ? void 0 : y.redImgUrl,
          U = null == R ? void 0 : R.DEPOSIT,
          L = null == U ? void 0 : U.redImgUrl,
          C = (0, r.useMemo)(
            () =>
              A.vipPageType === u.activitiesVipPageType.PERSONAL_CENTER_PAGE
                ? c
                  ? _.paths.SSVIP
                  : _.paths.VIP
                : _.paths.MY_VIP,
            [c, A.vipPageType]
          ),
          I = (0, r.useMemo)(
            () =>
              !!A.eventRoulette &&
              A.eventRoulette.rouletteStatus ===
                u.rouletteStatusEnum.IN_PROGRESS &&
              (d.isDesktop
                ? A.eventRoulette.rouletteEcWebViewType ===
                  u.promoViewTypeEnum.defaultView
                : A.eventRoulette.rouletteEcMobileViewType ===
                  u.promoViewTypeEnum.defaultView),
            [A.eventRoulette]
          ),
          O = (0, r.useMemo)(
            () =>
              !(
                !A.eventRank ||
                (A.eventRank.leaderboardviewtype ===
                  u.leaderboardViewTypeEnum.AFTER_LOGIN &&
                  !o) ||
                A.eventRank.promoviewtype !== u.promoViewTypeEnum.defaultView
              ),
            [A.eventRank, o]
          ),
          b = (0, r.useMemo)(
            () =>
              A.vipPageType === u.activitiesVipPageType.VIP_STATIC_PAGE ||
              (o
                ? f && A.vipPageType !== u.activitiesVipPageType.DISABLE
                : A.vipPageType !== u.activitiesVipPageType.DISABLE),
            [A.vipPageType, o, f]
          ),
          M = (0, r.useMemo)(() => a !== _.paths.MISSION && m && S, [m, a, S]),
          h = R || I || O || b || M;
        return (
          (0, r.useEffect)(() => {
            const { depositLeaderboard: e, roulette: t, vipPageType: a } = T;
            let o = {};
            t && (o.eventRoulette = t),
              e && (o.eventRank = e),
              a && (o.vipPageType = a),
              Object.keys(o).length > 0 && g(o);
          }, [T]),
          {
            hasActivity: h,
            redEnvelopeUrl: P,
            depositRedEnvelopeUrl: L,
            redirectToVip: () => {
              A.vipPageType !== u.activitiesVipPageType.PERSONAL_CENTER_PAGE ||
              o
                ? t.push(C)
                : d.isDesktop
                ? e && e(C)
                : t.push(_.paths.LOGIN, {
                    path: C,
                  });
            },
            redircetToMission: () => {
              o
                ? t.push(_.paths.MISSION)
                : d.isDesktop
                ? e && e(_.paths.MISSION)
                : t.push(_.paths.LOGIN, {
                    path: _.paths.MISSION,
                  });
            },
            isShowEventRoulette: I,
            isShowEventRank: O,
            isShowMenuVip: b,
            isShowMission: M,
            state: A,
          }
        );
      };
    },
    48133: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    48841: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return r.default;
          },
        });
      var r = o(a(69762));
      a(58738);
    },
    50974: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.PUT_CLAIM_ANYTIME_REBATE_SUCCESS =
          t.PUT_CLAIM_ANYTIME_REBATE_REQ =
          t.PUT_CLAIM_ANYTIME_REBATE_FAILURE =
            void 0),
        (t.PUT_CLAIM_ANYTIME_REBATE_REQ = "PUT_CLAIM_ANYTIME_REBATE_REQ"),
        (t.PUT_CLAIM_ANYTIME_REBATE_SUCCESS =
          "PUT_CLAIM_ANYTIME_REBATE_SUCCESS"),
        (t.PUT_CLAIM_ANYTIME_REBATE_FAILURE =
          "PUT_CLAIM_ANYTIME_REBATE_FAILURE");
    },
    51246: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(a(96540));
      var r = a(40961),
        i = o(a(46942)),
        n = a(51628),
        l = a(74848);
      t.default = (e) => {
        const {
            id: t = Date.now(),
            onClose: a,
            onConfirm: o,
            children: s,
            className: d,
            title: u,
            confirm: _,
            button: E = !0,
            closeTxt: p,
            hasTitle: f = !0,
            customBtn: c,
            isHideCloseTxt: m = !1,
          } = e,
          T = () => {
            a && a();
          };
        return (0, r.createPortal)(
          (0, l.jsxs)("div", {
            id: t,
            className: (0, i.default)("modal-container", d),
            children: [
              (0, l.jsx)("div", {
                className: "modal-backdrop",
                onClick: T,
              }),
              (0, l.jsxs)("div", {
                className: "portal-modal",
                children: [
                  f &&
                    (0, l.jsx)("div", {
                      className: "modal-title",
                      children: u || n.i18n.tipsModal,
                    }),
                  (0, l.jsx)("span", {
                    onClick: T,
                    className: "modal-close-btn",
                    children: (0, l.jsx)("span", {
                      children: "×",
                    }),
                  }),
                  (0, l.jsx)("div", {
                    className: "modal-content",
                    children: s,
                  }),
                  E &&
                    (0, l.jsxs)("div", {
                      className: "modal-btn",
                      children: [
                        _ &&
                          (0, l.jsx)("button", {
                            type: "button",
                            className: "sec-btn",
                            onClick: T,
                            children: n.i18n.cancel,
                          }),
                        !m &&
                          (0, l.jsx)("button", {
                            type: "button",
                            className: (0, i.default)({
                              "pri-btn": !c,
                              "sec-btn": c,
                            }),
                            onClick: () => {
                              o ? o() : T();
                            },
                            children: p || n.i18n[_ ? "confirm" : "close"],
                          }),
                        c &&
                          (0, l.jsx)("button", {
                            type: "button",
                            className: "pri-btn",
                            onClick: () => {
                              T(), c.onClickAction && c.onClickAction();
                            },
                            children: c.customBtnText,
                          }),
                      ],
                    }),
                ],
              }),
            ],
          }),
          document.querySelector("body")
        );
      };
    },
    52468: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = o(a(95093));
      t.default = function (e) {
        let {
          seconds: t = 0,
          onEnd: a,
          asSeconds: o = !1,
          timeout: n = 500,
        } = e;
        const l = (0, r.useRef)(),
          s = (0, r.useRef)(new Date().getTime() + 1e3 * t),
          [d, u] = (0, r.useState)(1e3 * t),
          _ = () => {
            const e = new Date().getTime();
            if (e >= s.current)
              return clearTimeout(l.current), void (a && a(u));
            u(s.current - e);
          };
        if (
          ((0, r.useEffect)(() => {
            const e = setTimeout(_, n);
            return (l.current = e), () => clearTimeout(l.current);
          }, [d]),
          o)
        )
          return Math.floor(d / 1e3);
        const E = i.default.duration(Math.floor(d / 1e3), "seconds"),
          p = Math.floor(E.asDays()),
          f = E.hours();
        return {
          hours: Math.floor(E.asHours()),
          minutes: E.minutes(),
          seconds: E.seconds(),
          daysData: {
            days: p,
            hoursByDay: f,
          },
        };
      };
    },
    53719: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.switchPromoCategory =
          t.refreshPromoCenter =
          t.refreshNotiCenterRewardInfo =
          t.postTransferToMainAndGetBalanceForSelect =
          t.postPromoReq =
          t.postClaim =
          t.openUserPromoStatistics =
          t.modifyPromoDetailModalDispaly =
          t.initUserPromoStatistics =
          t.getUserPromos =
          t.getUserPromoStatistics =
          t.getUserGiftPromos =
          t.getPromos =
          t.getPromoWinners =
          t.getPromoDashboard =
          t.getPromoCurrent =
          t.getMemberCenterPromos =
          t.getLatestDepositList =
          t.getGiftPromo =
          t.getFloatingAds =
          t.getDepositamtForSelfselect =
          t.getDepositRankingList =
          t.getDepositRankingInfo =
          t.getDepositPromoOpts =
          t.getDepositPromoDetails =
          t.getBanners =
          t.getAccumulatedPromoDetHistory =
          t.getAccumulatedPromoDet =
          t.closeAdsAction =
          t.claimAllPromosAndAnytimeRebate =
            void 0);
      var r = a(74376),
        i = o(a(86663)),
        n = o(a(32080)),
        l = p(a(68686)),
        s = o(a(94188)),
        d = a(38560),
        u = a(8087),
        _ = a(51628),
        E = p(a(61625));
      function p(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (p = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      const f = d.isMobile ? 1 : 2;
      (t.getPromos = (e) => ({
        types: [
          E.GET_PROMOS_REQUEST,
          E.GET_PROMOS_SUCCESS,
          E.GET_PROMOS_FAILURE,
        ],
        promiseType: "",
        promises: [
          () =>
            (0, n.default)({
              url: `${l.baseURL}${l.default.promopostingsURL}?${e}`,
              method: "GET",
            }),
        ],
      })),
        (t.getUserPromos = (e, t) => {
          const a = {
              forplayer: !0,
              offset: 0,
              limit: 10,
              sortcolumn: "createdat",
              sort: "DESC",
              promogroup1: 0,
              group1promotypes: u.GROUP1_PROMOTYPES,
              ...e,
            },
            o = i.default.stringify(a);
          return {
            types: [
              E.GET_USER_PROMOS_REQUEST,
              E.GET_USER_PROMOS_SUCCESS,
              E.GET_USER_PROMOS_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.promoreqsURL}?${o}`,
                  method: "GET",
                }),
            ],
            last5: t,
          };
        }),
        (t.postPromoReq = (e) => {
          let { autoapprove: t, ...a } = e;
          const o = i.default.stringify(a);
          return {
            types: [
              E.POST_PROMO_REQ_REQUEST,
              E.POST_PROMO_REQ_SUCCESS,
              E.POST_PROMO_REQ_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.promoreqsURL}?${o}`,
                  method: "POST",
                }),
            ],
            autoapprove: t,
          };
        }),
        (t.postClaim = (e) => ({
          types: [
            E.POST_CLAIM_REQUEST,
            E.POST_CLAIM_SUCCESS,
            E.POST_CLAIM_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, n.default)({
                url: `${l.baseURL}${l.default.claimURL}?promoreqid=${e}`,
                method: "POST",
              }),
          ],
          promoreqid: e,
        })),
        (t.getBanners = () => ({
          types: [
            E.GET_BANNERS_REQUEST,
            E.GET_BANNERS_SUCCESS,
            E.GET_BANNERS_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, n.default)({
                url: `${l.baseURL}${l.default.adsURL}?language=${
                  r.localeToLang[_.currLocale]
                }&platform=${f}`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.getDepositamtForSelfselect = (e) => {
          const t = i.default.stringify(e);
          return {
            types: [
              E.GET_DEPOSITAMT_FOR_SELECT_REQ_REQUEST,
              E.GET_DEPOSITAMT_FOR_SELECT_REQ_SUCCESS,
              E.GET_DEPOSITAMT_FOR_SELECT_REQ_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.promoDepositamtForSelfselectURL}?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.postTransferToMainAndGetBalanceForSelect = (e) => {
          const t = i.default.stringify(e);
          return {
            types: [
              E.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_REQUEST,
              E.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_SUCCESS,
              E.POST_TRANSFERTOMAIN_AND_GETBALANCE_REQ_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.promoTransferToMainAndGetBalanceForSelectURL}?${t}`,
                  method: "POST",
                }),
            ],
          };
        }),
        (t.switchPromoCategory = (e) => ({
          type: E.SWITCH_PROMO_CATEGORY,
          payload: e,
        })),
        (t.modifyPromoDetailModalDispaly = (e) => ({
          type: E.MODIFY_PROMO_DETAIL_MODAL_DISPLAY,
          payload: e,
        })),
        (t.getFloatingAds = (e) => {
          const t = i.default.stringify(e);
          return {
            types: [
              E.GET_FLOATING_ADS_REQUEST,
              E.GET_FLOATING_ADS_SUCCESS,
              E.GET_FLOATING_ADS_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.floatingadsURL}?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getPromoWinners = (e) => {
          const t = i.default.stringify({
            locale: _.currLocale,
            promoid: e,
          });
          return {
            types: [
              E.GET_PROMO_WINNERS_REQUEST,
              E.GET_PROMO_WINNERS_SUCCESS,
              E.GET_PROMO_WINNERS_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}/depositGiftCarouselList?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGiftPromo = function () {
          let { promoStatisticsType: e, promoId: t } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          const a = i.default.stringify({
            currency: s.default.defaultCurrency,
            platform: f,
            locale: _.currLocale,
            promoId: t,
            promoStatisticsType: e,
          });
          return {
            types: [
              E.GET_GIFT_PROMO_REQUEST,
              E.GET_GIFT_PROMO_SUCCESS,
              E.GET_GIFT_PROMO_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.giftpromoURL}?${a}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getUserGiftPromos = (e) => {
          const t = i.default.stringify({
            forplayer: !0,
            offset: 0,
            limit: 10,
            sortcolumn: "createdat",
            sort: "DESC",
            promogroup1: 0,
            group1promotypes: [8],
          });
          return {
            types: [
              E.GET_USER_GIFT_PROMOS_REQUEST,
              E.GET_USER_GIFT_PROMOS_SUCCESS,
              E.GET_USER_GIFT_PROMOS_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}${l.default.promoreqsURL}?${t}`,
                  method: "GET",
                }),
            ],
            promoid: e,
          };
        }),
        (t.getPromoCurrent = (e) => {
          let { promoType: t, ...a } = e;
          const o = i.default.stringify({
            ...a,
            lang: _.currLocale,
          });
          return (0, n.default)({
            url: `${l.baseURL}/promos/${t}/current?${o}`,
            method: "GET",
          }).then((e) => e.payload);
        }),
        (t.getDepositRankingList = (e) =>
          (0, n.default)({
            url: `${l.baseURL}/depositRankingList?promoid=${e}`,
            method: "GET",
          }).then((e) => e.payload)),
        (t.getLatestDepositList = (e) => {
          const t = i.default.stringify(e);
          return (0, n.default)({
            url: `${l.baseURL}/latestDepositList?${t}`,
            method: "GET",
          }).then((e) => e.payload);
        }),
        (t.getMemberCenterPromos = () => {
          const e = i.default.stringify({
            currency: s.default.defaultCurrency,
            platform: f,
            locale: _.currLocale,
          });
          return (0, n.default)({
            url: `${l.baseURL}/memberCenterSetting/promoAds?${e}`,
            method: "GET",
          });
        }),
        (t.closeAdsAction = {
          mobileTopAd: function () {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return {
              type: E.CLOSE_ADS_ACTION,
              adsType: [u.floatingAdsTypeMapNameEnum.MOBILE, "top"],
              isClose: e,
            };
          },
          mobileBottomAd: function () {
            let e =
              !(arguments.length > 0 && void 0 !== arguments[0]) ||
              arguments[0];
            return {
              type: E.CLOSE_ADS_ACTION,
              adsType: [u.floatingAdsTypeMapNameEnum.MOBILE, "bottom"],
              isClose: e,
            };
          },
        }),
        (t.getDepositPromoOpts = () => ({
          types: [
            E.GET_DEPOSIT_PROMO_OPTS_REQUEST,
            E.GET_DEPOSIT_PROMO_OPTS_SUCCESS,
            null,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, n.default)({
                url: `${l.baseURL}/promos/depositOptions`,
                method: "GET",
              }),
          ],
        })),
        (t.getUserPromoStatistics = (e) => ({
          types: [
            E.GET_USER_PROMO_STATIST_REQUEST,
            E.GET_USER_PROMO_STATIST_SUCCESS,
            E.GET_USER_PROMO_STATIST_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, n.default)({
                url: `${l.baseURL}/promostatic/${e}`,
                method: "GET",
              }),
          ],
        })),
        (t.initUserPromoStatistics = () => ({
          type: E.INIT_USER_PROMO_STATIST_REQUEST,
        })),
        (t.openUserPromoStatistics = () => ({
          type: E.OPEN_USER_PROMO_STATIST,
        })),
        (t.getDepositRankingInfo = (e) => {
          const t = i.default.stringify({
            promoId: e,
            platform: f,
            locale: _.currLocale,
          });
          return (0, n.default)({
            url: `${l.baseURL}/depositRankingInfo?${t}`,
            method: "GET",
          });
        }),
        (t.claimAllPromosAndAnytimeRebate = function () {
          let { type: e } =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            types: [null, null, E.CLAIM_ALL_PROMOS_AND_ANYTIMEREBATE_FAILURE],
            promiseType: "",
            promises: [
              () =>
                (0, n.default)({
                  url: `${l.baseURL}/claimAll${e ? `?type=${e}` : ""}`,
                  method: "POST",
                }),
            ],
          };
        }),
        (t.refreshPromoCenter = () => ({
          type: E.REFRESH_PROMO_CENTER,
        })),
        (t.refreshNotiCenterRewardInfo = (e) => ({
          type: E.REFRESH_NOTI_CENTER_REWARD_INFO,
          rewardType: e,
        })),
        (t.getPromoDashboard = () =>
          (0, n.default)({
            url: `${l.baseURL}/memberCenterSetting/promoDashboard`,
            method: "GET",
          })),
        (t.getAccumulatedPromoDet = () =>
          (0, n.default)({
            url: `${l.baseURL}/memberCenterSetting/accumulatedRewardDet`,
            method: "GET",
          })),
        (t.getAccumulatedPromoDetHistory = (e) =>
          (0, n.default)({
            url: `${
              l.baseURL
            }/memberCenterSetting/accumulatedRewardDet/history?${i.default.stringify(
              e
            )}`,
            method: "GET",
          })),
        (t.getDepositPromoDetails = () =>
          (0, n.default)({
            url: `${
              l.baseURL
            }/memberCenterDepositPromoDetails?${i.default.stringify({
              locale: _.currLocale,
            })}`,
            method: "GET",
          }));
    },
    55665: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = a(67467);
      t.default = (e) => (0, o.useSelector)(e, o.shallowEqual);
    },
    56209: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.postCollectError = t.getDepositInfo = void 0);
      var r = o(a(32080)),
        i = a(68686);
      (t.postCollectError = (e) =>
        (0, r.default)({
          url: `${i.baseURL}/logs/collectError`,
          method: "POST",
          jsonStr: JSON.stringify(e),
        })),
        (t.getDepositInfo = () =>
          (0, r.default)({
            url: `${i.baseURL}/adEventFirstDeposit`,
            method: "GET",
          }));
    },
    56566: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              o,
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
                ((o =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? a(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(96540)),
        i = (o(a(5556)), o(a(94188))),
        n = a(78106),
        l = o(a(15062)),
        s = a(74848);
      const d = i.default.brand.code,
        u = {
          st666: {
            [l.default.ULAGENT_APPLY]: l.default.ROOT,
          },
        };
      t.default = (e) => {
        let { from: t, children: a } = e;
        const o = (0, r.useMemo)(() => {
          var e;
          return null === (e = u[d]) || void 0 === e ? void 0 : e[t];
        }, [t]);
        return o
          ? (0, s.jsx)(n.Redirect, {
              to: o,
            })
          : a;
      };
    },
    57160: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getFingerprint2 = function (e) {
          const t = n.default.get("fingerPrint");
          if (i.isNativeApp && t) e(t);
          else if (f) {
            let t = !1;
            const { f: a, t: o, h: r } = n.default.get(_) || {};
            try {
              const e = Date.now() - (o || 0);
              (!a || !o || e >= E || T(a, o, r)) && (t = !0);
            } catch (e) {
              t = !0;
            }
            t
              ? c
                  .then((e) =>
                    e.get({
                      timeout: 5e3,
                    })
                  )
                  .then((t) => {
                    const a = Date.now();
                    n.default.set(_, {
                      f: t.visitorId,
                      t: a,
                      h: m(t.visitorId, a),
                    }),
                      e(t.visitorId);
                  })
                  .catch(() => {
                    S(e);
                  })
              : e(a);
          } else S(e);
        }),
        (t.initFp = void 0);
      var r,
        i = a(83597),
        n = o(a(27179)),
        l = o(a(94188)),
        s = o(a(63009)),
        d = o(a(40955)),
        u = o(a(95178));
      const _ = "fpviinfo",
        E = 1e3,
        { code: p } = l.default.brand,
        f = null === (r = {}.prod) || void 0 === r ? void 0 : r[p];
      let c;
      t.initFp = () => {
        f &&
          a
            .e(9373)
            .then(a.bind(a, 9373))
            .then((e) => {
              let t = {
                apiKey:
                  ((a = f.p),
                  d.default.decrypt(a, `${_}${E}`).toString(u.default)),
              };
              var a;
              f.r && (t.region = f.r), (c = e.load(t));
            });
      };
      const m = (e, t) => {
          return f
            ? ((a = `${t}__${f.p}--${e}||${f.r || "---"}`),
              (0, s.default)(a).toString())
            : "";
          var a;
        },
        T = (e, t, a) => m(e, t) !== a,
        S = (e) => {
          a.e(1750)
            .then(a.t.bind(a, 71750, 23))
            .then((t) => {
              t.default.getV18(
                {
                  excludes: {
                    fonts: !0,
                    enumerateDevices: !0,
                  },
                },
                function (t, a) {
                  e(t);
                }
              );
            });
        };
    },
    57477: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var o = a(76066);
      const r = a(40060).A,
        i = (e) => {
          r.dispatch(e);
        };
      t.default = () => {
        const e = (e) => {
          switch (e.key) {
            case "token":
              e.newValue || i((0, o.logoutUser)());
              break;
            case "updatePlayerInfoReadySuccess":
              e.newValue &&
                (i((0, o.getUserProfile)()), i((0, o.checkPlayerInfoReady)()));
          }
        };
        return (
          window.addEventListener("storage", e),
          () => {
            window.removeEventListener("storage", e);
          }
        );
      };
    },
    58009: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = o(a(55665)),
        n = o(a(94188));
      const { code: l } = n.default.brand;
      t.default = (e) => {
        let { children: t, exclude: a = [], waitAllGameList: o = !1 } = e;
        const [n, s] = (0, r.useState)(!1),
          { allGameList: d, pageLoaded: u } = (0, i.default)((e) => ({
            pageLoaded: e.app.pageLoaded,
            allGameList: e.games.allGameList,
          })),
          _ = u && (!o || !!d.size);
        return (
          (0, r.useEffect)(() => {
            _ && (a.includes(l) || s(!0));
          }, [_, a]),
          "function" == typeof t ? t(n) : n ? t : null
        );
      };
    },
    58738: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    63237: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(96540),
        i = a(67467),
        n = a(28651),
        l = o(a(27179)),
        s = o(a(36188)),
        d = a(94187),
        u = o(a(15062)),
        _ = a(93185);
      t.default = function () {
        let { toggleLoginPopup: e } =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        const t = (0, n.useHistory)(),
          a = (0, i.useSelector)((e) => e.players.logined);
        return (0, r.useCallback)(
          (o) => {
            if (!a)
              return (
                window.isDesktop
                  ? e && e()
                  : window.isMobile &&
                    (t
                      ? t.push(u.default.LOGIN)
                      : (window.location.href = `${window.location.origin}${u.default.LOGIN}`)),
                !1
              );
            l.default.set("launchGameData", o), (0, d.setIframeStatus)();
            try {
              s.default.launchGame(o);
            } catch (e) {}
            window.isTMA || window.isIframe
              ? t.push(u.default.LAUNCHGAME, {
                  safeBack: !0,
                })
              : (0, _.openSingleWindow)(
                  "gameWindowInstance",
                  u.default.LAUNCHGAME
                ),
              (window.gameWindowClosed = !1);
          },
          [t, a, e]
        );
      };
    },
    65102: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              o,
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
                ((o =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (o.get || o.set)
                  ? a(r, t, o)
                  : (r[t] = e[t]));
            return r;
          })(e);
        })(a(96540)),
        i = a(28651),
        n = a(3057),
        l = a(38560),
        s = o(a(2805)),
        d = a(51628),
        u = a(15062),
        _ = a(74848);
      const E = a(96273)(`./${l.platform}/common/LoadingModal`).default;
      t.default = (e) => {
        let { validationType: t, children: a } = e;
        const o = (0, i.useHistory)(),
          { isReady: l, getValidationStatus: p } = (0, s.default)(),
          { isEmailRequired: f, isMobileRequired: c } = p(t),
          m = !c && !f,
          T = (0, r.useMemo)(
            () =>
              c && f
                ? d.i18n["email.and.mobile.validate.before.enter"]
                : c
                ? d.i18n["mobile.validate.validate.before.enter"]
                : f
                ? d.i18n["email.validate.validate.before.enter"]
                : void 0,
            [c, f]
          );
        return l
          ? (0, _.jsx)(r.default.Fragment, {
              children: m
                ? "function" == typeof a
                  ? a()
                  : a
                : (0, _.jsx)(n.AlertModal, {
                    onHandleClose: () => {
                      o.push(u.paths.VALIDATE_PAGE, {
                        validationType: t,
                      });
                    },
                    title: d.i18n.tipsModal,
                    message: T,
                  }),
            })
          : (0, _.jsx)(E, {});
      };
    },
    67585: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.showFloatingPromoPath = t.getRedEnvelopeInfo = void 0);
      var r = o(a(94188)),
        i = a(38560),
        n = a(8087),
        l = a(70913),
        s = o(a(15062));
      const d = r.default.portal.apiServer.imageServer;
      (t.getRedEnvelopeInfo = (e) => {
        let {
            startdate: t,
            enddate: a,
            dailystarttime: o,
            dailyendtime: r,
            promobanner: s,
            defaultStyle: u,
          } = e,
          _ = n.giftPromoEnum.NONE,
          E = null,
          p = null,
          f = null;
        const c = new Date().getTime(),
          m = (e, t) => Math.floor((t - e) / 1e3);
        if (c >= t && c <= a)
          if (((_ = n.giftPromoEnum.IN_PROGRESS), null !== o && null !== r)) {
            const e = new Date().setHours(0, 0, 0, 0),
              t = e + (o - l.timeZoneDiffbyMs),
              i = e + (r - l.timeZoneDiffbyMs);
            if (c >= t && c <= i) E = m(c, i);
            else if (c <= t) (_ = n.giftPromoEnum.UPCOMING), (E = m(c, t));
            else {
              const e = new Date().setHours(23, 59, 59, 999) + o;
              e < a
                ? ((_ = n.giftPromoEnum.UPCOMING), (E = m(c, e)))
                : (_ = n.giftPromoEnum.EXPIRED);
            }
          } else E = m(c, a);
        else
          c <= t
            ? ((_ = n.giftPromoEnum.UPCOMING), (E = m(c, o ? t + o : t)))
            : (_ = n.giftPromoEnum.EXPIRED);
        if (_ === n.giftPromoEnum.IN_PROGRESS) {
          const e = s.find((e) => e.type === n.giftPromoImageEnum.ICON),
            t = null == e ? void 0 : e.imageurl;
          p =
            (null != e && e.useDefault) || !t
              ? `../images/red-envelope/redLottery__redBag__${u}.png`
              : `${d}${t}`;
        }
        if (s) {
          const e = s.find((e) => e.type === n.giftPromoImageEnum[_]),
            t = null == e ? void 0 : e.imageurl;
          f =
            (null != e && e.useDefault) || !t
              ? i.isDesktop
                ? `../images/red-envelope/banner__img_${u}.png`
                : `../images/red-envelope/banner__img_${u}--m.png`
              : `${d}${t}`;
        }
        return {
          redImgUrl: p,
          redBannerUrl: f,
          giftPromoStatus: _,
          countDownSeconds: E,
        };
      }),
        (t.showFloatingPromoPath = [s.default.ROOT, s.default.SPORT_PAGE]);
    },
    68908: (e, t, a) => {
      "use strict";
      a.r(t);
    },
    69762: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(a(96540));
      var r = o(a(85935)),
        i = o(a(46942)),
        n = a(74848);
      t.default = (e) => {
        const {
          className: t = "",
          onHandleClose: a,
          onHandleConfirm: o,
          message: l,
          success: s = !1,
          icon: d = !0,
          msgDOMId: u,
          children: _,
          ...E
        } = e;
        let p = "../images/icon-note.png";
        return (
          s && (p = "../images/success-icon.png"),
          (0, n.jsxs)(r.default, {
            className: (0, i.default)("alert-modal", t),
            onClose: a,
            onConfirm: o,
            ...E,
            children: [
              d &&
                (0, n.jsx)("span", {
                  className: "icon text-center",
                  children: (0, n.jsx)("img", {
                    alt: "icon",
                    src: p,
                  }),
                }),
              (0, n.jsxs)("div", {
                className: "alert-modal-content",
                children: [
                  (0, n.jsx)("span", {
                    className: "alert-message",
                    id: u || "mobile-alert-modal-msg",
                    children: l,
                  }),
                  _
                    ? (0, n.jsx)("div", {
                        className: "children-content",
                        children: _,
                      })
                    : null,
                ],
              }),
            ],
          })
        );
      };
    },
    70401: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.POST_API_STATS_SUCCESS =
          t.POST_API_STATS_REQUEST =
          t.POST_API_STATS_FAILURE =
            void 0),
        (t.POST_API_STATS_REQUEST = "ajax/POST_API_STATS_REQUEST"),
        (t.POST_API_STATS_SUCCESS = "ajax/POST_API_STATS_SUCCESS"),
        (t.POST_API_STATS_FAILURE = "ajax/POST_API_STATS_FAILURE");
    },
    74376: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.ugamingLangEnum =
          t.sbobetLangEnum =
          t.sabaLangEnum =
          t.localesMap =
          t.localesData =
          t.localeToNickname =
          t.localeToLang =
          t.iSO639_1CodeEnum =
          t.currency =
          t.btiLangEnum =
            void 0),
        (t.currency = {
          USD: "USD",
          TWD: "TWD",
          CNY: "CNY",
          THB: "THB",
          VND: "VND",
          VND2: "VND(k)",
          IDR: "IDR",
          IDR2: "IDR(k)",
          INR: "INR",
          PHP: "PHP",
          MMK: "MMK",
          MMK2: "MMK(k)",
          BRL: "BRL",
          NGN: "NGN",
          USDT: "USDT",
          LAK: "LAK",
          LAK2: "LAK(k)",
          HKD: "HKD",
          BDT: "BDT",
          PGK: "PGK",
          AUD: "AUD",
          KRW: "KRW",
          MXN: "MXN",
          NPR: "NPR",
          RUB: "RUB",
          PKR: "PKR",
          LKR: "LKR",
        });
      const a = (t.localesData = {
          "en-US": {
            localeId: 1,
            nickname: "us",
            locale: "English",
            iSO639_1Code: "en",
          },
          "zh-CN": {
            localeId: 2,
            nickname: "cn",
            locale: "简体中文",
            ugamingLang: "zh_cn",
            sabaLang: "zhcn",
            sbobetLang: "zh-cn",
            btiLang: "zh",
            iSO639_1Code: "zh-Hans",
          },
          "zh-TW": {
            localeId: 3,
            nickname: "hk",
            locale: "繁體中文",
            ugamingLang: "zh_cn",
            sabaLang: "ch",
            sbobetLang: "zh-tw",
            btiLang: "zh",
            iSO639_1Code: "zh-Hant-HK",
          },
          "vi-VN": {
            localeId: 4,
            nickname: "vn",
            locale: "Tiếng Việt",
            ugamingLang: "vi",
            sabaLang: "vn",
            sbobetLang: "vi-vn",
            btiLang: "vi",
            iSO639_1Code: "vi",
          },
          "th-TH": {
            localeId: 5,
            nickname: "th",
            locale: "ไทย",
            ugamingLang: "th",
            sabaLang: "th",
            sbobetLang: "th-th",
            btiLang: "th",
            iSO639_1Code: "th",
          },
          "id-ID": {
            localeId: 6,
            nickname: "id",
            locale: "Indonesia",
            ugamingLang: "id",
            sbobetLang: "id-id",
            btiLang: "id",
            iSO639_1Code: "id",
          },
          "ms-MY": {
            localeId: 7,
            nickname: "my",
            locale: "Malay",
            iSO639_1Code: "ms",
          },
          "ja-JP": {
            localeId: 8,
            nickname: "jp",
            locale: "日本語",
            sbobetLang: "ja-jp",
            btiLang: "ja",
            iSO639_1Code: "ja",
          },
          "hi-IN": {
            localeId: 9,
            nickname: "in",
            locale: "हिंदी",
            iSO639_1Code: "in",
          },
          "ta-IN": {
            localeId: 10,
            nickname: "in",
            locale: "தமிழ்",
            iSO639_1Code: "in",
          },
          "ml-IN": {
            localeId: 11,
            nickname: "in",
            locale: "മലയാളം",
            iSO639_1Code: "in",
          },
          "my-MM": {
            localeId: 12,
            nickname: "mm",
            locale: "မြန်မာ",
            iSO639_1Code: "my",
          },
          "pt-BR": {
            localeId: 13,
            nickname: "br",
            locale: "Português",
            iSO639_1Code: "pt",
          },
          "es-MX": {
            localeId: 14,
            nickname: "mx",
            locale: "Español",
            iSO639_1Code: "es",
          },
          "km-KH": {
            localeId: 15,
            nickname: "kh",
            locale: "ខ្មែរ",
            iSO639_1Code: "km",
          },
          "ko-KR": {
            localeId: 16,
            nickname: "kr",
            locale: "한국어",
            iSO639_1Code: "ko",
          },
          "it-IT": {
            localeId: 17,
            nickname: "it",
            locale: "Italiano",
            iSO639_1Code: "it",
          },
          "tl-PH": {
            localeId: 18,
            nickname: "ph",
            locale: "Tagalog",
            iSO639_1Code: "tl",
          },
          "bn-BD": {
            localeId: 19,
            nickname: "bd",
            locale: "বাংলা",
            iSO639_1Code: "bd",
          },
          "lo-LA": {
            localeId: 20,
            nickname: "la",
            locale: "ລາວ",
            iSO639_1Code: "lo",
          },
          "ur-PK": {
            localeId: 21,
            nickname: "pk",
            locale: "اردو",
            iSO639_1Code: "ur",
          },
          "te-IN": {
            localeId: 22,
            nickname: "in",
            locale: "తెలుగు",
            iSO639_1Code: "te",
          },
          "kn-IN": {
            localeId: 23,
            nickname: "in",
            locale: "ಕನ್ನಡ",
            iSO639_1Code: "kn",
          },
          "ru-RU": {
            localeId: 24,
            nickname: "ru",
            locale: "Русский",
            iSO639_1Code: "ru",
          },
          "ne-NP": {
            localeId: 25,
            nickname: "ne",
            locale: "नेपाली",
            iSO639_1Code: "ne",
          },
          "ar-SA": {
            localeId: 26,
            nickname: "sa",
            locale: "العربية",
            iSO639_1Code: "ar",
          },
          "tr-TR": {
            localeId: 27,
            nickname: "tr",
            locale: "Türkçe",
            iSO639_1Code: "tr",
          },
        }),
        {
          localeToLang: o,
          localeToNickname: r,
          localesMap: i,
          ugamingLangEnum: n,
          sabaLangEnum: l,
          sbobetLangEnum: s,
          btiLangEnum: d,
          iSO639_1CodeEnum: u,
        } = [
          "ar-SA",
          "bn-BD",
          "en-US",
          "es-MX",
          "hi-IN",
          "id-ID",
          "it-IT",
          "ja-JP",
          "km-KH",
          "kn-IN",
          "ko-KR",
          "lo-LA",
          "ml-IN",
          "ms-MY",
          "my-MM",
          "ne-NP",
          "pt-BR",
          "ru-RU",
          "ta-IN",
          "te-IN",
          "th-TH",
          "tl-PH",
          "tr-TR",
          "ur-PK",
          "vi-VN",
          "zh-CN-hints",
          "zh-CN",
          "zh-TW",
        ].reduce(
          (e, t) => {
            var o, r, i, n, l, s, d, u;
            const _ = t.split("-");
            return (
              (e.localeToLang[t] =
                (null === (o = a[t]) || void 0 === o ? void 0 : o.localeId) ||
                -999),
              (e.localeToNickname[t] =
                (null === (r = a[t]) || void 0 === r ? void 0 : r.nickname) ||
                _[1].toLowerCase()),
              (e.localesMap[t] =
                (null === (i = a[t]) || void 0 === i ? void 0 : i.locale) || t),
              (e.ugamingLangEnum[t] =
                (null === (n = a[t]) || void 0 === n
                  ? void 0
                  : n.ugamingLang) || "en"),
              (e.sabaLangEnum[t] =
                (null === (l = a[t]) || void 0 === l ? void 0 : l.sabaLang) ||
                "en"),
              (e.sbobetLangEnum[t] =
                (null === (s = a[t]) || void 0 === s ? void 0 : s.sbobetLang) ||
                "en"),
              (e.btiLangEnum[t] =
                (null === (d = a[t]) || void 0 === d ? void 0 : d.btiLang) ||
                "en"),
              (e.iSO639_1CodeEnum[t] =
                (null === (u = a[t]) || void 0 === u
                  ? void 0
                  : u.iSO639_1Code) || _[0].toLowerCase()),
              e
            );
          },
          {
            localeToLang: {},
            localeToNickname: {},
            localesMap: {},
            ugamingLangEnum: {},
            sabaLangEnum: {},
            sbobetLangEnum: {},
            btiLangEnum: {},
            iSO639_1CodeEnum: {},
          }
        );
      (t.iSO639_1CodeEnum = u),
        (t.btiLangEnum = d),
        (t.sbobetLangEnum = s),
        (t.sabaLangEnum = l),
        (t.ugamingLangEnum = n),
        (t.localesMap = i),
        (t.localeToNickname = r),
        (t.localeToLang = o);
    },
    76066: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.verifyVerificationCode =
          t.verifyPassword =
          t.verifyEmailVerificationCode =
          t.verifyCaptchaImg =
          t.updateUserBalance =
          t.updateIsVerified =
          t.turnOffRegLimitPromo =
          t.triggerResetPassword =
          t.setUpgradeBounsModalOff =
          t.setTriggerCalendarOnHomeOn =
          t.setTriggerCalendarOnHomeOff =
          t.setShowCalendarOn =
          t.setShowCalendarOff =
          t.sendVerificationCodeToMobile =
          t.sendForgetPasswordSMSCode =
          t.sendForgetPasswordEmailCode =
          t.saveFingerPrint2 =
          t.resetUserPromosNoti =
          t.resetResentToken =
          t.resetRaceBonusNotification =
          t.resetPasswordWithCode =
          t.resetPassword =
          t.resetNewVipRewardNotification =
          t.resetMissionNoti =
          t.resetForgetSuccess =
          t.resetAnytimeRebateNoti =
          t.resendActivationToken =
          t.registerUser =
          t.profileSettle =
          t.profileRequiredinfo =
          t.modifyWithdrawalPassword =
          t.modifyProfilePicture =
          t.modifyProfile =
          t.modifyLoginPassword =
          t.logoutUserNoApi =
          t.logoutUser =
          t.loginUser =
          t.getUserWalletList =
          t.getUserVIPStatus =
          t.getUserSubWallet =
          t.getUserProfile =
          t.getSync =
          t.getSubWallet =
          t.getRegistrationSetting =
          t.getRandomCaptchaV2 =
          t.getRandomCaptcha =
          t.getPlayersLookup =
          t.getPlayerMobileVerifyCode =
          t.getPlayerMobileStatus =
          t.getPlayerEmailVerifyCode =
          t.getPlayerEmailStatus =
          t.getLoginSetting =
          t.getLoginCalendar =
          t.getCryptoAccountSetting =
          t.getCryptoAccountInfo =
          t.getCaptchaImg =
          t.getBankCardSetting =
          t.forgetUsername =
          t.forgetAccount =
          t.closeSentUsernamemodal =
          t.clickProfileSettleSuccess =
          t.clearResetPasswordState =
          t.clearPlayersLookup =
          t.checkTokenActivateAccount =
          t.checkResetPasswordToken =
          t.checkPlayerInfoReady =
          t.checkAffiliateWithAlert =
          t.checkAffiliate =
          t.anytimeRebateSettlement =
          t.activateAccount =
            void 0);
      var r = o(a(47186)),
        i = o(a(84636)),
        n = a(74376),
        l = o(a(32080)),
        s = p(a(68686)),
        d = a(8087),
        u = a(51628),
        _ = p(a(36697)),
        E = p(a(62144));
      function p(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (p = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      const f = n.localeToLang[u.currLocale];
      let c = !1;
      const m = () => ({
        types: [
          E.AJAX_GET_USER_PROFILE_REQUEST,
          E.AJAX_GET_USER_PROFILE_SUCCESS,
          E.AJAX_GET_USER_PROFILE_FAILURE,
        ],
        promiseType: "",
        promises: [
          () =>
            (0, l.default)({
              url: `${s.baseURL}/profile`,
              method: "GET",
            }).then((e) => {
              if (window.fbq && window.pi && !c)
                try {
                  const { email: t, mobile: a, playerid: o } = e.payload.player,
                    r = {
                      external_id: (0, i.default)(o).toString(),
                    };
                  t && (r.em = t),
                    a && (r.ph = a),
                    window.fbq("init", window.pi, r),
                    (c = !0);
                } catch (e) {}
              return e;
            }),
        ],
      });
      (t.getUserProfile = m),
        (t.getPlayerMobileStatus = (e) => {
          let {
            mobile: t,
            verifySmsActionType: a = d.verifySmsActionTypeEnum.NORMAL,
          } = e;
          return {
            types: [
              E.GET_VERIFY_STATUS_REQUEST,
              E.GET_VERIFY_STATUS_SUCCESS,
              E.GET_VERIFY_STATUS_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, l.default)({
                  url: `${s.baseURL}/sms/mobileStatus`,
                  method: "POST",
                  jsonStr: JSON.stringify({
                    mobile: t,
                    verifySmsActionType: a,
                  }),
                }),
            ],
          };
        }),
        (t.getPlayerEmailStatus = (e) => ({
          types: [
            E.GET_EMAIL_VERIFY_STATUS_REQUEST,
            E.GET_EMAIL_VERIFY_STATUS_SUCCESS,
            E.GET_EMAIL_VERIFY_STATUS_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/email/emailStatus`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.getPlayerMobileVerifyCode = (e) => {
          let {
            mobile: t,
            verifySmsActionType: a = d.verifySmsActionTypeEnum.NORMAL,
          } = e;
          return {
            types: [
              E.SEND_VERIFY_CODE_REQUEST,
              E.SEND_VERIFY_CODE_SUCCESS,
              E.SEND_VERIFY_CODE_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, l.default)({
                  url: `${s.baseURL}/sms/sendVerificationCode`,
                  method: "POST",
                  jsonStr: JSON.stringify({
                    mobile: t,
                    verifySmsActionType: a,
                  }),
                }),
            ],
          };
        }),
        (t.getPlayerEmailVerifyCode = (e) => {
          let { email: t, emailValidationActionType: a } = e;
          return {
            types: [null, null, E.SEND_EMAIL_VERIFY_CODE_FAILURE],
            promiseType: "",
            promises: [
              () =>
                (0, l.default)({
                  url: `${s.baseURL}/email/verificationCode`,
                  method: "POST",
                  jsonStr: JSON.stringify({
                    email: t,
                    emailValidationActionType: a,
                  }),
                }),
            ],
          };
        }),
        (t.sendVerificationCodeToMobile = (e, t) => (a, o) => {
          const r = o(),
            { logined: i } = r.players;
          return a(
            ((e, t) => (a, o) => {
              const r = o(),
                { logined: i } = r.players;
              return (0, l.default)({
                url: i
                  ? `${s.baseURL}/sms/mobileStatus`
                  : `${s.baseURL}/sms/mobileStatus/register`,
                method: "POST",
                jsonStr: JSON.stringify({
                  mobile: e,
                  isThirdPartyReg: t,
                }),
              })
                .then((e) => {
                  let { payload: t } = e;
                  return Promise.resolve(t);
                })
                .catch((e) => {
                  a({
                    ...e,
                    type: _.API_ERROR_CODE_498,
                    constant:
                      498 === e.code
                        ? E.GET_VERIFY_STATUS_FAILURE
                        : _.API_INTERNAL_ERROR_CODE,
                  });
                });
            })(e, t)
          ).then((o) =>
            o.canVerify
              ? a({
                  types: [
                    E.SEND_VERIFY_CODE_REQUEST,
                    E.SEND_VERIFY_CODE_SUCCESS,
                    E.SEND_VERIFY_CODE_FAILURE,
                  ],
                  promiseType: "",
                  promises: [
                    (a) =>
                      a({
                        url: i
                          ? `${s.baseURL}/sms/sendVerificationCode`
                          : `${s.baseURL}/sms/sendVerificationCode/register`,
                        method: "POST",
                        jsonStr: JSON.stringify({
                          mobile: e,
                          isThirdPartyReg: t,
                        }),
                      }),
                  ],
                })
              : a({
                  type: E.GET_VERIFY_STATUS_SUCCESS,
                  payload: o,
                })
          );
        }),
        (t.sendForgetPasswordSMSCode = (e) => ({
          types: [
            E.SEND_FORGET_PASSWORD_SMS_REQUEST,
            E.SEND_FORGET_PASSWORD_SMS_SUCCESS,
            E.SEND_FORGET_PASSWORD_SMS_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/sms/forgotPassword/verificationCode`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.sendForgetPasswordEmailCode = (e) => ({
          types: [
            E.SEND_FORGET_PASSWORD_EMAIL_REQUEST,
            E.SEND_FORGET_PASSWORD_EMAIL_SUCCESS,
            E.SEND_FORGET_PASSWORD_EMAIL_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/email/forgotPassword/verificationCode`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.verifyPassword = (e) => ({
          types: [
            E.VERIFY_PASSWORD_REQUEST,
            E.VERIFY_PASSWORD_SUCCESS,
            E.VERIFY_PASSWORD_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/verifyPassword`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.resetPasswordWithCode = (e) => ({
          types: [
            E.RESET_PASSWORD_WITH_CODE_REQUEST,
            E.RESET_PASSWORD_WITH_CODE_SUCCESS,
            E.RESET_PASSWORD_WITH_CODE_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/player/password`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.verifyVerificationCode = (e) => ({
          types: [
            E.VERIFY_MOBILE_REQUEST,
            E.VERIFY_MOBILE_SUCCESS,
            E.VERIFY_MOBILE_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/sms/verify`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.verifyEmailVerificationCode = (e, t, a) => ({
          types: [null, null, E.VERIFY_EMAIL_FAILURE],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/email/verify`,
                method: "POST",
                jsonStr: JSON.stringify({
                  email: e,
                  verificationCode: t,
                  emailValidationActionType: a,
                }),
              }),
          ],
        })),
        (t.getUserWalletList = () =>
          (0, l.default)({
            url: `${s.baseURL}/wallets/subnames`,
            method: "GET",
          })),
        (t.getUserSubWallet = (e) => ({
          types: [
            E.AJAX_GET_USER_SUB_WALLET_REQUEST,
            E.AJAX_GET_USER_SUB_WALLET_SUCCESS,
            E.AJAX_GET_USER_SUB_WALLET_FAILURE,
          ],
          subWalletName: e,
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}/wallets/${e}`,
                method: "GET",
              }),
          ],
        })),
        (t.getSubWallet = (e) =>
          (0, l.default)({
            url: `${s.baseURL}/wallets/${e}`,
            method: "GET",
          })),
        (t.loginUser = (e) => {
          const { rawPassword: t, ...a } = e;
          return {
            types: [
              E.AJAX_POST_LOGIN_REQUEST,
              E.AJAX_POST_LOGIN_SUCCESS,
              E.AJAX_POST_LOGIN_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${s.baseURL}${s.default.loginURL}`,
                  method: "POST",
                  jsonStr: JSON.stringify(a),
                  setToken: !1,
                }),
            ],
            playerid: e.loginname,
            rawPassword: t,
            isRegularLogin: !0,
          };
        }),
        (t.logoutUser = () => ({
          types: [
            E.POST_LOGOUT_REQUEST,
            E.POST_LOGOUT_SUCCESS,
            E.POST_LOGOUT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}${s.default.logoutURL}`,
                method: "PUT",
              }),
          ],
        })),
        (t.logoutUserNoApi = () => ({
          type: E.POST_LOGOUT_SUCCESS,
        })),
        (t.triggerResetPassword = (e) => ({
          types: [
            E.AJAX_PUT_TRIGGER_RESET_PASSWORD_REQUEST,
            E.AJAX_PUT_TRIGGER_RESET_PASSWORD_SUCCESS,
            E.AJAX_PUT_TRIGGER_RESET_PASSWORD_FAILURE,
          ],
          promiseType: "",
          playerid: e.playerid,
          email: e.email,
          mobile: e.mobile,
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.forgetPasswordURL}`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.clearResetPasswordState = () => ({
          type: E.CLEAR_RESET_PASSWORD_STATE,
        })),
        (t.forgetAccount = (e) => ({
          types: [
            E.AJAX_PUT_FORGET_ACCOUNT_REQUEST,
            E.AJAX_PUT_FORGET_ACCOUNT_SUCCESS,
            E.AJAX_PUT_FORGET_ACCOUNT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.forgetAccountURL}`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.checkResetPasswordToken = (e, t) => ({
          types: [
            E.AJAX_GET_CHECK_RESET_PW_TOKEN_REQUEST,
            E.AJAX_GET_CHECK_RESET_PW_TOKEN_SUCCESS,
            E.AJAX_GET_CHECK_RESET_PW_TOKEN_FAILURE,
          ],
          promiseType: "",
          promises: [
            (a) =>
              a({
                url: `${s.baseURL}${s.default.resetPasswordURL}/${e}?playerid=${t}`,
                method: "GET",
              }),
          ],
        })),
        (t.resetPassword = (e, t, a) => (
          (e.playerid = a),
          {
            types: [
              E.AJAX_PUT_RESET_PASSWORD_REQUEST,
              E.AJAX_PUT_RESET_PASSWORD_SUCCESS,
              E.AJAX_PUT_RESET_PASSWORD_FAILURE,
            ],
            promiseType: "",
            promises: [
              (a) =>
                a({
                  url: `${s.baseURL}${s.default.resetPasswordURL}/${t}`,
                  method: "PUT",
                  jsonStr: JSON.stringify(e),
                }),
            ],
          }
        )),
        (t.modifyLoginPassword = (e) => ({
          types: [
            E.AJAX_PUT_MODIFY_LOGIN_PASSWORD_REQUEST,
            E.AJAX_PUT_MODIFY_LOGIN_PASSWORD_SUCCESS,
            E.AJAX_PUT_MODIFY_LOGIN_PASSWORD_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.modifyPasswordURL}`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.modifyWithdrawalPassword = (e) => ({
          types: [
            E.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_REQUEST,
            E.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_SUCCESS,
            E.AJAX_PUT_MODIFY_WITHDRAWAL_PASSWORD_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.modifyWithdrawalPasswordURL}`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.registerUser = (e) => {
          e.language = f;
          const t = r.default.parse(location.search.slice(1));
          return (
            t.lineUserId && (e.lineUserId = t.lineUserId),
            {
              types: [
                E.POST_REGISTER_REQUEST,
                E.POST_REGISTER_SUCCESS,
                E.POST_REGISTER_FAILURE,
              ],
              promiseType: "",
              promises: [
                (t) =>
                  t({
                    url: `${s.baseURL}/register`,
                    method: "POST",
                    formData: e,
                  }),
              ],
              playerid: e.playerid,
            }
          );
        }),
        (t.getRegistrationSetting = () => ({
          types: [
            E.AJAX_GET_FAST_REGISTRATION_REQUEST,
            E.AJAX_GET_FAST_REGISTRATION_SUCCESS,
            E.AJAX_GET_FAST_REGISTRATION_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/register/setting`,
                method: "GET",
                setToken: !1,
              }),
          ],
        }));
      const T = () => ({
        types: [
          E.AJAX_GET_PLAYER_INFO_READY_REQUEST,
          E.AJAX_GET_PLAYER_INFO_READY_SUCCESS,
          E.AJAX_GET_PLAYER_INFO_READY_FAILURE,
        ],
        promiseType: "",
        promises: [
          () =>
            (0, l.default)({
              url: `${s.baseURL}/register/isplayerinfoready`,
              method: "GET",
            }),
        ],
      });
      (t.checkPlayerInfoReady = T),
        (t.checkTokenActivateAccount = (e) => ({
          types: [
            E.AJAX_GET_CHECK_ACTIVATION_TOKEN_REQUEST,
            E.AJAX_GET_CHECK_ACTIVATION_TOKEN_SUCCESS,
            E.AJAX_GET_CHECK_ACTIVATION_TOKEN_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.activateURL}/${e}`,
                method: "GET",
              }),
          ],
        })),
        (t.resetResentToken = () => ({
          type: E.RESET_RESENT_TOKEN,
        })),
        (t.resendActivationToken = (e) => {
          let { playerid: t, portalid: a, verifytype: o } = e;
          const r = {
            playerid: t,
            portalid: a,
          };
          return {
            types: [
              E.PUT_RESEND_ACT_TOKEN,
              E.PUT_RESEND_ACT_TOKEN_SUCCESS,
              E.PUT_RESEND_ACT_TOKEN_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${s.baseURL}${s.default.activateURL}/${o}`,
                  method: "PUT",
                  jsonStr: JSON.stringify(r),
                }),
            ],
          };
        }),
        (t.activateAccount = (e, t, a) => ({
          types: [
            E.AJAX_PUT_ACTIVATION_ACCOUNT_REQUEST,
            E.AJAX_PUT_ACTIVATION_ACCOUNT_SUCCESS,
            E.AJAX_PUT_ACTIVATION_ACCOUNT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (o) =>
              o({
                url: `${s.baseURL}${s.default.activateURL}/${t}/${e}`,
                method: "PUT",
                jsonStr: JSON.stringify(a),
              }),
          ],
        })),
        (t.forgetUsername = (e) => ({
          types: [
            E.AJAX_PUT_FORGET_USERNAME,
            E.AJAX_PUT_FORGET_USERNAME_SUCCESS,
            E.AJAX_PUT_FORGET_USERNAME_FAILURE,
          ],
          promiseType: "",
          email: e.email,
          mobile: e.mobile,
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}/forgetusername`,
                method: "PUT",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.closeSentUsernamemodal = () => ({
          type: E.CLOSE_SENT_USERNAME_MODAL,
        })),
        (t.getRandomCaptcha = () => ({
          types: [
            E.GET_RANDOM_CAPTCHA_REQUEST,
            E.GET_RANDOM_CAPTCHA_SUCCESS,
            E.GET_RANDOM_CAPTCHA_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}${s.default.captchaRandomURL}`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.getRandomCaptchaV2 = () => ({
          types: [
            E.GET_RANDOM_CAPTCHA_REQUEST,
            E.GET_RANDOM_CAPTCHA_SUCCESS,
            E.GET_RANDOM_CAPTCHA_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}/player/showinfo`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.checkAffiliate = (e) => ({
          types: [
            E.PUT_CHECK_AFFILIATE_REQUEST,
            E.PUT_CHECK_AFFILIATE_SUCCESS,
            E.PUT_CHECK_AFFILIATE_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.checkAffiliatesURL}/${e}`,
                method: "GET",
              }),
          ],
          affiliateid: e,
        })),
        (t.checkAffiliateWithAlert = (e) => ({
          types: [
            E.PUT_CHECK_AFFILIATE_WITH_ALERT_REQUEST,
            E.PUT_CHECK_AFFILIATE_WITH_ALERT_SUCCESS,
            E.PUT_CHECK_AFFILIATE_WITH_ALERT_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.checkAffiliatesURL}/${e}`,
                method: "GET",
              }),
          ],
          affiliateid: e,
        })),
        (t.clearPlayersLookup = () => ({
          type: E.CLEAR_PLAYERS_LOOKUP,
        })),
        (t.getPlayersLookup = (e) => ({
          types: [
            E.GET_PLAYERS_LOOKUP_REQUEST,
            E.GET_PLAYERS_LOOKUP_SUCCESS,
            E.GET_PLAYERS_LOOKUP_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.playersLookupURL}?q=${e}`,
                method: "GET",
              }),
          ],
        })),
        (t.resetForgetSuccess = () => ({
          type: E.RESET_FORGET_SUCCESS,
        })),
        (t.profileSettle = (e) => ({
          types: [
            E.AJAX_PUT_PROFILE_SETTLE_REQUEST,
            E.AJAX_PUT_PROFILE_SETTLE_SUCCESS,
            E.AJAX_PUT_PROFILE_SETTLE_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}${s.default.profileSettleURL}`,
                method: "PUT",
                formData: e,
              }),
          ],
        })),
        (t.profileRequiredinfo = (e) => ({
          types: [
            E.AJAX_PUT_PROFILE_REQUIREDINFO_REQUEST,
            E.AJAX_PUT_PROFILE_REQUIREDINFO_SUCCESS,
            E.AJAX_PUT_PROFILE_REQUIREDINFO_FAILURE,
          ],
          promiseType: "",
          continuousActions: [m, T],
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.profileRequiredinfoURL}`,
                method: "PUT",
                formData: e,
              }),
          ],
        })),
        (t.modifyProfile = (e) => ({
          types: [
            E.AJAX_PUT_MODIFY_PROFILE_REQUEST,
            E.AJAX_PUT_MODIFY_PROFILE_SUCCESS,
            E.AJAX_PUT_MODIFY_PROFILE_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.profileURL}/info`,
                method: "PUT",
                formData: e,
              }),
          ],
        })),
        (t.modifyProfilePicture = (e) => ({
          types: [null, E.PUT_PROFILE_PICTURE_SUCCESS, null],
          promiseType: "",
          customData: e,
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.profileURL}/picture `,
                method: "PUT",
                formData: e,
              }),
          ],
        })),
        (t.getSync = () => ({
          types: ["", "", ""],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}${s.default.syncURL}`,
                method: "GET",
              }),
          ],
        })),
        (t.saveFingerPrint2 = (e) => ({
          type: E.SAVE_FINGERPRINT2,
          fingerprint: e,
        })),
        (t.clickProfileSettleSuccess = () => ({
          type: E.CLICK_PROFILE_SETTLE_SUCCESS,
        })),
        (t.getBankCardSetting = () => ({
          types: [null, E.AJAX_GET_BANK_CARD_SETTING_SUCCESS, null],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}${s.default.bankcardSettingURL}`,
                method: "GET",
              }),
          ],
        })),
        (t.getCryptoAccountSetting = () =>
          (0, l.default)({
            url: `${s.baseURL}${s.default.cryptoAccountSettingUrl}`,
            method: "GET",
          })),
        (t.getLoginCalendar = () =>
          (0, l.default)({
            url: `${s.baseURL}/calendar`,
            method: "GET",
          })),
        (t.setTriggerCalendarOnHomeOn = () => ({
          type: E.SET_TRIGGER_CALENDAR_ON_HOME_ON,
        })),
        (t.setTriggerCalendarOnHomeOff = () => ({
          type: E.SET_TRIGGER_CALENDAR_ON_HOME_OFF,
        })),
        (t.setShowCalendarOn = () => ({
          type: E.SET_SHOW_CALENDAR_ON,
        })),
        (t.setShowCalendarOff = () => ({
          type: E.SET_SHOW_CALENDAR_OFF,
        })),
        (t.setUpgradeBounsModalOff = () => ({
          type: E.SET_SHOW_UPGRADEBOUNS_MODAL_OFF,
        })),
        (t.getLoginSetting = () => ({
          types: [
            E.GET_LOGIN_SETTING_REQ,
            E.GET_LOGIN_SETTING_SUC,
            E.GET_LOGIN_SETTING_ERR,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}/login/setting`,
                method: "GET",
              }),
          ],
        })),
        (t.getCaptchaImg = () => ({
          types: [
            E.GET_CAPTCHA_IMG_REQ,
            E.GET_CAPTCHA_IMG_SUC,
            E.GET_CAPTCHA_IMG_ERR,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${s.baseURL}/imgcaptcha/random`,
                method: "POST",
              }),
          ],
        })),
        (t.verifyCaptchaImg = (e) => ({
          types: [
            E.VERIFY_CAPTCHA_IMG_REQ,
            E.VERIFY_CAPTCHA_IMG_SUC,
            E.VERIFY_CAPTCHA_IMG_ERR,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${s.baseURL}/imgcaptcha/verify`,
                method: "POST",
                jsonStr: JSON.stringify(e),
              }),
          ],
        })),
        (t.resetMissionNoti = () => ({
          type: E.RESET_MISSION_NOTI,
        })),
        (t.resetUserPromosNoti = () => ({
          type: E.RESET_USER_PROMOS_NOTI,
        })),
        (t.resetAnytimeRebateNoti = () => ({
          type: E.RESET_ANYTIME_REBATE_NOTI,
        })),
        (t.resetNewVipRewardNotification = () => ({
          type: E.RESET_NEW_VIP_REWARD_NOTI,
        })),
        (t.resetRaceBonusNotification = () => ({
          type: E.RESET_RACE_BONUS_NOTIFICATION,
        })),
        (t.anytimeRebateSettlement = () => ({
          types: [
            E.PUT_ANYTIME_REBATE_SETTLE_REQ,
            E.PUT_ANYTIME_REBATE_SETTLE_SUCCESS,
            E.PUT_ANYTIME_REBATE_SETTLE_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, l.default)({
                url: `${s.baseURL}/anytime/execute`,
                method: "PUT",
              }),
          ],
        })),
        (t.turnOffRegLimitPromo = (e) => ({
          type: E.TURN_OFF_REG_LIMIT_PROMO,
          status: e,
        })),
        (t.updateIsVerified = (e) => ({
          type: E.UPDATE_IS_VERIFIED,
          status: e,
        })),
        (t.getUserVIPStatus = () =>
          (0, l.default)({
            url: `${s.baseURL}/newVipSetting/newVipUpgradeProgress`,
            method: "GET",
          })),
        (t.getCryptoAccountInfo = () =>
          (0, l.default)({
            url: `${s.baseURL}/cryptoAccountInfo`,
            method: "GET",
          })),
        (t.updateUserBalance = (e) => ({
          type: E.UPDATE_USER_BALANCE,
          amount: e,
        }));
    },
    76835: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(a(96540));
      var r = o(a(50042)),
        i = a(74848);
      t.default = () =>
        (0, i.jsx)("div", {
          className: "popup loading",
          children: (0, i.jsx)("div", {
            className: "popup-cont loading",
            children: (0, i.jsx)(r.default, {
              spinnerName: "three-bounce",
            }),
          }),
        });
    },
    77015: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.getFinanceRiskSetting =
          t.getDisallowedWithdrawalSetting =
          t.getDepositTime =
          t.getActiveShortcutList =
            void 0);
      var r = l(a(52321)),
        i = l(a(68686)),
        n = o(a(32080));
      function l(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (l = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      (t.getDepositTime = (e) => ({
        types: [
          r.AJAX_GET_DEPOSIT_TYPE_REQUEST,
          r.AJAX_GET_DEPOSIT_TYPE_SUCCESS,
          r.AJAX_GET_DEPOSIT_TYPE_FAILURE,
        ],
        promiseType: "",
        promises: [
          () =>
            (0, n.default)({
              url: `${i.baseURL}${i.default.settingsURL}/deposittimelimit?depositPaymentTypeEnum=${e}`,
              method: "GET",
            }),
        ],
      })),
        (t.getActiveShortcutList = () => ({
          types: [
            r.GET_ACTIVE_SHORTCUT_LIST_REQUEST,
            r.GET_ACTIVE_SHORTCUT_LIST_SUCCESS,
            r.GET_ACTIVE_SHORTCUT_LIST_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${i.baseURL}${i.default.settingsURL}/activeshortcuts`,
                method: "GET",
              }),
          ],
        })),
        (t.getFinanceRiskSetting = (e) => ({
          types: [
            r.GET_FINANCE_RISK_SETTING_REQUEST,
            r.GET_FINANCE_RISK_SETTING_SUCCESS,
            r.GET_FINANCE_RISK_SETTING_FAILURE,
          ],
          promiseType: "",
          notification: !1,
          promises: [
            () =>
              (0, n.default)({
                url: `${i.baseURL}${i.default.settingsURL}/financerisksetting?key=${e}`,
                method: "GET",
              }),
          ],
        })),
        (t.getDisallowedWithdrawalSetting = () => ({
          types: [
            r.GET_DISALLOWED_WITHDRAWAL_SETTING_REQUEST,
            r.GET_DISALLOWED_WITHDRAWAL_SETTING_SUCCESS,
            r.GET_DISALLOWED_WITHDRAWAL_SETTING_FAILURE,
          ],
          notification: !1,
          promiseType: "",
          promises: [
            () =>
              (0, n.default)({
                url: `${i.baseURL}${i.default.settingsURL}/withdrawalForbid`,
                method: "GET",
              }),
          ],
        }));
    },
    79293: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0),
        o(a(96540));
      var r = o(a(50042)),
        i = a(74848);
      t.default = () =>
        (0, i.jsx)("div", {
          className: "popup loading",
          children: (0, i.jsx)("div", {
            className: "popup-cont loading",
            children: (0, i.jsx)(r.default, {
              spinnerName: "three-bounce",
            }),
          }),
        });
    },
    84465: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.updatePersonalMsgStatus =
          t.renewUnreadMsgCount =
          t.readMsg =
          t.getNews =
          t.getMsgById =
          t.getMessageMsgs =
          t.getAnnouncementMsgs =
          t.getAnnouncePersonalMsgDetail =
          t.getAnnouncePersonalMsg =
          t.getAnnounceNormalMsg =
          t.deletePersonalMsg =
          t.deleteMsgs =
          t.changeInboxTab =
            void 0);
      var r = s(a(51959)),
        i = o(a(86663)),
        n = s(a(68686)),
        l = o(a(32080));
      function s(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            o = new WeakMap();
        return (s = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var r,
            i,
            n = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return n;
          if ((r = t ? o : a)) {
            if (r.has(e)) return r.get(e);
            r.set(e, n);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((i =
                (r = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (i.get || i.set)
                ? r(n, t, i)
                : (n[t] = e[t]));
          return n;
        })(e, t);
      }
      (t.getNews = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
        return {
          types: [r.GET_NEWS_REQUEST, r.GET_NEWS_SUCCESS, r.GET_NEWS_FAILURE],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.announcementsURL}?${e}`,
                method: "GET",
                setToken: !1,
              }),
          ],
          shouldReset: t,
        };
      }),
        (t.getMessageMsgs = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.default.stringify({}),
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            types: [
              r.GET_PERSONAL_MSGS_REQUEST,
              r.GET_PERSONAL_MSGS_SUCCESS,
              r.GET_PERSONAL_MSGS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (t) =>
                t({
                  url: `${n.baseURL}${n.default.messagesURL}?${e}`,
                  method: "GET",
                }),
            ],
            shouldReset: t,
            query: e,
          };
        }),
        (t.getAnnouncementMsgs = function () {
          let e =
              arguments.length > 0 && void 0 !== arguments[0]
                ? arguments[0]
                : i.default.stringify({}),
            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
          return {
            types: [
              r.GET_SYSTEM_MSGS_REQUEST,
              r.GET_SYSTEM_MSGS_SUCCESS,
              r.GET_SYSTEM_MSGS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${n.baseURL}${n.default.announcementsURL}?anntype=1`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            shouldReset: t,
            query: e,
          };
        });
      const d = (e) => ({
        types: [
          r.GET_MSG_BYID_REQUEST,
          r.GET_MSG_BYID_SUCCESS,
          r.GET_MSG_BYID_FAILURE,
        ],
        promiseType: "",
        promises: [
          (t) =>
            t({
              url: `${n.baseURL}${n.default.messagesURL}/${e}`,
              method: "GET",
            }),
        ],
        msgId: e,
      });
      (t.getMsgById = d),
        (t.renewUnreadMsgCount = (e) => ({
          type: r.RENEW_UNREAD_MSG_COUNT,
          data: e,
        })),
        (t.readMsg = (e, t) => ({
          types: [
            r.PUT_READ_MSG_REQUEST,
            r.PUT_READ_MSG_SUCCESS,
            r.PUT_READ_MSG_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.messagesURL}`,
                method: "PUT",
                jsonStr: JSON.stringify({
                  status: 1,
                  idList: [e],
                }),
              }),
          ],
          continuousActions: [d.bind(null, e)],
          msgId: e,
          msgType: t,
        })),
        (t.deleteMsgs = (e) => ({
          types: [
            r.PUT_DELETE_MSGS_REQUEST,
            r.PUT_DELETE_MSGS_SUCCESS,
            r.PUT_DELETE_MSGS_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.messagesURL}${n.default.deleteMsgsURL}`,
                method: "PUT",
                jsonStr: JSON.stringify({
                  status: 9,
                  idList: e,
                }),
              }),
          ],
          idList: e,
        })),
        (t.changeInboxTab = (e) => ({
          type: r.CHANGE_INBOX_TAB,
          activeIndex: e,
        })),
        (t.getAnnouncePersonalMsg = (e) => {
          const t = i.default.stringify(e);
          return (0, l.default)({
            url: `${n.baseURL}${n.default.messagesURL}?${t}`,
            method: "GET",
          });
        }),
        (t.getAnnounceNormalMsg = () =>
          (0, l.default)({
            url: `${n.baseURL}${n.default.announcementsURL}?anntype=1`,
            method: "GET",
            setToken: !1,
          })),
        (t.getAnnouncePersonalMsgDetail = (e) => ({
          types: [null, null, r.GET_PERSONAL_MSG_DETAIL_FAILURE],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${n.baseURL}${n.default.messagesURL}/${e}`,
                method: "GET",
              }),
          ],
          msgid: e,
        })),
        (t.updatePersonalMsgStatus = (e) => {
          let { status: t, msgid: a } = e;
          return (0, l.default)({
            url: `${n.baseURL}${n.default.messagesURL}`,
            method: "PUT",
            jsonStr: JSON.stringify({
              status: t,
              idList: [a],
            }),
          });
        }),
        (t.deletePersonalMsg = (e) =>
          (0, l.default)({
            url: `${n.baseURL}${n.default.messagesURL}${n.default.deleteMsgsURL}`,
            method: "PUT",
            jsonStr: JSON.stringify({
              status: 9,
              idList: e,
            }),
          }));
    },
    84622: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.VipInfoPage =
          t.VipClub =
          t.UserRedEnvelopeContainer =
          t.UFA =
          t.Staticpagesettings =
          t.StaticPageDetailPopUpModal =
          t.StaticContainer =
          t.SportsBook =
          t.SportPage =
          t.SignupContainer =
          t.Seo =
          t.SSVipInfoPage =
          t.Roulette =
          t.ResultCenter =
          t.ResetPasswordContainer =
          t.ResetInfoContainer =
          t.RegRouletteWrapper =
          t.RegRoulette =
          t.RedEnvelopeContainer =
          t.QuestHub =
          t.PromoDetail =
          t.PromoContainer =
          t.PromoBonus =
          t.NewsContainer =
          t.MobileAds =
          t.MemberCenterWithdrawalPasswordForm =
          t.MemberCenterWithdrawalMain =
          t.MemberCenterWithdrawalAudit =
          t.MemberCenterWithdrawalAccount =
          t.MemberCenterWallets =
          t.MemberCenterVip =
          t.MemberCenterValidatePage =
          t.MemberCenterSSVip =
          t.MemberCenterPromoHistory =
          t.MemberCenterPromoCenterViewReward =
          t.MemberCenterPromoCenter =
          t.MemberCenterProfile =
          t.MemberCenterMission =
          t.MemberCenterLoginPasswordForm =
          t.MemberCenterHelpItems =
          t.MemberCenterHelpDetail =
          t.MemberCenterHelpCenter =
          t.MemberCenterGameHistory =
          t.MemberCenterFinanHistoryDetail =
          t.MemberCenterFinanHistory =
          t.MemberCenterCryptoWithdrawalAdd =
          t.MemberCenterCryptoAccount =
          t.MemberCenterBankWithdrawalAdd =
          t.MemberCenterBankCardList =
          t.MemberCenterAnnouncement =
          t.MemberCenterAffiliateSettlementDetail =
          t.MemberCenterAffiliateRuleDesc =
          t.MemberCenterAffiliatePosterModal =
          t.MemberCenterAffiliatePlayerSettlement =
          t.MemberCenterAffiliateDirectMembers =
          t.MemberCenterAffiliate =
          t.MemberCenterAccount =
          t.MemberCenter =
          t.LuckySpin =
          t.LotteryEvent =
          t.LoginContainer =
          t.LaunchGameContainer =
          t.HomeContainer =
          t.GameHistoryDetailContainer =
          t.GameDetailPage =
          t.ForgetUsernameContainer =
          t.ForgetPasswordContainer =
          t.FloatingPromoCenter =
          t.FloatingAds =
          t.FillPlayerInfoPage =
          t.FastBind =
          t.EventTracker =
          t.EventPopups =
          t.DepositSummary =
          t.DepositServiceOnlinePopupContainer =
          t.DepositRankingDetail =
          t.DepositPayments =
          t.DepositOnlineBanking =
          t.DepositCompany =
          t.Deposit3rdParty =
          t.DemoGamePage =
          t.ConfirmationDepositContainer =
          t.CenterAds =
          t.CasinoPage =
          t.BrokenLinkPage =
          t.Bonus =
          t.Announcement =
          t.AgentSignup =
          t.AddHomeScreen =
          t.Activities =
          t.ActivationPendingModalContainer =
          t.ActivateContainer =
            void 0);
      var r = o(a(53259)),
        i = o(a(7032));
      (t.HomeContainer = (0, r.default)({
        loader: () =>
          Promise.all([
            a.e(2365),
            a.e(8092),
            a.e(3110),
            a.e(3333),
            a.e(3327),
            a.e(6830),
            a.e(4856),
            a.e(1248),
            a.e(2052),
            a.e(4486),
            a.e(231),
            a.e(7977),
            a.e(8024),
            a.e(5404),
            a.e(1420),
          ]).then(a.bind(a, 66630)),
        loading: i.default,
      })),
        (t.LaunchGameContainer = (0, r.default)({
          loader: () =>
            Promise.all([a.e(4121), a.e(5766), a.e(9680)]).then(
              a.bind(a, 98784)
            ),
          loading: i.default,
        })),
        (t.GameHistoryDetailContainer = (0, r.default)({
          loader: () => a.e(3616).then(a.bind(a, 26956)),
          loading: i.default,
        })),
        (t.DepositServiceOnlinePopupContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(1376),
              a.e(5286),
              a.e(9399),
              a.e(6913),
            ]).then(a.bind(a, 41301)),
          loading: i.default,
        })),
        (t.ConfirmationDepositContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(1376),
              a.e(5286),
              a.e(9399),
              a.e(6913),
            ]).then(a.bind(a, 66842)),
          loading: i.default,
        })),
        (t.NewsContainer = (0, r.default)({
          loader: () =>
            Promise.all([a.e(4796), a.e(7977), a.e(7276)]).then(
              a.bind(a, 22350)
            ),
          loading: i.default,
        })),
        (t.PromoContainer = (0, r.default)({
          loader: () => a.e(6638).then(a.bind(a, 64580)),
          loading: i.default,
        })),
        (t.PromoDetail = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(3982),
              a.e(1650),
              a.e(4561),
              a.e(278),
            ]).then(a.bind(a, 84561)),
          loading: i.default,
        })),
        (t.Announcement = (0, r.default)({
          loader: () => a.e(7124).then(a.bind(a, 95227)),
          loading: i.default,
        })),
        (t.LoginContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(1376),
              a.e(6870),
              a.e(8783),
              a.e(8769),
              a.e(3982),
              a.e(5266),
              a.e(3778),
              a.e(1650),
              a.e(8453),
              a.e(8318),
              a.e(3085),
            ]).then(a.bind(a, 27586)),
          loading: i.default,
        })),
        (t.SignupContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(1376),
              a.e(6870),
              a.e(8783),
              a.e(8769),
              a.e(3982),
              a.e(5266),
              a.e(3778),
              a.e(1650),
              a.e(8453),
              a.e(8318),
              a.e(3085),
            ]).then(a.bind(a, 86619)),
          loading: i.default,
        })),
        (t.ActivateContainer = (0, r.default)({
          loader: () => a.e(1534).then(a.bind(a, 8564)),
          loading: i.default,
        })),
        (t.ActivationPendingModalContainer = (0, r.default)({
          loader: () => a.e(1534).then(a.bind(a, 95911)),
          loading: i.default,
        })),
        (t.ResetPasswordContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4899),
              a.e(3982),
              a.e(5266),
              a.e(3778),
              a.e(4617),
              a.e(1650),
              a.e(9211),
              a.e(6425),
              a.e(5166),
            ]).then(a.bind(a, 56603)),
          loading: i.default,
        })),
        (t.ResetInfoContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4899),
              a.e(3982),
              a.e(5266),
              a.e(3778),
              a.e(4617),
              a.e(1650),
              a.e(9211),
              a.e(6425),
              a.e(5166),
            ]).then(a.bind(a, 85120)),
          loading: i.default,
        })),
        (t.FillPlayerInfoPage = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4899),
              a.e(3982),
              a.e(5266),
              a.e(3778),
              a.e(4617),
              a.e(1650),
              a.e(9211),
              a.e(6425),
              a.e(5166),
            ]).then(a.bind(a, 26425)),
          loading: i.default,
        })),
        (t.StaticContainer = (0, r.default)({
          loader: () => a.e(4463).then(a.bind(a, 32769)),
          loading: i.default,
        })),
        (t.ForgetUsernameContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(3982),
              a.e(5266),
              a.e(7280),
              a.e(4617),
              a.e(1650),
              a.e(1936),
              a.e(9941),
            ]).then(a.bind(a, 40136)),
          loading: i.default,
        })),
        (t.ForgetPasswordContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(3982),
              a.e(5266),
              a.e(7280),
              a.e(4617),
              a.e(1650),
              a.e(1936),
              a.e(9941),
            ]).then(a.bind(a, 54767)),
          loading: i.default,
        })),
        (t.Staticpagesettings = {
          ContentByCodeContainer: (0, r.default)({
            loader: () =>
              Promise.all([a.e(3110), a.e(3333), a.e(5404), a.e(7330)]).then(
                a.bind(a, 86869)
              ),
            loading: i.default,
          }),
          ContentByNameContainer: (0, r.default)({
            loader: () =>
              Promise.all([a.e(3110), a.e(3333), a.e(5404), a.e(7330)]).then(
                a.bind(a, 10731)
              ),
            loading: i.default,
          }),
        }),
        (t.RedEnvelopeContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1543),
              a.e(1712),
            ]).then(a.bind(a, 18452)),
          loading: i.default,
        })),
        (t.Roulette = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(516),
              a.e(3040),
              a.e(746),
            ]).then(a.bind(a, 15921)),
          loading: i.default,
        })),
        (t.RegRouletteWrapper = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(4856),
              a.e(516),
              a.e(740),
              a.e(3999),
            ]).then(a.bind(a, 20934)),
          loading: i.default,
        })),
        (t.RegRoulette = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(4856),
              a.e(516),
              a.e(740),
              a.e(3999),
            ]).then(a.bind(a, 62055)),
          loading: i.default,
        })),
        (t.Seo = (0, r.default)({
          loader: () =>
            Promise.all([a.e(9125), a.e(5438)]).then(a.bind(a, 77034)),
          loading: i.default,
        })),
        (t.FloatingAds = (0, r.default)({
          loader: () => a.e(133).then(a.bind(a, 74912)),
          loading: i.default,
        })),
        (t.EventPopups = (0, r.default)({
          loader: () => a.e(1351).then(a.bind(a, 17791)),
          loading: i.default,
        })),
        (t.StaticPageDetailPopUpModal = (0, r.default)({
          loader: () => a.e(6458).then(a.bind(a, 47907)),
          loading: i.default,
        })),
        (t.AddHomeScreen = (0, r.default)({
          loader: () => a.e(1981).then(a.bind(a, 21628)),
          loading: i.default,
        })),
        (t.EventTracker = (0, r.default)({
          loader: () => a.e(2826).then(a.bind(a, 82331)),
          loading: i.default,
        })),
        (t.UserRedEnvelopeContainer = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1543),
              a.e(1712),
            ]).then(a.bind(a, 13219)),
          loading: i.default,
        })),
        (t.AgentSignup = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(4899),
              a.e(4617),
              a.e(1650),
              a.e(9797),
              a.e(5147),
              a.e(9969),
            ]).then(a.bind(a, 15763)),
          loading: i.default,
        })),
        (t.ResultCenter = (0, r.default)({
          loader: () =>
            Promise.all([a.e(2723), a.e(6897)]).then(a.bind(a, 62723)),
          loading: i.default,
        })),
        (t.VipInfoPage = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6830),
              a.e(2574),
              a.e(35),
            ]).then(a.bind(a, 53835)),
          loading: i.default,
        })),
        (t.SSVipInfoPage = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6830),
              a.e(2574),
              a.e(35),
            ]).then(a.bind(a, 65581)),
          loading: i.default,
        })),
        (t.MemberCenter = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(7977), a.e(4180)]).then(
              a.bind(a, 82030)
            ),
          loading: i.default,
        })),
        (t.MemberCenterAccount = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(7977), a.e(4180)]).then(
              a.bind(a, 35090)
            ),
          loading: i.default,
        })),
        (t.MemberCenterProfile = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 87988)),
          loading: i.default,
        })),
        (t.MemberCenterLoginPasswordForm = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4617),
              a.e(1650),
              a.e(3285),
              a.e(489),
              a.e(4030),
            ]).then(a.bind(a, 40609)),
          loading: i.default,
        })),
        (t.MemberCenterWithdrawalPasswordForm = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4617),
              a.e(1650),
              a.e(3285),
              a.e(489),
              a.e(2356),
            ]).then(a.bind(a, 44009)),
          loading: i.default,
        })),
        (t.MemberCenterValidatePage = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(115),
              a.e(4899),
              a.e(1914),
              a.e(4617),
              a.e(1650),
              a.e(8867),
            ]).then(a.bind(a, 5740)),
          loading: i.default,
        })),
        (t.MemberCenterWallets = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 95601)),
          loading: i.default,
        })),
        (t.MemberCenterWithdrawalAccount = (0, r.default)({
          loader: () => a.e(1242).then(a.bind(a, 54073)),
          loading: i.default,
        })),
        (t.MemberCenterBankCardList = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 72785)),
          loading: i.default,
        })),
        (t.MemberCenterCryptoAccount = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(3110),
              a.e(3333),
              a.e(6870),
              a.e(9972),
              a.e(6629),
              a.e(1914),
              a.e(4617),
              a.e(1650),
              a.e(7125),
              a.e(5468),
            ]).then(a.bind(a, 89223)),
          loading: i.default,
        })),
        (t.MemberCenterAffiliate = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 44517)),
          loading: i.default,
        })),
        (t.MemberCenterAffiliatePosterModal = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(1376),
              a.e(5286),
              a.e(2149),
              a.e(2475),
              a.e(8565),
            ]).then(a.bind(a, 32475)),
          loading: i.default,
        })),
        (t.MemberCenterAffiliateDirectMembers = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(4796), a.e(3335)]).then(
              a.bind(a, 43229)
            ),
          loading: i.default,
        })),
        (t.MemberCenterAffiliatePlayerSettlement = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4796),
              a.e(4617),
              a.e(1650),
              a.e(7183),
            ]).then(a.bind(a, 20749)),
          loading: i.default,
        })),
        (t.MemberCenterAffiliateRuleDesc = (0, r.default)({
          loader: () =>
            Promise.all([a.e(2365), a.e(8092), a.e(3327), a.e(2408)]).then(
              a.bind(a, 49752)
            ),
          loading: i.default,
        })),
        (t.MemberCenterAffiliateSettlementDetail = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(4796),
              a.e(4617),
              a.e(1650),
              a.e(9035),
            ]).then(a.bind(a, 82073)),
          loading: i.default,
        })),
        (t.MemberCenterAnnouncement = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 42472)),
          loading: i.default,
        })),
        (t.MemberCenterHelpCenter = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 85227)),
          loading: i.default,
        })),
        (t.MemberCenterHelpItems = (0, r.default)({
          loader: () => a.e(1251).then(a.bind(a, 53388)),
          loading: i.default,
        })),
        (t.MemberCenterHelpDetail = (0, r.default)({
          loader: () => a.e(1722).then(a.bind(a, 69899)),
          loading: i.default,
        })),
        (t.MemberCenterVip = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 94698)),
          loading: i.default,
        })),
        (t.MemberCenterSSVip = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(6830),
              a.e(9925),
              a.e(4617),
              a.e(1650),
              a.e(5964),
              a.e(1758),
              a.e(5071),
            ]).then(a.bind(a, 23524)),
          loading: i.default,
        })),
        (t.MemberCenterWithdrawalAudit = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(8950)]).then(
              a.bind(a, 31177)
            ),
          loading: i.default,
        })),
        (t.MemberCenterWithdrawalMain = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(6870),
              a.e(9972),
              a.e(7240),
              a.e(4617),
              a.e(1650),
              a.e(5876),
              a.e(1742),
            ]).then(a.bind(a, 63219)),
          loading: i.default,
        })),
        (t.MemberCenterBankWithdrawalAdd = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(3110),
              a.e(3333),
              a.e(9972),
              a.e(1142),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(7737),
              a.e(5596),
            ]).then(a.bind(a, 95659)),
          loading: i.default,
        })),
        (t.MemberCenterCryptoWithdrawalAdd = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(4121),
              a.e(3110),
              a.e(3333),
              a.e(9972),
              a.e(1142),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(7737),
              a.e(5931),
            ]).then(a.bind(a, 81106)),
          loading: i.default,
        })),
        (t.MemberCenterMission = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 90399)),
          loading: i.default,
        })),
        (t.MemberCenterGameHistory = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 47727)),
          loading: i.default,
        })),
        (t.MemberCenterFinanHistory = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 8699)),
          loading: i.default,
        })),
        (t.MemberCenterFinanHistoryDetail = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(9925),
              a.e(4617),
              a.e(1650),
              a.e(193),
            ]).then(a.bind(a, 10067)),
          loading: i.default,
        })),
        (t.MemberCenterPromoHistory = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 5730)),
          loading: i.default,
        })),
        (t.MemberCenterPromoCenter = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(6830),
              a.e(4899),
              a.e(1914),
              a.e(4856),
              a.e(5286),
              a.e(3982),
              a.e(9925),
              a.e(2149),
              a.e(6563),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(4561),
              a.e(5964),
              a.e(2352),
              a.e(623),
              a.e(2964),
              a.e(9748),
            ]).then(a.bind(a, 10143)),
          loading: i.default,
        })),
        (t.MemberCenterPromoCenterViewReward = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(7878),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(9925),
              a.e(4617),
              a.e(1650),
              a.e(4037),
              a.e(928),
            ]).then(a.bind(a, 98030)),
          loading: i.default,
        })),
        (t.DepositPayments = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(4899),
              a.e(7626),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(7453),
              a.e(5291),
              a.e(175),
              a.e(390),
              a.e(4302),
            ]).then(a.bind(a, 62893)),
          loading: i.default,
        })),
        (t.DepositCompany = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(4899),
              a.e(7626),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(7453),
              a.e(390),
              a.e(8454),
            ]).then(a.bind(a, 50390)),
          loading: i.default,
        })),
        (t.DepositOnlineBanking = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(4899),
              a.e(7626),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(7453),
              a.e(1274),
            ]).then(a.bind(a, 48226)),
          loading: i.default,
        })),
        (t.Deposit3rdParty = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(2564),
              a.e(4899),
              a.e(7626),
              a.e(4617),
              a.e(1650),
              a.e(6663),
              a.e(9211),
              a.e(9797),
              a.e(6425),
              a.e(1359),
              a.e(7453),
              a.e(5291),
              a.e(5718),
            ]).then(a.bind(a, 58584)),
          loading: i.default,
        })),
        (t.DepositSummary = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(9894)]).then(
              a.bind(a, 88470)
            ),
          loading: i.default,
        })),
        (t.GameDetailPage = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(2352),
              a.e(623),
              a.e(253),
            ]).then(a.bind(a, 89260)),
          loading: i.default,
        })),
        (t.SportPage = (0, r.default)({
          loader: () =>
            Promise.all([a.e(6149), a.e(3564)]).then(a.bind(a, 33970)),
          loading: i.default,
        })),
        (t.BrokenLinkPage = (0, r.default)({
          loader: () => a.e(1001).then(a.bind(a, 51110)),
          loading: i.default,
        })),
        (t.DemoGamePage = (0, r.default)({
          loader: () =>
            Promise.all([a.e(1410), a.e(850)]).then(a.bind(a, 31410)),
          loading: i.default,
        })),
        (t.FloatingPromoCenter = (0, r.default)({
          loader: () => a.e(1858).then(a.bind(a, 91972)),
          loading: i.default,
        })),
        (t.CenterAds = (0, r.default)({
          loader: () => a.e(621).then(a.bind(a, 29521)),
          loading: i.default,
        })),
        (t.MobileAds = (0, r.default)({
          loader: () => a.e(5311).then(a.bind(a, 38824)),
          loading: i.default,
        })),
        (t.Activities = (0, r.default)({
          loader: () => a.e(9815).then(a.bind(a, 18654)),
          loading: i.default,
        })),
        (t.DepositRankingDetail = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(213)]).then(
              a.bind(a, 57191)
            ),
          loading: i.default,
        })),
        (t.VipClub = (0, r.default)({
          loader: () => a.e(3288).then(a.bind(a, 74939)),
          loading: i.default,
        })),
        (t.QuestHub = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(1376),
              a.e(6830),
              a.e(1914),
              a.e(620),
              a.e(5810),
            ]).then(a.bind(a, 70891)),
          loading: i.default,
        })),
        (t.LuckySpin = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(3110),
              a.e(3333),
              a.e(3040),
              a.e(8912),
              a.e(740),
              a.e(1601),
            ]).then(a.bind(a, 91700)),
          loading: i.default,
        })),
        (t.LotteryEvent = (0, r.default)({
          loader: () =>
            Promise.all([a.e(3110), a.e(3333), a.e(5073), a.e(7660)]).then(
              a.bind(a, 15073)
            ),
          loading: i.default,
        })),
        (t.CasinoPage = (0, r.default)({
          loader: () => a.e(3880).then(a.bind(a, 84337)),
          loading: i.default,
        })),
        (t.FastBind = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(4121),
              a.e(8092),
              a.e(7271),
              a.e(3110),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(4899),
              a.e(1650),
              a.e(9211),
              a.e(6722),
              a.e(5351),
            ]).then(a.bind(a, 49695)),
          loading: i.default,
        })),
        (t.Bonus = (0, r.default)({
          loader: () =>
            Promise.all([
              a.e(2365),
              a.e(8092),
              a.e(3110),
              a.e(3333),
              a.e(3327),
              a.e(1376),
              a.e(6870),
              a.e(9972),
              a.e(8783),
              a.e(8769),
              a.e(115),
              a.e(6629),
              a.e(9903),
              a.e(6830),
              a.e(2289),
              a.e(1914),
              a.e(3982),
              a.e(9925),
              a.e(6442),
              a.e(3571),
              a.e(3234),
              a.e(1650),
              a.e(9259),
              a.e(4561),
              a.e(620),
              a.e(3040),
              a.e(8912),
              a.e(740),
              a.e(1479),
              a.e(2182),
            ]).then(a.bind(a, 83340)),
          loading: i.default,
        })),
        (t.PromoBonus = (0, r.default)({
          loader: () => a.e(6304).then(a.bind(a, 16322)),
          loading: i.default,
        })),
        (t.SportsBook = (0, r.default)({
          loader: () =>
            Promise.all([a.e(4121), a.e(5766), a.e(2867)]).then(
              a.bind(a, 15227)
            ),
          loading: i.default,
        })),
        (t.UFA = (0, r.default)({
          loader: () => a.e(641).then(a.bind(a, 48585)),
          loading: i.default,
        }));
    },
    84707: (e, t, a) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.toggleMenu =
          t.timerCounting =
          t.setPrompt =
          t.setApiErrorCode498 =
          t.pageLoadedAction =
          t.openErrorModal =
          t.closeMenu =
          t.closeErrorModal =
            void 0);
      var o = (function (e) {
        if ("function" == typeof WeakMap) {
          var t = new WeakMap();
          new WeakMap();
        }
        return (function (e) {
          if (e && e.__esModule) return e;
          var a,
            o,
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
              ((o =
                (a = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? a(r, t, o)
                : (r[t] = e[t]));
          return r;
        })(e);
      })(a(36697));
      (t.closeErrorModal = () => ({
        type: o.CLOSE_ERROR_MODAL,
      })),
        (t.toggleMenu = () => ({
          type: o.TOGGLE_MENU,
        })),
        (t.closeMenu = () => ({
          type: o.CLOSE_MENU,
        })),
        (t.timerCounting = () => ({
          type: o.TIMER_COUNTING,
        })),
        (t.setApiErrorCode498 = (e) => {
          let { code: t, constant: a, locationState: r } = e;
          return {
            type: o.API_ERROR_CODE_498,
            payload: {
              code: t,
              locationState: r,
            },
            constant: a,
          };
        }),
        (t.openErrorModal = (e) => ({
          type: o.OPEN_ERROR_MODAL,
          payload: {
            msg: e,
          },
        })),
        (t.pageLoadedAction = () => ({
          type: o.PAGE_LOADED_ACTION,
        })),
        (t.setPrompt = (e) => ({
          type: o.SET_PROMPT,
          payload: e,
        }));
    },
    85935: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(a(51246));
      a(2878), (t.default = r.default);
    },
    94187: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.shouldUseIframe =
          t.setIframeStatus =
          t.getIframeStyle =
          t.IFRAME_GAME_CONFIG =
            void 0);
      var r = o(a(27179)),
        i = o(a(94188));
      const { code: n } = i.default.brand,
        l = {
          vipvnd: "v88",
          jun88: "v88",
          vi5prod: "v88",
          ae888: "v88",
          rc6prod: "v88",
          h10prod: "v88",
          rb9prod: "v88",
          "009vn": "v88",
          bet88: "v88",
        },
        s = (t.IFRAME_GAME_CONFIG = {
          v88: [
            {
              producttypeid: "LIVE",
              gameproviderid: "MOTIVATION",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "PG",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "FC",
            },
            {
              producttypeid: "LIVE",
              gameproviderid: "SEXYBCRT",
            },
            {
              producttypeid: "LIVE",
              gameproviderid: "DG",
            },
            {
              producttypeid: "SPORTS",
              gameproviderid: "SABA",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "JILI",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "GAME168",
            },
            {
              producttypeid: "EGAME",
              gameproviderid: "SPRIBE",
            },
            {
              producttypeid: "ESPORTS",
              gameproviderid: "MOTIVATION",
            },
          ],
        }),
        d = () => {
          var e;
          if (window.isTMA) return !0;
          const t = r.default.get("launchGameData");
          if (!t || !window.isMobile || window.isDesktop) return !1;
          const {
            producttypeid: a,
            gameproviderid: o,
            distributorid: i,
            platform: d,
          } = t;
          return (
            ("SPORTS" !== a || "SABA" !== o || !window.isMobile || 2 !== d) &&
            ((null === (e = s[l[n]]) || void 0 === e
              ? void 0
              : e.some((e) => {
                  var t;
                  let r = e.producttypeid === a && e.gameproviderid === o;
                  return (
                    null !== (t = e.distributorids) &&
                      void 0 !== t &&
                      t.length &&
                      (r = e.distributorids.includes(i)),
                    r
                  );
                })) ||
              !1)
          );
        };
      (t.shouldUseIframe = d),
        (t.setIframeStatus = () => {
          window.isIframe = d();
        }),
        (t.getIframeStyle = () =>
          d()
            ? {
                position: "fixed",
                top: "0",
              }
            : {
                position: "relative",
              });
    },
    96273: (e, t, a) => {
      var o = {
        "./desktop/common/LoadingModal": 79293,
        "./mobile/common/LoadingModal": 76835,
      };
      function r(e) {
        var t = i(e);
        return a(t);
      }
      function i(e) {
        if (!a.o(o, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        }
        return o[e];
      }
      (r.keys = function () {
        return Object.keys(o);
      }),
        (r.resolve = i),
        (e.exports = r),
        (r.id = 96273);
    },
    96658: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = o(a(85935)),
        i = a(74848);
      t.default = (e) => {
        let { onHandleClose: t, children: a, ...o } = e;
        return (0, i.jsxs)(r.default, {
          className: "gift-modal",
          hasTitle: !1,
          onClose: t,
          ...o,
          children: [
            (0, i.jsx)("span", {
              className: "icon text-center",
              children: (0, i.jsx)("img", {
                alt: "icon",
                src: "../images/promo-center/promo-gift-open-ani.png",
              }),
            }),
            a,
          ],
        });
      };
    },
    98265: (e, t, a) => {
      "use strict";
      var o = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.removeURLParams =
          t.keepUrlQS =
          t.isPromoURL =
          t.getURLParams =
            void 0);
      var r = o(a(27179)),
        i = o(a(94188)),
        n = o(a(31653));
      const l = (e) => {
        const t = new URL(e || window.location.href);
        return {
          currentUrl: t,
          params: new URLSearchParams(t.search),
        };
      };
      (t.getURLParams = l),
        (t.removeURLParams = (e) => {
          let { keys: t, url: a, isReplace: o = !1 } = e;
          const { currentUrl: r, params: i } = l(a);
          for (let e = 0; e < t.length; e++) i.delete(t[e]);
          let n = `${r.pathname}`;
          return (
            null != i && i.size && (n = `${n}?${i}`),
            o && window.history.replaceState({}, "", n),
            n
          );
        }),
        (t.isPromoURL = () => {
          const { params: e } = l();
          return e.has("affiliate") || e.has("uagt");
        });
      const s = (e) => {
          const t = r.default.get("pix-s2s");
          if (t && !e.search.includes("fbclid") && !e.search.includes("pix")) {
            const a = new URLSearchParams(location.search);
            return (
              Object.entries(t).forEach((e) => {
                let [t, o] = e;
                a.set("af" === t ? "affiliate" : t, String(o));
              }),
              {
                ...e,
                search: `?${a.toString()}`,
              }
            );
          }
        },
        d = (e, t, a) => {
          t.includes(i.default.brand.code) &&
            (a(e.location),
            e.listen((e) => {
              a(e);
            }));
        };
      t.keepUrlQS = (e) => {
        d(e, ["r39bet", "x06prod"], (t) => {
          const a = t.pathname.includes("launch"),
            o = ((e) => {
              const t = n.default.getAffiliateCode();
              if (t && !e.search.includes("affiliateCode")) {
                const a = `${e.search}${
                  e.search ? "&" : "?"
                }affiliateCode=${t}`;
                return {
                  ...e,
                  search: a,
                };
              }
            })(t);
          !a && o && e.replace(o);
        }),
          d(e, ["jun88", "jun88th", "vipvnd", "te1prod"], (t) => {
            const a = t.pathname.includes("launch"),
              o = s(t);
            !a && o && e.replace(o);
          });
      };
    },
  },
]);
