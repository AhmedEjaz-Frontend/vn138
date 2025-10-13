"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [5455],
  {
    18798: (e, t, d) => {
      d.r(t);
    },
    43892: (e, t, d) => {
      var n = d(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = t.CustomerService = void 0),
        n(d(96540));
      var r = n(d(53259)),
        a = n(d(58009)),
        l = n(d(16506)),
        i = n(d(94188)),
        o = d(74848);
      const { code: b } = i.default.brand,
        u =
          {
            ae888: () => d.e(8262).then(d.bind(d, 38262)),
            jun88: () =>
              Promise.all([d.e(6830), d.e(7897)]).then(d.bind(d, 67897)),
            jun88th: () => d.e(8429).then(d.bind(d, 38429)),
            vi5prod: () =>
              Promise.all([d.e(6830), d.e(6165)]).then(d.bind(d, 76165)),
            vf0prod: () => d.e(2269).then(d.bind(d, 92269)),
            bet88: () => d.e(23).then(d.bind(d, 60023)),
            tc7prod: () => d.e(5171).then(d.bind(d, 15171)),
            ta8prod: () => d.e(7344).then(d.bind(d, 27344)),
            t38prod: () => d.e(3934).then(d.bind(d, 93934)),
            ta5prod: () => d.e(9931).then(d.bind(d, 39931)),
            r39bet: () => d.e(5549).then(d.bind(d, 45549)),
            t98prod: () => d.e(56).then(d.bind(d, 50056)),
            pk0prod: () => d.e(5706).then(d.bind(d, 5706)),
          }[b] || (() => Promise.resolve()),
        h = (t.CustomerService = (0, r.default)({
          loader: u,
          loading: l.default,
        }));
      t.default = () =>
        (0, o.jsx)(a.default, {
          waitAllGameList: !0,
          children: (0, o.jsx)(h, {}),
        });
    },
    61847: (e, t, d) => {
      var n = d(24994);
      Object.defineProperty(t, "__esModule", {
        value: !0,
      }),
        (t.default = void 0);
      var r = n(d(43892));
      d(18798), (t.default = r.default);
    },
  },
]);
