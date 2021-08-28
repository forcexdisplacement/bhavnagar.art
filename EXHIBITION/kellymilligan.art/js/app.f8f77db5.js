(function(e) {
    function t(t) {
        for (var i, o, a = t[0], c = t[1], l = t[2], u = 0, h = []; u < a.length; u++) o = a[u], Object.prototype.hasOwnProperty.call(r, o) && r[o] && h.push(r[o][0]), r[o] = 0;
        for (i in c) Object.prototype.hasOwnProperty.call(c, i) && (e[i] = c[i]);
        d && d(t);
        while (h.length) h.shift()();
        return s.push.apply(s, l || []), n()
    }

    function n() {
        for (var e, t = 0; t < s.length; t++) {
            for (var n = s[t], i = !0, o = 1; o < n.length; o++) {
                var a = n[o];
                0 !== r[a] && (i = !1)
            }
            i && (s.splice(t--, 1), e = c(c.s = n[0]))
        }
        return e
    }
    var i = {},
        o = {
            app: 0
        },
        r = {
            app: 0
        },
        s = [];

    function a(e) {
        return c.p + "js/" + ({}[e] || e) + "." + {
            "chunk-0915263e": "3fb7706c",
            "chunk-1667c7c6": "0061da85",
            "chunk-275bf37c": "f8546994",
            "chunk-6f5b5f7f": "9d6520cc",
            "chunk-e216f8aa": "d113fa91"
        }[e] + ".js"
    }

    function c(t) {
        if (i[t]) return i[t].exports;
        var n = i[t] = {
            i: t,
            l: !1,
            exports: {}
        };
        return e[t].call(n.exports, n, n.exports, c), n.l = !0, n.exports
    }
    c.e = function(e) {
        var t = [],
            n = {
                "chunk-0915263e": 1,
                "chunk-1667c7c6": 1,
                "chunk-275bf37c": 1,
                "chunk-6f5b5f7f": 1,
                "chunk-e216f8aa": 1
            };
        o[e] ? t.push(o[e]) : 0 !== o[e] && n[e] && t.push(o[e] = new Promise((function(t, n) {
            for (var i = "css/" + ({}[e] || e) + "." + {
                    "chunk-0915263e": "51c577c3",
                    "chunk-1667c7c6": "d4d8348b",
                    "chunk-275bf37c": "0c11e657",
                    "chunk-6f5b5f7f": "3ddd3526",
                    "chunk-e216f8aa": "d251ca3c"
                }[e] + ".css", r = c.p + i, s = document.getElementsByTagName("link"), a = 0; a < s.length; a++) {
                var l = s[a],
                    u = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (u === i || u === r)) return t()
            }
            var h = document.getElementsByTagName("style");
            for (a = 0; a < h.length; a++) {
                l = h[a], u = l.getAttribute("data-href");
                if (u === i || u === r) return t()
            }
            var d = document.createElement("link");
            d.rel = "stylesheet", d.type = "text/css", d.onload = t, d.onerror = function(t) {
                var i = t && t.target && t.target.src || r,
                    s = new Error("Loading CSS chunk " + e + " failed.\n(" + i + ")");
                s.code = "CSS_CHUNK_LOAD_FAILED", s.request = i, delete o[e], d.parentNode.removeChild(d), n(s)
            }, d.href = r;
            var p = document.getElementsByTagName("head")[0];
            p.appendChild(d)
        })).then((function() {
            o[e] = 0
        })));
        var i = r[e];
        if (0 !== i)
            if (i) t.push(i[2]);
            else {
                var s = new Promise((function(t, n) {
                    i = r[e] = [t, n]
                }));
                t.push(i[2] = s);
                var l, u = document.createElement("script");
                u.charset = "utf-8", u.timeout = 120, c.nc && u.setAttribute("nonce", c.nc), u.src = a(e);
                var h = new Error;
                l = function(t) {
                    u.onerror = u.onload = null, clearTimeout(d);
                    var n = r[e];
                    if (0 !== n) {
                        if (n) {
                            var i = t && ("load" === t.type ? "missing" : t.type),
                                o = t && t.target && t.target.src;
                            h.message = "Loading chunk " + e + " failed.\n(" + i + ": " + o + ")", h.name = "ChunkLoadError", h.type = i, h.request = o, n[1](h)
                        }
                        r[e] = void 0
                    }
                };
                var d = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: u
                    })
                }), 12e4);
                u.onerror = u.onload = l, document.head.appendChild(u)
            }
        return Promise.all(t)
    }, c.m = e, c.c = i, c.d = function(e, t, n) {
        c.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: n
        })
    }, c.r = function(e) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, c.t = function(e, t) {
        if (1 & t && (e = c(e)), 8 & t) return e;
        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
        var n = Object.create(null);
        if (c.r(n), Object.defineProperty(n, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var i in e) c.d(n, i, function(t) {
                return e[t]
            }.bind(null, i));
        return n
    }, c.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e["default"]
        } : function() {
            return e
        };
        return c.d(t, "a", t), t
    }, c.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, c.p = "/", c.oe = function(e) {
        throw console.error(e), e
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        u = l.push.bind(l);
    l.push = t, l = l.slice();
    for (var h = 0; h < l.length; h++) t(l[h]);
    var d = u;
    s.push([0, "chunk-vendors"]), n()
})({
    0: function(e, t, n) {
        e.exports = n("56d7")
    },
    "038b": function(e, t, n) {
        e.exports = n.p + "img/Structures-3.e67748ab.png"
    },
    "0629": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-1-mobile.e0878582.png"
    },
    "065f": function(e, t, n) {
        e.exports = n.p + "img/Piece-18-Inspect-Large.7a6419e0.png"
    },
    "06c8": function(e, t, n) {
        e.exports = n.p + "img/Structures-Inspect-Portrait.10d2ba94.png"
    },
    "08bd": function(e, t, n) {
        e.exports = n.p + "img/Terraform-Sales-1.9a017d74.png"
    },
    "09f3": function(e, t, n) {
        "use strict";
        n("142a")
    },
    "0e3a": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-Inspect-Medium.70c0e622.png"
    },
    "142a": function(e, t, n) {},
    "16f5": function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-1.d3a790ad.png"
    },
    "1bcd": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-Inspect-Portrait.6650db68.png"
    },
    "1bed": function(e, t, n) {
        "use strict";
        n("b759")
    },
    "1cf3": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-1-mobile.493cfbc3.png"
    },
    2003: function(e, t, n) {
        e.exports = n.p + "img/Structures-2-mobile.e067d51b.png"
    },
    2057: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-Inspect-Portrait.532c56f6.png"
    },
    2660: function(e, t, n) {
        e.exports = n.p + "img/Structures-Inspect-Medium.bc71bcab.png"
    },
    "2b9f": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-1.b9aeff5f.png"
    },
    "2be0": function(e, t, n) {
        e.exports = n.p + "img/Terraform-2-mobile.439d862e.png"
    },
    "2dd8": function(e, t, n) {
        e.exports = n.p + "img/Structures-4-mobile.f0c9c120.png"
    },
    "300c": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-6-mobile.372b66d6.png"
    },
    "304e": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-2.0139a35f.png"
    },
    "3ad8": function(e, t, n) {
        e.exports = n.p + "img/Structures-2.4f25d485.png"
    },
    "3edc": function(e, t, n) {
        e.exports = n.p + "img/Structures-Inspect-Small.14d05ce1.png"
    },
    "423d": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-2-mobile.f7344977.png"
    },
    "43ae": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-5.7a61b9c4.png"
    },
    "43ee": function(e, t, n) {
        "use strict";
        n("b64b");
        var i, o = n("4e29"),
            r = function() {
                return r = Object.assign || function(e) {
                    for (var t, n = 1, i = arguments.length; n < i; n++)
                        for (var o in t = arguments[n], t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                    return e
                }, r.apply(this, arguments)
            };
        (function(e) {
            e["RESIZE"] = "resize", e["SCROLL"] = "scroll"
        })(i || (i = {}));
        var s = function() {
                function e() {
                    var e = this;
                    this._state = {
                        isBound: !1,
                        width: "undefined" === typeof window ? 1920 : window.innerWidth,
                        height: "undefined" === typeof window ? 1080 : window.innerHeight,
                        ratio: 16 / 9,
                        dpr: 1,
                        scrollElement: null,
                        scrollTop: 0,
                        scrollLeft: 0,
                        scrollHeight: 0,
                        scroll: 0
                    }, this._stack = {}, this.refresh = function() {
                        e._refreshResize(), e._refreshScroll()
                    }, this.apply = function() {
                        e._propagate(i.RESIZE), e._propagate(i.SCROLL)
                    }, this.resize = function() {
                        return e._onResize()
                    }, this.scroll = function() {
                        return e._onScroll()
                    }, this.on = function(t, n) {
                        return e.register(t, n)
                    }, this.off = function(t) {
                        return e.deregister(t)
                    }, this._onResize = function() {
                        e._refreshResize(), e._propagate(i.RESIZE)
                    }, this._onScroll = function() {
                        e._refreshScroll(), e._propagate(i.SCROLL)
                    }
                }
                return Object.defineProperty(e.prototype, "latest", {
                    get: function() {
                        return r({}, this._state)
                    },
                    enumerable: !0,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "subscribe", {
                    get: function() {
                        return Object.create(this._state)
                    },
                    enumerable: !0,
                    configurable: !0
                }), e.prototype.bind = function(e) {
                    "undefined" !== typeof window ? this._state.isBound ? console.error("ViewportManager: instance was already bound!") : (e && (this._state.scrollElement = e), this._state.isBound = !0, this._attachEvents(), this.refresh()) : console.log("ViewportManager: no window object, ignoring...")
                }, e.prototype.unbind = function() {
                    "undefined" !== typeof window ? (this._state.isBound = !1, this._detachEvents()) : console.log("ViewportManager: no window object, ignoring...")
                }, e.prototype.register = function(e, t) {
                    var n = Object(o["a"])();
                    return this._stack[n] = {
                        type: e,
                        handler: t
                    }, n
                }, e.prototype.deregister = function(e) {
                    delete this._stack[e]
                }, e.prototype._attachEvents = function() {
                    window.addEventListener("resize", this._onResize), this._state.scrollElement ? this._state.scrollElement.addEventListener("scroll", this._onScroll, {
                        passive: !0
                    }) : window.addEventListener("scroll", this._onScroll, {
                        passive: !0
                    })
                }, e.prototype._detachEvents = function() {
                    window.removeEventListener("resize", this._onResize), this._state.scrollElement ? this._state.scrollElement.removeEventListener("scroll", this._onScroll) : window.removeEventListener("scroll", this._onScroll)
                }, e.prototype._refreshResize = function() {
                    if ("undefined" !== typeof window) {
                        var e = window.innerWidth,
                            t = window.innerHeight;
                        this._state.width = e, this._state.height = t, this._state.ratio = e / t, this._state.dpr = window.devicePixelRatio, this._state.scrollHeight = Math.max(this._state.scrollElement ? this._state.scrollElement.scrollHeight : document.body.scrollHeight, t)
                    }
                }, e.prototype._refreshScroll = function() {
                    "undefined" !== typeof window && (this._state.scrollTop = this._state.scrollElement ? this._state.scrollElement.scrollTop : window.pageYOffset, this._state.scrollLeft = this._state.scrollElement ? this._state.scrollElement.scrollLeft : window.pageXOffset, this._state.scroll = 0 === this._state.scrollTop || this._state.scrollHeight <= this._state.height ? 0 : Math.min(1, Math.max(0, this._state.scrollTop / (this._state.scrollHeight - this._state.height))))
                }, e.prototype._propagate = function(e) {
                    for (var t = this._state, n = t.width, o = t.height, r = t.dpr, s = t.scroll, a = t.scrollTop, c = t.scrollLeft, l = t.scrollHeight, u = Object.keys(this._stack), h = 0, d = u.length; h < d; h++) void 0 !== this._stack[u[h]] && this._stack[u[h]].type === e && (e === i.RESIZE ? this._stack[u[h]].handler({
                        width: n,
                        height: o,
                        dpr: r,
                        scrollHeight: l
                    }) : e === i.SCROLL && this._stack[u[h]].handler({
                        scroll: s,
                        scrollTop: a,
                        scrollLeft: c,
                        scrollHeight: l
                    }))
                }, e
            }(),
            a = s,
            c = new a;
        t["a"] = c
    },
    "482c": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-4.34fac7f9.png"
    },
    "48e4": function(e, t, n) {
        "use strict";
        var i = n("5530"),
            o = n("d4ec"),
            r = n("bee2"),
            s = n("ade3"),
            a = n("5194"),
            c = n("974a"),
            l = n("a4cb"),
            u = 70,
            h = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document.body;
                    Object(o["a"])(this, e), Object(s["a"])(this, "onPointerDown", (function(e) {
                        t.tracking.data.isDown = !0, t.setPointer(e.clientX, e.clientY), t.tracking.data.travel.startX = e.clientX, t.tracking.data.travel.startY = e.clientY, t.tracking.data.travel.x = 0, t.tracking.data.travel.y = 0, t.tracking.data.speed.prev.x = t.tracking.data.normal.x, t.tracking.data.speed.prev.y = t.tracking.data.normal.y
                    })), Object(s["a"])(this, "onPointerMove", (function(e) {
                        t.setPointer(e.clientX, e.clientY), t.tracking.data.isDown && (t.tracking.data.travel.x = e.clientX - t.tracking.data.travel.startX, t.tracking.data.travel.y = e.clientY - t.tracking.data.travel.startY)
                    })), Object(s["a"])(this, "onPointerUp", (function(e) {
                        t.tracking.data.isDown = !1, t.setPointer(e.clientX, e.clientY), t.tracking.data.travel.startX = 0, t.tracking.data.travel.startY = 0, t.tracking.data.travel.x = 0, t.tracking.data.travel.y = 0
                    })), Object(s["a"])(this, "onTouchStart", (function(e) {
                        t.tracking.touch = !0, e.clientX = e.touches[0].clientX, e.clientY = e.touches[0].clientY, t.onPointerDown(e)
                    })), Object(s["a"])(this, "onTouchMove", (function(e) {
                        e.clientX = e.touches[0].clientX, e.clientY = e.touches[0].clientY, t.onPointerMove(e)
                    })), Object(s["a"])(this, "onTouchEnd", (function(e) {
                        e.clientX = e.changedTouches[0].clientX, e.clientY = e.changedTouches[0].clientY, t.onPointerUp(e)
                    })), Object(s["a"])(this, "onWheel", (function(e) {
                        var n = t.env.platform.firefox ? 40 : 1,
                            o = (e.wheelDeltaX || -1 * e.deltaX) * n,
                            r = (e.wheelDeltaY || -1 * e.deltaY) * n,
                            s = Object(c["c"])(o),
                            a = Object(c["c"])(r),
                            l = s * u,
                            h = a * u;
                        t.tracking.data.wheel = {
                            deltaX: o,
                            deltaY: r,
                            directionX: s,
                            directionY: a,
                            normalizedDeltaX: l,
                            normalizedDeltaY: h
                        }, window.requestAnimationFrame((function() {
                            t.tracking.data.wheel = Object(i["a"])({}, t.defaults.wheel)
                        }))
                    })), this.element = n, this.tracking = {
                        active: !1,
                        touch: !1,
                        data: Object(i["a"])({}, this.defaults)
                    }, this.env = {
                        time: {
                            now: 0,
                            delta: 0,
                            prev: 0
                        },
                        bounds: {
                            width: 0,
                            height: 0,
                            left: 0,
                            top: 0
                        },
                        platform: {
                            firefox: Object(l["a"])()
                        }
                    }
                }
                return Object(r["a"])(e, [{
                    key: "defaults",
                    get: function() {
                        return {
                            isDown: !1,
                            isMoving: !1,
                            client: {
                                x: 0,
                                y: 0
                            },
                            offset: {
                                x: 0,
                                y: 0
                            },
                            normal: {
                                x: 0,
                                y: 0
                            },
                            travel: {
                                startX: 0,
                                startY: 0,
                                x: 0,
                                y: 0
                            },
                            speed: {
                                x: 0,
                                y: 0,
                                distance: 0,
                                prev: {
                                    x: 0,
                                    y: 0
                                }
                            },
                            wheel: {
                                deltaX: 0,
                                deltaY: 0,
                                directionX: 0,
                                directionY: 0,
                                normalizedDeltaX: 0,
                                normalizedDeltaY: 0
                            }
                        }
                    }
                }, {
                    key: "latest",
                    get: function() {
                        return Object(i["a"])({}, this.tracking)
                    }
                }, {
                    key: "subscribe",
                    get: function() {
                        return Object.create(this.tracking)
                    }
                }, {
                    key: "client",
                    get: function() {
                        return Object.create(this.tracking.data.client)
                    }
                }, {
                    key: "offset",
                    get: function() {
                        return Object.create(this.tracking.data.offset)
                    }
                }, {
                    key: "normal",
                    get: function() {
                        return Object.create(this.tracking.data.normal)
                    }
                }, {
                    key: "travel",
                    get: function() {
                        return Object.create(this.tracking.data.travel)
                    }
                }, {
                    key: "speed",
                    get: function() {
                        return Object.create(this.tracking.data.speed)
                    }
                }, {
                    key: "start",
                    value: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        return this.tracking.active ? (console.warn("InputManager: start() was called while already active..."), this.tracking) : (this.tracking.active = !0, this.refresh(), this.setPointer(e, t), this.setPointerSpeed(), this.attachEvents(), this.subscribe)
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.tracking.active = !1, this.tracking.data = Object(i["a"])({}, this.defaults), this.detachEvents()
                    }
                }, {
                    key: "refresh",
                    value: function(e, t, n, i) {
                        var o = this.element.getBoundingClientRect();
                        this.env.width = void 0 !== e ? e : o.width, this.env.height = void 0 !== t ? t : o.height, this.env.left = void 0 !== n ? n : o.left, this.env.top = void 0 !== i ? i : o.top, 0 === e && console.warn("InputManager.js: this.element's width is currently zero, this will break normal.x calculations due to division by zero."), 0 === t && console.warn("InputManager.js: this.element's height is currently zero, this will break normal.y calculations due to division by zero.")
                    }
                }, {
                    key: "attachEvents",
                    value: function() {
                        var e = this;
                        this.tickID = a["a"].on((function() {
                            return e.onTick()
                        })), this.element.addEventListener("mousedown", this.onPointerDown, !1), document.addEventListener("mousemove", this.onPointerMove, !1), document.addEventListener("mouseup", this.onPointerUp, !1), this.element.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1), "onwheel" in document && window.addEventListener("wheel", this.onWheel)
                    }
                }, {
                    key: "detachEvents",
                    value: function() {
                        a["a"].off(this.tickID), this.element.removeEventListener("mousedown", this.onPointerDown, !1), document.removeEventListener("mousemove", this.onPointerMove, !1), document.removeEventListener("mouseup", this.onPointerUp, !1), this.element.removeEventListener("touchstart", this.onTouchStart, !1), document.removeEventListener("touchmove", this.onTouchMove, !1), document.removeEventListener("touchend", this.onTouchEnd, !1), "onwheel" in document && window.removeEventListener("wheel", this.onWheel)
                    }
                }, {
                    key: "setPointer",
                    value: function(e, t) {
                        this.tracking.data.client.x = e - this.env.left, this.tracking.data.client.y = t - this.env.top, this.tracking.data.offset.x = this.tracking.data.client.x - .5 * this.env.width, this.tracking.data.offset.y = this.tracking.data.client.y - .5 * this.env.height, this.tracking.data.normal.x = this.tracking.data.client.x / this.env.width, this.tracking.data.normal.y = this.tracking.data.client.y / this.env.height
                    }
                }, {
                    key: "setPointerSpeed",
                    value: function() {
                        this.tracking.data.speed.x = this.tracking.data.normal.x - this.tracking.data.speed.prev.x, this.tracking.data.speed.y = this.tracking.data.normal.y - this.tracking.data.speed.prev.y, this.tracking.data.speed.prev.x = this.tracking.data.normal.x, this.tracking.data.speed.prev.y = this.tracking.data.normal.y, this.tracking.data.speed.distance = Math.sqrt(this.tracking.data.speed.x * this.tracking.data.speed.x + this.tracking.data.speed.y * this.tracking.data.speed.y), this.tracking.data.isMoving = this.tracking.data.isDown && this.tracking.data.speed.distance > 0
                    }
                }, {
                    key: "onTick",
                    value: function() {
                        this.env.time.now = Date.now(), this.env.time.delta = this.env.time.now - this.env.time.prev, this.env.time.prev = this.env.time.now, this.setPointerSpeed()
                    }
                }]), e
            }(),
            d = new h;
        t["a"] = d
    },
    "4c5d": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-2.791a8b4d.png"
    },
    "4e29": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        n("d3b7"), n("25f0");

        function i() {
            for (var e = [], t = 0; t < 256; t++) e[t] = (t < 16 ? "0" : "") + t.toString(16);
            return function() {
                var t = 4294967295 * Math.random() | 0,
                    n = 4294967295 * Math.random() | 0,
                    i = 4294967295 * Math.random() | 0,
                    o = 4294967295 * Math.random() | 0,
                    r = e[255 & t] + e[t >> 8 & 255] + e[t >> 16 & 255] + e[t >> 24 & 255] + "-" + e[255 & n] + e[n >> 8 & 255] + "-" + e[n >> 16 & 15 | 64] + e[n >> 24 & 255] + "-" + e[63 & i | 128] + e[i >> 8 & 255] + "-" + e[i >> 16 & 255] + e[i >> 24 & 255] + e[255 & o] + e[o >> 8 & 255] + e[o >> 16 & 255] + e[o >> 24 & 255];
                return r.toUpperCase()
            }()
        }
    },
    "4e89": function(e, t, n) {
        e.exports = n.p + "img/Rust-3-mobile.8d609309.png"
    },
    5137: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-2-mobile.93e07d35.png"
    },
    5165: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-4.f95b67aa.png"
    },
    5194: function(e, t, n) {
        "use strict";
        var i = n("5530"),
            o = n("d4ec"),
            r = n("bee2"),
            s = n("ade3"),
            a = (n("b64b"), n("4e29")),
            c = function() {
                function e() {
                    var t = this,
                        n = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    Object(o["a"])(this, e), Object(s["a"])(this, "on", (function(e) {
                        return t.register(e)
                    })), Object(s["a"])(this, "off", (function(e) {
                        return t.deregister(e)
                    })), Object(s["a"])(this, "onTick", (function() {
                        t.raf = window.requestAnimationFrame(t.onTick), t.updateTime(), t.propagate()
                    })), this.state = Object(i["a"])({}, this.defaults), this.stack = [], n && this.start()
                }
                return Object(r["a"])(e, [{
                    key: "defaults",
                    get: function() {
                        return {
                            isRunning: !1,
                            time: {
                                elapsed: 0,
                                delta: 0,
                                prev: 0,
                                stamp: Date.now()
                            }
                        }
                    }
                }, {
                    key: "time",
                    get: function() {
                        return Object(i["a"])({}, this.state.time)
                    }
                }, {
                    key: "start",
                    value: function() {
                        this.state.isRunning ? console.error("TickManager.js: instance was already running!") : (this.state.isRunning = !0, this.addEvents())
                    }
                }, {
                    key: "stop",
                    value: function() {
                        this.state.isRunning = !1, this.removeEvents()
                    }
                }, {
                    key: "register",
                    value: function(e, t) {
                        var n = void 0 !== t ? t : Object(a["a"])();
                        return this.stack[n] = e, n
                    }
                }, {
                    key: "deregister",
                    value: function(e) {
                        delete this.stack[e]
                    }
                }, {
                    key: "addEvents",
                    value: function() {
                        this.raf = window.requestAnimationFrame(this.onTick)
                    }
                }, {
                    key: "removeEvents",
                    value: function() {
                        window.cancelAnimationFrame(this.raf)
                    }
                }, {
                    key: "updateTime",
                    value: function() {
                        var e = performance.now();
                        this.state.time.elapsed = e, this.state.time.delta = e - this.state.time.prev, this.state.time.prev = e, this.state.time.stamp = Date.now()
                    }
                }, {
                    key: "propagate",
                    value: function() {
                        for (var e = this.state.time, t = e.delta, n = e.elapsed, i = e.stamp, o = Object.keys(this.stack), r = 0, s = o.length; r < s; r++) this.stack[o[r]]({
                            delta: t,
                            elapsed: n,
                            stamp: i
                        })
                    }
                }]), e
            }(),
            l = c,
            u = new l;
        t["a"] = u
    },
    "51ff": function(e, t, n) {
        e.exports = n.p + "img/Terraform-3-mobile.2cce71e1.png"
    },
    "527f": function(e, t, n) {
        e.exports = n.p + "img/Rust-2-mobile.b9970ff7.png"
    },
    5354: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-1-mobile.9f9aad19.png"
    },
    "55b1": function(e, t, n) {
        e.exports = n.p + "img/Terraform-4-mobile.2da5a94c.png"
    },
    "56d7": function(e, t, n) {
        "use strict";
        n.r(t);
        n("e260"), n("e6cf"), n("cca6"), n("a79d"), n("830d");
        var i = n("2b0e"),
            o = (n("d3b7"), n("3ca3"), n("ddb0"), n("4de4"), n("8c4f")),
            r = n("cdc4"),
            s = n("c3f8");
        i["a"].use(o["a"]);
        var a = new o["a"]({
                mode: "history",
                base: "/",
                routes: [{
                    path: "/",
                    name: r["a"].HOME,
                    component: function() {
                        return n.e("chunk-0915263e").then(n.bind(null, "bb51"))
                    }
                }, {
                    path: "/piece/:slug",
                    name: r["a"].PIECE,
                    props: !0,
                    component: function() {
                        return n.e("chunk-275bf37c").then(n.bind(null, "48ad"))
                    },
                    beforeEnter: function(e, t, n) {
                        var i = 0 === s["a"].filter((function(t) {
                            return t.slug === e.params.slug
                        })).length;
                        i ? n("/404") : n()
                    }
                }, {
                    path: "/about",
                    name: r["a"].ABOUT,
                    component: function() {
                        return n.e("chunk-6f5b5f7f").then(n.bind(null, "f820"))
                    }
                }, {
                    path: "/legal",
                    name: r["a"].LEGAL,
                    component: function() {
                        return n.e("chunk-e216f8aa").then(n.bind(null, "519a"))
                    }
                }, {
                    path: "*",
                    name: r["a"].NOTFOUND,
                    component: function() {
                        return n.e("chunk-1667c7c6").then(n.bind(null, "9703"))
                    }
                }]
            }),
            c = (n("d81d"), n("2f62")),
            l = n("5fb0"),
            u = n("43ee");
        i["a"].use(c["a"]);
        var h = function(e) {
                return e <= l["a"]
            },
            d = new c["a"].Store({
                state: {
                    isWheeling: !1,
                    isScrolling: !1,
                    isScrollShallow: !0,
                    isScrollLocked: !1,
                    isDarkMode: !1,
                    isMenuOpen: !1,
                    isMobile: h(u["a"].latest.width),
                    viewportWidth: u["a"].latest.width,
                    viewportHeight: u["a"].latest.height,
                    viewportHeightAtInit: -1,
                    activeGroupIndex: 0,
                    hintingHasScrolled: !1,
                    hintingHasSelected: !1
                },
                mutations: {
                    setWheeling: function(e, t) {
                        e.isWheeling = t
                    },
                    setScrolling: function(e, t) {
                        e.isScrolling = t
                    },
                    setScrollShallow: function(e, t) {
                        e.isScrollShallow = t
                    },
                    setScrollLocked: function(e, t) {
                        e.isScrollLocked = t
                    },
                    setDarkMode: function(e, t) {
                        e.isDarkMode = t
                    },
                    setMenuOpen: function(e, t) {
                        e.isMenuOpen = t
                    },
                    setViewport: function(e, t) {
                        var n = t.width,
                            i = t.height;
                        e.viewportWidth = n, e.viewportHeight = i, -1 === e.viewportHeightAtInit && (e.viewportHeightAtInit = i), e.isMobile = h(n)
                    },
                    setActiveGroupIndex: function(e, t) {
                        e.activeGroupIndex = t
                    },
                    setActiveGroupIndexBySlug: function(e, t) {
                        e.activeGroupIndex = s["a"].map((function(e, n) {
                            return t === e.slug ? n : null
                        })).filter((function(e) {
                            return null !== e
                        }))[0]
                    },
                    setHintingHasScrolled: function(e) {
                        e.hintingHasScrolled = !0
                    },
                    setHintingHasSelected: function(e) {
                        e.hintingHasSelected = !0
                    }
                }
            }),
            p = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    class: {
                        "is-darkmode": e.$store.state.isDarkMode
                    },
                    attrs: {
                        id: "app"
                    }
                }, [e.isLoaded ? e._e() : n("Preloader", {
                    attrs: {
                        onLoaded: e.onLoaded
                    }
                }), e.isMenuOpen ? n("Menu") : e._e(), n("Shell", {
                    attrs: {
                        isLoading: !e.isLoaded
                    }
                }), e.isLoaded ? n("SmoothScroll", {
                    ref: "scroll",
                    scopedSlots: e._u([{
                        key: "default",
                        fn: function(t) {
                            return [n("Stage", {
                                attrs: {
                                    afterEnter: e.stageAfterEnter,
                                    viewProps: {
                                        scrollToTop: t.scrollToTop,
                                        setScrollTop: t.setScrollTop,
                                        isMountingFromPreloader: !e.isPreloadingComplete
                                    }
                                }
                            })]
                        }
                    }], null, !1, 3514408964)
                }) : e._e()], 1)
            },
            f = [],
            g = (n("b0c0"), n("5194")),
            m = n("48e4"),
            b = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("transition", {
                    attrs: {
                        appear: "",
                        mode: "out-in"
                    },
                    on: {
                        enter: e.enter,
                        leave: e.leave
                    }
                }, [n("keep-alive", [n("router-view", e._b({
                    key: e.$route.path,
                    ref: "view"
                }, "router-view", e.viewProps, !1))], 1)], 1)
            },
            v = [],
            w = {
                props: {
                    beforeEnter: {
                        type: Function,
                        default: function() {}
                    },
                    afterEnter: {
                        type: Function,
                        default: function() {}
                    },
                    beforeLeave: {
                        type: Function,
                        default: function() {}
                    },
                    afterLeave: {
                        type: Function,
                        default: function() {}
                    },
                    viewProps: {
                        type: Object,
                        default: function() {
                            return {}
                        }
                    }
                },
                methods: {
                    enter: function(e, t) {
                        var n = this;
                        this.beforeEnter(), this.$refs.view.$_stageEnter((function() {
                            t(), n.afterEnter()
                        }))
                    },
                    leave: function(e, t) {
                        var n = this;
                        this.beforeLeave(), this.$refs.view.$_stageLeave((function() {
                            t(), n.afterLeave()
                        }))
                    }
                }
            },
            k = w,
            y = n("2877"),
            x = Object(y["a"])(k, b, v, !1, null, null, null),
            M = x.exports,
            T = (n("159b"), n("99af"), function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "Preloader"
                }, [n("transition-group", {
                    staticClass: "phrases",
                    attrs: {
                        tag: "p",
                        mode: "out-in",
                        name: "phrase"
                    }
                }, e._l(e.PHRASES, (function(t, i) {
                    return n("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: i === e.phrasePosition && e.isMounted && !e.isComplete,
                            expression: "index === phrasePosition && isMounted && !isComplete"
                        }],
                        key: t + i,
                        staticClass: "phrase"
                    }, [n("span", [e._v(e._s(t))])])
                })), 0)], 1)
            }),
            E = [],
            S = n("d4ec"),
            L = n("bee2"),
            P = n("ade3"),
            O = !1,
            _ = !1,
            I = 100 + 300 * Math.random(),
            C = 0,
            R = function() {
                function e() {
                    Object(S["a"])(this, e), Object(P["a"])(this, "collection", [])
                }
                return Object(L["a"])(e, [{
                    key: "loaded",
                    get: function() {
                        return this.collection
                    }
                }, {
                    key: "load",
                    value: function(e, t, n) {
                        "string" === typeof e ? this._loadSingle(e, t) : Array.isArray(e) ? this._loadArray(e, t, n) : console.warn("ImageLoader.load(): src was not a string or array of strings...")
                    }
                }, {
                    key: "unload",
                    value: function(e) {
                        delete this.collection[e]
                    }
                }, {
                    key: "_loadArray",
                    value: function(e) {
                        var t = this,
                            n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function() {},
                            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : function() {};
                        O && console.log("ImageLoader._loadArray():", e);
                        var o = e.length,
                            r = 0;
                        e.forEach((function(e) {
                            return t._loadSingle(e, (function() {
                                r += 1, i(r / o), r === o && n()
                            }))
                        }))
                    }
                }, {
                    key: "_loadSingle",
                    value: function(e, t) {
                        O && console.log("ImageLoader._loadSingle():", e), void 0 === this.collection[e] ? (this.collection[e] = new Image, _ ? (setTimeout(t, C + I * Math.random()), C += I) : this.collection[e].onload = t, this.collection[e].src = e) : t()
                    }
                }]), e
            }(),
            A = {
                name: "Preloader",
                props: {
                    onLoaded: {
                        type: Function,
                        required: !0
                    }
                },
                components: {},
                data: function() {
                    return {
                        isMounted: !1,
                        isComplete: !1,
                        PHRASES: ["TEN", "TWENTY", "THIRTY", "FORTY", "FIFTY", "THANKS", "FOR", "YOUR", "PATIENCE", ""],
                        loadProgress: 0
                    }
                },
                computed: {
                    phrasePosition: function() {
                        return Math.round(Math.pow(this.loadProgress, .8) * (this.PHRASES.length - 1))
                    },
                    phrase: function() {
                        return this.PHRASES[this.phrasePosition]
                    }
                },
                created: function() {
                    var e = this;
                    this.imageLoader = new R, this.imageLoader.load(Object(s["c"])(this.$store.state.isMobile), (function() {
                        return e.onLoadComplete()
                    }), (function(t) {
                        return e.onLoadProgress(t)
                    }))
                },
                mounted: function() {
                    this.isMounted = !0
                },
                methods: {
                    onLoadComplete: function() {
                        this.isComplete = !0, setTimeout(this.onLoaded, 400)
                    },
                    onLoadProgress: function(e) {
                        this.loadProgress = e
                    }
                }
            },
            j = A,
            H = (n("1bed"), Object(y["a"])(j, T, E, !1, null, "83d52cf8", null)),
            $ = H.exports,
            D = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "Menu"
                }, [n("nav", [n("router-link", {
                    staticClass: "home",
                    attrs: {
                        to: {
                            name: e.ROUTES.HOME
                        }
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.onLinkClick.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("HOME")])]), n("router-link", {
                    staticClass: "about",
                    attrs: {
                        to: {
                            name: e.ROUTES.ABOUT
                        }
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.onLinkClick.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("ABOUT")])]), n("router-link", {
                    staticClass: "legal",
                    attrs: {
                        to: {
                            name: e.ROUTES.LEGAL
                        }
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.onLinkClick.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("LEGAL")])]), e._m(0)], 1)])
            },
            U = [function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("a", {
                    staticClass: "contact",
                    attrs: {
                        href: "mailto:kellymilligan.art@gmail.com",
                        target: "_blank"
                    }
                }, [n("span", [e._v("CONTACT")])])
            }],
            N = {
                name: "Menu",
                props: {},
                components: {},
                data: function() {
                    return {
                        ROUTES: r["a"]
                    }
                },
                methods: {
                    onLinkClick: function() {
                        var e = this;
                        setTimeout((function() {
                            return e.$store.commit("setMenuOpen", !1)
                        }), 100)
                    }
                }
            },
            z = N,
            B = (n("09f3"), Object(y["a"])(z, D, U, !1, null, "31a6d6db", null)),
            Y = B.exports,
            F = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "Shell",
                    class: {
                        "is-darkmode": e.$store.state.isDarkMode
                    }
                }, [n("div", {
                    staticClass: "left-top"
                }, [n("transition", {
                    attrs: {
                        name: "link"
                    }
                }, [e.isHomeVisible ? n("div", {
                    staticClass: "home"
                }, [n("router-link", {
                    staticClass: "name",
                    class: {
                        "is-animating-hover": e.hoverHome.flag
                    },
                    attrs: {
                        to: {
                            name: e.ROUTES.HOME
                        }
                    },
                    nativeOn: {
                        mouseenter: function(t) {
                            return e.onMouseEnterHome.apply(null, arguments)
                        },
                        touchstart: function(t) {
                            return e.onMouseEnterHome.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("KELLY MILLIGAN")])])], 1) : e._e()]), n("transition", {
                    attrs: {
                        name: "link"
                    }
                }, [!e.isLoading && e.isMenuVisible ? n("a", {
                    staticClass: "menu",
                    class: {
                        "is-animating-hover": e.hoverMenu.flag
                    },
                    on: {
                        click: e.onMenuClick,
                        mouseenter: e.onMouseEnterMenu,
                        touchstart: e.onMouseEnterMenu
                    }
                }, [n("span", [e._v("MENU")])]) : e._e()])], 1), n("div", {
                    staticClass: "left-bottom"
                }, [n("transition", {
                    attrs: {
                        name: "link"
                    }
                }, [!e.isLoading && e.isContactVisible ? n("a", {
                    staticClass: "contact",
                    class: {
                        "is-animating-hover": e.hoverContact.flag
                    },
                    attrs: {
                        href: "mailto:kellymilligan.art@gmail.com",
                        target: "_blank"
                    },
                    on: {
                        mouseenter: e.onMouseEnterContact,
                        touchstart: e.onMouseEnterContact
                    }
                }, [n("span", [e._v("CONTACT")])]) : e._e()])], 1), n("div", {
                    staticClass: "right-top"
                }, [n("transition", {
                    attrs: {
                        name: "link"
                    }
                }, [!e.isLoading && e.isCloseVisible ? n("a", {
                    staticClass: "close",
                    class: {
                        "is-animating-hover": e.hoverClose.flag
                    },
                    on: {
                        click: e.onCloseClick,
                        mouseenter: e.onMouseEnterClose,
                        touchstart: e.onMouseEnterClose
                    }
                }, [n("span", [e._v("CLOSE")])]) : e._e()])], 1), n("div", {
                    staticClass: "right-bottom"
                }, [n("transition", {
                    attrs: {
                        name: "link",
                        mode: "out-in"
                    }
                }, [e.isLoading && e.flashLoadingLabel ? n("p", {
                    staticClass: "loading"
                }, [e._v(" LOADING ")]) : !e.isLoading && e.isAboutVisible ? n("router-link", {
                    staticClass: "about",
                    class: {
                        "is-animating-hover": e.hoverAbout.flag
                    },
                    attrs: {
                        to: {
                            name: e.ROUTES.ABOUT
                        }
                    },
                    nativeOn: {
                        mouseenter: function(t) {
                            return e.onMouseEnterAbout.apply(null, arguments)
                        },
                        touchstart: function(t) {
                            return e.onMouseEnterAbout.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("ABOUT")])]) : !e.isLoading && e.isLegalVisible ? n("router-link", {
                    staticClass: "legal",
                    class: {
                        "is-animating-hover": e.hoverLegal.flag
                    },
                    attrs: {
                        to: {
                            name: e.ROUTES.LEGAL
                        }
                    },
                    nativeOn: {
                        mouseenter: function(t) {
                            return e.onMouseEnterLegal.apply(null, arguments)
                        },
                        touchstart: function(t) {
                            return e.onMouseEnterLegal.apply(null, arguments)
                        }
                    }
                }, [n("span", [e._v("LEGAL")])]) : e._e()], 1)], 1)])
            },
            G = [],
            K = {
                name: "Shell",
                props: {
                    isLoading: {
                        type: Boolean,
                        required: !0
                    }
                },
                components: {},
                data: function() {
                    return {
                        ROUTES: r["a"],
                        flashLoadingLabel: !1,
                        hoverHome: {
                            flag: !1,
                            timer: null
                        },
                        hoverMenu: {
                            flag: !1,
                            timer: null
                        },
                        hoverContact: {
                            flag: !1,
                            timer: null
                        },
                        hoverClose: {
                            flag: !1,
                            timer: null
                        },
                        hoverAbout: {
                            flag: !1,
                            timer: null
                        },
                        hoverLegal: {
                            flag: !1,
                            timer: null
                        }
                    }
                },
                mounted: function() {
                    var e = this;
                    this.flashInterval = setInterval((function() {
                        e.flashLoadingLabel = !e.flashLoadingLabel, e.isLoading || clearInterval(e.flashInterval)
                    }), 400), this.bindKeyNavigation()
                },
                beforeDestroy: function() {
                    this.unbindKeyNavigation()
                },
                computed: {
                    isCloseVisible: function() {
                        var e = this.$route.name,
                            t = this.$store.state,
                            n = t.isMobile,
                            i = t.isMenuOpen;
                        return e === r["a"].ABOUT || e === r["a"].PIECE || e === r["a"].LEGAL || n && i
                    },
                    isMenuVisible: function() {
                        var e = this.$store.state,
                            t = e.isMobile,
                            n = e.isMenuOpen;
                        return t && !n
                    },
                    isAboutVisible: function() {
                        var e = this.$store.state.isMobile;
                        return !e && this.$route.name !== r["a"].ABOUT
                    },
                    isLegalVisible: function() {
                        var e = this.$store.state.isMobile;
                        return !e && this.$route.name === r["a"].ABOUT
                    },
                    isContactVisible: function() {
                        var e = this.$store.state.isMobile;
                        return !e
                    },
                    isHomeVisible: function() {
                        var e = this.$store.state.isMobile;
                        return !e || e && this.isLoading
                    }
                },
                methods: {
                    onCloseClick: function() {
                        var e = this.$store.state,
                            t = e.isMobile,
                            n = e.isMenuOpen;
                        t && n ? this.$store.commit("setMenuOpen", !1) : this.$route.name === r["a"].ABOUT || this.$route.name === r["a"].LEGAL ? this.$router.go(-1) : this.$router.push({
                            name: r["a"].HOME
                        })
                    },
                    onMenuClick: function() {
                        this.$store.commit("setMenuOpen", !0)
                    },
                    runHoverAnimation: function(e) {
                        e.flag || (e.flag = !0, clearTimeout(e.timer), e.timer = setTimeout((function() {
                            e.flag = !1
                        }), 600))
                    },
                    onMouseEnterHome: function() {
                        this.runHoverAnimation(this.hoverHome)
                    },
                    onMouseEnterMenu: function() {
                        this.runHoverAnimation(this.hoverMenu)
                    },
                    onMouseEnterContact: function() {
                        this.runHoverAnimation(this.hoverContact)
                    },
                    onMouseEnterClose: function() {
                        this.runHoverAnimation(this.hoverClose)
                    },
                    onMouseEnterAbout: function() {
                        this.runHoverAnimation(this.hoverAbout)
                    },
                    onMouseEnterLegal: function() {
                        this.runHoverAnimation(this.hoverLegal)
                    },
                    bindKeyNavigation: function() {
                        window.addEventListener("keyup", this.onKeyUp, !1)
                    },
                    unbindKeyNavigation: function() {
                        window.removeEventListener("keyup", this.onKeyUp, !1)
                    },
                    onKeyUp: function(e) {
                        switch (e.which) {
                            case 27:
                                this.onKeyUpEsc();
                                break
                        }
                    },
                    onKeyUpEsc: function() {
                        this.isCloseVisible && this.onCloseClick()
                    }
                }
            },
            X = K,
            V = (n("b270"), Object(y["a"])(X, F, G, !1, null, "402c2929", null)),
            W = V.exports,
            q = function() {
                var e = this,
                    t = e.$createElement,
                    n = e._self._c || t;
                return n("div", {
                    staticClass: "SmoothScroll",
                    class: {
                        "is-native": e.isNative, "is-active": !e.isNative, "is-locked": e.isLocked
                    }
                }, [n("div", {
                    staticClass: "fixed"
                }, [n("div", {
                    ref: "smooth",
                    staticClass: "smooth"
                }, [n("transition", {
                    attrs: {
                        name: "reset"
                    },
                    on: {
                        "after-leave": e.afterResetTransitionLeave,
                        "after-enter": e.afterResetTransitionEnter
                    }
                }, [n("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !e.isResetting,
                        expression: "!isResetting"
                    }],
                    ref: "reset",
                    staticClass: "reset"
                }, [e._t("default", null, {
                    scrollToTop: e.scrollToTop,
                    setScrollTop: e.setScrollTop
                })], 2)])], 1)]), e.isNative ? e._e() : n("span", {
                    staticClass: "scroll",
                    style: {
                        height: e.scrollHeight
                    }
                })])
            },
            Z = [],
            J = n("a4cb"),
            Q = 1024,
            ee = 2,
            te = {
                name: "SmoothScroll",
                props: {},
                components: {},
                data: function() {
                    return {
                        isNative: !0,
                        isMicrosoft: J["c"](),
                        isFirefox: J["a"](),
                        isIOS: J["b"](),
                        scrollHeight: "100vh",
                        isResetting: !1,
                        hasReset: !0,
                        shouldLock: !1
                    }
                },
                computed: {
                    isLocked: function() {
                        return this.$store.state.isScrollLocked
                    },
                    isReducedPlatform: function() {
                        return this.isIOS || this.isFirefox || this.isMicrosoft && "EdgeChromium" !== this.isMicrosoft
                    }
                },
                mounted: function() {
                    this.resizeId = u["a"].on("resize", this.onResize), this.scrollId = u["a"].on("scroll", this.onScroll), this.tickId = g["a"].on(this.onTick), this.scrollPos = 0, this.updateHeight(), this.bindKeyNavigation()
                },
                beforeDestroy: function() {
                    u["a"].off(this.resizeId), u["a"].off(this.scrollId), g["a"].off(this.tickId), this.unbindKeyNavigation()
                },
                methods: {
                    resetScrollPosition: function() {
                        window.scrollTo(0, 0), this.scrollPos = -1 * u["a"].latest.height
                    },
                    updateHeight: function() {
                        this.scrollHeight = "".concat(this.$refs.smooth.offsetHeight, "px")
                    },
                    onResize: function(e) {
                        var t = this,
                            n = e.width,
                            i = u["a"].latest.scrollTop;
                        this.isReducedPlatform || n <= Q ? this.isNative = !0 : this.isNative = !1, this.scrollPos = i, this.$nextTick((function() {
                            return t.updateHeight()
                        }))
                    },
                    onScroll: function(e) {
                        var t = e.scrollTop,
                            n = u["a"].latest.height;
                        !this.isNative && t < .5 * n && this.hasReset ? this.$store.commit("setScrollShallow", !0) : this.$store.commit("setScrollShallow", !1)
                    },
                    onTick: function() {
                        if (!this.isNative) {
                            var e = u["a"].latest.scrollTop;
                            this.scrollPos += .09 * (e - this.scrollPos), Math.abs(e - this.scrollPos) < .05 ? (this.scrollPos = e, this.$store.commit("setScrolling", !1)) : this.$store.commit("setScrolling", !0), this.$refs.smooth.style.mozTransform = "translate3d( 0, ".concat(-this.scrollPos, "px, 0 )"), this.$refs.smooth.style.webkitTransform = "translate3d( 0, ".concat(-this.scrollPos, "px, 0 )"), this.$refs.smooth.style.transform = "translate3d( 0, ".concat(-this.scrollPos, "px, 0 )")
                        }
                    },
                    scrollToTop: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
                            n = u["a"].latest.scrollTop;
                        e ? this.resetScrollPosition() : (this.$store.state.isScrollShallow || this.isNative && n <= ee ? window.scrollTo(0, 0) : (this.isResetting = !0, this.hasReset = !1), t && (this.shouldLock = !0))
                    },
                    setScrollTop: function(e) {
                        this.scrollPos = e, window.scrollTo(0, e), this.onTick()
                    },
                    afterResetTransitionLeave: function() {
                        this.shouldLock && (this.$store.commit("setScrollLocked", !0), this.shouldLock = !1), this.resetScrollPosition(), this.isResetting = !1
                    },
                    afterResetTransitionEnter: function() {
                        this.hasReset = !0
                    },
                    bindKeyNavigation: function() {
                        window.addEventListener("keyup", this.onKeyUp, !1)
                    },
                    unbindKeyNavigation: function() {
                        window.removeEventListener("keyup", this.onKeyUp, !1)
                    },
                    onKeyUp: function(e) {
                        switch (e.which) {
                            case 9:
                                this.onKeyUpTab();
                                break
                        }
                    },
                    onKeyUpTab: function() {
                        this.isNative = !0
                    }
                }
            },
            ne = te,
            ie = (n("c288"), Object(y["a"])(ne, q, Z, !1, null, "29c1d87e", null)),
            oe = ie.exports,
            re = {
                name: "App",
                components: {
                    Stage: M,
                    Preloader: $,
                    Menu: Y,
                    Shell: W,
                    SmoothScroll: oe
                },
                data: function() {
                    return {
                        isLoaded: !1,
                        isPreloadingComplete: !1
                    }
                },
                computed: {
                    isOnDarkView: function() {
                        return this.$route.name === r["a"].ABOUT
                    },
                    isMenuOpen: function() {
                        return this.$store.state.isMenuOpen
                    },
                    isDarkMode: function() {
                        return (this.isOnDarkView || this.isMenuOpen) && this.isLoaded
                    },
                    isWheeling: function() {
                        return this.$store.state.isWheeling
                    },
                    isScrolling: function() {
                        return this.$store.state.isScrolling
                    },
                    vhAtInit: function() {
                        return this.$store.state.viewportHeightAtInit
                    }
                },
                watch: {
                    isDarkMode: function(e, t) {
                        this.$store.commit("setDarkMode", e), e ? document.documentElement.classList.add("is-darkmode") : document.documentElement.classList.remove("is-darkmode")
                    },
                    isWheeling: function() {
                        this.toggleTitleUpdates()
                    },
                    isScrolling: function() {
                        this.toggleTitleUpdates()
                    },
                    vhAtInit: function(e, t) {
                        document.documentElement.style.setProperty("--vhAtInit", "".concat(e, "px")), document.documentElement.style.setProperty("--vhAtInitHalf", "".concat(Math.round(e / 2), "px"))
                    }
                },
                mounted: function() {
                    u["a"].bind(), g["a"].start(), m["a"].start(), this.resizeId = u["a"].on("resize", this.onResize), this.bindTitleUpdates(), window.addEventListener("beforeunload", this.unbindTitleUpdates, !1)
                },
                beforeDestroy: function() {
                    window.removeEventListener("beforeunload", this.unbindTitleUpdates, !1), this.unbindTitleUpdates(), u["a"].off(this.resizeId), u["a"].unbind(), g["a"].stop(), m["a"].stop()
                },
                methods: {
                    updateViewport: function() {
                        u["a"].refresh(), u["a"].apply()
                    },
                    onLoaded: function() {
                        var e = this;
                        this.isLoaded = !0, this.$nextTick((function() {
                            e.isPreloadingComplete = !0
                        }))
                    },
                    onResize: function(e) {
                        var t = e.width,
                            n = e.height,
                            i = this.$store.state,
                            o = i.isMobile,
                            r = i.isMenuOpen;
                        this.$store.commit("setViewport", {
                            width: t,
                            height: n
                        }), r && !o && this.$store.commit("setMenuOpen", !1)
                    },
                    stageAfterEnter: function() {
                        this.updateViewport()
                    },
                    bindTitleUpdates: function() {
                        this.titleChangeIndex = 0, clearInterval(this.titleChangeInterval), this.titleChangeInterval = setInterval(this.updateDocumentTitle, 800), this.updateDocumentTitle()
                    },
                    resumeTitleUpdates: function() {
                        clearInterval(this.titleChangeInterval), this.titleChangeInterval = setInterval(this.updateDocumentTitle, 800), this.updateDocumentTitle()
                    },
                    pauseTitleUpdates: function() {
                        clearInterval(this.titleChangeInterval)
                    },
                    toggleTitleUpdates: function() {
                        var e = this.$store.state,
                            t = e.isWheeling,
                            n = e.isScrolling;
                        t || n ? this.pauseTitleUpdates() : this.resumeTitleUpdates()
                    },
                    unbindTitleUpdates: function() {
                        clearInterval(this.titleChangeInterval), this.updateDocumentTitle(!0)
                    },
                    updateDocumentTitle: function() {
                        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                            t = "KELLY MILLIGAN, FINE ART, MADE WITH CODE.",
                            n = ["KELLY", "MILLIGAN", "FINE", "ART", "MADE", "WITH", "CODE"];
                        e ? document.title = t : (document.title = n[this.titleChangeIndex], this.titleChangeIndex += 1, this.titleChangeIndex = this.titleChangeIndex > n.length - 1 ? 0 : this.titleChangeIndex)
                    }
                }
            },
            se = re,
            ae = (n("5c0b"), Object(y["a"])(se, p, f, !1, null, null, null)),
            ce = ae.exports,
            le = (n("f5df1"), n("d00c"));
        i["a"].use(le["a"]), i["a"].config.productionTip = !1, "scrollRestoration" in history && (history.scrollRestoration = "manual"), new i["a"]({
            router: a,
            store: d,
            render: function(e) {
                return e(ce)
            }
        }).$mount("#app")
    },
    "5b06": function(e, t, n) {
        e.exports = n.p + "img/Rust-3.6a8a1e60.png"
    },
    "5b53": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-2-mobile.da22749b.png"
    },
    "5c0b": function(e, t, n) {
        "use strict";
        n("9c0c")
    },
    "5fb0": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        }));
        var i = 599
    },
    "63c3": function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-1-mobile.bc59fb87.png"
    },
    "67f5": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-4-mobile.8932f473.png"
    },
    "6f6d": function(e, t, n) {
        e.exports = n.p + "img/Terraform-Inspect-Small.1d0ab8a3.png"
    },
    7089: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-6.ae5a34e0.png"
    },
    "73fc": function(e, t, n) {
        e.exports = n.p + "img/Orbiting-2.b079ee7a.png"
    },
    "74c9": function(e, t, n) {
        e.exports = n.p + "img/Piece-18-3-mobile.032b217f.png"
    },
    "74d0": function(e, t, n) {
        e.exports = n.p + "img/Terraform-Inspect-Medium.a21d4de4.png"
    },
    "74d7": function(e, t, n) {
        e.exports = n.p + "img/Terraform-Sales-1-mobile.29005856.png"
    },
    7523: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Inspect-Medium.bbcbee32.png"
    },
    7753: function(e, t, n) {
        e.exports = n.p + "img/Rust-Inspect-Portrait.232d2e6b.png"
    },
    7786: function(e, t, n) {
        e.exports = n.p + "img/Rust-4-mobile.19db4781.png"
    },
    "77cb": function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-2-mobile.d4ab449a.png"
    },
    "7b4b": function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-Inspect-Large.b2234983.png"
    },
    "7e0d": function(e, t, n) {
        e.exports = n.p + "img/Terraform-3.1b1c396d.png"
    },
    "7e76": function(e, t, n) {
        e.exports = n.p + "img/Rust-Inspect-Large.3627e4c9.png"
    },
    "7f45": function(e, t, n) {
        e.exports = n.p + "img/Rust-2.0b9c053a.png"
    },
    "80dc": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Inspect-Portrait.ad78c961.png"
    },
    "830d": function(e, t) {},
    8381: function(e, t, n) {
        e.exports = n.p + "img/Structures-4.d656d9f3.png"
    },
    "8a34": function(e, t, n) {
        e.exports = n.p + "img/Structures-3-mobile.3d4aea53.png"
    },
    "8d0f": function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-Inspect-Portrait.5ddd02bd.png"
    },
    "8d74": function(e, t, n) {
        e.exports = n.p + "img/Terraform-Inspect-Portrait.30e51ae6.png"
    },
    9641: function(e, t, n) {
        e.exports = n.p + "img/Rust-Inspect-Small.edc1e189.png"
    },
    9678: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-3-mobile.f320a387.png"
    },
    "974a": function(e, t, n) {
        "use strict";
        n.d(t, "a", (function() {
            return i
        })), n.d(t, "b", (function() {
            return o
        })), n.d(t, "c", (function() {
            return r
        }));
        var i = function(e, t, n) {
                return Math.min(Math.max(e, t), n)
            },
            o = function(e, t) {
                return (e % t + t) % t
            },
            r = function(e) {
                return 0 === e ? 0 : e > 0 ? 1 : -1
            }
    },
    "9a34": function(e, t, n) {
        e.exports = n.p + "img/Terraform-4.4d99dc0e.png"
    },
    "9c0c": function(e, t, n) {},
    "9d0c": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Inspect-Large.e20e8c94.png"
    },
    "9e77": function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-1.ce43754d.png"
    },
    a02b: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-1.f739961b.png"
    },
    a4cb: function(e, t, n) {
        "use strict";

        function i() {
            if ("undefined" === typeof window) return !1;
            var e = window.navigator.userAgent,
                t = e.indexOf("MSIE "),
                n = e.indexOf("Trident/"),
                i = e.indexOf("Edge/"),
                o = e.indexOf("Edg/");
            return t > 0 ? "10" : n > 0 ? "11" : i > 0 ? "Edge" : o > 0 && "EdgeChromium"
        }

        function o() {
            if ("undefined" === typeof window) return !1;
            var e = window.navigator.userAgent;
            return /firefox/i.test(e)
        }

        function r() {
            if ("undefined" === typeof window) return !1;
            var e = window.navigator.userAgent;
            return /^((?!chrome|android).)*safari/i.test(e)
        }

        function s() {
            if ("undefined" === typeof window) return !1;
            var e = window.navigator.userAgent;
            return /iPad|iPhone|iPod/.test(e) && !window.MSStream
        }
        n.d(t, "c", (function() {
            return i
        })), n.d(t, "a", (function() {
            return o
        })), n.d(t, "d", (function() {
            return r
        })), n.d(t, "b", (function() {
            return s
        }))
    },
    b0fb: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-Inspect-Small.fae543c0.png"
    },
    b270: function(e, t, n) {
        "use strict";
        n("f14c")
    },
    b347: function(e, t, n) {
        e.exports = n.p + "img/Orbiting-3-mobile.8e088c80.png"
    },
    b377: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-3-mobile.f4327236.png"
    },
    b3cc: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Inspect-Small.faad3ee9.png"
    },
    b702: function(e, t, n) {
        e.exports = n.p + "img/Structures-1.a487a3f7.png"
    },
    b759: function(e, t, n) {},
    bd38: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-1.b7e24337.png"
    },
    bd8f: function(e, t, n) {
        e.exports = n.p + "img/Orbiting-4.08f70f4c.png"
    },
    be23: function(e, t, n) {
        e.exports = n.p + "img/Terraform-5-mobile.47262adb.png"
    },
    be9f: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-3-mobile.af1081a5.png"
    },
    c00c: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-Inspect-Small.d3f08117.png"
    },
    c0bd: function(e, t, n) {
        e.exports = n.p + "img/Orbiting-3.c63f2f0b.png"
    },
    c170: function(e, t, n) {
        e.exports = n.p + "img/Rust-4.da1d7eda.png"
    },
    c288: function(e, t, n) {
        "use strict";
        n("ccee")
    },
    c3f8: function(e, t, n) {
        "use strict";
        n.d(t, "b", (function() {
            return bi
        })), n.d(t, "c", (function() {
            return vi
        }));
        var i = n("2909"),
            o = (n("4de4"), n("159b"), n("d81d"), n("99af"), n("5fb0")),
            r = n("f487"),
            s = n.n(r),
            a = n("f201"),
            c = n.n(a),
            l = n("7e0d"),
            u = n.n(l),
            h = n("9a34"),
            d = n.n(h),
            p = n("f83a"),
            f = n.n(p),
            g = n("fd0b"),
            m = n.n(g),
            b = n("ecc7"),
            v = n.n(b),
            w = n("2be0"),
            k = n.n(w),
            y = n("51ff"),
            x = n.n(y),
            M = n("55b1"),
            T = n.n(M),
            E = n("be23"),
            S = n.n(E),
            L = n("f4eb"),
            P = n.n(L),
            O = n("c77a"),
            _ = n.n(O),
            I = n("74d0"),
            C = n.n(I),
            R = n("6f6d"),
            A = n.n(R),
            j = n("8d74"),
            H = n.n(j),
            $ = n("08bd"),
            D = n.n($),
            U = n("74d7"),
            N = n.n(U),
            z = function() {
                return [{
                    src: s.a,
                    srcMobile: v.a
                }, {
                    src: c.a,
                    srcMobile: k.a
                }, {
                    src: d.a,
                    srcMobile: T.a
                }, {
                    src: m.a,
                    srcMobile: P.a
                }]
            },
            B = function() {
                return [{
                    src: c.a,
                    srcMobile: k.a
                }, {
                    src: u.a,
                    srcMobile: x.a,
                    aspect: 1.414
                }, {
                    src: d.a,
                    srcMobile: T.a
                }, {
                    src: f.a,
                    srcMobile: S.a,
                    aspect: 1.414
                }, {
                    src: m.a,
                    srcMobile: P.a
                }]
            },
            Y = function() {
                return {
                    srcLarge: _.a,
                    srcMedium: C.a,
                    srcSmall: A.a,
                    srcPortrait: H.a
                }
            },
            F = function() {
                return [{
                    src: D.a,
                    srcMobile: N.a
                }]
            },
            G = n("bd38"),
            K = n.n(G),
            X = n("c42b"),
            V = n.n(X),
            W = n("fc8a"),
            q = n.n(W),
            Z = n("5165"),
            J = n.n(Z),
            Q = n("d7d5"),
            ee = n.n(Q),
            te = n("fabf"),
            ne = n.n(te),
            ie = n("74c9"),
            oe = n.n(ie),
            re = n("c994"),
            se = n.n(re),
            ae = n("065f"),
            ce = n.n(ae),
            le = n("e350"),
            ue = n.n(le),
            he = n("c00c"),
            de = n.n(he),
            pe = n("2057"),
            fe = n.n(pe),
            ge = function() {
                return [{
                    src: K.a,
                    srcMobile: ee.a
                }, {
                    src: V.a,
                    srcMobile: ne.a
                }, {
                    src: q.a,
                    srcMobile: oe.a
                }, {
                    src: J.a,
                    srcMobile: se.a
                }]
            },
            me = function() {
                return [{
                    src: V.a,
                    srcMobile: ne.a
                }, {
                    src: q.a,
                    srcMobile: oe.a
                }, {
                    src: J.a,
                    srcMobile: se.a
                }]
            },
            be = function() {
                return {
                    srcLarge: ce.a,
                    srcMedium: ue.a,
                    srcSmall: de.a,
                    srcPortrait: fe.a
                }
            },
            ve = n("16f5"),
            we = n.n(ve),
            ke = n("c987"),
            ye = n.n(ke),
            xe = n("c951"),
            Me = n.n(xe),
            Te = n("d26f"),
            Ee = n.n(Te),
            Se = n("63c3"),
            Le = n.n(Se),
            Pe = n("77cb"),
            Oe = n.n(Pe),
            _e = n("b377"),
            Ie = n.n(_e),
            Ce = n("fde2"),
            Re = n.n(Ce),
            Ae = n("7b4b"),
            je = n.n(Ae),
            He = n("d6be"),
            $e = n.n(He),
            De = n("b0fb"),
            Ue = n.n(De),
            Ne = n("8d0f"),
            ze = n.n(Ne),
            Be = function() {
                return [{
                    src: we.a,
                    srcMobile: Le.a
                }, {
                    src: ye.a,
                    srcMobile: Oe.a
                }, {
                    src: Me.a,
                    srcMobile: Ie.a
                }, {
                    src: Ee.a,
                    srcMobile: Re.a
                }]
            },
            Ye = function() {
                return [{
                    src: ye.a,
                    srcMobile: Oe.a
                }, {
                    src: Me.a,
                    srcMobile: Ie.a
                }, {
                    src: Ee.a,
                    srcMobile: Re.a
                }]
            },
            Fe = function() {
                return {
                    srcLarge: je.a,
                    srcMedium: $e.a,
                    srcSmall: Ue.a,
                    srcPortrait: ze.a
                }
            },
            Ge = n("a02b"),
            Ke = n.n(Ge),
            Xe = n("4c5d"),
            Ve = n.n(Xe),
            We = n("c907"),
            qe = n.n(We),
            Ze = n("c4fc"),
            Je = n.n(Ze),
            Qe = n("0629"),
            et = n.n(Qe),
            tt = n("5137"),
            nt = n.n(tt),
            it = n("be9f"),
            ot = n.n(it),
            rt = n("d77b"),
            st = n.n(rt),
            at = n("9e77"),
            ct = n.n(at),
            lt = n("304e"),
            ut = n.n(lt),
            ht = n("d0a3"),
            dt = n.n(ht),
            pt = n("482c"),
            ft = n.n(pt),
            gt = n("43ae"),
            mt = n.n(gt),
            bt = n("7089"),
            vt = n.n(bt),
            wt = n("5354"),
            kt = n.n(wt),
            yt = n("423d"),
            xt = n.n(yt),
            Mt = n("9678"),
            Tt = n.n(Mt),
            Et = n("e7f8"),
            St = n.n(Et),
            Lt = n("cea2"),
            Pt = n.n(Lt),
            Ot = n("300c"),
            _t = n.n(Ot),
            It = n("9d0c"),
            Ct = n.n(It),
            Rt = n("7523"),
            At = n.n(Rt),
            jt = n("b3cc"),
            Ht = n.n(jt),
            $t = n("80dc"),
            Dt = n.n($t),
            Ut = function() {
                return [{
                    src: Ke.a,
                    srcMobile: et.a
                }, {
                    src: Ve.a,
                    srcMobile: nt.a
                }, {
                    src: qe.a,
                    srcMobile: ot.a
                }, {
                    src: Je.a,
                    srcMobile: st.a
                }]
            },
            Nt = function() {
                return [{
                    src: ct.a,
                    srcMobile: kt.a
                }, {
                    src: ut.a,
                    srcMobile: xt.a
                }, {
                    src: dt.a,
                    srcMobile: Tt.a
                }, {
                    src: ft.a,
                    srcMobile: St.a
                }, {
                    src: mt.a,
                    srcMobile: Pt.a
                }, {
                    src: vt.a,
                    srcMobile: _t.a
                }, {
                    src: Ve.a,
                    srcMobile: nt.a
                }, {
                    src: qe.a,
                    srcMobile: ot.a
                }, {
                    src: Je.a,
                    srcMobile: st.a
                }]
            },
            zt = function() {
                return {
                    srcLarge: Ct.a,
                    srcMedium: At.a,
                    srcSmall: Ht.a,
                    srcPortrait: Dt.a
                }
            },
            Bt = n("cae4"),
            Yt = n.n(Bt),
            Ft = n("7f45"),
            Gt = n.n(Ft),
            Kt = n("5b06"),
            Xt = n.n(Kt),
            Vt = n("c170"),
            Wt = n.n(Vt),
            qt = n("e56c"),
            Zt = n.n(qt),
            Jt = n("527f"),
            Qt = n.n(Jt),
            en = n("4e89"),
            tn = n.n(en),
            nn = n("7786"),
            on = n.n(nn),
            rn = n("7e76"),
            sn = n.n(rn),
            an = n("f5b6"),
            cn = n.n(an),
            ln = n("9641"),
            un = n.n(ln),
            hn = n("7753"),
            dn = n.n(hn),
            pn = function() {
                return [{
                    src: Yt.a,
                    srcMobile: Zt.a
                }, {
                    src: Gt.a,
                    srcMobile: Qt.a
                }, {
                    src: Xt.a,
                    srcMobile: tn.a
                }, {
                    src: Wt.a,
                    srcMobile: on.a
                }]
            },
            fn = function() {
                return [{
                    src: Gt.a,
                    srcMobile: Qt.a
                }, {
                    src: Xt.a,
                    srcMobile: tn.a
                }, {
                    src: Wt.a,
                    srcMobile: on.a
                }]
            },
            gn = function() {
                return {
                    srcLarge: sn.a,
                    srcMedium: cn.a,
                    srcSmall: un.a,
                    srcPortrait: dn.a
                }
            },
            mn = n("2b9f"),
            bn = n.n(mn),
            vn = n("73fc"),
            wn = n.n(vn),
            kn = n("c0bd"),
            yn = n.n(kn),
            xn = n("bd8f"),
            Mn = n.n(xn),
            Tn = n("1cf3"),
            En = n.n(Tn),
            Sn = n("5b53"),
            Ln = n.n(Sn),
            Pn = n("b347"),
            On = n.n(Pn),
            _n = n("67f5"),
            In = n.n(_n),
            Cn = n("c95b"),
            Rn = n.n(Cn),
            An = n("0e3a"),
            jn = n.n(An),
            Hn = n("fe03"),
            $n = n.n(Hn),
            Dn = n("1bcd"),
            Un = n.n(Dn),
            Nn = function() {
                return [{
                    src: bn.a,
                    srcMobile: En.a
                }, {
                    src: wn.a,
                    srcMobile: Ln.a
                }, {
                    src: yn.a,
                    srcMobile: On.a
                }, {
                    src: Mn.a,
                    srcMobile: In.a
                }]
            },
            zn = function() {
                return [{
                    src: wn.a,
                    srcMobile: Ln.a
                }, {
                    src: yn.a,
                    srcMobile: On.a
                }, {
                    src: Mn.a,
                    srcMobile: In.a
                }]
            },
            Bn = function() {
                return {
                    srcLarge: Rn.a,
                    srcMedium: jn.a,
                    srcSmall: $n.a,
                    srcPortrait: Un.a
                }
            },
            Yn = n("b702"),
            Fn = n.n(Yn),
            Gn = n("3ad8"),
            Kn = n.n(Gn),
            Xn = n("038b"),
            Vn = n.n(Xn),
            Wn = n("8381"),
            qn = n.n(Wn),
            Zn = n("ef56"),
            Jn = n.n(Zn),
            Qn = n("2003"),
            ei = n.n(Qn),
            ti = n("8a34"),
            ni = n.n(ti),
            ii = n("2dd8"),
            oi = n.n(ii),
            ri = n("d444"),
            si = n.n(ri),
            ai = n("2660"),
            ci = n.n(ai),
            li = n("3edc"),
            ui = n.n(li),
            hi = n("06c8"),
            di = n.n(hi),
            pi = function() {
                return [{
                    src: Fn.a,
                    srcMobile: Jn.a
                }, {
                    src: Kn.a,
                    srcMobile: ei.a
                }, {
                    src: Vn.a,
                    srcMobile: ni.a
                }, {
                    src: qn.a,
                    srcMobile: oi.a
                }]
            },
            fi = function() {
                return [{
                    src: Kn.a,
                    srcMobile: ei.a
                }, {
                    src: Vn.a,
                    srcMobile: ni.a
                }, {
                    src: qn.a,
                    srcMobile: oi.a
                }]
            },
            gi = function() {
                return {
                    srcLarge: si.a,
                    srcMedium: ci.a,
                    srcSmall: ui.a,
                    srcPortrait: di.a
                }
            };

        function mi(e) {
            return xi[e === xi.length - 1 ? 0 : e + 1]
        }

        function bi(e) {
            for (var t = 0; t < xi.length; t++)
                if (xi[t].slug === e) return mi(t);
            return console.warn('Collection: Piece with Slug: "'.concat(e, '" not found...')), null
        }

        function vi() {
            var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                t = [];
            return xi.forEach((function(n) {
                return t.push.apply(t, Object(i["a"])(n.previews.map((function(t) {
                    return e ? t.srcMobile : t.src
                }))))
            })), t
        }
        var wi = function(e) {
                var t = e.src,
                    n = e.srcMobile,
                    i = e.aspect,
                    r = void 0 === i ? null : i;
                return {
                    attr: {
                        srcSet: "".concat(n, " 500w, ").concat(t, " 1000w"),
                        sizes: "(max-width: ".concat(o["a"], "px) 200px, 1000px"),
                        src: t
                    },
                    src: t,
                    srcMobile: n,
                    aspect: r
                }
            },
            ki = function(e) {
                return e.map((function(e) {
                    return wi(e)
                }))
            },
            yi = function(e) {
                var t = e.srcLarge,
                    n = e.srcMedium,
                    i = e.srcSmall,
                    o = e.srcPortrait;
                return {
                    attr: {
                        srcSet: "".concat(t, " 2200w, ").concat(n, " 1600w, ").concat(i, " 1200w"),
                        sizes: "100vw",
                        src: n
                    },
                    attrPortrait: {
                        src: o
                    }
                }
            },
            xi = [{
                title: "Terraform",
                slug: "terraform",
                aspect: 1e3 / 1414,
                previews: ki(z()),
                narrative: {
                    headline: "Fall Colours in Ontario",
                    description: ['As a sequel to my explorations in <a href="/piece/rust">Rust</a>, this piece uses layers of nested noise to aim for an intensely organic mix of texture and colour.', "While living in Toronto, some dear friends of ours moved to the city. Throughout autumn we spent several weekends enjoying the “Fall Colours” in Ontario, including a long weekend at a stunning cottage near Algonquin Park, the cosiest of times. This shared experience was the inspiration for this colour palette, and their desire to hang something of mine on their wall was the push I needed to dust off the old Rust code, improve it, and create the Terraform series."]
                },
                showcase: ki(B()),
                process: {
                    headline: "Searching for an organic mix",
                    description: ["A big challenge with computer-generated art is achieving something that looks organic.", "Mathematical models and algorithms, even noise, fundamentally operate within a deterministic framework. Computer Graphics are rigid, they are grounded in math, and it’s hard to break through the barrier of something that looks like “Computer Graphics” into something that more closely resembles nature.", "The texture and colour in this series attempts to break through by deeply nesting Fractal Brownian Motion (FBM) noise, reaching a point where discernible patterns melt away."],
                    inspect: yi(Y())
                },
                sales: {
                    pitch: ["Terraform is a series of 20 unique editions. Each is an original artwork, a one-of-a-kind single-edition print and will not be reproduced.", 'Each edition includes a Certificate of Authenticity, generatively signed using unique "fingerprints" of the source algorithm.', "The print is produced to archival fine art standards using pigment-based inks on thick, highly textured Hahnemühle German Etching paper.", "Each edition is mounted in a custom handmade floating frame made from sustainable walnut, complete with anti-reflective art glass.", "The printing and mounting process is expertly executed by ThePrintSpace in London, the best of the best."],
                    specimens: ki(F()),
                    specs: {
                        dimensions: ["1000x707mm (B1)", "10x Landscape editions", "10x Portrait editions"],
                        price: ["$2,400"],
                        printing: ["Fine art giclée", "Pigment-based inks", "Archival standard"],
                        paper: ["Hahnemühle German Etching", "310 gsm, 100% α-cellulose", "Matte, highly textured"]
                    }
                }
            }, {
                title: "Piece 18",
                slug: "piece-18",
                aspect: 1e3 / 1414,
                previews: ki(ge()),
                narrative: {
                    headline: "17 Global Goals",
                    description: ['In 2018 Denkwerk from Köln created the digital experience for <a href="https://art4globalgoals.com/" target="_blank">Art4GlobalGoals</a>, a response to the UN’s Global Goals for a better world by 2030. A collaboration with the painter Leon Löwentraut, Art4GlobalGoals allowed users to “paint” through 17 goals with their cursor. The data for these painting gestures was captured by the digital experience.', "I worked with Denkwerk to create “Piece 18”, an artistic petition formed by the interactions of these users."]
                },
                showcase: ki(me()),
                process: {
                    headline: "Painting with circles",
                    description: ["A massive challenge with this project was creating brush strokes that mimic the texture of real paint.", "A lot of my work uses circles, arranging vast numbers of them into the desired form.", "Each individual user gesture was plotted and normalised into a set of points. The digital “paint brush” then steps over each point on a gesture path, stippling circles of varying size along and across the points throughout the path. Using noise and randomness, the stippling starts to create highly varied and unique looking brush strokes for each gesture.", 'Progression of the path adjustment, brush texture, and colour mixing can be seen in <a href="/piece/progress-report">Progress Report</a>.'],
                    inspect: yi(be())
                }
            }, {
                title: "Still Thinking",
                slug: "still-thinking",
                aspect: 1.414,
                previews: ki(Be()),
                narrative: {
                    headline: "Real-time and for-print",
                    description: ["A generative branding device created for Thinkingbox, this piece required 2 components: a real-time interactive graphics system and a print-resolution exporter.", "The real-time piece is an integral part of the Thinkingbox website, running and shifting constantly in the background. Users can interact directly with the piece using their cursor, adjusting the colour, texture and shift of the waves in real-time, across all devices.", "The print exporter steps through the same algorithm at 300dpi resolution and up to B0 in size (1414x1000mm), rendering razor sharp output for use in print and traditional branding materials like business cards and print advertising."]
                },
                showcase: ki(Ye()),
                process: {
                    headline: "Rendering over time",
                    description: ["The real-time requirements of this piece demanded a highly performant solution; something which could constantly run in a full viewport WebGL canvas without slowing down the experience.", "In order to achieve a large amount of fine strand detail, a series of points are moved and then drawn each frame, without clearing previous canvas content. These points act as the “heads” of the strands, growing in length over the course of a series of frames. This allows the canvas to be completely filled with fine detail, while each frame has relatively low demands: rendering a series of instanced planes, moved in small increments per frame."],
                    inspect: yi(Fe())
                }
            }, {
                title: "Progress Report",
                slug: "progress-report",
                aspect: 1e3 / 1414,
                previews: ki(Ut()),
                narrative: {
                    headline: "Finding the right mix",
                    description: ['Progress Report provides a glimpse of the process in creating <a href="/piece/piece-18">Piece 18</a>.', "Normalisation of paths, brush texture, and mixing of “paint” colour were all critical elements of this project. When I first arrived at these red and blue colour-mix tests I was enamoured with the result. These were some of my absolute favourite outputs of the generative system, and live alongside the final piece as equally beautiful in my eyes."]
                },
                showcase: ki(Nt()),
                process: {
                    headline: "Primary",
                    description: ["Achieving a colour mixing effect which resembles real-world wet paint is a tough ask.", "Once satisfied with the texture of the brush strokes, the next major hurdle was having paint colours mix together. Before each gesture is drawn, the algorithm steps along its path, reading and storing what colours have already been painted onto the canvas. The gesture is then drawn, mixing in the stored colour values over pickup and decay ranges. With a full colour spectrum, the colours eventually mix toward a medium brown, just as I would expect with real paint."],
                    inspect: yi(zt())
                }
            }, {
                title: "Rust",
                slug: "rust",
                aspect: 1.414,
                previews: ki(pn()),
                narrative: {
                    headline: "Foreign surfaces",
                    description: ["Rust explores the uncharted space of foreign worlds that emerge from deeply nested noise functions.", "Resembling satellite imagery of sci-fi fantasy, the patterns formed resemble topography and wild weather systems. Dosed with fantastical colour, the images appear highly alien, glimpses of a far away cosmos, waiting to be explored."]
                },
                showcase: ki(fn()),
                process: {
                    headline: "Deep nesting",
                    description: ["Fractal Brownian Motion (FBM) is a technique of nesting octaves of noise to create highly detailed and organic noise curves. Being fractal in nature, these curves provide a bridge for us to mimic some of the natural fractal phenomena seen in our world, like erosion patterns.", "By heavily nesting FBM functions within each other, the noise generated becomes incredibly unique, unpredictable and high in contrast.", "In Rust the noise is pushed beyond being a tool for composition, instead it is a vehicle for chaotic creation."],
                    inspect: yi(gn())
                }
            }, {
                title: "Orbiting",
                slug: "orbiting",
                aspect: 1e3 / 1414,
                previews: ki(Nn()),
                narrative: {
                    headline: "Scribbling with glass",
                    description: ["What started out as an exploration of orbiting a point in 3D space resulted in this piece. My initial goal was simply to understand how to place a series of points in a spiral along the vertical axis.", "This is a 2D rendering environment, the Z position of each point is made apparent by reducing the size and transparency of the points along the path. Noise is introduced to transform the result from a rigid spiral into a fluid looking scribble down the canvas.", "Colour shifting, transparency and simple reflections are applied as it’s drawn, providing an effect that hints at hand-blown stained glass, including some physical imperfection."]
                },
                showcase: ki(zn()),
                process: {
                    headline: "Polishing pixels",
                    description: ["To add a smooth, shiny, polished surface to the scribble, highly transparent circles are drawn in series along the entire path. The combination of many circles, slowly changing in radius and colour is what provides the transparent glass-like effect, getting seemingly darker in areas where the glass is thicker. A final reflective layer is added to the top half of each circle to add the shiny depth that completes the effect."],
                    inspect: yi(Bn())
                }
            }, {
                title: "Structures",
                slug: "structures",
                aspect: 1e3 / 1414,
                previews: ki(pi()),
                narrative: {
                    headline: "Isometric Aztecs",
                    description: ["Structures is one of my earlier attempts at creating art in the browser. It started as a random arrangement of triangles, aligned to the top, centre and bottom of the canvas. By applying blending to the triangles, an interesting and abstract light refraction effect emerged within, like a series of angled mirrors. The triangles were swapped with 2D prisms, adding additional depth and a pseudo isometric 3D feel to the final output."]
                },
                showcase: ki(fi()),
                process: {
                    headline: "The final blend",
                    description: ["Blending modes are commonplace in computer graphics software, determining how layers of colour interact; in this case, how each new prism appears on top of previously drawn prisms.", "This interaction of light and dark allows unexpected results to emerge. The blending creates impossible architectural depth, while still being recognisable by human eyes as structural and physical."],
                    inspect: yi(gi())
                }
            }];
        t["a"] = xi
    },
    c42b: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-2.5ea464f7.png"
    },
    c4fc: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-4.fa744268.png"
    },
    c77a: function(e, t, n) {
        e.exports = n.p + "img/Terraform-Inspect-Large.52498e0b.png"
    },
    c907: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-3.de6e126c.png"
    },
    c951: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-3.13167003.png"
    },
    c95b: function(e, t, n) {
        e.exports = n.p + "img/Orbiting-Inspect-Large.d4dcd1bf.png"
    },
    c987: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-2.30e87eb2.png"
    },
    c994: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-4-mobile.a65688c6.png"
    },
    cae4: function(e, t, n) {
        e.exports = n.p + "img/Rust-1.5999fde8.png"
    },
    ccee: function(e, t, n) {},
    cdc4: function(e, t, n) {
        "use strict";
        t["a"] = {
            HOME: "home",
            PIECE: "piece",
            ABOUT: "about",
            LEGAL: "legal",
            NOTFOUND: "notfound"
        }
    },
    cea2: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-5-mobile.3e76bd6b.png"
    },
    d0a3: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-3.a3ad19dd.png"
    },
    d26f: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-4.db95f404.png"
    },
    d444: function(e, t, n) {
        e.exports = n.p + "img/Structures-Inspect-Large.10280d20.png"
    },
    d6be: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-Inspect-Medium.85ad6427.png"
    },
    d77b: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-4-mobile.4c8df0dc.png"
    },
    d7d5: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-1-mobile.8f366c5f.png"
    },
    e350: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-Inspect-Medium.5d5a9bdc.png"
    },
    e56c: function(e, t, n) {
        e.exports = n.p + "img/Rust-1-mobile.610d9dc1.png"
    },
    e7f8: function(e, t, n) {
        e.exports = n.p + "img/Progress-Report-Process-4-mobile.8e0daa61.png"
    },
    ecc7: function(e, t, n) {
        e.exports = n.p + "img/Terraform-1-mobile.c5df0020.png"
    },
    ef56: function(e, t, n) {
        e.exports = n.p + "img/Structures-1-mobile.a5804585.png"
    },
    f14c: function(e, t, n) {},
    f201: function(e, t, n) {
        e.exports = n.p + "img/Terraform-2.da56009e.png"
    },
    f487: function(e, t, n) {
        e.exports = n.p + "img/Terraform-1.c83da64f.png"
    },
    f4eb: function(e, t, n) {
        e.exports = n.p + "img/Terraform-6-mobile.9499618a.png"
    },
    f5b6: function(e, t, n) {
        e.exports = n.p + "img/Rust-Inspect-Medium.ca4cbe1a.png"
    },
    f83a: function(e, t, n) {
        e.exports = n.p + "img/Terraform-5.af648995.png"
    },
    fabf: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-2-mobile.71107f39.png"
    },
    fc8a: function(e, t, n) {
        e.exports = n.p + "img/Piece-18-3.c8f5e631.png"
    },
    fd0b: function(e, t, n) {
        e.exports = n.p + "img/Terraform-6.42f03300.png"
    },
    fde2: function(e, t, n) {
        e.exports = n.p + "img/Still-Thinking-4-mobile.f9cd77b8.png"
    },
    fe03: function(e, t, n) {
        e.exports = n.p + "img/Orbiting-Inspect-Small.9a56cd04.png"
    }
});
//# sourceMappingURL=app.f8f77db5.js.map