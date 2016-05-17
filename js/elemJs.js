<<<<<<< HEAD
<<<<<<< 1c5a18e0f1f90c94d4d8e08298782fd152913e90
! function(e) {
    function t(l) {
        if (n[l]) return n[l].exports;
        var o = n[l] = {
            exports: {},
            id: l,
            loaded: !1
        };
        return e[l].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/", t(0)
}([function(e, t, n) {
    var l, o, r, i, s, a, c, h, d, f, u, v, m, p, y, M, z, b, g, V, H, w, L, x, S, T, k, C, A, E, B, F, q, Z, D, N, I, O, Y, $, P, G, _, R, j, X, K, U, W, J, Q, ee, te, ne, le, oe, re;
    for (n(1), n(18), V = n(19), J = n(20), l = n(21), m = n(22), X = window.requestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
            return window.setTimeout(e, 1e3 / 60)
        }, ne = document.createElement("svg"), ne.innerHTML = V, ne.id = "sprite", document.body.appendChild(ne), _ = document.querySelectorAll("[data-animated]"), b = 0, A = _.length; A > b; b++) s = _[b], s.addEventListener("click", function(e) {
        var t, n;
        return e.preventDefault(), t = e.target.href.split("#")[1], n = document.getElementById(t), "undefined" != typeof history && null !== history && history.pushState("", document.title, "#" + t), l(document.body, n.offsetTop, 1e3)
    });
    for (G = function(e, t) {
        return Math.round(Math.random() * (t - e) + e)
    }, C = document.querySelector(".labs-section"), M = function() {
        var e, t, n;
        return e = G(1, 3), ne = document.createElementNS("http://www.w3.org/2000/svg", "svg"), n = document.createElementNS("http://www.w3.org/2000/svg", "use"),
            n.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#particle-" + e),
            t = Math.floor(100 * Math.random()) / 10, t = 1.5 > t % 3 ? t : -t,
            ne.setAttribute("class", "particle"), ne.setAttribute("data-strength", t),
            ne.style.top = G(5, 95) + "%", ne.style.left = G(5, 95) + "%",
            ne.style.opacity = Math.floor(100 * Math.random()) / 100 + .3, ne.appendChild(n), C.appendChild(ne)
    }, g = S = 1; 20 >= S; g = ++S) M();
    P = document.querySelectorAll(".particle"), x = "ontouchstart" in document.documentElement, N = {
        top: 0,
        left: 0
    }, I = function(e, t) {
        var n, l, o, r, i, s, a, c, h, d;
        if (!(window.scrollY < C.offsetTop - window.innerHeight)) {
            for (h = [], n = 0, l = P.length; l > n; n++) c = P[n], i = c.getBoundingClientRect(), d = parseFloat(c.getAttribute("data-strength")), s = e - i.left - i.width / 2, a = t - i.top - i.height / 2, o = -(d / i.width * s), r = -(d / i.height * a), h.push(c.style.transform = "matrix(1,0,0,1," + o + "," + r + ")");
            return h
        }
    }, O = function(e) {
        var t, n, l, o, r, i, s, a, c;
        if (!(window.scrollY < C.offsetTop - window.innerHeight)) {
            for (a = [], l = 0, o = P.length; o > l; l++) s = P[l], c = parseFloat(s.getAttribute("data-strength")), t = Math.round(10 * e.accelerationIncludingGravity.x) / 10, n = Math.round(10 * e.accelerationIncludingGravity.y) / 10, r = -(-(t / 10) * c * 10), i = -(-(n / 10) * c * 10), a.push(s.style.transform = "matrix(1,0,0,1," + r + "," + i + ")");
            return a
        }
    }, x ? (window.addEventListener("devicemotion", O), document.body.classList.add("is-mobile")) : window.onmousemove = function(e) {
        return N.x = e.clientX, N.y = e.clientY, requestAnimationFrame(function() {
            return I(e.clientX, e.clientY)
        })
    }, Q = document.querySelector("header .fixed"), ee = Q ? Q.offsetTop : 0, r = document.querySelector(".bundle"), U = document.querySelector(".screencast"), f = document.querySelector("#content"), f ? (d = f.offsetTop, h = f.offsetHeight) : (d = 0, h = 0), i = r ? r.offsetTop : 0, K = U ? U.offsetHeight / 2 : 0, te = Q ? Q.offsetHeight / 2 : 0, window.onscroll = function(e) {
        var t, n;
        return n = i + K - te, t = d + h - te, Q && (window.scrollY >= ee ? Q.classList.add("scroll-header") : Q.classList.remove("scroll-header"), window.scrollY >= n && window.scrollY <= t ? Q.classList.add("dark") : Q.classList.remove("dark")), window.scrollY > C.offsetTop - window.innerHeight ? X(function() {
            return I(N.x, N.y)
        }) : void 0
    }, onscroll(), v = document.querySelector(".scroll-download"), oe = document.querySelector("header"), o = document.querySelector(".download-section"), v && v.addEventListener("click", function(e) {
        var t;
        return e.preventDefault(), t = window.scrollY <= h / 2 && 0 !== i ? oe.offsetTop : o.offsetTop, l(document.body, t, 1e3)
    }), re = document.querySelectorAll("[data-video]"), c = document.querySelector(".close"), u = null, W = function(e) {
        var t, n;
        return n = null, e ? n = e.target.getAttribute("data-video") : location.hash.indexOf("styles-video") > -1 ? n = "styles-video" : location.hash.indexOf("video") > -1 && (n = "craft-video"), (t = document.getElementById(n)) ? (u = $f(t), "craft-video" === n && (location.hash = "video"), u.addEvent("ready", function() {
            return u.api("play")
        }), t.classList.remove("hide"), document.body.classList.add("overlay-visible")) : void 0
    }, z = function(e) {
        return history.pushState("", document.title, window.location.pathname), document.body.classList.remove("overlay-visible"), u.api("pause"), setTimeout(function() {
            var e, t, n, l, o;
            for (l = document.querySelectorAll("#overlay iframe"), o = [], t = 0, n = l.length; n > t; t++) e = l[t], o.push(e.classList.add("hide"));
            return o
        }, 200)
    };
    for (T = 0, E = re.length; E > T; T++) s = re[T], s.addEventListener("click", W);
    for (c.addEventListener("click", z), W(), x || J.init({
        forceHeight: !1,
        smoothScrolling: !1
    }), R = document.querySelectorAll("[data-slide]"), k = 0, B = R.length; B > k; k++) s = R[k], s.addEventListener("click", function(e) {
        var t, n, l;
        return l = e.target.parentElement, n = l.className.match(/slide-\d/)[0], (t = e.target.getAttribute("data-slide")) ? (l.classList.remove(n), l.classList.add("slide-" + t)) : void 0
    });
    for (j = document.querySelectorAll(".download"), D = 0, F = j.length; F > D; D++) s = j[D], s.addEventListener("click", function() {});
    for (y = document.querySelectorAll("form"), L = document.querySelectorAll("form input"), le = null, a = function(e, t) {
        var n, l, o, r, i;
        for (i = [], n = r = 0, o = L.length; o > r; n = ++r) l = L[n], n !== t && i.push(l.value = e.target.value);
        return i
    }, H = Y = 0, q = L.length; q > Y; H = ++Y) w = L[H], w.addEventListener("input", function(e) {
        return a(e, H)
    });
    for ($ = 0, Z = y.length; Z > $; $++) p = y[$], p.addEventListener("submit", function(e) {
        var t;
        return e.preventDefault(), clearTimeout(le), w = p.querySelector("input"), t = w.value.trim(), m.validate(t) ? void 0 : (e.target.classList.add("invalid"), le = setTimeout(function() {
            return e.target.classList.remove("invalid")
        }, 1e3))
    })
}, function(e, t) {}, , , , , , , , , , , , , , , , , function(e, t) {
    (function() {
        function e(t) {
            return new e.fn.init(t)
        }

        function t(e, t, n) {
            return n.contentWindow.postMessage ? (e = JSON.stringify({
                method: e,
                value: t
            }), void n.contentWindow.postMessage(e, i)) : !1
        }

        function n(e) {
            var t, n;
            try {
                t = JSON.parse(e.data), n = t.event || t.method
            } catch (l) {}
            if ("ready" != n || r || (r = !0), !/^https?:\/\/player.vimeo.com/.test(e.origin)) return !1;
            "*" === i && (i = e.origin), e = t.value;
            var s = t.data,
                a = "" === a ? null : t.player_id;
            return t = a ? o[a][n] : o[n], n = [], t ? (void 0 !== e && n.push(e), s && n.push(s), a && n.push(a), 0 < n.length ? t.apply(null, n) : t.call()) : !1
        }

        function l(e, t, n) {
            n ? (o[n] || (o[n] = {}), o[n][e] = t) : o[e] = t
        }
        var o = {},
            r = !1,
            i = "*";
        return e.fn = e.prototype = {
            element: null,
            init: function(e) {
                return "string" == typeof e && (e = document.getElementById(e)), this.element = e, this
            },
            api: function(e, n) {
                if (!this.element || !e) return !1;
                var o = this.element,
                    r = "" !== o.id ? o.id : null,
                    i = n && n.constructor && n.call && n.apply ? null : n,
                    s = n && n.constructor && n.call && n.apply ? n : null;
                return s && l(e, s, r), t(e, i, o), this
            },
            addEvent: function(e, n) {
                if (!this.element) return !1;
                var o = this.element,
                    i = "" !== o.id ? o.id : null;
                return l(e, n, i), "ready" != e ? t("addEventListener", e, o) : "ready" == e && r && n.call(null, i), this
            },
            removeEvent: function(e) {
                if (!this.element) return !1;
                var n = this.element,
                    l = "" !== n.id ? n.id : null;
                e: {
                    if (l && o[l]) {
                        if (!o[l][e]) {
                            l = !1;
                            break e
                        }
                        o[l][e] = null
                    } else {
                        if (!o[e]) {
                            l = !1;
                            break e
                        }
                        o[e] = null
                    }
                    l = !0
                }
                "ready" != e && l && t("removeEventListener", e, n)
            }
        }, e.fn.init.prototype = e.fn, window.addEventListener ? window.addEventListener("message", n, !1) : window.attachEvent("onmessage", n), window.Froogaloop = window.$f = e
    })()
}, function(e, t) {
    //e.exports = '<svg xmlns="http://www.w3.org/2000/svg">\n  <defs>\n    <filter id="glow" y="-5" height="30">\n      <feGaussianBlur in="SourceAlpha" result="blur" stdDeviation="3.5"/>\n      <feColorMatrix in="blur" result="bluralpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 .4 0"/>\n      <feOffset in="bluralpha" dx="2.5" dy="2.5" result="offsetBlur"/>\n      <feMerge>\n          <feMergeNode in="offsetBlur"/>\n          <feMergeNode in="SourceGraphic"/>\n      </feMerge>\n    </filter>\n    <filter id="blur">\n      <feGaussianBlur stdDeviation="2"/>\n    </filter>\n  </defs>\n\n  <symbol id="rect">\n    <rect fill="#0f73ee" width="16" height="16"/>\n  </symbol>\n  <symbol id="rect-white">\n    <rect fill="#fff" width="16" height="16"/>\n  </symbol>\n  <symbol id="folder">\n    <path fill="#0f73ee" d="M2 6v18h24V6M10 0l2.4 4H28v22H0V0H10L10 0z"/>\n    <path fill="#b7d5fa" d="M32 24h-2V2H20V0h12V24z"/>\n  </symbol>\n  <symbol id="logo" viewBox="0 0 173.6 30">\n    <path d="M29 0v10c-5.6 0-10.1-4.4-10.3-10H29zM29 29.8v-10c-5.6 0-10.1 4.4-10.3 10H29zM54.5 16.6c4.6 0 8.3-3.7 8.3-8.3S59.1 0 54.5 0M64.4 19.7h-10c0 5.6 4.4 10.1 10 10.3V19.7zM49.8 0H38.7v29.8h11.1V0zM74.9 19.7c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1S77.7 19.7 74.9 19.7zM119.6 0c.2 5.5 4.7 10 10.3 10V0H119.6zM115.5 0h-11.1v29.8h11.1V0zM124.3 12.3c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1S127.2 12.3 124.3 12.3zM160.5 0h-11.1v29.8h11.1V0zM163.3 0c.2 5.5 4.7 10 10.3 10V0H163.3zM136.3 0v10c5.6 0 10.1-4.4 10.3-10L136.3 0zM83.7 0l-6.4 11.1 10.8 18.7h12.8L83.7 0zM0 14.9C0 23 6.5 29.6 14.6 29.8V0C6.5 0.2 0 6.8 0 14.9z"/>\n  </symbol>\n  <symbol id="logo-cropped" viewBox="36.7 0 95.2 30" filter="url(#glow)">\n    <path d="M29 0v10c-5.6 0-10.1-4.4-10.3-10H29zM29 29.8v-10c-5.6 0-10.1 4.4-10.3 10H29zM54.5 16.6c4.6 0 8.3-3.7 8.3-8.3S59.1 0 54.5 0M64.4 19.7h-10c0 5.6 4.4 10.1 10 10.3V19.7zM49.8 0H38.7v29.8h11.1V0zM74.9 19.7c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1S77.7 19.7 74.9 19.7zM119.6 0c.2 5.5 4.7 10 10.3 10V0H119.6zM115.5 0h-11.1v29.8h11.1V0zM124.3 12.3c-2.8 0-5.1 2.3-5.1 5.1s2.3 5.1 5.1 5.1c2.8 0 5.1-2.3 5.1-5.1S127.2 12.3 124.3 12.3zM160.5 0h-11.1v29.8h11.1V0zM163.3 0c.2 5.5 4.7 10 10.3 10V0H163.3zM136.3 0v10c5.6 0 10.1-4.4 10.3-10L136.3 0zM83.7 0l-6.4 11.1 10.8 18.7h12.8L83.7 0zM0 14.9C0 23 6.5 29.6 14.6 29.8V0C6.5 0.2 0 6.8 0 14.9z"/>\n  </symbol>\n  <symbol id="labs" viewBox="0 0 340 97">\n    <path d="M340 67c0 14.5-12.1 29.4-35.9 29.4 -17 0-29.6-9.2-35.3-18.5l23.3-20.5c-12-3.1-24.7-10-24.7-27 0-17.6 14.8-29.5 36.7-29.5 15.6 0 28.3 8.5 34.4 18.5l-23.3 20.5C325.1 42.7 340 48.2 340 67zM221.6 96.2H182V1h38c18.5 0 29.3 10.4 29.3 26.7 0 10.5-6.9 17.3-11.7 19.6 5.7 2.7 13 8.8 13 21.5C250.6 86.5 238.5 96.2 221.6 96.2zM80.4 96l30.1-95h23.2l30.2 95H80.4zM0 1h33.3v65.1h28V96H0V1z"/>\n  </symbol>\n  <symbol id="play" viewBox="0 0 16 16">\n    <path d="M0 0l14 8L0 16 0 0z"/>\n  </symbol>\n  <symbol id="play-btn" viewBox="0 0 61.7 61.7">\n    <path class="st1" d="M24.2,30.8V18.5l10.7,6.2l10.7,6.2L34.8,37l-10.7,6.2V30.8z"/>\n  </symbol>\n  <symbol id="facebook">\n    <path d="M2.6 17V9.2H0V6.3h2.6V3.8C2.6 1.5 4 0 6.9 0 8.1 0 9 .1 9 .1v2.6H7.1C6.2 2.7 5.8 3.2 5.8 4v2.3h3L8.4 9.2H5.8V17H2.6z"/>\n  </symbol>\n  <symbol id="twitter">\n    <path d="M16 3.5c-.6 .3-1.2 .4-1.9 .5 .7-.4 1.2-1 1.4-1.8 -.6 .4-1.3 .7-2.1 .8 -.6-.6-1.4-1-2.4-1C9.3 2 7.8 3.4 7.8 5.2c0 .3 0 .5 .1 .8C5.1 5.9 2.7 4.5 1.1 2.6 .8 3 .7 3.6 .7 4.2c0 1.1 .6 2.1 1.5 2.7 -.5 0-1-.2-1.5-.4 0 0 0 0 0 0 0 1.6 1.1 2.9 2.6 3.2C3 9.9 2.7 9.9 2.4 9.9c-.2 0-.4 0-.6-.1 .4 1.3 1.6 2.3 3.1 2.3 -1.1 .9-2.5 1.4-4.1 1.4 -.3 0-.5 0-.8 0C1.4 14.4 3.2 15 5 15c6 0 9.4-5 9.4-9.4 0-.1 0-.3 0-.4C15 4.7 15.6 4.2 16 3.5z"/>\n  </symbol>\n  <symbol id="linkedin">\n    <path d="M3.4 2.8c0 .9-.6 1.6-1.7 1.6C.6 4.4 0 3.7 0 2.8c0-.9 .7-1.6 1.7-1.6C2.8 1.2 3.4 1.9 3.4 2.8zM.1 16V5.7h3.2V16H.1zM5.2 9c0-1.3 0-2.4-.1-3.3h2.8l.1 1.4h.1c.4-.7 1.5-1.7 3.2-1.7 2.1 0 3.7 1.4 3.7 4.5V16h-3.2v-5.7c0-1.3-.5-2.2-1.6-2.2C9.3 8 8.8 8.6 8.5 9.2 8.4 9.4 8.4 9.7 8.4 10v6H5.2V9z"/>\n  </symbol>\n  <symbol id="icon-type" viewBox="0 0 16 16">\n    <use xlink:href="#rect"/>\n    <path fill="#fff" d="M7.4 12.3H3.8V3.7h3.5V12.3zM12.2 3.7H8.6c0 1.9 1.6 3.5 3.5 3.5V3.7zM8.6 10.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8 -.8-1.8-1.8-1.8S8.6 9.6 8.6 10.5z"/>\n  </symbol>\n  <symbol id="icon-type-white" viewBox="0 0 16 16">\n    <use xlink:href="#rect-white"/>\n    <path fill="#0f73ed" d="M7.4 12.3H3.8V3.7h3.5V12.3zM12.2 3.7H8.6c0 1.9 1.6 3.5 3.5 3.5V3.7zM8.6 10.5c0 1 .8 1.8 1.8 1.8s1.8-.8 1.8-1.8 -.8-1.8-1.8-1.8S8.6 9.6 8.6 10.5z"/>\n  </symbol>\n  <symbol id="icon-photos" viewBox="0 0 16 16">\n    <use xlink:href="#rect"/>\n    <path fill="#fff" d="M4.2 12.3L8 8.5l3.8 3.8L4.2 12.3zM8 3.7c-1 0-1.8 .8-1.8 1.8S7 7.2 8 7.2s1.8-.8 1.8-1.8S9 3.7 8 3.7z"/>\n  </symbol>\n  <symbol id="icon-photos-white" viewBox="0 0 16 16">\n    <use xlink:href="#rect-white"/>\n    <path fill="#0f73ed" d="M4.2 12.3L8 8.5l3.8 3.8L4.2 12.3zM8 3.7c-1 0-1.8 .8-1.8 1.8S7 7.2 8 7.2s1.8-.8 1.8-1.8S9 3.7 8 3.7z"/>\n  </symbol>\n  <symbol id="icon-duplicate" viewBox="0 0 16 16">\n    <use xlink:href="#rect"/>\n    <path fill="#fff" d="M3 3.7c2.4 0 4.3 1.9 4.3 4.3S5.4 12.3 3 12.3M9.2 12.3c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3"/>\n  </symbol>\n  <symbol id="icon-duplicate-white" viewBox="0 0 16 16">\n    <use xlink:href="#rect-white"/>\n    <path fill="#0f73ed" d="M3 3.7c2.4 0 4.3 1.9 4.3 4.3S5.4 12.3 3 12.3M9.2 12.3c2.4 0 4.3-1.9 4.3-4.3s-1.9-4.3-4.3-4.3"/>\n  </symbol>\n\n  <symbol id="icon-styles" viewBox="0 0 16 16">\n    <use xlink:href="#rect" />\n    <path fill="#fff" d="M8.9,5.8c2,0,3.6,1.6,3.6,3.6S10.9,13,8.9,13V5.8z M7.1,2.8c-2,0-3.6,1.6-3.6,3.6S5.1,10,7.1,10V2.8z"/>\n  </symbol>\n  <symbol id="icon-styles-white" viewBox="0 0 16 16">\n    <use xlink:href="#rect-white" />\n    <path fill="#0f73ed" d="M8.9,5.9c2,0,3.6,1.6,3.6,3.6s-1.6,3.6-3.6,3.6V5.9z M7.1,2.9c-2,0-3.6,1.6-3.6,3.6s1.6,3.6,3.6,3.6V2.9z"/>\n  </symbol>\n  <symbol id="icon-prototype" viewBox="0 0 16 16">\n    <use xlink:href="#rect" />\n    <path fill="#fff" d="M9.08,3.1a3.38,3.38,0,0,1,0,6.77V3.1ZM7.44,7.5h-3v5.4h3V7.5ZM5.94,3.1a1.5,1.5,0,1,0,1.5,1.5A1.5,1.5,0,0,0,5.94,3.1Z"/>\n  </symbol>\n  <symbol id="icon-prototype-white" viewBox="0 0 16 16">\n    <use xlink:href="#rect-white" />\n    <path fill="#0f73ed" d="M7.38,12.31H3.85V8.22H7.38v4.09ZM3.89,5.44A1.77,1.77,0,1,0,5.65,3.68,1.77,1.77,0,0,0,3.89,5.44Zm5,5a3.38,3.38,0,0,0,0-6.77v6.77Z"/>\n  </symbol>\n  <symbol id="arrow">\n    <path fill="none" stroke="#fff" stroke-width="2" d="M15.5 3.5L8 11 .5 3.5"/>\n  </symbol>\n  <symbol id="panels-hey" viewBox="0 0 39 29">\n    <path fill="#91b7f7" d="M37 27H2V2h35V27zM4 25h31V4H4V25z"/>\n    <path fill="#fff" d="M0 0h6v6H0V0zM0 23h6v6H0V23zM33 0h6v6h-6V0zM33 23h6v6h-6V23zM16.7 17.4h-1.7v-2.6h-2v2.6h-1.7v-6.4h1.7v2.4h2v-2.4h1.7V17.4zM21.9 17.4h-3.8v-6.4h3.8v1.4h-2.1v1h1.9v1.4h-1.9V16h2.1V17.4zM25.3 13.3l1.1-2.4h1.9l-2.1 3.9v2.5h-1.8v-2.5l-2.1-4h1.9L25.3 13.3z"/>\n  </symbol>\n  <symbol id="panels-speed" viewBox="0 0 42.9 31.3">\n    <path fill="#91b7f7" d="M31.7 10.4H6.8v-2h24.9V10.4zM27.9 12.4H3v2h24.9V12.4zM9 16.4v2h24.9v-2H9z"/>\n    <path fill="#fff" d="M40.9 8.9l.1-.4c0-.2 .1-.5 .1-.7 0-3.4-2.8-6.2-6.2-6.2 -2.5 0-4.8 1.5-5.8 3.9L31 6.1c.7-1.6 2.2-2.6 3.9-2.6 2.3 0 4.2 1.9 4.2 4.2 0 .1 0 .2-.1 .4l0 .1c-.2 .5-.2 1.1 .1 1.6 .3 .5 .8 .9 1.3 1 2 .4 3.4 2.1 3.4 4.1 0 2.3-1.9 4.2-4.2 4.2 -.2 0-.5 0-.7-.1l-.1 0c-.6-.2-1.2-.2-1.8 .2 -.5 .4-.8 .9-.8 1.6 0 2.3-1.8 4.1-4.2 4.1 -2 0-3.7-1.4-4.1-3.4l-2 .4c.6 2.9 3.2 5 6.1 5 3.4 0 6.1-2.6 6.2-6l.2 .1c.4 .1 .8 .1 1.2 .1 3.4 0 6.2-2.8 6.2-6.2C45.9 12.1 43.8 9.5 40.9 8.9z"/>\n  </symbol>\n  <symbol id="panels-integration" viewBox="0 0 47.1 24.6">\n    <path fill="#91b7f7" d="M28.4 15.9h-1.8v1.8h-1.2v-1.8h-1.8v-1.2h1.8v-1.8h1.2v1.8h1.8V15.9z"/>\n    <path fill="#fff" d="M12.4 14.5c0-1.1 .9-1.9 2.3-1.9 .7 0 1.2 .2 1.5 .4v1.3c-.3-.1-1-.5-1.5-.5 -.4 0-.7 .2-.7 .5 0 .3 .2 .4 .9 .7 1.1 .4 1.5 .9 1.6 1.8 0 1.1-.8 1.9-2.5 1.8 -.6 0-1.2-.2-1.6-.5v-1.3c.3 .2 1.1 .5 1.6 .5 .5 0 .8-.2 .8-.5 0-.3-.2-.6-.8-.8C12.8 15.7 12.4 15.2 12.4 14.5zM8.3 18.6H6.6l0-7.6c0 0 1.2 0 2.2 0 1 0 1.7 .2 2.2 .6 .5 .4 .8 1.1 .8 1.8 0 .8-.2 1.4-.7 1.8 -.6 .6-1.2 .9-2.3 .9 -.3 0-.6 0-.6 0V18.6zM8.3 14.8c.2 0 .3 0 .5 0 .9 0 1.4-.5 1.4-1.3 0-.7-.4-1.3-1.3-1.3 -.3 0-.7 0-.7 0V14.8zM21.2 5.7v18.6H2V5.7H21.2zM20 6.9H3.2v16.2H20V6.9zM49.1 10.8L39.1 24.2 29 10.8l2.9-3.3L35.4 6h7.4l3.5 1.5L49.1 10.8zM46.1 8.5l-3 1.4 2.1 3.1 2.7-2L46.1 8.5zM42 10h-5.8l-2 3.6H44L42 10zM33.5 7.8l2.7 1.3h5.8l2.7-1.3 -2.7-1.2 -5.8 0L33.5 7.8zM30.2 10.9l2.7 2 2.1-3.1 -3-1.4L30.2 10.9zM37 20.8L33 14.2l-1.7-1.3L37 20.8zM39.1 22.9l4.7-8.3h-9.3L39.1 22.9zM46.8 12.9l-1.7 1.3 -4.1 6.6L46.8 12.9z"/>\n  </symbol>\n  <symbol id="type-hello">\n    <path fill="#b7d5fa" d="M49 27H2V2h47V27zM4 25h43V4H4V25z"/>\n    <path fill="#0f73ee" d="M16.5 11h-1.7v2.4h-2V11H11v6.4h1.7v-2.6h2v2.6h1.7V11zM22.3 16h-2.1v-1.2h1.9v-1.4h-1.9v-1h2.1V11h-3.8v6.4h3.8V16zM28.3 17.4V16h-2.5v-5h-1.7v6.4H28.3zM33.8 17.4V16h-2.5v-5h-1.7v6.4H33.8zM40.4 11.7c-.5-.6-1.3-.8-2.3-.8 -1 0-1.8 .3-2.3 .8 -.5 .6-.8 1.4-.8 2.4 0 1.1 .3 1.9 .8 2.5 .5 .6 1.3 .8 2.3 .8 1 0 1.8-.3 2.3-.8 .5-.6 .8-1.4 .8-2.5C41.1 13.1 40.9 12.3 40.4 11.7zM38 12.3c.4 0 .7 .2 1 .5 .2 .3 .3 .8 .3 1.4 0 .6-.1 1.1-.3 1.4 -.2 .3-.5 .5-1 .5 -.9 0-1.3-.6-1.3-1.9C36.7 12.9 37.2 12.3 38 12.3L38 12.3zM0 0h6v6H0V0zM0 23h6v6H0V23zM45 0h6v6h-6V0zM45 23h6v6h-6V23z"/>\n  </symbol>\n  <symbol id="type-custom">\n    <path fill="#0f73ee" d="M19 20h-2v-4h-4v-2h4v-4h2v4h4v2h-4V20z"/>\n    <path fill="#b7d5fa" d="M36 30h-4v-2h2v-2h2V30zM27.3 28h-7v2h7V28zM15.7 28h-7v2h7V28zM4 28H2v-2H0v4h4V28zM2 16.8H0v5.5h2V16.8zM2 7.7H0v5.5h2V7.7zM2 2h2V0H0v4h2V2zM27.3 0h-7v2h7V0zM15.7 0h-7v2h7V0zM36 0h-4v2h2v2h2V0zM36 16.8h-2v5.5h2V16.8zM36 7.7h-2v5.5h2V7.7z"/>\n  </symbol>\n  <symbol id="type-web">\n    <path fill="#0f73ee" d="M0 0h7v6H0V0zM10 0h20v6H10V0zM0 9h7v6H0V9zM10 9h20v6H10V9z"/>\n    <path fill="#b7d5fa" d="M30 24H10v-6h20V24zM12 22h16v-2H12V22zM7 24H0v-6h7V24zM2 22h3v-2H2V22z"/>\n  </symbol>\n  <symbol id="type-categories">\n    <path fill="#0f73ee" d="M5 14h4v2H5V14zM5 18h4v2H5V18zM5 22h4v2H5V22zM4 3c.6 0 1 .4 1 1S4.6 5 4 5 3 4.6 3 4 3.4 3 4 3zM7 3c.6 0 1 .4 1 1S7.6 5 7 5 6 4.6 6 4 6.4 3 7 3zM10 3c.6 0 1 .4 1 1s-.4 1-1 1C9.4 5 9 4.6 9 4S9.4 3 10 3zM11 14h19v2H11V14zM11 18h19v2H11V18zM11 22h19v2H11V22z"/>\n    <path fill="#b7d5fa" d="M0 0v30h35V0H0zM33 2v4H2V2H33zM30 28v-2H11v2H9v-2H5v2H2V8h31v20H30z"/>\n  </symbol>\n  <symbol id="photos-folder">\n    <use xlink:href="#folder" />\n  </symbol>\n  <symbol id="photos-dropbox">\n    <use xlink:href="#folder" />\n    <path fill="#0f73ee" d="M13.5 11.1l-4.7 2.8 -3.3-2.5 4.7-2.9L13.5 11.1zM8.8 13.8l4.7 2.8 -3 2.2 -5-2.8L8.8 13.8zM18.2 13.8l3.3 2.1 -4 2.8 -4-2.2L18.2 13.8zM18.2 13.8l-4.7-2.8 3.3-2.6 4.7 2.9L18.2 13.8zM16.8 19.7l1.7 0 -.3 .1 -4.7 2.7 -4.7-2.7 .7-.1 .7 0 3.3-1.9L16.8 19.7z"/>\n  </symbol>\n  <symbol id="photos-unsplash">\n    <path fill="#0f73ee" d="M35 29H0V4h35V29zM2 27h31V6H2V27zM12 14l7 10 0 0H5L12 14z"/>\n    <path fill="#b7d5fa" d="M39 25h-2V2H5V0h34V25zM21 13c0 2.2 1.8 4 4 4s4-1.8 4-4 -1.8-4-4-4S21 10.8 21 13z"/>\n  </symbol>\n  <symbol id="photos-web">\n    <path fill="#0f73ee" d="M4 3c.6 0 1 .4 1 1S4.6 5 4 5 3 4.6 3 4 3.4 3 4 3zM7 3c.6 0 1 .4 1 1S7.6 5 7 5 6 4.6 6 4 6.4 3 7 3zM10 3c.6 0 1 .4 1 1s-.4 1-1 1C9.4 5 9 4.6 9 4S9.4 3 10 3zM5 15h11v7H5V15zM19 15h11v7H19V15z"/>\n    <path fill="#b7d5fa" d="M0 0v30h35V0H0zM33 2v4H2V2H33zM30 28v-4H19v4h-3v-4H5v4H2V8h31v20H30z"/>\n  </symbol>\n  <symbol id="duplicate-pixelperfect">\n    <path fill="#0f73ee" d="M0 0h11v11H0V0z"/>\n    <path fill="#b7d5fa" d="M26 0v11H15V0H26zM15 26h11V15H15V26zM0 26h11V15H0V26z"/>\n  </symbol>\n  <symbol id="duplicate-masks">\n    <path fill="#0f73ee" d="M5 5h11v11H5V5zM20 5v11h11V5H20zM5 23h11v-3H5V23zM20 23h11v-3H20V23z"/>\n    <path fill="#b7d5fa" d="M36 0H0v25h5v5h11v-5h4v5h11v-5h5V0zM34 23H2V2h32V23z"/>\n  </symbol>\n  <symbol id="duplicate-edit">\n    <path fill="#0f73ee" d="M7.7 24.2L1.4 26 0 19.4 12 0l7.8 4.5L7.7 24.2zM2.5 19l5 3L17.9 5l-5-3L2.5 19z"/>\n    <path fill="#b7d5fa" d="M10.9 24h16v3h-16V24z"/>\n  </symbol>\n  <symbol id="duplicate-two-methods">\n    <path fill="#b7d5fa" d="M38.7 3.7l-28 31 -1.5-1.3 28-31L38.7 3.7zM10.4 25H4V4h21v5.1h2V2H2v25h8.4V25z"/>\n    <path fill="#0f73ee" d="M0 6h6V0H0V6zM2 2h2v2H2V2zM0 29h6v-6H0V29zM2 25h2v2H2V25zM42 13v3h-9v-3H42zM28 19h14v3H28V19zM23 25h19v3H23V25zM29 0h-6v6h6V0zM27 4h-2V2h2V4z"/>\n  </symbol>\n  <symbol id="styles-beautiful" viewBox="0 0 37.8 28.5">\n    <style type="text/css">\n      .st0{fill:#0F73ED;}\n      .st1{fill:#B6D4FB;}\n    </style>\n    <path class="st0" d="M18.9,20.1c-0.2,0-0.4-0.1-0.6-0.2c-0.8-0.5-7.4-5.5-7.4-9.6c0-2.8,2-4.6,4-4.8c1.3-0.2,2.9,0.3,4,1.9\n      c1.1-1.6,2.7-2,4-1.9c2,0.2,4,2,4,4.8c0,4.1-6.7,9.1-7.4,9.6C19.3,20,19.1,20.1,18.9,20.1z M15.4,7.5c-0.1,0-0.2,0-0.2,0\n      c-1.1,0.1-2.2,1.1-2.2,2.8c0,2.2,3.5,5.6,6,7.5c2.5-2,6-5.4,6-7.5c0-1.8-1.1-2.7-2.2-2.8c-1-0.1-2.3,0.5-2.8,2.6\n      c-0.1,0.4-0.5,0.8-1,0.8s-0.9-0.3-1-0.8C17.5,8.1,16.3,7.5,15.4,7.5z"/>\n    <path class="st1" d="M36.8,21.8h-0.6V3.3c0-1.8-1.5-3.3-3.3-3.3h-28C3.1,0,1.6,1.5,1.6,3.3v18.5H1c-0.6,0-1,0.4-1,1v3.1\n      c0,1.4,1.1,2.6,2.6,2.6h32.7c1.4,0,2.6-1.1,2.6-2.6v-3.1C37.8,22.3,37.4,21.8,36.8,21.8z M3.6,3.3C3.6,2.6,4.2,2,4.9,2h28\n      c0.7,0,1.3,0.6,1.3,1.3v18.5H22.8c-0.6,0-1,0.4-1,1v0.6H16v-0.6c0-0.6-0.4-1-1-1H3.6V3.3z M35.8,25.9c0,0.3-0.3,0.6-0.6,0.6H2.6\n      c-0.3,0-0.6-0.2-0.6-0.6v-2.1h12v0.6c0,0.6,0.4,1,1,1h7.8c0.6,0,1-0.4,1-1v-0.6h12V25.9z"/>\n  </symbol>\n  </symbol>\n  <symbol id="styles-synced" viewBox="0 0 40.1 30.7">\n    <style type="text/css">\n      .st0{fill:#B6D4FB;}\n      .st1{fill:#0F73ED;}\n    </style>\n    <path class="st0" d="M11.9,13.7l-5.4,6.5c-0.2,0.2-0.5,0.4-0.8,0.4c0,0,0,0-0.1,0c-0.3,0-0.6-0.2-0.8-0.4l-4.7-7\n      C-0.1,12.7,0,12,0.4,11.7c0.5-0.3,1.1-0.2,1.4,0.3l2.5,3.7c0.1-2.8,0.9-5.6,2.4-8.1c2.2-3.6,5.8-6.2,9.8-7.2\n      c5.5-1.3,11.3,0.5,15,4.8c0.4,0.4,0.3,1-0.1,1.4C31,7,30.4,6.9,30,6.5C26.8,2.8,21.8,1.2,17,2.4c-3.5,0.8-6.6,3.1-8.6,6.3\n      c-1.6,2.6-2.3,5.6-2,8.6l4-4.8c0.4-0.4,1-0.5,1.4-0.1C12.2,12.7,12.2,13.3,11.9,13.7z M39.9,19.3l-4.7-7c-0.2-0.3-0.5-0.4-0.8-0.4\n      c-0.3,0-0.6,0.1-0.8,0.4l-5.4,6.5c-0.4,0.4-0.3,1.1,0.1,1.4c0.4,0.4,1.1,0.3,1.4-0.1l3.8-4.6c-0.1,6-4.4,11.5-10.4,12.9\n      c-4.5,1.1-9.1-0.2-12.4-3.5c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4c2.9,2.9,6.8,4.4,10.7,4.4c1.2,0,2.4-0.1,3.6-0.4\n      c6.6-1.6,11.4-7.5,11.9-14l2.7,4.1c0.2,0.3,0.5,0.4,0.8,0.4c0.2,0,0.4-0.1,0.6-0.2C40.1,20.3,40.2,19.7,39.9,19.3z"/>\n    <path class="st1" d="M20,19.7c-1.1,0-2.2-0.4-3.1-1.3c-1.7-1.7-1.7-4.5,0-6.2c1.7-1.7,4.5-1.7,6.2,0c1.7,1.7,1.7,4.5,0,6.2\n      C22.3,19.3,21.2,19.7,20,19.7z M20,13c-0.6,0-1.2,0.2-1.7,0.7c-0.9,0.9-0.9,2.4,0,3.4c0.9,0.9,2.4,0.9,3.4,0c0.9-0.9,0.9-2.4,0-3.4\n      C21.2,13.2,20.6,13,20,13z"/>\n  </symbol>  \n  <symbol id="styles-fast" viewBox="0 0 28.2 31.8">\n    <style type="text/css">\n      .st0{fill:#0F73ED;}\n      .st1{fill:#B6D4FB;}\n    </style>\n    <path class="st0" d="M21.8,26.8c-0.4-0.4-0.4-1,0-1.4l1.8-1.8c0.4-0.4,1-0.4,1.4,0s0.4,1,0,1.4l-1.8,1.8c-0.2,0.2-0.5,0.3-0.7,0.3\n      S22,27,21.8,26.8z M18.6,23.6c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.8,1.8c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3\n      c0.4-0.4,0.4-1,0-1.4L18.6,23.6z M23.2,28.2c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l1.8,1.8c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3\n      c0.4-0.4,0.4-1,0-1.4L23.2,28.2z M19,28.2l-1.8,1.8c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l1.8-1.8\n      c0.4-0.4,0.4-1,0-1.4S19.4,27.8,19,28.2z"/>\n    <path class="st1" d="M27.2,0h-11c-0.4,0-0.8,0.2-0.9,0.6c-0.2,0.4-0.1,0.8,0.2,1.1l2.2,2.2l-9.2,9.2c-0.2,0.2-0.3,0.4-0.3,0.7 s0.1,0.5,0.3,0.7l2.1,2.1L0.3,26.9c-0.4,0.4-0.4,1,0,1.4c0.2,0.2,0.5,0.3,0.7,0.3c0.3,0,0.5-0.1,0.7-0.3L12,18l0.3,0.3 c-0.7,1-2.2,3.2-2,5.6c0.2,1.6,1,2.9,2.5,4c0.2,0.1,0.4,0.2,0.6,0.2c0.3,0,0.6-0.1,0.8-0.4c0.3-0.5,0.2-1.1-0.2-1.4 c-1-0.7-1.6-1.6-1.7-2.5c-0.2-1.6,0.8-3.2,1.4-4l0.3,0.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3l9.1-9.1l2,2 c0.2,0.2,0.5,0.3,0.7,0.3c0.1,0,0.3,0,0.4-0.1c0.4-0.2,0.6-0.5,0.6-0.9V1C28.2,0.4,27.8,0,27.2,0z M14.8,17.9l-4.1-4.1L19,5.4 l4.1,4.1L14.8,17.9z M26.2,9.9l-0.9-1c0,0,0,0,0-0.1l-0.7-0.7l-6-6.2h7.6V9.9z"/>\n  </symbol>\n  <symbol id="styles-custom" viewBox="0 0 38.3 31">\n    <style type="text/css">\n      .st0{fill:#0F73ED;}\n      .st1{fill:#B6D4FB;}\n    </style>\n    <polygon class="st0" points="24.2,14.5 20.2,14.5 20.2,10.5 18.2,10.5 18.2,14.5 14.2,14.5 14.2,16.5 18.2,16.5 18.2,20.5 \n      20.2,20.5 20.2,16.5 24.2,16.5 "/>\n    <path class="st1" d="M38.3,31h-3.5v-2h1.5v-1.5h2V31z M28.1,29h-5.6v2h5.6V29z M15.8,29h-5.6v2h5.6V29z M3.5,29H2v-1.5H0V31h3.5V29z M2,18.1H0v4.3h2V18.1z M2,8.6H0v4.3h2V8.6z M2,2h1.5V0H0v3.5h2V2z M28.1,0h-5.6v2h5.6V0z M15.8,0h-5.6v2h5.6V0z M38.3,0h-3.5v2h1.5 v1.5h2V0z M38.3,18.1h-2v4.3h2V18.1z M38.3,8.6h-2v4.3h2V8.6z"/>\n  </symbol>\n  <symbol id="prototype-native" viewBox="0 0 36.15 32.58">\n    <style>\n      .native-cls-1{fill:#fff;}\n      .native-cls-2{fill:#0F73ED;}\n    </style>\n    <path class="native-cls-1" d="M10,11.82h16.2a1.27,1.27,0,0,0,.46-0.14l6-4.06-0.05,0h0L28.28,4.7,26.1,6.18a3.4,3.4,0,0,1-1.72.53H11.78A3.39,3.39,0,0,1,10,6.18L7.87,4.7,3.57,7.62l6,4.06A1.3,1.3,0,0,0,10,11.82Z"/>\n    <path class="native-cls-1" d="M30,12.09l-2.1,1.43a3.35,3.35,0,0,1-1.72.53H10a3.36,3.36,0,0,1-1.72-.53l-2.1-1.43L18.08,28.74Z"/>\n    <path class="native-cls-1" d="M11.3,4.33a1.26,1.26,0,0,0,.47.14h12.6a1.26,1.26,0,0,0,.47-0.14l1.44-1L24.63,2.24H11.52L9.87,3.35Z"/>\n    <path class="native-cls-2" d="M25.32,0H10.83L2.36,5.73h0L1.67,6.2,0,7.33,18.08,32.58,36.15,7.33ZM24.63,2.24l1.65,1.12-1.44,1a1.26,1.26,0,0,1-.47.14H11.78a1.26,1.26,0,0,1-.47-0.14l-1.44-1,1.65-1.12H24.63ZM7.87,4.7L10,6.18a3.39,3.39,0,0,0,1.73.53h12.6a3.4,3.4,0,0,0,1.72-.53L28.28,4.7l4.26,2.88h0l0.05,0-6,4.06a1.27,1.27,0,0,1-.46.14H10a1.3,1.3,0,0,1-.46-0.14l-6-4.06Zm0.39,8.82a3.36,3.36,0,0,0,1.72.53h16.2a3.35,3.35,0,0,0,1.72-.53L30,12.09,18.08,28.74,6.15,12.09Z"/>\n  </symbol>\n  <symbol id="sketch-exclusive" viewBox="0 0 36.15 32.58">\n    <style>\n      .exclusive-cls-1{fill:#fff;}\n      .exclusive-cls-2{fill:#8dbdfb;}\n    </style>\n    <path class="exclusive-cls-1" d="M10,11.82h16.2a1.27,1.27,0,0,0,.46-0.14l6-4.06-0.05,0h0L28.28,4.7,26.1,6.18a3.4,3.4,0,0,1-1.72.53H11.78A3.39,3.39,0,0,1,10,6.18L7.87,4.7,3.57,7.62l6,4.06A1.3,1.3,0,0,0,10,11.82Z"/>\n    <path class="exclusive-cls-1" d="M30,12.09l-2.1,1.43a3.35,3.35,0,0,1-1.72.53H10a3.36,3.36,0,0,1-1.72-.53l-2.1-1.43L18.08,28.74Z"/>\n    <path class="exclusive-cls-1" d="M11.3,4.33a1.26,1.26,0,0,0,.47.14h12.6a1.26,1.26,0,0,0,.47-0.14l1.44-1L24.63,2.24H11.52L9.87,3.35Z"/>\n    <path class="exclusive-cls-2" d="M25.32,0H10.83L2.36,5.73h0L1.67,6.2,0,7.33,18.08,32.58,36.15,7.33ZM24.63,2.24l1.65,1.12-1.44,1a1.26,1.26,0,0,1-.47.14H11.78a1.26,1.26,0,0,1-.47-0.14l-1.44-1,1.65-1.12H24.63ZM7.87,4.7L10,6.18a3.39,3.39,0,0,0,1.73.53h12.6a3.4,3.4,0,0,0,1.72-.53L28.28,4.7l4.26,2.88h0l0.05,0-6,4.06a1.27,1.27,0,0,1-.46.14H10a1.3,1.3,0,0,1-.46-0.14l-6-4.06Zm0.39,8.82a3.36,3.36,0,0,0,1.72.53h16.2a3.35,3.35,0,0,0,1.72-.53L30,12.09,18.08,28.74,6.15,12.09Z"/>\n  </symbol>\n  <symbol id="prototype-mirrored" viewBox="0 0 32.67 32.67">\n    <style>\n      .mirrored-cls-1,.mirrored-cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}\n      .mirrored-cls-1{stroke:#3f70b7;}\n      .mirrored-cls-2{stroke:#b9d3ee;}\n    </style>\n    <path class="mirrored-cls-1" d="M26.67,14.33H15.33m7.33,4,4-4-4-4m-5.33,9.33H6m4-4-4,4,4,4"/>\n    <rect class="mirrored-cls-2" x="1" y="1" width="30.67" height="30.67"/>\n  </symbol>\n  <symbol id="prototype-real" viewBox="0 0 39.62 33.08">\n    <style>\n      .real-cls-1,.real-cls-2{fill:none;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}\n      .real-cls-1{stroke:#3f70b7;}\n      .real-cls-2{stroke:#b9d3ee;}\n    </style>\n    <path class="real-cls-1" d="M12.82,16.09l4.09,4.09-4.09,4.09m9-3.27h6.54M23.08,4.27a0.82,0.82,0,1,0,.82.82A0.82,0.82,0,0,0,23.08,4.27Zm4.91,0a0.82,0.82,0,1,0,.82.82A0.82,0.82,0,0,0,28,4.27Zm4.91,0a0.82,0.82,0,1,0,.82.82A0.82,0.82,0,0,0,32.9,4.27Z"/>\n    <rect class="real-cls-2" x="1" y="1" width="37.62" height="31.08"/>\n    <line class="real-cls-2" x1="1" y1="9.18" x2="38.62" y2="9.18"/>\n  </symbol>\n  <symbol id="prototype-instant" viewBox="0 0 33.25 33.25">\n    <style>\n      .instant-cls-1,.instant-cls-2,.instant-cls-3{fill:none;stroke-width:2px;}\n      .instant-cls-1{stroke:#b9d3ee;stroke-linejoin:round;}\n      .instant-cls-1,.instant-cls-2{stroke-linecap:round;}\n      .instant-cls-2,.instant-cls-3{stroke:#3f70b7;stroke-miterlimit:10;}\n    </style>\n    <path class="instant-cls-1" d="M25.46,6.43V3.72H7.79V1H1V22.06a2,2,0,1,0,4.08,0V6.43h23.1v6.79"/>\n    <line class="instant-cls-1" x1="3.04" y1="24.1" x2="13.23" y2="24.1"/>\n    <polyline class="instant-cls-2" points="31.57 20.02 31.57 23.42 28.17 23.42"/>\n    <path class="instant-cls-3" d="M20,26.14a6.12,6.12,0,0,1,11.59-2.72"/>\n    <polyline class="instant-cls-2" points="20.7 31.57 20.7 28.85 23.42 28.85"/>\n    <path class="instant-cls-3" d="M32.25,26.14a6.12,6.12,0,0,1-11.59,2.72"/>\n  </symbol>\n  <symbol id="particle-1">\n    <path d="M0 8.3L8.3 0l8.3 8.3 -8.3 8.3L0 8.3z"/>\n  </symbol>\n  <symbol id="particle-2">\n    <path d="M8.3 16.7C3.6 16.7 0 13.2 0 8.5 0 3.5 3.4 0 8.2 0L8.3 16.7z"/>\n  </symbol>\n  <symbol id="particle-3">\n    <path d="M12.6 3.6H2.9V0h9.7V3.6zM16.5 12.4c0 5-3.4 8.7-8 8.7 -5 0-8.4-3.5-8.4-8.6L16.5 12.4 16.5 12.4z"/>\n  </symbol>\n  <symbol id="particle-4">\n    <path d="M2.7 8.3c0 3.6 2.2 5.7 5.8 5.7 3.2 0 5.4-2.4 5.4-5.9M8.5 16.7C3.3 16.7 0 13.4 0 8.3 0 3.6 3.5 0 8.1 0c5 0 8.5 3.3 8.5 8.1C16.7 13.1 13.2 16.7 8.5 16.7"/>\n  </symbol>\n  <symbol id="particle-5">\n    <path d="M0 2.7l2.5-2.5 4 4L10.7 0l2.6 2.6L9.2 6.8l4 4 -2.5 2.5L0 2.7z"/>\n  </symbol>\n  <symbol id="particle-6">\n    <path d="M0 7.4L7.4 0 10 2.6 2.6 10 0 7.4z"/>\n  </symbol>\n  <symbol id="particle-7">\n    <path d="M3.8 0c2.4 0 4.1 1.6 4.1 4 0 2.5-1.6 4.2-3.8 4.2C1.6 8.2 0 6.6 0 4 0 1.7 1.7 0 3.8 0zM21.6 16.4c4 0 6.8 2.6 6.8 6.6 0 4.1-2.6 7-6.4 7 -4.2 0-6.8-2.6-6.8-6.8C15.2 19.2 18.1 16.4 21.6 16.4L21.6 16.4z"/>\n  </symbol>\n  <symbol id="particle-8">\n    <path d="M10.7 11.7c-2.8 0-5.4-1-7.3-2.8C1.3 7 0.1 4.4 0 1.5l2-.1c.1 2.3 1 4.4 2.7 6 1.7 1.6 3.9 2.4 6.4 2.3 5.6-.2 8.8-3.8 8.6-9.5l2-.1c.3 6.8-3.8 11.4-10.5 11.7C11 11.7 10.8 11.7 10.7 11.7"/>\n  </symbol>\n  <symbol id="particle-9">\n    <path d="M2.1 12.9h10.8V2.1H2.1V12.9zM15 15H0V0h15V15z"/>\n  </symbol>\n  <symbol id="particle-10">\n    <path d="M12.3 26.7H0V14.4h12.3V26.7zM14.4 12.3h10.3V2H14.3L14.4 12.3 14.4 12.3zM26.7 14.4H12.3V0h14.4V14.4z"/>\n  </symbol>\n  <symbol id="particle-11">\n    <path d="M3.9 20c-2.4-2.3-3.8-5.1-3.9-7.9s1-5.7 3.3-8.2c4.2-4.7 10.7-5.1 15.1-.9L17 4.4C13.4 1 8.2 1.4 4.7 5.2 2.9 7.3 1.9 9.7 2 12c.1 2.3 1.2 4.6 3.2 6.5L3.9 20z"/>\n  </symbol>\n  <symbol id="particle-12">\n    <path d="M28.3 3.9c0 2.5-1.6 4.1-4.1 4.1 -2.5 0-4.4-1.6-4.4-3.9 0-2.6 1.6-4.2 4.3-4.2C26.6 0 28.3 1.8 28.3 3.9L28.3 3.9zM12.6 26.7H0V14.4h12.6V26.7z"/>\n  </symbol>\n  <symbol id="particle-13">\n    <path d="M0 8.6L9.1 0l9.2 8.8L0 8.6 0 8.6zM3.8 19.9l5.3-5 5.4 5.1L3.8 19.9 3.8 19.9z"/>\n  </symbol>\n</svg>\n'
    e.exports = '<svg xmlns="http://www.w3.org/2000/svg"><defs> <symbol id="particle-3"><g id="" fill-rule="evenodd" fill="none"><g id="" fill="#EFEFF4" transform="translate(-153 -166)"><g id="" transform="matrix(-0.0140701 0.999901 -0.999901 -0.0140701 285.424 74.7538)"><path id="" d="M111.32000000000005,123.23000000000003l-15.168999999999997,9.58999999999999c-0.6359999999999957,0.4000000000000057,-1.1509999999999962,0.11000000000001364,-1.1509999999999962,-0.6599999999999966v-19.319999999999993c0,-0.769999999999996,0.5160000000000053,-1.0600000000000023,1.1509999999999962,-0.6599999999999966l15.168999999999997,9.590000000000003c0.6400000000000006,0.4000000000000057,0.6400000000000006,1.0600000000000023,0,1.4599999999999937Z" transform="matrix(0.732533 -4.63981e-19 -1.73472e-18 0.732533 26.2769 32.9033)"/></g></g></g></symbol><symbol id="particle-2"><g id="Tasma" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="about-Deskcop" transform="translate(-58.000000, -429.000000)" fill="#EFEFF4">    <g id="Group" transform="translate(58.000000, 54.000000)">   <rect id="Rectangle-30-Copy-11" transform="translate(14.323164, 388.896887) rotate(43.000000) translate(-14.323164, -388.896887) " x="0.021343015" y="383.231955" width="28.603642" height="11.3298639"></rect> </g></g></g></symbol> <symbol id="particle-1"> <g id="" fill-rule="evenodd" fill="none"><g id="" fill="#EFEFF4" transform="translate(-153 -166)"><g id="" transform="translate(58 54)"><path id="" d="m111.32 123.23l-15.169 9.59c-0.636 0.4-1.151 0.11-1.151-0.66v-19.32c0-0.77 0.516-1.06 1.151-0.66l15.169 9.59c0.64 0.4 0.64 1.06 0 1.46z"/></g></g></g></symbol> </defs></svg>'
}, function(e, t) { /*! skrollr 0.6.30 (2015-08-12) | Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr | Free to use under terms of MIT license */
    ! function(t, n, l) {
        "use strict";

        function o(e) {
            if (r = n.documentElement, i = n.body, R(), ae = this, e = e || {}, ue = e.constants || {}, e.easing)
                for (var l in e.easing) K[l] = e.easing[l];
            be = e.edgeStrategy || "set", de = {
                beforerender: e.beforerender,
                render: e.render,
                keyframe: e.keyframe
            }, fe = e.forceHeight !== !1, fe && (De = e.scale || 1), ve = e.mobileDeceleration || L, pe = e.smoothScrolling !== !1, ye = e.smoothScrollingDuration || S, Me = {
                targetTop: ae.getScrollTop()
            }, _e = (e.mobileCheck || function() {
                return /Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || t.opera)
            })(), _e ? (he = n.getElementById(e.skrollrBody || x), he && se(), U(), Ae(r, [z, V], [b])) : Ae(r, [z, g], [b]), ae.refresh(), He(t, "resize orientationchange", function() {
                var e = r.clientWidth,
                    t = r.clientHeight;
                (t !== $e || e !== Ye) && ($e = t, Ye = e, Pe = !0)
            });
            var o = j();
            return function s() {
                Q(), Ve = o(s)
            }(), ae
        }
        var r, i, s = {
                get: function() {
                    return ae
                },
                init: function(e) {
                    return ae || new o(e)
                },
                VERSION: "0.6.30"
            },
            a = Object.prototype.hasOwnProperty,
            c = t.Math,
            h = t.getComputedStyle,
            d = "touchstart",
            f = "touchmove",
            u = "touchcancel",
            v = "touchend",
            m = "skrollable",
            p = m + "-before",
            y = m + "-between",
            M = m + "-after",
            z = "skrollr",
            b = "no-" + z,
            g = z + "-desktop",
            V = z + "-mobile",
            H = "linear",
            w = 1e3,
            L = .004,
            x = "skrollr-body",
            S = 200,
            T = "start",
            k = "end",
            C = "center",
            A = "bottom",
            E = "___skrollable_id",
            B = /^(?:input|textarea|button|select)$/i,
            F = /^\s+|\s+$/g,
            q = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,
            Z = /\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,
            D = /^(@?[a-z\-]+)\[(\w+)\]$/,
            N = /-([a-z0-9_])/g,
            I = function(e, t) {
                return t.toUpperCase()
            },
            O = /[\-+]?[\d]*\.?[\d]+/g,
            Y = /\{\?\}/g,
            $ = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,
            P = /[a-z\-]+-gradient/g,
            G = "",
            _ = "",
            R = function() {
                var e = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;
                if (h) {
                    var t = h(i, null);
                    for (var n in t)
                        if (G = n.match(e) || +n == n && t[n].match(e)) break;
                    if (!G) return void(G = _ = "");
                    G = G[0], "-" === G.slice(0, 1) ? (_ = G, G = {
                        "-webkit-": "webkit",
                        "-moz-": "Moz",
                        "-ms-": "ms",
                        "-o-": "O"
                    }[G]) : _ = "-" + G.toLowerCase() + "-"
                }
            },
            j = function() {
                var e = t.requestAnimationFrame || t[G.toLowerCase() + "RequestAnimationFrame"],
                    n = Fe();
                return (_e || !e) && (e = function(e) {
                    var l = Fe() - n,
                        o = c.max(0, 1e3 / 60 - l);
                    return t.setTimeout(function() {
                        n = Fe(), e()
                    }, o)
                }), e
            },
            X = function() {
                var e = t.cancelAnimationFrame || t[G.toLowerCase() + "CancelAnimationFrame"];
                return (_e || !e) && (e = function(e) {
                    return t.clearTimeout(e)
                }), e
            },
            K = {
                begin: function() {
                    return 0
                },
                end: function() {
                    return 1
                },
                linear: function(e) {
                    return e
                },
                quadratic: function(e) {
                    return e * e
                },
                cubic: function(e) {
                    return e * e * e
                },
                swing: function(e) {
                    return -c.cos(e * c.PI) / 2 + .5
                },
                sqrt: function(e) {
                    return c.sqrt(e)
                },
                outCubic: function(e) {
                    return c.pow(e - 1, 3) + 1
                },
                bounce: function(e) {
                    var t;
                    if (.5083 >= e) t = 3;
                    else if (.8489 >= e) t = 9;
                    else if (.96208 >= e) t = 27;
                    else {
                        if (!(.99981 >= e)) return 1;
                        t = 91
                    }
                    return 1 - c.abs(3 * c.cos(e * t * 1.028) / t)
                }
            };
        o.prototype.refresh = function(e) {
            var t, o, r = !1;
            for (e === l ? (r = !0, ce = [], Ge = 0, e = n.getElementsByTagName("*")) : e.length === l && (e = [e]), t = 0, o = e.length; o > t; t++) {
                var i = e[t],
                    s = i,
                    a = [],
                    c = pe,
                    h = be,
                    d = !1;
                if (r && E in i && delete i[E], i.attributes) {
                    for (var f = 0, u = i.attributes.length; u > f; f++) {
                        var v = i.attributes[f];
                        if ("data-anchor-target" !== v.name)
                            if ("data-smooth-scrolling" !== v.name)
                                if ("data-edge-strategy" !== v.name)
                                    if ("data-emit-events" !== v.name) {
                                        var p = v.name.match(q);
                                        if (null !== p) {
                                            var y = {
                                                props: v.value,
                                                element: i,
                                                eventType: v.name.replace(N, I)
                                            };
                                            a.push(y);
                                            var M = p[1];
                                            M && (y.constant = M.substr(1));
                                            var z = p[2];
                                            /p$/.test(z) ? (y.isPercentage = !0, y.offset = (0 | z.slice(0, -1)) / 100) : y.offset = 0 | z;
                                            var b = p[3],
                                                g = p[4] || b;
                                            b && b !== T && b !== k ? (y.mode = "relative", y.anchors = [b, g]) : (y.mode = "absolute", b === k ? y.isEnd = !0 : y.isPercentage || (y.offset = y.offset * De))
                                        }
                                    } else d = !0;
                                else h = v.value;
                            else c = "off" !== v.value;
                        else if (s = n.querySelector(v.value), null === s) throw 'Unable to find anchor target "' + v.value + '"'
                    }
                    if (a.length) {
                        var V, H, w;
                        !r && E in i ? (w = i[E], V = ce[w].styleAttr, H = ce[w].classAttr) : (w = i[E] = Ge++, V = i.style.cssText, H = Ce(i)), ce[w] = {
                            element: i,
                            styleAttr: V,
                            classAttr: H,
                            anchorTarget: s,
                            keyFrames: a,
                            smoothScrolling: c,
                            edgeStrategy: h,
                            emitEvents: d,
                            lastFrameIndex: -1
                        }, Ae(i, [m], [])
                    }
                }
            }
            for (Se(), t = 0, o = e.length; o > t; t++) {
                var L = ce[e[t][E]];
                L !== l && (ee(L), ne(L))
            }
            return ae
        }, o.prototype.relativeToAbsolute = function(e, t, n) {
            var l = r.clientHeight,
                o = e.getBoundingClientRect(),
                i = o.top,
                s = o.bottom - o.top;
            return t === A ? i -= l : t === C && (i -= l / 2), n === A ? i += s : n === C && (i += s / 2), i += ae.getScrollTop(), i + .5 | 0
        }, o.prototype.animateTo = function(e, t) {
            t = t || {};
            var n = Fe(),
                o = ae.getScrollTop(),
                r = t.duration === l ? w : t.duration;
            return me = {
                startTop: o,
                topDiff: e - o,
                targetTop: e,
                duration: r,
                startTime: n,
                endTime: n + r,
                easing: K[t.easing || H],
                done: t.done
            }, me.topDiff || (me.done && me.done.call(ae, !1), me = l), ae
        }, o.prototype.stopAnimateTo = function() {
            me && me.done && me.done.call(ae, !0), me = l
        }, o.prototype.isAnimatingTo = function() {
            return !!me
        }, o.prototype.isMobile = function() {
            return _e
        }, o.prototype.setScrollTop = function(e, n) {
            return ze = n === !0, _e ? Re = c.min(c.max(e, 0), Ze) : t.scrollTo(0, e), ae
        }, o.prototype.getScrollTop = function() {
            return _e ? Re : t.pageYOffset || r.scrollTop || i.scrollTop || 0
        }, o.prototype.getMaxScrollTop = function() {
            return Ze
        }, o.prototype.on = function(e, t) {
            return de[e] = t, ae
        }, o.prototype.off = function(e) {
            return delete de[e], ae
        }, o.prototype.destroy = function() {
            var e = X();
            e(Ve), Le(), Ae(r, [b], [z, g, V]);
            for (var t = 0, n = ce.length; n > t; t++) ie(ce[t].element);
            r.style.overflow = i.style.overflow = "", r.style.height = i.style.height = "", he && s.setStyle(he, "transform", "none"), ae = l, he = l, de = l, fe = l, Ze = 0, De = 1, ue = l, ve = l, Ne = "down", Ie = -1, Ye = 0, $e = 0, Pe = !1, me = l, pe = l, ye = l, Me = l, ze = l, Ge = 0, be = l, _e = !1, Re = 0, ge = l
        };
        var U = function() {
                var e, o, s, a, h, m, p, y, M, z, b, g;
                He(r, [d, f, u, v].join(" "), function(t) {
                    var r = t.changedTouches[0];
                    for (a = t.target; 3 === a.nodeType;) a = a.parentNode;
                    switch (h = r.clientY, m = r.clientX, z = t.timeStamp, B.test(a.tagName) || t.preventDefault(), t.type) {
                        case d:
                            e && e.blur(), ae.stopAnimateTo(), e = a, o = p = h, s = m, M = z;
                            break;
                        case f:
                            B.test(a.tagName) && n.activeElement !== a && t.preventDefault(), y = h - p, g = z - b, ae.setScrollTop(Re - y, !0), p = h, b = z;
                            break;
                        default:
                        case u:
                        case v:
                            var i = o - h,
                                V = s - m,
                                H = V * V + i * i;
                            if (49 > H) {
                                if (!B.test(e.tagName)) {
                                    e.focus();
                                    var w = n.createEvent("MouseEvents");
                                    w.initMouseEvent("click", !0, !0, t.view, 1, r.screenX, r.screenY, r.clientX, r.clientY, t.ctrlKey, t.altKey, t.shiftKey, t.metaKey, 0, null), e.dispatchEvent(w)
                                }
                                return
                            }
                            e = l;
                            var L = y / g;
                            L = c.max(c.min(L, 3), -3);
                            var x = c.abs(L / ve),
                                S = L * x + .5 * ve * x * x,
                                T = ae.getScrollTop() - S,
                                k = 0;
                            T > Ze ? (k = (Ze - T) / S, T = Ze) : 0 > T && (k = -T / S, T = 0), x *= 1 - k, ae.animateTo(T + .5 | 0, {
                                easing: "outCubic",
                                duration: x
                            })
                    }
                }), t.scrollTo(0, 0), r.style.overflow = i.style.overflow = "hidden"
            },
            W = function() {
                var e, t, n, l, o, i, s, a, h, d, f, u = r.clientHeight,
                    v = Te();
                for (a = 0, h = ce.length; h > a; a++)
                    for (e = ce[a], t = e.element, n = e.anchorTarget, l = e.keyFrames, o = 0, i = l.length; i > o; o++) s = l[o], d = s.offset, f = v[s.constant] || 0, s.frame = d, s.isPercentage && (d *= u, s.frame = d), "relative" === s.mode && (ie(t), s.frame = ae.relativeToAbsolute(n, s.anchors[0], s.anchors[1]) - d, ie(t, !0)), s.frame += f, fe && !s.isEnd && s.frame > Ze && (Ze = s.frame);
                for (Ze = c.max(Ze, ke()), a = 0, h = ce.length; h > a; a++) {
                    for (e = ce[a], l = e.keyFrames, o = 0, i = l.length; i > o; o++) s = l[o], f = v[s.constant] || 0, s.isEnd && (s.frame = Ze - s.offset + f);
                    e.keyFrames.sort(qe)
                }
            },
            J = function(e, t) {
                for (var n = 0, l = ce.length; l > n; n++) {
                    var o, r, i = ce[n],
                        c = i.element,
                        h = i.smoothScrolling ? e : t,
                        d = i.keyFrames,
                        f = d.length,
                        u = d[0],
                        v = d[d.length - 1],
                        z = h < u.frame,
                        b = h > v.frame,
                        g = z ? u : v,
                        V = i.emitEvents,
                        H = i.lastFrameIndex;
                    if (z || b) {
                        if (z && -1 === i.edge || b && 1 === i.edge) continue;
                        switch (z ? (Ae(c, [p], [M, y]), V && H > -1 && (xe(c, u.eventType, Ne), i.lastFrameIndex = -1)) : (Ae(c, [M], [p, y]), V && f > H && (xe(c, v.eventType, Ne), i.lastFrameIndex = f)), i.edge = z ? -1 : 1, i.edgeStrategy) {
                            case "reset":
                                ie(c);
                                continue;
                            case "ease":
                                h = g.frame;
                                break;
                            default:
                            case "set":
                                var w = g.props;
                                for (o in w) a.call(w, o) && (r = re(w[o].value), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r));
                                continue
                        }
                    } else 0 !== i.edge && (Ae(c, [m, y], [p, M]), i.edge = 0);
                    for (var L = 0; f - 1 > L; L++)
                        if (h >= d[L].frame && h <= d[L + 1].frame) {
                            var x = d[L],
                                S = d[L + 1];
                            for (o in x.props)
                                if (a.call(x.props, o)) {
                                    var T = (h - x.frame) / (S.frame - x.frame);
                                    T = x.props[o].easing(T), r = oe(x.props[o].value, S.props[o].value, T), r = re(r), 0 === o.indexOf("@") ? c.setAttribute(o.substr(1), r) : s.setStyle(c, o, r)
                                }
                            V && H !== L && ("down" === Ne ? xe(c, x.eventType, Ne) : xe(c, S.eventType, Ne), i.lastFrameIndex = L);
                            break
                        }
                }
            },
            Q = function() {
                Pe && (Pe = !1, Se());
                var e, t, n = ae.getScrollTop(),
                    o = Fe();
                if (me) o >= me.endTime ? (n = me.targetTop, e = me.done, me = l) : (t = me.easing((o - me.startTime) / me.duration), n = me.startTop + t * me.topDiff | 0), ae.setScrollTop(n, !0);
                else if (!ze) {
                    var r = Me.targetTop - n;
                    r && (Me = {
                        startTop: Ie,
                        topDiff: n - Ie,
                        targetTop: n,
                        startTime: Oe,
                        endTime: Oe + ye
                    }), o <= Me.endTime && (t = K.sqrt((o - Me.startTime) / ye), n = Me.startTop + t * Me.topDiff | 0)
                }
                if (ze || Ie !== n) {
                    Ne = n > Ie ? "down" : Ie > n ? "up" : Ne, ze = !1;
                    var i = {
                            curTop: n,
                            lastTop: Ie,
                            maxTop: Ze,
                            direction: Ne
                        },
                        a = de.beforerender && de.beforerender.call(ae, i);
                    a !== !1 && (J(n, ae.getScrollTop()), _e && he && s.setStyle(he, "transform", "translate(0, " + -Re + "px) " + ge), Ie = n, de.render && de.render.call(ae, i)), e && e.call(ae, !1)
                }
                Oe = o
            },
            ee = function(e) {
                for (var t = 0, n = e.keyFrames.length; n > t; t++) {
                    for (var l, o, r, i, s = e.keyFrames[t], a = {}; null !== (i = Z.exec(s.props));) r = i[1], o = i[2], l = r.match(D), null !== l ? (r = l[1], l = l[2]) : l = H, o = o.indexOf("!") ? te(o) : [o.slice(1)], a[r] = {
                        value: o,
                        easing: K[l]
                    };
                    s.props = a
                }
            },
            te = function(e) {
                var t = [];
                return $.lastIndex = 0, e = e.replace($, function(e) {
                    return e.replace(O, function(e) {
                        return e / 255 * 100 + "%"
                    })
                }), _ && (P.lastIndex = 0, e = e.replace(P, function(e) {
                    return _ + e
                })), e = e.replace(O, function(e) {
                    return t.push(+e), "{?}"
                }), t.unshift(e), t
            },
            ne = function(e) {
                var t, n, l = {};
                for (t = 0, n = e.keyFrames.length; n > t; t++) le(e.keyFrames[t], l);
                for (l = {}, t = e.keyFrames.length - 1; t >= 0; t--) le(e.keyFrames[t], l)
            },
            le = function(e, t) {
                var n;
                for (n in t) a.call(e.props, n) || (e.props[n] = t[n]);
                for (n in e.props) t[n] = e.props[n]
            },
            oe = function(e, t, n) {
                var l, o = e.length;
                if (o !== t.length) throw "Can't interpolate between \"" + e[0] + '" and "' + t[0] + '"';
                var r = [e[0]];
                for (l = 1; o > l; l++) r[l] = e[l] + (t[l] - e[l]) * n;
                return r
            },
            re = function(e) {
                var t = 1;
                return Y.lastIndex = 0, e[0].replace(Y, function() {
                    return e[t++]
                })
            },
            ie = function(e, t) {
                e = [].concat(e);
                for (var n, l, o = 0, r = e.length; r > o; o++) l = e[o], n = ce[l[E]], n && (t ? (l.style.cssText = n.dirtyStyleAttr, Ae(l, n.dirtyClassAttr)) : (n.dirtyStyleAttr = l.style.cssText, n.dirtyClassAttr = Ce(l), l.style.cssText = n.styleAttr, Ae(l, n.classAttr)))
            },
            se = function() {
                ge = "translateZ(0)", s.setStyle(he, "transform", ge);
                var e = h(he),
                    t = e.getPropertyValue("transform"),
                    n = e.getPropertyValue(_ + "transform"),
                    l = t && "none" !== t || n && "none" !== n;
                l || (ge = "")
            };
        s.setStyle = function(e, t, n) {
            var l = e.style;
            if (t = t.replace(N, I).replace("-", ""), "zIndex" === t) isNaN(n) ? l[t] = n : l[t] = "" + (0 | n);
            else if ("float" === t) l.styleFloat = l.cssFloat = n;
            else try {
                    G && (l[G + t.slice(0, 1).toUpperCase() + t.slice(1)] = n), l[t] = n
                } catch (o) {}
        };
        var ae, ce, he, de, fe, ue, ve, me, pe, ye, Me, ze, be, ge, Ve, He = s.addEvent = function(e, n, l) {
                var o = function(e) {
                    return e = e || t.event, e.target || (e.target = e.srcElement), e.preventDefault || (e.preventDefault = function() {
                        e.returnValue = !1, e.defaultPrevented = !0
                    }), l.call(this, e)
                };
                n = n.split(" ");
                for (var r, i = 0, s = n.length; s > i; i++) r = n[i], e.addEventListener ? e.addEventListener(r, l, !1) : e.attachEvent("on" + r, o), je.push({
                    element: e,
                    name: r,
                    listener: l
                })
            },
            we = s.removeEvent = function(e, t, n) {
                t = t.split(" ");
                for (var l = 0, o = t.length; o > l; l++) e.removeEventListener ? e.removeEventListener(t[l], n, !1) : e.detachEvent("on" + t[l], n)
            },
            Le = function() {
                for (var e, t = 0, n = je.length; n > t; t++) e = je[t], we(e.element, e.name, e.listener);
                je = []
            },
            xe = function(e, t, n) {
                de.keyframe && de.keyframe.call(ae, e, t, n)
            },
            Se = function() {
                var e = ae.getScrollTop();
                Ze = 0, fe && !_e && (i.style.height = ""), W(), fe && !_e && (i.style.height = Ze + r.clientHeight + "px"), _e ? ae.setScrollTop(c.min(ae.getScrollTop(), Ze)) : ae.setScrollTop(e, !0), ze = !0
            },
            Te = function() {
                var e, t, n = r.clientHeight,
                    l = {};
                for (e in ue) t = ue[e], "function" == typeof t ? t = t.call(ae) : /p$/.test(t) && (t = t.slice(0, -1) / 100 * n), l[e] = t;
                return l
            },
            ke = function() {
                var e, t = 0;
                return he && (t = c.max(he.offsetHeight, he.scrollHeight)), e = c.max(t, i.scrollHeight, i.offsetHeight, r.scrollHeight, r.offsetHeight, r.clientHeight), e - r.clientHeight
            },
            Ce = function(e) {
                var n = "className";
                return t.SVGElement && e instanceof t.SVGElement && (e = e[n], n = "baseVal"), e[n]
            },
            Ae = function(e, n, o) {
                var r = "className";
                if (t.SVGElement && e instanceof t.SVGElement && (e = e[r], r = "baseVal"), o === l) return void(e[r] = n);
                for (var i = e[r], s = 0, a = o.length; a > s; s++) i = Be(i).replace(Be(o[s]), " ");
                i = Ee(i);
                for (var c = 0, h = n.length; h > c; c++) - 1 === Be(i).indexOf(Be(n[c])) && (i += " " + n[c]);
                e[r] = Ee(i)
            },
            Ee = function(e) {
                return e.replace(F, "")
            },
            Be = function(e) {
                return " " + e + " "
            },
            Fe = Date.now || function() {
                    return +new Date
                },
            qe = function(e, t) {
                return e.frame - t.frame
            },
            Ze = 0,
            De = 1,
            Ne = "down",
            Ie = -1,
            Oe = Fe(),
            Ye = 0,
            $e = 0,
            Pe = !1,
            Ge = 0,
            _e = !1,
            Re = 0,
            je = [];
        "function" == typeof define && define.amd ? define([], function() {
            return s
        }) : "undefined" != typeof e && e.exports ? e.exports = s : t.skrollr = s
    }(window, document)
}, function(e, t) {
    ! function(t) {
        var n = function() {
                return t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(e) {
                        t.setTimeout(e, 1e3 / 60)
                    }
            }(),
            l = function(e, t, n, l) {
                return e /= l / 2, 1 > e ? n / 2 * e * e + t : (e--, -n / 2 * (e * (e - 2) - 1) + t)
            },
            o = function(e, t, o, r) {
                var i = e.scrollTop,
                    s = t - i,
                    a = +new Date,
                    c = !0,
                    h = null,
                    d = function() {
                        if (c) {
                            n(d);
                            var f = +new Date,
                                u = Math.floor(l(f - a, i, s, o));
                            h ? h === e.scrollTop ? (h = u, e.scrollTop = u) : c = !1 : (h = u, e.scrollTop = u), f > a + o && (e.scrollTop = t, c = !1, r && r())
                        }
                    };
                n(d)
            };
        "undefined" != typeof e && "undefined" != typeof e.exports ? e.exports = o : t.animatedScrollTo = o
    }(window)
}, function(e, t) {
    "use strict";

    function n(e) {
        if (!e) return !1;
        if (e.length > 254) return !1;
        var t = l.test(e);
        if (!t) return !1;
        var n = e.split("@");
        if (n[0].length > 64) return !1;
        var o = n[1].split(".");
        return o.some(function(e) {
            return e.length > 63
        }) ? !1 : !0
    }
    var l = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-?\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
    t.validate = n
}]);
=======
=======
>>>>>>> 6beca7a83fbd5707375b18f0c6b87ddd6b63b59f
var ball = [];
var figure = ['rectangle', 'triangle', 'triangle-2'];

function randomInteger(min, max) {
    var rand = min + Math.random() * (max - min)
    rand = Math.round(rand);
    console.log(rand);
    return rand;
}

for(var i = 0; i < 30; i++){
    var el = document.createElement('div');
    el.className = "c-element c-element--" + figure[randomInteger(0,2)];
    el.id = 'element-'+i;
    el.style.left = randomInteger(0, 100) + "%";
    el.style.top = randomInteger(0, 100) + "%";
    container.appendChild(el);
    console.log(el);
    ball.push({
        coordX : randomInteger(0, 100),
        coordY : randomInteger(0, 100),
        transform : randomInteger(20, 20) + "," + randomInteger(0, 20),
        element: document.getElementById('element-' + i),
    });
}

body.onmouseover = function(e) { // 1. отследить наведение

    function moveAt(e, ball) {
        for(var j = 0; j < ball.length; j++){
            ball[j].element.style.left = ball[j].coordX + "%";
            ball[j].element.style.top =  ball[j].coordY + "%" ;

            ball[j].element.style.transform = "matrix(1, 0, 0, 1, " + (e.pageX - body.offsetWidth/2)+ ", "+ (e.pageY - body.offsetHeight/2) +")";
        }
    }

    // 3, перемещать по экрану
    document.onmousemove = function(e) {
        moveAt(e, ball);
    }

    // 4. отследить окончание переноса
    // ball.onmouseup = function() {
    //     document.onmousemove = null;
    //     ball.onmouseup = null;
    // }
<<<<<<< HEAD
};
>>>>>>> Lp complete
=======
};
>>>>>>> 6beca7a83fbd5707375b18f0c6b87ddd6b63b59f
