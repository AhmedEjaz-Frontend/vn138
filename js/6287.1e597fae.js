"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [6287],
  {
    4347: (e, t, a) => {
      var r = a(24994);
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
      var s = r(a(86663)),
        o = r(a(32080)),
        i = m(a(68686)),
        _ = a(83597),
        l = a(38560),
        n = a(8087),
        A = a(51628),
        E = a(39418),
        p = m(a(30817));
      function m(e, t) {
        if ("function" == typeof WeakMap)
          var a = new WeakMap(),
            r = new WeakMap();
        return (m = function (e, t) {
          if (!t && e && e.__esModule) return e;
          var s,
            o,
            i = {
              __proto__: null,
              default: e,
            };
          if (null === e || ("object" != typeof e && "function" != typeof e))
            return i;
          if ((s = t ? r : a)) {
            if (s.has(e)) return s.get(e);
            s.set(e, i);
          }
          for (const t in e)
            "default" !== t &&
              {}.hasOwnProperty.call(e, t) &&
              ((o =
                (s = Object.defineProperty) &&
                Object.getOwnPropertyDescriptor(e, t)) &&
              (o.get || o.set)
                ? s(i, t, o)
                : (i[t] = e[t]));
          return i;
        })(e, t);
      }
      (t.launchGames = function () {
        let e,
          t =
            arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return (
          (e = _.isNativeApp
            ? E.platformModalGame.includes(t.gameproviderid) && t.platform
              ? t.platform
              : n.platformType.mobileapp
            : t.platform
            ? t.platform
            : l.isMobile
            ? n.platformType.mobile
            : n.platformType.desktop),
          {
            types: [
              p.AJAX_PUT_LAUNCH_GAME_REQUEST,
              p.AJAX_PUT_LAUNCH_GAME_SUCCESS,
              p.AJAX_PUT_LAUNCH_GAME_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, o.default)({
                  url: `${i.baseURL}${i.default.launchGamesURL}/${
                    t.distributorid
                  }/${t.gameproviderid || "SUB"}/${t.gameid}/launch`,
                  method: "PUT",
                  jsonStr: JSON.stringify({
                    lang: t.lang || A.currLocale,
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
            p.AJAX_GET_ALL_GAME_LIST_REQUEST,
            p.AJAX_GET_ALL_GAME_LIST_SUCCESS,
            p.AJAX_GET_ALL_GAME_LIST_FAILURE,
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
          const t = s.default.stringify(e);
          return {
            types: [
              p.AJAX_GET_ALL_GAME_LIST_REQUEST,
              p.AJAX_GET_ALL_GAME_LIST_SUCCESS,
              p.AJAX_GET_ALL_GAME_LIST_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}/games/allGameList?${t}`,
                  method: "GET",
                }),
            ],
            platform: e.platform,
          };
        }),
        (t.getAllGameName = () => ({
          types: [
            p.AJAX_GET_ALL_GAME_NAME_REQUEST,
            p.AJAX_GET_ALL_GAME_NAME_SUCCESS,
            p.AJAX_GET_ALL_GAME_NAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            () =>
              (0, o.default)({
                url: `${i.baseURL}/games/allGameName?${s.default.stringify({
                  lang: A.currLocale,
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
                ["zh-CN", "zh-TW", "en-US"].indexOf(A.currLocale) > -1
                  ? A.currLocale
                  : "en-US",
              sortcolumn: "gamename",
            },
            r = s.default.stringify(a);
          return {
            types: [
              p.AJAX_GET_MY_FAVORITE_GAME_LIST_REQUEST,
              p.AJAX_GET_MY_FAVORITE_GAME_LIST_SUCCESS,
              p.AJAX_GET_MY_FAVORITE_GAME_LIST_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}${i.default.myFavoriteGamesURL}?${r}`,
                  method: "GET",
                }),
            ],
            queryObj: a,
          };
        }),
        (t.addMyFavoriteGame = (e) => ({
          data: e,
          types: [
            p.AJAX_POST_MY_FAVORITE_GAME_REQUEST,
            p.AJAX_POST_MY_FAVORITE_GAME_SUCCESS,
            p.AJAX_POST_MY_FAVORITE_GAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${i.baseURL}${i.default.myFavoriteGamesURL}`,
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
            p.AJAX_DELETE_MY_FAVORITE_GAME_REQUEST,
            p.AJAX_DELETE_MY_FAVORITE_GAME_SUCCESS,
            p.AJAX_DELETE_MY_FAVORITE_GAME_FAILURE,
          ],
          promiseType: "",
          promises: [
            (t) =>
              t({
                url: `${i.baseURL}${i.default.myFavoriteGamesURL}`,
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
            p.AJAX_GET_MAINTENANCE_LIST_REQUEST,
            p.AJAX_GET_MAINTENANCE_LIST_SUCCESS,
            p.AJAX_GET_MAINTENANCE_LIST_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${i.baseURL}${i.default.maintenanceURL}`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.updateMaintenanceList = (e) => ({
          type: p.UPDATE_MAINTENANCE_LIST,
          payload: e,
        })),
        (t.getLast10Records = () => ({
          types: [
            p.AJAX_GET_LAST_10_RECORDS_REQUEST,
            p.AJAX_GET_LAST_10_RECORDS_SUCCESS,
            p.AJAX_GET_LAST_10_RECORDS_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${i.baseURL}${i.default.launchGamesURL}/record/last10record`,
                method: "GET",
              }),
          ],
        })),
        (t.getLast10DaysGameHistory = () => ({
          types: [
            p.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_REQUEST,
            p.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_SUCCESS,
            p.AJAX_GET_LAST_10_DAYS_GAME_HISTORY_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${i.baseURL}${i.default.launchGamesURL}/summary/last10day`,
                method: "GET",
              }),
          ],
        })),
        (t.getInsuranceGameHistory = (e, t) => {
          const a = s.default.stringify(t);
          return {
            types: [
              p.AJAX_GET_INSURANCE_GAME_HISTORY_REQUEST,
              p.AJAX_GET_INSURANCE_GAME_HISTORY_SUCCESS,
              p.AJAX_GET_INSURANCE_GAME_HISTORY_FAILURE,
            ],
            promiseType: "",
            promises: [
              (t) =>
                t({
                  url: `${i.baseURL}${i.default.launchGamesURL}/${e}/insurance?${a}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameHistoryByAll = (e) => {
          const t = s.default.stringify(e);
          return {
            types: [
              p.AJAX_GET_GAME_HISTORY_BY_ALL_REQUEST,
              p.AJAX_GET_GAME_HISTORY_BY_ALL_SUCCESS,
              p.AJAX_GET_GAME_HISTORY_BY_ALL_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, o.default)({
                  url: `${i.baseURL}${i.default.launchGamesURL}/ALL/record?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameHistoryDetail = (e, t) => {
          t.lang = A.currLocale;
          const a = s.default.stringify(t);
          return {
            types: [
              p.AJAX_GET_GAME_HISTORY_DETAIL_REQUEST,
              p.AJAX_GET_GAME_HISTORY_DETAIL_SUCCESS,
              p.AJAX_GET_GAME_HISTORY_DETAIL_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, o.default)({
                  url: `${i.baseURL}${i.default.launchGamesURL}/record/${e}?${a}`,
                  method: "GET",
                }),
            ],
            txnid: e,
          };
        }),
        (t.getGameHistoryByGame = (e, t) => {
          const { distributorid: a, gameproviderid: r, gameid: _ } = t,
            l = s.default.stringify(e);
          return {
            types: [
              p.AJAX_GET_GAME_HISTORY_BY_GAME_REQUEST,
              p.AJAX_GET_GAME_HISTORY_BY_GAME_SUCCESS,
              p.AJAX_GET_GAME_HISTORY_BY_GAME_FAILURE,
            ],
            promiseType: "",
            promises: [
              () =>
                (0, o.default)({
                  url: `${i.baseURL}${i.default.launchGamesURL}/${a}/${r}/${_}/record?${l}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.getGameTags = () => ({
          types: [
            p.AJAX_GET_GAME_TAGS_REQUEST,
            p.AJAX_GET_GAME_TAGS_SUCCESS,
            p.AJAX_GET_GAME_TAGS_FAILURE,
          ],
          promiseType: "",
          promises: [
            (e) =>
              e({
                url: `${i.baseURL}${i.default.launchGamesURL}/tags`,
                method: "GET",
                setToken: !1,
              }),
          ],
        })),
        (t.getEgameGames = (e) => {
          let {
            sort: t = "ASC",
            platform: a = n.platformType.desktop,
            tagid: r,
            gamename: o,
            gameproviderid: _,
          } = e;
          const l = s.default.stringify({
            sort: t,
            tagid: r,
            platform: a,
            gamename: o,
            gameproviderid: _,
            sortlang:
              ["zh-CN", "zh-TW", "en-US"].indexOf(A.currLocale) > -1
                ? A.currLocale
                : "en-US",
            offset: 0,
            limit: 2e3,
            sortcolumn: "gamename",
            producttypeid: "EGAME",
          });
          return {
            types: [
              p.AJAX_GET_EGAME_GAMES_REQUEST,
              p.AJAX_GET_EGAME_GAMES_SUCCESS,
              p.AJAX_GET_EGAME_GAMES_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}${i.default.launchGamesURL}?${l}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            sort: t,
            tagid: r,
            gamename: o,
            gameproviderid: _,
          };
        }),
        (t.removeGameCache = () => ({
          type: p.REMOVE_GAME_CACHE,
        })),
        (t.getGameIds = (e) => {
          const t = s.default.stringify(
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
              p.AJAX_GET_ALL_GAME_IDS_REQUEST,
              p.AJAX_GET_ALL_GAME_IDS_SUCCESS,
              p.AJAX_GET_ALL_GAME_IDS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}${i.default.launchGamesURL}?${t}`,
                  method: "GET",
                  setToken: !1,
                }),
            ],
            producttypeid: e.producttypeid,
          };
        }),
        (t.getUpcomingSports = (e) => {
          const t = s.default.stringify({
            size: e,
          });
          return {
            types: [
              p.GET_UPCOMING_SPORTS_REQUEST,
              p.GET_UPCOMING_SPORTS_SUCCESS,
              p.GET_UPCOMING_SPORTS_FAILURE,
            ],
            promiseType: "",
            promises: [
              (e) =>
                e({
                  url: `${i.baseURL}/upcomingSporting?${t}`,
                  method: "GET",
                }),
            ],
          };
        }),
        (t.isRedirectSportPage = () => ({
          type: p.REDIRECT_SPORT_PAGE,
        })),
        (t.updateRaceRecordList = (e) => ({
          type: p.UPDATE_RACE_RECORD,
          payload: e,
        })),
        (t.getSABAWidgetURL = (e) =>
          (0, o.default)({
            url: `${i.baseURL}/games/saba/getWidgetUrl`,
            method: "POST",
            jsonStr: JSON.stringify({
              ...e,
              domain: location.origin,
              language: A.currLocale,
            }),
          }));
    },
    5983: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      const r = (0, a(96540).createContext)({});
      t.default = r;
    },
    16287: (e, t, a) => {
      var r = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = (function (e) {
          if ("function" == typeof WeakMap) {
            var t = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var a,
              r,
              s = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return s;
            if ((a = t)) {
              if (a.has(e)) return a.get(e);
              a.set(e, s);
            }
            for (const t in e)
              "default" !== t &&
                {}.hasOwnProperty.call(e, t) &&
                ((r =
                  (a = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, t)) &&
                (r.get || r.set)
                  ? a(s, t, r)
                  : (s[t] = e[t]));
            return s;
          })(e);
        })(a(96540)),
        o = r(a(72524)),
        i = r(a(55665)),
        _ = r(a(5983)),
        l = r(a(42647)),
        n = a(8087),
        A = a(39418),
        E = r(a(94188)),
        p = a(74848);
      const { code: m } = E.default.brand,
        d = [].includes(m) ? 1 : 2,
        u = {
          activeTab: "",
          tag: null,
          search: null,
          provider: null,
          gameListStyle: d,
          showGameList: !1,
          scrollBanner: !1,
        };
      t.default = (e) => {
        var t;
        const [a, r] = (0, s.useState)({}),
          E = !(null === (t = Object.keys(a)) || void 0 === t || !t.length),
          {
            gameProviderMap: m,
            gameProviderPresetByTypesMap: T,
            gameTagsMap: c,
          } = (0, i.default)((e) => ({
            gameProviderMap: e.games.gameProviderMap,
            gameProviderPresetByTypesMap: e.games.gameProviderPresetByTypesMap,
            gameTagsMap: e.games.gameTagsMap,
          })),
          G = (0, s.useCallback)(
            (e) => {
              var t;
              return A.hasFilterGameType.includes(e)
                ? (null == c ||
                  null === (t = c.get(e).find((e) => e.get("preset"))) ||
                  void 0 === t
                    ? void 0
                    : t.get("tagid")) || n.gameTagEnum.ALL
                : null;
            },
            [c]
          ),
          [g, S] = (0, o.default)(() => u),
          L = T.get(g.activeTab),
          y = (0, s.useMemo)(() => {
            let e = m.get(g.activeTab);
            return A.showGameProvidersList.includes(g.activeTab) &&
              e &&
              e.size > 0
              ? e.keySeq().toArray()
              : null;
          }, [m, g.activeTab]),
          f = null != y && y.includes(L) ? L : null,
          R = (0, s.useCallback)(
            function (e) {
              let t =
                arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
              const a = void 0 !== e.showGameList && e.showGameList,
                r = G(e.type || (null == g ? void 0 : g.activeTab));
              let s = {
                ...e,
                showGameList: a,
                search: (null == e ? void 0 : e.search) || null,
              };
              e.type
                ? (s = {
                    tag: r,
                    provider: e.provider || f,
                    activeTab: e.type,
                    gameListStyle: d,
                    showGameList: a,
                    search: null,
                  })
                : e.tag &&
                  (s = {
                    tag: e.tag,
                    showGameList: void 0 === e.showGameList || e.showGameList,
                    search: null,
                  }),
                t && (s.search = null == g ? void 0 : g.search);
              const o = {
                ...s,
                anchorGameType:
                  e.anchorGameType || (null == g ? void 0 : g.activeTab),
                scrollBanner: void 0 === e.scrollBanner || e.scrollBanner,
              };
              S(o);
            },
            [g, S, G]
          );
        return (
          (0, s.useEffect)(() => {
            E || S(u);
          }, [E, S]),
          (0, p.jsxs)(_.default.Provider, {
            value: {
              subscribe: (e) => {
                r((t) => {
                  const a = {
                    ...t,
                  };
                  return (a[e] = !0), a;
                });
              },
              unsubscribe: (e) => {
                r((t) => {
                  const a = {
                    ...t,
                  };
                  return delete a[e], a;
                });
              },
              gameQuery: g,
              changeGameQuery: R,
            },
            children: [
              E &&
                (0, p.jsx)(l.default, {
                  gameQuery: g,
                  changeGameQuery: R,
                  displayProviders: y,
                  providerCheck: f,
                }),
              e.children,
            ],
          })
        );
      };
    },
    42647: (e, t, a) => {
      var r = a(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var s = a(96540),
        o = a(28651),
        i = a(67467),
        _ = r(a(15361)),
        l = r(a(55665)),
        n = a(8087),
        A = a(4347),
        E = a(15062),
        p = r(a(94188));
      const m = /Googlebot/.test(navigator.userAgent),
        {
          code: d,
          customMobile: { sportPage: u },
        } = p.default.brand,
        T = {
          vd8prod: `${E.paths.SPORT_PAGE}#/category/soccer`,
          ra3prod: `${E.paths.SPORT_PAGE}#/category/soccer`,
        };
      t.default = (e) => {
        let {
          gameQuery: t,
          changeGameQuery: a,
          displayProviders: r,
          providerCheck: p,
        } = e;
        const c = (0, o.useHistory)(),
          G = (0, i.useDispatch)(),
          { navigationList: g, initialRedirectSportPage: S } = (0, l.default)(
            (e) => ({
              navigationList: e.games.navigationList,
              gameProviderMap: e.games.gameProviderMap,
              gameProviderPresetByTypesMap:
                e.games.gameProviderPresetByTypesMap,
              gameTagsMap: e.games.gameTagsMap,
              initialRedirectSportPage: e.games.initialRedirectSportPage,
            })
          ),
          L = (0, s.useMemo)(() => {
            var e;
            return null == g ||
              null === (e = g.find((e) => e.get("preset"))) ||
              void 0 === e
              ? void 0
              : e.get("content");
          }, [g]),
          y = (0, s.useRef)("");
        return (
          (0, _.default)(() => {
            if (
              E.paths[t.activeTab] &&
              c.location.pathname !== E.paths[t.activeTab]
            ) {
              const e =
                ("SPORT_PAGE" === t.activeTab && T[d]) || E.paths[t.activeTab];
              y.current
                ? (c.push({
                    pathname: e,
                    search: y.current,
                  }),
                  (y.current = ""))
                : c.push(e);
            }
          }, [t.activeTab]),
          (0, s.useEffect)(() => {
            if (
              !m &&
              c.location.pathname === E.paths.ROOT &&
              L !== t.activeTab
            ) {
              let e = null != g && g.size ? L || "ROOT" : void 0;
              S &&
                ((e = u ? "CRICKET_PAGE" : "SPORT_PAGE"),
                G((0, A.isRedirectSportPage)())),
                a({
                  type: e,
                  scrollBanner: !1,
                }),
                (y.current = c.location.search);
            }
            if (
              null != g &&
              g.size &&
              c.location.pathname !== E.paths.ROOT &&
              Object.prototype.hasOwnProperty.call(
                n.mobilePathEnum,
                c.location.pathname
              )
            ) {
              var e, r;
              const t =
                null !== (e = c.location.pathname) &&
                void 0 !== e &&
                e.endsWith("/")
                  ? null === (r = c.location.pathname) || void 0 === r
                    ? void 0
                    : r.slice(0, -1)
                  : c.location.pathname;
              a({
                type: n.mobilePathEnum[t] || L,
              });
            }
          }, [g, S]),
          (0, s.useEffect)(() => {
            const e = c.listen((e) => {
              Object.prototype.hasOwnProperty.call(
                n.mobilePathEnum,
                e.pathname
              ) &&
                (e.pathname === E.paths.ROOT && "ROOT" !== L
                  ? a({
                      type: L || "ROOT",
                      scrollBanner: !1,
                    })
                  : a({
                      type: n.mobilePathEnum[e.pathname],
                    }));
            });
            return () => {
              e();
            };
          }, [c, L, a]),
          (0, s.useEffect)(() => {
            t.showGameList ||
              location.pathname === E.paths.ROOT ||
              a({
                provider: p,
              });
          }, [r]),
          null
        );
      };
    },
    55665: (e, t, a) => {
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = a(67467);
      t.default = (e) => (0, r.useSelector)(e, r.shallowEqual);
    },
  },
]);
