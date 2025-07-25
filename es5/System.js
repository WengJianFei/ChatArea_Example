/*!
 * SystemJS 6.15.1
 */
!function () {
    function e(e, t) {
        return (t || "") + " (SystemJS Error#" + e + " https://github.com/systemjs/systemjs/blob/main/docs/errors.md#" + e + ")"
    }

    function t(e, t) {
        if (-1 !== e.indexOf("\\") && (e = e.replace(j, "/")), "/" === e[0] && "/" === e[1]) return t.slice(0, t.indexOf(":") + 1) + e;
        if ("." === e[0] && ("/" === e[1] || "." === e[1] && ("/" === e[2] || 2 === e.length && (e += "/")) || 1 === e.length && (e += "/")) || "/" === e[0]) {
            var n, r = t.slice(0, t.indexOf(":") + 1);
            if (n = "/" === t[r.length + 1] ? "file:" !== r ? (n = t.slice(r.length + 2)).slice(n.indexOf("/") + 1) : t.slice(8) : t.slice(r.length + ("/" === t[r.length])), "/" === e[0]) return t.slice(0, t.length - n.length - 1) + e;
            for (var i = n.slice(0, n.lastIndexOf("/") + 1) + e, o = [], s = -1, u = 0; u < i.length; u++) -1 !== s ? "/" === i[u] && (o.push(i.slice(s, u + 1)), s = -1) : "." === i[u] ? "." !== i[u + 1] || "/" !== i[u + 2] && u + 2 !== i.length ? "/" === i[u + 1] || u + 1 === i.length ? u += 1 : s = u : (o.pop(), u += 2) : s = u;
            return -1 !== s && o.push(i.slice(s)), t.slice(0, t.length - n.length) + o.join("")
        }
    }

    function n(e, n) {
        return t(e, n) || (-1 !== e.indexOf(":") ? e : t("./" + e, n))
    }

    function r(e, n, r, i, o) {
        for (var s in e) {
            var a = t(s, r) || s, f = e[s];
            if ("string" == typeof f) {
                var l = c(i, t(f, r) || f, o);
                l ? n[a] = l : u("W1", s, f, "bare specifier did not resolve")
            }
        }
    }

    function i(e, t, i) {
        var o;
        for (o in e.imports && r(e.imports, i.imports, t, i, null), e.scopes || {}) {
            var s = n(o, t);
            r(e.scopes[o], i.scopes[s] || (i.scopes[s] = {}), t, i, s)
        }
        for (o in e.depcache || {}) i.depcache[n(o, t)] = e.depcache[o];
        for (o in e.integrity || {}) i.integrity[n(o, t)] = e.integrity[o]
    }

    function o(e, t) {
        if (t[e]) return e;
        var n = e.length;
        do {
            var r = e.slice(0, n + 1);
            if (r in t) return r
        } while (-1 !== (n = e.lastIndexOf("/", n - 1)))
    }

    function s(e, t) {
        var n = o(e, t);
        if (n) {
            var r = t[n];
            if (null === r) return;
            if (!(e.length > n.length && "/" !== r[r.length - 1])) return r + e.slice(n.length);
            u("W2", n, r, "should have a trailing '/'")
        }
    }

    function u(t, n, r, i) {
        console.warn(e(t, "Package target " + i + ", resolving target '" + r + "' for " + n))
    }

    function c(e, t, n) {
        for (var r = e.scopes, i = n && o(n, r); i;) {
            var u = s(t, r[i]);
            if (u) return u;
            i = o(i.slice(0, i.lastIndexOf("/")), r)
        }
        return s(t, e.imports) || -1 !== t.indexOf(":") && t
    }

    function a() {
        this[M] = {}
    }

    function f(e) {
        return e.id
    }

    function l(e, t, n, r) {
        if (e.onload(n, t.id, t.d && t.d.map(f), !!r), n) throw n
    }

    function d(t, n, r, i) {
        var o = t[M][n];
        if (o) return o;
        var s = [], u = Object.create(null);
        P && Object.defineProperty(u, P, {value: "Module"});
        var c = Promise.resolve().then((function () {
            return t.instantiate(n, r, i)
        })).then((function (r) {
            if (!r) throw Error(e(2, "Module " + n + " did not instantiate"));
            var i = r[1]((function (e, t) {
                o.h = !0;
                var n = !1;
                if ("string" == typeof e) e in u && u[e] === t || (u[e] = t, n = !0); else {
                    for (var r in e) t = e[r], r in u && u[r] === t || (u[r] = t, n = !0);
                    e && e.__esModule && (u.__esModule = e.__esModule)
                }
                if (n) for (var i = 0; i < s.length; i++) {
                    var c = s[i];
                    c && c(u)
                }
                return t
            }), 2 === r[1].length ? {
                import: function (e, r) {
                    return t.import(e, n, r)
                }, meta: t.createContext(n)
            } : void 0);
            return o.e = i.execute || function () {
            }, [r[0], i.setters || [], r[2] || []]
        }), (function (e) {
            throw o.e = null, o.er = e, l(t, o, e, !0), e
        })), a = c.then((function (e) {
            return Promise.all(e[0].map((function (r, i) {
                var o = e[1][i], s = e[2][i];
                return Promise.resolve(t.resolve(r, n)).then((function (e) {
                    var r = d(t, e, n, s);
                    return Promise.resolve(r.I).then((function () {
                        return o && (r.i.push(o), !r.h && r.I || o(r.n)), r
                    }))
                }))
            }))).then((function (e) {
                o.d = e
            }))
        }));
        return o = t[M][n] = {
            id: n,
            i: s,
            n: u,
            m: i,
            I: c,
            L: a,
            h: !1,
            d: void 0,
            e: void 0,
            er: void 0,
            E: void 0,
            C: void 0,
            p: void 0
        }
    }

    function h(e, t, n, r) {
        if (!r[t.id]) return r[t.id] = !0, Promise.resolve(t.L).then((function () {
            return t.p && null !== t.p.e || (t.p = n), Promise.all(t.d.map((function (t) {
                return h(e, t, n, r)
            })))
        })).catch((function (n) {
            if (t.er) throw n;
            throw t.e = null, l(e, t, n, !1), n
        }))
    }

    function p(e, t) {
        return t.C = h(e, t, t, {}).then((function () {
            return v(e, t, {})
        })).then((function () {
            return t.n
        }))
    }

    function v(e, t, n) {
        function r() {
            try {
                var n = o.call(L);
                if (n) return n = n.then((function () {
                    t.C = t.n, t.E = null, l(e, t, null, !0)
                }), (function (n) {
                    throw t.er = n, t.E = null, l(e, t, n, !0), n
                })), t.E = n;
                t.C = t.n, t.L = t.I = void 0
            } catch (r) {
                throw t.er = r, r
            } finally {
                l(e, t, t.er, !0)
            }
        }

        if (!n[t.id]) {
            if (n[t.id] = !0, !t.e) {
                if (t.er) throw t.er;
                return t.E ? t.E : void 0
            }
            var i, o = t.e;
            return t.e = null, t.d.forEach((function (r) {
                try {
                    var o = v(e, r, n);
                    o && (i = i || []).push(o)
                } catch (s) {
                    throw t.er = s, l(e, t, s, !1), s
                }
            })), i ? Promise.all(i).then(r) : r()
        }
    }

    function m() {
        [].forEach.call(document.querySelectorAll("script"), (function (t) {
            if (!t.sp) if ("systemjs-module" === t.type) {
                if (t.sp = !0, !t.src) return;
                System.import("import:" === t.src.slice(0, 7) ? t.src.slice(7) : n(t.src, g)).catch((function (e) {
                    if (e.message.indexOf("https://github.com/systemjs/systemjs/blob/main/docs/errors.md#3") > -1) {
                        var n = document.createEvent("Event");
                        n.initEvent("error", !1, !1), t.dispatchEvent(n)
                    }
                    return Promise.reject(e)
                }))
            } else if ("systemjs-importmap" === t.type) {
                t.sp = !0;
                var r = t.src ? (System.fetch || fetch)(t.src, {
                    integrity: t.integrity,
                    priority: t.fetchPriority,
                    passThrough: !0
                }).then((function (e) {
                    if (!e.ok) throw Error("Invalid status code: " + e.status);
                    return e.text()
                })).catch((function (n) {
                    return n.message = e("W4", "Error fetching systemjs-import map " + t.src) + "\n" + n.message, console.warn(n), "function" == typeof t.onerror && t.onerror(), "{}"
                })) : t.innerHTML;
                W = W.then((function () {
                    return r
                })).then((function (n) {
                    !function (t, n, r) {
                        var o = {};
                        try {
                            o = JSON.parse(n)
                        } catch (s) {
                            console.warn(Error(e("W5", "systemjs-importmap contains invalid JSON") + "\n\n" + n + "\n"))
                        }
                        i(o, r, t)
                    }(N, n, t.src || g)
                }))
            }
        }))
    }

    var g, y = "undefined" != typeof Symbol, b = "undefined" != typeof self, S = "undefined" != typeof document,
        w = b ? self : global;
    if (S) {
        var O = document.querySelector("base[href]");
        O && (g = O.href)
    }
    if (!g && "undefined" != typeof location) {
        var E = (g = location.href.split("#")[0].split("?")[0]).lastIndexOf("/");
        -1 !== E && (g = g.slice(0, E + 1))
    }
    var x, j = /\\/g, P = y && Symbol.toStringTag, M = y ? Symbol() : "@", I = a.prototype;
    I.import = function (e, t, n) {
        var r = this;
        return t && "object" == typeof t && (n = t, t = void 0), Promise.resolve(r.prepareImport()).then((function () {
            return r.resolve(e, t, n)
        })).then((function (e) {
            var t = d(r, e, void 0, n);
            return t.C || p(r, t)
        }))
    }, I.createContext = function (e) {
        var t = this;
        return {
            url: e, resolve: function (n, r) {
                return Promise.resolve(t.resolve(n, r || e))
            }
        }
    }, I.onload = function () {
    }, I.register = function (e, t, n) {
        x = [e, t, n]
    }, I.getRegister = function () {
        var e = x;
        return x = void 0, e
    };
    var L = Object.freeze(Object.create(null));
    w.System = new a;
    var C, R, W = Promise.resolve(), N = {imports: {}, scopes: {}, depcache: {}, integrity: {}}, T = S;
    if (I.prepareImport = function (e) {
        return (T || e) && (m(), T = !1), W
    }, I.getImportMap = function () {
        return JSON.parse(JSON.stringify(N))
    }, S && (m(), window.addEventListener("DOMContentLoaded", m)), I.addImportMap = function (e, t) {
        i(e, t || g, N)
    }, S) {
        window.addEventListener("error", (function (e) {
            J = e.filename, _ = e.error
        }));
        var A = location.origin
    }
    I.createScript = function (e) {
        var t = document.createElement("script");
        t.async = !0, e.indexOf(A + "/") && (t.crossOrigin = "anonymous");
        var n = N.integrity[e];
        return n && (t.integrity = n), t.src = e, t
    };
    var J, _, k = {}, U = I.register;
    I.register = function (e, t) {
        if (S && "loading" === document.readyState && "string" != typeof e) {
            var n = document.querySelectorAll("script[src]"), r = n[n.length - 1];
            if (r) {
                C = e;
                var i = this;
                R = setTimeout((function () {
                    k[r.src] = [e, t], i.import(r.src)
                }))
            }
        } else C = void 0;
        return U.call(this, e, t)
    }, I.instantiate = function (t, n) {
        var r = k[t];
        if (r) return delete k[t], r;
        var i = this;
        return Promise.resolve(I.createScript(t)).then((function (r) {
            return new Promise((function (o, s) {
                r.addEventListener("error", (function () {
                    s(Error(e(3, "Error loading " + t + (n ? " from " + n : ""))))
                })), r.addEventListener("load", (function () {
                    if (document.head.removeChild(r), J === t) s(_); else {
                        var e = i.getRegister(t);
                        e && e[0] === C && clearTimeout(R), o(e)
                    }
                })), document.head.appendChild(r)
            }))
        }))
    }, I.shouldFetch = function () {
        return !1
    }, "undefined" != typeof fetch && (I.fetch = fetch);
    var $ = I.instantiate, B = /^(text|application)\/(x-)?javascript(;|$)/;
    I.instantiate = function (t, n, r) {
        var i = this;
        return this.shouldFetch(t, n, r) ? this.fetch(t, {
            credentials: "same-origin",
            integrity: N.integrity[t],
            meta: r
        }).then((function (r) {
            if (!r.ok) throw Error(e(7, r.status + " " + r.statusText + ", loading " + t + (n ? " from " + n : "")));
            var o = r.headers.get("content-type");
            if (!o || !B.test(o)) throw Error(e(4, 'Unknown Content-Type "' + o + '", loading ' + t + (n ? " from " + n : "")));
            return r.text().then((function (e) {
                return e.indexOf("//# sourceURL=") < 0 && (e += "\n//# sourceURL=" + t), (0, eval)(e), i.getRegister(t)
            }))
        })) : $.apply(this, arguments)
    }, I.resolve = function (n, r) {
        return c(N, t(n, r = r || g) || n, r) || function (t, n) {
            throw Error(e(8, "Unable to resolve bare specifier '" + t + (n ? "' from " + n : "'")))
        }(n, r)
    };
    var F = I.instantiate;
    I.instantiate = function (e, t, n) {
        var r = N.depcache[e];
        if (r) for (var i = 0; i < r.length; i++) d(this, this.resolve(r[i], e), e);
        return F.call(this, e, t, n)
    }, b && "function" == typeof importScripts && (I.instantiate = function (e) {
        var t = this;
        return Promise.resolve().then((function () {
            return importScripts(e), t.getRegister(e)
        }))
    }), function (e) {
        function t(t) {
            return !e.hasOwnProperty(t) || !isNaN(t) && t < e.length || a && e[t] && "undefined" != typeof window && e[t].parent === window
        }

        var n, r, i, o = e.System.constructor.prototype, s = o.import;
        o.import = function (o, u, c) {
            return function () {
                for (var o in n = r = void 0, e) t(o) || (n ? r || (r = o) : n = o, i = o)
            }(), s.call(this, o, u, c)
        };
        var u = [[], function () {
            return {}
        }], c = o.getRegister;
        o.getRegister = function () {
            var o = c.call(this);
            if (o) return o;
            var s, a = function (o) {
                var s, u, c = 0;
                for (var a in e) if (!t(a)) {
                    if (0 === c && a !== n || 1 === c && a !== r) return a;
                    s ? (i = a, u = o && u || a) : s = a === i, c++
                }
                return u
            }(this.firstGlobalProp);
            if (!a) return u;
            try {
                s = e[a]
            } catch (f) {
                return u
            }
            return [[], function (e) {
                return {
                    execute: function () {
                        e(s), e({default: s, __useDefault: !0})
                    }
                }
            }]
        };
        var a = "undefined" != typeof navigator && -1 !== navigator.userAgent.indexOf("Trident")
    }("undefined" != typeof self ? self : global), function (e) {
        var t = e.System.constructor.prototype, r = /^[^#?]+\.(css|html|json|wasm)([?#].*)?$/,
            i = t.shouldFetch.bind(t);
        t.shouldFetch = function (e) {
            return i(e) || r.test(e)
        };
        var o = /^application\/json(;|$)/, s = /^text\/css(;|$)/, u = /^application\/wasm(;|$)/, c = t.fetch;
        t.fetch = function (t, r) {
            return c(t, r).then((function (i) {
                if (r.passThrough) return i;
                if (!i.ok) return i;
                var c = i.headers.get("content-type");
                return o.test(c) ? i.json().then((function (e) {
                    return new Response(new Blob(['System.register([],function(e){return{execute:function(){e("default",' + JSON.stringify(e) + ")}}})"], {type: "application/javascript"}))
                })) : s.test(c) ? i.text().then((function (e) {
                    return e = e.replace(/url\(\s*(?:(["'])((?:\\.|[^\n\\"'])+)\1|((?:\\.|[^\s,"'()\\])+))\s*\)/g, (function (e, r, i, o) {
                        return ["url(", r, n(i || o, t), r, ")"].join("")
                    })), new Response(new Blob(["System.register([],function(e){return{execute:function(){var s=new CSSStyleSheet();s.replaceSync(" + JSON.stringify(e) + ');e("default",s)}}})'], {type: "application/javascript"}))
                })) : u.test(c) ? (WebAssembly.compileStreaming ? WebAssembly.compileStreaming(i) : i.arrayBuffer().then(WebAssembly.compile)).then((function (n) {
                    e.System.wasmModules || (e.System.wasmModules = Object.create(null)), e.System.wasmModules[t] = n;
                    var r = [], i = [];
                    return WebAssembly.Module.imports && WebAssembly.Module.imports(n).forEach((function (e) {
                        var t = JSON.stringify(e.module);
                        -1 === r.indexOf(t) && (r.push(t), i.push("function(m){i[" + t + "]=m}"))
                    })), new Response(new Blob(["System.register([" + r.join(",") + "],function(e){var i={};return{setters:[" + i.join(",") + "],execute:function(){return WebAssembly.instantiate(System.wasmModules[" + JSON.stringify(t) + "],i).then(function(m){e(m.exports)})}}})"], {type: "application/javascript"}))
                })) : i
            }))
        }
    }("undefined" != typeof self ? self : global);
    var q = "undefined" != typeof Symbol && Symbol.toStringTag;
    I.get = function (e) {
        var t = this[M][e];
        if (t && null === t.e && !t.E) return t.er ? null : t.n
    }, I.set = function (t, n) {
        try {
            new URL(t)
        } catch (s) {
            console.warn(Error(e("W3", '"' + t + '" is not a valid URL to set in the module registry')))
        }
        var r;
        q && "Module" === n[q] ? r = n : (r = Object.assign(Object.create(null), n), q && Object.defineProperty(r, q, {value: "Module"}));
        var i = Promise.resolve(r),
            o = this[M][t] || (this[M][t] = {id: t, i: [], h: !1, d: [], e: null, er: void 0, E: void 0});
        return !o.e && !o.E && (Object.assign(o, {n: r, I: void 0, L: void 0, C: i}), r)
    }, I.has = function (e) {
        return !!this[M][e]
    }, I.delete = function (e) {
        var t = this[M], n = t[e];
        if (!n || n.p && null !== n.p.e || n.E) return !1;
        var r = n.i;
        return n.d && n.d.forEach((function (e) {
            var t = e.i.indexOf(n);
            -1 !== t && e.i.splice(t, 1)
        })), delete t[e], function () {
            var n = t[e];
            if (!n || !r || null !== n.e || n.E) return !1;
            r.forEach((function (e) {
                n.i.push(e), e(n.n)
            })), r = null
        }
    };
    var D = "undefined" != typeof Symbol && Symbol.iterator;
    I.entries = function () {
        var e, t, n = this, r = Object.keys(n[M]), i = 0, o = {
            next: function () {
                for (; void 0 !== (t = r[i++]) && void 0 === (e = n.get(t));) ;
                return {done: void 0 === t, value: void 0 !== t && [t, e]}
            }
        };
        return o[D] = function () {
            return this
        }, o
    }
}();
//# sourceMappingURL=system.min.js.map
