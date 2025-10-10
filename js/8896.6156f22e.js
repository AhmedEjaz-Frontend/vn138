(self.webpackChunknogle_react_boilerplate =
  self.webpackChunknogle_react_boilerplate || []).push([
  [8896],
  {
    18896: (t) => {
      t.exports = (function t(e, n, i) {
        function o(s, a) {
          if (!n[s]) {
            if (!e[s]) {
              if (r) return r(s, !0);
              var u = new Error("Cannot find module '" + s + "'");
              throw ((u.code = "MODULE_NOT_FOUND"), u);
            }
            var c = (n[s] = {
              exports: {},
            });
            e[s][0].call(
              c.exports,
              function (t) {
                return o(e[s][1][t] || t);
              },
              c,
              c.exports,
              t,
              e,
              n,
              i
            );
          }
          return n[s].exports;
        }
        for (var r = void 0, s = 0; s < i.length; s++) o(i[s]);
        return o;
      })(
        {
          1: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              }),
                (n.default = {
                  errors: {
                    incompatible:
                      "PushError: Push.js is incompatible with browser.",
                    invalid_plugin:
                      "PushError: plugin class missing from plugin manifest (invalid plugin). Please check the documentation.",
                    invalid_title:
                      "PushError: title of notification must be a string",
                    permission_denied: "PushError: permission request declined",
                    sw_notification_error:
                      "PushError: could not show a ServiceWorker notification due to the following reason: ",
                    sw_registration_error:
                      "PushError: could not register the ServiceWorker due to the following reason: ",
                    unknown_interface:
                      "PushError: unable to create notification: unknown interface",
                  },
                });
            },
            {},
          ],
          2: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = (function () {
                  function t(e) {
                    (function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this._win = e),
                      (this.GRANTED = "granted"),
                      (this.DEFAULT = "default"),
                      (this.DENIED = "denied"),
                      (this._permissions = [
                        this.GRANTED,
                        this.DEFAULT,
                        this.DENIED,
                      ]);
                  }
                  return (
                    i(t, [
                      {
                        key: "request",
                        value: function (t, e) {
                          return arguments.length > 0
                            ? this._requestWithCallback.apply(this, arguments)
                            : this._requestAsPromise();
                        },
                      },
                      {
                        key: "_requestWithCallback",
                        value: function (t, e) {
                          var n = this,
                            i = this.get(),
                            o = function () {
                              var i =
                                arguments.length > 0 && void 0 !== arguments[0]
                                  ? arguments[0]
                                  : n._win.Notification.permission;
                              void 0 === i &&
                                n._win.webkitNotifications &&
                                (i =
                                  n._win.webkitNotifications.checkPermission()),
                                i === n.GRANTED || 0 === i
                                  ? t && t()
                                  : e && e();
                            };
                          i !== this.DEFAULT
                            ? o(i)
                            : this._win.webkitNotifications &&
                              this._win.webkitNotifications.checkPermission
                            ? this._win.webkitNotifications.requestPermission(o)
                            : this._win.Notification &&
                              this._win.Notification.requestPermission
                            ? this._win.Notification.requestPermission()
                                .then(o)
                                .catch(function () {
                                  e && e();
                                })
                            : t && t();
                        },
                      },
                      {
                        key: "_requestAsPromise",
                        value: function () {
                          var t = this,
                            e = this.get(),
                            n = function (e) {
                              return e === t.GRANTED || 0 === e;
                            },
                            i = e !== this.DEFAULT,
                            o =
                              this._win.Notification &&
                              this._win.Notification.requestPermission,
                            r =
                              this._win.webkitNotifications &&
                              this._win.webkitNotifications.checkPermission;
                          return new Promise(function (s, a) {
                            var u = function (t) {
                              return n(t) ? s() : a();
                            };
                            i
                              ? u(e)
                              : r
                              ? t._win.webkitNotifications.requestPermission(
                                  function (t) {
                                    u(t);
                                  }
                                )
                              : o
                              ? t._win.Notification.requestPermission()
                                  .then(function (t) {
                                    u(t);
                                  })
                                  .catch(a)
                              : s();
                          });
                        },
                      },
                      {
                        key: "has",
                        value: function () {
                          return this.get() === this.GRANTED;
                        },
                      },
                      {
                        key: "get",
                        value: function () {
                          return this._win.Notification &&
                            this._win.Notification.permission
                            ? this._win.Notification.permission
                            : this._win.webkitNotifications &&
                              this._win.webkitNotifications.checkPermission
                            ? this._permissions[
                                this._win.webkitNotifications.checkPermission()
                              ]
                            : navigator.mozNotification
                            ? this.GRANTED
                            : this._win.external &&
                              this._win.external.msIsSiteMode
                            ? this._win.external.msIsSiteMode()
                              ? this.GRANTED
                              : this.DEFAULT
                            : this.GRANTED;
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = o;
            },
            {},
          ],
          3: [
            function (t, e, n) {
              "use strict";
              function i(t) {
                return t && t.__esModule
                  ? t
                  : {
                      default: t,
                    };
              }
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = i(t("./Messages")),
                s = i(t("./Permission")),
                a = i(t("./Util")),
                u = i(t("./agents/DesktopAgent")),
                c = i(t("./agents/MobileChromeAgent")),
                f = i(t("./agents/MobileFirefoxAgent")),
                l = i(t("./agents/MSAgent")),
                h = i(t("./agents/WebKitAgent")),
                p = (function () {
                  function t(e) {
                    (function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t),
                      (this._currentId = 0),
                      (this._notifications = {}),
                      (this._win = e),
                      (this.Permission = new s.default(e)),
                      (this._agents = {
                        desktop: new u.default(e),
                        chrome: new c.default(e),
                        firefox: new f.default(e),
                        ms: new l.default(e),
                        webkit: new h.default(e),
                      }),
                      (this._configuration = {
                        serviceWorker: "/serviceWorker.min.js",
                        fallback: function (t) {},
                      });
                  }
                  return (
                    o(t, [
                      {
                        key: "_closeNotification",
                        value: function (t) {
                          var e = !0,
                            n = this._notifications[t];
                          if (void 0 !== n) {
                            if (
                              ((e = this._removeNotification(t)),
                              this._agents.desktop.isSupported())
                            )
                              this._agents.desktop.close(n);
                            else if (this._agents.webkit.isSupported())
                              this._agents.webkit.close(n);
                            else {
                              if (!this._agents.ms.isSupported())
                                throw (
                                  ((e = !1),
                                  new Error(r.default.errors.unknown_interface))
                                );
                              this._agents.ms.close();
                            }
                            return e;
                          }
                          return !1;
                        },
                      },
                      {
                        key: "_addNotification",
                        value: function (t) {
                          var e = this._currentId;
                          return (
                            (this._notifications[e] = t), this._currentId++, e
                          );
                        },
                      },
                      {
                        key: "_removeNotification",
                        value: function (t) {
                          var e = !1;
                          return (
                            this._notifications.hasOwnProperty(t) &&
                              (delete this._notifications[t], (e = !0)),
                            e
                          );
                        },
                      },
                      {
                        key: "_prepareNotification",
                        value: function (t, e) {
                          var n,
                            i = this;
                          return (
                            (n = {
                              get: function () {
                                return i._notifications[t];
                              },
                              close: function () {
                                i._closeNotification(t);
                              },
                            }),
                            e.timeout &&
                              setTimeout(function () {
                                n.close();
                              }, e.timeout),
                            n
                          );
                        },
                      },
                      {
                        key: "_serviceWorkerCallback",
                        value: function (t, e, n) {
                          var i = this,
                            o = this._addNotification(t[t.length - 1]);
                          navigator.serviceWorker.addEventListener(
                            "message",
                            function (t) {
                              var e = JSON.parse(t.data);
                              "close" === e.action &&
                                Number.isInteger(e.id) &&
                                i._removeNotification(e.id);
                            }
                          ),
                            n(this._prepareNotification(o, e));
                        },
                      },
                      {
                        key: "_createCallback",
                        value: function (t, e, n) {
                          var i,
                            o = this,
                            r = null;
                          if (
                            ((e = e || {}),
                            (i = function (t) {
                              o._removeNotification(t),
                                a.default.isFunction(e.onClose) &&
                                  e.onClose.call(o, r);
                            }),
                            this._agents.desktop.isSupported())
                          )
                            try {
                              r = this._agents.desktop.create(t, e);
                            } catch (i) {
                              var s = this._currentId,
                                u = this.config().serviceWorker;
                              this._agents.chrome.isSupported() &&
                                this._agents.chrome.create(
                                  s,
                                  t,
                                  e,
                                  u,
                                  function (t) {
                                    return o._serviceWorkerCallback(t, e, n);
                                  }
                                );
                            }
                          else
                            this._agents.webkit.isSupported()
                              ? (r = this._agents.webkit.create(t, e))
                              : this._agents.firefox.isSupported()
                              ? this._agents.firefox.create(t, e)
                              : this._agents.ms.isSupported()
                              ? (r = this._agents.ms.create(t, e))
                              : ((e.title = t), this.config().fallback(e));
                          if (null !== r) {
                            var c = this._addNotification(r),
                              f = this._prepareNotification(c, e);
                            a.default.isFunction(e.onShow) &&
                              r.addEventListener("show", e.onShow),
                              a.default.isFunction(e.onError) &&
                                r.addEventListener("error", e.onError),
                              a.default.isFunction(e.onClick) &&
                                r.addEventListener("click", e.onClick),
                              r.addEventListener("close", function () {
                                i(c);
                              }),
                              r.addEventListener("cancel", function () {
                                i(c);
                              }),
                              n(f);
                          }
                          n(null);
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e) {
                          var n,
                            i = this;
                          if (!a.default.isString(t))
                            throw new Error(r.default.errors.invalid_title);
                          return (
                            (n = this.Permission.has()
                              ? function (n, o) {
                                  try {
                                    i._createCallback(t, e, n);
                                  } catch (t) {
                                    o(t);
                                  }
                                }
                              : function (n, o) {
                                  i.Permission.request()
                                    .then(function () {
                                      i._createCallback(t, e, n);
                                    })
                                    .catch(function () {
                                      o(r.default.errors.permission_denied);
                                    });
                                }),
                            new Promise(n)
                          );
                        },
                      },
                      {
                        key: "count",
                        value: function () {
                          var t = void 0,
                            e = 0;
                          for (t in this._notifications)
                            this._notifications.hasOwnProperty(t) && e++;
                          return e;
                        },
                      },
                      {
                        key: "close",
                        value: function (t) {
                          var e = void 0;
                          for (e in this._notifications)
                            if (
                              this._notifications.hasOwnProperty(e) &&
                              this._notifications[e].tag === t
                            )
                              return this._closeNotification(e);
                        },
                      },
                      {
                        key: "clear",
                        value: function () {
                          var t = void 0,
                            e = !0;
                          for (t in this._notifications)
                            this._notifications.hasOwnProperty(t) &&
                              (e = e && this._closeNotification(t));
                          return e;
                        },
                      },
                      {
                        key: "supported",
                        value: function () {
                          var t = !1;
                          for (var e in this._agents)
                            this._agents.hasOwnProperty(e) &&
                              (t = t || this._agents[e].isSupported());
                          return t;
                        },
                      },
                      {
                        key: "config",
                        value: function (t) {
                          return (
                            (void 0 !== t ||
                              (null !== t && a.default.isObject(t))) &&
                              a.default.objectMerge(this._configuration, t),
                            this._configuration
                          );
                        },
                      },
                      {
                        key: "extend",
                        value: function (t) {
                          var e,
                            n = {}.hasOwnProperty;
                          if (!n.call(t, "plugin"))
                            throw new Error(r.default.errors.invalid_plugin);
                          for (var i in (n.call(t, "config") &&
                            a.default.isObject(t.config) &&
                            null !== t.config &&
                            this.config(t.config),
                          (e = new (0, t.plugin)(this.config()))))
                            n.call(e, i) &&
                              a.default.isFunction(e[i]) &&
                              (this[i] = e[i]);
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = p;
            },
            {
              "./Messages": 1,
              "./Permission": 2,
              "./Util": 4,
              "./agents/DesktopAgent": 6,
              "./agents/MSAgent": 7,
              "./agents/MobileChromeAgent": 8,
              "./agents/MobileFirefoxAgent": 9,
              "./agents/WebKitAgent": 10,
            },
          ],
          4: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var i =
                  "function" == typeof Symbol &&
                  "symbol" == typeof Symbol.iterator
                    ? function (t) {
                        return typeof t;
                      }
                    : function (t) {
                        return t &&
                          "function" == typeof Symbol &&
                          t.constructor === Symbol &&
                          t !== Symbol.prototype
                          ? "symbol"
                          : typeof t;
                      },
                o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = (function () {
                  function t() {
                    !(function (t, e) {
                      if (!(t instanceof e))
                        throw new TypeError(
                          "Cannot call a class as a function"
                        );
                    })(this, t);
                  }
                  return (
                    o(t, null, [
                      {
                        key: "isUndefined",
                        value: function (t) {
                          return void 0 === t;
                        },
                      },
                      {
                        key: "isString",
                        value: function (t) {
                          return "string" == typeof t;
                        },
                      },
                      {
                        key: "isFunction",
                        value: function (t) {
                          return (
                            t && "[object Function]" === {}.toString.call(t)
                          );
                        },
                      },
                      {
                        key: "isObject",
                        value: function (t) {
                          return (
                            "object" == (void 0 === t ? "undefined" : i(t))
                          );
                        },
                      },
                      {
                        key: "objectMerge",
                        value: function (t, e) {
                          for (var n in e)
                            t.hasOwnProperty(n) &&
                            this.isObject(t[n]) &&
                            this.isObject(e[n])
                              ? this.objectMerge(t[n], e[n])
                              : (t[n] = e[n]);
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = r;
            },
            {},
          ],
          5: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              }),
                (n.default = function t(e) {
                  (function (t, e) {
                    if (!(t instanceof e))
                      throw new TypeError("Cannot call a class as a function");
                  })(this, t),
                    (this._win = e);
                });
            },
            {},
          ],
          6: [
            function (t, e, n) {
              "use strict";
              function i(t) {
                return t && t.__esModule
                  ? t
                  : {
                      default: t,
                    };
              }
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = i(t("./AbstractAgent")),
                s = i(t("../Util")),
                a = (function () {
                  function t() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(t, r.default),
                    o(t, [
                      {
                        key: "isSupported",
                        value: function () {
                          return void 0 !== this._win.Notification;
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e) {
                          return new this._win.Notification(t, {
                            icon:
                              s.default.isString(e.icon) ||
                              s.default.isUndefined(e.icon)
                                ? e.icon
                                : e.icon.x32,
                            body: e.body,
                            tag: e.tag,
                            requireInteraction: e.requireInteraction,
                          });
                        },
                      },
                      {
                        key: "close",
                        value: function (t) {
                          t.close();
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = a;
            },
            {
              "../Util": 4,
              "./AbstractAgent": 5,
            },
          ],
          7: [
            function (t, e, n) {
              "use strict";
              function i(t) {
                return t && t.__esModule
                  ? t
                  : {
                      default: t,
                    };
              }
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = i(t("./AbstractAgent")),
                s = i(t("../Util")),
                a = (function () {
                  function t() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(t, r.default),
                    o(t, [
                      {
                        key: "isSupported",
                        value: function () {
                          return (
                            void 0 !== this._win.external &&
                            void 0 !== this._win.external.msIsSiteMode
                          );
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e) {
                          return (
                            this._win.external.msSiteModeClearIconOverlay(),
                            this._win.external.msSiteModeSetIconOverlay(
                              s.default.isString(e.icon) ||
                                s.default.isUndefined(e.icon)
                                ? e.icon
                                : e.icon.x16,
                              t
                            ),
                            this._win.external.msSiteModeActivate(),
                            null
                          );
                        },
                      },
                      {
                        key: "close",
                        value: function () {
                          this._win.external.msSiteModeClearIconOverlay();
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = a;
            },
            {
              "../Util": 4,
              "./AbstractAgent": 5,
            },
          ],
          8: [
            function (t, e, n) {
              "use strict";
              function i(t) {
                return t && t.__esModule
                  ? t
                  : {
                      default: t,
                    };
              }
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var o = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                r = i(t("./AbstractAgent")),
                s = i(t("../Util")),
                a = i(t("../Messages")),
                u = (function () {
                  function t() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(t, r.default),
                    o(t, [
                      {
                        key: "isSupported",
                        value: function () {
                          return (
                            void 0 !== this._win.navigator &&
                            void 0 !== this._win.navigator.serviceWorker
                          );
                        },
                      },
                      {
                        key: "getFunctionBody",
                        value: function (t) {
                          return t
                            .toString()
                            .match(/function[^{]+{([\s\S]*)}$/)[1];
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e, n, i, o) {
                          var r = this;
                          this._win.navigator.serviceWorker.register(i),
                            this._win.navigator.serviceWorker.ready
                              .then(function (i) {
                                var u = {
                                  id: t,
                                  link: n.link,
                                  origin: document.location.href,
                                  onClick: s.default.isFunction(n.onClick)
                                    ? r.getFunctionBody(n.onClick)
                                    : "",
                                  onClose: s.default.isFunction(n.onClose)
                                    ? r.getFunctionBody(n.onClose)
                                    : "",
                                };
                                void 0 !== n.data &&
                                  null !== n.data &&
                                  (u = Object.assign(u, n.data)),
                                  i
                                    .showNotification(e, {
                                      icon: n.icon,
                                      body: n.body,
                                      vibrate: n.vibrate,
                                      tag: n.tag,
                                      data: u,
                                      requireInteraction: n.requireInteraction,
                                      silent: n.silent,
                                    })
                                    .then(function () {
                                      i.getNotifications().then(function (t) {
                                        i.active.postMessage(""), o(t);
                                      });
                                    })
                                    .catch(function (t) {
                                      throw new Error(
                                        a.default.errors.sw_notification_error +
                                          t.message
                                      );
                                    });
                              })
                              .catch(function (t) {
                                throw new Error(
                                  a.default.errors.sw_registration_error +
                                    t.message
                                );
                              });
                        },
                      },
                      {
                        key: "close",
                        value: function () {},
                      },
                    ]),
                    t
                  );
                })();
              n.default = u;
            },
            {
              "../Messages": 1,
              "../Util": 4,
              "./AbstractAgent": 5,
            },
          ],
          9: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = (function (t) {
                  return t && t.__esModule
                    ? t
                    : {
                        default: t,
                      };
                })(t("./AbstractAgent")),
                r = (function () {
                  function t() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(t, o.default),
                    i(t, [
                      {
                        key: "isSupported",
                        value: function () {
                          return void 0 !== this._win.navigator.mozNotification;
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e) {
                          var n =
                            this._win.navigator.mozNotification.createNotification(
                              t,
                              e.body,
                              e.icon
                            );
                          return n.show(), n;
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = r;
            },
            {
              "./AbstractAgent": 5,
            },
          ],
          10: [
            function (t, e, n) {
              "use strict";
              Object.defineProperty(n, "__esModule", {
                value: !0,
              });
              var i = (function () {
                  function t(t, e) {
                    for (var n = 0; n < e.length; n++) {
                      var i = e[n];
                      (i.enumerable = i.enumerable || !1),
                        (i.configurable = !0),
                        "value" in i && (i.writable = !0),
                        Object.defineProperty(t, i.key, i);
                    }
                  }
                  return function (e, n, i) {
                    return n && t(e.prototype, n), i && t(e, i), e;
                  };
                })(),
                o = (function (t) {
                  return t && t.__esModule
                    ? t
                    : {
                        default: t,
                      };
                })(t("./AbstractAgent")),
                r = (function () {
                  function t() {
                    return (
                      (function (t, e) {
                        if (!(t instanceof e))
                          throw new TypeError(
                            "Cannot call a class as a function"
                          );
                      })(this, t),
                      (function (t, e) {
                        if (!t)
                          throw new ReferenceError(
                            "this hasn't been initialised - super() hasn't been called"
                          );
                        return !e ||
                          ("object" != typeof e && "function" != typeof e)
                          ? t
                          : e;
                      })(
                        this,
                        (t.__proto__ || Object.getPrototypeOf(t)).apply(
                          this,
                          arguments
                        )
                      )
                    );
                  }
                  return (
                    (function (t, e) {
                      if ("function" != typeof e && null !== e)
                        throw new TypeError(
                          "Super expression must either be null or a function, not " +
                            typeof e
                        );
                      (t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                          value: t,
                          enumerable: !1,
                          writable: !0,
                          configurable: !0,
                        },
                      })),
                        e &&
                          (Object.setPrototypeOf
                            ? Object.setPrototypeOf(t, e)
                            : (t.__proto__ = e));
                    })(t, o.default),
                    i(t, [
                      {
                        key: "isSupported",
                        value: function () {
                          return void 0 !== this._win.webkitNotifications;
                        },
                      },
                      {
                        key: "create",
                        value: function (t, e) {
                          var n =
                            this._win.webkitNotifications.createNotification(
                              e.icon,
                              t,
                              e.body
                            );
                          return n.show(), n;
                        },
                      },
                      {
                        key: "close",
                        value: function (t) {
                          t.cancel();
                        },
                      },
                    ]),
                    t
                  );
                })();
              n.default = r;
            },
            {
              "./AbstractAgent": 5,
            },
          ],
          11: [
            function (t, e, n) {
              "use strict";
              var i = (function (t) {
                return t && t.__esModule
                  ? t
                  : {
                      default: t,
                    };
              })(t("./classes/Push"));
              e.exports = new i.default(
                "undefined" != typeof window ? window : void 0
              );
            },
            {
              "./classes/Push": 3,
            },
          ],
        },
        {},
        [11]
      )(11);
    },
  },
]);
