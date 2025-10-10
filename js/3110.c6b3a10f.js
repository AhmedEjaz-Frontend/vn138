/*! For license information please see 3110.c6b3a10f.js.LICENSE.txt */
(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [3110],
  {
    93110: function (n, e, i) {
      var r;
      !(function () {
        "use strict";
        var t,
          s,
          o,
          u = 9e15,
          c = 1e9,
          f = "0123456789abcdef",
          a =
            "2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",
          h =
            "3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",
          l = {
            precision: 20,
            rounding: 4,
            modulo: 1,
            toExpNeg: -7,
            toExpPos: 21,
            minE: -u,
            maxE: u,
            crypto: !1,
          },
          d = !0,
          p = "[DecimalError] ",
          g = p + "Invalid argument: ",
          w = p + "Precision limit exceeded",
          m = p + "crypto unavailable",
          v = "[object Decimal]",
          N = Math.floor,
          b = Math.pow,
          E = /^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,
          x = /^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,
          y = /^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,
          M = /^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,
          q = 1e7,
          O = a.length - 1,
          F = h.length - 1,
          A = {
            toStringTag: v,
          };
        function Z(n) {
          var e,
            i,
            r,
            t = n.length - 1,
            s = "",
            o = n[0];
          if (t > 0) {
            for (s += o, e = 1; e < t; e++)
              (i = 7 - (r = n[e] + "").length) && (s += I(i)), (s += r);
            (i = 7 - (r = (o = n[e]) + "").length) && (s += I(i));
          } else if (0 === o) return "0";
          for (; o % 10 == 0; ) o /= 10;
          return s + o;
        }
        function D(n, e, i) {
          if (n !== ~~n || n < e || n > i) throw Error(g + n);
        }
        function _(n, e, i, r) {
          var t, s, o, u;
          for (s = n[0]; s >= 10; s /= 10) --e;
          return (
            --e < 0
              ? ((e += 7), (t = 0))
              : ((t = Math.ceil((e + 1) / 7)), (e %= 7)),
            (s = b(10, 7 - e)),
            (u = n[t] % s | 0),
            null == r
              ? e < 3
                ? (0 == e ? (u = (u / 100) | 0) : 1 == e && (u = (u / 10) | 0),
                  (o =
                    (i < 4 && 99999 == u) ||
                    (i > 3 && 49999 == u) ||
                    5e4 == u ||
                    0 == u))
                : (o =
                    (((i < 4 && u + 1 == s) || (i > 3 && u + 1 == s / 2)) &&
                      ((n[t + 1] / s / 100) | 0) == b(10, e - 2) - 1) ||
                    ((u == s / 2 || 0 == u) && !((n[t + 1] / s / 100) | 0)))
              : e < 4
              ? (0 == e
                  ? (u = (u / 1e3) | 0)
                  : 1 == e
                  ? (u = (u / 100) | 0)
                  : 2 == e && (u = (u / 10) | 0),
                (o = ((r || i < 4) && 9999 == u) || (!r && i > 3 && 4999 == u)))
              : (o =
                  (((r || i < 4) && u + 1 == s) ||
                    (!r && i > 3 && u + 1 == s / 2)) &&
                  ((n[t + 1] / s / 1e3) | 0) == b(10, e - 3) - 1),
            o
          );
        }
        function k(n, e, i) {
          for (var r, t, s = [0], o = 0, u = n.length; o < u; ) {
            for (t = s.length; t--; ) s[t] *= e;
            for (s[0] += f.indexOf(n.charAt(o++)), r = 0; r < s.length; r++)
              s[r] > i - 1 &&
                (void 0 === s[r + 1] && (s[r + 1] = 0),
                (s[r + 1] += (s[r] / i) | 0),
                (s[r] %= i));
          }
          return s.reverse();
        }
        (A.absoluteValue = A.abs =
          function () {
            var n = new this.constructor(this);
            return n.s < 0 && (n.s = 1), R(n);
          }),
          (A.ceil = function () {
            return R(new this.constructor(this), this.e + 1, 2);
          }),
          (A.clampedTo = A.clamp =
            function (n, e) {
              var i = this,
                r = i.constructor;
              if (((n = new r(n)), (e = new r(e)), !n.s || !e.s))
                return new r(NaN);
              if (n.gt(e)) throw Error(g + e);
              return i.cmp(n) < 0 ? n : i.cmp(e) > 0 ? e : new r(i);
            }),
          (A.comparedTo = A.cmp =
            function (n) {
              var e,
                i,
                r,
                t,
                s = this,
                o = s.d,
                u = (n = new s.constructor(n)).d,
                c = s.s,
                f = n.s;
              if (!o || !u)
                return c && f
                  ? c !== f
                    ? c
                    : o === u
                    ? 0
                    : !o ^ (c < 0)
                    ? 1
                    : -1
                  : NaN;
              if (!o[0] || !u[0]) return o[0] ? c : u[0] ? -f : 0;
              if (c !== f) return c;
              if (s.e !== n.e) return (s.e > n.e) ^ (c < 0) ? 1 : -1;
              for (
                e = 0, i = (r = o.length) < (t = u.length) ? r : t;
                e < i;
                ++e
              )
                if (o[e] !== u[e]) return (o[e] > u[e]) ^ (c < 0) ? 1 : -1;
              return r === t ? 0 : (r > t) ^ (c < 0) ? 1 : -1;
            }),
          (A.cosine = A.cos =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return i.d
                ? i.d[0]
                  ? ((n = r.precision),
                    (e = r.rounding),
                    (r.precision = n + Math.max(i.e, i.sd()) + 7),
                    (r.rounding = 1),
                    (i = (function (n, e) {
                      var i, r, t;
                      if (e.isZero()) return e;
                      (r = e.d.length) < 32
                        ? (t = (1 / K(4, (i = Math.ceil(r / 3)))).toString())
                        : ((i = 16), (t = "2.3283064365386962890625e-10")),
                        (n.precision += i),
                        (e = G(n, 1, e.times(t), new n(1)));
                      for (var s = i; s--; ) {
                        var o = e.times(e);
                        e = o.times(o).minus(o).times(8).plus(1);
                      }
                      return (n.precision -= i), e;
                    })(r, Q(r, i))),
                    (r.precision = n),
                    (r.rounding = e),
                    R(2 == o || 3 == o ? i.neg() : i, n, e, !0))
                  : new r(1)
                : new r(NaN);
            }),
          (A.cubeRoot = A.cbrt =
            function () {
              var n,
                e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f,
                a = this,
                h = a.constructor;
              if (!a.isFinite() || a.isZero()) return new h(a);
              for (
                d = !1,
                  (s = a.s * b(a.s * a, 1 / 3)) && Math.abs(s) != 1 / 0
                    ? (r = new h(s.toString()))
                    : ((i = Z(a.d)),
                      (s = ((n = a.e) - i.length + 1) % 3) &&
                        (i += 1 == s || -2 == s ? "0" : "00"),
                      (s = b(i, 1 / 3)),
                      (n = N((n + 1) / 3) - (n % 3 == (n < 0 ? -1 : 2))),
                      ((r = new h(
                        (i =
                          s == 1 / 0
                            ? "5e" + n
                            : (i = s.toExponential()).slice(
                                0,
                                i.indexOf("e") + 1
                              ) + n)
                      )).s = a.s)),
                  o = (n = h.precision) + 3;
                ;

              )
                if (
                  ((f = (c = (u = r).times(u).times(u)).plus(a)),
                  (r = P(f.plus(a).times(u), f.plus(c), o + 2, 1)),
                  Z(u.d).slice(0, o) === (i = Z(r.d)).slice(0, o))
                ) {
                  if (
                    "9999" != (i = i.slice(o - 3, o + 1)) &&
                    (t || "4999" != i)
                  ) {
                    (+i && (+i.slice(1) || "5" != i.charAt(0))) ||
                      (R(r, n + 1, 1), (e = !r.times(r).times(r).eq(a)));
                    break;
                  }
                  if (!t && (R(u, n + 1, 0), u.times(u).times(u).eq(a))) {
                    r = u;
                    break;
                  }
                  (o += 4), (t = 1);
                }
              return (d = !0), R(r, n, h.rounding, e);
            }),
          (A.decimalPlaces = A.dp =
            function () {
              var n,
                e = this.d,
                i = NaN;
              if (e) {
                if (
                  ((i = 7 * ((n = e.length - 1) - N(this.e / 7))), (n = e[n]))
                )
                  for (; n % 10 == 0; n /= 10) i--;
                i < 0 && (i = 0);
              }
              return i;
            }),
          (A.dividedBy = A.div =
            function (n) {
              return P(this, new this.constructor(n));
            }),
          (A.dividedToIntegerBy = A.divToInt =
            function (n) {
              var e = this.constructor;
              return R(P(this, new e(n), 0, 1, 1), e.precision, e.rounding);
            }),
          (A.equals = A.eq =
            function (n) {
              return 0 === this.cmp(n);
            }),
          (A.floor = function () {
            return R(new this.constructor(this), this.e + 1, 3);
          }),
          (A.greaterThan = A.gt =
            function (n) {
              return this.cmp(n) > 0;
            }),
          (A.greaterThanOrEqualTo = A.gte =
            function (n) {
              var e = this.cmp(n);
              return 1 == e || 0 === e;
            }),
          (A.hyperbolicCosine = A.cosh =
            function () {
              var n,
                e,
                i,
                r,
                t,
                s = this,
                o = s.constructor,
                u = new o(1);
              if (!s.isFinite()) return new o(s.s ? 1 / 0 : NaN);
              if (s.isZero()) return u;
              (i = o.precision),
                (r = o.rounding),
                (o.precision = i + Math.max(s.e, s.sd()) + 4),
                (o.rounding = 1),
                (t = s.d.length) < 32
                  ? (e = (1 / K(4, (n = Math.ceil(t / 3)))).toString())
                  : ((n = 16), (e = "2.3283064365386962890625e-10")),
                (s = G(o, 1, s.times(e), new o(1), !0));
              for (var c, f = n, a = new o(8); f--; )
                (c = s.times(s)), (s = u.minus(c.times(a.minus(c.times(a)))));
              return R(s, (o.precision = i), (o.rounding = r), !0);
            }),
          (A.hyperbolicSine = A.sinh =
            function () {
              var n,
                e,
                i,
                r,
                t = this,
                s = t.constructor;
              if (!t.isFinite() || t.isZero()) return new s(t);
              if (
                ((e = s.precision),
                (i = s.rounding),
                (s.precision = e + Math.max(t.e, t.sd()) + 4),
                (s.rounding = 1),
                (r = t.d.length) < 3)
              )
                t = G(s, 2, t, t, !0);
              else {
                (n = (n = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | n),
                  (t = G(s, 2, (t = t.times(1 / K(5, n))), t, !0));
                for (var o, u = new s(5), c = new s(16), f = new s(20); n--; )
                  (o = t.times(t)),
                    (t = t.times(u.plus(o.times(c.times(o).plus(f)))));
              }
              return (s.precision = e), (s.rounding = i), R(t, e, i, !0);
            }),
          (A.hyperbolicTangent = A.tanh =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return i.isFinite()
                ? i.isZero()
                  ? new r(i)
                  : ((n = r.precision),
                    (e = r.rounding),
                    (r.precision = n + 7),
                    (r.rounding = 1),
                    P(i.sinh(), i.cosh(), (r.precision = n), (r.rounding = e)))
                : new r(i.s);
            }),
          (A.inverseCosine = A.acos =
            function () {
              var n = this,
                e = n.constructor,
                i = n.abs().cmp(1),
                r = e.precision,
                t = e.rounding;
              return -1 !== i
                ? 0 === i
                  ? n.isNeg()
                    ? U(e, r, t)
                    : new e(0)
                  : new e(NaN)
                : n.isZero()
                ? U(e, r + 4, t).times(0.5)
                : ((e.precision = r + 6),
                  (e.rounding = 1),
                  (n = new e(1).minus(n).div(n.plus(1)).sqrt().atan()),
                  (e.precision = r),
                  (e.rounding = t),
                  n.times(2));
            }),
          (A.inverseHyperbolicCosine = A.acosh =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return i.lte(1)
                ? new r(i.eq(1) ? 0 : NaN)
                : i.isFinite()
                ? ((n = r.precision),
                  (e = r.rounding),
                  (r.precision = n + Math.max(Math.abs(i.e), i.sd()) + 4),
                  (r.rounding = 1),
                  (d = !1),
                  (i = i.times(i).minus(1).sqrt().plus(i)),
                  (d = !0),
                  (r.precision = n),
                  (r.rounding = e),
                  i.ln())
                : new r(i);
            }),
          (A.inverseHyperbolicSine = A.asinh =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return !i.isFinite() || i.isZero()
                ? new r(i)
                : ((n = r.precision),
                  (e = r.rounding),
                  (r.precision = n + 2 * Math.max(Math.abs(i.e), i.sd()) + 6),
                  (r.rounding = 1),
                  (d = !1),
                  (i = i.times(i).plus(1).sqrt().plus(i)),
                  (d = !0),
                  (r.precision = n),
                  (r.rounding = e),
                  i.ln());
            }),
          (A.inverseHyperbolicTangent = A.atanh =
            function () {
              var n,
                e,
                i,
                r,
                t = this,
                s = t.constructor;
              return t.isFinite()
                ? t.e >= 0
                  ? new s(t.abs().eq(1) ? t.s / 0 : t.isZero() ? t : NaN)
                  : ((n = s.precision),
                    (e = s.rounding),
                    (r = t.sd()),
                    Math.max(r, n) < 2 * -t.e - 1
                      ? R(new s(t), n, e, !0)
                      : ((s.precision = i = r - t.e),
                        (t = P(t.plus(1), new s(1).minus(t), i + n, 1)),
                        (s.precision = n + 4),
                        (s.rounding = 1),
                        (t = t.ln()),
                        (s.precision = n),
                        (s.rounding = e),
                        t.times(0.5)))
                : new s(NaN);
            }),
          (A.inverseSine = A.asin =
            function () {
              var n,
                e,
                i,
                r,
                t = this,
                s = t.constructor;
              return t.isZero()
                ? new s(t)
                : ((e = t.abs().cmp(1)),
                  (i = s.precision),
                  (r = s.rounding),
                  -1 !== e
                    ? 0 === e
                      ? (((n = U(s, i + 4, r).times(0.5)).s = t.s), n)
                      : new s(NaN)
                    : ((s.precision = i + 6),
                      (s.rounding = 1),
                      (t = t
                        .div(new s(1).minus(t.times(t)).sqrt().plus(1))
                        .atan()),
                      (s.precision = i),
                      (s.rounding = r),
                      t.times(2)));
            }),
          (A.inverseTangent = A.atan =
            function () {
              var n,
                e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f = this,
                a = f.constructor,
                h = a.precision,
                l = a.rounding;
              if (f.isFinite()) {
                if (f.isZero()) return new a(f);
                if (f.abs().eq(1) && h + 4 <= F)
                  return ((o = U(a, h + 4, l).times(0.25)).s = f.s), o;
              } else {
                if (!f.s) return new a(NaN);
                if (h + 4 <= F)
                  return ((o = U(a, h + 4, l).times(0.5)).s = f.s), o;
              }
              for (
                a.precision = u = h + 10,
                  a.rounding = 1,
                  n = i = Math.min(28, (u / 7 + 2) | 0);
                n;
                --n
              )
                f = f.div(f.times(f).plus(1).sqrt().plus(1));
              for (
                d = !1,
                  e = Math.ceil(u / 7),
                  r = 1,
                  c = f.times(f),
                  o = new a(f),
                  t = f;
                -1 !== n;

              )
                if (
                  ((t = t.times(c)),
                  (s = o.minus(t.div((r += 2)))),
                  (t = t.times(c)),
                  void 0 !== (o = s.plus(t.div((r += 2)))).d[e])
                )
                  for (n = e; o.d[n] === s.d[n] && n--; );
              return (
                i && (o = o.times(2 << (i - 1))),
                (d = !0),
                R(o, (a.precision = h), (a.rounding = l), !0)
              );
            }),
          (A.isFinite = function () {
            return !!this.d;
          }),
          (A.isInteger = A.isInt =
            function () {
              return !!this.d && N(this.e / 7) > this.d.length - 2;
            }),
          (A.isNaN = function () {
            return !this.s;
          }),
          (A.isNegative = A.isNeg =
            function () {
              return this.s < 0;
            }),
          (A.isPositive = A.isPos =
            function () {
              return this.s > 0;
            }),
          (A.isZero = function () {
            return !!this.d && 0 === this.d[0];
          }),
          (A.lessThan = A.lt =
            function (n) {
              return this.cmp(n) < 0;
            }),
          (A.lessThanOrEqualTo = A.lte =
            function (n) {
              return this.cmp(n) < 1;
            }),
          (A.logarithm = A.log =
            function (n) {
              var e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f = this,
                a = f.constructor,
                h = a.precision,
                l = a.rounding;
              if (null == n) (n = new a(10)), (e = !0);
              else {
                if (((i = (n = new a(n)).d), n.s < 0 || !i || !i[0] || n.eq(1)))
                  return new a(NaN);
                e = n.eq(10);
              }
              if (((i = f.d), f.s < 0 || !i || !i[0] || f.eq(1)))
                return new a(
                  i && !i[0] ? -1 / 0 : 1 != f.s ? NaN : i ? 0 : 1 / 0
                );
              if (e)
                if (i.length > 1) s = !0;
                else {
                  for (t = i[0]; t % 10 == 0; ) t /= 10;
                  s = 1 !== t;
                }
              if (
                ((d = !1),
                (o = j(f, (u = h + 5))),
                (r = e ? L(a, u + 10) : j(n, u)),
                _((c = P(o, r, u, 1)).d, (t = h), l))
              )
                do {
                  if (
                    ((o = j(f, (u += 10))),
                    (r = e ? L(a, u + 10) : j(n, u)),
                    (c = P(o, r, u, 1)),
                    !s)
                  ) {
                    +Z(c.d).slice(t + 1, t + 15) + 1 == 1e14 &&
                      (c = R(c, h + 1, 0));
                    break;
                  }
                } while (_(c.d, (t += 10), l));
              return (d = !0), R(c, h, l);
            }),
          (A.minus = A.sub =
            function (n) {
              var e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f,
                a,
                h,
                l,
                p = this,
                g = p.constructor;
              if (((n = new g(n)), !p.d || !n.d))
                return (
                  p.s && n.s
                    ? p.d
                      ? (n.s = -n.s)
                      : (n = new g(n.d || p.s !== n.s ? p : NaN))
                    : (n = new g(NaN)),
                  n
                );
              if (p.s != n.s) return (n.s = -n.s), p.plus(n);
              if (
                ((f = p.d),
                (l = n.d),
                (u = g.precision),
                (c = g.rounding),
                !f[0] || !l[0])
              ) {
                if (l[0]) n.s = -n.s;
                else {
                  if (!f[0]) return new g(3 === c ? -0 : 0);
                  n = new g(p);
                }
                return d ? R(n, u, c) : n;
              }
              if (
                ((i = N(n.e / 7)),
                (a = N(p.e / 7)),
                (f = f.slice()),
                (s = a - i))
              ) {
                for (
                  (h = s < 0)
                    ? ((e = f), (s = -s), (o = l.length))
                    : ((e = l), (i = a), (o = f.length)),
                    s > (r = Math.max(Math.ceil(u / 7), o) + 2) &&
                      ((s = r), (e.length = 1)),
                    e.reverse(),
                    r = s;
                  r--;

                )
                  e.push(0);
                e.reverse();
              } else {
                for (
                  (h = (r = f.length) < (o = l.length)) && (o = r), r = 0;
                  r < o;
                  r++
                )
                  if (f[r] != l[r]) {
                    h = f[r] < l[r];
                    break;
                  }
                s = 0;
              }
              for (
                h && ((e = f), (f = l), (l = e), (n.s = -n.s)),
                  o = f.length,
                  r = l.length - o;
                r > 0;
                --r
              )
                f[o++] = 0;
              for (r = l.length; r > s; ) {
                if (f[--r] < l[r]) {
                  for (t = r; t && 0 === f[--t]; ) f[t] = q - 1;
                  --f[t], (f[r] += q);
                }
                f[r] -= l[r];
              }
              for (; 0 === f[--o]; ) f.pop();
              for (; 0 === f[0]; f.shift()) --i;
              return f[0]
                ? ((n.d = f), (n.e = T(f, i)), d ? R(n, u, c) : n)
                : new g(3 === c ? -0 : 0);
            }),
          (A.modulo = A.mod =
            function (n) {
              var e,
                i = this,
                r = i.constructor;
              return (
                (n = new r(n)),
                !i.d || !n.s || (n.d && !n.d[0])
                  ? new r(NaN)
                  : !n.d || (i.d && !i.d[0])
                  ? R(new r(i), r.precision, r.rounding)
                  : ((d = !1),
                    9 == r.modulo
                      ? ((e = P(i, n.abs(), 0, 3, 1)).s *= n.s)
                      : (e = P(i, n, 0, r.modulo, 1)),
                    (e = e.times(n)),
                    (d = !0),
                    i.minus(e))
              );
            }),
          (A.naturalExponential = A.exp =
            function () {
              return $(this);
            }),
          (A.naturalLogarithm = A.ln =
            function () {
              return j(this);
            }),
          (A.negated = A.neg =
            function () {
              var n = new this.constructor(this);
              return (n.s = -n.s), R(n);
            }),
          (A.plus = A.add =
            function (n) {
              var e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f,
                a,
                h = this,
                l = h.constructor;
              if (((n = new l(n)), !h.d || !n.d))
                return (
                  h.s && n.s
                    ? h.d || (n = new l(n.d || h.s === n.s ? h : NaN))
                    : (n = new l(NaN)),
                  n
                );
              if (h.s != n.s) return (n.s = -n.s), h.minus(n);
              if (
                ((f = h.d),
                (a = n.d),
                (u = l.precision),
                (c = l.rounding),
                !f[0] || !a[0])
              )
                return a[0] || (n = new l(h)), d ? R(n, u, c) : n;
              if (
                ((s = N(h.e / 7)),
                (r = N(n.e / 7)),
                (f = f.slice()),
                (t = s - r))
              ) {
                for (
                  t < 0
                    ? ((i = f), (t = -t), (o = a.length))
                    : ((i = a), (r = s), (o = f.length)),
                    t > (o = (s = Math.ceil(u / 7)) > o ? s + 1 : o + 1) &&
                      ((t = o), (i.length = 1)),
                    i.reverse();
                  t--;

                )
                  i.push(0);
                i.reverse();
              }
              for (
                (o = f.length) - (t = a.length) < 0 &&
                  ((t = o), (i = a), (a = f), (f = i)),
                  e = 0;
                t;

              )
                (e = ((f[--t] = f[t] + a[t] + e) / q) | 0), (f[t] %= q);
              for (e && (f.unshift(e), ++r), o = f.length; 0 == f[--o]; )
                f.pop();
              return (n.d = f), (n.e = T(f, r)), d ? R(n, u, c) : n;
            }),
          (A.precision = A.sd =
            function (n) {
              var e,
                i = this;
              if (void 0 !== n && n !== !!n && 1 !== n && 0 !== n)
                throw Error(g + n);
              return (
                i.d
                  ? ((e = C(i.d)), n && i.e + 1 > e && (e = i.e + 1))
                  : (e = NaN),
                e
              );
            }),
          (A.round = function () {
            var n = this,
              e = n.constructor;
            return R(new e(n), n.e + 1, e.rounding);
          }),
          (A.sine = A.sin =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return i.isFinite()
                ? i.isZero()
                  ? new r(i)
                  : ((n = r.precision),
                    (e = r.rounding),
                    (r.precision = n + Math.max(i.e, i.sd()) + 7),
                    (r.rounding = 1),
                    (i = (function (n, e) {
                      var i,
                        r = e.d.length;
                      if (r < 3) return e.isZero() ? e : G(n, 2, e, e);
                      (i = (i = 1.4 * Math.sqrt(r)) > 16 ? 16 : 0 | i),
                        (e = G(n, 2, (e = e.times(1 / K(5, i))), e));
                      for (
                        var t, s = new n(5), o = new n(16), u = new n(20);
                        i--;

                      )
                        (t = e.times(e)),
                          (e = e.times(s.plus(t.times(o.times(t).minus(u)))));
                      return e;
                    })(r, Q(r, i))),
                    (r.precision = n),
                    (r.rounding = e),
                    R(o > 2 ? i.neg() : i, n, e, !0))
                : new r(NaN);
            }),
          (A.squareRoot = A.sqrt =
            function () {
              var n,
                e,
                i,
                r,
                t,
                s,
                o = this,
                u = o.d,
                c = o.e,
                f = o.s,
                a = o.constructor;
              if (1 !== f || !u || !u[0])
                return new a(
                  !f || (f < 0 && (!u || u[0])) ? NaN : u ? o : 1 / 0
                );
              for (
                d = !1,
                  0 == (f = Math.sqrt(+o)) || f == 1 / 0
                    ? (((e = Z(u)).length + c) % 2 == 0 && (e += "0"),
                      (f = Math.sqrt(e)),
                      (c = N((c + 1) / 2) - (c < 0 || c % 2)),
                      (r = new a(
                        (e =
                          f == 1 / 0
                            ? "5e" + c
                            : (e = f.toExponential()).slice(
                                0,
                                e.indexOf("e") + 1
                              ) + c)
                      )))
                    : (r = new a(f.toString())),
                  i = (c = a.precision) + 3;
                ;

              )
                if (
                  ((r = (s = r).plus(P(o, s, i + 2, 1)).times(0.5)),
                  Z(s.d).slice(0, i) === (e = Z(r.d)).slice(0, i))
                ) {
                  if (
                    "9999" != (e = e.slice(i - 3, i + 1)) &&
                    (t || "4999" != e)
                  ) {
                    (+e && (+e.slice(1) || "5" != e.charAt(0))) ||
                      (R(r, c + 1, 1), (n = !r.times(r).eq(o)));
                    break;
                  }
                  if (!t && (R(s, c + 1, 0), s.times(s).eq(o))) {
                    r = s;
                    break;
                  }
                  (i += 4), (t = 1);
                }
              return (d = !0), R(r, c, a.rounding, n);
            }),
          (A.tangent = A.tan =
            function () {
              var n,
                e,
                i = this,
                r = i.constructor;
              return i.isFinite()
                ? i.isZero()
                  ? new r(i)
                  : ((n = r.precision),
                    (e = r.rounding),
                    (r.precision = n + 10),
                    (r.rounding = 1),
                    ((i = i.sin()).s = 1),
                    (i = P(i, new r(1).minus(i.times(i)).sqrt(), n + 10, 0)),
                    (r.precision = n),
                    (r.rounding = e),
                    R(2 == o || 4 == o ? i.neg() : i, n, e, !0))
                : new r(NaN);
            }),
          (A.times = A.mul =
            function (n) {
              var e,
                i,
                r,
                t,
                s,
                o,
                u,
                c,
                f,
                a = this,
                h = a.constructor,
                l = a.d,
                p = (n = new h(n)).d;
              if (((n.s *= a.s), !(l && l[0] && p && p[0])))
                return new h(
                  !n.s || (l && !l[0] && !p) || (p && !p[0] && !l)
                    ? NaN
                    : l && p
                    ? 0 * n.s
                    : n.s / 0
                );
              for (
                i = N(a.e / 7) + N(n.e / 7),
                  (c = l.length) < (f = p.length) &&
                    ((s = l), (l = p), (p = s), (o = c), (c = f), (f = o)),
                  s = [],
                  r = o = c + f;
                r--;

              )
                s.push(0);
              for (r = f; --r >= 0; ) {
                for (e = 0, t = c + r; t > r; )
                  (u = s[t] + p[r] * l[t - r - 1] + e),
                    (s[t--] = u % q | 0),
                    (e = (u / q) | 0);
                s[t] = (s[t] + e) % q | 0;
              }
              for (; !s[--o]; ) s.pop();
              return (
                e ? ++i : s.shift(),
                (n.d = s),
                (n.e = T(s, i)),
                d ? R(n, h.precision, h.rounding) : n
              );
            }),
          (A.toBinary = function (n, e) {
            return X(this, 2, n, e);
          }),
          (A.toDecimalPlaces = A.toDP =
            function (n, e) {
              var i = this,
                r = i.constructor;
              return (
                (i = new r(i)),
                void 0 === n
                  ? i
                  : (D(n, 0, c),
                    void 0 === e ? (e = r.rounding) : D(e, 0, 8),
                    R(i, n + i.e + 1, e))
              );
            }),
          (A.toExponential = function (n, e) {
            var i,
              r = this,
              t = r.constructor;
            return (
              void 0 === n
                ? (i = S(r, !0))
                : (D(n, 0, c),
                  void 0 === e ? (e = t.rounding) : D(e, 0, 8),
                  (i = S((r = R(new t(r), n + 1, e)), !0, n + 1))),
              r.isNeg() && !r.isZero() ? "-" + i : i
            );
          }),
          (A.toFixed = function (n, e) {
            var i,
              r,
              t = this,
              s = t.constructor;
            return (
              void 0 === n
                ? (i = S(t))
                : (D(n, 0, c),
                  void 0 === e ? (e = s.rounding) : D(e, 0, 8),
                  (i = S((r = R(new s(t), n + t.e + 1, e)), !1, n + r.e + 1))),
              t.isNeg() && !t.isZero() ? "-" + i : i
            );
          }),
          (A.toFraction = function (n) {
            var e,
              i,
              r,
              t,
              s,
              o,
              u,
              c,
              f,
              a,
              h,
              l,
              p = this,
              w = p.d,
              m = p.constructor;
            if (!w) return new m(p);
            if (
              ((f = i = new m(1)),
              (r = c = new m(0)),
              (o = (s = (e = new m(r)).e = C(w) - p.e - 1) % 7),
              (e.d[0] = b(10, o < 0 ? 7 + o : o)),
              null == n)
            )
              n = s > 0 ? e : f;
            else {
              if (!(u = new m(n)).isInt() || u.lt(f)) throw Error(g + u);
              n = u.gt(e) ? (s > 0 ? e : f) : u;
            }
            for (
              d = !1,
                u = new m(Z(w)),
                a = m.precision,
                m.precision = s = 7 * w.length * 2;
              (h = P(u, e, 0, 1, 1)), 1 != (t = i.plus(h.times(r))).cmp(n);

            )
              (i = r),
                (r = t),
                (t = f),
                (f = c.plus(h.times(t))),
                (c = t),
                (t = e),
                (e = u.minus(h.times(t))),
                (u = t);
            return (
              (t = P(n.minus(i), r, 0, 1, 1)),
              (c = c.plus(t.times(f))),
              (i = i.plus(t.times(r))),
              (c.s = f.s = p.s),
              (l =
                P(f, r, s, 1).minus(p).abs().cmp(P(c, i, s, 1).minus(p).abs()) <
                1
                  ? [f, r]
                  : [c, i]),
              (m.precision = a),
              (d = !0),
              l
            );
          }),
          (A.toHexadecimal = A.toHex =
            function (n, e) {
              return X(this, 16, n, e);
            }),
          (A.toNearest = function (n, e) {
            var i = this,
              r = i.constructor;
            if (((i = new r(i)), null == n)) {
              if (!i.d) return i;
              (n = new r(1)), (e = r.rounding);
            } else {
              if (
                ((n = new r(n)),
                void 0 === e ? (e = r.rounding) : D(e, 0, 8),
                !i.d)
              )
                return n.s ? i : n;
              if (!n.d) return n.s && (n.s = i.s), n;
            }
            return (
              n.d[0]
                ? ((d = !1), (i = P(i, n, 0, e, 1).times(n)), (d = !0), R(i))
                : ((n.s = i.s), (i = n)),
              i
            );
          }),
          (A.toNumber = function () {
            return +this;
          }),
          (A.toOctal = function (n, e) {
            return X(this, 8, n, e);
          }),
          (A.toPower = A.pow =
            function (n) {
              var e,
                i,
                r,
                t,
                s,
                o,
                u = this,
                c = u.constructor,
                f = +(n = new c(n));
              if (!(u.d && n.d && u.d[0] && n.d[0])) return new c(b(+u, f));
              if ((u = new c(u)).eq(1)) return u;
              if (((r = c.precision), (s = c.rounding), n.eq(1)))
                return R(u, r, s);
              if (
                (e = N(n.e / 7)) >= n.d.length - 1 &&
                (i = f < 0 ? -f : f) <= 9007199254740991
              )
                return (
                  (t = H(c, u, i, r)), n.s < 0 ? new c(1).div(t) : R(t, r, s)
                );
              if ((o = u.s) < 0) {
                if (e < n.d.length - 1) return new c(NaN);
                if (
                  (1 & n.d[e] || (o = 1),
                  0 == u.e && 1 == u.d[0] && 1 == u.d.length)
                )
                  return (u.s = o), u;
              }
              return (e =
                0 != (i = b(+u, f)) && isFinite(i)
                  ? new c(i + "").e
                  : N(f * (Math.log("0." + Z(u.d)) / Math.LN10 + u.e + 1))) >
                c.maxE + 1 || e < c.minE - 1
                ? new c(e > 0 ? o / 0 : 0)
                : ((d = !1),
                  (c.rounding = u.s = 1),
                  (i = Math.min(12, (e + "").length)),
                  (t = $(n.times(j(u, r + i)), r)).d &&
                    _((t = R(t, r + 5, 1)).d, r, s) &&
                    ((e = r + 10),
                    +Z((t = R($(n.times(j(u, e + i)), e), e + 5, 1)).d).slice(
                      r + 1,
                      r + 15
                    ) +
                      1 ==
                      1e14 && (t = R(t, r + 1, 0))),
                  (t.s = o),
                  (d = !0),
                  (c.rounding = s),
                  R(t, r, s));
            }),
          (A.toPrecision = function (n, e) {
            var i,
              r = this,
              t = r.constructor;
            return (
              void 0 === n
                ? (i = S(r, r.e <= t.toExpNeg || r.e >= t.toExpPos))
                : (D(n, 1, c),
                  void 0 === e ? (e = t.rounding) : D(e, 0, 8),
                  (i = S(
                    (r = R(new t(r), n, e)),
                    n <= r.e || r.e <= t.toExpNeg,
                    n
                  ))),
              r.isNeg() && !r.isZero() ? "-" + i : i
            );
          }),
          (A.toSignificantDigits = A.toSD =
            function (n, e) {
              var i = this.constructor;
              return (
                void 0 === n
                  ? ((n = i.precision), (e = i.rounding))
                  : (D(n, 1, c), void 0 === e ? (e = i.rounding) : D(e, 0, 8)),
                R(new i(this), n, e)
              );
            }),
          (A.toString = function () {
            var n = this,
              e = n.constructor,
              i = S(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
            return n.isNeg() && !n.isZero() ? "-" + i : i;
          }),
          (A.truncated = A.trunc =
            function () {
              return R(new this.constructor(this), this.e + 1, 1);
            }),
          (A.valueOf = A.toJSON =
            function () {
              var n = this,
                e = n.constructor,
                i = S(n, n.e <= e.toExpNeg || n.e >= e.toExpPos);
              return n.isNeg() ? "-" + i : i;
            });
        var P = (function () {
          function n(n, e, i) {
            var r,
              t = 0,
              s = n.length;
            for (n = n.slice(); s--; )
              (r = n[s] * e + t), (n[s] = r % i | 0), (t = (r / i) | 0);
            return t && n.unshift(t), n;
          }
          function e(n, e, i, r) {
            var t, s;
            if (i != r) s = i > r ? 1 : -1;
            else
              for (t = s = 0; t < i; t++)
                if (n[t] != e[t]) {
                  s = n[t] > e[t] ? 1 : -1;
                  break;
                }
            return s;
          }
          function i(n, e, i, r) {
            for (var t = 0; i--; )
              (n[i] -= t),
                (t = n[i] < e[i] ? 1 : 0),
                (n[i] = t * r + n[i] - e[i]);
            for (; !n[0] && n.length > 1; ) n.shift();
          }
          return function (r, t, o, u, c, f) {
            var a,
              h,
              l,
              d,
              p,
              g,
              w,
              m,
              v,
              b,
              E,
              x,
              y,
              M,
              O,
              F,
              A,
              Z,
              D,
              _,
              k = r.constructor,
              P = r.s == t.s ? 1 : -1,
              S = r.d,
              T = t.d;
            if (!(S && S[0] && T && T[0]))
              return new k(
                r.s && t.s && (S ? !T || S[0] != T[0] : T)
                  ? (S && 0 == S[0]) || !T
                    ? 0 * P
                    : P / 0
                  : NaN
              );
            for (
              f
                ? ((p = 1), (h = r.e - t.e))
                : ((f = q), (p = 7), (h = N(r.e / p) - N(t.e / p))),
                D = T.length,
                A = S.length,
                b = (v = new k(P)).d = [],
                l = 0;
              T[l] == (S[l] || 0);
              l++
            );
            if (
              (T[l] > (S[l] || 0) && h--,
              null == o
                ? ((M = o = k.precision), (u = k.rounding))
                : (M = c ? o + (r.e - t.e) + 1 : o),
              M < 0)
            )
              b.push(1), (g = !0);
            else {
              if (((M = (M / p + 2) | 0), (l = 0), 1 == D)) {
                for (d = 0, T = T[0], M++; (l < A || d) && M--; l++)
                  (O = d * f + (S[l] || 0)),
                    (b[l] = (O / T) | 0),
                    (d = O % T | 0);
                g = d || l < A;
              } else {
                for (
                  (d = (f / (T[0] + 1)) | 0) > 1 &&
                    ((T = n(T, d, f)),
                    (S = n(S, d, f)),
                    (D = T.length),
                    (A = S.length)),
                    F = D,
                    x = (E = S.slice(0, D)).length;
                  x < D;

                )
                  E[x++] = 0;
                (_ = T.slice()).unshift(0), (Z = T[0]), T[1] >= f / 2 && ++Z;
                do {
                  (d = 0),
                    (a = e(T, E, D, x)) < 0
                      ? ((y = E[0]),
                        D != x && (y = y * f + (E[1] || 0)),
                        (d = (y / Z) | 0) > 1
                          ? (d >= f && (d = f - 1),
                            1 ==
                              (a = e(
                                (w = n(T, d, f)),
                                E,
                                (m = w.length),
                                (x = E.length)
                              )) && (d--, i(w, D < m ? _ : T, m, f)))
                          : (0 == d && (a = d = 1), (w = T.slice())),
                        (m = w.length) < x && w.unshift(0),
                        i(E, w, x, f),
                        -1 == a &&
                          (a = e(T, E, D, (x = E.length))) < 1 &&
                          (d++, i(E, D < x ? _ : T, x, f)),
                        (x = E.length))
                      : 0 === a && (d++, (E = [0])),
                    (b[l++] = d),
                    a && E[0] ? (E[x++] = S[F] || 0) : ((E = [S[F]]), (x = 1));
                } while ((F++ < A || void 0 !== E[0]) && M--);
                g = void 0 !== E[0];
              }
              b[0] || b.shift();
            }
            if (1 == p) (v.e = h), (s = g);
            else {
              for (l = 1, d = b[0]; d >= 10; d /= 10) l++;
              (v.e = l + h * p - 1), R(v, c ? o + v.e + 1 : o, u, g);
            }
            return v;
          };
        })();
        function R(n, e, i, r) {
          var t,
            s,
            o,
            u,
            c,
            f,
            a,
            h,
            l,
            p = n.constructor;
          n: if (null != e) {
            if (!(h = n.d)) return n;
            for (t = 1, u = h[0]; u >= 10; u /= 10) t++;
            if ((s = e - t) < 0)
              (s += 7),
                (o = e),
                (c = ((a = h[(l = 0)]) / b(10, t - o - 1)) % 10 | 0);
            else if ((l = Math.ceil((s + 1) / 7)) >= (u = h.length)) {
              if (!r) break n;
              for (; u++ <= l; ) h.push(0);
              (a = c = 0), (t = 1), (o = (s %= 7) - 7 + 1);
            } else {
              for (a = u = h[l], t = 1; u >= 10; u /= 10) t++;
              c =
                (o = (s %= 7) - 7 + t) < 0
                  ? 0
                  : (a / b(10, t - o - 1)) % 10 | 0;
            }
            if (
              ((r =
                r ||
                e < 0 ||
                void 0 !== h[l + 1] ||
                (o < 0 ? a : a % b(10, t - o - 1))),
              (f =
                i < 4
                  ? (c || r) && (0 == i || i == (n.s < 0 ? 3 : 2))
                  : c > 5 ||
                    (5 == c &&
                      (4 == i ||
                        r ||
                        (6 == i &&
                          (s > 0 ? (o > 0 ? a / b(10, t - o) : 0) : h[l - 1]) %
                            10 &
                            1) ||
                        i == (n.s < 0 ? 8 : 7)))),
              e < 1 || !h[0])
            )
              return (
                (h.length = 0),
                f
                  ? ((e -= n.e + 1),
                    (h[0] = b(10, (7 - (e % 7)) % 7)),
                    (n.e = -e || 0))
                  : (h[0] = n.e = 0),
                n
              );
            if (
              (0 == s
                ? ((h.length = l), (u = 1), l--)
                : ((h.length = l + 1),
                  (u = b(10, 7 - s)),
                  (h[l] = o > 0 ? ((a / b(10, t - o)) % b(10, o) | 0) * u : 0)),
              f)
            )
              for (;;) {
                if (0 == l) {
                  for (s = 1, o = h[0]; o >= 10; o /= 10) s++;
                  for (o = h[0] += u, u = 1; o >= 10; o /= 10) u++;
                  s != u && (n.e++, h[0] == q && (h[0] = 1));
                  break;
                }
                if (((h[l] += u), h[l] != q)) break;
                (h[l--] = 0), (u = 1);
              }
            for (s = h.length; 0 === h[--s]; ) h.pop();
          }
          return (
            d &&
              (n.e > p.maxE
                ? ((n.d = null), (n.e = NaN))
                : n.e < p.minE && ((n.e = 0), (n.d = [0]))),
            n
          );
        }
        function S(n, e, i) {
          if (!n.isFinite()) return W(n);
          var r,
            t = n.e,
            s = Z(n.d),
            o = s.length;
          return (
            e
              ? (i && (r = i - o) > 0
                  ? (s = s.charAt(0) + "." + s.slice(1) + I(r))
                  : o > 1 && (s = s.charAt(0) + "." + s.slice(1)),
                (s = s + (n.e < 0 ? "e" : "e+") + n.e))
              : t < 0
              ? ((s = "0." + I(-t - 1) + s),
                i && (r = i - o) > 0 && (s += I(r)))
              : t >= o
              ? ((s += I(t + 1 - o)),
                i && (r = i - t - 1) > 0 && (s = s + "." + I(r)))
              : ((r = t + 1) < o && (s = s.slice(0, r) + "." + s.slice(r)),
                i &&
                  (r = i - o) > 0 &&
                  (t + 1 === o && (s += "."), (s += I(r)))),
            s
          );
        }
        function T(n, e) {
          var i = n[0];
          for (e *= 7; i >= 10; i /= 10) e++;
          return e;
        }
        function L(n, e, i) {
          if (e > O) throw ((d = !0), i && (n.precision = i), Error(w));
          return R(new n(a), e, 1, !0);
        }
        function U(n, e, i) {
          if (e > F) throw Error(w);
          return R(new n(h), e, i, !0);
        }
        function C(n) {
          var e = n.length - 1,
            i = 7 * e + 1;
          if ((e = n[e])) {
            for (; e % 10 == 0; e /= 10) i--;
            for (e = n[0]; e >= 10; e /= 10) i++;
          }
          return i;
        }
        function I(n) {
          for (var e = ""; n--; ) e += "0";
          return e;
        }
        function H(n, e, i, r) {
          var t,
            s = new n(1),
            o = Math.ceil(r / 7 + 4);
          for (d = !1; ; ) {
            if (
              (i % 2 && Y((s = s.times(e)).d, o) && (t = !0),
              0 === (i = N(i / 2)))
            ) {
              (i = s.d.length - 1), t && 0 === s.d[i] && ++s.d[i];
              break;
            }
            Y((e = e.times(e)).d, o);
          }
          return (d = !0), s;
        }
        function B(n) {
          return 1 & n.d[n.d.length - 1];
        }
        function V(n, e, i) {
          for (var r, t, s = new n(e[0]), o = 0; ++o < e.length; ) {
            if (!(t = new n(e[o])).s) {
              s = t;
              break;
            }
            ((r = s.cmp(t)) === i || (0 === r && s.s === i)) && (s = t);
          }
          return s;
        }
        function $(n, e) {
          var i,
            r,
            t,
            s,
            o,
            u,
            c,
            f = 0,
            a = 0,
            h = 0,
            l = n.constructor,
            p = l.rounding,
            g = l.precision;
          if (!n.d || !n.d[0] || n.e > 17)
            return new l(
              n.d
                ? n.d[0]
                  ? n.s < 0
                    ? 0
                    : 1 / 0
                  : 1
                : n.s
                ? n.s < 0
                  ? 0
                  : n
                : NaN
            );
          for (
            null == e ? ((d = !1), (c = g)) : (c = e), u = new l(0.03125);
            n.e > -2;

          )
            (n = n.times(u)), (h += 5);
          for (
            c += r = ((Math.log(b(2, h)) / Math.LN10) * 2 + 5) | 0,
              i = s = o = new l(1),
              l.precision = c;
            ;

          ) {
            if (
              ((s = R(s.times(n), c, 1)),
              (i = i.times(++a)),
              Z((u = o.plus(P(s, i, c, 1))).d).slice(0, c) ===
                Z(o.d).slice(0, c))
            ) {
              for (t = h; t--; ) o = R(o.times(o), c, 1);
              if (null != e) return (l.precision = g), o;
              if (!(f < 3 && _(o.d, c - r, p, f)))
                return R(o, (l.precision = g), p, (d = !0));
              (l.precision = c += 10), (i = s = u = new l(1)), (a = 0), f++;
            }
            o = u;
          }
        }
        function j(n, e) {
          var i,
            r,
            t,
            s,
            o,
            u,
            c,
            f,
            a,
            h,
            l,
            p = 1,
            g = n,
            w = g.d,
            m = g.constructor,
            v = m.rounding,
            N = m.precision;
          if (g.s < 0 || !w || !w[0] || (!g.e && 1 == w[0] && 1 == w.length))
            return new m(w && !w[0] ? -1 / 0 : 1 != g.s ? NaN : w ? 0 : g);
          if (
            (null == e ? ((d = !1), (a = N)) : (a = e),
            (m.precision = a += 10),
            (r = (i = Z(w)).charAt(0)),
            !(Math.abs((s = g.e)) < 15e14))
          )
            return (
              (f = L(m, a + 2, N).times(s + "")),
              (g = j(new m(r + "." + i.slice(1)), a - 10).plus(f)),
              (m.precision = N),
              null == e ? R(g, N, v, (d = !0)) : g
            );
          for (; (r < 7 && 1 != r) || (1 == r && i.charAt(1) > 3); )
            (r = (i = Z((g = g.times(n)).d)).charAt(0)), p++;
          for (
            s = g.e,
              r > 1
                ? ((g = new m("0." + i)), s++)
                : (g = new m(r + "." + i.slice(1))),
              h = g,
              c = o = g = P(g.minus(1), g.plus(1), a, 1),
              l = R(g.times(g), a, 1),
              t = 3;
            ;

          ) {
            if (
              ((o = R(o.times(l), a, 1)),
              Z((f = c.plus(P(o, new m(t), a, 1))).d).slice(0, a) ===
                Z(c.d).slice(0, a))
            ) {
              if (
                ((c = c.times(2)),
                0 !== s && (c = c.plus(L(m, a + 2, N).times(s + ""))),
                (c = P(c, new m(p), a, 1)),
                null != e)
              )
                return (m.precision = N), c;
              if (!_(c.d, a - 10, v, u))
                return R(c, (m.precision = N), v, (d = !0));
              (m.precision = a += 10),
                (f = o = g = P(h.minus(1), h.plus(1), a, 1)),
                (l = R(g.times(g), a, 1)),
                (t = u = 1);
            }
            (c = f), (t += 2);
          }
        }
        function W(n) {
          return String((n.s * n.s) / 0);
        }
        function J(n, e) {
          var i, r, t;
          for (
            (i = e.indexOf(".")) > -1 && (e = e.replace(".", "")),
              (r = e.search(/e/i)) > 0
                ? (i < 0 && (i = r),
                  (i += +e.slice(r + 1)),
                  (e = e.substring(0, r)))
                : i < 0 && (i = e.length),
              r = 0;
            48 === e.charCodeAt(r);
            r++
          );
          for (t = e.length; 48 === e.charCodeAt(t - 1); --t);
          if ((e = e.slice(r, t))) {
            if (
              ((t -= r),
              (n.e = i = i - r - 1),
              (n.d = []),
              (r = (i + 1) % 7),
              i < 0 && (r += 7),
              r < t)
            ) {
              for (r && n.d.push(+e.slice(0, r)), t -= 7; r < t; )
                n.d.push(+e.slice(r, (r += 7)));
              r = 7 - (e = e.slice(r)).length;
            } else r -= t;
            for (; r--; ) e += "0";
            n.d.push(+e),
              d &&
                (n.e > n.constructor.maxE
                  ? ((n.d = null), (n.e = NaN))
                  : n.e < n.constructor.minE && ((n.e = 0), (n.d = [0])));
          } else (n.e = 0), (n.d = [0]);
          return n;
        }
        function z(n, e) {
          var i, r, s, o, u, c, f, a, h;
          if (e.indexOf("_") > -1) {
            if (((e = e.replace(/(\d)_(?=\d)/g, "$1")), M.test(e)))
              return J(n, e);
          } else if ("Infinity" === e || "NaN" === e)
            return +e || (n.s = NaN), (n.e = NaN), (n.d = null), n;
          if (x.test(e)) (i = 16), (e = e.toLowerCase());
          else if (E.test(e)) i = 2;
          else {
            if (!y.test(e)) throw Error(g + e);
            i = 8;
          }
          for (
            (o = e.search(/p/i)) > 0
              ? ((f = +e.slice(o + 1)), (e = e.substring(2, o)))
              : (e = e.slice(2)),
              u = (o = e.indexOf(".")) >= 0,
              r = n.constructor,
              u &&
                ((o = (c = (e = e.replace(".", "")).length) - o),
                (s = H(r, new r(i), o, 2 * o))),
              o = h = (a = k(e, i, q)).length - 1;
            0 === a[o];
            --o
          )
            a.pop();
          return o < 0
            ? new r(0 * n.s)
            : ((n.e = T(a, h)),
              (n.d = a),
              (d = !1),
              u && (n = P(n, s, 4 * c)),
              f && (n = n.times(Math.abs(f) < 54 ? b(2, f) : t.pow(2, f))),
              (d = !0),
              n);
        }
        function G(n, e, i, r, t) {
          var s,
            o,
            u,
            c,
            f = n.precision,
            a = Math.ceil(f / 7);
          for (d = !1, c = i.times(i), u = new n(r); ; ) {
            if (
              ((o = P(u.times(c), new n(e++ * e++), f, 1)),
              (u = t ? r.plus(o) : r.minus(o)),
              (r = P(o.times(c), new n(e++ * e++), f, 1)),
              void 0 !== (o = u.plus(r)).d[a])
            ) {
              for (s = a; o.d[s] === u.d[s] && s--; );
              if (-1 == s) break;
            }
            (s = u), (u = r), (r = o), (o = s);
          }
          return (d = !0), (o.d.length = a + 1), o;
        }
        function K(n, e) {
          for (var i = n; --e; ) i *= n;
          return i;
        }
        function Q(n, e) {
          var i,
            r = e.s < 0,
            t = U(n, n.precision, 1),
            s = t.times(0.5);
          if ((e = e.abs()).lte(s)) return (o = r ? 4 : 1), e;
          if ((i = e.divToInt(t)).isZero()) o = r ? 3 : 2;
          else {
            if ((e = e.minus(i.times(t))).lte(s))
              return (o = B(i) ? (r ? 2 : 3) : r ? 4 : 1), e;
            o = B(i) ? (r ? 1 : 4) : r ? 3 : 2;
          }
          return e.minus(t).abs();
        }
        function X(n, e, i, r) {
          var t,
            o,
            u,
            a,
            h,
            l,
            d,
            p,
            g,
            w = n.constructor,
            m = void 0 !== i;
          if (
            (m
              ? (D(i, 1, c), void 0 === r ? (r = w.rounding) : D(r, 0, 8))
              : ((i = w.precision), (r = w.rounding)),
            n.isFinite())
          ) {
            for (
              m
                ? ((t = 2),
                  16 == e ? (i = 4 * i - 3) : 8 == e && (i = 3 * i - 2))
                : (t = e),
                (u = (d = S(n)).indexOf(".")) >= 0 &&
                  ((d = d.replace(".", "")),
                  ((g = new w(1)).e = d.length - u),
                  (g.d = k(S(g), 10, t)),
                  (g.e = g.d.length)),
                o = h = (p = k(d, 10, t)).length;
              0 == p[--h];

            )
              p.pop();
            if (p[0]) {
              if (
                (u < 0
                  ? o--
                  : (((n = new w(n)).d = p),
                    (n.e = o),
                    (p = (n = P(n, g, i, r, 0, t)).d),
                    (o = n.e),
                    (l = s)),
                (u = p[i]),
                (a = t / 2),
                (l = l || void 0 !== p[i + 1]),
                (l =
                  r < 4
                    ? (void 0 !== u || l) &&
                      (0 === r || r === (n.s < 0 ? 3 : 2))
                    : u > a ||
                      (u === a &&
                        (4 === r ||
                          l ||
                          (6 === r && 1 & p[i - 1]) ||
                          r === (n.s < 0 ? 8 : 7)))),
                (p.length = i),
                l)
              )
                for (; ++p[--i] > t - 1; ) (p[i] = 0), i || (++o, p.unshift(1));
              for (h = p.length; !p[h - 1]; --h);
              for (u = 0, d = ""; u < h; u++) d += f.charAt(p[u]);
              if (m) {
                if (h > 1)
                  if (16 == e || 8 == e) {
                    for (u = 16 == e ? 4 : 3, --h; h % u; h++) d += "0";
                    for (h = (p = k(d, t, e)).length; !p[h - 1]; --h);
                    for (u = 1, d = "1."; u < h; u++) d += f.charAt(p[u]);
                  } else d = d.charAt(0) + "." + d.slice(1);
                d = d + (o < 0 ? "p" : "p+") + o;
              } else if (o < 0) {
                for (; ++o; ) d = "0" + d;
                d = "0." + d;
              } else if (++o > h) for (o -= h; o--; ) d += "0";
              else o < h && (d = d.slice(0, o) + "." + d.slice(o));
            } else d = m ? "0p+0" : "0";
            d = (16 == e ? "0x" : 2 == e ? "0b" : 8 == e ? "0o" : "") + d;
          } else d = W(n);
          return n.s < 0 ? "-" + d : d;
        }
        function Y(n, e) {
          if (n.length > e) return (n.length = e), !0;
        }
        function nn(n) {
          return new this(n).abs();
        }
        function en(n) {
          return new this(n).acos();
        }
        function rn(n) {
          return new this(n).acosh();
        }
        function tn(n, e) {
          return new this(n).plus(e);
        }
        function sn(n) {
          return new this(n).asin();
        }
        function on(n) {
          return new this(n).asinh();
        }
        function un(n) {
          return new this(n).atan();
        }
        function cn(n) {
          return new this(n).atanh();
        }
        function fn(n, e) {
          (n = new this(n)), (e = new this(e));
          var i,
            r = this.precision,
            t = this.rounding,
            s = r + 4;
          return (
            n.s && e.s
              ? n.d || e.d
                ? !e.d || n.isZero()
                  ? ((i = e.s < 0 ? U(this, r, t) : new this(0)).s = n.s)
                  : !n.d || e.isZero()
                  ? ((i = U(this, s, 1).times(0.5)).s = n.s)
                  : e.s < 0
                  ? ((this.precision = s),
                    (this.rounding = 1),
                    (i = this.atan(P(n, e, s, 1))),
                    (e = U(this, s, 1)),
                    (this.precision = r),
                    (this.rounding = t),
                    (i = n.s < 0 ? i.minus(e) : i.plus(e)))
                  : (i = this.atan(P(n, e, s, 1)))
                : ((i = U(this, s, 1).times(e.s > 0 ? 0.25 : 0.75)).s = n.s)
              : (i = new this(NaN)),
            i
          );
        }
        function an(n) {
          return new this(n).cbrt();
        }
        function hn(n) {
          return R((n = new this(n)), n.e + 1, 2);
        }
        function ln(n, e, i) {
          return new this(n).clamp(e, i);
        }
        function dn(n) {
          if (!n || "object" != typeof n) throw Error(p + "Object expected");
          var e,
            i,
            r,
            t = !0 === n.defaults,
            s = [
              "precision",
              1,
              c,
              "rounding",
              0,
              8,
              "toExpNeg",
              -u,
              0,
              "toExpPos",
              0,
              u,
              "maxE",
              0,
              u,
              "minE",
              -u,
              0,
              "modulo",
              0,
              9,
            ];
          for (e = 0; e < s.length; e += 3)
            if (((i = s[e]), t && (this[i] = l[i]), void 0 !== (r = n[i]))) {
              if (!(N(r) === r && r >= s[e + 1] && r <= s[e + 2]))
                throw Error(g + i + ": " + r);
              this[i] = r;
            }
          if (((i = "crypto"), t && (this[i] = l[i]), void 0 !== (r = n[i]))) {
            if (!0 !== r && !1 !== r && 0 !== r && 1 !== r)
              throw Error(g + i + ": " + r);
            if (r) {
              if (
                "undefined" == typeof crypto ||
                !crypto ||
                (!crypto.getRandomValues && !crypto.randomBytes)
              )
                throw Error(m);
              this[i] = !0;
            } else this[i] = !1;
          }
          return this;
        }
        function pn(n) {
          return new this(n).cos();
        }
        function gn(n) {
          return new this(n).cosh();
        }
        function wn(n, e) {
          return new this(n).div(e);
        }
        function mn(n) {
          return new this(n).exp();
        }
        function vn(n) {
          return R((n = new this(n)), n.e + 1, 3);
        }
        function Nn() {
          var n,
            e,
            i = new this(0);
          for (d = !1, n = 0; n < arguments.length; )
            if ((e = new this(arguments[n++])).d)
              i.d && (i = i.plus(e.times(e)));
            else {
              if (e.s) return (d = !0), new this(1 / 0);
              i = e;
            }
          return (d = !0), i.sqrt();
        }
        function bn(n) {
          return n instanceof t || (n && n.toStringTag === v) || !1;
        }
        function En(n) {
          return new this(n).ln();
        }
        function xn(n, e) {
          return new this(n).log(e);
        }
        function yn(n) {
          return new this(n).log(2);
        }
        function Mn(n) {
          return new this(n).log(10);
        }
        function qn() {
          return V(this, arguments, -1);
        }
        function On() {
          return V(this, arguments, 1);
        }
        function Fn(n, e) {
          return new this(n).mod(e);
        }
        function An(n, e) {
          return new this(n).mul(e);
        }
        function Zn(n, e) {
          return new this(n).pow(e);
        }
        function Dn(n) {
          var e,
            i,
            r,
            t,
            s = 0,
            o = new this(1),
            u = [];
          if (
            (void 0 === n ? (n = this.precision) : D(n, 1, c),
            (r = Math.ceil(n / 7)),
            this.crypto)
          )
            if (crypto.getRandomValues)
              for (e = crypto.getRandomValues(new Uint32Array(r)); s < r; )
                (t = e[s]) >= 429e7
                  ? (e[s] = crypto.getRandomValues(new Uint32Array(1))[0])
                  : (u[s++] = t % 1e7);
            else {
              if (!crypto.randomBytes) throw Error(m);
              for (e = crypto.randomBytes((r *= 4)); s < r; )
                (t =
                  e[s] +
                  (e[s + 1] << 8) +
                  (e[s + 2] << 16) +
                  ((127 & e[s + 3]) << 24)) >= 214e7
                  ? crypto.randomBytes(4).copy(e, s)
                  : (u.push(t % 1e7), (s += 4));
              s = r / 4;
            }
          else for (; s < r; ) u[s++] = (1e7 * Math.random()) | 0;
          for (
            n %= 7,
              (r = u[--s]) &&
                n &&
                ((t = b(10, 7 - n)), (u[s] = ((r / t) | 0) * t));
            0 === u[s];
            s--
          )
            u.pop();
          if (s < 0) (i = 0), (u = [0]);
          else {
            for (i = -1; 0 === u[0]; i -= 7) u.shift();
            for (r = 1, t = u[0]; t >= 10; t /= 10) r++;
            r < 7 && (i -= 7 - r);
          }
          return (o.e = i), (o.d = u), o;
        }
        function _n(n) {
          return R((n = new this(n)), n.e + 1, this.rounding);
        }
        function kn(n) {
          return (n = new this(n)).d ? (n.d[0] ? n.s : 0 * n.s) : n.s || NaN;
        }
        function Pn(n) {
          return new this(n).sin();
        }
        function Rn(n) {
          return new this(n).sinh();
        }
        function Sn(n) {
          return new this(n).sqrt();
        }
        function Tn(n, e) {
          return new this(n).sub(e);
        }
        function Ln() {
          var n = 0,
            e = arguments,
            i = new this(e[n]);
          for (d = !1; i.s && ++n < e.length; ) i = i.plus(e[n]);
          return (d = !0), R(i, this.precision, this.rounding);
        }
        function Un(n) {
          return new this(n).tan();
        }
        function Cn(n) {
          return new this(n).tanh();
        }
        function In(n) {
          return R((n = new this(n)), n.e + 1, 1);
        }
        ((t = (function n(e) {
          var i, r, t;
          function s(n) {
            var e,
              i,
              r,
              t = this;
            if (!(t instanceof s)) return new s(n);
            if (((t.constructor = s), bn(n)))
              return (
                (t.s = n.s),
                void (d
                  ? !n.d || n.e > s.maxE
                    ? ((t.e = NaN), (t.d = null))
                    : n.e < s.minE
                    ? ((t.e = 0), (t.d = [0]))
                    : ((t.e = n.e), (t.d = n.d.slice()))
                  : ((t.e = n.e), (t.d = n.d ? n.d.slice() : n.d)))
              );
            if ("number" == (r = typeof n)) {
              if (0 === n)
                return (t.s = 1 / n < 0 ? -1 : 1), (t.e = 0), void (t.d = [0]);
              if (
                (n < 0 ? ((n = -n), (t.s = -1)) : (t.s = 1),
                n === ~~n && n < 1e7)
              ) {
                for (e = 0, i = n; i >= 10; i /= 10) e++;
                return void (d
                  ? e > s.maxE
                    ? ((t.e = NaN), (t.d = null))
                    : e < s.minE
                    ? ((t.e = 0), (t.d = [0]))
                    : ((t.e = e), (t.d = [n]))
                  : ((t.e = e), (t.d = [n])));
              }
              return 0 * n != 0
                ? (n || (t.s = NaN), (t.e = NaN), void (t.d = null))
                : J(t, n.toString());
            }
            if ("string" === r)
              return (
                45 === (i = n.charCodeAt(0))
                  ? ((n = n.slice(1)), (t.s = -1))
                  : (43 === i && (n = n.slice(1)), (t.s = 1)),
                M.test(n) ? J(t, n) : z(t, n)
              );
            if ("bigint" === r)
              return (
                n < 0 ? ((n = -n), (t.s = -1)) : (t.s = 1), J(t, n.toString())
              );
            throw Error(g + n);
          }
          if (
            ((s.prototype = A),
            (s.ROUND_UP = 0),
            (s.ROUND_DOWN = 1),
            (s.ROUND_CEIL = 2),
            (s.ROUND_FLOOR = 3),
            (s.ROUND_HALF_UP = 4),
            (s.ROUND_HALF_DOWN = 5),
            (s.ROUND_HALF_EVEN = 6),
            (s.ROUND_HALF_CEIL = 7),
            (s.ROUND_HALF_FLOOR = 8),
            (s.EUCLID = 9),
            (s.config = s.set = dn),
            (s.clone = n),
            (s.isDecimal = bn),
            (s.abs = nn),
            (s.acos = en),
            (s.acosh = rn),
            (s.add = tn),
            (s.asin = sn),
            (s.asinh = on),
            (s.atan = un),
            (s.atanh = cn),
            (s.atan2 = fn),
            (s.cbrt = an),
            (s.ceil = hn),
            (s.clamp = ln),
            (s.cos = pn),
            (s.cosh = gn),
            (s.div = wn),
            (s.exp = mn),
            (s.floor = vn),
            (s.hypot = Nn),
            (s.ln = En),
            (s.log = xn),
            (s.log10 = Mn),
            (s.log2 = yn),
            (s.max = qn),
            (s.min = On),
            (s.mod = Fn),
            (s.mul = An),
            (s.pow = Zn),
            (s.random = Dn),
            (s.round = _n),
            (s.sign = kn),
            (s.sin = Pn),
            (s.sinh = Rn),
            (s.sqrt = Sn),
            (s.sub = Tn),
            (s.sum = Ln),
            (s.tan = Un),
            (s.tanh = Cn),
            (s.trunc = In),
            void 0 === e && (e = {}),
            e && !0 !== e.defaults)
          )
            for (
              t = [
                "precision",
                "rounding",
                "toExpNeg",
                "toExpPos",
                "maxE",
                "minE",
                "modulo",
                "crypto",
              ],
                i = 0;
              i < t.length;

            )
              e.hasOwnProperty((r = t[i++])) || (e[r] = this[r]);
          return s.config(e), s;
        })(l)).prototype.constructor = t),
          (t.default = t.Decimal = t),
          (a = new t(a)),
          (h = new t(h)),
          void 0 ===
            (r = function () {
              return t;
            }.call(e, i, e, n)) || (n.exports = r);
      })();
    },
  },
]);
