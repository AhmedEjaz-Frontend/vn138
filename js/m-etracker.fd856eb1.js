"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [2826],
  {
    82331: (e, t, s) => {
      var a = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var l = s(96540),
        o = a(s(55665)),
        i = a(s(27179)),
        n = s(56209),
        d = a(s(94188)),
        r = s(26898);
      const { code: c } = d.default.brand,
        u = {
          jun88: !0,
          mocbai: !0,
        };
      let f,
        p = 0;
      const v = () => {
        f && (clearInterval(f), (f = void 0));
      };
      t.default = () => {
        const { logined: e, firstdeposit: t } = (0, o.default)((e) => ({
            logined: e.players.logined,
            firstdeposit: e.players.player.firstdeposit,
          })),
          s = (0, l.useCallback)(() => {
            if (e && (0, r.isGetFirstDepositInfo)()) {
              const e = (0, r.getHashId)();
              i.default.set(e, Date.now());
              try {
                (0, n.getDepositInfo)()
                  .then((t) => {
                    let s;
                    const {
                      sent: a,
                      achieve: l,
                      depositAmount: o,
                      depositId: n,
                    } = t.payload;
                    a
                      ? ((s = -1), v())
                      : l &&
                        ((s = -1),
                        r.startEvent.firstDeposit(Number(o) || 0, {
                          eventID: n,
                        }),
                        v()),
                      s && i.default.set(e, s);
                  })
                  .catch((e) => {
                    401 === (null == e ? void 0 : e.code) && v();
                  });
              } catch (e) {
                p >= 3 ? v() : (p += 1);
              }
            }
          }, [e]);
        return (
          (0, l.useEffect)(() => {
            const e = !!u[c];
            return (
              -1 === i.default.get((0, r.getHashId)()) ||
                e ||
                (f = setInterval(() => {
                  s();
                }, r.adjLimitTime)),
              () => {
                v();
              }
            );
          }, [s]),
          (0, l.useEffect)(() => {
            if (t) {
              const e = (0, r.getHashId)();
              i.default.set(e, -1), v();
            }
          }, [t]),
          null
        );
      };
    },
  },
]);
("use strict");
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [2826],
  {
    82331: (e, t, s) => {
      var a = s(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var l = s(96540),
        o = a(s(55665)),
        i = a(s(27179)),
        n = s(56209),
        d = a(s(94188)),
        r = s(26898);
      const { code: c } = d.default.brand,
        u = {
          jun88: !0,
          mocbai: !0,
        };
      let f,
        p = 0;
      const v = () => {
        f && (clearInterval(f), (f = void 0));
      };
      t.default = () => {
        const { logined: e, firstdeposit: t } = (0, o.default)((e) => ({
            logined: e.players.logined,
            firstdeposit: e.players.player.firstdeposit,
          })),
          s = (0, l.useCallback)(() => {
            if (e && (0, r.isGetFirstDepositInfo)()) {
              const e = (0, r.getHashId)();
              i.default.set(e, Date.now());
              try {
                (0, n.getDepositInfo)()
                  .then((t) => {
                    let s;
                    const {
                      sent: a,
                      achieve: l,
                      depositAmount: o,
                      depositId: n,
                    } = t.payload;
                    a
                      ? ((s = -1), v())
                      : l &&
                        ((s = -1),
                        r.startEvent.firstDeposit(Number(o) || 0, {
                          eventID: n,
                        }),
                        v()),
                      s && i.default.set(e, s);
                  })
                  .catch((e) => {
                    401 === (null == e ? void 0 : e.code) && v();
                  });
              } catch (e) {
                p >= 3 ? v() : (p += 1);
              }
            }
          }, [e]);
        return (
          (0, l.useEffect)(() => {
            const e = !!u[c];
            return (
              -1 === i.default.get((0, r.getHashId)()) ||
                e ||
                (f = setInterval(() => {
                  s();
                }, r.adjLimitTime)),
              () => {
                v();
              }
            );
          }, [s]),
          (0, l.useEffect)(() => {
            if (t) {
              const e = (0, r.getHashId)();
              i.default.set(e, -1), v();
            }
          }, [t]),
          null
        );
      };
    },
  },
]);
