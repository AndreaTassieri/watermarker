var Wd = (e) => {
    throw TypeError(e);
};
var cl = (e, t, n) => t.has(e) || Wd("Cannot " + n);
var A = (e, t, n) => (cl(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
    ee = (e, t, n) =>
        t.has(e)
            ? Wd("Cannot add the same private member more than once")
            : t instanceof WeakSet
              ? t.add(e)
              : t.set(e, n),
    Q = (e, t, n, r) => (cl(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n),
    Fe = (e, t, n) => (cl(e, t, "access private method"), n);
var Va = (e, t, n, r) => ({
    set _(o) {
        Q(e, t, o, n);
    },
    get _() {
        return A(e, t, r);
    },
});
function a0(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const o in r)
                if (o !== "default" && !(o in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, o);
                    a && Object.defineProperty(e, o, a.get ? a : { enumerable: !0, get: () => r[o] });
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }));
}
(function () {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const o of document.querySelectorAll('link[rel="modulepreload"]')) r(o);
    new MutationObserver((o) => {
        for (const a of o)
            if (a.type === "childList")
                for (const s of a.addedNodes) s.tagName === "LINK" && s.rel === "modulepreload" && r(s);
    }).observe(document, { childList: !0, subtree: !0 });
    function n(o) {
        const a = {};
        return (
            o.integrity && (a.integrity = o.integrity),
            o.referrerPolicy && (a.referrerPolicy = o.referrerPolicy),
            o.crossOrigin === "use-credentials"
                ? (a.credentials = "include")
                : o.crossOrigin === "anonymous"
                  ? (a.credentials = "omit")
                  : (a.credentials = "same-origin"),
            a
        );
    }
    function r(o) {
        if (o.ep) return;
        o.ep = !0;
        const a = n(o);
        fetch(o.href, a);
    }
})();
function dm(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var fm = { exports: {} },
    xi = {},
    pm = { exports: {} },
    J = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _a = Symbol.for("react.element"),
    s0 = Symbol.for("react.portal"),
    i0 = Symbol.for("react.fragment"),
    l0 = Symbol.for("react.strict_mode"),
    c0 = Symbol.for("react.profiler"),
    u0 = Symbol.for("react.provider"),
    d0 = Symbol.for("react.context"),
    f0 = Symbol.for("react.forward_ref"),
    p0 = Symbol.for("react.suspense"),
    m0 = Symbol.for("react.memo"),
    h0 = Symbol.for("react.lazy"),
    Hd = Symbol.iterator;
function v0(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Hd && e[Hd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var mm = {
        isMounted: function () {
            return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    hm = Object.assign,
    vm = {};
function bo(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = vm), (this.updater = n || mm);
}
bo.prototype.isReactComponent = {};
bo.prototype.setState = function (e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null)
        throw Error(
            "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
        );
    this.updater.enqueueSetState(this, e, t, "setState");
};
bo.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function gm() {}
gm.prototype = bo.prototype;
function wu(e, t, n) {
    (this.props = e), (this.context = t), (this.refs = vm), (this.updater = n || mm);
}
var Su = (wu.prototype = new gm());
Su.constructor = wu;
hm(Su, bo.prototype);
Su.isPureReactComponent = !0;
var Kd = Array.isArray,
    ym = Object.prototype.hasOwnProperty,
    Cu = { current: null },
    xm = { key: !0, ref: !0, __self: !0, __source: !0 };
function wm(e, t, n) {
    var r,
        o = {},
        a = null,
        s = null;
    if (t != null)
        for (r in (t.ref !== void 0 && (s = t.ref), t.key !== void 0 && (a = "" + t.key), t))
            ym.call(t, r) && !xm.hasOwnProperty(r) && (o[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) o.children = n;
    else if (1 < i) {
        for (var l = Array(i), c = 0; c < i; c++) l[c] = arguments[c + 2];
        o.children = l;
    }
    if (e && e.defaultProps) for (r in ((i = e.defaultProps), i)) o[r] === void 0 && (o[r] = i[r]);
    return { $$typeof: _a, type: e, key: a, ref: s, props: o, _owner: Cu.current };
}
function g0(e, t) {
    return { $$typeof: _a, type: e.type, key: t, ref: e.ref, props: e.props, _owner: e._owner };
}
function bu(e) {
    return typeof e == "object" && e !== null && e.$$typeof === _a;
}
function y0(e) {
    var t = { "=": "=0", ":": "=2" };
    return (
        "$" +
        e.replace(/[=:]/g, function (n) {
            return t[n];
        })
    );
}
var Qd = /\/+/g;
function ul(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? y0("" + e.key) : t.toString(36);
}
function gs(e, t, n, r, o) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var s = !1;
    if (e === null) s = !0;
    else
        switch (a) {
            case "string":
            case "number":
                s = !0;
                break;
            case "object":
                switch (e.$$typeof) {
                    case _a:
                    case s0:
                        s = !0;
                }
        }
    if (s)
        return (
            (s = e),
            (o = o(s)),
            (e = r === "" ? "." + ul(s, 0) : r),
            Kd(o)
                ? ((n = ""),
                  e != null && (n = e.replace(Qd, "$&/") + "/"),
                  gs(o, t, n, "", function (c) {
                      return c;
                  }))
                : o != null &&
                  (bu(o) &&
                      (o = g0(
                          o,
                          n + (!o.key || (s && s.key === o.key) ? "" : ("" + o.key).replace(Qd, "$&/") + "/") + e
                      )),
                  t.push(o)),
            1
        );
    if (((s = 0), (r = r === "" ? "." : r + ":"), Kd(e)))
        for (var i = 0; i < e.length; i++) {
            a = e[i];
            var l = r + ul(a, i);
            s += gs(a, t, n, l, o);
        }
    else if (((l = v0(e)), typeof l == "function"))
        for (e = l.call(e), i = 0; !(a = e.next()).done; )
            (a = a.value), (l = r + ul(a, i++)), (s += gs(a, t, n, l, o));
    else if (a === "object")
        throw (
            ((t = String(e)),
            Error(
                "Objects are not valid as a React child (found: " +
                    (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) +
                    "). If you meant to render a collection of children, use an array instead."
            ))
        );
    return s;
}
function Wa(e, t, n) {
    if (e == null) return e;
    var r = [],
        o = 0;
    return (
        gs(e, r, "", "", function (a) {
            return t.call(n, a, o++);
        }),
        r
    );
}
function x0(e) {
    if (e._status === -1) {
        var t = e._result;
        (t = t()),
            t.then(
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 1), (e._result = n));
                },
                function (n) {
                    (e._status === 0 || e._status === -1) && ((e._status = 2), (e._result = n));
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t));
    }
    if (e._status === 1) return e._result.default;
    throw e._result;
}
var Qe = { current: null },
    ys = { transition: null },
    w0 = { ReactCurrentDispatcher: Qe, ReactCurrentBatchConfig: ys, ReactCurrentOwner: Cu };
function Sm() {
    throw Error("act(...) is not supported in production builds of React.");
}
J.Children = {
    map: Wa,
    forEach: function (e, t, n) {
        Wa(
            e,
            function () {
                t.apply(this, arguments);
            },
            n
        );
    },
    count: function (e) {
        var t = 0;
        return (
            Wa(e, function () {
                t++;
            }),
            t
        );
    },
    toArray: function (e) {
        return (
            Wa(e, function (t) {
                return t;
            }) || []
        );
    },
    only: function (e) {
        if (!bu(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e;
    },
};
J.Component = bo;
J.Fragment = i0;
J.Profiler = c0;
J.PureComponent = wu;
J.StrictMode = l0;
J.Suspense = p0;
J.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = w0;
J.act = Sm;
J.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = hm({}, e.props),
        o = e.key,
        a = e.ref,
        s = e._owner;
    if (t != null) {
        if (
            (t.ref !== void 0 && ((a = t.ref), (s = Cu.current)),
            t.key !== void 0 && (o = "" + t.key),
            e.type && e.type.defaultProps)
        )
            var i = e.type.defaultProps;
        for (l in t) ym.call(t, l) && !xm.hasOwnProperty(l) && (r[l] = t[l] === void 0 && i !== void 0 ? i[l] : t[l]);
    }
    var l = arguments.length - 2;
    if (l === 1) r.children = n;
    else if (1 < l) {
        i = Array(l);
        for (var c = 0; c < l; c++) i[c] = arguments[c + 2];
        r.children = i;
    }
    return { $$typeof: _a, type: e.type, key: o, ref: a, props: r, _owner: s };
};
J.createContext = function (e) {
    return (
        (e = {
            $$typeof: d0,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: u0, _context: e }),
        (e.Consumer = e)
    );
};
J.createElement = wm;
J.createFactory = function (e) {
    var t = wm.bind(null, e);
    return (t.type = e), t;
};
J.createRef = function () {
    return { current: null };
};
J.forwardRef = function (e) {
    return { $$typeof: f0, render: e };
};
J.isValidElement = bu;
J.lazy = function (e) {
    return { $$typeof: h0, _payload: { _status: -1, _result: e }, _init: x0 };
};
J.memo = function (e, t) {
    return { $$typeof: m0, type: e, compare: t === void 0 ? null : t };
};
J.startTransition = function (e) {
    var t = ys.transition;
    ys.transition = {};
    try {
        e();
    } finally {
        ys.transition = t;
    }
};
J.unstable_act = Sm;
J.useCallback = function (e, t) {
    return Qe.current.useCallback(e, t);
};
J.useContext = function (e) {
    return Qe.current.useContext(e);
};
J.useDebugValue = function () {};
J.useDeferredValue = function (e) {
    return Qe.current.useDeferredValue(e);
};
J.useEffect = function (e, t) {
    return Qe.current.useEffect(e, t);
};
J.useId = function () {
    return Qe.current.useId();
};
J.useImperativeHandle = function (e, t, n) {
    return Qe.current.useImperativeHandle(e, t, n);
};
J.useInsertionEffect = function (e, t) {
    return Qe.current.useInsertionEffect(e, t);
};
J.useLayoutEffect = function (e, t) {
    return Qe.current.useLayoutEffect(e, t);
};
J.useMemo = function (e, t) {
    return Qe.current.useMemo(e, t);
};
J.useReducer = function (e, t, n) {
    return Qe.current.useReducer(e, t, n);
};
J.useRef = function (e) {
    return Qe.current.useRef(e);
};
J.useState = function (e) {
    return Qe.current.useState(e);
};
J.useSyncExternalStore = function (e, t, n) {
    return Qe.current.useSyncExternalStore(e, t, n);
};
J.useTransition = function () {
    return Qe.current.useTransition();
};
J.version = "18.3.1";
pm.exports = J;
var f = pm.exports;
const j = dm(f),
    Eu = a0({ __proto__: null, default: j }, [f]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var S0 = f,
    C0 = Symbol.for("react.element"),
    b0 = Symbol.for("react.fragment"),
    E0 = Object.prototype.hasOwnProperty,
    T0 = S0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    P0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function Cm(e, t, n) {
    var r,
        o = {},
        a = null,
        s = null;
    n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (s = t.ref);
    for (r in t) E0.call(t, r) && !P0.hasOwnProperty(r) && (o[r] = t[r]);
    if (e && e.defaultProps) for (r in ((t = e.defaultProps), t)) o[r] === void 0 && (o[r] = t[r]);
    return { $$typeof: C0, type: e, key: a, ref: s, props: o, _owner: T0.current };
}
xi.Fragment = b0;
xi.jsx = Cm;
xi.jsxs = Cm;
fm.exports = xi;
var x = fm.exports,
    bm = { exports: {} },
    it = {},
    Em = { exports: {} },
    Tm = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
    function t(T, R) {
        var B = T.length;
        T.push(R);
        e: for (; 0 < B; ) {
            var K = (B - 1) >>> 1,
                W = T[K];
            if (0 < o(W, R)) (T[K] = R), (T[B] = W), (B = K);
            else break e;
        }
    }
    function n(T) {
        return T.length === 0 ? null : T[0];
    }
    function r(T) {
        if (T.length === 0) return null;
        var R = T[0],
            B = T.pop();
        if (B !== R) {
            T[0] = B;
            e: for (var K = 0, W = T.length, q = W >>> 1; K < q; ) {
                var G = 2 * (K + 1) - 1,
                    de = T[G],
                    we = G + 1,
                    z = T[we];
                if (0 > o(de, B))
                    we < W && 0 > o(z, de) ? ((T[K] = z), (T[we] = B), (K = we)) : ((T[K] = de), (T[G] = B), (K = G));
                else if (we < W && 0 > o(z, B)) (T[K] = z), (T[we] = B), (K = we);
                else break e;
            }
        }
        return R;
    }
    function o(T, R) {
        var B = T.sortIndex - R.sortIndex;
        return B !== 0 ? B : T.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function () {
            return a.now();
        };
    } else {
        var s = Date,
            i = s.now();
        e.unstable_now = function () {
            return s.now() - i;
        };
    }
    var l = [],
        c = [],
        u = 1,
        d = null,
        g = 3,
        p = !1,
        C = !1,
        h = !1,
        w = typeof setTimeout == "function" ? setTimeout : null,
        v = typeof clearTimeout == "function" ? clearTimeout : null,
        m = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function y(T) {
        for (var R = n(c); R !== null; ) {
            if (R.callback === null) r(c);
            else if (R.startTime <= T) r(c), (R.sortIndex = R.expirationTime), t(l, R);
            else break;
            R = n(c);
        }
    }
    function S(T) {
        if (((h = !1), y(T), !C))
            if (n(l) !== null) (C = !0), L(b);
            else {
                var R = n(c);
                R !== null && U(S, R.startTime - T);
            }
    }
    function b(T, R) {
        (C = !1), h && ((h = !1), v(N), (N = -1)), (p = !0);
        var B = g;
        try {
            for (y(R), d = n(l); d !== null && (!(d.expirationTime > R) || (T && !_())); ) {
                var K = d.callback;
                if (typeof K == "function") {
                    (d.callback = null), (g = d.priorityLevel);
                    var W = K(d.expirationTime <= R);
                    (R = e.unstable_now()), typeof W == "function" ? (d.callback = W) : d === n(l) && r(l), y(R);
                } else r(l);
                d = n(l);
            }
            if (d !== null) var q = !0;
            else {
                var G = n(c);
                G !== null && U(S, G.startTime - R), (q = !1);
            }
            return q;
        } finally {
            (d = null), (g = B), (p = !1);
        }
    }
    var I = !1,
        E = null,
        N = -1,
        k = 5,
        P = -1;
    function _() {
        return !(e.unstable_now() - P < k);
    }
    function D() {
        if (E !== null) {
            var T = e.unstable_now();
            P = T;
            var R = !0;
            try {
                R = E(!0, T);
            } finally {
                R ? F() : ((I = !1), (E = null));
            }
        } else I = !1;
    }
    var F;
    if (typeof m == "function")
        F = function () {
            m(D);
        };
    else if (typeof MessageChannel < "u") {
        var M = new MessageChannel(),
            V = M.port2;
        (M.port1.onmessage = D),
            (F = function () {
                V.postMessage(null);
            });
    } else
        F = function () {
            w(D, 0);
        };
    function L(T) {
        (E = T), I || ((I = !0), F());
    }
    function U(T, R) {
        N = w(function () {
            T(e.unstable_now());
        }, R);
    }
    (e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (T) {
            T.callback = null;
        }),
        (e.unstable_continueExecution = function () {
            C || p || ((C = !0), L(b));
        }),
        (e.unstable_forceFrameRate = function (T) {
            0 > T || 125 < T
                ? console.error(
                      "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                  )
                : (k = 0 < T ? Math.floor(1e3 / T) : 5);
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return g;
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(l);
        }),
        (e.unstable_next = function (T) {
            switch (g) {
                case 1:
                case 2:
                case 3:
                    var R = 3;
                    break;
                default:
                    R = g;
            }
            var B = g;
            g = R;
            try {
                return T();
            } finally {
                g = B;
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (T, R) {
            switch (T) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break;
                default:
                    T = 3;
            }
            var B = g;
            g = T;
            try {
                return R();
            } finally {
                g = B;
            }
        }),
        (e.unstable_scheduleCallback = function (T, R, B) {
            var K = e.unstable_now();
            switch (
                (typeof B == "object" && B !== null
                    ? ((B = B.delay), (B = typeof B == "number" && 0 < B ? K + B : K))
                    : (B = K),
                T)
            ) {
                case 1:
                    var W = -1;
                    break;
                case 2:
                    W = 250;
                    break;
                case 5:
                    W = 1073741823;
                    break;
                case 4:
                    W = 1e4;
                    break;
                default:
                    W = 5e3;
            }
            return (
                (W = B + W),
                (T = { id: u++, callback: R, priorityLevel: T, startTime: B, expirationTime: W, sortIndex: -1 }),
                B > K
                    ? ((T.sortIndex = B),
                      t(c, T),
                      n(l) === null && T === n(c) && (h ? (v(N), (N = -1)) : (h = !0), U(S, B - K)))
                    : ((T.sortIndex = W), t(l, T), C || p || ((C = !0), L(b))),
                T
            );
        }),
        (e.unstable_shouldYield = _),
        (e.unstable_wrapCallback = function (T) {
            var R = g;
            return function () {
                var B = g;
                g = R;
                try {
                    return T.apply(this, arguments);
                } finally {
                    g = B;
                }
            };
        });
})(Tm);
Em.exports = Tm;
var I0 = Em.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var k0 = f,
    st = I0;
function O(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
}
var Pm = new Set(),
    sa = {};
function Er(e, t) {
    po(e, t), po(e + "Capture", t);
}
function po(e, t) {
    for (sa[e] = t, e = 0; e < t.length; e++) Pm.add(t[e]);
}
var on = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    Zl = Object.prototype.hasOwnProperty,
    N0 =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    Gd = {},
    Yd = {};
function R0(e) {
    return Zl.call(Yd, e) ? !0 : Zl.call(Gd, e) ? !1 : N0.test(e) ? (Yd[e] = !0) : ((Gd[e] = !0), !1);
}
function A0(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r
                ? !1
                : n !== null
                  ? !n.acceptsBooleans
                  : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
        default:
            return !1;
    }
}
function D0(e, t, n, r) {
    if (t === null || typeof t > "u" || A0(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t;
            case 4:
                return t === !1;
            case 5:
                return isNaN(t);
            case 6:
                return isNaN(t) || 1 > t;
        }
    return !1;
}
function Ge(e, t, n, r, o, a, s) {
    (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = a),
        (this.removeEmptyString = s);
}
var Me = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
    .split(" ")
    .forEach(function (e) {
        Me[e] = new Ge(e, 0, !1, e, null, !1, !1);
    });
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
].forEach(function (e) {
    var t = e[0];
    Me[t] = new Ge(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
    Me[e] = new Ge(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) {
    Me[e] = new Ge(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
    .split(" ")
    .forEach(function (e) {
        Me[e] = new Ge(e, 3, !1, e.toLowerCase(), null, !1, !1);
    });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
    Me[e] = new Ge(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
    Me[e] = new Ge(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
    Me[e] = new Ge(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
    Me[e] = new Ge(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Tu = /[\-:]([a-z])/g;
function Pu(e) {
    return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
    .split(" ")
    .forEach(function (e) {
        var t = e.replace(Tu, Pu);
        Me[t] = new Ge(t, 1, !1, e, null, !1, !1);
    });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) {
    var t = e.replace(Tu, Pu);
    Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
});
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
    var t = e.replace(Tu, Pu);
    Me[t] = new Ge(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
    Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Me.xlinkHref = new Ge("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) {
    Me[e] = new Ge(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Iu(e, t, n, r) {
    var o = Me.hasOwnProperty(t) ? Me[t] : null;
    (o !== null
        ? o.type !== 0
        : r || !(2 < t.length) || (t[0] !== "o" && t[0] !== "O") || (t[1] !== "n" && t[1] !== "N")) &&
        (D0(t, n, o, r) && (n = null),
        r || o === null
            ? R0(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
            : o.mustUseProperty
              ? (e[o.propertyName] = n === null ? (o.type === 3 ? !1 : "") : n)
              : ((t = o.attributeName),
                (r = o.attributeNamespace),
                n === null
                    ? e.removeAttribute(t)
                    : ((o = o.type),
                      (n = o === 3 || (o === 4 && n === !0) ? "" : "" + n),
                      r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var dn = k0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    Ha = Symbol.for("react.element"),
    Lr = Symbol.for("react.portal"),
    Fr = Symbol.for("react.fragment"),
    ku = Symbol.for("react.strict_mode"),
    Jl = Symbol.for("react.profiler"),
    Im = Symbol.for("react.provider"),
    km = Symbol.for("react.context"),
    Nu = Symbol.for("react.forward_ref"),
    ec = Symbol.for("react.suspense"),
    tc = Symbol.for("react.suspense_list"),
    Ru = Symbol.for("react.memo"),
    Cn = Symbol.for("react.lazy"),
    Nm = Symbol.for("react.offscreen"),
    Xd = Symbol.iterator;
function Mo(e) {
    return e === null || typeof e != "object"
        ? null
        : ((e = (Xd && e[Xd]) || e["@@iterator"]), typeof e == "function" ? e : null);
}
var xe = Object.assign,
    dl;
function Wo(e) {
    if (dl === void 0)
        try {
            throw Error();
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/);
            dl = (t && t[1]) || "";
        }
    return (
        `
` +
        dl +
        e
    );
}
var fl = !1;
function pl(e, t) {
    if (!e || fl) return "";
    fl = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error();
                }),
                Object.defineProperty(t.prototype, "props", {
                    set: function () {
                        throw Error();
                    },
                }),
                typeof Reflect == "object" && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, []);
                } catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], t);
            } else {
                try {
                    t.call();
                } catch (c) {
                    r = c;
                }
                e.call(t.prototype);
            }
        else {
            try {
                throw Error();
            } catch (c) {
                r = c;
            }
            e();
        }
    } catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (
                var o = c.stack.split(`
`),
                    a = r.stack.split(`
`),
                    s = o.length - 1,
                    i = a.length - 1;
                1 <= s && 0 <= i && o[s] !== a[i];

            )
                i--;
            for (; 1 <= s && 0 <= i; s--, i--)
                if (o[s] !== a[i]) {
                    if (s !== 1 || i !== 1)
                        do
                            if ((s--, i--, 0 > i || o[s] !== a[i])) {
                                var l =
                                    `
` + o[s].replace(" at new ", " at ");
                                return (
                                    e.displayName &&
                                        l.includes("<anonymous>") &&
                                        (l = l.replace("<anonymous>", e.displayName)),
                                    l
                                );
                            }
                        while (1 <= s && 0 <= i);
                    break;
                }
        }
    } finally {
        (fl = !1), (Error.prepareStackTrace = n);
    }
    return (e = e ? e.displayName || e.name : "") ? Wo(e) : "";
}
function _0(e) {
    switch (e.tag) {
        case 5:
            return Wo(e.type);
        case 16:
            return Wo("Lazy");
        case 13:
            return Wo("Suspense");
        case 19:
            return Wo("SuspenseList");
        case 0:
        case 2:
        case 15:
            return (e = pl(e.type, !1)), e;
        case 11:
            return (e = pl(e.type.render, !1)), e;
        case 1:
            return (e = pl(e.type, !0)), e;
        default:
            return "";
    }
}
function nc(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case Fr:
            return "Fragment";
        case Lr:
            return "Portal";
        case Jl:
            return "Profiler";
        case ku:
            return "StrictMode";
        case ec:
            return "Suspense";
        case tc:
            return "SuspenseList";
    }
    if (typeof e == "object")
        switch (e.$$typeof) {
            case km:
                return (e.displayName || "Context") + ".Consumer";
            case Im:
                return (e._context.displayName || "Context") + ".Provider";
            case Nu:
                var t = e.render;
                return (
                    (e = e.displayName),
                    e || ((e = t.displayName || t.name || ""), (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
                    e
                );
            case Ru:
                return (t = e.displayName || null), t !== null ? t : nc(e.type) || "Memo";
            case Cn:
                (t = e._payload), (e = e._init);
                try {
                    return nc(e(t));
                } catch {}
        }
    return null;
}
function M0(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ""),
                t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
            );
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return nc(t);
        case 8:
            return t === ku ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t;
    }
    return null;
}
function Vn(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return "";
    }
}
function Rm(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
}
function O0(e) {
    var t = Rm(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var o = n.get,
            a = n.set;
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return o.call(this);
                },
                set: function (s) {
                    (r = "" + s), a.call(this, s);
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r;
                },
                setValue: function (s) {
                    r = "" + s;
                },
                stopTracking: function () {
                    (e._valueTracker = null), delete e[t];
                },
            }
        );
    }
}
function Ka(e) {
    e._valueTracker || (e._valueTracker = O0(e));
}
function Am(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = Rm(e) ? (e.checked ? "true" : "false") : e.value), (e = r), e !== n ? (t.setValue(e), !0) : !1;
}
function Bs(e) {
    if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")) return null;
    try {
        return e.activeElement || e.body;
    } catch {
        return e.body;
    }
}
function rc(e, t) {
    var n = t.checked;
    return xe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    });
}
function qd(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    (n = Vn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null,
        });
}
function Dm(e, t) {
    (t = t.checked), t != null && Iu(e, "checked", t, !1);
}
function oc(e, t) {
    Dm(e, t);
    var n = Vn(t.value),
        r = t.type;
    if (n != null)
        r === "number"
            ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
            : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return;
    }
    t.hasOwnProperty("value")
        ? ac(e, t.type, n)
        : t.hasOwnProperty("defaultValue") && ac(e, t.type, Vn(t.defaultValue)),
        t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
}
function Zd(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!((r !== "submit" && r !== "reset") || (t.value !== void 0 && t.value !== null))) return;
        (t = "" + e._wrapperState.initialValue), n || t === e.value || (e.value = t), (e.defaultValue = t);
    }
    (n = e.name),
        n !== "" && (e.name = ""),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== "" && (e.name = n);
}
function ac(e, t, n) {
    (t !== "number" || Bs(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = "" + e._wrapperState.initialValue)
            : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ho = Array.isArray;
function Yr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {};
        for (var o = 0; o < n.length; o++) t["$" + n[o]] = !0;
        for (n = 0; n < e.length; n++)
            (o = t.hasOwnProperty("$" + e[n].value)),
                e[n].selected !== o && (e[n].selected = o),
                o && r && (e[n].defaultSelected = !0);
    } else {
        for (n = "" + Vn(n), t = null, o = 0; o < e.length; o++) {
            if (e[o].value === n) {
                (e[o].selected = !0), r && (e[o].defaultSelected = !0);
                return;
            }
            t !== null || e[o].disabled || (t = e[o]);
        }
        t !== null && (t.selected = !0);
    }
}
function sc(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(O(91));
    return xe({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
}
function Jd(e, t) {
    var n = t.value;
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(O(92));
            if (Ho(n)) {
                if (1 < n.length) throw Error(O(93));
                n = n[0];
            }
            t = n;
        }
        t == null && (t = ""), (n = t);
    }
    e._wrapperState = { initialValue: Vn(n) };
}
function _m(e, t) {
    var n = Vn(t.value),
        r = Vn(t.defaultValue);
    n != null &&
        ((n = "" + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = "" + r);
}
function ef(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Mm(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml";
    }
}
function ic(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml"
        ? Mm(t)
        : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
          ? "http://www.w3.org/1999/xhtml"
          : e;
}
var Qa,
    Om = (function (e) {
        return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, o) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, o);
                  });
              }
            : e;
    })(function (e, t) {
        if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
        else {
            for (
                Qa = Qa || document.createElement("div"),
                    Qa.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
                    t = Qa.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild);
            for (; t.firstChild; ) e.appendChild(t.firstChild);
        }
    });
function ia(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return;
        }
    }
    e.textContent = t;
}
var Xo = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
    },
    j0 = ["Webkit", "ms", "Moz", "O"];
Object.keys(Xo).forEach(function (e) {
    j0.forEach(function (t) {
        (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Xo[t] = Xo[e]);
    });
});
function jm(e, t, n) {
    return t == null || typeof t == "boolean" || t === ""
        ? ""
        : n || typeof t != "number" || t === 0 || (Xo.hasOwnProperty(e) && Xo[e])
          ? ("" + t).trim()
          : t + "px";
}
function Lm(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                o = jm(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, o) : (e[n] = o);
        }
}
var L0 = xe(
    { menuitem: !0 },
    {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
    }
);
function lc(e, t) {
    if (t) {
        if (L0[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(O(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(O(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
                throw Error(O(61));
        }
        if (t.style != null && typeof t.style != "object") throw Error(O(62));
    }
}
function cc(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0;
    }
}
var uc = null;
function Au(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    );
}
var dc = null,
    Xr = null,
    qr = null;
function tf(e) {
    if ((e = ja(e))) {
        if (typeof dc != "function") throw Error(O(280));
        var t = e.stateNode;
        t && ((t = Ei(t)), dc(e.stateNode, e.type, t));
    }
}
function Fm(e) {
    Xr ? (qr ? qr.push(e) : (qr = [e])) : (Xr = e);
}
function Bm() {
    if (Xr) {
        var e = Xr,
            t = qr;
        if (((qr = Xr = null), tf(e), t)) for (e = 0; e < t.length; e++) tf(t[e]);
    }
}
function zm(e, t) {
    return e(t);
}
function $m() {}
var ml = !1;
function Um(e, t, n) {
    if (ml) return e(t, n);
    ml = !0;
    try {
        return zm(e, t, n);
    } finally {
        (ml = !1), (Xr !== null || qr !== null) && ($m(), Bm());
    }
}
function la(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = Ei(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) ||
                ((e = e.type), (r = !(e === "button" || e === "input" || e === "select" || e === "textarea"))),
                (e = !r);
            break e;
        default:
            e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(O(231, t, typeof n));
    return n;
}
var fc = !1;
if (on)
    try {
        var Oo = {};
        Object.defineProperty(Oo, "passive", {
            get: function () {
                fc = !0;
            },
        }),
            window.addEventListener("test", Oo, Oo),
            window.removeEventListener("test", Oo, Oo);
    } catch {
        fc = !1;
    }
function F0(e, t, n, r, o, a, s, i, l) {
    var c = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, c);
    } catch (u) {
        this.onError(u);
    }
}
var qo = !1,
    zs = null,
    $s = !1,
    pc = null,
    B0 = {
        onError: function (e) {
            (qo = !0), (zs = e);
        },
    };
function z0(e, t, n, r, o, a, s, i, l) {
    (qo = !1), (zs = null), F0.apply(B0, arguments);
}
function $0(e, t, n, r, o, a, s, i, l) {
    if ((z0.apply(this, arguments), qo)) {
        if (qo) {
            var c = zs;
            (qo = !1), (zs = null);
        } else throw Error(O(198));
        $s || (($s = !0), (pc = c));
    }
}
function Tr(e) {
    var t = e,
        n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
        e = t;
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
        while (e);
    }
    return t.tag === 3 ? n : null;
}
function Vm(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if ((t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)), t !== null)) return t.dehydrated;
    }
    return null;
}
function nf(e) {
    if (Tr(e) !== e) throw Error(O(188));
}
function U0(e) {
    var t = e.alternate;
    if (!t) {
        if (((t = Tr(e)), t === null)) throw Error(O(188));
        return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
        var o = n.return;
        if (o === null) break;
        var a = o.alternate;
        if (a === null) {
            if (((r = o.return), r !== null)) {
                n = r;
                continue;
            }
            break;
        }
        if (o.child === a.child) {
            for (a = o.child; a; ) {
                if (a === n) return nf(o), e;
                if (a === r) return nf(o), t;
                a = a.sibling;
            }
            throw Error(O(188));
        }
        if (n.return !== r.return) (n = o), (r = a);
        else {
            for (var s = !1, i = o.child; i; ) {
                if (i === n) {
                    (s = !0), (n = o), (r = a);
                    break;
                }
                if (i === r) {
                    (s = !0), (r = o), (n = a);
                    break;
                }
                i = i.sibling;
            }
            if (!s) {
                for (i = a.child; i; ) {
                    if (i === n) {
                        (s = !0), (n = a), (r = o);
                        break;
                    }
                    if (i === r) {
                        (s = !0), (r = a), (n = o);
                        break;
                    }
                    i = i.sibling;
                }
                if (!s) throw Error(O(189));
            }
        }
        if (n.alternate !== r) throw Error(O(190));
    }
    if (n.tag !== 3) throw Error(O(188));
    return n.stateNode.current === n ? e : t;
}
function Wm(e) {
    return (e = U0(e)), e !== null ? Hm(e) : null;
}
function Hm(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null; ) {
        var t = Hm(e);
        if (t !== null) return t;
        e = e.sibling;
    }
    return null;
}
var Km = st.unstable_scheduleCallback,
    rf = st.unstable_cancelCallback,
    V0 = st.unstable_shouldYield,
    W0 = st.unstable_requestPaint,
    Ee = st.unstable_now,
    H0 = st.unstable_getCurrentPriorityLevel,
    Du = st.unstable_ImmediatePriority,
    Qm = st.unstable_UserBlockingPriority,
    Us = st.unstable_NormalPriority,
    K0 = st.unstable_LowPriority,
    Gm = st.unstable_IdlePriority,
    wi = null,
    Ht = null;
function Q0(e) {
    if (Ht && typeof Ht.onCommitFiberRoot == "function")
        try {
            Ht.onCommitFiberRoot(wi, e, void 0, (e.current.flags & 128) === 128);
        } catch {}
}
var At = Math.clz32 ? Math.clz32 : X0,
    G0 = Math.log,
    Y0 = Math.LN2;
function X0(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((G0(e) / Y0) | 0)) | 0;
}
var Ga = 64,
    Ya = 4194304;
function Ko(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e;
    }
}
function Vs(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        o = e.suspendedLanes,
        a = e.pingedLanes,
        s = n & 268435455;
    if (s !== 0) {
        var i = s & ~o;
        i !== 0 ? (r = Ko(i)) : ((a &= s), a !== 0 && (r = Ko(a)));
    } else (s = n & ~o), s !== 0 ? (r = Ko(s)) : a !== 0 && (r = Ko(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & o) && ((o = r & -r), (a = t & -t), o >= a || (o === 16 && (a & 4194240) !== 0)))
        return t;
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; ) (n = 31 - At(t)), (o = 1 << n), (r |= e[n]), (t &= ~o);
    return r;
}
function q0(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1;
    }
}
function Z0(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, o = e.expirationTimes, a = e.pendingLanes; 0 < a; ) {
        var s = 31 - At(a),
            i = 1 << s,
            l = o[s];
        l === -1 ? (!(i & n) || i & r) && (o[s] = q0(i, t)) : l <= t && (e.expiredLanes |= i), (a &= ~i);
    }
}
function mc(e) {
    return (e = e.pendingLanes & -1073741825), e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
}
function Ym() {
    var e = Ga;
    return (Ga <<= 1), !(Ga & 4194240) && (Ga = 64), e;
}
function hl(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
}
function Ma(e, t, n) {
    (e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - At(t)),
        (e[t] = n);
}
function J0(e, t) {
    var n = e.pendingLanes & ~t;
    (e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements);
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
        var o = 31 - At(n),
            a = 1 << o;
        (t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~a);
    }
}
function _u(e, t) {
    var n = (e.entangledLanes |= t);
    for (e = e.entanglements; n; ) {
        var r = 31 - At(n),
            o = 1 << r;
        (o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o);
    }
}
var ie = 0;
function Xm(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var qm,
    Mu,
    Zm,
    Jm,
    eh,
    hc = !1,
    Xa = [],
    On = null,
    jn = null,
    Ln = null,
    ca = new Map(),
    ua = new Map(),
    En = [],
    e2 =
        "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
            " "
        );
function of(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            On = null;
            break;
        case "dragenter":
        case "dragleave":
            jn = null;
            break;
        case "mouseover":
        case "mouseout":
            Ln = null;
            break;
        case "pointerover":
        case "pointerout":
            ca.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            ua.delete(t.pointerId);
    }
}
function jo(e, t, n, r, o, a) {
    return e === null || e.nativeEvent !== a
        ? ((e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: a, targetContainers: [o] }),
          t !== null && ((t = ja(t)), t !== null && Mu(t)),
          e)
        : ((e.eventSystemFlags |= r), (t = e.targetContainers), o !== null && t.indexOf(o) === -1 && t.push(o), e);
}
function t2(e, t, n, r, o) {
    switch (t) {
        case "focusin":
            return (On = jo(On, e, t, n, r, o)), !0;
        case "dragenter":
            return (jn = jo(jn, e, t, n, r, o)), !0;
        case "mouseover":
            return (Ln = jo(Ln, e, t, n, r, o)), !0;
        case "pointerover":
            var a = o.pointerId;
            return ca.set(a, jo(ca.get(a) || null, e, t, n, r, o)), !0;
        case "gotpointercapture":
            return (a = o.pointerId), ua.set(a, jo(ua.get(a) || null, e, t, n, r, o)), !0;
    }
    return !1;
}
function th(e) {
    var t = or(e.target);
    if (t !== null) {
        var n = Tr(t);
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Vm(n)), t !== null)) {
                    (e.blockedOn = t),
                        eh(e.priority, function () {
                            Zm(n);
                        });
                    return;
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return;
            }
        }
    }
    e.blockedOn = null;
}
function xs(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = vc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            (uc = r), n.target.dispatchEvent(r), (uc = null);
        } else return (t = ja(n)), t !== null && Mu(t), (e.blockedOn = n), !1;
        t.shift();
    }
    return !0;
}
function af(e, t, n) {
    xs(e) && n.delete(t);
}
function n2() {
    (hc = !1),
        On !== null && xs(On) && (On = null),
        jn !== null && xs(jn) && (jn = null),
        Ln !== null && xs(Ln) && (Ln = null),
        ca.forEach(af),
        ua.forEach(af);
}
function Lo(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null), hc || ((hc = !0), st.unstable_scheduleCallback(st.unstable_NormalPriority, n2)));
}
function da(e) {
    function t(o) {
        return Lo(o, e);
    }
    if (0 < Xa.length) {
        Lo(Xa[0], e);
        for (var n = 1; n < Xa.length; n++) {
            var r = Xa[n];
            r.blockedOn === e && (r.blockedOn = null);
        }
    }
    for (
        On !== null && Lo(On, e),
            jn !== null && Lo(jn, e),
            Ln !== null && Lo(Ln, e),
            ca.forEach(t),
            ua.forEach(t),
            n = 0;
        n < En.length;
        n++
    )
        (r = En[n]), r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < En.length && ((n = En[0]), n.blockedOn === null); ) th(n), n.blockedOn === null && En.shift();
}
var Zr = dn.ReactCurrentBatchConfig,
    Ws = !0;
function r2(e, t, n, r) {
    var o = ie,
        a = Zr.transition;
    Zr.transition = null;
    try {
        (ie = 1), Ou(e, t, n, r);
    } finally {
        (ie = o), (Zr.transition = a);
    }
}
function o2(e, t, n, r) {
    var o = ie,
        a = Zr.transition;
    Zr.transition = null;
    try {
        (ie = 4), Ou(e, t, n, r);
    } finally {
        (ie = o), (Zr.transition = a);
    }
}
function Ou(e, t, n, r) {
    if (Ws) {
        var o = vc(e, t, n, r);
        if (o === null) Tl(e, t, r, Hs, n), of(e, r);
        else if (t2(o, e, t, n, r)) r.stopPropagation();
        else if ((of(e, r), t & 4 && -1 < e2.indexOf(e))) {
            for (; o !== null; ) {
                var a = ja(o);
                if ((a !== null && qm(a), (a = vc(e, t, n, r)), a === null && Tl(e, t, r, Hs, n), a === o)) break;
                o = a;
            }
            o !== null && r.stopPropagation();
        } else Tl(e, t, r, null, n);
    }
}
var Hs = null;
function vc(e, t, n, r) {
    if (((Hs = null), (e = Au(r)), (e = or(e)), e !== null))
        if (((t = Tr(e)), t === null)) e = null;
        else if (((n = t.tag), n === 13)) {
            if (((e = Vm(t)), e !== null)) return e;
            e = null;
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
            e = null;
        } else t !== e && (e = null);
    return (Hs = e), null;
}
function nh(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (H0()) {
                case Du:
                    return 1;
                case Qm:
                    return 4;
                case Us:
                case K0:
                    return 16;
                case Gm:
                    return 536870912;
                default:
                    return 16;
            }
        default:
            return 16;
    }
}
var Dn = null,
    ju = null,
    ws = null;
function rh() {
    if (ws) return ws;
    var e,
        t = ju,
        n = t.length,
        r,
        o = "value" in Dn ? Dn.value : Dn.textContent,
        a = o.length;
    for (e = 0; e < n && t[e] === o[e]; e++);
    var s = n - e;
    for (r = 1; r <= s && t[n - r] === o[a - r]; r++);
    return (ws = o.slice(e, 1 < r ? 1 - r : void 0));
}
function Ss(e) {
    var t = e.keyCode;
    return (
        "charCode" in e ? ((e = e.charCode), e === 0 && t === 13 && (e = 13)) : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    );
}
function qa() {
    return !0;
}
function sf() {
    return !1;
}
function lt(e) {
    function t(n, r, o, a, s) {
        (this._reactName = n),
            (this._targetInst = o),
            (this.type = r),
            (this.nativeEvent = a),
            (this.target = s),
            (this.currentTarget = null);
        for (var i in e) e.hasOwnProperty(i) && ((n = e[i]), (this[i] = n ? n(a) : a[i]));
        return (
            (this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1)
                ? qa
                : sf),
            (this.isPropagationStopped = sf),
            this
        );
    }
    return (
        xe(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0;
                var n = this.nativeEvent;
                n &&
                    (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1),
                    (this.isDefaultPrevented = qa));
            },
            stopPropagation: function () {
                var n = this.nativeEvent;
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
                    (this.isPropagationStopped = qa));
            },
            persist: function () {},
            isPersistent: qa,
        }),
        t
    );
}
var Eo = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now();
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    Lu = lt(Eo),
    Oa = xe({}, Eo, { view: 0, detail: 0 }),
    a2 = lt(Oa),
    vl,
    gl,
    Fo,
    Si = xe({}, Oa, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Fu,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget;
        },
        movementX: function (e) {
            return "movementX" in e
                ? e.movementX
                : (e !== Fo &&
                      (Fo && e.type === "mousemove"
                          ? ((vl = e.screenX - Fo.screenX), (gl = e.screenY - Fo.screenY))
                          : (gl = vl = 0),
                      (Fo = e)),
                  vl);
        },
        movementY: function (e) {
            return "movementY" in e ? e.movementY : gl;
        },
    }),
    lf = lt(Si),
    s2 = xe({}, Si, { dataTransfer: 0 }),
    i2 = lt(s2),
    l2 = xe({}, Oa, { relatedTarget: 0 }),
    yl = lt(l2),
    c2 = xe({}, Eo, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    u2 = lt(c2),
    d2 = xe({}, Eo, {
        clipboardData: function (e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData;
        },
    }),
    f2 = lt(d2),
    p2 = xe({}, Eo, { data: 0 }),
    cf = lt(p2),
    m2 = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified",
    },
    h2 = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta",
    },
    v2 = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function g2(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = v2[e]) ? !!t[e] : !1;
}
function Fu() {
    return g2;
}
var y2 = xe({}, Oa, {
        key: function (e) {
            if (e.key) {
                var t = m2[e.key] || e.key;
                if (t !== "Unidentified") return t;
            }
            return e.type === "keypress"
                ? ((e = Ss(e)), e === 13 ? "Enter" : String.fromCharCode(e))
                : e.type === "keydown" || e.type === "keyup"
                  ? h2[e.keyCode] || "Unidentified"
                  : "";
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Fu,
        charCode: function (e) {
            return e.type === "keypress" ? Ss(e) : 0;
        },
        keyCode: function (e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
        which: function (e) {
            return e.type === "keypress" ? Ss(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
        },
    }),
    x2 = lt(y2),
    w2 = xe({}, Si, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0,
    }),
    uf = lt(w2),
    S2 = xe({}, Oa, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Fu,
    }),
    C2 = lt(S2),
    b2 = xe({}, Eo, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    E2 = lt(b2),
    T2 = xe({}, Si, {
        deltaX: function (e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
        },
        deltaY: function (e) {
            return "deltaY" in e
                ? e.deltaY
                : "wheelDeltaY" in e
                  ? -e.wheelDeltaY
                  : "wheelDelta" in e
                    ? -e.wheelDelta
                    : 0;
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    P2 = lt(T2),
    I2 = [9, 13, 27, 32],
    Bu = on && "CompositionEvent" in window,
    Zo = null;
on && "documentMode" in document && (Zo = document.documentMode);
var k2 = on && "TextEvent" in window && !Zo,
    oh = on && (!Bu || (Zo && 8 < Zo && 11 >= Zo)),
    df = " ",
    ff = !1;
function ah(e, t) {
    switch (e) {
        case "keyup":
            return I2.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1;
    }
}
function sh(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Br = !1;
function N2(e, t) {
    switch (e) {
        case "compositionend":
            return sh(t);
        case "keypress":
            return t.which !== 32 ? null : ((ff = !0), df);
        case "textInput":
            return (e = t.data), e === df && ff ? null : e;
        default:
            return null;
    }
}
function R2(e, t) {
    if (Br)
        return e === "compositionend" || (!Bu && ah(e, t)) ? ((e = rh()), (ws = ju = Dn = null), (Br = !1), e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which);
            }
            return null;
        case "compositionend":
            return oh && t.locale !== "ko" ? null : t.data;
        default:
            return null;
    }
}
var A2 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
};
function pf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!A2[e.type] : t === "textarea";
}
function ih(e, t, n, r) {
    Fm(r),
        (t = Ks(t, "onChange")),
        0 < t.length && ((n = new Lu("onChange", "change", null, n, r)), e.push({ event: n, listeners: t }));
}
var Jo = null,
    fa = null;
function D2(e) {
    yh(e, 0);
}
function Ci(e) {
    var t = Ur(e);
    if (Am(t)) return e;
}
function _2(e, t) {
    if (e === "change") return t;
}
var lh = !1;
if (on) {
    var xl;
    if (on) {
        var wl = "oninput" in document;
        if (!wl) {
            var mf = document.createElement("div");
            mf.setAttribute("oninput", "return;"), (wl = typeof mf.oninput == "function");
        }
        xl = wl;
    } else xl = !1;
    lh = xl && (!document.documentMode || 9 < document.documentMode);
}
function hf() {
    Jo && (Jo.detachEvent("onpropertychange", ch), (fa = Jo = null));
}
function ch(e) {
    if (e.propertyName === "value" && Ci(fa)) {
        var t = [];
        ih(t, fa, e, Au(e)), Um(D2, t);
    }
}
function M2(e, t, n) {
    e === "focusin" ? (hf(), (Jo = t), (fa = n), Jo.attachEvent("onpropertychange", ch)) : e === "focusout" && hf();
}
function O2(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return Ci(fa);
}
function j2(e, t) {
    if (e === "click") return Ci(t);
}
function L2(e, t) {
    if (e === "input" || e === "change") return Ci(t);
}
function F2(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var _t = typeof Object.is == "function" ? Object.is : F2;
function pa(e, t) {
    if (_t(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var o = n[r];
        if (!Zl.call(t, o) || !_t(e[o], t[o])) return !1;
    }
    return !0;
}
function vf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
}
function gf(e, t) {
    var n = vf(e);
    e = 0;
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t)) return { node: n, offset: t - e };
            e = r;
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e;
                }
                n = n.parentNode;
            }
            n = void 0;
        }
        n = vf(n);
    }
}
function uh(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
              ? !1
              : t && t.nodeType === 3
                ? uh(e, t.parentNode)
                : "contains" in e
                  ? e.contains(t)
                  : e.compareDocumentPosition
                    ? !!(e.compareDocumentPosition(t) & 16)
                    : !1
        : !1;
}
function dh() {
    for (var e = window, t = Bs(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == "string";
        } catch {
            n = !1;
        }
        if (n) e = t.contentWindow;
        else break;
        t = Bs(e.document);
    }
    return t;
}
function zu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
        t &&
        ((t === "input" &&
            (e.type === "text" ||
                e.type === "search" ||
                e.type === "tel" ||
                e.type === "url" ||
                e.type === "password")) ||
            t === "textarea" ||
            e.contentEditable === "true")
    );
}
function B2(e) {
    var t = dh(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && uh(n.ownerDocument.documentElement, n)) {
        if (r !== null && zu(n)) {
            if (((t = r.start), (e = r.end), e === void 0 && (e = t), "selectionStart" in n))
                (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
            else if (((e = ((t = n.ownerDocument || document) && t.defaultView) || window), e.getSelection)) {
                e = e.getSelection();
                var o = n.textContent.length,
                    a = Math.min(r.start, o);
                (r = r.end === void 0 ? a : Math.min(r.end, o)),
                    !e.extend && a > r && ((o = r), (r = a), (a = o)),
                    (o = gf(n, a));
                var s = gf(n, r);
                o &&
                    s &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== o.node ||
                        e.anchorOffset !== o.offset ||
                        e.focusNode !== s.node ||
                        e.focusOffset !== s.offset) &&
                    ((t = t.createRange()),
                    t.setStart(o.node, o.offset),
                    e.removeAllRanges(),
                    a > r ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)));
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
            (e = t[n]), (e.element.scrollLeft = e.left), (e.element.scrollTop = e.top);
    }
}
var z2 = on && "documentMode" in document && 11 >= document.documentMode,
    zr = null,
    gc = null,
    ea = null,
    yc = !1;
function yf(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    yc ||
        zr == null ||
        zr !== Bs(r) ||
        ((r = zr),
        "selectionStart" in r && zu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = ((r.ownerDocument && r.ownerDocument.defaultView) || window).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (ea && pa(ea, r)) ||
            ((ea = r),
            (r = Ks(gc, "onSelect")),
            0 < r.length &&
                ((t = new Lu("onSelect", "select", null, t, n)), e.push({ event: t, listeners: r }), (t.target = zr))));
}
function Za(e, t) {
    var n = {};
    return (n[e.toLowerCase()] = t.toLowerCase()), (n["Webkit" + e] = "webkit" + t), (n["Moz" + e] = "moz" + t), n;
}
var $r = {
        animationend: Za("Animation", "AnimationEnd"),
        animationiteration: Za("Animation", "AnimationIteration"),
        animationstart: Za("Animation", "AnimationStart"),
        transitionend: Za("Transition", "TransitionEnd"),
    },
    Sl = {},
    fh = {};
on &&
    ((fh = document.createElement("div").style),
    "AnimationEvent" in window ||
        (delete $r.animationend.animation, delete $r.animationiteration.animation, delete $r.animationstart.animation),
    "TransitionEvent" in window || delete $r.transitionend.transition);
function bi(e) {
    if (Sl[e]) return Sl[e];
    if (!$r[e]) return e;
    var t = $r[e],
        n;
    for (n in t) if (t.hasOwnProperty(n) && n in fh) return (Sl[e] = t[n]);
    return e;
}
var ph = bi("animationend"),
    mh = bi("animationiteration"),
    hh = bi("animationstart"),
    vh = bi("transitionend"),
    gh = new Map(),
    xf =
        "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
            " "
        );
function Qn(e, t) {
    gh.set(e, t), Er(t, [e]);
}
for (var Cl = 0; Cl < xf.length; Cl++) {
    var bl = xf[Cl],
        $2 = bl.toLowerCase(),
        U2 = bl[0].toUpperCase() + bl.slice(1);
    Qn($2, "on" + U2);
}
Qn(ph, "onAnimationEnd");
Qn(mh, "onAnimationIteration");
Qn(hh, "onAnimationStart");
Qn("dblclick", "onDoubleClick");
Qn("focusin", "onFocus");
Qn("focusout", "onBlur");
Qn(vh, "onTransitionEnd");
po("onMouseEnter", ["mouseout", "mouseover"]);
po("onMouseLeave", ["mouseout", "mouseover"]);
po("onPointerEnter", ["pointerout", "pointerover"]);
po("onPointerLeave", ["pointerout", "pointerover"]);
Er("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Er("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Er("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Er("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Qo =
        "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
            " "
        ),
    V2 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Qo));
function wf(e, t, n) {
    var r = e.type || "unknown-event";
    (e.currentTarget = n), $0(r, t, void 0, e), (e.currentTarget = null);
}
function yh(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            o = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var s = r.length - 1; 0 <= s; s--) {
                    var i = r[s],
                        l = i.instance,
                        c = i.currentTarget;
                    if (((i = i.listener), l !== a && o.isPropagationStopped())) break e;
                    wf(o, i, c), (a = l);
                }
            else
                for (s = 0; s < r.length; s++) {
                    if (
                        ((i = r[s]),
                        (l = i.instance),
                        (c = i.currentTarget),
                        (i = i.listener),
                        l !== a && o.isPropagationStopped())
                    )
                        break e;
                    wf(o, i, c), (a = l);
                }
        }
    }
    if ($s) throw ((e = pc), ($s = !1), (pc = null), e);
}
function pe(e, t) {
    var n = t[bc];
    n === void 0 && (n = t[bc] = new Set());
    var r = e + "__bubble";
    n.has(r) || (xh(t, e, 2, !1), n.add(r));
}
function El(e, t, n) {
    var r = 0;
    t && (r |= 4), xh(n, e, r, t);
}
var Ja = "_reactListening" + Math.random().toString(36).slice(2);
function ma(e) {
    if (!e[Ja]) {
        (e[Ja] = !0),
            Pm.forEach(function (n) {
                n !== "selectionchange" && (V2.has(n) || El(n, !1, e), El(n, !0, e));
            });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[Ja] || ((t[Ja] = !0), El("selectionchange", !1, t));
    }
}
function xh(e, t, n, r) {
    switch (nh(t)) {
        case 1:
            var o = r2;
            break;
        case 4:
            o = o2;
            break;
        default:
            o = Ou;
    }
    (n = o.bind(null, t, n, e)),
        (o = void 0),
        !fc || (t !== "touchstart" && t !== "touchmove" && t !== "wheel") || (o = !0),
        r
            ? o !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: o })
                : e.addEventListener(t, n, !0)
            : o !== void 0
              ? e.addEventListener(t, n, { passive: o })
              : e.addEventListener(t, n, !1);
}
function Tl(e, t, n, r, o) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return;
            var s = r.tag;
            if (s === 3 || s === 4) {
                var i = r.stateNode.containerInfo;
                if (i === o || (i.nodeType === 8 && i.parentNode === o)) break;
                if (s === 4)
                    for (s = r.return; s !== null; ) {
                        var l = s.tag;
                        if (
                            (l === 3 || l === 4) &&
                            ((l = s.stateNode.containerInfo), l === o || (l.nodeType === 8 && l.parentNode === o))
                        )
                            return;
                        s = s.return;
                    }
                for (; i !== null; ) {
                    if (((s = or(i)), s === null)) return;
                    if (((l = s.tag), l === 5 || l === 6)) {
                        r = a = s;
                        continue e;
                    }
                    i = i.parentNode;
                }
            }
            r = r.return;
        }
    Um(function () {
        var c = a,
            u = Au(n),
            d = [];
        e: {
            var g = gh.get(e);
            if (g !== void 0) {
                var p = Lu,
                    C = e;
                switch (e) {
                    case "keypress":
                        if (Ss(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        p = x2;
                        break;
                    case "focusin":
                        (C = "focus"), (p = yl);
                        break;
                    case "focusout":
                        (C = "blur"), (p = yl);
                        break;
                    case "beforeblur":
                    case "afterblur":
                        p = yl;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        p = lf;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        p = i2;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        p = C2;
                        break;
                    case ph:
                    case mh:
                    case hh:
                        p = u2;
                        break;
                    case vh:
                        p = E2;
                        break;
                    case "scroll":
                        p = a2;
                        break;
                    case "wheel":
                        p = P2;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        p = f2;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        p = uf;
                }
                var h = (t & 4) !== 0,
                    w = !h && e === "scroll",
                    v = h ? (g !== null ? g + "Capture" : null) : g;
                h = [];
                for (var m = c, y; m !== null; ) {
                    y = m;
                    var S = y.stateNode;
                    if (
                        (y.tag === 5 &&
                            S !== null &&
                            ((y = S), v !== null && ((S = la(m, v)), S != null && h.push(ha(m, S, y)))),
                        w)
                    )
                        break;
                    m = m.return;
                }
                0 < h.length && ((g = new p(g, C, null, n, u)), d.push({ event: g, listeners: h }));
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((g = e === "mouseover" || e === "pointerover"),
                    (p = e === "mouseout" || e === "pointerout"),
                    g && n !== uc && (C = n.relatedTarget || n.fromElement) && (or(C) || C[an]))
                )
                    break e;
                if (
                    (p || g) &&
                    ((g = u.window === u ? u : (g = u.ownerDocument) ? g.defaultView || g.parentWindow : window),
                    p
                        ? ((C = n.relatedTarget || n.toElement),
                          (p = c),
                          (C = C ? or(C) : null),
                          C !== null && ((w = Tr(C)), C !== w || (C.tag !== 5 && C.tag !== 6)) && (C = null))
                        : ((p = null), (C = c)),
                    p !== C)
                ) {
                    if (
                        ((h = lf),
                        (S = "onMouseLeave"),
                        (v = "onMouseEnter"),
                        (m = "mouse"),
                        (e === "pointerout" || e === "pointerover") &&
                            ((h = uf), (S = "onPointerLeave"), (v = "onPointerEnter"), (m = "pointer")),
                        (w = p == null ? g : Ur(p)),
                        (y = C == null ? g : Ur(C)),
                        (g = new h(S, m + "leave", p, n, u)),
                        (g.target = w),
                        (g.relatedTarget = y),
                        (S = null),
                        or(u) === c &&
                            ((h = new h(v, m + "enter", C, n, u)), (h.target = y), (h.relatedTarget = w), (S = h)),
                        (w = S),
                        p && C)
                    )
                        t: {
                            for (h = p, v = C, m = 0, y = h; y; y = Dr(y)) m++;
                            for (y = 0, S = v; S; S = Dr(S)) y++;
                            for (; 0 < m - y; ) (h = Dr(h)), m--;
                            for (; 0 < y - m; ) (v = Dr(v)), y--;
                            for (; m--; ) {
                                if (h === v || (v !== null && h === v.alternate)) break t;
                                (h = Dr(h)), (v = Dr(v));
                            }
                            h = null;
                        }
                    else h = null;
                    p !== null && Sf(d, g, p, h, !1), C !== null && w !== null && Sf(d, w, C, h, !0);
                }
            }
            e: {
                if (
                    ((g = c ? Ur(c) : window),
                    (p = g.nodeName && g.nodeName.toLowerCase()),
                    p === "select" || (p === "input" && g.type === "file"))
                )
                    var b = _2;
                else if (pf(g))
                    if (lh) b = L2;
                    else {
                        b = O2;
                        var I = M2;
                    }
                else
                    (p = g.nodeName) &&
                        p.toLowerCase() === "input" &&
                        (g.type === "checkbox" || g.type === "radio") &&
                        (b = j2);
                if (b && (b = b(e, c))) {
                    ih(d, b, n, u);
                    break e;
                }
                I && I(e, g, c),
                    e === "focusout" &&
                        (I = g._wrapperState) &&
                        I.controlled &&
                        g.type === "number" &&
                        ac(g, "number", g.value);
            }
            switch (((I = c ? Ur(c) : window), e)) {
                case "focusin":
                    (pf(I) || I.contentEditable === "true") && ((zr = I), (gc = c), (ea = null));
                    break;
                case "focusout":
                    ea = gc = zr = null;
                    break;
                case "mousedown":
                    yc = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    (yc = !1), yf(d, n, u);
                    break;
                case "selectionchange":
                    if (z2) break;
                case "keydown":
                case "keyup":
                    yf(d, n, u);
            }
            var E;
            if (Bu)
                e: {
                    switch (e) {
                        case "compositionstart":
                            var N = "onCompositionStart";
                            break e;
                        case "compositionend":
                            N = "onCompositionEnd";
                            break e;
                        case "compositionupdate":
                            N = "onCompositionUpdate";
                            break e;
                    }
                    N = void 0;
                }
            else
                Br
                    ? ah(e, n) && (N = "onCompositionEnd")
                    : e === "keydown" && n.keyCode === 229 && (N = "onCompositionStart");
            N &&
                (oh &&
                    n.locale !== "ko" &&
                    (Br || N !== "onCompositionStart"
                        ? N === "onCompositionEnd" && Br && (E = rh())
                        : ((Dn = u), (ju = "value" in Dn ? Dn.value : Dn.textContent), (Br = !0))),
                (I = Ks(c, N)),
                0 < I.length &&
                    ((N = new cf(N, e, null, n, u)),
                    d.push({ event: N, listeners: I }),
                    E ? (N.data = E) : ((E = sh(n)), E !== null && (N.data = E)))),
                (E = k2 ? N2(e, n) : R2(e, n)) &&
                    ((c = Ks(c, "onBeforeInput")),
                    0 < c.length &&
                        ((u = new cf("onBeforeInput", "beforeinput", null, n, u)),
                        d.push({ event: u, listeners: c }),
                        (u.data = E)));
        }
        yh(d, t);
    });
}
function ha(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
}
function Ks(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
        var o = e,
            a = o.stateNode;
        o.tag === 5 &&
            a !== null &&
            ((o = a),
            (a = la(e, n)),
            a != null && r.unshift(ha(e, a, o)),
            (a = la(e, t)),
            a != null && r.push(ha(e, a, o))),
            (e = e.return);
    }
    return r;
}
function Dr(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5);
    return e || null;
}
function Sf(e, t, n, r, o) {
    for (var a = t._reactName, s = []; n !== null && n !== r; ) {
        var i = n,
            l = i.alternate,
            c = i.stateNode;
        if (l !== null && l === r) break;
        i.tag === 5 &&
            c !== null &&
            ((i = c),
            o
                ? ((l = la(n, a)), l != null && s.unshift(ha(n, l, i)))
                : o || ((l = la(n, a)), l != null && s.push(ha(n, l, i)))),
            (n = n.return);
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
}
var W2 = /\r\n?/g,
    H2 = /\u0000|\uFFFD/g;
function Cf(e) {
    return (typeof e == "string" ? e : "" + e)
        .replace(
            W2,
            `
`
        )
        .replace(H2, "");
}
function es(e, t, n) {
    if (((t = Cf(t)), Cf(e) !== t && n)) throw Error(O(425));
}
function Qs() {}
var xc = null,
    wc = null;
function Sc(e, t) {
    return (
        e === "textarea" ||
        e === "noscript" ||
        typeof t.children == "string" ||
        typeof t.children == "number" ||
        (typeof t.dangerouslySetInnerHTML == "object" &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    );
}
var Cc = typeof setTimeout == "function" ? setTimeout : void 0,
    K2 = typeof clearTimeout == "function" ? clearTimeout : void 0,
    bf = typeof Promise == "function" ? Promise : void 0,
    Q2 =
        typeof queueMicrotask == "function"
            ? queueMicrotask
            : typeof bf < "u"
              ? function (e) {
                    return bf.resolve(null).then(e).catch(G2);
                }
              : Cc;
function G2(e) {
    setTimeout(function () {
        throw e;
    });
}
function Pl(e, t) {
    var n = t,
        r = 0;
    do {
        var o = n.nextSibling;
        if ((e.removeChild(n), o && o.nodeType === 8))
            if (((n = o.data), n === "/$")) {
                if (r === 0) {
                    e.removeChild(o), da(t);
                    return;
                }
                r--;
            } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
        n = o;
    } while (n);
    da(t);
}
function Fn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
            if (t === "/$") return null;
        }
    }
    return e;
}
function Ef(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--;
            } else n === "/$" && t++;
        }
        e = e.previousSibling;
    }
    return null;
}
var To = Math.random().toString(36).slice(2),
    Ut = "__reactFiber$" + To,
    va = "__reactProps$" + To,
    an = "__reactContainer$" + To,
    bc = "__reactEvents$" + To,
    Y2 = "__reactListeners$" + To,
    X2 = "__reactHandles$" + To;
function or(e) {
    var t = e[Ut];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
        if ((t = n[an] || n[Ut])) {
            if (((n = t.alternate), t.child !== null || (n !== null && n.child !== null)))
                for (e = Ef(e); e !== null; ) {
                    if ((n = e[Ut])) return n;
                    e = Ef(e);
                }
            return t;
        }
        (e = n), (n = e.parentNode);
    }
    return null;
}
function ja(e) {
    return (e = e[Ut] || e[an]), !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e;
}
function Ur(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(O(33));
}
function Ei(e) {
    return e[va] || null;
}
var Ec = [],
    Vr = -1;
function Gn(e) {
    return { current: e };
}
function me(e) {
    0 > Vr || ((e.current = Ec[Vr]), (Ec[Vr] = null), Vr--);
}
function ue(e, t) {
    Vr++, (Ec[Vr] = e.current), (e.current = t);
}
var Wn = {},
    Ue = Gn(Wn),
    Ze = Gn(!1),
    vr = Wn;
function mo(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Wn;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var o = {},
        a;
    for (a in n) o[a] = t[a];
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = o)),
        o
    );
}
function Je(e) {
    return (e = e.childContextTypes), e != null;
}
function Gs() {
    me(Ze), me(Ue);
}
function Tf(e, t, n) {
    if (Ue.current !== Wn) throw Error(O(168));
    ue(Ue, t), ue(Ze, n);
}
function wh(e, t, n) {
    var r = e.stateNode;
    if (((t = t.childContextTypes), typeof r.getChildContext != "function")) return n;
    r = r.getChildContext();
    for (var o in r) if (!(o in t)) throw Error(O(108, M0(e) || "Unknown", o));
    return xe({}, n, r);
}
function Ys(e) {
    return (
        (e = ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Wn),
        (vr = Ue.current),
        ue(Ue, e),
        ue(Ze, Ze.current),
        !0
    );
}
function Pf(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(O(169));
    n ? ((e = wh(e, t, vr)), (r.__reactInternalMemoizedMergedChildContext = e), me(Ze), me(Ue), ue(Ue, e)) : me(Ze),
        ue(Ze, n);
}
var Jt = null,
    Ti = !1,
    Il = !1;
function Sh(e) {
    Jt === null ? (Jt = [e]) : Jt.push(e);
}
function q2(e) {
    (Ti = !0), Sh(e);
}
function Yn() {
    if (!Il && Jt !== null) {
        Il = !0;
        var e = 0,
            t = ie;
        try {
            var n = Jt;
            for (ie = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0);
                while (r !== null);
            }
            (Jt = null), (Ti = !1);
        } catch (o) {
            throw (Jt !== null && (Jt = Jt.slice(e + 1)), Km(Du, Yn), o);
        } finally {
            (ie = t), (Il = !1);
        }
    }
    return null;
}
var Wr = [],
    Hr = 0,
    Xs = null,
    qs = 0,
    ft = [],
    pt = 0,
    gr = null,
    tn = 1,
    nn = "";
function nr(e, t) {
    (Wr[Hr++] = qs), (Wr[Hr++] = Xs), (Xs = e), (qs = t);
}
function Ch(e, t, n) {
    (ft[pt++] = tn), (ft[pt++] = nn), (ft[pt++] = gr), (gr = e);
    var r = tn;
    e = nn;
    var o = 32 - At(r) - 1;
    (r &= ~(1 << o)), (n += 1);
    var a = 32 - At(t) + o;
    if (30 < a) {
        var s = o - (o % 5);
        (a = (r & ((1 << s) - 1)).toString(32)),
            (r >>= s),
            (o -= s),
            (tn = (1 << (32 - At(t) + o)) | (n << o) | r),
            (nn = a + e);
    } else (tn = (1 << a) | (n << o) | r), (nn = e);
}
function $u(e) {
    e.return !== null && (nr(e, 1), Ch(e, 1, 0));
}
function Uu(e) {
    for (; e === Xs; ) (Xs = Wr[--Hr]), (Wr[Hr] = null), (qs = Wr[--Hr]), (Wr[Hr] = null);
    for (; e === gr; )
        (gr = ft[--pt]), (ft[pt] = null), (nn = ft[--pt]), (ft[pt] = null), (tn = ft[--pt]), (ft[pt] = null);
}
var ot = null,
    rt = null,
    ve = !1,
    Rt = null;
function bh(e, t) {
    var n = mt(5, null, null, 0);
    (n.elementType = "DELETED"),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function If(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return (
                (t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t),
                t !== null ? ((e.stateNode = t), (ot = e), (rt = Fn(t.firstChild)), !0) : !1
            );
        case 6:
            return (
                (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (ot = e), (rt = null), !0) : !1
            );
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = gr !== null ? { id: tn, overflow: nn } : null),
                      (e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }),
                      (n = mt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (ot = e),
                      (rt = null),
                      !0)
                    : !1
            );
        default:
            return !1;
    }
}
function Tc(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Pc(e) {
    if (ve) {
        var t = rt;
        if (t) {
            var n = t;
            if (!If(e, t)) {
                if (Tc(e)) throw Error(O(418));
                t = Fn(n.nextSibling);
                var r = ot;
                t && If(e, t) ? bh(r, n) : ((e.flags = (e.flags & -4097) | 2), (ve = !1), (ot = e));
            }
        } else {
            if (Tc(e)) throw Error(O(418));
            (e.flags = (e.flags & -4097) | 2), (ve = !1), (ot = e);
        }
    }
}
function kf(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; ) e = e.return;
    ot = e;
}
function ts(e) {
    if (e !== ot) return !1;
    if (!ve) return kf(e), (ve = !0), !1;
    var t;
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type), (t = t !== "head" && t !== "body" && !Sc(e.type, e.memoizedProps))),
        t && (t = rt))
    ) {
        if (Tc(e)) throw (Eh(), Error(O(418)));
        for (; t; ) bh(e, t), (t = Fn(t.nextSibling));
    }
    if ((kf(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e)) throw Error(O(317));
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            rt = Fn(e.nextSibling);
                            break e;
                        }
                        t--;
                    } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
                }
                e = e.nextSibling;
            }
            rt = null;
        }
    } else rt = ot ? Fn(e.stateNode.nextSibling) : null;
    return !0;
}
function Eh() {
    for (var e = rt; e; ) e = Fn(e.nextSibling);
}
function ho() {
    (rt = ot = null), (ve = !1);
}
function Vu(e) {
    Rt === null ? (Rt = [e]) : Rt.push(e);
}
var Z2 = dn.ReactCurrentBatchConfig;
function Bo(e, t, n) {
    if (((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(O(309));
                var r = n.stateNode;
            }
            if (!r) throw Error(O(147, e));
            var o = r,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a
                ? t.ref
                : ((t = function (s) {
                      var i = o.refs;
                      s === null ? delete i[a] : (i[a] = s);
                  }),
                  (t._stringRef = a),
                  t);
        }
        if (typeof e != "string") throw Error(O(284));
        if (!n._owner) throw Error(O(290, e));
    }
    return e;
}
function ns(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(O(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e)))
    );
}
function Nf(e) {
    var t = e._init;
    return t(e._payload);
}
function Th(e) {
    function t(v, m) {
        if (e) {
            var y = v.deletions;
            y === null ? ((v.deletions = [m]), (v.flags |= 16)) : y.push(m);
        }
    }
    function n(v, m) {
        if (!e) return null;
        for (; m !== null; ) t(v, m), (m = m.sibling);
        return null;
    }
    function r(v, m) {
        for (v = new Map(); m !== null; ) m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
        return v;
    }
    function o(v, m) {
        return (v = Un(v, m)), (v.index = 0), (v.sibling = null), v;
    }
    function a(v, m, y) {
        return (
            (v.index = y),
            e
                ? ((y = v.alternate),
                  y !== null ? ((y = y.index), y < m ? ((v.flags |= 2), m) : y) : ((v.flags |= 2), m))
                : ((v.flags |= 1048576), m)
        );
    }
    function s(v) {
        return e && v.alternate === null && (v.flags |= 2), v;
    }
    function i(v, m, y, S) {
        return m === null || m.tag !== 6
            ? ((m = Ml(y, v.mode, S)), (m.return = v), m)
            : ((m = o(m, y)), (m.return = v), m);
    }
    function l(v, m, y, S) {
        var b = y.type;
        return b === Fr
            ? u(v, m, y.props.children, S, y.key)
            : m !== null &&
                (m.elementType === b || (typeof b == "object" && b !== null && b.$$typeof === Cn && Nf(b) === m.type))
              ? ((S = o(m, y.props)), (S.ref = Bo(v, m, y)), (S.return = v), S)
              : ((S = ks(y.type, y.key, y.props, null, v.mode, S)), (S.ref = Bo(v, m, y)), (S.return = v), S);
    }
    function c(v, m, y, S) {
        return m === null ||
            m.tag !== 4 ||
            m.stateNode.containerInfo !== y.containerInfo ||
            m.stateNode.implementation !== y.implementation
            ? ((m = Ol(y, v.mode, S)), (m.return = v), m)
            : ((m = o(m, y.children || [])), (m.return = v), m);
    }
    function u(v, m, y, S, b) {
        return m === null || m.tag !== 7
            ? ((m = mr(y, v.mode, S, b)), (m.return = v), m)
            : ((m = o(m, y)), (m.return = v), m);
    }
    function d(v, m, y) {
        if ((typeof m == "string" && m !== "") || typeof m == "number")
            return (m = Ml("" + m, v.mode, y)), (m.return = v), m;
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case Ha:
                    return (
                        (y = ks(m.type, m.key, m.props, null, v.mode, y)), (y.ref = Bo(v, null, m)), (y.return = v), y
                    );
                case Lr:
                    return (m = Ol(m, v.mode, y)), (m.return = v), m;
                case Cn:
                    var S = m._init;
                    return d(v, S(m._payload), y);
            }
            if (Ho(m) || Mo(m)) return (m = mr(m, v.mode, y, null)), (m.return = v), m;
            ns(v, m);
        }
        return null;
    }
    function g(v, m, y, S) {
        var b = m !== null ? m.key : null;
        if ((typeof y == "string" && y !== "") || typeof y == "number") return b !== null ? null : i(v, m, "" + y, S);
        if (typeof y == "object" && y !== null) {
            switch (y.$$typeof) {
                case Ha:
                    return y.key === b ? l(v, m, y, S) : null;
                case Lr:
                    return y.key === b ? c(v, m, y, S) : null;
                case Cn:
                    return (b = y._init), g(v, m, b(y._payload), S);
            }
            if (Ho(y) || Mo(y)) return b !== null ? null : u(v, m, y, S, null);
            ns(v, y);
        }
        return null;
    }
    function p(v, m, y, S, b) {
        if ((typeof S == "string" && S !== "") || typeof S == "number")
            return (v = v.get(y) || null), i(m, v, "" + S, b);
        if (typeof S == "object" && S !== null) {
            switch (S.$$typeof) {
                case Ha:
                    return (v = v.get(S.key === null ? y : S.key) || null), l(m, v, S, b);
                case Lr:
                    return (v = v.get(S.key === null ? y : S.key) || null), c(m, v, S, b);
                case Cn:
                    var I = S._init;
                    return p(v, m, y, I(S._payload), b);
            }
            if (Ho(S) || Mo(S)) return (v = v.get(y) || null), u(m, v, S, b, null);
            ns(m, S);
        }
        return null;
    }
    function C(v, m, y, S) {
        for (var b = null, I = null, E = m, N = (m = 0), k = null; E !== null && N < y.length; N++) {
            E.index > N ? ((k = E), (E = null)) : (k = E.sibling);
            var P = g(v, E, y[N], S);
            if (P === null) {
                E === null && (E = k);
                break;
            }
            e && E && P.alternate === null && t(v, E),
                (m = a(P, m, N)),
                I === null ? (b = P) : (I.sibling = P),
                (I = P),
                (E = k);
        }
        if (N === y.length) return n(v, E), ve && nr(v, N), b;
        if (E === null) {
            for (; N < y.length; N++)
                (E = d(v, y[N], S)), E !== null && ((m = a(E, m, N)), I === null ? (b = E) : (I.sibling = E), (I = E));
            return ve && nr(v, N), b;
        }
        for (E = r(v, E); N < y.length; N++)
            (k = p(E, v, N, y[N], S)),
                k !== null &&
                    (e && k.alternate !== null && E.delete(k.key === null ? N : k.key),
                    (m = a(k, m, N)),
                    I === null ? (b = k) : (I.sibling = k),
                    (I = k));
        return (
            e &&
                E.forEach(function (_) {
                    return t(v, _);
                }),
            ve && nr(v, N),
            b
        );
    }
    function h(v, m, y, S) {
        var b = Mo(y);
        if (typeof b != "function") throw Error(O(150));
        if (((y = b.call(y)), y == null)) throw Error(O(151));
        for (var I = (b = null), E = m, N = (m = 0), k = null, P = y.next(); E !== null && !P.done; N++, P = y.next()) {
            E.index > N ? ((k = E), (E = null)) : (k = E.sibling);
            var _ = g(v, E, P.value, S);
            if (_ === null) {
                E === null && (E = k);
                break;
            }
            e && E && _.alternate === null && t(v, E),
                (m = a(_, m, N)),
                I === null ? (b = _) : (I.sibling = _),
                (I = _),
                (E = k);
        }
        if (P.done) return n(v, E), ve && nr(v, N), b;
        if (E === null) {
            for (; !P.done; N++, P = y.next())
                (P = d(v, P.value, S)),
                    P !== null && ((m = a(P, m, N)), I === null ? (b = P) : (I.sibling = P), (I = P));
            return ve && nr(v, N), b;
        }
        for (E = r(v, E); !P.done; N++, P = y.next())
            (P = p(E, v, N, P.value, S)),
                P !== null &&
                    (e && P.alternate !== null && E.delete(P.key === null ? N : P.key),
                    (m = a(P, m, N)),
                    I === null ? (b = P) : (I.sibling = P),
                    (I = P));
        return (
            e &&
                E.forEach(function (D) {
                    return t(v, D);
                }),
            ve && nr(v, N),
            b
        );
    }
    function w(v, m, y, S) {
        if (
            (typeof y == "object" && y !== null && y.type === Fr && y.key === null && (y = y.props.children),
            typeof y == "object" && y !== null)
        ) {
            switch (y.$$typeof) {
                case Ha:
                    e: {
                        for (var b = y.key, I = m; I !== null; ) {
                            if (I.key === b) {
                                if (((b = y.type), b === Fr)) {
                                    if (I.tag === 7) {
                                        n(v, I.sibling), (m = o(I, y.props.children)), (m.return = v), (v = m);
                                        break e;
                                    }
                                } else if (
                                    I.elementType === b ||
                                    (typeof b == "object" && b !== null && b.$$typeof === Cn && Nf(b) === I.type)
                                ) {
                                    n(v, I.sibling),
                                        (m = o(I, y.props)),
                                        (m.ref = Bo(v, I, y)),
                                        (m.return = v),
                                        (v = m);
                                    break e;
                                }
                                n(v, I);
                                break;
                            } else t(v, I);
                            I = I.sibling;
                        }
                        y.type === Fr
                            ? ((m = mr(y.props.children, v.mode, S, y.key)), (m.return = v), (v = m))
                            : ((S = ks(y.type, y.key, y.props, null, v.mode, S)),
                              (S.ref = Bo(v, m, y)),
                              (S.return = v),
                              (v = S));
                    }
                    return s(v);
                case Lr:
                    e: {
                        for (I = y.key; m !== null; ) {
                            if (m.key === I)
                                if (
                                    m.tag === 4 &&
                                    m.stateNode.containerInfo === y.containerInfo &&
                                    m.stateNode.implementation === y.implementation
                                ) {
                                    n(v, m.sibling), (m = o(m, y.children || [])), (m.return = v), (v = m);
                                    break e;
                                } else {
                                    n(v, m);
                                    break;
                                }
                            else t(v, m);
                            m = m.sibling;
                        }
                        (m = Ol(y, v.mode, S)), (m.return = v), (v = m);
                    }
                    return s(v);
                case Cn:
                    return (I = y._init), w(v, m, I(y._payload), S);
            }
            if (Ho(y)) return C(v, m, y, S);
            if (Mo(y)) return h(v, m, y, S);
            ns(v, y);
        }
        return (typeof y == "string" && y !== "") || typeof y == "number"
            ? ((y = "" + y),
              m !== null && m.tag === 6
                  ? (n(v, m.sibling), (m = o(m, y)), (m.return = v), (v = m))
                  : (n(v, m), (m = Ml(y, v.mode, S)), (m.return = v), (v = m)),
              s(v))
            : n(v, m);
    }
    return w;
}
var vo = Th(!0),
    Ph = Th(!1),
    Zs = Gn(null),
    Js = null,
    Kr = null,
    Wu = null;
function Hu() {
    Wu = Kr = Js = null;
}
function Ku(e) {
    var t = Zs.current;
    me(Zs), (e._currentValue = t);
}
function Ic(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate;
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break;
        e = e.return;
    }
}
function Jr(e, t) {
    (Js = e),
        (Wu = Kr = null),
        (e = e.dependencies),
        e !== null && e.firstContext !== null && (e.lanes & t && (qe = !0), (e.firstContext = null));
}
function vt(e) {
    var t = e._currentValue;
    if (Wu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Kr === null)) {
            if (Js === null) throw Error(O(308));
            (Kr = e), (Js.dependencies = { lanes: 0, firstContext: e });
        } else Kr = Kr.next = e;
    return t;
}
var ar = null;
function Qu(e) {
    ar === null ? (ar = [e]) : ar.push(e);
}
function Ih(e, t, n, r) {
    var o = t.interleaved;
    return o === null ? ((n.next = n), Qu(t)) : ((n.next = o.next), (o.next = n)), (t.interleaved = n), sn(e, r);
}
function sn(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t), (n = e.alternate), n !== null && (n.childLanes |= t), (n = e), (e = e.return);
    return n.tag === 3 ? n.stateNode : null;
}
var bn = !1;
function Gu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    };
}
function kh(e, t) {
    (e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            });
}
function rn(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
}
function Bn(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (((r = r.shared), ne & 2)) {
        var o = r.pending;
        return o === null ? (t.next = t) : ((t.next = o.next), (o.next = t)), (r.pending = t), sn(e, n);
    }
    return (
        (o = r.interleaved),
        o === null ? ((t.next = t), Qu(r)) : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        sn(e, n)
    );
}
function Cs(e, t, n) {
    if (((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
    }
}
function Rf(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var o = null,
            a = null;
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var s = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                };
                a === null ? (o = a = s) : (a = a.next = s), (n = n.next);
            } while (n !== null);
            a === null ? (o = a = t) : (a = a.next = t);
        } else o = a = t;
        (n = { baseState: r.baseState, firstBaseUpdate: o, lastBaseUpdate: a, shared: r.shared, effects: r.effects }),
            (e.updateQueue = n);
        return;
    }
    (e = n.lastBaseUpdate), e === null ? (n.firstBaseUpdate = t) : (e.next = t), (n.lastBaseUpdate = t);
}
function ei(e, t, n, r) {
    var o = e.updateQueue;
    bn = !1;
    var a = o.firstBaseUpdate,
        s = o.lastBaseUpdate,
        i = o.shared.pending;
    if (i !== null) {
        o.shared.pending = null;
        var l = i,
            c = l.next;
        (l.next = null), s === null ? (a = c) : (s.next = c), (s = l);
        var u = e.alternate;
        u !== null &&
            ((u = u.updateQueue),
            (i = u.lastBaseUpdate),
            i !== s && (i === null ? (u.firstBaseUpdate = c) : (i.next = c), (u.lastBaseUpdate = l)));
    }
    if (a !== null) {
        var d = o.baseState;
        (s = 0), (u = c = l = null), (i = a);
        do {
            var g = i.lane,
                p = i.eventTime;
            if ((r & g) === g) {
                u !== null &&
                    (u = u.next =
                        { eventTime: p, lane: 0, tag: i.tag, payload: i.payload, callback: i.callback, next: null });
                e: {
                    var C = e,
                        h = i;
                    switch (((g = t), (p = n), h.tag)) {
                        case 1:
                            if (((C = h.payload), typeof C == "function")) {
                                d = C.call(p, d, g);
                                break e;
                            }
                            d = C;
                            break e;
                        case 3:
                            C.flags = (C.flags & -65537) | 128;
                        case 0:
                            if (((C = h.payload), (g = typeof C == "function" ? C.call(p, d, g) : C), g == null))
                                break e;
                            d = xe({}, d, g);
                            break e;
                        case 2:
                            bn = !0;
                    }
                }
                i.callback !== null &&
                    i.lane !== 0 &&
                    ((e.flags |= 64), (g = o.effects), g === null ? (o.effects = [i]) : g.push(i));
            } else
                (p = { eventTime: p, lane: g, tag: i.tag, payload: i.payload, callback: i.callback, next: null }),
                    u === null ? ((c = u = p), (l = d)) : (u = u.next = p),
                    (s |= g);
            if (((i = i.next), i === null)) {
                if (((i = o.shared.pending), i === null)) break;
                (g = i), (i = g.next), (g.next = null), (o.lastBaseUpdate = g), (o.shared.pending = null);
            }
        } while (!0);
        if (
            (u === null && (l = d),
            (o.baseState = l),
            (o.firstBaseUpdate = c),
            (o.lastBaseUpdate = u),
            (t = o.shared.interleaved),
            t !== null)
        ) {
            o = t;
            do (s |= o.lane), (o = o.next);
            while (o !== t);
        } else a === null && (o.shared.lanes = 0);
        (xr |= s), (e.lanes = s), (e.memoizedState = d);
    }
}
function Af(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                o = r.callback;
            if (o !== null) {
                if (((r.callback = null), (r = n), typeof o != "function")) throw Error(O(191, o));
                o.call(r);
            }
        }
}
var La = {},
    Kt = Gn(La),
    ga = Gn(La),
    ya = Gn(La);
function sr(e) {
    if (e === La) throw Error(O(174));
    return e;
}
function Yu(e, t) {
    switch ((ue(ya, t), ue(ga, e), ue(Kt, La), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : ic(null, "");
            break;
        default:
            (e = e === 8 ? t.parentNode : t), (t = e.namespaceURI || null), (e = e.tagName), (t = ic(t, e));
    }
    me(Kt), ue(Kt, t);
}
function go() {
    me(Kt), me(ga), me(ya);
}
function Nh(e) {
    sr(ya.current);
    var t = sr(Kt.current),
        n = ic(t, e.type);
    t !== n && (ue(ga, e), ue(Kt, n));
}
function Xu(e) {
    ga.current === e && (me(Kt), me(ga));
}
var ge = Gn(0);
function ti(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")) return t;
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t;
        } else if (t.child !== null) {
            (t.child.return = t), (t = t.child);
            continue;
        }
        if (t === e) break;
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null;
            t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
}
var kl = [];
function qu() {
    for (var e = 0; e < kl.length; e++) kl[e]._workInProgressVersionPrimary = null;
    kl.length = 0;
}
var bs = dn.ReactCurrentDispatcher,
    Nl = dn.ReactCurrentBatchConfig,
    yr = 0,
    ye = null,
    Pe = null,
    Re = null,
    ni = !1,
    ta = !1,
    xa = 0,
    J2 = 0;
function Be() {
    throw Error(O(321));
}
function Zu(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++) if (!_t(e[n], t[n])) return !1;
    return !0;
}
function Ju(e, t, n, r, o, a) {
    if (
        ((yr = a),
        (ye = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (bs.current = e === null || e.memoizedState === null ? rw : ow),
        (e = n(r, o)),
        ta)
    ) {
        a = 0;
        do {
            if (((ta = !1), (xa = 0), 25 <= a)) throw Error(O(301));
            (a += 1), (Re = Pe = null), (t.updateQueue = null), (bs.current = aw), (e = n(r, o));
        } while (ta);
    }
    if (((bs.current = ri), (t = Pe !== null && Pe.next !== null), (yr = 0), (Re = Pe = ye = null), (ni = !1), t))
        throw Error(O(300));
    return e;
}
function ed() {
    var e = xa !== 0;
    return (xa = 0), e;
}
function Ft() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e), Re;
}
function gt() {
    if (Pe === null) {
        var e = ye.alternate;
        e = e !== null ? e.memoizedState : null;
    } else e = Pe.next;
    var t = Re === null ? ye.memoizedState : Re.next;
    if (t !== null) (Re = t), (Pe = e);
    else {
        if (e === null) throw Error(O(310));
        (Pe = e),
            (e = {
                memoizedState: Pe.memoizedState,
                baseState: Pe.baseState,
                baseQueue: Pe.baseQueue,
                queue: Pe.queue,
                next: null,
            }),
            Re === null ? (ye.memoizedState = Re = e) : (Re = Re.next = e);
    }
    return Re;
}
function wa(e, t) {
    return typeof t == "function" ? t(e) : t;
}
function Rl(e) {
    var t = gt(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = Pe,
        o = r.baseQueue,
        a = n.pending;
    if (a !== null) {
        if (o !== null) {
            var s = o.next;
            (o.next = a.next), (a.next = s);
        }
        (r.baseQueue = o = a), (n.pending = null);
    }
    if (o !== null) {
        (a = o.next), (r = r.baseState);
        var i = (s = null),
            l = null,
            c = a;
        do {
            var u = c.lane;
            if ((yr & u) === u)
                l !== null &&
                    (l = l.next =
                        {
                            lane: 0,
                            action: c.action,
                            hasEagerState: c.hasEagerState,
                            eagerState: c.eagerState,
                            next: null,
                        }),
                    (r = c.hasEagerState ? c.eagerState : e(r, c.action));
            else {
                var d = {
                    lane: u,
                    action: c.action,
                    hasEagerState: c.hasEagerState,
                    eagerState: c.eagerState,
                    next: null,
                };
                l === null ? ((i = l = d), (s = r)) : (l = l.next = d), (ye.lanes |= u), (xr |= u);
            }
            c = c.next;
        } while (c !== null && c !== a);
        l === null ? (s = r) : (l.next = i),
            _t(r, t.memoizedState) || (qe = !0),
            (t.memoizedState = r),
            (t.baseState = s),
            (t.baseQueue = l),
            (n.lastRenderedState = r);
    }
    if (((e = n.interleaved), e !== null)) {
        o = e;
        do (a = o.lane), (ye.lanes |= a), (xr |= a), (o = o.next);
        while (o !== e);
    } else o === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
}
function Al(e) {
    var t = gt(),
        n = t.queue;
    if (n === null) throw Error(O(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        o = n.pending,
        a = t.memoizedState;
    if (o !== null) {
        n.pending = null;
        var s = (o = o.next);
        do (a = e(a, s.action)), (s = s.next);
        while (s !== o);
        _t(a, t.memoizedState) || (qe = !0),
            (t.memoizedState = a),
            t.baseQueue === null && (t.baseState = a),
            (n.lastRenderedState = a);
    }
    return [a, r];
}
function Rh() {}
function Ah(e, t) {
    var n = ye,
        r = gt(),
        o = t(),
        a = !_t(r.memoizedState, o);
    if (
        (a && ((r.memoizedState = o), (qe = !0)),
        (r = r.queue),
        td(Mh.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || a || (Re !== null && Re.memoizedState.tag & 1))
    ) {
        if (((n.flags |= 2048), Sa(9, _h.bind(null, n, r, o, t), void 0, null), Ae === null)) throw Error(O(349));
        yr & 30 || Dh(n, t, o);
    }
    return o;
}
function Dh(e, t, n) {
    (e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ye.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function _h(e, t, n, r) {
    (t.value = n), (t.getSnapshot = r), Oh(t) && jh(e);
}
function Mh(e, t, n) {
    return n(function () {
        Oh(t) && jh(e);
    });
}
function Oh(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !_t(e, n);
    } catch {
        return !0;
    }
}
function jh(e) {
    var t = sn(e, 1);
    t !== null && Dt(t, e, 1, -1);
}
function Df(e) {
    var t = Ft();
    return (
        typeof e == "function" && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: wa,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = nw.bind(null, ye, e)),
        [t.memoizedState, e]
    );
}
function Sa(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ye.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }), (ye.updateQueue = t), (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
        e
    );
}
function Lh() {
    return gt().memoizedState;
}
function Es(e, t, n, r) {
    var o = Ft();
    (ye.flags |= e), (o.memoizedState = Sa(1 | t, n, void 0, r === void 0 ? null : r));
}
function Pi(e, t, n, r) {
    var o = gt();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (Pe !== null) {
        var s = Pe.memoizedState;
        if (((a = s.destroy), r !== null && Zu(r, s.deps))) {
            o.memoizedState = Sa(t, n, a, r);
            return;
        }
    }
    (ye.flags |= e), (o.memoizedState = Sa(1 | t, n, a, r));
}
function _f(e, t) {
    return Es(8390656, 8, e, t);
}
function td(e, t) {
    return Pi(2048, 8, e, t);
}
function Fh(e, t) {
    return Pi(4, 2, e, t);
}
function Bh(e, t) {
    return Pi(4, 4, e, t);
}
function zh(e, t) {
    if (typeof t == "function")
        return (
            (e = e()),
            t(e),
            function () {
                t(null);
            }
        );
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null;
            }
        );
}
function $h(e, t, n) {
    return (n = n != null ? n.concat([e]) : null), Pi(4, 4, zh.bind(null, t, e), n);
}
function nd() {}
function Uh(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zu(t, r[1]) ? r[0] : ((n.memoizedState = [e, t]), e);
}
function Vh(e, t) {
    var n = gt();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Zu(t, r[1]) ? r[0] : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Wh(e, t, n) {
    return yr & 21
        ? (_t(n, t) || ((n = Ym()), (ye.lanes |= n), (xr |= n), (e.baseState = !0)), t)
        : (e.baseState && ((e.baseState = !1), (qe = !0)), (e.memoizedState = n));
}
function ew(e, t) {
    var n = ie;
    (ie = n !== 0 && 4 > n ? n : 4), e(!0);
    var r = Nl.transition;
    Nl.transition = {};
    try {
        e(!1), t();
    } finally {
        (ie = n), (Nl.transition = r);
    }
}
function Hh() {
    return gt().memoizedState;
}
function tw(e, t, n) {
    var r = $n(e);
    if (((n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }), Kh(e))) Qh(t, n);
    else if (((n = Ih(e, t, n, r)), n !== null)) {
        var o = Ke();
        Dt(n, e, r, o), Gh(n, t, r);
    }
}
function nw(e, t, n) {
    var r = $n(e),
        o = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Kh(e)) Qh(t, o);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && ((a = t.lastRenderedReducer), a !== null))
            try {
                var s = t.lastRenderedState,
                    i = a(s, n);
                if (((o.hasEagerState = !0), (o.eagerState = i), _t(i, s))) {
                    var l = t.interleaved;
                    l === null ? ((o.next = o), Qu(t)) : ((o.next = l.next), (l.next = o)), (t.interleaved = o);
                    return;
                }
            } catch {
            } finally {
            }
        (n = Ih(e, t, o, r)), n !== null && ((o = Ke()), Dt(n, e, r, o), Gh(n, t, r));
    }
}
function Kh(e) {
    var t = e.alternate;
    return e === ye || (t !== null && t === ye);
}
function Qh(e, t) {
    ta = ni = !0;
    var n = e.pending;
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)), (e.pending = t);
}
function Gh(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        (r &= e.pendingLanes), (n |= r), (t.lanes = n), _u(e, n);
    }
}
var ri = {
        readContext: vt,
        useCallback: Be,
        useContext: Be,
        useEffect: Be,
        useImperativeHandle: Be,
        useInsertionEffect: Be,
        useLayoutEffect: Be,
        useMemo: Be,
        useReducer: Be,
        useRef: Be,
        useState: Be,
        useDebugValue: Be,
        useDeferredValue: Be,
        useTransition: Be,
        useMutableSource: Be,
        useSyncExternalStore: Be,
        useId: Be,
        unstable_isNewReconciler: !1,
    },
    rw = {
        readContext: vt,
        useCallback: function (e, t) {
            return (Ft().memoizedState = [e, t === void 0 ? null : t]), e;
        },
        useContext: vt,
        useEffect: _f,
        useImperativeHandle: function (e, t, n) {
            return (n = n != null ? n.concat([e]) : null), Es(4194308, 4, zh.bind(null, t, e), n);
        },
        useLayoutEffect: function (e, t) {
            return Es(4194308, 4, e, t);
        },
        useInsertionEffect: function (e, t) {
            return Es(4, 2, e, t);
        },
        useMemo: function (e, t) {
            var n = Ft();
            return (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e;
        },
        useReducer: function (e, t, n) {
            var r = Ft();
            return (
                (t = n !== void 0 ? n(t) : t),
                (r.memoizedState = r.baseState = t),
                (e = {
                    pending: null,
                    interleaved: null,
                    lanes: 0,
                    dispatch: null,
                    lastRenderedReducer: e,
                    lastRenderedState: t,
                }),
                (r.queue = e),
                (e = e.dispatch = tw.bind(null, ye, e)),
                [r.memoizedState, e]
            );
        },
        useRef: function (e) {
            var t = Ft();
            return (e = { current: e }), (t.memoizedState = e);
        },
        useState: Df,
        useDebugValue: nd,
        useDeferredValue: function (e) {
            return (Ft().memoizedState = e);
        },
        useTransition: function () {
            var e = Df(!1),
                t = e[0];
            return (e = ew.bind(null, e[1])), (Ft().memoizedState = e), [t, e];
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ye,
                o = Ft();
            if (ve) {
                if (n === void 0) throw Error(O(407));
                n = n();
            } else {
                if (((n = t()), Ae === null)) throw Error(O(349));
                yr & 30 || Dh(r, t, n);
            }
            o.memoizedState = n;
            var a = { value: n, getSnapshot: t };
            return (
                (o.queue = a),
                _f(Mh.bind(null, r, a, e), [e]),
                (r.flags |= 2048),
                Sa(9, _h.bind(null, r, a, n, t), void 0, null),
                n
            );
        },
        useId: function () {
            var e = Ft(),
                t = Ae.identifierPrefix;
            if (ve) {
                var n = nn,
                    r = tn;
                (n = (r & ~(1 << (32 - At(r) - 1))).toString(32) + n),
                    (t = ":" + t + "R" + n),
                    (n = xa++),
                    0 < n && (t += "H" + n.toString(32)),
                    (t += ":");
            } else (n = J2++), (t = ":" + t + "r" + n.toString(32) + ":");
            return (e.memoizedState = t);
        },
        unstable_isNewReconciler: !1,
    },
    ow = {
        readContext: vt,
        useCallback: Uh,
        useContext: vt,
        useEffect: td,
        useImperativeHandle: $h,
        useInsertionEffect: Fh,
        useLayoutEffect: Bh,
        useMemo: Vh,
        useReducer: Rl,
        useRef: Lh,
        useState: function () {
            return Rl(wa);
        },
        useDebugValue: nd,
        useDeferredValue: function (e) {
            var t = gt();
            return Wh(t, Pe.memoizedState, e);
        },
        useTransition: function () {
            var e = Rl(wa)[0],
                t = gt().memoizedState;
            return [e, t];
        },
        useMutableSource: Rh,
        useSyncExternalStore: Ah,
        useId: Hh,
        unstable_isNewReconciler: !1,
    },
    aw = {
        readContext: vt,
        useCallback: Uh,
        useContext: vt,
        useEffect: td,
        useImperativeHandle: $h,
        useInsertionEffect: Fh,
        useLayoutEffect: Bh,
        useMemo: Vh,
        useReducer: Al,
        useRef: Lh,
        useState: function () {
            return Al(wa);
        },
        useDebugValue: nd,
        useDeferredValue: function (e) {
            var t = gt();
            return Pe === null ? (t.memoizedState = e) : Wh(t, Pe.memoizedState, e);
        },
        useTransition: function () {
            var e = Al(wa)[0],
                t = gt().memoizedState;
            return [e, t];
        },
        useMutableSource: Rh,
        useSyncExternalStore: Ah,
        useId: Hh,
        unstable_isNewReconciler: !1,
    };
function Tt(e, t) {
    if (e && e.defaultProps) {
        (t = xe({}, t)), (e = e.defaultProps);
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t;
    }
    return t;
}
function kc(e, t, n, r) {
    (t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : xe({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Ii = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? Tr(e) === e : !1;
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = $n(e),
            a = rn(r, o);
        (a.payload = t), n != null && (a.callback = n), (t = Bn(e, a, o)), t !== null && (Dt(t, e, o, r), Cs(t, e, o));
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals;
        var r = Ke(),
            o = $n(e),
            a = rn(r, o);
        (a.tag = 1),
            (a.payload = t),
            n != null && (a.callback = n),
            (t = Bn(e, a, o)),
            t !== null && (Dt(t, e, o, r), Cs(t, e, o));
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals;
        var n = Ke(),
            r = $n(e),
            o = rn(n, r);
        (o.tag = 2), t != null && (o.callback = t), (t = Bn(e, o, r)), t !== null && (Dt(t, e, r, n), Cs(t, e, r));
    },
};
function Mf(e, t, n, r, o, a, s) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == "function"
            ? e.shouldComponentUpdate(r, a, s)
            : t.prototype && t.prototype.isPureReactComponent
              ? !pa(n, r) || !pa(o, a)
              : !0
    );
}
function Yh(e, t, n) {
    var r = !1,
        o = Wn,
        a = t.contextType;
    return (
        typeof a == "object" && a !== null
            ? (a = vt(a))
            : ((o = Je(t) ? vr : Ue.current), (r = t.contextTypes), (a = (r = r != null) ? mo(e, o) : Wn)),
        (t = new t(n, a)),
        (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = Ii),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = o),
            (e.__reactInternalMemoizedMaskedChildContext = a)),
        t
    );
}
function Of(e, t, n, r) {
    (e = t.state),
        typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && Ii.enqueueReplaceState(t, t.state, null);
}
function Nc(e, t, n, r) {
    var o = e.stateNode;
    (o.props = n), (o.state = e.memoizedState), (o.refs = {}), Gu(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? (o.context = vt(a)) : ((a = Je(t) ? vr : Ue.current), (o.context = mo(e, a))),
        (o.state = e.memoizedState),
        (a = t.getDerivedStateFromProps),
        typeof a == "function" && (kc(e, t, a, n), (o.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == "function" ||
            typeof o.getSnapshotBeforeUpdate == "function" ||
            (typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function") ||
            ((t = o.state),
            typeof o.componentWillMount == "function" && o.componentWillMount(),
            typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount(),
            t !== o.state && Ii.enqueueReplaceState(o, o.state, null),
            ei(e, n, o, r),
            (o.state = e.memoizedState)),
        typeof o.componentDidMount == "function" && (e.flags |= 4194308);
}
function yo(e, t) {
    try {
        var n = "",
            r = t;
        do (n += _0(r)), (r = r.return);
        while (r);
        var o = n;
    } catch (a) {
        o =
            `
Error generating stack: ` +
            a.message +
            `
` +
            a.stack;
    }
    return { value: e, source: t, stack: o, digest: null };
}
function Dl(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Rc(e, t) {
    try {
        console.error(t.value);
    } catch (n) {
        setTimeout(function () {
            throw n;
        });
    }
}
var sw = typeof WeakMap == "function" ? WeakMap : Map;
function Xh(e, t, n) {
    (n = rn(-1, n)), (n.tag = 3), (n.payload = { element: null });
    var r = t.value;
    return (
        (n.callback = function () {
            ai || ((ai = !0), (zc = r)), Rc(e, t);
        }),
        n
    );
}
function qh(e, t, n) {
    (n = rn(-1, n)), (n.tag = 3);
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var o = t.value;
        (n.payload = function () {
            return r(o);
        }),
            (n.callback = function () {
                Rc(e, t);
            });
    }
    var a = e.stateNode;
    return (
        a !== null &&
            typeof a.componentDidCatch == "function" &&
            (n.callback = function () {
                Rc(e, t), typeof r != "function" && (zn === null ? (zn = new Set([this])) : zn.add(this));
                var s = t.stack;
                this.componentDidCatch(t.value, { componentStack: s !== null ? s : "" });
            }),
        n
    );
}
function jf(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new sw();
        var o = new Set();
        r.set(t, o);
    } else (o = r.get(t)), o === void 0 && ((o = new Set()), r.set(t, o));
    o.has(n) || (o.add(n), (e = ww.bind(null, e, t, n)), t.then(e, e));
}
function Lf(e) {
    do {
        var t;
        if (((t = e.tag === 13) && ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)), t)) return e;
        e = e.return;
    } while (e !== null);
    return null;
}
function Ff(e, t, n, r, o) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = o), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 && (n.alternate === null ? (n.tag = 17) : ((t = rn(-1, 1)), (t.tag = 2), Bn(n, t, 1))),
                (n.lanes |= 1)),
          e);
}
var iw = dn.ReactCurrentOwner,
    qe = !1;
function We(e, t, n, r) {
    t.child = e === null ? Ph(t, null, n, r) : vo(t, e.child, n, r);
}
function Bf(e, t, n, r, o) {
    n = n.render;
    var a = t.ref;
    return (
        Jr(t, o),
        (r = Ju(e, t, n, r, a, o)),
        (n = ed()),
        e !== null && !qe
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), ln(e, t, o))
            : (ve && n && $u(t), (t.flags |= 1), We(e, t, r, o), t.child)
    );
}
function zf(e, t, n, r, o) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" &&
            !ud(a) &&
            a.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = a), Zh(e, t, a, r, o))
            : ((e = ks(n.type, null, r, t, t.mode, o)), (e.ref = t.ref), (e.return = t), (t.child = e));
    }
    if (((a = e.child), !(e.lanes & o))) {
        var s = a.memoizedProps;
        if (((n = n.compare), (n = n !== null ? n : pa), n(s, r) && e.ref === t.ref)) return ln(e, t, o);
    }
    return (t.flags |= 1), (e = Un(a, r)), (e.ref = t.ref), (e.return = t), (t.child = e);
}
function Zh(e, t, n, r, o) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (pa(a, r) && e.ref === t.ref)
            if (((qe = !1), (t.pendingProps = r = a), (e.lanes & o) !== 0)) e.flags & 131072 && (qe = !0);
            else return (t.lanes = e.lanes), ln(e, t, o);
    }
    return Ac(e, t, n, r, o);
}
function Jh(e, t, n) {
    var r = t.pendingProps,
        o = r.children,
        a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1))
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }), ue(Gr, tt), (tt |= n);
        else {
            if (!(n & 1073741824))
                return (
                    (e = a !== null ? a.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }),
                    (t.updateQueue = null),
                    ue(Gr, tt),
                    (tt |= e),
                    null
                );
            (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
                (r = a !== null ? a.baseLanes : n),
                ue(Gr, tt),
                (tt |= r);
        }
    else a !== null ? ((r = a.baseLanes | n), (t.memoizedState = null)) : (r = n), ue(Gr, tt), (tt |= r);
    return We(e, t, o, n), t.child;
}
function ev(e, t) {
    var n = t.ref;
    ((e === null && n !== null) || (e !== null && e.ref !== n)) && ((t.flags |= 512), (t.flags |= 2097152));
}
function Ac(e, t, n, r, o) {
    var a = Je(n) ? vr : Ue.current;
    return (
        (a = mo(t, a)),
        Jr(t, o),
        (n = Ju(e, t, n, r, a, o)),
        (r = ed()),
        e !== null && !qe
            ? ((t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~o), ln(e, t, o))
            : (ve && r && $u(t), (t.flags |= 1), We(e, t, n, o), t.child)
    );
}
function $f(e, t, n, r, o) {
    if (Je(n)) {
        var a = !0;
        Ys(t);
    } else a = !1;
    if ((Jr(t, o), t.stateNode === null)) Ts(e, t), Yh(t, n, r), Nc(t, n, r, o), (r = !0);
    else if (e === null) {
        var s = t.stateNode,
            i = t.memoizedProps;
        s.props = i;
        var l = s.context,
            c = n.contextType;
        typeof c == "object" && c !== null ? (c = vt(c)) : ((c = Je(n) ? vr : Ue.current), (c = mo(t, c)));
        var u = n.getDerivedStateFromProps,
            d = typeof u == "function" || typeof s.getSnapshotBeforeUpdate == "function";
        d ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((i !== r || l !== c) && Of(t, s, r, c)),
            (bn = !1);
        var g = t.memoizedState;
        (s.state = g),
            ei(t, r, s, o),
            (l = t.memoizedState),
            i !== r || g !== l || Ze.current || bn
                ? (typeof u == "function" && (kc(t, n, u, r), (l = t.memoizedState)),
                  (i = bn || Mf(t, n, i, r, g, l, c))
                      ? (d ||
                            (typeof s.UNSAFE_componentWillMount != "function" &&
                                typeof s.componentWillMount != "function") ||
                            (typeof s.componentWillMount == "function" && s.componentWillMount(),
                            typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()),
                        typeof s.componentDidMount == "function" && (t.flags |= 4194308))
                      : (typeof s.componentDidMount == "function" && (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = l)),
                  (s.props = r),
                  (s.state = l),
                  (s.context = c),
                  (r = i))
                : (typeof s.componentDidMount == "function" && (t.flags |= 4194308), (r = !1));
    } else {
        (s = t.stateNode),
            kh(e, t),
            (i = t.memoizedProps),
            (c = t.type === t.elementType ? i : Tt(t.type, i)),
            (s.props = c),
            (d = t.pendingProps),
            (g = s.context),
            (l = n.contextType),
            typeof l == "object" && l !== null ? (l = vt(l)) : ((l = Je(n) ? vr : Ue.current), (l = mo(t, l)));
        var p = n.getDerivedStateFromProps;
        (u = typeof p == "function" || typeof s.getSnapshotBeforeUpdate == "function") ||
            (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
                typeof s.componentWillReceiveProps != "function") ||
            ((i !== d || g !== l) && Of(t, s, r, l)),
            (bn = !1),
            (g = t.memoizedState),
            (s.state = g),
            ei(t, r, s, o);
        var C = t.memoizedState;
        i !== d || g !== C || Ze.current || bn
            ? (typeof p == "function" && (kc(t, n, p, r), (C = t.memoizedState)),
              (c = bn || Mf(t, n, c, r, g, C, l) || !1)
                  ? (u ||
                        (typeof s.UNSAFE_componentWillUpdate != "function" &&
                            typeof s.componentWillUpdate != "function") ||
                        (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, C, l),
                        typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, C, l)),
                    typeof s.componentDidUpdate == "function" && (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
                  : (typeof s.componentDidUpdate != "function" ||
                        (i === e.memoizedProps && g === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof s.getSnapshotBeforeUpdate != "function" ||
                        (i === e.memoizedProps && g === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = C)),
              (s.props = r),
              (s.state = C),
              (s.context = l),
              (r = c))
            : (typeof s.componentDidUpdate != "function" ||
                  (i === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 4),
              typeof s.getSnapshotBeforeUpdate != "function" ||
                  (i === e.memoizedProps && g === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1));
    }
    return Dc(e, t, n, r, a, o);
}
function Dc(e, t, n, r, o, a) {
    ev(e, t);
    var s = (t.flags & 128) !== 0;
    if (!r && !s) return o && Pf(t, n, !1), ln(e, t, a);
    (r = t.stateNode), (iw.current = t);
    var i = s && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return (
        (t.flags |= 1),
        e !== null && s ? ((t.child = vo(t, e.child, null, a)), (t.child = vo(t, null, i, a))) : We(e, t, i, a),
        (t.memoizedState = r.state),
        o && Pf(t, n, !0),
        t.child
    );
}
function tv(e) {
    var t = e.stateNode;
    t.pendingContext ? Tf(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Tf(e, t.context, !1),
        Yu(e, t.containerInfo);
}
function Uf(e, t, n, r, o) {
    return ho(), Vu(o), (t.flags |= 256), We(e, t, n, r), t.child;
}
var _c = { dehydrated: null, treeContext: null, retryLane: 0 };
function Mc(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
}
function nv(e, t, n) {
    var r = t.pendingProps,
        o = ge.current,
        a = !1,
        s = (t.flags & 128) !== 0,
        i;
    if (
        ((i = s) || (i = e !== null && e.memoizedState === null ? !1 : (o & 2) !== 0),
        i ? ((a = !0), (t.flags &= -129)) : (e === null || e.memoizedState !== null) && (o |= 1),
        ue(ge, o & 1),
        e === null)
    )
        return (
            Pc(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1 ? (e.data === "$!" ? (t.lanes = 8) : (t.lanes = 1073741824)) : (t.lanes = 1), null)
                : ((s = r.children),
                  (e = r.fallback),
                  a
                      ? ((r = t.mode),
                        (a = t.child),
                        (s = { mode: "hidden", children: s }),
                        !(r & 1) && a !== null ? ((a.childLanes = 0), (a.pendingProps = s)) : (a = Ri(s, r, 0, null)),
                        (e = mr(e, r, n, null)),
                        (a.return = t),
                        (e.return = t),
                        (a.sibling = e),
                        (t.child = a),
                        (t.child.memoizedState = Mc(n)),
                        (t.memoizedState = _c),
                        e)
                      : rd(t, s))
        );
    if (((o = e.memoizedState), o !== null && ((i = o.dehydrated), i !== null))) return lw(e, t, s, r, i, o, n);
    if (a) {
        (a = r.fallback), (s = t.mode), (o = e.child), (i = o.sibling);
        var l = { mode: "hidden", children: r.children };
        return (
            !(s & 1) && t.child !== o
                ? ((r = t.child), (r.childLanes = 0), (r.pendingProps = l), (t.deletions = null))
                : ((r = Un(o, l)), (r.subtreeFlags = o.subtreeFlags & 14680064)),
            i !== null ? (a = Un(i, a)) : ((a = mr(a, s, n, null)), (a.flags |= 2)),
            (a.return = t),
            (r.return = t),
            (r.sibling = a),
            (t.child = r),
            (r = a),
            (a = t.child),
            (s = e.child.memoizedState),
            (s = s === null ? Mc(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }),
            (a.memoizedState = s),
            (a.childLanes = e.childLanes & ~n),
            (t.memoizedState = _c),
            r
        );
    }
    return (
        (a = e.child),
        (e = a.sibling),
        (r = Un(a, { mode: "visible", children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null && ((n = t.deletions), n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    );
}
function rd(e, t) {
    return (t = Ri({ mode: "visible", children: t }, e.mode, 0, null)), (t.return = e), (e.child = t);
}
function rs(e, t, n, r) {
    return (
        r !== null && Vu(r),
        vo(t, e.child, null, n),
        (e = rd(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    );
}
function lw(e, t, n, r, o, a, s) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = Dl(Error(O(422)))), rs(e, t, s, r))
            : t.memoizedState !== null
              ? ((t.child = e.child), (t.flags |= 128), null)
              : ((a = r.fallback),
                (o = t.mode),
                (r = Ri({ mode: "visible", children: r.children }, o, 0, null)),
                (a = mr(a, o, s, null)),
                (a.flags |= 2),
                (r.return = t),
                (a.return = t),
                (r.sibling = a),
                (t.child = r),
                t.mode & 1 && vo(t, e.child, null, s),
                (t.child.memoizedState = Mc(s)),
                (t.memoizedState = _c),
                a);
    if (!(t.mode & 1)) return rs(e, t, s, null);
    if (o.data === "$!") {
        if (((r = o.nextSibling && o.nextSibling.dataset), r)) var i = r.dgst;
        return (r = i), (a = Error(O(419))), (r = Dl(a, r, void 0)), rs(e, t, s, r);
    }
    if (((i = (s & e.childLanes) !== 0), qe || i)) {
        if (((r = Ae), r !== null)) {
            switch (s & -s) {
                case 4:
                    o = 2;
                    break;
                case 16:
                    o = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    o = 32;
                    break;
                case 536870912:
                    o = 268435456;
                    break;
                default:
                    o = 0;
            }
            (o = o & (r.suspendedLanes | s) ? 0 : o),
                o !== 0 && o !== a.retryLane && ((a.retryLane = o), sn(e, o), Dt(r, e, o, -1));
        }
        return cd(), (r = Dl(Error(O(421)))), rs(e, t, s, r);
    }
    return o.data === "$?"
        ? ((t.flags |= 128), (t.child = e.child), (t = Sw.bind(null, e)), (o._reactRetry = t), null)
        : ((e = a.treeContext),
          (rt = Fn(o.nextSibling)),
          (ot = t),
          (ve = !0),
          (Rt = null),
          e !== null && ((ft[pt++] = tn), (ft[pt++] = nn), (ft[pt++] = gr), (tn = e.id), (nn = e.overflow), (gr = t)),
          (t = rd(t, r.children)),
          (t.flags |= 4096),
          t);
}
function Vf(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Ic(e.return, t, n);
}
function _l(e, t, n, r, o) {
    var a = e.memoizedState;
    a === null
        ? (e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: o })
        : ((a.isBackwards = t),
          (a.rendering = null),
          (a.renderingStartTime = 0),
          (a.last = r),
          (a.tail = n),
          (a.tailMode = o));
}
function rv(e, t, n) {
    var r = t.pendingProps,
        o = r.revealOrder,
        a = r.tail;
    if ((We(e, t, r.children, n), (r = ge.current), r & 2)) (r = (r & 1) | 2), (t.flags |= 128);
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && Vf(e, n, t);
                else if (e.tag === 19) Vf(e, n, t);
                else if (e.child !== null) {
                    (e.child.return = e), (e = e.child);
                    continue;
                }
                if (e === t) break e;
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e;
                    e = e.return;
                }
                (e.sibling.return = e.return), (e = e.sibling);
            }
        r &= 1;
    }
    if ((ue(ge, r), !(t.mode & 1))) t.memoizedState = null;
    else
        switch (o) {
            case "forwards":
                for (n = t.child, o = null; n !== null; )
                    (e = n.alternate), e !== null && ti(e) === null && (o = n), (n = n.sibling);
                (n = o),
                    n === null ? ((o = t.child), (t.child = null)) : ((o = n.sibling), (n.sibling = null)),
                    _l(t, !1, o, n, a);
                break;
            case "backwards":
                for (n = null, o = t.child, t.child = null; o !== null; ) {
                    if (((e = o.alternate), e !== null && ti(e) === null)) {
                        t.child = o;
                        break;
                    }
                    (e = o.sibling), (o.sibling = n), (n = o), (o = e);
                }
                _l(t, !0, n, null, a);
                break;
            case "together":
                _l(t, !1, null, null, void 0);
                break;
            default:
                t.memoizedState = null;
        }
    return t.child;
}
function Ts(e, t) {
    !(t.mode & 1) && e !== null && ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function ln(e, t, n) {
    if ((e !== null && (t.dependencies = e.dependencies), (xr |= t.lanes), !(n & t.childLanes))) return null;
    if (e !== null && t.child !== e.child) throw Error(O(153));
    if (t.child !== null) {
        for (e = t.child, n = Un(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
            (e = e.sibling), (n = n.sibling = Un(e, e.pendingProps)), (n.return = t);
        n.sibling = null;
    }
    return t.child;
}
function cw(e, t, n) {
    switch (t.tag) {
        case 3:
            tv(t), ho();
            break;
        case 5:
            Nh(t);
            break;
        case 1:
            Je(t.type) && Ys(t);
            break;
        case 4:
            Yu(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                o = t.memoizedProps.value;
            ue(Zs, r._currentValue), (r._currentValue = o);
            break;
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (ue(ge, ge.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                      ? nv(e, t, n)
                      : (ue(ge, ge.current & 1), (e = ln(e, t, n)), e !== null ? e.sibling : null);
            ue(ge, ge.current & 1);
            break;
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return rv(e, t, n);
                t.flags |= 128;
            }
            if (
                ((o = t.memoizedState),
                o !== null && ((o.rendering = null), (o.tail = null), (o.lastEffect = null)),
                ue(ge, ge.current),
                r)
            )
                break;
            return null;
        case 22:
        case 23:
            return (t.lanes = 0), Jh(e, t, n);
    }
    return ln(e, t, n);
}
var ov, Oc, av, sv;
ov = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            (n.child.return = n), (n = n.child);
            continue;
        }
        if (n === t) break;
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return;
            n = n.return;
        }
        (n.sibling.return = n.return), (n = n.sibling);
    }
};
Oc = function () {};
av = function (e, t, n, r) {
    var o = e.memoizedProps;
    if (o !== r) {
        (e = t.stateNode), sr(Kt.current);
        var a = null;
        switch (n) {
            case "input":
                (o = rc(e, o)), (r = rc(e, r)), (a = []);
                break;
            case "select":
                (o = xe({}, o, { value: void 0 })), (r = xe({}, r, { value: void 0 })), (a = []);
                break;
            case "textarea":
                (o = sc(e, o)), (r = sc(e, r)), (a = []);
                break;
            default:
                typeof o.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Qs);
        }
        lc(n, r);
        var s;
        n = null;
        for (c in o)
            if (!r.hasOwnProperty(c) && o.hasOwnProperty(c) && o[c] != null)
                if (c === "style") {
                    var i = o[c];
                    for (s in i) i.hasOwnProperty(s) && (n || (n = {}), (n[s] = ""));
                } else
                    c !== "dangerouslySetInnerHTML" &&
                        c !== "children" &&
                        c !== "suppressContentEditableWarning" &&
                        c !== "suppressHydrationWarning" &&
                        c !== "autoFocus" &&
                        (sa.hasOwnProperty(c) ? a || (a = []) : (a = a || []).push(c, null));
        for (c in r) {
            var l = r[c];
            if (((i = o != null ? o[c] : void 0), r.hasOwnProperty(c) && l !== i && (l != null || i != null)))
                if (c === "style")
                    if (i) {
                        for (s in i) !i.hasOwnProperty(s) || (l && l.hasOwnProperty(s)) || (n || (n = {}), (n[s] = ""));
                        for (s in l) l.hasOwnProperty(s) && i[s] !== l[s] && (n || (n = {}), (n[s] = l[s]));
                    } else n || (a || (a = []), a.push(c, n)), (n = l);
                else
                    c === "dangerouslySetInnerHTML"
                        ? ((l = l ? l.__html : void 0),
                          (i = i ? i.__html : void 0),
                          l != null && i !== l && (a = a || []).push(c, l))
                        : c === "children"
                          ? (typeof l != "string" && typeof l != "number") || (a = a || []).push(c, "" + l)
                          : c !== "suppressContentEditableWarning" &&
                            c !== "suppressHydrationWarning" &&
                            (sa.hasOwnProperty(c)
                                ? (l != null && c === "onScroll" && pe("scroll", e), a || i === l || (a = []))
                                : (a = a || []).push(c, l));
        }
        n && (a = a || []).push("style", n);
        var c = a;
        (t.updateQueue = c) && (t.flags |= 4);
    }
};
sv = function (e, t, n, r) {
    n !== r && (t.flags |= 4);
};
function zo(e, t) {
    if (!ve)
        switch (e.tailMode) {
            case "hidden":
                t = e.tail;
                for (var n = null; t !== null; ) t.alternate !== null && (n = t), (t = t.sibling);
                n === null ? (e.tail = null) : (n.sibling = null);
                break;
            case "collapsed":
                n = e.tail;
                for (var r = null; n !== null; ) n.alternate !== null && (r = n), (n = n.sibling);
                r === null ? (t || e.tail === null ? (e.tail = null) : (e.tail.sibling = null)) : (r.sibling = null);
        }
}
function ze(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes),
                (r |= o.subtreeFlags & 14680064),
                (r |= o.flags & 14680064),
                (o.return = e),
                (o = o.sibling);
    else
        for (o = e.child; o !== null; )
            (n |= o.lanes | o.childLanes), (r |= o.subtreeFlags), (r |= o.flags), (o.return = e), (o = o.sibling);
    return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function uw(e, t, n) {
    var r = t.pendingProps;
    switch ((Uu(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ze(t), null;
        case 1:
            return Je(t.type) && Gs(), ze(t), null;
        case 3:
            return (
                (r = t.stateNode),
                go(),
                me(Ze),
                me(Ue),
                qu(),
                r.pendingContext && ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (ts(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024), Rt !== null && (Vc(Rt), (Rt = null)))),
                Oc(e, t),
                ze(t),
                null
            );
        case 5:
            Xu(t);
            var o = sr(ya.current);
            if (((n = t.type), e !== null && t.stateNode != null))
                av(e, t, n, r, o), e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(O(166));
                    return ze(t), null;
                }
                if (((e = sr(Kt.current)), ts(t))) {
                    (r = t.stateNode), (n = t.type);
                    var a = t.memoizedProps;
                    switch (((r[Ut] = t), (r[va] = a), (e = (t.mode & 1) !== 0), n)) {
                        case "dialog":
                            pe("cancel", r), pe("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            pe("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (o = 0; o < Qo.length; o++) pe(Qo[o], r);
                            break;
                        case "source":
                            pe("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            pe("error", r), pe("load", r);
                            break;
                        case "details":
                            pe("toggle", r);
                            break;
                        case "input":
                            qd(r, a), pe("invalid", r);
                            break;
                        case "select":
                            (r._wrapperState = { wasMultiple: !!a.multiple }), pe("invalid", r);
                            break;
                        case "textarea":
                            Jd(r, a), pe("invalid", r);
                    }
                    lc(n, a), (o = null);
                    for (var s in a)
                        if (a.hasOwnProperty(s)) {
                            var i = a[s];
                            s === "children"
                                ? typeof i == "string"
                                    ? r.textContent !== i &&
                                      (a.suppressHydrationWarning !== !0 && es(r.textContent, i, e),
                                      (o = ["children", i]))
                                    : typeof i == "number" &&
                                      r.textContent !== "" + i &&
                                      (a.suppressHydrationWarning !== !0 && es(r.textContent, i, e),
                                      (o = ["children", "" + i]))
                                : sa.hasOwnProperty(s) && i != null && s === "onScroll" && pe("scroll", r);
                        }
                    switch (n) {
                        case "input":
                            Ka(r), Zd(r, a, !0);
                            break;
                        case "textarea":
                            Ka(r), ef(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (r.onclick = Qs);
                    }
                    (r = o), (t.updateQueue = r), r !== null && (t.flags |= 4);
                } else {
                    (s = o.nodeType === 9 ? o : o.ownerDocument),
                        e === "http://www.w3.org/1999/xhtml" && (e = Mm(n)),
                        e === "http://www.w3.org/1999/xhtml"
                            ? n === "script"
                                ? ((e = s.createElement("div")),
                                  (e.innerHTML = "<script></script>"),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == "string"
                                  ? (e = s.createElement(n, { is: r.is }))
                                  : ((e = s.createElement(n)),
                                    n === "select" &&
                                        ((s = e), r.multiple ? (s.multiple = !0) : r.size && (s.size = r.size)))
                            : (e = s.createElementNS(e, n)),
                        (e[Ut] = t),
                        (e[va] = r),
                        ov(e, t, !1, !1),
                        (t.stateNode = e);
                    e: {
                        switch (((s = cc(n, r)), n)) {
                            case "dialog":
                                pe("cancel", e), pe("close", e), (o = r);
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                pe("load", e), (o = r);
                                break;
                            case "video":
                            case "audio":
                                for (o = 0; o < Qo.length; o++) pe(Qo[o], e);
                                o = r;
                                break;
                            case "source":
                                pe("error", e), (o = r);
                                break;
                            case "img":
                            case "image":
                            case "link":
                                pe("error", e), pe("load", e), (o = r);
                                break;
                            case "details":
                                pe("toggle", e), (o = r);
                                break;
                            case "input":
                                qd(e, r), (o = rc(e, r)), pe("invalid", e);
                                break;
                            case "option":
                                o = r;
                                break;
                            case "select":
                                (e._wrapperState = { wasMultiple: !!r.multiple }),
                                    (o = xe({}, r, { value: void 0 })),
                                    pe("invalid", e);
                                break;
                            case "textarea":
                                Jd(e, r), (o = sc(e, r)), pe("invalid", e);
                                break;
                            default:
                                o = r;
                        }
                        lc(n, o), (i = o);
                        for (a in i)
                            if (i.hasOwnProperty(a)) {
                                var l = i[a];
                                a === "style"
                                    ? Lm(e, l)
                                    : a === "dangerouslySetInnerHTML"
                                      ? ((l = l ? l.__html : void 0), l != null && Om(e, l))
                                      : a === "children"
                                        ? typeof l == "string"
                                            ? (n !== "textarea" || l !== "") && ia(e, l)
                                            : typeof l == "number" && ia(e, "" + l)
                                        : a !== "suppressContentEditableWarning" &&
                                          a !== "suppressHydrationWarning" &&
                                          a !== "autoFocus" &&
                                          (sa.hasOwnProperty(a)
                                              ? l != null && a === "onScroll" && pe("scroll", e)
                                              : l != null && Iu(e, a, l, s));
                            }
                        switch (n) {
                            case "input":
                                Ka(e), Zd(e, r, !1);
                                break;
                            case "textarea":
                                Ka(e), ef(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Vn(r.value));
                                break;
                            case "select":
                                (e.multiple = !!r.multiple),
                                    (a = r.value),
                                    a != null
                                        ? Yr(e, !!r.multiple, a, !1)
                                        : r.defaultValue != null && Yr(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof o.onClick == "function" && (e.onclick = Qs);
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1;
                        }
                    }
                    r && (t.flags |= 4);
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
            }
            return ze(t), null;
        case 6:
            if (e && t.stateNode != null) sv(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(O(166));
                if (((n = sr(ya.current)), sr(Kt.current), ts(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Ut] = t),
                        (a = r.nodeValue !== n) && ((e = ot), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                es(r.nodeValue, n, (e.mode & 1) !== 0);
                                break;
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !== !0 &&
                                    es(r.nodeValue, n, (e.mode & 1) !== 0);
                        }
                    a && (t.flags |= 4);
                } else (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)), (r[Ut] = t), (t.stateNode = r);
            }
            return ze(t), null;
        case 13:
            if (
                (me(ge),
                (r = t.memoizedState),
                e === null || (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
            ) {
                if (ve && rt !== null && t.mode & 1 && !(t.flags & 128)) Eh(), ho(), (t.flags |= 98560), (a = !1);
                else if (((a = ts(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!a) throw Error(O(318));
                        if (((a = t.memoizedState), (a = a !== null ? a.dehydrated : null), !a)) throw Error(O(317));
                        a[Ut] = t;
                    } else ho(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
                    ze(t), (a = !1);
                } else Rt !== null && (Vc(Rt), (Rt = null)), (a = !0);
                if (!a) return t.flags & 65536 ? t : null;
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 && (e === null || ge.current & 1 ? Ie === 0 && (Ie = 3) : cd())),
                  t.updateQueue !== null && (t.flags |= 4),
                  ze(t),
                  null);
        case 4:
            return go(), Oc(e, t), e === null && ma(t.stateNode.containerInfo), ze(t), null;
        case 10:
            return Ku(t.type._context), ze(t), null;
        case 17:
            return Je(t.type) && Gs(), ze(t), null;
        case 19:
            if ((me(ge), (a = t.memoizedState), a === null)) return ze(t), null;
            if (((r = (t.flags & 128) !== 0), (s = a.rendering), s === null))
                if (r) zo(a, !1);
                else {
                    if (Ie !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((s = ti(e)), s !== null)) {
                                for (
                                    t.flags |= 128,
                                        zo(a, !1),
                                        r = s.updateQueue,
                                        r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (a = n),
                                        (e = r),
                                        (a.flags &= 14680066),
                                        (s = a.alternate),
                                        s === null
                                            ? ((a.childLanes = 0),
                                              (a.lanes = e),
                                              (a.child = null),
                                              (a.subtreeFlags = 0),
                                              (a.memoizedProps = null),
                                              (a.memoizedState = null),
                                              (a.updateQueue = null),
                                              (a.dependencies = null),
                                              (a.stateNode = null))
                                            : ((a.childLanes = s.childLanes),
                                              (a.lanes = s.lanes),
                                              (a.child = s.child),
                                              (a.subtreeFlags = 0),
                                              (a.deletions = null),
                                              (a.memoizedProps = s.memoizedProps),
                                              (a.memoizedState = s.memoizedState),
                                              (a.updateQueue = s.updateQueue),
                                              (a.type = s.type),
                                              (e = s.dependencies),
                                              (a.dependencies =
                                                  e === null
                                                      ? null
                                                      : { lanes: e.lanes, firstContext: e.firstContext })),
                                        (n = n.sibling);
                                return ue(ge, (ge.current & 1) | 2), t.child;
                            }
                            e = e.sibling;
                        }
                    a.tail !== null && Ee() > xo && ((t.flags |= 128), (r = !0), zo(a, !1), (t.lanes = 4194304));
                }
            else {
                if (!r)
                    if (((e = ti(s)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            zo(a, !0),
                            a.tail === null && a.tailMode === "hidden" && !s.alternate && !ve)
                        )
                            return ze(t), null;
                    } else
                        2 * Ee() - a.renderingStartTime > xo &&
                            n !== 1073741824 &&
                            ((t.flags |= 128), (r = !0), zo(a, !1), (t.lanes = 4194304));
                a.isBackwards
                    ? ((s.sibling = t.child), (t.child = s))
                    : ((n = a.last), n !== null ? (n.sibling = s) : (t.child = s), (a.last = s));
            }
            return a.tail !== null
                ? ((t = a.tail),
                  (a.rendering = t),
                  (a.tail = t.sibling),
                  (a.renderingStartTime = Ee()),
                  (t.sibling = null),
                  (n = ge.current),
                  ue(ge, r ? (n & 1) | 2 : n & 1),
                  t)
                : (ze(t), null);
        case 22:
        case 23:
            return (
                ld(),
                (r = t.memoizedState !== null),
                e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
                r && t.mode & 1 ? tt & 1073741824 && (ze(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ze(t),
                null
            );
        case 24:
            return null;
        case 25:
            return null;
    }
    throw Error(O(156, t.tag));
}
function dw(e, t) {
    switch ((Uu(t), t.tag)) {
        case 1:
            return Je(t.type) && Gs(), (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 3:
            return (
                go(),
                me(Ze),
                me(Ue),
                qu(),
                (e = t.flags),
                e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
            );
        case 5:
            return Xu(t), null;
        case 13:
            if ((me(ge), (e = t.memoizedState), e !== null && e.dehydrated !== null)) {
                if (t.alternate === null) throw Error(O(340));
                ho();
            }
            return (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null;
        case 19:
            return me(ge), null;
        case 4:
            return go(), null;
        case 10:
            return Ku(t.type._context), null;
        case 22:
        case 23:
            return ld(), null;
        case 24:
            return null;
        default:
            return null;
    }
}
var os = !1,
    $e = !1,
    fw = typeof WeakSet == "function" ? WeakSet : Set,
    $ = null;
function Qr(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function")
            try {
                n(null);
            } catch (r) {
                be(e, t, r);
            }
        else n.current = null;
}
function jc(e, t, n) {
    try {
        n();
    } catch (r) {
        be(e, t, r);
    }
}
var Wf = !1;
function pw(e, t) {
    if (((xc = Ws), (e = dh()), zu(e))) {
        if ("selectionStart" in e) var n = { start: e.selectionStart, end: e.selectionEnd };
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window;
                var r = n.getSelection && n.getSelection();
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode;
                    var o = r.anchorOffset,
                        a = r.focusNode;
                    r = r.focusOffset;
                    try {
                        n.nodeType, a.nodeType;
                    } catch {
                        n = null;
                        break e;
                    }
                    var s = 0,
                        i = -1,
                        l = -1,
                        c = 0,
                        u = 0,
                        d = e,
                        g = null;
                    t: for (;;) {
                        for (
                            var p;
                            d !== n || (o !== 0 && d.nodeType !== 3) || (i = s + o),
                                d !== a || (r !== 0 && d.nodeType !== 3) || (l = s + r),
                                d.nodeType === 3 && (s += d.nodeValue.length),
                                (p = d.firstChild) !== null;

                        )
                            (g = d), (d = p);
                        for (;;) {
                            if (d === e) break t;
                            if (
                                (g === n && ++c === o && (i = s),
                                g === a && ++u === r && (l = s),
                                (p = d.nextSibling) !== null)
                            )
                                break;
                            (d = g), (g = d.parentNode);
                        }
                        d = p;
                    }
                    n = i === -1 || l === -1 ? null : { start: i, end: l };
                } else n = null;
            }
        n = n || { start: 0, end: 0 };
    } else n = null;
    for (wc = { focusedElem: e, selectionRange: n }, Ws = !1, $ = t; $ !== null; )
        if (((t = $), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null)) (e.return = t), ($ = e);
        else
            for (; $ !== null; ) {
                t = $;
                try {
                    var C = t.alternate;
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break;
                            case 1:
                                if (C !== null) {
                                    var h = C.memoizedProps,
                                        w = C.memoizedState,
                                        v = t.stateNode,
                                        m = v.getSnapshotBeforeUpdate(t.elementType === t.type ? h : Tt(t.type, h), w);
                                    v.__reactInternalSnapshotBeforeUpdate = m;
                                }
                                break;
                            case 3:
                                var y = t.stateNode.containerInfo;
                                y.nodeType === 1
                                    ? (y.textContent = "")
                                    : y.nodeType === 9 && y.documentElement && y.removeChild(y.documentElement);
                                break;
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break;
                            default:
                                throw Error(O(163));
                        }
                } catch (S) {
                    be(t, t.return, S);
                }
                if (((e = t.sibling), e !== null)) {
                    (e.return = t.return), ($ = e);
                    break;
                }
                $ = t.return;
            }
    return (C = Wf), (Wf = !1), C;
}
function na(e, t, n) {
    var r = t.updateQueue;
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var o = (r = r.next);
        do {
            if ((o.tag & e) === e) {
                var a = o.destroy;
                (o.destroy = void 0), a !== void 0 && jc(t, n, a);
            }
            o = o.next;
        } while (o !== r);
    }
}
function ki(e, t) {
    if (((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)) {
        var n = (t = t.next);
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r();
            }
            n = n.next;
        } while (n !== t);
    }
}
function Lc(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n;
        }
        typeof t == "function" ? t(e) : (t.current = e);
    }
}
function iv(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), iv(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode), t !== null && (delete t[Ut], delete t[va], delete t[bc], delete t[Y2], delete t[X2])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null);
}
function lv(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Hf(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || lv(e.return)) return null;
            e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            (e.child.return = e), (e = e.child);
        }
        if (!(e.flags & 2)) return e.stateNode;
    }
}
function Fc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8 ? ((t = n.parentNode), t.insertBefore(e, n)) : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Qs));
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Fc(e, t, n), e = e.sibling; e !== null; ) Fc(e, t, n), (e = e.sibling);
}
function Bc(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Bc(e, t, n), e = e.sibling; e !== null; ) Bc(e, t, n), (e = e.sibling);
}
var De = null,
    Nt = !1;
function gn(e, t, n) {
    for (n = n.child; n !== null; ) cv(e, t, n), (n = n.sibling);
}
function cv(e, t, n) {
    if (Ht && typeof Ht.onCommitFiberUnmount == "function")
        try {
            Ht.onCommitFiberUnmount(wi, n);
        } catch {}
    switch (n.tag) {
        case 5:
            $e || Qr(n, t);
        case 6:
            var r = De,
                o = Nt;
            (De = null),
                gn(e, t, n),
                (De = r),
                (Nt = o),
                De !== null &&
                    (Nt
                        ? ((e = De),
                          (n = n.stateNode),
                          e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
                        : De.removeChild(n.stateNode));
            break;
        case 18:
            De !== null &&
                (Nt
                    ? ((e = De),
                      (n = n.stateNode),
                      e.nodeType === 8 ? Pl(e.parentNode, n) : e.nodeType === 1 && Pl(e, n),
                      da(e))
                    : Pl(De, n.stateNode));
            break;
        case 4:
            (r = De), (o = Nt), (De = n.stateNode.containerInfo), (Nt = !0), gn(e, t, n), (De = r), (Nt = o);
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!$e && ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))) {
                o = r = r.next;
                do {
                    var a = o,
                        s = a.destroy;
                    (a = a.tag), s !== void 0 && (a & 2 || a & 4) && jc(n, t, s), (o = o.next);
                } while (o !== r);
            }
            gn(e, t, n);
            break;
        case 1:
            if (!$e && (Qr(n, t), (r = n.stateNode), typeof r.componentWillUnmount == "function"))
                try {
                    (r.props = n.memoizedProps), (r.state = n.memoizedState), r.componentWillUnmount();
                } catch (i) {
                    be(n, t, i);
                }
            gn(e, t, n);
            break;
        case 21:
            gn(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (($e = (r = $e) || n.memoizedState !== null), gn(e, t, n), ($e = r)) : gn(e, t, n);
            break;
        default:
            gn(e, t, n);
    }
}
function Kf(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new fw()),
            t.forEach(function (r) {
                var o = Cw.bind(null, e, r);
                n.has(r) || (n.add(r), r.then(o, o));
            });
    }
}
function Ct(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var o = n[r];
            try {
                var a = e,
                    s = t,
                    i = s;
                e: for (; i !== null; ) {
                    switch (i.tag) {
                        case 5:
                            (De = i.stateNode), (Nt = !1);
                            break e;
                        case 3:
                            (De = i.stateNode.containerInfo), (Nt = !0);
                            break e;
                        case 4:
                            (De = i.stateNode.containerInfo), (Nt = !0);
                            break e;
                    }
                    i = i.return;
                }
                if (De === null) throw Error(O(160));
                cv(a, s, o), (De = null), (Nt = !1);
                var l = o.alternate;
                l !== null && (l.return = null), (o.return = null);
            } catch (c) {
                be(o, t, c);
            }
        }
    if (t.subtreeFlags & 12854) for (t = t.child; t !== null; ) uv(t, e), (t = t.sibling);
}
function uv(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((Ct(t, e), jt(e), r & 4)) {
                try {
                    na(3, e, e.return), ki(3, e);
                } catch (h) {
                    be(e, e.return, h);
                }
                try {
                    na(5, e, e.return);
                } catch (h) {
                    be(e, e.return, h);
                }
            }
            break;
        case 1:
            Ct(t, e), jt(e), r & 512 && n !== null && Qr(n, n.return);
            break;
        case 5:
            if ((Ct(t, e), jt(e), r & 512 && n !== null && Qr(n, n.return), e.flags & 32)) {
                var o = e.stateNode;
                try {
                    ia(o, "");
                } catch (h) {
                    be(e, e.return, h);
                }
            }
            if (r & 4 && ((o = e.stateNode), o != null)) {
                var a = e.memoizedProps,
                    s = n !== null ? n.memoizedProps : a,
                    i = e.type,
                    l = e.updateQueue;
                if (((e.updateQueue = null), l !== null))
                    try {
                        i === "input" && a.type === "radio" && a.name != null && Dm(o, a), cc(i, s);
                        var c = cc(i, a);
                        for (s = 0; s < l.length; s += 2) {
                            var u = l[s],
                                d = l[s + 1];
                            u === "style"
                                ? Lm(o, d)
                                : u === "dangerouslySetInnerHTML"
                                  ? Om(o, d)
                                  : u === "children"
                                    ? ia(o, d)
                                    : Iu(o, u, d, c);
                        }
                        switch (i) {
                            case "input":
                                oc(o, a);
                                break;
                            case "textarea":
                                _m(o, a);
                                break;
                            case "select":
                                var g = o._wrapperState.wasMultiple;
                                o._wrapperState.wasMultiple = !!a.multiple;
                                var p = a.value;
                                p != null
                                    ? Yr(o, !!a.multiple, p, !1)
                                    : g !== !!a.multiple &&
                                      (a.defaultValue != null
                                          ? Yr(o, !!a.multiple, a.defaultValue, !0)
                                          : Yr(o, !!a.multiple, a.multiple ? [] : "", !1));
                        }
                        o[va] = a;
                    } catch (h) {
                        be(e, e.return, h);
                    }
            }
            break;
        case 6:
            if ((Ct(t, e), jt(e), r & 4)) {
                if (e.stateNode === null) throw Error(O(162));
                (o = e.stateNode), (a = e.memoizedProps);
                try {
                    o.nodeValue = a;
                } catch (h) {
                    be(e, e.return, h);
                }
            }
            break;
        case 3:
            if ((Ct(t, e), jt(e), r & 4 && n !== null && n.memoizedState.isDehydrated))
                try {
                    da(t.containerInfo);
                } catch (h) {
                    be(e, e.return, h);
                }
            break;
        case 4:
            Ct(t, e), jt(e);
            break;
        case 13:
            Ct(t, e),
                jt(e),
                (o = e.child),
                o.flags & 8192 &&
                    ((a = o.memoizedState !== null),
                    (o.stateNode.isHidden = a),
                    !a || (o.alternate !== null && o.alternate.memoizedState !== null) || (sd = Ee())),
                r & 4 && Kf(e);
            break;
        case 22:
            if (
                ((u = n !== null && n.memoizedState !== null),
                e.mode & 1 ? (($e = (c = $e) || u), Ct(t, e), ($e = c)) : Ct(t, e),
                jt(e),
                r & 8192)
            ) {
                if (((c = e.memoizedState !== null), (e.stateNode.isHidden = c) && !u && e.mode & 1))
                    for ($ = e, u = e.child; u !== null; ) {
                        for (d = $ = u; $ !== null; ) {
                            switch (((g = $), (p = g.child), g.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    na(4, g, g.return);
                                    break;
                                case 1:
                                    Qr(g, g.return);
                                    var C = g.stateNode;
                                    if (typeof C.componentWillUnmount == "function") {
                                        (r = g), (n = g.return);
                                        try {
                                            (t = r),
                                                (C.props = t.memoizedProps),
                                                (C.state = t.memoizedState),
                                                C.componentWillUnmount();
                                        } catch (h) {
                                            be(r, n, h);
                                        }
                                    }
                                    break;
                                case 5:
                                    Qr(g, g.return);
                                    break;
                                case 22:
                                    if (g.memoizedState !== null) {
                                        Gf(d);
                                        continue;
                                    }
                            }
                            p !== null ? ((p.return = g), ($ = p)) : Gf(d);
                        }
                        u = u.sibling;
                    }
                e: for (u = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (u === null) {
                            u = d;
                            try {
                                (o = d.stateNode),
                                    c
                                        ? ((a = o.style),
                                          typeof a.setProperty == "function"
                                              ? a.setProperty("display", "none", "important")
                                              : (a.display = "none"))
                                        : ((i = d.stateNode),
                                          (l = d.memoizedProps.style),
                                          (s = l != null && l.hasOwnProperty("display") ? l.display : null),
                                          (i.style.display = jm("display", s)));
                            } catch (h) {
                                be(e, e.return, h);
                            }
                        }
                    } else if (d.tag === 6) {
                        if (u === null)
                            try {
                                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
                            } catch (h) {
                                be(e, e.return, h);
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) || d.memoizedState === null || d === e) &&
                        d.child !== null
                    ) {
                        (d.child.return = d), (d = d.child);
                        continue;
                    }
                    if (d === e) break e;
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e;
                        u === d && (u = null), (d = d.return);
                    }
                    u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
                }
            }
            break;
        case 19:
            Ct(t, e), jt(e), r & 4 && Kf(e);
            break;
        case 21:
            break;
        default:
            Ct(t, e), jt(e);
    }
}
function jt(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (lv(n)) {
                        var r = n;
                        break e;
                    }
                    n = n.return;
                }
                throw Error(O(160));
            }
            switch (r.tag) {
                case 5:
                    var o = r.stateNode;
                    r.flags & 32 && (ia(o, ""), (r.flags &= -33));
                    var a = Hf(e);
                    Bc(e, a, o);
                    break;
                case 3:
                case 4:
                    var s = r.stateNode.containerInfo,
                        i = Hf(e);
                    Fc(e, i, s);
                    break;
                default:
                    throw Error(O(161));
            }
        } catch (l) {
            be(e, e.return, l);
        }
        e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
}
function mw(e, t, n) {
    ($ = e), dv(e);
}
function dv(e, t, n) {
    for (var r = (e.mode & 1) !== 0; $ !== null; ) {
        var o = $,
            a = o.child;
        if (o.tag === 22 && r) {
            var s = o.memoizedState !== null || os;
            if (!s) {
                var i = o.alternate,
                    l = (i !== null && i.memoizedState !== null) || $e;
                i = os;
                var c = $e;
                if (((os = s), ($e = l) && !c))
                    for ($ = o; $ !== null; )
                        (s = $),
                            (l = s.child),
                            s.tag === 22 && s.memoizedState !== null
                                ? Yf(o)
                                : l !== null
                                  ? ((l.return = s), ($ = l))
                                  : Yf(o);
                for (; a !== null; ) ($ = a), dv(a), (a = a.sibling);
                ($ = o), (os = i), ($e = c);
            }
            Qf(e);
        } else o.subtreeFlags & 8772 && a !== null ? ((a.return = o), ($ = a)) : Qf(e);
    }
}
function Qf(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            $e || ki(5, t);
                            break;
                        case 1:
                            var r = t.stateNode;
                            if (t.flags & 4 && !$e)
                                if (n === null) r.componentDidMount();
                                else {
                                    var o = t.elementType === t.type ? n.memoizedProps : Tt(t.type, n.memoizedProps);
                                    r.componentDidUpdate(o, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                                }
                            var a = t.updateQueue;
                            a !== null && Af(t, a, r);
                            break;
                        case 3:
                            var s = t.updateQueue;
                            if (s !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode;
                                            break;
                                        case 1:
                                            n = t.child.stateNode;
                                    }
                                Af(t, s, n);
                            }
                            break;
                        case 5:
                            var i = t.stateNode;
                            if (n === null && t.flags & 4) {
                                n = i;
                                var l = t.memoizedProps;
                                switch (t.type) {
                                    case "button":
                                    case "input":
                                    case "select":
                                    case "textarea":
                                        l.autoFocus && n.focus();
                                        break;
                                    case "img":
                                        l.src && (n.src = l.src);
                                }
                            }
                            break;
                        case 6:
                            break;
                        case 4:
                            break;
                        case 12:
                            break;
                        case 13:
                            if (t.memoizedState === null) {
                                var c = t.alternate;
                                if (c !== null) {
                                    var u = c.memoizedState;
                                    if (u !== null) {
                                        var d = u.dehydrated;
                                        d !== null && da(d);
                                    }
                                }
                            }
                            break;
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break;
                        default:
                            throw Error(O(163));
                    }
                $e || (t.flags & 512 && Lc(t));
            } catch (g) {
                be(t, t.return, g);
            }
        }
        if (t === e) {
            $ = null;
            break;
        }
        if (((n = t.sibling), n !== null)) {
            (n.return = t.return), ($ = n);
            break;
        }
        $ = t.return;
    }
}
function Gf(e) {
    for (; $ !== null; ) {
        var t = $;
        if (t === e) {
            $ = null;
            break;
        }
        var n = t.sibling;
        if (n !== null) {
            (n.return = t.return), ($ = n);
            break;
        }
        $ = t.return;
    }
}
function Yf(e) {
    for (; $ !== null; ) {
        var t = $;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ki(4, t);
                    } catch (l) {
                        be(t, n, l);
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var o = t.return;
                        try {
                            r.componentDidMount();
                        } catch (l) {
                            be(t, o, l);
                        }
                    }
                    var a = t.return;
                    try {
                        Lc(t);
                    } catch (l) {
                        be(t, a, l);
                    }
                    break;
                case 5:
                    var s = t.return;
                    try {
                        Lc(t);
                    } catch (l) {
                        be(t, s, l);
                    }
            }
        } catch (l) {
            be(t, t.return, l);
        }
        if (t === e) {
            $ = null;
            break;
        }
        var i = t.sibling;
        if (i !== null) {
            (i.return = t.return), ($ = i);
            break;
        }
        $ = t.return;
    }
}
var hw = Math.ceil,
    oi = dn.ReactCurrentDispatcher,
    od = dn.ReactCurrentOwner,
    ht = dn.ReactCurrentBatchConfig,
    ne = 0,
    Ae = null,
    Te = null,
    _e = 0,
    tt = 0,
    Gr = Gn(0),
    Ie = 0,
    Ca = null,
    xr = 0,
    Ni = 0,
    ad = 0,
    ra = null,
    Xe = null,
    sd = 0,
    xo = 1 / 0,
    Zt = null,
    ai = !1,
    zc = null,
    zn = null,
    as = !1,
    _n = null,
    si = 0,
    oa = 0,
    $c = null,
    Ps = -1,
    Is = 0;
function Ke() {
    return ne & 6 ? Ee() : Ps !== -1 ? Ps : (Ps = Ee());
}
function $n(e) {
    return e.mode & 1
        ? ne & 2 && _e !== 0
            ? _e & -_e
            : Z2.transition !== null
              ? (Is === 0 && (Is = Ym()), Is)
              : ((e = ie), e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : nh(e.type))), e)
        : 1;
}
function Dt(e, t, n, r) {
    if (50 < oa) throw ((oa = 0), ($c = null), Error(O(185)));
    Ma(e, n, r),
        (!(ne & 2) || e !== Ae) &&
            (e === Ae && (!(ne & 2) && (Ni |= n), Ie === 4 && Tn(e, _e)),
            et(e, r),
            n === 1 && ne === 0 && !(t.mode & 1) && ((xo = Ee() + 500), Ti && Yn()));
}
function et(e, t) {
    var n = e.callbackNode;
    Z0(e, t);
    var r = Vs(e, e === Ae ? _e : 0);
    if (r === 0) n !== null && rf(n), (e.callbackNode = null), (e.callbackPriority = 0);
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && rf(n), t === 1))
            e.tag === 0 ? q2(Xf.bind(null, e)) : Sh(Xf.bind(null, e)),
                Q2(function () {
                    !(ne & 6) && Yn();
                }),
                (n = null);
        else {
            switch (Xm(r)) {
                case 1:
                    n = Du;
                    break;
                case 4:
                    n = Qm;
                    break;
                case 16:
                    n = Us;
                    break;
                case 536870912:
                    n = Gm;
                    break;
                default:
                    n = Us;
            }
            n = xv(n, fv.bind(null, e));
        }
        (e.callbackPriority = t), (e.callbackNode = n);
    }
}
function fv(e, t) {
    if (((Ps = -1), (Is = 0), ne & 6)) throw Error(O(327));
    var n = e.callbackNode;
    if (eo() && e.callbackNode !== n) return null;
    var r = Vs(e, e === Ae ? _e : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ii(e, r);
    else {
        t = r;
        var o = ne;
        ne |= 2;
        var a = mv();
        (Ae !== e || _e !== t) && ((Zt = null), (xo = Ee() + 500), pr(e, t));
        do
            try {
                yw();
                break;
            } catch (i) {
                pv(e, i);
            }
        while (!0);
        Hu(), (oi.current = a), (ne = o), Te !== null ? (t = 0) : ((Ae = null), (_e = 0), (t = Ie));
    }
    if (t !== 0) {
        if ((t === 2 && ((o = mc(e)), o !== 0 && ((r = o), (t = Uc(e, o)))), t === 1))
            throw ((n = Ca), pr(e, 0), Tn(e, r), et(e, Ee()), n);
        if (t === 6) Tn(e, r);
        else {
            if (
                ((o = e.current.alternate),
                !(r & 30) &&
                    !vw(o) &&
                    ((t = ii(e, r)), t === 2 && ((a = mc(e)), a !== 0 && ((r = a), (t = Uc(e, a)))), t === 1))
            )
                throw ((n = Ca), pr(e, 0), Tn(e, r), et(e, Ee()), n);
            switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(O(345));
                case 2:
                    rr(e, Xe, Zt);
                    break;
                case 3:
                    if ((Tn(e, r), (r & 130023424) === r && ((t = sd + 500 - Ee()), 10 < t))) {
                        if (Vs(e, 0) !== 0) break;
                        if (((o = e.suspendedLanes), (o & r) !== r)) {
                            Ke(), (e.pingedLanes |= e.suspendedLanes & o);
                            break;
                        }
                        e.timeoutHandle = Cc(rr.bind(null, e, Xe, Zt), t);
                        break;
                    }
                    rr(e, Xe, Zt);
                    break;
                case 4:
                    if ((Tn(e, r), (r & 4194240) === r)) break;
                    for (t = e.eventTimes, o = -1; 0 < r; ) {
                        var s = 31 - At(r);
                        (a = 1 << s), (s = t[s]), s > o && (o = s), (r &= ~a);
                    }
                    if (
                        ((r = o),
                        (r = Ee() - r),
                        (r =
                            (120 > r
                                ? 120
                                : 480 > r
                                  ? 480
                                  : 1080 > r
                                    ? 1080
                                    : 1920 > r
                                      ? 1920
                                      : 3e3 > r
                                        ? 3e3
                                        : 4320 > r
                                          ? 4320
                                          : 1960 * hw(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = Cc(rr.bind(null, e, Xe, Zt), r);
                        break;
                    }
                    rr(e, Xe, Zt);
                    break;
                case 5:
                    rr(e, Xe, Zt);
                    break;
                default:
                    throw Error(O(329));
            }
        }
    }
    return et(e, Ee()), e.callbackNode === n ? fv.bind(null, e) : null;
}
function Uc(e, t) {
    var n = ra;
    return (
        e.current.memoizedState.isDehydrated && (pr(e, t).flags |= 256),
        (e = ii(e, t)),
        e !== 2 && ((t = Xe), (Xe = n), t !== null && Vc(t)),
        e
    );
}
function Vc(e) {
    Xe === null ? (Xe = e) : Xe.push.apply(Xe, e);
}
function vw(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var o = n[r],
                        a = o.getSnapshot;
                    o = o.value;
                    try {
                        if (!_t(a(), o)) return !1;
                    } catch {
                        return !1;
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null)) (n.return = t), (t = n);
        else {
            if (t === e) break;
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0;
                t = t.return;
            }
            (t.sibling.return = t.return), (t = t.sibling);
        }
    }
    return !0;
}
function Tn(e, t) {
    for (t &= ~ad, t &= ~Ni, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
        var n = 31 - At(t),
            r = 1 << n;
        (e[n] = -1), (t &= ~r);
    }
}
function Xf(e) {
    if (ne & 6) throw Error(O(327));
    eo();
    var t = Vs(e, 0);
    if (!(t & 1)) return et(e, Ee()), null;
    var n = ii(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = mc(e);
        r !== 0 && ((t = r), (n = Uc(e, r)));
    }
    if (n === 1) throw ((n = Ca), pr(e, 0), Tn(e, t), et(e, Ee()), n);
    if (n === 6) throw Error(O(345));
    return (e.finishedWork = e.current.alternate), (e.finishedLanes = t), rr(e, Xe, Zt), et(e, Ee()), null;
}
function id(e, t) {
    var n = ne;
    ne |= 1;
    try {
        return e(t);
    } finally {
        (ne = n), ne === 0 && ((xo = Ee() + 500), Ti && Yn());
    }
}
function wr(e) {
    _n !== null && _n.tag === 0 && !(ne & 6) && eo();
    var t = ne;
    ne |= 1;
    var n = ht.transition,
        r = ie;
    try {
        if (((ht.transition = null), (ie = 1), e)) return e();
    } finally {
        (ie = r), (ht.transition = n), (ne = t), !(ne & 6) && Yn();
    }
}
function ld() {
    (tt = Gr.current), me(Gr);
}
function pr(e, t) {
    (e.finishedWork = null), (e.finishedLanes = 0);
    var n = e.timeoutHandle;
    if ((n !== -1 && ((e.timeoutHandle = -1), K2(n)), Te !== null))
        for (n = Te.return; n !== null; ) {
            var r = n;
            switch ((Uu(r), r.tag)) {
                case 1:
                    (r = r.type.childContextTypes), r != null && Gs();
                    break;
                case 3:
                    go(), me(Ze), me(Ue), qu();
                    break;
                case 5:
                    Xu(r);
                    break;
                case 4:
                    go();
                    break;
                case 13:
                    me(ge);
                    break;
                case 19:
                    me(ge);
                    break;
                case 10:
                    Ku(r.type._context);
                    break;
                case 22:
                case 23:
                    ld();
            }
            n = n.return;
        }
    if (
        ((Ae = e),
        (Te = e = Un(e.current, null)),
        (_e = tt = t),
        (Ie = 0),
        (Ca = null),
        (ad = Ni = xr = 0),
        (Xe = ra = null),
        ar !== null)
    ) {
        for (t = 0; t < ar.length; t++)
            if (((n = ar[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null;
                var o = r.next,
                    a = n.pending;
                if (a !== null) {
                    var s = a.next;
                    (a.next = o), (r.next = s);
                }
                n.pending = r;
            }
        ar = null;
    }
    return e;
}
function pv(e, t) {
    do {
        var n = Te;
        try {
            if ((Hu(), (bs.current = ri), ni)) {
                for (var r = ye.memoizedState; r !== null; ) {
                    var o = r.queue;
                    o !== null && (o.pending = null), (r = r.next);
                }
                ni = !1;
            }
            if (
                ((yr = 0),
                (Re = Pe = ye = null),
                (ta = !1),
                (xa = 0),
                (od.current = null),
                n === null || n.return === null)
            ) {
                (Ie = 1), (Ca = t), (Te = null);
                break;
            }
            e: {
                var a = e,
                    s = n.return,
                    i = n,
                    l = t;
                if (((t = _e), (i.flags |= 32768), l !== null && typeof l == "object" && typeof l.then == "function")) {
                    var c = l,
                        u = i,
                        d = u.tag;
                    if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var g = u.alternate;
                        g
                            ? ((u.updateQueue = g.updateQueue),
                              (u.memoizedState = g.memoizedState),
                              (u.lanes = g.lanes))
                            : ((u.updateQueue = null), (u.memoizedState = null));
                    }
                    var p = Lf(s);
                    if (p !== null) {
                        (p.flags &= -257), Ff(p, s, i, a, t), p.mode & 1 && jf(a, c, t), (t = p), (l = c);
                        var C = t.updateQueue;
                        if (C === null) {
                            var h = new Set();
                            h.add(l), (t.updateQueue = h);
                        } else C.add(l);
                        break e;
                    } else {
                        if (!(t & 1)) {
                            jf(a, c, t), cd();
                            break e;
                        }
                        l = Error(O(426));
                    }
                } else if (ve && i.mode & 1) {
                    var w = Lf(s);
                    if (w !== null) {
                        !(w.flags & 65536) && (w.flags |= 256), Ff(w, s, i, a, t), Vu(yo(l, i));
                        break e;
                    }
                }
                (a = l = yo(l, i)), Ie !== 4 && (Ie = 2), ra === null ? (ra = [a]) : ra.push(a), (a = s);
                do {
                    switch (a.tag) {
                        case 3:
                            (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                            var v = Xh(a, l, t);
                            Rf(a, v);
                            break e;
                        case 1:
                            i = l;
                            var m = a.type,
                                y = a.stateNode;
                            if (
                                !(a.flags & 128) &&
                                (typeof m.getDerivedStateFromError == "function" ||
                                    (y !== null &&
                                        typeof y.componentDidCatch == "function" &&
                                        (zn === null || !zn.has(y))))
                            ) {
                                (a.flags |= 65536), (t &= -t), (a.lanes |= t);
                                var S = qh(a, i, t);
                                Rf(a, S);
                                break e;
                            }
                    }
                    a = a.return;
                } while (a !== null);
            }
            vv(n);
        } catch (b) {
            (t = b), Te === n && n !== null && (Te = n = n.return);
            continue;
        }
        break;
    } while (!0);
}
function mv() {
    var e = oi.current;
    return (oi.current = ri), e === null ? ri : e;
}
function cd() {
    (Ie === 0 || Ie === 3 || Ie === 2) && (Ie = 4),
        Ae === null || (!(xr & 268435455) && !(Ni & 268435455)) || Tn(Ae, _e);
}
function ii(e, t) {
    var n = ne;
    ne |= 2;
    var r = mv();
    (Ae !== e || _e !== t) && ((Zt = null), pr(e, t));
    do
        try {
            gw();
            break;
        } catch (o) {
            pv(e, o);
        }
    while (!0);
    if ((Hu(), (ne = n), (oi.current = r), Te !== null)) throw Error(O(261));
    return (Ae = null), (_e = 0), Ie;
}
function gw() {
    for (; Te !== null; ) hv(Te);
}
function yw() {
    for (; Te !== null && !V0(); ) hv(Te);
}
function hv(e) {
    var t = yv(e.alternate, e, tt);
    (e.memoizedProps = e.pendingProps), t === null ? vv(e) : (Te = t), (od.current = null);
}
function vv(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (((e = t.return), t.flags & 32768)) {
            if (((n = dw(n, t)), n !== null)) {
                (n.flags &= 32767), (Te = n);
                return;
            }
            if (e !== null) (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
            else {
                (Ie = 6), (Te = null);
                return;
            }
        } else if (((n = uw(n, t, tt)), n !== null)) {
            Te = n;
            return;
        }
        if (((t = t.sibling), t !== null)) {
            Te = t;
            return;
        }
        Te = t = e;
    } while (t !== null);
    Ie === 0 && (Ie = 5);
}
function rr(e, t, n) {
    var r = ie,
        o = ht.transition;
    try {
        (ht.transition = null), (ie = 1), xw(e, t, n, r);
    } finally {
        (ht.transition = o), (ie = r);
    }
    return null;
}
function xw(e, t, n, r) {
    do eo();
    while (_n !== null);
    if (ne & 6) throw Error(O(327));
    n = e.finishedWork;
    var o = e.finishedLanes;
    if (n === null) return null;
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)) throw Error(O(177));
    (e.callbackNode = null), (e.callbackPriority = 0);
    var a = n.lanes | n.childLanes;
    if (
        (J0(e, a),
        e === Ae && ((Te = Ae = null), (_e = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            as ||
            ((as = !0),
            xv(Us, function () {
                return eo(), null;
            })),
        (a = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || a)
    ) {
        (a = ht.transition), (ht.transition = null);
        var s = ie;
        ie = 1;
        var i = ne;
        (ne |= 4),
            (od.current = null),
            pw(e, n),
            uv(n, e),
            B2(wc),
            (Ws = !!xc),
            (wc = xc = null),
            (e.current = n),
            mw(n),
            W0(),
            (ne = i),
            (ie = s),
            (ht.transition = a);
    } else e.current = n;
    if (
        (as && ((as = !1), (_n = e), (si = o)),
        (a = e.pendingLanes),
        a === 0 && (zn = null),
        Q0(n.stateNode),
        et(e, Ee()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (o = t[n]), r(o.value, { componentStack: o.stack, digest: o.digest });
    if (ai) throw ((ai = !1), (e = zc), (zc = null), e);
    return (
        si & 1 && e.tag !== 0 && eo(),
        (a = e.pendingLanes),
        a & 1 ? (e === $c ? oa++ : ((oa = 0), ($c = e))) : (oa = 0),
        Yn(),
        null
    );
}
function eo() {
    if (_n !== null) {
        var e = Xm(si),
            t = ht.transition,
            n = ie;
        try {
            if (((ht.transition = null), (ie = 16 > e ? 16 : e), _n === null)) var r = !1;
            else {
                if (((e = _n), (_n = null), (si = 0), ne & 6)) throw Error(O(331));
                var o = ne;
                for (ne |= 4, $ = e.current; $ !== null; ) {
                    var a = $,
                        s = a.child;
                    if ($.flags & 16) {
                        var i = a.deletions;
                        if (i !== null) {
                            for (var l = 0; l < i.length; l++) {
                                var c = i[l];
                                for ($ = c; $ !== null; ) {
                                    var u = $;
                                    switch (u.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            na(8, u, a);
                                    }
                                    var d = u.child;
                                    if (d !== null) (d.return = u), ($ = d);
                                    else
                                        for (; $ !== null; ) {
                                            u = $;
                                            var g = u.sibling,
                                                p = u.return;
                                            if ((iv(u), u === c)) {
                                                $ = null;
                                                break;
                                            }
                                            if (g !== null) {
                                                (g.return = p), ($ = g);
                                                break;
                                            }
                                            $ = p;
                                        }
                                }
                            }
                            var C = a.alternate;
                            if (C !== null) {
                                var h = C.child;
                                if (h !== null) {
                                    C.child = null;
                                    do {
                                        var w = h.sibling;
                                        (h.sibling = null), (h = w);
                                    } while (h !== null);
                                }
                            }
                            $ = a;
                        }
                    }
                    if (a.subtreeFlags & 2064 && s !== null) (s.return = a), ($ = s);
                    else
                        e: for (; $ !== null; ) {
                            if (((a = $), a.flags & 2048))
                                switch (a.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        na(9, a, a.return);
                                }
                            var v = a.sibling;
                            if (v !== null) {
                                (v.return = a.return), ($ = v);
                                break e;
                            }
                            $ = a.return;
                        }
                }
                var m = e.current;
                for ($ = m; $ !== null; ) {
                    s = $;
                    var y = s.child;
                    if (s.subtreeFlags & 2064 && y !== null) (y.return = s), ($ = y);
                    else
                        e: for (s = m; $ !== null; ) {
                            if (((i = $), i.flags & 2048))
                                try {
                                    switch (i.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            ki(9, i);
                                    }
                                } catch (b) {
                                    be(i, i.return, b);
                                }
                            if (i === s) {
                                $ = null;
                                break e;
                            }
                            var S = i.sibling;
                            if (S !== null) {
                                (S.return = i.return), ($ = S);
                                break e;
                            }
                            $ = i.return;
                        }
                }
                if (((ne = o), Yn(), Ht && typeof Ht.onPostCommitFiberRoot == "function"))
                    try {
                        Ht.onPostCommitFiberRoot(wi, e);
                    } catch {}
                r = !0;
            }
            return r;
        } finally {
            (ie = n), (ht.transition = t);
        }
    }
    return !1;
}
function qf(e, t, n) {
    (t = yo(n, t)), (t = Xh(e, t, 1)), (e = Bn(e, t, 1)), (t = Ke()), e !== null && (Ma(e, 1, t), et(e, t));
}
function be(e, t, n) {
    if (e.tag === 3) qf(e, e, n);
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                qf(t, e, n);
                break;
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (
                    typeof t.type.getDerivedStateFromError == "function" ||
                    (typeof r.componentDidCatch == "function" && (zn === null || !zn.has(r)))
                ) {
                    (e = yo(n, e)),
                        (e = qh(t, e, 1)),
                        (t = Bn(t, e, 1)),
                        (e = Ke()),
                        t !== null && (Ma(t, 1, e), et(t, e));
                    break;
                }
            }
            t = t.return;
        }
}
function ww(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t),
        (t = Ke()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Ae === e &&
            (_e & n) === n &&
            (Ie === 4 || (Ie === 3 && (_e & 130023424) === _e && 500 > Ee() - sd) ? pr(e, 0) : (ad |= n)),
        et(e, t);
}
function gv(e, t) {
    t === 0 && (e.mode & 1 ? ((t = Ya), (Ya <<= 1), !(Ya & 130023424) && (Ya = 4194304)) : (t = 1));
    var n = Ke();
    (e = sn(e, t)), e !== null && (Ma(e, t, n), et(e, n));
}
function Sw(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), gv(e, n);
}
function Cw(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                o = e.memoizedState;
            o !== null && (n = o.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(O(314));
    }
    r !== null && r.delete(t), gv(e, n);
}
var yv;
yv = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Ze.current) qe = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return (qe = !1), cw(e, t, n);
            qe = !!(e.flags & 131072);
        }
    else (qe = !1), ve && t.flags & 1048576 && Ch(t, qs, t.index);
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type;
            Ts(e, t), (e = t.pendingProps);
            var o = mo(t, Ue.current);
            Jr(t, n), (o = Ju(null, t, r, e, o, n));
            var a = ed();
            return (
                (t.flags |= 1),
                typeof o == "object" && o !== null && typeof o.render == "function" && o.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Je(r) ? ((a = !0), Ys(t)) : (a = !1),
                      (t.memoizedState = o.state !== null && o.state !== void 0 ? o.state : null),
                      Gu(t),
                      (o.updater = Ii),
                      (t.stateNode = o),
                      (o._reactInternals = t),
                      Nc(t, r, e, n),
                      (t = Dc(null, t, r, !0, a, n)))
                    : ((t.tag = 0), ve && a && $u(t), We(null, t, o, n), (t = t.child)),
                t
            );
        case 16:
            r = t.elementType;
            e: {
                switch (
                    (Ts(e, t),
                    (e = t.pendingProps),
                    (o = r._init),
                    (r = o(r._payload)),
                    (t.type = r),
                    (o = t.tag = Ew(r)),
                    (e = Tt(r, e)),
                    o)
                ) {
                    case 0:
                        t = Ac(null, t, r, e, n);
                        break e;
                    case 1:
                        t = $f(null, t, r, e, n);
                        break e;
                    case 11:
                        t = Bf(null, t, r, e, n);
                        break e;
                    case 14:
                        t = zf(null, t, r, Tt(r.type, e), n);
                        break e;
                }
                throw Error(O(306, r, ""));
            }
            return t;
        case 0:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Tt(r, o)), Ac(e, t, r, o, n);
        case 1:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Tt(r, o)), $f(e, t, r, o, n);
        case 3:
            e: {
                if ((tv(t), e === null)) throw Error(O(387));
                (r = t.pendingProps), (a = t.memoizedState), (o = a.element), kh(e, t), ei(t, r, null, n);
                var s = t.memoizedState;
                if (((r = s.element), a.isDehydrated))
                    if (
                        ((a = {
                            element: r,
                            isDehydrated: !1,
                            cache: s.cache,
                            pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
                            transitions: s.transitions,
                        }),
                        (t.updateQueue.baseState = a),
                        (t.memoizedState = a),
                        t.flags & 256)
                    ) {
                        (o = yo(Error(O(423)), t)), (t = Uf(e, t, r, n, o));
                        break e;
                    } else if (r !== o) {
                        (o = yo(Error(O(424)), t)), (t = Uf(e, t, r, n, o));
                        break e;
                    } else
                        for (
                            rt = Fn(t.stateNode.containerInfo.firstChild),
                                ot = t,
                                ve = !0,
                                Rt = null,
                                n = Ph(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
                else {
                    if ((ho(), r === o)) {
                        t = ln(e, t, n);
                        break e;
                    }
                    We(e, t, r, n);
                }
                t = t.child;
            }
            return t;
        case 5:
            return (
                Nh(t),
                e === null && Pc(t),
                (r = t.type),
                (o = t.pendingProps),
                (a = e !== null ? e.memoizedProps : null),
                (s = o.children),
                Sc(r, o) ? (s = null) : a !== null && Sc(r, a) && (t.flags |= 32),
                ev(e, t),
                We(e, t, s, n),
                t.child
            );
        case 6:
            return e === null && Pc(t), null;
        case 13:
            return nv(e, t, n);
        case 4:
            return (
                Yu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = vo(t, null, r, n)) : We(e, t, r, n),
                t.child
            );
        case 11:
            return (r = t.type), (o = t.pendingProps), (o = t.elementType === r ? o : Tt(r, o)), Bf(e, t, r, o, n);
        case 7:
            return We(e, t, t.pendingProps, n), t.child;
        case 8:
            return We(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return We(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (o = t.pendingProps),
                    (a = t.memoizedProps),
                    (s = o.value),
                    ue(Zs, r._currentValue),
                    (r._currentValue = s),
                    a !== null)
                )
                    if (_t(a.value, s)) {
                        if (a.children === o.children && !Ze.current) {
                            t = ln(e, t, n);
                            break e;
                        }
                    } else
                        for (a = t.child, a !== null && (a.return = t); a !== null; ) {
                            var i = a.dependencies;
                            if (i !== null) {
                                s = a.child;
                                for (var l = i.firstContext; l !== null; ) {
                                    if (l.context === r) {
                                        if (a.tag === 1) {
                                            (l = rn(-1, n & -n)), (l.tag = 2);
                                            var c = a.updateQueue;
                                            if (c !== null) {
                                                c = c.shared;
                                                var u = c.pending;
                                                u === null ? (l.next = l) : ((l.next = u.next), (u.next = l)),
                                                    (c.pending = l);
                                            }
                                        }
                                        (a.lanes |= n),
                                            (l = a.alternate),
                                            l !== null && (l.lanes |= n),
                                            Ic(a.return, n, t),
                                            (i.lanes |= n);
                                        break;
                                    }
                                    l = l.next;
                                }
                            } else if (a.tag === 10) s = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (((s = a.return), s === null)) throw Error(O(341));
                                (s.lanes |= n),
                                    (i = s.alternate),
                                    i !== null && (i.lanes |= n),
                                    Ic(s, n, t),
                                    (s = a.sibling);
                            } else s = a.child;
                            if (s !== null) s.return = a;
                            else
                                for (s = a; s !== null; ) {
                                    if (s === t) {
                                        s = null;
                                        break;
                                    }
                                    if (((a = s.sibling), a !== null)) {
                                        (a.return = s.return), (s = a);
                                        break;
                                    }
                                    s = s.return;
                                }
                            a = s;
                        }
                We(e, t, o.children, n), (t = t.child);
            }
            return t;
        case 9:
            return (
                (o = t.type),
                (r = t.pendingProps.children),
                Jr(t, n),
                (o = vt(o)),
                (r = r(o)),
                (t.flags |= 1),
                We(e, t, r, n),
                t.child
            );
        case 14:
            return (r = t.type), (o = Tt(r, t.pendingProps)), (o = Tt(r.type, o)), zf(e, t, r, o, n);
        case 15:
            return Zh(e, t, t.type, t.pendingProps, n);
        case 17:
            return (
                (r = t.type),
                (o = t.pendingProps),
                (o = t.elementType === r ? o : Tt(r, o)),
                Ts(e, t),
                (t.tag = 1),
                Je(r) ? ((e = !0), Ys(t)) : (e = !1),
                Jr(t, n),
                Yh(t, r, o),
                Nc(t, r, o, n),
                Dc(null, t, r, !0, e, n)
            );
        case 19:
            return rv(e, t, n);
        case 22:
            return Jh(e, t, n);
    }
    throw Error(O(156, t.tag));
};
function xv(e, t) {
    return Km(e, t);
}
function bw(e, t, n, r) {
    (this.tag = e),
        (this.key = n),
        (this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null);
}
function mt(e, t, n, r) {
    return new bw(e, t, n, r);
}
function ud(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
}
function Ew(e) {
    if (typeof e == "function") return ud(e) ? 1 : 0;
    if (e != null) {
        if (((e = e.$$typeof), e === Nu)) return 11;
        if (e === Ru) return 14;
    }
    return 2;
}
function Un(e, t) {
    var n = e.alternate;
    return (
        n === null
            ? ((n = mt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t), (n.type = e.type), (n.flags = 0), (n.subtreeFlags = 0), (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    );
}
function ks(e, t, n, r, o, a) {
    var s = 2;
    if (((r = e), typeof e == "function")) ud(e) && (s = 1);
    else if (typeof e == "string") s = 5;
    else
        e: switch (e) {
            case Fr:
                return mr(n.children, o, a, t);
            case ku:
                (s = 8), (o |= 8);
                break;
            case Jl:
                return (e = mt(12, n, t, o | 2)), (e.elementType = Jl), (e.lanes = a), e;
            case ec:
                return (e = mt(13, n, t, o)), (e.elementType = ec), (e.lanes = a), e;
            case tc:
                return (e = mt(19, n, t, o)), (e.elementType = tc), (e.lanes = a), e;
            case Nm:
                return Ri(n, o, a, t);
            default:
                if (typeof e == "object" && e !== null)
                    switch (e.$$typeof) {
                        case Im:
                            s = 10;
                            break e;
                        case km:
                            s = 9;
                            break e;
                        case Nu:
                            s = 11;
                            break e;
                        case Ru:
                            s = 14;
                            break e;
                        case Cn:
                            (s = 16), (r = null);
                            break e;
                    }
                throw Error(O(130, e == null ? e : typeof e, ""));
        }
    return (t = mt(s, n, t, o)), (t.elementType = e), (t.type = r), (t.lanes = a), t;
}
function mr(e, t, n, r) {
    return (e = mt(7, e, r, t)), (e.lanes = n), e;
}
function Ri(e, t, n, r) {
    return (e = mt(22, e, r, t)), (e.elementType = Nm), (e.lanes = n), (e.stateNode = { isHidden: !1 }), e;
}
function Ml(e, t, n) {
    return (e = mt(6, e, null, t)), (e.lanes = n), e;
}
function Ol(e, t, n) {
    return (
        (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }),
        t
    );
}
function Tw(e, t, n, r, o) {
    (this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork = this.pingCache = this.current = this.pendingChildren = null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = hl(0)),
        (this.expirationTimes = hl(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = hl(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null);
}
function dd(e, t, n, r, o, a, s, i, l) {
    return (
        (e = new Tw(e, t, n, i, l)),
        t === 1 ? ((t = 1), a === !0 && (t |= 8)) : (t = 0),
        (a = mt(3, null, null, t)),
        (e.current = a),
        (a.stateNode = e),
        (a.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        Gu(a),
        e
    );
}
function Pw(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: Lr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
}
function wv(e) {
    if (!e) return Wn;
    e = e._reactInternals;
    e: {
        if (Tr(e) !== e || e.tag !== 1) throw Error(O(170));
        var t = e;
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Je(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e;
                    }
            }
            t = t.return;
        } while (t !== null);
        throw Error(O(171));
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Je(n)) return wh(e, n, t);
    }
    return t;
}
function Sv(e, t, n, r, o, a, s, i, l) {
    return (
        (e = dd(n, r, !0, e, o, a, s, i, l)),
        (e.context = wv(null)),
        (n = e.current),
        (r = Ke()),
        (o = $n(n)),
        (a = rn(r, o)),
        (a.callback = t ?? null),
        Bn(n, a, o),
        (e.current.lanes = o),
        Ma(e, o, r),
        et(e, r),
        e
    );
}
function Ai(e, t, n, r) {
    var o = t.current,
        a = Ke(),
        s = $n(o);
    return (
        (n = wv(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = rn(a, s)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = Bn(o, t, s)),
        e !== null && (Dt(e, o, s, a), Cs(e, o, s)),
        s
    );
}
function li(e) {
    if (((e = e.current), !e.child)) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode;
    }
}
function Zf(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t;
    }
}
function fd(e, t) {
    Zf(e, t), (e = e.alternate) && Zf(e, t);
}
function Iw() {
    return null;
}
var Cv =
    typeof reportError == "function"
        ? reportError
        : function (e) {
              console.error(e);
          };
function pd(e) {
    this._internalRoot = e;
}
Di.prototype.render = pd.prototype.render = function (e) {
    var t = this._internalRoot;
    if (t === null) throw Error(O(409));
    Ai(e, t, null, null);
};
Di.prototype.unmount = pd.prototype.unmount = function () {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        wr(function () {
            Ai(null, e, null, null);
        }),
            (t[an] = null);
    }
};
function Di(e) {
    this._internalRoot = e;
}
Di.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Jm();
        e = { blockedOn: null, target: e, priority: t };
        for (var n = 0; n < En.length && t !== 0 && t < En[n].priority; n++);
        En.splice(n, 0, e), n === 0 && th(e);
    }
};
function md(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function _i(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
    );
}
function Jf() {}
function kw(e, t, n, r, o) {
    if (o) {
        if (typeof r == "function") {
            var a = r;
            r = function () {
                var c = li(s);
                a.call(c);
            };
        }
        var s = Sv(t, r, e, 0, null, !1, !1, "", Jf);
        return (e._reactRootContainer = s), (e[an] = s.current), ma(e.nodeType === 8 ? e.parentNode : e), wr(), s;
    }
    for (; (o = e.lastChild); ) e.removeChild(o);
    if (typeof r == "function") {
        var i = r;
        r = function () {
            var c = li(l);
            i.call(c);
        };
    }
    var l = dd(e, 0, !1, null, null, !1, !1, "", Jf);
    return (
        (e._reactRootContainer = l),
        (e[an] = l.current),
        ma(e.nodeType === 8 ? e.parentNode : e),
        wr(function () {
            Ai(t, l, n, r);
        }),
        l
    );
}
function Mi(e, t, n, r, o) {
    var a = n._reactRootContainer;
    if (a) {
        var s = a;
        if (typeof o == "function") {
            var i = o;
            o = function () {
                var l = li(s);
                i.call(l);
            };
        }
        Ai(t, s, e, o);
    } else s = kw(n, t, e, o, r);
    return li(s);
}
qm = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = Ko(t.pendingLanes);
                n !== 0 && (_u(t, n | 1), et(t, Ee()), !(ne & 6) && ((xo = Ee() + 500), Yn()));
            }
            break;
        case 13:
            wr(function () {
                var r = sn(e, 1);
                if (r !== null) {
                    var o = Ke();
                    Dt(r, e, 1, o);
                }
            }),
                fd(e, 1);
    }
};
Mu = function (e) {
    if (e.tag === 13) {
        var t = sn(e, 134217728);
        if (t !== null) {
            var n = Ke();
            Dt(t, e, 134217728, n);
        }
        fd(e, 134217728);
    }
};
Zm = function (e) {
    if (e.tag === 13) {
        var t = $n(e),
            n = sn(e, t);
        if (n !== null) {
            var r = Ke();
            Dt(n, e, t, r);
        }
        fd(e, t);
    }
};
Jm = function () {
    return ie;
};
eh = function (e, t) {
    var n = ie;
    try {
        return (ie = e), t();
    } finally {
        ie = n;
    }
};
dc = function (e, t, n) {
    switch (t) {
        case "input":
            if ((oc(e, n), (t = n.name), n.type === "radio" && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode;
                for (
                    n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var o = Ei(r);
                        if (!o) throw Error(O(90));
                        Am(r), oc(r, o);
                    }
                }
            }
            break;
        case "textarea":
            _m(e, n);
            break;
        case "select":
            (t = n.value), t != null && Yr(e, !!n.multiple, t, !1);
    }
};
zm = id;
$m = wr;
var Nw = { usingClientEntryPoint: !1, Events: [ja, Ur, Ei, Fm, Bm, id] },
    $o = { findFiberByHostInstance: or, bundleType: 0, version: "18.3.1", rendererPackageName: "react-dom" },
    Rw = {
        bundleType: $o.bundleType,
        version: $o.version,
        rendererPackageName: $o.rendererPackageName,
        rendererConfig: $o.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: dn.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Wm(e)), e === null ? null : e.stateNode;
        },
        findFiberByHostInstance: $o.findFiberByHostInstance || Iw,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ss = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ss.isDisabled && ss.supportsFiber)
        try {
            (wi = ss.inject(Rw)), (Ht = ss);
        } catch {}
}
it.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nw;
it.createPortal = function (e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!md(t)) throw Error(O(200));
    return Pw(e, t, null, n);
};
it.createRoot = function (e, t) {
    if (!md(e)) throw Error(O(299));
    var n = !1,
        r = "",
        o = Cv;
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (o = t.onRecoverableError)),
        (t = dd(e, 1, !1, null, null, n, !1, r, o)),
        (e[an] = t.current),
        ma(e.nodeType === 8 ? e.parentNode : e),
        new pd(t)
    );
};
it.findDOMNode = function (e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0)
        throw typeof e.render == "function" ? Error(O(188)) : ((e = Object.keys(e).join(",")), Error(O(268, e)));
    return (e = Wm(t)), (e = e === null ? null : e.stateNode), e;
};
it.flushSync = function (e) {
    return wr(e);
};
it.hydrate = function (e, t, n) {
    if (!_i(t)) throw Error(O(200));
    return Mi(null, e, t, !0, n);
};
it.hydrateRoot = function (e, t, n) {
    if (!md(e)) throw Error(O(405));
    var r = (n != null && n.hydratedSources) || null,
        o = !1,
        a = "",
        s = Cv;
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (o = !0),
            n.identifierPrefix !== void 0 && (a = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (s = n.onRecoverableError)),
        (t = Sv(t, null, e, 1, n ?? null, o, !1, a, s)),
        (e[an] = t.current),
        ma(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (o = n._getVersion),
                (o = o(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, o])
                    : t.mutableSourceEagerHydrationData.push(n, o);
    return new Di(t);
};
it.render = function (e, t, n) {
    if (!_i(t)) throw Error(O(200));
    return Mi(null, e, t, !1, n);
};
it.unmountComponentAtNode = function (e) {
    if (!_i(e)) throw Error(O(40));
    return e._reactRootContainer
        ? (wr(function () {
              Mi(null, null, e, !1, function () {
                  (e._reactRootContainer = null), (e[an] = null);
              });
          }),
          !0)
        : !1;
};
it.unstable_batchedUpdates = id;
it.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!_i(n)) throw Error(O(200));
    if (e == null || e._reactInternals === void 0) throw Error(O(38));
    return Mi(e, t, n, !1, r);
};
it.version = "18.3.1-next-f1338f8080-20240426";
function bv() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(bv);
        } catch (e) {
            console.error(e);
        }
}
bv(), (bm.exports = it);
var Pr = bm.exports;
const Ev = dm(Pr);
var Tv,
    ep = Pr;
(Tv = ep.createRoot), ep.hydrateRoot;
const Aw = 1,
    Dw = 1e6;
let jl = 0;
function _w() {
    return (jl = (jl + 1) % Number.MAX_SAFE_INTEGER), jl.toString();
}
const Ll = new Map(),
    tp = (e) => {
        if (Ll.has(e)) return;
        const t = setTimeout(() => {
            Ll.delete(e), aa({ type: "REMOVE_TOAST", toastId: e });
        }, Dw);
        Ll.set(e, t);
    },
    Mw = (e, t) => {
        switch (t.type) {
            case "ADD_TOAST":
                return { ...e, toasts: [t.toast, ...e.toasts].slice(0, Aw) };
            case "UPDATE_TOAST":
                return { ...e, toasts: e.toasts.map((n) => (n.id === t.toast.id ? { ...n, ...t.toast } : n)) };
            case "DISMISS_TOAST": {
                const { toastId: n } = t;
                return (
                    n
                        ? tp(n)
                        : e.toasts.forEach((r) => {
                              tp(r.id);
                          }),
                    { ...e, toasts: e.toasts.map((r) => (r.id === n || n === void 0 ? { ...r, open: !1 } : r)) }
                );
            }
            case "REMOVE_TOAST":
                return t.toastId === void 0
                    ? { ...e, toasts: [] }
                    : { ...e, toasts: e.toasts.filter((n) => n.id !== t.toastId) };
        }
    },
    Ns = [];
let Rs = { toasts: [] };
function aa(e) {
    (Rs = Mw(Rs, e)),
        Ns.forEach((t) => {
            t(Rs);
        });
}
function Ow({ ...e }) {
    const t = _w(),
        n = (o) => aa({ type: "UPDATE_TOAST", toast: { ...o, id: t } }),
        r = () => aa({ type: "DISMISS_TOAST", toastId: t });
    return (
        aa({
            type: "ADD_TOAST",
            toast: {
                ...e,
                id: t,
                open: !0,
                onOpenChange: (o) => {
                    o || r();
                },
            },
        }),
        { id: t, dismiss: r, update: n }
    );
}
function Pv() {
    const [e, t] = f.useState(Rs);
    return (
        f.useEffect(
            () => (
                Ns.push(t),
                () => {
                    const n = Ns.indexOf(t);
                    n > -1 && Ns.splice(n, 1);
                }
            ),
            [e]
        ),
        { ...e, toast: Ow, dismiss: (n) => aa({ type: "DISMISS_TOAST", toastId: n }) }
    );
}
function H(e, t, { checkForDefaultPrevented: n = !0 } = {}) {
    return function (o) {
        if ((e == null || e(o), n === !1 || !o.defaultPrevented)) return t == null ? void 0 : t(o);
    };
}
function np(e, t) {
    if (typeof e == "function") return e(t);
    e != null && (e.current = t);
}
function Iv(...e) {
    return (t) => {
        let n = !1;
        const r = e.map((o) => {
            const a = np(o, t);
            return !n && typeof a == "function" && (n = !0), a;
        });
        if (n)
            return () => {
                for (let o = 0; o < r.length; o++) {
                    const a = r[o];
                    typeof a == "function" ? a() : np(e[o], null);
                }
            };
    };
}
function le(...e) {
    return f.useCallback(Iv(...e), e);
}
function fn(e, t = []) {
    let n = [];
    function r(a, s) {
        const i = f.createContext(s),
            l = n.length;
        n = [...n, s];
        const c = (d) => {
            var v;
            const { scope: g, children: p, ...C } = d,
                h = ((v = g == null ? void 0 : g[e]) == null ? void 0 : v[l]) || i,
                w = f.useMemo(() => C, Object.values(C));
            return x.jsx(h.Provider, { value: w, children: p });
        };
        c.displayName = a + "Provider";
        function u(d, g) {
            var h;
            const p = ((h = g == null ? void 0 : g[e]) == null ? void 0 : h[l]) || i,
                C = f.useContext(p);
            if (C) return C;
            if (s !== void 0) return s;
            throw new Error(`\`${d}\` must be used within \`${a}\``);
        }
        return [c, u];
    }
    const o = () => {
        const a = n.map((s) => f.createContext(s));
        return function (i) {
            const l = (i == null ? void 0 : i[e]) || a;
            return f.useMemo(() => ({ [`__scope${e}`]: { ...i, [e]: l } }), [i, l]);
        };
    };
    return (o.scopeName = e), [r, jw(o, ...t)];
}
function jw(...e) {
    const t = e[0];
    if (e.length === 1) return t;
    const n = () => {
        const r = e.map((o) => ({ useScope: o(), scopeName: o.scopeName }));
        return function (a) {
            const s = r.reduce((i, { useScope: l, scopeName: c }) => {
                const d = l(a)[`__scope${c}`];
                return { ...i, ...d };
            }, {});
            return f.useMemo(() => ({ [`__scope${t.scopeName}`]: s }), [s]);
        };
    };
    return (n.scopeName = t.scopeName), n;
}
function ba(e) {
    const t = Fw(e),
        n = f.forwardRef((r, o) => {
            const { children: a, ...s } = r,
                i = f.Children.toArray(a),
                l = i.find(zw);
            if (l) {
                const c = l.props.children,
                    u = i.map((d) =>
                        d === l
                            ? f.Children.count(c) > 1
                                ? f.Children.only(null)
                                : f.isValidElement(c)
                                  ? c.props.children
                                  : null
                            : d
                    );
                return x.jsx(t, { ...s, ref: o, children: f.isValidElement(c) ? f.cloneElement(c, void 0, u) : null });
            }
            return x.jsx(t, { ...s, ref: o, children: a });
        });
    return (n.displayName = `${e}.Slot`), n;
}
var Lw = ba("Slot");
function Fw(e) {
    const t = f.forwardRef((n, r) => {
        const { children: o, ...a } = n;
        if (f.isValidElement(o)) {
            const s = Uw(o),
                i = $w(a, o.props);
            return o.type !== f.Fragment && (i.ref = r ? Iv(r, s) : s), f.cloneElement(o, i);
        }
        return f.Children.count(o) > 1 ? f.Children.only(null) : null;
    });
    return (t.displayName = `${e}.SlotClone`), t;
}
var kv = Symbol("radix.slottable");
function Bw(e) {
    const t = ({ children: n }) => x.jsx(x.Fragment, { children: n });
    return (t.displayName = `${e}.Slottable`), (t.__radixId = kv), t;
}
function zw(e) {
    return f.isValidElement(e) && typeof e.type == "function" && "__radixId" in e.type && e.type.__radixId === kv;
}
function $w(e, t) {
    const n = { ...t };
    for (const r in t) {
        const o = e[r],
            a = t[r];
        /^on[A-Z]/.test(r)
            ? o && a
                ? (n[r] = (...i) => {
                      const l = a(...i);
                      return o(...i), l;
                  })
                : o && (n[r] = o)
            : r === "style"
              ? (n[r] = { ...o, ...a })
              : r === "className" && (n[r] = [o, a].filter(Boolean).join(" "));
    }
    return { ...e, ...n };
}
function Uw(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
function Oi(e) {
    const t = e + "CollectionProvider",
        [n, r] = fn(t),
        [o, a] = n(t, { collectionRef: { current: null }, itemMap: new Map() }),
        s = (h) => {
            const { scope: w, children: v } = h,
                m = j.useRef(null),
                y = j.useRef(new Map()).current;
            return x.jsx(o, { scope: w, itemMap: y, collectionRef: m, children: v });
        };
    s.displayName = t;
    const i = e + "CollectionSlot",
        l = ba(i),
        c = j.forwardRef((h, w) => {
            const { scope: v, children: m } = h,
                y = a(i, v),
                S = le(w, y.collectionRef);
            return x.jsx(l, { ref: S, children: m });
        });
    c.displayName = i;
    const u = e + "CollectionItemSlot",
        d = "data-radix-collection-item",
        g = ba(u),
        p = j.forwardRef((h, w) => {
            const { scope: v, children: m, ...y } = h,
                S = j.useRef(null),
                b = le(w, S),
                I = a(u, v);
            return (
                j.useEffect(() => (I.itemMap.set(S, { ref: S, ...y }), () => void I.itemMap.delete(S))),
                x.jsx(g, { [d]: "", ref: b, children: m })
            );
        });
    p.displayName = u;
    function C(h) {
        const w = a(e + "CollectionConsumer", h);
        return j.useCallback(() => {
            const m = w.collectionRef.current;
            if (!m) return [];
            const y = Array.from(m.querySelectorAll(`[${d}]`));
            return Array.from(w.itemMap.values()).sort((I, E) => y.indexOf(I.ref.current) - y.indexOf(E.ref.current));
        }, [w.collectionRef, w.itemMap]);
    }
    return [{ Provider: s, Slot: c, ItemSlot: p }, C, r];
}
var Vw = [
        "a",
        "button",
        "div",
        "form",
        "h2",
        "h3",
        "img",
        "input",
        "label",
        "li",
        "nav",
        "ol",
        "p",
        "select",
        "span",
        "svg",
        "ul",
    ],
    X = Vw.reduce((e, t) => {
        const n = ba(`Primitive.${t}`),
            r = f.forwardRef((o, a) => {
                const { asChild: s, ...i } = o,
                    l = s ? n : t;
                return typeof window < "u" && (window[Symbol.for("radix-ui")] = !0), x.jsx(l, { ...i, ref: a });
            });
        return (r.displayName = `Primitive.${t}`), { ...e, [t]: r };
    }, {});
function Nv(e, t) {
    e && Pr.flushSync(() => e.dispatchEvent(t));
}
function yt(e) {
    const t = f.useRef(e);
    return (
        f.useEffect(() => {
            t.current = e;
        }),
        f.useMemo(
            () =>
                (...n) => {
                    var r;
                    return (r = t.current) == null ? void 0 : r.call(t, ...n);
                },
            []
        )
    );
}
function Ww(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = yt(e);
    f.useEffect(() => {
        const r = (o) => {
            o.key === "Escape" && n(o);
        };
        return (
            t.addEventListener("keydown", r, { capture: !0 }),
            () => t.removeEventListener("keydown", r, { capture: !0 })
        );
    }, [n, t]);
}
var Hw = "DismissableLayer",
    Wc = "dismissableLayer.update",
    Kw = "dismissableLayer.pointerDownOutside",
    Qw = "dismissableLayer.focusOutside",
    rp,
    Rv = f.createContext({ layers: new Set(), layersWithOutsidePointerEventsDisabled: new Set(), branches: new Set() }),
    ji = f.forwardRef((e, t) => {
        const {
                disableOutsidePointerEvents: n = !1,
                onEscapeKeyDown: r,
                onPointerDownOutside: o,
                onFocusOutside: a,
                onInteractOutside: s,
                onDismiss: i,
                ...l
            } = e,
            c = f.useContext(Rv),
            [u, d] = f.useState(null),
            g = (u == null ? void 0 : u.ownerDocument) ?? (globalThis == null ? void 0 : globalThis.document),
            [, p] = f.useState({}),
            C = le(t, (E) => d(E)),
            h = Array.from(c.layers),
            [w] = [...c.layersWithOutsidePointerEventsDisabled].slice(-1),
            v = h.indexOf(w),
            m = u ? h.indexOf(u) : -1,
            y = c.layersWithOutsidePointerEventsDisabled.size > 0,
            S = m >= v,
            b = Yw((E) => {
                const N = E.target,
                    k = [...c.branches].some((P) => P.contains(N));
                !S || k || (o == null || o(E), s == null || s(E), E.defaultPrevented || i == null || i());
            }, g),
            I = Xw((E) => {
                const N = E.target;
                [...c.branches].some((P) => P.contains(N)) ||
                    (a == null || a(E), s == null || s(E), E.defaultPrevented || i == null || i());
            }, g);
        return (
            Ww((E) => {
                m === c.layers.size - 1 && (r == null || r(E), !E.defaultPrevented && i && (E.preventDefault(), i()));
            }, g),
            f.useEffect(() => {
                if (u)
                    return (
                        n &&
                            (c.layersWithOutsidePointerEventsDisabled.size === 0 &&
                                ((rp = g.body.style.pointerEvents), (g.body.style.pointerEvents = "none")),
                            c.layersWithOutsidePointerEventsDisabled.add(u)),
                        c.layers.add(u),
                        op(),
                        () => {
                            n &&
                                c.layersWithOutsidePointerEventsDisabled.size === 1 &&
                                (g.body.style.pointerEvents = rp);
                        }
                    );
            }, [u, g, n, c]),
            f.useEffect(
                () => () => {
                    u && (c.layers.delete(u), c.layersWithOutsidePointerEventsDisabled.delete(u), op());
                },
                [u, c]
            ),
            f.useEffect(() => {
                const E = () => p({});
                return document.addEventListener(Wc, E), () => document.removeEventListener(Wc, E);
            }, []),
            x.jsx(X.div, {
                ...l,
                ref: C,
                style: { pointerEvents: y ? (S ? "auto" : "none") : void 0, ...e.style },
                onFocusCapture: H(e.onFocusCapture, I.onFocusCapture),
                onBlurCapture: H(e.onBlurCapture, I.onBlurCapture),
                onPointerDownCapture: H(e.onPointerDownCapture, b.onPointerDownCapture),
            })
        );
    });
ji.displayName = Hw;
var Gw = "DismissableLayerBranch",
    Av = f.forwardRef((e, t) => {
        const n = f.useContext(Rv),
            r = f.useRef(null),
            o = le(t, r);
        return (
            f.useEffect(() => {
                const a = r.current;
                if (a)
                    return (
                        n.branches.add(a),
                        () => {
                            n.branches.delete(a);
                        }
                    );
            }, [n.branches]),
            x.jsx(X.div, { ...e, ref: o })
        );
    });
Av.displayName = Gw;
function Yw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = yt(e),
        r = f.useRef(!1),
        o = f.useRef(() => {});
    return (
        f.useEffect(() => {
            const a = (i) => {
                    if (i.target && !r.current) {
                        let l = function () {
                            Dv(Kw, n, c, { discrete: !0 });
                        };
                        const c = { originalEvent: i };
                        i.pointerType === "touch"
                            ? (t.removeEventListener("click", o.current),
                              (o.current = l),
                              t.addEventListener("click", o.current, { once: !0 }))
                            : l();
                    } else t.removeEventListener("click", o.current);
                    r.current = !1;
                },
                s = window.setTimeout(() => {
                    t.addEventListener("pointerdown", a);
                }, 0);
            return () => {
                window.clearTimeout(s),
                    t.removeEventListener("pointerdown", a),
                    t.removeEventListener("click", o.current);
            };
        }, [t, n]),
        { onPointerDownCapture: () => (r.current = !0) }
    );
}
function Xw(e, t = globalThis == null ? void 0 : globalThis.document) {
    const n = yt(e),
        r = f.useRef(!1);
    return (
        f.useEffect(() => {
            const o = (a) => {
                a.target && !r.current && Dv(Qw, n, { originalEvent: a }, { discrete: !1 });
            };
            return t.addEventListener("focusin", o), () => t.removeEventListener("focusin", o);
        }, [t, n]),
        { onFocusCapture: () => (r.current = !0), onBlurCapture: () => (r.current = !1) }
    );
}
function op() {
    const e = new CustomEvent(Wc);
    document.dispatchEvent(e);
}
function Dv(e, t, n, { discrete: r }) {
    const o = n.originalEvent.target,
        a = new CustomEvent(e, { bubbles: !1, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Nv(o, a) : o.dispatchEvent(a);
}
var qw = ji,
    Zw = Av,
    Oe = globalThis != null && globalThis.document ? f.useLayoutEffect : () => {},
    Jw = "Portal",
    hd = f.forwardRef((e, t) => {
        var i;
        const { container: n, ...r } = e,
            [o, a] = f.useState(!1);
        Oe(() => a(!0), []);
        const s = n || (o && ((i = globalThis == null ? void 0 : globalThis.document) == null ? void 0 : i.body));
        return s ? Ev.createPortal(x.jsx(X.div, { ...r, ref: t }), s) : null;
    });
hd.displayName = Jw;
function e1(e, t) {
    return f.useReducer((n, r) => t[n][r] ?? n, e);
}
var Li = (e) => {
    const { present: t, children: n } = e,
        r = t1(t),
        o = typeof n == "function" ? n({ present: r.isPresent }) : f.Children.only(n),
        a = le(r.ref, n1(o));
    return typeof n == "function" || r.isPresent ? f.cloneElement(o, { ref: a }) : null;
};
Li.displayName = "Presence";
function t1(e) {
    const [t, n] = f.useState(),
        r = f.useRef(null),
        o = f.useRef(e),
        a = f.useRef("none"),
        s = e ? "mounted" : "unmounted",
        [i, l] = e1(s, {
            mounted: { UNMOUNT: "unmounted", ANIMATION_OUT: "unmountSuspended" },
            unmountSuspended: { MOUNT: "mounted", ANIMATION_END: "unmounted" },
            unmounted: { MOUNT: "mounted" },
        });
    return (
        f.useEffect(() => {
            const c = is(r.current);
            a.current = i === "mounted" ? c : "none";
        }, [i]),
        Oe(() => {
            const c = r.current,
                u = o.current;
            if (u !== e) {
                const g = a.current,
                    p = is(c);
                e
                    ? l("MOUNT")
                    : p === "none" || (c == null ? void 0 : c.display) === "none"
                      ? l("UNMOUNT")
                      : l(u && g !== p ? "ANIMATION_OUT" : "UNMOUNT"),
                    (o.current = e);
            }
        }, [e, l]),
        Oe(() => {
            if (t) {
                let c;
                const u = t.ownerDocument.defaultView ?? window,
                    d = (p) => {
                        const h = is(r.current).includes(CSS.escape(p.animationName));
                        if (p.target === t && h && (l("ANIMATION_END"), !o.current)) {
                            const w = t.style.animationFillMode;
                            (t.style.animationFillMode = "forwards"),
                                (c = u.setTimeout(() => {
                                    t.style.animationFillMode === "forwards" && (t.style.animationFillMode = w);
                                }));
                        }
                    },
                    g = (p) => {
                        p.target === t && (a.current = is(r.current));
                    };
                return (
                    t.addEventListener("animationstart", g),
                    t.addEventListener("animationcancel", d),
                    t.addEventListener("animationend", d),
                    () => {
                        u.clearTimeout(c),
                            t.removeEventListener("animationstart", g),
                            t.removeEventListener("animationcancel", d),
                            t.removeEventListener("animationend", d);
                    }
                );
            } else l("ANIMATION_END");
        }, [t, l]),
        {
            isPresent: ["mounted", "unmountSuspended"].includes(i),
            ref: f.useCallback((c) => {
                (r.current = c ? getComputedStyle(c) : null), n(c);
            }, []),
        }
    );
}
function is(e) {
    return (e == null ? void 0 : e.animationName) || "none";
}
function n1(e) {
    var r, o;
    let t = (r = Object.getOwnPropertyDescriptor(e.props, "ref")) == null ? void 0 : r.get,
        n = t && "isReactWarning" in t && t.isReactWarning;
    return n
        ? e.ref
        : ((t = (o = Object.getOwnPropertyDescriptor(e, "ref")) == null ? void 0 : o.get),
          (n = t && "isReactWarning" in t && t.isReactWarning),
          n ? e.props.ref : e.props.ref || e.ref);
}
var r1 = Eu[" useInsertionEffect ".trim().toString()] || Oe;
function wo({ prop: e, defaultProp: t, onChange: n = () => {}, caller: r }) {
    const [o, a, s] = o1({ defaultProp: t, onChange: n }),
        i = e !== void 0,
        l = i ? e : o;
    {
        const u = f.useRef(e !== void 0);
        f.useEffect(() => {
            const d = u.current;
            d !== i &&
                console.warn(
                    `${r} is changing from ${d ? "controlled" : "uncontrolled"} to ${i ? "controlled" : "uncontrolled"}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`
                ),
                (u.current = i);
        }, [i, r]);
    }
    const c = f.useCallback(
        (u) => {
            var d;
            if (i) {
                const g = a1(u) ? u(e) : u;
                g !== e && ((d = s.current) == null || d.call(s, g));
            } else a(u);
        },
        [i, e, a, s]
    );
    return [l, c];
}
function o1({ defaultProp: e, onChange: t }) {
    const [n, r] = f.useState(e),
        o = f.useRef(n),
        a = f.useRef(t);
    return (
        r1(() => {
            a.current = t;
        }, [t]),
        f.useEffect(() => {
            var s;
            o.current !== n && ((s = a.current) == null || s.call(a, n), (o.current = n));
        }, [n, o]),
        [n, r, a]
    );
}
function a1(e) {
    return typeof e == "function";
}
var _v = Object.freeze({
        position: "absolute",
        border: 0,
        width: 1,
        height: 1,
        padding: 0,
        margin: -1,
        overflow: "hidden",
        clip: "rect(0, 0, 0, 0)",
        whiteSpace: "nowrap",
        wordWrap: "normal",
    }),
    s1 = "VisuallyHidden",
    Fi = f.forwardRef((e, t) => x.jsx(X.span, { ...e, ref: t, style: { ..._v, ...e.style } }));
Fi.displayName = s1;
var i1 = Fi,
    vd = "ToastProvider",
    [gd, l1, c1] = Oi("Toast"),
    [Mv] = fn("Toast", [c1]),
    [u1, Bi] = Mv(vd),
    Ov = (e) => {
        const {
                __scopeToast: t,
                label: n = "Notification",
                duration: r = 5e3,
                swipeDirection: o = "right",
                swipeThreshold: a = 50,
                children: s,
            } = e,
            [i, l] = f.useState(null),
            [c, u] = f.useState(0),
            d = f.useRef(!1),
            g = f.useRef(!1);
        return (
            n.trim() || console.error(`Invalid prop \`label\` supplied to \`${vd}\`. Expected non-empty \`string\`.`),
            x.jsx(gd.Provider, {
                scope: t,
                children: x.jsx(u1, {
                    scope: t,
                    label: n,
                    duration: r,
                    swipeDirection: o,
                    swipeThreshold: a,
                    toastCount: c,
                    viewport: i,
                    onViewportChange: l,
                    onToastAdd: f.useCallback(() => u((p) => p + 1), []),
                    onToastRemove: f.useCallback(() => u((p) => p - 1), []),
                    isFocusedToastEscapeKeyDownRef: d,
                    isClosePausedRef: g,
                    children: s,
                }),
            })
        );
    };
Ov.displayName = vd;
var jv = "ToastViewport",
    d1 = ["F8"],
    Hc = "toast.viewportPause",
    Kc = "toast.viewportResume",
    Lv = f.forwardRef((e, t) => {
        const { __scopeToast: n, hotkey: r = d1, label: o = "Notifications ({hotkey})", ...a } = e,
            s = Bi(jv, n),
            i = l1(n),
            l = f.useRef(null),
            c = f.useRef(null),
            u = f.useRef(null),
            d = f.useRef(null),
            g = le(t, d, s.onViewportChange),
            p = r.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
            C = s.toastCount > 0;
        f.useEffect(() => {
            const w = (v) => {
                var y;
                r.length !== 0 && r.every((S) => v[S] || v.code === S) && ((y = d.current) == null || y.focus());
            };
            return document.addEventListener("keydown", w), () => document.removeEventListener("keydown", w);
        }, [r]),
            f.useEffect(() => {
                const w = l.current,
                    v = d.current;
                if (C && w && v) {
                    const m = () => {
                            if (!s.isClosePausedRef.current) {
                                const I = new CustomEvent(Hc);
                                v.dispatchEvent(I), (s.isClosePausedRef.current = !0);
                            }
                        },
                        y = () => {
                            if (s.isClosePausedRef.current) {
                                const I = new CustomEvent(Kc);
                                v.dispatchEvent(I), (s.isClosePausedRef.current = !1);
                            }
                        },
                        S = (I) => {
                            !w.contains(I.relatedTarget) && y();
                        },
                        b = () => {
                            w.contains(document.activeElement) || y();
                        };
                    return (
                        w.addEventListener("focusin", m),
                        w.addEventListener("focusout", S),
                        w.addEventListener("pointermove", m),
                        w.addEventListener("pointerleave", b),
                        window.addEventListener("blur", m),
                        window.addEventListener("focus", y),
                        () => {
                            w.removeEventListener("focusin", m),
                                w.removeEventListener("focusout", S),
                                w.removeEventListener("pointermove", m),
                                w.removeEventListener("pointerleave", b),
                                window.removeEventListener("blur", m),
                                window.removeEventListener("focus", y);
                        }
                    );
                }
            }, [C, s.isClosePausedRef]);
        const h = f.useCallback(
            ({ tabbingDirection: w }) => {
                const m = i().map((y) => {
                    const S = y.ref.current,
                        b = [S, ...E1(S)];
                    return w === "forwards" ? b : b.reverse();
                });
                return (w === "forwards" ? m.reverse() : m).flat();
            },
            [i]
        );
        return (
            f.useEffect(() => {
                const w = d.current;
                if (w) {
                    const v = (m) => {
                        var b, I, E;
                        const y = m.altKey || m.ctrlKey || m.metaKey;
                        if (m.key === "Tab" && !y) {
                            const N = document.activeElement,
                                k = m.shiftKey;
                            if (m.target === w && k) {
                                (b = c.current) == null || b.focus();
                                return;
                            }
                            const D = h({ tabbingDirection: k ? "backwards" : "forwards" }),
                                F = D.findIndex((M) => M === N);
                            Fl(D.slice(F + 1))
                                ? m.preventDefault()
                                : k
                                  ? (I = c.current) == null || I.focus()
                                  : (E = u.current) == null || E.focus();
                        }
                    };
                    return w.addEventListener("keydown", v), () => w.removeEventListener("keydown", v);
                }
            }, [i, h]),
            x.jsxs(Zw, {
                ref: l,
                role: "region",
                "aria-label": o.replace("{hotkey}", p),
                tabIndex: -1,
                style: { pointerEvents: C ? void 0 : "none" },
                children: [
                    C &&
                        x.jsx(Qc, {
                            ref: c,
                            onFocusFromOutsideViewport: () => {
                                const w = h({ tabbingDirection: "forwards" });
                                Fl(w);
                            },
                        }),
                    x.jsx(gd.Slot, { scope: n, children: x.jsx(X.ol, { tabIndex: -1, ...a, ref: g }) }),
                    C &&
                        x.jsx(Qc, {
                            ref: u,
                            onFocusFromOutsideViewport: () => {
                                const w = h({ tabbingDirection: "backwards" });
                                Fl(w);
                            },
                        }),
                ],
            })
        );
    });
Lv.displayName = jv;
var Fv = "ToastFocusProxy",
    Qc = f.forwardRef((e, t) => {
        const { __scopeToast: n, onFocusFromOutsideViewport: r, ...o } = e,
            a = Bi(Fv, n);
        return x.jsx(Fi, {
            tabIndex: 0,
            ...o,
            ref: t,
            style: { position: "fixed" },
            onFocus: (s) => {
                var c;
                const i = s.relatedTarget;
                !((c = a.viewport) != null && c.contains(i)) && r();
            },
        });
    });
Qc.displayName = Fv;
var Fa = "Toast",
    f1 = "toast.swipeStart",
    p1 = "toast.swipeMove",
    m1 = "toast.swipeCancel",
    h1 = "toast.swipeEnd",
    Bv = f.forwardRef((e, t) => {
        const { forceMount: n, open: r, defaultOpen: o, onOpenChange: a, ...s } = e,
            [i, l] = wo({ prop: r, defaultProp: o ?? !0, onChange: a, caller: Fa });
        return x.jsx(Li, {
            present: n || i,
            children: x.jsx(y1, {
                open: i,
                ...s,
                ref: t,
                onClose: () => l(!1),
                onPause: yt(e.onPause),
                onResume: yt(e.onResume),
                onSwipeStart: H(e.onSwipeStart, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "start");
                }),
                onSwipeMove: H(e.onSwipeMove, (c) => {
                    const { x: u, y: d } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "move"),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-move-x", `${u}px`),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-move-y", `${d}px`);
                }),
                onSwipeCancel: H(e.onSwipeCancel, (c) => {
                    c.currentTarget.setAttribute("data-swipe", "cancel"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-end-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-end-y");
                }),
                onSwipeEnd: H(e.onSwipeEnd, (c) => {
                    const { x: u, y: d } = c.detail.delta;
                    c.currentTarget.setAttribute("data-swipe", "end"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-x"),
                        c.currentTarget.style.removeProperty("--radix-toast-swipe-move-y"),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-end-x", `${u}px`),
                        c.currentTarget.style.setProperty("--radix-toast-swipe-end-y", `${d}px`),
                        l(!1);
                }),
            }),
        });
    });
Bv.displayName = Fa;
var [v1, g1] = Mv(Fa, { onClose() {} }),
    y1 = f.forwardRef((e, t) => {
        const {
                __scopeToast: n,
                type: r = "foreground",
                duration: o,
                open: a,
                onClose: s,
                onEscapeKeyDown: i,
                onPause: l,
                onResume: c,
                onSwipeStart: u,
                onSwipeMove: d,
                onSwipeCancel: g,
                onSwipeEnd: p,
                ...C
            } = e,
            h = Bi(Fa, n),
            [w, v] = f.useState(null),
            m = le(t, (M) => v(M)),
            y = f.useRef(null),
            S = f.useRef(null),
            b = o || h.duration,
            I = f.useRef(0),
            E = f.useRef(b),
            N = f.useRef(0),
            { onToastAdd: k, onToastRemove: P } = h,
            _ = yt(() => {
                var V;
                (w == null ? void 0 : w.contains(document.activeElement)) && ((V = h.viewport) == null || V.focus()),
                    s();
            }),
            D = f.useCallback(
                (M) => {
                    !M ||
                        M === 1 / 0 ||
                        (window.clearTimeout(N.current),
                        (I.current = new Date().getTime()),
                        (N.current = window.setTimeout(_, M)));
                },
                [_]
            );
        f.useEffect(() => {
            const M = h.viewport;
            if (M) {
                const V = () => {
                        D(E.current), c == null || c();
                    },
                    L = () => {
                        const U = new Date().getTime() - I.current;
                        (E.current = E.current - U), window.clearTimeout(N.current), l == null || l();
                    };
                return (
                    M.addEventListener(Hc, L),
                    M.addEventListener(Kc, V),
                    () => {
                        M.removeEventListener(Hc, L), M.removeEventListener(Kc, V);
                    }
                );
            }
        }, [h.viewport, b, l, c, D]),
            f.useEffect(() => {
                a && !h.isClosePausedRef.current && D(b);
            }, [a, b, h.isClosePausedRef, D]),
            f.useEffect(() => (k(), () => P()), [k, P]);
        const F = f.useMemo(() => (w ? Kv(w) : null), [w]);
        return h.viewport
            ? x.jsxs(x.Fragment, {
                  children: [
                      F &&
                          x.jsx(x1, {
                              __scopeToast: n,
                              role: "status",
                              "aria-live": r === "foreground" ? "assertive" : "polite",
                              children: F,
                          }),
                      x.jsx(v1, {
                          scope: n,
                          onClose: _,
                          children: Pr.createPortal(
                              x.jsx(gd.ItemSlot, {
                                  scope: n,
                                  children: x.jsx(qw, {
                                      asChild: !0,
                                      onEscapeKeyDown: H(i, () => {
                                          h.isFocusedToastEscapeKeyDownRef.current || _(),
                                              (h.isFocusedToastEscapeKeyDownRef.current = !1);
                                      }),
                                      children: x.jsx(X.li, {
                                          tabIndex: 0,
                                          "data-state": a ? "open" : "closed",
                                          "data-swipe-direction": h.swipeDirection,
                                          ...C,
                                          ref: m,
                                          style: { userSelect: "none", touchAction: "none", ...e.style },
                                          onKeyDown: H(e.onKeyDown, (M) => {
                                              M.key === "Escape" &&
                                                  (i == null || i(M.nativeEvent),
                                                  M.nativeEvent.defaultPrevented ||
                                                      ((h.isFocusedToastEscapeKeyDownRef.current = !0), _()));
                                          }),
                                          onPointerDown: H(e.onPointerDown, (M) => {
                                              M.button === 0 && (y.current = { x: M.clientX, y: M.clientY });
                                          }),
                                          onPointerMove: H(e.onPointerMove, (M) => {
                                              if (!y.current) return;
                                              const V = M.clientX - y.current.x,
                                                  L = M.clientY - y.current.y,
                                                  U = !!S.current,
                                                  T = ["left", "right"].includes(h.swipeDirection),
                                                  R = ["left", "up"].includes(h.swipeDirection) ? Math.min : Math.max,
                                                  B = T ? R(0, V) : 0,
                                                  K = T ? 0 : R(0, L),
                                                  W = M.pointerType === "touch" ? 10 : 2,
                                                  q = { x: B, y: K },
                                                  G = { originalEvent: M, delta: q };
                                              U
                                                  ? ((S.current = q), ls(p1, d, G, { discrete: !1 }))
                                                  : ap(q, h.swipeDirection, W)
                                                    ? ((S.current = q),
                                                      ls(f1, u, G, { discrete: !1 }),
                                                      M.target.setPointerCapture(M.pointerId))
                                                    : (Math.abs(V) > W || Math.abs(L) > W) && (y.current = null);
                                          }),
                                          onPointerUp: H(e.onPointerUp, (M) => {
                                              const V = S.current,
                                                  L = M.target;
                                              if (
                                                  (L.hasPointerCapture(M.pointerId) &&
                                                      L.releasePointerCapture(M.pointerId),
                                                  (S.current = null),
                                                  (y.current = null),
                                                  V)
                                              ) {
                                                  const U = M.currentTarget,
                                                      T = { originalEvent: M, delta: V };
                                                  ap(V, h.swipeDirection, h.swipeThreshold)
                                                      ? ls(h1, p, T, { discrete: !0 })
                                                      : ls(m1, g, T, { discrete: !0 }),
                                                      U.addEventListener("click", (R) => R.preventDefault(), {
                                                          once: !0,
                                                      });
                                              }
                                          }),
                                      }),
                                  }),
                              }),
                              h.viewport
                          ),
                      }),
                  ],
              })
            : null;
    }),
    x1 = (e) => {
        const { __scopeToast: t, children: n, ...r } = e,
            o = Bi(Fa, t),
            [a, s] = f.useState(!1),
            [i, l] = f.useState(!1);
        return (
            C1(() => s(!0)),
            f.useEffect(() => {
                const c = window.setTimeout(() => l(!0), 1e3);
                return () => window.clearTimeout(c);
            }, []),
            i
                ? null
                : x.jsx(hd, {
                      asChild: !0,
                      children: x.jsx(Fi, { ...r, children: a && x.jsxs(x.Fragment, { children: [o.label, " ", n] }) }),
                  })
        );
    },
    w1 = "ToastTitle",
    zv = f.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return x.jsx(X.div, { ...r, ref: t });
    });
zv.displayName = w1;
var S1 = "ToastDescription",
    $v = f.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e;
        return x.jsx(X.div, { ...r, ref: t });
    });
$v.displayName = S1;
var Uv = "ToastAction",
    Vv = f.forwardRef((e, t) => {
        const { altText: n, ...r } = e;
        return n.trim()
            ? x.jsx(Hv, { altText: n, asChild: !0, children: x.jsx(yd, { ...r, ref: t }) })
            : (console.error(`Invalid prop \`altText\` supplied to \`${Uv}\`. Expected non-empty \`string\`.`), null);
    });
Vv.displayName = Uv;
var Wv = "ToastClose",
    yd = f.forwardRef((e, t) => {
        const { __scopeToast: n, ...r } = e,
            o = g1(Wv, n);
        return x.jsx(Hv, {
            asChild: !0,
            children: x.jsx(X.button, { type: "button", ...r, ref: t, onClick: H(e.onClick, o.onClose) }),
        });
    });
yd.displayName = Wv;
var Hv = f.forwardRef((e, t) => {
    const { __scopeToast: n, altText: r, ...o } = e;
    return x.jsx(X.div, {
        "data-radix-toast-announce-exclude": "",
        "data-radix-toast-announce-alt": r || void 0,
        ...o,
        ref: t,
    });
});
function Kv(e) {
    const t = [];
    return (
        Array.from(e.childNodes).forEach((r) => {
            if ((r.nodeType === r.TEXT_NODE && r.textContent && t.push(r.textContent), b1(r))) {
                const o = r.ariaHidden || r.hidden || r.style.display === "none",
                    a = r.dataset.radixToastAnnounceExclude === "";
                if (!o)
                    if (a) {
                        const s = r.dataset.radixToastAnnounceAlt;
                        s && t.push(s);
                    } else t.push(...Kv(r));
            }
        }),
        t
    );
}
function ls(e, t, n, { discrete: r }) {
    const o = n.originalEvent.currentTarget,
        a = new CustomEvent(e, { bubbles: !0, cancelable: !0, detail: n });
    t && o.addEventListener(e, t, { once: !0 }), r ? Nv(o, a) : o.dispatchEvent(a);
}
var ap = (e, t, n = 0) => {
    const r = Math.abs(e.x),
        o = Math.abs(e.y),
        a = r > o;
    return t === "left" || t === "right" ? a && r > n : !a && o > n;
};
function C1(e = () => {}) {
    const t = yt(e);
    Oe(() => {
        let n = 0,
            r = 0;
        return (
            (n = window.requestAnimationFrame(() => (r = window.requestAnimationFrame(t)))),
            () => {
                window.cancelAnimationFrame(n), window.cancelAnimationFrame(r);
            }
        );
    }, [t]);
}
function b1(e) {
    return e.nodeType === e.ELEMENT_NODE;
}
function E1(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function Fl(e) {
    const t = document.activeElement;
    return e.some((n) => (n === t ? !0 : (n.focus(), document.activeElement !== t)));
}
var T1 = Ov,
    Qv = Lv,
    Gv = Bv,
    Yv = zv,
    Xv = $v,
    qv = Vv,
    Zv = yd;
function Jv(e) {
    var t,
        n,
        r = "";
    if (typeof e == "string" || typeof e == "number") r += e;
    else if (typeof e == "object")
        if (Array.isArray(e)) {
            var o = e.length;
            for (t = 0; t < o; t++) e[t] && (n = Jv(e[t])) && (r && (r += " "), (r += n));
        } else for (n in e) e[n] && (r && (r += " "), (r += n));
    return r;
}
function eg() {
    for (var e, t, n = 0, r = "", o = arguments.length; n < o; n++)
        (e = arguments[n]) && (t = Jv(e)) && (r && (r += " "), (r += t));
    return r;
}
const sp = (e) => (typeof e == "boolean" ? `${e}` : e === 0 ? "0" : e),
    ip = eg,
    zi = (e, t) => (n) => {
        var r;
        if ((t == null ? void 0 : t.variants) == null)
            return ip(e, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
        const { variants: o, defaultVariants: a } = t,
            s = Object.keys(o).map((c) => {
                const u = n == null ? void 0 : n[c],
                    d = a == null ? void 0 : a[c];
                if (u === null) return null;
                const g = sp(u) || sp(d);
                return o[c][g];
            }),
            i =
                n &&
                Object.entries(n).reduce((c, u) => {
                    let [d, g] = u;
                    return g === void 0 || (c[d] = g), c;
                }, {}),
            l =
                t == null || (r = t.compoundVariants) === null || r === void 0
                    ? void 0
                    : r.reduce((c, u) => {
                          let { class: d, className: g, ...p } = u;
                          return Object.entries(p).every((C) => {
                              let [h, w] = C;
                              return Array.isArray(w) ? w.includes({ ...a, ...i }[h]) : { ...a, ...i }[h] === w;
                          })
                              ? [...c, d, g]
                              : c;
                      }, []);
        return ip(e, s, l, n == null ? void 0 : n.class, n == null ? void 0 : n.className);
    };
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const P1 = (e) => e.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
    tg = (...e) =>
        e
            .filter((t, n, r) => !!t && t.trim() !== "" && r.indexOf(t) === n)
            .join(" ")
            .trim();
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var I1 = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const k1 = f.forwardRef(
    (
        {
            color: e = "currentColor",
            size: t = 24,
            strokeWidth: n = 2,
            absoluteStrokeWidth: r,
            className: o = "",
            children: a,
            iconNode: s,
            ...i
        },
        l
    ) =>
        f.createElement(
            "svg",
            {
                ref: l,
                ...I1,
                width: t,
                height: t,
                stroke: e,
                strokeWidth: r ? (Number(n) * 24) / Number(t) : n,
                className: tg("lucide", o),
                ...i,
            },
            [...s.map(([c, u]) => f.createElement(c, u)), ...(Array.isArray(a) ? a : [a])]
        )
);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const je = (e, t) => {
    const n = f.forwardRef(({ className: r, ...o }, a) =>
        f.createElement(k1, { ref: a, iconNode: t, className: tg(`lucide-${P1(e)}`, r), ...o })
    );
    return (n.displayName = `${e}`), n;
};
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const N1 = je("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ng = je("ChevronDown", [["path", { d: "m6 9 6 6 6-6", key: "qrunsl" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const R1 = je("ChevronUp", [["path", { d: "m18 15-6-6-6 6", key: "153udz" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const A1 = je("Circle", [["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const D1 = je("CornerDownLeft", [
    ["polyline", { points: "9 10 4 15 9 20", key: "r3jprv" }],
    ["path", { d: "M20 4v7a4 4 0 0 1-4 4H4", key: "6o5b7l" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _1 = je("Download", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "7 10 12 15 17 10", key: "2ggqvy" }],
    ["line", { x1: "12", x2: "12", y1: "15", y2: "3", key: "1vk2je" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const M1 = je("Grid3x3", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }],
    ["path", { d: "M3 9h18", key: "1pudct" }],
    ["path", { d: "M3 15h18", key: "5xshup" }],
    ["path", { d: "M9 3v18", key: "fh3hqa" }],
    ["path", { d: "M15 3v18", key: "14nvp0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cs = je("Image", [
    ["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", ry: "2", key: "1m3agn" }],
    ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
    ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const lp = je("Layers", [
    [
        "path",
        {
            d: "m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",
            key: "8b97xw",
        },
    ],
    ["path", { d: "m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65", key: "dd6zsq" }],
    ["path", { d: "m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65", key: "ep9fru" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const O1 = je("Moon", [["path", { d: "M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z", key: "a7tn18" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const j1 = je("Move", [
    ["path", { d: "M12 2v20", key: "t6zp3m" }],
    ["path", { d: "m15 19-3 3-3-3", key: "11eu04" }],
    ["path", { d: "m19 9 3 3-3 3", key: "1mg7y2" }],
    ["path", { d: "M2 12h20", key: "9i4pu4" }],
    ["path", { d: "m5 9-3 3 3 3", key: "j64kie" }],
    ["path", { d: "m9 5 3-3 3 3", key: "l8vdw6" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const L1 = je("RotateCw", [
    ["path", { d: "M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8", key: "1p45f6" }],
    ["path", { d: "M21 3v5h-5", key: "1q7to0" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bl = je("Square", [["rect", { width: "18", height: "18", x: "3", y: "3", rx: "2", key: "afitv7" }]]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const F1 = je("Sun", [
    ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
    ["path", { d: "M12 2v2", key: "tus03m" }],
    ["path", { d: "M12 20v2", key: "1lh1kg" }],
    ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
    ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
    ["path", { d: "M2 12h2", key: "1t8f8n" }],
    ["path", { d: "M20 12h2", key: "1q8mjw" }],
    ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
    ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const B1 = je("Type", [
    ["polyline", { points: "4 7 4 4 20 4 20 7", key: "1nosan" }],
    ["line", { x1: "9", x2: "15", y1: "20", y2: "20", key: "swin9y" }],
    ["line", { x1: "12", x2: "12", y1: "4", y2: "20", key: "1tx1rr" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const cp = je("Upload", [
    ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
    ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
    ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.462.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const z1 = je("X", [
        ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
        ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
    ]),
    xd = "-",
    $1 = (e) => {
        const t = V1(e),
            { conflictingClassGroups: n, conflictingClassGroupModifiers: r } = e;
        return {
            getClassGroupId: (s) => {
                const i = s.split(xd);
                return i[0] === "" && i.length !== 1 && i.shift(), rg(i, t) || U1(s);
            },
            getConflictingClassGroupIds: (s, i) => {
                const l = n[s] || [];
                return i && r[s] ? [...l, ...r[s]] : l;
            },
        };
    },
    rg = (e, t) => {
        var s;
        if (e.length === 0) return t.classGroupId;
        const n = e[0],
            r = t.nextPart.get(n),
            o = r ? rg(e.slice(1), r) : void 0;
        if (o) return o;
        if (t.validators.length === 0) return;
        const a = e.join(xd);
        return (s = t.validators.find(({ validator: i }) => i(a))) == null ? void 0 : s.classGroupId;
    },
    up = /^\[(.+)\]$/,
    U1 = (e) => {
        if (up.test(e)) {
            const t = up.exec(e)[1],
                n = t == null ? void 0 : t.substring(0, t.indexOf(":"));
            if (n) return "arbitrary.." + n;
        }
    },
    V1 = (e) => {
        const { theme: t, prefix: n } = e,
            r = { nextPart: new Map(), validators: [] };
        return (
            H1(Object.entries(e.classGroups), n).forEach(([a, s]) => {
                Gc(s, r, a, t);
            }),
            r
        );
    },
    Gc = (e, t, n, r) => {
        e.forEach((o) => {
            if (typeof o == "string") {
                const a = o === "" ? t : dp(t, o);
                a.classGroupId = n;
                return;
            }
            if (typeof o == "function") {
                if (W1(o)) {
                    Gc(o(r), t, n, r);
                    return;
                }
                t.validators.push({ validator: o, classGroupId: n });
                return;
            }
            Object.entries(o).forEach(([a, s]) => {
                Gc(s, dp(t, a), n, r);
            });
        });
    },
    dp = (e, t) => {
        let n = e;
        return (
            t.split(xd).forEach((r) => {
                n.nextPart.has(r) || n.nextPart.set(r, { nextPart: new Map(), validators: [] }),
                    (n = n.nextPart.get(r));
            }),
            n
        );
    },
    W1 = (e) => e.isThemeGetter,
    H1 = (e, t) =>
        t
            ? e.map(([n, r]) => {
                  const o = r.map((a) =>
                      typeof a == "string"
                          ? t + a
                          : typeof a == "object"
                            ? Object.fromEntries(Object.entries(a).map(([s, i]) => [t + s, i]))
                            : a
                  );
                  return [n, o];
              })
            : e,
    K1 = (e) => {
        if (e < 1) return { get: () => {}, set: () => {} };
        let t = 0,
            n = new Map(),
            r = new Map();
        const o = (a, s) => {
            n.set(a, s), t++, t > e && ((t = 0), (r = n), (n = new Map()));
        };
        return {
            get(a) {
                let s = n.get(a);
                if (s !== void 0) return s;
                if ((s = r.get(a)) !== void 0) return o(a, s), s;
            },
            set(a, s) {
                n.has(a) ? n.set(a, s) : o(a, s);
            },
        };
    },
    og = "!",
    Q1 = (e) => {
        const { separator: t, experimentalParseClassName: n } = e,
            r = t.length === 1,
            o = t[0],
            a = t.length,
            s = (i) => {
                const l = [];
                let c = 0,
                    u = 0,
                    d;
                for (let w = 0; w < i.length; w++) {
                    let v = i[w];
                    if (c === 0) {
                        if (v === o && (r || i.slice(w, w + a) === t)) {
                            l.push(i.slice(u, w)), (u = w + a);
                            continue;
                        }
                        if (v === "/") {
                            d = w;
                            continue;
                        }
                    }
                    v === "[" ? c++ : v === "]" && c--;
                }
                const g = l.length === 0 ? i : i.substring(u),
                    p = g.startsWith(og),
                    C = p ? g.substring(1) : g,
                    h = d && d > u ? d - u : void 0;
                return { modifiers: l, hasImportantModifier: p, baseClassName: C, maybePostfixModifierPosition: h };
            };
        return n ? (i) => n({ className: i, parseClassName: s }) : s;
    },
    G1 = (e) => {
        if (e.length <= 1) return e;
        const t = [];
        let n = [];
        return (
            e.forEach((r) => {
                r[0] === "[" ? (t.push(...n.sort(), r), (n = [])) : n.push(r);
            }),
            t.push(...n.sort()),
            t
        );
    },
    Y1 = (e) => ({ cache: K1(e.cacheSize), parseClassName: Q1(e), ...$1(e) }),
    X1 = /\s+/,
    q1 = (e, t) => {
        const { parseClassName: n, getClassGroupId: r, getConflictingClassGroupIds: o } = t,
            a = [],
            s = e.trim().split(X1);
        let i = "";
        for (let l = s.length - 1; l >= 0; l -= 1) {
            const c = s[l],
                { modifiers: u, hasImportantModifier: d, baseClassName: g, maybePostfixModifierPosition: p } = n(c);
            let C = !!p,
                h = r(C ? g.substring(0, p) : g);
            if (!h) {
                if (!C) {
                    i = c + (i.length > 0 ? " " + i : i);
                    continue;
                }
                if (((h = r(g)), !h)) {
                    i = c + (i.length > 0 ? " " + i : i);
                    continue;
                }
                C = !1;
            }
            const w = G1(u).join(":"),
                v = d ? w + og : w,
                m = v + h;
            if (a.includes(m)) continue;
            a.push(m);
            const y = o(h, C);
            for (let S = 0; S < y.length; ++S) {
                const b = y[S];
                a.push(v + b);
            }
            i = c + (i.length > 0 ? " " + i : i);
        }
        return i;
    };
function Z1() {
    let e = 0,
        t,
        n,
        r = "";
    for (; e < arguments.length; ) (t = arguments[e++]) && (n = ag(t)) && (r && (r += " "), (r += n));
    return r;
}
const ag = (e) => {
    if (typeof e == "string") return e;
    let t,
        n = "";
    for (let r = 0; r < e.length; r++) e[r] && (t = ag(e[r])) && (n && (n += " "), (n += t));
    return n;
};
function J1(e, ...t) {
    let n,
        r,
        o,
        a = s;
    function s(l) {
        const c = t.reduce((u, d) => d(u), e());
        return (n = Y1(c)), (r = n.cache.get), (o = n.cache.set), (a = i), i(l);
    }
    function i(l) {
        const c = r(l);
        if (c) return c;
        const u = q1(l, n);
        return o(l, u), u;
    }
    return function () {
        return a(Z1.apply(null, arguments));
    };
}
const fe = (e) => {
        const t = (n) => n[e] || [];
        return (t.isThemeGetter = !0), t;
    },
    sg = /^\[(?:([a-z-]+):)?(.+)\]$/i,
    eS = /^\d+\/\d+$/,
    tS = new Set(["px", "full", "screen"]),
    nS = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,
    rS =
        /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,
    oS = /^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,
    aS = /^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,
    sS = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,
    Xt = (e) => to(e) || tS.has(e) || eS.test(e),
    yn = (e) => Po(e, "length", mS),
    to = (e) => !!e && !Number.isNaN(Number(e)),
    zl = (e) => Po(e, "number", to),
    Uo = (e) => !!e && Number.isInteger(Number(e)),
    iS = (e) => e.endsWith("%") && to(e.slice(0, -1)),
    Z = (e) => sg.test(e),
    xn = (e) => nS.test(e),
    lS = new Set(["length", "size", "percentage"]),
    cS = (e) => Po(e, lS, ig),
    uS = (e) => Po(e, "position", ig),
    dS = new Set(["image", "url"]),
    fS = (e) => Po(e, dS, vS),
    pS = (e) => Po(e, "", hS),
    Vo = () => !0,
    Po = (e, t, n) => {
        const r = sg.exec(e);
        return r ? (r[1] ? (typeof t == "string" ? r[1] === t : t.has(r[1])) : n(r[2])) : !1;
    },
    mS = (e) => rS.test(e) && !oS.test(e),
    ig = () => !1,
    hS = (e) => aS.test(e),
    vS = (e) => sS.test(e),
    gS = () => {
        const e = fe("colors"),
            t = fe("spacing"),
            n = fe("blur"),
            r = fe("brightness"),
            o = fe("borderColor"),
            a = fe("borderRadius"),
            s = fe("borderSpacing"),
            i = fe("borderWidth"),
            l = fe("contrast"),
            c = fe("grayscale"),
            u = fe("hueRotate"),
            d = fe("invert"),
            g = fe("gap"),
            p = fe("gradientColorStops"),
            C = fe("gradientColorStopPositions"),
            h = fe("inset"),
            w = fe("margin"),
            v = fe("opacity"),
            m = fe("padding"),
            y = fe("saturate"),
            S = fe("scale"),
            b = fe("sepia"),
            I = fe("skew"),
            E = fe("space"),
            N = fe("translate"),
            k = () => ["auto", "contain", "none"],
            P = () => ["auto", "hidden", "clip", "visible", "scroll"],
            _ = () => ["auto", Z, t],
            D = () => [Z, t],
            F = () => ["", Xt, yn],
            M = () => ["auto", to, Z],
            V = () => [
                "bottom",
                "center",
                "left",
                "left-bottom",
                "left-top",
                "right",
                "right-bottom",
                "right-top",
                "top",
            ],
            L = () => ["solid", "dashed", "dotted", "double", "none"],
            U = () => [
                "normal",
                "multiply",
                "screen",
                "overlay",
                "darken",
                "lighten",
                "color-dodge",
                "color-burn",
                "hard-light",
                "soft-light",
                "difference",
                "exclusion",
                "hue",
                "saturation",
                "color",
                "luminosity",
            ],
            T = () => ["start", "end", "center", "between", "around", "evenly", "stretch"],
            R = () => ["", "0", Z],
            B = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"],
            K = () => [to, Z];
        return {
            cacheSize: 500,
            separator: ":",
            theme: {
                colors: [Vo],
                spacing: [Xt, yn],
                blur: ["none", "", xn, Z],
                brightness: K(),
                borderColor: [e],
                borderRadius: ["none", "", "full", xn, Z],
                borderSpacing: D(),
                borderWidth: F(),
                contrast: K(),
                grayscale: R(),
                hueRotate: K(),
                invert: R(),
                gap: D(),
                gradientColorStops: [e],
                gradientColorStopPositions: [iS, yn],
                inset: _(),
                margin: _(),
                opacity: K(),
                padding: D(),
                saturate: K(),
                scale: K(),
                sepia: R(),
                skew: K(),
                space: D(),
                translate: D(),
            },
            classGroups: {
                aspect: [{ aspect: ["auto", "square", "video", Z] }],
                container: ["container"],
                columns: [{ columns: [xn] }],
                "break-after": [{ "break-after": B() }],
                "break-before": [{ "break-before": B() }],
                "break-inside": [{ "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"] }],
                "box-decoration": [{ "box-decoration": ["slice", "clone"] }],
                box: [{ box: ["border", "content"] }],
                display: [
                    "block",
                    "inline-block",
                    "inline",
                    "flex",
                    "inline-flex",
                    "table",
                    "inline-table",
                    "table-caption",
                    "table-cell",
                    "table-column",
                    "table-column-group",
                    "table-footer-group",
                    "table-header-group",
                    "table-row-group",
                    "table-row",
                    "flow-root",
                    "grid",
                    "inline-grid",
                    "contents",
                    "list-item",
                    "hidden",
                ],
                float: [{ float: ["right", "left", "none", "start", "end"] }],
                clear: [{ clear: ["left", "right", "both", "none", "start", "end"] }],
                isolation: ["isolate", "isolation-auto"],
                "object-fit": [{ object: ["contain", "cover", "fill", "none", "scale-down"] }],
                "object-position": [{ object: [...V(), Z] }],
                overflow: [{ overflow: P() }],
                "overflow-x": [{ "overflow-x": P() }],
                "overflow-y": [{ "overflow-y": P() }],
                overscroll: [{ overscroll: k() }],
                "overscroll-x": [{ "overscroll-x": k() }],
                "overscroll-y": [{ "overscroll-y": k() }],
                position: ["static", "fixed", "absolute", "relative", "sticky"],
                inset: [{ inset: [h] }],
                "inset-x": [{ "inset-x": [h] }],
                "inset-y": [{ "inset-y": [h] }],
                start: [{ start: [h] }],
                end: [{ end: [h] }],
                top: [{ top: [h] }],
                right: [{ right: [h] }],
                bottom: [{ bottom: [h] }],
                left: [{ left: [h] }],
                visibility: ["visible", "invisible", "collapse"],
                z: [{ z: ["auto", Uo, Z] }],
                basis: [{ basis: _() }],
                "flex-direction": [{ flex: ["row", "row-reverse", "col", "col-reverse"] }],
                "flex-wrap": [{ flex: ["wrap", "wrap-reverse", "nowrap"] }],
                flex: [{ flex: ["1", "auto", "initial", "none", Z] }],
                grow: [{ grow: R() }],
                shrink: [{ shrink: R() }],
                order: [{ order: ["first", "last", "none", Uo, Z] }],
                "grid-cols": [{ "grid-cols": [Vo] }],
                "col-start-end": [{ col: ["auto", { span: ["full", Uo, Z] }, Z] }],
                "col-start": [{ "col-start": M() }],
                "col-end": [{ "col-end": M() }],
                "grid-rows": [{ "grid-rows": [Vo] }],
                "row-start-end": [{ row: ["auto", { span: [Uo, Z] }, Z] }],
                "row-start": [{ "row-start": M() }],
                "row-end": [{ "row-end": M() }],
                "grid-flow": [{ "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"] }],
                "auto-cols": [{ "auto-cols": ["auto", "min", "max", "fr", Z] }],
                "auto-rows": [{ "auto-rows": ["auto", "min", "max", "fr", Z] }],
                gap: [{ gap: [g] }],
                "gap-x": [{ "gap-x": [g] }],
                "gap-y": [{ "gap-y": [g] }],
                "justify-content": [{ justify: ["normal", ...T()] }],
                "justify-items": [{ "justify-items": ["start", "end", "center", "stretch"] }],
                "justify-self": [{ "justify-self": ["auto", "start", "end", "center", "stretch"] }],
                "align-content": [{ content: ["normal", ...T(), "baseline"] }],
                "align-items": [{ items: ["start", "end", "center", "baseline", "stretch"] }],
                "align-self": [{ self: ["auto", "start", "end", "center", "stretch", "baseline"] }],
                "place-content": [{ "place-content": [...T(), "baseline"] }],
                "place-items": [{ "place-items": ["start", "end", "center", "baseline", "stretch"] }],
                "place-self": [{ "place-self": ["auto", "start", "end", "center", "stretch"] }],
                p: [{ p: [m] }],
                px: [{ px: [m] }],
                py: [{ py: [m] }],
                ps: [{ ps: [m] }],
                pe: [{ pe: [m] }],
                pt: [{ pt: [m] }],
                pr: [{ pr: [m] }],
                pb: [{ pb: [m] }],
                pl: [{ pl: [m] }],
                m: [{ m: [w] }],
                mx: [{ mx: [w] }],
                my: [{ my: [w] }],
                ms: [{ ms: [w] }],
                me: [{ me: [w] }],
                mt: [{ mt: [w] }],
                mr: [{ mr: [w] }],
                mb: [{ mb: [w] }],
                ml: [{ ml: [w] }],
                "space-x": [{ "space-x": [E] }],
                "space-x-reverse": ["space-x-reverse"],
                "space-y": [{ "space-y": [E] }],
                "space-y-reverse": ["space-y-reverse"],
                w: [{ w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", Z, t] }],
                "min-w": [{ "min-w": [Z, t, "min", "max", "fit"] }],
                "max-w": [{ "max-w": [Z, t, "none", "full", "min", "max", "fit", "prose", { screen: [xn] }, xn] }],
                h: [{ h: [Z, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "min-h": [{ "min-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                "max-h": [{ "max-h": [Z, t, "min", "max", "fit", "svh", "lvh", "dvh"] }],
                size: [{ size: [Z, t, "auto", "min", "max", "fit"] }],
                "font-size": [{ text: ["base", xn, yn] }],
                "font-smoothing": ["antialiased", "subpixel-antialiased"],
                "font-style": ["italic", "not-italic"],
                "font-weight": [
                    {
                        font: [
                            "thin",
                            "extralight",
                            "light",
                            "normal",
                            "medium",
                            "semibold",
                            "bold",
                            "extrabold",
                            "black",
                            zl,
                        ],
                    },
                ],
                "font-family": [{ font: [Vo] }],
                "fvn-normal": ["normal-nums"],
                "fvn-ordinal": ["ordinal"],
                "fvn-slashed-zero": ["slashed-zero"],
                "fvn-figure": ["lining-nums", "oldstyle-nums"],
                "fvn-spacing": ["proportional-nums", "tabular-nums"],
                "fvn-fraction": ["diagonal-fractions", "stacked-fractions"],
                tracking: [{ tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", Z] }],
                "line-clamp": [{ "line-clamp": ["none", to, zl] }],
                leading: [{ leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Xt, Z] }],
                "list-image": [{ "list-image": ["none", Z] }],
                "list-style-type": [{ list: ["none", "disc", "decimal", Z] }],
                "list-style-position": [{ list: ["inside", "outside"] }],
                "placeholder-color": [{ placeholder: [e] }],
                "placeholder-opacity": [{ "placeholder-opacity": [v] }],
                "text-alignment": [{ text: ["left", "center", "right", "justify", "start", "end"] }],
                "text-color": [{ text: [e] }],
                "text-opacity": [{ "text-opacity": [v] }],
                "text-decoration": ["underline", "overline", "line-through", "no-underline"],
                "text-decoration-style": [{ decoration: [...L(), "wavy"] }],
                "text-decoration-thickness": [{ decoration: ["auto", "from-font", Xt, yn] }],
                "underline-offset": [{ "underline-offset": ["auto", Xt, Z] }],
                "text-decoration-color": [{ decoration: [e] }],
                "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
                "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
                "text-wrap": [{ text: ["wrap", "nowrap", "balance", "pretty"] }],
                indent: [{ indent: D() }],
                "vertical-align": [
                    { align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", Z] },
                ],
                whitespace: [{ whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"] }],
                break: [{ break: ["normal", "words", "all", "keep"] }],
                hyphens: [{ hyphens: ["none", "manual", "auto"] }],
                content: [{ content: ["none", Z] }],
                "bg-attachment": [{ bg: ["fixed", "local", "scroll"] }],
                "bg-clip": [{ "bg-clip": ["border", "padding", "content", "text"] }],
                "bg-opacity": [{ "bg-opacity": [v] }],
                "bg-origin": [{ "bg-origin": ["border", "padding", "content"] }],
                "bg-position": [{ bg: [...V(), uS] }],
                "bg-repeat": [{ bg: ["no-repeat", { repeat: ["", "x", "y", "round", "space"] }] }],
                "bg-size": [{ bg: ["auto", "cover", "contain", cS] }],
                "bg-image": [{ bg: ["none", { "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"] }, fS] }],
                "bg-color": [{ bg: [e] }],
                "gradient-from-pos": [{ from: [C] }],
                "gradient-via-pos": [{ via: [C] }],
                "gradient-to-pos": [{ to: [C] }],
                "gradient-from": [{ from: [p] }],
                "gradient-via": [{ via: [p] }],
                "gradient-to": [{ to: [p] }],
                rounded: [{ rounded: [a] }],
                "rounded-s": [{ "rounded-s": [a] }],
                "rounded-e": [{ "rounded-e": [a] }],
                "rounded-t": [{ "rounded-t": [a] }],
                "rounded-r": [{ "rounded-r": [a] }],
                "rounded-b": [{ "rounded-b": [a] }],
                "rounded-l": [{ "rounded-l": [a] }],
                "rounded-ss": [{ "rounded-ss": [a] }],
                "rounded-se": [{ "rounded-se": [a] }],
                "rounded-ee": [{ "rounded-ee": [a] }],
                "rounded-es": [{ "rounded-es": [a] }],
                "rounded-tl": [{ "rounded-tl": [a] }],
                "rounded-tr": [{ "rounded-tr": [a] }],
                "rounded-br": [{ "rounded-br": [a] }],
                "rounded-bl": [{ "rounded-bl": [a] }],
                "border-w": [{ border: [i] }],
                "border-w-x": [{ "border-x": [i] }],
                "border-w-y": [{ "border-y": [i] }],
                "border-w-s": [{ "border-s": [i] }],
                "border-w-e": [{ "border-e": [i] }],
                "border-w-t": [{ "border-t": [i] }],
                "border-w-r": [{ "border-r": [i] }],
                "border-w-b": [{ "border-b": [i] }],
                "border-w-l": [{ "border-l": [i] }],
                "border-opacity": [{ "border-opacity": [v] }],
                "border-style": [{ border: [...L(), "hidden"] }],
                "divide-x": [{ "divide-x": [i] }],
                "divide-x-reverse": ["divide-x-reverse"],
                "divide-y": [{ "divide-y": [i] }],
                "divide-y-reverse": ["divide-y-reverse"],
                "divide-opacity": [{ "divide-opacity": [v] }],
                "divide-style": [{ divide: L() }],
                "border-color": [{ border: [o] }],
                "border-color-x": [{ "border-x": [o] }],
                "border-color-y": [{ "border-y": [o] }],
                "border-color-s": [{ "border-s": [o] }],
                "border-color-e": [{ "border-e": [o] }],
                "border-color-t": [{ "border-t": [o] }],
                "border-color-r": [{ "border-r": [o] }],
                "border-color-b": [{ "border-b": [o] }],
                "border-color-l": [{ "border-l": [o] }],
                "divide-color": [{ divide: [o] }],
                "outline-style": [{ outline: ["", ...L()] }],
                "outline-offset": [{ "outline-offset": [Xt, Z] }],
                "outline-w": [{ outline: [Xt, yn] }],
                "outline-color": [{ outline: [e] }],
                "ring-w": [{ ring: F() }],
                "ring-w-inset": ["ring-inset"],
                "ring-color": [{ ring: [e] }],
                "ring-opacity": [{ "ring-opacity": [v] }],
                "ring-offset-w": [{ "ring-offset": [Xt, yn] }],
                "ring-offset-color": [{ "ring-offset": [e] }],
                shadow: [{ shadow: ["", "inner", "none", xn, pS] }],
                "shadow-color": [{ shadow: [Vo] }],
                opacity: [{ opacity: [v] }],
                "mix-blend": [{ "mix-blend": [...U(), "plus-lighter", "plus-darker"] }],
                "bg-blend": [{ "bg-blend": U() }],
                filter: [{ filter: ["", "none"] }],
                blur: [{ blur: [n] }],
                brightness: [{ brightness: [r] }],
                contrast: [{ contrast: [l] }],
                "drop-shadow": [{ "drop-shadow": ["", "none", xn, Z] }],
                grayscale: [{ grayscale: [c] }],
                "hue-rotate": [{ "hue-rotate": [u] }],
                invert: [{ invert: [d] }],
                saturate: [{ saturate: [y] }],
                sepia: [{ sepia: [b] }],
                "backdrop-filter": [{ "backdrop-filter": ["", "none"] }],
                "backdrop-blur": [{ "backdrop-blur": [n] }],
                "backdrop-brightness": [{ "backdrop-brightness": [r] }],
                "backdrop-contrast": [{ "backdrop-contrast": [l] }],
                "backdrop-grayscale": [{ "backdrop-grayscale": [c] }],
                "backdrop-hue-rotate": [{ "backdrop-hue-rotate": [u] }],
                "backdrop-invert": [{ "backdrop-invert": [d] }],
                "backdrop-opacity": [{ "backdrop-opacity": [v] }],
                "backdrop-saturate": [{ "backdrop-saturate": [y] }],
                "backdrop-sepia": [{ "backdrop-sepia": [b] }],
                "border-collapse": [{ border: ["collapse", "separate"] }],
                "border-spacing": [{ "border-spacing": [s] }],
                "border-spacing-x": [{ "border-spacing-x": [s] }],
                "border-spacing-y": [{ "border-spacing-y": [s] }],
                "table-layout": [{ table: ["auto", "fixed"] }],
                caption: [{ caption: ["top", "bottom"] }],
                transition: [{ transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", Z] }],
                duration: [{ duration: K() }],
                ease: [{ ease: ["linear", "in", "out", "in-out", Z] }],
                delay: [{ delay: K() }],
                animate: [{ animate: ["none", "spin", "ping", "pulse", "bounce", Z] }],
                transform: [{ transform: ["", "gpu", "none"] }],
                scale: [{ scale: [S] }],
                "scale-x": [{ "scale-x": [S] }],
                "scale-y": [{ "scale-y": [S] }],
                rotate: [{ rotate: [Uo, Z] }],
                "translate-x": [{ "translate-x": [N] }],
                "translate-y": [{ "translate-y": [N] }],
                "skew-x": [{ "skew-x": [I] }],
                "skew-y": [{ "skew-y": [I] }],
                "transform-origin": [
                    {
                        origin: [
                            "center",
                            "top",
                            "top-right",
                            "right",
                            "bottom-right",
                            "bottom",
                            "bottom-left",
                            "left",
                            "top-left",
                            Z,
                        ],
                    },
                ],
                accent: [{ accent: ["auto", e] }],
                appearance: [{ appearance: ["none", "auto"] }],
                cursor: [
                    {
                        cursor: [
                            "auto",
                            "default",
                            "pointer",
                            "wait",
                            "text",
                            "move",
                            "help",
                            "not-allowed",
                            "none",
                            "context-menu",
                            "progress",
                            "cell",
                            "crosshair",
                            "vertical-text",
                            "alias",
                            "copy",
                            "no-drop",
                            "grab",
                            "grabbing",
                            "all-scroll",
                            "col-resize",
                            "row-resize",
                            "n-resize",
                            "e-resize",
                            "s-resize",
                            "w-resize",
                            "ne-resize",
                            "nw-resize",
                            "se-resize",
                            "sw-resize",
                            "ew-resize",
                            "ns-resize",
                            "nesw-resize",
                            "nwse-resize",
                            "zoom-in",
                            "zoom-out",
                            Z,
                        ],
                    },
                ],
                "caret-color": [{ caret: [e] }],
                "pointer-events": [{ "pointer-events": ["none", "auto"] }],
                resize: [{ resize: ["none", "y", "x", ""] }],
                "scroll-behavior": [{ scroll: ["auto", "smooth"] }],
                "scroll-m": [{ "scroll-m": D() }],
                "scroll-mx": [{ "scroll-mx": D() }],
                "scroll-my": [{ "scroll-my": D() }],
                "scroll-ms": [{ "scroll-ms": D() }],
                "scroll-me": [{ "scroll-me": D() }],
                "scroll-mt": [{ "scroll-mt": D() }],
                "scroll-mr": [{ "scroll-mr": D() }],
                "scroll-mb": [{ "scroll-mb": D() }],
                "scroll-ml": [{ "scroll-ml": D() }],
                "scroll-p": [{ "scroll-p": D() }],
                "scroll-px": [{ "scroll-px": D() }],
                "scroll-py": [{ "scroll-py": D() }],
                "scroll-ps": [{ "scroll-ps": D() }],
                "scroll-pe": [{ "scroll-pe": D() }],
                "scroll-pt": [{ "scroll-pt": D() }],
                "scroll-pr": [{ "scroll-pr": D() }],
                "scroll-pb": [{ "scroll-pb": D() }],
                "scroll-pl": [{ "scroll-pl": D() }],
                "snap-align": [{ snap: ["start", "end", "center", "align-none"] }],
                "snap-stop": [{ snap: ["normal", "always"] }],
                "snap-type": [{ snap: ["none", "x", "y", "both"] }],
                "snap-strictness": [{ snap: ["mandatory", "proximity"] }],
                touch: [{ touch: ["auto", "none", "manipulation"] }],
                "touch-x": [{ "touch-pan": ["x", "left", "right"] }],
                "touch-y": [{ "touch-pan": ["y", "up", "down"] }],
                "touch-pz": ["touch-pinch-zoom"],
                select: [{ select: ["none", "text", "all", "auto"] }],
                "will-change": [{ "will-change": ["auto", "scroll", "contents", "transform", Z] }],
                fill: [{ fill: [e, "none"] }],
                "stroke-w": [{ stroke: [Xt, yn, zl] }],
                stroke: [{ stroke: [e, "none"] }],
                sr: ["sr-only", "not-sr-only"],
                "forced-color-adjust": [{ "forced-color-adjust": ["auto", "none"] }],
            },
            conflictingClassGroups: {
                overflow: ["overflow-x", "overflow-y"],
                overscroll: ["overscroll-x", "overscroll-y"],
                inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
                "inset-x": ["right", "left"],
                "inset-y": ["top", "bottom"],
                flex: ["basis", "grow", "shrink"],
                gap: ["gap-x", "gap-y"],
                p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
                px: ["pr", "pl"],
                py: ["pt", "pb"],
                m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
                mx: ["mr", "ml"],
                my: ["mt", "mb"],
                size: ["w", "h"],
                "font-size": ["leading"],
                "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
                "fvn-ordinal": ["fvn-normal"],
                "fvn-slashed-zero": ["fvn-normal"],
                "fvn-figure": ["fvn-normal"],
                "fvn-spacing": ["fvn-normal"],
                "fvn-fraction": ["fvn-normal"],
                "line-clamp": ["display", "overflow"],
                rounded: [
                    "rounded-s",
                    "rounded-e",
                    "rounded-t",
                    "rounded-r",
                    "rounded-b",
                    "rounded-l",
                    "rounded-ss",
                    "rounded-se",
                    "rounded-ee",
                    "rounded-es",
                    "rounded-tl",
                    "rounded-tr",
                    "rounded-br",
                    "rounded-bl",
                ],
                "rounded-s": ["rounded-ss", "rounded-es"],
                "rounded-e": ["rounded-se", "rounded-ee"],
                "rounded-t": ["rounded-tl", "rounded-tr"],
                "rounded-r": ["rounded-tr", "rounded-br"],
                "rounded-b": ["rounded-br", "rounded-bl"],
                "rounded-l": ["rounded-tl", "rounded-bl"],
                "border-spacing": ["border-spacing-x", "border-spacing-y"],
                "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
                "border-w-x": ["border-w-r", "border-w-l"],
                "border-w-y": ["border-w-t", "border-w-b"],
                "border-color": [
                    "border-color-s",
                    "border-color-e",
                    "border-color-t",
                    "border-color-r",
                    "border-color-b",
                    "border-color-l",
                ],
                "border-color-x": ["border-color-r", "border-color-l"],
                "border-color-y": ["border-color-t", "border-color-b"],
                "scroll-m": [
                    "scroll-mx",
                    "scroll-my",
                    "scroll-ms",
                    "scroll-me",
                    "scroll-mt",
                    "scroll-mr",
                    "scroll-mb",
                    "scroll-ml",
                ],
                "scroll-mx": ["scroll-mr", "scroll-ml"],
                "scroll-my": ["scroll-mt", "scroll-mb"],
                "scroll-p": [
                    "scroll-px",
                    "scroll-py",
                    "scroll-ps",
                    "scroll-pe",
                    "scroll-pt",
                    "scroll-pr",
                    "scroll-pb",
                    "scroll-pl",
                ],
                "scroll-px": ["scroll-pr", "scroll-pl"],
                "scroll-py": ["scroll-pt", "scroll-pb"],
                touch: ["touch-x", "touch-y", "touch-pz"],
                "touch-x": ["touch"],
                "touch-y": ["touch"],
                "touch-pz": ["touch"],
            },
            conflictingClassGroupModifiers: { "font-size": ["leading"] },
        };
    },
    yS = J1(gS);
function ae(...e) {
    return yS(eg(e));
}
const xS = T1,
    lg = f.forwardRef(({ className: e, ...t }, n) =>
        x.jsx(Qv, {
            "data-lov-id": "src/components/ui/toast.tsx:14:2",
            "data-lov-name": "ToastPrimitives.Viewport",
            "data-component-path": "src/components/ui/toast.tsx",
            "data-component-line": "14",
            "data-component-file": "toast.tsx",
            "data-component-name": "ToastPrimitives.Viewport",
            "data-component-content": "%7B%7D",
            ref: n,
            className: ae(
                "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
                e
            ),
            ...t,
        })
    );
lg.displayName = Qv.displayName;
const wS = zi(
        "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        {
            variants: {
                variant: {
                    default: "border bg-background text-foreground",
                    destructive: "destructive group border-destructive bg-destructive text-destructive-foreground",
                },
            },
            defaultVariants: { variant: "default" },
        }
    ),
    cg = f.forwardRef(({ className: e, variant: t, ...n }, r) =>
        x.jsx(Gv, {
            "data-lov-id": "src/components/ui/toast.tsx:47:4",
            "data-lov-name": "ToastPrimitives.Root",
            "data-component-path": "src/components/ui/toast.tsx",
            "data-component-line": "47",
            "data-component-file": "toast.tsx",
            "data-component-name": "ToastPrimitives.Root",
            "data-component-content": "%7B%7D",
            ref: r,
            className: ae(wS({ variant: t }), e),
            ...n,
        })
    );
cg.displayName = Gv.displayName;
const SS = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(qv, {
        "data-lov-id": "src/components/ui/toast.tsx:60:2",
        "data-lov-name": "ToastPrimitives.Action",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "60",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Action",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae(
            "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-muted/40 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
            e
        ),
        ...t,
    })
);
SS.displayName = qv.displayName;
const ug = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(Zv, {
        "data-lov-id": "src/components/ui/toast.tsx:75:2",
        "data-lov-name": "ToastPrimitives.Close",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "75",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Close",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae(
            "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100 group-[.destructive]:text-red-300 group-[.destructive]:hover:text-red-50 group-[.destructive]:focus:ring-red-400 group-[.destructive]:focus:ring-offset-red-600",
            e
        ),
        "toast-close": "",
        ...t,
        children: x.jsx(z1, {
            "data-lov-id": "src/components/ui/toast.tsx:84:4",
            "data-lov-name": "X",
            "data-component-path": "src/components/ui/toast.tsx",
            "data-component-line": "84",
            "data-component-file": "toast.tsx",
            "data-component-name": "X",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4",
        }),
    })
);
ug.displayName = Zv.displayName;
const dg = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(Yv, {
        "data-lov-id": "src/components/ui/toast.tsx:93:2",
        "data-lov-name": "ToastPrimitives.Title",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "93",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Title",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("text-sm font-semibold", e),
        ...t,
    })
);
dg.displayName = Yv.displayName;
const fg = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(Xv, {
        "data-lov-id": "src/components/ui/toast.tsx:105:2",
        "data-lov-name": "ToastPrimitives.Description",
        "data-component-path": "src/components/ui/toast.tsx",
        "data-component-line": "105",
        "data-component-file": "toast.tsx",
        "data-component-name": "ToastPrimitives.Description",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("text-sm opacity-90", e),
        ...t,
    })
);
fg.displayName = Xv.displayName;
function CS() {
    const { toasts: e } = Pv();
    return x.jsxs(xS, {
        "data-lov-id": "src/components/ui/toaster.tsx:15:4",
        "data-lov-name": "ToastProvider",
        "data-component-path": "src/components/ui/toaster.tsx",
        "data-component-line": "15",
        "data-component-file": "toaster.tsx",
        "data-component-name": "ToastProvider",
        "data-component-content": "%7B%7D",
        children: [
            e.map(function ({ id: t, title: n, description: r, action: o, ...a }) {
                return x.jsxs(
                    cg,
                    {
                        "data-lov-id": "src/components/ui/toaster.tsx:18:10",
                        "data-lov-name": "Toast",
                        "data-component-path": "src/components/ui/toaster.tsx",
                        "data-component-line": "18",
                        "data-component-file": "toaster.tsx",
                        "data-component-name": "Toast",
                        "data-component-content": "%7B%7D",
                        ...a,
                        children: [
                            x.jsxs("div", {
                                "data-lov-id": "src/components/ui/toaster.tsx:19:12",
                                "data-lov-name": "div",
                                "data-component-path": "src/components/ui/toaster.tsx",
                                "data-component-line": "19",
                                "data-component-file": "toaster.tsx",
                                "data-component-name": "div",
                                "data-component-content": "%7B%22className%22%3A%22grid%20gap-1%22%7D",
                                className: "grid gap-1",
                                children: [
                                    n &&
                                        x.jsx(dg, {
                                            "data-lov-id": "src/components/ui/toaster.tsx:20:24",
                                            "data-lov-name": "ToastTitle",
                                            "data-component-path": "src/components/ui/toaster.tsx",
                                            "data-component-line": "20",
                                            "data-component-file": "toaster.tsx",
                                            "data-component-name": "ToastTitle",
                                            "data-component-content": "%7B%7D",
                                            children: n,
                                        }),
                                    r &&
                                        x.jsx(fg, {
                                            "data-lov-id": "src/components/ui/toaster.tsx:22:16",
                                            "data-lov-name": "ToastDescription",
                                            "data-component-path": "src/components/ui/toaster.tsx",
                                            "data-component-line": "22",
                                            "data-component-file": "toaster.tsx",
                                            "data-component-name": "ToastDescription",
                                            "data-component-content": "%7B%7D",
                                            children: r,
                                        }),
                                ],
                            }),
                            o,
                            x.jsx(ug, {
                                "data-lov-id": "src/components/ui/toaster.tsx:26:12",
                                "data-lov-name": "ToastClose",
                                "data-component-path": "src/components/ui/toaster.tsx",
                                "data-component-line": "26",
                                "data-component-file": "toaster.tsx",
                                "data-component-name": "ToastClose",
                                "data-component-content": "%7B%7D",
                            }),
                        ],
                    },
                    t
                );
            }),
            x.jsx(lg, {
                "data-lov-id": "src/components/ui/toaster.tsx:30:6",
                "data-lov-name": "ToastViewport",
                "data-component-path": "src/components/ui/toaster.tsx",
                "data-component-line": "30",
                "data-component-file": "toaster.tsx",
                "data-component-name": "ToastViewport",
                "data-component-content": "%7B%7D",
            }),
        ],
    });
}
var fp = ["light", "dark"],
    bS = "(prefers-color-scheme: dark)",
    ES = f.createContext(void 0),
    TS = { setTheme: (e) => {}, themes: [] },
    PS = () => {
        var e;
        return (e = f.useContext(ES)) != null ? e : TS;
    };
f.memo(
    ({
        forcedTheme: e,
        storageKey: t,
        attribute: n,
        enableSystem: r,
        enableColorScheme: o,
        defaultTheme: a,
        value: s,
        attrs: i,
        nonce: l,
    }) => {
        let c = a === "system",
            u =
                n === "class"
                    ? `var d=document.documentElement,c=d.classList;${`c.remove(${i.map((C) => `'${C}'`).join(",")})`};`
                    : `var d=document.documentElement,n='${n}',s='setAttribute';`,
            d = o
                ? fp.includes(a) && a
                    ? `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${a}'`
                    : "if(e==='light'||e==='dark')d.style.colorScheme=e"
                : "",
            g = (C, h = !1, w = !0) => {
                let v = s ? s[C] : C,
                    m = h ? C + "|| ''" : `'${v}'`,
                    y = "";
                return (
                    o && w && !h && fp.includes(C) && (y += `d.style.colorScheme = '${C}';`),
                    n === "class" ? (h || v ? (y += `c.add(${m})`) : (y += "null")) : v && (y += `d[s](n,${m})`),
                    y
                );
            },
            p = e
                ? `!function(){${u}${g(e)}}()`
                : r
                  ? `!function(){try{${u}var e=localStorage.getItem('${t}');if('system'===e||(!e&&${c})){var t='${bS}',m=window.matchMedia(t);if(m.media!==t||m.matches){${g("dark")}}else{${g("light")}}}else if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}${c ? "" : "else{" + g(a, !1, !1) + "}"}${d}}catch(e){}}()`
                  : `!function(){try{${u}var e=localStorage.getItem('${t}');if(e){${s ? `var x=${JSON.stringify(s)};` : ""}${g(s ? "x[e]" : "e", !0)}}else{${g(a, !1, !1)};}${d}}catch(t){}}();`;
        return f.createElement("script", { nonce: l, dangerouslySetInnerHTML: { __html: p } });
    }
);
var IS = (e) => {
        switch (e) {
            case "success":
                return RS;
            case "info":
                return DS;
            case "warning":
                return AS;
            case "error":
                return _S;
            default:
                return null;
        }
    },
    kS = Array(12).fill(0),
    NS = ({ visible: e, className: t }) =>
        j.createElement(
            "div",
            { className: ["sonner-loading-wrapper", t].filter(Boolean).join(" "), "data-visible": e },
            j.createElement(
                "div",
                { className: "sonner-spinner" },
                kS.map((n, r) => j.createElement("div", { className: "sonner-loading-bar", key: `spinner-bar-${r}` }))
            )
        ),
    RS = j.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        j.createElement("path", {
            fillRule: "evenodd",
            d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",
            clipRule: "evenodd",
        })
    ),
    AS = j.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 24 24", fill: "currentColor", height: "20", width: "20" },
        j.createElement("path", {
            fillRule: "evenodd",
            d: "M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",
            clipRule: "evenodd",
        })
    ),
    DS = j.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        j.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",
            clipRule: "evenodd",
        })
    ),
    _S = j.createElement(
        "svg",
        { xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", height: "20", width: "20" },
        j.createElement("path", {
            fillRule: "evenodd",
            d: "M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",
            clipRule: "evenodd",
        })
    ),
    MS = j.createElement(
        "svg",
        {
            xmlns: "http://www.w3.org/2000/svg",
            width: "12",
            height: "12",
            viewBox: "0 0 24 24",
            fill: "none",
            stroke: "currentColor",
            strokeWidth: "1.5",
            strokeLinecap: "round",
            strokeLinejoin: "round",
        },
        j.createElement("line", { x1: "18", y1: "6", x2: "6", y2: "18" }),
        j.createElement("line", { x1: "6", y1: "6", x2: "18", y2: "18" })
    ),
    OS = () => {
        let [e, t] = j.useState(document.hidden);
        return (
            j.useEffect(() => {
                let n = () => {
                    t(document.hidden);
                };
                return (
                    document.addEventListener("visibilitychange", n),
                    () => window.removeEventListener("visibilitychange", n)
                );
            }, []),
            e
        );
    },
    Yc = 1,
    jS = class {
        constructor() {
            (this.subscribe = (e) => (
                this.subscribers.push(e),
                () => {
                    let t = this.subscribers.indexOf(e);
                    this.subscribers.splice(t, 1);
                }
            )),
                (this.publish = (e) => {
                    this.subscribers.forEach((t) => t(e));
                }),
                (this.addToast = (e) => {
                    this.publish(e), (this.toasts = [...this.toasts, e]);
                }),
                (this.create = (e) => {
                    var t;
                    let { message: n, ...r } = e,
                        o =
                            typeof (e == null ? void 0 : e.id) == "number" ||
                            ((t = e.id) == null ? void 0 : t.length) > 0
                                ? e.id
                                : Yc++,
                        a = this.toasts.find((i) => i.id === o),
                        s = e.dismissible === void 0 ? !0 : e.dismissible;
                    return (
                        this.dismissedToasts.has(o) && this.dismissedToasts.delete(o),
                        a
                            ? (this.toasts = this.toasts.map((i) =>
                                  i.id === o
                                      ? (this.publish({ ...i, ...e, id: o, title: n }),
                                        { ...i, ...e, id: o, dismissible: s, title: n })
                                      : i
                              ))
                            : this.addToast({ title: n, ...r, dismissible: s, id: o }),
                        o
                    );
                }),
                (this.dismiss = (e) => (
                    this.dismissedToasts.add(e),
                    e ||
                        this.toasts.forEach((t) => {
                            this.subscribers.forEach((n) => n({ id: t.id, dismiss: !0 }));
                        }),
                    this.subscribers.forEach((t) => t({ id: e, dismiss: !0 })),
                    e
                )),
                (this.message = (e, t) => this.create({ ...t, message: e })),
                (this.error = (e, t) => this.create({ ...t, message: e, type: "error" })),
                (this.success = (e, t) => this.create({ ...t, type: "success", message: e })),
                (this.info = (e, t) => this.create({ ...t, type: "info", message: e })),
                (this.warning = (e, t) => this.create({ ...t, type: "warning", message: e })),
                (this.loading = (e, t) => this.create({ ...t, type: "loading", message: e })),
                (this.promise = (e, t) => {
                    if (!t) return;
                    let n;
                    t.loading !== void 0 &&
                        (n = this.create({
                            ...t,
                            promise: e,
                            type: "loading",
                            message: t.loading,
                            description: typeof t.description != "function" ? t.description : void 0,
                        }));
                    let r = e instanceof Promise ? e : e(),
                        o = n !== void 0,
                        a,
                        s = r
                            .then(async (l) => {
                                if (((a = ["resolve", l]), j.isValidElement(l)))
                                    (o = !1), this.create({ id: n, type: "default", message: l });
                                else if (FS(l) && !l.ok) {
                                    o = !1;
                                    let c =
                                            typeof t.error == "function"
                                                ? await t.error(`HTTP error! status: ${l.status}`)
                                                : t.error,
                                        u =
                                            typeof t.description == "function"
                                                ? await t.description(`HTTP error! status: ${l.status}`)
                                                : t.description;
                                    this.create({ id: n, type: "error", message: c, description: u });
                                } else if (t.success !== void 0) {
                                    o = !1;
                                    let c = typeof t.success == "function" ? await t.success(l) : t.success,
                                        u = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "success", message: c, description: u });
                                }
                            })
                            .catch(async (l) => {
                                if (((a = ["reject", l]), t.error !== void 0)) {
                                    o = !1;
                                    let c = typeof t.error == "function" ? await t.error(l) : t.error,
                                        u = typeof t.description == "function" ? await t.description(l) : t.description;
                                    this.create({ id: n, type: "error", message: c, description: u });
                                }
                            })
                            .finally(() => {
                                var l;
                                o && (this.dismiss(n), (n = void 0)), (l = t.finally) == null || l.call(t);
                            }),
                        i = () => new Promise((l, c) => s.then(() => (a[0] === "reject" ? c(a[1]) : l(a[1]))).catch(c));
                    return typeof n != "string" && typeof n != "number"
                        ? { unwrap: i }
                        : Object.assign(n, { unwrap: i });
                }),
                (this.custom = (e, t) => {
                    let n = (t == null ? void 0 : t.id) || Yc++;
                    return this.create({ jsx: e(n), id: n, ...t }), n;
                }),
                (this.getActiveToasts = () => this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
                (this.subscribers = []),
                (this.toasts = []),
                (this.dismissedToasts = new Set());
        }
    },
    Ye = new jS(),
    LS = (e, t) => {
        let n = (t == null ? void 0 : t.id) || Yc++;
        return Ye.addToast({ title: e, ...t, id: n }), n;
    },
    FS = (e) =>
        e &&
        typeof e == "object" &&
        "ok" in e &&
        typeof e.ok == "boolean" &&
        "status" in e &&
        typeof e.status == "number",
    BS = LS,
    zS = () => Ye.toasts,
    $S = () => Ye.getActiveToasts();
Object.assign(
    BS,
    {
        success: Ye.success,
        info: Ye.info,
        warning: Ye.warning,
        error: Ye.error,
        custom: Ye.custom,
        message: Ye.message,
        promise: Ye.promise,
        dismiss: Ye.dismiss,
        loading: Ye.loading,
    },
    { getHistory: zS, getToasts: $S }
);
function US(e, { insertAt: t } = {}) {
    if (typeof document > "u") return;
    let n = document.head || document.getElementsByTagName("head")[0],
        r = document.createElement("style");
    (r.type = "text/css"),
        t === "top" && n.firstChild ? n.insertBefore(r, n.firstChild) : n.appendChild(r),
        r.styleSheet ? (r.styleSheet.cssText = e) : r.appendChild(document.createTextNode(e));
}
US(`:where(html[dir="ltr"]),:where([data-sonner-toaster][dir="ltr"]){--toast-icon-margin-start: -3px;--toast-icon-margin-end: 4px;--toast-svg-margin-start: -1px;--toast-svg-margin-end: 0px;--toast-button-margin-start: auto;--toast-button-margin-end: 0;--toast-close-button-start: 0;--toast-close-button-end: unset;--toast-close-button-transform: translate(-35%, -35%)}:where(html[dir="rtl"]),:where([data-sonner-toaster][dir="rtl"]){--toast-icon-margin-start: 4px;--toast-icon-margin-end: -3px;--toast-svg-margin-start: 0px;--toast-svg-margin-end: -1px;--toast-button-margin-start: 0;--toast-button-margin-end: auto;--toast-close-button-start: unset;--toast-close-button-end: 0;--toast-close-button-transform: translate(35%, -35%)}:where([data-sonner-toaster]){position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1: hsl(0, 0%, 99%);--gray2: hsl(0, 0%, 97.3%);--gray3: hsl(0, 0%, 95.1%);--gray4: hsl(0, 0%, 93%);--gray5: hsl(0, 0%, 90.9%);--gray6: hsl(0, 0%, 88.7%);--gray7: hsl(0, 0%, 85.8%);--gray8: hsl(0, 0%, 78%);--gray9: hsl(0, 0%, 56.1%);--gray10: hsl(0, 0%, 52.3%);--gray11: hsl(0, 0%, 43.5%);--gray12: hsl(0, 0%, 9%);--border-radius: 8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:none;z-index:999999999;transition:transform .4s ease}:where([data-sonner-toaster][data-lifted="true"]){transform:translateY(-10px)}@media (hover: none) and (pointer: coarse){:where([data-sonner-toaster][data-lifted="true"]){transform:none}}:where([data-sonner-toaster][data-x-position="right"]){right:var(--offset-right)}:where([data-sonner-toaster][data-x-position="left"]){left:var(--offset-left)}:where([data-sonner-toaster][data-x-position="center"]){left:50%;transform:translate(-50%)}:where([data-sonner-toaster][data-y-position="top"]){top:var(--offset-top)}:where([data-sonner-toaster][data-y-position="bottom"]){bottom:var(--offset-bottom)}:where([data-sonner-toast]){--y: translateY(100%);--lift-amount: calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);filter:blur(0);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:none;overflow-wrap:anywhere}:where([data-sonner-toast][data-styled="true"]){padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px #0000001a;width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}:where([data-sonner-toast]:focus-visible){box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast][data-y-position="top"]){top:0;--y: translateY(-100%);--lift: 1;--lift-amount: calc(1 * var(--gap))}:where([data-sonner-toast][data-y-position="bottom"]){bottom:0;--y: translateY(100%);--lift: -1;--lift-amount: calc(var(--lift) * var(--gap))}:where([data-sonner-toast]) :where([data-description]){font-weight:400;line-height:1.4;color:inherit}:where([data-sonner-toast]) :where([data-title]){font-weight:500;line-height:1.5;color:inherit}:where([data-sonner-toast]) :where([data-icon]){display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}:where([data-sonner-toast][data-promise="true"]) :where([data-icon])>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}:where([data-sonner-toast]) :where([data-icon])>*{flex-shrink:0}:where([data-sonner-toast]) :where([data-icon]) svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}:where([data-sonner-toast]) :where([data-content]){display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;cursor:pointer;outline:none;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}:where([data-sonner-toast]) :where([data-button]):focus-visible{box-shadow:0 0 0 2px #0006}:where([data-sonner-toast]) :where([data-button]):first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}:where([data-sonner-toast]) :where([data-cancel]){color:var(--normal-text);background:rgba(0,0,0,.08)}:where([data-sonner-toast][data-theme="dark"]) :where([data-cancel]){background:rgba(255,255,255,.3)}:where([data-sonner-toast]) :where([data-close-button]){position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast] [data-close-button]{background:var(--gray1)}:where([data-sonner-toast]) :where([data-close-button]):focus-visible{box-shadow:0 4px 12px #0000001a,0 0 0 2px #0003}:where([data-sonner-toast]) :where([data-disabled="true"]){cursor:not-allowed}:where([data-sonner-toast]):hover :where([data-close-button]):hover{background:var(--gray2);border-color:var(--gray5)}:where([data-sonner-toast][data-swiping="true"]):before{content:"";position:absolute;left:-50%;right:-50%;height:100%;z-index:-1}:where([data-sonner-toast][data-y-position="top"][data-swiping="true"]):before{bottom:50%;transform:scaleY(3) translateY(50%)}:where([data-sonner-toast][data-y-position="bottom"][data-swiping="true"]):before{top:50%;transform:scaleY(3) translateY(-50%)}:where([data-sonner-toast][data-swiping="false"][data-removed="true"]):before{content:"";position:absolute;inset:0;transform:scaleY(2)}:where([data-sonner-toast]):after{content:"";position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}:where([data-sonner-toast][data-mounted="true"]){--y: translateY(0);opacity:1}:where([data-sonner-toast][data-expanded="false"][data-front="false"]){--scale: var(--toasts-before) * .05 + 1;--y: translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}:where([data-sonner-toast])>*{transition:opacity .4s}:where([data-sonner-toast][data-expanded="false"][data-front="false"][data-styled="true"])>*{opacity:0}:where([data-sonner-toast][data-visible="false"]){opacity:0;pointer-events:none}:where([data-sonner-toast][data-mounted="true"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}:where([data-sonner-toast][data-removed="true"][data-front="true"][data-swipe-out="false"]){--y: translateY(calc(var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="true"]){--y: translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}:where([data-sonner-toast][data-removed="true"][data-front="false"][data-swipe-out="false"][data-expanded="false"]){--y: translateY(40%);opacity:0;transition:transform .5s,opacity .2s}:where([data-sonner-toast][data-removed="true"][data-front="false"]):before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y, 0px)) translate(var(--swipe-amount-x, 0px));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{0%{transform:var(--y) translate(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translate(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{0%{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width: 600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-theme=light]{--normal-bg: #fff;--normal-border: var(--gray4);--normal-text: var(--gray12);--success-bg: hsl(143, 85%, 96%);--success-border: hsl(145, 92%, 91%);--success-text: hsl(140, 100%, 27%);--info-bg: hsl(208, 100%, 97%);--info-border: hsl(221, 91%, 91%);--info-text: hsl(210, 92%, 45%);--warning-bg: hsl(49, 100%, 97%);--warning-border: hsl(49, 91%, 91%);--warning-text: hsl(31, 92%, 45%);--error-bg: hsl(359, 100%, 97%);--error-border: hsl(359, 100%, 94%);--error-text: hsl(360, 100%, 45%)}[data-sonner-toaster][data-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg: #000;--normal-border: hsl(0, 0%, 20%);--normal-text: var(--gray1)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg: #fff;--normal-border: var(--gray3);--normal-text: var(--gray12)}[data-sonner-toaster][data-theme=dark]{--normal-bg: #000;--normal-bg-hover: hsl(0, 0%, 12%);--normal-border: hsl(0, 0%, 20%);--normal-border-hover: hsl(0, 0%, 25%);--normal-text: var(--gray1);--success-bg: hsl(150, 100%, 6%);--success-border: hsl(147, 100%, 12%);--success-text: hsl(150, 86%, 65%);--info-bg: hsl(215, 100%, 6%);--info-border: hsl(223, 100%, 12%);--info-text: hsl(216, 87%, 65%);--warning-bg: hsl(64, 100%, 6%);--warning-border: hsl(60, 100%, 12%);--warning-text: hsl(46, 87%, 65%);--error-bg: hsl(358, 76%, 10%);--error-border: hsl(357, 89%, 16%);--error-text: hsl(358, 100%, 81%)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success],[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info],[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning],[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error],[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size: 16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:nth-child(1){animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}to{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}to{opacity:.15}}@media (prefers-reduced-motion){[data-sonner-toast],[data-sonner-toast]>*,.sonner-loading-bar{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}
`);
function us(e) {
    return e.label !== void 0;
}
var VS = 3,
    WS = "32px",
    HS = "16px",
    pp = 4e3,
    KS = 356,
    QS = 14,
    GS = 20,
    YS = 200;
function bt(...e) {
    return e.filter(Boolean).join(" ");
}
function XS(e) {
    let [t, n] = e.split("-"),
        r = [];
    return t && r.push(t), n && r.push(n), r;
}
var qS = (e) => {
    var t, n, r, o, a, s, i, l, c, u, d;
    let {
            invert: g,
            toast: p,
            unstyled: C,
            interacting: h,
            setHeights: w,
            visibleToasts: v,
            heights: m,
            index: y,
            toasts: S,
            expanded: b,
            removeToast: I,
            defaultRichColors: E,
            closeButton: N,
            style: k,
            cancelButtonStyle: P,
            actionButtonStyle: _,
            className: D = "",
            descriptionClassName: F = "",
            duration: M,
            position: V,
            gap: L,
            loadingIcon: U,
            expandByDefault: T,
            classNames: R,
            icons: B,
            closeButtonAriaLabel: K = "Close toast",
            pauseWhenPageIsHidden: W,
        } = e,
        [q, G] = j.useState(null),
        [de, we] = j.useState(null),
        [z, se] = j.useState(!1),
        [Se, oe] = j.useState(!1),
        [te, re] = j.useState(!1),
        [Le, ct] = j.useState(!1),
        [Zn, pn] = j.useState(!1),
        [Jn, Do] = j.useState(0),
        [kr, Fd] = j.useState(0),
        _o = j.useRef(p.duration || M || pp),
        Bd = j.useRef(null),
        er = j.useRef(null),
        Xx = y === 0,
        qx = y + 1 <= v,
        ut = p.type,
        Nr = p.dismissible !== !1,
        Zx = p.className || "",
        Jx = p.descriptionClassName || "",
        Ua = j.useMemo(() => m.findIndex((Y) => Y.toastId === p.id) || 0, [m, p.id]),
        e0 = j.useMemo(() => {
            var Y;
            return (Y = p.closeButton) != null ? Y : N;
        }, [p.closeButton, N]),
        zd = j.useMemo(() => p.duration || M || pp, [p.duration, M]),
        il = j.useRef(0),
        Rr = j.useRef(0),
        $d = j.useRef(0),
        Ar = j.useRef(null),
        [t0, n0] = V.split("-"),
        Ud = j.useMemo(() => m.reduce((Y, ce, he) => (he >= Ua ? Y : Y + ce.height), 0), [m, Ua]),
        Vd = OS(),
        r0 = p.invert || g,
        ll = ut === "loading";
    (Rr.current = j.useMemo(() => Ua * L + Ud, [Ua, Ud])),
        j.useEffect(() => {
            _o.current = zd;
        }, [zd]),
        j.useEffect(() => {
            se(!0);
        }, []),
        j.useEffect(() => {
            let Y = er.current;
            if (Y) {
                let ce = Y.getBoundingClientRect().height;
                return (
                    Fd(ce),
                    w((he) => [{ toastId: p.id, height: ce, position: p.position }, ...he]),
                    () => w((he) => he.filter((xt) => xt.toastId !== p.id))
                );
            }
        }, [w, p.id]),
        j.useLayoutEffect(() => {
            if (!z) return;
            let Y = er.current,
                ce = Y.style.height;
            Y.style.height = "auto";
            let he = Y.getBoundingClientRect().height;
            (Y.style.height = ce),
                Fd(he),
                w((xt) =>
                    xt.find((wt) => wt.toastId === p.id)
                        ? xt.map((wt) => (wt.toastId === p.id ? { ...wt, height: he } : wt))
                        : [{ toastId: p.id, height: he, position: p.position }, ...xt]
                );
        }, [z, p.title, p.description, w, p.id]);
    let mn = j.useCallback(() => {
        oe(!0),
            Do(Rr.current),
            w((Y) => Y.filter((ce) => ce.toastId !== p.id)),
            setTimeout(() => {
                I(p);
            }, YS);
    }, [p, I, w, Rr]);
    j.useEffect(() => {
        if ((p.promise && ut === "loading") || p.duration === 1 / 0 || p.type === "loading") return;
        let Y;
        return (
            b || h || (W && Vd)
                ? (() => {
                      if ($d.current < il.current) {
                          let ce = new Date().getTime() - il.current;
                          _o.current = _o.current - ce;
                      }
                      $d.current = new Date().getTime();
                  })()
                : _o.current !== 1 / 0 &&
                  ((il.current = new Date().getTime()),
                  (Y = setTimeout(() => {
                      var ce;
                      (ce = p.onAutoClose) == null || ce.call(p, p), mn();
                  }, _o.current))),
            () => clearTimeout(Y)
        );
    }, [b, h, p, ut, W, Vd, mn]),
        j.useEffect(() => {
            p.delete && mn();
        }, [mn, p.delete]);
    function o0() {
        var Y, ce, he;
        return B != null && B.loading
            ? j.createElement(
                  "div",
                  {
                      className: bt(
                          R == null ? void 0 : R.loader,
                          (Y = p == null ? void 0 : p.classNames) == null ? void 0 : Y.loader,
                          "sonner-loader"
                      ),
                      "data-visible": ut === "loading",
                  },
                  B.loading
              )
            : U
              ? j.createElement(
                    "div",
                    {
                        className: bt(
                            R == null ? void 0 : R.loader,
                            (ce = p == null ? void 0 : p.classNames) == null ? void 0 : ce.loader,
                            "sonner-loader"
                        ),
                        "data-visible": ut === "loading",
                    },
                    U
                )
              : j.createElement(NS, {
                    className: bt(
                        R == null ? void 0 : R.loader,
                        (he = p == null ? void 0 : p.classNames) == null ? void 0 : he.loader
                    ),
                    visible: ut === "loading",
                });
    }
    return j.createElement(
        "li",
        {
            tabIndex: 0,
            ref: er,
            className: bt(
                D,
                Zx,
                R == null ? void 0 : R.toast,
                (t = p == null ? void 0 : p.classNames) == null ? void 0 : t.toast,
                R == null ? void 0 : R.default,
                R == null ? void 0 : R[ut],
                (n = p == null ? void 0 : p.classNames) == null ? void 0 : n[ut]
            ),
            "data-sonner-toast": "",
            "data-rich-colors": (r = p.richColors) != null ? r : E,
            "data-styled": !(p.jsx || p.unstyled || C),
            "data-mounted": z,
            "data-promise": !!p.promise,
            "data-swiped": Zn,
            "data-removed": Se,
            "data-visible": qx,
            "data-y-position": t0,
            "data-x-position": n0,
            "data-index": y,
            "data-front": Xx,
            "data-swiping": te,
            "data-dismissible": Nr,
            "data-type": ut,
            "data-invert": r0,
            "data-swipe-out": Le,
            "data-swipe-direction": de,
            "data-expanded": !!(b || (T && z)),
            style: {
                "--index": y,
                "--toasts-before": y,
                "--z-index": S.length - y,
                "--offset": `${Se ? Jn : Rr.current}px`,
                "--initial-height": T ? "auto" : `${kr}px`,
                ...k,
                ...p.style,
            },
            onDragEnd: () => {
                re(!1), G(null), (Ar.current = null);
            },
            onPointerDown: (Y) => {
                ll ||
                    !Nr ||
                    ((Bd.current = new Date()),
                    Do(Rr.current),
                    Y.target.setPointerCapture(Y.pointerId),
                    Y.target.tagName !== "BUTTON" && (re(!0), (Ar.current = { x: Y.clientX, y: Y.clientY })));
            },
            onPointerUp: () => {
                var Y, ce, he, xt;
                if (Le || !Nr) return;
                Ar.current = null;
                let wt = Number(
                        ((Y = er.current) == null
                            ? void 0
                            : Y.style.getPropertyValue("--swipe-amount-x").replace("px", "")) || 0
                    ),
                    hn = Number(
                        ((ce = er.current) == null
                            ? void 0
                            : ce.style.getPropertyValue("--swipe-amount-y").replace("px", "")) || 0
                    ),
                    tr = new Date().getTime() - ((he = Bd.current) == null ? void 0 : he.getTime()),
                    St = q === "x" ? wt : hn,
                    vn = Math.abs(St) / tr;
                if (Math.abs(St) >= GS || vn > 0.11) {
                    Do(Rr.current),
                        (xt = p.onDismiss) == null || xt.call(p, p),
                        we(q === "x" ? (wt > 0 ? "right" : "left") : hn > 0 ? "down" : "up"),
                        mn(),
                        ct(!0),
                        pn(!1);
                    return;
                }
                re(!1), G(null);
            },
            onPointerMove: (Y) => {
                var ce, he, xt, wt;
                if (!Ar.current || !Nr || ((ce = window.getSelection()) == null ? void 0 : ce.toString().length) > 0)
                    return;
                let hn = Y.clientY - Ar.current.y,
                    tr = Y.clientX - Ar.current.x,
                    St = (he = e.swipeDirections) != null ? he : XS(V);
                !q && (Math.abs(tr) > 1 || Math.abs(hn) > 1) && G(Math.abs(tr) > Math.abs(hn) ? "x" : "y");
                let vn = { x: 0, y: 0 };
                q === "y"
                    ? (St.includes("top") || St.includes("bottom")) &&
                      ((St.includes("top") && hn < 0) || (St.includes("bottom") && hn > 0)) &&
                      (vn.y = hn)
                    : q === "x" &&
                      (St.includes("left") || St.includes("right")) &&
                      ((St.includes("left") && tr < 0) || (St.includes("right") && tr > 0)) &&
                      (vn.x = tr),
                    (Math.abs(vn.x) > 0 || Math.abs(vn.y) > 0) && pn(!0),
                    (xt = er.current) == null || xt.style.setProperty("--swipe-amount-x", `${vn.x}px`),
                    (wt = er.current) == null || wt.style.setProperty("--swipe-amount-y", `${vn.y}px`);
            },
        },
        e0 && !p.jsx
            ? j.createElement(
                  "button",
                  {
                      "aria-label": K,
                      "data-disabled": ll,
                      "data-close-button": !0,
                      onClick:
                          ll || !Nr
                              ? () => {}
                              : () => {
                                    var Y;
                                    mn(), (Y = p.onDismiss) == null || Y.call(p, p);
                                },
                      className: bt(
                          R == null ? void 0 : R.closeButton,
                          (o = p == null ? void 0 : p.classNames) == null ? void 0 : o.closeButton
                      ),
                  },
                  (a = B == null ? void 0 : B.close) != null ? a : MS
              )
            : null,
        p.jsx || f.isValidElement(p.title)
            ? p.jsx
                ? p.jsx
                : typeof p.title == "function"
                  ? p.title()
                  : p.title
            : j.createElement(
                  j.Fragment,
                  null,
                  ut || p.icon || p.promise
                      ? j.createElement(
                            "div",
                            {
                                "data-icon": "",
                                className: bt(
                                    R == null ? void 0 : R.icon,
                                    (s = p == null ? void 0 : p.classNames) == null ? void 0 : s.icon
                                ),
                            },
                            p.promise || (p.type === "loading" && !p.icon) ? p.icon || o0() : null,
                            p.type !== "loading" ? p.icon || (B == null ? void 0 : B[ut]) || IS(ut) : null
                        )
                      : null,
                  j.createElement(
                      "div",
                      {
                          "data-content": "",
                          className: bt(
                              R == null ? void 0 : R.content,
                              (i = p == null ? void 0 : p.classNames) == null ? void 0 : i.content
                          ),
                      },
                      j.createElement(
                          "div",
                          {
                              "data-title": "",
                              className: bt(
                                  R == null ? void 0 : R.title,
                                  (l = p == null ? void 0 : p.classNames) == null ? void 0 : l.title
                              ),
                          },
                          typeof p.title == "function" ? p.title() : p.title
                      ),
                      p.description
                          ? j.createElement(
                                "div",
                                {
                                    "data-description": "",
                                    className: bt(
                                        F,
                                        Jx,
                                        R == null ? void 0 : R.description,
                                        (c = p == null ? void 0 : p.classNames) == null ? void 0 : c.description
                                    ),
                                },
                                typeof p.description == "function" ? p.description() : p.description
                            )
                          : null
                  ),
                  f.isValidElement(p.cancel)
                      ? p.cancel
                      : p.cancel && us(p.cancel)
                        ? j.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-cancel": !0,
                                  style: p.cancelButtonStyle || P,
                                  onClick: (Y) => {
                                      var ce, he;
                                      us(p.cancel) &&
                                          Nr &&
                                          ((he = (ce = p.cancel).onClick) == null || he.call(ce, Y), mn());
                                  },
                                  className: bt(
                                      R == null ? void 0 : R.cancelButton,
                                      (u = p == null ? void 0 : p.classNames) == null ? void 0 : u.cancelButton
                                  ),
                              },
                              p.cancel.label
                          )
                        : null,
                  f.isValidElement(p.action)
                      ? p.action
                      : p.action && us(p.action)
                        ? j.createElement(
                              "button",
                              {
                                  "data-button": !0,
                                  "data-action": !0,
                                  style: p.actionButtonStyle || _,
                                  onClick: (Y) => {
                                      var ce, he;
                                      us(p.action) &&
                                          ((he = (ce = p.action).onClick) == null || he.call(ce, Y),
                                          !Y.defaultPrevented && mn());
                                  },
                                  className: bt(
                                      R == null ? void 0 : R.actionButton,
                                      (d = p == null ? void 0 : p.classNames) == null ? void 0 : d.actionButton
                                  ),
                              },
                              p.action.label
                          )
                        : null
              )
    );
};
function mp() {
    if (typeof window > "u" || typeof document > "u") return "ltr";
    let e = document.documentElement.getAttribute("dir");
    return e === "auto" || !e ? window.getComputedStyle(document.documentElement).direction : e;
}
function ZS(e, t) {
    let n = {};
    return (
        [e, t].forEach((r, o) => {
            let a = o === 1,
                s = a ? "--mobile-offset" : "--offset",
                i = a ? HS : WS;
            function l(c) {
                ["top", "right", "bottom", "left"].forEach((u) => {
                    n[`${s}-${u}`] = typeof c == "number" ? `${c}px` : c;
                });
            }
            typeof r == "number" || typeof r == "string"
                ? l(r)
                : typeof r == "object"
                  ? ["top", "right", "bottom", "left"].forEach((c) => {
                        r[c] === void 0
                            ? (n[`${s}-${c}`] = i)
                            : (n[`${s}-${c}`] = typeof r[c] == "number" ? `${r[c]}px` : r[c]);
                    })
                  : l(i);
        }),
        n
    );
}
var JS = f.forwardRef(function (e, t) {
    let {
            invert: n,
            position: r = "bottom-right",
            hotkey: o = ["altKey", "KeyT"],
            expand: a,
            closeButton: s,
            className: i,
            offset: l,
            mobileOffset: c,
            theme: u = "light",
            richColors: d,
            duration: g,
            style: p,
            visibleToasts: C = VS,
            toastOptions: h,
            dir: w = mp(),
            gap: v = QS,
            loadingIcon: m,
            icons: y,
            containerAriaLabel: S = "Notifications",
            pauseWhenPageIsHidden: b,
        } = e,
        [I, E] = j.useState([]),
        N = j.useMemo(
            () => Array.from(new Set([r].concat(I.filter((W) => W.position).map((W) => W.position)))),
            [I, r]
        ),
        [k, P] = j.useState([]),
        [_, D] = j.useState(!1),
        [F, M] = j.useState(!1),
        [V, L] = j.useState(
            u !== "system"
                ? u
                : typeof window < "u" && window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                  ? "dark"
                  : "light"
        ),
        U = j.useRef(null),
        T = o.join("+").replace(/Key/g, "").replace(/Digit/g, ""),
        R = j.useRef(null),
        B = j.useRef(!1),
        K = j.useCallback((W) => {
            E((q) => {
                var G;
                return (
                    ((G = q.find((de) => de.id === W.id)) != null && G.delete) || Ye.dismiss(W.id),
                    q.filter(({ id: de }) => de !== W.id)
                );
            });
        }, []);
    return (
        j.useEffect(
            () =>
                Ye.subscribe((W) => {
                    if (W.dismiss) {
                        E((q) => q.map((G) => (G.id === W.id ? { ...G, delete: !0 } : G)));
                        return;
                    }
                    setTimeout(() => {
                        Ev.flushSync(() => {
                            E((q) => {
                                let G = q.findIndex((de) => de.id === W.id);
                                return G !== -1 ? [...q.slice(0, G), { ...q[G], ...W }, ...q.slice(G + 1)] : [W, ...q];
                            });
                        });
                    });
                }),
            []
        ),
        j.useEffect(() => {
            if (u !== "system") {
                L(u);
                return;
            }
            if (
                (u === "system" &&
                    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
                        ? L("dark")
                        : L("light")),
                typeof window > "u")
            )
                return;
            let W = window.matchMedia("(prefers-color-scheme: dark)");
            try {
                W.addEventListener("change", ({ matches: q }) => {
                    L(q ? "dark" : "light");
                });
            } catch {
                W.addListener(({ matches: G }) => {
                    try {
                        L(G ? "dark" : "light");
                    } catch (de) {
                        console.error(de);
                    }
                });
            }
        }, [u]),
        j.useEffect(() => {
            I.length <= 1 && D(!1);
        }, [I]),
        j.useEffect(() => {
            let W = (q) => {
                var G, de;
                o.every((we) => q[we] || q.code === we) && (D(!0), (G = U.current) == null || G.focus()),
                    q.code === "Escape" &&
                        (document.activeElement === U.current ||
                            ((de = U.current) != null && de.contains(document.activeElement))) &&
                        D(!1);
            };
            return document.addEventListener("keydown", W), () => document.removeEventListener("keydown", W);
        }, [o]),
        j.useEffect(() => {
            if (U.current)
                return () => {
                    R.current && (R.current.focus({ preventScroll: !0 }), (R.current = null), (B.current = !1));
                };
        }, [U.current]),
        j.createElement(
            "section",
            {
                ref: t,
                "aria-label": `${S} ${T}`,
                tabIndex: -1,
                "aria-live": "polite",
                "aria-relevant": "additions text",
                "aria-atomic": "false",
                suppressHydrationWarning: !0,
            },
            N.map((W, q) => {
                var G;
                let [de, we] = W.split("-");
                return I.length
                    ? j.createElement(
                          "ol",
                          {
                              key: W,
                              dir: w === "auto" ? mp() : w,
                              tabIndex: -1,
                              ref: U,
                              className: i,
                              "data-sonner-toaster": !0,
                              "data-theme": V,
                              "data-y-position": de,
                              "data-lifted": _ && I.length > 1 && !a,
                              "data-x-position": we,
                              style: {
                                  "--front-toast-height": `${((G = k[0]) == null ? void 0 : G.height) || 0}px`,
                                  "--width": `${KS}px`,
                                  "--gap": `${v}px`,
                                  ...p,
                                  ...ZS(l, c),
                              },
                              onBlur: (z) => {
                                  B.current &&
                                      !z.currentTarget.contains(z.relatedTarget) &&
                                      ((B.current = !1),
                                      R.current && (R.current.focus({ preventScroll: !0 }), (R.current = null)));
                              },
                              onFocus: (z) => {
                                  (z.target instanceof HTMLElement && z.target.dataset.dismissible === "false") ||
                                      B.current ||
                                      ((B.current = !0), (R.current = z.relatedTarget));
                              },
                              onMouseEnter: () => D(!0),
                              onMouseMove: () => D(!0),
                              onMouseLeave: () => {
                                  F || D(!1);
                              },
                              onDragEnd: () => D(!1),
                              onPointerDown: (z) => {
                                  (z.target instanceof HTMLElement && z.target.dataset.dismissible === "false") ||
                                      M(!0);
                              },
                              onPointerUp: () => M(!1),
                          },
                          I.filter((z) => (!z.position && q === 0) || z.position === W).map((z, se) => {
                              var Se, oe;
                              return j.createElement(qS, {
                                  key: z.id,
                                  icons: y,
                                  index: se,
                                  toast: z,
                                  defaultRichColors: d,
                                  duration: (Se = h == null ? void 0 : h.duration) != null ? Se : g,
                                  className: h == null ? void 0 : h.className,
                                  descriptionClassName: h == null ? void 0 : h.descriptionClassName,
                                  invert: n,
                                  visibleToasts: C,
                                  closeButton: (oe = h == null ? void 0 : h.closeButton) != null ? oe : s,
                                  interacting: F,
                                  position: W,
                                  style: h == null ? void 0 : h.style,
                                  unstyled: h == null ? void 0 : h.unstyled,
                                  classNames: h == null ? void 0 : h.classNames,
                                  cancelButtonStyle: h == null ? void 0 : h.cancelButtonStyle,
                                  actionButtonStyle: h == null ? void 0 : h.actionButtonStyle,
                                  removeToast: K,
                                  toasts: I.filter((te) => te.position == z.position),
                                  heights: k.filter((te) => te.position == z.position),
                                  setHeights: P,
                                  expandByDefault: a,
                                  gap: v,
                                  loadingIcon: m,
                                  expanded: _,
                                  pauseWhenPageIsHidden: b,
                                  swipeDirections: e.swipeDirections,
                              });
                          })
                      )
                    : null;
            })
        )
    );
});
const eC = ({ ...e }) => {
    const { theme: t = "system" } = PS();
    return x.jsx(JS, {
        "data-lov-id": "src/components/ui/sonner.tsx:10:4",
        "data-lov-name": "Sonner",
        "data-component-path": "src/components/ui/sonner.tsx",
        "data-component-line": "10",
        "data-component-file": "sonner.tsx",
        "data-component-name": "Sonner",
        "data-component-content": "%7B%22className%22%3A%22toaster%20group%22%7D",
        theme: t,
        className: "toaster group",
        toastOptions: {
            classNames: {
                toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
                description: "group-[.toast]:text-muted-foreground",
                actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
                cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground",
            },
        },
        ...e,
    });
};
var tC = Eu[" useId ".trim().toString()] || (() => {}),
    nC = 0;
function Ba(e) {
    const [t, n] = f.useState(tC());
    return (
        Oe(() => {
            n((r) => r ?? String(nC++));
        }, [e]),
        t ? `radix-${t}` : ""
    );
}
const rC = ["top", "right", "bottom", "left"],
    Hn = Math.min,
    nt = Math.max,
    ci = Math.round,
    ds = Math.floor,
    Qt = (e) => ({ x: e, y: e }),
    oC = { left: "right", right: "left", bottom: "top", top: "bottom" },
    aC = { start: "end", end: "start" };
function Xc(e, t, n) {
    return nt(e, Hn(t, n));
}
function cn(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function un(e) {
    return e.split("-")[0];
}
function Io(e) {
    return e.split("-")[1];
}
function wd(e) {
    return e === "x" ? "y" : "x";
}
function Sd(e) {
    return e === "y" ? "height" : "width";
}
const sC = new Set(["top", "bottom"]);
function Wt(e) {
    return sC.has(un(e)) ? "y" : "x";
}
function Cd(e) {
    return wd(Wt(e));
}
function iC(e, t, n) {
    n === void 0 && (n = !1);
    const r = Io(e),
        o = Cd(e),
        a = Sd(o);
    let s = o === "x" ? (r === (n ? "end" : "start") ? "right" : "left") : r === "start" ? "bottom" : "top";
    return t.reference[a] > t.floating[a] && (s = ui(s)), [s, ui(s)];
}
function lC(e) {
    const t = ui(e);
    return [qc(e), t, qc(t)];
}
function qc(e) {
    return e.replace(/start|end/g, (t) => aC[t]);
}
const hp = ["left", "right"],
    vp = ["right", "left"],
    cC = ["top", "bottom"],
    uC = ["bottom", "top"];
function dC(e, t, n) {
    switch (e) {
        case "top":
        case "bottom":
            return n ? (t ? vp : hp) : t ? hp : vp;
        case "left":
        case "right":
            return t ? cC : uC;
        default:
            return [];
    }
}
function fC(e, t, n, r) {
    const o = Io(e);
    let a = dC(un(e), n === "start", r);
    return o && ((a = a.map((s) => s + "-" + o)), t && (a = a.concat(a.map(qc)))), a;
}
function ui(e) {
    return e.replace(/left|right|bottom|top/g, (t) => oC[t]);
}
function pC(e) {
    return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function pg(e) {
    return typeof e != "number" ? pC(e) : { top: e, right: e, bottom: e, left: e };
}
function di(e) {
    const { x: t, y: n, width: r, height: o } = e;
    return { width: r, height: o, top: n, left: t, right: t + r, bottom: n + o, x: t, y: n };
}
function gp(e, t, n) {
    let { reference: r, floating: o } = e;
    const a = Wt(t),
        s = Cd(t),
        i = Sd(s),
        l = un(t),
        c = a === "y",
        u = r.x + r.width / 2 - o.width / 2,
        d = r.y + r.height / 2 - o.height / 2,
        g = r[i] / 2 - o[i] / 2;
    let p;
    switch (l) {
        case "top":
            p = { x: u, y: r.y - o.height };
            break;
        case "bottom":
            p = { x: u, y: r.y + r.height };
            break;
        case "right":
            p = { x: r.x + r.width, y: d };
            break;
        case "left":
            p = { x: r.x - o.width, y: d };
            break;
        default:
            p = { x: r.x, y: r.y };
    }
    switch (Io(t)) {
        case "start":
            p[s] -= g * (n && c ? -1 : 1);
            break;
        case "end":
            p[s] += g * (n && c ? -1 : 1);
            break;
    }
    return p;
}
const mC = async (e, t, n) => {
    const { placement: r = "bottom", strategy: o = "absolute", middleware: a = [], platform: s } = n,
        i = a.filter(Boolean),
        l = await (s.isRTL == null ? void 0 : s.isRTL(t));
    let c = await s.getElementRects({ reference: e, floating: t, strategy: o }),
        { x: u, y: d } = gp(c, r, l),
        g = r,
        p = {},
        C = 0;
    for (let h = 0; h < i.length; h++) {
        const { name: w, fn: v } = i[h],
            {
                x: m,
                y,
                data: S,
                reset: b,
            } = await v({
                x: u,
                y: d,
                initialPlacement: r,
                placement: g,
                strategy: o,
                middlewareData: p,
                rects: c,
                platform: s,
                elements: { reference: e, floating: t },
            });
        (u = m ?? u),
            (d = y ?? d),
            (p = { ...p, [w]: { ...p[w], ...S } }),
            b &&
                C <= 50 &&
                (C++,
                typeof b == "object" &&
                    (b.placement && (g = b.placement),
                    b.rects &&
                        (c =
                            b.rects === !0
                                ? await s.getElementRects({ reference: e, floating: t, strategy: o })
                                : b.rects),
                    ({ x: u, y: d } = gp(c, g, l))),
                (h = -1));
    }
    return { x: u, y: d, placement: g, strategy: o, middlewareData: p };
};
async function Ea(e, t) {
    var n;
    t === void 0 && (t = {});
    const { x: r, y: o, platform: a, rects: s, elements: i, strategy: l } = e,
        {
            boundary: c = "clippingAncestors",
            rootBoundary: u = "viewport",
            elementContext: d = "floating",
            altBoundary: g = !1,
            padding: p = 0,
        } = cn(t, e),
        C = pg(p),
        w = i[g ? (d === "floating" ? "reference" : "floating") : d],
        v = di(
            await a.getClippingRect({
                element:
                    (n = await (a.isElement == null ? void 0 : a.isElement(w))) == null || n
                        ? w
                        : w.contextElement ||
                          (await (a.getDocumentElement == null ? void 0 : a.getDocumentElement(i.floating))),
                boundary: c,
                rootBoundary: u,
                strategy: l,
            })
        ),
        m = d === "floating" ? { x: r, y: o, width: s.floating.width, height: s.floating.height } : s.reference,
        y = await (a.getOffsetParent == null ? void 0 : a.getOffsetParent(i.floating)),
        S = (await (a.isElement == null ? void 0 : a.isElement(y)))
            ? (await (a.getScale == null ? void 0 : a.getScale(y))) || { x: 1, y: 1 }
            : { x: 1, y: 1 },
        b = di(
            a.convertOffsetParentRelativeRectToViewportRelativeRect
                ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
                      elements: i,
                      rect: m,
                      offsetParent: y,
                      strategy: l,
                  })
                : m
        );
    return {
        top: (v.top - b.top + C.top) / S.y,
        bottom: (b.bottom - v.bottom + C.bottom) / S.y,
        left: (v.left - b.left + C.left) / S.x,
        right: (b.right - v.right + C.right) / S.x,
    };
}
const hC = (e) => ({
        name: "arrow",
        options: e,
        async fn(t) {
            const { x: n, y: r, placement: o, rects: a, platform: s, elements: i, middlewareData: l } = t,
                { element: c, padding: u = 0 } = cn(e, t) || {};
            if (c == null) return {};
            const d = pg(u),
                g = { x: n, y: r },
                p = Cd(o),
                C = Sd(p),
                h = await s.getDimensions(c),
                w = p === "y",
                v = w ? "top" : "left",
                m = w ? "bottom" : "right",
                y = w ? "clientHeight" : "clientWidth",
                S = a.reference[C] + a.reference[p] - g[p] - a.floating[C],
                b = g[p] - a.reference[p],
                I = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
            let E = I ? I[y] : 0;
            (!E || !(await (s.isElement == null ? void 0 : s.isElement(I)))) && (E = i.floating[y] || a.floating[C]);
            const N = S / 2 - b / 2,
                k = E / 2 - h[C] / 2 - 1,
                P = Hn(d[v], k),
                _ = Hn(d[m], k),
                D = P,
                F = E - h[C] - _,
                M = E / 2 - h[C] / 2 + N,
                V = Xc(D, M, F),
                L = !l.arrow && Io(o) != null && M !== V && a.reference[C] / 2 - (M < D ? P : _) - h[C] / 2 < 0,
                U = L ? (M < D ? M - D : M - F) : 0;
            return {
                [p]: g[p] + U,
                data: { [p]: V, centerOffset: M - V - U, ...(L && { alignmentOffset: U }) },
                reset: L,
            };
        },
    }),
    vC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "flip",
                options: e,
                async fn(t) {
                    var n, r;
                    const {
                            placement: o,
                            middlewareData: a,
                            rects: s,
                            initialPlacement: i,
                            platform: l,
                            elements: c,
                        } = t,
                        {
                            mainAxis: u = !0,
                            crossAxis: d = !0,
                            fallbackPlacements: g,
                            fallbackStrategy: p = "bestFit",
                            fallbackAxisSideDirection: C = "none",
                            flipAlignment: h = !0,
                            ...w
                        } = cn(e, t);
                    if ((n = a.arrow) != null && n.alignmentOffset) return {};
                    const v = un(o),
                        m = Wt(i),
                        y = un(i) === i,
                        S = await (l.isRTL == null ? void 0 : l.isRTL(c.floating)),
                        b = g || (y || !h ? [ui(i)] : lC(i)),
                        I = C !== "none";
                    !g && I && b.push(...fC(i, h, C, S));
                    const E = [i, ...b],
                        N = await Ea(t, w),
                        k = [];
                    let P = ((r = a.flip) == null ? void 0 : r.overflows) || [];
                    if ((u && k.push(N[v]), d)) {
                        const M = iC(o, s, S);
                        k.push(N[M[0]], N[M[1]]);
                    }
                    if (((P = [...P, { placement: o, overflows: k }]), !k.every((M) => M <= 0))) {
                        var _, D;
                        const M = (((_ = a.flip) == null ? void 0 : _.index) || 0) + 1,
                            V = E[M];
                        if (
                            V &&
                            (!(d === "alignment" ? m !== Wt(V) : !1) ||
                                P.every((T) => (Wt(T.placement) === m ? T.overflows[0] > 0 : !0)))
                        )
                            return { data: { index: M, overflows: P }, reset: { placement: V } };
                        let L =
                            (D = P.filter((U) => U.overflows[0] <= 0).sort(
                                (U, T) => U.overflows[1] - T.overflows[1]
                            )[0]) == null
                                ? void 0
                                : D.placement;
                        if (!L)
                            switch (p) {
                                case "bestFit": {
                                    var F;
                                    const U =
                                        (F = P.filter((T) => {
                                            if (I) {
                                                const R = Wt(T.placement);
                                                return R === m || R === "y";
                                            }
                                            return !0;
                                        })
                                            .map((T) => [
                                                T.placement,
                                                T.overflows.filter((R) => R > 0).reduce((R, B) => R + B, 0),
                                            ])
                                            .sort((T, R) => T[1] - R[1])[0]) == null
                                            ? void 0
                                            : F[0];
                                    U && (L = U);
                                    break;
                                }
                                case "initialPlacement":
                                    L = i;
                                    break;
                            }
                        if (o !== L) return { reset: { placement: L } };
                    }
                    return {};
                },
            }
        );
    };
function yp(e, t) {
    return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function xp(e) {
    return rC.some((t) => e[t] >= 0);
}
const gC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "hide",
                options: e,
                async fn(t) {
                    const { rects: n } = t,
                        { strategy: r = "referenceHidden", ...o } = cn(e, t);
                    switch (r) {
                        case "referenceHidden": {
                            const a = await Ea(t, { ...o, elementContext: "reference" }),
                                s = yp(a, n.reference);
                            return { data: { referenceHiddenOffsets: s, referenceHidden: xp(s) } };
                        }
                        case "escaped": {
                            const a = await Ea(t, { ...o, altBoundary: !0 }),
                                s = yp(a, n.floating);
                            return { data: { escapedOffsets: s, escaped: xp(s) } };
                        }
                        default:
                            return {};
                    }
                },
            }
        );
    },
    mg = new Set(["left", "top"]);
async function yC(e, t) {
    const { placement: n, platform: r, elements: o } = e,
        a = await (r.isRTL == null ? void 0 : r.isRTL(o.floating)),
        s = un(n),
        i = Io(n),
        l = Wt(n) === "y",
        c = mg.has(s) ? -1 : 1,
        u = a && l ? -1 : 1,
        d = cn(t, e);
    let {
        mainAxis: g,
        crossAxis: p,
        alignmentAxis: C,
    } = typeof d == "number"
        ? { mainAxis: d, crossAxis: 0, alignmentAxis: null }
        : { mainAxis: d.mainAxis || 0, crossAxis: d.crossAxis || 0, alignmentAxis: d.alignmentAxis };
    return (
        i && typeof C == "number" && (p = i === "end" ? C * -1 : C), l ? { x: p * u, y: g * c } : { x: g * c, y: p * u }
    );
}
const xC = function (e) {
        return (
            e === void 0 && (e = 0),
            {
                name: "offset",
                options: e,
                async fn(t) {
                    var n, r;
                    const { x: o, y: a, placement: s, middlewareData: i } = t,
                        l = await yC(t, e);
                    return s === ((n = i.offset) == null ? void 0 : n.placement) &&
                        (r = i.arrow) != null &&
                        r.alignmentOffset
                        ? {}
                        : { x: o + l.x, y: a + l.y, data: { ...l, placement: s } };
                },
            }
        );
    },
    wC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "shift",
                options: e,
                async fn(t) {
                    const { x: n, y: r, placement: o } = t,
                        {
                            mainAxis: a = !0,
                            crossAxis: s = !1,
                            limiter: i = {
                                fn: (w) => {
                                    let { x: v, y: m } = w;
                                    return { x: v, y: m };
                                },
                            },
                            ...l
                        } = cn(e, t),
                        c = { x: n, y: r },
                        u = await Ea(t, l),
                        d = Wt(un(o)),
                        g = wd(d);
                    let p = c[g],
                        C = c[d];
                    if (a) {
                        const w = g === "y" ? "top" : "left",
                            v = g === "y" ? "bottom" : "right",
                            m = p + u[w],
                            y = p - u[v];
                        p = Xc(m, p, y);
                    }
                    if (s) {
                        const w = d === "y" ? "top" : "left",
                            v = d === "y" ? "bottom" : "right",
                            m = C + u[w],
                            y = C - u[v];
                        C = Xc(m, C, y);
                    }
                    const h = i.fn({ ...t, [g]: p, [d]: C });
                    return { ...h, data: { x: h.x - n, y: h.y - r, enabled: { [g]: a, [d]: s } } };
                },
            }
        );
    },
    SC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                options: e,
                fn(t) {
                    const { x: n, y: r, placement: o, rects: a, middlewareData: s } = t,
                        { offset: i = 0, mainAxis: l = !0, crossAxis: c = !0 } = cn(e, t),
                        u = { x: n, y: r },
                        d = Wt(o),
                        g = wd(d);
                    let p = u[g],
                        C = u[d];
                    const h = cn(i, t),
                        w = typeof h == "number" ? { mainAxis: h, crossAxis: 0 } : { mainAxis: 0, crossAxis: 0, ...h };
                    if (l) {
                        const y = g === "y" ? "height" : "width",
                            S = a.reference[g] - a.floating[y] + w.mainAxis,
                            b = a.reference[g] + a.reference[y] - w.mainAxis;
                        p < S ? (p = S) : p > b && (p = b);
                    }
                    if (c) {
                        var v, m;
                        const y = g === "y" ? "width" : "height",
                            S = mg.has(un(o)),
                            b =
                                a.reference[d] -
                                a.floating[y] +
                                ((S && ((v = s.offset) == null ? void 0 : v[d])) || 0) +
                                (S ? 0 : w.crossAxis),
                            I =
                                a.reference[d] +
                                a.reference[y] +
                                (S ? 0 : ((m = s.offset) == null ? void 0 : m[d]) || 0) -
                                (S ? w.crossAxis : 0);
                        C < b ? (C = b) : C > I && (C = I);
                    }
                    return { [g]: p, [d]: C };
                },
            }
        );
    },
    CC = function (e) {
        return (
            e === void 0 && (e = {}),
            {
                name: "size",
                options: e,
                async fn(t) {
                    var n, r;
                    const { placement: o, rects: a, platform: s, elements: i } = t,
                        { apply: l = () => {}, ...c } = cn(e, t),
                        u = await Ea(t, c),
                        d = un(o),
                        g = Io(o),
                        p = Wt(o) === "y",
                        { width: C, height: h } = a.floating;
                    let w, v;
                    d === "top" || d === "bottom"
                        ? ((w = d),
                          (v =
                              g === ((await (s.isRTL == null ? void 0 : s.isRTL(i.floating))) ? "start" : "end")
                                  ? "left"
                                  : "right"))
                        : ((v = d), (w = g === "end" ? "top" : "bottom"));
                    const m = h - u.top - u.bottom,
                        y = C - u.left - u.right,
                        S = Hn(h - u[w], m),
                        b = Hn(C - u[v], y),
                        I = !t.middlewareData.shift;
                    let E = S,
                        N = b;
                    if (
                        ((n = t.middlewareData.shift) != null && n.enabled.x && (N = y),
                        (r = t.middlewareData.shift) != null && r.enabled.y && (E = m),
                        I && !g)
                    ) {
                        const P = nt(u.left, 0),
                            _ = nt(u.right, 0),
                            D = nt(u.top, 0),
                            F = nt(u.bottom, 0);
                        p
                            ? (N = C - 2 * (P !== 0 || _ !== 0 ? P + _ : nt(u.left, u.right)))
                            : (E = h - 2 * (D !== 0 || F !== 0 ? D + F : nt(u.top, u.bottom)));
                    }
                    await l({ ...t, availableWidth: N, availableHeight: E });
                    const k = await s.getDimensions(i.floating);
                    return C !== k.width || h !== k.height ? { reset: { rects: !0 } } : {};
                },
            }
        );
    };
function $i() {
    return typeof window < "u";
}
function ko(e) {
    return hg(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function at(e) {
    var t;
    return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function Yt(e) {
    var t;
    return (t = (hg(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function hg(e) {
    return $i() ? e instanceof Node || e instanceof at(e).Node : !1;
}
function Mt(e) {
    return $i() ? e instanceof Element || e instanceof at(e).Element : !1;
}
function Gt(e) {
    return $i() ? e instanceof HTMLElement || e instanceof at(e).HTMLElement : !1;
}
function wp(e) {
    return !$i() || typeof ShadowRoot > "u" ? !1 : e instanceof ShadowRoot || e instanceof at(e).ShadowRoot;
}
const bC = new Set(["inline", "contents"]);
function za(e) {
    const { overflow: t, overflowX: n, overflowY: r, display: o } = Ot(e);
    return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !bC.has(o);
}
const EC = new Set(["table", "td", "th"]);
function TC(e) {
    return EC.has(ko(e));
}
const PC = [":popover-open", ":modal"];
function Ui(e) {
    return PC.some((t) => {
        try {
            return e.matches(t);
        } catch {
            return !1;
        }
    });
}
const IC = ["transform", "translate", "scale", "rotate", "perspective"],
    kC = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
    NC = ["paint", "layout", "strict", "content"];
function bd(e) {
    const t = Ed(),
        n = Mt(e) ? Ot(e) : e;
    return (
        IC.some((r) => (n[r] ? n[r] !== "none" : !1)) ||
        (n.containerType ? n.containerType !== "normal" : !1) ||
        (!t && (n.backdropFilter ? n.backdropFilter !== "none" : !1)) ||
        (!t && (n.filter ? n.filter !== "none" : !1)) ||
        kC.some((r) => (n.willChange || "").includes(r)) ||
        NC.some((r) => (n.contain || "").includes(r))
    );
}
function RC(e) {
    let t = Kn(e);
    for (; Gt(t) && !So(t); ) {
        if (bd(t)) return t;
        if (Ui(t)) return null;
        t = Kn(t);
    }
    return null;
}
function Ed() {
    return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const AC = new Set(["html", "body", "#document"]);
function So(e) {
    return AC.has(ko(e));
}
function Ot(e) {
    return at(e).getComputedStyle(e);
}
function Vi(e) {
    return Mt(e)
        ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop }
        : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Kn(e) {
    if (ko(e) === "html") return e;
    const t = e.assignedSlot || e.parentNode || (wp(e) && e.host) || Yt(e);
    return wp(t) ? t.host : t;
}
function vg(e) {
    const t = Kn(e);
    return So(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : Gt(t) && za(t) ? t : vg(t);
}
function Ta(e, t, n) {
    var r;
    t === void 0 && (t = []), n === void 0 && (n = !0);
    const o = vg(e),
        a = o === ((r = e.ownerDocument) == null ? void 0 : r.body),
        s = at(o);
    if (a) {
        const i = Zc(s);
        return t.concat(s, s.visualViewport || [], za(o) ? o : [], i && n ? Ta(i) : []);
    }
    return t.concat(o, Ta(o, [], n));
}
function Zc(e) {
    return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function gg(e) {
    const t = Ot(e);
    let n = parseFloat(t.width) || 0,
        r = parseFloat(t.height) || 0;
    const o = Gt(e),
        a = o ? e.offsetWidth : n,
        s = o ? e.offsetHeight : r,
        i = ci(n) !== a || ci(r) !== s;
    return i && ((n = a), (r = s)), { width: n, height: r, $: i };
}
function Td(e) {
    return Mt(e) ? e : e.contextElement;
}
function no(e) {
    const t = Td(e);
    if (!Gt(t)) return Qt(1);
    const n = t.getBoundingClientRect(),
        { width: r, height: o, $: a } = gg(t);
    let s = (a ? ci(n.width) : n.width) / r,
        i = (a ? ci(n.height) : n.height) / o;
    return (!s || !Number.isFinite(s)) && (s = 1), (!i || !Number.isFinite(i)) && (i = 1), { x: s, y: i };
}
const DC = Qt(0);
function yg(e) {
    const t = at(e);
    return !Ed() || !t.visualViewport ? DC : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function _C(e, t, n) {
    return t === void 0 && (t = !1), !n || (t && n !== at(e)) ? !1 : t;
}
function Sr(e, t, n, r) {
    t === void 0 && (t = !1), n === void 0 && (n = !1);
    const o = e.getBoundingClientRect(),
        a = Td(e);
    let s = Qt(1);
    t && (r ? Mt(r) && (s = no(r)) : (s = no(e)));
    const i = _C(a, n, r) ? yg(a) : Qt(0);
    let l = (o.left + i.x) / s.x,
        c = (o.top + i.y) / s.y,
        u = o.width / s.x,
        d = o.height / s.y;
    if (a) {
        const g = at(a),
            p = r && Mt(r) ? at(r) : r;
        let C = g,
            h = Zc(C);
        for (; h && r && p !== C; ) {
            const w = no(h),
                v = h.getBoundingClientRect(),
                m = Ot(h),
                y = v.left + (h.clientLeft + parseFloat(m.paddingLeft)) * w.x,
                S = v.top + (h.clientTop + parseFloat(m.paddingTop)) * w.y;
            (l *= w.x), (c *= w.y), (u *= w.x), (d *= w.y), (l += y), (c += S), (C = at(h)), (h = Zc(C));
        }
    }
    return di({ width: u, height: d, x: l, y: c });
}
function Wi(e, t) {
    const n = Vi(e).scrollLeft;
    return t ? t.left + n : Sr(Yt(e)).left + n;
}
function xg(e, t) {
    const n = e.getBoundingClientRect(),
        r = n.left + t.scrollLeft - Wi(e, n),
        o = n.top + t.scrollTop;
    return { x: r, y: o };
}
function MC(e) {
    let { elements: t, rect: n, offsetParent: r, strategy: o } = e;
    const a = o === "fixed",
        s = Yt(r),
        i = t ? Ui(t.floating) : !1;
    if (r === s || (i && a)) return n;
    let l = { scrollLeft: 0, scrollTop: 0 },
        c = Qt(1);
    const u = Qt(0),
        d = Gt(r);
    if ((d || (!d && !a)) && ((ko(r) !== "body" || za(s)) && (l = Vi(r)), Gt(r))) {
        const p = Sr(r);
        (c = no(r)), (u.x = p.x + r.clientLeft), (u.y = p.y + r.clientTop);
    }
    const g = s && !d && !a ? xg(s, l) : Qt(0);
    return {
        width: n.width * c.x,
        height: n.height * c.y,
        x: n.x * c.x - l.scrollLeft * c.x + u.x + g.x,
        y: n.y * c.y - l.scrollTop * c.y + u.y + g.y,
    };
}
function OC(e) {
    return Array.from(e.getClientRects());
}
function jC(e) {
    const t = Yt(e),
        n = Vi(e),
        r = e.ownerDocument.body,
        o = nt(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
        a = nt(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
    let s = -n.scrollLeft + Wi(e);
    const i = -n.scrollTop;
    return (
        Ot(r).direction === "rtl" && (s += nt(t.clientWidth, r.clientWidth) - o), { width: o, height: a, x: s, y: i }
    );
}
const Sp = 25;
function LC(e, t) {
    const n = at(e),
        r = Yt(e),
        o = n.visualViewport;
    let a = r.clientWidth,
        s = r.clientHeight,
        i = 0,
        l = 0;
    if (o) {
        (a = o.width), (s = o.height);
        const u = Ed();
        (!u || (u && t === "fixed")) && ((i = o.offsetLeft), (l = o.offsetTop));
    }
    const c = Wi(r);
    if (c <= 0) {
        const u = r.ownerDocument,
            d = u.body,
            g = getComputedStyle(d),
            p = (u.compatMode === "CSS1Compat" && parseFloat(g.marginLeft) + parseFloat(g.marginRight)) || 0,
            C = Math.abs(r.clientWidth - d.clientWidth - p);
        C <= Sp && (a -= C);
    } else c <= Sp && (a += c);
    return { width: a, height: s, x: i, y: l };
}
const FC = new Set(["absolute", "fixed"]);
function BC(e, t) {
    const n = Sr(e, !0, t === "fixed"),
        r = n.top + e.clientTop,
        o = n.left + e.clientLeft,
        a = Gt(e) ? no(e) : Qt(1),
        s = e.clientWidth * a.x,
        i = e.clientHeight * a.y,
        l = o * a.x,
        c = r * a.y;
    return { width: s, height: i, x: l, y: c };
}
function Cp(e, t, n) {
    let r;
    if (t === "viewport") r = LC(e, n);
    else if (t === "document") r = jC(Yt(e));
    else if (Mt(t)) r = BC(t, n);
    else {
        const o = yg(e);
        r = { x: t.x - o.x, y: t.y - o.y, width: t.width, height: t.height };
    }
    return di(r);
}
function wg(e, t) {
    const n = Kn(e);
    return n === t || !Mt(n) || So(n) ? !1 : Ot(n).position === "fixed" || wg(n, t);
}
function zC(e, t) {
    const n = t.get(e);
    if (n) return n;
    let r = Ta(e, [], !1).filter((i) => Mt(i) && ko(i) !== "body"),
        o = null;
    const a = Ot(e).position === "fixed";
    let s = a ? Kn(e) : e;
    for (; Mt(s) && !So(s); ) {
        const i = Ot(s),
            l = bd(s);
        !l && i.position === "fixed" && (o = null),
            (a ? !l && !o : (!l && i.position === "static" && !!o && FC.has(o.position)) || (za(s) && !l && wg(e, s)))
                ? (r = r.filter((u) => u !== s))
                : (o = i),
            (s = Kn(s));
    }
    return t.set(e, r), r;
}
function $C(e) {
    let { element: t, boundary: n, rootBoundary: r, strategy: o } = e;
    const s = [...(n === "clippingAncestors" ? (Ui(t) ? [] : zC(t, this._c)) : [].concat(n)), r],
        i = s[0],
        l = s.reduce(
            (c, u) => {
                const d = Cp(t, u, o);
                return (
                    (c.top = nt(d.top, c.top)),
                    (c.right = Hn(d.right, c.right)),
                    (c.bottom = Hn(d.bottom, c.bottom)),
                    (c.left = nt(d.left, c.left)),
                    c
                );
            },
            Cp(t, i, o)
        );
    return { width: l.right - l.left, height: l.bottom - l.top, x: l.left, y: l.top };
}
function UC(e) {
    const { width: t, height: n } = gg(e);
    return { width: t, height: n };
}
function VC(e, t, n) {
    const r = Gt(t),
        o = Yt(t),
        a = n === "fixed",
        s = Sr(e, !0, a, t);
    let i = { scrollLeft: 0, scrollTop: 0 };
    const l = Qt(0);
    function c() {
        l.x = Wi(o);
    }
    if (r || (!r && !a))
        if (((ko(t) !== "body" || za(o)) && (i = Vi(t)), r)) {
            const p = Sr(t, !0, a, t);
            (l.x = p.x + t.clientLeft), (l.y = p.y + t.clientTop);
        } else o && c();
    a && !r && o && c();
    const u = o && !r && !a ? xg(o, i) : Qt(0),
        d = s.left + i.scrollLeft - l.x - u.x,
        g = s.top + i.scrollTop - l.y - u.y;
    return { x: d, y: g, width: s.width, height: s.height };
}
function $l(e) {
    return Ot(e).position === "static";
}
function bp(e, t) {
    if (!Gt(e) || Ot(e).position === "fixed") return null;
    if (t) return t(e);
    let n = e.offsetParent;
    return Yt(e) === n && (n = n.ownerDocument.body), n;
}
function Sg(e, t) {
    const n = at(e);
    if (Ui(e)) return n;
    if (!Gt(e)) {
        let o = Kn(e);
        for (; o && !So(o); ) {
            if (Mt(o) && !$l(o)) return o;
            o = Kn(o);
        }
        return n;
    }
    let r = bp(e, t);
    for (; r && TC(r) && $l(r); ) r = bp(r, t);
    return r && So(r) && $l(r) && !bd(r) ? n : r || RC(e) || n;
}
const WC = async function (e) {
    const t = this.getOffsetParent || Sg,
        n = this.getDimensions,
        r = await n(e.floating);
    return {
        reference: VC(e.reference, await t(e.floating), e.strategy),
        floating: { x: 0, y: 0, width: r.width, height: r.height },
    };
};
function HC(e) {
    return Ot(e).direction === "rtl";
}
const KC = {
    convertOffsetParentRelativeRectToViewportRelativeRect: MC,
    getDocumentElement: Yt,
    getClippingRect: $C,
    getOffsetParent: Sg,
    getElementRects: WC,
    getClientRects: OC,
    getDimensions: UC,
    getScale: no,
    isElement: Mt,
    isRTL: HC,
};
function Cg(e, t) {
    return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height;
}
function QC(e, t) {
    let n = null,
        r;
    const o = Yt(e);
    function a() {
        var i;
        clearTimeout(r), (i = n) == null || i.disconnect(), (n = null);
    }
    function s(i, l) {
        i === void 0 && (i = !1), l === void 0 && (l = 1), a();
        const c = e.getBoundingClientRect(),
            { left: u, top: d, width: g, height: p } = c;
        if ((i || t(), !g || !p)) return;
        const C = ds(d),
            h = ds(o.clientWidth - (u + g)),
            w = ds(o.clientHeight - (d + p)),
            v = ds(u),
            y = { rootMargin: -C + "px " + -h + "px " + -w + "px " + -v + "px", threshold: nt(0, Hn(1, l)) || 1 };
        let S = !0;
        function b(I) {
            const E = I[0].intersectionRatio;
            if (E !== l) {
                if (!S) return s();
                E
                    ? s(!1, E)
                    : (r = setTimeout(() => {
                          s(!1, 1e-7);
                      }, 1e3));
            }
            E === 1 && !Cg(c, e.getBoundingClientRect()) && s(), (S = !1);
        }
        try {
            n = new IntersectionObserver(b, { ...y, root: o.ownerDocument });
        } catch {
            n = new IntersectionObserver(b, y);
        }
        n.observe(e);
    }
    return s(!0), a;
}
function GC(e, t, n, r) {
    r === void 0 && (r = {});
    const {
            ancestorScroll: o = !0,
            ancestorResize: a = !0,
            elementResize: s = typeof ResizeObserver == "function",
            layoutShift: i = typeof IntersectionObserver == "function",
            animationFrame: l = !1,
        } = r,
        c = Td(e),
        u = o || a ? [...(c ? Ta(c) : []), ...Ta(t)] : [];
    u.forEach((v) => {
        o && v.addEventListener("scroll", n, { passive: !0 }), a && v.addEventListener("resize", n);
    });
    const d = c && i ? QC(c, n) : null;
    let g = -1,
        p = null;
    s &&
        ((p = new ResizeObserver((v) => {
            let [m] = v;
            m &&
                m.target === c &&
                p &&
                (p.unobserve(t),
                cancelAnimationFrame(g),
                (g = requestAnimationFrame(() => {
                    var y;
                    (y = p) == null || y.observe(t);
                }))),
                n();
        })),
        c && !l && p.observe(c),
        p.observe(t));
    let C,
        h = l ? Sr(e) : null;
    l && w();
    function w() {
        const v = Sr(e);
        h && !Cg(h, v) && n(), (h = v), (C = requestAnimationFrame(w));
    }
    return (
        n(),
        () => {
            var v;
            u.forEach((m) => {
                o && m.removeEventListener("scroll", n), a && m.removeEventListener("resize", n);
            }),
                d == null || d(),
                (v = p) == null || v.disconnect(),
                (p = null),
                l && cancelAnimationFrame(C);
        }
    );
}
const YC = xC,
    XC = wC,
    qC = vC,
    ZC = CC,
    JC = gC,
    Ep = hC,
    eb = SC,
    tb = (e, t, n) => {
        const r = new Map(),
            o = { platform: KC, ...n },
            a = { ...o.platform, _c: r };
        return mC(e, t, { ...o, platform: a });
    };
var nb = typeof document < "u",
    rb = function () {},
    As = nb ? f.useLayoutEffect : rb;
function fi(e, t) {
    if (e === t) return !0;
    if (typeof e != typeof t) return !1;
    if (typeof e == "function" && e.toString() === t.toString()) return !0;
    let n, r, o;
    if (e && t && typeof e == "object") {
        if (Array.isArray(e)) {
            if (((n = e.length), n !== t.length)) return !1;
            for (r = n; r-- !== 0; ) if (!fi(e[r], t[r])) return !1;
            return !0;
        }
        if (((o = Object.keys(e)), (n = o.length), n !== Object.keys(t).length)) return !1;
        for (r = n; r-- !== 0; ) if (!{}.hasOwnProperty.call(t, o[r])) return !1;
        for (r = n; r-- !== 0; ) {
            const a = o[r];
            if (!(a === "_owner" && e.$$typeof) && !fi(e[a], t[a])) return !1;
        }
        return !0;
    }
    return e !== e && t !== t;
}
function bg(e) {
    return typeof window > "u" ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1;
}
function Tp(e, t) {
    const n = bg(e);
    return Math.round(t * n) / n;
}
function Ul(e) {
    const t = f.useRef(e);
    return (
        As(() => {
            t.current = e;
        }),
        t
    );
}
function ob(e) {
    e === void 0 && (e = {});
    const {
            placement: t = "bottom",
            strategy: n = "absolute",
            middleware: r = [],
            platform: o,
            elements: { reference: a, floating: s } = {},
            transform: i = !0,
            whileElementsMounted: l,
            open: c,
        } = e,
        [u, d] = f.useState({ x: 0, y: 0, strategy: n, placement: t, middlewareData: {}, isPositioned: !1 }),
        [g, p] = f.useState(r);
    fi(g, r) || p(r);
    const [C, h] = f.useState(null),
        [w, v] = f.useState(null),
        m = f.useCallback((T) => {
            T !== I.current && ((I.current = T), h(T));
        }, []),
        y = f.useCallback((T) => {
            T !== E.current && ((E.current = T), v(T));
        }, []),
        S = a || C,
        b = s || w,
        I = f.useRef(null),
        E = f.useRef(null),
        N = f.useRef(u),
        k = l != null,
        P = Ul(l),
        _ = Ul(o),
        D = Ul(c),
        F = f.useCallback(() => {
            if (!I.current || !E.current) return;
            const T = { placement: t, strategy: n, middleware: g };
            _.current && (T.platform = _.current),
                tb(I.current, E.current, T).then((R) => {
                    const B = { ...R, isPositioned: D.current !== !1 };
                    M.current &&
                        !fi(N.current, B) &&
                        ((N.current = B),
                        Pr.flushSync(() => {
                            d(B);
                        }));
                });
        }, [g, t, n, _, D]);
    As(() => {
        c === !1 && N.current.isPositioned && ((N.current.isPositioned = !1), d((T) => ({ ...T, isPositioned: !1 })));
    }, [c]);
    const M = f.useRef(!1);
    As(
        () => (
            (M.current = !0),
            () => {
                M.current = !1;
            }
        ),
        []
    ),
        As(() => {
            if ((S && (I.current = S), b && (E.current = b), S && b)) {
                if (P.current) return P.current(S, b, F);
                F();
            }
        }, [S, b, F, P, k]);
    const V = f.useMemo(() => ({ reference: I, floating: E, setReference: m, setFloating: y }), [m, y]),
        L = f.useMemo(() => ({ reference: S, floating: b }), [S, b]),
        U = f.useMemo(() => {
            const T = { position: n, left: 0, top: 0 };
            if (!L.floating) return T;
            const R = Tp(L.floating, u.x),
                B = Tp(L.floating, u.y);
            return i
                ? {
                      ...T,
                      transform: "translate(" + R + "px, " + B + "px)",
                      ...(bg(L.floating) >= 1.5 && { willChange: "transform" }),
                  }
                : { position: n, left: R, top: B };
        }, [n, i, L.floating, u.x, u.y]);
    return f.useMemo(() => ({ ...u, update: F, refs: V, elements: L, floatingStyles: U }), [u, F, V, L, U]);
}
const ab = (e) => {
        function t(n) {
            return {}.hasOwnProperty.call(n, "current");
        }
        return {
            name: "arrow",
            options: e,
            fn(n) {
                const { element: r, padding: o } = typeof e == "function" ? e(n) : e;
                return r && t(r)
                    ? r.current != null
                        ? Ep({ element: r.current, padding: o }).fn(n)
                        : {}
                    : r
                      ? Ep({ element: r, padding: o }).fn(n)
                      : {};
            },
        };
    },
    sb = (e, t) => ({ ...YC(e), options: [e, t] }),
    ib = (e, t) => ({ ...XC(e), options: [e, t] }),
    lb = (e, t) => ({ ...eb(e), options: [e, t] }),
    cb = (e, t) => ({ ...qC(e), options: [e, t] }),
    ub = (e, t) => ({ ...ZC(e), options: [e, t] }),
    db = (e, t) => ({ ...JC(e), options: [e, t] }),
    fb = (e, t) => ({ ...ab(e), options: [e, t] });
var pb = "Arrow",
    Eg = f.forwardRef((e, t) => {
        const { children: n, width: r = 10, height: o = 5, ...a } = e;
        return x.jsx(X.svg, {
            ...a,
            ref: t,
            width: r,
            height: o,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : x.jsx("polygon", { points: "0,0 30,0 15,10" }),
        });
    });
Eg.displayName = pb;
var mb = Eg;
function Tg(e) {
    const [t, n] = f.useState(void 0);
    return (
        Oe(() => {
            if (e) {
                n({ width: e.offsetWidth, height: e.offsetHeight });
                const r = new ResizeObserver((o) => {
                    if (!Array.isArray(o) || !o.length) return;
                    const a = o[0];
                    let s, i;
                    if ("borderBoxSize" in a) {
                        const l = a.borderBoxSize,
                            c = Array.isArray(l) ? l[0] : l;
                        (s = c.inlineSize), (i = c.blockSize);
                    } else (s = e.offsetWidth), (i = e.offsetHeight);
                    n({ width: s, height: i });
                });
                return r.observe(e, { box: "border-box" }), () => r.unobserve(e);
            } else n(void 0);
        }, [e]),
        t
    );
}
var Pd = "Popper",
    [Pg, Hi] = fn(Pd),
    [hb, Ig] = Pg(Pd),
    kg = (e) => {
        const { __scopePopper: t, children: n } = e,
            [r, o] = f.useState(null);
        return x.jsx(hb, { scope: t, anchor: r, onAnchorChange: o, children: n });
    };
kg.displayName = Pd;
var Ng = "PopperAnchor",
    Rg = f.forwardRef((e, t) => {
        const { __scopePopper: n, virtualRef: r, ...o } = e,
            a = Ig(Ng, n),
            s = f.useRef(null),
            i = le(t, s),
            l = f.useRef(null);
        return (
            f.useEffect(() => {
                const c = l.current;
                (l.current = (r == null ? void 0 : r.current) || s.current),
                    c !== l.current && a.onAnchorChange(l.current);
            }),
            r ? null : x.jsx(X.div, { ...o, ref: i })
        );
    });
Rg.displayName = Ng;
var Id = "PopperContent",
    [vb, gb] = Pg(Id),
    Ag = f.forwardRef((e, t) => {
        var z, se, Se, oe, te, re;
        const {
                __scopePopper: n,
                side: r = "bottom",
                sideOffset: o = 0,
                align: a = "center",
                alignOffset: s = 0,
                arrowPadding: i = 0,
                avoidCollisions: l = !0,
                collisionBoundary: c = [],
                collisionPadding: u = 0,
                sticky: d = "partial",
                hideWhenDetached: g = !1,
                updatePositionStrategy: p = "optimized",
                onPlaced: C,
                ...h
            } = e,
            w = Ig(Id, n),
            [v, m] = f.useState(null),
            y = le(t, (Le) => m(Le)),
            [S, b] = f.useState(null),
            I = Tg(S),
            E = (I == null ? void 0 : I.width) ?? 0,
            N = (I == null ? void 0 : I.height) ?? 0,
            k = r + (a !== "center" ? "-" + a : ""),
            P = typeof u == "number" ? u : { top: 0, right: 0, bottom: 0, left: 0, ...u },
            _ = Array.isArray(c) ? c : [c],
            D = _.length > 0,
            F = { padding: P, boundary: _.filter(xb), altBoundary: D },
            {
                refs: M,
                floatingStyles: V,
                placement: L,
                isPositioned: U,
                middlewareData: T,
            } = ob({
                strategy: "fixed",
                placement: k,
                whileElementsMounted: (...Le) => GC(...Le, { animationFrame: p === "always" }),
                elements: { reference: w.anchor },
                middleware: [
                    sb({ mainAxis: o + N, alignmentAxis: s }),
                    l && ib({ mainAxis: !0, crossAxis: !1, limiter: d === "partial" ? lb() : void 0, ...F }),
                    l && cb({ ...F }),
                    ub({
                        ...F,
                        apply: ({ elements: Le, rects: ct, availableWidth: Zn, availableHeight: pn }) => {
                            const { width: Jn, height: Do } = ct.reference,
                                kr = Le.floating.style;
                            kr.setProperty("--radix-popper-available-width", `${Zn}px`),
                                kr.setProperty("--radix-popper-available-height", `${pn}px`),
                                kr.setProperty("--radix-popper-anchor-width", `${Jn}px`),
                                kr.setProperty("--radix-popper-anchor-height", `${Do}px`);
                        },
                    }),
                    S && fb({ element: S, padding: i }),
                    wb({ arrowWidth: E, arrowHeight: N }),
                    g && db({ strategy: "referenceHidden", ...F }),
                ],
            }),
            [R, B] = Mg(L),
            K = yt(C);
        Oe(() => {
            U && (K == null || K());
        }, [U, K]);
        const W = (z = T.arrow) == null ? void 0 : z.x,
            q = (se = T.arrow) == null ? void 0 : se.y,
            G = ((Se = T.arrow) == null ? void 0 : Se.centerOffset) !== 0,
            [de, we] = f.useState();
        return (
            Oe(() => {
                v && we(window.getComputedStyle(v).zIndex);
            }, [v]),
            x.jsx("div", {
                ref: M.setFloating,
                "data-radix-popper-content-wrapper": "",
                style: {
                    ...V,
                    transform: U ? V.transform : "translate(0, -200%)",
                    minWidth: "max-content",
                    zIndex: de,
                    "--radix-popper-transform-origin": [
                        (oe = T.transformOrigin) == null ? void 0 : oe.x,
                        (te = T.transformOrigin) == null ? void 0 : te.y,
                    ].join(" "),
                    ...(((re = T.hide) == null ? void 0 : re.referenceHidden) && {
                        visibility: "hidden",
                        pointerEvents: "none",
                    }),
                },
                dir: e.dir,
                children: x.jsx(vb, {
                    scope: n,
                    placedSide: R,
                    onArrowChange: b,
                    arrowX: W,
                    arrowY: q,
                    shouldHideArrow: G,
                    children: x.jsx(X.div, {
                        "data-side": R,
                        "data-align": B,
                        ...h,
                        ref: y,
                        style: { ...h.style, animation: U ? void 0 : "none" },
                    }),
                }),
            })
        );
    });
Ag.displayName = Id;
var Dg = "PopperArrow",
    yb = { top: "bottom", right: "left", bottom: "top", left: "right" },
    _g = f.forwardRef(function (t, n) {
        const { __scopePopper: r, ...o } = t,
            a = gb(Dg, r),
            s = yb[a.placedSide];
        return x.jsx("span", {
            ref: a.onArrowChange,
            style: {
                position: "absolute",
                left: a.arrowX,
                top: a.arrowY,
                [s]: 0,
                transformOrigin: { top: "", right: "0 0", bottom: "center 0", left: "100% 0" }[a.placedSide],
                transform: {
                    top: "translateY(100%)",
                    right: "translateY(50%) rotate(90deg) translateX(-50%)",
                    bottom: "rotate(180deg)",
                    left: "translateY(50%) rotate(-90deg) translateX(50%)",
                }[a.placedSide],
                visibility: a.shouldHideArrow ? "hidden" : void 0,
            },
            children: x.jsx(mb, { ...o, ref: n, style: { ...o.style, display: "block" } }),
        });
    });
_g.displayName = Dg;
function xb(e) {
    return e !== null;
}
var wb = (e) => ({
    name: "transformOrigin",
    options: e,
    fn(t) {
        var w, v, m;
        const { placement: n, rects: r, middlewareData: o } = t,
            s = ((w = o.arrow) == null ? void 0 : w.centerOffset) !== 0,
            i = s ? 0 : e.arrowWidth,
            l = s ? 0 : e.arrowHeight,
            [c, u] = Mg(n),
            d = { start: "0%", center: "50%", end: "100%" }[u],
            g = (((v = o.arrow) == null ? void 0 : v.x) ?? 0) + i / 2,
            p = (((m = o.arrow) == null ? void 0 : m.y) ?? 0) + l / 2;
        let C = "",
            h = "";
        return (
            c === "bottom"
                ? ((C = s ? d : `${g}px`), (h = `${-l}px`))
                : c === "top"
                  ? ((C = s ? d : `${g}px`), (h = `${r.floating.height + l}px`))
                  : c === "right"
                    ? ((C = `${-l}px`), (h = s ? d : `${p}px`))
                    : c === "left" && ((C = `${r.floating.width + l}px`), (h = s ? d : `${p}px`)),
            { data: { x: C, y: h } }
        );
    },
});
function Mg(e) {
    const [t, n = "center"] = e.split("-");
    return [t, n];
}
var Sb = kg,
    Og = Rg,
    jg = Ag,
    Lg = _g,
    [Ki] = fn("Tooltip", [Hi]),
    kd = Hi(),
    Fg = "TooltipProvider",
    Cb = 700,
    Pp = "tooltip.open",
    [bb, Bg] = Ki(Fg),
    zg = (e) => {
        const {
                __scopeTooltip: t,
                delayDuration: n = Cb,
                skipDelayDuration: r = 300,
                disableHoverableContent: o = !1,
                children: a,
            } = e,
            s = f.useRef(!0),
            i = f.useRef(!1),
            l = f.useRef(0);
        return (
            f.useEffect(() => {
                const c = l.current;
                return () => window.clearTimeout(c);
            }, []),
            x.jsx(bb, {
                scope: t,
                isOpenDelayedRef: s,
                delayDuration: n,
                onOpen: f.useCallback(() => {
                    window.clearTimeout(l.current), (s.current = !1);
                }, []),
                onClose: f.useCallback(() => {
                    window.clearTimeout(l.current), (l.current = window.setTimeout(() => (s.current = !0), r));
                }, [r]),
                isPointerInTransitRef: i,
                onPointerInTransitChange: f.useCallback((c) => {
                    i.current = c;
                }, []),
                disableHoverableContent: o,
                children: a,
            })
        );
    };
zg.displayName = Fg;
var $g = "Tooltip",
    [GI, Qi] = Ki($g),
    Jc = "TooltipTrigger",
    Eb = f.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = Qi(Jc, n),
            a = Bg(Jc, n),
            s = kd(n),
            i = f.useRef(null),
            l = le(t, i, o.onTriggerChange),
            c = f.useRef(!1),
            u = f.useRef(!1),
            d = f.useCallback(() => (c.current = !1), []);
        return (
            f.useEffect(() => () => document.removeEventListener("pointerup", d), [d]),
            x.jsx(Og, {
                asChild: !0,
                ...s,
                children: x.jsx(X.button, {
                    "aria-describedby": o.open ? o.contentId : void 0,
                    "data-state": o.stateAttribute,
                    ...r,
                    ref: l,
                    onPointerMove: H(e.onPointerMove, (g) => {
                        g.pointerType !== "touch" &&
                            !u.current &&
                            !a.isPointerInTransitRef.current &&
                            (o.onTriggerEnter(), (u.current = !0));
                    }),
                    onPointerLeave: H(e.onPointerLeave, () => {
                        o.onTriggerLeave(), (u.current = !1);
                    }),
                    onPointerDown: H(e.onPointerDown, () => {
                        o.open && o.onClose(),
                            (c.current = !0),
                            document.addEventListener("pointerup", d, { once: !0 });
                    }),
                    onFocus: H(e.onFocus, () => {
                        c.current || o.onOpen();
                    }),
                    onBlur: H(e.onBlur, o.onClose),
                    onClick: H(e.onClick, o.onClose),
                }),
            })
        );
    });
Eb.displayName = Jc;
var Tb = "TooltipPortal",
    [YI, Pb] = Ki(Tb, { forceMount: void 0 }),
    Co = "TooltipContent",
    Ug = f.forwardRef((e, t) => {
        const n = Pb(Co, e.__scopeTooltip),
            { forceMount: r = n.forceMount, side: o = "top", ...a } = e,
            s = Qi(Co, e.__scopeTooltip);
        return x.jsx(Li, {
            present: r || s.open,
            children: s.disableHoverableContent
                ? x.jsx(Vg, { side: o, ...a, ref: t })
                : x.jsx(Ib, { side: o, ...a, ref: t }),
        });
    }),
    Ib = f.forwardRef((e, t) => {
        const n = Qi(Co, e.__scopeTooltip),
            r = Bg(Co, e.__scopeTooltip),
            o = f.useRef(null),
            a = le(t, o),
            [s, i] = f.useState(null),
            { trigger: l, onClose: c } = n,
            u = o.current,
            { onPointerInTransitChange: d } = r,
            g = f.useCallback(() => {
                i(null), d(!1);
            }, [d]),
            p = f.useCallback(
                (C, h) => {
                    const w = C.currentTarget,
                        v = { x: C.clientX, y: C.clientY },
                        m = Db(v, w.getBoundingClientRect()),
                        y = _b(v, m),
                        S = Mb(h.getBoundingClientRect()),
                        b = jb([...y, ...S]);
                    i(b), d(!0);
                },
                [d]
            );
        return (
            f.useEffect(() => () => g(), [g]),
            f.useEffect(() => {
                if (l && u) {
                    const C = (w) => p(w, u),
                        h = (w) => p(w, l);
                    return (
                        l.addEventListener("pointerleave", C),
                        u.addEventListener("pointerleave", h),
                        () => {
                            l.removeEventListener("pointerleave", C), u.removeEventListener("pointerleave", h);
                        }
                    );
                }
            }, [l, u, p, g]),
            f.useEffect(() => {
                if (s) {
                    const C = (h) => {
                        const w = h.target,
                            v = { x: h.clientX, y: h.clientY },
                            m = (l == null ? void 0 : l.contains(w)) || (u == null ? void 0 : u.contains(w)),
                            y = !Ob(v, s);
                        m ? g() : y && (g(), c());
                    };
                    return (
                        document.addEventListener("pointermove", C),
                        () => document.removeEventListener("pointermove", C)
                    );
                }
            }, [l, u, s, c, g]),
            x.jsx(Vg, { ...e, ref: a })
        );
    }),
    [kb, Nb] = Ki($g, { isInside: !1 }),
    Rb = Bw("TooltipContent"),
    Vg = f.forwardRef((e, t) => {
        const {
                __scopeTooltip: n,
                children: r,
                "aria-label": o,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                ...i
            } = e,
            l = Qi(Co, n),
            c = kd(n),
            { onClose: u } = l;
        return (
            f.useEffect(() => (document.addEventListener(Pp, u), () => document.removeEventListener(Pp, u)), [u]),
            f.useEffect(() => {
                if (l.trigger) {
                    const d = (g) => {
                        const p = g.target;
                        p != null && p.contains(l.trigger) && u();
                    };
                    return (
                        window.addEventListener("scroll", d, { capture: !0 }),
                        () => window.removeEventListener("scroll", d, { capture: !0 })
                    );
                }
            }, [l.trigger, u]),
            x.jsx(ji, {
                asChild: !0,
                disableOutsidePointerEvents: !1,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                onFocusOutside: (d) => d.preventDefault(),
                onDismiss: u,
                children: x.jsxs(jg, {
                    "data-state": l.stateAttribute,
                    ...c,
                    ...i,
                    ref: t,
                    style: {
                        ...i.style,
                        "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                        "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                        "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                        "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                        "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)",
                    },
                    children: [
                        x.jsx(Rb, { children: r }),
                        x.jsx(kb, {
                            scope: n,
                            isInside: !0,
                            children: x.jsx(i1, { id: l.contentId, role: "tooltip", children: o || r }),
                        }),
                    ],
                }),
            })
        );
    });
Ug.displayName = Co;
var Wg = "TooltipArrow",
    Ab = f.forwardRef((e, t) => {
        const { __scopeTooltip: n, ...r } = e,
            o = kd(n);
        return Nb(Wg, n).isInside ? null : x.jsx(Lg, { ...o, ...r, ref: t });
    });
Ab.displayName = Wg;
function Db(e, t) {
    const n = Math.abs(t.top - e.y),
        r = Math.abs(t.bottom - e.y),
        o = Math.abs(t.right - e.x),
        a = Math.abs(t.left - e.x);
    switch (Math.min(n, r, o, a)) {
        case a:
            return "left";
        case o:
            return "right";
        case n:
            return "top";
        case r:
            return "bottom";
        default:
            throw new Error("unreachable");
    }
}
function _b(e, t, n = 5) {
    const r = [];
    switch (t) {
        case "top":
            r.push({ x: e.x - n, y: e.y + n }, { x: e.x + n, y: e.y + n });
            break;
        case "bottom":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x + n, y: e.y - n });
            break;
        case "left":
            r.push({ x: e.x + n, y: e.y - n }, { x: e.x + n, y: e.y + n });
            break;
        case "right":
            r.push({ x: e.x - n, y: e.y - n }, { x: e.x - n, y: e.y + n });
            break;
    }
    return r;
}
function Mb(e) {
    const { top: t, right: n, bottom: r, left: o } = e;
    return [
        { x: o, y: t },
        { x: n, y: t },
        { x: n, y: r },
        { x: o, y: r },
    ];
}
function Ob(e, t) {
    const { x: n, y: r } = e;
    let o = !1;
    for (let a = 0, s = t.length - 1; a < t.length; s = a++) {
        const i = t[a],
            l = t[s],
            c = i.x,
            u = i.y,
            d = l.x,
            g = l.y;
        u > r != g > r && n < ((d - c) * (r - u)) / (g - u) + c && (o = !o);
    }
    return o;
}
function jb(e) {
    const t = e.slice();
    return t.sort((n, r) => (n.x < r.x ? -1 : n.x > r.x ? 1 : n.y < r.y ? -1 : n.y > r.y ? 1 : 0)), Lb(t);
}
function Lb(e) {
    if (e.length <= 1) return e.slice();
    const t = [];
    for (let r = 0; r < e.length; r++) {
        const o = e[r];
        for (; t.length >= 2; ) {
            const a = t[t.length - 1],
                s = t[t.length - 2];
            if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) t.pop();
            else break;
        }
        t.push(o);
    }
    t.pop();
    const n = [];
    for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r];
        for (; n.length >= 2; ) {
            const a = n[n.length - 1],
                s = n[n.length - 2];
            if ((a.x - s.x) * (o.y - s.y) >= (a.y - s.y) * (o.x - s.x)) n.pop();
            else break;
        }
        n.push(o);
    }
    return n.pop(), t.length === 1 && n.length === 1 && t[0].x === n[0].x && t[0].y === n[0].y ? t : t.concat(n);
}
var Fb = zg,
    Hg = Ug;
const Bb = Fb,
    zb = f.forwardRef(({ className: e, sideOffset: t = 4, ...n }, r) =>
        x.jsx(Hg, {
            "data-lov-id": "src/components/ui/tooltip.tsx:16:2",
            "data-lov-name": "TooltipPrimitive.Content",
            "data-component-path": "src/components/ui/tooltip.tsx",
            "data-component-line": "16",
            "data-component-file": "tooltip.tsx",
            "data-component-name": "TooltipPrimitive.Content",
            "data-component-content": "%7B%7D",
            ref: r,
            sideOffset: t,
            className: ae(
                "z-50 overflow-hidden rounded-md border bg-popover px-3 py-1.5 text-sm text-popover-foreground shadow-md animate-in fade-in-0 zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                e
            ),
            ...n,
        })
    );
zb.displayName = Hg.displayName;
var Gi = class {
        constructor() {
            (this.listeners = new Set()), (this.subscribe = this.subscribe.bind(this));
        }
        subscribe(e) {
            return (
                this.listeners.add(e),
                this.onSubscribe(),
                () => {
                    this.listeners.delete(e), this.onUnsubscribe();
                }
            );
        }
        hasListeners() {
            return this.listeners.size > 0;
        }
        onSubscribe() {}
        onUnsubscribe() {}
    },
    $b = {
        setTimeout: (e, t) => setTimeout(e, t),
        clearTimeout: (e) => clearTimeout(e),
        setInterval: (e, t) => setInterval(e, t),
        clearInterval: (e) => clearInterval(e),
    },
    Pn,
    xu,
    nm,
    Ub =
        ((nm = class {
            constructor() {
                ee(this, Pn, $b);
                ee(this, xu, !1);
            }
            setTimeoutProvider(e) {
                Q(this, Pn, e);
            }
            setTimeout(e, t) {
                return A(this, Pn).setTimeout(e, t);
            }
            clearTimeout(e) {
                A(this, Pn).clearTimeout(e);
            }
            setInterval(e, t) {
                return A(this, Pn).setInterval(e, t);
            }
            clearInterval(e) {
                A(this, Pn).clearInterval(e);
            }
        }),
        (Pn = new WeakMap()),
        (xu = new WeakMap()),
        nm),
    eu = new Ub();
function Vb(e) {
    setTimeout(e, 0);
}
var Yi = typeof window > "u" || "Deno" in globalThis;
function Pt() {}
function Wb(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Hb(e) {
    return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Kb(e, t) {
    return Math.max(e + (t || 0) - Date.now(), 0);
}
function tu(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Qb(e, t) {
    return typeof e == "function" ? e(t) : e;
}
function Ip(e, t) {
    const { type: n = "all", exact: r, fetchStatus: o, predicate: a, queryKey: s, stale: i } = e;
    if (s) {
        if (r) {
            if (t.queryHash !== Nd(s, t.options)) return !1;
        } else if (!Ia(t.queryKey, s)) return !1;
    }
    if (n !== "all") {
        const l = t.isActive();
        if ((n === "active" && !l) || (n === "inactive" && l)) return !1;
    }
    return !((typeof i == "boolean" && t.isStale() !== i) || (o && o !== t.state.fetchStatus) || (a && !a(t)));
}
function kp(e, t) {
    const { exact: n, status: r, predicate: o, mutationKey: a } = e;
    if (a) {
        if (!t.options.mutationKey) return !1;
        if (n) {
            if (Pa(t.options.mutationKey) !== Pa(a)) return !1;
        } else if (!Ia(t.options.mutationKey, a)) return !1;
    }
    return !((r && t.state.status !== r) || (o && !o(t)));
}
function Nd(e, t) {
    return ((t == null ? void 0 : t.queryKeyHashFn) || Pa)(e);
}
function Pa(e) {
    return JSON.stringify(e, (t, n) =>
        nu(n)
            ? Object.keys(n)
                  .sort()
                  .reduce((r, o) => ((r[o] = n[o]), r), {})
            : n
    );
}
function Ia(e, t) {
    return e === t
        ? !0
        : typeof e != typeof t
          ? !1
          : e && t && typeof e == "object" && typeof t == "object"
            ? Object.keys(t).every((n) => Ia(e[n], t[n]))
            : !1;
}
var Gb = Object.prototype.hasOwnProperty;
function Kg(e, t) {
    if (e === t) return e;
    const n = Np(e) && Np(t);
    if (!n && !(nu(e) && nu(t))) return t;
    const o = (n ? e : Object.keys(e)).length,
        a = n ? t : Object.keys(t),
        s = a.length,
        i = n ? new Array(s) : {};
    let l = 0;
    for (let c = 0; c < s; c++) {
        const u = n ? c : a[c],
            d = e[u],
            g = t[u];
        if (d === g) {
            (i[u] = d), (n ? c < o : Gb.call(e, u)) && l++;
            continue;
        }
        if (d === null || g === null || typeof d != "object" || typeof g != "object") {
            i[u] = g;
            continue;
        }
        const p = Kg(d, g);
        (i[u] = p), p === d && l++;
    }
    return o === s && l === o ? e : i;
}
function Np(e) {
    return Array.isArray(e) && e.length === Object.keys(e).length;
}
function nu(e) {
    if (!Rp(e)) return !1;
    const t = e.constructor;
    if (t === void 0) return !0;
    const n = t.prototype;
    return !(!Rp(n) || !n.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function Rp(e) {
    return Object.prototype.toString.call(e) === "[object Object]";
}
function Yb(e) {
    return new Promise((t) => {
        eu.setTimeout(t, e);
    });
}
function Xb(e, t, n) {
    return typeof n.structuralSharing == "function"
        ? n.structuralSharing(e, t)
        : n.structuralSharing !== !1
          ? Kg(e, t)
          : t;
}
function qb(e, t, n = 0) {
    const r = [...e, t];
    return n && r.length > n ? r.slice(1) : r;
}
function Zb(e, t, n = 0) {
    const r = [t, ...e];
    return n && r.length > n ? r.slice(0, -1) : r;
}
var Rd = Symbol();
function Qg(e, t) {
    return !e.queryFn && t != null && t.initialPromise
        ? () => t.initialPromise
        : !e.queryFn || e.queryFn === Rd
          ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`))
          : e.queryFn;
}
var ir,
    In,
    oo,
    rm,
    Jb =
        ((rm = class extends Gi {
            constructor() {
                super();
                ee(this, ir);
                ee(this, In);
                ee(this, oo);
                Q(this, oo, (t) => {
                    if (!Yi && window.addEventListener) {
                        const n = () => t();
                        return (
                            window.addEventListener("visibilitychange", n, !1),
                            () => {
                                window.removeEventListener("visibilitychange", n);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                A(this, In) || this.setEventListener(A(this, oo));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = A(this, In)) == null || t.call(this), Q(this, In, void 0));
            }
            setEventListener(t) {
                var n;
                Q(this, oo, t),
                    (n = A(this, In)) == null || n.call(this),
                    Q(
                        this,
                        In,
                        t((r) => {
                            typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
                        })
                    );
            }
            setFocused(t) {
                A(this, ir) !== t && (Q(this, ir, t), this.onFocus());
            }
            onFocus() {
                const t = this.isFocused();
                this.listeners.forEach((n) => {
                    n(t);
                });
            }
            isFocused() {
                var t;
                return typeof A(this, ir) == "boolean"
                    ? A(this, ir)
                    : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
            }
        }),
        (ir = new WeakMap()),
        (In = new WeakMap()),
        (oo = new WeakMap()),
        rm),
    Gg = new Jb();
function eE() {
    let e, t;
    const n = new Promise((o, a) => {
        (e = o), (t = a);
    });
    (n.status = "pending"), n.catch(() => {});
    function r(o) {
        Object.assign(n, o), delete n.resolve, delete n.reject;
    }
    return (
        (n.resolve = (o) => {
            r({ status: "fulfilled", value: o }), e(o);
        }),
        (n.reject = (o) => {
            r({ status: "rejected", reason: o }), t(o);
        }),
        n
    );
}
var tE = Vb;
function nE() {
    let e = [],
        t = 0,
        n = (i) => {
            i();
        },
        r = (i) => {
            i();
        },
        o = tE;
    const a = (i) => {
            t
                ? e.push(i)
                : o(() => {
                      n(i);
                  });
        },
        s = () => {
            const i = e;
            (e = []),
                i.length &&
                    o(() => {
                        r(() => {
                            i.forEach((l) => {
                                n(l);
                            });
                        });
                    });
        };
    return {
        batch: (i) => {
            let l;
            t++;
            try {
                l = i();
            } finally {
                t--, t || s();
            }
            return l;
        },
        batchCalls:
            (i) =>
            (...l) => {
                a(() => {
                    i(...l);
                });
            },
        schedule: a,
        setNotifyFunction: (i) => {
            n = i;
        },
        setBatchNotifyFunction: (i) => {
            r = i;
        },
        setScheduler: (i) => {
            o = i;
        },
    };
}
var He = nE(),
    ao,
    kn,
    so,
    om,
    rE =
        ((om = class extends Gi {
            constructor() {
                super();
                ee(this, ao, !0);
                ee(this, kn);
                ee(this, so);
                Q(this, so, (t) => {
                    if (!Yi && window.addEventListener) {
                        const n = () => t(!0),
                            r = () => t(!1);
                        return (
                            window.addEventListener("online", n, !1),
                            window.addEventListener("offline", r, !1),
                            () => {
                                window.removeEventListener("online", n), window.removeEventListener("offline", r);
                            }
                        );
                    }
                });
            }
            onSubscribe() {
                A(this, kn) || this.setEventListener(A(this, so));
            }
            onUnsubscribe() {
                var t;
                this.hasListeners() || ((t = A(this, kn)) == null || t.call(this), Q(this, kn, void 0));
            }
            setEventListener(t) {
                var n;
                Q(this, so, t), (n = A(this, kn)) == null || n.call(this), Q(this, kn, t(this.setOnline.bind(this)));
            }
            setOnline(t) {
                A(this, ao) !== t &&
                    (Q(this, ao, t),
                    this.listeners.forEach((r) => {
                        r(t);
                    }));
            }
            isOnline() {
                return A(this, ao);
            }
        }),
        (ao = new WeakMap()),
        (kn = new WeakMap()),
        (so = new WeakMap()),
        om),
    pi = new rE();
function oE(e) {
    return Math.min(1e3 * 2 ** e, 3e4);
}
function Yg(e) {
    return (e ?? "online") === "online" ? pi.isOnline() : !0;
}
var ru = class extends Error {
    constructor(e) {
        super("CancelledError"),
            (this.revert = e == null ? void 0 : e.revert),
            (this.silent = e == null ? void 0 : e.silent);
    }
};
function Xg(e) {
    let t = !1,
        n = 0,
        r;
    const o = eE(),
        a = () => o.status !== "pending",
        s = (h) => {
            var w;
            if (!a()) {
                const v = new ru(h);
                g(v), (w = e.onCancel) == null || w.call(e, v);
            }
        },
        i = () => {
            t = !0;
        },
        l = () => {
            t = !1;
        },
        c = () => Gg.isFocused() && (e.networkMode === "always" || pi.isOnline()) && e.canRun(),
        u = () => Yg(e.networkMode) && e.canRun(),
        d = (h) => {
            a() || (r == null || r(), o.resolve(h));
        },
        g = (h) => {
            a() || (r == null || r(), o.reject(h));
        },
        p = () =>
            new Promise((h) => {
                var w;
                (r = (v) => {
                    (a() || c()) && h(v);
                }),
                    (w = e.onPause) == null || w.call(e);
            }).then(() => {
                var h;
                (r = void 0), a() || (h = e.onContinue) == null || h.call(e);
            }),
        C = () => {
            if (a()) return;
            let h;
            const w = n === 0 ? e.initialPromise : void 0;
            try {
                h = w ?? e.fn();
            } catch (v) {
                h = Promise.reject(v);
            }
            Promise.resolve(h)
                .then(d)
                .catch((v) => {
                    var I;
                    if (a()) return;
                    const m = e.retry ?? (Yi ? 0 : 3),
                        y = e.retryDelay ?? oE,
                        S = typeof y == "function" ? y(n, v) : y,
                        b = m === !0 || (typeof m == "number" && n < m) || (typeof m == "function" && m(n, v));
                    if (t || !b) {
                        g(v);
                        return;
                    }
                    n++,
                        (I = e.onFail) == null || I.call(e, n, v),
                        Yb(S)
                            .then(() => (c() ? void 0 : p()))
                            .then(() => {
                                t ? g(v) : C();
                            });
                });
        };
    return {
        promise: o,
        status: () => o.status,
        cancel: s,
        continue: () => (r == null || r(), o),
        cancelRetry: i,
        continueRetry: l,
        canStart: u,
        start: () => (u() ? C() : p().then(C), o),
    };
}
var lr,
    am,
    qg =
        ((am = class {
            constructor() {
                ee(this, lr);
            }
            destroy() {
                this.clearGcTimeout();
            }
            scheduleGc() {
                this.clearGcTimeout(),
                    Hb(this.gcTime) &&
                        Q(
                            this,
                            lr,
                            eu.setTimeout(() => {
                                this.optionalRemove();
                            }, this.gcTime)
                        );
            }
            updateGcTime(e) {
                this.gcTime = Math.max(this.gcTime || 0, e ?? (Yi ? 1 / 0 : 5 * 60 * 1e3));
            }
            clearGcTimeout() {
                A(this, lr) && (eu.clearTimeout(A(this, lr)), Q(this, lr, void 0));
            }
        }),
        (lr = new WeakMap()),
        am),
    cr,
    io,
    dt,
    ur,
    Ne,
    Ra,
    dr,
    It,
    qt,
    sm,
    aE =
        ((sm = class extends qg {
            constructor(t) {
                super();
                ee(this, It);
                ee(this, cr);
                ee(this, io);
                ee(this, dt);
                ee(this, ur);
                ee(this, Ne);
                ee(this, Ra);
                ee(this, dr);
                Q(this, dr, !1),
                    Q(this, Ra, t.defaultOptions),
                    this.setOptions(t.options),
                    (this.observers = []),
                    Q(this, ur, t.client),
                    Q(this, dt, A(this, ur).getQueryCache()),
                    (this.queryKey = t.queryKey),
                    (this.queryHash = t.queryHash),
                    Q(this, cr, Ap(this.options)),
                    (this.state = t.state ?? A(this, cr)),
                    this.scheduleGc();
            }
            get meta() {
                return this.options.meta;
            }
            get promise() {
                var t;
                return (t = A(this, Ne)) == null ? void 0 : t.promise;
            }
            setOptions(t) {
                if (
                    ((this.options = { ...A(this, Ra), ...t }),
                    this.updateGcTime(this.options.gcTime),
                    this.state && this.state.data === void 0)
                ) {
                    const n = Ap(this.options);
                    n.data !== void 0 &&
                        (this.setData(n.data, { updatedAt: n.dataUpdatedAt, manual: !0 }), Q(this, cr, n));
                }
            }
            optionalRemove() {
                !this.observers.length && this.state.fetchStatus === "idle" && A(this, dt).remove(this);
            }
            setData(t, n) {
                const r = Xb(this.state.data, t, this.options);
                return (
                    Fe(this, It, qt).call(this, {
                        data: r,
                        type: "success",
                        dataUpdatedAt: n == null ? void 0 : n.updatedAt,
                        manual: n == null ? void 0 : n.manual,
                    }),
                    r
                );
            }
            setState(t, n) {
                Fe(this, It, qt).call(this, { type: "setState", state: t, setStateOptions: n });
            }
            cancel(t) {
                var r, o;
                const n = (r = A(this, Ne)) == null ? void 0 : r.promise;
                return (o = A(this, Ne)) == null || o.cancel(t), n ? n.then(Pt).catch(Pt) : Promise.resolve();
            }
            destroy() {
                super.destroy(), this.cancel({ silent: !0 });
            }
            reset() {
                this.destroy(), this.setState(A(this, cr));
            }
            isActive() {
                return this.observers.some((t) => Qb(t.options.enabled, this) !== !1);
            }
            isDisabled() {
                return this.getObserversCount() > 0
                    ? !this.isActive()
                    : this.options.queryFn === Rd || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
            }
            isStatic() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => tu(t.options.staleTime, this) === "static")
                    : !1;
            }
            isStale() {
                return this.getObserversCount() > 0
                    ? this.observers.some((t) => t.getCurrentResult().isStale)
                    : this.state.data === void 0 || this.state.isInvalidated;
            }
            isStaleByTime(t = 0) {
                return this.state.data === void 0
                    ? !0
                    : t === "static"
                      ? !1
                      : this.state.isInvalidated
                        ? !0
                        : !Kb(this.state.dataUpdatedAt, t);
            }
            onFocus() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = A(this, Ne)) == null || n.continue();
            }
            onOnline() {
                var n;
                const t = this.observers.find((r) => r.shouldFetchOnReconnect());
                t == null || t.refetch({ cancelRefetch: !1 }), (n = A(this, Ne)) == null || n.continue();
            }
            addObserver(t) {
                this.observers.includes(t) ||
                    (this.observers.push(t),
                    this.clearGcTimeout(),
                    A(this, dt).notify({ type: "observerAdded", query: this, observer: t }));
            }
            removeObserver(t) {
                this.observers.includes(t) &&
                    ((this.observers = this.observers.filter((n) => n !== t)),
                    this.observers.length ||
                        (A(this, Ne) && (A(this, dr) ? A(this, Ne).cancel({ revert: !0 }) : A(this, Ne).cancelRetry()),
                        this.scheduleGc()),
                    A(this, dt).notify({ type: "observerRemoved", query: this, observer: t }));
            }
            getObserversCount() {
                return this.observers.length;
            }
            invalidate() {
                this.state.isInvalidated || Fe(this, It, qt).call(this, { type: "invalidate" });
            }
            async fetch(t, n) {
                var l, c, u, d, g, p, C, h, w, v, m, y;
                if (
                    this.state.fetchStatus !== "idle" &&
                    ((l = A(this, Ne)) == null ? void 0 : l.status()) !== "rejected"
                ) {
                    if (this.state.data !== void 0 && n != null && n.cancelRefetch) this.cancel({ silent: !0 });
                    else if (A(this, Ne)) return A(this, Ne).continueRetry(), A(this, Ne).promise;
                }
                if ((t && this.setOptions(t), !this.options.queryFn)) {
                    const S = this.observers.find((b) => b.options.queryFn);
                    S && this.setOptions(S.options);
                }
                const r = new AbortController(),
                    o = (S) => {
                        Object.defineProperty(S, "signal", { enumerable: !0, get: () => (Q(this, dr, !0), r.signal) });
                    },
                    a = () => {
                        const S = Qg(this.options, n),
                            I = (() => {
                                const E = { client: A(this, ur), queryKey: this.queryKey, meta: this.meta };
                                return o(E), E;
                            })();
                        return Q(this, dr, !1), this.options.persister ? this.options.persister(S, I, this) : S(I);
                    },
                    i = (() => {
                        const S = {
                            fetchOptions: n,
                            options: this.options,
                            queryKey: this.queryKey,
                            client: A(this, ur),
                            state: this.state,
                            fetchFn: a,
                        };
                        return o(S), S;
                    })();
                (c = this.options.behavior) == null || c.onFetch(i, this),
                    Q(this, io, this.state),
                    (this.state.fetchStatus === "idle" ||
                        this.state.fetchMeta !== ((u = i.fetchOptions) == null ? void 0 : u.meta)) &&
                        Fe(this, It, qt).call(this, {
                            type: "fetch",
                            meta: (d = i.fetchOptions) == null ? void 0 : d.meta,
                        }),
                    Q(
                        this,
                        Ne,
                        Xg({
                            initialPromise: n == null ? void 0 : n.initialPromise,
                            fn: i.fetchFn,
                            onCancel: (S) => {
                                S instanceof ru && S.revert && this.setState({ ...A(this, io), fetchStatus: "idle" }),
                                    r.abort();
                            },
                            onFail: (S, b) => {
                                Fe(this, It, qt).call(this, { type: "failed", failureCount: S, error: b });
                            },
                            onPause: () => {
                                Fe(this, It, qt).call(this, { type: "pause" });
                            },
                            onContinue: () => {
                                Fe(this, It, qt).call(this, { type: "continue" });
                            },
                            retry: i.options.retry,
                            retryDelay: i.options.retryDelay,
                            networkMode: i.options.networkMode,
                            canRun: () => !0,
                        })
                    );
                try {
                    const S = await A(this, Ne).start();
                    if (S === void 0) throw new Error(`${this.queryHash} data is undefined`);
                    return (
                        this.setData(S),
                        (p = (g = A(this, dt).config).onSuccess) == null || p.call(g, S, this),
                        (h = (C = A(this, dt).config).onSettled) == null || h.call(C, S, this.state.error, this),
                        S
                    );
                } catch (S) {
                    if (S instanceof ru) {
                        if (S.silent) return A(this, Ne).promise;
                        if (S.revert) {
                            if (this.state.data === void 0) throw S;
                            return this.state.data;
                        }
                    }
                    throw (
                        (Fe(this, It, qt).call(this, { type: "error", error: S }),
                        (v = (w = A(this, dt).config).onError) == null || v.call(w, S, this),
                        (y = (m = A(this, dt).config).onSettled) == null || y.call(m, this.state.data, S, this),
                        S)
                    );
                } finally {
                    this.scheduleGc();
                }
            }
        }),
        (cr = new WeakMap()),
        (io = new WeakMap()),
        (dt = new WeakMap()),
        (ur = new WeakMap()),
        (Ne = new WeakMap()),
        (Ra = new WeakMap()),
        (dr = new WeakMap()),
        (It = new WeakSet()),
        (qt = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, fetchFailureCount: t.failureCount, fetchFailureReason: t.error };
                    case "pause":
                        return { ...r, fetchStatus: "paused" };
                    case "continue":
                        return { ...r, fetchStatus: "fetching" };
                    case "fetch":
                        return { ...r, ...sE(r.data, this.options), fetchMeta: t.meta ?? null };
                    case "success":
                        const o = {
                            ...r,
                            data: t.data,
                            dataUpdateCount: r.dataUpdateCount + 1,
                            dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
                            error: null,
                            isInvalidated: !1,
                            status: "success",
                            ...(!t.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null }),
                        };
                        return Q(this, io, t.manual ? o : void 0), o;
                    case "error":
                        const a = t.error;
                        return {
                            ...r,
                            error: a,
                            errorUpdateCount: r.errorUpdateCount + 1,
                            errorUpdatedAt: Date.now(),
                            fetchFailureCount: r.fetchFailureCount + 1,
                            fetchFailureReason: a,
                            fetchStatus: "idle",
                            status: "error",
                        };
                    case "invalidate":
                        return { ...r, isInvalidated: !0 };
                    case "setState":
                        return { ...r, ...t.state };
                }
            };
            (this.state = n(this.state)),
                He.batch(() => {
                    this.observers.forEach((r) => {
                        r.onQueryUpdate();
                    }),
                        A(this, dt).notify({ query: this, type: "updated", action: t });
                });
        }),
        sm);
function sE(e, t) {
    return {
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchStatus: Yg(t.networkMode) ? "fetching" : "paused",
        ...(e === void 0 && { error: null, status: "pending" }),
    };
}
function Ap(e) {
    const t = typeof e.initialData == "function" ? e.initialData() : e.initialData,
        n = t !== void 0,
        r = n ? (typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt) : 0;
    return {
        data: t,
        dataUpdateCount: 0,
        dataUpdatedAt: n ? (r ?? Date.now()) : 0,
        error: null,
        errorUpdateCount: 0,
        errorUpdatedAt: 0,
        fetchFailureCount: 0,
        fetchFailureReason: null,
        fetchMeta: null,
        isInvalidated: !1,
        status: n ? "success" : "pending",
        fetchStatus: "idle",
    };
}
function Dp(e) {
    return {
        onFetch: (t, n) => {
            var u, d, g, p, C;
            const r = t.options,
                o =
                    (g = (d = (u = t.fetchOptions) == null ? void 0 : u.meta) == null ? void 0 : d.fetchMore) == null
                        ? void 0
                        : g.direction,
                a = ((p = t.state.data) == null ? void 0 : p.pages) || [],
                s = ((C = t.state.data) == null ? void 0 : C.pageParams) || [];
            let i = { pages: [], pageParams: [] },
                l = 0;
            const c = async () => {
                let h = !1;
                const w = (y) => {
                        Object.defineProperty(y, "signal", {
                            enumerable: !0,
                            get: () => (
                                t.signal.aborted
                                    ? (h = !0)
                                    : t.signal.addEventListener("abort", () => {
                                          h = !0;
                                      }),
                                t.signal
                            ),
                        });
                    },
                    v = Qg(t.options, t.fetchOptions),
                    m = async (y, S, b) => {
                        if (h) return Promise.reject();
                        if (S == null && y.pages.length) return Promise.resolve(y);
                        const E = (() => {
                                const _ = {
                                    client: t.client,
                                    queryKey: t.queryKey,
                                    pageParam: S,
                                    direction: b ? "backward" : "forward",
                                    meta: t.options.meta,
                                };
                                return w(_), _;
                            })(),
                            N = await v(E),
                            { maxPages: k } = t.options,
                            P = b ? Zb : qb;
                        return { pages: P(y.pages, N, k), pageParams: P(y.pageParams, S, k) };
                    };
                if (o && a.length) {
                    const y = o === "backward",
                        S = y ? iE : _p,
                        b = { pages: a, pageParams: s },
                        I = S(r, b);
                    i = await m(b, I, y);
                } else {
                    const y = e ?? a.length;
                    do {
                        const S = l === 0 ? (s[0] ?? r.initialPageParam) : _p(r, i);
                        if (l > 0 && S == null) break;
                        (i = await m(i, S)), l++;
                    } while (l < y);
                }
                return i;
            };
            t.options.persister
                ? (t.fetchFn = () => {
                      var h, w;
                      return (w = (h = t.options).persister) == null
                          ? void 0
                          : w.call(
                                h,
                                c,
                                { client: t.client, queryKey: t.queryKey, meta: t.options.meta, signal: t.signal },
                                n
                            );
                  })
                : (t.fetchFn = c);
        },
    };
}
function _p(e, { pages: t, pageParams: n }) {
    const r = t.length - 1;
    return t.length > 0 ? e.getNextPageParam(t[r], t, n[r], n) : void 0;
}
function iE(e, { pages: t, pageParams: n }) {
    var r;
    return t.length > 0 ? ((r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, n[0], n)) : void 0;
}
var Aa,
    Bt,
    Ve,
    fr,
    zt,
    wn,
    im,
    lE =
        ((im = class extends qg {
            constructor(t) {
                super();
                ee(this, zt);
                ee(this, Aa);
                ee(this, Bt);
                ee(this, Ve);
                ee(this, fr);
                Q(this, Aa, t.client),
                    (this.mutationId = t.mutationId),
                    Q(this, Ve, t.mutationCache),
                    Q(this, Bt, []),
                    (this.state = t.state || cE()),
                    this.setOptions(t.options),
                    this.scheduleGc();
            }
            setOptions(t) {
                (this.options = t), this.updateGcTime(this.options.gcTime);
            }
            get meta() {
                return this.options.meta;
            }
            addObserver(t) {
                A(this, Bt).includes(t) ||
                    (A(this, Bt).push(t),
                    this.clearGcTimeout(),
                    A(this, Ve).notify({ type: "observerAdded", mutation: this, observer: t }));
            }
            removeObserver(t) {
                Q(
                    this,
                    Bt,
                    A(this, Bt).filter((n) => n !== t)
                ),
                    this.scheduleGc(),
                    A(this, Ve).notify({ type: "observerRemoved", mutation: this, observer: t });
            }
            optionalRemove() {
                A(this, Bt).length || (this.state.status === "pending" ? this.scheduleGc() : A(this, Ve).remove(this));
            }
            continue() {
                var t;
                return ((t = A(this, fr)) == null ? void 0 : t.continue()) ?? this.execute(this.state.variables);
            }
            async execute(t) {
                var s, i, l, c, u, d, g, p, C, h, w, v, m, y, S, b, I, E, N, k;
                const n = () => {
                        Fe(this, zt, wn).call(this, { type: "continue" });
                    },
                    r = { client: A(this, Aa), meta: this.options.meta, mutationKey: this.options.mutationKey };
                Q(
                    this,
                    fr,
                    Xg({
                        fn: () =>
                            this.options.mutationFn
                                ? this.options.mutationFn(t, r)
                                : Promise.reject(new Error("No mutationFn found")),
                        onFail: (P, _) => {
                            Fe(this, zt, wn).call(this, { type: "failed", failureCount: P, error: _ });
                        },
                        onPause: () => {
                            Fe(this, zt, wn).call(this, { type: "pause" });
                        },
                        onContinue: n,
                        retry: this.options.retry ?? 0,
                        retryDelay: this.options.retryDelay,
                        networkMode: this.options.networkMode,
                        canRun: () => A(this, Ve).canRun(this),
                    })
                );
                const o = this.state.status === "pending",
                    a = !A(this, fr).canStart();
                try {
                    if (o) n();
                    else {
                        Fe(this, zt, wn).call(this, { type: "pending", variables: t, isPaused: a }),
                            await ((i = (s = A(this, Ve).config).onMutate) == null ? void 0 : i.call(s, t, this, r));
                        const _ = await ((c = (l = this.options).onMutate) == null ? void 0 : c.call(l, t, r));
                        _ !== this.state.context &&
                            Fe(this, zt, wn).call(this, { type: "pending", context: _, variables: t, isPaused: a });
                    }
                    const P = await A(this, fr).start();
                    return (
                        await ((d = (u = A(this, Ve).config).onSuccess) == null
                            ? void 0
                            : d.call(u, P, t, this.state.context, this, r)),
                        await ((p = (g = this.options).onSuccess) == null
                            ? void 0
                            : p.call(g, P, t, this.state.context, r)),
                        await ((h = (C = A(this, Ve).config).onSettled) == null
                            ? void 0
                            : h.call(C, P, null, this.state.variables, this.state.context, this, r)),
                        await ((v = (w = this.options).onSettled) == null
                            ? void 0
                            : v.call(w, P, null, t, this.state.context, r)),
                        Fe(this, zt, wn).call(this, { type: "success", data: P }),
                        P
                    );
                } catch (P) {
                    try {
                        throw (
                            (await ((y = (m = A(this, Ve).config).onError) == null
                                ? void 0
                                : y.call(m, P, t, this.state.context, this, r)),
                            await ((b = (S = this.options).onError) == null
                                ? void 0
                                : b.call(S, P, t, this.state.context, r)),
                            await ((E = (I = A(this, Ve).config).onSettled) == null
                                ? void 0
                                : E.call(I, void 0, P, this.state.variables, this.state.context, this, r)),
                            await ((k = (N = this.options).onSettled) == null
                                ? void 0
                                : k.call(N, void 0, P, t, this.state.context, r)),
                            P)
                        );
                    } finally {
                        Fe(this, zt, wn).call(this, { type: "error", error: P });
                    }
                } finally {
                    A(this, Ve).runNext(this);
                }
            }
        }),
        (Aa = new WeakMap()),
        (Bt = new WeakMap()),
        (Ve = new WeakMap()),
        (fr = new WeakMap()),
        (zt = new WeakSet()),
        (wn = function (t) {
            const n = (r) => {
                switch (t.type) {
                    case "failed":
                        return { ...r, failureCount: t.failureCount, failureReason: t.error };
                    case "pause":
                        return { ...r, isPaused: !0 };
                    case "continue":
                        return { ...r, isPaused: !1 };
                    case "pending":
                        return {
                            ...r,
                            context: t.context,
                            data: void 0,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            isPaused: t.isPaused,
                            status: "pending",
                            variables: t.variables,
                            submittedAt: Date.now(),
                        };
                    case "success":
                        return {
                            ...r,
                            data: t.data,
                            failureCount: 0,
                            failureReason: null,
                            error: null,
                            status: "success",
                            isPaused: !1,
                        };
                    case "error":
                        return {
                            ...r,
                            data: void 0,
                            error: t.error,
                            failureCount: r.failureCount + 1,
                            failureReason: t.error,
                            isPaused: !1,
                            status: "error",
                        };
                }
            };
            (this.state = n(this.state)),
                He.batch(() => {
                    A(this, Bt).forEach((r) => {
                        r.onMutationUpdate(t);
                    }),
                        A(this, Ve).notify({ mutation: this, type: "updated", action: t });
                });
        }),
        im);
function cE() {
    return {
        context: void 0,
        data: void 0,
        error: null,
        failureCount: 0,
        failureReason: null,
        isPaused: !1,
        status: "idle",
        variables: void 0,
        submittedAt: 0,
    };
}
var en,
    kt,
    Da,
    lm,
    uE =
        ((lm = class extends Gi {
            constructor(t = {}) {
                super();
                ee(this, en);
                ee(this, kt);
                ee(this, Da);
                (this.config = t), Q(this, en, new Set()), Q(this, kt, new Map()), Q(this, Da, 0);
            }
            build(t, n, r) {
                const o = new lE({
                    client: t,
                    mutationCache: this,
                    mutationId: ++Va(this, Da)._,
                    options: t.defaultMutationOptions(n),
                    state: r,
                });
                return this.add(o), o;
            }
            add(t) {
                A(this, en).add(t);
                const n = fs(t);
                if (typeof n == "string") {
                    const r = A(this, kt).get(n);
                    r ? r.push(t) : A(this, kt).set(n, [t]);
                }
                this.notify({ type: "added", mutation: t });
            }
            remove(t) {
                if (A(this, en).delete(t)) {
                    const n = fs(t);
                    if (typeof n == "string") {
                        const r = A(this, kt).get(n);
                        if (r)
                            if (r.length > 1) {
                                const o = r.indexOf(t);
                                o !== -1 && r.splice(o, 1);
                            } else r[0] === t && A(this, kt).delete(n);
                    }
                }
                this.notify({ type: "removed", mutation: t });
            }
            canRun(t) {
                const n = fs(t);
                if (typeof n == "string") {
                    const r = A(this, kt).get(n),
                        o = r == null ? void 0 : r.find((a) => a.state.status === "pending");
                    return !o || o === t;
                } else return !0;
            }
            runNext(t) {
                var r;
                const n = fs(t);
                if (typeof n == "string") {
                    const o = (r = A(this, kt).get(n)) == null ? void 0 : r.find((a) => a !== t && a.state.isPaused);
                    return (o == null ? void 0 : o.continue()) ?? Promise.resolve();
                } else return Promise.resolve();
            }
            clear() {
                He.batch(() => {
                    A(this, en).forEach((t) => {
                        this.notify({ type: "removed", mutation: t });
                    }),
                        A(this, en).clear(),
                        A(this, kt).clear();
                });
            }
            getAll() {
                return Array.from(A(this, en));
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => kp(n, r));
            }
            findAll(t = {}) {
                return this.getAll().filter((n) => kp(t, n));
            }
            notify(t) {
                He.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            resumePausedMutations() {
                const t = this.getAll().filter((n) => n.state.isPaused);
                return He.batch(() => Promise.all(t.map((n) => n.continue().catch(Pt))));
            }
        }),
        (en = new WeakMap()),
        (kt = new WeakMap()),
        (Da = new WeakMap()),
        lm);
function fs(e) {
    var t;
    return (t = e.options.scope) == null ? void 0 : t.id;
}
var $t,
    cm,
    dE =
        ((cm = class extends Gi {
            constructor(t = {}) {
                super();
                ee(this, $t);
                (this.config = t), Q(this, $t, new Map());
            }
            build(t, n, r) {
                const o = n.queryKey,
                    a = n.queryHash ?? Nd(o, n);
                let s = this.get(a);
                return (
                    s ||
                        ((s = new aE({
                            client: t,
                            queryKey: o,
                            queryHash: a,
                            options: t.defaultQueryOptions(n),
                            state: r,
                            defaultOptions: t.getQueryDefaults(o),
                        })),
                        this.add(s)),
                    s
                );
            }
            add(t) {
                A(this, $t).has(t.queryHash) ||
                    (A(this, $t).set(t.queryHash, t), this.notify({ type: "added", query: t }));
            }
            remove(t) {
                const n = A(this, $t).get(t.queryHash);
                n &&
                    (t.destroy(),
                    n === t && A(this, $t).delete(t.queryHash),
                    this.notify({ type: "removed", query: t }));
            }
            clear() {
                He.batch(() => {
                    this.getAll().forEach((t) => {
                        this.remove(t);
                    });
                });
            }
            get(t) {
                return A(this, $t).get(t);
            }
            getAll() {
                return [...A(this, $t).values()];
            }
            find(t) {
                const n = { exact: !0, ...t };
                return this.getAll().find((r) => Ip(n, r));
            }
            findAll(t = {}) {
                const n = this.getAll();
                return Object.keys(t).length > 0 ? n.filter((r) => Ip(t, r)) : n;
            }
            notify(t) {
                He.batch(() => {
                    this.listeners.forEach((n) => {
                        n(t);
                    });
                });
            }
            onFocus() {
                He.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onFocus();
                    });
                });
            }
            onOnline() {
                He.batch(() => {
                    this.getAll().forEach((t) => {
                        t.onOnline();
                    });
                });
            }
        }),
        ($t = new WeakMap()),
        cm),
    Ce,
    Nn,
    Rn,
    lo,
    co,
    An,
    uo,
    fo,
    um,
    fE =
        ((um = class {
            constructor(e = {}) {
                ee(this, Ce);
                ee(this, Nn);
                ee(this, Rn);
                ee(this, lo);
                ee(this, co);
                ee(this, An);
                ee(this, uo);
                ee(this, fo);
                Q(this, Ce, e.queryCache || new dE()),
                    Q(this, Nn, e.mutationCache || new uE()),
                    Q(this, Rn, e.defaultOptions || {}),
                    Q(this, lo, new Map()),
                    Q(this, co, new Map()),
                    Q(this, An, 0);
            }
            mount() {
                Va(this, An)._++,
                    A(this, An) === 1 &&
                        (Q(
                            this,
                            uo,
                            Gg.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), A(this, Ce).onFocus());
                            })
                        ),
                        Q(
                            this,
                            fo,
                            pi.subscribe(async (e) => {
                                e && (await this.resumePausedMutations(), A(this, Ce).onOnline());
                            })
                        ));
            }
            unmount() {
                var e, t;
                Va(this, An)._--,
                    A(this, An) === 0 &&
                        ((e = A(this, uo)) == null || e.call(this),
                        Q(this, uo, void 0),
                        (t = A(this, fo)) == null || t.call(this),
                        Q(this, fo, void 0));
            }
            isFetching(e) {
                return A(this, Ce).findAll({ ...e, fetchStatus: "fetching" }).length;
            }
            isMutating(e) {
                return A(this, Nn).findAll({ ...e, status: "pending" }).length;
            }
            getQueryData(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = A(this, Ce).get(t.queryHash)) == null ? void 0 : n.state.data;
            }
            ensureQueryData(e) {
                const t = this.defaultQueryOptions(e),
                    n = A(this, Ce).build(this, t),
                    r = n.state.data;
                return r === void 0
                    ? this.fetchQuery(e)
                    : (e.revalidateIfStale && n.isStaleByTime(tu(t.staleTime, n)) && this.prefetchQuery(t),
                      Promise.resolve(r));
            }
            getQueriesData(e) {
                return A(this, Ce)
                    .findAll(e)
                    .map(({ queryKey: t, state: n }) => {
                        const r = n.data;
                        return [t, r];
                    });
            }
            setQueryData(e, t, n) {
                const r = this.defaultQueryOptions({ queryKey: e }),
                    o = A(this, Ce).get(r.queryHash),
                    a = o == null ? void 0 : o.state.data,
                    s = Wb(t, a);
                if (s !== void 0)
                    return A(this, Ce)
                        .build(this, r)
                        .setData(s, { ...n, manual: !0 });
            }
            setQueriesData(e, t, n) {
                return He.batch(() =>
                    A(this, Ce)
                        .findAll(e)
                        .map(({ queryKey: r }) => [r, this.setQueryData(r, t, n)])
                );
            }
            getQueryState(e) {
                var n;
                const t = this.defaultQueryOptions({ queryKey: e });
                return (n = A(this, Ce).get(t.queryHash)) == null ? void 0 : n.state;
            }
            removeQueries(e) {
                const t = A(this, Ce);
                He.batch(() => {
                    t.findAll(e).forEach((n) => {
                        t.remove(n);
                    });
                });
            }
            resetQueries(e, t) {
                const n = A(this, Ce);
                return He.batch(
                    () => (
                        n.findAll(e).forEach((r) => {
                            r.reset();
                        }),
                        this.refetchQueries({ type: "active", ...e }, t)
                    )
                );
            }
            cancelQueries(e, t = {}) {
                const n = { revert: !0, ...t },
                    r = He.batch(() =>
                        A(this, Ce)
                            .findAll(e)
                            .map((o) => o.cancel(n))
                    );
                return Promise.all(r).then(Pt).catch(Pt);
            }
            invalidateQueries(e, t = {}) {
                return He.batch(
                    () => (
                        A(this, Ce)
                            .findAll(e)
                            .forEach((n) => {
                                n.invalidate();
                            }),
                        (e == null ? void 0 : e.refetchType) === "none"
                            ? Promise.resolve()
                            : this.refetchQueries(
                                  {
                                      ...e,
                                      type:
                                          (e == null ? void 0 : e.refetchType) ??
                                          (e == null ? void 0 : e.type) ??
                                          "active",
                                  },
                                  t
                              )
                    )
                );
            }
            refetchQueries(e, t = {}) {
                const n = { ...t, cancelRefetch: t.cancelRefetch ?? !0 },
                    r = He.batch(() =>
                        A(this, Ce)
                            .findAll(e)
                            .filter((o) => !o.isDisabled() && !o.isStatic())
                            .map((o) => {
                                let a = o.fetch(void 0, n);
                                return (
                                    n.throwOnError || (a = a.catch(Pt)),
                                    o.state.fetchStatus === "paused" ? Promise.resolve() : a
                                );
                            })
                    );
                return Promise.all(r).then(Pt);
            }
            fetchQuery(e) {
                const t = this.defaultQueryOptions(e);
                t.retry === void 0 && (t.retry = !1);
                const n = A(this, Ce).build(this, t);
                return n.isStaleByTime(tu(t.staleTime, n)) ? n.fetch(t) : Promise.resolve(n.state.data);
            }
            prefetchQuery(e) {
                return this.fetchQuery(e).then(Pt).catch(Pt);
            }
            fetchInfiniteQuery(e) {
                return (e.behavior = Dp(e.pages)), this.fetchQuery(e);
            }
            prefetchInfiniteQuery(e) {
                return this.fetchInfiniteQuery(e).then(Pt).catch(Pt);
            }
            ensureInfiniteQueryData(e) {
                return (e.behavior = Dp(e.pages)), this.ensureQueryData(e);
            }
            resumePausedMutations() {
                return pi.isOnline() ? A(this, Nn).resumePausedMutations() : Promise.resolve();
            }
            getQueryCache() {
                return A(this, Ce);
            }
            getMutationCache() {
                return A(this, Nn);
            }
            getDefaultOptions() {
                return A(this, Rn);
            }
            setDefaultOptions(e) {
                Q(this, Rn, e);
            }
            setQueryDefaults(e, t) {
                A(this, lo).set(Pa(e), { queryKey: e, defaultOptions: t });
            }
            getQueryDefaults(e) {
                const t = [...A(this, lo).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ia(e, r.queryKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            setMutationDefaults(e, t) {
                A(this, co).set(Pa(e), { mutationKey: e, defaultOptions: t });
            }
            getMutationDefaults(e) {
                const t = [...A(this, co).values()],
                    n = {};
                return (
                    t.forEach((r) => {
                        Ia(e, r.mutationKey) && Object.assign(n, r.defaultOptions);
                    }),
                    n
                );
            }
            defaultQueryOptions(e) {
                if (e._defaulted) return e;
                const t = { ...A(this, Rn).queries, ...this.getQueryDefaults(e.queryKey), ...e, _defaulted: !0 };
                return (
                    t.queryHash || (t.queryHash = Nd(t.queryKey, t)),
                    t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"),
                    t.throwOnError === void 0 && (t.throwOnError = !!t.suspense),
                    !t.networkMode && t.persister && (t.networkMode = "offlineFirst"),
                    t.queryFn === Rd && (t.enabled = !1),
                    t
                );
            }
            defaultMutationOptions(e) {
                return e != null && e._defaulted
                    ? e
                    : {
                          ...A(this, Rn).mutations,
                          ...((e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey)),
                          ...e,
                          _defaulted: !0,
                      };
            }
            clear() {
                A(this, Ce).clear(), A(this, Nn).clear();
            }
        }),
        (Ce = new WeakMap()),
        (Nn = new WeakMap()),
        (Rn = new WeakMap()),
        (lo = new WeakMap()),
        (co = new WeakMap()),
        (An = new WeakMap()),
        (uo = new WeakMap()),
        (fo = new WeakMap()),
        um),
    pE = f.createContext(void 0),
    mE = ({ client: e, children: t }) => (
        f.useEffect(
            () => (
                e.mount(),
                () => {
                    e.unmount();
                }
            ),
            [e]
        ),
        x.jsx(pE.Provider, { value: e, children: t })
    );
/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ka() {
    return (
        (ka = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        ka.apply(this, arguments)
    );
}
var Mn;
(function (e) {
    (e.Pop = "POP"), (e.Push = "PUSH"), (e.Replace = "REPLACE");
})(Mn || (Mn = {}));
const Mp = "popstate";
function hE(e) {
    e === void 0 && (e = {});
    function t(o, a) {
        let { pathname: s = "/", search: i = "", hash: l = "" } = Ir(o.location.hash.substr(1));
        return (
            !s.startsWith("/") && !s.startsWith(".") && (s = "/" + s),
            ou(
                "",
                { pathname: s, search: i, hash: l },
                (a.state && a.state.usr) || null,
                (a.state && a.state.key) || "default"
            )
        );
    }
    function n(o, a) {
        let s = o.document.querySelector("base"),
            i = "";
        if (s && s.getAttribute("href")) {
            let l = o.location.href,
                c = l.indexOf("#");
            i = c === -1 ? l : l.slice(0, c);
        }
        return i + "#" + (typeof a == "string" ? a : Zg(a));
    }
    function r(o, a) {
        Ad(
            o.pathname.charAt(0) === "/",
            "relative pathnames are not supported in hash history.push(" + JSON.stringify(a) + ")"
        );
    }
    return gE(t, n, r, e);
}
function ke(e, t) {
    if (e === !1 || e === null || typeof e > "u") throw new Error(t);
}
function Ad(e, t) {
    if (!e) {
        typeof console < "u" && console.warn(t);
        try {
            throw new Error(t);
        } catch {}
    }
}
function vE() {
    return Math.random().toString(36).substr(2, 8);
}
function Op(e, t) {
    return { usr: e.state, key: e.key, idx: t };
}
function ou(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        ka(
            { pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" },
            typeof t == "string" ? Ir(t) : t,
            { state: n, key: (t && t.key) || r || vE() }
        )
    );
}
function Zg(e) {
    let { pathname: t = "/", search: n = "", hash: r = "" } = e;
    return (
        n && n !== "?" && (t += n.charAt(0) === "?" ? n : "?" + n),
        r && r !== "#" && (t += r.charAt(0) === "#" ? r : "#" + r),
        t
    );
}
function Ir(e) {
    let t = {};
    if (e) {
        let n = e.indexOf("#");
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)));
        let r = e.indexOf("?");
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))), e && (t.pathname = e);
    }
    return t;
}
function gE(e, t, n, r) {
    r === void 0 && (r = {});
    let { window: o = document.defaultView, v5Compat: a = !1 } = r,
        s = o.history,
        i = Mn.Pop,
        l = null,
        c = u();
    c == null && ((c = 0), s.replaceState(ka({}, s.state, { idx: c }), ""));
    function u() {
        return (s.state || { idx: null }).idx;
    }
    function d() {
        i = Mn.Pop;
        let w = u(),
            v = w == null ? null : w - c;
        (c = w), l && l({ action: i, location: h.location, delta: v });
    }
    function g(w, v) {
        i = Mn.Push;
        let m = ou(h.location, w, v);
        n && n(m, w), (c = u() + 1);
        let y = Op(m, c),
            S = h.createHref(m);
        try {
            s.pushState(y, "", S);
        } catch (b) {
            if (b instanceof DOMException && b.name === "DataCloneError") throw b;
            o.location.assign(S);
        }
        a && l && l({ action: i, location: h.location, delta: 1 });
    }
    function p(w, v) {
        i = Mn.Replace;
        let m = ou(h.location, w, v);
        n && n(m, w), (c = u());
        let y = Op(m, c),
            S = h.createHref(m);
        s.replaceState(y, "", S), a && l && l({ action: i, location: h.location, delta: 0 });
    }
    function C(w) {
        let v = o.location.origin !== "null" ? o.location.origin : o.location.href,
            m = typeof w == "string" ? w : Zg(w);
        return (
            (m = m.replace(/ $/, "%20")),
            ke(v, "No window.location.(origin|href) available to create URL for href: " + m),
            new URL(m, v)
        );
    }
    let h = {
        get action() {
            return i;
        },
        get location() {
            return e(o, s);
        },
        listen(w) {
            if (l) throw new Error("A history only accepts one active listener");
            return (
                o.addEventListener(Mp, d),
                (l = w),
                () => {
                    o.removeEventListener(Mp, d), (l = null);
                }
            );
        },
        createHref(w) {
            return t(o, w);
        },
        createURL: C,
        encodeLocation(w) {
            let v = C(w);
            return { pathname: v.pathname, search: v.search, hash: v.hash };
        },
        push: g,
        replace: p,
        go(w) {
            return s.go(w);
        },
    };
    return h;
}
var jp;
(function (e) {
    (e.data = "data"), (e.deferred = "deferred"), (e.redirect = "redirect"), (e.error = "error");
})(jp || (jp = {}));
function yE(e, t, n) {
    return n === void 0 && (n = "/"), xE(e, t, n);
}
function xE(e, t, n, r) {
    let o = typeof t == "string" ? Ir(t) : t,
        a = ty(o.pathname || "/", n);
    if (a == null) return null;
    let s = Jg(e);
    wE(s);
    let i = null;
    for (let l = 0; i == null && l < s.length; ++l) {
        let c = DE(a);
        i = NE(s[l], c);
    }
    return i;
}
function Jg(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = "");
    let o = (a, s, i) => {
        let l = {
            relativePath: i === void 0 ? a.path || "" : i,
            caseSensitive: a.caseSensitive === !0,
            childrenIndex: s,
            route: a,
        };
        l.relativePath.startsWith("/") &&
            (ke(
                l.relativePath.startsWith(r),
                'Absolute route path "' +
                    l.relativePath +
                    '" nested under path ' +
                    ('"' + r + '" is not valid. An absolute child route path ') +
                    "must start with the combined path of all its parent routes."
            ),
            (l.relativePath = l.relativePath.slice(r.length)));
        let c = hr([r, l.relativePath]),
            u = n.concat(l);
        a.children &&
            a.children.length > 0 &&
            (ke(
                a.index !== !0,
                "Index routes must not have child routes. Please remove " +
                    ('all child routes from route path "' + c + '".')
            ),
            Jg(a.children, t, u, c)),
            !(a.path == null && !a.index) && t.push({ path: c, score: IE(c, a.index), routesMeta: u });
    };
    return (
        e.forEach((a, s) => {
            var i;
            if (a.path === "" || !((i = a.path) != null && i.includes("?"))) o(a, s);
            else for (let l of ey(a.path)) o(a, s, l);
        }),
        t
    );
}
function ey(e) {
    let t = e.split("/");
    if (t.length === 0) return [];
    let [n, ...r] = t,
        o = n.endsWith("?"),
        a = n.replace(/\?$/, "");
    if (r.length === 0) return o ? [a, ""] : [a];
    let s = ey(r.join("/")),
        i = [];
    return (
        i.push(...s.map((l) => (l === "" ? a : [a, l].join("/")))),
        o && i.push(...s),
        i.map((l) => (e.startsWith("/") && l === "" ? "/" : l))
    );
}
function wE(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : kE(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    );
}
const SE = /^:[\w-]+$/,
    CE = 3,
    bE = 2,
    EE = 1,
    TE = 10,
    PE = -2,
    Lp = (e) => e === "*";
function IE(e, t) {
    let n = e.split("/"),
        r = n.length;
    return (
        n.some(Lp) && (r += PE),
        t && (r += bE),
        n.filter((o) => !Lp(o)).reduce((o, a) => o + (SE.test(a) ? CE : a === "" ? EE : TE), r)
    );
}
function kE(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, o) => r === t[o]) ? e[e.length - 1] - t[t.length - 1] : 0;
}
function NE(e, t, n) {
    let { routesMeta: r } = e,
        o = {},
        a = "/",
        s = [];
    for (let i = 0; i < r.length; ++i) {
        let l = r[i],
            c = i === r.length - 1,
            u = a === "/" ? t : t.slice(a.length) || "/",
            d = RE({ path: l.relativePath, caseSensitive: l.caseSensitive, end: c }, u),
            g = l.route;
        if (!d) return null;
        Object.assign(o, d.params),
            s.push({ params: o, pathname: hr([a, d.pathname]), pathnameBase: FE(hr([a, d.pathnameBase])), route: g }),
            d.pathnameBase !== "/" && (a = hr([a, d.pathnameBase]));
    }
    return s;
}
function RE(e, t) {
    typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 });
    let [n, r] = AE(e.path, e.caseSensitive, e.end),
        o = t.match(n);
    if (!o) return null;
    let a = o[0],
        s = a.replace(/(.)\/+$/, "$1"),
        i = o.slice(1);
    return {
        params: r.reduce((c, u, d) => {
            let { paramName: g, isOptional: p } = u;
            if (g === "*") {
                let h = i[d] || "";
                s = a.slice(0, a.length - h.length).replace(/(.)\/+$/, "$1");
            }
            const C = i[d];
            return p && !C ? (c[g] = void 0) : (c[g] = (C || "").replace(/%2F/g, "/")), c;
        }, {}),
        pathname: a,
        pathnameBase: s,
        pattern: e,
    };
}
function AE(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        Ad(
            e === "*" || !e.endsWith("*") || e.endsWith("/*"),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') +
                "always follow a `/` in the pattern. To get rid of this warning, " +
                ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')
        );
    let r = [],
        o =
            "^" +
            e
                .replace(/\/*\*?$/, "")
                .replace(/^\/*/, "/")
                .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (s, i, l) => (r.push({ paramName: i, isOptional: l != null }), l ? "/?([^\\/]+)?" : "/([^\\/]+)")
                );
    return (
        e.endsWith("*")
            ? (r.push({ paramName: "*" }), (o += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
            : n
              ? (o += "\\/*$")
              : e !== "" && e !== "/" && (o += "(?:(?=\\/|$))"),
        [new RegExp(o, t ? void 0 : "i"), r]
    );
}
function DE(e) {
    try {
        return e
            .split("/")
            .map((t) => decodeURIComponent(t).replace(/\//g, "%2F"))
            .join("/");
    } catch (t) {
        return (
            Ad(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ("encoding (" + t + ").")
            ),
            e
        );
    }
}
function ty(e, t) {
    if (t === "/") return e;
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
    let n = t.endsWith("/") ? t.length - 1 : t.length,
        r = e.charAt(n);
    return r && r !== "/" ? null : e.slice(n) || "/";
}
function _E(e, t) {
    t === void 0 && (t = "/");
    let { pathname: n, search: r = "", hash: o = "" } = typeof e == "string" ? Ir(e) : e;
    return { pathname: n ? (n.startsWith("/") ? n : ME(n, t)) : t, search: BE(r), hash: zE(o) };
}
function ME(e, t) {
    let n = t.replace(/\/+$/, "").split("/");
    return (
        e.split("/").forEach((o) => {
            o === ".." ? n.length > 1 && n.pop() : o !== "." && n.push(o);
        }),
        n.length > 1 ? n.join("/") : "/"
    );
}
function Vl(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ("`to." + t + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") +
        ("`to." + n + "` field. Alternatively you may provide the full path as ") +
        'a string in <Link to="..."> and the router will parse it for you.'
    );
}
function OE(e) {
    return e.filter((t, n) => n === 0 || (t.route.path && t.route.path.length > 0));
}
function jE(e, t) {
    let n = OE(e);
    return t ? n.map((r, o) => (o === n.length - 1 ? r.pathname : r.pathnameBase)) : n.map((r) => r.pathnameBase);
}
function LE(e, t, n, r) {
    r === void 0 && (r = !1);
    let o;
    typeof e == "string"
        ? (o = Ir(e))
        : ((o = ka({}, e)),
          ke(!o.pathname || !o.pathname.includes("?"), Vl("?", "pathname", "search", o)),
          ke(!o.pathname || !o.pathname.includes("#"), Vl("#", "pathname", "hash", o)),
          ke(!o.search || !o.search.includes("#"), Vl("#", "search", "hash", o)));
    let a = e === "" || o.pathname === "",
        s = a ? "/" : o.pathname,
        i;
    if (s == null) i = n;
    else {
        let d = t.length - 1;
        if (!r && s.startsWith("..")) {
            let g = s.split("/");
            for (; g[0] === ".."; ) g.shift(), (d -= 1);
            o.pathname = g.join("/");
        }
        i = d >= 0 ? t[d] : "/";
    }
    let l = _E(o, i),
        c = s && s !== "/" && s.endsWith("/"),
        u = (a || s === ".") && n.endsWith("/");
    return !l.pathname.endsWith("/") && (c || u) && (l.pathname += "/"), l;
}
const hr = (e) => e.join("/").replace(/\/\/+/g, "/"),
    FE = (e) => e.replace(/\/+$/, "").replace(/^\/*/, "/"),
    BE = (e) => (!e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e),
    zE = (e) => (!e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e);
function $E(e) {
    return (
        e != null &&
        typeof e.status == "number" &&
        typeof e.statusText == "string" &&
        typeof e.internal == "boolean" &&
        "data" in e
    );
}
const ny = ["post", "put", "patch", "delete"];
new Set(ny);
const UE = ["get", ...ny];
new Set(UE);
/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Na() {
    return (
        (Na = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t];
                      for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                  }
                  return e;
              }),
        Na.apply(this, arguments)
    );
}
const Dd = f.createContext(null),
    VE = f.createContext(null),
    Xi = f.createContext(null),
    qi = f.createContext(null),
    No = f.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    ry = f.createContext(null);
function Zi() {
    return f.useContext(qi) != null;
}
function Ji() {
    return Zi() || ke(!1), f.useContext(qi).location;
}
function oy(e) {
    f.useContext(Xi).static || f.useLayoutEffect(e);
}
function WE() {
    let { isDataRoute: e } = f.useContext(No);
    return e ? rT() : HE();
}
function HE() {
    Zi() || ke(!1);
    let e = f.useContext(Dd),
        { basename: t, future: n, navigator: r } = f.useContext(Xi),
        { matches: o } = f.useContext(No),
        { pathname: a } = Ji(),
        s = JSON.stringify(jE(o, n.v7_relativeSplatPath)),
        i = f.useRef(!1);
    return (
        oy(() => {
            i.current = !0;
        }),
        f.useCallback(
            function (c, u) {
                if ((u === void 0 && (u = {}), !i.current)) return;
                if (typeof c == "number") {
                    r.go(c);
                    return;
                }
                let d = LE(c, JSON.parse(s), a, u.relative === "path");
                e == null && t !== "/" && (d.pathname = d.pathname === "/" ? t : hr([t, d.pathname])),
                    (u.replace ? r.replace : r.push)(d, u.state, u);
            },
            [t, r, s, a, e]
        )
    );
}
function KE(e, t) {
    return QE(e, t);
}
function QE(e, t, n, r) {
    Zi() || ke(!1);
    let { navigator: o } = f.useContext(Xi),
        { matches: a } = f.useContext(No),
        s = a[a.length - 1],
        i = s ? s.params : {};
    s && s.pathname;
    let l = s ? s.pathnameBase : "/";
    s && s.route;
    let c = Ji(),
        u;
    if (t) {
        var d;
        let w = typeof t == "string" ? Ir(t) : t;
        l === "/" || ((d = w.pathname) != null && d.startsWith(l)) || ke(!1), (u = w);
    } else u = c;
    let g = u.pathname || "/",
        p = g;
    if (l !== "/") {
        let w = l.replace(/^\//, "").split("/");
        p = "/" + g.replace(/^\//, "").split("/").slice(w.length).join("/");
    }
    let C = yE(e, { pathname: p }),
        h = ZE(
            C &&
                C.map((w) =>
                    Object.assign({}, w, {
                        params: Object.assign({}, i, w.params),
                        pathname: hr([l, o.encodeLocation ? o.encodeLocation(w.pathname).pathname : w.pathname]),
                        pathnameBase:
                            w.pathnameBase === "/"
                                ? l
                                : hr([
                                      l,
                                      o.encodeLocation ? o.encodeLocation(w.pathnameBase).pathname : w.pathnameBase,
                                  ]),
                    })
                ),
            a,
            n,
            r
        );
    return t && h
        ? f.createElement(
              qi.Provider,
              {
                  value: {
                      location: Na({ pathname: "/", search: "", hash: "", state: null, key: "default" }, u),
                      navigationType: Mn.Pop,
                  },
              },
              h
          )
        : h;
}
function GE() {
    let e = nT(),
        t = $E(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        o = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" };
    return f.createElement(
        f.Fragment,
        null,
        f.createElement("h2", null, "Unexpected Application Error!"),
        f.createElement("h3", { style: { fontStyle: "italic" } }, t),
        n ? f.createElement("pre", { style: o }, n) : null,
        null
    );
}
const YE = f.createElement(GE, null);
class XE extends f.Component {
    constructor(t) {
        super(t), (this.state = { location: t.location, revalidation: t.revalidation, error: t.error });
    }
    static getDerivedStateFromError(t) {
        return { error: t };
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location || (n.revalidation !== "idle" && t.revalidation === "idle")
            ? { error: t.error, location: t.location, revalidation: t.revalidation }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              };
    }
    componentDidCatch(t, n) {
        console.error("React Router caught the following error during render", t, n);
    }
    render() {
        return this.state.error !== void 0
            ? f.createElement(
                  No.Provider,
                  { value: this.props.routeContext },
                  f.createElement(ry.Provider, { value: this.state.error, children: this.props.component })
              )
            : this.props.children;
    }
}
function qE(e) {
    let { routeContext: t, match: n, children: r } = e,
        o = f.useContext(Dd);
    return (
        o &&
            o.static &&
            o.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (o.staticContext._deepestRenderedBoundaryId = n.route.id),
        f.createElement(No.Provider, { value: t }, r)
    );
}
function ZE(e, t, n, r) {
    var o;
    if ((t === void 0 && (t = []), n === void 0 && (n = null), r === void 0 && (r = null), e == null)) {
        var a;
        if (!n) return null;
        if (n.errors) e = n.matches;
        else if ((a = r) != null && a.v7_partialHydration && t.length === 0 && !n.initialized && n.matches.length > 0)
            e = n.matches;
        else return null;
    }
    let s = e,
        i = (o = n) == null ? void 0 : o.errors;
    if (i != null) {
        let u = s.findIndex((d) => d.route.id && (i == null ? void 0 : i[d.route.id]) !== void 0);
        u >= 0 || ke(!1), (s = s.slice(0, Math.min(s.length, u + 1)));
    }
    let l = !1,
        c = -1;
    if (n && r && r.v7_partialHydration)
        for (let u = 0; u < s.length; u++) {
            let d = s[u];
            if (((d.route.HydrateFallback || d.route.hydrateFallbackElement) && (c = u), d.route.id)) {
                let { loaderData: g, errors: p } = n,
                    C = d.route.loader && g[d.route.id] === void 0 && (!p || p[d.route.id] === void 0);
                if (d.route.lazy || C) {
                    (l = !0), c >= 0 ? (s = s.slice(0, c + 1)) : (s = [s[0]]);
                    break;
                }
            }
        }
    return s.reduceRight((u, d, g) => {
        let p,
            C = !1,
            h = null,
            w = null;
        n &&
            ((p = i && d.route.id ? i[d.route.id] : void 0),
            (h = d.route.errorElement || YE),
            l &&
                (c < 0 && g === 0
                    ? (oT("route-fallback"), (C = !0), (w = null))
                    : c === g && ((C = !0), (w = d.route.hydrateFallbackElement || null))));
        let v = t.concat(s.slice(0, g + 1)),
            m = () => {
                let y;
                return (
                    p
                        ? (y = h)
                        : C
                          ? (y = w)
                          : d.route.Component
                            ? (y = f.createElement(d.route.Component, null))
                            : d.route.element
                              ? (y = d.route.element)
                              : (y = u),
                    f.createElement(qE, {
                        match: d,
                        routeContext: { outlet: u, matches: v, isDataRoute: n != null },
                        children: y,
                    })
                );
            };
        return n && (d.route.ErrorBoundary || d.route.errorElement || g === 0)
            ? f.createElement(XE, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: h,
                  error: p,
                  children: m(),
                  routeContext: { outlet: null, matches: v, isDataRoute: !0 },
              })
            : m();
    }, null);
}
var ay = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            e
        );
    })(ay || {}),
    sy = (function (e) {
        return (
            (e.UseBlocker = "useBlocker"),
            (e.UseLoaderData = "useLoaderData"),
            (e.UseActionData = "useActionData"),
            (e.UseRouteError = "useRouteError"),
            (e.UseNavigation = "useNavigation"),
            (e.UseRouteLoaderData = "useRouteLoaderData"),
            (e.UseMatches = "useMatches"),
            (e.UseRevalidator = "useRevalidator"),
            (e.UseNavigateStable = "useNavigate"),
            (e.UseRouteId = "useRouteId"),
            e
        );
    })(sy || {});
function JE(e) {
    let t = f.useContext(Dd);
    return t || ke(!1), t;
}
function eT(e) {
    let t = f.useContext(VE);
    return t || ke(!1), t;
}
function tT(e) {
    let t = f.useContext(No);
    return t || ke(!1), t;
}
function iy(e) {
    let t = tT(),
        n = t.matches[t.matches.length - 1];
    return n.route.id || ke(!1), n.route.id;
}
function nT() {
    var e;
    let t = f.useContext(ry),
        n = eT(),
        r = iy();
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r];
}
function rT() {
    let { router: e } = JE(ay.UseNavigateStable),
        t = iy(sy.UseNavigateStable),
        n = f.useRef(!1);
    return (
        oy(() => {
            n.current = !0;
        }),
        f.useCallback(
            function (o, a) {
                a === void 0 && (a = {}),
                    n.current && (typeof o == "number" ? e.navigate(o) : e.navigate(o, Na({ fromRouteId: t }, a)));
            },
            [e, t]
        )
    );
}
const Fp = {};
function oT(e, t, n) {
    Fp[e] || (Fp[e] = !0);
}
function aT(e, t) {
    e == null || e.v7_startTransition, e == null || e.v7_relativeSplatPath;
}
function mi(e) {
    ke(!1);
}
function sT(e) {
    let {
        basename: t = "/",
        children: n = null,
        location: r,
        navigationType: o = Mn.Pop,
        navigator: a,
        static: s = !1,
        future: i,
    } = e;
    Zi() && ke(!1);
    let l = t.replace(/^\/*/, "/"),
        c = f.useMemo(
            () => ({ basename: l, navigator: a, static: s, future: Na({ v7_relativeSplatPath: !1 }, i) }),
            [l, i, a, s]
        );
    typeof r == "string" && (r = Ir(r));
    let { pathname: u = "/", search: d = "", hash: g = "", state: p = null, key: C = "default" } = r,
        h = f.useMemo(() => {
            let w = ty(u, l);
            return w == null
                ? null
                : { location: { pathname: w, search: d, hash: g, state: p, key: C }, navigationType: o };
        }, [l, u, d, g, p, C, o]);
    return h == null
        ? null
        : f.createElement(Xi.Provider, { value: c }, f.createElement(qi.Provider, { children: n, value: h }));
}
function iT(e) {
    let { children: t, location: n } = e;
    return KE(au(t), n);
}
new Promise(() => {});
function au(e, t) {
    t === void 0 && (t = []);
    let n = [];
    return (
        f.Children.forEach(e, (r, o) => {
            if (!f.isValidElement(r)) return;
            let a = [...t, o];
            if (r.type === f.Fragment) {
                n.push.apply(n, au(r.props.children, a));
                return;
            }
            r.type !== mi && ke(!1), !r.props.index || !r.props.children || ke(!1);
            let s = {
                id: r.props.id || a.join("-"),
                caseSensitive: r.props.caseSensitive,
                element: r.props.element,
                Component: r.props.Component,
                index: r.props.index,
                path: r.props.path,
                loader: r.props.loader,
                action: r.props.action,
                errorElement: r.props.errorElement,
                ErrorBoundary: r.props.ErrorBoundary,
                hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null,
                shouldRevalidate: r.props.shouldRevalidate,
                handle: r.props.handle,
                lazy: r.props.lazy,
            };
            r.props.children && (s.children = au(r.props.children, a)), n.push(s);
        }),
        n
    );
}
/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ const lT = "6";
try {
    window.__reactRouterVersion = lT;
} catch {}
const cT = "startTransition",
    Bp = Eu[cT];
function uT(e) {
    let { basename: t, children: n, future: r, window: o } = e,
        a = f.useRef();
    a.current == null && (a.current = hE({ window: o, v5Compat: !0 }));
    let s = a.current,
        [i, l] = f.useState({ action: s.action, location: s.location }),
        { v7_startTransition: c } = r || {},
        u = f.useCallback(
            (d) => {
                c && Bp ? Bp(() => l(d)) : l(d);
            },
            [l, c]
        );
    return (
        f.useLayoutEffect(() => s.listen(u), [s, u]),
        f.useEffect(() => aT(r), [r]),
        f.createElement(sT, {
            basename: t,
            children: n,
            location: i.location,
            navigationType: i.action,
            navigator: s,
            future: r,
        })
    );
}
var zp;
(function (e) {
    (e.UseScrollRestoration = "useScrollRestoration"),
        (e.UseSubmit = "useSubmit"),
        (e.UseSubmitFetcher = "useSubmitFetcher"),
        (e.UseFetcher = "useFetcher"),
        (e.useViewTransitionState = "useViewTransitionState");
})(zp || (zp = {}));
var $p;
(function (e) {
    (e.UseFetcher = "useFetcher"), (e.UseFetchers = "useFetchers"), (e.UseScrollRestoration = "useScrollRestoration");
})($p || ($p = {}));
let Up = !1,
    Go = null;
const dT = new Promise((e) => {
        Go = e;
    }),
    fT = (e = 1200) => Promise.race([dT, new Promise((t) => setTimeout(t, e))]);
function pT(e) {
    return e.replace(/\/+/g, "/");
}
function mT(e, t) {
    return t ? (t.startsWith("/") ? t : pT(`${e.replace(/\/$/, "")}/${t}`)) : e || "";
}
function su(e, t = "", n = new Set()) {
    return (
        f.Children.forEach(e, (r) => {
            var a;
            if (!f.isValidElement(r)) return;
            if (r.type === mi || (typeof r.type == "function" && r.type.name === "Route")) {
                const { path: s, index: i, children: l } = r.props ?? {},
                    c = i ? t || "/" : s ? mT(t, s) : t;
                (i || s) && n.add(c || "/"), l && su(l, c, n);
            } else {
                const s = (a = r.props) == null ? void 0 : a.children;
                s && su(s, t, n);
            }
        }),
        n
    );
}
function hT(e) {
    if (!Up)
        try {
            const t = Array.from(su(e)).sort();
            if (window.top && window.top !== window) {
                const r = { type: "ROUTES_INFO", routes: t.map((o) => ({ path: o })), timestamp: Date.now() };
                window.top.postMessage(r, "*");
            }
        } finally {
            (Up = !0), Go == null || Go(), (Go = null);
        }
}
function vT(e) {
    return (
        f.useEffect(() => {
            hT(e.children);
        }, []),
        f.createElement(iT, { ...e })
    );
}
let Vp = "";
function gT(e) {
    const t = `${e.pathname}${e.search}${e.hash}`;
    if (t !== Vp && ((Vp = t), window.top && window.top !== window)) {
        const n = {
            type: "ROUTE_CHANGE",
            path: e.pathname,
            hash: e.hash,
            search: e.search,
            fullPath: e.pathname + e.search + e.hash,
            fullUrl: window.location.href,
            timestamp: Date.now(),
        };
        window.top.postMessage(n, "*");
    }
}
function yT() {
    const e = Ji(),
        t = WE();
    return (
        f.useEffect(() => {
            (async () => (await fT(), gT(e)))();
        }, [e.key, e.pathname, e.search, e.hash]),
        f.useEffect(() => {
            function n(r) {
                const o = r.data;
                if (o)
                    try {
                        if (o.type === "ROUTE_CONTROL") {
                            const { action: a, path: s, replace: i = !1 } = o;
                            switch ((console.log("Received route control command:", o), a)) {
                                case "navigate":
                                    s
                                        ? (t(s, { replace: i }), console.log(`Navigated to: ${s} (replace: ${i})`))
                                        : console.error("Route control: path is required for navigate action");
                                    break;
                                case "back":
                                    t(-1), console.log("Navigated back");
                                    break;
                                case "forward":
                                    t(1), console.log("Navigated forward");
                                    break;
                                case "replace":
                                    s
                                        ? (t(s, { replace: !0 }), console.log(`Replaced route with: ${s}`))
                                        : console.error("Route control: path is required for replace action");
                                    break;
                                default:
                                    console.warn("Route control: unknown action", a);
                            }
                        } else o.type === "RELOAD" && (window.location.reload(), console.log("Reloaded"));
                    } catch (a) {
                        console.error("Route control error:", a);
                    }
            }
            return window.addEventListener("message", n), () => window.removeEventListener("message", n);
        }, [t]),
        null
    );
}
function xT(e) {
    return x.jsxs(x.Fragment, {
        children: [
            e,
            x.jsx(yT, {
                "data-lov-id": "src/lib/react-router-dom-proxy.tsx:220:6",
                "data-lov-name": "RouterBridge",
                "data-component-path": "src/lib/react-router-dom-proxy.tsx",
                "data-component-line": "220",
                "data-component-file": "react-router-dom-proxy.tsx",
                "data-component-name": "RouterBridge",
                "data-component-content": "%7B%7D",
            }),
        ],
    });
}
function wT(e) {
    return x.jsx(uT, {
        "data-lov-id": "src/lib/react-router-dom-proxy.tsx:226:9",
        "data-lov-name": "RRD.HashRouter",
        "data-component-path": "src/lib/react-router-dom-proxy.tsx",
        "data-component-line": "226",
        "data-component-file": "react-router-dom-proxy.tsx",
        "data-component-name": "RRD.HashRouter",
        "data-component-content": "%7B%7D",
        ...e,
        children: xT(e.children),
    });
}
const Ds = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("div", {
        "data-lov-id": "src/components/ui/card.tsx:9:2",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "9",
        "data-component-file": "card.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("rounded-lg border bg-card text-card-foreground shadow-sm", e),
        ...t,
    })
);
Ds.displayName = "Card";
const _s = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("div", {
        "data-lov-id": "src/components/ui/card.tsx:24:2",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "24",
        "data-component-file": "card.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("flex flex-col space-y-1.5 p-6", e),
        ...t,
    })
);
_s.displayName = "CardHeader";
const Ms = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("h3", {
        "data-lov-id": "src/components/ui/card.tsx:36:2",
        "data-lov-name": "h3",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "36",
        "data-component-file": "card.tsx",
        "data-component-name": "h3",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("text-2xl font-semibold leading-none tracking-tight", e),
        ...t,
    })
);
Ms.displayName = "CardTitle";
const ST = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("p", {
        "data-lov-id": "src/components/ui/card.tsx:51:2",
        "data-lov-name": "p",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "51",
        "data-component-file": "card.tsx",
        "data-component-name": "p",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("text-sm text-muted-foreground", e),
        ...t,
    })
);
ST.displayName = "CardDescription";
const Os = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("div", {
        "data-lov-id": "src/components/ui/card.tsx:63:2",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "63",
        "data-component-file": "card.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("p-6 pt-0", e),
        ...t,
    })
);
Os.displayName = "CardContent";
const CT = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("div", {
        "data-lov-id": "src/components/ui/card.tsx:71:2",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/card.tsx",
        "data-component-line": "71",
        "data-component-file": "card.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("flex items-center p-6 pt-0", e),
        ...t,
    })
);
CT.displayName = "CardFooter";
const bT = zi(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
        {
            variants: {
                variant: {
                    default: "bg-primary text-primary-foreground hover:bg-primary/90",
                    destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
                    outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground",
                    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
                    ghost: "hover:bg-accent hover:text-accent-foreground",
                    link: "text-primary underline-offset-4 hover:underline",
                },
                size: {
                    default: "h-10 px-4 py-2",
                    sm: "h-9 rounded-md px-3",
                    lg: "h-11 rounded-md px-8",
                    icon: "h-10 w-10",
                },
            },
            defaultVariants: { variant: "default", size: "default" },
        }
    ),
    hi = f.forwardRef(({ className: e, variant: t, size: n, asChild: r = !1, ...o }, a) => {
        const s = r ? Lw : "button";
        return x.jsx(s, {
            "data-lov-id": "src/components/ui/button.tsx:46:6",
            "data-lov-name": "Comp",
            "data-component-path": "src/components/ui/button.tsx",
            "data-component-line": "46",
            "data-component-file": "button.tsx",
            "data-component-name": "Comp",
            "data-component-content": "%7B%7D",
            className: ae(bT({ variant: t, size: n, className: e })),
            ref: a,
            ...o,
        });
    });
hi.displayName = "Button";
const ly = f.forwardRef(({ className: e, type: t, ...n }, r) =>
    x.jsx("input", {
        "data-lov-id": "src/components/ui/input.tsx:8:6",
        "data-lov-name": "input",
        "data-component-path": "src/components/ui/input.tsx",
        "data-component-line": "8",
        "data-component-file": "input.tsx",
        "data-component-name": "input",
        "data-component-content": "%7B%7D",
        type: t,
        className: ae(
            "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
            e
        ),
        ref: r,
        ...n,
    })
);
ly.displayName = "Input";
var ET = "Label",
    cy = f.forwardRef((e, t) =>
        x.jsx(X.label, {
            ...e,
            ref: t,
            onMouseDown: (n) => {
                var o;
                n.target.closest("button, input, select, textarea") ||
                    ((o = e.onMouseDown) == null || o.call(e, n),
                    !n.defaultPrevented && n.detail > 1 && n.preventDefault());
            },
        })
    );
cy.displayName = ET;
var uy = cy;
const TT = zi("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"),
    Lt = f.forwardRef(({ className: e, ...t }, n) =>
        x.jsx(uy, {
            "data-lov-id": "src/components/ui/label.tsx:16:2",
            "data-lov-name": "LabelPrimitive.Root",
            "data-component-path": "src/components/ui/label.tsx",
            "data-component-line": "16",
            "data-component-file": "label.tsx",
            "data-component-name": "LabelPrimitive.Root",
            "data-component-content": "%7B%7D",
            ref: n,
            className: ae(TT(), e),
            ...t,
        })
    );
Lt.displayName = uy.displayName;
const dy = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx("textarea", {
        "data-lov-id": "src/components/ui/textarea.tsx:11:6",
        "data-lov-name": "textarea",
        "data-component-path": "src/components/ui/textarea.tsx",
        "data-component-line": "11",
        "data-component-file": "textarea.tsx",
        "data-component-name": "textarea",
        "data-component-content": "%7B%7D",
        className: ae(
            "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
            e
        ),
        ref: n,
        ...t,
    })
);
dy.displayName = "Textarea";
function vi(e, [t, n]) {
    return Math.min(n, Math.max(t, e));
}
var PT = f.createContext(void 0);
function el(e) {
    const t = f.useContext(PT);
    return e || t || "ltr";
}
var Wl = 0;
function IT() {
    f.useEffect(() => {
        const e = document.querySelectorAll("[data-radix-focus-guard]");
        return (
            document.body.insertAdjacentElement("afterbegin", e[0] ?? Wp()),
            document.body.insertAdjacentElement("beforeend", e[1] ?? Wp()),
            Wl++,
            () => {
                Wl === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach((t) => t.remove()), Wl--;
            }
        );
    }, []);
}
function Wp() {
    const e = document.createElement("span");
    return (
        e.setAttribute("data-radix-focus-guard", ""),
        (e.tabIndex = 0),
        (e.style.outline = "none"),
        (e.style.opacity = "0"),
        (e.style.position = "fixed"),
        (e.style.pointerEvents = "none"),
        e
    );
}
var Hl = "focusScope.autoFocusOnMount",
    Kl = "focusScope.autoFocusOnUnmount",
    Hp = { bubbles: !1, cancelable: !0 },
    kT = "FocusScope",
    fy = f.forwardRef((e, t) => {
        const { loop: n = !1, trapped: r = !1, onMountAutoFocus: o, onUnmountAutoFocus: a, ...s } = e,
            [i, l] = f.useState(null),
            c = yt(o),
            u = yt(a),
            d = f.useRef(null),
            g = le(t, (h) => l(h)),
            p = f.useRef({
                paused: !1,
                pause() {
                    this.paused = !0;
                },
                resume() {
                    this.paused = !1;
                },
            }).current;
        f.useEffect(() => {
            if (r) {
                let h = function (y) {
                        if (p.paused || !i) return;
                        const S = y.target;
                        i.contains(S) ? (d.current = S) : Sn(d.current, { select: !0 });
                    },
                    w = function (y) {
                        if (p.paused || !i) return;
                        const S = y.relatedTarget;
                        S !== null && (i.contains(S) || Sn(d.current, { select: !0 }));
                    },
                    v = function (y) {
                        if (document.activeElement === document.body)
                            for (const b of y) b.removedNodes.length > 0 && Sn(i);
                    };
                document.addEventListener("focusin", h), document.addEventListener("focusout", w);
                const m = new MutationObserver(v);
                return (
                    i && m.observe(i, { childList: !0, subtree: !0 }),
                    () => {
                        document.removeEventListener("focusin", h),
                            document.removeEventListener("focusout", w),
                            m.disconnect();
                    }
                );
            }
        }, [r, i, p.paused]),
            f.useEffect(() => {
                if (i) {
                    Qp.add(p);
                    const h = document.activeElement;
                    if (!i.contains(h)) {
                        const v = new CustomEvent(Hl, Hp);
                        i.addEventListener(Hl, c),
                            i.dispatchEvent(v),
                            v.defaultPrevented ||
                                (NT(MT(py(i)), { select: !0 }), document.activeElement === h && Sn(i));
                    }
                    return () => {
                        i.removeEventListener(Hl, c),
                            setTimeout(() => {
                                const v = new CustomEvent(Kl, Hp);
                                i.addEventListener(Kl, u),
                                    i.dispatchEvent(v),
                                    v.defaultPrevented || Sn(h ?? document.body, { select: !0 }),
                                    i.removeEventListener(Kl, u),
                                    Qp.remove(p);
                            }, 0);
                    };
                }
            }, [i, c, u, p]);
        const C = f.useCallback(
            (h) => {
                if ((!n && !r) || p.paused) return;
                const w = h.key === "Tab" && !h.altKey && !h.ctrlKey && !h.metaKey,
                    v = document.activeElement;
                if (w && v) {
                    const m = h.currentTarget,
                        [y, S] = RT(m);
                    y && S
                        ? !h.shiftKey && v === S
                            ? (h.preventDefault(), n && Sn(y, { select: !0 }))
                            : h.shiftKey && v === y && (h.preventDefault(), n && Sn(S, { select: !0 }))
                        : v === m && h.preventDefault();
                }
            },
            [n, r, p.paused]
        );
        return x.jsx(X.div, { tabIndex: -1, ...s, ref: g, onKeyDown: C });
    });
fy.displayName = kT;
function NT(e, { select: t = !1 } = {}) {
    const n = document.activeElement;
    for (const r of e) if ((Sn(r, { select: t }), document.activeElement !== n)) return;
}
function RT(e) {
    const t = py(e),
        n = Kp(t, e),
        r = Kp(t.reverse(), e);
    return [n, r];
}
function py(e) {
    const t = [],
        n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: (r) => {
                const o = r.tagName === "INPUT" && r.type === "hidden";
                return r.disabled || r.hidden || o
                    ? NodeFilter.FILTER_SKIP
                    : r.tabIndex >= 0
                      ? NodeFilter.FILTER_ACCEPT
                      : NodeFilter.FILTER_SKIP;
            },
        });
    for (; n.nextNode(); ) t.push(n.currentNode);
    return t;
}
function Kp(e, t) {
    for (const n of e) if (!AT(n, { upTo: t })) return n;
}
function AT(e, { upTo: t }) {
    if (getComputedStyle(e).visibility === "hidden") return !0;
    for (; e; ) {
        if (t !== void 0 && e === t) return !1;
        if (getComputedStyle(e).display === "none") return !0;
        e = e.parentElement;
    }
    return !1;
}
function DT(e) {
    return e instanceof HTMLInputElement && "select" in e;
}
function Sn(e, { select: t = !1 } = {}) {
    if (e && e.focus) {
        const n = document.activeElement;
        e.focus({ preventScroll: !0 }), e !== n && DT(e) && t && e.select();
    }
}
var Qp = _T();
function _T() {
    let e = [];
    return {
        add(t) {
            const n = e[0];
            t !== n && (n == null || n.pause()), (e = Gp(e, t)), e.unshift(t);
        },
        remove(t) {
            var n;
            (e = Gp(e, t)), (n = e[0]) == null || n.resume();
        },
    };
}
function Gp(e, t) {
    const n = [...e],
        r = n.indexOf(t);
    return r !== -1 && n.splice(r, 1), n;
}
function MT(e) {
    return e.filter((t) => t.tagName !== "A");
}
function my(e) {
    const t = f.useRef({ value: e, previous: e });
    return f.useMemo(
        () => (
            t.current.value !== e && ((t.current.previous = t.current.value), (t.current.value = e)), t.current.previous
        ),
        [e]
    );
}
var OT = function (e) {
        if (typeof document > "u") return null;
        var t = Array.isArray(e) ? e[0] : e;
        return t.ownerDocument.body;
    },
    _r = new WeakMap(),
    ps = new WeakMap(),
    ms = {},
    Ql = 0,
    hy = function (e) {
        return e && (e.host || hy(e.parentNode));
    },
    jT = function (e, t) {
        return t
            .map(function (n) {
                if (e.contains(n)) return n;
                var r = hy(n);
                return r && e.contains(r)
                    ? r
                    : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null);
            })
            .filter(function (n) {
                return !!n;
            });
    },
    LT = function (e, t, n, r) {
        var o = jT(t, Array.isArray(e) ? e : [e]);
        ms[n] || (ms[n] = new WeakMap());
        var a = ms[n],
            s = [],
            i = new Set(),
            l = new Set(o),
            c = function (d) {
                !d || i.has(d) || (i.add(d), c(d.parentNode));
            };
        o.forEach(c);
        var u = function (d) {
            !d ||
                l.has(d) ||
                Array.prototype.forEach.call(d.children, function (g) {
                    if (i.has(g)) u(g);
                    else
                        try {
                            var p = g.getAttribute(r),
                                C = p !== null && p !== "false",
                                h = (_r.get(g) || 0) + 1,
                                w = (a.get(g) || 0) + 1;
                            _r.set(g, h),
                                a.set(g, w),
                                s.push(g),
                                h === 1 && C && ps.set(g, !0),
                                w === 1 && g.setAttribute(n, "true"),
                                C || g.setAttribute(r, "true");
                        } catch (v) {
                            console.error("aria-hidden: cannot operate on ", g, v);
                        }
                });
        };
        return (
            u(t),
            i.clear(),
            Ql++,
            function () {
                s.forEach(function (d) {
                    var g = _r.get(d) - 1,
                        p = a.get(d) - 1;
                    _r.set(d, g),
                        a.set(d, p),
                        g || (ps.has(d) || d.removeAttribute(r), ps.delete(d)),
                        p || d.removeAttribute(n);
                }),
                    Ql--,
                    Ql || ((_r = new WeakMap()), (_r = new WeakMap()), (ps = new WeakMap()), (ms = {}));
            }
        );
    },
    FT = function (e, t, n) {
        n === void 0 && (n = "data-aria-hidden");
        var r = Array.from(Array.isArray(e) ? e : [e]),
            o = OT(e);
        return o
            ? (r.push.apply(r, Array.from(o.querySelectorAll("[aria-live], script"))), LT(r, o, n, "aria-hidden"))
            : function () {
                  return null;
              };
    },
    Vt = function () {
        return (
            (Vt =
                Object.assign ||
                function (t) {
                    for (var n, r = 1, o = arguments.length; r < o; r++) {
                        n = arguments[r];
                        for (var a in n) Object.prototype.hasOwnProperty.call(n, a) && (t[a] = n[a]);
                    }
                    return t;
                }),
            Vt.apply(this, arguments)
        );
    };
function vy(e, t) {
    var n = {};
    for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
    if (e != null && typeof Object.getOwnPropertySymbols == "function")
        for (var o = 0, r = Object.getOwnPropertySymbols(e); o < r.length; o++)
            t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]]);
    return n;
}
function BT(e, t, n) {
    if (n || arguments.length === 2)
        for (var r = 0, o = t.length, a; r < o; r++)
            (a || !(r in t)) && (a || (a = Array.prototype.slice.call(t, 0, r)), (a[r] = t[r]));
    return e.concat(a || Array.prototype.slice.call(t));
}
var js = "right-scroll-bar-position",
    Ls = "width-before-scroll-bar",
    zT = "with-scroll-bars-hidden",
    $T = "--removed-body-scroll-bar-size";
function Gl(e, t) {
    return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function UT(e, t) {
    var n = f.useState(function () {
        return {
            value: e,
            callback: t,
            facade: {
                get current() {
                    return n.value;
                },
                set current(r) {
                    var o = n.value;
                    o !== r && ((n.value = r), n.callback(r, o));
                },
            },
        };
    })[0];
    return (n.callback = t), n.facade;
}
var VT = typeof window < "u" ? f.useLayoutEffect : f.useEffect,
    Yp = new WeakMap();
function WT(e, t) {
    var n = UT(null, function (r) {
        return e.forEach(function (o) {
            return Gl(o, r);
        });
    });
    return (
        VT(
            function () {
                var r = Yp.get(n);
                if (r) {
                    var o = new Set(r),
                        a = new Set(e),
                        s = n.current;
                    o.forEach(function (i) {
                        a.has(i) || Gl(i, null);
                    }),
                        a.forEach(function (i) {
                            o.has(i) || Gl(i, s);
                        });
                }
                Yp.set(n, e);
            },
            [e]
        ),
        n
    );
}
function HT(e) {
    return e;
}
function KT(e, t) {
    t === void 0 && (t = HT);
    var n = [],
        r = !1,
        o = {
            read: function () {
                if (r)
                    throw new Error(
                        "Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`."
                    );
                return n.length ? n[n.length - 1] : e;
            },
            useMedium: function (a) {
                var s = t(a, r);
                return (
                    n.push(s),
                    function () {
                        n = n.filter(function (i) {
                            return i !== s;
                        });
                    }
                );
            },
            assignSyncMedium: function (a) {
                for (r = !0; n.length; ) {
                    var s = n;
                    (n = []), s.forEach(a);
                }
                n = {
                    push: function (i) {
                        return a(i);
                    },
                    filter: function () {
                        return n;
                    },
                };
            },
            assignMedium: function (a) {
                r = !0;
                var s = [];
                if (n.length) {
                    var i = n;
                    (n = []), i.forEach(a), (s = n);
                }
                var l = function () {
                        var u = s;
                        (s = []), u.forEach(a);
                    },
                    c = function () {
                        return Promise.resolve().then(l);
                    };
                c(),
                    (n = {
                        push: function (u) {
                            s.push(u), c();
                        },
                        filter: function (u) {
                            return (s = s.filter(u)), n;
                        },
                    });
            },
        };
    return o;
}
function QT(e) {
    e === void 0 && (e = {});
    var t = KT(null);
    return (t.options = Vt({ async: !0, ssr: !1 }, e)), t;
}
var gy = function (e) {
    var t = e.sideCar,
        n = vy(e, ["sideCar"]);
    if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
    var r = t.read();
    if (!r) throw new Error("Sidecar medium not found");
    return f.createElement(r, Vt({}, n));
};
gy.isSideCarExport = !0;
function GT(e, t) {
    return e.useMedium(t), gy;
}
var yy = QT(),
    Yl = function () {},
    tl = f.forwardRef(function (e, t) {
        var n = f.useRef(null),
            r = f.useState({ onScrollCapture: Yl, onWheelCapture: Yl, onTouchMoveCapture: Yl }),
            o = r[0],
            a = r[1],
            s = e.forwardProps,
            i = e.children,
            l = e.className,
            c = e.removeScrollBar,
            u = e.enabled,
            d = e.shards,
            g = e.sideCar,
            p = e.noRelative,
            C = e.noIsolation,
            h = e.inert,
            w = e.allowPinchZoom,
            v = e.as,
            m = v === void 0 ? "div" : v,
            y = e.gapMode,
            S = vy(e, [
                "forwardProps",
                "children",
                "className",
                "removeScrollBar",
                "enabled",
                "shards",
                "sideCar",
                "noRelative",
                "noIsolation",
                "inert",
                "allowPinchZoom",
                "as",
                "gapMode",
            ]),
            b = g,
            I = WT([n, t]),
            E = Vt(Vt({}, S), o);
        return f.createElement(
            f.Fragment,
            null,
            u &&
                f.createElement(b, {
                    sideCar: yy,
                    removeScrollBar: c,
                    shards: d,
                    noRelative: p,
                    noIsolation: C,
                    inert: h,
                    setCallbacks: a,
                    allowPinchZoom: !!w,
                    lockRef: n,
                    gapMode: y,
                }),
            s
                ? f.cloneElement(f.Children.only(i), Vt(Vt({}, E), { ref: I }))
                : f.createElement(m, Vt({}, E, { className: l, ref: I }), i)
        );
    });
tl.defaultProps = { enabled: !0, removeScrollBar: !0, inert: !1 };
tl.classNames = { fullWidth: Ls, zeroRight: js };
var YT = function () {
    if (typeof __webpack_nonce__ < "u") return __webpack_nonce__;
};
function XT() {
    if (!document) return null;
    var e = document.createElement("style");
    e.type = "text/css";
    var t = YT();
    return t && e.setAttribute("nonce", t), e;
}
function qT(e, t) {
    e.styleSheet ? (e.styleSheet.cssText = t) : e.appendChild(document.createTextNode(t));
}
function ZT(e) {
    var t = document.head || document.getElementsByTagName("head")[0];
    t.appendChild(e);
}
var JT = function () {
        var e = 0,
            t = null;
        return {
            add: function (n) {
                e == 0 && (t = XT()) && (qT(t, n), ZT(t)), e++;
            },
            remove: function () {
                e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), (t = null));
            },
        };
    },
    eP = function () {
        var e = JT();
        return function (t, n) {
            f.useEffect(
                function () {
                    return (
                        e.add(t),
                        function () {
                            e.remove();
                        }
                    );
                },
                [t && n]
            );
        };
    },
    xy = function () {
        var e = eP(),
            t = function (n) {
                var r = n.styles,
                    o = n.dynamic;
                return e(r, o), null;
            };
        return t;
    },
    tP = { left: 0, top: 0, right: 0, gap: 0 },
    Xl = function (e) {
        return parseInt(e || "", 10) || 0;
    },
    nP = function (e) {
        var t = window.getComputedStyle(document.body),
            n = t[e === "padding" ? "paddingLeft" : "marginLeft"],
            r = t[e === "padding" ? "paddingTop" : "marginTop"],
            o = t[e === "padding" ? "paddingRight" : "marginRight"];
        return [Xl(n), Xl(r), Xl(o)];
    },
    rP = function (e) {
        if ((e === void 0 && (e = "margin"), typeof window > "u")) return tP;
        var t = nP(e),
            n = document.documentElement.clientWidth,
            r = window.innerWidth;
        return { left: t[0], top: t[1], right: t[2], gap: Math.max(0, r - n + t[2] - t[0]) };
    },
    oP = xy(),
    ro = "data-scroll-locked",
    aP = function (e, t, n, r) {
        var o = e.left,
            a = e.top,
            s = e.right,
            i = e.gap;
        return (
            n === void 0 && (n = "margin"),
            `
  .`
                .concat(
                    zT,
                    ` {
   overflow: hidden `
                )
                .concat(
                    r,
                    `;
   padding-right: `
                )
                .concat(i, "px ")
                .concat(
                    r,
                    `;
  }
  body[`
                )
                .concat(
                    ro,
                    `] {
    overflow: hidden `
                )
                .concat(
                    r,
                    `;
    overscroll-behavior: contain;
    `
                )
                .concat(
                    [
                        t && "position: relative ".concat(r, ";"),
                        n === "margin" &&
                            `
    padding-left: `
                                .concat(
                                    o,
                                    `px;
    padding-top: `
                                )
                                .concat(
                                    a,
                                    `px;
    padding-right: `
                                )
                                .concat(
                                    s,
                                    `px;
    margin-left:0;
    margin-top:0;
    margin-right: `
                                )
                                .concat(i, "px ")
                                .concat(
                                    r,
                                    `;
    `
                                ),
                        n === "padding" && "padding-right: ".concat(i, "px ").concat(r, ";"),
                    ]
                        .filter(Boolean)
                        .join(""),
                    `
  }
  
  .`
                )
                .concat(
                    js,
                    ` {
    right: `
                )
                .concat(i, "px ")
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(
                    Ls,
                    ` {
    margin-right: `
                )
                .concat(i, "px ")
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(js, " .")
                .concat(
                    js,
                    ` {
    right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  .`
                )
                .concat(Ls, " .")
                .concat(
                    Ls,
                    ` {
    margin-right: 0 `
                )
                .concat(
                    r,
                    `;
  }
  
  body[`
                )
                .concat(
                    ro,
                    `] {
    `
                )
                .concat($T, ": ")
                .concat(
                    i,
                    `px;
  }
`
                )
        );
    },
    Xp = function () {
        var e = parseInt(document.body.getAttribute(ro) || "0", 10);
        return isFinite(e) ? e : 0;
    },
    sP = function () {
        f.useEffect(function () {
            return (
                document.body.setAttribute(ro, (Xp() + 1).toString()),
                function () {
                    var e = Xp() - 1;
                    e <= 0 ? document.body.removeAttribute(ro) : document.body.setAttribute(ro, e.toString());
                }
            );
        }, []);
    },
    iP = function (e) {
        var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = r === void 0 ? "margin" : r;
        sP();
        var a = f.useMemo(
            function () {
                return rP(o);
            },
            [o]
        );
        return f.createElement(oP, { styles: aP(a, !t, o, n ? "" : "!important") });
    },
    iu = !1;
if (typeof window < "u")
    try {
        var hs = Object.defineProperty({}, "passive", {
            get: function () {
                return (iu = !0), !0;
            },
        });
        window.addEventListener("test", hs, hs), window.removeEventListener("test", hs, hs);
    } catch {
        iu = !1;
    }
var Mr = iu ? { passive: !1 } : !1,
    lP = function (e) {
        return e.tagName === "TEXTAREA";
    },
    wy = function (e, t) {
        if (!(e instanceof Element)) return !1;
        var n = window.getComputedStyle(e);
        return n[t] !== "hidden" && !(n.overflowY === n.overflowX && !lP(e) && n[t] === "visible");
    },
    cP = function (e) {
        return wy(e, "overflowY");
    },
    uP = function (e) {
        return wy(e, "overflowX");
    },
    qp = function (e, t) {
        var n = t.ownerDocument,
            r = t;
        do {
            typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
            var o = Sy(e, r);
            if (o) {
                var a = Cy(e, r),
                    s = a[1],
                    i = a[2];
                if (s > i) return !0;
            }
            r = r.parentNode;
        } while (r && r !== n.body);
        return !1;
    },
    dP = function (e) {
        var t = e.scrollTop,
            n = e.scrollHeight,
            r = e.clientHeight;
        return [t, n, r];
    },
    fP = function (e) {
        var t = e.scrollLeft,
            n = e.scrollWidth,
            r = e.clientWidth;
        return [t, n, r];
    },
    Sy = function (e, t) {
        return e === "v" ? cP(t) : uP(t);
    },
    Cy = function (e, t) {
        return e === "v" ? dP(t) : fP(t);
    },
    pP = function (e, t) {
        return e === "h" && t === "rtl" ? -1 : 1;
    },
    mP = function (e, t, n, r, o) {
        var a = pP(e, window.getComputedStyle(t).direction),
            s = a * r,
            i = n.target,
            l = t.contains(i),
            c = !1,
            u = s > 0,
            d = 0,
            g = 0;
        do {
            if (!i) break;
            var p = Cy(e, i),
                C = p[0],
                h = p[1],
                w = p[2],
                v = h - w - a * C;
            (C || v) && Sy(e, i) && ((d += v), (g += C));
            var m = i.parentNode;
            i = m && m.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? m.host : m;
        } while ((!l && i !== document.body) || (l && (t.contains(i) || t === i)));
        return ((u && Math.abs(d) < 1) || (!u && Math.abs(g) < 1)) && (c = !0), c;
    },
    vs = function (e) {
        return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
    },
    Zp = function (e) {
        return [e.deltaX, e.deltaY];
    },
    Jp = function (e) {
        return e && "current" in e ? e.current : e;
    },
    hP = function (e, t) {
        return e[0] === t[0] && e[1] === t[1];
    },
    vP = function (e) {
        return `
  .block-interactivity-`
            .concat(
                e,
                ` {pointer-events: none;}
  .allow-interactivity-`
            )
            .concat(
                e,
                ` {pointer-events: all;}
`
            );
    },
    gP = 0,
    Or = [];
function yP(e) {
    var t = f.useRef([]),
        n = f.useRef([0, 0]),
        r = f.useRef(),
        o = f.useState(gP++)[0],
        a = f.useState(xy)[0],
        s = f.useRef(e);
    f.useEffect(
        function () {
            s.current = e;
        },
        [e]
    ),
        f.useEffect(
            function () {
                if (e.inert) {
                    document.body.classList.add("block-interactivity-".concat(o));
                    var h = BT([e.lockRef.current], (e.shards || []).map(Jp), !0).filter(Boolean);
                    return (
                        h.forEach(function (w) {
                            return w.classList.add("allow-interactivity-".concat(o));
                        }),
                        function () {
                            document.body.classList.remove("block-interactivity-".concat(o)),
                                h.forEach(function (w) {
                                    return w.classList.remove("allow-interactivity-".concat(o));
                                });
                        }
                    );
                }
            },
            [e.inert, e.lockRef.current, e.shards]
        );
    var i = f.useCallback(function (h, w) {
            if (("touches" in h && h.touches.length === 2) || (h.type === "wheel" && h.ctrlKey))
                return !s.current.allowPinchZoom;
            var v = vs(h),
                m = n.current,
                y = "deltaX" in h ? h.deltaX : m[0] - v[0],
                S = "deltaY" in h ? h.deltaY : m[1] - v[1],
                b,
                I = h.target,
                E = Math.abs(y) > Math.abs(S) ? "h" : "v";
            if ("touches" in h && E === "h" && I.type === "range") return !1;
            var N = qp(E, I);
            if (!N) return !0;
            if ((N ? (b = E) : ((b = E === "v" ? "h" : "v"), (N = qp(E, I))), !N)) return !1;
            if ((!r.current && "changedTouches" in h && (y || S) && (r.current = b), !b)) return !0;
            var k = r.current || b;
            return mP(k, w, h, k === "h" ? y : S);
        }, []),
        l = f.useCallback(function (h) {
            var w = h;
            if (!(!Or.length || Or[Or.length - 1] !== a)) {
                var v = "deltaY" in w ? Zp(w) : vs(w),
                    m = t.current.filter(function (b) {
                        return (
                            b.name === w.type &&
                            (b.target === w.target || w.target === b.shadowParent) &&
                            hP(b.delta, v)
                        );
                    })[0];
                if (m && m.should) {
                    w.cancelable && w.preventDefault();
                    return;
                }
                if (!m) {
                    var y = (s.current.shards || [])
                            .map(Jp)
                            .filter(Boolean)
                            .filter(function (b) {
                                return b.contains(w.target);
                            }),
                        S = y.length > 0 ? i(w, y[0]) : !s.current.noIsolation;
                    S && w.cancelable && w.preventDefault();
                }
            }
        }, []),
        c = f.useCallback(function (h, w, v, m) {
            var y = { name: h, delta: w, target: v, should: m, shadowParent: xP(v) };
            t.current.push(y),
                setTimeout(function () {
                    t.current = t.current.filter(function (S) {
                        return S !== y;
                    });
                }, 1);
        }, []),
        u = f.useCallback(function (h) {
            (n.current = vs(h)), (r.current = void 0);
        }, []),
        d = f.useCallback(function (h) {
            c(h.type, Zp(h), h.target, i(h, e.lockRef.current));
        }, []),
        g = f.useCallback(function (h) {
            c(h.type, vs(h), h.target, i(h, e.lockRef.current));
        }, []);
    f.useEffect(function () {
        return (
            Or.push(a),
            e.setCallbacks({ onScrollCapture: d, onWheelCapture: d, onTouchMoveCapture: g }),
            document.addEventListener("wheel", l, Mr),
            document.addEventListener("touchmove", l, Mr),
            document.addEventListener("touchstart", u, Mr),
            function () {
                (Or = Or.filter(function (h) {
                    return h !== a;
                })),
                    document.removeEventListener("wheel", l, Mr),
                    document.removeEventListener("touchmove", l, Mr),
                    document.removeEventListener("touchstart", u, Mr);
            }
        );
    }, []);
    var p = e.removeScrollBar,
        C = e.inert;
    return f.createElement(
        f.Fragment,
        null,
        C ? f.createElement(a, { styles: vP(o) }) : null,
        p ? f.createElement(iP, { noRelative: e.noRelative, gapMode: e.gapMode }) : null
    );
}
function xP(e) {
    for (var t = null; e !== null; ) e instanceof ShadowRoot && ((t = e.host), (e = e.host)), (e = e.parentNode);
    return t;
}
const wP = GT(yy, yP);
var by = f.forwardRef(function (e, t) {
    return f.createElement(tl, Vt({}, e, { ref: t, sideCar: wP }));
});
by.classNames = tl.classNames;
var SP = [" ", "Enter", "ArrowUp", "ArrowDown"],
    CP = [" ", "Enter"],
    Cr = "Select",
    [nl, rl, bP] = Oi(Cr),
    [Ro] = fn(Cr, [bP, Hi]),
    ol = Hi(),
    [EP, Xn] = Ro(Cr),
    [TP, PP] = Ro(Cr),
    Ey = (e) => {
        const {
                __scopeSelect: t,
                children: n,
                open: r,
                defaultOpen: o,
                onOpenChange: a,
                value: s,
                defaultValue: i,
                onValueChange: l,
                dir: c,
                name: u,
                autoComplete: d,
                disabled: g,
                required: p,
                form: C,
            } = e,
            h = ol(t),
            [w, v] = f.useState(null),
            [m, y] = f.useState(null),
            [S, b] = f.useState(!1),
            I = el(c),
            [E, N] = wo({ prop: r, defaultProp: o ?? !1, onChange: a, caller: Cr }),
            [k, P] = wo({ prop: s, defaultProp: i, onChange: l, caller: Cr }),
            _ = f.useRef(null),
            D = w ? C || !!w.closest("form") : !0,
            [F, M] = f.useState(new Set()),
            V = Array.from(F)
                .map((L) => L.props.value)
                .join(";");
        return x.jsx(Sb, {
            ...h,
            children: x.jsxs(EP, {
                required: p,
                scope: t,
                trigger: w,
                onTriggerChange: v,
                valueNode: m,
                onValueNodeChange: y,
                valueNodeHasChildren: S,
                onValueNodeHasChildrenChange: b,
                contentId: Ba(),
                value: k,
                onValueChange: P,
                open: E,
                onOpenChange: N,
                dir: I,
                triggerPointerDownPosRef: _,
                disabled: g,
                children: [
                    x.jsx(nl.Provider, {
                        scope: t,
                        children: x.jsx(TP, {
                            scope: e.__scopeSelect,
                            onNativeOptionAdd: f.useCallback((L) => {
                                M((U) => new Set(U).add(L));
                            }, []),
                            onNativeOptionRemove: f.useCallback((L) => {
                                M((U) => {
                                    const T = new Set(U);
                                    return T.delete(L), T;
                                });
                            }, []),
                            children: n,
                        }),
                    }),
                    D
                        ? x.jsxs(
                              Gy,
                              {
                                  "aria-hidden": !0,
                                  required: p,
                                  tabIndex: -1,
                                  name: u,
                                  autoComplete: d,
                                  value: k,
                                  onChange: (L) => P(L.target.value),
                                  disabled: g,
                                  form: C,
                                  children: [k === void 0 ? x.jsx("option", { value: "" }) : null, Array.from(F)],
                              },
                              V
                          )
                        : null,
                ],
            }),
        });
    };
Ey.displayName = Cr;
var Ty = "SelectTrigger",
    Py = f.forwardRef((e, t) => {
        const { __scopeSelect: n, disabled: r = !1, ...o } = e,
            a = ol(n),
            s = Xn(Ty, n),
            i = s.disabled || r,
            l = le(t, s.onTriggerChange),
            c = rl(n),
            u = f.useRef("touch"),
            [d, g, p] = Xy((h) => {
                const w = c().filter((y) => !y.disabled),
                    v = w.find((y) => y.value === s.value),
                    m = qy(w, h, v);
                m !== void 0 && s.onValueChange(m.value);
            }),
            C = (h) => {
                i || (s.onOpenChange(!0), p()),
                    h && (s.triggerPointerDownPosRef.current = { x: Math.round(h.pageX), y: Math.round(h.pageY) });
            };
        return x.jsx(Og, {
            asChild: !0,
            ...a,
            children: x.jsx(X.button, {
                type: "button",
                role: "combobox",
                "aria-controls": s.contentId,
                "aria-expanded": s.open,
                "aria-required": s.required,
                "aria-autocomplete": "none",
                dir: s.dir,
                "data-state": s.open ? "open" : "closed",
                disabled: i,
                "data-disabled": i ? "" : void 0,
                "data-placeholder": Yy(s.value) ? "" : void 0,
                ...o,
                ref: l,
                onClick: H(o.onClick, (h) => {
                    h.currentTarget.focus(), u.current !== "mouse" && C(h);
                }),
                onPointerDown: H(o.onPointerDown, (h) => {
                    u.current = h.pointerType;
                    const w = h.target;
                    w.hasPointerCapture(h.pointerId) && w.releasePointerCapture(h.pointerId),
                        h.button === 0 && h.ctrlKey === !1 && h.pointerType === "mouse" && (C(h), h.preventDefault());
                }),
                onKeyDown: H(o.onKeyDown, (h) => {
                    const w = d.current !== "";
                    !(h.ctrlKey || h.altKey || h.metaKey) && h.key.length === 1 && g(h.key),
                        !(w && h.key === " ") && SP.includes(h.key) && (C(), h.preventDefault());
                }),
            }),
        });
    });
Py.displayName = Ty;
var Iy = "SelectValue",
    ky = f.forwardRef((e, t) => {
        const { __scopeSelect: n, className: r, style: o, children: a, placeholder: s = "", ...i } = e,
            l = Xn(Iy, n),
            { onValueNodeHasChildrenChange: c } = l,
            u = a !== void 0,
            d = le(t, l.onValueNodeChange);
        return (
            Oe(() => {
                c(u);
            }, [c, u]),
            x.jsx(X.span, {
                ...i,
                ref: d,
                style: { pointerEvents: "none" },
                children: Yy(l.value) ? x.jsx(x.Fragment, { children: s }) : a,
            })
        );
    });
ky.displayName = Iy;
var IP = "SelectIcon",
    Ny = f.forwardRef((e, t) => {
        const { __scopeSelect: n, children: r, ...o } = e;
        return x.jsx(X.span, { "aria-hidden": !0, ...o, ref: t, children: r || "▼" });
    });
Ny.displayName = IP;
var kP = "SelectPortal",
    Ry = (e) => x.jsx(hd, { asChild: !0, ...e });
Ry.displayName = kP;
var br = "SelectContent",
    Ay = f.forwardRef((e, t) => {
        const n = Xn(br, e.__scopeSelect),
            [r, o] = f.useState();
        if (
            (Oe(() => {
                o(new DocumentFragment());
            }, []),
            !n.open)
        ) {
            const a = r;
            return a
                ? Pr.createPortal(
                      x.jsx(Dy, {
                          scope: e.__scopeSelect,
                          children: x.jsx(nl.Slot, {
                              scope: e.__scopeSelect,
                              children: x.jsx("div", { children: e.children }),
                          }),
                      }),
                      a
                  )
                : null;
        }
        return x.jsx(_y, { ...e, ref: t });
    });
Ay.displayName = br;
var Et = 10,
    [Dy, qn] = Ro(br),
    NP = "SelectContentImpl",
    RP = ba("SelectContent.RemoveScroll"),
    _y = f.forwardRef((e, t) => {
        const {
                __scopeSelect: n,
                position: r = "item-aligned",
                onCloseAutoFocus: o,
                onEscapeKeyDown: a,
                onPointerDownOutside: s,
                side: i,
                sideOffset: l,
                align: c,
                alignOffset: u,
                arrowPadding: d,
                collisionBoundary: g,
                collisionPadding: p,
                sticky: C,
                hideWhenDetached: h,
                avoidCollisions: w,
                ...v
            } = e,
            m = Xn(br, n),
            [y, S] = f.useState(null),
            [b, I] = f.useState(null),
            E = le(t, (z) => S(z)),
            [N, k] = f.useState(null),
            [P, _] = f.useState(null),
            D = rl(n),
            [F, M] = f.useState(!1),
            V = f.useRef(!1);
        f.useEffect(() => {
            if (y) return FT(y);
        }, [y]),
            IT();
        const L = f.useCallback(
                (z) => {
                    const [se, ...Se] = D().map((re) => re.ref.current),
                        [oe] = Se.slice(-1),
                        te = document.activeElement;
                    for (const re of z)
                        if (
                            re === te ||
                            (re == null || re.scrollIntoView({ block: "nearest" }),
                            re === se && b && (b.scrollTop = 0),
                            re === oe && b && (b.scrollTop = b.scrollHeight),
                            re == null || re.focus(),
                            document.activeElement !== te)
                        )
                            return;
                },
                [D, b]
            ),
            U = f.useCallback(() => L([N, y]), [L, N, y]);
        f.useEffect(() => {
            F && U();
        }, [F, U]);
        const { onOpenChange: T, triggerPointerDownPosRef: R } = m;
        f.useEffect(() => {
            if (y) {
                let z = { x: 0, y: 0 };
                const se = (oe) => {
                        var te, re;
                        z = {
                            x: Math.abs(Math.round(oe.pageX) - (((te = R.current) == null ? void 0 : te.x) ?? 0)),
                            y: Math.abs(Math.round(oe.pageY) - (((re = R.current) == null ? void 0 : re.y) ?? 0)),
                        };
                    },
                    Se = (oe) => {
                        z.x <= 10 && z.y <= 10 ? oe.preventDefault() : y.contains(oe.target) || T(!1),
                            document.removeEventListener("pointermove", se),
                            (R.current = null);
                    };
                return (
                    R.current !== null &&
                        (document.addEventListener("pointermove", se),
                        document.addEventListener("pointerup", Se, { capture: !0, once: !0 })),
                    () => {
                        document.removeEventListener("pointermove", se),
                            document.removeEventListener("pointerup", Se, { capture: !0 });
                    }
                );
            }
        }, [y, T, R]),
            f.useEffect(() => {
                const z = () => T(!1);
                return (
                    window.addEventListener("blur", z),
                    window.addEventListener("resize", z),
                    () => {
                        window.removeEventListener("blur", z), window.removeEventListener("resize", z);
                    }
                );
            }, [T]);
        const [B, K] = Xy((z) => {
                const se = D().filter((te) => !te.disabled),
                    Se = se.find((te) => te.ref.current === document.activeElement),
                    oe = qy(se, z, Se);
                oe && setTimeout(() => oe.ref.current.focus());
            }),
            W = f.useCallback(
                (z, se, Se) => {
                    const oe = !V.current && !Se;
                    ((m.value !== void 0 && m.value === se) || oe) && (k(z), oe && (V.current = !0));
                },
                [m.value]
            ),
            q = f.useCallback(() => (y == null ? void 0 : y.focus()), [y]),
            G = f.useCallback(
                (z, se, Se) => {
                    const oe = !V.current && !Se;
                    ((m.value !== void 0 && m.value === se) || oe) && _(z);
                },
                [m.value]
            ),
            de = r === "popper" ? lu : My,
            we =
                de === lu
                    ? {
                          side: i,
                          sideOffset: l,
                          align: c,
                          alignOffset: u,
                          arrowPadding: d,
                          collisionBoundary: g,
                          collisionPadding: p,
                          sticky: C,
                          hideWhenDetached: h,
                          avoidCollisions: w,
                      }
                    : {};
        return x.jsx(Dy, {
            scope: n,
            content: y,
            viewport: b,
            onViewportChange: I,
            itemRefCallback: W,
            selectedItem: N,
            onItemLeave: q,
            itemTextRefCallback: G,
            focusSelectedItem: U,
            selectedItemText: P,
            position: r,
            isPositioned: F,
            searchRef: B,
            children: x.jsx(by, {
                as: RP,
                allowPinchZoom: !0,
                children: x.jsx(fy, {
                    asChild: !0,
                    trapped: m.open,
                    onMountAutoFocus: (z) => {
                        z.preventDefault();
                    },
                    onUnmountAutoFocus: H(o, (z) => {
                        var se;
                        (se = m.trigger) == null || se.focus({ preventScroll: !0 }), z.preventDefault();
                    }),
                    children: x.jsx(ji, {
                        asChild: !0,
                        disableOutsidePointerEvents: !0,
                        onEscapeKeyDown: a,
                        onPointerDownOutside: s,
                        onFocusOutside: (z) => z.preventDefault(),
                        onDismiss: () => m.onOpenChange(!1),
                        children: x.jsx(de, {
                            role: "listbox",
                            id: m.contentId,
                            "data-state": m.open ? "open" : "closed",
                            dir: m.dir,
                            onContextMenu: (z) => z.preventDefault(),
                            ...v,
                            ...we,
                            onPlaced: () => M(!0),
                            ref: E,
                            style: { display: "flex", flexDirection: "column", outline: "none", ...v.style },
                            onKeyDown: H(v.onKeyDown, (z) => {
                                const se = z.ctrlKey || z.altKey || z.metaKey;
                                if (
                                    (z.key === "Tab" && z.preventDefault(),
                                    !se && z.key.length === 1 && K(z.key),
                                    ["ArrowUp", "ArrowDown", "Home", "End"].includes(z.key))
                                ) {
                                    let oe = D()
                                        .filter((te) => !te.disabled)
                                        .map((te) => te.ref.current);
                                    if (
                                        (["ArrowUp", "End"].includes(z.key) && (oe = oe.slice().reverse()),
                                        ["ArrowUp", "ArrowDown"].includes(z.key))
                                    ) {
                                        const te = z.target,
                                            re = oe.indexOf(te);
                                        oe = oe.slice(re + 1);
                                    }
                                    setTimeout(() => L(oe)), z.preventDefault();
                                }
                            }),
                        }),
                    }),
                }),
            }),
        });
    });
_y.displayName = NP;
var AP = "SelectItemAlignedPosition",
    My = f.forwardRef((e, t) => {
        const { __scopeSelect: n, onPlaced: r, ...o } = e,
            a = Xn(br, n),
            s = qn(br, n),
            [i, l] = f.useState(null),
            [c, u] = f.useState(null),
            d = le(t, (E) => u(E)),
            g = rl(n),
            p = f.useRef(!1),
            C = f.useRef(!0),
            { viewport: h, selectedItem: w, selectedItemText: v, focusSelectedItem: m } = s,
            y = f.useCallback(() => {
                if (a.trigger && a.valueNode && i && c && h && w && v) {
                    const E = a.trigger.getBoundingClientRect(),
                        N = c.getBoundingClientRect(),
                        k = a.valueNode.getBoundingClientRect(),
                        P = v.getBoundingClientRect();
                    if (a.dir !== "rtl") {
                        const te = P.left - N.left,
                            re = k.left - te,
                            Le = E.left - re,
                            ct = E.width + Le,
                            Zn = Math.max(ct, N.width),
                            pn = window.innerWidth - Et,
                            Jn = vi(re, [Et, Math.max(Et, pn - Zn)]);
                        (i.style.minWidth = ct + "px"), (i.style.left = Jn + "px");
                    } else {
                        const te = N.right - P.right,
                            re = window.innerWidth - k.right - te,
                            Le = window.innerWidth - E.right - re,
                            ct = E.width + Le,
                            Zn = Math.max(ct, N.width),
                            pn = window.innerWidth - Et,
                            Jn = vi(re, [Et, Math.max(Et, pn - Zn)]);
                        (i.style.minWidth = ct + "px"), (i.style.right = Jn + "px");
                    }
                    const _ = g(),
                        D = window.innerHeight - Et * 2,
                        F = h.scrollHeight,
                        M = window.getComputedStyle(c),
                        V = parseInt(M.borderTopWidth, 10),
                        L = parseInt(M.paddingTop, 10),
                        U = parseInt(M.borderBottomWidth, 10),
                        T = parseInt(M.paddingBottom, 10),
                        R = V + L + F + T + U,
                        B = Math.min(w.offsetHeight * 5, R),
                        K = window.getComputedStyle(h),
                        W = parseInt(K.paddingTop, 10),
                        q = parseInt(K.paddingBottom, 10),
                        G = E.top + E.height / 2 - Et,
                        de = D - G,
                        we = w.offsetHeight / 2,
                        z = w.offsetTop + we,
                        se = V + L + z,
                        Se = R - se;
                    if (se <= G) {
                        const te = _.length > 0 && w === _[_.length - 1].ref.current;
                        i.style.bottom = "0px";
                        const re = c.clientHeight - h.offsetTop - h.offsetHeight,
                            Le = Math.max(de, we + (te ? q : 0) + re + U),
                            ct = se + Le;
                        i.style.height = ct + "px";
                    } else {
                        const te = _.length > 0 && w === _[0].ref.current;
                        i.style.top = "0px";
                        const Le = Math.max(G, V + h.offsetTop + (te ? W : 0) + we) + Se;
                        (i.style.height = Le + "px"), (h.scrollTop = se - G + h.offsetTop);
                    }
                    (i.style.margin = `${Et}px 0`),
                        (i.style.minHeight = B + "px"),
                        (i.style.maxHeight = D + "px"),
                        r == null || r(),
                        requestAnimationFrame(() => (p.current = !0));
                }
            }, [g, a.trigger, a.valueNode, i, c, h, w, v, a.dir, r]);
        Oe(() => y(), [y]);
        const [S, b] = f.useState();
        Oe(() => {
            c && b(window.getComputedStyle(c).zIndex);
        }, [c]);
        const I = f.useCallback(
            (E) => {
                E && C.current === !0 && (y(), m == null || m(), (C.current = !1));
            },
            [y, m]
        );
        return x.jsx(_P, {
            scope: n,
            contentWrapper: i,
            shouldExpandOnScrollRef: p,
            onScrollButtonChange: I,
            children: x.jsx("div", {
                ref: l,
                style: { display: "flex", flexDirection: "column", position: "fixed", zIndex: S },
                children: x.jsx(X.div, {
                    ...o,
                    ref: d,
                    style: { boxSizing: "border-box", maxHeight: "100%", ...o.style },
                }),
            }),
        });
    });
My.displayName = AP;
var DP = "SelectPopperPosition",
    lu = f.forwardRef((e, t) => {
        const { __scopeSelect: n, align: r = "start", collisionPadding: o = Et, ...a } = e,
            s = ol(n);
        return x.jsx(jg, {
            ...s,
            ...a,
            ref: t,
            align: r,
            collisionPadding: o,
            style: {
                boxSizing: "border-box",
                ...a.style,
                "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-select-content-available-width": "var(--radix-popper-available-width)",
                "--radix-select-content-available-height": "var(--radix-popper-available-height)",
                "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-select-trigger-height": "var(--radix-popper-anchor-height)",
            },
        });
    });
lu.displayName = DP;
var [_P, _d] = Ro(br, {}),
    cu = "SelectViewport",
    Oy = f.forwardRef((e, t) => {
        const { __scopeSelect: n, nonce: r, ...o } = e,
            a = qn(cu, n),
            s = _d(cu, n),
            i = le(t, a.onViewportChange),
            l = f.useRef(0);
        return x.jsxs(x.Fragment, {
            children: [
                x.jsx("style", {
                    dangerouslySetInnerHTML: {
                        __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}",
                    },
                    nonce: r,
                }),
                x.jsx(nl.Slot, {
                    scope: n,
                    children: x.jsx(X.div, {
                        "data-radix-select-viewport": "",
                        role: "presentation",
                        ...o,
                        ref: i,
                        style: { position: "relative", flex: 1, overflow: "hidden auto", ...o.style },
                        onScroll: H(o.onScroll, (c) => {
                            const u = c.currentTarget,
                                { contentWrapper: d, shouldExpandOnScrollRef: g } = s;
                            if (g != null && g.current && d) {
                                const p = Math.abs(l.current - u.scrollTop);
                                if (p > 0) {
                                    const C = window.innerHeight - Et * 2,
                                        h = parseFloat(d.style.minHeight),
                                        w = parseFloat(d.style.height),
                                        v = Math.max(h, w);
                                    if (v < C) {
                                        const m = v + p,
                                            y = Math.min(C, m),
                                            S = m - y;
                                        (d.style.height = y + "px"),
                                            d.style.bottom === "0px" &&
                                                ((u.scrollTop = S > 0 ? S : 0), (d.style.justifyContent = "flex-end"));
                                    }
                                }
                            }
                            l.current = u.scrollTop;
                        }),
                    }),
                }),
            ],
        });
    });
Oy.displayName = cu;
var jy = "SelectGroup",
    [MP, OP] = Ro(jy),
    jP = f.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e,
            o = Ba();
        return x.jsx(MP, {
            scope: n,
            id: o,
            children: x.jsx(X.div, { role: "group", "aria-labelledby": o, ...r, ref: t }),
        });
    });
jP.displayName = jy;
var Ly = "SelectLabel",
    Fy = f.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e,
            o = OP(Ly, n);
        return x.jsx(X.div, { id: o.id, ...r, ref: t });
    });
Fy.displayName = Ly;
var gi = "SelectItem",
    [LP, By] = Ro(gi),
    zy = f.forwardRef((e, t) => {
        const { __scopeSelect: n, value: r, disabled: o = !1, textValue: a, ...s } = e,
            i = Xn(gi, n),
            l = qn(gi, n),
            c = i.value === r,
            [u, d] = f.useState(a ?? ""),
            [g, p] = f.useState(!1),
            C = le(t, (m) => {
                var y;
                return (y = l.itemRefCallback) == null ? void 0 : y.call(l, m, r, o);
            }),
            h = Ba(),
            w = f.useRef("touch"),
            v = () => {
                o || (i.onValueChange(r), i.onOpenChange(!1));
            };
        if (r === "")
            throw new Error(
                "A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder."
            );
        return x.jsx(LP, {
            scope: n,
            value: r,
            disabled: o,
            textId: h,
            isSelected: c,
            onItemTextChange: f.useCallback((m) => {
                d((y) => y || ((m == null ? void 0 : m.textContent) ?? "").trim());
            }, []),
            children: x.jsx(nl.ItemSlot, {
                scope: n,
                value: r,
                disabled: o,
                textValue: u,
                children: x.jsx(X.div, {
                    role: "option",
                    "aria-labelledby": h,
                    "data-highlighted": g ? "" : void 0,
                    "aria-selected": c && g,
                    "data-state": c ? "checked" : "unchecked",
                    "aria-disabled": o || void 0,
                    "data-disabled": o ? "" : void 0,
                    tabIndex: o ? void 0 : -1,
                    ...s,
                    ref: C,
                    onFocus: H(s.onFocus, () => p(!0)),
                    onBlur: H(s.onBlur, () => p(!1)),
                    onClick: H(s.onClick, () => {
                        w.current !== "mouse" && v();
                    }),
                    onPointerUp: H(s.onPointerUp, () => {
                        w.current === "mouse" && v();
                    }),
                    onPointerDown: H(s.onPointerDown, (m) => {
                        w.current = m.pointerType;
                    }),
                    onPointerMove: H(s.onPointerMove, (m) => {
                        var y;
                        (w.current = m.pointerType),
                            o
                                ? (y = l.onItemLeave) == null || y.call(l)
                                : w.current === "mouse" && m.currentTarget.focus({ preventScroll: !0 });
                    }),
                    onPointerLeave: H(s.onPointerLeave, (m) => {
                        var y;
                        m.currentTarget === document.activeElement && ((y = l.onItemLeave) == null || y.call(l));
                    }),
                    onKeyDown: H(s.onKeyDown, (m) => {
                        var S;
                        (((S = l.searchRef) == null ? void 0 : S.current) !== "" && m.key === " ") ||
                            (CP.includes(m.key) && v(), m.key === " " && m.preventDefault());
                    }),
                }),
            }),
        });
    });
zy.displayName = gi;
var Yo = "SelectItemText",
    $y = f.forwardRef((e, t) => {
        const { __scopeSelect: n, className: r, style: o, ...a } = e,
            s = Xn(Yo, n),
            i = qn(Yo, n),
            l = By(Yo, n),
            c = PP(Yo, n),
            [u, d] = f.useState(null),
            g = le(
                t,
                (v) => d(v),
                l.onItemTextChange,
                (v) => {
                    var m;
                    return (m = i.itemTextRefCallback) == null ? void 0 : m.call(i, v, l.value, l.disabled);
                }
            ),
            p = u == null ? void 0 : u.textContent,
            C = f.useMemo(
                () => x.jsx("option", { value: l.value, disabled: l.disabled, children: p }, l.value),
                [l.disabled, l.value, p]
            ),
            { onNativeOptionAdd: h, onNativeOptionRemove: w } = c;
        return (
            Oe(() => (h(C), () => w(C)), [h, w, C]),
            x.jsxs(x.Fragment, {
                children: [
                    x.jsx(X.span, { id: l.textId, ...a, ref: g }),
                    l.isSelected && s.valueNode && !s.valueNodeHasChildren
                        ? Pr.createPortal(a.children, s.valueNode)
                        : null,
                ],
            })
        );
    });
$y.displayName = Yo;
var Uy = "SelectItemIndicator",
    Vy = f.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e;
        return By(Uy, n).isSelected ? x.jsx(X.span, { "aria-hidden": !0, ...r, ref: t }) : null;
    });
Vy.displayName = Uy;
var uu = "SelectScrollUpButton",
    Wy = f.forwardRef((e, t) => {
        const n = qn(uu, e.__scopeSelect),
            r = _d(uu, e.__scopeSelect),
            [o, a] = f.useState(!1),
            s = le(t, r.onScrollButtonChange);
        return (
            Oe(() => {
                if (n.viewport && n.isPositioned) {
                    let i = function () {
                        const c = l.scrollTop > 0;
                        a(c);
                    };
                    const l = n.viewport;
                    return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
                }
            }, [n.viewport, n.isPositioned]),
            o
                ? x.jsx(Ky, {
                      ...e,
                      ref: s,
                      onAutoScroll: () => {
                          const { viewport: i, selectedItem: l } = n;
                          i && l && (i.scrollTop = i.scrollTop - l.offsetHeight);
                      },
                  })
                : null
        );
    });
Wy.displayName = uu;
var du = "SelectScrollDownButton",
    Hy = f.forwardRef((e, t) => {
        const n = qn(du, e.__scopeSelect),
            r = _d(du, e.__scopeSelect),
            [o, a] = f.useState(!1),
            s = le(t, r.onScrollButtonChange);
        return (
            Oe(() => {
                if (n.viewport && n.isPositioned) {
                    let i = function () {
                        const c = l.scrollHeight - l.clientHeight,
                            u = Math.ceil(l.scrollTop) < c;
                        a(u);
                    };
                    const l = n.viewport;
                    return i(), l.addEventListener("scroll", i), () => l.removeEventListener("scroll", i);
                }
            }, [n.viewport, n.isPositioned]),
            o
                ? x.jsx(Ky, {
                      ...e,
                      ref: s,
                      onAutoScroll: () => {
                          const { viewport: i, selectedItem: l } = n;
                          i && l && (i.scrollTop = i.scrollTop + l.offsetHeight);
                      },
                  })
                : null
        );
    });
Hy.displayName = du;
var Ky = f.forwardRef((e, t) => {
        const { __scopeSelect: n, onAutoScroll: r, ...o } = e,
            a = qn("SelectScrollButton", n),
            s = f.useRef(null),
            i = rl(n),
            l = f.useCallback(() => {
                s.current !== null && (window.clearInterval(s.current), (s.current = null));
            }, []);
        return (
            f.useEffect(() => () => l(), [l]),
            Oe(() => {
                var u;
                const c = i().find((d) => d.ref.current === document.activeElement);
                (u = c == null ? void 0 : c.ref.current) == null || u.scrollIntoView({ block: "nearest" });
            }, [i]),
            x.jsx(X.div, {
                "aria-hidden": !0,
                ...o,
                ref: t,
                style: { flexShrink: 0, ...o.style },
                onPointerDown: H(o.onPointerDown, () => {
                    s.current === null && (s.current = window.setInterval(r, 50));
                }),
                onPointerMove: H(o.onPointerMove, () => {
                    var c;
                    (c = a.onItemLeave) == null || c.call(a),
                        s.current === null && (s.current = window.setInterval(r, 50));
                }),
                onPointerLeave: H(o.onPointerLeave, () => {
                    l();
                }),
            })
        );
    }),
    FP = "SelectSeparator",
    Qy = f.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e;
        return x.jsx(X.div, { "aria-hidden": !0, ...r, ref: t });
    });
Qy.displayName = FP;
var fu = "SelectArrow",
    BP = f.forwardRef((e, t) => {
        const { __scopeSelect: n, ...r } = e,
            o = ol(n),
            a = Xn(fu, n),
            s = qn(fu, n);
        return a.open && s.position === "popper" ? x.jsx(Lg, { ...o, ...r, ref: t }) : null;
    });
BP.displayName = fu;
var zP = "SelectBubbleInput",
    Gy = f.forwardRef(({ __scopeSelect: e, value: t, ...n }, r) => {
        const o = f.useRef(null),
            a = le(r, o),
            s = my(t);
        return (
            f.useEffect(() => {
                const i = o.current;
                if (!i) return;
                const l = window.HTMLSelectElement.prototype,
                    u = Object.getOwnPropertyDescriptor(l, "value").set;
                if (s !== t && u) {
                    const d = new Event("change", { bubbles: !0 });
                    u.call(i, t), i.dispatchEvent(d);
                }
            }, [s, t]),
            x.jsx(X.select, { ...n, style: { ..._v, ...n.style }, ref: a, defaultValue: t })
        );
    });
Gy.displayName = zP;
function Yy(e) {
    return e === "" || e === void 0;
}
function Xy(e) {
    const t = yt(e),
        n = f.useRef(""),
        r = f.useRef(0),
        o = f.useCallback(
            (s) => {
                const i = n.current + s;
                t(i),
                    (function l(c) {
                        (n.current = c),
                            window.clearTimeout(r.current),
                            c !== "" && (r.current = window.setTimeout(() => l(""), 1e3));
                    })(i);
            },
            [t]
        ),
        a = f.useCallback(() => {
            (n.current = ""), window.clearTimeout(r.current);
        }, []);
    return f.useEffect(() => () => window.clearTimeout(r.current), []), [n, o, a];
}
function qy(e, t, n) {
    const o = t.length > 1 && Array.from(t).every((c) => c === t[0]) ? t[0] : t,
        a = n ? e.indexOf(n) : -1;
    let s = $P(e, Math.max(a, 0));
    o.length === 1 && (s = s.filter((c) => c !== n));
    const l = s.find((c) => c.textValue.toLowerCase().startsWith(o.toLowerCase()));
    return l !== n ? l : void 0;
}
function $P(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var UP = Ey,
    Zy = Py,
    VP = ky,
    WP = Ny,
    HP = Ry,
    Jy = Ay,
    KP = Oy,
    ex = Fy,
    tx = zy,
    QP = $y,
    GP = Vy,
    nx = Wy,
    rx = Hy,
    ox = Qy;
const YP = UP,
    XP = VP,
    ax = f.forwardRef(({ className: e, children: t, ...n }, r) =>
        x.jsxs(Zy, {
            "data-lov-id": "src/components/ui/select.tsx:17:2",
            "data-lov-name": "SelectPrimitive.Trigger",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "17",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.Trigger",
            "data-component-content": "%7B%7D",
            ref: r,
            className: ae(
                "flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
                e
            ),
            ...n,
            children: [
                t,
                x.jsx(WP, {
                    "data-lov-id": "src/components/ui/select.tsx:26:4",
                    "data-lov-name": "SelectPrimitive.Icon",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "26",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectPrimitive.Icon",
                    "data-component-content": "%7B%7D",
                    asChild: !0,
                    children: x.jsx(ng, {
                        "data-lov-id": "src/components/ui/select.tsx:27:6",
                        "data-lov-name": "ChevronDown",
                        "data-component-path": "src/components/ui/select.tsx",
                        "data-component-line": "27",
                        "data-component-file": "select.tsx",
                        "data-component-name": "ChevronDown",
                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%20opacity-50%22%7D",
                        className: "h-4 w-4 opacity-50",
                    }),
                }),
            ],
        })
    );
ax.displayName = Zy.displayName;
const sx = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(nx, {
        "data-lov-id": "src/components/ui/select.tsx:37:2",
        "data-lov-name": "SelectPrimitive.ScrollUpButton",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "37",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ScrollUpButton",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("flex cursor-default items-center justify-center py-1", e),
        ...t,
        children: x.jsx(R1, {
            "data-lov-id": "src/components/ui/select.tsx:45:4",
            "data-lov-name": "ChevronUp",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "45",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronUp",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4",
        }),
    })
);
sx.displayName = nx.displayName;
const ix = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(rx, {
        "data-lov-id": "src/components/ui/select.tsx:54:2",
        "data-lov-name": "SelectPrimitive.ScrollDownButton",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "54",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.ScrollDownButton",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("flex cursor-default items-center justify-center py-1", e),
        ...t,
        children: x.jsx(ng, {
            "data-lov-id": "src/components/ui/select.tsx:62:4",
            "data-lov-name": "ChevronDown",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "62",
            "data-component-file": "select.tsx",
            "data-component-name": "ChevronDown",
            "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
            className: "h-4 w-4",
        }),
    })
);
ix.displayName = rx.displayName;
const lx = f.forwardRef(({ className: e, children: t, position: n = "popper", ...r }, o) =>
    x.jsx(HP, {
        "data-lov-id": "src/components/ui/select.tsx:72:2",
        "data-lov-name": "SelectPrimitive.Portal",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "72",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Portal",
        "data-component-content": "%7B%7D",
        children: x.jsxs(Jy, {
            "data-lov-id": "src/components/ui/select.tsx:73:4",
            "data-lov-name": "SelectPrimitive.Content",
            "data-component-path": "src/components/ui/select.tsx",
            "data-component-line": "73",
            "data-component-file": "select.tsx",
            "data-component-name": "SelectPrimitive.Content",
            "data-component-content": "%7B%7D",
            ref: o,
            className: ae(
                "relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
                n === "popper" &&
                    "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
                e
            ),
            position: n,
            ...r,
            children: [
                x.jsx(sx, {
                    "data-lov-id": "src/components/ui/select.tsx:84:6",
                    "data-lov-name": "SelectScrollUpButton",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "84",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectScrollUpButton",
                    "data-component-content": "%7B%7D",
                }),
                x.jsx(KP, {
                    "data-lov-id": "src/components/ui/select.tsx:85:6",
                    "data-lov-name": "SelectPrimitive.Viewport",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "85",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectPrimitive.Viewport",
                    "data-component-content": "%7B%7D",
                    className: ae(
                        "p-1",
                        n === "popper" &&
                            "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
                    ),
                    children: t,
                }),
                x.jsx(ix, {
                    "data-lov-id": "src/components/ui/select.tsx:94:6",
                    "data-lov-name": "SelectScrollDownButton",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "94",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectScrollDownButton",
                    "data-component-content": "%7B%7D",
                }),
            ],
        }),
    })
);
lx.displayName = Jy.displayName;
const qP = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(ex, {
        "data-lov-id": "src/components/ui/select.tsx:104:2",
        "data-lov-name": "SelectPrimitive.Label",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "104",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Label",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("py-1.5 pl-8 pr-2 text-sm font-semibold", e),
        ...t,
    })
);
qP.displayName = ex.displayName;
const jr = f.forwardRef(({ className: e, children: t, ...n }, r) =>
    x.jsxs(tx, {
        "data-lov-id": "src/components/ui/select.tsx:116:2",
        "data-lov-name": "SelectPrimitive.Item",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "116",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Item",
        "data-component-content": "%7B%7D",
        ref: r,
        className: ae(
            "relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
            e
        ),
        ...n,
        children: [
            x.jsx("span", {
                "data-lov-id": "src/components/ui/select.tsx:124:4",
                "data-lov-name": "span",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "124",
                "data-component-file": "select.tsx",
                "data-component-name": "span",
                "data-component-content":
                    "%7B%22className%22%3A%22absolute%20left-2%20flex%20h-3.5%20w-3.5%20items-center%20justify-center%22%7D",
                className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center",
                children: x.jsx(GP, {
                    "data-lov-id": "src/components/ui/select.tsx:125:6",
                    "data-lov-name": "SelectPrimitive.ItemIndicator",
                    "data-component-path": "src/components/ui/select.tsx",
                    "data-component-line": "125",
                    "data-component-file": "select.tsx",
                    "data-component-name": "SelectPrimitive.ItemIndicator",
                    "data-component-content": "%7B%7D",
                    children: x.jsx(N1, {
                        "data-lov-id": "src/components/ui/select.tsx:126:8",
                        "data-lov-name": "Check",
                        "data-component-path": "src/components/ui/select.tsx",
                        "data-component-line": "126",
                        "data-component-file": "select.tsx",
                        "data-component-name": "Check",
                        "data-component-content": "%7B%22className%22%3A%22h-4%20w-4%22%7D",
                        className: "h-4 w-4",
                    }),
                }),
            }),
            x.jsx(QP, {
                "data-lov-id": "src/components/ui/select.tsx:130:4",
                "data-lov-name": "SelectPrimitive.ItemText",
                "data-component-path": "src/components/ui/select.tsx",
                "data-component-line": "130",
                "data-component-file": "select.tsx",
                "data-component-name": "SelectPrimitive.ItemText",
                "data-component-content": "%7B%7D",
                children: t,
            }),
        ],
    })
);
jr.displayName = tx.displayName;
const ZP = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(ox, {
        "data-lov-id": "src/components/ui/select.tsx:139:2",
        "data-lov-name": "SelectPrimitive.Separator",
        "data-component-path": "src/components/ui/select.tsx",
        "data-component-line": "139",
        "data-component-file": "select.tsx",
        "data-component-name": "SelectPrimitive.Separator",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("-mx-1 my-1 h-px bg-muted", e),
        ...t,
    })
);
ZP.displayName = ox.displayName;
var cx = ["PageUp", "PageDown"],
    ux = ["ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight"],
    dx = {
        "from-left": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-right": ["Home", "PageDown", "ArrowDown", "ArrowRight"],
        "from-bottom": ["Home", "PageDown", "ArrowDown", "ArrowLeft"],
        "from-top": ["Home", "PageDown", "ArrowUp", "ArrowLeft"],
    },
    Ao = "Slider",
    [pu, JP, eI] = Oi(Ao),
    [fx] = fn(Ao, [eI]),
    [tI, al] = fx(Ao),
    px = f.forwardRef((e, t) => {
        const {
                name: n,
                min: r = 0,
                max: o = 100,
                step: a = 1,
                orientation: s = "horizontal",
                disabled: i = !1,
                minStepsBetweenThumbs: l = 0,
                defaultValue: c = [r],
                value: u,
                onValueChange: d = () => {},
                onValueCommit: g = () => {},
                inverted: p = !1,
                form: C,
                ...h
            } = e,
            w = f.useRef(new Set()),
            v = f.useRef(0),
            y = s === "horizontal" ? nI : rI,
            [S = [], b] = wo({
                prop: u,
                defaultProp: c,
                onChange: (_) => {
                    var F;
                    (F = [...w.current][v.current]) == null || F.focus(), d(_);
                },
            }),
            I = f.useRef(S);
        function E(_) {
            const D = lI(S, _);
            P(_, D);
        }
        function N(_) {
            P(_, v.current);
        }
        function k() {
            const _ = I.current[v.current];
            S[v.current] !== _ && g(S);
        }
        function P(_, D, { commit: F } = { commit: !1 }) {
            const M = fI(a),
                V = pI(Math.round((_ - r) / a) * a + r, M),
                L = vi(V, [r, o]);
            b((U = []) => {
                const T = sI(U, L, D);
                if (dI(T, l * a)) {
                    v.current = T.indexOf(L);
                    const R = String(T) !== String(U);
                    return R && F && g(T), R ? T : U;
                } else return U;
            });
        }
        return x.jsx(tI, {
            scope: e.__scopeSlider,
            name: n,
            disabled: i,
            min: r,
            max: o,
            valueIndexToChangeRef: v,
            thumbs: w.current,
            values: S,
            orientation: s,
            form: C,
            children: x.jsx(pu.Provider, {
                scope: e.__scopeSlider,
                children: x.jsx(pu.Slot, {
                    scope: e.__scopeSlider,
                    children: x.jsx(y, {
                        "aria-disabled": i,
                        "data-disabled": i ? "" : void 0,
                        ...h,
                        ref: t,
                        onPointerDown: H(h.onPointerDown, () => {
                            i || (I.current = S);
                        }),
                        min: r,
                        max: o,
                        inverted: p,
                        onSlideStart: i ? void 0 : E,
                        onSlideMove: i ? void 0 : N,
                        onSlideEnd: i ? void 0 : k,
                        onHomeKeyDown: () => !i && P(r, 0, { commit: !0 }),
                        onEndKeyDown: () => !i && P(o, S.length - 1, { commit: !0 }),
                        onStepKeyDown: ({ event: _, direction: D }) => {
                            if (!i) {
                                const V = cx.includes(_.key) || (_.shiftKey && ux.includes(_.key)) ? 10 : 1,
                                    L = v.current,
                                    U = S[L],
                                    T = a * V * D;
                                P(U + T, L, { commit: !0 });
                            }
                        },
                    }),
                }),
            }),
        });
    });
px.displayName = Ao;
var [mx, hx] = fx(Ao, { startEdge: "left", endEdge: "right", size: "width", direction: 1 }),
    nI = f.forwardRef((e, t) => {
        const {
                min: n,
                max: r,
                dir: o,
                inverted: a,
                onSlideStart: s,
                onSlideMove: i,
                onSlideEnd: l,
                onStepKeyDown: c,
                ...u
            } = e,
            [d, g] = f.useState(null),
            p = le(t, (y) => g(y)),
            C = f.useRef(void 0),
            h = el(o),
            w = h === "ltr",
            v = (w && !a) || (!w && a);
        function m(y) {
            const S = C.current || d.getBoundingClientRect(),
                b = [0, S.width],
                E = Md(b, v ? [n, r] : [r, n]);
            return (C.current = S), E(y - S.left);
        }
        return x.jsx(mx, {
            scope: e.__scopeSlider,
            startEdge: v ? "left" : "right",
            endEdge: v ? "right" : "left",
            direction: v ? 1 : -1,
            size: "width",
            children: x.jsx(vx, {
                dir: h,
                "data-orientation": "horizontal",
                ...u,
                ref: p,
                style: { ...u.style, "--radix-slider-thumb-transform": "translateX(-50%)" },
                onSlideStart: (y) => {
                    const S = m(y.clientX);
                    s == null || s(S);
                },
                onSlideMove: (y) => {
                    const S = m(y.clientX);
                    i == null || i(S);
                },
                onSlideEnd: () => {
                    (C.current = void 0), l == null || l();
                },
                onStepKeyDown: (y) => {
                    const b = dx[v ? "from-left" : "from-right"].includes(y.key);
                    c == null || c({ event: y, direction: b ? -1 : 1 });
                },
            }),
        });
    }),
    rI = f.forwardRef((e, t) => {
        const {
                min: n,
                max: r,
                inverted: o,
                onSlideStart: a,
                onSlideMove: s,
                onSlideEnd: i,
                onStepKeyDown: l,
                ...c
            } = e,
            u = f.useRef(null),
            d = le(t, u),
            g = f.useRef(void 0),
            p = !o;
        function C(h) {
            const w = g.current || u.current.getBoundingClientRect(),
                v = [0, w.height],
                y = Md(v, p ? [r, n] : [n, r]);
            return (g.current = w), y(h - w.top);
        }
        return x.jsx(mx, {
            scope: e.__scopeSlider,
            startEdge: p ? "bottom" : "top",
            endEdge: p ? "top" : "bottom",
            size: "height",
            direction: p ? 1 : -1,
            children: x.jsx(vx, {
                "data-orientation": "vertical",
                ...c,
                ref: d,
                style: { ...c.style, "--radix-slider-thumb-transform": "translateY(50%)" },
                onSlideStart: (h) => {
                    const w = C(h.clientY);
                    a == null || a(w);
                },
                onSlideMove: (h) => {
                    const w = C(h.clientY);
                    s == null || s(w);
                },
                onSlideEnd: () => {
                    (g.current = void 0), i == null || i();
                },
                onStepKeyDown: (h) => {
                    const v = dx[p ? "from-bottom" : "from-top"].includes(h.key);
                    l == null || l({ event: h, direction: v ? -1 : 1 });
                },
            }),
        });
    }),
    vx = f.forwardRef((e, t) => {
        const {
                __scopeSlider: n,
                onSlideStart: r,
                onSlideMove: o,
                onSlideEnd: a,
                onHomeKeyDown: s,
                onEndKeyDown: i,
                onStepKeyDown: l,
                ...c
            } = e,
            u = al(Ao, n);
        return x.jsx(X.span, {
            ...c,
            ref: t,
            onKeyDown: H(e.onKeyDown, (d) => {
                d.key === "Home"
                    ? (s(d), d.preventDefault())
                    : d.key === "End"
                      ? (i(d), d.preventDefault())
                      : cx.concat(ux).includes(d.key) && (l(d), d.preventDefault());
            }),
            onPointerDown: H(e.onPointerDown, (d) => {
                const g = d.target;
                g.setPointerCapture(d.pointerId), d.preventDefault(), u.thumbs.has(g) ? g.focus() : r(d);
            }),
            onPointerMove: H(e.onPointerMove, (d) => {
                d.target.hasPointerCapture(d.pointerId) && o(d);
            }),
            onPointerUp: H(e.onPointerUp, (d) => {
                const g = d.target;
                g.hasPointerCapture(d.pointerId) && (g.releasePointerCapture(d.pointerId), a(d));
            }),
        });
    }),
    gx = "SliderTrack",
    yx = f.forwardRef((e, t) => {
        const { __scopeSlider: n, ...r } = e,
            o = al(gx, n);
        return x.jsx(X.span, {
            "data-disabled": o.disabled ? "" : void 0,
            "data-orientation": o.orientation,
            ...r,
            ref: t,
        });
    });
yx.displayName = gx;
var mu = "SliderRange",
    xx = f.forwardRef((e, t) => {
        const { __scopeSlider: n, ...r } = e,
            o = al(mu, n),
            a = hx(mu, n),
            s = f.useRef(null),
            i = le(t, s),
            l = o.values.length,
            c = o.values.map((g) => Cx(g, o.min, o.max)),
            u = l > 1 ? Math.min(...c) : 0,
            d = 100 - Math.max(...c);
        return x.jsx(X.span, {
            "data-orientation": o.orientation,
            "data-disabled": o.disabled ? "" : void 0,
            ...r,
            ref: i,
            style: { ...e.style, [a.startEdge]: u + "%", [a.endEdge]: d + "%" },
        });
    });
xx.displayName = mu;
var hu = "SliderThumb",
    wx = f.forwardRef((e, t) => {
        const n = JP(e.__scopeSlider),
            [r, o] = f.useState(null),
            a = le(t, (i) => o(i)),
            s = f.useMemo(() => (r ? n().findIndex((i) => i.ref.current === r) : -1), [n, r]);
        return x.jsx(oI, { ...e, ref: a, index: s });
    }),
    oI = f.forwardRef((e, t) => {
        const { __scopeSlider: n, index: r, name: o, ...a } = e,
            s = al(hu, n),
            i = hx(hu, n),
            [l, c] = f.useState(null),
            u = le(t, (m) => c(m)),
            d = l ? s.form || !!l.closest("form") : !0,
            g = Tg(l),
            p = s.values[r],
            C = p === void 0 ? 0 : Cx(p, s.min, s.max),
            h = iI(r, s.values.length),
            w = g == null ? void 0 : g[i.size],
            v = w ? cI(w, C, i.direction) : 0;
        return (
            f.useEffect(() => {
                if (l)
                    return (
                        s.thumbs.add(l),
                        () => {
                            s.thumbs.delete(l);
                        }
                    );
            }, [l, s.thumbs]),
            x.jsxs("span", {
                style: {
                    transform: "var(--radix-slider-thumb-transform)",
                    position: "absolute",
                    [i.startEdge]: `calc(${C}% + ${v}px)`,
                },
                children: [
                    x.jsx(pu.ItemSlot, {
                        scope: e.__scopeSlider,
                        children: x.jsx(X.span, {
                            role: "slider",
                            "aria-label": e["aria-label"] || h,
                            "aria-valuemin": s.min,
                            "aria-valuenow": p,
                            "aria-valuemax": s.max,
                            "aria-orientation": s.orientation,
                            "data-orientation": s.orientation,
                            "data-disabled": s.disabled ? "" : void 0,
                            tabIndex: s.disabled ? void 0 : 0,
                            ...a,
                            ref: u,
                            style: p === void 0 ? { display: "none" } : e.style,
                            onFocus: H(e.onFocus, () => {
                                s.valueIndexToChangeRef.current = r;
                            }),
                        }),
                    }),
                    d &&
                        x.jsx(
                            Sx,
                            {
                                name: o ?? (s.name ? s.name + (s.values.length > 1 ? "[]" : "") : void 0),
                                form: s.form,
                                value: p,
                            },
                            r
                        ),
                ],
            })
        );
    });
wx.displayName = hu;
var aI = "RadioBubbleInput",
    Sx = f.forwardRef(({ __scopeSlider: e, value: t, ...n }, r) => {
        const o = f.useRef(null),
            a = le(o, r),
            s = my(t);
        return (
            f.useEffect(() => {
                const i = o.current;
                if (!i) return;
                const l = window.HTMLInputElement.prototype,
                    u = Object.getOwnPropertyDescriptor(l, "value").set;
                if (s !== t && u) {
                    const d = new Event("input", { bubbles: !0 });
                    u.call(i, t), i.dispatchEvent(d);
                }
            }, [s, t]),
            x.jsx(X.input, { style: { display: "none" }, ...n, ref: a, defaultValue: t })
        );
    });
Sx.displayName = aI;
function sI(e = [], t, n) {
    const r = [...e];
    return (r[n] = t), r.sort((o, a) => o - a);
}
function Cx(e, t, n) {
    const a = (100 / (n - t)) * (e - t);
    return vi(a, [0, 100]);
}
function iI(e, t) {
    return t > 2 ? `Value ${e + 1} of ${t}` : t === 2 ? ["Minimum", "Maximum"][e] : void 0;
}
function lI(e, t) {
    if (e.length === 1) return 0;
    const n = e.map((o) => Math.abs(o - t)),
        r = Math.min(...n);
    return n.indexOf(r);
}
function cI(e, t, n) {
    const r = e / 2,
        a = Md([0, 50], [0, r]);
    return (r - a(t) * n) * n;
}
function uI(e) {
    return e.slice(0, -1).map((t, n) => e[n + 1] - t);
}
function dI(e, t) {
    if (t > 0) {
        const n = uI(e);
        return Math.min(...n) >= t;
    }
    return !0;
}
function Md(e, t) {
    return (n) => {
        if (e[0] === e[1] || t[0] === t[1]) return t[0];
        const r = (t[1] - t[0]) / (e[1] - e[0]);
        return t[0] + r * (n - e[0]);
    };
}
function fI(e) {
    return (String(e).split(".")[1] || "").length;
}
function pI(e, t) {
    const n = Math.pow(10, t);
    return Math.round(e * n) / n;
}
var bx = px,
    mI = yx,
    hI = xx,
    vI = wx;
const Fs = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsxs(bx, {
        "data-lov-id": "src/components/ui/slider.tsx:10:2",
        "data-lov-name": "SliderPrimitive.Root",
        "data-component-path": "src/components/ui/slider.tsx",
        "data-component-line": "10",
        "data-component-file": "slider.tsx",
        "data-component-name": "SliderPrimitive.Root",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae("relative flex w-full touch-none select-none items-center", e),
        ...t,
        children: [
            x.jsx(mI, {
                "data-lov-id": "src/components/ui/slider.tsx:18:4",
                "data-lov-name": "SliderPrimitive.Track",
                "data-component-path": "src/components/ui/slider.tsx",
                "data-component-line": "18",
                "data-component-file": "slider.tsx",
                "data-component-name": "SliderPrimitive.Track",
                "data-component-content":
                    "%7B%22className%22%3A%22relative%20h-2%20w-full%20grow%20overflow-hidden%20rounded-full%20bg-secondary%22%7D",
                className: "relative h-2 w-full grow overflow-hidden rounded-full bg-secondary",
                children: x.jsx(hI, {
                    "data-lov-id": "src/components/ui/slider.tsx:19:6",
                    "data-lov-name": "SliderPrimitive.Range",
                    "data-component-path": "src/components/ui/slider.tsx",
                    "data-component-line": "19",
                    "data-component-file": "slider.tsx",
                    "data-component-name": "SliderPrimitive.Range",
                    "data-component-content": "%7B%22className%22%3A%22absolute%20h-full%20bg-primary%22%7D",
                    className: "absolute h-full bg-primary",
                }),
            }),
            x.jsx(vI, {
                "data-lov-id": "src/components/ui/slider.tsx:21:4",
                "data-lov-name": "SliderPrimitive.Thumb",
                "data-component-path": "src/components/ui/slider.tsx",
                "data-component-line": "21",
                "data-component-file": "slider.tsx",
                "data-component-name": "SliderPrimitive.Thumb",
                "data-component-content":
                    "%7B%22className%22%3A%22block%20h-5%20w-5%20rounded-full%20border-2%20border-primary%20bg-background%20ring-offset-background%20transition-colors%20focus-visible%3Aoutline-none%20focus-visible%3Aring-2%20focus-visible%3Aring-ring%20focus-visible%3Aring-offset-2%20disabled%3Apointer-events-none%20disabled%3Aopacity-50%22%7D",
                className:
                    "block h-5 w-5 rounded-full border-2 border-primary bg-background ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
            }),
        ],
    })
);
Fs.displayName = bx.displayName;
var ql = "rovingFocusGroup.onEntryFocus",
    gI = { bubbles: !1, cancelable: !0 },
    $a = "RovingFocusGroup",
    [vu, Ex, yI] = Oi($a),
    [xI, Tx] = fn($a, [yI]),
    [wI, SI] = xI($a),
    Px = f.forwardRef((e, t) =>
        x.jsx(vu.Provider, {
            scope: e.__scopeRovingFocusGroup,
            children: x.jsx(vu.Slot, { scope: e.__scopeRovingFocusGroup, children: x.jsx(CI, { ...e, ref: t }) }),
        })
    );
Px.displayName = $a;
var CI = f.forwardRef((e, t) => {
        const {
                __scopeRovingFocusGroup: n,
                orientation: r,
                loop: o = !1,
                dir: a,
                currentTabStopId: s,
                defaultCurrentTabStopId: i,
                onCurrentTabStopIdChange: l,
                onEntryFocus: c,
                preventScrollOnEntryFocus: u = !1,
                ...d
            } = e,
            g = f.useRef(null),
            p = le(t, g),
            C = el(a),
            [h, w] = wo({ prop: s, defaultProp: i ?? null, onChange: l, caller: $a }),
            [v, m] = f.useState(!1),
            y = yt(c),
            S = Ex(n),
            b = f.useRef(!1),
            [I, E] = f.useState(0);
        return (
            f.useEffect(() => {
                const N = g.current;
                if (N) return N.addEventListener(ql, y), () => N.removeEventListener(ql, y);
            }, [y]),
            x.jsx(wI, {
                scope: n,
                orientation: r,
                dir: C,
                loop: o,
                currentTabStopId: h,
                onItemFocus: f.useCallback((N) => w(N), [w]),
                onItemShiftTab: f.useCallback(() => m(!0), []),
                onFocusableItemAdd: f.useCallback(() => E((N) => N + 1), []),
                onFocusableItemRemove: f.useCallback(() => E((N) => N - 1), []),
                children: x.jsx(X.div, {
                    tabIndex: v || I === 0 ? -1 : 0,
                    "data-orientation": r,
                    ...d,
                    ref: p,
                    style: { outline: "none", ...e.style },
                    onMouseDown: H(e.onMouseDown, () => {
                        b.current = !0;
                    }),
                    onFocus: H(e.onFocus, (N) => {
                        const k = !b.current;
                        if (N.target === N.currentTarget && k && !v) {
                            const P = new CustomEvent(ql, gI);
                            if ((N.currentTarget.dispatchEvent(P), !P.defaultPrevented)) {
                                const _ = S().filter((L) => L.focusable),
                                    D = _.find((L) => L.active),
                                    F = _.find((L) => L.id === h),
                                    V = [D, F, ..._].filter(Boolean).map((L) => L.ref.current);
                                Nx(V, u);
                            }
                        }
                        b.current = !1;
                    }),
                    onBlur: H(e.onBlur, () => m(!1)),
                }),
            })
        );
    }),
    Ix = "RovingFocusGroupItem",
    kx = f.forwardRef((e, t) => {
        const { __scopeRovingFocusGroup: n, focusable: r = !0, active: o = !1, tabStopId: a, children: s, ...i } = e,
            l = Ba(),
            c = a || l,
            u = SI(Ix, n),
            d = u.currentTabStopId === c,
            g = Ex(n),
            { onFocusableItemAdd: p, onFocusableItemRemove: C, currentTabStopId: h } = u;
        return (
            f.useEffect(() => {
                if (r) return p(), () => C();
            }, [r, p, C]),
            x.jsx(vu.ItemSlot, {
                scope: n,
                id: c,
                focusable: r,
                active: o,
                children: x.jsx(X.span, {
                    tabIndex: d ? 0 : -1,
                    "data-orientation": u.orientation,
                    ...i,
                    ref: t,
                    onMouseDown: H(e.onMouseDown, (w) => {
                        r ? u.onItemFocus(c) : w.preventDefault();
                    }),
                    onFocus: H(e.onFocus, () => u.onItemFocus(c)),
                    onKeyDown: H(e.onKeyDown, (w) => {
                        if (w.key === "Tab" && w.shiftKey) {
                            u.onItemShiftTab();
                            return;
                        }
                        if (w.target !== w.currentTarget) return;
                        const v = TI(w, u.orientation, u.dir);
                        if (v !== void 0) {
                            if (w.metaKey || w.ctrlKey || w.altKey || w.shiftKey) return;
                            w.preventDefault();
                            let y = g()
                                .filter((S) => S.focusable)
                                .map((S) => S.ref.current);
                            if (v === "last") y.reverse();
                            else if (v === "prev" || v === "next") {
                                v === "prev" && y.reverse();
                                const S = y.indexOf(w.currentTarget);
                                y = u.loop ? PI(y, S + 1) : y.slice(S + 1);
                            }
                            setTimeout(() => Nx(y));
                        }
                    }),
                    children: typeof s == "function" ? s({ isCurrentTabStop: d, hasTabStop: h != null }) : s,
                }),
            })
        );
    });
kx.displayName = Ix;
var bI = {
    ArrowLeft: "prev",
    ArrowUp: "prev",
    ArrowRight: "next",
    ArrowDown: "next",
    PageUp: "first",
    Home: "first",
    PageDown: "last",
    End: "last",
};
function EI(e, t) {
    return t !== "rtl" ? e : e === "ArrowLeft" ? "ArrowRight" : e === "ArrowRight" ? "ArrowLeft" : e;
}
function TI(e, t, n) {
    const r = EI(e.key, n);
    if (
        !(t === "vertical" && ["ArrowLeft", "ArrowRight"].includes(r)) &&
        !(t === "horizontal" && ["ArrowUp", "ArrowDown"].includes(r))
    )
        return bI[r];
}
function Nx(e, t = !1) {
    const n = document.activeElement;
    for (const r of e) if (r === n || (r.focus({ preventScroll: t }), document.activeElement !== n)) return;
}
function PI(e, t) {
    return e.map((n, r) => e[(t + r) % e.length]);
}
var II = Px,
    kI = kx,
    sl = "Tabs",
    [NI] = fn(sl, [Tx]),
    Rx = Tx(),
    [RI, Od] = NI(sl),
    Ax = f.forwardRef((e, t) => {
        const {
                __scopeTabs: n,
                value: r,
                onValueChange: o,
                defaultValue: a,
                orientation: s = "horizontal",
                dir: i,
                activationMode: l = "automatic",
                ...c
            } = e,
            u = el(i),
            [d, g] = wo({ prop: r, onChange: o, defaultProp: a ?? "", caller: sl });
        return x.jsx(RI, {
            scope: n,
            baseId: Ba(),
            value: d,
            onValueChange: g,
            orientation: s,
            dir: u,
            activationMode: l,
            children: x.jsx(X.div, { dir: u, "data-orientation": s, ...c, ref: t }),
        });
    });
Ax.displayName = sl;
var Dx = "TabsList",
    _x = f.forwardRef((e, t) => {
        const { __scopeTabs: n, loop: r = !0, ...o } = e,
            a = Od(Dx, n),
            s = Rx(n);
        return x.jsx(II, {
            asChild: !0,
            ...s,
            orientation: a.orientation,
            dir: a.dir,
            loop: r,
            children: x.jsx(X.div, { role: "tablist", "aria-orientation": a.orientation, ...o, ref: t }),
        });
    });
_x.displayName = Dx;
var Mx = "TabsTrigger",
    Ox = f.forwardRef((e, t) => {
        const { __scopeTabs: n, value: r, disabled: o = !1, ...a } = e,
            s = Od(Mx, n),
            i = Rx(n),
            l = Fx(s.baseId, r),
            c = Bx(s.baseId, r),
            u = r === s.value;
        return x.jsx(kI, {
            asChild: !0,
            ...i,
            focusable: !o,
            active: u,
            children: x.jsx(X.button, {
                type: "button",
                role: "tab",
                "aria-selected": u,
                "aria-controls": c,
                "data-state": u ? "active" : "inactive",
                "data-disabled": o ? "" : void 0,
                disabled: o,
                id: l,
                ...a,
                ref: t,
                onMouseDown: H(e.onMouseDown, (d) => {
                    !o && d.button === 0 && d.ctrlKey === !1 ? s.onValueChange(r) : d.preventDefault();
                }),
                onKeyDown: H(e.onKeyDown, (d) => {
                    [" ", "Enter"].includes(d.key) && s.onValueChange(r);
                }),
                onFocus: H(e.onFocus, () => {
                    const d = s.activationMode !== "manual";
                    !u && !o && d && s.onValueChange(r);
                }),
            }),
        });
    });
Ox.displayName = Mx;
var jx = "TabsContent",
    Lx = f.forwardRef((e, t) => {
        const { __scopeTabs: n, value: r, forceMount: o, children: a, ...s } = e,
            i = Od(jx, n),
            l = Fx(i.baseId, r),
            c = Bx(i.baseId, r),
            u = r === i.value,
            d = f.useRef(u);
        return (
            f.useEffect(() => {
                const g = requestAnimationFrame(() => (d.current = !1));
                return () => cancelAnimationFrame(g);
            }, []),
            x.jsx(Li, {
                present: o || u,
                children: ({ present: g }) =>
                    x.jsx(X.div, {
                        "data-state": u ? "active" : "inactive",
                        "data-orientation": i.orientation,
                        role: "tabpanel",
                        "aria-labelledby": l,
                        hidden: !g,
                        id: c,
                        tabIndex: 0,
                        ...s,
                        ref: t,
                        style: { ...e.style, animationDuration: d.current ? "0s" : void 0 },
                        children: g && a,
                    }),
            })
        );
    });
Lx.displayName = jx;
function Fx(e, t) {
    return `${e}-trigger-${t}`;
}
function Bx(e, t) {
    return `${e}-content-${t}`;
}
var AI = Ax,
    zx = _x,
    $x = Ox,
    Ux = Lx;
const DI = AI,
    Vx = f.forwardRef(({ className: e, ...t }, n) =>
        x.jsx(zx, {
            "data-lov-id": "src/components/ui/tabs.tsx:12:2",
            "data-lov-name": "TabsPrimitive.List",
            "data-component-path": "src/components/ui/tabs.tsx",
            "data-component-line": "12",
            "data-component-file": "tabs.tsx",
            "data-component-name": "TabsPrimitive.List",
            "data-component-content": "%7B%7D",
            ref: n,
            className: ae(
                "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
                e
            ),
            ...t,
        })
    );
Vx.displayName = zx.displayName;
const gu = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx($x, {
        "data-lov-id": "src/components/ui/tabs.tsx:27:2",
        "data-lov-name": "TabsPrimitive.Trigger",
        "data-component-path": "src/components/ui/tabs.tsx",
        "data-component-line": "27",
        "data-component-file": "tabs.tsx",
        "data-component-name": "TabsPrimitive.Trigger",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae(
            "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
            e
        ),
        ...t,
    })
);
gu.displayName = $x.displayName;
const yu = f.forwardRef(({ className: e, ...t }, n) =>
    x.jsx(Ux, {
        "data-lov-id": "src/components/ui/tabs.tsx:42:2",
        "data-lov-name": "TabsPrimitive.Content",
        "data-component-path": "src/components/ui/tabs.tsx",
        "data-component-line": "42",
        "data-component-file": "tabs.tsx",
        "data-component-name": "TabsPrimitive.Content",
        "data-component-content": "%7B%7D",
        ref: n,
        className: ae(
            "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
            e
        ),
        ...t,
    })
);
yu.displayName = Ux.displayName;
const _I = zi(
    "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
    {
        variants: {
            variant: {
                default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
                secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
                outline: "text-foreground",
            },
        },
        defaultVariants: { variant: "default" },
    }
);
function MI({ className: e, variant: t, ...n }) {
    return x.jsx("div", {
        "data-lov-id": "src/components/ui/badge.tsx:32:4",
        "data-lov-name": "div",
        "data-component-path": "src/components/ui/badge.tsx",
        "data-component-line": "32",
        "data-component-file": "badge.tsx",
        "data-component-name": "div",
        "data-component-content": "%7B%7D",
        className: ae(_I({ variant: t }), e),
        ...n,
    });
}
var jd = "Progress",
    Ld = 100,
    [OI] = fn(jd),
    [jI, LI] = OI(jd),
    Wx = f.forwardRef((e, t) => {
        const { __scopeProgress: n, value: r = null, max: o, getValueLabel: a = FI, ...s } = e;
        (o || o === 0) && !em(o) && console.error(BI(`${o}`, "Progress"));
        const i = em(o) ? o : Ld;
        r !== null && !tm(r, i) && console.error(zI(`${r}`, "Progress"));
        const l = tm(r, i) ? r : null,
            c = yi(l) ? a(l, i) : void 0;
        return x.jsx(jI, {
            scope: n,
            value: l,
            max: i,
            children: x.jsx(X.div, {
                "aria-valuemax": i,
                "aria-valuemin": 0,
                "aria-valuenow": yi(l) ? l : void 0,
                "aria-valuetext": c,
                role: "progressbar",
                "data-state": Qx(l, i),
                "data-value": l ?? void 0,
                "data-max": i,
                ...s,
                ref: t,
            }),
        });
    });
Wx.displayName = jd;
var Hx = "ProgressIndicator",
    Kx = f.forwardRef((e, t) => {
        const { __scopeProgress: n, ...r } = e,
            o = LI(Hx, n);
        return x.jsx(X.div, {
            "data-state": Qx(o.value, o.max),
            "data-value": o.value ?? void 0,
            "data-max": o.max,
            ...r,
            ref: t,
        });
    });
Kx.displayName = Hx;
function FI(e, t) {
    return `${Math.round((e / t) * 100)}%`;
}
function Qx(e, t) {
    return e == null ? "indeterminate" : e === t ? "complete" : "loading";
}
function yi(e) {
    return typeof e == "number";
}
function em(e) {
    return yi(e) && !isNaN(e) && e > 0;
}
function tm(e, t) {
    return yi(e) && !isNaN(e) && e <= t && e >= 0;
}
function BI(e, t) {
    return `Invalid prop \`max\` of value \`${e}\` supplied to \`${t}\`. Only numbers greater than 0 are valid max values. Defaulting to \`${Ld}\`.`;
}
function zI(e, t) {
    return `Invalid prop \`value\` of value \`${e}\` supplied to \`${t}\`. The \`value\` prop must be:
  - a positive number
  - less than the value passed to \`max\` (or ${Ld} if no \`max\` prop is set)
  - \`null\` or \`undefined\` if the progress is indeterminate.

Defaulting to \`null\`.`;
}
var Gx = Wx,
    $I = Kx;
const Yx = f.forwardRef(({ className: e, value: t, ...n }, r) =>
    x.jsx(Gx, {
        "data-lov-id": "src/components/ui/progress.tsx:10:2",
        "data-lov-name": "ProgressPrimitive.Root",
        "data-component-path": "src/components/ui/progress.tsx",
        "data-component-line": "10",
        "data-component-file": "progress.tsx",
        "data-component-name": "ProgressPrimitive.Root",
        "data-component-content": "%7B%7D",
        ref: r,
        className: ae("relative h-4 w-full overflow-hidden rounded-full bg-secondary", e),
        ...n,
        children: x.jsx($I, {
            "data-lov-id": "src/components/ui/progress.tsx:18:4",
            "data-lov-name": "ProgressPrimitive.Indicator",
            "data-component-path": "src/components/ui/progress.tsx",
            "data-component-line": "18",
            "data-component-file": "progress.tsx",
            "data-component-name": "ProgressPrimitive.Indicator",
            "data-component-content":
                "%7B%22className%22%3A%22h-full%20w-full%20flex-1%20bg-primary%20transition-all%22%7D",
            className: "h-full w-full flex-1 bg-primary transition-all",
            style: { transform: `translateX(-${100 - (t || 0)}%)` },
        }),
    })
);
Yx.displayName = Gx.displayName;
const UI = () => {
        const [e, t] = f.useState(!0);
        f.useEffect(() => {
            const o = localStorage.getItem("theme"),
                a = o === "dark" || !o;
            t(a), n(a);
        }, []);
        const n = (o) => {
                o
                    ? (document.documentElement.classList.add("dark"), localStorage.setItem("theme", "dark"))
                    : (document.documentElement.classList.remove("dark"), localStorage.setItem("theme", "light"));
            },
            r = () => {
                const o = !e;
                t(o), n(o);
            };
        return x.jsxs(hi, {
            "data-lov-id": "src/components/ThemeToggle.tsx:34:4",
            "data-lov-name": "Button",
            "data-component-path": "src/components/ThemeToggle.tsx",
            "data-component-line": "34",
            "data-component-file": "ThemeToggle.tsx",
            "data-component-name": "Button",
            "data-component-content":
                "%7B%22className%22%3A%22fixed%20top-4%20left-4%20z-50%20w-10%20h-10%20rounded-full%20border-2%20bg-background%2F80%20backdrop-blur-sm%20hover%3Abg-accent%20transition-all%20duration-300%20hover%3Ascale-110%20active%3Ascale-95%22%7D",
            variant: "outline",
            size: "icon",
            onClick: r,
            className:
                "fixed top-4 left-4 z-50 w-10 h-10 rounded-full border-2 bg-background/80 backdrop-blur-sm hover:bg-accent transition-all duration-300 hover:scale-110 active:scale-95",
            children: [
                x.jsxs("div", {
                    "data-lov-id": "src/components/ThemeToggle.tsx:40:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/components/ThemeToggle.tsx",
                    "data-component-line": "40",
                    "data-component-file": "ThemeToggle.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22relative%20w-5%20h-5%22%7D",
                    className: "relative w-5 h-5",
                    children: [
                        x.jsx(F1, {
                            "data-lov-id": "src/components/ThemeToggle.tsx:41:8",
                            "data-lov-name": "Sun",
                            "data-component-path": "src/components/ThemeToggle.tsx",
                            "data-component-line": "41",
                            "data-component-file": "ThemeToggle.tsx",
                            "data-component-name": "Sun",
                            "data-component-content": "%7B%7D",
                            className: `absolute inset-0 w-5 h-5 transition-all duration-500 ${e ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"}`,
                        }),
                        x.jsx(O1, {
                            "data-lov-id": "src/components/ThemeToggle.tsx:48:8",
                            "data-lov-name": "Moon",
                            "data-component-path": "src/components/ThemeToggle.tsx",
                            "data-component-line": "48",
                            "data-component-file": "ThemeToggle.tsx",
                            "data-component-name": "Moon",
                            "data-component-content": "%7B%7D",
                            className: `absolute inset-0 w-5 h-5 transition-all duration-500 ${e ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`,
                        }),
                    ],
                }),
                x.jsx("span", {
                    "data-lov-id": "src/components/ThemeToggle.tsx:56:6",
                    "data-lov-name": "span",
                    "data-component-path": "src/components/ThemeToggle.tsx",
                    "data-component-line": "56",
                    "data-component-file": "ThemeToggle.tsx",
                    "data-component-name": "span",
                    "data-component-content":
                        "%7B%22text%22%3A%22Toggle%20theme%22%2C%22className%22%3A%22sr-only%22%7D",
                    className: "sr-only",
                    children: "Toggle theme",
                }),
            ],
        });
    },
    VI = () => {
        const [e, t] = f.useState(null),
            [n, r] = f.useState({
                type: "text",
                text: "WATERMARK",
                image: null,
                pattern: "corner",
                opacity: 50,
                size: 24,
                rotation: 0,
                color: "#000000",
                position: { x: 50, y: 50 },
            }),
            [o, a] = f.useState(!1),
            [s, i] = f.useState(null),
            [l, c] = f.useState(0),
            u = f.useRef(null),
            d = f.useRef(null),
            g = f.useRef(null),
            { toast: p } = Pv(),
            C = (k) => {
                var _;
                const P = (_ = k.target.files) == null ? void 0 : _[0];
                P &&
                    (["image/jpeg", "image/png", "image/gif", "image/webp", "application/pdf"].includes(P.type)
                        ? (t(P),
                          i(null),
                          p({
                              title: "File uploaded successfully",
                              description: `${P.name} is ready for watermarking`,
                          }))
                        : p({
                              title: "Invalid file type",
                              description: "Please upload an image or PDF file",
                              variant: "destructive",
                          }));
            },
            h = (k) => {
                var _;
                const P = (_ = k.target.files) == null ? void 0 : _[0];
                P &&
                    (P.type.startsWith("image/")
                        ? (r((D) => ({ ...D, image: P })),
                          p({ title: "Watermark image uploaded", description: `${P.name} will be used as watermark` }))
                        : p({
                              title: "Invalid file type",
                              description: "Please upload an image file for watermark",
                              variant: "destructive",
                          }));
            },
            w = async () => {
                if (!e) {
                    p({
                        title: "No source file",
                        description: "Please upload a file to watermark",
                        variant: "destructive",
                    });
                    return;
                }
                if (n.type === "text" && !n.text.trim()) {
                    p({
                        title: "No watermark text",
                        description: "Please enter text for the watermark",
                        variant: "destructive",
                    });
                    return;
                }
                if (n.type === "image" && !n.image) {
                    p({
                        title: "No watermark image",
                        description: "Please upload an image for the watermark",
                        variant: "destructive",
                    });
                    return;
                }
                a(!0), c(0);
                try {
                    const k = setInterval(() => {
                        c((P) => (P >= 90 ? (clearInterval(k), 90) : P + 10));
                    }, 200);
                    e.type.startsWith("image/") ? await v() : e.type === "application/pdf" && (await m()),
                        clearInterval(k),
                        c(100),
                        p({ title: "Watermark applied successfully", description: "Your file is ready for download" });
                } catch {
                    p({
                        title: "Processing failed",
                        description: "An error occurred while applying the watermark",
                        variant: "destructive",
                    });
                } finally {
                    a(!1);
                }
            },
            v = async () =>
			    new Promise((k) => {
			        const P = g.current,
			            _ = P.getContext("2d"),
			            D = new Image(); // CHANGED: Uses native browser Image
			        (D.onload = async () => {
			            (P.width = D.width),
			                (P.height = D.height),
			                _.drawImage(D, 0, 0),
			                await y(_, P.width, P.height),
			                P.toBlob((F) => {
			                    if (F) {
			                        const M = URL.createObjectURL(F);
			                        i(M);
			                    }
			                    k();
			                }, "image/png");
			        }),
			            (D.src = URL.createObjectURL(e));
			    }),
			m = async () => {
			    await new Promise((k) => setTimeout(k, 2e3)),
			        p({
			            title: "PDF Processing",
			            description:
			                "PDF watermarking requires additional setup. Image processing is fully functional.",
			            variant: "destructive",
			        });
			},
			y = async (k, P, _) => {
			    k.save(),
			        (k.globalAlpha = n.opacity / 100),
			        n.type === "text" ? await S(k, P, _) : await b(k, P, _),
			        k.restore();
			},
			S = async (k, P, _) => {
			    const D = Math.max(12, (P * n.size) / 1e3);
			    (k.font = `${D}px Arial`),
			        (k.fillStyle = n.color),
			        (k.textAlign = "center"),
			        (k.textBaseline = "middle"),
			        I(P, _, k.measureText(n.text).width, D).forEach((M) => {
			            k.save(),
			                k.translate(M.x, M.y),
			                k.rotate((n.rotation * Math.PI) / 180),
			                k.fillText(n.text, 0, 0),
			                k.restore();
			        });
			},
			b = async (k, P, _) => {
			    if (n.image)
			        return new Promise((D) => {
			            const F = new Image(); // CHANGED: Uses native browser Image
			            (F.onload = () => {
			                const M = n.size / 100,
			                    V = F.width * M,
			                    L = F.height * M;
			                I(P, _, V, L).forEach((T) => {
			                    k.save(),
			                        k.translate(T.x, T.y),
			                        k.rotate((n.rotation * Math.PI) / 180),
			                        k.drawImage(F, -V / 2, -L / 2, V, L),
			                        k.restore();
			                }),
			                    D();
			            }),
			                (F.src = URL.createObjectURL(n.image));
			        });
			},
            I = (k, P, _, D) => {
                const F = [];
                switch (n.pattern) {
                    case "corner":
                        F.push({ x: 50 + _ / 2, y: 50 + D / 2 });
                        break;
                    case "center":
                        F.push({ x: k / 2, y: P / 2 });
                        break;
                    case "tiled":
                        const V = Math.floor(k / (_ + 50)),
                            L = Math.floor(P / (D + 50));
                        for (let T = 0; T < L; T++)
                            for (let R = 0; R < V; R++)
                                F.push({ x: 50 + R * (_ + 50) + _ / 2, y: 50 + T * (D + 50) + D / 2 });
                        break;
                    case "diagonal":
                        const U = Math.max(_, D) + 50;
                        for (let T = -P; T < k + P; T += U) for (let R = 0; R < P; R += U) F.push({ x: T + R, y: R });
                        break;
                    case "border":
                        for (let T = _ / 2; T < k; T += _ + 50) F.push({ x: T, y: D / 2 });
                        for (let T = _ / 2; T < k; T += _ + 50) F.push({ x: T, y: P - D / 2 });
                        for (let T = D / 2 + 50; T < P - D / 2; T += D + 50) F.push({ x: _ / 2, y: T });
                        for (let T = D / 2 + 50; T < P - D / 2; T += D + 50) F.push({ x: k - _ / 2, y: T });
                        break;
                }
                return F;
            },
            E = () => {
                if (s) {
                    const k = document.createElement("a");
                    (k.href = s),
                        (k.download = `watermarked_${(e == null ? void 0 : e.name) || "file"}.png`),
                        document.body.appendChild(k),
                        k.click(),
                        document.body.removeChild(k);
                }
            },
            N = (k) => {
                switch (k) {
                    case "corner":
                        return x.jsx(D1, {
                            "data-lov-id": "src/pages/Index.tsx:327:15",
                            "data-lov-name": "CornerDownLeft",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "327",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "CornerDownLeft",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                    case "center":
                        return x.jsx(Bl, {
                            "data-lov-id": "src/pages/Index.tsx:329:15",
                            "data-lov-name": "Square",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "329",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Square",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                    case "tiled":
                        return x.jsx(M1, {
                            "data-lov-id": "src/pages/Index.tsx:331:15",
                            "data-lov-name": "Grid",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "331",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Grid",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                    case "diagonal":
                        return x.jsx(lp, {
                            "data-lov-id": "src/pages/Index.tsx:333:15",
                            "data-lov-name": "Layers",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "333",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Layers",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                    case "border":
                        return x.jsx(Bl, {
                            "data-lov-id": "src/pages/Index.tsx:335:15",
                            "data-lov-name": "Square",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "335",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Square",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                    default:
                        return x.jsx(Bl, {
                            "data-lov-id": "src/pages/Index.tsx:337:15",
                            "data-lov-name": "Square",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "337",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "Square",
                            "data-component-content": "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                            className: "w-4 h-4",
                        });
                }
            };
        return x.jsxs("div", {
            "data-lov-id": "src/pages/Index.tsx:340:9",
            "data-lov-name": "div",
            "data-component-path": "src/pages/Index.tsx",
            "data-component-line": "340",
            "data-component-file": "Index.tsx",
            "data-component-name": "div",
            "data-component-content":
                "%7B%22className%22%3A%22min-h-screen%20bg-gradient-to-br%20from-background%20to-muted%2F20%20p-4%22%7D",
            className: "min-h-screen bg-gradient-to-br from-background to-muted/20 p-4",
            children: [
                x.jsx(UI, {
                    "data-lov-id": "src/pages/Index.tsx:342:6",
                    "data-lov-name": "ThemeToggle",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "342",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "ThemeToggle",
                    "data-component-content": "%7B%7D",
                }),
                x.jsxs("div", {
                    "data-lov-id": "src/pages/Index.tsx:344:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/Index.tsx",
                    "data-component-line": "344",
                    "data-component-file": "Index.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22max-w-7xl%20mx-auto%22%7D",
                    className: "max-w-7xl mx-auto",
                    children: [
                        x.jsxs("div", {
                            "data-lov-id": "src/pages/Index.tsx:346:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "346",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22text-center%20mb-8%20fade-in-up%22%7D",
                            className: "text-center mb-8 fade-in-up",
                            children: [
                                x.jsx("h1", {
                                    "data-lov-id": "src/pages/Index.tsx:347:10",
                                    "data-lov-name": "h1",
                                    "data-component-path": "src/pages/Index.tsx",
                                    "data-component-line": "347",
                                    "data-component-file": "Index.tsx",
                                    "data-component-name": "h1",
                                    "data-component-content":
                                        "%7B%22text%22%3A%22Watermark%20Studio%22%2C%22className%22%3A%22text-4xl%20font-bold%20bg-gradient-to-r%20from-primary%20to-primary-glow%20bg-clip-text%20mb-4%20text-%5Brgb(218%2C127%2C248)%5D%22%7D",
                                    className:
                                        "text-4xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text mb-4 text-[rgb(218,127,248)]",
                                    children: "Watermark Studio",
                                }),
                                x.jsx("p", {
                                    "data-lov-id": "src/pages/Index.tsx:350:10",
                                    "data-lov-name": "p",
                                    "data-component-path": "src/pages/Index.tsx",
                                    "data-component-line": "350",
                                    "data-component-file": "Index.tsx",
                                    "data-component-name": "p",
                                    "data-component-content":
                                        "%7B%22text%22%3A%22Professional%20watermarking%20tool%20for%20a%20wide%20variety%20of%20document%20types.%22%2C%22className%22%3A%22text-xl%20text-muted-foreground%20max-w-2xl%20mx-auto%22%7D",
                                    className: "text-xl text-muted-foreground max-w-2xl mx-auto",
                                    children: "Professional watermarking tool for a wide variety of document types.",
                                }),
                            ],
                        }),
                        x.jsxs("div", {
                            "data-lov-id": "src/pages/Index.tsx:353:8",
                            "data-lov-name": "div",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "353",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "div",
                            "data-component-content": "%7B%22className%22%3A%22grid%20lg%3Agrid-cols-3%20gap-6%22%7D",
                            className: "grid lg:grid-cols-3 gap-6",
                            children: [
                                x.jsxs(Ds, {
                                    "data-lov-id": "src/pages/Index.tsx:355:10",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/Index.tsx",
                                    "data-component-line": "355",
                                    "data-component-file": "Index.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-1%22%7D",
                                    className: "lg:col-span-1",
                                    children: [
                                        x.jsx(_s, {
                                            "data-lov-id": "src/pages/Index.tsx:356:12",
                                            "data-lov-name": "CardHeader",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "356",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardHeader",
                                            "data-component-content": "%7B%7D",
                                            children: x.jsxs(Ms, {
                                                "data-lov-id": "src/pages/Index.tsx:357:14",
                                                "data-lov-name": "CardTitle",
                                                "data-component-path": "src/pages/Index.tsx",
                                                "data-component-line": "357",
                                                "data-component-file": "Index.tsx",
                                                "data-component-name": "CardTitle",
                                                "data-component-content":
                                                    "%7B%22text%22%3A%22Upload%20Files%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                className: "flex items-center gap-2",
                                                children: [
                                                    x.jsx(cp, {
                                                        "data-lov-id": "src/pages/Index.tsx:358:16",
                                                        "data-lov-name": "Upload",
                                                        "data-component-path": "src/pages/Index.tsx",
                                                        "data-component-line": "358",
                                                        "data-component-file": "Index.tsx",
                                                        "data-component-name": "Upload",
                                                        "data-component-content":
                                                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                                        className: "w-5 h-5",
                                                    }),
                                                    "Upload Files",
                                                ],
                                            }),
                                        }),
                                        x.jsxs(Os, {
                                            "data-lov-id": "src/pages/Index.tsx:362:12",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "362",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                            className: "space-y-4",
                                            children: [
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:364:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "364",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsx(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:365:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "365",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Source%20File%22%7D",
                                                            htmlFor: "source-file",
                                                            children: "Source File",
                                                        }),
                                                        x.jsxs("div", {
                                                            "data-lov-id": "src/pages/Index.tsx:366:16",
                                                            "data-lov-name": "div",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "366",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "div",
                                                            "data-component-content":
                                                                "%7B%22className%22%3A%22border-2%20border-dashed%20border-upload-border%20bg-upload-zone%20rounded-lg%20p-6%20text-center%20cursor-pointer%20hover%3Aborder-primary%2F50%20transition-colors%22%7D",
                                                            className:
                                                                "border-2 border-dashed border-upload-border bg-upload-zone rounded-lg p-6 text-center cursor-pointer hover:border-primary/50 transition-colors",
                                                            onClick: () => {
                                                                var k;
                                                                return (k = u.current) == null ? void 0 : k.click();
                                                            },
                                                            children: [
                                                                x.jsx(cp, {
                                                                    "data-lov-id": "src/pages/Index.tsx:367:18",
                                                                    "data-lov-name": "Upload",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "367",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "Upload",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22w-8%20h-8%20mx-auto%20mb-2%20text-muted-foreground%22%7D",
                                                                    className:
                                                                        "w-8 h-8 mx-auto mb-2 text-muted-foreground",
                                                                }),
                                                                x.jsx("p", {
                                                                    "data-lov-id": "src/pages/Index.tsx:368:18",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "368",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                                                    className: "text-sm text-muted-foreground",
                                                                    children: e
                                                                        ? e.name
                                                                        : "Click to upload image or PDF",
                                                                }),
                                                                x.jsx("p", {
                                                                    "data-lov-id": "src/pages/Index.tsx:371:18",
                                                                    "data-lov-name": "p",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "371",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "p",
                                                                    "data-component-content":
                                                                        "%7B%22text%22%3A%22Supports%3A%20JPG%2C%20PNG%2C%20GIF%2C%20WebP%2C%20PDF%22%2C%22className%22%3A%22text-xs%20text-muted-foreground%20mt-1%22%7D",
                                                                    className: "text-xs text-muted-foreground mt-1",
                                                                    children: "Supports: JPG, PNG, GIF, WebP, PDF",
                                                                }),
                                                            ],
                                                        }),
                                                        x.jsx("input", {
                                                            "data-lov-id": "src/pages/Index.tsx:375:16",
                                                            "data-lov-name": "input",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "375",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "input",
                                                            "data-component-content":
                                                                "%7B%22className%22%3A%22hidden%22%7D",
                                                            ref: u,
                                                            type: "file",
                                                            accept: "image/*,.pdf",
                                                            onChange: C,
                                                            className: "hidden",
                                                        }),
                                                    ],
                                                }),
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:379:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "379",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsx(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:380:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "380",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Watermark%20Type%22%7D",
                                                            children: "Watermark Type",
                                                        }),
                                                        x.jsxs(DI, {
                                                            "data-lov-id": "src/pages/Index.tsx:381:16",
                                                            "data-lov-name": "Tabs",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "381",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Tabs",
                                                            "data-component-content": "%7B%7D",
                                                            value: n.type,
                                                            onValueChange: (k) => r((P) => ({ ...P, type: k })),
                                                            children: [
                                                                x.jsxs(Vx, {
                                                                    "data-lov-id": "src/pages/Index.tsx:385:18",
                                                                    "data-lov-name": "TabsList",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "385",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "TabsList",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22grid%20w-full%20grid-cols-2%22%7D",
                                                                    className: "grid w-full grid-cols-2",
                                                                    children: [
                                                                        x.jsxs(gu, {
                                                                            "data-lov-id": "src/pages/Index.tsx:386:20",
                                                                            "data-lov-name": "TabsTrigger",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "386",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "TabsTrigger",
                                                                            "data-component-content":
                                                                                "%7B%22text%22%3A%22Text%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                            value: "text",
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                x.jsx(B1, {
                                                                                    "data-lov-id":
                                                                                        "src/pages/Index.tsx:387:22",
                                                                                    "data-lov-name": "Type",
                                                                                    "data-component-path":
                                                                                        "src/pages/Index.tsx",
                                                                                    "data-component-line": "387",
                                                                                    "data-component-file": "Index.tsx",
                                                                                    "data-component-name": "Type",
                                                                                    "data-component-content":
                                                                                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                                                    className: "w-4 h-4",
                                                                                }),
                                                                                "Text",
                                                                            ],
                                                                        }),
                                                                        x.jsxs(gu, {
                                                                            "data-lov-id": "src/pages/Index.tsx:390:20",
                                                                            "data-lov-name": "TabsTrigger",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "390",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "TabsTrigger",
                                                                            "data-component-content":
                                                                                "%7B%22text%22%3A%22Image%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                            value: "image",
                                                                            className: "flex items-center gap-2",
                                                                            children: [
                                                                                x.jsx(cs, {
                                                                                    "data-lov-id":
                                                                                        "src/pages/Index.tsx:391:22",
                                                                                    "data-lov-name": "Image",
                                                                                    "data-component-path":
                                                                                        "src/pages/Index.tsx",
                                                                                    "data-component-line": "391",
                                                                                    "data-component-file": "Index.tsx",
                                                                                    "data-component-name": "Image",
                                                                                    "data-component-content":
                                                                                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                                                    className: "w-4 h-4",
                                                                                }),
                                                                                "Image",
                                                                            ],
                                                                        }),
                                                                    ],
                                                                }),
                                                                x.jsx(yu, {
                                                                    "data-lov-id": "src/pages/Index.tsx:396:18",
                                                                    "data-lov-name": "TabsContent",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "396",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "TabsContent",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22mt-4%22%7D",
                                                                    value: "text",
                                                                    className: "mt-4",
                                                                    children: x.jsxs("div", {
                                                                        "data-lov-id": "src/pages/Index.tsx:397:20",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "397",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content":
                                                                            "%7B%22className%22%3A%22space-y-3%22%7D",
                                                                        className: "space-y-3",
                                                                        children: [
                                                                            x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:398:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "398",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%7D",
                                                                                children: [
                                                                                    x.jsx(Lt, {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:399:24",
                                                                                        "data-lov-name": "Label",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "399",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name": "Label",
                                                                                        "data-component-content":
                                                                                            "%7B%22text%22%3A%22Watermark%20Text%22%7D",
                                                                                        htmlFor: "watermark-text",
                                                                                        children: "Watermark Text",
                                                                                    }),
                                                                                    x.jsx(dy, {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:400:24",
                                                                                        "data-lov-name": "Textarea",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "400",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name":
                                                                                            "Textarea",
                                                                                        "data-component-content":
                                                                                            "%7B%22placeholder%22%3A%22Enter%20your%20watermark%20text%22%7D",
                                                                                        id: "watermark-text",
                                                                                        placeholder:
                                                                                            "Enter your watermark text",
                                                                                        value: n.text,
                                                                                        onChange: (k) =>
                                                                                            r((P) => ({
                                                                                                ...P,
                                                                                                text: k.target.value,
                                                                                            })),
                                                                                        rows: 3,
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:405:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "405",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content": "%7B%7D",
                                                                                children: [
                                                                                    x.jsx(Lt, {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:406:24",
                                                                                        "data-lov-name": "Label",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "406",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name": "Label",
                                                                                        "data-component-content":
                                                                                            "%7B%22text%22%3A%22Text%20Color%22%7D",
                                                                                        htmlFor: "text-color",
                                                                                        children: "Text Color",
                                                                                    }),
                                                                                    x.jsx(ly, {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:407:24",
                                                                                        "data-lov-name": "Input",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "407",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name": "Input",
                                                                                        "data-component-content":
                                                                                            "%7B%22className%22%3A%22h-10%22%7D",
                                                                                        id: "text-color",
                                                                                        type: "color",
                                                                                        value: n.color,
                                                                                        onChange: (k) =>
                                                                                            r((P) => ({
                                                                                                ...P,
                                                                                                color: k.target.value,
                                                                                            })),
                                                                                        className: "h-10",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                                x.jsx(yu, {
                                                                    "data-lov-id": "src/pages/Index.tsx:415:18",
                                                                    "data-lov-name": "TabsContent",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "415",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "TabsContent",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22mt-4%22%7D",
                                                                    value: "image",
                                                                    className: "mt-4",
                                                                    children: x.jsxs("div", {
                                                                        "data-lov-id": "src/pages/Index.tsx:416:20",
                                                                        "data-lov-name": "div",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "416",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "div",
                                                                        "data-component-content": "%7B%7D",
                                                                        children: [
                                                                            x.jsx(Lt, {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:417:22",
                                                                                "data-lov-name": "Label",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "417",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "Label",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Watermark%20Image%22%7D",
                                                                                htmlFor: "watermark-image",
                                                                                children: "Watermark Image",
                                                                            }),
                                                                            x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:418:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "418",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22className%22%3A%22border-2%20border-dashed%20border-upload-border%20bg-upload-zone%20rounded-lg%20p-4%20text-center%20cursor-pointer%20hover%3Aborder-primary%2F50%20transition-colors%22%7D",
                                                                                className:
                                                                                    "border-2 border-dashed border-upload-border bg-upload-zone rounded-lg p-4 text-center cursor-pointer hover:border-primary/50 transition-colors",
                                                                                onClick: () => {
                                                                                    var k;
                                                                                    return (k = d.current) == null
                                                                                        ? void 0
                                                                                        : k.click();
                                                                                },
                                                                                children: [
                                                                                    x.jsx(cs, {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:419:24",
                                                                                        "data-lov-name": "Image",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "419",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name": "Image",
                                                                                        "data-component-content":
                                                                                            "%7B%22className%22%3A%22w-6%20h-6%20mx-auto%20mb-2%20text-muted-foreground%22%7D",
                                                                                        className:
                                                                                            "w-6 h-6 mx-auto mb-2 text-muted-foreground",
                                                                                    }),
                                                                                    x.jsx("p", {
                                                                                        "data-lov-id":
                                                                                            "src/pages/Index.tsx:420:24",
                                                                                        "data-lov-name": "p",
                                                                                        "data-component-path":
                                                                                            "src/pages/Index.tsx",
                                                                                        "data-component-line": "420",
                                                                                        "data-component-file":
                                                                                            "Index.tsx",
                                                                                        "data-component-name": "p",
                                                                                        "data-component-content":
                                                                                            "%7B%22className%22%3A%22text-sm%20text-muted-foreground%22%7D",
                                                                                        className:
                                                                                            "text-sm text-muted-foreground",
                                                                                        children: n.image
                                                                                            ? n.image.name
                                                                                            : "Click to upload watermark image",
                                                                                    }),
                                                                                ],
                                                                            }),
                                                                            x.jsx("input", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:424:22",
                                                                                "data-lov-name": "input",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "424",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "input",
                                                                                "data-component-content":
                                                                                    "%7B%22className%22%3A%22hidden%22%7D",
                                                                                ref: d,
                                                                                type: "file",
                                                                                accept: "image/*",
                                                                                onChange: h,
                                                                                className: "hidden",
                                                                            }),
                                                                        ],
                                                                    }),
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                x.jsxs(Ds, {
                                    "data-lov-id": "src/pages/Index.tsx:433:10",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/Index.tsx",
                                    "data-component-line": "433",
                                    "data-component-file": "Index.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-1%22%7D",
                                    className: "lg:col-span-1",
                                    children: [
                                        x.jsx(_s, {
                                            "data-lov-id": "src/pages/Index.tsx:434:12",
                                            "data-lov-name": "CardHeader",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "434",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardHeader",
                                            "data-component-content": "%7B%7D",
                                            children: x.jsxs(Ms, {
                                                "data-lov-id": "src/pages/Index.tsx:435:14",
                                                "data-lov-name": "CardTitle",
                                                "data-component-path": "src/pages/Index.tsx",
                                                "data-component-line": "435",
                                                "data-component-file": "Index.tsx",
                                                "data-component-name": "CardTitle",
                                                "data-component-content":
                                                    "%7B%22text%22%3A%22Watermark%20Settings%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                className: "flex items-center gap-2",
                                                children: [
                                                    x.jsx(j1, {
                                                        "data-lov-id": "src/pages/Index.tsx:436:16",
                                                        "data-lov-name": "Move",
                                                        "data-component-path": "src/pages/Index.tsx",
                                                        "data-component-line": "436",
                                                        "data-component-file": "Index.tsx",
                                                        "data-component-name": "Move",
                                                        "data-component-content":
                                                            "%7B%22className%22%3A%22w-5%20h-5%22%7D",
                                                        className: "w-5 h-5",
                                                    }),
                                                    "Watermark Settings",
                                                ],
                                            }),
                                        }),
                                        x.jsxs(Os, {
                                            "data-lov-id": "src/pages/Index.tsx:440:12",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "440",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-6%22%7D",
                                            className: "space-y-6",
                                            children: [
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:442:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "442",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsx(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:443:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "443",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Watermark%20Pattern%22%7D",
                                                            children: "Watermark Pattern",
                                                        }),
                                                        x.jsxs(YP, {
                                                            "data-lov-id": "src/pages/Index.tsx:444:16",
                                                            "data-lov-name": "Select",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "444",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Select",
                                                            "data-component-content": "%7B%7D",
                                                            value: n.pattern,
                                                            onValueChange: (k) => r((P) => ({ ...P, pattern: k })),
                                                            children: [
                                                                x.jsx(ax, {
                                                                    "data-lov-id": "src/pages/Index.tsx:448:18",
                                                                    "data-lov-name": "SelectTrigger",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "448",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "SelectTrigger",
                                                                    "data-component-content": "%7B%7D",
                                                                    children: x.jsx(XP, {
                                                                        "data-lov-id": "src/pages/Index.tsx:449:20",
                                                                        "data-lov-name": "SelectValue",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "449",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "SelectValue",
                                                                        "data-component-content": "%7B%7D",
                                                                    }),
                                                                }),
                                                                x.jsxs(lx, {
                                                                    "data-lov-id": "src/pages/Index.tsx:451:18",
                                                                    "data-lov-name": "SelectContent",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "451",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "SelectContent",
                                                                    "data-component-content": "%7B%7D",
                                                                    children: [
                                                                        x.jsx(jr, {
                                                                            "data-lov-id": "src/pages/Index.tsx:452:20",
                                                                            "data-lov-name": "SelectItem",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "452",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "SelectItem",
                                                                            "data-component-content": "%7B%7D",
                                                                            value: "corner",
                                                                            children: x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:453:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "453",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Corner%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                                className: "flex items-center gap-2",
                                                                                children: [N("corner"), "Corner"],
                                                                            }),
                                                                        }),
                                                                        x.jsx(jr, {
                                                                            "data-lov-id": "src/pages/Index.tsx:458:20",
                                                                            "data-lov-name": "SelectItem",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "458",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "SelectItem",
                                                                            "data-component-content": "%7B%7D",
                                                                            value: "center",
                                                                            children: x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:459:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "459",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Center%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                                className: "flex items-center gap-2",
                                                                                children: [N("center"), "Center"],
                                                                            }),
                                                                        }),
                                                                        x.jsx(jr, {
                                                                            "data-lov-id": "src/pages/Index.tsx:464:20",
                                                                            "data-lov-name": "SelectItem",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "464",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "SelectItem",
                                                                            "data-component-content": "%7B%7D",
                                                                            value: "tiled",
                                                                            children: x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:465:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "465",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Tiled%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                                className: "flex items-center gap-2",
                                                                                children: [N("tiled"), "Tiled"],
                                                                            }),
                                                                        }),
                                                                        x.jsx(jr, {
                                                                            "data-lov-id": "src/pages/Index.tsx:470:20",
                                                                            "data-lov-name": "SelectItem",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "470",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "SelectItem",
                                                                            "data-component-content": "%7B%7D",
                                                                            value: "diagonal",
                                                                            children: x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:471:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "471",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Diagonal%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                                className: "flex items-center gap-2",
                                                                                children: [N("diagonal"), "Diagonal"],
                                                                            }),
                                                                        }),
                                                                        x.jsx(jr, {
                                                                            "data-lov-id": "src/pages/Index.tsx:476:20",
                                                                            "data-lov-name": "SelectItem",
                                                                            "data-component-path":
                                                                                "src/pages/Index.tsx",
                                                                            "data-component-line": "476",
                                                                            "data-component-file": "Index.tsx",
                                                                            "data-component-name": "SelectItem",
                                                                            "data-component-content": "%7B%7D",
                                                                            value: "border",
                                                                            children: x.jsxs("div", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:477:22",
                                                                                "data-lov-name": "div",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "477",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "div",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Border%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                                                className: "flex items-center gap-2",
                                                                                children: [N("border"), "Border"],
                                                                            }),
                                                                        }),
                                                                    ],
                                                                }),
                                                            ],
                                                        }),
                                                    ],
                                                }),
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:487:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "487",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsxs(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:488:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "488",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Opacity%3A%20%25%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                x.jsx(A1, {
                                                                    "data-lov-id": "src/pages/Index.tsx:489:18",
                                                                    "data-lov-name": "Circle",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "489",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "Circle",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                                    className: "w-4 h-4",
                                                                }),
                                                                "Opacity: ",
                                                                n.opacity,
                                                                "%",
                                                            ],
                                                        }),
                                                        x.jsx(Fs, {
                                                            "data-lov-id": "src/pages/Index.tsx:492:16",
                                                            "data-lov-name": "Slider",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "492",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Slider",
                                                            "data-component-content":
                                                                "%7B%22className%22%3A%22mt-2%22%7D",
                                                            value: [n.opacity],
                                                            onValueChange: ([k]) => r((P) => ({ ...P, opacity: k })),
                                                            max: 100,
                                                            min: 10,
                                                            step: 5,
                                                            className: "mt-2",
                                                        }),
                                                    ],
                                                }),
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:499:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "499",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsxs(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:500:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "500",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Size%3A%20px%22%7D",
                                                            children: ["Size: ", n.size, "px"],
                                                        }),
                                                        x.jsx(Fs, {
                                                            "data-lov-id": "src/pages/Index.tsx:501:16",
                                                            "data-lov-name": "Slider",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "501",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Slider",
                                                            "data-component-content":
                                                                "%7B%22className%22%3A%22mt-2%22%7D",
                                                            value: [n.size],
                                                            onValueChange: ([k]) => r((P) => ({ ...P, size: k })),
                                                            max: 100,
                                                            min: 12,
                                                            step: 2,
                                                            className: "mt-2",
                                                        }),
                                                    ],
                                                }),
                                                x.jsxs("div", {
                                                    "data-lov-id": "src/pages/Index.tsx:508:14",
                                                    "data-lov-name": "div",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "508",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "div",
                                                    "data-component-content": "%7B%7D",
                                                    children: [
                                                        x.jsxs(Lt, {
                                                            "data-lov-id": "src/pages/Index.tsx:509:16",
                                                            "data-lov-name": "Label",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "509",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Label",
                                                            "data-component-content":
                                                                "%7B%22text%22%3A%22Rotation%3A%20%C2%B0%22%2C%22className%22%3A%22flex%20items-center%20gap-2%22%7D",
                                                            className: "flex items-center gap-2",
                                                            children: [
                                                                x.jsx(L1, {
                                                                    "data-lov-id": "src/pages/Index.tsx:510:18",
                                                                    "data-lov-name": "RotateCw",
                                                                    "data-component-path": "src/pages/Index.tsx",
                                                                    "data-component-line": "510",
                                                                    "data-component-file": "Index.tsx",
                                                                    "data-component-name": "RotateCw",
                                                                    "data-component-content":
                                                                        "%7B%22className%22%3A%22w-4%20h-4%22%7D",
                                                                    className: "w-4 h-4",
                                                                }),
                                                                "Rotation: ",
                                                                n.rotation,
                                                                "°",
                                                            ],
                                                        }),
                                                        x.jsx(Fs, {
                                                            "data-lov-id": "src/pages/Index.tsx:513:16",
                                                            "data-lov-name": "Slider",
                                                            "data-component-path": "src/pages/Index.tsx",
                                                            "data-component-line": "513",
                                                            "data-component-file": "Index.tsx",
                                                            "data-component-name": "Slider",
                                                            "data-component-content":
                                                                "%7B%22className%22%3A%22mt-2%22%7D",
                                                            value: [n.rotation],
                                                            onValueChange: ([k]) => r((P) => ({ ...P, rotation: k })),
                                                            max: 360,
                                                            min: 0,
                                                            step: 15,
                                                            className: "mt-2",
                                                        }),
                                                    ],
                                                }),
                                            ],
                                        }),
                                    ],
                                }),
                                x.jsxs(Ds, {
                                    "data-lov-id": "src/pages/Index.tsx:522:10",
                                    "data-lov-name": "Card",
                                    "data-component-path": "src/pages/Index.tsx",
                                    "data-component-line": "522",
                                    "data-component-file": "Index.tsx",
                                    "data-component-name": "Card",
                                    "data-component-content": "%7B%22className%22%3A%22lg%3Acol-span-1%22%7D",
                                    className: "lg:col-span-1",
                                    children: [
                                        x.jsx(_s, {
                                            "data-lov-id": "src/pages/Index.tsx:523:12",
                                            "data-lov-name": "CardHeader",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "523",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardHeader",
                                            "data-component-content": "%7B%7D",
                                            children: x.jsx(Ms, {
                                                "data-lov-id": "src/pages/Index.tsx:524:14",
                                                "data-lov-name": "CardTitle",
                                                "data-component-path": "src/pages/Index.tsx",
                                                "data-component-line": "524",
                                                "data-component-file": "Index.tsx",
                                                "data-component-name": "CardTitle",
                                                "data-component-content":
                                                    "%7B%22text%22%3A%22Preview%20%26%20Process%22%7D",
                                                children: "Preview & Process",
                                            }),
                                        }),
                                        x.jsxs(Os, {
                                            "data-lov-id": "src/pages/Index.tsx:526:12",
                                            "data-lov-name": "CardContent",
                                            "data-component-path": "src/pages/Index.tsx",
                                            "data-component-line": "526",
                                            "data-component-file": "Index.tsx",
                                            "data-component-name": "CardContent",
                                            "data-component-content": "%7B%22className%22%3A%22space-y-4%22%7D",
                                            className: "space-y-4",
                                            children: [
                                                x.jsx(hi, {
                                                    "data-lov-id": "src/pages/Index.tsx:528:14",
                                                    "data-lov-name": "Button",
                                                    "data-component-path": "src/pages/Index.tsx",
                                                    "data-component-line": "528",
                                                    "data-component-file": "Index.tsx",
                                                    "data-component-name": "Button",
                                                    "data-component-content":
                                                        "%7B%22className%22%3A%22w-full%20bg-gradient-to-r%20from-watermark-bg%20to-watermark-hover%20hover%3Ashadow-lg%20transition-all%22%7D",
                                                    onClick: w,
                                                    disabled: !e || o,
                                                    className:
                                                        "w-full bg-gradient-to-r from-watermark-bg to-watermark-hover hover:shadow-lg transition-all",
                                                    size: "lg",
                                                    children: o
                                                        ? x.jsxs(x.Fragment, {
                                                              children: [
                                                                  x.jsx("div", {
                                                                      "data-lov-id": "src/pages/Index.tsx:530:20",
                                                                      "data-lov-name": "div",
                                                                      "data-component-path": "src/pages/Index.tsx",
                                                                      "data-component-line": "530",
                                                                      "data-component-file": "Index.tsx",
                                                                      "data-component-name": "div",
                                                                      "data-component-content":
                                                                          "%7B%22className%22%3A%22processing%20w-4%20h-4%20border-2%20border-white%20border-t-transparent%20rounded-full%20mr-2%22%7D",
                                                                      className:
                                                                          "processing w-4 h-4 border-2 border-white border-t-transparent rounded-full mr-2",
                                                                  }),
                                                                  "Processing...",
                                                              ],
                                                          })
                                                        : x.jsxs(x.Fragment, {
                                                              children: [
                                                                  x.jsx(lp, {
                                                                      "data-lov-id": "src/pages/Index.tsx:533:20",
                                                                      "data-lov-name": "Layers",
                                                                      "data-component-path": "src/pages/Index.tsx",
                                                                      "data-component-line": "533",
                                                                      "data-component-file": "Index.tsx",
                                                                      "data-component-name": "Layers",
                                                                      "data-component-content":
                                                                          "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                                                      className: "w-4 h-4 mr-2",
                                                                  }),
                                                                  "Apply Watermark",
                                                              ],
                                                          }),
                                                }),
                                                o &&
                                                    x.jsxs("div", {
                                                        "data-lov-id": "src/pages/Index.tsx:539:31",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Index.tsx",
                                                        "data-component-line": "539",
                                                        "data-component-file": "Index.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content":
                                                            "%7B%22className%22%3A%22space-y-2%22%7D",
                                                        className: "space-y-2",
                                                        children: [
                                                            x.jsx(Yx, {
                                                                "data-lov-id": "src/pages/Index.tsx:540:18",
                                                                "data-lov-name": "Progress",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "540",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "Progress",
                                                                "data-component-content":
                                                                    "%7B%22className%22%3A%22w-full%22%7D",
                                                                value: l,
                                                                className: "w-full",
                                                            }),
                                                            x.jsxs("p", {
                                                                "data-lov-id": "src/pages/Index.tsx:541:18",
                                                                "data-lov-name": "p",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "541",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "p",
                                                                "data-component-content":
                                                                    "%7B%22text%22%3A%22Processing...%20%25%22%2C%22className%22%3A%22text-sm%20text-muted-foreground%20text-center%22%7D",
                                                                className: "text-sm text-muted-foreground text-center",
                                                                children: ["Processing... ", l, "%"],
                                                            }),
                                                        ],
                                                    }),
                                                s &&
                                                    x.jsxs("div", {
                                                        "data-lov-id": "src/pages/Index.tsx:547:32",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Index.tsx",
                                                        "data-component-line": "547",
                                                        "data-component-file": "Index.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content":
                                                            "%7B%22className%22%3A%22space-y-3%22%7D",
                                                        className: "space-y-3",
                                                        children: [
                                                            x.jsx(MI, {
                                                                "data-lov-id": "src/pages/Index.tsx:548:18",
                                                                "data-lov-name": "Badge",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "548",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "Badge",
                                                                "data-component-content":
                                                                    "%7B%22text%22%3A%22%E2%9C%93%20Watermark%20Applied%20Successfully%22%2C%22className%22%3A%22w-full%20justify-center%20py-2%20bg-success%2F10%20text-success%20border-success%2F20%22%7D",
                                                                variant: "outline",
                                                                className:
                                                                    "w-full justify-center py-2 bg-success/10 text-success border-success/20",
                                                                children: "✓ Watermark Applied Successfully",
                                                            }),
                                                            x.jsxs(hi, {
                                                                "data-lov-id": "src/pages/Index.tsx:551:18",
                                                                "data-lov-name": "Button",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "551",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "Button",
                                                                "data-component-content":
                                                                    "%7B%22text%22%3A%22Download%20Watermarked%20File%22%2C%22className%22%3A%22w-full%22%7D",
                                                                onClick: E,
                                                                variant: "outline",
                                                                className: "w-full",
                                                                size: "lg",
                                                                children: [
                                                                    x.jsx(_1, {
                                                                        "data-lov-id": "src/pages/Index.tsx:552:20",
                                                                        "data-lov-name": "Download",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "552",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "Download",
                                                                        "data-component-content":
                                                                            "%7B%22className%22%3A%22w-4%20h-4%20mr-2%22%7D",
                                                                        className: "w-4 h-4 mr-2",
                                                                    }),
                                                                    "Download Watermarked File",
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                                e &&
                                                    x.jsxs("div", {
                                                        "data-lov-id": "src/pages/Index.tsx:558:29",
                                                        "data-lov-name": "div",
                                                        "data-component-path": "src/pages/Index.tsx",
                                                        "data-component-line": "558",
                                                        "data-component-file": "Index.tsx",
                                                        "data-component-name": "div",
                                                        "data-component-content":
                                                            "%7B%22className%22%3A%22bg-muted%2F50%20rounded-lg%20p-3%20space-y-2%22%7D",
                                                        className: "bg-muted/50 rounded-lg p-3 space-y-2",
                                                        children: [
                                                            x.jsx("h4", {
                                                                "data-lov-id": "src/pages/Index.tsx:559:18",
                                                                "data-lov-name": "h4",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "559",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "h4",
                                                                "data-component-content":
                                                                    "%7B%22text%22%3A%22File%20Information%22%2C%22className%22%3A%22font-medium%20text-sm%22%7D",
                                                                className: "font-medium text-sm",
                                                                children: "File Information",
                                                            }),
                                                            x.jsxs("div", {
                                                                "data-lov-id": "src/pages/Index.tsx:560:18",
                                                                "data-lov-name": "div",
                                                                "data-component-path": "src/pages/Index.tsx",
                                                                "data-component-line": "560",
                                                                "data-component-file": "Index.tsx",
                                                                "data-component-name": "div",
                                                                "data-component-content":
                                                                    "%7B%22className%22%3A%22text-xs%20text-muted-foreground%20space-y-1%22%7D",
                                                                className: "text-xs text-muted-foreground space-y-1",
                                                                children: [
                                                                    x.jsxs("p", {
                                                                        "data-lov-id": "src/pages/Index.tsx:561:20",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "561",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%7D",
                                                                        children: [
                                                                            x.jsx("strong", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:561:23",
                                                                                "data-lov-name": "strong",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "561",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "strong",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Name%3A%22%7D",
                                                                                children: "Name:",
                                                                            }),
                                                                            " ",
                                                                            e.name,
                                                                        ],
                                                                    }),
                                                                    x.jsxs("p", {
                                                                        "data-lov-id": "src/pages/Index.tsx:562:20",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "562",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content":
                                                                            "%7B%22text%22%3A%22MB%22%7D",
                                                                        children: [
                                                                            x.jsx("strong", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:562:23",
                                                                                "data-lov-name": "strong",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "562",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "strong",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Size%3A%22%7D",
                                                                                children: "Size:",
                                                                            }),
                                                                            " ",
                                                                            (e.size / 1024 / 1024).toFixed(2),
                                                                            " MB",
                                                                        ],
                                                                    }),
                                                                    x.jsxs("p", {
                                                                        "data-lov-id": "src/pages/Index.tsx:563:20",
                                                                        "data-lov-name": "p",
                                                                        "data-component-path": "src/pages/Index.tsx",
                                                                        "data-component-line": "563",
                                                                        "data-component-file": "Index.tsx",
                                                                        "data-component-name": "p",
                                                                        "data-component-content": "%7B%7D",
                                                                        children: [
                                                                            x.jsx("strong", {
                                                                                "data-lov-id":
                                                                                    "src/pages/Index.tsx:563:23",
                                                                                "data-lov-name": "strong",
                                                                                "data-component-path":
                                                                                    "src/pages/Index.tsx",
                                                                                "data-component-line": "563",
                                                                                "data-component-file": "Index.tsx",
                                                                                "data-component-name": "strong",
                                                                                "data-component-content":
                                                                                    "%7B%22text%22%3A%22Type%3A%22%7D",
                                                                                children: "Type:",
                                                                            }),
                                                                            " ",
                                                                            e.type,
                                                                        ],
                                                                    }),
                                                                ],
                                                            }),
                                                        ],
                                                    }),
                                            ],
                                        }),
                                    ],
                                }),
                            ],
                        }),
                        x.jsx("canvas", {
                            "data-lov-id": "src/pages/Index.tsx:571:8",
                            "data-lov-name": "canvas",
                            "data-component-path": "src/pages/Index.tsx",
                            "data-component-line": "571",
                            "data-component-file": "Index.tsx",
                            "data-component-name": "canvas",
                            "data-component-content": "%7B%22className%22%3A%22hidden%22%7D",
                            ref: g,
                            className: "hidden",
                        }),
                    ],
                }),
            ],
        });
    },
    WI = () => {
        const e = Ji();
        return (
            f.useEffect(() => {
                console.error("404 Error: User attempted to access non-existent route:", e.pathname);
            }, [e.pathname]),
            x.jsx("div", {
                "data-lov-id": "src/pages/NotFound.tsx:15:4",
                "data-lov-name": "div",
                "data-component-path": "src/pages/NotFound.tsx",
                "data-component-line": "15",
                "data-component-file": "NotFound.tsx",
                "data-component-name": "div",
                "data-component-content":
                    "%7B%22className%22%3A%22min-h-screen%20flex%20items-center%20justify-center%20bg-gray-100%22%7D",
                className: "min-h-screen flex items-center justify-center bg-gray-100",
                children: x.jsxs("div", {
                    "data-lov-id": "src/pages/NotFound.tsx:16:6",
                    "data-lov-name": "div",
                    "data-component-path": "src/pages/NotFound.tsx",
                    "data-component-line": "16",
                    "data-component-file": "NotFound.tsx",
                    "data-component-name": "div",
                    "data-component-content": "%7B%22className%22%3A%22text-center%22%7D",
                    className: "text-center",
                    children: [
                        x.jsx("h1", {
                            "data-lov-id": "src/pages/NotFound.tsx:17:8",
                            "data-lov-name": "h1",
                            "data-component-path": "src/pages/NotFound.tsx",
                            "data-component-line": "17",
                            "data-component-file": "NotFound.tsx",
                            "data-component-name": "h1",
                            "data-component-content":
                                "%7B%22text%22%3A%22404%22%2C%22className%22%3A%22text-4xl%20font-bold%20mb-4%22%7D",
                            className: "text-4xl font-bold mb-4",
                            children: "404",
                        }),
                        x.jsx("p", {
                            "data-lov-id": "src/pages/NotFound.tsx:18:8",
                            "data-lov-name": "p",
                            "data-component-path": "src/pages/NotFound.tsx",
                            "data-component-line": "18",
                            "data-component-file": "NotFound.tsx",
                            "data-component-name": "p",
                            "data-component-content":
                                "%7B%22text%22%3A%22Oops!%20Page%20not%20found%22%2C%22className%22%3A%22text-xl%20text-gray-600%20mb-4%22%7D",
                            className: "text-xl text-gray-600 mb-4",
                            children: "Oops! Page not found",
                        }),
                        x.jsx("a", {
                            "data-lov-id": "src/pages/NotFound.tsx:19:8",
                            "data-lov-name": "a",
                            "data-component-path": "src/pages/NotFound.tsx",
                            "data-component-line": "19",
                            "data-component-file": "NotFound.tsx",
                            "data-component-name": "a",
                            "data-component-content":
                                "%7B%22text%22%3A%22Return%20to%20Home%22%2C%22className%22%3A%22text-blue-500%20hover%3Atext-blue-700%20underline%22%7D",
                            href: "/",
                            className: "text-blue-500 hover:text-blue-700 underline",
                            children: "Return to Home",
                        }),
                    ],
                }),
            })
        );
    },
    HI = new fE(),
    KI = () =>
        x.jsx(mE, {
            "data-lov-id": "src/App.tsx:12:2",
            "data-lov-name": "QueryClientProvider",
            "data-component-path": "src/App.tsx",
            "data-component-line": "12",
            "data-component-file": "App.tsx",
            "data-component-name": "QueryClientProvider",
            "data-component-content": "%7B%7D",
            client: HI,
            children: x.jsxs(Bb, {
                "data-lov-id": "src/App.tsx:13:4",
                "data-lov-name": "TooltipProvider",
                "data-component-path": "src/App.tsx",
                "data-component-line": "13",
                "data-component-file": "App.tsx",
                "data-component-name": "TooltipProvider",
                "data-component-content": "%7B%7D",
                children: [
                    x.jsx(CS, {
                        "data-lov-id": "src/App.tsx:14:6",
                        "data-lov-name": "Toaster",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "14",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Toaster",
                        "data-component-content": "%7B%7D",
                    }),
                    x.jsx(eC, {
                        "data-lov-id": "src/App.tsx:15:6",
                        "data-lov-name": "Sonner",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "15",
                        "data-component-file": "App.tsx",
                        "data-component-name": "Sonner",
                        "data-component-content": "%7B%7D",
                    }),
                    x.jsx(wT, {
                        "data-lov-id": "src/App.tsx:16:6",
                        "data-lov-name": "HashRouter",
                        "data-component-path": "src/App.tsx",
                        "data-component-line": "16",
                        "data-component-file": "App.tsx",
                        "data-component-name": "HashRouter",
                        "data-component-content": "%7B%7D",
                        children: x.jsxs(vT, {
                            "data-lov-id": "src/App.tsx:17:8",
                            "data-lov-name": "Routes",
                            "data-component-path": "src/App.tsx",
                            "data-component-line": "17",
                            "data-component-file": "App.tsx",
                            "data-component-name": "Routes",
                            "data-component-content": "%7B%7D",
                            children: [
                                x.jsx(mi, {
                                    "data-lov-id": "src/App.tsx:18:10",
                                    "data-lov-name": "Route",
                                    "data-component-path": "src/App.tsx",
                                    "data-component-line": "18",
                                    "data-component-file": "App.tsx",
                                    "data-component-name": "Route",
                                    "data-component-content": "%7B%7D",
                                    path: "/",
                                    element: x.jsx(VI, {
                                        "data-lov-id": "src/App.tsx:18:35",
                                        "data-lov-name": "Index",
                                        "data-component-path": "src/App.tsx",
                                        "data-component-line": "18",
                                        "data-component-file": "App.tsx",
                                        "data-component-name": "Index",
                                        "data-component-content": "%7B%7D",
                                    }),
                                }),
                                x.jsx(mi, {
                                    "data-lov-id": "src/App.tsx:20:10",
                                    "data-lov-name": "Route",
                                    "data-component-path": "src/App.tsx",
                                    "data-component-line": "20",
                                    "data-component-file": "App.tsx",
                                    "data-component-name": "Route",
                                    "data-component-content": "%7B%7D",
                                    path: "*",
                                    element: x.jsx(WI, {
                                        "data-lov-id": "src/App.tsx:20:35",
                                        "data-lov-name": "NotFound",
                                        "data-component-path": "src/App.tsx",
                                        "data-component-line": "20",
                                        "data-component-file": "App.tsx",
                                        "data-component-name": "NotFound",
                                        "data-component-content": "%7B%7D",
                                    }),
                                }),
                            ],
                        }),
                    }),
                ],
            }),
        });
Tv(document.getElementById("root")).render(
    x.jsx(KI, {
        "data-lov-id": "src/main.tsx:5:52",
        "data-lov-name": "App",
        "data-component-path": "src/main.tsx",
        "data-component-line": "5",
        "data-component-file": "main.tsx",
        "data-component-name": "App",
        "data-component-content": "%7B%7D",
    })
);
//# sourceMappingURL=index-Bcxltfuu.js.map
