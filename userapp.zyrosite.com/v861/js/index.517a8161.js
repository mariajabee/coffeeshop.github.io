(function(t) {
    function e(e) {
        for (var o, a, s = e[0], c = e[1], l = e[2], d = 0, u = []; d < s.length; d++) a = s[d], Object.prototype.hasOwnProperty.call(n, a) && n[a] && u.push(n[a][0]), n[a] = 0;
        for (o in c) Object.prototype.hasOwnProperty.call(c, o) && (t[o] = c[o]);
        p && p(e);
        while (u.length) u.shift()();
        return r.push.apply(r, l || []), i()
    }

    function i() {
        for (var t, e = 0; e < r.length; e++) {
            for (var i = r[e], o = !0, a = 1; a < i.length; a++) {
                var s = i[a];
                0 !== n[s] && (o = !1)
            }
            o && (r.splice(e--, 1), t = c(c.s = i[0]))
        }
        return t
    }
    var o = {},
        a = {
            index: 0
        },
        n = {
            index: 0
        },
        r = [];

    function s(t) {
        return c.p + "js/" + ({}[t] || t) + "." + {
            "chunk-1ef7557a": "4a9cf24b",
            "chunk-2cc9f9d2": "ba177d05",
            "chunk-4ad04cdc": "cdf9c967",
            "chunk-5e91efd8": "6c9f7879",
            "chunk-6c323678": "66fd477d"
        }[t] + ".js"
    }

    function c(e) {
        if (o[e]) return o[e].exports;
        var i = o[e] = {
            i: e,
            l: !1,
            exports: {}
        };
        return t[e].call(i.exports, i, i.exports, c), i.l = !0, i.exports
    }
    c.e = function(t) {
        var e = [],
            i = {
                "chunk-1ef7557a": 1,
                "chunk-2cc9f9d2": 1,
                "chunk-4ad04cdc": 1,
                "chunk-5e91efd8": 1,
                "chunk-6c323678": 1
            };
        a[t] ? e.push(a[t]) : 0 !== a[t] && i[t] && e.push(a[t] = new Promise((function(e, i) {
            for (var o = "css/" + ({}[t] || t) + "." + {
                    "chunk-1ef7557a": "bd96ca11",
                    "chunk-2cc9f9d2": "d173280c",
                    "chunk-4ad04cdc": "5eeff238",
                    "chunk-5e91efd8": "b5af8fb7",
                    "chunk-6c323678": "b5af8fb7"
                }[t] + ".css", n = c.p + o, r = document.getElementsByTagName("link"), s = 0; s < r.length; s++) {
                var l = r[s],
                    d = l.getAttribute("data-href") || l.getAttribute("href");
                if ("stylesheet" === l.rel && (d === o || d === n)) return e()
            }
            var u = document.getElementsByTagName("style");
            for (s = 0; s < u.length; s++) {
                l = u[s], d = l.getAttribute("data-href");
                if (d === o || d === n) return e()
            }
            var p = document.createElement("link");
            p.rel = "stylesheet", p.type = "text/css", p.onload = e, p.onerror = function(e) {
                var o = e && e.target && e.target.src || n,
                    r = new Error("Loading CSS chunk " + t + " failed.\n(" + o + ")");
                r.code = "CSS_CHUNK_LOAD_FAILED", r.request = o, delete a[t], p.parentNode.removeChild(p), i(r)
            }, p.href = n;
            var m = document.getElementsByTagName("head")[0];
            m.appendChild(p)
        })).then((function() {
            a[t] = 0
        })));
        var o = n[t];
        if (0 !== o)
            if (o) e.push(o[2]);
            else {
                var r = new Promise((function(e, i) {
                    o = n[t] = [e, i]
                }));
                e.push(o[2] = r);
                var l, d = document.createElement("script");
                d.charset = "utf-8", d.timeout = 120, c.nc && d.setAttribute("nonce", c.nc), d.src = s(t);
                var u = new Error;
                l = function(e) {
                    d.onerror = d.onload = null, clearTimeout(p);
                    var i = n[t];
                    if (0 !== i) {
                        if (i) {
                            var o = e && ("load" === e.type ? "missing" : e.type),
                                a = e && e.target && e.target.src;
                            u.message = "Loading chunk " + t + " failed.\n(" + o + ": " + a + ")", u.name = "ChunkLoadError", u.type = o, u.request = a, i[1](u)
                        }
                        n[t] = void 0
                    }
                };
                var p = setTimeout((function() {
                    l({
                        type: "timeout",
                        target: d
                    })
                }), 12e4);
                d.onerror = d.onload = l, document.head.appendChild(d)
            }
        return Promise.all(e)
    }, c.m = t, c.c = o, c.d = function(t, e, i) {
        c.o(t, e) || Object.defineProperty(t, e, {
            enumerable: !0,
            get: i
        })
    }, c.r = function(t) {
        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(t, "__esModule", {
            value: !0
        })
    }, c.t = function(t, e) {
        if (1 & e && (t = c(t)), 8 & e) return t;
        if (4 & e && "object" === typeof t && t && t.__esModule) return t;
        var i = Object.create(null);
        if (c.r(i), Object.defineProperty(i, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t)
            for (var o in t) c.d(i, o, function(e) {
                return t[e]
            }.bind(null, o));
        return i
    }, c.n = function(t) {
        var e = t && t.__esModule ? function() {
            return t["default"]
        } : function() {
            return t
        };
        return c.d(e, "a", e), e
    }, c.o = function(t, e) {
        return Object.prototype.hasOwnProperty.call(t, e)
    }, c.p = "https://userapp.zyrosite.com/v861/", c.oe = function(t) {
        throw console.error(t), t
    };
    var l = window["webpackJsonp"] = window["webpackJsonp"] || [],
        d = l.push.bind(l);
    l.push = e, l = l.slice();
    for (var u = 0; u < l.length; u++) e(l[u]);
    var p = d;
    r.push([0, "chunk-vendors"]), i()
})({
    0: function(t, e, i) {
        t.exports = i("f8f2")
    },
    "015f": function(t, e, i) {
        "use strict";
        i("a6cb")
    },
    "0256": function(t, e, i) {
        "use strict";
        i("1ca6")
    },
    "06f4": function(t, e, i) {
        "use strict";
        i("2f8e")
    },
    "074c": function(t, e, i) {},
    "08ef": function(t, e, i) {
        "use strict";
        i("2e2f")
    },
    "0c1e": function(t, e, i) {
        "use strict";
        i("074c")
    },
    "0d19": function(t, e, i) {
        "use strict";
        i("664d")
    },
    "0db2": function(t, e, i) {
        "use strict";
        i("ec0c")
    },
    "0dfd": function(t, e, i) {},
    "15b5": function(t, e, i) {
        "use strict";
        i("cba7")
    },
    "16c8": function(t, e, i) {},
    "174d": function(t, e, i) {},
    "177f": function(t, e, i) {
        "use strict";
        i("fe53")
    },
    1910: function(t, e, i) {
        "use strict";
        i.d(e, "c", (function() {
            return o
        })), i.d(e, "a", (function() {
            return a
        })), i.d(e, "d", (function() {
            return n
        })), i.d(e, "b", (function() {
            return r
        }));
        const o = [{
                id: -1,
                options: [],
                description: "The product description should talk about the product in a truthful yet\t\tflattering way. Remember to include information that the potential buyer would need, for\t\texample details on sizing, color, and function.\n\t\t\nMaterial: Ceramic\nColor: Red & Gold",
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817300857-default-3.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817300857-default-3.png",
                title: 'Handmade Vase "Shimai"',
                variants: [{
                    prices: [{
                        amount: 58,
                        currency_code: "EUR"
                    }]
                }]
            }, {
                id: -1,
                options: [],
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817142629-default-2.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817142629-default-2.png",
                title: 'Handmade Vase "Yuugen"',
                variants: [{
                    prices: [{
                        amount: 52,
                        currency_code: "EUR"
                    }]
                }]
            }, {
                id: -1,
                options: [],
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648815896081-default-1.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648815896081-default-1.png",
                title: 'Handmade Vase "Ikigai"',
                variants: [{
                    prices: [{
                        amount: 62,
                        currency_code: "EUR"
                    }]
                }]
            }, {
                id: -1,
                options: [],
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817348457-default-4.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817348457-default-4.png",
                title: 'Handmade Bowl "Ganbaru"',
                variants: [{
                    prices: [{
                        amount: 32,
                        currency_code: "EUR"
                    }]
                }]
            }, {
                id: -1,
                options: [],
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817547624-default-5.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817547624-default-5.png",
                title: 'Handmade Vase "Kaiyo"',
                variants: [{
                    prices: [{
                        amount: 60,
                        currency_code: "EUR"
                    }]
                }]
            }, {
                id: -1,
                options: [],
                images: [{
                    url: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817643390-default-6.png"
                }],
                thumbnail: "https://cdn.zyrosite.com/cdn-ecommerce/store_01FZJGM89W80MVKV52Y6NYX6DJ%2Fassets%2F1648817643390-default-6.png",
                title: 'Handmade Vase "Sora"',
                variants: [{
                    prices: [{
                        amount: 51,
                        currency_code: "EUR"
                    }]
                }]
            }],
            a = "https://static.zyro.com/ecommerce-product-placeholders/blank.png",
            n = "donation",
            r = ["BlockEcommerceProduct", "BlockEcommerceProductList"]
    },
    "19c2": function(t, e, i) {
        "use strict";
        i("e94f")
    },
    "1ae1": function(t, e, i) {
        "use strict";
        i("250e")
    },
    "1ca6": function(t, e, i) {},
    "1eb8": function(t, e, i) {
        "use strict";
        i("f8af")
    },
    "210d": function(t, e, i) {},
    2176: function(t, e, i) {},
    "250e": function(t, e, i) {},
    2991: function(t, e, i) {},
    "2c7f": function(t, e, i) {
        "use strict";
        i("42e1")
    },
    "2d77": function(t, e, i) {
        "use strict";
        i("a89f")
    },
    "2e2f": function(t, e, i) {},
    "2f8e": function(t, e, i) {},
    "35d1": function(t, e, i) {
        "use strict";
        i("b5ef")
    },
    "36c7": function(t, e, i) {
        "use strict";
        i("8f33")
    },
    "38f2": function(t, e, i) {
        "use strict";
        i("61a6")
    },
    3908: function(t, e, i) {
        "use strict";
        i("7178")
    },
    "3a67": function(t, e, i) {},
    "3d17": function(t, e, i) {},
    "3d25": function(t, e, i) {
        "use strict";
        i("a95a")
    },
    "3d43": function(t, e, i) {},
    "3e07": function(t, e, i) {},
    "3fb4": function(t, e, i) {
        "use strict";
        i("d100")
    },
    "40ce": function(t, e, i) {
        "use strict";
        i("dc42")
    },
    "42e1": function(t, e, i) {},
    "44cf": function(t, e, i) {
        "use strict";
        i("7ee2")
    },
    4646: function(t, e, i) {
        "use strict";
        i("210d")
    },
    "48f5": function(t, e, i) {
        "use strict";
        i.d(e, "a", (function() {
            return n
        }));
        i("ddb0");
        var o = i("8afd");
        const a = Object(o["f"])(!1),
            n = () => {
                const t = t => {
                        let {
                            name: e,
                            path: o = "./"
                        } = t;
                        a.value = e ? () => i("bd67")("".concat(o).concat(e, ".vue")) : null
                    },
                    e = () => {
                        a.value = null
                    };
                return {
                    openModal: t,
                    closeModal: e,
                    openModalComponent: a
                }
            }
    },
    "49f9": function(t, e, i) {
        "use strict";
        i("7f91")
    },
    "4b74": function(t, e, i) {},
    "4b90": function(t, e, i) {},
    "4c6a": function(t, e, i) {
        "use strict";
        i("e0fd")
    },
    "4d11": function(t, e, i) {},
    "4d3b": function(t, e, i) {
        "use strict";
        i("3d17")
    },
    "4d3d": function(t, e, i) {},
    5429: function(t, e, i) {},
    "59a6": function(t, e, i) {
        "use strict";
        i("d311")
    },
    "5be4": function(t, e, i) {
        "use strict";
        i("e220")
    },
    "5e9a": function(t, e, i) {
        "use strict";
        i("b1d1")
    },
    "5f0e": function(t, e, i) {
        "use strict";
        i("2991")
    },
    "61a6": function(t, e, i) {},
    "61a8": function(t, e, i) {},
    "664d": function(t, e, i) {},
    6741: function(t, e, i) {},
    6755: function(t, e, i) {},
    "6d71": function(t, e, i) {
        "use strict";
        i("3e07")
    },
    7058: function(t, e, i) {},
    7178: function(t, e, i) {},
    7413: function(t, e, i) {
        "use strict";
        i("e784")
    },
    "7b38": function(t, e, i) {},
    "7ee2": function(t, e, i) {},
    "7f00": function(t, e, i) {},
    "7f91": function(t, e, i) {},
    8354: function(t, e, i) {},
    8541: function(t, e, i) {},
    "8d17": function(t, e, i) {
        "use strict";
        i("e8938")
    },
    "8e61": function(t, e, i) {
        "use strict";
        i("a430")
    },
    "8f33": function(t, e, i) {},
    "93d8": function(t, e, i) {
        "use strict";
        i("4d3d")
    },
    9438: function(t, e, i) {
        "use strict";
        i("b0f3")
    },
    "95a0": function(t, e, i) {},
    9903: function(t, e, i) {
        "use strict";
        i("16c8")
    },
    "9a72": function(t, e, i) {
        "use strict";
        i("6741")
    },
    "9ba6": function(t, e, i) {
        "use strict";
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "close-button"
                }, [i("svg", {
                    attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M15 5L5 15",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5 5L15 15",
                        stroke: "currentColor",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])
            },
            a = [],
            n = (i("8e61"), i("2877")),
            r = {},
            s = Object(n["a"])(r, o, a, !1, null, "7981bcfa", null);
        e["a"] = s.exports
    },
    "9d28": function(t, e, i) {
        "use strict";
        i("4d11")
    },
    "9f8c": function(t, e, i) {
        "use strict";
        i("2176")
    },
    a430: function(t, e, i) {},
    a596: function(t, e, i) {
        "use strict";
        i("7b38")
    },
    a6cb: function(t, e, i) {},
    a6e1: function(t, e, i) {},
    a783: function(t, e, i) {
        "use strict";
        i("3a67")
    },
    a89f: function(t, e, i) {},
    a95a: function(t, e, i) {},
    b09a: function(t, e, i) {
        "use strict";
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i(t.tagName, {
                    tag: "Component",
                    staticClass: "grid-button",
                    class: t.computedClass,
                    attrs: {
                        type: t.buttonType,
                        name: t.buttonType,
                        href: t.href,
                        disabled: t.isDisabled,
                        target: t.target,
                        rel: t.rel,
                        "aria-hidden": t.isLoading
                    },
                    domProps: {
                        textContent: t._s(t.content)
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("click", e)
                        },
                        drag: function(e) {
                            return t.$emit("drag", e)
                        },
                        dragstart: function(e) {
                            return t.$emit("dragstart", e)
                        }
                    }
                })
            },
            a = [],
            n = {
                name: "GridButton",
                props: {
                    tagName: {
                        type: String,
                        default: "a"
                    },
                    href: {
                        type: String,
                        default: null
                    },
                    target: {
                        type: String,
                        default: null
                    },
                    rel: {
                        type: String,
                        default: null
                    },
                    type: {
                        type: String,
                        default: "primary"
                    },
                    buttonType: {
                        type: String,
                        default: null
                    },
                    content: {
                        type: String,
                        default: ""
                    },
                    isDisabled: {
                        type: Boolean,
                        default: !1
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    computedClass() {
                        return {
                            "grid-button--empty": !this.content,
                            ["grid-button--".concat(this.type)]: this.type,
                            loading: this.isLoading
                        }
                    }
                }
            },
            r = n,
            s = (i("9f8c"), i("2877")),
            c = Object(s["a"])(r, o, a, !1, null, "2f409ee5", null);
        e["a"] = c.exports
    },
    b0f3: function(t, e, i) {},
    b1d1: function(t, e, i) {},
    b1fd: function(t, e, i) {
        "use strict";
        i("4b90")
    },
    b242: function(t, e, i) {
        "use strict";
        i("cb7a")
    },
    b2c1: function(t, e, i) {
        "use strict";
        i("4b74")
    },
    b5ef: function(t, e, i) {},
    b867: function(t, e, i) {},
    b984: function(t, e, i) {
        "use strict";
        i("8354")
    },
    bbf2: function(t, e, i) {
        "use strict";
        i("174d")
    },
    bd67: function(t, e, i) {
        var o = {
            "./EcommerceCheckoutFailed.vue": ["03f1", "chunk-5e91efd8"],
            "./EcommerceCheckoutSuccess.vue": ["8585", "chunk-6c323678"],
            "./EcommerceMessageButtonDisabled.vue": ["9954", "chunk-2cc9f9d2"],
            "./EcommerceModalRoot.vue": ["f88d"],
            "./partials/ModalContent.vue": ["a56f", "chunk-4ad04cdc"],
            "./partials/ModalLayout.vue": ["16d1", "chunk-1ef7557a"]
        };

        function a(t) {
            if (!i.o(o, t)) return Promise.resolve().then((function() {
                var e = new Error("Cannot find module '" + t + "'");
                throw e.code = "MODULE_NOT_FOUND", e
            }));
            var e = o[t],
                a = e[0];
            return Promise.all(e.slice(1).map(i.e)).then((function() {
                return i(a)
            }))
        }
        a.keys = function() {
            return Object.keys(o)
        }, a.id = "bd67", t.exports = a
    },
    bdcc: function(t, e, i) {
        "use strict";
        i("95a0")
    },
    c0be: function(t, e, i) {
        "use strict";
        i("6755")
    },
    c274: function(t, e, i) {
        "use strict";
        i("3d43")
    },
    c9d2: function(t, e, i) {},
    cb7a: function(t, e, i) {},
    cba7: function(t, e, i) {},
    d100: function(t, e, i) {},
    d1fc: function(t, e, i) {
        "use strict";
        i("61a8")
    },
    d311: function(t, e, i) {},
    d441: function(t, e, i) {},
    dc42: function(t, e, i) {},
    e0fd: function(t, e, i) {},
    e172: function(t, e, i) {
        "use strict";
        i("7058")
    },
    e220: function(t, e, i) {},
    e429: function(t, e, i) {
        "use strict";
        i("c9d2")
    },
    e784: function(t, e, i) {},
    e8938: function(t, e, i) {},
    e94f: function(t, e, i) {},
    e9ac: function(t, e, i) {
        "use strict";
        i("b867")
    },
    ec0c: function(t, e, i) {},
    ed15: function(t, e, i) {
        "use strict";
        i("0dfd")
    },
    f015: function(t, e, i) {
        "use strict";
        i("f29a")
    },
    f035: function(t, e, i) {
        "use strict";
        i("5429")
    },
    f29a: function(t, e, i) {},
    f633: function(t, e, i) {
        "use strict";
        i("a6e1")
    },
    f88d: function(t, e, i) {
        "use strict";
        i.r(e);
        var o = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.openModalComponent ? i(t.openModalComponent, {
                    tag: "Component"
                }) : t._e()
            },
            a = [],
            n = i("48f5");
        const r = "open-modal";
        var s = {
                setup() {
                    const {
                        openModal: t,
                        closeModal: e,
                        openModalComponent: i
                    } = Object(n["a"])();
                    return {
                        openModal: t,
                        closeModal: e,
                        openModalComponent: i
                    }
                },
                mounted() {
                    const t = this.$route.query[r];
                    t && this.openModal({
                        name: t
                    })
                }
            },
            c = s,
            l = i("2877"),
            d = Object(l["a"])(c, o, a, !1, null, null, null);
        e["default"] = d.exports
    },
    f8af: function(t, e, i) {},
    f8f2: function(t, e, i) {
        "use strict";
        i.r(e);
        i("e260"), i("e6cf"), i("cca6"), i("a79d");
        var o = i("1d1f"),
            a = i("2b88"),
            n = i.n(a),
            r = i("c28b"),
            s = i.n(r),
            c = i("2b0e"),
            l = i("95ae"),
            d = i("58ca"),
            u = i("8c4f");
        i("d441");
        const p = 920,
            m = "qa",
            g = "Link",
            h = "Page",
            b = "Folder",
            v = "https://static.zyro.com",
            f = "block-header",
            y = "block-header--is-sticky",
            w = "blog",
            k = "ecommerce-product",
            O = {
                center: "0 var(--space-between-menu)",
                left: "0 var(--space-between-menu) 0 0",
                right: "0 0 0 var(--space-between-menu)",
                "center-center": "0 0 var(--space-between-menu) 0"
            },
            _ = {
                "left-left": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "1/2",
                    menuColumn: "2/3",
                    cartColumn: "3/3",
                    templateColumns: "minmax(calc(var(--logo-width) + var(--space-between-menu)), auto) 1fr",
                    mTemplateColumns: "minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto) 1fr"
                },
                "left-right": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "1/2",
                    menuColumn: "2/3",
                    cartColumn: "3/3",
                    templateColumns: "minmax(calc(var(--logo-width) + var(--space-between-menu)), auto) 1fr",
                    mTemplateColumns: "minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto) 1fr"
                },
                "left-center": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "1/2",
                    menuColumn: "2/3",
                    cartColumn: "3/3",
                    templateColumns: "minmax(calc(var(--logo-width) + var(--space-between-menu)), 1fr) auto 1fr",
                    mTemplateColumns: "minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), 1fr) auto 1fr"
                },
                "center-left": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "2/3",
                    menuColumn: "1/2",
                    cartColumn: "3/4",
                    templateColumns: "1fr minmax(calc(var(--logo-width) + var(--space-between-menu)), auto) 1fr",
                    mTemplateColumns: "1fr minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto) 1fr"
                },
                "center-right": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "2/3",
                    menuColumn: "3/4",
                    cartColumn: "4/4",
                    templateColumns: "1fr minmax(calc(var(--logo-width) + var(--space-between-menu)), auto) 1fr",
                    mTemplateColumns: "1fr minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto) 1fr"
                },
                "center-center": {
                    logoRow: 0,
                    menuRow: 2,
                    cartRow: 1,
                    logoColumn: "2/3",
                    menuColumn: "1/4",
                    cartColumn: "3/3",
                    templateColumns: "1fr minmax(var(--logo-width), auto) 1fr",
                    mTemplateColumns: "1fr minmax((--m-logo-width, var(--logo-width)), auto) 1fr"
                },
                "right-left": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "2/3",
                    menuColumn: "1/2",
                    cartColumn: "3/3",
                    templateColumns: "1fr minmax(calc(var(--logo-width) + var(--space-between-menu)), auto)",
                    mTemplateColumns: "1fr minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto)"
                },
                "right-right": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "2/3",
                    menuColumn: "1/2",
                    cartColumn: "3/3",
                    templateColumns: "1fr minmax(calc(var(--logo-width) + var(--space-between-menu)), auto)",
                    mTemplateColumns: "1fr minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), auto)"
                },
                "right-center": {
                    logoRow: 1,
                    menuRow: 1,
                    cartRow: 1,
                    logoColumn: "3/4",
                    menuColumn: "2/3",
                    cartColumn: "4/4",
                    templateColumns: "1fr auto minmax(calc(var(--logo-width) + var(--space-between-menu)), 1fr)",
                    mTemplateColumns: "1fr auto minmax(calc(var(--m-logo-width, var(--logo-width)) + var(--space-between-menu)), 1fr)"
                }
            },
            j = {
                left: "flex-start",
                right: "flex-end",
                center: "center",
                default: "center"
            },
            C = {
                left: "left center",
                right: "right center",
                center: "center center",
                default: "left center"
            },
            S = "_blank",
            I = "a",
            x = "div",
            L = "lightbox",
            B = "link",
            M = "none",
            P = {
                BlockEcwidStore: "ecwid-store",
                BlockBlogHeader: "blog-header",
                BlockBlogList: "blog-list",
                BlockSlideshow: "slideshow",
                default: "grid"
            },
            E = {
                title: "English",
                value: "en"
            };
        var T = i("f3f3");
        i("c1f9"), i("ddb0");
        const N = (t, e) => Object.fromEntries(Object.entries(t).map(t => {
                let [i, o] = t;
                if (!o.isScheduled) return [i, o];
                const {
                    date: a
                } = o, n = new Date(a).setHours(0, 0, 0, 0), r = n <= e;
                return [i, Object(T["a"])(Object(T["a"])({}, o), r && {
                    isDraft: !1,
                    isScheduled: !1
                })]
            }).filter(t => !0 !== t[1].isDraft)),
            q = "data.json",
            A = q,
            H = async () => {
                const t = await fetch("".concat(window.location.origin, "/").concat(A)),
                    e = await t.json(),
                    i = (new Date).setHours(0, 0, 0, 0);
                return Object(T["a"])(Object(T["a"])({}, e), {}, {
                    pages: N(e.pages, i)
                })
            };
        var $ = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    attrs: {
                        id: "app"
                    }
                }, [t.website ? i("Meta") : t._e(), i("RouterView"), i("MobileObserver", {
                    on: {
                        "toggle-mobile": t.updateIsMobileScreen
                    }
                }), t.isLightboxOpen ? i("Lightbox") : t._e()], 1)
            },
            D = [],
            R = i("2f62"),
            V = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Transition", {
                    attrs: {
                        name: "fade",
                        appear: ""
                    }
                }, [t.isLightboxOpen ? i("div", {
                    staticClass: "lightbox",
                    attrs: {
                        role: "dialog",
                        "aria-modal": "true"
                    }
                }, [i("LightboxCloseButton", {
                    staticClass: "lightbox__button lightbox__close-button",
                    attrs: {
                        title: "close-ligthbox-button"
                    },
                    on: {
                        "close-click": t.closeLightbox
                    }
                }), i("div", {
                    staticClass: "lightbox__container"
                }, [t.isNavigationVisible ? i("div", {
                    staticClass: "lightbox__control-container",
                    on: {
                        click: t.goToPreviousImage
                    }
                }, [i("LightboxNavButton", {
                    staticClass: "lightbox__button",
                    attrs: {
                        title: "navigation-left-button"
                    }
                })], 1) : t._e(), i("Transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [i("img", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: {
                            handler: t.closeLightbox,
                            middleware: t.onLightboxClickOutside,
                            events: ["mousedown"]
                        },
                        expression: "{\n\t\t\t\t\t\thandler: closeLightbox,\n\t\t\t\t\t\tmiddleware: onLightboxClickOutside,\n\t\t\t\t\t\tevents: ['mousedown'],\n\t\t\t\t\t}"
                    }],
                    key: "" + t.currentLightboxImage.src + t.currentLightboxImageIndex,
                    ref: "lightboxRef",
                    staticClass: "lightbox__image",
                    class: {
                        "lightbox__image--single": !t.isNavigationVisible, "lightbox__image--preview-mobile": t.isMobileScreen && t.isImageGaleryMode
                    },
                    attrs: {
                        draggable: t.isMobileScreen ? "true" : "false",
                        src: t.currentLightboxImage.src,
                        alt: t.currentLightboxImage.alt
                    }
                })]), t.isNavigationVisible ? i("div", {
                    staticClass: "lightbox__control-container",
                    on: {
                        click: t.goToNextImage
                    }
                }, [i("LightboxNavButton", {
                    staticClass: "lightbox__button lightbox__control-button--right",
                    attrs: {
                        title: "navigation-right-button"
                    }
                })], 1) : t._e()], 1)], 1) : t._e()])
            },
            G = [],
            F = i("e181"),
            U = i("8afd"),
            z = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    on: {
                        click: function(e) {
                            return t.$emit("close-click")
                        }
                    }
                }, [i("svg", {
                    attrs: {
                        width: "14",
                        height: "14",
                        viewBox: "0 0 14 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M1 1L13 13",
                        stroke: "#EBEFF2",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M13 1L1 13",
                        stroke: "#EBEFF2",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])
            },
            W = [],
            Y = {
                name: "LightboxCloseButton"
            },
            K = Y,
            J = i("2877"),
            Z = Object(J["a"])(K, z, W, !1, null, null, null),
            X = Z.exports,
            Q = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", [i("svg", {
                    attrs: {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M7 1L0.999999 7L7 13",
                        stroke: "#EBEFF2",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])
            },
            tt = [],
            et = {
                name: "LightboxNavButton"
            },
            it = et,
            ot = Object(J["a"])(it, Q, tt, !1, null, null, null),
            at = ot.exports;
        const nt = {
                Backspace: "Backspace",
                ShiftLeft: "ShiftLeft",
                Escape: "Escape",
                Space: "Space",
                ArrowLeft: "ArrowLeft",
                ArrowUp: "ArrowUp",
                ArrowRight: "ArrowRight",
                ArrowDown: "ArrowDown",
                Delete: "Delete",
                KeyX: "KeyX",
                KeyC: "KeyC",
                KeyD: "KeyD",
                KeyY: "KeyY",
                KeyZ: "KeyZ",
                OSLeft: "OSLeft",
                BracketLeft: "BracketLeft",
                BracketRight: "BracketRight"
            },
            rt = {
                8: nt.Backspace,
                16: nt.ShiftLeft,
                27: nt.Escape,
                32: nt.Space,
                37: nt.ArrowLeft,
                38: nt.ArrowUp,
                39: nt.ArrowRight,
                40: nt.ArrowDown,
                46: nt.Delete,
                67: nt.KeyC,
                68: nt.KeyD,
                88: nt.KeyX,
                89: nt.KeyY,
                90: nt.KeyZ,
                91: nt.OSLeft,
                219: nt.BracketLeft,
                221: nt.BracketRight
            },
            st = t => {
                let e;
                return t ? void 0 !== t.code ? e = "MetaLeft" === t.code ? "OSLeft" : t.code : void 0 !== t.keyCode && (e = rt[t.keyCode]) : e = void 0, e
            },
            ct = Object(U["f"])([]),
            lt = Object(U["f"])(null),
            dt = () => {
                const t = Object(U["a"])(() => ct.value.length > 0),
                    e = Object(U["a"])(() => ct.value.length > 1),
                    i = Object(U["a"])(() => ct.value.length - 1),
                    o = Object(U["a"])(() => lt.value === ct.value.length - 1),
                    a = Object(U["a"])(() => 0 === lt.value),
                    n = Object(U["a"])(() => ct.value[lt.value]),
                    r = t => {
                        lt.value = t
                    },
                    s = t => {
                        ct.value = Array.isArray(t) ? t : [t]
                    },
                    c = () => a.value ? r(i.value) : r(lt.value - 1),
                    l = () => o.value ? r(0) : r(lt.value + 1),
                    d = () => {
                        s([]), r(null)
                    },
                    u = () => {
                        e.value || d()
                    },
                    p = function(t) {
                        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
                        s(t), r(e)
                    },
                    m = t => {
                        st(t) === nt.ArrowRight && l(), st(t) === nt.ArrowLeft && c(), st(t) === nt.Escape && d()
                    };
                return {
                    lightboxImages: Object(U["a"])(() => ct.value),
                    currentLightboxImageIndex: Object(U["a"])(() => lt.value),
                    currentLightboxImage: n,
                    lastImageIndex: i,
                    isFirstImage: a,
                    isLastImage: o,
                    isLightboxOpen: t,
                    isImageGaleryMode: e,
                    setLightboxImages: s,
                    setCurrentLightboxImageIndex: r,
                    goToNextImage: l,
                    goToPreviousImage: c,
                    handleLightboxNav: m,
                    closeLightbox: d,
                    addImagesToLightbox: p,
                    onLightboxClickOutside: u
                }
            },
            ut = t => {
                let {
                    move: e = {
                        swipe: !1,
                        drag: !1
                    },
                    onMoveLeft: i = (() => {}),
                    onMoveRight: o = (() => {}),
                    onMoveUp: a = (() => {}),
                    onMoveDown: n = (() => {})
                } = t, r = null, s = null;
                const c = e.swipe && e.drag,
                    l = e.swipe || e.drag;

                function d(t) {
                    return t.touches
                }

                function u(t) {
                    const e = d(t)[0];
                    r = e.clientX, s = e.clientY
                }

                function p(t) {
                    const e = new Image;
                    e.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=", t.dataTransfer.setDragImage(e, 0, 0), r = t.clientX, s = t.clientY
                }
                const m = (t, e) => {
                        Math.abs(t) > Math.abs(e) ? t > 0 ? i() : o() : e > 0 ? a() : n(), r = null, s = null
                    },
                    g = t => {
                        if (!r || !s) return;
                        const e = t.touches[0].clientX,
                            i = t.touches[0].clientY,
                            o = r - e,
                            a = s - i;
                        m(o, a)
                    },
                    h = t => {
                        if (!r || !s) return;
                        const e = r - t.clientX,
                            i = s - t.clientY;
                        m(e, i)
                    },
                    b = function() {
                        let t = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                            i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                        const o = null === i ? document : i,
                            a = t ? "addEventListener" : "removeEventListener";
                        if (c) o[a]("touchstart", u, !1), o[a]("touchmove", g, !1), o[a]("dragstart", p, !1), o[a]("drag", h, !1);
                        else if (l) {
                            const t = e.swipe ? u : p,
                                i = e.swipe ? g : h;
                            o[a](e.swipe ? "touchstart" : "dragstart", t, !1), o[a](e.swipe ? "touchmove" : "drag", i, !1)
                        }
                    };
                return {
                    enableMoveEvents: b
                }
            };
        var pt = {
                name: "Lightbox",
                components: {
                    LightboxCloseButton: X,
                    LightboxNavButton: at
                },
                setup(t) {
                    const {
                        lightboxImages: e,
                        currentLightboxImageIndex: i,
                        currentLightboxImage: o,
                        closeLightbox: a,
                        isLightboxOpen: n,
                        isFirstImage: r,
                        isLastImage: s,
                        isImageGaleryMode: c,
                        onLightboxClickOutside: l,
                        handleLightboxNav: d,
                        goToNextImage: u,
                        goToPreviousImage: p
                    } = dt(), {
                        enableMoveEvents: m
                    } = ut({
                        move: {
                            drag: !0,
                            swipe: !0
                        },
                        onMoveLeft: u,
                        onMoveRight: p
                    }), g = Object(U["a"])(() => !t.isMobileView && c.value);
                    return Object(U["d"])(() => {
                        m(), window.document.addEventListener("keydown", d)
                    }), Object(U["c"])(() => {
                        a(), m(!1), document.removeEventListener("keydown", d)
                    }), {
                        lightboxImages: e,
                        currentLightboxImageIndex: i,
                        currentLightboxImage: o,
                        closeLightbox: a,
                        isImageGaleryMode: c,
                        isNavigationVisible: g,
                        isFirstImage: r,
                        isLastImage: s,
                        isLightboxOpen: n,
                        onLightboxClickOutside: l,
                        goToNextImage: u,
                        goToPreviousImage: p
                    }
                },
                computed: Object(T["a"])({}, Object(R["e"])("gui", ["isMobileScreen"])),
                async mounted() {
                    await this.$nextTick(), Object(F["b"])(this.$refs.lightboxRef)
                },
                beforeDestroy() {
                    Object(F["a"])()
                }
            },
            mt = pt,
            gt = (i("ed15"), Object(J["a"])(mt, V, G, !1, null, "1799127d", null)),
            ht = gt.exports,
            bt = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    ref: "sentry",
                    staticClass: "sentry"
                })
            },
            vt = [],
            ft = {
                observer: null,
                mounted() {
                    this.$options.observer = new IntersectionObserver(t => {
                        this.$emit("toggle-mobile", !t[0].isIntersecting)
                    }, {
                        threshold: 1
                    }), this.$options.observer.observe(this.$refs.sentry)
                },
                beforeDestroy() {
                    this.$options.observer.unobserve(this.$refs.sentry)
                }
            },
            yt = ft,
            wt = (i("0d19"), Object(J["a"])(yt, bt, vt, !1, null, "289856bb", null)),
            kt = wt.exports;
        const Ot = "_isAppPrerendering",
            _t = "_isAppHydrating",
            jt = !!window[Ot],
            Ct = !!window[_t],
            St = (t, e, i) => {
                if (document.querySelector('link[href="'.concat(t, '"][rel="').concat(e, '"]'))) return;
                const o = document.createElement("link");
                o.setAttribute("href", t), o.setAttribute("rel", e), o.setAttribute("referrerpolicy", "no-referrer"), Object.entries(i).forEach(t => {
                    let [e, i] = t;
                    return o.setAttribute(e, i)
                }), document.head.prepend(o)
            },
            It = t => {
                St("https://fonts.gstatic.com", "preconnect", {
                    crossorigin: !0
                }), St(t, "preload", {
                    as: "style"
                }), St(t, "stylesheet", {
                    media: "print",
                    onload: "if(!window.".concat(Ot, ")this.removeAttribute('media');")
                })
            };
        i("ac1f"), i("5319"), i("498a"), i("4d63"), i("c607"), i("4e82"), i("13d5");
        const xt = "font-family",
            Lt = "font-weight",
            Bt = "primary",
            Mt = "secondary",
            Pt = "h1",
            Et = "h2",
            Tt = "h3",
            Nt = "h4",
            qt = "h5",
            At = "h6",
            Ht = "body-small",
            $t = "body",
            Dt = "body-large",
            Rt = "nav-link",
            Vt = "font",
            Gt = "grid-button-primary",
            Ft = "grid-button-secondary",
            Ut = [Pt, Et, Tt, Nt, qt, At, Ht, $t, Dt, Rt, Gt, Ft],
            zt = (t, e, i) => i.indexOf(t) === e,
            Wt = {
                normal: 400,
                bold: 700
            },
            Yt = t => Wt[t] || Number(t),
            Kt = t => {
                var e, i;
                return null === (e = t.split(",")) || void 0 === e || null === (i = e[0]) || void 0 === i ? void 0 : i.replace(/'/g, "")
            },
            Jt = t => t.trim().replace(/ /g, "+"),
            Zt = t => {
                const e = new RegExp("var\\(--".concat(Vt, "-|\\)"), "g");
                return t.replace(e, "")
            },
            Xt = t => {
                let e = {
                    primary: [],
                    secondary: []
                };
                return Ut.forEach(i => {
                    const o = Zt(t[i][xt]),
                        a = Yt(t[i][Lt]);
                    e = Object(T["a"])(Object(T["a"])({}, e), {}, {
                        [o]: [...e[o], a]
                    })
                }), {
                    [Bt]: e[Bt].filter(zt).sort(),
                    [Mt]: e[Mt].filter(zt).sort()
                }
            },
            Qt = t => ({
                [Bt]: Kt(t[Bt]),
                [Mt]: Kt(t[Mt])
            }),
            te = (t, e) => Object.keys(t).map(i => ({
                name: Jt(t[i]),
                weights: e[i].join(";")
            })).filter(t => {
                let {
                    weights: e
                } = t;
                return !!e
            }).map(t => "family=".concat(t.name, ":wght@").concat(t.weights)).join("&"),
            ee = t => {
                const e = Xt(t),
                    i = Qt(t.font),
                    o = te(i, e);
                return "https://fonts.googleapis.com/css2?".concat(o, "&display=swap")
            },
            ie = t => t.trim().replace(/ /g, "+"),
            oe = t => {
                const e = t.match(/style\s*=\s*"([^"]*)"/gm) || [],
                    i = e.reduce((t, e) => {
                        var i, o, a, n;
                        const r = null === (i = e.match(/font-family:.(.*?)[";]/m)) || void 0 === i ? void 0 : i[1],
                            s = (null === (o = e.match(/font-weight:.(.*?)[";]/m)) || void 0 === o ? void 0 : o[1]) || "400";
                        if (!r) return t;
                        const c = ie(r),
                            l = null !== (a = null === (n = t[c]) || void 0 === n ? void 0 : n.weights) && void 0 !== a ? a : [];
                        return Object(T["a"])(Object(T["a"])({}, t), {}, {
                            [c]: {
                                family: r,
                                weights: [...l, ...l.includes(s) ? [] : [s]].sort()
                            }
                        })
                    }, {});
                return i
            },
            ae = t => {
                const e = Object.values(oe(t)),
                    i = e.map(t => {
                        let {
                            family: e,
                            weights: i
                        } = t;
                        return "family=".concat(ie(e), ":wght@").concat(i.join(";"))
                    }).join("&");
                return "https://fonts.googleapis.com/css2?".concat(i, "&display=swap")
            },
            ne = t => {
                if (!t) return;
                const e = Object.values(t.components).filter(t => {
                    let {
                        type: e
                    } = t;
                    return "GridTextBox" === e
                }).map(t => {
                    let {
                        content: e
                    } = t;
                    return e
                }).join();
                It(ee(t.styles)), It(ae(e))
            };
        var re = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Integrations")
            },
            se = [];
        i("e01a");
        const ce = "meta",
            le = "script",
            de = "noscript",
            ue = "style",
            pe = "link",
            me = (t, e) => Object.entries(t.pages).find(t => {
                let [, i] = t;
                return i.path === e
            })[0],
            ge = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "/";
                const {
                    meta: i,
                    pages: o,
                    blocks: a,
                    components: n
                } = t, r = me(t, e), s = Object.values(a).find(t => "footer" === t.slot), c = [...o[r].blocks.reduce((t, e) => [...t, a[e]], []), ...s ? [s] : []], l = t => c.some(e => {
                    let {
                        type: i
                    } = e;
                    return i === t
                }), d = c.reduce((t, e) => [...t, ...e.components.map(t => n[t])], []), u = t => d.some(e => {
                    let {
                        type: i
                    } = e;
                    return i === t
                }), p = d.filter(t => {
                    let {
                        type: e
                    } = t;
                    return "GridVideo" === e
                }), m = t => p.some(e => {
                    let {
                        settings: i
                    } = e;
                    return i.src.includes(t)
                });
                return {
                    hasEcwid: l("BlockEcwidStore"),
                    hasInstagram: u("GridInstagramFeed"),
                    hasMap: u("GridMap"),
                    hasMessenger: !!i.facebookMessenger,
                    hasVimeo: m("vimeo.com"),
                    hasYoutube: m("youtube.com")
                }
            };
        i("2b3d"), i("9861");
        const he = /^[\w+.-]+@[\d.A-Za-z-]+\.[A-Za-z]+$/,
            be = /^\+*\({0,1}\d{1,4}\){0,1}[\d./s-]*$/,
            ve = t => "string" !== typeof t ? "" : t.charAt(0).toUpperCase() + t.slice(1),
            fe = t => {
                const e = t.split(/[/\\]/).pop(),
                    i = e.lastIndexOf(".");
                return "" === e || i < 1 ? "" : e.slice(i + 1).toLowerCase()
            },
            ye = (t, e, i) => "assets" === t ? "".concat("https://assets.zyrosite.com", "/").concat(i, "/").concat(e) : "unsplash" === t ? "https://images.unsplash.com/".concat(e) : e,
            we = [v, "https://assets.zyrosite.space", "https://assets.zyrosite.com"],
            ke = "https://images.unsplash.com",
            Oe = "cdn-cgi/image",
            _e = [{
                width: 360,
                height: 640
            }],
            je = [1, 2, 2.625, 3],
            Ce = [{
                width: 1440
            }, {
                width: 1920
            }],
            Se = [1, 2],
            Ie = 16,
            xe = (t, e, i) => {
                const o = () => {
                    const a = new Image(i);
                    a.srcset = t, a.sizes = e, window.removeEventListener("load", o)
                };
                window.addEventListener("load", o)
            },
            Le = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ie;
                return ["(min-width: ".concat(p, "px) ").concat(t, "px"), "calc(100vw - ".concat(2 * e, "px)")].join(", ")
            },
            Be = function(t, e) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                const o = i.fit || (i.shouldContain ? "scale-down" : "crop"),
                    a = ["format=auto", i.width && "w=".concat(i.width), i.height && "h=".concat(i.height), "fit=".concat(o), i.isLossless && "q=100", i.format && "f=".concat(i.format)].filter(t => !!t).join(",");
                let [, n] = e.split(t);
                while (n.startsWith("/")) n = n.replace("/", "");
                return "".concat(t, "/").concat(Oe, "/").concat(a, "/").concat(n)
            },
            Me = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                const i = new URL(t);
                return i.searchParams.set("auto", e.format || "format"), i.searchParams.set("fit", e.shouldContain ? "clip" : "crop"), e.width && i.searchParams.set("w", e.width), e.height && i.searchParams.set("h", e.height), e.isLossless && i.searchParams.set("q", 100), i.href
            },
            Pe = function(t, e, i) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const a = ye(t, e, i);
                if (!a) return null;
                if ("svg" === fe(a) || "ico" === fe(a)) return a;
                if ("gif" === fe(a)) return a;
                const n = we.find(t => a.includes(t));
                return n ? Be(n, a, o) : a.includes(ke) ? Me(a, o) : a
            },
            Ee = function(t, e, i) {
                let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const a = Ce.map(a => Se.map(n => {
                        const r = Math.round(a.width * n);
                        return "".concat(Pe(t, e, i, Object(T["a"])(Object(T["a"])({}, o), {}, {
                            width: r
                        })), " ").concat(r, "w")
                    })).join(","),
                    n = _e.map(a => je.map(n => {
                        const r = Math.round(a.width * n),
                            s = Object(T["a"])(Object(T["a"])({}, o), {}, {
                                width: r
                            });
                        return o.isMobileFullScreen && (s.height = Math.round(a.height * n)), "".concat(Pe(t, e, i, s), " ").concat(r, "w")
                    })).join(","),
                    r = "".concat(n, ",").concat(a);
                return o.preload && xe(r, "100vw", window.innerWidth), r
            },
            Te = function(t, e, i) {
                var o;
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!a.width) return Ee(t, e, i, a);
                const n = Se.map(o => {
                        const n = Math.round(a.width * o),
                            r = Math.round(a.height * o),
                            s = Pe(t, e, i, Object(T["a"])(Object(T["a"])({}, a), {}, {
                                width: n,
                                height: r
                            }));
                        return "".concat(s, " ").concat(n, "w")
                    }).join(","),
                    r = 2 * (null !== (o = a.mobilePadding) && void 0 !== o ? o : Ie),
                    s = _e.map(o => {
                        const n = o.width - r;
                        return je.map(o => {
                            const r = a.width / a.height,
                                s = Math.round(n * o),
                                c = Math.round(s / r),
                                l = Pe(t, e, i, Object(T["a"])(Object(T["a"])({}, a), {}, {
                                    width: s,
                                    height: c
                                }));
                            return "".concat(l, " ").concat(s, "w")
                        }).join(",")
                    }).join(","),
                    c = "".concat(s, ",").concat(n);
                return a.preload && xe(c, Le(a.width), a.width), c
            },
            Ne = function(t, e, i) {
                var o;
                let a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                if (!a.width) return Ee(t, e, i, a);
                const n = Se.map(o => {
                        const n = Math.round(a.width * o),
                            r = Math.round(a.height * o),
                            s = Pe(t, e, i, Object(T["a"])(Object(T["a"])({}, a), {}, {
                                width: n,
                                height: r
                            }));
                        return "".concat(s, " ").concat(n, "w")
                    }).join(","),
                    r = 2 * (null !== (o = a.mobilePadding) && void 0 !== o ? o : Ie),
                    s = _e.map(o => {
                        const n = Math.round((o.width - r + a.columnGap) / a.columnCount - a.columnGap);
                        return je.map(o => {
                            const r = Math.round(n * o),
                                s = Math.round(n * o),
                                c = Pe(t, e, i, Object(T["a"])(Object(T["a"])({}, a), {}, {
                                    width: s,
                                    height: !a.isMasonryLayout && s
                                }));
                            return "".concat(c, " ").concat(r, "w")
                        }).join(",")
                    }).join(",");
                return "".concat(s, ",").concat(n)
            };
        var qe = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [t.facebookMessengerId ? i("FacebookMessenger", {
                    attrs: {
                        "page-id": t.facebookMessengerId,
                        locale: t.siteMeta.facebookMessengerLocale
                    }
                }) : t._e(), t.whatsAppUrl ? i("a", {
                    staticClass: "whats-app-bubble",
                    class: {
                        "whats-app-bubble--next-to-messenger": t.facebookMessengerId
                    },
                    attrs: {
                        href: t.whatsAppUrl,
                        rel: "noopener",
                        title: "Open WhatsApp",
                        target: "_blank"
                    }
                }, [i("svg", {
                    attrs: {
                        width: "64",
                        height: "64",
                        viewBox: "0 0 64 64",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("circle", {
                    attrs: {
                        cx: "32",
                        cy: "32",
                        r: "32",
                        fill: "#4AA461"
                    }
                }), i("path", {
                    attrs: {
                        d: "M11.375 52.625L14.2745 42.0323C12.4853 38.9317 11.5452 35.4169 11.5469\n31.8127C11.552 20.5445 20.7216 11.375 31.988 11.375C37.4553 11.3767 42.5875 13.5062 46.4478 17.37C50.3064\n21.2337 52.4308 26.3694 52.4291 31.8316C52.4239 43.1014 43.2544 52.2709 31.988 52.2709C28.5677 52.2692 25.1972\n51.4116 22.2117 49.7822L11.375 52.625ZM22.7136 46.0817C25.5942 47.7919 28.3442 48.8162 31.9811 48.818C41.3448 48.818\n48.9727 41.197 48.9778 31.8281C48.9813 22.4403 41.3895 14.8297 31.9948 14.8262C22.6242 14.8262 15.0016 22.4472 14.9981\n31.8144C14.9964 35.6386 16.117 38.502 17.9991 41.4978L16.282 47.7678L22.7136 46.0817ZM42.285 36.6905C42.1578 36.4773\n 41.8175 36.3502 41.3053 36.0941C40.7948 35.838 38.2837 34.6022 37.8145 34.432C37.347 34.2619 37.0067 34.1759 36.6647\n 34.6881C36.3244 35.1986 35.3447 36.3502 35.0473 36.6905C34.75 37.0308 34.4509 37.0738 33.9405 36.8177C33.43 36.5616 31.7834\n 36.0236 29.8327 34.2825C28.315 32.9281 27.2889 31.2558 26.9916 30.7436C26.6942 30.2331 26.9606 29.9564 27.215\n 29.702C27.4453 29.4734 27.7255 29.1056 27.9816 28.8066C28.2411 28.5109 28.3253 28.2978 28.4972 27.9558C28.6673\n 27.6155 28.5831 27.3164 28.4542 27.0603C28.3253 26.8059 27.3044 24.2914 26.8798 23.2688C26.4639 22.2736 26.0428\n 22.4077 25.73 22.3922L24.7503 22.375C24.41 22.375 23.8566 22.5022 23.3891 23.0144C22.9216 23.5266 21.6016 24.7606\n 21.6016 27.2752C21.6016 29.7897 23.432 32.2183 23.6864 32.5586C23.9425 32.8989 27.2872 38.0586 32.4108 40.2706C33.6294\n 40.7966 34.5816 41.1111 35.3223 41.3466C36.5461 41.735 37.6598 41.68 38.5398 41.5494C39.5212 41.4033 41.5614 40.3136\n 41.9877 39.1208C42.4139 37.9262 42.4139 36.9036 42.285 36.6905Z",
                        fill: "white"
                    }
                })])]) : t._e()], 1)
            },
            Ae = [],
            He = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("div", {
                    attrs: {
                        id: "fb-root"
                    }
                }), i("div", {
                    staticClass: "fb-customerchat",
                    attrs: {
                        attribution: "install_email",
                        page_id: t.pageId
                    }
                })])
            },
            $e = [];
        const De = "og:type",
            Re = "website",
            Ve = "og:url",
            Ge = "og:image",
            Fe = "og:image:alt",
            Ue = "og:title",
            ze = "og:site_name",
            We = "og:description",
            Ye = "description",
            Ke = "twitter:card",
            Je = "twitter:title",
            Ze = "twitter:description",
            Xe = "summary_large_image",
            Qe = "twitter:image:alt",
            ti = "twitter:image",
            ei = "http-equiv",
            ii = "refresh",
            oi = "robots",
            ai = "noindex",
            ni = "data:;base64,iVBORw0KGgo=",
            ri = "8.0",
            si = ["https://app.ecwid.com", "https://storefront.ecwid.com", "https://app.shopsettings.com", "https://images-cdn.ecwid.com", "https://images.ecwid.com"],
            ci = ["https://www.youtube-nocookie.com", "https://i.ytimg.com", "https://www.google.com", "https://googleads.g.doubleclick.net", "https://static.doubleclick.net", "https://www.youtube.com", "https://youtube.com", "https://i9.ytimg.com", "https://s.ytimg.com"],
            li = ["https://vimeo.com", "https://i.vimeocdn.com", "https://f.vimeocdn.com", "https://player.vimeo.com"],
            di = ["https://www.google.com", "https://content-autofill.googleapis.com", "https://ktms1.googleapis.com", "https://maps.googleapis.com", "https://maps.gstatic.com"],
            ui = ["https://scontent-lga3-1.cdninstagram.com", "https://graph.instagram.com"],
            pi = [".zyrosite.space", ".zyrosite.com"],
            mi = t => {
                let {
                    version: e,
                    locale: i
                } = t;
                return {
                    innerHTML: "window.fbAsyncInit = function() {\n\t\tFB.init({\n\t\t\txfbml            : true,\n\t\t\tversion          : 'v".concat(e, "'\n\t\t});\n\t};\n\n\t(function(d, s, id) {\n\tvar js, fjs = d.getElementsByTagName(s)[0];\n\tif (d.getElementById(id)) return;\n\tjs = d.createElement(s); js.id = id;\n\tjs.src = 'https://connect.facebook.net/").concat(i, "/sdk/xfbml.customerchat.js';\n\tfjs.parentNode.insertBefore(js, fjs);\n\t}(document, 'script', 'facebook-jssdk'));"),
                    pbody: !0,
                    vmid: "fb-customerchat"
                }
            },
            gi = t => {
                let {
                    locale: e
                } = t;
                return {
                    async: !0,
                    defer: !0,
                    crossorigin: "anonymous",
                    src: "https://connect.facebook.net/".concat(e, "/sdk.js"),
                    vmid: "fb-customerchat-async"
                }
            },
            hi = t => ({
                innerHTML: "!function(f,b,e,v,n,t,s)\n\t{if(f.fbq)return;n=f.fbq=function(){n.callMethod?\n\tn.callMethod.apply(n,arguments):n.queue.push(arguments)};\n\tif(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';\n\tn.queue=[];t=b.createElement(e);t.async=!0;\n\tt.src=v;s=b.getElementsByTagName(e)[0];\n\ts.parentNode.insertBefore(t,s)}(window, document,'script',\n\t'https://connect.facebook.net/en_US/fbevents.js');\n\tfbq('init', '".concat(t, "');\n\tfbq('track', 'PageView');"),
                type: "text/javascript",
                async: !1,
                vmid: "facebook-pixel"
            }),
            bi = t => ({
                innerHTML: '\n\t<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id='.concat(t, '&ev=PageView&noscript=1"/>\n\t'),
                vmid: "facebook-pixel-no-script"
            }),
            vi = t => ({
                innerHTML: "(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':\n\t\tnew Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],\n\t\tj=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=\n\t\t'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);\n\t\t})(window,document,'script','dataLayer','".concat(t, "');"),
                type: "text/javascript",
                async: !1,
                vmid: "google-tag-manager"
            }),
            fi = t => ({
                innerHTML: '<iframe src="https://www.googletagmanager.com/ns.html?id='.concat(t, '"\n\t\t\t\t\t\t\t\theight="0" width="0" style="display:none;visibility:hidden"></iframe>'),
                pbody: !0,
                vmid: "google-tag-manager-no-script"
            }),
            yi = t => ({
                innerHTML: "window.dataLayer = window.dataLayer || [];\n\t\t\t\t\t\t\tfunction gtag(){dataLayer.push(arguments);}\n\t\t\t\t\t\t\tgtag('js', new Date());\n\t\t\t\t\t\t\tgtag('config', '".concat(t, "');"),
                type: "text/javascript",
                async: !1,
                vmid: "google-analytics"
            }),
            wi = t => ({
                src: "https://www.googletagmanager.com/gtag/js?id=".concat(t),
                async: !0,
                vmid: "google-analytics-async"
            }),
            ki = t => ({
                innerHTML: "(function(h,o,t,j,a,r){\n\t\th.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};\n\t\th._hjSettings={hjid:".concat(t, ",hjsv:6};\n\t\ta=o.getElementsByTagName('head')[0];\n\t\tr=o.createElement('script');r.async=1;\n\t\tr.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;\n\t\ta.appendChild(r);\n\t})(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');"),
                type: "text/javascript",
                async: !1,
                vmid: "hotjar"
            }),
            Oi = t => ({
                src: "//code-eu1.jivosite.com/widget/".concat(t),
                async: !0,
                vmid: "jivochat-async"
            });
        var _i = {
                props: {
                    pageId: {
                        type: [Number, String],
                        required: !0
                    },
                    locale: {
                        type: String,
                        default: null
                    }
                },
                metaInfo() {
                    return {
                        script: jt ? [] : [mi({
                            version: ri,
                            locale: this.locale
                        }), gi({
                            locale: this.locale
                        })]
                    }
                }
            },
            ji = _i,
            Ci = (i("9903"), Object(J["a"])(ji, He, $e, !1, null, null, null)),
            Si = Ci.exports;
        const Ii = '!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script",',
            xi = "!window.".concat(Ot, "&&").concat(Ii),
            Li = t => {
                let {
                    customScripts: e,
                    tagName: i
                } = t;
                const o = document.createElement("div");
                return o.innerHTML = e, [...o.children].filter(t => t.tagName.toLowerCase() === i.toLowerCase())
            },
            Bi = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                return t ? [...t.attributes].reduce((t, e) => {
                    let {
                        nodeName: i,
                        nodeValue: o
                    } = e;
                    return Object(T["a"])(Object(T["a"])({}, t), {}, {
                        [i]: o
                    })
                }, {
                    [e === ue ? "cssText" : "innerHTML"]: t.innerHTML
                }) : {}
            },
            Mi = t => {
                let {
                    customScripts: e,
                    tagName: i
                } = t;
                const o = Li({
                    customScripts: e,
                    tagName: i
                });
                return o.map((t, e) => {
                    const o = Bi(t, i);
                    return Object(T["a"])(Object(T["a"])({}, o), {}, {
                        vmid: o.name || o.id || "custom-".concat(i, "-").concat(e)
                    })
                })
            },
            Pi = t => t.replace(Ii, xi);
        var Ei = {
                components: {
                    FacebookMessenger: Si
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["d"])(["siteMeta"])), {}, {
                    whatsAppUrl() {
                        const {
                            whatsAppNumber: t,
                            whatsAppMessage: e
                        } = this.siteMeta;
                        return t ? "https://wa.me/".concat(t).concat(e ? "?text=".concat(e) : "") : null
                    },
                    facebookMessengerId() {
                        return this.siteMeta.facebookMessenger
                    },
                    facebookPixelScriptsNoScripts() {
                        return this.siteMeta.facebookPixel ? [bi(this.siteMeta.facebookPixel)] : []
                    },
                    googleTagManagerNoScripts() {
                        return this.siteMeta.googleTagManager ? [fi(this.siteMeta.googleTagManager)] : []
                    },
                    metaHeadNoScripts() {
                        return Mi({
                            customScripts: this.siteMeta.customMeta,
                            tagName: de
                        })
                    },
                    facebookPixelScripts() {
                        return this.siteMeta.facebookPixel ? [hi(this.siteMeta.facebookPixel)] : []
                    },
                    googleTagManagerScripts() {
                        return this.siteMeta.googleTagManager ? [vi(this.siteMeta.googleTagManager)] : []
                    },
                    googleAnalyticsScripts() {
                        return this.siteMeta.googleAnalytics ? [yi(this.siteMeta.googleAnalytics), wi(this.siteMeta.googleAnalytics)] : []
                    },
                    hotjarScripts() {
                        return this.siteMeta.hotjar ? [ki(this.siteMeta.hotjar)] : []
                    },
                    jivoChatScripts() {
                        return this.siteMeta.jivoChat ? [Oi(this.siteMeta.jivoChat)] : []
                    },
                    customMetaScripts() {
                        return this.siteMeta.customMeta ? Mi({
                            customScripts: Pi(this.siteMeta.customMeta),
                            tagName: le
                        }).map(t => Object(T["a"])(Object(T["a"])({}, t), {}, {
                            body: !0
                        })) : []
                    },
                    metaScripts() {
                        return jt ? [] : [...this.facebookPixelScripts, ...this.googleTagManagerScripts, ...this.googleAnalyticsScripts, ...this.hotjarScripts, ...this.jivoChatScripts, ...Ct ? [] : this.customMetaScripts]
                    },
                    metaNoScripts() {
                        return [...this.facebookPixelScriptsNoScripts, ...this.googleTagManagerNoScripts, ...this.metaHeadNoScripts]
                    }
                }),
                mounted() {
                    window.addEventListener("load", () => document.dispatchEvent(new Event("DOMContentLoaded")))
                },
                metaInfo() {
                    return {
                        script: this.metaScripts,
                        noscript: this.metaNoScripts
                    }
                }
            },
            Ti = Ei,
            Ni = (i("4d3b"), Object(J["a"])(Ti, qe, Ae, !1, null, null, null)),
            qi = Ni.exports;
        const Ai = t => {
                if ("string" !== typeof t || t.startsWith("data")) return t;
                try {
                    const e = new URL(t);
                    return e.searchParams.set("no-cache", String(Date.now())), e.toString()
                } catch (e) {
                    return t
                }
            },
            Hi = "https://assets.zyrosite.com";
        var $i = {
                components: {
                    Integrations: qi
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["websiteId", "website", "domain", "currentLocale"])), Object(R["d"])(["siteMeta"])), {}, {
                    isHomepage() {
                        return "/" === this.$route.path
                    },
                    homePage() {
                        return this.website.pages[this.siteMeta.homePageId]
                    },
                    homePageMeta() {
                        var t, e;
                        return null !== (t = null === (e = this.homePage) || void 0 === e ? void 0 : e.meta) && void 0 !== t ? t : {}
                    },
                    currentPage() {
                        const t = Object.values(this.website.pages).find(t => {
                            let {
                                slug: e
                            } = t;
                            return this.$route.params.slug === e
                        });
                        return this.isHomepage ? this.homePage : t
                    },
                    currentPageMeta() {
                        var t, e;
                        return null !== (t = null === (e = this.currentPage) || void 0 === e ? void 0 : e.meta) && void 0 !== t ? t : {}
                    },
                    siteName() {
                        var t;
                        return this.siteMeta.metaTitle || this.homePageMeta.title || (null === (t = this.homePage) || void 0 === t ? void 0 : t.name)
                    },
                    pageTitle() {
                        var t, e;
                        return (null === (t = this.currentPage) || void 0 === t ? void 0 : t.type) === k && "string" !== typeof this.currentPageMeta.title ? this.currentPage.name : this.currentPageMeta.title || this.siteMeta.metaTitle || (null === (e = this.currentPage) || void 0 === e ? void 0 : e.name)
                    },
                    pageDescription() {
                        return this.currentPageMeta.description || this.siteMeta.metaDescription || ""
                    },
                    faviconHref() {
                        if (!this.siteMeta.faviconPath) return ni;
                        const {
                            faviconOrigin: t,
                            faviconPath: e
                        } = this.siteMeta, i = Pe(t, e, this.websiteId, {
                            width: 32,
                            height: 32,
                            fit: "contain",
                            format: "png"
                        });
                        return Ai(i)
                    },
                    ogImage() {
                        const t = this.currentPageMeta.ogImageOrigin || this.siteMeta.ogImageOrigin,
                            e = this.currentPageMeta.ogImagePath || this.siteMeta.ogImagePath,
                            i = Pe(t, e, this.websiteId, {
                                width: 1200,
                                height: 630,
                                shouldContain: !0,
                                format: "jpeg"
                            });
                        return Ai(i)
                    },
                    ogImageAlt() {
                        return this.currentPageMeta.ogImageAlt || this.siteMeta.ogImageAlt || ""
                    },
                    ogImagesMeta() {
                        return this.ogImage ? [{
                            vmid: Ge,
                            property: Ge,
                            content: this.ogImage
                        }, {
                            vmid: Fe,
                            property: Fe,
                            content: this.ogImageAlt
                        }, {
                            vmid: ti,
                            name: ti,
                            content: this.ogImage
                        }, {
                            vmid: Qe,
                            name: Qe,
                            content: this.ogImageAlt
                        }] : []
                    },
                    ogMeta() {
                        return [{
                            vmid: Ue,
                            property: Ue,
                            content: this.pageTitle
                        }, {
                            vmid: We,
                            property: We,
                            content: this.pageDescription
                        }, {
                            vmid: De,
                            property: De,
                            content: Re
                        }, {
                            vmid: Ve,
                            property: Ve,
                            content: this.canonicalUrl
                        }, {
                            vmid: ze,
                            property: ze,
                            content: this.siteName
                        }, {
                            vmid: Ke,
                            name: Ke,
                            content: Xe
                        }, {
                            vmid: Je,
                            name: Je,
                            content: this.pageTitle
                        }, {
                            vmid: Ze,
                            name: Ze,
                            content: this.pageDescription
                        }, ...this.ogImagesMeta]
                    },
                    customMeta() {
                        return Mi({
                            customScripts: this.siteMeta.customMeta,
                            tagName: ce
                        })
                    },
                    customLinks() {
                        return Mi({
                            customScripts: this.siteMeta.customMeta,
                            tagName: pe
                        })
                    },
                    customStyles() {
                        return Mi({
                            customScripts: this.siteMeta.customMeta,
                            tagName: ue
                        })
                    },
                    isSiteAccessedViaGeneratedDomain() {
                        return pi.find(t => window.origin.includes(t))
                    },
                    isSiteAccessedViaNonCanonicalUrl() {
                        return this.domain && this.domain !== window.location.hostname
                    },
                    isSiteWithCustomDomain() {
                        return this.domain && pi.every(t => !this.domain.includes(t))
                    },
                    canonicalUrl() {
                        const {
                            pathname: t,
                            search: e,
                            hash: i
                        } = window.location;
                        return "https://".concat(this.domain).concat(t).concat(e).concat(i)
                    },
                    shouldGeneratedDomainNoindexBeApplied() {
                        return !jt && this.isSiteWithCustomDomain && this.isSiteAccessedViaGeneratedDomain
                    },
                    shouldPageNoindexMetaBeApplied() {
                        var t, e;
                        return !(null === (t = this.currentPage) || void 0 === t || null === (e = t.meta) || void 0 === e || !e.noindex)
                    },
                    noindexMeta() {
                        return this.shouldGeneratedDomainNoindexBeApplied || this.shouldPageNoindexMetaBeApplied ? [{
                            vmid: "".concat(oi, "-").concat(ai),
                            name: oi,
                            content: ai
                        }] : []
                    },
                    refreshRedirectMeta() {
                        return jt || this.isSiteAccessedViaGeneratedDomain || !this.isSiteAccessedViaNonCanonicalUrl ? [] : [{
                            vmid: ei,
                            [ei]: ii,
                            content: "0; url=".concat(this.canonicalUrl)
                        }]
                    },
                    htmlLang() {
                        return this.currentLocale || this.siteMeta.metaHtmlLanguage || E.value
                    }
                }),
                metaInfo() {
                    return {
                        title: this.pageTitle,
                        meta: [{
                            vmid: Ye,
                            name: Ye,
                            content: this.pageDescription
                        }, ...this.ogMeta, ...this.refreshRedirectMeta, ...this.customMeta, ...this.noindexMeta],
                        link: [{
                            rel: "icon",
                            href: this.faviconHref
                        }, {
                            rel: "apple-touch-icon",
                            href: this.faviconHref
                        }, ...this.customLinks, ...jt ? this.getPreconnectLinksArray() : []],
                        style: [...this.customStyles],
                        htmlAttrs: {
                            lang: this.htmlLang
                        }
                    }
                },
                methods: {
                    getPreconnectLinksArray() {
                        try {
                            const {
                                hasEcwid: t,
                                hasYoutube: e,
                                hasVimeo: i,
                                hasMap: o,
                                hasInstagram: a
                            } = ge(this.website, this.$route.path);
                            return [...Hi ? [Hi] : [], ...t ? si : [], ...e ? ci : [], ...i ? li : [], ...o ? di : [], ...a ? ui : []].map(t => ({
                                rel: "preconnect",
                                href: t
                            }))
                        } catch (t) {
                            return console.error(t), []
                        }
                    }
                }
            },
            Di = $i,
            Ri = Object(J["a"])(Di, re, se, !1, null, null, null),
            Vi = Ri.exports;
        const Gi = "gui",
            Fi = "UPDATE_IS_MOBILE_SCREEN",
            Ui = "SET_IS_MOBILE_SCREEN",
            {
                mapActions: zi
            } = Object(R["a"])(Gi);
        var Wi = {
                namespaced: !0,
                state: {
                    isMobileScreen: window.innerWidth < p,
                    isMobileView: null
                },
                mutations: {
                    [Ui]: (t, e) => {
                        t.isMobileScreen = e
                    }
                },
                actions: {
                    [Fi]: (t, e) => {
                        let {
                            commit: i
                        } = t;
                        return i(Ui, e)
                    }
                }
            },
            Yi = {
                components: {
                    Lightbox: ht,
                    Meta: Vi,
                    MobileObserver: kt
                },
                setup() {
                    const {
                        isLightboxOpen: t
                    } = dt();
                    return {
                        isLightboxOpen: t
                    }
                },
                computed: Object(T["a"])({}, Object(R["e"])(["website"])),
                async created() {
                    await this.initUserApp(), ne(this.website)
                },
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])(["initUserApp"])), zi({
                    updateIsMobileScreen: Fi
                }))
            },
            Ki = Yi,
            Ji = Object(J["a"])(Ki, $, D, !1, null, null, null),
            Zi = Ji.exports,
            Xi = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.website ? i("main", {
                    ref: "pageRef",
                    style: t.computedStyles
                }, [i("div", {
                    ref: "stickyTriggerRef",
                    staticClass: "sticky-trigger"
                }), t.website.navigation.hidden ? t._e() : i("BlockHeaderProviderUser", {
                    attrs: {
                        data: t.website.blocks.navigation,
                        "has-user-scrolled": t.hasUserScrolled,
                        height: t.headerHeight
                    },
                    on: {
                        "update-height": function(e) {
                            t.headerHeight = e
                        }
                    }
                }), t._l(t.allBlocks, (function(e, o) {
                    return i("BlockUser", {
                        key: e,
                        style: 0 === o ? t.transparentBlockStyle : null,
                        attrs: {
                            id: t.website.blocks[e].settings.htmlId || e,
                            data: t.website.blocks[e],
                            blocks: t.website.blocks,
                            lcp: t.lcp,
                            components: t.website.components,
                            "is-mobile-view": t.isMobileView,
                            "is-first": 0 === o,
                            "header-height": t.transparentBlockSize,
                            "transparent-header-height": 0 === o ? t.transparentBlockSize : 0
                        }
                    })
                })), t.siteMeta.isCookieBarEnabled ? i("CookieBanner") : t._e(), t.isLocaleWithZyroEcommerceItems ? i("EcommerceShoppingCartProviderUser", {
                    attrs: {
                        "header-height": t.headerHeight
                    }
                }) : t._e(), i("EcommerceModalRoot")], 2) : t._e()
            },
            Qi = [];
        i("5db7"), i("73d9");
        const to = 1600,
            eo = 1224,
            io = 12,
            oo = 16,
            ao = {
                "--content-width": "".concat(to, "px"),
                "--grid-width": "".concat(eo, "px"),
                "--column-count": io,
                "--content-padding": "".concat(oo, "px")
            },
            no = 8,
            ro = 8,
            so = ("".concat(no, "px"), "".concat(ro, "px"), 1920),
            co = (t, e) => {
                var i, o, a, n;
                const [r, s, c, l] = e.split("/").map(parseFloat), {
                    styles: d
                } = null !== (i = t.settings) && void 0 !== i ? i : {}, u = null !== (o = Number.parseFloat(null === d || void 0 === d ? void 0 : d["row-size"])) && void 0 !== o ? o : 48, p = null !== (a = Number.parseFloat(null === d || void 0 === d ? void 0 : d["column-gap"])) && void 0 !== a ? a : 24, m = null !== (n = Number.parseFloat(null === d || void 0 === d ? void 0 : d["row-gap"])) && void 0 !== n ? n : 16, g = (eo - (io - 1) * p) / io, h = (so - to) / 2 + p, b = (to - eo) / 2 - p;
                let v = so;
                const f = c - r,
                    y = f * u + (f - 1) * m;
                return 1 !== s && (v -= h), 17 !== l && (v -= h), s > 2 && (v -= b), l < 16 && (v -= b), s > 3 && (v -= (s - 3) * (g + p)), l < 15 && (v -= (15 - l) * (g + p)), l - s === 1 && (v = g), {
                    width: v,
                    height: y
                }
            },
            lo = (t, e) => Object.fromEntries(Object.entries(t).filter((t, i, o) => {
                let [a, n] = t;
                return e({
                    key: a,
                    value: n,
                    index: i,
                    array: o
                })
            })),
            uo = t => "[object Object]" === Object.prototype.toString.call(t),
            po = (t, e) => t in e ? e[t] : e.default,
            mo = (t, e) => t ? lo(t, e ? t => {
                let {
                    value: i
                } = t;
                return i.locale === e
            } : t => {
                let {
                    value: e
                } = t;
                return !e.locale
            }) : {},
            go = (t, e) => {
                if (!t || !e) return {};
                const i = Object.keys(e);
                return t.filter(t => i.includes(t))
            },
            ho = t => {
                const e = t.split(" "),
                    i = e.length;
                if (i < 1 || i > 4) throw new Error("Cannot parse ".concat(i, " sides"));
                const o = function(t) {
                    let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : t,
                        i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : t,
                        o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e;
                    return {
                        top: t,
                        right: e,
                        bottom: i,
                        left: o
                    }
                };
                return o(...e)
            },
            bo = ["padding", "m-padding", "block-padding"],
            vo = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
                return uo(t) ? Object.entries(t).reduce((t, i) => {
                    let [o, a] = i;
                    const n = e ? "".concat(e, "-").concat(o) : "--".concat(o);
                    if (uo(a)) return Object(T["a"])(Object(T["a"])({}, t), vo(a, n));
                    const r = bo.includes(o) ? Object.entries(ho(a)).reduce((t, e) => {
                        let [i, o] = e;
                        return Object(T["a"])(Object(T["a"])({}, t), {}, {
                            ["".concat(n, "-").concat(i)]: o,
                            [n]: a
                        })
                    }, {}) : {
                        [n]: a
                    };
                    return Object(T["a"])(Object(T["a"])({}, t), r)
                }, {}) : {}
            };
        var fo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockHeader", {
                    style: t.computedStyles,
                    attrs: {
                        items: t.navigationItems,
                        "is-open": t.isOpen,
                        "is-logo-visible": t.settings.showLogo,
                        "is-cart-visible": t.isCartVisible,
                        "logo-image-origin": t.settings.logoImageOrigin,
                        "logo-image-path": t.settings.logoImagePath,
                        "cart-text": t.settings.cartText,
                        "cart-icon-size": t.styles.cartIconSize,
                        "items-in-cart": t.cartItemsCount,
                        "logo-placement": t.logoPlacement,
                        background: t.data.background,
                        "background-image-url": t.backgroundImageUrl,
                        "is-sticky": t.settings.isSticky,
                        "has-user-scrolled": t.hasUserScrolled,
                        "is-language-switcher-visible": !1,
                        height: t.height,
                        "is-transparent": t.data.background.isTransparent,
                        "logo-placement-mobile": t.logoPlacementMobile,
                        "navigation-placement": t.navigationPlacement,
                        "navigation-placement-mobile": t.navigationPlacementMobile,
                        "logo-max-width": t.styles["logo-width"],
                        "logo-max-width-mobile": t.styles["m-logo-width"],
                        "logo-height": t.styles["logo-height"],
                        "logo-height-mobile": t.styles["m-logo-height"],
                        "logo-object-position": t.styles["logo-image-object-position"],
                        "logo-object-position-mobile": t.styles["m-logo-image-object-position"],
                        "background-color": t.data.background.color,
                        "is-logo-optimized": ""
                    },
                    on: {
                        "logo-click": t.handleLogoClick,
                        "cart-click": t.handleCartClick,
                        "toggle-visibility": function(e) {
                            t.isOpen = !t.isOpen
                        },
                        "navigation-item-click": function(e) {
                            return t.handleNavigationItemClick(e)
                        },
                        "update-height": function(e) {
                            return t.$emit("update-height", e)
                        }
                    }
                })
            },
            yo = [],
            wo = function() {
                var t, e = this,
                    i = e.$createElement,
                    o = e._self._c || i;
                return o("header", {
                    ref: "headerRef",
                    class: (t = {}, t[e.BLOCK_HEADER_CLASS] = !0, t[e.BLOCK_HEADER_STICKY_CLASS] = e.isSticky, t["block-header--with-shadow"] = e.isWithShadow, t)
                }, [e.background ? o("BlockHeaderBackground", {
                    attrs: {
                        "current-option": e.background.current,
                        "background-image-url": e.backgroundImageUrl,
                        color: e.background.color,
                        "overlay-opacity": e.background["overlay-opacity"],
                        "is-transparent": e.isCurrentlyTransparent
                    }
                }) : e._e(), o("div", {
                    staticClass: "block-header__content",
                    class: {
                        "block-header__content--open": e.isOpen
                    },
                    style: e.computedStyles
                }, [e.isLanguageSwitcherVisible ? o("LanguageSwitcher") : e._e(), e.isLogoVisible ? o("BlockHeaderLogo", {
                    staticClass: "block-header__logo",
                    class: {
                        "block-header__logo--m-with-cart": e.isCartVisible
                    },
                    attrs: {
                        "logo-image-path": e.logoImagePath,
                        "logo-image-origin": e.logoImageOrigin,
                        "max-width": e.logoMaxWidth,
                        "max-width-mobile": e.logoMaxWidthMobile,
                        height: e.logoHeight,
                        "height-mobile": e.logoHeightMobile,
                        "is-optimized": e.isLogoOptimized,
                        "object-position": e.logoObjectPosition,
                        "object-position-mobile": e.logoObjectPositionMobile
                    },
                    nativeOn: {
                        click: function(t) {
                            return e.$emit("logo-click", t)
                        }
                    }
                }) : e._e(), e.items.length ? o("ZyroHamburger", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "builder-siteheader-btn-hamburger",
                        expression: "'builder-siteheader-btn-hamburger'"
                    }],
                    staticClass: "block-header__burger",
                    class: {
                        "block-header__burger--m-with-cart": e.isCartVisible
                    },
                    attrs: {
                        "is-open": e.isOpen
                    },
                    on: {
                        click: function(t) {
                            return t.stopPropagation(), e.$emit("toggle-visibility")
                        }
                    }
                }) : e._e(), o("nav", {
                    staticClass: "block-header__nav"
                }, [o("ul", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "builder-siteheader-emptyspace",
                        expression: "'builder-siteheader-emptyspace'"
                    }],
                    staticClass: "block-header__links",
                    class: [{
                        "block-header__links--open": e.isOpen
                    }, "block-header__links--align-" + (e.navigationPlacementMobile || e.navigationPlacement)]
                }, e._l(e.items, (function(t) {
                    return o("BlockHeaderItem", {
                        key: t.id,
                        attrs: {
                            item: t,
                            "are-dropdowns-hidden": e.areDropdownsHidden,
                            "dropdown-background-color": e.backgroundColor,
                            "is-dropdown-transparent-mobile": "image" === e.background.current
                        },
                        on: {
                            "navigation-item-click": function(t) {
                                return e.$emit("navigation-item-click", t)
                            }
                        }
                    })
                })), 1)]), e.isCartVisible ? o("BlockHeaderCart", {
                    staticClass: "block-header__cart",
                    attrs: {
                        "cart-text": e.cartText,
                        "cart-icon-size": e.cartIconSize,
                        "items-in-cart": e.itemsInCart
                    },
                    on: {
                        click: function(t) {
                            return e.$emit("cart-click")
                        }
                    }
                }) : e._e()], 1)], 1)
            },
            ko = [],
            Oo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("select", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.siteLanguages,
                        expression: "siteLanguages"
                    }],
                    domProps: {
                        value: t.currentLocale
                    },
                    on: {
                        change: function(e) {
                            return t.changeCurrentLocale(e)
                        }
                    }
                }, t._l(t.siteLanguages, (function(e) {
                    return i("option", {
                        key: e.locale,
                        domProps: {
                            value: e.locale
                        }
                    }, [t._v(" " + t._s(e.locale) + " ")])
                })), 0)])
            },
            _o = [],
            jo = {
                name: "LanguageSwitcher",
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["currentLocale"])), Object(R["d"])(["siteLanguages"])),
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])(["updateCurrentLocale"])), {}, {
                    changeCurrentLocale(t) {
                        this.updateCurrentLocale(t.target.value), this.$router.push("/".concat(this.currentLocale))
                    }
                })
            },
            Co = jo,
            So = (i("a783"), Object(J["a"])(Co, Oo, _o, !1, null, "db5ff5a6", null)),
            Io = So.exports,
            xo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", t._g({
                    staticClass: "burger",
                    class: {
                        "burger--open": t.isOpen
                    },
                    style: t.computedStyles,
                    attrs: {
                        type: "button",
                        title: t.title
                    }
                }, t.$listeners), [i("span", {
                    staticClass: "burger__bun"
                }), i("span", {
                    staticClass: "burger__meat"
                }), i("span", {
                    staticClass: "burger__bun"
                })])
            },
            Lo = [],
            Bo = {
                props: {
                    title: {
                        type: String,
                        default: "Menu"
                    },
                    isOpen: {
                        type: Boolean,
                        required: !0
                    },
                    color: {
                        type: String,
                        default: "var(--nav-link-color)"
                    }
                },
                computed: {
                    computedStyles() {
                        return {
                            "--burger-color": this.color
                        }
                    }
                }
            },
            Mo = Bo,
            Po = (i("93d8"), Object(J["a"])(Mo, xo, Lo, !1, null, "5963fafa", null)),
            Eo = Po.exports,
            To = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "background",
                    class: {
                        "background--with-image": t.backgroundImage
                    },
                    style: t.computedStyles
                })
            },
            No = [];
        const qo = 1920;
        var Ao = {
                name: "BlockHeaderBackground",
                props: {
                    currentOption: {
                        type: String,
                        default: "color"
                    },
                    backgroundImageUrl: {
                        type: String,
                        default: ""
                    },
                    color: {
                        type: String,
                        default: ""
                    },
                    isTransparent: {
                        type: Boolean,
                        default: !1
                    },
                    overlayOpacity: {
                        type: String,
                        default: "0"
                    }
                },
                computed: {
                    backgroundImage() {
                        return "image" === this.currentOption && this.backgroundImageUrl
                    },
                    backgroundColor() {
                        return "color" === this.currentOption ? this.color : "transparent"
                    },
                    computedStyles() {
                        return {
                            "--background-color": this.isTransparent ? "transparent" : this.backgroundColor,
                            "--m-background-color": this.backgroundColor,
                            "--background-image": "url(".concat(this.backgroundImageUrl, ")"),
                            "--background-image-opacity": this.overlayOpacity
                        }
                    }
                }
            },
            Ho = Ao,
            $o = (i("015f"), Object(J["a"])(Ho, To, No, !1, null, null, null)),
            Do = $o.exports,
            Ro = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-header-cart-wrapper",
                    style: {
                        cartIconSize: t.cartIconSize
                    }
                }, [i("button", {
                    staticClass: "block-header-cart",
                    attrs: {
                        title: "Go to cart",
                        "data-qa": "header-btn-shoppingbag"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("click")
                        }
                    }
                }, [i("div", {
                    staticClass: "block-header-cart__icon-container"
                }, [i("svg", {
                    staticClass: "block-header-cart__icon",
                    attrs: {
                        width: "19",
                        height: "24",
                        viewBox: "0 0 19 24",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        "fill-rule": "evenodd",
                        "clip-rule": "evenodd",
                        d: "M5.94636 5.35922C6.29451 3.00506 7.9363 1.39824 9.67973\n\t\t\t\t\t1.39824C11.4232 1.39824 13.0649 3.00506\n\t\t\t\t\t13.4131 5.35922H5.94636ZM4.53847 5.35922C4.90317 2.43147\n\t\t\t\t\t6.95866 0.000183105 9.67973 0.000183105C12.4008\n\t\t\t\t\t0.000183105 14.4563 2.43147 14.821 5.35922H17.2816H18.6797V6.75728V21.2039C18.6797\n\t\t\t\t\t22.7481 17.4278 24 15.8836\n\t\t\t\t\t24H3.4758C1.93155 24 0.679688 22.7481 0.679688\n\t\t\t\t\t21.2039V6.75728V5.35922H2.07775H4.53847ZM2.07775 6.75728H4.52596V9.08752C4.52596\n\t\t\t\t\t9.47359 4.83893 9.78655 5.22499 9.78655C5.61105 9.78655 5.92402 9.47359\n\t\t\t\t\t5.92402 9.08752V6.75728H13.5259V9.08752C13.5259 9.47359\n\t\t\t\t\t13.8389 9.78655 14.2249 9.78655C14.611 9.78655 14.9239\n\t\t\t\t\t9.47359 14.9239 9.08752V6.75728H17.2816V21.2039C17.2816 21.976 16.6557 22.6019\n\t\t\t\t\t15.8836 22.6019H3.4758C2.70368 22.6019 2.07775 21.976 2.07775 21.2039V6.75728Z",
                        fill: "currentColor"
                    }
                })]), i("span", [t._v(t._s(t.cartText) + " (" + t._s(t.itemsInCart) + ")")])])])])
            },
            Vo = [],
            Go = {
                name: "BlockHeaderCart",
                props: {
                    cartIconSize: {
                        type: String,
                        required: !0
                    },
                    cartText: {
                        type: String,
                        required: !0
                    },
                    itemsInCart: {
                        type: Number,
                        required: !0
                    }
                }
            },
            Fo = Go,
            Uo = (i("0c1e"), Object(J["a"])(Fo, Ro, Vo, !1, null, "7cd41344", null)),
            zo = Uo.exports,
            Wo = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("li", {
                    staticClass: "block-header-item",
                    class: {
                        "block-header-item--has-desktop-dropdown": !t.areDropdownsHidden && t.isShownOnDesktop, "block-header-item--has-mobile-dropdown": t.isShownOnMobile
                    },
                    style: t.computedStyles
                }, [i("BlockHeaderItemContent", {
                    staticClass: "block-header-item__item",
                    attrs: {
                        "data-qa": "navigation-item-" + (t.item.name && t.item.name.split(" ").join("").toLowerCase()),
                        item: t.item,
                        "aria-haspopup": t.item.hasDropdown,
                        "aria-expanded": t.isShownOnDesktop || t.isShownOnMobile
                    },
                    on: {
                        toggle: function(e) {
                            t.isShownOnMobile = !t.isShownOnMobile, t.isShownOnDesktop = !t.isShownOnDesktop
                        },
                        "navigation-item-click": function(e) {
                            return t.$emit("navigation-item-click", e)
                        }
                    },
                    nativeOn: {
                        mouseover: function(e) {
                            t.isShownOnDesktop = !0
                        },
                        mouseleave: function(e) {
                            t.isShownOnDesktop = !1
                        }
                    }
                }), !t.areDropdownsHidden && t.item.hasDropdown ? i("div", {
                    staticClass: "block-header-item__dropdown-area",
                    on: {
                        mouseover: function(e) {
                            t.isShownOnDesktop = !0
                        },
                        mouseleave: function(e) {
                            t.isShownOnDesktop = !1
                        }
                    }
                }, [i("ul", {
                    staticClass: "block-header-item__dropdown"
                }, t._l(t.item.subItems, (function(e) {
                    return i("BlockHeaderItem", t._g({
                        key: e.id,
                        attrs: {
                            item: e
                        }
                    }, t.$listeners))
                })), 1)]) : t._e()], 1)
            },
            Yo = [],
            Ko = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: ["item-content-wrapper", {
                        "item-content-wrapper--active": t.item.isCurrent
                    }]
                }, [i(t.item.isFolder ? "span" : "a", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: t.item.isCurrent ? "navigationblock-page-active-" + t.item.name : "navigationblock-page-" + t.item.name,
                        expression: "item.isCurrent ? `navigationblock-page-active-${item.name}` : `navigationblock-page-${item.name}`"
                    }],
                    tag: "a",
                    staticClass: "item-content",
                    attrs: {
                        target: t.item.target,
                        rel: t.item.rel,
                        href: t.item.url
                    },
                    domProps: {
                        textContent: t._s(t.item.name)
                    },
                    on: {
                        click: t.handleClick
                    }
                }), t.item.hasDropdown ? i("div", {
                    staticClass: "item-content__icon-container-wrapper"
                }, [i("button", {
                    staticClass: "item-content__icon-container",
                    attrs: {
                        label: "Expand dropdown"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("toggle")
                        }
                    }
                }, [i("svg", {
                    staticClass: "item-content__icon",
                    attrs: {
                        width: "10",
                        height: "7",
                        viewBox: "0 0 10 7",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M5 6.5L0.669873 0.5L9.33013 0.500001L5 6.5Z",
                        fill: "currentColor"
                    }
                })])])]) : t._e()], 1)
            },
            Jo = [],
            Zo = {
                name: "BlockHeaderItemContent",
                props: {
                    item: {
                        type: Object,
                        required: !0
                    }
                },
                methods: {
                    handleClick(t) {
                        this.$emit("navigation-item-click", {
                            navigationItem: this.item,
                            event: t,
                            toggle: () => this.$emit("toggle")
                        })
                    }
                }
            },
            Xo = Zo,
            Qo = (i("44cf"), Object(J["a"])(Xo, Ko, Jo, !1, null, "16cb8b52", null)),
            ta = Qo.exports,
            ea = {
                name: "BlockHeaderItem",
                components: {
                    BlockHeaderItemContent: ta
                },
                props: {
                    item: {
                        type: Object,
                        required: !0
                    },
                    dropdownBackgroundColor: {
                        type: String,
                        default: null
                    },
                    areDropdownsHidden: {
                        type: Boolean,
                        default: !1
                    },
                    isDropdownTransparentMobile: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        isShownOnDesktop: !1,
                        isShownOnMobile: !1
                    }
                },
                computed: {
                    computedStyles() {
                        return {
                            "--dropdown-background-color": this.dropdownBackgroundColor,
                            "--m-dropdown-background-color": this.isDropdownTransparentMobile ? "transparent" : "var(--contrastBackgroundColor)"
                        }
                    }
                }
            },
            ia = ea,
            oa = (i("b242"), Object(J["a"])(ia, Wo, Yo, !1, null, "6ef35d4f", null)),
            aa = oa.exports,
            na = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("a", {
                    staticClass: "block-header-logo",
                    style: t.computedStyles,
                    attrs: {
                        href: t.rootRoute
                    }
                }, [i("img", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "builder-siteheader-img-logo",
                        expression: "'builder-siteheader-img-logo'"
                    }],
                    staticClass: "block-header-logo__image",
                    attrs: {
                        src: t.optimizedUrl,
                        alt: "Logo"
                    },
                    on: {
                        load: t.handleLogoImageLoad
                    }
                })])
            },
            ra = [],
            sa = {
                name: "BlockHeaderLogo",
                props: {
                    logoImageOrigin: {
                        type: String,
                        default: null
                    },
                    logoImagePath: {
                        type: String,
                        default: null
                    },
                    height: {
                        type: String,
                        default: null
                    },
                    heightMobile: {
                        type: String,
                        default: null
                    },
                    maxWidth: {
                        type: String,
                        default: null
                    },
                    maxWidthMobile: {
                        type: String,
                        default: null
                    },
                    objectPosition: {
                        type: String,
                        default: null
                    },
                    objectPositionMobile: {
                        type: String,
                        default: null
                    },
                    isOptimized: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        optimizedHeight: null,
                        optimizedHeightMobile: null
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["websiteId", "currentLocale"])), Object(R["d"])(["defaultLocale"])), {}, {
                    rootRoute() {
                        return this.currentLocale ? "/".concat(this.currentLocale) : "/"
                    },
                    baseComputedStyles() {
                        return {
                            "--height": "".concat(this.height, "px"),
                            "--m-height": "".concat(this.heightMobile, "px"),
                            "--width": this.maxWidth,
                            "--m-width": this.maxWidthMobile,
                            "--object-position": this.objectPosition,
                            "--m-object-position": this.objectPositionMobile
                        }
                    },
                    optimizedComputedStyles() {
                        return this.optimizedHeight && this.optimizedHeightMobile ? Object(T["a"])(Object(T["a"])({}, this.baseComputedStyles), {}, {
                            "--height": "".concat(this.optimizedHeight, "px"),
                            "--m-height": "".concat(this.optimizedHeightMobile, "px")
                        }) : Object(T["a"])({}, this.baseComputedStyles)
                    },
                    computedStyles() {
                        return this.isOptimized ? this.optimizedComputedStyles : this.baseComputedStyles
                    },
                    optimizedUrl() {
                        var t, e;
                        if (!this.isOptimized) return ye(this.logoImageOrigin, this.logoImagePath, this.websiteId);
                        const i = Number.parseInt(this.maxWidth, 10);
                        return Pe(this.logoImageOrigin, this.logoImagePath, this.websiteId, {
                            width: (null !== (t = null === (e = window) || void 0 === e ? void 0 : e.devicePixelRatio) && void 0 !== t ? t : 1) * i
                        })
                    }
                }),
                methods: {
                    handleLogoImageLoad(t) {
                        if (!this.isOptimized) return;
                        const e = Number.parseInt(this.maxWidth, 10),
                            i = Number.parseInt(this.maxWidthMobile, 10) || e,
                            o = t.target.naturalWidth / t.target.naturalHeight;
                        this.optimizedHeight = e / o, this.optimizedHeightMobile = i / o
                    }
                }
            },
            ca = sa,
            la = (i("49f9"), Object(J["a"])(ca, na, ra, !1, null, "36a22ef7", null)),
            da = la.exports,
            ua = {
                name: "BlockHeader",
                components: {
                    ZyroHamburger: Eo,
                    BlockHeaderCart: zo,
                    BlockHeaderLogo: da,
                    BlockHeaderItem: aa,
                    BlockHeaderBackground: Do,
                    LanguageSwitcher: Io
                },
                props: {
                    items: {
                        type: Array,
                        default: () => []
                    },
                    logoImageOrigin: {
                        type: String,
                        default: null
                    },
                    logoImagePath: {
                        type: String,
                        default: null
                    },
                    backgroundImageUrl: {
                        type: String,
                        default: null
                    },
                    isOpen: {
                        type: Boolean,
                        default: !1
                    },
                    isSticky: {
                        type: Boolean,
                        default: !1
                    },
                    isTransparent: {
                        type: Boolean,
                        default: !1
                    },
                    hasUserScrolled: {
                        type: Boolean,
                        default: !1
                    },
                    height: {
                        type: Number,
                        default: null
                    },
                    isLogoVisible: {
                        type: Boolean,
                        default: !1
                    },
                    isCartVisible: {
                        type: Boolean,
                        default: !1
                    },
                    isLanguageSwitcherVisible: {
                        type: Boolean,
                        default: !1
                    },
                    backgroundColor: {
                        type: String,
                        default: ""
                    },
                    cartText: {
                        type: String,
                        default: null
                    },
                    itemsInCart: {
                        type: Number,
                        default: 0
                    },
                    logoPlacement: {
                        type: String,
                        default: null
                    },
                    logoPlacementMobile: {
                        type: String,
                        default: null
                    },
                    navigationPlacement: {
                        type: String,
                        default: null
                    },
                    navigationPlacementMobile: {
                        type: String,
                        default: null
                    },
                    areDropdownsHidden: {
                        type: Boolean,
                        default: !1
                    },
                    isLogoOptimized: {
                        type: Boolean,
                        default: !1
                    },
                    background: {
                        type: Object,
                        default: null
                    },
                    cartIconSize: {
                        type: String,
                        default: null
                    },
                    logoMaxWidth: {
                        type: String,
                        default: null
                    },
                    logoHeight: {
                        type: String,
                        default: null
                    },
                    logoHeightMobile: {
                        type: String,
                        default: null
                    },
                    logoMaxWidthMobile: {
                        type: String,
                        default: null
                    },
                    logoObjectPosition: {
                        type: String,
                        default: null
                    },
                    logoObjectPositionMobile: {
                        type: String,
                        default: null
                    }
                },
                setup() {
                    return {
                        BLOCK_HEADER_CLASS: f,
                        BLOCK_HEADER_STICKY_CLASS: y
                    }
                },
                data() {
                    return {
                        headerResizeObserver: null
                    }
                },
                computed: {
                    isWithShadow() {
                        return this.hasUserScrolled && this.isSticky
                    },
                    shouldForceTransparency() {
                        return this.isSticky && !this.hasUserScrolled || !this.isSticky
                    },
                    isCurrentlyTransparent() {
                        return this.isTransparent && this.shouldForceTransparency
                    },
                    isLogoAndNavigationCentered() {
                        return "center" === this.logoPlacement && "center" === this.navigationPlacement
                    },
                    isLogoAndNavigationCenteredMobile() {
                        return "center" === this.logoPlacementMobile && "center" === this.navigationPlacementMobile
                    },
                    navigationGridRowCount() {
                        return this.isLogoVisible && this.isCartVisible ? 3 : 2
                    },
                    computedStyles() {
                        const t = "".concat(this.logoPlacement, "-").concat(this.navigationPlacement),
                            e = "".concat(this.logoPlacementMobile, "-").concat(this.navigationPlacementMobile),
                            {
                                templateColumns: i
                            } = _[t],
                            o = this.isCartVisible ? "auto minmax(0, calc(var(--m-logo-width) + var(--space-between-menu) * 2)) 1fr" : _[e].mTemplateColumns;
                        return {
                            "--navigation-grid-template-columns": this.isLogoVisible ? i : "1fr",
                            "--m-navigation-grid-template-columns": this.isLogoVisible ? o : "1fr",
                            "--logo-grid-row": "".concat(_[t].logoRow, "/").concat(this.navigationGridRowCount),
                            "--m-logo-grid-row": "".concat(_[e].logoRow, "/").concat(this.navigationGridRowCount),
                            "--logo-grid-column": _[t].logoColumn,
                            "--m-logo-grid-column": _[e].logoColumn,
                            "--logo-justify-self": this.getJustifyContent(this.logoPlacement),
                            "--m-logo-justify-self": this.getJustifyContent(this.logoPlacementMobile),
                            "--logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacement),
                            "--m-logo-image-object-position": this.getLogoImageObjectPosition(this.logoPlacementMobile),
                            "--links-grid-row": "".concat(_[t].menuRow, "/").concat(this.navigationGridRowCount),
                            "--m-links-grid-row": "".concat(_[e].menuRow, "/").concat(this.navigationGridRowCount),
                            "--links-grid-column": this.isLogoVisible ? _[t].menuColumn : "1/2",
                            "--m-links-grid-column": this.isLogoVisible ? _[e].menuColumn : "1/2",
                            "--cart-grid-row": "".concat(_[t].cartRow, "/").concat(this.navigationGridRowCount),
                            "--cart-grid-column": this.isLogoVisible ? _[t].cartColumn : "2/2",
                            "--logo-spacing": this.getLogoMarginPlacement(),
                            "--m-logo-spacing": this.getLogoMarginPlacement(!0),
                            "--navigation-text-align": this.navigationPlacement,
                            "--m-navigation-text-align": this.navigationPlacementMobile,
                            "--navigation-justify-self": this.getJustifyContent(this.navigationPlacement),
                            "--m-navigation-justify-self": this.getJustifyContent(this.navigationPlacementMobile),
                            "--mobileBackground": "var(--background-color,  var(--background-image))"
                        }
                    }
                },
                mounted() {
                    this.$forceUpdate(), this.headerResizeObserver = new ResizeObserver(t => {
                        let [{
                            contentRect: e
                        }] = t;
                        requestAnimationFrame(() => {
                            const {
                                height: t
                            } = e;
                            t !== this.height && this.$emit("update-height", t)
                        })
                    }), this.headerResizeObserver.observe(this.$refs.headerRef)
                },
                beforeDestroy() {
                    this.headerResizeObserver.disconnect()
                },
                methods: {
                    getJustifyContent(t) {
                        return j[t] || j.default
                    },
                    getLogoImageObjectPosition(t) {
                        return C[t] || C.default
                    },
                    getLogoMarginPlacement() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                        const e = t ? this.isLogoAndNavigationCenteredMobile : this.isLogoAndNavigationCentered,
                            i = t ? this.logoPlacementMobile : this.logoPlacement;
                        return t && this.isCartVisible ? O.center : e ? O["center-center"] : O[i]
                    }
                }
            },
            pa = ua,
            ma = (i("b2c1"), Object(J["a"])(pa, wo, ko, !1, null, "59583846", null)),
            ga = ma.exports;
        const ha = Object(U["f"])([]),
            ba = () => {
                const t = Object(U["a"])(() => ha.value.reduce((t, e) => t + e.quantity, 0)),
                    e = () => {
                        const t = window.Ecwid.Controller.getEntryPage();
                        window.Ecwid.openPage(t.type.toLowerCase(), {
                            id: t.categoryId
                        })
                    },
                    i = () => {
                        window.Ecwid && window.Ecwid.openPage("cart")
                    },
                    o = t => {
                        ha.value = t
                    };
                return {
                    ecwidCartItems: Object(U["a"])(() => ha.value),
                    ecwidCartItemCount: t,
                    openCart: i,
                    setEcwidCartItems: o,
                    openEcwidHomepage: e
                }
            },
            va = t => {
                var e, i;
                const o = null === (e = document.querySelector(t)) || void 0 === e ? void 0 : e.getBoundingClientRect().top;
                if (!o) return;
                const a = (null === (i = document.querySelector(".".concat(f))) || void 0 === i ? void 0 : i.offsetHeight) || 0,
                    n = document.querySelector(".".concat(y));
                window.scrollBy({
                    top: n ? o - a : o,
                    behavior: "smooth"
                })
            },
            fa = () => {
                var t, e;
                const {
                    $store: i,
                    $router: o
                } = null !== (t = null === (e = Object(U["b"])()) || void 0 === e ? void 0 : e.proxy) && void 0 !== t ? t : {}, a = Object(U["a"])(() => i.state.currentLocale), n = Object(U["a"])(() => Object.values(i.state.website.pages).map(t => {
                    let {
                        slug: e
                    } = t;
                    return e
                })), r = t => {
                    const e = t.target.closest("a");
                    if (!e) return;
                    const {
                        href: i,
                        hash: r,
                        pathname: s,
                        target: c,
                        origin: l
                    } = e, d = s.split("/").pop(), u = e.getAttribute("href"), p = l === window.location.origin, m = i.replace(l, ""), g = n.value.includes(d) || "/" === s || s === "/".concat(a.value) || s.startsWith("/#"), h = p && g, b = c === S, v = !!r, f = u.includes(window.location.origin);
                    !h || b || f || (t.preventDefault(), i !== window.location.href ? o.push(m) : v ? va(r) : window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: "smooth"
                    }))
                };
                return {
                    linkClickHandler: r
                }
            },
            ya = t => {
                const e = "image" === t.current,
                    i = e ? "url(".concat(t[t.current], ")") : t[t.current];
                return {
                    ["--background-".concat(t.current)]: i
                }
            };
        var wa = {
                name: "BlockHeaderProviderUser",
                components: {
                    BlockHeader: ga
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    },
                    hasUserScrolled: {
                        type: Boolean,
                        default: !1
                    },
                    height: {
                        type: Number,
                        default: null
                    }
                },
                setup(t) {
                    const {
                        ecwidCartItemCount: e,
                        openCart: i,
                        openEcwidHomepage: o
                    } = ba(), {
                        linkClickHandler: a
                    } = fa(), n = Object(U["a"])(() => {
                        var e, i;
                        return Object(T["a"])(Object(T["a"])({}, vo(null === (e = t.data) || void 0 === e ? void 0 : e.settings.styles)), ya(null === (i = t.data) || void 0 === i ? void 0 : i.background))
                    });
                    return {
                        linkClickHandler: a,
                        ecwidCartItemCount: e,
                        openCart: i,
                        openEcwidHomepage: o,
                        computedStyles: n
                    }
                },
                data() {
                    return {
                        isOpen: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["website", "websiteId", "currentLocale"])), Object(R["e"])("gui", ["isMobileScreen"])), Object(R["d"])(["siteMeta", "ecommercePages", "isHomepageWithEcwid", "homePageId", "hasLanguages"])), Object(R["d"])("ecommerce", ["shoppingCartItems"])), Object(R["d"])("navigation", ["items", "itemsIds"])), Object(R["d"])("ecommerce", ["isLocaleWithZyroEcommerceItems"])), {}, {
                    isLocaleWithEcwid() {
                        return Object.keys(this.ecommercePages).length > 0
                    },
                    settings() {
                        return this.data.settings
                    },
                    styles() {
                        return this.settings.styles
                    },
                    backgroundImageUrl() {
                        var t, e, i, o;
                        if (null === (t = this.data) || void 0 === t || null === (e = t.background) || void 0 === e || !e.imageOrigin || null === (i = this.data) || void 0 === i || null === (o = i.background) || void 0 === o || !o.imagePath) return null;
                        const {
                            imageOrigin: a,
                            imagePath: n
                        } = this.data.background;
                        return Pe(a, n, this.websiteId, {
                            width: qo,
                            preload: !1
                        })
                    },
                    navigationItems() {
                        const t = e => {
                            var i, o;
                            const a = this.items[e],
                                {
                                    pages: n
                                } = this.website,
                                {
                                    name: r,
                                    type: s,
                                    target: c,
                                    url: l
                                } = a,
                                d = s === h,
                                u = s === g,
                                p = s === b,
                                m = (null === (i = n[e]) || void 0 === i ? void 0 : i.slug) === n[this.homePageId].slug,
                                v = null === (o = n[e]) || void 0 === o ? void 0 : o.slug;
                            let f;
                            return f = m ? this.currentLocale ? "/".concat(this.currentLocale) : "/" : this.currentLocale ? v && "/".concat(this.currentLocale, "/").concat(v) || l : v && "/".concat(v) || l, Object(T["a"])(Object(T["a"])({}, a), {}, {
                                name: d ? n[e].name : r,
                                url: f,
                                id: e,
                                isPage: d,
                                isLink: u,
                                isFolder: p,
                                hasDropdown: !!a.subItems.length || a.isFolder,
                                target: c,
                                isCurrent: this.$route.path === "/".concat(v) || "/" === this.$route.path && m,
                                subItems: a.subItems.map(t)
                            })
                        };
                        return this.itemsIds.map(t)
                    },
                    navigationPlacement() {
                        return this.settings.navigationPlacement
                    },
                    navigationPlacementMobile() {
                        return this.settings["m-navigationPlacement"] || this.navigationPlacement
                    },
                    logoPlacement() {
                        return this.settings.logoPlacement
                    },
                    logoPlacementMobile() {
                        return this.settings["m-logoPlacement"] || this.logoPlacement
                    },
                    isCartVisible() {
                        return !!this.settings.isCartVisible && (this.isLocaleWithEcwid || this.isLocaleWithZyroEcommerceItems)
                    },
                    cartItemsCount() {
                        return this.isLocaleWithZyroEcommerceItems ? this.shoppingCartItems.length : this.settings.isCartVisible ? this.ecwidCartItemCount : 0
                    }
                }),
                watch: {
                    $route() {
                        this.isOpen = !1
                    }
                },
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])("ecommerce", ["setShoppingCartOpen"])), {}, {
                    handleCartClick() {
                        var t;
                        const e = Object.values(this.ecommercePages).some(t => {
                            let {
                                slug: e
                            } = t;
                            return "/".concat(e) === this.$route.path
                        });
                        if (this.isLocaleWithZyroEcommerceItems) this.setShoppingCartOpen(!0);
                        else if (e) this.openCart();
                        else if ("cart" !== (null === (t = this.$route.query) || void 0 === t ? void 0 : t["store-page"])) {
                            const {
                                slug: t,
                                blocks: e
                            } = Object.values(this.ecommercePages)[0], i = e.find(t => "BlockEcwidStore" === this.website.blocks[t].type);
                            this.$router.push({
                                path: "/".concat(t),
                                hash: i,
                                query: {
                                    "store-page": "cart"
                                }
                            })
                        }
                    },
                    handleLogoClick(t) {
                        t.preventDefault(), "/" !== this.$route.path ? this.$router.push("/") : this.isHomepageWithEcwid ? this.openEcwidHomepage() : window.scrollTo({
                            top: 0,
                            behavior: "smooth"
                        })
                    },
                    handleNavigationItemClick(t) {
                        let {
                            navigationItem: e,
                            event: i,
                            toggle: o
                        } = t;
                        e.isFolder && this.isMobileScreen ? o() : (this.linkClickHandler(i), this.handleEcwidHomepageClick(e.id))
                    },
                    handleEcwidHomepageClick(t) {
                        const e = Object.keys(this.ecommercePages).includes(t);
                        window.Ecwid && e && window.Ecwid.openPage("category")
                    }
                })
            },
            ka = wa,
            Oa = Object(J["a"])(ka, fo, yo, !1, null, null, null),
            _a = Oa.exports,
            ja = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.isHidden ? t._e() : i("div", {
                    staticClass: "cookie-banner"
                }, [i("div", {
                    staticClass: "cookie-banner__frame"
                }, [i("p", {
                    staticClass: "cookie-banner__text"
                }, [t._v(" This website uses cookies to provide necessary site functionality and to improve your experience. By using this website, you agree to our use of cookies. ")]), i("button", {
                    staticClass: "cookie-banner__close",
                    attrs: {
                        title: "Close"
                    },
                    on: {
                        click: t.close
                    }
                }, [i("svg", {
                    attrs: {
                        width: "20",
                        height: "20",
                        viewBox: "0 0 20 20",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M15 5L5 15",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5 5L15 15",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])])])
            },
            Ca = [];
        const Sa = t => {
                const e = "".concat(t, "="),
                    i = decodeURIComponent(document.cookie),
                    o = i.split(";");
                for (let a = 0; a < o.length; a += 1) {
                    let t = o[a];
                    while (" " === t.charAt(0)) t = t.substring(1);
                    if (0 === t.indexOf(e)) return t.substring(e.length, t.length)
                }
                return ""
            },
            Ia = function(t, e, i) {
                let {
                    cdomain: o = null
                } = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {};
                const a = new Date;
                a.setTime(a.getTime() + 24 * i * 60 * 60 * 1e3);
                const n = i ? "expires=".concat(a.toUTCString(), ";") : "",
                    r = o ? "domain=".concat(o, ";") : "";
                document.cookie = "".concat(t, "=").concat(e, ";").concat(n, "path=/;").concat(r)
            };
        var xa = {
                data() {
                    return {
                        isHidden: !0
                    }
                },
                mounted() {
                    jt || (this.isHidden = "1" === Sa("z-cookies-consent-".concat(document.location.origin)))
                },
                methods: {
                    close() {
                        this.isHidden = !0, Ia("z-cookies-consent-".concat(document.location.origin), 1, 365)
                    }
                }
            },
            La = xa,
            Ba = (i("e9ac"), Object(J["a"])(La, ja, Ca, !1, null, null, null)),
            Ma = Ba.exports,
            Pa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("section", {
                    ref: "blockRef",
                    staticClass: "block",
                    class: "block--" + t.blockModifier,
                    style: t.computedStyles
                }, [t.data.background ? i("BlockBackground", {
                    attrs: {
                        "overlay-opacity": t.data.background["overlay-opacity"],
                        type: t.data.background.current,
                        color: t.data.background.color,
                        "background-image-origin": t.data.background.origin,
                        "background-image-path": t.data.background.path,
                        "is-lcp": "block-background" === t.lcp.type && t.lcp.id === t.id,
                        "is-fixed": "fixed" === t.data.settings.styles.attachment,
                        alt: t.data.background && t.data.background.alt,
                        "is-mobile-full-screen": t.isMobileFullScreen
                    }
                }) : t._e(), i(t.data.type, t._g(t._b({
                    tag: "Component",
                    attrs: {
                        "block-id": t.id,
                        data: t.data,
                        "is-mobile-view": t.isMobileView,
                        "is-header-sticky": t.data.settings.isSticky,
                        lcp: t.lcp,
                        components: t.components,
                        blocks: t.blocks,
                        "is-block-preview-mode": t.isBlockPreviewMode
                    },
                    on: {
                        "hook:mounted": function(e) {
                            return t.$emit("child-component-mounted")
                        }
                    }
                }, "Component", Object.assign({}, t.$attrs, t.$props), !1), t.$listeners))], 1)
            },
            Ea = [],
            Ta = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-background",
                    class: {
                        "block-background--fixed": t.isFixed
                    },
                    style: t.computedStyles
                }, ["image" === t.type && t.backgroundImagePath ? i("img", {
                    key: t.src,
                    staticClass: "block-background__image",
                    class: {
                        "block-background__image--fixed": t.isFixed
                    },
                    attrs: {
                        alt: t.alt,
                        src: t.src,
                        srcset: t.srcset,
                        width: "100vw",
                        sizes: "100vw",
                        loading: t.isLcp ? "eager" : "lazy"
                    }
                }) : t._e(), t.isBackgroundOverlayShown ? i("div", {
                    staticClass: "block-background__overlay"
                }) : t._e()])
            },
            Na = [];
        const qa = Object(U["f"])(!1),
            Aa = Object(U["f"])(!1),
            Ha = () => (Object(U["d"])(() => {
                if (qa.value) return;
                const {
                    navigator: t,
                    opera: e,
                    chrome: i
                } = window, {
                    vendor: o,
                    userAgent: a
                } = t, n = !!e || /opera|opr/i.test(a), r = /Edg/.test(a), s = /CriOS/.test(a);
                (s || i && "Google Inc." === o && !r && !n) && (Aa.value = !0)
            }), {
                isChrome: Aa
            }),
            $a = 1920;
        var Da = {
                name: "BlockBackground",
                props: {
                    alt: {
                        type: String,
                        default: ""
                    },
                    overlayOpacity: {
                        type: String,
                        default: null
                    },
                    type: {
                        type: String,
                        default: "color"
                    },
                    backgroundImagePath: {
                        type: String,
                        default: null
                    },
                    backgroundImageOrigin: {
                        type: String,
                        default: null
                    },
                    isLcp: {
                        type: Boolean,
                        default: !1
                    },
                    color: {
                        type: String,
                        default: null
                    },
                    isFixed: {
                        type: Boolean,
                        default: !1
                    },
                    isMobileFullScreen: {
                        type: Boolean,
                        default: !1
                    },
                    preload: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup() {
                    const {
                        isChrome: t
                    } = Ha();
                    return {
                        isChrome: t
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["websiteId"])), {}, {
                    backgroundColor() {
                        return "color" === this.type ? this.color : "transparent"
                    },
                    isBackgroundOverlayShown() {
                        return "image" === this.type && this.overlayOpacity
                    },
                    computedStyles() {
                        return {
                            "--background-color": this.backgroundColor,
                            "--background-overlay-opacity": this.isBackgroundOverlayShown ? this.overlayOpacity : 0
                        }
                    },
                    src() {
                        return Pe(this.backgroundImageOrigin, this.backgroundImagePath, this.websiteId, {
                            width: $a,
                            preload: this.preload
                        })
                    },
                    srcset() {
                        return Ee(this.backgroundImageOrigin, this.backgroundImagePath, this.websiteId, {
                            preload: this.preload,
                            isMobileFullScreen: this.isMobileFullScreen
                        })
                    }
                })
            },
            Ra = Da,
            Va = (i("f015"), Object(J["a"])(Ra, Ta, Na, !1, null, null, null)),
            Ga = Va.exports,
            Fa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-postinformation",
                        expression: "'blog-postinformation'"
                    }],
                    staticClass: "block-blog-header"
                }, [i("div", {
                    staticClass: "block-blog-header__content"
                }, [i("h1", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-label-posttitle",
                        expression: "'blog-label-posttitle'"
                    }],
                    staticClass: "font-primary block-blog-header__title"
                }, [t._v(" " + t._s(t.meta.title) + " ")]), t.shownItems.description ? i("p", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-label-postdescription",
                        expression: "'blog-label-postdescription'"
                    }],
                    staticClass: "font-secondary block-blog-header__description"
                }, [t._v(" " + t._s(t.meta.description) + " ")]) : t._e(), t.areCategoriesShown ? i("BlockBlogListItemCategories", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-label-category",
                        expression: "'blog-label-category'"
                    }],
                    staticClass: "font-secondary",
                    attrs: {
                        categories: t.categories
                    }
                }) : t._e(), i("BlockBlogListItemMeta", t._b({}, "BlockBlogListItemMeta", {
                    authorName: t.authorName,
                    minutesAmount: t.currentBlogPage.minutesToRead,
                    date: t.getFormattedNumericDate(t.currentBlogPage.date),
                    showAvatar: t.shownItems.avatar,
                    showName: t.shownItems.authorFullName,
                    showDate: t.shownItems.date,
                    showMinutes: t.shownItems.minutesToRead
                }, !1))], 1)])
            },
            Ua = [],
            za = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("p", {
                    staticClass: "categories"
                }, t._l(t.categories, (function(e, o) {
                    return i("span", {
                        key: e,
                        staticClass: "categories__item",
                        on: {
                            click: function(e) {
                                return t.$emit("filter-category", t.categories[o])
                            }
                        }
                    }, [t._v(" " + t._s(t.categoryNameById(e).toUpperCase()) + " ")])
                })), 0)
            },
            Wa = [],
            Ya = {
                props: {
                    categories: {
                        type: Array,
                        default: () => []
                    }
                },
                computed: Object(T["a"])({}, Object(R["d"])("blog", ["categoryNameById"]))
            },
            Ka = Ya,
            Ja = (i("6d71"), Object(J["a"])(Ka, za, Wa, !1, null, "05a5b737", null)),
            Za = Ja.exports,
            Xa = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "blog-list-item-meta"
                }, [i("div", {
                    staticClass: "font-secondary"
                }, [i("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showName,
                        expression: "showName"
                    }, {
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-author",
                        expression: "'blog-author'"
                    }],
                    staticClass: "blog-list-item-meta__author-name"
                }, [t._v(" " + t._s(t.authorName) + " ")]), i("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.showDate || t.showMinutes,
                        expression: "showDate || showMinutes"
                    }],
                    staticClass: "blog-list-item-meta__subtitle"
                }, [t.showDate && t.date ? i("span", [t._v(" " + t._s(t.date) + " ")]) : t._e(), t.showMinutes ? i("span", [t._v(" " + t._s(t.minutesAmount + " " + t.minReadText) + " ")]) : t._e()])])])
            },
            Qa = [];
        const tn = "min read";
        var en = {
                props: {
                    authorName: {
                        type: String,
                        default: ""
                    },
                    minutesAmount: {
                        type: String,
                        default: "0"
                    },
                    minReadText: {
                        type: String,
                        default: tn
                    },
                    date: {
                        type: String,
                        default: ""
                    },
                    showAvatar: {
                        type: Boolean,
                        default: !0
                    },
                    showName: {
                        type: Boolean,
                        default: !0
                    },
                    showDate: {
                        type: Boolean,
                        default: !0
                    },
                    showMinutes: {
                        type: Boolean,
                        default: !0
                    }
                }
            },
            on = en,
            an = (i("38f2"), Object(J["a"])(on, Xa, Qa, !1, null, "15956daa", null)),
            nn = an.exports;
        const rn = t => new Date(t).toLocaleDateString("en-US");
        var sn = {
                name: "BlockBlogHeader",
                components: {
                    BlockBlogListItemMeta: nn,
                    BlockBlogListItemCategories: Za
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup() {
                    return {
                        getFormattedNumericDate: rn
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])("user", ["user"])), Object(R["d"])(["currentPage", "blogPages"])), {}, {
                    currentBlogPage() {
                        const {
                            slug: t
                        } = this.$route.params;
                        return t ? Object.values(this.blogPages).find(e => e.slug === t) : this.currentPage
                    },
                    authorName() {
                        var t, e;
                        return (null === (t = this.meta) || void 0 === t ? void 0 : t.authorName) || (null === (e = this.user) || void 0 === e ? void 0 : e.fullName)
                    },
                    settings() {
                        var t, e;
                        return null !== (t = null === (e = this.data) || void 0 === e ? void 0 : e.settings) && void 0 !== t ? t : {}
                    },
                    shownItems() {
                        var t, e;
                        return null !== (t = null === (e = this.settings) || void 0 === e ? void 0 : e.shownItems) && void 0 !== t ? t : {}
                    },
                    meta() {
                        var t, e;
                        return null !== (t = null === (e = this.currentBlogPage) || void 0 === e ? void 0 : e.meta) && void 0 !== t ? t : {}
                    },
                    categories() {
                        var t, e;
                        return null !== (t = null === (e = this.currentBlogPage) || void 0 === e ? void 0 : e.categories) && void 0 !== t ? t : []
                    },
                    areCategoriesShown() {
                        return this.shownItems.categories && this.categories.length
                    }
                })
            },
            cn = sn,
            ln = (i("40ce"), Object(J["a"])(cn, Fa, Ua, !1, null, "14389a89", null)),
            dn = ln.exports,
            un = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-grid"
                }, t._l(t.data.components, (function(e) {
                    return i("BlockGridItemUser", {
                        key: e,
                        staticClass: "grid__item",
                        class: {
                            "block-grid--overflow-visible": t.getIsOverflowVisible(e)
                        },
                        style: {
                            "--element-z-index": t.data.zindexes.indexOf(e) + 1
                        },
                        attrs: {
                            id: e,
                            data: t.components[e] || t.website.components[e],
                            lcp: t.lcp,
                            "is-mobile-view": t.isMobileView,
                            "mobile-block-padding": t.data.settings.styles["m-block-padding"],
                            "block-data": t.data
                        }
                    })
                })), 1)
            },
            pn = [],
            mn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.hidden ? t._e() : i("div", {
                    staticClass: "block-grid-item use-m-margin",
                    style: t.computedStyles,
                    attrs: {
                        "data-qa": (t.data.type && t.data.type.toLowerCase()) + ":" + (t.id && t.id.toLowerCase())
                    }
                }, [i(t.data.type, {
                    tag: "Component",
                    staticClass: "block-grid-item__component",
                    attrs: {
                        id: t.id,
                        lcp: t.lcp,
                        data: t.data,
                        "is-mobile-view": t.isMobileView,
                        "mobile-block-padding": t.mobileBlockPadding,
                        "element-width": t.elementWidth,
                        "element-height": t.elementHeight
                    }
                })], 1)
            },
            gn = [],
            hn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridButton", {
                    attrs: {
                        "tag-name": t.tagName,
                        href: t.href,
                        target: t.target,
                        rel: t.rel,
                        type: t.type,
                        "button-type": t.buttonType,
                        content: t.content
                    },
                    on: {
                        click: t.linkClickHandler
                    }
                })
            },
            bn = [],
            vn = i("b09a");
        const fn = "button",
            yn = "submit",
            wn = t => {
                const {
                    linkClickHandler: e
                } = fa(), i = Object(U["a"])(() => !!t.data.settings.isFormButton), o = Object(U["a"])(() => i.value ? fn : I), a = Object(U["a"])(() => o.value === fn ? null : t.data.settings.href), n = Object(U["a"])(() => o.value === fn ? null : t.data.settings.target), r = Object(U["a"])(() => t.data.settings.rel || void 0);
                return {
                    tagName: o,
                    href: a,
                    target: n,
                    rel: r,
                    linkClickHandler: e,
                    type: Object(U["a"])(() => t.data.settings.type),
                    buttonType: Object(U["a"])(() => i.value ? yn : null),
                    content: Object(U["a"])(() => t.data.content),
                    name: Object(U["a"])(() => i.value ? yn : null)
                }
            };
        var kn = {
                name: "GridButtonProviderUser",
                components: {
                    GridButton: vn["a"]
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    const {
                        tagName: e,
                        href: i,
                        target: o,
                        rel: a,
                        linkClickHandler: n,
                        type: r,
                        buttonType: s,
                        content: c
                    } = wn(t);
                    return {
                        tagName: e,
                        href: i,
                        target: o,
                        rel: a,
                        type: r,
                        buttonType: s,
                        content: c,
                        linkClickHandler: n
                    }
                }
            },
            On = kn,
            _n = Object(J["a"])(On, hn, bn, !1, null, null, null),
            jn = _n.exports,
            Cn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridButton", {
                    attrs: {
                        "tag-name": "button",
                        content: t.content,
                        "data-qa": "button-ecommerce-checkout",
                        type: t.type,
                        "is-disabled": !t.canAddToCart(t.productId, t.productVariantId),
                        "is-loading": t.isLoading
                    },
                    on: {
                        click: t.handleClick
                    }
                })
            },
            Sn = [];
        const In = t => {
                var e, i;
                const {
                    $store: o
                } = null !== (e = null === (i = Object(U["b"])()) || void 0 === i ? void 0 : i.proxy) && void 0 !== e ? e : {}, a = Object(U["a"])(() => {
                    var t;
                    return null === (t = o.state.ecommerce) || void 0 === t ? void 0 : t.products
                }), n = Object(U["a"])(() => {
                    var e;
                    return null === (e = t.data.settings) || void 0 === e ? void 0 : e.productId
                }), r = Object(U["a"])(() => {
                    var e;
                    return null === (e = t.data.settings) || void 0 === e ? void 0 : e.productVariantId
                });
                return {
                    storeProducts: a,
                    productId: n,
                    productVariantId: r
                }
            },
            xn = ["".concat("https://editor.zyro.com", "($|/.*)"), "".concat("https://zyro.com", "($|/.*)")],
            Ln = () => {
                const t = window.location !== window.parent.location,
                    e = document.referrer,
                    i = xn.some(t => e.match(t));
                return t && i
            };
        var Bn = i("48f5"),
            Mn = i("1910");
        const Pn = () => {
            var t, e;
            const {
                $store: i
            } = null !== (t = null === (e = Object(U["b"])()) || void 0 === e ? void 0 : e.proxy) && void 0 !== t ? t : {}, o = i.state.website.pages, a = i.getters.homePageId, n = t => {
                const e = !!o[t],
                    i = t === a;
                return e && !i ? o[t].slug : ""
            };
            return {
                getPageSlugByPageId: n
            }
        };
        i("e9c4");
        const En = "".concat("https://api-ecommerce.prod.zyro.space", "/store"),
            Tn = async t => {
                const e = await fetch("".concat(En, "/").concat(t, "/products")),
                    i = await e.json();
                return i.products
            },
            Nn = async t => {
                let {
                    items: e,
                    successUrl: i,
                    cancelUrl: o,
                    storeId: a
                } = t;
                return fetch("".concat(En, "/").concat(a, "/checkout"), {
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json"
                    },
                    credentials: "omit",
                    body: JSON.stringify({
                        items: e,
                        successUrl: i,
                        cancelUrl: o
                    })
                }).then(async t => {
                    const e = await t.json();
                    if (t.ok) return e.url;
                    throw new Error(e.message)
                })
            },
            qn = t => {
                var e, i, o;
                const {
                    $store: a
                } = null !== (e = null === (i = Object(U["b"])()) || void 0 === i ? void 0 : i.proxy) && void 0 !== e ? e : {}, {
                    getPageSlugByPageId: n
                } = Pn(), {
                    openModal: r
                } = Object(Bn["a"])(t), s = null === (o = a.getters.siteMeta) || void 0 === o ? void 0 : o.ecommerceStoreId, c = Ln(), l = "".concat(window.location.origin, "/").concat(n());

                function d(t) {
                    const e = t.some(t => t.type === Mn["d"]),
                        i = e ? "&product=".concat(Mn["d"]) : "";
                    return "".concat(l, "?open-modal=EcommerceCheckoutSuccess").concat(i)
                }

                function u(t) {
                    const e = t.reduce((t, e) => {
                        const i = t.find(t => t.variant_id === e.variants[0].id);
                        return i ? t.map(t => t.variant_id === e.variants[0].id ? {
                            variant_id: t.variant_id,
                            quantity: t.quantity + 1
                        } : t) : [...t, {
                            variant_id: e.variants[0].id,
                            quantity: 1
                        }]
                    }, []);
                    return Nn({
                        items: e,
                        cancelUrl: l,
                        successUrl: d(t),
                        storeId: s
                    })
                }
                async function p(t) {
                    try {
                        const e = await u(t);
                        window.location.assign(e)
                    } catch (e) {
                        r({
                            name: "EcommerceCheckoutFailed"
                        })
                    }
                }
                return {
                    initiateCheckout: p,
                    storeId: s,
                    isPreview: c
                }
            };
        var An = {
                name: "GridEcommerceButtonProviderUser",
                components: {
                    GridButton: vn["a"]
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    const {
                        initiateCheckout: e
                    } = qn(t), {
                        openModal: i
                    } = Object(Bn["a"])(t), {
                        content: o,
                        type: a
                    } = wn(t), {
                        productId: n,
                        productVariantId: r
                    } = In(t);
                    return {
                        openModal: i,
                        productId: n,
                        productVariantId: r,
                        content: o,
                        type: a,
                        initiateCheckout: e
                    }
                },
                data() {
                    return {
                        isLoading: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])("ecommerce", ["isShoppingCartOpen", "products"])), Object(R["d"])("ecommerce", ["shoppingCartItems", "canAddToCart"])), Object(R["d"])("navigation", ["isCartVisible"])),
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])("ecommerce", ["setShoppingCartOpen", "setShoppingCartItems"])), {}, {
                    async handleClick() {
                        const t = this.products.find(t => t.id === this.productId),
                            e = null === t || void 0 === t ? void 0 : t.variants.find(t => t.id === this.productVariantId);
                        if (Ln()) return void this.openModal({
                            name: "EcommerceMessageButtonDisabled"
                        });
                        const i = Object(T["a"])(Object(T["a"])({}, t), {}, {
                            variants: [e]
                        });
                        this.isCartVisible ? (this.setShoppingCartItems([...this.shoppingCartItems, i]), this.manageCartOpenState()) : (this.isLoading = !0, await this.initiateCheckout([i]).then(() => {
                            this.isLoading = !1
                        }))
                    },
                    manageCartOpenState() {
                        this.isShoppingCartOpen || this.setShoppingCartOpen(!0)
                    }
                })
            },
            Hn = An,
            $n = Object(J["a"])(Hn, Cn, Sn, !1, null, null, null),
            Dn = $n.exports,
            Rn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridEmbed", {
                    ref: "gridEmbedRef",
                    attrs: {
                        "should-render": t.isObserved,
                        srcdoc: t.srcdoc,
                        height: t.data.settings.styles.height
                    }
                })
            },
            Vn = [],
            Gn = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "grid-embed",
                    style: t.computedStyles,
                    attrs: {
                        "data-qa": "builder-gridelement-embedcode"
                    }
                }, [t.shouldRender ? i("iframe", {
                    ref: "gridEmbedIframeRef",
                    staticClass: "grid-embed__iframe",
                    attrs: {
                        srcdoc: t.srcdoc,
                        title: "custom code element"
                    },
                    on: {
                        load: t.observeGridEmbed
                    }
                }) : t._e()])
            },
            Fn = [],
            Un = {
                props: {
                    srcdoc: {
                        type: String,
                        default: ""
                    },
                    shouldRender: {
                        type: Boolean,
                        default: !1
                    },
                    height: {
                        type: Number,
                        default: null
                    }
                },
                data() {
                    return {
                        observedHeight: null
                    }
                },
                computed: {
                    embedHeight() {
                        return this.height && this.observedHeight > this.height ? this.observedHeight : this.height || this.observedHeight
                    },
                    computedStyles() {
                        return {
                            "--height": "".concat(this.embedHeight, "px")
                        }
                    }
                },
                methods: {
                    observeGridEmbed() {
                        const t = this.$refs.gridEmbedIframeRef.contentWindow.document.querySelector("html"),
                            e = new ResizeObserver(t => {
                                let [{
                                    contentRect: e
                                }] = t;
                                requestAnimationFrame(() => {
                                    const {
                                        height: t
                                    } = e;
                                    t !== this.observedHeight && (this.observedHeight = t, this.$emit("iframe-height-updated", this.observedHeight))
                                })
                            });
                        e.observe(t)
                    }
                }
            },
            zn = Un,
            Wn = (i("4646"), Object(J["a"])(zn, Gn, Fn, !1, null, null, null)),
            Yn = Wn.exports;
        const Kn = "\n<style>\n\thtml {\n\t\toverflow: hidden;\n\t}\n\n\t* {\n\t\tmargin: 0;\n\t\tpadding: 0;\n\t\tbox-sizing: border-box;\n \t}\n\n \tiframe {\n \t\tmax-width: 100%;\n \t}\n</style>\n",
            Jn = t => {
                const e = document.createElement("div");
                e.innerHTML = t;
                const i = [...e.children].reduce((t, e) => "STYLE" === e.tagName ? Object(T["a"])(Object(T["a"])({}, t), {}, {
                    styles: "".concat(t.styles, " ").concat(e.outerHTML)
                }) : "SCRIPT" === e.tagName ? Object(T["a"])(Object(T["a"])({}, t), {}, {
                    scripts: "".concat(t.scripts, " ").concat(e.outerHTML)
                }) : Object(T["a"])(Object(T["a"])({}, t), {}, {
                    html: "".concat(t.html, " ").concat(e.outerHTML)
                }), {
                    styles: Kn,
                    scripts: "",
                    html: ""
                });
                return "<!DOCTYPE html>\n\t<head>".concat(i.styles, "</head>\n\t<body>").concat(i.html).concat(i.scripts, "</body>\n</html>")
            },
            Zn = "500px",
            Xn = function(t) {
                let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Zn;
                const i = Object(U["f"])(!1);
                try {
                    const o = new IntersectionObserver(t => {
                            let [{
                                isIntersecting: e
                            }] = t;
                            e && (i.value = !0, o.disconnect())
                        }, {
                            threshold: 0,
                            rootMargin: e
                        }),
                        a = Object(U["i"])(() => {
                            if (t.value) {
                                var e;
                                const i = null !== (e = t.value.$el) && void 0 !== e ? e : t.value;
                                o.observe(i), a()
                            }
                        });
                    Object(U["c"])(() => o.disconnect())
                } catch (o) {
                    console.error(o)
                }
                return {
                    isObserved: i
                }
            };
        var Qn = {
                components: {
                    GridEmbed: Yn
                },
                props: {
                    data: {
                        type: Object,
                        default: () => ({})
                    },
                    id: {
                        type: String,
                        default: null
                    }
                },
                setup() {
                    const t = Object(U["f"])(null),
                        {
                            isObserved: e
                        } = Xn(t);
                    return {
                        gridEmbedRef: t,
                        isObserved: e
                    }
                },
                computed: {
                    srcdoc() {
                        return Jn(this.data.content)
                    }
                }
            },
            tr = Qn,
            er = Object(J["a"])(tr, Rn, Vn, !1, null, null, null),
            ir = er.exports,
            or = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridForm", {
                    attrs: {
                        id: t.id,
                        "form-id": t.data.formId,
                        settings: t.data.settings,
                        "submit-button-data": t.data.submitButtonData,
                        styles: t.computedStyles,
                        "show-success-message": t.showSuccessMessage,
                        "is-error": t.isError,
                        "is-user-site": t.$options.IS_USER_SITE,
                        theme: t.data.settings.theme
                    },
                    on: {
                        "on-submit": t.onSubmit
                    }
                }, [i("PostSubmitElement", {
                    attrs: {
                        "show-success-message": t.showSuccessMessage,
                        "success-message": t.data.settings.successMessage,
                        "is-loading": t.isLoading,
                        "is-error": t.isError,
                        theme: t.data.settings.theme
                    }
                })], 1)
            },
            ar = [];
        const nr = "".concat("https://backend.zyro.com", "/u1/data/post"),
            rr = (t, e) => {
                fetch("".concat(nr, "/").concat(t), {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json;charset=UTF-8"
                    },
                    credentials: "omit",
                    mode: "cors",
                    body: JSON.stringify(e)
                }).then(t => {
                    if (!t.ok) throw new Error(t.statusText);
                    return t
                })
            };
        var sr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "form",
                    class: {
                        "form--single-field": "singleField" === t.settings.type
                    },
                    style: t.styles,
                    attrs: {
                        "data-qa": "builder-gridelement-contactform"
                    }
                }, [i("form", {
                    staticClass: "form__control",
                    class: {
                        "form__control--invisible": t.showSuccessMessage || t.isError
                    },
                    attrs: {
                        name: t.formId
                    },
                    on: {
                        submit: function(e) {
                            return e.preventDefault(), t.handleSubmit.apply(null, arguments)
                        }
                    }
                }, [t._l(t.settings.schema, (function(e) {
                    return [i(e.type, {
                        key: e.id,
                        tag: "Component",
                        attrs: {
                            theme: t.theme,
                            data: e,
                            placeholder: e.placeholder,
                            label: e.inputLabel,
                            "is-required": t.validationRules[e.name].validation.includes("required"),
                            "validation-errors": t.validationErrors[e.name],
                            "are-errors-shown": t.areErrorsVisible,
                            "is-interactive": t.isUserSite
                        },
                        on: {
                            input: function(i) {
                                return t.updateField(e.name, i)
                            }
                        }
                    })]
                })), i("GridButton", {
                    staticClass: "form__button",
                    attrs: {
                        content: t.submitButtonData.content,
                        type: t.submitButtonData.settings.type,
                        "button-type": "submit",
                        "tag-name": "button"
                    }
                })], 2), t._t("default")], 2)
            },
            cr = [],
            lr = (i("0481"), i("4069"), function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "input",
                    class: "input--" + t.theme
                }, [i("label", {
                    staticClass: "input__label",
                    class: "input__label--" + t.theme
                }, [t._v(" " + t._s(t.label) + t._s(t.isRequired ? "*" : "") + " ")]), i(t.data.tag || "input", {
                    tag: "Component",
                    staticClass: "input__component",
                    class: t.computedClasses,
                    attrs: {
                        placeholder: t.placeholder,
                        type: "text",
                        readonly: !t.isInteractive,
                        tabindex: t.isInteractive ? 0 : -1
                    },
                    on: {
                        input: function(e) {
                            return t.$emit("input", e.target.value)
                        },
                        click: function(t) {
                            t.preventDefault()
                        },
                        dragstart: function(t) {
                            t.preventDefault()
                        },
                        drag: function(t) {
                            t.preventDefault()
                        }
                    }
                }), t.validationErrors.length && t.areErrorsShown ? i("div", t._l(t.validationErrors, (function(e) {
                    return i("p", {
                        key: e,
                        staticClass: "input__error-message z-body-small"
                    }, [t._v(" " + t._s(e) + " ")])
                })), 0) : t._e()], 1)
            }),
            dr = [],
            ur = {
                props: {
                    label: {
                        type: String,
                        default: null
                    },
                    placeholder: {
                        type: String,
                        default: null
                    },
                    isRequired: {
                        type: Boolean,
                        default: !1
                    },
                    isTextArea: {
                        type: Boolean,
                        default: !1
                    },
                    isInteractive: {
                        type: Boolean,
                        default: !0
                    },
                    areErrorsShown: {
                        type: Boolean,
                        default: !1
                    },
                    validationErrors: {
                        type: Array,
                        required: !1,
                        default: () => []
                    },
                    theme: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    computedClasses() {
                        return [{
                            "input__component--textarea": "textarea" === this.data.tag
                        }, {
                            "input__component--read-only": !this.isInteractive
                        }, "input__component--".concat(this.theme)]
                    }
                }
            },
            pr = ur,
            mr = (i("fdf7"), Object(J["a"])(pr, lr, dr, !1, null, "3a756488", null)),
            gr = mr.exports,
            hr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "input",
                    class: "input--" + t.theme
                }, [i("label", {
                    staticClass: "input__label input__label--read-only",
                    class: ["input__label--" + t.theme]
                }, [t._v(" " + t._s(t.label) + t._s(t.isRequired ? "*" : "") + " ")]), t._l(t.options, (function(e) {
                    return i("div", {
                        key: e.id,
                        staticClass: "input__options"
                    }, [i("SelectInput", {
                        attrs: {
                            id: e.id,
                            name: e.value,
                            tag: t.data.tag,
                            "is-selected": e.isSelected,
                            theme: t.theme,
                            "is-interactive": t.isInteractive,
                            "selected-options": t.selectedOptions
                        },
                        on: {
                            "remove-selection": t.removeSelection,
                            "add-selection": t.addSelection,
                            "select-option": t.selectOption
                        }
                    })], 1)
                })), t.validationErrors.length && t.areErrorsShown ? i("div", t._l(t.validationErrors, (function(e) {
                    return i("p", {
                        key: e,
                        staticClass: "input__error-message z-body-small"
                    }, [t._v(" " + t._s(e) + " ")])
                })), 0) : t._e()], 2)
            },
            br = [],
            vr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("label", {
                    staticClass: "select-input",
                    class: t.labelClasses,
                    attrs: {
                        for: t.id
                    }
                }, [i("input", {
                    key: t.isSelected,
                    staticClass: "select-input__input",
                    class: t.inputClasses,
                    attrs: {
                        id: t.id,
                        type: t.tag,
                        tabindex: t.isInteractive ? 0 : -1
                    },
                    domProps: {
                        checked: t.isSelected
                    },
                    on: {
                        input: t.selectOption,
                        dragstart: function(t) {
                            t.preventDefault()
                        },
                        drag: function(t) {
                            t.preventDefault()
                        }
                    }
                }), t._v(" " + t._s(t.name) + " ")])
            },
            fr = [],
            yr = {
                props: {
                    name: {
                        type: String,
                        required: !0
                    },
                    id: {
                        type: String,
                        required: !0
                    },
                    tag: {
                        type: String,
                        required: !0
                    },
                    selectedOptions: {
                        type: Array,
                        required: !0
                    },
                    isInteractive: {
                        type: Boolean,
                        default: !0
                    },
                    theme: {
                        type: String,
                        required: !0
                    },
                    isSelected: {
                        type: Boolean,
                        require: !0
                    }
                },
                computed: {
                    labelClasses() {
                        return [{
                            "input__label--read-only": !this.isInteractive
                        }, "input__label--".concat(this.theme)]
                    },
                    inputClasses() {
                        return [{
                            "input__component--read-only": !this.isInteractive
                        }]
                    }
                },
                methods: {
                    selectOption() {
                        if (!this.isInteractive) return;
                        const t = {
                            id: this.id,
                            value: this.name
                        };
                        "checkbox" !== this.tag ? this.$emit("select-option", t) : this.isSelected ? this.$emit("remove-selection", t) : this.$emit("add-selection", t)
                    }
                }
            },
            wr = yr,
            kr = (i("15b5"), Object(J["a"])(wr, vr, fr, !1, null, "0eb73ecf", null)),
            Or = kr.exports,
            _r = {
                components: {
                    SelectInput: Or
                },
                props: {
                    label: {
                        type: String,
                        default: null
                    },
                    isRequired: {
                        type: Boolean,
                        default: !1
                    },
                    isTextArea: {
                        type: Boolean,
                        default: !1
                    },
                    isInteractive: {
                        type: Boolean,
                        default: !0
                    },
                    areErrorsShown: {
                        type: Boolean,
                        default: !1
                    },
                    validationErrors: {
                        type: Array,
                        required: !1,
                        default: () => []
                    },
                    theme: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                data() {
                    return {
                        selectedOptions: []
                    }
                },
                computed: {
                    options() {
                        return this.data.options.map(t => {
                            const e = this.selectedOptions.some(e => {
                                let {
                                    id: i
                                } = e;
                                return i === t.id
                            });
                            return Object(T["a"])(Object(T["a"])({}, t), {}, {
                                isSelected: e
                            })
                        })
                    }
                },
                watch: {
                    selectedOptions() {
                        const t = this.selectedOptions.map(t => {
                            let {
                                value: e
                            } = t;
                            return e
                        }).toString();
                        this.$emit("input", t)
                    }
                },
                methods: {
                    removeSelection(t) {
                        const e = this.selectedOptions.filter(e => e.id !== t.id);
                        this.selectedOptions = e
                    },
                    addSelection(t) {
                        this.selectedOptions.push(Object(T["a"])({}, t))
                    },
                    selectOption(t) {
                        this.selectedOptions = [t]
                    }
                }
            },
            jr = _r,
            Cr = (i("5e9a"), Object(J["a"])(jr, hr, br, !1, null, "14b1c401", null)),
            Sr = Cr.exports;
        const Ir = function() {
            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
                {
                    validation: e,
                    validationMessages: i
                } = arguments.length > 1 ? arguments[1] : void 0;
            const o = [];
            return e.includes("required") && !t.replace(/ /g, "") && o.push(i.required), t.replace(/ /g, "") ? (e.includes("email") && !he.test(t) && o.push(i.email), e.includes("matches") && !be.test(t) && o.push(i.matches), o) : o
        };
        var xr = {
                components: {
                    GridInput: gr,
                    GridButton: vn["a"],
                    GridSelectInput: Sr
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    settings: {
                        type: Object,
                        required: !0
                    },
                    submitButtonData: {
                        type: Object,
                        required: !0
                    },
                    formId: {
                        type: String,
                        default: null
                    },
                    styles: {
                        type: Object,
                        default: null
                    },
                    isError: {
                        type: Boolean,
                        default: !1
                    },
                    showSuccessMessage: {
                        type: Boolean,
                        default: !1
                    },
                    isUserSite: {
                        type: Boolean,
                        default: !1
                    },
                    theme: {
                        type: String,
                        validator: t => ["dark", "light"].includes(t),
                        default: "light"
                    }
                },
                data() {
                    return {
                        validationErrors: {},
                        formValues: {},
                        areErrorsVisible: !1
                    }
                },
                computed: {
                    validationRules() {
                        return this.settings.schema.reduce((t, e) => Object(T["a"])(Object(T["a"])({}, t), {}, {
                            [e.name]: {
                                validation: e.validation.flat(),
                                validationMessages: e["validation-messages"]
                            }
                        }), {})
                    }
                },
                methods: {
                    handleSubmit() {
                        this.trimFormValues();
                        const t = this.validateForm();
                        this.areErrorsVisible = t.length > 0, this.areErrorsVisible || this.$emit("on-submit", this.formValues)
                    },
                    validateForm() {
                        return this.settings.schema.flatMap(t => {
                            let {
                                name: e
                            } = t;
                            const i = Ir(this.formValues[e], this.validationRules[e]);
                            return this.validationErrors = Object(T["a"])(Object(T["a"])({}, this.validationErrors), {}, {
                                [e]: i
                            }), i
                        })
                    },
                    updateField(t, e) {
                        this.validationErrors = Object(T["a"])(Object(T["a"])({}, this.validationErrors), {}, {
                            [t]: Ir(e, this.validationRules[t])
                        }), this.formValues = Object(T["a"])(Object(T["a"])({}, this.formValues), {}, {
                            [t]: e
                        })
                    },
                    trimFormValues() {
                        this.formValues = Object.fromEntries(Object.entries(this.formValues).map(t => {
                            let [e, i] = t;
                            return [e, i.trim()]
                        }))
                    }
                }
            },
            Lr = xr,
            Br = (i("9d28"), Object(J["a"])(Lr, sr, cr, !1, null, "b3d4fae2", null)),
            Mr = Br.exports,
            Pr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Transition", {
                    attrs: {
                        name: "feed"
                    }
                }, [t.isLoading || t.showSuccessMessage || t.isError ? i("div", {
                    staticClass: "submit-message",
                    class: "submit-message--" + t.theme
                }, [t.isLoading ? i("div", [i("ZyroLoader")], 1) : t.showSuccessMessage && !t.isError ? i("div", {
                    staticClass: "success-message__heading"
                }, [t._v(" " + t._s(t.successMessage) + " ")]) : t._e(), t.isError && !t.isLoading ? i("div", [i("div", {
                    staticClass: "submit-message__heading"
                }, [t._v(" Something went wrong ")]), i("div", [t._v(" Please try again later ")])]) : t._e()]) : t._e()])
            },
            Er = [],
            Tr = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "loader"
                })
            },
            Nr = [],
            qr = (i("36c7"), {}),
            Ar = Object(J["a"])(qr, Tr, Nr, !1, null, "49175f0a", null),
            Hr = Ar.exports;
        const $r = "light",
            Dr = "dark",
            Rr = [$r, Dr],
            Vr = 200,
            Gr = {
                SHOW_MESSAGE: "showMessage",
                LINK_TO_PAGE: "linkToPage"
            };
        var Fr = {
                components: {
                    ZyroLoader: Hr
                },
                props: {
                    successMessage: {
                        type: String,
                        default: ""
                    },
                    isError: {
                        type: Boolean,
                        default: !1
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    showSuccessMessage: {
                        type: Boolean,
                        default: !1
                    },
                    theme: {
                        type: String,
                        validator: t => Rr.includes(t),
                        default: $r
                    }
                }
            },
            Ur = Fr,
            zr = (i("b1fd"), Object(J["a"])(Ur, Pr, Er, !1, null, "3650c458", null)),
            Wr = zr.exports;
        const Yr = t => {
                const e = Object(U["a"])(() => {
                    const {
                        styles: e
                    } = t.data.settings, {
                        styles: i
                    } = t.data.submitButtonData.settings;
                    return {
                        "--formFlex": e.justify ? null : "0 1 100%",
                        "--formButtonJustifySelf": i.align,
                        "--m-formButtonJustifySelf": i["m-align"]
                    }
                });
                return {
                    computedStyles: e
                }
            },
            Kr = !0;
        var Jr = {
                IS_USER_SITE: Kr,
                components: {
                    GridForm: Mr,
                    PostSubmitElement: Wr
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    const {
                        computedStyles: e
                    } = Yr(t);
                    return {
                        computedStyles: e
                    }
                },
                data() {
                    return {
                        isLoading: !1,
                        showSuccessMessage: !1,
                        isError: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["website"])), Object(R["d"])(["defaultPages"])),
                methods: {
                    async onSubmit(t) {
                        this.isLoading = !0;
                        let e = !1;
                        setTimeout(() => {
                            e = !0, this.isLoading = !(this.showSuccessMessage || this.isError)
                        }, Vr);
                        try {
                            var i;
                            if (await rr(this.website.forms[this.data.formId].token, t), this.showSuccessMessage = !0, null === (i = this.data.settings.submitRedirectPage) || void 0 === i || !i.pageId) return;
                            const {
                                pageId: o
                            } = this.data.settings.submitRedirectPage, {
                                submitAction: a
                            } = this.data.settings, n = Object.keys(this.defaultPages).includes(o);
                            if (!n || a.id !== Gr.LINK_TO_PAGE) return;
                            const {
                                slug: r
                            } = Object.entries(this.defaultPages).find(t => {
                                let [e] = t;
                                return e === o
                            })[1];
                            this.$router.push({
                                path: "/".concat(r)
                            })
                        } catch (o) {
                            this.isError = !0
                        } finally {
                            e && (this.isLoading = !1)
                        }
                    }
                }
            },
            Zr = Jr,
            Xr = Object(J["a"])(Zr, or, ar, !1, null, null, null),
            Qr = Xr.exports,
            ts = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridGallery", {
                    attrs: {
                        "is-lazy": "",
                        "grid-images": t.gridImages,
                        "is-lightbox-enabled": t.isLightboxEnabled,
                        "column-count": t.columnCount,
                        "column-gap": t.columnGap,
                        "is-masonry-layout": t.isMasonryLayout
                    },
                    on: {
                        "image-click": t.handleGalleryImageClick
                    }
                })
            },
            es = [],
            is = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "gallery"
                }, [t.isMasonryLayout ? i("masonry", {
                    ref: "masonry",
                    attrs: {
                        cols: t.columnCount,
                        gutter: t.columnGap
                    }
                }, t._l(t.gridImages, (function(e, o) {
                    return i("GridImage", {
                        key: "" + o + e.src,
                        staticClass: "gallery__masonry-image",
                        attrs: {
                            alt: e.alt,
                            src: e.src,
                            srcset: e.srcset,
                            sizes: e.sizes,
                            width: e.width,
                            "prevent-drag": e.preventDrag,
                            "is-unstyled": "",
                            "is-lazy": t.isLazy,
                            "is-lightbox-enabled": t.isLightboxEnabled,
                            "reset-mobile-position": !1
                        },
                        on: {
                            "image-click": function(e) {
                                return t.$emit("image-click", o)
                            }
                        }
                    })
                })), 1) : i("div", {
                    staticClass: "gallery__grid"
                }, t._l(t.gridImages, (function(e, o) {
                    return i("div", {
                        key: "" + o + e.src,
                        staticClass: "gallery__block"
                    }, [i("GridImage", {
                        key: "" + o + e.src,
                        staticClass: "gallery__image",
                        attrs: {
                            alt: e.alt,
                            src: e.src,
                            srcset: e.srcset,
                            sizes: e.sizes,
                            width: e.width,
                            height: e.height,
                            "prevent-drag": e.preventDrag,
                            "is-lightbox-enabled": t.isLightboxEnabled,
                            "reset-mobile-position": !1,
                            "is-lazy": t.isLazy
                        },
                        on: {
                            "image-click": function(e) {
                                return t.$emit("image-click", o)
                            }
                        }
                    })], 1)
                })), 0), t._t("default")], 2)
            },
            os = [],
            as = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i(t.tagName, {
                    tag: "Component",
                    class: {
                        image: !t.isUnstyled, "image--unstyled": t.isUnstyled, "image--link": t.tagName === t.ANCHOR_TAG
                    },
                    attrs: {
                        href: t.href,
                        target: t.target,
                        rel: t.rel,
                        title: t.alt
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("image-click", e)
                        }
                    }
                }, [i("img", t._g({
                    class: {
                        "image__image--zoom": t.isLightboxEnabled, "image__image--unstyled": t.isUnstyled, image__image: !t.isUnstyled, "image__image--reset-m-position": t.resetMobilePosition
                    },
                    attrs: {
                        "data-qa": "builder-gridelement-image",
                        alt: t.alt,
                        src: t.src,
                        srcset: t.srcset,
                        sizes: t.sizes,
                        height: t.height,
                        width: t.width,
                        loading: t.isLcp ? "eager" : "lazy"
                    }
                }, {
                    drag: t.preventDrag ? function(t) {
                        return t.preventDefault()
                    } : function() {
                        return null
                    },
                    dragstart: t.preventDrag ? function(t) {
                        return t.preventDefault()
                    } : function() {
                        return null
                    }
                })), t._t("default")], 2)
            },
            ns = [];
        const rs = [x, I];
        var ss = {
                props: {
                    alt: {
                        type: String,
                        default: null
                    },
                    href: {
                        type: String,
                        default: null
                    },
                    isLcp: {
                        type: Boolean,
                        default: !1
                    },
                    preventDrag: {
                        type: Boolean,
                        default: !1
                    },
                    sizes: {
                        type: String,
                        default: null
                    },
                    src: {
                        type: String,
                        required: !0
                    },
                    srcset: {
                        type: String,
                        default: null
                    },
                    tagName: {
                        type: String,
                        validator: t => rs.includes(t),
                        default: "div"
                    },
                    target: {
                        type: String,
                        default: null
                    },
                    rel: {
                        type: String,
                        default: null
                    },
                    isLightboxEnabled: {
                        type: Boolean,
                        default: !1
                    },
                    isUnstyled: {
                        type: Boolean,
                        default: !1
                    },
                    resetMobilePosition: {
                        type: Boolean,
                        default: !0
                    },
                    width: {
                        type: Number,
                        default: null
                    },
                    height: {
                        type: Number,
                        default: null
                    }
                },
                setup() {
                    return {
                        ANCHOR_TAG: I
                    }
                }
            },
            cs = ss,
            ls = (i("3fb4"), Object(J["a"])(cs, as, ns, !1, null, "00c3b48d", null)),
            ds = ls.exports,
            us = {
                name: "GridGallery",
                components: {
                    GridImage: ds
                },
                props: {
                    columnCount: {
                        type: Number,
                        required: !0
                    },
                    columnGap: {
                        type: Number,
                        required: !0
                    },
                    gridImages: {
                        type: Array,
                        required: !0
                    },
                    isLightboxEnabled: {
                        type: Boolean,
                        required: !1
                    },
                    isMasonryLayout: {
                        type: Boolean,
                        default: !1
                    },
                    isLazy: {
                        type: Boolean,
                        default: !1
                    }
                },
                watch: {
                    async columnCount() {
                        this.isMasonryLayout && (await this.$nextTick(), this.$refs.masonry._reCalculateColumnCount())
                    },
                    async columnGap() {
                        this.isMasonryLayout && (await this.$nextTick(), this.$refs.masonry._reCalculateGutterSize())
                    }
                }
            },
            ps = us,
            ms = (i("2d77"), Object(J["a"])(ps, is, os, !1, null, "a01af850", null)),
            gs = ms.exports;
        const hs = t => {
                const e = Object(U["a"])(() => t.data.images.length > 0),
                    i = Object(U["a"])(() => Number.parseInt(t.data.settings.styles["column-count"], 10)),
                    o = Object(U["a"])(() => Number.parseInt(t.data.settings.styles["column-gap"], 10)),
                    a = Object(U["a"])(() => "masonry" === t.data.settings.layout);
                return {
                    hasGridImages: e,
                    columnCount: i,
                    columnGap: o,
                    isMasonryLayout: a
                }
            },
            bs = "lightbox";
        var vs = {
                name: "GridGalleryProviderUser",
                components: {
                    GridGallery: gs
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    },
                    mobileBlockPadding: {
                        type: String,
                        default: "0px"
                    },
                    elementWidth: {
                        type: Number,
                        default: null
                    },
                    elementHeight: {
                        type: Number,
                        default: null
                    }
                },
                setup(t) {
                    var e, i;
                    const {
                        columnCount: o,
                        columnGap: a,
                        isMasonryLayout: n
                    } = hs(t), {
                        addImagesToLightbox: r
                    } = dt(), s = Object(U["a"])(() => {
                        var e;
                        const {
                            right: i
                        } = ho(null !== (e = t.mobileBlockPadding) && void 0 !== e ? e : "");
                        return Number.parseInt(i, 10) || 0
                    }), c = Object(U["a"])(() => Math.ceil((a.value + t.elementWidth) / o.value) - a.value), l = Object(U["a"])(() => !n.value && c.value), d = Object(U["a"])(() => ["(min-width: ".concat(p, "px) ").concat(c.value, "px"), "".concat(100 / o.value, "vw")].join(", ")), {
                        state: u
                    } = null === (e = Object(U["b"])()) || void 0 === e || null === (i = e.proxy) || void 0 === i ? void 0 : i.$store, m = Object(U["a"])(() => t.data.images.map(t => {
                        const e = Object(U["a"])(() => Pe(t.origin, t.path, u.websiteId, {
                                width: c.value,
                                height: l.value
                            })),
                            i = Object(U["a"])(() => Ne(t.origin, t.path, u.websiteId, {
                                width: c.value,
                                height: l.value,
                                columnCount: o.value,
                                columnGap: a.value,
                                mobilePadding: s.value,
                                isMasonryLayout: n.value
                            }));
                        return Object(T["a"])(Object(T["a"])({}, t), {}, {
                            src: e.value,
                            srcset: i.value,
                            sizes: d.value,
                            width: c.value,
                            height: l.value,
                            preventDrag: !0
                        })
                    })), g = Object(U["a"])(() => t.data.settings.imageClickAction === bs), h = e => {
                        if (g.value) {
                            const i = t.data.images.map(t => ({
                                alt: t.alt,
                                src: ye(t.origin, t.path, u.websiteId)
                            }));
                            r(i, e)
                        }
                    };
                    return {
                        gridImages: m,
                        isLightboxEnabled: g,
                        handleGalleryImageClick: h,
                        columnCount: o,
                        columnGap: a,
                        isMasonryLayout: n
                    }
                }
            },
            fs = vs,
            ys = Object(J["a"])(fs, ts, es, !1, null, null, null),
            ws = ys.exports,
            ks = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridImage", {
                    key: t.src,
                    attrs: {
                        alt: t.alt,
                        href: t.href,
                        sizes: t.sizes,
                        src: t.src,
                        srcset: t.srcset,
                        "tag-name": t.tagName,
                        target: t.target,
                        rel: t.rel,
                        "is-lcp": "grid-image" === t.lcp.type && t.lcp.id === t.id,
                        "is-lightbox-enabled": t.isLightboxEnabled,
                        height: t.elementHeight,
                        width: t.elementWidth
                    },
                    on: {
                        "image-click": t.handleImageClick
                    }
                })
            },
            Os = [],
            _s = {
                name: "GridImageProviderUser",
                components: {
                    GridImage: ds
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    isMobileView: {
                        type: Boolean,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    mobileBlockPadding: {
                        type: String,
                        default: "0px"
                    },
                    elementWidth: {
                        type: Number,
                        default: null
                    },
                    elementHeight: {
                        type: Number,
                        default: null
                    }
                },
                setup(t) {
                    var e, i;
                    const {
                        linkClickHandler: o
                    } = fa(), {
                        addImagesToLightbox: a
                    } = dt(), n = Object(U["a"])(() => {
                        var e;
                        return null !== (e = t.data.settings.clickAction) && void 0 !== e ? e : M
                    }), r = Object(U["a"])(() => n.value === L), s = Object(U["a"])(() => n.value === B), c = Object(U["a"])(() => s.value ? I : x), {
                        state: l
                    } = null === (e = Object(U["b"])()) || void 0 === e || null === (i = e.proxy) || void 0 === i ? void 0 : i.$store, d = Object(U["a"])(() => Pe(t.data.settings.origin, t.data.settings.path, l.websiteId, {
                        width: t.elementWidth,
                        height: t.elementHeight,
                        shouldContain: "contain" === t.data.settings.styles["object-fit"]
                    })), u = Object(U["a"])(() => Te(t.data.settings.origin, t.data.settings.path, l.websiteId, {
                        width: t.elementWidth,
                        height: t.elementHeight,
                        shouldContain: "contain" === t.data.settings.styles["object-fit"]
                    })), p = Object(U["a"])(() => {
                        var e;
                        const {
                            right: i
                        } = ho(null !== (e = t.mobileBlockPadding) && void 0 !== e ? e : ""), o = i ? Number.parseInt(i, 10) : null;
                        return Le(t.elementWidth, o)
                    }), m = e => {
                        r.value ? a({
                            src: Pe(t.data.settings.origin, t.data.settings.path, l.websiteId),
                            srcset: Ee(t.data.settings.origin, t.data.settings.path, l.websiteId),
                            alt: t.data.settings.alt
                        }) : o(e)
                    };
                    return {
                        alt: Object(U["a"])(() => t.data.settings.alt),
                        handleImageClick: m,
                        href: Object(U["a"])(() => t.data.settings.href),
                        src: d,
                        srcset: u,
                        sizes: p,
                        tagName: c,
                        target: Object(U["a"])(() => t.data.settings.target),
                        rel: Object(U["a"])(() => t.data.settings.rel),
                        isLightboxEnabled: r
                    }
                }
            },
            js = _s,
            Cs = Object(J["a"])(js, ks, Os, !1, null, null, null),
            Ss = Cs.exports,
            Is = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridInstagramFeed", {
                    attrs: {
                        media: t.media
                    }
                })
            },
            xs = [],
            Ls = i("bc3a"),
            Bs = i.n(Ls);
        "".concat("https://backend.zyro.com", "/v3/instagram");
        const Ms = "".concat("https://backend.zyro.com", "/u1/instagram"),
            Ps = ("".concat("https://editor.zyro.com", "/instagram/auth"), async t => {
                const {
                    accessToken: e
                } = (await Bs.a.get("".concat(Ms, "/token/").concat(t), {
                    withCredentials: !1
                })).data;
                return e
            });
        var Es = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", t._g({
                    staticClass: "instagram-feed"
                }, t.$listeners), t._l(t.media, (function(t) {
                    return i("GridInstagramFeedMediaItem", {
                        key: t.src,
                        attrs: {
                            src: t.src,
                            href: t.href,
                            alt: t.alt
                        }
                    })
                })), 1)
            },
            Ts = [],
            Ns = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.src && t.href ? i("a", {
                    staticClass: "media-wrapper",
                    attrs: {
                        title: "Open instagram page of this image",
                        href: t.href,
                        rel: "noopener",
                        target: "_blank"
                    }
                }, [i("GridInstagramFeedMediaItemFigure", {
                    attrs: {
                        src: t.src,
                        alt: t.alt
                    }
                })], 1) : t.src && !t.href ? i("div", {
                    staticClass: "media-wrapper"
                }, [i("GridInstagramFeedMediaItemFigure", {
                    attrs: {
                        src: t.src,
                        alt: t.alt
                    }
                })], 1) : i("div", {
                    staticClass: "placeholder"
                })
            },
            qs = [],
            As = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("figure", [t.src.includes("video") ? i("video", {
                    staticClass: "media-item",
                    attrs: {
                        src: t.src,
                        controls: ""
                    }
                }) : i("img", {
                    staticClass: "media-item",
                    attrs: {
                        src: t.src,
                        alt: t.alt
                    }
                })])
            },
            Hs = [],
            $s = {
                props: {
                    src: {
                        type: String,
                        default: null
                    },
                    alt: {
                        type: String,
                        default: null
                    }
                }
            },
            Ds = $s,
            Rs = (i("9a72"), Object(J["a"])(Ds, As, Hs, !1, null, "6d92ce0f", null)),
            Vs = Rs.exports,
            Gs = {
                components: {
                    GridInstagramFeedMediaItemFigure: Vs
                },
                props: {
                    src: {
                        type: String,
                        default: null
                    },
                    alt: {
                        type: String,
                        default: null
                    },
                    href: {
                        type: String,
                        default: null
                    }
                }
            },
            Fs = Gs,
            Us = (i("a596"), Object(J["a"])(Fs, Ns, qs, !1, null, "70ace480", null)),
            zs = Us.exports,
            Ws = {
                components: {
                    GridInstagramFeedMediaItem: zs
                },
                props: {
                    media: {
                        type: Array,
                        default: () => []
                    }
                }
            },
            Ys = Ws,
            Ks = (i("177f"), Object(J["a"])(Ys, Es, Ts, !1, null, null, null)),
            Js = Ks.exports;
        const Zs = "".concat(v, "/instagram-placeholders"),
            Xs = [{
                alt: "Workstation",
                id: "qc2YaEHSYsc",
                src: "".concat(Zs, "/workstation.jpg")
            }, {
                alt: "Waterfall between rocks",
                id: "ifnzcFXUmH0",
                src: "".concat(Zs, "/waterfall-between-rocks.jpg")
            }, {
                alt: "Trees with snow",
                id: "J2vryWaTqlB",
                src: "".concat(Zs, "/trees-with-snow.png")
            }, {
                alt: "Tree buds",
                id: "ZzmFPZuw7S1",
                src: "".concat(Zs, "/tree-buds.jpg")
            }, {
                alt: "Tiger drinking water",
                id: "k37Jfax7a6k",
                src: "".concat(Zs, "/tiger-drinking-water.jpg")
            }, {
                alt: "Tall well preserved buildings",
                id: "gTNSQDsXWp7",
                src: "".concat(Zs, "/tall-well-preserved-buildings.jpg")
            }, {
                alt: "Sunny beautiful wall",
                id: "QEdmdqjqcMf",
                src: "".concat(Zs, "/sunny-beautiful-wall.jpg")
            }, {
                alt: "Stereo gear",
                id: "iUXujDl2onh",
                src: "".concat(Zs, "/stereo-gear.jpg")
            }, {
                alt: "Rooftop oasis",
                id: "LWHjQE4HOv7",
                src: "".concat(Zs, "/rooftop-oasis.jpg")
            }, {
                alt: "Rocky beach",
                id: "o4qz1QOQcpJ",
                src: "".concat(Zs, "/rocky-beach.jpg")
            }, {
                alt: "Photographer holding camera",
                id: "VAHQ4wGABhK",
                src: "".concat(Zs, "/photographer-holding-camera.jpg")
            }, {
                alt: "Koi fishes",
                id: "zg35JVHQ4wG",
                src: "".concat(Zs, "/koi-fishes.jpg")
            }, {
                alt: "Human head artificially created",
                id: "zg35JVl8GY2",
                src: "".concat(Zs, "/human-head-artificially-created.jpg")
            }, {
                alt: "Horse eating grass",
                id: "dBwJoATZJBH",
                src: "".concat(Zs, "/horse-eating-grass.jpg")
            }, {
                alt: "Fluffy decoration in water",
                id: "HR21NDsphkV",
                src: "".concat(Zs, "/fluffy-docoration-in-water.jpg")
            }, {
                alt: "Elk looking at camera",
                id: "oLq0J4X2h2P",
                src: "".concat(Zs, "/elk-looking-at-camera.jpg")
            }, {
                alt: "Dog running in snow",
                id: "dbULY2RIxXc",
                src: "".concat(Zs, "/dog-running-in-snow.jpg")
            }, {
                alt: "Clean workspace",
                id: "WRmXHA1JA8H",
                src: "".concat(Zs, "/clean-workspace.jpg")
            }, {
                alt: "Cinematic food shot",
                id: "YgbHW4EtzbY",
                src: "".concat(Zs, "/cinematic-food-shot.jpg")
            }, {
                alt: "Christmas houses",
                id: "Eyoj1y8hvYz",
                src: "".concat(Zs, "/christmas-houses.jpg")
            }, {
                alt: "Bird sitting on branch",
                id: "yQKxjLtI8eg",
                src: "".concat(Zs, "/bird-sitting-on-branch.jpg")
            }, {
                alt: "Beautiful entry to private property",
                id: "1StnvFtqFjR",
                src: "".concat(Zs, "/beautiful-entry-to-private-property.jpg")
            }, {
                alt: "African animals",
                id: "nPjqWNmfFf0",
                src: "".concat(Zs, "/african-animals.jpg")
            }, {
                alt: "Workspace",
                id: "7gsm5H6lHSH",
                src: "".concat(Zs, "/workspace.jpg")
            }],
            Qs = "https://graph.instagram.com/me/media",
            tc = ["id", "permalink", "caption", "media_url"],
            ec = (t, e) => {
                let {
                    getInstagramTokenHandler: i,
                    cleanupCallback: o
                } = e;
                const a = Object(U["a"])(() => t.data.settings["item-count"]),
                    n = Object(U["f"])(null),
                    r = Object(U["f"])([]),
                    s = Object(U["a"])(() => r.value.length > 0 ? r.value.filter(t => {
                        let {
                            src: e
                        } = t;
                        return "undefined" !== typeof e
                    }).slice(0, a.value) : new Array(a.value).fill({})),
                    c = async () => {
                        const t = new URL(Qs);
                        t.searchParams.set("fields", tc.join(",")), t.searchParams.set("access_token", n.value);
                        const e = await fetch(t.toString()),
                            {
                                data: i
                            } = await e.json();
                        r.value = i.map(t => ({
                            id: t.id,
                            src: t.media_url,
                            alt: t.caption,
                            href: t.permalink
                        }))
                    },
                    l = async () => {
                        if (n.value = await i(t.id), n.value) try {
                            await c()
                        } catch (e) {
                            throw r.value = Xs, o && o(n.value), e
                        } else r.value = Xs
                    };
                return {
                    media: s,
                    init: l,
                    itemGap: Object(U["a"])(() => t.data.settings.styles["item-gap"])
                }
            };
        var ic = {
                components: {
                    GridInstagramFeed: Js
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    const {
                        media: e,
                        init: i
                    } = ec(t, {
                        getInstagramTokenHandler: Ps
                    });
                    return i(), {
                        media: e
                    }
                }
            },
            oc = ic,
            ac = Object(J["a"])(oc, Is, xs, !1, null, null, null),
            nc = ac.exports,
            rc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridMap", t._b({
                    ref: "mapRef"
                }, "GridMap", t.composedProps, !1))
            },
            sc = [],
            cc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "grid-map",
                    class: {
                        "grid-map--loading": !t.isIframeLoaded
                    }
                }, [i("iframe", {
                    ref: "iframeRef",
                    staticClass: "grid-map__frame",
                    attrs: {
                        width: "100%",
                        height: "100%",
                        src: t.renderSrc
                    }
                }), i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: !t.isIframeLoaded,
                        expression: "!isIframeLoaded"
                    }],
                    staticClass: "grid-map__pin"
                })])
            },
            lc = [],
            dc = {
                name: "GridMap",
                props: {
                    isIframeLoaded: {
                        type: Boolean,
                        default: !1
                    },
                    shouldRender: {
                        type: Boolean,
                        default: !0
                    },
                    src: {
                        type: String,
                        required: !0
                    }
                },
                computed: {
                    renderSrc() {
                        return this.shouldRender && this.src
                    }
                }
            },
            uc = dc,
            pc = (i("d1fc"), Object(J["a"])(uc, cc, lc, !1, null, "7c859886", null)),
            mc = pc.exports;
        const gc = (t, e) => {
            try {
                const {
                    isObserved: i
                } = Xn(e), o = Object(U["f"])(!1), a = Object(U["e"])({
                    src: Object(U["a"])(() => {
                        var e;
                        return null === (e = t.data.settings) || void 0 === e ? void 0 : e.src
                    }),
                    shouldRender: Object(U["a"])(() => i.value),
                    isIframeLoaded: Object(U["a"])(() => o.value)
                }), n = Object(U["i"])(() => {
                    var t;
                    const i = null === (t = e.value) || void 0 === t ? void 0 : t.$refs;
                    i && (i.iframeRef.addEventListener("load", () => {
                        o.value = !0
                    }), n())
                });
                return {
                    composedProps: a
                }
            } catch (i) {
                console.error(i)
            }
        };
        var hc = {
                name: "GridMapProviderUser",
                components: {
                    GridMap: mc
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    const e = Object(U["f"])(null),
                        {
                            composedProps: i
                        } = gc(t, e);
                    return {
                        mapRef: e,
                        composedProps: i
                    }
                }
            },
            bc = hc,
            vc = Object(J["a"])(bc, rc, sc, !1, null, null, null),
            fc = vc.exports,
            yc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridSocialIcons", t._b({}, "GridSocialIcons", t.composedProps, !1))
            },
            wc = [],
            kc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    class: t.computedClass,
                    style: t.computedStyles
                }, t._l(t.links, (function(e) {
                    var o = e.link,
                        a = e.svg,
                        n = e.title;
                    return i("a", t._g({
                        key: o,
                        staticClass: "social-icons__link",
                        attrs: {
                            href: o,
                            target: "_blank",
                            rel: "noopener",
                            title: n
                        },
                        domProps: {
                            innerHTML: t._s(a)
                        }
                    }, {
                        dragstart: t.preventLinks ? function(t) {
                            return t.preventDefault()
                        } : function() {
                            return null
                        },
                        click: t.preventLinks ? function(t) {
                            return t.preventDefault()
                        } : function() {
                            return null
                        }
                    }))
                })), 0)
            },
            Oc = [],
            _c = {
                props: {
                    links: {
                        type: Array,
                        default: () => []
                    },
                    preventLinks: {
                        type: Boolean,
                        default: !1
                    },
                    direction: {
                        type: String,
                        validator: t => ["row", "column"].includes(t),
                        default: "row"
                    },
                    directionMobile: {
                        type: String,
                        validator: t => ["row", "column"].includes(t),
                        default: null
                    },
                    preventSpacing: {
                        type: Boolean,
                        default: !1
                    },
                    fullHeight: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    computedClass() {
                        return ["social-icons", "social-icons--".concat(this.direction)]
                    },
                    computedStyles() {
                        const t = Object(T["a"])(Object(T["a"])(Object(T["a"])({}, this.fullHeight && {
                            height: "100%"
                        }), this.preventSpacing && {
                            "--space-between-icons": "0px"
                        }), {}, {
                            "--m-icon-direction": this.directionMobile || this.direction,
                            "--icon-padding-vertical": "column" === this.direction ? "var(--space-between-icons)" : "0",
                            "--icon-padding-horizontal": "row" === this.direction ? "var(--space-between-icons)" : "0"
                        });
                        return this.directionMobile && (t["--m-icon-padding-vertical"] = "column" === this.directionMobile ? "var(--space-between-icons)" : "0", t["--m-icon-padding-horizontal"] = "row" === this.directionMobile ? "var(--space-between-icons)" : "0"), t
                    }
                }
            },
            jc = _c,
            Cc = (i("3908"), Object(J["a"])(jc, kc, Oc, !1, null, "527c2292", null)),
            Sc = Cc.exports;
        const Ic = t => {
            const e = Object(U["a"])(() => t.data.settings.styles),
                i = Object(U["e"])({
                    links: Object(U["a"])(() => t.data.links.map(t => Object(T["a"])(Object(T["a"])({}, t), {}, {
                        title: "Go to ".concat(ve(t.icon), " page")
                    }))),
                    direction: Object(U["a"])(() => e.value["icon-direction"]),
                    directionMobile: Object(U["a"])(() => e.value["m-icon-direction"]),
                    fullHeight: Object(U["a"])(() => !e.value.justify),
                    preventSpacing: Object(U["a"])(() => "center" !== e.value["icon-spacing"] || "column" === e.value["icon-direction"] ? !e.value.justify : !e.value.align)
                });
            return i
        };
        var xc = {
                components: {
                    GridSocialIcons: Sc
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t, e) {
                    return {
                        composedProps: Ic(t, e)
                    }
                }
            },
            Lc = xc,
            Bc = Object(J["a"])(Lc, yc, wc, !1, null, null, null),
            Mc = Bc.exports,
            Pc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridButton", {
                    attrs: {
                        "tag-name": "button",
                        content: t.content,
                        "data-qa": "button-stripe-checkout",
                        type: t.type,
                        "is-disabled": t.isLoadingStripeScript
                    },
                    on: {
                        click: t.handleClick
                    }
                })
            },
            Ec = [];
        const Tc = Object(U["f"])(null),
            Nc = t => {
                var e;
                const i = Object(U["a"])(() => {
                        var e;
                        return (null === (e = t.data.settings) || void 0 === e ? void 0 : e.priceId) || ""
                    }),
                    o = Object(U["a"])(() => {
                        var e;
                        return (null === (e = t.data.settings) || void 0 === e ? void 0 : e.paymentType) || "payment"
                    }),
                    a = null === (e = Object(U["b"])()) || void 0 === e ? void 0 : e.proxy.$store.getters.defaultPages,
                    n = Object(U["a"])(() => {
                        var e;
                        return (a[null === (e = t.data.settings) || void 0 === e ? void 0 : e.successPageId] || Object.values(a)[0]).slug
                    }),
                    r = Object(U["a"])(() => {
                        var e;
                        return (a[null === (e = t.data.settings) || void 0 === e ? void 0 : e.cancellationPageId] || Object.values(a)[0]).slug
                    });
                return {
                    stripeInstance: Tc,
                    priceId: i,
                    paymentType: o,
                    successPageSlug: n,
                    cancellationPageSlug: r
                }
            },
            qc = "https://js.stripe.com/v3";
        var Ac = {
                name: "GridStripeButtonProviderUser",
                components: {
                    GridButton: vn["a"]
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    var e, i, o, a;
                    const {
                        content: n,
                        type: r
                    } = wn(t), {
                        stripeInstance: s,
                        priceId: c,
                        successPageSlug: l,
                        cancellationPageSlug: d,
                        paymentType: u
                    } = Nc(t), p = Object(U["f"])(!1), {
                        siteMeta: m
                    } = null !== (e = null === (i = Object(U["b"])()) || void 0 === i || null === (o = i.proxy) || void 0 === o || null === (a = o.$store) || void 0 === a ? void 0 : a.getters) && void 0 !== e ? e : {}, g = () => new Promise((t, e) => {
                        const i = !(!s.value || !window.Stripe);
                        if (i) return void t();
                        const o = document.createElement("script");
                        o.addEventListener("load", () => {
                            window.Stripe && (s.value = window.Stripe(m.stripePublicApiKey), t())
                        }), o.addEventListener("error", () => {
                            e()
                        }), o.src = qc, document.head.appendChild(o)
                    }), h = async () => {
                        c.value && (p.value = !0, await g(), p.value = !1, s.value.redirectToCheckout({
                            lineItems: [{
                                price: c.value,
                                quantity: 1
                            }],
                            mode: u.value,
                            successUrl: "".concat(window.location.origin, "/").concat(l.value),
                            cancelUrl: "".concat(window.location.origin, "/").concat(d.value)
                        }).then(t => {
                            t.error && console.error(t.error.message)
                        }))
                    };
                    return {
                        content: n,
                        type: r,
                        isLoadingStripeScript: p,
                        handleClick: h
                    }
                }
            },
            Hc = Ac,
            $c = Object(J["a"])(Hc, Pc, Ec, !1, null, null, null),
            Dc = $c.exports,
            Rc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridTextBox", {
                    domProps: {
                        innerHTML: t._s(t.data.content)
                    },
                    on: {
                        click: t.linkClickHandler
                    }
                })
            },
            Vc = [],
            Gc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", t._g({
                    staticClass: "text-box"
                }, t.$listeners), [t._t("default")], 2)
            },
            Fc = [],
            Uc = (i("06f4"), {}),
            zc = Object(J["a"])(Uc, Gc, Fc, !1, null, null, null),
            Wc = zc.exports,
            Yc = {
                name: "GridTextBoxProviderUser",
                components: {
                    GridTextBox: Wc
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup() {
                    const {
                        linkClickHandler: t
                    } = fa();
                    return {
                        linkClickHandler: t
                    }
                },
                computed: Object(T["a"])({}, Object(R["e"])(["website"]))
            },
            Kc = Yc,
            Jc = Object(J["a"])(Kc, Rc, Vc, !1, null, null, null),
            Zc = Jc.exports,
            Xc = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("GridVideo", t._b({
                    ref: "mapRef",
                    attrs: {
                        src: t.composedSrc,
                        "render-iframe": t.renderIframe,
                        "render-picture": t.renderPicture
                    },
                    on: {
                        "~click": function(e) {
                            t.renderIframe = !0
                        }
                    }
                }, "GridVideo", t.composedProps, !1))
            },
            Qc = [],
            tl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", t._g({
                    staticClass: "video"
                }, t.$listeners), [t.renderIframe ? i("iframe", {
                    staticClass: "video__frame",
                    attrs: {
                        src: t.src,
                        allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
                        allowfullscreen: "",
                        width: "100%",
                        height: "100%"
                    }
                }) : t.renderPicture && (t.jpg || t.webp) ? [i("picture", [i("source", {
                    attrs: {
                        type: "image/webp",
                        srcset: t.webp
                    }
                }), i("img", {
                    staticClass: "video__placeholder",
                    attrs: {
                        referrerpolicy: "origin",
                        height: "100%",
                        width: "100%",
                        "data-qa": "builder-gridelement-video",
                        src: t.jpg
                    }
                })]), i("button", {
                    class: "video__play video__play--" + t.provider,
                    attrs: {
                        type: "button"
                    }
                })] : t._e()], 2)
            },
            el = [];
        const il = {
                YOUTUBE: "youtube",
                VIMEO: "vimeo"
            },
            ol = "0",
            al = "1",
            nl = ol,
            rl = ol,
            sl = al,
            cl = ol,
            ll = ol,
            dl = al,
            ul = (il.YOUTUBE, {
                AUTOPLAY: "autoplay",
                LOOP: "loop",
                CONTROLS: "controls",
                AUTOPAUSE: "autopause",
                PLAYLIST: "playlist",
                PLAYSINLINE: "playsinline",
                MUTE: {
                    [il.YOUTUBE]: "mute",
                    [il.VIMEO]: "muted"
                }
            }),
            pl = {
                [il.YOUTUBE]: "https://www.youtube.com/embed/",
                [il.VIMEO]: "https://player.vimeo.com/video/"
            },
            ml = {
                [il.YOUTUBE]: /^.*(?:youtu\.be\/|vi?\/|u\/\w\/|embed\/|\?vi?=|&vi?=)([^#&?]{11}).*/,
                [il.VIMEO]: /https:\/\/(?:vimeo.com|player.vimeo.com)\/(?:video\/)?(\d*)(.*)/
            },
            gl = "https://vimeo.com/api/oembed.json?url=https://vimeo.com";
        var hl = {
                name: "GridVideo",
                props: {
                    renderIframe: {
                        type: Boolean,
                        default: !1
                    },
                    renderPicture: {
                        type: Boolean,
                        default: !0
                    },
                    src: {
                        type: String,
                        required: !0
                    },
                    provider: {
                        type: String,
                        default: il.YOUTUBE
                    },
                    jpg: {
                        type: String,
                        default: ""
                    },
                    webp: {
                        type: String,
                        default: ""
                    }
                }
            },
            bl = hl,
            vl = (i("bdcc"), Object(J["a"])(bl, tl, el, !1, null, "53d86141", null)),
            fl = vl.exports;
        const yl = async t => {
                const e = await fetch("".concat(gl, "/").concat(t)),
                    i = await e.json(),
                    o = i.thumbnail_url.replace("_295x166", "_720");
                return {
                    jpg: o.replace(".webp", ".jpg"),
                    webp: o.replace(".jpg", ".webp")
                }
            },
            wl = async (t, e) => {
                switch (t) {
                    case il.YOUTUBE:
                        return {
                            jpg: "https://i.ytimg.com/vi/".concat(e, "/hqdefault.jpg"),
                            webp: "https://i.ytimg.com/vi_webp/".concat(e, "/hqdefault.webp")
                        };
                    case il.VIMEO:
                        return yl(e);
                    default:
                        return {
                            jpg: null,
                            webp: null
                        }
                }
            },
            kl = (t, e, i) => {
                var o, a, n;
                const r = ul.MUTE[e],
                    s = new URLSearchParams({
                        [ul.PLAYLIST]: t,
                        [ul.AUTOPLAY]: null !== (o = null === i || void 0 === i ? void 0 : i[ul.AUTOPLAY]) && void 0 !== o ? o : nl,
                        [ul.CONTROLS]: null !== (a = null === i || void 0 === i ? void 0 : i[ul.CONTROLS]) && void 0 !== a ? a : sl,
                        [ul.LOOP]: null !== (n = null === i || void 0 === i ? void 0 : i[ul.LOOP]) && void 0 !== n ? n : rl,
                        [ul.AUTOPAUSE]: cl,
                        [ul.PLAYSINLINE]: dl,
                        [r]: ll
                    }).toString();
                return "".concat(pl[e]).concat(t, "?").concat(s)
            },
            Ol = async (t, e) => {
                const i = Object.entries(ml).find(e => {
                        let [, i] = e;
                        return null === t || void 0 === t ? void 0 : t.match(i)
                    }),
                    o = i && 2 === i.length;
                if (!o) return {
                    url: t,
                    isUrlValid: !1
                };
                const [a, n] = i, r = t.match(n)[1], {
                    jpg: s,
                    webp: c
                } = await wl(a, r);
                return {
                    src: kl(r, a, e),
                    isUrlValid: o,
                    jpg: s,
                    webp: c,
                    provider: a,
                    id: r
                }
            },
            _l = t => {
                const e = Object(U["e"])({
                        src: null,
                        provider: null,
                        width: null,
                        height: null,
                        webp: null,
                        jpg: null
                    }),
                    i = Object(U["e"])({
                        src: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.src) && void 0 !== i ? i : t.data.settings.src
                        }),
                        provider: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.provider) && void 0 !== i ? i : t.data.settings.provider
                        }),
                        width: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.width) && void 0 !== i ? i : t.data.settings.width
                        }),
                        height: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.height) && void 0 !== i ? i : t.data.settings.height
                        }),
                        webp: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.webp) && void 0 !== i ? i : t.data.settings.webp
                        }),
                        jpg: Object(U["a"])(() => {
                            var i;
                            return null !== (i = e.jpg) && void 0 !== i ? i : t.data.settings.jpg
                        })
                    });
                return Object(U["i"])(() => {
                    t.data.settings.src === i.src && t.data.settings.jpg || Ol(t.data.settings.src).then(t => {
                        Object.entries(t).forEach(t => {
                            let [i, o] = t;
                            e[i] = o
                        })
                    })
                }), {
                    composedProps: i
                }
            },
            jl = 3e3;
        var Cl = {
                name: "GridVideoProviderUser",
                components: {
                    GridVideo: fl
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    }
                },
                setup(t) {
                    var e, i, o, a, n;
                    const {
                        composedProps: r
                    } = _l(t), {
                        isMobileScreen: s
                    } = null !== (e = null === (i = Object(U["b"])()) || void 0 === i || null === (o = i.proxy) || void 0 === o || null === (a = o.$store) || void 0 === a || null === (n = a.state) || void 0 === n ? void 0 : n.gui) && void 0 !== e ? e : {}, c = Object(U["f"])(null), l = Object(U["a"])(() => {
                        var e, i;
                        return null !== (e = null === (i = t.data.settings.src) || void 0 === i ? void 0 : i.includes("".concat([ul.AUTOPLAY], "=").concat(al))) && void 0 !== e && e
                    }), d = Object(U["a"])(() => {
                        const t = ul.MUTE[r.provider],
                            e = s ? r.src : r.src.replace("".concat([ul.AUTOPLAY], "=").concat(ol), "".concat([ul.AUTOPLAY], "=").concat(al));
                        return l.value ? e.replace("".concat([t], "=").concat(ol), "".concat([t], "=").concat(al)) : e
                    }), u = Object(U["f"])(!1), p = Object(U["f"])(!1), m = () => {
                        const t = new IntersectionObserver(e => {
                            let [{
                                isIntersecting: i
                            }] = e;
                            i && (l.value && !s ? u.value = !0 : p.value = !0, t.disconnect())
                        }, {
                            threshold: 0
                        });
                        t.observe(c.value.$el), s && setTimeout(() => {
                            u.value = !0
                        }, jl)
                    };
                    return Object(U["d"])(() => m()), {
                        mapRef: c,
                        composedProps: r,
                        composedSrc: d,
                        renderIframe: u,
                        renderPicture: p
                    }
                }
            },
            Sl = Cl,
            Il = Object(J["a"])(Sl, Xc, Qc, !1, null, null, null),
            xl = Il.exports,
            Ll = {
                name: "BlockGridItemUser",
                components: {
                    GridButton: jn,
                    GridStripeButton: Dc,
                    GridEcommerceButton: Dn,
                    GridForm: Qr,
                    GridVideo: xl,
                    GridTextBox: Zc,
                    GridMap: fc,
                    GridSocialIcons: Mc,
                    GridGallery: ws,
                    GridImage: Ss,
                    GridInstagramFeed: nc,
                    GridEmbed: ir
                },
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    mobileBlockPadding: {
                        type: String,
                        required: !0
                    },
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    },
                    blockData: {
                        type: Object,
                        required: !0
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])("gui", ["isMobileScreen"])), {}, {
                    settings() {
                        return this.data.settings
                    },
                    styles() {
                        return this.settings.styles
                    },
                    innerBackgroundValue(t) {
                        let {
                            data: e
                        } = t;
                        const {
                            innerBackground: i
                        } = e;
                        if (!i) return {};
                        const o = i[i.current];
                        if ("image" === i.current) {
                            const t = {
                                "--gridItemInnerBackground": "url(".concat(o, ")")
                            };
                            return "overlay-opacity" in i && (t["--gridItemInnerBackgroundOverlayOpacity"] = i["overlay-opacity"]), t
                        }
                        return {
                            "--gridItemInnerBackground": o
                        }
                    },
                    elementWidth() {
                        var t;
                        return null === (t = co(this.blockData, this.styles.position)) || void 0 === t ? void 0 : t.width
                    },
                    elementHeight() {
                        var t;
                        return null === (t = co(this.blockData, this.styles.position)) || void 0 === t ? void 0 : t.height
                    },
                    computedStyles() {
                        return Object(T["a"])(Object(T["a"])({}, vo(this.styles)), this.innerBackgroundValue)
                    },
                    hidden() {
                        return this.isMobileScreen && "mobile" === this.settings.hiddenOn
                    }
                })
            },
            Bl = Ll,
            Ml = (i("ff75"), Object(J["a"])(Bl, mn, gn, !1, null, "189c24f4", null)),
            Pl = Ml.exports,
            El = {
                components: {
                    BlockGridItemUser: Pl
                },
                props: {
                    data: {
                        type: Object,
                        required: !0
                    },
                    blockId: {
                        type: String,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    components: {
                        type: Object,
                        default: () => ({})
                    },
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: Object(R["e"])(["website"]),
                methods: {
                    getIsOverflowVisible(t) {
                        var e;
                        return "GridForm" === (null === (e = this.components[t]) || void 0 === e ? void 0 : e.type)
                    }
                }
            },
            Tl = El,
            Nl = (i("0db2"), Object(J["a"])(Tl, un, pn, !1, null, "1f24cc0f", null)),
            ql = Nl.exports,
            Al = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockLayoutWrapper", {
                    ref: "blockLayout",
                    style: t.layoutCSSVars
                }, t._l(t.layoutElements, (function(e) {
                    return i("LayoutElementProviderUser", {
                        key: e.elementId,
                        attrs: {
                            "element-id": e.elementId,
                            "element-data": e,
                            "is-mobile-view": t.isMobileView
                        }
                    })
                })), 1)
            },
            Hl = [],
            $l = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-layout",
                    style: t.computedStyles
                }, [t._t("default")], 2)
            },
            Dl = [];
        const Rl = 1224;
        var Vl = {
                name: "BlockLayoutWrapper",
                computed: {
                    computedStyles() {
                        return {
                            "--max-width": "".concat(Rl, "px")
                        }
                    }
                }
            },
            Gl = Vl,
            Fl = (i("9438"), Object(J["a"])(Gl, $l, Dl, !1, null, null, null)),
            Ul = Fl.exports;
        const zl = (t, e) => {
                const i = t.map((t, e, i) => 0 === e ? t : t - i[e - 1]),
                    o = "".concat(i.filter(t => 0 !== t).map(t => e ? "minmax(".concat(t, "px, auto)") : "".concat(t, "px")).join(" "), " 1fr");
                return o
            },
            Wl = t => {
                try {
                    const e = t.flatMap(t => {
                            let {
                                desktop: e
                            } = t;
                            return [e.top, e.height + e.top]
                        }),
                        i = [...new Set([0, ...e])].sort((t, e) => t - e);
                    return i
                } catch (e) {
                    console.error(e)
                }
            },
            Yl = (t, e) => {
                const i = t.map((t, e, i) => 0 === e ? t : t - i[e - 1]),
                    o = i.filter(t => 0 !== t).map(t => e ? "".concat(t / Rl * 100, "%") : "".concat(t, "px")).join(" ");
                return o
            },
            Kl = t => {
                const e = t.flatMap(t => {
                        let {
                            desktop: e
                        } = t;
                        return [e.left, e.width + e.left]
                    }),
                    i = [...new Set([0, ...e, Rl])].sort((t, e) => t - e);
                return i
            },
            Jl = function(t, e) {
                let i = !(arguments.length > 2 && void 0 !== arguments[2]) || arguments[2];
                const o = Object(U["a"])(() => t.data.components.map(t => Object(T["a"])(Object(T["a"])({}, e.value[t]), {}, {
                        elementId: t
                    }))),
                    a = Object(U["a"])(() => Wl(o.value)),
                    n = Object(U["a"])(() => zl(a.value, i)),
                    r = Object(U["a"])(() => Kl(o.value)),
                    s = Object(U["a"])(() => Yl(r.value, i)),
                    c = Object(U["a"])(() => o.value.map(e => {
                        const {
                            top: i,
                            left: o,
                            width: n,
                            height: s
                        } = e.desktop, c = a.value.indexOf(i) + 1, l = a.value.indexOf(i + s) + 1, d = r.value.indexOf(o) + 1, u = r.value.indexOf(o + n) + 1;
                        return Object(T["a"])(Object(T["a"])({}, e), {}, {
                            settings: Object(T["a"])(Object(T["a"])({}, e.settings), {}, {
                                styles: Object(T["a"])(Object(T["a"])({}, e.settings.styles), {}, {
                                    "grid-row": "".concat(c, "/").concat(l),
                                    "grid-column": "".concat(d, "/").concat(u),
                                    "z-index": t.data.zindexes.indexOf(e.elementId) + 1
                                })
                            })
                        })
                    })),
                    l = Object(U["a"])(() => ({
                        "--grid-template-rows": n.value,
                        "--grid-template-columns": s.value,
                        "--block-min-height": "".concat(t.data.minHeight, "px")
                    }));
                return {
                    layoutElements: c,
                    layoutCSSVars: l
                }
            };
        var Zl = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("LayoutElementWrapper", {
                    staticClass: "layout-element",
                    attrs: {
                        "element-data": t.elementData
                    }
                }, [i(t.elementData.type, {
                    tag: "Component",
                    staticClass: "layout-element__component",
                    attrs: {
                        id: t.elementId,
                        data: t.elementData,
                        "is-mobile-view": t.isMobileView,
                        "element-width": t.elementData.desktop.width,
                        "element-height": t.elementData.desktop.height
                    }
                }), t._t("default")], 2)
            },
            Xl = [],
            Ql = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "layout-element",
                    style: t.computedStyles
                }, [t._t("default")], 2)
            },
            td = [],
            ed = {
                name: "LayoutElementWrapper",
                props: {
                    elementData: {
                        type: Object,
                        required: !0
                    }
                },
                computed: {
                    settings() {
                        return this.elementData.settings
                    },
                    styles() {
                        return this.settings.styles
                    },
                    innerBackgroundValue() {
                        const {
                            innerBackground: t
                        } = this.elementData;
                        if (!t) return {};
                        const e = t[t.current];
                        return "image" !== t.current ? {
                            "--gridItemInnerBackground": e
                        } : {
                            "--gridItemInnerBackground": "url(".concat(e, ")"),
                            "--gridItemInnerBackgroundOverlayOpacity": "overlay-opacity" in t ? t["overlay-opacity"] : null
                        }
                    },
                    computedStyles() {
                        return Object(T["a"])(Object(T["a"])({}, vo(this.styles)), this.innerBackgroundValue)
                    }
                }
            },
            id = ed,
            od = (i("e172"), Object(J["a"])(id, Ql, td, !1, null, null, null)),
            ad = od.exports,
            nd = {
                name: "LayoutElementProviderUser",
                components: {
                    GridButton: jn,
                    GridStripeButton: Dc,
                    GridEcommerceButton: Dn,
                    GridForm: Qr,
                    GridVideo: xl,
                    GridTextBox: Zc,
                    GridMap: fc,
                    GridSocialIcons: Mc,
                    GridGallery: ws,
                    GridImage: Ss,
                    GridInstagramFeed: nc,
                    GridEmbed: ir,
                    LayoutElementWrapper: ad
                },
                props: {
                    elementId: {
                        type: String,
                        required: !0
                    },
                    elementData: {
                        type: Object,
                        required: !0
                    },
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    },
                    overrideWidth: {
                        type: Number,
                        default: null
                    },
                    overrideHeight: {
                        type: Number,
                        default: null
                    }
                }
            },
            rd = nd,
            sd = (i("35d1"), Object(J["a"])(rd, Zl, Xl, !1, null, null, null)),
            cd = sd.exports,
            ld = {
                name: "BlockLayoutProviderUser",
                components: {
                    BlockLayoutWrapper: Ul,
                    LayoutElementProviderUser: cd
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    components: {
                        type: Object,
                        default: () => ({})
                    },
                    isMobileView: {
                        type: Boolean,
                        required: !0
                    }
                },
                setup(t) {
                    const {
                        components: e
                    } = Object(U["g"])(t), {
                        layoutElements: i,
                        layoutCSSVars: o
                    } = Jl(t, e);
                    return {
                        layoutElements: i,
                        layoutCSSVars: o
                    }
                }
            },
            dd = ld,
            ud = Object(J["a"])(dd, Al, Hl, !1, null, null, null),
            pd = ud.exports,
            md = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockBlogList", {
                    attrs: {
                        data: t.data,
                        "block-id": t.blockId,
                        lcp: t.lcp,
                        posts: t.posts,
                        "user-full-name": t.userFullName
                    },
                    on: {
                        "post-click": t.handlePostClick
                    }
                })
            },
            gd = [],
            hd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "builder-section-blog",
                        expression: "'builder-section-blog'"
                    }],
                    ref: "blogList",
                    staticClass: "block-blog-list",
                    attrs: {
                        id: t.blockId
                    }
                }, [i("Transition", {
                    attrs: {
                        name: "fade"
                    }
                }, [t.filteredCategoryId ? i("div", {
                    staticClass: "block-blog-list__filter"
                }, [t._v(" " + t._s(t.website.blogCategories[t.filteredCategoryId].name) + " "), i("button", {
                    staticClass: "block-blog-list__filter-button",
                    on: {
                        click: function(e) {
                            t.filteredCategoryId = null
                        }
                    }
                }, [t._v(" " + t._s(t.SHOW_ALL_POSTS_LABEL) + " ")])]) : t._e()]), t.currentPageItems.length ? i("div", {
                    staticClass: "block-blog-list__list",
                    class: {
                        "block-blog-list__list--one-col": 1 === t.postColumnCount
                    }
                }, t._l(t.currentPageItems, (function(e, o) {
                    return i("BlockBlogListItem", {
                        directives: [{
                            name: "qa",
                            rawName: "v-qa",
                            value: "blog-list-item",
                            expression: "'blog-list-item'"
                        }],
                        key: "post-" + o,
                        attrs: {
                            post: e,
                            "is-lcp": t.isLcp(o),
                            "author-name": e.meta.authorName || t.userFullName,
                            "cover-object-fit": t.data.settings.styles["cover-object-fit"],
                            "shown-items": t.data.settings.shownItems
                        },
                        on: {
                            "filter-category": function(e) {
                                t.filteredCategoryId = e, t.scrollToTop()
                            },
                            "post-click": function(i) {
                                return t.$emit("post-click", e)
                            }
                        },
                        scopedSlots: t._u([{
                            key: "block-blog-list-item-overlay",
                            fn: function() {
                                return [t._t("block-blog-list-overlay", null, {
                                    post: e
                                })]
                            },
                            proxy: !0
                        }], null, !0)
                    })
                })), 1) : i("div", {
                    staticClass: "block-blog-list__empty-block"
                }, [t._t("block-blog-list-empty-block")], 2), i("ZyroPagination", {
                    staticClass: "block-blog-list__pagination",
                    attrs: {
                        "current-page": t.currentPage,
                        "page-count": t.pageCount
                    },
                    on: {
                        "change-page": function(e) {
                            t.setCurrentPage(e), t.scrollToTop()
                        }
                    }
                })], 1)
            },
            bd = [],
            vd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.pageCount > 1 ? i("div", {
                    staticClass: "pagination"
                }, [i("button", {
                    staticClass: "pagination__button",
                    attrs: {
                        disabled: 1 === t.currentPage,
                        "data-testId": "button-previous"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("change-page", Math.max(1, t.currentPage - 1))
                        }
                    }
                }, [i("svg", {
                    attrs: {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M7 1L1 7L7 13",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])]), t._l(t.paginationTriggers, (function(e) {
                    return i("button", {
                        key: e + "-trigger",
                        staticClass: "pagination__button pagination__trigger",
                        class: {
                            "pagination__trigger--current": e === t.currentPage
                        },
                        attrs: {
                            "data-testId": "button-" + e
                        },
                        on: {
                            click: function(i) {
                                return t.$emit("change-page", e)
                            }
                        }
                    }, [t._v(" " + t._s(e) + " ")])
                })), i("button", {
                    staticClass: "pagination__button",
                    attrs: {
                        disabled: t.currentPage === t.pageCount,
                        "data-testId": "button-next"
                    },
                    on: {
                        click: function(e) {
                            t.$emit("change-page", Math.min(t.pageCount, t.currentPage + 1))
                        }
                    }
                }, [i("svg", {
                    attrs: {
                        width: "8",
                        height: "14",
                        viewBox: "0 0 8 14",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M1 13L7 7L1 1",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])], 2) : t._e()
            },
            fd = [],
            yd = (i("26e9"), {
                props: {
                    currentPage: {
                        type: Number,
                        required: !0
                    },
                    pageCount: {
                        type: Number,
                        required: !0
                    }
                },
                computed: {
                    paginationTriggers() {
                        const {
                            currentPage: t,
                            pageCount: e
                        } = this, i = 5;
                        if (i > e) return [...new Array(e + 1).keys()].slice(1);
                        const o = (i - 1) / 2,
                            a = Array.from({
                                length: i - 1
                            }).fill(0);
                        if (t <= o + 1) {
                            a[0] = 1;
                            const t = a.map((t, e) => a[0] + e);
                            return t.push(e), t
                        }
                        if (t >= e - o + 1) {
                            const t = a.map((t, i) => e - i);
                            return t.reverse().unshift(1), t
                        }
                        a[0] = t - o + 1;
                        const n = a.map((t, e) => a[0] + e);
                        return n.unshift(1), n[n.length - 1] = e, n
                    }
                }
            }),
            wd = yd,
            kd = (i("1eb8"), Object(J["a"])(wd, vd, fd, !1, null, "7b639520", null)),
            Od = kd.exports,
            _d = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-blog-list-item"
                }, [t._t("block-blog-list-item-overlay"), t.isCoverImageShown ? i("a", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "blog-list-item-image",
                        expression: "'blog-list-item-image'"
                    }],
                    staticClass: "block-blog-list-item__cover-image-container",
                    attrs: {
                        href: t.post.slug
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("post-click")
                        }
                    }
                }, [i("div", {
                    staticClass: "block-blog-list-item__cover-image-wrapper"
                }, [i("img", {
                    staticClass: "block-blog-list-item__cover-image",
                    attrs: {
                        alt: t.coverImageAlt,
                        src: t.src,
                        srcset: t.srcset,
                        sizes: t.sizes,
                        loading: t.isLcp ? "eager" : "lazy"
                    }
                })])]) : t._e(), i("BlockBlogListItemCategories", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.shownItems.categories && t.categories.length,
                        expression: "shownItems.categories && categories.length"
                    }],
                    staticClass: "font-secondary",
                    attrs: {
                        categories: t.categories
                    },
                    on: {
                        "filter-category": function(e) {
                            return t.$emit("filter-category", e)
                        }
                    }
                }), i("a", {
                    staticClass: "block-blog-list-item__content",
                    attrs: {
                        href: t.post.slug
                    },
                    on: {
                        click: function(e) {
                            return e.preventDefault(), t.$emit("post-click")
                        }
                    }
                }, [i("h3", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.shownItems.title,
                        expression: "shownItems.title"
                    }],
                    staticClass: "font-primary block-blog-list-item__title"
                }, [t._v(" " + t._s(t.post.meta.title) + " ")]), i("p", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.shownItems.description,
                        expression: "shownItems.description"
                    }],
                    staticClass: "block-blog-list-item__description font-secondary"
                }, [t._v(" " + t._s(t.post.meta.description) + " ")]), i("BlockBlogListItemMeta", t._b({}, "BlockBlogListItemMeta", {
                    authorName: t.authorName,
                    minutesAmount: t.post.minutesToRead,
                    date: t.$options.getFormattedNumericDate(t.post.date),
                    showAvatar: t.shownItems.avatar,
                    showName: t.shownItems.authorFullName,
                    showDate: t.shownItems.date,
                    showMinutes: t.shownItems.minutesToRead
                }, !1))], 1)], 2)
            },
            jd = [];
        const Cd = 600,
            Sd = 360;
        var Id = {
                components: {
                    BlockBlogListItemMeta: nn,
                    BlockBlogListItemCategories: Za
                },
                props: {
                    post: {
                        type: Object,
                        default: () => ({})
                    },
                    isLcp: {
                        type: Boolean,
                        default: !1
                    },
                    authorName: {
                        type: String,
                        default: null
                    },
                    shownItems: {
                        type: Object,
                        default: () => ({
                            authorFullName: !0,
                            coverImage: !0,
                            title: !0,
                            description: !0,
                            date: !0,
                            categories: !0,
                            avatar: !0,
                            minutesToRead: !0
                        })
                    },
                    coverObjectFit: {
                        type: String,
                        default: "cover"
                    },
                    cursor: {
                        type: String,
                        default: "pointer"
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["websiteId"])), {}, {
                    coverImageAlt() {
                        var t, e;
                        return null !== (t = null === (e = this.post) || void 0 === e ? void 0 : e.coverImageAlt) && void 0 !== t ? t : ""
                    },
                    coverImagePath() {
                        var t, e;
                        return null !== (t = null === (e = this.post) || void 0 === e ? void 0 : e.coverImagePath) && void 0 !== t ? t : ""
                    },
                    src() {
                        return this.post.coverImagePath ? Pe(this.post.coverImageOrigin, this.post.coverImagePath, this.websiteId, {
                            width: Cd,
                            height: Sd
                        }) : ""
                    },
                    srcset() {
                        return this.post.coverImagePath ? Te(this.post.coverImageOrigin, this.post.coverImagePath, this.websiteId, {
                            width: Cd,
                            height: Sd
                        }) : ""
                    },
                    sizes() {
                        return Le(Cd, null)
                    },
                    categories() {
                        var t, e;
                        return null !== (t = null === (e = this.post) || void 0 === e ? void 0 : e.categories) && void 0 !== t ? t : []
                    },
                    isCoverImageShown() {
                        return !!this.shownItems.coverImage && this.coverImagePath
                    }
                }),
                getFormattedNumericDate: rn
            },
            xd = Id,
            Ld = (i("0256"), Object(J["a"])(xd, _d, jd, !1, null, "183a7a93", null)),
            Bd = Ld.exports;
        const Md = "Show all posts";
        var Pd = {
                name: "BlockBlogList",
                components: {
                    BlockBlogListItem: Bd,
                    ZyroPagination: Od
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    userFullName: {
                        type: String,
                        required: !0
                    },
                    posts: {
                        type: Object,
                        default: () => ({})
                    }
                },
                setup() {
                    return {
                        SHOW_ALL_POSTS_LABEL: Md
                    }
                },
                data() {
                    var t;
                    return {
                        currentPage: Number.parseInt(null === (t = this.$route.query) || void 0 === t ? void 0 : t.page, 10) || 1,
                        filteredCategoryId: null
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["website"])), {}, {
                    postColumnCount() {
                        return Number.parseInt(this.data.settings.styles["post-column-count"], 10)
                    },
                    postsToRender() {
                        const {
                            categories: t,
                            showAllPosts: e,
                            showWithoutCategories: i
                        } = this.data.settings, o = e ? this.posts : Object.fromEntries(Object.entries(this.posts).filter(e => {
                            let [, o] = e;
                            const a = t.some(t => o.categories.includes(t)),
                                n = i && 0 === o.categories.length;
                            return n || a
                        }));
                        return this.filteredCategoryId ? Object.fromEntries(Object.entries(o).filter(t => {
                            let [, e] = t;
                            return e.categories.includes(this.filteredCategoryId)
                        })) : o
                    },
                    sortedPosts() {
                        return Object.values(this.postsToRender).sort((t, e) => Date.parse(e.date) - Date.parse(t.date))
                    },
                    currentPageItems() {
                        return this.sortedPosts.slice((this.currentPage - 1) * this.data.settings.postsPerPage, this.currentPage * this.data.settings.postsPerPage)
                    },
                    pageCount() {
                        return Math.ceil(Object.keys(this.postsToRender).length / this.data.settings.postsPerPage)
                    }
                }),
                watch: {
                    currentPageItems(t) {
                        0 === t.length && this.currentPage > 1 && (this.currentPage -= 1)
                    }
                },
                methods: {
                    isLcp(t) {
                        return "block-blog-list" === this.lcp.type && 0 === t && this.lcp.id === this.blockId
                    },
                    scrollToTop() {
                        const t = 50,
                            e = this.$refs.blogList.getBoundingClientRect().top;
                        e > 0 || window.scrollBy({
                            top: e - t,
                            behavior: "smooth"
                        })
                    },
                    setCurrentPage(t) {
                        this.currentPage = t, this.$router.push({
                            path: "?page=".concat(this.currentPage)
                        })
                    }
                }
            },
            Ed = Pd,
            Td = (i("f633"), Object(J["a"])(Ed, hd, bd, !1, null, "4982dcef", null)),
            Nd = Td.exports;
        const qd = {
            "AnA2-P15c": {
                name: "New page",
                path: "/howtomakenachos",
                blocks: ["AnA2-P15c-header", "AnA2-P15c-section"],
                type: "blog",
                isDraft: !1,
                coverImageOrigin: "unsplash",
                coverImagePath: "photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyNTgzfQ",
                coverImageAlt: "selective focus photography of white USB port",
                date: "2020-06-01",
                categories: [],
                minutesToRead: "4",
                meta: {
                    title: "How to make the perfect nachos",
                    description: "Nachos are tasty. But they can be made even better.",
                    ogImageOrigin: "unsplash",
                    ogImagePath: "photo-1582169296194-e4d644c48063?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyNTgzfQ",
                    ogImageAlt: "selective focus photography of white USB port"
                }
            },
            xYeRqh3F4: {
                name: "New page",
                path: "/pullingallnighters",
                blocks: ["xYeRqh3F4-header", "xYeRqh3F4-section"],
                type: "blog",
                isDraft: !1,
                coverImageOrigin: "unsplash",
                coverImagePath: "photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyNTgzfQ",
                coverImageAlt: "four brown gift boxes on white surface",
                date: "2020-06-01",
                categories: [],
                minutesToRead: "1",
                meta: {
                    title: "Pulling all nighters",
                    description: "Every developer has done this. And will do it again and again and again...",
                    ogImageOrigin: "unsplash",
                    ogImagePath: "photo-1536746803623-cef87080bfc8?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjcyNTgzfQ",
                    ogImageAlt: "four brown gift boxes on white surface"
                }
            }
        };
        var Ad = {
                name: "BlockBlogListProviderUser",
                components: {
                    BlockBlogList: Nd
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    isBlockPreviewMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])("user", ["user"])), Object(R["d"])(["publishedBlogPages"])), {}, {
                    userFullName() {
                        var t;
                        return null === (t = this.user) || void 0 === t ? void 0 : t.fullName
                    },
                    posts() {
                        return this.isBlockPreviewMode ? qd : this.publishedBlogPages
                    }
                }),
                methods: {
                    handlePostClick(t) {
                        this.$router.push({
                            path: t.slug
                        })
                    }
                }
            },
            Hd = Ad,
            $d = Object(J["a"])(Hd, md, gd, !1, null, null, null),
            Dd = $d.exports,
            Rd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockEcommerceProductList", {
                    attrs: {
                        "block-id": t.blockId,
                        products: t.products,
                        "block-style": t.blockStyle,
                        "text-color-vars": t.textColorVars,
                        "is-block-preview-mode": t.isBlockPreviewMode
                    },
                    on: {
                        "open-product-page": t.openProductPage
                    }
                })
            },
            Vd = [],
            Gd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-product-list-wrapper",
                    attrs: {
                        id: t.blockId
                    }
                }, [t.isProductListShown ? i("div", {
                    staticClass: "block-product-list",
                    style: t.computedStyles
                }, t._l(t.products, (function(e, o) {
                    return i("ProductListItem", {
                        key: o,
                        attrs: {
                            image: e.thumbnail,
                            title: e.title,
                            price: e.variants[0].prices[0],
                            "is-centered": "center" === t.textAlign
                        },
                        on: {
                            "open-product-page": function(i) {
                                return t.$emit("open-product-page", e.id)
                            }
                        }
                    })
                })), 1) : i("ProductListEmptyState", {
                    attrs: {
                        "text-color-vars": t.textColorVars
                    }
                })], 1)
            },
            Fd = [],
            Ud = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "product-list-empty-state",
                    style: t.computedStyles
                }, [i("svg", {
                    staticClass: "product-list-empty-state__icon",
                    attrs: {
                        width: "41",
                        height: "40",
                        viewBox: "0 0 41 40",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M10.5 3.33334L5.5 10V33.3333C5.5 34.2174 5.85119 35.0652 6.47631 35.6904C7.10143 36.3155 7.94928 36.6667 8.83333 36.6667H32.1667C33.0507 36.6667 33.8986 36.3155 34.5237 35.6904C35.1488 35.0652 35.5 34.2174 35.5 33.3333V10L30.5 3.33334H10.5Z",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5.5 10H35.5",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M27.1663 16.6667C27.1663 18.4348 26.464 20.1305 25.2137 21.3807C23.9635 22.631 22.2678 23.3334 20.4997 23.3334C18.7316 23.3334 17.0359 22.631 15.7856 21.3807C14.5354 20.1305 13.833 18.4348 13.833 16.6667",
                        stroke: "currentColor",
                        "stroke-width": "2",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })]), i("h6", [t._v("No publicly visible products")])])
            },
            zd = [],
            Wd = {
                props: {
                    textColorVars: {
                        type: Object,
                        default: () => ({})
                    }
                },
                computed: {
                    computedStyles() {
                        return Object(T["a"])({}, vo(this.textColorVars))
                    }
                }
            },
            Yd = Wd,
            Kd = (i("1ae1"), Object(J["a"])(Yd, Ud, zd, !1, null, null, null)),
            Jd = Kd.exports,
            Zd = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "product-list-item",
                    class: {
                        "product-list-item--centered": t.isCentered
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("open-product-page")
                        }
                    }
                }, [i("div", {
                    staticClass: "product-list-item__image-wrapper "
                }, [i("img", {
                    staticClass: "product-list-item__image",
                    attrs: {
                        src: t.imageUrl
                    }
                })]), i("h6", {
                    staticClass: "product-list-item__title"
                }, [t._v(" " + t._s(t.title) + " ")]), i("p", [t._v(t._s(t.formatPrice(t.price.amount, t.price.currency_code)))])])
            },
            Xd = [];
        const Qd = {
            EUR: {
                symbol: "€",
                template: t => "€".concat(t.toFixed(2))
            },
            USD: {
                symbol: "$",
                template: t => "$".concat(t.toFixed(2))
            },
            AUD: {
                symbol: "AU$",
                template: t => "AU$".concat(t.toFixed(2))
            },
            CAD: {
                symbol: "CA$",
                template: t => "CA$".concat(t.toFixed(2))
            },
            NZD: {
                symbol: "NZ$",
                template: t => "NZ$".concat(t.toFixed(2))
            },
            HKD: {
                symbol: "HK$",
                template: t => "HK$".concat(t.toFixed(2))
            },
            MXN: {
                symbol: "MX$",
                template: t => "MX$".concat(t.toFixed(2))
            },
            SGD: {
                symbol: "S$",
                template: t => "S$".concat(t.toFixed(2))
            },
            BRL: {
                symbol: "R$",
                template: t => "R$".concat(t.toFixed(2))
            },
            GBP: {
                symbol: "£",
                template: t => "£".concat(t.toFixed(2))
            },
            DKK: {
                symbol: "kr",
                template: t => "".concat(t.toFixed(2), "-kr.")
            },
            NOK: {
                symbol: "kr",
                template: t => "".concat(t.toFixed(2), "-kr.")
            },
            SEK: {
                symbol: "kr",
                template: t => "".concat(t.toFixed(2), "-kr.")
            },
            PLN: {
                symbol: "zł",
                template: t => "".concat(t.toFixed(2), "zł")
            },
            CZK: {
                symbol: "Kč",
                template: t => "".concat(t.toFixed(2), "Kč")
            },
            HUF: {
                symbol: "Ft",
                template: t => "".concat(t.toFixed(2), "Ft")
            },
            BGN: {
                symbol: "лв",
                template: t => "лв".concat(t.toFixed(2))
            },
            RON: {
                symbol: "lei",
                template: t => "lei".concat(t.toFixed(2))
            },
            MYR: {
                symbol: "RM",
                template: t => "RM".concat(t.toFixed(2))
            },
            CHF: {
                symbol: "Fr",
                template: t => "".concat(t.toFixed(2), "Fr")
            },
            INR: {
                symbol: "₹",
                template: t => "₹".concat(t.toFixed(2))
            },
            AED: {
                symbol: "د.إ",
                template: t => "".concat(t.toFixed(2), "د.إ")
            }
        };

        function tu(t, e) {
            const i = .01 * t;
            if (!e) return i;
            const o = Qd[e.toUpperCase()];
            return o ? o.template(i) : "".concat(e).concat(i.toFixed(2))
        }
        var eu = {
                props: {
                    image: {
                        type: String,
                        default: ""
                    },
                    title: {
                        type: String,
                        required: !0
                    },
                    price: {
                        type: Object,
                        required: !0
                    },
                    isCentered: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: {
                    imageUrl() {
                        return this.image || Mn["a"]
                    }
                },
                methods: {
                    formatPrice: tu
                }
            },
            iu = eu,
            ou = (i("c274"), Object(J["a"])(iu, Zd, Xd, !1, null, "16bbed2b", null)),
            au = ou.exports,
            nu = {
                components: {
                    ProductListItem: au,
                    ProductListEmptyState: Jd
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    products: {
                        type: Array,
                        default: () => []
                    },
                    blockStyle: {
                        type: Object,
                        default: () => ({})
                    },
                    textColorVars: {
                        type: Object,
                        default: () => ({})
                    },
                    isBlockPreviewMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["website", "currentLocale"])), {}, {
                    isProductListShown() {
                        return !!this.isBlockPreviewMode || (!this.website.meta.defaultLocale || this.currentLocale === this.website.meta.defaultLocale) && !!this.products.length
                    },
                    textAlign() {
                        var t;
                        return null === (t = this.blockStyle) || void 0 === t ? void 0 : t.textAlign
                    },
                    computedStyles() {
                        return Object(T["a"])({}, vo(this.textColorVars))
                    }
                })
            },
            ru = nu,
            su = (i("e429"), Object(J["a"])(ru, Gd, Fd, !1, null, "c1e8009a", null)),
            cu = su.exports;
        const lu = t => {
            var e, i;
            const {
                $store: o
            } = null !== (e = null === (i = Object(U["b"])()) || void 0 === i ? void 0 : i.proxy) && void 0 !== e ? e : {}, a = Object(U["a"])(() => o.getters.zyroEcommerceProductPages), n = Object(U["a"])(() => {
                var t;
                return null === (t = o.state.ecommerce) || void 0 === t ? void 0 : t.products.filter(t => Object.values(a.value).find(e => e.productId === t.id)).sort((t, e) => t.title.localeCompare(e.title))
            }), r = Object(U["a"])(() => {
                var e;
                return null === (e = t.data.settings) || void 0 === e ? void 0 : e.styles
            }), s = Object(U["a"])(() => t.data.textColorVars);
            return {
                productList: n,
                productPages: a,
                textColorVars: s,
                blockStyle: r
            }
        };
        var du = {
                components: {
                    BlockEcommerceProductList: cu
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        default: () => ({})
                    },
                    isBlockPreviewMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(t) {
                    const {
                        productList: e,
                        productPages: i,
                        blockStyle: o,
                        textColorVars: a
                    } = lu(t), n = t.isBlockPreviewMode ? Mn["c"] : e;
                    return {
                        products: n,
                        productPages: i,
                        blockStyle: o,
                        textColorVars: a
                    }
                },
                methods: {
                    openProductPage(t) {
                        const e = Object.values(this.productPages).find(e => e.productId === t);
                        this.$router.push({
                            path: "/".concat(e.slug)
                        })
                    }
                }
            },
            uu = du,
            pu = Object(J["a"])(uu, Rd, Vd, !1, null, null, null),
            mu = pu.exports,
            gu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return t.product ? i("BlockEcommerceProduct", {
                    attrs: {
                        "block-id": t.blockId,
                        "product-data": t.product,
                        "block-style": t.productSectionStyle,
                        "block-button-text": t.productSectionButtonText,
                        "block-button-style": t.productSectionButtonStyle,
                        "block-button-type": t.productSectionButtonType,
                        "text-color-vars": t.productSectionTextColorVars,
                        "image-border-radius": t.imageBorderRadius,
                        "navigation-arrows-color": t.navigationArrowsColor,
                        "image-ratio": t.imageRatio,
                        "can-add-to-cart": t.canAddToCart,
                        "is-loading": t.isCheckoutLoading
                    },
                    on: {
                        "buy-button-click": function(e) {
                            return t.handleClick(e)
                        }
                    }
                }) : t._e()
            },
            hu = [],
            bu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-product-wrapper",
                    attrs: {
                        id: t.blockId
                    }
                }, [i("div", {
                    staticClass: "block-product",
                    class: {
                        "block-product--centered": "center" === t.textAlign
                    },
                    style: t.computedStyles
                }, [i("Carousel", {
                    attrs: {
                        images: t.productData.images,
                        "product-title": t.productData.title,
                        "arrows-color": t.navigationArrowsColor,
                        "image-ratio": t.imageRatio,
                        "image-border-radius": t.imageBorderRadius
                    }
                }), i("div", {
                    staticClass: "block-product__content-wrapper",
                    class: {
                        "block-product__content-wrapper--centered": "center" === t.textAlign
                    }
                }, [i("h3", {
                    staticClass: "block-product__title"
                }, [t._v(" " + t._s(t.productData.title) + " ")]), t.showPrice ? i("p", {
                    staticClass: "block-product__price body-large"
                }, [t._v(" " + t._s(t.formatPrice(t.priceData.amount, t.priceData.currency_code)) + " ")]) : t._e(), t.productData.options.length ? i("OptionSelect", {
                    staticClass: "option-select",
                    attrs: {
                        options: t.productOptions,
                        value: t.selectedOption,
                        title: t.productData.options[0].title
                    },
                    on: {
                        "set-value": function(e) {
                            t.selectedOption = e
                        }
                    }
                }) : t._e(), i("span", {
                    staticClass: "block-product__button-wrapper",
                    style: "height: " + t.buttonHeight + "px"
                }, [i("GridButton", {
                    ref: "button",
                    staticClass: "block-product__button",
                    attrs: {
                        type: t.blockButtonType,
                        content: t.blockButtonText,
                        "is-loading": t.isLoading,
                        "tag-name": "button",
                        disabled: t.isDisabledButton
                    },
                    on: {
                        click: t.handleButtonClick
                    }
                })], 1), t.productData.description ? i("p", {
                    staticClass: "block-product__description"
                }, [t._v(" " + t._s(t.productData.description) + " ")]) : t._e()], 1)], 1)])
            },
            vu = [],
            fu = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "product-carousel",
                    style: t.carouselStyle
                }, [i("div", {
                    ref: "carouselRef",
                    staticClass: "product-carousel__image-wrapper",
                    class: {
                        "product-carousel__image-wrapper--contain": "contain" === t.imageRatio
                    }
                }, [t.isMoreThanOneImage ? [i("button", {
                    staticClass: "product-carousel__arrow product-carousel__arrow--left",
                    attrs: {
                        "data-qa": "product-carousel-button-prev"
                    },
                    on: {
                        click: t.goToPreviousSlide
                    }
                }), i("button", {
                    staticClass: "product-carousel__arrow product-carousel__arrow--right",
                    attrs: {
                        "data-qa": "product-carousel-button-next"
                    },
                    on: {
                        click: t.goToNextSlide
                    }
                })] : t._e(), i("div", {
                    staticClass: "product-carousel__image-content"
                }, [i("Transition", {
                    attrs: {
                        name: "fade",
                        mode: "out-in"
                    }
                }, [i("img", {
                    key: t.imageKey,
                    staticClass: "product-carousel__image product-carousel__main-image",
                    attrs: {
                        src: t.currentSlideshowImageUrl,
                        alt: t.productTitle,
                        loading: "eager"
                    }
                })])], 1)], 2), t.isMoreThanOneImage ? i("div", {
                    staticClass: "product-carousel__image-list"
                }, t._l(t.images, (function(e, o) {
                    return i("button", {
                        key: "image-" + o,
                        staticClass: "product-carousel__image-list-element",
                        class: {
                            "product-carousel__image-list-element--active": o === t.currentIndex
                        },
                        on: {
                            click: function(e) {
                                t.currentIndex = o
                            }
                        }
                    }, [i("img", {
                        staticClass: "product-carousel__image",
                        attrs: {
                            src: e.url,
                            alt: t.productTitle,
                            loading: 0 === o ? "eager" : "lazy"
                        }
                    })])
                })), 0) : t._e(), t.isMoreThanOneImage ? i("div", {
                    staticClass: "product-carousel__dots-wrapper"
                }, t._l(t.images, (function(e, o) {
                    return i("button", {
                        key: "image-dot-" + o,
                        staticClass: "product-carousel__dot-button",
                        on: {
                            click: function(e) {
                                t.currentIndex = o
                            }
                        }
                    }, [i("div", {
                        staticClass: "product-carousel__dot",
                        class: {
                            "product-carousel__dot--active": o === t.currentIndex
                        }
                    })])
                })), 0) : t._e()])
            },
            yu = [],
            wu = {
                props: {
                    images: {
                        type: Array,
                        required: !0
                    },
                    productTitle: {
                        type: String,
                        required: !0
                    },
                    arrowsColor: {
                        type: String,
                        default: "unset"
                    },
                    imageRatio: {
                        type: String,
                        default: "unset"
                    },
                    imageBorderRadius: {
                        type: String,
                        default: "unset"
                    },
                    isLcp: {
                        type: Boolean,
                        default: !1
                    }
                },
                data() {
                    return {
                        currentIndex: 0
                    }
                },
                computed: {
                    currentSlideshowImageUrl() {
                        var t;
                        return (null === (t = this.images[this.currentIndex]) || void 0 === t ? void 0 : t.url) || Mn["a"]
                    },
                    imageKey() {
                        return "".concat(this.currentSlideshowImageUrl).concat(this.currentIndex)
                    },
                    isMoreThanOneImage() {
                        return this.images.length > 1
                    },
                    carouselStyle() {
                        return {
                            "--image-object-fit": this.imageRatio,
                            "--image-border-radius": "cover" === this.imageRatio ? this.imageBorderRadius : 0,
                            "--image-position": "cover" === this.imageRatio ? "absolute" : "relative",
                            "--arrow-color": this.arrowsColor
                        }
                    }
                },
                mounted() {
                    this.enableCarouselMoveEvents(!0)
                },
                beforeDestroy() {
                    this.enableCarouselMoveEvents(!1)
                },
                methods: {
                    goToNextSlide() {
                        this.currentIndex = this.currentIndex === this.images.length - 1 ? 0 : this.currentIndex + 1
                    },
                    goToPreviousSlide() {
                        this.currentIndex = 0 === this.currentIndex ? this.images.length - 1 : this.currentIndex - 1
                    },
                    enableCarouselMoveEvents(t) {
                        if (!this.isMoreThanOneImage) return;
                        const {
                            enableMoveEvents: e
                        } = ut({
                            move: {
                                drag: !1,
                                swipe: !0
                            },
                            onMoveLeft: () => this.goToNextSlide(),
                            onMoveRight: () => this.goToPreviousSlide()
                        });
                        e(t, this.$refs.carouselRef)
                    }
                }
            },
            ku = wu,
            Ou = (i("5f0e"), Object(J["a"])(ku, fu, yu, !1, null, null, null)),
            _u = Ou.exports,
            ju = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "option-select"
                }, [i("p", {
                    staticClass: "option-select__label"
                }, [t._v(" " + t._s(t.title) + " ")]), i("div", {
                    staticClass: "option-select__select-wrapper"
                }, [i("select", {
                    directives: [{
                        name: "model",
                        rawName: "v-model",
                        value: t.selectedValue,
                        expression: "selectedValue"
                    }],
                    staticClass: "option-select__select",
                    attrs: {
                        "data-qa": "product-section-select-button"
                    },
                    on: {
                        change: function(e) {
                            var i = Array.prototype.filter.call(e.target.options, (function(t) {
                                return t.selected
                            })).map((function(t) {
                                var e = "_value" in t ? t._value : t.value;
                                return e
                            }));
                            t.selectedValue = e.target.multiple ? i : i[0]
                        }
                    }
                }, t._l(t.options, (function(e, o) {
                    return i("option", {
                        key: "option-" + o,
                        domProps: {
                            value: e
                        }
                    }, [t._v(" " + t._s(e[t.labelKey]) + " ")])
                })), 0)])])
            },
            Cu = [],
            Su = {
                props: {
                    title: {
                        type: String,
                        required: !0
                    },
                    labelKey: {
                        type: String,
                        default: "label"
                    },
                    options: {
                        type: Array,
                        default: () => []
                    },
                    value: {
                        type: Object,
                        default: null
                    }
                },
                computed: {
                    selectedValue: {
                        get() {
                            return this.value
                        },
                        set(t) {
                            this.$emit("set-value", t)
                        }
                    }
                }
            },
            Iu = Su,
            xu = (i("f035"), Object(J["a"])(Iu, ju, Cu, !1, null, "37448103", null)),
            Lu = xu.exports,
            Bu = {
                components: {
                    GridButton: vn["a"],
                    Carousel: _u,
                    OptionSelect: Lu
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    productData: {
                        type: Object,
                        default: () => ({})
                    },
                    blockStyle: {
                        type: Object,
                        default: () => ({})
                    },
                    textColorVars: {
                        type: Object,
                        default: () => ({})
                    },
                    blockButtonText: {
                        type: String,
                        default: null
                    },
                    blockButtonStyle: {
                        type: Object,
                        default: () => ({})
                    },
                    blockButtonType: {
                        type: String,
                        default: "primary"
                    },
                    navigationArrowsColor: {
                        type: String,
                        default: null
                    },
                    imageRatio: {
                        type: String,
                        default: "cover"
                    },
                    imageBorderRadius: {
                        type: String,
                        default: "0%"
                    },
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    canAddToCart: {
                        type: Function,
                        default: () => !0
                    }
                },
                data() {
                    return {
                        selectOption: null,
                        buttonRef: null,
                        buttonHeight: 0,
                        resizeObserver: null
                    }
                },
                computed: {
                    textAlign() {
                        var t;
                        return null === (t = this.blockStyle) || void 0 === t ? void 0 : t.textAlign
                    },
                    priceData() {
                        return this.selectedOption ? this.selectedOption.value.variants[0].prices[0] : this.productData.variants[0].prices[0]
                    },
                    productOptions() {
                        return this.productData.variants.map(t => {
                            var e;
                            return {
                                value: Object(T["a"])(Object(T["a"])({}, this.productData), {}, {
                                    variants: [t]
                                }),
                                label: null !== (e = t.options) && void 0 !== e && e.length ? t.options[0].value : t.title
                            }
                        })
                    },
                    selectedOption: {
                        get() {
                            return this.selectOption ? this.selectOption : this.productData ? this.productOptions[0] : null
                        },
                        set(t) {
                            this.selectOption = t
                        }
                    },
                    computedStyles() {
                        return Object(T["a"])({}, vo(Object(T["a"])(Object(T["a"])({}, this.textColorVars), this.blockButtonStyle)))
                    },
                    showPrice() {
                        return !this.productData.options.length || this.productData.options.length && this.selectedOption
                    },
                    isDisabledButton() {
                        var t;
                        return !this.canAddToCart(this.productData.id, null === (t = this.selectedOption) || void 0 === t ? void 0 : t.value.variants[0].id)
                    }
                },
                mounted() {
                    this.buttonRef = this.$refs.button, this.resizeObserver = new ResizeObserver(() => {
                        this.setButtonHeight()
                    }), this.resizeObserver.observe(this.buttonRef.$el)
                },
                beforeDestroy() {
                    this.resizeObserver.disconnect()
                },
                methods: {
                    formatPrice: tu,
                    handleButtonClick() {
                        this.$emit("buy-button-click", this.selectedOption ? this.selectedOption.value : this.productOptions[0].value)
                    },
                    setButtonHeight() {
                        var t;
                        this.buttonHeight = null === (t = this.buttonRef) || void 0 === t ? void 0 : t.$el.clientHeight
                    }
                }
            },
            Mu = Bu,
            Pu = (i("7413"), Object(J["a"])(Mu, bu, vu, !1, null, null, null)),
            Eu = Pu.exports;
        const Tu = t => {
            const e = Object(U["a"])(() => t.data.product.id),
                i = Object(U["a"])(() => {
                    var e;
                    return null === (e = t.data.settings) || void 0 === e ? void 0 : e.styles
                }),
                o = Object(U["a"])(() => t.data.textColorVars),
                a = Object(U["a"])(() => t.data.buttonText),
                n = Object(U["a"])(() => t.data.buttonStyle),
                r = Object(U["a"])(() => t.data.buttonType),
                s = Object(U["a"])(() => t.data.navigationArrowsColor),
                c = Object(U["a"])(() => t.data.imageRatio),
                l = Object(U["a"])(() => t.data.imageBorderRadius);
            return {
                productId: e,
                productSectionStyle: i,
                productSectionButtonText: a,
                productSectionButtonStyle: n,
                productSectionButtonType: r,
                productSectionTextColorVars: o,
                imageBorderRadius: l,
                navigationArrowsColor: s,
                imageRatio: c
            }
        };
        var Nu = {
                components: {
                    BlockEcommerceProduct: Eu
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        default: () => ({})
                    },
                    isBlockPreviewMode: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(t) {
                    const {
                        openModal: e
                    } = Object(Bn["a"])(t), {
                        initiateCheckout: i
                    } = qn(t), {
                        productId: o,
                        productSectionStyle: a,
                        productSectionButtonText: n,
                        productSectionButtonStyle: r,
                        productSectionButtonType: s,
                        productSectionTextColorVars: c,
                        imageBorderRadius: l,
                        navigationArrowsColor: d,
                        imageRatio: u
                    } = Tu(t);
                    return {
                        productId: o,
                        productSectionStyle: a,
                        productSectionButtonText: n,
                        productSectionButtonStyle: r,
                        productSectionButtonType: s,
                        productSectionTextColorVars: c,
                        openModal: e,
                        imageBorderRadius: l,
                        navigationArrowsColor: d,
                        imageRatio: u,
                        initiateCheckout: i
                    }
                },
                data() {
                    return {
                        isCheckoutLoading: !1
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])("ecommerce", ["isShoppingCartOpen", "products"])), Object(R["d"])("ecommerce", ["shoppingCartItems", "canAddToCart"])), Object(R["d"])("navigation", ["isCartVisible"])), {}, {
                    product() {
                        return this.isBlockPreviewMode ? Mn["c"][0] : this.products.find(t => t.id === this.productId)
                    }
                }),
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])("ecommerce", ["setShoppingCartOpen", "setShoppingCartItems"])), {}, {
                    async handleClick(t) {
                        Ln() ? this.openModal({
                            name: "EcommerceMessageButtonDisabled"
                        }) : this.isCartVisible ? (this.setShoppingCartItems([...this.shoppingCartItems, t]), this.manageCartOpenState()) : (this.isCheckoutLoading = !0, await this.initiateCheckout([t]).then(() => {
                            this.isCheckoutLoading = !1
                        }))
                    },
                    manageCartOpenState() {
                        this.isShoppingCartOpen || this.setShoppingCartOpen(!0)
                    }
                })
            },
            qu = Nu,
            Au = Object(J["a"])(qu, gu, hu, !1, null, null, null),
            Hu = Au.exports,
            $u = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockEcwidStore", {
                    attrs: {
                        "store-id": t.storeId,
                        "block-id": t.blockId,
                        "show-store": t.showStore,
                        "is-store-loading": t.isStoreLoading,
                        "loading-text": t.loadingText
                    }
                })
            },
            Du = [],
            Ru = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "block-ecwid-store",
                    attrs: {
                        id: t.blockId,
                        "data-qa": "builder-section-onlinestore"
                    }
                }, [t.isStoreLoading ? i("div", {
                    staticClass: "block-ecwid-store__loader-block"
                }, [i("ZyroLoader", {
                    staticClass: "block-ecwid-store__loader",
                    style: {
                        "--size": "44px",
                        "--weight": "4px",
                        "--border-color": "transparent",
                        "--color": "black"
                    }
                }), t._v(" " + t._s(t.loadingText) + " ")], 1) : t._e(), i("div", {
                    class: {
                        "height-0": t.isStoreLoading
                    }
                }, [t.showStore ? i("div", {
                    attrs: {
                        id: "my-store-" + t.storeId,
                        "data-qa": "onlinestore-section-ecwid"
                    }
                }) : t._e()])])
            },
            Vu = [],
            Gu = {
                components: {
                    ZyroLoader: Hr
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    storeId: {
                        type: String,
                        required: !0
                    },
                    isStoreLoading: {
                        type: Boolean,
                        required: !0
                    },
                    showStore: {
                        type: Boolean,
                        required: !0
                    },
                    loadingText: {
                        type: String,
                        default: "Store is loading"
                    }
                }
            },
            Fu = Gu,
            Uu = (i("3d25"), i("59a6"), Object(J["a"])(Fu, Ru, Vu, !1, null, "28a835ba", null)),
            zu = Uu.exports;
        const Wu = "".concat(v, "/ecwid-app-images"),
            Yu = [{
                name: "omniva",
                logoSource: "".concat(Wu, "/omniva.svg"),
                headerText: "Omniva"
            }, {
                name: "dpd",
                logoSource: "".concat(Wu, "/dpd.svg"),
                headerText: "DPD"
            }, {
                name: "lpexpress",
                logoSource: "".concat(Wu, "/lpexpress.svg"),
                headerText: "LPExpress"
            }, {
                name: "inpost",
                logoSource: "".concat(Wu, "/inpost.svg"),
                headerText: "InPost"
            }, {
                name: "other",
                logoSource: "".concat(Wu, "/other.svg"),
                headerText: "other"
            }];
        i("f8c9");
        const Ku = (t, e) => {
                let i;
                return function() {
                    const o = () => Reflect.apply(t, this, arguments);
                    clearTimeout(i), i = setTimeout(o, e)
                }
            },
            Ju = t => {
                let {
                    headerText: e,
                    name: i,
                    logoSource: o
                } = t;
                const a = "other" === i,
                    n = rosettaMessages["new-frontend"]["Checkout.LocalDelivery.title"],
                    r = '\n\t<div class="ec-form__cell ec-form__cell--4">\n\t\t<label>\n\t\t\t<div class="ec-form__title ec-header-h6">'.concat(a ? n : e, '</div>\n\t\t</label>\n\t\t<div class="form-control form-control--flexible form-control--empty">\n\t\t\t<label for="').concat(i, '">\n\t\t\t\t<div class="ec-radiogroup__radio">\n\t\t\t\t\t<div class="form-control--radio form-control ">\n\t\t\t\t\t\t<div class="form-control__radio-wrap">\n\t\t\t\t\t\t\t<input class="form-control__radio" type="radio" name="delivery-filter" value="').concat(i, '" data-filter="').concat(i, '">\n\t\t\t\t\t\t\t<div class="form-control__radio-view">\n\t\t\t\t\t\t\t\t<div class="form-control__radio-view-inner"></div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t\t<div class="form-control__inline-label">\n\t\t\t\t\t\t\t<img class="filter-logo" src="').concat(o, '" alt="').concat(i, '" title="').concat(i, '" />\n\t\t\t\t\t\t\t').concat(a ? n : "", "\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</label>\n\t\t</div>\n\t</div>\n\t");
                return r
            },
            Zu = () => {
                const t = rosettaMessages["new-frontend"]["ProductSearch.Breadcrumbs.General"];
                return '\n<div class="zyro-ecwid__search ec-form__row">\n\t<div class="ec-form__cell ec-form__cell--4">\n\t\t<label for="zyro-ecwid-search">\n\t\t\t<div class="ec-form__title ec-header-h6">\n\t\t\t\t<div class="marker-required marker-required--medium"></div>'.concat(t, '\n\t\t\t</div>\n\t\t</label>\n\t\t<div class="form-control form-control--flexible form-control--empty form-control--type-name">\n\t\t\t<input id="zyro-ecwid-search" class="form-control__text" type="text" name="name" maxlength="255">\n\t\t\t<div class="form-control__placeholder">\n\t\t\t\t<div class="form-control__placeholder-inner"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n')
            },
            Xu = {
                attributes: !0,
                childList: !0,
                subtree: !0
            },
            Qu = () => {
                let t, e, i, o, a, n = "";
                const r = t => t.some(t => !(null === t || void 0 === t || !t.includes(n))),
                    s = () => {
                        var e;
                        null === (e = i) || void 0 === e || e.forEach(e => {
                            const {
                                type: i,
                                element: o,
                                title: a,
                                description: n
                            } = e;
                            i === t && r([a, n]) || o.classList.add("zyro-ecwid__option--hidden")
                        })
                    },
                    c = () => {
                        var o;
                        const a = null === (o = i) || void 0 === o ? void 0 : o.filter(e => {
                            const {
                                title: i,
                                description: o,
                                element: a,
                                type: s
                            } = e, c = r([i, o]), l = s === t && (c || !n.length);
                            return a.classList.toggle("zyro-ecwid__option--hidden", !l), !l
                        });
                        e = a.length
                    },
                    l = e => {
                        let r = !1;
                        const s = e.querySelectorAll(".ec-radiogroup__item");
                        i = [...s].map(t => {
                            const e = t.querySelector(".ec-radiogroup__title").innerText,
                                i = e.split(":")[0].toLowerCase(),
                                o = Yu.some(t => t.name === i) ? i : "other",
                                a = t.querySelector('input[type="radio"]');
                            return a.addEventListener("change", t => {
                                t.target.checked && c()
                            }), {
                                title: e.toLowerCase(),
                                description: t.querySelector(".ec-radiogroup__text").innerText.toLowerCase(),
                                element: t,
                                cost: t.querySelector(".ec-radiogroup__data").innerText,
                                selected: t.querySelector("input").checked,
                                type: o,
                                radio: a
                            }
                        });
                        const l = e.closest(".ec-cart-step__section"),
                            d = l.querySelector(".ec-radiogroup__wrap");
                        o || l.insertAdjacentHTML("beforeend", Zu()), l.classList.add("zyro-ecwid__radio-section"), l.querySelector(".zyro-ecwid__search input").addEventListener("input", Ku(t => {
                            n = t.target.value.toLowerCase(), c()
                        }), 30);
                        const u = i.find(t => t.selected),
                            p = [...new Set(i.map(t => t.type))];
                        var m, g, h;
                        o ? (null === (m = a) || void 0 === m || m.classList.remove("ec-radiogroup--hidden"), null === (g = o) || void 0 === g || g.classList.remove("zyro-ecwid__search--hidden"), null === (h = l.querySelector(".ec-cart-step--delivery .ec-radiogroup:last-child")) || void 0 === h || h.classList.add("ec-radiogroup--hidden")) : p.forEach(e => {
                            if ("other" === e && r) return;
                            const i = Yu.find(t => t.name === e),
                                o = Ju(i);
                            "other" === e && (r = !0), l.querySelector(".zyro-ecwid__search").insertAdjacentHTML("afterbegin", o), l.querySelector("[data-filter]").addEventListener("change", e => {
                                e.target.checked && (t = e.target.dataset.filter, c())
                            })
                        });
                        a = l.querySelector(".ec-cart-step--delivery .ec-radiogroup"), o = l.querySelector(".zyro-ecwid__search"), l.querySelector("[data-filter]").checked = !0, t = p[p.length - 1], c(), d.scroll(u.element.offsetTop, 0)
                    },
                    d = new MutationObserver(() => {
                        if (!document.querySelector(".ec-cart__body")) return;
                        const t = document.querySelector(".ec-radiogroup__items"),
                            r = !!document.querySelector(".ec-cart-step--delivery .ec-cart-step__icon--done"),
                            c = document.querySelectorAll(".zyro-ecwid__option--hidden"),
                            d = !!document.querySelector(".ec-cart-step--address .ec-cart-step__icon--done");
                        var u, p, m, g;
                        (d || t || !o || (o = null), r || i || !t || l(t), e !== c.length && s(), r || !t) && (null !== (u = a) && void 0 !== u && u.classList.contains("ec-radiogroup--hidden") || null === (p = a) || void 0 === p || p.classList.add("ec-radiogroup--hidden"), null !== (m = o) && void 0 !== m && m.classList.contains("zyro-ecwid__search--hidden") || null === (g = o) || void 0 === g || g.classList.add("zyro-ecwid__search--hidden"), i = null, n && (n = "", document.getElementById("zyro-ecwid-search").value = ""))
                    }, Xu);
                return d
            },
            tp = "ecwid-loaded",
            ep = () => {
                var t, e, i, o;
                const a = document.querySelector(".ec-notices");
                if (!a) return;
                const n = null !== (t = null === (e = document.querySelector(".builder-header")) || void 0 === e ? void 0 : e.clientHeight) && void 0 !== t ? t : 0,
                    r = null !== (i = null === (o = document.querySelector(".".concat(f))) || void 0 === o ? void 0 : o.clientHeight) && void 0 !== i ? i : 0,
                    s = a.getBoundingClientRect().top + n + r;
                a.style.top = "".concat(s, "px")
            },
            ip = () => window.dispatchEvent(new Event(tp)),
            op = t => {
                const {
                    setEcwidCartItems: e
                } = ba();
                e(t.items)
            },
            ap = () => {
                window.ecwid_initial_data.data.storeClosed && ip()
            },
            np = () => {
                window.Ecwid.OnAPILoaded.add(ap), window.Ecwid.OnPageLoaded.add(ip), window.Ecwid.OnPageLoaded.add(ep), window.Ecwid.OnCartChanged.add(op)
            };
        var rp = {
            load(t) {
                if (window.ec = window.ec || {}, window.ec.config = window.ec.config || {}, window.ec.config.enable_canonical_urls = !0, window.ec.config.storefrontUrls = window.ec.config.storefrontUrls || {}, window.ec.config.storefrontUrls.cleanUrls = !0, window.ec.config.storefrontUrls.queryBasedCleanUrls = !0, window.ecwid_script_defer = !0, window.ecwid_dynamic_widgets = !0, "undefined" !== typeof Ecwid) try {
                    window.Ecwid.destroy()
                } catch (e) {}
                if (window._xnext_initialization_scripts = [{
                        widgetType: "ProductBrowser",
                        id: "my-store-".concat(t),
                        arg: ["id=productBrowser", "categoriesPerRow=4", "views=grid(4,3) list(10) table(20)", "categoryView=grid", "searchView=list"]
                    }], document.querySelector("#ecwid-script")) window.ecwid_onBodyDone(), setTimeout(() => {
                    var e;
                    null !== (e = document.getElementById("my-store-".concat(t))) && void 0 !== e && e.innerHTML || this.load(t)
                }, 1e3);
                else {
                    const e = document.createElement("script");
                    e.defer = !0, e.type = "text/javascript", e.async = !0, e.src = "https://app.ecwid.com/script.js?".concat(t), e.id = "ecwid-script", e.addEventListener("load", np), document.body.append(e)
                }
            }
        };
        const sp = "26103239",
            cp = 400,
            lp = 1500,
            dp = {
                attributes: !0,
                childList: !0,
                subtree: !0
            },
            up = t => {
                var e;
                const i = Object(U["f"])(!0),
                    o = Object(U["f"])(!1),
                    a = Object(U["f"])(!0),
                    {
                        state: n,
                        getters: r
                    } = null === (e = Object(U["b"])()) || void 0 === e ? void 0 : e.proxy.$store,
                    s = Object(U["a"])(() => n.website),
                    c = Object(U["a"])(() => r.siteMeta),
                    l = Object(U["a"])(() => n.gui.isMobileView),
                    d = Object(U["a"])(() => t.data.settings.loadingText || "Store is loading"),
                    u = Object(U["a"])(() => {
                        const {
                            ecwidStoreId: t,
                            demoEcwidStoreId: e
                        } = c.value;
                        return t || e || sp
                    }),
                    p = () => {
                        rp.load(u.value)
                    },
                    m = () => {
                        o.value = !0, window.addEventListener(tp, () => {
                            o.value = !1
                        }), jt || (c.value.delayEcwidInit ? setTimeout(p, lp) : p())
                    };
                return Object(U["d"])(() => {
                    m(), a.value = Qu(), a.value.observe(document.querySelector("#my-store-".concat(u.value)), dp)
                }), Object(U["c"])(() => {
                    a.value.disconnect()
                }), Object(U["h"])(l, () => {
                    i.value = !1, setTimeout(() => {
                        i.value = !0, p()
                    }, cp)
                }), Object(U["h"])(u, async t => {
                    var e;
                    s.value.meta.demoEcwidStoreId !== t && (document.querySelector("#my-store-".concat(u.value)).innerHTML = "", await (null === (e = Object(U["b"])()) || void 0 === e ? void 0 : e.proxy.$nextTick()), m())
                }), {
                    storeId: u,
                    showStore: i,
                    isStoreLoading: o,
                    loadingText: d,
                    ECWID_LOADED_EVENT: tp
                }
            };
        var pp = {
                components: {
                    BlockEcwidStore: zu
                },
                props: {
                    blockId: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        default: () => ({})
                    }
                },
                setup(t) {
                    const {
                        storeId: e,
                        showStore: i,
                        isStoreLoading: o,
                        loadingText: a
                    } = up(t);
                    return {
                        storeId: e,
                        showStore: i,
                        isStoreLoading: o,
                        loadingText: a
                    }
                }
            },
            mp = pp,
            gp = Object(J["a"])(mp, $u, Du, !1, null, null, null),
            hp = gp.exports,
            bp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("BlockSlideshow", {
                    ref: "slideshowRef",
                    staticClass: "block-slideshow",
                    attrs: {
                        slides: t.slides,
                        "current-slide-index": t.currentSlideIndex,
                        "current-sliding-direction": t.currentSlidingDirection,
                        "slideshow-settings": t.slideshowSettings,
                        "is-previous-slide-navigation-visible": t.isPreviousSlideNavigationVisible,
                        "is-next-slide-navigation-visible": t.isNextSlideNavigationVisible,
                        "slides-count": t.slidesCount
                    },
                    on: {
                        "previous-slide:click": t.handlePreviousSlideClick,
                        "next-slide:click": t.handleNextSlideClick,
                        "indicator:click": t.handleDotSlideClick,
                        "transition-start": function(e) {
                            return t.setIsSlideTransitioning(!0)
                        },
                        "transition-end": function(e) {
                            return t.setIsSlideTransitioning(!1)
                        }
                    },
                    scopedSlots: t._u([{
                        key: "default",
                        fn: function(e) {
                            var o = e.slide;
                            return [i("BlockGridUser", {
                                class: {
                                    "block-grid--mobile-full-height": t.slideshowSettings.isMobileFullScreenHeightEnabled
                                },
                                attrs: {
                                    "block-id": o.blockId,
                                    data: o.data,
                                    "is-mobile-view": t.isMobileView,
                                    components: t.components
                                }
                            })]
                        }
                    }])
                })
            },
            vp = [],
            fp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", {
                    staticClass: "slideshow"
                }, [i("div", {
                    staticClass: "slideshow__slides"
                }, t._l(t.slides, (function(e, o) {
                    return i("BlockSlideshowSlide", {
                        key: e.blockId,
                        attrs: {
                            "is-active": t.currentSlideIndex === o,
                            "sliding-direction": t.currentSlidingDirection
                        },
                        on: {
                            "transition-start": function(e) {
                                return t.$emit("transition-start")
                            },
                            "transition-end": function(e) {
                                return t.$emit("transition-end")
                            }
                        }
                    }, [e.data.background ? i("BlockBackground", {
                        attrs: {
                            "block-id": e.blockId,
                            "background-image-path": e.data.background.path,
                            "background-image-origin": e.data.background.origin,
                            "overlay-opacity": e.data.background["overlay-opacity"],
                            type: e.data.background.current,
                            color: e.data.background.color,
                            "is-fixed": "fixed" === e.data.settings.styles.attachment,
                            alt: e.data.background.alt,
                            "is-mobile-full-screen": t.slideshowSettings.isMobileFullScreenHeightEnabled,
                            preload: "",
                            "is-lazy": ""
                        }
                    }) : t._e(), t._t("default", null, {
                        slide: e
                    })], 2)
                })), 1), t.slideshowSettings.isNavigationArrowsVisible ? [t.isPreviousSlideNavigationVisible ? i("BlockSlideshowNavButton", {
                    staticClass: "slideshow__nav-button slideshow__nav-button--left",
                    class: {
                        "slideshow__nav-button--is-click-disabled": t.currentElementId
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("previous-slide:click")
                        }
                    }
                }) : t._e(), t.isNextSlideNavigationVisible ? i("BlockSlideshowNavButton", {
                    staticClass: "slideshow__nav-button slideshow__nav-button--right",
                    class: {
                        "slideshow__nav-button--is-click-disabled": t.currentElementId
                    },
                    nativeOn: {
                        click: function(e) {
                            return t.$emit("next-slide:click")
                        }
                    }
                }) : t._e()] : t._e(), t.slideshowSettings.isNavigationBulletsVisible ? i("BlockSlideshowNavBottom", t._g({
                    attrs: {
                        "slide-count": t.slidesCount,
                        "active-slide-index": t.currentSlideIndex
                    }
                }, t.$listeners)) : t._e()], 2)
            },
            yp = [],
            wp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return null !== t.slideCount ? i("div", {
                    staticClass: "nav-bottom"
                }, t._l(t.slideCount, (function(e, o) {
                    return i("button", {
                        key: "" + e + o,
                        staticClass: "nav-bottom__indicator",
                        class: {
                            "nav-bottom__indicator--active": o === t.activeSlideIndex
                        },
                        attrs: {
                            title: "Slideshow bottom navigation bullet " + e
                        },
                        on: {
                            click: function(e) {
                                return t.$emit("indicator:click", o)
                            }
                        }
                    })
                })), 0) : t._e()
            },
            kp = [],
            Op = {
                name: "SlideshowNavBottom",
                props: {
                    slideCount: {
                        type: Number,
                        default: null
                    },
                    activeSlideIndex: {
                        type: Number,
                        default: null
                    }
                }
            },
            _p = Op,
            jp = (i("19c2"), Object(J["a"])(_p, wp, kp, !1, null, "66514e44", null)),
            Cp = jp.exports,
            Sp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "nav-arrow-button",
                    attrs: {
                        title: "Slideshow side navigation button"
                    }
                }, [i("svg", {
                    attrs: {
                        width: "14",
                        height: "26",
                        viewBox: "0 0 14 26",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M1 25L13 13L1 1",
                        stroke: "currentColor",
                        "stroke-width": "1.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])
            },
            Ip = [],
            xp = {
                name: "SlideshowNavButton"
            },
            Lp = xp,
            Bp = (i("08ef"), Object(J["a"])(Lp, Sp, Ip, !1, null, "61184e3d", null)),
            Mp = Bp.exports,
            Pp = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Transition", {
                    attrs: {
                        name: t.transitionName
                    },
                    on: {
                        "before-enter": function(e) {
                            return t.$emit("transition-start")
                        },
                        "after-leave": function(e) {
                            return t.$emit("transition-end")
                        }
                    }
                }, [i("div", {
                    directives: [{
                        name: "show",
                        rawName: "v-show",
                        value: t.isActive,
                        expression: "isActive"
                    }],
                    staticClass: "slide"
                }, [t._t("default")], 2)])
            },
            Ep = [];
        const Tp = "left",
            Np = "right",
            qp = Object(U["f"])({}),
            Ap = Object(U["f"])({}),
            Hp = Object(U["f"])({}),
            $p = Object(U["f"])({}),
            Dp = Object(U["f"])(null),
            Rp = t => {
                const e = Object(U["a"])(() => t.data.settings),
                    i = Object(U["a"])(() => t.data.slides.map(e => {
                        const i = t.blocks[e.blockId];
                        return Object(T["a"])(Object(T["a"])({}, e), {}, {
                            data: Object(T["a"])(Object(T["a"])({}, i), {}, {
                                settings: Object(T["a"])(Object(T["a"])({}, i.settings), {}, {
                                    styles: Object(T["a"])(Object(T["a"])({}, t.data.settings.styles), {}, {
                                        attachment: i.settings.styles.attachment
                                    })
                                })
                            })
                        })
                    })),
                    o = Object(U["a"])(() => {
                        const e = t.data.slides.findIndex(e => {
                            var i;
                            return (null === qp || void 0 === qp || null === (i = qp.value) || void 0 === i ? void 0 : i[t.blockId]) === e.blockId
                        });
                        return -1 === e ? 0 : e
                    }),
                    a = Object(U["a"])(() => i.value.length),
                    n = Object(U["a"])(() => {
                        const t = o.value + 1;
                        return t <= a.value - 1 ? t : 0
                    }),
                    r = Object(U["a"])(() => {
                        const t = o.value - 1;
                        return t >= 0 ? t : a.value - 1
                    }),
                    s = Object(U["a"])(() => !!e.value.isLoopEnabled || !(!e.value.isLoopEnabled && o.value === a.value - 1)),
                    c = Object(U["a"])(() => !!e.value.isLoopEnabled || !(!e.value.isLoopEnabled && 0 === o.value)),
                    l = Object(U["a"])(() => Ap.value[t.blockId]),
                    d = Object(U["a"])(() => Hp.value[t.blockId]),
                    u = e => {
                        Hp.value = Object(T["a"])(Object(T["a"])({}, Hp.value), {}, {
                            [t.blockId]: e
                        })
                    },
                    p = t => {
                        setTimeout(() => {
                            u(!1)
                        }, t)
                    },
                    m = t => {
                        delete qp.value[t]
                    },
                    g = t => {
                        let {
                            slideshowId: e,
                            slideId: i
                        } = t;
                        u(!0), qp.value = Object(T["a"])(Object(T["a"])({}, qp.value), {}, {
                            [e]: i
                        }), u(!1)
                    },
                    h = e => {
                        g({
                            slideshowId: t.blockId,
                            slideId: t.data.slides[e].blockId
                        })
                    },
                    b = e => {
                        Ap.value = Object(T["a"])(Object(T["a"])({}, Ap.value), {}, {
                            [t.blockId]: e
                        })
                    },
                    v = function(t) {
                        let e = !(arguments.length > 1 && void 0 !== arguments[1]) || arguments[1];
                        d.value || (o.value < t && e ? b(Np) : o.value > t && e && b(Tp), h(t))
                    },
                    f = () => {
                        b(Np), v(n.value, !1)
                    },
                    y = () => {
                        b(Tp), v(r.value, !1)
                    };
                return Object(U["h"])(d, t => {
                    if (!t || !Dp.value) return;
                    const {
                        top: e,
                        left: i
                    } = Dp.value.$el.getBoundingClientRect();
                    $p.value = {
                        "--fixedImage-top": "".concat(-e, "px"),
                        "--fixedImage-left": "".concat(-i, "px")
                    }
                }), {
                    slideshowSettings: e,
                    isSlideshowTransitioning: d,
                    activeSlidesTransitioning: Hp,
                    activeSlides: Object(U["a"])(() => qp.value),
                    currentSlideIndex: o,
                    currentSlidingDirection: l,
                    slides: i,
                    slidesCount: a,
                    nextSlideIndex: n,
                    previousSlideIndex: r,
                    isNextSlideNavigationVisible: s,
                    isPreviousSlideNavigationVisible: c,
                    removeActiveSlide: m,
                    setIsSlideTransitioning: u,
                    setActiveSlide: g,
                    setActiveSlideByIndex: h,
                    setIsSlideTransitioningFalseAfterMs: p,
                    setSlidingDirection: b,
                    goToSlide: v,
                    goToNextSlide: f,
                    goToPreviousSlide: y,
                    slideshowRef: Dp,
                    fixedBackgroundImageStyle: $p
                }
            };
        var Vp = {
                name: "SliderSlide",
                props: {
                    isActive: {
                        type: Boolean,
                        default: !1
                    },
                    slidingDirection: {
                        type: String,
                        default: Tp,
                        validator: t => t === Tp || t === Np
                    },
                    transitionType: {
                        type: String,
                        default: "slide"
                    }
                },
                computed: {
                    transitionName() {
                        return "".concat(this.transitionType).concat(this.slidingDirection)
                    }
                },
                destroyed() {
                    this.$emit("disable-transition-after-ms", 100)
                }
            },
            Gp = Vp,
            Fp = (i("b984"), Object(J["a"])(Gp, Pp, Ep, !1, null, null, null)),
            Up = Fp.exports,
            zp = {
                components: {
                    BlockBackground: Ga,
                    BlockSlideshowNavBottom: Cp,
                    BlockSlideshowNavButton: Mp,
                    BlockSlideshowSlide: Up
                },
                props: {
                    slides: {
                        type: Array,
                        required: !0
                    },
                    currentSlideIndex: {
                        type: Number,
                        required: !0
                    },
                    currentSlidingDirection: {
                        type: String,
                        default: Tp
                    },
                    slideshowSettings: {
                        type: Object,
                        required: !0
                    },
                    isPreviousSlideNavigationVisible: {
                        type: Boolean,
                        required: !0
                    },
                    isNextSlideNavigationVisible: {
                        type: Boolean,
                        required: !0
                    },
                    slidesCount: {
                        type: Number,
                        required: !0
                    },
                    currentElementId: {
                        type: String,
                        default: null
                    }
                }
            },
            Wp = zp,
            Yp = (i("5be4"), Object(J["a"])(Wp, fp, yp, !1, null, null, null)),
            Kp = Yp.exports,
            Jp = {
                components: {
                    BlockSlideshow: Kp,
                    BlockGridUser: ql
                },
                props: {
                    blocks: {
                        type: Object,
                        required: !0
                    },
                    components: {
                        type: Object,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    blockId: {
                        type: String,
                        required: !0
                    },
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup(t) {
                    const {
                        slides: e,
                        currentSlidingDirection: i,
                        slideshowSettings: o,
                        slidesCount: a,
                        currentSlideIndex: n,
                        isPreviousSlideNavigationVisible: r,
                        isNextSlideNavigationVisible: s,
                        goToNextSlide: c,
                        goToPreviousSlide: l,
                        goToSlide: d,
                        setSlidingDirection: u,
                        setIsSlideTransitioning: p,
                        slideshowRef: m
                    } = Rp(t), g = Object(U["f"])(null), h = () => setInterval(() => {
                        const t = !o.value.isLoopEnabled && n.value === a.value - 1;
                        t ? clearInterval(g.value) : c()
                    }, 1e3 * o.value.autoplaySlidesIntervalSeconds), b = () => {
                        clearInterval(g.value), o.value.isAutoplayEnabled && (g.value = h())
                    }, v = () => {
                        l(), b()
                    }, f = () => {
                        c(), b()
                    }, y = t => {
                        d(t), b()
                    }, {
                        enableMoveEvents: w
                    } = ut({
                        move: {
                            drag: !1,
                            swipe: !0
                        },
                        onMoveLeft: c,
                        onMoveRight: l
                    });
                    return Object(U["d"])(() => {
                        o.value.isAutoplayEnabled && (g.value = h()), u(Tp), p(!1), w(!0, m.value.$el)
                    }), Object(U["c"])(() => {
                        clearInterval(g.value), w(!1, m.value.$el)
                    }), {
                        slides: e,
                        currentSlidingDirection: i,
                        slideshowSettings: o,
                        slidesCount: a,
                        currentSlideIndex: n,
                        isPreviousSlideNavigationVisible: r,
                        isNextSlideNavigationVisible: s,
                        goToNextSlide: c,
                        goToPreviousSlide: l,
                        goToSlide: d,
                        setSlidingDirection: u,
                        setIsSlideTransitioning: p,
                        slideshowRef: m,
                        handlePreviousSlideClick: v,
                        handleNextSlideClick: f,
                        handleDotSlideClick: y
                    }
                }
            },
            Zp = Jp,
            Xp = Object(J["a"])(Zp, bp, vp, !1, null, null, null),
            Qp = Xp.exports;
        const tm = 360;
        var em = {
                name: "BlockUser",
                components: {
                    BlockGrid: ql,
                    BlockLayout: pd,
                    BlockBackground: Ga,
                    BlockBlogList: Dd,
                    BlockBlogHeader: dn,
                    BlockEcwidStore: hp,
                    BlockSlideshow: Qp,
                    BlockEcommerceProduct: Hu,
                    BlockEcommerceProductList: mu
                },
                inheritAttrs: !1,
                props: {
                    id: {
                        type: String,
                        required: !0
                    },
                    data: {
                        type: Object,
                        required: !0
                    },
                    lcp: {
                        type: Object,
                        default: () => ({})
                    },
                    components: {
                        type: Object,
                        default: () => ({})
                    },
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    },
                    blocks: {
                        type: Object,
                        default: () => ({})
                    },
                    isBlockPreviewMode: {
                        type: Boolean,
                        default: !1
                    },
                    transparentHeaderHeight: {
                        type: Number,
                        default: 0
                    },
                    isFirst: {
                        type: Boolean,
                        default: !1
                    },
                    headerHeight: {
                        type: Number,
                        default: 0
                    }
                },
                setup(t) {
                    const e = Object(U["a"])(() => {
                            var e;
                            const i = "BlockGrid" === t.data.type || "BlockSlideshow" === t.data.type;
                            return Object(T["a"])(Object(T["a"])({}, i ? ao : {}), vo(null === (e = t.data) || void 0 === e ? void 0 : e.settings.styles))
                        }),
                        i = Object(U["a"])(() => {
                            if (!t.data.settings.styles["m-block-padding"]) return !1;
                            const {
                                top: e,
                                bottom: i
                            } = ho(t.data.settings.styles["m-block-padding"]), o = Number.parseInt(e, 10) + Number.parseInt(i, 10);
                            return o > tm
                        }),
                        o = Object(U["a"])(() => po(t.data.type, P)),
                        a = Object(U["f"])(null);
                    return {
                        blockModifier: o,
                        isMobileFullScreen: i,
                        computedStyles: e,
                        blockRef: a
                    }
                }
            },
            im = em,
            om = (i("8d17"), Object(J["a"])(im, Pa, Ea, !1, null, "a3fd9bac", null)),
            am = om.exports,
            nm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("EcommerceShoppingCart", {
                    directives: [{
                        name: "qa",
                        rawName: "v-qa",
                        value: "user-section-zyroecommerceshoppingcart",
                        expression: "'user-section-zyroecommerceshoppingcart'"
                    }],
                    attrs: {
                        "is-shopping-cart-open": t.isShoppingCartOpen,
                        "is-loading": t.isLoading,
                        "header-height": t.headerHeight
                    },
                    on: {
                        "checkout-button-click": t.initCheckout
                    }
                })
            },
            rm = [],
            sm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("Drawer", {
                    attrs: {
                        "is-open": t.isShoppingCartOpen,
                        "always-show-close-button": t.isNavHidden || !t.isHeaderVisible,
                        "top-position-mobile": t.topPositionMobile
                    },
                    on: {
                        "close-drawer": t.closeShoppingCart
                    }
                }, [i("div", {
                    staticClass: "cart"
                }, [i("div", {
                    staticClass: "cart__content"
                }, [t.quantifiedCartItemsList.length ? i("p", {
                    staticClass: "cart__content-title"
                }, [t._v(" " + t._s(t.translations.shoppingBag) + " ")]) : i("p", {
                    staticClass: "cart__content-title cart__content-title--with-margin",
                    attrs: {
                        "data-qa": "shoppingcart-text-emptystate"
                    }
                }, [t._v(" " + t._s(t.translations.shoppingBagEmpty) + " ")]), i("ul", {
                    staticClass: "cart__list"
                }, t._l(t.quantifiedCartItemsList, (function(e, o) {
                    return i("li", {
                        key: "cart-item-" + o,
                        staticClass: "cart__list-item"
                    }, [e.product.thumbnail ? i("img", {
                        staticClass: "cart__list-item-image lazyload",
                        attrs: {
                            src: e.product.thumbnail,
                            alt: e.product.title,
                            loading: "lazy"
                        }
                    }) : t._e(), i("div", [i("p", {
                        staticClass: "cart__title",
                        attrs: {
                            "data-qa": "shoppingcart-text-product"
                        }
                    }, [t._v(" " + t._s(e.product.title) + " ")]), e.product.options.length ? i("p", {
                        staticClass: "cart__text",
                        attrs: {
                            "data-qa": "shoppingcart-text-variant"
                        }
                    }, [t._v(" " + t._s(e.product.variants[0].title) + " ")]) : t._e(), i("p", {
                        staticClass: "cart__text",
                        attrs: {
                            "data-qa": "shoppingcart-text-price"
                        }
                    }, [t._v(" " + t._s(t.getProductPrice(e.product)) + " ")]), i("p", {
                        staticClass: "cart__quantity"
                    }, [i("span", {
                        staticClass: "cart__quantity-title"
                    }, [t._v(" " + t._s(t.translations.quantityShort) + ": ")]), i("span", {
                        staticClass: "quantity-picker"
                    }, [i("button", {
                        staticClass: "quantity-picker__control",
                        attrs: {
                            "data-qa": "shoppingcart-btn-decreaseq"
                        },
                        on: {
                            click: function(i) {
                                return t.decreaseQuantity(e)
                            }
                        }
                    }, [t._v(" - ")]), i("span", {
                        staticClass: "quantity-picker__amount",
                        attrs: {
                            "data-qa": "shoppingcart-text-qty"
                        }
                    }, [t._v(" " + t._s(e.quantity) + " ")]), i("button", {
                        staticClass: "quantity-picker__control",
                        attrs: {
                            "data-qa": "shoppingcart-btn-increaseq",
                            disabled: !t.isStockAvailable(e)
                        },
                        on: {
                            click: function(i) {
                                return t.increaseQuantity(e)
                            }
                        }
                    }, [t._v(" + ")])])])]), i("DeleteButton", {
                        staticClass: "cart__remove-button",
                        attrs: {
                            "data-qa": "shoppingcart-btn-delete"
                        },
                        on: {
                            "handle-button-click": function(i) {
                                return t.removeProduct(e.product)
                            }
                        }
                    })], 1)
                })), 0)]), t.quantifiedCartItemsList.length ? i("div", {
                    staticClass: "cart__footer"
                }, [i("p", {
                    staticClass: "cart__title cart__title--with-slot",
                    attrs: {
                        "data-qa": "shoppingcart-text-subtotal"
                    }
                }, [t._v(" " + t._s(t.translations.subtotal) + ": "), i("span", [t._v(t._s(t.formatPrice(t.totalPrice, t.currencyCode)))])]), i("button", {
                    staticClass: "cart__text cart__checkout-button",
                    class: {
                        loading: t.isLoading
                    },
                    attrs: {
                        "data-qa": "shoppingcart-btn-checkout"
                    },
                    on: {
                        click: function(e) {
                            return t.$emit("checkout-button-click")
                        }
                    }
                }, [t._v(" " + t._s(t.translations.checkout) + " ")])]) : t._e()])])
            },
            cm = [],
            lm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("button", {
                    staticClass: "delete-button",
                    on: {
                        click: function(e) {
                            return t.$emit("handle-button-click")
                        }
                    }
                }, [i("svg", {
                    attrs: {
                        width: "16",
                        height: "16",
                        viewBox: "0 0 16 16",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg"
                    }
                }, [i("path", {
                    attrs: {
                        d: "M2 4H3.33333H14",
                        stroke: "#767676",
                        "stroke-width": "0.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M5.3335 4.00004V2.66671C5.3335 2.31309 5.47397 1.97395 5.72402 1.7239C5.97407 1.47385 6.31321 1.33337 6.66683 1.33337H9.3335C9.68712 1.33337 10.0263 1.47385 10.2763 1.7239C10.5264 1.97395 10.6668 2.31309 10.6668 2.66671V4.00004M12.6668 4.00004V13.3334C12.6668 13.687 12.5264 14.0261 12.2763 14.2762C12.0263 14.5262 11.6871 14.6667 11.3335 14.6667H4.66683C4.31321 14.6667 3.97407 14.5262 3.72402 14.2762C3.47397 14.0261 3.3335 13.687 3.3335 13.3334V4.00004H12.6668Z",
                        stroke: "#767676",
                        "stroke-width": "0.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M6.6665 7.33337V11.3334",
                        stroke: "#767676",
                        "stroke-width": "0.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                }), i("path", {
                    attrs: {
                        d: "M9.3335 7.33337V11.3334",
                        stroke: "#767676",
                        "stroke-width": "0.5",
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round"
                    }
                })])])
            },
            dm = [],
            um = (i("4c6a"), {}),
            pm = Object(J["a"])(um, lm, dm, !1, null, "50a7209c", null),
            mm = pm.exports,
            gm = function() {
                var t = this,
                    e = t.$createElement,
                    i = t._self._c || e;
                return i("div", [i("div", {
                    staticClass: "site-drawer-overlay",
                    class: {
                        "site-drawer-overlay--open": t.isOpen
                    }
                }), i("Transition", {
                    attrs: {
                        name: "right" === t.placement ? "drawer-slide-right" : "drawer-slide-left"
                    }
                }, [t.isOpen ? i("aside", {
                    directives: [{
                        name: "click-outside",
                        rawName: "v-click-outside",
                        value: {
                            handler: t.closeDrawer,
                            events: ["click"]
                        },
                        expression: "{\n\t\t\t\thandler: closeDrawer,\n\t\t\t\tevents: ['click'],\n\t\t\t}"
                    }],
                    staticClass: "site-drawer",
                    class: {
                        "site-drawer--left": "left" === t.placement, "site-drawer--right": "right" === t.placement
                    },
                    style: t.computedStyles
                }, [i("div", {
                    staticClass: "site-drawer__content"
                }, [i("span", {
                    staticClass: "site-drawer__close-button",
                    class: {
                        "site-drawer__close-button--hide-mobile": !t.alwaysShowCloseButton
                    },
                    attrs: {
                        "data-qa": "builder-sitedrawer-btn-close"
                    },
                    on: {
                        click: t.closeDrawer
                    }
                }, [i("CloseButton")], 1), t._t("default")], 2)]) : t._e()])], 1)
            },
            hm = [],
            bm = i("9ba6"),
            vm = {
                name: "ZyroSiteDrawer",
                components: {
                    CloseButton: bm["a"]
                },
                props: {
                    placement: {
                        type: String,
                        default: "right",
                        validator: t => ["right", "left"].includes(t)
                    },
                    width: {
                        type: String,
                        default: "350px"
                    },
                    alwaysShowCloseButton: {
                        type: Boolean,
                        default: !0
                    },
                    isOpen: {
                        type: Boolean,
                        default: !1
                    },
                    topPositionMobile: {
                        type: String,
                        default: "0px"
                    }
                },
                computed: {
                    computedStyles() {
                        return {
                            "--sidebar-width": this.width,
                            "--sidebar-top-mobile": this.topPositionMobile
                        }
                    }
                },
                methods: {
                    closeDrawer() {
                        this.$emit("close-drawer")
                    }
                }
            },
            fm = vm,
            ym = (i("2c7f"), Object(J["a"])(fm, gm, hm, !1, null, "13b3891a", null)),
            wm = ym.exports,
            km = {
                components: {
                    Drawer: wm,
                    DeleteButton: mm
                },
                props: {
                    isLoading: {
                        type: Boolean,
                        default: !1
                    },
                    isShoppingCartOpen: {
                        type: Boolean,
                        default: !1
                    },
                    headerHeight: {
                        type: Number,
                        default: 0
                    }
                },
                data() {
                    return {
                        isHeaderVisible: !1,
                        topPositionMobile: "0px"
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["d"])("ecommerce", ["shoppingCartItems", "quantifiedCartItemsList"])), Object(R["d"])("navigation", ["navigation"])), Object(R["e"])(["website"])), Object(R["e"])("ecommerce", ["products"])), {}, {
                    translations() {
                        return this.website.blocks.ecommerceShoppingCart.translations
                    },
                    isHeaderSticky() {
                        return this.website.blocks.navigation.settings.isSticky
                    },
                    isNavHidden() {
                        return this.navigation.hidden
                    },
                    totalPrice() {
                        return this.quantifiedCartItemsList.reduce((t, e) => {
                            var i, o, a;
                            return t + ((null === (i = e.product) || void 0 === i || null === (o = i.variants[0]) || void 0 === o || null === (a = o.prices[0]) || void 0 === a ? void 0 : a.amount) || 0) * e.quantity
                        }, 0)
                    },
                    currencyCode() {
                        var t, e, i;
                        return null === (t = this.products[0]) || void 0 === t || null === (e = t.variants[0]) || void 0 === e || null === (i = e.prices[0]) || void 0 === i ? void 0 : i.currency_code
                    }
                }),
                watch: {
                    isShoppingCartOpen(t) {
                        document.documentElement.style.overflow = t ? "hidden" : "auto"
                    },
                    headerHeight() {
                        this.setHeaderVisibilityValues()
                    }
                },
                mounted() {
                    window.addEventListener("scroll", this.setHeaderVisibilityValues)
                },
                beforeDestroy() {
                    window.removeEventListener("scroll", this.setHeaderVisibilityValues)
                },
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])("ecommerce", ["setShoppingCartOpen", "setShoppingCartItems"])), {}, {
                    formatPrice: tu,
                    isStockAvailable(t) {
                        return !t.product.variants[0].manage_inventory || t.quantity < t.product.variants[0].inventory_quantity
                    },
                    decreaseQuantity(t) {
                        const e = [...this.shoppingCartItems],
                            i = this.shoppingCartItems.filter(e => e.variants[0].id === t.product.variants[0].id),
                            o = this.shoppingCartItems.findIndex(t => t === i[i.length - 1]);
                        e.splice(o, 1), this.setShoppingCartItems(e)
                    },
                    increaseQuantity(t) {
                        this.setShoppingCartItems([...this.shoppingCartItems, t.product])
                    },
                    removeProduct(t) {
                        const e = this.shoppingCartItems.filter(e => e.variants[0].id !== t.variants[0].id);
                        this.setShoppingCartItems(e)
                    },
                    closeShoppingCart() {
                        this.setShoppingCartOpen(!1)
                    },
                    setHeaderVisibility() {
                        this.isHeaderVisible = this.isHeaderSticky || !this.isNavHidden && window.scrollY <= .4 * Number(this.headerHeight)
                    },
                    setTopPositionMobile() {
                        const t = this.isHeaderSticky ? this.headerHeight : this.headerHeight - window.scrollY;
                        this.topPositionMobile = "".concat(this.isHeaderVisible ? Math.floor(t) - 1 : 0, "px")
                    },
                    setHeaderVisibilityValues() {
                        this.setHeaderVisibility(), this.setTopPositionMobile()
                    },
                    getProductPrice(t) {
                        const [e] = t.variants[0].prices;
                        return tu(e.amount, e.currency_code)
                    }
                })
            },
            Om = km,
            _m = (i("bbf2"), Object(J["a"])(Om, sm, cm, !1, null, "10857038", null)),
            jm = _m.exports,
            Cm = {
                components: {
                    EcommerceShoppingCart: jm
                },
                props: {
                    headerHeight: {
                        type: Number,
                        default: 0
                    }
                },
                setup(t) {
                    const {
                        openModal: e
                    } = Object(Bn["a"])(t), {
                        initiateCheckout: i
                    } = qn(t);
                    return {
                        openModal: e,
                        initiateCheckout: i
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])("ecommerce", ["isShoppingCartOpen", "isLoading"])), Object(R["d"])(["siteMeta", "defaultPages"])), Object(R["d"])("ecommerce", ["shoppingCartItems"])),
                created() {
                    this.getProducts()
                },
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])("ecommerce", ["getProducts", "setShoppingCartOpen", "setShoppingCartItems", "setIsLoading"])), {}, {
                    async initCheckout() {
                        Ln() ? this.openModal({
                            name: "EcommerceMessageButtonDisabled"
                        }) : this.isLoading || (this.setIsLoading(!0), await this.initiateCheckout(this.shoppingCartItems).then(() => {
                            this.setShoppingCartOpen(!1), this.setIsLoading(!1)
                        }))
                    }
                })
            },
            Sm = Cm,
            Im = Object(J["a"])(Sm, nm, rm, !1, null, null, null),
            xm = Im.exports,
            Lm = i("f88d");
        const Bm = 2;
        var Mm = {
                name: "Page",
                components: {
                    CookieBanner: Ma,
                    BlockUser: am,
                    BlockHeaderProviderUser: _a,
                    EcommerceShoppingCartProviderUser: xm,
                    EcommerceModalRoot: Lm["default"]
                },
                props: {
                    isMobileView: {
                        type: Boolean,
                        default: !1
                    }
                },
                setup() {
                    var t, e;
                    const {
                        state: i
                    } = null === (t = Object(U["b"])()) || void 0 === t || null === (e = t.proxy) || void 0 === e ? void 0 : e.$store, o = Object(U["a"])(() => {
                        var t;
                        return vo(null === i || void 0 === i || null === (t = i.website) || void 0 === t ? void 0 : t.styles)
                    });
                    return {
                        computedStyles: o
                    }
                },
                data() {
                    return {
                        stickyIntersectionObserver: null,
                        hasUserScrolled: !1,
                        headerHeight: null
                    }
                },
                computed: Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])(Object(T["a"])({}, Object(R["e"])(["website"])), Object(R["e"])(["user"])), Object(R["e"])(["currentLocale"])), Object(R["d"])(["siteMeta", "siteLanguages", "sitePages", "homePageId", "defaultLocale"])), Object(R["d"])("ecommerce", ["isLocaleWithZyroEcommerceItems"])), {}, {
                    currentPage() {
                        if ("/" === this.$route.path || this.$route.path === "/".concat(this.currentLocale)) return this.website.pages[this.homePageId];
                        const t = Object.values(this.website.pages).find(t => {
                            let {
                                slug: e
                            } = t;
                            return e === this.$route.params.slug.replace("/".concat(this.currentLocale), "")
                        });
                        return t || this.website.pages[this.siteMeta.localeHomePage[this.currentLocale]]
                    },
                    pageBlocksSlotFooter() {
                        if (this.currentPage.footerSlotIsHidden) return [];
                        const t = Object.keys(mo(this.website.blocks, this.currentLocale)).find(t => "footer" === this.website.blocks[t].slot);
                        return t ? [t] : []
                    },
                    allBlocks() {
                        return [...this.currentPage.blocks, ...this.pageBlocksSlotFooter]
                    },
                    isPageWithEcwid() {
                        return Object.values(this.currentPage.blocks).some(t => "BlockEcwidStore" === this.website.blocks[t].type)
                    },
                    isHeaderTransparent() {
                        return this.website.blocks.navigation.background.isTransparent
                    },
                    transparentBlockSize() {
                        return this.isHeaderTransparent ? this.headerHeight : 0
                    },
                    transparentBlockStyle() {
                        return {
                            "--header-height": this.isHeaderTransparent ? "".concat(this.headerHeight, "px") : null
                        }
                    },
                    lcp() {
                        var t, e, i, o, a;
                        const {
                            components: n,
                            blocks: r
                        } = this.website, [s] = null !== (t = null === (e = this.currentPage) || void 0 === e ? void 0 : e.blocks) && void 0 !== t ? t : [];
                        if ("image" === (null === r || void 0 === r || null === (i = r[s]) || void 0 === i || null === (o = i.background) || void 0 === o ? void 0 : o.current)) return {
                            type: "block-background",
                            id: s
                        };
                        if ("BlockBlogList" === (null === r || void 0 === r || null === (a = r[s]) || void 0 === a ? void 0 : a.type)) return {
                            type: "block-blog-list",
                            id: s
                        };
                        const c = this.allBlocks.filter(t => {
                                var e, i, o;
                                return "BlockGrid" === (null === (e = r[t]) || void 0 === e ? void 0 : e.type) && (null === (i = r[t]) || void 0 === i || null === (o = i.components) || void 0 === o ? void 0 : o.length) > 0
                            }).flatMap(t => {
                                var e;
                                return null === (e = r[t]) || void 0 === e ? void 0 : e.components.map(e => ({
                                    blockId: t,
                                    elementId: e
                                }))
                            }),
                            l = c.filter(t => {
                                var e;
                                let {
                                    elementId: i
                                } = t;
                                return "GridImage" === (null === (e = n[i]) || void 0 === e ? void 0 : e.type)
                            }).slice(0, Bm).map(t => {
                                let {
                                    blockId: e,
                                    elementId: i
                                } = t;
                                const {
                                    width: o,
                                    height: a
                                } = co(r[e], n[i].settings.styles.position);
                                return {
                                    elementId: i,
                                    imageRatio: a / o
                                }
                            });
                        if (0 === l.length) return {};
                        const d = l.reduce((t, e) => e.imageRatio > t.imageRatio ? e : t);
                        return {
                            type: "grid-image",
                            id: null === d || void 0 === d ? void 0 : d.elementId
                        }
                    }
                }),
                watch: {
                    website: {
                        immediate: !0,
                        async handler(t, e) {
                            t && !e && (await this.$nextTick(), this.initObservers(), this.initCurrentLocale())
                        }
                    }
                },
                beforeDestroy() {
                    this.stickyIntersectionObserver && this.stickyIntersectionObserver.disconnect()
                },
                methods: Object(T["a"])(Object(T["a"])({}, Object(R["c"])(["updateCurrentLocale"])), {}, {
                    initObservers() {
                        this.$refs.stickyTriggerRef && !this.stickyIntersectionObserver && (this.stickyIntersectionObserver = new IntersectionObserver(t => {
                            let [{
                                isIntersecting: e
                            }] = t;
                            this.hasUserScrolled = !e
                        }, {
                            threshold: 1
                        }), this.stickyIntersectionObserver.observe(this.$refs.stickyTriggerRef))
                    },
                    initCurrentLocale() {
                        var t;
                        const e = this.$route.path.split("/")[1];
                        null !== (t = this.siteLanguages) && void 0 !== t && t.map(t => t.locale).includes(e) && this.updateCurrentLocale(e), !this.currentLocale && this.defaultLocale && this.updateCurrentLocale(this.defaultLocale)
                    }
                })
            },
            Pm = Mm,
            Em = (i("c0be"), Object(J["a"])(Pm, Xi, Qi, !1, null, null, null)),
            Tm = Em.exports;
        const Nm = new u["a"]({
            mode: "history",
            routes: [{
                path: "/",
                component: Tm
            }, {
                path: "/:slug",
                component: Tm
            }, {
                path: "/:lang/:slug",
                component: Tm
            }],
            scrollBehavior: (t, e, i) => {
                var o;
                if (i) return i;
                if (!t.hash) return {
                    x: 0,
                    y: 0
                };
                const a = null === (o = document.querySelector(".".concat(f))) || void 0 === o ? void 0 : o.offsetHeight,
                    n = document.querySelector(".".concat(y));
                return {
                    selector: t.hash,
                    offset: {
                        y: n ? a : 0,
                        x: 0
                    },
                    behavior: "smooth"
                }
            }
        });
        Nm.afterEach(t => {
            window.gtag && (window.gtag("set", "page_path", t.path), window.gtag("event", "page_view"))
        });
        var qm = Nm;
        const Am = t => {
                const e = t.target.closest("a");
                if (!e) return;
                const {
                    href: i,
                    origin: o,
                    target: a,
                    pathname: n
                } = e, r = o === window.location.origin, s = a === S, c = "/" === (null === n || void 0 === n ? void 0 : n[0]) && "/" !== (null === n || void 0 === n ? void 0 : n[1]);
                !r && i ? (t.preventDefault(), window.open(i, S)) : (s || c) && t.preventDefault()
            },
            Hm = t => {
                window.removeEventListener("click", t), window.addEventListener("click", t)
            };
        var $m = {
            namespaced: !0,
            getters: {
                categoryNameById: (t, e, i) => t => i.website.blogCategories[t].name
            }
        };
        const Dm = "shopping-cart-items",
            Rm = 864e5,
            Vm = "SET_STORE_PRODUCTS",
            Gm = "SET_IS_LOADING",
            Fm = "SET_IS_LOADED",
            Um = "SET_SHOPPING_CART_OPEN",
            zm = "SET_SHOPPING_CART_ITEMS",
            Wm = t => t && Object.values(t).some(t => Mn["b"].includes(t.type)),
            Ym = t => t && Object.values(t).some(t => "GridEcommerceButton" === (null === t || void 0 === t ? void 0 : t.type));
        var Km = {
                namespaced: !0,
                state: {
                    products: [],
                    shoppingCartItems: [],
                    isShoppingCartOpen: !1,
                    isLoading: !1,
                    isLoaded: !1
                },
                getters: {
                    isLocaleWithZyroEcommerceItems: (t, e, i) => {
                        var o, a;
                        return Ym(mo(null === (o = i.website) || void 0 === o ? void 0 : o.components, i.currentLocale)) || Wm(mo(null === (a = i.website) || void 0 === a ? void 0 : a.blocks, i.currentLocale))
                    },
                    isSiteWithZyroEcommerceItems: (t, e, i) => {
                        var o, a;
                        return Ym(null === (o = i.website) || void 0 === o ? void 0 : o.components) || Wm(null === (a = i.website) || void 0 === a ? void 0 : a.blocks)
                    },
                    isEcommerceStoreCreated: (t, e, i, o) => {
                        var a;
                        return !(null === (a = o.siteMeta) || void 0 === a || !a.ecommerceStoreId)
                    },
                    shoppingCartItems: t => {
                        const e = t.shoppingCartItems,
                            i = window.localStorage.getItem(Dm);
                        if (!i) return e;
                        const o = JSON.parse(i);
                        return Date.now() > o.expiry ? (window.localStorage.removeItem(Dm), []) : o.payload
                    },
                    quantifiedCartItemsList: t => t.shoppingCartItems.reduce((t, e) => {
                        const i = t.find(t => t.product.variants[0].id === e.variants[0].id);
                        return i ? t.map(t => t.product.variants[0].id === e.variants[0].id ? Object(T["a"])(Object(T["a"])({}, t), {}, {
                            quantity: t.quantity + 1
                        }) : t) : [...t, {
                            product: e,
                            quantity: 1
                        }]
                    }, []),
                    canAddToCart: (t, e) => (i, o) => {
                        const a = t.products.find(t => t.id === i),
                            n = null === a || void 0 === a ? void 0 : a.variants.find(t => t.id === o);
                        if (!a || !n) return !1;
                        if (n.manage_inventory) {
                            const t = e.quantifiedCartItemsList.find(t => t.product.id === i && t.product.variants.some(t => t.id === n.id)),
                                o = (null === t || void 0 === t ? void 0 : t.quantity) || 0;
                            return o < n.inventory_quantity
                        }
                        return !0
                    }
                },
                mutations: {
                    [Gm](t, e) {
                        t.isLoading = e
                    },
                    [Fm](t, e) {
                        t.isLoaded = e
                    },
                    [Vm](t, e) {
                        t.products = e
                    },
                    [Um](t, e) {
                        t.isShoppingCartOpen = e
                    },
                    [zm](t, e) {
                        t.shoppingCartItems = e
                    }
                },
                actions: {
                    getProducts: async t => {
                        let {
                            getters: e,
                            commit: i,
                            dispatch: o,
                            rootGetters: a
                        } = t;
                        const n = a.siteMeta.ecommerceStoreId || a.siteMeta.demoEcommerceStoreId;
                        if (n) {
                            i(Gm, !0);
                            try {
                                const t = await Tn(n),
                                    a = t => e.shoppingCartItems.reduce((e, i) => {
                                        const o = t.find(t => t.id === i.id),
                                            a = null === o || void 0 === o ? void 0 : o.variants.find(t => i.variants.some(e => t.id === e.id)),
                                            n = e.reduce((t, e) => e.variants.some(t => t.id === (null === a || void 0 === a ? void 0 : a.id)) ? t + 1 : t, 0);
                                        return o && a && n < a.inventory_quantity ? [...e, Object(T["a"])(Object(T["a"])({}, o), {}, {
                                            variants: [a]
                                        })] : e
                                    }, []);
                                i(Vm, t), o("setShoppingCartItems", a(t))
                            } catch (r) {
                                console.error(r)
                            }
                            i(Gm, !1), i(Fm, !0)
                        }
                    },
                    setShoppingCartOpen(t, e) {
                        let {
                            commit: i
                        } = t;
                        i(Um, e)
                    },
                    setShoppingCartItems(t, e) {
                        let {
                            commit: i
                        } = t;
                        const o = {
                            payload: e,
                            expiry: Date.now() + Rm
                        };
                        window.localStorage.setItem(Dm, JSON.stringify(o)), i(zm, e)
                    },
                    setIsLoading(t, e) {
                        let {
                            commit: i
                        } = t;
                        i(Gm, e)
                    }
                }
            },
            Jm = {
                namespaced: !0,
                state: {
                    navigationHeight: 0
                },
                getters: {
                    navigation: (t, e, i) => {
                        let {
                            website: o
                        } = i;
                        return o.navigation
                    },
                    items: (t, e, i) => {
                        var o;
                        let {
                            navigation: a
                        } = e, {
                            currentLocale: n
                        } = i;
                        return null !== (o = mo(a.items, n)) && void 0 !== o ? o : {}
                    },
                    itemsIds: (t, e) => {
                        let {
                            navigation: i,
                            items: o
                        } = e;
                        return go(i.itemsIds, o)
                    },
                    isCartVisible: (t, e, i) => i.website.blocks.navigation.settings.isCartVisible
                },
                mutations: {
                    updateNavigationHeight: (t, e) => {
                        t.navigationHeight = e
                    }
                }
            },
            Zm = {
                namespaced: !0,
                state: {
                    user: null
                },
                mutations: {
                    setUser: (t, e) => {
                        t.user = e
                    }
                }
            };
        const Xm = "SET_CURRENT_LOCALE",
            Qm = (t, e) => Object.fromEntries(Object.entries(t).filter((t, i, o) => {
                let [a, n] = t;
                return e({
                    key: a,
                    value: n,
                    index: i,
                    array: o
                })
            }));
        c["default"].use(R["b"]);
        const tg = {
            modules: {
                navigation: Jm,
                user: Zm,
                blog: $m,
                gui: Wi,
                ecommerce: Km
            },
            state: {
                website: null,
                websiteId: null,
                hasActivePlan: "",
                domain: "",
                currentLocale: null
            },
            getters: {
                siteMeta: t => {
                    var e, i;
                    return null !== (e = null === (i = t.website) || void 0 === i ? void 0 : i.meta) && void 0 !== e ? e : {}
                },
                sitePages: t => {
                    var e, i;
                    return null !== (e = mo(null === (i = t.website) || void 0 === i ? void 0 : i.pages, null === t || void 0 === t ? void 0 : t.currentLocale)) && void 0 !== e ? e : {}
                },
                siteLanguages: t => {
                    var e, i;
                    return null !== (e = null === (i = t.website) || void 0 === i ? void 0 : i.languages) && void 0 !== e ? e : []
                },
                hasLanguages: (t, e) => e.siteLanguages.length > 0,
                homePageId: (t, e) => {
                    var i, o, a;
                    return t.currentLocale ? null === (i = e.siteMeta) || void 0 === i ? void 0 : i.localeHomePage[t.currentLocale] : null === (o = t.website) || void 0 === o || null === (a = o.meta) || void 0 === a ? void 0 : a.homePageId
                },
                defaultLocale: (t, e) => {
                    var i;
                    return null === (i = e.siteMeta) || void 0 === i ? void 0 : i.defaultLocale
                },
                currentLanguage(t) {
                    var e;
                    return null === (e = this.siteLanguages) || void 0 === e ? void 0 : e.find(e => e.locale === (null === t || void 0 === t ? void 0 : t.currentLocale))
                },
                defaultPages: (t, e) => Qm(e.sitePages, t => {
                    let {
                        value: e
                    } = t;
                    return "default" === e.type
                }),
                blogPages: (t, e) => Qm(e.sitePages, t => {
                    let {
                        value: e
                    } = t;
                    return e.type === w
                }),
                ecommercePages: (t, e) => {
                    const {
                        blocks: i
                    } = t.website;
                    return Qm(e.sitePages, t => {
                        var e;
                        let {
                            value: o
                        } = t;
                        return null === o || void 0 === o || null === (e = o.blocks) || void 0 === e ? void 0 : e.some(t => {
                            var e;
                            return "BlockEcwidStore" === (null === (e = i[t]) || void 0 === e ? void 0 : e.type)
                        })
                    })
                },
                zyroEcommerceLocaleProductPages: t => {
                    var e, i;
                    return Qm(null !== (e = mo(null === (i = t.website) || void 0 === i ? void 0 : i.pages, t.currentLocale)) && void 0 !== e ? e : {}, t => {
                        let {
                            value: e
                        } = t;
                        return e.type === k
                    })
                },
                zyroEcommerceProductPages: t => {
                    var e;
                    return Qm(null === (e = t.website) || void 0 === e ? void 0 : e.pages, t => {
                        let {
                            value: e
                        } = t;
                        return e.type === k
                    })
                },
                isHomepageWithEcwid: (t, e) => {
                    const {
                        meta: i,
                        blocks: o
                    } = t.website;
                    return e.sitePages[i.homePageId].blocks.some(t => "BlockEcwidStore" === o[t].type)
                },
                publishedBlogPages: (t, e) => Qm(e.blogPages, t => {
                    let {
                        value: e
                    } = t;
                    return !e.isDraft
                })
            },
            mutations: {
                [Xm]: (t, e) => {
                    t.currentLocale = e
                },
                setWebsite: (t, e) => {
                    let {
                        website: i
                    } = e;
                    t.website = i, t.website.meta.homePageId || c["default"].set(t.website.meta, "homePageId", Object.keys(t.website.pages)[0])
                },
                setWebsiteId: (t, e) => {
                    t.websiteId = e
                },
                setHasActivePlan: (t, e) => {
                    t.hasActivePlan = !!e
                },
                setDomain: (t, e) => {
                    t.domain = e
                }
            },
            actions: {
                initUserApp: async t => {
                    let {
                        commit: e,
                        dispatch: i
                    } = t;
                    window.addEventListener("message", t => {
                        let {
                            data: o
                        } = t;
                        if ("object" !== typeof o || "webpackWarnings" === o.type) return;
                        const {
                            path: a,
                            websiteData: n,
                            initUserPreview: r,
                            siteId: s
                        } = o;
                        r && (i("ecommerce/setShoppingCartItems", []), ne(n), Hm(Am)), n && (e("setWebsiteId", s), e("setWebsite", {
                            website: n
                        })), o.user && e("user/setUser", o.user), a && a !== qm.currentRoute.path && qm.push({
                            path: a
                        })
                    }), window.parent.postMessage("readyForMessages", "*")
                },
                setDomain: (t, e) => {
                    let {
                        commit: i
                    } = t;
                    return i("setDomain", e)
                },
                updateCurrentLocale: (t, e) => {
                    let {
                        commit: i
                    } = t;
                    return i(Xm, e)
                }
            }
        };
        var eg = new R["b"].Store(tg);
        "ResizeObserver" in window === !1 && (window.ResizeObserver = o["a"]), c["default"].use(d["a"]), c["default"].use(l["a"]), c["default"].use(s.a), c["default"].use(n.a), c["default"].use(u["a"]), c["default"].directive(m, {}), c["default"].config.productionTip = !1;
        const ig = new c["default"]({
            store: eg,
            mounted: () => document.dispatchEvent(new Event("x-app-rendered")),
            router: qm,
            render: t => t(Zi)
        });
        H().then(t => {
            eg.commit("user/setUser", t.user), eg.commit("setWebsite", {
                website: t
            }), eg.commit("setWebsiteId", t.siteId), eg.dispatch("setDomain", t.domain)
        }).catch(t => {
            if (!window.location.origin.includes("https://latest-user-app.zyro.com")) throw t
        }).finally(() => {
            ig.$mount("#app")
        })
    },
    fdf7: function(t, e, i) {
        "use strict";
        i("7f00")
    },
    fe53: function(t, e, i) {},
    ff75: function(t, e, i) {
        "use strict";
        i("8541")
    }
});