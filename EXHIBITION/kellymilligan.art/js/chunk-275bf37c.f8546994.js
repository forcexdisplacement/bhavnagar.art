(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-275bf37c"], {
        "15a7": function(e, t, i) {
            "use strict";
            i("c8bc")
        },
        "1b62": function(e, t, i) {
            "use strict";
            i.d(t, "a", (function() {
                return s
            }));
            var s = {
                methods: {
                    getMountedPieceDimensions: function(e, t, i) {
                        var s = 297 / 210,
                            a = Math.max(e / s, .7),
                            n = (50 + 50 * Math.max(1 - t / 1440, 0)) * a,
                            o = n / e,
                            r = o / 100 * t,
                            c = 120,
                            l = Math.max(r / (i - 2 * c), 1),
                            u = n / l,
                            p = o / l;
                        return {
                            w: u,
                            h: p,
                            width: "".concat(u, "vw"),
                            height: "".concat(p, "vw"),
                            left: "".concat(-.5 * u, "vw"),
                            top: "".concat(-.5 * p, "vw")
                        }
                    }
                }
            }
        },
        "2e9c": function(e, t, i) {
            "use strict";
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "MountedPieceShadow"
                    }, [e.isSafari ? i("canvas", {
                        ref: "canvas",
                        style: {
                            filter: "blur(" + e.cssBlurSize + "px)"
                        }
                    }) : i("canvas", {
                        ref: "canvas"
                    })])
                },
                a = [],
                n = (i("4de4"), i("43ee")),
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
                            return Object(r["a"])(Math.round(n["a"].latest.width / 1920 * 15), 8, 20)
                        },
                        cssBlurSize: function() {
                            return this.isSafari ? this.blurSize : 0
                        }
                    },
                    mounted: function() {
                        var e = this;
                        this.resizeId = n["a"].on("resize", (function() {
                            return e.updateCanvas()
                        })), setTimeout(this.updateCanvas, 100)
                    },
                    beforeDestroy: function() {
                        n["a"].off(this.resizeId)
                    },
                    updated: function() {
                        this.updateCanvas()
                    },
                    methods: {
                        updateCanvas: function() {
                            var e = 1.2,
                                t = this.$el,
                                i = t.offsetWidth,
                                s = t.offsetHeight,
                                a = e * i,
                                n = e * s,
                                o = this.$refs.canvas.getContext("2d");
                            o.canvas.width = a, o.canvas.height = n, o.clearRect(0, 0, o.canvas.width, o.canvas.height), o.save(), o.translate((a - i) / 2, (n - s) / 2), o.fillStyle = "#2c3e50", this.isSafari || (o.filter = "blur(".concat(this.blurSize, "px)")), o.fillRect(0, 0, i, s), o.restore()
                        }
                    }
                },
                l = c,
                u = (i("2fa9"), i("2877")),
                p = Object(u["a"])(l, s, a, !1, null, "2a1738d6", null);
            t["a"] = p.exports
        },
        "2fa9": function(e, t, i) {
            "use strict";
            i("7cc0")
        },
        "48ad": function(e, t, i) {
            "use strict";
            i.r(t);
            var s = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("section", {
                        staticClass: "Piece",
                        style: {
                            paddingTop: e.sectionPaddingTop
                        }
                    }, [i("PieceTitle", {
                        attrs: {
                            title: e.piece.title,
                            isNavigatingToNext: e.isNavigatingToNext
                        }
                    }), i("figure", {
                        staticClass: "mounted first",
                        style: {
                            marginBottom: e.firstMarginBottom
                        }
                    }, [i("div", {
                        staticClass: "wall"
                    }, [i("transition", {
                        attrs: {
                            name: "pan"
                        },
                        on: {
                            "after-leave": e.onLeaveComplete
                        }
                    }, [i("div", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: e.isActiveOnStage,
                            expression: "isActiveOnStage"
                        }],
                        staticClass: "group",
                        class: {
                            "is-shallow": e.$store.state.isScrollShallow
                        },
                        style: e.getMountedPieceDimensions(e.piece.aspect, e.viewportWidth, e.viewportHeight)
                    }, [i("img", e._b({
                        staticClass: "piece",
                        attrs: {
                            alt: e.piece.title + " showcase image 1"
                        }
                    }, "img", e.piece.previews[0].attr, !1)), i("MountedPieceShadow")], 1)])], 1)]), e.piece.narrative ? i("article", {
                        staticClass: "narrative"
                    }, [i("div", {
                        staticClass: "centered"
                    }, [i("h2", [e._v(e._s(e.piece.narrative.headline))]), i("p", e._l(e.piece.narrative.description, (function(t, s) {
                        return i("span", {
                            key: s,
                            domProps: {
                                innerHTML: e._s(t)
                            }
                        })
                    })), 0)]), e.piece.showcase ? i("div", {
                        staticClass: "showcase"
                    }, e._l(e.piece.showcase, (function(t, s) {
                        return i("figure", {
                            key: s,
                            staticClass: "mounted",
                            style: {
                                height: e.getMountedPieceDimensions(t.aspect || e.piece.aspect, e.viewportWidth, e.viewportHeight).height
                            }
                        }, [i("div", {
                            staticClass: "wall"
                        }, [i("div", {
                            staticClass: "group",
                            style: e.getMountedPieceDimensions(t.aspect || e.piece.aspect, e.viewportWidth, e.viewportHeight)
                        }, [i("img", e._b({
                            staticClass: "piece",
                            attrs: {
                                alt: e.piece.title + " showcase image " + (s + 2),
                                tabindex: "0"
                            }
                        }, "img", t.attr, !1)), i("MountedPieceShadow")], 1)])])
                    })), 0) : e._e()]) : e._e(), e.piece.process ? i("article", {
                        staticClass: "process"
                    }, [i("div", {
                        staticClass: "centered"
                    }, [i("h3", [e._v(e._s(e.piece.process.headline))]), i("p", e._l(e.piece.process.description, (function(t, s) {
                        return i("span", {
                            key: s,
                            domProps: {
                                innerHTML: e._s(t)
                            }
                        })
                    })), 0)]), i("figure", {
                        staticClass: "inspect"
                    }, [e.$store.state.isMobile ? i("img", e._b({
                        attrs: {
                            alt: e.piece.title + " close-up image",
                            tabindex: "0"
                        }
                    }, "img", e.piece.process.inspect.attrPortrait, !1)) : i("img", e._b({
                        attrs: {
                            alt: e.piece.title + " close-up image",
                            tabindex: "0"
                        }
                    }, "img", e.piece.process.inspect.attr, !1))])]) : e._e(), e.piece.sales ? i("article", {
                        staticClass: "sales"
                    }, [i("div", {
                        staticClass: "centered"
                    }, [i("h3", [e._v("Available for purchase")]), i("p", e._l(e.piece.sales.pitch, (function(t, s) {
                        return i("span", {
                            key: s
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0), e._l(e.piece.sales.specimens, (function(t, s) {
                        return i("figure", {
                            key: s,
                            staticClass: "mounted",
                            style: {
                                height: e.getMountedPieceDimensions(t.aspect || e.piece.aspect, e.viewportWidth, e.viewportHeight).height
                            }
                        }, [i("div", {
                            staticClass: "wall"
                        }, [i("div", {
                            staticClass: "group",
                            style: e.getMountedPieceDimensions(t.aspect || e.piece.aspect, e.viewportWidth, e.viewportHeight)
                        }, [i("img", e._b({
                            staticClass: "piece",
                            attrs: {
                                alt: e.piece.title + " image for sale " + (s + 1),
                                tabindex: "0"
                            }
                        }, "img", t.attr, !1)), i("MountedPieceShadow")], 1)])])
                    })), i("hr"), i("div", {
                        staticClass: "row"
                    }, [i("div", {
                        staticClass: "printing"
                    }, [i("h5", [e._v("Printing")]), i("ul", e._l(e.piece.sales.specs.printing, (function(t, s) {
                        return i("li", {
                            key: s
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0)]), i("hr", {
                        staticClass: "conditional"
                    }), i("div", {
                        staticClass: "paper"
                    }, [i("h5", [e._v("Paper")]), i("ul", e._l(e.piece.sales.specs.paper, (function(t, s) {
                        return i("li", {
                            key: s
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0)])]), i("hr"), i("div", {
                        staticClass: "row"
                    }, [i("div", {
                        staticClass: "dimensions"
                    }, [i("h5", [e._v("Size")]), i("ul", e._l(e.piece.sales.specs.dimensions, (function(t, s) {
                        return i("li", {
                            key: s
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0)]), i("hr", {
                        staticClass: "conditional"
                    }), i("div", {
                        staticClass: "price"
                    }, [i("h4", [e._v(e._s(e.piece.sales.specs.price[0])), i("sub", [e._v("NZD")])]), i("ul", e._l(e.piece.sales.specs.price.slice(1), (function(t, s) {
                        return i("li", {
                            key: s
                        }, [e._v(" " + e._s(t) + " ")])
                    })), 0)])]), i("hr"), e._m(0)], 2)]) : e._e(), i("NavigationFooter", {
                        attrs: {
                            slug: e.slug,
                            onNavigate: e.onFooterNavigate
                        }
                    })], 1)
                },
                a = [function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("p", {
                        staticClass: "footnotes"
                    }, [e._v(" Global international courier delivery is available."), i("br"), e._v(" Enquire at "), i("a", {
                        attrs: {
                            href: "mailto:kellymilligan.art@gmail.com",
                            target: "_blank"
                        }
                    }, [e._v("kellymilligan.art@gmail.com")]), e._v(" to browse available editions. ")])
                }],
                n = (i("4de4"), i("99af"), i("d3b7"), i("b0c0"), i("a4cb")),
                o = i("cdc4"),
                r = i("c3f8"),
                c = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "PieceTitle"
                    }, [i("transition", {
                        attrs: {
                            name: "title"
                        },
                        on: {
                            "after-leave": e.onLeaveComplete
                        }
                    }, [e.isActiveOnStage ? i("h1", {
                        class: {
                            "is-shallow": e.$store.state.isScrollShallow
                        }
                    }, [i("span", [e._v(e._s(e.title))])]) : e._e()])], 1)
                },
                l = [],
                u = {
                    name: "PieceTitle",
                    props: {
                        title: {
                            type: String,
                            required: !0
                        },
                        isNavigatingToNext: {
                            type: Boolean,
                            required: !0
                        }
                    },
                    components: {},
                    data: function() {
                        return {
                            isFirefox: n["a"](),
                            isSafari: n["d"](),
                            onLeaveComplete: function() {}
                        }
                    },
                    methods: {
                        stageLeave: function() {
                            var e = this,
                                t = new Promise((function(t) {
                                    e.onLeaveComplete = t
                                }));
                            return this.$nextTick((function() {
                                e.$route.name !== o["a"].ABOUT && e.$route.name !== o["a"].LEGAL || e.onLeaveComplete(), !e.isFirefox && !e.isSafari || e.$route.name !== o["a"].HOME || e.$store.state.isScrollShallow || setTimeout((function() {
                                    return e.onLeaveComplete()
                                }), 700), e.isNavigatingToNext && setTimeout((function() {
                                    return e.onLeaveComplete()
                                }), 800)
                            })), t
                        }
                    }
                },
                p = u,
                v = (i("15a7"), i("2877")),
                h = Object(v["a"])(p, c, l, !1, null, "a4b111ae", null),
                d = h.exports,
                f = i("2e9c"),
                g = function() {
                    var e = this,
                        t = e.$createElement,
                        i = e._self._c || t;
                    return i("div", {
                        staticClass: "NavigationFooter"
                    }, [i("div", [i("p", [i("span", [e._v("Next")]), i("a", {
                        class: {
                            "is-animating-hover": e.isHoverAnimationRunning
                        },
                        attrs: {
                            href: e.navigation.href
                        },
                        on: {
                            click: function(t) {
                                return t.preventDefault(), e.onClick.apply(null, arguments)
                            },
                            mouseenter: e.onMouseEnter,
                            touchstart: e.onMouseEnter
                        }
                    }, [i("strong", [e._v(e._s(e.navigation.title))])])])])])
                },
                m = [],
                w = {
                    name: "NavigationFooter",
                    props: {
                        slug: {
                            type: String,
                            required: !0
                        },
                        onNavigate: {
                            type: Function
                        }
                    },
                    components: {},
                    data: function() {
                        return {
                            isHoverAnimationRunning: !1,
                            hoverAnimationTimer: null
                        }
                    },
                    computed: {
                        navigation: function() {
                            var e = Object(r["b"])(this.slug);
                            return {
                                title: e.title,
                                slug: e.slug,
                                href: "/".concat(o["a"].PIECE, "/").concat(e.slug)
                            }
                        }
                    },
                    methods: {
                        onClick: function() {
                            this.navigateNext()
                        },
                        onMouseEnter: function() {
                            var e = this;
                            this.isHoverAnimationRunning || (this.isHoverAnimationRunning = !0, clearTimeout(this.hoverAnimationTimer), this.hoverAnimationTimer = setTimeout((function() {
                                e.isHoverAnimationRunning = !1
                            }), 800))
                        },
                        navigateNext: function() {
                            this.onNavigate(), this.$router.push({
                                name: o["a"].PIECE,
                                params: {
                                    slug: this.navigation.slug
                                }
                            })
                        }
                    }
                },
                _ = w,
                C = (i("f060"), Object(v["a"])(_, g, m, !1, null, "5a9509be", null)),
                b = C.exports,
                S = i("1b62"),
                T = {
                    name: "Piece",
                    mixins: [S["a"]],
                    components: {
                        PieceTitle: d,
                        MountedPieceShadow: f["a"],
                        NavigationFooter: b
                    },
                    props: {
                        slug: {
                            type: String,
                            required: !0
                        },
                        scrollToTop: {
                            type: Function,
                            required: !0
                        }
                    },
                    data: function() {
                        var e = this;
                        return {
                            isFirefox: n["a"](),
                            isSafari: n["d"](),
                            piece: r["a"].filter((function(t) {
                                return t.slug === e.slug
                            }))[0],
                            onLeaveComplete: function() {},
                            isNavigatingToNext: !1,
                            stageWarningsSnoozed: !0
                        }
                    },
                    computed: {
                        viewportWidth: function() {
                            return this.$store.state.viewportWidth
                        },
                        viewportHeight: function() {
                            return this.$store.state.viewportHeight
                        },
                        sectionPaddingTop: function() {
                            var e = this.getMountedPieceDimensions(this.piece.aspect, this.viewportWidth, this.viewportHeight),
                                t = e.h,
                                i = this.$store.state.isMobile ? "var( --vhAtInit )" : "100vh";
                            return "calc( ( ".concat(i, " ) + ").concat(t / 2, "vw )")
                        },
                        firstMarginBottom: function() {
                            var e = this.getMountedPieceDimensions(this.piece.aspect, this.viewportWidth, this.viewportHeight),
                                t = e.height,
                                i = this.$store.state.isMobile ? "var( --vhAtInit )" : "100vh";
                            return "calc( ( ".concat(i, " ) - ( ").concat(t, " ) )")
                        }
                    },
                    created: function() {
                        this.$store.commit("setActiveGroupIndexBySlug", this.piece.slug)
                    },
                    methods: {
                        stageLeave: function() {
                            var e = this,
                                t = new Promise((function(t) {
                                    e.onLeaveComplete = t
                                }));
                            if (this.$route.name !== o["a"].ABOUT && this.$route.name !== o["a"].LEGAL) return !this.isFirefox && !this.isSafari || this.$route.name !== o["a"].HOME || this.$store.state.isScrollShallow || setTimeout((function() {
                                return e.onLeaveComplete()
                            }), 700), this.scrollToTop(!1, !this.isNavigatingToNext), this.isNavigatingToNext && setTimeout((function() {
                                return e.onLeaveComplete()
                            }), 800), t;
                            this.onLeaveComplete()
                        },
                        stageAfterLeave: function() {
                            var e = this;
                            this.isNavigatingToNext && this.$route.name === o["a"].PIECE && setTimeout((function() {
                                return e.$store.commit("setScrollShallow", !0)
                            }), 100), this.isNavigatingToNext = !1
                        },
                        stageAfterEnter: function() {
                            var e = this;
                            this.$store.commit("setScrollLocked", !1), setTimeout((function() {
                                return e.$store.commit("setScrollShallow", !0)
                            }), 0), setTimeout((function() {
                                e.$store.commit("setScrollLocked", !1)
                            }), 0)
                        },
                        onFooterNavigate: function() {
                            this.isNavigatingToNext = !0
                        }
                    }
                },
                x = T,
                N = (i("834d"), i("75c4"), Object(v["a"])(x, s, a, !1, null, "16f49ca3", null));
            t["default"] = N.exports
        },
        "75c4": function(e, t, i) {
            "use strict";
            i("f280")
        },
        "7cc0": function(e, t, i) {},
        "834d": function(e, t, i) {
            "use strict";
            i("b49c")
        },
        b49c: function(e, t, i) {},
        c8bc: function(e, t, i) {},
        d740: function(e, t, i) {},
        f060: function(e, t, i) {
            "use strict";
            i("d740")
        },
        f280: function(e, t, i) {}
    }
]);
//# sourceMappingURL=chunk-275bf37c.f8546994.js.map