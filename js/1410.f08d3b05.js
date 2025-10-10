"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [1410],
  {
    6097: (e, a, d) => {
      d.r(a);
    },
    31410: (e, a, d) => {
      var m = d(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        Object.defineProperty(a, "default", {
          enumerable: !0,
          get: function () {
            return g.default;
          },
        }),
        d(6097);
      var g = m(d(60978));
    },
    60978: (e, a, d) => {
      var m = d(24994);
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0);
      var g = (function (e) {
          if ("function" == typeof WeakMap) {
            var a = new WeakMap();
            new WeakMap();
          }
          return (function (e) {
            if (e && e.__esModule) return e;
            var d,
              m,
              g = {
                __proto__: null,
                default: e,
              };
            if (null === e || ("object" != typeof e && "function" != typeof e))
              return g;
            if ((d = a)) {
              if (d.has(e)) return d.get(e);
              d.set(e, g);
            }
            for (const a in e)
              "default" !== a &&
                {}.hasOwnProperty.call(e, a) &&
                ((m =
                  (d = Object.defineProperty) &&
                  Object.getOwnPropertyDescriptor(e, a)) &&
                (m.get || m.set)
                  ? d(g, a, m)
                  : (g[a] = e[a]));
            return g;
          })(e);
        })(d(96540)),
        l = d(67467),
        t = d(28651),
        o = m(d(60781)),
        r = m(d(33788)),
        i = m(d(62143)),
        u = m(d(15062)),
        p = d(93185),
        n = d(74848);
      const c = g.default.memo(() => {
        const e = (0, t.useHistory)(),
          { gameproviderid: a, gameid: d } = (0, t.useParams)(),
          m = (0, l.useSelector)((e) => e.games.allGameList),
          [c, h] = (0, g.useState)(null),
          s = (0, g.useRef)(null),
          [v, _] = (0, o.default)(!1);
        return (
          (0, r.default)(s, v, {
            onClose: () => {
              _(!1);
            },
          }),
          (0, g.useEffect)(() => {
            if (!m.isEmpty()) {
              const g = m.find(
                  (e) => e.get("gameproviderid") === a && e.get("gameid") === d
                ),
                l = i.default.find(
                  (e) => e.gameproviderid === a && e.gameid === d
                );
              g && null != l && l.demourl
                ? h(g.set("demourl", l.demourl))
                : e.push(u.default.ROOT);
            }
          }, [m]),
          c
            ? (0, n.jsxs)("div", {
                ref: s,
                className: "demo-game-page",
                children: [
                  (0, n.jsxs)("div", {
                    className: "demo-game-header",
                    children: [
                      (0, n.jsx)("div", {
                        className: "demo-game-title",
                        children: (0, p.getName)(c.get("gamename")),
                      }),
                      (0, n.jsx)("div", {
                        className: "demo-close",
                        onClick: () => e.push(u.default.ROOT),
                        children: (0, n.jsx)("i", {
                          className: "mps-close",
                        }),
                      }),
                    ],
                  }),
                  (0, n.jsx)("iframe", {
                    src: c.get("demourl"),
                    frameborder: "0",
                    allowFullScreen: "true",
                  }),
                ],
              })
            : null
        );
      });
      a.default = c;
    },
    62143: (e, a) => {
      Object.defineProperty(a, "__esModule", {
        value: !0,
      }),
        (a.default = void 0),
        (a.default = [
          {
            gameid: "AWS_1",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_1&authkey=9e28ac13e964473fbde8afccb13b1dba&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_2",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_2&authkey=9db0197a7cf0fad885747272a615ff6e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_3",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_3&authkey=d0360ad1e6d329674cfd8a78977a4ef4&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_4",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_4&authkey=fa39b0634b4ab5c52ad876e5649c11f9&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_5",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_5&authkey=465116ada72540ec491736d437710c28&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_6",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_6&authkey=d3a57bcf512482f4420808e5145c071a&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_7",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_7&authkey=66d3f0c443409de2e2910fda5be56e27&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_8",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_8&authkey=c6312538475cd70f9aba3fc2c00e0ae1&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_9",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_9&authkey=cee2afb72fde17aabbb035ed956ed9f7&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_10",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_10&authkey=7fed4ef9363fb3b0bf2cdace5922bdb0&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_11",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_11&authkey=94cb53d6484fb6b1a78e7a18c29570c5&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_12",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_12&authkey=207b9350cd69ac49f63e29c3e0b1a701&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_13",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_13&authkey=2167db5af8fdb829d3421fad28d8f527&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_14",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_14&authkey=6e30b59c3aa35401d4125cf11df7a2c5&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_15",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_15&authkey=4b58580047efc12b09c1a19ecf7a7d99&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_16",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_16&authkey=08199a00102e9a580cea4cba133b16ba&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_17",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_17&authkey=7560b3e611021f7d17b6fe728c67145e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_18",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_18&authkey=ed6cbe9ca75b3419ef23d635e0ce4667&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_19",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_19&authkey=9278f9f88d1fdb1776b34495d789d067&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_20",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_20&authkey=62cdbc451b05dc312bd2377347b1b357&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_21",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_21&authkey=353f15e30cab7f0f9d4f0ae9ae5c674b&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_22",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_22&authkey=5ab9006dd4a9760fb1aaa10e5ac4ee90&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_23",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_23&authkey=9055bcd69829df935396cf8ccc163827&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_24",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_24&authkey=703b1600d50d9b8b3b7ec5f288497420&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_25",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_25&authkey=e5f3a553d6ef9d215f7ca462adaa62a5&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_26",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_26&authkey=2ceee357eb505702471b8d41016fdb1d&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_27",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_27&authkey=672435db4e08b1378dc2b3c5246f3e5d&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_28",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_28&authkey=12fa7649a45949f35c2ab76f575ce206&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_29",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_29&authkey=6980e46327291f6eb3653c655658117c&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_30",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_30&authkey=6032615c38db21d427b8b9a0279a143e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_31",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_31&authkey=824145f45bc6305d6754d8f976d92fac&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_32",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_32&authkey=c61df0dfd866cb2abffcf8502fdf723e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_33",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_33&authkey=4c71fe1064a7cc8d2a91fa147cdfbf8f&lang=th_TH&language=th",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew03.mp4",
          },
          {
            gameid: "AWS_34",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_34&authkey=341016c34311e24cc1ce5984633cdc1c&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_35",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_35&authkey=216e026866f17a008fbead537cac9f2d&lang=th_TH",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot02.mp4",
          },
          {
            gameid: "AWS_36",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_36&authkey=667c33a2ecc6ba5cb917568785898829&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_37",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_37&authkey=4eb198e599cd5bcb68a984d505d7ddc4&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_38",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_38&authkey=8518da1923522cc1b42ea466e1f27a93&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_39",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_39&authkey=87f9c6e1233576d54398efcbb565415b&lang=th_TH",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew01.mp4",
          },
          {
            gameid: "AWS_40",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_40&authkey=3328145af8a93d7e2ec4cff52890e12e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_41",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_41&authkey=4dc63f9aa514efc9ebe330b6de050606&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_42",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_42&authkey=a9e6585d6cd9d51f7e164998ce5bb517&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_43",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_43&authkey=63a2c376219b76dfdc3a4920117ee8bb&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_44",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_44&authkey=cdc9254b360085e8e92df802a991cefc&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_45",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_45&authkey=f0bd1fc361e942bd2a2aa0ded8ab9568&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_46",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_46&authkey=cc8e66601e4402cbaa7ce599959fc1df&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_47",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_47&authkey=f5337605d5da3a78c11d4ce37422b150&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_48",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_48&authkey=267a8194b11ca7e50f7adae3019562a7&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_49",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_49&authkey=8d467a9f9a1a9eb43221707fe3bce1ac&lang=th_TH",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew04.mp4",
          },
          {
            gameid: "AWS_50",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_50&authkey=b957b37c816152496aba040b5cd519fd&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_51",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_51&authkey=6fe4c51c76502134d1902e807be9a872&lang=th_TH",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew02.mp4",
          },
          {
            gameid: "AWS_52",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_52&authkey=78c1173bc838de5135d2f2e3a16f5783&lang=th_TH&language=th",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot01.mp4",
          },
          {
            gameid: "AWS_53",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_53&authkey=c9dc3015c4c07e93c7e64d22b145658c&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_54",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_54&authkey=db6d44a96c446e6fb9ddf5a030524a23&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_55",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_55&authkey=a6e179aeb28428ab91b0016e3aa56245&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_56",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_56&authkey=f878636e4faf3a0550d09ef2a860338e&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_57",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_58&authkey=bcb4a3811f68876d14ef9b54dd9d2650&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_58",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_58&authkey=bcb4a3811f68876d14ef9b54dd9d2650&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_59",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_59&authkey=6ae3c896013c136e1ace365bfcc543a2&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_60",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_60&authkey=35a7da4676310cc4e52b363239a82f8a&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_61",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_61&authkey=47288badd4794bb03424266c06dc5edf&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_62",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_62&authkey=6587fd10b8fcd1ee459635ea46d66b28&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_63",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_63&authkey=b84e7a714ace69781eac33f648df4d36&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "AWS_64",
            gameproviderid: "AE_GAMING",
            demourl:
              "https://demolaunch.aegaming-global.cc/triedgame?GameId=AWS_64&authkey=2fc2f27d3dc52a33615f2f19b65204b3&lang=th_TH",
            videourl: null,
          },
          {
            gameid: "PG-TABLE-001",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/baccarat-deluxe/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-001",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-gods/index.html?language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&real_url=https%3A%2F%2Fwww.pgsoft.com%2Fen%2Fpartners%2F&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-002",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/gem-saviour/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-003",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/lucky-neko/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew08.mp4",
          },
          {
            gameid: "PG-SLOT-005",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/medusa2/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-006",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/medusa/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-008",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/wizdom-wonders/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-TH&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew06.mp4",
          },
          {
            gameid: "PG-SLOT-009",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/hood-wolf/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-011",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/win-win-won/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-012",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/plushie-frenzy/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-013",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-tree/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-015",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/hotpot/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-016",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/dragon-legend/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-017",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/hip-hop-panda/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-018",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/legend-of-hou-yi/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-019",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/mr-hallow-win/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-020",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-gods/index.html?language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&real_url=https%3A%2F%2Fwww.pgsoft.com%2Fen%2Fpartners%2F&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-021",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/santas-gift-rush/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-022",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/gem-saviour-sword/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-023",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/piggy-gold/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-024",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/jungle-delight/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-025",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/symbols-of-egypt/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-026",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/ganesha-gold/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-027",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/three-monkeys/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-028",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/emperors-favour/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-030",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/double-fortune/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-032",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/the-great-icescape/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-034",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/captains-bounty/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-035",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/dragon-tiger-luck/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-036",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/flirting-scholar/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-037",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/journey-to-the-wealth/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-038",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/leprechaun-riches/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-39",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/muay-thai-champion/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-040",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-mouse/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot05.mp4",
          },
          {
            gameid: "PG-SLOT-041",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-mouse/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot05.mp4",
          },
          {
            gameid: "PG-SLOT-042",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-mouse/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot05.mp4",
          },
          {
            gameid: "PG-SLOT-043",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-mouse/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot05.mp4",
          },
          {
            gameid: "PG-SLOT-44",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/reel-love/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-45",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-46",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/shaolin-soccer/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-047",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-gods/index.html?language=en-US&bet_type=2&operator_token=fu6fpagpekf7445m6sdeecr8xvkkfvy6&real_url=https%3A%2F%2Fwww.pgsoft.com%2Fen%2Fpartners%2F&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew07.mp4",
          },
          {
            gameid: "PG-SLOT-48",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/candy-burst/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-049",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/bikini-paradise/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-TH&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew05.mp4",
          },
          {
            gameid: "PG-SLOT-050",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/mahjong-ways2/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-051",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/symbols-of-egypt/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-TH&bet_type=2&operator_token=fu6fpagpekf7445m6sdeecr8xvkkfvy6&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot03.mp4",
          },
          {
            gameid: "PG-SLOT-052",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/ganesha-gold/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-TH&bet_type=2&operator_token=fu6fpagpekf7445m6sdeecr8xvkkfvy6&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot04.mp4",
          },
          {
            gameid: "PG-SLOT-053",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/phoenix-rises/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-054",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-055",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/wild-fireworks/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-057",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/genies-wishes/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-058",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/treasures-aztec/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew09.mp4",
          },
          {
            gameid: "PG-SLOT-059",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/circus-delight/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-060",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-061",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/sct-cleopatra/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-062",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/vampires-charm/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-063",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/queen-bounty/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-064",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/jewels-prosper/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-065",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-066",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/jack-frosts/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-067",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/galactic-gems/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-068",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/gdn-ice-fire/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-069",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-070",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/fortune-ox/index.html?__refer=m.pg-redirect.com&__sv=0&language=th-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew10.mp4",
          },
          {
            gameid: "PG-SLOT-071",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/bali-vacation/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-072",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-073",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/majestic-ts/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-074",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/candy-bonanza/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-075",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/wild-bandito/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-076",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-077",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/heist-stakes/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "PG-SLOT-079",
            gameproviderid: "PG",
            demourl: null,
            videourl: null,
          },
          {
            gameid: "PG-SLOT-080",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/sushi-oishi/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot06.mp4",
          },
          {
            gameid: "PG-SLOT-081",
            gameproviderid: "PG",
            demourl:
              "https://m.pg-demo.com/mermaid-riches/index.html?__refer=m.pg-redirect.com&__sv=0&language=en-US&bet_type=2&operator_token=8735ze6y8kp7jpwmxvau7gvytu3adwj4&from=https%3A%2F%2Fpublic.pg-redirect.com%2Fpages%2Fclose.html",
            videourl: null,
          },
          {
            gameid: "1",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/1/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "2",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/2/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "3",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/3/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "4",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/4/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "5",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/5/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "7",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/7/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "8",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/8/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "9",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/9/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "10",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/10/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "12",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/12/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "13",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/13/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "15",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/15/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "16",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/16/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "17",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/17/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "19",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/19/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "20",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/20/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "21",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/21/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "23",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/23/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "24",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/24/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "26",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/26/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "27",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/27/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "29",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/29/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "31",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/31/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "32",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/32/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "33",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/33/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "34",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/34/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "35",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/35/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "36",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/36/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "38",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/38/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "39",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/39/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "42",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/42/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "44",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/44/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "46",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/46/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "47",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/47/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "49",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/49/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "50",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/50/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "51",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/51/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "52",
            gameproviderid: "CQ9",
            demourl: "https://h5c.cqgame.games/52/?language=th&token=guest123",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot10.mp4",
          },
          {
            gameid: "54",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/54/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "55",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/55/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "57",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/57/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "58",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/58/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "59",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/59/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "64",
            gameproviderid: "CQ9",
            demourl: "https://h5c.cqgame.games/64/?language=th&token=guest123",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot09.mp4",
          },
          {
            gameid: "66",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/66/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "67",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/67/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "68",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/68/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "69",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/69/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "70",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/70/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "72",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/72/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "74",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/74/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "77",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/77/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "78",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/78/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "79",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/79/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "80",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/80/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "81",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/81/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "83",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/83/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "86",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/86/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "89",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/89/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "92",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/92/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "95",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/95/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "96",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/96/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "98",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/98/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "99",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/99/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "102",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/102/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "103",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/103/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "104",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/104/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "105",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/105/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "108",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/108/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "109",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/109/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "111",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/111/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "112",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/112/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "113",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/113/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "115",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/115/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "116",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/116/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "118",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/118/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "121",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/121/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "122",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/122/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "123",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/123/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "124",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/124/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "125",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/125/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "127",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/127/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "129",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/129/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "131",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/131/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "133",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/133/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "135",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/135/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "137",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/137/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "139",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/139/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "141",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/141/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "147",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/147/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "150",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/150/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "152",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/152/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "154",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/154/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "157",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/157/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "179",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/179/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "182",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/182/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "183",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/183/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "195",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/195/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "200",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/200/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "201",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/201/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "202",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/202/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "203",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/203/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "204",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/204/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "205",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/205/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "207",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/207/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "209",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/209/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "210",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/210/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "211",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/211/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "212",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/212/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "213",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/213/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "214",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/214/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "215",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/215/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "216",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/216/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "221",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/221/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "5007",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/5007/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "5008",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/5008/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "5009",
            gameproviderid: "CQ9",
            demourl:
              "https://h5c.cqgame.games/5009/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "AB3",
            gameproviderid: "CQ9",
            demourl:
              "https://fiweb.cqgame.games/GameRecord/client/AB3/?language=zh-cn&token=guest",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing03.mp4",
          },
          {
            gameid: "AT01",
            gameproviderid: "CQ9",
            demourl:
              "https://fiweb.cqgame.games/GameRecord/client/AT01/?language=th&?token=GUESTPASS&language=zh-cn&dollarsign=Y&app=N&detect=N",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing02.mp4",
          },
          {
            gameid: "AT05",
            gameproviderid: "CQ9",
            demourl:
              "https://fiweb.cqgame.games/GameRecord/client/AT05/?language=zh-cn&?token=GUESTPASS&language=zh-cn&dollarsign=Y&app=N&detect=N",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing01.mp4",
          },
          {
            gameid: "GB1",
            gameproviderid: "CQ9",
            demourl:
              "https://web-gb.cqgame.games/h5/GB1/?language=th&token=guest",
            videourl: null,
          },
          {
            gameid: "GB2",
            gameproviderid: "CQ9",
            demourl:
              "https://web-gb.cqgame.games/h5/GB2/?language=th&token=guest",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot11.mp4",
          },
          {
            gameid: "GB198",
            gameproviderid: "CQ9",
            demourl:
              "https://web-gb.cqgame.games/h5/GB198/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "GO01",
            gameproviderid: "CQ9",
            demourl:
              "https://h5bt.cqgame.games/h5/GO01/?language=zh-cn&token=guest123",
            videourl: null,
          },
          {
            gameid: "ww3a8wsu4de7c",
            gameproviderid: "JOKER",
            demourl: null,
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aenew12.mp4",
          },
          {
            gameid: "ne4gq55cpitgg",
            gameproviderid: "JORKER",
            demourl: null,
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot07.mp4",
          },
          {
            gameid: "ef1uyxt98o6ur",
            gameproviderid: "JORKER",
            demourl: null,
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aeslot08.mp4",
          },
          {
            gameid: "JILI-FISH-002",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish2/index.html?ssoKey=b4a8a681b6a60fb0db2c081c74a9734cc6aee223&lang=en-US&demo=true&be=moc.semagilij.a-ipabewbw&iu=true&gameId=20&loginFrom=wb-gaming&gs=semagilij&domain_platform=moc.gnidnawcs.df-tolsbw-tau&be=semagilij",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing04.mp4",
          },
          {
            gameid: "JILI-FISH-003",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish3/index.html?ssoKey=5e392cddcee49014c3379ddbf671ecf3c23c6d7f&lang=en-US&demo=true&be=moc.semagilij.a-ipabewbw&iu=true&gameId=32&loginFrom=wb-gaming&gs=semagilij&domain_platform=moc.gnidnawcs.df-tolsbw-tau&be=semagilij",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing09.mp4",
          },
          {
            gameid: "JILI-FISH-004",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish4/index.html?ssoKey=befc31e588ea47d2aa004ba8e675f2fbe7561bae&lang=en-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing06.mp4",
          },
          {
            gameid: "JILI-FISH-005",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish9/index.html?ssoKey=b3e9ec2b11cbdb81558164a4292fa3d19a5ae9ed&lang=en-US&demo=true&be=moc.semagilij.a-ipabewbw&iu=true&gameId=82&loginFrom=wb-gaming&gs=semagilij&domain_platform=moc.gnidnawcs.df-tolsbw-tau&be=semagilij",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing08.mp4",
          },
          {
            gameid: "JILI-FISH-006",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish6/index.html?ssoKey=b5ae4deeba66a780db09156fbb2f6834df4bb95f&lang=en-",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing07.mp4",
          },
          {
            gameid: "JILI-FISH-007",
            gameproviderid: "JILI",
            demourl:
              "https://wbgame-demo.jiligames.com/fish8/index.html?ssoKey=19a0a6d481571a72611f4a34fb47f61e062c6cfc&lang=en--",
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing10.mp4",
          },
          {
            gameid: "JILI-FISH-008",
            gameproviderid: "JILI",
            demourl: null,
            videourl:
              "https://d3hp1p8ulb0yim.cloudfront.net/aevideo/aefishing05.mp4",
          },
        ]);
    },
  },
]);
