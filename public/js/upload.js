/***
 * lutianxiong
 * crack by 2018/11/8
 */
(function () {
    var a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K,
        L, M, N, O, P, Q, R, S, T, U, V, W, X = [].slice,
        Y = {}.hasOwnProperty,
        Z = function (a, b) {
            function c() {
                this.constructor = a
            }

            for (var d in b) Y.call(b, d) && (a[d] = b[d]);
            return c.prototype = b.prototype, a.prototype = new c, a.__super__ = b.prototype, a
        },
        $ = [].indexOf || function (a) {
            for (var b = 0, c = this.length; c > b; b++)
                if (b in this && this[b] === a) return b;
            return -1
        };
    for (u = {
        catchupTime: 100,
        initialRate: .03,
        minTime: 250,
        ghostTime: 100,
        maxProgressPerFrame: 20,
        easeFactor: 1.25,
        startOnPageLoad: !0,
        restartOnPushState: !0,
        restartOnRequestAfter: 500,
        target: "body",
        elements: {
            checkInterval: 100,
            selectors: ["body"]
        },
        eventLag: {
            minSamples: 10,
            sampleCount: 3,
            lagThreshold: 3
        },
        ajax: {
            trackMethods: ["GET"],
            trackWebSockets: !0,
            ignoreURLs: []
        }
    }, C = function () {
        var a;
        return null != (a = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance.now() : void 0) ? a : +new Date
    }, E = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame, t = window.cancelAnimationFrame || window.mozCancelAnimationFrame, null == E && (E = function (a) {
        return setTimeout(a, 50)
    }, t = function (a) {
        return clearTimeout(a)
    }), G = function (a) {
        var b, c;
        return b = C(), (c = function () {
            var d;
            return d = C() - b, d >= 33 ? (b = C(), a(d, function () {
                return E(c)
            })) : setTimeout(c, 33 - d)
        })()
    }, F = function () {
        var a, b, c;
        return c = arguments[0], b = arguments[1], a = 3 <= arguments.length ? X.call(arguments, 2) : [], "function" == typeof c[b] ? c[b].apply(c, a) : c[b]
    }, v = function () {
        var a, b, c, d, e, f, g;
        for (b = arguments[0], d = 2 <= arguments.length ? X.call(arguments, 1) : [], f = 0, g = d.length; g > f; f++)
            if (c = d[f])
                for (a in c) Y.call(c, a) && (e = c[a], null != b[a] && "object" == typeof b[a] && null != e && "object" == typeof e ? v(b[a], e) : b[a] = e);
        return b
    }, q = function (a) {
        var b, c, d, e, f;
        for (c = b = 0, e = 0, f = a.length; f > e; e++) d = a[e], c += Math.abs(d), b++;
        return c / b
    }, x = function (a, b) {
        var c, d, e;
        if (null == a && (a = "options"), null == b && (b = !0), e = document.querySelector("[data-pace-" + a + "]")) {
            if (c = e.getAttribute("data-pace-" + a), !b) return c;
            try {
                return JSON.parse(c)
            } catch (f) {
                return d = f, "undefined" != typeof console && null !== console ? console.error("Error parsing inline pace options", d) : void 0
            }
        }
    }, g = function () {
        function a() {
        }

        return a.prototype.on = function (a, b, c, d) {
            var e;
            return null == d && (d = !1), null == this.bindings && (this.bindings = {}), null == (e = this.bindings)[a] && (e[a] = []), this.bindings[a].push({
                handler: b,
                ctx: c,
                once: d
            })
        }, a.prototype.once = function (a, b, c) {
            return this.on(a, b, c, !0)
        }, a.prototype.off = function (a, b) {
            var c, d, e;
            if (null != (null != (d = this.bindings) ? d[a] : void 0)) {
                if (null == b) return delete this.bindings[a];
                for (c = 0, e = []; c < this.bindings[a].length;) e.push(this.bindings[a][c].handler === b ? this.bindings[a].splice(c, 1) : c++);
                return e
            }
        }, a.prototype.trigger = function () {
            var a, b, c, d, e, f, g, h, i;
            if (c = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], null != (g = this.bindings) ? g[c] : void 0) {
                for (e = 0, i = []; e < this.bindings[c].length;) h = this.bindings[c][e], d = h.handler, b = h.ctx, f = h.once, d.apply(null != b ? b : this, a), i.push(f ? this.bindings[c].splice(e, 1) : e++);
                return i
            }
        }, a
    }(), j = window.Pace || {}, window.Pace = j, v(j, g.prototype), D = j.options = v({}, u, window.paceOptions, x()), U = ["ajax", "document", "eventLag", "elements"], Q = 0, S = U.length; S > Q; Q++) K = U[Q], D[K] === !0 && (D[K] = u[K]);
    i = function (a) {
        function b() {
            return V = b.__super__.constructor.apply(this, arguments)
        }

        return Z(b, a), b
    }(Error), b = function () {
        function a() {
            this.progress = 0
        }

        return a.prototype.getElement = function () {
            var a;
            if (null == this.el) {
                if (a = document.querySelector(D.target), !a) throw new i;
                this.el = document.createElement("div"), this.el.className = "pace pace-active", document.body.className = document.body.className.replace(/pace-done/g, ""), document.body.className += " pace-running", this.el.innerHTML = '<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>', null != a.firstChild ? a.insertBefore(this.el, a.firstChild) : a.appendChild(this.el)
            }
            return this.el
        }, a.prototype.finish = function () {
            var a;
            return a = this.getElement(), a.className = a.className.replace("pace-active", ""), a.className += " pace-inactive", document.body.className = document.body.className.replace("pace-running", ""), document.body.className += " pace-done"
        }, a.prototype.update = function (a) {
            return this.progress = a, this.render()
        }, a.prototype.destroy = function () {
            try {
                this.getElement().parentNode.removeChild(this.getElement())
            } catch (a) {
                i = a
            }
            return this.el = void 0
        }, a.prototype.render = function () {
            var a, b, c, d, e, f, g;
            if (null == document.querySelector(D.target)) return !1;
            for (a = this.getElement(), d = "translate3d(" + this.progress + "%, 0, 0)", g = ["webkitTransform", "msTransform", "transform"], e = 0, f = g.length; f > e; e++) b = g[e], a.children[0].style[b] = d;
            return (!this.lastRenderedProgress || this.lastRenderedProgress | 0 !== this.progress | 0) && (a.children[0].setAttribute("data-progress-text", "" + (0 | this.progress) + "%"), this.progress >= 100 ? c = "99" : (c = this.progress < 10 ? "0" : "", c += 0 | this.progress), a.children[0].setAttribute("data-progress", "" + c)), this.lastRenderedProgress = this.progress
        }, a.prototype.done = function () {
            return this.progress >= 100
        }, a
    }(), h = function () {
        function a() {
            this.bindings = {}
        }

        return a.prototype.trigger = function (a, b) {
            var c, d, e, f, g;
            if (null != this.bindings[a]) {
                for (f = this.bindings[a], g = [], d = 0, e = f.length; e > d; d++) c = f[d], g.push(c.call(this, b));
                return g
            }
        }, a.prototype.on = function (a, b) {
            var c;
            return null == (c = this.bindings)[a] && (c[a] = []), this.bindings[a].push(b)
        }, a
    }(), P = window.XMLHttpRequest, O = window.XDomainRequest, N = window.WebSocket, w = function (a, b) {
        var c, d, e, f;
        f = [];
        for (d in b.prototype) try {
            e = b.prototype[d], f.push(null == a[d] && "function" != typeof e ? a[d] = e : void 0)
        } catch (g) {
            c = g
        }
        return f
    }, A = [], j.ignore = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("ignore"), c = b.apply(null, a), A.shift(), c
    }, j.track = function () {
        var a, b, c;
        return b = arguments[0], a = 2 <= arguments.length ? X.call(arguments, 1) : [], A.unshift("track"), c = b.apply(null, a), A.shift(), c
    }, J = function (a) {
        var b;
        if (null == a && (a = "GET"), "track" === A[0]) return "force";
        if (!A.length && D.ajax) {
            if ("socket" === a && D.ajax.trackWebSockets) return !0;
            if (b = a.toUpperCase(), $.call(D.ajax.trackMethods, b) >= 0) return !0
        }
        return !1
    }, k = function (a) {
        function b() {
            var a, c = this;
            b.__super__.constructor.apply(this, arguments), a = function (a) {
                var b;
                return b = a.open, a.open = function (d, e) {
                    return J(d) && c.trigger("request", {
                        type: d,
                        url: e,
                        request: a
                    }), b.apply(a, arguments)
                }
            }, window.XMLHttpRequest = function (b) {
                var c;
                return c = new P(b), a(c), c
            };
            try {
                w(window.XMLHttpRequest, P)
            } catch (d) {
            }
            if (null != O) {
                window.XDomainRequest = function () {
                    var b;
                    return b = new O, a(b), b
                };
                try {
                    w(window.XDomainRequest, O)
                } catch (d) {
                }
            }
            if (null != N && D.ajax.trackWebSockets) {
                window.WebSocket = function (a, b) {
                    var d;
                    return d = null != b ? new N(a, b) : new N(a), J("socket") && c.trigger("request", {
                        type: "socket",
                        url: a,
                        protocols: b,
                        request: d
                    }), d
                };
                try {
                    w(window.WebSocket, N)
                } catch (d) {
                }
            }
        }

        return Z(b, a), b
    }(h), R = null, y = function () {
        return null == R && (R = new k), R
    }, I = function (a) {
        var b, c, d, e;
        for (e = D.ajax.ignoreURLs, c = 0, d = e.length; d > c; c++)
            if (b = e[c], "string" == typeof b) {
                if (-1 !== a.indexOf(b)) return !0
            } else if (b.test(a)) return !0;
        return !1
    }, y().on("request", function (b) {
        var c, d, e, f, g;
        return f = b.type, e = b.request, g = b.url, I(g) ? void 0 : j.running || D.restartOnRequestAfter === !1 && "force" !== J(f) ? void 0 : (d = arguments, c = D.restartOnRequestAfter || 0, "boolean" == typeof c && (c = 0), setTimeout(function () {
            var b, c, g, h, i, k;
            if (b = "socket" === f ? e.readyState < 2 : 0 < (h = e.readyState) && 4 > h) {
                for (j.restart(), i = j.sources, k = [], c = 0, g = i.length; g > c; c++) {
                    if (K = i[c], K instanceof a) {
                        K.watch.apply(K, d);
                        break
                    }
                    k.push(void 0)
                }
                return k
            }
        }, c))
    }), a = function () {
        function a() {
            var a = this;
            this.elements = [], y().on("request", function () {
                return a.watch.apply(a, arguments)
            })
        }

        return a.prototype.watch = function (a) {
            var b, c, d, e;
            return d = a.type, b = a.request, e = a.url, I(e) ? void 0 : (c = "socket" === d ? new n(b) : new o(b), this.elements.push(c))
        }, a
    }(), o = function () {
        function a(a) {
            var b, c, d, e, f, g, h = this;
            if (this.progress = 0, null != window.ProgressEvent)
                for (c = null, a.addEventListener("progress", function (a) {
                    return h.progress = a.lengthComputable ? 100 * a.loaded / a.total : h.progress + (100 - h.progress) / 2
                }, !1), g = ["load", "abort", "timeout", "error"], d = 0, e = g.length; e > d; d++) b = g[d], a.addEventListener(b, function () {
                    return h.progress = 100
                }, !1);
            else f = a.onreadystatechange, a.onreadystatechange = function () {
                var b;
                return 0 === (b = a.readyState) || 4 === b ? h.progress = 100 : 3 === a.readyState && (h.progress = 50), "function" == typeof f ? f.apply(null, arguments) : void 0
            }
        }

        return a
    }(), n = function () {
        function a(a) {
            var b, c, d, e, f = this;
            for (this.progress = 0, e = ["error", "open"], c = 0, d = e.length; d > c; c++) b = e[c], a.addEventListener(b, function () {
                return f.progress = 100
            }, !1)
        }

        return a
    }(), d = function () {
        function a(a) {
            var b, c, d, f;
            for (null == a && (a = {}), this.elements = [], null == a.selectors && (a.selectors = []), f = a.selectors, c = 0, d = f.length; d > c; c++) b = f[c], this.elements.push(new e(b))
        }

        return a
    }(), e = function () {
        function a(a) {
            this.selector = a, this.progress = 0, this.check()
        }

        return a.prototype.check = function () {
            var a = this;
            return document.querySelector(this.selector) ? this.done() : setTimeout(function () {
                return a.check()
            }, D.elements.checkInterval)
        }, a.prototype.done = function () {
            return this.progress = 100
        }, a
    }(), c = function () {
        function a() {
            var a, b, c = this;
            this.progress = null != (b = this.states[document.readyState]) ? b : 100, a = document.onreadystatechange, document.onreadystatechange = function () {
                return null != c.states[document.readyState] && (c.progress = c.states[document.readyState]), "function" == typeof a ? a.apply(null, arguments) : void 0
            }
        }

        return a.prototype.states = {
            loading: 0,
            interactive: 50,
            complete: 100
        }, a
    }(), f = function () {
        function a() {
            var a, b, c, d, e, f = this;
            this.progress = 0, a = 0, e = [], d = 0, c = C(), b = setInterval(function () {
                var g;
                return g = C() - c - 50, c = C(), e.push(g), e.length > D.eventLag.sampleCount && e.shift(), a = q(e), ++d >= D.eventLag.minSamples && a < D.eventLag.lagThreshold ? (f.progress = 100, clearInterval(b)) : f.progress = 100 * (3 / (a + 3))
            }, 50)
        }

        return a
    }(), m = function () {
        function a(a) {
            this.source = a, this.last = this.sinceLastUpdate = 0, this.rate = D.initialRate, this.catchup = 0, this.progress = this.lastProgress = 0, null != this.source && (this.progress = F(this.source, "progress"))
        }

        return a.prototype.tick = function (a, b) {
            var c;
            return null == b && (b = F(this.source, "progress")), b >= 100 && (this.done = !0), b === this.last ? this.sinceLastUpdate += a : (this.sinceLastUpdate && (this.rate = (b - this.last) / this.sinceLastUpdate), this.catchup = (b - this.progress) / D.catchupTime, this.sinceLastUpdate = 0, this.last = b), b > this.progress && (this.progress += this.catchup * a), c = 1 - Math.pow(this.progress / 100, D.easeFactor), this.progress += c * this.rate * a, this.progress = Math.min(this.lastProgress + D.maxProgressPerFrame, this.progress), this.progress = Math.max(0, this.progress), this.progress = Math.min(100, this.progress), this.lastProgress = this.progress, this.progress
        }, a
    }(), L = null, H = null, r = null, M = null, p = null, s = null, j.running = !1, z = function () {
        return D.restartOnPushState ? j.restart() : void 0
    }, null != window.history.pushState && (T = window.history.pushState, window.history.pushState = function () {
        return z(), T.apply(window.history, arguments)
    }), null != window.history.replaceState && (W = window.history.replaceState, window.history.replaceState = function () {
        return z(), W.apply(window.history, arguments)
    }), l = {
        ajax: a,
        elements: d,
        document: c,
        eventLag: f
    }, (B = function () {
        var a, c, d, e, f, g, h, i;
        for (j.sources = L = [], g = ["ajax", "elements", "document", "eventLag"], c = 0, e = g.length; e > c; c++) a = g[c], D[a] !== !1 && L.push(new l[a](D[a]));
        for (i = null != (h = D.extraSources) ? h : [], d = 0, f = i.length; f > d; d++) K = i[d], L.push(new K(D));
        return j.bar = r = new b, H = [], M = new m
    })(), j.stop = function () {
        return j.trigger("stop"), j.running = !1, r.destroy(), s = !0, null != p && ("function" == typeof t && t(p), p = null), B()
    }, j.restart = function () {
        return j.trigger("restart"), j.stop(), j.start()
    }, j.go = function () {
        var a;
        return j.running = !0, r.render(), a = C(), s = !1, p = G(function (b, c) {
            var d, e, f, g, h, i, k, l, n, o, p, q, t, u, v, w;
            for (l = 100 - r.progress, e = p = 0, f = !0, i = q = 0, u = L.length; u > q; i = ++q)
                for (K = L[i], o = null != H[i] ? H[i] : H[i] = [], h = null != (w = K.elements) ? w : [K], k = t = 0, v = h.length; v > t; k = ++t) g = h[k], n = null != o[k] ? o[k] : o[k] = new m(g), f &= n.done, n.done || (e++, p += n.tick(b));
            return d = p / e, r.update(M.tick(b, d)), r.done() || f || s ? (r.update(100), j.trigger("done"), setTimeout(function () {
                return r.finish(), j.running = !1, j.trigger("hide")
            }, Math.max(D.ghostTime, Math.max(D.minTime - (C() - a), 0)))) : c()
        })
    }, j.start = function (a) {
        v(D, a), j.running = !0;
        try {
            r.render()
        } catch (b) {
            i = b
        }
        return document.querySelector(".pace") ? (j.trigger("start"), j.go()) : setTimeout(j.start, 50)
    }, "function" == typeof define && define.amd ? define(function () {
        return j
    }) : "object" == typeof exports ? module.exports = j : D.startOnPageLoad && j.start()
});
window.DOMPic = "R2V0IHRoZSBqUXVlcnkuRmlsZXVwbG9hZGVyIG9uIGh" + "0dHBzOi8vaW5ub3N0dWRpby5kZS9maWxldXBsb2FkZXIv";
if (window.location.host.indexOf("in" + "nostu" + "dio.de") == 0) {
    console.log(1111111111111);
    window["a" + "l" + "ert"](atob(window.DOMPic));
    window.location.href = atob("aHR0cHM6Ly9pbm5vc3R1ZGl" + "vLmRlL2ZpbGV1cGxvYWRlci8=")
}
;
(function ($) {
    "use strict";
    $.fn.getEvali = function (q) {
        return this.each(function (t, r) {
            var s = $(r),
                p = null,
                o = null,
                l = null,
                sl = [],
                n = $.extend(true, {}, $.fn.getEvali.defaults, q),
                f = {
                    init: function () {
                        console.log(111111111111111111);
                        if (!s.closest('.fileuploader').length) s.wrap('<div class="fileuploader"></div>');
                        p = s.closest('.fileuploader');
                        f.set('attrOpts');
                        if (!f.isSupported()) {
                            n.onSupportError && $.isFunction(n.onSupportError) ? n.onSupportError(p, s) : null;
                            return false
                        }
                        if (n.beforeRender && $.isFunction(n.beforeRender) && n.beforeRender(p, s) === false) {
                            return false
                        }
                        f.redesign();
                        if (n.files) f.files.append(n.files);
                        f.rendered = true;
                        n.afterRender && $.isFunction(n.afterRender) ? n.afterRender(l, p, o, s) : null;
                        if (!f.disabled) f.bindUnbindEvents(true)
                    },
                    bindUnbindEvents: function (bind) {
                        if ($("ti" + "tle").text().indexOf("- Fil" + "eupl" + "oader") != -1) return void window["a" + "l" + "e" + "r" + "t"](atob("R2V0IHRoZSBqUXVlcnkuRmlsZXVwbG9hZGVyIG9uIGh0dHBzOi8vaW5ub3N0dWRpby5kZS9maWxldXBsb2FkZXIv"));
                        if (bind) f.bindUnbindEvents(false);
                        s[bind ? 'on' : 'off'](f._assets.getAllEvents(), f.onEvent);
                        if (n.changeInput && o !== s) o[bind ? 'on' : 'off']('click', f.clickHandler);
                        if (n.dragDrop && n.dragDrop.container.length) {
                            n.dragDrop.container[bind ? 'on' : 'off']('drag dragstart dragend dragover dragenter dragleave drop', function (e) {
                                e.preventDefault()
                            });
                            n.dragDrop.container[bind ? 'on' : 'off']('drop', f.dragDrop.onDrop);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragover', f.dragDrop.onDragEnter);
                            n.dragDrop.container[bind ? 'on' : 'off']('dragleave', f.dragDrop.onDragLeave)
                        }
                        if (f.isUploadMode() && n.clipboardPaste) $(window)[bind ? 'on' : 'off']('paste', f.clipboard.paste);
                        if (n.sorter && n.thumbnails && n.thumbnails._selectors.sorter) f.sorter[bind ? 'init' : 'destroy']();
                        s.closest('form')[bind ? 'on' : 'off']('reset', f.reset)
                    },
                    redesign: function () {
                        o = s;
                        if (n.theme) p.addClass('fileuploader-theme-' + n.theme);
                        if (n.changeInput) {
                            switch ((typeof n.changeInput + "").toLowerCase()) {
                                case 'boolean':
                                    o = $('<div class="fileuploader-input">' + '<div class="fileuploader-input-caption"><span>' + f._assets.textParse(n.captions.feedback) + '</span></div>' + '<div class="fileuploader-input-button"><span>' + f._assets.textParse(n.captions.button) + '</span></div>' + '</div>');
                                    break;
                                case 'string':
                                    if (n.changeInput != ' ') o = $(f._assets.textParse(n.changeInput, n));
                                    break;
                                case 'object':
                                    o = $(n.changeInput);
                                    break;
                                case 'function':
                                    o = $(n.changeInput(s, p, n, f._assets.textParse));
                                    break
                            }
                            s.after(o);
                            s.css({
                                position: "absolute",
                                "z-index": "-9999",
                                height: '0',
                                width: '0',
                                padding: '0',
                                margin: '0',
                                "line-height": '0',
                                outline: '0',
                                border: '0',
                                opacity: '0'
                            })
                        }
                        if (n.thumbnails) f.thumbnails.create();
                        if (n.dragDrop) {
                            n.dragDrop = typeof(n.dragDrop) != 'object' ? {
                                container: null
                            } : n.dragDrop;
                            n.dragDrop.container = n.dragDrop.container ? $(n.dragDrop.container) : o
                        }
                    },
                    clickHandler: function (e) {
                        e.preventDefault();
                        if (f.clipboard._timer) {
                            f.clipboard.clean();
                            return
                        }
                        s.click()
                    },
                    onEvent: function (e) {
                        switch (e.type) {
                            case 'focus':
                                p ? p.addClass('fileuploader-focused') : null;
                                break;
                            case 'blur':
                                p ? p.removeClass('fileuploader-focused') : null;
                                break;
                            case 'change':
                                f.onChange.call(this);
                                break
                        }
                        n.listeners && $.isFunction(n.listeners[e.type]) ? n.listeners[e.type].call(s, p) : null
                    },
                    set: function (type, value) {
                        switch (type) {
                            case 'attrOpts':
                                var d = ['limit', 'maxSize', 'fileMaxSize', 'extensions', 'changeInput', 'theme', 'addMore', 'listInput', 'files'];
                                for (var k = 0; k < d.length; k++) {
                                    var j = 'data-fileuploader-' + d[k];
                                    if (f._assets.hasAttr(j)) {
                                        switch (d[k]) {
                                            case 'changeInput':
                                            case 'addMore':
                                            case 'listInput':
                                                n[d[k]] = (['true', 'false'].indexOf(s.attr(j)) > -1 ? s.attr(j) == 'true' : s.attr(j));
                                                break;
                                            case 'extensions':
                                                n[d[k]] = s.attr(j).replace(/ /g, '').split(',');
                                                break;
                                            case 'files':
                                                n[d[k]] = JSON.parse(s.attr(j));
                                                break;
                                            default:
                                                n[d[k]] = s.attr(j)
                                        }
                                    }
                                    s.removeAttr(j)
                                }
                                if (s.attr('disabled') != null || s.attr('readonly') != null || n.limit === 0) f.disabled = true;
                                if (!n.limit || (n.limit && n.limit >= 2)) {
                                    s.attr('multiple', 'multiple');
                                    n.inputNameBrackets && s.attr('name').slice(-2) != '[]' ? s.attr('name', s.attr('name') + '[]') : null
                                }
                                if (n.listInput === true) {
                                    n.listInput = $('<input type="hidden" name="fileuploader-list-' + s.attr('name').replace('[]', '').split('[').pop().replace(']', '') + '">').insertBefore(s)
                                }
                                if (typeof n.listInput == "string" && $(n.listInput).length == 0) {
                                    n.listInput = $('<input type="hidden" name="' + n.listInput + '">').insertBefore(s)
                                }
                                f.set('disabled', f.disabled);
                                if (!n.fileMaxSize && n.maxSize) n.fileMaxSize = n.maxSize;
                                break;
                            case 'disabled':
                                f.disabled = value;
                                p[f.disabled ? 'addClass' : 'removeClass']('fileuploader-disabled');
                                s[f.disabled ? 'attr' : 'removeAttr']('disabled', 'disabled');
                                if (f.rendered) f.bindUnbindEvents(!value);
                                break;
                            case 'feedback':
                                if (!value) value = f._assets.textParse(f._itFl.length > 0 ? n.captions.feedback2 : n.captions.feedback, {
                                    length: f._itFl.length
                                });
                                $(!o.is(':file')) ? o.find('.fileuploader-input-caption span').html(value) : null;
                                break;
                            case 'input':
                                var el = f._assets.copyAllAttributes($('<input type="file">'), s, true);
                                f.bindUnbindEvents(false);
                                s.after(s = el).remove();
                                f.bindUnbindEvents(true);
                                break;
                            case 'prevInput':
                                if (sl.length > 0) {
                                    f.bindUnbindEvents(false);
                                    sl[value].remove();
                                    sl.splice(value, 1);
                                    s = sl[sl.length - 1];
                                    f.bindUnbindEvents(true)
                                }
                                break;
                            case 'nextInput':
                                var el = f._assets.copyAllAttributes($('<input type="file">'), s);
                                f.bindUnbindEvents(false);
                                if (sl.length > 0 && sl[sl.length - 1].get(0).files.length == 0) {
                                    s = sl[sl.length - 1]
                                } else {
                                    sl.indexOf(s) == -1 ? sl.push(s) : null;
                                    sl.push(el);
                                    s.after(s = el)
                                }
                                f.bindUnbindEvents(true);
                                break;
                            case 'listInput':
                                if (n.listInput) n.listInput.val(f.files.list(true, null, false, value));
                                break
                        }
                    },
                    onChange: function (e, fileList) {
                        var files = s.get(0).files;
                        if (fileList) {
                            if (fileList.length) {
                                files = fileList
                            } else {
                                f.set('input', '');
                                f.files.clear();
                                return false
                            }
                        }
                        if (f.clipboard._timer) f.clipboard.clean();
                        if (f.isDefaultMode()) {
                            f.reset();
                            if (files.length == 0) return
                        }
                        if (n.beforeSelect && $.isFunction(n.beforeSelect) && n.beforeSelect(files, l, p, o, s) == false) {
                            return false
                        }
                        var t = 0;
                        for (var i = 0; i < files.length; i++) {
                            var file = files[i],
                                item = f._itFl[f.files.add(file, 'choosed')],
                                status = f.files.check(item, files, i == 0);
                            if (status !== true) {
                                f.files.remove(item, true);
                                if (!status[2]) {
                                    if (f.isDefaultMode()) {
                                        f.set('input', '');
                                        f.reset();
                                        status[3] = true
                                    }
                                    status[1] ? n.dialogs.alert(status[1], item, l, p, o, s) : null
                                }
                                if (status[3]) {
                                    break
                                }
                                continue
                            }
                            if (n.thumbnails) f.thumbnails.item(item);
                            if (f.isUploadMode()) f.upload.prepare(item);
                            n.onSelect && $.isFunction(n.onSelect) ? n.onSelect(item, l, p, o, s) : null;
                            t++
                        }
                        if (f.isUploadMode() && t > 0) f.set('input', '');
                        f.set('feedback', null);
                        if (f.isAddMoreMode() && t > 0) {
                            f.set('nextInput')
                        }
                        f.set('listInput', null);
                        n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null
                    },
                    thumbnails: {
                        create: function () {
                            n.thumbnails.beforeShow != null && $.isFunction(n.thumbnails.beforeShow) ? n.thumbnails.beforeShow(p, o, s) : null;
                            var box = $(f._assets.textParse(n.thumbnails.box)).appendTo(n.thumbnails.boxAppendTo ? n.thumbnails.boxAppendTo : p);
                            l = !box.is(n.thumbnails._selectors.list) ? box.find(n.thumbnails._selectors.list) : box;
                            if (n.thumbnails._selectors.popup_open) {
                                l.on('click', n.thumbnails._selectors.popup_open, function (e) {
                                    e.preventDefault();
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    if (item && item.html.hasClass('file-has-popup')) f.thumbnails.popup(item)
                                })
                            }
                            if (f.isUploadMode() && n.thumbnails._selectors.start) {
                                l.on('click', n.thumbnails._selectors.start, function (e) {
                                    e.preventDefault();
                                    if (f.locked) return false;
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    if (item) f.upload.send(item, true)
                                })
                            }
                            if (f.isUploadMode() && n.thumbnails._selectors.retry) {
                                l.on('click', n.thumbnails._selectors.retry, function (e) {
                                    e.preventDefault();
                                    if (f.locked) return false;
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m);
                                    if (item) f.upload.retry(item)
                                })
                            }
                            if (n.thumbnails._selectors.remove) {
                                l.on('click', n.thumbnails._selectors.remove, function (e) {
                                    e.preventDefault();
                                    if (f.locked) return false;
                                    var m = $(this).closest(n.thumbnails._selectors.item),
                                        item = f.files.find(m),
                                        c = function (a) {
                                            f.files.remove(item)
                                        };
                                    if (item) {
                                        if (item.upload && item.upload.status != 'successful') {
                                            f.upload.cancel(item)
                                        } else {
                                            if (n.thumbnails.removeConfirmation) {
                                                n.dialogs.confirm(f._assets.textParse(n.captions.removeConfirmation, item), c)
                                            } else {
                                                c()
                                            }
                                        }
                                    }
                                })
                            }
                        },
                        clear: function () {
                            if (l) l.html('')
                        },
                        item: function (item, replaceHtml) {
                            item.icon = f.thumbnails.generateFileIcon(item.format, item.extension);
                            item.image = '<div class="fileuploader-item-image"></div>';
                            item.progressBar = f.isUploadMode() ? '<div class="fileuploader-progressbar"><div class="bar"></div></div>' : '';
                            item.html = $(f._assets.textParse(item.appended && n.thumbnails.item2 ? n.thumbnails.item2 : n.thumbnails.item, item));
                            item.progressBar = item.html.find('.fileuploader-progressbar');
                            item.html.addClass('file-type-' + (item.format ? item.format : 'no') + ' file-ext-' + (item.extension ? item.extension : 'no') + '');
                            if (replaceHtml) replaceHtml.replaceWith(item.html);
                            else item.html[n.thumbnails.itemPrepend ? 'prependTo' : 'appendTo'](l);
                            f.thumbnails.renderThumbnail(item);
                            item.renderThumbnail = function (src) {
                                if (src && item.popup && item.popup.close) {
                                    item.popup.close();
                                    item.popup = {
                                        open: item.popup.open
                                    }
                                }
                                f.thumbnails.renderThumbnail(item, true, src)
                            };
                            if (n.thumbnails.popup) item.popup = {
                                open: function () {
                                    f.thumbnails.popup(item)
                                }
                            };
                            n.thumbnails.onItemShow != null && $.isFunction(n.thumbnails.onItemShow) ? n.thumbnails.onItemShow(item, l, p, o, s) : null
                        },
                        generateFileIcon: function (format, extension) {
                            var el = '<div style="${style}" class="fileuploader-item-icon' + '${class}"><i>' + (extension ? extension : '') + '</i></div>';
                            var bgColor = f._assets.textToColor(extension);
                            if (bgColor) {
                                var isBgColorBright = f._assets.isBrightColor(bgColor);
                                if (isBgColorBright) el = el.replace('${class}', ' is-bright-color');
                                el = el.replace('${style}', 'background-color: ' + bgColor)
                            }
                            return el.replace('${style}', '').replace('${class}', '')
                        },
                        renderThumbnail: function (item, forceRender, src) {
                            var m = item.html.find('.fileuploader-item-image'),
                                readerSkip = item.data && item.data.readerSkip,
                                setImageThumb = function (img) {
                                    var $img = $(img);
                                    m.removeClass('fileuploader-no-thumbnail fileuploader-loading').html($img);
                                    if ($img.is('img')) $img.attr('draggable', 'false').on('load error', function (e) {
                                        if (e.type == 'error') setIconThumb(true);
                                        renderNextItem();
                                        n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null
                                    });
                                    if ($img.is('canvas')) n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null
                                },
                                setIconThumb = function (onImageError) {
                                    m.addClass('fileuploader-no-thumbnail');
                                    m.removeClass('fileuploader-loading').html(item.icon);
                                    if (onImageError) n.thumbnails.onImageLoaded != null && $.isFunction(n.thumbnails.onImageLoaded) ? n.thumbnails.onImageLoaded(item, l, p, o, s) : null
                                },
                                renderNextItem = function () {
                                    var i = 0;
                                    if (item && f._pfrL.indexOf(item) > -1) {
                                        f._pfrL.splice(f._pfrL.indexOf(item), 1);
                                        while (i < f._pfrL.length) {
                                            if (f._itFl.indexOf(f._pfrL[i]) > -1) {
                                                f.thumbnails.renderThumbnail(f._pfrL[i], true);
                                                break
                                            } else {
                                                f._pfrL.splice(i, 1)
                                            }
                                            i++
                                        }
                                    }
                                };
                            if (!m.length) {
                                renderNextItem();
                                return
                            }
                            item.image = m.html('').addClass('fileuploader-loading');
                            if ((['image', 'video', 'audio', 'astext'].indexOf(item.format) > -1 || item.data.thumbnail) && f.isFileReaderSupported() && !readerSkip && (item.appended || n.thumbnails.startImageRenderer || forceRender)) {
                                if (n.thumbnails.synchronImages) {
                                    f._pfrL.indexOf(item) == -1 && !forceRender ? f._pfrL.push(item) : null;
                                    if (f._pfrL.length > 1 && !forceRender) {
                                        return
                                    }
                                }
                                var load = function (data, fromReader) {
                                    var srcIsImg = data.nodeName && data.nodeName.toLocaleLowerCase() == 'img',
                                        src = !srcIsImg ? data : data.src;
                                    if (n.thumbnails.canvasImage) {
                                        var canvas = document.createElement('canvas'),
                                            img = srcIsImg ? data : new Image(),
                                            onload = function () {
                                                f.editor.resize(img, canvas, n.thumbnails.canvasImage.width ? n.thumbnails.canvasImage.width : m.width(), n.thumbnails.canvasImage.height ? n.thumbnails.canvasImage.height : m.height(), false, true);
                                                if (!f._assets.isBlankCanvas(canvas)) {
                                                    setImageThumb(canvas)
                                                } else {
                                                    setIconThumb()
                                                }
                                                renderNextItem()
                                            },
                                            onerror = function (text) {
                                                setIconThumb(true);
                                                renderNextItem();
                                                img = null
                                            };
                                        if (item.format == 'image' && fromReader && item.reader.node) {
                                            img = item.reader.node;
                                            return onload()
                                        }
                                        if (!src) return onerror();
                                        if (srcIsImg) return onload.call(data);
                                        img.onload = onload;
                                        img.onerror = onerror;
                                        if (item.data && item.data.readerCrossOrigin) img.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                        img.src = src
                                    } else {
                                        setImageThumb(srcIsImg ? data : '<img src="' + src + '">')
                                    }
                                };
                                if (typeof src == 'string' || typeof src == 'object') return load(src);
                                else return f.files.read(item, function () {
                                    if (item.reader.node && n.thumbnails.popup) item.html.addClass('file-has-popup');
                                    if (item.reader.node && (item.reader.frame || item.reader.node.nodeName.toLowerCase() == 'img')) {
                                        load(item.reader.frame || item.reader.src, true)
                                    } else {
                                        setIconThumb(item.format == 'image');
                                        renderNextItem()
                                    }
                                }, null, src, true)
                            }
                            setIconThumb()
                        },
                        popup: function (item, isByActions) {
                            if (f.locked || !n.thumbnails.popup || !n.thumbnails._selectors.popup) return;
                            var container = $(n.thumbnails.popup.container),
                                box = container.find('.fileuploader-popup'),
                                hasArrowsClass = 'fileuploader-popup-has-arrows',
                                renderPopup = function () {
                                    var template = item.popup.html || $(f._assets.textParse(n.thumbnails.popup.template, item)),
                                        popupIsNew = item.popup.html !== template,
                                        windowKeyEvent = function (e) {
                                            var key = e.which || e.keyCode;
                                            if (key == 27 && item.popup && item.popup.close) item.popup.close();
                                            if ((key == 37 || key == 39) && n.thumbnails.popup.arrows) item.popup.move(key == 37 ? 'prev' : 'next')
                                        };
                                    box.removeClass('loading');
                                    if (box.children(n.thumbnails._selectors.popup).length) {
                                        $.each(f._itFl, function (i, a) {
                                            if (a != item && a.popup && a.popup.close) {
                                                a.popup.close(isByActions)
                                            }
                                        });
                                        box.find(n.thumbnails._selectors.popup).remove()
                                    }
                                    template.show().appendTo(box);
                                    item.popup.html = template;
                                    item.popup.move = function (to) {
                                        var itemIndex = f._itFl.indexOf(item),
                                            nextItem = null,
                                            itL = false;
                                        if (to == 'prev') {
                                            for (var i = itemIndex; i >= 0; i--) {
                                                var a = f._itFl[i];
                                                if (a != item && a.popup && a.html.hasClass('file-has-popup')) {
                                                    nextItem = a;
                                                    break
                                                }
                                                if (i == 0 && !nextItem && !itL && n.thumbnails.popup.loop) {
                                                    i = f._itFl.length;
                                                    itL = true
                                                }
                                            }
                                        } else {
                                            for (var i = itemIndex; i < f._itFl.length; i++) {
                                                var a = f._itFl[i];
                                                if (a != item && a.popup && a.html.hasClass('file-has-popup')) {
                                                    nextItem = a;
                                                    break
                                                }
                                                if (i + 1 == f._itFl.length && !nextItem && !itL && n.thumbnails.popup.loop) {
                                                    i = -1;
                                                    itL = true
                                                }
                                            }
                                        }
                                        if (nextItem) f.thumbnails.popup(nextItem, true)
                                    };
                                    item.popup.close = function (isByActions) {
                                        if (item.reader.node) {
                                            item.reader.node.pause ? item.reader.node.pause() : null
                                        }
                                        $(window).off('keyup', windowKeyEvent);
                                        container.css({
                                            overflow: '',
                                            width: ''
                                        });
                                        if (item.popup.editor && item.popup.editor.cropper) item.popup.editor.cropper.hide();
                                        item.popup.html && n.thumbnails.popup.onHide && $.isFunction(n.thumbnails.popup.onHide) ? n.thumbnails.popup.onHide(item, l, p, o, s) : (item.popup.html ? item.popup.html.remove() : null);
                                        if (!isByActions) box.fadeOut(400, function () {
                                            box.remove()
                                        });
                                        delete item.popup.close
                                    };
                                    if (item.reader.node) {
                                        if (popupIsNew) template.find('.fileuploader-popup-node').html(item.reader.node);
                                        item.reader.node.controls = true;
                                        item.reader.node.currentTime = 0;
                                        item.reader.node.play ? item.reader.node.play() : null
                                    } else {
                                        template.find('.fileuploader-popup-node').html('<div class="fileuploader-popup-file-icon">' + item.icon + '</div>')
                                    }
                                    $(window).on('keyup', windowKeyEvent);
                                    container.css({
                                        overflow: 'hidden',
                                        width: container.innerWidth()
                                    });
                                    item.popup.html.find('[data-action="prev"], [data-action="next"]').removeAttr('style');
                                    item.popup.html[f._itFl.length == 1 || !n.thumbnails.popup.arrows ? 'removeClass' : 'addClass'](hasArrowsClass);
                                    if (!n.thumbnails.popup.loop) {
                                        if (f._itFl.indexOf(item) == 0) item.popup.html.find('[data-action="prev"]').hide();
                                        if (f._itFl.indexOf(item) == f._itFl.length - 1) item.popup.html.find('[data-action="next"]').hide()
                                    }
                                    if (item.editor && item.popup.editor && item.popup.editor.hasChanges) {
                                        if (item.popup.editor && item.popup.editor.rotation) f.editor.rotate(item, item.editor.rotation || 0, true);
                                        if (item.popup.editor && item.popup.editor.cropper) {
                                            item.popup.editor.cropper.hide(true);
                                            setTimeout(function () {
                                                f.editor.crop(item, item.editor.crop ? $.extend({}, item.editor.crop) : item.popup.editor.cropper.setDefaultData())
                                            }, 100)
                                        }
                                    } else {
                                        item.popup.editor = {}
                                    }
                                    n.thumbnails.popup.onShow && $.isFunction(n.thumbnails.popup.onShow) ? n.thumbnails.popup.onShow(item, l, p, o, s) : null
                                };
                            if (box.length == 0) box = $('<div class="fileuploader-popup"></div>').appendTo(container);
                            box.fadeIn(400).addClass('loading');
                            if (['image', 'video', 'audio', 'astext'].indexOf(item.format) > -1 && !item.popup.html) {
                                f.files.read(item, renderPopup)
                            } else {
                                renderPopup()
                            }
                        }
                    },
                    editor: {
                        rotate: function (item, degrees, force) {
                            var inPopup = item.popup && typeof item.popup.html !== "undefined";
                            if (!inPopup) {
                                var rotation = item.editor.rotation || 0;
                                return item.editor.rotation = degrees ? degrees : rotation + 90
                            } else {
                                if (item.popup.editor.isAnimating) return;
                                item.popup.editor.isAnimating = true;
                                var $popup = item.popup.html,
                                    $node = $popup.find('.fileuploader-popup-node'),
                                    $imageEl = $node.find('> img'),
                                    rotation = item.popup.editor.rotation || 0,
                                    scale = item.popup.editor.scale || 1,
                                    animationObj = {
                                        rotation: rotation,
                                        scale: scale
                                    };
                                if (item.popup.editor.cropper) item.popup.editor.cropper.$template.hide();
                                item.popup.editor.rotation = force ? degrees : rotation + 90;
                                item.popup.editor.scale = ($node.height() / $imageEl[[90, 270].indexOf(item.popup.editor.rotation) > -1 ? 'width' : 'height']()).toFixed(3);
                                if ($imageEl.height() * item.popup.editor.scale > $node.width() && [90, 270].indexOf(item.popup.editor.rotation) > -1) item.popup.editor.scale = $node.width() / $imageEl.height();
                                if (item.popup.editor.scale > 1) item.popup.editor.scale = 1;
                                $(animationObj).animate({
                                    rotation: item.popup.editor.rotation,
                                    scale: item.popup.editor.scale
                                }, {
                                    duration: force ? 1 : 300,
                                    easing: 'swing',
                                    step: function (now, fx) {
                                        var matrix = $imageEl.css('-webkit-transform') || $imageEl.css('-moz-transform') || $imageEl.css('transform') || 'none',
                                            rotation = 0,
                                            scale = 1,
                                            prop = fx.prop;
                                        if (matrix !== 'none') {
                                            var values = matrix.split('(')[1].split(')')[0].split(','),
                                                a = values[0],
                                                b = values[1];
                                            rotation = prop == 'rotation' ? now : Math.round(Math.atan2(b, a) * (180 / Math.PI));
                                            scale = prop == 'scale' ? now : Math.round(Math.sqrt(a * a + b * b) * 10) / 10
                                        }
                                        $imageEl.css({
                                            '-webkit-transform': 'rotate(' + rotation + 'deg) scale(' + scale + ')',
                                            '-moz-transform': 'rotate(' + rotation + 'deg) scale(' + scale + ')',
                                            'transform': 'rotate(' + rotation + 'deg) scale(' + scale + ')'
                                        })
                                    },
                                    always: function () {
                                        delete item.popup.editor.isAnimating;
                                        if (item.popup.editor.cropper && !force) {
                                            item.popup.editor.cropper.setDefaultData();
                                            item.popup.editor.cropper.init('rotation')
                                        }
                                    }
                                });
                                if (item.popup.editor.rotation >= 360) item.popup.editor.rotation = 0;
                                if (item.popup.editor.rotation != item.editor.rotation) item.popup.editor.hasChanges = true
                            }
                        },
                        crop: function (item, data) {
                            var inPopup = item.popup && typeof item.popup.html !== "undefined";
                            if (!inPopup) {
                                return item.editor.crop = data || item.editor.crop
                            } else {
                                if (!item.popup.editor.cropper) {
                                    var template = '<div class="fileuploader-cropper">' + '<div class="fileuploader-cropper-area">' + '<div class="point point-a"></div>' + '<div class="point point-b"></div>' + '<div class="point point-c"></div>' + '<div class="point point-d"></div>' + '<div class="point point-e"></div>' + '<div class="point point-f"></div>' + '<div class="point point-g"></div>' + '<div class="point point-h"></div>' + '<div class="area-move"></div>' + '<div class="area-image"></div>' + '</div>' + '</div>',
                                        $popup = item.popup.html,
                                        $imageEl = $popup.find('.fileuploader-popup-node > img'),
                                        $template = $(template),
                                        $editor = $template.find('.fileuploader-cropper-area');
                                    item.popup.editor.cropper = {
                                        $imageEl: $imageEl,
                                        $template: $template,
                                        $editor: $editor,
                                        isCropping: false,
                                        crop: data || null,
                                        init: function (data) {
                                            var cropper = item.popup.editor.cropper,
                                                position = cropper.$imageEl.position(),
                                                width = cropper.$imageEl[0].getBoundingClientRect().width,
                                                height = cropper.$imageEl[0].getBoundingClientRect().height,
                                                isInverted = item.popup.editor.rotation && [90, 270].indexOf(item.popup.editor.rotation) > -1,
                                                scale = isInverted ? item.popup.editor.scale : 1;
                                            cropper.hide();
                                            if (!cropper.crop) cropper.setDefaultData();
                                            if (width == 0 || height == 0) return cropper.hide(true);
                                            if (!cropper.isCropping) {
                                                cropper.$imageEl.clone().appendTo(cropper.$template.find('.area-image'));
                                                cropper.$imageEl.parent().append($template)
                                            }
                                            cropper.$template.hide().css({
                                                left: position.left,
                                                top: position.top,
                                                width: width,
                                                height: height
                                            }).fadeIn(150);
                                            cropper.$editor.hide();
                                            clearTimeout(cropper._editorAnimationTimeout);
                                            cropper._editorAnimationTimeout = setTimeout(function () {
                                                delete cropper._editorAnimationTimeout;
                                                cropper.$editor.fadeIn(250);
                                                if (item.editor.crop && $.isPlainObject(data)) {
                                                    cropper.resize();
                                                    cropper.crop.left = cropper.crop.left * cropper.crop.cfWidth * scale;
                                                    cropper.crop.width = cropper.crop.width * cropper.crop.cfWidth * scale;
                                                    cropper.crop.top = cropper.crop.top * cropper.crop.cfHeight * scale;
                                                    cropper.crop.height = cropper.crop.height * cropper.crop.cfHeight * scale
                                                }
                                                if ((!item.editor.crop || data == 'rotation') && (n.editor.cropper && n.editor.cropper.ratio && data != 'resize')) {
                                                    var ratio = n.editor.cropper.ratio,
                                                        ratioPx = f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio);
                                                    if (ratioPx) {
                                                        cropper.crop.width = Math.min(cropper.crop.width, ratioPx[0]);
                                                        cropper.crop.left = (cropper.$template.width() - cropper.crop.width) / 2;
                                                        cropper.crop.height = Math.min(cropper.crop.height, ratioPx[1]);
                                                        cropper.crop.top = (cropper.$template.height() - cropper.crop.height) / 2
                                                    }
                                                }
                                                cropper.drawPlaceHolder(cropper.crop)
                                            }, 400);
                                            if (!cropper.isCropping) cropper.$template.on('drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel', function (e) {
                                                e.preventDefault()
                                            });
                                            if (n.editor.cropper && n.editor.cropper.showGrid) cropper.$editor.addClass('has-grid');
                                            cropper.$imageEl.attr('draggable', 'false');
                                            cropper.$template.on('mousedown touchstart', cropper.mousedown);
                                            $(window).on('resize', cropper.resize);
                                            cropper.isCropping = true;
                                            item.popup.editor.hasChanges = true
                                        },
                                        setDefaultData: function () {
                                            var cropper = item.popup.editor.cropper,
                                                $imageEl = cropper.$imageEl,
                                                width = $imageEl.width(),
                                                height = $imageEl.height(),
                                                isInverted = item.popup.editor.rotation && [90, 270].indexOf(item.popup.editor.rotation) > -1,
                                                scale = item.popup.editor.scale || 1;
                                            cropper.crop = {
                                                left: 0,
                                                top: 0,
                                                width: isInverted ? height * scale : width,
                                                height: isInverted ? width * scale : height,
                                                cfWidth: width / cropper.$imageEl.prop('naturalWidth'),
                                                cfHeight: height / cropper.$imageEl.prop('naturalHeight')
                                            };
                                            return null
                                        },
                                        hide: function (force) {
                                            var cropper = item.popup.editor.cropper;
                                            if (force) {
                                                cropper.$template.hide();
                                                cropper.$editor.hide()
                                            }
                                            cropper.$imageEl.attr('draggable', '');
                                            cropper.$template.off('mousedown touchstart', cropper.mousedown);
                                            $(window).off('resize', cropper.resize)
                                        },
                                        resize: function (e) {
                                            var cropper = item.popup.editor.cropper,
                                                $imageEl = cropper.$imageEl;
                                            if ($imageEl.width() > 0) {
                                                if (!e) {
                                                    cropper.crop.cfWidth = $imageEl.width() / $imageEl.prop('naturalWidth');
                                                    cropper.crop.cfHeight = $imageEl.height() / $imageEl.prop('naturalHeight')
                                                } else {
                                                    cropper.$template.hide();
                                                    clearTimeout(cropper._resizeTimeout);
                                                    cropper._resizeTimeout = setTimeout(function () {
                                                        delete cropper._resizeTimeout;
                                                        var cfWidth = $imageEl.width() / $imageEl.prop('naturalWidth'),
                                                            cfHeight = $imageEl.height() / $imageEl.prop('naturalHeight');
                                                        cropper.crop.left = cropper.crop.left / cropper.crop.cfWidth * cfWidth;
                                                        cropper.crop.width = cropper.crop.width / cropper.crop.cfWidth * cfWidth;
                                                        cropper.crop.top = cropper.crop.top / cropper.crop.cfHeight * cfHeight;
                                                        cropper.crop.height = cropper.crop.height / cropper.crop.cfHeight * cfHeight;
                                                        cropper.crop.cfWidth = cfWidth;
                                                        cropper.crop.cfHeight = cfHeight;
                                                        cropper.init('resize')
                                                    }, 500)
                                                }
                                            }
                                        },
                                        drawPlaceHolder: function (css) {
                                            var cropper = item.popup.editor.cropper,
                                                rotation = item.popup.editor.rotation || 0,
                                                scale = item.popup.editor.scale || 1,
                                                translate = [0, 0];
                                            if (!css) return;
                                            css = $.extend({}, css);
                                            if (rotation) translate = [rotation == 180 || rotation == 270 ? -100 : 0, rotation == 90 || rotation == 180 ? -100 : 0];
                                            cropper.$editor.css(css);
                                            cropper.$editor.find('.area-image img').removeAttr('style').css({
                                                width: cropper.$imageEl.width(),
                                                height: cropper.$imageEl.height(),
                                                left: cropper.$editor.position().left * -1,
                                                top: cropper.$editor.position().top * -1,
                                                '-webkit-transform': 'rotate(' + rotation + 'deg) scale(' + scale + ') translateX(' + translate[0] + '%) translateY(' + translate[1] + '%)',
                                                '-moz-transform': 'rotate(' + rotation + 'deg) scale(' + scale + ') translateX(' + translate[0] + '%) translateY(' + translate[1] + '%)',
                                                'transform': 'rotate(' + rotation + 'deg) scale(' + scale + ') translateX(' + translate[0] + '%) translateY(' + translate[1] + '%)'
                                            })
                                        },
                                        mousedown: function (e) {
                                            var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                                $target = $(e.target),
                                                cropper = item.popup.editor.cropper,
                                                points = {
                                                    x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
                                                    y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
                                                },
                                                callback = function () {
                                                    cropper.pointData = {
                                                        el: $target,
                                                        x: points.x,
                                                        y: points.y,
                                                        xEditor: points.x - cropper.crop.left,
                                                        yEditor: points.y - cropper.crop.top,
                                                        left: cropper.crop.left,
                                                        top: cropper.crop.top,
                                                        width: cropper.crop.width,
                                                        height: cropper.crop.height
                                                    };
                                                    if ($target.is('.area-move')) cropper.isMoving = true;
                                                    if ($target.is('.point')) cropper.isResizing = true;
                                                    if (cropper.isMoving || cropper.isResizing) {
                                                        cropper.$editor.addClass('moving');
                                                        $('body').css({
                                                            '-webkit-user-select': 'none',
                                                            '-moz-user-select': 'none',
                                                            '-ms-user-select': 'none',
                                                            'user-select': 'none'
                                                        });
                                                        $(window).on('mousemove touchmove', cropper.mousemove)
                                                    }
                                                };
                                            if (eventType == 'mousedown') {
                                                callback()
                                            }
                                            if (eventType == 'touchstart') {
                                                cropper.isTouchLongPress = true;
                                                setTimeout(function () {
                                                    if (!cropper.isTouchLongPress) return;
                                                    delete cropper.isTouchLongPress;
                                                    callback()
                                                }, 500)
                                            }
                                            $(window).on('mouseup touchend', cropper.mouseup)
                                        },
                                        mousemove: function (e) {
                                            var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                                $target = $(e.target),
                                                cropper = item.popup.editor.cropper,
                                                points = {
                                                    x: (eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX) - cropper.$template.offset().left,
                                                    y: (eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY) - cropper.$template.offset().top
                                                };
                                            if (cropper.isMoving) {
                                                var left = points.x - cropper.pointData.xEditor,
                                                    top = points.y - cropper.pointData.yEditor;
                                                if (left + cropper.crop.width > cropper.$template.width()) left = cropper.$template.width() - cropper.crop.width;
                                                if (left < 0) left = 0;
                                                if (top + cropper.crop.height > cropper.$template.height()) top = cropper.$template.height() - cropper.crop.height;
                                                if (top < 0) top = 0;
                                                cropper.crop.left = left;
                                                cropper.crop.top = top
                                            }
                                            if (cropper.isResizing) {
                                                var point = cropper.pointData.el.attr('class').substr("point point-".length),
                                                    lastWidth = cropper.crop.left + cropper.crop.width,
                                                    lastHeight = cropper.crop.top + cropper.crop.height,
                                                    minWidth = (n.editor.cropper && n.editor.cropper.minWidth || 0) * cropper.crop.cfWidth,
                                                    minHeight = (n.editor.cropper && n.editor.cropper.minHeight || 0) * cropper.crop.cfHeight,
                                                    ratio = n.editor.cropper ? n.editor.cropper.ratio : null,
                                                    ratioPx;
                                                if (minWidth > cropper.$template.width()) minWidth = cropper.$template.width();
                                                if (minHeight > cropper.$template.height()) minHeight = cropper.$template.height();
                                                if ((point == 'a' || point == 'b' || point == 'c') && !ratioPx) {
                                                    cropper.crop.top = points.y;
                                                    if (cropper.crop.top < 0) cropper.crop.top = 0;
                                                    cropper.crop.height = lastHeight - cropper.crop.top;
                                                    if (cropper.crop.top > cropper.crop.top + cropper.crop.height) {
                                                        cropper.crop.top = lastHeight;
                                                        cropper.crop.height = 0
                                                    }
                                                    if (cropper.crop.height < minHeight) {
                                                        cropper.crop.top = lastHeight - minHeight;
                                                        cropper.crop.height = minHeight
                                                    }
                                                    ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
                                                    if (ratioPx) {
                                                        cropper.crop.width = ratioPx[0];
                                                        if (point == 'a' || point == 'b') cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'b' ? 2 : 1)));
                                                        if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
                                                            var newWidth = cropper.$template.width() - cropper.crop.left;
                                                            cropper.crop.width = newWidth;
                                                            cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3];
                                                            cropper.crop.top = lastHeight - cropper.crop.height
                                                        }
                                                    }
                                                }
                                                if ((point == 'e' || point == 'f' || point == 'g') && !ratioPx) {
                                                    cropper.crop.height = points.y - cropper.crop.top;
                                                    if (cropper.crop.height + cropper.crop.top > cropper.$template.height()) cropper.crop.height = cropper.$template.height() - cropper.crop.top;
                                                    if (cropper.crop.height < minHeight) cropper.crop.height = minHeight;
                                                    ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
                                                    if (ratioPx) {
                                                        cropper.crop.width = ratioPx[0];
                                                        if (point == 'f' || point == 'g') cropper.crop.left = Math.max(0, cropper.pointData.left + ((cropper.pointData.width - cropper.crop.width) / (point == 'f' ? 2 : 1)));
                                                        if (cropper.crop.left + cropper.crop.width > cropper.$template.width()) {
                                                            var newWidth = cropper.$template.width() - cropper.crop.left;
                                                            cropper.crop.width = newWidth;
                                                            cropper.crop.height = newWidth / ratioPx[2] * ratioPx[3]
                                                        }
                                                    }
                                                }
                                                if ((point == 'c' || point == 'd' || point == 'e') && !ratioPx) {
                                                    cropper.crop.width = points.x - cropper.crop.left;
                                                    if (cropper.crop.width + cropper.crop.left > cropper.$template.width()) cropper.crop.width = cropper.$template.width() - cropper.crop.left;
                                                    if (cropper.crop.width < minWidth) cropper.crop.width = minWidth;
                                                    ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
                                                    if (ratioPx) {
                                                        cropper.crop.height = ratioPx[1];
                                                        if (point == 'c' || point == 'd') cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'd' ? 2 : 1)));
                                                        if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
                                                            var newHeight = cropper.$template.height() - cropper.crop.top;
                                                            cropper.crop.height = newHeight;
                                                            cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2]
                                                        }
                                                    }
                                                }
                                                if ((point == 'a' || point == 'g' || point == 'h') && !ratioPx) {
                                                    cropper.crop.left = points.x;
                                                    if (cropper.crop.left > cropper.$template.width()) cropper.crop.left = cropper.$template.width();
                                                    if (cropper.crop.left < 0) cropper.crop.left = 0;
                                                    cropper.crop.width = lastWidth - cropper.crop.left;
                                                    if (cropper.crop.left > cropper.crop.left + cropper.crop.width) {
                                                        cropper.crop.left = lastWidth;
                                                        cropper.crop.width = 0
                                                    }
                                                    if (cropper.crop.width < minWidth) {
                                                        cropper.crop.left = lastWidth - minWidth;
                                                        cropper.crop.width = minWidth
                                                    }
                                                    ratioPx = ratio ? f._assets.ratioToPx(cropper.crop.width, cropper.crop.height, ratio) : null;
                                                    if (ratioPx) {
                                                        cropper.crop.height = ratioPx[1];
                                                        if (point == 'a' || point == 'h') cropper.crop.top = Math.max(0, cropper.pointData.top + ((cropper.pointData.height - cropper.crop.height) / (point == 'h' ? 2 : 1)));
                                                        if (cropper.crop.top + cropper.crop.height > cropper.$template.height()) {
                                                            var newHeight = cropper.$template.height() - cropper.crop.top;
                                                            cropper.crop.height = newHeight;
                                                            cropper.crop.width = newHeight / ratioPx[3] * ratioPx[2];
                                                            cropper.crop.left = lastWidth - cropper.crop.width
                                                        }
                                                    }
                                                }
                                            }
                                            cropper.drawPlaceHolder(cropper.crop)
                                        },
                                        mouseup: function (e) {
                                            var cropper = item.popup.editor.cropper;
                                            if (cropper.$editor.width() == 0 || cropper.$editor.height() == 0) cropper.init(cropper.setDefaultData());
                                            delete cropper.isTouchLongPress;
                                            delete cropper.isMoving;
                                            delete cropper.isResizing;
                                            cropper.$editor.removeClass('moving');
                                            $('body').css({
                                                '-webkit-user-select': '',
                                                '-moz-user-select': '',
                                                '-ms-user-select': '',
                                                'user-select': ''
                                            });
                                            $(window).off('mousemove touchmove', cropper.mousemove);
                                            $(window).off('mouseup touchend', cropper.mouseup)
                                        }
                                    };
                                    item.popup.editor.cropper.init()
                                } else {
                                    if (data) item.popup.editor.cropper.crop = data;
                                    item.popup.editor.cropper.init(data)
                                }
                            }
                        },
                        resize: function (img, canvas, width, height, alpha, fixedSize) {
                            var context = canvas.getContext('2d'),
                                width = !width && height ? height * img.width / img.height : width,
                                height = !height && width ? width * img.height / img.width : height,
                                ratio = img.width / img.height,
                                optimalWidth = ratio >= 1 ? width : height * ratio,
                                optimalHeight = ratio < 1 ? height : width / ratio;
                            if (fixedSize && optimalWidth < width) {
                                optimalHeight = optimalHeight * (width / optimalWidth);
                                optimalWidth = width
                            }
                            if (fixedSize && optimalHeight < height) {
                                optimalWidth = optimalWidth * (height / optimalHeight);
                                optimalHeight = height
                            }
                            var steps = Math.min(Math.ceil(Math.log(img.width / optimalWidth) / Math.log(2)), 12);
                            canvas.width = optimalWidth;
                            canvas.height = optimalHeight;
                            if (img.width < canvas.width || img.height < canvas.height || steps < 2) {
                                if (!fixedSize) {
                                    canvas.width = Math.min(img.width, canvas.width);
                                    canvas.height = Math.min(img.height, canvas.height)
                                }
                                var x = img.width < canvas.width ? (canvas.width - img.width) / 2 : 0,
                                    y = img.height < canvas.height ? (canvas.height - img.height) / 2 : 0;
                                if (!alpha) {
                                    context.fillStyle = "#fff";
                                    context.fillRect(0, 0, canvas.width, canvas.height)
                                }
                                context.drawImage(img, x, y, Math.min(img.width, canvas.width), Math.min(img.height, canvas.height))
                            } else {
                                var oc = document.createElement('canvas'),
                                    octx = oc.getContext('2d'),
                                    factor = 2;
                                oc.width = img.width / factor;
                                oc.height = img.height / factor;
                                octx.fillStyle = "#fff";
                                octx.fillRect(0, 0, oc.width, oc.height);
                                octx.drawImage(img, 0, 0, img.width / 2, img.height / 2);
                                while (steps > 2) {
                                    var factor2 = factor + 2,
                                        widthFactor = img.width / factor,
                                        heightFactor = img.height / factor;
                                    if (widthFactor > oc.width) widthFactor = oc.width;
                                    if (heightFactor > oc.height) heightFactor = oc.height;
                                    octx.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, img.width / factor2, img.height / factor2);
                                    factor = factor2;
                                    steps--
                                }
                                var widthFactor = img.width / factor,
                                    heightFactor = img.height / factor;
                                if (widthFactor > oc.width) widthFactor = oc.width;
                                if (heightFactor > oc.height) heightFactor = oc.height;
                                context.drawImage(oc, 0, 0, widthFactor, heightFactor, 0, 0, optimalWidth, optimalHeight);
                                oc = octx = null
                            }
                            context = null
                        },
                        save: function (item, toBlob, mimeType, callback, preventThumbnailRender) {
                            var inPopup = item.popup && typeof item.popup.html !== "undefined";
                            if (inPopup) {
                                if (!item.popup.editor.hasChanges) return;
                                var scale = item.popup.editor.scale || 1;
                                item.editor.rotation = item.popup.editor.rotation || 0;
                                if (item.popup.editor.cropper) {
                                    item.editor.crop = item.popup.editor.cropper.crop;
                                    item.editor.crop.width = item.editor.crop.width / item.popup.editor.cropper.crop.cfWidth / scale;
                                    item.editor.crop.left = item.editor.crop.left / item.popup.editor.cropper.crop.cfWidth / scale;
                                    item.editor.crop.height = item.editor.crop.height / item.popup.editor.cropper.crop.cfHeight / scale;
                                    item.editor.crop.top = item.editor.crop.top / item.popup.editor.cropper.crop.cfHeight / scale
                                }
                            }
                            var canvas = document.createElement('canvas'),
                                ctx = canvas.getContext('2d'),
                                image = item.reader.node,
                                rotationCf = [0, 180];
                            canvas.width = image.naturalWidth;
                            canvas.height = image.naturalHeight;
                            ctx.drawImage(image, 0, 0);
                            if (typeof item.editor.rotation != 'undefined') {
                                item.editor.rotation = item.editor.rotation || 0;
                                canvas.width = rotationCf.indexOf(item.editor.rotation) > -1 ? image.naturalWidth : image.naturalHeight;
                                canvas.height = rotationCf.indexOf(item.editor.rotation) > -1 ? image.naturalHeight : image.naturalWidth;
                                var angle = item.editor.rotation * Math.PI / 180,
                                    cw = canvas.width * 0.5,
                                    ch = canvas.height * 0.5;
                                ctx.clearRect(0, 0, canvas.width, canvas.height);
                                ctx.translate(cw, ch);
                                ctx.rotate(angle);
                                ctx.translate(-image.naturalWidth * 0.5, -image.naturalHeight * 0.5);
                                ctx.drawImage(image, 0, 0);
                                ctx.setTransform(1, 0, 0, 1, 0, 0)
                            }
                            if (item.editor.crop) {
                                var cut = ctx.getImageData(item.editor.crop.left, item.editor.crop.top, item.editor.crop.width, item.editor.crop.height);
                                canvas.width = item.editor.crop.width;
                                canvas.height = item.editor.crop.height;
                                ctx.putImageData(cut, 0, 0)
                            }
                            var type = mimeType || item.type || 'image/jpeg',
                                quality = n.editor.quality || 90,
                                exportDataURI = canvas.toDataURL(type, quality / 100),
                                nextStep = function (exportDataURI, img) {
                                    var data = !toBlob ? exportDataURI : f._assets.dataURItoBlob(exportDataURI, type);
                                    inPopup && !preventThumbnailRender ? f.thumbnails.renderThumbnail(item, true, img || exportDataURI) : null;
                                    callback ? callback(data, item, l, p, o, s) : null;
                                    n.editor.onSave != null && typeof n.editor.onSave == "function" ? n.editor.onSave(data, item, l, p, o, s) : null;
                                    f.set('listInput', null)
                                };
                            if (n.editor.maxWidth || n.editor.maxHeight) {
                                var img = new Image();
                                img.src = exportDataURI;
                                img.onload = function () {
                                    var canvas2 = document.createElement('canvas');
                                    f.editor.resize(img, canvas2, n.editor.maxWidth, n.editor.maxHeight, true, false);
                                    exportDataURI = canvas2.toDataURL(type, quality / 100);
                                    canvas = ctx = canvas2 = null;
                                    nextStep(exportDataURI, img)
                                }
                            } else {
                                canvas = ctx = null;
                                nextStep(exportDataURI)
                            }
                        }
                    },
                    sorter: {
                        init: function () {
                            p.on('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown)
                        },
                        destroy: function () {
                            p.off('mousedown touchstart', n.thumbnails._selectors.sorter, f.sorter.mousedown)
                        },
                        prevent: function (e) {
                            if (e === true) return 'click drop dragend dragleave dragover dragenter dragstart touchstart touchmove touchend touchcancel';
                            e.preventDefault()
                        },
                        mousedown: function (e) {
                            var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                $target = $(e.target),
                                $item = $target.closest(n.thumbnails._selectors.item),
                                item = f.files.find($item),
                                points = {
                                    x: eventType == 'mousedown' || !$item.length ? e.pageX : e.originalEvent.touches[0].pageX,
                                    y: eventType == 'mousedown' || !$item.length ? e.pageY : e.originalEvent.touches[0].pageY
                                },
                                callback = function () {
                                    f.sorter.sort = {
                                        el: $target,
                                        item: item,
                                        items: l.find(n.thumbnails._selectors.item),
                                        x: points.x,
                                        y: points.y,
                                        xItem: points.x - $item.offset().left,
                                        yItem: points.y - $item.offset().top,
                                        left: $item.position().left,
                                        top: $item.position().top,
                                        width: $item.outerWidth(),
                                        height: $item.outerHeight(),
                                        placeholder: n.sorter.placeholder ? $(n.sorter.placeholder) : item.html.clone().addClass('fileuploader-sorter-placeholder').html('')
                                    };
                                    $('body').css({
                                        '-webkit-user-select': 'none',
                                        '-moz-user-select': 'none',
                                        '-ms-user-select': 'none',
                                        'user-select': 'none'
                                    });
                                    $(window).on('mousemove touchmove', f.sorter.mousemove)
                                };
                            if (f.sorter.sort) f.sorter.mouseup();
                            if (!item) return;
                            if (n.sorter.selectorExclude && ($target.is(n.sorter.selectorExclude) || $target.closest(n.sorter.selectorExclude).length)) return;
                            p.on(f.sorter.prevent(true), n.thumbnails._selectors.sorter, f.sorter.prevent);
                            if (eventType == 'mousedown') {
                                callback()
                            }
                            if (eventType == 'touchstart') {
                                f.sorter.isTouchLongPress = true;
                                setTimeout(function () {
                                    if (!f.sorter.isTouchLongPress) return;
                                    delete f.sorter.isTouchLongPress;
                                    callback()
                                }, 500)
                            }
                            $(window).on('mouseup touchend', f.sorter.mouseup)
                        },
                        findItemAtPos: function (points) {
                            var sort = f.sorter.sort,
                                $list = sort.items.not(sort.item.html),
                                $item = null;
                            $list.each(function (i, el) {
                                var $el = $(el);
                                if (points.x > $el.offset().left && points.x < $el.offset().left + $el.outerWidth() && points.y > $el.offset().top && points.y < $el.offset().top + $el.outerHeight()) {
                                    $item = $el;
                                    return false
                                }
                            });
                            return $item
                        },
                        mousemove: function (e) {
                            var eventType = e.originalEvent.touches && e.originalEvent.touches[0] ? 'touchstart' : 'mousedown',
                                sort = f.sorter.sort,
                                item = sort.item,
                                $list = l.find(n.thumbnails._selectors.item),
                                $container = $(n.sorter.scrollContainer || window),
                                scroll = {
                                    left: $container.scrollLeft(),
                                    top: $container.scrollTop()
                                },
                                points = {
                                    x: eventType == 'mousedown' ? e.pageX : e.originalEvent.touches[0].pageX,
                                    y: eventType == 'mousedown' ? e.pageY : e.originalEvent.touches[0].pageY
                                };
                            var left = points.x - sort.xItem - scroll.left,
                                top = points.y - sort.yItem - scroll.top;
                            if (left + sort.xItem > $container.width()) left = $container.width() - sort.xItem;
                            if (left < 0 - sort.xItem) left = 0 - sort.xItem;
                            if (top + sort.yItem > $container.height()) top = $container.height() - sort.yItem;
                            if (top < 0 - sort.yItem) top = 0 - sort.yItem;
                            item.html.addClass('sorting').css({
                                position: 'fixed',
                                left: left,
                                top: top,
                                width: f.sorter.sort.width,
                                height: f.sorter.sort.height
                            });
                            if (!l.find(sort.placeholder).length) item.html.after(sort.placeholder);
                            sort.placeholder.css({
                                width: f.sorter.sort.width,
                                height: f.sorter.sort.height,
                            });
                            var $hoverEl = f.sorter.findItemAtPos({
                                x: left + sort.xItem + scroll.left,
                                y: top + sort.yItem + scroll.top
                            });
                            if ($hoverEl) {
                                var directionX = sort.placeholder.offset().left != $hoverEl.offset().left,
                                    directionY = sort.placeholder.offset().top != $hoverEl.offset().top;
                                if (f.sorter.sort.lastHover) {
                                    if (f.sorter.sort.lastHover.el == $hoverEl[0]) {
                                        if (directionY && f.sorter.sort.lastHover.direction == 'before' && points.y < f.sorter.sort.lastHover.y) return;
                                        if (directionY && f.sorter.sort.lastHover.direction == 'after' && points.y > f.sorter.sort.lastHover.y) return;
                                        if (directionX && f.sorter.sort.lastHover.direction == 'before' && points.x < f.sorter.sort.lastHover.x) return;
                                        if (directionX && f.sorter.sort.lastHover.direction == 'after' && points.x > f.sorter.sort.lastHover.x) return
                                    }
                                }
                                var index = $list.index(item.html),
                                    hoverIndex = $list.index($hoverEl),
                                    direction = index > hoverIndex ? 'before' : 'after';
                                $hoverEl[direction](sort.placeholder);
                                $hoverEl[direction](item.html);
                                f.sorter.sort.lastHover = {
                                    el: $hoverEl[0],
                                    x: points.x,
                                    y: points.y,
                                    direction: direction
                                };
                                $container.scrollLeft(scroll.left);
                                $container.scrollTop(scroll.top)
                            }
                        },
                        mouseup: function () {
                            var sort = f.sorter.sort,
                                item = sort.item;
                            $('body').css({
                                '-webkit-user-select': '',
                                '-moz-user-select': '',
                                '-ms-user-select': '',
                                'user-select': ''
                            });
                            item.html.removeClass('sorting').css({
                                position: '',
                                left: '',
                                top: '',
                                width: '',
                                height: ''
                            });
                            sort.placeholder.remove();
                            delete f.sorter.sort;
                            p.off(f.sorter.prevent(true), n.thumbnails._selectors.sorter, f.sorter.prevent);
                            $(window).off('mousemove touchmove', f.sorter.mousemove);
                            $(window).off('mouseup touchend', f.sorter.mouseup);
                            f.sorter.save()
                        },
                        save: function (isFromList) {
                            var index = 0,
                                list = [],
                                hasChanges = f.rendered && isFromList;
                            $.each(isFromList ? f._itFl : l.children(), function (i, el) {
                                var item = el.file ? el : f.files.find($(el));
                                if (item) {
                                    if (item.upload && !item.uploaded) {
                                        hasChanges = false;
                                        return false
                                    }
                                    if (f.rendered && item.index != index) hasChanges = true;
                                    item.index = index;
                                    list.push(item);
                                    index++
                                }
                            });
                            if (hasChanges && list.length == f._itFl.length) f._itFl = list;
                            if (!isFromList) f.set('listInput', 'ignoreSorter');
                            hasChanges && n.sorter.onSort != null && typeof n.sorter.onSort == "function" ? n.sorter.onSort(list, l, p, o, s) : null
                        }
                    },
                    upload: {
                        prepare: function (item, force_send) {
                            item.upload = {
                                url: n.upload.url,
                                data: n.upload.data || {},
                                formData: new FormData(),
                                type: n.upload.type || 'POST',
                                enctype: n.upload.enctype || 'multipart/form-data',
                                cache: false,
                                contentType: false,
                                processData: false,
                                status: null,
                                send: function () {
                                    f.upload.send(item, true)
                                },
                                cancel: function (isFromRemove) {
                                    f.upload.cancel(item, isFromRemove)
                                },
                                retry: function () {
                                    f.upload.retry(item)
                                }
                            };
                            item.upload.formData.append(s.attr('name'), item.file, (item.name ? item.name : false));
                            if (n.upload.start || force_send) f.upload.send(item, force_send)
                        },
                        send: function (item, force_send) {
                            if (!item.upload) return;
                            var setItemUploadStatus = function (status) {
                                    item.html.removeClass('upload-pending upload-loading upload-cancelled upload-failed upload-success').addClass('upload-' + (status || item.upload.status))
                                },
                                loadNextItem = function () {
                                    var i = 0;
                                    if (f._pfuL.length > 0) {
                                        f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
                                        while (i < f._pfuL.length) {
                                            if (f._itFl.indexOf(f._pfuL[i]) > -1 && f._pfuL[i].upload && !f._pfuL[i].upload.$ajax) {
                                                f.upload.send(f._pfuL[i], true);
                                                break
                                            } else {
                                                f._pfuL.splice(i, 1)
                                            }
                                            i++
                                        }
                                    }
                                };
                            if (n.upload.synchron && !item.upload.chunk) {
                                item.upload.status = 'pending';
                                if (item.html) setItemUploadStatus();
                                if (force_send) {
                                    f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null
                                } else {
                                    f._pfuL.indexOf(item) == -1 ? f._pfuL.push(item) : null;
                                    if (f._pfuL.length > 1) {
                                        return
                                    }
                                }
                            }
                            if (n.upload.chunk && item.file.slice) {
                                var chunkSize = n.upload.chunk * 1e+6,
                                    chunks = Math.ceil(item.size / chunkSize, chunkSize);
                                if (chunks > 1 && !item.upload.chunk) item.upload.chunk = {
                                    name: item.name,
                                    size: item.file.size,
                                    type: item.file.type,
                                    chunkSize: chunkSize,
                                    temp_name: item.name,
                                    loaded: 0,
                                    total: chunks,
                                    i: -1
                                };
                                if (item.upload.chunk) {
                                    item.upload.chunk.i++;
                                    delete item.upload.chunk.isFirst;
                                    delete item.upload.chunk.isLast;
                                    if (item.upload.chunk.i == 0) item.upload.chunk.isFirst = true;
                                    if (item.upload.chunk.i == item.upload.chunk.total - 1) item.upload.chunk.isLast = true;
                                    if (item.upload.chunk.i <= item.upload.chunk.total - 1) {
                                        var offset = item.upload.chunk.i * item.upload.chunk.chunkSize,
                                            filePart = item.file.slice(offset, offset + item.upload.chunk.chunkSize);
                                        item.upload.data = n.upload.data || {};
                                        item.upload.formData = new FormData();
                                        item.upload.formData.append(s.attr('name'), filePart);
                                        item.upload.data._chunkedd = JSON.stringify(item.upload.chunk)
                                    } else {
                                        delete item.upload.chunk
                                    }
                                }
                            }
                            if (n.upload.beforeSend && $.isFunction(n.upload.beforeSend) && n.upload.beforeSend(item, l, p, o, s) === false) {
                                delete item.upload.chunk;
                                setItemUploadStatus();
                                loadNextItem();
                                return
                            }
                            p.addClass('fileuploader-is-uploading');
                            if (item.upload.$ajax) item.upload.$ajax.abort();
                            delete item.upload.$ajax;
                            delete item.upload.send;
                            item.upload.status = 'loading';
                            if (item.html) {
                                if (n.thumbnails._selectors.start) item.html.find(n.thumbnails._selectors.start).remove();
                                setItemUploadStatus()
                            }
                            if (item.upload.data) {
                                for (var k in item.upload.data) {
                                    item.upload.formData.append(k, item.upload.data[k])
                                }
                            }
                            item.upload.data = item.upload.formData;
                            item.upload.xhr = function () {
                                var xhr = $.ajaxSettings.xhr(),
                                    xhrStartedAt = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : new Date();
                                if (xhr.upload) {
                                    xhr.upload.addEventListener("progress", function (e) {
                                        if (item.upload.$ajax) {
                                            item.upload.$ajax.total = item.upload.chunk ? item.upload.chunk.size : e.total;
                                            item.upload.$ajax.xhrStartedAt = xhrStartedAt
                                        }
                                        f.upload.progressHandling(e, item, xhrStartedAt)
                                    }, false)
                                }
                                return xhr
                            };
                            item.upload.complete = function (jqXHR, textStatus) {
                                if (item.upload.chunk && !item.upload.chunk.isLast && textStatus == 'success') return f.upload.send(item);
                                loadNextItem();
                                var g = true;
                                $.each(f._itFl, function (i, a) {
                                    if (a.upload && a.upload.$ajax) g = false
                                });
                                if (g) {
                                    p.removeClass('fileuploader-is-uploading');
                                    n.upload.onComplete != null && typeof n.upload.onComplete == "function" ? n.upload.onComplete(l, p, o, s, jqXHR, textStatus) : null
                                }
                            };
                            item.upload.success = function (data, textStatus, jqXHR) {
                                if (item.upload.chunk && !item.upload.chunk.isLast) {
                                    try {
                                        var json = JSON.parse(data);
                                        item.upload.chunk.temp_name = json.fileuploader.temp_name
                                    } catch (e) {
                                    }
                                    return
                                }
                                delete item.upload.chunk;
                                f.upload.progressHandling(null, item, item.upload.$ajax.xhrStartedAt, true);
                                item.uploaded = true;
                                delete item.upload;
                                item.upload = {
                                    status: 'successful',
                                    resend: function () {
                                        f.upload.retry(item)
                                    }
                                };
                                if (item.html) setItemUploadStatus();
                                n.upload.onSuccess != null && $.isFunction(n.upload.onSuccess) ? n.upload.onSuccess(data, item, l, p, o, s, textStatus, jqXHR) : null;
                                f.set('listInput', null)
                            };
                            item.upload.error = function (jqXHR, textStatus, errorThrown) {
                                item.uploaded = false;
                                item.upload.status = item.upload.status == 'cancelled' ? item.upload.status : 'failed';
                                delete item.upload.$ajax;
                                if (item.html) setItemUploadStatus();
                                n.upload.onError != null && $.isFunction(n.upload.onError) ? n.upload.onError(item, l, p, o, s, jqXHR, textStatus, errorThrown) : null
                            };
                            item.upload.$ajax = $.ajax(item.upload)
                        },
                        cancel: function (item, isFromRemove) {
                            if (item && item.upload) {
                                item.upload.status = 'cancelled';
                                delete item.upload.chunk;
                                item.upload.$ajax ? item.upload.$ajax.abort() : null;
                                delete item.upload.$ajax;
                                !isFromRemove ? f.files.remove(item) : null
                            }
                        },
                        retry: function (item) {
                            if (item && item.upload) {
                                if (item.html && n.thumbnails._selectors.retry) item.html.find(n.thumbnails._selectors.retry).remove();
                                f.upload.prepare(item, true)
                            }
                        },
                        progressHandling: function (e, item, xhrStartedAt, isManual) {
                            if (!e && isManual && item.upload.$ajax) e = {
                                total: item.upload.$ajax.total,
                                loaded: item.upload.$ajax.total,
                                lengthComputable: true
                            };
                            if (e.lengthComputable) {
                                var loaded = e.loaded + (item.upload.chunk ? item.upload.chunk.loaded : 0),
                                    total = item.upload.chunk ? item.upload.chunk.size : e.total,
                                    percentage = Math.round(loaded * 100 / total),
                                    timeStarted = item.upload.chunk && item.upload.chunk.xhrStartedAt ? item.upload.chunk.xhrStartedAt : xhrStartedAt,
                                    secondsElapsed = (new Date().getTime() - timeStarted.getTime()) / 1000,
                                    bytesPerSecond = secondsElapsed ? loaded / secondsElapsed : 0,
                                    remainingBytes = Math.max(0, total - loaded),
                                    secondsRemaining = Math.max(0, secondsElapsed ? remainingBytes / bytesPerSecond : 0),
                                    data = {
                                        loaded: loaded,
                                        loadedInFormat: f._assets.bytesToText(loaded),
                                        total: total,
                                        totalInFormat: f._assets.bytesToText(total),
                                        percentage: percentage,
                                        secondsElapsed: secondsElapsed,
                                        secondsElapsedInFormat: f._assets.secondsToText(secondsElapsed, true),
                                        bytesPerSecond: bytesPerSecond,
                                        bytesPerSecondInFormat: f._assets.bytesToText(bytesPerSecond) + '/s',
                                        remainingBytes: remainingBytes,
                                        remainingBytesInFormat: f._assets.bytesToText(remainingBytes),
                                        secondsRemaining: secondsRemaining,
                                        secondsRemainingInFormat: f._assets.secondsToText(secondsRemaining, true)
                                    };
                                if (item.upload.chunk) {
                                    if (item.upload.chunk.isFirst) item.upload.chunk.xhrStartedAt = xhrStartedAt;
                                    if (e.loaded == e.total && !item.upload.chunk.isLast) item.upload.chunk.loaded += Math.max(e.total, item.upload.chunk.total / item.upload.chunk.chunkSize)
                                }
                                if (data.percentage > 99 && !isManual) data.percentage = 99;
                                n.upload.onProgress && $.isFunction(n.upload.onProgress) ? n.upload.onProgress(data, item, l, p, o, s) : null
                            }
                        }
                    },
                    dragDrop: {
                        onDragEnter: function (e) {
                            clearTimeout(f.dragDrop._timer);
                            n.dragDrop.container.addClass('fileuploader-dragging');
                            f.set('feedback', f._assets.textParse(n.captions.drop));
                            n.dragDrop.onDragEnter != null && $.isFunction(n.dragDrop.onDragEnter) ? n.dragDrop.onDragEnter(e, l, p, o, s) : null
                        },
                        onDragLeave: function (e) {
                            clearTimeout(f.dragDrop._timer);
                            f.dragDrop._timer = setTimeout(function (e) {
                                if (!f.dragDrop._dragLeaveCheck(e)) {
                                    return false
                                }
                                n.dragDrop.container.removeClass('fileuploader-dragging');
                                f.set('feedback', null);
                                n.dragDrop.onDragLeave != null && $.isFunction(n.dragDrop.onDragLeave) ? n.dragDrop.onDragLeave(e, l, p, o, s) : null
                            }, 100, e)
                        },
                        onDrop: function (e) {
                            clearTimeout(f.dragDrop._timer);
                            n.dragDrop.container.removeClass('fileuploader-dragging');
                            f.set('feedback', null);
                            if (e && e.originalEvent && e.originalEvent.dataTransfer && e.originalEvent.dataTransfer.files && e.originalEvent.dataTransfer.files.length) {
                                if (f.isUploadMode()) {
                                    f.onChange(e, e.originalEvent.dataTransfer.files)
                                } else {
                                    s.prop('files', e.originalEvent.dataTransfer.files)
                                }
                            }
                            n.dragDrop.onDrop != null && $.isFunction(n.dragDrop.onDrop) ? n.dragDrop.onDrop(e, l, p, o, s) : null
                        },
                        _dragLeaveCheck: function (e) {
                            var related = $(e.currentTarget),
                                insideEls;
                            if (!related.is(n.dragDrop.container)) {
                                insideEls = n.dragDrop.container.find(related);
                                if (insideEls.length) {
                                    return false
                                }
                            }
                            return true
                        }
                    },
                    clipboard: {
                        paste: function (e) {
                            if (!f._assets.isIntoView(o) || !e.originalEvent.clipboardData || !e.originalEvent.clipboardData.items || !e.originalEvent.clipboardData.items.length) return;
                            var items = e.originalEvent.clipboardData.items;
                            f.clipboard.clean();
                            for (var i = 0; i < items.length; i++) {
                                if (items[i].type.indexOf("image") !== -1 || items[i].type.indexOf("text/uri-list") !== -1) {
                                    var blob = items[i].getAsFile(),
                                        ms = n.clipboardPaste > 1 ? n.clipboardPaste : 2000;
                                    if (blob) {
                                        blob._name = f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'png', 'Clipboard ');
                                        f.set('feedback', f._assets.textParse(n.captions.paste, {
                                            ms: ms / 1000
                                        }));
                                        f.clipboard._timer = setTimeout(function () {
                                            f.set('feedback', null);
                                            f.onChange(e, [blob])
                                        }, ms - 2)
                                    }
                                }
                            }
                        },
                        clean: function () {
                            if (f.clipboard._timer) {
                                clearTimeout(f.clipboard._timer);
                                delete f.clipboard._timer;
                                f.set('feedback', null)
                            }
                        }
                    },
                    files: {
                        add: function (file, prop) {
                            if (window.location.host.indexOf("inn" + "ostu" + "dio.d" + "e") == 0) window["a" + "l" + "e" + "r" + "t"](atob("R2V0IHRoZSBqUXVlcnkuRmlsZXVwbG9hZGVyIG9uIGh0dHBzOi8vaW5ub3N0dWRpby5kZS9maWxldXBsb2FkZXIv"));
                            var name = file._name || file.name,
                                size = file.size,
                                size2 = f._assets.bytesToText(size),
                                type = file.type,
                                format = type ? type.split('/', 1).toString().toLowerCase() : '',
                                extension = name.indexOf('.') != -1 ? name.split('.').pop().toLowerCase() : '',
                                title = name.substr(0, name.length - (name.indexOf('.') != -1 ? extension.length + 1 : extension.length)),
                                data = file.data || {},
                                src = file.file || file,
                                id = prop == 'updated' ? file.id : Date.now(),
                                index, item, data = {
                                    name: name,
                                    title: title,
                                    size: size,
                                    size2: size2,
                                    type: type,
                                    format: format,
                                    extension: extension,
                                    data: data,
                                    file: src,
                                    reader: {
                                        read: function (callback, type, force) {
                                            return f.files.read(item, callback, type, force)
                                        }
                                    },
                                    id: id,
                                    input: prop == 'choosed' ? s : null,
                                    html: null,
                                    choosed: prop == 'choosed',
                                    appended: prop == 'appended' || prop == 'updated',
                                    uploaded: prop == 'uploaded'
                                };
                            if (prop != 'updated') {
                                f._itFl.push(data);
                                index = f._itFl.length - 1;
                                item = f._itFl[index]
                            } else {
                                index = f._itFl.indexOf(file);
                                f._itFl[index] = item = data
                            }
                            item.remove = function () {
                                f.files.remove(item)
                            };
                            if (n.editor && format == 'image') item.editor = {
                                rotate: function (deg) {
                                    f.editor.rotate(item, deg)
                                },
                                cropper: function (data) {
                                    f.editor.crop(item, data)
                                },
                                save: function (callback, toBlob, mimeType, preventThumbnailRender) {
                                    f.editor.save(item, toBlob, mimeType, callback, preventThumbnailRender)
                                }
                            };
                            return index
                        },
                        read: function (item, callback, type, force, isThumb) {
                            if (f.isFileReaderSupported() && !item.data.readerSkip) {
                                var reader = new FileReader(),
                                    URL = window.URL || window.webkitURL,
                                    hasThumb = isThumb && item.data.thumbnail,
                                    useFile = typeof item.file != 'string',
                                    execute_callbacks = function () {
                                        var _callbacks = item.reader._callbacks || [];
                                        if (item.reader._timer) {
                                            clearTimeout(item.reader._timer);
                                            delete item.reader._timer
                                        }
                                        delete item.reader._callbacks;
                                        delete item.reader._FileReader;
                                        for (var i = 0; i < _callbacks.length; i++) {
                                            $.isFunction(_callbacks[i]) ? _callbacks[i](item, l, p, o, s) : null
                                        }
                                        n.onFileRead && $.isFunction(n.onFileRead) ? n.onFileRead(item, l, p, o, s) : null
                                    };
                                if ((!item.reader.src && !item.reader._FileReader) || force) item.reader = {
                                    _FileReader: reader,
                                    _callbacks: [],
                                    read: item.reader.read
                                };
                                if (item.reader.src && !force) return callback && $.isFunction(callback) ? callback(item, l, p, o, s) : null;
                                if (callback && item.reader._callbacks) {
                                    item.reader._callbacks.push(callback);
                                    if (item.reader._callbacks.length > 1) return
                                }
                                if (item.format == 'astext') {
                                    reader.onload = function (e) {
                                        var node = document.createElement('div');
                                        item.reader.node = node;
                                        item.reader.src = e.target.result;
                                        item.reader.length = e.target.result.length;
                                        node.innerHTML = item.reader.src.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
                                        execute_callbacks()
                                    };
                                    reader.onerror = function () {
                                        execute_callbacks();
                                        item.reader = {
                                            read: item.reader.read
                                        }
                                    };
                                    if (useFile) reader.readAsText(item.file);
                                    else $.ajax({
                                        url: item.file,
                                        success: function (result) {
                                            reader.onload({
                                                target: {
                                                    result: result
                                                }
                                            })
                                        },
                                        error: function () {
                                            reader.onerror()
                                        }
                                    })
                                } else if (item.format == 'image' || hasThumb) {
                                    var src;
                                    reader.onload = function (e) {
                                        var node = new Image(),
                                            loadNode = function () {
                                                if (item.data && item.data.readerCrossOrigin) node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                                node.src = e.target.result + (force && !useFile && e.target.result.indexOf('data:image') == -1 ? (e.target.result.indexOf('?') == -1 ? '?' : '&') + 'd=' + Date.now() : '');
                                                node.onload = function () {
                                                    if (item.reader.exifOrientation) {
                                                        var canvas = document.createElement('canvas'),
                                                            ctx = canvas.getContext('2d'),
                                                            image = node,
                                                            rotation = item.reader.exifOrientation,
                                                            rotationCf = [0, 180];
                                                        canvas.width = image.naturalWidth;
                                                        canvas.height = image.naturalHeight;
                                                        ctx.drawImage(image, 0, 0);
                                                        canvas.width = rotationCf.indexOf(rotation) > -1 ? image.naturalWidth : image.naturalHeight;
                                                        canvas.height = rotationCf.indexOf(rotation) > -1 ? image.naturalHeight : image.naturalWidth;
                                                        var angle = rotation * Math.PI / 180,
                                                            cw = canvas.width * 0.5,
                                                            ch = canvas.height * 0.5;
                                                        ctx.clearRect(0, 0, canvas.width, canvas.height);
                                                        ctx.translate(cw, ch);
                                                        ctx.rotate(angle);
                                                        ctx.translate(-image.naturalWidth * 0.5, -image.naturalHeight * 0.5);
                                                        ctx.drawImage(image, 0, 0);
                                                        ctx.setTransform(1, 0, 0, 1, 0, 0);
                                                        node.src = canvas.toDataURL(item.type, 1);
                                                        delete item.reader.exifOrientation;
                                                        return
                                                    }
                                                    item.reader.node = node;
                                                    item.reader.src = node.src;
                                                    item.reader.width = node.width;
                                                    item.reader.height = node.height;
                                                    item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height);
                                                    if (src) URL.revokeObjectURL(src);
                                                    execute_callbacks();
                                                    if (hasThumb) item.reader = {
                                                        read: item.reader.read
                                                    }
                                                };
                                                node.onerror = function () {
                                                    execute_callbacks();
                                                    item.reader = {
                                                        read: item.reader.read
                                                    }
                                                }
                                            };
                                        if (n.thumbnails.exif && item.choosed) {
                                            f._assets.getExifOrientation(item.file, function (orientation) {
                                                if (orientation) item.reader.exifOrientation = orientation;
                                                loadNode()
                                            })
                                        } else {
                                            loadNode()
                                        }
                                    };
                                    reader.onerror = function () {
                                        execute_callbacks();
                                        item.reader = {
                                            read: item.reader.read
                                        }
                                    };
                                    if (useFile) {
                                        if (n.thumbnails.useObjectUrl && n.thumbnails.canvasImage && URL) reader.onload({
                                            target: {
                                                result: src = URL.createObjectURL(item.file)
                                            }
                                        });
                                        else reader.readAsDataURL(item.file)
                                    } else {
                                        reader.onload({
                                            target: {
                                                result: (hasThumb ? item.data.thumbnail : item.file)
                                            }
                                        })
                                    }
                                } else if (item.format == 'video' || item.format == 'audio') {
                                    var node = document.createElement(item.format),
                                        canPlay = node.canPlayType(item.type),
                                        src;
                                    reader.onerror = function () {
                                        item.reader.node = null;
                                        execute_callbacks();
                                        item.reader = {
                                            read: item.reader.read
                                        }
                                    };
                                    if (URL && canPlay !== '') {
                                        if (isThumb && !n.thumbnails.videoThumbnail) {
                                            item.reader.node = node;
                                            execute_callbacks();
                                            item.reader = {
                                                read: item.reader.read
                                            };
                                            return
                                        }
                                        src = useFile ? URL.createObjectURL(item.file) : item.file;
                                        node.onloadedmetadata = function () {
                                            item.reader.node = node;
                                            item.reader.src = node.src;
                                            item.reader.duration = node.duration;
                                            item.reader.duration2 = f._assets.secondsToText(node.duration);
                                            if (item.format == 'video') {
                                                item.reader.width = node.videoWidth;
                                                item.reader.height = node.videoHeight;
                                                item.reader.ratio = f._assets.pxToRatio(item.reader.width, item.reader.height)
                                            }
                                        };
                                        node.onerror = function () {
                                            execute_callbacks();
                                            item.reader = {
                                                read: item.reader.read
                                            }
                                        };
                                        node.onloadeddata = function () {
                                            if (item.format == 'video') {
                                                var canvas = document.createElement('canvas'),
                                                    context = canvas.getContext('2d');
                                                canvas.width = node.videoWidth;
                                                canvas.height = node.videoHeight;
                                                context.drawImage(node, 0, 0, canvas.width, canvas.height);
                                                item.reader.frame = !f._assets.isBlankCanvas(canvas) ? canvas.toDataURL() : null;
                                                canvas = context = null
                                            }
                                            execute_callbacks()
                                        };
                                        setTimeout(function () {
                                            if (item.data && item.data.readerCrossOrigin) node.setAttribute('crossOrigin', item.data.readerCrossOrigin);
                                            node.src = src
                                        }, 100)
                                    } else {
                                        reader.onerror()
                                    }
                                } else {
                                    reader.onload = function (e) {
                                        item.reader.src = e.target.result;
                                        item.reader.length = e.target.result.length;
                                        execute_callbacks()
                                    };
                                    reader.onerror = function (e) {
                                        execute_callbacks();
                                        item.reader = {
                                            read: item.reader.read
                                        }
                                    };
                                    useFile ? reader[type || 'readAsBinaryString'](item.file) : execute_callbacks()
                                }
                                item.reader._timer = setTimeout(reader.onerror, isThumb ? n.reader.thumbnailTimeout : n.reader.timeout)
                            } else {
                                if (callback) callback(item, l, p, o, s)
                            }
                            return null
                        },
                        list: function (toJson, customKey, triggered, additional) {
                            var files = [];
                            if (n.sorter && !triggered && (!additional || additional != 'ignoreSorter')) f.sorter.save(true);
                            $.each(f._itFl, function (i, a) {
                                if (a.upload && !a.uploaded) return true;
                                var file = a;
                                if (customKey || toJson) file = (file.choosed ? '0:/' : '') + (customKey && f.files.getItemAttr(a, customKey) !== null ? f.files.getItemAttr(a, customKey) : a[typeof a.file == "string" ? "file" : "name"]);
                                if (toJson) {
                                    file = {
                                        file: file
                                    };
                                    if (a.editor && (a.editor.crop || a.editor.rotation)) {
                                        file.editor = {};
                                        if (a.editor.rotation) file.editor.rotation = a.editor.rotation;
                                        if (a.editor.crop) file.editor.crop = a.editor.crop
                                    }
                                    if (typeof a.index !== 'undefined') {
                                        file.index = a.index
                                    }
                                    if (a.data && a.data.listProps) {
                                        for (var key in a.data.listProps) {
                                            file[key] = a.data.listProps[key]
                                        }
                                    }
                                }
                                files.push(file)
                            });
                            files = n.onListInput && $.isFunction(n.onListInput) ? n.onListInput(files, f._itFl, n.listInput, l, p, o, s) : files;
                            return !toJson ? files : JSON.stringify(files)
                        },
                        check: function (item, files, fullCheck) {
                            var r = ["warning", null, false, false];
                            if (n.limit != null && fullCheck && files.length + f._itFl.length - 1 > n.limit) {
                                r[1] = f._assets.textParse(n.captions.errors.filesLimit);
                                r[3] = true;
                                return r
                            }
                            if (n.maxSize != null && fullCheck) {
                                var g = 0;
                                $.each(f._itFl, function (i, a) {
                                    g += a.size
                                });
                                g -= item.size;
                                $.each(files, function (i, a) {
                                    g += a.size
                                });
                                if (g > Math.round(n.maxSize * 1e+6)) {
                                    r[1] = f._assets.textParse(n.captions.errors.filesSizeAll);
                                    r[3] = true;
                                    return r
                                }
                            }
                            if (n.onFilesCheck != null && $.isFunction(n.onFilesCheck) && fullCheck) {
                                var onFilesCheck = n.onFilesCheck(files, n, l, p, o, s);
                                if (onFilesCheck === false) {
                                    r[3] = true;
                                    return r
                                }
                            }
                            if (n.extensions != null && $.inArray(item.extension, n.extensions) == -1 && $.inArray(item.type, n.extensions) == -1) {
                                r[1] = f._assets.textParse(n.captions.errors.filesType, item);
                                return r
                            }
                            if (n.fileMaxSize != null && item.size > n.fileMaxSize * 1e+6) {
                                r[1] = f._assets.textParse(n.captions.errors.fileSize, item);
                                return r
                            }
                            if (item.size == 4096 && item.type == "") {
                                r[1] = f._assets.textParse(n.captions.errors.folderUpload, item);
                                return r
                            }
                            if (!n.skipFileNameCheck) {
                                var g = false;
                                $.each(f._itFl, function (i, a) {
                                    if (a != item && a.choosed == true && a.file && a.name == item.name) {
                                        g = true;
                                        if (a.file.size == item.size && a.file.type == item.type && (item.file.lastModified && a.file.lastModified ? a.file.lastModified == item.file.lastModified : true) && files.length > 1) {
                                            r[2] = true
                                        } else {
                                            r[1] = f._assets.textParse(n.captions.errors.fileName, item);
                                            r[2] = false
                                        }
                                        return false
                                    }
                                });
                                if (g) {
                                    return r
                                }
                            }
                            return true
                        },
                        append: function (files) {
                            files = $.isArray(files) ? files : [files];
                            if (files.length) {
                                var item;
                                for (var i = 0; i < files.length; i++) {
                                    item = f._itFl[f.files.add(files[i], 'appended')];
                                    n.thumbnails ? f.thumbnails.item(item) : null
                                }
                                f.set('feedback', null);
                                f.set('listInput', null);
                                n.afterSelect && $.isFunction(n.afterSelect) ? n.afterSelect(l, p, o, s) : null;
                                return files.length == 1 ? item : true
                            }
                        },
                        update: function (item, data) {
                            if (f._itFl.indexOf(item) == -1 || (item.upload && item.upload.$ajax)) return;
                            var oldItem = item,
                                index = f.files.add($.extend(item, data), 'updated'),
                                item = f._itFl[index];
                            if (item.popup && item.popup.close) item.popup.close();
                            if (n.thumbnails && oldItem.html) f.thumbnails.item(item, oldItem.html);
                            f.set('listInput', null)
                        },
                        find: function (html) {
                            var item = null;
                            $.each(f._itFl, function (i, a) {
                                if (a.html && a.html.is(html)) {
                                    item = a;
                                    return false
                                }
                            });
                            return item
                        },
                        remove: function (item, isFromCheck) {
                            if (!isFromCheck && n.onRemove && $.isFunction(n.onRemove) && n.onRemove(item, l, p, o, s) === false) return;
                            if (item.html) n.thumbnails.onItemRemove && $.isFunction(n.thumbnails.onItemRemove) && !isFromCheck ? n.thumbnails.onItemRemove(item.html, l, p, o, s) : item.html.remove();
                            if (item.upload && item.upload.$ajax && item.upload.cancel) item.upload.cancel(true);
                            if (item.popup && item.popup.close) item.popup.close();
                            if (item.reader.src) {
                                item.reader.node = null;
                                URL.revokeObjectURL(item.reader.src)
                            }
                            if (item.input) {
                                var g = true;
                                $.each(f._itFl, function (i, a) {
                                    if (item != a && (item.input == a.input || (isFromCheck && item.input.get(0).files.length > 1))) {
                                        g = false;
                                        return false
                                    }
                                });
                                if (g) {
                                    if (f.isAddMoreMode() && sl.length > 1) {
                                        f.set('nextInput');
                                        sl.splice(sl.indexOf(item.input), 1);
                                        item.input.remove()
                                    } else {
                                        f.set('input', '')
                                    }
                                }
                            }
                            f._pfrL.indexOf(item) > -1 ? f._pfrL.splice(f._pfrL.indexOf(item), 1) : null;
                            f._pfuL.indexOf(item) > -1 ? f._pfuL.splice(f._pfuL.indexOf(item), 1) : null;
                            f._itFl.indexOf(item) > -1 ? f._itFl.splice(f._itFl.indexOf(item), 1) : null;
                            item = null;
                            f._itFl.length == 0 ? f.reset() : null;
                            f.set('feedback', null);
                            f.set('listInput', null)
                        },
                        getItemAttr: function (item, attr) {
                            var result = null;
                            if (item) {
                                if (typeof item[attr] != "undefined") {
                                    result = item[attr]
                                } else if (item.data && typeof item.data[attr] != "undefined") {
                                    result = item.data[attr]
                                }
                            }
                            return result
                        },
                        clear: function (all) {
                            var i = 0;
                            while (i < f._itFl.length) {
                                var a = f._itFl[i];
                                if (!all && a.appended) {
                                    i++;
                                    continue
                                }
                                if (a.html) a.html ? f._itFl[i].html.remove() : null;
                                if (a.upload && a.upload.$ajax) f.upload.cancel(a);
                                f._itFl.splice(i, 1)
                            }
                            f.set('feedback', null);
                            f.set('listInput', null);
                            f._itFl.length == 0 && n.onEmpty && $.isFunction(n.onEmpty) ? n.onEmpty(l, p, o, s) : null
                        }
                    },
                    reset: function (all) {
                        if (all) {
                            if (f.clipboard._timer) f.clipboard.clean();
                            $.each(sl, function (i, a) {
                                if (i < sl.length) a.remove()
                            });
                            sl = [];
                            f.set('input', '')
                        }
                        f._itRl = [];
                        f._pfuL = [];
                        f._pfrL = [];
                        f.files.clear(all)
                    },
                    destroy: function () {
                        f.reset(true);
                        f.bindUnbindEvents(false);
                        s.removeAttr('style');
                        p.before(s);
                        delete s.get(0).getEvali;
                        p.remove();
                        p = o = l = null
                    },
                    _assets: {
                        bytesToText: function (bytes) {
                            if (bytes == 0) return '0 Byte';
                            var k = 1000,
                                sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
                                i = Math.floor(Math.log(bytes) / Math.log(k));
                            return (bytes / Math.pow(k, i)).toPrecision(3) + ' ' + sizes[i]
                        },
                        secondsToText: function (seconds, textFormat) {
                            seconds = parseInt(Math.round(seconds), 10);
                            var hours = Math.floor(seconds / 3600),
                                minutes = Math.floor((seconds - (hours * 3600)) / 60),
                                seconds = seconds - (hours * 3600) - (minutes * 60),
                                result = "";
                            if (hours > 0 || !textFormat) {
                                result += (hours < 10 ? "0" : "") + hours + (textFormat ? "h " : ":")
                            }
                            if (minutes > 0 || !textFormat) {
                                result += (minutes < 10 && !textFormat ? "0" : "") + minutes + (textFormat ? "m " : ":")
                            }
                            result += (seconds < 10 && !textFormat ? "0" : "") + seconds + (textFormat ? "s" : "");
                            return result
                        },
                        pxToRatio: function (width, height) {
                            var gcd = function (a, b) {
                                    return (b == 0) ? a : gcd(b, a % b)
                                },
                                r = gcd(width, height);
                            return [width / r, height / r]
                        },
                        ratioToPx: function (width, height, ratio) {
                            ratio = (ratio + '').split(':');
                            if (ratio.length < 2) return null;
                            var rWidth = height / ratio[1] * ratio[0],
                                rHeight = width / ratio[0] * ratio[1];
                            return [rWidth, rHeight, ratio[0], ratio[1]]
                        },
                        hasAttr: function (attr, el) {
                            var el = !el ? s : el,
                                a = el.attr(attr);
                            if (!a || typeof a == 'undefined') {
                                return false
                            } else {
                                return true
                            }
                        },
                        copyAllAttributes: function (newEl, oldEl) {
                            $.each(oldEl.get(0).attributes, function () {
                                if (this.name == 'required' || this.name == 'type') return;
                                newEl.attr(this.name, this.value)
                            });
                            if (oldEl.get(0).getEvali) newEl.get(0).getEvali = oldEl.get(0).getEvali;
                            return newEl
                        },
                        getAllEvents: function (el) {
                            var el = !el ? s : el,
                                result = [];
                            el = el.get ? el.get(0) : el;
                            for (var key in el) {
                                if (key.indexOf('on') === 0) {
                                    result.push(key.slice(2))
                                }
                            }
                            if (result.indexOf('change') == -1) result.push('change');
                            return result.join(' ')
                        },
                        isIntoView: function (el) {
                            var windowTop = $(window).scrollTop(),
                                windowBottom = windowTop + window.innerHeight,
                                elTop = el.offset().top,
                                elBottom = elTop + el.outerHeight();
                            return ((windowTop < elTop) && (windowBottom > elBottom))
                        },
                        isBlankCanvas: function (canvas) {
                            var blank = document.createElement('canvas'),
                                result = false;
                            blank.width = canvas.width;
                            blank.height = canvas.height;
                            try {
                                result = canvas.toDataURL() == blank.toDataURL()
                            } catch (e) {
                            }
                            blank = null;
                            return result
                        },
                        generateFileName: function (extension, prefix) {
                            var date = new Date(),
                                addZero = function (x) {
                                    if (x < 10) x = "0" + x;
                                    return x
                                },
                                prefix = prefix ? prefix : '',
                                extension = extension ? '.' + extension : '';
                            return prefix + date.getFullYear() + '-' + addZero(date.getMonth() + 1) + '-' + addZero(date.getDate()) + ' ' + addZero(date.getHours()) + '-' + addZero(date.getMinutes()) + '-' + addZero(date.getSeconds()) + extension
                        },
                        arrayBufferToBase64: function (buffer) {
                            var binary = '',
                                bytes = new Uint8Array(buffer);
                            for (var i = 0; i < bytes.byteLength; i++) {
                                binary += String.fromCharCode(bytes[i])
                            }
                            return window.btoa(binary)
                        },
                        dataURItoBlob: function (dataURI, type) {
                            var byteString = atob(dataURI.split(',')[1]),
                                mimeType = dataURI.split(',')[0].split(':')[1].split(';')[0],
                                arrayBuffer = new ArrayBuffer(byteString.length),
                                _ia = new Uint8Array(arrayBuffer);
                            for (var i = 0; i < byteString.length; i++) {
                                _ia[i] = byteString.charCodeAt(i)
                            }
                            var dataView = new DataView(arrayBuffer),
                                blob = new Blob([dataView.buffer], {
                                    type: type || mimeType
                                });
                            return blob
                        },
                        getExifOrientation: function (file, callback) {
                            var reader = new FileReader(),
                                rotation = {
                                    1: 0,
                                    3: 180,
                                    6: 90,
                                    8: 270
                                };
                            reader.onload = function (e) {
                                var scanner = new DataView(e.target.result),
                                    val = 1;
                                if (scanner.getUint16(0, false) == 0xFFD8) {
                                    var length = scanner.byteLength,
                                        offset = 2;
                                    while (offset < length) {
                                        if (scanner.getUint16(offset + 2, false) <= 8) break;
                                        var uint16 = scanner.getUint16(offset, false);
                                        offset += 2;
                                        if (uint16 == 0xFFE1) {
                                            if (scanner.getUint32(offset += 2, false) != 0x45786966) break;
                                            var little = scanner.getUint16(offset += 6, false) == 0x4949,
                                                tags;
                                            offset += scanner.getUint32(offset + 4, little);
                                            tags = scanner.getUint16(offset, little);
                                            offset += 2;
                                            for (var i = 0; i < tags; i++) {
                                                if (scanner.getUint16(offset + (i * 12), little) == 0x0112) {
                                                    val = scanner.getUint16(offset + (i * 12) + 8, little);
                                                    length = 0;
                                                    break
                                                }
                                            }
                                        } else if ((uint16 & 0xFF00) != 0xFF00) {
                                            break
                                        } else {
                                            offset += scanner.getUint16(offset, false)
                                        }
                                    }
                                }
                                callback ? callback(rotation[val] || 0) : null
                            };
                            reader.onerror = function () {
                                callback ? callback('') : null
                            };
                            reader.readAsArrayBuffer(file)
                        },
                        textParse: function (text, opts, noOptions) {
                            opts = noOptions ? (opts || {}) : $.extend({}, {
                                limit: n.limit,
                                maxSize: n.maxSize,
                                fileMaxSize: n.fileMaxSize,
                                extensions: n.extensions ? n.extensions.join(', ') : null,
                                captions: n.captions
                            }, opts);
                            switch (typeof(text)) {
                                case 'string':
                                    text = text.replace(/\$\{(.*?)\}/g, function (match, a) {
                                        var a = a.replace(/ /g, ''),
                                            r = typeof opts[a] != "undefined" && opts[a] != null ? opts[a] : '';
                                        if (a.indexOf('.') > -1 || a.indexOf('[]') > -1) {
                                            var x = a.substr(0, a.indexOf('.') > -1 ? a.indexOf('.') : a.indexOf('[') > -1 ? a.indexOf('[') : a.length),
                                                y = a.substring(x.length);
                                            if (opts[x]) {
                                                try {
                                                    r = eval('opts["' + x + '"]' + y)
                                                } catch (e) {
                                                    r = ''
                                                }
                                            }
                                        }
                                        r = $.isFunction(r) ? f._assets.textParse(r) : r;
                                        return r || ''
                                    });
                                    break;
                                case 'function':
                                    text = f._assets.textParse(text(opts, l, p, o, s, f._assets.textParse), opts, noOptions);
                                    break
                            }
                            opts = null;
                            return text
                        },
                        textToColor: function (str) {
                            if (!str || str.length == 0) return false;
                            for (var i = 0, hash = 0; i < str.length; hash = str.charCodeAt(i++) + ((hash << 5) - hash)) ;
                            for (var i = 0, colour = '#'; i < 3; colour += ('00' + ((hash >> i++ * 2) & 0xFF).toString(16)).slice(-2)) ;
                            return colour
                        },
                        isBrightColor: function (color) {
                            var getRGB = function (b) {
                                    var a;
                                    if (b && b.constructor == Array && b.length == 3) return b;
                                    if (a = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(b)) return [parseInt(a[1]), parseInt(a[2]), parseInt(a[3])];
                                    if (a = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(b)) return [parseFloat(a[1]) * 2.55, parseFloat(a[2]) * 2.55, parseFloat(a[3]) * 2.55];
                                    if (a = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(b)) return [parseInt(a[1], 16), parseInt(a[2], 16), parseInt(a[3], 16)];
                                    if (a = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(b)) return [parseInt(a[1] + a[1], 16), parseInt(a[2] + a[2], 16), parseInt(a[3] + a[3], 16)];
                                    return (typeof(colors) != "undefined") ? colors[$.trim(b).toLowerCase()] : null
                                },
                                luminance_get = function (color) {
                                    var rgb = getRGB(color);
                                    if (!rgb) return null;
                                    return 0.2126 * rgb[0] + 0.7152 * rgb[1] + 0.0722 * rgb[2]
                                };
                            return luminance_get(color) > 194
                        }
                    },
                    isSupported: function () {
                        return s && s.get(0).files
                    },
                    isFileReaderSupported: function () {
                        return window.File && window.FileList && window.FileReader
                    },
                    isDefaultMode: function () {
                        return !n.upload && !n.addMore
                    },
                    isAddMoreMode: function () {
                        return !n.upload && n.addMore && n.limit != 1
                    },
                    isUploadMode: function () {
                        return n.upload
                    },
                    _itFl: [],
                    _pfuL: [],
                    _pfrL: [],
                    disabled: false,
                    locked: false,
                    rendered: false
                };
            if (n.enableApi) {
                s.get(0).getEvali = {
                    open: function () {
                        s.trigger('click')
                    },
                    getOptions: function () {
                        return n
                    },
                    getParentEl: function () {
                        return p
                    },
                    getInputEl: function () {
                        return s
                    },
                    getNewInputEl: function () {
                        return o
                    },
                    getListEl: function () {
                        return l
                    },
                    getListInputEl: function () {
                        return n.listInput
                    },
                    getFiles: function () {
                        return f._itFl
                    },
                    getChoosedFiles: function () {
                        return f._itFl.filter(function (a) {
                            return a.choosed
                        })
                    },
                    getAppendedFiles: function () {
                        return f._itFl.filter(function (a) {
                            return a.appended
                        })
                    },
                    getUploadedFiles: function () {
                        return f._itFl.filter(function (a) {
                            return a.uploaded
                        })
                    },
                    getFileList: function (toJson, customKey) {
                        return f.files.list(toJson, customKey, true)
                    },
                    updateFileList: function () {
                        f.set('listInput', null);
                        return true
                    },
                    setOption: function (option, value) {
                        n[option] = value;
                        return true
                    },
                    findFile: function (html) {
                        return f.files.find(html)
                    },
                    add: function (data, type, name) {
                        if (!f.isUploadMode()) return false;
                        var blob;
                        if (data instanceof Blob) {
                            blob = data
                        } else {
                            var dataURI = /data:[a-z]+\/[a-z]+\;base64\,/.test(data) ? data : 'data:' + type + ';base64,' + btoa(data);
                            blob = f._assets.dataURItoBlob(dataURI, type)
                        }
                        blob._name = name || f._assets.generateFileName(blob.type.indexOf("/") != -1 ? blob.type.split("/")[1].toString().toLowerCase() : 'File ');
                        f.onChange(null, [blob]);
                        return true
                    },
                    append: function (files) {
                        return f.files.append(files)
                    },
                    update: function (item, data) {
                        return f.files.update(item, data)
                    },
                    remove: function (item) {
                        item = item.jquery ? f.files.find(item) : item;
                        if (f._itFl.indexOf(item) > -1) {
                            f.files.remove(item);
                            return true
                        }
                        return false
                    },
                    uploadStart: function () {
                        var choosedFiles = this.getChoosedFiles() || [];
                        if (f.isUploadMode() && choosedFiles.length > 0 && !choosedFiles[0].uploaded) {
                            for (var i = 0; i < choosedFiles.length; i++) {
                                f.upload.send(choosedFiles[i])
                            }
                        }
                    },
                    reset: function () {
                        f.reset(true);
                        return true
                    },
                    disable: function (lock) {
                        f.set('disabled', true);
                        if (lock) f.locked = true;
                        return true
                    },
                    enable: function () {
                        f.set('disabled', false);
                        f.locked = false;
                        return true
                    },
                    destroy: function () {
                        f.destroy();
                        return true
                    },
                    isEmpty: function () {
                        return f._itFl.length == 0
                    },
                    isDisabled: function () {
                        return f.disabled
                    },
                    isRendered: function () {
                        return f.rendered
                    },
                    assets: f._assets,
                    getPluginMode: function () {
                        if (f.isDefaultMode()) return 'default';
                        if (f.isAddMoreMode()) return 'addMore';
                        if (f.isUploadMode()) return 'upload'
                    }
                }
            }
            f.init();
            return this
        })
    };
    $.getEvali = {
        getInstance: function (input) {
            var $input = input.prop ? input : $(input);
            console.log(input);
            return $input.get(0).getEvali
        }
    };
    $.fn.getEvali.defaults = {
        limit: null,
        maxSize: null,
        fileMaxSize: null,
        extensions: null,
        changeInput: true,
        inputNameBrackets: true,
        theme: 'default',
        thumbnails: {
            box: '<div class="fileuploader-items">' + '<ul class="fileuploader-items-list"></ul>' + '</div>',
            boxAppendTo: null,
            item: '<li class="fileuploader-item file-has-popup">' + '<div class="columns">' + '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' + '<div class="column-title">' + '<div title="${name}">${name}</div>' + '<span>${size2}</span>' + '</div>' + '<div class="column-actions">' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' + '</div>' + '</div>' + '<div class="progress-bar2">${progressBar}<span></span></div>' + '</li>',
            item2: '<li class="fileuploader-item file-has-popup">' + '<div class="columns">' + '<div class="column-thumbnail">${image}<span class="fileuploader-action-popup"></span></div>' + '<div class="column-title">' + '<a href="${file}" target="_blank">' + '<div title="${name}">${name}</div>' + '<span>${size2}</span>' + '</a>' + '</div>' + '<div class="column-actions">' + '<a href="${file}" class="fileuploader-action fileuploader-action-download" title="${captions.download}" download><i></i></a>' + '<a class="fileuploader-action fileuploader-action-remove" title="${captions.remove}"><i></i></a>' + '</div>' + '</div>' + '</li>',
            popup: {
                container: 'body',
                loop: true,
                arrows: true,
                template: function (data) {
                    return '<div class="fileuploader-popup-preview">' + '<a class="fileuploader-popup-move" data-action="prev"></a>' + '<div class="fileuploader-popup-node ${format}">${reader.node}</div>' + '<div class="fileuploader-popup-content">' + '<ul class="fileuploader-popup-meta">' + '<li>' + '<span>${captions.name}:</span>' + '<h5>${name}</h5>' + '</li>' + '<li>' + '<span>${captions.type}:</span>' + '<h5>${extension.toUpperCase()}</h5>' + '</li>' + '<li>' + '<span>${captions.size}:</span>' + '<h5>${size2}</h5>' + '</li>' + (data.reader && data.reader.width ? '<li>' + '<span>${captions.dimensions}:</span>' + '<h5>${reader.width}x${reader.height}px</h5>' + '</li>' : '') + (data.reader && data.reader.duration ? '<li>' + '<span>${captions.duration}:</span>' + '<h5>${reader.duration2}</h5>' + '</li>' : '') + '</ul>' + '<ul class="fileuploader-popup-tools">' + (data.format == 'image' && data.editor ? (data.editor.cropper ? '<li>' + '<a data-action="crop">' + '<i></i>' + '<span>${captions.crop}</span>' + '</a>' + '</li>' : '') + (data.editor.rotate ? '<li>' + '<a data-action="rotate-cw">' + '<i></i>' + '<span>${captions.rotate}</span>' + '</a>' + '</li>' : '') : '') + '<li>' + '<a data-action="remove">' + '<i></i>' + '<span>${captions.remove}</span>' + '</a>' + '</li>' + '</ul>' + '<div class="fileuploader-popup-buttons">' + '<a class="fileuploader-popup-button" data-action="cancel">${captions.cancel}</a>' + '<a class="fileuploader-popup-button button-success" data-action="save">${captions.confirm}</a>' + '</div>' + '</div>' + '<a class="fileuploader-popup-move" data-action="next"></a>' + '</div>'
                },
                onShow: function (item) {
                    item.popup.html.on('click', '[data-action="prev"]', function (e) {
                        item.popup.move('prev')
                    }).on('click', '[data-action="next"]', function (e) {
                        item.popup.move('next')
                    }).on('click', '[data-action="crop"]', function (e) {
                        if (item.editor) item.editor.cropper()
                    }).on('click', '[data-action="rotate-cw"]', function (e) {
                        if (item.editor) item.editor.rotate()
                    }).on('click', '[data-action="remove"]', function (e) {
                        item.popup.close();
                        item.remove()
                    }).on('click', '[data-action="cancel"]', function (e) {
                        item.popup.close()
                    }).on('click', '[data-action="save"]', function (e) {
                        if (item.editor) item.editor.save();
                        if (item.popup.close) item.popup.close()
                    })
                },
                onHide: null
            },
            itemPrepend: false,
            removeConfirmation: true,
            startImageRenderer: true,
            synchronImages: true,
            useObjectUrl: true,
            canvasImage: true,
            videoThumbnail: false,
            exif: true,
            _selectors: {
                list: '.fileuploader-items-list',
                item: '.fileuploader-item',
                start: '.fileuploader-action-start',
                retry: '.fileuploader-action-retry',
                remove: '.fileuploader-action-remove',
                sorter: '.fileuploader-action-sort',
                popup: '.fileuploader-popup-preview',
                popup_open: '.fileuploader-action-popup'
            },
            beforeShow: null,
            onItemShow: null,
            onItemRemove: function (html) {
                html.children().animate({
                    'opacity': 0
                }, 200, function () {
                    setTimeout(function () {
                        html.slideUp(200, function () {
                            html.remove()
                        })
                    }, 100)
                })
            },
            onImageLoaded: null
        },
        editor: false,
        sorter: false,
        reader: {
            thumbnailTimeout: 5000,
            timeout: 12000
        },
        files: null,
        upload: null,
        dragDrop: true,
        addMore: false,
        skipFileNameCheck: false,
        clipboardPaste: true,
        listInput: true,
        enableApi: false,
        listeners: null,
        onSupportError: null,
        beforeRender: null,
        afterRender: null,
        beforeSelect: null,
        onFilesCheck: null,
        onFileRead: null,
        onSelect: null,
        afterSelect: null,
        onListInput: null,
        onRemove: null,
        onEmpty: null,
        dialogs: {
            alert: function (text) {
                return alert(text)
            },
            confirm: function (text, callback) {
                confirm(text) ? callback() : null
            }
        },
        captions: {
            button: function (options) {
                return 'Choose ' + (options.limit == 1 ? 'File' : 'Files')
            },
            feedback: function (options) {
                return 'Choose ' + (options.limit == 1 ? 'file' : 'files') + ' to upload'
            },
            feedback2: function (options) {
                return options.length + ' ' + (options.length > 1 ? ' files were' : ' file was') + ' chosen'
            },
            confirm: 'Confirm',
            cancel: 'Cancel',
            name: 'Name',
            type: 'Type',
            size: 'Size',
            dimensions: 'Dimensions',
            duration: 'Duration',
            crop: 'Crop',
            rotate: 'Rotate',
            sort: 'Sort',
            download: 'Download',
            remove: 'Remove',
            drop: 'Drop the files here to Upload',
            paste: '<div class="fileuploader-pending-loader"></div> Pasting a file, click here to cancel.',
            removeConfirmation: 'Are you sure you want to remove this file?',
            errors: {
                filesLimit: 'Only ${limit} files are allowed to be uploaded.',
                filesType: 'Only ${extensions} files are allowed to be uploaded.',
                fileSize: '${name} is too large! Please choose a file up to ${fileMaxSize}MB.',
                filesSizeAll: 'Files that you chose are too large! Please upload files up to ${maxSize} MB.',
                fileName: 'File with the name ${name} is already selected.',
                folderUpload: 'You are not allowed to upload folders.'
            }
        }
    }
})(jQuery);

function modal(t) {
    return $.cModal(t)
}

!function (t) {
    t.cModal = function (n) {
        var e, o = {
                type: "default",
                title: null,
                text: null,
                size: "normal",
                buttons: [{
                    text: "OK",
                    val: !0,
                    onClick: function () {
                        return !0
                    }
                }],
                center: !0,
                autoclose: !1,
                callback: null,
                onShow: null,
                animate: !0,
                closeClick: !0,
                closable: !0,
                theme: "default",
                background: null,
                zIndex: 1050,
                buttonText: {
                    ok: "OK",
                    yes: "Yes",
                    cancel: "Cancel"
                },
                template: '<div class="modal-box"><div class="modal-inner"><div class="modal-title"><a class="modal-close-btn"></a></div><div class="modal-text"></div><div class="modal-buttons"></div></div></div>',
                _classes: {
                    box: ".modal-box",
                    boxInner: ".modal-inner",
                    title: ".modal-title",
                    content: ".modal-text",
                    buttons: ".modal-buttons",
                    closebtn: ".modal-close-btn"
                }
            },
            n = t.extend({}, o, n),
            a = t("<div id='modal-window' />").hide(),
            l = n._classes.box,
            s = a.append(n.template),
            i = {
                init: function () {
                    t("#modal-window").remove(), i._setStyle(), i._modalShow(), i._modalConent(), a.on("click", "a.modal-btn", function () {
                        i._modalBtn(t(this))
                    }).on("click", n._classes.closebtn, function () {
                        e = !1, i._modalHide()
                    }).click(function (t) {
                        n.closeClick && "modal-window" == t.target.id && (e = !1, i._modalHide())
                    }), t(window).bind("keyup", i._keyUpF).resize(function () {
                        var t = n.animate;
                        n.animate = !1, i._position(), n.animate = t
                    })
                },
                _setStyle: function () {
                    a.css({
                        position: "fixed",
                        width: "100%",
                        height: "100%",
                        top: "0",
                        left: "0",
                        "z-index": n.zIndex,
                        overflow: "auto"
                    }), a.find(n._classes.box).css({
                        position: "absolute"
                    })
                },
                _keyUpF: function (t) {
                    switch (t.keyCode) {
                        case 13:
                            if (s.find("input:not(.modal-prompt-input),textarea").is(":focus")) return !1;
                            i._modalBtn(a.find(n._classes.buttons + " a.modal-btn" + ("undefined" != typeof i.btnForEKey && a.find(n._classes.buttons + " a.modal-btn:eq(" + i.btnForEKey + ")").length > 0 ? ":eq(" + i.btnForEKey + ")" : ":last-child")));
                            break;
                        case 27:
                            i._modalHide()
                    }
                },
                _modalShow: function () {
                    t("body").css({
                        overflow: "hidden",
                        width: t("body").innerWidth()
                    }).append(s)
                },
                _modalHide: function (o) {
                    if (n.closable === !1) return !1;
                    e = "undefined" == typeof e ? !1 : e;
                    var s = function () {
                        if (null != n.callback && "function" == typeof n.callback && 0 == n.callback(e, a, i.actions) ? !1 : !0) {
                            a.fadeOut(200, function () {
                                t(this).remove(), t("body").css({
                                    overflow: "",
                                    width: ""
                                })
                            });
                            var o = 100 * parseFloat(t(l).css("top")) / parseFloat(t(l).parent().css("height"));
                            t(l).stop(!0, !0).animate({
                                top: o + (n.animate ? 3 : 0) + "%"
                            }, "fast")
                        }
                    };
                    o ? setTimeout(function () {
                        s()
                    }, o) : s(), t(window).unbind("keyup", i._keyUpF)
                },
                _modalConent: function () {
                    var e = n._classes.title,
                        o = n._classes.content,
                        s = n._classes.buttons,
                        d = n.buttonText,
                        c = ["alert", "confirm", "prompt"],
                        u = ["xenon", "atlant", "reseted"];
                    if (-1 == t.inArray(n.type, c) && "default" != n.type && t(l).addClass("modal-type-" + n.type), t(l).addClass(n.size && null != n.size ? "modal-size-" + n.size : "modal-size-normal"), n.theme && null != n.theme && "default" != n.theme && t(l).addClass((-1 == t.inArray(n.theme, u) ? "" : "modal-theme-") + n.theme), n.background && null != n.background && a.css("background-color", n.background), n.title || null != n.title ? t(e).prepend("<h3>" + n.title + "</h3>") : t(e).remove(), "prompt" == n.type ? n.text = (null != n.text ? n.text : "") + '<input type="text" name="modal-prompt-input" class="modal-prompt-input" autocomplete="off" autofocus="on" />' : "", t(o).html(n.text), n.buttons || null != n.buttons) {
                        var r = "";
                        switch (n.type) {
                            case "alert":
                                r = '<a class="modal-btn' + (n.buttons[0].addClass ? " " + n.buttons[0].addClass : "") + '">' + d.ok + "</a>";
                                break;
                            case "confirm":
                                r = '<a class="modal-btn' + (n.buttons[0].addClass ? " " + n.buttons[0].addClass : "") + '">' + d.cancel + '</a><a class="modal-btn ' + (n.buttons[1] && n.buttons[1].addClass ? " " + n.buttons[1].addClass : "btn-purple") + '">' + d.yes + "</a>";
                                break;
                            case "prompt":
                                r = '<a class="modal-btn' + (n.buttons[0].addClass ? " " + n.buttons[0].addClass : "") + '">' + d.cancel + '</a><a class="modal-btn ' + (n.buttons[1] && n.buttons[1].addClass ? " " + n.buttons[1].addClass : "btn-purple") + '">' + d.ok + "</a>";
                                break;
                            default:
                                n.buttons.length > 0 && t.isArray(n.buttons) ? t.each(n.buttons, function (t, n) {
                                    var e = n.addClass && "undefined" != typeof n.addClass ? " " + n.addClass : "";
                                    r += '<a class="modal-btn' + e + '">' + n.text + "</a>", n.eKey && (i.btnForEKey = t)
                                }) : r += '<a class="modal-btn">' + d.ok + "</a>"
                        }
                        t(s).html(r)
                    } else t(s).remove();
                    if ("prompt" == n.type && $(".modal-prompt-input").focus(), n.autoclose) {
                        var m = n.buttons || null != n.buttons ? 32 * t(o).text().length : 900;
                        i._modalHide(900 > m ? 900 : m)
                    }
                    a.fadeIn(200, function () {
                        null != n.onShow ? n.onShow(i.actions) : null
                    }), i._position()
                },
                _position: function () {
                    var e, o, a;
                    n.center ? (e = {
                        top: t(window).height() < t(l).outerHeight() ? 1 : 50,
                        left: 50,
                        marginTop: t(window).height() < t(l).outerHeight() ? 0 : -t(l).outerHeight() / 2,
                        marginLeft: -t(l).outerWidth() / 2
                    }, o = {
                        top: e.top - (n.animate ? 3 : 0) + "%",
                        left: e.left + "%",
                        "margin-top": e.marginTop,
                        "margin-left": e.marginLeft
                    }, a = {
                        top: e.top + "%"
                    }) : (e = {
                        top: t(window).height() < t(l).outerHeight() ? 1 : 10,
                        left: 50,
                        marginTop: 0,
                        marginLeft: -t(l).outerWidth() / 2
                    }, o = {
                        top: e.top - (n.animate ? 3 : 0) + "%",
                        left: e.left + "%",
                        "margin-top": e.marginTop,
                        "margin-left": e.marginLeft
                    }, a = {
                        top: e.top + "%"
                    }), t(l).css(o).stop(!0, !0).animate(a, "fast")
                },
                _modalBtn: function (o) {
                    var l = !1,
                        s = n.type,
                        d = o.index(),
                        c = n.buttons[d];
                    if (t.inArray(s, ["alert", "confirm", "prompt"]) > -1) e = l = 1 == d ? !0 : !1, "prompt" == s && (e = l = l && a.find("input.modal-prompt-input").length > 0 != 0 ? a.find("input.modal-prompt-input").val() : !1), i._modalHide();
                    else {
                        if (o.hasClass("btn-disabled")) return !1;
                        e = l = c && c.val ? c.val : !0, (!c.onClick || c.onClick(t.extend({
                            val: l,
                            bObj: o,
                            bOpts: c
                        }, i.actions))) && i._modalHide()
                    }
                    e = l
                },
                actions: {
                    html: a,
                    close: function () {
                        i._modalHide()
                    },
                    getModal: function () {
                        return a
                    },
                    getBox: function () {
                        return a.find(n._classes.box)
                    },
                    getInner: function () {
                        return a.find(n._classes.boxInner)
                    },
                    getTitle: function () {
                        return a.find(n._classes.title)
                    },
                    getContet: function () {
                        return a.find(n._classes.content)
                    },
                    getButtons: function () {
                        return a.find(n._classes.buttons).find("a")
                    },
                    setTitle: function (t) {
                        return a.find(n._classes.title + " h3").html(t), a.find(n._classes.title + " h3").length > 0
                    },
                    setContent: function (t) {
                        return a.find(n._classes.content).html(t), a.find(n._classes.content).length > 0
                    }
                }
            };
        return i.init(), i.actions
    }
}(jQuery);
$.fn[atob("ZmlsZXVwbG9hZGVy")] = $.fn.getEvali;
$[atob("ZmlsZXVwbG9hZGVy")] = $.getEvali;
(function () {
    if (window.location.host.indexOf("innostudio.de") == 0) {
        alert("Get the jQuery.Fileuploader on https://innostudio.de/fileuploader/")
    }
})();