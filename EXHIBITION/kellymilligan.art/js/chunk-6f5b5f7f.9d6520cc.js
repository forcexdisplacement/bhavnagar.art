(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
    ["chunk-6f5b5f7f"], {
        "1a14": function(t, e, n) {},
        a9d9: function(t, e, n) {
            "use strict";
            n("1a14")
        },
        f820: function(t, e, n) {
            "use strict";
            n.r(e);
            var a = function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("section", {
                        staticClass: "About"
                    }, [n("article", [t._m(0), n("div", {
                        staticClass: "biography"
                    }, [t._m(1), n("div", {
                        staticClass: "secondary"
                    }, [n("hr"), t._m(2), t._m(3), n("p", [t._v("I'm available for commissions, and I have one-of-a-kind single-edition framed prints available for purchase.")]), n("a", {
                        staticClass: "contact",
                        class: {
                            "is-animating-hover": t.isHoverAnimationRunningContact
                        },
                        attrs: {
                            href: "mailto:kellymilligan.art@gmail.com",
                            target: "_blank"
                        },
                        on: {
                            mouseenter: t.onMouseEnterContact,
                            touchstart: t.onMouseEnterContact
                        }
                    }, [n("strong", [t._v("CONTACT")])])]), t._m(4)])])])
                },
                i = [function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("h1", [n("strong", [n("strong", [n("span", {
                        staticClass: "fine"
                    }, [t._v("FINE")]), t._v(" "), n("span", {
                        staticClass: "art"
                    }, [t._v("ART"), n("span", {
                        staticClass: "comma"
                    }, [t._v(",")])])]), n("strong", [n("span", {
                        staticClass: "made"
                    }, [t._v("MADE")])]), n("strong", [n("span", {
                        staticClass: "with"
                    }, [t._v("WITH")]), t._v(" "), n("span", {
                        staticClass: "code"
                    }, [t._v("CODE")]), n("span", {
                        staticClass: "fullstop"
                    })])])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "primary"
                    }, [n("p", [t._v(" I brew a mean beer and cook a fine meal. "), n("br"), t._v(" I love bicycles, birdlife, and malted barley. "), n("br"), t._v(" I proudly call New Zealand home, "), n("br"), t._v(" it's my favourite place. ")])])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", [t._v("With roots in "), n("a", {
                        attrs: {
                            href: "https://kellymilligan.nz",
                            target: "_blank"
                        }
                    }, [n("span", [t._v("front-end and creative development")])]), t._v(" in the browser, I translate practical code knowledge into algorithmic and generative art; for-print, in-motion, and fully interactive.")])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("p", [t._v("I aim for organic texture and bold colour. "), n("br"), t._v("I love results with unexpected form and tech-driven complexity; they push the work beyond what's possible with traditional methods.")])
                }, function() {
                    var t = this,
                        e = t.$createElement,
                        n = t._self._c || e;
                    return n("div", {
                        staticClass: "credit"
                    }, [n("p", [t._v(" Design direction by The Great "), n("a", {
                        attrs: {
                            href: "http://stevemcgeorge.com/",
                            target: "_blank"
                        }
                    }, [n("span", [t._v("Steve McGeorge")])]), t._v(". ")])])
                }],
                o = {
                    name: "About",
                    props: {
                        scrollToTop: {
                            type: Function,
                            required: !0
                        },
                        setScrollTop: {
                            type: Function,
                            required: !0
                        }
                    },
                    components: {},
                    computed: {},
                    data: function() {
                        return {
                            isMounted: !1,
                            isHoverAnimationRunningContact: !1,
                            hoverAnimationTimerContact: null
                        }
                    },
                    beforeRouteLeave: function(t, e, n) {
                        this.setScrollTop(0), n()
                    },
                    mounted: function() {
                        this.scrollToTop(!0), this.isMounted = !0
                    },
                    methods: {
                        stageAfterEnter: function() {
                            var t = this;
                            this.$store.commit("setScrollLocked", !1), setTimeout((function() {
                                t.$store.commit("setScrollLocked", !1)
                            }), 0)
                        },
                        onMouseEnterContact: function() {
                            var t = this;
                            this.isHoverAnimationRunningContact || (this.isHoverAnimationRunningContact = !0, clearTimeout(this.hoverAnimationTimerContact), this.hoverAnimationTimerContact = setTimeout((function() {
                                t.isHoverAnimationRunningContact = !1
                            }), 600))
                        }
                    }
                },
                s = o,
                r = (n("a9d9"), n("2877")),
                c = Object(r["a"])(s, a, i, !1, null, "458a63aa", null);
            e["default"] = c.exports
        }
    }
]);
//# sourceMappingURL=chunk-6f5b5f7f.9d6520cc.js.map