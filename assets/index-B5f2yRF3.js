function cf(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n]
        if (typeof r != 'string' && !Array.isArray(r)) {
            for (const i in r)
                if (i !== 'default' && !(i in e)) {
                    const l = Object.getOwnPropertyDescriptor(r, i)
                    l &&
                        Object.defineProperty(
                            e,
                            i,
                            l.get ? l : { enumerable: !0, get: () => r[i] }
                        )
                }
        }
    }
    return Object.freeze(
        Object.defineProperty(e, Symbol.toStringTag, { value: 'Module' })
    )
}
;(function () {
    const t = document.createElement('link').relList
    if (t && t.supports && t.supports('modulepreload')) return
    for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i)
    new MutationObserver((i) => {
        for (const l of i)
            if (l.type === 'childList')
                for (const o of l.addedNodes)
                    o.tagName === 'LINK' && o.rel === 'modulepreload' && r(o)
    }).observe(document, { childList: !0, subtree: !0 })
    function n(i) {
        const l = {}
        return (
            i.integrity && (l.integrity = i.integrity),
            i.referrerPolicy && (l.referrerPolicy = i.referrerPolicy),
            i.crossOrigin === 'use-credentials'
                ? (l.credentials = 'include')
                : i.crossOrigin === 'anonymous'
                ? (l.credentials = 'omit')
                : (l.credentials = 'same-origin'),
            l
        )
    }
    function r(i) {
        if (i.ep) return
        i.ep = !0
        const l = n(i)
        fetch(i.href, l)
    }
})()
function df(e) {
    return e &&
        e.__esModule &&
        Object.prototype.hasOwnProperty.call(e, 'default')
        ? e.default
        : e
}
var ff = { exports: {} },
    Eo = {},
    pf = { exports: {} },
    re = {}
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Hi = Symbol.for('react.element'),
    Qh = Symbol.for('react.portal'),
    Kh = Symbol.for('react.fragment'),
    Yh = Symbol.for('react.strict_mode'),
    Xh = Symbol.for('react.profiler'),
    qh = Symbol.for('react.provider'),
    Jh = Symbol.for('react.context'),
    Zh = Symbol.for('react.forward_ref'),
    eg = Symbol.for('react.suspense'),
    tg = Symbol.for('react.memo'),
    ng = Symbol.for('react.lazy'),
    pc = Symbol.iterator
function rg(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (pc && e[pc]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
var mf = {
        isMounted: function () {
            return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
    },
    hf = Object.assign,
    gf = {}
function $r(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = gf),
        (this.updater = n || mf)
}
$r.prototype.isReactComponent = {}
$r.prototype.setState = function (e, t) {
    if (typeof e != 'object' && typeof e != 'function' && e != null)
        throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
        )
    this.updater.enqueueSetState(this, e, t, 'setState')
}
$r.prototype.forceUpdate = function (e) {
    this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
}
function vf() {}
vf.prototype = $r.prototype
function Ha(e, t, n) {
    ;(this.props = e),
        (this.context = t),
        (this.refs = gf),
        (this.updater = n || mf)
}
var Va = (Ha.prototype = new vf())
Va.constructor = Ha
hf(Va, $r.prototype)
Va.isPureReactComponent = !0
var mc = Array.isArray,
    yf = Object.prototype.hasOwnProperty,
    Wa = { current: null },
    wf = { key: !0, ref: !0, __self: !0, __source: !0 }
function Sf(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null
    if (t != null)
        for (r in (t.ref !== void 0 && (o = t.ref),
        t.key !== void 0 && (l = '' + t.key),
        t))
            yf.call(t, r) && !wf.hasOwnProperty(r) && (i[r] = t[r])
    var s = arguments.length - 2
    if (s === 1) i.children = n
    else if (1 < s) {
        for (var a = Array(s), u = 0; u < s; u++) a[u] = arguments[u + 2]
        i.children = a
    }
    if (e && e.defaultProps)
        for (r in ((s = e.defaultProps), s)) i[r] === void 0 && (i[r] = s[r])
    return {
        $$typeof: Hi,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: Wa.current,
    }
}
function ig(e, t) {
    return {
        $$typeof: Hi,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner,
    }
}
function Qa(e) {
    return typeof e == 'object' && e !== null && e.$$typeof === Hi
}
function lg(e) {
    var t = { '=': '=0', ':': '=2' }
    return (
        '$' +
        e.replace(/[=:]/g, function (n) {
            return t[n]
        })
    )
}
var hc = /\/+/g
function Zo(e, t) {
    return typeof e == 'object' && e !== null && e.key != null
        ? lg('' + e.key)
        : t.toString(36)
}
function _l(e, t, n, r, i) {
    var l = typeof e
    ;(l === 'undefined' || l === 'boolean') && (e = null)
    var o = !1
    if (e === null) o = !0
    else
        switch (l) {
            case 'string':
            case 'number':
                o = !0
                break
            case 'object':
                switch (e.$$typeof) {
                    case Hi:
                    case Qh:
                        o = !0
                }
        }
    if (o)
        return (
            (o = e),
            (i = i(o)),
            (e = r === '' ? '.' + Zo(o, 0) : r),
            mc(i)
                ? ((n = ''),
                  e != null && (n = e.replace(hc, '$&/') + '/'),
                  _l(i, t, n, '', function (u) {
                      return u
                  }))
                : i != null &&
                  (Qa(i) &&
                      (i = ig(
                          i,
                          n +
                              (!i.key || (o && o.key === i.key)
                                  ? ''
                                  : ('' + i.key).replace(hc, '$&/') + '/') +
                              e
                      )),
                  t.push(i)),
            1
        )
    if (((o = 0), (r = r === '' ? '.' : r + ':'), mc(e)))
        for (var s = 0; s < e.length; s++) {
            l = e[s]
            var a = r + Zo(l, s)
            o += _l(l, t, n, a, i)
        }
    else if (((a = rg(e)), typeof a == 'function'))
        for (e = a.call(e), s = 0; !(l = e.next()).done; )
            (l = l.value), (a = r + Zo(l, s++)), (o += _l(l, t, n, a, i))
    else if (l === 'object')
        throw (
            ((t = String(e)),
            Error(
                'Objects are not valid as a React child (found: ' +
                    (t === '[object Object]'
                        ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                        : t) +
                    '). If you meant to render a collection of children, use an array instead.'
            ))
        )
    return o
}
function ol(e, t, n) {
    if (e == null) return e
    var r = [],
        i = 0
    return (
        _l(e, r, '', '', function (l) {
            return t.call(n, l, i++)
        }),
        r
    )
}
function og(e) {
    if (e._status === -1) {
        var t = e._result
        ;(t = t()),
            t.then(
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 1), (e._result = n))
                },
                function (n) {
                    ;(e._status === 0 || e._status === -1) &&
                        ((e._status = 2), (e._result = n))
                }
            ),
            e._status === -1 && ((e._status = 0), (e._result = t))
    }
    if (e._status === 1) return e._result.default
    throw e._result
}
var Ke = { current: null },
    Ml = { transition: null },
    sg = {
        ReactCurrentDispatcher: Ke,
        ReactCurrentBatchConfig: Ml,
        ReactCurrentOwner: Wa,
    }
function xf() {
    throw Error('act(...) is not supported in production builds of React.')
}
re.Children = {
    map: ol,
    forEach: function (e, t, n) {
        ol(
            e,
            function () {
                t.apply(this, arguments)
            },
            n
        )
    },
    count: function (e) {
        var t = 0
        return (
            ol(e, function () {
                t++
            }),
            t
        )
    },
    toArray: function (e) {
        return (
            ol(e, function (t) {
                return t
            }) || []
        )
    },
    only: function (e) {
        if (!Qa(e))
            throw Error(
                'React.Children.only expected to receive a single React element child.'
            )
        return e
    },
}
re.Component = $r
re.Fragment = Kh
re.Profiler = Xh
re.PureComponent = Ha
re.StrictMode = Yh
re.Suspense = eg
re.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = sg
re.act = xf
re.cloneElement = function (e, t, n) {
    if (e == null)
        throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
                e +
                '.'
        )
    var r = hf({}, e.props),
        i = e.key,
        l = e.ref,
        o = e._owner
    if (t != null) {
        if (
            (t.ref !== void 0 && ((l = t.ref), (o = Wa.current)),
            t.key !== void 0 && (i = '' + t.key),
            e.type && e.type.defaultProps)
        )
            var s = e.type.defaultProps
        for (a in t)
            yf.call(t, a) &&
                !wf.hasOwnProperty(a) &&
                (r[a] = t[a] === void 0 && s !== void 0 ? s[a] : t[a])
    }
    var a = arguments.length - 2
    if (a === 1) r.children = n
    else if (1 < a) {
        s = Array(a)
        for (var u = 0; u < a; u++) s[u] = arguments[u + 2]
        r.children = s
    }
    return { $$typeof: Hi, type: e.type, key: i, ref: l, props: r, _owner: o }
}
re.createContext = function (e) {
    return (
        (e = {
            $$typeof: Jh,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
        }),
        (e.Provider = { $$typeof: qh, _context: e }),
        (e.Consumer = e)
    )
}
re.createElement = Sf
re.createFactory = function (e) {
    var t = Sf.bind(null, e)
    return (t.type = e), t
}
re.createRef = function () {
    return { current: null }
}
re.forwardRef = function (e) {
    return { $$typeof: Zh, render: e }
}
re.isValidElement = Qa
re.lazy = function (e) {
    return { $$typeof: ng, _payload: { _status: -1, _result: e }, _init: og }
}
re.memo = function (e, t) {
    return { $$typeof: tg, type: e, compare: t === void 0 ? null : t }
}
re.startTransition = function (e) {
    var t = Ml.transition
    Ml.transition = {}
    try {
        e()
    } finally {
        Ml.transition = t
    }
}
re.unstable_act = xf
re.useCallback = function (e, t) {
    return Ke.current.useCallback(e, t)
}
re.useContext = function (e) {
    return Ke.current.useContext(e)
}
re.useDebugValue = function () {}
re.useDeferredValue = function (e) {
    return Ke.current.useDeferredValue(e)
}
re.useEffect = function (e, t) {
    return Ke.current.useEffect(e, t)
}
re.useId = function () {
    return Ke.current.useId()
}
re.useImperativeHandle = function (e, t, n) {
    return Ke.current.useImperativeHandle(e, t, n)
}
re.useInsertionEffect = function (e, t) {
    return Ke.current.useInsertionEffect(e, t)
}
re.useLayoutEffect = function (e, t) {
    return Ke.current.useLayoutEffect(e, t)
}
re.useMemo = function (e, t) {
    return Ke.current.useMemo(e, t)
}
re.useReducer = function (e, t, n) {
    return Ke.current.useReducer(e, t, n)
}
re.useRef = function (e) {
    return Ke.current.useRef(e)
}
re.useState = function (e) {
    return Ke.current.useState(e)
}
re.useSyncExternalStore = function (e, t, n) {
    return Ke.current.useSyncExternalStore(e, t, n)
}
re.useTransition = function () {
    return Ke.current.useTransition()
}
re.version = '18.3.1'
pf.exports = re
var N = pf.exports
const xe = df(N),
    As = cf({ __proto__: null, default: xe }, [N])
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ag = N,
    ug = Symbol.for('react.element'),
    cg = Symbol.for('react.fragment'),
    dg = Object.prototype.hasOwnProperty,
    fg =
        ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    pg = { key: !0, ref: !0, __self: !0, __source: !0 }
function Ef(e, t, n) {
    var r,
        i = {},
        l = null,
        o = null
    n !== void 0 && (l = '' + n),
        t.key !== void 0 && (l = '' + t.key),
        t.ref !== void 0 && (o = t.ref)
    for (r in t) dg.call(t, r) && !pg.hasOwnProperty(r) && (i[r] = t[r])
    if (e && e.defaultProps)
        for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r])
    return {
        $$typeof: ug,
        type: e,
        key: l,
        ref: o,
        props: i,
        _owner: fg.current,
    }
}
Eo.Fragment = cg
Eo.jsx = Ef
Eo.jsxs = Ef
ff.exports = Eo
var x = ff.exports,
    Fs = {},
    Cf = { exports: {} },
    pt = {},
    Tf = { exports: {} },
    Pf = {}
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ ;(function (e) {
    function t(P, z) {
        var $ = P.length
        P.push(z)
        e: for (; 0 < $; ) {
            var q = ($ - 1) >>> 1,
                te = P[q]
            if (0 < i(te, z)) (P[q] = z), (P[$] = te), ($ = q)
            else break e
        }
    }
    function n(P) {
        return P.length === 0 ? null : P[0]
    }
    function r(P) {
        if (P.length === 0) return null
        var z = P[0],
            $ = P.pop()
        if ($ !== z) {
            P[0] = $
            e: for (var q = 0, te = P.length, Ue = te >>> 1; q < Ue; ) {
                var Le = 2 * (q + 1) - 1,
                    Ae = P[Le],
                    Ie = Le + 1,
                    ir = P[Ie]
                if (0 > i(Ae, $))
                    Ie < te && 0 > i(ir, Ae)
                        ? ((P[q] = ir), (P[Ie] = $), (q = Ie))
                        : ((P[q] = Ae), (P[Le] = $), (q = Le))
                else if (Ie < te && 0 > i(ir, $))
                    (P[q] = ir), (P[Ie] = $), (q = Ie)
                else break e
            }
        }
        return z
    }
    function i(P, z) {
        var $ = P.sortIndex - z.sortIndex
        return $ !== 0 ? $ : P.id - z.id
    }
    if (
        typeof performance == 'object' &&
        typeof performance.now == 'function'
    ) {
        var l = performance
        e.unstable_now = function () {
            return l.now()
        }
    } else {
        var o = Date,
            s = o.now()
        e.unstable_now = function () {
            return o.now() - s
        }
    }
    var a = [],
        u = [],
        c = 1,
        d = null,
        m = 3,
        v = !1,
        g = !1,
        y = !1,
        C = typeof setTimeout == 'function' ? setTimeout : null,
        f = typeof clearTimeout == 'function' ? clearTimeout : null,
        p = typeof setImmediate < 'u' ? setImmediate : null
    typeof navigator < 'u' &&
        navigator.scheduling !== void 0 &&
        navigator.scheduling.isInputPending !== void 0 &&
        navigator.scheduling.isInputPending.bind(navigator.scheduling)
    function h(P) {
        for (var z = n(u); z !== null; ) {
            if (z.callback === null) r(u)
            else if (z.startTime <= P)
                r(u), (z.sortIndex = z.expirationTime), t(a, z)
            else break
            z = n(u)
        }
    }
    function w(P) {
        if (((y = !1), h(P), !g))
            if (n(a) !== null) (g = !0), Y(T)
            else {
                var z = n(u)
                z !== null && I(w, z.startTime - P)
            }
    }
    function T(P, z) {
        ;(g = !1), y && ((y = !1), f(M), (M = -1)), (v = !0)
        var $ = m
        try {
            for (
                h(z), d = n(a);
                d !== null && (!(d.expirationTime > z) || (P && !A()));

            ) {
                var q = d.callback
                if (typeof q == 'function') {
                    ;(d.callback = null), (m = d.priorityLevel)
                    var te = q(d.expirationTime <= z)
                    ;(z = e.unstable_now()),
                        typeof te == 'function'
                            ? (d.callback = te)
                            : d === n(a) && r(a),
                        h(z)
                } else r(a)
                d = n(a)
            }
            if (d !== null) var Ue = !0
            else {
                var Le = n(u)
                Le !== null && I(w, Le.startTime - z), (Ue = !1)
            }
            return Ue
        } finally {
            ;(d = null), (m = $), (v = !1)
        }
    }
    var S = !1,
        R = null,
        M = -1,
        O = 5,
        k = -1
    function A() {
        return !(e.unstable_now() - k < O)
    }
    function b() {
        if (R !== null) {
            var P = e.unstable_now()
            k = P
            var z = !0
            try {
                z = R(!0, P)
            } finally {
                z ? D() : ((S = !1), (R = null))
            }
        } else S = !1
    }
    var D
    if (typeof p == 'function')
        D = function () {
            p(b)
        }
    else if (typeof MessageChannel < 'u') {
        var F = new MessageChannel(),
            U = F.port2
        ;(F.port1.onmessage = b),
            (D = function () {
                U.postMessage(null)
            })
    } else
        D = function () {
            C(b, 0)
        }
    function Y(P) {
        ;(R = P), S || ((S = !0), D())
    }
    function I(P, z) {
        M = C(function () {
            P(e.unstable_now())
        }, z)
    }
    ;(e.unstable_IdlePriority = 5),
        (e.unstable_ImmediatePriority = 1),
        (e.unstable_LowPriority = 4),
        (e.unstable_NormalPriority = 3),
        (e.unstable_Profiling = null),
        (e.unstable_UserBlockingPriority = 2),
        (e.unstable_cancelCallback = function (P) {
            P.callback = null
        }),
        (e.unstable_continueExecution = function () {
            g || v || ((g = !0), Y(T))
        }),
        (e.unstable_forceFrameRate = function (P) {
            0 > P || 125 < P
                ? console.error(
                      'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
                  )
                : (O = 0 < P ? Math.floor(1e3 / P) : 5)
        }),
        (e.unstable_getCurrentPriorityLevel = function () {
            return m
        }),
        (e.unstable_getFirstCallbackNode = function () {
            return n(a)
        }),
        (e.unstable_next = function (P) {
            switch (m) {
                case 1:
                case 2:
                case 3:
                    var z = 3
                    break
                default:
                    z = m
            }
            var $ = m
            m = z
            try {
                return P()
            } finally {
                m = $
            }
        }),
        (e.unstable_pauseExecution = function () {}),
        (e.unstable_requestPaint = function () {}),
        (e.unstable_runWithPriority = function (P, z) {
            switch (P) {
                case 1:
                case 2:
                case 3:
                case 4:
                case 5:
                    break
                default:
                    P = 3
            }
            var $ = m
            m = P
            try {
                return z()
            } finally {
                m = $
            }
        }),
        (e.unstable_scheduleCallback = function (P, z, $) {
            var q = e.unstable_now()
            switch (
                (typeof $ == 'object' && $ !== null
                    ? (($ = $.delay),
                      ($ = typeof $ == 'number' && 0 < $ ? q + $ : q))
                    : ($ = q),
                P)
            ) {
                case 1:
                    var te = -1
                    break
                case 2:
                    te = 250
                    break
                case 5:
                    te = 1073741823
                    break
                case 4:
                    te = 1e4
                    break
                default:
                    te = 5e3
            }
            return (
                (te = $ + te),
                (P = {
                    id: c++,
                    callback: z,
                    priorityLevel: P,
                    startTime: $,
                    expirationTime: te,
                    sortIndex: -1,
                }),
                $ > q
                    ? ((P.sortIndex = $),
                      t(u, P),
                      n(a) === null &&
                          P === n(u) &&
                          (y ? (f(M), (M = -1)) : (y = !0), I(w, $ - q)))
                    : ((P.sortIndex = te), t(a, P), g || v || ((g = !0), Y(T))),
                P
            )
        }),
        (e.unstable_shouldYield = A),
        (e.unstable_wrapCallback = function (P) {
            var z = m
            return function () {
                var $ = m
                m = z
                try {
                    return P.apply(this, arguments)
                } finally {
                    m = $
                }
            }
        })
})(Pf)
Tf.exports = Pf
var mg = Tf.exports
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hg = N,
    ct = mg
function B(e) {
    for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
            n = 1;
        n < arguments.length;
        n++
    )
        t += '&args[]=' + encodeURIComponent(arguments[n])
    return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
    )
}
var _f = new Set(),
    xi = {}
function nr(e, t) {
    Nr(e, t), Nr(e + 'Capture', t)
}
function Nr(e, t) {
    for (xi[e] = t, e = 0; e < t.length; e++) _f.add(t[e])
}
var Kt = !(
        typeof window > 'u' ||
        typeof window.document > 'u' ||
        typeof window.document.createElement > 'u'
    ),
    Bs = Object.prototype.hasOwnProperty,
    gg =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    gc = {},
    vc = {}
function vg(e) {
    return Bs.call(vc, e)
        ? !0
        : Bs.call(gc, e)
        ? !1
        : gg.test(e)
        ? (vc[e] = !0)
        : ((gc[e] = !0), !1)
}
function yg(e, t, n, r) {
    if (n !== null && n.type === 0) return !1
    switch (typeof t) {
        case 'function':
        case 'symbol':
            return !0
        case 'boolean':
            return r
                ? !1
                : n !== null
                ? !n.acceptsBooleans
                : ((e = e.toLowerCase().slice(0, 5)),
                  e !== 'data-' && e !== 'aria-')
        default:
            return !1
    }
}
function wg(e, t, n, r) {
    if (t === null || typeof t > 'u' || yg(e, t, n, r)) return !0
    if (r) return !1
    if (n !== null)
        switch (n.type) {
            case 3:
                return !t
            case 4:
                return t === !1
            case 5:
                return isNaN(t)
            case 6:
                return isNaN(t) || 1 > t
        }
    return !1
}
function Ye(e, t, n, r, i, l, o) {
    ;(this.acceptsBooleans = t === 2 || t === 3 || t === 4),
        (this.attributeName = r),
        (this.attributeNamespace = i),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = l),
        (this.removeEmptyString = o)
}
var je = {}
'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
    .split(' ')
    .forEach(function (e) {
        je[e] = new Ye(e, 0, !1, e, null, !1, !1)
    })
;[
    ['acceptCharset', 'accept-charset'],
    ['className', 'class'],
    ['htmlFor', 'for'],
    ['httpEquiv', 'http-equiv'],
].forEach(function (e) {
    var t = e[0]
    je[t] = new Ye(t, 1, !1, e[1], null, !1, !1)
})
;['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(function (e) {
    je[e] = new Ye(e, 2, !1, e.toLowerCase(), null, !1, !1)
})
;[
    'autoReverse',
    'externalResourcesRequired',
    'focusable',
    'preserveAlpha',
].forEach(function (e) {
    je[e] = new Ye(e, 2, !1, e, null, !1, !1)
})
'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
    .split(' ')
    .forEach(function (e) {
        je[e] = new Ye(e, 3, !1, e.toLowerCase(), null, !1, !1)
    })
;['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
    je[e] = new Ye(e, 3, !0, e, null, !1, !1)
})
;['capture', 'download'].forEach(function (e) {
    je[e] = new Ye(e, 4, !1, e, null, !1, !1)
})
;['cols', 'rows', 'size', 'span'].forEach(function (e) {
    je[e] = new Ye(e, 6, !1, e, null, !1, !1)
})
;['rowSpan', 'start'].forEach(function (e) {
    je[e] = new Ye(e, 5, !1, e.toLowerCase(), null, !1, !1)
})
var Ka = /[\-:]([a-z])/g
function Ya(e) {
    return e[1].toUpperCase()
}
'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(Ka, Ya)
        je[t] = new Ye(t, 1, !1, e, null, !1, !1)
    })
'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
    .split(' ')
    .forEach(function (e) {
        var t = e.replace(Ka, Ya)
        je[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
    })
;['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
    var t = e.replace(Ka, Ya)
    je[t] = new Ye(t, 1, !1, e, 'http://www.w3.org/XML/1998/namespace', !1, !1)
})
;['tabIndex', 'crossOrigin'].forEach(function (e) {
    je[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !1, !1)
})
je.xlinkHref = new Ye(
    'xlinkHref',
    1,
    !1,
    'xlink:href',
    'http://www.w3.org/1999/xlink',
    !0,
    !1
)
;['src', 'href', 'action', 'formAction'].forEach(function (e) {
    je[e] = new Ye(e, 1, !1, e.toLowerCase(), null, !0, !0)
})
function Xa(e, t, n, r) {
    var i = je.hasOwnProperty(t) ? je[t] : null
    ;(i !== null
        ? i.type !== 0
        : r ||
          !(2 < t.length) ||
          (t[0] !== 'o' && t[0] !== 'O') ||
          (t[1] !== 'n' && t[1] !== 'N')) &&
        (wg(t, n, i, r) && (n = null),
        r || i === null
            ? vg(t) &&
              (n === null ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
            : i.mustUseProperty
            ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : '') : n)
            : ((t = i.attributeName),
              (r = i.attributeNamespace),
              n === null
                  ? e.removeAttribute(t)
                  : ((i = i.type),
                    (n = i === 3 || (i === 4 && n === !0) ? '' : '' + n),
                    r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var en = hg.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    sl = Symbol.for('react.element'),
    dr = Symbol.for('react.portal'),
    fr = Symbol.for('react.fragment'),
    qa = Symbol.for('react.strict_mode'),
    $s = Symbol.for('react.profiler'),
    Mf = Symbol.for('react.provider'),
    kf = Symbol.for('react.context'),
    Ja = Symbol.for('react.forward_ref'),
    Gs = Symbol.for('react.suspense'),
    Us = Symbol.for('react.suspense_list'),
    Za = Symbol.for('react.memo'),
    un = Symbol.for('react.lazy'),
    Lf = Symbol.for('react.offscreen'),
    yc = Symbol.iterator
function Qr(e) {
    return e === null || typeof e != 'object'
        ? null
        : ((e = (yc && e[yc]) || e['@@iterator']),
          typeof e == 'function' ? e : null)
}
var we = Object.assign,
    es
function ii(e) {
    if (es === void 0)
        try {
            throw Error()
        } catch (n) {
            var t = n.stack.trim().match(/\n( *(at )?)/)
            es = (t && t[1]) || ''
        }
    return (
        `
` +
        es +
        e
    )
}
var ts = !1
function ns(e, t) {
    if (!e || ts) return ''
    ts = !0
    var n = Error.prepareStackTrace
    Error.prepareStackTrace = void 0
    try {
        if (t)
            if (
                ((t = function () {
                    throw Error()
                }),
                Object.defineProperty(t.prototype, 'props', {
                    set: function () {
                        throw Error()
                    },
                }),
                typeof Reflect == 'object' && Reflect.construct)
            ) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == 'string') {
            for (
                var i = u.stack.split(`
`),
                    l = r.stack.split(`
`),
                    o = i.length - 1,
                    s = l.length - 1;
                1 <= o && 0 <= s && i[o] !== l[s];

            )
                s--
            for (; 1 <= o && 0 <= s; o--, s--)
                if (i[o] !== l[s]) {
                    if (o !== 1 || s !== 1)
                        do
                            if ((o--, s--, 0 > s || i[o] !== l[s])) {
                                var a =
                                    `
` + i[o].replace(' at new ', ' at ')
                                return (
                                    e.displayName &&
                                        a.includes('<anonymous>') &&
                                        (a = a.replace(
                                            '<anonymous>',
                                            e.displayName
                                        )),
                                    a
                                )
                            }
                        while (1 <= o && 0 <= s)
                    break
                }
        }
    } finally {
        ;(ts = !1), (Error.prepareStackTrace = n)
    }
    return (e = e ? e.displayName || e.name : '') ? ii(e) : ''
}
function Sg(e) {
    switch (e.tag) {
        case 5:
            return ii(e.type)
        case 16:
            return ii('Lazy')
        case 13:
            return ii('Suspense')
        case 19:
            return ii('SuspenseList')
        case 0:
        case 2:
        case 15:
            return (e = ns(e.type, !1)), e
        case 11:
            return (e = ns(e.type.render, !1)), e
        case 1:
            return (e = ns(e.type, !0)), e
        default:
            return ''
    }
}
function Hs(e) {
    if (e == null) return null
    if (typeof e == 'function') return e.displayName || e.name || null
    if (typeof e == 'string') return e
    switch (e) {
        case fr:
            return 'Fragment'
        case dr:
            return 'Portal'
        case $s:
            return 'Profiler'
        case qa:
            return 'StrictMode'
        case Gs:
            return 'Suspense'
        case Us:
            return 'SuspenseList'
    }
    if (typeof e == 'object')
        switch (e.$$typeof) {
            case kf:
                return (e.displayName || 'Context') + '.Consumer'
            case Mf:
                return (e._context.displayName || 'Context') + '.Provider'
            case Ja:
                var t = e.render
                return (
                    (e = e.displayName),
                    e ||
                        ((e = t.displayName || t.name || ''),
                        (e =
                            e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')),
                    e
                )
            case Za:
                return (
                    (t = e.displayName || null),
                    t !== null ? t : Hs(e.type) || 'Memo'
                )
            case un:
                ;(t = e._payload), (e = e._init)
                try {
                    return Hs(e(t))
                } catch {}
        }
    return null
}
function xg(e) {
    var t = e.type
    switch (e.tag) {
        case 24:
            return 'Cache'
        case 9:
            return (t.displayName || 'Context') + '.Consumer'
        case 10:
            return (t._context.displayName || 'Context') + '.Provider'
        case 18:
            return 'DehydratedFragment'
        case 11:
            return (
                (e = t.render),
                (e = e.displayName || e.name || ''),
                t.displayName ||
                    (e !== '' ? 'ForwardRef(' + e + ')' : 'ForwardRef')
            )
        case 7:
            return 'Fragment'
        case 5:
            return t
        case 4:
            return 'Portal'
        case 3:
            return 'Root'
        case 6:
            return 'Text'
        case 16:
            return Hs(t)
        case 8:
            return t === qa ? 'StrictMode' : 'Mode'
        case 22:
            return 'Offscreen'
        case 12:
            return 'Profiler'
        case 21:
            return 'Scope'
        case 13:
            return 'Suspense'
        case 19:
            return 'SuspenseList'
        case 25:
            return 'TracingMarker'
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == 'function') return t.displayName || t.name || null
            if (typeof t == 'string') return t
    }
    return null
}
function Pn(e) {
    switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
            return e
        case 'object':
            return e
        default:
            return ''
    }
}
function Nf(e) {
    var t = e.type
    return (
        (e = e.nodeName) &&
        e.toLowerCase() === 'input' &&
        (t === 'checkbox' || t === 'radio')
    )
}
function Eg(e) {
    var t = Nf(e) ? 'checked' : 'value',
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = '' + e[t]
    if (
        !e.hasOwnProperty(t) &&
        typeof n < 'u' &&
        typeof n.get == 'function' &&
        typeof n.set == 'function'
    ) {
        var i = n.get,
            l = n.set
        return (
            Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                    return i.call(this)
                },
                set: function (o) {
                    ;(r = '' + o), l.call(this, o)
                },
            }),
            Object.defineProperty(e, t, { enumerable: n.enumerable }),
            {
                getValue: function () {
                    return r
                },
                setValue: function (o) {
                    r = '' + o
                },
                stopTracking: function () {
                    ;(e._valueTracker = null), delete e[t]
                },
            }
        )
    }
}
function al(e) {
    e._valueTracker || (e._valueTracker = Eg(e))
}
function Of(e) {
    if (!e) return !1
    var t = e._valueTracker
    if (!t) return !0
    var n = t.getValue(),
        r = ''
    return (
        e && (r = Nf(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r),
        e !== n ? (t.setValue(e), !0) : !1
    )
}
function Bl(e) {
    if (
        ((e = e || (typeof document < 'u' ? document : void 0)), typeof e > 'u')
    )
        return null
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}
function Vs(e, t) {
    var n = t.checked
    return we({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked,
    })
}
function wc(e, t) {
    var n = t.defaultValue == null ? '' : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked
    ;(n = Pn(t.value != null ? t.value : n)),
        (e._wrapperState = {
            initialChecked: r,
            initialValue: n,
            controlled:
                t.type === 'checkbox' || t.type === 'radio'
                    ? t.checked != null
                    : t.value != null,
        })
}
function If(e, t) {
    ;(t = t.checked), t != null && Xa(e, 'checked', t, !1)
}
function Ws(e, t) {
    If(e, t)
    var n = Pn(t.value),
        r = t.type
    if (n != null)
        r === 'number'
            ? ((n === 0 && e.value === '') || e.value != n) &&
              (e.value = '' + n)
            : e.value !== '' + n && (e.value = '' + n)
    else if (r === 'submit' || r === 'reset') {
        e.removeAttribute('value')
        return
    }
    t.hasOwnProperty('value')
        ? Qs(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && Qs(e, t.type, Pn(t.defaultValue)),
        t.checked == null &&
            t.defaultChecked != null &&
            (e.defaultChecked = !!t.defaultChecked)
}
function Sc(e, t, n) {
    if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type
        if (
            !(
                (r !== 'submit' && r !== 'reset') ||
                (t.value !== void 0 && t.value !== null)
            )
        )
            return
        ;(t = '' + e._wrapperState.initialValue),
            n || t === e.value || (e.value = t),
            (e.defaultValue = t)
    }
    ;(n = e.name),
        n !== '' && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        n !== '' && (e.name = n)
}
function Qs(e, t, n) {
    ;(t !== 'number' || Bl(e.ownerDocument) !== e) &&
        (n == null
            ? (e.defaultValue = '' + e._wrapperState.initialValue)
            : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
}
var li = Array.isArray
function Cr(e, t, n, r) {
    if (((e = e.options), t)) {
        t = {}
        for (var i = 0; i < n.length; i++) t['$' + n[i]] = !0
        for (n = 0; n < e.length; n++)
            (i = t.hasOwnProperty('$' + e[n].value)),
                e[n].selected !== i && (e[n].selected = i),
                i && r && (e[n].defaultSelected = !0)
    } else {
        for (n = '' + Pn(n), t = null, i = 0; i < e.length; i++) {
            if (e[i].value === n) {
                ;(e[i].selected = !0), r && (e[i].defaultSelected = !0)
                return
            }
            t !== null || e[i].disabled || (t = e[i])
        }
        t !== null && (t.selected = !0)
    }
}
function Ks(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(B(91))
    return we({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
    })
}
function xc(e, t) {
    var n = t.value
    if (n == null) {
        if (((n = t.children), (t = t.defaultValue), n != null)) {
            if (t != null) throw Error(B(92))
            if (li(n)) {
                if (1 < n.length) throw Error(B(93))
                n = n[0]
            }
            t = n
        }
        t == null && (t = ''), (n = t)
    }
    e._wrapperState = { initialValue: Pn(n) }
}
function bf(e, t) {
    var n = Pn(t.value),
        r = Pn(t.defaultValue)
    n != null &&
        ((n = '' + n),
        n !== e.value && (e.value = n),
        t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
        r != null && (e.defaultValue = '' + r)
}
function Ec(e) {
    var t = e.textContent
    t === e._wrapperState.initialValue &&
        t !== '' &&
        t !== null &&
        (e.value = t)
}
function Rf(e) {
    switch (e) {
        case 'svg':
            return 'http://www.w3.org/2000/svg'
        case 'math':
            return 'http://www.w3.org/1998/Math/MathML'
        default:
            return 'http://www.w3.org/1999/xhtml'
    }
}
function Ys(e, t) {
    return e == null || e === 'http://www.w3.org/1999/xhtml'
        ? Rf(t)
        : e === 'http://www.w3.org/2000/svg' && t === 'foreignObject'
        ? 'http://www.w3.org/1999/xhtml'
        : e
}
var ul,
    Df = (function (e) {
        return typeof MSApp < 'u' && MSApp.execUnsafeLocalFunction
            ? function (t, n, r, i) {
                  MSApp.execUnsafeLocalFunction(function () {
                      return e(t, n, r, i)
                  })
              }
            : e
    })(function (e, t) {
        if (e.namespaceURI !== 'http://www.w3.org/2000/svg' || 'innerHTML' in e)
            e.innerHTML = t
        else {
            for (
                ul = ul || document.createElement('div'),
                    ul.innerHTML = '<svg>' + t.valueOf().toString() + '</svg>',
                    t = ul.firstChild;
                e.firstChild;

            )
                e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
        }
    })
function Ei(e, t) {
    if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t
            return
        }
    }
    e.textContent = t
}
var ci = {
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
    Cg = ['Webkit', 'ms', 'Moz', 'O']
Object.keys(ci).forEach(function (e) {
    Cg.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (ci[t] = ci[e])
    })
})
function zf(e, t, n) {
    return t == null || typeof t == 'boolean' || t === ''
        ? ''
        : n ||
          typeof t != 'number' ||
          t === 0 ||
          (ci.hasOwnProperty(e) && ci[e])
        ? ('' + t).trim()
        : t + 'px'
}
function jf(e, t) {
    e = e.style
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf('--') === 0,
                i = zf(n, t[n], r)
            n === 'float' && (n = 'cssFloat'),
                r ? e.setProperty(n, i) : (e[n] = i)
        }
}
var Tg = we(
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
)
function Xs(e, t) {
    if (t) {
        if (Tg[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
            throw Error(B(137, e))
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(B(60))
            if (
                typeof t.dangerouslySetInnerHTML != 'object' ||
                !('__html' in t.dangerouslySetInnerHTML)
            )
                throw Error(B(61))
        }
        if (t.style != null && typeof t.style != 'object') throw Error(B(62))
    }
}
function qs(e, t) {
    if (e.indexOf('-') === -1) return typeof t.is == 'string'
    switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
            return !1
        default:
            return !0
    }
}
var Js = null
function eu(e) {
    return (
        (e = e.target || e.srcElement || window),
        e.correspondingUseElement && (e = e.correspondingUseElement),
        e.nodeType === 3 ? e.parentNode : e
    )
}
var Zs = null,
    Tr = null,
    Pr = null
function Cc(e) {
    if ((e = Qi(e))) {
        if (typeof Zs != 'function') throw Error(B(280))
        var t = e.stateNode
        t && ((t = Mo(t)), Zs(e.stateNode, e.type, t))
    }
}
function Af(e) {
    Tr ? (Pr ? Pr.push(e) : (Pr = [e])) : (Tr = e)
}
function Ff() {
    if (Tr) {
        var e = Tr,
            t = Pr
        if (((Pr = Tr = null), Cc(e), t))
            for (e = 0; e < t.length; e++) Cc(t[e])
    }
}
function Bf(e, t) {
    return e(t)
}
function $f() {}
var rs = !1
function Gf(e, t, n) {
    if (rs) return e(t, n)
    rs = !0
    try {
        return Bf(e, t, n)
    } finally {
        ;(rs = !1), (Tr !== null || Pr !== null) && ($f(), Ff())
    }
}
function Ci(e, t) {
    var n = e.stateNode
    if (n === null) return null
    var r = Mo(n)
    if (r === null) return null
    n = r[t]
    e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
            ;(r = !r.disabled) ||
                ((e = e.type),
                (r = !(
                    e === 'button' ||
                    e === 'input' ||
                    e === 'select' ||
                    e === 'textarea'
                ))),
                (e = !r)
            break e
        default:
            e = !1
    }
    if (e) return null
    if (n && typeof n != 'function') throw Error(B(231, t, typeof n))
    return n
}
var ea = !1
if (Kt)
    try {
        var Kr = {}
        Object.defineProperty(Kr, 'passive', {
            get: function () {
                ea = !0
            },
        }),
            window.addEventListener('test', Kr, Kr),
            window.removeEventListener('test', Kr, Kr)
    } catch {
        ea = !1
    }
function Pg(e, t, n, r, i, l, o, s, a) {
    var u = Array.prototype.slice.call(arguments, 3)
    try {
        t.apply(n, u)
    } catch (c) {
        this.onError(c)
    }
}
var di = !1,
    $l = null,
    Gl = !1,
    ta = null,
    _g = {
        onError: function (e) {
            ;(di = !0), ($l = e)
        },
    }
function Mg(e, t, n, r, i, l, o, s, a) {
    ;(di = !1), ($l = null), Pg.apply(_g, arguments)
}
function kg(e, t, n, r, i, l, o, s, a) {
    if ((Mg.apply(this, arguments), di)) {
        if (di) {
            var u = $l
            ;(di = !1), ($l = null)
        } else throw Error(B(198))
        Gl || ((Gl = !0), (ta = u))
    }
}
function rr(e) {
    var t = e,
        n = e
    if (e.alternate) for (; t.return; ) t = t.return
    else {
        e = t
        do (t = e), t.flags & 4098 && (n = t.return), (e = t.return)
        while (e)
    }
    return t.tag === 3 ? n : null
}
function Uf(e) {
    if (e.tag === 13) {
        var t = e.memoizedState
        if (
            (t === null &&
                ((e = e.alternate), e !== null && (t = e.memoizedState)),
            t !== null)
        )
            return t.dehydrated
    }
    return null
}
function Tc(e) {
    if (rr(e) !== e) throw Error(B(188))
}
function Lg(e) {
    var t = e.alternate
    if (!t) {
        if (((t = rr(e)), t === null)) throw Error(B(188))
        return t !== e ? null : e
    }
    for (var n = e, r = t; ; ) {
        var i = n.return
        if (i === null) break
        var l = i.alternate
        if (l === null) {
            if (((r = i.return), r !== null)) {
                n = r
                continue
            }
            break
        }
        if (i.child === l.child) {
            for (l = i.child; l; ) {
                if (l === n) return Tc(i), e
                if (l === r) return Tc(i), t
                l = l.sibling
            }
            throw Error(B(188))
        }
        if (n.return !== r.return) (n = i), (r = l)
        else {
            for (var o = !1, s = i.child; s; ) {
                if (s === n) {
                    ;(o = !0), (n = i), (r = l)
                    break
                }
                if (s === r) {
                    ;(o = !0), (r = i), (n = l)
                    break
                }
                s = s.sibling
            }
            if (!o) {
                for (s = l.child; s; ) {
                    if (s === n) {
                        ;(o = !0), (n = l), (r = i)
                        break
                    }
                    if (s === r) {
                        ;(o = !0), (r = l), (n = i)
                        break
                    }
                    s = s.sibling
                }
                if (!o) throw Error(B(189))
            }
        }
        if (n.alternate !== r) throw Error(B(190))
    }
    if (n.tag !== 3) throw Error(B(188))
    return n.stateNode.current === n ? e : t
}
function Hf(e) {
    return (e = Lg(e)), e !== null ? Vf(e) : null
}
function Vf(e) {
    if (e.tag === 5 || e.tag === 6) return e
    for (e = e.child; e !== null; ) {
        var t = Vf(e)
        if (t !== null) return t
        e = e.sibling
    }
    return null
}
var Wf = ct.unstable_scheduleCallback,
    Pc = ct.unstable_cancelCallback,
    Ng = ct.unstable_shouldYield,
    Og = ct.unstable_requestPaint,
    Ce = ct.unstable_now,
    Ig = ct.unstable_getCurrentPriorityLevel,
    tu = ct.unstable_ImmediatePriority,
    Qf = ct.unstable_UserBlockingPriority,
    Ul = ct.unstable_NormalPriority,
    bg = ct.unstable_LowPriority,
    Kf = ct.unstable_IdlePriority,
    Co = null,
    zt = null
function Rg(e) {
    if (zt && typeof zt.onCommitFiberRoot == 'function')
        try {
            zt.onCommitFiberRoot(Co, e, void 0, (e.current.flags & 128) === 128)
        } catch {}
}
var Mt = Math.clz32 ? Math.clz32 : jg,
    Dg = Math.log,
    zg = Math.LN2
function jg(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Dg(e) / zg) | 0)) | 0
}
var cl = 64,
    dl = 4194304
function oi(e) {
    switch (e & -e) {
        case 1:
            return 1
        case 2:
            return 2
        case 4:
            return 4
        case 8:
            return 8
        case 16:
            return 16
        case 32:
            return 32
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
            return e & 4194240
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424
        case 134217728:
            return 134217728
        case 268435456:
            return 268435456
        case 536870912:
            return 536870912
        case 1073741824:
            return 1073741824
        default:
            return e
    }
}
function Hl(e, t) {
    var n = e.pendingLanes
    if (n === 0) return 0
    var r = 0,
        i = e.suspendedLanes,
        l = e.pingedLanes,
        o = n & 268435455
    if (o !== 0) {
        var s = o & ~i
        s !== 0 ? (r = oi(s)) : ((l &= o), l !== 0 && (r = oi(l)))
    } else (o = n & ~i), o !== 0 ? (r = oi(o)) : l !== 0 && (r = oi(l))
    if (r === 0) return 0
    if (
        t !== 0 &&
        t !== r &&
        !(t & i) &&
        ((i = r & -r),
        (l = t & -t),
        i >= l || (i === 16 && (l & 4194240) !== 0))
    )
        return t
    if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
        for (e = e.entanglements, t &= r; 0 < t; )
            (n = 31 - Mt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i)
    return r
}
function Ag(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250
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
            return t + 5e3
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1
        default:
            return -1
    }
}
function Fg(e, t) {
    for (
        var n = e.suspendedLanes,
            r = e.pingedLanes,
            i = e.expirationTimes,
            l = e.pendingLanes;
        0 < l;

    ) {
        var o = 31 - Mt(l),
            s = 1 << o,
            a = i[o]
        a === -1
            ? (!(s & n) || s & r) && (i[o] = Ag(s, t))
            : a <= t && (e.expiredLanes |= s),
            (l &= ~s)
    }
}
function na(e) {
    return (
        (e = e.pendingLanes & -1073741825),
        e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
    )
}
function Yf() {
    var e = cl
    return (cl <<= 1), !(cl & 4194240) && (cl = 64), e
}
function is(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e)
    return t
}
function Vi(e, t, n) {
    ;(e.pendingLanes |= t),
        t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        (e = e.eventTimes),
        (t = 31 - Mt(t)),
        (e[t] = n)
}
function Bg(e, t) {
    var n = e.pendingLanes & ~t
    ;(e.pendingLanes = t),
        (e.suspendedLanes = 0),
        (e.pingedLanes = 0),
        (e.expiredLanes &= t),
        (e.mutableReadLanes &= t),
        (e.entangledLanes &= t),
        (t = e.entanglements)
    var r = e.eventTimes
    for (e = e.expirationTimes; 0 < n; ) {
        var i = 31 - Mt(n),
            l = 1 << i
        ;(t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~l)
    }
}
function nu(e, t) {
    var n = (e.entangledLanes |= t)
    for (e = e.entanglements; n; ) {
        var r = 31 - Mt(n),
            i = 1 << r
        ;(i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i)
    }
}
var se = 0
function Xf(e) {
    return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1
}
var qf,
    ru,
    Jf,
    Zf,
    ep,
    ra = !1,
    fl = [],
    vn = null,
    yn = null,
    wn = null,
    Ti = new Map(),
    Pi = new Map(),
    dn = [],
    $g =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
            ' '
        )
function _c(e, t) {
    switch (e) {
        case 'focusin':
        case 'focusout':
            vn = null
            break
        case 'dragenter':
        case 'dragleave':
            yn = null
            break
        case 'mouseover':
        case 'mouseout':
            wn = null
            break
        case 'pointerover':
        case 'pointerout':
            Ti.delete(t.pointerId)
            break
        case 'gotpointercapture':
        case 'lostpointercapture':
            Pi.delete(t.pointerId)
    }
}
function Yr(e, t, n, r, i, l) {
    return e === null || e.nativeEvent !== l
        ? ((e = {
              blockedOn: t,
              domEventName: n,
              eventSystemFlags: r,
              nativeEvent: l,
              targetContainers: [i],
          }),
          t !== null && ((t = Qi(t)), t !== null && ru(t)),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          i !== null && t.indexOf(i) === -1 && t.push(i),
          e)
}
function Gg(e, t, n, r, i) {
    switch (t) {
        case 'focusin':
            return (vn = Yr(vn, e, t, n, r, i)), !0
        case 'dragenter':
            return (yn = Yr(yn, e, t, n, r, i)), !0
        case 'mouseover':
            return (wn = Yr(wn, e, t, n, r, i)), !0
        case 'pointerover':
            var l = i.pointerId
            return Ti.set(l, Yr(Ti.get(l) || null, e, t, n, r, i)), !0
        case 'gotpointercapture':
            return (
                (l = i.pointerId),
                Pi.set(l, Yr(Pi.get(l) || null, e, t, n, r, i)),
                !0
            )
    }
    return !1
}
function tp(e) {
    var t = Fn(e.target)
    if (t !== null) {
        var n = rr(t)
        if (n !== null) {
            if (((t = n.tag), t === 13)) {
                if (((t = Uf(n)), t !== null)) {
                    ;(e.blockedOn = t),
                        ep(e.priority, function () {
                            Jf(n)
                        })
                    return
                }
            } else if (
                t === 3 &&
                n.stateNode.current.memoizedState.isDehydrated
            ) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null
                return
            }
        }
    }
    e.blockedOn = null
}
function kl(e) {
    if (e.blockedOn !== null) return !1
    for (var t = e.targetContainers; 0 < t.length; ) {
        var n = ia(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (n === null) {
            n = e.nativeEvent
            var r = new n.constructor(n.type, n)
            ;(Js = r), n.target.dispatchEvent(r), (Js = null)
        } else return (t = Qi(n)), t !== null && ru(t), (e.blockedOn = n), !1
        t.shift()
    }
    return !0
}
function Mc(e, t, n) {
    kl(e) && n.delete(t)
}
function Ug() {
    ;(ra = !1),
        vn !== null && kl(vn) && (vn = null),
        yn !== null && kl(yn) && (yn = null),
        wn !== null && kl(wn) && (wn = null),
        Ti.forEach(Mc),
        Pi.forEach(Mc)
}
function Xr(e, t) {
    e.blockedOn === t &&
        ((e.blockedOn = null),
        ra ||
            ((ra = !0),
            ct.unstable_scheduleCallback(ct.unstable_NormalPriority, Ug)))
}
function _i(e) {
    function t(i) {
        return Xr(i, e)
    }
    if (0 < fl.length) {
        Xr(fl[0], e)
        for (var n = 1; n < fl.length; n++) {
            var r = fl[n]
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (
        vn !== null && Xr(vn, e),
            yn !== null && Xr(yn, e),
            wn !== null && Xr(wn, e),
            Ti.forEach(t),
            Pi.forEach(t),
            n = 0;
        n < dn.length;
        n++
    )
        (r = dn[n]), r.blockedOn === e && (r.blockedOn = null)
    for (; 0 < dn.length && ((n = dn[0]), n.blockedOn === null); )
        tp(n), n.blockedOn === null && dn.shift()
}
var _r = en.ReactCurrentBatchConfig,
    Vl = !0
function Hg(e, t, n, r) {
    var i = se,
        l = _r.transition
    _r.transition = null
    try {
        ;(se = 1), iu(e, t, n, r)
    } finally {
        ;(se = i), (_r.transition = l)
    }
}
function Vg(e, t, n, r) {
    var i = se,
        l = _r.transition
    _r.transition = null
    try {
        ;(se = 4), iu(e, t, n, r)
    } finally {
        ;(se = i), (_r.transition = l)
    }
}
function iu(e, t, n, r) {
    if (Vl) {
        var i = ia(e, t, n, r)
        if (i === null) ms(e, t, r, Wl, n), _c(e, r)
        else if (Gg(i, e, t, n, r)) r.stopPropagation()
        else if ((_c(e, r), t & 4 && -1 < $g.indexOf(e))) {
            for (; i !== null; ) {
                var l = Qi(i)
                if (
                    (l !== null && qf(l),
                    (l = ia(e, t, n, r)),
                    l === null && ms(e, t, r, Wl, n),
                    l === i)
                )
                    break
                i = l
            }
            i !== null && r.stopPropagation()
        } else ms(e, t, r, null, n)
    }
}
var Wl = null
function ia(e, t, n, r) {
    if (((Wl = null), (e = eu(r)), (e = Fn(e)), e !== null))
        if (((t = rr(e)), t === null)) e = null
        else if (((n = t.tag), n === 13)) {
            if (((e = Uf(t)), e !== null)) return e
            e = null
        } else if (n === 3) {
            if (t.stateNode.current.memoizedState.isDehydrated)
                return t.tag === 3 ? t.stateNode.containerInfo : null
            e = null
        } else t !== e && (e = null)
    return (Wl = e), null
}
function np(e) {
    switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
            return 1
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
            return 4
        case 'message':
            switch (Ig()) {
                case tu:
                    return 1
                case Qf:
                    return 4
                case Ul:
                case bg:
                    return 16
                case Kf:
                    return 536870912
                default:
                    return 16
            }
        default:
            return 16
    }
}
var pn = null,
    lu = null,
    Ll = null
function rp() {
    if (Ll) return Ll
    var e,
        t = lu,
        n = t.length,
        r,
        i = 'value' in pn ? pn.value : pn.textContent,
        l = i.length
    for (e = 0; e < n && t[e] === i[e]; e++);
    var o = n - e
    for (r = 1; r <= o && t[n - r] === i[l - r]; r++);
    return (Ll = i.slice(e, 1 < r ? 1 - r : void 0))
}
function Nl(e) {
    var t = e.keyCode
    return (
        'charCode' in e
            ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
            : (e = t),
        e === 10 && (e = 13),
        32 <= e || e === 13 ? e : 0
    )
}
function pl() {
    return !0
}
function kc() {
    return !1
}
function mt(e) {
    function t(n, r, i, l, o) {
        ;(this._reactName = n),
            (this._targetInst = i),
            (this.type = r),
            (this.nativeEvent = l),
            (this.target = o),
            (this.currentTarget = null)
        for (var s in e)
            e.hasOwnProperty(s) && ((n = e[s]), (this[s] = n ? n(l) : l[s]))
        return (
            (this.isDefaultPrevented = (
                l.defaultPrevented != null
                    ? l.defaultPrevented
                    : l.returnValue === !1
            )
                ? pl
                : kc),
            (this.isPropagationStopped = kc),
            this
        )
    }
    return (
        we(t.prototype, {
            preventDefault: function () {
                this.defaultPrevented = !0
                var n = this.nativeEvent
                n &&
                    (n.preventDefault
                        ? n.preventDefault()
                        : typeof n.returnValue != 'unknown' &&
                          (n.returnValue = !1),
                    (this.isDefaultPrevented = pl))
            },
            stopPropagation: function () {
                var n = this.nativeEvent
                n &&
                    (n.stopPropagation
                        ? n.stopPropagation()
                        : typeof n.cancelBubble != 'unknown' &&
                          (n.cancelBubble = !0),
                    (this.isPropagationStopped = pl))
            },
            persist: function () {},
            isPersistent: pl,
        }),
        t
    )
}
var Gr = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
    },
    ou = mt(Gr),
    Wi = we({}, Gr, { view: 0, detail: 0 }),
    Wg = mt(Wi),
    ls,
    os,
    qr,
    To = we({}, Wi, {
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
        getModifierState: su,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
            return e.relatedTarget === void 0
                ? e.fromElement === e.srcElement
                    ? e.toElement
                    : e.fromElement
                : e.relatedTarget
        },
        movementX: function (e) {
            return 'movementX' in e
                ? e.movementX
                : (e !== qr &&
                      (qr && e.type === 'mousemove'
                          ? ((ls = e.screenX - qr.screenX),
                            (os = e.screenY - qr.screenY))
                          : (os = ls = 0),
                      (qr = e)),
                  ls)
        },
        movementY: function (e) {
            return 'movementY' in e ? e.movementY : os
        },
    }),
    Lc = mt(To),
    Qg = we({}, To, { dataTransfer: 0 }),
    Kg = mt(Qg),
    Yg = we({}, Wi, { relatedTarget: 0 }),
    ss = mt(Yg),
    Xg = we({}, Gr, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    qg = mt(Xg),
    Jg = we({}, Gr, {
        clipboardData: function (e) {
            return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
    }),
    Zg = mt(Jg),
    ev = we({}, Gr, { data: 0 }),
    Nc = mt(ev),
    tv = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
    },
    nv = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
    },
    rv = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
    }
function iv(e) {
    var t = this.nativeEvent
    return t.getModifierState
        ? t.getModifierState(e)
        : (e = rv[e])
        ? !!t[e]
        : !1
}
function su() {
    return iv
}
var lv = we({}, Wi, {
        key: function (e) {
            if (e.key) {
                var t = tv[e.key] || e.key
                if (t !== 'Unidentified') return t
            }
            return e.type === 'keypress'
                ? ((e = Nl(e)), e === 13 ? 'Enter' : String.fromCharCode(e))
                : e.type === 'keydown' || e.type === 'keyup'
                ? nv[e.keyCode] || 'Unidentified'
                : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: su,
        charCode: function (e) {
            return e.type === 'keypress' ? Nl(e) : 0
        },
        keyCode: function (e) {
            return e.type === 'keydown' || e.type === 'keyup' ? e.keyCode : 0
        },
        which: function (e) {
            return e.type === 'keypress'
                ? Nl(e)
                : e.type === 'keydown' || e.type === 'keyup'
                ? e.keyCode
                : 0
        },
    }),
    ov = mt(lv),
    sv = we({}, To, {
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
    Oc = mt(sv),
    av = we({}, Wi, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: su,
    }),
    uv = mt(av),
    cv = we({}, Gr, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    dv = mt(cv),
    fv = we({}, To, {
        deltaX: function (e) {
            return 'deltaX' in e
                ? e.deltaX
                : 'wheelDeltaX' in e
                ? -e.wheelDeltaX
                : 0
        },
        deltaY: function (e) {
            return 'deltaY' in e
                ? e.deltaY
                : 'wheelDeltaY' in e
                ? -e.wheelDeltaY
                : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0
        },
        deltaZ: 0,
        deltaMode: 0,
    }),
    pv = mt(fv),
    mv = [9, 13, 27, 32],
    au = Kt && 'CompositionEvent' in window,
    fi = null
Kt && 'documentMode' in document && (fi = document.documentMode)
var hv = Kt && 'TextEvent' in window && !fi,
    ip = Kt && (!au || (fi && 8 < fi && 11 >= fi)),
    Ic = ' ',
    bc = !1
function lp(e, t) {
    switch (e) {
        case 'keyup':
            return mv.indexOf(t.keyCode) !== -1
        case 'keydown':
            return t.keyCode !== 229
        case 'keypress':
        case 'mousedown':
        case 'focusout':
            return !0
        default:
            return !1
    }
}
function op(e) {
    return (e = e.detail), typeof e == 'object' && 'data' in e ? e.data : null
}
var pr = !1
function gv(e, t) {
    switch (e) {
        case 'compositionend':
            return op(t)
        case 'keypress':
            return t.which !== 32 ? null : ((bc = !0), Ic)
        case 'textInput':
            return (e = t.data), e === Ic && bc ? null : e
        default:
            return null
    }
}
function vv(e, t) {
    if (pr)
        return e === 'compositionend' || (!au && lp(e, t))
            ? ((e = rp()), (Ll = lu = pn = null), (pr = !1), e)
            : null
    switch (e) {
        case 'paste':
            return null
        case 'keypress':
            if (
                !(t.ctrlKey || t.altKey || t.metaKey) ||
                (t.ctrlKey && t.altKey)
            ) {
                if (t.char && 1 < t.char.length) return t.char
                if (t.which) return String.fromCharCode(t.which)
            }
            return null
        case 'compositionend':
            return ip && t.locale !== 'ko' ? null : t.data
        default:
            return null
    }
}
var yv = {
    color: !0,
    date: !0,
    datetime: !0,
    'datetime-local': !0,
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
}
function Rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return t === 'input' ? !!yv[e.type] : t === 'textarea'
}
function sp(e, t, n, r) {
    Af(r),
        (t = Ql(t, 'onChange')),
        0 < t.length &&
            ((n = new ou('onChange', 'change', null, n, r)),
            e.push({ event: n, listeners: t }))
}
var pi = null,
    Mi = null
function wv(e) {
    yp(e, 0)
}
function Po(e) {
    var t = gr(e)
    if (Of(t)) return e
}
function Sv(e, t) {
    if (e === 'change') return t
}
var ap = !1
if (Kt) {
    var as
    if (Kt) {
        var us = 'oninput' in document
        if (!us) {
            var Dc = document.createElement('div')
            Dc.setAttribute('oninput', 'return;'),
                (us = typeof Dc.oninput == 'function')
        }
        as = us
    } else as = !1
    ap = as && (!document.documentMode || 9 < document.documentMode)
}
function zc() {
    pi && (pi.detachEvent('onpropertychange', up), (Mi = pi = null))
}
function up(e) {
    if (e.propertyName === 'value' && Po(Mi)) {
        var t = []
        sp(t, Mi, e, eu(e)), Gf(wv, t)
    }
}
function xv(e, t, n) {
    e === 'focusin'
        ? (zc(), (pi = t), (Mi = n), pi.attachEvent('onpropertychange', up))
        : e === 'focusout' && zc()
}
function Ev(e) {
    if (e === 'selectionchange' || e === 'keyup' || e === 'keydown')
        return Po(Mi)
}
function Cv(e, t) {
    if (e === 'click') return Po(t)
}
function Tv(e, t) {
    if (e === 'input' || e === 'change') return Po(t)
}
function Pv(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var Nt = typeof Object.is == 'function' ? Object.is : Pv
function ki(e, t) {
    if (Nt(e, t)) return !0
    if (
        typeof e != 'object' ||
        e === null ||
        typeof t != 'object' ||
        t === null
    )
        return !1
    var n = Object.keys(e),
        r = Object.keys(t)
    if (n.length !== r.length) return !1
    for (r = 0; r < n.length; r++) {
        var i = n[r]
        if (!Bs.call(t, i) || !Nt(e[i], t[i])) return !1
    }
    return !0
}
function jc(e) {
    for (; e && e.firstChild; ) e = e.firstChild
    return e
}
function Ac(e, t) {
    var n = jc(e)
    e = 0
    for (var r; n; ) {
        if (n.nodeType === 3) {
            if (((r = e + n.textContent.length), e <= t && r >= t))
                return { node: n, offset: t - e }
            e = r
        }
        e: {
            for (; n; ) {
                if (n.nextSibling) {
                    n = n.nextSibling
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = jc(n)
    }
}
function cp(e, t) {
    return e && t
        ? e === t
            ? !0
            : e && e.nodeType === 3
            ? !1
            : t && t.nodeType === 3
            ? cp(e, t.parentNode)
            : 'contains' in e
            ? e.contains(t)
            : e.compareDocumentPosition
            ? !!(e.compareDocumentPosition(t) & 16)
            : !1
        : !1
}
function dp() {
    for (var e = window, t = Bl(); t instanceof e.HTMLIFrameElement; ) {
        try {
            var n = typeof t.contentWindow.location.href == 'string'
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow
        else break
        t = Bl(e.document)
    }
    return t
}
function uu(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase()
    return (
        t &&
        ((t === 'input' &&
            (e.type === 'text' ||
                e.type === 'search' ||
                e.type === 'tel' ||
                e.type === 'url' ||
                e.type === 'password')) ||
            t === 'textarea' ||
            e.contentEditable === 'true')
    )
}
function _v(e) {
    var t = dp(),
        n = e.focusedElem,
        r = e.selectionRange
    if (
        t !== n &&
        n &&
        n.ownerDocument &&
        cp(n.ownerDocument.documentElement, n)
    ) {
        if (r !== null && uu(n)) {
            if (
                ((t = r.start),
                (e = r.end),
                e === void 0 && (e = t),
                'selectionStart' in n)
            )
                (n.selectionStart = t),
                    (n.selectionEnd = Math.min(e, n.value.length))
            else if (
                ((e =
                    ((t = n.ownerDocument || document) && t.defaultView) ||
                    window),
                e.getSelection)
            ) {
                e = e.getSelection()
                var i = n.textContent.length,
                    l = Math.min(r.start, i)
                ;(r = r.end === void 0 ? l : Math.min(r.end, i)),
                    !e.extend && l > r && ((i = r), (r = l), (l = i)),
                    (i = Ac(n, l))
                var o = Ac(n, r)
                i &&
                    o &&
                    (e.rangeCount !== 1 ||
                        e.anchorNode !== i.node ||
                        e.anchorOffset !== i.offset ||
                        e.focusNode !== o.node ||
                        e.focusOffset !== o.offset) &&
                    ((t = t.createRange()),
                    t.setStart(i.node, i.offset),
                    e.removeAllRanges(),
                    l > r
                        ? (e.addRange(t), e.extend(o.node, o.offset))
                        : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; (e = e.parentNode); )
            e.nodeType === 1 &&
                t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for (
            typeof n.focus == 'function' && n.focus(), n = 0;
            n < t.length;
            n++
        )
            (e = t[n]),
                (e.element.scrollLeft = e.left),
                (e.element.scrollTop = e.top)
    }
}
var Mv = Kt && 'documentMode' in document && 11 >= document.documentMode,
    mr = null,
    la = null,
    mi = null,
    oa = !1
function Fc(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument
    oa ||
        mr == null ||
        mr !== Bl(r) ||
        ((r = mr),
        'selectionStart' in r && uu(r)
            ? (r = { start: r.selectionStart, end: r.selectionEnd })
            : ((r = (
                  (r.ownerDocument && r.ownerDocument.defaultView) ||
                  window
              ).getSelection()),
              (r = {
                  anchorNode: r.anchorNode,
                  anchorOffset: r.anchorOffset,
                  focusNode: r.focusNode,
                  focusOffset: r.focusOffset,
              })),
        (mi && ki(mi, r)) ||
            ((mi = r),
            (r = Ql(la, 'onSelect')),
            0 < r.length &&
                ((t = new ou('onSelect', 'select', null, t, n)),
                e.push({ event: t, listeners: r }),
                (t.target = mr))))
}
function ml(e, t) {
    var n = {}
    return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
    )
}
var hr = {
        animationend: ml('Animation', 'AnimationEnd'),
        animationiteration: ml('Animation', 'AnimationIteration'),
        animationstart: ml('Animation', 'AnimationStart'),
        transitionend: ml('Transition', 'TransitionEnd'),
    },
    cs = {},
    fp = {}
Kt &&
    ((fp = document.createElement('div').style),
    'AnimationEvent' in window ||
        (delete hr.animationend.animation,
        delete hr.animationiteration.animation,
        delete hr.animationstart.animation),
    'TransitionEvent' in window || delete hr.transitionend.transition)
function _o(e) {
    if (cs[e]) return cs[e]
    if (!hr[e]) return e
    var t = hr[e],
        n
    for (n in t) if (t.hasOwnProperty(n) && n in fp) return (cs[e] = t[n])
    return e
}
var pp = _o('animationend'),
    mp = _o('animationiteration'),
    hp = _o('animationstart'),
    gp = _o('transitionend'),
    vp = new Map(),
    Bc =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
            ' '
        )
function kn(e, t) {
    vp.set(e, t), nr(t, [e])
}
for (var ds = 0; ds < Bc.length; ds++) {
    var fs = Bc[ds],
        kv = fs.toLowerCase(),
        Lv = fs[0].toUpperCase() + fs.slice(1)
    kn(kv, 'on' + Lv)
}
kn(pp, 'onAnimationEnd')
kn(mp, 'onAnimationIteration')
kn(hp, 'onAnimationStart')
kn('dblclick', 'onDoubleClick')
kn('focusin', 'onFocus')
kn('focusout', 'onBlur')
kn(gp, 'onTransitionEnd')
Nr('onMouseEnter', ['mouseout', 'mouseover'])
Nr('onMouseLeave', ['mouseout', 'mouseover'])
Nr('onPointerEnter', ['pointerout', 'pointerover'])
Nr('onPointerLeave', ['pointerout', 'pointerover'])
nr(
    'onChange',
    'change click focusin focusout input keydown keyup selectionchange'.split(
        ' '
    )
)
nr(
    'onSelect',
    'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
        ' '
    )
)
nr('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste'])
nr(
    'onCompositionEnd',
    'compositionend focusout keydown keypress keyup mousedown'.split(' ')
)
nr(
    'onCompositionStart',
    'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
)
nr(
    'onCompositionUpdate',
    'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
)
var si =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
            ' '
        ),
    Nv = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(si)
    )
function $c(e, t, n) {
    var r = e.type || 'unknown-event'
    ;(e.currentTarget = n), kg(r, t, void 0, e), (e.currentTarget = null)
}
function yp(e, t) {
    t = (t & 4) !== 0
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            i = r.event
        r = r.listeners
        e: {
            var l = void 0
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var s = r[o],
                        a = s.instance,
                        u = s.currentTarget
                    if (((s = s.listener), a !== l && i.isPropagationStopped()))
                        break e
                    $c(i, s, u), (l = a)
                }
            else
                for (o = 0; o < r.length; o++) {
                    if (
                        ((s = r[o]),
                        (a = s.instance),
                        (u = s.currentTarget),
                        (s = s.listener),
                        a !== l && i.isPropagationStopped())
                    )
                        break e
                    $c(i, s, u), (l = a)
                }
        }
    }
    if (Gl) throw ((e = ta), (Gl = !1), (ta = null), e)
}
function pe(e, t) {
    var n = t[da]
    n === void 0 && (n = t[da] = new Set())
    var r = e + '__bubble'
    n.has(r) || (wp(t, e, 2, !1), n.add(r))
}
function ps(e, t, n) {
    var r = 0
    t && (r |= 4), wp(n, e, r, t)
}
var hl = '_reactListening' + Math.random().toString(36).slice(2)
function Li(e) {
    if (!e[hl]) {
        ;(e[hl] = !0),
            _f.forEach(function (n) {
                n !== 'selectionchange' &&
                    (Nv.has(n) || ps(n, !1, e), ps(n, !0, e))
            })
        var t = e.nodeType === 9 ? e : e.ownerDocument
        t === null || t[hl] || ((t[hl] = !0), ps('selectionchange', !1, t))
    }
}
function wp(e, t, n, r) {
    switch (np(t)) {
        case 1:
            var i = Hg
            break
        case 4:
            i = Vg
            break
        default:
            i = iu
    }
    ;(n = i.bind(null, t, n, e)),
        (i = void 0),
        !ea ||
            (t !== 'touchstart' && t !== 'touchmove' && t !== 'wheel') ||
            (i = !0),
        r
            ? i !== void 0
                ? e.addEventListener(t, n, { capture: !0, passive: i })
                : e.addEventListener(t, n, !0)
            : i !== void 0
            ? e.addEventListener(t, n, { passive: i })
            : e.addEventListener(t, n, !1)
}
function ms(e, t, n, r, i) {
    var l = r
    if (!(t & 1) && !(t & 2) && r !== null)
        e: for (;;) {
            if (r === null) return
            var o = r.tag
            if (o === 3 || o === 4) {
                var s = r.stateNode.containerInfo
                if (s === i || (s.nodeType === 8 && s.parentNode === i)) break
                if (o === 4)
                    for (o = r.return; o !== null; ) {
                        var a = o.tag
                        if (
                            (a === 3 || a === 4) &&
                            ((a = o.stateNode.containerInfo),
                            a === i || (a.nodeType === 8 && a.parentNode === i))
                        )
                            return
                        o = o.return
                    }
                for (; s !== null; ) {
                    if (((o = Fn(s)), o === null)) return
                    if (((a = o.tag), a === 5 || a === 6)) {
                        r = l = o
                        continue e
                    }
                    s = s.parentNode
                }
            }
            r = r.return
        }
    Gf(function () {
        var u = l,
            c = eu(n),
            d = []
        e: {
            var m = vp.get(e)
            if (m !== void 0) {
                var v = ou,
                    g = e
                switch (e) {
                    case 'keypress':
                        if (Nl(n) === 0) break e
                    case 'keydown':
                    case 'keyup':
                        v = ov
                        break
                    case 'focusin':
                        ;(g = 'focus'), (v = ss)
                        break
                    case 'focusout':
                        ;(g = 'blur'), (v = ss)
                        break
                    case 'beforeblur':
                    case 'afterblur':
                        v = ss
                        break
                    case 'click':
                        if (n.button === 2) break e
                    case 'auxclick':
                    case 'dblclick':
                    case 'mousedown':
                    case 'mousemove':
                    case 'mouseup':
                    case 'mouseout':
                    case 'mouseover':
                    case 'contextmenu':
                        v = Lc
                        break
                    case 'drag':
                    case 'dragend':
                    case 'dragenter':
                    case 'dragexit':
                    case 'dragleave':
                    case 'dragover':
                    case 'dragstart':
                    case 'drop':
                        v = Kg
                        break
                    case 'touchcancel':
                    case 'touchend':
                    case 'touchmove':
                    case 'touchstart':
                        v = uv
                        break
                    case pp:
                    case mp:
                    case hp:
                        v = qg
                        break
                    case gp:
                        v = dv
                        break
                    case 'scroll':
                        v = Wg
                        break
                    case 'wheel':
                        v = pv
                        break
                    case 'copy':
                    case 'cut':
                    case 'paste':
                        v = Zg
                        break
                    case 'gotpointercapture':
                    case 'lostpointercapture':
                    case 'pointercancel':
                    case 'pointerdown':
                    case 'pointermove':
                    case 'pointerout':
                    case 'pointerover':
                    case 'pointerup':
                        v = Oc
                }
                var y = (t & 4) !== 0,
                    C = !y && e === 'scroll',
                    f = y ? (m !== null ? m + 'Capture' : null) : m
                y = []
                for (var p = u, h; p !== null; ) {
                    h = p
                    var w = h.stateNode
                    if (
                        (h.tag === 5 &&
                            w !== null &&
                            ((h = w),
                            f !== null &&
                                ((w = Ci(p, f)),
                                w != null && y.push(Ni(p, w, h)))),
                        C)
                    )
                        break
                    p = p.return
                }
                0 < y.length &&
                    ((m = new v(m, g, null, n, c)),
                    d.push({ event: m, listeners: y }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (
                    ((m = e === 'mouseover' || e === 'pointerover'),
                    (v = e === 'mouseout' || e === 'pointerout'),
                    m &&
                        n !== Js &&
                        (g = n.relatedTarget || n.fromElement) &&
                        (Fn(g) || g[Yt]))
                )
                    break e
                if (
                    (v || m) &&
                    ((m =
                        c.window === c
                            ? c
                            : (m = c.ownerDocument)
                            ? m.defaultView || m.parentWindow
                            : window),
                    v
                        ? ((g = n.relatedTarget || n.toElement),
                          (v = u),
                          (g = g ? Fn(g) : null),
                          g !== null &&
                              ((C = rr(g)),
                              g !== C || (g.tag !== 5 && g.tag !== 6)) &&
                              (g = null))
                        : ((v = null), (g = u)),
                    v !== g)
                ) {
                    if (
                        ((y = Lc),
                        (w = 'onMouseLeave'),
                        (f = 'onMouseEnter'),
                        (p = 'mouse'),
                        (e === 'pointerout' || e === 'pointerover') &&
                            ((y = Oc),
                            (w = 'onPointerLeave'),
                            (f = 'onPointerEnter'),
                            (p = 'pointer')),
                        (C = v == null ? m : gr(v)),
                        (h = g == null ? m : gr(g)),
                        (m = new y(w, p + 'leave', v, n, c)),
                        (m.target = C),
                        (m.relatedTarget = h),
                        (w = null),
                        Fn(c) === u &&
                            ((y = new y(f, p + 'enter', g, n, c)),
                            (y.target = h),
                            (y.relatedTarget = C),
                            (w = y)),
                        (C = w),
                        v && g)
                    )
                        t: {
                            for (y = v, f = g, p = 0, h = y; h; h = ur(h)) p++
                            for (h = 0, w = f; w; w = ur(w)) h++
                            for (; 0 < p - h; ) (y = ur(y)), p--
                            for (; 0 < h - p; ) (f = ur(f)), h--
                            for (; p--; ) {
                                if (
                                    y === f ||
                                    (f !== null && y === f.alternate)
                                )
                                    break t
                                ;(y = ur(y)), (f = ur(f))
                            }
                            y = null
                        }
                    else y = null
                    v !== null && Gc(d, m, v, y, !1),
                        g !== null && C !== null && Gc(d, C, g, y, !0)
                }
            }
            e: {
                if (
                    ((m = u ? gr(u) : window),
                    (v = m.nodeName && m.nodeName.toLowerCase()),
                    v === 'select' || (v === 'input' && m.type === 'file'))
                )
                    var T = Sv
                else if (Rc(m))
                    if (ap) T = Tv
                    else {
                        T = Ev
                        var S = xv
                    }
                else
                    (v = m.nodeName) &&
                        v.toLowerCase() === 'input' &&
                        (m.type === 'checkbox' || m.type === 'radio') &&
                        (T = Cv)
                if (T && (T = T(e, u))) {
                    sp(d, T, n, c)
                    break e
                }
                S && S(e, m, u),
                    e === 'focusout' &&
                        (S = m._wrapperState) &&
                        S.controlled &&
                        m.type === 'number' &&
                        Qs(m, 'number', m.value)
            }
            switch (((S = u ? gr(u) : window), e)) {
                case 'focusin':
                    ;(Rc(S) || S.contentEditable === 'true') &&
                        ((mr = S), (la = u), (mi = null))
                    break
                case 'focusout':
                    mi = la = mr = null
                    break
                case 'mousedown':
                    oa = !0
                    break
                case 'contextmenu':
                case 'mouseup':
                case 'dragend':
                    ;(oa = !1), Fc(d, n, c)
                    break
                case 'selectionchange':
                    if (Mv) break
                case 'keydown':
                case 'keyup':
                    Fc(d, n, c)
            }
            var R
            if (au)
                e: {
                    switch (e) {
                        case 'compositionstart':
                            var M = 'onCompositionStart'
                            break e
                        case 'compositionend':
                            M = 'onCompositionEnd'
                            break e
                        case 'compositionupdate':
                            M = 'onCompositionUpdate'
                            break e
                    }
                    M = void 0
                }
            else
                pr
                    ? lp(e, n) && (M = 'onCompositionEnd')
                    : e === 'keydown' &&
                      n.keyCode === 229 &&
                      (M = 'onCompositionStart')
            M &&
                (ip &&
                    n.locale !== 'ko' &&
                    (pr || M !== 'onCompositionStart'
                        ? M === 'onCompositionEnd' && pr && (R = rp())
                        : ((pn = c),
                          (lu = 'value' in pn ? pn.value : pn.textContent),
                          (pr = !0))),
                (S = Ql(u, M)),
                0 < S.length &&
                    ((M = new Nc(M, e, null, n, c)),
                    d.push({ event: M, listeners: S }),
                    R
                        ? (M.data = R)
                        : ((R = op(n)), R !== null && (M.data = R)))),
                (R = hv ? gv(e, n) : vv(e, n)) &&
                    ((u = Ql(u, 'onBeforeInput')),
                    0 < u.length &&
                        ((c = new Nc(
                            'onBeforeInput',
                            'beforeinput',
                            null,
                            n,
                            c
                        )),
                        d.push({ event: c, listeners: u }),
                        (c.data = R)))
        }
        yp(d, t)
    })
}
function Ni(e, t, n) {
    return { instance: e, listener: t, currentTarget: n }
}
function Ql(e, t) {
    for (var n = t + 'Capture', r = []; e !== null; ) {
        var i = e,
            l = i.stateNode
        i.tag === 5 &&
            l !== null &&
            ((i = l),
            (l = Ci(e, n)),
            l != null && r.unshift(Ni(e, l, i)),
            (l = Ci(e, t)),
            l != null && r.push(Ni(e, l, i))),
            (e = e.return)
    }
    return r
}
function ur(e) {
    if (e === null) return null
    do e = e.return
    while (e && e.tag !== 5)
    return e || null
}
function Gc(e, t, n, r, i) {
    for (var l = t._reactName, o = []; n !== null && n !== r; ) {
        var s = n,
            a = s.alternate,
            u = s.stateNode
        if (a !== null && a === r) break
        s.tag === 5 &&
            u !== null &&
            ((s = u),
            i
                ? ((a = Ci(n, l)), a != null && o.unshift(Ni(n, a, s)))
                : i || ((a = Ci(n, l)), a != null && o.push(Ni(n, a, s)))),
            (n = n.return)
    }
    o.length !== 0 && e.push({ event: t, listeners: o })
}
var Ov = /\r\n?/g,
    Iv = /\u0000|\uFFFD/g
function Uc(e) {
    return (typeof e == 'string' ? e : '' + e)
        .replace(
            Ov,
            `
`
        )
        .replace(Iv, '')
}
function gl(e, t, n) {
    if (((t = Uc(t)), Uc(e) !== t && n)) throw Error(B(425))
}
function Kl() {}
var sa = null,
    aa = null
function ua(e, t) {
    return (
        e === 'textarea' ||
        e === 'noscript' ||
        typeof t.children == 'string' ||
        typeof t.children == 'number' ||
        (typeof t.dangerouslySetInnerHTML == 'object' &&
            t.dangerouslySetInnerHTML !== null &&
            t.dangerouslySetInnerHTML.__html != null)
    )
}
var ca = typeof setTimeout == 'function' ? setTimeout : void 0,
    bv = typeof clearTimeout == 'function' ? clearTimeout : void 0,
    Hc = typeof Promise == 'function' ? Promise : void 0,
    Rv =
        typeof queueMicrotask == 'function'
            ? queueMicrotask
            : typeof Hc < 'u'
            ? function (e) {
                  return Hc.resolve(null).then(e).catch(Dv)
              }
            : ca
function Dv(e) {
    setTimeout(function () {
        throw e
    })
}
function hs(e, t) {
    var n = t,
        r = 0
    do {
        var i = n.nextSibling
        if ((e.removeChild(n), i && i.nodeType === 8))
            if (((n = i.data), n === '/$')) {
                if (r === 0) {
                    e.removeChild(i), _i(t)
                    return
                }
                r--
            } else (n !== '$' && n !== '$?' && n !== '$!') || r++
        n = i
    } while (n)
    _i(t)
}
function Sn(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType
        if (t === 1 || t === 3) break
        if (t === 8) {
            if (((t = e.data), t === '$' || t === '$!' || t === '$?')) break
            if (t === '/$') return null
        }
    }
    return e
}
function Vc(e) {
    e = e.previousSibling
    for (var t = 0; e; ) {
        if (e.nodeType === 8) {
            var n = e.data
            if (n === '$' || n === '$!' || n === '$?') {
                if (t === 0) return e
                t--
            } else n === '/$' && t++
        }
        e = e.previousSibling
    }
    return null
}
var Ur = Math.random().toString(36).slice(2),
    Rt = '__reactFiber$' + Ur,
    Oi = '__reactProps$' + Ur,
    Yt = '__reactContainer$' + Ur,
    da = '__reactEvents$' + Ur,
    zv = '__reactListeners$' + Ur,
    jv = '__reactHandles$' + Ur
function Fn(e) {
    var t = e[Rt]
    if (t) return t
    for (var n = e.parentNode; n; ) {
        if ((t = n[Yt] || n[Rt])) {
            if (
                ((n = t.alternate),
                t.child !== null || (n !== null && n.child !== null))
            )
                for (e = Vc(e); e !== null; ) {
                    if ((n = e[Rt])) return n
                    e = Vc(e)
                }
            return t
        }
        ;(e = n), (n = e.parentNode)
    }
    return null
}
function Qi(e) {
    return (
        (e = e[Rt] || e[Yt]),
        !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3)
            ? null
            : e
    )
}
function gr(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode
    throw Error(B(33))
}
function Mo(e) {
    return e[Oi] || null
}
var fa = [],
    vr = -1
function Ln(e) {
    return { current: e }
}
function me(e) {
    0 > vr || ((e.current = fa[vr]), (fa[vr] = null), vr--)
}
function fe(e, t) {
    vr++, (fa[vr] = e.current), (e.current = t)
}
var _n = {},
    Ge = Ln(_n),
    Je = Ln(!1),
    Wn = _n
function Or(e, t) {
    var n = e.type.contextTypes
    if (!n) return _n
    var r = e.stateNode
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext
    var i = {},
        l
    for (l in n) i[l] = t[l]
    return (
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = t),
            (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
    )
}
function Ze(e) {
    return (e = e.childContextTypes), e != null
}
function Yl() {
    me(Je), me(Ge)
}
function Wc(e, t, n) {
    if (Ge.current !== _n) throw Error(B(168))
    fe(Ge, t), fe(Je, n)
}
function Sp(e, t, n) {
    var r = e.stateNode
    if (((t = t.childContextTypes), typeof r.getChildContext != 'function'))
        return n
    r = r.getChildContext()
    for (var i in r) if (!(i in t)) throw Error(B(108, xg(e) || 'Unknown', i))
    return we({}, n, r)
}
function Xl(e) {
    return (
        (e =
            ((e = e.stateNode) &&
                e.__reactInternalMemoizedMergedChildContext) ||
            _n),
        (Wn = Ge.current),
        fe(Ge, e),
        fe(Je, Je.current),
        !0
    )
}
function Qc(e, t, n) {
    var r = e.stateNode
    if (!r) throw Error(B(169))
    n
        ? ((e = Sp(e, t, Wn)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          me(Je),
          me(Ge),
          fe(Ge, e))
        : me(Je),
        fe(Je, n)
}
var Gt = null,
    ko = !1,
    gs = !1
function xp(e) {
    Gt === null ? (Gt = [e]) : Gt.push(e)
}
function Av(e) {
    ;(ko = !0), xp(e)
}
function Nn() {
    if (!gs && Gt !== null) {
        gs = !0
        var e = 0,
            t = se
        try {
            var n = Gt
            for (se = 1; e < n.length; e++) {
                var r = n[e]
                do r = r(!0)
                while (r !== null)
            }
            ;(Gt = null), (ko = !1)
        } catch (i) {
            throw (Gt !== null && (Gt = Gt.slice(e + 1)), Wf(tu, Nn), i)
        } finally {
            ;(se = t), (gs = !1)
        }
    }
    return null
}
var yr = [],
    wr = 0,
    ql = null,
    Jl = 0,
    ht = [],
    gt = 0,
    Qn = null,
    Ht = 1,
    Vt = ''
function Rn(e, t) {
    ;(yr[wr++] = Jl), (yr[wr++] = ql), (ql = e), (Jl = t)
}
function Ep(e, t, n) {
    ;(ht[gt++] = Ht), (ht[gt++] = Vt), (ht[gt++] = Qn), (Qn = e)
    var r = Ht
    e = Vt
    var i = 32 - Mt(r) - 1
    ;(r &= ~(1 << i)), (n += 1)
    var l = 32 - Mt(t) + i
    if (30 < l) {
        var o = i - (i % 5)
        ;(l = (r & ((1 << o) - 1)).toString(32)),
            (r >>= o),
            (i -= o),
            (Ht = (1 << (32 - Mt(t) + i)) | (n << i) | r),
            (Vt = l + e)
    } else (Ht = (1 << l) | (n << i) | r), (Vt = e)
}
function cu(e) {
    e.return !== null && (Rn(e, 1), Ep(e, 1, 0))
}
function du(e) {
    for (; e === ql; )
        (ql = yr[--wr]), (yr[wr] = null), (Jl = yr[--wr]), (yr[wr] = null)
    for (; e === Qn; )
        (Qn = ht[--gt]),
            (ht[gt] = null),
            (Vt = ht[--gt]),
            (ht[gt] = null),
            (Ht = ht[--gt]),
            (ht[gt] = null)
}
var at = null,
    ot = null,
    he = !1,
    Pt = null
function Cp(e, t) {
    var n = vt(5, null, null, 0)
    ;(n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        (t = e.deletions),
        t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n)
}
function Kc(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type
            return (
                (t =
                    t.nodeType !== 1 ||
                    n.toLowerCase() !== t.nodeName.toLowerCase()
                        ? null
                        : t),
                t !== null
                    ? ((e.stateNode = t), (at = e), (ot = Sn(t.firstChild)), !0)
                    : !1
            )
        case 6:
            return (
                (t = e.pendingProps === '' || t.nodeType !== 3 ? null : t),
                t !== null ? ((e.stateNode = t), (at = e), (ot = null), !0) : !1
            )
        case 13:
            return (
                (t = t.nodeType !== 8 ? null : t),
                t !== null
                    ? ((n = Qn !== null ? { id: Ht, overflow: Vt } : null),
                      (e.memoizedState = {
                          dehydrated: t,
                          treeContext: n,
                          retryLane: 1073741824,
                      }),
                      (n = vt(18, null, null, 0)),
                      (n.stateNode = t),
                      (n.return = e),
                      (e.child = n),
                      (at = e),
                      (ot = null),
                      !0)
                    : !1
            )
        default:
            return !1
    }
}
function pa(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}
function ma(e) {
    if (he) {
        var t = ot
        if (t) {
            var n = t
            if (!Kc(e, t)) {
                if (pa(e)) throw Error(B(418))
                t = Sn(n.nextSibling)
                var r = at
                t && Kc(e, t)
                    ? Cp(r, n)
                    : ((e.flags = (e.flags & -4097) | 2), (he = !1), (at = e))
            }
        } else {
            if (pa(e)) throw Error(B(418))
            ;(e.flags = (e.flags & -4097) | 2), (he = !1), (at = e)
        }
    }
}
function Yc(e) {
    for (
        e = e.return;
        e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;

    )
        e = e.return
    at = e
}
function vl(e) {
    if (e !== at) return !1
    if (!he) return Yc(e), (he = !0), !1
    var t
    if (
        ((t = e.tag !== 3) &&
            !(t = e.tag !== 5) &&
            ((t = e.type),
            (t = t !== 'head' && t !== 'body' && !ua(e.type, e.memoizedProps))),
        t && (t = ot))
    ) {
        if (pa(e)) throw (Tp(), Error(B(418)))
        for (; t; ) Cp(e, t), (t = Sn(t.nextSibling))
    }
    if ((Yc(e), e.tag === 13)) {
        if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
            throw Error(B(317))
        e: {
            for (e = e.nextSibling, t = 0; e; ) {
                if (e.nodeType === 8) {
                    var n = e.data
                    if (n === '/$') {
                        if (t === 0) {
                            ot = Sn(e.nextSibling)
                            break e
                        }
                        t--
                    } else (n !== '$' && n !== '$!' && n !== '$?') || t++
                }
                e = e.nextSibling
            }
            ot = null
        }
    } else ot = at ? Sn(e.stateNode.nextSibling) : null
    return !0
}
function Tp() {
    for (var e = ot; e; ) e = Sn(e.nextSibling)
}
function Ir() {
    ;(ot = at = null), (he = !1)
}
function fu(e) {
    Pt === null ? (Pt = [e]) : Pt.push(e)
}
var Fv = en.ReactCurrentBatchConfig
function Jr(e, t, n) {
    if (
        ((e = n.ref),
        e !== null && typeof e != 'function' && typeof e != 'object')
    ) {
        if (n._owner) {
            if (((n = n._owner), n)) {
                if (n.tag !== 1) throw Error(B(309))
                var r = n.stateNode
            }
            if (!r) throw Error(B(147, e))
            var i = r,
                l = '' + e
            return t !== null &&
                t.ref !== null &&
                typeof t.ref == 'function' &&
                t.ref._stringRef === l
                ? t.ref
                : ((t = function (o) {
                      var s = i.refs
                      o === null ? delete s[l] : (s[l] = o)
                  }),
                  (t._stringRef = l),
                  t)
        }
        if (typeof e != 'string') throw Error(B(284))
        if (!n._owner) throw Error(B(290, e))
    }
    return e
}
function yl(e, t) {
    throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
            B(
                31,
                e === '[object Object]'
                    ? 'object with keys {' + Object.keys(t).join(', ') + '}'
                    : e
            )
        ))
    )
}
function Xc(e) {
    var t = e._init
    return t(e._payload)
}
function Pp(e) {
    function t(f, p) {
        if (e) {
            var h = f.deletions
            h === null ? ((f.deletions = [p]), (f.flags |= 16)) : h.push(p)
        }
    }
    function n(f, p) {
        if (!e) return null
        for (; p !== null; ) t(f, p), (p = p.sibling)
        return null
    }
    function r(f, p) {
        for (f = new Map(); p !== null; )
            p.key !== null ? f.set(p.key, p) : f.set(p.index, p),
                (p = p.sibling)
        return f
    }
    function i(f, p) {
        return (f = Tn(f, p)), (f.index = 0), (f.sibling = null), f
    }
    function l(f, p, h) {
        return (
            (f.index = h),
            e
                ? ((h = f.alternate),
                  h !== null
                      ? ((h = h.index), h < p ? ((f.flags |= 2), p) : h)
                      : ((f.flags |= 2), p))
                : ((f.flags |= 1048576), p)
        )
    }
    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }
    function s(f, p, h, w) {
        return p === null || p.tag !== 6
            ? ((p = Cs(h, f.mode, w)), (p.return = f), p)
            : ((p = i(p, h)), (p.return = f), p)
    }
    function a(f, p, h, w) {
        var T = h.type
        return T === fr
            ? c(f, p, h.props.children, w, h.key)
            : p !== null &&
              (p.elementType === T ||
                  (typeof T == 'object' &&
                      T !== null &&
                      T.$$typeof === un &&
                      Xc(T) === p.type))
            ? ((w = i(p, h.props)), (w.ref = Jr(f, p, h)), (w.return = f), w)
            : ((w = jl(h.type, h.key, h.props, null, f.mode, w)),
              (w.ref = Jr(f, p, h)),
              (w.return = f),
              w)
    }
    function u(f, p, h, w) {
        return p === null ||
            p.tag !== 4 ||
            p.stateNode.containerInfo !== h.containerInfo ||
            p.stateNode.implementation !== h.implementation
            ? ((p = Ts(h, f.mode, w)), (p.return = f), p)
            : ((p = i(p, h.children || [])), (p.return = f), p)
    }
    function c(f, p, h, w, T) {
        return p === null || p.tag !== 7
            ? ((p = Vn(h, f.mode, w, T)), (p.return = f), p)
            : ((p = i(p, h)), (p.return = f), p)
    }
    function d(f, p, h) {
        if ((typeof p == 'string' && p !== '') || typeof p == 'number')
            return (p = Cs('' + p, f.mode, h)), (p.return = f), p
        if (typeof p == 'object' && p !== null) {
            switch (p.$$typeof) {
                case sl:
                    return (
                        (h = jl(p.type, p.key, p.props, null, f.mode, h)),
                        (h.ref = Jr(f, null, p)),
                        (h.return = f),
                        h
                    )
                case dr:
                    return (p = Ts(p, f.mode, h)), (p.return = f), p
                case un:
                    var w = p._init
                    return d(f, w(p._payload), h)
            }
            if (li(p) || Qr(p))
                return (p = Vn(p, f.mode, h, null)), (p.return = f), p
            yl(f, p)
        }
        return null
    }
    function m(f, p, h, w) {
        var T = p !== null ? p.key : null
        if ((typeof h == 'string' && h !== '') || typeof h == 'number')
            return T !== null ? null : s(f, p, '' + h, w)
        if (typeof h == 'object' && h !== null) {
            switch (h.$$typeof) {
                case sl:
                    return h.key === T ? a(f, p, h, w) : null
                case dr:
                    return h.key === T ? u(f, p, h, w) : null
                case un:
                    return (T = h._init), m(f, p, T(h._payload), w)
            }
            if (li(h) || Qr(h)) return T !== null ? null : c(f, p, h, w, null)
            yl(f, h)
        }
        return null
    }
    function v(f, p, h, w, T) {
        if ((typeof w == 'string' && w !== '') || typeof w == 'number')
            return (f = f.get(h) || null), s(p, f, '' + w, T)
        if (typeof w == 'object' && w !== null) {
            switch (w.$$typeof) {
                case sl:
                    return (
                        (f = f.get(w.key === null ? h : w.key) || null),
                        a(p, f, w, T)
                    )
                case dr:
                    return (
                        (f = f.get(w.key === null ? h : w.key) || null),
                        u(p, f, w, T)
                    )
                case un:
                    var S = w._init
                    return v(f, p, h, S(w._payload), T)
            }
            if (li(w) || Qr(w))
                return (f = f.get(h) || null), c(p, f, w, T, null)
            yl(p, w)
        }
        return null
    }
    function g(f, p, h, w) {
        for (
            var T = null, S = null, R = p, M = (p = 0), O = null;
            R !== null && M < h.length;
            M++
        ) {
            R.index > M ? ((O = R), (R = null)) : (O = R.sibling)
            var k = m(f, R, h[M], w)
            if (k === null) {
                R === null && (R = O)
                break
            }
            e && R && k.alternate === null && t(f, R),
                (p = l(k, p, M)),
                S === null ? (T = k) : (S.sibling = k),
                (S = k),
                (R = O)
        }
        if (M === h.length) return n(f, R), he && Rn(f, M), T
        if (R === null) {
            for (; M < h.length; M++)
                (R = d(f, h[M], w)),
                    R !== null &&
                        ((p = l(R, p, M)),
                        S === null ? (T = R) : (S.sibling = R),
                        (S = R))
            return he && Rn(f, M), T
        }
        for (R = r(f, R); M < h.length; M++)
            (O = v(R, f, M, h[M], w)),
                O !== null &&
                    (e &&
                        O.alternate !== null &&
                        R.delete(O.key === null ? M : O.key),
                    (p = l(O, p, M)),
                    S === null ? (T = O) : (S.sibling = O),
                    (S = O))
        return (
            e &&
                R.forEach(function (A) {
                    return t(f, A)
                }),
            he && Rn(f, M),
            T
        )
    }
    function y(f, p, h, w) {
        var T = Qr(h)
        if (typeof T != 'function') throw Error(B(150))
        if (((h = T.call(h)), h == null)) throw Error(B(151))
        for (
            var S = (T = null), R = p, M = (p = 0), O = null, k = h.next();
            R !== null && !k.done;
            M++, k = h.next()
        ) {
            R.index > M ? ((O = R), (R = null)) : (O = R.sibling)
            var A = m(f, R, k.value, w)
            if (A === null) {
                R === null && (R = O)
                break
            }
            e && R && A.alternate === null && t(f, R),
                (p = l(A, p, M)),
                S === null ? (T = A) : (S.sibling = A),
                (S = A),
                (R = O)
        }
        if (k.done) return n(f, R), he && Rn(f, M), T
        if (R === null) {
            for (; !k.done; M++, k = h.next())
                (k = d(f, k.value, w)),
                    k !== null &&
                        ((p = l(k, p, M)),
                        S === null ? (T = k) : (S.sibling = k),
                        (S = k))
            return he && Rn(f, M), T
        }
        for (R = r(f, R); !k.done; M++, k = h.next())
            (k = v(R, f, M, k.value, w)),
                k !== null &&
                    (e &&
                        k.alternate !== null &&
                        R.delete(k.key === null ? M : k.key),
                    (p = l(k, p, M)),
                    S === null ? (T = k) : (S.sibling = k),
                    (S = k))
        return (
            e &&
                R.forEach(function (b) {
                    return t(f, b)
                }),
            he && Rn(f, M),
            T
        )
    }
    function C(f, p, h, w) {
        if (
            (typeof h == 'object' &&
                h !== null &&
                h.type === fr &&
                h.key === null &&
                (h = h.props.children),
            typeof h == 'object' && h !== null)
        ) {
            switch (h.$$typeof) {
                case sl:
                    e: {
                        for (var T = h.key, S = p; S !== null; ) {
                            if (S.key === T) {
                                if (((T = h.type), T === fr)) {
                                    if (S.tag === 7) {
                                        n(f, S.sibling),
                                            (p = i(S, h.props.children)),
                                            (p.return = f),
                                            (f = p)
                                        break e
                                    }
                                } else if (
                                    S.elementType === T ||
                                    (typeof T == 'object' &&
                                        T !== null &&
                                        T.$$typeof === un &&
                                        Xc(T) === S.type)
                                ) {
                                    n(f, S.sibling),
                                        (p = i(S, h.props)),
                                        (p.ref = Jr(f, S, h)),
                                        (p.return = f),
                                        (f = p)
                                    break e
                                }
                                n(f, S)
                                break
                            } else t(f, S)
                            S = S.sibling
                        }
                        h.type === fr
                            ? ((p = Vn(h.props.children, f.mode, w, h.key)),
                              (p.return = f),
                              (f = p))
                            : ((w = jl(
                                  h.type,
                                  h.key,
                                  h.props,
                                  null,
                                  f.mode,
                                  w
                              )),
                              (w.ref = Jr(f, p, h)),
                              (w.return = f),
                              (f = w))
                    }
                    return o(f)
                case dr:
                    e: {
                        for (S = h.key; p !== null; ) {
                            if (p.key === S)
                                if (
                                    p.tag === 4 &&
                                    p.stateNode.containerInfo ===
                                        h.containerInfo &&
                                    p.stateNode.implementation ===
                                        h.implementation
                                ) {
                                    n(f, p.sibling),
                                        (p = i(p, h.children || [])),
                                        (p.return = f),
                                        (f = p)
                                    break e
                                } else {
                                    n(f, p)
                                    break
                                }
                            else t(f, p)
                            p = p.sibling
                        }
                        ;(p = Ts(h, f.mode, w)), (p.return = f), (f = p)
                    }
                    return o(f)
                case un:
                    return (S = h._init), C(f, p, S(h._payload), w)
            }
            if (li(h)) return g(f, p, h, w)
            if (Qr(h)) return y(f, p, h, w)
            yl(f, h)
        }
        return (typeof h == 'string' && h !== '') || typeof h == 'number'
            ? ((h = '' + h),
              p !== null && p.tag === 6
                  ? (n(f, p.sibling), (p = i(p, h)), (p.return = f), (f = p))
                  : (n(f, p), (p = Cs(h, f.mode, w)), (p.return = f), (f = p)),
              o(f))
            : n(f, p)
    }
    return C
}
var br = Pp(!0),
    _p = Pp(!1),
    Zl = Ln(null),
    eo = null,
    Sr = null,
    pu = null
function mu() {
    pu = Sr = eo = null
}
function hu(e) {
    var t = Zl.current
    me(Zl), (e._currentValue = t)
}
function ha(e, t, n) {
    for (; e !== null; ) {
        var r = e.alternate
        if (
            ((e.childLanes & t) !== t
                ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
                : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
            e === n)
        )
            break
        e = e.return
    }
}
function Mr(e, t) {
    ;(eo = e),
        (pu = Sr = null),
        (e = e.dependencies),
        e !== null &&
            e.firstContext !== null &&
            (e.lanes & t && (qe = !0), (e.firstContext = null))
}
function wt(e) {
    var t = e._currentValue
    if (pu !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), Sr === null)) {
            if (eo === null) throw Error(B(308))
            ;(Sr = e), (eo.dependencies = { lanes: 0, firstContext: e })
        } else Sr = Sr.next = e
    return t
}
var Bn = null
function gu(e) {
    Bn === null ? (Bn = [e]) : Bn.push(e)
}
function Mp(e, t, n, r) {
    var i = t.interleaved
    return (
        i === null ? ((n.next = n), gu(t)) : ((n.next = i.next), (i.next = n)),
        (t.interleaved = n),
        Xt(e, r)
    )
}
function Xt(e, t) {
    e.lanes |= t
    var n = e.alternate
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
        (e.childLanes |= t),
            (n = e.alternate),
            n !== null && (n.childLanes |= t),
            (n = e),
            (e = e.return)
    return n.tag === 3 ? n.stateNode : null
}
var cn = !1
function vu(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
    }
}
function kp(e, t) {
    ;(e = e.updateQueue),
        t.updateQueue === e &&
            (t.updateQueue = {
                baseState: e.baseState,
                firstBaseUpdate: e.firstBaseUpdate,
                lastBaseUpdate: e.lastBaseUpdate,
                shared: e.shared,
                effects: e.effects,
            })
}
function Wt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
    }
}
function xn(e, t, n) {
    var r = e.updateQueue
    if (r === null) return null
    if (((r = r.shared), ie & 2)) {
        var i = r.pending
        return (
            i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
            (r.pending = t),
            Xt(e, n)
        )
    }
    return (
        (i = r.interleaved),
        i === null ? ((t.next = t), gu(r)) : ((t.next = i.next), (i.next = t)),
        (r.interleaved = t),
        Xt(e, n)
    )
}
function Ol(e, t, n) {
    if (
        ((t = t.updateQueue),
        t !== null && ((t = t.shared), (n & 4194240) !== 0))
    ) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n)
    }
}
function qc(e, t) {
    var n = e.updateQueue,
        r = e.alternate
    if (r !== null && ((r = r.updateQueue), n === r)) {
        var i = null,
            l = null
        if (((n = n.firstBaseUpdate), n !== null)) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null,
                }
                l === null ? (i = l = o) : (l = l.next = o), (n = n.next)
            } while (n !== null)
            l === null ? (i = l = t) : (l = l.next = t)
        } else i = l = t
        ;(n = {
            baseState: r.baseState,
            firstBaseUpdate: i,
            lastBaseUpdate: l,
            shared: r.shared,
            effects: r.effects,
        }),
            (e.updateQueue = n)
        return
    }
    ;(e = n.lastBaseUpdate),
        e === null ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t)
}
function to(e, t, n, r) {
    var i = e.updateQueue
    cn = !1
    var l = i.firstBaseUpdate,
        o = i.lastBaseUpdate,
        s = i.shared.pending
    if (s !== null) {
        i.shared.pending = null
        var a = s,
            u = a.next
        ;(a.next = null), o === null ? (l = u) : (o.next = u), (o = a)
        var c = e.alternate
        c !== null &&
            ((c = c.updateQueue),
            (s = c.lastBaseUpdate),
            s !== o &&
                (s === null ? (c.firstBaseUpdate = u) : (s.next = u),
                (c.lastBaseUpdate = a)))
    }
    if (l !== null) {
        var d = i.baseState
        ;(o = 0), (c = u = a = null), (s = l)
        do {
            var m = s.lane,
                v = s.eventTime
            if ((r & m) === m) {
                c !== null &&
                    (c = c.next =
                        {
                            eventTime: v,
                            lane: 0,
                            tag: s.tag,
                            payload: s.payload,
                            callback: s.callback,
                            next: null,
                        })
                e: {
                    var g = e,
                        y = s
                    switch (((m = t), (v = n), y.tag)) {
                        case 1:
                            if (((g = y.payload), typeof g == 'function')) {
                                d = g.call(v, d, m)
                                break e
                            }
                            d = g
                            break e
                        case 3:
                            g.flags = (g.flags & -65537) | 128
                        case 0:
                            if (
                                ((g = y.payload),
                                (m =
                                    typeof g == 'function'
                                        ? g.call(v, d, m)
                                        : g),
                                m == null)
                            )
                                break e
                            d = we({}, d, m)
                            break e
                        case 2:
                            cn = !0
                    }
                }
                s.callback !== null &&
                    s.lane !== 0 &&
                    ((e.flags |= 64),
                    (m = i.effects),
                    m === null ? (i.effects = [s]) : m.push(s))
            } else
                (v = {
                    eventTime: v,
                    lane: m,
                    tag: s.tag,
                    payload: s.payload,
                    callback: s.callback,
                    next: null,
                }),
                    c === null ? ((u = c = v), (a = d)) : (c = c.next = v),
                    (o |= m)
            if (((s = s.next), s === null)) {
                if (((s = i.shared.pending), s === null)) break
                ;(m = s),
                    (s = m.next),
                    (m.next = null),
                    (i.lastBaseUpdate = m),
                    (i.shared.pending = null)
            }
        } while (!0)
        if (
            (c === null && (a = d),
            (i.baseState = a),
            (i.firstBaseUpdate = u),
            (i.lastBaseUpdate = c),
            (t = i.shared.interleaved),
            t !== null)
        ) {
            i = t
            do (o |= i.lane), (i = i.next)
            while (i !== t)
        } else l === null && (i.shared.lanes = 0)
        ;(Yn |= o), (e.lanes = o), (e.memoizedState = d)
    }
}
function Jc(e, t, n) {
    if (((e = t.effects), (t.effects = null), e !== null))
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                i = r.callback
            if (i !== null) {
                if (((r.callback = null), (r = n), typeof i != 'function'))
                    throw Error(B(191, i))
                i.call(r)
            }
        }
}
var Ki = {},
    jt = Ln(Ki),
    Ii = Ln(Ki),
    bi = Ln(Ki)
function $n(e) {
    if (e === Ki) throw Error(B(174))
    return e
}
function yu(e, t) {
    switch ((fe(bi, t), fe(Ii, e), fe(jt, Ki), (e = t.nodeType), e)) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : Ys(null, '')
            break
        default:
            ;(e = e === 8 ? t.parentNode : t),
                (t = e.namespaceURI || null),
                (e = e.tagName),
                (t = Ys(t, e))
    }
    me(jt), fe(jt, t)
}
function Rr() {
    me(jt), me(Ii), me(bi)
}
function Lp(e) {
    $n(bi.current)
    var t = $n(jt.current),
        n = Ys(t, e.type)
    t !== n && (fe(Ii, e), fe(jt, n))
}
function wu(e) {
    Ii.current === e && (me(jt), me(Ii))
}
var ve = Ln(0)
function no(e) {
    for (var t = e; t !== null; ) {
        if (t.tag === 13) {
            var n = t.memoizedState
            if (
                n !== null &&
                ((n = n.dehydrated),
                n === null || n.data === '$?' || n.data === '$!')
            )
                return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            ;(t.child.return = t), (t = t.child)
            continue
        }
        if (t === e) break
        for (; t.sibling === null; ) {
            if (t.return === null || t.return === e) return null
            t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
    }
    return null
}
var vs = []
function Su() {
    for (var e = 0; e < vs.length; e++)
        vs[e]._workInProgressVersionPrimary = null
    vs.length = 0
}
var Il = en.ReactCurrentDispatcher,
    ys = en.ReactCurrentBatchConfig,
    Kn = 0,
    ye = null,
    Me = null,
    Ne = null,
    ro = !1,
    hi = !1,
    Ri = 0,
    Bv = 0
function Fe() {
    throw Error(B(321))
}
function xu(e, t) {
    if (t === null) return !1
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!Nt(e[n], t[n])) return !1
    return !0
}
function Eu(e, t, n, r, i, l) {
    if (
        ((Kn = l),
        (ye = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Il.current = e === null || e.memoizedState === null ? Hv : Vv),
        (e = n(r, i)),
        hi)
    ) {
        l = 0
        do {
            if (((hi = !1), (Ri = 0), 25 <= l)) throw Error(B(301))
            ;(l += 1),
                (Ne = Me = null),
                (t.updateQueue = null),
                (Il.current = Wv),
                (e = n(r, i))
        } while (hi)
    }
    if (
        ((Il.current = io),
        (t = Me !== null && Me.next !== null),
        (Kn = 0),
        (Ne = Me = ye = null),
        (ro = !1),
        t)
    )
        throw Error(B(300))
    return e
}
function Cu() {
    var e = Ri !== 0
    return (Ri = 0), e
}
function bt() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
    }
    return Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e), Ne
}
function St() {
    if (Me === null) {
        var e = ye.alternate
        e = e !== null ? e.memoizedState : null
    } else e = Me.next
    var t = Ne === null ? ye.memoizedState : Ne.next
    if (t !== null) (Ne = t), (Me = e)
    else {
        if (e === null) throw Error(B(310))
        ;(Me = e),
            (e = {
                memoizedState: Me.memoizedState,
                baseState: Me.baseState,
                baseQueue: Me.baseQueue,
                queue: Me.queue,
                next: null,
            }),
            Ne === null ? (ye.memoizedState = Ne = e) : (Ne = Ne.next = e)
    }
    return Ne
}
function Di(e, t) {
    return typeof t == 'function' ? t(e) : t
}
function ws(e) {
    var t = St(),
        n = t.queue
    if (n === null) throw Error(B(311))
    n.lastRenderedReducer = e
    var r = Me,
        i = r.baseQueue,
        l = n.pending
    if (l !== null) {
        if (i !== null) {
            var o = i.next
            ;(i.next = l.next), (l.next = o)
        }
        ;(r.baseQueue = i = l), (n.pending = null)
    }
    if (i !== null) {
        ;(l = i.next), (r = r.baseState)
        var s = (o = null),
            a = null,
            u = l
        do {
            var c = u.lane
            if ((Kn & c) === c)
                a !== null &&
                    (a = a.next =
                        {
                            lane: 0,
                            action: u.action,
                            hasEagerState: u.hasEagerState,
                            eagerState: u.eagerState,
                            next: null,
                        }),
                    (r = u.hasEagerState ? u.eagerState : e(r, u.action))
            else {
                var d = {
                    lane: c,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null,
                }
                a === null ? ((s = a = d), (o = r)) : (a = a.next = d),
                    (ye.lanes |= c),
                    (Yn |= c)
            }
            u = u.next
        } while (u !== null && u !== l)
        a === null ? (o = r) : (a.next = s),
            Nt(r, t.memoizedState) || (qe = !0),
            (t.memoizedState = r),
            (t.baseState = o),
            (t.baseQueue = a),
            (n.lastRenderedState = r)
    }
    if (((e = n.interleaved), e !== null)) {
        i = e
        do (l = i.lane), (ye.lanes |= l), (Yn |= l), (i = i.next)
        while (i !== e)
    } else i === null && (n.lanes = 0)
    return [t.memoizedState, n.dispatch]
}
function Ss(e) {
    var t = St(),
        n = t.queue
    if (n === null) throw Error(B(311))
    n.lastRenderedReducer = e
    var r = n.dispatch,
        i = n.pending,
        l = t.memoizedState
    if (i !== null) {
        n.pending = null
        var o = (i = i.next)
        do (l = e(l, o.action)), (o = o.next)
        while (o !== i)
        Nt(l, t.memoizedState) || (qe = !0),
            (t.memoizedState = l),
            t.baseQueue === null && (t.baseState = l),
            (n.lastRenderedState = l)
    }
    return [l, r]
}
function Np() {}
function Op(e, t) {
    var n = ye,
        r = St(),
        i = t(),
        l = !Nt(r.memoizedState, i)
    if (
        (l && ((r.memoizedState = i), (qe = !0)),
        (r = r.queue),
        Tu(Rp.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || l || (Ne !== null && Ne.memoizedState.tag & 1))
    ) {
        if (
            ((n.flags |= 2048),
            zi(9, bp.bind(null, n, r, i, t), void 0, null),
            Oe === null)
        )
            throw Error(B(349))
        Kn & 30 || Ip(n, t, i)
    }
    return i
}
function Ip(e, t, n) {
    ;(e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        (t = ye.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ye.updateQueue = t),
              (t.stores = [e]))
            : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e))
}
function bp(e, t, n, r) {
    ;(t.value = n), (t.getSnapshot = r), Dp(t) && zp(e)
}
function Rp(e, t, n) {
    return n(function () {
        Dp(t) && zp(e)
    })
}
function Dp(e) {
    var t = e.getSnapshot
    e = e.value
    try {
        var n = t()
        return !Nt(e, n)
    } catch {
        return !0
    }
}
function zp(e) {
    var t = Xt(e, 1)
    t !== null && kt(t, e, 1, -1)
}
function Zc(e) {
    var t = bt()
    return (
        typeof e == 'function' && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
            pending: null,
            interleaved: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: Di,
            lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = Uv.bind(null, ye, e)),
        [t.memoizedState, e]
    )
}
function zi(e, t, n, r) {
    return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        (t = ye.updateQueue),
        t === null
            ? ((t = { lastEffect: null, stores: null }),
              (ye.updateQueue = t),
              (t.lastEffect = e.next = e))
            : ((n = t.lastEffect),
              n === null
                  ? (t.lastEffect = e.next = e)
                  : ((r = n.next),
                    (n.next = e),
                    (e.next = r),
                    (t.lastEffect = e))),
        e
    )
}
function jp() {
    return St().memoizedState
}
function bl(e, t, n, r) {
    var i = bt()
    ;(ye.flags |= e),
        (i.memoizedState = zi(1 | t, n, void 0, r === void 0 ? null : r))
}
function Lo(e, t, n, r) {
    var i = St()
    r = r === void 0 ? null : r
    var l = void 0
    if (Me !== null) {
        var o = Me.memoizedState
        if (((l = o.destroy), r !== null && xu(r, o.deps))) {
            i.memoizedState = zi(t, n, l, r)
            return
        }
    }
    ;(ye.flags |= e), (i.memoizedState = zi(1 | t, n, l, r))
}
function ed(e, t) {
    return bl(8390656, 8, e, t)
}
function Tu(e, t) {
    return Lo(2048, 8, e, t)
}
function Ap(e, t) {
    return Lo(4, 2, e, t)
}
function Fp(e, t) {
    return Lo(4, 4, e, t)
}
function Bp(e, t) {
    if (typeof t == 'function')
        return (
            (e = e()),
            t(e),
            function () {
                t(null)
            }
        )
    if (t != null)
        return (
            (e = e()),
            (t.current = e),
            function () {
                t.current = null
            }
        )
}
function $p(e, t, n) {
    return (
        (n = n != null ? n.concat([e]) : null), Lo(4, 4, Bp.bind(null, t, e), n)
    )
}
function Pu() {}
function Gp(e, t) {
    var n = St()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && xu(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e)
}
function Up(e, t) {
    var n = St()
    t = t === void 0 ? null : t
    var r = n.memoizedState
    return r !== null && t !== null && xu(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e)
}
function Hp(e, t, n) {
    return Kn & 21
        ? (Nt(n, t) ||
              ((n = Yf()), (ye.lanes |= n), (Yn |= n), (e.baseState = !0)),
          t)
        : (e.baseState && ((e.baseState = !1), (qe = !0)),
          (e.memoizedState = n))
}
function $v(e, t) {
    var n = se
    ;(se = n !== 0 && 4 > n ? n : 4), e(!0)
    var r = ys.transition
    ys.transition = {}
    try {
        e(!1), t()
    } finally {
        ;(se = n), (ys.transition = r)
    }
}
function Vp() {
    return St().memoizedState
}
function Gv(e, t, n) {
    var r = Cn(e)
    if (
        ((n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }),
        Wp(e))
    )
        Qp(t, n)
    else if (((n = Mp(e, t, n, r)), n !== null)) {
        var i = Qe()
        kt(n, e, r, i), Kp(n, t, r)
    }
}
function Uv(e, t, n) {
    var r = Cn(e),
        i = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null,
        }
    if (Wp(e)) Qp(t, i)
    else {
        var l = e.alternate
        if (
            e.lanes === 0 &&
            (l === null || l.lanes === 0) &&
            ((l = t.lastRenderedReducer), l !== null)
        )
            try {
                var o = t.lastRenderedState,
                    s = l(o, n)
                if (((i.hasEagerState = !0), (i.eagerState = s), Nt(s, o))) {
                    var a = t.interleaved
                    a === null
                        ? ((i.next = i), gu(t))
                        : ((i.next = a.next), (a.next = i)),
                        (t.interleaved = i)
                    return
                }
            } catch {
            } finally {
            }
        ;(n = Mp(e, t, i, r)),
            n !== null && ((i = Qe()), kt(n, e, r, i), Kp(n, t, r))
    }
}
function Wp(e) {
    var t = e.alternate
    return e === ye || (t !== null && t === ye)
}
function Qp(e, t) {
    hi = ro = !0
    var n = e.pending
    n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
}
function Kp(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes
        ;(r &= e.pendingLanes), (n |= r), (t.lanes = n), nu(e, n)
    }
}
var io = {
        readContext: wt,
        useCallback: Fe,
        useContext: Fe,
        useEffect: Fe,
        useImperativeHandle: Fe,
        useInsertionEffect: Fe,
        useLayoutEffect: Fe,
        useMemo: Fe,
        useReducer: Fe,
        useRef: Fe,
        useState: Fe,
        useDebugValue: Fe,
        useDeferredValue: Fe,
        useTransition: Fe,
        useMutableSource: Fe,
        useSyncExternalStore: Fe,
        useId: Fe,
        unstable_isNewReconciler: !1,
    },
    Hv = {
        readContext: wt,
        useCallback: function (e, t) {
            return (bt().memoizedState = [e, t === void 0 ? null : t]), e
        },
        useContext: wt,
        useEffect: ed,
        useImperativeHandle: function (e, t, n) {
            return (
                (n = n != null ? n.concat([e]) : null),
                bl(4194308, 4, Bp.bind(null, t, e), n)
            )
        },
        useLayoutEffect: function (e, t) {
            return bl(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
            return bl(4, 2, e, t)
        },
        useMemo: function (e, t) {
            var n = bt()
            return (
                (t = t === void 0 ? null : t),
                (e = e()),
                (n.memoizedState = [e, t]),
                e
            )
        },
        useReducer: function (e, t, n) {
            var r = bt()
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
                (e = e.dispatch = Gv.bind(null, ye, e)),
                [r.memoizedState, e]
            )
        },
        useRef: function (e) {
            var t = bt()
            return (e = { current: e }), (t.memoizedState = e)
        },
        useState: Zc,
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            return (bt().memoizedState = e)
        },
        useTransition: function () {
            var e = Zc(!1),
                t = e[0]
            return (e = $v.bind(null, e[1])), (bt().memoizedState = e), [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
            var r = ye,
                i = bt()
            if (he) {
                if (n === void 0) throw Error(B(407))
                n = n()
            } else {
                if (((n = t()), Oe === null)) throw Error(B(349))
                Kn & 30 || Ip(r, t, n)
            }
            i.memoizedState = n
            var l = { value: n, getSnapshot: t }
            return (
                (i.queue = l),
                ed(Rp.bind(null, r, l, e), [e]),
                (r.flags |= 2048),
                zi(9, bp.bind(null, r, l, n, t), void 0, null),
                n
            )
        },
        useId: function () {
            var e = bt(),
                t = Oe.identifierPrefix
            if (he) {
                var n = Vt,
                    r = Ht
                ;(n = (r & ~(1 << (32 - Mt(r) - 1))).toString(32) + n),
                    (t = ':' + t + 'R' + n),
                    (n = Ri++),
                    0 < n && (t += 'H' + n.toString(32)),
                    (t += ':')
            } else (n = Bv++), (t = ':' + t + 'r' + n.toString(32) + ':')
            return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1,
    },
    Vv = {
        readContext: wt,
        useCallback: Gp,
        useContext: wt,
        useEffect: Tu,
        useImperativeHandle: $p,
        useInsertionEffect: Ap,
        useLayoutEffect: Fp,
        useMemo: Up,
        useReducer: ws,
        useRef: jp,
        useState: function () {
            return ws(Di)
        },
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            var t = St()
            return Hp(t, Me.memoizedState, e)
        },
        useTransition: function () {
            var e = ws(Di)[0],
                t = St().memoizedState
            return [e, t]
        },
        useMutableSource: Np,
        useSyncExternalStore: Op,
        useId: Vp,
        unstable_isNewReconciler: !1,
    },
    Wv = {
        readContext: wt,
        useCallback: Gp,
        useContext: wt,
        useEffect: Tu,
        useImperativeHandle: $p,
        useInsertionEffect: Ap,
        useLayoutEffect: Fp,
        useMemo: Up,
        useReducer: Ss,
        useRef: jp,
        useState: function () {
            return Ss(Di)
        },
        useDebugValue: Pu,
        useDeferredValue: function (e) {
            var t = St()
            return Me === null
                ? (t.memoizedState = e)
                : Hp(t, Me.memoizedState, e)
        },
        useTransition: function () {
            var e = Ss(Di)[0],
                t = St().memoizedState
            return [e, t]
        },
        useMutableSource: Np,
        useSyncExternalStore: Op,
        useId: Vp,
        unstable_isNewReconciler: !1,
    }
function Et(e, t) {
    if (e && e.defaultProps) {
        ;(t = we({}, t)), (e = e.defaultProps)
        for (var n in e) t[n] === void 0 && (t[n] = e[n])
        return t
    }
    return t
}
function ga(e, t, n, r) {
    ;(t = e.memoizedState),
        (n = n(r, t)),
        (n = n == null ? t : we({}, t, n)),
        (e.memoizedState = n),
        e.lanes === 0 && (e.updateQueue.baseState = n)
}
var No = {
    isMounted: function (e) {
        return (e = e._reactInternals) ? rr(e) === e : !1
    },
    enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = Qe(),
            i = Cn(e),
            l = Wt(r, i)
        ;(l.payload = t),
            n != null && (l.callback = n),
            (t = xn(e, l, i)),
            t !== null && (kt(t, e, i, r), Ol(t, e, i))
    },
    enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = Qe(),
            i = Cn(e),
            l = Wt(r, i)
        ;(l.tag = 1),
            (l.payload = t),
            n != null && (l.callback = n),
            (t = xn(e, l, i)),
            t !== null && (kt(t, e, i, r), Ol(t, e, i))
    },
    enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = Qe(),
            r = Cn(e),
            i = Wt(n, r)
        ;(i.tag = 2),
            t != null && (i.callback = t),
            (t = xn(e, i, r)),
            t !== null && (kt(t, e, r, n), Ol(t, e, r))
    },
}
function td(e, t, n, r, i, l, o) {
    return (
        (e = e.stateNode),
        typeof e.shouldComponentUpdate == 'function'
            ? e.shouldComponentUpdate(r, l, o)
            : t.prototype && t.prototype.isPureReactComponent
            ? !ki(n, r) || !ki(i, l)
            : !0
    )
}
function Yp(e, t, n) {
    var r = !1,
        i = _n,
        l = t.contextType
    return (
        typeof l == 'object' && l !== null
            ? (l = wt(l))
            : ((i = Ze(t) ? Wn : Ge.current),
              (r = t.contextTypes),
              (l = (r = r != null) ? Or(e, i) : _n)),
        (t = new t(n, l)),
        (e.memoizedState =
            t.state !== null && t.state !== void 0 ? t.state : null),
        (t.updater = No),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
            ((e = e.stateNode),
            (e.__reactInternalMemoizedUnmaskedChildContext = i),
            (e.__reactInternalMemoizedMaskedChildContext = l)),
        t
    )
}
function nd(e, t, n, r) {
    ;(e = t.state),
        typeof t.componentWillReceiveProps == 'function' &&
            t.componentWillReceiveProps(n, r),
        typeof t.UNSAFE_componentWillReceiveProps == 'function' &&
            t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && No.enqueueReplaceState(t, t.state, null)
}
function va(e, t, n, r) {
    var i = e.stateNode
    ;(i.props = n), (i.state = e.memoizedState), (i.refs = {}), vu(e)
    var l = t.contextType
    typeof l == 'object' && l !== null
        ? (i.context = wt(l))
        : ((l = Ze(t) ? Wn : Ge.current), (i.context = Or(e, l))),
        (i.state = e.memoizedState),
        (l = t.getDerivedStateFromProps),
        typeof l == 'function' && (ga(e, t, l, n), (i.state = e.memoizedState)),
        typeof t.getDerivedStateFromProps == 'function' ||
            typeof i.getSnapshotBeforeUpdate == 'function' ||
            (typeof i.UNSAFE_componentWillMount != 'function' &&
                typeof i.componentWillMount != 'function') ||
            ((t = i.state),
            typeof i.componentWillMount == 'function' && i.componentWillMount(),
            typeof i.UNSAFE_componentWillMount == 'function' &&
                i.UNSAFE_componentWillMount(),
            t !== i.state && No.enqueueReplaceState(i, i.state, null),
            to(e, n, i, r),
            (i.state = e.memoizedState)),
        typeof i.componentDidMount == 'function' && (e.flags |= 4194308)
}
function Dr(e, t) {
    try {
        var n = '',
            r = t
        do (n += Sg(r)), (r = r.return)
        while (r)
        var i = n
    } catch (l) {
        i =
            `
Error generating stack: ` +
            l.message +
            `
` +
            l.stack
    }
    return { value: e, source: t, stack: i, digest: null }
}
function xs(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null }
}
function ya(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function () {
            throw n
        })
    }
}
var Qv = typeof WeakMap == 'function' ? WeakMap : Map
function Xp(e, t, n) {
    ;(n = Wt(-1, n)), (n.tag = 3), (n.payload = { element: null })
    var r = t.value
    return (
        (n.callback = function () {
            oo || ((oo = !0), (ka = r)), ya(e, t)
        }),
        n
    )
}
function qp(e, t, n) {
    ;(n = Wt(-1, n)), (n.tag = 3)
    var r = e.type.getDerivedStateFromError
    if (typeof r == 'function') {
        var i = t.value
        ;(n.payload = function () {
            return r(i)
        }),
            (n.callback = function () {
                ya(e, t)
            })
    }
    var l = e.stateNode
    return (
        l !== null &&
            typeof l.componentDidCatch == 'function' &&
            (n.callback = function () {
                ya(e, t),
                    typeof r != 'function' &&
                        (En === null ? (En = new Set([this])) : En.add(this))
                var o = t.stack
                this.componentDidCatch(t.value, {
                    componentStack: o !== null ? o : '',
                })
            }),
        n
    )
}
function rd(e, t, n) {
    var r = e.pingCache
    if (r === null) {
        r = e.pingCache = new Qv()
        var i = new Set()
        r.set(t, i)
    } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i))
    i.has(n) || (i.add(n), (e = sy.bind(null, e, t, n)), t.then(e, e))
}
function id(e) {
    do {
        var t
        if (
            ((t = e.tag === 13) &&
                ((t = e.memoizedState),
                (t = t !== null ? t.dehydrated !== null : !0)),
            t)
        )
            return e
        e = e.return
    } while (e !== null)
    return null
}
function ld(e, t, n, r, i) {
    return e.mode & 1
        ? ((e.flags |= 65536), (e.lanes = i), e)
        : (e === t
              ? (e.flags |= 65536)
              : ((e.flags |= 128),
                (n.flags |= 131072),
                (n.flags &= -52805),
                n.tag === 1 &&
                    (n.alternate === null
                        ? (n.tag = 17)
                        : ((t = Wt(-1, 1)), (t.tag = 2), xn(n, t, 1))),
                (n.lanes |= 1)),
          e)
}
var Kv = en.ReactCurrentOwner,
    qe = !1
function We(e, t, n, r) {
    t.child = e === null ? _p(t, null, n, r) : br(t, e.child, n, r)
}
function od(e, t, n, r, i) {
    n = n.render
    var l = t.ref
    return (
        Mr(t, i),
        (r = Eu(e, t, n, r, l, i)),
        (n = Cu()),
        e !== null && !qe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              qt(e, t, i))
            : (he && n && cu(t), (t.flags |= 1), We(e, t, r, i), t.child)
    )
}
function sd(e, t, n, r, i) {
    if (e === null) {
        var l = n.type
        return typeof l == 'function' &&
            !bu(l) &&
            l.defaultProps === void 0 &&
            n.compare === null &&
            n.defaultProps === void 0
            ? ((t.tag = 15), (t.type = l), Jp(e, t, l, r, i))
            : ((e = jl(n.type, null, r, t, t.mode, i)),
              (e.ref = t.ref),
              (e.return = t),
              (t.child = e))
    }
    if (((l = e.child), !(e.lanes & i))) {
        var o = l.memoizedProps
        if (
            ((n = n.compare),
            (n = n !== null ? n : ki),
            n(o, r) && e.ref === t.ref)
        )
            return qt(e, t, i)
    }
    return (
        (t.flags |= 1),
        (e = Tn(l, r)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e)
    )
}
function Jp(e, t, n, r, i) {
    if (e !== null) {
        var l = e.memoizedProps
        if (ki(l, r) && e.ref === t.ref)
            if (((qe = !1), (t.pendingProps = r = l), (e.lanes & i) !== 0))
                e.flags & 131072 && (qe = !0)
            else return (t.lanes = e.lanes), qt(e, t, i)
    }
    return wa(e, t, n, r, i)
}
function Zp(e, t, n) {
    var r = t.pendingProps,
        i = r.children,
        l = e !== null ? e.memoizedState : null
    if (r.mode === 'hidden')
        if (!(t.mode & 1))
            (t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                fe(Er, rt),
                (rt |= n)
        else {
            if (!(n & 1073741824))
                return (
                    (e = l !== null ? l.baseLanes | n : n),
                    (t.lanes = t.childLanes = 1073741824),
                    (t.memoizedState = {
                        baseLanes: e,
                        cachePool: null,
                        transitions: null,
                    }),
                    (t.updateQueue = null),
                    fe(Er, rt),
                    (rt |= e),
                    null
                )
            ;(t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null,
            }),
                (r = l !== null ? l.baseLanes : n),
                fe(Er, rt),
                (rt |= r)
        }
    else
        l !== null
            ? ((r = l.baseLanes | n), (t.memoizedState = null))
            : (r = n),
            fe(Er, rt),
            (rt |= r)
    return We(e, t, i, n), t.child
}
function em(e, t) {
    var n = t.ref
    ;((e === null && n !== null) || (e !== null && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152))
}
function wa(e, t, n, r, i) {
    var l = Ze(n) ? Wn : Ge.current
    return (
        (l = Or(t, l)),
        Mr(t, i),
        (n = Eu(e, t, n, r, l, i)),
        (r = Cu()),
        e !== null && !qe
            ? ((t.updateQueue = e.updateQueue),
              (t.flags &= -2053),
              (e.lanes &= ~i),
              qt(e, t, i))
            : (he && r && cu(t), (t.flags |= 1), We(e, t, n, i), t.child)
    )
}
function ad(e, t, n, r, i) {
    if (Ze(n)) {
        var l = !0
        Xl(t)
    } else l = !1
    if ((Mr(t, i), t.stateNode === null))
        Rl(e, t), Yp(t, n, r), va(t, n, r, i), (r = !0)
    else if (e === null) {
        var o = t.stateNode,
            s = t.memoizedProps
        o.props = s
        var a = o.context,
            u = n.contextType
        typeof u == 'object' && u !== null
            ? (u = wt(u))
            : ((u = Ze(n) ? Wn : Ge.current), (u = Or(t, u)))
        var c = n.getDerivedStateFromProps,
            d =
                typeof c == 'function' ||
                typeof o.getSnapshotBeforeUpdate == 'function'
        d ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((s !== r || a !== u) && nd(t, o, r, u)),
            (cn = !1)
        var m = t.memoizedState
        ;(o.state = m),
            to(t, r, o, i),
            (a = t.memoizedState),
            s !== r || m !== a || Je.current || cn
                ? (typeof c == 'function' &&
                      (ga(t, n, c, r), (a = t.memoizedState)),
                  (s = cn || td(t, n, s, r, m, a, u))
                      ? (d ||
                            (typeof o.UNSAFE_componentWillMount != 'function' &&
                                typeof o.componentWillMount != 'function') ||
                            (typeof o.componentWillMount == 'function' &&
                                o.componentWillMount(),
                            typeof o.UNSAFE_componentWillMount == 'function' &&
                                o.UNSAFE_componentWillMount()),
                        typeof o.componentDidMount == 'function' &&
                            (t.flags |= 4194308))
                      : (typeof o.componentDidMount == 'function' &&
                            (t.flags |= 4194308),
                        (t.memoizedProps = r),
                        (t.memoizedState = a)),
                  (o.props = r),
                  (o.state = a),
                  (o.context = u),
                  (r = s))
                : (typeof o.componentDidMount == 'function' &&
                      (t.flags |= 4194308),
                  (r = !1))
    } else {
        ;(o = t.stateNode),
            kp(e, t),
            (s = t.memoizedProps),
            (u = t.type === t.elementType ? s : Et(t.type, s)),
            (o.props = u),
            (d = t.pendingProps),
            (m = o.context),
            (a = n.contextType),
            typeof a == 'object' && a !== null
                ? (a = wt(a))
                : ((a = Ze(n) ? Wn : Ge.current), (a = Or(t, a)))
        var v = n.getDerivedStateFromProps
        ;(c =
            typeof v == 'function' ||
            typeof o.getSnapshotBeforeUpdate == 'function') ||
            (typeof o.UNSAFE_componentWillReceiveProps != 'function' &&
                typeof o.componentWillReceiveProps != 'function') ||
            ((s !== d || m !== a) && nd(t, o, r, a)),
            (cn = !1),
            (m = t.memoizedState),
            (o.state = m),
            to(t, r, o, i)
        var g = t.memoizedState
        s !== d || m !== g || Je.current || cn
            ? (typeof v == 'function' &&
                  (ga(t, n, v, r), (g = t.memoizedState)),
              (u = cn || td(t, n, u, r, m, g, a) || !1)
                  ? (c ||
                        (typeof o.UNSAFE_componentWillUpdate != 'function' &&
                            typeof o.componentWillUpdate != 'function') ||
                        (typeof o.componentWillUpdate == 'function' &&
                            o.componentWillUpdate(r, g, a),
                        typeof o.UNSAFE_componentWillUpdate == 'function' &&
                            o.UNSAFE_componentWillUpdate(r, g, a)),
                    typeof o.componentDidUpdate == 'function' && (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate == 'function' &&
                        (t.flags |= 1024))
                  : (typeof o.componentDidUpdate != 'function' ||
                        (s === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 4),
                    typeof o.getSnapshotBeforeUpdate != 'function' ||
                        (s === e.memoizedProps && m === e.memoizedState) ||
                        (t.flags |= 1024),
                    (t.memoizedProps = r),
                    (t.memoizedState = g)),
              (o.props = r),
              (o.state = g),
              (o.context = a),
              (r = u))
            : (typeof o.componentDidUpdate != 'function' ||
                  (s === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 4),
              typeof o.getSnapshotBeforeUpdate != 'function' ||
                  (s === e.memoizedProps && m === e.memoizedState) ||
                  (t.flags |= 1024),
              (r = !1))
    }
    return Sa(e, t, n, r, l, i)
}
function Sa(e, t, n, r, i, l) {
    em(e, t)
    var o = (t.flags & 128) !== 0
    if (!r && !o) return i && Qc(t, n, !1), qt(e, t, l)
    ;(r = t.stateNode), (Kv.current = t)
    var s =
        o && typeof n.getDerivedStateFromError != 'function' ? null : r.render()
    return (
        (t.flags |= 1),
        e !== null && o
            ? ((t.child = br(t, e.child, null, l)),
              (t.child = br(t, null, s, l)))
            : We(e, t, s, l),
        (t.memoizedState = r.state),
        i && Qc(t, n, !0),
        t.child
    )
}
function tm(e) {
    var t = e.stateNode
    t.pendingContext
        ? Wc(e, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Wc(e, t.context, !1),
        yu(e, t.containerInfo)
}
function ud(e, t, n, r, i) {
    return Ir(), fu(i), (t.flags |= 256), We(e, t, n, r), t.child
}
var xa = { dehydrated: null, treeContext: null, retryLane: 0 }
function Ea(e) {
    return { baseLanes: e, cachePool: null, transitions: null }
}
function nm(e, t, n) {
    var r = t.pendingProps,
        i = ve.current,
        l = !1,
        o = (t.flags & 128) !== 0,
        s
    if (
        ((s = o) ||
            (s = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
        s
            ? ((l = !0), (t.flags &= -129))
            : (e === null || e.memoizedState !== null) && (i |= 1),
        fe(ve, i & 1),
        e === null)
    )
        return (
            ma(t),
            (e = t.memoizedState),
            e !== null && ((e = e.dehydrated), e !== null)
                ? (t.mode & 1
                      ? e.data === '$!'
                          ? (t.lanes = 8)
                          : (t.lanes = 1073741824)
                      : (t.lanes = 1),
                  null)
                : ((o = r.children),
                  (e = r.fallback),
                  l
                      ? ((r = t.mode),
                        (l = t.child),
                        (o = { mode: 'hidden', children: o }),
                        !(r & 1) && l !== null
                            ? ((l.childLanes = 0), (l.pendingProps = o))
                            : (l = bo(o, r, 0, null)),
                        (e = Vn(e, r, n, null)),
                        (l.return = t),
                        (e.return = t),
                        (l.sibling = e),
                        (t.child = l),
                        (t.child.memoizedState = Ea(n)),
                        (t.memoizedState = xa),
                        e)
                      : _u(t, o))
        )
    if (((i = e.memoizedState), i !== null && ((s = i.dehydrated), s !== null)))
        return Yv(e, t, o, r, s, i, n)
    if (l) {
        ;(l = r.fallback), (o = t.mode), (i = e.child), (s = i.sibling)
        var a = { mode: 'hidden', children: r.children }
        return (
            !(o & 1) && t.child !== i
                ? ((r = t.child),
                  (r.childLanes = 0),
                  (r.pendingProps = a),
                  (t.deletions = null))
                : ((r = Tn(i, a)),
                  (r.subtreeFlags = i.subtreeFlags & 14680064)),
            s !== null
                ? (l = Tn(s, l))
                : ((l = Vn(l, o, n, null)), (l.flags |= 2)),
            (l.return = t),
            (r.return = t),
            (r.sibling = l),
            (t.child = r),
            (r = l),
            (l = t.child),
            (o = e.child.memoizedState),
            (o =
                o === null
                    ? Ea(n)
                    : {
                          baseLanes: o.baseLanes | n,
                          cachePool: null,
                          transitions: o.transitions,
                      }),
            (l.memoizedState = o),
            (l.childLanes = e.childLanes & ~n),
            (t.memoizedState = xa),
            r
        )
    }
    return (
        (l = e.child),
        (e = l.sibling),
        (r = Tn(l, { mode: 'visible', children: r.children })),
        !(t.mode & 1) && (r.lanes = n),
        (r.return = t),
        (r.sibling = null),
        e !== null &&
            ((n = t.deletions),
            n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
        (t.child = r),
        (t.memoizedState = null),
        r
    )
}
function _u(e, t) {
    return (
        (t = bo({ mode: 'visible', children: t }, e.mode, 0, null)),
        (t.return = e),
        (e.child = t)
    )
}
function wl(e, t, n, r) {
    return (
        r !== null && fu(r),
        br(t, e.child, null, n),
        (e = _u(t, t.pendingProps.children)),
        (e.flags |= 2),
        (t.memoizedState = null),
        e
    )
}
function Yv(e, t, n, r, i, l, o) {
    if (n)
        return t.flags & 256
            ? ((t.flags &= -257), (r = xs(Error(B(422)))), wl(e, t, o, r))
            : t.memoizedState !== null
            ? ((t.child = e.child), (t.flags |= 128), null)
            : ((l = r.fallback),
              (i = t.mode),
              (r = bo({ mode: 'visible', children: r.children }, i, 0, null)),
              (l = Vn(l, i, o, null)),
              (l.flags |= 2),
              (r.return = t),
              (l.return = t),
              (r.sibling = l),
              (t.child = r),
              t.mode & 1 && br(t, e.child, null, o),
              (t.child.memoizedState = Ea(o)),
              (t.memoizedState = xa),
              l)
    if (!(t.mode & 1)) return wl(e, t, o, null)
    if (i.data === '$!') {
        if (((r = i.nextSibling && i.nextSibling.dataset), r)) var s = r.dgst
        return (
            (r = s), (l = Error(B(419))), (r = xs(l, r, void 0)), wl(e, t, o, r)
        )
    }
    if (((s = (o & e.childLanes) !== 0), qe || s)) {
        if (((r = Oe), r !== null)) {
            switch (o & -o) {
                case 4:
                    i = 2
                    break
                case 16:
                    i = 8
                    break
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
                    i = 32
                    break
                case 536870912:
                    i = 268435456
                    break
                default:
                    i = 0
            }
            ;(i = i & (r.suspendedLanes | o) ? 0 : i),
                i !== 0 &&
                    i !== l.retryLane &&
                    ((l.retryLane = i), Xt(e, i), kt(r, e, i, -1))
        }
        return Iu(), (r = xs(Error(B(421)))), wl(e, t, o, r)
    }
    return i.data === '$?'
        ? ((t.flags |= 128),
          (t.child = e.child),
          (t = ay.bind(null, e)),
          (i._reactRetry = t),
          null)
        : ((e = l.treeContext),
          (ot = Sn(i.nextSibling)),
          (at = t),
          (he = !0),
          (Pt = null),
          e !== null &&
              ((ht[gt++] = Ht),
              (ht[gt++] = Vt),
              (ht[gt++] = Qn),
              (Ht = e.id),
              (Vt = e.overflow),
              (Qn = t)),
          (t = _u(t, r.children)),
          (t.flags |= 4096),
          t)
}
function cd(e, t, n) {
    e.lanes |= t
    var r = e.alternate
    r !== null && (r.lanes |= t), ha(e.return, t, n)
}
function Es(e, t, n, r, i) {
    var l = e.memoizedState
    l === null
        ? (e.memoizedState = {
              isBackwards: t,
              rendering: null,
              renderingStartTime: 0,
              last: r,
              tail: n,
              tailMode: i,
          })
        : ((l.isBackwards = t),
          (l.rendering = null),
          (l.renderingStartTime = 0),
          (l.last = r),
          (l.tail = n),
          (l.tailMode = i))
}
function rm(e, t, n) {
    var r = t.pendingProps,
        i = r.revealOrder,
        l = r.tail
    if ((We(e, t, r.children, n), (r = ve.current), r & 2))
        (r = (r & 1) | 2), (t.flags |= 128)
    else {
        if (e !== null && e.flags & 128)
            e: for (e = t.child; e !== null; ) {
                if (e.tag === 13) e.memoizedState !== null && cd(e, n, t)
                else if (e.tag === 19) cd(e, n, t)
                else if (e.child !== null) {
                    ;(e.child.return = e), (e = e.child)
                    continue
                }
                if (e === t) break e
                for (; e.sibling === null; ) {
                    if (e.return === null || e.return === t) break e
                    e = e.return
                }
                ;(e.sibling.return = e.return), (e = e.sibling)
            }
        r &= 1
    }
    if ((fe(ve, r), !(t.mode & 1))) t.memoizedState = null
    else
        switch (i) {
            case 'forwards':
                for (n = t.child, i = null; n !== null; )
                    (e = n.alternate),
                        e !== null && no(e) === null && (i = n),
                        (n = n.sibling)
                ;(n = i),
                    n === null
                        ? ((i = t.child), (t.child = null))
                        : ((i = n.sibling), (n.sibling = null)),
                    Es(t, !1, i, n, l)
                break
            case 'backwards':
                for (n = null, i = t.child, t.child = null; i !== null; ) {
                    if (((e = i.alternate), e !== null && no(e) === null)) {
                        t.child = i
                        break
                    }
                    ;(e = i.sibling), (i.sibling = n), (n = i), (i = e)
                }
                Es(t, !0, n, null, l)
                break
            case 'together':
                Es(t, !1, null, null, void 0)
                break
            default:
                t.memoizedState = null
        }
    return t.child
}
function Rl(e, t) {
    !(t.mode & 1) &&
        e !== null &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
}
function qt(e, t, n) {
    if (
        (e !== null && (t.dependencies = e.dependencies),
        (Yn |= t.lanes),
        !(n & t.childLanes))
    )
        return null
    if (e !== null && t.child !== e.child) throw Error(B(153))
    if (t.child !== null) {
        for (
            e = t.child, n = Tn(e, e.pendingProps), t.child = n, n.return = t;
            e.sibling !== null;

        )
            (e = e.sibling),
                (n = n.sibling = Tn(e, e.pendingProps)),
                (n.return = t)
        n.sibling = null
    }
    return t.child
}
function Xv(e, t, n) {
    switch (t.tag) {
        case 3:
            tm(t), Ir()
            break
        case 5:
            Lp(t)
            break
        case 1:
            Ze(t.type) && Xl(t)
            break
        case 4:
            yu(t, t.stateNode.containerInfo)
            break
        case 10:
            var r = t.type._context,
                i = t.memoizedProps.value
            fe(Zl, r._currentValue), (r._currentValue = i)
            break
        case 13:
            if (((r = t.memoizedState), r !== null))
                return r.dehydrated !== null
                    ? (fe(ve, ve.current & 1), (t.flags |= 128), null)
                    : n & t.child.childLanes
                    ? nm(e, t, n)
                    : (fe(ve, ve.current & 1),
                      (e = qt(e, t, n)),
                      e !== null ? e.sibling : null)
            fe(ve, ve.current & 1)
            break
        case 19:
            if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
                if (r) return rm(e, t, n)
                t.flags |= 128
            }
            if (
                ((i = t.memoizedState),
                i !== null &&
                    ((i.rendering = null),
                    (i.tail = null),
                    (i.lastEffect = null)),
                fe(ve, ve.current),
                r)
            )
                break
            return null
        case 22:
        case 23:
            return (t.lanes = 0), Zp(e, t, n)
    }
    return qt(e, t, n)
}
var im, Ca, lm, om
im = function (e, t) {
    for (var n = t.child; n !== null; ) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode)
        else if (n.tag !== 4 && n.child !== null) {
            ;(n.child.return = n), (n = n.child)
            continue
        }
        if (n === t) break
        for (; n.sibling === null; ) {
            if (n.return === null || n.return === t) return
            n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
    }
}
Ca = function () {}
lm = function (e, t, n, r) {
    var i = e.memoizedProps
    if (i !== r) {
        ;(e = t.stateNode), $n(jt.current)
        var l = null
        switch (n) {
            case 'input':
                ;(i = Vs(e, i)), (r = Vs(e, r)), (l = [])
                break
            case 'select':
                ;(i = we({}, i, { value: void 0 })),
                    (r = we({}, r, { value: void 0 })),
                    (l = [])
                break
            case 'textarea':
                ;(i = Ks(e, i)), (r = Ks(e, r)), (l = [])
                break
            default:
                typeof i.onClick != 'function' &&
                    typeof r.onClick == 'function' &&
                    (e.onclick = Kl)
        }
        Xs(n, r)
        var o
        n = null
        for (u in i)
            if (!r.hasOwnProperty(u) && i.hasOwnProperty(u) && i[u] != null)
                if (u === 'style') {
                    var s = i[u]
                    for (o in s)
                        s.hasOwnProperty(o) && (n || (n = {}), (n[o] = ''))
                } else
                    u !== 'dangerouslySetInnerHTML' &&
                        u !== 'children' &&
                        u !== 'suppressContentEditableWarning' &&
                        u !== 'suppressHydrationWarning' &&
                        u !== 'autoFocus' &&
                        (xi.hasOwnProperty(u)
                            ? l || (l = [])
                            : (l = l || []).push(u, null))
        for (u in r) {
            var a = r[u]
            if (
                ((s = i != null ? i[u] : void 0),
                r.hasOwnProperty(u) && a !== s && (a != null || s != null))
            )
                if (u === 'style')
                    if (s) {
                        for (o in s)
                            !s.hasOwnProperty(o) ||
                                (a && a.hasOwnProperty(o)) ||
                                (n || (n = {}), (n[o] = ''))
                        for (o in a)
                            a.hasOwnProperty(o) &&
                                s[o] !== a[o] &&
                                (n || (n = {}), (n[o] = a[o]))
                    } else n || (l || (l = []), l.push(u, n)), (n = a)
                else
                    u === 'dangerouslySetInnerHTML'
                        ? ((a = a ? a.__html : void 0),
                          (s = s ? s.__html : void 0),
                          a != null && s !== a && (l = l || []).push(u, a))
                        : u === 'children'
                        ? (typeof a != 'string' && typeof a != 'number') ||
                          (l = l || []).push(u, '' + a)
                        : u !== 'suppressContentEditableWarning' &&
                          u !== 'suppressHydrationWarning' &&
                          (xi.hasOwnProperty(u)
                              ? (a != null &&
                                    u === 'onScroll' &&
                                    pe('scroll', e),
                                l || s === a || (l = []))
                              : (l = l || []).push(u, a))
        }
        n && (l = l || []).push('style', n)
        var u = l
        ;(t.updateQueue = u) && (t.flags |= 4)
    }
}
om = function (e, t, n, r) {
    n !== r && (t.flags |= 4)
}
function Zr(e, t) {
    if (!he)
        switch (e.tailMode) {
            case 'hidden':
                t = e.tail
                for (var n = null; t !== null; )
                    t.alternate !== null && (n = t), (t = t.sibling)
                n === null ? (e.tail = null) : (n.sibling = null)
                break
            case 'collapsed':
                n = e.tail
                for (var r = null; n !== null; )
                    n.alternate !== null && (r = n), (n = n.sibling)
                r === null
                    ? t || e.tail === null
                        ? (e.tail = null)
                        : (e.tail.sibling = null)
                    : (r.sibling = null)
        }
}
function Be(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0
    if (t)
        for (var i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags & 14680064),
                (r |= i.flags & 14680064),
                (i.return = e),
                (i = i.sibling)
    else
        for (i = e.child; i !== null; )
            (n |= i.lanes | i.childLanes),
                (r |= i.subtreeFlags),
                (r |= i.flags),
                (i.return = e),
                (i = i.sibling)
    return (e.subtreeFlags |= r), (e.childLanes = n), t
}
function qv(e, t, n) {
    var r = t.pendingProps
    switch ((du(t), t.tag)) {
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
            return Be(t), null
        case 1:
            return Ze(t.type) && Yl(), Be(t), null
        case 3:
            return (
                (r = t.stateNode),
                Rr(),
                me(Je),
                me(Ge),
                Su(),
                r.pendingContext &&
                    ((r.context = r.pendingContext), (r.pendingContext = null)),
                (e === null || e.child === null) &&
                    (vl(t)
                        ? (t.flags |= 4)
                        : e === null ||
                          (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
                          ((t.flags |= 1024),
                          Pt !== null && (Oa(Pt), (Pt = null)))),
                Ca(e, t),
                Be(t),
                null
            )
        case 5:
            wu(t)
            var i = $n(bi.current)
            if (((n = t.type), e !== null && t.stateNode != null))
                lm(e, t, n, r, i),
                    e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(B(166))
                    return Be(t), null
                }
                if (((e = $n(jt.current)), vl(t))) {
                    ;(r = t.stateNode), (n = t.type)
                    var l = t.memoizedProps
                    switch (
                        ((r[Rt] = t), (r[Oi] = l), (e = (t.mode & 1) !== 0), n)
                    ) {
                        case 'dialog':
                            pe('cancel', r), pe('close', r)
                            break
                        case 'iframe':
                        case 'object':
                        case 'embed':
                            pe('load', r)
                            break
                        case 'video':
                        case 'audio':
                            for (i = 0; i < si.length; i++) pe(si[i], r)
                            break
                        case 'source':
                            pe('error', r)
                            break
                        case 'img':
                        case 'image':
                        case 'link':
                            pe('error', r), pe('load', r)
                            break
                        case 'details':
                            pe('toggle', r)
                            break
                        case 'input':
                            wc(r, l), pe('invalid', r)
                            break
                        case 'select':
                            ;(r._wrapperState = { wasMultiple: !!l.multiple }),
                                pe('invalid', r)
                            break
                        case 'textarea':
                            xc(r, l), pe('invalid', r)
                    }
                    Xs(n, l), (i = null)
                    for (var o in l)
                        if (l.hasOwnProperty(o)) {
                            var s = l[o]
                            o === 'children'
                                ? typeof s == 'string'
                                    ? r.textContent !== s &&
                                      (l.suppressHydrationWarning !== !0 &&
                                          gl(r.textContent, s, e),
                                      (i = ['children', s]))
                                    : typeof s == 'number' &&
                                      r.textContent !== '' + s &&
                                      (l.suppressHydrationWarning !== !0 &&
                                          gl(r.textContent, s, e),
                                      (i = ['children', '' + s]))
                                : xi.hasOwnProperty(o) &&
                                  s != null &&
                                  o === 'onScroll' &&
                                  pe('scroll', r)
                        }
                    switch (n) {
                        case 'input':
                            al(r), Sc(r, l, !0)
                            break
                        case 'textarea':
                            al(r), Ec(r)
                            break
                        case 'select':
                        case 'option':
                            break
                        default:
                            typeof l.onClick == 'function' && (r.onclick = Kl)
                    }
                    ;(r = i), (t.updateQueue = r), r !== null && (t.flags |= 4)
                } else {
                    ;(o = i.nodeType === 9 ? i : i.ownerDocument),
                        e === 'http://www.w3.org/1999/xhtml' && (e = Rf(n)),
                        e === 'http://www.w3.org/1999/xhtml'
                            ? n === 'script'
                                ? ((e = o.createElement('div')),
                                  (e.innerHTML = '<script></script>'),
                                  (e = e.removeChild(e.firstChild)))
                                : typeof r.is == 'string'
                                ? (e = o.createElement(n, { is: r.is }))
                                : ((e = o.createElement(n)),
                                  n === 'select' &&
                                      ((o = e),
                                      r.multiple
                                          ? (o.multiple = !0)
                                          : r.size && (o.size = r.size)))
                            : (e = o.createElementNS(e, n)),
                        (e[Rt] = t),
                        (e[Oi] = r),
                        im(e, t, !1, !1),
                        (t.stateNode = e)
                    e: {
                        switch (((o = qs(n, r)), n)) {
                            case 'dialog':
                                pe('cancel', e), pe('close', e), (i = r)
                                break
                            case 'iframe':
                            case 'object':
                            case 'embed':
                                pe('load', e), (i = r)
                                break
                            case 'video':
                            case 'audio':
                                for (i = 0; i < si.length; i++) pe(si[i], e)
                                i = r
                                break
                            case 'source':
                                pe('error', e), (i = r)
                                break
                            case 'img':
                            case 'image':
                            case 'link':
                                pe('error', e), pe('load', e), (i = r)
                                break
                            case 'details':
                                pe('toggle', e), (i = r)
                                break
                            case 'input':
                                wc(e, r), (i = Vs(e, r)), pe('invalid', e)
                                break
                            case 'option':
                                i = r
                                break
                            case 'select':
                                ;(e._wrapperState = {
                                    wasMultiple: !!r.multiple,
                                }),
                                    (i = we({}, r, { value: void 0 })),
                                    pe('invalid', e)
                                break
                            case 'textarea':
                                xc(e, r), (i = Ks(e, r)), pe('invalid', e)
                                break
                            default:
                                i = r
                        }
                        Xs(n, i), (s = i)
                        for (l in s)
                            if (s.hasOwnProperty(l)) {
                                var a = s[l]
                                l === 'style'
                                    ? jf(e, a)
                                    : l === 'dangerouslySetInnerHTML'
                                    ? ((a = a ? a.__html : void 0),
                                      a != null && Df(e, a))
                                    : l === 'children'
                                    ? typeof a == 'string'
                                        ? (n !== 'textarea' || a !== '') &&
                                          Ei(e, a)
                                        : typeof a == 'number' && Ei(e, '' + a)
                                    : l !== 'suppressContentEditableWarning' &&
                                      l !== 'suppressHydrationWarning' &&
                                      l !== 'autoFocus' &&
                                      (xi.hasOwnProperty(l)
                                          ? a != null &&
                                            l === 'onScroll' &&
                                            pe('scroll', e)
                                          : a != null && Xa(e, l, a, o))
                            }
                        switch (n) {
                            case 'input':
                                al(e), Sc(e, r, !1)
                                break
                            case 'textarea':
                                al(e), Ec(e)
                                break
                            case 'option':
                                r.value != null &&
                                    e.setAttribute('value', '' + Pn(r.value))
                                break
                            case 'select':
                                ;(e.multiple = !!r.multiple),
                                    (l = r.value),
                                    l != null
                                        ? Cr(e, !!r.multiple, l, !1)
                                        : r.defaultValue != null &&
                                          Cr(
                                              e,
                                              !!r.multiple,
                                              r.defaultValue,
                                              !0
                                          )
                                break
                            default:
                                typeof i.onClick == 'function' &&
                                    (e.onclick = Kl)
                        }
                        switch (n) {
                            case 'button':
                            case 'input':
                            case 'select':
                            case 'textarea':
                                r = !!r.autoFocus
                                break e
                            case 'img':
                                r = !0
                                break e
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152))
            }
            return Be(t), null
        case 6:
            if (e && t.stateNode != null) om(e, t, e.memoizedProps, r)
            else {
                if (typeof r != 'string' && t.stateNode === null)
                    throw Error(B(166))
                if (((n = $n(bi.current)), $n(jt.current), vl(t))) {
                    if (
                        ((r = t.stateNode),
                        (n = t.memoizedProps),
                        (r[Rt] = t),
                        (l = r.nodeValue !== n) && ((e = at), e !== null))
                    )
                        switch (e.tag) {
                            case 3:
                                gl(r.nodeValue, n, (e.mode & 1) !== 0)
                                break
                            case 5:
                                e.memoizedProps.suppressHydrationWarning !==
                                    !0 && gl(r.nodeValue, n, (e.mode & 1) !== 0)
                        }
                    l && (t.flags |= 4)
                } else
                    (r = (
                        n.nodeType === 9 ? n : n.ownerDocument
                    ).createTextNode(r)),
                        (r[Rt] = t),
                        (t.stateNode = r)
            }
            return Be(t), null
        case 13:
            if (
                (me(ve),
                (r = t.memoizedState),
                e === null ||
                    (e.memoizedState !== null &&
                        e.memoizedState.dehydrated !== null))
            ) {
                if (he && ot !== null && t.mode & 1 && !(t.flags & 128))
                    Tp(), Ir(), (t.flags |= 98560), (l = !1)
                else if (((l = vl(t)), r !== null && r.dehydrated !== null)) {
                    if (e === null) {
                        if (!l) throw Error(B(318))
                        if (
                            ((l = t.memoizedState),
                            (l = l !== null ? l.dehydrated : null),
                            !l)
                        )
                            throw Error(B(317))
                        l[Rt] = t
                    } else
                        Ir(),
                            !(t.flags & 128) && (t.memoizedState = null),
                            (t.flags |= 4)
                    Be(t), (l = !1)
                } else Pt !== null && (Oa(Pt), (Pt = null)), (l = !0)
                if (!l) return t.flags & 65536 ? t : null
            }
            return t.flags & 128
                ? ((t.lanes = n), t)
                : ((r = r !== null),
                  r !== (e !== null && e.memoizedState !== null) &&
                      r &&
                      ((t.child.flags |= 8192),
                      t.mode & 1 &&
                          (e === null || ve.current & 1
                              ? ke === 0 && (ke = 3)
                              : Iu())),
                  t.updateQueue !== null && (t.flags |= 4),
                  Be(t),
                  null)
        case 4:
            return (
                Rr(),
                Ca(e, t),
                e === null && Li(t.stateNode.containerInfo),
                Be(t),
                null
            )
        case 10:
            return hu(t.type._context), Be(t), null
        case 17:
            return Ze(t.type) && Yl(), Be(t), null
        case 19:
            if ((me(ve), (l = t.memoizedState), l === null)) return Be(t), null
            if (((r = (t.flags & 128) !== 0), (o = l.rendering), o === null))
                if (r) Zr(l, !1)
                else {
                    if (ke !== 0 || (e !== null && e.flags & 128))
                        for (e = t.child; e !== null; ) {
                            if (((o = no(e)), o !== null)) {
                                for (
                                    t.flags |= 128,
                                        Zr(l, !1),
                                        r = o.updateQueue,
                                        r !== null &&
                                            ((t.updateQueue = r),
                                            (t.flags |= 4)),
                                        t.subtreeFlags = 0,
                                        r = n,
                                        n = t.child;
                                    n !== null;

                                )
                                    (l = n),
                                        (e = r),
                                        (l.flags &= 14680066),
                                        (o = l.alternate),
                                        o === null
                                            ? ((l.childLanes = 0),
                                              (l.lanes = e),
                                              (l.child = null),
                                              (l.subtreeFlags = 0),
                                              (l.memoizedProps = null),
                                              (l.memoizedState = null),
                                              (l.updateQueue = null),
                                              (l.dependencies = null),
                                              (l.stateNode = null))
                                            : ((l.childLanes = o.childLanes),
                                              (l.lanes = o.lanes),
                                              (l.child = o.child),
                                              (l.subtreeFlags = 0),
                                              (l.deletions = null),
                                              (l.memoizedProps =
                                                  o.memoizedProps),
                                              (l.memoizedState =
                                                  o.memoizedState),
                                              (l.updateQueue = o.updateQueue),
                                              (l.type = o.type),
                                              (e = o.dependencies),
                                              (l.dependencies =
                                                  e === null
                                                      ? null
                                                      : {
                                                            lanes: e.lanes,
                                                            firstContext:
                                                                e.firstContext,
                                                        })),
                                        (n = n.sibling)
                                return fe(ve, (ve.current & 1) | 2), t.child
                            }
                            e = e.sibling
                        }
                    l.tail !== null &&
                        Ce() > zr &&
                        ((t.flags |= 128),
                        (r = !0),
                        Zr(l, !1),
                        (t.lanes = 4194304))
                }
            else {
                if (!r)
                    if (((e = no(o)), e !== null)) {
                        if (
                            ((t.flags |= 128),
                            (r = !0),
                            (n = e.updateQueue),
                            n !== null && ((t.updateQueue = n), (t.flags |= 4)),
                            Zr(l, !0),
                            l.tail === null &&
                                l.tailMode === 'hidden' &&
                                !o.alternate &&
                                !he)
                        )
                            return Be(t), null
                    } else
                        2 * Ce() - l.renderingStartTime > zr &&
                            n !== 1073741824 &&
                            ((t.flags |= 128),
                            (r = !0),
                            Zr(l, !1),
                            (t.lanes = 4194304))
                l.isBackwards
                    ? ((o.sibling = t.child), (t.child = o))
                    : ((n = l.last),
                      n !== null ? (n.sibling = o) : (t.child = o),
                      (l.last = o))
            }
            return l.tail !== null
                ? ((t = l.tail),
                  (l.rendering = t),
                  (l.tail = t.sibling),
                  (l.renderingStartTime = Ce()),
                  (t.sibling = null),
                  (n = ve.current),
                  fe(ve, r ? (n & 1) | 2 : n & 1),
                  t)
                : (Be(t), null)
        case 22:
        case 23:
            return (
                Ou(),
                (r = t.memoizedState !== null),
                e !== null &&
                    (e.memoizedState !== null) !== r &&
                    (t.flags |= 8192),
                r && t.mode & 1
                    ? rt & 1073741824 &&
                      (Be(t), t.subtreeFlags & 6 && (t.flags |= 8192))
                    : Be(t),
                null
            )
        case 24:
            return null
        case 25:
            return null
    }
    throw Error(B(156, t.tag))
}
function Jv(e, t) {
    switch ((du(t), t.tag)) {
        case 1:
            return (
                Ze(t.type) && Yl(),
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 3:
            return (
                Rr(),
                me(Je),
                me(Ge),
                Su(),
                (e = t.flags),
                e & 65536 && !(e & 128)
                    ? ((t.flags = (e & -65537) | 128), t)
                    : null
            )
        case 5:
            return wu(t), null
        case 13:
            if (
                (me(ve),
                (e = t.memoizedState),
                e !== null && e.dehydrated !== null)
            ) {
                if (t.alternate === null) throw Error(B(340))
                Ir()
            }
            return (
                (e = t.flags),
                e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
            )
        case 19:
            return me(ve), null
        case 4:
            return Rr(), null
        case 10:
            return hu(t.type._context), null
        case 22:
        case 23:
            return Ou(), null
        case 24:
            return null
        default:
            return null
    }
}
var Sl = !1,
    $e = !1,
    Zv = typeof WeakSet == 'function' ? WeakSet : Set,
    V = null
function xr(e, t) {
    var n = e.ref
    if (n !== null)
        if (typeof n == 'function')
            try {
                n(null)
            } catch (r) {
                Ee(e, t, r)
            }
        else n.current = null
}
function Ta(e, t, n) {
    try {
        n()
    } catch (r) {
        Ee(e, t, r)
    }
}
var dd = !1
function ey(e, t) {
    if (((sa = Vl), (e = dp()), uu(e))) {
        if ('selectionStart' in e)
            var n = { start: e.selectionStart, end: e.selectionEnd }
        else
            e: {
                n = ((n = e.ownerDocument) && n.defaultView) || window
                var r = n.getSelection && n.getSelection()
                if (r && r.rangeCount !== 0) {
                    n = r.anchorNode
                    var i = r.anchorOffset,
                        l = r.focusNode
                    r = r.focusOffset
                    try {
                        n.nodeType, l.nodeType
                    } catch {
                        n = null
                        break e
                    }
                    var o = 0,
                        s = -1,
                        a = -1,
                        u = 0,
                        c = 0,
                        d = e,
                        m = null
                    t: for (;;) {
                        for (
                            var v;
                            d !== n ||
                                (i !== 0 && d.nodeType !== 3) ||
                                (s = o + i),
                                d !== l ||
                                    (r !== 0 && d.nodeType !== 3) ||
                                    (a = o + r),
                                d.nodeType === 3 && (o += d.nodeValue.length),
                                (v = d.firstChild) !== null;

                        )
                            (m = d), (d = v)
                        for (;;) {
                            if (d === e) break t
                            if (
                                (m === n && ++u === i && (s = o),
                                m === l && ++c === r && (a = o),
                                (v = d.nextSibling) !== null)
                            )
                                break
                            ;(d = m), (m = d.parentNode)
                        }
                        d = v
                    }
                    n = s === -1 || a === -1 ? null : { start: s, end: a }
                } else n = null
            }
        n = n || { start: 0, end: 0 }
    } else n = null
    for (
        aa = { focusedElem: e, selectionRange: n }, Vl = !1, V = t;
        V !== null;

    )
        if (
            ((t = V),
            (e = t.child),
            (t.subtreeFlags & 1028) !== 0 && e !== null)
        )
            (e.return = t), (V = e)
        else
            for (; V !== null; ) {
                t = V
                try {
                    var g = t.alternate
                    if (t.flags & 1024)
                        switch (t.tag) {
                            case 0:
                            case 11:
                            case 15:
                                break
                            case 1:
                                if (g !== null) {
                                    var y = g.memoizedProps,
                                        C = g.memoizedState,
                                        f = t.stateNode,
                                        p = f.getSnapshotBeforeUpdate(
                                            t.elementType === t.type
                                                ? y
                                                : Et(t.type, y),
                                            C
                                        )
                                    f.__reactInternalSnapshotBeforeUpdate = p
                                }
                                break
                            case 3:
                                var h = t.stateNode.containerInfo
                                h.nodeType === 1
                                    ? (h.textContent = '')
                                    : h.nodeType === 9 &&
                                      h.documentElement &&
                                      h.removeChild(h.documentElement)
                                break
                            case 5:
                            case 6:
                            case 4:
                            case 17:
                                break
                            default:
                                throw Error(B(163))
                        }
                } catch (w) {
                    Ee(t, t.return, w)
                }
                if (((e = t.sibling), e !== null)) {
                    ;(e.return = t.return), (V = e)
                    break
                }
                V = t.return
            }
    return (g = dd), (dd = !1), g
}
function gi(e, t, n) {
    var r = t.updateQueue
    if (((r = r !== null ? r.lastEffect : null), r !== null)) {
        var i = (r = r.next)
        do {
            if ((i.tag & e) === e) {
                var l = i.destroy
                ;(i.destroy = void 0), l !== void 0 && Ta(t, n, l)
            }
            i = i.next
        } while (i !== r)
    }
}
function Oo(e, t) {
    if (
        ((t = t.updateQueue),
        (t = t !== null ? t.lastEffect : null),
        t !== null)
    ) {
        var n = (t = t.next)
        do {
            if ((n.tag & e) === e) {
                var r = n.create
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}
function Pa(e) {
    var t = e.ref
    if (t !== null) {
        var n = e.stateNode
        switch (e.tag) {
            case 5:
                e = n
                break
            default:
                e = n
        }
        typeof t == 'function' ? t(e) : (t.current = e)
    }
}
function sm(e) {
    var t = e.alternate
    t !== null && ((e.alternate = null), sm(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        e.tag === 5 &&
            ((t = e.stateNode),
            t !== null &&
                (delete t[Rt],
                delete t[Oi],
                delete t[da],
                delete t[zv],
                delete t[jv])),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
}
function am(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}
function fd(e) {
    e: for (;;) {
        for (; e.sibling === null; ) {
            if (e.return === null || am(e.return)) return null
            e = e.return
        }
        for (
            e.sibling.return = e.return, e = e.sibling;
            e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

        ) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e
            ;(e.child.return = e), (e = e.child)
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}
function _a(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode),
            t
                ? n.nodeType === 8
                    ? n.parentNode.insertBefore(e, t)
                    : n.insertBefore(e, t)
                : (n.nodeType === 8
                      ? ((t = n.parentNode), t.insertBefore(e, n))
                      : ((t = n), t.appendChild(e)),
                  (n = n._reactRootContainer),
                  n != null || t.onclick !== null || (t.onclick = Kl))
    else if (r !== 4 && ((e = e.child), e !== null))
        for (_a(e, t, n), e = e.sibling; e !== null; )
            _a(e, t, n), (e = e.sibling)
}
function Ma(e, t, n) {
    var r = e.tag
    if (r === 5 || r === 6)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
    else if (r !== 4 && ((e = e.child), e !== null))
        for (Ma(e, t, n), e = e.sibling; e !== null; )
            Ma(e, t, n), (e = e.sibling)
}
var De = null,
    Ct = !1
function on(e, t, n) {
    for (n = n.child; n !== null; ) um(e, t, n), (n = n.sibling)
}
function um(e, t, n) {
    if (zt && typeof zt.onCommitFiberUnmount == 'function')
        try {
            zt.onCommitFiberUnmount(Co, n)
        } catch {}
    switch (n.tag) {
        case 5:
            $e || xr(n, t)
        case 6:
            var r = De,
                i = Ct
            ;(De = null),
                on(e, t, n),
                (De = r),
                (Ct = i),
                De !== null &&
                    (Ct
                        ? ((e = De),
                          (n = n.stateNode),
                          e.nodeType === 8
                              ? e.parentNode.removeChild(n)
                              : e.removeChild(n))
                        : De.removeChild(n.stateNode))
            break
        case 18:
            De !== null &&
                (Ct
                    ? ((e = De),
                      (n = n.stateNode),
                      e.nodeType === 8
                          ? hs(e.parentNode, n)
                          : e.nodeType === 1 && hs(e, n),
                      _i(e))
                    : hs(De, n.stateNode))
            break
        case 4:
            ;(r = De),
                (i = Ct),
                (De = n.stateNode.containerInfo),
                (Ct = !0),
                on(e, t, n),
                (De = r),
                (Ct = i)
            break
        case 0:
        case 11:
        case 14:
        case 15:
            if (
                !$e &&
                ((r = n.updateQueue),
                r !== null && ((r = r.lastEffect), r !== null))
            ) {
                i = r = r.next
                do {
                    var l = i,
                        o = l.destroy
                    ;(l = l.tag),
                        o !== void 0 && (l & 2 || l & 4) && Ta(n, t, o),
                        (i = i.next)
                } while (i !== r)
            }
            on(e, t, n)
            break
        case 1:
            if (
                !$e &&
                (xr(n, t),
                (r = n.stateNode),
                typeof r.componentWillUnmount == 'function')
            )
                try {
                    ;(r.props = n.memoizedProps),
                        (r.state = n.memoizedState),
                        r.componentWillUnmount()
                } catch (s) {
                    Ee(n, t, s)
                }
            on(e, t, n)
            break
        case 21:
            on(e, t, n)
            break
        case 22:
            n.mode & 1
                ? (($e = (r = $e) || n.memoizedState !== null),
                  on(e, t, n),
                  ($e = r))
                : on(e, t, n)
            break
        default:
            on(e, t, n)
    }
}
function pd(e) {
    var t = e.updateQueue
    if (t !== null) {
        e.updateQueue = null
        var n = e.stateNode
        n === null && (n = e.stateNode = new Zv()),
            t.forEach(function (r) {
                var i = uy.bind(null, e, r)
                n.has(r) || (n.add(r), r.then(i, i))
            })
    }
}
function xt(e, t) {
    var n = t.deletions
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var i = n[r]
            try {
                var l = e,
                    o = t,
                    s = o
                e: for (; s !== null; ) {
                    switch (s.tag) {
                        case 5:
                            ;(De = s.stateNode), (Ct = !1)
                            break e
                        case 3:
                            ;(De = s.stateNode.containerInfo), (Ct = !0)
                            break e
                        case 4:
                            ;(De = s.stateNode.containerInfo), (Ct = !0)
                            break e
                    }
                    s = s.return
                }
                if (De === null) throw Error(B(160))
                um(l, o, i), (De = null), (Ct = !1)
                var a = i.alternate
                a !== null && (a.return = null), (i.return = null)
            } catch (u) {
                Ee(i, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null; ) cm(t, e), (t = t.sibling)
}
function cm(e, t) {
    var n = e.alternate,
        r = e.flags
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if ((xt(t, e), It(e), r & 4)) {
                try {
                    gi(3, e, e.return), Oo(3, e)
                } catch (y) {
                    Ee(e, e.return, y)
                }
                try {
                    gi(5, e, e.return)
                } catch (y) {
                    Ee(e, e.return, y)
                }
            }
            break
        case 1:
            xt(t, e), It(e), r & 512 && n !== null && xr(n, n.return)
            break
        case 5:
            if (
                (xt(t, e),
                It(e),
                r & 512 && n !== null && xr(n, n.return),
                e.flags & 32)
            ) {
                var i = e.stateNode
                try {
                    Ei(i, '')
                } catch (y) {
                    Ee(e, e.return, y)
                }
            }
            if (r & 4 && ((i = e.stateNode), i != null)) {
                var l = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : l,
                    s = e.type,
                    a = e.updateQueue
                if (((e.updateQueue = null), a !== null))
                    try {
                        s === 'input' &&
                            l.type === 'radio' &&
                            l.name != null &&
                            If(i, l),
                            qs(s, o)
                        var u = qs(s, l)
                        for (o = 0; o < a.length; o += 2) {
                            var c = a[o],
                                d = a[o + 1]
                            c === 'style'
                                ? jf(i, d)
                                : c === 'dangerouslySetInnerHTML'
                                ? Df(i, d)
                                : c === 'children'
                                ? Ei(i, d)
                                : Xa(i, c, d, u)
                        }
                        switch (s) {
                            case 'input':
                                Ws(i, l)
                                break
                            case 'textarea':
                                bf(i, l)
                                break
                            case 'select':
                                var m = i._wrapperState.wasMultiple
                                i._wrapperState.wasMultiple = !!l.multiple
                                var v = l.value
                                v != null
                                    ? Cr(i, !!l.multiple, v, !1)
                                    : m !== !!l.multiple &&
                                      (l.defaultValue != null
                                          ? Cr(
                                                i,
                                                !!l.multiple,
                                                l.defaultValue,
                                                !0
                                            )
                                          : Cr(
                                                i,
                                                !!l.multiple,
                                                l.multiple ? [] : '',
                                                !1
                                            ))
                        }
                        i[Oi] = l
                    } catch (y) {
                        Ee(e, e.return, y)
                    }
            }
            break
        case 6:
            if ((xt(t, e), It(e), r & 4)) {
                if (e.stateNode === null) throw Error(B(162))
                ;(i = e.stateNode), (l = e.memoizedProps)
                try {
                    i.nodeValue = l
                } catch (y) {
                    Ee(e, e.return, y)
                }
            }
            break
        case 3:
            if (
                (xt(t, e),
                It(e),
                r & 4 && n !== null && n.memoizedState.isDehydrated)
            )
                try {
                    _i(t.containerInfo)
                } catch (y) {
                    Ee(e, e.return, y)
                }
            break
        case 4:
            xt(t, e), It(e)
            break
        case 13:
            xt(t, e),
                It(e),
                (i = e.child),
                i.flags & 8192 &&
                    ((l = i.memoizedState !== null),
                    (i.stateNode.isHidden = l),
                    !l ||
                        (i.alternate !== null &&
                            i.alternate.memoizedState !== null) ||
                        (Lu = Ce())),
                r & 4 && pd(e)
            break
        case 22:
            if (
                ((c = n !== null && n.memoizedState !== null),
                e.mode & 1
                    ? (($e = (u = $e) || c), xt(t, e), ($e = u))
                    : xt(t, e),
                It(e),
                r & 8192)
            ) {
                if (
                    ((u = e.memoizedState !== null),
                    (e.stateNode.isHidden = u) && !c && e.mode & 1)
                )
                    for (V = e, c = e.child; c !== null; ) {
                        for (d = V = c; V !== null; ) {
                            switch (((m = V), (v = m.child), m.tag)) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    gi(4, m, m.return)
                                    break
                                case 1:
                                    xr(m, m.return)
                                    var g = m.stateNode
                                    if (
                                        typeof g.componentWillUnmount ==
                                        'function'
                                    ) {
                                        ;(r = m), (n = m.return)
                                        try {
                                            ;(t = r),
                                                (g.props = t.memoizedProps),
                                                (g.state = t.memoizedState),
                                                g.componentWillUnmount()
                                        } catch (y) {
                                            Ee(r, n, y)
                                        }
                                    }
                                    break
                                case 5:
                                    xr(m, m.return)
                                    break
                                case 22:
                                    if (m.memoizedState !== null) {
                                        hd(d)
                                        continue
                                    }
                            }
                            v !== null ? ((v.return = m), (V = v)) : hd(d)
                        }
                        c = c.sibling
                    }
                e: for (c = null, d = e; ; ) {
                    if (d.tag === 5) {
                        if (c === null) {
                            c = d
                            try {
                                ;(i = d.stateNode),
                                    u
                                        ? ((l = i.style),
                                          typeof l.setProperty == 'function'
                                              ? l.setProperty(
                                                    'display',
                                                    'none',
                                                    'important'
                                                )
                                              : (l.display = 'none'))
                                        : ((s = d.stateNode),
                                          (a = d.memoizedProps.style),
                                          (o =
                                              a != null &&
                                              a.hasOwnProperty('display')
                                                  ? a.display
                                                  : null),
                                          (s.style.display = zf('display', o)))
                            } catch (y) {
                                Ee(e, e.return, y)
                            }
                        }
                    } else if (d.tag === 6) {
                        if (c === null)
                            try {
                                d.stateNode.nodeValue = u ? '' : d.memoizedProps
                            } catch (y) {
                                Ee(e, e.return, y)
                            }
                    } else if (
                        ((d.tag !== 22 && d.tag !== 23) ||
                            d.memoizedState === null ||
                            d === e) &&
                        d.child !== null
                    ) {
                        ;(d.child.return = d), (d = d.child)
                        continue
                    }
                    if (d === e) break e
                    for (; d.sibling === null; ) {
                        if (d.return === null || d.return === e) break e
                        c === d && (c = null), (d = d.return)
                    }
                    c === d && (c = null),
                        (d.sibling.return = d.return),
                        (d = d.sibling)
                }
            }
            break
        case 19:
            xt(t, e), It(e), r & 4 && pd(e)
            break
        case 21:
            break
        default:
            xt(t, e), It(e)
    }
}
function It(e) {
    var t = e.flags
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null; ) {
                    if (am(n)) {
                        var r = n
                        break e
                    }
                    n = n.return
                }
                throw Error(B(160))
            }
            switch (r.tag) {
                case 5:
                    var i = r.stateNode
                    r.flags & 32 && (Ei(i, ''), (r.flags &= -33))
                    var l = fd(e)
                    Ma(e, l, i)
                    break
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        s = fd(e)
                    _a(e, s, o)
                    break
                default:
                    throw Error(B(161))
            }
        } catch (a) {
            Ee(e, e.return, a)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}
function ty(e, t, n) {
    ;(V = e), dm(e)
}
function dm(e, t, n) {
    for (var r = (e.mode & 1) !== 0; V !== null; ) {
        var i = V,
            l = i.child
        if (i.tag === 22 && r) {
            var o = i.memoizedState !== null || Sl
            if (!o) {
                var s = i.alternate,
                    a = (s !== null && s.memoizedState !== null) || $e
                s = Sl
                var u = $e
                if (((Sl = o), ($e = a) && !u))
                    for (V = i; V !== null; )
                        (o = V),
                            (a = o.child),
                            o.tag === 22 && o.memoizedState !== null
                                ? gd(i)
                                : a !== null
                                ? ((a.return = o), (V = a))
                                : gd(i)
                for (; l !== null; ) (V = l), dm(l), (l = l.sibling)
                ;(V = i), (Sl = s), ($e = u)
            }
            md(e)
        } else
            i.subtreeFlags & 8772 && l !== null
                ? ((l.return = i), (V = l))
                : md(e)
    }
}
function md(e) {
    for (; V !== null; ) {
        var t = V
        if (t.flags & 8772) {
            var n = t.alternate
            try {
                if (t.flags & 8772)
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            $e || Oo(5, t)
                            break
                        case 1:
                            var r = t.stateNode
                            if (t.flags & 4 && !$e)
                                if (n === null) r.componentDidMount()
                                else {
                                    var i =
                                        t.elementType === t.type
                                            ? n.memoizedProps
                                            : Et(t.type, n.memoizedProps)
                                    r.componentDidUpdate(
                                        i,
                                        n.memoizedState,
                                        r.__reactInternalSnapshotBeforeUpdate
                                    )
                                }
                            var l = t.updateQueue
                            l !== null && Jc(t, l, r)
                            break
                        case 3:
                            var o = t.updateQueue
                            if (o !== null) {
                                if (((n = null), t.child !== null))
                                    switch (t.child.tag) {
                                        case 5:
                                            n = t.child.stateNode
                                            break
                                        case 1:
                                            n = t.child.stateNode
                                    }
                                Jc(t, o, n)
                            }
                            break
                        case 5:
                            var s = t.stateNode
                            if (n === null && t.flags & 4) {
                                n = s
                                var a = t.memoizedProps
                                switch (t.type) {
                                    case 'button':
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        a.autoFocus && n.focus()
                                        break
                                    case 'img':
                                        a.src && (n.src = a.src)
                                }
                            }
                            break
                        case 6:
                            break
                        case 4:
                            break
                        case 12:
                            break
                        case 13:
                            if (t.memoizedState === null) {
                                var u = t.alternate
                                if (u !== null) {
                                    var c = u.memoizedState
                                    if (c !== null) {
                                        var d = c.dehydrated
                                        d !== null && _i(d)
                                    }
                                }
                            }
                            break
                        case 19:
                        case 17:
                        case 21:
                        case 22:
                        case 23:
                        case 25:
                            break
                        default:
                            throw Error(B(163))
                    }
                $e || (t.flags & 512 && Pa(t))
            } catch (m) {
                Ee(t, t.return, m)
            }
        }
        if (t === e) {
            V = null
            break
        }
        if (((n = t.sibling), n !== null)) {
            ;(n.return = t.return), (V = n)
            break
        }
        V = t.return
    }
}
function hd(e) {
    for (; V !== null; ) {
        var t = V
        if (t === e) {
            V = null
            break
        }
        var n = t.sibling
        if (n !== null) {
            ;(n.return = t.return), (V = n)
            break
        }
        V = t.return
    }
}
function gd(e) {
    for (; V !== null; ) {
        var t = V
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return
                    try {
                        Oo(4, t)
                    } catch (a) {
                        Ee(t, n, a)
                    }
                    break
                case 1:
                    var r = t.stateNode
                    if (typeof r.componentDidMount == 'function') {
                        var i = t.return
                        try {
                            r.componentDidMount()
                        } catch (a) {
                            Ee(t, i, a)
                        }
                    }
                    var l = t.return
                    try {
                        Pa(t)
                    } catch (a) {
                        Ee(t, l, a)
                    }
                    break
                case 5:
                    var o = t.return
                    try {
                        Pa(t)
                    } catch (a) {
                        Ee(t, o, a)
                    }
            }
        } catch (a) {
            Ee(t, t.return, a)
        }
        if (t === e) {
            V = null
            break
        }
        var s = t.sibling
        if (s !== null) {
            ;(s.return = t.return), (V = s)
            break
        }
        V = t.return
    }
}
var ny = Math.ceil,
    lo = en.ReactCurrentDispatcher,
    Mu = en.ReactCurrentOwner,
    yt = en.ReactCurrentBatchConfig,
    ie = 0,
    Oe = null,
    _e = null,
    ze = 0,
    rt = 0,
    Er = Ln(0),
    ke = 0,
    ji = null,
    Yn = 0,
    Io = 0,
    ku = 0,
    vi = null,
    Xe = null,
    Lu = 0,
    zr = 1 / 0,
    $t = null,
    oo = !1,
    ka = null,
    En = null,
    xl = !1,
    mn = null,
    so = 0,
    yi = 0,
    La = null,
    Dl = -1,
    zl = 0
function Qe() {
    return ie & 6 ? Ce() : Dl !== -1 ? Dl : (Dl = Ce())
}
function Cn(e) {
    return e.mode & 1
        ? ie & 2 && ze !== 0
            ? ze & -ze
            : Fv.transition !== null
            ? (zl === 0 && (zl = Yf()), zl)
            : ((e = se),
              e !== 0 ||
                  ((e = window.event), (e = e === void 0 ? 16 : np(e.type))),
              e)
        : 1
}
function kt(e, t, n, r) {
    if (50 < yi) throw ((yi = 0), (La = null), Error(B(185)))
    Vi(e, n, r),
        (!(ie & 2) || e !== Oe) &&
            (e === Oe && (!(ie & 2) && (Io |= n), ke === 4 && fn(e, ze)),
            et(e, r),
            n === 1 &&
                ie === 0 &&
                !(t.mode & 1) &&
                ((zr = Ce() + 500), ko && Nn()))
}
function et(e, t) {
    var n = e.callbackNode
    Fg(e, t)
    var r = Hl(e, e === Oe ? ze : 0)
    if (r === 0)
        n !== null && Pc(n), (e.callbackNode = null), (e.callbackPriority = 0)
    else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((n != null && Pc(n), t === 1))
            e.tag === 0 ? Av(vd.bind(null, e)) : xp(vd.bind(null, e)),
                Rv(function () {
                    !(ie & 6) && Nn()
                }),
                (n = null)
        else {
            switch (Xf(r)) {
                case 1:
                    n = tu
                    break
                case 4:
                    n = Qf
                    break
                case 16:
                    n = Ul
                    break
                case 536870912:
                    n = Kf
                    break
                default:
                    n = Ul
            }
            n = wm(n, fm.bind(null, e))
        }
        ;(e.callbackPriority = t), (e.callbackNode = n)
    }
}
function fm(e, t) {
    if (((Dl = -1), (zl = 0), ie & 6)) throw Error(B(327))
    var n = e.callbackNode
    if (kr() && e.callbackNode !== n) return null
    var r = Hl(e, e === Oe ? ze : 0)
    if (r === 0) return null
    if (r & 30 || r & e.expiredLanes || t) t = ao(e, r)
    else {
        t = r
        var i = ie
        ie |= 2
        var l = mm()
        ;(Oe !== e || ze !== t) && (($t = null), (zr = Ce() + 500), Hn(e, t))
        do
            try {
                ly()
                break
            } catch (s) {
                pm(e, s)
            }
        while (!0)
        mu(),
            (lo.current = l),
            (ie = i),
            _e !== null ? (t = 0) : ((Oe = null), (ze = 0), (t = ke))
    }
    if (t !== 0) {
        if (
            (t === 2 && ((i = na(e)), i !== 0 && ((r = i), (t = Na(e, i)))),
            t === 1)
        )
            throw ((n = ji), Hn(e, 0), fn(e, r), et(e, Ce()), n)
        if (t === 6) fn(e, r)
        else {
            if (
                ((i = e.current.alternate),
                !(r & 30) &&
                    !ry(i) &&
                    ((t = ao(e, r)),
                    t === 2 &&
                        ((l = na(e)), l !== 0 && ((r = l), (t = Na(e, l)))),
                    t === 1))
            )
                throw ((n = ji), Hn(e, 0), fn(e, r), et(e, Ce()), n)
            switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
                case 0:
                case 1:
                    throw Error(B(345))
                case 2:
                    Dn(e, Xe, $t)
                    break
                case 3:
                    if (
                        (fn(e, r),
                        (r & 130023424) === r &&
                            ((t = Lu + 500 - Ce()), 10 < t))
                    ) {
                        if (Hl(e, 0) !== 0) break
                        if (((i = e.suspendedLanes), (i & r) !== r)) {
                            Qe(), (e.pingedLanes |= e.suspendedLanes & i)
                            break
                        }
                        e.timeoutHandle = ca(Dn.bind(null, e, Xe, $t), t)
                        break
                    }
                    Dn(e, Xe, $t)
                    break
                case 4:
                    if ((fn(e, r), (r & 4194240) === r)) break
                    for (t = e.eventTimes, i = -1; 0 < r; ) {
                        var o = 31 - Mt(r)
                        ;(l = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~l)
                    }
                    if (
                        ((r = i),
                        (r = Ce() - r),
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
                                : 1960 * ny(r / 1960)) - r),
                        10 < r)
                    ) {
                        e.timeoutHandle = ca(Dn.bind(null, e, Xe, $t), r)
                        break
                    }
                    Dn(e, Xe, $t)
                    break
                case 5:
                    Dn(e, Xe, $t)
                    break
                default:
                    throw Error(B(329))
            }
        }
    }
    return et(e, Ce()), e.callbackNode === n ? fm.bind(null, e) : null
}
function Na(e, t) {
    var n = vi
    return (
        e.current.memoizedState.isDehydrated && (Hn(e, t).flags |= 256),
        (e = ao(e, t)),
        e !== 2 && ((t = Xe), (Xe = n), t !== null && Oa(t)),
        e
    )
}
function Oa(e) {
    Xe === null ? (Xe = e) : Xe.push.apply(Xe, e)
}
function ry(e) {
    for (var t = e; ; ) {
        if (t.flags & 16384) {
            var n = t.updateQueue
            if (n !== null && ((n = n.stores), n !== null))
                for (var r = 0; r < n.length; r++) {
                    var i = n[r],
                        l = i.getSnapshot
                    i = i.value
                    try {
                        if (!Nt(l(), i)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
            (n.return = t), (t = n)
        else {
            if (t === e) break
            for (; t.sibling === null; ) {
                if (t.return === null || t.return === e) return !0
                t = t.return
            }
            ;(t.sibling.return = t.return), (t = t.sibling)
        }
    }
    return !0
}
function fn(e, t) {
    for (
        t &= ~ku,
            t &= ~Io,
            e.suspendedLanes |= t,
            e.pingedLanes &= ~t,
            e = e.expirationTimes;
        0 < t;

    ) {
        var n = 31 - Mt(t),
            r = 1 << n
        ;(e[n] = -1), (t &= ~r)
    }
}
function vd(e) {
    if (ie & 6) throw Error(B(327))
    kr()
    var t = Hl(e, 0)
    if (!(t & 1)) return et(e, Ce()), null
    var n = ao(e, t)
    if (e.tag !== 0 && n === 2) {
        var r = na(e)
        r !== 0 && ((t = r), (n = Na(e, r)))
    }
    if (n === 1) throw ((n = ji), Hn(e, 0), fn(e, t), et(e, Ce()), n)
    if (n === 6) throw Error(B(345))
    return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Dn(e, Xe, $t),
        et(e, Ce()),
        null
    )
}
function Nu(e, t) {
    var n = ie
    ie |= 1
    try {
        return e(t)
    } finally {
        ;(ie = n), ie === 0 && ((zr = Ce() + 500), ko && Nn())
    }
}
function Xn(e) {
    mn !== null && mn.tag === 0 && !(ie & 6) && kr()
    var t = ie
    ie |= 1
    var n = yt.transition,
        r = se
    try {
        if (((yt.transition = null), (se = 1), e)) return e()
    } finally {
        ;(se = r), (yt.transition = n), (ie = t), !(ie & 6) && Nn()
    }
}
function Ou() {
    ;(rt = Er.current), me(Er)
}
function Hn(e, t) {
    ;(e.finishedWork = null), (e.finishedLanes = 0)
    var n = e.timeoutHandle
    if ((n !== -1 && ((e.timeoutHandle = -1), bv(n)), _e !== null))
        for (n = _e.return; n !== null; ) {
            var r = n
            switch ((du(r), r.tag)) {
                case 1:
                    ;(r = r.type.childContextTypes), r != null && Yl()
                    break
                case 3:
                    Rr(), me(Je), me(Ge), Su()
                    break
                case 5:
                    wu(r)
                    break
                case 4:
                    Rr()
                    break
                case 13:
                    me(ve)
                    break
                case 19:
                    me(ve)
                    break
                case 10:
                    hu(r.type._context)
                    break
                case 22:
                case 23:
                    Ou()
            }
            n = n.return
        }
    if (
        ((Oe = e),
        (_e = e = Tn(e.current, null)),
        (ze = rt = t),
        (ke = 0),
        (ji = null),
        (ku = Io = Yn = 0),
        (Xe = vi = null),
        Bn !== null)
    ) {
        for (t = 0; t < Bn.length; t++)
            if (((n = Bn[t]), (r = n.interleaved), r !== null)) {
                n.interleaved = null
                var i = r.next,
                    l = n.pending
                if (l !== null) {
                    var o = l.next
                    ;(l.next = i), (r.next = o)
                }
                n.pending = r
            }
        Bn = null
    }
    return e
}
function pm(e, t) {
    do {
        var n = _e
        try {
            if ((mu(), (Il.current = io), ro)) {
                for (var r = ye.memoizedState; r !== null; ) {
                    var i = r.queue
                    i !== null && (i.pending = null), (r = r.next)
                }
                ro = !1
            }
            if (
                ((Kn = 0),
                (Ne = Me = ye = null),
                (hi = !1),
                (Ri = 0),
                (Mu.current = null),
                n === null || n.return === null)
            ) {
                ;(ke = 1), (ji = t), (_e = null)
                break
            }
            e: {
                var l = e,
                    o = n.return,
                    s = n,
                    a = t
                if (
                    ((t = ze),
                    (s.flags |= 32768),
                    a !== null &&
                        typeof a == 'object' &&
                        typeof a.then == 'function')
                ) {
                    var u = a,
                        c = s,
                        d = c.tag
                    if (!(c.mode & 1) && (d === 0 || d === 11 || d === 15)) {
                        var m = c.alternate
                        m
                            ? ((c.updateQueue = m.updateQueue),
                              (c.memoizedState = m.memoizedState),
                              (c.lanes = m.lanes))
                            : ((c.updateQueue = null), (c.memoizedState = null))
                    }
                    var v = id(o)
                    if (v !== null) {
                        ;(v.flags &= -257),
                            ld(v, o, s, l, t),
                            v.mode & 1 && rd(l, u, t),
                            (t = v),
                            (a = u)
                        var g = t.updateQueue
                        if (g === null) {
                            var y = new Set()
                            y.add(a), (t.updateQueue = y)
                        } else g.add(a)
                        break e
                    } else {
                        if (!(t & 1)) {
                            rd(l, u, t), Iu()
                            break e
                        }
                        a = Error(B(426))
                    }
                } else if (he && s.mode & 1) {
                    var C = id(o)
                    if (C !== null) {
                        !(C.flags & 65536) && (C.flags |= 256),
                            ld(C, o, s, l, t),
                            fu(Dr(a, s))
                        break e
                    }
                }
                ;(l = a = Dr(a, s)),
                    ke !== 4 && (ke = 2),
                    vi === null ? (vi = [l]) : vi.push(l),
                    (l = o)
                do {
                    switch (l.tag) {
                        case 3:
                            ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                            var f = Xp(l, a, t)
                            qc(l, f)
                            break e
                        case 1:
                            s = a
                            var p = l.type,
                                h = l.stateNode
                            if (
                                !(l.flags & 128) &&
                                (typeof p.getDerivedStateFromError ==
                                    'function' ||
                                    (h !== null &&
                                        typeof h.componentDidCatch ==
                                            'function' &&
                                        (En === null || !En.has(h))))
                            ) {
                                ;(l.flags |= 65536), (t &= -t), (l.lanes |= t)
                                var w = qp(l, s, t)
                                qc(l, w)
                                break e
                            }
                    }
                    l = l.return
                } while (l !== null)
            }
            gm(n)
        } catch (T) {
            ;(t = T), _e === n && n !== null && (_e = n = n.return)
            continue
        }
        break
    } while (!0)
}
function mm() {
    var e = lo.current
    return (lo.current = io), e === null ? io : e
}
function Iu() {
    ;(ke === 0 || ke === 3 || ke === 2) && (ke = 4),
        Oe === null || (!(Yn & 268435455) && !(Io & 268435455)) || fn(Oe, ze)
}
function ao(e, t) {
    var n = ie
    ie |= 2
    var r = mm()
    ;(Oe !== e || ze !== t) && (($t = null), Hn(e, t))
    do
        try {
            iy()
            break
        } catch (i) {
            pm(e, i)
        }
    while (!0)
    if ((mu(), (ie = n), (lo.current = r), _e !== null)) throw Error(B(261))
    return (Oe = null), (ze = 0), ke
}
function iy() {
    for (; _e !== null; ) hm(_e)
}
function ly() {
    for (; _e !== null && !Ng(); ) hm(_e)
}
function hm(e) {
    var t = ym(e.alternate, e, rt)
    ;(e.memoizedProps = e.pendingProps),
        t === null ? gm(e) : (_e = t),
        (Mu.current = null)
}
function gm(e) {
    var t = e
    do {
        var n = t.alternate
        if (((e = t.return), t.flags & 32768)) {
            if (((n = Jv(n, t)), n !== null)) {
                ;(n.flags &= 32767), (_e = n)
                return
            }
            if (e !== null)
                (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
            else {
                ;(ke = 6), (_e = null)
                return
            }
        } else if (((n = qv(n, t, rt)), n !== null)) {
            _e = n
            return
        }
        if (((t = t.sibling), t !== null)) {
            _e = t
            return
        }
        _e = t = e
    } while (t !== null)
    ke === 0 && (ke = 5)
}
function Dn(e, t, n) {
    var r = se,
        i = yt.transition
    try {
        ;(yt.transition = null), (se = 1), oy(e, t, n, r)
    } finally {
        ;(yt.transition = i), (se = r)
    }
    return null
}
function oy(e, t, n, r) {
    do kr()
    while (mn !== null)
    if (ie & 6) throw Error(B(327))
    n = e.finishedWork
    var i = e.finishedLanes
    if (n === null) return null
    if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
        throw Error(B(177))
    ;(e.callbackNode = null), (e.callbackPriority = 0)
    var l = n.lanes | n.childLanes
    if (
        (Bg(e, l),
        e === Oe && ((_e = Oe = null), (ze = 0)),
        (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
            xl ||
            ((xl = !0),
            wm(Ul, function () {
                return kr(), null
            })),
        (l = (n.flags & 15990) !== 0),
        n.subtreeFlags & 15990 || l)
    ) {
        ;(l = yt.transition), (yt.transition = null)
        var o = se
        se = 1
        var s = ie
        ;(ie |= 4),
            (Mu.current = null),
            ey(e, n),
            cm(n, e),
            _v(aa),
            (Vl = !!sa),
            (aa = sa = null),
            (e.current = n),
            ty(n),
            Og(),
            (ie = s),
            (se = o),
            (yt.transition = l)
    } else e.current = n
    if (
        (xl && ((xl = !1), (mn = e), (so = i)),
        (l = e.pendingLanes),
        l === 0 && (En = null),
        Rg(n.stateNode),
        et(e, Ce()),
        t !== null)
    )
        for (r = e.onRecoverableError, n = 0; n < t.length; n++)
            (i = t[n]),
                r(i.value, { componentStack: i.stack, digest: i.digest })
    if (oo) throw ((oo = !1), (e = ka), (ka = null), e)
    return (
        so & 1 && e.tag !== 0 && kr(),
        (l = e.pendingLanes),
        l & 1 ? (e === La ? yi++ : ((yi = 0), (La = e))) : (yi = 0),
        Nn(),
        null
    )
}
function kr() {
    if (mn !== null) {
        var e = Xf(so),
            t = yt.transition,
            n = se
        try {
            if (((yt.transition = null), (se = 16 > e ? 16 : e), mn === null))
                var r = !1
            else {
                if (((e = mn), (mn = null), (so = 0), ie & 6))
                    throw Error(B(331))
                var i = ie
                for (ie |= 4, V = e.current; V !== null; ) {
                    var l = V,
                        o = l.child
                    if (V.flags & 16) {
                        var s = l.deletions
                        if (s !== null) {
                            for (var a = 0; a < s.length; a++) {
                                var u = s[a]
                                for (V = u; V !== null; ) {
                                    var c = V
                                    switch (c.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            gi(8, c, l)
                                    }
                                    var d = c.child
                                    if (d !== null) (d.return = c), (V = d)
                                    else
                                        for (; V !== null; ) {
                                            c = V
                                            var m = c.sibling,
                                                v = c.return
                                            if ((sm(c), c === u)) {
                                                V = null
                                                break
                                            }
                                            if (m !== null) {
                                                ;(m.return = v), (V = m)
                                                break
                                            }
                                            V = v
                                        }
                                }
                            }
                            var g = l.alternate
                            if (g !== null) {
                                var y = g.child
                                if (y !== null) {
                                    g.child = null
                                    do {
                                        var C = y.sibling
                                        ;(y.sibling = null), (y = C)
                                    } while (y !== null)
                                }
                            }
                            V = l
                        }
                    }
                    if (l.subtreeFlags & 2064 && o !== null)
                        (o.return = l), (V = o)
                    else
                        e: for (; V !== null; ) {
                            if (((l = V), l.flags & 2048))
                                switch (l.tag) {
                                    case 0:
                                    case 11:
                                    case 15:
                                        gi(9, l, l.return)
                                }
                            var f = l.sibling
                            if (f !== null) {
                                ;(f.return = l.return), (V = f)
                                break e
                            }
                            V = l.return
                        }
                }
                var p = e.current
                for (V = p; V !== null; ) {
                    o = V
                    var h = o.child
                    if (o.subtreeFlags & 2064 && h !== null)
                        (h.return = o), (V = h)
                    else
                        e: for (o = p; V !== null; ) {
                            if (((s = V), s.flags & 2048))
                                try {
                                    switch (s.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            Oo(9, s)
                                    }
                                } catch (T) {
                                    Ee(s, s.return, T)
                                }
                            if (s === o) {
                                V = null
                                break e
                            }
                            var w = s.sibling
                            if (w !== null) {
                                ;(w.return = s.return), (V = w)
                                break e
                            }
                            V = s.return
                        }
                }
                if (
                    ((ie = i),
                    Nn(),
                    zt && typeof zt.onPostCommitFiberRoot == 'function')
                )
                    try {
                        zt.onPostCommitFiberRoot(Co, e)
                    } catch {}
                r = !0
            }
            return r
        } finally {
            ;(se = n), (yt.transition = t)
        }
    }
    return !1
}
function yd(e, t, n) {
    ;(t = Dr(n, t)),
        (t = Xp(e, t, 1)),
        (e = xn(e, t, 1)),
        (t = Qe()),
        e !== null && (Vi(e, 1, t), et(e, t))
}
function Ee(e, t, n) {
    if (e.tag === 3) yd(e, e, n)
    else
        for (; t !== null; ) {
            if (t.tag === 3) {
                yd(t, e, n)
                break
            } else if (t.tag === 1) {
                var r = t.stateNode
                if (
                    typeof t.type.getDerivedStateFromError == 'function' ||
                    (typeof r.componentDidCatch == 'function' &&
                        (En === null || !En.has(r)))
                ) {
                    ;(e = Dr(n, e)),
                        (e = qp(t, e, 1)),
                        (t = xn(t, e, 1)),
                        (e = Qe()),
                        t !== null && (Vi(t, 1, e), et(t, e))
                    break
                }
            }
            t = t.return
        }
}
function sy(e, t, n) {
    var r = e.pingCache
    r !== null && r.delete(t),
        (t = Qe()),
        (e.pingedLanes |= e.suspendedLanes & n),
        Oe === e &&
            (ze & n) === n &&
            (ke === 4 ||
            (ke === 3 && (ze & 130023424) === ze && 500 > Ce() - Lu)
                ? Hn(e, 0)
                : (ku |= n)),
        et(e, t)
}
function vm(e, t) {
    t === 0 &&
        (e.mode & 1
            ? ((t = dl), (dl <<= 1), !(dl & 130023424) && (dl = 4194304))
            : (t = 1))
    var n = Qe()
    ;(e = Xt(e, t)), e !== null && (Vi(e, t, n), et(e, n))
}
function ay(e) {
    var t = e.memoizedState,
        n = 0
    t !== null && (n = t.retryLane), vm(e, n)
}
function uy(e, t) {
    var n = 0
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                i = e.memoizedState
            i !== null && (n = i.retryLane)
            break
        case 19:
            r = e.stateNode
            break
        default:
            throw Error(B(314))
    }
    r !== null && r.delete(t), vm(e, n)
}
var ym
ym = function (e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Je.current) qe = !0
        else {
            if (!(e.lanes & n) && !(t.flags & 128))
                return (qe = !1), Xv(e, t, n)
            qe = !!(e.flags & 131072)
        }
    else (qe = !1), he && t.flags & 1048576 && Ep(t, Jl, t.index)
    switch (((t.lanes = 0), t.tag)) {
        case 2:
            var r = t.type
            Rl(e, t), (e = t.pendingProps)
            var i = Or(t, Ge.current)
            Mr(t, n), (i = Eu(null, t, r, e, i, n))
            var l = Cu()
            return (
                (t.flags |= 1),
                typeof i == 'object' &&
                i !== null &&
                typeof i.render == 'function' &&
                i.$$typeof === void 0
                    ? ((t.tag = 1),
                      (t.memoizedState = null),
                      (t.updateQueue = null),
                      Ze(r) ? ((l = !0), Xl(t)) : (l = !1),
                      (t.memoizedState =
                          i.state !== null && i.state !== void 0
                              ? i.state
                              : null),
                      vu(t),
                      (i.updater = No),
                      (t.stateNode = i),
                      (i._reactInternals = t),
                      va(t, r, e, n),
                      (t = Sa(null, t, r, !0, l, n)))
                    : ((t.tag = 0),
                      he && l && cu(t),
                      We(null, t, i, n),
                      (t = t.child)),
                t
            )
        case 16:
            r = t.elementType
            e: {
                switch (
                    (Rl(e, t),
                    (e = t.pendingProps),
                    (i = r._init),
                    (r = i(r._payload)),
                    (t.type = r),
                    (i = t.tag = dy(r)),
                    (e = Et(r, e)),
                    i)
                ) {
                    case 0:
                        t = wa(null, t, r, e, n)
                        break e
                    case 1:
                        t = ad(null, t, r, e, n)
                        break e
                    case 11:
                        t = od(null, t, r, e, n)
                        break e
                    case 14:
                        t = sd(null, t, r, Et(r.type, e), n)
                        break e
                }
                throw Error(B(306, r, ''))
            }
            return t
        case 0:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Et(r, i)),
                wa(e, t, r, i, n)
            )
        case 1:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Et(r, i)),
                ad(e, t, r, i, n)
            )
        case 3:
            e: {
                if ((tm(t), e === null)) throw Error(B(387))
                ;(r = t.pendingProps),
                    (l = t.memoizedState),
                    (i = l.element),
                    kp(e, t),
                    to(t, r, null, n)
                var o = t.memoizedState
                if (((r = o.element), l.isDehydrated))
                    if (
                        ((l = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries:
                                o.pendingSuspenseBoundaries,
                            transitions: o.transitions,
                        }),
                        (t.updateQueue.baseState = l),
                        (t.memoizedState = l),
                        t.flags & 256)
                    ) {
                        ;(i = Dr(Error(B(423)), t)), (t = ud(e, t, r, n, i))
                        break e
                    } else if (r !== i) {
                        ;(i = Dr(Error(B(424)), t)), (t = ud(e, t, r, n, i))
                        break e
                    } else
                        for (
                            ot = Sn(t.stateNode.containerInfo.firstChild),
                                at = t,
                                he = !0,
                                Pt = null,
                                n = _p(t, null, r, n),
                                t.child = n;
                            n;

                        )
                            (n.flags = (n.flags & -3) | 4096), (n = n.sibling)
                else {
                    if ((Ir(), r === i)) {
                        t = qt(e, t, n)
                        break e
                    }
                    We(e, t, r, n)
                }
                t = t.child
            }
            return t
        case 5:
            return (
                Lp(t),
                e === null && ma(t),
                (r = t.type),
                (i = t.pendingProps),
                (l = e !== null ? e.memoizedProps : null),
                (o = i.children),
                ua(r, i)
                    ? (o = null)
                    : l !== null && ua(r, l) && (t.flags |= 32),
                em(e, t),
                We(e, t, o, n),
                t.child
            )
        case 6:
            return e === null && ma(t), null
        case 13:
            return nm(e, t, n)
        case 4:
            return (
                yu(t, t.stateNode.containerInfo),
                (r = t.pendingProps),
                e === null ? (t.child = br(t, null, r, n)) : We(e, t, r, n),
                t.child
            )
        case 11:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Et(r, i)),
                od(e, t, r, i, n)
            )
        case 7:
            return We(e, t, t.pendingProps, n), t.child
        case 8:
            return We(e, t, t.pendingProps.children, n), t.child
        case 12:
            return We(e, t, t.pendingProps.children, n), t.child
        case 10:
            e: {
                if (
                    ((r = t.type._context),
                    (i = t.pendingProps),
                    (l = t.memoizedProps),
                    (o = i.value),
                    fe(Zl, r._currentValue),
                    (r._currentValue = o),
                    l !== null)
                )
                    if (Nt(l.value, o)) {
                        if (l.children === i.children && !Je.current) {
                            t = qt(e, t, n)
                            break e
                        }
                    } else
                        for (
                            l = t.child, l !== null && (l.return = t);
                            l !== null;

                        ) {
                            var s = l.dependencies
                            if (s !== null) {
                                o = l.child
                                for (var a = s.firstContext; a !== null; ) {
                                    if (a.context === r) {
                                        if (l.tag === 1) {
                                            ;(a = Wt(-1, n & -n)), (a.tag = 2)
                                            var u = l.updateQueue
                                            if (u !== null) {
                                                u = u.shared
                                                var c = u.pending
                                                c === null
                                                    ? (a.next = a)
                                                    : ((a.next = c.next),
                                                      (c.next = a)),
                                                    (u.pending = a)
                                            }
                                        }
                                        ;(l.lanes |= n),
                                            (a = l.alternate),
                                            a !== null && (a.lanes |= n),
                                            ha(l.return, n, t),
                                            (s.lanes |= n)
                                        break
                                    }
                                    a = a.next
                                }
                            } else if (l.tag === 10)
                                o = l.type === t.type ? null : l.child
                            else if (l.tag === 18) {
                                if (((o = l.return), o === null))
                                    throw Error(B(341))
                                ;(o.lanes |= n),
                                    (s = o.alternate),
                                    s !== null && (s.lanes |= n),
                                    ha(o, n, t),
                                    (o = l.sibling)
                            } else o = l.child
                            if (o !== null) o.return = l
                            else
                                for (o = l; o !== null; ) {
                                    if (o === t) {
                                        o = null
                                        break
                                    }
                                    if (((l = o.sibling), l !== null)) {
                                        ;(l.return = o.return), (o = l)
                                        break
                                    }
                                    o = o.return
                                }
                            l = o
                        }
                We(e, t, i.children, n), (t = t.child)
            }
            return t
        case 9:
            return (
                (i = t.type),
                (r = t.pendingProps.children),
                Mr(t, n),
                (i = wt(i)),
                (r = r(i)),
                (t.flags |= 1),
                We(e, t, r, n),
                t.child
            )
        case 14:
            return (
                (r = t.type),
                (i = Et(r, t.pendingProps)),
                (i = Et(r.type, i)),
                sd(e, t, r, i, n)
            )
        case 15:
            return Jp(e, t, t.type, t.pendingProps, n)
        case 17:
            return (
                (r = t.type),
                (i = t.pendingProps),
                (i = t.elementType === r ? i : Et(r, i)),
                Rl(e, t),
                (t.tag = 1),
                Ze(r) ? ((e = !0), Xl(t)) : (e = !1),
                Mr(t, n),
                Yp(t, r, i),
                va(t, r, i, n),
                Sa(null, t, r, !0, e, n)
            )
        case 19:
            return rm(e, t, n)
        case 22:
            return Zp(e, t, n)
    }
    throw Error(B(156, t.tag))
}
function wm(e, t) {
    return Wf(e, t)
}
function cy(e, t, n, r) {
    ;(this.tag = e),
        (this.key = n),
        (this.sibling =
            this.child =
            this.return =
            this.stateNode =
            this.type =
            this.elementType =
                null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
            this.memoizedState =
            this.updateQueue =
            this.memoizedProps =
                null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
}
function vt(e, t, n, r) {
    return new cy(e, t, n, r)
}
function bu(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent)
}
function dy(e) {
    if (typeof e == 'function') return bu(e) ? 1 : 0
    if (e != null) {
        if (((e = e.$$typeof), e === Ja)) return 11
        if (e === Za) return 14
    }
    return 2
}
function Tn(e, t) {
    var n = e.alternate
    return (
        n === null
            ? ((n = vt(e.tag, t, e.key, e.mode)),
              (n.elementType = e.elementType),
              (n.type = e.type),
              (n.stateNode = e.stateNode),
              (n.alternate = e),
              (e.alternate = n))
            : ((n.pendingProps = t),
              (n.type = e.type),
              (n.flags = 0),
              (n.subtreeFlags = 0),
              (n.deletions = null)),
        (n.flags = e.flags & 14680064),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
            t === null
                ? null
                : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
    )
}
function jl(e, t, n, r, i, l) {
    var o = 2
    if (((r = e), typeof e == 'function')) bu(e) && (o = 1)
    else if (typeof e == 'string') o = 5
    else
        e: switch (e) {
            case fr:
                return Vn(n.children, i, l, t)
            case qa:
                ;(o = 8), (i |= 8)
                break
            case $s:
                return (
                    (e = vt(12, n, t, i | 2)),
                    (e.elementType = $s),
                    (e.lanes = l),
                    e
                )
            case Gs:
                return (
                    (e = vt(13, n, t, i)),
                    (e.elementType = Gs),
                    (e.lanes = l),
                    e
                )
            case Us:
                return (
                    (e = vt(19, n, t, i)),
                    (e.elementType = Us),
                    (e.lanes = l),
                    e
                )
            case Lf:
                return bo(n, i, l, t)
            default:
                if (typeof e == 'object' && e !== null)
                    switch (e.$$typeof) {
                        case Mf:
                            o = 10
                            break e
                        case kf:
                            o = 9
                            break e
                        case Ja:
                            o = 11
                            break e
                        case Za:
                            o = 14
                            break e
                        case un:
                            ;(o = 16), (r = null)
                            break e
                    }
                throw Error(B(130, e == null ? e : typeof e, ''))
        }
    return (
        (t = vt(o, n, t, i)),
        (t.elementType = e),
        (t.type = r),
        (t.lanes = l),
        t
    )
}
function Vn(e, t, n, r) {
    return (e = vt(7, e, r, t)), (e.lanes = n), e
}
function bo(e, t, n, r) {
    return (
        (e = vt(22, e, r, t)),
        (e.elementType = Lf),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
    )
}
function Cs(e, t, n) {
    return (e = vt(6, e, null, t)), (e.lanes = n), e
}
function Ts(e, t, n) {
    return (
        (t = vt(4, e.children !== null ? e.children : [], e.key, t)),
        (t.lanes = n),
        (t.stateNode = {
            containerInfo: e.containerInfo,
            pendingChildren: null,
            implementation: e.implementation,
        }),
        t
    )
}
function fy(e, t, n, r, i) {
    ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
            this.pingCache =
            this.current =
            this.pendingChildren =
                null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = is(0)),
        (this.expirationTimes = is(-1)),
        (this.entangledLanes =
            this.finishedLanes =
            this.mutableReadLanes =
            this.expiredLanes =
            this.pingedLanes =
            this.suspendedLanes =
            this.pendingLanes =
                0),
        (this.entanglements = is(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = i),
        (this.mutableSourceEagerHydrationData = null)
}
function Ru(e, t, n, r, i, l, o, s, a) {
    return (
        (e = new fy(e, t, n, s, a)),
        t === 1 ? ((t = 1), l === !0 && (t |= 8)) : (t = 0),
        (l = vt(3, null, null, t)),
        (e.current = l),
        (l.stateNode = e),
        (l.memoizedState = {
            element: r,
            isDehydrated: n,
            cache: null,
            transitions: null,
            pendingSuspenseBoundaries: null,
        }),
        vu(l),
        e
    )
}
function py(e, t, n) {
    var r =
        3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null
    return {
        $$typeof: dr,
        key: r == null ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
    }
}
function Sm(e) {
    if (!e) return _n
    e = e._reactInternals
    e: {
        if (rr(e) !== e || e.tag !== 1) throw Error(B(170))
        var t = e
        do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context
                    break e
                case 1:
                    if (Ze(t.type)) {
                        t =
                            t.stateNode
                                .__reactInternalMemoizedMergedChildContext
                        break e
                    }
            }
            t = t.return
        } while (t !== null)
        throw Error(B(171))
    }
    if (e.tag === 1) {
        var n = e.type
        if (Ze(n)) return Sp(e, n, t)
    }
    return t
}
function xm(e, t, n, r, i, l, o, s, a) {
    return (
        (e = Ru(n, r, !0, e, i, l, o, s, a)),
        (e.context = Sm(null)),
        (n = e.current),
        (r = Qe()),
        (i = Cn(n)),
        (l = Wt(r, i)),
        (l.callback = t ?? null),
        xn(n, l, i),
        (e.current.lanes = i),
        Vi(e, i, r),
        et(e, r),
        e
    )
}
function Ro(e, t, n, r) {
    var i = t.current,
        l = Qe(),
        o = Cn(i)
    return (
        (n = Sm(n)),
        t.context === null ? (t.context = n) : (t.pendingContext = n),
        (t = Wt(l, o)),
        (t.payload = { element: e }),
        (r = r === void 0 ? null : r),
        r !== null && (t.callback = r),
        (e = xn(i, t, o)),
        e !== null && (kt(e, i, o, l), Ol(e, i, o)),
        o
    )
}
function uo(e) {
    if (((e = e.current), !e.child)) return null
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode
        default:
            return e.child.stateNode
    }
}
function wd(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
        var n = e.retryLane
        e.retryLane = n !== 0 && n < t ? n : t
    }
}
function Du(e, t) {
    wd(e, t), (e = e.alternate) && wd(e, t)
}
function my() {
    return null
}
var Em =
    typeof reportError == 'function'
        ? reportError
        : function (e) {
              console.error(e)
          }
function zu(e) {
    this._internalRoot = e
}
Do.prototype.render = zu.prototype.render = function (e) {
    var t = this._internalRoot
    if (t === null) throw Error(B(409))
    Ro(e, t, null, null)
}
Do.prototype.unmount = zu.prototype.unmount = function () {
    var e = this._internalRoot
    if (e !== null) {
        this._internalRoot = null
        var t = e.containerInfo
        Xn(function () {
            Ro(null, e, null, null)
        }),
            (t[Yt] = null)
    }
}
function Do(e) {
    this._internalRoot = e
}
Do.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
        var t = Zf()
        e = { blockedOn: null, target: e, priority: t }
        for (var n = 0; n < dn.length && t !== 0 && t < dn[n].priority; n++);
        dn.splice(n, 0, e), n === 0 && tp(e)
    }
}
function ju(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11))
}
function zo(e) {
    return !(
        !e ||
        (e.nodeType !== 1 &&
            e.nodeType !== 9 &&
            e.nodeType !== 11 &&
            (e.nodeType !== 8 ||
                e.nodeValue !== ' react-mount-point-unstable '))
    )
}
function Sd() {}
function hy(e, t, n, r, i) {
    if (i) {
        if (typeof r == 'function') {
            var l = r
            r = function () {
                var u = uo(o)
                l.call(u)
            }
        }
        var o = xm(t, r, e, 0, null, !1, !1, '', Sd)
        return (
            (e._reactRootContainer = o),
            (e[Yt] = o.current),
            Li(e.nodeType === 8 ? e.parentNode : e),
            Xn(),
            o
        )
    }
    for (; (i = e.lastChild); ) e.removeChild(i)
    if (typeof r == 'function') {
        var s = r
        r = function () {
            var u = uo(a)
            s.call(u)
        }
    }
    var a = Ru(e, 0, !1, null, null, !1, !1, '', Sd)
    return (
        (e._reactRootContainer = a),
        (e[Yt] = a.current),
        Li(e.nodeType === 8 ? e.parentNode : e),
        Xn(function () {
            Ro(t, a, n, r)
        }),
        a
    )
}
function jo(e, t, n, r, i) {
    var l = n._reactRootContainer
    if (l) {
        var o = l
        if (typeof i == 'function') {
            var s = i
            i = function () {
                var a = uo(o)
                s.call(a)
            }
        }
        Ro(t, o, e, i)
    } else o = hy(n, t, e, i, r)
    return uo(o)
}
qf = function (e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
                var n = oi(t.pendingLanes)
                n !== 0 &&
                    (nu(t, n | 1),
                    et(t, Ce()),
                    !(ie & 6) && ((zr = Ce() + 500), Nn()))
            }
            break
        case 13:
            Xn(function () {
                var r = Xt(e, 1)
                if (r !== null) {
                    var i = Qe()
                    kt(r, e, 1, i)
                }
            }),
                Du(e, 1)
    }
}
ru = function (e) {
    if (e.tag === 13) {
        var t = Xt(e, 134217728)
        if (t !== null) {
            var n = Qe()
            kt(t, e, 134217728, n)
        }
        Du(e, 134217728)
    }
}
Jf = function (e) {
    if (e.tag === 13) {
        var t = Cn(e),
            n = Xt(e, t)
        if (n !== null) {
            var r = Qe()
            kt(n, e, t, r)
        }
        Du(e, t)
    }
}
Zf = function () {
    return se
}
ep = function (e, t) {
    var n = se
    try {
        return (se = e), t()
    } finally {
        se = n
    }
}
Zs = function (e, t, n) {
    switch (t) {
        case 'input':
            if ((Ws(e, n), (t = n.name), n.type === 'radio' && t != null)) {
                for (n = e; n.parentNode; ) n = n.parentNode
                for (
                    n = n.querySelectorAll(
                        'input[name=' +
                            JSON.stringify('' + t) +
                            '][type="radio"]'
                    ),
                        t = 0;
                    t < n.length;
                    t++
                ) {
                    var r = n[t]
                    if (r !== e && r.form === e.form) {
                        var i = Mo(r)
                        if (!i) throw Error(B(90))
                        Of(r), Ws(r, i)
                    }
                }
            }
            break
        case 'textarea':
            bf(e, n)
            break
        case 'select':
            ;(t = n.value), t != null && Cr(e, !!n.multiple, t, !1)
    }
}
Bf = Nu
$f = Xn
var gy = { usingClientEntryPoint: !1, Events: [Qi, gr, Mo, Af, Ff, Nu] },
    ei = {
        findFiberByHostInstance: Fn,
        bundleType: 0,
        version: '18.3.1',
        rendererPackageName: 'react-dom',
    },
    vy = {
        bundleType: ei.bundleType,
        version: ei.version,
        rendererPackageName: ei.rendererPackageName,
        rendererConfig: ei.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: en.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
            return (e = Hf(e)), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: ei.findFiberByHostInstance || my,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.3.1-next-f1338f8080-20240426',
    }
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < 'u') {
    var El = __REACT_DEVTOOLS_GLOBAL_HOOK__
    if (!El.isDisabled && El.supportsFiber)
        try {
            ;(Co = El.inject(vy)), (zt = El)
        } catch {}
}
pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = gy
pt.createPortal = function (e, t) {
    var n =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null
    if (!ju(t)) throw Error(B(200))
    return py(e, t, null, n)
}
pt.createRoot = function (e, t) {
    if (!ju(e)) throw Error(B(299))
    var n = !1,
        r = '',
        i = Em
    return (
        t != null &&
            (t.unstable_strictMode === !0 && (n = !0),
            t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
            t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
        (t = Ru(e, 1, !1, null, null, n, !1, r, i)),
        (e[Yt] = t.current),
        Li(e.nodeType === 8 ? e.parentNode : e),
        new zu(t)
    )
}
pt.findDOMNode = function (e) {
    if (e == null) return null
    if (e.nodeType === 1) return e
    var t = e._reactInternals
    if (t === void 0)
        throw typeof e.render == 'function'
            ? Error(B(188))
            : ((e = Object.keys(e).join(',')), Error(B(268, e)))
    return (e = Hf(t)), (e = e === null ? null : e.stateNode), e
}
pt.flushSync = function (e) {
    return Xn(e)
}
pt.hydrate = function (e, t, n) {
    if (!zo(t)) throw Error(B(200))
    return jo(null, e, t, !0, n)
}
pt.hydrateRoot = function (e, t, n) {
    if (!ju(e)) throw Error(B(405))
    var r = (n != null && n.hydratedSources) || null,
        i = !1,
        l = '',
        o = Em
    if (
        (n != null &&
            (n.unstable_strictMode === !0 && (i = !0),
            n.identifierPrefix !== void 0 && (l = n.identifierPrefix),
            n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
        (t = xm(t, null, e, 1, n ?? null, i, !1, l, o)),
        (e[Yt] = t.current),
        Li(e),
        r)
    )
        for (e = 0; e < r.length; e++)
            (n = r[e]),
                (i = n._getVersion),
                (i = i(n._source)),
                t.mutableSourceEagerHydrationData == null
                    ? (t.mutableSourceEagerHydrationData = [n, i])
                    : t.mutableSourceEagerHydrationData.push(n, i)
    return new Do(t)
}
pt.render = function (e, t, n) {
    if (!zo(t)) throw Error(B(200))
    return jo(null, e, t, !1, n)
}
pt.unmountComponentAtNode = function (e) {
    if (!zo(e)) throw Error(B(40))
    return e._reactRootContainer
        ? (Xn(function () {
              jo(null, null, e, !1, function () {
                  ;(e._reactRootContainer = null), (e[Yt] = null)
              })
          }),
          !0)
        : !1
}
pt.unstable_batchedUpdates = Nu
pt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
    if (!zo(n)) throw Error(B(200))
    if (e == null || e._reactInternals === void 0) throw Error(B(38))
    return jo(e, t, n, !1, r)
}
pt.version = '18.3.1-next-f1338f8080-20240426'
function Cm() {
    if (
        !(
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > 'u' ||
            typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != 'function'
        )
    )
        try {
            __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm)
        } catch (e) {
            console.error(e)
        }
}
Cm(), (Cf.exports = pt)
var Ao = Cf.exports
const yy = df(Ao),
    wy = cf({ __proto__: null, default: yy }, [Ao])
var xd = Ao
;(Fs.createRoot = xd.createRoot), (Fs.hydrateRoot = xd.hydrateRoot)
/**
 * @remix-run/router v1.17.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function ge() {
    return (
        (ge = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        ge.apply(this, arguments)
    )
}
var Pe
;(function (e) {
    ;(e.Pop = 'POP'), (e.Push = 'PUSH'), (e.Replace = 'REPLACE')
})(Pe || (Pe = {}))
const Ed = 'popstate'
function Sy(e) {
    e === void 0 && (e = {})
    function t(r, i) {
        let { pathname: l, search: o, hash: s } = r.location
        return Ai(
            '',
            { pathname: l, search: o, hash: s },
            (i.state && i.state.usr) || null,
            (i.state && i.state.key) || 'default'
        )
    }
    function n(r, i) {
        return typeof i == 'string' ? i : qn(i)
    }
    return Ey(t, n, null, e)
}
function Z(e, t) {
    if (e === !1 || e === null || typeof e > 'u') throw new Error(t)
}
function jr(e, t) {
    if (!e) {
        typeof console < 'u' && console.warn(t)
        try {
            throw new Error(t)
        } catch {}
    }
}
function xy() {
    return Math.random().toString(36).substr(2, 8)
}
function Cd(e, t) {
    return { usr: e.state, key: e.key, idx: t }
}
function Ai(e, t, n, r) {
    return (
        n === void 0 && (n = null),
        ge(
            {
                pathname: typeof e == 'string' ? e : e.pathname,
                search: '',
                hash: '',
            },
            typeof t == 'string' ? On(t) : t,
            { state: n, key: (t && t.key) || r || xy() }
        )
    )
}
function qn(e) {
    let { pathname: t = '/', search: n = '', hash: r = '' } = e
    return (
        n && n !== '?' && (t += n.charAt(0) === '?' ? n : '?' + n),
        r && r !== '#' && (t += r.charAt(0) === '#' ? r : '#' + r),
        t
    )
}
function On(e) {
    let t = {}
    if (e) {
        let n = e.indexOf('#')
        n >= 0 && ((t.hash = e.substr(n)), (e = e.substr(0, n)))
        let r = e.indexOf('?')
        r >= 0 && ((t.search = e.substr(r)), (e = e.substr(0, r))),
            e && (t.pathname = e)
    }
    return t
}
function Ey(e, t, n, r) {
    r === void 0 && (r = {})
    let { window: i = document.defaultView, v5Compat: l = !1 } = r,
        o = i.history,
        s = Pe.Pop,
        a = null,
        u = c()
    u == null && ((u = 0), o.replaceState(ge({}, o.state, { idx: u }), ''))
    function c() {
        return (o.state || { idx: null }).idx
    }
    function d() {
        s = Pe.Pop
        let C = c(),
            f = C == null ? null : C - u
        ;(u = C), a && a({ action: s, location: y.location, delta: f })
    }
    function m(C, f) {
        s = Pe.Push
        let p = Ai(y.location, C, f)
        u = c() + 1
        let h = Cd(p, u),
            w = y.createHref(p)
        try {
            o.pushState(h, '', w)
        } catch (T) {
            if (T instanceof DOMException && T.name === 'DataCloneError')
                throw T
            i.location.assign(w)
        }
        l && a && a({ action: s, location: y.location, delta: 1 })
    }
    function v(C, f) {
        s = Pe.Replace
        let p = Ai(y.location, C, f)
        u = c()
        let h = Cd(p, u),
            w = y.createHref(p)
        o.replaceState(h, '', w),
            l && a && a({ action: s, location: y.location, delta: 0 })
    }
    function g(C) {
        let f =
                i.location.origin !== 'null'
                    ? i.location.origin
                    : i.location.href,
            p = typeof C == 'string' ? C : qn(C)
        return (
            (p = p.replace(/ $/, '%20')),
            Z(
                f,
                'No window.location.(origin|href) available to create URL for href: ' +
                    p
            ),
            new URL(p, f)
        )
    }
    let y = {
        get action() {
            return s
        },
        get location() {
            return e(i, o)
        },
        listen(C) {
            if (a) throw new Error('A history only accepts one active listener')
            return (
                i.addEventListener(Ed, d),
                (a = C),
                () => {
                    i.removeEventListener(Ed, d), (a = null)
                }
            )
        },
        createHref(C) {
            return t(i, C)
        },
        createURL: g,
        encodeLocation(C) {
            let f = g(C)
            return { pathname: f.pathname, search: f.search, hash: f.hash }
        },
        push: m,
        replace: v,
        go(C) {
            return o.go(C)
        },
    }
    return y
}
var de
;(function (e) {
    ;(e.data = 'data'),
        (e.deferred = 'deferred'),
        (e.redirect = 'redirect'),
        (e.error = 'error')
})(de || (de = {}))
const Cy = new Set(['lazy', 'caseSensitive', 'path', 'id', 'index', 'children'])
function Ty(e) {
    return e.index === !0
}
function Fi(e, t, n, r) {
    return (
        n === void 0 && (n = []),
        r === void 0 && (r = {}),
        e.map((i, l) => {
            let o = [...n, String(l)],
                s = typeof i.id == 'string' ? i.id : o.join('-')
            if (
                (Z(
                    i.index !== !0 || !i.children,
                    'Cannot specify children on an index route'
                ),
                Z(
                    !r[s],
                    'Found a route id collision on id "' +
                        s +
                        `".  Route id's must be globally unique within Data Router usages`
                ),
                Ty(i))
            ) {
                let a = ge({}, i, t(i), { id: s })
                return (r[s] = a), a
            } else {
                let a = ge({}, i, t(i), { id: s, children: void 0 })
                return (
                    (r[s] = a),
                    i.children && (a.children = Fi(i.children, t, o, r)),
                    a
                )
            }
        })
    )
}
function jn(e, t, n) {
    return n === void 0 && (n = '/'), Al(e, t, n, !1)
}
function Al(e, t, n, r) {
    let i = typeof t == 'string' ? On(t) : t,
        l = Jt(i.pathname || '/', n)
    if (l == null) return null
    let o = Tm(e)
    _y(o)
    let s = null
    for (let a = 0; s == null && a < o.length; ++a) {
        let u = jy(l)
        s = Dy(o[a], u, r)
    }
    return s
}
function Py(e, t) {
    let { route: n, pathname: r, params: i } = e
    return { id: n.id, pathname: r, params: i, data: t[n.id], handle: n.handle }
}
function Tm(e, t, n, r) {
    t === void 0 && (t = []), n === void 0 && (n = []), r === void 0 && (r = '')
    let i = (l, o, s) => {
        let a = {
            relativePath: s === void 0 ? l.path || '' : s,
            caseSensitive: l.caseSensitive === !0,
            childrenIndex: o,
            route: l,
        }
        a.relativePath.startsWith('/') &&
            (Z(
                a.relativePath.startsWith(r),
                'Absolute route path "' +
                    a.relativePath +
                    '" nested under path ' +
                    ('"' +
                        r +
                        '" is not valid. An absolute child route path ') +
                    'must start with the combined path of all its parent routes.'
            ),
            (a.relativePath = a.relativePath.slice(r.length)))
        let u = Qt([r, a.relativePath]),
            c = n.concat(a)
        l.children &&
            l.children.length > 0 &&
            (Z(
                l.index !== !0,
                'Index routes must not have child routes. Please remove ' +
                    ('all child routes from route path "' + u + '".')
            ),
            Tm(l.children, t, c, u)),
            !(l.path == null && !l.index) &&
                t.push({ path: u, score: by(u, l.index), routesMeta: c })
    }
    return (
        e.forEach((l, o) => {
            var s
            if (l.path === '' || !((s = l.path) != null && s.includes('?')))
                i(l, o)
            else for (let a of Pm(l.path)) i(l, o, a)
        }),
        t
    )
}
function Pm(e) {
    let t = e.split('/')
    if (t.length === 0) return []
    let [n, ...r] = t,
        i = n.endsWith('?'),
        l = n.replace(/\?$/, '')
    if (r.length === 0) return i ? [l, ''] : [l]
    let o = Pm(r.join('/')),
        s = []
    return (
        s.push(...o.map((a) => (a === '' ? l : [l, a].join('/')))),
        i && s.push(...o),
        s.map((a) => (e.startsWith('/') && a === '' ? '/' : a))
    )
}
function _y(e) {
    e.sort((t, n) =>
        t.score !== n.score
            ? n.score - t.score
            : Ry(
                  t.routesMeta.map((r) => r.childrenIndex),
                  n.routesMeta.map((r) => r.childrenIndex)
              )
    )
}
const My = /^:[\w-]+$/,
    ky = 3,
    Ly = 2,
    Ny = 1,
    Oy = 10,
    Iy = -2,
    Td = (e) => e === '*'
function by(e, t) {
    let n = e.split('/'),
        r = n.length
    return (
        n.some(Td) && (r += Iy),
        t && (r += Ly),
        n
            .filter((i) => !Td(i))
            .reduce((i, l) => i + (My.test(l) ? ky : l === '' ? Ny : Oy), r)
    )
}
function Ry(e, t) {
    return e.length === t.length && e.slice(0, -1).every((r, i) => r === t[i])
        ? e[e.length - 1] - t[t.length - 1]
        : 0
}
function Dy(e, t, n) {
    n === void 0 && (n = !1)
    let { routesMeta: r } = e,
        i = {},
        l = '/',
        o = []
    for (let s = 0; s < r.length; ++s) {
        let a = r[s],
            u = s === r.length - 1,
            c = l === '/' ? t : t.slice(l.length) || '/',
            d = co(
                {
                    path: a.relativePath,
                    caseSensitive: a.caseSensitive,
                    end: u,
                },
                c
            ),
            m = a.route
        if (
            (!d &&
                u &&
                n &&
                !r[r.length - 1].route.index &&
                (d = co(
                    {
                        path: a.relativePath,
                        caseSensitive: a.caseSensitive,
                        end: !1,
                    },
                    c
                )),
            !d)
        )
            return null
        Object.assign(i, d.params),
            o.push({
                params: i,
                pathname: Qt([l, d.pathname]),
                pathnameBase: By(Qt([l, d.pathnameBase])),
                route: m,
            }),
            d.pathnameBase !== '/' && (l = Qt([l, d.pathnameBase]))
    }
    return o
}
function co(e, t) {
    typeof e == 'string' && (e = { path: e, caseSensitive: !1, end: !0 })
    let [n, r] = zy(e.path, e.caseSensitive, e.end),
        i = t.match(n)
    if (!i) return null
    let l = i[0],
        o = l.replace(/(.)\/+$/, '$1'),
        s = i.slice(1)
    return {
        params: r.reduce((u, c, d) => {
            let { paramName: m, isOptional: v } = c
            if (m === '*') {
                let y = s[d] || ''
                o = l.slice(0, l.length - y.length).replace(/(.)\/+$/, '$1')
            }
            const g = s[d]
            return (
                v && !g
                    ? (u[m] = void 0)
                    : (u[m] = (g || '').replace(/%2F/g, '/')),
                u
            )
        }, {}),
        pathname: l,
        pathnameBase: o,
        pattern: e,
    }
}
function zy(e, t, n) {
    t === void 0 && (t = !1),
        n === void 0 && (n = !0),
        jr(
            e === '*' || !e.endsWith('*') || e.endsWith('/*'),
            'Route path "' +
                e +
                '" will be treated as if it were ' +
                ('"' +
                    e.replace(/\*$/, '/*') +
                    '" because the `*` character must ') +
                'always follow a `/` in the pattern. To get rid of this warning, ' +
                ('please change the route path to "' +
                    e.replace(/\*$/, '/*') +
                    '".')
        )
    let r = [],
        i =
            '^' +
            e
                .replace(/\/*\*?$/, '')
                .replace(/^\/*/, '/')
                .replace(/[\\.*+^${}|()[\]]/g, '\\$&')
                .replace(
                    /\/:([\w-]+)(\?)?/g,
                    (o, s, a) => (
                        r.push({ paramName: s, isOptional: a != null }),
                        a ? '/?([^\\/]+)?' : '/([^\\/]+)'
                    )
                )
    return (
        e.endsWith('*')
            ? (r.push({ paramName: '*' }),
              (i += e === '*' || e === '/*' ? '(.*)$' : '(?:\\/(.+)|\\/*)$'))
            : n
            ? (i += '\\/*$')
            : e !== '' && e !== '/' && (i += '(?:(?=\\/|$))'),
        [new RegExp(i, t ? void 0 : 'i'), r]
    )
}
function jy(e) {
    try {
        return e
            .split('/')
            .map((t) => decodeURIComponent(t).replace(/\//g, '%2F'))
            .join('/')
    } catch (t) {
        return (
            jr(
                !1,
                'The URL path "' +
                    e +
                    '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
                    ('encoding (' + t + ').')
            ),
            e
        )
    }
}
function Jt(e, t) {
    if (t === '/') return e
    if (!e.toLowerCase().startsWith(t.toLowerCase())) return null
    let n = t.endsWith('/') ? t.length - 1 : t.length,
        r = e.charAt(n)
    return r && r !== '/' ? null : e.slice(n) || '/'
}
function Ay(e, t) {
    t === void 0 && (t = '/')
    let {
        pathname: n,
        search: r = '',
        hash: i = '',
    } = typeof e == 'string' ? On(e) : e
    return {
        pathname: n ? (n.startsWith('/') ? n : Fy(n, t)) : t,
        search: $y(r),
        hash: Gy(i),
    }
}
function Fy(e, t) {
    let n = t.replace(/\/+$/, '').split('/')
    return (
        e.split('/').forEach((i) => {
            i === '..' ? n.length > 1 && n.pop() : i !== '.' && n.push(i)
        }),
        n.length > 1 ? n.join('/') : '/'
    )
}
function Ps(e, t, n, r) {
    return (
        "Cannot include a '" +
        e +
        "' character in a manually specified " +
        ('`to.' +
            t +
            '` field [' +
            JSON.stringify(r) +
            '].  Please separate it out to the ') +
        ('`to.' +
            n +
            '` field. Alternatively you may provide the full path as ') +
        'a string in <Link to="..."> and the router will parse it for you.'
    )
}
function _m(e) {
    return e.filter(
        (t, n) => n === 0 || (t.route.path && t.route.path.length > 0)
    )
}
function Au(e, t) {
    let n = _m(e)
    return t
        ? n.map((r, i) => (i === n.length - 1 ? r.pathname : r.pathnameBase))
        : n.map((r) => r.pathnameBase)
}
function Fu(e, t, n, r) {
    r === void 0 && (r = !1)
    let i
    typeof e == 'string'
        ? (i = On(e))
        : ((i = ge({}, e)),
          Z(
              !i.pathname || !i.pathname.includes('?'),
              Ps('?', 'pathname', 'search', i)
          ),
          Z(
              !i.pathname || !i.pathname.includes('#'),
              Ps('#', 'pathname', 'hash', i)
          ),
          Z(!i.search || !i.search.includes('#'), Ps('#', 'search', 'hash', i)))
    let l = e === '' || i.pathname === '',
        o = l ? '/' : i.pathname,
        s
    if (o == null) s = n
    else {
        let d = t.length - 1
        if (!r && o.startsWith('..')) {
            let m = o.split('/')
            for (; m[0] === '..'; ) m.shift(), (d -= 1)
            i.pathname = m.join('/')
        }
        s = d >= 0 ? t[d] : '/'
    }
    let a = Ay(i, s),
        u = o && o !== '/' && o.endsWith('/'),
        c = (l || o === '.') && n.endsWith('/')
    return !a.pathname.endsWith('/') && (u || c) && (a.pathname += '/'), a
}
const Qt = (e) => e.join('/').replace(/\/\/+/g, '/'),
    By = (e) => e.replace(/\/+$/, '').replace(/^\/*/, '/'),
    $y = (e) => (!e || e === '?' ? '' : e.startsWith('?') ? e : '?' + e),
    Gy = (e) => (!e || e === '#' ? '' : e.startsWith('#') ? e : '#' + e)
class Bu {
    constructor(t, n, r, i) {
        i === void 0 && (i = !1),
            (this.status = t),
            (this.statusText = n || ''),
            (this.internal = i),
            r instanceof Error
                ? ((this.data = r.toString()), (this.error = r))
                : (this.data = r)
    }
}
function Fo(e) {
    return (
        e != null &&
        typeof e.status == 'number' &&
        typeof e.statusText == 'string' &&
        typeof e.internal == 'boolean' &&
        'data' in e
    )
}
const Mm = ['post', 'put', 'patch', 'delete'],
    Uy = new Set(Mm),
    Hy = ['get', ...Mm],
    Vy = new Set(Hy),
    Wy = new Set([301, 302, 303, 307, 308]),
    Qy = new Set([307, 308]),
    _s = {
        state: 'idle',
        location: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    Ky = {
        state: 'idle',
        data: void 0,
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
    },
    ti = {
        state: 'unblocked',
        proceed: void 0,
        reset: void 0,
        location: void 0,
    },
    $u = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Yy = (e) => ({ hasErrorBoundary: !!e.hasErrorBoundary }),
    km = 'remix-router-transitions'
function Xy(e) {
    const t = e.window ? e.window : typeof window < 'u' ? window : void 0,
        n =
            typeof t < 'u' &&
            typeof t.document < 'u' &&
            typeof t.document.createElement < 'u',
        r = !n
    Z(
        e.routes.length > 0,
        'You must provide a non-empty routes array to createRouter'
    )
    let i
    if (e.mapRouteProperties) i = e.mapRouteProperties
    else if (e.detectErrorBoundary) {
        let E = e.detectErrorBoundary
        i = (_) => ({ hasErrorBoundary: E(_) })
    } else i = Yy
    let l = {},
        o = Fi(e.routes, i, void 0, l),
        s,
        a = e.basename || '/',
        u = e.unstable_dataStrategy || t0,
        c = e.unstable_patchRoutesOnMiss,
        d = ge(
            {
                v7_fetcherPersist: !1,
                v7_normalizeFormMethod: !1,
                v7_partialHydration: !1,
                v7_prependBasename: !1,
                v7_relativeSplatPath: !1,
                unstable_skipActionErrorRevalidation: !1,
            },
            e.future
        ),
        m = null,
        v = new Set(),
        g = null,
        y = null,
        C = null,
        f = e.hydrationData != null,
        p = jn(o, e.history.location, a),
        h = null
    if (p == null && !c) {
        let E = Ve(404, { pathname: e.history.location.pathname }),
            { matches: _, route: L } = Rd(o)
        ;(p = _), (h = { [L.id]: E })
    }
    p && c && Jo(p, o, e.history.location.pathname).active && (p = null)
    let w
    if (!p) (w = !1), (p = [])
    else if (p.some((E) => E.route.lazy)) w = !1
    else if (!p.some((E) => E.route.loader)) w = !0
    else if (d.v7_partialHydration) {
        let E = e.hydrationData ? e.hydrationData.loaderData : null,
            _ = e.hydrationData ? e.hydrationData.errors : null,
            L = (j) =>
                j.route.loader
                    ? typeof j.route.loader == 'function' &&
                      j.route.loader.hydrate === !0
                        ? !1
                        : (E && E[j.route.id] !== void 0) ||
                          (_ && _[j.route.id] !== void 0)
                    : !0
        if (_) {
            let j = p.findIndex((H) => _[H.route.id] !== void 0)
            w = p.slice(0, j + 1).every(L)
        } else w = p.every(L)
    } else w = e.hydrationData != null
    let T,
        S = {
            historyAction: e.history.action,
            location: e.history.location,
            matches: p,
            initialized: w,
            navigation: _s,
            restoreScrollPosition: e.hydrationData != null ? !1 : null,
            preventScrollReset: !1,
            revalidation: 'idle',
            loaderData: (e.hydrationData && e.hydrationData.loaderData) || {},
            actionData: (e.hydrationData && e.hydrationData.actionData) || null,
            errors: (e.hydrationData && e.hydrationData.errors) || h,
            fetchers: new Map(),
            blockers: new Map(),
        },
        R = Pe.Pop,
        M = !1,
        O,
        k = !1,
        A = new Map(),
        b = null,
        D = !1,
        F = !1,
        U = [],
        Y = [],
        I = new Map(),
        P = 0,
        z = -1,
        $ = new Map(),
        q = new Set(),
        te = new Map(),
        Ue = new Map(),
        Le = new Set(),
        Ae = new Map(),
        Ie = new Map(),
        ir = new Map(),
        Ko = !1
    function Nh() {
        if (
            ((m = e.history.listen((E) => {
                let { action: _, location: L, delta: j } = E
                if (Ko) {
                    Ko = !1
                    return
                }
                jr(
                    Ie.size === 0 || j != null,
                    'You are trying to use a blocker on a POP navigation to a location that was not created by @remix-run/router. This will fail silently in production. This can happen if you are navigating outside the router via `window.history.pushState`/`window.location.hash` instead of using router navigation APIs.  This can also happen if you are using createHashRouter and the user manually changes the URL.'
                )
                let H = uc({
                    currentLocation: S.location,
                    nextLocation: L,
                    historyAction: _,
                })
                if (H && j != null) {
                    ;(Ko = !0),
                        e.history.go(j * -1),
                        el(H, {
                            state: 'blocked',
                            location: L,
                            proceed() {
                                el(H, {
                                    state: 'proceeding',
                                    proceed: void 0,
                                    reset: void 0,
                                    location: L,
                                }),
                                    e.history.go(j)
                            },
                            reset() {
                                let W = new Map(S.blockers)
                                W.set(H, ti), He({ blockers: W })
                            },
                        })
                    return
                }
                return bn(_, L)
            })),
            n)
        ) {
            m0(t, A)
            let E = () => h0(t, A)
            t.addEventListener('pagehide', E),
                (b = () => t.removeEventListener('pagehide', E))
        }
        return (
            S.initialized || bn(Pe.Pop, S.location, { initialHydration: !0 }), T
        )
    }
    function Oh() {
        m && m(),
            b && b(),
            v.clear(),
            O && O.abort(),
            S.fetchers.forEach((E, _) => Zi(_)),
            S.blockers.forEach((E, _) => ac(_))
    }
    function Ih(E) {
        return v.add(E), () => v.delete(E)
    }
    function He(E, _) {
        _ === void 0 && (_ = {}), (S = ge({}, S, E))
        let L = [],
            j = []
        d.v7_fetcherPersist &&
            S.fetchers.forEach((H, W) => {
                H.state === 'idle' && (Le.has(W) ? j.push(W) : L.push(W))
            }),
            [...v].forEach((H) =>
                H(S, {
                    deletedFetchers: j,
                    unstable_viewTransitionOpts: _.viewTransitionOpts,
                    unstable_flushSync: _.flushSync === !0,
                })
            ),
            d.v7_fetcherPersist &&
                (L.forEach((H) => S.fetchers.delete(H)),
                j.forEach((H) => Zi(H)))
    }
    function lr(E, _, L) {
        var j, H
        let { flushSync: W } = L === void 0 ? {} : L,
            X =
                S.actionData != null &&
                S.navigation.formMethod != null &&
                Tt(S.navigation.formMethod) &&
                S.navigation.state === 'loading' &&
                ((j = E.state) == null ? void 0 : j._isRedirect) !== !0,
            G
        _.actionData
            ? Object.keys(_.actionData).length > 0
                ? (G = _.actionData)
                : (G = null)
            : X
            ? (G = S.actionData)
            : (G = null)
        let J = _.loaderData
                ? Id(S.loaderData, _.loaderData, _.matches || [], _.errors)
                : S.loaderData,
            Q = S.blockers
        Q.size > 0 && ((Q = new Map(Q)), Q.forEach((le, ue) => Q.set(ue, ti)))
        let K =
            M === !0 ||
            (S.navigation.formMethod != null &&
                Tt(S.navigation.formMethod) &&
                ((H = E.state) == null ? void 0 : H._isRedirect) !== !0)
        s && ((o = s), (s = void 0)),
            D ||
                R === Pe.Pop ||
                (R === Pe.Push
                    ? e.history.push(E, E.state)
                    : R === Pe.Replace && e.history.replace(E, E.state))
        let ae
        if (R === Pe.Pop) {
            let le = A.get(S.location.pathname)
            le && le.has(E.pathname)
                ? (ae = { currentLocation: S.location, nextLocation: E })
                : A.has(E.pathname) &&
                  (ae = { currentLocation: E, nextLocation: S.location })
        } else if (k) {
            let le = A.get(S.location.pathname)
            le
                ? le.add(E.pathname)
                : ((le = new Set([E.pathname])),
                  A.set(S.location.pathname, le)),
                (ae = { currentLocation: S.location, nextLocation: E })
        }
        He(
            ge({}, _, {
                actionData: G,
                loaderData: J,
                historyAction: R,
                location: E,
                initialized: !0,
                navigation: _s,
                revalidation: 'idle',
                restoreScrollPosition: dc(E, _.matches || S.matches),
                preventScrollReset: K,
                blockers: Q,
            }),
            { viewTransitionOpts: ae, flushSync: W === !0 }
        ),
            (R = Pe.Pop),
            (M = !1),
            (k = !1),
            (D = !1),
            (F = !1),
            (U = []),
            (Y = [])
    }
    async function tc(E, _) {
        if (typeof E == 'number') {
            e.history.go(E)
            return
        }
        let L = Ia(
                S.location,
                S.matches,
                a,
                d.v7_prependBasename,
                E,
                d.v7_relativeSplatPath,
                _ == null ? void 0 : _.fromRouteId,
                _ == null ? void 0 : _.relative
            ),
            {
                path: j,
                submission: H,
                error: W,
            } = Pd(d.v7_normalizeFormMethod, !1, L, _),
            X = S.location,
            G = Ai(S.location, j, _ && _.state)
        G = ge({}, G, e.history.encodeLocation(G))
        let J = _ && _.replace != null ? _.replace : void 0,
            Q = Pe.Push
        J === !0
            ? (Q = Pe.Replace)
            : J === !1 ||
              (H != null &&
                  Tt(H.formMethod) &&
                  H.formAction === S.location.pathname + S.location.search &&
                  (Q = Pe.Replace))
        let K =
                _ && 'preventScrollReset' in _
                    ? _.preventScrollReset === !0
                    : void 0,
            ae = (_ && _.unstable_flushSync) === !0,
            le = uc({ currentLocation: X, nextLocation: G, historyAction: Q })
        if (le) {
            el(le, {
                state: 'blocked',
                location: G,
                proceed() {
                    el(le, {
                        state: 'proceeding',
                        proceed: void 0,
                        reset: void 0,
                        location: G,
                    }),
                        tc(E, _)
                },
                reset() {
                    let ue = new Map(S.blockers)
                    ue.set(le, ti), He({ blockers: ue })
                },
            })
            return
        }
        return await bn(Q, G, {
            submission: H,
            pendingError: W,
            preventScrollReset: K,
            replace: _ && _.replace,
            enableViewTransition: _ && _.unstable_viewTransition,
            flushSync: ae,
        })
    }
    function bh() {
        if (
            (Yo(),
            He({ revalidation: 'loading' }),
            S.navigation.state !== 'submitting')
        ) {
            if (S.navigation.state === 'idle') {
                bn(S.historyAction, S.location, {
                    startUninterruptedRevalidation: !0,
                })
                return
            }
            bn(R || S.historyAction, S.navigation.location, {
                overrideNavigation: S.navigation,
            })
        }
    }
    async function bn(E, _, L) {
        O && O.abort(),
            (O = null),
            (R = E),
            (D = (L && L.startUninterruptedRevalidation) === !0),
            Uh(S.location, S.matches),
            (M = (L && L.preventScrollReset) === !0),
            (k = (L && L.enableViewTransition) === !0)
        let j = s || o,
            H = L && L.overrideNavigation,
            W = jn(j, _, a),
            X = (L && L.flushSync) === !0,
            G = Jo(W, j, _.pathname)
        if ((G.active && G.matches && (W = G.matches), !W)) {
            let { error: oe, notFoundMatches: be, route: Te } = Xo(_.pathname)
            lr(
                _,
                { matches: be, loaderData: {}, errors: { [Te.id]: oe } },
                { flushSync: X }
            )
            return
        }
        if (
            S.initialized &&
            !F &&
            s0(S.location, _) &&
            !(L && L.submission && Tt(L.submission.formMethod))
        ) {
            lr(_, { matches: W }, { flushSync: X })
            return
        }
        O = new AbortController()
        let J = cr(e.history, _, O.signal, L && L.submission),
            Q
        if (L && L.pendingError)
            Q = [wi(W).route.id, { type: de.error, error: L.pendingError }]
        else if (L && L.submission && Tt(L.submission.formMethod)) {
            let oe = await Rh(J, _, L.submission, W, G.active, {
                replace: L.replace,
                flushSync: X,
            })
            if (oe.shortCircuited) return
            if (oe.pendingActionResult) {
                let [be, Te] = oe.pendingActionResult
                if (it(Te) && Fo(Te.error) && Te.error.status === 404) {
                    ;(O = null),
                        lr(_, {
                            matches: oe.matches,
                            loaderData: {},
                            errors: { [be]: Te.error },
                        })
                    return
                }
            }
            ;(W = oe.matches || W),
                (Q = oe.pendingActionResult),
                (H = Ms(_, L.submission)),
                (X = !1),
                (G.active = !1),
                (J = cr(e.history, J.url, J.signal))
        }
        let {
            shortCircuited: K,
            matches: ae,
            loaderData: le,
            errors: ue,
        } = await Dh(
            J,
            _,
            W,
            G.active,
            H,
            L && L.submission,
            L && L.fetcherSubmission,
            L && L.replace,
            L && L.initialHydration === !0,
            X,
            Q
        )
        K ||
            ((O = null),
            lr(
                _,
                ge({ matches: ae || W }, bd(Q), { loaderData: le, errors: ue })
            ))
    }
    async function Rh(E, _, L, j, H, W) {
        W === void 0 && (W = {}), Yo()
        let X = f0(_, L)
        if ((He({ navigation: X }, { flushSync: W.flushSync === !0 }), H)) {
            let Q = await nl(j, _.pathname, E.signal)
            if (Q.type === 'aborted') return { shortCircuited: !0 }
            if (Q.type === 'error') {
                let {
                    error: K,
                    notFoundMatches: ae,
                    route: le,
                } = tl(_.pathname, Q)
                return {
                    matches: ae,
                    pendingActionResult: [le.id, { type: de.error, error: K }],
                }
            } else if (Q.matches) j = Q.matches
            else {
                let {
                    notFoundMatches: K,
                    error: ae,
                    route: le,
                } = Xo(_.pathname)
                return {
                    matches: K,
                    pendingActionResult: [le.id, { type: de.error, error: ae }],
                }
            }
        }
        let G,
            J = ai(j, _)
        if (!J.route.action && !J.route.lazy)
            G = {
                type: de.error,
                error: Ve(405, {
                    method: E.method,
                    pathname: _.pathname,
                    routeId: J.route.id,
                }),
            }
        else if (((G = (await Vr('action', E, [J], j))[0]), E.signal.aborted))
            return { shortCircuited: !0 }
        if (Un(G)) {
            let Q
            return (
                W && W.replace != null
                    ? (Q = W.replace)
                    : (Q =
                          Ld(
                              G.response.headers.get('Location'),
                              new URL(E.url),
                              a
                          ) ===
                          S.location.pathname + S.location.search),
                await Hr(E, G, { submission: L, replace: Q }),
                { shortCircuited: !0 }
            )
        }
        if (Gn(G)) throw Ve(400, { type: 'defer-action' })
        if (it(G)) {
            let Q = wi(j, J.route.id)
            return (
                (W && W.replace) !== !0 && (R = Pe.Push),
                { matches: j, pendingActionResult: [Q.route.id, G] }
            )
        }
        return { matches: j, pendingActionResult: [J.route.id, G] }
    }
    async function Dh(E, _, L, j, H, W, X, G, J, Q, K) {
        let ae = H || Ms(_, W),
            le = W || X || jd(ae),
            ue = !D && (!d.v7_partialHydration || !J)
        if (j) {
            if (ue) {
                let Se = nc(K)
                He(
                    ge(
                        { navigation: ae },
                        Se !== void 0 ? { actionData: Se } : {}
                    ),
                    { flushSync: Q }
                )
            }
            let ee = await nl(L, _.pathname, E.signal)
            if (ee.type === 'aborted') return { shortCircuited: !0 }
            if (ee.type === 'error') {
                let {
                    error: Se,
                    notFoundMatches: nt,
                    route: ce,
                } = tl(_.pathname, ee)
                return { matches: nt, loaderData: {}, errors: { [ce.id]: Se } }
            } else if (ee.matches) L = ee.matches
            else {
                let {
                    error: Se,
                    notFoundMatches: nt,
                    route: ce,
                } = Xo(_.pathname)
                return { matches: nt, loaderData: {}, errors: { [ce.id]: Se } }
            }
        }
        let oe = s || o,
            [be, Te] = _d(
                e.history,
                S,
                L,
                le,
                _,
                d.v7_partialHydration && J === !0,
                d.unstable_skipActionErrorRevalidation,
                F,
                U,
                Y,
                Le,
                te,
                q,
                oe,
                a,
                K
            )
        if (
            (qo(
                (ee) =>
                    !(L && L.some((Se) => Se.route.id === ee)) ||
                    (be && be.some((Se) => Se.route.id === ee))
            ),
            (z = ++P),
            be.length === 0 && Te.length === 0)
        ) {
            let ee = oc()
            return (
                lr(
                    _,
                    ge(
                        {
                            matches: L,
                            loaderData: {},
                            errors:
                                K && it(K[1]) ? { [K[0]]: K[1].error } : null,
                        },
                        bd(K),
                        ee ? { fetchers: new Map(S.fetchers) } : {}
                    ),
                    { flushSync: Q }
                ),
                { shortCircuited: !0 }
            )
        }
        if (ue) {
            let ee = {}
            if (!j) {
                ee.navigation = ae
                let Se = nc(K)
                Se !== void 0 && (ee.actionData = Se)
            }
            Te.length > 0 && (ee.fetchers = zh(Te)), He(ee, { flushSync: Q })
        }
        Te.forEach((ee) => {
            I.has(ee.key) && rn(ee.key),
                ee.controller && I.set(ee.key, ee.controller)
        })
        let Wr = () => Te.forEach((ee) => rn(ee.key))
        O && O.signal.addEventListener('abort', Wr)
        let { loaderResults: ln, fetcherResults: or } = await rc(
            S.matches,
            L,
            be,
            Te,
            E
        )
        if (E.signal.aborted) return { shortCircuited: !0 }
        O && O.signal.removeEventListener('abort', Wr),
            Te.forEach((ee) => I.delete(ee.key))
        let sr = Dd([...ln, ...or])
        if (sr) {
            if (sr.idx >= be.length) {
                let ee = Te[sr.idx - be.length].key
                q.add(ee)
            }
            return (
                await Hr(E, sr.result, { replace: G }), { shortCircuited: !0 }
            )
        }
        let { loaderData: ar, errors: Ot } = Od(S, L, be, ln, K, Te, or, Ae)
        Ae.forEach((ee, Se) => {
            ee.subscribe((nt) => {
                ;(nt || ee.done) && Ae.delete(Se)
            })
        }),
            d.v7_partialHydration &&
                J &&
                S.errors &&
                Object.entries(S.errors)
                    .filter((ee) => {
                        let [Se] = ee
                        return !be.some((nt) => nt.route.id === Se)
                    })
                    .forEach((ee) => {
                        let [Se, nt] = ee
                        Ot = Object.assign(Ot || {}, { [Se]: nt })
                    })
        let rl = oc(),
            il = sc(z),
            ll = rl || il || Te.length > 0
        return ge(
            { matches: L, loaderData: ar, errors: Ot },
            ll ? { fetchers: new Map(S.fetchers) } : {}
        )
    }
    function nc(E) {
        if (E && !it(E[1])) return { [E[0]]: E[1].data }
        if (S.actionData)
            return Object.keys(S.actionData).length === 0 ? null : S.actionData
    }
    function zh(E) {
        return (
            E.forEach((_) => {
                let L = S.fetchers.get(_.key),
                    j = ni(void 0, L ? L.data : void 0)
                S.fetchers.set(_.key, j)
            }),
            new Map(S.fetchers)
        )
    }
    function jh(E, _, L, j) {
        if (r)
            throw new Error(
                "router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback."
            )
        I.has(E) && rn(E)
        let H = (j && j.unstable_flushSync) === !0,
            W = s || o,
            X = Ia(
                S.location,
                S.matches,
                a,
                d.v7_prependBasename,
                L,
                d.v7_relativeSplatPath,
                _,
                j == null ? void 0 : j.relative
            ),
            G = jn(W, X, a),
            J = Jo(G, W, X)
        if ((J.active && J.matches && (G = J.matches), !G)) {
            At(E, _, Ve(404, { pathname: X }), { flushSync: H })
            return
        }
        let {
            path: Q,
            submission: K,
            error: ae,
        } = Pd(d.v7_normalizeFormMethod, !0, X, j)
        if (ae) {
            At(E, _, ae, { flushSync: H })
            return
        }
        let le = ai(G, Q)
        if (((M = (j && j.preventScrollReset) === !0), K && Tt(K.formMethod))) {
            Ah(E, _, Q, le, G, J.active, H, K)
            return
        }
        te.set(E, { routeId: _, path: Q }), Fh(E, _, Q, le, G, J.active, H, K)
    }
    async function Ah(E, _, L, j, H, W, X, G) {
        Yo(), te.delete(E)
        function J(ce) {
            if (!ce.route.action && !ce.route.lazy) {
                let Ft = Ve(405, {
                    method: G.formMethod,
                    pathname: L,
                    routeId: _,
                })
                return At(E, _, Ft, { flushSync: X }), !0
            }
            return !1
        }
        if (!W && J(j)) return
        let Q = S.fetchers.get(E)
        nn(E, p0(G, Q), { flushSync: X })
        let K = new AbortController(),
            ae = cr(e.history, L, K.signal, G)
        if (W) {
            let ce = await nl(H, L, ae.signal)
            if (ce.type === 'aborted') return
            if (ce.type === 'error') {
                let { error: Ft } = tl(L, ce)
                At(E, _, Ft, { flushSync: X })
                return
            } else if (ce.matches) {
                if (((H = ce.matches), (j = ai(H, L)), J(j))) return
            } else {
                At(E, _, Ve(404, { pathname: L }), { flushSync: X })
                return
            }
        }
        I.set(E, K)
        let le = P,
            oe = (await Vr('action', ae, [j], H))[0]
        if (ae.signal.aborted) {
            I.get(E) === K && I.delete(E)
            return
        }
        if (d.v7_fetcherPersist && Le.has(E)) {
            if (Un(oe) || it(oe)) {
                nn(E, sn(void 0))
                return
            }
        } else {
            if (Un(oe))
                if ((I.delete(E), z > le)) {
                    nn(E, sn(void 0))
                    return
                } else
                    return (
                        q.add(E),
                        nn(E, ni(G)),
                        Hr(ae, oe, { fetcherSubmission: G })
                    )
            if (it(oe)) {
                At(E, _, oe.error)
                return
            }
        }
        if (Gn(oe)) throw Ve(400, { type: 'defer-action' })
        let be = S.navigation.location || S.location,
            Te = cr(e.history, be, K.signal),
            Wr = s || o,
            ln =
                S.navigation.state !== 'idle'
                    ? jn(Wr, S.navigation.location, a)
                    : S.matches
        Z(ln, "Didn't find any matches after fetcher action")
        let or = ++P
        $.set(E, or)
        let sr = ni(G, oe.data)
        S.fetchers.set(E, sr)
        let [ar, Ot] = _d(
            e.history,
            S,
            ln,
            G,
            be,
            !1,
            d.unstable_skipActionErrorRevalidation,
            F,
            U,
            Y,
            Le,
            te,
            q,
            Wr,
            a,
            [j.route.id, oe]
        )
        Ot.filter((ce) => ce.key !== E).forEach((ce) => {
            let Ft = ce.key,
                fc = S.fetchers.get(Ft),
                Wh = ni(void 0, fc ? fc.data : void 0)
            S.fetchers.set(Ft, Wh),
                I.has(Ft) && rn(Ft),
                ce.controller && I.set(Ft, ce.controller)
        }),
            He({ fetchers: new Map(S.fetchers) })
        let rl = () => Ot.forEach((ce) => rn(ce.key))
        K.signal.addEventListener('abort', rl)
        let { loaderResults: il, fetcherResults: ll } = await rc(
            S.matches,
            ln,
            ar,
            Ot,
            Te
        )
        if (K.signal.aborted) return
        K.signal.removeEventListener('abort', rl),
            $.delete(E),
            I.delete(E),
            Ot.forEach((ce) => I.delete(ce.key))
        let ee = Dd([...il, ...ll])
        if (ee) {
            if (ee.idx >= ar.length) {
                let ce = Ot[ee.idx - ar.length].key
                q.add(ce)
            }
            return Hr(Te, ee.result)
        }
        let { loaderData: Se, errors: nt } = Od(
            S,
            S.matches,
            ar,
            il,
            void 0,
            Ot,
            ll,
            Ae
        )
        if (S.fetchers.has(E)) {
            let ce = sn(oe.data)
            S.fetchers.set(E, ce)
        }
        sc(or),
            S.navigation.state === 'loading' && or > z
                ? (Z(R, 'Expected pending action'),
                  O && O.abort(),
                  lr(S.navigation.location, {
                      matches: ln,
                      loaderData: Se,
                      errors: nt,
                      fetchers: new Map(S.fetchers),
                  }))
                : (He({
                      errors: nt,
                      loaderData: Id(S.loaderData, Se, ln, nt),
                      fetchers: new Map(S.fetchers),
                  }),
                  (F = !1))
    }
    async function Fh(E, _, L, j, H, W, X, G) {
        let J = S.fetchers.get(E)
        nn(E, ni(G, J ? J.data : void 0), { flushSync: X })
        let Q = new AbortController(),
            K = cr(e.history, L, Q.signal)
        if (W) {
            let oe = await nl(H, L, K.signal)
            if (oe.type === 'aborted') return
            if (oe.type === 'error') {
                let { error: be } = tl(L, oe)
                At(E, _, be, { flushSync: X })
                return
            } else if (oe.matches) (H = oe.matches), (j = ai(H, L))
            else {
                At(E, _, Ve(404, { pathname: L }), { flushSync: X })
                return
            }
        }
        I.set(E, Q)
        let ae = P,
            ue = (await Vr('loader', K, [j], H))[0]
        if (
            (Gn(ue) && (ue = (await bm(ue, K.signal, !0)) || ue),
            I.get(E) === Q && I.delete(E),
            !K.signal.aborted)
        ) {
            if (Le.has(E)) {
                nn(E, sn(void 0))
                return
            }
            if (Un(ue))
                if (z > ae) {
                    nn(E, sn(void 0))
                    return
                } else {
                    q.add(E), await Hr(K, ue)
                    return
                }
            if (it(ue)) {
                At(E, _, ue.error)
                return
            }
            Z(!Gn(ue), 'Unhandled fetcher deferred data'), nn(E, sn(ue.data))
        }
    }
    async function Hr(E, _, L) {
        let {
            submission: j,
            fetcherSubmission: H,
            replace: W,
        } = L === void 0 ? {} : L
        _.response.headers.has('X-Remix-Revalidate') && (F = !0)
        let X = _.response.headers.get('Location')
        Z(X, 'Expected a Location header on the redirect Response'),
            (X = Ld(X, new URL(E.url), a))
        let G = Ai(S.location, X, { _isRedirect: !0 })
        if (n) {
            let ue = !1
            if (_.response.headers.has('X-Remix-Reload-Document')) ue = !0
            else if ($u.test(X)) {
                const oe = e.history.createURL(X)
                ue =
                    oe.origin !== t.location.origin ||
                    Jt(oe.pathname, a) == null
            }
            if (ue) {
                W ? t.location.replace(X) : t.location.assign(X)
                return
            }
        }
        O = null
        let J = W === !0 ? Pe.Replace : Pe.Push,
            { formMethod: Q, formAction: K, formEncType: ae } = S.navigation
        !j && !H && Q && K && ae && (j = jd(S.navigation))
        let le = j || H
        if (Qy.has(_.response.status) && le && Tt(le.formMethod))
            await bn(J, G, {
                submission: ge({}, le, { formAction: X }),
                preventScrollReset: M,
            })
        else {
            let ue = Ms(G, j)
            await bn(J, G, {
                overrideNavigation: ue,
                fetcherSubmission: H,
                preventScrollReset: M,
            })
        }
    }
    async function Vr(E, _, L, j) {
        try {
            let H = await n0(u, E, _, L, j, l, i)
            return await Promise.all(
                H.map((W, X) => {
                    if (u0(W)) {
                        let G = W.result
                        return {
                            type: de.redirect,
                            response: l0(
                                G,
                                _,
                                L[X].route.id,
                                j,
                                a,
                                d.v7_relativeSplatPath
                            ),
                        }
                    }
                    return i0(W)
                })
            )
        } catch (H) {
            return L.map(() => ({ type: de.error, error: H }))
        }
    }
    async function rc(E, _, L, j, H) {
        let [W, ...X] = await Promise.all([
            L.length ? Vr('loader', H, L, _) : [],
            ...j.map((G) => {
                if (G.matches && G.match && G.controller) {
                    let J = cr(e.history, G.path, G.controller.signal)
                    return Vr('loader', J, [G.match], G.matches).then(
                        (Q) => Q[0]
                    )
                } else
                    return Promise.resolve({
                        type: de.error,
                        error: Ve(404, { pathname: G.path }),
                    })
            }),
        ])
        return (
            await Promise.all([
                zd(
                    E,
                    L,
                    W,
                    W.map(() => H.signal),
                    !1,
                    S.loaderData
                ),
                zd(
                    E,
                    j.map((G) => G.match),
                    X,
                    j.map((G) => (G.controller ? G.controller.signal : null)),
                    !0
                ),
            ]),
            { loaderResults: W, fetcherResults: X }
        )
    }
    function Yo() {
        ;(F = !0),
            U.push(...qo()),
            te.forEach((E, _) => {
                I.has(_) && (Y.push(_), rn(_))
            })
    }
    function nn(E, _, L) {
        L === void 0 && (L = {}),
            S.fetchers.set(E, _),
            He(
                { fetchers: new Map(S.fetchers) },
                { flushSync: (L && L.flushSync) === !0 }
            )
    }
    function At(E, _, L, j) {
        j === void 0 && (j = {})
        let H = wi(S.matches, _)
        Zi(E),
            He(
                { errors: { [H.route.id]: L }, fetchers: new Map(S.fetchers) },
                { flushSync: (j && j.flushSync) === !0 }
            )
    }
    function ic(E) {
        return (
            d.v7_fetcherPersist &&
                (Ue.set(E, (Ue.get(E) || 0) + 1), Le.has(E) && Le.delete(E)),
            S.fetchers.get(E) || Ky
        )
    }
    function Zi(E) {
        let _ = S.fetchers.get(E)
        I.has(E) && !(_ && _.state === 'loading' && $.has(E)) && rn(E),
            te.delete(E),
            $.delete(E),
            q.delete(E),
            Le.delete(E),
            S.fetchers.delete(E)
    }
    function Bh(E) {
        if (d.v7_fetcherPersist) {
            let _ = (Ue.get(E) || 0) - 1
            _ <= 0 ? (Ue.delete(E), Le.add(E)) : Ue.set(E, _)
        } else Zi(E)
        He({ fetchers: new Map(S.fetchers) })
    }
    function rn(E) {
        let _ = I.get(E)
        Z(_, 'Expected fetch controller: ' + E), _.abort(), I.delete(E)
    }
    function lc(E) {
        for (let _ of E) {
            let L = ic(_),
                j = sn(L.data)
            S.fetchers.set(_, j)
        }
    }
    function oc() {
        let E = [],
            _ = !1
        for (let L of q) {
            let j = S.fetchers.get(L)
            Z(j, 'Expected fetcher: ' + L),
                j.state === 'loading' && (q.delete(L), E.push(L), (_ = !0))
        }
        return lc(E), _
    }
    function sc(E) {
        let _ = []
        for (let [L, j] of $)
            if (j < E) {
                let H = S.fetchers.get(L)
                Z(H, 'Expected fetcher: ' + L),
                    H.state === 'loading' && (rn(L), $.delete(L), _.push(L))
            }
        return lc(_), _.length > 0
    }
    function $h(E, _) {
        let L = S.blockers.get(E) || ti
        return Ie.get(E) !== _ && Ie.set(E, _), L
    }
    function ac(E) {
        S.blockers.delete(E), Ie.delete(E)
    }
    function el(E, _) {
        let L = S.blockers.get(E) || ti
        Z(
            (L.state === 'unblocked' && _.state === 'blocked') ||
                (L.state === 'blocked' && _.state === 'blocked') ||
                (L.state === 'blocked' && _.state === 'proceeding') ||
                (L.state === 'blocked' && _.state === 'unblocked') ||
                (L.state === 'proceeding' && _.state === 'unblocked'),
            'Invalid blocker state transition: ' + L.state + ' -> ' + _.state
        )
        let j = new Map(S.blockers)
        j.set(E, _), He({ blockers: j })
    }
    function uc(E) {
        let { currentLocation: _, nextLocation: L, historyAction: j } = E
        if (Ie.size === 0) return
        Ie.size > 1 && jr(!1, 'A router only supports one blocker at a time')
        let H = Array.from(Ie.entries()),
            [W, X] = H[H.length - 1],
            G = S.blockers.get(W)
        if (
            !(G && G.state === 'proceeding') &&
            X({ currentLocation: _, nextLocation: L, historyAction: j })
        )
            return W
    }
    function Xo(E) {
        let _ = Ve(404, { pathname: E }),
            L = s || o,
            { matches: j, route: H } = Rd(L)
        return qo(), { notFoundMatches: j, route: H, error: _ }
    }
    function tl(E, _) {
        let L = _.partialMatches,
            j = L[L.length - 1].route,
            H = Ve(400, {
                type: 'route-discovery',
                routeId: j.id,
                pathname: E,
                message:
                    _.error != null && 'message' in _.error
                        ? _.error
                        : String(_.error),
            })
        return { notFoundMatches: L, route: j, error: H }
    }
    function qo(E) {
        let _ = []
        return (
            Ae.forEach((L, j) => {
                ;(!E || E(j)) && (L.cancel(), _.push(j), Ae.delete(j))
            }),
            _
        )
    }
    function Gh(E, _, L) {
        if (((g = E), (C = _), (y = L || null), !f && S.navigation === _s)) {
            f = !0
            let j = dc(S.location, S.matches)
            j != null && He({ restoreScrollPosition: j })
        }
        return () => {
            ;(g = null), (C = null), (y = null)
        }
    }
    function cc(E, _) {
        return (
            (y &&
                y(
                    E,
                    _.map((j) => Py(j, S.loaderData))
                )) ||
            E.key
        )
    }
    function Uh(E, _) {
        if (g && C) {
            let L = cc(E, _)
            g[L] = C()
        }
    }
    function dc(E, _) {
        if (g) {
            let L = cc(E, _),
                j = g[L]
            if (typeof j == 'number') return j
        }
        return null
    }
    function Jo(E, _, L) {
        if (c)
            if (E) {
                let j = E[E.length - 1].route
                if (j.path && (j.path === '*' || j.path.endsWith('/*')))
                    return { active: !0, matches: Al(_, L, a, !0) }
            } else return { active: !0, matches: Al(_, L, a, !0) || [] }
        return { active: !1, matches: null }
    }
    async function nl(E, _, L) {
        let j = E,
            H = j.length > 0 ? j[j.length - 1].route : null
        for (;;) {
            let W = s == null,
                X = s || o
            try {
                await e0(c, _, j, X, l, i, ir, L)
            } catch (K) {
                return { type: 'error', error: K, partialMatches: j }
            } finally {
                W && (o = [...o])
            }
            if (L.aborted) return { type: 'aborted' }
            let G = jn(X, _, a),
                J = !1
            if (G) {
                let K = G[G.length - 1].route
                if (K.index) return { type: 'success', matches: G }
                if (K.path && K.path.length > 0)
                    if (K.path === '*') J = !0
                    else return { type: 'success', matches: G }
            }
            let Q = Al(X, _, a, !0)
            if (
                !Q ||
                j.map((K) => K.route.id).join('-') ===
                    Q.map((K) => K.route.id).join('-')
            )
                return { type: 'success', matches: J ? G : null }
            if (((j = Q), (H = j[j.length - 1].route), H.path === '*'))
                return { type: 'success', matches: j }
        }
    }
    function Hh(E) {
        ;(l = {}), (s = Fi(E, i, void 0, l))
    }
    function Vh(E, _) {
        let L = s == null
        Nm(E, _, s || o, l, i), L && ((o = [...o]), He({}))
    }
    return (
        (T = {
            get basename() {
                return a
            },
            get future() {
                return d
            },
            get state() {
                return S
            },
            get routes() {
                return o
            },
            get window() {
                return t
            },
            initialize: Nh,
            subscribe: Ih,
            enableScrollRestoration: Gh,
            navigate: tc,
            fetch: jh,
            revalidate: bh,
            createHref: (E) => e.history.createHref(E),
            encodeLocation: (E) => e.history.encodeLocation(E),
            getFetcher: ic,
            deleteFetcher: Bh,
            dispose: Oh,
            getBlocker: $h,
            deleteBlocker: ac,
            patchRoutes: Vh,
            _internalFetchControllers: I,
            _internalActiveDeferreds: Ae,
            _internalSetRoutes: Hh,
        }),
        T
    )
}
function qy(e) {
    return (
        e != null &&
        (('formData' in e && e.formData != null) ||
            ('body' in e && e.body !== void 0))
    )
}
function Ia(e, t, n, r, i, l, o, s) {
    let a, u
    if (o) {
        a = []
        for (let d of t)
            if ((a.push(d), d.route.id === o)) {
                u = d
                break
            }
    } else (a = t), (u = t[t.length - 1])
    let c = Fu(
        i || '.',
        Au(a, l),
        Jt(e.pathname, n) || e.pathname,
        s === 'path'
    )
    return (
        i == null && ((c.search = e.search), (c.hash = e.hash)),
        (i == null || i === '' || i === '.') &&
            u &&
            u.route.index &&
            !Gu(c.search) &&
            (c.search = c.search
                ? c.search.replace(/^\?/, '?index&')
                : '?index'),
        r &&
            n !== '/' &&
            (c.pathname = c.pathname === '/' ? n : Qt([n, c.pathname])),
        qn(c)
    )
}
function Pd(e, t, n, r) {
    if (!r || !qy(r)) return { path: n }
    if (r.formMethod && !d0(r.formMethod))
        return { path: n, error: Ve(405, { method: r.formMethod }) }
    let i = () => ({ path: n, error: Ve(400, { type: 'invalid-body' }) }),
        l = r.formMethod || 'get',
        o = e ? l.toUpperCase() : l.toLowerCase(),
        s = Om(n)
    if (r.body !== void 0) {
        if (r.formEncType === 'text/plain') {
            if (!Tt(o)) return i()
            let m =
                typeof r.body == 'string'
                    ? r.body
                    : r.body instanceof FormData ||
                      r.body instanceof URLSearchParams
                    ? Array.from(r.body.entries()).reduce((v, g) => {
                          let [y, C] = g
                          return (
                              '' +
                              v +
                              y +
                              '=' +
                              C +
                              `
`
                          )
                      }, '')
                    : String(r.body)
            return {
                path: n,
                submission: {
                    formMethod: o,
                    formAction: s,
                    formEncType: r.formEncType,
                    formData: void 0,
                    json: void 0,
                    text: m,
                },
            }
        } else if (r.formEncType === 'application/json') {
            if (!Tt(o)) return i()
            try {
                let m = typeof r.body == 'string' ? JSON.parse(r.body) : r.body
                return {
                    path: n,
                    submission: {
                        formMethod: o,
                        formAction: s,
                        formEncType: r.formEncType,
                        formData: void 0,
                        json: m,
                        text: void 0,
                    },
                }
            } catch {
                return i()
            }
        }
    }
    Z(
        typeof FormData == 'function',
        'FormData is not available in this environment'
    )
    let a, u
    if (r.formData) (a = ba(r.formData)), (u = r.formData)
    else if (r.body instanceof FormData) (a = ba(r.body)), (u = r.body)
    else if (r.body instanceof URLSearchParams) (a = r.body), (u = Nd(a))
    else if (r.body == null) (a = new URLSearchParams()), (u = new FormData())
    else
        try {
            ;(a = new URLSearchParams(r.body)), (u = Nd(a))
        } catch {
            return i()
        }
    let c = {
        formMethod: o,
        formAction: s,
        formEncType:
            (r && r.formEncType) || 'application/x-www-form-urlencoded',
        formData: u,
        json: void 0,
        text: void 0,
    }
    if (Tt(c.formMethod)) return { path: n, submission: c }
    let d = On(n)
    return (
        t && d.search && Gu(d.search) && a.append('index', ''),
        (d.search = '?' + a),
        { path: qn(d), submission: c }
    )
}
function Jy(e, t) {
    let n = e
    if (t) {
        let r = e.findIndex((i) => i.route.id === t)
        r >= 0 && (n = e.slice(0, r))
    }
    return n
}
function _d(e, t, n, r, i, l, o, s, a, u, c, d, m, v, g, y) {
    let C = y ? (it(y[1]) ? y[1].error : y[1].data) : void 0,
        f = e.createURL(t.location),
        p = e.createURL(i),
        h = y && it(y[1]) ? y[0] : void 0,
        w = h ? Jy(n, h) : n,
        T = y ? y[1].statusCode : void 0,
        S = o && T && T >= 400,
        R = w.filter((O, k) => {
            let { route: A } = O
            if (A.lazy) return !0
            if (A.loader == null) return !1
            if (l)
                return typeof A.loader != 'function' || A.loader.hydrate
                    ? !0
                    : t.loaderData[A.id] === void 0 &&
                          (!t.errors || t.errors[A.id] === void 0)
            if (
                Zy(t.loaderData, t.matches[k], O) ||
                a.some((F) => F === O.route.id)
            )
                return !0
            let b = t.matches[k],
                D = O
            return Md(
                O,
                ge(
                    {
                        currentUrl: f,
                        currentParams: b.params,
                        nextUrl: p,
                        nextParams: D.params,
                    },
                    r,
                    {
                        actionResult: C,
                        unstable_actionStatus: T,
                        defaultShouldRevalidate: S
                            ? !1
                            : s ||
                              f.pathname + f.search === p.pathname + p.search ||
                              f.search !== p.search ||
                              Lm(b, D),
                    }
                )
            )
        }),
        M = []
    return (
        d.forEach((O, k) => {
            if (l || !n.some((U) => U.route.id === O.routeId) || c.has(k))
                return
            let A = jn(v, O.path, g)
            if (!A) {
                M.push({
                    key: k,
                    routeId: O.routeId,
                    path: O.path,
                    matches: null,
                    match: null,
                    controller: null,
                })
                return
            }
            let b = t.fetchers.get(k),
                D = ai(A, O.path),
                F = !1
            m.has(k)
                ? (F = !1)
                : u.includes(k)
                ? (F = !0)
                : b && b.state !== 'idle' && b.data === void 0
                ? (F = s)
                : (F = Md(
                      D,
                      ge(
                          {
                              currentUrl: f,
                              currentParams:
                                  t.matches[t.matches.length - 1].params,
                              nextUrl: p,
                              nextParams: n[n.length - 1].params,
                          },
                          r,
                          {
                              actionResult: C,
                              unstable_actionStatus: T,
                              defaultShouldRevalidate: S ? !1 : s,
                          }
                      )
                  )),
                F &&
                    M.push({
                        key: k,
                        routeId: O.routeId,
                        path: O.path,
                        matches: A,
                        match: D,
                        controller: new AbortController(),
                    })
        }),
        [R, M]
    )
}
function Zy(e, t, n) {
    let r = !t || n.route.id !== t.route.id,
        i = e[n.route.id] === void 0
    return r || i
}
function Lm(e, t) {
    let n = e.route.path
    return (
        e.pathname !== t.pathname ||
        (n != null && n.endsWith('*') && e.params['*'] !== t.params['*'])
    )
}
function Md(e, t) {
    if (e.route.shouldRevalidate) {
        let n = e.route.shouldRevalidate(t)
        if (typeof n == 'boolean') return n
    }
    return t.defaultShouldRevalidate
}
async function e0(e, t, n, r, i, l, o, s) {
    let a = [t, ...n.map((u) => u.route.id)].join('-')
    try {
        let u = o.get(a)
        u ||
            ((u = e({
                path: t,
                matches: n,
                patch: (c, d) => {
                    s.aborted || Nm(c, d, r, i, l)
                },
            })),
            o.set(a, u)),
            u && a0(u) && (await u)
    } finally {
        o.delete(a)
    }
}
function Nm(e, t, n, r, i) {
    if (e) {
        var l
        let o = r[e]
        Z(o, 'No route found to patch children into: routeId = ' + e)
        let s = Fi(
            t,
            i,
            [
                e,
                'patch',
                String(((l = o.children) == null ? void 0 : l.length) || '0'),
            ],
            r
        )
        o.children ? o.children.push(...s) : (o.children = s)
    } else {
        let o = Fi(t, i, ['patch', String(n.length || '0')], r)
        n.push(...o)
    }
}
async function kd(e, t, n) {
    if (!e.lazy) return
    let r = await e.lazy()
    if (!e.lazy) return
    let i = n[e.id]
    Z(i, 'No route found in manifest')
    let l = {}
    for (let o in r) {
        let a = i[o] !== void 0 && o !== 'hasErrorBoundary'
        jr(
            !a,
            'Route "' +
                i.id +
                '" has a static property "' +
                o +
                '" defined but its lazy function is also returning a value for this property. ' +
                ('The lazy route property "' + o + '" will be ignored.')
        ),
            !a && !Cy.has(o) && (l[o] = r[o])
    }
    Object.assign(i, l), Object.assign(i, ge({}, t(i), { lazy: void 0 }))
}
function t0(e) {
    return Promise.all(e.matches.map((t) => t.resolve()))
}
async function n0(e, t, n, r, i, l, o, s) {
    let a = r.reduce((d, m) => d.add(m.route.id), new Set()),
        u = new Set(),
        c = await e({
            matches: i.map((d) => {
                let m = a.has(d.route.id)
                return ge({}, d, {
                    shouldLoad: m,
                    resolve: (g) => (
                        u.add(d.route.id),
                        m
                            ? r0(t, n, d, l, o, g, s)
                            : Promise.resolve({ type: de.data, result: void 0 })
                    ),
                })
            }),
            request: n,
            params: i[0].params,
            context: s,
        })
    return (
        i.forEach((d) =>
            Z(
                u.has(d.route.id),
                '`match.resolve()` was not called for route id "' +
                    d.route.id +
                    '". You must call `match.resolve()` on every match passed to `dataStrategy` to ensure all routes are properly loaded.'
            )
        ),
        c.filter((d, m) => a.has(i[m].route.id))
    )
}
async function r0(e, t, n, r, i, l, o) {
    let s,
        a,
        u = (c) => {
            let d,
                m = new Promise((y, C) => (d = C))
            ;(a = () => d()), t.signal.addEventListener('abort', a)
            let v = (y) =>
                    typeof c != 'function'
                        ? Promise.reject(
                              new Error(
                                  'You cannot call the handler for a route which defines a boolean ' +
                                      ('"' +
                                          e +
                                          '" [routeId: ' +
                                          n.route.id +
                                          ']')
                              )
                          )
                        : c(
                              { request: t, params: n.params, context: o },
                              ...(y !== void 0 ? [y] : [])
                          ),
                g
            return (
                l
                    ? (g = l((y) => v(y)))
                    : (g = (async () => {
                          try {
                              return { type: 'data', result: await v() }
                          } catch (y) {
                              return { type: 'error', result: y }
                          }
                      })()),
                Promise.race([g, m])
            )
        }
    try {
        let c = n.route[e]
        if (n.route.lazy)
            if (c) {
                let d,
                    [m] = await Promise.all([
                        u(c).catch((v) => {
                            d = v
                        }),
                        kd(n.route, i, r),
                    ])
                if (d !== void 0) throw d
                s = m
            } else if ((await kd(n.route, i, r), (c = n.route[e]), c))
                s = await u(c)
            else if (e === 'action') {
                let d = new URL(t.url),
                    m = d.pathname + d.search
                throw Ve(405, {
                    method: t.method,
                    pathname: m,
                    routeId: n.route.id,
                })
            } else return { type: de.data, result: void 0 }
        else if (c) s = await u(c)
        else {
            let d = new URL(t.url),
                m = d.pathname + d.search
            throw Ve(404, { pathname: m })
        }
        Z(
            s.result !== void 0,
            'You defined ' +
                (e === 'action' ? 'an action' : 'a loader') +
                ' for route ' +
                ('"' +
                    n.route.id +
                    '" but didn\'t return anything from your `' +
                    e +
                    '` ') +
                'function. Please return a value or `null`.'
        )
    } catch (c) {
        return { type: de.error, result: c }
    } finally {
        a && t.signal.removeEventListener('abort', a)
    }
    return s
}
async function i0(e) {
    let { result: t, type: n, status: r } = e
    if (Im(t)) {
        let o
        try {
            let s = t.headers.get('Content-Type')
            s && /\bapplication\/json\b/.test(s)
                ? t.body == null
                    ? (o = null)
                    : (o = await t.json())
                : (o = await t.text())
        } catch (s) {
            return { type: de.error, error: s }
        }
        return n === de.error
            ? {
                  type: de.error,
                  error: new Bu(t.status, t.statusText, o),
                  statusCode: t.status,
                  headers: t.headers,
              }
            : {
                  type: de.data,
                  data: o,
                  statusCode: t.status,
                  headers: t.headers,
              }
    }
    if (n === de.error)
        return { type: de.error, error: t, statusCode: Fo(t) ? t.status : r }
    if (c0(t)) {
        var i, l
        return {
            type: de.deferred,
            deferredData: t,
            statusCode: (i = t.init) == null ? void 0 : i.status,
            headers:
                ((l = t.init) == null ? void 0 : l.headers) &&
                new Headers(t.init.headers),
        }
    }
    return { type: de.data, data: t, statusCode: r }
}
function l0(e, t, n, r, i, l) {
    let o = e.headers.get('Location')
    if (
        (Z(
            o,
            'Redirects returned/thrown from loaders/actions must have a Location header'
        ),
        !$u.test(o))
    ) {
        let s = r.slice(0, r.findIndex((a) => a.route.id === n) + 1)
        ;(o = Ia(new URL(t.url), s, i, !0, o, l)), e.headers.set('Location', o)
    }
    return e
}
function Ld(e, t, n) {
    if ($u.test(e)) {
        let r = e,
            i = r.startsWith('//') ? new URL(t.protocol + r) : new URL(r),
            l = Jt(i.pathname, n) != null
        if (i.origin === t.origin && l) return i.pathname + i.search + i.hash
    }
    return e
}
function cr(e, t, n, r) {
    let i = e.createURL(Om(t)).toString(),
        l = { signal: n }
    if (r && Tt(r.formMethod)) {
        let { formMethod: o, formEncType: s } = r
        ;(l.method = o.toUpperCase()),
            s === 'application/json'
                ? ((l.headers = new Headers({ 'Content-Type': s })),
                  (l.body = JSON.stringify(r.json)))
                : s === 'text/plain'
                ? (l.body = r.text)
                : s === 'application/x-www-form-urlencoded' && r.formData
                ? (l.body = ba(r.formData))
                : (l.body = r.formData)
    }
    return new Request(i, l)
}
function ba(e) {
    let t = new URLSearchParams()
    for (let [n, r] of e.entries())
        t.append(n, typeof r == 'string' ? r : r.name)
    return t
}
function Nd(e) {
    let t = new FormData()
    for (let [n, r] of e.entries()) t.append(n, r)
    return t
}
function o0(e, t, n, r, i, l) {
    let o = {},
        s = null,
        a,
        u = !1,
        c = {},
        d = r && it(r[1]) ? r[1].error : void 0
    return (
        n.forEach((m, v) => {
            let g = t[v].route.id
            if (
                (Z(
                    !Un(m),
                    'Cannot handle redirect results in processLoaderData'
                ),
                it(m))
            ) {
                let y = m.error
                d !== void 0 && ((y = d), (d = void 0)), (s = s || {})
                {
                    let C = wi(e, g)
                    s[C.route.id] == null && (s[C.route.id] = y)
                }
                ;(o[g] = void 0),
                    u || ((u = !0), (a = Fo(m.error) ? m.error.status : 500)),
                    m.headers && (c[g] = m.headers)
            } else
                Gn(m)
                    ? (i.set(g, m.deferredData),
                      (o[g] = m.deferredData.data),
                      m.statusCode != null &&
                          m.statusCode !== 200 &&
                          !u &&
                          (a = m.statusCode),
                      m.headers && (c[g] = m.headers))
                    : ((o[g] = m.data),
                      m.statusCode &&
                          m.statusCode !== 200 &&
                          !u &&
                          (a = m.statusCode),
                      m.headers && (c[g] = m.headers))
        }),
        d !== void 0 && r && ((s = { [r[0]]: d }), (o[r[0]] = void 0)),
        { loaderData: o, errors: s, statusCode: a || 200, loaderHeaders: c }
    )
}
function Od(e, t, n, r, i, l, o, s) {
    let { loaderData: a, errors: u } = o0(t, n, r, i, s)
    for (let c = 0; c < l.length; c++) {
        let { key: d, match: m, controller: v } = l[c]
        Z(
            o !== void 0 && o[c] !== void 0,
            'Did not find corresponding fetcher result'
        )
        let g = o[c]
        if (!(v && v.signal.aborted))
            if (it(g)) {
                let y = wi(e.matches, m == null ? void 0 : m.route.id)
                ;(u && u[y.route.id]) ||
                    (u = ge({}, u, { [y.route.id]: g.error })),
                    e.fetchers.delete(d)
            } else if (Un(g)) Z(!1, 'Unhandled fetcher revalidation redirect')
            else if (Gn(g)) Z(!1, 'Unhandled fetcher deferred data')
            else {
                let y = sn(g.data)
                e.fetchers.set(d, y)
            }
    }
    return { loaderData: a, errors: u }
}
function Id(e, t, n, r) {
    let i = ge({}, t)
    for (let l of n) {
        let o = l.route.id
        if (
            (t.hasOwnProperty(o)
                ? t[o] !== void 0 && (i[o] = t[o])
                : e[o] !== void 0 && l.route.loader && (i[o] = e[o]),
            r && r.hasOwnProperty(o))
        )
            break
    }
    return i
}
function bd(e) {
    return e
        ? it(e[1])
            ? { actionData: {} }
            : { actionData: { [e[0]]: e[1].data } }
        : {}
}
function wi(e, t) {
    return (
        (t ? e.slice(0, e.findIndex((r) => r.route.id === t) + 1) : [...e])
            .reverse()
            .find((r) => r.route.hasErrorBoundary === !0) || e[0]
    )
}
function Rd(e) {
    let t =
        e.length === 1
            ? e[0]
            : e.find((n) => n.index || !n.path || n.path === '/') || {
                  id: '__shim-error-route__',
              }
    return {
        matches: [{ params: {}, pathname: '', pathnameBase: '', route: t }],
        route: t,
    }
}
function Ve(e, t) {
    let {
            pathname: n,
            routeId: r,
            method: i,
            type: l,
            message: o,
        } = t === void 0 ? {} : t,
        s = 'Unknown Server Error',
        a = 'Unknown @remix-run/router error'
    return (
        e === 400
            ? ((s = 'Bad Request'),
              l === 'route-discovery'
                  ? (a =
                        'Unable to match URL "' +
                        n +
                        '" - the `children()` function for ' +
                        ('route `' + r + '` threw the following error:\n' + o))
                  : i && n && r
                  ? (a =
                        'You made a ' +
                        i +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide a `loader` for route "' + r + '", ') +
                        'so there is no way to handle the request.')
                  : l === 'defer-action'
                  ? (a = 'defer() is not supported in actions')
                  : l === 'invalid-body' &&
                    (a = 'Unable to encode submission body'))
            : e === 403
            ? ((s = 'Forbidden'),
              (a = 'Route "' + r + '" does not match URL "' + n + '"'))
            : e === 404
            ? ((s = 'Not Found'), (a = 'No route matches URL "' + n + '"'))
            : e === 405 &&
              ((s = 'Method Not Allowed'),
              i && n && r
                  ? (a =
                        'You made a ' +
                        i.toUpperCase() +
                        ' request to "' +
                        n +
                        '" but ' +
                        ('did not provide an `action` for route "' +
                            r +
                            '", ') +
                        'so there is no way to handle the request.')
                  : i &&
                    (a = 'Invalid request method "' + i.toUpperCase() + '"')),
        new Bu(e || 500, s, new Error(a), !0)
    )
}
function Dd(e) {
    for (let t = e.length - 1; t >= 0; t--) {
        let n = e[t]
        if (Un(n)) return { result: n, idx: t }
    }
}
function Om(e) {
    let t = typeof e == 'string' ? On(e) : e
    return qn(ge({}, t, { hash: '' }))
}
function s0(e, t) {
    return e.pathname !== t.pathname || e.search !== t.search
        ? !1
        : e.hash === ''
        ? t.hash !== ''
        : e.hash === t.hash
        ? !0
        : t.hash !== ''
}
function a0(e) {
    return typeof e == 'object' && e != null && 'then' in e
}
function u0(e) {
    return Im(e.result) && Wy.has(e.result.status)
}
function Gn(e) {
    return e.type === de.deferred
}
function it(e) {
    return e.type === de.error
}
function Un(e) {
    return (e && e.type) === de.redirect
}
function c0(e) {
    let t = e
    return (
        t &&
        typeof t == 'object' &&
        typeof t.data == 'object' &&
        typeof t.subscribe == 'function' &&
        typeof t.cancel == 'function' &&
        typeof t.resolveData == 'function'
    )
}
function Im(e) {
    return (
        e != null &&
        typeof e.status == 'number' &&
        typeof e.statusText == 'string' &&
        typeof e.headers == 'object' &&
        typeof e.body < 'u'
    )
}
function d0(e) {
    return Vy.has(e.toLowerCase())
}
function Tt(e) {
    return Uy.has(e.toLowerCase())
}
async function zd(e, t, n, r, i, l) {
    for (let o = 0; o < n.length; o++) {
        let s = n[o],
            a = t[o]
        if (!a) continue
        let u = e.find((d) => d.route.id === a.route.id),
            c = u != null && !Lm(u, a) && (l && l[a.route.id]) !== void 0
        if (Gn(s) && (i || c)) {
            let d = r[o]
            Z(
                d,
                'Expected an AbortSignal for revalidating fetcher deferred result'
            ),
                await bm(s, d, i).then((m) => {
                    m && (n[o] = m || n[o])
                })
        }
    }
}
async function bm(e, t, n) {
    if ((n === void 0 && (n = !1), !(await e.deferredData.resolveData(t)))) {
        if (n)
            try {
                return { type: de.data, data: e.deferredData.unwrappedData }
            } catch (i) {
                return { type: de.error, error: i }
            }
        return { type: de.data, data: e.deferredData.data }
    }
}
function Gu(e) {
    return new URLSearchParams(e).getAll('index').some((t) => t === '')
}
function ai(e, t) {
    let n = typeof t == 'string' ? On(t).search : t.search
    if (e[e.length - 1].route.index && Gu(n || '')) return e[e.length - 1]
    let r = _m(e)
    return r[r.length - 1]
}
function jd(e) {
    let {
        formMethod: t,
        formAction: n,
        formEncType: r,
        text: i,
        formData: l,
        json: o,
    } = e
    if (!(!t || !n || !r)) {
        if (i != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: void 0,
                text: i,
            }
        if (l != null)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: l,
                json: void 0,
                text: void 0,
            }
        if (o !== void 0)
            return {
                formMethod: t,
                formAction: n,
                formEncType: r,
                formData: void 0,
                json: o,
                text: void 0,
            }
    }
}
function Ms(e, t) {
    return t
        ? {
              state: 'loading',
              location: e,
              formMethod: t.formMethod,
              formAction: t.formAction,
              formEncType: t.formEncType,
              formData: t.formData,
              json: t.json,
              text: t.text,
          }
        : {
              state: 'loading',
              location: e,
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
          }
}
function f0(e, t) {
    return {
        state: 'submitting',
        location: e,
        formMethod: t.formMethod,
        formAction: t.formAction,
        formEncType: t.formEncType,
        formData: t.formData,
        json: t.json,
        text: t.text,
    }
}
function ni(e, t) {
    return e
        ? {
              state: 'loading',
              formMethod: e.formMethod,
              formAction: e.formAction,
              formEncType: e.formEncType,
              formData: e.formData,
              json: e.json,
              text: e.text,
              data: t,
          }
        : {
              state: 'loading',
              formMethod: void 0,
              formAction: void 0,
              formEncType: void 0,
              formData: void 0,
              json: void 0,
              text: void 0,
              data: t,
          }
}
function p0(e, t) {
    return {
        state: 'submitting',
        formMethod: e.formMethod,
        formAction: e.formAction,
        formEncType: e.formEncType,
        formData: e.formData,
        json: e.json,
        text: e.text,
        data: t ? t.data : void 0,
    }
}
function sn(e) {
    return {
        state: 'idle',
        formMethod: void 0,
        formAction: void 0,
        formEncType: void 0,
        formData: void 0,
        json: void 0,
        text: void 0,
        data: e,
    }
}
function m0(e, t) {
    try {
        let n = e.sessionStorage.getItem(km)
        if (n) {
            let r = JSON.parse(n)
            for (let [i, l] of Object.entries(r || {}))
                l && Array.isArray(l) && t.set(i, new Set(l || []))
        }
    } catch {}
}
function h0(e, t) {
    if (t.size > 0) {
        let n = {}
        for (let [r, i] of t) n[r] = [...i]
        try {
            e.sessionStorage.setItem(km, JSON.stringify(n))
        } catch (r) {
            jr(
                !1,
                'Failed to save applied view transitions in sessionStorage (' +
                    r +
                    ').'
            )
        }
    }
}
/**
 * React Router v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function fo() {
    return (
        (fo = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        fo.apply(this, arguments)
    )
}
const Yi = N.createContext(null),
    Uu = N.createContext(null),
    In = N.createContext(null),
    Hu = N.createContext(null),
    tn = N.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
    Rm = N.createContext(null)
function g0(e, t) {
    let { relative: n } = t === void 0 ? {} : t
    Xi() || Z(!1)
    let { basename: r, navigator: i } = N.useContext(In),
        { hash: l, pathname: o, search: s } = $o(e, { relative: n }),
        a = o
    return (
        r !== '/' && (a = o === '/' ? r : Qt([r, o])),
        i.createHref({ pathname: a, search: s, hash: l })
    )
}
function Xi() {
    return N.useContext(Hu) != null
}
function qi() {
    return Xi() || Z(!1), N.useContext(Hu).location
}
function Dm(e) {
    N.useContext(In).static || N.useLayoutEffect(e)
}
function Bo() {
    let { isDataRoute: e } = N.useContext(tn)
    return e ? N0() : v0()
}
function v0() {
    Xi() || Z(!1)
    let e = N.useContext(Yi),
        { basename: t, future: n, navigator: r } = N.useContext(In),
        { matches: i } = N.useContext(tn),
        { pathname: l } = qi(),
        o = JSON.stringify(Au(i, n.v7_relativeSplatPath)),
        s = N.useRef(!1)
    return (
        Dm(() => {
            s.current = !0
        }),
        N.useCallback(
            function (u, c) {
                if ((c === void 0 && (c = {}), !s.current)) return
                if (typeof u == 'number') {
                    r.go(u)
                    return
                }
                let d = Fu(u, JSON.parse(o), l, c.relative === 'path')
                e == null &&
                    t !== '/' &&
                    (d.pathname = d.pathname === '/' ? t : Qt([t, d.pathname])),
                    (c.replace ? r.replace : r.push)(d, c.state, c)
            },
            [t, r, o, l, e]
        )
    )
}
const y0 = N.createContext(null)
function w0(e) {
    let t = N.useContext(tn).outlet
    return t && N.createElement(y0.Provider, { value: e }, t)
}
function S0() {
    let { matches: e } = N.useContext(tn),
        t = e[e.length - 1]
    return t ? t.params : {}
}
function $o(e, t) {
    let { relative: n } = t === void 0 ? {} : t,
        { future: r } = N.useContext(In),
        { matches: i } = N.useContext(tn),
        { pathname: l } = qi(),
        o = JSON.stringify(Au(i, r.v7_relativeSplatPath))
    return N.useMemo(() => Fu(e, JSON.parse(o), l, n === 'path'), [e, o, l, n])
}
function x0(e, t, n, r) {
    Xi() || Z(!1)
    let { navigator: i } = N.useContext(In),
        { matches: l } = N.useContext(tn),
        o = l[l.length - 1],
        s = o ? o.params : {}
    o && o.pathname
    let a = o ? o.pathnameBase : '/'
    o && o.route
    let u = qi(),
        c
    c = u
    let d = c.pathname || '/',
        m = d
    if (a !== '/') {
        let y = a.replace(/^\//, '').split('/')
        m = '/' + d.replace(/^\//, '').split('/').slice(y.length).join('/')
    }
    let v = jn(e, { pathname: m })
    return _0(
        v &&
            v.map((y) =>
                Object.assign({}, y, {
                    params: Object.assign({}, s, y.params),
                    pathname: Qt([
                        a,
                        i.encodeLocation
                            ? i.encodeLocation(y.pathname).pathname
                            : y.pathname,
                    ]),
                    pathnameBase:
                        y.pathnameBase === '/'
                            ? a
                            : Qt([
                                  a,
                                  i.encodeLocation
                                      ? i.encodeLocation(y.pathnameBase)
                                            .pathname
                                      : y.pathnameBase,
                              ]),
                })
            ),
        l,
        n,
        r
    )
}
function E0() {
    let e = Fm(),
        t = Fo(e)
            ? e.status + ' ' + e.statusText
            : e instanceof Error
            ? e.message
            : JSON.stringify(e),
        n = e instanceof Error ? e.stack : null,
        i = { padding: '0.5rem', backgroundColor: 'rgba(200,200,200, 0.5)' }
    return N.createElement(
        N.Fragment,
        null,
        N.createElement('h2', null, 'Unexpected Application Error!'),
        N.createElement('h3', { style: { fontStyle: 'italic' } }, t),
        n ? N.createElement('pre', { style: i }, n) : null,
        null
    )
}
const C0 = N.createElement(E0, null)
class T0 extends N.Component {
    constructor(t) {
        super(t),
            (this.state = {
                location: t.location,
                revalidation: t.revalidation,
                error: t.error,
            })
    }
    static getDerivedStateFromError(t) {
        return { error: t }
    }
    static getDerivedStateFromProps(t, n) {
        return n.location !== t.location ||
            (n.revalidation !== 'idle' && t.revalidation === 'idle')
            ? {
                  error: t.error,
                  location: t.location,
                  revalidation: t.revalidation,
              }
            : {
                  error: t.error !== void 0 ? t.error : n.error,
                  location: n.location,
                  revalidation: t.revalidation || n.revalidation,
              }
    }
    componentDidCatch(t, n) {
        console.error(
            'React Router caught the following error during render',
            t,
            n
        )
    }
    render() {
        return this.state.error !== void 0
            ? N.createElement(
                  tn.Provider,
                  { value: this.props.routeContext },
                  N.createElement(Rm.Provider, {
                      value: this.state.error,
                      children: this.props.component,
                  })
              )
            : this.props.children
    }
}
function P0(e) {
    let { routeContext: t, match: n, children: r } = e,
        i = N.useContext(Yi)
    return (
        i &&
            i.static &&
            i.staticContext &&
            (n.route.errorElement || n.route.ErrorBoundary) &&
            (i.staticContext._deepestRenderedBoundaryId = n.route.id),
        N.createElement(tn.Provider, { value: t }, r)
    )
}
function _0(e, t, n, r) {
    var i
    if (
        (t === void 0 && (t = []),
        n === void 0 && (n = null),
        r === void 0 && (r = null),
        e == null)
    ) {
        var l
        if ((l = n) != null && l.errors) e = n.matches
        else return null
    }
    let o = e,
        s = (i = n) == null ? void 0 : i.errors
    if (s != null) {
        let c = o.findIndex(
            (d) => d.route.id && (s == null ? void 0 : s[d.route.id]) !== void 0
        )
        c >= 0 || Z(!1), (o = o.slice(0, Math.min(o.length, c + 1)))
    }
    let a = !1,
        u = -1
    if (n && r && r.v7_partialHydration)
        for (let c = 0; c < o.length; c++) {
            let d = o[c]
            if (
                ((d.route.HydrateFallback || d.route.hydrateFallbackElement) &&
                    (u = c),
                d.route.id)
            ) {
                let { loaderData: m, errors: v } = n,
                    g =
                        d.route.loader &&
                        m[d.route.id] === void 0 &&
                        (!v || v[d.route.id] === void 0)
                if (d.route.lazy || g) {
                    ;(a = !0), u >= 0 ? (o = o.slice(0, u + 1)) : (o = [o[0]])
                    break
                }
            }
        }
    return o.reduceRight((c, d, m) => {
        let v,
            g = !1,
            y = null,
            C = null
        n &&
            ((v = s && d.route.id ? s[d.route.id] : void 0),
            (y = d.route.errorElement || C0),
            a &&
                (u < 0 && m === 0
                    ? (O0('route-fallback'), (g = !0), (C = null))
                    : u === m &&
                      ((g = !0), (C = d.route.hydrateFallbackElement || null))))
        let f = t.concat(o.slice(0, m + 1)),
            p = () => {
                let h
                return (
                    v
                        ? (h = y)
                        : g
                        ? (h = C)
                        : d.route.Component
                        ? (h = N.createElement(d.route.Component, null))
                        : d.route.element
                        ? (h = d.route.element)
                        : (h = c),
                    N.createElement(P0, {
                        match: d,
                        routeContext: {
                            outlet: c,
                            matches: f,
                            isDataRoute: n != null,
                        },
                        children: h,
                    })
                )
            }
        return n && (d.route.ErrorBoundary || d.route.errorElement || m === 0)
            ? N.createElement(T0, {
                  location: n.location,
                  revalidation: n.revalidation,
                  component: y,
                  error: v,
                  children: p(),
                  routeContext: { outlet: null, matches: f, isDataRoute: !0 },
              })
            : p()
    }, null)
}
var zm = (function (e) {
        return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            e
        )
    })(zm || {}),
    Bi = (function (e) {
        return (
            (e.UseBlocker = 'useBlocker'),
            (e.UseLoaderData = 'useLoaderData'),
            (e.UseActionData = 'useActionData'),
            (e.UseRouteError = 'useRouteError'),
            (e.UseNavigation = 'useNavigation'),
            (e.UseRouteLoaderData = 'useRouteLoaderData'),
            (e.UseMatches = 'useMatches'),
            (e.UseRevalidator = 'useRevalidator'),
            (e.UseNavigateStable = 'useNavigate'),
            (e.UseRouteId = 'useRouteId'),
            e
        )
    })(Bi || {})
function M0(e) {
    let t = N.useContext(Yi)
    return t || Z(!1), t
}
function jm(e) {
    let t = N.useContext(Uu)
    return t || Z(!1), t
}
function k0(e) {
    let t = N.useContext(tn)
    return t || Z(!1), t
}
function Am(e) {
    let t = k0(),
        n = t.matches[t.matches.length - 1]
    return n.route.id || Z(!1), n.route.id
}
function L0() {
    return jm(Bi.UseNavigation).navigation
}
function Fm() {
    var e
    let t = N.useContext(Rm),
        n = jm(Bi.UseRouteError),
        r = Am(Bi.UseRouteError)
    return t !== void 0 ? t : (e = n.errors) == null ? void 0 : e[r]
}
function N0() {
    let { router: e } = M0(zm.UseNavigateStable),
        t = Am(Bi.UseNavigateStable),
        n = N.useRef(!1)
    return (
        Dm(() => {
            n.current = !0
        }),
        N.useCallback(
            function (i, l) {
                l === void 0 && (l = {}),
                    n.current &&
                        (typeof i == 'number'
                            ? e.navigate(i)
                            : e.navigate(i, fo({ fromRouteId: t }, l)))
            },
            [e, t]
        )
    )
}
const Ad = {}
function O0(e, t, n) {
    Ad[e] || (Ad[e] = !0)
}
function I0(e) {
    return w0(e.context)
}
function b0(e) {
    let {
        basename: t = '/',
        children: n = null,
        location: r,
        navigationType: i = Pe.Pop,
        navigator: l,
        static: o = !1,
        future: s,
    } = e
    Xi() && Z(!1)
    let a = t.replace(/^\/*/, '/'),
        u = N.useMemo(
            () => ({
                basename: a,
                navigator: l,
                static: o,
                future: fo({ v7_relativeSplatPath: !1 }, s),
            }),
            [a, s, l, o]
        )
    typeof r == 'string' && (r = On(r))
    let {
            pathname: c = '/',
            search: d = '',
            hash: m = '',
            state: v = null,
            key: g = 'default',
        } = r,
        y = N.useMemo(() => {
            let C = Jt(c, a)
            return C == null
                ? null
                : {
                      location: {
                          pathname: C,
                          search: d,
                          hash: m,
                          state: v,
                          key: g,
                      },
                      navigationType: i,
                  }
        }, [a, c, d, m, v, g, i])
    return y == null
        ? null
        : N.createElement(
              In.Provider,
              { value: u },
              N.createElement(Hu.Provider, { children: n, value: y })
          )
}
new Promise(() => {})
function R0(e) {
    let t = {
        hasErrorBoundary: e.ErrorBoundary != null || e.errorElement != null,
    }
    return (
        e.Component &&
            Object.assign(t, {
                element: N.createElement(e.Component),
                Component: void 0,
            }),
        e.HydrateFallback &&
            Object.assign(t, {
                hydrateFallbackElement: N.createElement(e.HydrateFallback),
                HydrateFallback: void 0,
            }),
        e.ErrorBoundary &&
            Object.assign(t, {
                errorElement: N.createElement(e.ErrorBoundary),
                ErrorBoundary: void 0,
            }),
        t
    )
}
/**
 * React Router DOM v6.24.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Ar() {
    return (
        (Ar = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        Ar.apply(this, arguments)
    )
}
function Bm(e, t) {
    if (e == null) return {}
    var n = {},
        r = Object.keys(e),
        i,
        l
    for (l = 0; l < r.length; l++)
        (i = r[l]), !(t.indexOf(i) >= 0) && (n[i] = e[i])
    return n
}
function D0(e) {
    return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}
function z0(e, t) {
    return e.button === 0 && (!t || t === '_self') && !D0(e)
}
const j0 = [
        'onClick',
        'relative',
        'reloadDocument',
        'replace',
        'state',
        'target',
        'to',
        'preventScrollReset',
        'unstable_viewTransition',
    ],
    A0 = [
        'aria-current',
        'caseSensitive',
        'className',
        'end',
        'style',
        'to',
        'unstable_viewTransition',
        'children',
    ],
    F0 = '6'
try {
    window.__reactRouterVersion = F0
} catch {}
function B0(e, t) {
    return Xy({
        basename: void 0,
        future: Ar({}, void 0, { v7_prependBasename: !0 }),
        history: Sy({ window: void 0 }),
        hydrationData: $0(),
        routes: e,
        mapRouteProperties: R0,
        unstable_dataStrategy: void 0,
        unstable_patchRoutesOnMiss: void 0,
        window: void 0,
    }).initialize()
}
function $0() {
    var e
    let t = (e = window) == null ? void 0 : e.__staticRouterHydrationData
    return t && t.errors && (t = Ar({}, t, { errors: G0(t.errors) })), t
}
function G0(e) {
    if (!e) return null
    let t = Object.entries(e),
        n = {}
    for (let [r, i] of t)
        if (i && i.__type === 'RouteErrorResponse')
            n[r] = new Bu(i.status, i.statusText, i.data, i.internal === !0)
        else if (i && i.__type === 'Error') {
            if (i.__subType) {
                let l = window[i.__subType]
                if (typeof l == 'function')
                    try {
                        let o = new l(i.message)
                        ;(o.stack = ''), (n[r] = o)
                    } catch {}
            }
            if (n[r] == null) {
                let l = new Error(i.message)
                ;(l.stack = ''), (n[r] = l)
            }
        } else n[r] = i
    return n
}
const $m = N.createContext({ isTransitioning: !1 }),
    U0 = N.createContext(new Map()),
    H0 = 'startTransition',
    Fd = As[H0],
    V0 = 'flushSync',
    Bd = wy[V0]
function W0(e) {
    Fd ? Fd(e) : e()
}
function ri(e) {
    Bd ? Bd(e) : e()
}
class Q0 {
    constructor() {
        ;(this.status = 'pending'),
            (this.promise = new Promise((t, n) => {
                ;(this.resolve = (r) => {
                    this.status === 'pending' &&
                        ((this.status = 'resolved'), t(r))
                }),
                    (this.reject = (r) => {
                        this.status === 'pending' &&
                            ((this.status = 'rejected'), n(r))
                    })
            }))
    }
}
function K0(e) {
    let { fallbackElement: t, router: n, future: r } = e,
        [i, l] = N.useState(n.state),
        [o, s] = N.useState(),
        [a, u] = N.useState({ isTransitioning: !1 }),
        [c, d] = N.useState(),
        [m, v] = N.useState(),
        [g, y] = N.useState(),
        C = N.useRef(new Map()),
        { v7_startTransition: f } = r || {},
        p = N.useCallback(
            (R) => {
                f ? W0(R) : R()
            },
            [f]
        ),
        h = N.useCallback(
            (R, M) => {
                let {
                    deletedFetchers: O,
                    unstable_flushSync: k,
                    unstable_viewTransitionOpts: A,
                } = M
                O.forEach((D) => C.current.delete(D)),
                    R.fetchers.forEach((D, F) => {
                        D.data !== void 0 && C.current.set(F, D.data)
                    })
                let b =
                    n.window == null ||
                    n.window.document == null ||
                    typeof n.window.document.startViewTransition != 'function'
                if (!A || b) {
                    k ? ri(() => l(R)) : p(() => l(R))
                    return
                }
                if (k) {
                    ri(() => {
                        m && (c && c.resolve(), m.skipTransition()),
                            u({
                                isTransitioning: !0,
                                flushSync: !0,
                                currentLocation: A.currentLocation,
                                nextLocation: A.nextLocation,
                            })
                    })
                    let D = n.window.document.startViewTransition(() => {
                        ri(() => l(R))
                    })
                    D.finished.finally(() => {
                        ri(() => {
                            d(void 0),
                                v(void 0),
                                s(void 0),
                                u({ isTransitioning: !1 })
                        })
                    }),
                        ri(() => v(D))
                    return
                }
                m
                    ? (c && c.resolve(),
                      m.skipTransition(),
                      y({
                          state: R,
                          currentLocation: A.currentLocation,
                          nextLocation: A.nextLocation,
                      }))
                    : (s(R),
                      u({
                          isTransitioning: !0,
                          flushSync: !1,
                          currentLocation: A.currentLocation,
                          nextLocation: A.nextLocation,
                      }))
            },
            [n.window, m, c, C, p]
        )
    N.useLayoutEffect(() => n.subscribe(h), [n, h]),
        N.useEffect(() => {
            a.isTransitioning && !a.flushSync && d(new Q0())
        }, [a]),
        N.useEffect(() => {
            if (c && o && n.window) {
                let R = o,
                    M = c.promise,
                    O = n.window.document.startViewTransition(async () => {
                        p(() => l(R)), await M
                    })
                O.finished.finally(() => {
                    d(void 0), v(void 0), s(void 0), u({ isTransitioning: !1 })
                }),
                    v(O)
            }
        }, [p, o, c, n.window]),
        N.useEffect(() => {
            c && o && i.location.key === o.location.key && c.resolve()
        }, [c, m, i.location, o]),
        N.useEffect(() => {
            !a.isTransitioning &&
                g &&
                (s(g.state),
                u({
                    isTransitioning: !0,
                    flushSync: !1,
                    currentLocation: g.currentLocation,
                    nextLocation: g.nextLocation,
                }),
                y(void 0))
        }, [a.isTransitioning, g]),
        N.useEffect(() => {}, [])
    let w = N.useMemo(
            () => ({
                createHref: n.createHref,
                encodeLocation: n.encodeLocation,
                go: (R) => n.navigate(R),
                push: (R, M, O) =>
                    n.navigate(R, {
                        state: M,
                        preventScrollReset:
                            O == null ? void 0 : O.preventScrollReset,
                    }),
                replace: (R, M, O) =>
                    n.navigate(R, {
                        replace: !0,
                        state: M,
                        preventScrollReset:
                            O == null ? void 0 : O.preventScrollReset,
                    }),
            }),
            [n]
        ),
        T = n.basename || '/',
        S = N.useMemo(
            () => ({ router: n, navigator: w, static: !1, basename: T }),
            [n, w, T]
        )
    return N.createElement(
        N.Fragment,
        null,
        N.createElement(
            Yi.Provider,
            { value: S },
            N.createElement(
                Uu.Provider,
                { value: i },
                N.createElement(
                    U0.Provider,
                    { value: C.current },
                    N.createElement(
                        $m.Provider,
                        { value: a },
                        N.createElement(
                            b0,
                            {
                                basename: T,
                                location: i.location,
                                navigationType: i.historyAction,
                                navigator: w,
                                future: {
                                    v7_relativeSplatPath:
                                        n.future.v7_relativeSplatPath,
                                },
                            },
                            i.initialized || n.future.v7_partialHydration
                                ? N.createElement(Y0, {
                                      routes: n.routes,
                                      future: n.future,
                                      state: i,
                                  })
                                : t
                        )
                    )
                )
            )
        ),
        null
    )
}
function Y0(e) {
    let { routes: t, future: n, state: r } = e
    return x0(t, void 0, r, n)
}
const X0 =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u',
    q0 = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
    Jn = N.forwardRef(function (t, n) {
        let {
                onClick: r,
                relative: i,
                reloadDocument: l,
                replace: o,
                state: s,
                target: a,
                to: u,
                preventScrollReset: c,
                unstable_viewTransition: d,
            } = t,
            m = Bm(t, j0),
            { basename: v } = N.useContext(In),
            g,
            y = !1
        if (typeof u == 'string' && q0.test(u) && ((g = u), X0))
            try {
                let h = new URL(window.location.href),
                    w = u.startsWith('//')
                        ? new URL(h.protocol + u)
                        : new URL(u),
                    T = Jt(w.pathname, v)
                w.origin === h.origin && T != null
                    ? (u = T + w.search + w.hash)
                    : (y = !0)
            } catch {}
        let C = g0(u, { relative: i }),
            f = Z0(u, {
                replace: o,
                state: s,
                target: a,
                preventScrollReset: c,
                relative: i,
                unstable_viewTransition: d,
            })
        function p(h) {
            r && r(h), h.defaultPrevented || f(h)
        }
        return N.createElement(
            'a',
            Ar({}, m, {
                href: g || C,
                onClick: y || l ? r : p,
                ref: n,
                target: a,
            })
        )
    }),
    hn = N.forwardRef(function (t, n) {
        let {
                'aria-current': r = 'page',
                caseSensitive: i = !1,
                className: l = '',
                end: o = !1,
                style: s,
                to: a,
                unstable_viewTransition: u,
                children: c,
            } = t,
            d = Bm(t, A0),
            m = $o(a, { relative: d.relative }),
            v = qi(),
            g = N.useContext(Uu),
            { navigator: y, basename: C } = N.useContext(In),
            f = g != null && ew(m) && u === !0,
            p = y.encodeLocation ? y.encodeLocation(m).pathname : m.pathname,
            h = v.pathname,
            w =
                g && g.navigation && g.navigation.location
                    ? g.navigation.location.pathname
                    : null
        i ||
            ((h = h.toLowerCase()),
            (w = w ? w.toLowerCase() : null),
            (p = p.toLowerCase())),
            w && C && (w = Jt(w, C) || w)
        const T = p !== '/' && p.endsWith('/') ? p.length - 1 : p.length
        let S = h === p || (!o && h.startsWith(p) && h.charAt(T) === '/'),
            R =
                w != null &&
                (w === p ||
                    (!o && w.startsWith(p) && w.charAt(p.length) === '/')),
            M = { isActive: S, isPending: R, isTransitioning: f },
            O = S ? r : void 0,
            k
        typeof l == 'function'
            ? (k = l(M))
            : (k = [
                  l,
                  S ? 'active' : null,
                  R ? 'pending' : null,
                  f ? 'transitioning' : null,
              ]
                  .filter(Boolean)
                  .join(' '))
        let A = typeof s == 'function' ? s(M) : s
        return N.createElement(
            Jn,
            Ar({}, d, {
                'aria-current': O,
                className: k,
                ref: n,
                style: A,
                to: a,
                unstable_viewTransition: u,
            }),
            typeof c == 'function' ? c(M) : c
        )
    })
var Ra
;(function (e) {
    ;(e.UseScrollRestoration = 'useScrollRestoration'),
        (e.UseSubmit = 'useSubmit'),
        (e.UseSubmitFetcher = 'useSubmitFetcher'),
        (e.UseFetcher = 'useFetcher'),
        (e.useViewTransitionState = 'useViewTransitionState')
})(Ra || (Ra = {}))
var $d
;(function (e) {
    ;(e.UseFetcher = 'useFetcher'),
        (e.UseFetchers = 'useFetchers'),
        (e.UseScrollRestoration = 'useScrollRestoration')
})($d || ($d = {}))
function J0(e) {
    let t = N.useContext(Yi)
    return t || Z(!1), t
}
function Z0(e, t) {
    let {
            target: n,
            replace: r,
            state: i,
            preventScrollReset: l,
            relative: o,
            unstable_viewTransition: s,
        } = t === void 0 ? {} : t,
        a = Bo(),
        u = qi(),
        c = $o(e, { relative: o })
    return N.useCallback(
        (d) => {
            if (z0(d, n)) {
                d.preventDefault()
                let m = r !== void 0 ? r : qn(u) === qn(c)
                a(e, {
                    replace: m,
                    state: i,
                    preventScrollReset: l,
                    relative: o,
                    unstable_viewTransition: s,
                })
            }
        },
        [u, a, c, r, i, n, e, l, o, s]
    )
}
function ew(e, t) {
    t === void 0 && (t = {})
    let n = N.useContext($m)
    n == null && Z(!1)
    let { basename: r } = J0(Ra.useViewTransitionState),
        i = $o(e, { relative: t.relative })
    if (!n.isTransitioning) return !1
    let l = Jt(n.currentLocation.pathname, r) || n.currentLocation.pathname,
        o = Jt(n.nextLocation.pathname, r) || n.nextLocation.pathname
    return co(i.pathname, o) != null || co(i.pathname, l) != null
}
const Gm = ({ children: e, buttons: t }) =>
        x.jsxs(x.Fragment, {
            children: [
                e,
                x.jsx('menu', {
                    style: { margin: 0, padding: 0 },
                    children: t,
                }),
            ],
        }),
    Go = ({ children: e, open: t }) => {
        const n = N.useRef()
        return (
            N.useEffect(() => {
                const r = n.current
                t ? r.showModal() : r.close()
            }, [t]),
            Ao.createPortal(
                x.jsx(x.Fragment, {
                    children: x.jsx('div', {
                        className:
                            'fixed top-0 left-0 w-full h-screen z-10 bg-bgcB',
                        children: x.jsx('dialog', {
                            ref: n,
                            className:
                                'flex w-1/2 max-md:w-[85%] h-3/4 max-ss:h-2/3 border-none rounded-lg  p-0 overflow-hidden mx-auto mt-32',
                            children: t ? e : null,
                        }),
                    }),
                }),
                document.getElementById('modal')
            )
        )
    },
    tw = ({ timer: e }) => {
        const [t, n] = N.useState(e)
        return (
            N.useEffect(() => {
                const r = setInterval(() => {
                    n((i) => i - 10)
                }, 10)
                return () => {
                    clearInterval(r)
                }
            }, []),
            x.jsx(x.Fragment, {
                children: x.jsx('progress', {
                    className: 'absolute left-0 bottom-0 w-full bg-yy',
                    value: t,
                    max: e,
                    id: 'timeBar',
                }),
            })
        )
    },
    Gd = 8e3,
    nw = ({ plants: e, onPlant: t, no: n, plantModal: r }) => {
        const i = e[n - 1]
        return (
            N.useEffect(() => {
                const l = setTimeout(() => {
                    t()
                }, Gd)
                return () => {
                    clearTimeout(l)
                }
            }, [t]),
            x.jsx(x.Fragment, {
                children: x.jsxs(Go, {
                    open: r,
                    children: [
                        x.jsx('button', {
                            className:
                                ' absolute w-10 h-10 top-5 right-4 t text-4xl',
                            onClick: t,
                            children: 'X',
                        }),
                        x.jsxs('div', {
                            className: 'bg-content-bgc bg-cover w-full',
                            children: [
                                x.jsx('main', {
                                    className:
                                        'flex flex-col w-[80%] mx-auto my-auto max-md:mt-5 max-md:mb-20 ',
                                    children: x.jsxs('div', {
                                        className: 'w-[95%] mx-auto my-auto',
                                        children: [
                                            x.jsx('img', {
                                                className:
                                                    ' w-80 max-xl:w-52 max-sm:w-36 mx-auto mt-5',
                                                src: i.img,
                                            }),
                                            x.jsx('h3', {
                                                className: 'my-2',
                                                children: i.name,
                                            }),
                                            x.jsxs('h1', {
                                                className:
                                                    'flex justify-center mx-auto mt-2',
                                                children: ['“ ', i.title, ' ”'],
                                            }),
                                            x.jsx('h3', {
                                                className: 'mt-2 max-sm:hidden',
                                                children: i.desc,
                                            }),
                                        ],
                                    }),
                                }),
                                x.jsx(tw, { timer: Gd }),
                            ],
                        }),
                    ],
                }),
            })
        )
    },
    Um = [
        {
            no: '01',
            name: '大花咸豐草',
            img: '/img/IMG_NO01.png',
            type: '草本植物',
            genus: '菊科鬼針草屬',
            title: '毫不起眼 卻暗藏威脅 隱身於都市中...',
            character:
                '白色的花瓣與黃色的花蕊是最大特徵，果實具有倒鉤，容易附著於衣物或毛皮上，散布生長',
            desc: '來自美洲，依靠強大的繁殖力即可附著的種子，成為最常見的外來種',
        },
        {
            no: '02',
            name: '非洲鳳仙花',
            img: '/img/IMG_NO02.png',
            type: '草本植物',
            genus: '鳳仙花科鳳仙花屬',
            title: '鳳凰般美麗又具生命力 卻也讓其他植物黯淡...',
            desc: '來自非洲，觀賞植物，有排他性，常被選為造景植物，導致族群大量生長',
        },
        {
            no: '03',
            name: '巴西水竹草',
            img: '/img/IMG_NO03.png',
            type: '草本植物',
            genus: '鴨跖草科水竹草屬',
            title: '不斷 不斷的復生 覆蓋大地的災害...',
            desc: '來自南美洲，看似弱小，卻有著強韌的生命力，即使斷掉也能重生',
        },
        {
            no: '04',
            name: '小花蔓澤蘭',
            img: '/img/IMG_NO04.png',
            type: '攀爬植物',
            genus: '菊科蔓澤蘭屬',
            title: '所到之處 寸草不生 有著「綠癌」的稱號...',
            desc: '來自中南美洲，最危險的入侵者，會盤繞在大樹上，並將他們殺死，造成生態浩劫',
        },
        {
            no: '05',
            name: '水芙蓉',
            img: '/img/IMG_NO05.png',
            type: '水生植物',
            genus: '天南星科大薸屬',
            title: '漂浮在水面上 但在水中隱藏什麼...',
            desc: '來自美洲，依靠快速的繁殖力，佔據了水面，遮擋了陽光，使水中生物死亡',
        },
        {
            no: '06',
            name: '布袋蓮',
            img: '/img/IMG_NO06.png',
            type: '水生植物',
            genus: '雨久花科梭魚草屬',
            title: '原本只有一朵花 不知不覺佔據了水面...',
            desc: '來自南美洲，觀賞植物，佔據了水面，阻擋水上交通，遮擋了陽光，使水中生物死亡',
        },
        {
            no: '07',
            name: '互花米草',
            img: '/img/IMG_NO07.png',
            type: '草本植物',
            genus: '禾本科鼠尾粟屬',
            title: '來自大海的另一端 沿海生態的入侵者...',
            desc: '來自北美洲，擁有強韌的生命力，會改變濕地的環境，破換原生種的棲地',
        },
        {
            no: '08',
            name: '馬纓丹',
            img: '/img/IMG_NO08.png',
            type: '草本植物',
            genus: '馬鞭草科馬纓丹屬',
            title: '越是艷麗 越是危險 警告著所有人...',
            desc: '來自美洲，觀賞植物，適應台灣氣候，莖葉與果實有毒，會排斥其他植物',
        },
        {
            no: '09',
            name: '紫花藿香薊',
            img: '/img/IMG_NO09.png',
            type: '草本植物',
            genus: '菊科藿香薊屬',
            title: '看似浪漫的花 卻是無形的壓迫...',
            desc: '來自熱帶美洲，繁殖力強，散發特的香氣，會產生抑制植物生長的物質',
        },
        {
            no: '10',
            name: '貓腥草',
            img: '/img/IMG_NO10.png',
            type: '草本植物',
            genus: '菊科澤蘭屬',
            title: '死亡的氣息 靜靜地在一隅生長...',
            desc: '來自南美洲，散發有毒惡臭，降低食慾，誤食對牲畜及人體有毒',
        },
        {
            no: '11',
            name: '豬草',
            img: '/img/IMG_NO11.png',
            type: '草本植物',
            genus: '菊科豬草屬',
            title: '每逢九月 百萬的花粉 是人們的噩夢...',
            desc: '來自北美洲，繁殖力強，能產生數以百萬的花粉，如黃霧般，使人產生不適',
        },
        {
            no: '12',
            name: '美洲含羞草',
            img: '/img/IMG_NO12.png',
            type: '藤本植物',
            genus: '豆科含羞草屬',
            title: '身上的刺絕不是裝飾 是生存的防禦...',
            desc: '來自熱帶美洲，繁殖力強，散發特的香氣，會產生抑制植物生長的物質',
        },
        {
            no: '13',
            name: '銀膠菊',
            img: '/img/IMG_NO13.png',
            type: '草本植物',
            genus: '菊科銀膠菊屬',
            title: '如同滿天星的白花 碰到就會引起不適...',
            desc: '來自南美洲，全身有毒，有抑制其他植物的成分，會引起人體過敏性反應',
        },
        {
            no: '14',
            name: '銀合歡',
            img: '/img/IMG_NO14.png',
            type: '灌木',
            genus: '豆科銀合歡屬',
            title: '弱者只有死亡一途...',
            desc: '來自美洲，幼葉及莢果對人體有毒性，有強烈的排他性，抑制其他植物生長',
        },
        {
            no: '15',
            name: '日本菟絲子',
            img: '/img/IMG_NO15.png',
            type: '寄生植物',
            genus: '旋花科菟絲子屬',
            title: '吸血的不死怪物 即使斷肢也能重生...',
            desc: '寄生在其他植物身上，吸取他們的養分，即使斷肢也能重生',
        },
    ],
    rw = () => {
        const e = L0(),
            t = Um,
            [n, r] = N.useState(!1),
            [i, l] = N.useState(''),
            o = N.useCallback(
                function (a) {
                    r(() => !n), l(a)
                },
                [n]
            )
        return t.isError
            ? x.jsx('p', { children: t.message })
            : x.jsxs(x.Fragment, {
                  children: [
                      e.state === 'loading' &&
                          x.jsx('h1', { children: 'Loading...' }),
                      e.state !== 'loading' &&
                          x.jsx(Gm, {
                              children: x.jsx('ul', {
                                  className:
                                      'inline-block w-4/5 m-[5%] max-md:mt-16  ',
                                  children: t.map((s) =>
                                      x.jsxs(
                                          Jn,
                                          {
                                              className:
                                                  'inline-block mx-10 my-4',
                                              onClick: () => o(s.no),
                                              children: [
                                                  x.jsx('img', {
                                                      src: s.img,
                                                      className:
                                                          'flex w-[20vh] rounded-lg p-3 border-lightBlue border hover:border-yy',
                                                      alt: s.name,
                                                  }),
                                                  x.jsx('h2', {
                                                      className: 'mt-4',
                                                      children: s.name,
                                                  }),
                                              ],
                                          },
                                          s.no
                                      )
                                  ),
                              }),
                          }),
                      n &&
                          x.jsx(nw, {
                              plants: t,
                              onPlant: o,
                              no: i,
                              plantModal: n,
                          }),
                  ],
              })
    }
function Ud(e) {
    return (
        e !== null &&
        typeof e == 'object' &&
        'constructor' in e &&
        e.constructor === Object
    )
}
function Vu(e, t) {
    e === void 0 && (e = {}),
        t === void 0 && (t = {}),
        Object.keys(t).forEach((n) => {
            typeof e[n] > 'u'
                ? (e[n] = t[n])
                : Ud(t[n]) &&
                  Ud(e[n]) &&
                  Object.keys(t[n]).length > 0 &&
                  Vu(e[n], t[n])
        })
}
const Hm = {
    body: {},
    addEventListener() {},
    removeEventListener() {},
    activeElement: { blur() {}, nodeName: '' },
    querySelector() {
        return null
    },
    querySelectorAll() {
        return []
    },
    getElementById() {
        return null
    },
    createEvent() {
        return { initEvent() {} }
    },
    createElement() {
        return {
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName() {
                return []
            },
        }
    },
    createElementNS() {
        return {}
    },
    importNode() {
        return null
    },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
}
function ut() {
    const e = typeof document < 'u' ? document : {}
    return Vu(e, Hm), e
}
const iw = {
    document: Hm,
    navigator: { userAgent: '' },
    location: {
        hash: '',
        host: '',
        hostname: '',
        href: '',
        origin: '',
        pathname: '',
        protocol: '',
        search: '',
    },
    history: { replaceState() {}, pushState() {}, go() {}, back() {} },
    CustomEvent: function () {
        return this
    },
    addEventListener() {},
    removeEventListener() {},
    getComputedStyle() {
        return {
            getPropertyValue() {
                return ''
            },
        }
    },
    Image() {},
    Date() {},
    screen: {},
    setTimeout() {},
    clearTimeout() {},
    matchMedia() {
        return {}
    },
    requestAnimationFrame(e) {
        return typeof setTimeout > 'u' ? (e(), null) : setTimeout(e, 0)
    },
    cancelAnimationFrame(e) {
        typeof setTimeout > 'u' || clearTimeout(e)
    },
}
function tt() {
    const e = typeof window < 'u' ? window : {}
    return Vu(e, iw), e
}
function an(e) {
    return (
        e === void 0 && (e = ''),
        e
            .trim()
            .split(' ')
            .filter((t) => !!t.trim())
    )
}
function lw(e) {
    const t = e
    Object.keys(t).forEach((n) => {
        try {
            t[n] = null
        } catch {}
        try {
            delete t[n]
        } catch {}
    })
}
function po(e, t) {
    return t === void 0 && (t = 0), setTimeout(e, t)
}
function mo() {
    return Date.now()
}
function ow(e) {
    const t = tt()
    let n
    return (
        t.getComputedStyle && (n = t.getComputedStyle(e, null)),
        !n && e.currentStyle && (n = e.currentStyle),
        n || (n = e.style),
        n
    )
}
function sw(e, t) {
    t === void 0 && (t = 'x')
    const n = tt()
    let r, i, l
    const o = ow(e)
    return (
        n.WebKitCSSMatrix
            ? ((i = o.transform || o.webkitTransform),
              i.split(',').length > 6 &&
                  (i = i
                      .split(', ')
                      .map((s) => s.replace(',', '.'))
                      .join(', ')),
              (l = new n.WebKitCSSMatrix(i === 'none' ? '' : i)))
            : ((l =
                  o.MozTransform ||
                  o.OTransform ||
                  o.MsTransform ||
                  o.msTransform ||
                  o.transform ||
                  o
                      .getPropertyValue('transform')
                      .replace('translate(', 'matrix(1, 0, 0, 1,')),
              (r = l.toString().split(','))),
        t === 'x' &&
            (n.WebKitCSSMatrix
                ? (i = l.m41)
                : r.length === 16
                ? (i = parseFloat(r[12]))
                : (i = parseFloat(r[4]))),
        t === 'y' &&
            (n.WebKitCSSMatrix
                ? (i = l.m42)
                : r.length === 16
                ? (i = parseFloat(r[13]))
                : (i = parseFloat(r[5]))),
        i || 0
    )
}
function Cl(e) {
    return (
        typeof e == 'object' &&
        e !== null &&
        e.constructor &&
        Object.prototype.toString.call(e).slice(8, -1) === 'Object'
    )
}
function aw(e) {
    return typeof window < 'u' && typeof window.HTMLElement < 'u'
        ? e instanceof HTMLElement
        : e && (e.nodeType === 1 || e.nodeType === 11)
}
function lt() {
    const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
        t = ['__proto__', 'constructor', 'prototype']
    for (let n = 1; n < arguments.length; n += 1) {
        const r = n < 0 || arguments.length <= n ? void 0 : arguments[n]
        if (r != null && !aw(r)) {
            const i = Object.keys(Object(r)).filter((l) => t.indexOf(l) < 0)
            for (let l = 0, o = i.length; l < o; l += 1) {
                const s = i[l],
                    a = Object.getOwnPropertyDescriptor(r, s)
                a !== void 0 &&
                    a.enumerable &&
                    (Cl(e[s]) && Cl(r[s])
                        ? r[s].__swiper__
                            ? (e[s] = r[s])
                            : lt(e[s], r[s])
                        : !Cl(e[s]) && Cl(r[s])
                        ? ((e[s] = {}),
                          r[s].__swiper__ ? (e[s] = r[s]) : lt(e[s], r[s]))
                        : (e[s] = r[s]))
            }
        }
    }
    return e
}
function Tl(e, t, n) {
    e.style.setProperty(t, n)
}
function Vm(e) {
    let { swiper: t, targetPosition: n, side: r } = e
    const i = tt(),
        l = -t.translate
    let o = null,
        s
    const a = t.params.speed
    ;(t.wrapperEl.style.scrollSnapType = 'none'),
        i.cancelAnimationFrame(t.cssModeFrameID)
    const u = n > l ? 'next' : 'prev',
        c = (m, v) => (u === 'next' && m >= v) || (u === 'prev' && m <= v),
        d = () => {
            ;(s = new Date().getTime()), o === null && (o = s)
            const m = Math.max(Math.min((s - o) / a, 1), 0),
                v = 0.5 - Math.cos(m * Math.PI) / 2
            let g = l + v * (n - l)
            if (
                (c(g, n) && (g = n), t.wrapperEl.scrollTo({ [r]: g }), c(g, n))
            ) {
                ;(t.wrapperEl.style.overflow = 'hidden'),
                    (t.wrapperEl.style.scrollSnapType = ''),
                    setTimeout(() => {
                        ;(t.wrapperEl.style.overflow = ''),
                            t.wrapperEl.scrollTo({ [r]: g })
                    }),
                    i.cancelAnimationFrame(t.cssModeFrameID)
                return
            }
            t.cssModeFrameID = i.requestAnimationFrame(d)
        }
    d()
}
function Dt(e, t) {
    t === void 0 && (t = '')
    const n = [...e.children]
    return (
        e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
        t ? n.filter((r) => r.matches(t)) : n
    )
}
function uw(e, t) {
    const n = t.contains(e)
    return !n && t instanceof HTMLSlotElement
        ? [...element.assignedElements()].includes(e)
        : n
}
function ho(e) {
    try {
        console.warn(e)
        return
    } catch {}
}
function Fr(e, t) {
    t === void 0 && (t = [])
    const n = document.createElement(e)
    return n.classList.add(...(Array.isArray(t) ? t : an(t))), n
}
function cw(e) {
    const t = tt(),
        n = ut(),
        r = e.getBoundingClientRect(),
        i = n.body,
        l = e.clientTop || i.clientTop || 0,
        o = e.clientLeft || i.clientLeft || 0,
        s = e === t ? t.scrollY : e.scrollTop,
        a = e === t ? t.scrollX : e.scrollLeft
    return { top: r.top + s - l, left: r.left + a - o }
}
function dw(e, t) {
    const n = []
    for (; e.previousElementSibling; ) {
        const r = e.previousElementSibling
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
    }
    return n
}
function fw(e, t) {
    const n = []
    for (; e.nextElementSibling; ) {
        const r = e.nextElementSibling
        t ? r.matches(t) && n.push(r) : n.push(r), (e = r)
    }
    return n
}
function gn(e, t) {
    return tt().getComputedStyle(e, null).getPropertyValue(t)
}
function $i(e) {
    let t = e,
        n
    if (t) {
        for (n = 0; (t = t.previousSibling) !== null; )
            t.nodeType === 1 && (n += 1)
        return n
    }
}
function Wm(e, t) {
    const n = []
    let r = e.parentElement
    for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement)
    return n
}
function Da(e, t, n) {
    const r = tt()
    return (
        e[t === 'width' ? 'offsetWidth' : 'offsetHeight'] +
        parseFloat(
            r
                .getComputedStyle(e, null)
                .getPropertyValue(t === 'width' ? 'margin-right' : 'margin-top')
        ) +
        parseFloat(
            r
                .getComputedStyle(e, null)
                .getPropertyValue(
                    t === 'width' ? 'margin-left' : 'margin-bottom'
                )
        )
    )
}
function ne(e) {
    return (Array.isArray(e) ? e : [e]).filter((t) => !!t)
}
function Wu(e, t, n, r) {
    return (
        e.params.createElements &&
            Object.keys(r).forEach((i) => {
                if (!n[i] && n.auto === !0) {
                    let l = Dt(e.el, `.${r[i]}`)[0]
                    l ||
                        ((l = Fr('div', r[i])),
                        (l.className = r[i]),
                        e.el.append(l)),
                        (n[i] = l),
                        (t[i] = l)
                }
            }),
        n
    )
}
function Qm(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e
    n({
        navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
            lockClass: 'swiper-button-lock',
            navigationDisabledClass: 'swiper-navigation-disabled',
        },
    }),
        (t.navigation = { nextEl: null, prevEl: null })
    function l(g) {
        let y
        return g &&
            typeof g == 'string' &&
            t.isElement &&
            ((y = t.el.querySelector(g)), y)
            ? y
            : (g &&
                  (typeof g == 'string' &&
                      (y = [...document.querySelectorAll(g)]),
                  t.params.uniqueNavElements &&
                  typeof g == 'string' &&
                  y &&
                  y.length > 1 &&
                  t.el.querySelectorAll(g).length === 1
                      ? (y = t.el.querySelector(g))
                      : y && y.length === 1 && (y = y[0])),
              g && !y ? g : y)
    }
    function o(g, y) {
        const C = t.params.navigation
        ;(g = ne(g)),
            g.forEach((f) => {
                f &&
                    (f.classList[y ? 'add' : 'remove'](
                        ...C.disabledClass.split(' ')
                    ),
                    f.tagName === 'BUTTON' && (f.disabled = y),
                    t.params.watchOverflow &&
                        t.enabled &&
                        f.classList[t.isLocked ? 'add' : 'remove'](C.lockClass))
            })
    }
    function s() {
        const { nextEl: g, prevEl: y } = t.navigation
        if (t.params.loop) {
            o(y, !1), o(g, !1)
            return
        }
        o(y, t.isBeginning && !t.params.rewind),
            o(g, t.isEnd && !t.params.rewind)
    }
    function a(g) {
        g.preventDefault(),
            !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
                (t.slidePrev(), i('navigationPrev'))
    }
    function u(g) {
        g.preventDefault(),
            !(t.isEnd && !t.params.loop && !t.params.rewind) &&
                (t.slideNext(), i('navigationNext'))
    }
    function c() {
        const g = t.params.navigation
        if (
            ((t.params.navigation = Wu(
                t,
                t.originalParams.navigation,
                t.params.navigation,
                { nextEl: 'swiper-button-next', prevEl: 'swiper-button-prev' }
            )),
            !(g.nextEl || g.prevEl))
        )
            return
        let y = l(g.nextEl),
            C = l(g.prevEl)
        Object.assign(t.navigation, { nextEl: y, prevEl: C }),
            (y = ne(y)),
            (C = ne(C))
        const f = (p, h) => {
            p && p.addEventListener('click', h === 'next' ? u : a),
                !t.enabled && p && p.classList.add(...g.lockClass.split(' '))
        }
        y.forEach((p) => f(p, 'next')), C.forEach((p) => f(p, 'prev'))
    }
    function d() {
        let { nextEl: g, prevEl: y } = t.navigation
        ;(g = ne(g)), (y = ne(y))
        const C = (f, p) => {
            f.removeEventListener('click', p === 'next' ? u : a),
                f.classList.remove(
                    ...t.params.navigation.disabledClass.split(' ')
                )
        }
        g.forEach((f) => C(f, 'next')), y.forEach((f) => C(f, 'prev'))
    }
    r('init', () => {
        t.params.navigation.enabled === !1 ? v() : (c(), s())
    }),
        r('toEdge fromEdge lock unlock', () => {
            s()
        }),
        r('destroy', () => {
            d()
        }),
        r('enable disable', () => {
            let { nextEl: g, prevEl: y } = t.navigation
            if (((g = ne(g)), (y = ne(y)), t.enabled)) {
                s()
                return
            }
            ;[...g, ...y]
                .filter((C) => !!C)
                .forEach((C) => C.classList.add(t.params.navigation.lockClass))
        }),
        r('click', (g, y) => {
            let { nextEl: C, prevEl: f } = t.navigation
            ;(C = ne(C)), (f = ne(f))
            const p = y.target
            let h = f.includes(p) || C.includes(p)
            if (t.isElement && !h) {
                const w = y.path || (y.composedPath && y.composedPath())
                w && (h = w.find((T) => C.includes(T) || f.includes(T)))
            }
            if (t.params.navigation.hideOnClick && !h) {
                if (
                    t.pagination &&
                    t.params.pagination &&
                    t.params.pagination.clickable &&
                    (t.pagination.el === p || t.pagination.el.contains(p))
                )
                    return
                let w
                C.length
                    ? (w = C[0].classList.contains(
                          t.params.navigation.hiddenClass
                      ))
                    : f.length &&
                      (w = f[0].classList.contains(
                          t.params.navigation.hiddenClass
                      )),
                    i(w === !0 ? 'navigationShow' : 'navigationHide'),
                    [...C, ...f]
                        .filter((T) => !!T)
                        .forEach((T) =>
                            T.classList.toggle(t.params.navigation.hiddenClass)
                        )
            }
        })
    const m = () => {
            t.el.classList.remove(
                ...t.params.navigation.navigationDisabledClass.split(' ')
            ),
                c(),
                s()
        },
        v = () => {
            t.el.classList.add(
                ...t.params.navigation.navigationDisabledClass.split(' ')
            ),
                d()
        }
    Object.assign(t.navigation, {
        enable: m,
        disable: v,
        update: s,
        init: c,
        destroy: d,
    })
}
function Ut(e) {
    return (
        e === void 0 && (e = ''),
        `.${e
            .trim()
            .replace(/([\.:!+\/])/g, '\\$1')
            .replace(/ /g, '.')}`
    )
}
function Km(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e
    const l = 'swiper-pagination'
    n({
        pagination: {
            el: null,
            bulletElement: 'span',
            clickable: !1,
            hideOnClick: !1,
            renderBullet: null,
            renderProgressbar: null,
            renderFraction: null,
            renderCustom: null,
            progressbarOpposite: !1,
            type: 'bullets',
            dynamicBullets: !1,
            dynamicMainBullets: 1,
            formatFractionCurrent: (f) => f,
            formatFractionTotal: (f) => f,
            bulletClass: `${l}-bullet`,
            bulletActiveClass: `${l}-bullet-active`,
            modifierClass: `${l}-`,
            currentClass: `${l}-current`,
            totalClass: `${l}-total`,
            hiddenClass: `${l}-hidden`,
            progressbarFillClass: `${l}-progressbar-fill`,
            progressbarOppositeClass: `${l}-progressbar-opposite`,
            clickableClass: `${l}-clickable`,
            lockClass: `${l}-lock`,
            horizontalClass: `${l}-horizontal`,
            verticalClass: `${l}-vertical`,
            paginationDisabledClass: `${l}-disabled`,
        },
    }),
        (t.pagination = { el: null, bullets: [] })
    let o,
        s = 0
    function a() {
        return (
            !t.params.pagination.el ||
            !t.pagination.el ||
            (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
        )
    }
    function u(f, p) {
        const { bulletActiveClass: h } = t.params.pagination
        f &&
            ((f = f[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]),
            f &&
                (f.classList.add(`${h}-${p}`),
                (f = f[`${p === 'prev' ? 'previous' : 'next'}ElementSibling`]),
                f && f.classList.add(`${h}-${p}-${p}`)))
    }
    function c(f) {
        const p = f.target.closest(Ut(t.params.pagination.bulletClass))
        if (!p) return
        f.preventDefault()
        const h = $i(p) * t.params.slidesPerGroup
        if (t.params.loop) {
            if (t.realIndex === h) return
            t.slideToLoop(h)
        } else t.slideTo(h)
    }
    function d() {
        const f = t.rtl,
            p = t.params.pagination
        if (a()) return
        let h = t.pagination.el
        h = ne(h)
        let w, T
        const S =
                t.virtual && t.params.virtual.enabled
                    ? t.virtual.slides.length
                    : t.slides.length,
            R = t.params.loop
                ? Math.ceil(S / t.params.slidesPerGroup)
                : t.snapGrid.length
        if (
            (t.params.loop
                ? ((T = t.previousRealIndex || 0),
                  (w =
                      t.params.slidesPerGroup > 1
                          ? Math.floor(t.realIndex / t.params.slidesPerGroup)
                          : t.realIndex))
                : typeof t.snapIndex < 'u'
                ? ((w = t.snapIndex), (T = t.previousSnapIndex))
                : ((T = t.previousIndex || 0), (w = t.activeIndex || 0)),
            p.type === 'bullets' &&
                t.pagination.bullets &&
                t.pagination.bullets.length > 0)
        ) {
            const M = t.pagination.bullets
            let O, k, A
            if (
                (p.dynamicBullets &&
                    ((o = Da(M[0], t.isHorizontal() ? 'width' : 'height')),
                    h.forEach((b) => {
                        b.style[t.isHorizontal() ? 'width' : 'height'] = `${
                            o * (p.dynamicMainBullets + 4)
                        }px`
                    }),
                    p.dynamicMainBullets > 1 &&
                        T !== void 0 &&
                        ((s += w - (T || 0)),
                        s > p.dynamicMainBullets - 1
                            ? (s = p.dynamicMainBullets - 1)
                            : s < 0 && (s = 0)),
                    (O = Math.max(w - s, 0)),
                    (k = O + (Math.min(M.length, p.dynamicMainBullets) - 1)),
                    (A = (k + O) / 2)),
                M.forEach((b) => {
                    const D = [
                        ...[
                            '',
                            '-next',
                            '-next-next',
                            '-prev',
                            '-prev-prev',
                            '-main',
                        ].map((F) => `${p.bulletActiveClass}${F}`),
                    ]
                        .map((F) =>
                            typeof F == 'string' && F.includes(' ')
                                ? F.split(' ')
                                : F
                        )
                        .flat()
                    b.classList.remove(...D)
                }),
                h.length > 1)
            )
                M.forEach((b) => {
                    const D = $i(b)
                    D === w
                        ? b.classList.add(...p.bulletActiveClass.split(' '))
                        : t.isElement && b.setAttribute('part', 'bullet'),
                        p.dynamicBullets &&
                            (D >= O &&
                                D <= k &&
                                b.classList.add(
                                    ...`${p.bulletActiveClass}-main`.split(' ')
                                ),
                            D === O && u(b, 'prev'),
                            D === k && u(b, 'next'))
                })
            else {
                const b = M[w]
                if (
                    (b && b.classList.add(...p.bulletActiveClass.split(' ')),
                    t.isElement &&
                        M.forEach((D, F) => {
                            D.setAttribute(
                                'part',
                                F === w ? 'bullet-active' : 'bullet'
                            )
                        }),
                    p.dynamicBullets)
                ) {
                    const D = M[O],
                        F = M[k]
                    for (let U = O; U <= k; U += 1)
                        M[U] &&
                            M[U].classList.add(
                                ...`${p.bulletActiveClass}-main`.split(' ')
                            )
                    u(D, 'prev'), u(F, 'next')
                }
            }
            if (p.dynamicBullets) {
                const b = Math.min(M.length, p.dynamicMainBullets + 4),
                    D = (o * b - o) / 2 - A * o,
                    F = f ? 'right' : 'left'
                M.forEach((U) => {
                    U.style[t.isHorizontal() ? F : 'top'] = `${D}px`
                })
            }
        }
        h.forEach((M, O) => {
            if (
                (p.type === 'fraction' &&
                    (M.querySelectorAll(Ut(p.currentClass)).forEach((k) => {
                        k.textContent = p.formatFractionCurrent(w + 1)
                    }),
                    M.querySelectorAll(Ut(p.totalClass)).forEach((k) => {
                        k.textContent = p.formatFractionTotal(R)
                    })),
                p.type === 'progressbar')
            ) {
                let k
                p.progressbarOpposite
                    ? (k = t.isHorizontal() ? 'vertical' : 'horizontal')
                    : (k = t.isHorizontal() ? 'horizontal' : 'vertical')
                const A = (w + 1) / R
                let b = 1,
                    D = 1
                k === 'horizontal' ? (b = A) : (D = A),
                    M.querySelectorAll(Ut(p.progressbarFillClass)).forEach(
                        (F) => {
                            ;(F.style.transform = `translate3d(0,0,0) scaleX(${b}) scaleY(${D})`),
                                (F.style.transitionDuration = `${t.params.speed}ms`)
                        }
                    )
            }
            p.type === 'custom' && p.renderCustom
                ? ((M.innerHTML = p.renderCustom(t, w + 1, R)),
                  O === 0 && i('paginationRender', M))
                : (O === 0 && i('paginationRender', M),
                  i('paginationUpdate', M)),
                t.params.watchOverflow &&
                    t.enabled &&
                    M.classList[t.isLocked ? 'add' : 'remove'](p.lockClass)
        })
    }
    function m() {
        const f = t.params.pagination
        if (a()) return
        const p =
            t.virtual && t.params.virtual.enabled
                ? t.virtual.slides.length
                : t.grid && t.params.grid.rows > 1
                ? t.slides.length / Math.ceil(t.params.grid.rows)
                : t.slides.length
        let h = t.pagination.el
        h = ne(h)
        let w = ''
        if (f.type === 'bullets') {
            let T = t.params.loop
                ? Math.ceil(p / t.params.slidesPerGroup)
                : t.snapGrid.length
            t.params.freeMode && t.params.freeMode.enabled && T > p && (T = p)
            for (let S = 0; S < T; S += 1)
                f.renderBullet
                    ? (w += f.renderBullet.call(t, S, f.bulletClass))
                    : (w += `<${f.bulletElement} ${
                          t.isElement ? 'part="bullet"' : ''
                      } class="${f.bulletClass}"></${f.bulletElement}>`)
        }
        f.type === 'fraction' &&
            (f.renderFraction
                ? (w = f.renderFraction.call(t, f.currentClass, f.totalClass))
                : (w = `<span class="${f.currentClass}"></span> / <span class="${f.totalClass}"></span>`)),
            f.type === 'progressbar' &&
                (f.renderProgressbar
                    ? (w = f.renderProgressbar.call(t, f.progressbarFillClass))
                    : (w = `<span class="${f.progressbarFillClass}"></span>`)),
            (t.pagination.bullets = []),
            h.forEach((T) => {
                f.type !== 'custom' && (T.innerHTML = w || ''),
                    f.type === 'bullets' &&
                        t.pagination.bullets.push(
                            ...T.querySelectorAll(Ut(f.bulletClass))
                        )
            }),
            f.type !== 'custom' && i('paginationRender', h[0])
    }
    function v() {
        t.params.pagination = Wu(
            t,
            t.originalParams.pagination,
            t.params.pagination,
            { el: 'swiper-pagination' }
        )
        const f = t.params.pagination
        if (!f.el) return
        let p
        typeof f.el == 'string' &&
            t.isElement &&
            (p = t.el.querySelector(f.el)),
            !p &&
                typeof f.el == 'string' &&
                (p = [...document.querySelectorAll(f.el)]),
            p || (p = f.el),
            !(!p || p.length === 0) &&
                (t.params.uniqueNavElements &&
                    typeof f.el == 'string' &&
                    Array.isArray(p) &&
                    p.length > 1 &&
                    ((p = [...t.el.querySelectorAll(f.el)]),
                    p.length > 1 &&
                        (p = p.filter((h) => Wm(h, '.swiper')[0] === t.el)[0])),
                Array.isArray(p) && p.length === 1 && (p = p[0]),
                Object.assign(t.pagination, { el: p }),
                (p = ne(p)),
                p.forEach((h) => {
                    f.type === 'bullets' &&
                        f.clickable &&
                        h.classList.add(...(f.clickableClass || '').split(' ')),
                        h.classList.add(f.modifierClass + f.type),
                        h.classList.add(
                            t.isHorizontal()
                                ? f.horizontalClass
                                : f.verticalClass
                        ),
                        f.type === 'bullets' &&
                            f.dynamicBullets &&
                            (h.classList.add(
                                `${f.modifierClass}${f.type}-dynamic`
                            ),
                            (s = 0),
                            f.dynamicMainBullets < 1 &&
                                (f.dynamicMainBullets = 1)),
                        f.type === 'progressbar' &&
                            f.progressbarOpposite &&
                            h.classList.add(f.progressbarOppositeClass),
                        f.clickable && h.addEventListener('click', c),
                        t.enabled || h.classList.add(f.lockClass)
                }))
    }
    function g() {
        const f = t.params.pagination
        if (a()) return
        let p = t.pagination.el
        p &&
            ((p = ne(p)),
            p.forEach((h) => {
                h.classList.remove(f.hiddenClass),
                    h.classList.remove(f.modifierClass + f.type),
                    h.classList.remove(
                        t.isHorizontal() ? f.horizontalClass : f.verticalClass
                    ),
                    f.clickable &&
                        (h.classList.remove(
                            ...(f.clickableClass || '').split(' ')
                        ),
                        h.removeEventListener('click', c))
            })),
            t.pagination.bullets &&
                t.pagination.bullets.forEach((h) =>
                    h.classList.remove(...f.bulletActiveClass.split(' '))
                )
    }
    r('changeDirection', () => {
        if (!t.pagination || !t.pagination.el) return
        const f = t.params.pagination
        let { el: p } = t.pagination
        ;(p = ne(p)),
            p.forEach((h) => {
                h.classList.remove(f.horizontalClass, f.verticalClass),
                    h.classList.add(
                        t.isHorizontal() ? f.horizontalClass : f.verticalClass
                    )
            })
    }),
        r('init', () => {
            t.params.pagination.enabled === !1 ? C() : (v(), m(), d())
        }),
        r('activeIndexChange', () => {
            typeof t.snapIndex > 'u' && d()
        }),
        r('snapIndexChange', () => {
            d()
        }),
        r('snapGridLengthChange', () => {
            m(), d()
        }),
        r('destroy', () => {
            g()
        }),
        r('enable disable', () => {
            let { el: f } = t.pagination
            f &&
                ((f = ne(f)),
                f.forEach((p) =>
                    p.classList[t.enabled ? 'remove' : 'add'](
                        t.params.pagination.lockClass
                    )
                ))
        }),
        r('lock unlock', () => {
            d()
        }),
        r('click', (f, p) => {
            const h = p.target,
                w = ne(t.pagination.el)
            if (
                t.params.pagination.el &&
                t.params.pagination.hideOnClick &&
                w &&
                w.length > 0 &&
                !h.classList.contains(t.params.pagination.bulletClass)
            ) {
                if (
                    t.navigation &&
                    ((t.navigation.nextEl && h === t.navigation.nextEl) ||
                        (t.navigation.prevEl && h === t.navigation.prevEl))
                )
                    return
                const T = w[0].classList.contains(
                    t.params.pagination.hiddenClass
                )
                i(T === !0 ? 'paginationShow' : 'paginationHide'),
                    w.forEach((S) =>
                        S.classList.toggle(t.params.pagination.hiddenClass)
                    )
            }
        })
    const y = () => {
            t.el.classList.remove(t.params.pagination.paginationDisabledClass)
            let { el: f } = t.pagination
            f &&
                ((f = ne(f)),
                f.forEach((p) =>
                    p.classList.remove(
                        t.params.pagination.paginationDisabledClass
                    )
                )),
                v(),
                m(),
                d()
        },
        C = () => {
            t.el.classList.add(t.params.pagination.paginationDisabledClass)
            let { el: f } = t.pagination
            f &&
                ((f = ne(f)),
                f.forEach((p) =>
                    p.classList.add(t.params.pagination.paginationDisabledClass)
                )),
                g()
        }
    Object.assign(t.pagination, {
        enable: y,
        disable: C,
        render: m,
        update: d,
        init: v,
        destroy: g,
    })
}
function pw(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e
    const l = ut()
    let o = !1,
        s = null,
        a = null,
        u,
        c,
        d,
        m
    n({
        scrollbar: {
            el: null,
            dragSize: 'auto',
            hide: !1,
            draggable: !1,
            snapOnRelease: !0,
            lockClass: 'swiper-scrollbar-lock',
            dragClass: 'swiper-scrollbar-drag',
            scrollbarDisabledClass: 'swiper-scrollbar-disabled',
            horizontalClass: 'swiper-scrollbar-horizontal',
            verticalClass: 'swiper-scrollbar-vertical',
        },
    }),
        (t.scrollbar = { el: null, dragEl: null })
    function v() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return
        const { scrollbar: b, rtlTranslate: D } = t,
            { dragEl: F, el: U } = b,
            Y = t.params.scrollbar,
            I = t.params.loop ? t.progressLoop : t.progress
        let P = c,
            z = (d - c) * I
        D
            ? ((z = -z),
              z > 0 ? ((P = c - z), (z = 0)) : -z + c > d && (P = d + z))
            : z < 0
            ? ((P = c + z), (z = 0))
            : z + c > d && (P = d - z),
            t.isHorizontal()
                ? ((F.style.transform = `translate3d(${z}px, 0, 0)`),
                  (F.style.width = `${P}px`))
                : ((F.style.transform = `translate3d(0px, ${z}px, 0)`),
                  (F.style.height = `${P}px`)),
            Y.hide &&
                (clearTimeout(s),
                (U.style.opacity = 1),
                (s = setTimeout(() => {
                    ;(U.style.opacity = 0),
                        (U.style.transitionDuration = '400ms')
                }, 1e3)))
    }
    function g(b) {
        !t.params.scrollbar.el ||
            !t.scrollbar.el ||
            (t.scrollbar.dragEl.style.transitionDuration = `${b}ms`)
    }
    function y() {
        if (!t.params.scrollbar.el || !t.scrollbar.el) return
        const { scrollbar: b } = t,
            { dragEl: D, el: F } = b
        ;(D.style.width = ''),
            (D.style.height = ''),
            (d = t.isHorizontal() ? F.offsetWidth : F.offsetHeight),
            (m =
                t.size /
                (t.virtualSize +
                    t.params.slidesOffsetBefore -
                    (t.params.centeredSlides ? t.snapGrid[0] : 0))),
            t.params.scrollbar.dragSize === 'auto'
                ? (c = d * m)
                : (c = parseInt(t.params.scrollbar.dragSize, 10)),
            t.isHorizontal()
                ? (D.style.width = `${c}px`)
                : (D.style.height = `${c}px`),
            m >= 1 ? (F.style.display = 'none') : (F.style.display = ''),
            t.params.scrollbar.hide && (F.style.opacity = 0),
            t.params.watchOverflow &&
                t.enabled &&
                b.el.classList[t.isLocked ? 'add' : 'remove'](
                    t.params.scrollbar.lockClass
                )
    }
    function C(b) {
        return t.isHorizontal() ? b.clientX : b.clientY
    }
    function f(b) {
        const { scrollbar: D, rtlTranslate: F } = t,
            { el: U } = D
        let Y
        ;(Y =
            (C(b) -
                cw(U)[t.isHorizontal() ? 'left' : 'top'] -
                (u !== null ? u : c / 2)) /
            (d - c)),
            (Y = Math.max(Math.min(Y, 1), 0)),
            F && (Y = 1 - Y)
        const I = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * Y
        t.updateProgress(I),
            t.setTranslate(I),
            t.updateActiveIndex(),
            t.updateSlidesClasses()
    }
    function p(b) {
        const D = t.params.scrollbar,
            { scrollbar: F, wrapperEl: U } = t,
            { el: Y, dragEl: I } = F
        ;(o = !0),
            (u =
                b.target === I
                    ? C(b) -
                      b.target.getBoundingClientRect()[
                          t.isHorizontal() ? 'left' : 'top'
                      ]
                    : null),
            b.preventDefault(),
            b.stopPropagation(),
            (U.style.transitionDuration = '100ms'),
            (I.style.transitionDuration = '100ms'),
            f(b),
            clearTimeout(a),
            (Y.style.transitionDuration = '0ms'),
            D.hide && (Y.style.opacity = 1),
            t.params.cssMode &&
                (t.wrapperEl.style['scroll-snap-type'] = 'none'),
            i('scrollbarDragStart', b)
    }
    function h(b) {
        const { scrollbar: D, wrapperEl: F } = t,
            { el: U, dragEl: Y } = D
        o &&
            (b.preventDefault && b.cancelable
                ? b.preventDefault()
                : (b.returnValue = !1),
            f(b),
            (F.style.transitionDuration = '0ms'),
            (U.style.transitionDuration = '0ms'),
            (Y.style.transitionDuration = '0ms'),
            i('scrollbarDragMove', b))
    }
    function w(b) {
        const D = t.params.scrollbar,
            { scrollbar: F, wrapperEl: U } = t,
            { el: Y } = F
        o &&
            ((o = !1),
            t.params.cssMode &&
                ((t.wrapperEl.style['scroll-snap-type'] = ''),
                (U.style.transitionDuration = '')),
            D.hide &&
                (clearTimeout(a),
                (a = po(() => {
                    ;(Y.style.opacity = 0),
                        (Y.style.transitionDuration = '400ms')
                }, 1e3))),
            i('scrollbarDragEnd', b),
            D.snapOnRelease && t.slideToClosest())
    }
    function T(b) {
        const { scrollbar: D, params: F } = t,
            U = D.el
        if (!U) return
        const Y = U,
            I = F.passiveListeners ? { passive: !1, capture: !1 } : !1,
            P = F.passiveListeners ? { passive: !0, capture: !1 } : !1
        if (!Y) return
        const z = b === 'on' ? 'addEventListener' : 'removeEventListener'
        Y[z]('pointerdown', p, I),
            l[z]('pointermove', h, I),
            l[z]('pointerup', w, P)
    }
    function S() {
        !t.params.scrollbar.el || !t.scrollbar.el || T('on')
    }
    function R() {
        !t.params.scrollbar.el || !t.scrollbar.el || T('off')
    }
    function M() {
        const { scrollbar: b, el: D } = t
        t.params.scrollbar = Wu(
            t,
            t.originalParams.scrollbar,
            t.params.scrollbar,
            { el: 'swiper-scrollbar' }
        )
        const F = t.params.scrollbar
        if (!F.el) return
        let U
        if (
            (typeof F.el == 'string' &&
                t.isElement &&
                (U = t.el.querySelector(F.el)),
            !U && typeof F.el == 'string')
        ) {
            if (((U = l.querySelectorAll(F.el)), !U.length)) return
        } else U || (U = F.el)
        t.params.uniqueNavElements &&
            typeof F.el == 'string' &&
            U.length > 1 &&
            D.querySelectorAll(F.el).length === 1 &&
            (U = D.querySelector(F.el)),
            U.length > 0 && (U = U[0]),
            U.classList.add(
                t.isHorizontal() ? F.horizontalClass : F.verticalClass
            )
        let Y
        U &&
            ((Y = U.querySelector(Ut(t.params.scrollbar.dragClass))),
            Y || ((Y = Fr('div', t.params.scrollbar.dragClass)), U.append(Y))),
            Object.assign(b, { el: U, dragEl: Y }),
            F.draggable && S(),
            U &&
                U.classList[t.enabled ? 'remove' : 'add'](
                    ...an(t.params.scrollbar.lockClass)
                )
    }
    function O() {
        const b = t.params.scrollbar,
            D = t.scrollbar.el
        D &&
            D.classList.remove(
                ...an(t.isHorizontal() ? b.horizontalClass : b.verticalClass)
            ),
            R()
    }
    r('changeDirection', () => {
        if (!t.scrollbar || !t.scrollbar.el) return
        const b = t.params.scrollbar
        let { el: D } = t.scrollbar
        ;(D = ne(D)),
            D.forEach((F) => {
                F.classList.remove(b.horizontalClass, b.verticalClass),
                    F.classList.add(
                        t.isHorizontal() ? b.horizontalClass : b.verticalClass
                    )
            })
    }),
        r('init', () => {
            t.params.scrollbar.enabled === !1 ? A() : (M(), y(), v())
        }),
        r('update resize observerUpdate lock unlock changeDirection', () => {
            y()
        }),
        r('setTranslate', () => {
            v()
        }),
        r('setTransition', (b, D) => {
            g(D)
        }),
        r('enable disable', () => {
            const { el: b } = t.scrollbar
            b &&
                b.classList[t.enabled ? 'remove' : 'add'](
                    ...an(t.params.scrollbar.lockClass)
                )
        }),
        r('destroy', () => {
            O()
        })
    const k = () => {
            t.el.classList.remove(
                ...an(t.params.scrollbar.scrollbarDisabledClass)
            ),
                t.scrollbar.el &&
                    t.scrollbar.el.classList.remove(
                        ...an(t.params.scrollbar.scrollbarDisabledClass)
                    ),
                M(),
                y(),
                v()
        },
        A = () => {
            t.el.classList.add(
                ...an(t.params.scrollbar.scrollbarDisabledClass)
            ),
                t.scrollbar.el &&
                    t.scrollbar.el.classList.add(
                        ...an(t.params.scrollbar.scrollbarDisabledClass)
                    ),
                O()
        }
    Object.assign(t.scrollbar, {
        enable: k,
        disable: A,
        updateSize: y,
        setTranslate: v,
        init: M,
        destroy: O,
    })
}
function Ym(e) {
    let { swiper: t, extendParams: n, on: r } = e
    n({
        a11y: {
            enabled: !0,
            notificationClass: 'swiper-notification',
            prevSlideMessage: 'Previous slide',
            nextSlideMessage: 'Next slide',
            firstSlideMessage: 'This is the first slide',
            lastSlideMessage: 'This is the last slide',
            paginationBulletMessage: 'Go to slide {{index}}',
            slideLabelMessage: '{{index}} / {{slidesLength}}',
            containerMessage: null,
            containerRoleDescriptionMessage: null,
            itemRoleDescriptionMessage: null,
            slideRole: 'group',
            id: null,
            scrollOnFocus: !0,
        },
    }),
        (t.a11y = { clicked: !1 })
    let i = null,
        l,
        o,
        s = new Date().getTime()
    function a(I) {
        const P = i
        P.length !== 0 && ((P.innerHTML = ''), (P.innerHTML = I))
    }
    function u(I) {
        const P = () => Math.round(16 * Math.random()).toString(16)
        return 'x'.repeat(I).replace(/x/g, P)
    }
    function c(I) {
        ;(I = ne(I)),
            I.forEach((P) => {
                P.setAttribute('tabIndex', '0')
            })
    }
    function d(I) {
        ;(I = ne(I)),
            I.forEach((P) => {
                P.setAttribute('tabIndex', '-1')
            })
    }
    function m(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('role', P)
            })
    }
    function v(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('aria-roledescription', P)
            })
    }
    function g(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('aria-controls', P)
            })
    }
    function y(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('aria-label', P)
            })
    }
    function C(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('id', P)
            })
    }
    function f(I, P) {
        ;(I = ne(I)),
            I.forEach((z) => {
                z.setAttribute('aria-live', P)
            })
    }
    function p(I) {
        ;(I = ne(I)),
            I.forEach((P) => {
                P.setAttribute('aria-disabled', !0)
            })
    }
    function h(I) {
        ;(I = ne(I)),
            I.forEach((P) => {
                P.setAttribute('aria-disabled', !1)
            })
    }
    function w(I) {
        if (I.keyCode !== 13 && I.keyCode !== 32) return
        const P = t.params.a11y,
            z = I.target
        if (
            !(
                t.pagination &&
                t.pagination.el &&
                (z === t.pagination.el || t.pagination.el.contains(I.target)) &&
                !I.target.matches(Ut(t.params.pagination.bulletClass))
            )
        ) {
            if (t.navigation && t.navigation.prevEl && t.navigation.nextEl) {
                const $ = ne(t.navigation.prevEl)
                ne(t.navigation.nextEl).includes(z) &&
                    ((t.isEnd && !t.params.loop) || t.slideNext(),
                    t.isEnd ? a(P.lastSlideMessage) : a(P.nextSlideMessage)),
                    $.includes(z) &&
                        ((t.isBeginning && !t.params.loop) || t.slidePrev(),
                        t.isBeginning
                            ? a(P.firstSlideMessage)
                            : a(P.prevSlideMessage))
            }
            t.pagination &&
                z.matches(Ut(t.params.pagination.bulletClass)) &&
                z.click()
        }
    }
    function T() {
        if (t.params.loop || t.params.rewind || !t.navigation) return
        const { nextEl: I, prevEl: P } = t.navigation
        P && (t.isBeginning ? (p(P), d(P)) : (h(P), c(P))),
            I && (t.isEnd ? (p(I), d(I)) : (h(I), c(I)))
    }
    function S() {
        return (
            t.pagination && t.pagination.bullets && t.pagination.bullets.length
        )
    }
    function R() {
        return S() && t.params.pagination.clickable
    }
    function M() {
        const I = t.params.a11y
        S() &&
            t.pagination.bullets.forEach((P) => {
                t.params.pagination.clickable &&
                    (c(P),
                    t.params.pagination.renderBullet ||
                        (m(P, 'button'),
                        y(
                            P,
                            I.paginationBulletMessage.replace(
                                /\{\{index\}\}/,
                                $i(P) + 1
                            )
                        ))),
                    P.matches(Ut(t.params.pagination.bulletActiveClass))
                        ? P.setAttribute('aria-current', 'true')
                        : P.removeAttribute('aria-current')
            })
    }
    const O = (I, P, z) => {
            c(I),
                I.tagName !== 'BUTTON' &&
                    (m(I, 'button'), I.addEventListener('keydown', w)),
                y(I, z),
                g(I, P)
        },
        k = (I) => {
            o && o !== I.target && !o.contains(I.target) && (l = !0),
                (t.a11y.clicked = !0)
        },
        A = () => {
            ;(l = !1),
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        t.destroyed || (t.a11y.clicked = !1)
                    })
                })
        },
        b = (I) => {
            s = new Date().getTime()
        },
        D = (I) => {
            if (
                t.a11y.clicked ||
                !t.params.a11y.scrollOnFocus ||
                new Date().getTime() - s < 100
            )
                return
            const P = I.target.closest(`.${t.params.slideClass}, swiper-slide`)
            if (!P || !t.slides.includes(P)) return
            o = P
            const z = t.slides.indexOf(P) === t.activeIndex,
                $ =
                    t.params.watchSlidesProgress &&
                    t.visibleSlides &&
                    t.visibleSlides.includes(P)
            z ||
                $ ||
                (I.sourceCapabilities &&
                    I.sourceCapabilities.firesTouchEvents) ||
                (t.isHorizontal()
                    ? (t.el.scrollLeft = 0)
                    : (t.el.scrollTop = 0),
                requestAnimationFrame(() => {
                    l ||
                        (t.params.loop
                            ? t.slideToLoop(
                                  parseInt(
                                      P.getAttribute('data-swiper-slide-index')
                                  ),
                                  0
                              )
                            : t.slideTo(t.slides.indexOf(P), 0),
                        (l = !1))
                }))
        },
        F = () => {
            const I = t.params.a11y
            I.itemRoleDescriptionMessage &&
                v(t.slides, I.itemRoleDescriptionMessage),
                I.slideRole && m(t.slides, I.slideRole)
            const P = t.slides.length
            I.slideLabelMessage &&
                t.slides.forEach((z, $) => {
                    const q = t.params.loop
                            ? parseInt(
                                  z.getAttribute('data-swiper-slide-index'),
                                  10
                              )
                            : $,
                        te = I.slideLabelMessage
                            .replace(/\{\{index\}\}/, q + 1)
                            .replace(/\{\{slidesLength\}\}/, P)
                    y(z, te)
                })
        },
        U = () => {
            const I = t.params.a11y
            t.el.append(i)
            const P = t.el
            I.containerRoleDescriptionMessage &&
                v(P, I.containerRoleDescriptionMessage),
                I.containerMessage && y(P, I.containerMessage)
            const z = t.wrapperEl,
                $ = I.id || z.getAttribute('id') || `swiper-wrapper-${u(16)}`,
                q =
                    t.params.autoplay && t.params.autoplay.enabled
                        ? 'off'
                        : 'polite'
            C(z, $), f(z, q), F()
            let { nextEl: te, prevEl: Ue } = t.navigation ? t.navigation : {}
            ;(te = ne(te)),
                (Ue = ne(Ue)),
                te && te.forEach((Ae) => O(Ae, $, I.nextSlideMessage)),
                Ue && Ue.forEach((Ae) => O(Ae, $, I.prevSlideMessage)),
                R() &&
                    ne(t.pagination.el).forEach((Ie) => {
                        Ie.addEventListener('keydown', w)
                    }),
                ut().addEventListener('visibilitychange', b),
                t.el.addEventListener('focus', D, !0),
                t.el.addEventListener('focus', D, !0),
                t.el.addEventListener('pointerdown', k, !0),
                t.el.addEventListener('pointerup', A, !0)
        }
    function Y() {
        i && i.remove()
        let { nextEl: I, prevEl: P } = t.navigation ? t.navigation : {}
        ;(I = ne(I)),
            (P = ne(P)),
            I && I.forEach(($) => $.removeEventListener('keydown', w)),
            P && P.forEach(($) => $.removeEventListener('keydown', w)),
            R() &&
                ne(t.pagination.el).forEach((q) => {
                    q.removeEventListener('keydown', w)
                }),
            ut().removeEventListener('visibilitychange', b),
            t.el &&
                typeof t.el != 'string' &&
                (t.el.removeEventListener('focus', D, !0),
                t.el.removeEventListener('pointerdown', k, !0),
                t.el.removeEventListener('pointerup', A, !0))
    }
    r('beforeInit', () => {
        ;(i = Fr('span', t.params.a11y.notificationClass)),
            i.setAttribute('aria-live', 'assertive'),
            i.setAttribute('aria-atomic', 'true')
    }),
        r('afterInit', () => {
            t.params.a11y.enabled && U()
        }),
        r(
            'slidesLengthChange snapGridLengthChange slidesGridLengthChange',
            () => {
                t.params.a11y.enabled && F()
            }
        ),
        r('fromEdge toEdge afterInit lock unlock', () => {
            t.params.a11y.enabled && T()
        }),
        r('paginationUpdate', () => {
            t.params.a11y.enabled && M()
        }),
        r('destroy', () => {
            t.params.a11y.enabled && Y()
        })
}
function mw(e) {
    let { swiper: t, extendParams: n, on: r, emit: i, params: l } = e
    ;(t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
        n({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1,
            },
        })
    let o,
        s,
        a = l && l.autoplay ? l.autoplay.delay : 3e3,
        u = l && l.autoplay ? l.autoplay.delay : 3e3,
        c,
        d = new Date().getTime(),
        m,
        v,
        g,
        y,
        C,
        f,
        p
    function h(P) {
        !t ||
            t.destroyed ||
            !t.wrapperEl ||
            (P.target === t.wrapperEl &&
                (t.wrapperEl.removeEventListener('transitionend', h),
                !(p || (P.detail && P.detail.bySwiperTouchMove)) && k()))
    }
    const w = () => {
            if (t.destroyed || !t.autoplay.running) return
            t.autoplay.paused ? (m = !0) : m && ((u = c), (m = !1))
            const P = t.autoplay.paused ? c : d + u - new Date().getTime()
            ;(t.autoplay.timeLeft = P),
                i('autoplayTimeLeft', P, P / a),
                (s = requestAnimationFrame(() => {
                    w()
                }))
        },
        T = () => {
            let P
            return (
                t.virtual && t.params.virtual.enabled
                    ? (P = t.slides.filter(($) =>
                          $.classList.contains('swiper-slide-active')
                      )[0])
                    : (P = t.slides[t.activeIndex]),
                P
                    ? parseInt(P.getAttribute('data-swiper-autoplay'), 10)
                    : void 0
            )
        },
        S = (P) => {
            if (t.destroyed || !t.autoplay.running) return
            cancelAnimationFrame(s), w()
            let z = typeof P > 'u' ? t.params.autoplay.delay : P
            ;(a = t.params.autoplay.delay), (u = t.params.autoplay.delay)
            const $ = T()
            !Number.isNaN($) &&
                $ > 0 &&
                typeof P > 'u' &&
                ((z = $), (a = $), (u = $)),
                (c = z)
            const q = t.params.speed,
                te = () => {
                    !t ||
                        t.destroyed ||
                        (t.params.autoplay.reverseDirection
                            ? !t.isBeginning || t.params.loop || t.params.rewind
                                ? (t.slidePrev(q, !0, !0), i('autoplay'))
                                : t.params.autoplay.stopOnLastSlide ||
                                  (t.slideTo(t.slides.length - 1, q, !0, !0),
                                  i('autoplay'))
                            : !t.isEnd || t.params.loop || t.params.rewind
                            ? (t.slideNext(q, !0, !0), i('autoplay'))
                            : t.params.autoplay.stopOnLastSlide ||
                              (t.slideTo(0, q, !0, !0), i('autoplay')),
                        t.params.cssMode &&
                            ((d = new Date().getTime()),
                            requestAnimationFrame(() => {
                                S()
                            })))
                }
            return (
                z > 0
                    ? (clearTimeout(o),
                      (o = setTimeout(() => {
                          te()
                      }, z)))
                    : requestAnimationFrame(() => {
                          te()
                      }),
                z
            )
        },
        R = () => {
            ;(d = new Date().getTime()),
                (t.autoplay.running = !0),
                S(),
                i('autoplayStart')
        },
        M = () => {
            ;(t.autoplay.running = !1),
                clearTimeout(o),
                cancelAnimationFrame(s),
                i('autoplayStop')
        },
        O = (P, z) => {
            if (t.destroyed || !t.autoplay.running) return
            clearTimeout(o), P || (f = !0)
            const $ = () => {
                i('autoplayPause'),
                    t.params.autoplay.waitForTransition
                        ? t.wrapperEl.addEventListener('transitionend', h)
                        : k()
            }
            if (((t.autoplay.paused = !0), z)) {
                C && (c = t.params.autoplay.delay), (C = !1), $()
                return
            }
            ;(c = (c || t.params.autoplay.delay) - (new Date().getTime() - d)),
                !(t.isEnd && c < 0 && !t.params.loop) && (c < 0 && (c = 0), $())
        },
        k = () => {
            ;(t.isEnd && c < 0 && !t.params.loop) ||
                t.destroyed ||
                !t.autoplay.running ||
                ((d = new Date().getTime()),
                f ? ((f = !1), S(c)) : S(),
                (t.autoplay.paused = !1),
                i('autoplayResume'))
        },
        A = () => {
            if (t.destroyed || !t.autoplay.running) return
            const P = ut()
            P.visibilityState === 'hidden' && ((f = !0), O(!0)),
                P.visibilityState === 'visible' && k()
        },
        b = (P) => {
            P.pointerType === 'mouse' &&
                ((f = !0),
                (p = !0),
                !(t.animating || t.autoplay.paused) && O(!0))
        },
        D = (P) => {
            P.pointerType === 'mouse' && ((p = !1), t.autoplay.paused && k())
        },
        F = () => {
            t.params.autoplay.pauseOnMouseEnter &&
                (t.el.addEventListener('pointerenter', b),
                t.el.addEventListener('pointerleave', D))
        },
        U = () => {
            t.el &&
                typeof t.el != 'string' &&
                (t.el.removeEventListener('pointerenter', b),
                t.el.removeEventListener('pointerleave', D))
        },
        Y = () => {
            ut().addEventListener('visibilitychange', A)
        },
        I = () => {
            ut().removeEventListener('visibilitychange', A)
        }
    r('init', () => {
        t.params.autoplay.enabled && (F(), Y(), R())
    }),
        r('destroy', () => {
            U(), I(), t.autoplay.running && M()
        }),
        r('_freeModeStaticRelease', () => {
            ;(g || f) && k()
        }),
        r('_freeModeNoMomentumRelease', () => {
            t.params.autoplay.disableOnInteraction ? M() : O(!0, !0)
        }),
        r('beforeTransitionStart', (P, z, $) => {
            t.destroyed ||
                !t.autoplay.running ||
                ($ || !t.params.autoplay.disableOnInteraction ? O(!0, !0) : M())
        }),
        r('sliderFirstMove', () => {
            if (!(t.destroyed || !t.autoplay.running)) {
                if (t.params.autoplay.disableOnInteraction) {
                    M()
                    return
                }
                ;(v = !0),
                    (g = !1),
                    (f = !1),
                    (y = setTimeout(() => {
                        ;(f = !0), (g = !0), O(!0)
                    }, 200))
            }
        }),
        r('touchEnd', () => {
            if (!(t.destroyed || !t.autoplay.running || !v)) {
                if (
                    (clearTimeout(y),
                    clearTimeout(o),
                    t.params.autoplay.disableOnInteraction)
                ) {
                    ;(g = !1), (v = !1)
                    return
                }
                g && t.params.cssMode && k(), (g = !1), (v = !1)
            }
        }),
        r('slideChange', () => {
            t.destroyed || !t.autoplay.running || (C = !0)
        }),
        Object.assign(t.autoplay, { start: R, stop: M, pause: O, resume: k })
}
let ks
function hw() {
    const e = tt(),
        t = ut()
    return {
        smoothScroll:
            t.documentElement &&
            t.documentElement.style &&
            'scrollBehavior' in t.documentElement.style,
        touch: !!(
            'ontouchstart' in e ||
            (e.DocumentTouch && t instanceof e.DocumentTouch)
        ),
    }
}
function Xm() {
    return ks || (ks = hw()), ks
}
let Ls
function gw(e) {
    let { userAgent: t } = e === void 0 ? {} : e
    const n = Xm(),
        r = tt(),
        i = r.navigator.platform,
        l = t || r.navigator.userAgent,
        o = { ios: !1, android: !1 },
        s = r.screen.width,
        a = r.screen.height,
        u = l.match(/(Android);?[\s\/]+([\d.]+)?/)
    let c = l.match(/(iPad).*OS\s([\d_]+)/)
    const d = l.match(/(iPod)(.*OS\s([\d_]+))?/),
        m = !c && l.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
        v = i === 'Win32'
    let g = i === 'MacIntel'
    const y = [
        '1024x1366',
        '1366x1024',
        '834x1194',
        '1194x834',
        '834x1112',
        '1112x834',
        '768x1024',
        '1024x768',
        '820x1180',
        '1180x820',
        '810x1080',
        '1080x810',
    ]
    return (
        !c &&
            g &&
            n.touch &&
            y.indexOf(`${s}x${a}`) >= 0 &&
            ((c = l.match(/(Version)\/([\d.]+)/)),
            c || (c = [0, 1, '13_0_0']),
            (g = !1)),
        u && !v && ((o.os = 'android'), (o.android = !0)),
        (c || m || d) && ((o.os = 'ios'), (o.ios = !0)),
        o
    )
}
function qm(e) {
    return e === void 0 && (e = {}), Ls || (Ls = gw(e)), Ls
}
let Ns
function vw() {
    const e = tt(),
        t = qm()
    let n = !1
    function r() {
        const s = e.navigator.userAgent.toLowerCase()
        return (
            s.indexOf('safari') >= 0 &&
            s.indexOf('chrome') < 0 &&
            s.indexOf('android') < 0
        )
    }
    if (r()) {
        const s = String(e.navigator.userAgent)
        if (s.includes('Version/')) {
            const [a, u] = s
                .split('Version/')[1]
                .split(' ')[0]
                .split('.')
                .map((c) => Number(c))
            n = a < 16 || (a === 16 && u < 2)
        }
    }
    const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
            e.navigator.userAgent
        ),
        l = r(),
        o = l || (i && t.ios)
    return {
        isSafari: n || l,
        needPerspectiveFix: n,
        need3dFix: o,
        isWebView: i,
    }
}
function yw() {
    return Ns || (Ns = vw()), Ns
}
function ww(e) {
    let { swiper: t, on: n, emit: r } = e
    const i = tt()
    let l = null,
        o = null
    const s = () => {
            !t ||
                t.destroyed ||
                !t.initialized ||
                (r('beforeResize'), r('resize'))
        },
        a = () => {
            !t ||
                t.destroyed ||
                !t.initialized ||
                ((l = new ResizeObserver((d) => {
                    o = i.requestAnimationFrame(() => {
                        const { width: m, height: v } = t
                        let g = m,
                            y = v
                        d.forEach((C) => {
                            let {
                                contentBoxSize: f,
                                contentRect: p,
                                target: h,
                            } = C
                            ;(h && h !== t.el) ||
                                ((g = p ? p.width : (f[0] || f).inlineSize),
                                (y = p ? p.height : (f[0] || f).blockSize))
                        }),
                            (g !== m || y !== v) && s()
                    })
                })),
                l.observe(t.el))
        },
        u = () => {
            o && i.cancelAnimationFrame(o),
                l && l.unobserve && t.el && (l.unobserve(t.el), (l = null))
        },
        c = () => {
            !t || t.destroyed || !t.initialized || r('orientationchange')
        }
    n('init', () => {
        if (t.params.resizeObserver && typeof i.ResizeObserver < 'u') {
            a()
            return
        }
        i.addEventListener('resize', s),
            i.addEventListener('orientationchange', c)
    }),
        n('destroy', () => {
            u(),
                i.removeEventListener('resize', s),
                i.removeEventListener('orientationchange', c)
        })
}
function Sw(e) {
    let { swiper: t, extendParams: n, on: r, emit: i } = e
    const l = [],
        o = tt(),
        s = function (c, d) {
            d === void 0 && (d = {})
            const m = o.MutationObserver || o.WebkitMutationObserver,
                v = new m((g) => {
                    if (t.__preventObserver__) return
                    if (g.length === 1) {
                        i('observerUpdate', g[0])
                        return
                    }
                    const y = function () {
                        i('observerUpdate', g[0])
                    }
                    o.requestAnimationFrame
                        ? o.requestAnimationFrame(y)
                        : o.setTimeout(y, 0)
                })
            v.observe(c, {
                attributes: typeof d.attributes > 'u' ? !0 : d.attributes,
                childList:
                    t.isElement ||
                    (typeof d.childList > 'u' ? !0 : d).childList,
                characterData:
                    typeof d.characterData > 'u' ? !0 : d.characterData,
            }),
                l.push(v)
        },
        a = () => {
            if (t.params.observer) {
                if (t.params.observeParents) {
                    const c = Wm(t.hostEl)
                    for (let d = 0; d < c.length; d += 1) s(c[d])
                }
                s(t.hostEl, { childList: t.params.observeSlideChildren }),
                    s(t.wrapperEl, { attributes: !1 })
            }
        },
        u = () => {
            l.forEach((c) => {
                c.disconnect()
            }),
                l.splice(0, l.length)
        }
    n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
        r('init', a),
        r('destroy', u)
}
var xw = {
    on(e, t, n) {
        const r = this
        if (!r.eventsListeners || r.destroyed || typeof t != 'function')
            return r
        const i = n ? 'unshift' : 'push'
        return (
            e.split(' ').forEach((l) => {
                r.eventsListeners[l] || (r.eventsListeners[l] = []),
                    r.eventsListeners[l][i](t)
            }),
            r
        )
    },
    once(e, t, n) {
        const r = this
        if (!r.eventsListeners || r.destroyed || typeof t != 'function')
            return r
        function i() {
            r.off(e, i), i.__emitterProxy && delete i.__emitterProxy
            for (var l = arguments.length, o = new Array(l), s = 0; s < l; s++)
                o[s] = arguments[s]
            t.apply(r, o)
        }
        return (i.__emitterProxy = t), r.on(e, i, n)
    },
    onAny(e, t) {
        const n = this
        if (!n.eventsListeners || n.destroyed || typeof e != 'function')
            return n
        const r = t ? 'unshift' : 'push'
        return (
            n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n
        )
    },
    offAny(e) {
        const t = this
        if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t
        const n = t.eventsAnyListeners.indexOf(e)
        return n >= 0 && t.eventsAnyListeners.splice(n, 1), t
    },
    off(e, t) {
        const n = this
        return (
            !n.eventsListeners ||
                n.destroyed ||
                !n.eventsListeners ||
                e.split(' ').forEach((r) => {
                    typeof t > 'u'
                        ? (n.eventsListeners[r] = [])
                        : n.eventsListeners[r] &&
                          n.eventsListeners[r].forEach((i, l) => {
                              ;(i === t ||
                                  (i.__emitterProxy &&
                                      i.__emitterProxy === t)) &&
                                  n.eventsListeners[r].splice(l, 1)
                          })
                }),
            n
        )
    },
    emit() {
        const e = this
        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e
        let t, n, r
        for (var i = arguments.length, l = new Array(i), o = 0; o < i; o++)
            l[o] = arguments[o]
        return (
            typeof l[0] == 'string' || Array.isArray(l[0])
                ? ((t = l[0]), (n = l.slice(1, l.length)), (r = e))
                : ((t = l[0].events), (n = l[0].data), (r = l[0].context || e)),
            n.unshift(r),
            (Array.isArray(t) ? t : t.split(' ')).forEach((a) => {
                e.eventsAnyListeners &&
                    e.eventsAnyListeners.length &&
                    e.eventsAnyListeners.forEach((u) => {
                        u.apply(r, [a, ...n])
                    }),
                    e.eventsListeners &&
                        e.eventsListeners[a] &&
                        e.eventsListeners[a].forEach((u) => {
                            u.apply(r, n)
                        })
            }),
            e
        )
    },
}
function Ew() {
    const e = this
    let t, n
    const r = e.el
    typeof e.params.width < 'u' && e.params.width !== null
        ? (t = e.params.width)
        : (t = r.clientWidth),
        typeof e.params.height < 'u' && e.params.height !== null
            ? (n = e.params.height)
            : (n = r.clientHeight),
        !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
            ((t =
                t -
                parseInt(gn(r, 'padding-left') || 0, 10) -
                parseInt(gn(r, 'padding-right') || 0, 10)),
            (n =
                n -
                parseInt(gn(r, 'padding-top') || 0, 10) -
                parseInt(gn(r, 'padding-bottom') || 0, 10)),
            Number.isNaN(t) && (t = 0),
            Number.isNaN(n) && (n = 0),
            Object.assign(e, {
                width: t,
                height: n,
                size: e.isHorizontal() ? t : n,
            }))
}
function Cw() {
    const e = this
    function t(k, A) {
        return parseFloat(k.getPropertyValue(e.getDirectionLabel(A)) || 0)
    }
    const n = e.params,
        {
            wrapperEl: r,
            slidesEl: i,
            size: l,
            rtlTranslate: o,
            wrongRTL: s,
        } = e,
        a = e.virtual && n.virtual.enabled,
        u = a ? e.virtual.slides.length : e.slides.length,
        c = Dt(i, `.${e.params.slideClass}, swiper-slide`),
        d = a ? e.virtual.slides.length : c.length
    let m = []
    const v = [],
        g = []
    let y = n.slidesOffsetBefore
    typeof y == 'function' && (y = n.slidesOffsetBefore.call(e))
    let C = n.slidesOffsetAfter
    typeof C == 'function' && (C = n.slidesOffsetAfter.call(e))
    const f = e.snapGrid.length,
        p = e.slidesGrid.length
    let h = n.spaceBetween,
        w = -y,
        T = 0,
        S = 0
    if (typeof l > 'u') return
    typeof h == 'string' && h.indexOf('%') >= 0
        ? (h = (parseFloat(h.replace('%', '')) / 100) * l)
        : typeof h == 'string' && (h = parseFloat(h)),
        (e.virtualSize = -h),
        c.forEach((k) => {
            o ? (k.style.marginLeft = '') : (k.style.marginRight = ''),
                (k.style.marginBottom = ''),
                (k.style.marginTop = '')
        }),
        n.centeredSlides &&
            n.cssMode &&
            (Tl(r, '--swiper-centered-offset-before', ''),
            Tl(r, '--swiper-centered-offset-after', ''))
    const R = n.grid && n.grid.rows > 1 && e.grid
    R ? e.grid.initSlides(c) : e.grid && e.grid.unsetSlides()
    let M
    const O =
        n.slidesPerView === 'auto' &&
        n.breakpoints &&
        Object.keys(n.breakpoints).filter(
            (k) => typeof n.breakpoints[k].slidesPerView < 'u'
        ).length > 0
    for (let k = 0; k < d; k += 1) {
        M = 0
        let A
        if (
            (c[k] && (A = c[k]),
            R && e.grid.updateSlide(k, A, c),
            !(c[k] && gn(A, 'display') === 'none'))
        ) {
            if (n.slidesPerView === 'auto') {
                O && (c[k].style[e.getDirectionLabel('width')] = '')
                const b = getComputedStyle(A),
                    D = A.style.transform,
                    F = A.style.webkitTransform
                if (
                    (D && (A.style.transform = 'none'),
                    F && (A.style.webkitTransform = 'none'),
                    n.roundLengths)
                )
                    M = e.isHorizontal() ? Da(A, 'width') : Da(A, 'height')
                else {
                    const U = t(b, 'width'),
                        Y = t(b, 'padding-left'),
                        I = t(b, 'padding-right'),
                        P = t(b, 'margin-left'),
                        z = t(b, 'margin-right'),
                        $ = b.getPropertyValue('box-sizing')
                    if ($ && $ === 'border-box') M = U + P + z
                    else {
                        const { clientWidth: q, offsetWidth: te } = A
                        M = U + Y + I + P + z + (te - q)
                    }
                }
                D && (A.style.transform = D),
                    F && (A.style.webkitTransform = F),
                    n.roundLengths && (M = Math.floor(M))
            } else
                (M = (l - (n.slidesPerView - 1) * h) / n.slidesPerView),
                    n.roundLengths && (M = Math.floor(M)),
                    c[k] &&
                        (c[k].style[e.getDirectionLabel('width')] = `${M}px`)
            c[k] && (c[k].swiperSlideSize = M),
                g.push(M),
                n.centeredSlides
                    ? ((w = w + M / 2 + T / 2 + h),
                      T === 0 && k !== 0 && (w = w - l / 2 - h),
                      k === 0 && (w = w - l / 2 - h),
                      Math.abs(w) < 1 / 1e3 && (w = 0),
                      n.roundLengths && (w = Math.floor(w)),
                      S % n.slidesPerGroup === 0 && m.push(w),
                      v.push(w))
                    : (n.roundLengths && (w = Math.floor(w)),
                      (S - Math.min(e.params.slidesPerGroupSkip, S)) %
                          e.params.slidesPerGroup ===
                          0 && m.push(w),
                      v.push(w),
                      (w = w + M + h)),
                (e.virtualSize += M + h),
                (T = M),
                (S += 1)
        }
    }
    if (
        ((e.virtualSize = Math.max(e.virtualSize, l) + C),
        o &&
            s &&
            (n.effect === 'slide' || n.effect === 'coverflow') &&
            (r.style.width = `${e.virtualSize + h}px`),
        n.setWrapperSize &&
            (r.style[e.getDirectionLabel('width')] = `${e.virtualSize + h}px`),
        R && e.grid.updateWrapperSize(M, m),
        !n.centeredSlides)
    ) {
        const k = []
        for (let A = 0; A < m.length; A += 1) {
            let b = m[A]
            n.roundLengths && (b = Math.floor(b)),
                m[A] <= e.virtualSize - l && k.push(b)
        }
        ;(m = k),
            Math.floor(e.virtualSize - l) - Math.floor(m[m.length - 1]) > 1 &&
                m.push(e.virtualSize - l)
    }
    if (a && n.loop) {
        const k = g[0] + h
        if (n.slidesPerGroup > 1) {
            const A = Math.ceil(
                    (e.virtual.slidesBefore + e.virtual.slidesAfter) /
                        n.slidesPerGroup
                ),
                b = k * n.slidesPerGroup
            for (let D = 0; D < A; D += 1) m.push(m[m.length - 1] + b)
        }
        for (
            let A = 0;
            A < e.virtual.slidesBefore + e.virtual.slidesAfter;
            A += 1
        )
            n.slidesPerGroup === 1 && m.push(m[m.length - 1] + k),
                v.push(v[v.length - 1] + k),
                (e.virtualSize += k)
    }
    if ((m.length === 0 && (m = [0]), h !== 0)) {
        const k =
            e.isHorizontal() && o
                ? 'marginLeft'
                : e.getDirectionLabel('marginRight')
        c.filter((A, b) =>
            !n.cssMode || n.loop ? !0 : b !== c.length - 1
        ).forEach((A) => {
            A.style[k] = `${h}px`
        })
    }
    if (n.centeredSlides && n.centeredSlidesBounds) {
        let k = 0
        g.forEach((b) => {
            k += b + (h || 0)
        }),
            (k -= h)
        const A = k - l
        m = m.map((b) => (b <= 0 ? -y : b > A ? A + C : b))
    }
    if (n.centerInsufficientSlides) {
        let k = 0
        g.forEach((b) => {
            k += b + (h || 0)
        }),
            (k -= h)
        const A = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0)
        if (k + A < l) {
            const b = (l - k - A) / 2
            m.forEach((D, F) => {
                m[F] = D - b
            }),
                v.forEach((D, F) => {
                    v[F] = D + b
                })
        }
    }
    if (
        (Object.assign(e, {
            slides: c,
            snapGrid: m,
            slidesGrid: v,
            slidesSizesGrid: g,
        }),
        n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
    ) {
        Tl(r, '--swiper-centered-offset-before', `${-m[0]}px`),
            Tl(
                r,
                '--swiper-centered-offset-after',
                `${e.size / 2 - g[g.length - 1] / 2}px`
            )
        const k = -e.snapGrid[0],
            A = -e.slidesGrid[0]
        ;(e.snapGrid = e.snapGrid.map((b) => b + k)),
            (e.slidesGrid = e.slidesGrid.map((b) => b + A))
    }
    if (
        (d !== u && e.emit('slidesLengthChange'),
        m.length !== f &&
            (e.params.watchOverflow && e.checkOverflow(),
            e.emit('snapGridLengthChange')),
        v.length !== p && e.emit('slidesGridLengthChange'),
        n.watchSlidesProgress && e.updateSlidesOffset(),
        e.emit('slidesUpdated'),
        !a && !n.cssMode && (n.effect === 'slide' || n.effect === 'fade'))
    ) {
        const k = `${n.containerModifierClass}backface-hidden`,
            A = e.el.classList.contains(k)
        d <= n.maxBackfaceHiddenSlides
            ? A || e.el.classList.add(k)
            : A && e.el.classList.remove(k)
    }
}
function Tw(e) {
    const t = this,
        n = [],
        r = t.virtual && t.params.virtual.enabled
    let i = 0,
        l
    typeof e == 'number'
        ? t.setTransition(e)
        : e === !0 && t.setTransition(t.params.speed)
    const o = (s) => (r ? t.slides[t.getSlideIndexByData(s)] : t.slides[s])
    if (t.params.slidesPerView !== 'auto' && t.params.slidesPerView > 1)
        if (t.params.centeredSlides)
            (t.visibleSlides || []).forEach((s) => {
                n.push(s)
            })
        else
            for (l = 0; l < Math.ceil(t.params.slidesPerView); l += 1) {
                const s = t.activeIndex + l
                if (s > t.slides.length && !r) break
                n.push(o(s))
            }
    else n.push(o(t.activeIndex))
    for (l = 0; l < n.length; l += 1)
        if (typeof n[l] < 'u') {
            const s = n[l].offsetHeight
            i = s > i ? s : i
        }
    ;(i || i === 0) && (t.wrapperEl.style.height = `${i}px`)
}
function Pw() {
    const e = this,
        t = e.slides,
        n = e.isElement
            ? e.isHorizontal()
                ? e.wrapperEl.offsetLeft
                : e.wrapperEl.offsetTop
            : 0
    for (let r = 0; r < t.length; r += 1)
        t[r].swiperSlideOffset =
            (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
            n -
            e.cssOverflowAdjustment()
}
const Hd = (e, t, n) => {
    t && !e.classList.contains(n)
        ? e.classList.add(n)
        : !t && e.classList.contains(n) && e.classList.remove(n)
}
function _w(e) {
    e === void 0 && (e = (this && this.translate) || 0)
    const t = this,
        n = t.params,
        { slides: r, rtlTranslate: i, snapGrid: l } = t
    if (r.length === 0) return
    typeof r[0].swiperSlideOffset > 'u' && t.updateSlidesOffset()
    let o = -e
    i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = [])
    let s = n.spaceBetween
    typeof s == 'string' && s.indexOf('%') >= 0
        ? (s = (parseFloat(s.replace('%', '')) / 100) * t.size)
        : typeof s == 'string' && (s = parseFloat(s))
    for (let a = 0; a < r.length; a += 1) {
        const u = r[a]
        let c = u.swiperSlideOffset
        n.cssMode && n.centeredSlides && (c -= r[0].swiperSlideOffset)
        const d =
                (o + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (u.swiperSlideSize + s),
            m =
                (o - l[0] + (n.centeredSlides ? t.minTranslate() : 0) - c) /
                (u.swiperSlideSize + s),
            v = -(o - c),
            g = v + t.slidesSizesGrid[a],
            y = v >= 0 && v <= t.size - t.slidesSizesGrid[a],
            C =
                (v >= 0 && v < t.size - 1) ||
                (g > 1 && g <= t.size) ||
                (v <= 0 && g >= t.size)
        C && (t.visibleSlides.push(u), t.visibleSlidesIndexes.push(a)),
            Hd(u, C, n.slideVisibleClass),
            Hd(u, y, n.slideFullyVisibleClass),
            (u.progress = i ? -d : d),
            (u.originalProgress = i ? -m : m)
    }
}
function Mw(e) {
    const t = this
    if (typeof e > 'u') {
        const c = t.rtlTranslate ? -1 : 1
        e = (t && t.translate && t.translate * c) || 0
    }
    const n = t.params,
        r = t.maxTranslate() - t.minTranslate()
    let { progress: i, isBeginning: l, isEnd: o, progressLoop: s } = t
    const a = l,
        u = o
    if (r === 0) (i = 0), (l = !0), (o = !0)
    else {
        i = (e - t.minTranslate()) / r
        const c = Math.abs(e - t.minTranslate()) < 1,
            d = Math.abs(e - t.maxTranslate()) < 1
        ;(l = c || i <= 0), (o = d || i >= 1), c && (i = 0), d && (i = 1)
    }
    if (n.loop) {
        const c = t.getSlideIndexByData(0),
            d = t.getSlideIndexByData(t.slides.length - 1),
            m = t.slidesGrid[c],
            v = t.slidesGrid[d],
            g = t.slidesGrid[t.slidesGrid.length - 1],
            y = Math.abs(e)
        y >= m ? (s = (y - m) / g) : (s = (y + g - v) / g), s > 1 && (s -= 1)
    }
    Object.assign(t, {
        progress: i,
        progressLoop: s,
        isBeginning: l,
        isEnd: o,
    }),
        (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
            t.updateSlidesProgress(e),
        l && !a && t.emit('reachBeginning toEdge'),
        o && !u && t.emit('reachEnd toEdge'),
        ((a && !l) || (u && !o)) && t.emit('fromEdge'),
        t.emit('progress', i)
}
const Os = (e, t, n) => {
    t && !e.classList.contains(n)
        ? e.classList.add(n)
        : !t && e.classList.contains(n) && e.classList.remove(n)
}
function kw() {
    const e = this,
        { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
        l = e.virtual && n.virtual.enabled,
        o = e.grid && n.grid && n.grid.rows > 1,
        s = (d) => Dt(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0]
    let a, u, c
    if (l)
        if (n.loop) {
            let d = i - e.virtual.slidesBefore
            d < 0 && (d = e.virtual.slides.length + d),
                d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
                (a = s(`[data-swiper-slide-index="${d}"]`))
        } else a = s(`[data-swiper-slide-index="${i}"]`)
    else
        o
            ? ((a = t.filter((d) => d.column === i)[0]),
              (c = t.filter((d) => d.column === i + 1)[0]),
              (u = t.filter((d) => d.column === i - 1)[0]))
            : (a = t[i])
    a &&
        (o ||
            ((c = fw(a, `.${n.slideClass}, swiper-slide`)[0]),
            n.loop && !c && (c = t[0]),
            (u = dw(a, `.${n.slideClass}, swiper-slide`)[0]),
            n.loop && !u === 0 && (u = t[t.length - 1]))),
        t.forEach((d) => {
            Os(d, d === a, n.slideActiveClass),
                Os(d, d === c, n.slideNextClass),
                Os(d, d === u, n.slidePrevClass)
        }),
        e.emitSlidesClasses()
}
const Fl = (e, t) => {
        if (!e || e.destroyed || !e.params) return
        const n = () =>
                e.isElement ? 'swiper-slide' : `.${e.params.slideClass}`,
            r = t.closest(n())
        if (r) {
            let i = r.querySelector(`.${e.params.lazyPreloaderClass}`)
            !i &&
                e.isElement &&
                (r.shadowRoot
                    ? (i = r.shadowRoot.querySelector(
                          `.${e.params.lazyPreloaderClass}`
                      ))
                    : requestAnimationFrame(() => {
                          r.shadowRoot &&
                              ((i = r.shadowRoot.querySelector(
                                  `.${e.params.lazyPreloaderClass}`
                              )),
                              i && i.remove())
                      })),
                i && i.remove()
        }
    },
    Is = (e, t) => {
        if (!e.slides[t]) return
        const n = e.slides[t].querySelector('[loading="lazy"]')
        n && n.removeAttribute('loading')
    },
    za = (e) => {
        if (!e || e.destroyed || !e.params) return
        let t = e.params.lazyPreloadPrevNext
        const n = e.slides.length
        if (!n || !t || t < 0) return
        t = Math.min(t, n)
        const r =
                e.params.slidesPerView === 'auto'
                    ? e.slidesPerViewDynamic()
                    : Math.ceil(e.params.slidesPerView),
            i = e.activeIndex
        if (e.params.grid && e.params.grid.rows > 1) {
            const o = i,
                s = [o - t]
            s.push(...Array.from({ length: t }).map((a, u) => o + r + u)),
                e.slides.forEach((a, u) => {
                    s.includes(a.column) && Is(e, u)
                })
            return
        }
        const l = i + r - 1
        if (e.params.rewind || e.params.loop)
            for (let o = i - t; o <= l + t; o += 1) {
                const s = ((o % n) + n) % n
                ;(s < i || s > l) && Is(e, s)
            }
        else
            for (
                let o = Math.max(i - t, 0);
                o <= Math.min(l + t, n - 1);
                o += 1
            )
                o !== i && (o > l || o < i) && Is(e, o)
    }
function Lw(e) {
    const { slidesGrid: t, params: n } = e,
        r = e.rtlTranslate ? e.translate : -e.translate
    let i
    for (let l = 0; l < t.length; l += 1)
        typeof t[l + 1] < 'u'
            ? r >= t[l] && r < t[l + 1] - (t[l + 1] - t[l]) / 2
                ? (i = l)
                : r >= t[l] && r < t[l + 1] && (i = l + 1)
            : r >= t[l] && (i = l)
    return n.normalizeSlideIndex && (i < 0 || typeof i > 'u') && (i = 0), i
}
function Nw(e) {
    const t = this,
        n = t.rtlTranslate ? t.translate : -t.translate,
        {
            snapGrid: r,
            params: i,
            activeIndex: l,
            realIndex: o,
            snapIndex: s,
        } = t
    let a = e,
        u
    const c = (v) => {
        let g = v - t.virtual.slidesBefore
        return (
            g < 0 && (g = t.virtual.slides.length + g),
            g >= t.virtual.slides.length && (g -= t.virtual.slides.length),
            g
        )
    }
    if ((typeof a > 'u' && (a = Lw(t)), r.indexOf(n) >= 0)) u = r.indexOf(n)
    else {
        const v = Math.min(i.slidesPerGroupSkip, a)
        u = v + Math.floor((a - v) / i.slidesPerGroup)
    }
    if ((u >= r.length && (u = r.length - 1), a === l && !t.params.loop)) {
        u !== s && ((t.snapIndex = u), t.emit('snapIndexChange'))
        return
    }
    if (a === l && t.params.loop && t.virtual && t.params.virtual.enabled) {
        t.realIndex = c(a)
        return
    }
    const d = t.grid && i.grid && i.grid.rows > 1
    let m
    if (t.virtual && i.virtual.enabled && i.loop) m = c(a)
    else if (d) {
        const v = t.slides.filter((y) => y.column === a)[0]
        let g = parseInt(v.getAttribute('data-swiper-slide-index'), 10)
        Number.isNaN(g) && (g = Math.max(t.slides.indexOf(v), 0)),
            (m = Math.floor(g / i.grid.rows))
    } else if (t.slides[a]) {
        const v = t.slides[a].getAttribute('data-swiper-slide-index')
        v ? (m = parseInt(v, 10)) : (m = a)
    } else m = a
    Object.assign(t, {
        previousSnapIndex: s,
        snapIndex: u,
        previousRealIndex: o,
        realIndex: m,
        previousIndex: l,
        activeIndex: a,
    }),
        t.initialized && za(t),
        t.emit('activeIndexChange'),
        t.emit('snapIndexChange'),
        (t.initialized || t.params.runCallbacksOnInit) &&
            (o !== m && t.emit('realIndexChange'), t.emit('slideChange'))
}
function Ow(e, t) {
    const n = this,
        r = n.params
    let i = e.closest(`.${r.slideClass}, swiper-slide`)
    !i &&
        n.isElement &&
        t &&
        t.length > 1 &&
        t.includes(e) &&
        [...t.slice(t.indexOf(e) + 1, t.length)].forEach((s) => {
            !i &&
                s.matches &&
                s.matches(`.${r.slideClass}, swiper-slide`) &&
                (i = s)
        })
    let l = !1,
        o
    if (i) {
        for (let s = 0; s < n.slides.length; s += 1)
            if (n.slides[s] === i) {
                ;(l = !0), (o = s)
                break
            }
    }
    if (i && l)
        (n.clickedSlide = i),
            n.virtual && n.params.virtual.enabled
                ? (n.clickedIndex = parseInt(
                      i.getAttribute('data-swiper-slide-index'),
                      10
                  ))
                : (n.clickedIndex = o)
    else {
        ;(n.clickedSlide = void 0), (n.clickedIndex = void 0)
        return
    }
    r.slideToClickedSlide &&
        n.clickedIndex !== void 0 &&
        n.clickedIndex !== n.activeIndex &&
        n.slideToClickedSlide()
}
var Iw = {
    updateSize: Ew,
    updateSlides: Cw,
    updateAutoHeight: Tw,
    updateSlidesOffset: Pw,
    updateSlidesProgress: _w,
    updateProgress: Mw,
    updateSlidesClasses: kw,
    updateActiveIndex: Nw,
    updateClickedSlide: Ow,
}
function bw(e) {
    e === void 0 && (e = this.isHorizontal() ? 'x' : 'y')
    const t = this,
        { params: n, rtlTranslate: r, translate: i, wrapperEl: l } = t
    if (n.virtualTranslate) return r ? -i : i
    if (n.cssMode) return i
    let o = sw(l, e)
    return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0
}
function Rw(e, t) {
    const n = this,
        { rtlTranslate: r, params: i, wrapperEl: l, progress: o } = n
    let s = 0,
        a = 0
    const u = 0
    n.isHorizontal() ? (s = r ? -e : e) : (a = e),
        i.roundLengths && ((s = Math.floor(s)), (a = Math.floor(a))),
        (n.previousTranslate = n.translate),
        (n.translate = n.isHorizontal() ? s : a),
        i.cssMode
            ? (l[n.isHorizontal() ? 'scrollLeft' : 'scrollTop'] =
                  n.isHorizontal() ? -s : -a)
            : i.virtualTranslate ||
              (n.isHorizontal()
                  ? (s -= n.cssOverflowAdjustment())
                  : (a -= n.cssOverflowAdjustment()),
              (l.style.transform = `translate3d(${s}px, ${a}px, ${u}px)`))
    let c
    const d = n.maxTranslate() - n.minTranslate()
    d === 0 ? (c = 0) : (c = (e - n.minTranslate()) / d),
        c !== o && n.updateProgress(e),
        n.emit('setTranslate', n.translate, t)
}
function Dw() {
    return -this.snapGrid[0]
}
function zw() {
    return -this.snapGrid[this.snapGrid.length - 1]
}
function jw(e, t, n, r, i) {
    e === void 0 && (e = 0),
        t === void 0 && (t = this.params.speed),
        n === void 0 && (n = !0),
        r === void 0 && (r = !0)
    const l = this,
        { params: o, wrapperEl: s } = l
    if (l.animating && o.preventInteractionOnTransition) return !1
    const a = l.minTranslate(),
        u = l.maxTranslate()
    let c
    if (
        (r && e > a ? (c = a) : r && e < u ? (c = u) : (c = e),
        l.updateProgress(c),
        o.cssMode)
    ) {
        const d = l.isHorizontal()
        if (t === 0) s[d ? 'scrollLeft' : 'scrollTop'] = -c
        else {
            if (!l.support.smoothScroll)
                return (
                    Vm({
                        swiper: l,
                        targetPosition: -c,
                        side: d ? 'left' : 'top',
                    }),
                    !0
                )
            s.scrollTo({ [d ? 'left' : 'top']: -c, behavior: 'smooth' })
        }
        return !0
    }
    return (
        t === 0
            ? (l.setTransition(0),
              l.setTranslate(c),
              n &&
                  (l.emit('beforeTransitionStart', t, i),
                  l.emit('transitionEnd')))
            : (l.setTransition(t),
              l.setTranslate(c),
              n &&
                  (l.emit('beforeTransitionStart', t, i),
                  l.emit('transitionStart')),
              l.animating ||
                  ((l.animating = !0),
                  l.onTranslateToWrapperTransitionEnd ||
                      (l.onTranslateToWrapperTransitionEnd = function (m) {
                          !l ||
                              l.destroyed ||
                              (m.target === this &&
                                  (l.wrapperEl.removeEventListener(
                                      'transitionend',
                                      l.onTranslateToWrapperTransitionEnd
                                  ),
                                  (l.onTranslateToWrapperTransitionEnd = null),
                                  delete l.onTranslateToWrapperTransitionEnd,
                                  (l.animating = !1),
                                  n && l.emit('transitionEnd')))
                      }),
                  l.wrapperEl.addEventListener(
                      'transitionend',
                      l.onTranslateToWrapperTransitionEnd
                  ))),
        !0
    )
}
var Aw = {
    getTranslate: bw,
    setTranslate: Rw,
    minTranslate: Dw,
    maxTranslate: zw,
    translateTo: jw,
}
function Fw(e, t) {
    const n = this
    n.params.cssMode ||
        ((n.wrapperEl.style.transitionDuration = `${e}ms`),
        (n.wrapperEl.style.transitionDelay = e === 0 ? '0ms' : '')),
        n.emit('setTransition', e, t)
}
function Jm(e) {
    let { swiper: t, runCallbacks: n, direction: r, step: i } = e
    const { activeIndex: l, previousIndex: o } = t
    let s = r
    if (
        (s || (l > o ? (s = 'next') : l < o ? (s = 'prev') : (s = 'reset')),
        t.emit(`transition${i}`),
        n && l !== o)
    ) {
        if (s === 'reset') {
            t.emit(`slideResetTransition${i}`)
            return
        }
        t.emit(`slideChangeTransition${i}`),
            s === 'next'
                ? t.emit(`slideNextTransition${i}`)
                : t.emit(`slidePrevTransition${i}`)
    }
}
function Bw(e, t) {
    e === void 0 && (e = !0)
    const n = this,
        { params: r } = n
    r.cssMode ||
        (r.autoHeight && n.updateAutoHeight(),
        Jm({ swiper: n, runCallbacks: e, direction: t, step: 'Start' }))
}
function $w(e, t) {
    e === void 0 && (e = !0)
    const n = this,
        { params: r } = n
    ;(n.animating = !1),
        !r.cssMode &&
            (n.setTransition(0),
            Jm({ swiper: n, runCallbacks: e, direction: t, step: 'End' }))
}
var Gw = { setTransition: Fw, transitionStart: Bw, transitionEnd: $w }
function Uw(e, t, n, r, i) {
    e === void 0 && (e = 0),
        n === void 0 && (n = !0),
        typeof e == 'string' && (e = parseInt(e, 10))
    const l = this
    let o = e
    o < 0 && (o = 0)
    const {
        params: s,
        snapGrid: a,
        slidesGrid: u,
        previousIndex: c,
        activeIndex: d,
        rtlTranslate: m,
        wrapperEl: v,
        enabled: g,
    } = l
    if (
        (!g && !r && !i) ||
        l.destroyed ||
        (l.animating && s.preventInteractionOnTransition)
    )
        return !1
    typeof t > 'u' && (t = l.params.speed)
    const y = Math.min(l.params.slidesPerGroupSkip, o)
    let C = y + Math.floor((o - y) / l.params.slidesPerGroup)
    C >= a.length && (C = a.length - 1)
    const f = -a[C]
    if (s.normalizeSlideIndex)
        for (let h = 0; h < u.length; h += 1) {
            const w = -Math.floor(f * 100),
                T = Math.floor(u[h] * 100),
                S = Math.floor(u[h + 1] * 100)
            typeof u[h + 1] < 'u'
                ? w >= T && w < S - (S - T) / 2
                    ? (o = h)
                    : w >= T && w < S && (o = h + 1)
                : w >= T && (o = h)
        }
    if (
        l.initialized &&
        o !== d &&
        ((!l.allowSlideNext &&
            (m
                ? f > l.translate && f > l.minTranslate()
                : f < l.translate && f < l.minTranslate())) ||
            (!l.allowSlidePrev &&
                f > l.translate &&
                f > l.maxTranslate() &&
                (d || 0) !== o))
    )
        return !1
    o !== (c || 0) && n && l.emit('beforeSlideChangeStart'), l.updateProgress(f)
    let p
    if (
        (o > d ? (p = 'next') : o < d ? (p = 'prev') : (p = 'reset'),
        (m && -f === l.translate) || (!m && f === l.translate))
    )
        return (
            l.updateActiveIndex(o),
            s.autoHeight && l.updateAutoHeight(),
            l.updateSlidesClasses(),
            s.effect !== 'slide' && l.setTranslate(f),
            p !== 'reset' && (l.transitionStart(n, p), l.transitionEnd(n, p)),
            !1
        )
    if (s.cssMode) {
        const h = l.isHorizontal(),
            w = m ? f : -f
        if (t === 0) {
            const T = l.virtual && l.params.virtual.enabled
            T &&
                ((l.wrapperEl.style.scrollSnapType = 'none'),
                (l._immediateVirtual = !0)),
                T && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0
                    ? ((l._cssModeVirtualInitialSet = !0),
                      requestAnimationFrame(() => {
                          v[h ? 'scrollLeft' : 'scrollTop'] = w
                      }))
                    : (v[h ? 'scrollLeft' : 'scrollTop'] = w),
                T &&
                    requestAnimationFrame(() => {
                        ;(l.wrapperEl.style.scrollSnapType = ''),
                            (l._immediateVirtual = !1)
                    })
        } else {
            if (!l.support.smoothScroll)
                return (
                    Vm({
                        swiper: l,
                        targetPosition: w,
                        side: h ? 'left' : 'top',
                    }),
                    !0
                )
            v.scrollTo({ [h ? 'left' : 'top']: w, behavior: 'smooth' })
        }
        return !0
    }
    return (
        l.setTransition(t),
        l.setTranslate(f),
        l.updateActiveIndex(o),
        l.updateSlidesClasses(),
        l.emit('beforeTransitionStart', t, r),
        l.transitionStart(n, p),
        t === 0
            ? l.transitionEnd(n, p)
            : l.animating ||
              ((l.animating = !0),
              l.onSlideToWrapperTransitionEnd ||
                  (l.onSlideToWrapperTransitionEnd = function (w) {
                      !l ||
                          l.destroyed ||
                          (w.target === this &&
                              (l.wrapperEl.removeEventListener(
                                  'transitionend',
                                  l.onSlideToWrapperTransitionEnd
                              ),
                              (l.onSlideToWrapperTransitionEnd = null),
                              delete l.onSlideToWrapperTransitionEnd,
                              l.transitionEnd(n, p)))
                  }),
              l.wrapperEl.addEventListener(
                  'transitionend',
                  l.onSlideToWrapperTransitionEnd
              )),
        !0
    )
}
function Hw(e, t, n, r) {
    e === void 0 && (e = 0),
        n === void 0 && (n = !0),
        typeof e == 'string' && (e = parseInt(e, 10))
    const i = this
    if (i.destroyed) return
    typeof t > 'u' && (t = i.params.speed)
    const l = i.grid && i.params.grid && i.params.grid.rows > 1
    let o = e
    if (i.params.loop)
        if (i.virtual && i.params.virtual.enabled)
            o = o + i.virtual.slidesBefore
        else {
            let s
            if (l) {
                const m = o * i.params.grid.rows
                s = i.slides.filter(
                    (v) => v.getAttribute('data-swiper-slide-index') * 1 === m
                )[0].column
            } else s = i.getSlideIndexByData(o)
            const a = l
                    ? Math.ceil(i.slides.length / i.params.grid.rows)
                    : i.slides.length,
                { centeredSlides: u } = i.params
            let c = i.params.slidesPerView
            c === 'auto'
                ? (c = i.slidesPerViewDynamic())
                : ((c = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
                  u && c % 2 === 0 && (c = c + 1))
            let d = a - s < c
            if (
                (u && (d = d || s < Math.ceil(c / 2)),
                r && u && i.params.slidesPerView !== 'auto' && !l && (d = !1),
                d)
            ) {
                const m = u
                    ? s < i.activeIndex
                        ? 'prev'
                        : 'next'
                    : s - i.activeIndex - 1 < i.params.slidesPerView
                    ? 'next'
                    : 'prev'
                i.loopFix({
                    direction: m,
                    slideTo: !0,
                    activeSlideIndex: m === 'next' ? s + 1 : s - a + 1,
                    slideRealIndex: m === 'next' ? i.realIndex : void 0,
                })
            }
            if (l) {
                const m = o * i.params.grid.rows
                o = i.slides.filter(
                    (v) => v.getAttribute('data-swiper-slide-index') * 1 === m
                )[0].column
            } else o = i.getSlideIndexByData(o)
        }
    return (
        requestAnimationFrame(() => {
            i.slideTo(o, t, n, r)
        }),
        i
    )
}
function Vw(e, t, n) {
    t === void 0 && (t = !0)
    const r = this,
        { enabled: i, params: l, animating: o } = r
    if (!i || r.destroyed) return r
    typeof e > 'u' && (e = r.params.speed)
    let s = l.slidesPerGroup
    l.slidesPerView === 'auto' &&
        l.slidesPerGroup === 1 &&
        l.slidesPerGroupAuto &&
        (s = Math.max(r.slidesPerViewDynamic('current', !0), 1))
    const a = r.activeIndex < l.slidesPerGroupSkip ? 1 : s,
        u = r.virtual && l.virtual.enabled
    if (l.loop) {
        if (o && !u && l.loopPreventsSliding) return !1
        if (
            (r.loopFix({ direction: 'next' }),
            (r._clientLeft = r.wrapperEl.clientLeft),
            r.activeIndex === r.slides.length - 1 && l.cssMode)
        )
            return (
                requestAnimationFrame(() => {
                    r.slideTo(r.activeIndex + a, e, t, n)
                }),
                !0
            )
    }
    return l.rewind && r.isEnd
        ? r.slideTo(0, e, t, n)
        : r.slideTo(r.activeIndex + a, e, t, n)
}
function Ww(e, t, n) {
    t === void 0 && (t = !0)
    const r = this,
        {
            params: i,
            snapGrid: l,
            slidesGrid: o,
            rtlTranslate: s,
            enabled: a,
            animating: u,
        } = r
    if (!a || r.destroyed) return r
    typeof e > 'u' && (e = r.params.speed)
    const c = r.virtual && i.virtual.enabled
    if (i.loop) {
        if (u && !c && i.loopPreventsSliding) return !1
        r.loopFix({ direction: 'prev' }),
            (r._clientLeft = r.wrapperEl.clientLeft)
    }
    const d = s ? r.translate : -r.translate
    function m(f) {
        return f < 0 ? -Math.floor(Math.abs(f)) : Math.floor(f)
    }
    const v = m(d),
        g = l.map((f) => m(f))
    let y = l[g.indexOf(v) - 1]
    if (typeof y > 'u' && i.cssMode) {
        let f
        l.forEach((p, h) => {
            v >= p && (f = h)
        }),
            typeof f < 'u' && (y = l[f > 0 ? f - 1 : f])
    }
    let C = 0
    if (
        (typeof y < 'u' &&
            ((C = o.indexOf(y)),
            C < 0 && (C = r.activeIndex - 1),
            i.slidesPerView === 'auto' &&
                i.slidesPerGroup === 1 &&
                i.slidesPerGroupAuto &&
                ((C = C - r.slidesPerViewDynamic('previous', !0) + 1),
                (C = Math.max(C, 0)))),
        i.rewind && r.isBeginning)
    ) {
        const f =
            r.params.virtual && r.params.virtual.enabled && r.virtual
                ? r.virtual.slides.length - 1
                : r.slides.length - 1
        return r.slideTo(f, e, t, n)
    } else if (i.loop && r.activeIndex === 0 && i.cssMode)
        return (
            requestAnimationFrame(() => {
                r.slideTo(C, e, t, n)
            }),
            !0
        )
    return r.slideTo(C, e, t, n)
}
function Qw(e, t, n) {
    t === void 0 && (t = !0)
    const r = this
    if (!r.destroyed)
        return (
            typeof e > 'u' && (e = r.params.speed),
            r.slideTo(r.activeIndex, e, t, n)
        )
}
function Kw(e, t, n, r) {
    t === void 0 && (t = !0), r === void 0 && (r = 0.5)
    const i = this
    if (i.destroyed) return
    typeof e > 'u' && (e = i.params.speed)
    let l = i.activeIndex
    const o = Math.min(i.params.slidesPerGroupSkip, l),
        s = o + Math.floor((l - o) / i.params.slidesPerGroup),
        a = i.rtlTranslate ? i.translate : -i.translate
    if (a >= i.snapGrid[s]) {
        const u = i.snapGrid[s],
            c = i.snapGrid[s + 1]
        a - u > (c - u) * r && (l += i.params.slidesPerGroup)
    } else {
        const u = i.snapGrid[s - 1],
            c = i.snapGrid[s]
        a - u <= (c - u) * r && (l -= i.params.slidesPerGroup)
    }
    return (
        (l = Math.max(l, 0)),
        (l = Math.min(l, i.slidesGrid.length - 1)),
        i.slideTo(l, e, t, n)
    )
}
function Yw() {
    const e = this
    if (e.destroyed) return
    const { params: t, slidesEl: n } = e,
        r =
            t.slidesPerView === 'auto'
                ? e.slidesPerViewDynamic()
                : t.slidesPerView
    let i = e.clickedIndex,
        l
    const o = e.isElement ? 'swiper-slide' : `.${t.slideClass}`
    if (t.loop) {
        if (e.animating) return
        ;(l = parseInt(
            e.clickedSlide.getAttribute('data-swiper-slide-index'),
            10
        )),
            t.centeredSlides
                ? i < e.loopedSlides - r / 2 ||
                  i > e.slides.length - e.loopedSlides + r / 2
                    ? (e.loopFix(),
                      (i = e.getSlideIndex(
                          Dt(n, `${o}[data-swiper-slide-index="${l}"]`)[0]
                      )),
                      po(() => {
                          e.slideTo(i)
                      }))
                    : e.slideTo(i)
                : i > e.slides.length - r
                ? (e.loopFix(),
                  (i = e.getSlideIndex(
                      Dt(n, `${o}[data-swiper-slide-index="${l}"]`)[0]
                  )),
                  po(() => {
                      e.slideTo(i)
                  }))
                : e.slideTo(i)
    } else e.slideTo(i)
}
var Xw = {
    slideTo: Uw,
    slideToLoop: Hw,
    slideNext: Vw,
    slidePrev: Ww,
    slideReset: Qw,
    slideToClosest: Kw,
    slideToClickedSlide: Yw,
}
function qw(e) {
    const t = this,
        { params: n, slidesEl: r } = t
    if (!n.loop || (t.virtual && t.params.virtual.enabled)) return
    const i = () => {
            Dt(r, `.${n.slideClass}, swiper-slide`).forEach((d, m) => {
                d.setAttribute('data-swiper-slide-index', m)
            })
        },
        l = t.grid && n.grid && n.grid.rows > 1,
        o = n.slidesPerGroup * (l ? n.grid.rows : 1),
        s = t.slides.length % o !== 0,
        a = l && t.slides.length % n.grid.rows !== 0,
        u = (c) => {
            for (let d = 0; d < c; d += 1) {
                const m = t.isElement
                    ? Fr('swiper-slide', [n.slideBlankClass])
                    : Fr('div', [n.slideClass, n.slideBlankClass])
                t.slidesEl.append(m)
            }
        }
    if (s) {
        if (n.loopAddBlankSlides) {
            const c = o - (t.slides.length % o)
            u(c), t.recalcSlides(), t.updateSlides()
        } else
            ho(
                'Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
            )
        i()
    } else if (a) {
        if (n.loopAddBlankSlides) {
            const c = n.grid.rows - (t.slides.length % n.grid.rows)
            u(c), t.recalcSlides(), t.updateSlides()
        } else
            ho(
                'Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)'
            )
        i()
    } else i()
    t.loopFix({
        slideRealIndex: e,
        direction: n.centeredSlides ? void 0 : 'next',
    })
}
function Jw(e) {
    let {
        slideRealIndex: t,
        slideTo: n = !0,
        direction: r,
        setTranslate: i,
        activeSlideIndex: l,
        byController: o,
        byMousewheel: s,
    } = e === void 0 ? {} : e
    const a = this
    if (!a.params.loop) return
    a.emit('beforeLoopFix')
    const {
            slides: u,
            allowSlidePrev: c,
            allowSlideNext: d,
            slidesEl: m,
            params: v,
        } = a,
        { centeredSlides: g } = v
    if (
        ((a.allowSlidePrev = !0),
        (a.allowSlideNext = !0),
        a.virtual && v.virtual.enabled)
    ) {
        n &&
            (!v.centeredSlides && a.snapIndex === 0
                ? a.slideTo(a.virtual.slides.length, 0, !1, !0)
                : v.centeredSlides && a.snapIndex < v.slidesPerView
                ? a.slideTo(a.virtual.slides.length + a.snapIndex, 0, !1, !0)
                : a.snapIndex === a.snapGrid.length - 1 &&
                  a.slideTo(a.virtual.slidesBefore, 0, !1, !0)),
            (a.allowSlidePrev = c),
            (a.allowSlideNext = d),
            a.emit('loopFix')
        return
    }
    let y = v.slidesPerView
    y === 'auto'
        ? (y = a.slidesPerViewDynamic())
        : ((y = Math.ceil(parseFloat(v.slidesPerView, 10))),
          g && y % 2 === 0 && (y = y + 1))
    const C = v.slidesPerGroupAuto ? y : v.slidesPerGroup
    let f = C
    f % C !== 0 && (f += C - (f % C)),
        (f += v.loopAdditionalSlides),
        (a.loopedSlides = f)
    const p = a.grid && v.grid && v.grid.rows > 1
    u.length < y + f
        ? ho(
              'Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters'
          )
        : p &&
          v.grid.fill === 'row' &&
          ho(
              'Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`'
          )
    const h = [],
        w = []
    let T = a.activeIndex
    typeof l > 'u'
        ? (l = a.getSlideIndex(
              u.filter((D) => D.classList.contains(v.slideActiveClass))[0]
          ))
        : (T = l)
    const S = r === 'next' || !r,
        R = r === 'prev' || !r
    let M = 0,
        O = 0
    const k = p ? Math.ceil(u.length / v.grid.rows) : u.length,
        b = (p ? u[l].column : l) + (g && typeof i > 'u' ? -y / 2 + 0.5 : 0)
    if (b < f) {
        M = Math.max(f - b, C)
        for (let D = 0; D < f - b; D += 1) {
            const F = D - Math.floor(D / k) * k
            if (p) {
                const U = k - F - 1
                for (let Y = u.length - 1; Y >= 0; Y -= 1)
                    u[Y].column === U && h.push(Y)
            } else h.push(k - F - 1)
        }
    } else if (b + y > k - f) {
        O = Math.max(b - (k - f * 2), C)
        for (let D = 0; D < O; D += 1) {
            const F = D - Math.floor(D / k) * k
            p
                ? u.forEach((U, Y) => {
                      U.column === F && w.push(Y)
                  })
                : w.push(F)
        }
    }
    if (
        ((a.__preventObserver__ = !0),
        requestAnimationFrame(() => {
            a.__preventObserver__ = !1
        }),
        R &&
            h.forEach((D) => {
                ;(u[D].swiperLoopMoveDOM = !0),
                    m.prepend(u[D]),
                    (u[D].swiperLoopMoveDOM = !1)
            }),
        S &&
            w.forEach((D) => {
                ;(u[D].swiperLoopMoveDOM = !0),
                    m.append(u[D]),
                    (u[D].swiperLoopMoveDOM = !1)
            }),
        a.recalcSlides(),
        v.slidesPerView === 'auto'
            ? a.updateSlides()
            : p &&
              ((h.length > 0 && R) || (w.length > 0 && S)) &&
              a.slides.forEach((D, F) => {
                  a.grid.updateSlide(F, D, a.slides)
              }),
        v.watchSlidesProgress && a.updateSlidesOffset(),
        n)
    ) {
        if (h.length > 0 && R) {
            if (typeof t > 'u') {
                const D = a.slidesGrid[T],
                    U = a.slidesGrid[T + M] - D
                s
                    ? a.setTranslate(a.translate - U)
                    : (a.slideTo(T + Math.ceil(M), 0, !1, !0),
                      i &&
                          ((a.touchEventsData.startTranslate =
                              a.touchEventsData.startTranslate - U),
                          (a.touchEventsData.currentTranslate =
                              a.touchEventsData.currentTranslate - U)))
            } else if (i) {
                const D = p ? h.length / v.grid.rows : h.length
                a.slideTo(a.activeIndex + D, 0, !1, !0),
                    (a.touchEventsData.currentTranslate = a.translate)
            }
        } else if (w.length > 0 && S)
            if (typeof t > 'u') {
                const D = a.slidesGrid[T],
                    U = a.slidesGrid[T - O] - D
                s
                    ? a.setTranslate(a.translate - U)
                    : (a.slideTo(T - O, 0, !1, !0),
                      i &&
                          ((a.touchEventsData.startTranslate =
                              a.touchEventsData.startTranslate - U),
                          (a.touchEventsData.currentTranslate =
                              a.touchEventsData.currentTranslate - U)))
            } else {
                const D = p ? w.length / v.grid.rows : w.length
                a.slideTo(a.activeIndex - D, 0, !1, !0)
            }
    }
    if (
        ((a.allowSlidePrev = c),
        (a.allowSlideNext = d),
        a.controller && a.controller.control && !o)
    ) {
        const D = {
            slideRealIndex: t,
            direction: r,
            setTranslate: i,
            activeSlideIndex: l,
            byController: !0,
        }
        Array.isArray(a.controller.control)
            ? a.controller.control.forEach((F) => {
                  !F.destroyed &&
                      F.params.loop &&
                      F.loopFix({
                          ...D,
                          slideTo:
                              F.params.slidesPerView === v.slidesPerView
                                  ? n
                                  : !1,
                      })
              })
            : a.controller.control instanceof a.constructor &&
              a.controller.control.params.loop &&
              a.controller.control.loopFix({
                  ...D,
                  slideTo:
                      a.controller.control.params.slidesPerView ===
                      v.slidesPerView
                          ? n
                          : !1,
              })
    }
    a.emit('loopFix')
}
function Zw() {
    const e = this,
        { params: t, slidesEl: n } = e
    if (!t.loop || (e.virtual && e.params.virtual.enabled)) return
    e.recalcSlides()
    const r = []
    e.slides.forEach((i) => {
        const l =
            typeof i.swiperSlideIndex > 'u'
                ? i.getAttribute('data-swiper-slide-index') * 1
                : i.swiperSlideIndex
        r[l] = i
    }),
        e.slides.forEach((i) => {
            i.removeAttribute('data-swiper-slide-index')
        }),
        r.forEach((i) => {
            n.append(i)
        }),
        e.recalcSlides(),
        e.slideTo(e.realIndex, 0)
}
var e1 = { loopCreate: qw, loopFix: Jw, loopDestroy: Zw }
function t1(e) {
    const t = this
    if (
        !t.params.simulateTouch ||
        (t.params.watchOverflow && t.isLocked) ||
        t.params.cssMode
    )
        return
    const n = t.params.touchEventsTarget === 'container' ? t.el : t.wrapperEl
    t.isElement && (t.__preventObserver__ = !0),
        (n.style.cursor = 'move'),
        (n.style.cursor = e ? 'grabbing' : 'grab'),
        t.isElement &&
            requestAnimationFrame(() => {
                t.__preventObserver__ = !1
            })
}
function n1() {
    const e = this
    ;(e.params.watchOverflow && e.isLocked) ||
        e.params.cssMode ||
        (e.isElement && (e.__preventObserver__ = !0),
        (e[
            e.params.touchEventsTarget === 'container' ? 'el' : 'wrapperEl'
        ].style.cursor = ''),
        e.isElement &&
            requestAnimationFrame(() => {
                e.__preventObserver__ = !1
            }))
}
var r1 = { setGrabCursor: t1, unsetGrabCursor: n1 }
function i1(e, t) {
    t === void 0 && (t = this)
    function n(r) {
        if (!r || r === ut() || r === tt()) return null
        r.assignedSlot && (r = r.assignedSlot)
        const i = r.closest(e)
        return !i && !r.getRootNode ? null : i || n(r.getRootNode().host)
    }
    return n(t)
}
function Vd(e, t, n) {
    const r = tt(),
        { params: i } = e,
        l = i.edgeSwipeDetection,
        o = i.edgeSwipeThreshold
    return l && (n <= o || n >= r.innerWidth - o)
        ? l === 'prevent'
            ? (t.preventDefault(), !0)
            : !1
        : !0
}
function l1(e) {
    const t = this,
        n = ut()
    let r = e
    r.originalEvent && (r = r.originalEvent)
    const i = t.touchEventsData
    if (r.type === 'pointerdown') {
        if (i.pointerId !== null && i.pointerId !== r.pointerId) return
        i.pointerId = r.pointerId
    } else
        r.type === 'touchstart' &&
            r.targetTouches.length === 1 &&
            (i.touchId = r.targetTouches[0].identifier)
    if (r.type === 'touchstart') {
        Vd(t, r, r.targetTouches[0].pageX)
        return
    }
    const { params: l, touches: o, enabled: s } = t
    if (
        !s ||
        (!l.simulateTouch && r.pointerType === 'mouse') ||
        (t.animating && l.preventInteractionOnTransition)
    )
        return
    !t.animating && l.cssMode && l.loop && t.loopFix()
    let a = r.target
    if (
        (l.touchEventsTarget === 'wrapper' && !uw(a, t.wrapperEl)) ||
        ('which' in r && r.which === 3) ||
        ('button' in r && r.button > 0) ||
        (i.isTouched && i.isMoved)
    )
        return
    const u = !!l.noSwipingClass && l.noSwipingClass !== '',
        c = r.composedPath ? r.composedPath() : r.path
    u && r.target && r.target.shadowRoot && c && (a = c[0])
    const d = l.noSwipingSelector
            ? l.noSwipingSelector
            : `.${l.noSwipingClass}`,
        m = !!(r.target && r.target.shadowRoot)
    if (l.noSwiping && (m ? i1(d, a) : a.closest(d))) {
        t.allowClick = !0
        return
    }
    if (l.swipeHandler && !a.closest(l.swipeHandler)) return
    ;(o.currentX = r.pageX), (o.currentY = r.pageY)
    const v = o.currentX,
        g = o.currentY
    if (!Vd(t, r, v)) return
    Object.assign(i, {
        isTouched: !0,
        isMoved: !1,
        allowTouchCallbacks: !0,
        isScrolling: void 0,
        startMoving: void 0,
    }),
        (o.startX = v),
        (o.startY = g),
        (i.touchStartTime = mo()),
        (t.allowClick = !0),
        t.updateSize(),
        (t.swipeDirection = void 0),
        l.threshold > 0 && (i.allowThresholdMove = !1)
    let y = !0
    a.matches(i.focusableElements) &&
        ((y = !1), a.nodeName === 'SELECT' && (i.isTouched = !1)),
        n.activeElement &&
            n.activeElement.matches(i.focusableElements) &&
            n.activeElement !== a &&
            n.activeElement.blur()
    const C = y && t.allowTouchMove && l.touchStartPreventDefault
    ;(l.touchStartForcePreventDefault || C) &&
        !a.isContentEditable &&
        r.preventDefault(),
        l.freeMode &&
            l.freeMode.enabled &&
            t.freeMode &&
            t.animating &&
            !l.cssMode &&
            t.freeMode.onTouchStart(),
        t.emit('touchStart', r)
}
function o1(e) {
    const t = ut(),
        n = this,
        r = n.touchEventsData,
        { params: i, touches: l, rtlTranslate: o, enabled: s } = n
    if (!s || (!i.simulateTouch && e.pointerType === 'mouse')) return
    let a = e
    if (
        (a.originalEvent && (a = a.originalEvent),
        a.type === 'pointermove' &&
            (r.touchId !== null || a.pointerId !== r.pointerId))
    )
        return
    let u
    if (a.type === 'touchmove') {
        if (
            ((u = [...a.changedTouches].filter(
                (S) => S.identifier === r.touchId
            )[0]),
            !u || u.identifier !== r.touchId)
        )
            return
    } else u = a
    if (!r.isTouched) {
        r.startMoving && r.isScrolling && n.emit('touchMoveOpposite', a)
        return
    }
    const c = u.pageX,
        d = u.pageY
    if (a.preventedByNestedSwiper) {
        ;(l.startX = c), (l.startY = d)
        return
    }
    if (!n.allowTouchMove) {
        a.target.matches(r.focusableElements) || (n.allowClick = !1),
            r.isTouched &&
                (Object.assign(l, {
                    startX: c,
                    startY: d,
                    currentX: c,
                    currentY: d,
                }),
                (r.touchStartTime = mo()))
        return
    }
    if (i.touchReleaseOnEdges && !i.loop) {
        if (n.isVertical()) {
            if (
                (d < l.startY && n.translate <= n.maxTranslate()) ||
                (d > l.startY && n.translate >= n.minTranslate())
            ) {
                ;(r.isTouched = !1), (r.isMoved = !1)
                return
            }
        } else if (
            (c < l.startX && n.translate <= n.maxTranslate()) ||
            (c > l.startX && n.translate >= n.minTranslate())
        )
            return
    }
    if (
        t.activeElement &&
        a.target === t.activeElement &&
        a.target.matches(r.focusableElements)
    ) {
        ;(r.isMoved = !0), (n.allowClick = !1)
        return
    }
    r.allowTouchCallbacks && n.emit('touchMove', a),
        (l.previousX = l.currentX),
        (l.previousY = l.currentY),
        (l.currentX = c),
        (l.currentY = d)
    const m = l.currentX - l.startX,
        v = l.currentY - l.startY
    if (n.params.threshold && Math.sqrt(m ** 2 + v ** 2) < n.params.threshold)
        return
    if (typeof r.isScrolling > 'u') {
        let S
        ;(n.isHorizontal() && l.currentY === l.startY) ||
        (n.isVertical() && l.currentX === l.startX)
            ? (r.isScrolling = !1)
            : m * m + v * v >= 25 &&
              ((S = (Math.atan2(Math.abs(v), Math.abs(m)) * 180) / Math.PI),
              (r.isScrolling = n.isHorizontal()
                  ? S > i.touchAngle
                  : 90 - S > i.touchAngle))
    }
    if (
        (r.isScrolling && n.emit('touchMoveOpposite', a),
        typeof r.startMoving > 'u' &&
            (l.currentX !== l.startX || l.currentY !== l.startY) &&
            (r.startMoving = !0),
        r.isScrolling ||
            (a.type === 'touchmove' && r.preventTouchMoveFromPointerMove))
    ) {
        r.isTouched = !1
        return
    }
    if (!r.startMoving) return
    ;(n.allowClick = !1),
        !i.cssMode && a.cancelable && a.preventDefault(),
        i.touchMoveStopPropagation && !i.nested && a.stopPropagation()
    let g = n.isHorizontal() ? m : v,
        y = n.isHorizontal()
            ? l.currentX - l.previousX
            : l.currentY - l.previousY
    i.oneWayMovement &&
        ((g = Math.abs(g) * (o ? 1 : -1)), (y = Math.abs(y) * (o ? 1 : -1))),
        (l.diff = g),
        (g *= i.touchRatio),
        o && ((g = -g), (y = -y))
    const C = n.touchesDirection
    ;(n.swipeDirection = g > 0 ? 'prev' : 'next'),
        (n.touchesDirection = y > 0 ? 'prev' : 'next')
    const f = n.params.loop && !i.cssMode,
        p =
            (n.touchesDirection === 'next' && n.allowSlideNext) ||
            (n.touchesDirection === 'prev' && n.allowSlidePrev)
    if (!r.isMoved) {
        if (
            (f && p && n.loopFix({ direction: n.swipeDirection }),
            (r.startTranslate = n.getTranslate()),
            n.setTransition(0),
            n.animating)
        ) {
            const S = new window.CustomEvent('transitionend', {
                bubbles: !0,
                cancelable: !0,
                detail: { bySwiperTouchMove: !0 },
            })
            n.wrapperEl.dispatchEvent(S)
        }
        ;(r.allowMomentumBounce = !1),
            i.grabCursor &&
                (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
                n.setGrabCursor(!0),
            n.emit('sliderFirstMove', a)
    }
    let h
    if (
        (new Date().getTime(),
        r.isMoved &&
            r.allowThresholdMove &&
            C !== n.touchesDirection &&
            f &&
            p &&
            Math.abs(g) >= 1)
    ) {
        Object.assign(l, {
            startX: c,
            startY: d,
            currentX: c,
            currentY: d,
            startTranslate: r.currentTranslate,
        }),
            (r.loopSwapReset = !0),
            (r.startTranslate = r.currentTranslate)
        return
    }
    n.emit('sliderMove', a),
        (r.isMoved = !0),
        (r.currentTranslate = g + r.startTranslate)
    let w = !0,
        T = i.resistanceRatio
    if (
        (i.touchReleaseOnEdges && (T = 0),
        g > 0
            ? (f &&
                  p &&
                  !h &&
                  r.allowThresholdMove &&
                  r.currentTranslate >
                      (i.centeredSlides
                          ? n.minTranslate() -
                            n.slidesSizesGrid[n.activeIndex + 1]
                          : n.minTranslate()) &&
                  n.loopFix({
                      direction: 'prev',
                      setTranslate: !0,
                      activeSlideIndex: 0,
                  }),
              r.currentTranslate > n.minTranslate() &&
                  ((w = !1),
                  i.resistance &&
                      (r.currentTranslate =
                          n.minTranslate() -
                          1 +
                          (-n.minTranslate() + r.startTranslate + g) ** T)))
            : g < 0 &&
              (f &&
                  p &&
                  !h &&
                  r.allowThresholdMove &&
                  r.currentTranslate <
                      (i.centeredSlides
                          ? n.maxTranslate() +
                            n.slidesSizesGrid[n.slidesSizesGrid.length - 1]
                          : n.maxTranslate()) &&
                  n.loopFix({
                      direction: 'next',
                      setTranslate: !0,
                      activeSlideIndex:
                          n.slides.length -
                          (i.slidesPerView === 'auto'
                              ? n.slidesPerViewDynamic()
                              : Math.ceil(parseFloat(i.slidesPerView, 10))),
                  }),
              r.currentTranslate < n.maxTranslate() &&
                  ((w = !1),
                  i.resistance &&
                      (r.currentTranslate =
                          n.maxTranslate() +
                          1 -
                          (n.maxTranslate() - r.startTranslate - g) ** T))),
        w && (a.preventedByNestedSwiper = !0),
        !n.allowSlideNext &&
            n.swipeDirection === 'next' &&
            r.currentTranslate < r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
            n.swipeDirection === 'prev' &&
            r.currentTranslate > r.startTranslate &&
            (r.currentTranslate = r.startTranslate),
        !n.allowSlidePrev &&
            !n.allowSlideNext &&
            (r.currentTranslate = r.startTranslate),
        i.threshold > 0)
    )
        if (Math.abs(g) > i.threshold || r.allowThresholdMove) {
            if (!r.allowThresholdMove) {
                ;(r.allowThresholdMove = !0),
                    (l.startX = l.currentX),
                    (l.startY = l.currentY),
                    (r.currentTranslate = r.startTranslate),
                    (l.diff = n.isHorizontal()
                        ? l.currentX - l.startX
                        : l.currentY - l.startY)
                return
            }
        } else {
            r.currentTranslate = r.startTranslate
            return
        }
    !i.followFinger ||
        i.cssMode ||
        (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
            i.watchSlidesProgress) &&
            (n.updateActiveIndex(), n.updateSlidesClasses()),
        i.freeMode &&
            i.freeMode.enabled &&
            n.freeMode &&
            n.freeMode.onTouchMove(),
        n.updateProgress(r.currentTranslate),
        n.setTranslate(r.currentTranslate))
}
function s1(e) {
    const t = this,
        n = t.touchEventsData
    let r = e
    r.originalEvent && (r = r.originalEvent)
    let i
    if (r.type === 'touchend' || r.type === 'touchcancel') {
        if (
            ((i = [...r.changedTouches].filter(
                (T) => T.identifier === n.touchId
            )[0]),
            !i || i.identifier !== n.touchId)
        )
            return
    } else {
        if (n.touchId !== null || r.pointerId !== n.pointerId) return
        i = r
    }
    if (
        ['pointercancel', 'pointerout', 'pointerleave', 'contextmenu'].includes(
            r.type
        ) &&
        !(
            ['pointercancel', 'contextmenu'].includes(r.type) &&
            (t.browser.isSafari || t.browser.isWebView)
        )
    )
        return
    ;(n.pointerId = null), (n.touchId = null)
    const {
        params: o,
        touches: s,
        rtlTranslate: a,
        slidesGrid: u,
        enabled: c,
    } = t
    if (!c || (!o.simulateTouch && r.pointerType === 'mouse')) return
    if (
        (n.allowTouchCallbacks && t.emit('touchEnd', r),
        (n.allowTouchCallbacks = !1),
        !n.isTouched)
    ) {
        n.isMoved && o.grabCursor && t.setGrabCursor(!1),
            (n.isMoved = !1),
            (n.startMoving = !1)
        return
    }
    o.grabCursor &&
        n.isMoved &&
        n.isTouched &&
        (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
        t.setGrabCursor(!1)
    const d = mo(),
        m = d - n.touchStartTime
    if (t.allowClick) {
        const T = r.path || (r.composedPath && r.composedPath())
        t.updateClickedSlide((T && T[0]) || r.target, T),
            t.emit('tap click', r),
            m < 300 &&
                d - n.lastClickTime < 300 &&
                t.emit('doubleTap doubleClick', r)
    }
    if (
        ((n.lastClickTime = mo()),
        po(() => {
            t.destroyed || (t.allowClick = !0)
        }),
        !n.isTouched ||
            !n.isMoved ||
            !t.swipeDirection ||
            (s.diff === 0 && !n.loopSwapReset) ||
            (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
    ) {
        ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
        return
    }
    ;(n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1)
    let v
    if (
        (o.followFinger
            ? (v = a ? t.translate : -t.translate)
            : (v = -n.currentTranslate),
        o.cssMode)
    )
        return
    if (o.freeMode && o.freeMode.enabled) {
        t.freeMode.onTouchEnd({ currentPos: v })
        return
    }
    const g = v >= -t.maxTranslate() && !t.params.loop
    let y = 0,
        C = t.slidesSizesGrid[0]
    for (
        let T = 0;
        T < u.length;
        T += T < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
    ) {
        const S = T < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
        typeof u[T + S] < 'u'
            ? (g || (v >= u[T] && v < u[T + S])) &&
              ((y = T), (C = u[T + S] - u[T]))
            : (g || v >= u[T]) &&
              ((y = T), (C = u[u.length - 1] - u[u.length - 2]))
    }
    let f = null,
        p = null
    o.rewind &&
        (t.isBeginning
            ? (p =
                  o.virtual && o.virtual.enabled && t.virtual
                      ? t.virtual.slides.length - 1
                      : t.slides.length - 1)
            : t.isEnd && (f = 0))
    const h = (v - u[y]) / C,
        w = y < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup
    if (m > o.longSwipesMs) {
        if (!o.longSwipes) {
            t.slideTo(t.activeIndex)
            return
        }
        t.swipeDirection === 'next' &&
            (h >= o.longSwipesRatio
                ? t.slideTo(o.rewind && t.isEnd ? f : y + w)
                : t.slideTo(y)),
            t.swipeDirection === 'prev' &&
                (h > 1 - o.longSwipesRatio
                    ? t.slideTo(y + w)
                    : p !== null && h < 0 && Math.abs(h) > o.longSwipesRatio
                    ? t.slideTo(p)
                    : t.slideTo(y))
    } else {
        if (!o.shortSwipes) {
            t.slideTo(t.activeIndex)
            return
        }
        t.navigation &&
        (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
            ? r.target === t.navigation.nextEl
                ? t.slideTo(y + w)
                : t.slideTo(y)
            : (t.swipeDirection === 'next' && t.slideTo(f !== null ? f : y + w),
              t.swipeDirection === 'prev' && t.slideTo(p !== null ? p : y))
    }
}
function Wd() {
    const e = this,
        { params: t, el: n } = e
    if (n && n.offsetWidth === 0) return
    t.breakpoints && e.setBreakpoint()
    const { allowSlideNext: r, allowSlidePrev: i, snapGrid: l } = e,
        o = e.virtual && e.params.virtual.enabled
    ;(e.allowSlideNext = !0),
        (e.allowSlidePrev = !0),
        e.updateSize(),
        e.updateSlides(),
        e.updateSlidesClasses()
    const s = o && t.loop
    ;(t.slidesPerView === 'auto' || t.slidesPerView > 1) &&
    e.isEnd &&
    !e.isBeginning &&
    !e.params.centeredSlides &&
    !s
        ? e.slideTo(e.slides.length - 1, 0, !1, !0)
        : e.params.loop && !o
        ? e.slideToLoop(e.realIndex, 0, !1, !0)
        : e.slideTo(e.activeIndex, 0, !1, !0),
        e.autoplay &&
            e.autoplay.running &&
            e.autoplay.paused &&
            (clearTimeout(e.autoplay.resizeTimeout),
            (e.autoplay.resizeTimeout = setTimeout(() => {
                e.autoplay &&
                    e.autoplay.running &&
                    e.autoplay.paused &&
                    e.autoplay.resume()
            }, 500))),
        (e.allowSlidePrev = i),
        (e.allowSlideNext = r),
        e.params.watchOverflow && l !== e.snapGrid && e.checkOverflow()
}
function a1(e) {
    const t = this
    t.enabled &&
        (t.allowClick ||
            (t.params.preventClicks && e.preventDefault(),
            t.params.preventClicksPropagation &&
                t.animating &&
                (e.stopPropagation(), e.stopImmediatePropagation())))
}
function u1() {
    const e = this,
        { wrapperEl: t, rtlTranslate: n, enabled: r } = e
    if (!r) return
    ;(e.previousTranslate = e.translate),
        e.isHorizontal()
            ? (e.translate = -t.scrollLeft)
            : (e.translate = -t.scrollTop),
        e.translate === 0 && (e.translate = 0),
        e.updateActiveIndex(),
        e.updateSlidesClasses()
    let i
    const l = e.maxTranslate() - e.minTranslate()
    l === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / l),
        i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
        e.emit('setTranslate', e.translate, !1)
}
function c1(e) {
    const t = this
    Fl(t, e.target),
        !(
            t.params.cssMode ||
            (t.params.slidesPerView !== 'auto' && !t.params.autoHeight)
        ) && t.update()
}
function d1() {
    const e = this
    e.documentTouchHandlerProceeded ||
        ((e.documentTouchHandlerProceeded = !0),
        e.params.touchReleaseOnEdges && (e.el.style.touchAction = 'auto'))
}
const Zm = (e, t) => {
    const n = ut(),
        { params: r, el: i, wrapperEl: l, device: o } = e,
        s = !!r.nested,
        a = t === 'on' ? 'addEventListener' : 'removeEventListener',
        u = t
    !i ||
        typeof i == 'string' ||
        (n[a]('touchstart', e.onDocumentTouchStart, {
            passive: !1,
            capture: s,
        }),
        i[a]('touchstart', e.onTouchStart, { passive: !1 }),
        i[a]('pointerdown', e.onTouchStart, { passive: !1 }),
        n[a]('touchmove', e.onTouchMove, { passive: !1, capture: s }),
        n[a]('pointermove', e.onTouchMove, { passive: !1, capture: s }),
        n[a]('touchend', e.onTouchEnd, { passive: !0 }),
        n[a]('pointerup', e.onTouchEnd, { passive: !0 }),
        n[a]('pointercancel', e.onTouchEnd, { passive: !0 }),
        n[a]('touchcancel', e.onTouchEnd, { passive: !0 }),
        n[a]('pointerout', e.onTouchEnd, { passive: !0 }),
        n[a]('pointerleave', e.onTouchEnd, { passive: !0 }),
        n[a]('contextmenu', e.onTouchEnd, { passive: !0 }),
        (r.preventClicks || r.preventClicksPropagation) &&
            i[a]('click', e.onClick, !0),
        r.cssMode && l[a]('scroll', e.onScroll),
        r.updateOnWindowResize
            ? e[u](
                  o.ios || o.android
                      ? 'resize orientationchange observerUpdate'
                      : 'resize observerUpdate',
                  Wd,
                  !0
              )
            : e[u]('observerUpdate', Wd, !0),
        i[a]('load', e.onLoad, { capture: !0 }))
}
function f1() {
    const e = this,
        { params: t } = e
    ;(e.onTouchStart = l1.bind(e)),
        (e.onTouchMove = o1.bind(e)),
        (e.onTouchEnd = s1.bind(e)),
        (e.onDocumentTouchStart = d1.bind(e)),
        t.cssMode && (e.onScroll = u1.bind(e)),
        (e.onClick = a1.bind(e)),
        (e.onLoad = c1.bind(e)),
        Zm(e, 'on')
}
function p1() {
    Zm(this, 'off')
}
var m1 = { attachEvents: f1, detachEvents: p1 }
const Qd = (e, t) => e.grid && t.grid && t.grid.rows > 1
function h1() {
    const e = this,
        { realIndex: t, initialized: n, params: r, el: i } = e,
        l = r.breakpoints
    if (!l || (l && Object.keys(l).length === 0)) return
    const o = e.getBreakpoint(l, e.params.breakpointsBase, e.el)
    if (!o || e.currentBreakpoint === o) return
    const a = (o in l ? l[o] : void 0) || e.originalParams,
        u = Qd(e, r),
        c = Qd(e, a),
        d = e.params.grabCursor,
        m = a.grabCursor,
        v = r.enabled
    u && !c
        ? (i.classList.remove(
              `${r.containerModifierClass}grid`,
              `${r.containerModifierClass}grid-column`
          ),
          e.emitContainerClasses())
        : !u &&
          c &&
          (i.classList.add(`${r.containerModifierClass}grid`),
          ((a.grid.fill && a.grid.fill === 'column') ||
              (!a.grid.fill && r.grid.fill === 'column')) &&
              i.classList.add(`${r.containerModifierClass}grid-column`),
          e.emitContainerClasses()),
        d && !m ? e.unsetGrabCursor() : !d && m && e.setGrabCursor(),
        ['navigation', 'pagination', 'scrollbar'].forEach((h) => {
            if (typeof a[h] > 'u') return
            const w = r[h] && r[h].enabled,
                T = a[h] && a[h].enabled
            w && !T && e[h].disable(), !w && T && e[h].enable()
        })
    const g = a.direction && a.direction !== r.direction,
        y = r.loop && (a.slidesPerView !== r.slidesPerView || g),
        C = r.loop
    g && n && e.changeDirection(), lt(e.params, a)
    const f = e.params.enabled,
        p = e.params.loop
    Object.assign(e, {
        allowTouchMove: e.params.allowTouchMove,
        allowSlideNext: e.params.allowSlideNext,
        allowSlidePrev: e.params.allowSlidePrev,
    }),
        v && !f ? e.disable() : !v && f && e.enable(),
        (e.currentBreakpoint = o),
        e.emit('_beforeBreakpoint', a),
        n &&
            (y
                ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
                : !C && p
                ? (e.loopCreate(t), e.updateSlides())
                : C && !p && e.loopDestroy()),
        e.emit('breakpoint', a)
}
function g1(e, t, n) {
    if ((t === void 0 && (t = 'window'), !e || (t === 'container' && !n)))
        return
    let r = !1
    const i = tt(),
        l = t === 'window' ? i.innerHeight : n.clientHeight,
        o = Object.keys(e).map((s) => {
            if (typeof s == 'string' && s.indexOf('@') === 0) {
                const a = parseFloat(s.substr(1))
                return { value: l * a, point: s }
            }
            return { value: s, point: s }
        })
    o.sort((s, a) => parseInt(s.value, 10) - parseInt(a.value, 10))
    for (let s = 0; s < o.length; s += 1) {
        const { point: a, value: u } = o[s]
        t === 'window'
            ? i.matchMedia(`(min-width: ${u}px)`).matches && (r = a)
            : u <= n.clientWidth && (r = a)
    }
    return r || 'max'
}
var v1 = { setBreakpoint: h1, getBreakpoint: g1 }
function y1(e, t) {
    const n = []
    return (
        e.forEach((r) => {
            typeof r == 'object'
                ? Object.keys(r).forEach((i) => {
                      r[i] && n.push(t + i)
                  })
                : typeof r == 'string' && n.push(t + r)
        }),
        n
    )
}
function w1() {
    const e = this,
        { classNames: t, params: n, rtl: r, el: i, device: l } = e,
        o = y1(
            [
                'initialized',
                n.direction,
                { 'free-mode': e.params.freeMode && n.freeMode.enabled },
                { autoheight: n.autoHeight },
                { rtl: r },
                { grid: n.grid && n.grid.rows > 1 },
                {
                    'grid-column':
                        n.grid && n.grid.rows > 1 && n.grid.fill === 'column',
                },
                { android: l.android },
                { ios: l.ios },
                { 'css-mode': n.cssMode },
                { centered: n.cssMode && n.centeredSlides },
                { 'watch-progress': n.watchSlidesProgress },
            ],
            n.containerModifierClass
        )
    t.push(...o), i.classList.add(...t), e.emitContainerClasses()
}
function S1() {
    const e = this,
        { el: t, classNames: n } = e
    !t ||
        typeof t == 'string' ||
        (t.classList.remove(...n), e.emitContainerClasses())
}
var x1 = { addClasses: w1, removeClasses: S1 }
function E1() {
    const e = this,
        { isLocked: t, params: n } = e,
        { slidesOffsetBefore: r } = n
    if (r) {
        const i = e.slides.length - 1,
            l = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2
        e.isLocked = e.size > l
    } else e.isLocked = e.snapGrid.length === 1
    n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
        n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
        t && t !== e.isLocked && (e.isEnd = !1),
        t !== e.isLocked && e.emit(e.isLocked ? 'lock' : 'unlock')
}
var C1 = { checkOverflow: E1 },
    ja = {
        init: !0,
        direction: 'horizontal',
        oneWayMovement: !1,
        swiperElementNodeName: 'SWIPER-CONTAINER',
        touchEventsTarget: 'wrapper',
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: 'swiper',
        enabled: !0,
        focusableElements:
            'input, select, option, textarea, button, video, label',
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: 'slide',
        breakpoints: void 0,
        breakpointsBase: 'window',
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: 'swiper-no-swiping',
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: 'swiper-',
        slideClass: 'swiper-slide',
        slideBlankClass: 'swiper-slide-blank',
        slideActiveClass: 'swiper-slide-active',
        slideVisibleClass: 'swiper-slide-visible',
        slideFullyVisibleClass: 'swiper-slide-fully-visible',
        slideNextClass: 'swiper-slide-next',
        slidePrevClass: 'swiper-slide-prev',
        wrapperClass: 'swiper-wrapper',
        lazyPreloaderClass: 'swiper-lazy-preloader',
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1,
    }
function T1(e, t) {
    return function (r) {
        r === void 0 && (r = {})
        const i = Object.keys(r)[0],
            l = r[i]
        if (typeof l != 'object' || l === null) {
            lt(t, r)
            return
        }
        if (
            (e[i] === !0 && (e[i] = { enabled: !0 }),
            i === 'navigation' &&
                e[i] &&
                e[i].enabled &&
                !e[i].prevEl &&
                !e[i].nextEl &&
                (e[i].auto = !0),
            ['pagination', 'scrollbar'].indexOf(i) >= 0 &&
                e[i] &&
                e[i].enabled &&
                !e[i].el &&
                (e[i].auto = !0),
            !(i in e && 'enabled' in l))
        ) {
            lt(t, r)
            return
        }
        typeof e[i] == 'object' && !('enabled' in e[i]) && (e[i].enabled = !0),
            e[i] || (e[i] = { enabled: !1 }),
            lt(t, r)
    }
}
const bs = {
        eventsEmitter: xw,
        update: Iw,
        translate: Aw,
        transition: Gw,
        slide: Xw,
        loop: e1,
        grabCursor: r1,
        events: m1,
        breakpoints: v1,
        checkOverflow: C1,
        classes: x1,
    },
    Rs = {}
let Qu = class Bt {
    constructor() {
        let t, n
        for (var r = arguments.length, i = new Array(r), l = 0; l < r; l++)
            i[l] = arguments[l]
        i.length === 1 &&
        i[0].constructor &&
        Object.prototype.toString.call(i[0]).slice(8, -1) === 'Object'
            ? (n = i[0])
            : ([t, n] = i),
            n || (n = {}),
            (n = lt({}, n)),
            t && !n.el && (n.el = t)
        const o = ut()
        if (
            n.el &&
            typeof n.el == 'string' &&
            o.querySelectorAll(n.el).length > 1
        ) {
            const c = []
            return (
                o.querySelectorAll(n.el).forEach((d) => {
                    const m = lt({}, n, { el: d })
                    c.push(new Bt(m))
                }),
                c
            )
        }
        const s = this
        ;(s.__swiper__ = !0),
            (s.support = Xm()),
            (s.device = qm({ userAgent: n.userAgent })),
            (s.browser = yw()),
            (s.eventsListeners = {}),
            (s.eventsAnyListeners = []),
            (s.modules = [...s.__modules__]),
            n.modules &&
                Array.isArray(n.modules) &&
                s.modules.push(...n.modules)
        const a = {}
        s.modules.forEach((c) => {
            c({
                params: n,
                swiper: s,
                extendParams: T1(n, a),
                on: s.on.bind(s),
                once: s.once.bind(s),
                off: s.off.bind(s),
                emit: s.emit.bind(s),
            })
        })
        const u = lt({}, ja, a)
        return (
            (s.params = lt({}, u, Rs, n)),
            (s.originalParams = lt({}, s.params)),
            (s.passedParams = lt({}, n)),
            s.params &&
                s.params.on &&
                Object.keys(s.params.on).forEach((c) => {
                    s.on(c, s.params.on[c])
                }),
            s.params && s.params.onAny && s.onAny(s.params.onAny),
            Object.assign(s, {
                enabled: s.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal() {
                    return s.params.direction === 'horizontal'
                },
                isVertical() {
                    return s.params.direction === 'vertical'
                },
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
                },
                allowSlideNext: s.params.allowSlideNext,
                allowSlidePrev: s.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: s.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null,
                },
                allowClick: !0,
                allowTouchMove: s.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0,
                },
                imagesToLoad: [],
                imagesLoaded: 0,
            }),
            s.emit('_swiper'),
            s.params.init && s.init(),
            s
        )
    }
    getDirectionLabel(t) {
        return this.isHorizontal()
            ? t
            : {
                  width: 'height',
                  'margin-top': 'margin-left',
                  'margin-bottom ': 'margin-right',
                  'margin-left': 'margin-top',
                  'margin-right': 'margin-bottom',
                  'padding-left': 'padding-top',
                  'padding-right': 'padding-bottom',
                  marginRight: 'marginBottom',
              }[t]
    }
    getSlideIndex(t) {
        const { slidesEl: n, params: r } = this,
            i = Dt(n, `.${r.slideClass}, swiper-slide`),
            l = $i(i[0])
        return $i(t) - l
    }
    getSlideIndexByData(t) {
        return this.getSlideIndex(
            this.slides.filter(
                (n) => n.getAttribute('data-swiper-slide-index') * 1 === t
            )[0]
        )
    }
    recalcSlides() {
        const t = this,
            { slidesEl: n, params: r } = t
        t.slides = Dt(n, `.${r.slideClass}, swiper-slide`)
    }
    enable() {
        const t = this
        t.enabled ||
            ((t.enabled = !0),
            t.params.grabCursor && t.setGrabCursor(),
            t.emit('enable'))
    }
    disable() {
        const t = this
        t.enabled &&
            ((t.enabled = !1),
            t.params.grabCursor && t.unsetGrabCursor(),
            t.emit('disable'))
    }
    setProgress(t, n) {
        const r = this
        t = Math.min(Math.max(t, 0), 1)
        const i = r.minTranslate(),
            o = (r.maxTranslate() - i) * t + i
        r.translateTo(o, typeof n > 'u' ? 0 : n),
            r.updateActiveIndex(),
            r.updateSlidesClasses()
    }
    emitContainerClasses() {
        const t = this
        if (!t.params._emitClasses || !t.el) return
        const n = t.el.className
            .split(' ')
            .filter(
                (r) =>
                    r.indexOf('swiper') === 0 ||
                    r.indexOf(t.params.containerModifierClass) === 0
            )
        t.emit('_containerClasses', n.join(' '))
    }
    getSlideClasses(t) {
        const n = this
        return n.destroyed
            ? ''
            : t.className
                  .split(' ')
                  .filter(
                      (r) =>
                          r.indexOf('swiper-slide') === 0 ||
                          r.indexOf(n.params.slideClass) === 0
                  )
                  .join(' ')
    }
    emitSlidesClasses() {
        const t = this
        if (!t.params._emitClasses || !t.el) return
        const n = []
        t.slides.forEach((r) => {
            const i = t.getSlideClasses(r)
            n.push({ slideEl: r, classNames: i }), t.emit('_slideClass', r, i)
        }),
            t.emit('_slideClasses', n)
    }
    slidesPerViewDynamic(t, n) {
        t === void 0 && (t = 'current'), n === void 0 && (n = !1)
        const r = this,
            {
                params: i,
                slides: l,
                slidesGrid: o,
                slidesSizesGrid: s,
                size: a,
                activeIndex: u,
            } = r
        let c = 1
        if (typeof i.slidesPerView == 'number') return i.slidesPerView
        if (i.centeredSlides) {
            let d = l[u] ? Math.ceil(l[u].swiperSlideSize) : 0,
                m
            for (let v = u + 1; v < l.length; v += 1)
                l[v] &&
                    !m &&
                    ((d += Math.ceil(l[v].swiperSlideSize)),
                    (c += 1),
                    d > a && (m = !0))
            for (let v = u - 1; v >= 0; v -= 1)
                l[v] &&
                    !m &&
                    ((d += l[v].swiperSlideSize), (c += 1), d > a && (m = !0))
        } else if (t === 'current')
            for (let d = u + 1; d < l.length; d += 1)
                (n ? o[d] + s[d] - o[u] < a : o[d] - o[u] < a) && (c += 1)
        else for (let d = u - 1; d >= 0; d -= 1) o[u] - o[d] < a && (c += 1)
        return c
    }
    update() {
        const t = this
        if (!t || t.destroyed) return
        const { snapGrid: n, params: r } = t
        r.breakpoints && t.setBreakpoint(),
            [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
                o.complete && Fl(t, o)
            }),
            t.updateSize(),
            t.updateSlides(),
            t.updateProgress(),
            t.updateSlidesClasses()
        function i() {
            const o = t.rtlTranslate ? t.translate * -1 : t.translate,
                s = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate())
            t.setTranslate(s), t.updateActiveIndex(), t.updateSlidesClasses()
        }
        let l
        if (r.freeMode && r.freeMode.enabled && !r.cssMode)
            i(), r.autoHeight && t.updateAutoHeight()
        else {
            if (
                (r.slidesPerView === 'auto' || r.slidesPerView > 1) &&
                t.isEnd &&
                !r.centeredSlides
            ) {
                const o =
                    t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides
                l = t.slideTo(o.length - 1, 0, !1, !0)
            } else l = t.slideTo(t.activeIndex, 0, !1, !0)
            l || i()
        }
        r.watchOverflow && n !== t.snapGrid && t.checkOverflow(),
            t.emit('update')
    }
    changeDirection(t, n) {
        n === void 0 && (n = !0)
        const r = this,
            i = r.params.direction
        return (
            t || (t = i === 'horizontal' ? 'vertical' : 'horizontal'),
            t === i ||
                (t !== 'horizontal' && t !== 'vertical') ||
                (r.el.classList.remove(
                    `${r.params.containerModifierClass}${i}`
                ),
                r.el.classList.add(`${r.params.containerModifierClass}${t}`),
                r.emitContainerClasses(),
                (r.params.direction = t),
                r.slides.forEach((l) => {
                    t === 'vertical'
                        ? (l.style.width = '')
                        : (l.style.height = '')
                }),
                r.emit('changeDirection'),
                n && r.update()),
            r
        )
    }
    changeLanguageDirection(t) {
        const n = this
        ;(n.rtl && t === 'rtl') ||
            (!n.rtl && t === 'ltr') ||
            ((n.rtl = t === 'rtl'),
            (n.rtlTranslate = n.params.direction === 'horizontal' && n.rtl),
            n.rtl
                ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
                  (n.el.dir = 'rtl'))
                : (n.el.classList.remove(
                      `${n.params.containerModifierClass}rtl`
                  ),
                  (n.el.dir = 'ltr')),
            n.update())
    }
    mount(t) {
        const n = this
        if (n.mounted) return !0
        let r = t || n.params.el
        if ((typeof r == 'string' && (r = document.querySelector(r)), !r))
            return !1
        ;(r.swiper = n),
            r.parentNode &&
                r.parentNode.host &&
                r.parentNode.host.nodeName ===
                    n.params.swiperElementNodeName.toUpperCase() &&
                (n.isElement = !0)
        const i = () =>
            `.${(n.params.wrapperClass || '').trim().split(' ').join('.')}`
        let o =
            r && r.shadowRoot && r.shadowRoot.querySelector
                ? r.shadowRoot.querySelector(i())
                : Dt(r, i())[0]
        return (
            !o &&
                n.params.createElements &&
                ((o = Fr('div', n.params.wrapperClass)),
                r.append(o),
                Dt(r, `.${n.params.slideClass}`).forEach((s) => {
                    o.append(s)
                })),
            Object.assign(n, {
                el: r,
                wrapperEl: o,
                slidesEl:
                    n.isElement && !r.parentNode.host.slideSlots
                        ? r.parentNode.host
                        : o,
                hostEl: n.isElement ? r.parentNode.host : r,
                mounted: !0,
                rtl:
                    r.dir.toLowerCase() === 'rtl' ||
                    gn(r, 'direction') === 'rtl',
                rtlTranslate:
                    n.params.direction === 'horizontal' &&
                    (r.dir.toLowerCase() === 'rtl' ||
                        gn(r, 'direction') === 'rtl'),
                wrongRTL: gn(o, 'display') === '-webkit-box',
            }),
            !0
        )
    }
    init(t) {
        const n = this
        if (n.initialized || n.mount(t) === !1) return n
        n.emit('beforeInit'),
            n.params.breakpoints && n.setBreakpoint(),
            n.addClasses(),
            n.updateSize(),
            n.updateSlides(),
            n.params.watchOverflow && n.checkOverflow(),
            n.params.grabCursor && n.enabled && n.setGrabCursor(),
            n.params.loop && n.virtual && n.params.virtual.enabled
                ? n.slideTo(
                      n.params.initialSlide + n.virtual.slidesBefore,
                      0,
                      n.params.runCallbacksOnInit,
                      !1,
                      !0
                  )
                : n.slideTo(
                      n.params.initialSlide,
                      0,
                      n.params.runCallbacksOnInit,
                      !1,
                      !0
                  ),
            n.params.loop && n.loopCreate(),
            n.attachEvents()
        const i = [...n.el.querySelectorAll('[loading="lazy"]')]
        return (
            n.isElement &&
                i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
            i.forEach((l) => {
                l.complete
                    ? Fl(n, l)
                    : l.addEventListener('load', (o) => {
                          Fl(n, o.target)
                      })
            }),
            za(n),
            (n.initialized = !0),
            za(n),
            n.emit('init'),
            n.emit('afterInit'),
            n
        )
    }
    destroy(t, n) {
        t === void 0 && (t = !0), n === void 0 && (n = !0)
        const r = this,
            { params: i, el: l, wrapperEl: o, slides: s } = r
        return (
            typeof r.params > 'u' ||
                r.destroyed ||
                (r.emit('beforeDestroy'),
                (r.initialized = !1),
                r.detachEvents(),
                i.loop && r.loopDestroy(),
                n &&
                    (r.removeClasses(),
                    l && typeof l != 'string' && l.removeAttribute('style'),
                    o && o.removeAttribute('style'),
                    s &&
                        s.length &&
                        s.forEach((a) => {
                            a.classList.remove(
                                i.slideVisibleClass,
                                i.slideFullyVisibleClass,
                                i.slideActiveClass,
                                i.slideNextClass,
                                i.slidePrevClass
                            ),
                                a.removeAttribute('style'),
                                a.removeAttribute('data-swiper-slide-index')
                        })),
                r.emit('destroy'),
                Object.keys(r.eventsListeners).forEach((a) => {
                    r.off(a)
                }),
                t !== !1 &&
                    (r.el && typeof r.el != 'string' && (r.el.swiper = null),
                    lw(r)),
                (r.destroyed = !0)),
            null
        )
    }
    static extendDefaults(t) {
        lt(Rs, t)
    }
    static get extendedDefaults() {
        return Rs
    }
    static get defaults() {
        return ja
    }
    static installModule(t) {
        Bt.prototype.__modules__ || (Bt.prototype.__modules__ = [])
        const n = Bt.prototype.__modules__
        typeof t == 'function' && n.indexOf(t) < 0 && n.push(t)
    }
    static use(t) {
        return Array.isArray(t)
            ? (t.forEach((n) => Bt.installModule(n)), Bt)
            : (Bt.installModule(t), Bt)
    }
}
Object.keys(bs).forEach((e) => {
    Object.keys(bs[e]).forEach((t) => {
        Qu.prototype[t] = bs[e][t]
    })
})
Qu.use([ww, Sw])
const eh = [
    'eventsPrefix',
    'injectStyles',
    'injectStylesUrls',
    'modules',
    'init',
    '_direction',
    'oneWayMovement',
    'swiperElementNodeName',
    'touchEventsTarget',
    'initialSlide',
    '_speed',
    'cssMode',
    'updateOnWindowResize',
    'resizeObserver',
    'nested',
    'focusableElements',
    '_enabled',
    '_width',
    '_height',
    'preventInteractionOnTransition',
    'userAgent',
    'url',
    '_edgeSwipeDetection',
    '_edgeSwipeThreshold',
    '_freeMode',
    '_autoHeight',
    'setWrapperSize',
    'virtualTranslate',
    '_effect',
    'breakpoints',
    'breakpointsBase',
    '_spaceBetween',
    '_slidesPerView',
    'maxBackfaceHiddenSlides',
    '_grid',
    '_slidesPerGroup',
    '_slidesPerGroupSkip',
    '_slidesPerGroupAuto',
    '_centeredSlides',
    '_centeredSlidesBounds',
    '_slidesOffsetBefore',
    '_slidesOffsetAfter',
    'normalizeSlideIndex',
    '_centerInsufficientSlides',
    '_watchOverflow',
    'roundLengths',
    'touchRatio',
    'touchAngle',
    'simulateTouch',
    '_shortSwipes',
    '_longSwipes',
    'longSwipesRatio',
    'longSwipesMs',
    '_followFinger',
    'allowTouchMove',
    '_threshold',
    'touchMoveStopPropagation',
    'touchStartPreventDefault',
    'touchStartForcePreventDefault',
    'touchReleaseOnEdges',
    'uniqueNavElements',
    '_resistance',
    '_resistanceRatio',
    '_watchSlidesProgress',
    '_grabCursor',
    'preventClicks',
    'preventClicksPropagation',
    '_slideToClickedSlide',
    '_loop',
    'loopAdditionalSlides',
    'loopAddBlankSlides',
    'loopPreventsSliding',
    '_rewind',
    '_allowSlidePrev',
    '_allowSlideNext',
    '_swipeHandler',
    '_noSwiping',
    'noSwipingClass',
    'noSwipingSelector',
    'passiveListeners',
    'containerModifierClass',
    'slideClass',
    'slideActiveClass',
    'slideVisibleClass',
    'slideFullyVisibleClass',
    'slideNextClass',
    'slidePrevClass',
    'slideBlankClass',
    'wrapperClass',
    'lazyPreloaderClass',
    'lazyPreloadPrevNext',
    'runCallbacksOnInit',
    'observer',
    'observeParents',
    'observeSlideChildren',
    'a11y',
    '_autoplay',
    '_controller',
    'coverflowEffect',
    'cubeEffect',
    'fadeEffect',
    'flipEffect',
    'creativeEffect',
    'cardsEffect',
    'hashNavigation',
    'history',
    'keyboard',
    'mousewheel',
    '_navigation',
    '_pagination',
    'parallax',
    '_scrollbar',
    '_thumbs',
    'virtual',
    'zoom',
    'control',
]
function Zn(e) {
    return (
        typeof e == 'object' &&
        e !== null &&
        e.constructor &&
        Object.prototype.toString.call(e).slice(8, -1) === 'Object' &&
        !e.__swiper__
    )
}
function Lr(e, t) {
    const n = ['__proto__', 'constructor', 'prototype']
    Object.keys(t)
        .filter((r) => n.indexOf(r) < 0)
        .forEach((r) => {
            typeof e[r] > 'u'
                ? (e[r] = t[r])
                : Zn(t[r]) && Zn(e[r]) && Object.keys(t[r]).length > 0
                ? t[r].__swiper__
                    ? (e[r] = t[r])
                    : Lr(e[r], t[r])
                : (e[r] = t[r])
        })
}
function th(e) {
    return (
        e === void 0 && (e = {}),
        e.navigation &&
            typeof e.navigation.nextEl > 'u' &&
            typeof e.navigation.prevEl > 'u'
    )
}
function nh(e) {
    return (
        e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > 'u'
    )
}
function rh(e) {
    return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > 'u'
}
function ih(e) {
    e === void 0 && (e = '')
    const t = e
            .split(' ')
            .map((r) => r.trim())
            .filter((r) => !!r),
        n = []
    return (
        t.forEach((r) => {
            n.indexOf(r) < 0 && n.push(r)
        }),
        n.join(' ')
    )
}
function P1(e) {
    return (
        e === void 0 && (e = ''),
        e
            ? e.includes('swiper-wrapper')
                ? e
                : `swiper-wrapper ${e}`
            : 'swiper-wrapper'
    )
}
function _1(e) {
    let {
        swiper: t,
        slides: n,
        passedParams: r,
        changedParams: i,
        nextEl: l,
        prevEl: o,
        scrollbarEl: s,
        paginationEl: a,
    } = e
    const u = i.filter(
            (O) => O !== 'children' && O !== 'direction' && O !== 'wrapperClass'
        ),
        {
            params: c,
            pagination: d,
            navigation: m,
            scrollbar: v,
            virtual: g,
            thumbs: y,
        } = t
    let C, f, p, h, w, T, S, R
    i.includes('thumbs') &&
        r.thumbs &&
        r.thumbs.swiper &&
        c.thumbs &&
        !c.thumbs.swiper &&
        (C = !0),
        i.includes('controller') &&
            r.controller &&
            r.controller.control &&
            c.controller &&
            !c.controller.control &&
            (f = !0),
        i.includes('pagination') &&
            r.pagination &&
            (r.pagination.el || a) &&
            (c.pagination || c.pagination === !1) &&
            d &&
            !d.el &&
            (p = !0),
        i.includes('scrollbar') &&
            r.scrollbar &&
            (r.scrollbar.el || s) &&
            (c.scrollbar || c.scrollbar === !1) &&
            v &&
            !v.el &&
            (h = !0),
        i.includes('navigation') &&
            r.navigation &&
            (r.navigation.prevEl || o) &&
            (r.navigation.nextEl || l) &&
            (c.navigation || c.navigation === !1) &&
            m &&
            !m.prevEl &&
            !m.nextEl &&
            (w = !0)
    const M = (O) => {
        t[O] &&
            (t[O].destroy(),
            O === 'navigation'
                ? (t.isElement && (t[O].prevEl.remove(), t[O].nextEl.remove()),
                  (c[O].prevEl = void 0),
                  (c[O].nextEl = void 0),
                  (t[O].prevEl = void 0),
                  (t[O].nextEl = void 0))
                : (t.isElement && t[O].el.remove(),
                  (c[O].el = void 0),
                  (t[O].el = void 0)))
    }
    i.includes('loop') &&
        t.isElement &&
        (c.loop && !r.loop
            ? (T = !0)
            : !c.loop && r.loop
            ? (S = !0)
            : (R = !0)),
        u.forEach((O) => {
            if (Zn(c[O]) && Zn(r[O]))
                Object.assign(c[O], r[O]),
                    (O === 'navigation' ||
                        O === 'pagination' ||
                        O === 'scrollbar') &&
                        'enabled' in r[O] &&
                        !r[O].enabled &&
                        M(O)
            else {
                const k = r[O]
                ;(k === !0 || k === !1) &&
                (O === 'navigation' || O === 'pagination' || O === 'scrollbar')
                    ? k === !1 && M(O)
                    : (c[O] = r[O])
            }
        }),
        u.includes('controller') &&
            !f &&
            t.controller &&
            t.controller.control &&
            c.controller &&
            c.controller.control &&
            (t.controller.control = c.controller.control),
        i.includes('children') && n && g && c.virtual.enabled
            ? ((g.slides = n), g.update(!0))
            : i.includes('virtual') &&
              g &&
              c.virtual.enabled &&
              (n && (g.slides = n), g.update(!0)),
        i.includes('children') && n && c.loop && (R = !0),
        C && y.init() && y.update(!0),
        f && (t.controller.control = c.controller.control),
        p &&
            (t.isElement &&
                (!a || typeof a == 'string') &&
                ((a = document.createElement('div')),
                a.classList.add('swiper-pagination'),
                a.part.add('pagination'),
                t.el.appendChild(a)),
            a && (c.pagination.el = a),
            d.init(),
            d.render(),
            d.update()),
        h &&
            (t.isElement &&
                (!s || typeof s == 'string') &&
                ((s = document.createElement('div')),
                s.classList.add('swiper-scrollbar'),
                s.part.add('scrollbar'),
                t.el.appendChild(s)),
            s && (c.scrollbar.el = s),
            v.init(),
            v.updateSize(),
            v.setTranslate()),
        w &&
            (t.isElement &&
                ((!l || typeof l == 'string') &&
                    ((l = document.createElement('div')),
                    l.classList.add('swiper-button-next'),
                    (l.innerHTML = t.hostEl.constructor.nextButtonSvg),
                    l.part.add('button-next'),
                    t.el.appendChild(l)),
                (!o || typeof o == 'string') &&
                    ((o = document.createElement('div')),
                    o.classList.add('swiper-button-prev'),
                    (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
                    o.part.add('button-prev'),
                    t.el.appendChild(o))),
            l && (c.navigation.nextEl = l),
            o && (c.navigation.prevEl = o),
            m.init(),
            m.update()),
        i.includes('allowSlideNext') && (t.allowSlideNext = r.allowSlideNext),
        i.includes('allowSlidePrev') && (t.allowSlidePrev = r.allowSlidePrev),
        i.includes('direction') && t.changeDirection(r.direction, !1),
        (T || R) && t.loopDestroy(),
        (S || R) && t.loopCreate(),
        t.update()
}
function M1(e, t) {
    e === void 0 && (e = {}), t === void 0 && (t = !0)
    const n = { on: {} },
        r = {},
        i = {}
    Lr(n, ja), (n._emitClasses = !0), (n.init = !1)
    const l = {},
        o = eh.map((a) => a.replace(/_/, '')),
        s = Object.assign({}, e)
    return (
        Object.keys(s).forEach((a) => {
            typeof e[a] > 'u' ||
                (o.indexOf(a) >= 0
                    ? Zn(e[a])
                        ? ((n[a] = {}),
                          (i[a] = {}),
                          Lr(n[a], e[a]),
                          Lr(i[a], e[a]))
                        : ((n[a] = e[a]), (i[a] = e[a]))
                    : a.search(/on[A-Z]/) === 0 && typeof e[a] == 'function'
                    ? t
                        ? (r[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                        : (n.on[`${a[2].toLowerCase()}${a.substr(3)}`] = e[a])
                    : (l[a] = e[a]))
        }),
        ['navigation', 'pagination', 'scrollbar'].forEach((a) => {
            n[a] === !0 && (n[a] = {}), n[a] === !1 && delete n[a]
        }),
        { params: n, passedParams: i, rest: l, events: r }
    )
}
function k1(e, t) {
    let {
        el: n,
        nextEl: r,
        prevEl: i,
        paginationEl: l,
        scrollbarEl: o,
        swiper: s,
    } = e
    th(t) &&
        r &&
        i &&
        ((s.params.navigation.nextEl = r),
        (s.originalParams.navigation.nextEl = r),
        (s.params.navigation.prevEl = i),
        (s.originalParams.navigation.prevEl = i)),
        nh(t) &&
            l &&
            ((s.params.pagination.el = l),
            (s.originalParams.pagination.el = l)),
        rh(t) &&
            o &&
            ((s.params.scrollbar.el = o), (s.originalParams.scrollbar.el = o)),
        s.init(n)
}
function L1(e, t, n, r, i) {
    const l = []
    if (!t) return l
    const o = (a) => {
        l.indexOf(a) < 0 && l.push(a)
    }
    if (n && r) {
        const a = r.map(i),
            u = n.map(i)
        a.join('') !== u.join('') && o('children'),
            r.length !== n.length && o('children')
    }
    return (
        eh
            .filter((a) => a[0] === '_')
            .map((a) => a.replace(/_/, ''))
            .forEach((a) => {
                if (a in e && a in t)
                    if (Zn(e[a]) && Zn(t[a])) {
                        const u = Object.keys(e[a]),
                            c = Object.keys(t[a])
                        u.length !== c.length
                            ? o(a)
                            : (u.forEach((d) => {
                                  e[a][d] !== t[a][d] && o(a)
                              }),
                              c.forEach((d) => {
                                  e[a][d] !== t[a][d] && o(a)
                              }))
                    } else e[a] !== t[a] && o(a)
            }),
        l
    )
}
const N1 = (e) => {
    !e ||
        e.destroyed ||
        !e.params.virtual ||
        (e.params.virtual && !e.params.virtual.enabled) ||
        (e.updateSlides(),
        e.updateProgress(),
        e.updateSlidesClasses(),
        e.parallax &&
            e.params.parallax &&
            e.params.parallax.enabled &&
            e.parallax.setTranslate())
}
function go() {
    return (
        (go = Object.assign
            ? Object.assign.bind()
            : function (e) {
                  for (var t = 1; t < arguments.length; t++) {
                      var n = arguments[t]
                      for (var r in n)
                          Object.prototype.hasOwnProperty.call(n, r) &&
                              (e[r] = n[r])
                  }
                  return e
              }),
        go.apply(this, arguments)
    )
}
function lh(e) {
    return (
        e.type &&
        e.type.displayName &&
        e.type.displayName.includes('SwiperSlide')
    )
}
function oh(e) {
    const t = []
    return (
        xe.Children.toArray(e).forEach((n) => {
            lh(n)
                ? t.push(n)
                : n.props &&
                  n.props.children &&
                  oh(n.props.children).forEach((r) => t.push(r))
        }),
        t
    )
}
function O1(e) {
    const t = [],
        n = {
            'container-start': [],
            'container-end': [],
            'wrapper-start': [],
            'wrapper-end': [],
        }
    return (
        xe.Children.toArray(e).forEach((r) => {
            if (lh(r)) t.push(r)
            else if (r.props && r.props.slot && n[r.props.slot])
                n[r.props.slot].push(r)
            else if (r.props && r.props.children) {
                const i = oh(r.props.children)
                i.length > 0
                    ? i.forEach((l) => t.push(l))
                    : n['container-end'].push(r)
            } else n['container-end'].push(r)
        }),
        { slides: t, slots: n }
    )
}
function I1(e, t, n) {
    if (!n) return null
    const r = (c) => {
            let d = c
            return (
                c < 0
                    ? (d = t.length + c)
                    : d >= t.length && (d = d - t.length),
                d
            )
        },
        i = e.isHorizontal()
            ? { [e.rtlTranslate ? 'right' : 'left']: `${n.offset}px` }
            : { top: `${n.offset}px` },
        { from: l, to: o } = n,
        s = e.params.loop ? -t.length : 0,
        a = e.params.loop ? t.length * 2 : t.length,
        u = []
    for (let c = s; c < a; c += 1) c >= l && c <= o && u.push(t[r(c)])
    return u.map((c, d) =>
        xe.cloneElement(c, {
            swiper: e,
            style: i,
            key: c.props.virtualIndex || c.key || `slide-${d}`,
        })
    )
}
function Si(e, t) {
    return typeof window > 'u' ? N.useEffect(e, t) : N.useLayoutEffect(e, t)
}
const Kd = N.createContext(null),
    b1 = N.createContext(null),
    Ku = N.forwardRef(function (e, t) {
        let {
                className: n,
                tag: r = 'div',
                wrapperTag: i = 'div',
                children: l,
                onSwiper: o,
                ...s
            } = e === void 0 ? {} : e,
            a = !1
        const [u, c] = N.useState('swiper'),
            [d, m] = N.useState(null),
            [v, g] = N.useState(!1),
            y = N.useRef(!1),
            C = N.useRef(null),
            f = N.useRef(null),
            p = N.useRef(null),
            h = N.useRef(null),
            w = N.useRef(null),
            T = N.useRef(null),
            S = N.useRef(null),
            R = N.useRef(null),
            { params: M, passedParams: O, rest: k, events: A } = M1(s),
            { slides: b, slots: D } = O1(l),
            F = () => {
                g(!v)
            }
        Object.assign(M.on, {
            _containerClasses(z, $) {
                c($)
            },
        })
        const U = () => {
            Object.assign(M.on, A), (a = !0)
            const z = { ...M }
            if (
                (delete z.wrapperClass,
                (f.current = new Qu(z)),
                f.current.virtual && f.current.params.virtual.enabled)
            ) {
                f.current.virtual.slides = b
                const $ = {
                    cache: !1,
                    slides: b,
                    renderExternal: m,
                    renderExternalUpdate: !1,
                }
                Lr(f.current.params.virtual, $),
                    Lr(f.current.originalParams.virtual, $)
            }
        }
        C.current || U(), f.current && f.current.on('_beforeBreakpoint', F)
        const Y = () => {
                a ||
                    !A ||
                    !f.current ||
                    Object.keys(A).forEach((z) => {
                        f.current.on(z, A[z])
                    })
            },
            I = () => {
                !A ||
                    !f.current ||
                    Object.keys(A).forEach((z) => {
                        f.current.off(z, A[z])
                    })
            }
        N.useEffect(() => () => {
            f.current && f.current.off('_beforeBreakpoint', F)
        }),
            N.useEffect(() => {
                !y.current &&
                    f.current &&
                    (f.current.emitSlidesClasses(), (y.current = !0))
            }),
            Si(() => {
                if ((t && (t.current = C.current), !!C.current))
                    return (
                        f.current.destroyed && U(),
                        k1(
                            {
                                el: C.current,
                                nextEl: w.current,
                                prevEl: T.current,
                                paginationEl: S.current,
                                scrollbarEl: R.current,
                                swiper: f.current,
                            },
                            M
                        ),
                        o && !f.current.destroyed && o(f.current),
                        () => {
                            f.current &&
                                !f.current.destroyed &&
                                f.current.destroy(!0, !1)
                        }
                    )
            }, []),
            Si(() => {
                Y()
                const z = L1(O, p.current, b, h.current, ($) => $.key)
                return (
                    (p.current = O),
                    (h.current = b),
                    z.length &&
                        f.current &&
                        !f.current.destroyed &&
                        _1({
                            swiper: f.current,
                            slides: b,
                            passedParams: O,
                            changedParams: z,
                            nextEl: w.current,
                            prevEl: T.current,
                            scrollbarEl: R.current,
                            paginationEl: S.current,
                        }),
                    () => {
                        I()
                    }
                )
            }),
            Si(() => {
                N1(f.current)
            }, [d])
        function P() {
            return M.virtual
                ? I1(f.current, b, d)
                : b.map((z, $) =>
                      xe.cloneElement(z, {
                          swiper: f.current,
                          swiperSlideIndex: $,
                      })
                  )
        }
        return xe.createElement(
            r,
            go({ ref: C, className: ih(`${u}${n ? ` ${n}` : ''}`) }, k),
            xe.createElement(
                b1.Provider,
                { value: f.current },
                D['container-start'],
                xe.createElement(
                    i,
                    { className: P1(M.wrapperClass) },
                    D['wrapper-start'],
                    P(),
                    D['wrapper-end']
                ),
                th(M) &&
                    xe.createElement(
                        xe.Fragment,
                        null,
                        xe.createElement('div', {
                            ref: T,
                            className: 'swiper-button-prev',
                        }),
                        xe.createElement('div', {
                            ref: w,
                            className: 'swiper-button-next',
                        })
                    ),
                rh(M) &&
                    xe.createElement('div', {
                        ref: R,
                        className: 'swiper-scrollbar',
                    }),
                nh(M) &&
                    xe.createElement('div', {
                        ref: S,
                        className: 'swiper-pagination',
                    }),
                D['container-end']
            )
        )
    })
Ku.displayName = 'Swiper'
const An = N.forwardRef(function (e, t) {
    let {
        tag: n = 'div',
        children: r,
        className: i = '',
        swiper: l,
        zoom: o,
        lazy: s,
        virtualIndex: a,
        swiperSlideIndex: u,
        ...c
    } = e === void 0 ? {} : e
    const d = N.useRef(null),
        [m, v] = N.useState('swiper-slide'),
        [g, y] = N.useState(!1)
    function C(w, T, S) {
        T === d.current && v(S)
    }
    Si(() => {
        if (
            (typeof u < 'u' && (d.current.swiperSlideIndex = u),
            t && (t.current = d.current),
            !(!d.current || !l))
        ) {
            if (l.destroyed) {
                m !== 'swiper-slide' && v('swiper-slide')
                return
            }
            return (
                l.on('_slideClass', C),
                () => {
                    l && l.off('_slideClass', C)
                }
            )
        }
    }),
        Si(() => {
            l && d.current && !l.destroyed && v(l.getSlideClasses(d.current))
        }, [l])
    const f = {
            isActive: m.indexOf('swiper-slide-active') >= 0,
            isVisible: m.indexOf('swiper-slide-visible') >= 0,
            isPrev: m.indexOf('swiper-slide-prev') >= 0,
            isNext: m.indexOf('swiper-slide-next') >= 0,
        },
        p = () => (typeof r == 'function' ? r(f) : r),
        h = () => {
            y(!0)
        }
    return xe.createElement(
        n,
        go(
            {
                ref: d,
                className: ih(`${m}${i ? ` ${i}` : ''}`),
                'data-swiper-slide-index': a,
                onLoad: h,
            },
            c
        ),
        o &&
            xe.createElement(
                Kd.Provider,
                { value: f },
                xe.createElement(
                    'div',
                    {
                        className: 'swiper-zoom-container',
                        'data-swiper-zoom': typeof o == 'number' ? o : void 0,
                    },
                    p(),
                    s &&
                        !g &&
                        xe.createElement('div', {
                            className: 'swiper-lazy-preloader',
                        })
                )
            ),
        !o &&
            xe.createElement(
                Kd.Provider,
                { value: f },
                p(),
                s &&
                    !g &&
                    xe.createElement('div', {
                        className: 'swiper-lazy-preloader',
                    })
            )
    )
})
An.displayName = 'SwiperSlide'
function R1() {
    const e = 'flex justify-center w-full overflow-hidden'
    return x.jsx(x.Fragment, {
        children: x.jsxs(Ku, {
            className:
                'flex w-full mt-0 max-md:mt-0 overflow-hidden h-[980px] max-2xl:h-[800px] max-xl:h-[600px] max-lg:h-[500px] max-md:h-[400px] max-sm:h-[280px] max-ss:h-[200px]',
            modules: [Qm, Km, Ym, mw],
            autoplay: { delay: 6e3, disableOnInteraction: !1 },
            spaceBetween: 0,
            slidesPerView: 1,
            navigation: !0,
            pagination: { clickable: !0 },
            children: [
                x.jsx(An, {
                    className: 'flex justify-center items-center',
                    children: x.jsx('img', {
                        alt: '01',
                        src: '/img/IMG_001.jpg',
                        className:
                            'flex justify-center items-center w-full overflow-hidden',
                    }),
                }),
                x.jsx(An, {
                    className: 'flex justify-center items-center',
                    children: x.jsx('img', {
                        alt: '02',
                        src: '/img/IMG_002.jpg',
                        className: e,
                    }),
                }),
                x.jsx(An, {
                    className: 'bottom-24 max-lg:bottom-0',
                    children: x.jsx('img', {
                        alt: '03',
                        src: '/img/IMG_003.JPG',
                        className: e,
                    }),
                }),
                x.jsx(An, {
                    className: 'bottom-14 max-lg:bottom-0',
                    children: x.jsx('img', {
                        alt: '04',
                        src: '/img/IMG_004.jpg',
                        className: e,
                    }),
                }),
                x.jsx(An, {
                    className: 'bottom-0',
                    children: x.jsx('img', {
                        alt: '06',
                        src: '/img/IMG_006.jpg',
                        className: e,
                    }),
                }),
            ],
        }),
    })
}
const D1 = () =>
    x.jsxs(x.Fragment, {
        children: [
            x.jsx(R1, {}),
            x.jsx('div', {
                className: 'mx-auto',
                children: x.jsx('h1', {
                    className:
                        'text-4xl mt-20 mb-5 mx-8 leading-[3.5rem] hover:text-yy',
                    children: '天 反 時 為 災 。 地 反 物 為 妖',
                }),
            }),
            x.jsx(rw, {}),
        ],
    })
function z1() {
    return x.jsx(x.Fragment, {
        children: x.jsx('main', { children: x.jsx(D1, {}) }),
    })
}
var sh = { exports: {} },
    ah = {}
/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ji = N
function j1(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t)
}
var A1 = typeof Object.is == 'function' ? Object.is : j1,
    F1 = Ji.useSyncExternalStore,
    B1 = Ji.useRef,
    $1 = Ji.useEffect,
    G1 = Ji.useMemo,
    U1 = Ji.useDebugValue
ah.useSyncExternalStoreWithSelector = function (e, t, n, r, i) {
    var l = B1(null)
    if (l.current === null) {
        var o = { hasValue: !1, value: null }
        l.current = o
    } else o = l.current
    l = G1(
        function () {
            function a(v) {
                if (!u) {
                    if (
                        ((u = !0),
                        (c = v),
                        (v = r(v)),
                        i !== void 0 && o.hasValue)
                    ) {
                        var g = o.value
                        if (i(g, v)) return (d = g)
                    }
                    return (d = v)
                }
                if (((g = d), A1(c, v))) return g
                var y = r(v)
                return i !== void 0 && i(g, y) ? g : ((c = v), (d = y))
            }
            var u = !1,
                c,
                d,
                m = n === void 0 ? null : n
            return [
                function () {
                    return a(t())
                },
                m === null
                    ? void 0
                    : function () {
                          return a(m())
                      },
            ]
        },
        [t, n, r, i]
    )
    var s = F1(e, l[0], l[1])
    return (
        $1(
            function () {
                ;(o.hasValue = !0), (o.value = s)
            },
            [s]
        ),
        U1(s),
        s
    )
}
sh.exports = ah
var H1 = sh.exports,
    st = 'default' in As ? xe : As,
    Yd = Symbol.for('react-redux-context'),
    Xd = typeof globalThis < 'u' ? globalThis : {}
function V1() {
    if (!st.createContext) return {}
    const e = Xd[Yd] ?? (Xd[Yd] = new Map())
    let t = e.get(st.createContext)
    return t || ((t = st.createContext(null)), e.set(st.createContext, t)), t
}
var Mn = V1(),
    W1 = () => {
        throw new Error('uSES not initialized!')
    }
function Yu(e = Mn) {
    return function () {
        return st.useContext(e)
    }
}
var uh = Yu(),
    ch = W1,
    Q1 = (e) => {
        ch = e
    },
    K1 = (e, t) => e === t
function Y1(e = Mn) {
    const t = e === Mn ? uh : Yu(e),
        n = (r, i = {}) => {
            const { equalityFn: l = K1, devModeChecks: o = {} } =
                    typeof i == 'function' ? { equalityFn: i } : i,
                {
                    store: s,
                    subscription: a,
                    getServerState: u,
                    stabilityCheck: c,
                    identityFunctionCheck: d,
                } = t()
            st.useRef(!0)
            const m = st.useCallback(
                    {
                        [r.name](g) {
                            return r(g)
                        },
                    }[r.name],
                    [r, c, o.stabilityCheck]
                ),
                v = ch(a.addNestedSub, s.getState, u || s.getState, m, l)
            return st.useDebugValue(v), v
        }
    return Object.assign(n, { withTypes: () => n }), n
}
var X1 = Y1()
function q1(e) {
    e()
}
function J1() {
    let e = null,
        t = null
    return {
        clear() {
            ;(e = null), (t = null)
        },
        notify() {
            q1(() => {
                let n = e
                for (; n; ) n.callback(), (n = n.next)
            })
        },
        get() {
            const n = []
            let r = e
            for (; r; ) n.push(r), (r = r.next)
            return n
        },
        subscribe(n) {
            let r = !0
            const i = (t = { callback: n, next: null, prev: t })
            return (
                i.prev ? (i.prev.next = i) : (e = i),
                function () {
                    !r ||
                        e === null ||
                        ((r = !1),
                        i.next ? (i.next.prev = i.prev) : (t = i.prev),
                        i.prev ? (i.prev.next = i.next) : (e = i.next))
                }
            )
        },
    }
}
var qd = { notify() {}, get: () => [] }
function Z1(e, t) {
    let n,
        r = qd,
        i = 0,
        l = !1
    function o(y) {
        c()
        const C = r.subscribe(y)
        let f = !1
        return () => {
            f || ((f = !0), C(), d())
        }
    }
    function s() {
        r.notify()
    }
    function a() {
        g.onStateChange && g.onStateChange()
    }
    function u() {
        return l
    }
    function c() {
        i++, n || ((n = e.subscribe(a)), (r = J1()))
    }
    function d() {
        i--, n && i === 0 && (n(), (n = void 0), r.clear(), (r = qd))
    }
    function m() {
        l || ((l = !0), c())
    }
    function v() {
        l && ((l = !1), d())
    }
    const g = {
        addNestedSub: o,
        notifyNestedSubs: s,
        handleChangeWrapper: a,
        isSubscribed: u,
        trySubscribe: m,
        tryUnsubscribe: v,
        getListeners: () => r,
    }
    return g
}
var eS =
        typeof window < 'u' &&
        typeof window.document < 'u' &&
        typeof window.document.createElement < 'u',
    tS = typeof navigator < 'u' && navigator.product === 'ReactNative',
    nS = eS || tS ? st.useLayoutEffect : st.useEffect
function rS({
    store: e,
    context: t,
    children: n,
    serverState: r,
    stabilityCheck: i = 'once',
    identityFunctionCheck: l = 'once',
}) {
    const o = st.useMemo(() => {
            const u = Z1(e)
            return {
                store: e,
                subscription: u,
                getServerState: r ? () => r : void 0,
                stabilityCheck: i,
                identityFunctionCheck: l,
            }
        }, [e, r, i, l]),
        s = st.useMemo(() => e.getState(), [e])
    nS(() => {
        const { subscription: u } = o
        return (
            (u.onStateChange = u.notifyNestedSubs),
            u.trySubscribe(),
            s !== e.getState() && u.notifyNestedSubs(),
            () => {
                u.tryUnsubscribe(), (u.onStateChange = void 0)
            }
        )
    }, [o, s])
    const a = t || Mn
    return st.createElement(a.Provider, { value: o }, n)
}
var iS = rS
function dh(e = Mn) {
    const t = e === Mn ? uh : Yu(e),
        n = () => {
            const { store: r } = t()
            return r
        }
    return Object.assign(n, { withTypes: () => n }), n
}
var lS = dh()
function oS(e = Mn) {
    const t = e === Mn ? lS : dh(e),
        n = () => t().dispatch
    return Object.assign(n, { withTypes: () => n }), n
}
var Uo = oS()
Q1(H1.useSyncExternalStoreWithSelector)
function Re(e) {
    return `Minified Redux error #${e}; visit https://redux.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
var sS = (typeof Symbol == 'function' && Symbol.observable) || '@@observable',
    Jd = sS,
    Ds = () => Math.random().toString(36).substring(7).split('').join('.'),
    aS = {
        INIT: `@@redux/INIT${Ds()}`,
        REPLACE: `@@redux/REPLACE${Ds()}`,
        PROBE_UNKNOWN_ACTION: () => `@@redux/PROBE_UNKNOWN_ACTION${Ds()}`,
    },
    vo = aS
function Xu(e) {
    if (typeof e != 'object' || e === null) return !1
    let t = e
    for (; Object.getPrototypeOf(t) !== null; ) t = Object.getPrototypeOf(t)
    return Object.getPrototypeOf(e) === t || Object.getPrototypeOf(e) === null
}
function fh(e, t, n) {
    if (typeof e != 'function') throw new Error(Re(2))
    if (
        (typeof t == 'function' && typeof n == 'function') ||
        (typeof n == 'function' && typeof arguments[3] == 'function')
    )
        throw new Error(Re(0))
    if (
        (typeof t == 'function' && typeof n > 'u' && ((n = t), (t = void 0)),
        typeof n < 'u')
    ) {
        if (typeof n != 'function') throw new Error(Re(1))
        return n(fh)(e, t)
    }
    let r = e,
        i = t,
        l = new Map(),
        o = l,
        s = 0,
        a = !1
    function u() {
        o === l &&
            ((o = new Map()),
            l.forEach((C, f) => {
                o.set(f, C)
            }))
    }
    function c() {
        if (a) throw new Error(Re(3))
        return i
    }
    function d(C) {
        if (typeof C != 'function') throw new Error(Re(4))
        if (a) throw new Error(Re(5))
        let f = !0
        u()
        const p = s++
        return (
            o.set(p, C),
            function () {
                if (f) {
                    if (a) throw new Error(Re(6))
                    ;(f = !1), u(), o.delete(p), (l = null)
                }
            }
        )
    }
    function m(C) {
        if (!Xu(C)) throw new Error(Re(7))
        if (typeof C.type > 'u') throw new Error(Re(8))
        if (typeof C.type != 'string') throw new Error(Re(17))
        if (a) throw new Error(Re(9))
        try {
            ;(a = !0), (i = r(i, C))
        } finally {
            a = !1
        }
        return (
            (l = o).forEach((p) => {
                p()
            }),
            C
        )
    }
    function v(C) {
        if (typeof C != 'function') throw new Error(Re(10))
        ;(r = C), m({ type: vo.REPLACE })
    }
    function g() {
        const C = d
        return {
            subscribe(f) {
                if (typeof f != 'object' || f === null) throw new Error(Re(11))
                function p() {
                    const w = f
                    w.next && w.next(c())
                }
                return p(), { unsubscribe: C(p) }
            },
            [Jd]() {
                return this
            },
        }
    }
    return (
        m({ type: vo.INIT }),
        { dispatch: m, subscribe: d, getState: c, replaceReducer: v, [Jd]: g }
    )
}
function uS(e) {
    Object.keys(e).forEach((t) => {
        const n = e[t]
        if (typeof n(void 0, { type: vo.INIT }) > 'u') throw new Error(Re(12))
        if (typeof n(void 0, { type: vo.PROBE_UNKNOWN_ACTION() }) > 'u')
            throw new Error(Re(13))
    })
}
function cS(e) {
    const t = Object.keys(e),
        n = {}
    for (let l = 0; l < t.length; l++) {
        const o = t[l]
        typeof e[o] == 'function' && (n[o] = e[o])
    }
    const r = Object.keys(n)
    let i
    try {
        uS(n)
    } catch (l) {
        i = l
    }
    return function (o = {}, s) {
        if (i) throw i
        let a = !1
        const u = {}
        for (let c = 0; c < r.length; c++) {
            const d = r[c],
                m = n[d],
                v = o[d],
                g = m(v, s)
            if (typeof g > 'u') throw (s && s.type, new Error(Re(14)))
            ;(u[d] = g), (a = a || g !== v)
        }
        return (a = a || r.length !== Object.keys(o).length), a ? u : o
    }
}
function yo(...e) {
    return e.length === 0
        ? (t) => t
        : e.length === 1
        ? e[0]
        : e.reduce(
              (t, n) =>
                  (...r) =>
                      t(n(...r))
          )
}
function dS(...e) {
    return (t) => (n, r) => {
        const i = t(n, r)
        let l = () => {
            throw new Error(Re(15))
        }
        const o = { getState: i.getState, dispatch: (a, ...u) => l(a, ...u) },
            s = e.map((a) => a(o))
        return (l = yo(...s)(i.dispatch)), { ...i, dispatch: l }
    }
}
function fS(e) {
    return Xu(e) && 'type' in e && typeof e.type == 'string'
}
var ph = Symbol.for('immer-nothing'),
    Zd = Symbol.for('immer-draftable'),
    dt = Symbol.for('immer-state')
function _t(e, ...t) {
    throw new Error(
        `[Immer] minified error nr: ${e}. Full error at: https://bit.ly/3cXEKWf`
    )
}
var Br = Object.getPrototypeOf
function er(e) {
    return !!e && !!e[dt]
}
function Zt(e) {
    var t
    return e
        ? mh(e) ||
              Array.isArray(e) ||
              !!e[Zd] ||
              !!((t = e.constructor) != null && t[Zd]) ||
              Vo(e) ||
              Wo(e)
        : !1
}
var pS = Object.prototype.constructor.toString()
function mh(e) {
    if (!e || typeof e != 'object') return !1
    const t = Br(e)
    if (t === null) return !0
    const n = Object.hasOwnProperty.call(t, 'constructor') && t.constructor
    return n === Object
        ? !0
        : typeof n == 'function' && Function.toString.call(n) === pS
}
function wo(e, t) {
    Ho(e) === 0
        ? Reflect.ownKeys(e).forEach((n) => {
              t(n, e[n], e)
          })
        : e.forEach((n, r) => t(r, n, e))
}
function Ho(e) {
    const t = e[dt]
    return t ? t.type_ : Array.isArray(e) ? 1 : Vo(e) ? 2 : Wo(e) ? 3 : 0
}
function Aa(e, t) {
    return Ho(e) === 2 ? e.has(t) : Object.prototype.hasOwnProperty.call(e, t)
}
function hh(e, t, n) {
    const r = Ho(e)
    r === 2 ? e.set(t, n) : r === 3 ? e.add(n) : (e[t] = n)
}
function mS(e, t) {
    return e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t
}
function Vo(e) {
    return e instanceof Map
}
function Wo(e) {
    return e instanceof Set
}
function zn(e) {
    return e.copy_ || e.base_
}
function Fa(e, t) {
    if (Vo(e)) return new Map(e)
    if (Wo(e)) return new Set(e)
    if (Array.isArray(e)) return Array.prototype.slice.call(e)
    const n = mh(e)
    if (t === !0 || (t === 'class_only' && !n)) {
        const r = Object.getOwnPropertyDescriptors(e)
        delete r[dt]
        let i = Reflect.ownKeys(r)
        for (let l = 0; l < i.length; l++) {
            const o = i[l],
                s = r[o]
            s.writable === !1 && ((s.writable = !0), (s.configurable = !0)),
                (s.get || s.set) &&
                    (r[o] = {
                        configurable: !0,
                        writable: !0,
                        enumerable: s.enumerable,
                        value: e[o],
                    })
        }
        return Object.create(Br(e), r)
    } else {
        const r = Br(e)
        if (r !== null && n) return { ...e }
        const i = Object.create(r)
        return Object.assign(i, e)
    }
}
function qu(e, t = !1) {
    return (
        Qo(e) ||
            er(e) ||
            !Zt(e) ||
            (Ho(e) > 1 && (e.set = e.add = e.clear = e.delete = hS),
            Object.freeze(e),
            t && Object.entries(e).forEach(([n, r]) => qu(r, !0))),
        e
    )
}
function hS() {
    _t(2)
}
function Qo(e) {
    return Object.isFrozen(e)
}
var gS = {}
function tr(e) {
    const t = gS[e]
    return t || _t(0, e), t
}
var Gi
function gh() {
    return Gi
}
function vS(e, t) {
    return {
        drafts_: [],
        parent_: e,
        immer_: t,
        canAutoFreeze_: !0,
        unfinalizedDrafts_: 0,
    }
}
function ef(e, t) {
    t &&
        (tr('Patches'),
        (e.patches_ = []),
        (e.inversePatches_ = []),
        (e.patchListener_ = t))
}
function Ba(e) {
    $a(e), e.drafts_.forEach(yS), (e.drafts_ = null)
}
function $a(e) {
    e === Gi && (Gi = e.parent_)
}
function tf(e) {
    return (Gi = vS(Gi, e))
}
function yS(e) {
    const t = e[dt]
    t.type_ === 0 || t.type_ === 1 ? t.revoke_() : (t.revoked_ = !0)
}
function nf(e, t) {
    t.unfinalizedDrafts_ = t.drafts_.length
    const n = t.drafts_[0]
    return (
        e !== void 0 && e !== n
            ? (n[dt].modified_ && (Ba(t), _t(4)),
              Zt(e) && ((e = So(t, e)), t.parent_ || xo(t, e)),
              t.patches_ &&
                  tr('Patches').generateReplacementPatches_(
                      n[dt].base_,
                      e,
                      t.patches_,
                      t.inversePatches_
                  ))
            : (e = So(t, n, [])),
        Ba(t),
        t.patches_ && t.patchListener_(t.patches_, t.inversePatches_),
        e !== ph ? e : void 0
    )
}
function So(e, t, n) {
    if (Qo(t)) return t
    const r = t[dt]
    if (!r) return wo(t, (i, l) => rf(e, r, t, i, l, n)), t
    if (r.scope_ !== e) return t
    if (!r.modified_) return xo(e, r.base_, !0), r.base_
    if (!r.finalized_) {
        ;(r.finalized_ = !0), r.scope_.unfinalizedDrafts_--
        const i = r.copy_
        let l = i,
            o = !1
        r.type_ === 3 && ((l = new Set(i)), i.clear(), (o = !0)),
            wo(l, (s, a) => rf(e, r, i, s, a, n, o)),
            xo(e, i, !1),
            n &&
                e.patches_ &&
                tr('Patches').generatePatches_(
                    r,
                    n,
                    e.patches_,
                    e.inversePatches_
                )
    }
    return r.copy_
}
function rf(e, t, n, r, i, l, o) {
    if (er(i)) {
        const s =
                l && t && t.type_ !== 3 && !Aa(t.assigned_, r)
                    ? l.concat(r)
                    : void 0,
            a = So(e, i, s)
        if ((hh(n, r, a), er(a))) e.canAutoFreeze_ = !1
        else return
    } else o && n.add(i)
    if (Zt(i) && !Qo(i)) {
        if (!e.immer_.autoFreeze_ && e.unfinalizedDrafts_ < 1) return
        So(e, i),
            (!t || !t.scope_.parent_) &&
                typeof r != 'symbol' &&
                Object.prototype.propertyIsEnumerable.call(n, r) &&
                xo(e, i)
    }
}
function xo(e, t, n = !1) {
    !e.parent_ && e.immer_.autoFreeze_ && e.canAutoFreeze_ && qu(t, n)
}
function wS(e, t) {
    const n = Array.isArray(e),
        r = {
            type_: n ? 1 : 0,
            scope_: t ? t.scope_ : gh(),
            modified_: !1,
            finalized_: !1,
            assigned_: {},
            parent_: t,
            base_: e,
            draft_: null,
            copy_: null,
            revoke_: null,
            isManual_: !1,
        }
    let i = r,
        l = Ju
    n && ((i = [r]), (l = Ui))
    const { revoke: o, proxy: s } = Proxy.revocable(i, l)
    return (r.draft_ = s), (r.revoke_ = o), s
}
var Ju = {
        get(e, t) {
            if (t === dt) return e
            const n = zn(e)
            if (!Aa(n, t)) return SS(e, n, t)
            const r = n[t]
            return e.finalized_ || !Zt(r)
                ? r
                : r === zs(e.base_, t)
                ? (js(e), (e.copy_[t] = Ua(r, e)))
                : r
        },
        has(e, t) {
            return t in zn(e)
        },
        ownKeys(e) {
            return Reflect.ownKeys(zn(e))
        },
        set(e, t, n) {
            const r = vh(zn(e), t)
            if (r != null && r.set) return r.set.call(e.draft_, n), !0
            if (!e.modified_) {
                const i = zs(zn(e), t),
                    l = i == null ? void 0 : i[dt]
                if (l && l.base_ === n)
                    return (e.copy_[t] = n), (e.assigned_[t] = !1), !0
                if (mS(n, i) && (n !== void 0 || Aa(e.base_, t))) return !0
                js(e), Ga(e)
            }
            return (
                (e.copy_[t] === n && (n !== void 0 || t in e.copy_)) ||
                    (Number.isNaN(n) && Number.isNaN(e.copy_[t])) ||
                    ((e.copy_[t] = n), (e.assigned_[t] = !0)),
                !0
            )
        },
        deleteProperty(e, t) {
            return (
                zs(e.base_, t) !== void 0 || t in e.base_
                    ? ((e.assigned_[t] = !1), js(e), Ga(e))
                    : delete e.assigned_[t],
                e.copy_ && delete e.copy_[t],
                !0
            )
        },
        getOwnPropertyDescriptor(e, t) {
            const n = zn(e),
                r = Reflect.getOwnPropertyDescriptor(n, t)
            return (
                r && {
                    writable: !0,
                    configurable: e.type_ !== 1 || t !== 'length',
                    enumerable: r.enumerable,
                    value: n[t],
                }
            )
        },
        defineProperty() {
            _t(11)
        },
        getPrototypeOf(e) {
            return Br(e.base_)
        },
        setPrototypeOf() {
            _t(12)
        },
    },
    Ui = {}
wo(Ju, (e, t) => {
    Ui[e] = function () {
        return (arguments[0] = arguments[0][0]), t.apply(this, arguments)
    }
})
Ui.deleteProperty = function (e, t) {
    return Ui.set.call(this, e, t, void 0)
}
Ui.set = function (e, t, n) {
    return Ju.set.call(this, e[0], t, n, e[0])
}
function zs(e, t) {
    const n = e[dt]
    return (n ? zn(n) : e)[t]
}
function SS(e, t, n) {
    var i
    const r = vh(t, n)
    return r
        ? 'value' in r
            ? r.value
            : (i = r.get) == null
            ? void 0
            : i.call(e.draft_)
        : void 0
}
function vh(e, t) {
    if (!(t in e)) return
    let n = Br(e)
    for (; n; ) {
        const r = Object.getOwnPropertyDescriptor(n, t)
        if (r) return r
        n = Br(n)
    }
}
function Ga(e) {
    e.modified_ || ((e.modified_ = !0), e.parent_ && Ga(e.parent_))
}
function js(e) {
    e.copy_ || (e.copy_ = Fa(e.base_, e.scope_.immer_.useStrictShallowCopy_))
}
var xS = class {
    constructor(e) {
        ;(this.autoFreeze_ = !0),
            (this.useStrictShallowCopy_ = !1),
            (this.produce = (t, n, r) => {
                if (typeof t == 'function' && typeof n != 'function') {
                    const l = n
                    n = t
                    const o = this
                    return function (a = l, ...u) {
                        return o.produce(a, (c) => n.call(this, c, ...u))
                    }
                }
                typeof n != 'function' && _t(6),
                    r !== void 0 && typeof r != 'function' && _t(7)
                let i
                if (Zt(t)) {
                    const l = tf(this),
                        o = Ua(t, void 0)
                    let s = !0
                    try {
                        ;(i = n(o)), (s = !1)
                    } finally {
                        s ? Ba(l) : $a(l)
                    }
                    return ef(l, r), nf(i, l)
                } else if (!t || typeof t != 'object') {
                    if (
                        ((i = n(t)),
                        i === void 0 && (i = t),
                        i === ph && (i = void 0),
                        this.autoFreeze_ && qu(i, !0),
                        r)
                    ) {
                        const l = [],
                            o = []
                        tr('Patches').generateReplacementPatches_(t, i, l, o),
                            r(l, o)
                    }
                    return i
                } else _t(1, t)
            }),
            (this.produceWithPatches = (t, n) => {
                if (typeof t == 'function')
                    return (o, ...s) =>
                        this.produceWithPatches(o, (a) => t(a, ...s))
                let r, i
                return [
                    this.produce(t, n, (o, s) => {
                        ;(r = o), (i = s)
                    }),
                    r,
                    i,
                ]
            }),
            typeof (e == null ? void 0 : e.autoFreeze) == 'boolean' &&
                this.setAutoFreeze(e.autoFreeze),
            typeof (e == null ? void 0 : e.useStrictShallowCopy) == 'boolean' &&
                this.setUseStrictShallowCopy(e.useStrictShallowCopy)
    }
    createDraft(e) {
        Zt(e) || _t(8), er(e) && (e = ES(e))
        const t = tf(this),
            n = Ua(e, void 0)
        return (n[dt].isManual_ = !0), $a(t), n
    }
    finishDraft(e, t) {
        const n = e && e[dt]
        ;(!n || !n.isManual_) && _t(9)
        const { scope_: r } = n
        return ef(r, t), nf(void 0, r)
    }
    setAutoFreeze(e) {
        this.autoFreeze_ = e
    }
    setUseStrictShallowCopy(e) {
        this.useStrictShallowCopy_ = e
    }
    applyPatches(e, t) {
        let n
        for (n = t.length - 1; n >= 0; n--) {
            const i = t[n]
            if (i.path.length === 0 && i.op === 'replace') {
                e = i.value
                break
            }
        }
        n > -1 && (t = t.slice(n + 1))
        const r = tr('Patches').applyPatches_
        return er(e) ? r(e, t) : this.produce(e, (i) => r(i, t))
    }
}
function Ua(e, t) {
    const n = Vo(e)
        ? tr('MapSet').proxyMap_(e, t)
        : Wo(e)
        ? tr('MapSet').proxySet_(e, t)
        : wS(e, t)
    return (t ? t.scope_ : gh()).drafts_.push(n), n
}
function ES(e) {
    return er(e) || _t(10, e), yh(e)
}
function yh(e) {
    if (!Zt(e) || Qo(e)) return e
    const t = e[dt]
    let n
    if (t) {
        if (!t.modified_) return t.base_
        ;(t.finalized_ = !0), (n = Fa(e, t.scope_.immer_.useStrictShallowCopy_))
    } else n = Fa(e, !0)
    return (
        wo(n, (r, i) => {
            hh(n, r, yh(i))
        }),
        t && (t.finalized_ = !1),
        n
    )
}
var ft = new xS(),
    wh = ft.produce
ft.produceWithPatches.bind(ft)
ft.setAutoFreeze.bind(ft)
ft.setUseStrictShallowCopy.bind(ft)
ft.applyPatches.bind(ft)
ft.createDraft.bind(ft)
ft.finishDraft.bind(ft)
function Sh(e) {
    return ({ dispatch: n, getState: r }) =>
        (i) =>
        (l) =>
            typeof l == 'function' ? l(n, r, e) : i(l)
}
var CS = Sh(),
    TS = Sh,
    PS =
        typeof window < 'u' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
            : function () {
                  if (arguments.length !== 0)
                      return typeof arguments[0] == 'object'
                          ? yo
                          : yo.apply(null, arguments)
              }
function lf(e, t) {
    function n(...r) {
        if (t) {
            let i = t(...r)
            if (!i) throw new Error(Lt(0))
            return {
                type: e,
                payload: i.payload,
                ...('meta' in i && { meta: i.meta }),
                ...('error' in i && { error: i.error }),
            }
        }
        return { type: e, payload: r[0] }
    }
    return (
        (n.toString = () => `${e}`),
        (n.type = e),
        (n.match = (r) => fS(r) && r.type === e),
        n
    )
}
var xh = class ui extends Array {
    constructor(...t) {
        super(...t), Object.setPrototypeOf(this, ui.prototype)
    }
    static get [Symbol.species]() {
        return ui
    }
    concat(...t) {
        return super.concat.apply(this, t)
    }
    prepend(...t) {
        return t.length === 1 && Array.isArray(t[0])
            ? new ui(...t[0].concat(this))
            : new ui(...t.concat(this))
    }
}
function of(e) {
    return Zt(e) ? wh(e, () => {}) : e
}
function sf(e, t, n) {
    if (e.has(t)) {
        let i = e.get(t)
        return n.update && ((i = n.update(i, t, e)), e.set(t, i)), i
    }
    if (!n.insert) throw new Error(Lt(10))
    const r = n.insert(t, e)
    return e.set(t, r), r
}
function _S(e) {
    return typeof e == 'boolean'
}
var MS = () =>
        function (t) {
            const {
                thunk: n = !0,
                immutableCheck: r = !0,
                serializableCheck: i = !0,
                actionCreatorCheck: l = !0,
            } = t ?? {}
            let o = new xh()
            return n && (_S(n) ? o.push(CS) : o.push(TS(n.extraArgument))), o
        },
    kS = 'RTK_autoBatch',
    Eh = (e) => (t) => {
        setTimeout(t, e)
    },
    LS =
        typeof window < 'u' && window.requestAnimationFrame
            ? window.requestAnimationFrame
            : Eh(10),
    NS =
        (e = { type: 'raf' }) =>
        (t) =>
        (...n) => {
            const r = t(...n)
            let i = !0,
                l = !1,
                o = !1
            const s = new Set(),
                a =
                    e.type === 'tick'
                        ? queueMicrotask
                        : e.type === 'raf'
                        ? LS
                        : e.type === 'callback'
                        ? e.queueNotification
                        : Eh(e.timeout),
                u = () => {
                    ;(o = !1), l && ((l = !1), s.forEach((c) => c()))
                }
            return Object.assign({}, r, {
                subscribe(c) {
                    const d = () => i && c(),
                        m = r.subscribe(d)
                    return (
                        s.add(c),
                        () => {
                            m(), s.delete(c)
                        }
                    )
                },
                dispatch(c) {
                    var d
                    try {
                        return (
                            (i = !(
                                (d = c == null ? void 0 : c.meta) != null &&
                                d[kS]
                            )),
                            (l = !i),
                            l && (o || ((o = !0), a(u))),
                            r.dispatch(c)
                        )
                    } finally {
                        i = !0
                    }
                },
            })
        },
    OS = (e) =>
        function (n) {
            const { autoBatch: r = !0 } = n ?? {}
            let i = new xh(e)
            return r && i.push(NS(typeof r == 'object' ? r : void 0)), i
        }
function IS(e) {
    const t = MS(),
        {
            reducer: n = void 0,
            middleware: r,
            devTools: i = !0,
            preloadedState: l = void 0,
            enhancers: o = void 0,
        } = e || {}
    let s
    if (typeof n == 'function') s = n
    else if (Xu(n)) s = cS(n)
    else throw new Error(Lt(1))
    let a
    typeof r == 'function' ? (a = r(t)) : (a = t())
    let u = yo
    i && (u = PS({ trace: !1, ...(typeof i == 'object' && i) }))
    const c = dS(...a),
        d = OS(c)
    let m = typeof o == 'function' ? o(d) : d()
    const v = u(...m)
    return fh(s, l, v)
}
function Ch(e) {
    const t = {},
        n = []
    let r
    const i = {
        addCase(l, o) {
            const s = typeof l == 'string' ? l : l.type
            if (!s) throw new Error(Lt(28))
            if (s in t) throw new Error(Lt(29))
            return (t[s] = o), i
        },
        addMatcher(l, o) {
            return n.push({ matcher: l, reducer: o }), i
        },
        addDefaultCase(l) {
            return (r = l), i
        },
    }
    return e(i), [t, n, r]
}
function bS(e) {
    return typeof e == 'function'
}
function RS(e, t) {
    let [n, r, i] = Ch(t),
        l
    if (bS(e)) l = () => of(e())
    else {
        const s = of(e)
        l = () => s
    }
    function o(s = l(), a) {
        let u = [
            n[a.type],
            ...r.filter(({ matcher: c }) => c(a)).map(({ reducer: c }) => c),
        ]
        return (
            u.filter((c) => !!c).length === 0 && (u = [i]),
            u.reduce((c, d) => {
                if (d)
                    if (er(c)) {
                        const v = d(c, a)
                        return v === void 0 ? c : v
                    } else {
                        if (Zt(c)) return wh(c, (m) => d(m, a))
                        {
                            const m = d(c, a)
                            if (m === void 0) {
                                if (c === null) return c
                                throw new Error(Lt(9))
                            }
                            return m
                        }
                    }
                return c
            }, s)
        )
    }
    return (o.getInitialState = l), o
}
var DS = Symbol.for('rtk-slice-createasyncthunk')
function zS(e, t) {
    return `${e}/${t}`
}
function jS({ creators: e } = {}) {
    var n
    const t = (n = e == null ? void 0 : e.asyncThunk) == null ? void 0 : n[DS]
    return function (i) {
        const { name: l, reducerPath: o = l } = i
        if (!l) throw new Error(Lt(11))
        typeof process < 'u'
        const s =
                (typeof i.reducers == 'function'
                    ? i.reducers(FS())
                    : i.reducers) || {},
            a = Object.keys(s),
            u = {
                sliceCaseReducersByName: {},
                sliceCaseReducersByType: {},
                actionCreators: {},
                sliceMatchers: [],
            },
            c = {
                addCase(h, w) {
                    const T = typeof h == 'string' ? h : h.type
                    if (!T) throw new Error(Lt(12))
                    if (T in u.sliceCaseReducersByType) throw new Error(Lt(13))
                    return (u.sliceCaseReducersByType[T] = w), c
                },
                addMatcher(h, w) {
                    return u.sliceMatchers.push({ matcher: h, reducer: w }), c
                },
                exposeAction(h, w) {
                    return (u.actionCreators[h] = w), c
                },
                exposeCaseReducer(h, w) {
                    return (u.sliceCaseReducersByName[h] = w), c
                },
            }
        a.forEach((h) => {
            const w = s[h],
                T = {
                    reducerName: h,
                    type: zS(l, h),
                    createNotation: typeof i.reducers == 'function',
                }
            $S(w) ? US(T, w, c, t) : BS(T, w, c)
        })
        function d() {
            const [h = {}, w = [], T = void 0] =
                    typeof i.extraReducers == 'function'
                        ? Ch(i.extraReducers)
                        : [i.extraReducers],
                S = { ...h, ...u.sliceCaseReducersByType }
            return RS(i.initialState, (R) => {
                for (let M in S) R.addCase(M, S[M])
                for (let M of u.sliceMatchers)
                    R.addMatcher(M.matcher, M.reducer)
                for (let M of w) R.addMatcher(M.matcher, M.reducer)
                T && R.addDefaultCase(T)
            })
        }
        const m = (h) => h,
            v = new Map()
        let g
        function y(h, w) {
            return g || (g = d()), g(h, w)
        }
        function C() {
            return g || (g = d()), g.getInitialState()
        }
        function f(h, w = !1) {
            function T(R) {
                let M = R[h]
                return typeof M > 'u' && w && (M = C()), M
            }
            function S(R = m) {
                const M = sf(v, w, { insert: () => new WeakMap() })
                return sf(M, R, {
                    insert: () => {
                        const O = {}
                        for (const [k, A] of Object.entries(i.selectors ?? {}))
                            O[k] = AS(A, R, C, w)
                        return O
                    },
                })
            }
            return {
                reducerPath: h,
                getSelectors: S,
                get selectors() {
                    return S(T)
                },
                selectSlice: T,
            }
        }
        const p = {
            name: l,
            reducer: y,
            actions: u.actionCreators,
            caseReducers: u.sliceCaseReducersByName,
            getInitialState: C,
            ...f(o),
            injectInto(h, { reducerPath: w, ...T } = {}) {
                const S = w ?? o
                return (
                    h.inject({ reducerPath: S, reducer: y }, T),
                    { ...p, ...f(S, !0) }
                )
            },
        }
        return p
    }
}
function AS(e, t, n, r) {
    function i(l, ...o) {
        let s = t(l)
        return typeof s > 'u' && r && (s = n()), e(s, ...o)
    }
    return (i.unwrapped = e), i
}
var Zu = jS()
function FS() {
    function e(t, n) {
        return { _reducerDefinitionType: 'asyncThunk', payloadCreator: t, ...n }
    }
    return (
        (e.withTypes = () => e),
        {
            reducer(t) {
                return Object.assign(
                    {
                        [t.name](...n) {
                            return t(...n)
                        },
                    }[t.name],
                    { _reducerDefinitionType: 'reducer' }
                )
            },
            preparedReducer(t, n) {
                return {
                    _reducerDefinitionType: 'reducerWithPrepare',
                    prepare: t,
                    reducer: n,
                }
            },
            asyncThunk: e,
        }
    )
}
function BS({ type: e, reducerName: t, createNotation: n }, r, i) {
    let l, o
    if ('reducer' in r) {
        if (n && !GS(r)) throw new Error(Lt(17))
        ;(l = r.reducer), (o = r.prepare)
    } else l = r
    i.addCase(e, l)
        .exposeCaseReducer(t, l)
        .exposeAction(t, o ? lf(e, o) : lf(e))
}
function $S(e) {
    return e._reducerDefinitionType === 'asyncThunk'
}
function GS(e) {
    return e._reducerDefinitionType === 'reducerWithPrepare'
}
function US({ type: e, reducerName: t }, n, r, i) {
    if (!i) throw new Error(Lt(18))
    const {
            payloadCreator: l,
            fulfilled: o,
            pending: s,
            rejected: a,
            settled: u,
            options: c,
        } = n,
        d = i(e, l, c)
    r.exposeAction(t, d),
        o && r.addCase(d.fulfilled, o),
        s && r.addCase(d.pending, s),
        a && r.addCase(d.rejected, a),
        u && r.addMatcher(d.settled, u),
        r.exposeCaseReducer(t, {
            fulfilled: o || Pl,
            pending: s || Pl,
            rejected: a || Pl,
            settled: u || Pl,
        })
}
function Pl() {}
function Lt(e) {
    return `Minified Redux Toolkit error #${e}; visit https://redux-toolkit.js.org/Errors?code=${e} for the full message or use the non-minified dev environment for full errors. `
}
const HS = { no: '01' },
    Th = Zu({
        name: 'plantNo',
        initialState: HS,
        reducers: {
            setNo(e, t) {
                e.no = t.payload
            },
        },
    }),
    ec = Th.actions,
    VS = { isSign: !1 },
    Ph = Zu({
        name: 'auth',
        initialState: VS,
        reducers: {
            login(e) {
                e.isSign = !0
            },
            logout(e) {
                e.isSign = !1
            },
        },
    }),
    WS = Ph.actions,
    QS = { isShow: !1 },
    _h = Zu({
        name: 'auth',
        initialState: QS,
        reducers: {
            onShow(e) {
                e.isShow = !0
            },
            onClose(e) {
                e.isShow = !1
            },
        },
    })
_h.actions
const KS = IS({
        reducer: {
            isAuth: Ph.reducer,
            plantNo: Th.reducer,
            showBar: _h.reducer,
        },
    }),
    Mh = () =>
        x.jsx(x.Fragment, {
            children: x.jsxs('div', {
                className: ' bg-black flex flex-col',
                children: [
                    x.jsx('p', {
                        className: 'content-center mx-auto my-28 w-[90%]',
                        children: 'I n v a s i v e - P l a n t s @ 2 0 2 4',
                    }),
                    x.jsx('img', {
                        src: '/img/End.png',
                        className: 'm-auto w-[80%]',
                        alt: 'END',
                    }),
                ],
            }),
        }),
    YS = ({ showModal: e, onBarClose: t }) => {
        const n = Uo(),
            r = Bo()
        let i =
                'py-1 text-lightBlue hover:text-yy hover:underline hover:underline-offset-8 ',
            l = 'py-1 text-yy  underline underline-offset-8'
        function o(s) {
            s.preventDefault(), t(), n(ec.setNo('01')), r('/plants')
        }
        return x.jsx(x.Fragment, {
            children: x.jsx(Go, {
                open: e,
                children: x.jsxs('div', {
                    className: 'mx-auto my-auto',
                    children: [
                        x.jsx('button', {
                            className:
                                ' absolute w-10 h-10 top-5 right-4 t text-4xl',
                            onClick: () => t(),
                            children: 'X',
                        }),
                        x.jsxs('div', {
                            className: 'flex flex-col',
                            children: [
                                x.jsx(Jn, {
                                    to: '/',
                                    onClick: (s) => {
                                        s.preventDefault(), r('/'), t()
                                    },
                                    children: x.jsx('img', {
                                        alt: 'LOGO',
                                        src: '/img/IMG_logo02.png',
                                        className:
                                            'mx-auto w-36 pb-4 cursor-pointer ',
                                    }),
                                }),
                                x.jsxs('div', {
                                    className: 'flex flex-col py-1 text-xl',
                                    children: [
                                        x.jsx(hn, {
                                            to: '/about',
                                            onClick: (s) => {
                                                s.preventDefault(),
                                                    r('/about'),
                                                    t()
                                            },
                                            className: ({ isActive: s }) =>
                                                s ? l : i,
                                            children: '關於我們',
                                        }),
                                        x.jsx(hn, {
                                            to: '/plants',
                                            onClick: o,
                                            className: ({ isActive: s }) =>
                                                s ? l : i,
                                            children: '圖鑑',
                                        }),
                                        x.jsx(hn, {
                                            to: '/game',
                                            onClick: (s) => {
                                                s.preventDefault(),
                                                    r('/game'),
                                                    t()
                                            },
                                            className: ({ isActive: s }) =>
                                                s ? l : i,
                                            children: '遊戲',
                                        }),
                                        x.jsx(hn, {
                                            to: '/special',
                                            onClick: (s) => {
                                                s.preventDefault(),
                                                    r('/special'),
                                                    t()
                                            },
                                            className: ({ isActive: s }) =>
                                                s ? l : i,
                                            children: '宣傳',
                                        }),
                                    ],
                                }),
                            ],
                        }),
                    ],
                }),
            }),
        })
    },
    XS = ({ onShowBar: e }) => {
        const t = Uo(),
            n = Bo()
        let r =
                ' text-lg mr-4 duration-200 text-lightBlue hover:underline hover:underline-offset-8 ',
            i = 'text-lg mr-4 text-yy underline underline-offset-8 '
        function l(o) {
            o.preventDefault(), t(ec.setNo('01')), n('/plants')
        }
        return x.jsxs(x.Fragment, {
            children: [
                x.jsx('header', {
                    className:
                        'fixed justify-between p-5 items-center w-full overflow-hidden flex max-md:hidden z-[5]',
                    children: x.jsxs('ul', {
                        className: ' inline-flex items-center',
                        children: [
                            x.jsx(Jn, {
                                to: '/',
                                children: x.jsx('img', {
                                    src: '/img/IMG_logo02.png',
                                    className:
                                        'w-24 me-7 relative top-px cursor-pointer',
                                    alt: 'LOGO',
                                }),
                            }),
                            x.jsx(hn, {
                                to: '/about',
                                className: ({ isActive: o }) => (o ? i : r),
                                children: '關於我們',
                            }),
                            x.jsx(hn, {
                                to: '/plants',
                                className: ({ isActive: o }) => (o ? i : r),
                                onClick: l,
                                children: '圖鑑',
                            }),
                            x.jsx(hn, {
                                to: '/game',
                                className: ({ isActive: o }) => (o ? i : r),
                                children: '遊戲',
                            }),
                            x.jsx(hn, {
                                className: ({ isActive: o }) => (o ? i : r),
                                to: '/special',
                                children: '宣傳',
                            }),
                        ],
                    }),
                }),
                x.jsxs('header', {
                    className:
                        'hidden max-md:flex justify-center p-20 w-full border-b-4 border-yy bg-black',
                    children: [
                        x.jsx('button', {
                            className: ' absolute mt-auto right-5',
                            type: 'button',
                            onClick: () => e(),
                            children: x.jsx('img', {
                                src: '/img/IMG_bar.png',
                                alt: 'bar',
                            }),
                        }),
                        x.jsx(Jn, {
                            to: '/',
                            children: x.jsx('img', {
                                alt: 'LOGO',
                                src: '/img/IMG_logo03.png',
                                className:
                                    'w-40 relative top-px cursor-pointer ',
                            }),
                        }),
                    ],
                }),
            ],
        })
    },
    kh = ({ type: e = 'button', children: t, ...n }) =>
        x.jsx(x.Fragment, {
            children: x.jsx('button', {
                type: e,
                className:
                    'duration-200 mr-2 cursor-pointer px-6 rounded-lg border-none bg-purple hover:bg-hoverPup hover:text-tahiti',
                ...n,
                children: t,
            }),
        }),
    Lh = () => {
        const e = Uo(),
            t = Bo(),
            [n, r] = N.useState(!1),
            i = N.useCallback(function () {
                console.log('show'), r(!0)
            }, []),
            l = N.useCallback(function () {
                console.log('show'), r(!1)
            }, [])
        function o() {
            window.scrollTo(0, 0)
        }
        return x.jsxs(x.Fragment, {
            children: [
                x.jsx(XS, { onShowBar: i }),
                x.jsx(kh, {
                    className:
                        'fixed z-20 duration-300 left-10 bottom-10 rotate-90 h-10 w-10 rounded-lg hover:text-yy shadow-2m hover:shadow-3m',
                    onClick: o,
                    children: '<',
                }),
                n &&
                    x.jsx(YS, {
                        showModal: n,
                        onBarClose: l,
                        onSignOut: () => {
                            e(WS.logout()), l(), t('/')
                        },
                    }),
            ],
        })
    },
    qS = () =>
        x.jsxs(x.Fragment, {
            children: [x.jsx(Lh, {}), x.jsx(I0, {}), x.jsx(Mh, {})],
        })
function af() {
    const e = Math.floor(document.documentElement.clientWidth / 250),
        t = X1((u) => u.plantNo.no),
        n = Uo(),
        r = S0(),
        i = Um
    console.log(t), console.log(r.plantNo)
    const l = r.plantNo !== void 0 ? r.plantNo : t,
        o = i.findIndex((u) => u.no === l)
    console.log(o)
    let s = i[o]
    function a(u, c, d) {
        d.preventDefault(), n(ec.setNo(c))
    }
    return x.jsx(x.Fragment, {
        children: x.jsxs(Gm, {
            buttons: x.jsx(Ku, {
                modules: [Qm, Km, pw, Ym],
                spaceBetween: 1,
                slidesPerView: e,
                navigation: !0,
                pagination: { clickable: !0 },
                scrollbar: { draggable: !0 },
                children: i.map((u, c) =>
                    x.jsx(
                        An,
                        {
                            children: x.jsx(
                                Jn,
                                {
                                    to: `/plants/${u.no}`,
                                    className: 'mx-20',
                                    onClick: () => a(c, u.no, event),
                                    children: x.jsx('img', {
                                        src: u.img,
                                        className:
                                            'w-40 mx-20 my-0 max-md:mx-auto',
                                        alt: u.name,
                                    }),
                                },
                                u.no
                            ),
                        },
                        u.no
                    )
                ),
            }),
            children: [
                i.length === 0 &&
                    x.jsx(x.Fragment, {
                        children: x.jsx('h2', { children: '獲取失敗' }),
                    }),
                x.jsxs('main', {
                    className:
                        'inline-flex max-md:flex-col w-full justify-center my-28 max-lg:mt-20 max-md:mt-5 max-xl:mb-6 ',
                    children: [
                        x.jsx('div', {
                            className: ' relative w-1/2 max-md:w-full',
                            children: x.jsx('img', {
                                src: s.img,
                                className: 'mx-auto w-2/3',
                                alt: s.name,
                            }),
                        }),
                        x.jsxs('div', {
                            className:
                                'flex flex-col justify-center mx-auto my-auto px-12 max-md:px-0 items-start w-3/4',
                            children: [
                                x.jsxs('h3', {
                                    className:
                                        'flex text-left text-xl leading-loose',
                                    children: [
                                        s.name,
                                        x.jsx('br', {}),
                                        s.genus,
                                        ' ',
                                        s.type,
                                    ],
                                }),
                                x.jsxs('h1', {
                                    className:
                                        'italic my-5 text-2xl leading-loose',
                                    children: ['“ ', s.title, ' ”'],
                                }),
                                x.jsx('h3', {
                                    className: 'mb-8',
                                    children: s.desc,
                                }),
                            ],
                        }),
                    ],
                }),
            ],
        }),
    })
}
const JS = ({ timeout: e, onTimeout: t, mode: n }) => {
        const [r, i] = N.useState(e)
        return (
            N.useEffect(() => {
                const l = setInterval(() => {
                    i((o) => o - 100)
                }, 100)
                return () => {
                    clearInterval(l)
                }
            }, []),
            N.useEffect(() => {
                const l = setTimeout(t, e)
                return () => {
                    clearTimeout(l)
                }
            }, [e, t]),
            x.jsx(x.Fragment, {
                children: x.jsx('progress', {
                    id: 'question-time',
                    max: e,
                    className: `${n} p-0 m-0 relative bottom-0 left-0 w-full  `,
                    value: r,
                }),
            })
        )
    },
    ZS = ({
        quiz: e,
        onAnswer: t,
        answerState: n,
        userAnswer: r,
        onTimeout: i,
    }) => {
        const l = N.useRef()
        return (
            n === '' &&
                ((l.current = [...e.options]),
                l.current.sort(() => Math.random() - 0.5)),
            x.jsx(x.Fragment, {
                children: x.jsxs('div', {
                    className: 'flex flex-col w-full mx-auto',
                    children: [
                        x.jsx('img', {
                            className:
                                'w-[19%] max-md:w-1/2 mx-auto mt-8 max-xl:mt-14 max-md:my-3',
                            src: e.img,
                            alt: e.plant,
                        }),
                        x.jsxs('div', {
                            className: 'flex flex-col mx-auto my-0 w-5/6',
                            children: [
                                x.jsx('h1', {
                                    className: 'text-xl leading-[2]',
                                    children: e.question,
                                }),
                                x.jsxs('ul', {
                                    className:
                                        'flex flex-col mt-0 mb-10 w-3/4 mx-auto max-sm:mt-5',
                                    children: [
                                        l.current.map((o, s) => {
                                            const a = r === o
                                            let u =
                                                'w-1/2 max-md:w-3/4 px-2 mx-auto rounded-lg mt-6 shadow-3i hover:shadow-4i hover:bg-hoverPup max-ss:hover:bg-purple'
                                            return (
                                                n === 'answer' && a
                                                    ? (u +=
                                                          ' bg-deepBlue pointer-events-none')
                                                    : n === 'wrong' &&
                                                      o === e.answer
                                                    ? (u +=
                                                          ' bg-red pointer-events-none')
                                                    : n === 'correct' && a
                                                    ? (u +=
                                                          ' bg-green pointer-events-none')
                                                    : (u += ' bg-purple'),
                                                x.jsx(
                                                    'button',
                                                    {
                                                        className: u,
                                                        onClick: () => t(o),
                                                        disabled: n !== '',
                                                        children: x.jsx('li', {
                                                            className:
                                                                'hover:text-yy max-ss:hover:text-lightBlue',
                                                            children: o,
                                                        }),
                                                    },
                                                    s
                                                )
                                            )
                                        }),
                                        n === 'wrong' &&
                                            x.jsx('h1', {
                                                className: 'text-red mx-3 mt-8',
                                                children: e.difficulty,
                                            }),
                                    ],
                                }),
                            ],
                        }),
                        x.jsx(
                            JS,
                            {
                                mode: n,
                                onTimeout: n === '' ? i : null,
                                timeout: 12e3,
                            },
                            n
                        ),
                    ],
                }),
            })
        )
    },
    ex = ({ score: e, onStart: t }) => {
        let n,
            r = 'mx-auto'
        const i = JSON.parse(localStorage.getItem('HightScore')).score
        return (
            e >= 90
                ? ((n = '/img/IMG_005.jpg'), (r += ' w-1/2 max-md:w-5/6'))
                : e >= 60
                ? ((n = '/img/IMG_NO01.png'), (r += ' w-1/4 max-md:w-4/5'))
                : e >= 20
                ? ((n = '/img/IMG_NO04.png'), (r += ' w-1/4 max-md:w-4/5'))
                : e >= 0 &&
                  ((n = '/img/IMG_NO15.png'), (r += ' w-1/5 max-md:w-4/5')),
            x.jsxs(x.Fragment, {
                children: [
                    x.jsx('img', { src: n, alt: 'complete', className: r }),
                    x.jsxs('div', {
                        className: 'my-10 max-md:my-10',
                        children: [
                            x.jsxs('h2', {
                                className: 'text-2xl leading-10',
                                children: [
                                    '遊戲結束',
                                    x.jsx('br', {}),
                                    '你獲得了 ',
                                    e,
                                    ' 分',
                                    x.jsx('br', {}),
                                    '最高得分為 ',
                                    i,
                                ],
                            }),
                            x.jsx('button', {
                                onClick: t,
                                className:
                                    ' my-12 max-md:my-10 px-5 shadow-2m hover:shadow-3m hover:text-yy',
                                children: '重新開始遊戲',
                            }),
                        ],
                    }),
                ],
            })
        )
    },
    tx = ({ questions: e }) => {
        const [t, n] = N.useState(e),
            [r, i] = N.useState([]),
            [l, o] = N.useState(''),
            [s, a] = N.useState(0),
            u = l === '' ? r.length : r.length - 1,
            c = t[u],
            d = u > 9,
            m = JSON.parse(localStorage.getItem('HightScore')),
            v = N.useCallback(
                function (f) {
                    o('answer'), i((h) => [...h, f])
                    let p = 2e3
                    setTimeout(() => {
                        f === c.answer
                            ? (o('correct'), a((h) => h + 10))
                            : (o('wrong'), (p += 3e3)),
                            setTimeout(() => {
                                o('')
                            }, p)
                    }, 1500)
                },
                [u]
            ),
            g = N.useCallback(() => v(null), [v])
        function y() {
            i([]),
                a(0),
                n(() => e.sort(() => Math.random() - 0.5)),
                console.log(t)
        }
        return d
            ? (m === null &&
                  localStorage.setItem(
                      'HightScore',
                      JSON.stringify({ score: s })
                  ),
              m.score < s &&
                  (localStorage.removeItem('HightScore'),
                  localStorage.setItem(
                      'HightScore',
                      JSON.stringify({ score: s })
                  )),
              x.jsx('div', {
                  id: 'summary',
                  className: 'mt-16 max-md:my-16',
                  children: x.jsx(ex, { onStart: y, score: s }),
              }))
            : x.jsx(x.Fragment, {
                  children: x.jsx('div', {
                      className: 'pt-0 max-md:pt-0',
                      children: x.jsx(ZS, {
                          quiz: c,
                          onAnswer: v,
                          userAnswer: r[r.length - 1],
                          answerState: l,
                          onTimeout: g,
                      }),
                  }),
              })
    },
    nx = [
        {
            no: '01',
            plant: '大花咸豐草',
            img: '/img/IMG_NO01.png',
            question: '請問大花咸豐草的種子為何能附著在衣物或是動物身上?',
            options: ['有倒鉤', '有黏性', '會寄生', '有磁性'],
            answer: '有倒鉤',
            difficulty:
                '大花咸豐草的種子具有逆刺的冠毛，可附著於人畜身上，傳播至遠方',
        },
        {
            no: '02',
            plant: '大花咸豐草',
            img: '/img/IMG_NO01.png',
            question:
                '最初引入大花咸豐草是為了改善蜂農經濟情況，請問因此獲得了哪種別稱?',
            options: ['鬼針草', '錦州草', '同志草', '白花婆婆針'],
            answer: '錦州草',
            difficulty:
                '蜂農李錦洲從琉球引進了全年開花的蜜源植物白花鬼針草，台灣養蜂協會為了紀念他的貢獻將其取名為錦州草',
        },
        {
            no: '03',
            plant: '非洲鳳仙花',
            img: '/img/IMG_NO02.png',
            question:
                '非洲鳳仙花為園藝植物，卻被列為入侵種，請問他會造成什麼問題?',
            options: ['排擠植物', '慢性中毒', '倒刺傷人', '寄生植物'],
            answer: '排擠植物',
            difficulty:
                '非洲鳳仙花不會對人體造成傷害，卻因大量種植，在野外氾濫生長，排擠本地植物的生存空間',
        },
        {
            no: '04',
            plant: '非洲鳳仙花',
            img: '/img/IMG_NO02.png',
            question: '請問非洲鳳仙花的種子具有何種特別的傳播方式?',
            options: ['動物', '水流', '風力', '彈力'],
            answer: '彈力',
            difficulty:
                '非洲鳳仙花的蒴果成熟後，會爆裂而使種子彈出，可彈至3-5尺外',
        },
        {
            no: '05',
            plant: '巴西水竹草',
            img: '/img/IMG_NO03.png',
            question:
                '巴西水竹草在野外快速增加，被列為入侵種，請問是因為他如何生長?',
            options: ['匍匐', '直立', '纏繞', '攀援'],
            answer: '匍匐',
            difficulty:
                '巴西水竹草匍匐生長於其他植物上，令其無法生長，且可以斷裂生殖',
        },
        {
            no: '06',
            plant: '巴西水竹草',
            img: '/img/IMG_NO03.png',
            question:
                '巴西水竹草為園藝植物引入，葉子為其特徵之一，請問他的葉脈如何生長?',
            options: ['羽狀脈', '網狀脈', '掌狀脈', '平行脈'],
            answer: '平行脈',
            difficulty: '白花、平行脈、匍匐生長的莖是巴西水竹草最大的特徵',
        },
        {
            no: '07',
            plant: '小花蔓澤蘭',
            img: '/img/IMG_NO04.png',
            question: '小花蔓澤蘭因其危害而列為入侵種，請問他會造成甚麼問題?',
            options: ['人體過敏', '排斥植物', '纏繞植物', '寄生植物'],
            answer: '纏繞植物',
            difficulty:
                '小花蔓澤蘭藉由纏繞植物，阻礙植物光合作用，只要被覆蓋幾個月便會枯死',
        },
        {
            no: '08',
            plant: '小花蔓澤蘭',
            img: '/img/IMG_NO04.png',
            question: '小花蔓澤蘭為最危險的入侵種，請問何者不是他的別稱?',
            options: ['植物殺手', '綠癌', '生態殺手', '黃癌'],
            answer: '黃癌',
            difficulty:
                '小花蔓澤蘭有著「綠色殺手」、「植物殺手」或「綠癌」等稱號，並被列為世界百大入侵種',
        },
        {
            no: '09',
            plant: '水芙蓉',
            img: '/img/IMG_NO05.png',
            question: '水芙蓉透過大量繁殖覆蓋了水面，請問他用何種方式不斷繁殖?',
            options: ['斷裂繁殖', '分裂生殖', '走莖繁殖', '孢子繁殖'],
            answer: '走莖繁殖',
            difficulty:
                '水芙蓉的莖為走莖，每長出一條走莖，就會再新長出一個幼株，有驚人的無性繁殖能力',
        },
        {
            no: '10',
            plant: '水芙蓉',
            img: '/img/IMG_NO05.png',
            question: '水芙蓉最初作為觀賞植物和飼料引入，卻造成了何種問題??',
            options: ['阻塞河道', '寄生植物', '倒刺傷人', '過敏花粉'],
            answer: '阻塞河道',
            difficulty:
                '氾濫的水芙蓉會阻塞河道，並且腐爛後會消耗水中氧氣，危害生態',
        },
        {
            no: '11',
            plant: '布袋蓮',
            img: '/img/IMG_NO06.png',
            question: '布袋蓮最初作為觀賞植物和飼料引入，卻造成了何種問題?',
            options: ['水質缺氧', '寄生植物', '倒刺傷人', '過敏花粉'],
            answer: '水質缺氧',
            difficulty:
                '氾濫的布袋蓮會阻塞河道，並且腐爛後會消耗水中氧氣，危害生態',
        },
        {
            no: '12',
            plant: '布袋蓮',
            img: '/img/IMG_NO06.png',
            question: '布袋蓮最初作為觀賞植物和飼料引入，具有什麼特徵?',
            options: ['葉片布滿絨毛', '根固定水底', '葉柄膨大', '具有倒刺'],
            answer: '葉柄膨大',
            difficulty: '布袋蓮的葉柄膨大如氣囊狀，因此可漂浮於水面',
        },
        {
            no: '13',
            plant: '互花米草',
            img: '/img/IMG_NO07.png',
            question: '互花米草有溼地殺手之稱，請問他具有何種特點?',
            options: ['吸收水源', '地下根莖', '匍匐生長', '寄生植物'],
            answer: '地下根莖',
            difficulty:
                '互花米草的地下根莖可長達60公分，並抓住土壤，使濕地陸化，改變地貌',
        },
        {
            no: '14',
            plant: '互花米草',
            img: '/img/IMG_NO07.png',
            question:
                '互花米草最初有綠色長城之稱，後來卻演變為綠色沙漠，請問是因為造成了何種問題?',
            options: ['吸收水源', '阻塞河道', '具有倒刺', '改變地貌'],
            answer: '改變地貌',
            difficulty:
                '互花米草會排擠原生植物，改變濕地地貌，造成許多生物失去棲地與食物',
        },
        {
            no: '15',
            plant: '馬纓丹',
            img: '/img/IMG_NO08.png',
            question:
                '馬纓丹是觀賞植物，有多種顏色與別名，請問下列名稱何者不是他的稱號?',
            options: ['臭金鳳', '綿鼻公花', '五色梅', '七彩花'],
            answer: '七彩花',
            difficulty:
                '馬纓丹因色彩多變稱為五色梅、五彩花，客家人成為綿鼻公花，也有臭金鳳等別名',
        },
        {
            no: '16',
            plant: '馬纓丹',
            img: '/img/IMG_NO08.png',
            question: '馬纓丹屬於有毒植物，請問哪一個部位有毒?',
            options: ['枝葉', '根', '花朵', '莖'],
            answer: '枝葉',
            difficulty:
                '馬纓丹的枝葉及未成熟果實皆有毒，誤食會造成慢性中毒，嚴重會導致肝臟和腎臟衰竭',
        },
        {
            no: '17',
            plant: '紫花藿香薊',
            img: '/img/IMG_NO09.png',
            question:
                '紫花藿香薊與貓腥草外型相似，請問紫花藿香薊的葉子為何種形狀?',
            options: ['針形', '心形', '卵形', '倒卵形'],
            answer: '心形',
            difficulty: '紫花藿香薊的葉子為心形，貓腥草的葉子為卵形至橢圓形',
        },
        {
            no: '18',
            plant: '紫花藿香薊',
            img: '/img/IMG_NO09.png',
            question:
                '紫花藿香薊分布於平地、田邊和荒野中，請問他是如何傳播種子?',
            options: ['動物', '水流', '風力', '彈跳'],
            answer: '風力',
            difficulty:
                '紫花藿香薊的種子為針狀冠毛，成熟後會像蒲公英一樣隨風飄散',
        },
        {
            no: '19',
            plant: '貓腥草',
            img: '/img/IMG_NO10.png',
            question: '紫花藿香薊與貓腥草外型相似，請問貓腥草的葉子為何種形狀?',
            options: ['針形', '心形', '卵形', '倒卵形'],
            answer: '卵形',
            difficulty: '紫花藿香薊的葉子為心形，而貓腥草的葉子為卵形至橢圓形',
        },
        {
            no: '20',
            plant: '貓腥草',
            img: '/img/IMG_NO10.png',
            question:
                '紫花藿香薊與貓腥草外型相似，氣味有所不同，請問貓腥草的氣味如何?',
            options: ['特殊香味', '貓體腥臭', '刺激辣味', '腐爛臭味'],
            answer: '貓體腥臭',
            difficulty: '紫花藿香薊散發特殊香味，而貓腥草略帶貓體腥臭',
        },
        {
            no: '21',
            plant: '豬草',
            img: '/img/IMG_NO11.png',
            question: '豬草因其危害而列入入侵植物，請問他會造成甚麼問題?',
            options: ['慢性中毒', '排斥生物', '寄生植物', '花粉過敏'],
            answer: '花粉過敏',
            difficulty:
                '豬草每天可生產一百萬粒花粉，花粉如黃霧般散落，並引發過敏等症狀',
        },
        {
            no: '22',
            plant: '豬草',
            img: '/img/IMG_NO11.png',
            question:
                '豬草入侵濱海與荒野，並在開花時散發大量花粉，請問豬草何時開花?',
            options: ['三月', '六月', '八月', '十二月'],
            answer: '八月',
            difficulty:
                '豬草每年八月左右開花，並散發大量花粉導致過敏，會引發枯草熱、花粉症及其他呼吸道疾病',
        },
        {
            no: '23',
            plant: '美洲含羞草',
            img: '/img/IMG_NO12.png',
            question: '美洲含羞草生長在荒野中並列為入侵植物，請問他如何生長?',
            options: ['直立', '匍匐', '纏繞', '水中'],
            answer: '匍匐',
            difficulty:
                '美洲含羞草為匍匐生長的藤本植物，身上的倒刺會阻礙動物與人類的生存空間',
        },
        {
            no: '24',
            plant: '美洲含羞草',
            img: '/img/IMG_NO12.png',
            question: '美洲含羞草因其危害而列入入侵植物，請問他會造成甚麼問題?',
            options: ['倒刺傷人', '慢性中毒', '寄生植物', '阻塞河道'],
            answer: '倒刺傷人',
            difficulty:
                '美洲含羞草的莖條上有許多倒刺，容易使人受傷，且生命力強韌，需連根拔起',
        },
        {
            no: '25',
            plant: '銀膠菊',
            img: '/img/IMG_NO13.png',
            question: '銀膠菊因其危害而列入入侵植物，請問他會造成甚麼問題?',
            options: ['人體過敏', '倒刺傷人', '寄生植物', '阻塞河道'],
            answer: '人體過敏',
            difficulty:
                '銀膠菊除了對生態造成破壞外，還會威脅人體健康，花粉會引發人體過敏等症狀',
        },
        {
            no: '26',
            plant: '銀膠菊',
            img: '/img/IMG_NO13.png',
            question: '銀膠菊外表與滿天星相似，請問銀膠菊葉子的背面為何種顏色?',
            options: ['灰白色', '淡綠色', '淺黃色', '米白色'],
            answer: '淡綠色',
            difficulty: '銀膠菊葉子的背面為淡綠色，而滿天星葉子的背面為灰白色',
        },
        {
            no: '27',
            plant: '銀合歡',
            img: '/img/IMG_NO14.png',
            question: '銀合歡因其危害而列入入侵植物，請問他會造成甚麼問題?',
            options: ['人體過敏', '倒刺傷人', '排斥植物', '阻塞河道'],
            answer: '排斥植物',
            difficulty:
                '銀合歡具有一種含羞草毒的化學物質，會讓其他植物無法生長，甚至死亡',
        },
        {
            no: '28',
            plant: '銀合歡',
            img: '/img/IMG_NO14.png',
            question:
                '銀合歡在墾丁大量擴散成為威脅，但請問最初時何種原因而引入?',
            options: ['傳播花粉', '園藝觀賞', '保持水土', '木材燒柴'],
            answer: '木材燒柴',
            difficulty:
                '銀合歡最初是作為牲畜飼料與薪柴引入，但隨著時代演變荒廢後開始蔓延',
        },
        {
            no: '29',
            plant: '日本菟絲子',
            img: '/img/IMG_NO15.png',
            question: '日本菟絲子因其危害而列入入侵植物，請問他會造成甚麼問題?',
            options: ['人體過敏', '倒刺傷人', '寄生植物', '阻塞河道'],
            answer: '寄生植物',
            difficulty:
                '日本菟絲子能攀附及覆蓋在其他植物上，並用吸器Zㄋ吸收宿主養分，導致死亡',
        },
        {
            no: '30',
            plant: '日本菟絲子',
            img: '/img/IMG_NO15.png',
            question: '日本菟絲子寄生於植物身上時，請問他用何種部位吸收養分?',
            options: ['根', '莖', '葉', '果實'],
            answer: '莖',
            difficulty:
                '日本菟絲子沒有葉子與根，無法逕行光合作用，只能以莖的吸器吸收宿主養分',
        },
        {
            no: '31',
            plant: '外來種',
            img: '/img/IMG_NO01.png',
            question: '關於對外來種的防治方法，其中哪項是正確的?',
            options: ['廣泛宣傳與教育', '野外放生', '違法引進', '非法販售'],
            answer: '廣泛宣傳與教育',
            difficulty:
                '「預防勝於治療」-唯有大眾對外來種有相當認識與認知，外來種的議題才會受重視，外來種也才不會被隨意引入或運出',
        },
        {
            no: '32',
            plant: '外來種',
            img: '/img/IMG_NO04.png',
            question:
                '外來種是非自然分布的生物，經由人類有意或無意引入，請問可能會引發什麼問題?',
            options: ['生態破壞', '溫室效應', '自然災害', '海洋汙染'],
            answer: '生態破壞',
            difficulty:
                '部分外來種會對環境造成極大的破壞，包含原生種滅絕或是改變原本生態，也會造成經濟損失',
        },
    ],
    rx = () => {
        const [e, t] = N.useState(!1),
            r = nx.sort(() => Math.random() - 0.5)
        console.log(r.map((l) => l.no))
        function i() {
            t(() => !e)
        }
        return x.jsx(x.Fragment, {
            children: x.jsxs('menu', {
                className: 'my-0 p-0 w-full ',
                children: [
                    !e &&
                        x.jsx(x.Fragment, {
                            children: x.jsx('div', {
                                className:
                                    'bg-game-start bg-contain bg-fixed bg-no-repeat bg-center h-screen max-ss:h-4/5',
                                children: x.jsxs('div', {
                                    className: 'flex flex-col h-full bg-bgcB',
                                    children: [
                                        x.jsx('img', {
                                            alt: 'logo',
                                            src: '/img/IMG_logo03.png',
                                            className:
                                                'w-1/6 mt-48 mx-auto max-md:w-1/2 max-sss:mt-10',
                                        }),
                                        x.jsx('h1', {
                                            className:
                                                'mt-5 text-3xl font-[900] text-yy',
                                            children: '問 答 遊 戲',
                                        }),
                                        x.jsx('button', {
                                            onClick: i,
                                            className:
                                                'mt-20 max-ss:my-20 w-1/3 z-10 px-3 mx-auto shadow-2m hover:shadow-3m hover:text-yy',
                                            children: '開始遊戲',
                                        }),
                                    ],
                                }),
                            }),
                        }),
                    e && x.jsx(tx, { questions: r }),
                ],
            }),
        })
    },
    ix = () => {
        const [e, t] = N.useState(!1),
            n =
                'fixed ml-auto mt-auto w-1/5 bottom-20 right-0 max-sm:hidden hover:rotate-6 duration-300'
        function r() {
            t(() => !e)
        }
        return x.jsxs(x.Fragment, {
            children: [
                x.jsxs('div', {
                    className: 'my-28 mx-auto w-[60%] overflow-hidden ',
                    children: [
                        x.jsx('h1', {
                            className: 'text-3xl  ',
                            children: '關 於 我 們',
                        }),
                        x.jsx('p', {
                            className: 'mt-5 ',
                            children:
                                '最初是我們受綠鬣蜥氾濫的新聞啟發，但相比起會動的動物，腳下的植物更容易被人們所忽略，造成的影響同樣不容小覷，因次想讓更多人了解他們所帶來的威脅與知識',
                        }),
                        x.jsx('h1', {
                            className: 'text-3xl mt-20',
                            children: '外 來 入 侵 種',
                        }),
                        x.jsxs('p', {
                            className: ' mt-5 z-20 mb-20',
                            children: [
                                '隨著全球化的發展,有意或無意引進的外來物種越來越常見，其中一些造成負面影響即為「外來入侵種」',
                                x.jsx('br', {}),
                                '主要造成兩種負面影響，其一是對人類的影響，造成經濟損失或健康威脅。其二是對生態威脅，本土物種會被驅離或是淘汰，並造成生態災害',
                            ],
                        }),
                        x.jsxs('a', {
                            src: 'https://www.youtube.com/embed/GHFDb82kW8Q?si=Hrbh_kdNxkCDBqjH&controls=0',
                            onClick: r,
                            className: 'relative cursor-pointer',
                            children: [
                                x.jsx('img', {
                                    src: '/img/IMG_003.JPG',
                                    alt: '03',
                                    className:
                                        ' relative w-full h-[100%] hover:scale-105 duration-300',
                                }),
                                x.jsx('img', {
                                    src: '/img/IMG_play.png',
                                    className:
                                        'z-10 absolute top-[40%] right-[86%] w-1/4 hover:scale-105',
                                }),
                            ],
                        }),
                        x.jsx('h1', {
                            className: 'text-3xl mt-20 leading-[3.5rem]',
                            children: '天反時為災 。 地反物為妖',
                        }),
                        x.jsxs('p', {
                            className: 'mt-5 z-20',
                            children: [
                                '妖怪皆由草木或動物等轉變的，也是怪異或反常的事物的集合，源於人們對未知的恐懼與不解',
                                x.jsx('br', {}),
                                '透過認識與教育，了解並認識他們，揭開真面目，降妖除魔',
                            ],
                        }),
                        x.jsx('img', {
                            className: n,
                            src: '/img/IMG_NO08_3.png',
                            alt: '02',
                        }),
                    ],
                }),
                e &&
                    x.jsxs(Go, {
                        open: e,
                        children: [
                            x.jsx('button', {
                                className:
                                    ' absolute w-10 h-10 top-5 right-4 t text-4xl',
                                onClick: r,
                                children: 'X',
                            }),
                            x.jsx('iframe', {
                                src: 'https://www.youtube.com/embed/GHFDb82kW8Q?rel=0&hd=1&vq=hd720?si=Hrbh_kdNxkCDBqjH&controls=0',
                                title: 'YouTube video player',
                                allow: 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
                                className: 'mx-auto my-10 h-auto w-full',
                            }),
                        ],
                    }),
            ],
        })
    },
    uf = () => {
        const e = Fm()
        let t = '發生錯誤',
            n = '重新載入...'
        return (
            e.status === 500 && (n = JSON.parse(e.data).message),
            e.status === 404 &&
                ((t = '找不到網頁'), (n = '網頁可能已經移除或暫時無法使用')),
            x.jsxs(x.Fragment, {
                children: [
                    x.jsx(Lh, {}),
                    x.jsxs('div', {
                        className: 'error pt-20 h-screen',
                        children: [
                            x.jsx('img', {
                                className: 'w-1/2 mx-auto max-md:w-5/6',
                                src: 'img/IMG_005.jpg',
                            }),
                            x.jsxs('div', {
                                className: 'my-10',
                                children: [
                                    x.jsx('h1', {
                                        className: 'text-5xl mb-3',
                                        children: t,
                                    }),
                                    x.jsx('p', {
                                        className: 'text-2xl mt-8',
                                        children: n,
                                    }),
                                ],
                            }),
                            x.jsx('div', {
                                className: ' mb-20',
                                children: x.jsx(Jn, {
                                    to: '/',
                                    children: x.jsx(kh, { children: '首頁' }),
                                }),
                            }),
                        ],
                    }),
                    x.jsx(Mh, {}),
                ],
            })
        )
    },
    lx = ({ onShow: e, img: t, showModal: n }) =>
        x.jsx(x.Fragment, {
            children: x.jsx(Go, {
                open: n,
                children: x.jsxs('div', {
                    className: 'bg-content-bgc bg-contain w-full',
                    children: [
                        x.jsx('button', {
                            className:
                                ' absolute w-10 h-10 top-5 right-4 t text-4xl',
                            onClick: e,
                            children: 'X',
                        }),
                        x.jsx('img', {
                            src: t,
                            className: 'mx-auto p-8 h-full object-contain',
                        }),
                    ],
                }),
            }),
        }),
    ox = () => {
        const [e, t] = N.useState(!1),
            [n, r] = N.useState(''),
            i = [
                { img: './img/IMG_MO01.jpg', name: '大花咸豐草' },
                { img: './img/IMG_MO02.jpg', name: '巴西水竹草' },
                { img: './img/IMG_MO04.jpg', name: '水芙蓉' },
                { img: './img/IMG_MO12.jpg', name: '日本菟絲子' },
                { img: './img/IMG_MO10.jpg', name: '銀膠菊' },
                { img: './img/IMG_MO03.jpg', name: '小花蔓澤蘭' },
                { img: './img/IMG_MO07.jpg', name: '馬纓丹' },
                { img: './img/IMG_MO05.jpg', name: '布袋蓮' },
                { img: './img/IMG_MO06.jpg', name: '互花米草' },
                { img: './img/IMG_MO09.jpg', name: '美洲含羞草' },
                { img: './img/IMG_MO11.jpg', name: '銀合歡' },
                { img: './img/IMG_MO08.jpg', name: '豬草' },
            ]
        function l(o) {
            t(() => !e), r(o)
        }
        return x.jsxs(x.Fragment, {
            children: [
                x.jsx('div', {
                    className: 'flex flex-wrap justify-center my-20 mx-10',
                    children: i.map((o, s) =>
                        x.jsxs(
                            'button',
                            {
                                className: 'hover:text-yy',
                                onClick: () => l(s),
                                children: [
                                    x.jsx('div', {
                                        className:
                                            'p-12 m-10 bg-content-bgc rounded-xl shadow-2m hover:shadow-3m ',
                                        children: x.jsx('img', {
                                            id: 'FB',
                                            src: o.img,
                                            className: 'w-52 hover:text-yy',
                                        }),
                                    }),
                                    x.jsx('h1', {
                                        className: 'text-xl mb-5 hover:text-yy',
                                        children: o.name,
                                    }),
                                ],
                            },
                            s
                        )
                    ),
                }),
                e && x.jsx(lx, { onShow: l, showModal: e, img: i[n].img }),
            ],
        })
    },
    sx = B0([
        {
            path: '/',
            element: x.jsx(qS, {}),
            errorElement: x.jsx(uf, {}),
            children: [
                { index: !0, element: x.jsx(z1, {}) },
                {
                    path: '/plants',
                    id: 'plants-detail',
                    children: [
                        { index: !0, element: x.jsx(af, {}) },
                        { path: ':plantNo', element: x.jsx(af, {}) },
                    ],
                },
                { path: '/game', element: x.jsx(rx, {}) },
                { path: '/about', element: x.jsx(ix, {}) },
                { path: '/special', element: x.jsx(ox, {}) },
                { path: '/error', element: x.jsx(uf, {}) },
            ],
        },
    ])
Fs.createRoot(document.getElementById('root')).render(
    x.jsx(xe.StrictMode, {
        children: x.jsx(iS, { store: KS, children: x.jsx(K0, { router: sx }) }),
    })
)
