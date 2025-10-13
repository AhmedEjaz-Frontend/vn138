"use strict";
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [2541],
  {
    26827: (l, n, i) => {
      Object.defineProperty(n, "__esModule", {
        value: !0,
      }),
        (n.default = void 0);
      var o = i(96540);
      const e = () => {
        window.history.back();
      };
      n.default = () => {
        const l = (0, o.useRef)({
          backButton: null,
          closingBehavior: null,
          swipeBehavior: null,
        });
        return (
          (0, o.useEffect)(
            () => (
              (async () => {
                try {
                  var n, o, a;
                  const r = await i.e(1583).then(i.bind(i, 71583)),
                    {
                      backButton: v,
                      closingBehavior: b,
                      isTMA: h,
                      init: d,
                      swipeBehavior: f,
                    } = r;
                  try {
                    d();
                  } catch (l) {}
                  var t, u, c, s;
                  (l.current = {
                    backButton: v,
                    closingBehavior: b,
                    swipeBehavior: f,
                  }),
                    (window.isTMA = h()),
                    null != b &&
                      null !== (n = b.mount) &&
                      void 0 !== n &&
                      n.isAvailable() &&
                      (b.mount(),
                      null !== (t = b.enableConfirmation) &&
                        void 0 !== t &&
                        t.isAvailable() &&
                        b.enableConfirmation()),
                    null != f &&
                      null !== (o = f.mount) &&
                      void 0 !== o &&
                      o.isAvailable() &&
                      (f.mount(),
                      null !== (u = f.disableVertical) &&
                        void 0 !== u &&
                        u.isAvailable() &&
                        f.disableVertical()),
                    null != v &&
                      null !== (a = v.mount) &&
                      void 0 !== a &&
                      a.isAvailable() &&
                      (v.mount(),
                      null !== (c = v.show) &&
                        void 0 !== c &&
                        c.isAvailable() &&
                        v.show(),
                      null !== (s = v.onClick) &&
                        void 0 !== s &&
                        s.isAvailable() &&
                        v.onClick(e));
                } catch (l) {}
              })(),
              () => {
                const {
                  backButton: n,
                  closingBehavior: i,
                  swipeBehavior: o,
                } = l.current;
                try {
                  null != i && i.unmount && i.unmount(),
                    null != o && o.unmount && o.unmount(),
                    n &&
                      (n.offClick && n.offClick(e), n.unmount && n.unmount());
                } catch (l) {}
              }
            ),
            []
          ),
          null
        );
      };
    },
  },
]);
