(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-0915263e"], {
        "1b62": function(t, e, i) {
            "use strict";
            i.d(e, "a", (function() {
                return n
            }));
            var n = {
                methods: {
                    getMountedPieceDimensions: function(t, e, i) {
                        var n = 297 / 210,
                            s = Math.max(t / n, .7),
                            a = (50 + 50 * Math.max(1 - e / 1440, 0)) * s,
                            o = a / t,
                            r = o / 100 * e,
                            c = 120,
                            l = Math.max(r / (i - 2 * c), 1),
                            h = a / l,
                            u = o / l;
                        return {
                            w: h,
                            h: u,
                            width: "".concat(h, "vw"),
                            height: "".concat(u, "vw"),
                            left: "".concat(-.5 * h, "vw"),
                            top: "".concat(-.5 * u, "vw")
                        }
                    }
                }
            }
        },
        "2e9c": function(t, e, i) {
            "use strict";
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "MountedPieceShadow"
                    }, [t.isSafari ? i("canvas", {
                        ref: "canvas",
                        style: {
                            filter: "blur(" + t.cssBlurSize + "px)"
                        }
                    }) : i("canvas", {
                        ref: "canvas"
                    })])
                },
                s = [],
                a = (i("4de4"), i("43ee")),
                o = i("a4cb"),
                r = i("974a"),
                c = {
                    name: "MountedPieceShadow",
                    props: {},
                    components: {},
                    data: function() {
                        return {
                            isSafari: o["d"](),
                            resizeId: null
                        }
                    },
                    computed: {
                        blurSize: function() {
                            return Object(r["a"])(Math.round(a["a"].latest.width / 1920 * 15), 8, 20)
                        },
                        cssBlurSize: function() {
                            return this.isSafari ? this.blurSize : 0
                        }
                    },
                    mounted: function() {
                        var t = this;
                        this.resizeId = a["a"].on("resize", (function() {
                            return t.updateCanvas()
                        })), setTimeout(this.updateCanvas, 100)
                    },
                    beforeDestroy: function() {
                        a["a"].off(this.resizeId)
                    },
                    updated: function() {
                        this.updateCanvas()
                    },
                    methods: {
                        updateCanvas: function() {
                            var t = 1.2,
                                e = this.$el,
                                i = e.offsetWidth,
                                n = e.offsetHeight,
                                s = t * i,
                                a = t * n,
                                o = this.$refs.canvas.getContext("2d");
                            o.canvas.width = s, o.canvas.height = a, o.clearRect(0, 0, o.canvas.width, o.canvas.height), o.save(), o.translate((s - i) / 2, (a - n) / 2), o.fillStyle = "#2c3e50", this.isSafari || (o.filter = "blur(".concat(this.blurSize, "px)")), o.fillRect(0, 0, i, n), o.restore()
                        }
                    }
                },
                l = c,
                h = (i("2fa9"), i("2877")),
                u = Object(h["a"])(l, n, s, !1, null, "2a1738d6", null);
            e["a"] = u.exports
        },
        "2fa9": function(t, e, i) {
            "use strict";
            i("7cc0")
        },
        "7cc0": function(t, e, i) {},
        "80b7": function(t, e, i) {
            "use strict";
            i("a22b")
        },
        a22b: function(t, e, i) {},
        bb51: function(t, e, i) {
            "use strict";
            i.r(e);
            var n = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("section", {
                        staticClass: "Home"
                    }, [i("Featured", {
                        attrs: {
                            isMountingFromPreloader: t.isMountingFromPreloader
                        }
                    })], 1)
                },
                s = [],
                a = function() {
                    var t = this,
                        e = t.$createElement,
                        i = t._self._c || e;
                    return i("div", {
                        staticClass: "Featured",
                        on: {
                            keyup: [function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "left", 37, e.key, ["Left", "ArrowLeft"]) || "button" in e && 0 !== e.button ? null : t.onKeyUpLeft.apply(null, arguments)
                            }, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "right", 39, e.key, ["Right", "ArrowRight"]) || "button" in e && 2 !== e.button ? null : t.onKeyUpRight.apply(null, arguments)
                            }, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "up", 38, e.key, ["Up", "ArrowUp"]) ? null : t.onKeyUpUp.apply(null, arguments)
                            }, function(e) {
                                return !e.type.indexOf("key") && t._k(e.keyCode, "down", 40, e.key, ["Down", "ArrowDown"]) ? null : t.onKeyUpDown.apply(null, arguments)
                            }],
                            touchmove: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [i("div", {
                        staticClass: "placement"
                    }, [i("div", {
                        staticClass: "collection"
                    }, t._l(t.collection, (function(e, n) {
                        return i("div", {
                            key: e.title,
                            ref: "group",
                            refInFor: !0,
                            staticClass: "group",
                            style: t.getMountedPieceDimensions(e.aspect, t.$store.state.viewportWidth, t.$store.state.viewportHeight)
                        }, [i("a", {
                            attrs: {
                                href: t.pieceRoute + e.slug,
                                tabindex: "-1"
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.onGroupClick(n)
                                },
                                mousedown: function(t) {
                                    t.preventDefault()
                                },
                                mousemove: function(t) {
                                    t.preventDefault()
                                },
                                mouseup: function(e) {
                                    return e.preventDefault(), t.onGroupMouseUp.apply(null, arguments)
                                }
                            }
                        }, t._l(e.previews, (function(n, s) {
                            return i("img", t._b({
                                key: s,
                                staticClass: "piece",
                                class: {
                                    "is-active": s === e.activePreviewIndex
                                },
                                attrs: {
                                    alt: e.title + " preview image " + (s + 1)
                                }
                            }, "img", n.attr, !1))
                        })), 0), i("MountedPieceShadow", {
                            ref: "shadow",
                            refInFor: !0
                        })], 1)
                    })), 0), i("transition-group", {
                        staticClass: "titles",
                        attrs: {
                            tag: "div",
                            mode: "out-in",
                            name: "title"
                        }
                    }, t._l(t.collection, (function(e, n) {
                        return i("h2", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: n === t.activeGroupIndex && t.isMounted,
                                expression: "index === activeGroupIndex && isMounted"
                            }],
                            key: e.title
                        }, [i("a", {
                            attrs: {
                                href: t.pieceRoute + e.slug
                            },
                            on: {
                                click: function(e) {
                                    return e.preventDefault(), t.onGroupClick(n)
                                },
                                mousedown: function(t) {
                                    t.preventDefault()
                                },
                                mousemove: function(t) {
                                    t.preventDefault()
                                },
                                mouseup: function(e) {
                                    return e.preventDefault(), t.onGroupMouseUp.apply(null, arguments)
                                }
                            }
                        }, [t._v(" " + t._s(e.title) + " ")])])
                    })), 0)], 1), i("div", {
                        staticClass: "hint"
                    }, [i("transition-group", {
                        attrs: {
                            tag: "p",
                            mode: "out-in",
                            name: "hint"
                        }
                    }, [i("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 1 === t.hintLineIndex,
                            expression: "hintLineIndex === 1"
                        }],
                        key: "hint-scroll"
                    }, [t._v(t._s(t.hintActionText))]), i("span", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: 2 === t.hintLineIndex,
                            expression: "hintLineIndex === 2"
                        }],
                        key: "hint-select"
                    }, [t._v("Select to inspect")])])], 1)])
                },
                o = [],
                r = i("5530"),
                c = (i("d81d"), i("159b"), i("99af"), i("43ee")),
                l = i("5194"),
                h = i("48e4"),
                u = i("a4cb"),
                d = i("cdc4"),
                p = i("c3f8"),
                f = i("1b62"),
                v = i("974a");

            function m(t) {
                return t * t * t
            }
            var g = i("2e9c"),
                w = 1.5,
                b = 2,
                y = .8,
                x = 15,
                I = {
                    name: "Featured",
                    mixins: [f["a"]],
                    props: {
                        isMountingFromPreloader: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    components: {
                        MountedPieceShadow: g["a"]
                    },
                    data: function() {
                        return {
                            isSafari: u["d"](),
                            isMounted: !1,
                            collection: p["a"].map((function(t, e) {
                                return Object(r["a"])(Object(r["a"])({}, t), {}, {
                                    activePreviewIndex: 0,
                                    visibility: 0,
                                    x: 0
                                })
                            })),
                            activeGroupIndex: this.$store.state.activeGroupIndex,
                            willNavigate: !1,
                            willIgnoreClick: !1,
                            hintLineIndex: 0
                        }
                    },
                    computed: {
                        pieceRoute: function() {
                            return "/".concat(d["a"].PIECE, "/")
                        },
                        hintActionText: function() {
                            var t = this.$store.state.isMobile ? "Swipe" : "Scroll";
                            return "".concat(t, " to explore")
                        }
                    },
                    mounted: function() {
                        this.scrollTarget = 0, this.scrollSmoothed = 0, this.dragTarget = 0, this.dragSmoothed = 0, this.prevShiftAmount = 0, this.shiftAmount = 0, this.shiftAmountTarget = 0, this.initialShiftAmount = this.activeGroupIndex * c["a"].latest.width, this.initialEntryOffset = this.isMountingFromPreloader ? 200 : 0, this.advanceTimeout = 0, c["a"].refresh(), this.isMounted = !0, this.isSafari && document.documentElement.classList.add("is-safari-scroll-locked"), this.hintingStartTimer = setTimeout(this.startHinting, 2100)
                    },
                    activated: function() {
                        this.tickId = l["a"].on(this.onTick), this.bindKeyNavigation()
                    },
                    deactivated: function() {
                        l["a"].off(this.tickId), this.unbindKeyNavigation()
                    },
                    beforeDestroy: function() {
                        clearTimeout(this.hintingStartTimer), this.stopHinting(), l["a"].off(this.tickId), this.isSafari && document.documentElement.classList.remove("is-safari-scroll-locked")
                    },
                    methods: {
                        advanceGroup: function(t) {
                            this.collection[t].activePreviewIndex = this.willNavigate || this.collection[t].activePreviewIndex >= this.collection[t].previews.length - 1 ? 0 : this.collection[t].activePreviewIndex += 1
                        },
                        onTick: function(t) {
                            var e = t.delta,
                                i = (t.elapsed, e / (1e3 / 60));
                            this.prevShiftAmount = this.shiftAmount, this.updatePositions(i);
                            var n = Math.abs(this.shiftAmount - this.prevShiftAmount),
                                s = 800 / Object(v["a"])(Math.pow(n, .5), 1, 8);
                            this.updateActivePreview(e, s, this.activeGroupIndex)
                        },
                        updatePositions: function(t) {
                            var e = this,
                                i = c["a"].latest,
                                n = i.width,
                                s = i.height,
                                a = h["a"].latest.data,
                                o = a.isDown,
                                r = a.speed,
                                l = a.wheel,
                                u = this.$store.state.isMobile,
                                d = this.collection.length,
                                p = d * n,
                                f = this.dragTarget,
                                g = this.scrollTarget;
                            this.initialEntryOffset += .05 * -this.initialEntryOffset, this.initialEntryOffset = this.initialEntryOffset < 1e-4 ? 0 : this.initialEntryOffset, this.dragTarget += o ? r.x * n * -1 * (u ? b : w) : 0, this.dragSmoothed += .1 * (this.dragTarget - this.dragSmoothed);
                            var x = 200;
                            this.scrollTarget += Object(v["a"])(-1 * l.deltaY + l.deltaX, -x, x) * y * t;
                            var I = u ? .14 : .1;
                            this.scrollSmoothed += (this.scrollTarget - this.scrollSmoothed) * (this.willNavigate ? I : .06), Math.abs(this.dragTarget - this.dragSmoothed) < 1 && Math.abs(this.scrollTarget - this.scrollSmoothed) < 1 ? this.$store.commit("setWheeling", !1) : this.$store.commit("setWheeling", !0), (Math.abs(this.dragTarget - f) > 1 || Math.abs(this.scrollTarget - g) > 1) && (this.willNavigate = !1), this.shiftAmount = Object(v["b"])(this.initialShiftAmount + this.dragSmoothed + this.scrollSmoothed, p), this.shiftAmountTarget = Object(v["b"])(this.initialShiftAmount + this.dragTarget + this.scrollTarget, p), !this.$store.state.hintingHasScrolled && Math.abs(this.dragTarget) + Math.abs(this.scrollTarget) > .5 * n && this.$store.commit("setHintingHasScrolled"), this.$refs.group.forEach((function(t, i) {
                                var a = e.collection[i],
                                    o = e.$refs.shadow[i].$el;
                                a.x = i * n + -1 * e.shiftAmount, a.x <= -1 * n && (a.x += p);
                                var r = (n - a.x) / n,
                                    c = Object(v["c"])(1 - r);
                                a.visibility = 1 - Object(v["a"])(Math.abs(1 - r), 0, 1), a.visibility > .5 && e.updateActiveGroup(i);
                                var l = 0 === i ? e.initialEntryOffset : 0,
                                    h = a.x,
                                    u = .013 * s * m(Math.abs(1 - a.visibility)) + l,
                                    d = 10 * m(Math.abs(1 - a.visibility)) * c;
                                t.style.transform = "translate3d( ".concat(h, "px, ").concat(u, "vh, 0 ) rotate( ").concat(d, "deg ) scale(").concat(.995 + .005 * (1 - a.visibility), ")");
                                var f = .667 + -5 * Math.abs(1 - a.visibility) * c,
                                    g = 1.5 + 5 * m(Math.abs(1 - a.visibility)),
                                    w = .25 * d,
                                    b = m(Math.abs(1 - a.visibility));
                                o.style.transform = "translate3d( ".concat(f, "vw, ").concat(g, "vw, 0 ) rotate( ").concat(w, "deg ) scale(").concat(.995 + .005 * (1 - a.visibility), ")"), o.style.opacity = .13 + .07 * b
                            }));
                            var T = u ? 4e-4 : 2e-4;
                            this.willNavigate && this.collection[this.activeGroupIndex].visibility > 1 - T && (this.$store.commit("setHintingHasSelected"), this.routeToPiece())
                        },
                        updateActiveGroup: function(t) {
                            this.activeGroupIndex = t
                        },
                        updateActivePreview: function(t, e, i) {
                            this.advanceTimeout += t, this.advanceTimeout >= e && (this.advanceGroup(i), this.advanceTimeout = 0)
                        },
                        onGroupMouseUp: function() {
                            this.willIgnoreClick = Math.abs(h["a"].latest.data.travel.x) > x
                        },
                        onGroupClick: function(t) {
                            this.willIgnoreClick ? this.willIgnoreClick = !1 : (this.jumpToGroup(t), this.willNavigate = !0)
                        },
                        jumpToGroup: function(t) {
                            var e = c["a"].latest.width,
                                i = this.collection.length * e,
                                n = t * e - this.shiftAmountTarget;
                            this.scrollTarget += n < -e ? i + n : n
                        },
                        jumpToNextGroup: function() {
                            var t = c["a"].latest.width;
                            this.scrollTarget += t - Object(v["b"])(this.shiftAmountTarget, t)
                        },
                        jumpToPrevGroup: function() {
                            var t = c["a"].latest.width,
                                e = t - (t - Object(v["b"])(this.shiftAmountTarget, t));
                            this.scrollTarget -= 0 === e ? e + t : e
                        },
                        routeToPiece: function() {
                            this.willNavigate = !1, this.$router.push({
                                name: d["a"].PIECE,
                                params: {
                                    slug: this.collection[this.activeGroupIndex].slug
                                }
                            })
                        },
                        bindKeyNavigation: function() {
                            window.addEventListener("keyup", this.onKeyUp, !1)
                        },
                        unbindKeyNavigation: function() {
                            window.removeEventListener("keyup", this.onKeyUp, !1)
                        },
                        onKeyUp: function(t) {
                            switch (t.which) {
                                case 37:
                                    this.onKeyUpLeft();
                                    break;
                                case 39:
                                    this.onKeyUpRight();
                                    break;
                                case 38:
                                    this.onKeyUpUp();
                                    break;
                                case 40:
                                    this.onKeyUpDown();
                                    break;
                                case 13:
                                    this.onKeyUpEnter();
                                    break
                            }
                        },
                        onKeyUpLeft: function() {
                            this.jumpToPrevGroup()
                        },
                        onKeyUpRight: function() {
                            this.jumpToNextGroup()
                        },
                        onKeyUpUp: function() {
                            this.jumpToPrevGroup()
                        },
                        onKeyUpDown: function() {
                            this.jumpToNextGroup()
                        },
                        onKeyUpEnter: function() {
                            this.jumpToGroup(this.activeGroupIndex), this.willNavigate = !0
                        },
                        startHinting: function() {
                            this.updateHint(), this.hintInterval = setInterval(this.updateHint, 600)
                        },
                        updateHint: function() {
                            var t = this;
                            this.$store.state.hintingHasScrolled && this.$store.state.hintingHasSelected ? this.stopHinting() : this.$store.state.hintingHasScrolled ? this.hintLineIndex = 0 === this.hintLineIndex ? 2 : 0 : this.$store.state.hintingHasSelected ? this.hintLineIndex = 0 === this.hintLineIndex ? 1 : 0 : this.hintLineIndex = 2 === this.hintLineIndex ? 0 : this.hintLineIndex + 1, 0 === this.hintLineIndex && (clearInterval(this.hintInterval), setTimeout((function() {
                                t.hintInterval = setInterval(t.updateHint, 600)
                            }), 1800))
                        },
                        stopHinting: function() {
                            this.hintLineIndex = 0, clearInterval(this.hintInterval)
                        }
                    }
                },
                T = I,
                k = (i("80b7"), i("2877")),
                S = Object(k["a"])(T, a, o, !1, null, "7b5f2e8c", null),
                M = S.exports,
                G = {
                    name: "home",
                    props: {
                        isMountingFromPreloader: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    components: {
                        Featured: M
                    }
                },
                C = G,
                P = Object(k["a"])(C, n, s, !1, null, null, null);
            e["default"] = P.exports
        }
    }
]);
//# sourceMappingURL=chunk-0915263e.3fb7706c.js.map